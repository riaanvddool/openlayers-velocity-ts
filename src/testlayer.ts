import TileLayer from 'ol/layer/Tile';
import ImageCanvasSource from 'ol/source/ImageCanvas';
import Stamen from 'ol/source/Stamen';


export default class TestLayer {

  private options: any;
  private _layer: any;
  private _map: any = null;

  constructor(options: any) {
    console.debug('TestLayer.constructor');
    this.options = {};

    for (var i in options) {
      this.options[i] = options[i];
    }
  }

  getMapLayer() {
    console.debug('TestLayer.getMapLayer');
    this._layer = this._layer || new TileLayer({
      source: new Stamen({
        layer: 'toner'
      })
    });
    console.debug('TestLayer.getMapLayer return');
    return this._layer;
  }

  addToMap(map: any) {
    console.debug('VelocityLayer.addToMap');
    map.addLayer(this.getMapLayer());
    this._map = map;
    console.debug('TestLayer.addToMap return');
  }


}
