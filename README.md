# openlayers-velocity-ts [![NPM version][npm-image]][npm-url]

This is an OpenLayers port of [leaflet-velocity-ts](https://github.com/0nza1101/leaflet-velocity-ts).

## Example use:
```javascript
let velocity = new VelocityLayer({

  displayValues: true,
  displayOptions: {
    velocityType: 'Wind',
    position: 'bottomleft',
    emptyString: 'No velocity data',
    angleConvention: 'bearingCW',
    displayPosition: 'bottomleft',
    displayEmptyString: 'No velocity data',
    speedUnit: 'm/s'
  },
  data: data, // see demo/*.json, or wind-js-server for example data service

  // OPTIONAL
  //minVelocity: 0,          // used to align color scale
  maxVelocity: 10,         // used to align color scale
  maxVelocity: 10,
});

velocity.addToMap(map);
```

## Build new lib/openlayers-velocity.js file:
```bash
npm run build
```

## Debug layer add issue:
```javascript
let velocity = new TestLayer({});

velocity.addToMap(map);
```
## Browser console error:
```
TypeError: a.dg is not a function[Learn More]
```

## License
MIT License (MIT)


[npm-image]: https://badge.fury.io/js/openlayers-velocity-ts.svg
[npm-url]: https://www.npmjs.com/package/openlayers-velocity-ts
