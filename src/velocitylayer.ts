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

// import CanvasLayer from './L.CanvasLayer';
// import VelocityControl from './L.ControlVelocity'

// declare var L: any;


// const L_CanvasLayer = (L.Layer ? L.Layer : L.Class).extend(new CanvasLayer());
// const L_canvasLayer = function() {
//   return new L_CanvasLayer();
// };

// const L_ControlVelocity = (L.Control).extend(new VelocityControl);
// const L_controlVelocity = function() {
//   return new L_ControlVelocity();
// };



export default class VelocityLayer {

  private options: any;
  private _map: any = null;
  private _canvas: any = null;
  private _canvasLayer: any = null;
  private _windy: Windy = null;
  private _context: any = null;
  private _displayTimeout: number = 0;
  private _mouseControl: any  = null;

  constructor(options: any) {
    console.debug('VelocityLayer.constructor');
    this.options = {
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
    };
  // }

  // initialize(options: any) {
    console.debug('VelocityLayer.initialize');
    for (var i in options) {
      this.options[i] = options[i];
    }
  }

  _canvasFunction(extent: any, resolution: any, pixelRatio: any, size: any, projection: any) {
    console.debug('VelocityLayer.canvasFunction');
    // var canvas = document.createElement('canvas');
    this._canvas.setAttribute('width', size[0]);
    this._canvas.setAttribute('height', size[1]);
    this._context = this._canvas.getContext('2d');
    // Canvas extent is different than map extent, so compute delta between 
    // left-top of map and canvas extent.
    // var mapExtent = map.getView().calculateExtent(map.getSize())
    // var canvasOrigin = map.getPixelFromCoordinate([extent[0], extent[3]]);
    // var mapOrigin = map.getPixelFromCoordinate([mapExtent[0], mapExtent[3]]);
    // var delta = [mapOrigin[0]-canvasOrigin[0], mapOrigin[1]-canvasOrigin[1]]

    return this._canvas;
  }

  getMapLayer() {
    console.debug('VelocityLayer.getMapLayer');
    this._canvas = this._canvas || document.createElement('canvas');
    console.debug('VelocityLayer.getMapLayer 1');
    this._canvasLayer = this._canvasLayer || new olImageLayer({
      source: new olImageCanvasSource({
        canvasFunction: this._canvasFunction,
        projection: 'EPSG:3857'
      })
    });
    console.debug('VelocityLayer.getMapLayer return');
    return this._canvasLayer;
  }

  addToMap(map: any) {
    console.debug('VelocityLayer.addToMap');
    map.addLayer(this.getMapLayer());
    this._map = map;
    this._drawWindy();
  }

  removeFromMap(map: any) {
    console.debug('VelocityLayer.removeFromMap');
    this._destroyWind();
    map.removeLayer(this._canvasLayer);
  }

  setData(data: any) {
    console.debug('VelocityLayer.setData');
    this.options.data = data;

    if (this._windy) {
      this._windy.setData(data);
      this._clearAndRestart();
    }
  }

  _initWindy() {
    console.debug('VelocityLayer._initWindy');

    // windy object, copy options
    const options = (<any>Object).assign({ canvas: this._canvas }, this.options);
    this._windy = new Windy(options);

    //TODO : Figure out why the event is called after the layer is removed
    this._map.on('dragstart', () => {
      if(this._windy)
        this._windy.stop();
    });

    this._map.on('dragend', () => {
      this._clearAndRestart();
    });

    this._map.on('zoomstart', () => {
      if(this._windy)
        this._windy.stop();
    });

    this._map.on('zoomend', () => {
      this._clearAndRestart();
    });
    this._map.on('resize', () => {
      this._clearWind();
    });

    // this._initMouseHandler();
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
    console.debug('VelocityLayer._startWindy');

    var mapSize = this._map.getSize();
    var mapExtent = this._map.getView().calculateExtent(mapSize);

    var extentLL = proj.transformExtent(mapExtent, 'EPSG:3857', 'EPSG:4326');

    this._windy.start(
      new Layer(
        new MapBound(
          extentLL[3]/180*Math.PI, // maxy (north)
          extentLL[2]/180*Math.PI, // maxx (east)
          extentLL[1]/180*Math.PI, // miny (south)
          extentLL[0]/180*Math.PI // minx (west)
        ),
        new CanvasBound(0, 0, mapSize[0], mapSize[1])
      )
    );
  }

  _drawWindy() {
    console.debug('VelocityLayer._drawWindy');
    
    if (!this._windy) {
      this._initWindy();
      this._drawWindy();
      return;
    }

    if (!this.options.data) {
      console.debug('VelocityLayer._drawWindy: no data!');
      return;
    }

    console.debug('VelocityLayer._drawWindy: 1');
    var self = this;
    console.debug('VelocityLayer._drawWindy: 2');
    if (this._displayTimeout) clearTimeout(self._displayTimeout);
    console.debug('VelocityLayer._drawWindy: 3');
    this._displayTimeout = setTimeout(function() {
      console.debug('VelocityLayer._drawWindy: 4');
      self._startWindy();
      console.debug('VelocityLayer._drawWindy: 5');
    }, 150); // showing velocity is delayed
    console.debug('VelocityLayer._drawWindy: 6');
    
  }

  _clearAndRestart() {
    console.debug('VelocityLayer._clearAndRestart');

    if (this._context) this._context.clearRect(0, 0, 3000, 3000);
    if (this._windy) this._startWindy();
  }

  _clearWind() {
    console.debug('VelocityLayer._clearWind');
    if (this._windy) this._windy.stop();
    if (this._context) this._context.clearRect(0, 0, 3000, 3000);
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





