import Windy from './windy';
import CanvasBound from './canvasBound'
import MapBound from './mapBound';
import Layer from './layer';
import olImageLayer from 'ol/layer/image';
import olTileLayer from 'ol/layer/tile';
import olImageCanvasSource from 'ol/source/imagecanvas';
import olStamenSource from 'ol/source/stamen';
declare function require(name:string):any;
const proj = (<any>require('ol/proj')).default;
// Fix: https://github.com/openlayers/openlayers/issues/8037
//import { transformExtent } from 'ol/proj';

export default class VelocityLayer {

  private options: any;
  private _map: any = null;
  private _canvas: any = null;
  private _canvasExtent: any = null;
  private _canvasSize: any = null;
  private _canvasLayer: any = null;
  private _windy: Windy = null;
  private _context: any = null;
  private _displayTimeout: number = 0;
  private _mouseControl: any  = null;

  constructor(options: any) {
    console.debug('VelocityLayer.constructor');

    this.options = (<any>Object).assign({
      displayValues: true,
      displayOptions: {
        velocityType: 'Velocity',
        position: 'bottomleft',
        emptyString: 'No velocity data',
        angleConvention: 'bearingCCW',
        speedUnit: 'm/s'
      },
      maxVelocity: 10, // used to align color scale
      colorScale: null,
      data: null
    }, options || {});

    console.debug(this.options);

  }

  _canvasFunction(extent: any, resolution: any, pixelRatio: any, size: any, projection: any) {
    console.debug('VelocityLayer.canvasFunction');
    console.debug('extent: ' + extent + ' | resolution: ' + resolution + ' | pixelRatio: ' + pixelRatio + ' | size: ' + size );
    this._canvas = this._canvas || document.createElement('canvas');
    this._canvas.setAttribute('width', size[0]);
    this._canvas.setAttribute('height', size[1]);
    this._context = this._canvas.getContext('2d');
    this._canvasExtent = extent;
    this._canvasSize = size;

    this._restartWindy()

    return this._canvas;
  }

  getMapLayer() {
    this._canvasLayer = this._canvasLayer || new olImageLayer({
      source: new olImageCanvasSource({
        canvasFunction: this._canvasFunction.bind(this),
        projection: 'EPSG:3857'
      })
    });
    return this._canvasLayer;
  }

  addToMap(map: any, canvas: any = null) {
    console.debug('VelocityLayer.addToMap');
    this._canvas = canvas || this._canvas || document.createElement('canvas');
    this._map = map;
    this._map.addLayer(this.getMapLayer());
    this._startWindy();
  }

  removeFromMap() {
    console.debug('VelocityLayer.removeFromMap');
    if (!this._map) {
      console.log('VelocityLayer.removeFromMap: No map!');
      return;
    }
    this._destroyWind();
    this._map.removeLayer(this._canvasLayer);
  }

  setData(data: any) {
    console.debug('VelocityLayer.setData');
    this.options.data = data;

    if (this._windy) {
      this._windy.setData(data);
      if (this._canvasLayer) 
        this._canvasLayer.changed()
    }
  }

  _initWindy() {
    console.debug('VelocityLayer._initWindy');
    this._canvas = this._canvas || document.createElement('canvas');

    // windy object, copy options
    const options = (<any>Object).assign({}, this.options, {
        canvas: this._canvas
    });
    this._windy = new Windy(options);

    // this._initMouseHandler();
  }

  _canvasLayer_changed(){
    this._canvasLayer.changed()
  }

  // _initMouseHandler() {
  //   if (!this._mouseControl && this.options.displayValues) {
  //     var options = this.options.displayOptions || {};
  //     options['leafletVelocity'] = this;
  //     this._mouseControl = L_controlVelocity();
  //     this._mouseControl.setWindy(this._windy);
  //     this._mouseControl.setOptions(this.options.displayOptions);
  //     this._mouseControl.addTo(this._map);
  //   }
  // }

  _startWindy() {
    // console.debug('VelocityLayer._startWindy');

    if (!this._windy) {
      this._initWindy();
      this._startWindy();
      return;
    }

    if (!this.options.data) {
      console.debug('VelocityLayer._startWindy: no data!');
      return;
    }

    if (this._displayTimeout) 
      clearTimeout(this._displayTimeout);

    this._displayTimeout = setTimeout(() => {
      var mapSize = this._map.getSize();
      console.debug('mapSize: ' + mapSize);
      console.debug('canvasSize: ' + this._canvasSize);
      
      var extent = this._map.getView().calculateExtent(this._canvasSize);
      var extentLL = proj.transformExtent(extent, 'EPSG:3857', 'EPSG:4326');
      console.debug('extentLL' + extentLL);
      console.debug('--------------------------');

      this._windy.start(
        new Layer(
          new MapBound(
            extentLL[3], // maxy (north)
            extentLL[2], // maxx (east)
            extentLL[1], // miny (south)
            extentLL[0]  // minx (west)
          ),
          new CanvasBound(0, 0, this._canvasSize[0], this._canvasSize[1])
        )
      );
    }, 150); // showing velocity delayed while layer is being added to the map
  }

  _restartWindy() {
    //console.debug('VelocityLayer._restartWindy');
    if (this._windy) {
      this._windy.stop();
    }
    this._startWindy();
  }

  _destroyWind() {
    console.debug('VelocityLayer._destroyWind');
    if (this._displayTimeout)
      clearTimeout(this._displayTimeout);
    if (this._windy)
      this._windy.stop();
    if (this._context)
      this._context.clearRect(0, 0, 3000, 3000);
    // if (this._mouseControl)
    //   this._map.removeControl(this._mouseControl);
    // this._mouseControl = null;
    this._windy = null;
    // this._map.removeLayer(this._canvasLayer);
  }

}





