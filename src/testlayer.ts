import olTileLayer from 'ol/layer/tile';
import olImageCanvasSource from 'ol/source/imagecanvas';
import olStamenSource from 'ol/source/stamen';


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
    this._layer = this._layer || new olTileLayer({
      source: new olStamenSource({
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