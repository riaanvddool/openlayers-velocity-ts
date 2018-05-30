/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _ol_ = {};


/**
 * Constants defined with the define tag cannot be changed in application
 * code, but can be set at compile time.
 * Some reduce the size of the build in advanced compile mode.
 */


/**
 * @define {boolean} Assume touch.  Default is `false`.
 */
_ol_.ASSUME_TOUCH = false;


/**
 * TODO: rename this to something having to do with tile grids
 * see https://github.com/openlayers/openlayers/issues/2076
 * @define {number} Default maximum zoom for default tile grids.
 */
_ol_.DEFAULT_MAX_ZOOM = 42;


/**
 * @define {number} Default min zoom level for the map view.  Default is `0`.
 */
_ol_.DEFAULT_MIN_ZOOM = 0;


/**
 * @define {number} Default maximum allowed threshold  (in pixels) for
 *     reprojection triangulation. Default is `0.5`.
 */
_ol_.DEFAULT_RASTER_REPROJECTION_ERROR_THRESHOLD = 0.5;


/**
 * @define {number} Default tile size.
 */
_ol_.DEFAULT_TILE_SIZE = 256;


/**
 * @define {string} Default WMS version.
 */
_ol_.DEFAULT_WMS_VERSION = '1.3.0';


/**
 * @define {boolean} Enable the Canvas renderer.  Default is `true`. Setting
 *     this to false at compile time in advanced mode removes all code
 *     supporting the Canvas renderer from the build.
 */
_ol_.ENABLE_CANVAS = true;


/**
 * @define {boolean} Enable integration with the Proj4js library.  Default is
 *     `true`.
 */
_ol_.ENABLE_PROJ4JS = true;


/**
 * @define {boolean} Enable automatic reprojection of raster sources. Default is
 *     `true`.
 */
_ol_.ENABLE_RASTER_REPROJECTION = true;


/**
 * @define {boolean} Enable the WebGL renderer.  Default is `true`. Setting
 *     this to false at compile time in advanced mode removes all code
 *     supporting the WebGL renderer from the build.
 */
_ol_.ENABLE_WEBGL = true;


/**
 * @define {boolean} Include debuggable shader sources.  Default is `true`.
 *     This should be set to `false` for production builds (if `ol.ENABLE_WEBGL`
 *     is `true`).
 */
_ol_.DEBUG_WEBGL = true;


/**
 * @define {number} The size in pixels of the first atlas image. Default is
 * `256`.
 */
_ol_.INITIAL_ATLAS_SIZE = 256;


/**
 * @define {number} The maximum size in pixels of atlas images. Default is
 * `-1`, meaning it is not used (and `ol.WEBGL_MAX_TEXTURE_SIZE` is
 * used instead).
 */
_ol_.MAX_ATLAS_SIZE = -1;


/**
 * @define {number} Maximum mouse wheel delta.
 */
_ol_.MOUSEWHEELZOOM_MAXDELTA = 1;


/**
 * @define {number} Maximum width and/or height extent ratio that determines
 * when the overview map should be zoomed out.
 */
_ol_.OVERVIEWMAP_MAX_RATIO = 0.75;


/**
 * @define {number} Minimum width and/or height extent ratio that determines
 * when the overview map should be zoomed in.
 */
_ol_.OVERVIEWMAP_MIN_RATIO = 0.1;


/**
 * @define {number} Maximum number of source tiles for raster reprojection of
 *     a single tile.
 *     If too many source tiles are determined to be loaded to create a single
 *     reprojected tile the browser can become unresponsive or even crash.
 *     This can happen if the developer defines projections improperly and/or
 *     with unlimited extents.
 *     If too many tiles are required, no tiles are loaded and
 *     `ol.TileState.ERROR` state is set. Default is `100`.
 */
_ol_.RASTER_REPROJECTION_MAX_SOURCE_TILES = 100;


/**
 * @define {number} Maximum number of subdivision steps during raster
 *     reprojection triangulation. Prevents high memory usage and large
 *     number of proj4 calls (for certain transformations and areas).
 *     At most `2*(2^this)` triangles are created for each triangulated
 *     extent (tile/image). Default is `10`.
 */
_ol_.RASTER_REPROJECTION_MAX_SUBDIVISION = 10;


/**
 * @define {number} Maximum allowed size of triangle relative to world width.
 *     When transforming corners of world extent between certain projections,
 *     the resulting triangulation seems to have zero error and no subdivision
 *     is performed.
 *     If the triangle width is more than this (relative to world width; 0-1),
 *     subdivison is forced (up to `ol.RASTER_REPROJECTION_MAX_SUBDIVISION`).
 *     Default is `0.25`.
 */
_ol_.RASTER_REPROJECTION_MAX_TRIANGLE_WIDTH = 0.25;


/**
 * @define {number} Tolerance for geometry simplification in device pixels.
 */
_ol_.SIMPLIFY_TOLERANCE = 0.5;


/**
 * @define {number} Texture cache high water mark.
 */
_ol_.WEBGL_TEXTURE_CACHE_HIGH_WATER_MARK = 1024;


/**
 * @define {string} OpenLayers version.
 */
_ol_.VERSION = 'v4.6.5';


/**
 * The maximum supported WebGL texture size in pixels. If WebGL is not
 * supported, the value is set to `undefined`.
 * @const
 * @type {number|undefined}
 */
_ol_.WEBGL_MAX_TEXTURE_SIZE; // value is set in `ol.has`


/**
 * List of supported WebGL extensions.
 * @const
 * @type {Array.<string>}
 */
_ol_.WEBGL_EXTENSIONS; // value is set in `ol.has`


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * Usage:
 *
 *     function ParentClass(a, b) { }
 *     ParentClass.prototype.foo = function(a) { }
 *
 *     function ChildClass(a, b, c) {
 *       // Call parent constructor
 *       ParentClass.call(this, a, b);
 *     }
 *     ol.inherits(ChildClass, ParentClass);
 *
 *     var child = new ChildClass('a', 'b', 'see');
 *     child.foo(); // This works.
 *
 * @param {!Function} childCtor Child constructor.
 * @param {!Function} parentCtor Parent constructor.
 * @function
 * @api
 */
_ol_.inherits = function(childCtor, parentCtor) {
  childCtor.prototype = Object.create(parentCtor.prototype);
  childCtor.prototype.constructor = childCtor;
};


/**
 * A reusable function, used e.g. as a default for callbacks.
 *
 * @return {undefined} Nothing.
 */
_ol_.nullFunction = function() {};


/**
 * Gets a unique ID for an object. This mutates the object so that further calls
 * with the same object as a parameter returns the same value. Unique IDs are generated
 * as a strictly increasing sequence. Adapted from goog.getUid.
 *
 * @param {Object} obj The object to get the unique ID for.
 * @return {number} The unique ID for the object.
 */
_ol_.getUid = function(obj) {
  return obj.ol_uid ||
      (obj.ol_uid = ++_ol_.uidCounter_);
};


/**
 * Counter for getUid.
 * @type {number}
 * @private
 */
_ol_.uidCounter_ = 0;
/* harmony default export */ __webpack_exports__["a"] = (_ol_);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__asserts_js__ = __webpack_require__(9);

var _ol_math_ = {};


/**
 * Takes a number and clamps it to within the provided bounds.
 * @param {number} value The input number.
 * @param {number} min The minimum value to return.
 * @param {number} max The maximum value to return.
 * @return {number} The input number if it is within bounds, or the nearest
 *     number within the bounds.
 */
_ol_math_.clamp = function(value, min, max) {
  return Math.min(Math.max(value, min), max);
};


/**
 * Return the hyperbolic cosine of a given number. The method will use the
 * native `Math.cosh` function if it is available, otherwise the hyperbolic
 * cosine will be calculated via the reference implementation of the Mozilla
 * developer network.
 *
 * @param {number} x X.
 * @return {number} Hyperbolic cosine of x.
 */
_ol_math_.cosh = (function() {
  // Wrapped in a iife, to save the overhead of checking for the native
  // implementation on every invocation.
  var cosh;
  if ('cosh' in Math) {
    // The environment supports the native Math.cosh function, use it…
    cosh = Math.cosh;
  } else {
    // … else, use the reference implementation of MDN:
    cosh = function(x) {
      var y = Math.exp(x);
      return (y + 1 / y) / 2;
    };
  }
  return cosh;
}());


/**
 * @param {number} x X.
 * @return {number} The smallest power of two greater than or equal to x.
 */
_ol_math_.roundUpToPowerOfTwo = function(x) {
  __WEBPACK_IMPORTED_MODULE_0__asserts_js__["a" /* default */].assert(0 < x, 29); // `x` must be greater than `0`
  return Math.pow(2, Math.ceil(Math.log(x) / Math.LN2));
};


/**
 * Returns the square of the closest distance between the point (x, y) and the
 * line segment (x1, y1) to (x2, y2).
 * @param {number} x X.
 * @param {number} y Y.
 * @param {number} x1 X1.
 * @param {number} y1 Y1.
 * @param {number} x2 X2.
 * @param {number} y2 Y2.
 * @return {number} Squared distance.
 */
_ol_math_.squaredSegmentDistance = function(x, y, x1, y1, x2, y2) {
  var dx = x2 - x1;
  var dy = y2 - y1;
  if (dx !== 0 || dy !== 0) {
    var t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
    if (t > 1) {
      x1 = x2;
      y1 = y2;
    } else if (t > 0) {
      x1 += dx * t;
      y1 += dy * t;
    }
  }
  return _ol_math_.squaredDistance(x, y, x1, y1);
};


/**
 * Returns the square of the distance between the points (x1, y1) and (x2, y2).
 * @param {number} x1 X1.
 * @param {number} y1 Y1.
 * @param {number} x2 X2.
 * @param {number} y2 Y2.
 * @return {number} Squared distance.
 */
_ol_math_.squaredDistance = function(x1, y1, x2, y2) {
  var dx = x2 - x1;
  var dy = y2 - y1;
  return dx * dx + dy * dy;
};


/**
 * Solves system of linear equations using Gaussian elimination method.
 *
 * @param {Array.<Array.<number>>} mat Augmented matrix (n x n + 1 column)
 *                                     in row-major order.
 * @return {Array.<number>} The resulting vector.
 */
_ol_math_.solveLinearSystem = function(mat) {
  var n = mat.length;

  for (var i = 0; i < n; i++) {
    // Find max in the i-th column (ignoring i - 1 first rows)
    var maxRow = i;
    var maxEl = Math.abs(mat[i][i]);
    for (var r = i + 1; r < n; r++) {
      var absValue = Math.abs(mat[r][i]);
      if (absValue > maxEl) {
        maxEl = absValue;
        maxRow = r;
      }
    }

    if (maxEl === 0) {
      return null; // matrix is singular
    }

    // Swap max row with i-th (current) row
    var tmp = mat[maxRow];
    mat[maxRow] = mat[i];
    mat[i] = tmp;

    // Subtract the i-th row to make all the remaining rows 0 in the i-th column
    for (var j = i + 1; j < n; j++) {
      var coef = -mat[j][i] / mat[i][i];
      for (var k = i; k < n + 1; k++) {
        if (i == k) {
          mat[j][k] = 0;
        } else {
          mat[j][k] += coef * mat[i][k];
        }
      }
    }
  }

  // Solve Ax=b for upper triangular matrix A (mat)
  var x = new Array(n);
  for (var l = n - 1; l >= 0; l--) {
    x[l] = mat[l][n] / mat[l][l];
    for (var m = l - 1; m >= 0; m--) {
      mat[m][n] -= mat[m][l] * x[l];
    }
  }
  return x;
};


/**
 * Converts radians to to degrees.
 *
 * @param {number} angleInRadians Angle in radians.
 * @return {number} Angle in degrees.
 */
_ol_math_.toDegrees = function(angleInRadians) {
  return angleInRadians * 180 / Math.PI;
};


/**
 * Converts degrees to radians.
 *
 * @param {number} angleInDegrees Angle in degrees.
 * @return {number} Angle in radians.
 */
_ol_math_.toRadians = function(angleInDegrees) {
  return angleInDegrees * Math.PI / 180;
};

/**
 * Returns the modulo of a / b, depending on the sign of b.
 *
 * @param {number} a Dividend.
 * @param {number} b Divisor.
 * @return {number} Modulo.
 */
_ol_math_.modulo = function(a, b) {
  var r = a % b;
  return r * b < 0 ? r + b : r;
};

/**
 * Calculates the linearly interpolated value of x between a and b.
 *
 * @param {number} a Number
 * @param {number} b Number
 * @param {number} x Value to be interpolated.
 * @return {number} Interpolated value.
 */
_ol_math_.lerp = function(a, b, x) {
  return a + x * (b - a);
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_math_);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @enum {string}
 * @const
 */
var _ol_events_EventType_ = {
  /**
   * Generic change event. Triggered when the revision counter is increased.
   * @event ol.events.Event#change
   * @api
   */
  CHANGE: 'change',

  CLEAR: 'clear',
  CLICK: 'click',
  DBLCLICK: 'dblclick',
  DRAGENTER: 'dragenter',
  DRAGOVER: 'dragover',
  DROP: 'drop',
  ERROR: 'error',
  KEYDOWN: 'keydown',
  KEYPRESS: 'keypress',
  LOAD: 'load',
  MOUSEDOWN: 'mousedown',
  MOUSEMOVE: 'mousemove',
  MOUSEOUT: 'mouseout',
  MOUSEUP: 'mouseup',
  MOUSEWHEEL: 'mousewheel',
  MSPOINTERDOWN: 'MSPointerDown',
  RESIZE: 'resize',
  TOUCHSTART: 'touchstart',
  TOUCHMOVE: 'touchmove',
  TOUCHEND: 'touchend',
  WHEEL: 'wheel'
};

/* harmony default export */ __webpack_exports__["a"] = (_ol_events_EventType_);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__asserts_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__extent_corner_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__ = __webpack_require__(54);



var _ol_extent_ = {};


/**
 * Build an extent that includes all given coordinates.
 *
 * @param {Array.<ol.Coordinate>} coordinates Coordinates.
 * @return {ol.Extent} Bounding extent.
 * @api
 */
_ol_extent_.boundingExtent = function(coordinates) {
  var extent = _ol_extent_.createEmpty();
  for (var i = 0, ii = coordinates.length; i < ii; ++i) {
    _ol_extent_.extendCoordinate(extent, coordinates[i]);
  }
  return extent;
};


/**
 * @param {Array.<number>} xs Xs.
 * @param {Array.<number>} ys Ys.
 * @param {ol.Extent=} opt_extent Destination extent.
 * @private
 * @return {ol.Extent} Extent.
 */
_ol_extent_.boundingExtentXYs_ = function(xs, ys, opt_extent) {
  var minX = Math.min.apply(null, xs);
  var minY = Math.min.apply(null, ys);
  var maxX = Math.max.apply(null, xs);
  var maxY = Math.max.apply(null, ys);
  return _ol_extent_.createOrUpdate(minX, minY, maxX, maxY, opt_extent);
};


/**
 * Return extent increased by the provided value.
 * @param {ol.Extent} extent Extent.
 * @param {number} value The amount by which the extent should be buffered.
 * @param {ol.Extent=} opt_extent Extent.
 * @return {ol.Extent} Extent.
 * @api
 */
_ol_extent_.buffer = function(extent, value, opt_extent) {
  if (opt_extent) {
    opt_extent[0] = extent[0] - value;
    opt_extent[1] = extent[1] - value;
    opt_extent[2] = extent[2] + value;
    opt_extent[3] = extent[3] + value;
    return opt_extent;
  } else {
    return [
      extent[0] - value,
      extent[1] - value,
      extent[2] + value,
      extent[3] + value
    ];
  }
};


/**
 * Creates a clone of an extent.
 *
 * @param {ol.Extent} extent Extent to clone.
 * @param {ol.Extent=} opt_extent Extent.
 * @return {ol.Extent} The clone.
 */
_ol_extent_.clone = function(extent, opt_extent) {
  if (opt_extent) {
    opt_extent[0] = extent[0];
    opt_extent[1] = extent[1];
    opt_extent[2] = extent[2];
    opt_extent[3] = extent[3];
    return opt_extent;
  } else {
    return extent.slice();
  }
};


/**
 * @param {ol.Extent} extent Extent.
 * @param {number} x X.
 * @param {number} y Y.
 * @return {number} Closest squared distance.
 */
_ol_extent_.closestSquaredDistanceXY = function(extent, x, y) {
  var dx, dy;
  if (x < extent[0]) {
    dx = extent[0] - x;
  } else if (extent[2] < x) {
    dx = x - extent[2];
  } else {
    dx = 0;
  }
  if (y < extent[1]) {
    dy = extent[1] - y;
  } else if (extent[3] < y) {
    dy = y - extent[3];
  } else {
    dy = 0;
  }
  return dx * dx + dy * dy;
};


/**
 * Check if the passed coordinate is contained or on the edge of the extent.
 *
 * @param {ol.Extent} extent Extent.
 * @param {ol.Coordinate} coordinate Coordinate.
 * @return {boolean} The coordinate is contained in the extent.
 * @api
 */
_ol_extent_.containsCoordinate = function(extent, coordinate) {
  return _ol_extent_.containsXY(extent, coordinate[0], coordinate[1]);
};


/**
 * Check if one extent contains another.
 *
 * An extent is deemed contained if it lies completely within the other extent,
 * including if they share one or more edges.
 *
 * @param {ol.Extent} extent1 Extent 1.
 * @param {ol.Extent} extent2 Extent 2.
 * @return {boolean} The second extent is contained by or on the edge of the
 *     first.
 * @api
 */
_ol_extent_.containsExtent = function(extent1, extent2) {
  return extent1[0] <= extent2[0] && extent2[2] <= extent1[2] &&
      extent1[1] <= extent2[1] && extent2[3] <= extent1[3];
};


/**
 * Check if the passed coordinate is contained or on the edge of the extent.
 *
 * @param {ol.Extent} extent Extent.
 * @param {number} x X coordinate.
 * @param {number} y Y coordinate.
 * @return {boolean} The x, y values are contained in the extent.
 * @api
 */
_ol_extent_.containsXY = function(extent, x, y) {
  return extent[0] <= x && x <= extent[2] && extent[1] <= y && y <= extent[3];
};


/**
 * Get the relationship between a coordinate and extent.
 * @param {ol.Extent} extent The extent.
 * @param {ol.Coordinate} coordinate The coordinate.
 * @return {number} The relationship (bitwise compare with
 *     ol.extent.Relationship).
 */
_ol_extent_.coordinateRelationship = function(extent, coordinate) {
  var minX = extent[0];
  var minY = extent[1];
  var maxX = extent[2];
  var maxY = extent[3];
  var x = coordinate[0];
  var y = coordinate[1];
  var relationship = __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].UNKNOWN;
  if (x < minX) {
    relationship = relationship | __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].LEFT;
  } else if (x > maxX) {
    relationship = relationship | __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].RIGHT;
  }
  if (y < minY) {
    relationship = relationship | __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].BELOW;
  } else if (y > maxY) {
    relationship = relationship | __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].ABOVE;
  }
  if (relationship === __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].UNKNOWN) {
    relationship = __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].INTERSECTING;
  }
  return relationship;
};


/**
 * Create an empty extent.
 * @return {ol.Extent} Empty extent.
 * @api
 */
_ol_extent_.createEmpty = function() {
  return [Infinity, Infinity, -Infinity, -Infinity];
};


/**
 * Create a new extent or update the provided extent.
 * @param {number} minX Minimum X.
 * @param {number} minY Minimum Y.
 * @param {number} maxX Maximum X.
 * @param {number} maxY Maximum Y.
 * @param {ol.Extent=} opt_extent Destination extent.
 * @return {ol.Extent} Extent.
 */
_ol_extent_.createOrUpdate = function(minX, minY, maxX, maxY, opt_extent) {
  if (opt_extent) {
    opt_extent[0] = minX;
    opt_extent[1] = minY;
    opt_extent[2] = maxX;
    opt_extent[3] = maxY;
    return opt_extent;
  } else {
    return [minX, minY, maxX, maxY];
  }
};


/**
 * Create a new empty extent or make the provided one empty.
 * @param {ol.Extent=} opt_extent Extent.
 * @return {ol.Extent} Extent.
 */
_ol_extent_.createOrUpdateEmpty = function(opt_extent) {
  return _ol_extent_.createOrUpdate(
      Infinity, Infinity, -Infinity, -Infinity, opt_extent);
};


/**
 * @param {ol.Coordinate} coordinate Coordinate.
 * @param {ol.Extent=} opt_extent Extent.
 * @return {ol.Extent} Extent.
 */
_ol_extent_.createOrUpdateFromCoordinate = function(coordinate, opt_extent) {
  var x = coordinate[0];
  var y = coordinate[1];
  return _ol_extent_.createOrUpdate(x, y, x, y, opt_extent);
};


/**
 * @param {Array.<ol.Coordinate>} coordinates Coordinates.
 * @param {ol.Extent=} opt_extent Extent.
 * @return {ol.Extent} Extent.
 */
_ol_extent_.createOrUpdateFromCoordinates = function(coordinates, opt_extent) {
  var extent = _ol_extent_.createOrUpdateEmpty(opt_extent);
  return _ol_extent_.extendCoordinates(extent, coordinates);
};


/**
 * @param {Array.<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {ol.Extent=} opt_extent Extent.
 * @return {ol.Extent} Extent.
 */
_ol_extent_.createOrUpdateFromFlatCoordinates = function(flatCoordinates, offset, end, stride, opt_extent) {
  var extent = _ol_extent_.createOrUpdateEmpty(opt_extent);
  return _ol_extent_.extendFlatCoordinates(
      extent, flatCoordinates, offset, end, stride);
};


/**
 * @param {Array.<Array.<ol.Coordinate>>} rings Rings.
 * @param {ol.Extent=} opt_extent Extent.
 * @return {ol.Extent} Extent.
 */
_ol_extent_.createOrUpdateFromRings = function(rings, opt_extent) {
  var extent = _ol_extent_.createOrUpdateEmpty(opt_extent);
  return _ol_extent_.extendRings(extent, rings);
};


/**
 * Determine if two extents are equivalent.
 * @param {ol.Extent} extent1 Extent 1.
 * @param {ol.Extent} extent2 Extent 2.
 * @return {boolean} The two extents are equivalent.
 * @api
 */
_ol_extent_.equals = function(extent1, extent2) {
  return extent1[0] == extent2[0] && extent1[2] == extent2[2] &&
      extent1[1] == extent2[1] && extent1[3] == extent2[3];
};


/**
 * Modify an extent to include another extent.
 * @param {ol.Extent} extent1 The extent to be modified.
 * @param {ol.Extent} extent2 The extent that will be included in the first.
 * @return {ol.Extent} A reference to the first (extended) extent.
 * @api
 */
_ol_extent_.extend = function(extent1, extent2) {
  if (extent2[0] < extent1[0]) {
    extent1[0] = extent2[0];
  }
  if (extent2[2] > extent1[2]) {
    extent1[2] = extent2[2];
  }
  if (extent2[1] < extent1[1]) {
    extent1[1] = extent2[1];
  }
  if (extent2[3] > extent1[3]) {
    extent1[3] = extent2[3];
  }
  return extent1;
};


/**
 * @param {ol.Extent} extent Extent.
 * @param {ol.Coordinate} coordinate Coordinate.
 */
_ol_extent_.extendCoordinate = function(extent, coordinate) {
  if (coordinate[0] < extent[0]) {
    extent[0] = coordinate[0];
  }
  if (coordinate[0] > extent[2]) {
    extent[2] = coordinate[0];
  }
  if (coordinate[1] < extent[1]) {
    extent[1] = coordinate[1];
  }
  if (coordinate[1] > extent[3]) {
    extent[3] = coordinate[1];
  }
};


/**
 * @param {ol.Extent} extent Extent.
 * @param {Array.<ol.Coordinate>} coordinates Coordinates.
 * @return {ol.Extent} Extent.
 */
_ol_extent_.extendCoordinates = function(extent, coordinates) {
  var i, ii;
  for (i = 0, ii = coordinates.length; i < ii; ++i) {
    _ol_extent_.extendCoordinate(extent, coordinates[i]);
  }
  return extent;
};


/**
 * @param {ol.Extent} extent Extent.
 * @param {Array.<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @return {ol.Extent} Extent.
 */
_ol_extent_.extendFlatCoordinates = function(extent, flatCoordinates, offset, end, stride) {
  for (; offset < end; offset += stride) {
    _ol_extent_.extendXY(
        extent, flatCoordinates[offset], flatCoordinates[offset + 1]);
  }
  return extent;
};


/**
 * @param {ol.Extent} extent Extent.
 * @param {Array.<Array.<ol.Coordinate>>} rings Rings.
 * @return {ol.Extent} Extent.
 */
_ol_extent_.extendRings = function(extent, rings) {
  var i, ii;
  for (i = 0, ii = rings.length; i < ii; ++i) {
    _ol_extent_.extendCoordinates(extent, rings[i]);
  }
  return extent;
};


/**
 * @param {ol.Extent} extent Extent.
 * @param {number} x X.
 * @param {number} y Y.
 */
_ol_extent_.extendXY = function(extent, x, y) {
  extent[0] = Math.min(extent[0], x);
  extent[1] = Math.min(extent[1], y);
  extent[2] = Math.max(extent[2], x);
  extent[3] = Math.max(extent[3], y);
};


/**
 * This function calls `callback` for each corner of the extent. If the
 * callback returns a truthy value the function returns that value
 * immediately. Otherwise the function returns `false`.
 * @param {ol.Extent} extent Extent.
 * @param {function(this:T, ol.Coordinate): S} callback Callback.
 * @param {T=} opt_this Value to use as `this` when executing `callback`.
 * @return {S|boolean} Value.
 * @template S, T
 */
_ol_extent_.forEachCorner = function(extent, callback, opt_this) {
  var val;
  val = callback.call(opt_this, _ol_extent_.getBottomLeft(extent));
  if (val) {
    return val;
  }
  val = callback.call(opt_this, _ol_extent_.getBottomRight(extent));
  if (val) {
    return val;
  }
  val = callback.call(opt_this, _ol_extent_.getTopRight(extent));
  if (val) {
    return val;
  }
  val = callback.call(opt_this, _ol_extent_.getTopLeft(extent));
  if (val) {
    return val;
  }
  return false;
};


/**
 * Get the size of an extent.
 * @param {ol.Extent} extent Extent.
 * @return {number} Area.
 * @api
 */
_ol_extent_.getArea = function(extent) {
  var area = 0;
  if (!_ol_extent_.isEmpty(extent)) {
    area = _ol_extent_.getWidth(extent) * _ol_extent_.getHeight(extent);
  }
  return area;
};


/**
 * Get the bottom left coordinate of an extent.
 * @param {ol.Extent} extent Extent.
 * @return {ol.Coordinate} Bottom left coordinate.
 * @api
 */
_ol_extent_.getBottomLeft = function(extent) {
  return [extent[0], extent[1]];
};


/**
 * Get the bottom right coordinate of an extent.
 * @param {ol.Extent} extent Extent.
 * @return {ol.Coordinate} Bottom right coordinate.
 * @api
 */
_ol_extent_.getBottomRight = function(extent) {
  return [extent[2], extent[1]];
};


/**
 * Get the center coordinate of an extent.
 * @param {ol.Extent} extent Extent.
 * @return {ol.Coordinate} Center.
 * @api
 */
_ol_extent_.getCenter = function(extent) {
  return [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2];
};


/**
 * Get a corner coordinate of an extent.
 * @param {ol.Extent} extent Extent.
 * @param {ol.extent.Corner} corner Corner.
 * @return {ol.Coordinate} Corner coordinate.
 */
_ol_extent_.getCorner = function(extent, corner) {
  var coordinate;
  if (corner === __WEBPACK_IMPORTED_MODULE_1__extent_corner_js__["a" /* default */].BOTTOM_LEFT) {
    coordinate = _ol_extent_.getBottomLeft(extent);
  } else if (corner === __WEBPACK_IMPORTED_MODULE_1__extent_corner_js__["a" /* default */].BOTTOM_RIGHT) {
    coordinate = _ol_extent_.getBottomRight(extent);
  } else if (corner === __WEBPACK_IMPORTED_MODULE_1__extent_corner_js__["a" /* default */].TOP_LEFT) {
    coordinate = _ol_extent_.getTopLeft(extent);
  } else if (corner === __WEBPACK_IMPORTED_MODULE_1__extent_corner_js__["a" /* default */].TOP_RIGHT) {
    coordinate = _ol_extent_.getTopRight(extent);
  } else {
    __WEBPACK_IMPORTED_MODULE_0__asserts_js__["a" /* default */].assert(false, 13); // Invalid corner
  }
  return /** @type {!ol.Coordinate} */ (coordinate);
};


/**
 * @param {ol.Extent} extent1 Extent 1.
 * @param {ol.Extent} extent2 Extent 2.
 * @return {number} Enlarged area.
 */
_ol_extent_.getEnlargedArea = function(extent1, extent2) {
  var minX = Math.min(extent1[0], extent2[0]);
  var minY = Math.min(extent1[1], extent2[1]);
  var maxX = Math.max(extent1[2], extent2[2]);
  var maxY = Math.max(extent1[3], extent2[3]);
  return (maxX - minX) * (maxY - minY);
};


/**
 * @param {ol.Coordinate} center Center.
 * @param {number} resolution Resolution.
 * @param {number} rotation Rotation.
 * @param {ol.Size} size Size.
 * @param {ol.Extent=} opt_extent Destination extent.
 * @return {ol.Extent} Extent.
 */
_ol_extent_.getForViewAndSize = function(center, resolution, rotation, size, opt_extent) {
  var dx = resolution * size[0] / 2;
  var dy = resolution * size[1] / 2;
  var cosRotation = Math.cos(rotation);
  var sinRotation = Math.sin(rotation);
  var xCos = dx * cosRotation;
  var xSin = dx * sinRotation;
  var yCos = dy * cosRotation;
  var ySin = dy * sinRotation;
  var x = center[0];
  var y = center[1];
  var x0 = x - xCos + ySin;
  var x1 = x - xCos - ySin;
  var x2 = x + xCos - ySin;
  var x3 = x + xCos + ySin;
  var y0 = y - xSin - yCos;
  var y1 = y - xSin + yCos;
  var y2 = y + xSin + yCos;
  var y3 = y + xSin - yCos;
  return _ol_extent_.createOrUpdate(
      Math.min(x0, x1, x2, x3), Math.min(y0, y1, y2, y3),
      Math.max(x0, x1, x2, x3), Math.max(y0, y1, y2, y3),
      opt_extent);
};


/**
 * Get the height of an extent.
 * @param {ol.Extent} extent Extent.
 * @return {number} Height.
 * @api
 */
_ol_extent_.getHeight = function(extent) {
  return extent[3] - extent[1];
};


/**
 * @param {ol.Extent} extent1 Extent 1.
 * @param {ol.Extent} extent2 Extent 2.
 * @return {number} Intersection area.
 */
_ol_extent_.getIntersectionArea = function(extent1, extent2) {
  var intersection = _ol_extent_.getIntersection(extent1, extent2);
  return _ol_extent_.getArea(intersection);
};


/**
 * Get the intersection of two extents.
 * @param {ol.Extent} extent1 Extent 1.
 * @param {ol.Extent} extent2 Extent 2.
 * @param {ol.Extent=} opt_extent Optional extent to populate with intersection.
 * @return {ol.Extent} Intersecting extent.
 * @api
 */
_ol_extent_.getIntersection = function(extent1, extent2, opt_extent) {
  var intersection = opt_extent ? opt_extent : _ol_extent_.createEmpty();
  if (_ol_extent_.intersects(extent1, extent2)) {
    if (extent1[0] > extent2[0]) {
      intersection[0] = extent1[0];
    } else {
      intersection[0] = extent2[0];
    }
    if (extent1[1] > extent2[1]) {
      intersection[1] = extent1[1];
    } else {
      intersection[1] = extent2[1];
    }
    if (extent1[2] < extent2[2]) {
      intersection[2] = extent1[2];
    } else {
      intersection[2] = extent2[2];
    }
    if (extent1[3] < extent2[3]) {
      intersection[3] = extent1[3];
    } else {
      intersection[3] = extent2[3];
    }
  }
  return intersection;
};


/**
 * @param {ol.Extent} extent Extent.
 * @return {number} Margin.
 */
_ol_extent_.getMargin = function(extent) {
  return _ol_extent_.getWidth(extent) + _ol_extent_.getHeight(extent);
};


/**
 * Get the size (width, height) of an extent.
 * @param {ol.Extent} extent The extent.
 * @return {ol.Size} The extent size.
 * @api
 */
_ol_extent_.getSize = function(extent) {
  return [extent[2] - extent[0], extent[3] - extent[1]];
};


/**
 * Get the top left coordinate of an extent.
 * @param {ol.Extent} extent Extent.
 * @return {ol.Coordinate} Top left coordinate.
 * @api
 */
_ol_extent_.getTopLeft = function(extent) {
  return [extent[0], extent[3]];
};


/**
 * Get the top right coordinate of an extent.
 * @param {ol.Extent} extent Extent.
 * @return {ol.Coordinate} Top right coordinate.
 * @api
 */
_ol_extent_.getTopRight = function(extent) {
  return [extent[2], extent[3]];
};


/**
 * Get the width of an extent.
 * @param {ol.Extent} extent Extent.
 * @return {number} Width.
 * @api
 */
_ol_extent_.getWidth = function(extent) {
  return extent[2] - extent[0];
};


/**
 * Determine if one extent intersects another.
 * @param {ol.Extent} extent1 Extent 1.
 * @param {ol.Extent} extent2 Extent.
 * @return {boolean} The two extents intersect.
 * @api
 */
_ol_extent_.intersects = function(extent1, extent2) {
  return extent1[0] <= extent2[2] &&
      extent1[2] >= extent2[0] &&
      extent1[1] <= extent2[3] &&
      extent1[3] >= extent2[1];
};


/**
 * Determine if an extent is empty.
 * @param {ol.Extent} extent Extent.
 * @return {boolean} Is empty.
 * @api
 */
_ol_extent_.isEmpty = function(extent) {
  return extent[2] < extent[0] || extent[3] < extent[1];
};


/**
 * @param {ol.Extent} extent Extent.
 * @param {ol.Extent=} opt_extent Extent.
 * @return {ol.Extent} Extent.
 */
_ol_extent_.returnOrUpdate = function(extent, opt_extent) {
  if (opt_extent) {
    opt_extent[0] = extent[0];
    opt_extent[1] = extent[1];
    opt_extent[2] = extent[2];
    opt_extent[3] = extent[3];
    return opt_extent;
  } else {
    return extent;
  }
};


/**
 * @param {ol.Extent} extent Extent.
 * @param {number} value Value.
 */
_ol_extent_.scaleFromCenter = function(extent, value) {
  var deltaX = ((extent[2] - extent[0]) / 2) * (value - 1);
  var deltaY = ((extent[3] - extent[1]) / 2) * (value - 1);
  extent[0] -= deltaX;
  extent[2] += deltaX;
  extent[1] -= deltaY;
  extent[3] += deltaY;
};


/**
 * Determine if the segment between two coordinates intersects (crosses,
 * touches, or is contained by) the provided extent.
 * @param {ol.Extent} extent The extent.
 * @param {ol.Coordinate} start Segment start coordinate.
 * @param {ol.Coordinate} end Segment end coordinate.
 * @return {boolean} The segment intersects the extent.
 */
_ol_extent_.intersectsSegment = function(extent, start, end) {
  var intersects = false;
  var startRel = _ol_extent_.coordinateRelationship(extent, start);
  var endRel = _ol_extent_.coordinateRelationship(extent, end);
  if (startRel === __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].INTERSECTING ||
      endRel === __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].INTERSECTING) {
    intersects = true;
  } else {
    var minX = extent[0];
    var minY = extent[1];
    var maxX = extent[2];
    var maxY = extent[3];
    var startX = start[0];
    var startY = start[1];
    var endX = end[0];
    var endY = end[1];
    var slope = (endY - startY) / (endX - startX);
    var x, y;
    if (!!(endRel & __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].ABOVE) &&
        !(startRel & __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].ABOVE)) {
      // potentially intersects top
      x = endX - ((endY - maxY) / slope);
      intersects = x >= minX && x <= maxX;
    }
    if (!intersects && !!(endRel & __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].RIGHT) &&
        !(startRel & __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].RIGHT)) {
      // potentially intersects right
      y = endY - ((endX - maxX) * slope);
      intersects = y >= minY && y <= maxY;
    }
    if (!intersects && !!(endRel & __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].BELOW) &&
        !(startRel & __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].BELOW)) {
      // potentially intersects bottom
      x = endX - ((endY - minY) / slope);
      intersects = x >= minX && x <= maxX;
    }
    if (!intersects && !!(endRel & __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].LEFT) &&
        !(startRel & __WEBPACK_IMPORTED_MODULE_2__extent_relationship_js__["a" /* default */].LEFT)) {
      // potentially intersects left
      y = endY - ((endX - minX) * slope);
      intersects = y >= minY && y <= maxY;
    }

  }
  return intersects;
};


/**
 * Apply a transform function to the extent.
 * @param {ol.Extent} extent Extent.
 * @param {ol.TransformFunction} transformFn Transform function.  Called with
 * [minX, minY, maxX, maxY] extent coordinates.
 * @param {ol.Extent=} opt_extent Destination extent.
 * @return {ol.Extent} Extent.
 * @api
 */
_ol_extent_.applyTransform = function(extent, transformFn, opt_extent) {
  var coordinates = [
    extent[0], extent[1],
    extent[0], extent[3],
    extent[2], extent[1],
    extent[2], extent[3]
  ];
  transformFn(coordinates, coordinates, 2);
  var xs = [coordinates[0], coordinates[2], coordinates[4], coordinates[6]];
  var ys = [coordinates[1], coordinates[3], coordinates[5], coordinates[7]];
  return _ol_extent_.boundingExtentXYs_(xs, ys, opt_extent);
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_extent_);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sphere_js__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extent_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__proj_epsg3857_js__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__proj_epsg4326_js__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__proj_projection_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__proj_units_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__proj_proj4_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__proj_projections_js__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__proj_transforms_js__ = __webpack_require__(61);











var _ol_proj_ = {};


/**
 * Meters per unit lookup table.
 * @const
 * @type {Object.<ol.proj.Units, number>}
 * @api
 */
_ol_proj_.METERS_PER_UNIT = __WEBPACK_IMPORTED_MODULE_7__proj_units_js__["a" /* default */].METERS_PER_UNIT;


/**
 * A place to store the mean radius of the Earth.
 * @private
 * @type {ol.Sphere}
 */
_ol_proj_.SPHERE_ = new __WEBPACK_IMPORTED_MODULE_1__sphere_js__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1__sphere_js__["a" /* default */].DEFAULT_RADIUS);


if (__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].ENABLE_PROJ4JS) {
  /**
   * Register proj4. If not explicitly registered, it will be assumed that
   * proj4js will be loaded in the global namespace. For example in a
   * browserify ES6 environment you could use:
   *
   *     import ol from 'openlayers';
   *     import proj4 from 'proj4';
   *     ol.proj.setProj4(proj4);
   *
   * @param {Proj4} proj4 Proj4.
   * @api
   */
  _ol_proj_.setProj4 = function(proj4) {
    __WEBPACK_IMPORTED_MODULE_8__proj_proj4_js__["a" /* default */].set(proj4);
  };
}


/**
 * Get the resolution of the point in degrees or distance units.
 * For projections with degrees as the unit this will simply return the
 * provided resolution. For other projections the point resolution is
 * by default estimated by transforming the 'point' pixel to EPSG:4326,
 * measuring its width and height on the normal sphere,
 * and taking the average of the width and height.
 * A custom function can be provided for a specific projection, either
 * by setting the `getPointResolution` option in the
 * {@link ol.proj.Projection} constructor or by using
 * {@link ol.proj.Projection#setGetPointResolution} to change an existing
 * projection object.
 * @param {ol.ProjectionLike} projection The projection.
 * @param {number} resolution Nominal resolution in projection units.
 * @param {ol.Coordinate} point Point to find adjusted resolution at.
 * @param {ol.proj.Units=} opt_units Units to get the point resolution in.
 * Default is the projection's units.
 * @return {number} Point resolution.
 * @api
 */
_ol_proj_.getPointResolution = function(projection, resolution, point, opt_units) {
  projection = _ol_proj_.get(projection);
  var pointResolution;
  var getter = projection.getPointResolutionFunc();
  if (getter) {
    pointResolution = getter(resolution, point);
  } else {
    var units = projection.getUnits();
    if (units == __WEBPACK_IMPORTED_MODULE_7__proj_units_js__["a" /* default */].DEGREES && !opt_units || opt_units == __WEBPACK_IMPORTED_MODULE_7__proj_units_js__["a" /* default */].DEGREES) {
      pointResolution = resolution;
    } else {
      // Estimate point resolution by transforming the center pixel to EPSG:4326,
      // measuring its width and height on the normal sphere, and taking the
      // average of the width and height.
      var toEPSG4326 = _ol_proj_.getTransformFromProjections(projection, _ol_proj_.get('EPSG:4326'));
      var vertices = [
        point[0] - resolution / 2, point[1],
        point[0] + resolution / 2, point[1],
        point[0], point[1] - resolution / 2,
        point[0], point[1] + resolution / 2
      ];
      vertices = toEPSG4326(vertices, vertices, 2);
      var width = _ol_proj_.SPHERE_.haversineDistance(
          vertices.slice(0, 2), vertices.slice(2, 4));
      var height = _ol_proj_.SPHERE_.haversineDistance(
          vertices.slice(4, 6), vertices.slice(6, 8));
      pointResolution = (width + height) / 2;
      var metersPerUnit = opt_units ?
        __WEBPACK_IMPORTED_MODULE_7__proj_units_js__["a" /* default */].METERS_PER_UNIT[opt_units] :
        projection.getMetersPerUnit();
      if (metersPerUnit !== undefined) {
        pointResolution /= metersPerUnit;
      }
    }
  }
  return pointResolution;
};


/**
 * Registers transformation functions that don't alter coordinates. Those allow
 * to transform between projections with equal meaning.
 *
 * @param {Array.<ol.proj.Projection>} projections Projections.
 * @api
 */
_ol_proj_.addEquivalentProjections = function(projections) {
  _ol_proj_.addProjections(projections);
  projections.forEach(function(source) {
    projections.forEach(function(destination) {
      if (source !== destination) {
        __WEBPACK_IMPORTED_MODULE_10__proj_transforms_js__["a" /* default */].add(source, destination, _ol_proj_.cloneTransform);
      }
    });
  });
};


/**
 * Registers transformation functions to convert coordinates in any projection
 * in projection1 to any projection in projection2.
 *
 * @param {Array.<ol.proj.Projection>} projections1 Projections with equal
 *     meaning.
 * @param {Array.<ol.proj.Projection>} projections2 Projections with equal
 *     meaning.
 * @param {ol.TransformFunction} forwardTransform Transformation from any
 *   projection in projection1 to any projection in projection2.
 * @param {ol.TransformFunction} inverseTransform Transform from any projection
 *   in projection2 to any projection in projection1..
 */
_ol_proj_.addEquivalentTransforms = function(projections1, projections2, forwardTransform, inverseTransform) {
  projections1.forEach(function(projection1) {
    projections2.forEach(function(projection2) {
      __WEBPACK_IMPORTED_MODULE_10__proj_transforms_js__["a" /* default */].add(projection1, projection2, forwardTransform);
      __WEBPACK_IMPORTED_MODULE_10__proj_transforms_js__["a" /* default */].add(projection2, projection1, inverseTransform);
    });
  });
};


/**
 * Add a Projection object to the list of supported projections that can be
 * looked up by their code.
 *
 * @param {ol.proj.Projection} projection Projection instance.
 * @api
 */
_ol_proj_.addProjection = function(projection) {
  __WEBPACK_IMPORTED_MODULE_9__proj_projections_js__["a" /* default */].add(projection.getCode(), projection);
  __WEBPACK_IMPORTED_MODULE_10__proj_transforms_js__["a" /* default */].add(projection, projection, _ol_proj_.cloneTransform);
};


/**
 * @param {Array.<ol.proj.Projection>} projections Projections.
 */
_ol_proj_.addProjections = function(projections) {
  projections.forEach(_ol_proj_.addProjection);
};


/**
 * Clear all cached projections and transforms.
 */
_ol_proj_.clearAllProjections = function() {
  __WEBPACK_IMPORTED_MODULE_9__proj_projections_js__["a" /* default */].clear();
  __WEBPACK_IMPORTED_MODULE_10__proj_transforms_js__["a" /* default */].clear();
};


/**
 * @param {ol.proj.Projection|string|undefined} projection Projection.
 * @param {string} defaultCode Default code.
 * @return {ol.proj.Projection} Projection.
 */
_ol_proj_.createProjection = function(projection, defaultCode) {
  if (!projection) {
    return _ol_proj_.get(defaultCode);
  } else if (typeof projection === 'string') {
    return _ol_proj_.get(projection);
  } else {
    return /** @type {ol.proj.Projection} */ (projection);
  }
};


/**
 * Registers coordinate transform functions to convert coordinates between the
 * source projection and the destination projection.
 * The forward and inverse functions convert coordinate pairs; this function
 * converts these into the functions used internally which also handle
 * extents and coordinate arrays.
 *
 * @param {ol.ProjectionLike} source Source projection.
 * @param {ol.ProjectionLike} destination Destination projection.
 * @param {function(ol.Coordinate): ol.Coordinate} forward The forward transform
 *     function (that is, from the source projection to the destination
 *     projection) that takes a {@link ol.Coordinate} as argument and returns
 *     the transformed {@link ol.Coordinate}.
 * @param {function(ol.Coordinate): ol.Coordinate} inverse The inverse transform
 *     function (that is, from the destination projection to the source
 *     projection) that takes a {@link ol.Coordinate} as argument and returns
 *     the transformed {@link ol.Coordinate}.
 * @api
 */
_ol_proj_.addCoordinateTransforms = function(source, destination, forward, inverse) {
  var sourceProj = _ol_proj_.get(source);
  var destProj = _ol_proj_.get(destination);
  __WEBPACK_IMPORTED_MODULE_10__proj_transforms_js__["a" /* default */].add(sourceProj, destProj,
      _ol_proj_.createTransformFromCoordinateTransform(forward));
  __WEBPACK_IMPORTED_MODULE_10__proj_transforms_js__["a" /* default */].add(destProj, sourceProj,
      _ol_proj_.createTransformFromCoordinateTransform(inverse));
};


/**
 * Creates a {@link ol.TransformFunction} from a simple 2D coordinate transform
 * function.
 * @param {function(ol.Coordinate): ol.Coordinate} transform Coordinate
 *     transform.
 * @return {ol.TransformFunction} Transform function.
 */
_ol_proj_.createTransformFromCoordinateTransform = function(transform) {
  return (
    /**
     * @param {Array.<number>} input Input.
     * @param {Array.<number>=} opt_output Output.
     * @param {number=} opt_dimension Dimension.
     * @return {Array.<number>} Output.
     */
    function(input, opt_output, opt_dimension) {
      var length = input.length;
      var dimension = opt_dimension !== undefined ? opt_dimension : 2;
      var output = opt_output !== undefined ? opt_output : new Array(length);
      var point, i, j;
      for (i = 0; i < length; i += dimension) {
        point = transform([input[i], input[i + 1]]);
        output[i] = point[0];
        output[i + 1] = point[1];
        for (j = dimension - 1; j >= 2; --j) {
          output[i + j] = input[i + j];
        }
      }
      return output;
    });
};


/**
 * Transforms a coordinate from longitude/latitude to a different projection.
 * @param {ol.Coordinate} coordinate Coordinate as longitude and latitude, i.e.
 *     an array with longitude as 1st and latitude as 2nd element.
 * @param {ol.ProjectionLike=} opt_projection Target projection. The
 *     default is Web Mercator, i.e. 'EPSG:3857'.
 * @return {ol.Coordinate} Coordinate projected to the target projection.
 * @api
 */
_ol_proj_.fromLonLat = function(coordinate, opt_projection) {
  return _ol_proj_.transform(coordinate, 'EPSG:4326',
      opt_projection !== undefined ? opt_projection : 'EPSG:3857');
};


/**
 * Transforms a coordinate to longitude/latitude.
 * @param {ol.Coordinate} coordinate Projected coordinate.
 * @param {ol.ProjectionLike=} opt_projection Projection of the coordinate.
 *     The default is Web Mercator, i.e. 'EPSG:3857'.
 * @return {ol.Coordinate} Coordinate as longitude and latitude, i.e. an array
 *     with longitude as 1st and latitude as 2nd element.
 * @api
 */
_ol_proj_.toLonLat = function(coordinate, opt_projection) {
  var lonLat = _ol_proj_.transform(coordinate,
      opt_projection !== undefined ? opt_projection : 'EPSG:3857', 'EPSG:4326');
  var lon = lonLat[0];
  if (lon < -180 || lon > 180) {
    lonLat[0] = __WEBPACK_IMPORTED_MODULE_3__math_js__["a" /* default */].modulo(lon + 180, 360) - 180;
  }
  return lonLat;
};


/**
 * Fetches a Projection object for the code specified.
 *
 * @param {ol.ProjectionLike} projectionLike Either a code string which is
 *     a combination of authority and identifier such as "EPSG:4326", or an
 *     existing projection object, or undefined.
 * @return {ol.proj.Projection} Projection object, or null if not in list.
 * @api
 */
_ol_proj_.get = function(projectionLike) {
  var projection = null;
  if (projectionLike instanceof __WEBPACK_IMPORTED_MODULE_6__proj_projection_js__["a" /* default */]) {
    projection = projectionLike;
  } else if (typeof projectionLike === 'string') {
    var code = projectionLike;
    projection = __WEBPACK_IMPORTED_MODULE_9__proj_projections_js__["a" /* default */].get(code);
    if (__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].ENABLE_PROJ4JS && !projection) {
      var proj4js = __WEBPACK_IMPORTED_MODULE_8__proj_proj4_js__["a" /* default */].get();
      if (typeof proj4js == 'function' &&
          proj4js.defs(code) !== undefined) {
        projection = new __WEBPACK_IMPORTED_MODULE_6__proj_projection_js__["a" /* default */]({code: code});
        _ol_proj_.addProjection(projection);
      }
    }
  }
  return projection;
};


/**
 * Checks if two projections are the same, that is every coordinate in one
 * projection does represent the same geographic point as the same coordinate in
 * the other projection.
 *
 * @param {ol.proj.Projection} projection1 Projection 1.
 * @param {ol.proj.Projection} projection2 Projection 2.
 * @return {boolean} Equivalent.
 * @api
 */
_ol_proj_.equivalent = function(projection1, projection2) {
  if (projection1 === projection2) {
    return true;
  }
  var equalUnits = projection1.getUnits() === projection2.getUnits();
  if (projection1.getCode() === projection2.getCode()) {
    return equalUnits;
  } else {
    var transformFn = _ol_proj_.getTransformFromProjections(
        projection1, projection2);
    return transformFn === _ol_proj_.cloneTransform && equalUnits;
  }
};


/**
 * Given the projection-like objects, searches for a transformation
 * function to convert a coordinates array from the source projection to the
 * destination projection.
 *
 * @param {ol.ProjectionLike} source Source.
 * @param {ol.ProjectionLike} destination Destination.
 * @return {ol.TransformFunction} Transform function.
 * @api
 */
_ol_proj_.getTransform = function(source, destination) {
  var sourceProjection = _ol_proj_.get(source);
  var destinationProjection = _ol_proj_.get(destination);
  return _ol_proj_.getTransformFromProjections(
      sourceProjection, destinationProjection);
};


/**
 * Searches in the list of transform functions for the function for converting
 * coordinates from the source projection to the destination projection.
 *
 * @param {ol.proj.Projection} sourceProjection Source Projection object.
 * @param {ol.proj.Projection} destinationProjection Destination Projection
 *     object.
 * @return {ol.TransformFunction} Transform function.
 */
_ol_proj_.getTransformFromProjections = function(sourceProjection, destinationProjection) {
  var sourceCode = sourceProjection.getCode();
  var destinationCode = destinationProjection.getCode();
  var transform = __WEBPACK_IMPORTED_MODULE_10__proj_transforms_js__["a" /* default */].get(sourceCode, destinationCode);
  if (__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].ENABLE_PROJ4JS && !transform) {
    var proj4js = __WEBPACK_IMPORTED_MODULE_8__proj_proj4_js__["a" /* default */].get();
    if (typeof proj4js == 'function') {
      var sourceDef = proj4js.defs(sourceCode);
      var destinationDef = proj4js.defs(destinationCode);

      if (sourceDef !== undefined && destinationDef !== undefined) {
        if (sourceDef === destinationDef) {
          _ol_proj_.addEquivalentProjections([destinationProjection, sourceProjection]);
        } else {
          var proj4Transform = proj4js(destinationCode, sourceCode);
          _ol_proj_.addCoordinateTransforms(destinationProjection, sourceProjection,
              proj4Transform.forward, proj4Transform.inverse);
        }
        transform = __WEBPACK_IMPORTED_MODULE_10__proj_transforms_js__["a" /* default */].get(sourceCode, destinationCode);
      }
    }
  }
  if (!transform) {
    transform = _ol_proj_.identityTransform;
  }
  return transform;
};


/**
 * @param {Array.<number>} input Input coordinate array.
 * @param {Array.<number>=} opt_output Output array of coordinate values.
 * @param {number=} opt_dimension Dimension.
 * @return {Array.<number>} Input coordinate array (same array as input).
 */
_ol_proj_.identityTransform = function(input, opt_output, opt_dimension) {
  if (opt_output !== undefined && input !== opt_output) {
    for (var i = 0, ii = input.length; i < ii; ++i) {
      opt_output[i] = input[i];
    }
    input = opt_output;
  }
  return input;
};


/**
 * @param {Array.<number>} input Input coordinate array.
 * @param {Array.<number>=} opt_output Output array of coordinate values.
 * @param {number=} opt_dimension Dimension.
 * @return {Array.<number>} Output coordinate array (new array, same coordinate
 *     values).
 */
_ol_proj_.cloneTransform = function(input, opt_output, opt_dimension) {
  var output;
  if (opt_output !== undefined) {
    for (var i = 0, ii = input.length; i < ii; ++i) {
      opt_output[i] = input[i];
    }
    output = opt_output;
  } else {
    output = input.slice();
  }
  return output;
};


/**
 * Transforms a coordinate from source projection to destination projection.
 * This returns a new coordinate (and does not modify the original).
 *
 * See {@link ol.proj.transformExtent} for extent transformation.
 * See the transform method of {@link ol.geom.Geometry} and its subclasses for
 * geometry transforms.
 *
 * @param {ol.Coordinate} coordinate Coordinate.
 * @param {ol.ProjectionLike} source Source projection-like.
 * @param {ol.ProjectionLike} destination Destination projection-like.
 * @return {ol.Coordinate} Coordinate.
 * @api
 */
_ol_proj_.transform = function(coordinate, source, destination) {
  var transformFn = _ol_proj_.getTransform(source, destination);
  return transformFn(coordinate, undefined, coordinate.length);
};


/**
 * Transforms an extent from source projection to destination projection.  This
 * returns a new extent (and does not modify the original).
 *
 * @param {ol.Extent} extent The extent to transform.
 * @param {ol.ProjectionLike} source Source projection-like.
 * @param {ol.ProjectionLike} destination Destination projection-like.
 * @return {ol.Extent} The transformed extent.
 * @api
 */
_ol_proj_.transformExtent = function(extent, source, destination) {
  var transformFn = _ol_proj_.getTransform(source, destination);
  return __WEBPACK_IMPORTED_MODULE_2__extent_js__["a" /* default */].applyTransform(extent, transformFn);
};


/**
 * Transforms the given point to the destination projection.
 *
 * @param {ol.Coordinate} point Point.
 * @param {ol.proj.Projection} sourceProjection Source projection.
 * @param {ol.proj.Projection} destinationProjection Destination projection.
 * @return {ol.Coordinate} Point.
 */
_ol_proj_.transformWithProjections = function(point, sourceProjection, destinationProjection) {
  var transformFn = _ol_proj_.getTransformFromProjections(
      sourceProjection, destinationProjection);
  return transformFn(point);
};

/**
 * Add transforms to and from EPSG:4326 and EPSG:3857.  This function is called
 * by when this module is executed and should only need to be called again after
 * `ol.proj.clearAllProjections()` is called (e.g. in tests).
 */
_ol_proj_.addCommon = function() {
  // Add transformations that don't alter coordinates to convert within set of
  // projections with equal meaning.
  _ol_proj_.addEquivalentProjections(__WEBPACK_IMPORTED_MODULE_4__proj_epsg3857_js__["a" /* default */].PROJECTIONS);
  _ol_proj_.addEquivalentProjections(__WEBPACK_IMPORTED_MODULE_5__proj_epsg4326_js__["a" /* default */].PROJECTIONS);
  // Add transformations to convert EPSG:4326 like coordinates to EPSG:3857 like
  // coordinates and back.
  _ol_proj_.addEquivalentTransforms(
      __WEBPACK_IMPORTED_MODULE_5__proj_epsg4326_js__["a" /* default */].PROJECTIONS,
      __WEBPACK_IMPORTED_MODULE_4__proj_epsg3857_js__["a" /* default */].PROJECTIONS,
      __WEBPACK_IMPORTED_MODULE_4__proj_epsg3857_js__["a" /* default */].fromEPSG4326,
      __WEBPACK_IMPORTED_MODULE_4__proj_epsg3857_js__["a" /* default */].toEPSG4326);
};

_ol_proj_.addCommon();
/* harmony default export */ __webpack_exports__["default"] = (_ol_proj_);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__obj_js__ = __webpack_require__(6);

var _ol_events_ = {};


/**
 * @param {ol.EventsKey} listenerObj Listener object.
 * @return {ol.EventsListenerFunctionType} Bound listener.
 */
_ol_events_.bindListener_ = function(listenerObj) {
  var boundListener = function(evt) {
    var listener = listenerObj.listener;
    var bindTo = listenerObj.bindTo || listenerObj.target;
    if (listenerObj.callOnce) {
      _ol_events_.unlistenByKey(listenerObj);
    }
    return listener.call(bindTo, evt);
  };
  listenerObj.boundListener = boundListener;
  return boundListener;
};


/**
 * Finds the matching {@link ol.EventsKey} in the given listener
 * array.
 *
 * @param {!Array<!ol.EventsKey>} listeners Array of listeners.
 * @param {!Function} listener The listener function.
 * @param {Object=} opt_this The `this` value inside the listener.
 * @param {boolean=} opt_setDeleteIndex Set the deleteIndex on the matching
 *     listener, for {@link ol.events.unlistenByKey}.
 * @return {ol.EventsKey|undefined} The matching listener object.
 * @private
 */
_ol_events_.findListener_ = function(listeners, listener, opt_this,
    opt_setDeleteIndex) {
  var listenerObj;
  for (var i = 0, ii = listeners.length; i < ii; ++i) {
    listenerObj = listeners[i];
    if (listenerObj.listener === listener &&
        listenerObj.bindTo === opt_this) {
      if (opt_setDeleteIndex) {
        listenerObj.deleteIndex = i;
      }
      return listenerObj;
    }
  }
  return undefined;
};


/**
 * @param {ol.EventTargetLike} target Target.
 * @param {string} type Type.
 * @return {Array.<ol.EventsKey>|undefined} Listeners.
 */
_ol_events_.getListeners = function(target, type) {
  var listenerMap = target.ol_lm;
  return listenerMap ? listenerMap[type] : undefined;
};


/**
 * Get the lookup of listeners.  If one does not exist on the target, it is
 * created.
 * @param {ol.EventTargetLike} target Target.
 * @return {!Object.<string, Array.<ol.EventsKey>>} Map of
 *     listeners by event type.
 * @private
 */
_ol_events_.getListenerMap_ = function(target) {
  var listenerMap = target.ol_lm;
  if (!listenerMap) {
    listenerMap = target.ol_lm = {};
  }
  return listenerMap;
};


/**
 * Clean up all listener objects of the given type.  All properties on the
 * listener objects will be removed, and if no listeners remain in the listener
 * map, it will be removed from the target.
 * @param {ol.EventTargetLike} target Target.
 * @param {string} type Type.
 * @private
 */
_ol_events_.removeListeners_ = function(target, type) {
  var listeners = _ol_events_.getListeners(target, type);
  if (listeners) {
    for (var i = 0, ii = listeners.length; i < ii; ++i) {
      target.removeEventListener(type, listeners[i].boundListener);
      __WEBPACK_IMPORTED_MODULE_0__obj_js__["a" /* default */].clear(listeners[i]);
    }
    listeners.length = 0;
    var listenerMap = target.ol_lm;
    if (listenerMap) {
      delete listenerMap[type];
      if (Object.keys(listenerMap).length === 0) {
        delete target.ol_lm;
      }
    }
  }
};


/**
 * Registers an event listener on an event target. Inspired by
 * {@link https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html}
 *
 * This function efficiently binds a `listener` to a `this` object, and returns
 * a key for use with {@link ol.events.unlistenByKey}.
 *
 * @param {ol.EventTargetLike} target Event target.
 * @param {string} type Event type.
 * @param {ol.EventsListenerFunctionType} listener Listener.
 * @param {Object=} opt_this Object referenced by the `this` keyword in the
 *     listener. Default is the `target`.
 * @param {boolean=} opt_once If true, add the listener as one-off listener.
 * @return {ol.EventsKey} Unique key for the listener.
 */
_ol_events_.listen = function(target, type, listener, opt_this, opt_once) {
  var listenerMap = _ol_events_.getListenerMap_(target);
  var listeners = listenerMap[type];
  if (!listeners) {
    listeners = listenerMap[type] = [];
  }
  var listenerObj = _ol_events_.findListener_(listeners, listener, opt_this,
      false);
  if (listenerObj) {
    if (!opt_once) {
      // Turn one-off listener into a permanent one.
      listenerObj.callOnce = false;
    }
  } else {
    listenerObj = /** @type {ol.EventsKey} */ ({
      bindTo: opt_this,
      callOnce: !!opt_once,
      listener: listener,
      target: target,
      type: type
    });
    target.addEventListener(type, _ol_events_.bindListener_(listenerObj));
    listeners.push(listenerObj);
  }

  return listenerObj;
};


/**
 * Registers a one-off event listener on an event target. Inspired by
 * {@link https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html}
 *
 * This function efficiently binds a `listener` as self-unregistering listener
 * to a `this` object, and returns a key for use with
 * {@link ol.events.unlistenByKey} in case the listener needs to be unregistered
 * before it is called.
 *
 * When {@link ol.events.listen} is called with the same arguments after this
 * function, the self-unregistering listener will be turned into a permanent
 * listener.
 *
 * @param {ol.EventTargetLike} target Event target.
 * @param {string} type Event type.
 * @param {ol.EventsListenerFunctionType} listener Listener.
 * @param {Object=} opt_this Object referenced by the `this` keyword in the
 *     listener. Default is the `target`.
 * @return {ol.EventsKey} Key for unlistenByKey.
 */
_ol_events_.listenOnce = function(target, type, listener, opt_this) {
  return _ol_events_.listen(target, type, listener, opt_this, true);
};


/**
 * Unregisters an event listener on an event target. Inspired by
 * {@link https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html}
 *
 * To return a listener, this function needs to be called with the exact same
 * arguments that were used for a previous {@link ol.events.listen} call.
 *
 * @param {ol.EventTargetLike} target Event target.
 * @param {string} type Event type.
 * @param {ol.EventsListenerFunctionType} listener Listener.
 * @param {Object=} opt_this Object referenced by the `this` keyword in the
 *     listener. Default is the `target`.
 */
_ol_events_.unlisten = function(target, type, listener, opt_this) {
  var listeners = _ol_events_.getListeners(target, type);
  if (listeners) {
    var listenerObj = _ol_events_.findListener_(listeners, listener, opt_this,
        true);
    if (listenerObj) {
      _ol_events_.unlistenByKey(listenerObj);
    }
  }
};


/**
 * Unregisters event listeners on an event target. Inspired by
 * {@link https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html}
 *
 * The argument passed to this function is the key returned from
 * {@link ol.events.listen} or {@link ol.events.listenOnce}.
 *
 * @param {ol.EventsKey} key The key.
 */
_ol_events_.unlistenByKey = function(key) {
  if (key && key.target) {
    key.target.removeEventListener(key.type, key.boundListener);
    var listeners = _ol_events_.getListeners(key.target, key.type);
    if (listeners) {
      var i = 'deleteIndex' in key ? key.deleteIndex : listeners.indexOf(key);
      if (i !== -1) {
        listeners.splice(i, 1);
      }
      if (listeners.length === 0) {
        _ol_events_.removeListeners_(key.target, key.type);
      }
    }
    __WEBPACK_IMPORTED_MODULE_0__obj_js__["a" /* default */].clear(key);
  }
};


/**
 * Unregisters all event listeners on an event target. Inspired by
 * {@link https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html}
 *
 * @param {ol.EventTargetLike} target Target.
 */
_ol_events_.unlistenAll = function(target) {
  var listenerMap = _ol_events_.getListenerMap_(target);
  for (var type in listenerMap) {
    _ol_events_.removeListeners_(target, type);
  }
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_events_);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _ol_obj_ = {};


/**
 * Polyfill for Object.assign().  Assigns enumerable and own properties from
 * one or more source objects to a target object.
 *
 * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 * @param {!Object} target The target object.
 * @param {...Object} var_sources The source object(s).
 * @return {!Object} The modified target object.
 */
_ol_obj_.assign = (typeof Object.assign === 'function') ? Object.assign : function(target, var_sources) {
  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var output = Object(target);
  for (var i = 1, ii = arguments.length; i < ii; ++i) {
    var source = arguments[i];
    if (source !== undefined && source !== null) {
      for (var key in source) {
        if (source.hasOwnProperty(key)) {
          output[key] = source[key];
        }
      }
    }
  }
  return output;
};


/**
 * Removes all properties from an object.
 * @param {Object} object The object to clear.
 */
_ol_obj_.clear = function(object) {
  for (var property in object) {
    delete object[property];
  }
};


/**
 * Get an array of property values from an object.
 * @param {Object<K,V>} object The object from which to get the values.
 * @return {!Array<V>} The property values.
 * @template K,V
 */
_ol_obj_.getValues = function(object) {
  var values = [];
  for (var property in object) {
    values.push(object[property]);
  }
  return values;
};


/**
 * Determine if an object has any properties.
 * @param {Object} object The object to check.
 * @return {boolean} The object is empty.
 */
_ol_obj_.isEmpty = function(object) {
  var property;
  for (property in object) {
    return false;
  }
  return !property;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_obj_);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _ol_tilecoord_ = {};


/**
 * @param {number} z Z.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {ol.TileCoord=} opt_tileCoord Tile coordinate.
 * @return {ol.TileCoord} Tile coordinate.
 */
_ol_tilecoord_.createOrUpdate = function(z, x, y, opt_tileCoord) {
  if (opt_tileCoord !== undefined) {
    opt_tileCoord[0] = z;
    opt_tileCoord[1] = x;
    opt_tileCoord[2] = y;
    return opt_tileCoord;
  } else {
    return [z, x, y];
  }
};


/**
 * @param {number} z Z.
 * @param {number} x X.
 * @param {number} y Y.
 * @return {string} Key.
 */
_ol_tilecoord_.getKeyZXY = function(z, x, y) {
  return z + '/' + x + '/' + y;
};


/**
 * Get the key for a tile coord.
 * @param {ol.TileCoord} tileCoord The tile coord.
 * @return {string} Key.
 */
_ol_tilecoord_.getKey = function(tileCoord) {
  return _ol_tilecoord_.getKeyZXY(tileCoord[0], tileCoord[1], tileCoord[2]);
};


/**
 * Get a tile coord given a key.
 * @param {string} key The tile coord key.
 * @return {ol.TileCoord} The tile coord.
 */
_ol_tilecoord_.fromKey = function(key) {
  return key.split('/').map(Number);
};


/**
 * @param {ol.TileCoord} tileCoord Tile coord.
 * @return {number} Hash.
 */
_ol_tilecoord_.hash = function(tileCoord) {
  return (tileCoord[1] << tileCoord[0]) + tileCoord[2];
};


/**
 * @param {ol.TileCoord} tileCoord Tile coord.
 * @return {string} Quad key.
 */
_ol_tilecoord_.quadKey = function(tileCoord) {
  var z = tileCoord[0];
  var digits = new Array(z);
  var mask = 1 << (z - 1);
  var i, charCode;
  for (i = 0; i < z; ++i) {
    // 48 is charCode for 0 - '0'.charCodeAt(0)
    charCode = 48;
    if (tileCoord[1] & mask) {
      charCode += 1;
    }
    if (tileCoord[2] & mask) {
      charCode += 2;
    }
    digits[i] = String.fromCharCode(charCode);
    mask >>= 1;
  }
  return digits.join('');
};


/**
 * @param {ol.TileCoord} tileCoord Tile coordinate.
 * @param {!ol.tilegrid.TileGrid} tileGrid Tile grid.
 * @return {boolean} Tile coordinate is within extent and zoom level range.
 */
_ol_tilecoord_.withinExtentAndZ = function(tileCoord, tileGrid) {
  var z = tileCoord[0];
  var x = tileCoord[1];
  var y = tileCoord[2];

  if (tileGrid.getMinZoom() > z || z > tileGrid.getMaxZoom()) {
    return false;
  }
  var extent = tileGrid.getExtent();
  var tileRange;
  if (!extent) {
    tileRange = tileGrid.getFullTileRange(z);
  } else {
    tileRange = tileGrid.getTileRangeForExtentAndZ(extent, z);
  }
  if (!tileRange) {
    return true;
  } else {
    return tileRange.containsXY(x, y);
  }
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_tilecoord_);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @enum {number}
 */
var _ol_TileState_ = {
  IDLE: 0,
  LOADING: 1,
  LOADED: 2,
  ERROR: 3,
  EMPTY: 4,
  ABORT: 5
};

/* harmony default export */ __webpack_exports__["a"] = (_ol_TileState_);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assertionerror_js__ = __webpack_require__(50);

var _ol_asserts_ = {};


/**
 * @param {*} assertion Assertion we expected to be truthy.
 * @param {number} errorCode Error code.
 */
_ol_asserts_.assert = function(assertion, errorCode) {
  if (!assertion) {
    throw new __WEBPACK_IMPORTED_MODULE_0__assertionerror_js__["a" /* default */](errorCode);
  }
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_asserts_);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Projection units: `'degrees'`, `'ft'`, `'m'`, `'pixels'`, `'tile-pixels'` or
 * `'us-ft'`.
 * @enum {string}
 */
var _ol_proj_Units_ = {
  DEGREES: 'degrees',
  FEET: 'ft',
  METERS: 'm',
  PIXELS: 'pixels',
  TILE_PIXELS: 'tile-pixels',
  USFEET: 'us-ft'
};


/**
 * Meters per unit lookup table.
 * @const
 * @type {Object.<ol.proj.Units, number>}
 * @api
 */
_ol_proj_Units_.METERS_PER_UNIT = {};
// use the radius of the Normal sphere
_ol_proj_Units_.METERS_PER_UNIT[_ol_proj_Units_.DEGREES] =
    2 * Math.PI * 6370997 / 360;
_ol_proj_Units_.METERS_PER_UNIT[_ol_proj_Units_.FEET] = 0.3048;
_ol_proj_Units_.METERS_PER_UNIT[_ol_proj_Units_.METERS] = 1;
_ol_proj_Units_.METERS_PER_UNIT[_ol_proj_Units_.USFEET] = 1200 / 3937;
/* harmony default export */ __webpack_exports__["a"] = (_ol_proj_Units_);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__disposable_js__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_event_js__ = __webpack_require__(12);





/**
 * @classdesc
 * A simplified implementation of the W3C DOM Level 2 EventTarget interface.
 * @see {@link https://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-EventTarget}
 *
 * There are two important simplifications compared to the specification:
 *
 * 1. The handling of `useCapture` in `addEventListener` and
 *    `removeEventListener`. There is no real capture model.
 * 2. The handling of `stopPropagation` and `preventDefault` on `dispatchEvent`.
 *    There is no event target hierarchy. When a listener calls
 *    `stopPropagation` or `preventDefault` on an event object, it means that no
 *    more listeners after this one will be called. Same as when the listener
 *    returns false.
 *
 * @constructor
 * @extends {ol.Disposable}
 */
var _ol_events_EventTarget_ = function() {

  __WEBPACK_IMPORTED_MODULE_1__disposable_js__["a" /* default */].call(this);

  /**
   * @private
   * @type {!Object.<string, number>}
   */
  this.pendingRemovals_ = {};

  /**
   * @private
   * @type {!Object.<string, number>}
   */
  this.dispatching_ = {};

  /**
   * @private
   * @type {!Object.<string, Array.<ol.EventsListenerFunctionType>>}
   */
  this.listeners_ = {};

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_events_EventTarget_, __WEBPACK_IMPORTED_MODULE_1__disposable_js__["a" /* default */]);


/**
 * @param {string} type Type.
 * @param {ol.EventsListenerFunctionType} listener Listener.
 */
_ol_events_EventTarget_.prototype.addEventListener = function(type, listener) {
  var listeners = this.listeners_[type];
  if (!listeners) {
    listeners = this.listeners_[type] = [];
  }
  if (listeners.indexOf(listener) === -1) {
    listeners.push(listener);
  }
};


/**
 * @param {{type: string,
 *     target: (EventTarget|ol.events.EventTarget|undefined)}|ol.events.Event|
 *     string} event Event or event type.
 * @return {boolean|undefined} `false` if anyone called preventDefault on the
 *     event object or if any of the listeners returned false.
 */
_ol_events_EventTarget_.prototype.dispatchEvent = function(event) {
  var evt = typeof event === 'string' ? new __WEBPACK_IMPORTED_MODULE_3__events_event_js__["a" /* default */](event) : event;
  var type = evt.type;
  evt.target = this;
  var listeners = this.listeners_[type];
  var propagate;
  if (listeners) {
    if (!(type in this.dispatching_)) {
      this.dispatching_[type] = 0;
      this.pendingRemovals_[type] = 0;
    }
    ++this.dispatching_[type];
    for (var i = 0, ii = listeners.length; i < ii; ++i) {
      if (listeners[i].call(this, evt) === false || evt.propagationStopped) {
        propagate = false;
        break;
      }
    }
    --this.dispatching_[type];
    if (this.dispatching_[type] === 0) {
      var pendingRemovals = this.pendingRemovals_[type];
      delete this.pendingRemovals_[type];
      while (pendingRemovals--) {
        this.removeEventListener(type, __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].nullFunction);
      }
      delete this.dispatching_[type];
    }
    return propagate;
  }
};


/**
 * @inheritDoc
 */
_ol_events_EventTarget_.prototype.disposeInternal = function() {
  __WEBPACK_IMPORTED_MODULE_2__events_js__["a" /* default */].unlistenAll(this);
};


/**
 * Get the listeners for a specified event type. Listeners are returned in the
 * order that they will be called in.
 *
 * @param {string} type Type.
 * @return {Array.<ol.EventsListenerFunctionType>} Listeners.
 */
_ol_events_EventTarget_.prototype.getListeners = function(type) {
  return this.listeners_[type];
};


/**
 * @param {string=} opt_type Type. If not provided,
 *     `true` will be returned if this EventTarget has any listeners.
 * @return {boolean} Has listeners.
 */
_ol_events_EventTarget_.prototype.hasListener = function(opt_type) {
  return opt_type ?
    opt_type in this.listeners_ :
    Object.keys(this.listeners_).length > 0;
};


/**
 * @param {string} type Type.
 * @param {ol.EventsListenerFunctionType} listener Listener.
 */
_ol_events_EventTarget_.prototype.removeEventListener = function(type, listener) {
  var listeners = this.listeners_[type];
  if (listeners) {
    var index = listeners.indexOf(listener);
    if (type in this.pendingRemovals_) {
      // make listener a no-op, and remove later in #dispatchEvent()
      listeners[index] = __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].nullFunction;
      ++this.pendingRemovals_[type];
    } else {
      listeners.splice(index, 1);
      if (listeners.length === 0) {
        delete this.listeners_[type];
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_events_EventTarget_);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @classdesc
 * Stripped down implementation of the W3C DOM Level 2 Event interface.
 * @see {@link https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-interface}
 *
 * This implementation only provides `type` and `target` properties, and
 * `stopPropagation` and `preventDefault` methods. It is meant as base class
 * for higher level events defined in the library, and works with
 * {@link ol.events.EventTarget}.
 *
 * @constructor
 * @implements {oli.events.Event}
 * @param {string} type Type.
 */
var _ol_events_Event_ = function(type) {

  /**
   * @type {boolean}
   */
  this.propagationStopped;

  /**
   * The event type.
   * @type {string}
   * @api
   */
  this.type = type;

  /**
   * The event target.
   * @type {Object}
   * @api
   */
  this.target = null;

};


/**
 * Stop event propagation.
 * @function
 * @override
 * @api
 */
_ol_events_Event_.prototype.preventDefault =

  /**
   * Stop event propagation.
   * @function
   * @override
   * @api
   */
  _ol_events_Event_.prototype.stopPropagation = function() {
    this.propagationStopped = true;
  };


/**
 * @param {Event|ol.events.Event} evt Event
 */
_ol_events_Event_.stopPropagation = function(evt) {
  evt.stopPropagation();
};


/**
 * @param {Event|ol.events.Event} evt Event
 */
_ol_events_Event_.preventDefault = function(evt) {
  evt.preventDefault();
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_events_Event_);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__size_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extent_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extent_corner_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__obj_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__proj_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__proj_units_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tilegrid_tilegrid_js__ = __webpack_require__(64);








var _ol_tilegrid_ = {};


/**
 * @param {ol.proj.Projection} projection Projection.
 * @return {!ol.tilegrid.TileGrid} Default tile grid for the passed projection.
 */
_ol_tilegrid_.getForProjection = function(projection) {
  var tileGrid = projection.getDefaultTileGrid();
  if (!tileGrid) {
    tileGrid = _ol_tilegrid_.createForProjection(projection);
    projection.setDefaultTileGrid(tileGrid);
  }
  return tileGrid;
};


/**
 * @param {ol.tilegrid.TileGrid} tileGrid Tile grid.
 * @param {ol.TileCoord} tileCoord Tile coordinate.
 * @param {ol.proj.Projection} projection Projection.
 * @return {ol.TileCoord} Tile coordinate.
 */
_ol_tilegrid_.wrapX = function(tileGrid, tileCoord, projection) {
  var z = tileCoord[0];
  var center = tileGrid.getTileCoordCenter(tileCoord);
  var projectionExtent = _ol_tilegrid_.extentFromProjection(projection);
  if (!__WEBPACK_IMPORTED_MODULE_2__extent_js__["a" /* default */].containsCoordinate(projectionExtent, center)) {
    var worldWidth = __WEBPACK_IMPORTED_MODULE_2__extent_js__["a" /* default */].getWidth(projectionExtent);
    var worldsAway = Math.ceil((projectionExtent[0] - center[0]) / worldWidth);
    center[0] += worldWidth * worldsAway;
    return tileGrid.getTileCoordForCoordAndZ(center, z);
  } else {
    return tileCoord;
  }
};


/**
 * @param {ol.Extent} extent Extent.
 * @param {number=} opt_maxZoom Maximum zoom level (default is
 *     ol.DEFAULT_MAX_ZOOM).
 * @param {number|ol.Size=} opt_tileSize Tile size (default uses
 *     ol.DEFAULT_TILE_SIZE).
 * @param {ol.extent.Corner=} opt_corner Extent corner (default is
 *     ol.extent.Corner.TOP_LEFT).
 * @return {!ol.tilegrid.TileGrid} TileGrid instance.
 */
_ol_tilegrid_.createForExtent = function(extent, opt_maxZoom, opt_tileSize, opt_corner) {
  var corner = opt_corner !== undefined ?
    opt_corner : __WEBPACK_IMPORTED_MODULE_3__extent_corner_js__["a" /* default */].TOP_LEFT;

  var resolutions = _ol_tilegrid_.resolutionsFromExtent(
      extent, opt_maxZoom, opt_tileSize);

  return new __WEBPACK_IMPORTED_MODULE_7__tilegrid_tilegrid_js__["a" /* default */]({
    extent: extent,
    origin: __WEBPACK_IMPORTED_MODULE_2__extent_js__["a" /* default */].getCorner(extent, corner),
    resolutions: resolutions,
    tileSize: opt_tileSize
  });
};


/**
 * Creates a tile grid with a standard XYZ tiling scheme.
 * @param {olx.tilegrid.XYZOptions=} opt_options Tile grid options.
 * @return {!ol.tilegrid.TileGrid} Tile grid instance.
 * @api
 */
_ol_tilegrid_.createXYZ = function(opt_options) {
  var options = /** @type {olx.tilegrid.TileGridOptions} */ ({});
  __WEBPACK_IMPORTED_MODULE_4__obj_js__["a" /* default */].assign(options, opt_options !== undefined ?
    opt_options : /** @type {olx.tilegrid.XYZOptions} */ ({}));
  if (options.extent === undefined) {
    options.extent = __WEBPACK_IMPORTED_MODULE_5__proj_js__["default"].get('EPSG:3857').getExtent();
  }
  options.resolutions = _ol_tilegrid_.resolutionsFromExtent(
      options.extent, options.maxZoom, options.tileSize);
  delete options.maxZoom;

  return new __WEBPACK_IMPORTED_MODULE_7__tilegrid_tilegrid_js__["a" /* default */](options);
};


/**
 * Create a resolutions array from an extent.  A zoom factor of 2 is assumed.
 * @param {ol.Extent} extent Extent.
 * @param {number=} opt_maxZoom Maximum zoom level (default is
 *     ol.DEFAULT_MAX_ZOOM).
 * @param {number|ol.Size=} opt_tileSize Tile size (default uses
 *     ol.DEFAULT_TILE_SIZE).
 * @return {!Array.<number>} Resolutions array.
 */
_ol_tilegrid_.resolutionsFromExtent = function(extent, opt_maxZoom, opt_tileSize) {
  var maxZoom = opt_maxZoom !== undefined ?
    opt_maxZoom : __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].DEFAULT_MAX_ZOOM;

  var height = __WEBPACK_IMPORTED_MODULE_2__extent_js__["a" /* default */].getHeight(extent);
  var width = __WEBPACK_IMPORTED_MODULE_2__extent_js__["a" /* default */].getWidth(extent);

  var tileSize = __WEBPACK_IMPORTED_MODULE_1__size_js__["a" /* default */].toSize(opt_tileSize !== undefined ?
    opt_tileSize : __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].DEFAULT_TILE_SIZE);
  var maxResolution = Math.max(
      width / tileSize[0], height / tileSize[1]);

  var length = maxZoom + 1;
  var resolutions = new Array(length);
  for (var z = 0; z < length; ++z) {
    resolutions[z] = maxResolution / Math.pow(2, z);
  }
  return resolutions;
};


/**
 * @param {ol.ProjectionLike} projection Projection.
 * @param {number=} opt_maxZoom Maximum zoom level (default is
 *     ol.DEFAULT_MAX_ZOOM).
 * @param {number|ol.Size=} opt_tileSize Tile size (default uses
 *     ol.DEFAULT_TILE_SIZE).
 * @param {ol.extent.Corner=} opt_corner Extent corner (default is
 *     ol.extent.Corner.BOTTOM_LEFT).
 * @return {!ol.tilegrid.TileGrid} TileGrid instance.
 */
_ol_tilegrid_.createForProjection = function(projection, opt_maxZoom, opt_tileSize, opt_corner) {
  var extent = _ol_tilegrid_.extentFromProjection(projection);
  return _ol_tilegrid_.createForExtent(
      extent, opt_maxZoom, opt_tileSize, opt_corner);
};


/**
 * Generate a tile grid extent from a projection.  If the projection has an
 * extent, it is used.  If not, a global extent is assumed.
 * @param {ol.ProjectionLike} projection Projection.
 * @return {ol.Extent} Extent.
 */
_ol_tilegrid_.extentFromProjection = function(projection) {
  projection = __WEBPACK_IMPORTED_MODULE_5__proj_js__["default"].get(projection);
  var extent = projection.getExtent();
  if (!extent) {
    var half = 180 * __WEBPACK_IMPORTED_MODULE_5__proj_js__["default"].METERS_PER_UNIT[__WEBPACK_IMPORTED_MODULE_6__proj_units_js__["a" /* default */].DEGREES] /
        projection.getMetersPerUnit();
    extent = __WEBPACK_IMPORTED_MODULE_2__extent_js__["a" /* default */].createOrUpdate(-half, -half, half, half);
  }
  return extent;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_tilegrid_);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objecteventtype_js__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__observable_js__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_event_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__obj_js__ = __webpack_require__(6);






/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Most non-trivial classes inherit from this.
 *
 * This extends {@link ol.Observable} with observable properties, where each
 * property is observable as well as the object as a whole.
 *
 * Classes that inherit from this have pre-defined properties, to which you can
 * add your owns. The pre-defined properties are listed in this documentation as
 * 'Observable Properties', and have their own accessors; for example,
 * {@link ol.Map} has a `target` property, accessed with `getTarget()`  and
 * changed with `setTarget()`. Not all properties are however settable. There
 * are also general-purpose accessors `get()` and `set()`. For example,
 * `get('target')` is equivalent to `getTarget()`.
 *
 * The `set` accessors trigger a change event, and you can monitor this by
 * registering a listener. For example, {@link ol.View} has a `center`
 * property, so `view.on('change:center', function(evt) {...});` would call the
 * function whenever the value of the center property changes. Within the
 * function, `evt.target` would be the view, so `evt.target.getCenter()` would
 * return the new center.
 *
 * You can add your own observable properties with
 * `object.set('prop', 'value')`, and retrieve that with `object.get('prop')`.
 * You can listen for changes on that property value with
 * `object.on('change:prop', listener)`. You can get a list of all
 * properties with {@link ol.Object#getProperties object.getProperties()}.
 *
 * Note that the observable properties are separate from standard JS properties.
 * You can, for example, give your map object a title with
 * `map.title='New title'` and with `map.set('title', 'Another title')`. The
 * first will be a `hasOwnProperty`; the second will appear in
 * `getProperties()`. Only the second is observable.
 *
 * Properties can be deleted by using the unset method. E.g.
 * object.unset('foo').
 *
 * @constructor
 * @extends {ol.Observable}
 * @param {Object.<string, *>=} opt_values An object with key-value pairs.
 * @fires ol.Object.Event
 * @api
 */
var _ol_Object_ = function(opt_values) {
  __WEBPACK_IMPORTED_MODULE_2__observable_js__["a" /* default */].call(this);

  // Call ol.getUid to ensure that the order of objects' ids is the same as
  // the order in which they were created.  This also helps to ensure that
  // object properties are always added in the same order, which helps many
  // JavaScript engines generate faster code.
  __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].getUid(this);

  /**
   * @private
   * @type {!Object.<string, *>}
   */
  this.values_ = {};

  if (opt_values !== undefined) {
    this.setProperties(opt_values);
  }
};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_Object_, __WEBPACK_IMPORTED_MODULE_2__observable_js__["a" /* default */]);


/**
 * @private
 * @type {Object.<string, string>}
 */
_ol_Object_.changeEventTypeCache_ = {};


/**
 * @param {string} key Key name.
 * @return {string} Change name.
 */
_ol_Object_.getChangeEventType = function(key) {
  return _ol_Object_.changeEventTypeCache_.hasOwnProperty(key) ?
    _ol_Object_.changeEventTypeCache_[key] :
    (_ol_Object_.changeEventTypeCache_[key] = 'change:' + key);
};


/**
 * Gets a value.
 * @param {string} key Key name.
 * @return {*} Value.
 * @api
 */
_ol_Object_.prototype.get = function(key) {
  var value;
  if (this.values_.hasOwnProperty(key)) {
    value = this.values_[key];
  }
  return value;
};


/**
 * Get a list of object property names.
 * @return {Array.<string>} List of property names.
 * @api
 */
_ol_Object_.prototype.getKeys = function() {
  return Object.keys(this.values_);
};


/**
 * Get an object of all property names and values.
 * @return {Object.<string, *>} Object.
 * @api
 */
_ol_Object_.prototype.getProperties = function() {
  return __WEBPACK_IMPORTED_MODULE_4__obj_js__["a" /* default */].assign({}, this.values_);
};


/**
 * @param {string} key Key name.
 * @param {*} oldValue Old value.
 */
_ol_Object_.prototype.notify = function(key, oldValue) {
  var eventType;
  eventType = _ol_Object_.getChangeEventType(key);
  this.dispatchEvent(new _ol_Object_.Event(eventType, key, oldValue));
  eventType = __WEBPACK_IMPORTED_MODULE_1__objecteventtype_js__["a" /* default */].PROPERTYCHANGE;
  this.dispatchEvent(new _ol_Object_.Event(eventType, key, oldValue));
};


/**
 * Sets a value.
 * @param {string} key Key name.
 * @param {*} value Value.
 * @param {boolean=} opt_silent Update without triggering an event.
 * @api
 */
_ol_Object_.prototype.set = function(key, value, opt_silent) {
  if (opt_silent) {
    this.values_[key] = value;
  } else {
    var oldValue = this.values_[key];
    this.values_[key] = value;
    if (oldValue !== value) {
      this.notify(key, oldValue);
    }
  }
};


/**
 * Sets a collection of key-value pairs.  Note that this changes any existing
 * properties and adds new ones (it does not remove any existing properties).
 * @param {Object.<string, *>} values Values.
 * @param {boolean=} opt_silent Update without triggering an event.
 * @api
 */
_ol_Object_.prototype.setProperties = function(values, opt_silent) {
  var key;
  for (key in values) {
    this.set(key, values[key], opt_silent);
  }
};


/**
 * Unsets a property.
 * @param {string} key Key name.
 * @param {boolean=} opt_silent Unset without triggering an event.
 * @api
 */
_ol_Object_.prototype.unset = function(key, opt_silent) {
  if (key in this.values_) {
    var oldValue = this.values_[key];
    delete this.values_[key];
    if (!opt_silent) {
      this.notify(key, oldValue);
    }
  }
};


/**
 * @classdesc
 * Events emitted by {@link ol.Object} instances are instances of this type.
 *
 * @param {string} type The event type.
 * @param {string} key The property name.
 * @param {*} oldValue The old value for `key`.
 * @extends {ol.events.Event}
 * @implements {oli.Object.Event}
 * @constructor
 */
_ol_Object_.Event = function(type, key, oldValue) {
  __WEBPACK_IMPORTED_MODULE_3__events_event_js__["a" /* default */].call(this, type);

  /**
   * The name of the property whose value is changing.
   * @type {string}
   * @api
   */
  this.key = key;

  /**
   * The old value. To get the new value use `e.target.get(e.key)` where
   * `e` is the event object.
   * @type {*}
   * @api
   */
  this.oldValue = oldValue;

};
__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_Object_.Event, __WEBPACK_IMPORTED_MODULE_3__events_event_js__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (_ol_Object_);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @enum {number}
 */
var _ol_ImageState_ = {
  IDLE: 0,
  LOADING: 1,
  LOADED: 2,
  ERROR: 3
};

/* harmony default export */ __webpack_exports__["a"] = (_ol_ImageState_);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__proj_units_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proj_proj4_js__ = __webpack_require__(29);




/**
 * @classdesc
 * Projection definition class. One of these is created for each projection
 * supported in the application and stored in the {@link ol.proj} namespace.
 * You can use these in applications, but this is not required, as API params
 * and options use {@link ol.ProjectionLike} which means the simple string
 * code will suffice.
 *
 * You can use {@link ol.proj.get} to retrieve the object for a particular
 * projection.
 *
 * The library includes definitions for `EPSG:4326` and `EPSG:3857`, together
 * with the following aliases:
 * * `EPSG:4326`: CRS:84, urn:ogc:def:crs:EPSG:6.6:4326,
 *     urn:ogc:def:crs:OGC:1.3:CRS84, urn:ogc:def:crs:OGC:2:84,
 *     http://www.opengis.net/gml/srs/epsg.xml#4326,
 *     urn:x-ogc:def:crs:EPSG:4326
 * * `EPSG:3857`: EPSG:102100, EPSG:102113, EPSG:900913,
 *     urn:ogc:def:crs:EPSG:6.18:3:3857,
 *     http://www.opengis.net/gml/srs/epsg.xml#3857
 *
 * If you use proj4js, aliases can be added using `proj4.defs()`; see
 * [documentation](https://github.com/proj4js/proj4js). To set an alternative
 * namespace for proj4, use {@link ol.proj.setProj4}.
 *
 * @constructor
 * @param {olx.ProjectionOptions} options Projection options.
 * @struct
 * @api
 */
var _ol_proj_Projection_ = function(options) {
  /**
   * @private
   * @type {string}
   */
  this.code_ = options.code;

  /**
   * Units of projected coordinates. When set to `ol.proj.Units.TILE_PIXELS`, a
   * `this.extent_` and `this.worldExtent_` must be configured properly for each
   * tile.
   * @private
   * @type {ol.proj.Units}
   */
  this.units_ = /** @type {ol.proj.Units} */ (options.units);

  /**
   * Validity extent of the projection in projected coordinates. For projections
   * with `ol.proj.Units.TILE_PIXELS` units, this is the extent of the tile in
   * tile pixel space.
   * @private
   * @type {ol.Extent}
   */
  this.extent_ = options.extent !== undefined ? options.extent : null;

  /**
   * Extent of the world in EPSG:4326. For projections with
   * `ol.proj.Units.TILE_PIXELS` units, this is the extent of the tile in
   * projected coordinate space.
   * @private
   * @type {ol.Extent}
   */
  this.worldExtent_ = options.worldExtent !== undefined ?
    options.worldExtent : null;

  /**
   * @private
   * @type {string}
   */
  this.axisOrientation_ = options.axisOrientation !== undefined ?
    options.axisOrientation : 'enu';

  /**
   * @private
   * @type {boolean}
   */
  this.global_ = options.global !== undefined ? options.global : false;

  /**
   * @private
   * @type {boolean}
   */
  this.canWrapX_ = !!(this.global_ && this.extent_);

  /**
   * @private
   * @type {function(number, ol.Coordinate):number|undefined}
   */
  this.getPointResolutionFunc_ = options.getPointResolution;

  /**
   * @private
   * @type {ol.tilegrid.TileGrid}
   */
  this.defaultTileGrid_ = null;

  /**
   * @private
   * @type {number|undefined}
   */
  this.metersPerUnit_ = options.metersPerUnit;

  var code = options.code;
  if (__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].ENABLE_PROJ4JS) {
    var proj4js = __WEBPACK_IMPORTED_MODULE_2__proj_proj4_js__["a" /* default */].get();
    if (typeof proj4js == 'function') {
      var def = proj4js.defs(code);
      if (def !== undefined) {
        if (def.axis !== undefined && options.axisOrientation === undefined) {
          this.axisOrientation_ = def.axis;
        }
        if (options.metersPerUnit === undefined) {
          this.metersPerUnit_ = def.to_meter;
        }
        if (options.units === undefined) {
          this.units_ = def.units;
        }
      }
    }
  }
};


/**
 * @return {boolean} The projection is suitable for wrapping the x-axis
 */
_ol_proj_Projection_.prototype.canWrapX = function() {
  return this.canWrapX_;
};


/**
 * Get the code for this projection, e.g. 'EPSG:4326'.
 * @return {string} Code.
 * @api
 */
_ol_proj_Projection_.prototype.getCode = function() {
  return this.code_;
};


/**
 * Get the validity extent for this projection.
 * @return {ol.Extent} Extent.
 * @api
 */
_ol_proj_Projection_.prototype.getExtent = function() {
  return this.extent_;
};


/**
 * Get the units of this projection.
 * @return {ol.proj.Units} Units.
 * @api
 */
_ol_proj_Projection_.prototype.getUnits = function() {
  return this.units_;
};


/**
 * Get the amount of meters per unit of this projection.  If the projection is
 * not configured with `metersPerUnit` or a units identifier, the return is
 * `undefined`.
 * @return {number|undefined} Meters.
 * @api
 */
_ol_proj_Projection_.prototype.getMetersPerUnit = function() {
  return this.metersPerUnit_ || __WEBPACK_IMPORTED_MODULE_1__proj_units_js__["a" /* default */].METERS_PER_UNIT[this.units_];
};


/**
 * Get the world extent for this projection.
 * @return {ol.Extent} Extent.
 * @api
 */
_ol_proj_Projection_.prototype.getWorldExtent = function() {
  return this.worldExtent_;
};


/**
 * Get the axis orientation of this projection.
 * Example values are:
 * enu - the default easting, northing, elevation.
 * neu - northing, easting, up - useful for "lat/long" geographic coordinates,
 *     or south orientated transverse mercator.
 * wnu - westing, northing, up - some planetary coordinate systems have
 *     "west positive" coordinate systems
 * @return {string} Axis orientation.
 * @api
 */
_ol_proj_Projection_.prototype.getAxisOrientation = function() {
  return this.axisOrientation_;
};


/**
 * Is this projection a global projection which spans the whole world?
 * @return {boolean} Whether the projection is global.
 * @api
 */
_ol_proj_Projection_.prototype.isGlobal = function() {
  return this.global_;
};


/**
* Set if the projection is a global projection which spans the whole world
* @param {boolean} global Whether the projection is global.
* @api
*/
_ol_proj_Projection_.prototype.setGlobal = function(global) {
  this.global_ = global;
  this.canWrapX_ = !!(global && this.extent_);
};


/**
 * @return {ol.tilegrid.TileGrid} The default tile grid.
 */
_ol_proj_Projection_.prototype.getDefaultTileGrid = function() {
  return this.defaultTileGrid_;
};


/**
 * @param {ol.tilegrid.TileGrid} tileGrid The default tile grid.
 */
_ol_proj_Projection_.prototype.setDefaultTileGrid = function(tileGrid) {
  this.defaultTileGrid_ = tileGrid;
};


/**
 * Set the validity extent for this projection.
 * @param {ol.Extent} extent Extent.
 * @api
 */
_ol_proj_Projection_.prototype.setExtent = function(extent) {
  this.extent_ = extent;
  this.canWrapX_ = !!(this.global_ && extent);
};


/**
 * Set the world extent for this projection.
 * @param {ol.Extent} worldExtent World extent
 *     [minlon, minlat, maxlon, maxlat].
 * @api
 */
_ol_proj_Projection_.prototype.setWorldExtent = function(worldExtent) {
  this.worldExtent_ = worldExtent;
};


/**
 * Set the getPointResolution function (see {@link ol.proj#getPointResolution}
 * for this projection.
 * @param {function(number, ol.Coordinate):number} func Function
 * @api
 */
_ol_proj_Projection_.prototype.setGetPointResolution = function(func) {
  this.getPointResolutionFunc_ = func;
};


/**
 * Get the custom point resolution function for this projection (if set).
 * @return {function(number, ol.Coordinate):number|undefined} The custom point
 * resolution function (if set).
 */
_ol_proj_Projection_.prototype.getPointResolutionFunc = function() {
  return this.getPointResolutionFunc_;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_proj_Projection_);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _ol_size_ = {};


/**
 * Returns a buffered size.
 * @param {ol.Size} size Size.
 * @param {number} buffer Buffer.
 * @param {ol.Size=} opt_size Optional reusable size array.
 * @return {ol.Size} The buffered size.
 */
_ol_size_.buffer = function(size, buffer, opt_size) {
  if (opt_size === undefined) {
    opt_size = [0, 0];
  }
  opt_size[0] = size[0] + 2 * buffer;
  opt_size[1] = size[1] + 2 * buffer;
  return opt_size;
};


/**
 * Determines if a size has a positive area.
 * @param {ol.Size} size The size to test.
 * @return {boolean} The size has a positive area.
 */
_ol_size_.hasArea = function(size) {
  return size[0] > 0 && size[1] > 0;
};


/**
 * Returns a size scaled by a ratio. The result will be an array of integers.
 * @param {ol.Size} size Size.
 * @param {number} ratio Ratio.
 * @param {ol.Size=} opt_size Optional reusable size array.
 * @return {ol.Size} The scaled size.
 */
_ol_size_.scale = function(size, ratio, opt_size) {
  if (opt_size === undefined) {
    opt_size = [0, 0];
  }
  opt_size[0] = (size[0] * ratio + 0.5) | 0;
  opt_size[1] = (size[1] * ratio + 0.5) | 0;
  return opt_size;
};


/**
 * Returns an `ol.Size` array for the passed in number (meaning: square) or
 * `ol.Size` array.
 * (meaning: non-square),
 * @param {number|ol.Size} size Width and height.
 * @param {ol.Size=} opt_size Optional reusable size array.
 * @return {ol.Size} Size.
 * @api
 */
_ol_size_.toSize = function(size, opt_size) {
  if (Array.isArray(size)) {
    return size;
  } else {
    if (opt_size === undefined) {
      opt_size = [size, size];
    } else {
      opt_size[0] = opt_size[1] = /** @type {number} */ (size);
    }
    return opt_size;
  }
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_size_);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var vector_1 = __webpack_require__(19);
var grid_1 = __webpack_require__(40);
var colorScale_1 = __webpack_require__(41);
var animationBucket_1 = __webpack_require__(42);
var Windy = /** @class */ (function () {
    function Windy(options) {
        this.canvas = null;
        this.particuleMultiplier = 1 / 300;
        this.autoColorRange = false;
        this.particules = [];
        this.animationLoop = null;
        this.then = 0;
        this.canvas = options.canvas;
        if (options.minVelocity === undefined && options.maxVelocity === undefined) {
            this.autoColorRange = true;
        }
        this.colorScale = new colorScale_1.default(options.minVelocity || 0, options.maxVelocity || 10, options.colorScale);
        this.velocityScale = options.velocityScale || 0.01;
        this.particleAge = options.particleAge || 64;
        this.setData(options.data);
        this.particuleMultiplier = options.particleMultiplier || 1 / 300;
        this.particuleLineWidth = options.lineWidth || 1;
        var frameRate = options.frameRate || 15;
        this.frameTime = 1000 / frameRate;
    }
    Object.defineProperty(Windy.prototype, "particuleCount", {
        get: function () {
            var particuleReduction = ((/android|blackberry|iemobile|ipad|iphone|ipod|opera mini|webos/i).test(navigator.userAgent)) ? (Math.pow(window.devicePixelRatio, 1 / 3) || 1.6) : 1;
            return Math.round(this.layer.canvasBound.width * this.layer.canvasBound.height * this.particuleMultiplier) * particuleReduction;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Load data
     * @param data
     */
    Windy.prototype.setData = function (data) {
        var uData = null;
        var vData = null;
        var grid = [];
        data.forEach(function (record) {
            switch (record.header.parameterCategory + "," + record.header.parameterNumber) {
                case "1,2":
                case "2,2":
                    uData = record;
                    break;
                case "1,3":
                case "2,3":
                    vData = record;
                    break;
                default:
            }
        });
        if (!uData || !vData) {
            console.warn("Data are not correct format");
            return;
        }
        uData.data.forEach(function (u, index) {
            grid.push(new vector_1.default(u, vData.data[index]));
        });
        //console.log('uData', uData);
        //console.log('vData', vData);
        this.grid = new grid_1.default(grid, uData.header.la1, uData.header.lo1, uData.header.dy, uData.header.dx, uData.header.ny, uData.header.nx);
        this.λ0 = uData.header.lo1;
        this.φ0 = uData.header.la1;
        this.Δλ = uData.header.dx;
        this.Δφ = uData.header.dy;
        this.ni = uData.header.nx;
        this.nj = uData.header.ny; // number of grid points W-E and N-S (e.g., 144 x 73)
        var p = 0;
        var isContinuous = Math.floor(this.ni * this.Δλ) >= 360;
        for (var j = 0; j < this.nj; j++) {
            var row = [];
            for (var i = 0; i < this.ni; i++, p++) {
                row[i] = this.grid.data[p];
            }
            if (isContinuous) {
                // For wrapped grids, duplicate first column as last column to simplify interpolation logic
                row.push(row[0]);
            }
            this.grid[j] = row;
        }
        if (this.autoColorRange) {
            var minMax = this.grid.valueRange;
            this.colorScale.setMinMax(minMax[0], minMax[1]);
        }
    };
    Windy.prototype.floorMod = function (a, n) {
        return a - n * Math.floor(a / n);
    };
    ;
    Windy.prototype.isValue = function (x) {
        return x !== null && x !== undefined;
    };
    ;
    Windy.prototype.bilinearInterpolateVector = function (x, y, g00, g10, g01, g11) {
        var rx = (1 - x);
        var ry = (1 - y);
        var a = rx * ry, b = x * ry, c = rx * y, d = x * y;
        var u = g00.u * a + g10.u * b + g01.u * c + g11.u * d;
        var v = g00.v * a + g10.v * b + g01.v * c + g11.v * d;
        return [u, v, Math.sqrt(u * u + v * v)];
    };
    ;
    /* Get interpolated grid value from Lon/Lat position
    * @param λ {Float} Longitude
    * @param φ {Float} Latitude
    * @returns {Object}
    */
    Windy.prototype.interpolate = function (λ, φ) {
        if (!this.grid) {
            return null;
        }
        var i = this.floorMod(λ - this.λ0, 360) / this.Δλ; // calculate longitude index in wrapped range [0, 360)
        var j = (this.φ0 - φ) / this.Δφ; // calculate latitude index in direction +90 to -90
        var fi = Math.floor(i);
        var ci = fi + 1;
        var fj = Math.floor(j);
        var cj = fj + 1;
        var row = this.grid[fj]; //Dont know why he dosent found any row ERRRROR
        if (row) {
            var g00 = row[fi];
            var g10 = row[ci];
            if (this.isValue(g00) && this.isValue(g10) && (row = this.grid[cj])) {
                var g01 = row[fi];
                var g11 = row[ci];
                if (this.isValue(g01) && this.isValue(g11)) {
                    // All four points found, so interpolate the value.
                    return this.bilinearInterpolateVector(i - fi, j - fj, g00, g10, g01, g11);
                }
            }
        }
        return null;
    };
    ;
    Windy.prototype.getParticuleWind = function (p) {
        var lngLat = this.layer.canvasToMap(p.x, p.y);
        var wind = this.grid.get(lngLat[0], lngLat[1]);
        p.intensity = wind.intensity;
        var mapArea = this.layer.mapBound.height * this.layer.mapBound.width;
        var velocityScale = this.velocityScale * Math.pow(mapArea, 0.4);
        this.layer.distort(lngLat[0], lngLat[1], p.x, p.y, velocityScale, wind);
        return wind;
    };
    Windy.prototype.start = function (layer) {
        this.context2D = this.canvas.getContext("2d");
        this.context2D.lineWidth = this.particuleLineWidth;
        this.context2D.fillStyle = "rgba(0, 0, 0, 0.97)";
        this.context2D.globalAlpha = 0.6;
        this.layer = layer;
        this.animationBucket = new animationBucket_1.default(this.colorScale);
        this.particules.splice(0, this.particules.length);
        for (var i = 0; i < this.particuleCount; i++) {
            this.particules.push(this.layer.canvasBound.getRandomParticule(this.particleAge));
        }
        this.then = new Date().getTime();
        this.frame();
    };
    Windy.prototype.frame = function () {
        var _this = this;
        this.animationLoop = requestAnimationFrame(function () {
            _this.frame();
        });
        var now = new Date().getTime();
        var delta = now - this.then;
        if (delta > this.frameTime) {
            this.then = now - (delta % this.frameTime);
            this.evolve();
            this.draw();
        }
    };
    Windy.prototype.evolve = function () {
        var _this = this;
        this.animationBucket.clear();
        this.particules.forEach(function (p) {
            p.grow();
            if (p.isDead) {
                _this.layer.canvasBound.resetParticule(p);
            }
            var wind = _this.getParticuleWind(p);
            _this.animationBucket.add(p, wind);
        });
    };
    Windy.prototype.draw = function () {
        this.context2D.globalCompositeOperation = "destination-in";
        this.context2D.fillRect(this.layer.canvasBound.xMin, this.layer.canvasBound.yMin, this.layer.canvasBound.width, this.layer.canvasBound.height);
        // Fade existing particle trails.
        this.context2D.globalCompositeOperation = "lighter";
        this.context2D.globalAlpha = 0.9;
        this.animationBucket.draw(this.context2D);
    };
    Windy.prototype.stop = function () {
        this.particules.splice(0, this.particules.length);
        this.animationBucket.clear();
        if (this.animationLoop) {
            clearTimeout(this.animationLoop);
            this.animationLoop = null;
        }
    };
    return Windy;
}());
exports.default = Windy;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vector = /** @class */ (function () {
    function Vector(u, v) {
        this.u = u || 0;
        this.v = v || 0;
    }
    Object.defineProperty(Vector.prototype, "intensity", {
        get: function () {
            return Math.sqrt(this.u * this.u + this.v * this.v);
        },
        enumerable: true,
        configurable: true
    });
    return Vector;
}());
exports.default = Vector;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var particle_1 = __webpack_require__(43);
var CanvasBound = /** @class */ (function () {
    function CanvasBound(xMin, yMin, xMax, yMax) {
        this.xMin = xMin;
        this.yMin = yMin;
        this.xMax = xMax;
        this.yMax = yMax;
    }
    Object.defineProperty(CanvasBound.prototype, "width", {
        get: function () {
            return this.xMax - this.xMin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasBound.prototype, "height", {
        get: function () {
            return this.yMax - this.yMin;
        },
        enumerable: true,
        configurable: true
    });
    CanvasBound.prototype.getRandomParticule = function (maxAge) {
        var x = Math.round(Math.floor(Math.random() * this.width) + this.xMin);
        var y = Math.round(Math.floor(Math.random() * this.height) + this.yMin);
        return new particle_1.default(x, y, maxAge);
    };
    CanvasBound.prototype.resetParticule = function (p) {
        var x = Math.round(Math.floor(Math.random() * this.width) + this.xMin);
        var y = Math.round(Math.floor(Math.random() * this.height) + this.yMin);
        p.reset(x, y);
        return p;
    };
    return CanvasBound;
}());
exports.default = CanvasBound;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MapBound = /** @class */ (function () {
    function MapBound(north, east, south, west) {
        this.north = north * Math.PI / 180;
        this.east = east * Math.PI / 180;
        this.south = south * Math.PI / 180;
        this.west = west * Math.PI / 180;
    }
    Object.defineProperty(MapBound.prototype, "width", {
        get: function () {
            return (720 + this.east - this.west) % 360;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapBound.prototype, "height", {
        get: function () {
            return (360 + this.north - this.south) % 180;
        },
        enumerable: true,
        configurable: true
    });
    return MapBound;
}());
exports.default = MapBound;


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * A layer type used when creating layer renderers.
 * @enum {string}
 */
var _ol_LayerType_ = {
  IMAGE: 'IMAGE',
  TILE: 'TILE',
  VECTOR_TILE: 'VECTOR_TILE',
  VECTOR: 'VECTOR'
};

/* harmony default export */ __webpack_exports__["a"] = (_ol_LayerType_);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events_eventtype_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__object_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layer_base_js__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layer_property_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__obj_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__render_eventtype_js__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__source_state_js__ = __webpack_require__(25);










/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * A visual representation of raster or vector map data.
 * Layers group together those properties that pertain to how the data is to be
 * displayed, irrespective of the source of that data.
 *
 * Layers are usually added to a map with {@link ol.Map#addLayer}. Components
 * like {@link ol.interaction.Select} use unmanaged layers internally. These
 * unmanaged layers are associated with the map using
 * {@link ol.layer.Layer#setMap} instead.
 *
 * A generic `change` event is fired when the state of the source changes.
 *
 * @constructor
 * @abstract
 * @extends {ol.layer.Base}
 * @fires ol.render.Event
 * @param {olx.layer.LayerOptions} options Layer options.
 * @api
 */
var _ol_layer_Layer_ = function(options) {

  var baseOptions = __WEBPACK_IMPORTED_MODULE_6__obj_js__["a" /* default */].assign({}, options);
  delete baseOptions.source;

  __WEBPACK_IMPORTED_MODULE_4__layer_base_js__["a" /* default */].call(this, /** @type {olx.layer.BaseOptions} */ (baseOptions));

  /**
   * @private
   * @type {?ol.EventsKey}
   */
  this.mapPrecomposeKey_ = null;

  /**
   * @private
   * @type {?ol.EventsKey}
   */
  this.mapRenderKey_ = null;

  /**
   * @private
   * @type {?ol.EventsKey}
   */
  this.sourceChangeKey_ = null;

  if (options.map) {
    this.setMap(options.map);
  }

  __WEBPACK_IMPORTED_MODULE_0__events_js__["a" /* default */].listen(this,
      __WEBPACK_IMPORTED_MODULE_3__object_js__["a" /* default */].getChangeEventType(__WEBPACK_IMPORTED_MODULE_5__layer_property_js__["a" /* default */].SOURCE),
      this.handleSourcePropertyChange_, this);

  var source = options.source ? options.source : null;
  this.setSource(source);
};

__WEBPACK_IMPORTED_MODULE_2__index_js__["a" /* default */].inherits(_ol_layer_Layer_, __WEBPACK_IMPORTED_MODULE_4__layer_base_js__["a" /* default */]);


/**
 * Return `true` if the layer is visible, and if the passed resolution is
 * between the layer's minResolution and maxResolution. The comparison is
 * inclusive for `minResolution` and exclusive for `maxResolution`.
 * @param {ol.LayerState} layerState Layer state.
 * @param {number} resolution Resolution.
 * @return {boolean} The layer is visible at the given resolution.
 */
_ol_layer_Layer_.visibleAtResolution = function(layerState, resolution) {
  return layerState.visible && resolution >= layerState.minResolution &&
      resolution < layerState.maxResolution;
};


/**
 * @inheritDoc
 */
_ol_layer_Layer_.prototype.getLayersArray = function(opt_array) {
  var array = opt_array ? opt_array : [];
  array.push(this);
  return array;
};


/**
 * @inheritDoc
 */
_ol_layer_Layer_.prototype.getLayerStatesArray = function(opt_states) {
  var states = opt_states ? opt_states : [];
  states.push(this.getLayerState());
  return states;
};


/**
 * Get the layer source.
 * @return {ol.source.Source} The layer source (or `null` if not yet set).
 * @observable
 * @api
 */
_ol_layer_Layer_.prototype.getSource = function() {
  var source = this.get(__WEBPACK_IMPORTED_MODULE_5__layer_property_js__["a" /* default */].SOURCE);
  return /** @type {ol.source.Source} */ (source) || null;
};


/**
  * @inheritDoc
  */
_ol_layer_Layer_.prototype.getSourceState = function() {
  var source = this.getSource();
  return !source ? __WEBPACK_IMPORTED_MODULE_8__source_state_js__["a" /* default */].UNDEFINED : source.getState();
};


/**
 * @private
 */
_ol_layer_Layer_.prototype.handleSourceChange_ = function() {
  this.changed();
};


/**
 * @private
 */
_ol_layer_Layer_.prototype.handleSourcePropertyChange_ = function() {
  if (this.sourceChangeKey_) {
    __WEBPACK_IMPORTED_MODULE_0__events_js__["a" /* default */].unlistenByKey(this.sourceChangeKey_);
    this.sourceChangeKey_ = null;
  }
  var source = this.getSource();
  if (source) {
    this.sourceChangeKey_ = __WEBPACK_IMPORTED_MODULE_0__events_js__["a" /* default */].listen(source,
        __WEBPACK_IMPORTED_MODULE_1__events_eventtype_js__["a" /* default */].CHANGE, this.handleSourceChange_, this);
  }
  this.changed();
};


/**
 * Sets the layer to be rendered on top of other layers on a map. The map will
 * not manage this layer in its layers collection, and the callback in
 * {@link ol.Map#forEachLayerAtPixel} will receive `null` as layer. This
 * is useful for temporary layers. To remove an unmanaged layer from the map,
 * use `#setMap(null)`.
 *
 * To add the layer to a map and have it managed by the map, use
 * {@link ol.Map#addLayer} instead.
 * @param {ol.PluggableMap} map Map.
 * @api
 */
_ol_layer_Layer_.prototype.setMap = function(map) {
  if (this.mapPrecomposeKey_) {
    __WEBPACK_IMPORTED_MODULE_0__events_js__["a" /* default */].unlistenByKey(this.mapPrecomposeKey_);
    this.mapPrecomposeKey_ = null;
  }
  if (!map) {
    this.changed();
  }
  if (this.mapRenderKey_) {
    __WEBPACK_IMPORTED_MODULE_0__events_js__["a" /* default */].unlistenByKey(this.mapRenderKey_);
    this.mapRenderKey_ = null;
  }
  if (map) {
    this.mapPrecomposeKey_ = __WEBPACK_IMPORTED_MODULE_0__events_js__["a" /* default */].listen(
        map, __WEBPACK_IMPORTED_MODULE_7__render_eventtype_js__["a" /* default */].PRECOMPOSE, function(evt) {
          var layerState = this.getLayerState();
          layerState.managed = false;
          layerState.zIndex = Infinity;
          evt.frameState.layerStatesArray.push(layerState);
          evt.frameState.layerStates[__WEBPACK_IMPORTED_MODULE_2__index_js__["a" /* default */].getUid(this)] = layerState;
        }, this);
    this.mapRenderKey_ = __WEBPACK_IMPORTED_MODULE_0__events_js__["a" /* default */].listen(
        this, __WEBPACK_IMPORTED_MODULE_1__events_eventtype_js__["a" /* default */].CHANGE, map.render, map);
    this.changed();
  }
};


/**
 * Set the layer source.
 * @param {ol.source.Source} source The layer source.
 * @observable
 * @api
 */
_ol_layer_Layer_.prototype.setSource = function(source) {
  this.set(__WEBPACK_IMPORTED_MODULE_5__layer_property_js__["a" /* default */].SOURCE, source);
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_layer_Layer_);


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @enum {string}
 */
var _ol_layer_Property_ = {
  OPACITY: 'opacity',
  VISIBLE: 'visible',
  EXTENT: 'extent',
  Z_INDEX: 'zIndex',
  MAX_RESOLUTION: 'maxResolution',
  MIN_RESOLUTION: 'minResolution',
  SOURCE: 'source'
};

/* harmony default export */ __webpack_exports__["a"] = (_ol_layer_Property_);


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * State of the source, one of 'undefined', 'loading', 'ready' or 'error'.
 * @enum {string}
 */
var _ol_source_State_ = {
  UNDEFINED: 'undefined',
  LOADING: 'loading',
  READY: 'ready',
  ERROR: 'error'
};

/* harmony default export */ __webpack_exports__["a"] = (_ol_source_State_);



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events_eventtarget_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_eventtype_js__ = __webpack_require__(2);




/**
 * @constructor
 * @abstract
 * @extends {ol.events.EventTarget}
 * @param {ol.Extent} extent Extent.
 * @param {number|undefined} resolution Resolution.
 * @param {number} pixelRatio Pixel ratio.
 * @param {ol.ImageState} state State.
 */
var _ol_ImageBase_ = function(extent, resolution, pixelRatio, state) {

  __WEBPACK_IMPORTED_MODULE_1__events_eventtarget_js__["a" /* default */].call(this);

  /**
   * @protected
   * @type {ol.Extent}
   */
  this.extent = extent;

  /**
   * @private
   * @type {number}
   */
  this.pixelRatio_ = pixelRatio;

  /**
   * @protected
   * @type {number|undefined}
   */
  this.resolution = resolution;

  /**
   * @protected
   * @type {ol.ImageState}
   */
  this.state = state;

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_ImageBase_, __WEBPACK_IMPORTED_MODULE_1__events_eventtarget_js__["a" /* default */]);


/**
 * @protected
 */
_ol_ImageBase_.prototype.changed = function() {
  this.dispatchEvent(__WEBPACK_IMPORTED_MODULE_2__events_eventtype_js__["a" /* default */].CHANGE);
};


/**
 * @return {ol.Extent} Extent.
 */
_ol_ImageBase_.prototype.getExtent = function() {
  return this.extent;
};


/**
 * @abstract
 * @return {HTMLCanvasElement|Image|HTMLVideoElement} Image.
 */
_ol_ImageBase_.prototype.getImage = function() {};


/**
 * @return {number} PixelRatio.
 */
_ol_ImageBase_.prototype.getPixelRatio = function() {
  return this.pixelRatio_;
};


/**
 * @return {number} Resolution.
 */
_ol_ImageBase_.prototype.getResolution = function() {
  return /** @type {number} */ (this.resolution);
};


/**
 * @return {ol.ImageState} State.
 */
_ol_ImageBase_.prototype.getState = function() {
  return this.state;
};


/**
 * Load not yet loaded URI.
 * @abstract
 */
_ol_ImageBase_.prototype.load = function() {};
/* harmony default export */ __webpack_exports__["a"] = (_ol_ImageBase_);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Extent corner.
 * @enum {string}
 */
var _ol_extent_Corner_ = {
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right'
};

/* harmony default export */ __webpack_exports__["a"] = (_ol_extent_Corner_);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _ol_array_ = {};


/**
 * Performs a binary search on the provided sorted list and returns the index of the item if found. If it can't be found it'll return -1.
 * https://github.com/darkskyapp/binary-search
 *
 * @param {Array.<*>} haystack Items to search through.
 * @param {*} needle The item to look for.
 * @param {Function=} opt_comparator Comparator function.
 * @return {number} The index of the item if found, -1 if not.
 */
_ol_array_.binarySearch = function(haystack, needle, opt_comparator) {
  var mid, cmp;
  var comparator = opt_comparator || _ol_array_.numberSafeCompareFunction;
  var low = 0;
  var high = haystack.length;
  var found = false;

  while (low < high) {
    /* Note that "(low + high) >>> 1" may overflow, and results in a typecast
     * to double (which gives the wrong results). */
    mid = low + (high - low >> 1);
    cmp = +comparator(haystack[mid], needle);

    if (cmp < 0.0) { /* Too low. */
      low  = mid + 1;

    } else { /* Key found or too high */
      high = mid;
      found = !cmp;
    }
  }

  /* Key not found. */
  return found ? low : ~low;
};


/**
 * Compare function for array sort that is safe for numbers.
 * @param {*} a The first object to be compared.
 * @param {*} b The second object to be compared.
 * @return {number} A negative number, zero, or a positive number as the first
 *     argument is less than, equal to, or greater than the second.
 */
_ol_array_.numberSafeCompareFunction = function(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
};


/**
 * Whether the array contains the given object.
 * @param {Array.<*>} arr The array to test for the presence of the element.
 * @param {*} obj The object for which to test.
 * @return {boolean} The object is in the array.
 */
_ol_array_.includes = function(arr, obj) {
  return arr.indexOf(obj) >= 0;
};


/**
 * @param {Array.<number>} arr Array.
 * @param {number} target Target.
 * @param {number} direction 0 means return the nearest, > 0
 *    means return the largest nearest, < 0 means return the
 *    smallest nearest.
 * @return {number} Index.
 */
_ol_array_.linearFindNearest = function(arr, target, direction) {
  var n = arr.length;
  if (arr[0] <= target) {
    return 0;
  } else if (target <= arr[n - 1]) {
    return n - 1;
  } else {
    var i;
    if (direction > 0) {
      for (i = 1; i < n; ++i) {
        if (arr[i] < target) {
          return i - 1;
        }
      }
    } else if (direction < 0) {
      for (i = 1; i < n; ++i) {
        if (arr[i] <= target) {
          return i;
        }
      }
    } else {
      for (i = 1; i < n; ++i) {
        if (arr[i] == target) {
          return i;
        } else if (arr[i] < target) {
          if (arr[i - 1] - target < target - arr[i]) {
            return i - 1;
          } else {
            return i;
          }
        }
      }
    }
    return n - 1;
  }
};


/**
 * @param {Array.<*>} arr Array.
 * @param {number} begin Begin index.
 * @param {number} end End index.
 */
_ol_array_.reverseSubArray = function(arr, begin, end) {
  while (begin < end) {
    var tmp = arr[begin];
    arr[begin] = arr[end];
    arr[end] = tmp;
    ++begin;
    --end;
  }
};


/**
 * @param {Array.<VALUE>} arr The array to modify.
 * @param {Array.<VALUE>|VALUE} data The elements or arrays of elements
 *     to add to arr.
 * @template VALUE
 */
_ol_array_.extend = function(arr, data) {
  var i;
  var extension = Array.isArray(data) ? data : [data];
  var length = extension.length;
  for (i = 0; i < length; i++) {
    arr[arr.length] = extension[i];
  }
};


/**
 * @param {Array.<VALUE>} arr The array to modify.
 * @param {VALUE} obj The element to remove.
 * @template VALUE
 * @return {boolean} If the element was removed.
 */
_ol_array_.remove = function(arr, obj) {
  var i = arr.indexOf(obj);
  var found = i > -1;
  if (found) {
    arr.splice(i, 1);
  }
  return found;
};


/**
 * @param {Array.<VALUE>} arr The array to search in.
 * @param {function(VALUE, number, ?) : boolean} func The function to compare.
 * @template VALUE
 * @return {VALUE} The element found.
 */
_ol_array_.find = function(arr, func) {
  var length = arr.length >>> 0;
  var value;

  for (var i = 0; i < length; i++) {
    value = arr[i];
    if (func(value, i, arr)) {
      return value;
    }
  }
  return null;
};


/**
 * @param {Array|Uint8ClampedArray} arr1 The first array to compare.
 * @param {Array|Uint8ClampedArray} arr2 The second array to compare.
 * @return {boolean} Whether the two arrays are equal.
 */
_ol_array_.equals = function(arr1, arr2) {
  var len1 = arr1.length;
  if (len1 !== arr2.length) {
    return false;
  }
  for (var i = 0; i < len1; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


/**
 * @param {Array.<*>} arr The array to sort (modifies original).
 * @param {Function} compareFnc Comparison function.
 */
_ol_array_.stableSort = function(arr, compareFnc) {
  var length = arr.length;
  var tmp = Array(arr.length);
  var i;
  for (i = 0; i < length; i++) {
    tmp[i] = {index: i, value: arr[i]};
  }
  tmp.sort(function(a, b) {
    return compareFnc(a.value, b.value) || a.index - b.index;
  });
  for (i = 0; i < arr.length; i++) {
    arr[i] = tmp[i].value;
  }
};


/**
 * @param {Array.<*>} arr The array to search in.
 * @param {Function} func Comparison function.
 * @return {number} Return index.
 */
_ol_array_.findIndex = function(arr, func) {
  var index;
  var found = !arr.every(function(el, idx) {
    index = idx;
    return !func(el, idx, arr);
  });
  return found ? index : -1;
};


/**
 * @param {Array.<*>} arr The array to test.
 * @param {Function=} opt_func Comparison function.
 * @param {boolean=} opt_strict Strictly sorted (default false).
 * @return {boolean} Return index.
 */
_ol_array_.isSorted = function(arr, opt_func, opt_strict) {
  var compare = opt_func || _ol_array_.numberSafeCompareFunction;
  return arr.every(function(currentVal, index) {
    if (index === 0) {
      return true;
    }
    var res = compare(arr[index - 1], currentVal);
    return !(res > 0 || opt_strict && res === 0);
  });
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_array_);


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _ol_proj_proj4_ = {};


/**
 * @private
 * @type {Proj4}
 */
_ol_proj_proj4_.cache_ = null;


/**
 * Store the proj4 function.
 * @param {Proj4} proj4 The proj4 function.
 */
_ol_proj_proj4_.set = function(proj4) {
  _ol_proj_proj4_.cache_ = proj4;
};


/**
 * Get proj4.
 * @return {Proj4} The proj4 function set above or available globally.
 */
_ol_proj_proj4_.get = function() {
  return _ol_proj_proj4_.cache_ || window['proj4'];
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_proj_proj4_);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__extent_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__proj_js__ = __webpack_require__(4);




var _ol_reproj_ = {};


/**
 * Calculates ideal resolution to use from the source in order to achieve
 * pixel mapping as close as possible to 1:1 during reprojection.
 * The resolution is calculated regardless of what resolutions
 * are actually available in the dataset (TileGrid, Image, ...).
 *
 * @param {ol.proj.Projection} sourceProj Source projection.
 * @param {ol.proj.Projection} targetProj Target projection.
 * @param {ol.Coordinate} targetCenter Target center.
 * @param {number} targetResolution Target resolution.
 * @return {number} The best resolution to use. Can be +-Infinity, NaN or 0.
 */
_ol_reproj_.calculateSourceResolution = function(sourceProj, targetProj,
    targetCenter, targetResolution) {

  var sourceCenter = __WEBPACK_IMPORTED_MODULE_3__proj_js__["default"].transform(targetCenter, targetProj, sourceProj);

  // calculate the ideal resolution of the source data
  var sourceResolution =
      __WEBPACK_IMPORTED_MODULE_3__proj_js__["default"].getPointResolution(targetProj, targetResolution, targetCenter);

  var targetMetersPerUnit = targetProj.getMetersPerUnit();
  if (targetMetersPerUnit !== undefined) {
    sourceResolution *= targetMetersPerUnit;
  }
  var sourceMetersPerUnit = sourceProj.getMetersPerUnit();
  if (sourceMetersPerUnit !== undefined) {
    sourceResolution /= sourceMetersPerUnit;
  }

  // Based on the projection properties, the point resolution at the specified
  // coordinates may be slightly different. We need to reverse-compensate this
  // in order to achieve optimal results.

  var sourceExtent = sourceProj.getExtent();
  if (!sourceExtent || __WEBPACK_IMPORTED_MODULE_1__extent_js__["a" /* default */].containsCoordinate(sourceExtent, sourceCenter)) {
    var compensationFactor =
        __WEBPACK_IMPORTED_MODULE_3__proj_js__["default"].getPointResolution(sourceProj, sourceResolution, sourceCenter) /
        sourceResolution;
    if (isFinite(compensationFactor) && compensationFactor > 0) {
      sourceResolution /= compensationFactor;
    }
  }

  return sourceResolution;
};


/**
 * Enlarge the clipping triangle point by 1 pixel to ensure the edges overlap
 * in order to mask gaps caused by antialiasing.
 *
 * @param {number} centroidX Centroid of the triangle (x coordinate in pixels).
 * @param {number} centroidY Centroid of the triangle (y coordinate in pixels).
 * @param {number} x X coordinate of the point (in pixels).
 * @param {number} y Y coordinate of the point (in pixels).
 * @return {ol.Coordinate} New point 1 px farther from the centroid.
 * @private
 */
_ol_reproj_.enlargeClipPoint_ = function(centroidX, centroidY, x, y) {
  var dX = x - centroidX, dY = y - centroidY;
  var distance = Math.sqrt(dX * dX + dY * dY);
  return [Math.round(x + dX / distance), Math.round(y + dY / distance)];
};


/**
 * Renders the source data into new canvas based on the triangulation.
 *
 * @param {number} width Width of the canvas.
 * @param {number} height Height of the canvas.
 * @param {number} pixelRatio Pixel ratio.
 * @param {number} sourceResolution Source resolution.
 * @param {ol.Extent} sourceExtent Extent of the data source.
 * @param {number} targetResolution Target resolution.
 * @param {ol.Extent} targetExtent Target extent.
 * @param {ol.reproj.Triangulation} triangulation Calculated triangulation.
 * @param {Array.<{extent: ol.Extent,
 *                 image: (HTMLCanvasElement|Image|HTMLVideoElement)}>} sources
 *             Array of sources.
 * @param {number} gutter Gutter of the sources.
 * @param {boolean=} opt_renderEdges Render reprojection edges.
 * @return {HTMLCanvasElement} Canvas with reprojected data.
 */
_ol_reproj_.render = function(width, height, pixelRatio,
    sourceResolution, sourceExtent, targetResolution, targetExtent,
    triangulation, sources, gutter, opt_renderEdges) {

  var context = __WEBPACK_IMPORTED_MODULE_0__dom_js__["a" /* default */].createCanvasContext2D(Math.round(pixelRatio * width),
      Math.round(pixelRatio * height));

  if (sources.length === 0) {
    return context.canvas;
  }

  context.scale(pixelRatio, pixelRatio);

  var sourceDataExtent = __WEBPACK_IMPORTED_MODULE_1__extent_js__["a" /* default */].createEmpty();
  sources.forEach(function(src, i, arr) {
    __WEBPACK_IMPORTED_MODULE_1__extent_js__["a" /* default */].extend(sourceDataExtent, src.extent);
  });

  var canvasWidthInUnits = __WEBPACK_IMPORTED_MODULE_1__extent_js__["a" /* default */].getWidth(sourceDataExtent);
  var canvasHeightInUnits = __WEBPACK_IMPORTED_MODULE_1__extent_js__["a" /* default */].getHeight(sourceDataExtent);
  var stitchContext = __WEBPACK_IMPORTED_MODULE_0__dom_js__["a" /* default */].createCanvasContext2D(
      Math.round(pixelRatio * canvasWidthInUnits / sourceResolution),
      Math.round(pixelRatio * canvasHeightInUnits / sourceResolution));

  var stitchScale = pixelRatio / sourceResolution;

  sources.forEach(function(src, i, arr) {
    var xPos = src.extent[0] - sourceDataExtent[0];
    var yPos = -(src.extent[3] - sourceDataExtent[3]);
    var srcWidth = __WEBPACK_IMPORTED_MODULE_1__extent_js__["a" /* default */].getWidth(src.extent);
    var srcHeight = __WEBPACK_IMPORTED_MODULE_1__extent_js__["a" /* default */].getHeight(src.extent);

    stitchContext.drawImage(
        src.image,
        gutter, gutter,
        src.image.width - 2 * gutter, src.image.height - 2 * gutter,
        xPos * stitchScale, yPos * stitchScale,
        srcWidth * stitchScale, srcHeight * stitchScale);
  });

  var targetTopLeft = __WEBPACK_IMPORTED_MODULE_1__extent_js__["a" /* default */].getTopLeft(targetExtent);

  triangulation.getTriangles().forEach(function(triangle, i, arr) {
    /* Calculate affine transform (src -> dst)
     * Resulting matrix can be used to transform coordinate
     * from `sourceProjection` to destination pixels.
     *
     * To optimize number of context calls and increase numerical stability,
     * we also do the following operations:
     * trans(-topLeftExtentCorner), scale(1 / targetResolution), scale(1, -1)
     * here before solving the linear system so [ui, vi] are pixel coordinates.
     *
     * Src points: xi, yi
     * Dst points: ui, vi
     * Affine coefficients: aij
     *
     * | x0 y0 1  0  0 0 |   |a00|   |u0|
     * | x1 y1 1  0  0 0 |   |a01|   |u1|
     * | x2 y2 1  0  0 0 | x |a02| = |u2|
     * |  0  0 0 x0 y0 1 |   |a10|   |v0|
     * |  0  0 0 x1 y1 1 |   |a11|   |v1|
     * |  0  0 0 x2 y2 1 |   |a12|   |v2|
     */
    var source = triangle.source, target = triangle.target;
    var x0 = source[0][0], y0 = source[0][1],
        x1 = source[1][0], y1 = source[1][1],
        x2 = source[2][0], y2 = source[2][1];
    var u0 = (target[0][0] - targetTopLeft[0]) / targetResolution,
        v0 = -(target[0][1] - targetTopLeft[1]) / targetResolution;
    var u1 = (target[1][0] - targetTopLeft[0]) / targetResolution,
        v1 = -(target[1][1] - targetTopLeft[1]) / targetResolution;
    var u2 = (target[2][0] - targetTopLeft[0]) / targetResolution,
        v2 = -(target[2][1] - targetTopLeft[1]) / targetResolution;

    // Shift all the source points to improve numerical stability
    // of all the subsequent calculations. The [x0, y0] is used here.
    // This is also used to simplify the linear system.
    var sourceNumericalShiftX = x0, sourceNumericalShiftY = y0;
    x0 = 0;
    y0 = 0;
    x1 -= sourceNumericalShiftX;
    y1 -= sourceNumericalShiftY;
    x2 -= sourceNumericalShiftX;
    y2 -= sourceNumericalShiftY;

    var augmentedMatrix = [
      [x1, y1, 0, 0, u1 - u0],
      [x2, y2, 0, 0, u2 - u0],
      [0, 0, x1, y1, v1 - v0],
      [0, 0, x2, y2, v2 - v0]
    ];
    var affineCoefs = __WEBPACK_IMPORTED_MODULE_2__math_js__["a" /* default */].solveLinearSystem(augmentedMatrix);
    if (!affineCoefs) {
      return;
    }

    context.save();
    context.beginPath();
    var centroidX = (u0 + u1 + u2) / 3, centroidY = (v0 + v1 + v2) / 3;
    var p0 = _ol_reproj_.enlargeClipPoint_(centroidX, centroidY, u0, v0);
    var p1 = _ol_reproj_.enlargeClipPoint_(centroidX, centroidY, u1, v1);
    var p2 = _ol_reproj_.enlargeClipPoint_(centroidX, centroidY, u2, v2);

    context.moveTo(p1[0], p1[1]);
    context.lineTo(p0[0], p0[1]);
    context.lineTo(p2[0], p2[1]);
    context.clip();

    context.transform(
        affineCoefs[0], affineCoefs[2], affineCoefs[1], affineCoefs[3], u0, v0);

    context.translate(sourceDataExtent[0] - sourceNumericalShiftX,
        sourceDataExtent[3] - sourceNumericalShiftY);

    context.scale(sourceResolution / pixelRatio,
        -sourceResolution / pixelRatio);

    context.drawImage(stitchContext.canvas, 0, 0);
    context.restore();
  });

  if (opt_renderEdges) {
    context.save();

    context.strokeStyle = 'black';
    context.lineWidth = 1;

    triangulation.getTriangles().forEach(function(triangle, i, arr) {
      var target = triangle.target;
      var u0 = (target[0][0] - targetTopLeft[0]) / targetResolution,
          v0 = -(target[0][1] - targetTopLeft[1]) / targetResolution;
      var u1 = (target[1][0] - targetTopLeft[0]) / targetResolution,
          v1 = -(target[1][1] - targetTopLeft[1]) / targetResolution;
      var u2 = (target[2][0] - targetTopLeft[0]) / targetResolution,
          v2 = -(target[2][1] - targetTopLeft[1]) / targetResolution;

      context.beginPath();
      context.moveTo(u1, v1);
      context.lineTo(u0, v0);
      context.lineTo(u2, v2);
      context.closePath();
      context.stroke();
    });

    context.restore();
  }
  return context.canvas;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_reproj_);


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _ol_dom_ = {};


/**
 * Create an html canvas element and returns its 2d context.
 * @param {number=} opt_width Canvas width.
 * @param {number=} opt_height Canvas height.
 * @return {CanvasRenderingContext2D} The context.
 */
_ol_dom_.createCanvasContext2D = function(opt_width, opt_height) {
  var canvas = document.createElement('CANVAS');
  if (opt_width) {
    canvas.width = opt_width;
  }
  if (opt_height) {
    canvas.height = opt_height;
  }
  return canvas.getContext('2d');
};


/**
 * Get the current computed width for the given element including margin,
 * padding and border.
 * Equivalent to jQuery's `$(el).outerWidth(true)`.
 * @param {!Element} element Element.
 * @return {number} The width.
 */
_ol_dom_.outerWidth = function(element) {
  var width = element.offsetWidth;
  var style = getComputedStyle(element);
  width += parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10);

  return width;
};


/**
 * Get the current computed height for the given element including margin,
 * padding and border.
 * Equivalent to jQuery's `$(el).outerHeight(true)`.
 * @param {!Element} element Element.
 * @return {number} The height.
 */
_ol_dom_.outerHeight = function(element) {
  var height = element.offsetHeight;
  var style = getComputedStyle(element);
  height += parseInt(style.marginTop, 10) + parseInt(style.marginBottom, 10);

  return height;
};

/**
 * @param {Node} newNode Node to replace old node
 * @param {Node} oldNode The node to be replaced
 */
_ol_dom_.replaceNode = function(newNode, oldNode) {
  var parent = oldNode.parentNode;
  if (parent) {
    parent.replaceChild(newNode, oldNode);
  }
};

/**
 * @param {Node} node The node to remove.
 * @returns {Node} The node that was removed or null.
 */
_ol_dom_.removeNode = function(node) {
  return node && node.parentNode ? node.parentNode.removeChild(node) : null;
};

/**
 * @param {Node} node The node to remove the children from.
 */
_ol_dom_.removeChildren = function(node) {
  while (node.lastChild) {
    node.removeChild(node.lastChild);
  }
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_dom_);


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__extent_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__proj_js__ = __webpack_require__(4);





/**
 * @classdesc
 * Class containing triangulation of the given target extent.
 * Used for determining source data and the reprojection itself.
 *
 * @param {ol.proj.Projection} sourceProj Source projection.
 * @param {ol.proj.Projection} targetProj Target projection.
 * @param {ol.Extent} targetExtent Target extent to triangulate.
 * @param {ol.Extent} maxSourceExtent Maximal source extent that can be used.
 * @param {number} errorThreshold Acceptable error (in source units).
 * @constructor
 */
var _ol_reproj_Triangulation_ = function(sourceProj, targetProj, targetExtent,
    maxSourceExtent, errorThreshold) {

  /**
   * @type {ol.proj.Projection}
   * @private
   */
  this.sourceProj_ = sourceProj;

  /**
   * @type {ol.proj.Projection}
   * @private
   */
  this.targetProj_ = targetProj;

  /** @type {!Object.<string, ol.Coordinate>} */
  var transformInvCache = {};
  var transformInv = __WEBPACK_IMPORTED_MODULE_3__proj_js__["default"].getTransform(this.targetProj_, this.sourceProj_);

  /**
   * @param {ol.Coordinate} c A coordinate.
   * @return {ol.Coordinate} Transformed coordinate.
   * @private
   */
  this.transformInv_ = function(c) {
    var key = c[0] + '/' + c[1];
    if (!transformInvCache[key]) {
      transformInvCache[key] = transformInv(c);
    }
    return transformInvCache[key];
  };

  /**
   * @type {ol.Extent}
   * @private
   */
  this.maxSourceExtent_ = maxSourceExtent;

  /**
   * @type {number}
   * @private
   */
  this.errorThresholdSquared_ = errorThreshold * errorThreshold;

  /**
   * @type {Array.<ol.ReprojTriangle>}
   * @private
   */
  this.triangles_ = [];

  /**
   * Indicates that the triangulation crosses edge of the source projection.
   * @type {boolean}
   * @private
   */
  this.wrapsXInSource_ = false;

  /**
   * @type {boolean}
   * @private
   */
  this.canWrapXInSource_ = this.sourceProj_.canWrapX() &&
      !!maxSourceExtent &&
      !!this.sourceProj_.getExtent() &&
      (__WEBPACK_IMPORTED_MODULE_1__extent_js__["a" /* default */].getWidth(maxSourceExtent) ==
       __WEBPACK_IMPORTED_MODULE_1__extent_js__["a" /* default */].getWidth(this.sourceProj_.getExtent()));

  /**
   * @type {?number}
   * @private
   */
  this.sourceWorldWidth_ = this.sourceProj_.getExtent() ?
    __WEBPACK_IMPORTED_MODULE_1__extent_js__["a" /* default */].getWidth(this.sourceProj_.getExtent()) : null;

  /**
   * @type {?number}
   * @private
   */
  this.targetWorldWidth_ = this.targetProj_.getExtent() ?
    __WEBPACK_IMPORTED_MODULE_1__extent_js__["a" /* default */].getWidth(this.targetProj_.getExtent()) : null;

  var destinationTopLeft = __WEBPACK_IMPORTED_MODULE_1__extent_js__["a" /* default */].getTopLeft(targetExtent);
  var destinationTopRight = __WEBPACK_IMPORTED_MODULE_1__extent_js__["a" /* default */].getTopRight(targetExtent);
  var destinationBottomRight = __WEBPACK_IMPORTED_MODULE_1__extent_js__["a" /* default */].getBottomRight(targetExtent);
  var destinationBottomLeft = __WEBPACK_IMPORTED_MODULE_1__extent_js__["a" /* default */].getBottomLeft(targetExtent);
  var sourceTopLeft = this.transformInv_(destinationTopLeft);
  var sourceTopRight = this.transformInv_(destinationTopRight);
  var sourceBottomRight = this.transformInv_(destinationBottomRight);
  var sourceBottomLeft = this.transformInv_(destinationBottomLeft);

  this.addQuad_(
      destinationTopLeft, destinationTopRight,
      destinationBottomRight, destinationBottomLeft,
      sourceTopLeft, sourceTopRight, sourceBottomRight, sourceBottomLeft,
      __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].RASTER_REPROJECTION_MAX_SUBDIVISION);

  if (this.wrapsXInSource_) {
    var leftBound = Infinity;
    this.triangles_.forEach(function(triangle, i, arr) {
      leftBound = Math.min(leftBound,
          triangle.source[0][0], triangle.source[1][0], triangle.source[2][0]);
    });

    // Shift triangles to be as close to `leftBound` as possible
    // (if the distance is more than `worldWidth / 2` it can be closer.
    this.triangles_.forEach(function(triangle) {
      if (Math.max(triangle.source[0][0], triangle.source[1][0],
          triangle.source[2][0]) - leftBound > this.sourceWorldWidth_ / 2) {
        var newTriangle = [[triangle.source[0][0], triangle.source[0][1]],
          [triangle.source[1][0], triangle.source[1][1]],
          [triangle.source[2][0], triangle.source[2][1]]];
        if ((newTriangle[0][0] - leftBound) > this.sourceWorldWidth_ / 2) {
          newTriangle[0][0] -= this.sourceWorldWidth_;
        }
        if ((newTriangle[1][0] - leftBound) > this.sourceWorldWidth_ / 2) {
          newTriangle[1][0] -= this.sourceWorldWidth_;
        }
        if ((newTriangle[2][0] - leftBound) > this.sourceWorldWidth_ / 2) {
          newTriangle[2][0] -= this.sourceWorldWidth_;
        }

        // Rarely (if the extent contains both the dateline and prime meridian)
        // the shift can in turn break some triangles.
        // Detect this here and don't shift in such cases.
        var minX = Math.min(
            newTriangle[0][0], newTriangle[1][0], newTriangle[2][0]);
        var maxX = Math.max(
            newTriangle[0][0], newTriangle[1][0], newTriangle[2][0]);
        if ((maxX - minX) < this.sourceWorldWidth_ / 2) {
          triangle.source = newTriangle;
        }
      }
    }, this);
  }

  transformInvCache = {};
};


/**
 * Adds triangle to the triangulation.
 * @param {ol.Coordinate} a The target a coordinate.
 * @param {ol.Coordinate} b The target b coordinate.
 * @param {ol.Coordinate} c The target c coordinate.
 * @param {ol.Coordinate} aSrc The source a coordinate.
 * @param {ol.Coordinate} bSrc The source b coordinate.
 * @param {ol.Coordinate} cSrc The source c coordinate.
 * @private
 */
_ol_reproj_Triangulation_.prototype.addTriangle_ = function(a, b, c,
    aSrc, bSrc, cSrc) {
  this.triangles_.push({
    source: [aSrc, bSrc, cSrc],
    target: [a, b, c]
  });
};


/**
 * Adds quad (points in clock-wise order) to the triangulation
 * (and reprojects the vertices) if valid.
 * Performs quad subdivision if needed to increase precision.
 *
 * @param {ol.Coordinate} a The target a coordinate.
 * @param {ol.Coordinate} b The target b coordinate.
 * @param {ol.Coordinate} c The target c coordinate.
 * @param {ol.Coordinate} d The target d coordinate.
 * @param {ol.Coordinate} aSrc The source a coordinate.
 * @param {ol.Coordinate} bSrc The source b coordinate.
 * @param {ol.Coordinate} cSrc The source c coordinate.
 * @param {ol.Coordinate} dSrc The source d coordinate.
 * @param {number} maxSubdivision Maximal allowed subdivision of the quad.
 * @private
 */
_ol_reproj_Triangulation_.prototype.addQuad_ = function(a, b, c, d,
    aSrc, bSrc, cSrc, dSrc, maxSubdivision) {

  var sourceQuadExtent = __WEBPACK_IMPORTED_MODULE_1__extent_js__["a" /* default */].boundingExtent([aSrc, bSrc, cSrc, dSrc]);
  var sourceCoverageX = this.sourceWorldWidth_ ?
    __WEBPACK_IMPORTED_MODULE_1__extent_js__["a" /* default */].getWidth(sourceQuadExtent) / this.sourceWorldWidth_ : null;
  var sourceWorldWidth = /** @type {number} */ (this.sourceWorldWidth_);

  // when the quad is wrapped in the source projection
  // it covers most of the projection extent, but not fully
  var wrapsX = this.sourceProj_.canWrapX() &&
               sourceCoverageX > 0.5 && sourceCoverageX < 1;

  var needsSubdivision = false;

  if (maxSubdivision > 0) {
    if (this.targetProj_.isGlobal() && this.targetWorldWidth_) {
      var targetQuadExtent = __WEBPACK_IMPORTED_MODULE_1__extent_js__["a" /* default */].boundingExtent([a, b, c, d]);
      var targetCoverageX =
          __WEBPACK_IMPORTED_MODULE_1__extent_js__["a" /* default */].getWidth(targetQuadExtent) / this.targetWorldWidth_;
      needsSubdivision |=
          targetCoverageX > __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].RASTER_REPROJECTION_MAX_TRIANGLE_WIDTH;
    }
    if (!wrapsX && this.sourceProj_.isGlobal() && sourceCoverageX) {
      needsSubdivision |=
          sourceCoverageX > __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].RASTER_REPROJECTION_MAX_TRIANGLE_WIDTH;
    }
  }

  if (!needsSubdivision && this.maxSourceExtent_) {
    if (!__WEBPACK_IMPORTED_MODULE_1__extent_js__["a" /* default */].intersects(sourceQuadExtent, this.maxSourceExtent_)) {
      // whole quad outside source projection extent -> ignore
      return;
    }
  }

  if (!needsSubdivision) {
    if (!isFinite(aSrc[0]) || !isFinite(aSrc[1]) ||
        !isFinite(bSrc[0]) || !isFinite(bSrc[1]) ||
        !isFinite(cSrc[0]) || !isFinite(cSrc[1]) ||
        !isFinite(dSrc[0]) || !isFinite(dSrc[1])) {
      if (maxSubdivision > 0) {
        needsSubdivision = true;
      } else {
        return;
      }
    }
  }

  if (maxSubdivision > 0) {
    if (!needsSubdivision) {
      var center = [(a[0] + c[0]) / 2, (a[1] + c[1]) / 2];
      var centerSrc = this.transformInv_(center);

      var dx;
      if (wrapsX) {
        var centerSrcEstimX =
            (__WEBPACK_IMPORTED_MODULE_2__math_js__["a" /* default */].modulo(aSrc[0], sourceWorldWidth) +
             __WEBPACK_IMPORTED_MODULE_2__math_js__["a" /* default */].modulo(cSrc[0], sourceWorldWidth)) / 2;
        dx = centerSrcEstimX -
            __WEBPACK_IMPORTED_MODULE_2__math_js__["a" /* default */].modulo(centerSrc[0], sourceWorldWidth);
      } else {
        dx = (aSrc[0] + cSrc[0]) / 2 - centerSrc[0];
      }
      var dy = (aSrc[1] + cSrc[1]) / 2 - centerSrc[1];
      var centerSrcErrorSquared = dx * dx + dy * dy;
      needsSubdivision = centerSrcErrorSquared > this.errorThresholdSquared_;
    }
    if (needsSubdivision) {
      if (Math.abs(a[0] - c[0]) <= Math.abs(a[1] - c[1])) {
        // split horizontally (top & bottom)
        var bc = [(b[0] + c[0]) / 2, (b[1] + c[1]) / 2];
        var bcSrc = this.transformInv_(bc);
        var da = [(d[0] + a[0]) / 2, (d[1] + a[1]) / 2];
        var daSrc = this.transformInv_(da);

        this.addQuad_(
            a, b, bc, da, aSrc, bSrc, bcSrc, daSrc, maxSubdivision - 1);
        this.addQuad_(
            da, bc, c, d, daSrc, bcSrc, cSrc, dSrc, maxSubdivision - 1);
      } else {
        // split vertically (left & right)
        var ab = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
        var abSrc = this.transformInv_(ab);
        var cd = [(c[0] + d[0]) / 2, (c[1] + d[1]) / 2];
        var cdSrc = this.transformInv_(cd);

        this.addQuad_(
            a, ab, cd, d, aSrc, abSrc, cdSrc, dSrc, maxSubdivision - 1);
        this.addQuad_(
            ab, b, c, cd, abSrc, bSrc, cSrc, cdSrc, maxSubdivision - 1);
      }
      return;
    }
  }

  if (wrapsX) {
    if (!this.canWrapXInSource_) {
      return;
    }
    this.wrapsXInSource_ = true;
  }

  this.addTriangle_(a, c, d, aSrc, cSrc, dSrc);
  this.addTriangle_(a, b, c, aSrc, bSrc, cSrc);
};


/**
 * Calculates extent of the 'source' coordinates from all the triangles.
 *
 * @return {ol.Extent} Calculated extent.
 */
_ol_reproj_Triangulation_.prototype.calculateSourceExtent = function() {
  var extent = __WEBPACK_IMPORTED_MODULE_1__extent_js__["a" /* default */].createEmpty();

  this.triangles_.forEach(function(triangle, i, arr) {
    var src = triangle.source;
    __WEBPACK_IMPORTED_MODULE_1__extent_js__["a" /* default */].extendCoordinate(extent, src[0]);
    __WEBPACK_IMPORTED_MODULE_1__extent_js__["a" /* default */].extendCoordinate(extent, src[1]);
    __WEBPACK_IMPORTED_MODULE_1__extent_js__["a" /* default */].extendCoordinate(extent, src[2]);
  });

  return extent;
};


/**
 * @return {Array.<ol.ReprojTriangle>} Array of the calculated triangles.
 */
_ol_reproj_Triangulation_.prototype.getTriangles = function() {
  return this.triangles_;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_reproj_Triangulation_);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attribution_js__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__object_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__proj_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__source_state_js__ = __webpack_require__(25);






/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Base class for {@link ol.layer.Layer} sources.
 *
 * A generic `change` event is triggered when the state of the source changes.
 *
 * @constructor
 * @abstract
 * @extends {ol.Object}
 * @param {ol.SourceSourceOptions} options Source options.
 * @api
 */
var _ol_source_Source_ = function(options) {

  __WEBPACK_IMPORTED_MODULE_2__object_js__["a" /* default */].call(this);

  /**
   * @private
   * @type {ol.proj.Projection}
   */
  this.projection_ = __WEBPACK_IMPORTED_MODULE_3__proj_js__["default"].get(options.projection);

  /**
   * @private
   * @type {Array.<ol.Attribution>}
   */
  this.attributions_ = null;

  /**
   * @private
   * @type {?ol.Attribution2}
   */
  this.attributions2_ = this.adaptAttributions_(options.attributions);

  /**
   * @private
   * @type {string|olx.LogoOptions|undefined}
   */
  this.logo_ = options.logo;

  /**
   * @private
   * @type {ol.source.State}
   */
  this.state_ = options.state !== undefined ?
    options.state : __WEBPACK_IMPORTED_MODULE_4__source_state_js__["a" /* default */].READY;

  /**
   * @private
   * @type {boolean}
   */
  this.wrapX_ = options.wrapX !== undefined ? options.wrapX : false;

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_source_Source_, __WEBPACK_IMPORTED_MODULE_2__object_js__["a" /* default */]);

/**
 * Turns the attributions option into an attributions function.
 * @suppress {deprecated}
 * @param {ol.AttributionLike|undefined} attributionLike The attribution option.
 * @return {?ol.Attribution2} An attribution function (or null).
 */
_ol_source_Source_.prototype.adaptAttributions_ = function(attributionLike) {
  if (!attributionLike) {
    return null;
  }
  if (attributionLike instanceof __WEBPACK_IMPORTED_MODULE_1__attribution_js__["a" /* default */]) {

    // TODO: remove attributions_ in next major release
    this.attributions_ = [attributionLike];

    return function(frameState) {
      return [attributionLike.getHTML()];
    };
  }
  if (Array.isArray(attributionLike)) {
    if (attributionLike[0] instanceof __WEBPACK_IMPORTED_MODULE_1__attribution_js__["a" /* default */]) {

      // TODO: remove attributions_ in next major release
      this.attributions_ = attributionLike;

      var attributions = attributionLike.map(function(attribution) {
        return attribution.getHTML();
      });
      return function(frameState) {
        return attributions;
      };
    }

    // TODO: remove attributions_ in next major release
    this.attributions_ = attributionLike.map(function(attribution) {
      return new __WEBPACK_IMPORTED_MODULE_1__attribution_js__["a" /* default */]({html: attribution});
    });

    return function(frameState) {
      return attributionLike;
    };
  }

  if (typeof attributionLike === 'function') {
    return attributionLike;
  }

  // TODO: remove attributions_ in next major release
  this.attributions_ = [
    new __WEBPACK_IMPORTED_MODULE_1__attribution_js__["a" /* default */]({html: attributionLike})
  ];

  return function(frameState) {
    return [attributionLike];
  };
};

/**
 * @param {ol.Coordinate} coordinate Coordinate.
 * @param {number} resolution Resolution.
 * @param {number} rotation Rotation.
 * @param {number} hitTolerance Hit tolerance in pixels.
 * @param {Object.<string, boolean>} skippedFeatureUids Skipped feature uids.
 * @param {function((ol.Feature|ol.render.Feature)): T} callback Feature
 *     callback.
 * @return {T|undefined} Callback result.
 * @template T
 */
_ol_source_Source_.prototype.forEachFeatureAtCoordinate = __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].nullFunction;


/**
 * Get the attributions of the source.
 * @return {Array.<ol.Attribution>} Attributions.
 * @api
 */
_ol_source_Source_.prototype.getAttributions = function() {
  return this.attributions_;
};


/**
 * Get the attribution function for the source.
 * @return {?ol.Attribution2} Attribution function.
 */
_ol_source_Source_.prototype.getAttributions2 = function() {
  return this.attributions2_;
};


/**
 * Get the logo of the source.
 * @return {string|olx.LogoOptions|undefined} Logo.
 * @api
 */
_ol_source_Source_.prototype.getLogo = function() {
  return this.logo_;
};


/**
 * Get the projection of the source.
 * @return {ol.proj.Projection} Projection.
 * @api
 */
_ol_source_Source_.prototype.getProjection = function() {
  return this.projection_;
};


/**
 * @abstract
 * @return {Array.<number>|undefined} Resolutions.
 */
_ol_source_Source_.prototype.getResolutions = function() {};


/**
 * Get the state of the source, see {@link ol.source.State} for possible states.
 * @return {ol.source.State} State.
 * @api
 */
_ol_source_Source_.prototype.getState = function() {
  return this.state_;
};


/**
 * @return {boolean|undefined} Wrap X.
 */
_ol_source_Source_.prototype.getWrapX = function() {
  return this.wrapX_;
};


/**
 * Refreshes the source and finally dispatches a 'change' event.
 * @api
 */
_ol_source_Source_.prototype.refresh = function() {
  this.changed();
};


/**
 * Set the attributions of the source.
 * @param {ol.AttributionLike|undefined} attributions Attributions.
 *     Can be passed as `string`, `Array<string>`, `{@link ol.Attribution2}`,
 *     or `undefined`.
 * @api
 */
_ol_source_Source_.prototype.setAttributions = function(attributions) {
  this.attributions2_ = this.adaptAttributions_(attributions);
  this.changed();
};


/**
 * Set the logo of the source.
 * @param {string|olx.LogoOptions|undefined} logo Logo.
 */
_ol_source_Source_.prototype.setLogo = function(logo) {
  this.logo_ = logo;
};


/**
 * Set the state of the source.
 * @param {ol.source.State} state State.
 * @protected
 */
_ol_source_Source_.prototype.setState = function(state) {
  this.state_ = state;
  this.changed();
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_source_Source_);


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * A representation of a contiguous block of tiles.  A tile range is specified
 * by its min/max tile coordinates and is inclusive of coordinates.
 *
 * @constructor
 * @param {number} minX Minimum X.
 * @param {number} maxX Maximum X.
 * @param {number} minY Minimum Y.
 * @param {number} maxY Maximum Y.
 * @struct
 */
var _ol_TileRange_ = function(minX, maxX, minY, maxY) {

  /**
   * @type {number}
   */
  this.minX = minX;

  /**
   * @type {number}
   */
  this.maxX = maxX;

  /**
   * @type {number}
   */
  this.minY = minY;

  /**
   * @type {number}
   */
  this.maxY = maxY;

};


/**
 * @param {number} minX Minimum X.
 * @param {number} maxX Maximum X.
 * @param {number} minY Minimum Y.
 * @param {number} maxY Maximum Y.
 * @param {ol.TileRange|undefined} tileRange TileRange.
 * @return {ol.TileRange} Tile range.
 */
_ol_TileRange_.createOrUpdate = function(minX, maxX, minY, maxY, tileRange) {
  if (tileRange !== undefined) {
    tileRange.minX = minX;
    tileRange.maxX = maxX;
    tileRange.minY = minY;
    tileRange.maxY = maxY;
    return tileRange;
  } else {
    return new _ol_TileRange_(minX, maxX, minY, maxY);
  }
};


/**
 * @param {ol.TileCoord} tileCoord Tile coordinate.
 * @return {boolean} Contains tile coordinate.
 */
_ol_TileRange_.prototype.contains = function(tileCoord) {
  return this.containsXY(tileCoord[1], tileCoord[2]);
};


/**
 * @param {ol.TileRange} tileRange Tile range.
 * @return {boolean} Contains.
 */
_ol_TileRange_.prototype.containsTileRange = function(tileRange) {
  return this.minX <= tileRange.minX && tileRange.maxX <= this.maxX &&
      this.minY <= tileRange.minY && tileRange.maxY <= this.maxY;
};


/**
 * @param {number} x Tile coordinate x.
 * @param {number} y Tile coordinate y.
 * @return {boolean} Contains coordinate.
 */
_ol_TileRange_.prototype.containsXY = function(x, y) {
  return this.minX <= x && x <= this.maxX && this.minY <= y && y <= this.maxY;
};


/**
 * @param {ol.TileRange} tileRange Tile range.
 * @return {boolean} Equals.
 */
_ol_TileRange_.prototype.equals = function(tileRange) {
  return this.minX == tileRange.minX && this.minY == tileRange.minY &&
      this.maxX == tileRange.maxX && this.maxY == tileRange.maxY;
};


/**
 * @param {ol.TileRange} tileRange Tile range.
 */
_ol_TileRange_.prototype.extend = function(tileRange) {
  if (tileRange.minX < this.minX) {
    this.minX = tileRange.minX;
  }
  if (tileRange.maxX > this.maxX) {
    this.maxX = tileRange.maxX;
  }
  if (tileRange.minY < this.minY) {
    this.minY = tileRange.minY;
  }
  if (tileRange.maxY > this.maxY) {
    this.maxY = tileRange.maxY;
  }
};


/**
 * @return {number} Height.
 */
_ol_TileRange_.prototype.getHeight = function() {
  return this.maxY - this.minY + 1;
};


/**
 * @return {ol.Size} Size.
 */
_ol_TileRange_.prototype.getSize = function() {
  return [this.getWidth(), this.getHeight()];
};


/**
 * @return {number} Width.
 */
_ol_TileRange_.prototype.getWidth = function() {
  return this.maxX - this.minX + 1;
};


/**
 * @param {ol.TileRange} tileRange Tile range.
 * @return {boolean} Intersects.
 */
_ol_TileRange_.prototype.intersects = function(tileRange) {
  return this.minX <= tileRange.maxX &&
      this.maxX >= tileRange.minX &&
      this.minY <= tileRange.maxY &&
      this.maxY >= tileRange.minY;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_TileRange_);


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__source_tileimage_js__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tilegrid_js__ = __webpack_require__(13);




/**
 * @classdesc
 * Layer source for tile data with URLs in a set XYZ format that are
 * defined in a URL template. By default, this follows the widely-used
 * Google grid where `x` 0 and `y` 0 are in the top left. Grids like
 * TMS where `x` 0 and `y` 0 are in the bottom left can be used by
 * using the `{-y}` placeholder in the URL template, so long as the
 * source does not have a custom tile grid. In this case,
 * {@link ol.source.TileImage} can be used with a `tileUrlFunction`
 * such as:
 *
 *  tileUrlFunction: function(coordinate) {
 *    return 'http://mapserver.com/' + coordinate[0] + '/' +
 *        coordinate[1] + '/' + coordinate[2] + '.png';
 *    }
 *
 *
 * @constructor
 * @extends {ol.source.TileImage}
 * @param {olx.source.XYZOptions=} opt_options XYZ options.
 * @api
 */
var _ol_source_XYZ_ = function(opt_options) {
  var options = opt_options || {};
  var projection = options.projection !== undefined ?
    options.projection : 'EPSG:3857';

  var tileGrid = options.tileGrid !== undefined ? options.tileGrid :
    __WEBPACK_IMPORTED_MODULE_2__tilegrid_js__["a" /* default */].createXYZ({
      extent: __WEBPACK_IMPORTED_MODULE_2__tilegrid_js__["a" /* default */].extentFromProjection(projection),
      maxZoom: options.maxZoom,
      minZoom: options.minZoom,
      tileSize: options.tileSize
    });

  __WEBPACK_IMPORTED_MODULE_1__source_tileimage_js__["a" /* default */].call(this, {
    attributions: options.attributions,
    cacheSize: options.cacheSize,
    crossOrigin: options.crossOrigin,
    logo: options.logo,
    opaque: options.opaque,
    projection: projection,
    reprojectionErrorThreshold: options.reprojectionErrorThreshold,
    tileGrid: tileGrid,
    tileLoadFunction: options.tileLoadFunction,
    tilePixelRatio: options.tilePixelRatio,
    tileUrlFunction: options.tileUrlFunction,
    url: options.url,
    urls: options.urls,
    wrapX: options.wrapX !== undefined ? options.wrapX : true,
    transition: options.transition
  });

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_source_XYZ_, __WEBPACK_IMPORTED_MODULE_1__source_tileimage_js__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (_ol_source_XYZ_);


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tilestate_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__easing_js__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_eventtarget_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_eventtype_js__ = __webpack_require__(2);






/**
 * @classdesc
 * Base class for tiles.
 *
 * @constructor
 * @abstract
 * @extends {ol.events.EventTarget}
 * @param {ol.TileCoord} tileCoord Tile coordinate.
 * @param {ol.TileState} state State.
 * @param {olx.TileOptions=} opt_options Tile options.
 */
var _ol_Tile_ = function(tileCoord, state, opt_options) {
  __WEBPACK_IMPORTED_MODULE_3__events_eventtarget_js__["a" /* default */].call(this);

  var options = opt_options ? opt_options : {};

  /**
   * @type {ol.TileCoord}
   */
  this.tileCoord = tileCoord;

  /**
   * @protected
   * @type {ol.TileState}
   */
  this.state = state;

  /**
   * An "interim" tile for this tile. The interim tile may be used while this
   * one is loading, for "smooth" transitions when changing params/dimensions
   * on the source.
   * @type {ol.Tile}
   */
  this.interimTile = null;

  /**
   * A key assigned to the tile. This is used by the tile source to determine
   * if this tile can effectively be used, or if a new tile should be created
   * and this one be used as an interim tile for this new tile.
   * @type {string}
   */
  this.key = '';

  /**
   * The duration for the opacity transition.
   * @type {number}
   */
  this.transition_ = options.transition === undefined ?
    250 : options.transition;

  /**
   * Lookup of start times for rendering transitions.  If the start time is
   * equal to -1, the transition is complete.
   * @type {Object.<number, number>}
   */
  this.transitionStarts_ = {};

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_Tile_, __WEBPACK_IMPORTED_MODULE_3__events_eventtarget_js__["a" /* default */]);


/**
 * @protected
 */
_ol_Tile_.prototype.changed = function() {
  this.dispatchEvent(__WEBPACK_IMPORTED_MODULE_4__events_eventtype_js__["a" /* default */].CHANGE);
};


/**
 * @return {string} Key.
 */
_ol_Tile_.prototype.getKey = function() {
  return this.key + '/' + this.tileCoord;
};

/**
 * Get the interim tile most suitable for rendering using the chain of interim
 * tiles. This corresponds to the  most recent tile that has been loaded, if no
 * such tile exists, the original tile is returned.
 * @return {!ol.Tile} Best tile for rendering.
 */
_ol_Tile_.prototype.getInterimTile = function() {
  if (!this.interimTile) {
    //empty chain
    return this;
  }
  var tile = this.interimTile;

  // find the first loaded tile and return it. Since the chain is sorted in
  // decreasing order of creation time, there is no need to search the remainder
  // of the list (all those tiles correspond to older requests and will be
  // cleaned up by refreshInterimChain)
  do {
    if (tile.getState() == __WEBPACK_IMPORTED_MODULE_1__tilestate_js__["a" /* default */].LOADED) {
      return tile;
    }
    tile = tile.interimTile;
  } while (tile);

  // we can not find a better tile
  return this;
};

/**
 * Goes through the chain of interim tiles and discards sections of the chain
 * that are no longer relevant.
 */
_ol_Tile_.prototype.refreshInterimChain = function() {
  if (!this.interimTile) {
    return;
  }

  var tile = this.interimTile;
  var prev = this;

  do {
    if (tile.getState() == __WEBPACK_IMPORTED_MODULE_1__tilestate_js__["a" /* default */].LOADED) {
      //we have a loaded tile, we can discard the rest of the list
      //we would could abort any LOADING tile request
      //older than this tile (i.e. any LOADING tile following this entry in the chain)
      tile.interimTile = null;
      break;
    } else if (tile.getState() == __WEBPACK_IMPORTED_MODULE_1__tilestate_js__["a" /* default */].LOADING) {
      //keep this LOADING tile any loaded tiles later in the chain are
      //older than this tile, so we're still interested in the request
      prev = tile;
    } else if (tile.getState() == __WEBPACK_IMPORTED_MODULE_1__tilestate_js__["a" /* default */].IDLE) {
      //the head of the list is the most current tile, we don't need
      //to start any other requests for this chain
      prev.interimTile = tile.interimTile;
    } else {
      prev = tile;
    }
    tile = prev.interimTile;
  } while (tile);
};

/**
 * Get the tile coordinate for this tile.
 * @return {ol.TileCoord} The tile coordinate.
 * @api
 */
_ol_Tile_.prototype.getTileCoord = function() {
  return this.tileCoord;
};


/**
 * @return {ol.TileState} State.
 */
_ol_Tile_.prototype.getState = function() {
  return this.state;
};

/**
 * @param {ol.TileState} state State.
 */
_ol_Tile_.prototype.setState = function(state) {
  this.state = state;
  this.changed();
};

/**
 * Load the image or retry if loading previously failed.
 * Loading is taken care of by the tile queue, and calling this method is
 * only needed for preloading or for reloading in case of an error.
 * @abstract
 * @api
 */
_ol_Tile_.prototype.load = function() {};

/**
 * Get the alpha value for rendering.
 * @param {number} id An id for the renderer.
 * @param {number} time The render frame time.
 * @return {number} A number between 0 and 1.
 */
_ol_Tile_.prototype.getAlpha = function(id, time) {
  if (!this.transition_) {
    return 1;
  }

  var start = this.transitionStarts_[id];
  if (!start) {
    start = time;
    this.transitionStarts_[id] = start;
  } else if (start === -1) {
    return 1;
  }

  var delta = time - start + (1000 / 60); // avoid rendering at 0
  if (delta >= this.transition_) {
    return 1;
  }
  return __WEBPACK_IMPORTED_MODULE_2__easing_js__["a" /* default */].easeIn(delta / this.transition_);
};

/**
 * Determine if a tile is in an alpha transition.  A tile is considered in
 * transition if tile.getAlpha() has not yet been called or has been called
 * and returned 1.
 * @param {number} id An id for the renderer.
 * @return {boolean} The tile is in transition.
 */
_ol_Tile_.prototype.inTransition = function(id) {
  if (!this.transition_) {
    return false;
  }
  return this.transitionStarts_[id] !== -1;
};

/**
 * Mark a transition as complete.
 * @param {number} id An id for the renderer.
 */
_ol_Tile_.prototype.endTransition = function(id) {
  if (this.transition_) {
    this.transitionStarts_[id] = -1;
  }
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_Tile_);


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__structs_lrucache_js__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tilecoord_js__ = __webpack_require__(7);




/**
 * @constructor
 * @extends {ol.structs.LRUCache.<ol.Tile>}
 * @param {number=} opt_highWaterMark High water mark.
 * @struct
 */
var _ol_TileCache_ = function(opt_highWaterMark) {

  __WEBPACK_IMPORTED_MODULE_1__structs_lrucache_js__["a" /* default */].call(this, opt_highWaterMark);

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_TileCache_, __WEBPACK_IMPORTED_MODULE_1__structs_lrucache_js__["a" /* default */]);


/**
 * @param {Object.<string, ol.TileRange>} usedTiles Used tiles.
 */
_ol_TileCache_.prototype.expireCache = function(usedTiles) {
  var tile, zKey;
  while (this.canExpireCache()) {
    tile = this.peekLast();
    zKey = tile.tileCoord[0].toString();
    if (zKey in usedTiles && usedTiles[zKey].contains(tile.tileCoord)) {
      break;
    } else {
      this.pop().dispose();
    }
  }
};


/**
 * Prune all tiles from the cache that don't have the same z as the newest tile.
 */
_ol_TileCache_.prototype.pruneExceptNewestZ = function() {
  if (this.getCount() === 0) {
    return;
  }
  var key = this.peekFirstKey();
  var tileCoord = __WEBPACK_IMPORTED_MODULE_2__tilecoord_js__["a" /* default */].fromKey(key);
  var z = tileCoord[0];
  this.forEach(function(tile) {
    if (tile.tileCoord[0] !== z) {
      this.remove(__WEBPACK_IMPORTED_MODULE_2__tilecoord_js__["a" /* default */].getKey(tile.tileCoord));
      tile.dispose();
    }
  }, this);
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_TileCache_);


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var velocitylayer_1 = __webpack_require__(39);
var canvasBound_1 = __webpack_require__(20);
var mapBound_1 = __webpack_require__(21);
var windy_1 = __webpack_require__(18);
// import CanvasLayer from "./L.CanvasLayer";
// import VelocityLayer from "./L.VelocityLayer";
// import VelocityControl from './L.ControlVelocity';
window.VelocityLayer = velocitylayer_1.default;
window.CanvasBound = canvasBound_1.default;
window.MapBound = mapBound_1.default;
window.Windy = windy_1.default;
var testlayer_1 = __webpack_require__(65);
window.TestLayer = testlayer_1.default;
// declare var L: any;
// L.CanvasLayer = (L.Layer ? L.Layer : L.Class).extend(new CanvasLayer());
// L.canvasLayer = function () {
// 	return new L.CanvasLayer();
// };
// L.ControlVelocity = (L.Control).extend(new VelocityControl());
// L.controlVelocity = function() {
//   return new L.ControlVelocity();
// };
// L.VelocityLayer = (L.Layer ? L.Layer : L.Class).extend(new VelocityLayer());
// L.velocityLayer = function(options: any) {
// 	return new L.VelocityLayer(options);
// };


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var windy_1 = __webpack_require__(18);
var canvasBound_1 = __webpack_require__(20);
var mapBound_1 = __webpack_require__(21);
var layer_1 = __webpack_require__(44);
var image_1 = __webpack_require__(45);
var imagecanvas_1 = __webpack_require__(52);
var proj = __webpack_require__(4).default;
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
var VelocityLayer = /** @class */ (function () {
    function VelocityLayer(options) {
        this._map = null;
        this._canvas = null;
        this._canvasLayer = null;
        this._windy = null;
        this._context = null;
        this._displayTimeout = 0;
        this._mouseControl = null;
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
            maxVelocity: 10,
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
    VelocityLayer.prototype._canvasFunction = function (extent, resolution, pixelRatio, size, projection) {
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
    };
    VelocityLayer.prototype.getMapLayer = function () {
        console.debug('VelocityLayer.getMapLayer');
        this._canvas = this._canvas || document.createElement('canvas');
        console.debug('VelocityLayer.getMapLayer 1');
        this._canvasLayer = this._canvasLayer || new image_1.default({
            source: new imagecanvas_1.default({
                canvasFunction: this._canvasFunction,
                projection: 'EPSG:3857'
            })
        });
        console.debug('VelocityLayer.getMapLayer return');
        return this._canvasLayer;
    };
    VelocityLayer.prototype.addToMap = function (map) {
        console.debug('VelocityLayer.addToMap');
        map.addLayer(this.getMapLayer());
        this._map = map;
        this._drawWindy();
    };
    VelocityLayer.prototype.removeFromMap = function (map) {
        console.debug('VelocityLayer.removeFromMap');
        this._destroyWind();
        map.removeLayer(this._canvasLayer);
    };
    VelocityLayer.prototype.setData = function (data) {
        console.debug('VelocityLayer.setData');
        this.options.data = data;
        if (this._windy) {
            this._windy.setData(data);
            this._clearAndRestart();
        }
    };
    VelocityLayer.prototype._initWindy = function () {
        var _this = this;
        console.debug('VelocityLayer._initWindy');
        // windy object, copy options
        var options = Object.assign({ canvas: this._canvas }, this.options);
        this._windy = new windy_1.default(options);
        //TODO : Figure out why the event is called after the layer is removed
        this._map.on('dragstart', function () {
            if (_this._windy)
                _this._windy.stop();
        });
        this._map.on('dragend', function () {
            _this._clearAndRestart();
        });
        this._map.on('zoomstart', function () {
            if (_this._windy)
                _this._windy.stop();
        });
        this._map.on('zoomend', function () {
            _this._clearAndRestart();
        });
        this._map.on('resize', function () {
            _this._clearWind();
        });
        // this._initMouseHandler();
    };
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
    VelocityLayer.prototype._startWindy = function () {
        console.debug('VelocityLayer._startWindy');
        var mapSize = this._map.getSize();
        var mapExtent = this._map.getView().calculateExtent(mapSize);
        var extentLL = proj.transformExtent(mapExtent, 'EPSG:3857', 'EPSG:4326');
        this._windy.start(new layer_1.default(new mapBound_1.default(extentLL[3] / 180 * Math.PI, // maxy (north)
        extentLL[2] / 180 * Math.PI, // maxx (east)
        extentLL[1] / 180 * Math.PI, // miny (south)
        extentLL[0] / 180 * Math.PI // minx (west)
        ), new canvasBound_1.default(0, 0, mapSize[0], mapSize[1])));
    };
    VelocityLayer.prototype._drawWindy = function () {
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
        if (this._displayTimeout)
            clearTimeout(self._displayTimeout);
        console.debug('VelocityLayer._drawWindy: 3');
        this._displayTimeout = setTimeout(function () {
            console.debug('VelocityLayer._drawWindy: 4');
            self._startWindy();
            console.debug('VelocityLayer._drawWindy: 5');
        }, 150); // showing velocity is delayed
        console.debug('VelocityLayer._drawWindy: 6');
    };
    VelocityLayer.prototype._clearAndRestart = function () {
        console.debug('VelocityLayer._clearAndRestart');
        if (this._context)
            this._context.clearRect(0, 0, 3000, 3000);
        if (this._windy)
            this._startWindy();
    };
    VelocityLayer.prototype._clearWind = function () {
        console.debug('VelocityLayer._clearWind');
        if (this._windy)
            this._windy.stop();
        if (this._context)
            this._context.clearRect(0, 0, 3000, 3000);
    };
    VelocityLayer.prototype._destroyWind = function () {
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
    };
    return VelocityLayer;
}());
exports.default = VelocityLayer;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var vector_1 = __webpack_require__(19);
var Grid = /** @class */ (function () {
    function Grid(data, φ0, λ0, Δφ, Δλ, height, width) {
        this.data = data;
        this.φ0 = φ0;
        this.λ0 = λ0;
        this.Δλ = Δλ;
        this.Δφ = Δφ;
        this.height = height;
        this.width = width;
    }
    Object.defineProperty(Grid.prototype, "valueRange", {
        get: function () {
            if (!this.data.length) {
                return [0, 0];
            }
            var min = this.data[0].intensity;
            var max = this.data[0].intensity;
            this.data.forEach(function (value) {
                min = Math.min(min, value.intensity);
                max = Math.max(max, value.intensity);
            });
            return [min, max];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get vector at any point
     * @param λ Longitude
     * @param φ Latitude
     */
    Grid.prototype.get = function (λ, φ) {
        var fλ = this.floorMod(λ - this.λ0, 360) / this.Δλ; // calculate longitude index in wrapped range [0, 360)
        var fφ = (this.φ0 - φ) / this.Δφ; // calculate latitude index in direction +90 to -90
        var iλ = Math.floor(fλ); // col n
        var jλ = iλ + 1; // col n+1
        if (jλ >= this.width) {
            jλ = this.λ0;
        }
        var iφ = Math.floor(fφ); // line m
        var jφ = iφ + 1; // line m+1
        if (jφ >= this.height) {
            jφ = iφ;
        }
        var vλ = fλ - iλ; // col variation [0..1]
        var vφ = fφ - iφ; // line variation [0..1]
        if (iλ >= 0 && iφ >= 0 && iλ < this.width && iφ < this.height) {
            var g00 = this.data[iλ + iφ * this.width];
            var g10 = this.data[jλ + iφ * this.width];
            if (this.isValue(g00) && this.isValue(g10)) {
                var g01 = this.data[iλ + jφ * this.width];
                var g11 = this.data[jλ + jφ * this.width];
                if (this.isValue(g01) && this.isValue(g11)) {
                    return this.interpolation(vλ, vφ, g00, //l0c0
                    g10, //l0c1
                    g01, //l1c0
                    g11 //l1cl
                    );
                }
            }
        }
        return new vector_1.default(0, 0);
    };
    /**
     * Interpolate value
     * @param x variation between g0* and g1*
     * @param y variation between g*0 dans g*1
     * @param g00 point at col_0 and line_0
     * @param g10 point at col_1 and line_0
     * @param g01 point at col_0 and line_1
     * @param g11 point at col_1 and line_1
     * @return interpolated vector
     */
    Grid.prototype.interpolation = function (x, y, g00, g10, g01, g11) {
        var rx = (1 - x);
        var ry = (1 - y);
        var a = rx * ry, b = x * ry, c = rx * y, d = x * y;
        var u = g00.u * a + g10.u * b + g01.u * c + g11.u * d;
        var v = g00.v * a + g10.v * b + g01.v * c + g11.v * d;
        return new vector_1.default(u, v);
    };
    /**
     * Custom modulo
     * @returns {number} returns remainder of floored division, i.e., floor(a / n). Useful for consistent modulo
     *          of negative numbers. See http://en.wikipedia.org/wiki/Modulo_operation.
     */
    Grid.prototype.floorMod = function (a, n) {
        return a - n * Math.floor(a / n);
    };
    ;
    /**
     * Detect if x is a value
     * @returns {boolean} true if the specified value is not null and not undefined.
     */
    Grid.prototype.isValue = function (x) {
        return x !== null && x !== undefined;
    };
    ;
    return Grid;
}());
exports.default = Grid;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ColorScale = /** @class */ (function () {
    function ColorScale(minValue, maxValue, scale) {
        this.scale = [
            "rgb(36,104, 180)",
            "rgb(60,157, 194)",
            "rgb(128,205,193 )",
            "rgb(151,218,168 )",
            "rgb(198,231,181)",
            "rgb(238,247,217)",
            "rgb(255,238,159)",
            "rgb(252,217,125)",
            "rgb(255,182,100)",
            "rgb(252,150,75)",
            "rgb(250,112,52)",
            "rgb(245,64,32)",
            "rgb(237,45,28)",
            "rgb(220,24,32)",
            "rgb(180,0,35)"
        ];
        this.setMinMax(minValue, maxValue);
        if ((scale instanceof Array) && scale.length) {
            this.scale = scale;
        }
    }
    ColorScale.prototype.setMinMax = function (minValue, maxValue) {
        this.minValue = minValue;
        this.maxValue = maxValue;
    };
    Object.defineProperty(ColorScale.prototype, "size", {
        get: function () {
            return this.scale.length;
        },
        enumerable: true,
        configurable: true
    });
    ColorScale.prototype.getColorIndex = function (value) {
        if (value <= this.minValue) {
            return 0;
        }
        if (value >= this.maxValue) {
            return this.scale.length - 1;
        }
        var index = this.scale.length * (value - this.minValue) / (this.maxValue - this.minValue);
        if (index < 0) {
            return 0;
        }
        if (index > this.scale.length - 1) {
            return this.scale.length - 1;
        }
        return Math.floor(index);
    };
    ColorScale.prototype.colorAt = function (index) {
        return this.scale[index];
    };
    ColorScale.prototype.getColor = function (value) {
        return this.scale[this.getColorIndex(value)];
    };
    return ColorScale;
}());
exports.default = ColorScale;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AnimationBucket = /** @class */ (function () {
    function AnimationBucket(colorScale) {
        this.buckets = [];
        this.colorScale = colorScale;
        for (var i = 0; i < colorScale.size; i++) {
            this.buckets.push([]);
        }
    }
    AnimationBucket.prototype.clear = function () {
        this.buckets.forEach(function (particuleSet) {
            particuleSet.splice(0, particuleSet.length);
        });
    };
    AnimationBucket.prototype.add = function (p, v) {
        var index = this.colorScale.getColorIndex(p.intensity);
        if (index < 0 || index >= this.buckets.length) {
            console.log(index);
            return;
        }
        p.xt = p.x + v.u;
        p.yt = p.y + v.v;
        this.buckets[index].push(p);
    };
    AnimationBucket.prototype.draw = function (context2D) {
        var _this = this;
        this.buckets.forEach(function (bucket, i) {
            if (bucket.length > 0) {
                context2D.beginPath();
                context2D.strokeStyle = _this.colorScale.colorAt(i);
                bucket.forEach(function (particle) {
                    context2D.moveTo(particle.x, particle.y);
                    context2D.lineTo(particle.xt, particle.yt);
                    particle.x = particle.xt;
                    particle.y = particle.yt;
                });
                context2D.stroke();
            }
        });
    };
    return AnimationBucket;
}());
exports.default = AnimationBucket;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Particule = /** @class */ (function () {
    function Particule(x, y, maxAge) {
        this.x = x;
        this.y = y;
        this.age = Math.floor(Math.random() * maxAge);
        this.maxAge = maxAge;
    }
    Particule.prototype.reset = function (x, y) {
        this.x = x;
        this.y = y;
        this.age = 0;
    };
    Object.defineProperty(Particule.prototype, "isDead", {
        get: function () {
            return this.age > this.maxAge;
        },
        enumerable: true,
        configurable: true
    });
    Particule.prototype.grow = function () {
        this.age++;
    };
    return Particule;
}());
exports.default = Particule;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var layer = /** @class */ (function () {
    function layer(mapBound, canvasBound) {
        this.canvasBound = canvasBound;
        this.mapBound = mapBound;
    }
    /**
     * Find geocoordinate from canvas point
     * @param x
     * @param y
     * return [lng, lat]
     */
    layer.prototype.canvasToMap = function (x, y) {
        var mapLonDelta = this.mapBound.east - this.mapBound.west;
        var worldMapRadius = (this.canvasBound.width / this.rad2deg(mapLonDelta)) * 360 / (2 * Math.PI);
        var mapOffsetY = (worldMapRadius / 2 * Math.log((1 + Math.sin(this.mapBound.south)) / (1 - Math.sin(this.mapBound.south))));
        var equatorY = this.canvasBound.height + mapOffsetY;
        var a = (equatorY - y) / worldMapRadius;
        var φ = 180 / Math.PI * (2 * Math.atan(Math.exp(a)) - Math.PI / 2);
        var λ = this.rad2deg(this.mapBound.west) + x / this.canvasBound.width * this.rad2deg(mapLonDelta);
        return [λ, φ];
    };
    ;
    layer.prototype.mercY = function (φ) {
        return Math.log(Math.tan(φ / 2 + Math.PI / 4));
    };
    ;
    /**
     * Project a point on the map
     * @param λ Longitude
     * @param φ Latitude
     * @return [x, y]
     */
    layer.prototype.mapToCanvas = function (λ, φ) {
        var ymin = this.mercY(this.mapBound.south);
        var ymax = this.mercY(this.mapBound.north);
        var xFactor = this.canvasBound.width / (this.mapBound.east - this.mapBound.west);
        var yFactor = this.canvasBound.height / (ymax - ymin);
        var y = this.mercY(this.deg2rad(φ));
        var x = (this.deg2rad(λ) - this.mapBound.west) * xFactor;
        y = (ymax - y) * yFactor;
        return [x, y];
    };
    ;
    layer.prototype.deg2rad = function (deg) {
        return deg * Math.PI / 180;
    };
    ;
    layer.prototype.rad2deg = function (rad) {
        return rad * 180 / Math.PI;
    };
    ;
    /**
     *
     * @param λ Longitude
     * @param φ Latitude
     * @param x
     * @param y
     * @return []
     */
    layer.prototype.distortion = function (λ, φ, x, y) {
        var τ = 2 * Math.PI;
        var H = Math.pow(10, -5.2);
        var hλ = λ < 0 ? H : -H;
        var hφ = φ < 0 ? H : -H;
        var pλ = this.mapToCanvas(λ + hλ, φ);
        var pφ = this.mapToCanvas(λ, φ + hφ);
        // Meridian scale factor (see Snyder, equation 4-3), where R = 1. This handles issue where length of 1º λ
        // changes depending on φ. Without this, there is a pinching effect at the poles.
        var k = Math.cos(φ / 360 * τ);
        return [
            (pλ[0] - x) / hλ / k,
            (pλ[1] - y) / hλ / k,
            (pφ[0] - x) / hφ,
            (pφ[1] - y) / hφ
        ];
    };
    /**
     * Calculate distortion of the wind vector caused by the shape of the projection at point (x, y). The wind
     * vector is modified in place and returned by this function.
     * @param λ
     * @param φ
     * @param x
     * @param y
     * @param scale scale factor
     * @param wind [u, v]
     * @return []
     */
    layer.prototype.distort = function (λ, φ, x, y, scale, wind) {
        var u = wind.u * scale;
        var v = wind.v * scale;
        var d = this.distortion(λ, φ, x, y);
        // Scale distortion vectors by u and v, then add.
        wind.u = d[0] * u + d[2] * v;
        wind.v = d[1] * u + d[3] * v;
        return wind;
    };
    return layer;
}());
exports.default = layer;


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layertype_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layer_layer_js__ = __webpack_require__(23);




/**
 * @classdesc
 * Server-rendered images that are available for arbitrary extents and
 * resolutions.
 * Note that any property set in the options is set as a {@link ol.Object}
 * property on the layer object; for example, setting `title: 'My Title'` in the
 * options means that `title` is observable, and has get/set accessors.
 *
 * @constructor
 * @extends {ol.layer.Layer}
 * @fires ol.render.Event
 * @param {olx.layer.ImageOptions=} opt_options Layer options.
 * @api
 */
var _ol_layer_Image_ = function(opt_options) {
  var options = opt_options ? opt_options : {};
  __WEBPACK_IMPORTED_MODULE_2__layer_layer_js__["a" /* default */].call(this,  /** @type {olx.layer.LayerOptions} */ (options));

  /**
   * The layer type.
   * @protected
   * @type {ol.LayerType}
   */
  this.type = __WEBPACK_IMPORTED_MODULE_1__layertype_js__["a" /* default */].IMAGE;

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_layer_Image_, __WEBPACK_IMPORTED_MODULE_2__layer_layer_js__["a" /* default */]);


/**
 * Return the associated {@link ol.source.Image source} of the image layer.
 * @function
 * @return {ol.source.Image} Source.
 * @api
 */
_ol_layer_Image_.prototype.getSource;
/* harmony default export */ __webpack_exports__["default"] = (_ol_layer_Image_);


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @enum {string}
 */
var _ol_ObjectEventType_ = {
  /**
   * Triggered when a property is changed.
   * @event ol.Object.Event#propertychange
   * @api
   */
  PROPERTYCHANGE: 'propertychange'
};

/* harmony default export */ __webpack_exports__["a"] = (_ol_ObjectEventType_);


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_eventtarget_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_eventtype_js__ = __webpack_require__(2);





/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * An event target providing convenient methods for listener registration
 * and unregistration. A generic `change` event is always available through
 * {@link ol.Observable#changed}.
 *
 * @constructor
 * @extends {ol.events.EventTarget}
 * @fires ol.events.Event
 * @struct
 * @api
 */
var _ol_Observable_ = function() {

  __WEBPACK_IMPORTED_MODULE_2__events_eventtarget_js__["a" /* default */].call(this);

  /**
   * @private
   * @type {number}
   */
  this.revision_ = 0;

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_Observable_, __WEBPACK_IMPORTED_MODULE_2__events_eventtarget_js__["a" /* default */]);


/**
 * Removes an event listener using the key returned by `on()` or `once()`.
 * @param {ol.EventsKey|Array.<ol.EventsKey>} key The key returned by `on()`
 *     or `once()` (or an array of keys).
 * @api
 */
_ol_Observable_.unByKey = function(key) {
  if (Array.isArray(key)) {
    for (var i = 0, ii = key.length; i < ii; ++i) {
      __WEBPACK_IMPORTED_MODULE_1__events_js__["a" /* default */].unlistenByKey(key[i]);
    }
  } else {
    __WEBPACK_IMPORTED_MODULE_1__events_js__["a" /* default */].unlistenByKey(/** @type {ol.EventsKey} */ (key));
  }
};


/**
 * Increases the revision counter and dispatches a 'change' event.
 * @api
 */
_ol_Observable_.prototype.changed = function() {
  ++this.revision_;
  this.dispatchEvent(__WEBPACK_IMPORTED_MODULE_3__events_eventtype_js__["a" /* default */].CHANGE);
};


/**
 * Dispatches an event and calls all listeners listening for events
 * of this type. The event parameter can either be a string or an
 * Object with a `type` property.
 *
 * @param {{type: string,
 *     target: (EventTarget|ol.events.EventTarget|undefined)}|ol.events.Event|
 *     string} event Event object.
 * @function
 * @api
 */
_ol_Observable_.prototype.dispatchEvent;


/**
 * Get the version number for this object.  Each time the object is modified,
 * its version number will be incremented.
 * @return {number} Revision.
 * @api
 */
_ol_Observable_.prototype.getRevision = function() {
  return this.revision_;
};


/**
 * Listen for a certain type of event.
 * @param {string|Array.<string>} type The event type or array of event types.
 * @param {function(?): ?} listener The listener function.
 * @param {Object=} opt_this The object to use as `this` in `listener`.
 * @return {ol.EventsKey|Array.<ol.EventsKey>} Unique key for the listener. If
 *     called with an array of event types as the first argument, the return
 *     will be an array of keys.
 * @api
 */
_ol_Observable_.prototype.on = function(type, listener, opt_this) {
  if (Array.isArray(type)) {
    var len = type.length;
    var keys = new Array(len);
    for (var i = 0; i < len; ++i) {
      keys[i] = __WEBPACK_IMPORTED_MODULE_1__events_js__["a" /* default */].listen(this, type[i], listener, opt_this);
    }
    return keys;
  } else {
    return __WEBPACK_IMPORTED_MODULE_1__events_js__["a" /* default */].listen(
        this, /** @type {string} */ (type), listener, opt_this);
  }
};


/**
 * Listen once for a certain type of event.
 * @param {string|Array.<string>} type The event type or array of event types.
 * @param {function(?): ?} listener The listener function.
 * @param {Object=} opt_this The object to use as `this` in `listener`.
 * @return {ol.EventsKey|Array.<ol.EventsKey>} Unique key for the listener. If
 *     called with an array of event types as the first argument, the return
 *     will be an array of keys.
 * @api
 */
_ol_Observable_.prototype.once = function(type, listener, opt_this) {
  if (Array.isArray(type)) {
    var len = type.length;
    var keys = new Array(len);
    for (var i = 0; i < len; ++i) {
      keys[i] = __WEBPACK_IMPORTED_MODULE_1__events_js__["a" /* default */].listenOnce(this, type[i], listener, opt_this);
    }
    return keys;
  } else {
    return __WEBPACK_IMPORTED_MODULE_1__events_js__["a" /* default */].listenOnce(
        this, /** @type {string} */ (type), listener, opt_this);
  }
};


/**
 * Unlisten for a certain type of event.
 * @param {string|Array.<string>} type The event type or array of event types.
 * @param {function(?): ?} listener The listener function.
 * @param {Object=} opt_this The object which was used as `this` by the
 * `listener`.
 * @api
 */
_ol_Observable_.prototype.un = function(type, listener, opt_this) {
  if (Array.isArray(type)) {
    for (var i = 0, ii = type.length; i < ii; ++i) {
      __WEBPACK_IMPORTED_MODULE_1__events_js__["a" /* default */].unlisten(this, type[i], listener, opt_this);
    }
    return;
  } else {
    __WEBPACK_IMPORTED_MODULE_1__events_js__["a" /* default */].unlisten(this, /** @type {string} */ (type), listener, opt_this);
  }
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_Observable_);


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);


/**
 * Objects that need to clean up after themselves.
 * @constructor
 */
var _ol_Disposable_ = function() {};

/**
 * The object has already been disposed.
 * @type {boolean}
 * @private
 */
_ol_Disposable_.prototype.disposed_ = false;

/**
 * Clean up.
 */
_ol_Disposable_.prototype.dispose = function() {
  if (!this.disposed_) {
    this.disposed_ = true;
    this.disposeInternal();
  }
};

/**
 * Extension point for disposable objects.
 * @protected
 */
_ol_Disposable_.prototype.disposeInternal = __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].nullFunction;
/* harmony default export */ __webpack_exports__["a"] = (_ol_Disposable_);


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__object_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layer_property_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__obj_js__ = __webpack_require__(6);






/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Note that with `ol.layer.Base` and all its subclasses, any property set in
 * the options is set as a {@link ol.Object} property on the layer object, so
 * is observable, and has get/set accessors.
 *
 * @constructor
 * @abstract
 * @extends {ol.Object}
 * @param {olx.layer.BaseOptions} options Layer options.
 * @api
 */
var _ol_layer_Base_ = function(options) {

  __WEBPACK_IMPORTED_MODULE_1__object_js__["a" /* default */].call(this);

  /**
   * @type {Object.<string, *>}
   */
  var properties = __WEBPACK_IMPORTED_MODULE_4__obj_js__["a" /* default */].assign({}, options);
  properties[__WEBPACK_IMPORTED_MODULE_2__layer_property_js__["a" /* default */].OPACITY] =
      options.opacity !== undefined ? options.opacity : 1;
  properties[__WEBPACK_IMPORTED_MODULE_2__layer_property_js__["a" /* default */].VISIBLE] =
      options.visible !== undefined ? options.visible : true;
  properties[__WEBPACK_IMPORTED_MODULE_2__layer_property_js__["a" /* default */].Z_INDEX] =
      options.zIndex !== undefined ? options.zIndex : 0;
  properties[__WEBPACK_IMPORTED_MODULE_2__layer_property_js__["a" /* default */].MAX_RESOLUTION] =
      options.maxResolution !== undefined ? options.maxResolution : Infinity;
  properties[__WEBPACK_IMPORTED_MODULE_2__layer_property_js__["a" /* default */].MIN_RESOLUTION] =
      options.minResolution !== undefined ? options.minResolution : 0;

  this.setProperties(properties);

  /**
   * @type {ol.LayerState}
   * @private
   */
  this.state_ = /** @type {ol.LayerState} */ ({
    layer: /** @type {ol.layer.Layer} */ (this),
    managed: true
  });

  /**
   * The layer type.
   * @type {ol.LayerType}
   * @protected;
   */
  this.type;

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_layer_Base_, __WEBPACK_IMPORTED_MODULE_1__object_js__["a" /* default */]);


/**
 * Get the layer type (used when creating a layer renderer).
 * @return {ol.LayerType} The layer type.
 */
_ol_layer_Base_.prototype.getType = function() {
  return this.type;
};


/**
 * @return {ol.LayerState} Layer state.
 */
_ol_layer_Base_.prototype.getLayerState = function() {
  this.state_.opacity = __WEBPACK_IMPORTED_MODULE_3__math_js__["a" /* default */].clamp(this.getOpacity(), 0, 1);
  this.state_.sourceState = this.getSourceState();
  this.state_.visible = this.getVisible();
  this.state_.extent = this.getExtent();
  this.state_.zIndex = this.getZIndex();
  this.state_.maxResolution = this.getMaxResolution();
  this.state_.minResolution = Math.max(this.getMinResolution(), 0);

  return this.state_;
};


/**
 * @abstract
 * @param {Array.<ol.layer.Layer>=} opt_array Array of layers (to be
 *     modified in place).
 * @return {Array.<ol.layer.Layer>} Array of layers.
 */
_ol_layer_Base_.prototype.getLayersArray = function(opt_array) {};


/**
 * @abstract
 * @param {Array.<ol.LayerState>=} opt_states Optional list of layer
 *     states (to be modified in place).
 * @return {Array.<ol.LayerState>} List of layer states.
 */
_ol_layer_Base_.prototype.getLayerStatesArray = function(opt_states) {};


/**
 * Return the {@link ol.Extent extent} of the layer or `undefined` if it
 * will be visible regardless of extent.
 * @return {ol.Extent|undefined} The layer extent.
 * @observable
 * @api
 */
_ol_layer_Base_.prototype.getExtent = function() {
  return (
  /** @type {ol.Extent|undefined} */ this.get(__WEBPACK_IMPORTED_MODULE_2__layer_property_js__["a" /* default */].EXTENT)
  );
};


/**
 * Return the maximum resolution of the layer.
 * @return {number} The maximum resolution of the layer.
 * @observable
 * @api
 */
_ol_layer_Base_.prototype.getMaxResolution = function() {
  return (
  /** @type {number} */ this.get(__WEBPACK_IMPORTED_MODULE_2__layer_property_js__["a" /* default */].MAX_RESOLUTION)
  );
};


/**
 * Return the minimum resolution of the layer.
 * @return {number} The minimum resolution of the layer.
 * @observable
 * @api
 */
_ol_layer_Base_.prototype.getMinResolution = function() {
  return (
  /** @type {number} */ this.get(__WEBPACK_IMPORTED_MODULE_2__layer_property_js__["a" /* default */].MIN_RESOLUTION)
  );
};


/**
 * Return the opacity of the layer (between 0 and 1).
 * @return {number} The opacity of the layer.
 * @observable
 * @api
 */
_ol_layer_Base_.prototype.getOpacity = function() {
  return (
  /** @type {number} */ this.get(__WEBPACK_IMPORTED_MODULE_2__layer_property_js__["a" /* default */].OPACITY)
  );
};


/**
 * @abstract
 * @return {ol.source.State} Source state.
 */
_ol_layer_Base_.prototype.getSourceState = function() {};


/**
 * Return the visibility of the layer (`true` or `false`).
 * @return {boolean} The visibility of the layer.
 * @observable
 * @api
 */
_ol_layer_Base_.prototype.getVisible = function() {
  return (
  /** @type {boolean} */ this.get(__WEBPACK_IMPORTED_MODULE_2__layer_property_js__["a" /* default */].VISIBLE)
  );
};


/**
 * Return the Z-index of the layer, which is used to order layers before
 * rendering. The default Z-index is 0.
 * @return {number} The Z-index of the layer.
 * @observable
 * @api
 */
_ol_layer_Base_.prototype.getZIndex = function() {
  return (
  /** @type {number} */ this.get(__WEBPACK_IMPORTED_MODULE_2__layer_property_js__["a" /* default */].Z_INDEX)
  );
};


/**
 * Set the extent at which the layer is visible.  If `undefined`, the layer
 * will be visible at all extents.
 * @param {ol.Extent|undefined} extent The extent of the layer.
 * @observable
 * @api
 */
_ol_layer_Base_.prototype.setExtent = function(extent) {
  this.set(__WEBPACK_IMPORTED_MODULE_2__layer_property_js__["a" /* default */].EXTENT, extent);
};


/**
 * Set the maximum resolution at which the layer is visible.
 * @param {number} maxResolution The maximum resolution of the layer.
 * @observable
 * @api
 */
_ol_layer_Base_.prototype.setMaxResolution = function(maxResolution) {
  this.set(__WEBPACK_IMPORTED_MODULE_2__layer_property_js__["a" /* default */].MAX_RESOLUTION, maxResolution);
};


/**
 * Set the minimum resolution at which the layer is visible.
 * @param {number} minResolution The minimum resolution of the layer.
 * @observable
 * @api
 */
_ol_layer_Base_.prototype.setMinResolution = function(minResolution) {
  this.set(__WEBPACK_IMPORTED_MODULE_2__layer_property_js__["a" /* default */].MIN_RESOLUTION, minResolution);
};


/**
 * Set the opacity of the layer, allowed values range from 0 to 1.
 * @param {number} opacity The opacity of the layer.
 * @observable
 * @api
 */
_ol_layer_Base_.prototype.setOpacity = function(opacity) {
  this.set(__WEBPACK_IMPORTED_MODULE_2__layer_property_js__["a" /* default */].OPACITY, opacity);
};


/**
 * Set the visibility of the layer (`true` or `false`).
 * @param {boolean} visible The visibility of the layer.
 * @observable
 * @api
 */
_ol_layer_Base_.prototype.setVisible = function(visible) {
  this.set(__WEBPACK_IMPORTED_MODULE_2__layer_property_js__["a" /* default */].VISIBLE, visible);
};


/**
 * Set Z-index of the layer, which is used to order layers before rendering.
 * The default Z-index is 0.
 * @param {number} zindex The z-index of the layer.
 * @observable
 * @api
 */
_ol_layer_Base_.prototype.setZIndex = function(zindex) {
  this.set(__WEBPACK_IMPORTED_MODULE_2__layer_property_js__["a" /* default */].Z_INDEX, zindex);
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_layer_Base_);


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);


/**
 * Error object thrown when an assertion failed. This is an ECMA-262 Error,
 * extended with a `code` property.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error}
 * @constructor
 * @extends {Error}
 * @implements {oli.AssertionError}
 * @param {number} code Error code.
 */
var _ol_AssertionError_ = function(code) {

  var path = __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].VERSION ? __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].VERSION.split('-')[0] : 'latest';

  /**
   * @type {string}
   */
  this.message = 'Assertion failed. See https://openlayers.org/en/' + path +
      '/doc/errors/#' + code + ' for details.';

  /**
   * Error code. The meaning of the code can be found on
   * {@link https://openlayers.org/en/latest/doc/errors/} (replace `latest` with
   * the version found in the OpenLayers script's header comment if a version
   * other than the latest is used).
   * @type {number}
   * @api
   */
  this.code = code;

  this.name = 'AssertionError';

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_AssertionError_, Error);
/* harmony default export */ __webpack_exports__["a"] = (_ol_AssertionError_);


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @enum {string}
 */
var _ol_render_EventType_ = {
  /**
   * @event ol.render.Event#postcompose
   * @api
   */
  POSTCOMPOSE: 'postcompose',
  /**
   * @event ol.render.Event#precompose
   * @api
   */
  PRECOMPOSE: 'precompose',
  /**
   * @event ol.render.Event#render
   * @api
   */
  RENDER: 'render'
};

/* harmony default export */ __webpack_exports__["a"] = (_ol_render_EventType_);


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imagecanvas_js__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extent_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__source_image_js__ = __webpack_require__(55);





/**
 * @classdesc
 * Base class for image sources where a canvas element is the image.
 *
 * @constructor
 * @extends {ol.source.Image}
 * @param {olx.source.ImageCanvasOptions} options Constructor options.
 * @api
 */
var _ol_source_ImageCanvas_ = function(options) {

  __WEBPACK_IMPORTED_MODULE_3__source_image_js__["a" /* default */].call(this, {
    attributions: options.attributions,
    logo: options.logo,
    projection: options.projection,
    resolutions: options.resolutions,
    state: options.state
  });

  /**
   * @private
   * @type {ol.CanvasFunctionType}
   */
  this.canvasFunction_ = options.canvasFunction;

  /**
   * @private
   * @type {ol.ImageCanvas}
   */
  this.canvas_ = null;

  /**
   * @private
   * @type {number}
   */
  this.renderedRevision_ = 0;

  /**
   * @private
   * @type {number}
   */
  this.ratio_ = options.ratio !== undefined ?
    options.ratio : 1.5;

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_source_ImageCanvas_, __WEBPACK_IMPORTED_MODULE_3__source_image_js__["a" /* default */]);


/**
 * @inheritDoc
 */
_ol_source_ImageCanvas_.prototype.getImageInternal = function(extent, resolution, pixelRatio, projection) {
  resolution = this.findNearestResolution(resolution);

  var canvas = this.canvas_;
  if (canvas &&
      this.renderedRevision_ == this.getRevision() &&
      canvas.getResolution() == resolution &&
      canvas.getPixelRatio() == pixelRatio &&
      __WEBPACK_IMPORTED_MODULE_2__extent_js__["a" /* default */].containsExtent(canvas.getExtent(), extent)) {
    return canvas;
  }

  extent = extent.slice();
  __WEBPACK_IMPORTED_MODULE_2__extent_js__["a" /* default */].scaleFromCenter(extent, this.ratio_);
  var width = __WEBPACK_IMPORTED_MODULE_2__extent_js__["a" /* default */].getWidth(extent) / resolution;
  var height = __WEBPACK_IMPORTED_MODULE_2__extent_js__["a" /* default */].getHeight(extent) / resolution;
  var size = [width * pixelRatio, height * pixelRatio];

  var canvasElement = this.canvasFunction_(
      extent, resolution, pixelRatio, size, projection);
  if (canvasElement) {
    canvas = new __WEBPACK_IMPORTED_MODULE_1__imagecanvas_js__["a" /* default */](extent, resolution, pixelRatio, canvasElement);
  }
  this.canvas_ = canvas;
  this.renderedRevision_ = this.getRevision();

  return canvas;
};
/* harmony default export */ __webpack_exports__["default"] = (_ol_source_ImageCanvas_);


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imagebase_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imagestate_js__ = __webpack_require__(15);




/**
 * @constructor
 * @extends {ol.ImageBase}
 * @param {ol.Extent} extent Extent.
 * @param {number} resolution Resolution.
 * @param {number} pixelRatio Pixel ratio.
 * @param {HTMLCanvasElement} canvas Canvas.
 * @param {ol.ImageCanvasLoader=} opt_loader Optional loader function to
 *     support asynchronous canvas drawing.
 */
var _ol_ImageCanvas_ = function(extent, resolution, pixelRatio, canvas, opt_loader) {

  /**
   * Optional canvas loader function.
   * @type {?ol.ImageCanvasLoader}
   * @private
   */
  this.loader_ = opt_loader !== undefined ? opt_loader : null;

  var state = opt_loader !== undefined ?
    __WEBPACK_IMPORTED_MODULE_2__imagestate_js__["a" /* default */].IDLE : __WEBPACK_IMPORTED_MODULE_2__imagestate_js__["a" /* default */].LOADED;

  __WEBPACK_IMPORTED_MODULE_1__imagebase_js__["a" /* default */].call(this, extent, resolution, pixelRatio, state);

  /**
   * @private
   * @type {HTMLCanvasElement}
   */
  this.canvas_ = canvas;

  /**
   * @private
   * @type {Error}
   */
  this.error_ = null;

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_ImageCanvas_, __WEBPACK_IMPORTED_MODULE_1__imagebase_js__["a" /* default */]);


/**
 * Get any error associated with asynchronous rendering.
 * @return {Error} Any error that occurred during rendering.
 */
_ol_ImageCanvas_.prototype.getError = function() {
  return this.error_;
};


/**
 * Handle async drawing complete.
 * @param {Error} err Any error during drawing.
 * @private
 */
_ol_ImageCanvas_.prototype.handleLoad_ = function(err) {
  if (err) {
    this.error_ = err;
    this.state = __WEBPACK_IMPORTED_MODULE_2__imagestate_js__["a" /* default */].ERROR;
  } else {
    this.state = __WEBPACK_IMPORTED_MODULE_2__imagestate_js__["a" /* default */].LOADED;
  }
  this.changed();
};


/**
 * @inheritDoc
 */
_ol_ImageCanvas_.prototype.load = function() {
  if (this.state == __WEBPACK_IMPORTED_MODULE_2__imagestate_js__["a" /* default */].IDLE) {
    this.state = __WEBPACK_IMPORTED_MODULE_2__imagestate_js__["a" /* default */].LOADING;
    this.changed();
    this.loader_(this.handleLoad_.bind(this));
  }
};


/**
 * @inheritDoc
 */
_ol_ImageCanvas_.prototype.getImage = function() {
  return this.canvas_;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_ImageCanvas_);


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Relationship to an extent.
 * @enum {number}
 */
var _ol_extent_Relationship_ = {
  UNKNOWN: 0,
  INTERSECTING: 1,
  ABOVE: 2,
  RIGHT: 4,
  BELOW: 8,
  LEFT: 16
};

/* harmony default export */ __webpack_exports__["a"] = (_ol_extent_Relationship_);


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imagestate_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_event_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__extent_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__proj_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reproj_image_js__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__source_source_js__ = __webpack_require__(33);









/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Base class for sources providing a single image.
 *
 * @constructor
 * @abstract
 * @extends {ol.source.Source}
 * @param {ol.SourceImageOptions} options Single image source options.
 * @api
 */
var _ol_source_Image_ = function(options) {
  __WEBPACK_IMPORTED_MODULE_7__source_source_js__["a" /* default */].call(this, {
    attributions: options.attributions,
    extent: options.extent,
    logo: options.logo,
    projection: options.projection,
    state: options.state
  });

  /**
   * @private
   * @type {Array.<number>}
   */
  this.resolutions_ = options.resolutions !== undefined ?
    options.resolutions : null;


  /**
   * @private
   * @type {ol.reproj.Image}
   */
  this.reprojectedImage_ = null;


  /**
   * @private
   * @type {number}
   */
  this.reprojectedRevision_ = 0;
};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_source_Image_, __WEBPACK_IMPORTED_MODULE_7__source_source_js__["a" /* default */]);


/**
 * @return {Array.<number>} Resolutions.
 * @override
 */
_ol_source_Image_.prototype.getResolutions = function() {
  return this.resolutions_;
};


/**
 * @protected
 * @param {number} resolution Resolution.
 * @return {number} Resolution.
 */
_ol_source_Image_.prototype.findNearestResolution = function(resolution) {
  if (this.resolutions_) {
    var idx = __WEBPACK_IMPORTED_MODULE_2__array_js__["a" /* default */].linearFindNearest(this.resolutions_, resolution, 0);
    resolution = this.resolutions_[idx];
  }
  return resolution;
};


/**
 * @param {ol.Extent} extent Extent.
 * @param {number} resolution Resolution.
 * @param {number} pixelRatio Pixel ratio.
 * @param {ol.proj.Projection} projection Projection.
 * @return {ol.ImageBase} Single image.
 */
_ol_source_Image_.prototype.getImage = function(extent, resolution, pixelRatio, projection) {
  var sourceProjection = this.getProjection();
  if (!__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].ENABLE_RASTER_REPROJECTION ||
      !sourceProjection ||
      !projection ||
      __WEBPACK_IMPORTED_MODULE_5__proj_js__["default"].equivalent(sourceProjection, projection)) {
    if (sourceProjection) {
      projection = sourceProjection;
    }
    return this.getImageInternal(extent, resolution, pixelRatio, projection);
  } else {
    if (this.reprojectedImage_) {
      if (this.reprojectedRevision_ == this.getRevision() &&
          __WEBPACK_IMPORTED_MODULE_5__proj_js__["default"].equivalent(
              this.reprojectedImage_.getProjection(), projection) &&
          this.reprojectedImage_.getResolution() == resolution &&
          __WEBPACK_IMPORTED_MODULE_4__extent_js__["a" /* default */].equals(this.reprojectedImage_.getExtent(), extent)) {
        return this.reprojectedImage_;
      }
      this.reprojectedImage_.dispose();
      this.reprojectedImage_ = null;
    }

    this.reprojectedImage_ = new __WEBPACK_IMPORTED_MODULE_6__reproj_image_js__["a" /* default */](
        sourceProjection, projection, extent, resolution, pixelRatio,
        function(extent, resolution, pixelRatio) {
          return this.getImageInternal(extent, resolution,
              pixelRatio, sourceProjection);
        }.bind(this));
    this.reprojectedRevision_ = this.getRevision();

    return this.reprojectedImage_;
  }
};


/**
 * @abstract
 * @param {ol.Extent} extent Extent.
 * @param {number} resolution Resolution.
 * @param {number} pixelRatio Pixel ratio.
 * @param {ol.proj.Projection} projection Projection.
 * @return {ol.ImageBase} Single image.
 * @protected
 */
_ol_source_Image_.prototype.getImageInternal = function(extent, resolution, pixelRatio, projection) {};


/**
 * Handle image change events.
 * @param {ol.events.Event} event Event.
 * @protected
 */
_ol_source_Image_.prototype.handleImageChange = function(event) {
  var image = /** @type {ol.Image} */ (event.target);
  switch (image.getState()) {
    case __WEBPACK_IMPORTED_MODULE_1__imagestate_js__["a" /* default */].LOADING:
      this.dispatchEvent(
          new _ol_source_Image_.Event(_ol_source_Image_.EventType_.IMAGELOADSTART,
              image));
      break;
    case __WEBPACK_IMPORTED_MODULE_1__imagestate_js__["a" /* default */].LOADED:
      this.dispatchEvent(
          new _ol_source_Image_.Event(_ol_source_Image_.EventType_.IMAGELOADEND,
              image));
      break;
    case __WEBPACK_IMPORTED_MODULE_1__imagestate_js__["a" /* default */].ERROR:
      this.dispatchEvent(
          new _ol_source_Image_.Event(_ol_source_Image_.EventType_.IMAGELOADERROR,
              image));
      break;
    default:
      // pass
  }
};


/**
 * Default image load function for image sources that use ol.Image image
 * instances.
 * @param {ol.Image} image Image.
 * @param {string} src Source.
 */
_ol_source_Image_.defaultImageLoadFunction = function(image, src) {
  image.getImage().src = src;
};


/**
 * @classdesc
 * Events emitted by {@link ol.source.Image} instances are instances of this
 * type.
 *
 * @constructor
 * @extends {ol.events.Event}
 * @implements {oli.source.ImageEvent}
 * @param {string} type Type.
 * @param {ol.Image} image The image.
 */
_ol_source_Image_.Event = function(type, image) {

  __WEBPACK_IMPORTED_MODULE_3__events_event_js__["a" /* default */].call(this, type);

  /**
   * The image related to the event.
   * @type {ol.Image}
   * @api
   */
  this.image = image;

};
__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_source_Image_.Event, __WEBPACK_IMPORTED_MODULE_3__events_event_js__["a" /* default */]);


/**
 * @enum {string}
 * @private
 */
_ol_source_Image_.EventType_ = {

  /**
   * Triggered when an image starts loading.
   * @event ol.source.Image.Event#imageloadstart
   * @api
   */
  IMAGELOADSTART: 'imageloadstart',

  /**
   * Triggered when an image finishes loading.
   * @event ol.source.Image.Event#imageloadend
   * @api
   */
  IMAGELOADEND: 'imageloadend',

  /**
   * Triggered if image loading results in an error.
   * @event ol.source.Image.Event#imageloaderror
   * @api
   */
  IMAGELOADERROR: 'imageloaderror'

};
/* harmony default export */ __webpack_exports__["a"] = (_ol_source_Image_);


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__ = __webpack_require__(57);
/**
 * @license
 * Latitude/longitude spherical geodesy formulae taken from
 * http://www.movable-type.co.uk/scripts/latlong.html
 * Licensed under CC-BY-3.0.
 */




/**
 * @classdesc
 * Class to create objects that can be used with {@link
 * ol.geom.Polygon.circular}.
 *
 * For example to create a sphere whose radius is equal to the semi-major
 * axis of the WGS84 ellipsoid:
 *
 * ```js
 * var wgs84Sphere= new ol.Sphere(6378137);
 * ```
 *
 * @constructor
 * @param {number} radius Radius.
 * @api
 */
var _ol_Sphere_ = function(radius) {

  /**
   * @type {number}
   */
  this.radius = radius;

};


/**
 * Returns the geodesic area for a list of coordinates.
 *
 * [Reference](https://trs-new.jpl.nasa.gov/handle/2014/40409)
 * Robert. G. Chamberlain and William H. Duquette, "Some Algorithms for
 * Polygons on a Sphere", JPL Publication 07-03, Jet Propulsion
 * Laboratory, Pasadena, CA, June 2007
 *
 * @param {Array.<ol.Coordinate>} coordinates List of coordinates of a linear
 * ring. If the ring is oriented clockwise, the area will be positive,
 * otherwise it will be negative.
 * @return {number} Area.
 * @api
 */
_ol_Sphere_.prototype.geodesicArea = function(coordinates) {
  return _ol_Sphere_.getArea_(coordinates, this.radius);
};


/**
 * Returns the distance from c1 to c2 using the haversine formula.
 *
 * @param {ol.Coordinate} c1 Coordinate 1.
 * @param {ol.Coordinate} c2 Coordinate 2.
 * @return {number} Haversine distance.
 * @api
 */
_ol_Sphere_.prototype.haversineDistance = function(c1, c2) {
  return _ol_Sphere_.getDistance_(c1, c2, this.radius);
};


/**
 * Returns the coordinate at the given distance and bearing from `c1`.
 *
 * @param {ol.Coordinate} c1 The origin point (`[lon, lat]` in degrees).
 * @param {number} distance The great-circle distance between the origin
 *     point and the target point.
 * @param {number} bearing The bearing (in radians).
 * @return {ol.Coordinate} The target point.
 */
_ol_Sphere_.prototype.offset = function(c1, distance, bearing) {
  var lat1 = __WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* default */].toRadians(c1[1]);
  var lon1 = __WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* default */].toRadians(c1[0]);
  var dByR = distance / this.radius;
  var lat = Math.asin(
      Math.sin(lat1) * Math.cos(dByR) +
      Math.cos(lat1) * Math.sin(dByR) * Math.cos(bearing));
  var lon = lon1 + Math.atan2(
      Math.sin(bearing) * Math.sin(dByR) * Math.cos(lat1),
      Math.cos(dByR) - Math.sin(lat1) * Math.sin(lat));
  return [__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* default */].toDegrees(lon), __WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* default */].toDegrees(lat)];
};


/**
 * The mean Earth radius (1/3 * (2a + b)) for the WGS84 ellipsoid.
 * https://en.wikipedia.org/wiki/Earth_radius#Mean_radius
 * @type {number}
 */
_ol_Sphere_.DEFAULT_RADIUS = 6371008.8;


/**
 * Get the spherical length of a geometry.  This length is the sum of the
 * great circle distances between coordinates.  For polygons, the length is
 * the sum of all rings.  For points, the length is zero.  For multi-part
 * geometries, the length is the sum of the length of each part.
 * @param {ol.geom.Geometry} geometry A geometry.
 * @param {olx.SphereMetricOptions=} opt_options Options for the length
 *     calculation.  By default, geometries are assumed to be in 'EPSG:3857'.
 *     You can change this by providing a `projection` option.
 * @return {number} The spherical length (in meters).
 * @api
 */
_ol_Sphere_.getLength = function(geometry, opt_options) {
  var options = opt_options || {};
  var radius = options.radius || _ol_Sphere_.DEFAULT_RADIUS;
  var projection = options.projection || 'EPSG:3857';
  geometry = geometry.clone().transform(projection, 'EPSG:4326');
  var type = geometry.getType();
  var length = 0;
  var coordinates, coords, i, ii, j, jj;
  switch (type) {
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].POINT:
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].MULTI_POINT: {
      break;
    }
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].LINE_STRING:
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].LINEAR_RING: {
      coordinates = /** @type {ol.geom.SimpleGeometry} */ (geometry).getCoordinates();
      length = _ol_Sphere_.getLength_(coordinates, radius);
      break;
    }
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].MULTI_LINE_STRING:
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].POLYGON: {
      coordinates = /** @type {ol.geom.SimpleGeometry} */ (geometry).getCoordinates();
      for (i = 0, ii = coordinates.length; i < ii; ++i) {
        length += _ol_Sphere_.getLength_(coordinates[i], radius);
      }
      break;
    }
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].MULTI_POLYGON: {
      coordinates = /** @type {ol.geom.SimpleGeometry} */ (geometry).getCoordinates();
      for (i = 0, ii = coordinates.length; i < ii; ++i) {
        coords = coordinates[i];
        for (j = 0, jj = coords.length; j < jj; ++j) {
          length += _ol_Sphere_.getLength_(coords[j], radius);
        }
      }
      break;
    }
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].GEOMETRY_COLLECTION: {
      var geometries = /** @type {ol.geom.GeometryCollection} */ (geometry).getGeometries();
      for (i = 0, ii = geometries.length; i < ii; ++i) {
        length += _ol_Sphere_.getLength(geometries[i], opt_options);
      }
      break;
    }
    default: {
      throw new Error('Unsupported geometry type: ' + type);
    }
  }
  return length;
};


/**
 * Get the cumulative great circle length of linestring coordinates (geographic).
 * @param {Array} coordinates Linestring coordinates.
 * @param {number} radius The sphere radius to use.
 * @return {number} The length (in meters).
 */
_ol_Sphere_.getLength_ = function(coordinates, radius) {
  var length = 0;
  for (var i = 0, ii = coordinates.length; i < ii - 1; ++i) {
    length += _ol_Sphere_.getDistance_(coordinates[i], coordinates[i + 1], radius);
  }
  return length;
};


/**
 * Get the great circle distance between two geographic coordinates.
 * @param {Array} c1 Starting coordinate.
 * @param {Array} c2 Ending coordinate.
 * @param {number} radius The sphere radius to use.
 * @return {number} The great circle distance between the points (in meters).
 */
_ol_Sphere_.getDistance_ = function(c1, c2, radius) {
  var lat1 = __WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* default */].toRadians(c1[1]);
  var lat2 = __WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* default */].toRadians(c2[1]);
  var deltaLatBy2 = (lat2 - lat1) / 2;
  var deltaLonBy2 = __WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* default */].toRadians(c2[0] - c1[0]) / 2;
  var a = Math.sin(deltaLatBy2) * Math.sin(deltaLatBy2) +
      Math.sin(deltaLonBy2) * Math.sin(deltaLonBy2) *
      Math.cos(lat1) * Math.cos(lat2);
  return 2 * radius * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};


/**
 * Get the spherical area of a geometry.  This is the area (in meters) assuming
 * that polygon edges are segments of great circles on a sphere.
 * @param {ol.geom.Geometry} geometry A geometry.
 * @param {olx.SphereMetricOptions=} opt_options Options for the area
 *     calculation.  By default, geometries are assumed to be in 'EPSG:3857'.
 *     You can change this by providing a `projection` option.
 * @return {number} The spherical area (in square meters).
 * @api
 */
_ol_Sphere_.getArea = function(geometry, opt_options) {
  var options = opt_options || {};
  var radius = options.radius || _ol_Sphere_.DEFAULT_RADIUS;
  var projection = options.projection || 'EPSG:3857';
  geometry = geometry.clone().transform(projection, 'EPSG:4326');
  var type = geometry.getType();
  var area = 0;
  var coordinates, coords, i, ii, j, jj;
  switch (type) {
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].POINT:
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].MULTI_POINT:
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].LINE_STRING:
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].MULTI_LINE_STRING:
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].LINEAR_RING: {
      break;
    }
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].POLYGON: {
      coordinates = /** @type {ol.geom.Polygon} */ (geometry).getCoordinates();
      area = Math.abs(_ol_Sphere_.getArea_(coordinates[0], radius));
      for (i = 1, ii = coordinates.length; i < ii; ++i) {
        area -= Math.abs(_ol_Sphere_.getArea_(coordinates[i], radius));
      }
      break;
    }
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].MULTI_POLYGON: {
      coordinates = /** @type {ol.geom.SimpleGeometry} */ (geometry).getCoordinates();
      for (i = 0, ii = coordinates.length; i < ii; ++i) {
        coords = coordinates[i];
        area += Math.abs(_ol_Sphere_.getArea_(coords[0], radius));
        for (j = 1, jj = coords.length; j < jj; ++j) {
          area -= Math.abs(_ol_Sphere_.getArea_(coords[j], radius));
        }
      }
      break;
    }
    case __WEBPACK_IMPORTED_MODULE_1__geom_geometrytype_js__["a" /* default */].GEOMETRY_COLLECTION: {
      var geometries = /** @type {ol.geom.GeometryCollection} */ (geometry).getGeometries();
      for (i = 0, ii = geometries.length; i < ii; ++i) {
        area += _ol_Sphere_.getArea(geometries[i], opt_options);
      }
      break;
    }
    default: {
      throw new Error('Unsupported geometry type: ' + type);
    }
  }
  return area;
};


/**
 * Returns the spherical area for a list of coordinates.
 *
 * [Reference](https://trs-new.jpl.nasa.gov/handle/2014/40409)
 * Robert. G. Chamberlain and William H. Duquette, "Some Algorithms for
 * Polygons on a Sphere", JPL Publication 07-03, Jet Propulsion
 * Laboratory, Pasadena, CA, June 2007
 *
 * @param {Array.<ol.Coordinate>} coordinates List of coordinates of a linear
 * ring. If the ring is oriented clockwise, the area will be positive,
 * otherwise it will be negative.
 * @param {number} radius The sphere radius.
 * @return {number} Area (in square meters).
 */
_ol_Sphere_.getArea_ = function(coordinates, radius) {
  var area = 0, len = coordinates.length;
  var x1 = coordinates[len - 1][0];
  var y1 = coordinates[len - 1][1];
  for (var i = 0; i < len; i++) {
    var x2 = coordinates[i][0], y2 = coordinates[i][1];
    area += __WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* default */].toRadians(x2 - x1) *
        (2 + Math.sin(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* default */].toRadians(y1)) +
        Math.sin(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* default */].toRadians(y2)));
    x1 = x2;
    y1 = y2;
  }
  return area * radius * radius / 2.0;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_Sphere_);


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * The geometry type. One of `'Point'`, `'LineString'`, `'LinearRing'`,
 * `'Polygon'`, `'MultiPoint'`, `'MultiLineString'`, `'MultiPolygon'`,
 * `'GeometryCollection'`, `'Circle'`.
 * @enum {string}
 */
var _ol_geom_GeometryType_ = {
  POINT: 'Point',
  LINE_STRING: 'LineString',
  LINEAR_RING: 'LinearRing',
  POLYGON: 'Polygon',
  MULTI_POINT: 'MultiPoint',
  MULTI_LINE_STRING: 'MultiLineString',
  MULTI_POLYGON: 'MultiPolygon',
  GEOMETRY_COLLECTION: 'GeometryCollection',
  CIRCLE: 'Circle'
};

/* harmony default export */ __webpack_exports__["a"] = (_ol_geom_GeometryType_);


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proj_projection_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__proj_units_js__ = __webpack_require__(10);




var _ol_proj_EPSG3857_ = {};


/**
 * @classdesc
 * Projection object for web/spherical Mercator (EPSG:3857).
 *
 * @constructor
 * @extends {ol.proj.Projection}
 * @param {string} code Code.
 * @private
 */
_ol_proj_EPSG3857_.Projection_ = function(code) {
  __WEBPACK_IMPORTED_MODULE_2__proj_projection_js__["a" /* default */].call(this, {
    code: code,
    units: __WEBPACK_IMPORTED_MODULE_3__proj_units_js__["a" /* default */].METERS,
    extent: _ol_proj_EPSG3857_.EXTENT,
    global: true,
    worldExtent: _ol_proj_EPSG3857_.WORLD_EXTENT,
    getPointResolution: function(resolution, point) {
      return resolution / __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* default */].cosh(point[1] / _ol_proj_EPSG3857_.RADIUS);
    }
  });
};
__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_proj_EPSG3857_.Projection_, __WEBPACK_IMPORTED_MODULE_2__proj_projection_js__["a" /* default */]);


/**
 * Radius of WGS84 sphere
 *
 * @const
 * @type {number}
 */
_ol_proj_EPSG3857_.RADIUS = 6378137;


/**
 * @const
 * @type {number}
 */
_ol_proj_EPSG3857_.HALF_SIZE = Math.PI * _ol_proj_EPSG3857_.RADIUS;


/**
 * @const
 * @type {ol.Extent}
 */
_ol_proj_EPSG3857_.EXTENT = [
  -_ol_proj_EPSG3857_.HALF_SIZE, -_ol_proj_EPSG3857_.HALF_SIZE,
  _ol_proj_EPSG3857_.HALF_SIZE, _ol_proj_EPSG3857_.HALF_SIZE
];


/**
 * @const
 * @type {ol.Extent}
 */
_ol_proj_EPSG3857_.WORLD_EXTENT = [-180, -85, 180, 85];


/**
 * Projections equal to EPSG:3857.
 *
 * @const
 * @type {Array.<ol.proj.Projection>}
 */
_ol_proj_EPSG3857_.PROJECTIONS = [
  new _ol_proj_EPSG3857_.Projection_('EPSG:3857'),
  new _ol_proj_EPSG3857_.Projection_('EPSG:102100'),
  new _ol_proj_EPSG3857_.Projection_('EPSG:102113'),
  new _ol_proj_EPSG3857_.Projection_('EPSG:900913'),
  new _ol_proj_EPSG3857_.Projection_('urn:ogc:def:crs:EPSG:6.18:3:3857'),
  new _ol_proj_EPSG3857_.Projection_('urn:ogc:def:crs:EPSG::3857'),
  new _ol_proj_EPSG3857_.Projection_('http://www.opengis.net/gml/srs/epsg.xml#3857')
];


/**
 * Transformation from EPSG:4326 to EPSG:3857.
 *
 * @param {Array.<number>} input Input array of coordinate values.
 * @param {Array.<number>=} opt_output Output array of coordinate values.
 * @param {number=} opt_dimension Dimension (default is `2`).
 * @return {Array.<number>} Output array of coordinate values.
 */
_ol_proj_EPSG3857_.fromEPSG4326 = function(input, opt_output, opt_dimension) {
  var length = input.length,
      dimension = opt_dimension > 1 ? opt_dimension : 2,
      output = opt_output;
  if (output === undefined) {
    if (dimension > 2) {
      // preserve values beyond second dimension
      output = input.slice();
    } else {
      output = new Array(length);
    }
  }
  var halfSize = _ol_proj_EPSG3857_.HALF_SIZE;
  for (var i = 0; i < length; i += dimension) {
    output[i] = halfSize * input[i] / 180;
    var y = _ol_proj_EPSG3857_.RADIUS *
        Math.log(Math.tan(Math.PI * (input[i + 1] + 90) / 360));
    if (y > halfSize) {
      y = halfSize;
    } else if (y < -halfSize) {
      y = -halfSize;
    }
    output[i + 1] = y;
  }
  return output;
};


/**
 * Transformation from EPSG:3857 to EPSG:4326.
 *
 * @param {Array.<number>} input Input array of coordinate values.
 * @param {Array.<number>=} opt_output Output array of coordinate values.
 * @param {number=} opt_dimension Dimension (default is `2`).
 * @return {Array.<number>} Output array of coordinate values.
 */
_ol_proj_EPSG3857_.toEPSG4326 = function(input, opt_output, opt_dimension) {
  var length = input.length,
      dimension = opt_dimension > 1 ? opt_dimension : 2,
      output = opt_output;
  if (output === undefined) {
    if (dimension > 2) {
      // preserve values beyond second dimension
      output = input.slice();
    } else {
      output = new Array(length);
    }
  }
  for (var i = 0; i < length; i += dimension) {
    output[i] = 180 * input[i] / _ol_proj_EPSG3857_.HALF_SIZE;
    output[i + 1] = 360 * Math.atan(
        Math.exp(input[i + 1] / _ol_proj_EPSG3857_.RADIUS)) / Math.PI - 90;
  }
  return output;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_proj_EPSG3857_);


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__proj_projection_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proj_units_js__ = __webpack_require__(10);



var _ol_proj_EPSG4326_ = {};


/**
 * @classdesc
 * Projection object for WGS84 geographic coordinates (EPSG:4326).
 *
 * Note that OpenLayers does not strictly comply with the EPSG definition.
 * The EPSG registry defines 4326 as a CRS for Latitude,Longitude (y,x).
 * OpenLayers treats EPSG:4326 as a pseudo-projection, with x,y coordinates.
 *
 * @constructor
 * @extends {ol.proj.Projection}
 * @param {string} code Code.
 * @param {string=} opt_axisOrientation Axis orientation.
 * @private
 */
_ol_proj_EPSG4326_.Projection_ = function(code, opt_axisOrientation) {
  __WEBPACK_IMPORTED_MODULE_1__proj_projection_js__["a" /* default */].call(this, {
    code: code,
    units: __WEBPACK_IMPORTED_MODULE_2__proj_units_js__["a" /* default */].DEGREES,
    extent: _ol_proj_EPSG4326_.EXTENT,
    axisOrientation: opt_axisOrientation,
    global: true,
    metersPerUnit: _ol_proj_EPSG4326_.METERS_PER_UNIT,
    worldExtent: _ol_proj_EPSG4326_.EXTENT
  });
};
__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_proj_EPSG4326_.Projection_, __WEBPACK_IMPORTED_MODULE_1__proj_projection_js__["a" /* default */]);


/**
 * Radius of WGS84 sphere
 *
 * @const
 * @type {number}
 */
_ol_proj_EPSG4326_.RADIUS = 6378137;


/**
 * Extent of the EPSG:4326 projection which is the whole world.
 *
 * @const
 * @type {ol.Extent}
 */
_ol_proj_EPSG4326_.EXTENT = [-180, -90, 180, 90];


/**
 * @const
 * @type {number}
 */
_ol_proj_EPSG4326_.METERS_PER_UNIT = Math.PI * _ol_proj_EPSG4326_.RADIUS / 180;


/**
 * Projections equal to EPSG:4326.
 *
 * @const
 * @type {Array.<ol.proj.Projection>}
 */
_ol_proj_EPSG4326_.PROJECTIONS = [
  new _ol_proj_EPSG4326_.Projection_('CRS:84'),
  new _ol_proj_EPSG4326_.Projection_('EPSG:4326', 'neu'),
  new _ol_proj_EPSG4326_.Projection_('urn:ogc:def:crs:EPSG::4326', 'neu'),
  new _ol_proj_EPSG4326_.Projection_('urn:ogc:def:crs:EPSG:6.6:4326', 'neu'),
  new _ol_proj_EPSG4326_.Projection_('urn:ogc:def:crs:OGC:1.3:CRS84'),
  new _ol_proj_EPSG4326_.Projection_('urn:ogc:def:crs:OGC:2:84'),
  new _ol_proj_EPSG4326_.Projection_('http://www.opengis.net/gml/srs/epsg.xml#4326', 'neu'),
  new _ol_proj_EPSG4326_.Projection_('urn:x-ogc:def:crs:EPSG:4326', 'neu')
];
/* harmony default export */ __webpack_exports__["a"] = (_ol_proj_EPSG4326_);


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _ol_proj_projections_ = {};


/**
 * @private
 * @type {Object.<string, ol.proj.Projection>}
 */
_ol_proj_projections_.cache_ = {};


/**
 * Clear the projections cache.
 */
_ol_proj_projections_.clear = function() {
  _ol_proj_projections_.cache_ = {};
};


/**
 * Get a cached projection by code.
 * @param {string} code The code for the projection.
 * @return {ol.proj.Projection} The projection (if cached).
 */
_ol_proj_projections_.get = function(code) {
  var projections = _ol_proj_projections_.cache_;
  return projections[code] || null;
};


/**
 * Add a projection to the cache.
 * @param {string} code The projection code.
 * @param {ol.proj.Projection} projection The projection to cache.
 */
_ol_proj_projections_.add = function(code, projection) {
  var projections = _ol_proj_projections_.cache_;
  projections[code] = projection;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_proj_projections_);


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__obj_js__ = __webpack_require__(6);

var _ol_proj_transforms_ = {};


/**
 * @private
 * @type {Object.<string, Object.<string, ol.TransformFunction>>}
 */
_ol_proj_transforms_.cache_ = {};


/**
 * Clear the transform cache.
 */
_ol_proj_transforms_.clear = function() {
  _ol_proj_transforms_.cache_ = {};
};


/**
 * Registers a conversion function to convert coordinates from the source
 * projection to the destination projection.
 *
 * @param {ol.proj.Projection} source Source.
 * @param {ol.proj.Projection} destination Destination.
 * @param {ol.TransformFunction} transformFn Transform.
 */
_ol_proj_transforms_.add = function(source, destination, transformFn) {
  var sourceCode = source.getCode();
  var destinationCode = destination.getCode();
  var transforms = _ol_proj_transforms_.cache_;
  if (!(sourceCode in transforms)) {
    transforms[sourceCode] = {};
  }
  transforms[sourceCode][destinationCode] = transformFn;
};


/**
 * Unregisters the conversion function to convert coordinates from the source
 * projection to the destination projection.  This method is used to clean up
 * cached transforms during testing.
 *
 * @param {ol.proj.Projection} source Source projection.
 * @param {ol.proj.Projection} destination Destination projection.
 * @return {ol.TransformFunction} transformFn The unregistered transform.
 */
_ol_proj_transforms_.remove = function(source, destination) {
  var sourceCode = source.getCode();
  var destinationCode = destination.getCode();
  var transforms = _ol_proj_transforms_.cache_;
  var transform = transforms[sourceCode][destinationCode];
  delete transforms[sourceCode][destinationCode];
  if (__WEBPACK_IMPORTED_MODULE_0__obj_js__["a" /* default */].isEmpty(transforms[sourceCode])) {
    delete transforms[sourceCode];
  }
  return transform;
};


/**
 * Get a transform given a source code and a destination code.
 * @param {string} sourceCode The code for the source projection.
 * @param {string} destinationCode The code for the destination projection.
 * @return {ol.TransformFunction|undefined} The transform function (if found).
 */
_ol_proj_transforms_.get = function(sourceCode, destinationCode) {
  var transform;
  var transforms = _ol_proj_transforms_.cache_;
  if (sourceCode in transforms && destinationCode in transforms[sourceCode]) {
    transform = transforms[sourceCode][destinationCode];
  }
  return transform;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_proj_transforms_);


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imagebase_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imagestate_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_eventtype_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__extent_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reproj_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reproj_triangulation_js__ = __webpack_require__(32);









/**
 * @classdesc
 * Class encapsulating single reprojected image.
 * See {@link ol.source.Image}.
 *
 * @constructor
 * @extends {ol.ImageBase}
 * @param {ol.proj.Projection} sourceProj Source projection (of the data).
 * @param {ol.proj.Projection} targetProj Target projection.
 * @param {ol.Extent} targetExtent Target extent.
 * @param {number} targetResolution Target resolution.
 * @param {number} pixelRatio Pixel ratio.
 * @param {ol.ReprojImageFunctionType} getImageFunction
 *     Function returning source images (extent, resolution, pixelRatio).
 */
var _ol_reproj_Image_ = function(sourceProj, targetProj,
    targetExtent, targetResolution, pixelRatio, getImageFunction) {

  /**
   * @private
   * @type {ol.proj.Projection}
   */
  this.targetProj_ = targetProj;

  /**
   * @private
   * @type {ol.Extent}
   */
  this.maxSourceExtent_ = sourceProj.getExtent();
  var maxTargetExtent = targetProj.getExtent();

  var limitedTargetExtent = maxTargetExtent ?
    __WEBPACK_IMPORTED_MODULE_5__extent_js__["a" /* default */].getIntersection(targetExtent, maxTargetExtent) : targetExtent;

  var targetCenter = __WEBPACK_IMPORTED_MODULE_5__extent_js__["a" /* default */].getCenter(limitedTargetExtent);
  var sourceResolution = __WEBPACK_IMPORTED_MODULE_6__reproj_js__["a" /* default */].calculateSourceResolution(
      sourceProj, targetProj, targetCenter, targetResolution);

  var errorThresholdInPixels = __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].DEFAULT_RASTER_REPROJECTION_ERROR_THRESHOLD;

  /**
   * @private
   * @type {!ol.reproj.Triangulation}
   */
  this.triangulation_ = new __WEBPACK_IMPORTED_MODULE_7__reproj_triangulation_js__["a" /* default */](
      sourceProj, targetProj, limitedTargetExtent, this.maxSourceExtent_,
      sourceResolution * errorThresholdInPixels);

  /**
   * @private
   * @type {number}
   */
  this.targetResolution_ = targetResolution;

  /**
   * @private
   * @type {ol.Extent}
   */
  this.targetExtent_ = targetExtent;

  var sourceExtent = this.triangulation_.calculateSourceExtent();

  /**
   * @private
   * @type {ol.ImageBase}
   */
  this.sourceImage_ =
      getImageFunction(sourceExtent, sourceResolution, pixelRatio);

  /**
   * @private
   * @type {number}
   */
  this.sourcePixelRatio_ =
      this.sourceImage_ ? this.sourceImage_.getPixelRatio() : 1;

  /**
   * @private
   * @type {HTMLCanvasElement}
   */
  this.canvas_ = null;

  /**
   * @private
   * @type {?ol.EventsKey}
   */
  this.sourceListenerKey_ = null;


  var state = __WEBPACK_IMPORTED_MODULE_2__imagestate_js__["a" /* default */].LOADED;

  if (this.sourceImage_) {
    state = __WEBPACK_IMPORTED_MODULE_2__imagestate_js__["a" /* default */].IDLE;
  }

  __WEBPACK_IMPORTED_MODULE_1__imagebase_js__["a" /* default */].call(this, targetExtent, targetResolution, this.sourcePixelRatio_, state);
};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_reproj_Image_, __WEBPACK_IMPORTED_MODULE_1__imagebase_js__["a" /* default */]);


/**
 * @inheritDoc
 */
_ol_reproj_Image_.prototype.disposeInternal = function() {
  if (this.state == __WEBPACK_IMPORTED_MODULE_2__imagestate_js__["a" /* default */].LOADING) {
    this.unlistenSource_();
  }
  __WEBPACK_IMPORTED_MODULE_1__imagebase_js__["a" /* default */].prototype.disposeInternal.call(this);
};


/**
 * @inheritDoc
 */
_ol_reproj_Image_.prototype.getImage = function() {
  return this.canvas_;
};


/**
 * @return {ol.proj.Projection} Projection.
 */
_ol_reproj_Image_.prototype.getProjection = function() {
  return this.targetProj_;
};


/**
 * @private
 */
_ol_reproj_Image_.prototype.reproject_ = function() {
  var sourceState = this.sourceImage_.getState();
  if (sourceState == __WEBPACK_IMPORTED_MODULE_2__imagestate_js__["a" /* default */].LOADED) {
    var width = __WEBPACK_IMPORTED_MODULE_5__extent_js__["a" /* default */].getWidth(this.targetExtent_) / this.targetResolution_;
    var height =
        __WEBPACK_IMPORTED_MODULE_5__extent_js__["a" /* default */].getHeight(this.targetExtent_) / this.targetResolution_;

    this.canvas_ = __WEBPACK_IMPORTED_MODULE_6__reproj_js__["a" /* default */].render(width, height, this.sourcePixelRatio_,
        this.sourceImage_.getResolution(), this.maxSourceExtent_,
        this.targetResolution_, this.targetExtent_, this.triangulation_, [{
          extent: this.sourceImage_.getExtent(),
          image: this.sourceImage_.getImage()
        }], 0);
  }
  this.state = sourceState;
  this.changed();
};


/**
 * @inheritDoc
 */
_ol_reproj_Image_.prototype.load = function() {
  if (this.state == __WEBPACK_IMPORTED_MODULE_2__imagestate_js__["a" /* default */].IDLE) {
    this.state = __WEBPACK_IMPORTED_MODULE_2__imagestate_js__["a" /* default */].LOADING;
    this.changed();

    var sourceState = this.sourceImage_.getState();
    if (sourceState == __WEBPACK_IMPORTED_MODULE_2__imagestate_js__["a" /* default */].LOADED ||
        sourceState == __WEBPACK_IMPORTED_MODULE_2__imagestate_js__["a" /* default */].ERROR) {
      this.reproject_();
    } else {
      this.sourceListenerKey_ = __WEBPACK_IMPORTED_MODULE_3__events_js__["a" /* default */].listen(this.sourceImage_,
          __WEBPACK_IMPORTED_MODULE_4__events_eventtype_js__["a" /* default */].CHANGE, function(e) {
            var sourceState = this.sourceImage_.getState();
            if (sourceState == __WEBPACK_IMPORTED_MODULE_2__imagestate_js__["a" /* default */].LOADED ||
                sourceState == __WEBPACK_IMPORTED_MODULE_2__imagestate_js__["a" /* default */].ERROR) {
              this.unlistenSource_();
              this.reproject_();
            }
          }, this);
      this.sourceImage_.load();
    }
  }
};


/**
 * @private
 */
_ol_reproj_Image_.prototype.unlistenSource_ = function() {
  __WEBPACK_IMPORTED_MODULE_3__events_js__["a" /* default */].unlistenByKey(/** @type {!ol.EventsKey} */ (this.sourceListenerKey_));
  this.sourceListenerKey_ = null;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_reproj_Image_);


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tilerange_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tilegrid_js__ = __webpack_require__(13);




/**
 * @classdesc
 * An attribution for a layer source.
 *
 * Example:
 *
 *     source: new ol.source.OSM({
 *       attributions: [
 *         new ol.Attribution({
 *           html: 'All maps &copy; ' +
 *               '<a href="https://www.opencyclemap.org/">OpenCycleMap</a>'
 *         }),
 *         ol.source.OSM.ATTRIBUTION
 *       ],
 *     ..
 *
 * @constructor
 * @deprecated This class is deprecated and will removed in the next major release.
 * @param {olx.AttributionOptions} options Attribution options.
 * @struct
 * @api
 */
var _ol_Attribution_ = function(options) {

  /**
   * @private
   * @type {string}
   */
  this.html_ = options.html;

  /**
   * @private
   * @type {Object.<string, Array.<ol.TileRange>>}
   */
  this.tileRanges_ = options.tileRanges ? options.tileRanges : null;

};


/**
 * Get the attribution markup.
 * @return {string} The attribution HTML.
 * @api
 */
_ol_Attribution_.prototype.getHTML = function() {
  return this.html_;
};


/**
 * @param {Object.<string, ol.TileRange>} tileRanges Tile ranges.
 * @param {!ol.tilegrid.TileGrid} tileGrid Tile grid.
 * @param {!ol.proj.Projection} projection Projection.
 * @return {boolean} Intersects any tile range.
 */
_ol_Attribution_.prototype.intersectsAnyTileRange = function(tileRanges, tileGrid, projection) {
  if (!this.tileRanges_) {
    return true;
  }
  var i, ii, tileRange, zKey;
  for (zKey in tileRanges) {
    if (!(zKey in this.tileRanges_)) {
      continue;
    }
    tileRange = tileRanges[zKey];
    var testTileRange;
    for (i = 0, ii = this.tileRanges_[zKey].length; i < ii; ++i) {
      testTileRange = this.tileRanges_[zKey][i];
      if (testTileRange.intersects(tileRange)) {
        return true;
      }
      var extentTileRange = tileGrid.getTileRangeForExtentAndZ(
          __WEBPACK_IMPORTED_MODULE_2__tilegrid_js__["a" /* default */].extentFromProjection(projection), parseInt(zKey, 10));
      var width = extentTileRange.getWidth();
      if (tileRange.minX < extentTileRange.minX ||
          tileRange.maxX > extentTileRange.maxX) {
        if (testTileRange.intersects(new __WEBPACK_IMPORTED_MODULE_0__tilerange_js__["a" /* default */](
            __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* default */].modulo(tileRange.minX, width),
            __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* default */].modulo(tileRange.maxX, width),
            tileRange.minY, tileRange.maxY))) {
          return true;
        }
        if (tileRange.getWidth() > width &&
            testTileRange.intersects(extentTileRange)) {
          return true;
        }
      }
    }
  }
  return false;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_Attribution_);


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__asserts_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tilerange_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__array_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__extent_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__math_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__size_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tilecoord_js__ = __webpack_require__(7);









/**
 * @classdesc
 * Base class for setting the grid pattern for sources accessing tiled-image
 * servers.
 *
 * @constructor
 * @param {olx.tilegrid.TileGridOptions} options Tile grid options.
 * @struct
 * @api
 */
var _ol_tilegrid_TileGrid_ = function(options) {

  /**
   * @protected
   * @type {number}
   */
  this.minZoom = options.minZoom !== undefined ? options.minZoom : 0;

  /**
   * @private
   * @type {!Array.<number>}
   */
  this.resolutions_ = options.resolutions;
  __WEBPACK_IMPORTED_MODULE_1__asserts_js__["a" /* default */].assert(__WEBPACK_IMPORTED_MODULE_3__array_js__["a" /* default */].isSorted(this.resolutions_, function(a, b) {
    return b - a;
  }, true), 17); // `resolutions` must be sorted in descending order


  // check if we've got a consistent zoom factor and origin
  var zoomFactor;
  if (!options.origins) {
    for (var i = 0, ii = this.resolutions_.length - 1; i < ii; ++i) {
      if (!zoomFactor) {
        zoomFactor = this.resolutions_[i] / this.resolutions_[i + 1];
      } else {
        if (this.resolutions_[i] / this.resolutions_[i + 1] !== zoomFactor) {
          zoomFactor = undefined;
          break;
        }
      }
    }
  }


  /**
   * @private
   * @type {number|undefined}
   */
  this.zoomFactor_ = zoomFactor;


  /**
   * @protected
   * @type {number}
   */
  this.maxZoom = this.resolutions_.length - 1;

  /**
   * @private
   * @type {ol.Coordinate}
   */
  this.origin_ = options.origin !== undefined ? options.origin : null;

  /**
   * @private
   * @type {Array.<ol.Coordinate>}
   */
  this.origins_ = null;
  if (options.origins !== undefined) {
    this.origins_ = options.origins;
    __WEBPACK_IMPORTED_MODULE_1__asserts_js__["a" /* default */].assert(this.origins_.length == this.resolutions_.length,
        20); // Number of `origins` and `resolutions` must be equal
  }

  var extent = options.extent;

  if (extent !== undefined &&
      !this.origin_ && !this.origins_) {
    this.origin_ = __WEBPACK_IMPORTED_MODULE_4__extent_js__["a" /* default */].getTopLeft(extent);
  }

  __WEBPACK_IMPORTED_MODULE_1__asserts_js__["a" /* default */].assert(
      (!this.origin_ && this.origins_) || (this.origin_ && !this.origins_),
      18); // Either `origin` or `origins` must be configured, never both

  /**
   * @private
   * @type {Array.<number|ol.Size>}
   */
  this.tileSizes_ = null;
  if (options.tileSizes !== undefined) {
    this.tileSizes_ = options.tileSizes;
    __WEBPACK_IMPORTED_MODULE_1__asserts_js__["a" /* default */].assert(this.tileSizes_.length == this.resolutions_.length,
        19); // Number of `tileSizes` and `resolutions` must be equal
  }

  /**
   * @private
   * @type {number|ol.Size}
   */
  this.tileSize_ = options.tileSize !== undefined ?
    options.tileSize :
    !this.tileSizes_ ? __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].DEFAULT_TILE_SIZE : null;
  __WEBPACK_IMPORTED_MODULE_1__asserts_js__["a" /* default */].assert(
      (!this.tileSize_ && this.tileSizes_) ||
      (this.tileSize_ && !this.tileSizes_),
      22); // Either `tileSize` or `tileSizes` must be configured, never both

  /**
   * @private
   * @type {ol.Extent}
   */
  this.extent_ = extent !== undefined ? extent : null;


  /**
   * @private
   * @type {Array.<ol.TileRange>}
   */
  this.fullTileRanges_ = null;

  /**
   * @private
   * @type {ol.Size}
   */
  this.tmpSize_ = [0, 0];

  if (options.sizes !== undefined) {
    this.fullTileRanges_ = options.sizes.map(function(size, z) {
      var tileRange = new __WEBPACK_IMPORTED_MODULE_2__tilerange_js__["a" /* default */](
          Math.min(0, size[0]), Math.max(size[0] - 1, -1),
          Math.min(0, size[1]), Math.max(size[1] - 1, -1));
      return tileRange;
    }, this);
  } else if (extent) {
    this.calculateTileRanges_(extent);
  }

};


/**
 * @private
 * @type {ol.TileCoord}
 */
_ol_tilegrid_TileGrid_.tmpTileCoord_ = [0, 0, 0];


/**
 * Call a function with each tile coordinate for a given extent and zoom level.
 *
 * @param {ol.Extent} extent Extent.
 * @param {number} zoom Integer zoom level.
 * @param {function(ol.TileCoord)} callback Function called with each tile coordinate.
 * @api
 */
_ol_tilegrid_TileGrid_.prototype.forEachTileCoord = function(extent, zoom, callback) {
  var tileRange = this.getTileRangeForExtentAndZ(extent, zoom);
  for (var i = tileRange.minX, ii = tileRange.maxX; i <= ii; ++i) {
    for (var j = tileRange.minY, jj = tileRange.maxY; j <= jj; ++j) {
      callback([zoom, i, j]);
    }
  }
};


/**
 * @param {ol.TileCoord} tileCoord Tile coordinate.
 * @param {function(this: T, number, ol.TileRange): boolean} callback Callback.
 * @param {T=} opt_this The object to use as `this` in `callback`.
 * @param {ol.TileRange=} opt_tileRange Temporary ol.TileRange object.
 * @param {ol.Extent=} opt_extent Temporary ol.Extent object.
 * @return {boolean} Callback succeeded.
 * @template T
 */
_ol_tilegrid_TileGrid_.prototype.forEachTileCoordParentTileRange = function(tileCoord, callback, opt_this, opt_tileRange, opt_extent) {
  var tileRange, x, y;
  var tileCoordExtent = null;
  var z = tileCoord[0] - 1;
  if (this.zoomFactor_ === 2) {
    x = tileCoord[1];
    y = tileCoord[2];
  } else {
    tileCoordExtent = this.getTileCoordExtent(tileCoord, opt_extent);
  }
  while (z >= this.minZoom) {
    if (this.zoomFactor_ === 2) {
      x = Math.floor(x / 2);
      y = Math.floor(y / 2);
      tileRange = __WEBPACK_IMPORTED_MODULE_2__tilerange_js__["a" /* default */].createOrUpdate(x, x, y, y, opt_tileRange);
    } else {
      tileRange = this.getTileRangeForExtentAndZ(tileCoordExtent, z, opt_tileRange);
    }
    if (callback.call(opt_this, z, tileRange)) {
      return true;
    }
    --z;
  }
  return false;
};


/**
 * Get the extent for this tile grid, if it was configured.
 * @return {ol.Extent} Extent.
 */
_ol_tilegrid_TileGrid_.prototype.getExtent = function() {
  return this.extent_;
};


/**
 * Get the maximum zoom level for the grid.
 * @return {number} Max zoom.
 * @api
 */
_ol_tilegrid_TileGrid_.prototype.getMaxZoom = function() {
  return this.maxZoom;
};


/**
 * Get the minimum zoom level for the grid.
 * @return {number} Min zoom.
 * @api
 */
_ol_tilegrid_TileGrid_.prototype.getMinZoom = function() {
  return this.minZoom;
};


/**
 * Get the origin for the grid at the given zoom level.
 * @param {number} z Integer zoom level.
 * @return {ol.Coordinate} Origin.
 * @api
 */
_ol_tilegrid_TileGrid_.prototype.getOrigin = function(z) {
  if (this.origin_) {
    return this.origin_;
  } else {
    return this.origins_[z];
  }
};


/**
 * Get the resolution for the given zoom level.
 * @param {number} z Integer zoom level.
 * @return {number} Resolution.
 * @api
 */
_ol_tilegrid_TileGrid_.prototype.getResolution = function(z) {
  return this.resolutions_[z];
};


/**
 * Get the list of resolutions for the tile grid.
 * @return {Array.<number>} Resolutions.
 * @api
 */
_ol_tilegrid_TileGrid_.prototype.getResolutions = function() {
  return this.resolutions_;
};


/**
 * @param {ol.TileCoord} tileCoord Tile coordinate.
 * @param {ol.TileRange=} opt_tileRange Temporary ol.TileRange object.
 * @param {ol.Extent=} opt_extent Temporary ol.Extent object.
 * @return {ol.TileRange} Tile range.
 */
_ol_tilegrid_TileGrid_.prototype.getTileCoordChildTileRange = function(tileCoord, opt_tileRange, opt_extent) {
  if (tileCoord[0] < this.maxZoom) {
    if (this.zoomFactor_ === 2) {
      var minX = tileCoord[1] * 2;
      var minY = tileCoord[2] * 2;
      return __WEBPACK_IMPORTED_MODULE_2__tilerange_js__["a" /* default */].createOrUpdate(minX, minX + 1, minY, minY + 1, opt_tileRange);
    }
    var tileCoordExtent = this.getTileCoordExtent(tileCoord, opt_extent);
    return this.getTileRangeForExtentAndZ(
        tileCoordExtent, tileCoord[0] + 1, opt_tileRange);
  }
  return null;
};


/**
 * Get the extent for a tile range.
 * @param {number} z Integer zoom level.
 * @param {ol.TileRange} tileRange Tile range.
 * @param {ol.Extent=} opt_extent Temporary ol.Extent object.
 * @return {ol.Extent} Extent.
 */
_ol_tilegrid_TileGrid_.prototype.getTileRangeExtent = function(z, tileRange, opt_extent) {
  var origin = this.getOrigin(z);
  var resolution = this.getResolution(z);
  var tileSize = __WEBPACK_IMPORTED_MODULE_6__size_js__["a" /* default */].toSize(this.getTileSize(z), this.tmpSize_);
  var minX = origin[0] + tileRange.minX * tileSize[0] * resolution;
  var maxX = origin[0] + (tileRange.maxX + 1) * tileSize[0] * resolution;
  var minY = origin[1] + tileRange.minY * tileSize[1] * resolution;
  var maxY = origin[1] + (tileRange.maxY + 1) * tileSize[1] * resolution;
  return __WEBPACK_IMPORTED_MODULE_4__extent_js__["a" /* default */].createOrUpdate(minX, minY, maxX, maxY, opt_extent);
};


/**
 * Get a tile range for the given extent and integer zoom level.
 * @param {ol.Extent} extent Extent.
 * @param {number} z Integer zoom level.
 * @param {ol.TileRange=} opt_tileRange Temporary tile range object.
 * @return {ol.TileRange} Tile range.
 */
_ol_tilegrid_TileGrid_.prototype.getTileRangeForExtentAndZ = function(extent, z, opt_tileRange) {
  var tileCoord = _ol_tilegrid_TileGrid_.tmpTileCoord_;
  this.getTileCoordForXYAndZ_(extent[0], extent[1], z, false, tileCoord);
  var minX = tileCoord[1];
  var minY = tileCoord[2];
  this.getTileCoordForXYAndZ_(extent[2], extent[3], z, true, tileCoord);
  return __WEBPACK_IMPORTED_MODULE_2__tilerange_js__["a" /* default */].createOrUpdate(
      minX, tileCoord[1], minY, tileCoord[2], opt_tileRange);
};


/**
 * @param {ol.TileCoord} tileCoord Tile coordinate.
 * @return {ol.Coordinate} Tile center.
 */
_ol_tilegrid_TileGrid_.prototype.getTileCoordCenter = function(tileCoord) {
  var origin = this.getOrigin(tileCoord[0]);
  var resolution = this.getResolution(tileCoord[0]);
  var tileSize = __WEBPACK_IMPORTED_MODULE_6__size_js__["a" /* default */].toSize(this.getTileSize(tileCoord[0]), this.tmpSize_);
  return [
    origin[0] + (tileCoord[1] + 0.5) * tileSize[0] * resolution,
    origin[1] + (tileCoord[2] + 0.5) * tileSize[1] * resolution
  ];
};


/**
 * Get the extent of a tile coordinate.
 *
 * @param {ol.TileCoord} tileCoord Tile coordinate.
 * @param {ol.Extent=} opt_extent Temporary extent object.
 * @return {ol.Extent} Extent.
 * @api
 */
_ol_tilegrid_TileGrid_.prototype.getTileCoordExtent = function(tileCoord, opt_extent) {
  var origin = this.getOrigin(tileCoord[0]);
  var resolution = this.getResolution(tileCoord[0]);
  var tileSize = __WEBPACK_IMPORTED_MODULE_6__size_js__["a" /* default */].toSize(this.getTileSize(tileCoord[0]), this.tmpSize_);
  var minX = origin[0] + tileCoord[1] * tileSize[0] * resolution;
  var minY = origin[1] + tileCoord[2] * tileSize[1] * resolution;
  var maxX = minX + tileSize[0] * resolution;
  var maxY = minY + tileSize[1] * resolution;
  return __WEBPACK_IMPORTED_MODULE_4__extent_js__["a" /* default */].createOrUpdate(minX, minY, maxX, maxY, opt_extent);
};


/**
 * Get the tile coordinate for the given map coordinate and resolution.  This
 * method considers that coordinates that intersect tile boundaries should be
 * assigned the higher tile coordinate.
 *
 * @param {ol.Coordinate} coordinate Coordinate.
 * @param {number} resolution Resolution.
 * @param {ol.TileCoord=} opt_tileCoord Destination ol.TileCoord object.
 * @return {ol.TileCoord} Tile coordinate.
 * @api
 */
_ol_tilegrid_TileGrid_.prototype.getTileCoordForCoordAndResolution = function(coordinate, resolution, opt_tileCoord) {
  return this.getTileCoordForXYAndResolution_(
      coordinate[0], coordinate[1], resolution, false, opt_tileCoord);
};


/**
 * Note that this method should not be called for resolutions that correspond
 * to an integer zoom level.  Instead call the `getTileCoordForXYAndZ_` method.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {number} resolution Resolution (for a non-integer zoom level).
 * @param {boolean} reverseIntersectionPolicy Instead of letting edge
 *     intersections go to the higher tile coordinate, let edge intersections
 *     go to the lower tile coordinate.
 * @param {ol.TileCoord=} opt_tileCoord Temporary ol.TileCoord object.
 * @return {ol.TileCoord} Tile coordinate.
 * @private
 */
_ol_tilegrid_TileGrid_.prototype.getTileCoordForXYAndResolution_ = function(
    x, y, resolution, reverseIntersectionPolicy, opt_tileCoord) {
  var z = this.getZForResolution(resolution);
  var scale = resolution / this.getResolution(z);
  var origin = this.getOrigin(z);
  var tileSize = __WEBPACK_IMPORTED_MODULE_6__size_js__["a" /* default */].toSize(this.getTileSize(z), this.tmpSize_);

  var adjustX = reverseIntersectionPolicy ? 0.5 : 0;
  var adjustY = reverseIntersectionPolicy ? 0 : 0.5;
  var xFromOrigin = Math.floor((x - origin[0]) / resolution + adjustX);
  var yFromOrigin = Math.floor((y - origin[1]) / resolution + adjustY);
  var tileCoordX = scale * xFromOrigin / tileSize[0];
  var tileCoordY = scale * yFromOrigin / tileSize[1];

  if (reverseIntersectionPolicy) {
    tileCoordX = Math.ceil(tileCoordX) - 1;
    tileCoordY = Math.ceil(tileCoordY) - 1;
  } else {
    tileCoordX = Math.floor(tileCoordX);
    tileCoordY = Math.floor(tileCoordY);
  }

  return __WEBPACK_IMPORTED_MODULE_7__tilecoord_js__["a" /* default */].createOrUpdate(z, tileCoordX, tileCoordY, opt_tileCoord);
};


/**
 * Although there is repetition between this method and `getTileCoordForXYAndResolution_`,
 * they should have separate implementations.  This method is for integer zoom
 * levels.  The other method should only be called for resolutions corresponding
 * to non-integer zoom levels.
 * @param {number} x Map x coordinate.
 * @param {number} y Map y coordinate.
 * @param {number} z Integer zoom level.
 * @param {boolean} reverseIntersectionPolicy Instead of letting edge
 *     intersections go to the higher tile coordinate, let edge intersections
 *     go to the lower tile coordinate.
 * @param {ol.TileCoord=} opt_tileCoord Temporary ol.TileCoord object.
 * @return {ol.TileCoord} Tile coordinate.
 * @private
 */
_ol_tilegrid_TileGrid_.prototype.getTileCoordForXYAndZ_ = function(x, y, z, reverseIntersectionPolicy, opt_tileCoord) {
  var origin = this.getOrigin(z);
  var resolution = this.getResolution(z);
  var tileSize = __WEBPACK_IMPORTED_MODULE_6__size_js__["a" /* default */].toSize(this.getTileSize(z), this.tmpSize_);

  var adjustX = reverseIntersectionPolicy ? 0.5 : 0;
  var adjustY = reverseIntersectionPolicy ? 0 : 0.5;
  var xFromOrigin = Math.floor((x - origin[0]) / resolution + adjustX);
  var yFromOrigin = Math.floor((y - origin[1]) / resolution + adjustY);
  var tileCoordX = xFromOrigin / tileSize[0];
  var tileCoordY = yFromOrigin / tileSize[1];

  if (reverseIntersectionPolicy) {
    tileCoordX = Math.ceil(tileCoordX) - 1;
    tileCoordY = Math.ceil(tileCoordY) - 1;
  } else {
    tileCoordX = Math.floor(tileCoordX);
    tileCoordY = Math.floor(tileCoordY);
  }

  return __WEBPACK_IMPORTED_MODULE_7__tilecoord_js__["a" /* default */].createOrUpdate(z, tileCoordX, tileCoordY, opt_tileCoord);
};


/**
 * Get a tile coordinate given a map coordinate and zoom level.
 * @param {ol.Coordinate} coordinate Coordinate.
 * @param {number} z Zoom level.
 * @param {ol.TileCoord=} opt_tileCoord Destination ol.TileCoord object.
 * @return {ol.TileCoord} Tile coordinate.
 * @api
 */
_ol_tilegrid_TileGrid_.prototype.getTileCoordForCoordAndZ = function(coordinate, z, opt_tileCoord) {
  return this.getTileCoordForXYAndZ_(
      coordinate[0], coordinate[1], z, false, opt_tileCoord);
};


/**
 * @param {ol.TileCoord} tileCoord Tile coordinate.
 * @return {number} Tile resolution.
 */
_ol_tilegrid_TileGrid_.prototype.getTileCoordResolution = function(tileCoord) {
  return this.resolutions_[tileCoord[0]];
};


/**
 * Get the tile size for a zoom level. The type of the return value matches the
 * `tileSize` or `tileSizes` that the tile grid was configured with. To always
 * get an `ol.Size`, run the result through `ol.size.toSize()`.
 * @param {number} z Z.
 * @return {number|ol.Size} Tile size.
 * @api
 */
_ol_tilegrid_TileGrid_.prototype.getTileSize = function(z) {
  if (this.tileSize_) {
    return this.tileSize_;
  } else {
    return this.tileSizes_[z];
  }
};


/**
 * @param {number} z Zoom level.
 * @return {ol.TileRange} Extent tile range for the specified zoom level.
 */
_ol_tilegrid_TileGrid_.prototype.getFullTileRange = function(z) {
  if (!this.fullTileRanges_) {
    return null;
  } else {
    return this.fullTileRanges_[z];
  }
};


/**
 * @param {number} resolution Resolution.
 * @param {number=} opt_direction If 0, the nearest resolution will be used.
 *     If 1, the nearest lower resolution will be used. If -1, the nearest
 *     higher resolution will be used. Default is 0.
 * @return {number} Z.
 * @api
 */
_ol_tilegrid_TileGrid_.prototype.getZForResolution = function(
    resolution, opt_direction) {
  var z = __WEBPACK_IMPORTED_MODULE_3__array_js__["a" /* default */].linearFindNearest(this.resolutions_, resolution,
      opt_direction || 0);
  return __WEBPACK_IMPORTED_MODULE_5__math_js__["a" /* default */].clamp(z, this.minZoom, this.maxZoom);
};


/**
 * @param {!ol.Extent} extent Extent for this tile grid.
 * @private
 */
_ol_tilegrid_TileGrid_.prototype.calculateTileRanges_ = function(extent) {
  var length = this.resolutions_.length;
  var fullTileRanges = new Array(length);
  for (var z = this.minZoom; z < length; ++z) {
    fullTileRanges[z] = this.getTileRangeForExtentAndZ(extent, z);
  }
  this.fullTileRanges_ = fullTileRanges;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_tilegrid_TileGrid_);


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tile_1 = __webpack_require__(66);
var stamen_1 = __webpack_require__(68);
var TestLayer = /** @class */ (function () {
    function TestLayer(options) {
        this._map = null;
        console.debug('TestLayer.constructor');
        this.options = {};
        for (var i in options) {
            this.options[i] = options[i];
        }
    }
    TestLayer.prototype.getMapLayer = function () {
        console.debug('TestLayer.getMapLayer');
        this._layer = this._layer || new tile_1.default({
            source: new stamen_1.default({
                layer: 'toner'
            })
        });
        console.debug('TestLayer.getMapLayer return');
        return this._layer;
    };
    TestLayer.prototype.addToMap = function (map) {
        console.debug('VelocityLayer.addToMap');
        map.addLayer(this.getMapLayer());
        this._map = map;
        console.debug('TestLayer.addToMap return');
    };
    return TestLayer;
}());
exports.default = TestLayer;


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layertype_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layer_layer_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layer_tileproperty_js__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__obj_js__ = __webpack_require__(6);






/**
 * @classdesc
 * For layer sources that provide pre-rendered, tiled images in grids that are
 * organized by zoom levels for specific resolutions.
 * Note that any property set in the options is set as a {@link ol.Object}
 * property on the layer object; for example, setting `title: 'My Title'` in the
 * options means that `title` is observable, and has get/set accessors.
 *
 * @constructor
 * @extends {ol.layer.Layer}
 * @fires ol.render.Event
 * @param {olx.layer.TileOptions=} opt_options Tile layer options.
 * @api
 */
var _ol_layer_Tile_ = function(opt_options) {
  var options = opt_options ? opt_options : {};

  var baseOptions = __WEBPACK_IMPORTED_MODULE_4__obj_js__["a" /* default */].assign({}, options);

  delete baseOptions.preload;
  delete baseOptions.useInterimTilesOnError;
  __WEBPACK_IMPORTED_MODULE_2__layer_layer_js__["a" /* default */].call(this,  /** @type {olx.layer.LayerOptions} */ (baseOptions));

  this.setPreload(options.preload !== undefined ? options.preload : 0);
  this.setUseInterimTilesOnError(options.useInterimTilesOnError !== undefined ?
    options.useInterimTilesOnError : true);

  /**
   * The layer type.
   * @protected
   * @type {ol.LayerType}
   */
  this.type = __WEBPACK_IMPORTED_MODULE_1__layertype_js__["a" /* default */].TILE;

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_layer_Tile_, __WEBPACK_IMPORTED_MODULE_2__layer_layer_js__["a" /* default */]);


/**
 * Return the level as number to which we will preload tiles up to.
 * @return {number} The level to preload tiles up to.
 * @observable
 * @api
 */
_ol_layer_Tile_.prototype.getPreload = function() {
  return (
  /** @type {number} */ this.get(__WEBPACK_IMPORTED_MODULE_3__layer_tileproperty_js__["a" /* default */].PRELOAD)
  );
};


/**
 * Return the associated {@link ol.source.Tile tilesource} of the layer.
 * @function
 * @return {ol.source.Tile} Source.
 * @api
 */
_ol_layer_Tile_.prototype.getSource;


/**
 * Set the level as number to which we will preload tiles up to.
 * @param {number} preload The level to preload tiles up to.
 * @observable
 * @api
 */
_ol_layer_Tile_.prototype.setPreload = function(preload) {
  this.set(__WEBPACK_IMPORTED_MODULE_3__layer_tileproperty_js__["a" /* default */].PRELOAD, preload);
};


/**
 * Whether we use interim tiles on error.
 * @return {boolean} Use interim tiles on error.
 * @observable
 * @api
 */
_ol_layer_Tile_.prototype.getUseInterimTilesOnError = function() {
  return (
  /** @type {boolean} */ this.get(__WEBPACK_IMPORTED_MODULE_3__layer_tileproperty_js__["a" /* default */].USE_INTERIM_TILES_ON_ERROR)
  );
};


/**
 * Set whether we use interim tiles on error.
 * @param {boolean} useInterimTilesOnError Use interim tiles on error.
 * @observable
 * @api
 */
_ol_layer_Tile_.prototype.setUseInterimTilesOnError = function(useInterimTilesOnError) {
  this.set(
      __WEBPACK_IMPORTED_MODULE_3__layer_tileproperty_js__["a" /* default */].USE_INTERIM_TILES_ON_ERROR, useInterimTilesOnError);
};
/* harmony default export */ __webpack_exports__["default"] = (_ol_layer_Tile_);


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @enum {string}
 */
var _ol_layer_TileProperty_ = {
  PRELOAD: 'preload',
  USE_INTERIM_TILES_ON_ERROR: 'useInterimTilesOnError'
};

/* harmony default export */ __webpack_exports__["a"] = (_ol_layer_TileProperty_);


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__source_osm_js__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__source_xyz_js__ = __webpack_require__(35);




/**
 * @classdesc
 * Layer source for the Stamen tile server.
 *
 * @constructor
 * @extends {ol.source.XYZ}
 * @param {olx.source.StamenOptions} options Stamen options.
 * @api
 */
var _ol_source_Stamen_ = function(options) {
  var i = options.layer.indexOf('-');
  var provider = i == -1 ? options.layer : options.layer.slice(0, i);
  var providerConfig = _ol_source_Stamen_.ProviderConfig[provider];

  var layerConfig = _ol_source_Stamen_.LayerConfig[options.layer];

  var url = options.url !== undefined ? options.url :
    'https://stamen-tiles-{a-d}.a.ssl.fastly.net/' + options.layer +
      '/{z}/{x}/{y}.' + layerConfig.extension;

  __WEBPACK_IMPORTED_MODULE_2__source_xyz_js__["a" /* default */].call(this, {
    attributions: _ol_source_Stamen_.ATTRIBUTIONS,
    cacheSize: options.cacheSize,
    crossOrigin: 'anonymous',
    maxZoom: options.maxZoom != undefined ? options.maxZoom : providerConfig.maxZoom,
    minZoom: options.minZoom != undefined ? options.minZoom : providerConfig.minZoom,
    opaque: layerConfig.opaque,
    reprojectionErrorThreshold: options.reprojectionErrorThreshold,
    tileLoadFunction: options.tileLoadFunction,
    url: url,
    wrapX: options.wrapX
  });
};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_source_Stamen_, __WEBPACK_IMPORTED_MODULE_2__source_xyz_js__["a" /* default */]);


/**
 * @const
 * @type {Array.<string>}
 */
_ol_source_Stamen_.ATTRIBUTIONS = [
  'Map tiles by <a href="https://stamen.com/">Stamen Design</a>, ' +
        'under <a href="https://creativecommons.org/licenses/by/3.0/">CC BY' +
        ' 3.0</a>.',
  __WEBPACK_IMPORTED_MODULE_1__source_osm_js__["a" /* default */].ATTRIBUTION
];

/**
 * @type {Object.<string, {extension: string, opaque: boolean}>}
 */
_ol_source_Stamen_.LayerConfig = {
  'terrain': {
    extension: 'jpg',
    opaque: true
  },
  'terrain-background': {
    extension: 'jpg',
    opaque: true
  },
  'terrain-labels': {
    extension: 'png',
    opaque: false
  },
  'terrain-lines': {
    extension: 'png',
    opaque: false
  },
  'toner-background': {
    extension: 'png',
    opaque: true
  },
  'toner': {
    extension: 'png',
    opaque: true
  },
  'toner-hybrid': {
    extension: 'png',
    opaque: false
  },
  'toner-labels': {
    extension: 'png',
    opaque: false
  },
  'toner-lines': {
    extension: 'png',
    opaque: false
  },
  'toner-lite': {
    extension: 'png',
    opaque: true
  },
  'watercolor': {
    extension: 'jpg',
    opaque: true
  }
};

/**
 * @type {Object.<string, {minZoom: number, maxZoom: number}>}
 */
_ol_source_Stamen_.ProviderConfig = {
  'terrain': {
    minZoom: 4,
    maxZoom: 18
  },
  'toner': {
    minZoom: 0,
    maxZoom: 20
  },
  'watercolor': {
    minZoom: 1,
    maxZoom: 16
  }
};
/* harmony default export */ __webpack_exports__["default"] = (_ol_source_Stamen_);


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__source_xyz_js__ = __webpack_require__(35);



/**
 * @classdesc
 * Layer source for the OpenStreetMap tile server.
 *
 * @constructor
 * @extends {ol.source.XYZ}
 * @param {olx.source.OSMOptions=} opt_options Open Street Map options.
 * @api
 */
var _ol_source_OSM_ = function(opt_options) {

  var options = opt_options || {};

  var attributions;
  if (options.attributions !== undefined) {
    attributions = options.attributions;
  } else {
    attributions = [_ol_source_OSM_.ATTRIBUTION];
  }

  var crossOrigin = options.crossOrigin !== undefined ?
    options.crossOrigin : 'anonymous';

  var url = options.url !== undefined ?
    options.url : 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png';

  __WEBPACK_IMPORTED_MODULE_1__source_xyz_js__["a" /* default */].call(this, {
    attributions: attributions,
    cacheSize: options.cacheSize,
    crossOrigin: crossOrigin,
    opaque: options.opaque !== undefined ? options.opaque : true,
    maxZoom: options.maxZoom !== undefined ? options.maxZoom : 19,
    reprojectionErrorThreshold: options.reprojectionErrorThreshold,
    tileLoadFunction: options.tileLoadFunction,
    url: url,
    wrapX: options.wrapX
  });

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_source_OSM_, __WEBPACK_IMPORTED_MODULE_1__source_xyz_js__["a" /* default */]);


/**
 * The attribution containing a link to the OpenStreetMap Copyright and License
 * page.
 * @const
 * @type {string}
 * @api
 */
_ol_source_OSM_.ATTRIBUTION = '&copy; ' +
      '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> ' +
      'contributors.';
/* harmony default export */ __webpack_exports__["a"] = (_ol_source_OSM_);


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imagetile_js__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tilecache_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tilestate_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__events_eventtype_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__proj_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reproj_tile_js__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__source_urltile_js__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tilecoord_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tilegrid_js__ = __webpack_require__(13);












/**
 * @classdesc
 * Base class for sources providing images divided into a tile grid.
 *
 * @constructor
 * @fires ol.source.Tile.Event
 * @extends {ol.source.UrlTile}
 * @param {olx.source.TileImageOptions} options Image tile options.
 * @api
 */
var _ol_source_TileImage_ = function(options) {

  __WEBPACK_IMPORTED_MODULE_8__source_urltile_js__["a" /* default */].call(this, {
    attributions: options.attributions,
    cacheSize: options.cacheSize,
    extent: options.extent,
    logo: options.logo,
    opaque: options.opaque,
    projection: options.projection,
    state: options.state,
    tileGrid: options.tileGrid,
    tileLoadFunction: options.tileLoadFunction ?
      options.tileLoadFunction : _ol_source_TileImage_.defaultTileLoadFunction,
    tilePixelRatio: options.tilePixelRatio,
    tileUrlFunction: options.tileUrlFunction,
    url: options.url,
    urls: options.urls,
    wrapX: options.wrapX,
    transition: options.transition
  });

  /**
   * @protected
   * @type {?string}
   */
  this.crossOrigin =
      options.crossOrigin !== undefined ? options.crossOrigin : null;

  /**
   * @protected
   * @type {function(new: ol.ImageTile, ol.TileCoord, ol.TileState, string,
   *        ?string, ol.TileLoadFunctionType, olx.TileOptions=)}
   */
  this.tileClass = options.tileClass !== undefined ?
    options.tileClass : __WEBPACK_IMPORTED_MODULE_1__imagetile_js__["a" /* default */];

  /**
   * @protected
   * @type {Object.<string, ol.TileCache>}
   */
  this.tileCacheForProjection = {};

  /**
   * @protected
   * @type {Object.<string, ol.tilegrid.TileGrid>}
   */
  this.tileGridForProjection = {};

  /**
   * @private
   * @type {number|undefined}
   */
  this.reprojectionErrorThreshold_ = options.reprojectionErrorThreshold;

  /**
   * @private
   * @type {boolean}
   */
  this.renderReprojectionEdges_ = false;
};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_source_TileImage_, __WEBPACK_IMPORTED_MODULE_8__source_urltile_js__["a" /* default */]);


/**
 * @inheritDoc
 */
_ol_source_TileImage_.prototype.canExpireCache = function() {
  if (!__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].ENABLE_RASTER_REPROJECTION) {
    return __WEBPACK_IMPORTED_MODULE_8__source_urltile_js__["a" /* default */].prototype.canExpireCache.call(this);
  }
  if (this.tileCache.canExpireCache()) {
    return true;
  } else {
    for (var key in this.tileCacheForProjection) {
      if (this.tileCacheForProjection[key].canExpireCache()) {
        return true;
      }
    }
  }
  return false;
};


/**
 * @inheritDoc
 */
_ol_source_TileImage_.prototype.expireCache = function(projection, usedTiles) {
  if (!__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].ENABLE_RASTER_REPROJECTION) {
    __WEBPACK_IMPORTED_MODULE_8__source_urltile_js__["a" /* default */].prototype.expireCache.call(this, projection, usedTiles);
    return;
  }
  var usedTileCache = this.getTileCacheForProjection(projection);

  this.tileCache.expireCache(this.tileCache == usedTileCache ? usedTiles : {});
  for (var id in this.tileCacheForProjection) {
    var tileCache = this.tileCacheForProjection[id];
    tileCache.expireCache(tileCache == usedTileCache ? usedTiles : {});
  }
};


/**
 * @inheritDoc
 */
_ol_source_TileImage_.prototype.getGutter = function(projection) {
  if (__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].ENABLE_RASTER_REPROJECTION &&
      this.getProjection() && projection &&
      !__WEBPACK_IMPORTED_MODULE_6__proj_js__["default"].equivalent(this.getProjection(), projection)) {
    return 0;
  } else {
    return this.getGutterInternal();
  }
};


/**
 * @protected
 * @return {number} Gutter.
 */
_ol_source_TileImage_.prototype.getGutterInternal = function() {
  return 0;
};


/**
 * @inheritDoc
 */
_ol_source_TileImage_.prototype.getOpaque = function(projection) {
  if (__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].ENABLE_RASTER_REPROJECTION &&
      this.getProjection() && projection &&
      !__WEBPACK_IMPORTED_MODULE_6__proj_js__["default"].equivalent(this.getProjection(), projection)) {
    return false;
  } else {
    return __WEBPACK_IMPORTED_MODULE_8__source_urltile_js__["a" /* default */].prototype.getOpaque.call(this, projection);
  }
};


/**
 * @inheritDoc
 */
_ol_source_TileImage_.prototype.getTileGridForProjection = function(projection) {
  if (!__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].ENABLE_RASTER_REPROJECTION) {
    return __WEBPACK_IMPORTED_MODULE_8__source_urltile_js__["a" /* default */].prototype.getTileGridForProjection.call(this, projection);
  }
  var thisProj = this.getProjection();
  if (this.tileGrid &&
      (!thisProj || __WEBPACK_IMPORTED_MODULE_6__proj_js__["default"].equivalent(thisProj, projection))) {
    return this.tileGrid;
  } else {
    var projKey = __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].getUid(projection).toString();
    if (!(projKey in this.tileGridForProjection)) {
      this.tileGridForProjection[projKey] =
          __WEBPACK_IMPORTED_MODULE_10__tilegrid_js__["a" /* default */].getForProjection(projection);
    }
    return /** @type {!ol.tilegrid.TileGrid} */ (this.tileGridForProjection[projKey]);
  }
};


/**
 * @inheritDoc
 */
_ol_source_TileImage_.prototype.getTileCacheForProjection = function(projection) {
  if (!__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].ENABLE_RASTER_REPROJECTION) {
    return __WEBPACK_IMPORTED_MODULE_8__source_urltile_js__["a" /* default */].prototype.getTileCacheForProjection.call(this, projection);
  }
  var thisProj = this.getProjection();
  if (!thisProj || __WEBPACK_IMPORTED_MODULE_6__proj_js__["default"].equivalent(thisProj, projection)) {
    return this.tileCache;
  } else {
    var projKey = __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].getUid(projection).toString();
    if (!(projKey in this.tileCacheForProjection)) {
      this.tileCacheForProjection[projKey] = new __WEBPACK_IMPORTED_MODULE_2__tilecache_js__["a" /* default */](this.tileCache.highWaterMark);
    }
    return this.tileCacheForProjection[projKey];
  }
};


/**
 * @param {number} z Tile coordinate z.
 * @param {number} x Tile coordinate x.
 * @param {number} y Tile coordinate y.
 * @param {number} pixelRatio Pixel ratio.
 * @param {ol.proj.Projection} projection Projection.
 * @param {string} key The key set on the tile.
 * @return {!ol.Tile} Tile.
 * @private
 */
_ol_source_TileImage_.prototype.createTile_ = function(z, x, y, pixelRatio, projection, key) {
  var tileCoord = [z, x, y];
  var urlTileCoord = this.getTileCoordForTileUrlFunction(
      tileCoord, projection);
  var tileUrl = urlTileCoord ?
    this.tileUrlFunction(urlTileCoord, pixelRatio, projection) : undefined;
  var tile = new this.tileClass(
      tileCoord,
      tileUrl !== undefined ? __WEBPACK_IMPORTED_MODULE_3__tilestate_js__["a" /* default */].IDLE : __WEBPACK_IMPORTED_MODULE_3__tilestate_js__["a" /* default */].EMPTY,
      tileUrl !== undefined ? tileUrl : '',
      this.crossOrigin,
      this.tileLoadFunction,
      this.tileOptions);
  tile.key = key;
  __WEBPACK_IMPORTED_MODULE_4__events_js__["a" /* default */].listen(tile, __WEBPACK_IMPORTED_MODULE_5__events_eventtype_js__["a" /* default */].CHANGE,
      this.handleTileChange, this);
  return tile;
};


/**
 * @inheritDoc
 */
_ol_source_TileImage_.prototype.getTile = function(z, x, y, pixelRatio, projection) {
  var sourceProjection = /** @type {!ol.proj.Projection} */ (this.getProjection());
  if (!__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].ENABLE_RASTER_REPROJECTION ||
      !sourceProjection || !projection ||
      __WEBPACK_IMPORTED_MODULE_6__proj_js__["default"].equivalent(sourceProjection, projection)) {
    return this.getTileInternal(z, x, y, pixelRatio, sourceProjection || projection);
  } else {
    var cache = this.getTileCacheForProjection(projection);
    var tileCoord = [z, x, y];
    var tile;
    var tileCoordKey = __WEBPACK_IMPORTED_MODULE_9__tilecoord_js__["a" /* default */].getKey(tileCoord);
    if (cache.containsKey(tileCoordKey)) {
      tile = /** @type {!ol.Tile} */ (cache.get(tileCoordKey));
    }
    var key = this.getKey();
    if (tile && tile.key == key) {
      return tile;
    } else {
      var sourceTileGrid = this.getTileGridForProjection(sourceProjection);
      var targetTileGrid = this.getTileGridForProjection(projection);
      var wrappedTileCoord =
          this.getTileCoordForTileUrlFunction(tileCoord, projection);
      var newTile = new __WEBPACK_IMPORTED_MODULE_7__reproj_tile_js__["a" /* default */](
          sourceProjection, sourceTileGrid,
          projection, targetTileGrid,
          tileCoord, wrappedTileCoord, this.getTilePixelRatio(pixelRatio),
          this.getGutterInternal(),
          function(z, x, y, pixelRatio) {
            return this.getTileInternal(z, x, y, pixelRatio, sourceProjection);
          }.bind(this), this.reprojectionErrorThreshold_,
          this.renderReprojectionEdges_);
      newTile.key = key;

      if (tile) {
        newTile.interimTile = tile;
        newTile.refreshInterimChain();
        cache.replace(tileCoordKey, newTile);
      } else {
        cache.set(tileCoordKey, newTile);
      }
      return newTile;
    }
  }
};


/**
 * @param {number} z Tile coordinate z.
 * @param {number} x Tile coordinate x.
 * @param {number} y Tile coordinate y.
 * @param {number} pixelRatio Pixel ratio.
 * @param {!ol.proj.Projection} projection Projection.
 * @return {!ol.Tile} Tile.
 * @protected
 */
_ol_source_TileImage_.prototype.getTileInternal = function(z, x, y, pixelRatio, projection) {
  var tile = null;
  var tileCoordKey = __WEBPACK_IMPORTED_MODULE_9__tilecoord_js__["a" /* default */].getKeyZXY(z, x, y);
  var key = this.getKey();
  if (!this.tileCache.containsKey(tileCoordKey)) {
    tile = this.createTile_(z, x, y, pixelRatio, projection, key);
    this.tileCache.set(tileCoordKey, tile);
  } else {
    tile = this.tileCache.get(tileCoordKey);
    if (tile.key != key) {
      // The source's params changed. If the tile has an interim tile and if we
      // can use it then we use it. Otherwise we create a new tile.  In both
      // cases we attempt to assign an interim tile to the new tile.
      var interimTile = tile;
      tile = this.createTile_(z, x, y, pixelRatio, projection, key);

      //make the new tile the head of the list,
      if (interimTile.getState() == __WEBPACK_IMPORTED_MODULE_3__tilestate_js__["a" /* default */].IDLE) {
        //the old tile hasn't begun loading yet, and is now outdated, so we can simply discard it
        tile.interimTile = interimTile.interimTile;
      } else {
        tile.interimTile = interimTile;
      }
      tile.refreshInterimChain();
      this.tileCache.replace(tileCoordKey, tile);
    }
  }
  return tile;
};


/**
 * Sets whether to render reprojection edges or not (usually for debugging).
 * @param {boolean} render Render the edges.
 * @api
 */
_ol_source_TileImage_.prototype.setRenderReprojectionEdges = function(render) {
  if (!__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].ENABLE_RASTER_REPROJECTION ||
      this.renderReprojectionEdges_ == render) {
    return;
  }
  this.renderReprojectionEdges_ = render;
  for (var id in this.tileCacheForProjection) {
    this.tileCacheForProjection[id].clear();
  }
  this.changed();
};


/**
 * Sets the tile grid to use when reprojecting the tiles to the given
 * projection instead of the default tile grid for the projection.
 *
 * This can be useful when the default tile grid cannot be created
 * (e.g. projection has no extent defined) or
 * for optimization reasons (custom tile size, resolutions, ...).
 *
 * @param {ol.ProjectionLike} projection Projection.
 * @param {ol.tilegrid.TileGrid} tilegrid Tile grid to use for the projection.
 * @api
 */
_ol_source_TileImage_.prototype.setTileGridForProjection = function(projection, tilegrid) {
  if (__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].ENABLE_RASTER_REPROJECTION) {
    var proj = __WEBPACK_IMPORTED_MODULE_6__proj_js__["default"].get(projection);
    if (proj) {
      var projKey = __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].getUid(proj).toString();
      if (!(projKey in this.tileGridForProjection)) {
        this.tileGridForProjection[projKey] = tilegrid;
      }
    }
  }
};


/**
 * @param {ol.ImageTile} imageTile Image tile.
 * @param {string} src Source.
 */
_ol_source_TileImage_.defaultTileLoadFunction = function(imageTile, src) {
  imageTile.getImage().src = src;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_source_TileImage_);


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tile_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tilestate_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__events_eventtype_js__ = __webpack_require__(2);







/**
 * @constructor
 * @extends {ol.Tile}
 * @param {ol.TileCoord} tileCoord Tile coordinate.
 * @param {ol.TileState} state State.
 * @param {string} src Image source URI.
 * @param {?string} crossOrigin Cross origin.
 * @param {ol.TileLoadFunctionType} tileLoadFunction Tile load function.
 * @param {olx.TileOptions=} opt_options Tile options.
 */
var _ol_ImageTile_ = function(tileCoord, state, src, crossOrigin, tileLoadFunction, opt_options) {

  __WEBPACK_IMPORTED_MODULE_1__tile_js__["a" /* default */].call(this, tileCoord, state, opt_options);

  /**
   * @private
   * @type {?string}
   */
  this.crossOrigin_ = crossOrigin;

  /**
   * Image URI
   *
   * @private
   * @type {string}
   */
  this.src_ = src;

  /**
   * @private
   * @type {Image|HTMLCanvasElement}
   */
  this.image_ = new Image();
  if (crossOrigin !== null) {
    this.image_.crossOrigin = crossOrigin;
  }

  /**
   * @private
   * @type {Array.<ol.EventsKey>}
   */
  this.imageListenerKeys_ = null;

  /**
   * @private
   * @type {ol.TileLoadFunctionType}
   */
  this.tileLoadFunction_ = tileLoadFunction;

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_ImageTile_, __WEBPACK_IMPORTED_MODULE_1__tile_js__["a" /* default */]);


/**
 * @inheritDoc
 */
_ol_ImageTile_.prototype.disposeInternal = function() {
  if (this.state == __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].LOADING) {
    this.unlistenImage_();
    this.image_ = _ol_ImageTile_.getBlankImage();
  }
  if (this.interimTile) {
    this.interimTile.dispose();
  }
  this.state = __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].ABORT;
  this.changed();
  __WEBPACK_IMPORTED_MODULE_1__tile_js__["a" /* default */].prototype.disposeInternal.call(this);
};


/**
 * Get the HTML image element for this tile (may be a Canvas, Image, or Video).
 * @return {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} Image.
 * @api
 */
_ol_ImageTile_.prototype.getImage = function() {
  return this.image_;
};


/**
 * @inheritDoc
 */
_ol_ImageTile_.prototype.getKey = function() {
  return this.src_;
};


/**
 * Tracks loading or read errors.
 *
 * @private
 */
_ol_ImageTile_.prototype.handleImageError_ = function() {
  this.state = __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].ERROR;
  this.unlistenImage_();
  this.image_ = _ol_ImageTile_.getBlankImage();
  this.changed();
};


/**
 * Tracks successful image load.
 *
 * @private
 */
_ol_ImageTile_.prototype.handleImageLoad_ = function() {
  if (this.image_.naturalWidth && this.image_.naturalHeight) {
    this.state = __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].LOADED;
  } else {
    this.state = __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].EMPTY;
  }
  this.unlistenImage_();
  this.changed();
};


/**
 * @inheritDoc
 * @api
 */
_ol_ImageTile_.prototype.load = function() {
  if (this.state == __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].ERROR) {
    this.state = __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].IDLE;
    this.image_ = new Image();
    if (this.crossOrigin_ !== null) {
      this.image_.crossOrigin = this.crossOrigin_;
    }
  }
  if (this.state == __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].IDLE) {
    this.state = __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].LOADING;
    this.changed();
    this.imageListenerKeys_ = [
      __WEBPACK_IMPORTED_MODULE_4__events_js__["a" /* default */].listenOnce(this.image_, __WEBPACK_IMPORTED_MODULE_5__events_eventtype_js__["a" /* default */].ERROR,
          this.handleImageError_, this),
      __WEBPACK_IMPORTED_MODULE_4__events_js__["a" /* default */].listenOnce(this.image_, __WEBPACK_IMPORTED_MODULE_5__events_eventtype_js__["a" /* default */].LOAD,
          this.handleImageLoad_, this)
    ];
    this.tileLoadFunction_(this, this.src_);
  }
};


/**
 * Discards event handlers which listen for load completion or errors.
 *
 * @private
 */
_ol_ImageTile_.prototype.unlistenImage_ = function() {
  this.imageListenerKeys_.forEach(__WEBPACK_IMPORTED_MODULE_4__events_js__["a" /* default */].unlistenByKey);
  this.imageListenerKeys_ = null;
};


/**
 * Get a 1-pixel blank image.
 * @return {HTMLCanvasElement} Blank image.
 */
_ol_ImageTile_.getBlankImage = function() {
  var ctx = __WEBPACK_IMPORTED_MODULE_3__dom_js__["a" /* default */].createCanvasContext2D(1, 1);
  ctx.fillStyle = 'rgba(0,0,0,0)';
  ctx.fillRect(0, 0, 1, 1);
  return ctx.canvas;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_ImageTile_);


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _ol_easing_ = {};


/**
 * Start slow and speed up.
 * @param {number} t Input between 0 and 1.
 * @return {number} Output between 0 and 1.
 * @api
 */
_ol_easing_.easeIn = function(t) {
  return Math.pow(t, 3);
};


/**
 * Start fast and slow down.
 * @param {number} t Input between 0 and 1.
 * @return {number} Output between 0 and 1.
 * @api
 */
_ol_easing_.easeOut = function(t) {
  return 1 - _ol_easing_.easeIn(1 - t);
};


/**
 * Start slow, speed up, and then slow down again.
 * @param {number} t Input between 0 and 1.
 * @return {number} Output between 0 and 1.
 * @api
 */
_ol_easing_.inAndOut = function(t) {
  return 3 * t * t - 2 * t * t * t;
};


/**
 * Maintain a constant speed over time.
 * @param {number} t Input between 0 and 1.
 * @return {number} Output between 0 and 1.
 * @api
 */
_ol_easing_.linear = function(t) {
  return t;
};


/**
 * Start slow, speed up, and at the very end slow down again.  This has the
 * same general behavior as {@link ol.easing.inAndOut}, but the final slowdown
 * is delayed.
 * @param {number} t Input between 0 and 1.
 * @return {number} Output between 0 and 1.
 * @api
 */
_ol_easing_.upAndDown = function(t) {
  if (t < 0.5) {
    return _ol_easing_.inAndOut(2 * t);
  } else {
    return 1 - _ol_easing_.inAndOut(2 * (t - 0.5));
  }
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_easing_);


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__asserts_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_eventtarget_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_eventtype_js__ = __webpack_require__(2);





/**
 * Implements a Least-Recently-Used cache where the keys do not conflict with
 * Object's properties (e.g. 'hasOwnProperty' is not allowed as a key). Expiring
 * items from the cache is the responsibility of the user.
 * @constructor
 * @extends {ol.events.EventTarget}
 * @fires ol.events.Event
 * @struct
 * @template T
 * @param {number=} opt_highWaterMark High water mark.
 */
var _ol_structs_LRUCache_ = function(opt_highWaterMark) {

  __WEBPACK_IMPORTED_MODULE_2__events_eventtarget_js__["a" /* default */].call(this);

  /**
   * @type {number}
   */
  this.highWaterMark = opt_highWaterMark !== undefined ? opt_highWaterMark : 2048;

  /**
   * @private
   * @type {number}
   */
  this.count_ = 0;

  /**
   * @private
   * @type {!Object.<string, ol.LRUCacheEntry>}
   */
  this.entries_ = {};

  /**
   * @private
   * @type {?ol.LRUCacheEntry}
   */
  this.oldest_ = null;

  /**
   * @private
   * @type {?ol.LRUCacheEntry}
   */
  this.newest_ = null;

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_structs_LRUCache_, __WEBPACK_IMPORTED_MODULE_2__events_eventtarget_js__["a" /* default */]);


/**
 * @return {boolean} Can expire cache.
 */
_ol_structs_LRUCache_.prototype.canExpireCache = function() {
  return this.getCount() > this.highWaterMark;
};


/**
 * FIXME empty description for jsdoc
 */
_ol_structs_LRUCache_.prototype.clear = function() {
  this.count_ = 0;
  this.entries_ = {};
  this.oldest_ = null;
  this.newest_ = null;
  this.dispatchEvent(__WEBPACK_IMPORTED_MODULE_3__events_eventtype_js__["a" /* default */].CLEAR);
};


/**
 * @param {string} key Key.
 * @return {boolean} Contains key.
 */
_ol_structs_LRUCache_.prototype.containsKey = function(key) {
  return this.entries_.hasOwnProperty(key);
};


/**
 * @param {function(this: S, T, string, ol.structs.LRUCache): ?} f The function
 *     to call for every entry from the oldest to the newer. This function takes
 *     3 arguments (the entry value, the entry key and the LRUCache object).
 *     The return value is ignored.
 * @param {S=} opt_this The object to use as `this` in `f`.
 * @template S
 */
_ol_structs_LRUCache_.prototype.forEach = function(f, opt_this) {
  var entry = this.oldest_;
  while (entry) {
    f.call(opt_this, entry.value_, entry.key_, this);
    entry = entry.newer;
  }
};


/**
 * @param {string} key Key.
 * @return {T} Value.
 */
_ol_structs_LRUCache_.prototype.get = function(key) {
  var entry = this.entries_[key];
  __WEBPACK_IMPORTED_MODULE_1__asserts_js__["a" /* default */].assert(entry !== undefined,
      15); // Tried to get a value for a key that does not exist in the cache
  if (entry === this.newest_) {
    return entry.value_;
  } else if (entry === this.oldest_) {
    this.oldest_ = /** @type {ol.LRUCacheEntry} */ (this.oldest_.newer);
    this.oldest_.older = null;
  } else {
    entry.newer.older = entry.older;
    entry.older.newer = entry.newer;
  }
  entry.newer = null;
  entry.older = this.newest_;
  this.newest_.newer = entry;
  this.newest_ = entry;
  return entry.value_;
};


/**
 * Remove an entry from the cache.
 * @param {string} key The entry key.
 * @return {T} The removed entry.
 */
_ol_structs_LRUCache_.prototype.remove = function(key) {
  var entry = this.entries_[key];
  __WEBPACK_IMPORTED_MODULE_1__asserts_js__["a" /* default */].assert(entry !== undefined, 15); // Tried to get a value for a key that does not exist in the cache
  if (entry === this.newest_) {
    this.newest_ = /** @type {ol.LRUCacheEntry} */ (entry.older);
    if (this.newest_) {
      this.newest_.newer = null;
    }
  } else if (entry === this.oldest_) {
    this.oldest_ = /** @type {ol.LRUCacheEntry} */ (entry.newer);
    if (this.oldest_) {
      this.oldest_.older = null;
    }
  } else {
    entry.newer.older = entry.older;
    entry.older.newer = entry.newer;
  }
  delete this.entries_[key];
  --this.count_;
  return entry.value_;
};


/**
 * @return {number} Count.
 */
_ol_structs_LRUCache_.prototype.getCount = function() {
  return this.count_;
};


/**
 * @return {Array.<string>} Keys.
 */
_ol_structs_LRUCache_.prototype.getKeys = function() {
  var keys = new Array(this.count_);
  var i = 0;
  var entry;
  for (entry = this.newest_; entry; entry = entry.older) {
    keys[i++] = entry.key_;
  }
  return keys;
};


/**
 * @return {Array.<T>} Values.
 */
_ol_structs_LRUCache_.prototype.getValues = function() {
  var values = new Array(this.count_);
  var i = 0;
  var entry;
  for (entry = this.newest_; entry; entry = entry.older) {
    values[i++] = entry.value_;
  }
  return values;
};


/**
 * @return {T} Last value.
 */
_ol_structs_LRUCache_.prototype.peekLast = function() {
  return this.oldest_.value_;
};


/**
 * @return {string} Last key.
 */
_ol_structs_LRUCache_.prototype.peekLastKey = function() {
  return this.oldest_.key_;
};


/**
 * Get the key of the newest item in the cache.  Throws if the cache is empty.
 * @return {string} The newest key.
 */
_ol_structs_LRUCache_.prototype.peekFirstKey = function() {
  return this.newest_.key_;
};


/**
 * @return {T} value Value.
 */
_ol_structs_LRUCache_.prototype.pop = function() {
  var entry = this.oldest_;
  delete this.entries_[entry.key_];
  if (entry.newer) {
    entry.newer.older = null;
  }
  this.oldest_ = /** @type {ol.LRUCacheEntry} */ (entry.newer);
  if (!this.oldest_) {
    this.newest_ = null;
  }
  --this.count_;
  return entry.value_;
};


/**
 * @param {string} key Key.
 * @param {T} value Value.
 */
_ol_structs_LRUCache_.prototype.replace = function(key, value) {
  this.get(key);  // update `newest_`
  this.entries_[key].value_ = value;
};


/**
 * @param {string} key Key.
 * @param {T} value Value.
 */
_ol_structs_LRUCache_.prototype.set = function(key, value) {
  __WEBPACK_IMPORTED_MODULE_1__asserts_js__["a" /* default */].assert(!(key in this.entries_),
      16); // Tried to set a value for a key that is used already
  var entry = /** @type {ol.LRUCacheEntry} */ ({
    key_: key,
    newer: null,
    older: this.newest_,
    value_: value
  });
  if (!this.newest_) {
    this.oldest_ = entry;
  } else {
    this.newest_.newer = entry;
  }
  this.newest_ = entry;
  this.entries_[key] = entry;
  ++this.count_;
};


/**
 * Prune the cache.
 */
_ol_structs_LRUCache_.prototype.prune = function() {
  while (this.canExpireCache()) {
    this.pop();
  }
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_structs_LRUCache_);


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tile_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tilestate_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_eventtype_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__extent_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__math_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reproj_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reproj_triangulation_js__ = __webpack_require__(32);










/**
 * @classdesc
 * Class encapsulating single reprojected tile.
 * See {@link ol.source.TileImage}.
 *
 * @constructor
 * @extends {ol.Tile}
 * @param {ol.proj.Projection} sourceProj Source projection.
 * @param {ol.tilegrid.TileGrid} sourceTileGrid Source tile grid.
 * @param {ol.proj.Projection} targetProj Target projection.
 * @param {ol.tilegrid.TileGrid} targetTileGrid Target tile grid.
 * @param {ol.TileCoord} tileCoord Coordinate of the tile.
 * @param {ol.TileCoord} wrappedTileCoord Coordinate of the tile wrapped in X.
 * @param {number} pixelRatio Pixel ratio.
 * @param {number} gutter Gutter of the source tiles.
 * @param {ol.ReprojTileFunctionType} getTileFunction
 *     Function returning source tiles (z, x, y, pixelRatio).
 * @param {number=} opt_errorThreshold Acceptable reprojection error (in px).
 * @param {boolean=} opt_renderEdges Render reprojection edges.
 */
var _ol_reproj_Tile_ = function(sourceProj, sourceTileGrid,
    targetProj, targetTileGrid, tileCoord, wrappedTileCoord,
    pixelRatio, gutter, getTileFunction,
    opt_errorThreshold, opt_renderEdges) {
  __WEBPACK_IMPORTED_MODULE_1__tile_js__["a" /* default */].call(this, tileCoord, __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].IDLE);

  /**
   * @private
   * @type {boolean}
   */
  this.renderEdges_ = opt_renderEdges !== undefined ? opt_renderEdges : false;

  /**
   * @private
   * @type {number}
   */
  this.pixelRatio_ = pixelRatio;

  /**
   * @private
   * @type {number}
   */
  this.gutter_ = gutter;

  /**
   * @private
   * @type {HTMLCanvasElement}
   */
  this.canvas_ = null;

  /**
   * @private
   * @type {ol.tilegrid.TileGrid}
   */
  this.sourceTileGrid_ = sourceTileGrid;

  /**
   * @private
   * @type {ol.tilegrid.TileGrid}
   */
  this.targetTileGrid_ = targetTileGrid;

  /**
   * @private
   * @type {ol.TileCoord}
   */
  this.wrappedTileCoord_ = wrappedTileCoord ? wrappedTileCoord : tileCoord;

  /**
   * @private
   * @type {!Array.<ol.Tile>}
   */
  this.sourceTiles_ = [];

  /**
   * @private
   * @type {Array.<ol.EventsKey>}
   */
  this.sourcesListenerKeys_ = null;

  /**
   * @private
   * @type {number}
   */
  this.sourceZ_ = 0;

  var targetExtent = targetTileGrid.getTileCoordExtent(this.wrappedTileCoord_);
  var maxTargetExtent = this.targetTileGrid_.getExtent();
  var maxSourceExtent = this.sourceTileGrid_.getExtent();

  var limitedTargetExtent = maxTargetExtent ?
    __WEBPACK_IMPORTED_MODULE_5__extent_js__["a" /* default */].getIntersection(targetExtent, maxTargetExtent) : targetExtent;

  if (__WEBPACK_IMPORTED_MODULE_5__extent_js__["a" /* default */].getArea(limitedTargetExtent) === 0) {
    // Tile is completely outside range -> EMPTY
    // TODO: is it actually correct that the source even creates the tile ?
    this.state = __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].EMPTY;
    return;
  }

  var sourceProjExtent = sourceProj.getExtent();
  if (sourceProjExtent) {
    if (!maxSourceExtent) {
      maxSourceExtent = sourceProjExtent;
    } else {
      maxSourceExtent = __WEBPACK_IMPORTED_MODULE_5__extent_js__["a" /* default */].getIntersection(
          maxSourceExtent, sourceProjExtent);
    }
  }

  var targetResolution = targetTileGrid.getResolution(
      this.wrappedTileCoord_[0]);

  var targetCenter = __WEBPACK_IMPORTED_MODULE_5__extent_js__["a" /* default */].getCenter(limitedTargetExtent);
  var sourceResolution = __WEBPACK_IMPORTED_MODULE_7__reproj_js__["a" /* default */].calculateSourceResolution(
      sourceProj, targetProj, targetCenter, targetResolution);

  if (!isFinite(sourceResolution) || sourceResolution <= 0) {
    // invalid sourceResolution -> EMPTY
    // probably edges of the projections when no extent is defined
    this.state = __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].EMPTY;
    return;
  }

  var errorThresholdInPixels = opt_errorThreshold !== undefined ?
    opt_errorThreshold : __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].DEFAULT_RASTER_REPROJECTION_ERROR_THRESHOLD;

  /**
   * @private
   * @type {!ol.reproj.Triangulation}
   */
  this.triangulation_ = new __WEBPACK_IMPORTED_MODULE_8__reproj_triangulation_js__["a" /* default */](
      sourceProj, targetProj, limitedTargetExtent, maxSourceExtent,
      sourceResolution * errorThresholdInPixels);

  if (this.triangulation_.getTriangles().length === 0) {
    // no valid triangles -> EMPTY
    this.state = __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].EMPTY;
    return;
  }

  this.sourceZ_ = sourceTileGrid.getZForResolution(sourceResolution);
  var sourceExtent = this.triangulation_.calculateSourceExtent();

  if (maxSourceExtent) {
    if (sourceProj.canWrapX()) {
      sourceExtent[1] = __WEBPACK_IMPORTED_MODULE_6__math_js__["a" /* default */].clamp(
          sourceExtent[1], maxSourceExtent[1], maxSourceExtent[3]);
      sourceExtent[3] = __WEBPACK_IMPORTED_MODULE_6__math_js__["a" /* default */].clamp(
          sourceExtent[3], maxSourceExtent[1], maxSourceExtent[3]);
    } else {
      sourceExtent = __WEBPACK_IMPORTED_MODULE_5__extent_js__["a" /* default */].getIntersection(sourceExtent, maxSourceExtent);
    }
  }

  if (!__WEBPACK_IMPORTED_MODULE_5__extent_js__["a" /* default */].getArea(sourceExtent)) {
    this.state = __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].EMPTY;
  } else {
    var sourceRange = sourceTileGrid.getTileRangeForExtentAndZ(
        sourceExtent, this.sourceZ_);

    for (var srcX = sourceRange.minX; srcX <= sourceRange.maxX; srcX++) {
      for (var srcY = sourceRange.minY; srcY <= sourceRange.maxY; srcY++) {
        var tile = getTileFunction(this.sourceZ_, srcX, srcY, pixelRatio);
        if (tile) {
          this.sourceTiles_.push(tile);
        }
      }
    }

    if (this.sourceTiles_.length === 0) {
      this.state = __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].EMPTY;
    }
  }
};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_reproj_Tile_, __WEBPACK_IMPORTED_MODULE_1__tile_js__["a" /* default */]);


/**
 * @inheritDoc
 */
_ol_reproj_Tile_.prototype.disposeInternal = function() {
  if (this.state == __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].LOADING) {
    this.unlistenSources_();
  }
  __WEBPACK_IMPORTED_MODULE_1__tile_js__["a" /* default */].prototype.disposeInternal.call(this);
};


/**
 * Get the HTML Canvas element for this tile.
 * @return {HTMLCanvasElement} Canvas.
 */
_ol_reproj_Tile_.prototype.getImage = function() {
  return this.canvas_;
};


/**
 * @private
 */
_ol_reproj_Tile_.prototype.reproject_ = function() {
  var sources = [];
  this.sourceTiles_.forEach(function(tile, i, arr) {
    if (tile && tile.getState() == __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].LOADED) {
      sources.push({
        extent: this.sourceTileGrid_.getTileCoordExtent(tile.tileCoord),
        image: tile.getImage()
      });
    }
  }, this);
  this.sourceTiles_.length = 0;

  if (sources.length === 0) {
    this.state = __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].ERROR;
  } else {
    var z = this.wrappedTileCoord_[0];
    var size = this.targetTileGrid_.getTileSize(z);
    var width = typeof size === 'number' ? size : size[0];
    var height = typeof size === 'number' ? size : size[1];
    var targetResolution = this.targetTileGrid_.getResolution(z);
    var sourceResolution = this.sourceTileGrid_.getResolution(this.sourceZ_);

    var targetExtent = this.targetTileGrid_.getTileCoordExtent(
        this.wrappedTileCoord_);
    this.canvas_ = __WEBPACK_IMPORTED_MODULE_7__reproj_js__["a" /* default */].render(width, height, this.pixelRatio_,
        sourceResolution, this.sourceTileGrid_.getExtent(),
        targetResolution, targetExtent, this.triangulation_, sources,
        this.gutter_, this.renderEdges_);

    this.state = __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].LOADED;
  }
  this.changed();
};


/**
 * @inheritDoc
 */
_ol_reproj_Tile_.prototype.load = function() {
  if (this.state == __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].IDLE) {
    this.state = __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].LOADING;
    this.changed();

    var leftToLoad = 0;

    this.sourcesListenerKeys_ = [];
    this.sourceTiles_.forEach(function(tile, i, arr) {
      var state = tile.getState();
      if (state == __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].IDLE || state == __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].LOADING) {
        leftToLoad++;

        var sourceListenKey;
        sourceListenKey = __WEBPACK_IMPORTED_MODULE_3__events_js__["a" /* default */].listen(tile, __WEBPACK_IMPORTED_MODULE_4__events_eventtype_js__["a" /* default */].CHANGE,
            function(e) {
              var state = tile.getState();
              if (state == __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].LOADED ||
                  state == __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].ERROR ||
                  state == __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].EMPTY) {
                __WEBPACK_IMPORTED_MODULE_3__events_js__["a" /* default */].unlistenByKey(sourceListenKey);
                leftToLoad--;
                if (leftToLoad === 0) {
                  this.unlistenSources_();
                  this.reproject_();
                }
              }
            }, this);
        this.sourcesListenerKeys_.push(sourceListenKey);
      }
    }, this);

    this.sourceTiles_.forEach(function(tile, i, arr) {
      var state = tile.getState();
      if (state == __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].IDLE) {
        tile.load();
      }
    });

    if (leftToLoad === 0) {
      setTimeout(this.reproject_.bind(this), 0);
    }
  }
};


/**
 * @private
 */
_ol_reproj_Tile_.prototype.unlistenSources_ = function() {
  this.sourcesListenerKeys_.forEach(__WEBPACK_IMPORTED_MODULE_3__events_js__["a" /* default */].unlistenByKey);
  this.sourcesListenerKeys_ = null;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_reproj_Tile_);


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tilestate_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tileurlfunction_js__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__source_tile_js__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__source_tileeventtype_js__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tilecoord_js__ = __webpack_require__(7);







/**
 * @classdesc
 * Base class for sources providing tiles divided into a tile grid over http.
 *
 * @constructor
 * @abstract
 * @fires ol.source.Tile.Event
 * @extends {ol.source.Tile}
 * @param {ol.SourceUrlTileOptions} options Image tile options.
 */
var _ol_source_UrlTile_ = function(options) {

  __WEBPACK_IMPORTED_MODULE_3__source_tile_js__["a" /* default */].call(this, {
    attributions: options.attributions,
    cacheSize: options.cacheSize,
    extent: options.extent,
    logo: options.logo,
    opaque: options.opaque,
    projection: options.projection,
    state: options.state,
    tileGrid: options.tileGrid,
    tilePixelRatio: options.tilePixelRatio,
    wrapX: options.wrapX,
    transition: options.transition
  });

  /**
   * @protected
   * @type {ol.TileLoadFunctionType}
   */
  this.tileLoadFunction = options.tileLoadFunction;

  /**
   * @protected
   * @type {ol.TileUrlFunctionType}
   */
  this.tileUrlFunction = this.fixedTileUrlFunction ?
    this.fixedTileUrlFunction.bind(this) :
    __WEBPACK_IMPORTED_MODULE_2__tileurlfunction_js__["a" /* default */].nullTileUrlFunction;

  /**
   * @protected
   * @type {!Array.<string>|null}
   */
  this.urls = null;

  if (options.urls) {
    this.setUrls(options.urls);
  } else if (options.url) {
    this.setUrl(options.url);
  }
  if (options.tileUrlFunction) {
    this.setTileUrlFunction(options.tileUrlFunction);
  }

  /**
   * @private
   * @type {Object.<number, boolean>}
   */
  this.tileLoadingKeys_ = {};

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_source_UrlTile_, __WEBPACK_IMPORTED_MODULE_3__source_tile_js__["a" /* default */]);


/**
 * @type {ol.TileUrlFunctionType|undefined}
 * @protected
 */
_ol_source_UrlTile_.prototype.fixedTileUrlFunction;

/**
 * Return the tile load function of the source.
 * @return {ol.TileLoadFunctionType} TileLoadFunction
 * @api
 */
_ol_source_UrlTile_.prototype.getTileLoadFunction = function() {
  return this.tileLoadFunction;
};


/**
 * Return the tile URL function of the source.
 * @return {ol.TileUrlFunctionType} TileUrlFunction
 * @api
 */
_ol_source_UrlTile_.prototype.getTileUrlFunction = function() {
  return this.tileUrlFunction;
};


/**
 * Return the URLs used for this source.
 * When a tileUrlFunction is used instead of url or urls,
 * null will be returned.
 * @return {!Array.<string>|null} URLs.
 * @api
 */
_ol_source_UrlTile_.prototype.getUrls = function() {
  return this.urls;
};


/**
 * Handle tile change events.
 * @param {ol.events.Event} event Event.
 * @protected
 */
_ol_source_UrlTile_.prototype.handleTileChange = function(event) {
  var tile = /** @type {ol.Tile} */ (event.target);
  var uid = __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].getUid(tile);
  var tileState = tile.getState();
  var type;
  if (tileState == __WEBPACK_IMPORTED_MODULE_1__tilestate_js__["a" /* default */].LOADING) {
    this.tileLoadingKeys_[uid] = true;
    type = __WEBPACK_IMPORTED_MODULE_4__source_tileeventtype_js__["a" /* default */].TILELOADSTART;
  } else if (uid in this.tileLoadingKeys_) {
    delete this.tileLoadingKeys_[uid];
    type = tileState == __WEBPACK_IMPORTED_MODULE_1__tilestate_js__["a" /* default */].ERROR ? __WEBPACK_IMPORTED_MODULE_4__source_tileeventtype_js__["a" /* default */].TILELOADERROR :
      (tileState == __WEBPACK_IMPORTED_MODULE_1__tilestate_js__["a" /* default */].LOADED || tileState == __WEBPACK_IMPORTED_MODULE_1__tilestate_js__["a" /* default */].ABORT) ?
        __WEBPACK_IMPORTED_MODULE_4__source_tileeventtype_js__["a" /* default */].TILELOADEND : undefined;
  }
  if (type != undefined) {
    this.dispatchEvent(new __WEBPACK_IMPORTED_MODULE_3__source_tile_js__["a" /* default */].Event(type, tile));
  }
};


/**
 * Set the tile load function of the source.
 * @param {ol.TileLoadFunctionType} tileLoadFunction Tile load function.
 * @api
 */
_ol_source_UrlTile_.prototype.setTileLoadFunction = function(tileLoadFunction) {
  this.tileCache.clear();
  this.tileLoadFunction = tileLoadFunction;
  this.changed();
};


/**
 * Set the tile URL function of the source.
 * @param {ol.TileUrlFunctionType} tileUrlFunction Tile URL function.
 * @param {string=} opt_key Optional new tile key for the source.
 * @api
 */
_ol_source_UrlTile_.prototype.setTileUrlFunction = function(tileUrlFunction, opt_key) {
  this.tileUrlFunction = tileUrlFunction;
  this.tileCache.pruneExceptNewestZ();
  if (typeof opt_key !== 'undefined') {
    this.setKey(opt_key);
  } else {
    this.changed();
  }
};


/**
 * Set the URL to use for requests.
 * @param {string} url URL.
 * @api
 */
_ol_source_UrlTile_.prototype.setUrl = function(url) {
  var urls = this.urls = __WEBPACK_IMPORTED_MODULE_2__tileurlfunction_js__["a" /* default */].expandUrl(url);
  this.setTileUrlFunction(this.fixedTileUrlFunction ?
    this.fixedTileUrlFunction.bind(this) :
    __WEBPACK_IMPORTED_MODULE_2__tileurlfunction_js__["a" /* default */].createFromTemplates(urls, this.tileGrid), url);
};


/**
 * Set the URLs to use for requests.
 * @param {Array.<string>} urls URLs.
 * @api
 */
_ol_source_UrlTile_.prototype.setUrls = function(urls) {
  this.urls = urls;
  var key = urls.join('\n');
  this.setTileUrlFunction(this.fixedTileUrlFunction ?
    this.fixedTileUrlFunction.bind(this) :
    __WEBPACK_IMPORTED_MODULE_2__tileurlfunction_js__["a" /* default */].createFromTemplates(urls, this.tileGrid), key);
};


/**
 * @inheritDoc
 */
_ol_source_UrlTile_.prototype.useTile = function(z, x, y) {
  var tileCoordKey = __WEBPACK_IMPORTED_MODULE_5__tilecoord_js__["a" /* default */].getKeyZXY(z, x, y);
  if (this.tileCache.containsKey(tileCoordKey)) {
    this.tileCache.get(tileCoordKey);
  }
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_source_UrlTile_);


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__asserts_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tilecoord_js__ = __webpack_require__(7);



var _ol_TileUrlFunction_ = {};


/**
 * @param {string} template Template.
 * @param {ol.tilegrid.TileGrid} tileGrid Tile grid.
 * @return {ol.TileUrlFunctionType} Tile URL function.
 */
_ol_TileUrlFunction_.createFromTemplate = function(template, tileGrid) {
  var zRegEx = /\{z\}/g;
  var xRegEx = /\{x\}/g;
  var yRegEx = /\{y\}/g;
  var dashYRegEx = /\{-y\}/g;
  return (
    /**
     * @param {ol.TileCoord} tileCoord Tile Coordinate.
     * @param {number} pixelRatio Pixel ratio.
     * @param {ol.proj.Projection} projection Projection.
     * @return {string|undefined} Tile URL.
     */
    function(tileCoord, pixelRatio, projection) {
      if (!tileCoord) {
        return undefined;
      } else {
        return template.replace(zRegEx, tileCoord[0].toString())
            .replace(xRegEx, tileCoord[1].toString())
            .replace(yRegEx, function() {
              var y = -tileCoord[2] - 1;
              return y.toString();
            })
            .replace(dashYRegEx, function() {
              var z = tileCoord[0];
              var range = tileGrid.getFullTileRange(z);
              __WEBPACK_IMPORTED_MODULE_0__asserts_js__["a" /* default */].assert(range, 55); // The {-y} placeholder requires a tile grid with extent
              var y = range.getHeight() + tileCoord[2];
              return y.toString();
            });
      }
    }
  );
};


/**
 * @param {Array.<string>} templates Templates.
 * @param {ol.tilegrid.TileGrid} tileGrid Tile grid.
 * @return {ol.TileUrlFunctionType} Tile URL function.
 */
_ol_TileUrlFunction_.createFromTemplates = function(templates, tileGrid) {
  var len = templates.length;
  var tileUrlFunctions = new Array(len);
  for (var i = 0; i < len; ++i) {
    tileUrlFunctions[i] = _ol_TileUrlFunction_.createFromTemplate(
        templates[i], tileGrid);
  }
  return _ol_TileUrlFunction_.createFromTileUrlFunctions(tileUrlFunctions);
};


/**
 * @param {Array.<ol.TileUrlFunctionType>} tileUrlFunctions Tile URL Functions.
 * @return {ol.TileUrlFunctionType} Tile URL function.
 */
_ol_TileUrlFunction_.createFromTileUrlFunctions = function(tileUrlFunctions) {
  if (tileUrlFunctions.length === 1) {
    return tileUrlFunctions[0];
  }
  return (
    /**
     * @param {ol.TileCoord} tileCoord Tile Coordinate.
     * @param {number} pixelRatio Pixel ratio.
     * @param {ol.proj.Projection} projection Projection.
     * @return {string|undefined} Tile URL.
     */
    function(tileCoord, pixelRatio, projection) {
      if (!tileCoord) {
        return undefined;
      } else {
        var h = __WEBPACK_IMPORTED_MODULE_2__tilecoord_js__["a" /* default */].hash(tileCoord);
        var index = __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* default */].modulo(h, tileUrlFunctions.length);
        return tileUrlFunctions[index](tileCoord, pixelRatio, projection);
      }
    }
  );
};


/**
 * @param {ol.TileCoord} tileCoord Tile coordinate.
 * @param {number} pixelRatio Pixel ratio.
 * @param {ol.proj.Projection} projection Projection.
 * @return {string|undefined} Tile URL.
 */
_ol_TileUrlFunction_.nullTileUrlFunction = function(tileCoord, pixelRatio, projection) {
  return undefined;
};


/**
 * @param {string} url URL.
 * @return {Array.<string>} Array of urls.
 */
_ol_TileUrlFunction_.expandUrl = function(url) {
  var urls = [];
  var match = /\{([a-z])-([a-z])\}/.exec(url);
  if (match) {
    // char range
    var startCharCode = match[1].charCodeAt(0);
    var stopCharCode = match[2].charCodeAt(0);
    var charCode;
    for (charCode = startCharCode; charCode <= stopCharCode; ++charCode) {
      urls.push(url.replace(match[0], String.fromCharCode(charCode)));
    }
    return urls;
  }
  match = match = /\{(\d+)-(\d+)\}/.exec(url);
  if (match) {
    // number range
    var stop = parseInt(match[2], 10);
    for (var i = parseInt(match[1], 10); i <= stop; i++) {
      urls.push(url.replace(match[0], i.toString()));
    }
    return urls;
  }
  urls.push(url);
  return urls;
};
/* harmony default export */ __webpack_exports__["a"] = (_ol_TileUrlFunction_);


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tilecache_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tilestate_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_event_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__proj_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__size_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__source_source_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tilecoord_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tilegrid_js__ = __webpack_require__(13);










/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Base class for sources providing images divided into a tile grid.
 *
 * @constructor
 * @abstract
 * @extends {ol.source.Source}
 * @param {ol.SourceTileOptions} options Tile source options.
 * @api
 */
var _ol_source_Tile_ = function(options) {

  __WEBPACK_IMPORTED_MODULE_6__source_source_js__["a" /* default */].call(this, {
    attributions: options.attributions,
    extent: options.extent,
    logo: options.logo,
    projection: options.projection,
    state: options.state,
    wrapX: options.wrapX
  });

  /**
   * @private
   * @type {boolean}
   */
  this.opaque_ = options.opaque !== undefined ? options.opaque : false;

  /**
   * @private
   * @type {number}
   */
  this.tilePixelRatio_ = options.tilePixelRatio !== undefined ?
    options.tilePixelRatio : 1;

  /**
   * @protected
   * @type {ol.tilegrid.TileGrid}
   */
  this.tileGrid = options.tileGrid !== undefined ? options.tileGrid : null;

  /**
   * @protected
   * @type {ol.TileCache}
   */
  this.tileCache = new __WEBPACK_IMPORTED_MODULE_1__tilecache_js__["a" /* default */](options.cacheSize);

  /**
   * @protected
   * @type {ol.Size}
   */
  this.tmpSize = [0, 0];

  /**
   * @private
   * @type {string}
   */
  this.key_ = '';

  /**
   * @protected
   * @type {olx.TileOptions}
   */
  this.tileOptions = {transition: options.transition};

};

__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_source_Tile_, __WEBPACK_IMPORTED_MODULE_6__source_source_js__["a" /* default */]);


/**
 * @return {boolean} Can expire cache.
 */
_ol_source_Tile_.prototype.canExpireCache = function() {
  return this.tileCache.canExpireCache();
};


/**
 * @param {ol.proj.Projection} projection Projection.
 * @param {Object.<string, ol.TileRange>} usedTiles Used tiles.
 */
_ol_source_Tile_.prototype.expireCache = function(projection, usedTiles) {
  var tileCache = this.getTileCacheForProjection(projection);
  if (tileCache) {
    tileCache.expireCache(usedTiles);
  }
};


/**
 * @param {ol.proj.Projection} projection Projection.
 * @param {number} z Zoom level.
 * @param {ol.TileRange} tileRange Tile range.
 * @param {function(ol.Tile):(boolean|undefined)} callback Called with each
 *     loaded tile.  If the callback returns `false`, the tile will not be
 *     considered loaded.
 * @return {boolean} The tile range is fully covered with loaded tiles.
 */
_ol_source_Tile_.prototype.forEachLoadedTile = function(projection, z, tileRange, callback) {
  var tileCache = this.getTileCacheForProjection(projection);
  if (!tileCache) {
    return false;
  }

  var covered = true;
  var tile, tileCoordKey, loaded;
  for (var x = tileRange.minX; x <= tileRange.maxX; ++x) {
    for (var y = tileRange.minY; y <= tileRange.maxY; ++y) {
      tileCoordKey = __WEBPACK_IMPORTED_MODULE_7__tilecoord_js__["a" /* default */].getKeyZXY(z, x, y);
      loaded = false;
      if (tileCache.containsKey(tileCoordKey)) {
        tile = /** @type {!ol.Tile} */ (tileCache.get(tileCoordKey));
        loaded = tile.getState() === __WEBPACK_IMPORTED_MODULE_2__tilestate_js__["a" /* default */].LOADED;
        if (loaded) {
          loaded = (callback(tile) !== false);
        }
      }
      if (!loaded) {
        covered = false;
      }
    }
  }
  return covered;
};


/**
 * @param {ol.proj.Projection} projection Projection.
 * @return {number} Gutter.
 */
_ol_source_Tile_.prototype.getGutter = function(projection) {
  return 0;
};


/**
 * Return the key to be used for all tiles in the source.
 * @return {string} The key for all tiles.
 * @protected
 */
_ol_source_Tile_.prototype.getKey = function() {
  return this.key_;
};


/**
 * Set the value to be used as the key for all tiles in the source.
 * @param {string} key The key for tiles.
 * @protected
 */
_ol_source_Tile_.prototype.setKey = function(key) {
  if (this.key_ !== key) {
    this.key_ = key;
    this.changed();
  }
};


/**
 * @param {ol.proj.Projection} projection Projection.
 * @return {boolean} Opaque.
 */
_ol_source_Tile_.prototype.getOpaque = function(projection) {
  return this.opaque_;
};


/**
 * @inheritDoc
 */
_ol_source_Tile_.prototype.getResolutions = function() {
  return this.tileGrid.getResolutions();
};


/**
 * @abstract
 * @param {number} z Tile coordinate z.
 * @param {number} x Tile coordinate x.
 * @param {number} y Tile coordinate y.
 * @param {number} pixelRatio Pixel ratio.
 * @param {ol.proj.Projection} projection Projection.
 * @return {!ol.Tile} Tile.
 */
_ol_source_Tile_.prototype.getTile = function(z, x, y, pixelRatio, projection) {};


/**
 * Return the tile grid of the tile source.
 * @return {ol.tilegrid.TileGrid} Tile grid.
 * @api
 */
_ol_source_Tile_.prototype.getTileGrid = function() {
  return this.tileGrid;
};


/**
 * @param {ol.proj.Projection} projection Projection.
 * @return {!ol.tilegrid.TileGrid} Tile grid.
 */
_ol_source_Tile_.prototype.getTileGridForProjection = function(projection) {
  if (!this.tileGrid) {
    return __WEBPACK_IMPORTED_MODULE_8__tilegrid_js__["a" /* default */].getForProjection(projection);
  } else {
    return this.tileGrid;
  }
};


/**
 * @param {ol.proj.Projection} projection Projection.
 * @return {ol.TileCache} Tile cache.
 * @protected
 */
_ol_source_Tile_.prototype.getTileCacheForProjection = function(projection) {
  var thisProj = this.getProjection();
  if (thisProj && !__WEBPACK_IMPORTED_MODULE_4__proj_js__["default"].equivalent(thisProj, projection)) {
    return null;
  } else {
    return this.tileCache;
  }
};


/**
 * Get the tile pixel ratio for this source. Subclasses may override this
 * method, which is meant to return a supported pixel ratio that matches the
 * provided `pixelRatio` as close as possible.
 * @param {number} pixelRatio Pixel ratio.
 * @return {number} Tile pixel ratio.
 */
_ol_source_Tile_.prototype.getTilePixelRatio = function(pixelRatio) {
  return this.tilePixelRatio_;
};


/**
 * @param {number} z Z.
 * @param {number} pixelRatio Pixel ratio.
 * @param {ol.proj.Projection} projection Projection.
 * @return {ol.Size} Tile size.
 */
_ol_source_Tile_.prototype.getTilePixelSize = function(z, pixelRatio, projection) {
  var tileGrid = this.getTileGridForProjection(projection);
  var tilePixelRatio = this.getTilePixelRatio(pixelRatio);
  var tileSize = __WEBPACK_IMPORTED_MODULE_5__size_js__["a" /* default */].toSize(tileGrid.getTileSize(z), this.tmpSize);
  if (tilePixelRatio == 1) {
    return tileSize;
  } else {
    return __WEBPACK_IMPORTED_MODULE_5__size_js__["a" /* default */].scale(tileSize, tilePixelRatio, this.tmpSize);
  }
};


/**
 * Returns a tile coordinate wrapped around the x-axis. When the tile coordinate
 * is outside the resolution and extent range of the tile grid, `null` will be
 * returned.
 * @param {ol.TileCoord} tileCoord Tile coordinate.
 * @param {ol.proj.Projection=} opt_projection Projection.
 * @return {ol.TileCoord} Tile coordinate to be passed to the tileUrlFunction or
 *     null if no tile URL should be created for the passed `tileCoord`.
 */
_ol_source_Tile_.prototype.getTileCoordForTileUrlFunction = function(tileCoord, opt_projection) {
  var projection = opt_projection !== undefined ?
    opt_projection : this.getProjection();
  var tileGrid = this.getTileGridForProjection(projection);
  if (this.getWrapX() && projection.isGlobal()) {
    tileCoord = __WEBPACK_IMPORTED_MODULE_8__tilegrid_js__["a" /* default */].wrapX(tileGrid, tileCoord, projection);
  }
  return __WEBPACK_IMPORTED_MODULE_7__tilecoord_js__["a" /* default */].withinExtentAndZ(tileCoord, tileGrid) ? tileCoord : null;
};


/**
 * @inheritDoc
 */
_ol_source_Tile_.prototype.refresh = function() {
  this.tileCache.clear();
  this.changed();
};


/**
 * Marks a tile coord as being used, without triggering a load.
 * @param {number} z Tile coordinate z.
 * @param {number} x Tile coordinate x.
 * @param {number} y Tile coordinate y.
 * @param {ol.proj.Projection} projection Projection.
 */
_ol_source_Tile_.prototype.useTile = __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].nullFunction;


/**
 * @classdesc
 * Events emitted by {@link ol.source.Tile} instances are instances of this
 * type.
 *
 * @constructor
 * @extends {ol.events.Event}
 * @implements {oli.source.Tile.Event}
 * @param {string} type Type.
 * @param {ol.Tile} tile The tile.
 */
_ol_source_Tile_.Event = function(type, tile) {

  __WEBPACK_IMPORTED_MODULE_3__events_event_js__["a" /* default */].call(this, type);

  /**
   * The tile related to the event.
   * @type {ol.Tile}
   * @api
   */
  this.tile = tile;

};
__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */].inherits(_ol_source_Tile_.Event, __WEBPACK_IMPORTED_MODULE_3__events_event_js__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (_ol_source_Tile_);


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @enum {string}
 */
var _ol_source_TileEventType_ = {

  /**
   * Triggered when a tile starts loading.
   * @event ol.source.Tile.Event#tileloadstart
   * @api
   */
  TILELOADSTART: 'tileloadstart',

  /**
   * Triggered when a tile finishes loading, either when its data is loaded,
   * or when loading was aborted because the tile is no longer needed.
   * @event ol.source.Tile.Event#tileloadend
   * @api
   */
  TILELOADEND: 'tileloadend',

  /**
   * Triggered if tile loading results in an error.
   * @event ol.source.Tile.Event#tileloaderror
   * @api
   */
  TILELOADERROR: 'tileloaderror'

};

/* harmony default export */ __webpack_exports__["a"] = (_ol_source_TileEventType_);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2RkZDBmOTAzMjcwMjUwNWE0OTgiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9tYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9ldmVudHMvZXZlbnR0eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9leHRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL3Byb2ouanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvb2JqLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC90aWxlY29vcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL3RpbGVzdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvYXNzZXJ0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvcHJvai91bml0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvZXZlbnRzL2V2ZW50dGFyZ2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9ldmVudHMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL3RpbGVncmlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL2ltYWdlc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL3Byb2ovcHJvamVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvc2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2luZHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlY3Rvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FudmFzQm91bmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcEJvdW5kLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9sYXllcnR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL2xheWVyL2xheWVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9sYXllci9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvc291cmNlL3N0YXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9pbWFnZWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL2V4dGVudC9jb3JuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9wcm9qL3Byb2o0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9yZXByb2ouanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvcmVwcm9qL3RyaWFuZ3VsYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL3NvdXJjZS9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL3RpbGVyYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvc291cmNlL3h5ei5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvdGlsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvdGlsZWNhY2hlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmVsb2NpdHlsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29sb3JTY2FsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0aW9uQnVja2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9wYXJ0aWNsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL2xheWVyL2ltYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9vYmplY3RldmVudHR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL29ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL2Rpc3Bvc2FibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL2xheWVyL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL2Fzc2VydGlvbmVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9yZW5kZXIvZXZlbnR0eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9zb3VyY2UvaW1hZ2VjYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL2ltYWdlY2FudmFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9leHRlbnQvcmVsYXRpb25zaGlwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9zb3VyY2UvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL3NwaGVyZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvZ2VvbS9nZW9tZXRyeXR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL3Byb2ovZXBzZzM4NTcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL3Byb2ovZXBzZzQzMjYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL3Byb2ovcHJvamVjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL3Byb2ovdHJhbnNmb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvcmVwcm9qL2ltYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9hdHRyaWJ1dGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvdGlsZWdyaWQvdGlsZWdyaWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rlc3RsYXllci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvbGF5ZXIvdGlsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvbGF5ZXIvdGlsZXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9zb3VyY2Uvc3RhbWVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9zb3VyY2Uvb3NtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9zb3VyY2UvdGlsZWltYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9pbWFnZXRpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL2Vhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvc3RydWN0cy9scnVjYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvcmVwcm9qL3RpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL3NvdXJjZS91cmx0aWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC90aWxldXJsZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL3NvdXJjZS90aWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9zb3VyY2UvdGlsZWV2ZW50dHlwZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QWEsR0FBYixVQUFlLENBQVMsRUFBRSxDQUFTLEVBQUUsR0FBVyxFQUFFLEdBQVUsRUFBRSxHQUFXLEVBQUUsR0FBVztRQUNsRixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqQixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUNYLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUNWLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLElBQUksZ0JBQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7O09BSUE7SUFDSCx1QkFBUSxHQUFSLFVBQVUsQ0FBUyxFQUFFLENBQVM7UUFDN0IsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUFBLENBQUM7SUFFRjs7O09BR0E7SUFDSCxzQkFBTyxHQUFQLFVBQVMsQ0FBTTtRQUNkLE1BQU0sQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUFBLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7QUN0SEQ7SUFxQkksb0JBQVksUUFBZ0IsRUFBRSxRQUFnQixFQUFFLEtBQWdCO1FBcEJ4RCxVQUFLLEdBQWE7WUFDMUIsa0JBQWtCO1lBQ3BCLGtCQUFrQjtZQUNsQixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLGtCQUFrQjtZQUNsQixrQkFBa0I7WUFDbEIsa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQixrQkFBa0I7WUFDbEIsaUJBQWlCO1lBQ2pCLGlCQUFpQjtZQUNqQixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLGdCQUFnQjtZQUNoQixlQUFlO1NBQ1o7UUFLRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNuQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssWUFBWSxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDO0lBQ0wsQ0FBQztJQUVELDhCQUFTLEdBQVQsVUFBVyxRQUFnQixFQUFFLFFBQWdCO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFRCxzQkFBSSw0QkFBSTthQUFSO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsa0NBQWEsR0FBYixVQUFjLEtBQWE7UUFDdkIsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDYixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUNELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVGLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNiLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsNEJBQU8sR0FBUCxVQUFRLEtBQWE7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELDZCQUFRLEdBQVIsVUFBUyxLQUFhO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUwsaUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7OztBQzFERDtJQUlJLHlCQUFhLFVBQXNCO1FBRjNCLFlBQU8sR0FBa0IsRUFBRSxDQUFDO1FBR2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFCLENBQUM7SUFDTCxDQUFDO0lBRUQsK0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsWUFBeUI7WUFDM0MsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUMvQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBRUQsNkJBQUcsR0FBSCxVQUFLLENBQVksRUFBRSxDQUFTO1FBQ3hCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDeEQsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFDLENBQUMsSUFBSSxLQUFLLElBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUNELENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCw4QkFBSSxHQUFKLFVBQU0sU0FBYztRQUFwQixpQkFjQztRQWJHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBbUIsRUFBRSxDQUFTO1lBQ2hELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUN0QixTQUFTLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuRCxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVMsUUFBUTtvQkFDNUIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDM0MsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDO29CQUN6QixRQUFRLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUM7Z0JBQzdCLENBQUMsQ0FBQyxDQUFDO2dCQUNILFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN2QixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7OztBQy9DRDtJQVNJLG1CQUFZLENBQVMsRUFBRSxDQUFTLEVBQUUsTUFBYztRQUM1QyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRUQseUJBQUssR0FBTCxVQUFNLENBQVMsRUFBRSxDQUFTO1FBQ3RCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQsc0JBQUksNkJBQU07YUFBVjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFRCx3QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7QUN6QkQ7SUFLSSxlQUFZLFFBQWtCLEVBQUUsV0FBd0I7UUFDcEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsMkJBQVcsR0FBWCxVQUFhLENBQVMsRUFBRSxDQUFTO1FBQzdCLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQzVELElBQU0sY0FBYyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEcsSUFBTSxVQUFVLEdBQUcsQ0FBRSxjQUFjLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUcsQ0FBQyxDQUFDO1FBQ25JLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztRQUN0RCxJQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBQyxDQUFDLENBQUMsR0FBQyxjQUFjLENBQUM7UUFFdEMsSUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEcsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFBQSxDQUFDO0lBRUYscUJBQUssR0FBTCxVQUFPLENBQVM7UUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsR0FBRyxDQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUUsQ0FBRSxDQUFDO0lBQ3ZELENBQUM7SUFBQSxDQUFDO0lBRUY7Ozs7O09BS0c7SUFDSCwyQkFBVyxHQUFYLFVBQWEsQ0FBUyxFQUFFLENBQVM7UUFDN0IsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFFLENBQUM7UUFDckYsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBRSxJQUFJLEdBQUcsSUFBSSxDQUFFLENBQUM7UUFFMUQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7UUFDckMsSUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQzNELENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7UUFDekIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFBQSxDQUFDO0lBR0YsdUJBQU8sR0FBUCxVQUFTLEdBQVc7UUFDaEIsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQztJQUMvQixDQUFDO0lBQUEsQ0FBQztJQUVGLHVCQUFPLEdBQVAsVUFBUyxHQUFXO1FBQ2hCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUFBLENBQUM7SUFFRjs7Ozs7OztPQU9HO0lBQ0gsMEJBQVUsR0FBVixVQUFZLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7UUFDbEQsSUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFCLElBQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFMUIsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUV2Qyx5R0FBeUc7UUFDekcsaUZBQWlGO1FBQ2pGLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoQyxNQUFNLENBQUM7WUFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUNwQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUNwQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFO1lBQ2hCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUU7U0FDbkIsQ0FBQztJQUNOLENBQUM7SUFFRDs7Ozs7Ozs7OztPQVVHO0lBQ0gsdUJBQU8sR0FBUCxVQUFTLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxLQUFhLEVBQUUsSUFBWTtRQUM1RSxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXRDLGlEQUFpRDtRQUNqRCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFHTCxZQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2xIRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFdBQVcsd0JBQXdCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEZBQTBDLHVCQUF1Qjs7QUFFakU7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0EsMEJBQTBCLDZCQUE2QjtBQUN2RDtBQUNBLFlBQVksZ0JBQWdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3pDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0QkFBNEI7QUFDaEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLFdBQVcsa0NBQWtDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsUUFBUTtBQUM1QztBQUNBO0FBQ0EsR0FBRztBQUNILHlGQUF5QyxhQUFhO0FBQ3REO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osNkRBQTZEO0FBQzdELGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLGVBQWU7QUFDMUIsV0FBVyxRQUFRO0FBQ25CLFlBQVksa0NBQWtDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSx5QkFBeUIsT0FBTztBQUNoQztBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxlQUFlO0FBQzFCLFdBQVcsUUFBUTtBQUNuQixZQUFZLGtDQUFrQztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EseUJBQXlCLE9BQU87QUFDaEM7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDLFdBQVcsZUFBZTtBQUMxQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxRQUFRO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCwwRkFBMEMsT0FBTztBQUNqRDtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzFKQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSw0QkFBNEIsZ0JBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVcsc0JBQXNCO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBLHFGQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekMsc0JBQXNCLGVBQWU7QUFDckM7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLFlBQVksY0FBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFdBQVcsd0JBQXdCO0FBQ25DO0FBQ0EsWUFBWSx1QkFBdUI7QUFDbkM7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFdBQVcsdUJBQXVCO0FBQ2xDO0FBQ0EsWUFBWSxzQkFBc0I7QUFDbEM7QUFDQTs7O0FBR0E7QUFDQSxlQUFlLHVCQUF1QjtBQUN0QztBQUNBLFlBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG9CQUFvQjtBQUNqQztBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsb0JBQW9CO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDbFFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLGFBQWE7QUFDYixnQkFBZ0I7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLG1EQUFtRDtBQUN6RDtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3BDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXLDhCQUE4QjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3JGQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXLFVBQVU7QUFDckIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLGtCQUFrQjtBQUM3QixXQUFXLHNCQUFzQjtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVcsc0JBQXNCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0EsWUFBWSxlQUFlO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxtQkFBbUI7QUFDOUIsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsbUJBQW1CO0FBQzlCLFlBQVksYUFBYTtBQUN6QjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxXQUFXLGdCQUFnQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsU0FBUztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0Esc0JBQXNCLHNCQUFzQjtBQUM1QztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDbk9BO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRCw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakM7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksY0FBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QixXQUFXLHlCQUF5QjtBQUNwQztBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsdUJBQXVCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsdUJBQXVCO0FBQ3RELDBDQUEwQyxRQUFRO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsdUJBQXVCO0FBQ3RELDBDQUEwQyxRQUFRO0FBQ2xEO0FBQ0EsdUNBQXVDLFFBQVE7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDJCQUEyQjtBQUM3RCx5Q0FBeUMsUUFBUTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLE9BQU87QUFDbEIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxZQUFZO0FBQ3REO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsTUFBTTtBQUNqQixXQUFXLE9BQU87QUFDbEIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCLFdBQVcseUJBQXlCO0FBQ3BDO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsZ0JBQWdCO0FBQy9DO0FBQ0EsMENBQTBDLFFBQVE7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix1QkFBdUI7QUFDdEQsMENBQTBDLFFBQVE7QUFDbEQ7QUFDQTtBQUNBLHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywyQkFBMkI7QUFDN0QseUNBQXlDLFFBQVE7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQztBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxlQUFlO0FBQzFCLFdBQVcsZ0JBQWdCO0FBQzNCLFdBQVcsUUFBUTtBQUNuQixZQUFZLGVBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixXQUFXLGdCQUFnQjtBQUMzQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxlQUFlO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNoSkE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDM0VBOzs7QUFHQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLG1CQUFtQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsbUJBQW1CO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdENBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCLFdBQVcsbUJBQW1CO0FBQzlCLFdBQVcscUJBQXFCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxtQkFBbUI7QUFDOUIsWUFBWSxxQkFBcUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixZQUFZLCtCQUErQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0JBQXNCO0FBQzlCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVywyQkFBMkI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsWUFBWSxtQkFBbUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVGQUF1QyxjQUFjO0FBQ3JEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNsTUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHVCQUF1QjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsV0FBVyw4QkFBOEI7QUFDekMsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxvQkFBb0I7QUFDL0IsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxRQUFRO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw2QkFBNkI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLGFBQWE7OztBQUdoQjtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsUUFBUTtBQUM5RDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixXQUFXLE9BQU87QUFDbEIsV0FBVyx1QkFBdUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsU0FBUztBQUM1RCxxREFBcUQsU0FBUztBQUM5RDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxpREFBaUQ7QUFDNUQsV0FBVyxHQUFHO0FBQ2QsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsV0FBVztBQUN0QixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFlBQVksVUFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxjQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsWUFBWSxlQUFlO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsY0FBYztBQUN6QixXQUFXLFdBQVc7QUFDdEIsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsV0FBVztBQUN0QixZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixXQUFXLE9BQU87QUFDbEIsV0FBVyxjQUFjO0FBQ3pCLFlBQVksYUFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsWUFBWSxjQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxXQUFXO0FBQ3RCLFlBQVksVUFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsY0FBYztBQUN6QixZQUFZLGFBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixZQUFZLGFBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsT0FBTztBQUNsQixXQUFXLGNBQWM7QUFDekIsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLGVBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksYUFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsV0FBVyxXQUFXO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsWUFBWTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDamlCQSxxQ0FBd0M7QUFFeEMsdUNBQThDO0FBRzlDO0lBTUUsbUJBQVksT0FBWTtRQUZoQixTQUFJLEdBQVEsSUFBSSxDQUFDO1FBR3ZCLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVsQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUM7SUFDSCxDQUFDO0lBRUQsK0JBQVcsR0FBWDtRQUNFLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxjQUFXLENBQUM7WUFDM0MsTUFBTSxFQUFFLElBQUksZ0JBQWMsQ0FBQztnQkFDekIsS0FBSyxFQUFFLE9BQU87YUFDZixDQUFDO1NBQ0gsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCw0QkFBUSxHQUFSLFVBQVMsR0FBUTtRQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUN4QyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBR0gsZ0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN2Q0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRCxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsV0FBVyx1QkFBdUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0ZBQXNDOztBQUV0QztBQUNBO0FBQ0EsMEZBQTBDLHVCQUF1Qjs7QUFFakU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTs7O0FBR0E7QUFDQSwwQkFBMEIsZ0NBQWdDO0FBQzFEO0FBQ0EsWUFBWSxlQUFlO0FBQzNCO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDckdBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVcseUJBQXlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDJCQUEyQixJQUFJO0FBQy9CLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFOztBQUVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxpQkFBaUIsbUNBQW1DO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsaUJBQWlCLGlDQUFpQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2SEE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVcsdUJBQXVCO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLElBQUkseUJBQXlCLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXLDRCQUE0QjtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2RUFBNkU7QUFDN0U7QUFDQTtBQUNBLHFFQUFxRTtBQUNyRTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzQkFBc0I7QUFDNUM7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsbUJBQW1CO0FBQzlCLFdBQVcsT0FBTztBQUNsQixZQUFZLFNBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msb0JBQW9CO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsU0FBUztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLG9CQUFvQjtBQUMvQixZQUFZLFNBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGtCQUFrQjtBQUM3QixXQUFXLHFCQUFxQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcFhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUTtBQUNuQixXQUFXLHdCQUF3QjtBQUNuQyxXQUFXLGlCQUFpQjtBQUM1QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxZQUFZLG9EQUFvRDtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxZQUFZLGtCQUFrQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzVLQTs7O0FBR0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLDZCQUE2Qix5QkFBeUI7QUFDdEQ7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlEQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxXQUFXLHFEQUFxRDtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksRUFBRTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsOEJBQThCLGlCQUFpQjtBQUMvQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxFQUFFO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsK0ZBQStDO0FBQy9DO0FBQ0EsOEJBQThCLGlCQUFpQjtBQUMvQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsOEJBQThCLGlCQUFpQjtBQUMvQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLFlBQVksZUFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLE9BQU87QUFDbkM7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsT0FBTztBQUNuQztBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxZQUFZLEVBQUU7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsWUFBWSxFQUFFO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaUJBQWlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOzs7QUFHQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YseUJBQXlCLGlCQUFpQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSwwQkFBMEI7QUFDbEM7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXLG1CQUFtQjtBQUM5QixXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVywwQkFBMEI7QUFDckM7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLHFDQUFxQywwQkFBMEI7QUFDL0QsdUNBQXVDLDBCQUEwQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsWUFBWSxrQkFBa0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL1NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXLHdCQUF3QjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSx3QkFBd0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFlBQVksdUJBQXVCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxxQkFBcUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFdBQVcsZ0JBQWdCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxXQUFXLHdCQUF3QjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFdBQVcsdUJBQXVCO0FBQ2xDLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3pNQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxxQkFBcUI7QUFDaEMsWUFBWSx1QkFBdUI7QUFDbkM7QUFDQTtBQUNBLGtCQUFrQixHQUFHO0FBQ3JCLGtCQUFrQixHQUFHO0FBQ3JCLGtCQUFrQixHQUFHO0FBQ3JCLHNCQUFzQixJQUFJO0FBQzFCO0FBQ0E7QUFDQSxlQUFlLGFBQWE7QUFDNUIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsbUJBQW1CO0FBQ2xDLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw2RkFBNkMsU0FBUyxHQUFHO0FBQ3pEO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsV0FBVyxlQUFlO0FBQzFCLFdBQVcscUJBQXFCO0FBQ2hDLFlBQVksdUJBQXVCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxXQUFXLCtCQUErQjtBQUMxQyxZQUFZLHVCQUF1QjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsYUFBYTtBQUM1QixlQUFlLE9BQU87QUFDdEIsZUFBZSxtQkFBbUI7QUFDbEMsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsbUJBQW1CO0FBQzlCLFlBQVksaUJBQWlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLGVBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDBCQUEwQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixhQUFhO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVyxxQkFBcUI7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxzQkFBc0I7O0FBRXRCOztBQUVBOzs7QUFHQTtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLDhCQUE4QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLE9BQU87QUFDbEIsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsc0NBQXNDO0FBQ2pEO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIscUJBQXFCO0FBQ25ELGdDQUFnQyxxQkFBcUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFNBQVM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxtQkFBbUI7QUFDOUIsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxZQUFZLHFCQUFxQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCLFlBQVksc0JBQXNCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixZQUFZLGFBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxtQkFBbUI7QUFDOUIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxvQkFBb0I7QUFDL0IsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxtQkFBbUI7QUFDOUI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHNCQUFzQixxQkFBcUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLGdCQUFnQjtBQUNoQixXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQzFVQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEiLCJmaWxlIjoib3BlbmxheWVycy12ZWxvY2l0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDM4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjZGRkMGY5MDMyNzAyNTA1YTQ5OCIsInZhciBfb2xfID0ge307XG5cblxuLyoqXG4gKiBDb25zdGFudHMgZGVmaW5lZCB3aXRoIHRoZSBkZWZpbmUgdGFnIGNhbm5vdCBiZSBjaGFuZ2VkIGluIGFwcGxpY2F0aW9uXG4gKiBjb2RlLCBidXQgY2FuIGJlIHNldCBhdCBjb21waWxlIHRpbWUuXG4gKiBTb21lIHJlZHVjZSB0aGUgc2l6ZSBvZiB0aGUgYnVpbGQgaW4gYWR2YW5jZWQgY29tcGlsZSBtb2RlLlxuICovXG5cblxuLyoqXG4gKiBAZGVmaW5lIHtib29sZWFufSBBc3N1bWUgdG91Y2guICBEZWZhdWx0IGlzIGBmYWxzZWAuXG4gKi9cbl9vbF8uQVNTVU1FX1RPVUNIID0gZmFsc2U7XG5cblxuLyoqXG4gKiBUT0RPOiByZW5hbWUgdGhpcyB0byBzb21ldGhpbmcgaGF2aW5nIHRvIGRvIHdpdGggdGlsZSBncmlkc1xuICogc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9vcGVubGF5ZXJzL29wZW5sYXllcnMvaXNzdWVzLzIwNzZcbiAqIEBkZWZpbmUge251bWJlcn0gRGVmYXVsdCBtYXhpbXVtIHpvb20gZm9yIGRlZmF1bHQgdGlsZSBncmlkcy5cbiAqL1xuX29sXy5ERUZBVUxUX01BWF9aT09NID0gNDI7XG5cblxuLyoqXG4gKiBAZGVmaW5lIHtudW1iZXJ9IERlZmF1bHQgbWluIHpvb20gbGV2ZWwgZm9yIHRoZSBtYXAgdmlldy4gIERlZmF1bHQgaXMgYDBgLlxuICovXG5fb2xfLkRFRkFVTFRfTUlOX1pPT00gPSAwO1xuXG5cbi8qKlxuICogQGRlZmluZSB7bnVtYmVyfSBEZWZhdWx0IG1heGltdW0gYWxsb3dlZCB0aHJlc2hvbGQgIChpbiBwaXhlbHMpIGZvclxuICogICAgIHJlcHJvamVjdGlvbiB0cmlhbmd1bGF0aW9uLiBEZWZhdWx0IGlzIGAwLjVgLlxuICovXG5fb2xfLkRFRkFVTFRfUkFTVEVSX1JFUFJPSkVDVElPTl9FUlJPUl9USFJFU0hPTEQgPSAwLjU7XG5cblxuLyoqXG4gKiBAZGVmaW5lIHtudW1iZXJ9IERlZmF1bHQgdGlsZSBzaXplLlxuICovXG5fb2xfLkRFRkFVTFRfVElMRV9TSVpFID0gMjU2O1xuXG5cbi8qKlxuICogQGRlZmluZSB7c3RyaW5nfSBEZWZhdWx0IFdNUyB2ZXJzaW9uLlxuICovXG5fb2xfLkRFRkFVTFRfV01TX1ZFUlNJT04gPSAnMS4zLjAnO1xuXG5cbi8qKlxuICogQGRlZmluZSB7Ym9vbGVhbn0gRW5hYmxlIHRoZSBDYW52YXMgcmVuZGVyZXIuICBEZWZhdWx0IGlzIGB0cnVlYC4gU2V0dGluZ1xuICogICAgIHRoaXMgdG8gZmFsc2UgYXQgY29tcGlsZSB0aW1lIGluIGFkdmFuY2VkIG1vZGUgcmVtb3ZlcyBhbGwgY29kZVxuICogICAgIHN1cHBvcnRpbmcgdGhlIENhbnZhcyByZW5kZXJlciBmcm9tIHRoZSBidWlsZC5cbiAqL1xuX29sXy5FTkFCTEVfQ0FOVkFTID0gdHJ1ZTtcblxuXG4vKipcbiAqIEBkZWZpbmUge2Jvb2xlYW59IEVuYWJsZSBpbnRlZ3JhdGlvbiB3aXRoIHRoZSBQcm9qNGpzIGxpYnJhcnkuICBEZWZhdWx0IGlzXG4gKiAgICAgYHRydWVgLlxuICovXG5fb2xfLkVOQUJMRV9QUk9KNEpTID0gdHJ1ZTtcblxuXG4vKipcbiAqIEBkZWZpbmUge2Jvb2xlYW59IEVuYWJsZSBhdXRvbWF0aWMgcmVwcm9qZWN0aW9uIG9mIHJhc3RlciBzb3VyY2VzLiBEZWZhdWx0IGlzXG4gKiAgICAgYHRydWVgLlxuICovXG5fb2xfLkVOQUJMRV9SQVNURVJfUkVQUk9KRUNUSU9OID0gdHJ1ZTtcblxuXG4vKipcbiAqIEBkZWZpbmUge2Jvb2xlYW59IEVuYWJsZSB0aGUgV2ViR0wgcmVuZGVyZXIuICBEZWZhdWx0IGlzIGB0cnVlYC4gU2V0dGluZ1xuICogICAgIHRoaXMgdG8gZmFsc2UgYXQgY29tcGlsZSB0aW1lIGluIGFkdmFuY2VkIG1vZGUgcmVtb3ZlcyBhbGwgY29kZVxuICogICAgIHN1cHBvcnRpbmcgdGhlIFdlYkdMIHJlbmRlcmVyIGZyb20gdGhlIGJ1aWxkLlxuICovXG5fb2xfLkVOQUJMRV9XRUJHTCA9IHRydWU7XG5cblxuLyoqXG4gKiBAZGVmaW5lIHtib29sZWFufSBJbmNsdWRlIGRlYnVnZ2FibGUgc2hhZGVyIHNvdXJjZXMuICBEZWZhdWx0IGlzIGB0cnVlYC5cbiAqICAgICBUaGlzIHNob3VsZCBiZSBzZXQgdG8gYGZhbHNlYCBmb3IgcHJvZHVjdGlvbiBidWlsZHMgKGlmIGBvbC5FTkFCTEVfV0VCR0xgXG4gKiAgICAgaXMgYHRydWVgKS5cbiAqL1xuX29sXy5ERUJVR19XRUJHTCA9IHRydWU7XG5cblxuLyoqXG4gKiBAZGVmaW5lIHtudW1iZXJ9IFRoZSBzaXplIGluIHBpeGVscyBvZiB0aGUgZmlyc3QgYXRsYXMgaW1hZ2UuIERlZmF1bHQgaXNcbiAqIGAyNTZgLlxuICovXG5fb2xfLklOSVRJQUxfQVRMQVNfU0laRSA9IDI1NjtcblxuXG4vKipcbiAqIEBkZWZpbmUge251bWJlcn0gVGhlIG1heGltdW0gc2l6ZSBpbiBwaXhlbHMgb2YgYXRsYXMgaW1hZ2VzLiBEZWZhdWx0IGlzXG4gKiBgLTFgLCBtZWFuaW5nIGl0IGlzIG5vdCB1c2VkIChhbmQgYG9sLldFQkdMX01BWF9URVhUVVJFX1NJWkVgIGlzXG4gKiB1c2VkIGluc3RlYWQpLlxuICovXG5fb2xfLk1BWF9BVExBU19TSVpFID0gLTE7XG5cblxuLyoqXG4gKiBAZGVmaW5lIHtudW1iZXJ9IE1heGltdW0gbW91c2Ugd2hlZWwgZGVsdGEuXG4gKi9cbl9vbF8uTU9VU0VXSEVFTFpPT01fTUFYREVMVEEgPSAxO1xuXG5cbi8qKlxuICogQGRlZmluZSB7bnVtYmVyfSBNYXhpbXVtIHdpZHRoIGFuZC9vciBoZWlnaHQgZXh0ZW50IHJhdGlvIHRoYXQgZGV0ZXJtaW5lc1xuICogd2hlbiB0aGUgb3ZlcnZpZXcgbWFwIHNob3VsZCBiZSB6b29tZWQgb3V0LlxuICovXG5fb2xfLk9WRVJWSUVXTUFQX01BWF9SQVRJTyA9IDAuNzU7XG5cblxuLyoqXG4gKiBAZGVmaW5lIHtudW1iZXJ9IE1pbmltdW0gd2lkdGggYW5kL29yIGhlaWdodCBleHRlbnQgcmF0aW8gdGhhdCBkZXRlcm1pbmVzXG4gKiB3aGVuIHRoZSBvdmVydmlldyBtYXAgc2hvdWxkIGJlIHpvb21lZCBpbi5cbiAqL1xuX29sXy5PVkVSVklFV01BUF9NSU5fUkFUSU8gPSAwLjE7XG5cblxuLyoqXG4gKiBAZGVmaW5lIHtudW1iZXJ9IE1heGltdW0gbnVtYmVyIG9mIHNvdXJjZSB0aWxlcyBmb3IgcmFzdGVyIHJlcHJvamVjdGlvbiBvZlxuICogICAgIGEgc2luZ2xlIHRpbGUuXG4gKiAgICAgSWYgdG9vIG1hbnkgc291cmNlIHRpbGVzIGFyZSBkZXRlcm1pbmVkIHRvIGJlIGxvYWRlZCB0byBjcmVhdGUgYSBzaW5nbGVcbiAqICAgICByZXByb2plY3RlZCB0aWxlIHRoZSBicm93c2VyIGNhbiBiZWNvbWUgdW5yZXNwb25zaXZlIG9yIGV2ZW4gY3Jhc2guXG4gKiAgICAgVGhpcyBjYW4gaGFwcGVuIGlmIHRoZSBkZXZlbG9wZXIgZGVmaW5lcyBwcm9qZWN0aW9ucyBpbXByb3Blcmx5IGFuZC9vclxuICogICAgIHdpdGggdW5saW1pdGVkIGV4dGVudHMuXG4gKiAgICAgSWYgdG9vIG1hbnkgdGlsZXMgYXJlIHJlcXVpcmVkLCBubyB0aWxlcyBhcmUgbG9hZGVkIGFuZFxuICogICAgIGBvbC5UaWxlU3RhdGUuRVJST1JgIHN0YXRlIGlzIHNldC4gRGVmYXVsdCBpcyBgMTAwYC5cbiAqL1xuX29sXy5SQVNURVJfUkVQUk9KRUNUSU9OX01BWF9TT1VSQ0VfVElMRVMgPSAxMDA7XG5cblxuLyoqXG4gKiBAZGVmaW5lIHtudW1iZXJ9IE1heGltdW0gbnVtYmVyIG9mIHN1YmRpdmlzaW9uIHN0ZXBzIGR1cmluZyByYXN0ZXJcbiAqICAgICByZXByb2plY3Rpb24gdHJpYW5ndWxhdGlvbi4gUHJldmVudHMgaGlnaCBtZW1vcnkgdXNhZ2UgYW5kIGxhcmdlXG4gKiAgICAgbnVtYmVyIG9mIHByb2o0IGNhbGxzIChmb3IgY2VydGFpbiB0cmFuc2Zvcm1hdGlvbnMgYW5kIGFyZWFzKS5cbiAqICAgICBBdCBtb3N0IGAyKigyXnRoaXMpYCB0cmlhbmdsZXMgYXJlIGNyZWF0ZWQgZm9yIGVhY2ggdHJpYW5ndWxhdGVkXG4gKiAgICAgZXh0ZW50ICh0aWxlL2ltYWdlKS4gRGVmYXVsdCBpcyBgMTBgLlxuICovXG5fb2xfLlJBU1RFUl9SRVBST0pFQ1RJT05fTUFYX1NVQkRJVklTSU9OID0gMTA7XG5cblxuLyoqXG4gKiBAZGVmaW5lIHtudW1iZXJ9IE1heGltdW0gYWxsb3dlZCBzaXplIG9mIHRyaWFuZ2xlIHJlbGF0aXZlIHRvIHdvcmxkIHdpZHRoLlxuICogICAgIFdoZW4gdHJhbnNmb3JtaW5nIGNvcm5lcnMgb2Ygd29ybGQgZXh0ZW50IGJldHdlZW4gY2VydGFpbiBwcm9qZWN0aW9ucyxcbiAqICAgICB0aGUgcmVzdWx0aW5nIHRyaWFuZ3VsYXRpb24gc2VlbXMgdG8gaGF2ZSB6ZXJvIGVycm9yIGFuZCBubyBzdWJkaXZpc2lvblxuICogICAgIGlzIHBlcmZvcm1lZC5cbiAqICAgICBJZiB0aGUgdHJpYW5nbGUgd2lkdGggaXMgbW9yZSB0aGFuIHRoaXMgKHJlbGF0aXZlIHRvIHdvcmxkIHdpZHRoOyAwLTEpLFxuICogICAgIHN1YmRpdmlzb24gaXMgZm9yY2VkICh1cCB0byBgb2wuUkFTVEVSX1JFUFJPSkVDVElPTl9NQVhfU1VCRElWSVNJT05gKS5cbiAqICAgICBEZWZhdWx0IGlzIGAwLjI1YC5cbiAqL1xuX29sXy5SQVNURVJfUkVQUk9KRUNUSU9OX01BWF9UUklBTkdMRV9XSURUSCA9IDAuMjU7XG5cblxuLyoqXG4gKiBAZGVmaW5lIHtudW1iZXJ9IFRvbGVyYW5jZSBmb3IgZ2VvbWV0cnkgc2ltcGxpZmljYXRpb24gaW4gZGV2aWNlIHBpeGVscy5cbiAqL1xuX29sXy5TSU1QTElGWV9UT0xFUkFOQ0UgPSAwLjU7XG5cblxuLyoqXG4gKiBAZGVmaW5lIHtudW1iZXJ9IFRleHR1cmUgY2FjaGUgaGlnaCB3YXRlciBtYXJrLlxuICovXG5fb2xfLldFQkdMX1RFWFRVUkVfQ0FDSEVfSElHSF9XQVRFUl9NQVJLID0gMTAyNDtcblxuXG4vKipcbiAqIEBkZWZpbmUge3N0cmluZ30gT3BlbkxheWVycyB2ZXJzaW9uLlxuICovXG5fb2xfLlZFUlNJT04gPSAndjQuNi41JztcblxuXG4vKipcbiAqIFRoZSBtYXhpbXVtIHN1cHBvcnRlZCBXZWJHTCB0ZXh0dXJlIHNpemUgaW4gcGl4ZWxzLiBJZiBXZWJHTCBpcyBub3RcbiAqIHN1cHBvcnRlZCwgdGhlIHZhbHVlIGlzIHNldCB0byBgdW5kZWZpbmVkYC5cbiAqIEBjb25zdFxuICogQHR5cGUge251bWJlcnx1bmRlZmluZWR9XG4gKi9cbl9vbF8uV0VCR0xfTUFYX1RFWFRVUkVfU0laRTsgLy8gdmFsdWUgaXMgc2V0IGluIGBvbC5oYXNgXG5cblxuLyoqXG4gKiBMaXN0IG9mIHN1cHBvcnRlZCBXZWJHTCBleHRlbnNpb25zLlxuICogQGNvbnN0XG4gKiBAdHlwZSB7QXJyYXkuPHN0cmluZz59XG4gKi9cbl9vbF8uV0VCR0xfRVhURU5TSU9OUzsgLy8gdmFsdWUgaXMgc2V0IGluIGBvbC5oYXNgXG5cblxuLyoqXG4gKiBJbmhlcml0IHRoZSBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIG9uZSBjb25zdHJ1Y3RvciBpbnRvIGFub3RoZXIuXG4gKlxuICogVXNhZ2U6XG4gKlxuICogICAgIGZ1bmN0aW9uIFBhcmVudENsYXNzKGEsIGIpIHsgfVxuICogICAgIFBhcmVudENsYXNzLnByb3RvdHlwZS5mb28gPSBmdW5jdGlvbihhKSB7IH1cbiAqXG4gKiAgICAgZnVuY3Rpb24gQ2hpbGRDbGFzcyhhLCBiLCBjKSB7XG4gKiAgICAgICAvLyBDYWxsIHBhcmVudCBjb25zdHJ1Y3RvclxuICogICAgICAgUGFyZW50Q2xhc3MuY2FsbCh0aGlzLCBhLCBiKTtcbiAqICAgICB9XG4gKiAgICAgb2wuaW5oZXJpdHMoQ2hpbGRDbGFzcywgUGFyZW50Q2xhc3MpO1xuICpcbiAqICAgICB2YXIgY2hpbGQgPSBuZXcgQ2hpbGRDbGFzcygnYScsICdiJywgJ3NlZScpO1xuICogICAgIGNoaWxkLmZvbygpOyAvLyBUaGlzIHdvcmtzLlxuICpcbiAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBjaGlsZEN0b3IgQ2hpbGQgY29uc3RydWN0b3IuXG4gKiBAcGFyYW0geyFGdW5jdGlvbn0gcGFyZW50Q3RvciBQYXJlbnQgY29uc3RydWN0b3IuXG4gKiBAZnVuY3Rpb25cbiAqIEBhcGlcbiAqL1xuX29sXy5pbmhlcml0cyA9IGZ1bmN0aW9uKGNoaWxkQ3RvciwgcGFyZW50Q3Rvcikge1xuICBjaGlsZEN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShwYXJlbnRDdG9yLnByb3RvdHlwZSk7XG4gIGNoaWxkQ3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjaGlsZEN0b3I7XG59O1xuXG5cbi8qKlxuICogQSByZXVzYWJsZSBmdW5jdGlvbiwgdXNlZCBlLmcuIGFzIGEgZGVmYXVsdCBmb3IgY2FsbGJhY2tzLlxuICpcbiAqIEByZXR1cm4ge3VuZGVmaW5lZH0gTm90aGluZy5cbiAqL1xuX29sXy5udWxsRnVuY3Rpb24gPSBmdW5jdGlvbigpIHt9O1xuXG5cbi8qKlxuICogR2V0cyBhIHVuaXF1ZSBJRCBmb3IgYW4gb2JqZWN0LiBUaGlzIG11dGF0ZXMgdGhlIG9iamVjdCBzbyB0aGF0IGZ1cnRoZXIgY2FsbHNcbiAqIHdpdGggdGhlIHNhbWUgb2JqZWN0IGFzIGEgcGFyYW1ldGVyIHJldHVybnMgdGhlIHNhbWUgdmFsdWUuIFVuaXF1ZSBJRHMgYXJlIGdlbmVyYXRlZFxuICogYXMgYSBzdHJpY3RseSBpbmNyZWFzaW5nIHNlcXVlbmNlLiBBZGFwdGVkIGZyb20gZ29vZy5nZXRVaWQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIGdldCB0aGUgdW5pcXVlIElEIGZvci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIHVuaXF1ZSBJRCBmb3IgdGhlIG9iamVjdC5cbiAqL1xuX29sXy5nZXRVaWQgPSBmdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuIG9iai5vbF91aWQgfHxcbiAgICAgIChvYmoub2xfdWlkID0gKytfb2xfLnVpZENvdW50ZXJfKTtcbn07XG5cblxuLyoqXG4gKiBDb3VudGVyIGZvciBnZXRVaWQuXG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQHByaXZhdGVcbiAqL1xuX29sXy51aWRDb3VudGVyXyA9IDA7XG5leHBvcnQgZGVmYXVsdCBfb2xfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF9vbF9hc3NlcnRzXyBmcm9tICcuL2Fzc2VydHMuanMnO1xudmFyIF9vbF9tYXRoXyA9IHt9O1xuXG5cbi8qKlxuICogVGFrZXMgYSBudW1iZXIgYW5kIGNsYW1wcyBpdCB0byB3aXRoaW4gdGhlIHByb3ZpZGVkIGJvdW5kcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgaW5wdXQgbnVtYmVyLlxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBUaGUgbWluaW11bSB2YWx1ZSB0byByZXR1cm4uXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IFRoZSBtYXhpbXVtIHZhbHVlIHRvIHJldHVybi5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGlucHV0IG51bWJlciBpZiBpdCBpcyB3aXRoaW4gYm91bmRzLCBvciB0aGUgbmVhcmVzdFxuICogICAgIG51bWJlciB3aXRoaW4gdGhlIGJvdW5kcy5cbiAqL1xuX29sX21hdGhfLmNsYW1wID0gZnVuY3Rpb24odmFsdWUsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgbWluKSwgbWF4KTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGh5cGVyYm9saWMgY29zaW5lIG9mIGEgZ2l2ZW4gbnVtYmVyLiBUaGUgbWV0aG9kIHdpbGwgdXNlIHRoZVxuICogbmF0aXZlIGBNYXRoLmNvc2hgIGZ1bmN0aW9uIGlmIGl0IGlzIGF2YWlsYWJsZSwgb3RoZXJ3aXNlIHRoZSBoeXBlcmJvbGljXG4gKiBjb3NpbmUgd2lsbCBiZSBjYWxjdWxhdGVkIHZpYSB0aGUgcmVmZXJlbmNlIGltcGxlbWVudGF0aW9uIG9mIHRoZSBNb3ppbGxhXG4gKiBkZXZlbG9wZXIgbmV0d29yay5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0geCBYLlxuICogQHJldHVybiB7bnVtYmVyfSBIeXBlcmJvbGljIGNvc2luZSBvZiB4LlxuICovXG5fb2xfbWF0aF8uY29zaCA9IChmdW5jdGlvbigpIHtcbiAgLy8gV3JhcHBlZCBpbiBhIGlpZmUsIHRvIHNhdmUgdGhlIG92ZXJoZWFkIG9mIGNoZWNraW5nIGZvciB0aGUgbmF0aXZlXG4gIC8vIGltcGxlbWVudGF0aW9uIG9uIGV2ZXJ5IGludm9jYXRpb24uXG4gIHZhciBjb3NoO1xuICBpZiAoJ2Nvc2gnIGluIE1hdGgpIHtcbiAgICAvLyBUaGUgZW52aXJvbm1lbnQgc3VwcG9ydHMgdGhlIG5hdGl2ZSBNYXRoLmNvc2ggZnVuY3Rpb24sIHVzZSBpdOKAplxuICAgIGNvc2ggPSBNYXRoLmNvc2g7XG4gIH0gZWxzZSB7XG4gICAgLy8g4oCmIGVsc2UsIHVzZSB0aGUgcmVmZXJlbmNlIGltcGxlbWVudGF0aW9uIG9mIE1ETjpcbiAgICBjb3NoID0gZnVuY3Rpb24oeCkge1xuICAgICAgdmFyIHkgPSBNYXRoLmV4cCh4KTtcbiAgICAgIHJldHVybiAoeSArIDEgLyB5KSAvIDI7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gY29zaDtcbn0oKSk7XG5cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0geCBYLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgc21hbGxlc3QgcG93ZXIgb2YgdHdvIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB4LlxuICovXG5fb2xfbWF0aF8ucm91bmRVcFRvUG93ZXJPZlR3byA9IGZ1bmN0aW9uKHgpIHtcbiAgX29sX2Fzc2VydHNfLmFzc2VydCgwIDwgeCwgMjkpOyAvLyBgeGAgbXVzdCBiZSBncmVhdGVyIHRoYW4gYDBgXG4gIHJldHVybiBNYXRoLnBvdygyLCBNYXRoLmNlaWwoTWF0aC5sb2coeCkgLyBNYXRoLkxOMikpO1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIHNxdWFyZSBvZiB0aGUgY2xvc2VzdCBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBwb2ludCAoeCwgeSkgYW5kIHRoZVxuICogbGluZSBzZWdtZW50ICh4MSwgeTEpIHRvICh4MiwgeTIpLlxuICogQHBhcmFtIHtudW1iZXJ9IHggWC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB5IFkuXG4gKiBAcGFyYW0ge251bWJlcn0geDEgWDEuXG4gKiBAcGFyYW0ge251bWJlcn0geTEgWTEuXG4gKiBAcGFyYW0ge251bWJlcn0geDIgWDIuXG4gKiBAcGFyYW0ge251bWJlcn0geTIgWTIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFNxdWFyZWQgZGlzdGFuY2UuXG4gKi9cbl9vbF9tYXRoXy5zcXVhcmVkU2VnbWVudERpc3RhbmNlID0gZnVuY3Rpb24oeCwgeSwgeDEsIHkxLCB4MiwgeTIpIHtcbiAgdmFyIGR4ID0geDIgLSB4MTtcbiAgdmFyIGR5ID0geTIgLSB5MTtcbiAgaWYgKGR4ICE9PSAwIHx8IGR5ICE9PSAwKSB7XG4gICAgdmFyIHQgPSAoKHggLSB4MSkgKiBkeCArICh5IC0geTEpICogZHkpIC8gKGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICBpZiAodCA+IDEpIHtcbiAgICAgIHgxID0geDI7XG4gICAgICB5MSA9IHkyO1xuICAgIH0gZWxzZSBpZiAodCA+IDApIHtcbiAgICAgIHgxICs9IGR4ICogdDtcbiAgICAgIHkxICs9IGR5ICogdDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIF9vbF9tYXRoXy5zcXVhcmVkRGlzdGFuY2UoeCwgeSwgeDEsIHkxKTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzcXVhcmUgb2YgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHBvaW50cyAoeDEsIHkxKSBhbmQgKHgyLCB5MikuXG4gKiBAcGFyYW0ge251bWJlcn0geDEgWDEuXG4gKiBAcGFyYW0ge251bWJlcn0geTEgWTEuXG4gKiBAcGFyYW0ge251bWJlcn0geDIgWDIuXG4gKiBAcGFyYW0ge251bWJlcn0geTIgWTIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFNxdWFyZWQgZGlzdGFuY2UuXG4gKi9cbl9vbF9tYXRoXy5zcXVhcmVkRGlzdGFuY2UgPSBmdW5jdGlvbih4MSwgeTEsIHgyLCB5Mikge1xuICB2YXIgZHggPSB4MiAtIHgxO1xuICB2YXIgZHkgPSB5MiAtIHkxO1xuICByZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XG59O1xuXG5cbi8qKlxuICogU29sdmVzIHN5c3RlbSBvZiBsaW5lYXIgZXF1YXRpb25zIHVzaW5nIEdhdXNzaWFuIGVsaW1pbmF0aW9uIG1ldGhvZC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5LjxBcnJheS48bnVtYmVyPj59IG1hdCBBdWdtZW50ZWQgbWF0cml4IChuIHggbiArIDEgY29sdW1uKVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW4gcm93LW1ham9yIG9yZGVyLlxuICogQHJldHVybiB7QXJyYXkuPG51bWJlcj59IFRoZSByZXN1bHRpbmcgdmVjdG9yLlxuICovXG5fb2xfbWF0aF8uc29sdmVMaW5lYXJTeXN0ZW0gPSBmdW5jdGlvbihtYXQpIHtcbiAgdmFyIG4gPSBtYXQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgLy8gRmluZCBtYXggaW4gdGhlIGktdGggY29sdW1uIChpZ25vcmluZyBpIC0gMSBmaXJzdCByb3dzKVxuICAgIHZhciBtYXhSb3cgPSBpO1xuICAgIHZhciBtYXhFbCA9IE1hdGguYWJzKG1hdFtpXVtpXSk7XG4gICAgZm9yICh2YXIgciA9IGkgKyAxOyByIDwgbjsgcisrKSB7XG4gICAgICB2YXIgYWJzVmFsdWUgPSBNYXRoLmFicyhtYXRbcl1baV0pO1xuICAgICAgaWYgKGFic1ZhbHVlID4gbWF4RWwpIHtcbiAgICAgICAgbWF4RWwgPSBhYnNWYWx1ZTtcbiAgICAgICAgbWF4Um93ID0gcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWF4RWwgPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsOyAvLyBtYXRyaXggaXMgc2luZ3VsYXJcbiAgICB9XG5cbiAgICAvLyBTd2FwIG1heCByb3cgd2l0aCBpLXRoIChjdXJyZW50KSByb3dcbiAgICB2YXIgdG1wID0gbWF0W21heFJvd107XG4gICAgbWF0W21heFJvd10gPSBtYXRbaV07XG4gICAgbWF0W2ldID0gdG1wO1xuXG4gICAgLy8gU3VidHJhY3QgdGhlIGktdGggcm93IHRvIG1ha2UgYWxsIHRoZSByZW1haW5pbmcgcm93cyAwIGluIHRoZSBpLXRoIGNvbHVtblxuICAgIGZvciAodmFyIGogPSBpICsgMTsgaiA8IG47IGorKykge1xuICAgICAgdmFyIGNvZWYgPSAtbWF0W2pdW2ldIC8gbWF0W2ldW2ldO1xuICAgICAgZm9yICh2YXIgayA9IGk7IGsgPCBuICsgMTsgaysrKSB7XG4gICAgICAgIGlmIChpID09IGspIHtcbiAgICAgICAgICBtYXRbal1ba10gPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1hdFtqXVtrXSArPSBjb2VmICogbWF0W2ldW2tdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU29sdmUgQXg9YiBmb3IgdXBwZXIgdHJpYW5ndWxhciBtYXRyaXggQSAobWF0KVxuICB2YXIgeCA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgbCA9IG4gLSAxOyBsID49IDA7IGwtLSkge1xuICAgIHhbbF0gPSBtYXRbbF1bbl0gLyBtYXRbbF1bbF07XG4gICAgZm9yICh2YXIgbSA9IGwgLSAxOyBtID49IDA7IG0tLSkge1xuICAgICAgbWF0W21dW25dIC09IG1hdFttXVtsXSAqIHhbbF07XG4gICAgfVxuICB9XG4gIHJldHVybiB4O1xufTtcblxuXG4vKipcbiAqIENvbnZlcnRzIHJhZGlhbnMgdG8gdG8gZGVncmVlcy5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gYW5nbGVJblJhZGlhbnMgQW5nbGUgaW4gcmFkaWFucy5cbiAqIEByZXR1cm4ge251bWJlcn0gQW5nbGUgaW4gZGVncmVlcy5cbiAqL1xuX29sX21hdGhfLnRvRGVncmVlcyA9IGZ1bmN0aW9uKGFuZ2xlSW5SYWRpYW5zKSB7XG4gIHJldHVybiBhbmdsZUluUmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG59O1xuXG5cbi8qKlxuICogQ29udmVydHMgZGVncmVlcyB0byByYWRpYW5zLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZUluRGVncmVlcyBBbmdsZSBpbiBkZWdyZWVzLlxuICogQHJldHVybiB7bnVtYmVyfSBBbmdsZSBpbiByYWRpYW5zLlxuICovXG5fb2xfbWF0aF8udG9SYWRpYW5zID0gZnVuY3Rpb24oYW5nbGVJbkRlZ3JlZXMpIHtcbiAgcmV0dXJuIGFuZ2xlSW5EZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbW9kdWxvIG9mIGEgLyBiLCBkZXBlbmRpbmcgb24gdGhlIHNpZ24gb2YgYi5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gYSBEaXZpZGVuZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiIERpdmlzb3IuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IE1vZHVsby5cbiAqL1xuX29sX21hdGhfLm1vZHVsbyA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgdmFyIHIgPSBhICUgYjtcbiAgcmV0dXJuIHIgKiBiIDwgMCA/IHIgKyBiIDogcjtcbn07XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbGluZWFybHkgaW50ZXJwb2xhdGVkIHZhbHVlIG9mIHggYmV0d2VlbiBhIGFuZCBiLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIE51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGIgTnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0geCBWYWx1ZSB0byBiZSBpbnRlcnBvbGF0ZWQuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEludGVycG9sYXRlZCB2YWx1ZS5cbiAqL1xuX29sX21hdGhfLmxlcnAgPSBmdW5jdGlvbihhLCBiLCB4KSB7XG4gIHJldHVybiBhICsgeCAqIChiIC0gYSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgX29sX21hdGhfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvbWF0aC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKiBAY29uc3RcbiAqL1xudmFyIF9vbF9ldmVudHNfRXZlbnRUeXBlXyA9IHtcbiAgLyoqXG4gICAqIEdlbmVyaWMgY2hhbmdlIGV2ZW50LiBUcmlnZ2VyZWQgd2hlbiB0aGUgcmV2aXNpb24gY291bnRlciBpcyBpbmNyZWFzZWQuXG4gICAqIEBldmVudCBvbC5ldmVudHMuRXZlbnQjY2hhbmdlXG4gICAqIEBhcGlcbiAgICovXG4gIENIQU5HRTogJ2NoYW5nZScsXG5cbiAgQ0xFQVI6ICdjbGVhcicsXG4gIENMSUNLOiAnY2xpY2snLFxuICBEQkxDTElDSzogJ2RibGNsaWNrJyxcbiAgRFJBR0VOVEVSOiAnZHJhZ2VudGVyJyxcbiAgRFJBR09WRVI6ICdkcmFnb3ZlcicsXG4gIERST1A6ICdkcm9wJyxcbiAgRVJST1I6ICdlcnJvcicsXG4gIEtFWURPV046ICdrZXlkb3duJyxcbiAgS0VZUFJFU1M6ICdrZXlwcmVzcycsXG4gIExPQUQ6ICdsb2FkJyxcbiAgTU9VU0VET1dOOiAnbW91c2Vkb3duJyxcbiAgTU9VU0VNT1ZFOiAnbW91c2Vtb3ZlJyxcbiAgTU9VU0VPVVQ6ICdtb3VzZW91dCcsXG4gIE1PVVNFVVA6ICdtb3VzZXVwJyxcbiAgTU9VU0VXSEVFTDogJ21vdXNld2hlZWwnLFxuICBNU1BPSU5URVJET1dOOiAnTVNQb2ludGVyRG93bicsXG4gIFJFU0laRTogJ3Jlc2l6ZScsXG4gIFRPVUNIU1RBUlQ6ICd0b3VjaHN0YXJ0JyxcbiAgVE9VQ0hNT1ZFOiAndG91Y2htb3ZlJyxcbiAgVE9VQ0hFTkQ6ICd0b3VjaGVuZCcsXG4gIFdIRUVMOiAnd2hlZWwnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBfb2xfZXZlbnRzX0V2ZW50VHlwZV87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9ldmVudHMvZXZlbnR0eXBlLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfb2xfYXNzZXJ0c18gZnJvbSAnLi9hc3NlcnRzLmpzJztcbmltcG9ydCBfb2xfZXh0ZW50X0Nvcm5lcl8gZnJvbSAnLi9leHRlbnQvY29ybmVyLmpzJztcbmltcG9ydCBfb2xfZXh0ZW50X1JlbGF0aW9uc2hpcF8gZnJvbSAnLi9leHRlbnQvcmVsYXRpb25zaGlwLmpzJztcbnZhciBfb2xfZXh0ZW50XyA9IHt9O1xuXG5cbi8qKlxuICogQnVpbGQgYW4gZXh0ZW50IHRoYXQgaW5jbHVkZXMgYWxsIGdpdmVuIGNvb3JkaW5hdGVzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXkuPG9sLkNvb3JkaW5hdGU+fSBjb29yZGluYXRlcyBDb29yZGluYXRlcy5cbiAqIEByZXR1cm4ge29sLkV4dGVudH0gQm91bmRpbmcgZXh0ZW50LlxuICogQGFwaVxuICovXG5fb2xfZXh0ZW50Xy5ib3VuZGluZ0V4dGVudCA9IGZ1bmN0aW9uKGNvb3JkaW5hdGVzKSB7XG4gIHZhciBleHRlbnQgPSBfb2xfZXh0ZW50Xy5jcmVhdGVFbXB0eSgpO1xuICBmb3IgKHZhciBpID0gMCwgaWkgPSBjb29yZGluYXRlcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgX29sX2V4dGVudF8uZXh0ZW5kQ29vcmRpbmF0ZShleHRlbnQsIGNvb3JkaW5hdGVzW2ldKTtcbiAgfVxuICByZXR1cm4gZXh0ZW50O1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXkuPG51bWJlcj59IHhzIFhzLlxuICogQHBhcmFtIHtBcnJheS48bnVtYmVyPn0geXMgWXMuXG4gKiBAcGFyYW0ge29sLkV4dGVudD19IG9wdF9leHRlbnQgRGVzdGluYXRpb24gZXh0ZW50LlxuICogQHByaXZhdGVcbiAqIEByZXR1cm4ge29sLkV4dGVudH0gRXh0ZW50LlxuICovXG5fb2xfZXh0ZW50Xy5ib3VuZGluZ0V4dGVudFhZc18gPSBmdW5jdGlvbih4cywgeXMsIG9wdF9leHRlbnQpIHtcbiAgdmFyIG1pblggPSBNYXRoLm1pbi5hcHBseShudWxsLCB4cyk7XG4gIHZhciBtaW5ZID0gTWF0aC5taW4uYXBwbHkobnVsbCwgeXMpO1xuICB2YXIgbWF4WCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIHhzKTtcbiAgdmFyIG1heFkgPSBNYXRoLm1heC5hcHBseShudWxsLCB5cyk7XG4gIHJldHVybiBfb2xfZXh0ZW50Xy5jcmVhdGVPclVwZGF0ZShtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZLCBvcHRfZXh0ZW50KTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm4gZXh0ZW50IGluY3JlYXNlZCBieSB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gKiBAcGFyYW0ge29sLkV4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgYW1vdW50IGJ5IHdoaWNoIHRoZSBleHRlbnQgc2hvdWxkIGJlIGJ1ZmZlcmVkLlxuICogQHBhcmFtIHtvbC5FeHRlbnQ9fSBvcHRfZXh0ZW50IEV4dGVudC5cbiAqIEByZXR1cm4ge29sLkV4dGVudH0gRXh0ZW50LlxuICogQGFwaVxuICovXG5fb2xfZXh0ZW50Xy5idWZmZXIgPSBmdW5jdGlvbihleHRlbnQsIHZhbHVlLCBvcHRfZXh0ZW50KSB7XG4gIGlmIChvcHRfZXh0ZW50KSB7XG4gICAgb3B0X2V4dGVudFswXSA9IGV4dGVudFswXSAtIHZhbHVlO1xuICAgIG9wdF9leHRlbnRbMV0gPSBleHRlbnRbMV0gLSB2YWx1ZTtcbiAgICBvcHRfZXh0ZW50WzJdID0gZXh0ZW50WzJdICsgdmFsdWU7XG4gICAgb3B0X2V4dGVudFszXSA9IGV4dGVudFszXSArIHZhbHVlO1xuICAgIHJldHVybiBvcHRfZXh0ZW50O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBbXG4gICAgICBleHRlbnRbMF0gLSB2YWx1ZSxcbiAgICAgIGV4dGVudFsxXSAtIHZhbHVlLFxuICAgICAgZXh0ZW50WzJdICsgdmFsdWUsXG4gICAgICBleHRlbnRbM10gKyB2YWx1ZVxuICAgIF07XG4gIH1cbn07XG5cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYW4gZXh0ZW50LlxuICpcbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQgRXh0ZW50IHRvIGNsb25lLlxuICogQHBhcmFtIHtvbC5FeHRlbnQ9fSBvcHRfZXh0ZW50IEV4dGVudC5cbiAqIEByZXR1cm4ge29sLkV4dGVudH0gVGhlIGNsb25lLlxuICovXG5fb2xfZXh0ZW50Xy5jbG9uZSA9IGZ1bmN0aW9uKGV4dGVudCwgb3B0X2V4dGVudCkge1xuICBpZiAob3B0X2V4dGVudCkge1xuICAgIG9wdF9leHRlbnRbMF0gPSBleHRlbnRbMF07XG4gICAgb3B0X2V4dGVudFsxXSA9IGV4dGVudFsxXTtcbiAgICBvcHRfZXh0ZW50WzJdID0gZXh0ZW50WzJdO1xuICAgIG9wdF9leHRlbnRbM10gPSBleHRlbnRbM107XG4gICAgcmV0dXJuIG9wdF9leHRlbnQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGV4dGVudC5zbGljZSgpO1xuICB9XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0geCBYLlxuICogQHBhcmFtIHtudW1iZXJ9IHkgWS5cbiAqIEByZXR1cm4ge251bWJlcn0gQ2xvc2VzdCBzcXVhcmVkIGRpc3RhbmNlLlxuICovXG5fb2xfZXh0ZW50Xy5jbG9zZXN0U3F1YXJlZERpc3RhbmNlWFkgPSBmdW5jdGlvbihleHRlbnQsIHgsIHkpIHtcbiAgdmFyIGR4LCBkeTtcbiAgaWYgKHggPCBleHRlbnRbMF0pIHtcbiAgICBkeCA9IGV4dGVudFswXSAtIHg7XG4gIH0gZWxzZSBpZiAoZXh0ZW50WzJdIDwgeCkge1xuICAgIGR4ID0geCAtIGV4dGVudFsyXTtcbiAgfSBlbHNlIHtcbiAgICBkeCA9IDA7XG4gIH1cbiAgaWYgKHkgPCBleHRlbnRbMV0pIHtcbiAgICBkeSA9IGV4dGVudFsxXSAtIHk7XG4gIH0gZWxzZSBpZiAoZXh0ZW50WzNdIDwgeSkge1xuICAgIGR5ID0geSAtIGV4dGVudFszXTtcbiAgfSBlbHNlIHtcbiAgICBkeSA9IDA7XG4gIH1cbiAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xufTtcblxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBwYXNzZWQgY29vcmRpbmF0ZSBpcyBjb250YWluZWQgb3Igb24gdGhlIGVkZ2Ugb2YgdGhlIGV4dGVudC5cbiAqXG4gKiBAcGFyYW0ge29sLkV4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEBwYXJhbSB7b2wuQ29vcmRpbmF0ZX0gY29vcmRpbmF0ZSBDb29yZGluYXRlLlxuICogQHJldHVybiB7Ym9vbGVhbn0gVGhlIGNvb3JkaW5hdGUgaXMgY29udGFpbmVkIGluIHRoZSBleHRlbnQuXG4gKiBAYXBpXG4gKi9cbl9vbF9leHRlbnRfLmNvbnRhaW5zQ29vcmRpbmF0ZSA9IGZ1bmN0aW9uKGV4dGVudCwgY29vcmRpbmF0ZSkge1xuICByZXR1cm4gX29sX2V4dGVudF8uY29udGFpbnNYWShleHRlbnQsIGNvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV0pO1xufTtcblxuXG4vKipcbiAqIENoZWNrIGlmIG9uZSBleHRlbnQgY29udGFpbnMgYW5vdGhlci5cbiAqXG4gKiBBbiBleHRlbnQgaXMgZGVlbWVkIGNvbnRhaW5lZCBpZiBpdCBsaWVzIGNvbXBsZXRlbHkgd2l0aGluIHRoZSBvdGhlciBleHRlbnQsXG4gKiBpbmNsdWRpbmcgaWYgdGhleSBzaGFyZSBvbmUgb3IgbW9yZSBlZGdlcy5cbiAqXG4gKiBAcGFyYW0ge29sLkV4dGVudH0gZXh0ZW50MSBFeHRlbnQgMS5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQyIEV4dGVudCAyLlxuICogQHJldHVybiB7Ym9vbGVhbn0gVGhlIHNlY29uZCBleHRlbnQgaXMgY29udGFpbmVkIGJ5IG9yIG9uIHRoZSBlZGdlIG9mIHRoZVxuICogICAgIGZpcnN0LlxuICogQGFwaVxuICovXG5fb2xfZXh0ZW50Xy5jb250YWluc0V4dGVudCA9IGZ1bmN0aW9uKGV4dGVudDEsIGV4dGVudDIpIHtcbiAgcmV0dXJuIGV4dGVudDFbMF0gPD0gZXh0ZW50MlswXSAmJiBleHRlbnQyWzJdIDw9IGV4dGVudDFbMl0gJiZcbiAgICAgIGV4dGVudDFbMV0gPD0gZXh0ZW50MlsxXSAmJiBleHRlbnQyWzNdIDw9IGV4dGVudDFbM107XG59O1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIHBhc3NlZCBjb29yZGluYXRlIGlzIGNvbnRhaW5lZCBvciBvbiB0aGUgZWRnZSBvZiB0aGUgZXh0ZW50LlxuICpcbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IHggWCBjb29yZGluYXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IHkgWSBjb29yZGluYXRlLlxuICogQHJldHVybiB7Ym9vbGVhbn0gVGhlIHgsIHkgdmFsdWVzIGFyZSBjb250YWluZWQgaW4gdGhlIGV4dGVudC5cbiAqIEBhcGlcbiAqL1xuX29sX2V4dGVudF8uY29udGFpbnNYWSA9IGZ1bmN0aW9uKGV4dGVudCwgeCwgeSkge1xuICByZXR1cm4gZXh0ZW50WzBdIDw9IHggJiYgeCA8PSBleHRlbnRbMl0gJiYgZXh0ZW50WzFdIDw9IHkgJiYgeSA8PSBleHRlbnRbM107XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSByZWxhdGlvbnNoaXAgYmV0d2VlbiBhIGNvb3JkaW5hdGUgYW5kIGV4dGVudC5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQgVGhlIGV4dGVudC5cbiAqIEBwYXJhbSB7b2wuQ29vcmRpbmF0ZX0gY29vcmRpbmF0ZSBUaGUgY29vcmRpbmF0ZS5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIHJlbGF0aW9uc2hpcCAoYml0d2lzZSBjb21wYXJlIHdpdGhcbiAqICAgICBvbC5leHRlbnQuUmVsYXRpb25zaGlwKS5cbiAqL1xuX29sX2V4dGVudF8uY29vcmRpbmF0ZVJlbGF0aW9uc2hpcCA9IGZ1bmN0aW9uKGV4dGVudCwgY29vcmRpbmF0ZSkge1xuICB2YXIgbWluWCA9IGV4dGVudFswXTtcbiAgdmFyIG1pblkgPSBleHRlbnRbMV07XG4gIHZhciBtYXhYID0gZXh0ZW50WzJdO1xuICB2YXIgbWF4WSA9IGV4dGVudFszXTtcbiAgdmFyIHggPSBjb29yZGluYXRlWzBdO1xuICB2YXIgeSA9IGNvb3JkaW5hdGVbMV07XG4gIHZhciByZWxhdGlvbnNoaXAgPSBfb2xfZXh0ZW50X1JlbGF0aW9uc2hpcF8uVU5LTk9XTjtcbiAgaWYgKHggPCBtaW5YKSB7XG4gICAgcmVsYXRpb25zaGlwID0gcmVsYXRpb25zaGlwIHwgX29sX2V4dGVudF9SZWxhdGlvbnNoaXBfLkxFRlQ7XG4gIH0gZWxzZSBpZiAoeCA+IG1heFgpIHtcbiAgICByZWxhdGlvbnNoaXAgPSByZWxhdGlvbnNoaXAgfCBfb2xfZXh0ZW50X1JlbGF0aW9uc2hpcF8uUklHSFQ7XG4gIH1cbiAgaWYgKHkgPCBtaW5ZKSB7XG4gICAgcmVsYXRpb25zaGlwID0gcmVsYXRpb25zaGlwIHwgX29sX2V4dGVudF9SZWxhdGlvbnNoaXBfLkJFTE9XO1xuICB9IGVsc2UgaWYgKHkgPiBtYXhZKSB7XG4gICAgcmVsYXRpb25zaGlwID0gcmVsYXRpb25zaGlwIHwgX29sX2V4dGVudF9SZWxhdGlvbnNoaXBfLkFCT1ZFO1xuICB9XG4gIGlmIChyZWxhdGlvbnNoaXAgPT09IF9vbF9leHRlbnRfUmVsYXRpb25zaGlwXy5VTktOT1dOKSB7XG4gICAgcmVsYXRpb25zaGlwID0gX29sX2V4dGVudF9SZWxhdGlvbnNoaXBfLklOVEVSU0VDVElORztcbiAgfVxuICByZXR1cm4gcmVsYXRpb25zaGlwO1xufTtcblxuXG4vKipcbiAqIENyZWF0ZSBhbiBlbXB0eSBleHRlbnQuXG4gKiBAcmV0dXJuIHtvbC5FeHRlbnR9IEVtcHR5IGV4dGVudC5cbiAqIEBhcGlcbiAqL1xuX29sX2V4dGVudF8uY3JlYXRlRW1wdHkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIFtJbmZpbml0eSwgSW5maW5pdHksIC1JbmZpbml0eSwgLUluZmluaXR5XTtcbn07XG5cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgZXh0ZW50IG9yIHVwZGF0ZSB0aGUgcHJvdmlkZWQgZXh0ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IG1pblggTWluaW11bSBYLlxuICogQHBhcmFtIHtudW1iZXJ9IG1pblkgTWluaW11bSBZLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heFggTWF4aW11bSBYLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heFkgTWF4aW11bSBZLlxuICogQHBhcmFtIHtvbC5FeHRlbnQ9fSBvcHRfZXh0ZW50IERlc3RpbmF0aW9uIGV4dGVudC5cbiAqIEByZXR1cm4ge29sLkV4dGVudH0gRXh0ZW50LlxuICovXG5fb2xfZXh0ZW50Xy5jcmVhdGVPclVwZGF0ZSA9IGZ1bmN0aW9uKG1pblgsIG1pblksIG1heFgsIG1heFksIG9wdF9leHRlbnQpIHtcbiAgaWYgKG9wdF9leHRlbnQpIHtcbiAgICBvcHRfZXh0ZW50WzBdID0gbWluWDtcbiAgICBvcHRfZXh0ZW50WzFdID0gbWluWTtcbiAgICBvcHRfZXh0ZW50WzJdID0gbWF4WDtcbiAgICBvcHRfZXh0ZW50WzNdID0gbWF4WTtcbiAgICByZXR1cm4gb3B0X2V4dGVudDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW21pblgsIG1pblksIG1heFgsIG1heFldO1xuICB9XG59O1xuXG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGVtcHR5IGV4dGVudCBvciBtYWtlIHRoZSBwcm92aWRlZCBvbmUgZW1wdHkuXG4gKiBAcGFyYW0ge29sLkV4dGVudD19IG9wdF9leHRlbnQgRXh0ZW50LlxuICogQHJldHVybiB7b2wuRXh0ZW50fSBFeHRlbnQuXG4gKi9cbl9vbF9leHRlbnRfLmNyZWF0ZU9yVXBkYXRlRW1wdHkgPSBmdW5jdGlvbihvcHRfZXh0ZW50KSB7XG4gIHJldHVybiBfb2xfZXh0ZW50Xy5jcmVhdGVPclVwZGF0ZShcbiAgICAgIEluZmluaXR5LCBJbmZpbml0eSwgLUluZmluaXR5LCAtSW5maW5pdHksIG9wdF9leHRlbnQpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wuQ29vcmRpbmF0ZX0gY29vcmRpbmF0ZSBDb29yZGluYXRlLlxuICogQHBhcmFtIHtvbC5FeHRlbnQ9fSBvcHRfZXh0ZW50IEV4dGVudC5cbiAqIEByZXR1cm4ge29sLkV4dGVudH0gRXh0ZW50LlxuICovXG5fb2xfZXh0ZW50Xy5jcmVhdGVPclVwZGF0ZUZyb21Db29yZGluYXRlID0gZnVuY3Rpb24oY29vcmRpbmF0ZSwgb3B0X2V4dGVudCkge1xuICB2YXIgeCA9IGNvb3JkaW5hdGVbMF07XG4gIHZhciB5ID0gY29vcmRpbmF0ZVsxXTtcbiAgcmV0dXJuIF9vbF9leHRlbnRfLmNyZWF0ZU9yVXBkYXRlKHgsIHksIHgsIHksIG9wdF9leHRlbnQpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXkuPG9sLkNvb3JkaW5hdGU+fSBjb29yZGluYXRlcyBDb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50PX0gb3B0X2V4dGVudCBFeHRlbnQuXG4gKiBAcmV0dXJuIHtvbC5FeHRlbnR9IEV4dGVudC5cbiAqL1xuX29sX2V4dGVudF8uY3JlYXRlT3JVcGRhdGVGcm9tQ29vcmRpbmF0ZXMgPSBmdW5jdGlvbihjb29yZGluYXRlcywgb3B0X2V4dGVudCkge1xuICB2YXIgZXh0ZW50ID0gX29sX2V4dGVudF8uY3JlYXRlT3JVcGRhdGVFbXB0eShvcHRfZXh0ZW50KTtcbiAgcmV0dXJuIF9vbF9leHRlbnRfLmV4dGVuZENvb3JkaW5hdGVzKGV4dGVudCwgY29vcmRpbmF0ZXMpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXkuPG51bWJlcj59IGZsYXRDb29yZGluYXRlcyBGbGF0IGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBPZmZzZXQuXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIEVuZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdHJpZGUgU3RyaWRlLlxuICogQHBhcmFtIHtvbC5FeHRlbnQ9fSBvcHRfZXh0ZW50IEV4dGVudC5cbiAqIEByZXR1cm4ge29sLkV4dGVudH0gRXh0ZW50LlxuICovXG5fb2xfZXh0ZW50Xy5jcmVhdGVPclVwZGF0ZUZyb21GbGF0Q29vcmRpbmF0ZXMgPSBmdW5jdGlvbihmbGF0Q29vcmRpbmF0ZXMsIG9mZnNldCwgZW5kLCBzdHJpZGUsIG9wdF9leHRlbnQpIHtcbiAgdmFyIGV4dGVudCA9IF9vbF9leHRlbnRfLmNyZWF0ZU9yVXBkYXRlRW1wdHkob3B0X2V4dGVudCk7XG4gIHJldHVybiBfb2xfZXh0ZW50Xy5leHRlbmRGbGF0Q29vcmRpbmF0ZXMoXG4gICAgICBleHRlbnQsIGZsYXRDb29yZGluYXRlcywgb2Zmc2V0LCBlbmQsIHN0cmlkZSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheS48QXJyYXkuPG9sLkNvb3JkaW5hdGU+Pn0gcmluZ3MgUmluZ3MuXG4gKiBAcGFyYW0ge29sLkV4dGVudD19IG9wdF9leHRlbnQgRXh0ZW50LlxuICogQHJldHVybiB7b2wuRXh0ZW50fSBFeHRlbnQuXG4gKi9cbl9vbF9leHRlbnRfLmNyZWF0ZU9yVXBkYXRlRnJvbVJpbmdzID0gZnVuY3Rpb24ocmluZ3MsIG9wdF9leHRlbnQpIHtcbiAgdmFyIGV4dGVudCA9IF9vbF9leHRlbnRfLmNyZWF0ZU9yVXBkYXRlRW1wdHkob3B0X2V4dGVudCk7XG4gIHJldHVybiBfb2xfZXh0ZW50Xy5leHRlbmRSaW5ncyhleHRlbnQsIHJpbmdzKTtcbn07XG5cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgdHdvIGV4dGVudHMgYXJlIGVxdWl2YWxlbnQuXG4gKiBAcGFyYW0ge29sLkV4dGVudH0gZXh0ZW50MSBFeHRlbnQgMS5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQyIEV4dGVudCAyLlxuICogQHJldHVybiB7Ym9vbGVhbn0gVGhlIHR3byBleHRlbnRzIGFyZSBlcXVpdmFsZW50LlxuICogQGFwaVxuICovXG5fb2xfZXh0ZW50Xy5lcXVhbHMgPSBmdW5jdGlvbihleHRlbnQxLCBleHRlbnQyKSB7XG4gIHJldHVybiBleHRlbnQxWzBdID09IGV4dGVudDJbMF0gJiYgZXh0ZW50MVsyXSA9PSBleHRlbnQyWzJdICYmXG4gICAgICBleHRlbnQxWzFdID09IGV4dGVudDJbMV0gJiYgZXh0ZW50MVszXSA9PSBleHRlbnQyWzNdO1xufTtcblxuXG4vKipcbiAqIE1vZGlmeSBhbiBleHRlbnQgdG8gaW5jbHVkZSBhbm90aGVyIGV4dGVudC5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQxIFRoZSBleHRlbnQgdG8gYmUgbW9kaWZpZWQuXG4gKiBAcGFyYW0ge29sLkV4dGVudH0gZXh0ZW50MiBUaGUgZXh0ZW50IHRoYXQgd2lsbCBiZSBpbmNsdWRlZCBpbiB0aGUgZmlyc3QuXG4gKiBAcmV0dXJuIHtvbC5FeHRlbnR9IEEgcmVmZXJlbmNlIHRvIHRoZSBmaXJzdCAoZXh0ZW5kZWQpIGV4dGVudC5cbiAqIEBhcGlcbiAqL1xuX29sX2V4dGVudF8uZXh0ZW5kID0gZnVuY3Rpb24oZXh0ZW50MSwgZXh0ZW50Mikge1xuICBpZiAoZXh0ZW50MlswXSA8IGV4dGVudDFbMF0pIHtcbiAgICBleHRlbnQxWzBdID0gZXh0ZW50MlswXTtcbiAgfVxuICBpZiAoZXh0ZW50MlsyXSA+IGV4dGVudDFbMl0pIHtcbiAgICBleHRlbnQxWzJdID0gZXh0ZW50MlsyXTtcbiAgfVxuICBpZiAoZXh0ZW50MlsxXSA8IGV4dGVudDFbMV0pIHtcbiAgICBleHRlbnQxWzFdID0gZXh0ZW50MlsxXTtcbiAgfVxuICBpZiAoZXh0ZW50MlszXSA+IGV4dGVudDFbM10pIHtcbiAgICBleHRlbnQxWzNdID0gZXh0ZW50MlszXTtcbiAgfVxuICByZXR1cm4gZXh0ZW50MTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge29sLkV4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEBwYXJhbSB7b2wuQ29vcmRpbmF0ZX0gY29vcmRpbmF0ZSBDb29yZGluYXRlLlxuICovXG5fb2xfZXh0ZW50Xy5leHRlbmRDb29yZGluYXRlID0gZnVuY3Rpb24oZXh0ZW50LCBjb29yZGluYXRlKSB7XG4gIGlmIChjb29yZGluYXRlWzBdIDwgZXh0ZW50WzBdKSB7XG4gICAgZXh0ZW50WzBdID0gY29vcmRpbmF0ZVswXTtcbiAgfVxuICBpZiAoY29vcmRpbmF0ZVswXSA+IGV4dGVudFsyXSkge1xuICAgIGV4dGVudFsyXSA9IGNvb3JkaW5hdGVbMF07XG4gIH1cbiAgaWYgKGNvb3JkaW5hdGVbMV0gPCBleHRlbnRbMV0pIHtcbiAgICBleHRlbnRbMV0gPSBjb29yZGluYXRlWzFdO1xuICB9XG4gIGlmIChjb29yZGluYXRlWzFdID4gZXh0ZW50WzNdKSB7XG4gICAgZXh0ZW50WzNdID0gY29vcmRpbmF0ZVsxXTtcbiAgfVxufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHBhcmFtIHtBcnJheS48b2wuQ29vcmRpbmF0ZT59IGNvb3JkaW5hdGVzIENvb3JkaW5hdGVzLlxuICogQHJldHVybiB7b2wuRXh0ZW50fSBFeHRlbnQuXG4gKi9cbl9vbF9leHRlbnRfLmV4dGVuZENvb3JkaW5hdGVzID0gZnVuY3Rpb24oZXh0ZW50LCBjb29yZGluYXRlcykge1xuICB2YXIgaSwgaWk7XG4gIGZvciAoaSA9IDAsIGlpID0gY29vcmRpbmF0ZXMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgIF9vbF9leHRlbnRfLmV4dGVuZENvb3JkaW5hdGUoZXh0ZW50LCBjb29yZGluYXRlc1tpXSk7XG4gIH1cbiAgcmV0dXJuIGV4dGVudDtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge29sLkV4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEBwYXJhbSB7QXJyYXkuPG51bWJlcj59IGZsYXRDb29yZGluYXRlcyBGbGF0IGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBPZmZzZXQuXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIEVuZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdHJpZGUgU3RyaWRlLlxuICogQHJldHVybiB7b2wuRXh0ZW50fSBFeHRlbnQuXG4gKi9cbl9vbF9leHRlbnRfLmV4dGVuZEZsYXRDb29yZGluYXRlcyA9IGZ1bmN0aW9uKGV4dGVudCwgZmxhdENvb3JkaW5hdGVzLCBvZmZzZXQsIGVuZCwgc3RyaWRlKSB7XG4gIGZvciAoOyBvZmZzZXQgPCBlbmQ7IG9mZnNldCArPSBzdHJpZGUpIHtcbiAgICBfb2xfZXh0ZW50Xy5leHRlbmRYWShcbiAgICAgICAgZXh0ZW50LCBmbGF0Q29vcmRpbmF0ZXNbb2Zmc2V0XSwgZmxhdENvb3JkaW5hdGVzW29mZnNldCArIDFdKTtcbiAgfVxuICByZXR1cm4gZXh0ZW50O1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHBhcmFtIHtBcnJheS48QXJyYXkuPG9sLkNvb3JkaW5hdGU+Pn0gcmluZ3MgUmluZ3MuXG4gKiBAcmV0dXJuIHtvbC5FeHRlbnR9IEV4dGVudC5cbiAqL1xuX29sX2V4dGVudF8uZXh0ZW5kUmluZ3MgPSBmdW5jdGlvbihleHRlbnQsIHJpbmdzKSB7XG4gIHZhciBpLCBpaTtcbiAgZm9yIChpID0gMCwgaWkgPSByaW5ncy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgX29sX2V4dGVudF8uZXh0ZW5kQ29vcmRpbmF0ZXMoZXh0ZW50LCByaW5nc1tpXSk7XG4gIH1cbiAgcmV0dXJuIGV4dGVudDtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge29sLkV4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFguXG4gKiBAcGFyYW0ge251bWJlcn0geSBZLlxuICovXG5fb2xfZXh0ZW50Xy5leHRlbmRYWSA9IGZ1bmN0aW9uKGV4dGVudCwgeCwgeSkge1xuICBleHRlbnRbMF0gPSBNYXRoLm1pbihleHRlbnRbMF0sIHgpO1xuICBleHRlbnRbMV0gPSBNYXRoLm1pbihleHRlbnRbMV0sIHkpO1xuICBleHRlbnRbMl0gPSBNYXRoLm1heChleHRlbnRbMl0sIHgpO1xuICBleHRlbnRbM10gPSBNYXRoLm1heChleHRlbnRbM10sIHkpO1xufTtcblxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY2FsbHMgYGNhbGxiYWNrYCBmb3IgZWFjaCBjb3JuZXIgb2YgdGhlIGV4dGVudC4gSWYgdGhlXG4gKiBjYWxsYmFjayByZXR1cm5zIGEgdHJ1dGh5IHZhbHVlIHRoZSBmdW5jdGlvbiByZXR1cm5zIHRoYXQgdmFsdWVcbiAqIGltbWVkaWF0ZWx5LiBPdGhlcndpc2UgdGhlIGZ1bmN0aW9uIHJldHVybnMgYGZhbHNlYC5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHBhcmFtIHtmdW5jdGlvbih0aGlzOlQsIG9sLkNvb3JkaW5hdGUpOiBTfSBjYWxsYmFjayBDYWxsYmFjay5cbiAqIEBwYXJhbSB7VD19IG9wdF90aGlzIFZhbHVlIHRvIHVzZSBhcyBgdGhpc2Agd2hlbiBleGVjdXRpbmcgYGNhbGxiYWNrYC5cbiAqIEByZXR1cm4ge1N8Ym9vbGVhbn0gVmFsdWUuXG4gKiBAdGVtcGxhdGUgUywgVFxuICovXG5fb2xfZXh0ZW50Xy5mb3JFYWNoQ29ybmVyID0gZnVuY3Rpb24oZXh0ZW50LCBjYWxsYmFjaywgb3B0X3RoaXMpIHtcbiAgdmFyIHZhbDtcbiAgdmFsID0gY2FsbGJhY2suY2FsbChvcHRfdGhpcywgX29sX2V4dGVudF8uZ2V0Qm90dG9tTGVmdChleHRlbnQpKTtcbiAgaWYgKHZhbCkge1xuICAgIHJldHVybiB2YWw7XG4gIH1cbiAgdmFsID0gY2FsbGJhY2suY2FsbChvcHRfdGhpcywgX29sX2V4dGVudF8uZ2V0Qm90dG9tUmlnaHQoZXh0ZW50KSk7XG4gIGlmICh2YWwpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9XG4gIHZhbCA9IGNhbGxiYWNrLmNhbGwob3B0X3RoaXMsIF9vbF9leHRlbnRfLmdldFRvcFJpZ2h0KGV4dGVudCkpO1xuICBpZiAodmFsKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuICB2YWwgPSBjYWxsYmFjay5jYWxsKG9wdF90aGlzLCBfb2xfZXh0ZW50Xy5nZXRUb3BMZWZ0KGV4dGVudCkpO1xuICBpZiAodmFsKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBzaXplIG9mIGFuIGV4dGVudC5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHJldHVybiB7bnVtYmVyfSBBcmVhLlxuICogQGFwaVxuICovXG5fb2xfZXh0ZW50Xy5nZXRBcmVhID0gZnVuY3Rpb24oZXh0ZW50KSB7XG4gIHZhciBhcmVhID0gMDtcbiAgaWYgKCFfb2xfZXh0ZW50Xy5pc0VtcHR5KGV4dGVudCkpIHtcbiAgICBhcmVhID0gX29sX2V4dGVudF8uZ2V0V2lkdGgoZXh0ZW50KSAqIF9vbF9leHRlbnRfLmdldEhlaWdodChleHRlbnQpO1xuICB9XG4gIHJldHVybiBhcmVhO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgYm90dG9tIGxlZnQgY29vcmRpbmF0ZSBvZiBhbiBleHRlbnQuXG4gKiBAcGFyYW0ge29sLkV4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEByZXR1cm4ge29sLkNvb3JkaW5hdGV9IEJvdHRvbSBsZWZ0IGNvb3JkaW5hdGUuXG4gKiBAYXBpXG4gKi9cbl9vbF9leHRlbnRfLmdldEJvdHRvbUxlZnQgPSBmdW5jdGlvbihleHRlbnQpIHtcbiAgcmV0dXJuIFtleHRlbnRbMF0sIGV4dGVudFsxXV07XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBib3R0b20gcmlnaHQgY29vcmRpbmF0ZSBvZiBhbiBleHRlbnQuXG4gKiBAcGFyYW0ge29sLkV4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEByZXR1cm4ge29sLkNvb3JkaW5hdGV9IEJvdHRvbSByaWdodCBjb29yZGluYXRlLlxuICogQGFwaVxuICovXG5fb2xfZXh0ZW50Xy5nZXRCb3R0b21SaWdodCA9IGZ1bmN0aW9uKGV4dGVudCkge1xuICByZXR1cm4gW2V4dGVudFsyXSwgZXh0ZW50WzFdXTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIGNlbnRlciBjb29yZGluYXRlIG9mIGFuIGV4dGVudC5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHJldHVybiB7b2wuQ29vcmRpbmF0ZX0gQ2VudGVyLlxuICogQGFwaVxuICovXG5fb2xfZXh0ZW50Xy5nZXRDZW50ZXIgPSBmdW5jdGlvbihleHRlbnQpIHtcbiAgcmV0dXJuIFsoZXh0ZW50WzBdICsgZXh0ZW50WzJdKSAvIDIsIChleHRlbnRbMV0gKyBleHRlbnRbM10pIC8gMl07XG59O1xuXG5cbi8qKlxuICogR2V0IGEgY29ybmVyIGNvb3JkaW5hdGUgb2YgYW4gZXh0ZW50LlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcGFyYW0ge29sLmV4dGVudC5Db3JuZXJ9IGNvcm5lciBDb3JuZXIuXG4gKiBAcmV0dXJuIHtvbC5Db29yZGluYXRlfSBDb3JuZXIgY29vcmRpbmF0ZS5cbiAqL1xuX29sX2V4dGVudF8uZ2V0Q29ybmVyID0gZnVuY3Rpb24oZXh0ZW50LCBjb3JuZXIpIHtcbiAgdmFyIGNvb3JkaW5hdGU7XG4gIGlmIChjb3JuZXIgPT09IF9vbF9leHRlbnRfQ29ybmVyXy5CT1RUT01fTEVGVCkge1xuICAgIGNvb3JkaW5hdGUgPSBfb2xfZXh0ZW50Xy5nZXRCb3R0b21MZWZ0KGV4dGVudCk7XG4gIH0gZWxzZSBpZiAoY29ybmVyID09PSBfb2xfZXh0ZW50X0Nvcm5lcl8uQk9UVE9NX1JJR0hUKSB7XG4gICAgY29vcmRpbmF0ZSA9IF9vbF9leHRlbnRfLmdldEJvdHRvbVJpZ2h0KGV4dGVudCk7XG4gIH0gZWxzZSBpZiAoY29ybmVyID09PSBfb2xfZXh0ZW50X0Nvcm5lcl8uVE9QX0xFRlQpIHtcbiAgICBjb29yZGluYXRlID0gX29sX2V4dGVudF8uZ2V0VG9wTGVmdChleHRlbnQpO1xuICB9IGVsc2UgaWYgKGNvcm5lciA9PT0gX29sX2V4dGVudF9Db3JuZXJfLlRPUF9SSUdIVCkge1xuICAgIGNvb3JkaW5hdGUgPSBfb2xfZXh0ZW50Xy5nZXRUb3BSaWdodChleHRlbnQpO1xuICB9IGVsc2Uge1xuICAgIF9vbF9hc3NlcnRzXy5hc3NlcnQoZmFsc2UsIDEzKTsgLy8gSW52YWxpZCBjb3JuZXJcbiAgfVxuICByZXR1cm4gLyoqIEB0eXBlIHshb2wuQ29vcmRpbmF0ZX0gKi8gKGNvb3JkaW5hdGUpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQxIEV4dGVudCAxLlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudDIgRXh0ZW50IDIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEVubGFyZ2VkIGFyZWEuXG4gKi9cbl9vbF9leHRlbnRfLmdldEVubGFyZ2VkQXJlYSA9IGZ1bmN0aW9uKGV4dGVudDEsIGV4dGVudDIpIHtcbiAgdmFyIG1pblggPSBNYXRoLm1pbihleHRlbnQxWzBdLCBleHRlbnQyWzBdKTtcbiAgdmFyIG1pblkgPSBNYXRoLm1pbihleHRlbnQxWzFdLCBleHRlbnQyWzFdKTtcbiAgdmFyIG1heFggPSBNYXRoLm1heChleHRlbnQxWzJdLCBleHRlbnQyWzJdKTtcbiAgdmFyIG1heFkgPSBNYXRoLm1heChleHRlbnQxWzNdLCBleHRlbnQyWzNdKTtcbiAgcmV0dXJuIChtYXhYIC0gbWluWCkgKiAobWF4WSAtIG1pblkpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wuQ29vcmRpbmF0ZX0gY2VudGVyIENlbnRlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSByZXNvbHV0aW9uIFJlc29sdXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gcm90YXRpb24gUm90YXRpb24uXG4gKiBAcGFyYW0ge29sLlNpemV9IHNpemUgU2l6ZS5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50PX0gb3B0X2V4dGVudCBEZXN0aW5hdGlvbiBleHRlbnQuXG4gKiBAcmV0dXJuIHtvbC5FeHRlbnR9IEV4dGVudC5cbiAqL1xuX29sX2V4dGVudF8uZ2V0Rm9yVmlld0FuZFNpemUgPSBmdW5jdGlvbihjZW50ZXIsIHJlc29sdXRpb24sIHJvdGF0aW9uLCBzaXplLCBvcHRfZXh0ZW50KSB7XG4gIHZhciBkeCA9IHJlc29sdXRpb24gKiBzaXplWzBdIC8gMjtcbiAgdmFyIGR5ID0gcmVzb2x1dGlvbiAqIHNpemVbMV0gLyAyO1xuICB2YXIgY29zUm90YXRpb24gPSBNYXRoLmNvcyhyb3RhdGlvbik7XG4gIHZhciBzaW5Sb3RhdGlvbiA9IE1hdGguc2luKHJvdGF0aW9uKTtcbiAgdmFyIHhDb3MgPSBkeCAqIGNvc1JvdGF0aW9uO1xuICB2YXIgeFNpbiA9IGR4ICogc2luUm90YXRpb247XG4gIHZhciB5Q29zID0gZHkgKiBjb3NSb3RhdGlvbjtcbiAgdmFyIHlTaW4gPSBkeSAqIHNpblJvdGF0aW9uO1xuICB2YXIgeCA9IGNlbnRlclswXTtcbiAgdmFyIHkgPSBjZW50ZXJbMV07XG4gIHZhciB4MCA9IHggLSB4Q29zICsgeVNpbjtcbiAgdmFyIHgxID0geCAtIHhDb3MgLSB5U2luO1xuICB2YXIgeDIgPSB4ICsgeENvcyAtIHlTaW47XG4gIHZhciB4MyA9IHggKyB4Q29zICsgeVNpbjtcbiAgdmFyIHkwID0geSAtIHhTaW4gLSB5Q29zO1xuICB2YXIgeTEgPSB5IC0geFNpbiArIHlDb3M7XG4gIHZhciB5MiA9IHkgKyB4U2luICsgeUNvcztcbiAgdmFyIHkzID0geSArIHhTaW4gLSB5Q29zO1xuICByZXR1cm4gX29sX2V4dGVudF8uY3JlYXRlT3JVcGRhdGUoXG4gICAgICBNYXRoLm1pbih4MCwgeDEsIHgyLCB4MyksIE1hdGgubWluKHkwLCB5MSwgeTIsIHkzKSxcbiAgICAgIE1hdGgubWF4KHgwLCB4MSwgeDIsIHgzKSwgTWF0aC5tYXgoeTAsIHkxLCB5MiwgeTMpLFxuICAgICAgb3B0X2V4dGVudCk7XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBoZWlnaHQgb2YgYW4gZXh0ZW50LlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEhlaWdodC5cbiAqIEBhcGlcbiAqL1xuX29sX2V4dGVudF8uZ2V0SGVpZ2h0ID0gZnVuY3Rpb24oZXh0ZW50KSB7XG4gIHJldHVybiBleHRlbnRbM10gLSBleHRlbnRbMV07XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudDEgRXh0ZW50IDEuXG4gKiBAcGFyYW0ge29sLkV4dGVudH0gZXh0ZW50MiBFeHRlbnQgMi5cbiAqIEByZXR1cm4ge251bWJlcn0gSW50ZXJzZWN0aW9uIGFyZWEuXG4gKi9cbl9vbF9leHRlbnRfLmdldEludGVyc2VjdGlvbkFyZWEgPSBmdW5jdGlvbihleHRlbnQxLCBleHRlbnQyKSB7XG4gIHZhciBpbnRlcnNlY3Rpb24gPSBfb2xfZXh0ZW50Xy5nZXRJbnRlcnNlY3Rpb24oZXh0ZW50MSwgZXh0ZW50Mik7XG4gIHJldHVybiBfb2xfZXh0ZW50Xy5nZXRBcmVhKGludGVyc2VjdGlvbik7XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBpbnRlcnNlY3Rpb24gb2YgdHdvIGV4dGVudHMuXG4gKiBAcGFyYW0ge29sLkV4dGVudH0gZXh0ZW50MSBFeHRlbnQgMS5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQyIEV4dGVudCAyLlxuICogQHBhcmFtIHtvbC5FeHRlbnQ9fSBvcHRfZXh0ZW50IE9wdGlvbmFsIGV4dGVudCB0byBwb3B1bGF0ZSB3aXRoIGludGVyc2VjdGlvbi5cbiAqIEByZXR1cm4ge29sLkV4dGVudH0gSW50ZXJzZWN0aW5nIGV4dGVudC5cbiAqIEBhcGlcbiAqL1xuX29sX2V4dGVudF8uZ2V0SW50ZXJzZWN0aW9uID0gZnVuY3Rpb24oZXh0ZW50MSwgZXh0ZW50Miwgb3B0X2V4dGVudCkge1xuICB2YXIgaW50ZXJzZWN0aW9uID0gb3B0X2V4dGVudCA/IG9wdF9leHRlbnQgOiBfb2xfZXh0ZW50Xy5jcmVhdGVFbXB0eSgpO1xuICBpZiAoX29sX2V4dGVudF8uaW50ZXJzZWN0cyhleHRlbnQxLCBleHRlbnQyKSkge1xuICAgIGlmIChleHRlbnQxWzBdID4gZXh0ZW50MlswXSkge1xuICAgICAgaW50ZXJzZWN0aW9uWzBdID0gZXh0ZW50MVswXTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW50ZXJzZWN0aW9uWzBdID0gZXh0ZW50MlswXTtcbiAgICB9XG4gICAgaWYgKGV4dGVudDFbMV0gPiBleHRlbnQyWzFdKSB7XG4gICAgICBpbnRlcnNlY3Rpb25bMV0gPSBleHRlbnQxWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnRlcnNlY3Rpb25bMV0gPSBleHRlbnQyWzFdO1xuICAgIH1cbiAgICBpZiAoZXh0ZW50MVsyXSA8IGV4dGVudDJbMl0pIHtcbiAgICAgIGludGVyc2VjdGlvblsyXSA9IGV4dGVudDFbMl07XG4gICAgfSBlbHNlIHtcbiAgICAgIGludGVyc2VjdGlvblsyXSA9IGV4dGVudDJbMl07XG4gICAgfVxuICAgIGlmIChleHRlbnQxWzNdIDwgZXh0ZW50MlszXSkge1xuICAgICAgaW50ZXJzZWN0aW9uWzNdID0gZXh0ZW50MVszXTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW50ZXJzZWN0aW9uWzNdID0gZXh0ZW50MlszXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGludGVyc2VjdGlvbjtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge29sLkV4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEByZXR1cm4ge251bWJlcn0gTWFyZ2luLlxuICovXG5fb2xfZXh0ZW50Xy5nZXRNYXJnaW4gPSBmdW5jdGlvbihleHRlbnQpIHtcbiAgcmV0dXJuIF9vbF9leHRlbnRfLmdldFdpZHRoKGV4dGVudCkgKyBfb2xfZXh0ZW50Xy5nZXRIZWlnaHQoZXh0ZW50KTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIHNpemUgKHdpZHRoLCBoZWlnaHQpIG9mIGFuIGV4dGVudC5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQgVGhlIGV4dGVudC5cbiAqIEByZXR1cm4ge29sLlNpemV9IFRoZSBleHRlbnQgc2l6ZS5cbiAqIEBhcGlcbiAqL1xuX29sX2V4dGVudF8uZ2V0U2l6ZSA9IGZ1bmN0aW9uKGV4dGVudCkge1xuICByZXR1cm4gW2V4dGVudFsyXSAtIGV4dGVudFswXSwgZXh0ZW50WzNdIC0gZXh0ZW50WzFdXTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIHRvcCBsZWZ0IGNvb3JkaW5hdGUgb2YgYW4gZXh0ZW50LlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcmV0dXJuIHtvbC5Db29yZGluYXRlfSBUb3AgbGVmdCBjb29yZGluYXRlLlxuICogQGFwaVxuICovXG5fb2xfZXh0ZW50Xy5nZXRUb3BMZWZ0ID0gZnVuY3Rpb24oZXh0ZW50KSB7XG4gIHJldHVybiBbZXh0ZW50WzBdLCBleHRlbnRbM11dO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgdG9wIHJpZ2h0IGNvb3JkaW5hdGUgb2YgYW4gZXh0ZW50LlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcmV0dXJuIHtvbC5Db29yZGluYXRlfSBUb3AgcmlnaHQgY29vcmRpbmF0ZS5cbiAqIEBhcGlcbiAqL1xuX29sX2V4dGVudF8uZ2V0VG9wUmlnaHQgPSBmdW5jdGlvbihleHRlbnQpIHtcbiAgcmV0dXJuIFtleHRlbnRbMl0sIGV4dGVudFszXV07XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSB3aWR0aCBvZiBhbiBleHRlbnQuXG4gKiBAcGFyYW0ge29sLkV4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEByZXR1cm4ge251bWJlcn0gV2lkdGguXG4gKiBAYXBpXG4gKi9cbl9vbF9leHRlbnRfLmdldFdpZHRoID0gZnVuY3Rpb24oZXh0ZW50KSB7XG4gIHJldHVybiBleHRlbnRbMl0gLSBleHRlbnRbMF07XG59O1xuXG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIG9uZSBleHRlbnQgaW50ZXJzZWN0cyBhbm90aGVyLlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudDEgRXh0ZW50IDEuXG4gKiBAcGFyYW0ge29sLkV4dGVudH0gZXh0ZW50MiBFeHRlbnQuXG4gKiBAcmV0dXJuIHtib29sZWFufSBUaGUgdHdvIGV4dGVudHMgaW50ZXJzZWN0LlxuICogQGFwaVxuICovXG5fb2xfZXh0ZW50Xy5pbnRlcnNlY3RzID0gZnVuY3Rpb24oZXh0ZW50MSwgZXh0ZW50Mikge1xuICByZXR1cm4gZXh0ZW50MVswXSA8PSBleHRlbnQyWzJdICYmXG4gICAgICBleHRlbnQxWzJdID49IGV4dGVudDJbMF0gJiZcbiAgICAgIGV4dGVudDFbMV0gPD0gZXh0ZW50MlszXSAmJlxuICAgICAgZXh0ZW50MVszXSA+PSBleHRlbnQyWzFdO1xufTtcblxuXG4vKipcbiAqIERldGVybWluZSBpZiBhbiBleHRlbnQgaXMgZW1wdHkuXG4gKiBAcGFyYW0ge29sLkV4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IElzIGVtcHR5LlxuICogQGFwaVxuICovXG5fb2xfZXh0ZW50Xy5pc0VtcHR5ID0gZnVuY3Rpb24oZXh0ZW50KSB7XG4gIHJldHVybiBleHRlbnRbMl0gPCBleHRlbnRbMF0gfHwgZXh0ZW50WzNdIDwgZXh0ZW50WzFdO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHBhcmFtIHtvbC5FeHRlbnQ9fSBvcHRfZXh0ZW50IEV4dGVudC5cbiAqIEByZXR1cm4ge29sLkV4dGVudH0gRXh0ZW50LlxuICovXG5fb2xfZXh0ZW50Xy5yZXR1cm5PclVwZGF0ZSA9IGZ1bmN0aW9uKGV4dGVudCwgb3B0X2V4dGVudCkge1xuICBpZiAob3B0X2V4dGVudCkge1xuICAgIG9wdF9leHRlbnRbMF0gPSBleHRlbnRbMF07XG4gICAgb3B0X2V4dGVudFsxXSA9IGV4dGVudFsxXTtcbiAgICBvcHRfZXh0ZW50WzJdID0gZXh0ZW50WzJdO1xuICAgIG9wdF9leHRlbnRbM10gPSBleHRlbnRbM107XG4gICAgcmV0dXJuIG9wdF9leHRlbnQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGV4dGVudDtcbiAgfVxufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFZhbHVlLlxuICovXG5fb2xfZXh0ZW50Xy5zY2FsZUZyb21DZW50ZXIgPSBmdW5jdGlvbihleHRlbnQsIHZhbHVlKSB7XG4gIHZhciBkZWx0YVggPSAoKGV4dGVudFsyXSAtIGV4dGVudFswXSkgLyAyKSAqICh2YWx1ZSAtIDEpO1xuICB2YXIgZGVsdGFZID0gKChleHRlbnRbM10gLSBleHRlbnRbMV0pIC8gMikgKiAodmFsdWUgLSAxKTtcbiAgZXh0ZW50WzBdIC09IGRlbHRhWDtcbiAgZXh0ZW50WzJdICs9IGRlbHRhWDtcbiAgZXh0ZW50WzFdIC09IGRlbHRhWTtcbiAgZXh0ZW50WzNdICs9IGRlbHRhWTtcbn07XG5cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgdGhlIHNlZ21lbnQgYmV0d2VlbiB0d28gY29vcmRpbmF0ZXMgaW50ZXJzZWN0cyAoY3Jvc3NlcyxcbiAqIHRvdWNoZXMsIG9yIGlzIGNvbnRhaW5lZCBieSkgdGhlIHByb3ZpZGVkIGV4dGVudC5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQgVGhlIGV4dGVudC5cbiAqIEBwYXJhbSB7b2wuQ29vcmRpbmF0ZX0gc3RhcnQgU2VnbWVudCBzdGFydCBjb29yZGluYXRlLlxuICogQHBhcmFtIHtvbC5Db29yZGluYXRlfSBlbmQgU2VnbWVudCBlbmQgY29vcmRpbmF0ZS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRoZSBzZWdtZW50IGludGVyc2VjdHMgdGhlIGV4dGVudC5cbiAqL1xuX29sX2V4dGVudF8uaW50ZXJzZWN0c1NlZ21lbnQgPSBmdW5jdGlvbihleHRlbnQsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGludGVyc2VjdHMgPSBmYWxzZTtcbiAgdmFyIHN0YXJ0UmVsID0gX29sX2V4dGVudF8uY29vcmRpbmF0ZVJlbGF0aW9uc2hpcChleHRlbnQsIHN0YXJ0KTtcbiAgdmFyIGVuZFJlbCA9IF9vbF9leHRlbnRfLmNvb3JkaW5hdGVSZWxhdGlvbnNoaXAoZXh0ZW50LCBlbmQpO1xuICBpZiAoc3RhcnRSZWwgPT09IF9vbF9leHRlbnRfUmVsYXRpb25zaGlwXy5JTlRFUlNFQ1RJTkcgfHxcbiAgICAgIGVuZFJlbCA9PT0gX29sX2V4dGVudF9SZWxhdGlvbnNoaXBfLklOVEVSU0VDVElORykge1xuICAgIGludGVyc2VjdHMgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBtaW5YID0gZXh0ZW50WzBdO1xuICAgIHZhciBtaW5ZID0gZXh0ZW50WzFdO1xuICAgIHZhciBtYXhYID0gZXh0ZW50WzJdO1xuICAgIHZhciBtYXhZID0gZXh0ZW50WzNdO1xuICAgIHZhciBzdGFydFggPSBzdGFydFswXTtcbiAgICB2YXIgc3RhcnRZID0gc3RhcnRbMV07XG4gICAgdmFyIGVuZFggPSBlbmRbMF07XG4gICAgdmFyIGVuZFkgPSBlbmRbMV07XG4gICAgdmFyIHNsb3BlID0gKGVuZFkgLSBzdGFydFkpIC8gKGVuZFggLSBzdGFydFgpO1xuICAgIHZhciB4LCB5O1xuICAgIGlmICghIShlbmRSZWwgJiBfb2xfZXh0ZW50X1JlbGF0aW9uc2hpcF8uQUJPVkUpICYmXG4gICAgICAgICEoc3RhcnRSZWwgJiBfb2xfZXh0ZW50X1JlbGF0aW9uc2hpcF8uQUJPVkUpKSB7XG4gICAgICAvLyBwb3RlbnRpYWxseSBpbnRlcnNlY3RzIHRvcFxuICAgICAgeCA9IGVuZFggLSAoKGVuZFkgLSBtYXhZKSAvIHNsb3BlKTtcbiAgICAgIGludGVyc2VjdHMgPSB4ID49IG1pblggJiYgeCA8PSBtYXhYO1xuICAgIH1cbiAgICBpZiAoIWludGVyc2VjdHMgJiYgISEoZW5kUmVsICYgX29sX2V4dGVudF9SZWxhdGlvbnNoaXBfLlJJR0hUKSAmJlxuICAgICAgICAhKHN0YXJ0UmVsICYgX29sX2V4dGVudF9SZWxhdGlvbnNoaXBfLlJJR0hUKSkge1xuICAgICAgLy8gcG90ZW50aWFsbHkgaW50ZXJzZWN0cyByaWdodFxuICAgICAgeSA9IGVuZFkgLSAoKGVuZFggLSBtYXhYKSAqIHNsb3BlKTtcbiAgICAgIGludGVyc2VjdHMgPSB5ID49IG1pblkgJiYgeSA8PSBtYXhZO1xuICAgIH1cbiAgICBpZiAoIWludGVyc2VjdHMgJiYgISEoZW5kUmVsICYgX29sX2V4dGVudF9SZWxhdGlvbnNoaXBfLkJFTE9XKSAmJlxuICAgICAgICAhKHN0YXJ0UmVsICYgX29sX2V4dGVudF9SZWxhdGlvbnNoaXBfLkJFTE9XKSkge1xuICAgICAgLy8gcG90ZW50aWFsbHkgaW50ZXJzZWN0cyBib3R0b21cbiAgICAgIHggPSBlbmRYIC0gKChlbmRZIC0gbWluWSkgLyBzbG9wZSk7XG4gICAgICBpbnRlcnNlY3RzID0geCA+PSBtaW5YICYmIHggPD0gbWF4WDtcbiAgICB9XG4gICAgaWYgKCFpbnRlcnNlY3RzICYmICEhKGVuZFJlbCAmIF9vbF9leHRlbnRfUmVsYXRpb25zaGlwXy5MRUZUKSAmJlxuICAgICAgICAhKHN0YXJ0UmVsICYgX29sX2V4dGVudF9SZWxhdGlvbnNoaXBfLkxFRlQpKSB7XG4gICAgICAvLyBwb3RlbnRpYWxseSBpbnRlcnNlY3RzIGxlZnRcbiAgICAgIHkgPSBlbmRZIC0gKChlbmRYIC0gbWluWCkgKiBzbG9wZSk7XG4gICAgICBpbnRlcnNlY3RzID0geSA+PSBtaW5ZICYmIHkgPD0gbWF4WTtcbiAgICB9XG5cbiAgfVxuICByZXR1cm4gaW50ZXJzZWN0cztcbn07XG5cblxuLyoqXG4gKiBBcHBseSBhIHRyYW5zZm9ybSBmdW5jdGlvbiB0byB0aGUgZXh0ZW50LlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcGFyYW0ge29sLlRyYW5zZm9ybUZ1bmN0aW9ufSB0cmFuc2Zvcm1GbiBUcmFuc2Zvcm0gZnVuY3Rpb24uICBDYWxsZWQgd2l0aFxuICogW21pblgsIG1pblksIG1heFgsIG1heFldIGV4dGVudCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50PX0gb3B0X2V4dGVudCBEZXN0aW5hdGlvbiBleHRlbnQuXG4gKiBAcmV0dXJuIHtvbC5FeHRlbnR9IEV4dGVudC5cbiAqIEBhcGlcbiAqL1xuX29sX2V4dGVudF8uYXBwbHlUcmFuc2Zvcm0gPSBmdW5jdGlvbihleHRlbnQsIHRyYW5zZm9ybUZuLCBvcHRfZXh0ZW50KSB7XG4gIHZhciBjb29yZGluYXRlcyA9IFtcbiAgICBleHRlbnRbMF0sIGV4dGVudFsxXSxcbiAgICBleHRlbnRbMF0sIGV4dGVudFszXSxcbiAgICBleHRlbnRbMl0sIGV4dGVudFsxXSxcbiAgICBleHRlbnRbMl0sIGV4dGVudFszXVxuICBdO1xuICB0cmFuc2Zvcm1Gbihjb29yZGluYXRlcywgY29vcmRpbmF0ZXMsIDIpO1xuICB2YXIgeHMgPSBbY29vcmRpbmF0ZXNbMF0sIGNvb3JkaW5hdGVzWzJdLCBjb29yZGluYXRlc1s0XSwgY29vcmRpbmF0ZXNbNl1dO1xuICB2YXIgeXMgPSBbY29vcmRpbmF0ZXNbMV0sIGNvb3JkaW5hdGVzWzNdLCBjb29yZGluYXRlc1s1XSwgY29vcmRpbmF0ZXNbN11dO1xuICByZXR1cm4gX29sX2V4dGVudF8uYm91bmRpbmdFeHRlbnRYWXNfKHhzLCB5cywgb3B0X2V4dGVudCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgX29sX2V4dGVudF87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9leHRlbnQuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF9vbF8gZnJvbSAnLi9pbmRleC5qcyc7XG5pbXBvcnQgX29sX1NwaGVyZV8gZnJvbSAnLi9zcGhlcmUuanMnO1xuaW1wb3J0IF9vbF9leHRlbnRfIGZyb20gJy4vZXh0ZW50LmpzJztcbmltcG9ydCBfb2xfbWF0aF8gZnJvbSAnLi9tYXRoLmpzJztcbmltcG9ydCBfb2xfcHJval9FUFNHMzg1N18gZnJvbSAnLi9wcm9qL2Vwc2czODU3LmpzJztcbmltcG9ydCBfb2xfcHJval9FUFNHNDMyNl8gZnJvbSAnLi9wcm9qL2Vwc2c0MzI2LmpzJztcbmltcG9ydCBfb2xfcHJval9Qcm9qZWN0aW9uXyBmcm9tICcuL3Byb2ovcHJvamVjdGlvbi5qcyc7XG5pbXBvcnQgX29sX3Byb2pfVW5pdHNfIGZyb20gJy4vcHJvai91bml0cy5qcyc7XG5pbXBvcnQgX29sX3Byb2pfcHJvajRfIGZyb20gJy4vcHJvai9wcm9qNC5qcyc7XG5pbXBvcnQgX29sX3Byb2pfcHJvamVjdGlvbnNfIGZyb20gJy4vcHJvai9wcm9qZWN0aW9ucy5qcyc7XG5pbXBvcnQgX29sX3Byb2pfdHJhbnNmb3Jtc18gZnJvbSAnLi9wcm9qL3RyYW5zZm9ybXMuanMnO1xudmFyIF9vbF9wcm9qXyA9IHt9O1xuXG5cbi8qKlxuICogTWV0ZXJzIHBlciB1bml0IGxvb2t1cCB0YWJsZS5cbiAqIEBjb25zdFxuICogQHR5cGUge09iamVjdC48b2wucHJvai5Vbml0cywgbnVtYmVyPn1cbiAqIEBhcGlcbiAqL1xuX29sX3Byb2pfLk1FVEVSU19QRVJfVU5JVCA9IF9vbF9wcm9qX1VuaXRzXy5NRVRFUlNfUEVSX1VOSVQ7XG5cblxuLyoqXG4gKiBBIHBsYWNlIHRvIHN0b3JlIHRoZSBtZWFuIHJhZGl1cyBvZiB0aGUgRWFydGguXG4gKiBAcHJpdmF0ZVxuICogQHR5cGUge29sLlNwaGVyZX1cbiAqL1xuX29sX3Byb2pfLlNQSEVSRV8gPSBuZXcgX29sX1NwaGVyZV8oX29sX1NwaGVyZV8uREVGQVVMVF9SQURJVVMpO1xuXG5cbmlmIChfb2xfLkVOQUJMRV9QUk9KNEpTKSB7XG4gIC8qKlxuICAgKiBSZWdpc3RlciBwcm9qNC4gSWYgbm90IGV4cGxpY2l0bHkgcmVnaXN0ZXJlZCwgaXQgd2lsbCBiZSBhc3N1bWVkIHRoYXRcbiAgICogcHJvajRqcyB3aWxsIGJlIGxvYWRlZCBpbiB0aGUgZ2xvYmFsIG5hbWVzcGFjZS4gRm9yIGV4YW1wbGUgaW4gYVxuICAgKiBicm93c2VyaWZ5IEVTNiBlbnZpcm9ubWVudCB5b3UgY291bGQgdXNlOlxuICAgKlxuICAgKiAgICAgaW1wb3J0IG9sIGZyb20gJ29wZW5sYXllcnMnO1xuICAgKiAgICAgaW1wb3J0IHByb2o0IGZyb20gJ3Byb2o0JztcbiAgICogICAgIG9sLnByb2ouc2V0UHJvajQocHJvajQpO1xuICAgKlxuICAgKiBAcGFyYW0ge1Byb2o0fSBwcm9qNCBQcm9qNC5cbiAgICogQGFwaVxuICAgKi9cbiAgX29sX3Byb2pfLnNldFByb2o0ID0gZnVuY3Rpb24ocHJvajQpIHtcbiAgICBfb2xfcHJval9wcm9qNF8uc2V0KHByb2o0KTtcbiAgfTtcbn1cblxuXG4vKipcbiAqIEdldCB0aGUgcmVzb2x1dGlvbiBvZiB0aGUgcG9pbnQgaW4gZGVncmVlcyBvciBkaXN0YW5jZSB1bml0cy5cbiAqIEZvciBwcm9qZWN0aW9ucyB3aXRoIGRlZ3JlZXMgYXMgdGhlIHVuaXQgdGhpcyB3aWxsIHNpbXBseSByZXR1cm4gdGhlXG4gKiBwcm92aWRlZCByZXNvbHV0aW9uLiBGb3Igb3RoZXIgcHJvamVjdGlvbnMgdGhlIHBvaW50IHJlc29sdXRpb24gaXNcbiAqIGJ5IGRlZmF1bHQgZXN0aW1hdGVkIGJ5IHRyYW5zZm9ybWluZyB0aGUgJ3BvaW50JyBwaXhlbCB0byBFUFNHOjQzMjYsXG4gKiBtZWFzdXJpbmcgaXRzIHdpZHRoIGFuZCBoZWlnaHQgb24gdGhlIG5vcm1hbCBzcGhlcmUsXG4gKiBhbmQgdGFraW5nIHRoZSBhdmVyYWdlIG9mIHRoZSB3aWR0aCBhbmQgaGVpZ2h0LlxuICogQSBjdXN0b20gZnVuY3Rpb24gY2FuIGJlIHByb3ZpZGVkIGZvciBhIHNwZWNpZmljIHByb2plY3Rpb24sIGVpdGhlclxuICogYnkgc2V0dGluZyB0aGUgYGdldFBvaW50UmVzb2x1dGlvbmAgb3B0aW9uIGluIHRoZVxuICoge0BsaW5rIG9sLnByb2ouUHJvamVjdGlvbn0gY29uc3RydWN0b3Igb3IgYnkgdXNpbmdcbiAqIHtAbGluayBvbC5wcm9qLlByb2plY3Rpb24jc2V0R2V0UG9pbnRSZXNvbHV0aW9ufSB0byBjaGFuZ2UgYW4gZXhpc3RpbmdcbiAqIHByb2plY3Rpb24gb2JqZWN0LlxuICogQHBhcmFtIHtvbC5Qcm9qZWN0aW9uTGlrZX0gcHJvamVjdGlvbiBUaGUgcHJvamVjdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSByZXNvbHV0aW9uIE5vbWluYWwgcmVzb2x1dGlvbiBpbiBwcm9qZWN0aW9uIHVuaXRzLlxuICogQHBhcmFtIHtvbC5Db29yZGluYXRlfSBwb2ludCBQb2ludCB0byBmaW5kIGFkanVzdGVkIHJlc29sdXRpb24gYXQuXG4gKiBAcGFyYW0ge29sLnByb2ouVW5pdHM9fSBvcHRfdW5pdHMgVW5pdHMgdG8gZ2V0IHRoZSBwb2ludCByZXNvbHV0aW9uIGluLlxuICogRGVmYXVsdCBpcyB0aGUgcHJvamVjdGlvbidzIHVuaXRzLlxuICogQHJldHVybiB7bnVtYmVyfSBQb2ludCByZXNvbHV0aW9uLlxuICogQGFwaVxuICovXG5fb2xfcHJval8uZ2V0UG9pbnRSZXNvbHV0aW9uID0gZnVuY3Rpb24ocHJvamVjdGlvbiwgcmVzb2x1dGlvbiwgcG9pbnQsIG9wdF91bml0cykge1xuICBwcm9qZWN0aW9uID0gX29sX3Byb2pfLmdldChwcm9qZWN0aW9uKTtcbiAgdmFyIHBvaW50UmVzb2x1dGlvbjtcbiAgdmFyIGdldHRlciA9IHByb2plY3Rpb24uZ2V0UG9pbnRSZXNvbHV0aW9uRnVuYygpO1xuICBpZiAoZ2V0dGVyKSB7XG4gICAgcG9pbnRSZXNvbHV0aW9uID0gZ2V0dGVyKHJlc29sdXRpb24sIHBvaW50KTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdW5pdHMgPSBwcm9qZWN0aW9uLmdldFVuaXRzKCk7XG4gICAgaWYgKHVuaXRzID09IF9vbF9wcm9qX1VuaXRzXy5ERUdSRUVTICYmICFvcHRfdW5pdHMgfHwgb3B0X3VuaXRzID09IF9vbF9wcm9qX1VuaXRzXy5ERUdSRUVTKSB7XG4gICAgICBwb2ludFJlc29sdXRpb24gPSByZXNvbHV0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBFc3RpbWF0ZSBwb2ludCByZXNvbHV0aW9uIGJ5IHRyYW5zZm9ybWluZyB0aGUgY2VudGVyIHBpeGVsIHRvIEVQU0c6NDMyNixcbiAgICAgIC8vIG1lYXN1cmluZyBpdHMgd2lkdGggYW5kIGhlaWdodCBvbiB0aGUgbm9ybWFsIHNwaGVyZSwgYW5kIHRha2luZyB0aGVcbiAgICAgIC8vIGF2ZXJhZ2Ugb2YgdGhlIHdpZHRoIGFuZCBoZWlnaHQuXG4gICAgICB2YXIgdG9FUFNHNDMyNiA9IF9vbF9wcm9qXy5nZXRUcmFuc2Zvcm1Gcm9tUHJvamVjdGlvbnMocHJvamVjdGlvbiwgX29sX3Byb2pfLmdldCgnRVBTRzo0MzI2JykpO1xuICAgICAgdmFyIHZlcnRpY2VzID0gW1xuICAgICAgICBwb2ludFswXSAtIHJlc29sdXRpb24gLyAyLCBwb2ludFsxXSxcbiAgICAgICAgcG9pbnRbMF0gKyByZXNvbHV0aW9uIC8gMiwgcG9pbnRbMV0sXG4gICAgICAgIHBvaW50WzBdLCBwb2ludFsxXSAtIHJlc29sdXRpb24gLyAyLFxuICAgICAgICBwb2ludFswXSwgcG9pbnRbMV0gKyByZXNvbHV0aW9uIC8gMlxuICAgICAgXTtcbiAgICAgIHZlcnRpY2VzID0gdG9FUFNHNDMyNih2ZXJ0aWNlcywgdmVydGljZXMsIDIpO1xuICAgICAgdmFyIHdpZHRoID0gX29sX3Byb2pfLlNQSEVSRV8uaGF2ZXJzaW5lRGlzdGFuY2UoXG4gICAgICAgICAgdmVydGljZXMuc2xpY2UoMCwgMiksIHZlcnRpY2VzLnNsaWNlKDIsIDQpKTtcbiAgICAgIHZhciBoZWlnaHQgPSBfb2xfcHJval8uU1BIRVJFXy5oYXZlcnNpbmVEaXN0YW5jZShcbiAgICAgICAgICB2ZXJ0aWNlcy5zbGljZSg0LCA2KSwgdmVydGljZXMuc2xpY2UoNiwgOCkpO1xuICAgICAgcG9pbnRSZXNvbHV0aW9uID0gKHdpZHRoICsgaGVpZ2h0KSAvIDI7XG4gICAgICB2YXIgbWV0ZXJzUGVyVW5pdCA9IG9wdF91bml0cyA/XG4gICAgICAgIF9vbF9wcm9qX1VuaXRzXy5NRVRFUlNfUEVSX1VOSVRbb3B0X3VuaXRzXSA6XG4gICAgICAgIHByb2plY3Rpb24uZ2V0TWV0ZXJzUGVyVW5pdCgpO1xuICAgICAgaWYgKG1ldGVyc1BlclVuaXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwb2ludFJlc29sdXRpb24gLz0gbWV0ZXJzUGVyVW5pdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBvaW50UmVzb2x1dGlvbjtcbn07XG5cblxuLyoqXG4gKiBSZWdpc3RlcnMgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb25zIHRoYXQgZG9uJ3QgYWx0ZXIgY29vcmRpbmF0ZXMuIFRob3NlIGFsbG93XG4gKiB0byB0cmFuc2Zvcm0gYmV0d2VlbiBwcm9qZWN0aW9ucyB3aXRoIGVxdWFsIG1lYW5pbmcuXG4gKlxuICogQHBhcmFtIHtBcnJheS48b2wucHJvai5Qcm9qZWN0aW9uPn0gcHJvamVjdGlvbnMgUHJvamVjdGlvbnMuXG4gKiBAYXBpXG4gKi9cbl9vbF9wcm9qXy5hZGRFcXVpdmFsZW50UHJvamVjdGlvbnMgPSBmdW5jdGlvbihwcm9qZWN0aW9ucykge1xuICBfb2xfcHJval8uYWRkUHJvamVjdGlvbnMocHJvamVjdGlvbnMpO1xuICBwcm9qZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKHNvdXJjZSkge1xuICAgIHByb2plY3Rpb25zLmZvckVhY2goZnVuY3Rpb24oZGVzdGluYXRpb24pIHtcbiAgICAgIGlmIChzb3VyY2UgIT09IGRlc3RpbmF0aW9uKSB7XG4gICAgICAgIF9vbF9wcm9qX3RyYW5zZm9ybXNfLmFkZChzb3VyY2UsIGRlc3RpbmF0aW9uLCBfb2xfcHJval8uY2xvbmVUcmFuc2Zvcm0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cblxuLyoqXG4gKiBSZWdpc3RlcnMgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb25zIHRvIGNvbnZlcnQgY29vcmRpbmF0ZXMgaW4gYW55IHByb2plY3Rpb25cbiAqIGluIHByb2plY3Rpb24xIHRvIGFueSBwcm9qZWN0aW9uIGluIHByb2plY3Rpb24yLlxuICpcbiAqIEBwYXJhbSB7QXJyYXkuPG9sLnByb2ouUHJvamVjdGlvbj59IHByb2plY3Rpb25zMSBQcm9qZWN0aW9ucyB3aXRoIGVxdWFsXG4gKiAgICAgbWVhbmluZy5cbiAqIEBwYXJhbSB7QXJyYXkuPG9sLnByb2ouUHJvamVjdGlvbj59IHByb2plY3Rpb25zMiBQcm9qZWN0aW9ucyB3aXRoIGVxdWFsXG4gKiAgICAgbWVhbmluZy5cbiAqIEBwYXJhbSB7b2wuVHJhbnNmb3JtRnVuY3Rpb259IGZvcndhcmRUcmFuc2Zvcm0gVHJhbnNmb3JtYXRpb24gZnJvbSBhbnlcbiAqICAgcHJvamVjdGlvbiBpbiBwcm9qZWN0aW9uMSB0byBhbnkgcHJvamVjdGlvbiBpbiBwcm9qZWN0aW9uMi5cbiAqIEBwYXJhbSB7b2wuVHJhbnNmb3JtRnVuY3Rpb259IGludmVyc2VUcmFuc2Zvcm0gVHJhbnNmb3JtIGZyb20gYW55IHByb2plY3Rpb25cbiAqICAgaW4gcHJvamVjdGlvbjIgdG8gYW55IHByb2plY3Rpb24gaW4gcHJvamVjdGlvbjEuLlxuICovXG5fb2xfcHJval8uYWRkRXF1aXZhbGVudFRyYW5zZm9ybXMgPSBmdW5jdGlvbihwcm9qZWN0aW9uczEsIHByb2plY3Rpb25zMiwgZm9yd2FyZFRyYW5zZm9ybSwgaW52ZXJzZVRyYW5zZm9ybSkge1xuICBwcm9qZWN0aW9uczEuZm9yRWFjaChmdW5jdGlvbihwcm9qZWN0aW9uMSkge1xuICAgIHByb2plY3Rpb25zMi5mb3JFYWNoKGZ1bmN0aW9uKHByb2plY3Rpb24yKSB7XG4gICAgICBfb2xfcHJval90cmFuc2Zvcm1zXy5hZGQocHJvamVjdGlvbjEsIHByb2plY3Rpb24yLCBmb3J3YXJkVHJhbnNmb3JtKTtcbiAgICAgIF9vbF9wcm9qX3RyYW5zZm9ybXNfLmFkZChwcm9qZWN0aW9uMiwgcHJvamVjdGlvbjEsIGludmVyc2VUcmFuc2Zvcm0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cblxuLyoqXG4gKiBBZGQgYSBQcm9qZWN0aW9uIG9iamVjdCB0byB0aGUgbGlzdCBvZiBzdXBwb3J0ZWQgcHJvamVjdGlvbnMgdGhhdCBjYW4gYmVcbiAqIGxvb2tlZCB1cCBieSB0aGVpciBjb2RlLlxuICpcbiAqIEBwYXJhbSB7b2wucHJvai5Qcm9qZWN0aW9ufSBwcm9qZWN0aW9uIFByb2plY3Rpb24gaW5zdGFuY2UuXG4gKiBAYXBpXG4gKi9cbl9vbF9wcm9qXy5hZGRQcm9qZWN0aW9uID0gZnVuY3Rpb24ocHJvamVjdGlvbikge1xuICBfb2xfcHJval9wcm9qZWN0aW9uc18uYWRkKHByb2plY3Rpb24uZ2V0Q29kZSgpLCBwcm9qZWN0aW9uKTtcbiAgX29sX3Byb2pfdHJhbnNmb3Jtc18uYWRkKHByb2plY3Rpb24sIHByb2plY3Rpb24sIF9vbF9wcm9qXy5jbG9uZVRyYW5zZm9ybSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheS48b2wucHJvai5Qcm9qZWN0aW9uPn0gcHJvamVjdGlvbnMgUHJvamVjdGlvbnMuXG4gKi9cbl9vbF9wcm9qXy5hZGRQcm9qZWN0aW9ucyA9IGZ1bmN0aW9uKHByb2plY3Rpb25zKSB7XG4gIHByb2plY3Rpb25zLmZvckVhY2goX29sX3Byb2pfLmFkZFByb2plY3Rpb24pO1xufTtcblxuXG4vKipcbiAqIENsZWFyIGFsbCBjYWNoZWQgcHJvamVjdGlvbnMgYW5kIHRyYW5zZm9ybXMuXG4gKi9cbl9vbF9wcm9qXy5jbGVhckFsbFByb2plY3Rpb25zID0gZnVuY3Rpb24oKSB7XG4gIF9vbF9wcm9qX3Byb2plY3Rpb25zXy5jbGVhcigpO1xuICBfb2xfcHJval90cmFuc2Zvcm1zXy5jbGVhcigpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wucHJvai5Qcm9qZWN0aW9ufHN0cmluZ3x1bmRlZmluZWR9IHByb2plY3Rpb24gUHJvamVjdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkZWZhdWx0Q29kZSBEZWZhdWx0IGNvZGUuXG4gKiBAcmV0dXJuIHtvbC5wcm9qLlByb2plY3Rpb259IFByb2plY3Rpb24uXG4gKi9cbl9vbF9wcm9qXy5jcmVhdGVQcm9qZWN0aW9uID0gZnVuY3Rpb24ocHJvamVjdGlvbiwgZGVmYXVsdENvZGUpIHtcbiAgaWYgKCFwcm9qZWN0aW9uKSB7XG4gICAgcmV0dXJuIF9vbF9wcm9qXy5nZXQoZGVmYXVsdENvZGUpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9qZWN0aW9uID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBfb2xfcHJval8uZ2V0KHByb2plY3Rpb24pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAvKiogQHR5cGUge29sLnByb2ouUHJvamVjdGlvbn0gKi8gKHByb2plY3Rpb24pO1xuICB9XG59O1xuXG5cbi8qKlxuICogUmVnaXN0ZXJzIGNvb3JkaW5hdGUgdHJhbnNmb3JtIGZ1bmN0aW9ucyB0byBjb252ZXJ0IGNvb3JkaW5hdGVzIGJldHdlZW4gdGhlXG4gKiBzb3VyY2UgcHJvamVjdGlvbiBhbmQgdGhlIGRlc3RpbmF0aW9uIHByb2plY3Rpb24uXG4gKiBUaGUgZm9yd2FyZCBhbmQgaW52ZXJzZSBmdW5jdGlvbnMgY29udmVydCBjb29yZGluYXRlIHBhaXJzOyB0aGlzIGZ1bmN0aW9uXG4gKiBjb252ZXJ0cyB0aGVzZSBpbnRvIHRoZSBmdW5jdGlvbnMgdXNlZCBpbnRlcm5hbGx5IHdoaWNoIGFsc28gaGFuZGxlXG4gKiBleHRlbnRzIGFuZCBjb29yZGluYXRlIGFycmF5cy5cbiAqXG4gKiBAcGFyYW0ge29sLlByb2plY3Rpb25MaWtlfSBzb3VyY2UgU291cmNlIHByb2plY3Rpb24uXG4gKiBAcGFyYW0ge29sLlByb2plY3Rpb25MaWtlfSBkZXN0aW5hdGlvbiBEZXN0aW5hdGlvbiBwcm9qZWN0aW9uLlxuICogQHBhcmFtIHtmdW5jdGlvbihvbC5Db29yZGluYXRlKTogb2wuQ29vcmRpbmF0ZX0gZm9yd2FyZCBUaGUgZm9yd2FyZCB0cmFuc2Zvcm1cbiAqICAgICBmdW5jdGlvbiAodGhhdCBpcywgZnJvbSB0aGUgc291cmNlIHByb2plY3Rpb24gdG8gdGhlIGRlc3RpbmF0aW9uXG4gKiAgICAgcHJvamVjdGlvbikgdGhhdCB0YWtlcyBhIHtAbGluayBvbC5Db29yZGluYXRlfSBhcyBhcmd1bWVudCBhbmQgcmV0dXJuc1xuICogICAgIHRoZSB0cmFuc2Zvcm1lZCB7QGxpbmsgb2wuQ29vcmRpbmF0ZX0uXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKG9sLkNvb3JkaW5hdGUpOiBvbC5Db29yZGluYXRlfSBpbnZlcnNlIFRoZSBpbnZlcnNlIHRyYW5zZm9ybVxuICogICAgIGZ1bmN0aW9uICh0aGF0IGlzLCBmcm9tIHRoZSBkZXN0aW5hdGlvbiBwcm9qZWN0aW9uIHRvIHRoZSBzb3VyY2VcbiAqICAgICBwcm9qZWN0aW9uKSB0aGF0IHRha2VzIGEge0BsaW5rIG9sLkNvb3JkaW5hdGV9IGFzIGFyZ3VtZW50IGFuZCByZXR1cm5zXG4gKiAgICAgdGhlIHRyYW5zZm9ybWVkIHtAbGluayBvbC5Db29yZGluYXRlfS5cbiAqIEBhcGlcbiAqL1xuX29sX3Byb2pfLmFkZENvb3JkaW5hdGVUcmFuc2Zvcm1zID0gZnVuY3Rpb24oc291cmNlLCBkZXN0aW5hdGlvbiwgZm9yd2FyZCwgaW52ZXJzZSkge1xuICB2YXIgc291cmNlUHJvaiA9IF9vbF9wcm9qXy5nZXQoc291cmNlKTtcbiAgdmFyIGRlc3RQcm9qID0gX29sX3Byb2pfLmdldChkZXN0aW5hdGlvbik7XG4gIF9vbF9wcm9qX3RyYW5zZm9ybXNfLmFkZChzb3VyY2VQcm9qLCBkZXN0UHJvaixcbiAgICAgIF9vbF9wcm9qXy5jcmVhdGVUcmFuc2Zvcm1Gcm9tQ29vcmRpbmF0ZVRyYW5zZm9ybShmb3J3YXJkKSk7XG4gIF9vbF9wcm9qX3RyYW5zZm9ybXNfLmFkZChkZXN0UHJvaiwgc291cmNlUHJvaixcbiAgICAgIF9vbF9wcm9qXy5jcmVhdGVUcmFuc2Zvcm1Gcm9tQ29vcmRpbmF0ZVRyYW5zZm9ybShpbnZlcnNlKSk7XG59O1xuXG5cbi8qKlxuICogQ3JlYXRlcyBhIHtAbGluayBvbC5UcmFuc2Zvcm1GdW5jdGlvbn0gZnJvbSBhIHNpbXBsZSAyRCBjb29yZGluYXRlIHRyYW5zZm9ybVxuICogZnVuY3Rpb24uXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKG9sLkNvb3JkaW5hdGUpOiBvbC5Db29yZGluYXRlfSB0cmFuc2Zvcm0gQ29vcmRpbmF0ZVxuICogICAgIHRyYW5zZm9ybS5cbiAqIEByZXR1cm4ge29sLlRyYW5zZm9ybUZ1bmN0aW9ufSBUcmFuc2Zvcm0gZnVuY3Rpb24uXG4gKi9cbl9vbF9wcm9qXy5jcmVhdGVUcmFuc2Zvcm1Gcm9tQ29vcmRpbmF0ZVRyYW5zZm9ybSA9IGZ1bmN0aW9uKHRyYW5zZm9ybSkge1xuICByZXR1cm4gKFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7QXJyYXkuPG51bWJlcj59IGlucHV0IElucHV0LlxuICAgICAqIEBwYXJhbSB7QXJyYXkuPG51bWJlcj49fSBvcHRfb3V0cHV0IE91dHB1dC5cbiAgICAgKiBAcGFyYW0ge251bWJlcj19IG9wdF9kaW1lbnNpb24gRGltZW5zaW9uLlxuICAgICAqIEByZXR1cm4ge0FycmF5LjxudW1iZXI+fSBPdXRwdXQuXG4gICAgICovXG4gICAgZnVuY3Rpb24oaW5wdXQsIG9wdF9vdXRwdXQsIG9wdF9kaW1lbnNpb24pIHtcbiAgICAgIHZhciBsZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gICAgICB2YXIgZGltZW5zaW9uID0gb3B0X2RpbWVuc2lvbiAhPT0gdW5kZWZpbmVkID8gb3B0X2RpbWVuc2lvbiA6IDI7XG4gICAgICB2YXIgb3V0cHV0ID0gb3B0X291dHB1dCAhPT0gdW5kZWZpbmVkID8gb3B0X291dHB1dCA6IG5ldyBBcnJheShsZW5ndGgpO1xuICAgICAgdmFyIHBvaW50LCBpLCBqO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSArPSBkaW1lbnNpb24pIHtcbiAgICAgICAgcG9pbnQgPSB0cmFuc2Zvcm0oW2lucHV0W2ldLCBpbnB1dFtpICsgMV1dKTtcbiAgICAgICAgb3V0cHV0W2ldID0gcG9pbnRbMF07XG4gICAgICAgIG91dHB1dFtpICsgMV0gPSBwb2ludFsxXTtcbiAgICAgICAgZm9yIChqID0gZGltZW5zaW9uIC0gMTsgaiA+PSAyOyAtLWopIHtcbiAgICAgICAgICBvdXRwdXRbaSArIGpdID0gaW5wdXRbaSArIGpdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0pO1xufTtcblxuXG4vKipcbiAqIFRyYW5zZm9ybXMgYSBjb29yZGluYXRlIGZyb20gbG9uZ2l0dWRlL2xhdGl0dWRlIHRvIGEgZGlmZmVyZW50IHByb2plY3Rpb24uXG4gKiBAcGFyYW0ge29sLkNvb3JkaW5hdGV9IGNvb3JkaW5hdGUgQ29vcmRpbmF0ZSBhcyBsb25naXR1ZGUgYW5kIGxhdGl0dWRlLCBpLmUuXG4gKiAgICAgYW4gYXJyYXkgd2l0aCBsb25naXR1ZGUgYXMgMXN0IGFuZCBsYXRpdHVkZSBhcyAybmQgZWxlbWVudC5cbiAqIEBwYXJhbSB7b2wuUHJvamVjdGlvbkxpa2U9fSBvcHRfcHJvamVjdGlvbiBUYXJnZXQgcHJvamVjdGlvbi4gVGhlXG4gKiAgICAgZGVmYXVsdCBpcyBXZWIgTWVyY2F0b3IsIGkuZS4gJ0VQU0c6Mzg1NycuXG4gKiBAcmV0dXJuIHtvbC5Db29yZGluYXRlfSBDb29yZGluYXRlIHByb2plY3RlZCB0byB0aGUgdGFyZ2V0IHByb2plY3Rpb24uXG4gKiBAYXBpXG4gKi9cbl9vbF9wcm9qXy5mcm9tTG9uTGF0ID0gZnVuY3Rpb24oY29vcmRpbmF0ZSwgb3B0X3Byb2plY3Rpb24pIHtcbiAgcmV0dXJuIF9vbF9wcm9qXy50cmFuc2Zvcm0oY29vcmRpbmF0ZSwgJ0VQU0c6NDMyNicsXG4gICAgICBvcHRfcHJvamVjdGlvbiAhPT0gdW5kZWZpbmVkID8gb3B0X3Byb2plY3Rpb24gOiAnRVBTRzozODU3Jyk7XG59O1xuXG5cbi8qKlxuICogVHJhbnNmb3JtcyBhIGNvb3JkaW5hdGUgdG8gbG9uZ2l0dWRlL2xhdGl0dWRlLlxuICogQHBhcmFtIHtvbC5Db29yZGluYXRlfSBjb29yZGluYXRlIFByb2plY3RlZCBjb29yZGluYXRlLlxuICogQHBhcmFtIHtvbC5Qcm9qZWN0aW9uTGlrZT19IG9wdF9wcm9qZWN0aW9uIFByb2plY3Rpb24gb2YgdGhlIGNvb3JkaW5hdGUuXG4gKiAgICAgVGhlIGRlZmF1bHQgaXMgV2ViIE1lcmNhdG9yLCBpLmUuICdFUFNHOjM4NTcnLlxuICogQHJldHVybiB7b2wuQ29vcmRpbmF0ZX0gQ29vcmRpbmF0ZSBhcyBsb25naXR1ZGUgYW5kIGxhdGl0dWRlLCBpLmUuIGFuIGFycmF5XG4gKiAgICAgd2l0aCBsb25naXR1ZGUgYXMgMXN0IGFuZCBsYXRpdHVkZSBhcyAybmQgZWxlbWVudC5cbiAqIEBhcGlcbiAqL1xuX29sX3Byb2pfLnRvTG9uTGF0ID0gZnVuY3Rpb24oY29vcmRpbmF0ZSwgb3B0X3Byb2plY3Rpb24pIHtcbiAgdmFyIGxvbkxhdCA9IF9vbF9wcm9qXy50cmFuc2Zvcm0oY29vcmRpbmF0ZSxcbiAgICAgIG9wdF9wcm9qZWN0aW9uICE9PSB1bmRlZmluZWQgPyBvcHRfcHJvamVjdGlvbiA6ICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2Jyk7XG4gIHZhciBsb24gPSBsb25MYXRbMF07XG4gIGlmIChsb24gPCAtMTgwIHx8IGxvbiA+IDE4MCkge1xuICAgIGxvbkxhdFswXSA9IF9vbF9tYXRoXy5tb2R1bG8obG9uICsgMTgwLCAzNjApIC0gMTgwO1xuICB9XG4gIHJldHVybiBsb25MYXQ7XG59O1xuXG5cbi8qKlxuICogRmV0Y2hlcyBhIFByb2plY3Rpb24gb2JqZWN0IGZvciB0aGUgY29kZSBzcGVjaWZpZWQuXG4gKlxuICogQHBhcmFtIHtvbC5Qcm9qZWN0aW9uTGlrZX0gcHJvamVjdGlvbkxpa2UgRWl0aGVyIGEgY29kZSBzdHJpbmcgd2hpY2ggaXNcbiAqICAgICBhIGNvbWJpbmF0aW9uIG9mIGF1dGhvcml0eSBhbmQgaWRlbnRpZmllciBzdWNoIGFzIFwiRVBTRzo0MzI2XCIsIG9yIGFuXG4gKiAgICAgZXhpc3RpbmcgcHJvamVjdGlvbiBvYmplY3QsIG9yIHVuZGVmaW5lZC5cbiAqIEByZXR1cm4ge29sLnByb2ouUHJvamVjdGlvbn0gUHJvamVjdGlvbiBvYmplY3QsIG9yIG51bGwgaWYgbm90IGluIGxpc3QuXG4gKiBAYXBpXG4gKi9cbl9vbF9wcm9qXy5nZXQgPSBmdW5jdGlvbihwcm9qZWN0aW9uTGlrZSkge1xuICB2YXIgcHJvamVjdGlvbiA9IG51bGw7XG4gIGlmIChwcm9qZWN0aW9uTGlrZSBpbnN0YW5jZW9mIF9vbF9wcm9qX1Byb2plY3Rpb25fKSB7XG4gICAgcHJvamVjdGlvbiA9IHByb2plY3Rpb25MaWtlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9qZWN0aW9uTGlrZSA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgY29kZSA9IHByb2plY3Rpb25MaWtlO1xuICAgIHByb2plY3Rpb24gPSBfb2xfcHJval9wcm9qZWN0aW9uc18uZ2V0KGNvZGUpO1xuICAgIGlmIChfb2xfLkVOQUJMRV9QUk9KNEpTICYmICFwcm9qZWN0aW9uKSB7XG4gICAgICB2YXIgcHJvajRqcyA9IF9vbF9wcm9qX3Byb2o0Xy5nZXQoKTtcbiAgICAgIGlmICh0eXBlb2YgcHJvajRqcyA9PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgcHJvajRqcy5kZWZzKGNvZGUpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvamVjdGlvbiA9IG5ldyBfb2xfcHJval9Qcm9qZWN0aW9uXyh7Y29kZTogY29kZX0pO1xuICAgICAgICBfb2xfcHJval8uYWRkUHJvamVjdGlvbihwcm9qZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHByb2plY3Rpb247XG59O1xuXG5cbi8qKlxuICogQ2hlY2tzIGlmIHR3byBwcm9qZWN0aW9ucyBhcmUgdGhlIHNhbWUsIHRoYXQgaXMgZXZlcnkgY29vcmRpbmF0ZSBpbiBvbmVcbiAqIHByb2plY3Rpb24gZG9lcyByZXByZXNlbnQgdGhlIHNhbWUgZ2VvZ3JhcGhpYyBwb2ludCBhcyB0aGUgc2FtZSBjb29yZGluYXRlIGluXG4gKiB0aGUgb3RoZXIgcHJvamVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge29sLnByb2ouUHJvamVjdGlvbn0gcHJvamVjdGlvbjEgUHJvamVjdGlvbiAxLlxuICogQHBhcmFtIHtvbC5wcm9qLlByb2plY3Rpb259IHByb2plY3Rpb24yIFByb2plY3Rpb24gMi5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVxdWl2YWxlbnQuXG4gKiBAYXBpXG4gKi9cbl9vbF9wcm9qXy5lcXVpdmFsZW50ID0gZnVuY3Rpb24ocHJvamVjdGlvbjEsIHByb2plY3Rpb24yKSB7XG4gIGlmIChwcm9qZWN0aW9uMSA9PT0gcHJvamVjdGlvbjIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgZXF1YWxVbml0cyA9IHByb2plY3Rpb24xLmdldFVuaXRzKCkgPT09IHByb2plY3Rpb24yLmdldFVuaXRzKCk7XG4gIGlmIChwcm9qZWN0aW9uMS5nZXRDb2RlKCkgPT09IHByb2plY3Rpb24yLmdldENvZGUoKSkge1xuICAgIHJldHVybiBlcXVhbFVuaXRzO1xuICB9IGVsc2Uge1xuICAgIHZhciB0cmFuc2Zvcm1GbiA9IF9vbF9wcm9qXy5nZXRUcmFuc2Zvcm1Gcm9tUHJvamVjdGlvbnMoXG4gICAgICAgIHByb2plY3Rpb24xLCBwcm9qZWN0aW9uMik7XG4gICAgcmV0dXJuIHRyYW5zZm9ybUZuID09PSBfb2xfcHJval8uY2xvbmVUcmFuc2Zvcm0gJiYgZXF1YWxVbml0cztcbiAgfVxufTtcblxuXG4vKipcbiAqIEdpdmVuIHRoZSBwcm9qZWN0aW9uLWxpa2Ugb2JqZWN0cywgc2VhcmNoZXMgZm9yIGEgdHJhbnNmb3JtYXRpb25cbiAqIGZ1bmN0aW9uIHRvIGNvbnZlcnQgYSBjb29yZGluYXRlcyBhcnJheSBmcm9tIHRoZSBzb3VyY2UgcHJvamVjdGlvbiB0byB0aGVcbiAqIGRlc3RpbmF0aW9uIHByb2plY3Rpb24uXG4gKlxuICogQHBhcmFtIHtvbC5Qcm9qZWN0aW9uTGlrZX0gc291cmNlIFNvdXJjZS5cbiAqIEBwYXJhbSB7b2wuUHJvamVjdGlvbkxpa2V9IGRlc3RpbmF0aW9uIERlc3RpbmF0aW9uLlxuICogQHJldHVybiB7b2wuVHJhbnNmb3JtRnVuY3Rpb259IFRyYW5zZm9ybSBmdW5jdGlvbi5cbiAqIEBhcGlcbiAqL1xuX29sX3Byb2pfLmdldFRyYW5zZm9ybSA9IGZ1bmN0aW9uKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgdmFyIHNvdXJjZVByb2plY3Rpb24gPSBfb2xfcHJval8uZ2V0KHNvdXJjZSk7XG4gIHZhciBkZXN0aW5hdGlvblByb2plY3Rpb24gPSBfb2xfcHJval8uZ2V0KGRlc3RpbmF0aW9uKTtcbiAgcmV0dXJuIF9vbF9wcm9qXy5nZXRUcmFuc2Zvcm1Gcm9tUHJvamVjdGlvbnMoXG4gICAgICBzb3VyY2VQcm9qZWN0aW9uLCBkZXN0aW5hdGlvblByb2plY3Rpb24pO1xufTtcblxuXG4vKipcbiAqIFNlYXJjaGVzIGluIHRoZSBsaXN0IG9mIHRyYW5zZm9ybSBmdW5jdGlvbnMgZm9yIHRoZSBmdW5jdGlvbiBmb3IgY29udmVydGluZ1xuICogY29vcmRpbmF0ZXMgZnJvbSB0aGUgc291cmNlIHByb2plY3Rpb24gdG8gdGhlIGRlc3RpbmF0aW9uIHByb2plY3Rpb24uXG4gKlxuICogQHBhcmFtIHtvbC5wcm9qLlByb2plY3Rpb259IHNvdXJjZVByb2plY3Rpb24gU291cmNlIFByb2plY3Rpb24gb2JqZWN0LlxuICogQHBhcmFtIHtvbC5wcm9qLlByb2plY3Rpb259IGRlc3RpbmF0aW9uUHJvamVjdGlvbiBEZXN0aW5hdGlvbiBQcm9qZWN0aW9uXG4gKiAgICAgb2JqZWN0LlxuICogQHJldHVybiB7b2wuVHJhbnNmb3JtRnVuY3Rpb259IFRyYW5zZm9ybSBmdW5jdGlvbi5cbiAqL1xuX29sX3Byb2pfLmdldFRyYW5zZm9ybUZyb21Qcm9qZWN0aW9ucyA9IGZ1bmN0aW9uKHNvdXJjZVByb2plY3Rpb24sIGRlc3RpbmF0aW9uUHJvamVjdGlvbikge1xuICB2YXIgc291cmNlQ29kZSA9IHNvdXJjZVByb2plY3Rpb24uZ2V0Q29kZSgpO1xuICB2YXIgZGVzdGluYXRpb25Db2RlID0gZGVzdGluYXRpb25Qcm9qZWN0aW9uLmdldENvZGUoKTtcbiAgdmFyIHRyYW5zZm9ybSA9IF9vbF9wcm9qX3RyYW5zZm9ybXNfLmdldChzb3VyY2VDb2RlLCBkZXN0aW5hdGlvbkNvZGUpO1xuICBpZiAoX29sXy5FTkFCTEVfUFJPSjRKUyAmJiAhdHJhbnNmb3JtKSB7XG4gICAgdmFyIHByb2o0anMgPSBfb2xfcHJval9wcm9qNF8uZ2V0KCk7XG4gICAgaWYgKHR5cGVvZiBwcm9qNGpzID09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciBzb3VyY2VEZWYgPSBwcm9qNGpzLmRlZnMoc291cmNlQ29kZSk7XG4gICAgICB2YXIgZGVzdGluYXRpb25EZWYgPSBwcm9qNGpzLmRlZnMoZGVzdGluYXRpb25Db2RlKTtcblxuICAgICAgaWYgKHNvdXJjZURlZiAhPT0gdW5kZWZpbmVkICYmIGRlc3RpbmF0aW9uRGVmICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHNvdXJjZURlZiA9PT0gZGVzdGluYXRpb25EZWYpIHtcbiAgICAgICAgICBfb2xfcHJval8uYWRkRXF1aXZhbGVudFByb2plY3Rpb25zKFtkZXN0aW5hdGlvblByb2plY3Rpb24sIHNvdXJjZVByb2plY3Rpb25dKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcHJvajRUcmFuc2Zvcm0gPSBwcm9qNGpzKGRlc3RpbmF0aW9uQ29kZSwgc291cmNlQ29kZSk7XG4gICAgICAgICAgX29sX3Byb2pfLmFkZENvb3JkaW5hdGVUcmFuc2Zvcm1zKGRlc3RpbmF0aW9uUHJvamVjdGlvbiwgc291cmNlUHJvamVjdGlvbixcbiAgICAgICAgICAgICAgcHJvajRUcmFuc2Zvcm0uZm9yd2FyZCwgcHJvajRUcmFuc2Zvcm0uaW52ZXJzZSk7XG4gICAgICAgIH1cbiAgICAgICAgdHJhbnNmb3JtID0gX29sX3Byb2pfdHJhbnNmb3Jtc18uZ2V0KHNvdXJjZUNvZGUsIGRlc3RpbmF0aW9uQ29kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICghdHJhbnNmb3JtKSB7XG4gICAgdHJhbnNmb3JtID0gX29sX3Byb2pfLmlkZW50aXR5VHJhbnNmb3JtO1xuICB9XG4gIHJldHVybiB0cmFuc2Zvcm07XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheS48bnVtYmVyPn0gaW5wdXQgSW5wdXQgY29vcmRpbmF0ZSBhcnJheS5cbiAqIEBwYXJhbSB7QXJyYXkuPG51bWJlcj49fSBvcHRfb3V0cHV0IE91dHB1dCBhcnJheSBvZiBjb29yZGluYXRlIHZhbHVlcy5cbiAqIEBwYXJhbSB7bnVtYmVyPX0gb3B0X2RpbWVuc2lvbiBEaW1lbnNpb24uXG4gKiBAcmV0dXJuIHtBcnJheS48bnVtYmVyPn0gSW5wdXQgY29vcmRpbmF0ZSBhcnJheSAoc2FtZSBhcnJheSBhcyBpbnB1dCkuXG4gKi9cbl9vbF9wcm9qXy5pZGVudGl0eVRyYW5zZm9ybSA9IGZ1bmN0aW9uKGlucHV0LCBvcHRfb3V0cHV0LCBvcHRfZGltZW5zaW9uKSB7XG4gIGlmIChvcHRfb3V0cHV0ICE9PSB1bmRlZmluZWQgJiYgaW5wdXQgIT09IG9wdF9vdXRwdXQpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgaWkgPSBpbnB1dC5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICBvcHRfb3V0cHV0W2ldID0gaW5wdXRbaV07XG4gICAgfVxuICAgIGlucHV0ID0gb3B0X291dHB1dDtcbiAgfVxuICByZXR1cm4gaW5wdXQ7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheS48bnVtYmVyPn0gaW5wdXQgSW5wdXQgY29vcmRpbmF0ZSBhcnJheS5cbiAqIEBwYXJhbSB7QXJyYXkuPG51bWJlcj49fSBvcHRfb3V0cHV0IE91dHB1dCBhcnJheSBvZiBjb29yZGluYXRlIHZhbHVlcy5cbiAqIEBwYXJhbSB7bnVtYmVyPX0gb3B0X2RpbWVuc2lvbiBEaW1lbnNpb24uXG4gKiBAcmV0dXJuIHtBcnJheS48bnVtYmVyPn0gT3V0cHV0IGNvb3JkaW5hdGUgYXJyYXkgKG5ldyBhcnJheSwgc2FtZSBjb29yZGluYXRlXG4gKiAgICAgdmFsdWVzKS5cbiAqL1xuX29sX3Byb2pfLmNsb25lVHJhbnNmb3JtID0gZnVuY3Rpb24oaW5wdXQsIG9wdF9vdXRwdXQsIG9wdF9kaW1lbnNpb24pIHtcbiAgdmFyIG91dHB1dDtcbiAgaWYgKG9wdF9vdXRwdXQgIT09IHVuZGVmaW5lZCkge1xuICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IGlucHV0Lmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgIG9wdF9vdXRwdXRbaV0gPSBpbnB1dFtpXTtcbiAgICB9XG4gICAgb3V0cHV0ID0gb3B0X291dHB1dDtcbiAgfSBlbHNlIHtcbiAgICBvdXRwdXQgPSBpbnB1dC5zbGljZSgpO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59O1xuXG5cbi8qKlxuICogVHJhbnNmb3JtcyBhIGNvb3JkaW5hdGUgZnJvbSBzb3VyY2UgcHJvamVjdGlvbiB0byBkZXN0aW5hdGlvbiBwcm9qZWN0aW9uLlxuICogVGhpcyByZXR1cm5zIGEgbmV3IGNvb3JkaW5hdGUgKGFuZCBkb2VzIG5vdCBtb2RpZnkgdGhlIG9yaWdpbmFsKS5cbiAqXG4gKiBTZWUge0BsaW5rIG9sLnByb2oudHJhbnNmb3JtRXh0ZW50fSBmb3IgZXh0ZW50IHRyYW5zZm9ybWF0aW9uLlxuICogU2VlIHRoZSB0cmFuc2Zvcm0gbWV0aG9kIG9mIHtAbGluayBvbC5nZW9tLkdlb21ldHJ5fSBhbmQgaXRzIHN1YmNsYXNzZXMgZm9yXG4gKiBnZW9tZXRyeSB0cmFuc2Zvcm1zLlxuICpcbiAqIEBwYXJhbSB7b2wuQ29vcmRpbmF0ZX0gY29vcmRpbmF0ZSBDb29yZGluYXRlLlxuICogQHBhcmFtIHtvbC5Qcm9qZWN0aW9uTGlrZX0gc291cmNlIFNvdXJjZSBwcm9qZWN0aW9uLWxpa2UuXG4gKiBAcGFyYW0ge29sLlByb2plY3Rpb25MaWtlfSBkZXN0aW5hdGlvbiBEZXN0aW5hdGlvbiBwcm9qZWN0aW9uLWxpa2UuXG4gKiBAcmV0dXJuIHtvbC5Db29yZGluYXRlfSBDb29yZGluYXRlLlxuICogQGFwaVxuICovXG5fb2xfcHJval8udHJhbnNmb3JtID0gZnVuY3Rpb24oY29vcmRpbmF0ZSwgc291cmNlLCBkZXN0aW5hdGlvbikge1xuICB2YXIgdHJhbnNmb3JtRm4gPSBfb2xfcHJval8uZ2V0VHJhbnNmb3JtKHNvdXJjZSwgZGVzdGluYXRpb24pO1xuICByZXR1cm4gdHJhbnNmb3JtRm4oY29vcmRpbmF0ZSwgdW5kZWZpbmVkLCBjb29yZGluYXRlLmxlbmd0aCk7XG59O1xuXG5cbi8qKlxuICogVHJhbnNmb3JtcyBhbiBleHRlbnQgZnJvbSBzb3VyY2UgcHJvamVjdGlvbiB0byBkZXN0aW5hdGlvbiBwcm9qZWN0aW9uLiAgVGhpc1xuICogcmV0dXJucyBhIG5ldyBleHRlbnQgKGFuZCBkb2VzIG5vdCBtb2RpZnkgdGhlIG9yaWdpbmFsKS5cbiAqXG4gKiBAcGFyYW0ge29sLkV4dGVudH0gZXh0ZW50IFRoZSBleHRlbnQgdG8gdHJhbnNmb3JtLlxuICogQHBhcmFtIHtvbC5Qcm9qZWN0aW9uTGlrZX0gc291cmNlIFNvdXJjZSBwcm9qZWN0aW9uLWxpa2UuXG4gKiBAcGFyYW0ge29sLlByb2plY3Rpb25MaWtlfSBkZXN0aW5hdGlvbiBEZXN0aW5hdGlvbiBwcm9qZWN0aW9uLWxpa2UuXG4gKiBAcmV0dXJuIHtvbC5FeHRlbnR9IFRoZSB0cmFuc2Zvcm1lZCBleHRlbnQuXG4gKiBAYXBpXG4gKi9cbl9vbF9wcm9qXy50cmFuc2Zvcm1FeHRlbnQgPSBmdW5jdGlvbihleHRlbnQsIHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgdmFyIHRyYW5zZm9ybUZuID0gX29sX3Byb2pfLmdldFRyYW5zZm9ybShzb3VyY2UsIGRlc3RpbmF0aW9uKTtcbiAgcmV0dXJuIF9vbF9leHRlbnRfLmFwcGx5VHJhbnNmb3JtKGV4dGVudCwgdHJhbnNmb3JtRm4pO1xufTtcblxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIGdpdmVuIHBvaW50IHRvIHRoZSBkZXN0aW5hdGlvbiBwcm9qZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7b2wuQ29vcmRpbmF0ZX0gcG9pbnQgUG9pbnQuXG4gKiBAcGFyYW0ge29sLnByb2ouUHJvamVjdGlvbn0gc291cmNlUHJvamVjdGlvbiBTb3VyY2UgcHJvamVjdGlvbi5cbiAqIEBwYXJhbSB7b2wucHJvai5Qcm9qZWN0aW9ufSBkZXN0aW5hdGlvblByb2plY3Rpb24gRGVzdGluYXRpb24gcHJvamVjdGlvbi5cbiAqIEByZXR1cm4ge29sLkNvb3JkaW5hdGV9IFBvaW50LlxuICovXG5fb2xfcHJval8udHJhbnNmb3JtV2l0aFByb2plY3Rpb25zID0gZnVuY3Rpb24ocG9pbnQsIHNvdXJjZVByb2plY3Rpb24sIGRlc3RpbmF0aW9uUHJvamVjdGlvbikge1xuICB2YXIgdHJhbnNmb3JtRm4gPSBfb2xfcHJval8uZ2V0VHJhbnNmb3JtRnJvbVByb2plY3Rpb25zKFxuICAgICAgc291cmNlUHJvamVjdGlvbiwgZGVzdGluYXRpb25Qcm9qZWN0aW9uKTtcbiAgcmV0dXJuIHRyYW5zZm9ybUZuKHBvaW50KTtcbn07XG5cbi8qKlxuICogQWRkIHRyYW5zZm9ybXMgdG8gYW5kIGZyb20gRVBTRzo0MzI2IGFuZCBFUFNHOjM4NTcuICBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZFxuICogYnkgd2hlbiB0aGlzIG1vZHVsZSBpcyBleGVjdXRlZCBhbmQgc2hvdWxkIG9ubHkgbmVlZCB0byBiZSBjYWxsZWQgYWdhaW4gYWZ0ZXJcbiAqIGBvbC5wcm9qLmNsZWFyQWxsUHJvamVjdGlvbnMoKWAgaXMgY2FsbGVkIChlLmcuIGluIHRlc3RzKS5cbiAqL1xuX29sX3Byb2pfLmFkZENvbW1vbiA9IGZ1bmN0aW9uKCkge1xuICAvLyBBZGQgdHJhbnNmb3JtYXRpb25zIHRoYXQgZG9uJ3QgYWx0ZXIgY29vcmRpbmF0ZXMgdG8gY29udmVydCB3aXRoaW4gc2V0IG9mXG4gIC8vIHByb2plY3Rpb25zIHdpdGggZXF1YWwgbWVhbmluZy5cbiAgX29sX3Byb2pfLmFkZEVxdWl2YWxlbnRQcm9qZWN0aW9ucyhfb2xfcHJval9FUFNHMzg1N18uUFJPSkVDVElPTlMpO1xuICBfb2xfcHJval8uYWRkRXF1aXZhbGVudFByb2plY3Rpb25zKF9vbF9wcm9qX0VQU0c0MzI2Xy5QUk9KRUNUSU9OUyk7XG4gIC8vIEFkZCB0cmFuc2Zvcm1hdGlvbnMgdG8gY29udmVydCBFUFNHOjQzMjYgbGlrZSBjb29yZGluYXRlcyB0byBFUFNHOjM4NTcgbGlrZVxuICAvLyBjb29yZGluYXRlcyBhbmQgYmFjay5cbiAgX29sX3Byb2pfLmFkZEVxdWl2YWxlbnRUcmFuc2Zvcm1zKFxuICAgICAgX29sX3Byb2pfRVBTRzQzMjZfLlBST0pFQ1RJT05TLFxuICAgICAgX29sX3Byb2pfRVBTRzM4NTdfLlBST0pFQ1RJT05TLFxuICAgICAgX29sX3Byb2pfRVBTRzM4NTdfLmZyb21FUFNHNDMyNixcbiAgICAgIF9vbF9wcm9qX0VQU0czODU3Xy50b0VQU0c0MzI2KTtcbn07XG5cbl9vbF9wcm9qXy5hZGRDb21tb24oKTtcbmV4cG9ydCBkZWZhdWx0IF9vbF9wcm9qXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL3Byb2ouanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF9vbF9vYmpfIGZyb20gJy4vb2JqLmpzJztcbnZhciBfb2xfZXZlbnRzXyA9IHt9O1xuXG5cbi8qKlxuICogQHBhcmFtIHtvbC5FdmVudHNLZXl9IGxpc3RlbmVyT2JqIExpc3RlbmVyIG9iamVjdC5cbiAqIEByZXR1cm4ge29sLkV2ZW50c0xpc3RlbmVyRnVuY3Rpb25UeXBlfSBCb3VuZCBsaXN0ZW5lci5cbiAqL1xuX29sX2V2ZW50c18uYmluZExpc3RlbmVyXyA9IGZ1bmN0aW9uKGxpc3RlbmVyT2JqKSB7XG4gIHZhciBib3VuZExpc3RlbmVyID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgdmFyIGxpc3RlbmVyID0gbGlzdGVuZXJPYmoubGlzdGVuZXI7XG4gICAgdmFyIGJpbmRUbyA9IGxpc3RlbmVyT2JqLmJpbmRUbyB8fCBsaXN0ZW5lck9iai50YXJnZXQ7XG4gICAgaWYgKGxpc3RlbmVyT2JqLmNhbGxPbmNlKSB7XG4gICAgICBfb2xfZXZlbnRzXy51bmxpc3RlbkJ5S2V5KGxpc3RlbmVyT2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIGxpc3RlbmVyLmNhbGwoYmluZFRvLCBldnQpO1xuICB9O1xuICBsaXN0ZW5lck9iai5ib3VuZExpc3RlbmVyID0gYm91bmRMaXN0ZW5lcjtcbiAgcmV0dXJuIGJvdW5kTGlzdGVuZXI7XG59O1xuXG5cbi8qKlxuICogRmluZHMgdGhlIG1hdGNoaW5nIHtAbGluayBvbC5FdmVudHNLZXl9IGluIHRoZSBnaXZlbiBsaXN0ZW5lclxuICogYXJyYXkuXG4gKlxuICogQHBhcmFtIHshQXJyYXk8IW9sLkV2ZW50c0tleT59IGxpc3RlbmVycyBBcnJheSBvZiBsaXN0ZW5lcnMuXG4gKiBAcGFyYW0geyFGdW5jdGlvbn0gbGlzdGVuZXIgVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRfdGhpcyBUaGUgYHRoaXNgIHZhbHVlIGluc2lkZSB0aGUgbGlzdGVuZXIuXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfc2V0RGVsZXRlSW5kZXggU2V0IHRoZSBkZWxldGVJbmRleCBvbiB0aGUgbWF0Y2hpbmdcbiAqICAgICBsaXN0ZW5lciwgZm9yIHtAbGluayBvbC5ldmVudHMudW5saXN0ZW5CeUtleX0uXG4gKiBAcmV0dXJuIHtvbC5FdmVudHNLZXl8dW5kZWZpbmVkfSBUaGUgbWF0Y2hpbmcgbGlzdGVuZXIgb2JqZWN0LlxuICogQHByaXZhdGVcbiAqL1xuX29sX2V2ZW50c18uZmluZExpc3RlbmVyXyA9IGZ1bmN0aW9uKGxpc3RlbmVycywgbGlzdGVuZXIsIG9wdF90aGlzLFxuICAgIG9wdF9zZXREZWxldGVJbmRleCkge1xuICB2YXIgbGlzdGVuZXJPYmo7XG4gIGZvciAodmFyIGkgPSAwLCBpaSA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgbGlzdGVuZXJPYmogPSBsaXN0ZW5lcnNbaV07XG4gICAgaWYgKGxpc3RlbmVyT2JqLmxpc3RlbmVyID09PSBsaXN0ZW5lciAmJlxuICAgICAgICBsaXN0ZW5lck9iai5iaW5kVG8gPT09IG9wdF90aGlzKSB7XG4gICAgICBpZiAob3B0X3NldERlbGV0ZUluZGV4KSB7XG4gICAgICAgIGxpc3RlbmVyT2JqLmRlbGV0ZUluZGV4ID0gaTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsaXN0ZW5lck9iajtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge29sLkV2ZW50VGFyZ2V0TGlrZX0gdGFyZ2V0IFRhcmdldC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFR5cGUuXG4gKiBAcmV0dXJuIHtBcnJheS48b2wuRXZlbnRzS2V5Pnx1bmRlZmluZWR9IExpc3RlbmVycy5cbiAqL1xuX29sX2V2ZW50c18uZ2V0TGlzdGVuZXJzID0gZnVuY3Rpb24odGFyZ2V0LCB0eXBlKSB7XG4gIHZhciBsaXN0ZW5lck1hcCA9IHRhcmdldC5vbF9sbTtcbiAgcmV0dXJuIGxpc3RlbmVyTWFwID8gbGlzdGVuZXJNYXBbdHlwZV0gOiB1bmRlZmluZWQ7XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBsb29rdXAgb2YgbGlzdGVuZXJzLiAgSWYgb25lIGRvZXMgbm90IGV4aXN0IG9uIHRoZSB0YXJnZXQsIGl0IGlzXG4gKiBjcmVhdGVkLlxuICogQHBhcmFtIHtvbC5FdmVudFRhcmdldExpa2V9IHRhcmdldCBUYXJnZXQuXG4gKiBAcmV0dXJuIHshT2JqZWN0LjxzdHJpbmcsIEFycmF5LjxvbC5FdmVudHNLZXk+Pn0gTWFwIG9mXG4gKiAgICAgbGlzdGVuZXJzIGJ5IGV2ZW50IHR5cGUuXG4gKiBAcHJpdmF0ZVxuICovXG5fb2xfZXZlbnRzXy5nZXRMaXN0ZW5lck1hcF8gPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgdmFyIGxpc3RlbmVyTWFwID0gdGFyZ2V0Lm9sX2xtO1xuICBpZiAoIWxpc3RlbmVyTWFwKSB7XG4gICAgbGlzdGVuZXJNYXAgPSB0YXJnZXQub2xfbG0gPSB7fTtcbiAgfVxuICByZXR1cm4gbGlzdGVuZXJNYXA7XG59O1xuXG5cbi8qKlxuICogQ2xlYW4gdXAgYWxsIGxpc3RlbmVyIG9iamVjdHMgb2YgdGhlIGdpdmVuIHR5cGUuICBBbGwgcHJvcGVydGllcyBvbiB0aGVcbiAqIGxpc3RlbmVyIG9iamVjdHMgd2lsbCBiZSByZW1vdmVkLCBhbmQgaWYgbm8gbGlzdGVuZXJzIHJlbWFpbiBpbiB0aGUgbGlzdGVuZXJcbiAqIG1hcCwgaXQgd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIHRhcmdldC5cbiAqIEBwYXJhbSB7b2wuRXZlbnRUYXJnZXRMaWtlfSB0YXJnZXQgVGFyZ2V0LlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVHlwZS5cbiAqIEBwcml2YXRlXG4gKi9cbl9vbF9ldmVudHNfLnJlbW92ZUxpc3RlbmVyc18gPSBmdW5jdGlvbih0YXJnZXQsIHR5cGUpIHtcbiAgdmFyIGxpc3RlbmVycyA9IF9vbF9ldmVudHNfLmdldExpc3RlbmVycyh0YXJnZXQsIHR5cGUpO1xuICBpZiAobGlzdGVuZXJzKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGlpID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXS5ib3VuZExpc3RlbmVyKTtcbiAgICAgIF9vbF9vYmpfLmNsZWFyKGxpc3RlbmVyc1tpXSk7XG4gICAgfVxuICAgIGxpc3RlbmVycy5sZW5ndGggPSAwO1xuICAgIHZhciBsaXN0ZW5lck1hcCA9IHRhcmdldC5vbF9sbTtcbiAgICBpZiAobGlzdGVuZXJNYXApIHtcbiAgICAgIGRlbGV0ZSBsaXN0ZW5lck1hcFt0eXBlXTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhsaXN0ZW5lck1hcCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGRlbGV0ZSB0YXJnZXQub2xfbG07XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5cbi8qKlxuICogUmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIG9uIGFuIGV2ZW50IHRhcmdldC4gSW5zcGlyZWQgYnlcbiAqIHtAbGluayBodHRwczovL2dvb2dsZS5naXRodWIuaW8vY2xvc3VyZS1saWJyYXJ5L2FwaS9zb3VyY2UvY2xvc3VyZS9nb29nL2V2ZW50cy9ldmVudHMuanMuc3JjLmh0bWx9XG4gKlxuICogVGhpcyBmdW5jdGlvbiBlZmZpY2llbnRseSBiaW5kcyBhIGBsaXN0ZW5lcmAgdG8gYSBgdGhpc2Agb2JqZWN0LCBhbmQgcmV0dXJuc1xuICogYSBrZXkgZm9yIHVzZSB3aXRoIHtAbGluayBvbC5ldmVudHMudW5saXN0ZW5CeUtleX0uXG4gKlxuICogQHBhcmFtIHtvbC5FdmVudFRhcmdldExpa2V9IHRhcmdldCBFdmVudCB0YXJnZXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBFdmVudCB0eXBlLlxuICogQHBhcmFtIHtvbC5FdmVudHNMaXN0ZW5lckZ1bmN0aW9uVHlwZX0gbGlzdGVuZXIgTGlzdGVuZXIuXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdF90aGlzIE9iamVjdCByZWZlcmVuY2VkIGJ5IHRoZSBgdGhpc2Aga2V5d29yZCBpbiB0aGVcbiAqICAgICBsaXN0ZW5lci4gRGVmYXVsdCBpcyB0aGUgYHRhcmdldGAuXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfb25jZSBJZiB0cnVlLCBhZGQgdGhlIGxpc3RlbmVyIGFzIG9uZS1vZmYgbGlzdGVuZXIuXG4gKiBAcmV0dXJuIHtvbC5FdmVudHNLZXl9IFVuaXF1ZSBrZXkgZm9yIHRoZSBsaXN0ZW5lci5cbiAqL1xuX29sX2V2ZW50c18ubGlzdGVuID0gZnVuY3Rpb24odGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgb3B0X3RoaXMsIG9wdF9vbmNlKSB7XG4gIHZhciBsaXN0ZW5lck1hcCA9IF9vbF9ldmVudHNfLmdldExpc3RlbmVyTWFwXyh0YXJnZXQpO1xuICB2YXIgbGlzdGVuZXJzID0gbGlzdGVuZXJNYXBbdHlwZV07XG4gIGlmICghbGlzdGVuZXJzKSB7XG4gICAgbGlzdGVuZXJzID0gbGlzdGVuZXJNYXBbdHlwZV0gPSBbXTtcbiAgfVxuICB2YXIgbGlzdGVuZXJPYmogPSBfb2xfZXZlbnRzXy5maW5kTGlzdGVuZXJfKGxpc3RlbmVycywgbGlzdGVuZXIsIG9wdF90aGlzLFxuICAgICAgZmFsc2UpO1xuICBpZiAobGlzdGVuZXJPYmopIHtcbiAgICBpZiAoIW9wdF9vbmNlKSB7XG4gICAgICAvLyBUdXJuIG9uZS1vZmYgbGlzdGVuZXIgaW50byBhIHBlcm1hbmVudCBvbmUuXG4gICAgICBsaXN0ZW5lck9iai5jYWxsT25jZSA9IGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsaXN0ZW5lck9iaiA9IC8qKiBAdHlwZSB7b2wuRXZlbnRzS2V5fSAqLyAoe1xuICAgICAgYmluZFRvOiBvcHRfdGhpcyxcbiAgICAgIGNhbGxPbmNlOiAhIW9wdF9vbmNlLFxuICAgICAgbGlzdGVuZXI6IGxpc3RlbmVyLFxuICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICB0eXBlOiB0eXBlXG4gICAgfSk7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgX29sX2V2ZW50c18uYmluZExpc3RlbmVyXyhsaXN0ZW5lck9iaikpO1xuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyT2JqKTtcbiAgfVxuXG4gIHJldHVybiBsaXN0ZW5lck9iajtcbn07XG5cblxuLyoqXG4gKiBSZWdpc3RlcnMgYSBvbmUtb2ZmIGV2ZW50IGxpc3RlbmVyIG9uIGFuIGV2ZW50IHRhcmdldC4gSW5zcGlyZWQgYnlcbiAqIHtAbGluayBodHRwczovL2dvb2dsZS5naXRodWIuaW8vY2xvc3VyZS1saWJyYXJ5L2FwaS9zb3VyY2UvY2xvc3VyZS9nb29nL2V2ZW50cy9ldmVudHMuanMuc3JjLmh0bWx9XG4gKlxuICogVGhpcyBmdW5jdGlvbiBlZmZpY2llbnRseSBiaW5kcyBhIGBsaXN0ZW5lcmAgYXMgc2VsZi11bnJlZ2lzdGVyaW5nIGxpc3RlbmVyXG4gKiB0byBhIGB0aGlzYCBvYmplY3QsIGFuZCByZXR1cm5zIGEga2V5IGZvciB1c2Ugd2l0aFxuICoge0BsaW5rIG9sLmV2ZW50cy51bmxpc3RlbkJ5S2V5fSBpbiBjYXNlIHRoZSBsaXN0ZW5lciBuZWVkcyB0byBiZSB1bnJlZ2lzdGVyZWRcbiAqIGJlZm9yZSBpdCBpcyBjYWxsZWQuXG4gKlxuICogV2hlbiB7QGxpbmsgb2wuZXZlbnRzLmxpc3Rlbn0gaXMgY2FsbGVkIHdpdGggdGhlIHNhbWUgYXJndW1lbnRzIGFmdGVyIHRoaXNcbiAqIGZ1bmN0aW9uLCB0aGUgc2VsZi11bnJlZ2lzdGVyaW5nIGxpc3RlbmVyIHdpbGwgYmUgdHVybmVkIGludG8gYSBwZXJtYW5lbnRcbiAqIGxpc3RlbmVyLlxuICpcbiAqIEBwYXJhbSB7b2wuRXZlbnRUYXJnZXRMaWtlfSB0YXJnZXQgRXZlbnQgdGFyZ2V0LlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgRXZlbnQgdHlwZS5cbiAqIEBwYXJhbSB7b2wuRXZlbnRzTGlzdGVuZXJGdW5jdGlvblR5cGV9IGxpc3RlbmVyIExpc3RlbmVyLlxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRfdGhpcyBPYmplY3QgcmVmZXJlbmNlZCBieSB0aGUgYHRoaXNgIGtleXdvcmQgaW4gdGhlXG4gKiAgICAgbGlzdGVuZXIuIERlZmF1bHQgaXMgdGhlIGB0YXJnZXRgLlxuICogQHJldHVybiB7b2wuRXZlbnRzS2V5fSBLZXkgZm9yIHVubGlzdGVuQnlLZXkuXG4gKi9cbl9vbF9ldmVudHNfLmxpc3Rlbk9uY2UgPSBmdW5jdGlvbih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBvcHRfdGhpcykge1xuICByZXR1cm4gX29sX2V2ZW50c18ubGlzdGVuKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIG9wdF90aGlzLCB0cnVlKTtcbn07XG5cblxuLyoqXG4gKiBVbnJlZ2lzdGVycyBhbiBldmVudCBsaXN0ZW5lciBvbiBhbiBldmVudCB0YXJnZXQuIEluc3BpcmVkIGJ5XG4gKiB7QGxpbmsgaHR0cHM6Ly9nb29nbGUuZ2l0aHViLmlvL2Nsb3N1cmUtbGlicmFyeS9hcGkvc291cmNlL2Nsb3N1cmUvZ29vZy9ldmVudHMvZXZlbnRzLmpzLnNyYy5odG1sfVxuICpcbiAqIFRvIHJldHVybiBhIGxpc3RlbmVyLCB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIGNhbGxlZCB3aXRoIHRoZSBleGFjdCBzYW1lXG4gKiBhcmd1bWVudHMgdGhhdCB3ZXJlIHVzZWQgZm9yIGEgcHJldmlvdXMge0BsaW5rIG9sLmV2ZW50cy5saXN0ZW59IGNhbGwuXG4gKlxuICogQHBhcmFtIHtvbC5FdmVudFRhcmdldExpa2V9IHRhcmdldCBFdmVudCB0YXJnZXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBFdmVudCB0eXBlLlxuICogQHBhcmFtIHtvbC5FdmVudHNMaXN0ZW5lckZ1bmN0aW9uVHlwZX0gbGlzdGVuZXIgTGlzdGVuZXIuXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdF90aGlzIE9iamVjdCByZWZlcmVuY2VkIGJ5IHRoZSBgdGhpc2Aga2V5d29yZCBpbiB0aGVcbiAqICAgICBsaXN0ZW5lci4gRGVmYXVsdCBpcyB0aGUgYHRhcmdldGAuXG4gKi9cbl9vbF9ldmVudHNfLnVubGlzdGVuID0gZnVuY3Rpb24odGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgb3B0X3RoaXMpIHtcbiAgdmFyIGxpc3RlbmVycyA9IF9vbF9ldmVudHNfLmdldExpc3RlbmVycyh0YXJnZXQsIHR5cGUpO1xuICBpZiAobGlzdGVuZXJzKSB7XG4gICAgdmFyIGxpc3RlbmVyT2JqID0gX29sX2V2ZW50c18uZmluZExpc3RlbmVyXyhsaXN0ZW5lcnMsIGxpc3RlbmVyLCBvcHRfdGhpcyxcbiAgICAgICAgdHJ1ZSk7XG4gICAgaWYgKGxpc3RlbmVyT2JqKSB7XG4gICAgICBfb2xfZXZlbnRzXy51bmxpc3RlbkJ5S2V5KGxpc3RlbmVyT2JqKTtcbiAgICB9XG4gIH1cbn07XG5cblxuLyoqXG4gKiBVbnJlZ2lzdGVycyBldmVudCBsaXN0ZW5lcnMgb24gYW4gZXZlbnQgdGFyZ2V0LiBJbnNwaXJlZCBieVxuICoge0BsaW5rIGh0dHBzOi8vZ29vZ2xlLmdpdGh1Yi5pby9jbG9zdXJlLWxpYnJhcnkvYXBpL3NvdXJjZS9jbG9zdXJlL2dvb2cvZXZlbnRzL2V2ZW50cy5qcy5zcmMuaHRtbH1cbiAqXG4gKiBUaGUgYXJndW1lbnQgcGFzc2VkIHRvIHRoaXMgZnVuY3Rpb24gaXMgdGhlIGtleSByZXR1cm5lZCBmcm9tXG4gKiB7QGxpbmsgb2wuZXZlbnRzLmxpc3Rlbn0gb3Ige0BsaW5rIG9sLmV2ZW50cy5saXN0ZW5PbmNlfS5cbiAqXG4gKiBAcGFyYW0ge29sLkV2ZW50c0tleX0ga2V5IFRoZSBrZXkuXG4gKi9cbl9vbF9ldmVudHNfLnVubGlzdGVuQnlLZXkgPSBmdW5jdGlvbihrZXkpIHtcbiAgaWYgKGtleSAmJiBrZXkudGFyZ2V0KSB7XG4gICAga2V5LnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGtleS50eXBlLCBrZXkuYm91bmRMaXN0ZW5lcik7XG4gICAgdmFyIGxpc3RlbmVycyA9IF9vbF9ldmVudHNfLmdldExpc3RlbmVycyhrZXkudGFyZ2V0LCBrZXkudHlwZSk7XG4gICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgdmFyIGkgPSAnZGVsZXRlSW5kZXgnIGluIGtleSA/IGtleS5kZWxldGVJbmRleCA6IGxpc3RlbmVycy5pbmRleE9mKGtleSk7XG4gICAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICAgIGlmIChsaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIF9vbF9ldmVudHNfLnJlbW92ZUxpc3RlbmVyc18oa2V5LnRhcmdldCwga2V5LnR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBfb2xfb2JqXy5jbGVhcihrZXkpO1xuICB9XG59O1xuXG5cbi8qKlxuICogVW5yZWdpc3RlcnMgYWxsIGV2ZW50IGxpc3RlbmVycyBvbiBhbiBldmVudCB0YXJnZXQuIEluc3BpcmVkIGJ5XG4gKiB7QGxpbmsgaHR0cHM6Ly9nb29nbGUuZ2l0aHViLmlvL2Nsb3N1cmUtbGlicmFyeS9hcGkvc291cmNlL2Nsb3N1cmUvZ29vZy9ldmVudHMvZXZlbnRzLmpzLnNyYy5odG1sfVxuICpcbiAqIEBwYXJhbSB7b2wuRXZlbnRUYXJnZXRMaWtlfSB0YXJnZXQgVGFyZ2V0LlxuICovXG5fb2xfZXZlbnRzXy51bmxpc3RlbkFsbCA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICB2YXIgbGlzdGVuZXJNYXAgPSBfb2xfZXZlbnRzXy5nZXRMaXN0ZW5lck1hcF8odGFyZ2V0KTtcbiAgZm9yICh2YXIgdHlwZSBpbiBsaXN0ZW5lck1hcCkge1xuICAgIF9vbF9ldmVudHNfLnJlbW92ZUxpc3RlbmVyc18odGFyZ2V0LCB0eXBlKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IF9vbF9ldmVudHNfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvZXZlbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfb2xfb2JqXyA9IHt9O1xuXG5cbi8qKlxuICogUG9seWZpbGwgZm9yIE9iamVjdC5hc3NpZ24oKS4gIEFzc2lnbnMgZW51bWVyYWJsZSBhbmQgb3duIHByb3BlcnRpZXMgZnJvbVxuICogb25lIG9yIG1vcmUgc291cmNlIG9iamVjdHMgdG8gYSB0YXJnZXQgb2JqZWN0LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2Fzc2lnblxuICogQHBhcmFtIHshT2JqZWN0fSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3QuXG4gKiBAcGFyYW0gey4uLk9iamVjdH0gdmFyX3NvdXJjZXMgVGhlIHNvdXJjZSBvYmplY3QocykuXG4gKiBAcmV0dXJuIHshT2JqZWN0fSBUaGUgbW9kaWZpZWQgdGFyZ2V0IG9iamVjdC5cbiAqL1xuX29sX29ial8uYXNzaWduID0gKHR5cGVvZiBPYmplY3QuYXNzaWduID09PSAnZnVuY3Rpb24nKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbih0YXJnZXQsIHZhcl9zb3VyY2VzKSB7XG4gIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCB8fCB0YXJnZXQgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QnKTtcbiAgfVxuXG4gIHZhciBvdXRwdXQgPSBPYmplY3QodGFyZ2V0KTtcbiAgZm9yICh2YXIgaSA9IDEsIGlpID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCAmJiBzb3VyY2UgIT09IG51bGwpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgb3V0cHV0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufTtcblxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIHByb3BlcnRpZXMgZnJvbSBhbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xlYXIuXG4gKi9cbl9vbF9vYmpfLmNsZWFyID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gIGZvciAodmFyIHByb3BlcnR5IGluIG9iamVjdCkge1xuICAgIGRlbGV0ZSBvYmplY3RbcHJvcGVydHldO1xuICB9XG59O1xuXG5cbi8qKlxuICogR2V0IGFuIGFycmF5IG9mIHByb3BlcnR5IHZhbHVlcyBmcm9tIGFuIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0PEssVj59IG9iamVjdCBUaGUgb2JqZWN0IGZyb20gd2hpY2ggdG8gZ2V0IHRoZSB2YWx1ZXMuXG4gKiBAcmV0dXJuIHshQXJyYXk8Vj59IFRoZSBwcm9wZXJ0eSB2YWx1ZXMuXG4gKiBAdGVtcGxhdGUgSyxWXG4gKi9cbl9vbF9vYmpfLmdldFZhbHVlcyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICB2YXIgdmFsdWVzID0gW107XG4gIGZvciAodmFyIHByb3BlcnR5IGluIG9iamVjdCkge1xuICAgIHZhbHVlcy5wdXNoKG9iamVjdFtwcm9wZXJ0eV0pO1xuICB9XG4gIHJldHVybiB2YWx1ZXM7XG59O1xuXG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBoYXMgYW55IHByb3BlcnRpZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSBUaGUgb2JqZWN0IGlzIGVtcHR5LlxuICovXG5fb2xfb2JqXy5pc0VtcHR5ID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gIHZhciBwcm9wZXJ0eTtcbiAgZm9yIChwcm9wZXJ0eSBpbiBvYmplY3QpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuICFwcm9wZXJ0eTtcbn07XG5leHBvcnQgZGVmYXVsdCBfb2xfb2JqXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL29iai5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX29sX3RpbGVjb29yZF8gPSB7fTtcblxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB6IFouXG4gKiBAcGFyYW0ge251bWJlcn0geCBYLlxuICogQHBhcmFtIHtudW1iZXJ9IHkgWS5cbiAqIEBwYXJhbSB7b2wuVGlsZUNvb3JkPX0gb3B0X3RpbGVDb29yZCBUaWxlIGNvb3JkaW5hdGUuXG4gKiBAcmV0dXJuIHtvbC5UaWxlQ29vcmR9IFRpbGUgY29vcmRpbmF0ZS5cbiAqL1xuX29sX3RpbGVjb29yZF8uY3JlYXRlT3JVcGRhdGUgPSBmdW5jdGlvbih6LCB4LCB5LCBvcHRfdGlsZUNvb3JkKSB7XG4gIGlmIChvcHRfdGlsZUNvb3JkICE9PSB1bmRlZmluZWQpIHtcbiAgICBvcHRfdGlsZUNvb3JkWzBdID0gejtcbiAgICBvcHRfdGlsZUNvb3JkWzFdID0geDtcbiAgICBvcHRfdGlsZUNvb3JkWzJdID0geTtcbiAgICByZXR1cm4gb3B0X3RpbGVDb29yZDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW3osIHgsIHldO1xuICB9XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHogWi5cbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFguXG4gKiBAcGFyYW0ge251bWJlcn0geSBZLlxuICogQHJldHVybiB7c3RyaW5nfSBLZXkuXG4gKi9cbl9vbF90aWxlY29vcmRfLmdldEtleVpYWSA9IGZ1bmN0aW9uKHosIHgsIHkpIHtcbiAgcmV0dXJuIHogKyAnLycgKyB4ICsgJy8nICsgeTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIGtleSBmb3IgYSB0aWxlIGNvb3JkLlxuICogQHBhcmFtIHtvbC5UaWxlQ29vcmR9IHRpbGVDb29yZCBUaGUgdGlsZSBjb29yZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gS2V5LlxuICovXG5fb2xfdGlsZWNvb3JkXy5nZXRLZXkgPSBmdW5jdGlvbih0aWxlQ29vcmQpIHtcbiAgcmV0dXJuIF9vbF90aWxlY29vcmRfLmdldEtleVpYWSh0aWxlQ29vcmRbMF0sIHRpbGVDb29yZFsxXSwgdGlsZUNvb3JkWzJdKTtcbn07XG5cblxuLyoqXG4gKiBHZXQgYSB0aWxlIGNvb3JkIGdpdmVuIGEga2V5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgdGlsZSBjb29yZCBrZXkuXG4gKiBAcmV0dXJuIHtvbC5UaWxlQ29vcmR9IFRoZSB0aWxlIGNvb3JkLlxuICovXG5fb2xfdGlsZWNvb3JkXy5mcm9tS2V5ID0gZnVuY3Rpb24oa2V5KSB7XG4gIHJldHVybiBrZXkuc3BsaXQoJy8nKS5tYXAoTnVtYmVyKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge29sLlRpbGVDb29yZH0gdGlsZUNvb3JkIFRpbGUgY29vcmQuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEhhc2guXG4gKi9cbl9vbF90aWxlY29vcmRfLmhhc2ggPSBmdW5jdGlvbih0aWxlQ29vcmQpIHtcbiAgcmV0dXJuICh0aWxlQ29vcmRbMV0gPDwgdGlsZUNvb3JkWzBdKSArIHRpbGVDb29yZFsyXTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge29sLlRpbGVDb29yZH0gdGlsZUNvb3JkIFRpbGUgY29vcmQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFF1YWQga2V5LlxuICovXG5fb2xfdGlsZWNvb3JkXy5xdWFkS2V5ID0gZnVuY3Rpb24odGlsZUNvb3JkKSB7XG4gIHZhciB6ID0gdGlsZUNvb3JkWzBdO1xuICB2YXIgZGlnaXRzID0gbmV3IEFycmF5KHopO1xuICB2YXIgbWFzayA9IDEgPDwgKHogLSAxKTtcbiAgdmFyIGksIGNoYXJDb2RlO1xuICBmb3IgKGkgPSAwOyBpIDwgejsgKytpKSB7XG4gICAgLy8gNDggaXMgY2hhckNvZGUgZm9yIDAgLSAnMCcuY2hhckNvZGVBdCgwKVxuICAgIGNoYXJDb2RlID0gNDg7XG4gICAgaWYgKHRpbGVDb29yZFsxXSAmIG1hc2spIHtcbiAgICAgIGNoYXJDb2RlICs9IDE7XG4gICAgfVxuICAgIGlmICh0aWxlQ29vcmRbMl0gJiBtYXNrKSB7XG4gICAgICBjaGFyQ29kZSArPSAyO1xuICAgIH1cbiAgICBkaWdpdHNbaV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJDb2RlKTtcbiAgICBtYXNrID4+PSAxO1xuICB9XG4gIHJldHVybiBkaWdpdHMuam9pbignJyk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtvbC5UaWxlQ29vcmR9IHRpbGVDb29yZCBUaWxlIGNvb3JkaW5hdGUuXG4gKiBAcGFyYW0geyFvbC50aWxlZ3JpZC5UaWxlR3JpZH0gdGlsZUdyaWQgVGlsZSBncmlkLlxuICogQHJldHVybiB7Ym9vbGVhbn0gVGlsZSBjb29yZGluYXRlIGlzIHdpdGhpbiBleHRlbnQgYW5kIHpvb20gbGV2ZWwgcmFuZ2UuXG4gKi9cbl9vbF90aWxlY29vcmRfLndpdGhpbkV4dGVudEFuZFogPSBmdW5jdGlvbih0aWxlQ29vcmQsIHRpbGVHcmlkKSB7XG4gIHZhciB6ID0gdGlsZUNvb3JkWzBdO1xuICB2YXIgeCA9IHRpbGVDb29yZFsxXTtcbiAgdmFyIHkgPSB0aWxlQ29vcmRbMl07XG5cbiAgaWYgKHRpbGVHcmlkLmdldE1pblpvb20oKSA+IHogfHwgeiA+IHRpbGVHcmlkLmdldE1heFpvb20oKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgZXh0ZW50ID0gdGlsZUdyaWQuZ2V0RXh0ZW50KCk7XG4gIHZhciB0aWxlUmFuZ2U7XG4gIGlmICghZXh0ZW50KSB7XG4gICAgdGlsZVJhbmdlID0gdGlsZUdyaWQuZ2V0RnVsbFRpbGVSYW5nZSh6KTtcbiAgfSBlbHNlIHtcbiAgICB0aWxlUmFuZ2UgPSB0aWxlR3JpZC5nZXRUaWxlUmFuZ2VGb3JFeHRlbnRBbmRaKGV4dGVudCwgeik7XG4gIH1cbiAgaWYgKCF0aWxlUmFuZ2UpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGlsZVJhbmdlLmNvbnRhaW5zWFkoeCwgeSk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBfb2xfdGlsZWNvb3JkXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL3RpbGVjb29yZC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBlbnVtIHtudW1iZXJ9XG4gKi9cbnZhciBfb2xfVGlsZVN0YXRlXyA9IHtcbiAgSURMRTogMCxcbiAgTE9BRElORzogMSxcbiAgTE9BREVEOiAyLFxuICBFUlJPUjogMyxcbiAgRU1QVFk6IDQsXG4gIEFCT1JUOiA1XG59O1xuXG5leHBvcnQgZGVmYXVsdCBfb2xfVGlsZVN0YXRlXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL3RpbGVzdGF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgX29sX0Fzc2VydGlvbkVycm9yXyBmcm9tICcuL2Fzc2VydGlvbmVycm9yLmpzJztcbnZhciBfb2xfYXNzZXJ0c18gPSB7fTtcblxuXG4vKipcbiAqIEBwYXJhbSB7Kn0gYXNzZXJ0aW9uIEFzc2VydGlvbiB3ZSBleHBlY3RlZCB0byBiZSB0cnV0aHkuXG4gKiBAcGFyYW0ge251bWJlcn0gZXJyb3JDb2RlIEVycm9yIGNvZGUuXG4gKi9cbl9vbF9hc3NlcnRzXy5hc3NlcnQgPSBmdW5jdGlvbihhc3NlcnRpb24sIGVycm9yQ29kZSkge1xuICBpZiAoIWFzc2VydGlvbikge1xuICAgIHRocm93IG5ldyBfb2xfQXNzZXJ0aW9uRXJyb3JfKGVycm9yQ29kZSk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBfb2xfYXNzZXJ0c187XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9hc3NlcnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUHJvamVjdGlvbiB1bml0czogYCdkZWdyZWVzJ2AsIGAnZnQnYCwgYCdtJ2AsIGAncGl4ZWxzJ2AsIGAndGlsZS1waXhlbHMnYCBvclxuICogYCd1cy1mdCdgLlxuICogQGVudW0ge3N0cmluZ31cbiAqL1xudmFyIF9vbF9wcm9qX1VuaXRzXyA9IHtcbiAgREVHUkVFUzogJ2RlZ3JlZXMnLFxuICBGRUVUOiAnZnQnLFxuICBNRVRFUlM6ICdtJyxcbiAgUElYRUxTOiAncGl4ZWxzJyxcbiAgVElMRV9QSVhFTFM6ICd0aWxlLXBpeGVscycsXG4gIFVTRkVFVDogJ3VzLWZ0J1xufTtcblxuXG4vKipcbiAqIE1ldGVycyBwZXIgdW5pdCBsb29rdXAgdGFibGUuXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtPYmplY3QuPG9sLnByb2ouVW5pdHMsIG51bWJlcj59XG4gKiBAYXBpXG4gKi9cbl9vbF9wcm9qX1VuaXRzXy5NRVRFUlNfUEVSX1VOSVQgPSB7fTtcbi8vIHVzZSB0aGUgcmFkaXVzIG9mIHRoZSBOb3JtYWwgc3BoZXJlXG5fb2xfcHJval9Vbml0c18uTUVURVJTX1BFUl9VTklUW19vbF9wcm9qX1VuaXRzXy5ERUdSRUVTXSA9XG4gICAgMiAqIE1hdGguUEkgKiA2MzcwOTk3IC8gMzYwO1xuX29sX3Byb2pfVW5pdHNfLk1FVEVSU19QRVJfVU5JVFtfb2xfcHJval9Vbml0c18uRkVFVF0gPSAwLjMwNDg7XG5fb2xfcHJval9Vbml0c18uTUVURVJTX1BFUl9VTklUW19vbF9wcm9qX1VuaXRzXy5NRVRFUlNdID0gMTtcbl9vbF9wcm9qX1VuaXRzXy5NRVRFUlNfUEVSX1VOSVRbX29sX3Byb2pfVW5pdHNfLlVTRkVFVF0gPSAxMjAwIC8gMzkzNztcbmV4cG9ydCBkZWZhdWx0IF9vbF9wcm9qX1VuaXRzXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL3Byb2ovdW5pdHMuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfb2xfIGZyb20gJy4uL2luZGV4LmpzJztcbmltcG9ydCBfb2xfRGlzcG9zYWJsZV8gZnJvbSAnLi4vZGlzcG9zYWJsZS5qcyc7XG5pbXBvcnQgX29sX2V2ZW50c18gZnJvbSAnLi4vZXZlbnRzLmpzJztcbmltcG9ydCBfb2xfZXZlbnRzX0V2ZW50XyBmcm9tICcuLi9ldmVudHMvZXZlbnQuanMnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIEEgc2ltcGxpZmllZCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgVzNDIERPTSBMZXZlbCAyIEV2ZW50VGFyZ2V0IGludGVyZmFjZS5cbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LnczLm9yZy9UUi8yMDAwL1JFQy1ET00tTGV2ZWwtMi1FdmVudHMtMjAwMDExMTMvZXZlbnRzLmh0bWwjRXZlbnRzLUV2ZW50VGFyZ2V0fVxuICpcbiAqIFRoZXJlIGFyZSB0d28gaW1wb3J0YW50IHNpbXBsaWZpY2F0aW9ucyBjb21wYXJlZCB0byB0aGUgc3BlY2lmaWNhdGlvbjpcbiAqXG4gKiAxLiBUaGUgaGFuZGxpbmcgb2YgYHVzZUNhcHR1cmVgIGluIGBhZGRFdmVudExpc3RlbmVyYCBhbmRcbiAqICAgIGByZW1vdmVFdmVudExpc3RlbmVyYC4gVGhlcmUgaXMgbm8gcmVhbCBjYXB0dXJlIG1vZGVsLlxuICogMi4gVGhlIGhhbmRsaW5nIG9mIGBzdG9wUHJvcGFnYXRpb25gIGFuZCBgcHJldmVudERlZmF1bHRgIG9uIGBkaXNwYXRjaEV2ZW50YC5cbiAqICAgIFRoZXJlIGlzIG5vIGV2ZW50IHRhcmdldCBoaWVyYXJjaHkuIFdoZW4gYSBsaXN0ZW5lciBjYWxsc1xuICogICAgYHN0b3BQcm9wYWdhdGlvbmAgb3IgYHByZXZlbnREZWZhdWx0YCBvbiBhbiBldmVudCBvYmplY3QsIGl0IG1lYW5zIHRoYXQgbm9cbiAqICAgIG1vcmUgbGlzdGVuZXJzIGFmdGVyIHRoaXMgb25lIHdpbGwgYmUgY2FsbGVkLiBTYW1lIGFzIHdoZW4gdGhlIGxpc3RlbmVyXG4gKiAgICByZXR1cm5zIGZhbHNlLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVuZHMge29sLkRpc3Bvc2FibGV9XG4gKi9cbnZhciBfb2xfZXZlbnRzX0V2ZW50VGFyZ2V0XyA9IGZ1bmN0aW9uKCkge1xuXG4gIF9vbF9EaXNwb3NhYmxlXy5jYWxsKHRoaXMpO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7IU9iamVjdC48c3RyaW5nLCBudW1iZXI+fVxuICAgKi9cbiAgdGhpcy5wZW5kaW5nUmVtb3ZhbHNfID0ge307XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHshT2JqZWN0LjxzdHJpbmcsIG51bWJlcj59XG4gICAqL1xuICB0aGlzLmRpc3BhdGNoaW5nXyA9IHt9O1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7IU9iamVjdC48c3RyaW5nLCBBcnJheS48b2wuRXZlbnRzTGlzdGVuZXJGdW5jdGlvblR5cGU+Pn1cbiAgICovXG4gIHRoaXMubGlzdGVuZXJzXyA9IHt9O1xuXG59O1xuXG5fb2xfLmluaGVyaXRzKF9vbF9ldmVudHNfRXZlbnRUYXJnZXRfLCBfb2xfRGlzcG9zYWJsZV8pO1xuXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVHlwZS5cbiAqIEBwYXJhbSB7b2wuRXZlbnRzTGlzdGVuZXJGdW5jdGlvblR5cGV9IGxpc3RlbmVyIExpc3RlbmVyLlxuICovXG5fb2xfZXZlbnRzX0V2ZW50VGFyZ2V0Xy5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc19bdHlwZV07XG4gIGlmICghbGlzdGVuZXJzKSB7XG4gICAgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnNfW3R5cGVdID0gW107XG4gIH1cbiAgaWYgKGxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSA9PT0gLTEpIHtcbiAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge3t0eXBlOiBzdHJpbmcsXG4gKiAgICAgdGFyZ2V0OiAoRXZlbnRUYXJnZXR8b2wuZXZlbnRzLkV2ZW50VGFyZ2V0fHVuZGVmaW5lZCl9fG9sLmV2ZW50cy5FdmVudHxcbiAqICAgICBzdHJpbmd9IGV2ZW50IEV2ZW50IG9yIGV2ZW50IHR5cGUuXG4gKiBAcmV0dXJuIHtib29sZWFufHVuZGVmaW5lZH0gYGZhbHNlYCBpZiBhbnlvbmUgY2FsbGVkIHByZXZlbnREZWZhdWx0IG9uIHRoZVxuICogICAgIGV2ZW50IG9iamVjdCBvciBpZiBhbnkgb2YgdGhlIGxpc3RlbmVycyByZXR1cm5lZCBmYWxzZS5cbiAqL1xuX29sX2V2ZW50c19FdmVudFRhcmdldF8ucHJvdG90eXBlLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbihldmVudCkge1xuICB2YXIgZXZ0ID0gdHlwZW9mIGV2ZW50ID09PSAnc3RyaW5nJyA/IG5ldyBfb2xfZXZlbnRzX0V2ZW50XyhldmVudCkgOiBldmVudDtcbiAgdmFyIHR5cGUgPSBldnQudHlwZTtcbiAgZXZ0LnRhcmdldCA9IHRoaXM7XG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc19bdHlwZV07XG4gIHZhciBwcm9wYWdhdGU7XG4gIGlmIChsaXN0ZW5lcnMpIHtcbiAgICBpZiAoISh0eXBlIGluIHRoaXMuZGlzcGF0Y2hpbmdfKSkge1xuICAgICAgdGhpcy5kaXNwYXRjaGluZ19bdHlwZV0gPSAwO1xuICAgICAgdGhpcy5wZW5kaW5nUmVtb3ZhbHNfW3R5cGVdID0gMDtcbiAgICB9XG4gICAgKyt0aGlzLmRpc3BhdGNoaW5nX1t0eXBlXTtcbiAgICBmb3IgKHZhciBpID0gMCwgaWkgPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgaWYgKGxpc3RlbmVyc1tpXS5jYWxsKHRoaXMsIGV2dCkgPT09IGZhbHNlIHx8IGV2dC5wcm9wYWdhdGlvblN0b3BwZWQpIHtcbiAgICAgICAgcHJvcGFnYXRlID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICAtLXRoaXMuZGlzcGF0Y2hpbmdfW3R5cGVdO1xuICAgIGlmICh0aGlzLmRpc3BhdGNoaW5nX1t0eXBlXSA9PT0gMCkge1xuICAgICAgdmFyIHBlbmRpbmdSZW1vdmFscyA9IHRoaXMucGVuZGluZ1JlbW92YWxzX1t0eXBlXTtcbiAgICAgIGRlbGV0ZSB0aGlzLnBlbmRpbmdSZW1vdmFsc19bdHlwZV07XG4gICAgICB3aGlsZSAocGVuZGluZ1JlbW92YWxzLS0pIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIF9vbF8ubnVsbEZ1bmN0aW9uKTtcbiAgICAgIH1cbiAgICAgIGRlbGV0ZSB0aGlzLmRpc3BhdGNoaW5nX1t0eXBlXTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3BhZ2F0ZTtcbiAgfVxufTtcblxuXG4vKipcbiAqIEBpbmhlcml0RG9jXG4gKi9cbl9vbF9ldmVudHNfRXZlbnRUYXJnZXRfLnByb3RvdHlwZS5kaXNwb3NlSW50ZXJuYWwgPSBmdW5jdGlvbigpIHtcbiAgX29sX2V2ZW50c18udW5saXN0ZW5BbGwodGhpcyk7XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBsaXN0ZW5lcnMgZm9yIGEgc3BlY2lmaWVkIGV2ZW50IHR5cGUuIExpc3RlbmVycyBhcmUgcmV0dXJuZWQgaW4gdGhlXG4gKiBvcmRlciB0aGF0IHRoZXkgd2lsbCBiZSBjYWxsZWQgaW4uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVHlwZS5cbiAqIEByZXR1cm4ge0FycmF5LjxvbC5FdmVudHNMaXN0ZW5lckZ1bmN0aW9uVHlwZT59IExpc3RlbmVycy5cbiAqL1xuX29sX2V2ZW50c19FdmVudFRhcmdldF8ucHJvdG90eXBlLmdldExpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgcmV0dXJuIHRoaXMubGlzdGVuZXJzX1t0eXBlXTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZz19IG9wdF90eXBlIFR5cGUuIElmIG5vdCBwcm92aWRlZCxcbiAqICAgICBgdHJ1ZWAgd2lsbCBiZSByZXR1cm5lZCBpZiB0aGlzIEV2ZW50VGFyZ2V0IGhhcyBhbnkgbGlzdGVuZXJzLlxuICogQHJldHVybiB7Ym9vbGVhbn0gSGFzIGxpc3RlbmVycy5cbiAqL1xuX29sX2V2ZW50c19FdmVudFRhcmdldF8ucHJvdG90eXBlLmhhc0xpc3RlbmVyID0gZnVuY3Rpb24ob3B0X3R5cGUpIHtcbiAgcmV0dXJuIG9wdF90eXBlID9cbiAgICBvcHRfdHlwZSBpbiB0aGlzLmxpc3RlbmVyc18gOlxuICAgIE9iamVjdC5rZXlzKHRoaXMubGlzdGVuZXJzXykubGVuZ3RoID4gMDtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUeXBlLlxuICogQHBhcmFtIHtvbC5FdmVudHNMaXN0ZW5lckZ1bmN0aW9uVHlwZX0gbGlzdGVuZXIgTGlzdGVuZXIuXG4gKi9cbl9vbF9ldmVudHNfRXZlbnRUYXJnZXRfLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzX1t0eXBlXTtcbiAgaWYgKGxpc3RlbmVycykge1xuICAgIHZhciBpbmRleCA9IGxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICBpZiAodHlwZSBpbiB0aGlzLnBlbmRpbmdSZW1vdmFsc18pIHtcbiAgICAgIC8vIG1ha2UgbGlzdGVuZXIgYSBuby1vcCwgYW5kIHJlbW92ZSBsYXRlciBpbiAjZGlzcGF0Y2hFdmVudCgpXG4gICAgICBsaXN0ZW5lcnNbaW5kZXhdID0gX29sXy5udWxsRnVuY3Rpb247XG4gICAgICArK3RoaXMucGVuZGluZ1JlbW92YWxzX1t0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICBpZiAobGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBkZWxldGUgdGhpcy5saXN0ZW5lcnNfW3R5cGVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IF9vbF9ldmVudHNfRXZlbnRUYXJnZXRfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvZXZlbnRzL2V2ZW50dGFyZ2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBjbGFzc2Rlc2NcbiAqIFN0cmlwcGVkIGRvd24gaW1wbGVtZW50YXRpb24gb2YgdGhlIFczQyBET00gTGV2ZWwgMiBFdmVudCBpbnRlcmZhY2UuXG4gKiBAc2VlIHtAbGluayBodHRwczovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTItRXZlbnRzL2V2ZW50cy5odG1sI0V2ZW50cy1pbnRlcmZhY2V9XG4gKlxuICogVGhpcyBpbXBsZW1lbnRhdGlvbiBvbmx5IHByb3ZpZGVzIGB0eXBlYCBhbmQgYHRhcmdldGAgcHJvcGVydGllcywgYW5kXG4gKiBgc3RvcFByb3BhZ2F0aW9uYCBhbmQgYHByZXZlbnREZWZhdWx0YCBtZXRob2RzLiBJdCBpcyBtZWFudCBhcyBiYXNlIGNsYXNzXG4gKiBmb3IgaGlnaGVyIGxldmVsIGV2ZW50cyBkZWZpbmVkIGluIHRoZSBsaWJyYXJ5LCBhbmQgd29ya3Mgd2l0aFxuICoge0BsaW5rIG9sLmV2ZW50cy5FdmVudFRhcmdldH0uXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAaW1wbGVtZW50cyB7b2xpLmV2ZW50cy5FdmVudH1cbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFR5cGUuXG4gKi9cbnZhciBfb2xfZXZlbnRzX0V2ZW50XyA9IGZ1bmN0aW9uKHR5cGUpIHtcblxuICAvKipcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICB0aGlzLnByb3BhZ2F0aW9uU3RvcHBlZDtcblxuICAvKipcbiAgICogVGhlIGV2ZW50IHR5cGUuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBhcGlcbiAgICovXG4gIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgLyoqXG4gICAqIFRoZSBldmVudCB0YXJnZXQuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqIEBhcGlcbiAgICovXG4gIHRoaXMudGFyZ2V0ID0gbnVsbDtcblxufTtcblxuXG4vKipcbiAqIFN0b3AgZXZlbnQgcHJvcGFnYXRpb24uXG4gKiBAZnVuY3Rpb25cbiAqIEBvdmVycmlkZVxuICogQGFwaVxuICovXG5fb2xfZXZlbnRzX0V2ZW50Xy5wcm90b3R5cGUucHJldmVudERlZmF1bHQgPVxuXG4gIC8qKlxuICAgKiBTdG9wIGV2ZW50IHByb3BhZ2F0aW9uLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQG92ZXJyaWRlXG4gICAqIEBhcGlcbiAgICovXG4gIF9vbF9ldmVudHNfRXZlbnRfLnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnByb3BhZ2F0aW9uU3RvcHBlZCA9IHRydWU7XG4gIH07XG5cblxuLyoqXG4gKiBAcGFyYW0ge0V2ZW50fG9sLmV2ZW50cy5FdmVudH0gZXZ0IEV2ZW50XG4gKi9cbl9vbF9ldmVudHNfRXZlbnRfLnN0b3BQcm9wYWdhdGlvbiA9IGZ1bmN0aW9uKGV2dCkge1xuICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtFdmVudHxvbC5ldmVudHMuRXZlbnR9IGV2dCBFdmVudFxuICovXG5fb2xfZXZlbnRzX0V2ZW50Xy5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uKGV2dCkge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcbn07XG5leHBvcnQgZGVmYXVsdCBfb2xfZXZlbnRzX0V2ZW50XztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL2V2ZW50cy9ldmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF9vbF8gZnJvbSAnLi9pbmRleC5qcyc7XG5pbXBvcnQgX29sX3NpemVfIGZyb20gJy4vc2l6ZS5qcyc7XG5pbXBvcnQgX29sX2V4dGVudF8gZnJvbSAnLi9leHRlbnQuanMnO1xuaW1wb3J0IF9vbF9leHRlbnRfQ29ybmVyXyBmcm9tICcuL2V4dGVudC9jb3JuZXIuanMnO1xuaW1wb3J0IF9vbF9vYmpfIGZyb20gJy4vb2JqLmpzJztcbmltcG9ydCBfb2xfcHJval8gZnJvbSAnLi9wcm9qLmpzJztcbmltcG9ydCBfb2xfcHJval9Vbml0c18gZnJvbSAnLi9wcm9qL3VuaXRzLmpzJztcbmltcG9ydCBfb2xfdGlsZWdyaWRfVGlsZUdyaWRfIGZyb20gJy4vdGlsZWdyaWQvdGlsZWdyaWQuanMnO1xudmFyIF9vbF90aWxlZ3JpZF8gPSB7fTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wucHJvai5Qcm9qZWN0aW9ufSBwcm9qZWN0aW9uIFByb2plY3Rpb24uXG4gKiBAcmV0dXJuIHshb2wudGlsZWdyaWQuVGlsZUdyaWR9IERlZmF1bHQgdGlsZSBncmlkIGZvciB0aGUgcGFzc2VkIHByb2plY3Rpb24uXG4gKi9cbl9vbF90aWxlZ3JpZF8uZ2V0Rm9yUHJvamVjdGlvbiA9IGZ1bmN0aW9uKHByb2plY3Rpb24pIHtcbiAgdmFyIHRpbGVHcmlkID0gcHJvamVjdGlvbi5nZXREZWZhdWx0VGlsZUdyaWQoKTtcbiAgaWYgKCF0aWxlR3JpZCkge1xuICAgIHRpbGVHcmlkID0gX29sX3RpbGVncmlkXy5jcmVhdGVGb3JQcm9qZWN0aW9uKHByb2plY3Rpb24pO1xuICAgIHByb2plY3Rpb24uc2V0RGVmYXVsdFRpbGVHcmlkKHRpbGVHcmlkKTtcbiAgfVxuICByZXR1cm4gdGlsZUdyaWQ7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtvbC50aWxlZ3JpZC5UaWxlR3JpZH0gdGlsZUdyaWQgVGlsZSBncmlkLlxuICogQHBhcmFtIHtvbC5UaWxlQ29vcmR9IHRpbGVDb29yZCBUaWxlIGNvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge29sLnByb2ouUHJvamVjdGlvbn0gcHJvamVjdGlvbiBQcm9qZWN0aW9uLlxuICogQHJldHVybiB7b2wuVGlsZUNvb3JkfSBUaWxlIGNvb3JkaW5hdGUuXG4gKi9cbl9vbF90aWxlZ3JpZF8ud3JhcFggPSBmdW5jdGlvbih0aWxlR3JpZCwgdGlsZUNvb3JkLCBwcm9qZWN0aW9uKSB7XG4gIHZhciB6ID0gdGlsZUNvb3JkWzBdO1xuICB2YXIgY2VudGVyID0gdGlsZUdyaWQuZ2V0VGlsZUNvb3JkQ2VudGVyKHRpbGVDb29yZCk7XG4gIHZhciBwcm9qZWN0aW9uRXh0ZW50ID0gX29sX3RpbGVncmlkXy5leHRlbnRGcm9tUHJvamVjdGlvbihwcm9qZWN0aW9uKTtcbiAgaWYgKCFfb2xfZXh0ZW50Xy5jb250YWluc0Nvb3JkaW5hdGUocHJvamVjdGlvbkV4dGVudCwgY2VudGVyKSkge1xuICAgIHZhciB3b3JsZFdpZHRoID0gX29sX2V4dGVudF8uZ2V0V2lkdGgocHJvamVjdGlvbkV4dGVudCk7XG4gICAgdmFyIHdvcmxkc0F3YXkgPSBNYXRoLmNlaWwoKHByb2plY3Rpb25FeHRlbnRbMF0gLSBjZW50ZXJbMF0pIC8gd29ybGRXaWR0aCk7XG4gICAgY2VudGVyWzBdICs9IHdvcmxkV2lkdGggKiB3b3JsZHNBd2F5O1xuICAgIHJldHVybiB0aWxlR3JpZC5nZXRUaWxlQ29vcmRGb3JDb29yZEFuZFooY2VudGVyLCB6KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGlsZUNvb3JkO1xuICB9XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcGFyYW0ge251bWJlcj19IG9wdF9tYXhab29tIE1heGltdW0gem9vbSBsZXZlbCAoZGVmYXVsdCBpc1xuICogICAgIG9sLkRFRkFVTFRfTUFYX1pPT00pLlxuICogQHBhcmFtIHtudW1iZXJ8b2wuU2l6ZT19IG9wdF90aWxlU2l6ZSBUaWxlIHNpemUgKGRlZmF1bHQgdXNlc1xuICogICAgIG9sLkRFRkFVTFRfVElMRV9TSVpFKS5cbiAqIEBwYXJhbSB7b2wuZXh0ZW50LkNvcm5lcj19IG9wdF9jb3JuZXIgRXh0ZW50IGNvcm5lciAoZGVmYXVsdCBpc1xuICogICAgIG9sLmV4dGVudC5Db3JuZXIuVE9QX0xFRlQpLlxuICogQHJldHVybiB7IW9sLnRpbGVncmlkLlRpbGVHcmlkfSBUaWxlR3JpZCBpbnN0YW5jZS5cbiAqL1xuX29sX3RpbGVncmlkXy5jcmVhdGVGb3JFeHRlbnQgPSBmdW5jdGlvbihleHRlbnQsIG9wdF9tYXhab29tLCBvcHRfdGlsZVNpemUsIG9wdF9jb3JuZXIpIHtcbiAgdmFyIGNvcm5lciA9IG9wdF9jb3JuZXIgIT09IHVuZGVmaW5lZCA/XG4gICAgb3B0X2Nvcm5lciA6IF9vbF9leHRlbnRfQ29ybmVyXy5UT1BfTEVGVDtcblxuICB2YXIgcmVzb2x1dGlvbnMgPSBfb2xfdGlsZWdyaWRfLnJlc29sdXRpb25zRnJvbUV4dGVudChcbiAgICAgIGV4dGVudCwgb3B0X21heFpvb20sIG9wdF90aWxlU2l6ZSk7XG5cbiAgcmV0dXJuIG5ldyBfb2xfdGlsZWdyaWRfVGlsZUdyaWRfKHtcbiAgICBleHRlbnQ6IGV4dGVudCxcbiAgICBvcmlnaW46IF9vbF9leHRlbnRfLmdldENvcm5lcihleHRlbnQsIGNvcm5lciksXG4gICAgcmVzb2x1dGlvbnM6IHJlc29sdXRpb25zLFxuICAgIHRpbGVTaXplOiBvcHRfdGlsZVNpemVcbiAgfSk7XG59O1xuXG5cbi8qKlxuICogQ3JlYXRlcyBhIHRpbGUgZ3JpZCB3aXRoIGEgc3RhbmRhcmQgWFlaIHRpbGluZyBzY2hlbWUuXG4gKiBAcGFyYW0ge29seC50aWxlZ3JpZC5YWVpPcHRpb25zPX0gb3B0X29wdGlvbnMgVGlsZSBncmlkIG9wdGlvbnMuXG4gKiBAcmV0dXJuIHshb2wudGlsZWdyaWQuVGlsZUdyaWR9IFRpbGUgZ3JpZCBpbnN0YW5jZS5cbiAqIEBhcGlcbiAqL1xuX29sX3RpbGVncmlkXy5jcmVhdGVYWVogPSBmdW5jdGlvbihvcHRfb3B0aW9ucykge1xuICB2YXIgb3B0aW9ucyA9IC8qKiBAdHlwZSB7b2x4LnRpbGVncmlkLlRpbGVHcmlkT3B0aW9uc30gKi8gKHt9KTtcbiAgX29sX29ial8uYXNzaWduKG9wdGlvbnMsIG9wdF9vcHRpb25zICE9PSB1bmRlZmluZWQgP1xuICAgIG9wdF9vcHRpb25zIDogLyoqIEB0eXBlIHtvbHgudGlsZWdyaWQuWFlaT3B0aW9uc30gKi8gKHt9KSk7XG4gIGlmIChvcHRpb25zLmV4dGVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgb3B0aW9ucy5leHRlbnQgPSBfb2xfcHJval8uZ2V0KCdFUFNHOjM4NTcnKS5nZXRFeHRlbnQoKTtcbiAgfVxuICBvcHRpb25zLnJlc29sdXRpb25zID0gX29sX3RpbGVncmlkXy5yZXNvbHV0aW9uc0Zyb21FeHRlbnQoXG4gICAgICBvcHRpb25zLmV4dGVudCwgb3B0aW9ucy5tYXhab29tLCBvcHRpb25zLnRpbGVTaXplKTtcbiAgZGVsZXRlIG9wdGlvbnMubWF4Wm9vbTtcblxuICByZXR1cm4gbmV3IF9vbF90aWxlZ3JpZF9UaWxlR3JpZF8ob3B0aW9ucyk7XG59O1xuXG5cbi8qKlxuICogQ3JlYXRlIGEgcmVzb2x1dGlvbnMgYXJyYXkgZnJvbSBhbiBleHRlbnQuICBBIHpvb20gZmFjdG9yIG9mIDIgaXMgYXNzdW1lZC5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHBhcmFtIHtudW1iZXI9fSBvcHRfbWF4Wm9vbSBNYXhpbXVtIHpvb20gbGV2ZWwgKGRlZmF1bHQgaXNcbiAqICAgICBvbC5ERUZBVUxUX01BWF9aT09NKS5cbiAqIEBwYXJhbSB7bnVtYmVyfG9sLlNpemU9fSBvcHRfdGlsZVNpemUgVGlsZSBzaXplIChkZWZhdWx0IHVzZXNcbiAqICAgICBvbC5ERUZBVUxUX1RJTEVfU0laRSkuXG4gKiBAcmV0dXJuIHshQXJyYXkuPG51bWJlcj59IFJlc29sdXRpb25zIGFycmF5LlxuICovXG5fb2xfdGlsZWdyaWRfLnJlc29sdXRpb25zRnJvbUV4dGVudCA9IGZ1bmN0aW9uKGV4dGVudCwgb3B0X21heFpvb20sIG9wdF90aWxlU2l6ZSkge1xuICB2YXIgbWF4Wm9vbSA9IG9wdF9tYXhab29tICE9PSB1bmRlZmluZWQgP1xuICAgIG9wdF9tYXhab29tIDogX29sXy5ERUZBVUxUX01BWF9aT09NO1xuXG4gIHZhciBoZWlnaHQgPSBfb2xfZXh0ZW50Xy5nZXRIZWlnaHQoZXh0ZW50KTtcbiAgdmFyIHdpZHRoID0gX29sX2V4dGVudF8uZ2V0V2lkdGgoZXh0ZW50KTtcblxuICB2YXIgdGlsZVNpemUgPSBfb2xfc2l6ZV8udG9TaXplKG9wdF90aWxlU2l6ZSAhPT0gdW5kZWZpbmVkID9cbiAgICBvcHRfdGlsZVNpemUgOiBfb2xfLkRFRkFVTFRfVElMRV9TSVpFKTtcbiAgdmFyIG1heFJlc29sdXRpb24gPSBNYXRoLm1heChcbiAgICAgIHdpZHRoIC8gdGlsZVNpemVbMF0sIGhlaWdodCAvIHRpbGVTaXplWzFdKTtcblxuICB2YXIgbGVuZ3RoID0gbWF4Wm9vbSArIDE7XG4gIHZhciByZXNvbHV0aW9ucyA9IG5ldyBBcnJheShsZW5ndGgpO1xuICBmb3IgKHZhciB6ID0gMDsgeiA8IGxlbmd0aDsgKyt6KSB7XG4gICAgcmVzb2x1dGlvbnNbel0gPSBtYXhSZXNvbHV0aW9uIC8gTWF0aC5wb3coMiwgeik7XG4gIH1cbiAgcmV0dXJuIHJlc29sdXRpb25zO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wuUHJvamVjdGlvbkxpa2V9IHByb2plY3Rpb24gUHJvamVjdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyPX0gb3B0X21heFpvb20gTWF4aW11bSB6b29tIGxldmVsIChkZWZhdWx0IGlzXG4gKiAgICAgb2wuREVGQVVMVF9NQVhfWk9PTSkuXG4gKiBAcGFyYW0ge251bWJlcnxvbC5TaXplPX0gb3B0X3RpbGVTaXplIFRpbGUgc2l6ZSAoZGVmYXVsdCB1c2VzXG4gKiAgICAgb2wuREVGQVVMVF9USUxFX1NJWkUpLlxuICogQHBhcmFtIHtvbC5leHRlbnQuQ29ybmVyPX0gb3B0X2Nvcm5lciBFeHRlbnQgY29ybmVyIChkZWZhdWx0IGlzXG4gKiAgICAgb2wuZXh0ZW50LkNvcm5lci5CT1RUT01fTEVGVCkuXG4gKiBAcmV0dXJuIHshb2wudGlsZWdyaWQuVGlsZUdyaWR9IFRpbGVHcmlkIGluc3RhbmNlLlxuICovXG5fb2xfdGlsZWdyaWRfLmNyZWF0ZUZvclByb2plY3Rpb24gPSBmdW5jdGlvbihwcm9qZWN0aW9uLCBvcHRfbWF4Wm9vbSwgb3B0X3RpbGVTaXplLCBvcHRfY29ybmVyKSB7XG4gIHZhciBleHRlbnQgPSBfb2xfdGlsZWdyaWRfLmV4dGVudEZyb21Qcm9qZWN0aW9uKHByb2plY3Rpb24pO1xuICByZXR1cm4gX29sX3RpbGVncmlkXy5jcmVhdGVGb3JFeHRlbnQoXG4gICAgICBleHRlbnQsIG9wdF9tYXhab29tLCBvcHRfdGlsZVNpemUsIG9wdF9jb3JuZXIpO1xufTtcblxuXG4vKipcbiAqIEdlbmVyYXRlIGEgdGlsZSBncmlkIGV4dGVudCBmcm9tIGEgcHJvamVjdGlvbi4gIElmIHRoZSBwcm9qZWN0aW9uIGhhcyBhblxuICogZXh0ZW50LCBpdCBpcyB1c2VkLiAgSWYgbm90LCBhIGdsb2JhbCBleHRlbnQgaXMgYXNzdW1lZC5cbiAqIEBwYXJhbSB7b2wuUHJvamVjdGlvbkxpa2V9IHByb2plY3Rpb24gUHJvamVjdGlvbi5cbiAqIEByZXR1cm4ge29sLkV4dGVudH0gRXh0ZW50LlxuICovXG5fb2xfdGlsZWdyaWRfLmV4dGVudEZyb21Qcm9qZWN0aW9uID0gZnVuY3Rpb24ocHJvamVjdGlvbikge1xuICBwcm9qZWN0aW9uID0gX29sX3Byb2pfLmdldChwcm9qZWN0aW9uKTtcbiAgdmFyIGV4dGVudCA9IHByb2plY3Rpb24uZ2V0RXh0ZW50KCk7XG4gIGlmICghZXh0ZW50KSB7XG4gICAgdmFyIGhhbGYgPSAxODAgKiBfb2xfcHJval8uTUVURVJTX1BFUl9VTklUW19vbF9wcm9qX1VuaXRzXy5ERUdSRUVTXSAvXG4gICAgICAgIHByb2plY3Rpb24uZ2V0TWV0ZXJzUGVyVW5pdCgpO1xuICAgIGV4dGVudCA9IF9vbF9leHRlbnRfLmNyZWF0ZU9yVXBkYXRlKC1oYWxmLCAtaGFsZiwgaGFsZiwgaGFsZik7XG4gIH1cbiAgcmV0dXJuIGV4dGVudDtcbn07XG5leHBvcnQgZGVmYXVsdCBfb2xfdGlsZWdyaWRfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvdGlsZWdyaWQuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfb2xfIGZyb20gJy4vaW5kZXguanMnO1xuaW1wb3J0IF9vbF9PYmplY3RFdmVudFR5cGVfIGZyb20gJy4vb2JqZWN0ZXZlbnR0eXBlLmpzJztcbmltcG9ydCBfb2xfT2JzZXJ2YWJsZV8gZnJvbSAnLi9vYnNlcnZhYmxlLmpzJztcbmltcG9ydCBfb2xfZXZlbnRzX0V2ZW50XyBmcm9tICcuL2V2ZW50cy9ldmVudC5qcyc7XG5pbXBvcnQgX29sX29ial8gZnJvbSAnLi9vYmouanMnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIEFic3RyYWN0IGJhc2UgY2xhc3M7IG5vcm1hbGx5IG9ubHkgdXNlZCBmb3IgY3JlYXRpbmcgc3ViY2xhc3NlcyBhbmQgbm90XG4gKiBpbnN0YW50aWF0ZWQgaW4gYXBwcy5cbiAqIE1vc3Qgbm9uLXRyaXZpYWwgY2xhc3NlcyBpbmhlcml0IGZyb20gdGhpcy5cbiAqXG4gKiBUaGlzIGV4dGVuZHMge0BsaW5rIG9sLk9ic2VydmFibGV9IHdpdGggb2JzZXJ2YWJsZSBwcm9wZXJ0aWVzLCB3aGVyZSBlYWNoXG4gKiBwcm9wZXJ0eSBpcyBvYnNlcnZhYmxlIGFzIHdlbGwgYXMgdGhlIG9iamVjdCBhcyBhIHdob2xlLlxuICpcbiAqIENsYXNzZXMgdGhhdCBpbmhlcml0IGZyb20gdGhpcyBoYXZlIHByZS1kZWZpbmVkIHByb3BlcnRpZXMsIHRvIHdoaWNoIHlvdSBjYW5cbiAqIGFkZCB5b3VyIG93bnMuIFRoZSBwcmUtZGVmaW5lZCBwcm9wZXJ0aWVzIGFyZSBsaXN0ZWQgaW4gdGhpcyBkb2N1bWVudGF0aW9uIGFzXG4gKiAnT2JzZXJ2YWJsZSBQcm9wZXJ0aWVzJywgYW5kIGhhdmUgdGhlaXIgb3duIGFjY2Vzc29yczsgZm9yIGV4YW1wbGUsXG4gKiB7QGxpbmsgb2wuTWFwfSBoYXMgYSBgdGFyZ2V0YCBwcm9wZXJ0eSwgYWNjZXNzZWQgd2l0aCBgZ2V0VGFyZ2V0KClgICBhbmRcbiAqIGNoYW5nZWQgd2l0aCBgc2V0VGFyZ2V0KClgLiBOb3QgYWxsIHByb3BlcnRpZXMgYXJlIGhvd2V2ZXIgc2V0dGFibGUuIFRoZXJlXG4gKiBhcmUgYWxzbyBnZW5lcmFsLXB1cnBvc2UgYWNjZXNzb3JzIGBnZXQoKWAgYW5kIGBzZXQoKWAuIEZvciBleGFtcGxlLFxuICogYGdldCgndGFyZ2V0JylgIGlzIGVxdWl2YWxlbnQgdG8gYGdldFRhcmdldCgpYC5cbiAqXG4gKiBUaGUgYHNldGAgYWNjZXNzb3JzIHRyaWdnZXIgYSBjaGFuZ2UgZXZlbnQsIGFuZCB5b3UgY2FuIG1vbml0b3IgdGhpcyBieVxuICogcmVnaXN0ZXJpbmcgYSBsaXN0ZW5lci4gRm9yIGV4YW1wbGUsIHtAbGluayBvbC5WaWV3fSBoYXMgYSBgY2VudGVyYFxuICogcHJvcGVydHksIHNvIGB2aWV3Lm9uKCdjaGFuZ2U6Y2VudGVyJywgZnVuY3Rpb24oZXZ0KSB7Li4ufSk7YCB3b3VsZCBjYWxsIHRoZVxuICogZnVuY3Rpb24gd2hlbmV2ZXIgdGhlIHZhbHVlIG9mIHRoZSBjZW50ZXIgcHJvcGVydHkgY2hhbmdlcy4gV2l0aGluIHRoZVxuICogZnVuY3Rpb24sIGBldnQudGFyZ2V0YCB3b3VsZCBiZSB0aGUgdmlldywgc28gYGV2dC50YXJnZXQuZ2V0Q2VudGVyKClgIHdvdWxkXG4gKiByZXR1cm4gdGhlIG5ldyBjZW50ZXIuXG4gKlxuICogWW91IGNhbiBhZGQgeW91ciBvd24gb2JzZXJ2YWJsZSBwcm9wZXJ0aWVzIHdpdGhcbiAqIGBvYmplY3Quc2V0KCdwcm9wJywgJ3ZhbHVlJylgLCBhbmQgcmV0cmlldmUgdGhhdCB3aXRoIGBvYmplY3QuZ2V0KCdwcm9wJylgLlxuICogWW91IGNhbiBsaXN0ZW4gZm9yIGNoYW5nZXMgb24gdGhhdCBwcm9wZXJ0eSB2YWx1ZSB3aXRoXG4gKiBgb2JqZWN0Lm9uKCdjaGFuZ2U6cHJvcCcsIGxpc3RlbmVyKWAuIFlvdSBjYW4gZ2V0IGEgbGlzdCBvZiBhbGxcbiAqIHByb3BlcnRpZXMgd2l0aCB7QGxpbmsgb2wuT2JqZWN0I2dldFByb3BlcnRpZXMgb2JqZWN0LmdldFByb3BlcnRpZXMoKX0uXG4gKlxuICogTm90ZSB0aGF0IHRoZSBvYnNlcnZhYmxlIHByb3BlcnRpZXMgYXJlIHNlcGFyYXRlIGZyb20gc3RhbmRhcmQgSlMgcHJvcGVydGllcy5cbiAqIFlvdSBjYW4sIGZvciBleGFtcGxlLCBnaXZlIHlvdXIgbWFwIG9iamVjdCBhIHRpdGxlIHdpdGhcbiAqIGBtYXAudGl0bGU9J05ldyB0aXRsZSdgIGFuZCB3aXRoIGBtYXAuc2V0KCd0aXRsZScsICdBbm90aGVyIHRpdGxlJylgLiBUaGVcbiAqIGZpcnN0IHdpbGwgYmUgYSBgaGFzT3duUHJvcGVydHlgOyB0aGUgc2Vjb25kIHdpbGwgYXBwZWFyIGluXG4gKiBgZ2V0UHJvcGVydGllcygpYC4gT25seSB0aGUgc2Vjb25kIGlzIG9ic2VydmFibGUuXG4gKlxuICogUHJvcGVydGllcyBjYW4gYmUgZGVsZXRlZCBieSB1c2luZyB0aGUgdW5zZXQgbWV0aG9kLiBFLmcuXG4gKiBvYmplY3QudW5zZXQoJ2ZvbycpLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVuZHMge29sLk9ic2VydmFibGV9XG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCAqPj19IG9wdF92YWx1ZXMgQW4gb2JqZWN0IHdpdGgga2V5LXZhbHVlIHBhaXJzLlxuICogQGZpcmVzIG9sLk9iamVjdC5FdmVudFxuICogQGFwaVxuICovXG52YXIgX29sX09iamVjdF8gPSBmdW5jdGlvbihvcHRfdmFsdWVzKSB7XG4gIF9vbF9PYnNlcnZhYmxlXy5jYWxsKHRoaXMpO1xuXG4gIC8vIENhbGwgb2wuZ2V0VWlkIHRvIGVuc3VyZSB0aGF0IHRoZSBvcmRlciBvZiBvYmplY3RzJyBpZHMgaXMgdGhlIHNhbWUgYXNcbiAgLy8gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBjcmVhdGVkLiAgVGhpcyBhbHNvIGhlbHBzIHRvIGVuc3VyZSB0aGF0XG4gIC8vIG9iamVjdCBwcm9wZXJ0aWVzIGFyZSBhbHdheXMgYWRkZWQgaW4gdGhlIHNhbWUgb3JkZXIsIHdoaWNoIGhlbHBzIG1hbnlcbiAgLy8gSmF2YVNjcmlwdCBlbmdpbmVzIGdlbmVyYXRlIGZhc3RlciBjb2RlLlxuICBfb2xfLmdldFVpZCh0aGlzKTtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUgeyFPYmplY3QuPHN0cmluZywgKj59XG4gICAqL1xuICB0aGlzLnZhbHVlc18gPSB7fTtcblxuICBpZiAob3B0X3ZhbHVlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKG9wdF92YWx1ZXMpO1xuICB9XG59O1xuXG5fb2xfLmluaGVyaXRzKF9vbF9PYmplY3RfLCBfb2xfT2JzZXJ2YWJsZV8pO1xuXG5cbi8qKlxuICogQHByaXZhdGVcbiAqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgc3RyaW5nPn1cbiAqL1xuX29sX09iamVjdF8uY2hhbmdlRXZlbnRUeXBlQ2FjaGVfID0ge307XG5cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IEtleSBuYW1lLlxuICogQHJldHVybiB7c3RyaW5nfSBDaGFuZ2UgbmFtZS5cbiAqL1xuX29sX09iamVjdF8uZ2V0Q2hhbmdlRXZlbnRUeXBlID0gZnVuY3Rpb24oa2V5KSB7XG4gIHJldHVybiBfb2xfT2JqZWN0Xy5jaGFuZ2VFdmVudFR5cGVDYWNoZV8uaGFzT3duUHJvcGVydHkoa2V5KSA/XG4gICAgX29sX09iamVjdF8uY2hhbmdlRXZlbnRUeXBlQ2FjaGVfW2tleV0gOlxuICAgIChfb2xfT2JqZWN0Xy5jaGFuZ2VFdmVudFR5cGVDYWNoZV9ba2V5XSA9ICdjaGFuZ2U6JyArIGtleSk7XG59O1xuXG5cbi8qKlxuICogR2V0cyBhIHZhbHVlLlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBLZXkgbmFtZS5cbiAqIEByZXR1cm4geyp9IFZhbHVlLlxuICogQGFwaVxuICovXG5fb2xfT2JqZWN0Xy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oa2V5KSB7XG4gIHZhciB2YWx1ZTtcbiAgaWYgKHRoaXMudmFsdWVzXy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgdmFsdWUgPSB0aGlzLnZhbHVlc19ba2V5XTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5cbi8qKlxuICogR2V0IGEgbGlzdCBvZiBvYmplY3QgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJuIHtBcnJheS48c3RyaW5nPn0gTGlzdCBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBhcGlcbiAqL1xuX29sX09iamVjdF8ucHJvdG90eXBlLmdldEtleXMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMudmFsdWVzXyk7XG59O1xuXG5cbi8qKlxuICogR2V0IGFuIG9iamVjdCBvZiBhbGwgcHJvcGVydHkgbmFtZXMgYW5kIHZhbHVlcy5cbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCAqPn0gT2JqZWN0LlxuICogQGFwaVxuICovXG5fb2xfT2JqZWN0Xy5wcm90b3R5cGUuZ2V0UHJvcGVydGllcyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gX29sX29ial8uYXNzaWduKHt9LCB0aGlzLnZhbHVlc18pO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgS2V5IG5hbWUuXG4gKiBAcGFyYW0geyp9IG9sZFZhbHVlIE9sZCB2YWx1ZS5cbiAqL1xuX29sX09iamVjdF8ucHJvdG90eXBlLm5vdGlmeSA9IGZ1bmN0aW9uKGtleSwgb2xkVmFsdWUpIHtcbiAgdmFyIGV2ZW50VHlwZTtcbiAgZXZlbnRUeXBlID0gX29sX09iamVjdF8uZ2V0Q2hhbmdlRXZlbnRUeXBlKGtleSk7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX29sX09iamVjdF8uRXZlbnQoZXZlbnRUeXBlLCBrZXksIG9sZFZhbHVlKSk7XG4gIGV2ZW50VHlwZSA9IF9vbF9PYmplY3RFdmVudFR5cGVfLlBST1BFUlRZQ0hBTkdFO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9vbF9PYmplY3RfLkV2ZW50KGV2ZW50VHlwZSwga2V5LCBvbGRWYWx1ZSkpO1xufTtcblxuXG4vKipcbiAqIFNldHMgYSB2YWx1ZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgS2V5IG5hbWUuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFZhbHVlLlxuICogQHBhcmFtIHtib29sZWFuPX0gb3B0X3NpbGVudCBVcGRhdGUgd2l0aG91dCB0cmlnZ2VyaW5nIGFuIGV2ZW50LlxuICogQGFwaVxuICovXG5fb2xfT2JqZWN0Xy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSwgb3B0X3NpbGVudCkge1xuICBpZiAob3B0X3NpbGVudCkge1xuICAgIHRoaXMudmFsdWVzX1trZXldID0gdmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZXNfW2tleV07XG4gICAgdGhpcy52YWx1ZXNfW2tleV0gPSB2YWx1ZTtcbiAgICBpZiAob2xkVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLm5vdGlmeShrZXksIG9sZFZhbHVlKTtcbiAgICB9XG4gIH1cbn07XG5cblxuLyoqXG4gKiBTZXRzIGEgY29sbGVjdGlvbiBvZiBrZXktdmFsdWUgcGFpcnMuICBOb3RlIHRoYXQgdGhpcyBjaGFuZ2VzIGFueSBleGlzdGluZ1xuICogcHJvcGVydGllcyBhbmQgYWRkcyBuZXcgb25lcyAoaXQgZG9lcyBub3QgcmVtb3ZlIGFueSBleGlzdGluZyBwcm9wZXJ0aWVzKS5cbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsICo+fSB2YWx1ZXMgVmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFuPX0gb3B0X3NpbGVudCBVcGRhdGUgd2l0aG91dCB0cmlnZ2VyaW5nIGFuIGV2ZW50LlxuICogQGFwaVxuICovXG5fb2xfT2JqZWN0Xy5wcm90b3R5cGUuc2V0UHJvcGVydGllcyA9IGZ1bmN0aW9uKHZhbHVlcywgb3B0X3NpbGVudCkge1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiB2YWx1ZXMpIHtcbiAgICB0aGlzLnNldChrZXksIHZhbHVlc1trZXldLCBvcHRfc2lsZW50KTtcbiAgfVxufTtcblxuXG4vKipcbiAqIFVuc2V0cyBhIHByb3BlcnR5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBLZXkgbmFtZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdF9zaWxlbnQgVW5zZXQgd2l0aG91dCB0cmlnZ2VyaW5nIGFuIGV2ZW50LlxuICogQGFwaVxuICovXG5fb2xfT2JqZWN0Xy5wcm90b3R5cGUudW5zZXQgPSBmdW5jdGlvbihrZXksIG9wdF9zaWxlbnQpIHtcbiAgaWYgKGtleSBpbiB0aGlzLnZhbHVlc18pIHtcbiAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlc19ba2V5XTtcbiAgICBkZWxldGUgdGhpcy52YWx1ZXNfW2tleV07XG4gICAgaWYgKCFvcHRfc2lsZW50KSB7XG4gICAgICB0aGlzLm5vdGlmeShrZXksIG9sZFZhbHVlKTtcbiAgICB9XG4gIH1cbn07XG5cblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBFdmVudHMgZW1pdHRlZCBieSB7QGxpbmsgb2wuT2JqZWN0fSBpbnN0YW5jZXMgYXJlIGluc3RhbmNlcyBvZiB0aGlzIHR5cGUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVGhlIGV2ZW50IHR5cGUuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBwcm9wZXJ0eSBuYW1lLlxuICogQHBhcmFtIHsqfSBvbGRWYWx1ZSBUaGUgb2xkIHZhbHVlIGZvciBga2V5YC5cbiAqIEBleHRlbmRzIHtvbC5ldmVudHMuRXZlbnR9XG4gKiBAaW1wbGVtZW50cyB7b2xpLk9iamVjdC5FdmVudH1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5fb2xfT2JqZWN0Xy5FdmVudCA9IGZ1bmN0aW9uKHR5cGUsIGtleSwgb2xkVmFsdWUpIHtcbiAgX29sX2V2ZW50c19FdmVudF8uY2FsbCh0aGlzLCB0eXBlKTtcblxuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IHdob3NlIHZhbHVlIGlzIGNoYW5naW5nLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAYXBpXG4gICAqL1xuICB0aGlzLmtleSA9IGtleTtcblxuICAvKipcbiAgICogVGhlIG9sZCB2YWx1ZS4gVG8gZ2V0IHRoZSBuZXcgdmFsdWUgdXNlIGBlLnRhcmdldC5nZXQoZS5rZXkpYCB3aGVyZVxuICAgKiBgZWAgaXMgdGhlIGV2ZW50IG9iamVjdC5cbiAgICogQHR5cGUgeyp9XG4gICAqIEBhcGlcbiAgICovXG4gIHRoaXMub2xkVmFsdWUgPSBvbGRWYWx1ZTtcblxufTtcbl9vbF8uaW5oZXJpdHMoX29sX09iamVjdF8uRXZlbnQsIF9vbF9ldmVudHNfRXZlbnRfKTtcbmV4cG9ydCBkZWZhdWx0IF9vbF9PYmplY3RfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBlbnVtIHtudW1iZXJ9XG4gKi9cbnZhciBfb2xfSW1hZ2VTdGF0ZV8gPSB7XG4gIElETEU6IDAsXG4gIExPQURJTkc6IDEsXG4gIExPQURFRDogMixcbiAgRVJST1I6IDNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IF9vbF9JbWFnZVN0YXRlXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL2ltYWdlc3RhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfb2xfIGZyb20gJy4uL2luZGV4LmpzJztcbmltcG9ydCBfb2xfcHJval9Vbml0c18gZnJvbSAnLi4vcHJvai91bml0cy5qcyc7XG5pbXBvcnQgX29sX3Byb2pfcHJvajRfIGZyb20gJy4uL3Byb2ovcHJvajQuanMnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIFByb2plY3Rpb24gZGVmaW5pdGlvbiBjbGFzcy4gT25lIG9mIHRoZXNlIGlzIGNyZWF0ZWQgZm9yIGVhY2ggcHJvamVjdGlvblxuICogc3VwcG9ydGVkIGluIHRoZSBhcHBsaWNhdGlvbiBhbmQgc3RvcmVkIGluIHRoZSB7QGxpbmsgb2wucHJvan0gbmFtZXNwYWNlLlxuICogWW91IGNhbiB1c2UgdGhlc2UgaW4gYXBwbGljYXRpb25zLCBidXQgdGhpcyBpcyBub3QgcmVxdWlyZWQsIGFzIEFQSSBwYXJhbXNcbiAqIGFuZCBvcHRpb25zIHVzZSB7QGxpbmsgb2wuUHJvamVjdGlvbkxpa2V9IHdoaWNoIG1lYW5zIHRoZSBzaW1wbGUgc3RyaW5nXG4gKiBjb2RlIHdpbGwgc3VmZmljZS5cbiAqXG4gKiBZb3UgY2FuIHVzZSB7QGxpbmsgb2wucHJvai5nZXR9IHRvIHJldHJpZXZlIHRoZSBvYmplY3QgZm9yIGEgcGFydGljdWxhclxuICogcHJvamVjdGlvbi5cbiAqXG4gKiBUaGUgbGlicmFyeSBpbmNsdWRlcyBkZWZpbml0aW9ucyBmb3IgYEVQU0c6NDMyNmAgYW5kIGBFUFNHOjM4NTdgLCB0b2dldGhlclxuICogd2l0aCB0aGUgZm9sbG93aW5nIGFsaWFzZXM6XG4gKiAqIGBFUFNHOjQzMjZgOiBDUlM6ODQsIHVybjpvZ2M6ZGVmOmNyczpFUFNHOjYuNjo0MzI2LFxuICogICAgIHVybjpvZ2M6ZGVmOmNyczpPR0M6MS4zOkNSUzg0LCB1cm46b2djOmRlZjpjcnM6T0dDOjI6ODQsXG4gKiAgICAgaHR0cDovL3d3dy5vcGVuZ2lzLm5ldC9nbWwvc3JzL2Vwc2cueG1sIzQzMjYsXG4gKiAgICAgdXJuOngtb2djOmRlZjpjcnM6RVBTRzo0MzI2XG4gKiAqIGBFUFNHOjM4NTdgOiBFUFNHOjEwMjEwMCwgRVBTRzoxMDIxMTMsIEVQU0c6OTAwOTEzLFxuICogICAgIHVybjpvZ2M6ZGVmOmNyczpFUFNHOjYuMTg6MzozODU3LFxuICogICAgIGh0dHA6Ly93d3cub3Blbmdpcy5uZXQvZ21sL3Nycy9lcHNnLnhtbCMzODU3XG4gKlxuICogSWYgeW91IHVzZSBwcm9qNGpzLCBhbGlhc2VzIGNhbiBiZSBhZGRlZCB1c2luZyBgcHJvajQuZGVmcygpYDsgc2VlXG4gKiBbZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL3Byb2o0anMvcHJvajRqcykuIFRvIHNldCBhbiBhbHRlcm5hdGl2ZVxuICogbmFtZXNwYWNlIGZvciBwcm9qNCwgdXNlIHtAbGluayBvbC5wcm9qLnNldFByb2o0fS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7b2x4LlByb2plY3Rpb25PcHRpb25zfSBvcHRpb25zIFByb2plY3Rpb24gb3B0aW9ucy5cbiAqIEBzdHJ1Y3RcbiAqIEBhcGlcbiAqL1xudmFyIF9vbF9wcm9qX1Byb2plY3Rpb25fID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHRoaXMuY29kZV8gPSBvcHRpb25zLmNvZGU7XG5cbiAgLyoqXG4gICAqIFVuaXRzIG9mIHByb2plY3RlZCBjb29yZGluYXRlcy4gV2hlbiBzZXQgdG8gYG9sLnByb2ouVW5pdHMuVElMRV9QSVhFTFNgLCBhXG4gICAqIGB0aGlzLmV4dGVudF9gIGFuZCBgdGhpcy53b3JsZEV4dGVudF9gIG11c3QgYmUgY29uZmlndXJlZCBwcm9wZXJseSBmb3IgZWFjaFxuICAgKiB0aWxlLlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7b2wucHJvai5Vbml0c31cbiAgICovXG4gIHRoaXMudW5pdHNfID0gLyoqIEB0eXBlIHtvbC5wcm9qLlVuaXRzfSAqLyAob3B0aW9ucy51bml0cyk7XG5cbiAgLyoqXG4gICAqIFZhbGlkaXR5IGV4dGVudCBvZiB0aGUgcHJvamVjdGlvbiBpbiBwcm9qZWN0ZWQgY29vcmRpbmF0ZXMuIEZvciBwcm9qZWN0aW9uc1xuICAgKiB3aXRoIGBvbC5wcm9qLlVuaXRzLlRJTEVfUElYRUxTYCB1bml0cywgdGhpcyBpcyB0aGUgZXh0ZW50IG9mIHRoZSB0aWxlIGluXG4gICAqIHRpbGUgcGl4ZWwgc3BhY2UuXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtvbC5FeHRlbnR9XG4gICAqL1xuICB0aGlzLmV4dGVudF8gPSBvcHRpb25zLmV4dGVudCAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5leHRlbnQgOiBudWxsO1xuXG4gIC8qKlxuICAgKiBFeHRlbnQgb2YgdGhlIHdvcmxkIGluIEVQU0c6NDMyNi4gRm9yIHByb2plY3Rpb25zIHdpdGhcbiAgICogYG9sLnByb2ouVW5pdHMuVElMRV9QSVhFTFNgIHVuaXRzLCB0aGlzIGlzIHRoZSBleHRlbnQgb2YgdGhlIHRpbGUgaW5cbiAgICogcHJvamVjdGVkIGNvb3JkaW5hdGUgc3BhY2UuXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtvbC5FeHRlbnR9XG4gICAqL1xuICB0aGlzLndvcmxkRXh0ZW50XyA9IG9wdGlvbnMud29ybGRFeHRlbnQgIT09IHVuZGVmaW5lZCA/XG4gICAgb3B0aW9ucy53b3JsZEV4dGVudCA6IG51bGw7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICB0aGlzLmF4aXNPcmllbnRhdGlvbl8gPSBvcHRpb25zLmF4aXNPcmllbnRhdGlvbiAhPT0gdW5kZWZpbmVkID9cbiAgICBvcHRpb25zLmF4aXNPcmllbnRhdGlvbiA6ICdlbnUnO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIHRoaXMuZ2xvYmFsXyA9IG9wdGlvbnMuZ2xvYmFsICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmdsb2JhbCA6IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIHRoaXMuY2FuV3JhcFhfID0gISEodGhpcy5nbG9iYWxfICYmIHRoaXMuZXh0ZW50Xyk7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtmdW5jdGlvbihudW1iZXIsIG9sLkNvb3JkaW5hdGUpOm51bWJlcnx1bmRlZmluZWR9XG4gICAqL1xuICB0aGlzLmdldFBvaW50UmVzb2x1dGlvbkZ1bmNfID0gb3B0aW9ucy5nZXRQb2ludFJlc29sdXRpb247XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtvbC50aWxlZ3JpZC5UaWxlR3JpZH1cbiAgICovXG4gIHRoaXMuZGVmYXVsdFRpbGVHcmlkXyA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtudW1iZXJ8dW5kZWZpbmVkfVxuICAgKi9cbiAgdGhpcy5tZXRlcnNQZXJVbml0XyA9IG9wdGlvbnMubWV0ZXJzUGVyVW5pdDtcblxuICB2YXIgY29kZSA9IG9wdGlvbnMuY29kZTtcbiAgaWYgKF9vbF8uRU5BQkxFX1BST0o0SlMpIHtcbiAgICB2YXIgcHJvajRqcyA9IF9vbF9wcm9qX3Byb2o0Xy5nZXQoKTtcbiAgICBpZiAodHlwZW9mIHByb2o0anMgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIGRlZiA9IHByb2o0anMuZGVmcyhjb2RlKTtcbiAgICAgIGlmIChkZWYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoZGVmLmF4aXMgIT09IHVuZGVmaW5lZCAmJiBvcHRpb25zLmF4aXNPcmllbnRhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5heGlzT3JpZW50YXRpb25fID0gZGVmLmF4aXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMubWV0ZXJzUGVyVW5pdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5tZXRlcnNQZXJVbml0XyA9IGRlZi50b19tZXRlcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy51bml0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy51bml0c18gPSBkZWYudW5pdHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cblxuLyoqXG4gKiBAcmV0dXJuIHtib29sZWFufSBUaGUgcHJvamVjdGlvbiBpcyBzdWl0YWJsZSBmb3Igd3JhcHBpbmcgdGhlIHgtYXhpc1xuICovXG5fb2xfcHJval9Qcm9qZWN0aW9uXy5wcm90b3R5cGUuY2FuV3JhcFggPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuY2FuV3JhcFhfO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgY29kZSBmb3IgdGhpcyBwcm9qZWN0aW9uLCBlLmcuICdFUFNHOjQzMjYnLlxuICogQHJldHVybiB7c3RyaW5nfSBDb2RlLlxuICogQGFwaVxuICovXG5fb2xfcHJval9Qcm9qZWN0aW9uXy5wcm90b3R5cGUuZ2V0Q29kZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5jb2RlXztcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIHZhbGlkaXR5IGV4dGVudCBmb3IgdGhpcyBwcm9qZWN0aW9uLlxuICogQHJldHVybiB7b2wuRXh0ZW50fSBFeHRlbnQuXG4gKiBAYXBpXG4gKi9cbl9vbF9wcm9qX1Byb2plY3Rpb25fLnByb3RvdHlwZS5nZXRFeHRlbnQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZXh0ZW50Xztcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIHVuaXRzIG9mIHRoaXMgcHJvamVjdGlvbi5cbiAqIEByZXR1cm4ge29sLnByb2ouVW5pdHN9IFVuaXRzLlxuICogQGFwaVxuICovXG5fb2xfcHJval9Qcm9qZWN0aW9uXy5wcm90b3R5cGUuZ2V0VW5pdHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudW5pdHNfO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgYW1vdW50IG9mIG1ldGVycyBwZXIgdW5pdCBvZiB0aGlzIHByb2plY3Rpb24uICBJZiB0aGUgcHJvamVjdGlvbiBpc1xuICogbm90IGNvbmZpZ3VyZWQgd2l0aCBgbWV0ZXJzUGVyVW5pdGAgb3IgYSB1bml0cyBpZGVudGlmaWVyLCB0aGUgcmV0dXJuIGlzXG4gKiBgdW5kZWZpbmVkYC5cbiAqIEByZXR1cm4ge251bWJlcnx1bmRlZmluZWR9IE1ldGVycy5cbiAqIEBhcGlcbiAqL1xuX29sX3Byb2pfUHJvamVjdGlvbl8ucHJvdG90eXBlLmdldE1ldGVyc1BlclVuaXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMubWV0ZXJzUGVyVW5pdF8gfHwgX29sX3Byb2pfVW5pdHNfLk1FVEVSU19QRVJfVU5JVFt0aGlzLnVuaXRzX107XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSB3b3JsZCBleHRlbnQgZm9yIHRoaXMgcHJvamVjdGlvbi5cbiAqIEByZXR1cm4ge29sLkV4dGVudH0gRXh0ZW50LlxuICogQGFwaVxuICovXG5fb2xfcHJval9Qcm9qZWN0aW9uXy5wcm90b3R5cGUuZ2V0V29ybGRFeHRlbnQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMud29ybGRFeHRlbnRfO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgYXhpcyBvcmllbnRhdGlvbiBvZiB0aGlzIHByb2plY3Rpb24uXG4gKiBFeGFtcGxlIHZhbHVlcyBhcmU6XG4gKiBlbnUgLSB0aGUgZGVmYXVsdCBlYXN0aW5nLCBub3J0aGluZywgZWxldmF0aW9uLlxuICogbmV1IC0gbm9ydGhpbmcsIGVhc3RpbmcsIHVwIC0gdXNlZnVsIGZvciBcImxhdC9sb25nXCIgZ2VvZ3JhcGhpYyBjb29yZGluYXRlcyxcbiAqICAgICBvciBzb3V0aCBvcmllbnRhdGVkIHRyYW5zdmVyc2UgbWVyY2F0b3IuXG4gKiB3bnUgLSB3ZXN0aW5nLCBub3J0aGluZywgdXAgLSBzb21lIHBsYW5ldGFyeSBjb29yZGluYXRlIHN5c3RlbXMgaGF2ZVxuICogICAgIFwid2VzdCBwb3NpdGl2ZVwiIGNvb3JkaW5hdGUgc3lzdGVtc1xuICogQHJldHVybiB7c3RyaW5nfSBBeGlzIG9yaWVudGF0aW9uLlxuICogQGFwaVxuICovXG5fb2xfcHJval9Qcm9qZWN0aW9uXy5wcm90b3R5cGUuZ2V0QXhpc09yaWVudGF0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmF4aXNPcmllbnRhdGlvbl87XG59O1xuXG5cbi8qKlxuICogSXMgdGhpcyBwcm9qZWN0aW9uIGEgZ2xvYmFsIHByb2plY3Rpb24gd2hpY2ggc3BhbnMgdGhlIHdob2xlIHdvcmxkP1xuICogQHJldHVybiB7Ym9vbGVhbn0gV2hldGhlciB0aGUgcHJvamVjdGlvbiBpcyBnbG9iYWwuXG4gKiBAYXBpXG4gKi9cbl9vbF9wcm9qX1Byb2plY3Rpb25fLnByb3RvdHlwZS5pc0dsb2JhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5nbG9iYWxfO1xufTtcblxuXG4vKipcbiogU2V0IGlmIHRoZSBwcm9qZWN0aW9uIGlzIGEgZ2xvYmFsIHByb2plY3Rpb24gd2hpY2ggc3BhbnMgdGhlIHdob2xlIHdvcmxkXG4qIEBwYXJhbSB7Ym9vbGVhbn0gZ2xvYmFsIFdoZXRoZXIgdGhlIHByb2plY3Rpb24gaXMgZ2xvYmFsLlxuKiBAYXBpXG4qL1xuX29sX3Byb2pfUHJvamVjdGlvbl8ucHJvdG90eXBlLnNldEdsb2JhbCA9IGZ1bmN0aW9uKGdsb2JhbCkge1xuICB0aGlzLmdsb2JhbF8gPSBnbG9iYWw7XG4gIHRoaXMuY2FuV3JhcFhfID0gISEoZ2xvYmFsICYmIHRoaXMuZXh0ZW50Xyk7XG59O1xuXG5cbi8qKlxuICogQHJldHVybiB7b2wudGlsZWdyaWQuVGlsZUdyaWR9IFRoZSBkZWZhdWx0IHRpbGUgZ3JpZC5cbiAqL1xuX29sX3Byb2pfUHJvamVjdGlvbl8ucHJvdG90eXBlLmdldERlZmF1bHRUaWxlR3JpZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5kZWZhdWx0VGlsZUdyaWRfO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wudGlsZWdyaWQuVGlsZUdyaWR9IHRpbGVHcmlkIFRoZSBkZWZhdWx0IHRpbGUgZ3JpZC5cbiAqL1xuX29sX3Byb2pfUHJvamVjdGlvbl8ucHJvdG90eXBlLnNldERlZmF1bHRUaWxlR3JpZCA9IGZ1bmN0aW9uKHRpbGVHcmlkKSB7XG4gIHRoaXMuZGVmYXVsdFRpbGVHcmlkXyA9IHRpbGVHcmlkO1xufTtcblxuXG4vKipcbiAqIFNldCB0aGUgdmFsaWRpdHkgZXh0ZW50IGZvciB0aGlzIHByb2plY3Rpb24uXG4gKiBAcGFyYW0ge29sLkV4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEBhcGlcbiAqL1xuX29sX3Byb2pfUHJvamVjdGlvbl8ucHJvdG90eXBlLnNldEV4dGVudCA9IGZ1bmN0aW9uKGV4dGVudCkge1xuICB0aGlzLmV4dGVudF8gPSBleHRlbnQ7XG4gIHRoaXMuY2FuV3JhcFhfID0gISEodGhpcy5nbG9iYWxfICYmIGV4dGVudCk7XG59O1xuXG5cbi8qKlxuICogU2V0IHRoZSB3b3JsZCBleHRlbnQgZm9yIHRoaXMgcHJvamVjdGlvbi5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSB3b3JsZEV4dGVudCBXb3JsZCBleHRlbnRcbiAqICAgICBbbWlubG9uLCBtaW5sYXQsIG1heGxvbiwgbWF4bGF0XS5cbiAqIEBhcGlcbiAqL1xuX29sX3Byb2pfUHJvamVjdGlvbl8ucHJvdG90eXBlLnNldFdvcmxkRXh0ZW50ID0gZnVuY3Rpb24od29ybGRFeHRlbnQpIHtcbiAgdGhpcy53b3JsZEV4dGVudF8gPSB3b3JsZEV4dGVudDtcbn07XG5cblxuLyoqXG4gKiBTZXQgdGhlIGdldFBvaW50UmVzb2x1dGlvbiBmdW5jdGlvbiAoc2VlIHtAbGluayBvbC5wcm9qI2dldFBvaW50UmVzb2x1dGlvbn1cbiAqIGZvciB0aGlzIHByb2plY3Rpb24uXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKG51bWJlciwgb2wuQ29vcmRpbmF0ZSk6bnVtYmVyfSBmdW5jIEZ1bmN0aW9uXG4gKiBAYXBpXG4gKi9cbl9vbF9wcm9qX1Byb2plY3Rpb25fLnByb3RvdHlwZS5zZXRHZXRQb2ludFJlc29sdXRpb24gPSBmdW5jdGlvbihmdW5jKSB7XG4gIHRoaXMuZ2V0UG9pbnRSZXNvbHV0aW9uRnVuY18gPSBmdW5jO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgY3VzdG9tIHBvaW50IHJlc29sdXRpb24gZnVuY3Rpb24gZm9yIHRoaXMgcHJvamVjdGlvbiAoaWYgc2V0KS5cbiAqIEByZXR1cm4ge2Z1bmN0aW9uKG51bWJlciwgb2wuQ29vcmRpbmF0ZSk6bnVtYmVyfHVuZGVmaW5lZH0gVGhlIGN1c3RvbSBwb2ludFxuICogcmVzb2x1dGlvbiBmdW5jdGlvbiAoaWYgc2V0KS5cbiAqL1xuX29sX3Byb2pfUHJvamVjdGlvbl8ucHJvdG90eXBlLmdldFBvaW50UmVzb2x1dGlvbkZ1bmMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0UG9pbnRSZXNvbHV0aW9uRnVuY187XG59O1xuZXhwb3J0IGRlZmF1bHQgX29sX3Byb2pfUHJvamVjdGlvbl87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9wcm9qL3Byb2plY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfb2xfc2l6ZV8gPSB7fTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBidWZmZXJlZCBzaXplLlxuICogQHBhcmFtIHtvbC5TaXplfSBzaXplIFNpemUuXG4gKiBAcGFyYW0ge251bWJlcn0gYnVmZmVyIEJ1ZmZlci5cbiAqIEBwYXJhbSB7b2wuU2l6ZT19IG9wdF9zaXplIE9wdGlvbmFsIHJldXNhYmxlIHNpemUgYXJyYXkuXG4gKiBAcmV0dXJuIHtvbC5TaXplfSBUaGUgYnVmZmVyZWQgc2l6ZS5cbiAqL1xuX29sX3NpemVfLmJ1ZmZlciA9IGZ1bmN0aW9uKHNpemUsIGJ1ZmZlciwgb3B0X3NpemUpIHtcbiAgaWYgKG9wdF9zaXplID09PSB1bmRlZmluZWQpIHtcbiAgICBvcHRfc2l6ZSA9IFswLCAwXTtcbiAgfVxuICBvcHRfc2l6ZVswXSA9IHNpemVbMF0gKyAyICogYnVmZmVyO1xuICBvcHRfc2l6ZVsxXSA9IHNpemVbMV0gKyAyICogYnVmZmVyO1xuICByZXR1cm4gb3B0X3NpemU7XG59O1xuXG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIHNpemUgaGFzIGEgcG9zaXRpdmUgYXJlYS5cbiAqIEBwYXJhbSB7b2wuU2l6ZX0gc2l6ZSBUaGUgc2l6ZSB0byB0ZXN0LlxuICogQHJldHVybiB7Ym9vbGVhbn0gVGhlIHNpemUgaGFzIGEgcG9zaXRpdmUgYXJlYS5cbiAqL1xuX29sX3NpemVfLmhhc0FyZWEgPSBmdW5jdGlvbihzaXplKSB7XG4gIHJldHVybiBzaXplWzBdID4gMCAmJiBzaXplWzFdID4gMDtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgc2l6ZSBzY2FsZWQgYnkgYSByYXRpby4gVGhlIHJlc3VsdCB3aWxsIGJlIGFuIGFycmF5IG9mIGludGVnZXJzLlxuICogQHBhcmFtIHtvbC5TaXplfSBzaXplIFNpemUuXG4gKiBAcGFyYW0ge251bWJlcn0gcmF0aW8gUmF0aW8uXG4gKiBAcGFyYW0ge29sLlNpemU9fSBvcHRfc2l6ZSBPcHRpb25hbCByZXVzYWJsZSBzaXplIGFycmF5LlxuICogQHJldHVybiB7b2wuU2l6ZX0gVGhlIHNjYWxlZCBzaXplLlxuICovXG5fb2xfc2l6ZV8uc2NhbGUgPSBmdW5jdGlvbihzaXplLCByYXRpbywgb3B0X3NpemUpIHtcbiAgaWYgKG9wdF9zaXplID09PSB1bmRlZmluZWQpIHtcbiAgICBvcHRfc2l6ZSA9IFswLCAwXTtcbiAgfVxuICBvcHRfc2l6ZVswXSA9IChzaXplWzBdICogcmF0aW8gKyAwLjUpIHwgMDtcbiAgb3B0X3NpemVbMV0gPSAoc2l6ZVsxXSAqIHJhdGlvICsgMC41KSB8IDA7XG4gIHJldHVybiBvcHRfc2l6ZTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGBvbC5TaXplYCBhcnJheSBmb3IgdGhlIHBhc3NlZCBpbiBudW1iZXIgKG1lYW5pbmc6IHNxdWFyZSkgb3JcbiAqIGBvbC5TaXplYCBhcnJheS5cbiAqIChtZWFuaW5nOiBub24tc3F1YXJlKSxcbiAqIEBwYXJhbSB7bnVtYmVyfG9sLlNpemV9IHNpemUgV2lkdGggYW5kIGhlaWdodC5cbiAqIEBwYXJhbSB7b2wuU2l6ZT19IG9wdF9zaXplIE9wdGlvbmFsIHJldXNhYmxlIHNpemUgYXJyYXkuXG4gKiBAcmV0dXJuIHtvbC5TaXplfSBTaXplLlxuICogQGFwaVxuICovXG5fb2xfc2l6ZV8udG9TaXplID0gZnVuY3Rpb24oc2l6ZSwgb3B0X3NpemUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoc2l6ZSkpIHtcbiAgICByZXR1cm4gc2l6ZTtcbiAgfSBlbHNlIHtcbiAgICBpZiAob3B0X3NpemUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3B0X3NpemUgPSBbc2l6ZSwgc2l6ZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdF9zaXplWzBdID0gb3B0X3NpemVbMV0gPSAvKiogQHR5cGUge251bWJlcn0gKi8gKHNpemUpO1xuICAgIH1cbiAgICByZXR1cm4gb3B0X3NpemU7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBfb2xfc2l6ZV87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9zaXplLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgTWFwQm91bmQgZnJvbSBcIi4vbWFwQm91bmRcIjtcclxuaW1wb3J0IFZlY3RvciBmcm9tIFwiLi92ZWN0b3JcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIi4vZ3JpZFwiO1xyXG5pbXBvcnQgQ29sb3JTY2FsZSBmcm9tIFwiLi9jb2xvclNjYWxlXCI7XHJcbmltcG9ydCBDYW52YXNCb3VuZCBmcm9tIFwiLi9jYW52YXNCb3VuZFwiO1xyXG5pbXBvcnQgUGFydGljdWxlIGZyb20gXCIuL3BhcnRpY2xlXCI7XHJcbmltcG9ydCBBbmltYXRpb25CdWNrZXQgZnJvbSBcIi4vYW5pbWF0aW9uQnVja2V0XCI7XHJcbmltcG9ydCBMYXllciBmcm9tIFwiLi9sYXllclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luZHkge1xyXG5cclxuICBwcml2YXRlIGdyaWQ6IGFueTtcclxuICBwcml2YXRlIM67MDogbnVtYmVyO1xyXG4gIHByaXZhdGUgz4YwOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSDOlM67OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSDOlM+GOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBuaTogbnVtYmVyO1xyXG4gIHByaXZhdGUgbmo6IG51bWJlcjtcclxuICBwcml2YXRlIGNhbnZhczogYW55ID0gbnVsbDtcclxuICBwcml2YXRlIGNvbG9yU2NhbGU6IENvbG9yU2NhbGU7XHJcbiAgcHJpdmF0ZSB2ZWxvY2l0eVNjYWxlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBwYXJ0aWN1bGVNdWx0aXBsaWVyID0gMSAvIDMwMDtcclxuICBwcml2YXRlIHBhcnRpY2xlQWdlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBwYXJ0aWN1bGVMaW5lV2lkdGg6IG51bWJlcjtcclxuICBwcml2YXRlIGF1dG9Db2xvclJhbmdlID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgbGF5ZXI6IExheWVyO1xyXG4gIHByaXZhdGUgcGFydGljdWxlczogUGFydGljdWxlW10gPSBbXTtcclxuICBwcml2YXRlIGFuaW1hdGlvbkJ1Y2tldDogQW5pbWF0aW9uQnVja2V0O1xyXG4gIHByaXZhdGUgY29udGV4dDJEOiBhbnk7XHJcbiAgcHJpdmF0ZSBhbmltYXRpb25Mb29wOiBhbnkgPSBudWxsO1xyXG4gIHByaXZhdGUgZnJhbWVUaW1lOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSB0aGVuID0gMDtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IGFueSkge1xyXG4gICAgdGhpcy5jYW52YXMgPSBvcHRpb25zLmNhbnZhcztcclxuICAgIGlmIChvcHRpb25zLm1pblZlbG9jaXR5ID09PSB1bmRlZmluZWQgJiYgb3B0aW9ucy5tYXhWZWxvY2l0eSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuYXV0b0NvbG9yUmFuZ2UgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb2xvclNjYWxlID0gbmV3IENvbG9yU2NhbGUob3B0aW9ucy5taW5WZWxvY2l0eSB8fCAwLCBvcHRpb25zLm1heFZlbG9jaXR5IHx8IDEwLCBvcHRpb25zLmNvbG9yU2NhbGUpO1xyXG4gICAgdGhpcy52ZWxvY2l0eVNjYWxlID0gb3B0aW9ucy52ZWxvY2l0eVNjYWxlIHx8IDAuMDE7XHJcbiAgICB0aGlzLnBhcnRpY2xlQWdlID0gb3B0aW9ucy5wYXJ0aWNsZUFnZSB8fCA2NDtcclxuICAgIHRoaXMuc2V0RGF0YShvcHRpb25zLmRhdGEpO1xyXG4gICAgdGhpcy5wYXJ0aWN1bGVNdWx0aXBsaWVyID0gb3B0aW9ucy5wYXJ0aWNsZU11bHRpcGxpZXIgfHwgMSAvIDMwMDtcclxuICAgIHRoaXMucGFydGljdWxlTGluZVdpZHRoID0gb3B0aW9ucy5saW5lV2lkdGggfHwgMTtcclxuICAgIGNvbnN0IGZyYW1lUmF0ZSA9IG9wdGlvbnMuZnJhbWVSYXRlIHx8IDE1O1xyXG4gICAgdGhpcy5mcmFtZVRpbWUgPSAxMDAwIC8gZnJhbWVSYXRlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBhcnRpY3VsZUNvdW50KCkge1xyXG4gICAgY29uc3QgcGFydGljdWxlUmVkdWN0aW9uID0gKCgvYW5kcm9pZHxibGFja2JlcnJ5fGllbW9iaWxlfGlwYWR8aXBob25lfGlwb2R8b3BlcmEgbWluaXx3ZWJvcy9pKS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSA/IChNYXRoLnBvdyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbywgMSAvIDMpIHx8IDEuNikgOiAxO1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5sYXllci5jYW52YXNCb3VuZC53aWR0aCAqIHRoaXMubGF5ZXIuY2FudmFzQm91bmQuaGVpZ2h0ICogdGhpcy5wYXJ0aWN1bGVNdWx0aXBsaWVyKSAqIHBhcnRpY3VsZVJlZHVjdGlvbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvYWQgZGF0YVxyXG4gICAqIEBwYXJhbSBkYXRhXHJcbiAgICovXHJcbiAgc2V0RGF0YShkYXRhOiBhbnlbXSkge1xyXG4gICAgbGV0IHVEYXRhOiBhbnkgPSBudWxsO1xyXG4gICAgbGV0IHZEYXRhOiBhbnkgPSBudWxsO1xyXG4gICAgY29uc3QgZ3JpZDogVmVjdG9yW10gPSBbXTtcclxuXHJcbiAgICBkYXRhLmZvckVhY2goKHJlY29yZCkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGAke3JlY29yZC5oZWFkZXIucGFyYW1ldGVyQ2F0ZWdvcnl9LCR7cmVjb3JkLmhlYWRlci5wYXJhbWV0ZXJOdW1iZXJ9YCkge1xyXG4gICAgICAgIGNhc2UgXCIxLDJcIjpcclxuICAgICAgICBjYXNlIFwiMiwyXCI6XHJcbiAgICAgICAgICB1RGF0YSA9IHJlY29yZDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCIxLDNcIjpcclxuICAgICAgICBjYXNlIFwiMiwzXCI6XHJcbiAgICAgICAgICB2RGF0YSA9IHJlY29yZDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdURhdGEgfHwgIXZEYXRhKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIkRhdGEgYXJlIG5vdCBjb3JyZWN0IGZvcm1hdFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHVEYXRhLmRhdGEuZm9yRWFjaCgodTogbnVtYmVyLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGdyaWQucHVzaChuZXcgVmVjdG9yKHUsIHZEYXRhLmRhdGFbaW5kZXhdKSk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vY29uc29sZS5sb2coJ3VEYXRhJywgdURhdGEpO1xyXG4gICAgLy9jb25zb2xlLmxvZygndkRhdGEnLCB2RGF0YSk7XHJcblxyXG4gICAgdGhpcy5ncmlkID0gbmV3IEdyaWQoXHJcbiAgICAgIGdyaWQsXHJcbiAgICAgIHVEYXRhLmhlYWRlci5sYTEsXHJcbiAgICAgIHVEYXRhLmhlYWRlci5sbzEsXHJcbiAgICAgIHVEYXRhLmhlYWRlci5keSxcclxuICAgICAgdURhdGEuaGVhZGVyLmR4LFxyXG4gICAgICB1RGF0YS5oZWFkZXIubnksXHJcbiAgICAgIHVEYXRhLmhlYWRlci5ueFxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLs67MCA9IHVEYXRhLmhlYWRlci5sbzE7XHJcbiAgICB0aGlzLs+GMCA9IHVEYXRhLmhlYWRlci5sYTE7XHJcblxyXG4gICAgdGhpcy7OlM67ID0gdURhdGEuaGVhZGVyLmR4O1xyXG4gICAgdGhpcy7OlM+GID0gdURhdGEuaGVhZGVyLmR5XHJcblxyXG4gICAgdGhpcy5uaSA9IHVEYXRhLmhlYWRlci5ueDtcclxuICAgIHRoaXMubmogPSB1RGF0YS5oZWFkZXIubnk7IC8vIG51bWJlciBvZiBncmlkIHBvaW50cyBXLUUgYW5kIE4tUyAoZS5nLiwgMTQ0IHggNzMpXHJcblxyXG4gICAgdmFyIHAgPSAwO1xyXG4gICAgdmFyIGlzQ29udGludW91cyA9IE1hdGguZmxvb3IodGhpcy5uaSAqIHRoaXMuzpTOuykgPj0gMzYwO1xyXG5cclxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5uajsgaisrKSB7XHJcbiAgICAgIHZhciByb3cgPSBbXTtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm5pOyBpKyssIHArKykge1xyXG4gICAgICAgIHJvd1tpXSA9IHRoaXMuZ3JpZC5kYXRhW3BdO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpc0NvbnRpbnVvdXMpIHtcclxuICAgICAgICAvLyBGb3Igd3JhcHBlZCBncmlkcywgZHVwbGljYXRlIGZpcnN0IGNvbHVtbiBhcyBsYXN0IGNvbHVtbiB0byBzaW1wbGlmeSBpbnRlcnBvbGF0aW9uIGxvZ2ljXHJcbiAgICAgICAgcm93LnB1c2gocm93WzBdKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmdyaWRbal0gPSByb3c7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuYXV0b0NvbG9yUmFuZ2UpIHtcclxuICAgICAgY29uc3QgbWluTWF4ID0gdGhpcy5ncmlkLnZhbHVlUmFuZ2U7XHJcbiAgICAgIHRoaXMuY29sb3JTY2FsZS5zZXRNaW5NYXgobWluTWF4WzBdLCBtaW5NYXhbMV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmxvb3JNb2QoYTogbnVtYmVyLCBuOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBhIC0gbiAqIE1hdGguZmxvb3IoYSAvIG4pO1xyXG4gIH07XHJcblxyXG4gIGlzVmFsdWUoeDogYW55KSB7XHJcbiAgICByZXR1cm4geCAhPT0gbnVsbCAmJiB4ICE9PSB1bmRlZmluZWQ7XHJcbiAgfTtcclxuXHJcbiAgYmlsaW5lYXJJbnRlcnBvbGF0ZVZlY3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgZzAwOiBhbnksIGcxMDogYW55LCBnMDE6IGFueSwgZzExOiBhbnkpIHtcclxuICAgIHZhciByeCA9ICgxIC0geCk7XHJcbiAgICB2YXIgcnkgPSAoMSAtIHkpO1xyXG4gICAgdmFyIGEgPSByeCAqIHJ5LCBiID0geCAqIHJ5LCBjID0gcnggKiB5LCBkID0geCAqIHk7XHJcbiAgICB2YXIgdSA9IGcwMC51ICogYSArIGcxMC51ICogYiArIGcwMS51ICogYyArIGcxMS51ICogZDtcclxuICAgIHZhciB2ID0gZzAwLnYgKiBhICsgZzEwLnYgKiBiICsgZzAxLnYgKiBjICsgZzExLnYgKiBkO1xyXG4gICAgcmV0dXJuIFt1LCB2LCBNYXRoLnNxcnQodSAqIHUgKyB2ICogdildO1xyXG4gIH07XHJcblxyXG4gIC8qIEdldCBpbnRlcnBvbGF0ZWQgZ3JpZCB2YWx1ZSBmcm9tIExvbi9MYXQgcG9zaXRpb25cclxuICAqIEBwYXJhbSDOuyB7RmxvYXR9IExvbmdpdHVkZVxyXG4gICogQHBhcmFtIM+GIHtGbG9hdH0gTGF0aXR1ZGVcclxuICAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAgKi9cclxuICBpbnRlcnBvbGF0ZSjOuzogbnVtYmVyLCDPhjogbnVtYmVyKTogYW55IHtcclxuICAgIGlmICghdGhpcy5ncmlkKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgdmFyIGkgPSB0aGlzLmZsb29yTW9kKM67IC0gdGhpcy7OuzAsIDM2MCkgLyB0aGlzLs6Uzrs7IC8vIGNhbGN1bGF0ZSBsb25naXR1ZGUgaW5kZXggaW4gd3JhcHBlZCByYW5nZSBbMCwgMzYwKVxyXG4gICAgdmFyIGogPSAodGhpcy7PhjAgLSDPhikgLyB0aGlzLs6Uz4Y7IC8vIGNhbGN1bGF0ZSBsYXRpdHVkZSBpbmRleCBpbiBkaXJlY3Rpb24gKzkwIHRvIC05MFxyXG5cclxuICAgIHZhciBmaSA9IE1hdGguZmxvb3IoaSk7XHJcbiAgICB2YXIgY2kgPSBmaSArIDE7XHJcbiAgICB2YXIgZmogPSBNYXRoLmZsb29yKGopO1xyXG4gICAgdmFyIGNqID0gZmogKyAxO1xyXG4gICAgdmFyIHJvdyA9IHRoaXMuZ3JpZFtmal07Ly9Eb250IGtub3cgd2h5IGhlIGRvc2VudCBmb3VuZCBhbnkgcm93IEVSUlJST1JcclxuICAgIGlmIChyb3cpIHtcclxuICAgICAgdmFyIGcwMCA9IHJvd1tmaV07XHJcbiAgICAgIHZhciBnMTAgPSByb3dbY2ldO1xyXG4gICAgICBpZiAodGhpcy5pc1ZhbHVlKGcwMCkgJiYgdGhpcy5pc1ZhbHVlKGcxMCkgJiYgKHJvdyA9IHRoaXMuZ3JpZFtjal0pKSB7XHJcbiAgICAgICAgdmFyIGcwMSA9IHJvd1tmaV07XHJcbiAgICAgICAgdmFyIGcxMSA9IHJvd1tjaV07XHJcbiAgICAgICAgaWYgKHRoaXMuaXNWYWx1ZShnMDEpICYmIHRoaXMuaXNWYWx1ZShnMTEpKSB7XHJcbiAgICAgICAgICAvLyBBbGwgZm91ciBwb2ludHMgZm91bmQsIHNvIGludGVycG9sYXRlIHRoZSB2YWx1ZS5cclxuICAgICAgICAgIHJldHVybiB0aGlzLmJpbGluZWFySW50ZXJwb2xhdGVWZWN0b3IoaSAtIGZpLCBqIC0gZmosIGcwMCwgZzEwLCBnMDEsIGcxMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9O1xyXG5cclxuICBnZXRQYXJ0aWN1bGVXaW5kKHA6IFBhcnRpY3VsZSk6IFZlY3RvciB7XHJcbiAgICBjb25zdCBsbmdMYXQgPSB0aGlzLmxheWVyLmNhbnZhc1RvTWFwKHAueCwgcC55KTtcclxuICAgIGNvbnN0IHdpbmQgPSB0aGlzLmdyaWQuZ2V0KGxuZ0xhdFswXSwgbG5nTGF0WzFdKTtcclxuICAgIHAuaW50ZW5zaXR5ID0gd2luZC5pbnRlbnNpdHk7XHJcbiAgICBjb25zdCBtYXBBcmVhID0gdGhpcy5sYXllci5tYXBCb3VuZC5oZWlnaHQgKiB0aGlzLmxheWVyLm1hcEJvdW5kLndpZHRoO1xyXG4gICAgdmFyIHZlbG9jaXR5U2NhbGUgPSB0aGlzLnZlbG9jaXR5U2NhbGUgKiBNYXRoLnBvdyhtYXBBcmVhLCAwLjQpO1xyXG4gICAgdGhpcy5sYXllci5kaXN0b3J0KGxuZ0xhdFswXSwgbG5nTGF0WzFdLCBwLngsIHAueSwgdmVsb2NpdHlTY2FsZSwgd2luZCk7XHJcbiAgICByZXR1cm4gd2luZDtcclxuICB9XHJcblxyXG4gIHN0YXJ0KGxheWVyOiBMYXllcikge1xyXG5cclxuICAgIHRoaXMuY29udGV4dDJEID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgdGhpcy5jb250ZXh0MkQubGluZVdpZHRoID0gdGhpcy5wYXJ0aWN1bGVMaW5lV2lkdGg7XHJcbiAgICB0aGlzLmNvbnRleHQyRC5maWxsU3R5bGUgPSBcInJnYmEoMCwgMCwgMCwgMC45NylcIjtcclxuICAgIHRoaXMuY29udGV4dDJELmdsb2JhbEFscGhhID0gMC42O1xyXG5cclxuICAgIHRoaXMubGF5ZXIgPSBsYXllcjtcclxuICAgIHRoaXMuYW5pbWF0aW9uQnVja2V0ID0gbmV3IEFuaW1hdGlvbkJ1Y2tldCh0aGlzLmNvbG9yU2NhbGUpO1xyXG5cclxuICAgIHRoaXMucGFydGljdWxlcy5zcGxpY2UoMCwgdGhpcy5wYXJ0aWN1bGVzLmxlbmd0aCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljdWxlQ291bnQ7IGkrKykge1xyXG4gICAgICB0aGlzLnBhcnRpY3VsZXMucHVzaCh0aGlzLmxheWVyLmNhbnZhc0JvdW5kLmdldFJhbmRvbVBhcnRpY3VsZSh0aGlzLnBhcnRpY2xlQWdlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50aGVuID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgdGhpcy5mcmFtZSgpO1xyXG4gIH1cclxuXHJcbiAgZnJhbWUoKSB7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkxvb3AgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmZyYW1lKClcclxuICAgIH0pO1xyXG4gICAgdmFyIG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgdmFyIGRlbHRhID0gbm93IC0gdGhpcy50aGVuO1xyXG4gICAgaWYgKGRlbHRhID4gdGhpcy5mcmFtZVRpbWUpIHtcclxuICAgICAgdGhpcy50aGVuID0gbm93IC0gKGRlbHRhICUgdGhpcy5mcmFtZVRpbWUpO1xyXG4gICAgICB0aGlzLmV2b2x2ZSgpO1xyXG4gICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV2b2x2ZSgpIHtcclxuICAgIHRoaXMuYW5pbWF0aW9uQnVja2V0LmNsZWFyKCk7XHJcbiAgICB0aGlzLnBhcnRpY3VsZXMuZm9yRWFjaCgocDogUGFydGljdWxlKSA9PiB7XHJcbiAgICAgIHAuZ3JvdygpO1xyXG4gICAgICBpZiAocC5pc0RlYWQpIHtcclxuICAgICAgICB0aGlzLmxheWVyLmNhbnZhc0JvdW5kLnJlc2V0UGFydGljdWxlKHApO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHdpbmQgPSB0aGlzLmdldFBhcnRpY3VsZVdpbmQocCk7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uQnVja2V0LmFkZChwLCB3aW5kKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIHRoaXMuY29udGV4dDJELmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwiZGVzdGluYXRpb24taW5cIjtcclxuICAgIHRoaXMuY29udGV4dDJELmZpbGxSZWN0KFxyXG4gICAgICB0aGlzLmxheWVyLmNhbnZhc0JvdW5kLnhNaW4sXHJcbiAgICAgIHRoaXMubGF5ZXIuY2FudmFzQm91bmQueU1pbixcclxuICAgICAgdGhpcy5sYXllci5jYW52YXNCb3VuZC53aWR0aCxcclxuICAgICAgdGhpcy5sYXllci5jYW52YXNCb3VuZC5oZWlnaHRcclxuICAgICk7XHJcbiAgICAvLyBGYWRlIGV4aXN0aW5nIHBhcnRpY2xlIHRyYWlscy5cclxuICAgIHRoaXMuY29udGV4dDJELmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwibGlnaHRlclwiO1xyXG4gICAgdGhpcy5jb250ZXh0MkQuZ2xvYmFsQWxwaGEgPSAwLjk7XHJcblxyXG4gICAgdGhpcy5hbmltYXRpb25CdWNrZXQuZHJhdyh0aGlzLmNvbnRleHQyRCk7XHJcbiAgfVxyXG5cclxuICBzdG9wKCkge1xyXG4gICAgdGhpcy5wYXJ0aWN1bGVzLnNwbGljZSgwLCB0aGlzLnBhcnRpY3VsZXMubGVuZ3RoKTtcclxuICAgIHRoaXMuYW5pbWF0aW9uQnVja2V0LmNsZWFyKCk7XHJcbiAgICBpZiAodGhpcy5hbmltYXRpb25Mb29wKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFuaW1hdGlvbkxvb3ApO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkxvb3AgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dpbmR5LnRzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yIHtcbiAgICBwdWJsaWMgdTogbnVtYmVyO1xuICAgIHB1YmxpYyB2OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvciAodT86IG51bWJlciwgdj86IG51bWJlcikge1xuICAgICAgICB0aGlzLnUgPSB1IHx8IDA7XG4gICAgICAgIHRoaXMudiA9IHYgfHwgMDtcbiAgICB9XG5cbiAgICBnZXQgaW50ZW5zaXR5ICgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnUgKiB0aGlzLnUgKyB0aGlzLnYgKiB0aGlzLnYpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmVjdG9yLnRzIiwiaW1wb3J0IFBhcnRpY3VsZSBmcm9tIFwiLi9wYXJ0aWNsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXNCb3VuZCB7XG4gICAgcHVibGljIHhNaW46IG51bWJlcjtcbiAgICBwdWJsaWMgeU1pbjogbnVtYmVyO1xuICAgIHB1YmxpYyB4TWF4OiBudW1iZXI7XG4gICAgcHVibGljIHlNYXg6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yICh4TWluOiBudW1iZXIsIHlNaW46IG51bWJlciwgeE1heDogbnVtYmVyLCB5TWF4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy54TWluID0geE1pbjtcbiAgICAgICAgdGhpcy55TWluID0geU1pbjtcbiAgICAgICAgdGhpcy54TWF4ID0geE1heDtcbiAgICAgICAgdGhpcy55TWF4ID0geU1heDtcbiAgICB9XG5cbiAgICBnZXQgd2lkdGggKCkgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy54TWF4IC0gdGhpcy54TWluO1xuICAgIH1cblxuICAgIGdldCBoZWlnaHQgKCkgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy55TWF4IC0gdGhpcy55TWluO1xuICAgIH1cblxuICAgIGdldFJhbmRvbVBhcnRpY3VsZShtYXhBZ2U6IG51bWJlcik6IFBhcnRpY3VsZSAge1xuICAgICAgICBjb25zdCB4ID0gTWF0aC5yb3VuZChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLndpZHRoKSArIHRoaXMueE1pbik7XG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLnJvdW5kKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuaGVpZ2h0KSArIHRoaXMueU1pbik7XG4gICAgICAgIHJldHVybiBuZXcgUGFydGljdWxlKHgsIHksIG1heEFnZSk7XG4gICAgfVxuXG4gICAgcmVzZXRQYXJ0aWN1bGUocDogUGFydGljdWxlKTogUGFydGljdWxlIHtcbiAgICAgICAgY29uc3QgeCA9IE1hdGgucm91bmQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy53aWR0aCkgKyB0aGlzLnhNaW4pO1xuICAgICAgICBjb25zdCB5ID0gTWF0aC5yb3VuZChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmhlaWdodCkgKyB0aGlzLnlNaW4pO1xuICAgICAgICBwLnJlc2V0KHgsIHkpO1xuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jYW52YXNCb3VuZC50cyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcEJvdW5kIHtcbiAgICBwdWJsaWMgc291dGg6IG51bWJlcjtcbiAgICBwdWJsaWMgbm9ydGg6IG51bWJlcjtcbiAgICBwdWJsaWMgZWFzdDogbnVtYmVyO1xuICAgIHB1YmxpYyB3ZXN0OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvciAobm9ydGg6IG51bWJlciwgZWFzdDogbnVtYmVyLCBzb3V0aDogbnVtYmVyLCB3ZXN0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5ub3J0aCA9IG5vcnRoICogTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgdGhpcy5lYXN0ID0gZWFzdCAqIE1hdGguUEkgLyAxODA7XG4gICAgICAgIHRoaXMuc291dGggPSBzb3V0aCAqIE1hdGguUEkgLyAxODA7XG4gICAgICAgIHRoaXMud2VzdCA9IHdlc3QgKiBNYXRoLlBJIC8gMTgwO1xuICAgIH1cblxuICAgIGdldCB3aWR0aCAoKSA6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAoNzIwICsgdGhpcy5lYXN0IC0gdGhpcy53ZXN0KSAlIDM2MDtcbiAgICB9XG5cbiAgICBnZXQgaGVpZ2h0ICgpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICgzNjAgKyB0aGlzLm5vcnRoIC0gdGhpcy5zb3V0aCkgJSAxODA7XG4gICAgfVxuXG4gICAgXG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFwQm91bmQudHMiLCIvKipcbiAqIEEgbGF5ZXIgdHlwZSB1c2VkIHdoZW4gY3JlYXRpbmcgbGF5ZXIgcmVuZGVyZXJzLlxuICogQGVudW0ge3N0cmluZ31cbiAqL1xudmFyIF9vbF9MYXllclR5cGVfID0ge1xuICBJTUFHRTogJ0lNQUdFJyxcbiAgVElMRTogJ1RJTEUnLFxuICBWRUNUT1JfVElMRTogJ1ZFQ1RPUl9USUxFJyxcbiAgVkVDVE9SOiAnVkVDVE9SJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgX29sX0xheWVyVHlwZV87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9sYXllcnR5cGUuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfb2xfZXZlbnRzXyBmcm9tICcuLi9ldmVudHMuanMnO1xuaW1wb3J0IF9vbF9ldmVudHNfRXZlbnRUeXBlXyBmcm9tICcuLi9ldmVudHMvZXZlbnR0eXBlLmpzJztcbmltcG9ydCBfb2xfIGZyb20gJy4uL2luZGV4LmpzJztcbmltcG9ydCBfb2xfT2JqZWN0XyBmcm9tICcuLi9vYmplY3QuanMnO1xuaW1wb3J0IF9vbF9sYXllcl9CYXNlXyBmcm9tICcuLi9sYXllci9iYXNlLmpzJztcbmltcG9ydCBfb2xfbGF5ZXJfUHJvcGVydHlfIGZyb20gJy4uL2xheWVyL3Byb3BlcnR5LmpzJztcbmltcG9ydCBfb2xfb2JqXyBmcm9tICcuLi9vYmouanMnO1xuaW1wb3J0IF9vbF9yZW5kZXJfRXZlbnRUeXBlXyBmcm9tICcuLi9yZW5kZXIvZXZlbnR0eXBlLmpzJztcbmltcG9ydCBfb2xfc291cmNlX1N0YXRlXyBmcm9tICcuLi9zb3VyY2Uvc3RhdGUuanMnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIEFic3RyYWN0IGJhc2UgY2xhc3M7IG5vcm1hbGx5IG9ubHkgdXNlZCBmb3IgY3JlYXRpbmcgc3ViY2xhc3NlcyBhbmQgbm90XG4gKiBpbnN0YW50aWF0ZWQgaW4gYXBwcy5cbiAqIEEgdmlzdWFsIHJlcHJlc2VudGF0aW9uIG9mIHJhc3RlciBvciB2ZWN0b3IgbWFwIGRhdGEuXG4gKiBMYXllcnMgZ3JvdXAgdG9nZXRoZXIgdGhvc2UgcHJvcGVydGllcyB0aGF0IHBlcnRhaW4gdG8gaG93IHRoZSBkYXRhIGlzIHRvIGJlXG4gKiBkaXNwbGF5ZWQsIGlycmVzcGVjdGl2ZSBvZiB0aGUgc291cmNlIG9mIHRoYXQgZGF0YS5cbiAqXG4gKiBMYXllcnMgYXJlIHVzdWFsbHkgYWRkZWQgdG8gYSBtYXAgd2l0aCB7QGxpbmsgb2wuTWFwI2FkZExheWVyfS4gQ29tcG9uZW50c1xuICogbGlrZSB7QGxpbmsgb2wuaW50ZXJhY3Rpb24uU2VsZWN0fSB1c2UgdW5tYW5hZ2VkIGxheWVycyBpbnRlcm5hbGx5LiBUaGVzZVxuICogdW5tYW5hZ2VkIGxheWVycyBhcmUgYXNzb2NpYXRlZCB3aXRoIHRoZSBtYXAgdXNpbmdcbiAqIHtAbGluayBvbC5sYXllci5MYXllciNzZXRNYXB9IGluc3RlYWQuXG4gKlxuICogQSBnZW5lcmljIGBjaGFuZ2VgIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHN0YXRlIG9mIHRoZSBzb3VyY2UgY2hhbmdlcy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBhYnN0cmFjdFxuICogQGV4dGVuZHMge29sLmxheWVyLkJhc2V9XG4gKiBAZmlyZXMgb2wucmVuZGVyLkV2ZW50XG4gKiBAcGFyYW0ge29seC5sYXllci5MYXllck9wdGlvbnN9IG9wdGlvbnMgTGF5ZXIgb3B0aW9ucy5cbiAqIEBhcGlcbiAqL1xudmFyIF9vbF9sYXllcl9MYXllcl8gPSBmdW5jdGlvbihvcHRpb25zKSB7XG5cbiAgdmFyIGJhc2VPcHRpb25zID0gX29sX29ial8uYXNzaWduKHt9LCBvcHRpb25zKTtcbiAgZGVsZXRlIGJhc2VPcHRpb25zLnNvdXJjZTtcblxuICBfb2xfbGF5ZXJfQmFzZV8uY2FsbCh0aGlzLCAvKiogQHR5cGUge29seC5sYXllci5CYXNlT3B0aW9uc30gKi8gKGJhc2VPcHRpb25zKSk7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHs/b2wuRXZlbnRzS2V5fVxuICAgKi9cbiAgdGhpcy5tYXBQcmVjb21wb3NlS2V5XyA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHs/b2wuRXZlbnRzS2V5fVxuICAgKi9cbiAgdGhpcy5tYXBSZW5kZXJLZXlfID0gbnVsbDtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUgez9vbC5FdmVudHNLZXl9XG4gICAqL1xuICB0aGlzLnNvdXJjZUNoYW5nZUtleV8gPSBudWxsO1xuXG4gIGlmIChvcHRpb25zLm1hcCkge1xuICAgIHRoaXMuc2V0TWFwKG9wdGlvbnMubWFwKTtcbiAgfVxuXG4gIF9vbF9ldmVudHNfLmxpc3Rlbih0aGlzLFxuICAgICAgX29sX09iamVjdF8uZ2V0Q2hhbmdlRXZlbnRUeXBlKF9vbF9sYXllcl9Qcm9wZXJ0eV8uU09VUkNFKSxcbiAgICAgIHRoaXMuaGFuZGxlU291cmNlUHJvcGVydHlDaGFuZ2VfLCB0aGlzKTtcblxuICB2YXIgc291cmNlID0gb3B0aW9ucy5zb3VyY2UgPyBvcHRpb25zLnNvdXJjZSA6IG51bGw7XG4gIHRoaXMuc2V0U291cmNlKHNvdXJjZSk7XG59O1xuXG5fb2xfLmluaGVyaXRzKF9vbF9sYXllcl9MYXllcl8sIF9vbF9sYXllcl9CYXNlXyk7XG5cblxuLyoqXG4gKiBSZXR1cm4gYHRydWVgIGlmIHRoZSBsYXllciBpcyB2aXNpYmxlLCBhbmQgaWYgdGhlIHBhc3NlZCByZXNvbHV0aW9uIGlzXG4gKiBiZXR3ZWVuIHRoZSBsYXllcidzIG1pblJlc29sdXRpb24gYW5kIG1heFJlc29sdXRpb24uIFRoZSBjb21wYXJpc29uIGlzXG4gKiBpbmNsdXNpdmUgZm9yIGBtaW5SZXNvbHV0aW9uYCBhbmQgZXhjbHVzaXZlIGZvciBgbWF4UmVzb2x1dGlvbmAuXG4gKiBAcGFyYW0ge29sLkxheWVyU3RhdGV9IGxheWVyU3RhdGUgTGF5ZXIgc3RhdGUuXG4gKiBAcGFyYW0ge251bWJlcn0gcmVzb2x1dGlvbiBSZXNvbHV0aW9uLlxuICogQHJldHVybiB7Ym9vbGVhbn0gVGhlIGxheWVyIGlzIHZpc2libGUgYXQgdGhlIGdpdmVuIHJlc29sdXRpb24uXG4gKi9cbl9vbF9sYXllcl9MYXllcl8udmlzaWJsZUF0UmVzb2x1dGlvbiA9IGZ1bmN0aW9uKGxheWVyU3RhdGUsIHJlc29sdXRpb24pIHtcbiAgcmV0dXJuIGxheWVyU3RhdGUudmlzaWJsZSAmJiByZXNvbHV0aW9uID49IGxheWVyU3RhdGUubWluUmVzb2x1dGlvbiAmJlxuICAgICAgcmVzb2x1dGlvbiA8IGxheWVyU3RhdGUubWF4UmVzb2x1dGlvbjtcbn07XG5cblxuLyoqXG4gKiBAaW5oZXJpdERvY1xuICovXG5fb2xfbGF5ZXJfTGF5ZXJfLnByb3RvdHlwZS5nZXRMYXllcnNBcnJheSA9IGZ1bmN0aW9uKG9wdF9hcnJheSkge1xuICB2YXIgYXJyYXkgPSBvcHRfYXJyYXkgPyBvcHRfYXJyYXkgOiBbXTtcbiAgYXJyYXkucHVzaCh0aGlzKTtcbiAgcmV0dXJuIGFycmF5O1xufTtcblxuXG4vKipcbiAqIEBpbmhlcml0RG9jXG4gKi9cbl9vbF9sYXllcl9MYXllcl8ucHJvdG90eXBlLmdldExheWVyU3RhdGVzQXJyYXkgPSBmdW5jdGlvbihvcHRfc3RhdGVzKSB7XG4gIHZhciBzdGF0ZXMgPSBvcHRfc3RhdGVzID8gb3B0X3N0YXRlcyA6IFtdO1xuICBzdGF0ZXMucHVzaCh0aGlzLmdldExheWVyU3RhdGUoKSk7XG4gIHJldHVybiBzdGF0ZXM7XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBsYXllciBzb3VyY2UuXG4gKiBAcmV0dXJuIHtvbC5zb3VyY2UuU291cmNlfSBUaGUgbGF5ZXIgc291cmNlIChvciBgbnVsbGAgaWYgbm90IHlldCBzZXQpLlxuICogQG9ic2VydmFibGVcbiAqIEBhcGlcbiAqL1xuX29sX2xheWVyX0xheWVyXy5wcm90b3R5cGUuZ2V0U291cmNlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzb3VyY2UgPSB0aGlzLmdldChfb2xfbGF5ZXJfUHJvcGVydHlfLlNPVVJDRSk7XG4gIHJldHVybiAvKiogQHR5cGUge29sLnNvdXJjZS5Tb3VyY2V9ICovIChzb3VyY2UpIHx8IG51bGw7XG59O1xuXG5cbi8qKlxuICAqIEBpbmhlcml0RG9jXG4gICovXG5fb2xfbGF5ZXJfTGF5ZXJfLnByb3RvdHlwZS5nZXRTb3VyY2VTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc291cmNlID0gdGhpcy5nZXRTb3VyY2UoKTtcbiAgcmV0dXJuICFzb3VyY2UgPyBfb2xfc291cmNlX1N0YXRlXy5VTkRFRklORUQgOiBzb3VyY2UuZ2V0U3RhdGUoKTtcbn07XG5cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5fb2xfbGF5ZXJfTGF5ZXJfLnByb3RvdHlwZS5oYW5kbGVTb3VyY2VDaGFuZ2VfID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuY2hhbmdlZCgpO1xufTtcblxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbl9vbF9sYXllcl9MYXllcl8ucHJvdG90eXBlLmhhbmRsZVNvdXJjZVByb3BlcnR5Q2hhbmdlXyA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5zb3VyY2VDaGFuZ2VLZXlfKSB7XG4gICAgX29sX2V2ZW50c18udW5saXN0ZW5CeUtleSh0aGlzLnNvdXJjZUNoYW5nZUtleV8pO1xuICAgIHRoaXMuc291cmNlQ2hhbmdlS2V5XyA9IG51bGw7XG4gIH1cbiAgdmFyIHNvdXJjZSA9IHRoaXMuZ2V0U291cmNlKCk7XG4gIGlmIChzb3VyY2UpIHtcbiAgICB0aGlzLnNvdXJjZUNoYW5nZUtleV8gPSBfb2xfZXZlbnRzXy5saXN0ZW4oc291cmNlLFxuICAgICAgICBfb2xfZXZlbnRzX0V2ZW50VHlwZV8uQ0hBTkdFLCB0aGlzLmhhbmRsZVNvdXJjZUNoYW5nZV8sIHRoaXMpO1xuICB9XG4gIHRoaXMuY2hhbmdlZCgpO1xufTtcblxuXG4vKipcbiAqIFNldHMgdGhlIGxheWVyIHRvIGJlIHJlbmRlcmVkIG9uIHRvcCBvZiBvdGhlciBsYXllcnMgb24gYSBtYXAuIFRoZSBtYXAgd2lsbFxuICogbm90IG1hbmFnZSB0aGlzIGxheWVyIGluIGl0cyBsYXllcnMgY29sbGVjdGlvbiwgYW5kIHRoZSBjYWxsYmFjayBpblxuICoge0BsaW5rIG9sLk1hcCNmb3JFYWNoTGF5ZXJBdFBpeGVsfSB3aWxsIHJlY2VpdmUgYG51bGxgIGFzIGxheWVyLiBUaGlzXG4gKiBpcyB1c2VmdWwgZm9yIHRlbXBvcmFyeSBsYXllcnMuIFRvIHJlbW92ZSBhbiB1bm1hbmFnZWQgbGF5ZXIgZnJvbSB0aGUgbWFwLFxuICogdXNlIGAjc2V0TWFwKG51bGwpYC5cbiAqXG4gKiBUbyBhZGQgdGhlIGxheWVyIHRvIGEgbWFwIGFuZCBoYXZlIGl0IG1hbmFnZWQgYnkgdGhlIG1hcCwgdXNlXG4gKiB7QGxpbmsgb2wuTWFwI2FkZExheWVyfSBpbnN0ZWFkLlxuICogQHBhcmFtIHtvbC5QbHVnZ2FibGVNYXB9IG1hcCBNYXAuXG4gKiBAYXBpXG4gKi9cbl9vbF9sYXllcl9MYXllcl8ucHJvdG90eXBlLnNldE1hcCA9IGZ1bmN0aW9uKG1hcCkge1xuICBpZiAodGhpcy5tYXBQcmVjb21wb3NlS2V5Xykge1xuICAgIF9vbF9ldmVudHNfLnVubGlzdGVuQnlLZXkodGhpcy5tYXBQcmVjb21wb3NlS2V5Xyk7XG4gICAgdGhpcy5tYXBQcmVjb21wb3NlS2V5XyA9IG51bGw7XG4gIH1cbiAgaWYgKCFtYXApIHtcbiAgICB0aGlzLmNoYW5nZWQoKTtcbiAgfVxuICBpZiAodGhpcy5tYXBSZW5kZXJLZXlfKSB7XG4gICAgX29sX2V2ZW50c18udW5saXN0ZW5CeUtleSh0aGlzLm1hcFJlbmRlcktleV8pO1xuICAgIHRoaXMubWFwUmVuZGVyS2V5XyA9IG51bGw7XG4gIH1cbiAgaWYgKG1hcCkge1xuICAgIHRoaXMubWFwUHJlY29tcG9zZUtleV8gPSBfb2xfZXZlbnRzXy5saXN0ZW4oXG4gICAgICAgIG1hcCwgX29sX3JlbmRlcl9FdmVudFR5cGVfLlBSRUNPTVBPU0UsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgIHZhciBsYXllclN0YXRlID0gdGhpcy5nZXRMYXllclN0YXRlKCk7XG4gICAgICAgICAgbGF5ZXJTdGF0ZS5tYW5hZ2VkID0gZmFsc2U7XG4gICAgICAgICAgbGF5ZXJTdGF0ZS56SW5kZXggPSBJbmZpbml0eTtcbiAgICAgICAgICBldnQuZnJhbWVTdGF0ZS5sYXllclN0YXRlc0FycmF5LnB1c2gobGF5ZXJTdGF0ZSk7XG4gICAgICAgICAgZXZ0LmZyYW1lU3RhdGUubGF5ZXJTdGF0ZXNbX29sXy5nZXRVaWQodGhpcyldID0gbGF5ZXJTdGF0ZTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgdGhpcy5tYXBSZW5kZXJLZXlfID0gX29sX2V2ZW50c18ubGlzdGVuKFxuICAgICAgICB0aGlzLCBfb2xfZXZlbnRzX0V2ZW50VHlwZV8uQ0hBTkdFLCBtYXAucmVuZGVyLCBtYXApO1xuICAgIHRoaXMuY2hhbmdlZCgpO1xuICB9XG59O1xuXG5cbi8qKlxuICogU2V0IHRoZSBsYXllciBzb3VyY2UuXG4gKiBAcGFyYW0ge29sLnNvdXJjZS5Tb3VyY2V9IHNvdXJjZSBUaGUgbGF5ZXIgc291cmNlLlxuICogQG9ic2VydmFibGVcbiAqIEBhcGlcbiAqL1xuX29sX2xheWVyX0xheWVyXy5wcm90b3R5cGUuc2V0U291cmNlID0gZnVuY3Rpb24oc291cmNlKSB7XG4gIHRoaXMuc2V0KF9vbF9sYXllcl9Qcm9wZXJ0eV8uU09VUkNFLCBzb3VyY2UpO1xufTtcbmV4cG9ydCBkZWZhdWx0IF9vbF9sYXllcl9MYXllcl87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9sYXllci9sYXllci5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG52YXIgX29sX2xheWVyX1Byb3BlcnR5XyA9IHtcbiAgT1BBQ0lUWTogJ29wYWNpdHknLFxuICBWSVNJQkxFOiAndmlzaWJsZScsXG4gIEVYVEVOVDogJ2V4dGVudCcsXG4gIFpfSU5ERVg6ICd6SW5kZXgnLFxuICBNQVhfUkVTT0xVVElPTjogJ21heFJlc29sdXRpb24nLFxuICBNSU5fUkVTT0xVVElPTjogJ21pblJlc29sdXRpb24nLFxuICBTT1VSQ0U6ICdzb3VyY2UnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBfb2xfbGF5ZXJfUHJvcGVydHlfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvbGF5ZXIvcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogU3RhdGUgb2YgdGhlIHNvdXJjZSwgb25lIG9mICd1bmRlZmluZWQnLCAnbG9hZGluZycsICdyZWFkeScgb3IgJ2Vycm9yJy5cbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbnZhciBfb2xfc291cmNlX1N0YXRlXyA9IHtcbiAgVU5ERUZJTkVEOiAndW5kZWZpbmVkJyxcbiAgTE9BRElORzogJ2xvYWRpbmcnLFxuICBSRUFEWTogJ3JlYWR5JyxcbiAgRVJST1I6ICdlcnJvcidcbn07XG5cbmV4cG9ydCBkZWZhdWx0IF9vbF9zb3VyY2VfU3RhdGVfO1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9zb3VyY2Uvc3RhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfb2xfIGZyb20gJy4vaW5kZXguanMnO1xuaW1wb3J0IF9vbF9ldmVudHNfRXZlbnRUYXJnZXRfIGZyb20gJy4vZXZlbnRzL2V2ZW50dGFyZ2V0LmpzJztcbmltcG9ydCBfb2xfZXZlbnRzX0V2ZW50VHlwZV8gZnJvbSAnLi9ldmVudHMvZXZlbnR0eXBlLmpzJztcblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBhYnN0cmFjdFxuICogQGV4dGVuZHMge29sLmV2ZW50cy5FdmVudFRhcmdldH1cbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHBhcmFtIHtudW1iZXJ8dW5kZWZpbmVkfSByZXNvbHV0aW9uIFJlc29sdXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gcGl4ZWxSYXRpbyBQaXhlbCByYXRpby5cbiAqIEBwYXJhbSB7b2wuSW1hZ2VTdGF0ZX0gc3RhdGUgU3RhdGUuXG4gKi9cbnZhciBfb2xfSW1hZ2VCYXNlXyA9IGZ1bmN0aW9uKGV4dGVudCwgcmVzb2x1dGlvbiwgcGl4ZWxSYXRpbywgc3RhdGUpIHtcblxuICBfb2xfZXZlbnRzX0V2ZW50VGFyZ2V0Xy5jYWxsKHRoaXMpO1xuXG4gIC8qKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEB0eXBlIHtvbC5FeHRlbnR9XG4gICAqL1xuICB0aGlzLmV4dGVudCA9IGV4dGVudDtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIHRoaXMucGl4ZWxSYXRpb18gPSBwaXhlbFJhdGlvO1xuXG4gIC8qKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEB0eXBlIHtudW1iZXJ8dW5kZWZpbmVkfVxuICAgKi9cbiAgdGhpcy5yZXNvbHV0aW9uID0gcmVzb2x1dGlvbjtcblxuICAvKipcbiAgICogQHByb3RlY3RlZFxuICAgKiBAdHlwZSB7b2wuSW1hZ2VTdGF0ZX1cbiAgICovXG4gIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxufTtcblxuX29sXy5pbmhlcml0cyhfb2xfSW1hZ2VCYXNlXywgX29sX2V2ZW50c19FdmVudFRhcmdldF8pO1xuXG5cbi8qKlxuICogQHByb3RlY3RlZFxuICovXG5fb2xfSW1hZ2VCYXNlXy5wcm90b3R5cGUuY2hhbmdlZCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoX29sX2V2ZW50c19FdmVudFR5cGVfLkNIQU5HRSk7XG59O1xuXG5cbi8qKlxuICogQHJldHVybiB7b2wuRXh0ZW50fSBFeHRlbnQuXG4gKi9cbl9vbF9JbWFnZUJhc2VfLnByb3RvdHlwZS5nZXRFeHRlbnQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZXh0ZW50O1xufTtcblxuXG4vKipcbiAqIEBhYnN0cmFjdFxuICogQHJldHVybiB7SFRNTENhbnZhc0VsZW1lbnR8SW1hZ2V8SFRNTFZpZGVvRWxlbWVudH0gSW1hZ2UuXG4gKi9cbl9vbF9JbWFnZUJhc2VfLnByb3RvdHlwZS5nZXRJbWFnZSA9IGZ1bmN0aW9uKCkge307XG5cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFBpeGVsUmF0aW8uXG4gKi9cbl9vbF9JbWFnZUJhc2VfLnByb3RvdHlwZS5nZXRQaXhlbFJhdGlvID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnBpeGVsUmF0aW9fO1xufTtcblxuXG4vKipcbiAqIEByZXR1cm4ge251bWJlcn0gUmVzb2x1dGlvbi5cbiAqL1xuX29sX0ltYWdlQmFzZV8ucHJvdG90eXBlLmdldFJlc29sdXRpb24gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAodGhpcy5yZXNvbHV0aW9uKTtcbn07XG5cblxuLyoqXG4gKiBAcmV0dXJuIHtvbC5JbWFnZVN0YXRlfSBTdGF0ZS5cbiAqL1xuX29sX0ltYWdlQmFzZV8ucHJvdG90eXBlLmdldFN0YXRlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnN0YXRlO1xufTtcblxuXG4vKipcbiAqIExvYWQgbm90IHlldCBsb2FkZWQgVVJJLlxuICogQGFic3RyYWN0XG4gKi9cbl9vbF9JbWFnZUJhc2VfLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24oKSB7fTtcbmV4cG9ydCBkZWZhdWx0IF9vbF9JbWFnZUJhc2VfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvaW1hZ2ViYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEV4dGVudCBjb3JuZXIuXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG52YXIgX29sX2V4dGVudF9Db3JuZXJfID0ge1xuICBCT1RUT01fTEVGVDogJ2JvdHRvbS1sZWZ0JyxcbiAgQk9UVE9NX1JJR0hUOiAnYm90dG9tLXJpZ2h0JyxcbiAgVE9QX0xFRlQ6ICd0b3AtbGVmdCcsXG4gIFRPUF9SSUdIVDogJ3RvcC1yaWdodCdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IF9vbF9leHRlbnRfQ29ybmVyXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL2V4dGVudC9jb3JuZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfb2xfYXJyYXlfID0ge307XG5cblxuLyoqXG4gKiBQZXJmb3JtcyBhIGJpbmFyeSBzZWFyY2ggb24gdGhlIHByb3ZpZGVkIHNvcnRlZCBsaXN0IGFuZCByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgaXRlbSBpZiBmb3VuZC4gSWYgaXQgY2FuJ3QgYmUgZm91bmQgaXQnbGwgcmV0dXJuIC0xLlxuICogaHR0cHM6Ly9naXRodWIuY29tL2Rhcmtza3lhcHAvYmluYXJ5LXNlYXJjaFxuICpcbiAqIEBwYXJhbSB7QXJyYXkuPCo+fSBoYXlzdGFjayBJdGVtcyB0byBzZWFyY2ggdGhyb3VnaC5cbiAqIEBwYXJhbSB7Kn0gbmVlZGxlIFRoZSBpdGVtIHRvIGxvb2sgZm9yLlxuICogQHBhcmFtIHtGdW5jdGlvbj19IG9wdF9jb21wYXJhdG9yIENvbXBhcmF0b3IgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBpbmRleCBvZiB0aGUgaXRlbSBpZiBmb3VuZCwgLTEgaWYgbm90LlxuICovXG5fb2xfYXJyYXlfLmJpbmFyeVNlYXJjaCA9IGZ1bmN0aW9uKGhheXN0YWNrLCBuZWVkbGUsIG9wdF9jb21wYXJhdG9yKSB7XG4gIHZhciBtaWQsIGNtcDtcbiAgdmFyIGNvbXBhcmF0b3IgPSBvcHRfY29tcGFyYXRvciB8fCBfb2xfYXJyYXlfLm51bWJlclNhZmVDb21wYXJlRnVuY3Rpb247XG4gIHZhciBsb3cgPSAwO1xuICB2YXIgaGlnaCA9IGhheXN0YWNrLmxlbmd0aDtcbiAgdmFyIGZvdW5kID0gZmFsc2U7XG5cbiAgd2hpbGUgKGxvdyA8IGhpZ2gpIHtcbiAgICAvKiBOb3RlIHRoYXQgXCIobG93ICsgaGlnaCkgPj4+IDFcIiBtYXkgb3ZlcmZsb3csIGFuZCByZXN1bHRzIGluIGEgdHlwZWNhc3RcbiAgICAgKiB0byBkb3VibGUgKHdoaWNoIGdpdmVzIHRoZSB3cm9uZyByZXN1bHRzKS4gKi9cbiAgICBtaWQgPSBsb3cgKyAoaGlnaCAtIGxvdyA+PiAxKTtcbiAgICBjbXAgPSArY29tcGFyYXRvcihoYXlzdGFja1ttaWRdLCBuZWVkbGUpO1xuXG4gICAgaWYgKGNtcCA8IDAuMCkgeyAvKiBUb28gbG93LiAqL1xuICAgICAgbG93ICA9IG1pZCArIDE7XG5cbiAgICB9IGVsc2UgeyAvKiBLZXkgZm91bmQgb3IgdG9vIGhpZ2ggKi9cbiAgICAgIGhpZ2ggPSBtaWQ7XG4gICAgICBmb3VuZCA9ICFjbXA7XG4gICAgfVxuICB9XG5cbiAgLyogS2V5IG5vdCBmb3VuZC4gKi9cbiAgcmV0dXJuIGZvdW5kID8gbG93IDogfmxvdztcbn07XG5cblxuLyoqXG4gKiBDb21wYXJlIGZ1bmN0aW9uIGZvciBhcnJheSBzb3J0IHRoYXQgaXMgc2FmZSBmb3IgbnVtYmVycy5cbiAqIEBwYXJhbSB7Kn0gYSBUaGUgZmlyc3Qgb2JqZWN0IHRvIGJlIGNvbXBhcmVkLlxuICogQHBhcmFtIHsqfSBiIFRoZSBzZWNvbmQgb2JqZWN0IHRvIGJlIGNvbXBhcmVkLlxuICogQHJldHVybiB7bnVtYmVyfSBBIG5lZ2F0aXZlIG51bWJlciwgemVybywgb3IgYSBwb3NpdGl2ZSBudW1iZXIgYXMgdGhlIGZpcnN0XG4gKiAgICAgYXJndW1lbnQgaXMgbGVzcyB0aGFuLCBlcXVhbCB0bywgb3IgZ3JlYXRlciB0aGFuIHRoZSBzZWNvbmQuXG4gKi9cbl9vbF9hcnJheV8ubnVtYmVyU2FmZUNvbXBhcmVGdW5jdGlvbiA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIGEgPiBiID8gMSA6IGEgPCBiID8gLTEgOiAwO1xufTtcblxuXG4vKipcbiAqIFdoZXRoZXIgdGhlIGFycmF5IGNvbnRhaW5zIHRoZSBnaXZlbiBvYmplY3QuXG4gKiBAcGFyYW0ge0FycmF5LjwqPn0gYXJyIFRoZSBhcnJheSB0byB0ZXN0IGZvciB0aGUgcHJlc2VuY2Ugb2YgdGhlIGVsZW1lbnQuXG4gKiBAcGFyYW0geyp9IG9iaiBUaGUgb2JqZWN0IGZvciB3aGljaCB0byB0ZXN0LlxuICogQHJldHVybiB7Ym9vbGVhbn0gVGhlIG9iamVjdCBpcyBpbiB0aGUgYXJyYXkuXG4gKi9cbl9vbF9hcnJheV8uaW5jbHVkZXMgPSBmdW5jdGlvbihhcnIsIG9iaikge1xuICByZXR1cm4gYXJyLmluZGV4T2Yob2JqKSA+PSAwO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXkuPG51bWJlcj59IGFyciBBcnJheS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0YXJnZXQgVGFyZ2V0LlxuICogQHBhcmFtIHtudW1iZXJ9IGRpcmVjdGlvbiAwIG1lYW5zIHJldHVybiB0aGUgbmVhcmVzdCwgPiAwXG4gKiAgICBtZWFucyByZXR1cm4gdGhlIGxhcmdlc3QgbmVhcmVzdCwgPCAwIG1lYW5zIHJldHVybiB0aGVcbiAqICAgIHNtYWxsZXN0IG5lYXJlc3QuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEluZGV4LlxuICovXG5fb2xfYXJyYXlfLmxpbmVhckZpbmROZWFyZXN0ID0gZnVuY3Rpb24oYXJyLCB0YXJnZXQsIGRpcmVjdGlvbikge1xuICB2YXIgbiA9IGFyci5sZW5ndGg7XG4gIGlmIChhcnJbMF0gPD0gdGFyZ2V0KSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSBpZiAodGFyZ2V0IDw9IGFycltuIC0gMV0pIHtcbiAgICByZXR1cm4gbiAtIDE7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGk7XG4gICAgaWYgKGRpcmVjdGlvbiA+IDApIHtcbiAgICAgIGZvciAoaSA9IDE7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgaWYgKGFycltpXSA8IHRhcmdldCkge1xuICAgICAgICAgIHJldHVybiBpIC0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uIDwgMCkge1xuICAgICAgZm9yIChpID0gMTsgaSA8IG47ICsraSkge1xuICAgICAgICBpZiAoYXJyW2ldIDw9IHRhcmdldCkge1xuICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoaSA9IDE7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgaWYgKGFycltpXSA9PSB0YXJnZXQpIHtcbiAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfSBlbHNlIGlmIChhcnJbaV0gPCB0YXJnZXQpIHtcbiAgICAgICAgICBpZiAoYXJyW2kgLSAxXSAtIHRhcmdldCA8IHRhcmdldCAtIGFycltpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGkgLSAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG4gLSAxO1xuICB9XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheS48Kj59IGFyciBBcnJheS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiZWdpbiBCZWdpbiBpbmRleC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgRW5kIGluZGV4LlxuICovXG5fb2xfYXJyYXlfLnJldmVyc2VTdWJBcnJheSA9IGZ1bmN0aW9uKGFyciwgYmVnaW4sIGVuZCkge1xuICB3aGlsZSAoYmVnaW4gPCBlbmQpIHtcbiAgICB2YXIgdG1wID0gYXJyW2JlZ2luXTtcbiAgICBhcnJbYmVnaW5dID0gYXJyW2VuZF07XG4gICAgYXJyW2VuZF0gPSB0bXA7XG4gICAgKytiZWdpbjtcbiAgICAtLWVuZDtcbiAgfVxufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXkuPFZBTFVFPn0gYXJyIFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5LjxWQUxVRT58VkFMVUV9IGRhdGEgVGhlIGVsZW1lbnRzIG9yIGFycmF5cyBvZiBlbGVtZW50c1xuICogICAgIHRvIGFkZCB0byBhcnIuXG4gKiBAdGVtcGxhdGUgVkFMVUVcbiAqL1xuX29sX2FycmF5Xy5leHRlbmQgPSBmdW5jdGlvbihhcnIsIGRhdGEpIHtcbiAgdmFyIGk7XG4gIHZhciBleHRlbnNpb24gPSBBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YSA6IFtkYXRhXTtcbiAgdmFyIGxlbmd0aCA9IGV4dGVuc2lvbi5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGFyclthcnIubGVuZ3RoXSA9IGV4dGVuc2lvbltpXTtcbiAgfVxufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXkuPFZBTFVFPn0gYXJyIFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge1ZBTFVFfSBvYmogVGhlIGVsZW1lbnQgdG8gcmVtb3ZlLlxuICogQHRlbXBsYXRlIFZBTFVFXG4gKiBAcmV0dXJuIHtib29sZWFufSBJZiB0aGUgZWxlbWVudCB3YXMgcmVtb3ZlZC5cbiAqL1xuX29sX2FycmF5Xy5yZW1vdmUgPSBmdW5jdGlvbihhcnIsIG9iaikge1xuICB2YXIgaSA9IGFyci5pbmRleE9mKG9iaik7XG4gIHZhciBmb3VuZCA9IGkgPiAtMTtcbiAgaWYgKGZvdW5kKSB7XG4gICAgYXJyLnNwbGljZShpLCAxKTtcbiAgfVxuICByZXR1cm4gZm91bmQ7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheS48VkFMVUU+fSBhcnIgVGhlIGFycmF5IHRvIHNlYXJjaCBpbi5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oVkFMVUUsIG51bWJlciwgPykgOiBib29sZWFufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb21wYXJlLlxuICogQHRlbXBsYXRlIFZBTFVFXG4gKiBAcmV0dXJuIHtWQUxVRX0gVGhlIGVsZW1lbnQgZm91bmQuXG4gKi9cbl9vbF9hcnJheV8uZmluZCA9IGZ1bmN0aW9uKGFyciwgZnVuYykge1xuICB2YXIgbGVuZ3RoID0gYXJyLmxlbmd0aCA+Pj4gMDtcbiAgdmFyIHZhbHVlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YWx1ZSA9IGFycltpXTtcbiAgICBpZiAoZnVuYyh2YWx1ZSwgaSwgYXJyKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5fFVpbnQ4Q2xhbXBlZEFycmF5fSBhcnIxIFRoZSBmaXJzdCBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtBcnJheXxVaW50OENsYW1wZWRBcnJheX0gYXJyMiBUaGUgc2Vjb25kIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJuIHtib29sZWFufSBXaGV0aGVyIHRoZSB0d28gYXJyYXlzIGFyZSBlcXVhbC5cbiAqL1xuX29sX2FycmF5Xy5lcXVhbHMgPSBmdW5jdGlvbihhcnIxLCBhcnIyKSB7XG4gIHZhciBsZW4xID0gYXJyMS5sZW5ndGg7XG4gIGlmIChsZW4xICE9PSBhcnIyLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjE7IGkrKykge1xuICAgIGlmIChhcnIxW2ldICE9PSBhcnIyW2ldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXkuPCo+fSBhcnIgVGhlIGFycmF5IHRvIHNvcnQgKG1vZGlmaWVzIG9yaWdpbmFsKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBhcmVGbmMgQ29tcGFyaXNvbiBmdW5jdGlvbi5cbiAqL1xuX29sX2FycmF5Xy5zdGFibGVTb3J0ID0gZnVuY3Rpb24oYXJyLCBjb21wYXJlRm5jKSB7XG4gIHZhciBsZW5ndGggPSBhcnIubGVuZ3RoO1xuICB2YXIgdG1wID0gQXJyYXkoYXJyLmxlbmd0aCk7XG4gIHZhciBpO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB0bXBbaV0gPSB7aW5kZXg6IGksIHZhbHVlOiBhcnJbaV19O1xuICB9XG4gIHRtcC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gY29tcGFyZUZuYyhhLnZhbHVlLCBiLnZhbHVlKSB8fCBhLmluZGV4IC0gYi5pbmRleDtcbiAgfSk7XG4gIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBhcnJbaV0gPSB0bXBbaV0udmFsdWU7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5LjwqPn0gYXJyIFRoZSBhcnJheSB0byBzZWFyY2ggaW4uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIENvbXBhcmlzb24gZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFJldHVybiBpbmRleC5cbiAqL1xuX29sX2FycmF5Xy5maW5kSW5kZXggPSBmdW5jdGlvbihhcnIsIGZ1bmMpIHtcbiAgdmFyIGluZGV4O1xuICB2YXIgZm91bmQgPSAhYXJyLmV2ZXJ5KGZ1bmN0aW9uKGVsLCBpZHgpIHtcbiAgICBpbmRleCA9IGlkeDtcbiAgICByZXR1cm4gIWZ1bmMoZWwsIGlkeCwgYXJyKTtcbiAgfSk7XG4gIHJldHVybiBmb3VuZCA/IGluZGV4IDogLTE7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheS48Kj59IGFyciBUaGUgYXJyYXkgdG8gdGVzdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBvcHRfZnVuYyBDb21wYXJpc29uIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtib29sZWFuPX0gb3B0X3N0cmljdCBTdHJpY3RseSBzb3J0ZWQgKGRlZmF1bHQgZmFsc2UpLlxuICogQHJldHVybiB7Ym9vbGVhbn0gUmV0dXJuIGluZGV4LlxuICovXG5fb2xfYXJyYXlfLmlzU29ydGVkID0gZnVuY3Rpb24oYXJyLCBvcHRfZnVuYywgb3B0X3N0cmljdCkge1xuICB2YXIgY29tcGFyZSA9IG9wdF9mdW5jIHx8IF9vbF9hcnJheV8ubnVtYmVyU2FmZUNvbXBhcmVGdW5jdGlvbjtcbiAgcmV0dXJuIGFyci5ldmVyeShmdW5jdGlvbihjdXJyZW50VmFsLCBpbmRleCkge1xuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHZhciByZXMgPSBjb21wYXJlKGFycltpbmRleCAtIDFdLCBjdXJyZW50VmFsKTtcbiAgICByZXR1cm4gIShyZXMgPiAwIHx8IG9wdF9zdHJpY3QgJiYgcmVzID09PSAwKTtcbiAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgX29sX2FycmF5XztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL2FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX29sX3Byb2pfcHJvajRfID0ge307XG5cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICogQHR5cGUge1Byb2o0fVxuICovXG5fb2xfcHJval9wcm9qNF8uY2FjaGVfID0gbnVsbDtcblxuXG4vKipcbiAqIFN0b3JlIHRoZSBwcm9qNCBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UHJvajR9IHByb2o0IFRoZSBwcm9qNCBmdW5jdGlvbi5cbiAqL1xuX29sX3Byb2pfcHJvajRfLnNldCA9IGZ1bmN0aW9uKHByb2o0KSB7XG4gIF9vbF9wcm9qX3Byb2o0Xy5jYWNoZV8gPSBwcm9qNDtcbn07XG5cblxuLyoqXG4gKiBHZXQgcHJvajQuXG4gKiBAcmV0dXJuIHtQcm9qNH0gVGhlIHByb2o0IGZ1bmN0aW9uIHNldCBhYm92ZSBvciBhdmFpbGFibGUgZ2xvYmFsbHkuXG4gKi9cbl9vbF9wcm9qX3Byb2o0Xy5nZXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIF9vbF9wcm9qX3Byb2o0Xy5jYWNoZV8gfHwgd2luZG93Wydwcm9qNCddO1xufTtcbmV4cG9ydCBkZWZhdWx0IF9vbF9wcm9qX3Byb2o0XztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL3Byb2ovcHJvajQuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfb2xfZG9tXyBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgX29sX2V4dGVudF8gZnJvbSAnLi9leHRlbnQuanMnO1xuaW1wb3J0IF9vbF9tYXRoXyBmcm9tICcuL21hdGguanMnO1xuaW1wb3J0IF9vbF9wcm9qXyBmcm9tICcuL3Byb2ouanMnO1xudmFyIF9vbF9yZXByb2pfID0ge307XG5cblxuLyoqXG4gKiBDYWxjdWxhdGVzIGlkZWFsIHJlc29sdXRpb24gdG8gdXNlIGZyb20gdGhlIHNvdXJjZSBpbiBvcmRlciB0byBhY2hpZXZlXG4gKiBwaXhlbCBtYXBwaW5nIGFzIGNsb3NlIGFzIHBvc3NpYmxlIHRvIDE6MSBkdXJpbmcgcmVwcm9qZWN0aW9uLlxuICogVGhlIHJlc29sdXRpb24gaXMgY2FsY3VsYXRlZCByZWdhcmRsZXNzIG9mIHdoYXQgcmVzb2x1dGlvbnNcbiAqIGFyZSBhY3R1YWxseSBhdmFpbGFibGUgaW4gdGhlIGRhdGFzZXQgKFRpbGVHcmlkLCBJbWFnZSwgLi4uKS5cbiAqXG4gKiBAcGFyYW0ge29sLnByb2ouUHJvamVjdGlvbn0gc291cmNlUHJvaiBTb3VyY2UgcHJvamVjdGlvbi5cbiAqIEBwYXJhbSB7b2wucHJvai5Qcm9qZWN0aW9ufSB0YXJnZXRQcm9qIFRhcmdldCBwcm9qZWN0aW9uLlxuICogQHBhcmFtIHtvbC5Db29yZGluYXRlfSB0YXJnZXRDZW50ZXIgVGFyZ2V0IGNlbnRlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0YXJnZXRSZXNvbHV0aW9uIFRhcmdldCByZXNvbHV0aW9uLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgYmVzdCByZXNvbHV0aW9uIHRvIHVzZS4gQ2FuIGJlICstSW5maW5pdHksIE5hTiBvciAwLlxuICovXG5fb2xfcmVwcm9qXy5jYWxjdWxhdGVTb3VyY2VSZXNvbHV0aW9uID0gZnVuY3Rpb24oc291cmNlUHJvaiwgdGFyZ2V0UHJvaixcbiAgICB0YXJnZXRDZW50ZXIsIHRhcmdldFJlc29sdXRpb24pIHtcblxuICB2YXIgc291cmNlQ2VudGVyID0gX29sX3Byb2pfLnRyYW5zZm9ybSh0YXJnZXRDZW50ZXIsIHRhcmdldFByb2osIHNvdXJjZVByb2opO1xuXG4gIC8vIGNhbGN1bGF0ZSB0aGUgaWRlYWwgcmVzb2x1dGlvbiBvZiB0aGUgc291cmNlIGRhdGFcbiAgdmFyIHNvdXJjZVJlc29sdXRpb24gPVxuICAgICAgX29sX3Byb2pfLmdldFBvaW50UmVzb2x1dGlvbih0YXJnZXRQcm9qLCB0YXJnZXRSZXNvbHV0aW9uLCB0YXJnZXRDZW50ZXIpO1xuXG4gIHZhciB0YXJnZXRNZXRlcnNQZXJVbml0ID0gdGFyZ2V0UHJvai5nZXRNZXRlcnNQZXJVbml0KCk7XG4gIGlmICh0YXJnZXRNZXRlcnNQZXJVbml0ICE9PSB1bmRlZmluZWQpIHtcbiAgICBzb3VyY2VSZXNvbHV0aW9uICo9IHRhcmdldE1ldGVyc1BlclVuaXQ7XG4gIH1cbiAgdmFyIHNvdXJjZU1ldGVyc1BlclVuaXQgPSBzb3VyY2VQcm9qLmdldE1ldGVyc1BlclVuaXQoKTtcbiAgaWYgKHNvdXJjZU1ldGVyc1BlclVuaXQgIT09IHVuZGVmaW5lZCkge1xuICAgIHNvdXJjZVJlc29sdXRpb24gLz0gc291cmNlTWV0ZXJzUGVyVW5pdDtcbiAgfVxuXG4gIC8vIEJhc2VkIG9uIHRoZSBwcm9qZWN0aW9uIHByb3BlcnRpZXMsIHRoZSBwb2ludCByZXNvbHV0aW9uIGF0IHRoZSBzcGVjaWZpZWRcbiAgLy8gY29vcmRpbmF0ZXMgbWF5IGJlIHNsaWdodGx5IGRpZmZlcmVudC4gV2UgbmVlZCB0byByZXZlcnNlLWNvbXBlbnNhdGUgdGhpc1xuICAvLyBpbiBvcmRlciB0byBhY2hpZXZlIG9wdGltYWwgcmVzdWx0cy5cblxuICB2YXIgc291cmNlRXh0ZW50ID0gc291cmNlUHJvai5nZXRFeHRlbnQoKTtcbiAgaWYgKCFzb3VyY2VFeHRlbnQgfHwgX29sX2V4dGVudF8uY29udGFpbnNDb29yZGluYXRlKHNvdXJjZUV4dGVudCwgc291cmNlQ2VudGVyKSkge1xuICAgIHZhciBjb21wZW5zYXRpb25GYWN0b3IgPVxuICAgICAgICBfb2xfcHJval8uZ2V0UG9pbnRSZXNvbHV0aW9uKHNvdXJjZVByb2osIHNvdXJjZVJlc29sdXRpb24sIHNvdXJjZUNlbnRlcikgL1xuICAgICAgICBzb3VyY2VSZXNvbHV0aW9uO1xuICAgIGlmIChpc0Zpbml0ZShjb21wZW5zYXRpb25GYWN0b3IpICYmIGNvbXBlbnNhdGlvbkZhY3RvciA+IDApIHtcbiAgICAgIHNvdXJjZVJlc29sdXRpb24gLz0gY29tcGVuc2F0aW9uRmFjdG9yO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzb3VyY2VSZXNvbHV0aW9uO1xufTtcblxuXG4vKipcbiAqIEVubGFyZ2UgdGhlIGNsaXBwaW5nIHRyaWFuZ2xlIHBvaW50IGJ5IDEgcGl4ZWwgdG8gZW5zdXJlIHRoZSBlZGdlcyBvdmVybGFwXG4gKiBpbiBvcmRlciB0byBtYXNrIGdhcHMgY2F1c2VkIGJ5IGFudGlhbGlhc2luZy5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gY2VudHJvaWRYIENlbnRyb2lkIG9mIHRoZSB0cmlhbmdsZSAoeCBjb29yZGluYXRlIGluIHBpeGVscykuXG4gKiBAcGFyYW0ge251bWJlcn0gY2VudHJvaWRZIENlbnRyb2lkIG9mIHRoZSB0cmlhbmdsZSAoeSBjb29yZGluYXRlIGluIHBpeGVscykuXG4gKiBAcGFyYW0ge251bWJlcn0geCBYIGNvb3JkaW5hdGUgb2YgdGhlIHBvaW50IChpbiBwaXhlbHMpLlxuICogQHBhcmFtIHtudW1iZXJ9IHkgWSBjb29yZGluYXRlIG9mIHRoZSBwb2ludCAoaW4gcGl4ZWxzKS5cbiAqIEByZXR1cm4ge29sLkNvb3JkaW5hdGV9IE5ldyBwb2ludCAxIHB4IGZhcnRoZXIgZnJvbSB0aGUgY2VudHJvaWQuXG4gKiBAcHJpdmF0ZVxuICovXG5fb2xfcmVwcm9qXy5lbmxhcmdlQ2xpcFBvaW50XyA9IGZ1bmN0aW9uKGNlbnRyb2lkWCwgY2VudHJvaWRZLCB4LCB5KSB7XG4gIHZhciBkWCA9IHggLSBjZW50cm9pZFgsIGRZID0geSAtIGNlbnRyb2lkWTtcbiAgdmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KGRYICogZFggKyBkWSAqIGRZKTtcbiAgcmV0dXJuIFtNYXRoLnJvdW5kKHggKyBkWCAvIGRpc3RhbmNlKSwgTWF0aC5yb3VuZCh5ICsgZFkgLyBkaXN0YW5jZSldO1xufTtcblxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIHNvdXJjZSBkYXRhIGludG8gbmV3IGNhbnZhcyBiYXNlZCBvbiB0aGUgdHJpYW5ndWxhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGggV2lkdGggb2YgdGhlIGNhbnZhcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgSGVpZ2h0IG9mIHRoZSBjYW52YXMuXG4gKiBAcGFyYW0ge251bWJlcn0gcGl4ZWxSYXRpbyBQaXhlbCByYXRpby5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzb3VyY2VSZXNvbHV0aW9uIFNvdXJjZSByZXNvbHV0aW9uLlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IHNvdXJjZUV4dGVudCBFeHRlbnQgb2YgdGhlIGRhdGEgc291cmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IHRhcmdldFJlc29sdXRpb24gVGFyZ2V0IHJlc29sdXRpb24uXG4gKiBAcGFyYW0ge29sLkV4dGVudH0gdGFyZ2V0RXh0ZW50IFRhcmdldCBleHRlbnQuXG4gKiBAcGFyYW0ge29sLnJlcHJvai5Ucmlhbmd1bGF0aW9ufSB0cmlhbmd1bGF0aW9uIENhbGN1bGF0ZWQgdHJpYW5ndWxhdGlvbi5cbiAqIEBwYXJhbSB7QXJyYXkuPHtleHRlbnQ6IG9sLkV4dGVudCxcbiAqICAgICAgICAgICAgICAgICBpbWFnZTogKEhUTUxDYW52YXNFbGVtZW50fEltYWdlfEhUTUxWaWRlb0VsZW1lbnQpfT59IHNvdXJjZXNcbiAqICAgICAgICAgICAgIEFycmF5IG9mIHNvdXJjZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gZ3V0dGVyIEd1dHRlciBvZiB0aGUgc291cmNlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdF9yZW5kZXJFZGdlcyBSZW5kZXIgcmVwcm9qZWN0aW9uIGVkZ2VzLlxuICogQHJldHVybiB7SFRNTENhbnZhc0VsZW1lbnR9IENhbnZhcyB3aXRoIHJlcHJvamVjdGVkIGRhdGEuXG4gKi9cbl9vbF9yZXByb2pfLnJlbmRlciA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQsIHBpeGVsUmF0aW8sXG4gICAgc291cmNlUmVzb2x1dGlvbiwgc291cmNlRXh0ZW50LCB0YXJnZXRSZXNvbHV0aW9uLCB0YXJnZXRFeHRlbnQsXG4gICAgdHJpYW5ndWxhdGlvbiwgc291cmNlcywgZ3V0dGVyLCBvcHRfcmVuZGVyRWRnZXMpIHtcblxuICB2YXIgY29udGV4dCA9IF9vbF9kb21fLmNyZWF0ZUNhbnZhc0NvbnRleHQyRChNYXRoLnJvdW5kKHBpeGVsUmF0aW8gKiB3aWR0aCksXG4gICAgICBNYXRoLnJvdW5kKHBpeGVsUmF0aW8gKiBoZWlnaHQpKTtcblxuICBpZiAoc291cmNlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gY29udGV4dC5jYW52YXM7XG4gIH1cblxuICBjb250ZXh0LnNjYWxlKHBpeGVsUmF0aW8sIHBpeGVsUmF0aW8pO1xuXG4gIHZhciBzb3VyY2VEYXRhRXh0ZW50ID0gX29sX2V4dGVudF8uY3JlYXRlRW1wdHkoKTtcbiAgc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uKHNyYywgaSwgYXJyKSB7XG4gICAgX29sX2V4dGVudF8uZXh0ZW5kKHNvdXJjZURhdGFFeHRlbnQsIHNyYy5leHRlbnQpO1xuICB9KTtcblxuICB2YXIgY2FudmFzV2lkdGhJblVuaXRzID0gX29sX2V4dGVudF8uZ2V0V2lkdGgoc291cmNlRGF0YUV4dGVudCk7XG4gIHZhciBjYW52YXNIZWlnaHRJblVuaXRzID0gX29sX2V4dGVudF8uZ2V0SGVpZ2h0KHNvdXJjZURhdGFFeHRlbnQpO1xuICB2YXIgc3RpdGNoQ29udGV4dCA9IF9vbF9kb21fLmNyZWF0ZUNhbnZhc0NvbnRleHQyRChcbiAgICAgIE1hdGgucm91bmQocGl4ZWxSYXRpbyAqIGNhbnZhc1dpZHRoSW5Vbml0cyAvIHNvdXJjZVJlc29sdXRpb24pLFxuICAgICAgTWF0aC5yb3VuZChwaXhlbFJhdGlvICogY2FudmFzSGVpZ2h0SW5Vbml0cyAvIHNvdXJjZVJlc29sdXRpb24pKTtcblxuICB2YXIgc3RpdGNoU2NhbGUgPSBwaXhlbFJhdGlvIC8gc291cmNlUmVzb2x1dGlvbjtcblxuICBzb3VyY2VzLmZvckVhY2goZnVuY3Rpb24oc3JjLCBpLCBhcnIpIHtcbiAgICB2YXIgeFBvcyA9IHNyYy5leHRlbnRbMF0gLSBzb3VyY2VEYXRhRXh0ZW50WzBdO1xuICAgIHZhciB5UG9zID0gLShzcmMuZXh0ZW50WzNdIC0gc291cmNlRGF0YUV4dGVudFszXSk7XG4gICAgdmFyIHNyY1dpZHRoID0gX29sX2V4dGVudF8uZ2V0V2lkdGgoc3JjLmV4dGVudCk7XG4gICAgdmFyIHNyY0hlaWdodCA9IF9vbF9leHRlbnRfLmdldEhlaWdodChzcmMuZXh0ZW50KTtcblxuICAgIHN0aXRjaENvbnRleHQuZHJhd0ltYWdlKFxuICAgICAgICBzcmMuaW1hZ2UsXG4gICAgICAgIGd1dHRlciwgZ3V0dGVyLFxuICAgICAgICBzcmMuaW1hZ2Uud2lkdGggLSAyICogZ3V0dGVyLCBzcmMuaW1hZ2UuaGVpZ2h0IC0gMiAqIGd1dHRlcixcbiAgICAgICAgeFBvcyAqIHN0aXRjaFNjYWxlLCB5UG9zICogc3RpdGNoU2NhbGUsXG4gICAgICAgIHNyY1dpZHRoICogc3RpdGNoU2NhbGUsIHNyY0hlaWdodCAqIHN0aXRjaFNjYWxlKTtcbiAgfSk7XG5cbiAgdmFyIHRhcmdldFRvcExlZnQgPSBfb2xfZXh0ZW50Xy5nZXRUb3BMZWZ0KHRhcmdldEV4dGVudCk7XG5cbiAgdHJpYW5ndWxhdGlvbi5nZXRUcmlhbmdsZXMoKS5mb3JFYWNoKGZ1bmN0aW9uKHRyaWFuZ2xlLCBpLCBhcnIpIHtcbiAgICAvKiBDYWxjdWxhdGUgYWZmaW5lIHRyYW5zZm9ybSAoc3JjIC0+IGRzdClcbiAgICAgKiBSZXN1bHRpbmcgbWF0cml4IGNhbiBiZSB1c2VkIHRvIHRyYW5zZm9ybSBjb29yZGluYXRlXG4gICAgICogZnJvbSBgc291cmNlUHJvamVjdGlvbmAgdG8gZGVzdGluYXRpb24gcGl4ZWxzLlxuICAgICAqXG4gICAgICogVG8gb3B0aW1pemUgbnVtYmVyIG9mIGNvbnRleHQgY2FsbHMgYW5kIGluY3JlYXNlIG51bWVyaWNhbCBzdGFiaWxpdHksXG4gICAgICogd2UgYWxzbyBkbyB0aGUgZm9sbG93aW5nIG9wZXJhdGlvbnM6XG4gICAgICogdHJhbnMoLXRvcExlZnRFeHRlbnRDb3JuZXIpLCBzY2FsZSgxIC8gdGFyZ2V0UmVzb2x1dGlvbiksIHNjYWxlKDEsIC0xKVxuICAgICAqIGhlcmUgYmVmb3JlIHNvbHZpbmcgdGhlIGxpbmVhciBzeXN0ZW0gc28gW3VpLCB2aV0gYXJlIHBpeGVsIGNvb3JkaW5hdGVzLlxuICAgICAqXG4gICAgICogU3JjIHBvaW50czogeGksIHlpXG4gICAgICogRHN0IHBvaW50czogdWksIHZpXG4gICAgICogQWZmaW5lIGNvZWZmaWNpZW50czogYWlqXG4gICAgICpcbiAgICAgKiB8IHgwIHkwIDEgIDAgIDAgMCB8ICAgfGEwMHwgICB8dTB8XG4gICAgICogfCB4MSB5MSAxICAwICAwIDAgfCAgIHxhMDF8ICAgfHUxfFxuICAgICAqIHwgeDIgeTIgMSAgMCAgMCAwIHwgeCB8YTAyfCA9IHx1MnxcbiAgICAgKiB8ICAwICAwIDAgeDAgeTAgMSB8ICAgfGExMHwgICB8djB8XG4gICAgICogfCAgMCAgMCAwIHgxIHkxIDEgfCAgIHxhMTF8ICAgfHYxfFxuICAgICAqIHwgIDAgIDAgMCB4MiB5MiAxIHwgICB8YTEyfCAgIHx2MnxcbiAgICAgKi9cbiAgICB2YXIgc291cmNlID0gdHJpYW5nbGUuc291cmNlLCB0YXJnZXQgPSB0cmlhbmdsZS50YXJnZXQ7XG4gICAgdmFyIHgwID0gc291cmNlWzBdWzBdLCB5MCA9IHNvdXJjZVswXVsxXSxcbiAgICAgICAgeDEgPSBzb3VyY2VbMV1bMF0sIHkxID0gc291cmNlWzFdWzFdLFxuICAgICAgICB4MiA9IHNvdXJjZVsyXVswXSwgeTIgPSBzb3VyY2VbMl1bMV07XG4gICAgdmFyIHUwID0gKHRhcmdldFswXVswXSAtIHRhcmdldFRvcExlZnRbMF0pIC8gdGFyZ2V0UmVzb2x1dGlvbixcbiAgICAgICAgdjAgPSAtKHRhcmdldFswXVsxXSAtIHRhcmdldFRvcExlZnRbMV0pIC8gdGFyZ2V0UmVzb2x1dGlvbjtcbiAgICB2YXIgdTEgPSAodGFyZ2V0WzFdWzBdIC0gdGFyZ2V0VG9wTGVmdFswXSkgLyB0YXJnZXRSZXNvbHV0aW9uLFxuICAgICAgICB2MSA9IC0odGFyZ2V0WzFdWzFdIC0gdGFyZ2V0VG9wTGVmdFsxXSkgLyB0YXJnZXRSZXNvbHV0aW9uO1xuICAgIHZhciB1MiA9ICh0YXJnZXRbMl1bMF0gLSB0YXJnZXRUb3BMZWZ0WzBdKSAvIHRhcmdldFJlc29sdXRpb24sXG4gICAgICAgIHYyID0gLSh0YXJnZXRbMl1bMV0gLSB0YXJnZXRUb3BMZWZ0WzFdKSAvIHRhcmdldFJlc29sdXRpb247XG5cbiAgICAvLyBTaGlmdCBhbGwgdGhlIHNvdXJjZSBwb2ludHMgdG8gaW1wcm92ZSBudW1lcmljYWwgc3RhYmlsaXR5XG4gICAgLy8gb2YgYWxsIHRoZSBzdWJzZXF1ZW50IGNhbGN1bGF0aW9ucy4gVGhlIFt4MCwgeTBdIGlzIHVzZWQgaGVyZS5cbiAgICAvLyBUaGlzIGlzIGFsc28gdXNlZCB0byBzaW1wbGlmeSB0aGUgbGluZWFyIHN5c3RlbS5cbiAgICB2YXIgc291cmNlTnVtZXJpY2FsU2hpZnRYID0geDAsIHNvdXJjZU51bWVyaWNhbFNoaWZ0WSA9IHkwO1xuICAgIHgwID0gMDtcbiAgICB5MCA9IDA7XG4gICAgeDEgLT0gc291cmNlTnVtZXJpY2FsU2hpZnRYO1xuICAgIHkxIC09IHNvdXJjZU51bWVyaWNhbFNoaWZ0WTtcbiAgICB4MiAtPSBzb3VyY2VOdW1lcmljYWxTaGlmdFg7XG4gICAgeTIgLT0gc291cmNlTnVtZXJpY2FsU2hpZnRZO1xuXG4gICAgdmFyIGF1Z21lbnRlZE1hdHJpeCA9IFtcbiAgICAgIFt4MSwgeTEsIDAsIDAsIHUxIC0gdTBdLFxuICAgICAgW3gyLCB5MiwgMCwgMCwgdTIgLSB1MF0sXG4gICAgICBbMCwgMCwgeDEsIHkxLCB2MSAtIHYwXSxcbiAgICAgIFswLCAwLCB4MiwgeTIsIHYyIC0gdjBdXG4gICAgXTtcbiAgICB2YXIgYWZmaW5lQ29lZnMgPSBfb2xfbWF0aF8uc29sdmVMaW5lYXJTeXN0ZW0oYXVnbWVudGVkTWF0cml4KTtcbiAgICBpZiAoIWFmZmluZUNvZWZzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICB2YXIgY2VudHJvaWRYID0gKHUwICsgdTEgKyB1MikgLyAzLCBjZW50cm9pZFkgPSAodjAgKyB2MSArIHYyKSAvIDM7XG4gICAgdmFyIHAwID0gX29sX3JlcHJval8uZW5sYXJnZUNsaXBQb2ludF8oY2VudHJvaWRYLCBjZW50cm9pZFksIHUwLCB2MCk7XG4gICAgdmFyIHAxID0gX29sX3JlcHJval8uZW5sYXJnZUNsaXBQb2ludF8oY2VudHJvaWRYLCBjZW50cm9pZFksIHUxLCB2MSk7XG4gICAgdmFyIHAyID0gX29sX3JlcHJval8uZW5sYXJnZUNsaXBQb2ludF8oY2VudHJvaWRYLCBjZW50cm9pZFksIHUyLCB2Mik7XG5cbiAgICBjb250ZXh0Lm1vdmVUbyhwMVswXSwgcDFbMV0pO1xuICAgIGNvbnRleHQubGluZVRvKHAwWzBdLCBwMFsxXSk7XG4gICAgY29udGV4dC5saW5lVG8ocDJbMF0sIHAyWzFdKTtcbiAgICBjb250ZXh0LmNsaXAoKTtcblxuICAgIGNvbnRleHQudHJhbnNmb3JtKFxuICAgICAgICBhZmZpbmVDb2Vmc1swXSwgYWZmaW5lQ29lZnNbMl0sIGFmZmluZUNvZWZzWzFdLCBhZmZpbmVDb2Vmc1szXSwgdTAsIHYwKTtcblxuICAgIGNvbnRleHQudHJhbnNsYXRlKHNvdXJjZURhdGFFeHRlbnRbMF0gLSBzb3VyY2VOdW1lcmljYWxTaGlmdFgsXG4gICAgICAgIHNvdXJjZURhdGFFeHRlbnRbM10gLSBzb3VyY2VOdW1lcmljYWxTaGlmdFkpO1xuXG4gICAgY29udGV4dC5zY2FsZShzb3VyY2VSZXNvbHV0aW9uIC8gcGl4ZWxSYXRpbyxcbiAgICAgICAgLXNvdXJjZVJlc29sdXRpb24gLyBwaXhlbFJhdGlvKTtcblxuICAgIGNvbnRleHQuZHJhd0ltYWdlKHN0aXRjaENvbnRleHQuY2FudmFzLCAwLCAwKTtcbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfSk7XG5cbiAgaWYgKG9wdF9yZW5kZXJFZGdlcykge1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuXG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICdibGFjayc7XG4gICAgY29udGV4dC5saW5lV2lkdGggPSAxO1xuXG4gICAgdHJpYW5ndWxhdGlvbi5nZXRUcmlhbmdsZXMoKS5mb3JFYWNoKGZ1bmN0aW9uKHRyaWFuZ2xlLCBpLCBhcnIpIHtcbiAgICAgIHZhciB0YXJnZXQgPSB0cmlhbmdsZS50YXJnZXQ7XG4gICAgICB2YXIgdTAgPSAodGFyZ2V0WzBdWzBdIC0gdGFyZ2V0VG9wTGVmdFswXSkgLyB0YXJnZXRSZXNvbHV0aW9uLFxuICAgICAgICAgIHYwID0gLSh0YXJnZXRbMF1bMV0gLSB0YXJnZXRUb3BMZWZ0WzFdKSAvIHRhcmdldFJlc29sdXRpb247XG4gICAgICB2YXIgdTEgPSAodGFyZ2V0WzFdWzBdIC0gdGFyZ2V0VG9wTGVmdFswXSkgLyB0YXJnZXRSZXNvbHV0aW9uLFxuICAgICAgICAgIHYxID0gLSh0YXJnZXRbMV1bMV0gLSB0YXJnZXRUb3BMZWZ0WzFdKSAvIHRhcmdldFJlc29sdXRpb247XG4gICAgICB2YXIgdTIgPSAodGFyZ2V0WzJdWzBdIC0gdGFyZ2V0VG9wTGVmdFswXSkgLyB0YXJnZXRSZXNvbHV0aW9uLFxuICAgICAgICAgIHYyID0gLSh0YXJnZXRbMl1bMV0gLSB0YXJnZXRUb3BMZWZ0WzFdKSAvIHRhcmdldFJlc29sdXRpb247XG5cbiAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICBjb250ZXh0Lm1vdmVUbyh1MSwgdjEpO1xuICAgICAgY29udGV4dC5saW5lVG8odTAsIHYwKTtcbiAgICAgIGNvbnRleHQubGluZVRvKHUyLCB2Mik7XG4gICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICB9KTtcblxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG4gIHJldHVybiBjb250ZXh0LmNhbnZhcztcbn07XG5leHBvcnQgZGVmYXVsdCBfb2xfcmVwcm9qXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL3JlcHJvai5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9vbF9kb21fID0ge307XG5cblxuLyoqXG4gKiBDcmVhdGUgYW4gaHRtbCBjYW52YXMgZWxlbWVudCBhbmQgcmV0dXJucyBpdHMgMmQgY29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyPX0gb3B0X3dpZHRoIENhbnZhcyB3aWR0aC5cbiAqIEBwYXJhbSB7bnVtYmVyPX0gb3B0X2hlaWdodCBDYW52YXMgaGVpZ2h0LlxuICogQHJldHVybiB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBUaGUgY29udGV4dC5cbiAqL1xuX29sX2RvbV8uY3JlYXRlQ2FudmFzQ29udGV4dDJEID0gZnVuY3Rpb24ob3B0X3dpZHRoLCBvcHRfaGVpZ2h0KSB7XG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdDQU5WQVMnKTtcbiAgaWYgKG9wdF93aWR0aCkge1xuICAgIGNhbnZhcy53aWR0aCA9IG9wdF93aWR0aDtcbiAgfVxuICBpZiAob3B0X2hlaWdodCkge1xuICAgIGNhbnZhcy5oZWlnaHQgPSBvcHRfaGVpZ2h0O1xuICB9XG4gIHJldHVybiBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIGN1cnJlbnQgY29tcHV0ZWQgd2lkdGggZm9yIHRoZSBnaXZlbiBlbGVtZW50IGluY2x1ZGluZyBtYXJnaW4sXG4gKiBwYWRkaW5nIGFuZCBib3JkZXIuXG4gKiBFcXVpdmFsZW50IHRvIGpRdWVyeSdzIGAkKGVsKS5vdXRlcldpZHRoKHRydWUpYC5cbiAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudC5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIHdpZHRoLlxuICovXG5fb2xfZG9tXy5vdXRlcldpZHRoID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICB2YXIgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICB3aWR0aCArPSBwYXJzZUludChzdHlsZS5tYXJnaW5MZWZ0LCAxMCkgKyBwYXJzZUludChzdHlsZS5tYXJnaW5SaWdodCwgMTApO1xuXG4gIHJldHVybiB3aWR0aDtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIGN1cnJlbnQgY29tcHV0ZWQgaGVpZ2h0IGZvciB0aGUgZ2l2ZW4gZWxlbWVudCBpbmNsdWRpbmcgbWFyZ2luLFxuICogcGFkZGluZyBhbmQgYm9yZGVyLlxuICogRXF1aXZhbGVudCB0byBqUXVlcnkncyBgJChlbCkub3V0ZXJIZWlnaHQodHJ1ZSlgLlxuICogQHBhcmFtIHshRWxlbWVudH0gZWxlbWVudCBFbGVtZW50LlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgaGVpZ2h0LlxuICovXG5fb2xfZG9tXy5vdXRlckhlaWdodCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgdmFyIGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICBoZWlnaHQgKz0gcGFyc2VJbnQoc3R5bGUubWFyZ2luVG9wLCAxMCkgKyBwYXJzZUludChzdHlsZS5tYXJnaW5Cb3R0b20sIDEwKTtcblxuICByZXR1cm4gaGVpZ2h0O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge05vZGV9IG5ld05vZGUgTm9kZSB0byByZXBsYWNlIG9sZCBub2RlXG4gKiBAcGFyYW0ge05vZGV9IG9sZE5vZGUgVGhlIG5vZGUgdG8gYmUgcmVwbGFjZWRcbiAqL1xuX29sX2RvbV8ucmVwbGFjZU5vZGUgPSBmdW5jdGlvbihuZXdOb2RlLCBvbGROb2RlKSB7XG4gIHZhciBwYXJlbnQgPSBvbGROb2RlLnBhcmVudE5vZGU7XG4gIGlmIChwYXJlbnQpIHtcbiAgICBwYXJlbnQucmVwbGFjZUNoaWxkKG5ld05vZGUsIG9sZE5vZGUpO1xuICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBUaGUgbm9kZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Tm9kZX0gVGhlIG5vZGUgdGhhdCB3YXMgcmVtb3ZlZCBvciBudWxsLlxuICovXG5fb2xfZG9tXy5yZW1vdmVOb2RlID0gZnVuY3Rpb24obm9kZSkge1xuICByZXR1cm4gbm9kZSAmJiBub2RlLnBhcmVudE5vZGUgPyBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSkgOiBudWxsO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgVGhlIG5vZGUgdG8gcmVtb3ZlIHRoZSBjaGlsZHJlbiBmcm9tLlxuICovXG5fb2xfZG9tXy5yZW1vdmVDaGlsZHJlbiA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgd2hpbGUgKG5vZGUubGFzdENoaWxkKSB7XG4gICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmxhc3RDaGlsZCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBfb2xfZG9tXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL2RvbS5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF9vbF8gZnJvbSAnLi4vaW5kZXguanMnO1xuaW1wb3J0IF9vbF9leHRlbnRfIGZyb20gJy4uL2V4dGVudC5qcyc7XG5pbXBvcnQgX29sX21hdGhfIGZyb20gJy4uL21hdGguanMnO1xuaW1wb3J0IF9vbF9wcm9qXyBmcm9tICcuLi9wcm9qLmpzJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBDbGFzcyBjb250YWluaW5nIHRyaWFuZ3VsYXRpb24gb2YgdGhlIGdpdmVuIHRhcmdldCBleHRlbnQuXG4gKiBVc2VkIGZvciBkZXRlcm1pbmluZyBzb3VyY2UgZGF0YSBhbmQgdGhlIHJlcHJvamVjdGlvbiBpdHNlbGYuXG4gKlxuICogQHBhcmFtIHtvbC5wcm9qLlByb2plY3Rpb259IHNvdXJjZVByb2ogU291cmNlIHByb2plY3Rpb24uXG4gKiBAcGFyYW0ge29sLnByb2ouUHJvamVjdGlvbn0gdGFyZ2V0UHJvaiBUYXJnZXQgcHJvamVjdGlvbi5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSB0YXJnZXRFeHRlbnQgVGFyZ2V0IGV4dGVudCB0byB0cmlhbmd1bGF0ZS5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBtYXhTb3VyY2VFeHRlbnQgTWF4aW1hbCBzb3VyY2UgZXh0ZW50IHRoYXQgY2FuIGJlIHVzZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gZXJyb3JUaHJlc2hvbGQgQWNjZXB0YWJsZSBlcnJvciAoaW4gc291cmNlIHVuaXRzKS5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgX29sX3JlcHJval9Ucmlhbmd1bGF0aW9uXyA9IGZ1bmN0aW9uKHNvdXJjZVByb2osIHRhcmdldFByb2osIHRhcmdldEV4dGVudCxcbiAgICBtYXhTb3VyY2VFeHRlbnQsIGVycm9yVGhyZXNob2xkKSB7XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtvbC5wcm9qLlByb2plY3Rpb259XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB0aGlzLnNvdXJjZVByb2pfID0gc291cmNlUHJvajtcblxuICAvKipcbiAgICogQHR5cGUge29sLnByb2ouUHJvamVjdGlvbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHRoaXMudGFyZ2V0UHJval8gPSB0YXJnZXRQcm9qO1xuXG4gIC8qKiBAdHlwZSB7IU9iamVjdC48c3RyaW5nLCBvbC5Db29yZGluYXRlPn0gKi9cbiAgdmFyIHRyYW5zZm9ybUludkNhY2hlID0ge307XG4gIHZhciB0cmFuc2Zvcm1JbnYgPSBfb2xfcHJval8uZ2V0VHJhbnNmb3JtKHRoaXMudGFyZ2V0UHJval8sIHRoaXMuc291cmNlUHJval8pO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge29sLkNvb3JkaW5hdGV9IGMgQSBjb29yZGluYXRlLlxuICAgKiBAcmV0dXJuIHtvbC5Db29yZGluYXRlfSBUcmFuc2Zvcm1lZCBjb29yZGluYXRlLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdGhpcy50cmFuc2Zvcm1JbnZfID0gZnVuY3Rpb24oYykge1xuICAgIHZhciBrZXkgPSBjWzBdICsgJy8nICsgY1sxXTtcbiAgICBpZiAoIXRyYW5zZm9ybUludkNhY2hlW2tleV0pIHtcbiAgICAgIHRyYW5zZm9ybUludkNhY2hlW2tleV0gPSB0cmFuc2Zvcm1JbnYoYyk7XG4gICAgfVxuICAgIHJldHVybiB0cmFuc2Zvcm1JbnZDYWNoZVtrZXldO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7b2wuRXh0ZW50fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdGhpcy5tYXhTb3VyY2VFeHRlbnRfID0gbWF4U291cmNlRXh0ZW50O1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdGhpcy5lcnJvclRocmVzaG9sZFNxdWFyZWRfID0gZXJyb3JUaHJlc2hvbGQgKiBlcnJvclRocmVzaG9sZDtcblxuICAvKipcbiAgICogQHR5cGUge0FycmF5LjxvbC5SZXByb2pUcmlhbmdsZT59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB0aGlzLnRyaWFuZ2xlc18gPSBbXTtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgdGhlIHRyaWFuZ3VsYXRpb24gY3Jvc3NlcyBlZGdlIG9mIHRoZSBzb3VyY2UgcHJvamVjdGlvbi5cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB0aGlzLndyYXBzWEluU291cmNlXyA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHRoaXMuY2FuV3JhcFhJblNvdXJjZV8gPSB0aGlzLnNvdXJjZVByb2pfLmNhbldyYXBYKCkgJiZcbiAgICAgICEhbWF4U291cmNlRXh0ZW50ICYmXG4gICAgICAhIXRoaXMuc291cmNlUHJval8uZ2V0RXh0ZW50KCkgJiZcbiAgICAgIChfb2xfZXh0ZW50Xy5nZXRXaWR0aChtYXhTb3VyY2VFeHRlbnQpID09XG4gICAgICAgX29sX2V4dGVudF8uZ2V0V2lkdGgodGhpcy5zb3VyY2VQcm9qXy5nZXRFeHRlbnQoKSkpO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7P251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHRoaXMuc291cmNlV29ybGRXaWR0aF8gPSB0aGlzLnNvdXJjZVByb2pfLmdldEV4dGVudCgpID9cbiAgICBfb2xfZXh0ZW50Xy5nZXRXaWR0aCh0aGlzLnNvdXJjZVByb2pfLmdldEV4dGVudCgpKSA6IG51bGw7XG5cbiAgLyoqXG4gICAqIEB0eXBlIHs/bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdGhpcy50YXJnZXRXb3JsZFdpZHRoXyA9IHRoaXMudGFyZ2V0UHJval8uZ2V0RXh0ZW50KCkgP1xuICAgIF9vbF9leHRlbnRfLmdldFdpZHRoKHRoaXMudGFyZ2V0UHJval8uZ2V0RXh0ZW50KCkpIDogbnVsbDtcblxuICB2YXIgZGVzdGluYXRpb25Ub3BMZWZ0ID0gX29sX2V4dGVudF8uZ2V0VG9wTGVmdCh0YXJnZXRFeHRlbnQpO1xuICB2YXIgZGVzdGluYXRpb25Ub3BSaWdodCA9IF9vbF9leHRlbnRfLmdldFRvcFJpZ2h0KHRhcmdldEV4dGVudCk7XG4gIHZhciBkZXN0aW5hdGlvbkJvdHRvbVJpZ2h0ID0gX29sX2V4dGVudF8uZ2V0Qm90dG9tUmlnaHQodGFyZ2V0RXh0ZW50KTtcbiAgdmFyIGRlc3RpbmF0aW9uQm90dG9tTGVmdCA9IF9vbF9leHRlbnRfLmdldEJvdHRvbUxlZnQodGFyZ2V0RXh0ZW50KTtcbiAgdmFyIHNvdXJjZVRvcExlZnQgPSB0aGlzLnRyYW5zZm9ybUludl8oZGVzdGluYXRpb25Ub3BMZWZ0KTtcbiAgdmFyIHNvdXJjZVRvcFJpZ2h0ID0gdGhpcy50cmFuc2Zvcm1JbnZfKGRlc3RpbmF0aW9uVG9wUmlnaHQpO1xuICB2YXIgc291cmNlQm90dG9tUmlnaHQgPSB0aGlzLnRyYW5zZm9ybUludl8oZGVzdGluYXRpb25Cb3R0b21SaWdodCk7XG4gIHZhciBzb3VyY2VCb3R0b21MZWZ0ID0gdGhpcy50cmFuc2Zvcm1JbnZfKGRlc3RpbmF0aW9uQm90dG9tTGVmdCk7XG5cbiAgdGhpcy5hZGRRdWFkXyhcbiAgICAgIGRlc3RpbmF0aW9uVG9wTGVmdCwgZGVzdGluYXRpb25Ub3BSaWdodCxcbiAgICAgIGRlc3RpbmF0aW9uQm90dG9tUmlnaHQsIGRlc3RpbmF0aW9uQm90dG9tTGVmdCxcbiAgICAgIHNvdXJjZVRvcExlZnQsIHNvdXJjZVRvcFJpZ2h0LCBzb3VyY2VCb3R0b21SaWdodCwgc291cmNlQm90dG9tTGVmdCxcbiAgICAgIF9vbF8uUkFTVEVSX1JFUFJPSkVDVElPTl9NQVhfU1VCRElWSVNJT04pO1xuXG4gIGlmICh0aGlzLndyYXBzWEluU291cmNlXykge1xuICAgIHZhciBsZWZ0Qm91bmQgPSBJbmZpbml0eTtcbiAgICB0aGlzLnRyaWFuZ2xlc18uZm9yRWFjaChmdW5jdGlvbih0cmlhbmdsZSwgaSwgYXJyKSB7XG4gICAgICBsZWZ0Qm91bmQgPSBNYXRoLm1pbihsZWZ0Qm91bmQsXG4gICAgICAgICAgdHJpYW5nbGUuc291cmNlWzBdWzBdLCB0cmlhbmdsZS5zb3VyY2VbMV1bMF0sIHRyaWFuZ2xlLnNvdXJjZVsyXVswXSk7XG4gICAgfSk7XG5cbiAgICAvLyBTaGlmdCB0cmlhbmdsZXMgdG8gYmUgYXMgY2xvc2UgdG8gYGxlZnRCb3VuZGAgYXMgcG9zc2libGVcbiAgICAvLyAoaWYgdGhlIGRpc3RhbmNlIGlzIG1vcmUgdGhhbiBgd29ybGRXaWR0aCAvIDJgIGl0IGNhbiBiZSBjbG9zZXIuXG4gICAgdGhpcy50cmlhbmdsZXNfLmZvckVhY2goZnVuY3Rpb24odHJpYW5nbGUpIHtcbiAgICAgIGlmIChNYXRoLm1heCh0cmlhbmdsZS5zb3VyY2VbMF1bMF0sIHRyaWFuZ2xlLnNvdXJjZVsxXVswXSxcbiAgICAgICAgICB0cmlhbmdsZS5zb3VyY2VbMl1bMF0pIC0gbGVmdEJvdW5kID4gdGhpcy5zb3VyY2VXb3JsZFdpZHRoXyAvIDIpIHtcbiAgICAgICAgdmFyIG5ld1RyaWFuZ2xlID0gW1t0cmlhbmdsZS5zb3VyY2VbMF1bMF0sIHRyaWFuZ2xlLnNvdXJjZVswXVsxXV0sXG4gICAgICAgICAgW3RyaWFuZ2xlLnNvdXJjZVsxXVswXSwgdHJpYW5nbGUuc291cmNlWzFdWzFdXSxcbiAgICAgICAgICBbdHJpYW5nbGUuc291cmNlWzJdWzBdLCB0cmlhbmdsZS5zb3VyY2VbMl1bMV1dXTtcbiAgICAgICAgaWYgKChuZXdUcmlhbmdsZVswXVswXSAtIGxlZnRCb3VuZCkgPiB0aGlzLnNvdXJjZVdvcmxkV2lkdGhfIC8gMikge1xuICAgICAgICAgIG5ld1RyaWFuZ2xlWzBdWzBdIC09IHRoaXMuc291cmNlV29ybGRXaWR0aF87XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChuZXdUcmlhbmdsZVsxXVswXSAtIGxlZnRCb3VuZCkgPiB0aGlzLnNvdXJjZVdvcmxkV2lkdGhfIC8gMikge1xuICAgICAgICAgIG5ld1RyaWFuZ2xlWzFdWzBdIC09IHRoaXMuc291cmNlV29ybGRXaWR0aF87XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChuZXdUcmlhbmdsZVsyXVswXSAtIGxlZnRCb3VuZCkgPiB0aGlzLnNvdXJjZVdvcmxkV2lkdGhfIC8gMikge1xuICAgICAgICAgIG5ld1RyaWFuZ2xlWzJdWzBdIC09IHRoaXMuc291cmNlV29ybGRXaWR0aF87XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSYXJlbHkgKGlmIHRoZSBleHRlbnQgY29udGFpbnMgYm90aCB0aGUgZGF0ZWxpbmUgYW5kIHByaW1lIG1lcmlkaWFuKVxuICAgICAgICAvLyB0aGUgc2hpZnQgY2FuIGluIHR1cm4gYnJlYWsgc29tZSB0cmlhbmdsZXMuXG4gICAgICAgIC8vIERldGVjdCB0aGlzIGhlcmUgYW5kIGRvbid0IHNoaWZ0IGluIHN1Y2ggY2FzZXMuXG4gICAgICAgIHZhciBtaW5YID0gTWF0aC5taW4oXG4gICAgICAgICAgICBuZXdUcmlhbmdsZVswXVswXSwgbmV3VHJpYW5nbGVbMV1bMF0sIG5ld1RyaWFuZ2xlWzJdWzBdKTtcbiAgICAgICAgdmFyIG1heFggPSBNYXRoLm1heChcbiAgICAgICAgICAgIG5ld1RyaWFuZ2xlWzBdWzBdLCBuZXdUcmlhbmdsZVsxXVswXSwgbmV3VHJpYW5nbGVbMl1bMF0pO1xuICAgICAgICBpZiAoKG1heFggLSBtaW5YKSA8IHRoaXMuc291cmNlV29ybGRXaWR0aF8gLyAyKSB7XG4gICAgICAgICAgdHJpYW5nbGUuc291cmNlID0gbmV3VHJpYW5nbGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfVxuXG4gIHRyYW5zZm9ybUludkNhY2hlID0ge307XG59O1xuXG5cbi8qKlxuICogQWRkcyB0cmlhbmdsZSB0byB0aGUgdHJpYW5ndWxhdGlvbi5cbiAqIEBwYXJhbSB7b2wuQ29vcmRpbmF0ZX0gYSBUaGUgdGFyZ2V0IGEgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7b2wuQ29vcmRpbmF0ZX0gYiBUaGUgdGFyZ2V0IGIgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7b2wuQ29vcmRpbmF0ZX0gYyBUaGUgdGFyZ2V0IGMgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7b2wuQ29vcmRpbmF0ZX0gYVNyYyBUaGUgc291cmNlIGEgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7b2wuQ29vcmRpbmF0ZX0gYlNyYyBUaGUgc291cmNlIGIgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7b2wuQ29vcmRpbmF0ZX0gY1NyYyBUaGUgc291cmNlIGMgY29vcmRpbmF0ZS5cbiAqIEBwcml2YXRlXG4gKi9cbl9vbF9yZXByb2pfVHJpYW5ndWxhdGlvbl8ucHJvdG90eXBlLmFkZFRyaWFuZ2xlXyA9IGZ1bmN0aW9uKGEsIGIsIGMsXG4gICAgYVNyYywgYlNyYywgY1NyYykge1xuICB0aGlzLnRyaWFuZ2xlc18ucHVzaCh7XG4gICAgc291cmNlOiBbYVNyYywgYlNyYywgY1NyY10sXG4gICAgdGFyZ2V0OiBbYSwgYiwgY11cbiAgfSk7XG59O1xuXG5cbi8qKlxuICogQWRkcyBxdWFkIChwb2ludHMgaW4gY2xvY2std2lzZSBvcmRlcikgdG8gdGhlIHRyaWFuZ3VsYXRpb25cbiAqIChhbmQgcmVwcm9qZWN0cyB0aGUgdmVydGljZXMpIGlmIHZhbGlkLlxuICogUGVyZm9ybXMgcXVhZCBzdWJkaXZpc2lvbiBpZiBuZWVkZWQgdG8gaW5jcmVhc2UgcHJlY2lzaW9uLlxuICpcbiAqIEBwYXJhbSB7b2wuQ29vcmRpbmF0ZX0gYSBUaGUgdGFyZ2V0IGEgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7b2wuQ29vcmRpbmF0ZX0gYiBUaGUgdGFyZ2V0IGIgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7b2wuQ29vcmRpbmF0ZX0gYyBUaGUgdGFyZ2V0IGMgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7b2wuQ29vcmRpbmF0ZX0gZCBUaGUgdGFyZ2V0IGQgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7b2wuQ29vcmRpbmF0ZX0gYVNyYyBUaGUgc291cmNlIGEgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7b2wuQ29vcmRpbmF0ZX0gYlNyYyBUaGUgc291cmNlIGIgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7b2wuQ29vcmRpbmF0ZX0gY1NyYyBUaGUgc291cmNlIGMgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7b2wuQ29vcmRpbmF0ZX0gZFNyYyBUaGUgc291cmNlIGQgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhTdWJkaXZpc2lvbiBNYXhpbWFsIGFsbG93ZWQgc3ViZGl2aXNpb24gb2YgdGhlIHF1YWQuXG4gKiBAcHJpdmF0ZVxuICovXG5fb2xfcmVwcm9qX1RyaWFuZ3VsYXRpb25fLnByb3RvdHlwZS5hZGRRdWFkXyA9IGZ1bmN0aW9uKGEsIGIsIGMsIGQsXG4gICAgYVNyYywgYlNyYywgY1NyYywgZFNyYywgbWF4U3ViZGl2aXNpb24pIHtcblxuICB2YXIgc291cmNlUXVhZEV4dGVudCA9IF9vbF9leHRlbnRfLmJvdW5kaW5nRXh0ZW50KFthU3JjLCBiU3JjLCBjU3JjLCBkU3JjXSk7XG4gIHZhciBzb3VyY2VDb3ZlcmFnZVggPSB0aGlzLnNvdXJjZVdvcmxkV2lkdGhfID9cbiAgICBfb2xfZXh0ZW50Xy5nZXRXaWR0aChzb3VyY2VRdWFkRXh0ZW50KSAvIHRoaXMuc291cmNlV29ybGRXaWR0aF8gOiBudWxsO1xuICB2YXIgc291cmNlV29ybGRXaWR0aCA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAodGhpcy5zb3VyY2VXb3JsZFdpZHRoXyk7XG5cbiAgLy8gd2hlbiB0aGUgcXVhZCBpcyB3cmFwcGVkIGluIHRoZSBzb3VyY2UgcHJvamVjdGlvblxuICAvLyBpdCBjb3ZlcnMgbW9zdCBvZiB0aGUgcHJvamVjdGlvbiBleHRlbnQsIGJ1dCBub3QgZnVsbHlcbiAgdmFyIHdyYXBzWCA9IHRoaXMuc291cmNlUHJval8uY2FuV3JhcFgoKSAmJlxuICAgICAgICAgICAgICAgc291cmNlQ292ZXJhZ2VYID4gMC41ICYmIHNvdXJjZUNvdmVyYWdlWCA8IDE7XG5cbiAgdmFyIG5lZWRzU3ViZGl2aXNpb24gPSBmYWxzZTtcblxuICBpZiAobWF4U3ViZGl2aXNpb24gPiAwKSB7XG4gICAgaWYgKHRoaXMudGFyZ2V0UHJval8uaXNHbG9iYWwoKSAmJiB0aGlzLnRhcmdldFdvcmxkV2lkdGhfKSB7XG4gICAgICB2YXIgdGFyZ2V0UXVhZEV4dGVudCA9IF9vbF9leHRlbnRfLmJvdW5kaW5nRXh0ZW50KFthLCBiLCBjLCBkXSk7XG4gICAgICB2YXIgdGFyZ2V0Q292ZXJhZ2VYID1cbiAgICAgICAgICBfb2xfZXh0ZW50Xy5nZXRXaWR0aCh0YXJnZXRRdWFkRXh0ZW50KSAvIHRoaXMudGFyZ2V0V29ybGRXaWR0aF87XG4gICAgICBuZWVkc1N1YmRpdmlzaW9uIHw9XG4gICAgICAgICAgdGFyZ2V0Q292ZXJhZ2VYID4gX29sXy5SQVNURVJfUkVQUk9KRUNUSU9OX01BWF9UUklBTkdMRV9XSURUSDtcbiAgICB9XG4gICAgaWYgKCF3cmFwc1ggJiYgdGhpcy5zb3VyY2VQcm9qXy5pc0dsb2JhbCgpICYmIHNvdXJjZUNvdmVyYWdlWCkge1xuICAgICAgbmVlZHNTdWJkaXZpc2lvbiB8PVxuICAgICAgICAgIHNvdXJjZUNvdmVyYWdlWCA+IF9vbF8uUkFTVEVSX1JFUFJPSkVDVElPTl9NQVhfVFJJQU5HTEVfV0lEVEg7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFuZWVkc1N1YmRpdmlzaW9uICYmIHRoaXMubWF4U291cmNlRXh0ZW50Xykge1xuICAgIGlmICghX29sX2V4dGVudF8uaW50ZXJzZWN0cyhzb3VyY2VRdWFkRXh0ZW50LCB0aGlzLm1heFNvdXJjZUV4dGVudF8pKSB7XG4gICAgICAvLyB3aG9sZSBxdWFkIG91dHNpZGUgc291cmNlIHByb2plY3Rpb24gZXh0ZW50IC0+IGlnbm9yZVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmICghbmVlZHNTdWJkaXZpc2lvbikge1xuICAgIGlmICghaXNGaW5pdGUoYVNyY1swXSkgfHwgIWlzRmluaXRlKGFTcmNbMV0pIHx8XG4gICAgICAgICFpc0Zpbml0ZShiU3JjWzBdKSB8fCAhaXNGaW5pdGUoYlNyY1sxXSkgfHxcbiAgICAgICAgIWlzRmluaXRlKGNTcmNbMF0pIHx8ICFpc0Zpbml0ZShjU3JjWzFdKSB8fFxuICAgICAgICAhaXNGaW5pdGUoZFNyY1swXSkgfHwgIWlzRmluaXRlKGRTcmNbMV0pKSB7XG4gICAgICBpZiAobWF4U3ViZGl2aXNpb24gPiAwKSB7XG4gICAgICAgIG5lZWRzU3ViZGl2aXNpb24gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChtYXhTdWJkaXZpc2lvbiA+IDApIHtcbiAgICBpZiAoIW5lZWRzU3ViZGl2aXNpb24pIHtcbiAgICAgIHZhciBjZW50ZXIgPSBbKGFbMF0gKyBjWzBdKSAvIDIsIChhWzFdICsgY1sxXSkgLyAyXTtcbiAgICAgIHZhciBjZW50ZXJTcmMgPSB0aGlzLnRyYW5zZm9ybUludl8oY2VudGVyKTtcblxuICAgICAgdmFyIGR4O1xuICAgICAgaWYgKHdyYXBzWCkge1xuICAgICAgICB2YXIgY2VudGVyU3JjRXN0aW1YID1cbiAgICAgICAgICAgIChfb2xfbWF0aF8ubW9kdWxvKGFTcmNbMF0sIHNvdXJjZVdvcmxkV2lkdGgpICtcbiAgICAgICAgICAgICBfb2xfbWF0aF8ubW9kdWxvKGNTcmNbMF0sIHNvdXJjZVdvcmxkV2lkdGgpKSAvIDI7XG4gICAgICAgIGR4ID0gY2VudGVyU3JjRXN0aW1YIC1cbiAgICAgICAgICAgIF9vbF9tYXRoXy5tb2R1bG8oY2VudGVyU3JjWzBdLCBzb3VyY2VXb3JsZFdpZHRoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGR4ID0gKGFTcmNbMF0gKyBjU3JjWzBdKSAvIDIgLSBjZW50ZXJTcmNbMF07XG4gICAgICB9XG4gICAgICB2YXIgZHkgPSAoYVNyY1sxXSArIGNTcmNbMV0pIC8gMiAtIGNlbnRlclNyY1sxXTtcbiAgICAgIHZhciBjZW50ZXJTcmNFcnJvclNxdWFyZWQgPSBkeCAqIGR4ICsgZHkgKiBkeTtcbiAgICAgIG5lZWRzU3ViZGl2aXNpb24gPSBjZW50ZXJTcmNFcnJvclNxdWFyZWQgPiB0aGlzLmVycm9yVGhyZXNob2xkU3F1YXJlZF87XG4gICAgfVxuICAgIGlmIChuZWVkc1N1YmRpdmlzaW9uKSB7XG4gICAgICBpZiAoTWF0aC5hYnMoYVswXSAtIGNbMF0pIDw9IE1hdGguYWJzKGFbMV0gLSBjWzFdKSkge1xuICAgICAgICAvLyBzcGxpdCBob3Jpem9udGFsbHkgKHRvcCAmIGJvdHRvbSlcbiAgICAgICAgdmFyIGJjID0gWyhiWzBdICsgY1swXSkgLyAyLCAoYlsxXSArIGNbMV0pIC8gMl07XG4gICAgICAgIHZhciBiY1NyYyA9IHRoaXMudHJhbnNmb3JtSW52XyhiYyk7XG4gICAgICAgIHZhciBkYSA9IFsoZFswXSArIGFbMF0pIC8gMiwgKGRbMV0gKyBhWzFdKSAvIDJdO1xuICAgICAgICB2YXIgZGFTcmMgPSB0aGlzLnRyYW5zZm9ybUludl8oZGEpO1xuXG4gICAgICAgIHRoaXMuYWRkUXVhZF8oXG4gICAgICAgICAgICBhLCBiLCBiYywgZGEsIGFTcmMsIGJTcmMsIGJjU3JjLCBkYVNyYywgbWF4U3ViZGl2aXNpb24gLSAxKTtcbiAgICAgICAgdGhpcy5hZGRRdWFkXyhcbiAgICAgICAgICAgIGRhLCBiYywgYywgZCwgZGFTcmMsIGJjU3JjLCBjU3JjLCBkU3JjLCBtYXhTdWJkaXZpc2lvbiAtIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gc3BsaXQgdmVydGljYWxseSAobGVmdCAmIHJpZ2h0KVxuICAgICAgICB2YXIgYWIgPSBbKGFbMF0gKyBiWzBdKSAvIDIsIChhWzFdICsgYlsxXSkgLyAyXTtcbiAgICAgICAgdmFyIGFiU3JjID0gdGhpcy50cmFuc2Zvcm1JbnZfKGFiKTtcbiAgICAgICAgdmFyIGNkID0gWyhjWzBdICsgZFswXSkgLyAyLCAoY1sxXSArIGRbMV0pIC8gMl07XG4gICAgICAgIHZhciBjZFNyYyA9IHRoaXMudHJhbnNmb3JtSW52XyhjZCk7XG5cbiAgICAgICAgdGhpcy5hZGRRdWFkXyhcbiAgICAgICAgICAgIGEsIGFiLCBjZCwgZCwgYVNyYywgYWJTcmMsIGNkU3JjLCBkU3JjLCBtYXhTdWJkaXZpc2lvbiAtIDEpO1xuICAgICAgICB0aGlzLmFkZFF1YWRfKFxuICAgICAgICAgICAgYWIsIGIsIGMsIGNkLCBhYlNyYywgYlNyYywgY1NyYywgY2RTcmMsIG1heFN1YmRpdmlzaW9uIC0gMSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKHdyYXBzWCkge1xuICAgIGlmICghdGhpcy5jYW5XcmFwWEluU291cmNlXykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLndyYXBzWEluU291cmNlXyA9IHRydWU7XG4gIH1cblxuICB0aGlzLmFkZFRyaWFuZ2xlXyhhLCBjLCBkLCBhU3JjLCBjU3JjLCBkU3JjKTtcbiAgdGhpcy5hZGRUcmlhbmdsZV8oYSwgYiwgYywgYVNyYywgYlNyYywgY1NyYyk7XG59O1xuXG5cbi8qKlxuICogQ2FsY3VsYXRlcyBleHRlbnQgb2YgdGhlICdzb3VyY2UnIGNvb3JkaW5hdGVzIGZyb20gYWxsIHRoZSB0cmlhbmdsZXMuXG4gKlxuICogQHJldHVybiB7b2wuRXh0ZW50fSBDYWxjdWxhdGVkIGV4dGVudC5cbiAqL1xuX29sX3JlcHJval9Ucmlhbmd1bGF0aW9uXy5wcm90b3R5cGUuY2FsY3VsYXRlU291cmNlRXh0ZW50ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBleHRlbnQgPSBfb2xfZXh0ZW50Xy5jcmVhdGVFbXB0eSgpO1xuXG4gIHRoaXMudHJpYW5nbGVzXy5mb3JFYWNoKGZ1bmN0aW9uKHRyaWFuZ2xlLCBpLCBhcnIpIHtcbiAgICB2YXIgc3JjID0gdHJpYW5nbGUuc291cmNlO1xuICAgIF9vbF9leHRlbnRfLmV4dGVuZENvb3JkaW5hdGUoZXh0ZW50LCBzcmNbMF0pO1xuICAgIF9vbF9leHRlbnRfLmV4dGVuZENvb3JkaW5hdGUoZXh0ZW50LCBzcmNbMV0pO1xuICAgIF9vbF9leHRlbnRfLmV4dGVuZENvb3JkaW5hdGUoZXh0ZW50LCBzcmNbMl0pO1xuICB9KTtcblxuICByZXR1cm4gZXh0ZW50O1xufTtcblxuXG4vKipcbiAqIEByZXR1cm4ge0FycmF5LjxvbC5SZXByb2pUcmlhbmdsZT59IEFycmF5IG9mIHRoZSBjYWxjdWxhdGVkIHRyaWFuZ2xlcy5cbiAqL1xuX29sX3JlcHJval9Ucmlhbmd1bGF0aW9uXy5wcm90b3R5cGUuZ2V0VHJpYW5nbGVzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnRyaWFuZ2xlc187XG59O1xuZXhwb3J0IGRlZmF1bHQgX29sX3JlcHJval9Ucmlhbmd1bGF0aW9uXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL3JlcHJvai90cmlhbmd1bGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgX29sXyBmcm9tICcuLi9pbmRleC5qcyc7XG5pbXBvcnQgX29sX0F0dHJpYnV0aW9uXyBmcm9tICcuLi9hdHRyaWJ1dGlvbi5qcyc7XG5pbXBvcnQgX29sX09iamVjdF8gZnJvbSAnLi4vb2JqZWN0LmpzJztcbmltcG9ydCBfb2xfcHJval8gZnJvbSAnLi4vcHJvai5qcyc7XG5pbXBvcnQgX29sX3NvdXJjZV9TdGF0ZV8gZnJvbSAnLi4vc291cmNlL3N0YXRlLmpzJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBBYnN0cmFjdCBiYXNlIGNsYXNzOyBub3JtYWxseSBvbmx5IHVzZWQgZm9yIGNyZWF0aW5nIHN1YmNsYXNzZXMgYW5kIG5vdFxuICogaW5zdGFudGlhdGVkIGluIGFwcHMuXG4gKiBCYXNlIGNsYXNzIGZvciB7QGxpbmsgb2wubGF5ZXIuTGF5ZXJ9IHNvdXJjZXMuXG4gKlxuICogQSBnZW5lcmljIGBjaGFuZ2VgIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBzdGF0ZSBvZiB0aGUgc291cmNlIGNoYW5nZXMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAYWJzdHJhY3RcbiAqIEBleHRlbmRzIHtvbC5PYmplY3R9XG4gKiBAcGFyYW0ge29sLlNvdXJjZVNvdXJjZU9wdGlvbnN9IG9wdGlvbnMgU291cmNlIG9wdGlvbnMuXG4gKiBAYXBpXG4gKi9cbnZhciBfb2xfc291cmNlX1NvdXJjZV8gPSBmdW5jdGlvbihvcHRpb25zKSB7XG5cbiAgX29sX09iamVjdF8uY2FsbCh0aGlzKTtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge29sLnByb2ouUHJvamVjdGlvbn1cbiAgICovXG4gIHRoaXMucHJvamVjdGlvbl8gPSBfb2xfcHJval8uZ2V0KG9wdGlvbnMucHJvamVjdGlvbik7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtBcnJheS48b2wuQXR0cmlidXRpb24+fVxuICAgKi9cbiAgdGhpcy5hdHRyaWJ1dGlvbnNfID0gbnVsbDtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUgez9vbC5BdHRyaWJ1dGlvbjJ9XG4gICAqL1xuICB0aGlzLmF0dHJpYnV0aW9uczJfID0gdGhpcy5hZGFwdEF0dHJpYnV0aW9uc18ob3B0aW9ucy5hdHRyaWJ1dGlvbnMpO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7c3RyaW5nfG9seC5Mb2dvT3B0aW9uc3x1bmRlZmluZWR9XG4gICAqL1xuICB0aGlzLmxvZ29fID0gb3B0aW9ucy5sb2dvO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7b2wuc291cmNlLlN0YXRlfVxuICAgKi9cbiAgdGhpcy5zdGF0ZV8gPSBvcHRpb25zLnN0YXRlICE9PSB1bmRlZmluZWQgP1xuICAgIG9wdGlvbnMuc3RhdGUgOiBfb2xfc291cmNlX1N0YXRlXy5SRUFEWTtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICB0aGlzLndyYXBYXyA9IG9wdGlvbnMud3JhcFggIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMud3JhcFggOiBmYWxzZTtcblxufTtcblxuX29sXy5pbmhlcml0cyhfb2xfc291cmNlX1NvdXJjZV8sIF9vbF9PYmplY3RfKTtcblxuLyoqXG4gKiBUdXJucyB0aGUgYXR0cmlidXRpb25zIG9wdGlvbiBpbnRvIGFuIGF0dHJpYnV0aW9ucyBmdW5jdGlvbi5cbiAqIEBzdXBwcmVzcyB7ZGVwcmVjYXRlZH1cbiAqIEBwYXJhbSB7b2wuQXR0cmlidXRpb25MaWtlfHVuZGVmaW5lZH0gYXR0cmlidXRpb25MaWtlIFRoZSBhdHRyaWJ1dGlvbiBvcHRpb24uXG4gKiBAcmV0dXJuIHs/b2wuQXR0cmlidXRpb24yfSBBbiBhdHRyaWJ1dGlvbiBmdW5jdGlvbiAob3IgbnVsbCkuXG4gKi9cbl9vbF9zb3VyY2VfU291cmNlXy5wcm90b3R5cGUuYWRhcHRBdHRyaWJ1dGlvbnNfID0gZnVuY3Rpb24oYXR0cmlidXRpb25MaWtlKSB7XG4gIGlmICghYXR0cmlidXRpb25MaWtlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKGF0dHJpYnV0aW9uTGlrZSBpbnN0YW5jZW9mIF9vbF9BdHRyaWJ1dGlvbl8pIHtcblxuICAgIC8vIFRPRE86IHJlbW92ZSBhdHRyaWJ1dGlvbnNfIGluIG5leHQgbWFqb3IgcmVsZWFzZVxuICAgIHRoaXMuYXR0cmlidXRpb25zXyA9IFthdHRyaWJ1dGlvbkxpa2VdO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGZyYW1lU3RhdGUpIHtcbiAgICAgIHJldHVybiBbYXR0cmlidXRpb25MaWtlLmdldEhUTUwoKV07XG4gICAgfTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheShhdHRyaWJ1dGlvbkxpa2UpKSB7XG4gICAgaWYgKGF0dHJpYnV0aW9uTGlrZVswXSBpbnN0YW5jZW9mIF9vbF9BdHRyaWJ1dGlvbl8pIHtcblxuICAgICAgLy8gVE9ETzogcmVtb3ZlIGF0dHJpYnV0aW9uc18gaW4gbmV4dCBtYWpvciByZWxlYXNlXG4gICAgICB0aGlzLmF0dHJpYnV0aW9uc18gPSBhdHRyaWJ1dGlvbkxpa2U7XG5cbiAgICAgIHZhciBhdHRyaWJ1dGlvbnMgPSBhdHRyaWJ1dGlvbkxpa2UubWFwKGZ1bmN0aW9uKGF0dHJpYnV0aW9uKSB7XG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGlvbi5nZXRIVE1MKCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmdW5jdGlvbihmcmFtZVN0YXRlKSB7XG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGlvbnM7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIFRPRE86IHJlbW92ZSBhdHRyaWJ1dGlvbnNfIGluIG5leHQgbWFqb3IgcmVsZWFzZVxuICAgIHRoaXMuYXR0cmlidXRpb25zXyA9IGF0dHJpYnV0aW9uTGlrZS5tYXAoZnVuY3Rpb24oYXR0cmlidXRpb24pIHtcbiAgICAgIHJldHVybiBuZXcgX29sX0F0dHJpYnV0aW9uXyh7aHRtbDogYXR0cmlidXRpb259KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmdW5jdGlvbihmcmFtZVN0YXRlKSB7XG4gICAgICByZXR1cm4gYXR0cmlidXRpb25MaWtlO1xuICAgIH07XG4gIH1cblxuICBpZiAodHlwZW9mIGF0dHJpYnV0aW9uTGlrZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBhdHRyaWJ1dGlvbkxpa2U7XG4gIH1cblxuICAvLyBUT0RPOiByZW1vdmUgYXR0cmlidXRpb25zXyBpbiBuZXh0IG1ham9yIHJlbGVhc2VcbiAgdGhpcy5hdHRyaWJ1dGlvbnNfID0gW1xuICAgIG5ldyBfb2xfQXR0cmlidXRpb25fKHtodG1sOiBhdHRyaWJ1dGlvbkxpa2V9KVxuICBdO1xuXG4gIHJldHVybiBmdW5jdGlvbihmcmFtZVN0YXRlKSB7XG4gICAgcmV0dXJuIFthdHRyaWJ1dGlvbkxpa2VdO1xuICB9O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge29sLkNvb3JkaW5hdGV9IGNvb3JkaW5hdGUgQ29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSByZXNvbHV0aW9uIFJlc29sdXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gcm90YXRpb24gUm90YXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gaGl0VG9sZXJhbmNlIEhpdCB0b2xlcmFuY2UgaW4gcGl4ZWxzLlxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgYm9vbGVhbj59IHNraXBwZWRGZWF0dXJlVWlkcyBTa2lwcGVkIGZlYXR1cmUgdWlkcy5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKG9sLkZlYXR1cmV8b2wucmVuZGVyLkZlYXR1cmUpKTogVH0gY2FsbGJhY2sgRmVhdHVyZVxuICogICAgIGNhbGxiYWNrLlxuICogQHJldHVybiB7VHx1bmRlZmluZWR9IENhbGxiYWNrIHJlc3VsdC5cbiAqIEB0ZW1wbGF0ZSBUXG4gKi9cbl9vbF9zb3VyY2VfU291cmNlXy5wcm90b3R5cGUuZm9yRWFjaEZlYXR1cmVBdENvb3JkaW5hdGUgPSBfb2xfLm51bGxGdW5jdGlvbjtcblxuXG4vKipcbiAqIEdldCB0aGUgYXR0cmlidXRpb25zIG9mIHRoZSBzb3VyY2UuXG4gKiBAcmV0dXJuIHtBcnJheS48b2wuQXR0cmlidXRpb24+fSBBdHRyaWJ1dGlvbnMuXG4gKiBAYXBpXG4gKi9cbl9vbF9zb3VyY2VfU291cmNlXy5wcm90b3R5cGUuZ2V0QXR0cmlidXRpb25zID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmF0dHJpYnV0aW9uc187XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBhdHRyaWJ1dGlvbiBmdW5jdGlvbiBmb3IgdGhlIHNvdXJjZS5cbiAqIEByZXR1cm4gez9vbC5BdHRyaWJ1dGlvbjJ9IEF0dHJpYnV0aW9uIGZ1bmN0aW9uLlxuICovXG5fb2xfc291cmNlX1NvdXJjZV8ucHJvdG90eXBlLmdldEF0dHJpYnV0aW9uczIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuYXR0cmlidXRpb25zMl87XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBsb2dvIG9mIHRoZSBzb3VyY2UuXG4gKiBAcmV0dXJuIHtzdHJpbmd8b2x4LkxvZ29PcHRpb25zfHVuZGVmaW5lZH0gTG9nby5cbiAqIEBhcGlcbiAqL1xuX29sX3NvdXJjZV9Tb3VyY2VfLnByb3RvdHlwZS5nZXRMb2dvID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmxvZ29fO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgcHJvamVjdGlvbiBvZiB0aGUgc291cmNlLlxuICogQHJldHVybiB7b2wucHJvai5Qcm9qZWN0aW9ufSBQcm9qZWN0aW9uLlxuICogQGFwaVxuICovXG5fb2xfc291cmNlX1NvdXJjZV8ucHJvdG90eXBlLmdldFByb2plY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucHJvamVjdGlvbl87XG59O1xuXG5cbi8qKlxuICogQGFic3RyYWN0XG4gKiBAcmV0dXJuIHtBcnJheS48bnVtYmVyPnx1bmRlZmluZWR9IFJlc29sdXRpb25zLlxuICovXG5fb2xfc291cmNlX1NvdXJjZV8ucHJvdG90eXBlLmdldFJlc29sdXRpb25zID0gZnVuY3Rpb24oKSB7fTtcblxuXG4vKipcbiAqIEdldCB0aGUgc3RhdGUgb2YgdGhlIHNvdXJjZSwgc2VlIHtAbGluayBvbC5zb3VyY2UuU3RhdGV9IGZvciBwb3NzaWJsZSBzdGF0ZXMuXG4gKiBAcmV0dXJuIHtvbC5zb3VyY2UuU3RhdGV9IFN0YXRlLlxuICogQGFwaVxuICovXG5fb2xfc291cmNlX1NvdXJjZV8ucHJvdG90eXBlLmdldFN0YXRlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnN0YXRlXztcbn07XG5cblxuLyoqXG4gKiBAcmV0dXJuIHtib29sZWFufHVuZGVmaW5lZH0gV3JhcCBYLlxuICovXG5fb2xfc291cmNlX1NvdXJjZV8ucHJvdG90eXBlLmdldFdyYXBYID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLndyYXBYXztcbn07XG5cblxuLyoqXG4gKiBSZWZyZXNoZXMgdGhlIHNvdXJjZSBhbmQgZmluYWxseSBkaXNwYXRjaGVzIGEgJ2NoYW5nZScgZXZlbnQuXG4gKiBAYXBpXG4gKi9cbl9vbF9zb3VyY2VfU291cmNlXy5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmNoYW5nZWQoKTtcbn07XG5cblxuLyoqXG4gKiBTZXQgdGhlIGF0dHJpYnV0aW9ucyBvZiB0aGUgc291cmNlLlxuICogQHBhcmFtIHtvbC5BdHRyaWJ1dGlvbkxpa2V8dW5kZWZpbmVkfSBhdHRyaWJ1dGlvbnMgQXR0cmlidXRpb25zLlxuICogICAgIENhbiBiZSBwYXNzZWQgYXMgYHN0cmluZ2AsIGBBcnJheTxzdHJpbmc+YCwgYHtAbGluayBvbC5BdHRyaWJ1dGlvbjJ9YCxcbiAqICAgICBvciBgdW5kZWZpbmVkYC5cbiAqIEBhcGlcbiAqL1xuX29sX3NvdXJjZV9Tb3VyY2VfLnByb3RvdHlwZS5zZXRBdHRyaWJ1dGlvbnMgPSBmdW5jdGlvbihhdHRyaWJ1dGlvbnMpIHtcbiAgdGhpcy5hdHRyaWJ1dGlvbnMyXyA9IHRoaXMuYWRhcHRBdHRyaWJ1dGlvbnNfKGF0dHJpYnV0aW9ucyk7XG4gIHRoaXMuY2hhbmdlZCgpO1xufTtcblxuXG4vKipcbiAqIFNldCB0aGUgbG9nbyBvZiB0aGUgc291cmNlLlxuICogQHBhcmFtIHtzdHJpbmd8b2x4LkxvZ29PcHRpb25zfHVuZGVmaW5lZH0gbG9nbyBMb2dvLlxuICovXG5fb2xfc291cmNlX1NvdXJjZV8ucHJvdG90eXBlLnNldExvZ28gPSBmdW5jdGlvbihsb2dvKSB7XG4gIHRoaXMubG9nb18gPSBsb2dvO1xufTtcblxuXG4vKipcbiAqIFNldCB0aGUgc3RhdGUgb2YgdGhlIHNvdXJjZS5cbiAqIEBwYXJhbSB7b2wuc291cmNlLlN0YXRlfSBzdGF0ZSBTdGF0ZS5cbiAqIEBwcm90ZWN0ZWRcbiAqL1xuX29sX3NvdXJjZV9Tb3VyY2VfLnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIHRoaXMuc3RhdGVfID0gc3RhdGU7XG4gIHRoaXMuY2hhbmdlZCgpO1xufTtcbmV4cG9ydCBkZWZhdWx0IF9vbF9zb3VyY2VfU291cmNlXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL3NvdXJjZS9zb3VyY2UuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQSByZXByZXNlbnRhdGlvbiBvZiBhIGNvbnRpZ3VvdXMgYmxvY2sgb2YgdGlsZXMuICBBIHRpbGUgcmFuZ2UgaXMgc3BlY2lmaWVkXG4gKiBieSBpdHMgbWluL21heCB0aWxlIGNvb3JkaW5hdGVzIGFuZCBpcyBpbmNsdXNpdmUgb2YgY29vcmRpbmF0ZXMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge251bWJlcn0gbWluWCBNaW5pbXVtIFguXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4WCBNYXhpbXVtIFguXG4gKiBAcGFyYW0ge251bWJlcn0gbWluWSBNaW5pbXVtIFkuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4WSBNYXhpbXVtIFkuXG4gKiBAc3RydWN0XG4gKi9cbnZhciBfb2xfVGlsZVJhbmdlXyA9IGZ1bmN0aW9uKG1pblgsIG1heFgsIG1pblksIG1heFkpIHtcblxuICAvKipcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIHRoaXMubWluWCA9IG1pblg7XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICB0aGlzLm1heFggPSBtYXhYO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgdGhpcy5taW5ZID0gbWluWTtcblxuICAvKipcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIHRoaXMubWF4WSA9IG1heFk7XG5cbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gbWluWCBNaW5pbXVtIFguXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4WCBNYXhpbXVtIFguXG4gKiBAcGFyYW0ge251bWJlcn0gbWluWSBNaW5pbXVtIFkuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4WSBNYXhpbXVtIFkuXG4gKiBAcGFyYW0ge29sLlRpbGVSYW5nZXx1bmRlZmluZWR9IHRpbGVSYW5nZSBUaWxlUmFuZ2UuXG4gKiBAcmV0dXJuIHtvbC5UaWxlUmFuZ2V9IFRpbGUgcmFuZ2UuXG4gKi9cbl9vbF9UaWxlUmFuZ2VfLmNyZWF0ZU9yVXBkYXRlID0gZnVuY3Rpb24obWluWCwgbWF4WCwgbWluWSwgbWF4WSwgdGlsZVJhbmdlKSB7XG4gIGlmICh0aWxlUmFuZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHRpbGVSYW5nZS5taW5YID0gbWluWDtcbiAgICB0aWxlUmFuZ2UubWF4WCA9IG1heFg7XG4gICAgdGlsZVJhbmdlLm1pblkgPSBtaW5ZO1xuICAgIHRpbGVSYW5nZS5tYXhZID0gbWF4WTtcbiAgICByZXR1cm4gdGlsZVJhbmdlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgX29sX1RpbGVSYW5nZV8obWluWCwgbWF4WCwgbWluWSwgbWF4WSk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge29sLlRpbGVDb29yZH0gdGlsZUNvb3JkIFRpbGUgY29vcmRpbmF0ZS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IENvbnRhaW5zIHRpbGUgY29vcmRpbmF0ZS5cbiAqL1xuX29sX1RpbGVSYW5nZV8ucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24odGlsZUNvb3JkKSB7XG4gIHJldHVybiB0aGlzLmNvbnRhaW5zWFkodGlsZUNvb3JkWzFdLCB0aWxlQ29vcmRbMl0pO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wuVGlsZVJhbmdlfSB0aWxlUmFuZ2UgVGlsZSByYW5nZS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IENvbnRhaW5zLlxuICovXG5fb2xfVGlsZVJhbmdlXy5wcm90b3R5cGUuY29udGFpbnNUaWxlUmFuZ2UgPSBmdW5jdGlvbih0aWxlUmFuZ2UpIHtcbiAgcmV0dXJuIHRoaXMubWluWCA8PSB0aWxlUmFuZ2UubWluWCAmJiB0aWxlUmFuZ2UubWF4WCA8PSB0aGlzLm1heFggJiZcbiAgICAgIHRoaXMubWluWSA8PSB0aWxlUmFuZ2UubWluWSAmJiB0aWxlUmFuZ2UubWF4WSA8PSB0aGlzLm1heFk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHggVGlsZSBjb29yZGluYXRlIHguXG4gKiBAcGFyYW0ge251bWJlcn0geSBUaWxlIGNvb3JkaW5hdGUgeS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IENvbnRhaW5zIGNvb3JkaW5hdGUuXG4gKi9cbl9vbF9UaWxlUmFuZ2VfLnByb3RvdHlwZS5jb250YWluc1hZID0gZnVuY3Rpb24oeCwgeSkge1xuICByZXR1cm4gdGhpcy5taW5YIDw9IHggJiYgeCA8PSB0aGlzLm1heFggJiYgdGhpcy5taW5ZIDw9IHkgJiYgeSA8PSB0aGlzLm1heFk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtvbC5UaWxlUmFuZ2V9IHRpbGVSYW5nZSBUaWxlIHJhbmdlLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRXF1YWxzLlxuICovXG5fb2xfVGlsZVJhbmdlXy5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24odGlsZVJhbmdlKSB7XG4gIHJldHVybiB0aGlzLm1pblggPT0gdGlsZVJhbmdlLm1pblggJiYgdGhpcy5taW5ZID09IHRpbGVSYW5nZS5taW5ZICYmXG4gICAgICB0aGlzLm1heFggPT0gdGlsZVJhbmdlLm1heFggJiYgdGhpcy5tYXhZID09IHRpbGVSYW5nZS5tYXhZO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wuVGlsZVJhbmdlfSB0aWxlUmFuZ2UgVGlsZSByYW5nZS5cbiAqL1xuX29sX1RpbGVSYW5nZV8ucHJvdG90eXBlLmV4dGVuZCA9IGZ1bmN0aW9uKHRpbGVSYW5nZSkge1xuICBpZiAodGlsZVJhbmdlLm1pblggPCB0aGlzLm1pblgpIHtcbiAgICB0aGlzLm1pblggPSB0aWxlUmFuZ2UubWluWDtcbiAgfVxuICBpZiAodGlsZVJhbmdlLm1heFggPiB0aGlzLm1heFgpIHtcbiAgICB0aGlzLm1heFggPSB0aWxlUmFuZ2UubWF4WDtcbiAgfVxuICBpZiAodGlsZVJhbmdlLm1pblkgPCB0aGlzLm1pblkpIHtcbiAgICB0aGlzLm1pblkgPSB0aWxlUmFuZ2UubWluWTtcbiAgfVxuICBpZiAodGlsZVJhbmdlLm1heFkgPiB0aGlzLm1heFkpIHtcbiAgICB0aGlzLm1heFkgPSB0aWxlUmFuZ2UubWF4WTtcbiAgfVxufTtcblxuXG4vKipcbiAqIEByZXR1cm4ge251bWJlcn0gSGVpZ2h0LlxuICovXG5fb2xfVGlsZVJhbmdlXy5wcm90b3R5cGUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLm1heFkgLSB0aGlzLm1pblkgKyAxO1xufTtcblxuXG4vKipcbiAqIEByZXR1cm4ge29sLlNpemV9IFNpemUuXG4gKi9cbl9vbF9UaWxlUmFuZ2VfLnByb3RvdHlwZS5nZXRTaXplID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBbdGhpcy5nZXRXaWR0aCgpLCB0aGlzLmdldEhlaWdodCgpXTtcbn07XG5cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFdpZHRoLlxuICovXG5fb2xfVGlsZVJhbmdlXy5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMubWF4WCAtIHRoaXMubWluWCArIDE7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtvbC5UaWxlUmFuZ2V9IHRpbGVSYW5nZSBUaWxlIHJhbmdlLlxuICogQHJldHVybiB7Ym9vbGVhbn0gSW50ZXJzZWN0cy5cbiAqL1xuX29sX1RpbGVSYW5nZV8ucHJvdG90eXBlLmludGVyc2VjdHMgPSBmdW5jdGlvbih0aWxlUmFuZ2UpIHtcbiAgcmV0dXJuIHRoaXMubWluWCA8PSB0aWxlUmFuZ2UubWF4WCAmJlxuICAgICAgdGhpcy5tYXhYID49IHRpbGVSYW5nZS5taW5YICYmXG4gICAgICB0aGlzLm1pblkgPD0gdGlsZVJhbmdlLm1heFkgJiZcbiAgICAgIHRoaXMubWF4WSA+PSB0aWxlUmFuZ2UubWluWTtcbn07XG5leHBvcnQgZGVmYXVsdCBfb2xfVGlsZVJhbmdlXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL3RpbGVyYW5nZS5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF9vbF8gZnJvbSAnLi4vaW5kZXguanMnO1xuaW1wb3J0IF9vbF9zb3VyY2VfVGlsZUltYWdlXyBmcm9tICcuLi9zb3VyY2UvdGlsZWltYWdlLmpzJztcbmltcG9ydCBfb2xfdGlsZWdyaWRfIGZyb20gJy4uL3RpbGVncmlkLmpzJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBMYXllciBzb3VyY2UgZm9yIHRpbGUgZGF0YSB3aXRoIFVSTHMgaW4gYSBzZXQgWFlaIGZvcm1hdCB0aGF0IGFyZVxuICogZGVmaW5lZCBpbiBhIFVSTCB0ZW1wbGF0ZS4gQnkgZGVmYXVsdCwgdGhpcyBmb2xsb3dzIHRoZSB3aWRlbHktdXNlZFxuICogR29vZ2xlIGdyaWQgd2hlcmUgYHhgIDAgYW5kIGB5YCAwIGFyZSBpbiB0aGUgdG9wIGxlZnQuIEdyaWRzIGxpa2VcbiAqIFRNUyB3aGVyZSBgeGAgMCBhbmQgYHlgIDAgYXJlIGluIHRoZSBib3R0b20gbGVmdCBjYW4gYmUgdXNlZCBieVxuICogdXNpbmcgdGhlIGB7LXl9YCBwbGFjZWhvbGRlciBpbiB0aGUgVVJMIHRlbXBsYXRlLCBzbyBsb25nIGFzIHRoZVxuICogc291cmNlIGRvZXMgbm90IGhhdmUgYSBjdXN0b20gdGlsZSBncmlkLiBJbiB0aGlzIGNhc2UsXG4gKiB7QGxpbmsgb2wuc291cmNlLlRpbGVJbWFnZX0gY2FuIGJlIHVzZWQgd2l0aCBhIGB0aWxlVXJsRnVuY3Rpb25gXG4gKiBzdWNoIGFzOlxuICpcbiAqICB0aWxlVXJsRnVuY3Rpb246IGZ1bmN0aW9uKGNvb3JkaW5hdGUpIHtcbiAqICAgIHJldHVybiAnaHR0cDovL21hcHNlcnZlci5jb20vJyArIGNvb3JkaW5hdGVbMF0gKyAnLycgK1xuICogICAgICAgIGNvb3JkaW5hdGVbMV0gKyAnLycgKyBjb29yZGluYXRlWzJdICsgJy5wbmcnO1xuICogICAgfVxuICpcbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBleHRlbmRzIHtvbC5zb3VyY2UuVGlsZUltYWdlfVxuICogQHBhcmFtIHtvbHguc291cmNlLlhZWk9wdGlvbnM9fSBvcHRfb3B0aW9ucyBYWVogb3B0aW9ucy5cbiAqIEBhcGlcbiAqL1xudmFyIF9vbF9zb3VyY2VfWFlaXyA9IGZ1bmN0aW9uKG9wdF9vcHRpb25zKSB7XG4gIHZhciBvcHRpb25zID0gb3B0X29wdGlvbnMgfHwge307XG4gIHZhciBwcm9qZWN0aW9uID0gb3B0aW9ucy5wcm9qZWN0aW9uICE9PSB1bmRlZmluZWQgP1xuICAgIG9wdGlvbnMucHJvamVjdGlvbiA6ICdFUFNHOjM4NTcnO1xuXG4gIHZhciB0aWxlR3JpZCA9IG9wdGlvbnMudGlsZUdyaWQgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMudGlsZUdyaWQgOlxuICAgIF9vbF90aWxlZ3JpZF8uY3JlYXRlWFlaKHtcbiAgICAgIGV4dGVudDogX29sX3RpbGVncmlkXy5leHRlbnRGcm9tUHJvamVjdGlvbihwcm9qZWN0aW9uKSxcbiAgICAgIG1heFpvb206IG9wdGlvbnMubWF4Wm9vbSxcbiAgICAgIG1pblpvb206IG9wdGlvbnMubWluWm9vbSxcbiAgICAgIHRpbGVTaXplOiBvcHRpb25zLnRpbGVTaXplXG4gICAgfSk7XG5cbiAgX29sX3NvdXJjZV9UaWxlSW1hZ2VfLmNhbGwodGhpcywge1xuICAgIGF0dHJpYnV0aW9uczogb3B0aW9ucy5hdHRyaWJ1dGlvbnMsXG4gICAgY2FjaGVTaXplOiBvcHRpb25zLmNhY2hlU2l6ZSxcbiAgICBjcm9zc09yaWdpbjogb3B0aW9ucy5jcm9zc09yaWdpbixcbiAgICBsb2dvOiBvcHRpb25zLmxvZ28sXG4gICAgb3BhcXVlOiBvcHRpb25zLm9wYXF1ZSxcbiAgICBwcm9qZWN0aW9uOiBwcm9qZWN0aW9uLFxuICAgIHJlcHJvamVjdGlvbkVycm9yVGhyZXNob2xkOiBvcHRpb25zLnJlcHJvamVjdGlvbkVycm9yVGhyZXNob2xkLFxuICAgIHRpbGVHcmlkOiB0aWxlR3JpZCxcbiAgICB0aWxlTG9hZEZ1bmN0aW9uOiBvcHRpb25zLnRpbGVMb2FkRnVuY3Rpb24sXG4gICAgdGlsZVBpeGVsUmF0aW86IG9wdGlvbnMudGlsZVBpeGVsUmF0aW8sXG4gICAgdGlsZVVybEZ1bmN0aW9uOiBvcHRpb25zLnRpbGVVcmxGdW5jdGlvbixcbiAgICB1cmw6IG9wdGlvbnMudXJsLFxuICAgIHVybHM6IG9wdGlvbnMudXJscyxcbiAgICB3cmFwWDogb3B0aW9ucy53cmFwWCAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy53cmFwWCA6IHRydWUsXG4gICAgdHJhbnNpdGlvbjogb3B0aW9ucy50cmFuc2l0aW9uXG4gIH0pO1xuXG59O1xuXG5fb2xfLmluaGVyaXRzKF9vbF9zb3VyY2VfWFlaXywgX29sX3NvdXJjZV9UaWxlSW1hZ2VfKTtcbmV4cG9ydCBkZWZhdWx0IF9vbF9zb3VyY2VfWFlaXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL3NvdXJjZS94eXouanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfb2xfIGZyb20gJy4vaW5kZXguanMnO1xuaW1wb3J0IF9vbF9UaWxlU3RhdGVfIGZyb20gJy4vdGlsZXN0YXRlLmpzJztcbmltcG9ydCBfb2xfZWFzaW5nXyBmcm9tICcuL2Vhc2luZy5qcyc7XG5pbXBvcnQgX29sX2V2ZW50c19FdmVudFRhcmdldF8gZnJvbSAnLi9ldmVudHMvZXZlbnR0YXJnZXQuanMnO1xuaW1wb3J0IF9vbF9ldmVudHNfRXZlbnRUeXBlXyBmcm9tICcuL2V2ZW50cy9ldmVudHR5cGUuanMnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIEJhc2UgY2xhc3MgZm9yIHRpbGVzLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQGFic3RyYWN0XG4gKiBAZXh0ZW5kcyB7b2wuZXZlbnRzLkV2ZW50VGFyZ2V0fVxuICogQHBhcmFtIHtvbC5UaWxlQ29vcmR9IHRpbGVDb29yZCBUaWxlIGNvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge29sLlRpbGVTdGF0ZX0gc3RhdGUgU3RhdGUuXG4gKiBAcGFyYW0ge29seC5UaWxlT3B0aW9ucz19IG9wdF9vcHRpb25zIFRpbGUgb3B0aW9ucy5cbiAqL1xudmFyIF9vbF9UaWxlXyA9IGZ1bmN0aW9uKHRpbGVDb29yZCwgc3RhdGUsIG9wdF9vcHRpb25zKSB7XG4gIF9vbF9ldmVudHNfRXZlbnRUYXJnZXRfLmNhbGwodGhpcyk7XG5cbiAgdmFyIG9wdGlvbnMgPSBvcHRfb3B0aW9ucyA/IG9wdF9vcHRpb25zIDoge307XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtvbC5UaWxlQ29vcmR9XG4gICAqL1xuICB0aGlzLnRpbGVDb29yZCA9IHRpbGVDb29yZDtcblxuICAvKipcbiAgICogQHByb3RlY3RlZFxuICAgKiBAdHlwZSB7b2wuVGlsZVN0YXRlfVxuICAgKi9cbiAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gIC8qKlxuICAgKiBBbiBcImludGVyaW1cIiB0aWxlIGZvciB0aGlzIHRpbGUuIFRoZSBpbnRlcmltIHRpbGUgbWF5IGJlIHVzZWQgd2hpbGUgdGhpc1xuICAgKiBvbmUgaXMgbG9hZGluZywgZm9yIFwic21vb3RoXCIgdHJhbnNpdGlvbnMgd2hlbiBjaGFuZ2luZyBwYXJhbXMvZGltZW5zaW9uc1xuICAgKiBvbiB0aGUgc291cmNlLlxuICAgKiBAdHlwZSB7b2wuVGlsZX1cbiAgICovXG4gIHRoaXMuaW50ZXJpbVRpbGUgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBBIGtleSBhc3NpZ25lZCB0byB0aGUgdGlsZS4gVGhpcyBpcyB1c2VkIGJ5IHRoZSB0aWxlIHNvdXJjZSB0byBkZXRlcm1pbmVcbiAgICogaWYgdGhpcyB0aWxlIGNhbiBlZmZlY3RpdmVseSBiZSB1c2VkLCBvciBpZiBhIG5ldyB0aWxlIHNob3VsZCBiZSBjcmVhdGVkXG4gICAqIGFuZCB0aGlzIG9uZSBiZSB1c2VkIGFzIGFuIGludGVyaW0gdGlsZSBmb3IgdGhpcyBuZXcgdGlsZS5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHRoaXMua2V5ID0gJyc7XG5cbiAgLyoqXG4gICAqIFRoZSBkdXJhdGlvbiBmb3IgdGhlIG9wYWNpdHkgdHJhbnNpdGlvbi5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIHRoaXMudHJhbnNpdGlvbl8gPSBvcHRpb25zLnRyYW5zaXRpb24gPT09IHVuZGVmaW5lZCA/XG4gICAgMjUwIDogb3B0aW9ucy50cmFuc2l0aW9uO1xuXG4gIC8qKlxuICAgKiBMb29rdXAgb2Ygc3RhcnQgdGltZXMgZm9yIHJlbmRlcmluZyB0cmFuc2l0aW9ucy4gIElmIHRoZSBzdGFydCB0aW1lIGlzXG4gICAqIGVxdWFsIHRvIC0xLCB0aGUgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZS5cbiAgICogQHR5cGUge09iamVjdC48bnVtYmVyLCBudW1iZXI+fVxuICAgKi9cbiAgdGhpcy50cmFuc2l0aW9uU3RhcnRzXyA9IHt9O1xuXG59O1xuXG5fb2xfLmluaGVyaXRzKF9vbF9UaWxlXywgX29sX2V2ZW50c19FdmVudFRhcmdldF8pO1xuXG5cbi8qKlxuICogQHByb3RlY3RlZFxuICovXG5fb2xfVGlsZV8ucHJvdG90eXBlLmNoYW5nZWQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KF9vbF9ldmVudHNfRXZlbnRUeXBlXy5DSEFOR0UpO1xufTtcblxuXG4vKipcbiAqIEByZXR1cm4ge3N0cmluZ30gS2V5LlxuICovXG5fb2xfVGlsZV8ucHJvdG90eXBlLmdldEtleSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5rZXkgKyAnLycgKyB0aGlzLnRpbGVDb29yZDtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBpbnRlcmltIHRpbGUgbW9zdCBzdWl0YWJsZSBmb3IgcmVuZGVyaW5nIHVzaW5nIHRoZSBjaGFpbiBvZiBpbnRlcmltXG4gKiB0aWxlcy4gVGhpcyBjb3JyZXNwb25kcyB0byB0aGUgIG1vc3QgcmVjZW50IHRpbGUgdGhhdCBoYXMgYmVlbiBsb2FkZWQsIGlmIG5vXG4gKiBzdWNoIHRpbGUgZXhpc3RzLCB0aGUgb3JpZ2luYWwgdGlsZSBpcyByZXR1cm5lZC5cbiAqIEByZXR1cm4geyFvbC5UaWxlfSBCZXN0IHRpbGUgZm9yIHJlbmRlcmluZy5cbiAqL1xuX29sX1RpbGVfLnByb3RvdHlwZS5nZXRJbnRlcmltVGlsZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIXRoaXMuaW50ZXJpbVRpbGUpIHtcbiAgICAvL2VtcHR5IGNoYWluXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdmFyIHRpbGUgPSB0aGlzLmludGVyaW1UaWxlO1xuXG4gIC8vIGZpbmQgdGhlIGZpcnN0IGxvYWRlZCB0aWxlIGFuZCByZXR1cm4gaXQuIFNpbmNlIHRoZSBjaGFpbiBpcyBzb3J0ZWQgaW5cbiAgLy8gZGVjcmVhc2luZyBvcmRlciBvZiBjcmVhdGlvbiB0aW1lLCB0aGVyZSBpcyBubyBuZWVkIHRvIHNlYXJjaCB0aGUgcmVtYWluZGVyXG4gIC8vIG9mIHRoZSBsaXN0IChhbGwgdGhvc2UgdGlsZXMgY29ycmVzcG9uZCB0byBvbGRlciByZXF1ZXN0cyBhbmQgd2lsbCBiZVxuICAvLyBjbGVhbmVkIHVwIGJ5IHJlZnJlc2hJbnRlcmltQ2hhaW4pXG4gIGRvIHtcbiAgICBpZiAodGlsZS5nZXRTdGF0ZSgpID09IF9vbF9UaWxlU3RhdGVfLkxPQURFRCkge1xuICAgICAgcmV0dXJuIHRpbGU7XG4gICAgfVxuICAgIHRpbGUgPSB0aWxlLmludGVyaW1UaWxlO1xuICB9IHdoaWxlICh0aWxlKTtcblxuICAvLyB3ZSBjYW4gbm90IGZpbmQgYSBiZXR0ZXIgdGlsZVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogR29lcyB0aHJvdWdoIHRoZSBjaGFpbiBvZiBpbnRlcmltIHRpbGVzIGFuZCBkaXNjYXJkcyBzZWN0aW9ucyBvZiB0aGUgY2hhaW5cbiAqIHRoYXQgYXJlIG5vIGxvbmdlciByZWxldmFudC5cbiAqL1xuX29sX1RpbGVfLnByb3RvdHlwZS5yZWZyZXNoSW50ZXJpbUNoYWluID0gZnVuY3Rpb24oKSB7XG4gIGlmICghdGhpcy5pbnRlcmltVGlsZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB0aWxlID0gdGhpcy5pbnRlcmltVGlsZTtcbiAgdmFyIHByZXYgPSB0aGlzO1xuXG4gIGRvIHtcbiAgICBpZiAodGlsZS5nZXRTdGF0ZSgpID09IF9vbF9UaWxlU3RhdGVfLkxPQURFRCkge1xuICAgICAgLy93ZSBoYXZlIGEgbG9hZGVkIHRpbGUsIHdlIGNhbiBkaXNjYXJkIHRoZSByZXN0IG9mIHRoZSBsaXN0XG4gICAgICAvL3dlIHdvdWxkIGNvdWxkIGFib3J0IGFueSBMT0FESU5HIHRpbGUgcmVxdWVzdFxuICAgICAgLy9vbGRlciB0aGFuIHRoaXMgdGlsZSAoaS5lLiBhbnkgTE9BRElORyB0aWxlIGZvbGxvd2luZyB0aGlzIGVudHJ5IGluIHRoZSBjaGFpbilcbiAgICAgIHRpbGUuaW50ZXJpbVRpbGUgPSBudWxsO1xuICAgICAgYnJlYWs7XG4gICAgfSBlbHNlIGlmICh0aWxlLmdldFN0YXRlKCkgPT0gX29sX1RpbGVTdGF0ZV8uTE9BRElORykge1xuICAgICAgLy9rZWVwIHRoaXMgTE9BRElORyB0aWxlIGFueSBsb2FkZWQgdGlsZXMgbGF0ZXIgaW4gdGhlIGNoYWluIGFyZVxuICAgICAgLy9vbGRlciB0aGFuIHRoaXMgdGlsZSwgc28gd2UncmUgc3RpbGwgaW50ZXJlc3RlZCBpbiB0aGUgcmVxdWVzdFxuICAgICAgcHJldiA9IHRpbGU7XG4gICAgfSBlbHNlIGlmICh0aWxlLmdldFN0YXRlKCkgPT0gX29sX1RpbGVTdGF0ZV8uSURMRSkge1xuICAgICAgLy90aGUgaGVhZCBvZiB0aGUgbGlzdCBpcyB0aGUgbW9zdCBjdXJyZW50IHRpbGUsIHdlIGRvbid0IG5lZWRcbiAgICAgIC8vdG8gc3RhcnQgYW55IG90aGVyIHJlcXVlc3RzIGZvciB0aGlzIGNoYWluXG4gICAgICBwcmV2LmludGVyaW1UaWxlID0gdGlsZS5pbnRlcmltVGlsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJldiA9IHRpbGU7XG4gICAgfVxuICAgIHRpbGUgPSBwcmV2LmludGVyaW1UaWxlO1xuICB9IHdoaWxlICh0aWxlKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSB0aWxlIGNvb3JkaW5hdGUgZm9yIHRoaXMgdGlsZS5cbiAqIEByZXR1cm4ge29sLlRpbGVDb29yZH0gVGhlIHRpbGUgY29vcmRpbmF0ZS5cbiAqIEBhcGlcbiAqL1xuX29sX1RpbGVfLnByb3RvdHlwZS5nZXRUaWxlQ29vcmQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudGlsZUNvb3JkO1xufTtcblxuXG4vKipcbiAqIEByZXR1cm4ge29sLlRpbGVTdGF0ZX0gU3RhdGUuXG4gKi9cbl9vbF9UaWxlXy5wcm90b3R5cGUuZ2V0U3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuc3RhdGU7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7b2wuVGlsZVN0YXRlfSBzdGF0ZSBTdGF0ZS5cbiAqL1xuX29sX1RpbGVfLnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgdGhpcy5jaGFuZ2VkKCk7XG59O1xuXG4vKipcbiAqIExvYWQgdGhlIGltYWdlIG9yIHJldHJ5IGlmIGxvYWRpbmcgcHJldmlvdXNseSBmYWlsZWQuXG4gKiBMb2FkaW5nIGlzIHRha2VuIGNhcmUgb2YgYnkgdGhlIHRpbGUgcXVldWUsIGFuZCBjYWxsaW5nIHRoaXMgbWV0aG9kIGlzXG4gKiBvbmx5IG5lZWRlZCBmb3IgcHJlbG9hZGluZyBvciBmb3IgcmVsb2FkaW5nIGluIGNhc2Ugb2YgYW4gZXJyb3IuXG4gKiBAYWJzdHJhY3RcbiAqIEBhcGlcbiAqL1xuX29sX1RpbGVfLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24oKSB7fTtcblxuLyoqXG4gKiBHZXQgdGhlIGFscGhhIHZhbHVlIGZvciByZW5kZXJpbmcuXG4gKiBAcGFyYW0ge251bWJlcn0gaWQgQW4gaWQgZm9yIHRoZSByZW5kZXJlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lIFRoZSByZW5kZXIgZnJhbWUgdGltZS5cbiAqIEByZXR1cm4ge251bWJlcn0gQSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxLlxuICovXG5fb2xfVGlsZV8ucHJvdG90eXBlLmdldEFscGhhID0gZnVuY3Rpb24oaWQsIHRpbWUpIHtcbiAgaWYgKCF0aGlzLnRyYW5zaXRpb25fKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgc3RhcnQgPSB0aGlzLnRyYW5zaXRpb25TdGFydHNfW2lkXTtcbiAgaWYgKCFzdGFydCkge1xuICAgIHN0YXJ0ID0gdGltZTtcbiAgICB0aGlzLnRyYW5zaXRpb25TdGFydHNfW2lkXSA9IHN0YXJ0O1xuICB9IGVsc2UgaWYgKHN0YXJ0ID09PSAtMSkge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGRlbHRhID0gdGltZSAtIHN0YXJ0ICsgKDEwMDAgLyA2MCk7IC8vIGF2b2lkIHJlbmRlcmluZyBhdCAwXG4gIGlmIChkZWx0YSA+PSB0aGlzLnRyYW5zaXRpb25fKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgcmV0dXJuIF9vbF9lYXNpbmdfLmVhc2VJbihkZWx0YSAvIHRoaXMudHJhbnNpdGlvbl8pO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB0aWxlIGlzIGluIGFuIGFscGhhIHRyYW5zaXRpb24uICBBIHRpbGUgaXMgY29uc2lkZXJlZCBpblxuICogdHJhbnNpdGlvbiBpZiB0aWxlLmdldEFscGhhKCkgaGFzIG5vdCB5ZXQgYmVlbiBjYWxsZWQgb3IgaGFzIGJlZW4gY2FsbGVkXG4gKiBhbmQgcmV0dXJuZWQgMS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpZCBBbiBpZCBmb3IgdGhlIHJlbmRlcmVyLlxuICogQHJldHVybiB7Ym9vbGVhbn0gVGhlIHRpbGUgaXMgaW4gdHJhbnNpdGlvbi5cbiAqL1xuX29sX1RpbGVfLnByb3RvdHlwZS5pblRyYW5zaXRpb24gPSBmdW5jdGlvbihpZCkge1xuICBpZiAoIXRoaXMudHJhbnNpdGlvbl8pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRoaXMudHJhbnNpdGlvblN0YXJ0c19baWRdICE9PSAtMTtcbn07XG5cbi8qKlxuICogTWFyayBhIHRyYW5zaXRpb24gYXMgY29tcGxldGUuXG4gKiBAcGFyYW0ge251bWJlcn0gaWQgQW4gaWQgZm9yIHRoZSByZW5kZXJlci5cbiAqL1xuX29sX1RpbGVfLnByb3RvdHlwZS5lbmRUcmFuc2l0aW9uID0gZnVuY3Rpb24oaWQpIHtcbiAgaWYgKHRoaXMudHJhbnNpdGlvbl8pIHtcbiAgICB0aGlzLnRyYW5zaXRpb25TdGFydHNfW2lkXSA9IC0xO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgX29sX1RpbGVfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvdGlsZS5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF9vbF8gZnJvbSAnLi9pbmRleC5qcyc7XG5pbXBvcnQgX29sX3N0cnVjdHNfTFJVQ2FjaGVfIGZyb20gJy4vc3RydWN0cy9scnVjYWNoZS5qcyc7XG5pbXBvcnQgX29sX3RpbGVjb29yZF8gZnJvbSAnLi90aWxlY29vcmQuanMnO1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVuZHMge29sLnN0cnVjdHMuTFJVQ2FjaGUuPG9sLlRpbGU+fVxuICogQHBhcmFtIHtudW1iZXI9fSBvcHRfaGlnaFdhdGVyTWFyayBIaWdoIHdhdGVyIG1hcmsuXG4gKiBAc3RydWN0XG4gKi9cbnZhciBfb2xfVGlsZUNhY2hlXyA9IGZ1bmN0aW9uKG9wdF9oaWdoV2F0ZXJNYXJrKSB7XG5cbiAgX29sX3N0cnVjdHNfTFJVQ2FjaGVfLmNhbGwodGhpcywgb3B0X2hpZ2hXYXRlck1hcmspO1xuXG59O1xuXG5fb2xfLmluaGVyaXRzKF9vbF9UaWxlQ2FjaGVfLCBfb2xfc3RydWN0c19MUlVDYWNoZV8pO1xuXG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgb2wuVGlsZVJhbmdlPn0gdXNlZFRpbGVzIFVzZWQgdGlsZXMuXG4gKi9cbl9vbF9UaWxlQ2FjaGVfLnByb3RvdHlwZS5leHBpcmVDYWNoZSA9IGZ1bmN0aW9uKHVzZWRUaWxlcykge1xuICB2YXIgdGlsZSwgektleTtcbiAgd2hpbGUgKHRoaXMuY2FuRXhwaXJlQ2FjaGUoKSkge1xuICAgIHRpbGUgPSB0aGlzLnBlZWtMYXN0KCk7XG4gICAgektleSA9IHRpbGUudGlsZUNvb3JkWzBdLnRvU3RyaW5nKCk7XG4gICAgaWYgKHpLZXkgaW4gdXNlZFRpbGVzICYmIHVzZWRUaWxlc1t6S2V5XS5jb250YWlucyh0aWxlLnRpbGVDb29yZCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBvcCgpLmRpc3Bvc2UoKTtcbiAgICB9XG4gIH1cbn07XG5cblxuLyoqXG4gKiBQcnVuZSBhbGwgdGlsZXMgZnJvbSB0aGUgY2FjaGUgdGhhdCBkb24ndCBoYXZlIHRoZSBzYW1lIHogYXMgdGhlIG5ld2VzdCB0aWxlLlxuICovXG5fb2xfVGlsZUNhY2hlXy5wcm90b3R5cGUucHJ1bmVFeGNlcHROZXdlc3RaID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLmdldENvdW50KCkgPT09IDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGtleSA9IHRoaXMucGVla0ZpcnN0S2V5KCk7XG4gIHZhciB0aWxlQ29vcmQgPSBfb2xfdGlsZWNvb3JkXy5mcm9tS2V5KGtleSk7XG4gIHZhciB6ID0gdGlsZUNvb3JkWzBdO1xuICB0aGlzLmZvckVhY2goZnVuY3Rpb24odGlsZSkge1xuICAgIGlmICh0aWxlLnRpbGVDb29yZFswXSAhPT0geikge1xuICAgICAgdGhpcy5yZW1vdmUoX29sX3RpbGVjb29yZF8uZ2V0S2V5KHRpbGUudGlsZUNvb3JkKSk7XG4gICAgICB0aWxlLmRpc3Bvc2UoKTtcbiAgICB9XG4gIH0sIHRoaXMpO1xufTtcbmV4cG9ydCBkZWZhdWx0IF9vbF9UaWxlQ2FjaGVfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvdGlsZWNhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgVmVsb2NpdHlMYXllciBmcm9tIFwiLi92ZWxvY2l0eWxheWVyXCJcclxuaW1wb3J0IENhbnZhc0JvdW5kIGZyb20gXCIuL2NhbnZhc0JvdW5kXCI7XHJcbmltcG9ydCBNYXBCb3VuZCBmcm9tIFwiLi9tYXBCb3VuZFwiO1xyXG5pbXBvcnQgV2luZHkgZnJvbSBcIi4vd2luZHlcIjtcclxuLy8gaW1wb3J0IENhbnZhc0xheWVyIGZyb20gXCIuL0wuQ2FudmFzTGF5ZXJcIjtcclxuLy8gaW1wb3J0IFZlbG9jaXR5TGF5ZXIgZnJvbSBcIi4vTC5WZWxvY2l0eUxheWVyXCI7XHJcbi8vIGltcG9ydCBWZWxvY2l0eUNvbnRyb2wgZnJvbSAnLi9MLkNvbnRyb2xWZWxvY2l0eSc7XHJcblxyXG4oPGFueT53aW5kb3cpLlZlbG9jaXR5TGF5ZXIgPSBWZWxvY2l0eUxheWVyO1xyXG4oPGFueT53aW5kb3cpLkNhbnZhc0JvdW5kID0gQ2FudmFzQm91bmQ7XHJcbig8YW55PndpbmRvdykuTWFwQm91bmQgPSBNYXBCb3VuZDtcclxuKDxhbnk+d2luZG93KS5XaW5keSA9IFdpbmR5O1xyXG5cclxuaW1wb3J0IFRlc3RMYXllciBmcm9tIFwiLi90ZXN0bGF5ZXJcIlxyXG4oPGFueT53aW5kb3cpLlRlc3RMYXllciA9IFRlc3RMYXllcjtcclxuXHJcbi8vIGRlY2xhcmUgdmFyIEw6IGFueTtcclxuXHJcblxyXG5cclxuLy8gTC5DYW52YXNMYXllciA9IChMLkxheWVyID8gTC5MYXllciA6IEwuQ2xhc3MpLmV4dGVuZChuZXcgQ2FudmFzTGF5ZXIoKSk7XHJcbi8vIEwuY2FudmFzTGF5ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbi8vIFx0cmV0dXJuIG5ldyBMLkNhbnZhc0xheWVyKCk7XHJcbi8vIH07XHJcblxyXG4vLyBMLkNvbnRyb2xWZWxvY2l0eSA9IChMLkNvbnRyb2wpLmV4dGVuZChuZXcgVmVsb2NpdHlDb250cm9sKCkpO1xyXG4vLyBMLmNvbnRyb2xWZWxvY2l0eSA9IGZ1bmN0aW9uKCkge1xyXG4vLyAgIHJldHVybiBuZXcgTC5Db250cm9sVmVsb2NpdHkoKTtcclxuLy8gfTtcclxuXHJcbi8vIEwuVmVsb2NpdHlMYXllciA9IChMLkxheWVyID8gTC5MYXllciA6IEwuQ2xhc3MpLmV4dGVuZChuZXcgVmVsb2NpdHlMYXllcigpKTtcclxuLy8gTC52ZWxvY2l0eUxheWVyID0gZnVuY3Rpb24ob3B0aW9uczogYW55KSB7XHJcbi8vIFx0cmV0dXJuIG5ldyBMLlZlbG9jaXR5TGF5ZXIob3B0aW9ucyk7XHJcbi8vIH07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsImltcG9ydCBXaW5keSBmcm9tICcuL3dpbmR5JztcclxuaW1wb3J0IENhbnZhc0JvdW5kIGZyb20gJy4vY2FudmFzQm91bmQnXHJcbmltcG9ydCBNYXBCb3VuZCBmcm9tICcuL21hcEJvdW5kJztcclxuaW1wb3J0IExheWVyIGZyb20gJy4vbGF5ZXInO1xyXG5pbXBvcnQgb2xJbWFnZUxheWVyIGZyb20gJ29sL2xheWVyL2ltYWdlJztcclxuaW1wb3J0IG9sVGlsZUxheWVyIGZyb20gJ29sL2xheWVyL3RpbGUnO1xyXG5pbXBvcnQgb2xJbWFnZUNhbnZhc1NvdXJjZSBmcm9tICdvbC9zb3VyY2UvaW1hZ2VjYW52YXMnO1xyXG5pbXBvcnQgb2xTdGFtZW5Tb3VyY2UgZnJvbSAnb2wvc291cmNlL3N0YW1lbic7XHJcbmRlY2xhcmUgZnVuY3Rpb24gcmVxdWlyZShuYW1lOnN0cmluZyk6YW55O1xyXG5jb25zdCBwcm9qID0gKDxhbnk+cmVxdWlyZSgnb2wvcHJvaicpKS5kZWZhdWx0O1xyXG4vLyBGaXg6IGh0dHBzOi8vZ2l0aHViLmNvbS9vcGVubGF5ZXJzL29wZW5sYXllcnMvaXNzdWVzLzgwMzdcclxuLy9pbXBvcnQgeyB0cmFuc2Zvcm1FeHRlbnQgfSBmcm9tICdvbC9wcm9qJztcclxuXHJcbi8vIGltcG9ydCBDYW52YXNMYXllciBmcm9tICcuL0wuQ2FudmFzTGF5ZXInO1xyXG4vLyBpbXBvcnQgVmVsb2NpdHlDb250cm9sIGZyb20gJy4vTC5Db250cm9sVmVsb2NpdHknXHJcblxyXG4vLyBkZWNsYXJlIHZhciBMOiBhbnk7XHJcblxyXG5cclxuLy8gY29uc3QgTF9DYW52YXNMYXllciA9IChMLkxheWVyID8gTC5MYXllciA6IEwuQ2xhc3MpLmV4dGVuZChuZXcgQ2FudmFzTGF5ZXIoKSk7XHJcbi8vIGNvbnN0IExfY2FudmFzTGF5ZXIgPSBmdW5jdGlvbigpIHtcclxuLy8gICByZXR1cm4gbmV3IExfQ2FudmFzTGF5ZXIoKTtcclxuLy8gfTtcclxuXHJcbi8vIGNvbnN0IExfQ29udHJvbFZlbG9jaXR5ID0gKEwuQ29udHJvbCkuZXh0ZW5kKG5ldyBWZWxvY2l0eUNvbnRyb2wpO1xyXG4vLyBjb25zdCBMX2NvbnRyb2xWZWxvY2l0eSA9IGZ1bmN0aW9uKCkge1xyXG4vLyAgIHJldHVybiBuZXcgTF9Db250cm9sVmVsb2NpdHkoKTtcclxuLy8gfTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVsb2NpdHlMYXllciB7XHJcblxyXG4gIHByaXZhdGUgb3B0aW9uczogYW55O1xyXG4gIHByaXZhdGUgX21hcDogYW55ID0gbnVsbDtcclxuICBwcml2YXRlIF9jYW52YXM6IGFueSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfY2FudmFzTGF5ZXI6IGFueSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfd2luZHk6IFdpbmR5ID0gbnVsbDtcclxuICBwcml2YXRlIF9jb250ZXh0OiBhbnkgPSBudWxsO1xyXG4gIHByaXZhdGUgX2Rpc3BsYXlUaW1lb3V0OiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgX21vdXNlQ29udHJvbDogYW55ICA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IGFueSkge1xyXG4gICAgY29uc29sZS5kZWJ1ZygnVmVsb2NpdHlMYXllci5jb25zdHJ1Y3RvcicpO1xyXG4gICAgdGhpcy5vcHRpb25zID0ge1xyXG4gICAgICBkaXNwbGF5VmFsdWVzOiB0cnVlLFxyXG4gICAgICBkaXNwbGF5T3B0aW9uczoge1xyXG4gICAgICAgIHZlbG9jaXR5VHlwZTogJ1ZlbG9jaXR5JyxcclxuICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbWxlZnQnLFxyXG4gICAgICAgIGVtcHR5U3RyaW5nOiAnTm8gdmVsb2NpdHkgZGF0YScsXHJcbiAgICAgICAgYW5nbGVDb252ZW50aW9uOiAnYmVhcmluZ0NDVycsXHJcbiAgICAgICAgc3BlZWRVbml0OiAnbS9zJ1xyXG4gICAgICB9LFxyXG4gICAgICBtYXhWZWxvY2l0eTogMTAsIC8vIHVzZWQgdG8gYWxpZ24gY29sb3Igc2NhbGVcclxuICAgICAgY29sb3JTY2FsZTogbnVsbCxcclxuICAgICAgZGF0YTogbnVsbFxyXG4gICAgfTtcclxuICAvLyB9XHJcblxyXG4gIC8vIGluaXRpYWxpemUob3B0aW9uczogYW55KSB7XHJcbiAgICBjb25zb2xlLmRlYnVnKCdWZWxvY2l0eUxheWVyLmluaXRpYWxpemUnKTtcclxuICAgIGZvciAodmFyIGkgaW4gb3B0aW9ucykge1xyXG4gICAgICB0aGlzLm9wdGlvbnNbaV0gPSBvcHRpb25zW2ldO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2NhbnZhc0Z1bmN0aW9uKGV4dGVudDogYW55LCByZXNvbHV0aW9uOiBhbnksIHBpeGVsUmF0aW86IGFueSwgc2l6ZTogYW55LCBwcm9qZWN0aW9uOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZGVidWcoJ1ZlbG9jaXR5TGF5ZXIuY2FudmFzRnVuY3Rpb24nKTtcclxuICAgIC8vIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIHRoaXMuX2NhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgc2l6ZVswXSk7XHJcbiAgICB0aGlzLl9jYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBzaXplWzFdKTtcclxuICAgIHRoaXMuX2NvbnRleHQgPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIC8vIENhbnZhcyBleHRlbnQgaXMgZGlmZmVyZW50IHRoYW4gbWFwIGV4dGVudCwgc28gY29tcHV0ZSBkZWx0YSBiZXR3ZWVuIFxyXG4gICAgLy8gbGVmdC10b3Agb2YgbWFwIGFuZCBjYW52YXMgZXh0ZW50LlxyXG4gICAgLy8gdmFyIG1hcEV4dGVudCA9IG1hcC5nZXRWaWV3KCkuY2FsY3VsYXRlRXh0ZW50KG1hcC5nZXRTaXplKCkpXHJcbiAgICAvLyB2YXIgY2FudmFzT3JpZ2luID0gbWFwLmdldFBpeGVsRnJvbUNvb3JkaW5hdGUoW2V4dGVudFswXSwgZXh0ZW50WzNdXSk7XHJcbiAgICAvLyB2YXIgbWFwT3JpZ2luID0gbWFwLmdldFBpeGVsRnJvbUNvb3JkaW5hdGUoW21hcEV4dGVudFswXSwgbWFwRXh0ZW50WzNdXSk7XHJcbiAgICAvLyB2YXIgZGVsdGEgPSBbbWFwT3JpZ2luWzBdLWNhbnZhc09yaWdpblswXSwgbWFwT3JpZ2luWzFdLWNhbnZhc09yaWdpblsxXV1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fY2FudmFzO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWFwTGF5ZXIoKSB7XHJcbiAgICBjb25zb2xlLmRlYnVnKCdWZWxvY2l0eUxheWVyLmdldE1hcExheWVyJyk7XHJcbiAgICB0aGlzLl9jYW52YXMgPSB0aGlzLl9jYW52YXMgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjb25zb2xlLmRlYnVnKCdWZWxvY2l0eUxheWVyLmdldE1hcExheWVyIDEnKTtcclxuICAgIHRoaXMuX2NhbnZhc0xheWVyID0gdGhpcy5fY2FudmFzTGF5ZXIgfHwgbmV3IG9sSW1hZ2VMYXllcih7XHJcbiAgICAgIHNvdXJjZTogbmV3IG9sSW1hZ2VDYW52YXNTb3VyY2Uoe1xyXG4gICAgICAgIGNhbnZhc0Z1bmN0aW9uOiB0aGlzLl9jYW52YXNGdW5jdGlvbixcclxuICAgICAgICBwcm9qZWN0aW9uOiAnRVBTRzozODU3J1xyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmRlYnVnKCdWZWxvY2l0eUxheWVyLmdldE1hcExheWVyIHJldHVybicpO1xyXG4gICAgcmV0dXJuIHRoaXMuX2NhbnZhc0xheWVyO1xyXG4gIH1cclxuXHJcbiAgYWRkVG9NYXAobWFwOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZGVidWcoJ1ZlbG9jaXR5TGF5ZXIuYWRkVG9NYXAnKTtcclxuICAgIG1hcC5hZGRMYXllcih0aGlzLmdldE1hcExheWVyKCkpO1xyXG4gICAgdGhpcy5fbWFwID0gbWFwO1xyXG4gICAgdGhpcy5fZHJhd1dpbmR5KCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVGcm9tTWFwKG1hcDogYW55KSB7XHJcbiAgICBjb25zb2xlLmRlYnVnKCdWZWxvY2l0eUxheWVyLnJlbW92ZUZyb21NYXAnKTtcclxuICAgIHRoaXMuX2Rlc3Ryb3lXaW5kKCk7XHJcbiAgICBtYXAucmVtb3ZlTGF5ZXIodGhpcy5fY2FudmFzTGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgc2V0RGF0YShkYXRhOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZGVidWcoJ1ZlbG9jaXR5TGF5ZXIuc2V0RGF0YScpO1xyXG4gICAgdGhpcy5vcHRpb25zLmRhdGEgPSBkYXRhO1xyXG5cclxuICAgIGlmICh0aGlzLl93aW5keSkge1xyXG4gICAgICB0aGlzLl93aW5keS5zZXREYXRhKGRhdGEpO1xyXG4gICAgICB0aGlzLl9jbGVhckFuZFJlc3RhcnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9pbml0V2luZHkoKSB7XHJcbiAgICBjb25zb2xlLmRlYnVnKCdWZWxvY2l0eUxheWVyLl9pbml0V2luZHknKTtcclxuXHJcbiAgICAvLyB3aW5keSBvYmplY3QsIGNvcHkgb3B0aW9uc1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHsgY2FudmFzOiB0aGlzLl9jYW52YXMgfSwgdGhpcy5vcHRpb25zKTtcclxuICAgIHRoaXMuX3dpbmR5ID0gbmV3IFdpbmR5KG9wdGlvbnMpO1xyXG5cclxuICAgIC8vVE9ETyA6IEZpZ3VyZSBvdXQgd2h5IHRoZSBldmVudCBpcyBjYWxsZWQgYWZ0ZXIgdGhlIGxheWVyIGlzIHJlbW92ZWRcclxuICAgIHRoaXMuX21hcC5vbignZHJhZ3N0YXJ0JywgKCkgPT4ge1xyXG4gICAgICBpZih0aGlzLl93aW5keSlcclxuICAgICAgICB0aGlzLl93aW5keS5zdG9wKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9tYXAub24oJ2RyYWdlbmQnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2NsZWFyQW5kUmVzdGFydCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fbWFwLm9uKCd6b29tc3RhcnQnLCAoKSA9PiB7XHJcbiAgICAgIGlmKHRoaXMuX3dpbmR5KVxyXG4gICAgICAgIHRoaXMuX3dpbmR5LnN0b3AoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX21hcC5vbignem9vbWVuZCcsICgpID0+IHtcclxuICAgICAgdGhpcy5fY2xlYXJBbmRSZXN0YXJ0KCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX21hcC5vbigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9jbGVhcldpbmQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHRoaXMuX2luaXRNb3VzZUhhbmRsZXIoKTtcclxuICB9XHJcblxyXG4gIC8vIF9pbml0TW91c2VIYW5kbGVyKCkge1xyXG4gIC8vICAgaWYgKCF0aGlzLl9tb3VzZUNvbnRyb2wgJiYgdGhpcy5vcHRpb25zLmRpc3BsYXlWYWx1ZXMpIHtcclxuICAvLyAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZGlzcGxheU9wdGlvbnMgfHwge307XHJcbiAgLy8gICAgIG9wdGlvbnNbJ2xlYWZsZXRWZWxvY2l0eSddID0gdGhpcztcclxuICAvLyAgICAgdGhpcy5fbW91c2VDb250cm9sID0gTF9jb250cm9sVmVsb2NpdHkoKTtcclxuICAvLyAgICAgdGhpcy5fbW91c2VDb250cm9sLnNldFdpbmR5KHRoaXMuX3dpbmR5KTtcclxuICAvLyAgICAgdGhpcy5fbW91c2VDb250cm9sLnNldE9wdGlvbnModGhpcy5vcHRpb25zLmRpc3BsYXlPcHRpb25zKTtcclxuICAvLyAgICAgdGhpcy5fbW91c2VDb250cm9sLmFkZFRvKHRoaXMuX21hcCk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICBfc3RhcnRXaW5keSgpIHtcclxuICAgIGNvbnNvbGUuZGVidWcoJ1ZlbG9jaXR5TGF5ZXIuX3N0YXJ0V2luZHknKTtcclxuXHJcbiAgICB2YXIgbWFwU2l6ZSA9IHRoaXMuX21hcC5nZXRTaXplKCk7XHJcbiAgICB2YXIgbWFwRXh0ZW50ID0gdGhpcy5fbWFwLmdldFZpZXcoKS5jYWxjdWxhdGVFeHRlbnQobWFwU2l6ZSk7XHJcblxyXG4gICAgdmFyIGV4dGVudExMID0gcHJvai50cmFuc2Zvcm1FeHRlbnQobWFwRXh0ZW50LCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpO1xyXG5cclxuICAgIHRoaXMuX3dpbmR5LnN0YXJ0KFxyXG4gICAgICBuZXcgTGF5ZXIoXHJcbiAgICAgICAgbmV3IE1hcEJvdW5kKFxyXG4gICAgICAgICAgZXh0ZW50TExbM10vMTgwKk1hdGguUEksIC8vIG1heHkgKG5vcnRoKVxyXG4gICAgICAgICAgZXh0ZW50TExbMl0vMTgwKk1hdGguUEksIC8vIG1heHggKGVhc3QpXHJcbiAgICAgICAgICBleHRlbnRMTFsxXS8xODAqTWF0aC5QSSwgLy8gbWlueSAoc291dGgpXHJcbiAgICAgICAgICBleHRlbnRMTFswXS8xODAqTWF0aC5QSSAvLyBtaW54ICh3ZXN0KVxyXG4gICAgICAgICksXHJcbiAgICAgICAgbmV3IENhbnZhc0JvdW5kKDAsIDAsIG1hcFNpemVbMF0sIG1hcFNpemVbMV0pXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBfZHJhd1dpbmR5KCkge1xyXG4gICAgY29uc29sZS5kZWJ1ZygnVmVsb2NpdHlMYXllci5fZHJhd1dpbmR5Jyk7XHJcbiAgICBcclxuICAgIGlmICghdGhpcy5fd2luZHkpIHtcclxuICAgICAgdGhpcy5faW5pdFdpbmR5KCk7XHJcbiAgICAgIHRoaXMuX2RyYXdXaW5keSgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZGF0YSkge1xyXG4gICAgICBjb25zb2xlLmRlYnVnKCdWZWxvY2l0eUxheWVyLl9kcmF3V2luZHk6IG5vIGRhdGEhJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmRlYnVnKCdWZWxvY2l0eUxheWVyLl9kcmF3V2luZHk6IDEnKTtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIGNvbnNvbGUuZGVidWcoJ1ZlbG9jaXR5TGF5ZXIuX2RyYXdXaW5keTogMicpO1xyXG4gICAgaWYgKHRoaXMuX2Rpc3BsYXlUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2VsZi5fZGlzcGxheVRpbWVvdXQpO1xyXG4gICAgY29uc29sZS5kZWJ1ZygnVmVsb2NpdHlMYXllci5fZHJhd1dpbmR5OiAzJyk7XHJcbiAgICB0aGlzLl9kaXNwbGF5VGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnNvbGUuZGVidWcoJ1ZlbG9jaXR5TGF5ZXIuX2RyYXdXaW5keTogNCcpO1xyXG4gICAgICBzZWxmLl9zdGFydFdpbmR5KCk7XHJcbiAgICAgIGNvbnNvbGUuZGVidWcoJ1ZlbG9jaXR5TGF5ZXIuX2RyYXdXaW5keTogNScpO1xyXG4gICAgfSwgMTUwKTsgLy8gc2hvd2luZyB2ZWxvY2l0eSBpcyBkZWxheWVkXHJcbiAgICBjb25zb2xlLmRlYnVnKCdWZWxvY2l0eUxheWVyLl9kcmF3V2luZHk6IDYnKTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgX2NsZWFyQW5kUmVzdGFydCgpIHtcclxuICAgIGNvbnNvbGUuZGVidWcoJ1ZlbG9jaXR5TGF5ZXIuX2NsZWFyQW5kUmVzdGFydCcpO1xyXG5cclxuICAgIGlmICh0aGlzLl9jb250ZXh0KSB0aGlzLl9jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCAzMDAwLCAzMDAwKTtcclxuICAgIGlmICh0aGlzLl93aW5keSkgdGhpcy5fc3RhcnRXaW5keSgpO1xyXG4gIH1cclxuXHJcbiAgX2NsZWFyV2luZCgpIHtcclxuICAgIGNvbnNvbGUuZGVidWcoJ1ZlbG9jaXR5TGF5ZXIuX2NsZWFyV2luZCcpO1xyXG4gICAgaWYgKHRoaXMuX3dpbmR5KSB0aGlzLl93aW5keS5zdG9wKCk7XHJcbiAgICBpZiAodGhpcy5fY29udGV4dCkgdGhpcy5fY29udGV4dC5jbGVhclJlY3QoMCwgMCwgMzAwMCwgMzAwMCk7XHJcbiAgfVxyXG5cclxuICBfZGVzdHJveVdpbmQoKSB7XHJcbiAgICBjb25zb2xlLmRlYnVnKCdWZWxvY2l0eUxheWVyLl9kZXN0cm95V2luZCcpO1xyXG4gICAgaWYgKHRoaXMuX2Rpc3BsYXlUaW1lb3V0KVxyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGlzcGxheVRpbWVvdXQpO1xyXG4gICAgaWYgKHRoaXMuX3dpbmR5KVxyXG4gICAgICB0aGlzLl93aW5keS5zdG9wKCk7XHJcbiAgICBpZiAodGhpcy5fY29udGV4dClcclxuICAgICAgdGhpcy5fY29udGV4dC5jbGVhclJlY3QoMCwgMCwgMzAwMCwgMzAwMCk7XHJcbiAgICAvLyBpZiAodGhpcy5fbW91c2VDb250cm9sKVxyXG4gICAgLy8gICB0aGlzLl9tYXAucmVtb3ZlQ29udHJvbCh0aGlzLl9tb3VzZUNvbnRyb2wpO1xyXG4gICAgLy8gdGhpcy5fbW91c2VDb250cm9sID0gbnVsbDtcclxuICAgIHRoaXMuX3dpbmR5ID0gbnVsbDtcclxuICAgIC8vIHRoaXMuX21hcC5yZW1vdmVMYXllcih0aGlzLl9jYW52YXNMYXllcik7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92ZWxvY2l0eWxheWVyLnRzIiwiaW1wb3J0IFZlY3RvciBmcm9tIFwiLi92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCB7XG4gICAgcHJpdmF0ZSBkYXRhOiBWZWN0b3JbXTtcbiAgICBwcml2YXRlIM+GMDogbnVtYmVyO1xuICAgIHByaXZhdGUgzrswOiBudW1iZXI7XG4gICAgcHJpdmF0ZSDOlM67OiBudW1iZXI7XG4gICAgcHJpdmF0ZSDOlM+GOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlcjtcbiAgICBwcml2YXRlIHdpZHRoOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvciAoZGF0YTogVmVjdG9yW10sIM+GMDogbnVtYmVyLCDOuzA6IG51bWJlciwgzpTPhjogbnVtYmVyLCDOlM67OiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCB3aWR0aDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMuz4YwID0gz4YwO1xuICAgICAgICB0aGlzLs67MCA9IM67MDtcbiAgICAgICAgdGhpcy7OlM67ID0gzpTOuztcbiAgICAgICAgdGhpcy7OlM+GID0gzpTPhjtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWVSYW5nZSAoKSA6IG51bWJlcltdIHtcbiAgICAgICAgaWYgKCF0aGlzLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gWzAsIDBdO1xuICAgICAgICB9XG4gICAgICAgIGxldCBtaW4gPSB0aGlzLmRhdGFbMF0uaW50ZW5zaXR5O1xuICAgICAgICBsZXQgbWF4ID0gdGhpcy5kYXRhWzBdLmludGVuc2l0eTtcbiAgICAgICAgdGhpcy5kYXRhLmZvckVhY2goKHZhbHVlOiBWZWN0b3IpID0+IHtcbiAgICAgICAgICAgIG1pbiA9IE1hdGgubWluKG1pbiwgdmFsdWUuaW50ZW5zaXR5KTtcbiAgICAgICAgICAgIG1heCA9IE1hdGgubWF4KG1heCwgdmFsdWUuaW50ZW5zaXR5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBbbWluLCBtYXhdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdmVjdG9yIGF0IGFueSBwb2ludFxuICAgICAqIEBwYXJhbSDOuyBMb25naXR1ZGVcbiAgICAgKiBAcGFyYW0gz4YgTGF0aXR1ZGVcbiAgICAgKi9cbiAgICBnZXQgKM67OiBudW1iZXIsIM+GOiBudW1iZXIpOiBWZWN0b3Ige1xuICAgICAgICBjb25zdCBmzrsgPSB0aGlzLmZsb29yTW9kKM67IC0gdGhpcy7OuzAsIDM2MCkgLyB0aGlzLs6Uzrs7ICAvLyBjYWxjdWxhdGUgbG9uZ2l0dWRlIGluZGV4IGluIHdyYXBwZWQgcmFuZ2UgWzAsIDM2MClcbiAgICAgICAgY29uc3QgZs+GID0gKHRoaXMuz4YwIC0gz4YpIC8gdGhpcy7OlM+GOyAgICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIGxhdGl0dWRlIGluZGV4IGluIGRpcmVjdGlvbiArOTAgdG8gLTkwXG5cbiAgICAgICAgY29uc3Qgac67ID0gTWF0aC5mbG9vcihmzrspIC8vIGNvbCBuXG4gICAgICAgIGxldCBqzrsgPSBpzrsgKyAxOyAgICAgICAgLy8gY29sIG4rMVxuICAgICAgICBpZiAoas67ID49IHRoaXMud2lkdGgpIHtcbiAgICAgICAgICAgIGrOuyA9IHRoaXMuzrswO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGnPhiA9IE1hdGguZmxvb3IoZs+GKSAvLyBsaW5lIG1cbiAgICAgICAgbGV0IGrPhiA9IGnPhiArIDE7ICAgICAgICAvLyBsaW5lIG0rMVxuICAgICAgICBpZiAoas+GID49IHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICBqz4YgPSBpz4Y7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2zrsgPSBmzrsgLSBpzrs7ICAgLy8gY29sIHZhcmlhdGlvbiBbMC4uMV1cbiAgICAgICAgY29uc3Qgds+GID0gZs+GIC0gac+GOyAgIC8vIGxpbmUgdmFyaWF0aW9uIFswLi4xXVxuXG4gICAgICAgIGlmIChpzrs+PTAgJiYgac+GPj0wICYmIGnOuzx0aGlzLndpZHRoICYmIGnPhjx0aGlzLmhlaWdodCkge1xuICAgICAgICAgIGxldCBnMDAgPSB0aGlzLmRhdGFbac67ICsgac+GICogdGhpcy53aWR0aF07XG4gICAgICAgICAgbGV0IGcxMCA9IHRoaXMuZGF0YVtqzrsgKyBpz4YgKiB0aGlzLndpZHRoXTtcblxuICAgICAgICAgIGlmICh0aGlzLmlzVmFsdWUoZzAwKSAmJiB0aGlzLmlzVmFsdWUoZzEwKSl7XG4gICAgICAgICAgICBsZXQgZzAxID0gdGhpcy5kYXRhW2nOuyArIGrPhiAqIHRoaXMud2lkdGhdO1xuICAgICAgICAgICAgbGV0IGcxMSA9IHRoaXMuZGF0YVtqzrsgKyBqz4YgKiB0aGlzLndpZHRoXTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsdWUoZzAxKSAmJiB0aGlzLmlzVmFsdWUoZzExKSkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uIChcbiAgICAgICAgICAgICAgICAgIHbOuyxcbiAgICAgICAgICAgICAgICAgIHbPhixcbiAgICAgICAgICAgICAgICAgIGcwMCwgLy9sMGMwXG4gICAgICAgICAgICAgICAgICBnMTAsIC8vbDBjMVxuICAgICAgICAgICAgICAgICAgZzAxLCAvL2wxYzBcbiAgICAgICAgICAgICAgICAgIGcxMSAgLy9sMWNsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoMCwwKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVycG9sYXRlIHZhbHVlXG4gICAgICogQHBhcmFtIHggdmFyaWF0aW9uIGJldHdlZW4gZzAqIGFuZCBnMSpcbiAgICAgKiBAcGFyYW0geSB2YXJpYXRpb24gYmV0d2VlbiBnKjAgZGFucyBnKjFcbiAgICAgKiBAcGFyYW0gZzAwIHBvaW50IGF0IGNvbF8wIGFuZCBsaW5lXzBcbiAgICAgKiBAcGFyYW0gZzEwIHBvaW50IGF0IGNvbF8xIGFuZCBsaW5lXzBcbiAgICAgKiBAcGFyYW0gZzAxIHBvaW50IGF0IGNvbF8wIGFuZCBsaW5lXzFcbiAgICAgKiBAcGFyYW0gZzExIHBvaW50IGF0IGNvbF8xIGFuZCBsaW5lXzFcbiAgICAgKiBAcmV0dXJuIGludGVycG9sYXRlZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBpbnRlcnBvbGF0aW9uICh4OiBudW1iZXIsIHk6IG51bWJlciwgZzAwOiBWZWN0b3IsIGcxMDpWZWN0b3IsIGcwMTogVmVjdG9yLCBnMTE6IFZlY3Rvcik6IFZlY3RvciB7XG4gICAgICAgIHZhciByeCA9ICgxIC0geCk7XG4gICAgICAgIHZhciByeSA9ICgxIC0geSk7XG4gICAgICAgIHZhciBhID0gcnggKiByeSxcbiAgICAgICAgICAgIGIgPSB4ICogcnksXG4gICAgICAgICAgICBjID0gcnggKiB5LFxuICAgICAgICAgICAgZCA9IHggKiB5O1xuICAgICAgICB2YXIgdSA9IGcwMC51ICogYSArIGcxMC51ICogYiArIGcwMS51ICogYyArIGcxMS51ICogZDtcbiAgICAgICAgdmFyIHYgPSBnMDAudiAqIGEgKyBnMTAudiAqIGIgKyBnMDEudiAqIGMgKyBnMTEudiAqIGQ7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHUsIHYpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEN1c3RvbSBtb2R1bG9cblx0ICogQHJldHVybnMge251bWJlcn0gcmV0dXJucyByZW1haW5kZXIgb2YgZmxvb3JlZCBkaXZpc2lvbiwgaS5lLiwgZmxvb3IoYSAvIG4pLiBVc2VmdWwgZm9yIGNvbnNpc3RlbnQgbW9kdWxvXG5cdCAqICAgICAgICAgIG9mIG5lZ2F0aXZlIG51bWJlcnMuIFNlZSBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL01vZHVsb19vcGVyYXRpb24uXG5cdCAqL1xuXHRmbG9vck1vZCAoYTogbnVtYmVyLCBuOiBudW1iZXIpOiBudW1iZXIge1xuXHRcdHJldHVybiBhIC0gbiAqIE1hdGguZmxvb3IoYSAvIG4pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXRlY3QgaWYgeCBpcyBhIHZhbHVlXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBzcGVjaWZpZWQgdmFsdWUgaXMgbm90IG51bGwgYW5kIG5vdCB1bmRlZmluZWQuXG5cdCAqL1xuXHRpc1ZhbHVlICh4OiBhbnkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4geCAhPT0gbnVsbCAmJiB4ICE9PSB1bmRlZmluZWQ7XG5cdH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ3JpZC50cyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG9yU2NhbGUge1xuICAgIHByaXZhdGUgc2NhbGU6IHN0cmluZ1tdID0gW1xuICAgIFwicmdiKDM2LDEwNCwgMTgwKVwiLFxuXHRcdFwicmdiKDYwLDE1NywgMTk0KVwiLFxuXHRcdFwicmdiKDEyOCwyMDUsMTkzIClcIixcblx0XHRcInJnYigxNTEsMjE4LDE2OCApXCIsXG5cdFx0XCJyZ2IoMTk4LDIzMSwxODEpXCIsXG5cdFx0XCJyZ2IoMjM4LDI0NywyMTcpXCIsXG5cdFx0XCJyZ2IoMjU1LDIzOCwxNTkpXCIsXG5cdFx0XCJyZ2IoMjUyLDIxNywxMjUpXCIsXG5cdFx0XCJyZ2IoMjU1LDE4MiwxMDApXCIsXG5cdFx0XCJyZ2IoMjUyLDE1MCw3NSlcIixcblx0XHRcInJnYigyNTAsMTEyLDUyKVwiLFxuXHRcdFwicmdiKDI0NSw2NCwzMilcIixcblx0XHRcInJnYigyMzcsNDUsMjgpXCIsXG5cdFx0XCJyZ2IoMjIwLDI0LDMyKVwiLFxuXHRcdFwicmdiKDE4MCwwLDM1KVwiXG4gICAgXVxuICAgIHByaXZhdGUgbWluVmFsdWU6IG51bWJlcjtcbiAgICBwcml2YXRlIG1heFZhbHVlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihtaW5WYWx1ZTogbnVtYmVyLCBtYXhWYWx1ZTogbnVtYmVyLCBzY2FsZT86IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMuc2V0TWluTWF4KG1pblZhbHVlLCBtYXhWYWx1ZSk7XG4gICAgICAgIGlmICgoc2NhbGUgaW5zdGFuY2VvZiBBcnJheSkgJiYgc2NhbGUubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlID0gc2NhbGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRNaW5NYXggKG1pblZhbHVlOiBudW1iZXIsIG1heFZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5taW5WYWx1ZSA9IG1pblZhbHVlO1xuICAgICAgICB0aGlzLm1heFZhbHVlID0gbWF4VmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHNpemUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2FsZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgZ2V0Q29sb3JJbmRleCh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHZhbHVlIDw9IHRoaXMubWluVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA+PSB0aGlzLm1heFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2FsZS5sZW5ndGgtMTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuc2NhbGUubGVuZ3RoICogKHZhbHVlIC0gdGhpcy5taW5WYWx1ZSkgLyAodGhpcy5tYXhWYWx1ZSAtIHRoaXMubWluVmFsdWUpO1xuICAgICAgICBpZiAoaW5kZXggPDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleD4gdGhpcy5zY2FsZS5sZW5ndGgtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGUubGVuZ3RoLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoaW5kZXgpO1xuICAgIH1cblxuICAgIGNvbG9yQXQoaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjYWxlW2luZGV4XTtcbiAgICB9XG5cbiAgICBnZXRDb2xvcih2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGVbdGhpcy5nZXRDb2xvckluZGV4KHZhbHVlKV07XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29sb3JTY2FsZS50cyIsImltcG9ydCBDb2xvclNjYWxlIGZyb20gXCIuL2NvbG9yU2NhbGVcIjtcbmltcG9ydCBQYXJ0aWN1bGUgZnJvbSBcIi4vcGFydGljbGVcIjtcbmltcG9ydCBWZWN0b3IgZnJvbSBcIi4vdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuaW1hdGlvbkJ1Y2tldCB7XG4gICAgcHJpdmF0ZSBjb2xvclNjYWxlOiBDb2xvclNjYWxlO1xuICAgIHByaXZhdGUgYnVja2V0czogUGFydGljdWxlW11bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IgKGNvbG9yU2NhbGU6IENvbG9yU2NhbGUpIHtcbiAgICAgICAgdGhpcy5jb2xvclNjYWxlID0gY29sb3JTY2FsZTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPGNvbG9yU2NhbGUuc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmJ1Y2tldHMucHVzaChbXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5idWNrZXRzLmZvckVhY2goKHBhcnRpY3VsZVNldDogUGFydGljdWxlW10pID0+IHtcbiAgICAgICAgICAgIHBhcnRpY3VsZVNldC5zcGxpY2UoMCwgcGFydGljdWxlU2V0Lmxlbmd0aClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGQgKHA6IFBhcnRpY3VsZSwgdjogVmVjdG9yKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jb2xvclNjYWxlLmdldENvbG9ySW5kZXgocC5pbnRlbnNpdHkpXG4gICAgICAgIGlmIChpbmRleDwwIHx8IGluZGV4Pj0gdGhpcy5idWNrZXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHAueHQgPSBwLnggKyB2LnU7XG4gICAgICAgIHAueXQgPSBwLnkgKyB2LnY7XG4gICAgICAgIHRoaXMuYnVja2V0c1tpbmRleF0ucHVzaChwKTtcbiAgICB9XG5cbiAgICBkcmF3IChjb250ZXh0MkQ6IGFueSkge1xuICAgICAgICB0aGlzLmJ1Y2tldHMuZm9yRWFjaCgoYnVja2V0OiBQYXJ0aWN1bGVbXSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoYnVja2V0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0MkQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgY29udGV4dDJELnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvclNjYWxlLmNvbG9yQXQoaSk7XG4gICAgICAgICAgICAgICAgYnVja2V0LmZvckVhY2goZnVuY3Rpb24ocGFydGljbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDJELm1vdmVUbyhwYXJ0aWNsZS54LCBwYXJ0aWNsZS55KTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDJELmxpbmVUbyhwYXJ0aWNsZS54dCwgcGFydGljbGUueXQpO1xuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZS54ID0gcGFydGljbGUueHQ7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlLnkgPSBwYXJ0aWNsZS55dDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0MkQuc3Ryb2tlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYW5pbWF0aW9uQnVja2V0LnRzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydGljdWxlIHtcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xuICAgIHB1YmxpYyB5OiBudW1iZXI7XG4gICAgcHVibGljIGFnZTogbnVtYmVyO1xuICAgIHB1YmxpYyBtYXhBZ2U6IG51bWJlcjtcbiAgICBwdWJsaWMgeHQ6IG51bWJlcjtcbiAgICBwdWJsaWMgeXQ6IG51bWJlcjtcbiAgICBwdWJsaWMgaW50ZW5zaXR5OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgbWF4QWdlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5hZ2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXhBZ2UpO1xuICAgICAgICB0aGlzLm1heEFnZSA9IG1heEFnZTtcbiAgICB9XG5cbiAgICByZXNldCh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmFnZSA9IDA7XG4gICAgfVxuXG4gICAgZ2V0IGlzRGVhZCAoKSA6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hZ2UgPiB0aGlzLm1heEFnZTtcbiAgICB9XG5cbiAgICBncm93ICgpIHtcbiAgICAgICAgdGhpcy5hZ2UrKztcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhcnRpY2xlLnRzIiwiaW1wb3J0IE1hcEJvdW5kIGZyb20gXCIuL21hcEJvdW5kXCI7XG5pbXBvcnQgQ2FudmFzQm91bmQgZnJvbSBcIi4vY2FudmFzQm91bmRcIjtcbmltcG9ydCBWZWN0b3IgZnJvbSBcIi4vdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGxheWVyIHtcblxuICAgIHB1YmxpYyBtYXBCb3VuZDogTWFwQm91bmQ7XG4gICAgcHVibGljIGNhbnZhc0JvdW5kOiBDYW52YXNCb3VuZDtcblxuICAgIGNvbnN0cnVjdG9yKG1hcEJvdW5kOiBNYXBCb3VuZCwgY2FudmFzQm91bmQ6IENhbnZhc0JvdW5kKSB7XG4gICAgICAgIHRoaXMuY2FudmFzQm91bmQgPSBjYW52YXNCb3VuZDtcbiAgICAgICAgdGhpcy5tYXBCb3VuZCA9IG1hcEJvdW5kO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmQgZ2VvY29vcmRpbmF0ZSBmcm9tIGNhbnZhcyBwb2ludFxuICAgICAqIEBwYXJhbSB4IFxuICAgICAqIEBwYXJhbSB5IFxuICAgICAqIHJldHVybiBbbG5nLCBsYXRdXG4gICAgICovXG4gICAgY2FudmFzVG9NYXAgKHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgICAgICBjb25zdCBtYXBMb25EZWx0YSA9IHRoaXMubWFwQm91bmQuZWFzdCAtIHRoaXMubWFwQm91bmQud2VzdDtcbiAgICAgICAgY29uc3Qgd29ybGRNYXBSYWRpdXMgPSAodGhpcy5jYW52YXNCb3VuZC53aWR0aCAvIHRoaXMucmFkMmRlZyhtYXBMb25EZWx0YSkpICogMzYwLygyICogTWF0aC5QSSk7XG4gICAgICAgIGNvbnN0IG1hcE9mZnNldFkgPSAoIHdvcmxkTWFwUmFkaXVzIC8gMiAqIE1hdGgubG9nKCAoMSArIE1hdGguc2luKHRoaXMubWFwQm91bmQuc291dGgpICkgLyAoMSAtIE1hdGguc2luKHRoaXMubWFwQm91bmQuc291dGgpKSAgKSk7XG4gICAgICAgIGNvbnN0IGVxdWF0b3JZID0gdGhpcy5jYW52YXNCb3VuZC5oZWlnaHQgKyBtYXBPZmZzZXRZO1xuICAgICAgICBjb25zdCBhID0gKGVxdWF0b3JZLXkpL3dvcmxkTWFwUmFkaXVzO1xuXG4gICAgICAgIGNvbnN0IM+GID0gMTgwL01hdGguUEkgKiAoMiAqIE1hdGguYXRhbihNYXRoLmV4cChhKSkgLSBNYXRoLlBJLzIpO1xuICAgICAgICBjb25zdCDOuyA9IHRoaXMucmFkMmRlZyh0aGlzLm1hcEJvdW5kLndlc3QpICsgeCAvIHRoaXMuY2FudmFzQm91bmQud2lkdGggKiB0aGlzLnJhZDJkZWcobWFwTG9uRGVsdGEpO1xuICAgICAgICByZXR1cm4gW867LCDPhl07XG4gICAgfTtcbiAgICAgICAgXG4gICAgbWVyY1kgKM+GOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5sb2coIE1hdGgudGFuKCDPhiAvIDIgKyBNYXRoLlBJIC8gNCApICk7XG4gICAgfTtcbiAgICAgICAgXG4gICAgLyoqXG4gICAgICogUHJvamVjdCBhIHBvaW50IG9uIHRoZSBtYXBcbiAgICAgKiBAcGFyYW0gzrsgTG9uZ2l0dWRlXG4gICAgICogQHBhcmFtIM+GIExhdGl0dWRlXG4gICAgICogQHJldHVybiBbeCwgeV1cbiAgICAgKi9cbiAgICBtYXBUb0NhbnZhcyAozrs6IG51bWJlciwgz4Y6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICAgICAgY29uc3QgeW1pbiA9IHRoaXMubWVyY1kodGhpcy5tYXBCb3VuZC5zb3V0aCk7XG4gICAgICAgIGNvbnN0IHltYXggPSB0aGlzLm1lcmNZKHRoaXMubWFwQm91bmQubm9ydGgpO1xuICAgICAgICBjb25zdCB4RmFjdG9yID0gdGhpcy5jYW52YXNCb3VuZC53aWR0aCAvICggdGhpcy5tYXBCb3VuZC5lYXN0IC0gdGhpcy5tYXBCb3VuZC53ZXN0ICk7XG4gICAgICAgIGNvbnN0IHlGYWN0b3IgPSB0aGlzLmNhbnZhc0JvdW5kLmhlaWdodCAvICggeW1heCAtIHltaW4gKTtcblxuICAgICAgICBsZXQgeSA9IHRoaXMubWVyY1kodGhpcy5kZWcycmFkKM+GKSApO1xuICAgICAgICBjb25zdCB4ID0gKHRoaXMuZGVnMnJhZCjOuykgLSB0aGlzLm1hcEJvdW5kLndlc3QpICogeEZhY3RvcjtcbiAgICAgICAgeSA9ICh5bWF4IC0geSkgKiB5RmFjdG9yO1xuICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgIH07XG5cblxuICAgIGRlZzJyYWQgKGRlZzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGRlZyAqIE1hdGguUEkgLyAxODA7XG4gICAgfTtcblxuICAgIHJhZDJkZWcgKHJhZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHJhZCAqIDE4MCAvIE1hdGguUEk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSDOuyBMb25naXR1ZGVcbiAgICAgKiBAcGFyYW0gz4YgTGF0aXR1ZGVcbiAgICAgKiBAcGFyYW0geCBcbiAgICAgKiBAcGFyYW0geSBcbiAgICAgKiBAcmV0dXJuIFtdXG4gICAgICovXG4gICAgZGlzdG9ydGlvbiAozrs6IG51bWJlciwgz4Y6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgICAgIGNvbnN0IM+EID0gMiAqIE1hdGguUEk7XG4gICAgICAgIGNvbnN0IEggPSBNYXRoLnBvdygxMCwgLTUuMik7XG4gICAgICAgIGNvbnN0IGjOuyA9IM67IDwgMCA/IEggOiAtSDtcbiAgICAgICAgY29uc3QgaM+GID0gz4YgPCAwID8gSCA6IC1IO1xuXG4gICAgICAgIGNvbnN0IHDOuyA9IHRoaXMubWFwVG9DYW52YXMozrsgKyBozrssIM+GKTtcbiAgICAgICAgY29uc3QgcM+GID0gdGhpcy5tYXBUb0NhbnZhcyjOuywgz4YgKyBoz4YpO1xuXG4gICAgICAgIC8vIE1lcmlkaWFuIHNjYWxlIGZhY3RvciAoc2VlIFNueWRlciwgZXF1YXRpb24gNC0zKSwgd2hlcmUgUiA9IDEuIFRoaXMgaGFuZGxlcyBpc3N1ZSB3aGVyZSBsZW5ndGggb2YgMcK6IM67XG4gICAgICAgIC8vIGNoYW5nZXMgZGVwZW5kaW5nIG9uIM+GLiBXaXRob3V0IHRoaXMsIHRoZXJlIGlzIGEgcGluY2hpbmcgZWZmZWN0IGF0IHRoZSBwb2xlcy5cbiAgICAgICAgY29uc3QgayA9IE1hdGguY29zKM+GIC8gMzYwICogz4QpO1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgKHDOu1swXSAtIHgpIC8gaM67IC8gayxcbiAgICAgICAgICAgIChwzrtbMV0gLSB5KSAvIGjOuyAvIGssXG4gICAgICAgICAgICAocM+GWzBdIC0geCkgLyBoz4YsXG4gICAgICAgICAgICAocM+GWzFdIC0geSkgLyBoz4ZcbiAgICAgICAgXTtcbiAgICB9XG4gICAgICBcbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgZGlzdG9ydGlvbiBvZiB0aGUgd2luZCB2ZWN0b3IgY2F1c2VkIGJ5IHRoZSBzaGFwZSBvZiB0aGUgcHJvamVjdGlvbiBhdCBwb2ludCAoeCwgeSkuIFRoZSB3aW5kXG4gICAgICogdmVjdG9yIGlzIG1vZGlmaWVkIGluIHBsYWNlIGFuZCByZXR1cm5lZCBieSB0aGlzIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSDOuyBcbiAgICAgKiBAcGFyYW0gz4YgXG4gICAgICogQHBhcmFtIHggXG4gICAgICogQHBhcmFtIHkgXG4gICAgICogQHBhcmFtIHNjYWxlIHNjYWxlIGZhY3RvclxuICAgICAqIEBwYXJhbSB3aW5kIFt1LCB2XVxuICAgICAqIEByZXR1cm4gW11cbiAgICAgKi9cbiAgICBkaXN0b3J0ICjOuzogbnVtYmVyLCDPhjogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGU6IG51bWJlciwgd2luZDogVmVjdG9yKTogVmVjdG9yIHtcbiAgICAgICAgY29uc3QgdSA9IHdpbmQudSAqIHNjYWxlO1xuICAgICAgICBjb25zdCB2ID0gd2luZC52ICogc2NhbGU7XG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLmRpc3RvcnRpb24ozrssIM+GLCB4LCB5KTtcblxuICAgICAgICAvLyBTY2FsZSBkaXN0b3J0aW9uIHZlY3RvcnMgYnkgdSBhbmQgdiwgdGhlbiBhZGQuXG4gICAgICAgIHdpbmQudSA9IGRbMF0gKiB1ICsgZFsyXSAqIHY7XG4gICAgICAgIHdpbmQudiA9IGRbMV0gKiB1ICsgZFszXSAqIHY7XG4gICAgICAgIHJldHVybiB3aW5kO1xuICAgIH1cbiAgXG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGF5ZXIudHMiLCJpbXBvcnQgX29sXyBmcm9tICcuLi9pbmRleC5qcyc7XG5pbXBvcnQgX29sX0xheWVyVHlwZV8gZnJvbSAnLi4vbGF5ZXJ0eXBlLmpzJztcbmltcG9ydCBfb2xfbGF5ZXJfTGF5ZXJfIGZyb20gJy4uL2xheWVyL2xheWVyLmpzJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBTZXJ2ZXItcmVuZGVyZWQgaW1hZ2VzIHRoYXQgYXJlIGF2YWlsYWJsZSBmb3IgYXJiaXRyYXJ5IGV4dGVudHMgYW5kXG4gKiByZXNvbHV0aW9ucy5cbiAqIE5vdGUgdGhhdCBhbnkgcHJvcGVydHkgc2V0IGluIHRoZSBvcHRpb25zIGlzIHNldCBhcyBhIHtAbGluayBvbC5PYmplY3R9XG4gKiBwcm9wZXJ0eSBvbiB0aGUgbGF5ZXIgb2JqZWN0OyBmb3IgZXhhbXBsZSwgc2V0dGluZyBgdGl0bGU6ICdNeSBUaXRsZSdgIGluIHRoZVxuICogb3B0aW9ucyBtZWFucyB0aGF0IGB0aXRsZWAgaXMgb2JzZXJ2YWJsZSwgYW5kIGhhcyBnZXQvc2V0IGFjY2Vzc29ycy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBleHRlbmRzIHtvbC5sYXllci5MYXllcn1cbiAqIEBmaXJlcyBvbC5yZW5kZXIuRXZlbnRcbiAqIEBwYXJhbSB7b2x4LmxheWVyLkltYWdlT3B0aW9ucz19IG9wdF9vcHRpb25zIExheWVyIG9wdGlvbnMuXG4gKiBAYXBpXG4gKi9cbnZhciBfb2xfbGF5ZXJfSW1hZ2VfID0gZnVuY3Rpb24ob3B0X29wdGlvbnMpIHtcbiAgdmFyIG9wdGlvbnMgPSBvcHRfb3B0aW9ucyA/IG9wdF9vcHRpb25zIDoge307XG4gIF9vbF9sYXllcl9MYXllcl8uY2FsbCh0aGlzLCAgLyoqIEB0eXBlIHtvbHgubGF5ZXIuTGF5ZXJPcHRpb25zfSAqLyAob3B0aW9ucykpO1xuXG4gIC8qKlxuICAgKiBUaGUgbGF5ZXIgdHlwZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAdHlwZSB7b2wuTGF5ZXJUeXBlfVxuICAgKi9cbiAgdGhpcy50eXBlID0gX29sX0xheWVyVHlwZV8uSU1BR0U7XG5cbn07XG5cbl9vbF8uaW5oZXJpdHMoX29sX2xheWVyX0ltYWdlXywgX29sX2xheWVyX0xheWVyXyk7XG5cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGFzc29jaWF0ZWQge0BsaW5rIG9sLnNvdXJjZS5JbWFnZSBzb3VyY2V9IG9mIHRoZSBpbWFnZSBsYXllci5cbiAqIEBmdW5jdGlvblxuICogQHJldHVybiB7b2wuc291cmNlLkltYWdlfSBTb3VyY2UuXG4gKiBAYXBpXG4gKi9cbl9vbF9sYXllcl9JbWFnZV8ucHJvdG90eXBlLmdldFNvdXJjZTtcbmV4cG9ydCBkZWZhdWx0IF9vbF9sYXllcl9JbWFnZV87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9sYXllci9pbWFnZS5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG52YXIgX29sX09iamVjdEV2ZW50VHlwZV8gPSB7XG4gIC8qKlxuICAgKiBUcmlnZ2VyZWQgd2hlbiBhIHByb3BlcnR5IGlzIGNoYW5nZWQuXG4gICAqIEBldmVudCBvbC5PYmplY3QuRXZlbnQjcHJvcGVydHljaGFuZ2VcbiAgICogQGFwaVxuICAgKi9cbiAgUFJPUEVSVFlDSEFOR0U6ICdwcm9wZXJ0eWNoYW5nZSdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IF9vbF9PYmplY3RFdmVudFR5cGVfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvb2JqZWN0ZXZlbnR0eXBlLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgX29sXyBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCBfb2xfZXZlbnRzXyBmcm9tICcuL2V2ZW50cy5qcyc7XG5pbXBvcnQgX29sX2V2ZW50c19FdmVudFRhcmdldF8gZnJvbSAnLi9ldmVudHMvZXZlbnR0YXJnZXQuanMnO1xuaW1wb3J0IF9vbF9ldmVudHNfRXZlbnRUeXBlXyBmcm9tICcuL2V2ZW50cy9ldmVudHR5cGUuanMnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIEFic3RyYWN0IGJhc2UgY2xhc3M7IG5vcm1hbGx5IG9ubHkgdXNlZCBmb3IgY3JlYXRpbmcgc3ViY2xhc3NlcyBhbmQgbm90XG4gKiBpbnN0YW50aWF0ZWQgaW4gYXBwcy5cbiAqIEFuIGV2ZW50IHRhcmdldCBwcm92aWRpbmcgY29udmVuaWVudCBtZXRob2RzIGZvciBsaXN0ZW5lciByZWdpc3RyYXRpb25cbiAqIGFuZCB1bnJlZ2lzdHJhdGlvbi4gQSBnZW5lcmljIGBjaGFuZ2VgIGV2ZW50IGlzIGFsd2F5cyBhdmFpbGFibGUgdGhyb3VnaFxuICoge0BsaW5rIG9sLk9ic2VydmFibGUjY2hhbmdlZH0uXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAZXh0ZW5kcyB7b2wuZXZlbnRzLkV2ZW50VGFyZ2V0fVxuICogQGZpcmVzIG9sLmV2ZW50cy5FdmVudFxuICogQHN0cnVjdFxuICogQGFwaVxuICovXG52YXIgX29sX09ic2VydmFibGVfID0gZnVuY3Rpb24oKSB7XG5cbiAgX29sX2V2ZW50c19FdmVudFRhcmdldF8uY2FsbCh0aGlzKTtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIHRoaXMucmV2aXNpb25fID0gMDtcblxufTtcblxuX29sXy5pbmhlcml0cyhfb2xfT2JzZXJ2YWJsZV8sIF9vbF9ldmVudHNfRXZlbnRUYXJnZXRfKTtcblxuXG4vKipcbiAqIFJlbW92ZXMgYW4gZXZlbnQgbGlzdGVuZXIgdXNpbmcgdGhlIGtleSByZXR1cm5lZCBieSBgb24oKWAgb3IgYG9uY2UoKWAuXG4gKiBAcGFyYW0ge29sLkV2ZW50c0tleXxBcnJheS48b2wuRXZlbnRzS2V5Pn0ga2V5IFRoZSBrZXkgcmV0dXJuZWQgYnkgYG9uKClgXG4gKiAgICAgb3IgYG9uY2UoKWAgKG9yIGFuIGFycmF5IG9mIGtleXMpLlxuICogQGFwaVxuICovXG5fb2xfT2JzZXJ2YWJsZV8udW5CeUtleSA9IGZ1bmN0aW9uKGtleSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShrZXkpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGlpID0ga2V5Lmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgIF9vbF9ldmVudHNfLnVubGlzdGVuQnlLZXkoa2V5W2ldKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgX29sX2V2ZW50c18udW5saXN0ZW5CeUtleSgvKiogQHR5cGUge29sLkV2ZW50c0tleX0gKi8gKGtleSkpO1xuICB9XG59O1xuXG5cbi8qKlxuICogSW5jcmVhc2VzIHRoZSByZXZpc2lvbiBjb3VudGVyIGFuZCBkaXNwYXRjaGVzIGEgJ2NoYW5nZScgZXZlbnQuXG4gKiBAYXBpXG4gKi9cbl9vbF9PYnNlcnZhYmxlXy5wcm90b3R5cGUuY2hhbmdlZCA9IGZ1bmN0aW9uKCkge1xuICArK3RoaXMucmV2aXNpb25fO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoX29sX2V2ZW50c19FdmVudFR5cGVfLkNIQU5HRSk7XG59O1xuXG5cbi8qKlxuICogRGlzcGF0Y2hlcyBhbiBldmVudCBhbmQgY2FsbHMgYWxsIGxpc3RlbmVycyBsaXN0ZW5pbmcgZm9yIGV2ZW50c1xuICogb2YgdGhpcyB0eXBlLiBUaGUgZXZlbnQgcGFyYW1ldGVyIGNhbiBlaXRoZXIgYmUgYSBzdHJpbmcgb3IgYW5cbiAqIE9iamVjdCB3aXRoIGEgYHR5cGVgIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7e3R5cGU6IHN0cmluZyxcbiAqICAgICB0YXJnZXQ6IChFdmVudFRhcmdldHxvbC5ldmVudHMuRXZlbnRUYXJnZXR8dW5kZWZpbmVkKX18b2wuZXZlbnRzLkV2ZW50fFxuICogICAgIHN0cmluZ30gZXZlbnQgRXZlbnQgb2JqZWN0LlxuICogQGZ1bmN0aW9uXG4gKiBAYXBpXG4gKi9cbl9vbF9PYnNlcnZhYmxlXy5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudDtcblxuXG4vKipcbiAqIEdldCB0aGUgdmVyc2lvbiBudW1iZXIgZm9yIHRoaXMgb2JqZWN0LiAgRWFjaCB0aW1lIHRoZSBvYmplY3QgaXMgbW9kaWZpZWQsXG4gKiBpdHMgdmVyc2lvbiBudW1iZXIgd2lsbCBiZSBpbmNyZW1lbnRlZC5cbiAqIEByZXR1cm4ge251bWJlcn0gUmV2aXNpb24uXG4gKiBAYXBpXG4gKi9cbl9vbF9PYnNlcnZhYmxlXy5wcm90b3R5cGUuZ2V0UmV2aXNpb24gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucmV2aXNpb25fO1xufTtcblxuXG4vKipcbiAqIExpc3RlbiBmb3IgYSBjZXJ0YWluIHR5cGUgb2YgZXZlbnQuXG4gKiBAcGFyYW0ge3N0cmluZ3xBcnJheS48c3RyaW5nPn0gdHlwZSBUaGUgZXZlbnQgdHlwZSBvciBhcnJheSBvZiBldmVudCB0eXBlcy5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oPyk6ID99IGxpc3RlbmVyIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0X3RoaXMgVGhlIG9iamVjdCB0byB1c2UgYXMgYHRoaXNgIGluIGBsaXN0ZW5lcmAuXG4gKiBAcmV0dXJuIHtvbC5FdmVudHNLZXl8QXJyYXkuPG9sLkV2ZW50c0tleT59IFVuaXF1ZSBrZXkgZm9yIHRoZSBsaXN0ZW5lci4gSWZcbiAqICAgICBjYWxsZWQgd2l0aCBhbiBhcnJheSBvZiBldmVudCB0eXBlcyBhcyB0aGUgZmlyc3QgYXJndW1lbnQsIHRoZSByZXR1cm5cbiAqICAgICB3aWxsIGJlIGFuIGFycmF5IG9mIGtleXMuXG4gKiBAYXBpXG4gKi9cbl9vbF9PYnNlcnZhYmxlXy5wcm90b3R5cGUub24gPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lciwgb3B0X3RoaXMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICB2YXIgbGVuID0gdHlwZS5sZW5ndGg7XG4gICAgdmFyIGtleXMgPSBuZXcgQXJyYXkobGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBrZXlzW2ldID0gX29sX2V2ZW50c18ubGlzdGVuKHRoaXMsIHR5cGVbaV0sIGxpc3RlbmVyLCBvcHRfdGhpcyk7XG4gICAgfVxuICAgIHJldHVybiBrZXlzO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBfb2xfZXZlbnRzXy5saXN0ZW4oXG4gICAgICAgIHRoaXMsIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAodHlwZSksIGxpc3RlbmVyLCBvcHRfdGhpcyk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBMaXN0ZW4gb25jZSBmb3IgYSBjZXJ0YWluIHR5cGUgb2YgZXZlbnQuXG4gKiBAcGFyYW0ge3N0cmluZ3xBcnJheS48c3RyaW5nPn0gdHlwZSBUaGUgZXZlbnQgdHlwZSBvciBhcnJheSBvZiBldmVudCB0eXBlcy5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oPyk6ID99IGxpc3RlbmVyIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0X3RoaXMgVGhlIG9iamVjdCB0byB1c2UgYXMgYHRoaXNgIGluIGBsaXN0ZW5lcmAuXG4gKiBAcmV0dXJuIHtvbC5FdmVudHNLZXl8QXJyYXkuPG9sLkV2ZW50c0tleT59IFVuaXF1ZSBrZXkgZm9yIHRoZSBsaXN0ZW5lci4gSWZcbiAqICAgICBjYWxsZWQgd2l0aCBhbiBhcnJheSBvZiBldmVudCB0eXBlcyBhcyB0aGUgZmlyc3QgYXJndW1lbnQsIHRoZSByZXR1cm5cbiAqICAgICB3aWxsIGJlIGFuIGFycmF5IG9mIGtleXMuXG4gKiBAYXBpXG4gKi9cbl9vbF9PYnNlcnZhYmxlXy5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyLCBvcHRfdGhpcykge1xuICBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgIHZhciBsZW4gPSB0eXBlLmxlbmd0aDtcbiAgICB2YXIga2V5cyA9IG5ldyBBcnJheShsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGtleXNbaV0gPSBfb2xfZXZlbnRzXy5saXN0ZW5PbmNlKHRoaXMsIHR5cGVbaV0sIGxpc3RlbmVyLCBvcHRfdGhpcyk7XG4gICAgfVxuICAgIHJldHVybiBrZXlzO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBfb2xfZXZlbnRzXy5saXN0ZW5PbmNlKFxuICAgICAgICB0aGlzLCAvKiogQHR5cGUge3N0cmluZ30gKi8gKHR5cGUpLCBsaXN0ZW5lciwgb3B0X3RoaXMpO1xuICB9XG59O1xuXG5cbi8qKlxuICogVW5saXN0ZW4gZm9yIGEgY2VydGFpbiB0eXBlIG9mIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd8QXJyYXkuPHN0cmluZz59IHR5cGUgVGhlIGV2ZW50IHR5cGUgb3IgYXJyYXkgb2YgZXZlbnQgdHlwZXMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKD8pOiA/fSBsaXN0ZW5lciBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdF90aGlzIFRoZSBvYmplY3Qgd2hpY2ggd2FzIHVzZWQgYXMgYHRoaXNgIGJ5IHRoZVxuICogYGxpc3RlbmVyYC5cbiAqIEBhcGlcbiAqL1xuX29sX09ic2VydmFibGVfLnByb3RvdHlwZS51biA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyLCBvcHRfdGhpcykge1xuICBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IHR5cGUubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgX29sX2V2ZW50c18udW5saXN0ZW4odGhpcywgdHlwZVtpXSwgbGlzdGVuZXIsIG9wdF90aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIF9vbF9ldmVudHNfLnVubGlzdGVuKHRoaXMsIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAodHlwZSksIGxpc3RlbmVyLCBvcHRfdGhpcyk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBfb2xfT2JzZXJ2YWJsZV87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9vYnNlcnZhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgX29sXyBmcm9tICcuL2luZGV4LmpzJztcblxuLyoqXG4gKiBPYmplY3RzIHRoYXQgbmVlZCB0byBjbGVhbiB1cCBhZnRlciB0aGVtc2VsdmVzLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBfb2xfRGlzcG9zYWJsZV8gPSBmdW5jdGlvbigpIHt9O1xuXG4vKipcbiAqIFRoZSBvYmplY3QgaGFzIGFscmVhZHkgYmVlbiBkaXNwb3NlZC5cbiAqIEB0eXBlIHtib29sZWFufVxuICogQHByaXZhdGVcbiAqL1xuX29sX0Rpc3Bvc2FibGVfLnByb3RvdHlwZS5kaXNwb3NlZF8gPSBmYWxzZTtcblxuLyoqXG4gKiBDbGVhbiB1cC5cbiAqL1xuX29sX0Rpc3Bvc2FibGVfLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG4gIGlmICghdGhpcy5kaXNwb3NlZF8pIHtcbiAgICB0aGlzLmRpc3Bvc2VkXyA9IHRydWU7XG4gICAgdGhpcy5kaXNwb3NlSW50ZXJuYWwoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBFeHRlbnNpb24gcG9pbnQgZm9yIGRpc3Bvc2FibGUgb2JqZWN0cy5cbiAqIEBwcm90ZWN0ZWRcbiAqL1xuX29sX0Rpc3Bvc2FibGVfLnByb3RvdHlwZS5kaXNwb3NlSW50ZXJuYWwgPSBfb2xfLm51bGxGdW5jdGlvbjtcbmV4cG9ydCBkZWZhdWx0IF9vbF9EaXNwb3NhYmxlXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL2Rpc3Bvc2FibGUuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfb2xfIGZyb20gJy4uL2luZGV4LmpzJztcbmltcG9ydCBfb2xfT2JqZWN0XyBmcm9tICcuLi9vYmplY3QuanMnO1xuaW1wb3J0IF9vbF9sYXllcl9Qcm9wZXJ0eV8gZnJvbSAnLi4vbGF5ZXIvcHJvcGVydHkuanMnO1xuaW1wb3J0IF9vbF9tYXRoXyBmcm9tICcuLi9tYXRoLmpzJztcbmltcG9ydCBfb2xfb2JqXyBmcm9tICcuLi9vYmouanMnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIEFic3RyYWN0IGJhc2UgY2xhc3M7IG5vcm1hbGx5IG9ubHkgdXNlZCBmb3IgY3JlYXRpbmcgc3ViY2xhc3NlcyBhbmQgbm90XG4gKiBpbnN0YW50aWF0ZWQgaW4gYXBwcy5cbiAqIE5vdGUgdGhhdCB3aXRoIGBvbC5sYXllci5CYXNlYCBhbmQgYWxsIGl0cyBzdWJjbGFzc2VzLCBhbnkgcHJvcGVydHkgc2V0IGluXG4gKiB0aGUgb3B0aW9ucyBpcyBzZXQgYXMgYSB7QGxpbmsgb2wuT2JqZWN0fSBwcm9wZXJ0eSBvbiB0aGUgbGF5ZXIgb2JqZWN0LCBzb1xuICogaXMgb2JzZXJ2YWJsZSwgYW5kIGhhcyBnZXQvc2V0IGFjY2Vzc29ycy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBhYnN0cmFjdFxuICogQGV4dGVuZHMge29sLk9iamVjdH1cbiAqIEBwYXJhbSB7b2x4LmxheWVyLkJhc2VPcHRpb25zfSBvcHRpb25zIExheWVyIG9wdGlvbnMuXG4gKiBAYXBpXG4gKi9cbnZhciBfb2xfbGF5ZXJfQmFzZV8gPSBmdW5jdGlvbihvcHRpb25zKSB7XG5cbiAgX29sX09iamVjdF8uY2FsbCh0aGlzKTtcblxuICAvKipcbiAgICogQHR5cGUge09iamVjdC48c3RyaW5nLCAqPn1cbiAgICovXG4gIHZhciBwcm9wZXJ0aWVzID0gX29sX29ial8uYXNzaWduKHt9LCBvcHRpb25zKTtcbiAgcHJvcGVydGllc1tfb2xfbGF5ZXJfUHJvcGVydHlfLk9QQUNJVFldID1cbiAgICAgIG9wdGlvbnMub3BhY2l0eSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5vcGFjaXR5IDogMTtcbiAgcHJvcGVydGllc1tfb2xfbGF5ZXJfUHJvcGVydHlfLlZJU0lCTEVdID1cbiAgICAgIG9wdGlvbnMudmlzaWJsZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy52aXNpYmxlIDogdHJ1ZTtcbiAgcHJvcGVydGllc1tfb2xfbGF5ZXJfUHJvcGVydHlfLlpfSU5ERVhdID1cbiAgICAgIG9wdGlvbnMuekluZGV4ICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLnpJbmRleCA6IDA7XG4gIHByb3BlcnRpZXNbX29sX2xheWVyX1Byb3BlcnR5Xy5NQVhfUkVTT0xVVElPTl0gPVxuICAgICAgb3B0aW9ucy5tYXhSZXNvbHV0aW9uICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1heFJlc29sdXRpb24gOiBJbmZpbml0eTtcbiAgcHJvcGVydGllc1tfb2xfbGF5ZXJfUHJvcGVydHlfLk1JTl9SRVNPTFVUSU9OXSA9XG4gICAgICBvcHRpb25zLm1pblJlc29sdXRpb24gIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubWluUmVzb2x1dGlvbiA6IDA7XG5cbiAgdGhpcy5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7b2wuTGF5ZXJTdGF0ZX1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHRoaXMuc3RhdGVfID0gLyoqIEB0eXBlIHtvbC5MYXllclN0YXRlfSAqLyAoe1xuICAgIGxheWVyOiAvKiogQHR5cGUge29sLmxheWVyLkxheWVyfSAqLyAodGhpcyksXG4gICAgbWFuYWdlZDogdHJ1ZVxuICB9KTtcblxuICAvKipcbiAgICogVGhlIGxheWVyIHR5cGUuXG4gICAqIEB0eXBlIHtvbC5MYXllclR5cGV9XG4gICAqIEBwcm90ZWN0ZWQ7XG4gICAqL1xuICB0aGlzLnR5cGU7XG5cbn07XG5cbl9vbF8uaW5oZXJpdHMoX29sX2xheWVyX0Jhc2VfLCBfb2xfT2JqZWN0Xyk7XG5cblxuLyoqXG4gKiBHZXQgdGhlIGxheWVyIHR5cGUgKHVzZWQgd2hlbiBjcmVhdGluZyBhIGxheWVyIHJlbmRlcmVyKS5cbiAqIEByZXR1cm4ge29sLkxheWVyVHlwZX0gVGhlIGxheWVyIHR5cGUuXG4gKi9cbl9vbF9sYXllcl9CYXNlXy5wcm90b3R5cGUuZ2V0VHlwZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy50eXBlO1xufTtcblxuXG4vKipcbiAqIEByZXR1cm4ge29sLkxheWVyU3RhdGV9IExheWVyIHN0YXRlLlxuICovXG5fb2xfbGF5ZXJfQmFzZV8ucHJvdG90eXBlLmdldExheWVyU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zdGF0ZV8ub3BhY2l0eSA9IF9vbF9tYXRoXy5jbGFtcCh0aGlzLmdldE9wYWNpdHkoKSwgMCwgMSk7XG4gIHRoaXMuc3RhdGVfLnNvdXJjZVN0YXRlID0gdGhpcy5nZXRTb3VyY2VTdGF0ZSgpO1xuICB0aGlzLnN0YXRlXy52aXNpYmxlID0gdGhpcy5nZXRWaXNpYmxlKCk7XG4gIHRoaXMuc3RhdGVfLmV4dGVudCA9IHRoaXMuZ2V0RXh0ZW50KCk7XG4gIHRoaXMuc3RhdGVfLnpJbmRleCA9IHRoaXMuZ2V0WkluZGV4KCk7XG4gIHRoaXMuc3RhdGVfLm1heFJlc29sdXRpb24gPSB0aGlzLmdldE1heFJlc29sdXRpb24oKTtcbiAgdGhpcy5zdGF0ZV8ubWluUmVzb2x1dGlvbiA9IE1hdGgubWF4KHRoaXMuZ2V0TWluUmVzb2x1dGlvbigpLCAwKTtcblxuICByZXR1cm4gdGhpcy5zdGF0ZV87XG59O1xuXG5cbi8qKlxuICogQGFic3RyYWN0XG4gKiBAcGFyYW0ge0FycmF5LjxvbC5sYXllci5MYXllcj49fSBvcHRfYXJyYXkgQXJyYXkgb2YgbGF5ZXJzICh0byBiZVxuICogICAgIG1vZGlmaWVkIGluIHBsYWNlKS5cbiAqIEByZXR1cm4ge0FycmF5LjxvbC5sYXllci5MYXllcj59IEFycmF5IG9mIGxheWVycy5cbiAqL1xuX29sX2xheWVyX0Jhc2VfLnByb3RvdHlwZS5nZXRMYXllcnNBcnJheSA9IGZ1bmN0aW9uKG9wdF9hcnJheSkge307XG5cblxuLyoqXG4gKiBAYWJzdHJhY3RcbiAqIEBwYXJhbSB7QXJyYXkuPG9sLkxheWVyU3RhdGU+PX0gb3B0X3N0YXRlcyBPcHRpb25hbCBsaXN0IG9mIGxheWVyXG4gKiAgICAgc3RhdGVzICh0byBiZSBtb2RpZmllZCBpbiBwbGFjZSkuXG4gKiBAcmV0dXJuIHtBcnJheS48b2wuTGF5ZXJTdGF0ZT59IExpc3Qgb2YgbGF5ZXIgc3RhdGVzLlxuICovXG5fb2xfbGF5ZXJfQmFzZV8ucHJvdG90eXBlLmdldExheWVyU3RhdGVzQXJyYXkgPSBmdW5jdGlvbihvcHRfc3RhdGVzKSB7fTtcblxuXG4vKipcbiAqIFJldHVybiB0aGUge0BsaW5rIG9sLkV4dGVudCBleHRlbnR9IG9mIHRoZSBsYXllciBvciBgdW5kZWZpbmVkYCBpZiBpdFxuICogd2lsbCBiZSB2aXNpYmxlIHJlZ2FyZGxlc3Mgb2YgZXh0ZW50LlxuICogQHJldHVybiB7b2wuRXh0ZW50fHVuZGVmaW5lZH0gVGhlIGxheWVyIGV4dGVudC5cbiAqIEBvYnNlcnZhYmxlXG4gKiBAYXBpXG4gKi9cbl9vbF9sYXllcl9CYXNlXy5wcm90b3R5cGUuZ2V0RXh0ZW50ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAoXG4gIC8qKiBAdHlwZSB7b2wuRXh0ZW50fHVuZGVmaW5lZH0gKi8gdGhpcy5nZXQoX29sX2xheWVyX1Byb3BlcnR5Xy5FWFRFTlQpXG4gICk7XG59O1xuXG5cbi8qKlxuICogUmV0dXJuIHRoZSBtYXhpbXVtIHJlc29sdXRpb24gb2YgdGhlIGxheWVyLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbWF4aW11bSByZXNvbHV0aW9uIG9mIHRoZSBsYXllci5cbiAqIEBvYnNlcnZhYmxlXG4gKiBAYXBpXG4gKi9cbl9vbF9sYXllcl9CYXNlXy5wcm90b3R5cGUuZ2V0TWF4UmVzb2x1dGlvbiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gKFxuICAvKiogQHR5cGUge251bWJlcn0gKi8gdGhpcy5nZXQoX29sX2xheWVyX1Byb3BlcnR5Xy5NQVhfUkVTT0xVVElPTilcbiAgKTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm4gdGhlIG1pbmltdW0gcmVzb2x1dGlvbiBvZiB0aGUgbGF5ZXIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBtaW5pbXVtIHJlc29sdXRpb24gb2YgdGhlIGxheWVyLlxuICogQG9ic2VydmFibGVcbiAqIEBhcGlcbiAqL1xuX29sX2xheWVyX0Jhc2VfLnByb3RvdHlwZS5nZXRNaW5SZXNvbHV0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAoXG4gIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyB0aGlzLmdldChfb2xfbGF5ZXJfUHJvcGVydHlfLk1JTl9SRVNPTFVUSU9OKVxuICApO1xufTtcblxuXG4vKipcbiAqIFJldHVybiB0aGUgb3BhY2l0eSBvZiB0aGUgbGF5ZXIgKGJldHdlZW4gMCBhbmQgMSkuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBvcGFjaXR5IG9mIHRoZSBsYXllci5cbiAqIEBvYnNlcnZhYmxlXG4gKiBAYXBpXG4gKi9cbl9vbF9sYXllcl9CYXNlXy5wcm90b3R5cGUuZ2V0T3BhY2l0eSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gKFxuICAvKiogQHR5cGUge251bWJlcn0gKi8gdGhpcy5nZXQoX29sX2xheWVyX1Byb3BlcnR5Xy5PUEFDSVRZKVxuICApO1xufTtcblxuXG4vKipcbiAqIEBhYnN0cmFjdFxuICogQHJldHVybiB7b2wuc291cmNlLlN0YXRlfSBTb3VyY2Ugc3RhdGUuXG4gKi9cbl9vbF9sYXllcl9CYXNlXy5wcm90b3R5cGUuZ2V0U291cmNlU3RhdGUgPSBmdW5jdGlvbigpIHt9O1xuXG5cbi8qKlxuICogUmV0dXJuIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBsYXllciAoYHRydWVgIG9yIGBmYWxzZWApLlxuICogQHJldHVybiB7Ym9vbGVhbn0gVGhlIHZpc2liaWxpdHkgb2YgdGhlIGxheWVyLlxuICogQG9ic2VydmFibGVcbiAqIEBhcGlcbiAqL1xuX29sX2xheWVyX0Jhc2VfLnByb3RvdHlwZS5nZXRWaXNpYmxlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAoXG4gIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi8gdGhpcy5nZXQoX29sX2xheWVyX1Byb3BlcnR5Xy5WSVNJQkxFKVxuICApO1xufTtcblxuXG4vKipcbiAqIFJldHVybiB0aGUgWi1pbmRleCBvZiB0aGUgbGF5ZXIsIHdoaWNoIGlzIHVzZWQgdG8gb3JkZXIgbGF5ZXJzIGJlZm9yZVxuICogcmVuZGVyaW5nLiBUaGUgZGVmYXVsdCBaLWluZGV4IGlzIDAuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBaLWluZGV4IG9mIHRoZSBsYXllci5cbiAqIEBvYnNlcnZhYmxlXG4gKiBAYXBpXG4gKi9cbl9vbF9sYXllcl9CYXNlXy5wcm90b3R5cGUuZ2V0WkluZGV4ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAoXG4gIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyB0aGlzLmdldChfb2xfbGF5ZXJfUHJvcGVydHlfLlpfSU5ERVgpXG4gICk7XG59O1xuXG5cbi8qKlxuICogU2V0IHRoZSBleHRlbnQgYXQgd2hpY2ggdGhlIGxheWVyIGlzIHZpc2libGUuICBJZiBgdW5kZWZpbmVkYCwgdGhlIGxheWVyXG4gKiB3aWxsIGJlIHZpc2libGUgYXQgYWxsIGV4dGVudHMuXG4gKiBAcGFyYW0ge29sLkV4dGVudHx1bmRlZmluZWR9IGV4dGVudCBUaGUgZXh0ZW50IG9mIHRoZSBsYXllci5cbiAqIEBvYnNlcnZhYmxlXG4gKiBAYXBpXG4gKi9cbl9vbF9sYXllcl9CYXNlXy5wcm90b3R5cGUuc2V0RXh0ZW50ID0gZnVuY3Rpb24oZXh0ZW50KSB7XG4gIHRoaXMuc2V0KF9vbF9sYXllcl9Qcm9wZXJ0eV8uRVhURU5ULCBleHRlbnQpO1xufTtcblxuXG4vKipcbiAqIFNldCB0aGUgbWF4aW11bSByZXNvbHV0aW9uIGF0IHdoaWNoIHRoZSBsYXllciBpcyB2aXNpYmxlLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heFJlc29sdXRpb24gVGhlIG1heGltdW0gcmVzb2x1dGlvbiBvZiB0aGUgbGF5ZXIuXG4gKiBAb2JzZXJ2YWJsZVxuICogQGFwaVxuICovXG5fb2xfbGF5ZXJfQmFzZV8ucHJvdG90eXBlLnNldE1heFJlc29sdXRpb24gPSBmdW5jdGlvbihtYXhSZXNvbHV0aW9uKSB7XG4gIHRoaXMuc2V0KF9vbF9sYXllcl9Qcm9wZXJ0eV8uTUFYX1JFU09MVVRJT04sIG1heFJlc29sdXRpb24pO1xufTtcblxuXG4vKipcbiAqIFNldCB0aGUgbWluaW11bSByZXNvbHV0aW9uIGF0IHdoaWNoIHRoZSBsYXllciBpcyB2aXNpYmxlLlxuICogQHBhcmFtIHtudW1iZXJ9IG1pblJlc29sdXRpb24gVGhlIG1pbmltdW0gcmVzb2x1dGlvbiBvZiB0aGUgbGF5ZXIuXG4gKiBAb2JzZXJ2YWJsZVxuICogQGFwaVxuICovXG5fb2xfbGF5ZXJfQmFzZV8ucHJvdG90eXBlLnNldE1pblJlc29sdXRpb24gPSBmdW5jdGlvbihtaW5SZXNvbHV0aW9uKSB7XG4gIHRoaXMuc2V0KF9vbF9sYXllcl9Qcm9wZXJ0eV8uTUlOX1JFU09MVVRJT04sIG1pblJlc29sdXRpb24pO1xufTtcblxuXG4vKipcbiAqIFNldCB0aGUgb3BhY2l0eSBvZiB0aGUgbGF5ZXIsIGFsbG93ZWQgdmFsdWVzIHJhbmdlIGZyb20gMCB0byAxLlxuICogQHBhcmFtIHtudW1iZXJ9IG9wYWNpdHkgVGhlIG9wYWNpdHkgb2YgdGhlIGxheWVyLlxuICogQG9ic2VydmFibGVcbiAqIEBhcGlcbiAqL1xuX29sX2xheWVyX0Jhc2VfLnByb3RvdHlwZS5zZXRPcGFjaXR5ID0gZnVuY3Rpb24ob3BhY2l0eSkge1xuICB0aGlzLnNldChfb2xfbGF5ZXJfUHJvcGVydHlfLk9QQUNJVFksIG9wYWNpdHkpO1xufTtcblxuXG4vKipcbiAqIFNldCB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgbGF5ZXIgKGB0cnVlYCBvciBgZmFsc2VgKS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gdmlzaWJsZSBUaGUgdmlzaWJpbGl0eSBvZiB0aGUgbGF5ZXIuXG4gKiBAb2JzZXJ2YWJsZVxuICogQGFwaVxuICovXG5fb2xfbGF5ZXJfQmFzZV8ucHJvdG90eXBlLnNldFZpc2libGUgPSBmdW5jdGlvbih2aXNpYmxlKSB7XG4gIHRoaXMuc2V0KF9vbF9sYXllcl9Qcm9wZXJ0eV8uVklTSUJMRSwgdmlzaWJsZSk7XG59O1xuXG5cbi8qKlxuICogU2V0IFotaW5kZXggb2YgdGhlIGxheWVyLCB3aGljaCBpcyB1c2VkIHRvIG9yZGVyIGxheWVycyBiZWZvcmUgcmVuZGVyaW5nLlxuICogVGhlIGRlZmF1bHQgWi1pbmRleCBpcyAwLlxuICogQHBhcmFtIHtudW1iZXJ9IHppbmRleCBUaGUgei1pbmRleCBvZiB0aGUgbGF5ZXIuXG4gKiBAb2JzZXJ2YWJsZVxuICogQGFwaVxuICovXG5fb2xfbGF5ZXJfQmFzZV8ucHJvdG90eXBlLnNldFpJbmRleCA9IGZ1bmN0aW9uKHppbmRleCkge1xuICB0aGlzLnNldChfb2xfbGF5ZXJfUHJvcGVydHlfLlpfSU5ERVgsIHppbmRleCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgX29sX2xheWVyX0Jhc2VfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvbGF5ZXIvYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF9vbF8gZnJvbSAnLi9pbmRleC5qcyc7XG5cbi8qKlxuICogRXJyb3Igb2JqZWN0IHRocm93biB3aGVuIGFuIGFzc2VydGlvbiBmYWlsZWQuIFRoaXMgaXMgYW4gRUNNQS0yNjIgRXJyb3IsXG4gKiBleHRlbmRlZCB3aXRoIGEgYGNvZGVgIHByb3BlcnR5LlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRXJyb3J9XG4gKiBAY29uc3RydWN0b3JcbiAqIEBleHRlbmRzIHtFcnJvcn1cbiAqIEBpbXBsZW1lbnRzIHtvbGkuQXNzZXJ0aW9uRXJyb3J9XG4gKiBAcGFyYW0ge251bWJlcn0gY29kZSBFcnJvciBjb2RlLlxuICovXG52YXIgX29sX0Fzc2VydGlvbkVycm9yXyA9IGZ1bmN0aW9uKGNvZGUpIHtcblxuICB2YXIgcGF0aCA9IF9vbF8uVkVSU0lPTiA/IF9vbF8uVkVSU0lPTi5zcGxpdCgnLScpWzBdIDogJ2xhdGVzdCc7XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICB0aGlzLm1lc3NhZ2UgPSAnQXNzZXJ0aW9uIGZhaWxlZC4gU2VlIGh0dHBzOi8vb3BlbmxheWVycy5vcmcvZW4vJyArIHBhdGggK1xuICAgICAgJy9kb2MvZXJyb3JzLyMnICsgY29kZSArICcgZm9yIGRldGFpbHMuJztcblxuICAvKipcbiAgICogRXJyb3IgY29kZS4gVGhlIG1lYW5pbmcgb2YgdGhlIGNvZGUgY2FuIGJlIGZvdW5kIG9uXG4gICAqIHtAbGluayBodHRwczovL29wZW5sYXllcnMub3JnL2VuL2xhdGVzdC9kb2MvZXJyb3JzL30gKHJlcGxhY2UgYGxhdGVzdGAgd2l0aFxuICAgKiB0aGUgdmVyc2lvbiBmb3VuZCBpbiB0aGUgT3BlbkxheWVycyBzY3JpcHQncyBoZWFkZXIgY29tbWVudCBpZiBhIHZlcnNpb25cbiAgICogb3RoZXIgdGhhbiB0aGUgbGF0ZXN0IGlzIHVzZWQpLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAYXBpXG4gICAqL1xuICB0aGlzLmNvZGUgPSBjb2RlO1xuXG4gIHRoaXMubmFtZSA9ICdBc3NlcnRpb25FcnJvcic7XG5cbn07XG5cbl9vbF8uaW5oZXJpdHMoX29sX0Fzc2VydGlvbkVycm9yXywgRXJyb3IpO1xuZXhwb3J0IGRlZmF1bHQgX29sX0Fzc2VydGlvbkVycm9yXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL2Fzc2VydGlvbmVycm9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbnZhciBfb2xfcmVuZGVyX0V2ZW50VHlwZV8gPSB7XG4gIC8qKlxuICAgKiBAZXZlbnQgb2wucmVuZGVyLkV2ZW50I3Bvc3Rjb21wb3NlXG4gICAqIEBhcGlcbiAgICovXG4gIFBPU1RDT01QT1NFOiAncG9zdGNvbXBvc2UnLFxuICAvKipcbiAgICogQGV2ZW50IG9sLnJlbmRlci5FdmVudCNwcmVjb21wb3NlXG4gICAqIEBhcGlcbiAgICovXG4gIFBSRUNPTVBPU0U6ICdwcmVjb21wb3NlJyxcbiAgLyoqXG4gICAqIEBldmVudCBvbC5yZW5kZXIuRXZlbnQjcmVuZGVyXG4gICAqIEBhcGlcbiAgICovXG4gIFJFTkRFUjogJ3JlbmRlcidcbn07XG5cbmV4cG9ydCBkZWZhdWx0IF9vbF9yZW5kZXJfRXZlbnRUeXBlXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL3JlbmRlci9ldmVudHR5cGUuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfb2xfIGZyb20gJy4uL2luZGV4LmpzJztcbmltcG9ydCBfb2xfSW1hZ2VDYW52YXNfIGZyb20gJy4uL2ltYWdlY2FudmFzLmpzJztcbmltcG9ydCBfb2xfZXh0ZW50XyBmcm9tICcuLi9leHRlbnQuanMnO1xuaW1wb3J0IF9vbF9zb3VyY2VfSW1hZ2VfIGZyb20gJy4uL3NvdXJjZS9pbWFnZS5qcyc7XG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogQmFzZSBjbGFzcyBmb3IgaW1hZ2Ugc291cmNlcyB3aGVyZSBhIGNhbnZhcyBlbGVtZW50IGlzIHRoZSBpbWFnZS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBleHRlbmRzIHtvbC5zb3VyY2UuSW1hZ2V9XG4gKiBAcGFyYW0ge29seC5zb3VyY2UuSW1hZ2VDYW52YXNPcHRpb25zfSBvcHRpb25zIENvbnN0cnVjdG9yIG9wdGlvbnMuXG4gKiBAYXBpXG4gKi9cbnZhciBfb2xfc291cmNlX0ltYWdlQ2FudmFzXyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblxuICBfb2xfc291cmNlX0ltYWdlXy5jYWxsKHRoaXMsIHtcbiAgICBhdHRyaWJ1dGlvbnM6IG9wdGlvbnMuYXR0cmlidXRpb25zLFxuICAgIGxvZ286IG9wdGlvbnMubG9nbyxcbiAgICBwcm9qZWN0aW9uOiBvcHRpb25zLnByb2plY3Rpb24sXG4gICAgcmVzb2x1dGlvbnM6IG9wdGlvbnMucmVzb2x1dGlvbnMsXG4gICAgc3RhdGU6IG9wdGlvbnMuc3RhdGVcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtvbC5DYW52YXNGdW5jdGlvblR5cGV9XG4gICAqL1xuICB0aGlzLmNhbnZhc0Z1bmN0aW9uXyA9IG9wdGlvbnMuY2FudmFzRnVuY3Rpb247XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtvbC5JbWFnZUNhbnZhc31cbiAgICovXG4gIHRoaXMuY2FudmFzXyA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICB0aGlzLnJlbmRlcmVkUmV2aXNpb25fID0gMDtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIHRoaXMucmF0aW9fID0gb3B0aW9ucy5yYXRpbyAhPT0gdW5kZWZpbmVkID9cbiAgICBvcHRpb25zLnJhdGlvIDogMS41O1xuXG59O1xuXG5fb2xfLmluaGVyaXRzKF9vbF9zb3VyY2VfSW1hZ2VDYW52YXNfLCBfb2xfc291cmNlX0ltYWdlXyk7XG5cblxuLyoqXG4gKiBAaW5oZXJpdERvY1xuICovXG5fb2xfc291cmNlX0ltYWdlQ2FudmFzXy5wcm90b3R5cGUuZ2V0SW1hZ2VJbnRlcm5hbCA9IGZ1bmN0aW9uKGV4dGVudCwgcmVzb2x1dGlvbiwgcGl4ZWxSYXRpbywgcHJvamVjdGlvbikge1xuICByZXNvbHV0aW9uID0gdGhpcy5maW5kTmVhcmVzdFJlc29sdXRpb24ocmVzb2x1dGlvbik7XG5cbiAgdmFyIGNhbnZhcyA9IHRoaXMuY2FudmFzXztcbiAgaWYgKGNhbnZhcyAmJlxuICAgICAgdGhpcy5yZW5kZXJlZFJldmlzaW9uXyA9PSB0aGlzLmdldFJldmlzaW9uKCkgJiZcbiAgICAgIGNhbnZhcy5nZXRSZXNvbHV0aW9uKCkgPT0gcmVzb2x1dGlvbiAmJlxuICAgICAgY2FudmFzLmdldFBpeGVsUmF0aW8oKSA9PSBwaXhlbFJhdGlvICYmXG4gICAgICBfb2xfZXh0ZW50Xy5jb250YWluc0V4dGVudChjYW52YXMuZ2V0RXh0ZW50KCksIGV4dGVudCkpIHtcbiAgICByZXR1cm4gY2FudmFzO1xuICB9XG5cbiAgZXh0ZW50ID0gZXh0ZW50LnNsaWNlKCk7XG4gIF9vbF9leHRlbnRfLnNjYWxlRnJvbUNlbnRlcihleHRlbnQsIHRoaXMucmF0aW9fKTtcbiAgdmFyIHdpZHRoID0gX29sX2V4dGVudF8uZ2V0V2lkdGgoZXh0ZW50KSAvIHJlc29sdXRpb247XG4gIHZhciBoZWlnaHQgPSBfb2xfZXh0ZW50Xy5nZXRIZWlnaHQoZXh0ZW50KSAvIHJlc29sdXRpb247XG4gIHZhciBzaXplID0gW3dpZHRoICogcGl4ZWxSYXRpbywgaGVpZ2h0ICogcGl4ZWxSYXRpb107XG5cbiAgdmFyIGNhbnZhc0VsZW1lbnQgPSB0aGlzLmNhbnZhc0Z1bmN0aW9uXyhcbiAgICAgIGV4dGVudCwgcmVzb2x1dGlvbiwgcGl4ZWxSYXRpbywgc2l6ZSwgcHJvamVjdGlvbik7XG4gIGlmIChjYW52YXNFbGVtZW50KSB7XG4gICAgY2FudmFzID0gbmV3IF9vbF9JbWFnZUNhbnZhc18oZXh0ZW50LCByZXNvbHV0aW9uLCBwaXhlbFJhdGlvLCBjYW52YXNFbGVtZW50KTtcbiAgfVxuICB0aGlzLmNhbnZhc18gPSBjYW52YXM7XG4gIHRoaXMucmVuZGVyZWRSZXZpc2lvbl8gPSB0aGlzLmdldFJldmlzaW9uKCk7XG5cbiAgcmV0dXJuIGNhbnZhcztcbn07XG5leHBvcnQgZGVmYXVsdCBfb2xfc291cmNlX0ltYWdlQ2FudmFzXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL3NvdXJjZS9pbWFnZWNhbnZhcy5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF9vbF8gZnJvbSAnLi9pbmRleC5qcyc7XG5pbXBvcnQgX29sX0ltYWdlQmFzZV8gZnJvbSAnLi9pbWFnZWJhc2UuanMnO1xuaW1wb3J0IF9vbF9JbWFnZVN0YXRlXyBmcm9tICcuL2ltYWdlc3RhdGUuanMnO1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVuZHMge29sLkltYWdlQmFzZX1cbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IHJlc29sdXRpb24gUmVzb2x1dGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBwaXhlbFJhdGlvIFBpeGVsIHJhdGlvLlxuICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzIENhbnZhcy5cbiAqIEBwYXJhbSB7b2wuSW1hZ2VDYW52YXNMb2FkZXI9fSBvcHRfbG9hZGVyIE9wdGlvbmFsIGxvYWRlciBmdW5jdGlvbiB0b1xuICogICAgIHN1cHBvcnQgYXN5bmNocm9ub3VzIGNhbnZhcyBkcmF3aW5nLlxuICovXG52YXIgX29sX0ltYWdlQ2FudmFzXyA9IGZ1bmN0aW9uKGV4dGVudCwgcmVzb2x1dGlvbiwgcGl4ZWxSYXRpbywgY2FudmFzLCBvcHRfbG9hZGVyKSB7XG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsIGNhbnZhcyBsb2FkZXIgZnVuY3Rpb24uXG4gICAqIEB0eXBlIHs/b2wuSW1hZ2VDYW52YXNMb2FkZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB0aGlzLmxvYWRlcl8gPSBvcHRfbG9hZGVyICE9PSB1bmRlZmluZWQgPyBvcHRfbG9hZGVyIDogbnVsbDtcblxuICB2YXIgc3RhdGUgPSBvcHRfbG9hZGVyICE9PSB1bmRlZmluZWQgP1xuICAgIF9vbF9JbWFnZVN0YXRlXy5JRExFIDogX29sX0ltYWdlU3RhdGVfLkxPQURFRDtcblxuICBfb2xfSW1hZ2VCYXNlXy5jYWxsKHRoaXMsIGV4dGVudCwgcmVzb2x1dGlvbiwgcGl4ZWxSYXRpbywgc3RhdGUpO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7SFRNTENhbnZhc0VsZW1lbnR9XG4gICAqL1xuICB0aGlzLmNhbnZhc18gPSBjYW52YXM7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtFcnJvcn1cbiAgICovXG4gIHRoaXMuZXJyb3JfID0gbnVsbDtcblxufTtcblxuX29sXy5pbmhlcml0cyhfb2xfSW1hZ2VDYW52YXNfLCBfb2xfSW1hZ2VCYXNlXyk7XG5cblxuLyoqXG4gKiBHZXQgYW55IGVycm9yIGFzc29jaWF0ZWQgd2l0aCBhc3luY2hyb25vdXMgcmVuZGVyaW5nLlxuICogQHJldHVybiB7RXJyb3J9IEFueSBlcnJvciB0aGF0IG9jY3VycmVkIGR1cmluZyByZW5kZXJpbmcuXG4gKi9cbl9vbF9JbWFnZUNhbnZhc18ucHJvdG90eXBlLmdldEVycm9yID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmVycm9yXztcbn07XG5cblxuLyoqXG4gKiBIYW5kbGUgYXN5bmMgZHJhd2luZyBjb21wbGV0ZS5cbiAqIEBwYXJhbSB7RXJyb3J9IGVyciBBbnkgZXJyb3IgZHVyaW5nIGRyYXdpbmcuXG4gKiBAcHJpdmF0ZVxuICovXG5fb2xfSW1hZ2VDYW52YXNfLnByb3RvdHlwZS5oYW5kbGVMb2FkXyA9IGZ1bmN0aW9uKGVycikge1xuICBpZiAoZXJyKSB7XG4gICAgdGhpcy5lcnJvcl8gPSBlcnI7XG4gICAgdGhpcy5zdGF0ZSA9IF9vbF9JbWFnZVN0YXRlXy5FUlJPUjtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnN0YXRlID0gX29sX0ltYWdlU3RhdGVfLkxPQURFRDtcbiAgfVxuICB0aGlzLmNoYW5nZWQoKTtcbn07XG5cblxuLyoqXG4gKiBAaW5oZXJpdERvY1xuICovXG5fb2xfSW1hZ2VDYW52YXNfLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLnN0YXRlID09IF9vbF9JbWFnZVN0YXRlXy5JRExFKSB7XG4gICAgdGhpcy5zdGF0ZSA9IF9vbF9JbWFnZVN0YXRlXy5MT0FESU5HO1xuICAgIHRoaXMuY2hhbmdlZCgpO1xuICAgIHRoaXMubG9hZGVyXyh0aGlzLmhhbmRsZUxvYWRfLmJpbmQodGhpcykpO1xuICB9XG59O1xuXG5cbi8qKlxuICogQGluaGVyaXREb2NcbiAqL1xuX29sX0ltYWdlQ2FudmFzXy5wcm90b3R5cGUuZ2V0SW1hZ2UgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuY2FudmFzXztcbn07XG5leHBvcnQgZGVmYXVsdCBfb2xfSW1hZ2VDYW52YXNfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvaW1hZ2VjYW52YXMuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUmVsYXRpb25zaGlwIHRvIGFuIGV4dGVudC5cbiAqIEBlbnVtIHtudW1iZXJ9XG4gKi9cbnZhciBfb2xfZXh0ZW50X1JlbGF0aW9uc2hpcF8gPSB7XG4gIFVOS05PV046IDAsXG4gIElOVEVSU0VDVElORzogMSxcbiAgQUJPVkU6IDIsXG4gIFJJR0hUOiA0LFxuICBCRUxPVzogOCxcbiAgTEVGVDogMTZcbn07XG5cbmV4cG9ydCBkZWZhdWx0IF9vbF9leHRlbnRfUmVsYXRpb25zaGlwXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL2V4dGVudC9yZWxhdGlvbnNoaXAuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfb2xfIGZyb20gJy4uL2luZGV4LmpzJztcbmltcG9ydCBfb2xfSW1hZ2VTdGF0ZV8gZnJvbSAnLi4vaW1hZ2VzdGF0ZS5qcyc7XG5pbXBvcnQgX29sX2FycmF5XyBmcm9tICcuLi9hcnJheS5qcyc7XG5pbXBvcnQgX29sX2V2ZW50c19FdmVudF8gZnJvbSAnLi4vZXZlbnRzL2V2ZW50LmpzJztcbmltcG9ydCBfb2xfZXh0ZW50XyBmcm9tICcuLi9leHRlbnQuanMnO1xuaW1wb3J0IF9vbF9wcm9qXyBmcm9tICcuLi9wcm9qLmpzJztcbmltcG9ydCBfb2xfcmVwcm9qX0ltYWdlXyBmcm9tICcuLi9yZXByb2ovaW1hZ2UuanMnO1xuaW1wb3J0IF9vbF9zb3VyY2VfU291cmNlXyBmcm9tICcuLi9zb3VyY2Uvc291cmNlLmpzJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBBYnN0cmFjdCBiYXNlIGNsYXNzOyBub3JtYWxseSBvbmx5IHVzZWQgZm9yIGNyZWF0aW5nIHN1YmNsYXNzZXMgYW5kIG5vdFxuICogaW5zdGFudGlhdGVkIGluIGFwcHMuXG4gKiBCYXNlIGNsYXNzIGZvciBzb3VyY2VzIHByb3ZpZGluZyBhIHNpbmdsZSBpbWFnZS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBhYnN0cmFjdFxuICogQGV4dGVuZHMge29sLnNvdXJjZS5Tb3VyY2V9XG4gKiBAcGFyYW0ge29sLlNvdXJjZUltYWdlT3B0aW9uc30gb3B0aW9ucyBTaW5nbGUgaW1hZ2Ugc291cmNlIG9wdGlvbnMuXG4gKiBAYXBpXG4gKi9cbnZhciBfb2xfc291cmNlX0ltYWdlXyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgX29sX3NvdXJjZV9Tb3VyY2VfLmNhbGwodGhpcywge1xuICAgIGF0dHJpYnV0aW9uczogb3B0aW9ucy5hdHRyaWJ1dGlvbnMsXG4gICAgZXh0ZW50OiBvcHRpb25zLmV4dGVudCxcbiAgICBsb2dvOiBvcHRpb25zLmxvZ28sXG4gICAgcHJvamVjdGlvbjogb3B0aW9ucy5wcm9qZWN0aW9uLFxuICAgIHN0YXRlOiBvcHRpb25zLnN0YXRlXG4gIH0pO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7QXJyYXkuPG51bWJlcj59XG4gICAqL1xuICB0aGlzLnJlc29sdXRpb25zXyA9IG9wdGlvbnMucmVzb2x1dGlvbnMgIT09IHVuZGVmaW5lZCA/XG4gICAgb3B0aW9ucy5yZXNvbHV0aW9ucyA6IG51bGw7XG5cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge29sLnJlcHJvai5JbWFnZX1cbiAgICovXG4gIHRoaXMucmVwcm9qZWN0ZWRJbWFnZV8gPSBudWxsO1xuXG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICB0aGlzLnJlcHJvamVjdGVkUmV2aXNpb25fID0gMDtcbn07XG5cbl9vbF8uaW5oZXJpdHMoX29sX3NvdXJjZV9JbWFnZV8sIF9vbF9zb3VyY2VfU291cmNlXyk7XG5cblxuLyoqXG4gKiBAcmV0dXJuIHtBcnJheS48bnVtYmVyPn0gUmVzb2x1dGlvbnMuXG4gKiBAb3ZlcnJpZGVcbiAqL1xuX29sX3NvdXJjZV9JbWFnZV8ucHJvdG90eXBlLmdldFJlc29sdXRpb25zID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnJlc29sdXRpb25zXztcbn07XG5cblxuLyoqXG4gKiBAcHJvdGVjdGVkXG4gKiBAcGFyYW0ge251bWJlcn0gcmVzb2x1dGlvbiBSZXNvbHV0aW9uLlxuICogQHJldHVybiB7bnVtYmVyfSBSZXNvbHV0aW9uLlxuICovXG5fb2xfc291cmNlX0ltYWdlXy5wcm90b3R5cGUuZmluZE5lYXJlc3RSZXNvbHV0aW9uID0gZnVuY3Rpb24ocmVzb2x1dGlvbikge1xuICBpZiAodGhpcy5yZXNvbHV0aW9uc18pIHtcbiAgICB2YXIgaWR4ID0gX29sX2FycmF5Xy5saW5lYXJGaW5kTmVhcmVzdCh0aGlzLnJlc29sdXRpb25zXywgcmVzb2x1dGlvbiwgMCk7XG4gICAgcmVzb2x1dGlvbiA9IHRoaXMucmVzb2x1dGlvbnNfW2lkeF07XG4gIH1cbiAgcmV0dXJuIHJlc29sdXRpb247XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gcmVzb2x1dGlvbiBSZXNvbHV0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IHBpeGVsUmF0aW8gUGl4ZWwgcmF0aW8uXG4gKiBAcGFyYW0ge29sLnByb2ouUHJvamVjdGlvbn0gcHJvamVjdGlvbiBQcm9qZWN0aW9uLlxuICogQHJldHVybiB7b2wuSW1hZ2VCYXNlfSBTaW5nbGUgaW1hZ2UuXG4gKi9cbl9vbF9zb3VyY2VfSW1hZ2VfLnByb3RvdHlwZS5nZXRJbWFnZSA9IGZ1bmN0aW9uKGV4dGVudCwgcmVzb2x1dGlvbiwgcGl4ZWxSYXRpbywgcHJvamVjdGlvbikge1xuICB2YXIgc291cmNlUHJvamVjdGlvbiA9IHRoaXMuZ2V0UHJvamVjdGlvbigpO1xuICBpZiAoIV9vbF8uRU5BQkxFX1JBU1RFUl9SRVBST0pFQ1RJT04gfHxcbiAgICAgICFzb3VyY2VQcm9qZWN0aW9uIHx8XG4gICAgICAhcHJvamVjdGlvbiB8fFxuICAgICAgX29sX3Byb2pfLmVxdWl2YWxlbnQoc291cmNlUHJvamVjdGlvbiwgcHJvamVjdGlvbikpIHtcbiAgICBpZiAoc291cmNlUHJvamVjdGlvbikge1xuICAgICAgcHJvamVjdGlvbiA9IHNvdXJjZVByb2plY3Rpb247XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmdldEltYWdlSW50ZXJuYWwoZXh0ZW50LCByZXNvbHV0aW9uLCBwaXhlbFJhdGlvLCBwcm9qZWN0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAodGhpcy5yZXByb2plY3RlZEltYWdlXykge1xuICAgICAgaWYgKHRoaXMucmVwcm9qZWN0ZWRSZXZpc2lvbl8gPT0gdGhpcy5nZXRSZXZpc2lvbigpICYmXG4gICAgICAgICAgX29sX3Byb2pfLmVxdWl2YWxlbnQoXG4gICAgICAgICAgICAgIHRoaXMucmVwcm9qZWN0ZWRJbWFnZV8uZ2V0UHJvamVjdGlvbigpLCBwcm9qZWN0aW9uKSAmJlxuICAgICAgICAgIHRoaXMucmVwcm9qZWN0ZWRJbWFnZV8uZ2V0UmVzb2x1dGlvbigpID09IHJlc29sdXRpb24gJiZcbiAgICAgICAgICBfb2xfZXh0ZW50Xy5lcXVhbHModGhpcy5yZXByb2plY3RlZEltYWdlXy5nZXRFeHRlbnQoKSwgZXh0ZW50KSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXByb2plY3RlZEltYWdlXztcbiAgICAgIH1cbiAgICAgIHRoaXMucmVwcm9qZWN0ZWRJbWFnZV8uZGlzcG9zZSgpO1xuICAgICAgdGhpcy5yZXByb2plY3RlZEltYWdlXyA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5yZXByb2plY3RlZEltYWdlXyA9IG5ldyBfb2xfcmVwcm9qX0ltYWdlXyhcbiAgICAgICAgc291cmNlUHJvamVjdGlvbiwgcHJvamVjdGlvbiwgZXh0ZW50LCByZXNvbHV0aW9uLCBwaXhlbFJhdGlvLFxuICAgICAgICBmdW5jdGlvbihleHRlbnQsIHJlc29sdXRpb24sIHBpeGVsUmF0aW8pIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5nZXRJbWFnZUludGVybmFsKGV4dGVudCwgcmVzb2x1dGlvbixcbiAgICAgICAgICAgICAgcGl4ZWxSYXRpbywgc291cmNlUHJvamVjdGlvbik7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgdGhpcy5yZXByb2plY3RlZFJldmlzaW9uXyA9IHRoaXMuZ2V0UmV2aXNpb24oKTtcblxuICAgIHJldHVybiB0aGlzLnJlcHJvamVjdGVkSW1hZ2VfO1xuICB9XG59O1xuXG5cbi8qKlxuICogQGFic3RyYWN0XG4gKiBAcGFyYW0ge29sLkV4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSByZXNvbHV0aW9uIFJlc29sdXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gcGl4ZWxSYXRpbyBQaXhlbCByYXRpby5cbiAqIEBwYXJhbSB7b2wucHJvai5Qcm9qZWN0aW9ufSBwcm9qZWN0aW9uIFByb2plY3Rpb24uXG4gKiBAcmV0dXJuIHtvbC5JbWFnZUJhc2V9IFNpbmdsZSBpbWFnZS5cbiAqIEBwcm90ZWN0ZWRcbiAqL1xuX29sX3NvdXJjZV9JbWFnZV8ucHJvdG90eXBlLmdldEltYWdlSW50ZXJuYWwgPSBmdW5jdGlvbihleHRlbnQsIHJlc29sdXRpb24sIHBpeGVsUmF0aW8sIHByb2plY3Rpb24pIHt9O1xuXG5cbi8qKlxuICogSGFuZGxlIGltYWdlIGNoYW5nZSBldmVudHMuXG4gKiBAcGFyYW0ge29sLmV2ZW50cy5FdmVudH0gZXZlbnQgRXZlbnQuXG4gKiBAcHJvdGVjdGVkXG4gKi9cbl9vbF9zb3VyY2VfSW1hZ2VfLnByb3RvdHlwZS5oYW5kbGVJbWFnZUNoYW5nZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIHZhciBpbWFnZSA9IC8qKiBAdHlwZSB7b2wuSW1hZ2V9ICovIChldmVudC50YXJnZXQpO1xuICBzd2l0Y2ggKGltYWdlLmdldFN0YXRlKCkpIHtcbiAgICBjYXNlIF9vbF9JbWFnZVN0YXRlXy5MT0FESU5HOlxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgIG5ldyBfb2xfc291cmNlX0ltYWdlXy5FdmVudChfb2xfc291cmNlX0ltYWdlXy5FdmVudFR5cGVfLklNQUdFTE9BRFNUQVJULFxuICAgICAgICAgICAgICBpbWFnZSkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBfb2xfSW1hZ2VTdGF0ZV8uTE9BREVEOlxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgIG5ldyBfb2xfc291cmNlX0ltYWdlXy5FdmVudChfb2xfc291cmNlX0ltYWdlXy5FdmVudFR5cGVfLklNQUdFTE9BREVORCxcbiAgICAgICAgICAgICAgaW1hZ2UpKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgX29sX0ltYWdlU3RhdGVfLkVSUk9SOlxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgIG5ldyBfb2xfc291cmNlX0ltYWdlXy5FdmVudChfb2xfc291cmNlX0ltYWdlXy5FdmVudFR5cGVfLklNQUdFTE9BREVSUk9SLFxuICAgICAgICAgICAgICBpbWFnZSkpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIHBhc3NcbiAgfVxufTtcblxuXG4vKipcbiAqIERlZmF1bHQgaW1hZ2UgbG9hZCBmdW5jdGlvbiBmb3IgaW1hZ2Ugc291cmNlcyB0aGF0IHVzZSBvbC5JbWFnZSBpbWFnZVxuICogaW5zdGFuY2VzLlxuICogQHBhcmFtIHtvbC5JbWFnZX0gaW1hZ2UgSW1hZ2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gc3JjIFNvdXJjZS5cbiAqL1xuX29sX3NvdXJjZV9JbWFnZV8uZGVmYXVsdEltYWdlTG9hZEZ1bmN0aW9uID0gZnVuY3Rpb24oaW1hZ2UsIHNyYykge1xuICBpbWFnZS5nZXRJbWFnZSgpLnNyYyA9IHNyYztcbn07XG5cblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBFdmVudHMgZW1pdHRlZCBieSB7QGxpbmsgb2wuc291cmNlLkltYWdlfSBpbnN0YW5jZXMgYXJlIGluc3RhbmNlcyBvZiB0aGlzXG4gKiB0eXBlLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVuZHMge29sLmV2ZW50cy5FdmVudH1cbiAqIEBpbXBsZW1lbnRzIHtvbGkuc291cmNlLkltYWdlRXZlbnR9XG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUeXBlLlxuICogQHBhcmFtIHtvbC5JbWFnZX0gaW1hZ2UgVGhlIGltYWdlLlxuICovXG5fb2xfc291cmNlX0ltYWdlXy5FdmVudCA9IGZ1bmN0aW9uKHR5cGUsIGltYWdlKSB7XG5cbiAgX29sX2V2ZW50c19FdmVudF8uY2FsbCh0aGlzLCB0eXBlKTtcblxuICAvKipcbiAgICogVGhlIGltYWdlIHJlbGF0ZWQgdG8gdGhlIGV2ZW50LlxuICAgKiBAdHlwZSB7b2wuSW1hZ2V9XG4gICAqIEBhcGlcbiAgICovXG4gIHRoaXMuaW1hZ2UgPSBpbWFnZTtcblxufTtcbl9vbF8uaW5oZXJpdHMoX29sX3NvdXJjZV9JbWFnZV8uRXZlbnQsIF9vbF9ldmVudHNfRXZlbnRfKTtcblxuXG4vKipcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKiBAcHJpdmF0ZVxuICovXG5fb2xfc291cmNlX0ltYWdlXy5FdmVudFR5cGVfID0ge1xuXG4gIC8qKlxuICAgKiBUcmlnZ2VyZWQgd2hlbiBhbiBpbWFnZSBzdGFydHMgbG9hZGluZy5cbiAgICogQGV2ZW50IG9sLnNvdXJjZS5JbWFnZS5FdmVudCNpbWFnZWxvYWRzdGFydFxuICAgKiBAYXBpXG4gICAqL1xuICBJTUFHRUxPQURTVEFSVDogJ2ltYWdlbG9hZHN0YXJ0JyxcblxuICAvKipcbiAgICogVHJpZ2dlcmVkIHdoZW4gYW4gaW1hZ2UgZmluaXNoZXMgbG9hZGluZy5cbiAgICogQGV2ZW50IG9sLnNvdXJjZS5JbWFnZS5FdmVudCNpbWFnZWxvYWRlbmRcbiAgICogQGFwaVxuICAgKi9cbiAgSU1BR0VMT0FERU5EOiAnaW1hZ2Vsb2FkZW5kJyxcblxuICAvKipcbiAgICogVHJpZ2dlcmVkIGlmIGltYWdlIGxvYWRpbmcgcmVzdWx0cyBpbiBhbiBlcnJvci5cbiAgICogQGV2ZW50IG9sLnNvdXJjZS5JbWFnZS5FdmVudCNpbWFnZWxvYWRlcnJvclxuICAgKiBAYXBpXG4gICAqL1xuICBJTUFHRUxPQURFUlJPUjogJ2ltYWdlbG9hZGVycm9yJ1xuXG59O1xuZXhwb3J0IGRlZmF1bHQgX29sX3NvdXJjZV9JbWFnZV87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9zb3VyY2UvaW1hZ2UuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIExhdGl0dWRlL2xvbmdpdHVkZSBzcGhlcmljYWwgZ2VvZGVzeSBmb3JtdWxhZSB0YWtlbiBmcm9tXG4gKiBodHRwOi8vd3d3Lm1vdmFibGUtdHlwZS5jby51ay9zY3JpcHRzL2xhdGxvbmcuaHRtbFxuICogTGljZW5zZWQgdW5kZXIgQ0MtQlktMy4wLlxuICovXG5cbmltcG9ydCBfb2xfbWF0aF8gZnJvbSAnLi9tYXRoLmpzJztcbmltcG9ydCBfb2xfZ2VvbV9HZW9tZXRyeVR5cGVfIGZyb20gJy4vZ2VvbS9nZW9tZXRyeXR5cGUuanMnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIENsYXNzIHRvIGNyZWF0ZSBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWQgd2l0aCB7QGxpbmtcbiAqIG9sLmdlb20uUG9seWdvbi5jaXJjdWxhcn0uXG4gKlxuICogRm9yIGV4YW1wbGUgdG8gY3JlYXRlIGEgc3BoZXJlIHdob3NlIHJhZGl1cyBpcyBlcXVhbCB0byB0aGUgc2VtaS1tYWpvclxuICogYXhpcyBvZiB0aGUgV0dTODQgZWxsaXBzb2lkOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgd2dzODRTcGhlcmU9IG5ldyBvbC5TcGhlcmUoNjM3ODEzNyk7XG4gKiBgYGBcbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgUmFkaXVzLlxuICogQGFwaVxuICovXG52YXIgX29sX1NwaGVyZV8gPSBmdW5jdGlvbihyYWRpdXMpIHtcblxuICAvKipcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuXG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgZ2VvZGVzaWMgYXJlYSBmb3IgYSBsaXN0IG9mIGNvb3JkaW5hdGVzLlxuICpcbiAqIFtSZWZlcmVuY2VdKGh0dHBzOi8vdHJzLW5ldy5qcGwubmFzYS5nb3YvaGFuZGxlLzIwMTQvNDA0MDkpXG4gKiBSb2JlcnQuIEcuIENoYW1iZXJsYWluIGFuZCBXaWxsaWFtIEguIER1cXVldHRlLCBcIlNvbWUgQWxnb3JpdGhtcyBmb3JcbiAqIFBvbHlnb25zIG9uIGEgU3BoZXJlXCIsIEpQTCBQdWJsaWNhdGlvbiAwNy0wMywgSmV0IFByb3B1bHNpb25cbiAqIExhYm9yYXRvcnksIFBhc2FkZW5hLCBDQSwgSnVuZSAyMDA3XG4gKlxuICogQHBhcmFtIHtBcnJheS48b2wuQ29vcmRpbmF0ZT59IGNvb3JkaW5hdGVzIExpc3Qgb2YgY29vcmRpbmF0ZXMgb2YgYSBsaW5lYXJcbiAqIHJpbmcuIElmIHRoZSByaW5nIGlzIG9yaWVudGVkIGNsb2Nrd2lzZSwgdGhlIGFyZWEgd2lsbCBiZSBwb3NpdGl2ZSxcbiAqIG90aGVyd2lzZSBpdCB3aWxsIGJlIG5lZ2F0aXZlLlxuICogQHJldHVybiB7bnVtYmVyfSBBcmVhLlxuICogQGFwaVxuICovXG5fb2xfU3BoZXJlXy5wcm90b3R5cGUuZ2VvZGVzaWNBcmVhID0gZnVuY3Rpb24oY29vcmRpbmF0ZXMpIHtcbiAgcmV0dXJuIF9vbF9TcGhlcmVfLmdldEFyZWFfKGNvb3JkaW5hdGVzLCB0aGlzLnJhZGl1cyk7XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgZGlzdGFuY2UgZnJvbSBjMSB0byBjMiB1c2luZyB0aGUgaGF2ZXJzaW5lIGZvcm11bGEuXG4gKlxuICogQHBhcmFtIHtvbC5Db29yZGluYXRlfSBjMSBDb29yZGluYXRlIDEuXG4gKiBAcGFyYW0ge29sLkNvb3JkaW5hdGV9IGMyIENvb3JkaW5hdGUgMi5cbiAqIEByZXR1cm4ge251bWJlcn0gSGF2ZXJzaW5lIGRpc3RhbmNlLlxuICogQGFwaVxuICovXG5fb2xfU3BoZXJlXy5wcm90b3R5cGUuaGF2ZXJzaW5lRGlzdGFuY2UgPSBmdW5jdGlvbihjMSwgYzIpIHtcbiAgcmV0dXJuIF9vbF9TcGhlcmVfLmdldERpc3RhbmNlXyhjMSwgYzIsIHRoaXMucmFkaXVzKTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjb29yZGluYXRlIGF0IHRoZSBnaXZlbiBkaXN0YW5jZSBhbmQgYmVhcmluZyBmcm9tIGBjMWAuXG4gKlxuICogQHBhcmFtIHtvbC5Db29yZGluYXRlfSBjMSBUaGUgb3JpZ2luIHBvaW50IChgW2xvbiwgbGF0XWAgaW4gZGVncmVlcykuXG4gKiBAcGFyYW0ge251bWJlcn0gZGlzdGFuY2UgVGhlIGdyZWF0LWNpcmNsZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBvcmlnaW5cbiAqICAgICBwb2ludCBhbmQgdGhlIHRhcmdldCBwb2ludC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiZWFyaW5nIFRoZSBiZWFyaW5nIChpbiByYWRpYW5zKS5cbiAqIEByZXR1cm4ge29sLkNvb3JkaW5hdGV9IFRoZSB0YXJnZXQgcG9pbnQuXG4gKi9cbl9vbF9TcGhlcmVfLnByb3RvdHlwZS5vZmZzZXQgPSBmdW5jdGlvbihjMSwgZGlzdGFuY2UsIGJlYXJpbmcpIHtcbiAgdmFyIGxhdDEgPSBfb2xfbWF0aF8udG9SYWRpYW5zKGMxWzFdKTtcbiAgdmFyIGxvbjEgPSBfb2xfbWF0aF8udG9SYWRpYW5zKGMxWzBdKTtcbiAgdmFyIGRCeVIgPSBkaXN0YW5jZSAvIHRoaXMucmFkaXVzO1xuICB2YXIgbGF0ID0gTWF0aC5hc2luKFxuICAgICAgTWF0aC5zaW4obGF0MSkgKiBNYXRoLmNvcyhkQnlSKSArXG4gICAgICBNYXRoLmNvcyhsYXQxKSAqIE1hdGguc2luKGRCeVIpICogTWF0aC5jb3MoYmVhcmluZykpO1xuICB2YXIgbG9uID0gbG9uMSArIE1hdGguYXRhbjIoXG4gICAgICBNYXRoLnNpbihiZWFyaW5nKSAqIE1hdGguc2luKGRCeVIpICogTWF0aC5jb3MobGF0MSksXG4gICAgICBNYXRoLmNvcyhkQnlSKSAtIE1hdGguc2luKGxhdDEpICogTWF0aC5zaW4obGF0KSk7XG4gIHJldHVybiBbX29sX21hdGhfLnRvRGVncmVlcyhsb24pLCBfb2xfbWF0aF8udG9EZWdyZWVzKGxhdCldO1xufTtcblxuXG4vKipcbiAqIFRoZSBtZWFuIEVhcnRoIHJhZGl1cyAoMS8zICogKDJhICsgYikpIGZvciB0aGUgV0dTODQgZWxsaXBzb2lkLlxuICogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRWFydGhfcmFkaXVzI01lYW5fcmFkaXVzXG4gKiBAdHlwZSB7bnVtYmVyfVxuICovXG5fb2xfU3BoZXJlXy5ERUZBVUxUX1JBRElVUyA9IDYzNzEwMDguODtcblxuXG4vKipcbiAqIEdldCB0aGUgc3BoZXJpY2FsIGxlbmd0aCBvZiBhIGdlb21ldHJ5LiAgVGhpcyBsZW5ndGggaXMgdGhlIHN1bSBvZiB0aGVcbiAqIGdyZWF0IGNpcmNsZSBkaXN0YW5jZXMgYmV0d2VlbiBjb29yZGluYXRlcy4gIEZvciBwb2x5Z29ucywgdGhlIGxlbmd0aCBpc1xuICogdGhlIHN1bSBvZiBhbGwgcmluZ3MuICBGb3IgcG9pbnRzLCB0aGUgbGVuZ3RoIGlzIHplcm8uICBGb3IgbXVsdGktcGFydFxuICogZ2VvbWV0cmllcywgdGhlIGxlbmd0aCBpcyB0aGUgc3VtIG9mIHRoZSBsZW5ndGggb2YgZWFjaCBwYXJ0LlxuICogQHBhcmFtIHtvbC5nZW9tLkdlb21ldHJ5fSBnZW9tZXRyeSBBIGdlb21ldHJ5LlxuICogQHBhcmFtIHtvbHguU3BoZXJlTWV0cmljT3B0aW9ucz19IG9wdF9vcHRpb25zIE9wdGlvbnMgZm9yIHRoZSBsZW5ndGhcbiAqICAgICBjYWxjdWxhdGlvbi4gIEJ5IGRlZmF1bHQsIGdlb21ldHJpZXMgYXJlIGFzc3VtZWQgdG8gYmUgaW4gJ0VQU0c6Mzg1NycuXG4gKiAgICAgWW91IGNhbiBjaGFuZ2UgdGhpcyBieSBwcm92aWRpbmcgYSBgcHJvamVjdGlvbmAgb3B0aW9uLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgc3BoZXJpY2FsIGxlbmd0aCAoaW4gbWV0ZXJzKS5cbiAqIEBhcGlcbiAqL1xuX29sX1NwaGVyZV8uZ2V0TGVuZ3RoID0gZnVuY3Rpb24oZ2VvbWV0cnksIG9wdF9vcHRpb25zKSB7XG4gIHZhciBvcHRpb25zID0gb3B0X29wdGlvbnMgfHwge307XG4gIHZhciByYWRpdXMgPSBvcHRpb25zLnJhZGl1cyB8fCBfb2xfU3BoZXJlXy5ERUZBVUxUX1JBRElVUztcbiAgdmFyIHByb2plY3Rpb24gPSBvcHRpb25zLnByb2plY3Rpb24gfHwgJ0VQU0c6Mzg1Nyc7XG4gIGdlb21ldHJ5ID0gZ2VvbWV0cnkuY2xvbmUoKS50cmFuc2Zvcm0ocHJvamVjdGlvbiwgJ0VQU0c6NDMyNicpO1xuICB2YXIgdHlwZSA9IGdlb21ldHJ5LmdldFR5cGUoKTtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBjb29yZGluYXRlcywgY29vcmRzLCBpLCBpaSwgaiwgamo7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgX29sX2dlb21fR2VvbWV0cnlUeXBlXy5QT0lOVDpcbiAgICBjYXNlIF9vbF9nZW9tX0dlb21ldHJ5VHlwZV8uTVVMVElfUE9JTlQ6IHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIF9vbF9nZW9tX0dlb21ldHJ5VHlwZV8uTElORV9TVFJJTkc6XG4gICAgY2FzZSBfb2xfZ2VvbV9HZW9tZXRyeVR5cGVfLkxJTkVBUl9SSU5HOiB7XG4gICAgICBjb29yZGluYXRlcyA9IC8qKiBAdHlwZSB7b2wuZ2VvbS5TaW1wbGVHZW9tZXRyeX0gKi8gKGdlb21ldHJ5KS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgbGVuZ3RoID0gX29sX1NwaGVyZV8uZ2V0TGVuZ3RoXyhjb29yZGluYXRlcywgcmFkaXVzKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIF9vbF9nZW9tX0dlb21ldHJ5VHlwZV8uTVVMVElfTElORV9TVFJJTkc6XG4gICAgY2FzZSBfb2xfZ2VvbV9HZW9tZXRyeVR5cGVfLlBPTFlHT046IHtcbiAgICAgIGNvb3JkaW5hdGVzID0gLyoqIEB0eXBlIHtvbC5nZW9tLlNpbXBsZUdlb21ldHJ5fSAqLyAoZ2VvbWV0cnkpLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICBmb3IgKGkgPSAwLCBpaSA9IGNvb3JkaW5hdGVzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgICAgbGVuZ3RoICs9IF9vbF9TcGhlcmVfLmdldExlbmd0aF8oY29vcmRpbmF0ZXNbaV0sIHJhZGl1cyk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBfb2xfZ2VvbV9HZW9tZXRyeVR5cGVfLk1VTFRJX1BPTFlHT046IHtcbiAgICAgIGNvb3JkaW5hdGVzID0gLyoqIEB0eXBlIHtvbC5nZW9tLlNpbXBsZUdlb21ldHJ5fSAqLyAoZ2VvbWV0cnkpLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICBmb3IgKGkgPSAwLCBpaSA9IGNvb3JkaW5hdGVzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgICAgY29vcmRzID0gY29vcmRpbmF0ZXNbaV07XG4gICAgICAgIGZvciAoaiA9IDAsIGpqID0gY29vcmRzLmxlbmd0aDsgaiA8IGpqOyArK2opIHtcbiAgICAgICAgICBsZW5ndGggKz0gX29sX1NwaGVyZV8uZ2V0TGVuZ3RoXyhjb29yZHNbal0sIHJhZGl1cyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIF9vbF9nZW9tX0dlb21ldHJ5VHlwZV8uR0VPTUVUUllfQ09MTEVDVElPTjoge1xuICAgICAgdmFyIGdlb21ldHJpZXMgPSAvKiogQHR5cGUge29sLmdlb20uR2VvbWV0cnlDb2xsZWN0aW9ufSAqLyAoZ2VvbWV0cnkpLmdldEdlb21ldHJpZXMoKTtcbiAgICAgIGZvciAoaSA9IDAsIGlpID0gZ2VvbWV0cmllcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgIGxlbmd0aCArPSBfb2xfU3BoZXJlXy5nZXRMZW5ndGgoZ2VvbWV0cmllc1tpXSwgb3B0X29wdGlvbnMpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgZ2VvbWV0cnkgdHlwZTogJyArIHR5cGUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbGVuZ3RoO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgY3VtdWxhdGl2ZSBncmVhdCBjaXJjbGUgbGVuZ3RoIG9mIGxpbmVzdHJpbmcgY29vcmRpbmF0ZXMgKGdlb2dyYXBoaWMpLlxuICogQHBhcmFtIHtBcnJheX0gY29vcmRpbmF0ZXMgTGluZXN0cmluZyBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgVGhlIHNwaGVyZSByYWRpdXMgdG8gdXNlLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbGVuZ3RoIChpbiBtZXRlcnMpLlxuICovXG5fb2xfU3BoZXJlXy5nZXRMZW5ndGhfID0gZnVuY3Rpb24oY29vcmRpbmF0ZXMsIHJhZGl1cykge1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgZm9yICh2YXIgaSA9IDAsIGlpID0gY29vcmRpbmF0ZXMubGVuZ3RoOyBpIDwgaWkgLSAxOyArK2kpIHtcbiAgICBsZW5ndGggKz0gX29sX1NwaGVyZV8uZ2V0RGlzdGFuY2VfKGNvb3JkaW5hdGVzW2ldLCBjb29yZGluYXRlc1tpICsgMV0sIHJhZGl1cyk7XG4gIH1cbiAgcmV0dXJuIGxlbmd0aDtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIGdyZWF0IGNpcmNsZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBnZW9ncmFwaGljIGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtBcnJheX0gYzEgU3RhcnRpbmcgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7QXJyYXl9IGMyIEVuZGluZyBjb29yZGluYXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1cyBUaGUgc3BoZXJlIHJhZGl1cyB0byB1c2UuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBncmVhdCBjaXJjbGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgcG9pbnRzIChpbiBtZXRlcnMpLlxuICovXG5fb2xfU3BoZXJlXy5nZXREaXN0YW5jZV8gPSBmdW5jdGlvbihjMSwgYzIsIHJhZGl1cykge1xuICB2YXIgbGF0MSA9IF9vbF9tYXRoXy50b1JhZGlhbnMoYzFbMV0pO1xuICB2YXIgbGF0MiA9IF9vbF9tYXRoXy50b1JhZGlhbnMoYzJbMV0pO1xuICB2YXIgZGVsdGFMYXRCeTIgPSAobGF0MiAtIGxhdDEpIC8gMjtcbiAgdmFyIGRlbHRhTG9uQnkyID0gX29sX21hdGhfLnRvUmFkaWFucyhjMlswXSAtIGMxWzBdKSAvIDI7XG4gIHZhciBhID0gTWF0aC5zaW4oZGVsdGFMYXRCeTIpICogTWF0aC5zaW4oZGVsdGFMYXRCeTIpICtcbiAgICAgIE1hdGguc2luKGRlbHRhTG9uQnkyKSAqIE1hdGguc2luKGRlbHRhTG9uQnkyKSAqXG4gICAgICBNYXRoLmNvcyhsYXQxKSAqIE1hdGguY29zKGxhdDIpO1xuICByZXR1cm4gMiAqIHJhZGl1cyAqIE1hdGguYXRhbjIoTWF0aC5zcXJ0KGEpLCBNYXRoLnNxcnQoMSAtIGEpKTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIHNwaGVyaWNhbCBhcmVhIG9mIGEgZ2VvbWV0cnkuICBUaGlzIGlzIHRoZSBhcmVhIChpbiBtZXRlcnMpIGFzc3VtaW5nXG4gKiB0aGF0IHBvbHlnb24gZWRnZXMgYXJlIHNlZ21lbnRzIG9mIGdyZWF0IGNpcmNsZXMgb24gYSBzcGhlcmUuXG4gKiBAcGFyYW0ge29sLmdlb20uR2VvbWV0cnl9IGdlb21ldHJ5IEEgZ2VvbWV0cnkuXG4gKiBAcGFyYW0ge29seC5TcGhlcmVNZXRyaWNPcHRpb25zPX0gb3B0X29wdGlvbnMgT3B0aW9ucyBmb3IgdGhlIGFyZWFcbiAqICAgICBjYWxjdWxhdGlvbi4gIEJ5IGRlZmF1bHQsIGdlb21ldHJpZXMgYXJlIGFzc3VtZWQgdG8gYmUgaW4gJ0VQU0c6Mzg1NycuXG4gKiAgICAgWW91IGNhbiBjaGFuZ2UgdGhpcyBieSBwcm92aWRpbmcgYSBgcHJvamVjdGlvbmAgb3B0aW9uLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgc3BoZXJpY2FsIGFyZWEgKGluIHNxdWFyZSBtZXRlcnMpLlxuICogQGFwaVxuICovXG5fb2xfU3BoZXJlXy5nZXRBcmVhID0gZnVuY3Rpb24oZ2VvbWV0cnksIG9wdF9vcHRpb25zKSB7XG4gIHZhciBvcHRpb25zID0gb3B0X29wdGlvbnMgfHwge307XG4gIHZhciByYWRpdXMgPSBvcHRpb25zLnJhZGl1cyB8fCBfb2xfU3BoZXJlXy5ERUZBVUxUX1JBRElVUztcbiAgdmFyIHByb2plY3Rpb24gPSBvcHRpb25zLnByb2plY3Rpb24gfHwgJ0VQU0c6Mzg1Nyc7XG4gIGdlb21ldHJ5ID0gZ2VvbWV0cnkuY2xvbmUoKS50cmFuc2Zvcm0ocHJvamVjdGlvbiwgJ0VQU0c6NDMyNicpO1xuICB2YXIgdHlwZSA9IGdlb21ldHJ5LmdldFR5cGUoKTtcbiAgdmFyIGFyZWEgPSAwO1xuICB2YXIgY29vcmRpbmF0ZXMsIGNvb3JkcywgaSwgaWksIGosIGpqO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIF9vbF9nZW9tX0dlb21ldHJ5VHlwZV8uUE9JTlQ6XG4gICAgY2FzZSBfb2xfZ2VvbV9HZW9tZXRyeVR5cGVfLk1VTFRJX1BPSU5UOlxuICAgIGNhc2UgX29sX2dlb21fR2VvbWV0cnlUeXBlXy5MSU5FX1NUUklORzpcbiAgICBjYXNlIF9vbF9nZW9tX0dlb21ldHJ5VHlwZV8uTVVMVElfTElORV9TVFJJTkc6XG4gICAgY2FzZSBfb2xfZ2VvbV9HZW9tZXRyeVR5cGVfLkxJTkVBUl9SSU5HOiB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBfb2xfZ2VvbV9HZW9tZXRyeVR5cGVfLlBPTFlHT046IHtcbiAgICAgIGNvb3JkaW5hdGVzID0gLyoqIEB0eXBlIHtvbC5nZW9tLlBvbHlnb259ICovIChnZW9tZXRyeSkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgIGFyZWEgPSBNYXRoLmFicyhfb2xfU3BoZXJlXy5nZXRBcmVhXyhjb29yZGluYXRlc1swXSwgcmFkaXVzKSk7XG4gICAgICBmb3IgKGkgPSAxLCBpaSA9IGNvb3JkaW5hdGVzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgICAgYXJlYSAtPSBNYXRoLmFicyhfb2xfU3BoZXJlXy5nZXRBcmVhXyhjb29yZGluYXRlc1tpXSwgcmFkaXVzKSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBfb2xfZ2VvbV9HZW9tZXRyeVR5cGVfLk1VTFRJX1BPTFlHT046IHtcbiAgICAgIGNvb3JkaW5hdGVzID0gLyoqIEB0eXBlIHtvbC5nZW9tLlNpbXBsZUdlb21ldHJ5fSAqLyAoZ2VvbWV0cnkpLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICBmb3IgKGkgPSAwLCBpaSA9IGNvb3JkaW5hdGVzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgICAgY29vcmRzID0gY29vcmRpbmF0ZXNbaV07XG4gICAgICAgIGFyZWEgKz0gTWF0aC5hYnMoX29sX1NwaGVyZV8uZ2V0QXJlYV8oY29vcmRzWzBdLCByYWRpdXMpKTtcbiAgICAgICAgZm9yIChqID0gMSwgamogPSBjb29yZHMubGVuZ3RoOyBqIDwgamo7ICsraikge1xuICAgICAgICAgIGFyZWEgLT0gTWF0aC5hYnMoX29sX1NwaGVyZV8uZ2V0QXJlYV8oY29vcmRzW2pdLCByYWRpdXMpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgX29sX2dlb21fR2VvbWV0cnlUeXBlXy5HRU9NRVRSWV9DT0xMRUNUSU9OOiB7XG4gICAgICB2YXIgZ2VvbWV0cmllcyA9IC8qKiBAdHlwZSB7b2wuZ2VvbS5HZW9tZXRyeUNvbGxlY3Rpb259ICovIChnZW9tZXRyeSkuZ2V0R2VvbWV0cmllcygpO1xuICAgICAgZm9yIChpID0gMCwgaWkgPSBnZW9tZXRyaWVzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgICAgYXJlYSArPSBfb2xfU3BoZXJlXy5nZXRBcmVhKGdlb21ldHJpZXNbaV0sIG9wdF9vcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIGdlb21ldHJ5IHR5cGU6ICcgKyB0eXBlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFyZWE7XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgc3BoZXJpY2FsIGFyZWEgZm9yIGEgbGlzdCBvZiBjb29yZGluYXRlcy5cbiAqXG4gKiBbUmVmZXJlbmNlXShodHRwczovL3Rycy1uZXcuanBsLm5hc2EuZ292L2hhbmRsZS8yMDE0LzQwNDA5KVxuICogUm9iZXJ0LiBHLiBDaGFtYmVybGFpbiBhbmQgV2lsbGlhbSBILiBEdXF1ZXR0ZSwgXCJTb21lIEFsZ29yaXRobXMgZm9yXG4gKiBQb2x5Z29ucyBvbiBhIFNwaGVyZVwiLCBKUEwgUHVibGljYXRpb24gMDctMDMsIEpldCBQcm9wdWxzaW9uXG4gKiBMYWJvcmF0b3J5LCBQYXNhZGVuYSwgQ0EsIEp1bmUgMjAwN1xuICpcbiAqIEBwYXJhbSB7QXJyYXkuPG9sLkNvb3JkaW5hdGU+fSBjb29yZGluYXRlcyBMaXN0IG9mIGNvb3JkaW5hdGVzIG9mIGEgbGluZWFyXG4gKiByaW5nLiBJZiB0aGUgcmluZyBpcyBvcmllbnRlZCBjbG9ja3dpc2UsIHRoZSBhcmVhIHdpbGwgYmUgcG9zaXRpdmUsXG4gKiBvdGhlcndpc2UgaXQgd2lsbCBiZSBuZWdhdGl2ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgVGhlIHNwaGVyZSByYWRpdXMuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFyZWEgKGluIHNxdWFyZSBtZXRlcnMpLlxuICovXG5fb2xfU3BoZXJlXy5nZXRBcmVhXyA9IGZ1bmN0aW9uKGNvb3JkaW5hdGVzLCByYWRpdXMpIHtcbiAgdmFyIGFyZWEgPSAwLCBsZW4gPSBjb29yZGluYXRlcy5sZW5ndGg7XG4gIHZhciB4MSA9IGNvb3JkaW5hdGVzW2xlbiAtIDFdWzBdO1xuICB2YXIgeTEgPSBjb29yZGluYXRlc1tsZW4gLSAxXVsxXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciB4MiA9IGNvb3JkaW5hdGVzW2ldWzBdLCB5MiA9IGNvb3JkaW5hdGVzW2ldWzFdO1xuICAgIGFyZWEgKz0gX29sX21hdGhfLnRvUmFkaWFucyh4MiAtIHgxKSAqXG4gICAgICAgICgyICsgTWF0aC5zaW4oX29sX21hdGhfLnRvUmFkaWFucyh5MSkpICtcbiAgICAgICAgTWF0aC5zaW4oX29sX21hdGhfLnRvUmFkaWFucyh5MikpKTtcbiAgICB4MSA9IHgyO1xuICAgIHkxID0geTI7XG4gIH1cbiAgcmV0dXJuIGFyZWEgKiByYWRpdXMgKiByYWRpdXMgLyAyLjA7XG59O1xuZXhwb3J0IGRlZmF1bHQgX29sX1NwaGVyZV87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9zcGhlcmUuanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhlIGdlb21ldHJ5IHR5cGUuIE9uZSBvZiBgJ1BvaW50J2AsIGAnTGluZVN0cmluZydgLCBgJ0xpbmVhclJpbmcnYCxcbiAqIGAnUG9seWdvbidgLCBgJ011bHRpUG9pbnQnYCwgYCdNdWx0aUxpbmVTdHJpbmcnYCwgYCdNdWx0aVBvbHlnb24nYCxcbiAqIGAnR2VvbWV0cnlDb2xsZWN0aW9uJ2AsIGAnQ2lyY2xlJ2AuXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG52YXIgX29sX2dlb21fR2VvbWV0cnlUeXBlXyA9IHtcbiAgUE9JTlQ6ICdQb2ludCcsXG4gIExJTkVfU1RSSU5HOiAnTGluZVN0cmluZycsXG4gIExJTkVBUl9SSU5HOiAnTGluZWFyUmluZycsXG4gIFBPTFlHT046ICdQb2x5Z29uJyxcbiAgTVVMVElfUE9JTlQ6ICdNdWx0aVBvaW50JyxcbiAgTVVMVElfTElORV9TVFJJTkc6ICdNdWx0aUxpbmVTdHJpbmcnLFxuICBNVUxUSV9QT0xZR09OOiAnTXVsdGlQb2x5Z29uJyxcbiAgR0VPTUVUUllfQ09MTEVDVElPTjogJ0dlb21ldHJ5Q29sbGVjdGlvbicsXG4gIENJUkNMRTogJ0NpcmNsZSdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IF9vbF9nZW9tX0dlb21ldHJ5VHlwZV87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9nZW9tL2dlb21ldHJ5dHlwZS5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF9vbF8gZnJvbSAnLi4vaW5kZXguanMnO1xuaW1wb3J0IF9vbF9tYXRoXyBmcm9tICcuLi9tYXRoLmpzJztcbmltcG9ydCBfb2xfcHJval9Qcm9qZWN0aW9uXyBmcm9tICcuLi9wcm9qL3Byb2plY3Rpb24uanMnO1xuaW1wb3J0IF9vbF9wcm9qX1VuaXRzXyBmcm9tICcuLi9wcm9qL3VuaXRzLmpzJztcbnZhciBfb2xfcHJval9FUFNHMzg1N18gPSB7fTtcblxuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIFByb2plY3Rpb24gb2JqZWN0IGZvciB3ZWIvc3BoZXJpY2FsIE1lcmNhdG9yIChFUFNHOjM4NTcpLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVuZHMge29sLnByb2ouUHJvamVjdGlvbn1cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlIENvZGUuXG4gKiBAcHJpdmF0ZVxuICovXG5fb2xfcHJval9FUFNHMzg1N18uUHJvamVjdGlvbl8gPSBmdW5jdGlvbihjb2RlKSB7XG4gIF9vbF9wcm9qX1Byb2plY3Rpb25fLmNhbGwodGhpcywge1xuICAgIGNvZGU6IGNvZGUsXG4gICAgdW5pdHM6IF9vbF9wcm9qX1VuaXRzXy5NRVRFUlMsXG4gICAgZXh0ZW50OiBfb2xfcHJval9FUFNHMzg1N18uRVhURU5ULFxuICAgIGdsb2JhbDogdHJ1ZSxcbiAgICB3b3JsZEV4dGVudDogX29sX3Byb2pfRVBTRzM4NTdfLldPUkxEX0VYVEVOVCxcbiAgICBnZXRQb2ludFJlc29sdXRpb246IGZ1bmN0aW9uKHJlc29sdXRpb24sIHBvaW50KSB7XG4gICAgICByZXR1cm4gcmVzb2x1dGlvbiAvIF9vbF9tYXRoXy5jb3NoKHBvaW50WzFdIC8gX29sX3Byb2pfRVBTRzM4NTdfLlJBRElVUyk7XG4gICAgfVxuICB9KTtcbn07XG5fb2xfLmluaGVyaXRzKF9vbF9wcm9qX0VQU0czODU3Xy5Qcm9qZWN0aW9uXywgX29sX3Byb2pfUHJvamVjdGlvbl8pO1xuXG5cbi8qKlxuICogUmFkaXVzIG9mIFdHUzg0IHNwaGVyZVxuICpcbiAqIEBjb25zdFxuICogQHR5cGUge251bWJlcn1cbiAqL1xuX29sX3Byb2pfRVBTRzM4NTdfLlJBRElVUyA9IDYzNzgxMzc7XG5cblxuLyoqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbl9vbF9wcm9qX0VQU0czODU3Xy5IQUxGX1NJWkUgPSBNYXRoLlBJICogX29sX3Byb2pfRVBTRzM4NTdfLlJBRElVUztcblxuXG4vKipcbiAqIEBjb25zdFxuICogQHR5cGUge29sLkV4dGVudH1cbiAqL1xuX29sX3Byb2pfRVBTRzM4NTdfLkVYVEVOVCA9IFtcbiAgLV9vbF9wcm9qX0VQU0czODU3Xy5IQUxGX1NJWkUsIC1fb2xfcHJval9FUFNHMzg1N18uSEFMRl9TSVpFLFxuICBfb2xfcHJval9FUFNHMzg1N18uSEFMRl9TSVpFLCBfb2xfcHJval9FUFNHMzg1N18uSEFMRl9TSVpFXG5dO1xuXG5cbi8qKlxuICogQGNvbnN0XG4gKiBAdHlwZSB7b2wuRXh0ZW50fVxuICovXG5fb2xfcHJval9FUFNHMzg1N18uV09STERfRVhURU5UID0gWy0xODAsIC04NSwgMTgwLCA4NV07XG5cblxuLyoqXG4gKiBQcm9qZWN0aW9ucyBlcXVhbCB0byBFUFNHOjM4NTcuXG4gKlxuICogQGNvbnN0XG4gKiBAdHlwZSB7QXJyYXkuPG9sLnByb2ouUHJvamVjdGlvbj59XG4gKi9cbl9vbF9wcm9qX0VQU0czODU3Xy5QUk9KRUNUSU9OUyA9IFtcbiAgbmV3IF9vbF9wcm9qX0VQU0czODU3Xy5Qcm9qZWN0aW9uXygnRVBTRzozODU3JyksXG4gIG5ldyBfb2xfcHJval9FUFNHMzg1N18uUHJvamVjdGlvbl8oJ0VQU0c6MTAyMTAwJyksXG4gIG5ldyBfb2xfcHJval9FUFNHMzg1N18uUHJvamVjdGlvbl8oJ0VQU0c6MTAyMTEzJyksXG4gIG5ldyBfb2xfcHJval9FUFNHMzg1N18uUHJvamVjdGlvbl8oJ0VQU0c6OTAwOTEzJyksXG4gIG5ldyBfb2xfcHJval9FUFNHMzg1N18uUHJvamVjdGlvbl8oJ3VybjpvZ2M6ZGVmOmNyczpFUFNHOjYuMTg6MzozODU3JyksXG4gIG5ldyBfb2xfcHJval9FUFNHMzg1N18uUHJvamVjdGlvbl8oJ3VybjpvZ2M6ZGVmOmNyczpFUFNHOjozODU3JyksXG4gIG5ldyBfb2xfcHJval9FUFNHMzg1N18uUHJvamVjdGlvbl8oJ2h0dHA6Ly93d3cub3Blbmdpcy5uZXQvZ21sL3Nycy9lcHNnLnhtbCMzODU3Jylcbl07XG5cblxuLyoqXG4gKiBUcmFuc2Zvcm1hdGlvbiBmcm9tIEVQU0c6NDMyNiB0byBFUFNHOjM4NTcuXG4gKlxuICogQHBhcmFtIHtBcnJheS48bnVtYmVyPn0gaW5wdXQgSW5wdXQgYXJyYXkgb2YgY29vcmRpbmF0ZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge0FycmF5LjxudW1iZXI+PX0gb3B0X291dHB1dCBPdXRwdXQgYXJyYXkgb2YgY29vcmRpbmF0ZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge251bWJlcj19IG9wdF9kaW1lbnNpb24gRGltZW5zaW9uIChkZWZhdWx0IGlzIGAyYCkuXG4gKiBAcmV0dXJuIHtBcnJheS48bnVtYmVyPn0gT3V0cHV0IGFycmF5IG9mIGNvb3JkaW5hdGUgdmFsdWVzLlxuICovXG5fb2xfcHJval9FUFNHMzg1N18uZnJvbUVQU0c0MzI2ID0gZnVuY3Rpb24oaW5wdXQsIG9wdF9vdXRwdXQsIG9wdF9kaW1lbnNpb24pIHtcbiAgdmFyIGxlbmd0aCA9IGlucHV0Lmxlbmd0aCxcbiAgICAgIGRpbWVuc2lvbiA9IG9wdF9kaW1lbnNpb24gPiAxID8gb3B0X2RpbWVuc2lvbiA6IDIsXG4gICAgICBvdXRwdXQgPSBvcHRfb3V0cHV0O1xuICBpZiAob3V0cHV0ID09PSB1bmRlZmluZWQpIHtcbiAgICBpZiAoZGltZW5zaW9uID4gMikge1xuICAgICAgLy8gcHJlc2VydmUgdmFsdWVzIGJleW9uZCBzZWNvbmQgZGltZW5zaW9uXG4gICAgICBvdXRwdXQgPSBpbnB1dC5zbGljZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICB9XG4gIH1cbiAgdmFyIGhhbGZTaXplID0gX29sX3Byb2pfRVBTRzM4NTdfLkhBTEZfU0laRTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gZGltZW5zaW9uKSB7XG4gICAgb3V0cHV0W2ldID0gaGFsZlNpemUgKiBpbnB1dFtpXSAvIDE4MDtcbiAgICB2YXIgeSA9IF9vbF9wcm9qX0VQU0czODU3Xy5SQURJVVMgKlxuICAgICAgICBNYXRoLmxvZyhNYXRoLnRhbihNYXRoLlBJICogKGlucHV0W2kgKyAxXSArIDkwKSAvIDM2MCkpO1xuICAgIGlmICh5ID4gaGFsZlNpemUpIHtcbiAgICAgIHkgPSBoYWxmU2l6ZTtcbiAgICB9IGVsc2UgaWYgKHkgPCAtaGFsZlNpemUpIHtcbiAgICAgIHkgPSAtaGFsZlNpemU7XG4gICAgfVxuICAgIG91dHB1dFtpICsgMV0gPSB5O1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59O1xuXG5cbi8qKlxuICogVHJhbnNmb3JtYXRpb24gZnJvbSBFUFNHOjM4NTcgdG8gRVBTRzo0MzI2LlxuICpcbiAqIEBwYXJhbSB7QXJyYXkuPG51bWJlcj59IGlucHV0IElucHV0IGFycmF5IG9mIGNvb3JkaW5hdGUgdmFsdWVzLlxuICogQHBhcmFtIHtBcnJheS48bnVtYmVyPj19IG9wdF9vdXRwdXQgT3V0cHV0IGFycmF5IG9mIGNvb3JkaW5hdGUgdmFsdWVzLlxuICogQHBhcmFtIHtudW1iZXI9fSBvcHRfZGltZW5zaW9uIERpbWVuc2lvbiAoZGVmYXVsdCBpcyBgMmApLlxuICogQHJldHVybiB7QXJyYXkuPG51bWJlcj59IE91dHB1dCBhcnJheSBvZiBjb29yZGluYXRlIHZhbHVlcy5cbiAqL1xuX29sX3Byb2pfRVBTRzM4NTdfLnRvRVBTRzQzMjYgPSBmdW5jdGlvbihpbnB1dCwgb3B0X291dHB1dCwgb3B0X2RpbWVuc2lvbikge1xuICB2YXIgbGVuZ3RoID0gaW5wdXQubGVuZ3RoLFxuICAgICAgZGltZW5zaW9uID0gb3B0X2RpbWVuc2lvbiA+IDEgPyBvcHRfZGltZW5zaW9uIDogMixcbiAgICAgIG91dHB1dCA9IG9wdF9vdXRwdXQ7XG4gIGlmIChvdXRwdXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChkaW1lbnNpb24gPiAyKSB7XG4gICAgICAvLyBwcmVzZXJ2ZSB2YWx1ZXMgYmV5b25kIHNlY29uZCBkaW1lbnNpb25cbiAgICAgIG91dHB1dCA9IGlucHV0LnNsaWNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dCA9IG5ldyBBcnJheShsZW5ndGgpO1xuICAgIH1cbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSBkaW1lbnNpb24pIHtcbiAgICBvdXRwdXRbaV0gPSAxODAgKiBpbnB1dFtpXSAvIF9vbF9wcm9qX0VQU0czODU3Xy5IQUxGX1NJWkU7XG4gICAgb3V0cHV0W2kgKyAxXSA9IDM2MCAqIE1hdGguYXRhbihcbiAgICAgICAgTWF0aC5leHAoaW5wdXRbaSArIDFdIC8gX29sX3Byb2pfRVBTRzM4NTdfLlJBRElVUykpIC8gTWF0aC5QSSAtIDkwO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59O1xuZXhwb3J0IGRlZmF1bHQgX29sX3Byb2pfRVBTRzM4NTdfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvcHJvai9lcHNnMzg1Ny5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF9vbF8gZnJvbSAnLi4vaW5kZXguanMnO1xuaW1wb3J0IF9vbF9wcm9qX1Byb2plY3Rpb25fIGZyb20gJy4uL3Byb2ovcHJvamVjdGlvbi5qcyc7XG5pbXBvcnQgX29sX3Byb2pfVW5pdHNfIGZyb20gJy4uL3Byb2ovdW5pdHMuanMnO1xudmFyIF9vbF9wcm9qX0VQU0c0MzI2XyA9IHt9O1xuXG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogUHJvamVjdGlvbiBvYmplY3QgZm9yIFdHUzg0IGdlb2dyYXBoaWMgY29vcmRpbmF0ZXMgKEVQU0c6NDMyNikuXG4gKlxuICogTm90ZSB0aGF0IE9wZW5MYXllcnMgZG9lcyBub3Qgc3RyaWN0bHkgY29tcGx5IHdpdGggdGhlIEVQU0cgZGVmaW5pdGlvbi5cbiAqIFRoZSBFUFNHIHJlZ2lzdHJ5IGRlZmluZXMgNDMyNiBhcyBhIENSUyBmb3IgTGF0aXR1ZGUsTG9uZ2l0dWRlICh5LHgpLlxuICogT3BlbkxheWVycyB0cmVhdHMgRVBTRzo0MzI2IGFzIGEgcHNldWRvLXByb2plY3Rpb24sIHdpdGggeCx5IGNvb3JkaW5hdGVzLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVuZHMge29sLnByb2ouUHJvamVjdGlvbn1cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlIENvZGUuXG4gKiBAcGFyYW0ge3N0cmluZz19IG9wdF9heGlzT3JpZW50YXRpb24gQXhpcyBvcmllbnRhdGlvbi5cbiAqIEBwcml2YXRlXG4gKi9cbl9vbF9wcm9qX0VQU0c0MzI2Xy5Qcm9qZWN0aW9uXyA9IGZ1bmN0aW9uKGNvZGUsIG9wdF9heGlzT3JpZW50YXRpb24pIHtcbiAgX29sX3Byb2pfUHJvamVjdGlvbl8uY2FsbCh0aGlzLCB7XG4gICAgY29kZTogY29kZSxcbiAgICB1bml0czogX29sX3Byb2pfVW5pdHNfLkRFR1JFRVMsXG4gICAgZXh0ZW50OiBfb2xfcHJval9FUFNHNDMyNl8uRVhURU5ULFxuICAgIGF4aXNPcmllbnRhdGlvbjogb3B0X2F4aXNPcmllbnRhdGlvbixcbiAgICBnbG9iYWw6IHRydWUsXG4gICAgbWV0ZXJzUGVyVW5pdDogX29sX3Byb2pfRVBTRzQzMjZfLk1FVEVSU19QRVJfVU5JVCxcbiAgICB3b3JsZEV4dGVudDogX29sX3Byb2pfRVBTRzQzMjZfLkVYVEVOVFxuICB9KTtcbn07XG5fb2xfLmluaGVyaXRzKF9vbF9wcm9qX0VQU0c0MzI2Xy5Qcm9qZWN0aW9uXywgX29sX3Byb2pfUHJvamVjdGlvbl8pO1xuXG5cbi8qKlxuICogUmFkaXVzIG9mIFdHUzg0IHNwaGVyZVxuICpcbiAqIEBjb25zdFxuICogQHR5cGUge251bWJlcn1cbiAqL1xuX29sX3Byb2pfRVBTRzQzMjZfLlJBRElVUyA9IDYzNzgxMzc7XG5cblxuLyoqXG4gKiBFeHRlbnQgb2YgdGhlIEVQU0c6NDMyNiBwcm9qZWN0aW9uIHdoaWNoIGlzIHRoZSB3aG9sZSB3b3JsZC5cbiAqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtvbC5FeHRlbnR9XG4gKi9cbl9vbF9wcm9qX0VQU0c0MzI2Xy5FWFRFTlQgPSBbLTE4MCwgLTkwLCAxODAsIDkwXTtcblxuXG4vKipcbiAqIEBjb25zdFxuICogQHR5cGUge251bWJlcn1cbiAqL1xuX29sX3Byb2pfRVBTRzQzMjZfLk1FVEVSU19QRVJfVU5JVCA9IE1hdGguUEkgKiBfb2xfcHJval9FUFNHNDMyNl8uUkFESVVTIC8gMTgwO1xuXG5cbi8qKlxuICogUHJvamVjdGlvbnMgZXF1YWwgdG8gRVBTRzo0MzI2LlxuICpcbiAqIEBjb25zdFxuICogQHR5cGUge0FycmF5LjxvbC5wcm9qLlByb2plY3Rpb24+fVxuICovXG5fb2xfcHJval9FUFNHNDMyNl8uUFJPSkVDVElPTlMgPSBbXG4gIG5ldyBfb2xfcHJval9FUFNHNDMyNl8uUHJvamVjdGlvbl8oJ0NSUzo4NCcpLFxuICBuZXcgX29sX3Byb2pfRVBTRzQzMjZfLlByb2plY3Rpb25fKCdFUFNHOjQzMjYnLCAnbmV1JyksXG4gIG5ldyBfb2xfcHJval9FUFNHNDMyNl8uUHJvamVjdGlvbl8oJ3VybjpvZ2M6ZGVmOmNyczpFUFNHOjo0MzI2JywgJ25ldScpLFxuICBuZXcgX29sX3Byb2pfRVBTRzQzMjZfLlByb2plY3Rpb25fKCd1cm46b2djOmRlZjpjcnM6RVBTRzo2LjY6NDMyNicsICduZXUnKSxcbiAgbmV3IF9vbF9wcm9qX0VQU0c0MzI2Xy5Qcm9qZWN0aW9uXygndXJuOm9nYzpkZWY6Y3JzOk9HQzoxLjM6Q1JTODQnKSxcbiAgbmV3IF9vbF9wcm9qX0VQU0c0MzI2Xy5Qcm9qZWN0aW9uXygndXJuOm9nYzpkZWY6Y3JzOk9HQzoyOjg0JyksXG4gIG5ldyBfb2xfcHJval9FUFNHNDMyNl8uUHJvamVjdGlvbl8oJ2h0dHA6Ly93d3cub3Blbmdpcy5uZXQvZ21sL3Nycy9lcHNnLnhtbCM0MzI2JywgJ25ldScpLFxuICBuZXcgX29sX3Byb2pfRVBTRzQzMjZfLlByb2plY3Rpb25fKCd1cm46eC1vZ2M6ZGVmOmNyczpFUFNHOjQzMjYnLCAnbmV1Jylcbl07XG5leHBvcnQgZGVmYXVsdCBfb2xfcHJval9FUFNHNDMyNl87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9wcm9qL2Vwc2c0MzI2LmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX29sX3Byb2pfcHJvamVjdGlvbnNfID0ge307XG5cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICogQHR5cGUge09iamVjdC48c3RyaW5nLCBvbC5wcm9qLlByb2plY3Rpb24+fVxuICovXG5fb2xfcHJval9wcm9qZWN0aW9uc18uY2FjaGVfID0ge307XG5cblxuLyoqXG4gKiBDbGVhciB0aGUgcHJvamVjdGlvbnMgY2FjaGUuXG4gKi9cbl9vbF9wcm9qX3Byb2plY3Rpb25zXy5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICBfb2xfcHJval9wcm9qZWN0aW9uc18uY2FjaGVfID0ge307XG59O1xuXG5cbi8qKlxuICogR2V0IGEgY2FjaGVkIHByb2plY3Rpb24gYnkgY29kZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlIFRoZSBjb2RlIGZvciB0aGUgcHJvamVjdGlvbi5cbiAqIEByZXR1cm4ge29sLnByb2ouUHJvamVjdGlvbn0gVGhlIHByb2plY3Rpb24gKGlmIGNhY2hlZCkuXG4gKi9cbl9vbF9wcm9qX3Byb2plY3Rpb25zXy5nZXQgPSBmdW5jdGlvbihjb2RlKSB7XG4gIHZhciBwcm9qZWN0aW9ucyA9IF9vbF9wcm9qX3Byb2plY3Rpb25zXy5jYWNoZV87XG4gIHJldHVybiBwcm9qZWN0aW9uc1tjb2RlXSB8fCBudWxsO1xufTtcblxuXG4vKipcbiAqIEFkZCBhIHByb2plY3Rpb24gdG8gdGhlIGNhY2hlLlxuICogQHBhcmFtIHtzdHJpbmd9IGNvZGUgVGhlIHByb2plY3Rpb24gY29kZS5cbiAqIEBwYXJhbSB7b2wucHJvai5Qcm9qZWN0aW9ufSBwcm9qZWN0aW9uIFRoZSBwcm9qZWN0aW9uIHRvIGNhY2hlLlxuICovXG5fb2xfcHJval9wcm9qZWN0aW9uc18uYWRkID0gZnVuY3Rpb24oY29kZSwgcHJvamVjdGlvbikge1xuICB2YXIgcHJvamVjdGlvbnMgPSBfb2xfcHJval9wcm9qZWN0aW9uc18uY2FjaGVfO1xuICBwcm9qZWN0aW9uc1tjb2RlXSA9IHByb2plY3Rpb247XG59O1xuZXhwb3J0IGRlZmF1bHQgX29sX3Byb2pfcHJvamVjdGlvbnNfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvcHJvai9wcm9qZWN0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF9vbF9vYmpfIGZyb20gJy4uL29iai5qcyc7XG52YXIgX29sX3Byb2pfdHJhbnNmb3Jtc18gPSB7fTtcblxuXG4vKipcbiAqIEBwcml2YXRlXG4gKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsIE9iamVjdC48c3RyaW5nLCBvbC5UcmFuc2Zvcm1GdW5jdGlvbj4+fVxuICovXG5fb2xfcHJval90cmFuc2Zvcm1zXy5jYWNoZV8gPSB7fTtcblxuXG4vKipcbiAqIENsZWFyIHRoZSB0cmFuc2Zvcm0gY2FjaGUuXG4gKi9cbl9vbF9wcm9qX3RyYW5zZm9ybXNfLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gIF9vbF9wcm9qX3RyYW5zZm9ybXNfLmNhY2hlXyA9IHt9O1xufTtcblxuXG4vKipcbiAqIFJlZ2lzdGVycyBhIGNvbnZlcnNpb24gZnVuY3Rpb24gdG8gY29udmVydCBjb29yZGluYXRlcyBmcm9tIHRoZSBzb3VyY2VcbiAqIHByb2plY3Rpb24gdG8gdGhlIGRlc3RpbmF0aW9uIHByb2plY3Rpb24uXG4gKlxuICogQHBhcmFtIHtvbC5wcm9qLlByb2plY3Rpb259IHNvdXJjZSBTb3VyY2UuXG4gKiBAcGFyYW0ge29sLnByb2ouUHJvamVjdGlvbn0gZGVzdGluYXRpb24gRGVzdGluYXRpb24uXG4gKiBAcGFyYW0ge29sLlRyYW5zZm9ybUZ1bmN0aW9ufSB0cmFuc2Zvcm1GbiBUcmFuc2Zvcm0uXG4gKi9cbl9vbF9wcm9qX3RyYW5zZm9ybXNfLmFkZCA9IGZ1bmN0aW9uKHNvdXJjZSwgZGVzdGluYXRpb24sIHRyYW5zZm9ybUZuKSB7XG4gIHZhciBzb3VyY2VDb2RlID0gc291cmNlLmdldENvZGUoKTtcbiAgdmFyIGRlc3RpbmF0aW9uQ29kZSA9IGRlc3RpbmF0aW9uLmdldENvZGUoKTtcbiAgdmFyIHRyYW5zZm9ybXMgPSBfb2xfcHJval90cmFuc2Zvcm1zXy5jYWNoZV87XG4gIGlmICghKHNvdXJjZUNvZGUgaW4gdHJhbnNmb3JtcykpIHtcbiAgICB0cmFuc2Zvcm1zW3NvdXJjZUNvZGVdID0ge307XG4gIH1cbiAgdHJhbnNmb3Jtc1tzb3VyY2VDb2RlXVtkZXN0aW5hdGlvbkNvZGVdID0gdHJhbnNmb3JtRm47XG59O1xuXG5cbi8qKlxuICogVW5yZWdpc3RlcnMgdGhlIGNvbnZlcnNpb24gZnVuY3Rpb24gdG8gY29udmVydCBjb29yZGluYXRlcyBmcm9tIHRoZSBzb3VyY2VcbiAqIHByb2plY3Rpb24gdG8gdGhlIGRlc3RpbmF0aW9uIHByb2plY3Rpb24uICBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGNsZWFuIHVwXG4gKiBjYWNoZWQgdHJhbnNmb3JtcyBkdXJpbmcgdGVzdGluZy5cbiAqXG4gKiBAcGFyYW0ge29sLnByb2ouUHJvamVjdGlvbn0gc291cmNlIFNvdXJjZSBwcm9qZWN0aW9uLlxuICogQHBhcmFtIHtvbC5wcm9qLlByb2plY3Rpb259IGRlc3RpbmF0aW9uIERlc3RpbmF0aW9uIHByb2plY3Rpb24uXG4gKiBAcmV0dXJuIHtvbC5UcmFuc2Zvcm1GdW5jdGlvbn0gdHJhbnNmb3JtRm4gVGhlIHVucmVnaXN0ZXJlZCB0cmFuc2Zvcm0uXG4gKi9cbl9vbF9wcm9qX3RyYW5zZm9ybXNfLnJlbW92ZSA9IGZ1bmN0aW9uKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgdmFyIHNvdXJjZUNvZGUgPSBzb3VyY2UuZ2V0Q29kZSgpO1xuICB2YXIgZGVzdGluYXRpb25Db2RlID0gZGVzdGluYXRpb24uZ2V0Q29kZSgpO1xuICB2YXIgdHJhbnNmb3JtcyA9IF9vbF9wcm9qX3RyYW5zZm9ybXNfLmNhY2hlXztcbiAgdmFyIHRyYW5zZm9ybSA9IHRyYW5zZm9ybXNbc291cmNlQ29kZV1bZGVzdGluYXRpb25Db2RlXTtcbiAgZGVsZXRlIHRyYW5zZm9ybXNbc291cmNlQ29kZV1bZGVzdGluYXRpb25Db2RlXTtcbiAgaWYgKF9vbF9vYmpfLmlzRW1wdHkodHJhbnNmb3Jtc1tzb3VyY2VDb2RlXSkpIHtcbiAgICBkZWxldGUgdHJhbnNmb3Jtc1tzb3VyY2VDb2RlXTtcbiAgfVxuICByZXR1cm4gdHJhbnNmb3JtO1xufTtcblxuXG4vKipcbiAqIEdldCBhIHRyYW5zZm9ybSBnaXZlbiBhIHNvdXJjZSBjb2RlIGFuZCBhIGRlc3RpbmF0aW9uIGNvZGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlQ29kZSBUaGUgY29kZSBmb3IgdGhlIHNvdXJjZSBwcm9qZWN0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IGRlc3RpbmF0aW9uQ29kZSBUaGUgY29kZSBmb3IgdGhlIGRlc3RpbmF0aW9uIHByb2plY3Rpb24uXG4gKiBAcmV0dXJuIHtvbC5UcmFuc2Zvcm1GdW5jdGlvbnx1bmRlZmluZWR9IFRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gKGlmIGZvdW5kKS5cbiAqL1xuX29sX3Byb2pfdHJhbnNmb3Jtc18uZ2V0ID0gZnVuY3Rpb24oc291cmNlQ29kZSwgZGVzdGluYXRpb25Db2RlKSB7XG4gIHZhciB0cmFuc2Zvcm07XG4gIHZhciB0cmFuc2Zvcm1zID0gX29sX3Byb2pfdHJhbnNmb3Jtc18uY2FjaGVfO1xuICBpZiAoc291cmNlQ29kZSBpbiB0cmFuc2Zvcm1zICYmIGRlc3RpbmF0aW9uQ29kZSBpbiB0cmFuc2Zvcm1zW3NvdXJjZUNvZGVdKSB7XG4gICAgdHJhbnNmb3JtID0gdHJhbnNmb3Jtc1tzb3VyY2VDb2RlXVtkZXN0aW5hdGlvbkNvZGVdO1xuICB9XG4gIHJldHVybiB0cmFuc2Zvcm07XG59O1xuZXhwb3J0IGRlZmF1bHQgX29sX3Byb2pfdHJhbnNmb3Jtc187XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9wcm9qL3RyYW5zZm9ybXMuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfb2xfIGZyb20gJy4uL2luZGV4LmpzJztcbmltcG9ydCBfb2xfSW1hZ2VCYXNlXyBmcm9tICcuLi9pbWFnZWJhc2UuanMnO1xuaW1wb3J0IF9vbF9JbWFnZVN0YXRlXyBmcm9tICcuLi9pbWFnZXN0YXRlLmpzJztcbmltcG9ydCBfb2xfZXZlbnRzXyBmcm9tICcuLi9ldmVudHMuanMnO1xuaW1wb3J0IF9vbF9ldmVudHNfRXZlbnRUeXBlXyBmcm9tICcuLi9ldmVudHMvZXZlbnR0eXBlLmpzJztcbmltcG9ydCBfb2xfZXh0ZW50XyBmcm9tICcuLi9leHRlbnQuanMnO1xuaW1wb3J0IF9vbF9yZXByb2pfIGZyb20gJy4uL3JlcHJvai5qcyc7XG5pbXBvcnQgX29sX3JlcHJval9Ucmlhbmd1bGF0aW9uXyBmcm9tICcuLi9yZXByb2ovdHJpYW5ndWxhdGlvbi5qcyc7XG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogQ2xhc3MgZW5jYXBzdWxhdGluZyBzaW5nbGUgcmVwcm9qZWN0ZWQgaW1hZ2UuXG4gKiBTZWUge0BsaW5rIG9sLnNvdXJjZS5JbWFnZX0uXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAZXh0ZW5kcyB7b2wuSW1hZ2VCYXNlfVxuICogQHBhcmFtIHtvbC5wcm9qLlByb2plY3Rpb259IHNvdXJjZVByb2ogU291cmNlIHByb2plY3Rpb24gKG9mIHRoZSBkYXRhKS5cbiAqIEBwYXJhbSB7b2wucHJvai5Qcm9qZWN0aW9ufSB0YXJnZXRQcm9qIFRhcmdldCBwcm9qZWN0aW9uLlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IHRhcmdldEV4dGVudCBUYXJnZXQgZXh0ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IHRhcmdldFJlc29sdXRpb24gVGFyZ2V0IHJlc29sdXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gcGl4ZWxSYXRpbyBQaXhlbCByYXRpby5cbiAqIEBwYXJhbSB7b2wuUmVwcm9qSW1hZ2VGdW5jdGlvblR5cGV9IGdldEltYWdlRnVuY3Rpb25cbiAqICAgICBGdW5jdGlvbiByZXR1cm5pbmcgc291cmNlIGltYWdlcyAoZXh0ZW50LCByZXNvbHV0aW9uLCBwaXhlbFJhdGlvKS5cbiAqL1xudmFyIF9vbF9yZXByb2pfSW1hZ2VfID0gZnVuY3Rpb24oc291cmNlUHJvaiwgdGFyZ2V0UHJvaixcbiAgICB0YXJnZXRFeHRlbnQsIHRhcmdldFJlc29sdXRpb24sIHBpeGVsUmF0aW8sIGdldEltYWdlRnVuY3Rpb24pIHtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge29sLnByb2ouUHJvamVjdGlvbn1cbiAgICovXG4gIHRoaXMudGFyZ2V0UHJval8gPSB0YXJnZXRQcm9qO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7b2wuRXh0ZW50fVxuICAgKi9cbiAgdGhpcy5tYXhTb3VyY2VFeHRlbnRfID0gc291cmNlUHJvai5nZXRFeHRlbnQoKTtcbiAgdmFyIG1heFRhcmdldEV4dGVudCA9IHRhcmdldFByb2ouZ2V0RXh0ZW50KCk7XG5cbiAgdmFyIGxpbWl0ZWRUYXJnZXRFeHRlbnQgPSBtYXhUYXJnZXRFeHRlbnQgP1xuICAgIF9vbF9leHRlbnRfLmdldEludGVyc2VjdGlvbih0YXJnZXRFeHRlbnQsIG1heFRhcmdldEV4dGVudCkgOiB0YXJnZXRFeHRlbnQ7XG5cbiAgdmFyIHRhcmdldENlbnRlciA9IF9vbF9leHRlbnRfLmdldENlbnRlcihsaW1pdGVkVGFyZ2V0RXh0ZW50KTtcbiAgdmFyIHNvdXJjZVJlc29sdXRpb24gPSBfb2xfcmVwcm9qXy5jYWxjdWxhdGVTb3VyY2VSZXNvbHV0aW9uKFxuICAgICAgc291cmNlUHJvaiwgdGFyZ2V0UHJvaiwgdGFyZ2V0Q2VudGVyLCB0YXJnZXRSZXNvbHV0aW9uKTtcblxuICB2YXIgZXJyb3JUaHJlc2hvbGRJblBpeGVscyA9IF9vbF8uREVGQVVMVF9SQVNURVJfUkVQUk9KRUNUSU9OX0VSUk9SX1RIUkVTSE9MRDtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUgeyFvbC5yZXByb2ouVHJpYW5ndWxhdGlvbn1cbiAgICovXG4gIHRoaXMudHJpYW5ndWxhdGlvbl8gPSBuZXcgX29sX3JlcHJval9Ucmlhbmd1bGF0aW9uXyhcbiAgICAgIHNvdXJjZVByb2osIHRhcmdldFByb2osIGxpbWl0ZWRUYXJnZXRFeHRlbnQsIHRoaXMubWF4U291cmNlRXh0ZW50XyxcbiAgICAgIHNvdXJjZVJlc29sdXRpb24gKiBlcnJvclRocmVzaG9sZEluUGl4ZWxzKTtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIHRoaXMudGFyZ2V0UmVzb2x1dGlvbl8gPSB0YXJnZXRSZXNvbHV0aW9uO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7b2wuRXh0ZW50fVxuICAgKi9cbiAgdGhpcy50YXJnZXRFeHRlbnRfID0gdGFyZ2V0RXh0ZW50O1xuXG4gIHZhciBzb3VyY2VFeHRlbnQgPSB0aGlzLnRyaWFuZ3VsYXRpb25fLmNhbGN1bGF0ZVNvdXJjZUV4dGVudCgpO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7b2wuSW1hZ2VCYXNlfVxuICAgKi9cbiAgdGhpcy5zb3VyY2VJbWFnZV8gPVxuICAgICAgZ2V0SW1hZ2VGdW5jdGlvbihzb3VyY2VFeHRlbnQsIHNvdXJjZVJlc29sdXRpb24sIHBpeGVsUmF0aW8pO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgdGhpcy5zb3VyY2VQaXhlbFJhdGlvXyA9XG4gICAgICB0aGlzLnNvdXJjZUltYWdlXyA/IHRoaXMuc291cmNlSW1hZ2VfLmdldFBpeGVsUmF0aW8oKSA6IDE7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtIVE1MQ2FudmFzRWxlbWVudH1cbiAgICovXG4gIHRoaXMuY2FudmFzXyA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHs/b2wuRXZlbnRzS2V5fVxuICAgKi9cbiAgdGhpcy5zb3VyY2VMaXN0ZW5lcktleV8gPSBudWxsO1xuXG5cbiAgdmFyIHN0YXRlID0gX29sX0ltYWdlU3RhdGVfLkxPQURFRDtcblxuICBpZiAodGhpcy5zb3VyY2VJbWFnZV8pIHtcbiAgICBzdGF0ZSA9IF9vbF9JbWFnZVN0YXRlXy5JRExFO1xuICB9XG5cbiAgX29sX0ltYWdlQmFzZV8uY2FsbCh0aGlzLCB0YXJnZXRFeHRlbnQsIHRhcmdldFJlc29sdXRpb24sIHRoaXMuc291cmNlUGl4ZWxSYXRpb18sIHN0YXRlKTtcbn07XG5cbl9vbF8uaW5oZXJpdHMoX29sX3JlcHJval9JbWFnZV8sIF9vbF9JbWFnZUJhc2VfKTtcblxuXG4vKipcbiAqIEBpbmhlcml0RG9jXG4gKi9cbl9vbF9yZXByb2pfSW1hZ2VfLnByb3RvdHlwZS5kaXNwb3NlSW50ZXJuYWwgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuc3RhdGUgPT0gX29sX0ltYWdlU3RhdGVfLkxPQURJTkcpIHtcbiAgICB0aGlzLnVubGlzdGVuU291cmNlXygpO1xuICB9XG4gIF9vbF9JbWFnZUJhc2VfLnByb3RvdHlwZS5kaXNwb3NlSW50ZXJuYWwuY2FsbCh0aGlzKTtcbn07XG5cblxuLyoqXG4gKiBAaW5oZXJpdERvY1xuICovXG5fb2xfcmVwcm9qX0ltYWdlXy5wcm90b3R5cGUuZ2V0SW1hZ2UgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuY2FudmFzXztcbn07XG5cblxuLyoqXG4gKiBAcmV0dXJuIHtvbC5wcm9qLlByb2plY3Rpb259IFByb2plY3Rpb24uXG4gKi9cbl9vbF9yZXByb2pfSW1hZ2VfLnByb3RvdHlwZS5nZXRQcm9qZWN0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnRhcmdldFByb2pfO1xufTtcblxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbl9vbF9yZXByb2pfSW1hZ2VfLnByb3RvdHlwZS5yZXByb2plY3RfID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzb3VyY2VTdGF0ZSA9IHRoaXMuc291cmNlSW1hZ2VfLmdldFN0YXRlKCk7XG4gIGlmIChzb3VyY2VTdGF0ZSA9PSBfb2xfSW1hZ2VTdGF0ZV8uTE9BREVEKSB7XG4gICAgdmFyIHdpZHRoID0gX29sX2V4dGVudF8uZ2V0V2lkdGgodGhpcy50YXJnZXRFeHRlbnRfKSAvIHRoaXMudGFyZ2V0UmVzb2x1dGlvbl87XG4gICAgdmFyIGhlaWdodCA9XG4gICAgICAgIF9vbF9leHRlbnRfLmdldEhlaWdodCh0aGlzLnRhcmdldEV4dGVudF8pIC8gdGhpcy50YXJnZXRSZXNvbHV0aW9uXztcblxuICAgIHRoaXMuY2FudmFzXyA9IF9vbF9yZXByb2pfLnJlbmRlcih3aWR0aCwgaGVpZ2h0LCB0aGlzLnNvdXJjZVBpeGVsUmF0aW9fLFxuICAgICAgICB0aGlzLnNvdXJjZUltYWdlXy5nZXRSZXNvbHV0aW9uKCksIHRoaXMubWF4U291cmNlRXh0ZW50XyxcbiAgICAgICAgdGhpcy50YXJnZXRSZXNvbHV0aW9uXywgdGhpcy50YXJnZXRFeHRlbnRfLCB0aGlzLnRyaWFuZ3VsYXRpb25fLCBbe1xuICAgICAgICAgIGV4dGVudDogdGhpcy5zb3VyY2VJbWFnZV8uZ2V0RXh0ZW50KCksXG4gICAgICAgICAgaW1hZ2U6IHRoaXMuc291cmNlSW1hZ2VfLmdldEltYWdlKClcbiAgICAgICAgfV0sIDApO1xuICB9XG4gIHRoaXMuc3RhdGUgPSBzb3VyY2VTdGF0ZTtcbiAgdGhpcy5jaGFuZ2VkKCk7XG59O1xuXG5cbi8qKlxuICogQGluaGVyaXREb2NcbiAqL1xuX29sX3JlcHJval9JbWFnZV8ucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuc3RhdGUgPT0gX29sX0ltYWdlU3RhdGVfLklETEUpIHtcbiAgICB0aGlzLnN0YXRlID0gX29sX0ltYWdlU3RhdGVfLkxPQURJTkc7XG4gICAgdGhpcy5jaGFuZ2VkKCk7XG5cbiAgICB2YXIgc291cmNlU3RhdGUgPSB0aGlzLnNvdXJjZUltYWdlXy5nZXRTdGF0ZSgpO1xuICAgIGlmIChzb3VyY2VTdGF0ZSA9PSBfb2xfSW1hZ2VTdGF0ZV8uTE9BREVEIHx8XG4gICAgICAgIHNvdXJjZVN0YXRlID09IF9vbF9JbWFnZVN0YXRlXy5FUlJPUikge1xuICAgICAgdGhpcy5yZXByb2plY3RfKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc291cmNlTGlzdGVuZXJLZXlfID0gX29sX2V2ZW50c18ubGlzdGVuKHRoaXMuc291cmNlSW1hZ2VfLFxuICAgICAgICAgIF9vbF9ldmVudHNfRXZlbnRUeXBlXy5DSEFOR0UsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2VTdGF0ZSA9IHRoaXMuc291cmNlSW1hZ2VfLmdldFN0YXRlKCk7XG4gICAgICAgICAgICBpZiAoc291cmNlU3RhdGUgPT0gX29sX0ltYWdlU3RhdGVfLkxPQURFRCB8fFxuICAgICAgICAgICAgICAgIHNvdXJjZVN0YXRlID09IF9vbF9JbWFnZVN0YXRlXy5FUlJPUikge1xuICAgICAgICAgICAgICB0aGlzLnVubGlzdGVuU291cmNlXygpO1xuICAgICAgICAgICAgICB0aGlzLnJlcHJvamVjdF8oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgIHRoaXMuc291cmNlSW1hZ2VfLmxvYWQoKTtcbiAgICB9XG4gIH1cbn07XG5cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5fb2xfcmVwcm9qX0ltYWdlXy5wcm90b3R5cGUudW5saXN0ZW5Tb3VyY2VfID0gZnVuY3Rpb24oKSB7XG4gIF9vbF9ldmVudHNfLnVubGlzdGVuQnlLZXkoLyoqIEB0eXBlIHshb2wuRXZlbnRzS2V5fSAqLyAodGhpcy5zb3VyY2VMaXN0ZW5lcktleV8pKTtcbiAgdGhpcy5zb3VyY2VMaXN0ZW5lcktleV8gPSBudWxsO1xufTtcbmV4cG9ydCBkZWZhdWx0IF9vbF9yZXByb2pfSW1hZ2VfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvcmVwcm9qL2ltYWdlLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgX29sX1RpbGVSYW5nZV8gZnJvbSAnLi90aWxlcmFuZ2UuanMnO1xuaW1wb3J0IF9vbF9tYXRoXyBmcm9tICcuL21hdGguanMnO1xuaW1wb3J0IF9vbF90aWxlZ3JpZF8gZnJvbSAnLi90aWxlZ3JpZC5qcyc7XG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogQW4gYXR0cmlidXRpb24gZm9yIGEgbGF5ZXIgc291cmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5PU00oe1xuICogICAgICAgYXR0cmlidXRpb25zOiBbXG4gKiAgICAgICAgIG5ldyBvbC5BdHRyaWJ1dGlvbih7XG4gKiAgICAgICAgICAgaHRtbDogJ0FsbCBtYXBzICZjb3B5OyAnICtcbiAqICAgICAgICAgICAgICAgJzxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuY3ljbGVtYXAub3JnL1wiPk9wZW5DeWNsZU1hcDwvYT4nXG4gKiAgICAgICAgIH0pLFxuICogICAgICAgICBvbC5zb3VyY2UuT1NNLkFUVFJJQlVUSU9OXG4gKiAgICAgICBdLFxuICogICAgIC4uXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAZGVwcmVjYXRlZCBUaGlzIGNsYXNzIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLlxuICogQHBhcmFtIHtvbHguQXR0cmlidXRpb25PcHRpb25zfSBvcHRpb25zIEF0dHJpYnV0aW9uIG9wdGlvbnMuXG4gKiBAc3RydWN0XG4gKiBAYXBpXG4gKi9cbnZhciBfb2xfQXR0cmlidXRpb25fID0gZnVuY3Rpb24ob3B0aW9ucykge1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgdGhpcy5odG1sXyA9IG9wdGlvbnMuaHRtbDtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge09iamVjdC48c3RyaW5nLCBBcnJheS48b2wuVGlsZVJhbmdlPj59XG4gICAqL1xuICB0aGlzLnRpbGVSYW5nZXNfID0gb3B0aW9ucy50aWxlUmFuZ2VzID8gb3B0aW9ucy50aWxlUmFuZ2VzIDogbnVsbDtcblxufTtcblxuXG4vKipcbiAqIEdldCB0aGUgYXR0cmlidXRpb24gbWFya3VwLlxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgYXR0cmlidXRpb24gSFRNTC5cbiAqIEBhcGlcbiAqL1xuX29sX0F0dHJpYnV0aW9uXy5wcm90b3R5cGUuZ2V0SFRNTCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5odG1sXztcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBvbC5UaWxlUmFuZ2U+fSB0aWxlUmFuZ2VzIFRpbGUgcmFuZ2VzLlxuICogQHBhcmFtIHshb2wudGlsZWdyaWQuVGlsZUdyaWR9IHRpbGVHcmlkIFRpbGUgZ3JpZC5cbiAqIEBwYXJhbSB7IW9sLnByb2ouUHJvamVjdGlvbn0gcHJvamVjdGlvbiBQcm9qZWN0aW9uLlxuICogQHJldHVybiB7Ym9vbGVhbn0gSW50ZXJzZWN0cyBhbnkgdGlsZSByYW5nZS5cbiAqL1xuX29sX0F0dHJpYnV0aW9uXy5wcm90b3R5cGUuaW50ZXJzZWN0c0FueVRpbGVSYW5nZSA9IGZ1bmN0aW9uKHRpbGVSYW5nZXMsIHRpbGVHcmlkLCBwcm9qZWN0aW9uKSB7XG4gIGlmICghdGhpcy50aWxlUmFuZ2VzXykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBpLCBpaSwgdGlsZVJhbmdlLCB6S2V5O1xuICBmb3IgKHpLZXkgaW4gdGlsZVJhbmdlcykge1xuICAgIGlmICghKHpLZXkgaW4gdGhpcy50aWxlUmFuZ2VzXykpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICB0aWxlUmFuZ2UgPSB0aWxlUmFuZ2VzW3pLZXldO1xuICAgIHZhciB0ZXN0VGlsZVJhbmdlO1xuICAgIGZvciAoaSA9IDAsIGlpID0gdGhpcy50aWxlUmFuZ2VzX1t6S2V5XS5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICB0ZXN0VGlsZVJhbmdlID0gdGhpcy50aWxlUmFuZ2VzX1t6S2V5XVtpXTtcbiAgICAgIGlmICh0ZXN0VGlsZVJhbmdlLmludGVyc2VjdHModGlsZVJhbmdlKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHZhciBleHRlbnRUaWxlUmFuZ2UgPSB0aWxlR3JpZC5nZXRUaWxlUmFuZ2VGb3JFeHRlbnRBbmRaKFxuICAgICAgICAgIF9vbF90aWxlZ3JpZF8uZXh0ZW50RnJvbVByb2plY3Rpb24ocHJvamVjdGlvbiksIHBhcnNlSW50KHpLZXksIDEwKSk7XG4gICAgICB2YXIgd2lkdGggPSBleHRlbnRUaWxlUmFuZ2UuZ2V0V2lkdGgoKTtcbiAgICAgIGlmICh0aWxlUmFuZ2UubWluWCA8IGV4dGVudFRpbGVSYW5nZS5taW5YIHx8XG4gICAgICAgICAgdGlsZVJhbmdlLm1heFggPiBleHRlbnRUaWxlUmFuZ2UubWF4WCkge1xuICAgICAgICBpZiAodGVzdFRpbGVSYW5nZS5pbnRlcnNlY3RzKG5ldyBfb2xfVGlsZVJhbmdlXyhcbiAgICAgICAgICAgIF9vbF9tYXRoXy5tb2R1bG8odGlsZVJhbmdlLm1pblgsIHdpZHRoKSxcbiAgICAgICAgICAgIF9vbF9tYXRoXy5tb2R1bG8odGlsZVJhbmdlLm1heFgsIHdpZHRoKSxcbiAgICAgICAgICAgIHRpbGVSYW5nZS5taW5ZLCB0aWxlUmFuZ2UubWF4WSkpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpbGVSYW5nZS5nZXRXaWR0aCgpID4gd2lkdGggJiZcbiAgICAgICAgICAgIHRlc3RUaWxlUmFuZ2UuaW50ZXJzZWN0cyhleHRlbnRUaWxlUmFuZ2UpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcbmV4cG9ydCBkZWZhdWx0IF9vbF9BdHRyaWJ1dGlvbl87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9hdHRyaWJ1dGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF9vbF8gZnJvbSAnLi4vaW5kZXguanMnO1xuaW1wb3J0IF9vbF9hc3NlcnRzXyBmcm9tICcuLi9hc3NlcnRzLmpzJztcbmltcG9ydCBfb2xfVGlsZVJhbmdlXyBmcm9tICcuLi90aWxlcmFuZ2UuanMnO1xuaW1wb3J0IF9vbF9hcnJheV8gZnJvbSAnLi4vYXJyYXkuanMnO1xuaW1wb3J0IF9vbF9leHRlbnRfIGZyb20gJy4uL2V4dGVudC5qcyc7XG5pbXBvcnQgX29sX21hdGhfIGZyb20gJy4uL21hdGguanMnO1xuaW1wb3J0IF9vbF9zaXplXyBmcm9tICcuLi9zaXplLmpzJztcbmltcG9ydCBfb2xfdGlsZWNvb3JkXyBmcm9tICcuLi90aWxlY29vcmQuanMnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIEJhc2UgY2xhc3MgZm9yIHNldHRpbmcgdGhlIGdyaWQgcGF0dGVybiBmb3Igc291cmNlcyBhY2Nlc3NpbmcgdGlsZWQtaW1hZ2VcbiAqIHNlcnZlcnMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge29seC50aWxlZ3JpZC5UaWxlR3JpZE9wdGlvbnN9IG9wdGlvbnMgVGlsZSBncmlkIG9wdGlvbnMuXG4gKiBAc3RydWN0XG4gKiBAYXBpXG4gKi9cbnZhciBfb2xfdGlsZWdyaWRfVGlsZUdyaWRfID0gZnVuY3Rpb24ob3B0aW9ucykge1xuXG4gIC8qKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICB0aGlzLm1pblpvb20gPSBvcHRpb25zLm1pblpvb20gIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubWluWm9vbSA6IDA7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHshQXJyYXkuPG51bWJlcj59XG4gICAqL1xuICB0aGlzLnJlc29sdXRpb25zXyA9IG9wdGlvbnMucmVzb2x1dGlvbnM7XG4gIF9vbF9hc3NlcnRzXy5hc3NlcnQoX29sX2FycmF5Xy5pc1NvcnRlZCh0aGlzLnJlc29sdXRpb25zXywgZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBiIC0gYTtcbiAgfSwgdHJ1ZSksIDE3KTsgLy8gYHJlc29sdXRpb25zYCBtdXN0IGJlIHNvcnRlZCBpbiBkZXNjZW5kaW5nIG9yZGVyXG5cblxuICAvLyBjaGVjayBpZiB3ZSd2ZSBnb3QgYSBjb25zaXN0ZW50IHpvb20gZmFjdG9yIGFuZCBvcmlnaW5cbiAgdmFyIHpvb21GYWN0b3I7XG4gIGlmICghb3B0aW9ucy5vcmlnaW5zKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGlpID0gdGhpcy5yZXNvbHV0aW9uc18ubGVuZ3RoIC0gMTsgaSA8IGlpOyArK2kpIHtcbiAgICAgIGlmICghem9vbUZhY3Rvcikge1xuICAgICAgICB6b29tRmFjdG9yID0gdGhpcy5yZXNvbHV0aW9uc19baV0gLyB0aGlzLnJlc29sdXRpb25zX1tpICsgMV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5yZXNvbHV0aW9uc19baV0gLyB0aGlzLnJlc29sdXRpb25zX1tpICsgMV0gIT09IHpvb21GYWN0b3IpIHtcbiAgICAgICAgICB6b29tRmFjdG9yID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge251bWJlcnx1bmRlZmluZWR9XG4gICAqL1xuICB0aGlzLnpvb21GYWN0b3JfID0gem9vbUZhY3RvcjtcblxuXG4gIC8qKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICB0aGlzLm1heFpvb20gPSB0aGlzLnJlc29sdXRpb25zXy5sZW5ndGggLSAxO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7b2wuQ29vcmRpbmF0ZX1cbiAgICovXG4gIHRoaXMub3JpZ2luXyA9IG9wdGlvbnMub3JpZ2luICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm9yaWdpbiA6IG51bGw7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtBcnJheS48b2wuQ29vcmRpbmF0ZT59XG4gICAqL1xuICB0aGlzLm9yaWdpbnNfID0gbnVsbDtcbiAgaWYgKG9wdGlvbnMub3JpZ2lucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5vcmlnaW5zXyA9IG9wdGlvbnMub3JpZ2lucztcbiAgICBfb2xfYXNzZXJ0c18uYXNzZXJ0KHRoaXMub3JpZ2luc18ubGVuZ3RoID09IHRoaXMucmVzb2x1dGlvbnNfLmxlbmd0aCxcbiAgICAgICAgMjApOyAvLyBOdW1iZXIgb2YgYG9yaWdpbnNgIGFuZCBgcmVzb2x1dGlvbnNgIG11c3QgYmUgZXF1YWxcbiAgfVxuXG4gIHZhciBleHRlbnQgPSBvcHRpb25zLmV4dGVudDtcblxuICBpZiAoZXh0ZW50ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICF0aGlzLm9yaWdpbl8gJiYgIXRoaXMub3JpZ2luc18pIHtcbiAgICB0aGlzLm9yaWdpbl8gPSBfb2xfZXh0ZW50Xy5nZXRUb3BMZWZ0KGV4dGVudCk7XG4gIH1cblxuICBfb2xfYXNzZXJ0c18uYXNzZXJ0KFxuICAgICAgKCF0aGlzLm9yaWdpbl8gJiYgdGhpcy5vcmlnaW5zXykgfHwgKHRoaXMub3JpZ2luXyAmJiAhdGhpcy5vcmlnaW5zXyksXG4gICAgICAxOCk7IC8vIEVpdGhlciBgb3JpZ2luYCBvciBgb3JpZ2luc2AgbXVzdCBiZSBjb25maWd1cmVkLCBuZXZlciBib3RoXG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtBcnJheS48bnVtYmVyfG9sLlNpemU+fVxuICAgKi9cbiAgdGhpcy50aWxlU2l6ZXNfID0gbnVsbDtcbiAgaWYgKG9wdGlvbnMudGlsZVNpemVzICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnRpbGVTaXplc18gPSBvcHRpb25zLnRpbGVTaXplcztcbiAgICBfb2xfYXNzZXJ0c18uYXNzZXJ0KHRoaXMudGlsZVNpemVzXy5sZW5ndGggPT0gdGhpcy5yZXNvbHV0aW9uc18ubGVuZ3RoLFxuICAgICAgICAxOSk7IC8vIE51bWJlciBvZiBgdGlsZVNpemVzYCBhbmQgYHJlc29sdXRpb25zYCBtdXN0IGJlIGVxdWFsXG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge251bWJlcnxvbC5TaXplfVxuICAgKi9cbiAgdGhpcy50aWxlU2l6ZV8gPSBvcHRpb25zLnRpbGVTaXplICE9PSB1bmRlZmluZWQgP1xuICAgIG9wdGlvbnMudGlsZVNpemUgOlxuICAgICF0aGlzLnRpbGVTaXplc18gPyBfb2xfLkRFRkFVTFRfVElMRV9TSVpFIDogbnVsbDtcbiAgX29sX2Fzc2VydHNfLmFzc2VydChcbiAgICAgICghdGhpcy50aWxlU2l6ZV8gJiYgdGhpcy50aWxlU2l6ZXNfKSB8fFxuICAgICAgKHRoaXMudGlsZVNpemVfICYmICF0aGlzLnRpbGVTaXplc18pLFxuICAgICAgMjIpOyAvLyBFaXRoZXIgYHRpbGVTaXplYCBvciBgdGlsZVNpemVzYCBtdXN0IGJlIGNvbmZpZ3VyZWQsIG5ldmVyIGJvdGhcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge29sLkV4dGVudH1cbiAgICovXG4gIHRoaXMuZXh0ZW50XyA9IGV4dGVudCAhPT0gdW5kZWZpbmVkID8gZXh0ZW50IDogbnVsbDtcblxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7QXJyYXkuPG9sLlRpbGVSYW5nZT59XG4gICAqL1xuICB0aGlzLmZ1bGxUaWxlUmFuZ2VzXyA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtvbC5TaXplfVxuICAgKi9cbiAgdGhpcy50bXBTaXplXyA9IFswLCAwXTtcblxuICBpZiAob3B0aW9ucy5zaXplcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5mdWxsVGlsZVJhbmdlc18gPSBvcHRpb25zLnNpemVzLm1hcChmdW5jdGlvbihzaXplLCB6KSB7XG4gICAgICB2YXIgdGlsZVJhbmdlID0gbmV3IF9vbF9UaWxlUmFuZ2VfKFxuICAgICAgICAgIE1hdGgubWluKDAsIHNpemVbMF0pLCBNYXRoLm1heChzaXplWzBdIC0gMSwgLTEpLFxuICAgICAgICAgIE1hdGgubWluKDAsIHNpemVbMV0pLCBNYXRoLm1heChzaXplWzFdIC0gMSwgLTEpKTtcbiAgICAgIHJldHVybiB0aWxlUmFuZ2U7XG4gICAgfSwgdGhpcyk7XG4gIH0gZWxzZSBpZiAoZXh0ZW50KSB7XG4gICAgdGhpcy5jYWxjdWxhdGVUaWxlUmFuZ2VzXyhleHRlbnQpO1xuICB9XG5cbn07XG5cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICogQHR5cGUge29sLlRpbGVDb29yZH1cbiAqL1xuX29sX3RpbGVncmlkX1RpbGVHcmlkXy50bXBUaWxlQ29vcmRfID0gWzAsIDAsIDBdO1xuXG5cbi8qKlxuICogQ2FsbCBhIGZ1bmN0aW9uIHdpdGggZWFjaCB0aWxlIGNvb3JkaW5hdGUgZm9yIGEgZ2l2ZW4gZXh0ZW50IGFuZCB6b29tIGxldmVsLlxuICpcbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IHpvb20gSW50ZWdlciB6b29tIGxldmVsLlxuICogQHBhcmFtIHtmdW5jdGlvbihvbC5UaWxlQ29vcmQpfSBjYWxsYmFjayBGdW5jdGlvbiBjYWxsZWQgd2l0aCBlYWNoIHRpbGUgY29vcmRpbmF0ZS5cbiAqIEBhcGlcbiAqL1xuX29sX3RpbGVncmlkX1RpbGVHcmlkXy5wcm90b3R5cGUuZm9yRWFjaFRpbGVDb29yZCA9IGZ1bmN0aW9uKGV4dGVudCwgem9vbSwgY2FsbGJhY2spIHtcbiAgdmFyIHRpbGVSYW5nZSA9IHRoaXMuZ2V0VGlsZVJhbmdlRm9yRXh0ZW50QW5kWihleHRlbnQsIHpvb20pO1xuICBmb3IgKHZhciBpID0gdGlsZVJhbmdlLm1pblgsIGlpID0gdGlsZVJhbmdlLm1heFg7IGkgPD0gaWk7ICsraSkge1xuICAgIGZvciAodmFyIGogPSB0aWxlUmFuZ2UubWluWSwgamogPSB0aWxlUmFuZ2UubWF4WTsgaiA8PSBqajsgKytqKSB7XG4gICAgICBjYWxsYmFjayhbem9vbSwgaSwgal0pO1xuICAgIH1cbiAgfVxufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wuVGlsZUNvb3JkfSB0aWxlQ29vcmQgVGlsZSBjb29yZGluYXRlLlxuICogQHBhcmFtIHtmdW5jdGlvbih0aGlzOiBULCBudW1iZXIsIG9sLlRpbGVSYW5nZSk6IGJvb2xlYW59IGNhbGxiYWNrIENhbGxiYWNrLlxuICogQHBhcmFtIHtUPX0gb3B0X3RoaXMgVGhlIG9iamVjdCB0byB1c2UgYXMgYHRoaXNgIGluIGBjYWxsYmFja2AuXG4gKiBAcGFyYW0ge29sLlRpbGVSYW5nZT19IG9wdF90aWxlUmFuZ2UgVGVtcG9yYXJ5IG9sLlRpbGVSYW5nZSBvYmplY3QuXG4gKiBAcGFyYW0ge29sLkV4dGVudD19IG9wdF9leHRlbnQgVGVtcG9yYXJ5IG9sLkV4dGVudCBvYmplY3QuXG4gKiBAcmV0dXJuIHtib29sZWFufSBDYWxsYmFjayBzdWNjZWVkZWQuXG4gKiBAdGVtcGxhdGUgVFxuICovXG5fb2xfdGlsZWdyaWRfVGlsZUdyaWRfLnByb3RvdHlwZS5mb3JFYWNoVGlsZUNvb3JkUGFyZW50VGlsZVJhbmdlID0gZnVuY3Rpb24odGlsZUNvb3JkLCBjYWxsYmFjaywgb3B0X3RoaXMsIG9wdF90aWxlUmFuZ2UsIG9wdF9leHRlbnQpIHtcbiAgdmFyIHRpbGVSYW5nZSwgeCwgeTtcbiAgdmFyIHRpbGVDb29yZEV4dGVudCA9IG51bGw7XG4gIHZhciB6ID0gdGlsZUNvb3JkWzBdIC0gMTtcbiAgaWYgKHRoaXMuem9vbUZhY3Rvcl8gPT09IDIpIHtcbiAgICB4ID0gdGlsZUNvb3JkWzFdO1xuICAgIHkgPSB0aWxlQ29vcmRbMl07XG4gIH0gZWxzZSB7XG4gICAgdGlsZUNvb3JkRXh0ZW50ID0gdGhpcy5nZXRUaWxlQ29vcmRFeHRlbnQodGlsZUNvb3JkLCBvcHRfZXh0ZW50KTtcbiAgfVxuICB3aGlsZSAoeiA+PSB0aGlzLm1pblpvb20pIHtcbiAgICBpZiAodGhpcy56b29tRmFjdG9yXyA9PT0gMikge1xuICAgICAgeCA9IE1hdGguZmxvb3IoeCAvIDIpO1xuICAgICAgeSA9IE1hdGguZmxvb3IoeSAvIDIpO1xuICAgICAgdGlsZVJhbmdlID0gX29sX1RpbGVSYW5nZV8uY3JlYXRlT3JVcGRhdGUoeCwgeCwgeSwgeSwgb3B0X3RpbGVSYW5nZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbGVSYW5nZSA9IHRoaXMuZ2V0VGlsZVJhbmdlRm9yRXh0ZW50QW5kWih0aWxlQ29vcmRFeHRlbnQsIHosIG9wdF90aWxlUmFuZ2UpO1xuICAgIH1cbiAgICBpZiAoY2FsbGJhY2suY2FsbChvcHRfdGhpcywgeiwgdGlsZVJhbmdlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC0tejtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBleHRlbnQgZm9yIHRoaXMgdGlsZSBncmlkLCBpZiBpdCB3YXMgY29uZmlndXJlZC5cbiAqIEByZXR1cm4ge29sLkV4dGVudH0gRXh0ZW50LlxuICovXG5fb2xfdGlsZWdyaWRfVGlsZUdyaWRfLnByb3RvdHlwZS5nZXRFeHRlbnQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZXh0ZW50Xztcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIG1heGltdW0gem9vbSBsZXZlbCBmb3IgdGhlIGdyaWQuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IE1heCB6b29tLlxuICogQGFwaVxuICovXG5fb2xfdGlsZWdyaWRfVGlsZUdyaWRfLnByb3RvdHlwZS5nZXRNYXhab29tID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLm1heFpvb207XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBtaW5pbXVtIHpvb20gbGV2ZWwgZm9yIHRoZSBncmlkLlxuICogQHJldHVybiB7bnVtYmVyfSBNaW4gem9vbS5cbiAqIEBhcGlcbiAqL1xuX29sX3RpbGVncmlkX1RpbGVHcmlkXy5wcm90b3R5cGUuZ2V0TWluWm9vbSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5taW5ab29tO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgb3JpZ2luIGZvciB0aGUgZ3JpZCBhdCB0aGUgZ2l2ZW4gem9vbSBsZXZlbC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB6IEludGVnZXIgem9vbSBsZXZlbC5cbiAqIEByZXR1cm4ge29sLkNvb3JkaW5hdGV9IE9yaWdpbi5cbiAqIEBhcGlcbiAqL1xuX29sX3RpbGVncmlkX1RpbGVHcmlkXy5wcm90b3R5cGUuZ2V0T3JpZ2luID0gZnVuY3Rpb24oeikge1xuICBpZiAodGhpcy5vcmlnaW5fKSB7XG4gICAgcmV0dXJuIHRoaXMub3JpZ2luXztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGhpcy5vcmlnaW5zX1t6XTtcbiAgfVxufTtcblxuXG4vKipcbiAqIEdldCB0aGUgcmVzb2x1dGlvbiBmb3IgdGhlIGdpdmVuIHpvb20gbGV2ZWwuXG4gKiBAcGFyYW0ge251bWJlcn0geiBJbnRlZ2VyIHpvb20gbGV2ZWwuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFJlc29sdXRpb24uXG4gKiBAYXBpXG4gKi9cbl9vbF90aWxlZ3JpZF9UaWxlR3JpZF8ucHJvdG90eXBlLmdldFJlc29sdXRpb24gPSBmdW5jdGlvbih6KSB7XG4gIHJldHVybiB0aGlzLnJlc29sdXRpb25zX1t6XTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIGxpc3Qgb2YgcmVzb2x1dGlvbnMgZm9yIHRoZSB0aWxlIGdyaWQuXG4gKiBAcmV0dXJuIHtBcnJheS48bnVtYmVyPn0gUmVzb2x1dGlvbnMuXG4gKiBAYXBpXG4gKi9cbl9vbF90aWxlZ3JpZF9UaWxlR3JpZF8ucHJvdG90eXBlLmdldFJlc29sdXRpb25zID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnJlc29sdXRpb25zXztcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge29sLlRpbGVDb29yZH0gdGlsZUNvb3JkIFRpbGUgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7b2wuVGlsZVJhbmdlPX0gb3B0X3RpbGVSYW5nZSBUZW1wb3Jhcnkgb2wuVGlsZVJhbmdlIG9iamVjdC5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50PX0gb3B0X2V4dGVudCBUZW1wb3Jhcnkgb2wuRXh0ZW50IG9iamVjdC5cbiAqIEByZXR1cm4ge29sLlRpbGVSYW5nZX0gVGlsZSByYW5nZS5cbiAqL1xuX29sX3RpbGVncmlkX1RpbGVHcmlkXy5wcm90b3R5cGUuZ2V0VGlsZUNvb3JkQ2hpbGRUaWxlUmFuZ2UgPSBmdW5jdGlvbih0aWxlQ29vcmQsIG9wdF90aWxlUmFuZ2UsIG9wdF9leHRlbnQpIHtcbiAgaWYgKHRpbGVDb29yZFswXSA8IHRoaXMubWF4Wm9vbSkge1xuICAgIGlmICh0aGlzLnpvb21GYWN0b3JfID09PSAyKSB7XG4gICAgICB2YXIgbWluWCA9IHRpbGVDb29yZFsxXSAqIDI7XG4gICAgICB2YXIgbWluWSA9IHRpbGVDb29yZFsyXSAqIDI7XG4gICAgICByZXR1cm4gX29sX1RpbGVSYW5nZV8uY3JlYXRlT3JVcGRhdGUobWluWCwgbWluWCArIDEsIG1pblksIG1pblkgKyAxLCBvcHRfdGlsZVJhbmdlKTtcbiAgICB9XG4gICAgdmFyIHRpbGVDb29yZEV4dGVudCA9IHRoaXMuZ2V0VGlsZUNvb3JkRXh0ZW50KHRpbGVDb29yZCwgb3B0X2V4dGVudCk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGlsZVJhbmdlRm9yRXh0ZW50QW5kWihcbiAgICAgICAgdGlsZUNvb3JkRXh0ZW50LCB0aWxlQ29vcmRbMF0gKyAxLCBvcHRfdGlsZVJhbmdlKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIGV4dGVudCBmb3IgYSB0aWxlIHJhbmdlLlxuICogQHBhcmFtIHtudW1iZXJ9IHogSW50ZWdlciB6b29tIGxldmVsLlxuICogQHBhcmFtIHtvbC5UaWxlUmFuZ2V9IHRpbGVSYW5nZSBUaWxlIHJhbmdlLlxuICogQHBhcmFtIHtvbC5FeHRlbnQ9fSBvcHRfZXh0ZW50IFRlbXBvcmFyeSBvbC5FeHRlbnQgb2JqZWN0LlxuICogQHJldHVybiB7b2wuRXh0ZW50fSBFeHRlbnQuXG4gKi9cbl9vbF90aWxlZ3JpZF9UaWxlR3JpZF8ucHJvdG90eXBlLmdldFRpbGVSYW5nZUV4dGVudCA9IGZ1bmN0aW9uKHosIHRpbGVSYW5nZSwgb3B0X2V4dGVudCkge1xuICB2YXIgb3JpZ2luID0gdGhpcy5nZXRPcmlnaW4oeik7XG4gIHZhciByZXNvbHV0aW9uID0gdGhpcy5nZXRSZXNvbHV0aW9uKHopO1xuICB2YXIgdGlsZVNpemUgPSBfb2xfc2l6ZV8udG9TaXplKHRoaXMuZ2V0VGlsZVNpemUoeiksIHRoaXMudG1wU2l6ZV8pO1xuICB2YXIgbWluWCA9IG9yaWdpblswXSArIHRpbGVSYW5nZS5taW5YICogdGlsZVNpemVbMF0gKiByZXNvbHV0aW9uO1xuICB2YXIgbWF4WCA9IG9yaWdpblswXSArICh0aWxlUmFuZ2UubWF4WCArIDEpICogdGlsZVNpemVbMF0gKiByZXNvbHV0aW9uO1xuICB2YXIgbWluWSA9IG9yaWdpblsxXSArIHRpbGVSYW5nZS5taW5ZICogdGlsZVNpemVbMV0gKiByZXNvbHV0aW9uO1xuICB2YXIgbWF4WSA9IG9yaWdpblsxXSArICh0aWxlUmFuZ2UubWF4WSArIDEpICogdGlsZVNpemVbMV0gKiByZXNvbHV0aW9uO1xuICByZXR1cm4gX29sX2V4dGVudF8uY3JlYXRlT3JVcGRhdGUobWluWCwgbWluWSwgbWF4WCwgbWF4WSwgb3B0X2V4dGVudCk7XG59O1xuXG5cbi8qKlxuICogR2V0IGEgdGlsZSByYW5nZSBmb3IgdGhlIGdpdmVuIGV4dGVudCBhbmQgaW50ZWdlciB6b29tIGxldmVsLlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0geiBJbnRlZ2VyIHpvb20gbGV2ZWwuXG4gKiBAcGFyYW0ge29sLlRpbGVSYW5nZT19IG9wdF90aWxlUmFuZ2UgVGVtcG9yYXJ5IHRpbGUgcmFuZ2Ugb2JqZWN0LlxuICogQHJldHVybiB7b2wuVGlsZVJhbmdlfSBUaWxlIHJhbmdlLlxuICovXG5fb2xfdGlsZWdyaWRfVGlsZUdyaWRfLnByb3RvdHlwZS5nZXRUaWxlUmFuZ2VGb3JFeHRlbnRBbmRaID0gZnVuY3Rpb24oZXh0ZW50LCB6LCBvcHRfdGlsZVJhbmdlKSB7XG4gIHZhciB0aWxlQ29vcmQgPSBfb2xfdGlsZWdyaWRfVGlsZUdyaWRfLnRtcFRpbGVDb29yZF87XG4gIHRoaXMuZ2V0VGlsZUNvb3JkRm9yWFlBbmRaXyhleHRlbnRbMF0sIGV4dGVudFsxXSwgeiwgZmFsc2UsIHRpbGVDb29yZCk7XG4gIHZhciBtaW5YID0gdGlsZUNvb3JkWzFdO1xuICB2YXIgbWluWSA9IHRpbGVDb29yZFsyXTtcbiAgdGhpcy5nZXRUaWxlQ29vcmRGb3JYWUFuZFpfKGV4dGVudFsyXSwgZXh0ZW50WzNdLCB6LCB0cnVlLCB0aWxlQ29vcmQpO1xuICByZXR1cm4gX29sX1RpbGVSYW5nZV8uY3JlYXRlT3JVcGRhdGUoXG4gICAgICBtaW5YLCB0aWxlQ29vcmRbMV0sIG1pblksIHRpbGVDb29yZFsyXSwgb3B0X3RpbGVSYW5nZSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtvbC5UaWxlQ29vcmR9IHRpbGVDb29yZCBUaWxlIGNvb3JkaW5hdGUuXG4gKiBAcmV0dXJuIHtvbC5Db29yZGluYXRlfSBUaWxlIGNlbnRlci5cbiAqL1xuX29sX3RpbGVncmlkX1RpbGVHcmlkXy5wcm90b3R5cGUuZ2V0VGlsZUNvb3JkQ2VudGVyID0gZnVuY3Rpb24odGlsZUNvb3JkKSB7XG4gIHZhciBvcmlnaW4gPSB0aGlzLmdldE9yaWdpbih0aWxlQ29vcmRbMF0pO1xuICB2YXIgcmVzb2x1dGlvbiA9IHRoaXMuZ2V0UmVzb2x1dGlvbih0aWxlQ29vcmRbMF0pO1xuICB2YXIgdGlsZVNpemUgPSBfb2xfc2l6ZV8udG9TaXplKHRoaXMuZ2V0VGlsZVNpemUodGlsZUNvb3JkWzBdKSwgdGhpcy50bXBTaXplXyk7XG4gIHJldHVybiBbXG4gICAgb3JpZ2luWzBdICsgKHRpbGVDb29yZFsxXSArIDAuNSkgKiB0aWxlU2l6ZVswXSAqIHJlc29sdXRpb24sXG4gICAgb3JpZ2luWzFdICsgKHRpbGVDb29yZFsyXSArIDAuNSkgKiB0aWxlU2l6ZVsxXSAqIHJlc29sdXRpb25cbiAgXTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIGV4dGVudCBvZiBhIHRpbGUgY29vcmRpbmF0ZS5cbiAqXG4gKiBAcGFyYW0ge29sLlRpbGVDb29yZH0gdGlsZUNvb3JkIFRpbGUgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50PX0gb3B0X2V4dGVudCBUZW1wb3JhcnkgZXh0ZW50IG9iamVjdC5cbiAqIEByZXR1cm4ge29sLkV4dGVudH0gRXh0ZW50LlxuICogQGFwaVxuICovXG5fb2xfdGlsZWdyaWRfVGlsZUdyaWRfLnByb3RvdHlwZS5nZXRUaWxlQ29vcmRFeHRlbnQgPSBmdW5jdGlvbih0aWxlQ29vcmQsIG9wdF9leHRlbnQpIHtcbiAgdmFyIG9yaWdpbiA9IHRoaXMuZ2V0T3JpZ2luKHRpbGVDb29yZFswXSk7XG4gIHZhciByZXNvbHV0aW9uID0gdGhpcy5nZXRSZXNvbHV0aW9uKHRpbGVDb29yZFswXSk7XG4gIHZhciB0aWxlU2l6ZSA9IF9vbF9zaXplXy50b1NpemUodGhpcy5nZXRUaWxlU2l6ZSh0aWxlQ29vcmRbMF0pLCB0aGlzLnRtcFNpemVfKTtcbiAgdmFyIG1pblggPSBvcmlnaW5bMF0gKyB0aWxlQ29vcmRbMV0gKiB0aWxlU2l6ZVswXSAqIHJlc29sdXRpb247XG4gIHZhciBtaW5ZID0gb3JpZ2luWzFdICsgdGlsZUNvb3JkWzJdICogdGlsZVNpemVbMV0gKiByZXNvbHV0aW9uO1xuICB2YXIgbWF4WCA9IG1pblggKyB0aWxlU2l6ZVswXSAqIHJlc29sdXRpb247XG4gIHZhciBtYXhZID0gbWluWSArIHRpbGVTaXplWzFdICogcmVzb2x1dGlvbjtcbiAgcmV0dXJuIF9vbF9leHRlbnRfLmNyZWF0ZU9yVXBkYXRlKG1pblgsIG1pblksIG1heFgsIG1heFksIG9wdF9leHRlbnQpO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgdGlsZSBjb29yZGluYXRlIGZvciB0aGUgZ2l2ZW4gbWFwIGNvb3JkaW5hdGUgYW5kIHJlc29sdXRpb24uICBUaGlzXG4gKiBtZXRob2QgY29uc2lkZXJzIHRoYXQgY29vcmRpbmF0ZXMgdGhhdCBpbnRlcnNlY3QgdGlsZSBib3VuZGFyaWVzIHNob3VsZCBiZVxuICogYXNzaWduZWQgdGhlIGhpZ2hlciB0aWxlIGNvb3JkaW5hdGUuXG4gKlxuICogQHBhcmFtIHtvbC5Db29yZGluYXRlfSBjb29yZGluYXRlIENvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge251bWJlcn0gcmVzb2x1dGlvbiBSZXNvbHV0aW9uLlxuICogQHBhcmFtIHtvbC5UaWxlQ29vcmQ9fSBvcHRfdGlsZUNvb3JkIERlc3RpbmF0aW9uIG9sLlRpbGVDb29yZCBvYmplY3QuXG4gKiBAcmV0dXJuIHtvbC5UaWxlQ29vcmR9IFRpbGUgY29vcmRpbmF0ZS5cbiAqIEBhcGlcbiAqL1xuX29sX3RpbGVncmlkX1RpbGVHcmlkXy5wcm90b3R5cGUuZ2V0VGlsZUNvb3JkRm9yQ29vcmRBbmRSZXNvbHV0aW9uID0gZnVuY3Rpb24oY29vcmRpbmF0ZSwgcmVzb2x1dGlvbiwgb3B0X3RpbGVDb29yZCkge1xuICByZXR1cm4gdGhpcy5nZXRUaWxlQ29vcmRGb3JYWUFuZFJlc29sdXRpb25fKFxuICAgICAgY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXSwgcmVzb2x1dGlvbiwgZmFsc2UsIG9wdF90aWxlQ29vcmQpO1xufTtcblxuXG4vKipcbiAqIE5vdGUgdGhhdCB0aGlzIG1ldGhvZCBzaG91bGQgbm90IGJlIGNhbGxlZCBmb3IgcmVzb2x1dGlvbnMgdGhhdCBjb3JyZXNwb25kXG4gKiB0byBhbiBpbnRlZ2VyIHpvb20gbGV2ZWwuICBJbnN0ZWFkIGNhbGwgdGhlIGBnZXRUaWxlQ29vcmRGb3JYWUFuZFpfYCBtZXRob2QuXG4gKiBAcGFyYW0ge251bWJlcn0geCBYLlxuICogQHBhcmFtIHtudW1iZXJ9IHkgWS5cbiAqIEBwYXJhbSB7bnVtYmVyfSByZXNvbHV0aW9uIFJlc29sdXRpb24gKGZvciBhIG5vbi1pbnRlZ2VyIHpvb20gbGV2ZWwpLlxuICogQHBhcmFtIHtib29sZWFufSByZXZlcnNlSW50ZXJzZWN0aW9uUG9saWN5IEluc3RlYWQgb2YgbGV0dGluZyBlZGdlXG4gKiAgICAgaW50ZXJzZWN0aW9ucyBnbyB0byB0aGUgaGlnaGVyIHRpbGUgY29vcmRpbmF0ZSwgbGV0IGVkZ2UgaW50ZXJzZWN0aW9uc1xuICogICAgIGdvIHRvIHRoZSBsb3dlciB0aWxlIGNvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge29sLlRpbGVDb29yZD19IG9wdF90aWxlQ29vcmQgVGVtcG9yYXJ5IG9sLlRpbGVDb29yZCBvYmplY3QuXG4gKiBAcmV0dXJuIHtvbC5UaWxlQ29vcmR9IFRpbGUgY29vcmRpbmF0ZS5cbiAqIEBwcml2YXRlXG4gKi9cbl9vbF90aWxlZ3JpZF9UaWxlR3JpZF8ucHJvdG90eXBlLmdldFRpbGVDb29yZEZvclhZQW5kUmVzb2x1dGlvbl8gPSBmdW5jdGlvbihcbiAgICB4LCB5LCByZXNvbHV0aW9uLCByZXZlcnNlSW50ZXJzZWN0aW9uUG9saWN5LCBvcHRfdGlsZUNvb3JkKSB7XG4gIHZhciB6ID0gdGhpcy5nZXRaRm9yUmVzb2x1dGlvbihyZXNvbHV0aW9uKTtcbiAgdmFyIHNjYWxlID0gcmVzb2x1dGlvbiAvIHRoaXMuZ2V0UmVzb2x1dGlvbih6KTtcbiAgdmFyIG9yaWdpbiA9IHRoaXMuZ2V0T3JpZ2luKHopO1xuICB2YXIgdGlsZVNpemUgPSBfb2xfc2l6ZV8udG9TaXplKHRoaXMuZ2V0VGlsZVNpemUoeiksIHRoaXMudG1wU2l6ZV8pO1xuXG4gIHZhciBhZGp1c3RYID0gcmV2ZXJzZUludGVyc2VjdGlvblBvbGljeSA/IDAuNSA6IDA7XG4gIHZhciBhZGp1c3RZID0gcmV2ZXJzZUludGVyc2VjdGlvblBvbGljeSA/IDAgOiAwLjU7XG4gIHZhciB4RnJvbU9yaWdpbiA9IE1hdGguZmxvb3IoKHggLSBvcmlnaW5bMF0pIC8gcmVzb2x1dGlvbiArIGFkanVzdFgpO1xuICB2YXIgeUZyb21PcmlnaW4gPSBNYXRoLmZsb29yKCh5IC0gb3JpZ2luWzFdKSAvIHJlc29sdXRpb24gKyBhZGp1c3RZKTtcbiAgdmFyIHRpbGVDb29yZFggPSBzY2FsZSAqIHhGcm9tT3JpZ2luIC8gdGlsZVNpemVbMF07XG4gIHZhciB0aWxlQ29vcmRZID0gc2NhbGUgKiB5RnJvbU9yaWdpbiAvIHRpbGVTaXplWzFdO1xuXG4gIGlmIChyZXZlcnNlSW50ZXJzZWN0aW9uUG9saWN5KSB7XG4gICAgdGlsZUNvb3JkWCA9IE1hdGguY2VpbCh0aWxlQ29vcmRYKSAtIDE7XG4gICAgdGlsZUNvb3JkWSA9IE1hdGguY2VpbCh0aWxlQ29vcmRZKSAtIDE7XG4gIH0gZWxzZSB7XG4gICAgdGlsZUNvb3JkWCA9IE1hdGguZmxvb3IodGlsZUNvb3JkWCk7XG4gICAgdGlsZUNvb3JkWSA9IE1hdGguZmxvb3IodGlsZUNvb3JkWSk7XG4gIH1cblxuICByZXR1cm4gX29sX3RpbGVjb29yZF8uY3JlYXRlT3JVcGRhdGUoeiwgdGlsZUNvb3JkWCwgdGlsZUNvb3JkWSwgb3B0X3RpbGVDb29yZCk7XG59O1xuXG5cbi8qKlxuICogQWx0aG91Z2ggdGhlcmUgaXMgcmVwZXRpdGlvbiBiZXR3ZWVuIHRoaXMgbWV0aG9kIGFuZCBgZ2V0VGlsZUNvb3JkRm9yWFlBbmRSZXNvbHV0aW9uX2AsXG4gKiB0aGV5IHNob3VsZCBoYXZlIHNlcGFyYXRlIGltcGxlbWVudGF0aW9ucy4gIFRoaXMgbWV0aG9kIGlzIGZvciBpbnRlZ2VyIHpvb21cbiAqIGxldmVscy4gIFRoZSBvdGhlciBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGZvciByZXNvbHV0aW9ucyBjb3JyZXNwb25kaW5nXG4gKiB0byBub24taW50ZWdlciB6b29tIGxldmVscy5cbiAqIEBwYXJhbSB7bnVtYmVyfSB4IE1hcCB4IGNvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge251bWJlcn0geSBNYXAgeSBjb29yZGluYXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IHogSW50ZWdlciB6b29tIGxldmVsLlxuICogQHBhcmFtIHtib29sZWFufSByZXZlcnNlSW50ZXJzZWN0aW9uUG9saWN5IEluc3RlYWQgb2YgbGV0dGluZyBlZGdlXG4gKiAgICAgaW50ZXJzZWN0aW9ucyBnbyB0byB0aGUgaGlnaGVyIHRpbGUgY29vcmRpbmF0ZSwgbGV0IGVkZ2UgaW50ZXJzZWN0aW9uc1xuICogICAgIGdvIHRvIHRoZSBsb3dlciB0aWxlIGNvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge29sLlRpbGVDb29yZD19IG9wdF90aWxlQ29vcmQgVGVtcG9yYXJ5IG9sLlRpbGVDb29yZCBvYmplY3QuXG4gKiBAcmV0dXJuIHtvbC5UaWxlQ29vcmR9IFRpbGUgY29vcmRpbmF0ZS5cbiAqIEBwcml2YXRlXG4gKi9cbl9vbF90aWxlZ3JpZF9UaWxlR3JpZF8ucHJvdG90eXBlLmdldFRpbGVDb29yZEZvclhZQW5kWl8gPSBmdW5jdGlvbih4LCB5LCB6LCByZXZlcnNlSW50ZXJzZWN0aW9uUG9saWN5LCBvcHRfdGlsZUNvb3JkKSB7XG4gIHZhciBvcmlnaW4gPSB0aGlzLmdldE9yaWdpbih6KTtcbiAgdmFyIHJlc29sdXRpb24gPSB0aGlzLmdldFJlc29sdXRpb24oeik7XG4gIHZhciB0aWxlU2l6ZSA9IF9vbF9zaXplXy50b1NpemUodGhpcy5nZXRUaWxlU2l6ZSh6KSwgdGhpcy50bXBTaXplXyk7XG5cbiAgdmFyIGFkanVzdFggPSByZXZlcnNlSW50ZXJzZWN0aW9uUG9saWN5ID8gMC41IDogMDtcbiAgdmFyIGFkanVzdFkgPSByZXZlcnNlSW50ZXJzZWN0aW9uUG9saWN5ID8gMCA6IDAuNTtcbiAgdmFyIHhGcm9tT3JpZ2luID0gTWF0aC5mbG9vcigoeCAtIG9yaWdpblswXSkgLyByZXNvbHV0aW9uICsgYWRqdXN0WCk7XG4gIHZhciB5RnJvbU9yaWdpbiA9IE1hdGguZmxvb3IoKHkgLSBvcmlnaW5bMV0pIC8gcmVzb2x1dGlvbiArIGFkanVzdFkpO1xuICB2YXIgdGlsZUNvb3JkWCA9IHhGcm9tT3JpZ2luIC8gdGlsZVNpemVbMF07XG4gIHZhciB0aWxlQ29vcmRZID0geUZyb21PcmlnaW4gLyB0aWxlU2l6ZVsxXTtcblxuICBpZiAocmV2ZXJzZUludGVyc2VjdGlvblBvbGljeSkge1xuICAgIHRpbGVDb29yZFggPSBNYXRoLmNlaWwodGlsZUNvb3JkWCkgLSAxO1xuICAgIHRpbGVDb29yZFkgPSBNYXRoLmNlaWwodGlsZUNvb3JkWSkgLSAxO1xuICB9IGVsc2Uge1xuICAgIHRpbGVDb29yZFggPSBNYXRoLmZsb29yKHRpbGVDb29yZFgpO1xuICAgIHRpbGVDb29yZFkgPSBNYXRoLmZsb29yKHRpbGVDb29yZFkpO1xuICB9XG5cbiAgcmV0dXJuIF9vbF90aWxlY29vcmRfLmNyZWF0ZU9yVXBkYXRlKHosIHRpbGVDb29yZFgsIHRpbGVDb29yZFksIG9wdF90aWxlQ29vcmQpO1xufTtcblxuXG4vKipcbiAqIEdldCBhIHRpbGUgY29vcmRpbmF0ZSBnaXZlbiBhIG1hcCBjb29yZGluYXRlIGFuZCB6b29tIGxldmVsLlxuICogQHBhcmFtIHtvbC5Db29yZGluYXRlfSBjb29yZGluYXRlIENvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge251bWJlcn0geiBab29tIGxldmVsLlxuICogQHBhcmFtIHtvbC5UaWxlQ29vcmQ9fSBvcHRfdGlsZUNvb3JkIERlc3RpbmF0aW9uIG9sLlRpbGVDb29yZCBvYmplY3QuXG4gKiBAcmV0dXJuIHtvbC5UaWxlQ29vcmR9IFRpbGUgY29vcmRpbmF0ZS5cbiAqIEBhcGlcbiAqL1xuX29sX3RpbGVncmlkX1RpbGVHcmlkXy5wcm90b3R5cGUuZ2V0VGlsZUNvb3JkRm9yQ29vcmRBbmRaID0gZnVuY3Rpb24oY29vcmRpbmF0ZSwgeiwgb3B0X3RpbGVDb29yZCkge1xuICByZXR1cm4gdGhpcy5nZXRUaWxlQ29vcmRGb3JYWUFuZFpfKFxuICAgICAgY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXSwgeiwgZmFsc2UsIG9wdF90aWxlQ29vcmQpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wuVGlsZUNvb3JkfSB0aWxlQ29vcmQgVGlsZSBjb29yZGluYXRlLlxuICogQHJldHVybiB7bnVtYmVyfSBUaWxlIHJlc29sdXRpb24uXG4gKi9cbl9vbF90aWxlZ3JpZF9UaWxlR3JpZF8ucHJvdG90eXBlLmdldFRpbGVDb29yZFJlc29sdXRpb24gPSBmdW5jdGlvbih0aWxlQ29vcmQpIHtcbiAgcmV0dXJuIHRoaXMucmVzb2x1dGlvbnNfW3RpbGVDb29yZFswXV07XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSB0aWxlIHNpemUgZm9yIGEgem9vbSBsZXZlbC4gVGhlIHR5cGUgb2YgdGhlIHJldHVybiB2YWx1ZSBtYXRjaGVzIHRoZVxuICogYHRpbGVTaXplYCBvciBgdGlsZVNpemVzYCB0aGF0IHRoZSB0aWxlIGdyaWQgd2FzIGNvbmZpZ3VyZWQgd2l0aC4gVG8gYWx3YXlzXG4gKiBnZXQgYW4gYG9sLlNpemVgLCBydW4gdGhlIHJlc3VsdCB0aHJvdWdoIGBvbC5zaXplLnRvU2l6ZSgpYC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB6IFouXG4gKiBAcmV0dXJuIHtudW1iZXJ8b2wuU2l6ZX0gVGlsZSBzaXplLlxuICogQGFwaVxuICovXG5fb2xfdGlsZWdyaWRfVGlsZUdyaWRfLnByb3RvdHlwZS5nZXRUaWxlU2l6ZSA9IGZ1bmN0aW9uKHopIHtcbiAgaWYgKHRoaXMudGlsZVNpemVfKSB7XG4gICAgcmV0dXJuIHRoaXMudGlsZVNpemVfO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLnRpbGVTaXplc19bel07XG4gIH1cbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0geiBab29tIGxldmVsLlxuICogQHJldHVybiB7b2wuVGlsZVJhbmdlfSBFeHRlbnQgdGlsZSByYW5nZSBmb3IgdGhlIHNwZWNpZmllZCB6b29tIGxldmVsLlxuICovXG5fb2xfdGlsZWdyaWRfVGlsZUdyaWRfLnByb3RvdHlwZS5nZXRGdWxsVGlsZVJhbmdlID0gZnVuY3Rpb24oeikge1xuICBpZiAoIXRoaXMuZnVsbFRpbGVSYW5nZXNfKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRoaXMuZnVsbFRpbGVSYW5nZXNfW3pdO1xuICB9XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHJlc29sdXRpb24gUmVzb2x1dGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyPX0gb3B0X2RpcmVjdGlvbiBJZiAwLCB0aGUgbmVhcmVzdCByZXNvbHV0aW9uIHdpbGwgYmUgdXNlZC5cbiAqICAgICBJZiAxLCB0aGUgbmVhcmVzdCBsb3dlciByZXNvbHV0aW9uIHdpbGwgYmUgdXNlZC4gSWYgLTEsIHRoZSBuZWFyZXN0XG4gKiAgICAgaGlnaGVyIHJlc29sdXRpb24gd2lsbCBiZSB1c2VkLiBEZWZhdWx0IGlzIDAuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFouXG4gKiBAYXBpXG4gKi9cbl9vbF90aWxlZ3JpZF9UaWxlR3JpZF8ucHJvdG90eXBlLmdldFpGb3JSZXNvbHV0aW9uID0gZnVuY3Rpb24oXG4gICAgcmVzb2x1dGlvbiwgb3B0X2RpcmVjdGlvbikge1xuICB2YXIgeiA9IF9vbF9hcnJheV8ubGluZWFyRmluZE5lYXJlc3QodGhpcy5yZXNvbHV0aW9uc18sIHJlc29sdXRpb24sXG4gICAgICBvcHRfZGlyZWN0aW9uIHx8IDApO1xuICByZXR1cm4gX29sX21hdGhfLmNsYW1wKHosIHRoaXMubWluWm9vbSwgdGhpcy5tYXhab29tKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0geyFvbC5FeHRlbnR9IGV4dGVudCBFeHRlbnQgZm9yIHRoaXMgdGlsZSBncmlkLlxuICogQHByaXZhdGVcbiAqL1xuX29sX3RpbGVncmlkX1RpbGVHcmlkXy5wcm90b3R5cGUuY2FsY3VsYXRlVGlsZVJhbmdlc18gPSBmdW5jdGlvbihleHRlbnQpIHtcbiAgdmFyIGxlbmd0aCA9IHRoaXMucmVzb2x1dGlvbnNfLmxlbmd0aDtcbiAgdmFyIGZ1bGxUaWxlUmFuZ2VzID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gIGZvciAodmFyIHogPSB0aGlzLm1pblpvb207IHogPCBsZW5ndGg7ICsreikge1xuICAgIGZ1bGxUaWxlUmFuZ2VzW3pdID0gdGhpcy5nZXRUaWxlUmFuZ2VGb3JFeHRlbnRBbmRaKGV4dGVudCwgeik7XG4gIH1cbiAgdGhpcy5mdWxsVGlsZVJhbmdlc18gPSBmdWxsVGlsZVJhbmdlcztcbn07XG5leHBvcnQgZGVmYXVsdCBfb2xfdGlsZWdyaWRfVGlsZUdyaWRfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvdGlsZWdyaWQvdGlsZWdyaWQuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBvbFRpbGVMYXllciBmcm9tICdvbC9sYXllci90aWxlJztcbmltcG9ydCBvbEltYWdlQ2FudmFzU291cmNlIGZyb20gJ29sL3NvdXJjZS9pbWFnZWNhbnZhcyc7XG5pbXBvcnQgb2xTdGFtZW5Tb3VyY2UgZnJvbSAnb2wvc291cmNlL3N0YW1lbic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdExheWVyIHtcblxuICBwcml2YXRlIG9wdGlvbnM6IGFueTtcbiAgcHJpdmF0ZSBfbGF5ZXI6IGFueTtcbiAgcHJpdmF0ZSBfbWFwOiBhbnkgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IGFueSkge1xuICAgIGNvbnNvbGUuZGVidWcoJ1Rlc3RMYXllci5jb25zdHJ1Y3RvcicpO1xuICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSBpbiBvcHRpb25zKSB7XG4gICAgICB0aGlzLm9wdGlvbnNbaV0gPSBvcHRpb25zW2ldO1xuICAgIH1cbiAgfVxuXG4gIGdldE1hcExheWVyKCkge1xuICAgIGNvbnNvbGUuZGVidWcoJ1Rlc3RMYXllci5nZXRNYXBMYXllcicpO1xuICAgIHRoaXMuX2xheWVyID0gdGhpcy5fbGF5ZXIgfHwgbmV3IG9sVGlsZUxheWVyKHtcbiAgICAgIHNvdXJjZTogbmV3IG9sU3RhbWVuU291cmNlKHtcbiAgICAgICAgbGF5ZXI6ICd0b25lcidcbiAgICAgIH0pXG4gICAgfSk7XG4gICAgY29uc29sZS5kZWJ1ZygnVGVzdExheWVyLmdldE1hcExheWVyIHJldHVybicpO1xuICAgIHJldHVybiB0aGlzLl9sYXllcjtcbiAgfVxuXG4gIGFkZFRvTWFwKG1hcDogYW55KSB7XG4gICAgY29uc29sZS5kZWJ1ZygnVmVsb2NpdHlMYXllci5hZGRUb01hcCcpO1xuICAgIG1hcC5hZGRMYXllcih0aGlzLmdldE1hcExheWVyKCkpO1xuICAgIHRoaXMuX21hcCA9IG1hcDtcbiAgICBjb25zb2xlLmRlYnVnKCdUZXN0TGF5ZXIuYWRkVG9NYXAgcmV0dXJuJyk7XG4gIH1cblxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Rlc3RsYXllci50cyIsImltcG9ydCBfb2xfIGZyb20gJy4uL2luZGV4LmpzJztcbmltcG9ydCBfb2xfTGF5ZXJUeXBlXyBmcm9tICcuLi9sYXllcnR5cGUuanMnO1xuaW1wb3J0IF9vbF9sYXllcl9MYXllcl8gZnJvbSAnLi4vbGF5ZXIvbGF5ZXIuanMnO1xuaW1wb3J0IF9vbF9sYXllcl9UaWxlUHJvcGVydHlfIGZyb20gJy4uL2xheWVyL3RpbGVwcm9wZXJ0eS5qcyc7XG5pbXBvcnQgX29sX29ial8gZnJvbSAnLi4vb2JqLmpzJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBGb3IgbGF5ZXIgc291cmNlcyB0aGF0IHByb3ZpZGUgcHJlLXJlbmRlcmVkLCB0aWxlZCBpbWFnZXMgaW4gZ3JpZHMgdGhhdCBhcmVcbiAqIG9yZ2FuaXplZCBieSB6b29tIGxldmVscyBmb3Igc3BlY2lmaWMgcmVzb2x1dGlvbnMuXG4gKiBOb3RlIHRoYXQgYW55IHByb3BlcnR5IHNldCBpbiB0aGUgb3B0aW9ucyBpcyBzZXQgYXMgYSB7QGxpbmsgb2wuT2JqZWN0fVxuICogcHJvcGVydHkgb24gdGhlIGxheWVyIG9iamVjdDsgZm9yIGV4YW1wbGUsIHNldHRpbmcgYHRpdGxlOiAnTXkgVGl0bGUnYCBpbiB0aGVcbiAqIG9wdGlvbnMgbWVhbnMgdGhhdCBgdGl0bGVgIGlzIG9ic2VydmFibGUsIGFuZCBoYXMgZ2V0L3NldCBhY2Nlc3NvcnMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAZXh0ZW5kcyB7b2wubGF5ZXIuTGF5ZXJ9XG4gKiBAZmlyZXMgb2wucmVuZGVyLkV2ZW50XG4gKiBAcGFyYW0ge29seC5sYXllci5UaWxlT3B0aW9ucz19IG9wdF9vcHRpb25zIFRpbGUgbGF5ZXIgb3B0aW9ucy5cbiAqIEBhcGlcbiAqL1xudmFyIF9vbF9sYXllcl9UaWxlXyA9IGZ1bmN0aW9uKG9wdF9vcHRpb25zKSB7XG4gIHZhciBvcHRpb25zID0gb3B0X29wdGlvbnMgPyBvcHRfb3B0aW9ucyA6IHt9O1xuXG4gIHZhciBiYXNlT3B0aW9ucyA9IF9vbF9vYmpfLmFzc2lnbih7fSwgb3B0aW9ucyk7XG5cbiAgZGVsZXRlIGJhc2VPcHRpb25zLnByZWxvYWQ7XG4gIGRlbGV0ZSBiYXNlT3B0aW9ucy51c2VJbnRlcmltVGlsZXNPbkVycm9yO1xuICBfb2xfbGF5ZXJfTGF5ZXJfLmNhbGwodGhpcywgIC8qKiBAdHlwZSB7b2x4LmxheWVyLkxheWVyT3B0aW9uc30gKi8gKGJhc2VPcHRpb25zKSk7XG5cbiAgdGhpcy5zZXRQcmVsb2FkKG9wdGlvbnMucHJlbG9hZCAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5wcmVsb2FkIDogMCk7XG4gIHRoaXMuc2V0VXNlSW50ZXJpbVRpbGVzT25FcnJvcihvcHRpb25zLnVzZUludGVyaW1UaWxlc09uRXJyb3IgIT09IHVuZGVmaW5lZCA/XG4gICAgb3B0aW9ucy51c2VJbnRlcmltVGlsZXNPbkVycm9yIDogdHJ1ZSk7XG5cbiAgLyoqXG4gICAqIFRoZSBsYXllciB0eXBlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEB0eXBlIHtvbC5MYXllclR5cGV9XG4gICAqL1xuICB0aGlzLnR5cGUgPSBfb2xfTGF5ZXJUeXBlXy5USUxFO1xuXG59O1xuXG5fb2xfLmluaGVyaXRzKF9vbF9sYXllcl9UaWxlXywgX29sX2xheWVyX0xheWVyXyk7XG5cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGxldmVsIGFzIG51bWJlciB0byB3aGljaCB3ZSB3aWxsIHByZWxvYWQgdGlsZXMgdXAgdG8uXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBsZXZlbCB0byBwcmVsb2FkIHRpbGVzIHVwIHRvLlxuICogQG9ic2VydmFibGVcbiAqIEBhcGlcbiAqL1xuX29sX2xheWVyX1RpbGVfLnByb3RvdHlwZS5nZXRQcmVsb2FkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAoXG4gIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyB0aGlzLmdldChfb2xfbGF5ZXJfVGlsZVByb3BlcnR5Xy5QUkVMT0FEKVxuICApO1xufTtcblxuXG4vKipcbiAqIFJldHVybiB0aGUgYXNzb2NpYXRlZCB7QGxpbmsgb2wuc291cmNlLlRpbGUgdGlsZXNvdXJjZX0gb2YgdGhlIGxheWVyLlxuICogQGZ1bmN0aW9uXG4gKiBAcmV0dXJuIHtvbC5zb3VyY2UuVGlsZX0gU291cmNlLlxuICogQGFwaVxuICovXG5fb2xfbGF5ZXJfVGlsZV8ucHJvdG90eXBlLmdldFNvdXJjZTtcblxuXG4vKipcbiAqIFNldCB0aGUgbGV2ZWwgYXMgbnVtYmVyIHRvIHdoaWNoIHdlIHdpbGwgcHJlbG9hZCB0aWxlcyB1cCB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBwcmVsb2FkIFRoZSBsZXZlbCB0byBwcmVsb2FkIHRpbGVzIHVwIHRvLlxuICogQG9ic2VydmFibGVcbiAqIEBhcGlcbiAqL1xuX29sX2xheWVyX1RpbGVfLnByb3RvdHlwZS5zZXRQcmVsb2FkID0gZnVuY3Rpb24ocHJlbG9hZCkge1xuICB0aGlzLnNldChfb2xfbGF5ZXJfVGlsZVByb3BlcnR5Xy5QUkVMT0FELCBwcmVsb2FkKTtcbn07XG5cblxuLyoqXG4gKiBXaGV0aGVyIHdlIHVzZSBpbnRlcmltIHRpbGVzIG9uIGVycm9yLlxuICogQHJldHVybiB7Ym9vbGVhbn0gVXNlIGludGVyaW0gdGlsZXMgb24gZXJyb3IuXG4gKiBAb2JzZXJ2YWJsZVxuICogQGFwaVxuICovXG5fb2xfbGF5ZXJfVGlsZV8ucHJvdG90eXBlLmdldFVzZUludGVyaW1UaWxlc09uRXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIChcbiAgLyoqIEB0eXBlIHtib29sZWFufSAqLyB0aGlzLmdldChfb2xfbGF5ZXJfVGlsZVByb3BlcnR5Xy5VU0VfSU5URVJJTV9USUxFU19PTl9FUlJPUilcbiAgKTtcbn07XG5cblxuLyoqXG4gKiBTZXQgd2hldGhlciB3ZSB1c2UgaW50ZXJpbSB0aWxlcyBvbiBlcnJvci5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlSW50ZXJpbVRpbGVzT25FcnJvciBVc2UgaW50ZXJpbSB0aWxlcyBvbiBlcnJvci5cbiAqIEBvYnNlcnZhYmxlXG4gKiBAYXBpXG4gKi9cbl9vbF9sYXllcl9UaWxlXy5wcm90b3R5cGUuc2V0VXNlSW50ZXJpbVRpbGVzT25FcnJvciA9IGZ1bmN0aW9uKHVzZUludGVyaW1UaWxlc09uRXJyb3IpIHtcbiAgdGhpcy5zZXQoXG4gICAgICBfb2xfbGF5ZXJfVGlsZVByb3BlcnR5Xy5VU0VfSU5URVJJTV9USUxFU19PTl9FUlJPUiwgdXNlSW50ZXJpbVRpbGVzT25FcnJvcik7XG59O1xuZXhwb3J0IGRlZmF1bHQgX29sX2xheWVyX1RpbGVfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvbGF5ZXIvdGlsZS5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG52YXIgX29sX2xheWVyX1RpbGVQcm9wZXJ0eV8gPSB7XG4gIFBSRUxPQUQ6ICdwcmVsb2FkJyxcbiAgVVNFX0lOVEVSSU1fVElMRVNfT05fRVJST1I6ICd1c2VJbnRlcmltVGlsZXNPbkVycm9yJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgX29sX2xheWVyX1RpbGVQcm9wZXJ0eV87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9sYXllci90aWxlcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfb2xfIGZyb20gJy4uL2luZGV4LmpzJztcbmltcG9ydCBfb2xfc291cmNlX09TTV8gZnJvbSAnLi4vc291cmNlL29zbS5qcyc7XG5pbXBvcnQgX29sX3NvdXJjZV9YWVpfIGZyb20gJy4uL3NvdXJjZS94eXouanMnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIExheWVyIHNvdXJjZSBmb3IgdGhlIFN0YW1lbiB0aWxlIHNlcnZlci5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBleHRlbmRzIHtvbC5zb3VyY2UuWFlafVxuICogQHBhcmFtIHtvbHguc291cmNlLlN0YW1lbk9wdGlvbnN9IG9wdGlvbnMgU3RhbWVuIG9wdGlvbnMuXG4gKiBAYXBpXG4gKi9cbnZhciBfb2xfc291cmNlX1N0YW1lbl8gPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHZhciBpID0gb3B0aW9ucy5sYXllci5pbmRleE9mKCctJyk7XG4gIHZhciBwcm92aWRlciA9IGkgPT0gLTEgPyBvcHRpb25zLmxheWVyIDogb3B0aW9ucy5sYXllci5zbGljZSgwLCBpKTtcbiAgdmFyIHByb3ZpZGVyQ29uZmlnID0gX29sX3NvdXJjZV9TdGFtZW5fLlByb3ZpZGVyQ29uZmlnW3Byb3ZpZGVyXTtcblxuICB2YXIgbGF5ZXJDb25maWcgPSBfb2xfc291cmNlX1N0YW1lbl8uTGF5ZXJDb25maWdbb3B0aW9ucy5sYXllcl07XG5cbiAgdmFyIHVybCA9IG9wdGlvbnMudXJsICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLnVybCA6XG4gICAgJ2h0dHBzOi8vc3RhbWVuLXRpbGVzLXthLWR9LmEuc3NsLmZhc3RseS5uZXQvJyArIG9wdGlvbnMubGF5ZXIgK1xuICAgICAgJy97en0ve3h9L3t5fS4nICsgbGF5ZXJDb25maWcuZXh0ZW5zaW9uO1xuXG4gIF9vbF9zb3VyY2VfWFlaXy5jYWxsKHRoaXMsIHtcbiAgICBhdHRyaWJ1dGlvbnM6IF9vbF9zb3VyY2VfU3RhbWVuXy5BVFRSSUJVVElPTlMsXG4gICAgY2FjaGVTaXplOiBvcHRpb25zLmNhY2hlU2l6ZSxcbiAgICBjcm9zc09yaWdpbjogJ2Fub255bW91cycsXG4gICAgbWF4Wm9vbTogb3B0aW9ucy5tYXhab29tICE9IHVuZGVmaW5lZCA/IG9wdGlvbnMubWF4Wm9vbSA6IHByb3ZpZGVyQ29uZmlnLm1heFpvb20sXG4gICAgbWluWm9vbTogb3B0aW9ucy5taW5ab29tICE9IHVuZGVmaW5lZCA/IG9wdGlvbnMubWluWm9vbSA6IHByb3ZpZGVyQ29uZmlnLm1pblpvb20sXG4gICAgb3BhcXVlOiBsYXllckNvbmZpZy5vcGFxdWUsXG4gICAgcmVwcm9qZWN0aW9uRXJyb3JUaHJlc2hvbGQ6IG9wdGlvbnMucmVwcm9qZWN0aW9uRXJyb3JUaHJlc2hvbGQsXG4gICAgdGlsZUxvYWRGdW5jdGlvbjogb3B0aW9ucy50aWxlTG9hZEZ1bmN0aW9uLFxuICAgIHVybDogdXJsLFxuICAgIHdyYXBYOiBvcHRpb25zLndyYXBYXG4gIH0pO1xufTtcblxuX29sXy5pbmhlcml0cyhfb2xfc291cmNlX1N0YW1lbl8sIF9vbF9zb3VyY2VfWFlaXyk7XG5cblxuLyoqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtBcnJheS48c3RyaW5nPn1cbiAqL1xuX29sX3NvdXJjZV9TdGFtZW5fLkFUVFJJQlVUSU9OUyA9IFtcbiAgJ01hcCB0aWxlcyBieSA8YSBocmVmPVwiaHR0cHM6Ly9zdGFtZW4uY29tL1wiPlN0YW1lbiBEZXNpZ248L2E+LCAnICtcbiAgICAgICAgJ3VuZGVyIDxhIGhyZWY9XCJodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnkvMy4wL1wiPkNDIEJZJyArXG4gICAgICAgICcgMy4wPC9hPi4nLFxuICBfb2xfc291cmNlX09TTV8uQVRUUklCVVRJT05cbl07XG5cbi8qKlxuICogQHR5cGUge09iamVjdC48c3RyaW5nLCB7ZXh0ZW5zaW9uOiBzdHJpbmcsIG9wYXF1ZTogYm9vbGVhbn0+fVxuICovXG5fb2xfc291cmNlX1N0YW1lbl8uTGF5ZXJDb25maWcgPSB7XG4gICd0ZXJyYWluJzoge1xuICAgIGV4dGVuc2lvbjogJ2pwZycsXG4gICAgb3BhcXVlOiB0cnVlXG4gIH0sXG4gICd0ZXJyYWluLWJhY2tncm91bmQnOiB7XG4gICAgZXh0ZW5zaW9uOiAnanBnJyxcbiAgICBvcGFxdWU6IHRydWVcbiAgfSxcbiAgJ3RlcnJhaW4tbGFiZWxzJzoge1xuICAgIGV4dGVuc2lvbjogJ3BuZycsXG4gICAgb3BhcXVlOiBmYWxzZVxuICB9LFxuICAndGVycmFpbi1saW5lcyc6IHtcbiAgICBleHRlbnNpb246ICdwbmcnLFxuICAgIG9wYXF1ZTogZmFsc2VcbiAgfSxcbiAgJ3RvbmVyLWJhY2tncm91bmQnOiB7XG4gICAgZXh0ZW5zaW9uOiAncG5nJyxcbiAgICBvcGFxdWU6IHRydWVcbiAgfSxcbiAgJ3RvbmVyJzoge1xuICAgIGV4dGVuc2lvbjogJ3BuZycsXG4gICAgb3BhcXVlOiB0cnVlXG4gIH0sXG4gICd0b25lci1oeWJyaWQnOiB7XG4gICAgZXh0ZW5zaW9uOiAncG5nJyxcbiAgICBvcGFxdWU6IGZhbHNlXG4gIH0sXG4gICd0b25lci1sYWJlbHMnOiB7XG4gICAgZXh0ZW5zaW9uOiAncG5nJyxcbiAgICBvcGFxdWU6IGZhbHNlXG4gIH0sXG4gICd0b25lci1saW5lcyc6IHtcbiAgICBleHRlbnNpb246ICdwbmcnLFxuICAgIG9wYXF1ZTogZmFsc2VcbiAgfSxcbiAgJ3RvbmVyLWxpdGUnOiB7XG4gICAgZXh0ZW5zaW9uOiAncG5nJyxcbiAgICBvcGFxdWU6IHRydWVcbiAgfSxcbiAgJ3dhdGVyY29sb3InOiB7XG4gICAgZXh0ZW5zaW9uOiAnanBnJyxcbiAgICBvcGFxdWU6IHRydWVcbiAgfVxufTtcblxuLyoqXG4gKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsIHttaW5ab29tOiBudW1iZXIsIG1heFpvb206IG51bWJlcn0+fVxuICovXG5fb2xfc291cmNlX1N0YW1lbl8uUHJvdmlkZXJDb25maWcgPSB7XG4gICd0ZXJyYWluJzoge1xuICAgIG1pblpvb206IDQsXG4gICAgbWF4Wm9vbTogMThcbiAgfSxcbiAgJ3RvbmVyJzoge1xuICAgIG1pblpvb206IDAsXG4gICAgbWF4Wm9vbTogMjBcbiAgfSxcbiAgJ3dhdGVyY29sb3InOiB7XG4gICAgbWluWm9vbTogMSxcbiAgICBtYXhab29tOiAxNlxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgX29sX3NvdXJjZV9TdGFtZW5fO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvc291cmNlL3N0YW1lbi5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF9vbF8gZnJvbSAnLi4vaW5kZXguanMnO1xuaW1wb3J0IF9vbF9zb3VyY2VfWFlaXyBmcm9tICcuLi9zb3VyY2UveHl6LmpzJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBMYXllciBzb3VyY2UgZm9yIHRoZSBPcGVuU3RyZWV0TWFwIHRpbGUgc2VydmVyLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVuZHMge29sLnNvdXJjZS5YWVp9XG4gKiBAcGFyYW0ge29seC5zb3VyY2UuT1NNT3B0aW9ucz19IG9wdF9vcHRpb25zIE9wZW4gU3RyZWV0IE1hcCBvcHRpb25zLlxuICogQGFwaVxuICovXG52YXIgX29sX3NvdXJjZV9PU01fID0gZnVuY3Rpb24ob3B0X29wdGlvbnMpIHtcblxuICB2YXIgb3B0aW9ucyA9IG9wdF9vcHRpb25zIHx8IHt9O1xuXG4gIHZhciBhdHRyaWJ1dGlvbnM7XG4gIGlmIChvcHRpb25zLmF0dHJpYnV0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgYXR0cmlidXRpb25zID0gb3B0aW9ucy5hdHRyaWJ1dGlvbnM7XG4gIH0gZWxzZSB7XG4gICAgYXR0cmlidXRpb25zID0gW19vbF9zb3VyY2VfT1NNXy5BVFRSSUJVVElPTl07XG4gIH1cblxuICB2YXIgY3Jvc3NPcmlnaW4gPSBvcHRpb25zLmNyb3NzT3JpZ2luICE9PSB1bmRlZmluZWQgP1xuICAgIG9wdGlvbnMuY3Jvc3NPcmlnaW4gOiAnYW5vbnltb3VzJztcblxuICB2YXIgdXJsID0gb3B0aW9ucy51cmwgIT09IHVuZGVmaW5lZCA/XG4gICAgb3B0aW9ucy51cmwgOiAnaHR0cHM6Ly97YS1jfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZyc7XG5cbiAgX29sX3NvdXJjZV9YWVpfLmNhbGwodGhpcywge1xuICAgIGF0dHJpYnV0aW9uczogYXR0cmlidXRpb25zLFxuICAgIGNhY2hlU2l6ZTogb3B0aW9ucy5jYWNoZVNpemUsXG4gICAgY3Jvc3NPcmlnaW46IGNyb3NzT3JpZ2luLFxuICAgIG9wYXF1ZTogb3B0aW9ucy5vcGFxdWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMub3BhcXVlIDogdHJ1ZSxcbiAgICBtYXhab29tOiBvcHRpb25zLm1heFpvb20gIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubWF4Wm9vbSA6IDE5LFxuICAgIHJlcHJvamVjdGlvbkVycm9yVGhyZXNob2xkOiBvcHRpb25zLnJlcHJvamVjdGlvbkVycm9yVGhyZXNob2xkLFxuICAgIHRpbGVMb2FkRnVuY3Rpb246IG9wdGlvbnMudGlsZUxvYWRGdW5jdGlvbixcbiAgICB1cmw6IHVybCxcbiAgICB3cmFwWDogb3B0aW9ucy53cmFwWFxuICB9KTtcblxufTtcblxuX29sXy5pbmhlcml0cyhfb2xfc291cmNlX09TTV8sIF9vbF9zb3VyY2VfWFlaXyk7XG5cblxuLyoqXG4gKiBUaGUgYXR0cmlidXRpb24gY29udGFpbmluZyBhIGxpbmsgdG8gdGhlIE9wZW5TdHJlZXRNYXAgQ29weXJpZ2h0IGFuZCBMaWNlbnNlXG4gKiBwYWdlLlxuICogQGNvbnN0XG4gKiBAdHlwZSB7c3RyaW5nfVxuICogQGFwaVxuICovXG5fb2xfc291cmNlX09TTV8uQVRUUklCVVRJT04gPSAnJmNvcHk7ICcgK1xuICAgICAgJzxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiAnICtcbiAgICAgICdjb250cmlidXRvcnMuJztcbmV4cG9ydCBkZWZhdWx0IF9vbF9zb3VyY2VfT1NNXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL3NvdXJjZS9vc20uanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfb2xfIGZyb20gJy4uL2luZGV4LmpzJztcbmltcG9ydCBfb2xfSW1hZ2VUaWxlXyBmcm9tICcuLi9pbWFnZXRpbGUuanMnO1xuaW1wb3J0IF9vbF9UaWxlQ2FjaGVfIGZyb20gJy4uL3RpbGVjYWNoZS5qcyc7XG5pbXBvcnQgX29sX1RpbGVTdGF0ZV8gZnJvbSAnLi4vdGlsZXN0YXRlLmpzJztcbmltcG9ydCBfb2xfZXZlbnRzXyBmcm9tICcuLi9ldmVudHMuanMnO1xuaW1wb3J0IF9vbF9ldmVudHNfRXZlbnRUeXBlXyBmcm9tICcuLi9ldmVudHMvZXZlbnR0eXBlLmpzJztcbmltcG9ydCBfb2xfcHJval8gZnJvbSAnLi4vcHJvai5qcyc7XG5pbXBvcnQgX29sX3JlcHJval9UaWxlXyBmcm9tICcuLi9yZXByb2ovdGlsZS5qcyc7XG5pbXBvcnQgX29sX3NvdXJjZV9VcmxUaWxlXyBmcm9tICcuLi9zb3VyY2UvdXJsdGlsZS5qcyc7XG5pbXBvcnQgX29sX3RpbGVjb29yZF8gZnJvbSAnLi4vdGlsZWNvb3JkLmpzJztcbmltcG9ydCBfb2xfdGlsZWdyaWRfIGZyb20gJy4uL3RpbGVncmlkLmpzJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBCYXNlIGNsYXNzIGZvciBzb3VyY2VzIHByb3ZpZGluZyBpbWFnZXMgZGl2aWRlZCBpbnRvIGEgdGlsZSBncmlkLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQGZpcmVzIG9sLnNvdXJjZS5UaWxlLkV2ZW50XG4gKiBAZXh0ZW5kcyB7b2wuc291cmNlLlVybFRpbGV9XG4gKiBAcGFyYW0ge29seC5zb3VyY2UuVGlsZUltYWdlT3B0aW9uc30gb3B0aW9ucyBJbWFnZSB0aWxlIG9wdGlvbnMuXG4gKiBAYXBpXG4gKi9cbnZhciBfb2xfc291cmNlX1RpbGVJbWFnZV8gPSBmdW5jdGlvbihvcHRpb25zKSB7XG5cbiAgX29sX3NvdXJjZV9VcmxUaWxlXy5jYWxsKHRoaXMsIHtcbiAgICBhdHRyaWJ1dGlvbnM6IG9wdGlvbnMuYXR0cmlidXRpb25zLFxuICAgIGNhY2hlU2l6ZTogb3B0aW9ucy5jYWNoZVNpemUsXG4gICAgZXh0ZW50OiBvcHRpb25zLmV4dGVudCxcbiAgICBsb2dvOiBvcHRpb25zLmxvZ28sXG4gICAgb3BhcXVlOiBvcHRpb25zLm9wYXF1ZSxcbiAgICBwcm9qZWN0aW9uOiBvcHRpb25zLnByb2plY3Rpb24sXG4gICAgc3RhdGU6IG9wdGlvbnMuc3RhdGUsXG4gICAgdGlsZUdyaWQ6IG9wdGlvbnMudGlsZUdyaWQsXG4gICAgdGlsZUxvYWRGdW5jdGlvbjogb3B0aW9ucy50aWxlTG9hZEZ1bmN0aW9uID9cbiAgICAgIG9wdGlvbnMudGlsZUxvYWRGdW5jdGlvbiA6IF9vbF9zb3VyY2VfVGlsZUltYWdlXy5kZWZhdWx0VGlsZUxvYWRGdW5jdGlvbixcbiAgICB0aWxlUGl4ZWxSYXRpbzogb3B0aW9ucy50aWxlUGl4ZWxSYXRpbyxcbiAgICB0aWxlVXJsRnVuY3Rpb246IG9wdGlvbnMudGlsZVVybEZ1bmN0aW9uLFxuICAgIHVybDogb3B0aW9ucy51cmwsXG4gICAgdXJsczogb3B0aW9ucy51cmxzLFxuICAgIHdyYXBYOiBvcHRpb25zLndyYXBYLFxuICAgIHRyYW5zaXRpb246IG9wdGlvbnMudHJhbnNpdGlvblxuICB9KTtcblxuICAvKipcbiAgICogQHByb3RlY3RlZFxuICAgKiBAdHlwZSB7P3N0cmluZ31cbiAgICovXG4gIHRoaXMuY3Jvc3NPcmlnaW4gPVxuICAgICAgb3B0aW9ucy5jcm9zc09yaWdpbiAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jcm9zc09yaWdpbiA6IG51bGw7XG5cbiAgLyoqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHR5cGUge2Z1bmN0aW9uKG5ldzogb2wuSW1hZ2VUaWxlLCBvbC5UaWxlQ29vcmQsIG9sLlRpbGVTdGF0ZSwgc3RyaW5nLFxuICAgKiAgICAgICAgP3N0cmluZywgb2wuVGlsZUxvYWRGdW5jdGlvblR5cGUsIG9seC5UaWxlT3B0aW9ucz0pfVxuICAgKi9cbiAgdGhpcy50aWxlQ2xhc3MgPSBvcHRpb25zLnRpbGVDbGFzcyAhPT0gdW5kZWZpbmVkID9cbiAgICBvcHRpb25zLnRpbGVDbGFzcyA6IF9vbF9JbWFnZVRpbGVfO1xuXG4gIC8qKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgb2wuVGlsZUNhY2hlPn1cbiAgICovXG4gIHRoaXMudGlsZUNhY2hlRm9yUHJvamVjdGlvbiA9IHt9O1xuXG4gIC8qKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgb2wudGlsZWdyaWQuVGlsZUdyaWQ+fVxuICAgKi9cbiAgdGhpcy50aWxlR3JpZEZvclByb2plY3Rpb24gPSB7fTtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge251bWJlcnx1bmRlZmluZWR9XG4gICAqL1xuICB0aGlzLnJlcHJvamVjdGlvbkVycm9yVGhyZXNob2xkXyA9IG9wdGlvbnMucmVwcm9qZWN0aW9uRXJyb3JUaHJlc2hvbGQ7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgdGhpcy5yZW5kZXJSZXByb2plY3Rpb25FZGdlc18gPSBmYWxzZTtcbn07XG5cbl9vbF8uaW5oZXJpdHMoX29sX3NvdXJjZV9UaWxlSW1hZ2VfLCBfb2xfc291cmNlX1VybFRpbGVfKTtcblxuXG4vKipcbiAqIEBpbmhlcml0RG9jXG4gKi9cbl9vbF9zb3VyY2VfVGlsZUltYWdlXy5wcm90b3R5cGUuY2FuRXhwaXJlQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCFfb2xfLkVOQUJMRV9SQVNURVJfUkVQUk9KRUNUSU9OKSB7XG4gICAgcmV0dXJuIF9vbF9zb3VyY2VfVXJsVGlsZV8ucHJvdG90eXBlLmNhbkV4cGlyZUNhY2hlLmNhbGwodGhpcyk7XG4gIH1cbiAgaWYgKHRoaXMudGlsZUNhY2hlLmNhbkV4cGlyZUNhY2hlKCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy50aWxlQ2FjaGVGb3JQcm9qZWN0aW9uKSB7XG4gICAgICBpZiAodGhpcy50aWxlQ2FjaGVGb3JQcm9qZWN0aW9uW2tleV0uY2FuRXhwaXJlQ2FjaGUoKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuXG4vKipcbiAqIEBpbmhlcml0RG9jXG4gKi9cbl9vbF9zb3VyY2VfVGlsZUltYWdlXy5wcm90b3R5cGUuZXhwaXJlQ2FjaGUgPSBmdW5jdGlvbihwcm9qZWN0aW9uLCB1c2VkVGlsZXMpIHtcbiAgaWYgKCFfb2xfLkVOQUJMRV9SQVNURVJfUkVQUk9KRUNUSU9OKSB7XG4gICAgX29sX3NvdXJjZV9VcmxUaWxlXy5wcm90b3R5cGUuZXhwaXJlQ2FjaGUuY2FsbCh0aGlzLCBwcm9qZWN0aW9uLCB1c2VkVGlsZXMpO1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgdXNlZFRpbGVDYWNoZSA9IHRoaXMuZ2V0VGlsZUNhY2hlRm9yUHJvamVjdGlvbihwcm9qZWN0aW9uKTtcblxuICB0aGlzLnRpbGVDYWNoZS5leHBpcmVDYWNoZSh0aGlzLnRpbGVDYWNoZSA9PSB1c2VkVGlsZUNhY2hlID8gdXNlZFRpbGVzIDoge30pO1xuICBmb3IgKHZhciBpZCBpbiB0aGlzLnRpbGVDYWNoZUZvclByb2plY3Rpb24pIHtcbiAgICB2YXIgdGlsZUNhY2hlID0gdGhpcy50aWxlQ2FjaGVGb3JQcm9qZWN0aW9uW2lkXTtcbiAgICB0aWxlQ2FjaGUuZXhwaXJlQ2FjaGUodGlsZUNhY2hlID09IHVzZWRUaWxlQ2FjaGUgPyB1c2VkVGlsZXMgOiB7fSk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBAaW5oZXJpdERvY1xuICovXG5fb2xfc291cmNlX1RpbGVJbWFnZV8ucHJvdG90eXBlLmdldEd1dHRlciA9IGZ1bmN0aW9uKHByb2plY3Rpb24pIHtcbiAgaWYgKF9vbF8uRU5BQkxFX1JBU1RFUl9SRVBST0pFQ1RJT04gJiZcbiAgICAgIHRoaXMuZ2V0UHJvamVjdGlvbigpICYmIHByb2plY3Rpb24gJiZcbiAgICAgICFfb2xfcHJval8uZXF1aXZhbGVudCh0aGlzLmdldFByb2plY3Rpb24oKSwgcHJvamVjdGlvbikpIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGhpcy5nZXRHdXR0ZXJJbnRlcm5hbCgpO1xuICB9XG59O1xuXG5cbi8qKlxuICogQHByb3RlY3RlZFxuICogQHJldHVybiB7bnVtYmVyfSBHdXR0ZXIuXG4gKi9cbl9vbF9zb3VyY2VfVGlsZUltYWdlXy5wcm90b3R5cGUuZ2V0R3V0dGVySW50ZXJuYWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIDA7XG59O1xuXG5cbi8qKlxuICogQGluaGVyaXREb2NcbiAqL1xuX29sX3NvdXJjZV9UaWxlSW1hZ2VfLnByb3RvdHlwZS5nZXRPcGFxdWUgPSBmdW5jdGlvbihwcm9qZWN0aW9uKSB7XG4gIGlmIChfb2xfLkVOQUJMRV9SQVNURVJfUkVQUk9KRUNUSU9OICYmXG4gICAgICB0aGlzLmdldFByb2plY3Rpb24oKSAmJiBwcm9qZWN0aW9uICYmXG4gICAgICAhX29sX3Byb2pfLmVxdWl2YWxlbnQodGhpcy5nZXRQcm9qZWN0aW9uKCksIHByb2plY3Rpb24pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBfb2xfc291cmNlX1VybFRpbGVfLnByb3RvdHlwZS5nZXRPcGFxdWUuY2FsbCh0aGlzLCBwcm9qZWN0aW9uKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIEBpbmhlcml0RG9jXG4gKi9cbl9vbF9zb3VyY2VfVGlsZUltYWdlXy5wcm90b3R5cGUuZ2V0VGlsZUdyaWRGb3JQcm9qZWN0aW9uID0gZnVuY3Rpb24ocHJvamVjdGlvbikge1xuICBpZiAoIV9vbF8uRU5BQkxFX1JBU1RFUl9SRVBST0pFQ1RJT04pIHtcbiAgICByZXR1cm4gX29sX3NvdXJjZV9VcmxUaWxlXy5wcm90b3R5cGUuZ2V0VGlsZUdyaWRGb3JQcm9qZWN0aW9uLmNhbGwodGhpcywgcHJvamVjdGlvbik7XG4gIH1cbiAgdmFyIHRoaXNQcm9qID0gdGhpcy5nZXRQcm9qZWN0aW9uKCk7XG4gIGlmICh0aGlzLnRpbGVHcmlkICYmXG4gICAgICAoIXRoaXNQcm9qIHx8IF9vbF9wcm9qXy5lcXVpdmFsZW50KHRoaXNQcm9qLCBwcm9qZWN0aW9uKSkpIHtcbiAgICByZXR1cm4gdGhpcy50aWxlR3JpZDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcHJvaktleSA9IF9vbF8uZ2V0VWlkKHByb2plY3Rpb24pLnRvU3RyaW5nKCk7XG4gICAgaWYgKCEocHJvaktleSBpbiB0aGlzLnRpbGVHcmlkRm9yUHJvamVjdGlvbikpIHtcbiAgICAgIHRoaXMudGlsZUdyaWRGb3JQcm9qZWN0aW9uW3Byb2pLZXldID1cbiAgICAgICAgICBfb2xfdGlsZWdyaWRfLmdldEZvclByb2plY3Rpb24ocHJvamVjdGlvbik7XG4gICAgfVxuICAgIHJldHVybiAvKiogQHR5cGUgeyFvbC50aWxlZ3JpZC5UaWxlR3JpZH0gKi8gKHRoaXMudGlsZUdyaWRGb3JQcm9qZWN0aW9uW3Byb2pLZXldKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIEBpbmhlcml0RG9jXG4gKi9cbl9vbF9zb3VyY2VfVGlsZUltYWdlXy5wcm90b3R5cGUuZ2V0VGlsZUNhY2hlRm9yUHJvamVjdGlvbiA9IGZ1bmN0aW9uKHByb2plY3Rpb24pIHtcbiAgaWYgKCFfb2xfLkVOQUJMRV9SQVNURVJfUkVQUk9KRUNUSU9OKSB7XG4gICAgcmV0dXJuIF9vbF9zb3VyY2VfVXJsVGlsZV8ucHJvdG90eXBlLmdldFRpbGVDYWNoZUZvclByb2plY3Rpb24uY2FsbCh0aGlzLCBwcm9qZWN0aW9uKTtcbiAgfVxuICB2YXIgdGhpc1Byb2ogPSB0aGlzLmdldFByb2plY3Rpb24oKTtcbiAgaWYgKCF0aGlzUHJvaiB8fCBfb2xfcHJval8uZXF1aXZhbGVudCh0aGlzUHJvaiwgcHJvamVjdGlvbikpIHtcbiAgICByZXR1cm4gdGhpcy50aWxlQ2FjaGU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHByb2pLZXkgPSBfb2xfLmdldFVpZChwcm9qZWN0aW9uKS50b1N0cmluZygpO1xuICAgIGlmICghKHByb2pLZXkgaW4gdGhpcy50aWxlQ2FjaGVGb3JQcm9qZWN0aW9uKSkge1xuICAgICAgdGhpcy50aWxlQ2FjaGVGb3JQcm9qZWN0aW9uW3Byb2pLZXldID0gbmV3IF9vbF9UaWxlQ2FjaGVfKHRoaXMudGlsZUNhY2hlLmhpZ2hXYXRlck1hcmspO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy50aWxlQ2FjaGVGb3JQcm9qZWN0aW9uW3Byb2pLZXldO1xuICB9XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHogVGlsZSBjb29yZGluYXRlIHouXG4gKiBAcGFyYW0ge251bWJlcn0geCBUaWxlIGNvb3JkaW5hdGUgeC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB5IFRpbGUgY29vcmRpbmF0ZSB5LlxuICogQHBhcmFtIHtudW1iZXJ9IHBpeGVsUmF0aW8gUGl4ZWwgcmF0aW8uXG4gKiBAcGFyYW0ge29sLnByb2ouUHJvamVjdGlvbn0gcHJvamVjdGlvbiBQcm9qZWN0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IHNldCBvbiB0aGUgdGlsZS5cbiAqIEByZXR1cm4geyFvbC5UaWxlfSBUaWxlLlxuICogQHByaXZhdGVcbiAqL1xuX29sX3NvdXJjZV9UaWxlSW1hZ2VfLnByb3RvdHlwZS5jcmVhdGVUaWxlXyA9IGZ1bmN0aW9uKHosIHgsIHksIHBpeGVsUmF0aW8sIHByb2plY3Rpb24sIGtleSkge1xuICB2YXIgdGlsZUNvb3JkID0gW3osIHgsIHldO1xuICB2YXIgdXJsVGlsZUNvb3JkID0gdGhpcy5nZXRUaWxlQ29vcmRGb3JUaWxlVXJsRnVuY3Rpb24oXG4gICAgICB0aWxlQ29vcmQsIHByb2plY3Rpb24pO1xuICB2YXIgdGlsZVVybCA9IHVybFRpbGVDb29yZCA/XG4gICAgdGhpcy50aWxlVXJsRnVuY3Rpb24odXJsVGlsZUNvb3JkLCBwaXhlbFJhdGlvLCBwcm9qZWN0aW9uKSA6IHVuZGVmaW5lZDtcbiAgdmFyIHRpbGUgPSBuZXcgdGhpcy50aWxlQ2xhc3MoXG4gICAgICB0aWxlQ29vcmQsXG4gICAgICB0aWxlVXJsICE9PSB1bmRlZmluZWQgPyBfb2xfVGlsZVN0YXRlXy5JRExFIDogX29sX1RpbGVTdGF0ZV8uRU1QVFksXG4gICAgICB0aWxlVXJsICE9PSB1bmRlZmluZWQgPyB0aWxlVXJsIDogJycsXG4gICAgICB0aGlzLmNyb3NzT3JpZ2luLFxuICAgICAgdGhpcy50aWxlTG9hZEZ1bmN0aW9uLFxuICAgICAgdGhpcy50aWxlT3B0aW9ucyk7XG4gIHRpbGUua2V5ID0ga2V5O1xuICBfb2xfZXZlbnRzXy5saXN0ZW4odGlsZSwgX29sX2V2ZW50c19FdmVudFR5cGVfLkNIQU5HRSxcbiAgICAgIHRoaXMuaGFuZGxlVGlsZUNoYW5nZSwgdGhpcyk7XG4gIHJldHVybiB0aWxlO1xufTtcblxuXG4vKipcbiAqIEBpbmhlcml0RG9jXG4gKi9cbl9vbF9zb3VyY2VfVGlsZUltYWdlXy5wcm90b3R5cGUuZ2V0VGlsZSA9IGZ1bmN0aW9uKHosIHgsIHksIHBpeGVsUmF0aW8sIHByb2plY3Rpb24pIHtcbiAgdmFyIHNvdXJjZVByb2plY3Rpb24gPSAvKiogQHR5cGUgeyFvbC5wcm9qLlByb2plY3Rpb259ICovICh0aGlzLmdldFByb2plY3Rpb24oKSk7XG4gIGlmICghX29sXy5FTkFCTEVfUkFTVEVSX1JFUFJPSkVDVElPTiB8fFxuICAgICAgIXNvdXJjZVByb2plY3Rpb24gfHwgIXByb2plY3Rpb24gfHxcbiAgICAgIF9vbF9wcm9qXy5lcXVpdmFsZW50KHNvdXJjZVByb2plY3Rpb24sIHByb2plY3Rpb24pKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGlsZUludGVybmFsKHosIHgsIHksIHBpeGVsUmF0aW8sIHNvdXJjZVByb2plY3Rpb24gfHwgcHJvamVjdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNhY2hlID0gdGhpcy5nZXRUaWxlQ2FjaGVGb3JQcm9qZWN0aW9uKHByb2plY3Rpb24pO1xuICAgIHZhciB0aWxlQ29vcmQgPSBbeiwgeCwgeV07XG4gICAgdmFyIHRpbGU7XG4gICAgdmFyIHRpbGVDb29yZEtleSA9IF9vbF90aWxlY29vcmRfLmdldEtleSh0aWxlQ29vcmQpO1xuICAgIGlmIChjYWNoZS5jb250YWluc0tleSh0aWxlQ29vcmRLZXkpKSB7XG4gICAgICB0aWxlID0gLyoqIEB0eXBlIHshb2wuVGlsZX0gKi8gKGNhY2hlLmdldCh0aWxlQ29vcmRLZXkpKTtcbiAgICB9XG4gICAgdmFyIGtleSA9IHRoaXMuZ2V0S2V5KCk7XG4gICAgaWYgKHRpbGUgJiYgdGlsZS5rZXkgPT0ga2V5KSB7XG4gICAgICByZXR1cm4gdGlsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHNvdXJjZVRpbGVHcmlkID0gdGhpcy5nZXRUaWxlR3JpZEZvclByb2plY3Rpb24oc291cmNlUHJvamVjdGlvbik7XG4gICAgICB2YXIgdGFyZ2V0VGlsZUdyaWQgPSB0aGlzLmdldFRpbGVHcmlkRm9yUHJvamVjdGlvbihwcm9qZWN0aW9uKTtcbiAgICAgIHZhciB3cmFwcGVkVGlsZUNvb3JkID1cbiAgICAgICAgICB0aGlzLmdldFRpbGVDb29yZEZvclRpbGVVcmxGdW5jdGlvbih0aWxlQ29vcmQsIHByb2plY3Rpb24pO1xuICAgICAgdmFyIG5ld1RpbGUgPSBuZXcgX29sX3JlcHJval9UaWxlXyhcbiAgICAgICAgICBzb3VyY2VQcm9qZWN0aW9uLCBzb3VyY2VUaWxlR3JpZCxcbiAgICAgICAgICBwcm9qZWN0aW9uLCB0YXJnZXRUaWxlR3JpZCxcbiAgICAgICAgICB0aWxlQ29vcmQsIHdyYXBwZWRUaWxlQ29vcmQsIHRoaXMuZ2V0VGlsZVBpeGVsUmF0aW8ocGl4ZWxSYXRpbyksXG4gICAgICAgICAgdGhpcy5nZXRHdXR0ZXJJbnRlcm5hbCgpLFxuICAgICAgICAgIGZ1bmN0aW9uKHosIHgsIHksIHBpeGVsUmF0aW8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFRpbGVJbnRlcm5hbCh6LCB4LCB5LCBwaXhlbFJhdGlvLCBzb3VyY2VQcm9qZWN0aW9uKTtcbiAgICAgICAgICB9LmJpbmQodGhpcyksIHRoaXMucmVwcm9qZWN0aW9uRXJyb3JUaHJlc2hvbGRfLFxuICAgICAgICAgIHRoaXMucmVuZGVyUmVwcm9qZWN0aW9uRWRnZXNfKTtcbiAgICAgIG5ld1RpbGUua2V5ID0ga2V5O1xuXG4gICAgICBpZiAodGlsZSkge1xuICAgICAgICBuZXdUaWxlLmludGVyaW1UaWxlID0gdGlsZTtcbiAgICAgICAgbmV3VGlsZS5yZWZyZXNoSW50ZXJpbUNoYWluKCk7XG4gICAgICAgIGNhY2hlLnJlcGxhY2UodGlsZUNvb3JkS2V5LCBuZXdUaWxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhY2hlLnNldCh0aWxlQ29vcmRLZXksIG5ld1RpbGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld1RpbGU7XG4gICAgfVxuICB9XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHogVGlsZSBjb29yZGluYXRlIHouXG4gKiBAcGFyYW0ge251bWJlcn0geCBUaWxlIGNvb3JkaW5hdGUgeC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB5IFRpbGUgY29vcmRpbmF0ZSB5LlxuICogQHBhcmFtIHtudW1iZXJ9IHBpeGVsUmF0aW8gUGl4ZWwgcmF0aW8uXG4gKiBAcGFyYW0geyFvbC5wcm9qLlByb2plY3Rpb259IHByb2plY3Rpb24gUHJvamVjdGlvbi5cbiAqIEByZXR1cm4geyFvbC5UaWxlfSBUaWxlLlxuICogQHByb3RlY3RlZFxuICovXG5fb2xfc291cmNlX1RpbGVJbWFnZV8ucHJvdG90eXBlLmdldFRpbGVJbnRlcm5hbCA9IGZ1bmN0aW9uKHosIHgsIHksIHBpeGVsUmF0aW8sIHByb2plY3Rpb24pIHtcbiAgdmFyIHRpbGUgPSBudWxsO1xuICB2YXIgdGlsZUNvb3JkS2V5ID0gX29sX3RpbGVjb29yZF8uZ2V0S2V5WlhZKHosIHgsIHkpO1xuICB2YXIga2V5ID0gdGhpcy5nZXRLZXkoKTtcbiAgaWYgKCF0aGlzLnRpbGVDYWNoZS5jb250YWluc0tleSh0aWxlQ29vcmRLZXkpKSB7XG4gICAgdGlsZSA9IHRoaXMuY3JlYXRlVGlsZV8oeiwgeCwgeSwgcGl4ZWxSYXRpbywgcHJvamVjdGlvbiwga2V5KTtcbiAgICB0aGlzLnRpbGVDYWNoZS5zZXQodGlsZUNvb3JkS2V5LCB0aWxlKTtcbiAgfSBlbHNlIHtcbiAgICB0aWxlID0gdGhpcy50aWxlQ2FjaGUuZ2V0KHRpbGVDb29yZEtleSk7XG4gICAgaWYgKHRpbGUua2V5ICE9IGtleSkge1xuICAgICAgLy8gVGhlIHNvdXJjZSdzIHBhcmFtcyBjaGFuZ2VkLiBJZiB0aGUgdGlsZSBoYXMgYW4gaW50ZXJpbSB0aWxlIGFuZCBpZiB3ZVxuICAgICAgLy8gY2FuIHVzZSBpdCB0aGVuIHdlIHVzZSBpdC4gT3RoZXJ3aXNlIHdlIGNyZWF0ZSBhIG5ldyB0aWxlLiAgSW4gYm90aFxuICAgICAgLy8gY2FzZXMgd2UgYXR0ZW1wdCB0byBhc3NpZ24gYW4gaW50ZXJpbSB0aWxlIHRvIHRoZSBuZXcgdGlsZS5cbiAgICAgIHZhciBpbnRlcmltVGlsZSA9IHRpbGU7XG4gICAgICB0aWxlID0gdGhpcy5jcmVhdGVUaWxlXyh6LCB4LCB5LCBwaXhlbFJhdGlvLCBwcm9qZWN0aW9uLCBrZXkpO1xuXG4gICAgICAvL21ha2UgdGhlIG5ldyB0aWxlIHRoZSBoZWFkIG9mIHRoZSBsaXN0LFxuICAgICAgaWYgKGludGVyaW1UaWxlLmdldFN0YXRlKCkgPT0gX29sX1RpbGVTdGF0ZV8uSURMRSkge1xuICAgICAgICAvL3RoZSBvbGQgdGlsZSBoYXNuJ3QgYmVndW4gbG9hZGluZyB5ZXQsIGFuZCBpcyBub3cgb3V0ZGF0ZWQsIHNvIHdlIGNhbiBzaW1wbHkgZGlzY2FyZCBpdFxuICAgICAgICB0aWxlLmludGVyaW1UaWxlID0gaW50ZXJpbVRpbGUuaW50ZXJpbVRpbGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aWxlLmludGVyaW1UaWxlID0gaW50ZXJpbVRpbGU7XG4gICAgICB9XG4gICAgICB0aWxlLnJlZnJlc2hJbnRlcmltQ2hhaW4oKTtcbiAgICAgIHRoaXMudGlsZUNhY2hlLnJlcGxhY2UodGlsZUNvb3JkS2V5LCB0aWxlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRpbGU7XG59O1xuXG5cbi8qKlxuICogU2V0cyB3aGV0aGVyIHRvIHJlbmRlciByZXByb2plY3Rpb24gZWRnZXMgb3Igbm90ICh1c3VhbGx5IGZvciBkZWJ1Z2dpbmcpLlxuICogQHBhcmFtIHtib29sZWFufSByZW5kZXIgUmVuZGVyIHRoZSBlZGdlcy5cbiAqIEBhcGlcbiAqL1xuX29sX3NvdXJjZV9UaWxlSW1hZ2VfLnByb3RvdHlwZS5zZXRSZW5kZXJSZXByb2plY3Rpb25FZGdlcyA9IGZ1bmN0aW9uKHJlbmRlcikge1xuICBpZiAoIV9vbF8uRU5BQkxFX1JBU1RFUl9SRVBST0pFQ1RJT04gfHxcbiAgICAgIHRoaXMucmVuZGVyUmVwcm9qZWN0aW9uRWRnZXNfID09IHJlbmRlcikge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnJlbmRlclJlcHJvamVjdGlvbkVkZ2VzXyA9IHJlbmRlcjtcbiAgZm9yICh2YXIgaWQgaW4gdGhpcy50aWxlQ2FjaGVGb3JQcm9qZWN0aW9uKSB7XG4gICAgdGhpcy50aWxlQ2FjaGVGb3JQcm9qZWN0aW9uW2lkXS5jbGVhcigpO1xuICB9XG4gIHRoaXMuY2hhbmdlZCgpO1xufTtcblxuXG4vKipcbiAqIFNldHMgdGhlIHRpbGUgZ3JpZCB0byB1c2Ugd2hlbiByZXByb2plY3RpbmcgdGhlIHRpbGVzIHRvIHRoZSBnaXZlblxuICogcHJvamVjdGlvbiBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRpbGUgZ3JpZCBmb3IgdGhlIHByb2plY3Rpb24uXG4gKlxuICogVGhpcyBjYW4gYmUgdXNlZnVsIHdoZW4gdGhlIGRlZmF1bHQgdGlsZSBncmlkIGNhbm5vdCBiZSBjcmVhdGVkXG4gKiAoZS5nLiBwcm9qZWN0aW9uIGhhcyBubyBleHRlbnQgZGVmaW5lZCkgb3JcbiAqIGZvciBvcHRpbWl6YXRpb24gcmVhc29ucyAoY3VzdG9tIHRpbGUgc2l6ZSwgcmVzb2x1dGlvbnMsIC4uLikuXG4gKlxuICogQHBhcmFtIHtvbC5Qcm9qZWN0aW9uTGlrZX0gcHJvamVjdGlvbiBQcm9qZWN0aW9uLlxuICogQHBhcmFtIHtvbC50aWxlZ3JpZC5UaWxlR3JpZH0gdGlsZWdyaWQgVGlsZSBncmlkIHRvIHVzZSBmb3IgdGhlIHByb2plY3Rpb24uXG4gKiBAYXBpXG4gKi9cbl9vbF9zb3VyY2VfVGlsZUltYWdlXy5wcm90b3R5cGUuc2V0VGlsZUdyaWRGb3JQcm9qZWN0aW9uID0gZnVuY3Rpb24ocHJvamVjdGlvbiwgdGlsZWdyaWQpIHtcbiAgaWYgKF9vbF8uRU5BQkxFX1JBU1RFUl9SRVBST0pFQ1RJT04pIHtcbiAgICB2YXIgcHJvaiA9IF9vbF9wcm9qXy5nZXQocHJvamVjdGlvbik7XG4gICAgaWYgKHByb2opIHtcbiAgICAgIHZhciBwcm9qS2V5ID0gX29sXy5nZXRVaWQocHJvaikudG9TdHJpbmcoKTtcbiAgICAgIGlmICghKHByb2pLZXkgaW4gdGhpcy50aWxlR3JpZEZvclByb2plY3Rpb24pKSB7XG4gICAgICAgIHRoaXMudGlsZUdyaWRGb3JQcm9qZWN0aW9uW3Byb2pLZXldID0gdGlsZWdyaWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtvbC5JbWFnZVRpbGV9IGltYWdlVGlsZSBJbWFnZSB0aWxlLlxuICogQHBhcmFtIHtzdHJpbmd9IHNyYyBTb3VyY2UuXG4gKi9cbl9vbF9zb3VyY2VfVGlsZUltYWdlXy5kZWZhdWx0VGlsZUxvYWRGdW5jdGlvbiA9IGZ1bmN0aW9uKGltYWdlVGlsZSwgc3JjKSB7XG4gIGltYWdlVGlsZS5nZXRJbWFnZSgpLnNyYyA9IHNyYztcbn07XG5leHBvcnQgZGVmYXVsdCBfb2xfc291cmNlX1RpbGVJbWFnZV87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9zb3VyY2UvdGlsZWltYWdlLmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgX29sXyBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCBfb2xfVGlsZV8gZnJvbSAnLi90aWxlLmpzJztcbmltcG9ydCBfb2xfVGlsZVN0YXRlXyBmcm9tICcuL3RpbGVzdGF0ZS5qcyc7XG5pbXBvcnQgX29sX2RvbV8gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IF9vbF9ldmVudHNfIGZyb20gJy4vZXZlbnRzLmpzJztcbmltcG9ydCBfb2xfZXZlbnRzX0V2ZW50VHlwZV8gZnJvbSAnLi9ldmVudHMvZXZlbnR0eXBlLmpzJztcblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBleHRlbmRzIHtvbC5UaWxlfVxuICogQHBhcmFtIHtvbC5UaWxlQ29vcmR9IHRpbGVDb29yZCBUaWxlIGNvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge29sLlRpbGVTdGF0ZX0gc3RhdGUgU3RhdGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gc3JjIEltYWdlIHNvdXJjZSBVUkkuXG4gKiBAcGFyYW0gez9zdHJpbmd9IGNyb3NzT3JpZ2luIENyb3NzIG9yaWdpbi5cbiAqIEBwYXJhbSB7b2wuVGlsZUxvYWRGdW5jdGlvblR5cGV9IHRpbGVMb2FkRnVuY3Rpb24gVGlsZSBsb2FkIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtvbHguVGlsZU9wdGlvbnM9fSBvcHRfb3B0aW9ucyBUaWxlIG9wdGlvbnMuXG4gKi9cbnZhciBfb2xfSW1hZ2VUaWxlXyA9IGZ1bmN0aW9uKHRpbGVDb29yZCwgc3RhdGUsIHNyYywgY3Jvc3NPcmlnaW4sIHRpbGVMb2FkRnVuY3Rpb24sIG9wdF9vcHRpb25zKSB7XG5cbiAgX29sX1RpbGVfLmNhbGwodGhpcywgdGlsZUNvb3JkLCBzdGF0ZSwgb3B0X29wdGlvbnMpO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7P3N0cmluZ31cbiAgICovXG4gIHRoaXMuY3Jvc3NPcmlnaW5fID0gY3Jvc3NPcmlnaW47XG5cbiAgLyoqXG4gICAqIEltYWdlIFVSSVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgdGhpcy5zcmNfID0gc3JjO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7SW1hZ2V8SFRNTENhbnZhc0VsZW1lbnR9XG4gICAqL1xuICB0aGlzLmltYWdlXyA9IG5ldyBJbWFnZSgpO1xuICBpZiAoY3Jvc3NPcmlnaW4gIT09IG51bGwpIHtcbiAgICB0aGlzLmltYWdlXy5jcm9zc09yaWdpbiA9IGNyb3NzT3JpZ2luO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtBcnJheS48b2wuRXZlbnRzS2V5Pn1cbiAgICovXG4gIHRoaXMuaW1hZ2VMaXN0ZW5lcktleXNfID0gbnVsbDtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge29sLlRpbGVMb2FkRnVuY3Rpb25UeXBlfVxuICAgKi9cbiAgdGhpcy50aWxlTG9hZEZ1bmN0aW9uXyA9IHRpbGVMb2FkRnVuY3Rpb247XG5cbn07XG5cbl9vbF8uaW5oZXJpdHMoX29sX0ltYWdlVGlsZV8sIF9vbF9UaWxlXyk7XG5cblxuLyoqXG4gKiBAaW5oZXJpdERvY1xuICovXG5fb2xfSW1hZ2VUaWxlXy5wcm90b3R5cGUuZGlzcG9zZUludGVybmFsID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLnN0YXRlID09IF9vbF9UaWxlU3RhdGVfLkxPQURJTkcpIHtcbiAgICB0aGlzLnVubGlzdGVuSW1hZ2VfKCk7XG4gICAgdGhpcy5pbWFnZV8gPSBfb2xfSW1hZ2VUaWxlXy5nZXRCbGFua0ltYWdlKCk7XG4gIH1cbiAgaWYgKHRoaXMuaW50ZXJpbVRpbGUpIHtcbiAgICB0aGlzLmludGVyaW1UaWxlLmRpc3Bvc2UoKTtcbiAgfVxuICB0aGlzLnN0YXRlID0gX29sX1RpbGVTdGF0ZV8uQUJPUlQ7XG4gIHRoaXMuY2hhbmdlZCgpO1xuICBfb2xfVGlsZV8ucHJvdG90eXBlLmRpc3Bvc2VJbnRlcm5hbC5jYWxsKHRoaXMpO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgSFRNTCBpbWFnZSBlbGVtZW50IGZvciB0aGlzIHRpbGUgKG1heSBiZSBhIENhbnZhcywgSW1hZ2UsIG9yIFZpZGVvKS5cbiAqIEByZXR1cm4ge0hUTUxDYW52YXNFbGVtZW50fEhUTUxJbWFnZUVsZW1lbnR8SFRNTFZpZGVvRWxlbWVudH0gSW1hZ2UuXG4gKiBAYXBpXG4gKi9cbl9vbF9JbWFnZVRpbGVfLnByb3RvdHlwZS5nZXRJbWFnZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5pbWFnZV87XG59O1xuXG5cbi8qKlxuICogQGluaGVyaXREb2NcbiAqL1xuX29sX0ltYWdlVGlsZV8ucHJvdG90eXBlLmdldEtleSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5zcmNfO1xufTtcblxuXG4vKipcbiAqIFRyYWNrcyBsb2FkaW5nIG9yIHJlYWQgZXJyb3JzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbl9vbF9JbWFnZVRpbGVfLnByb3RvdHlwZS5oYW5kbGVJbWFnZUVycm9yXyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnN0YXRlID0gX29sX1RpbGVTdGF0ZV8uRVJST1I7XG4gIHRoaXMudW5saXN0ZW5JbWFnZV8oKTtcbiAgdGhpcy5pbWFnZV8gPSBfb2xfSW1hZ2VUaWxlXy5nZXRCbGFua0ltYWdlKCk7XG4gIHRoaXMuY2hhbmdlZCgpO1xufTtcblxuXG4vKipcbiAqIFRyYWNrcyBzdWNjZXNzZnVsIGltYWdlIGxvYWQuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuX29sX0ltYWdlVGlsZV8ucHJvdG90eXBlLmhhbmRsZUltYWdlTG9hZF8gPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuaW1hZ2VfLm5hdHVyYWxXaWR0aCAmJiB0aGlzLmltYWdlXy5uYXR1cmFsSGVpZ2h0KSB7XG4gICAgdGhpcy5zdGF0ZSA9IF9vbF9UaWxlU3RhdGVfLkxPQURFRDtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnN0YXRlID0gX29sX1RpbGVTdGF0ZV8uRU1QVFk7XG4gIH1cbiAgdGhpcy51bmxpc3RlbkltYWdlXygpO1xuICB0aGlzLmNoYW5nZWQoKTtcbn07XG5cblxuLyoqXG4gKiBAaW5oZXJpdERvY1xuICogQGFwaVxuICovXG5fb2xfSW1hZ2VUaWxlXy5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5zdGF0ZSA9PSBfb2xfVGlsZVN0YXRlXy5FUlJPUikge1xuICAgIHRoaXMuc3RhdGUgPSBfb2xfVGlsZVN0YXRlXy5JRExFO1xuICAgIHRoaXMuaW1hZ2VfID0gbmV3IEltYWdlKCk7XG4gICAgaWYgKHRoaXMuY3Jvc3NPcmlnaW5fICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmltYWdlXy5jcm9zc09yaWdpbiA9IHRoaXMuY3Jvc3NPcmlnaW5fO1xuICAgIH1cbiAgfVxuICBpZiAodGhpcy5zdGF0ZSA9PSBfb2xfVGlsZVN0YXRlXy5JRExFKSB7XG4gICAgdGhpcy5zdGF0ZSA9IF9vbF9UaWxlU3RhdGVfLkxPQURJTkc7XG4gICAgdGhpcy5jaGFuZ2VkKCk7XG4gICAgdGhpcy5pbWFnZUxpc3RlbmVyS2V5c18gPSBbXG4gICAgICBfb2xfZXZlbnRzXy5saXN0ZW5PbmNlKHRoaXMuaW1hZ2VfLCBfb2xfZXZlbnRzX0V2ZW50VHlwZV8uRVJST1IsXG4gICAgICAgICAgdGhpcy5oYW5kbGVJbWFnZUVycm9yXywgdGhpcyksXG4gICAgICBfb2xfZXZlbnRzXy5saXN0ZW5PbmNlKHRoaXMuaW1hZ2VfLCBfb2xfZXZlbnRzX0V2ZW50VHlwZV8uTE9BRCxcbiAgICAgICAgICB0aGlzLmhhbmRsZUltYWdlTG9hZF8sIHRoaXMpXG4gICAgXTtcbiAgICB0aGlzLnRpbGVMb2FkRnVuY3Rpb25fKHRoaXMsIHRoaXMuc3JjXyk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBEaXNjYXJkcyBldmVudCBoYW5kbGVycyB3aGljaCBsaXN0ZW4gZm9yIGxvYWQgY29tcGxldGlvbiBvciBlcnJvcnMuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuX29sX0ltYWdlVGlsZV8ucHJvdG90eXBlLnVubGlzdGVuSW1hZ2VfID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuaW1hZ2VMaXN0ZW5lcktleXNfLmZvckVhY2goX29sX2V2ZW50c18udW5saXN0ZW5CeUtleSk7XG4gIHRoaXMuaW1hZ2VMaXN0ZW5lcktleXNfID0gbnVsbDtcbn07XG5cblxuLyoqXG4gKiBHZXQgYSAxLXBpeGVsIGJsYW5rIGltYWdlLlxuICogQHJldHVybiB7SFRNTENhbnZhc0VsZW1lbnR9IEJsYW5rIGltYWdlLlxuICovXG5fb2xfSW1hZ2VUaWxlXy5nZXRCbGFua0ltYWdlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBjdHggPSBfb2xfZG9tXy5jcmVhdGVDYW52YXNDb250ZXh0MkQoMSwgMSk7XG4gIGN0eC5maWxsU3R5bGUgPSAncmdiYSgwLDAsMCwwKSc7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCAxLCAxKTtcbiAgcmV0dXJuIGN0eC5jYW52YXM7XG59O1xuZXhwb3J0IGRlZmF1bHQgX29sX0ltYWdlVGlsZV87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9pbWFnZXRpbGUuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfb2xfZWFzaW5nXyA9IHt9O1xuXG5cbi8qKlxuICogU3RhcnQgc2xvdyBhbmQgc3BlZWQgdXAuXG4gKiBAcGFyYW0ge251bWJlcn0gdCBJbnB1dCBiZXR3ZWVuIDAgYW5kIDEuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IE91dHB1dCBiZXR3ZWVuIDAgYW5kIDEuXG4gKiBAYXBpXG4gKi9cbl9vbF9lYXNpbmdfLmVhc2VJbiA9IGZ1bmN0aW9uKHQpIHtcbiAgcmV0dXJuIE1hdGgucG93KHQsIDMpO1xufTtcblxuXG4vKipcbiAqIFN0YXJ0IGZhc3QgYW5kIHNsb3cgZG93bi5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0IElucHV0IGJldHdlZW4gMCBhbmQgMS5cbiAqIEByZXR1cm4ge251bWJlcn0gT3V0cHV0IGJldHdlZW4gMCBhbmQgMS5cbiAqIEBhcGlcbiAqL1xuX29sX2Vhc2luZ18uZWFzZU91dCA9IGZ1bmN0aW9uKHQpIHtcbiAgcmV0dXJuIDEgLSBfb2xfZWFzaW5nXy5lYXNlSW4oMSAtIHQpO1xufTtcblxuXG4vKipcbiAqIFN0YXJ0IHNsb3csIHNwZWVkIHVwLCBhbmQgdGhlbiBzbG93IGRvd24gYWdhaW4uXG4gKiBAcGFyYW0ge251bWJlcn0gdCBJbnB1dCBiZXR3ZWVuIDAgYW5kIDEuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IE91dHB1dCBiZXR3ZWVuIDAgYW5kIDEuXG4gKiBAYXBpXG4gKi9cbl9vbF9lYXNpbmdfLmluQW5kT3V0ID0gZnVuY3Rpb24odCkge1xuICByZXR1cm4gMyAqIHQgKiB0IC0gMiAqIHQgKiB0ICogdDtcbn07XG5cblxuLyoqXG4gKiBNYWludGFpbiBhIGNvbnN0YW50IHNwZWVkIG92ZXIgdGltZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0IElucHV0IGJldHdlZW4gMCBhbmQgMS5cbiAqIEByZXR1cm4ge251bWJlcn0gT3V0cHV0IGJldHdlZW4gMCBhbmQgMS5cbiAqIEBhcGlcbiAqL1xuX29sX2Vhc2luZ18ubGluZWFyID0gZnVuY3Rpb24odCkge1xuICByZXR1cm4gdDtcbn07XG5cblxuLyoqXG4gKiBTdGFydCBzbG93LCBzcGVlZCB1cCwgYW5kIGF0IHRoZSB2ZXJ5IGVuZCBzbG93IGRvd24gYWdhaW4uICBUaGlzIGhhcyB0aGVcbiAqIHNhbWUgZ2VuZXJhbCBiZWhhdmlvciBhcyB7QGxpbmsgb2wuZWFzaW5nLmluQW5kT3V0fSwgYnV0IHRoZSBmaW5hbCBzbG93ZG93blxuICogaXMgZGVsYXllZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0IElucHV0IGJldHdlZW4gMCBhbmQgMS5cbiAqIEByZXR1cm4ge251bWJlcn0gT3V0cHV0IGJldHdlZW4gMCBhbmQgMS5cbiAqIEBhcGlcbiAqL1xuX29sX2Vhc2luZ18udXBBbmREb3duID0gZnVuY3Rpb24odCkge1xuICBpZiAodCA8IDAuNSkge1xuICAgIHJldHVybiBfb2xfZWFzaW5nXy5pbkFuZE91dCgyICogdCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDEgLSBfb2xfZWFzaW5nXy5pbkFuZE91dCgyICogKHQgLSAwLjUpKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IF9vbF9lYXNpbmdfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvZWFzaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgX29sXyBmcm9tICcuLi9pbmRleC5qcyc7XG5pbXBvcnQgX29sX2Fzc2VydHNfIGZyb20gJy4uL2Fzc2VydHMuanMnO1xuaW1wb3J0IF9vbF9ldmVudHNfRXZlbnRUYXJnZXRfIGZyb20gJy4uL2V2ZW50cy9ldmVudHRhcmdldC5qcyc7XG5pbXBvcnQgX29sX2V2ZW50c19FdmVudFR5cGVfIGZyb20gJy4uL2V2ZW50cy9ldmVudHR5cGUuanMnO1xuXG4vKipcbiAqIEltcGxlbWVudHMgYSBMZWFzdC1SZWNlbnRseS1Vc2VkIGNhY2hlIHdoZXJlIHRoZSBrZXlzIGRvIG5vdCBjb25mbGljdCB3aXRoXG4gKiBPYmplY3QncyBwcm9wZXJ0aWVzIChlLmcuICdoYXNPd25Qcm9wZXJ0eScgaXMgbm90IGFsbG93ZWQgYXMgYSBrZXkpLiBFeHBpcmluZ1xuICogaXRlbXMgZnJvbSB0aGUgY2FjaGUgaXMgdGhlIHJlc3BvbnNpYmlsaXR5IG9mIHRoZSB1c2VyLlxuICogQGNvbnN0cnVjdG9yXG4gKiBAZXh0ZW5kcyB7b2wuZXZlbnRzLkV2ZW50VGFyZ2V0fVxuICogQGZpcmVzIG9sLmV2ZW50cy5FdmVudFxuICogQHN0cnVjdFxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7bnVtYmVyPX0gb3B0X2hpZ2hXYXRlck1hcmsgSGlnaCB3YXRlciBtYXJrLlxuICovXG52YXIgX29sX3N0cnVjdHNfTFJVQ2FjaGVfID0gZnVuY3Rpb24ob3B0X2hpZ2hXYXRlck1hcmspIHtcblxuICBfb2xfZXZlbnRzX0V2ZW50VGFyZ2V0Xy5jYWxsKHRoaXMpO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgdGhpcy5oaWdoV2F0ZXJNYXJrID0gb3B0X2hpZ2hXYXRlck1hcmsgIT09IHVuZGVmaW5lZCA/IG9wdF9oaWdoV2F0ZXJNYXJrIDogMjA0ODtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIHRoaXMuY291bnRfID0gMDtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUgeyFPYmplY3QuPHN0cmluZywgb2wuTFJVQ2FjaGVFbnRyeT59XG4gICAqL1xuICB0aGlzLmVudHJpZXNfID0ge307XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHs/b2wuTFJVQ2FjaGVFbnRyeX1cbiAgICovXG4gIHRoaXMub2xkZXN0XyA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHs/b2wuTFJVQ2FjaGVFbnRyeX1cbiAgICovXG4gIHRoaXMubmV3ZXN0XyA9IG51bGw7XG5cbn07XG5cbl9vbF8uaW5oZXJpdHMoX29sX3N0cnVjdHNfTFJVQ2FjaGVfLCBfb2xfZXZlbnRzX0V2ZW50VGFyZ2V0Xyk7XG5cblxuLyoqXG4gKiBAcmV0dXJuIHtib29sZWFufSBDYW4gZXhwaXJlIGNhY2hlLlxuICovXG5fb2xfc3RydWN0c19MUlVDYWNoZV8ucHJvdG90eXBlLmNhbkV4cGlyZUNhY2hlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmdldENvdW50KCkgPiB0aGlzLmhpZ2hXYXRlck1hcms7XG59O1xuXG5cbi8qKlxuICogRklYTUUgZW1wdHkgZGVzY3JpcHRpb24gZm9yIGpzZG9jXG4gKi9cbl9vbF9zdHJ1Y3RzX0xSVUNhY2hlXy5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5jb3VudF8gPSAwO1xuICB0aGlzLmVudHJpZXNfID0ge307XG4gIHRoaXMub2xkZXN0XyA9IG51bGw7XG4gIHRoaXMubmV3ZXN0XyA9IG51bGw7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudChfb2xfZXZlbnRzX0V2ZW50VHlwZV8uQ0xFQVIpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgS2V5LlxuICogQHJldHVybiB7Ym9vbGVhbn0gQ29udGFpbnMga2V5LlxuICovXG5fb2xfc3RydWN0c19MUlVDYWNoZV8ucHJvdG90eXBlLmNvbnRhaW5zS2V5ID0gZnVuY3Rpb24oa2V5KSB7XG4gIHJldHVybiB0aGlzLmVudHJpZXNfLmhhc093blByb3BlcnR5KGtleSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtmdW5jdGlvbih0aGlzOiBTLCBULCBzdHJpbmcsIG9sLnN0cnVjdHMuTFJVQ2FjaGUpOiA/fSBmIFRoZSBmdW5jdGlvblxuICogICAgIHRvIGNhbGwgZm9yIGV2ZXJ5IGVudHJ5IGZyb20gdGhlIG9sZGVzdCB0byB0aGUgbmV3ZXIuIFRoaXMgZnVuY3Rpb24gdGFrZXNcbiAqICAgICAzIGFyZ3VtZW50cyAodGhlIGVudHJ5IHZhbHVlLCB0aGUgZW50cnkga2V5IGFuZCB0aGUgTFJVQ2FjaGUgb2JqZWN0KS5cbiAqICAgICBUaGUgcmV0dXJuIHZhbHVlIGlzIGlnbm9yZWQuXG4gKiBAcGFyYW0ge1M9fSBvcHRfdGhpcyBUaGUgb2JqZWN0IHRvIHVzZSBhcyBgdGhpc2AgaW4gYGZgLlxuICogQHRlbXBsYXRlIFNcbiAqL1xuX29sX3N0cnVjdHNfTFJVQ2FjaGVfLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oZiwgb3B0X3RoaXMpIHtcbiAgdmFyIGVudHJ5ID0gdGhpcy5vbGRlc3RfO1xuICB3aGlsZSAoZW50cnkpIHtcbiAgICBmLmNhbGwob3B0X3RoaXMsIGVudHJ5LnZhbHVlXywgZW50cnkua2V5XywgdGhpcyk7XG4gICAgZW50cnkgPSBlbnRyeS5uZXdlcjtcbiAgfVxufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgS2V5LlxuICogQHJldHVybiB7VH0gVmFsdWUuXG4gKi9cbl9vbF9zdHJ1Y3RzX0xSVUNhY2hlXy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oa2V5KSB7XG4gIHZhciBlbnRyeSA9IHRoaXMuZW50cmllc19ba2V5XTtcbiAgX29sX2Fzc2VydHNfLmFzc2VydChlbnRyeSAhPT0gdW5kZWZpbmVkLFxuICAgICAgMTUpOyAvLyBUcmllZCB0byBnZXQgYSB2YWx1ZSBmb3IgYSBrZXkgdGhhdCBkb2VzIG5vdCBleGlzdCBpbiB0aGUgY2FjaGVcbiAgaWYgKGVudHJ5ID09PSB0aGlzLm5ld2VzdF8pIHtcbiAgICByZXR1cm4gZW50cnkudmFsdWVfO1xuICB9IGVsc2UgaWYgKGVudHJ5ID09PSB0aGlzLm9sZGVzdF8pIHtcbiAgICB0aGlzLm9sZGVzdF8gPSAvKiogQHR5cGUge29sLkxSVUNhY2hlRW50cnl9ICovICh0aGlzLm9sZGVzdF8ubmV3ZXIpO1xuICAgIHRoaXMub2xkZXN0Xy5vbGRlciA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgZW50cnkubmV3ZXIub2xkZXIgPSBlbnRyeS5vbGRlcjtcbiAgICBlbnRyeS5vbGRlci5uZXdlciA9IGVudHJ5Lm5ld2VyO1xuICB9XG4gIGVudHJ5Lm5ld2VyID0gbnVsbDtcbiAgZW50cnkub2xkZXIgPSB0aGlzLm5ld2VzdF87XG4gIHRoaXMubmV3ZXN0Xy5uZXdlciA9IGVudHJ5O1xuICB0aGlzLm5ld2VzdF8gPSBlbnRyeTtcbiAgcmV0dXJuIGVudHJ5LnZhbHVlXztcbn07XG5cblxuLyoqXG4gKiBSZW1vdmUgYW4gZW50cnkgZnJvbSB0aGUgY2FjaGUuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBlbnRyeSBrZXkuXG4gKiBAcmV0dXJuIHtUfSBUaGUgcmVtb3ZlZCBlbnRyeS5cbiAqL1xuX29sX3N0cnVjdHNfTFJVQ2FjaGVfLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihrZXkpIHtcbiAgdmFyIGVudHJ5ID0gdGhpcy5lbnRyaWVzX1trZXldO1xuICBfb2xfYXNzZXJ0c18uYXNzZXJ0KGVudHJ5ICE9PSB1bmRlZmluZWQsIDE1KTsgLy8gVHJpZWQgdG8gZ2V0IGEgdmFsdWUgZm9yIGEga2V5IHRoYXQgZG9lcyBub3QgZXhpc3QgaW4gdGhlIGNhY2hlXG4gIGlmIChlbnRyeSA9PT0gdGhpcy5uZXdlc3RfKSB7XG4gICAgdGhpcy5uZXdlc3RfID0gLyoqIEB0eXBlIHtvbC5MUlVDYWNoZUVudHJ5fSAqLyAoZW50cnkub2xkZXIpO1xuICAgIGlmICh0aGlzLm5ld2VzdF8pIHtcbiAgICAgIHRoaXMubmV3ZXN0Xy5uZXdlciA9IG51bGw7XG4gICAgfVxuICB9IGVsc2UgaWYgKGVudHJ5ID09PSB0aGlzLm9sZGVzdF8pIHtcbiAgICB0aGlzLm9sZGVzdF8gPSAvKiogQHR5cGUge29sLkxSVUNhY2hlRW50cnl9ICovIChlbnRyeS5uZXdlcik7XG4gICAgaWYgKHRoaXMub2xkZXN0Xykge1xuICAgICAgdGhpcy5vbGRlc3RfLm9sZGVyID0gbnVsbDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZW50cnkubmV3ZXIub2xkZXIgPSBlbnRyeS5vbGRlcjtcbiAgICBlbnRyeS5vbGRlci5uZXdlciA9IGVudHJ5Lm5ld2VyO1xuICB9XG4gIGRlbGV0ZSB0aGlzLmVudHJpZXNfW2tleV07XG4gIC0tdGhpcy5jb3VudF87XG4gIHJldHVybiBlbnRyeS52YWx1ZV87XG59O1xuXG5cbi8qKlxuICogQHJldHVybiB7bnVtYmVyfSBDb3VudC5cbiAqL1xuX29sX3N0cnVjdHNfTFJVQ2FjaGVfLnByb3RvdHlwZS5nZXRDb3VudCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5jb3VudF87XG59O1xuXG5cbi8qKlxuICogQHJldHVybiB7QXJyYXkuPHN0cmluZz59IEtleXMuXG4gKi9cbl9vbF9zdHJ1Y3RzX0xSVUNhY2hlXy5wcm90b3R5cGUuZ2V0S2V5cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIga2V5cyA9IG5ldyBBcnJheSh0aGlzLmNvdW50Xyk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGVudHJ5O1xuICBmb3IgKGVudHJ5ID0gdGhpcy5uZXdlc3RfOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5vbGRlcikge1xuICAgIGtleXNbaSsrXSA9IGVudHJ5LmtleV87XG4gIH1cbiAgcmV0dXJuIGtleXM7XG59O1xuXG5cbi8qKlxuICogQHJldHVybiB7QXJyYXkuPFQ+fSBWYWx1ZXMuXG4gKi9cbl9vbF9zdHJ1Y3RzX0xSVUNhY2hlXy5wcm90b3R5cGUuZ2V0VmFsdWVzID0gZnVuY3Rpb24oKSB7XG4gIHZhciB2YWx1ZXMgPSBuZXcgQXJyYXkodGhpcy5jb3VudF8pO1xuICB2YXIgaSA9IDA7XG4gIHZhciBlbnRyeTtcbiAgZm9yIChlbnRyeSA9IHRoaXMubmV3ZXN0XzsgZW50cnk7IGVudHJ5ID0gZW50cnkub2xkZXIpIHtcbiAgICB2YWx1ZXNbaSsrXSA9IGVudHJ5LnZhbHVlXztcbiAgfVxuICByZXR1cm4gdmFsdWVzO1xufTtcblxuXG4vKipcbiAqIEByZXR1cm4ge1R9IExhc3QgdmFsdWUuXG4gKi9cbl9vbF9zdHJ1Y3RzX0xSVUNhY2hlXy5wcm90b3R5cGUucGVla0xhc3QgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMub2xkZXN0Xy52YWx1ZV87XG59O1xuXG5cbi8qKlxuICogQHJldHVybiB7c3RyaW5nfSBMYXN0IGtleS5cbiAqL1xuX29sX3N0cnVjdHNfTFJVQ2FjaGVfLnByb3RvdHlwZS5wZWVrTGFzdEtleSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5vbGRlc3RfLmtleV87XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBrZXkgb2YgdGhlIG5ld2VzdCBpdGVtIGluIHRoZSBjYWNoZS4gIFRocm93cyBpZiB0aGUgY2FjaGUgaXMgZW1wdHkuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBuZXdlc3Qga2V5LlxuICovXG5fb2xfc3RydWN0c19MUlVDYWNoZV8ucHJvdG90eXBlLnBlZWtGaXJzdEtleSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5uZXdlc3RfLmtleV87XG59O1xuXG5cbi8qKlxuICogQHJldHVybiB7VH0gdmFsdWUgVmFsdWUuXG4gKi9cbl9vbF9zdHJ1Y3RzX0xSVUNhY2hlXy5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24oKSB7XG4gIHZhciBlbnRyeSA9IHRoaXMub2xkZXN0XztcbiAgZGVsZXRlIHRoaXMuZW50cmllc19bZW50cnkua2V5X107XG4gIGlmIChlbnRyeS5uZXdlcikge1xuICAgIGVudHJ5Lm5ld2VyLm9sZGVyID0gbnVsbDtcbiAgfVxuICB0aGlzLm9sZGVzdF8gPSAvKiogQHR5cGUge29sLkxSVUNhY2hlRW50cnl9ICovIChlbnRyeS5uZXdlcik7XG4gIGlmICghdGhpcy5vbGRlc3RfKSB7XG4gICAgdGhpcy5uZXdlc3RfID0gbnVsbDtcbiAgfVxuICAtLXRoaXMuY291bnRfO1xuICByZXR1cm4gZW50cnkudmFsdWVfO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgS2V5LlxuICogQHBhcmFtIHtUfSB2YWx1ZSBWYWx1ZS5cbiAqL1xuX29sX3N0cnVjdHNfTFJVQ2FjaGVfLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICB0aGlzLmdldChrZXkpOyAgLy8gdXBkYXRlIGBuZXdlc3RfYFxuICB0aGlzLmVudHJpZXNfW2tleV0udmFsdWVfID0gdmFsdWU7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBLZXkuXG4gKiBAcGFyYW0ge1R9IHZhbHVlIFZhbHVlLlxuICovXG5fb2xfc3RydWN0c19MUlVDYWNoZV8ucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgX29sX2Fzc2VydHNfLmFzc2VydCghKGtleSBpbiB0aGlzLmVudHJpZXNfKSxcbiAgICAgIDE2KTsgLy8gVHJpZWQgdG8gc2V0IGEgdmFsdWUgZm9yIGEga2V5IHRoYXQgaXMgdXNlZCBhbHJlYWR5XG4gIHZhciBlbnRyeSA9IC8qKiBAdHlwZSB7b2wuTFJVQ2FjaGVFbnRyeX0gKi8gKHtcbiAgICBrZXlfOiBrZXksXG4gICAgbmV3ZXI6IG51bGwsXG4gICAgb2xkZXI6IHRoaXMubmV3ZXN0XyxcbiAgICB2YWx1ZV86IHZhbHVlXG4gIH0pO1xuICBpZiAoIXRoaXMubmV3ZXN0Xykge1xuICAgIHRoaXMub2xkZXN0XyA9IGVudHJ5O1xuICB9IGVsc2Uge1xuICAgIHRoaXMubmV3ZXN0Xy5uZXdlciA9IGVudHJ5O1xuICB9XG4gIHRoaXMubmV3ZXN0XyA9IGVudHJ5O1xuICB0aGlzLmVudHJpZXNfW2tleV0gPSBlbnRyeTtcbiAgKyt0aGlzLmNvdW50Xztcbn07XG5cblxuLyoqXG4gKiBQcnVuZSB0aGUgY2FjaGUuXG4gKi9cbl9vbF9zdHJ1Y3RzX0xSVUNhY2hlXy5wcm90b3R5cGUucHJ1bmUgPSBmdW5jdGlvbigpIHtcbiAgd2hpbGUgKHRoaXMuY2FuRXhwaXJlQ2FjaGUoKSkge1xuICAgIHRoaXMucG9wKCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBfb2xfc3RydWN0c19MUlVDYWNoZV87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9zdHJ1Y3RzL2xydWNhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgX29sXyBmcm9tICcuLi9pbmRleC5qcyc7XG5pbXBvcnQgX29sX1RpbGVfIGZyb20gJy4uL3RpbGUuanMnO1xuaW1wb3J0IF9vbF9UaWxlU3RhdGVfIGZyb20gJy4uL3RpbGVzdGF0ZS5qcyc7XG5pbXBvcnQgX29sX2V2ZW50c18gZnJvbSAnLi4vZXZlbnRzLmpzJztcbmltcG9ydCBfb2xfZXZlbnRzX0V2ZW50VHlwZV8gZnJvbSAnLi4vZXZlbnRzL2V2ZW50dHlwZS5qcyc7XG5pbXBvcnQgX29sX2V4dGVudF8gZnJvbSAnLi4vZXh0ZW50LmpzJztcbmltcG9ydCBfb2xfbWF0aF8gZnJvbSAnLi4vbWF0aC5qcyc7XG5pbXBvcnQgX29sX3JlcHJval8gZnJvbSAnLi4vcmVwcm9qLmpzJztcbmltcG9ydCBfb2xfcmVwcm9qX1RyaWFuZ3VsYXRpb25fIGZyb20gJy4uL3JlcHJvai90cmlhbmd1bGF0aW9uLmpzJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBDbGFzcyBlbmNhcHN1bGF0aW5nIHNpbmdsZSByZXByb2plY3RlZCB0aWxlLlxuICogU2VlIHtAbGluayBvbC5zb3VyY2UuVGlsZUltYWdlfS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBleHRlbmRzIHtvbC5UaWxlfVxuICogQHBhcmFtIHtvbC5wcm9qLlByb2plY3Rpb259IHNvdXJjZVByb2ogU291cmNlIHByb2plY3Rpb24uXG4gKiBAcGFyYW0ge29sLnRpbGVncmlkLlRpbGVHcmlkfSBzb3VyY2VUaWxlR3JpZCBTb3VyY2UgdGlsZSBncmlkLlxuICogQHBhcmFtIHtvbC5wcm9qLlByb2plY3Rpb259IHRhcmdldFByb2ogVGFyZ2V0IHByb2plY3Rpb24uXG4gKiBAcGFyYW0ge29sLnRpbGVncmlkLlRpbGVHcmlkfSB0YXJnZXRUaWxlR3JpZCBUYXJnZXQgdGlsZSBncmlkLlxuICogQHBhcmFtIHtvbC5UaWxlQ29vcmR9IHRpbGVDb29yZCBDb29yZGluYXRlIG9mIHRoZSB0aWxlLlxuICogQHBhcmFtIHtvbC5UaWxlQ29vcmR9IHdyYXBwZWRUaWxlQ29vcmQgQ29vcmRpbmF0ZSBvZiB0aGUgdGlsZSB3cmFwcGVkIGluIFguXG4gKiBAcGFyYW0ge251bWJlcn0gcGl4ZWxSYXRpbyBQaXhlbCByYXRpby5cbiAqIEBwYXJhbSB7bnVtYmVyfSBndXR0ZXIgR3V0dGVyIG9mIHRoZSBzb3VyY2UgdGlsZXMuXG4gKiBAcGFyYW0ge29sLlJlcHJvalRpbGVGdW5jdGlvblR5cGV9IGdldFRpbGVGdW5jdGlvblxuICogICAgIEZ1bmN0aW9uIHJldHVybmluZyBzb3VyY2UgdGlsZXMgKHosIHgsIHksIHBpeGVsUmF0aW8pLlxuICogQHBhcmFtIHtudW1iZXI9fSBvcHRfZXJyb3JUaHJlc2hvbGQgQWNjZXB0YWJsZSByZXByb2plY3Rpb24gZXJyb3IgKGluIHB4KS5cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdF9yZW5kZXJFZGdlcyBSZW5kZXIgcmVwcm9qZWN0aW9uIGVkZ2VzLlxuICovXG52YXIgX29sX3JlcHJval9UaWxlXyA9IGZ1bmN0aW9uKHNvdXJjZVByb2osIHNvdXJjZVRpbGVHcmlkLFxuICAgIHRhcmdldFByb2osIHRhcmdldFRpbGVHcmlkLCB0aWxlQ29vcmQsIHdyYXBwZWRUaWxlQ29vcmQsXG4gICAgcGl4ZWxSYXRpbywgZ3V0dGVyLCBnZXRUaWxlRnVuY3Rpb24sXG4gICAgb3B0X2Vycm9yVGhyZXNob2xkLCBvcHRfcmVuZGVyRWRnZXMpIHtcbiAgX29sX1RpbGVfLmNhbGwodGhpcywgdGlsZUNvb3JkLCBfb2xfVGlsZVN0YXRlXy5JRExFKTtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICB0aGlzLnJlbmRlckVkZ2VzXyA9IG9wdF9yZW5kZXJFZGdlcyAhPT0gdW5kZWZpbmVkID8gb3B0X3JlbmRlckVkZ2VzIDogZmFsc2U7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICB0aGlzLnBpeGVsUmF0aW9fID0gcGl4ZWxSYXRpbztcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIHRoaXMuZ3V0dGVyXyA9IGd1dHRlcjtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge0hUTUxDYW52YXNFbGVtZW50fVxuICAgKi9cbiAgdGhpcy5jYW52YXNfID0gbnVsbDtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge29sLnRpbGVncmlkLlRpbGVHcmlkfVxuICAgKi9cbiAgdGhpcy5zb3VyY2VUaWxlR3JpZF8gPSBzb3VyY2VUaWxlR3JpZDtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge29sLnRpbGVncmlkLlRpbGVHcmlkfVxuICAgKi9cbiAgdGhpcy50YXJnZXRUaWxlR3JpZF8gPSB0YXJnZXRUaWxlR3JpZDtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge29sLlRpbGVDb29yZH1cbiAgICovXG4gIHRoaXMud3JhcHBlZFRpbGVDb29yZF8gPSB3cmFwcGVkVGlsZUNvb3JkID8gd3JhcHBlZFRpbGVDb29yZCA6IHRpbGVDb29yZDtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUgeyFBcnJheS48b2wuVGlsZT59XG4gICAqL1xuICB0aGlzLnNvdXJjZVRpbGVzXyA9IFtdO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7QXJyYXkuPG9sLkV2ZW50c0tleT59XG4gICAqL1xuICB0aGlzLnNvdXJjZXNMaXN0ZW5lcktleXNfID0gbnVsbDtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIHRoaXMuc291cmNlWl8gPSAwO1xuXG4gIHZhciB0YXJnZXRFeHRlbnQgPSB0YXJnZXRUaWxlR3JpZC5nZXRUaWxlQ29vcmRFeHRlbnQodGhpcy53cmFwcGVkVGlsZUNvb3JkXyk7XG4gIHZhciBtYXhUYXJnZXRFeHRlbnQgPSB0aGlzLnRhcmdldFRpbGVHcmlkXy5nZXRFeHRlbnQoKTtcbiAgdmFyIG1heFNvdXJjZUV4dGVudCA9IHRoaXMuc291cmNlVGlsZUdyaWRfLmdldEV4dGVudCgpO1xuXG4gIHZhciBsaW1pdGVkVGFyZ2V0RXh0ZW50ID0gbWF4VGFyZ2V0RXh0ZW50ID9cbiAgICBfb2xfZXh0ZW50Xy5nZXRJbnRlcnNlY3Rpb24odGFyZ2V0RXh0ZW50LCBtYXhUYXJnZXRFeHRlbnQpIDogdGFyZ2V0RXh0ZW50O1xuXG4gIGlmIChfb2xfZXh0ZW50Xy5nZXRBcmVhKGxpbWl0ZWRUYXJnZXRFeHRlbnQpID09PSAwKSB7XG4gICAgLy8gVGlsZSBpcyBjb21wbGV0ZWx5IG91dHNpZGUgcmFuZ2UgLT4gRU1QVFlcbiAgICAvLyBUT0RPOiBpcyBpdCBhY3R1YWxseSBjb3JyZWN0IHRoYXQgdGhlIHNvdXJjZSBldmVuIGNyZWF0ZXMgdGhlIHRpbGUgP1xuICAgIHRoaXMuc3RhdGUgPSBfb2xfVGlsZVN0YXRlXy5FTVBUWTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgc291cmNlUHJvakV4dGVudCA9IHNvdXJjZVByb2ouZ2V0RXh0ZW50KCk7XG4gIGlmIChzb3VyY2VQcm9qRXh0ZW50KSB7XG4gICAgaWYgKCFtYXhTb3VyY2VFeHRlbnQpIHtcbiAgICAgIG1heFNvdXJjZUV4dGVudCA9IHNvdXJjZVByb2pFeHRlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1heFNvdXJjZUV4dGVudCA9IF9vbF9leHRlbnRfLmdldEludGVyc2VjdGlvbihcbiAgICAgICAgICBtYXhTb3VyY2VFeHRlbnQsIHNvdXJjZVByb2pFeHRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHZhciB0YXJnZXRSZXNvbHV0aW9uID0gdGFyZ2V0VGlsZUdyaWQuZ2V0UmVzb2x1dGlvbihcbiAgICAgIHRoaXMud3JhcHBlZFRpbGVDb29yZF9bMF0pO1xuXG4gIHZhciB0YXJnZXRDZW50ZXIgPSBfb2xfZXh0ZW50Xy5nZXRDZW50ZXIobGltaXRlZFRhcmdldEV4dGVudCk7XG4gIHZhciBzb3VyY2VSZXNvbHV0aW9uID0gX29sX3JlcHJval8uY2FsY3VsYXRlU291cmNlUmVzb2x1dGlvbihcbiAgICAgIHNvdXJjZVByb2osIHRhcmdldFByb2osIHRhcmdldENlbnRlciwgdGFyZ2V0UmVzb2x1dGlvbik7XG5cbiAgaWYgKCFpc0Zpbml0ZShzb3VyY2VSZXNvbHV0aW9uKSB8fCBzb3VyY2VSZXNvbHV0aW9uIDw9IDApIHtcbiAgICAvLyBpbnZhbGlkIHNvdXJjZVJlc29sdXRpb24gLT4gRU1QVFlcbiAgICAvLyBwcm9iYWJseSBlZGdlcyBvZiB0aGUgcHJvamVjdGlvbnMgd2hlbiBubyBleHRlbnQgaXMgZGVmaW5lZFxuICAgIHRoaXMuc3RhdGUgPSBfb2xfVGlsZVN0YXRlXy5FTVBUWTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZXJyb3JUaHJlc2hvbGRJblBpeGVscyA9IG9wdF9lcnJvclRocmVzaG9sZCAhPT0gdW5kZWZpbmVkID9cbiAgICBvcHRfZXJyb3JUaHJlc2hvbGQgOiBfb2xfLkRFRkFVTFRfUkFTVEVSX1JFUFJPSkVDVElPTl9FUlJPUl9USFJFU0hPTEQ7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHshb2wucmVwcm9qLlRyaWFuZ3VsYXRpb259XG4gICAqL1xuICB0aGlzLnRyaWFuZ3VsYXRpb25fID0gbmV3IF9vbF9yZXByb2pfVHJpYW5ndWxhdGlvbl8oXG4gICAgICBzb3VyY2VQcm9qLCB0YXJnZXRQcm9qLCBsaW1pdGVkVGFyZ2V0RXh0ZW50LCBtYXhTb3VyY2VFeHRlbnQsXG4gICAgICBzb3VyY2VSZXNvbHV0aW9uICogZXJyb3JUaHJlc2hvbGRJblBpeGVscyk7XG5cbiAgaWYgKHRoaXMudHJpYW5ndWxhdGlvbl8uZ2V0VHJpYW5nbGVzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gbm8gdmFsaWQgdHJpYW5nbGVzIC0+IEVNUFRZXG4gICAgdGhpcy5zdGF0ZSA9IF9vbF9UaWxlU3RhdGVfLkVNUFRZO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuc291cmNlWl8gPSBzb3VyY2VUaWxlR3JpZC5nZXRaRm9yUmVzb2x1dGlvbihzb3VyY2VSZXNvbHV0aW9uKTtcbiAgdmFyIHNvdXJjZUV4dGVudCA9IHRoaXMudHJpYW5ndWxhdGlvbl8uY2FsY3VsYXRlU291cmNlRXh0ZW50KCk7XG5cbiAgaWYgKG1heFNvdXJjZUV4dGVudCkge1xuICAgIGlmIChzb3VyY2VQcm9qLmNhbldyYXBYKCkpIHtcbiAgICAgIHNvdXJjZUV4dGVudFsxXSA9IF9vbF9tYXRoXy5jbGFtcChcbiAgICAgICAgICBzb3VyY2VFeHRlbnRbMV0sIG1heFNvdXJjZUV4dGVudFsxXSwgbWF4U291cmNlRXh0ZW50WzNdKTtcbiAgICAgIHNvdXJjZUV4dGVudFszXSA9IF9vbF9tYXRoXy5jbGFtcChcbiAgICAgICAgICBzb3VyY2VFeHRlbnRbM10sIG1heFNvdXJjZUV4dGVudFsxXSwgbWF4U291cmNlRXh0ZW50WzNdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc291cmNlRXh0ZW50ID0gX29sX2V4dGVudF8uZ2V0SW50ZXJzZWN0aW9uKHNvdXJjZUV4dGVudCwgbWF4U291cmNlRXh0ZW50KTtcbiAgICB9XG4gIH1cblxuICBpZiAoIV9vbF9leHRlbnRfLmdldEFyZWEoc291cmNlRXh0ZW50KSkge1xuICAgIHRoaXMuc3RhdGUgPSBfb2xfVGlsZVN0YXRlXy5FTVBUWTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgc291cmNlUmFuZ2UgPSBzb3VyY2VUaWxlR3JpZC5nZXRUaWxlUmFuZ2VGb3JFeHRlbnRBbmRaKFxuICAgICAgICBzb3VyY2VFeHRlbnQsIHRoaXMuc291cmNlWl8pO1xuXG4gICAgZm9yICh2YXIgc3JjWCA9IHNvdXJjZVJhbmdlLm1pblg7IHNyY1ggPD0gc291cmNlUmFuZ2UubWF4WDsgc3JjWCsrKSB7XG4gICAgICBmb3IgKHZhciBzcmNZID0gc291cmNlUmFuZ2UubWluWTsgc3JjWSA8PSBzb3VyY2VSYW5nZS5tYXhZOyBzcmNZKyspIHtcbiAgICAgICAgdmFyIHRpbGUgPSBnZXRUaWxlRnVuY3Rpb24odGhpcy5zb3VyY2VaXywgc3JjWCwgc3JjWSwgcGl4ZWxSYXRpbyk7XG4gICAgICAgIGlmICh0aWxlKSB7XG4gICAgICAgICAgdGhpcy5zb3VyY2VUaWxlc18ucHVzaCh0aWxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnNvdXJjZVRpbGVzXy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc3RhdGUgPSBfb2xfVGlsZVN0YXRlXy5FTVBUWTtcbiAgICB9XG4gIH1cbn07XG5cbl9vbF8uaW5oZXJpdHMoX29sX3JlcHJval9UaWxlXywgX29sX1RpbGVfKTtcblxuXG4vKipcbiAqIEBpbmhlcml0RG9jXG4gKi9cbl9vbF9yZXByb2pfVGlsZV8ucHJvdG90eXBlLmRpc3Bvc2VJbnRlcm5hbCA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5zdGF0ZSA9PSBfb2xfVGlsZVN0YXRlXy5MT0FESU5HKSB7XG4gICAgdGhpcy51bmxpc3RlblNvdXJjZXNfKCk7XG4gIH1cbiAgX29sX1RpbGVfLnByb3RvdHlwZS5kaXNwb3NlSW50ZXJuYWwuY2FsbCh0aGlzKTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIEhUTUwgQ2FudmFzIGVsZW1lbnQgZm9yIHRoaXMgdGlsZS5cbiAqIEByZXR1cm4ge0hUTUxDYW52YXNFbGVtZW50fSBDYW52YXMuXG4gKi9cbl9vbF9yZXByb2pfVGlsZV8ucHJvdG90eXBlLmdldEltYWdlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmNhbnZhc187XG59O1xuXG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuX29sX3JlcHJval9UaWxlXy5wcm90b3R5cGUucmVwcm9qZWN0XyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc291cmNlcyA9IFtdO1xuICB0aGlzLnNvdXJjZVRpbGVzXy5mb3JFYWNoKGZ1bmN0aW9uKHRpbGUsIGksIGFycikge1xuICAgIGlmICh0aWxlICYmIHRpbGUuZ2V0U3RhdGUoKSA9PSBfb2xfVGlsZVN0YXRlXy5MT0FERUQpIHtcbiAgICAgIHNvdXJjZXMucHVzaCh7XG4gICAgICAgIGV4dGVudDogdGhpcy5zb3VyY2VUaWxlR3JpZF8uZ2V0VGlsZUNvb3JkRXh0ZW50KHRpbGUudGlsZUNvb3JkKSxcbiAgICAgICAgaW1hZ2U6IHRpbGUuZ2V0SW1hZ2UoKVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB0aGlzKTtcbiAgdGhpcy5zb3VyY2VUaWxlc18ubGVuZ3RoID0gMDtcblxuICBpZiAoc291cmNlcy5sZW5ndGggPT09IDApIHtcbiAgICB0aGlzLnN0YXRlID0gX29sX1RpbGVTdGF0ZV8uRVJST1I7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHogPSB0aGlzLndyYXBwZWRUaWxlQ29vcmRfWzBdO1xuICAgIHZhciBzaXplID0gdGhpcy50YXJnZXRUaWxlR3JpZF8uZ2V0VGlsZVNpemUoeik7XG4gICAgdmFyIHdpZHRoID0gdHlwZW9mIHNpemUgPT09ICdudW1iZXInID8gc2l6ZSA6IHNpemVbMF07XG4gICAgdmFyIGhlaWdodCA9IHR5cGVvZiBzaXplID09PSAnbnVtYmVyJyA/IHNpemUgOiBzaXplWzFdO1xuICAgIHZhciB0YXJnZXRSZXNvbHV0aW9uID0gdGhpcy50YXJnZXRUaWxlR3JpZF8uZ2V0UmVzb2x1dGlvbih6KTtcbiAgICB2YXIgc291cmNlUmVzb2x1dGlvbiA9IHRoaXMuc291cmNlVGlsZUdyaWRfLmdldFJlc29sdXRpb24odGhpcy5zb3VyY2VaXyk7XG5cbiAgICB2YXIgdGFyZ2V0RXh0ZW50ID0gdGhpcy50YXJnZXRUaWxlR3JpZF8uZ2V0VGlsZUNvb3JkRXh0ZW50KFxuICAgICAgICB0aGlzLndyYXBwZWRUaWxlQ29vcmRfKTtcbiAgICB0aGlzLmNhbnZhc18gPSBfb2xfcmVwcm9qXy5yZW5kZXIod2lkdGgsIGhlaWdodCwgdGhpcy5waXhlbFJhdGlvXyxcbiAgICAgICAgc291cmNlUmVzb2x1dGlvbiwgdGhpcy5zb3VyY2VUaWxlR3JpZF8uZ2V0RXh0ZW50KCksXG4gICAgICAgIHRhcmdldFJlc29sdXRpb24sIHRhcmdldEV4dGVudCwgdGhpcy50cmlhbmd1bGF0aW9uXywgc291cmNlcyxcbiAgICAgICAgdGhpcy5ndXR0ZXJfLCB0aGlzLnJlbmRlckVkZ2VzXyk7XG5cbiAgICB0aGlzLnN0YXRlID0gX29sX1RpbGVTdGF0ZV8uTE9BREVEO1xuICB9XG4gIHRoaXMuY2hhbmdlZCgpO1xufTtcblxuXG4vKipcbiAqIEBpbmhlcml0RG9jXG4gKi9cbl9vbF9yZXByb2pfVGlsZV8ucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuc3RhdGUgPT0gX29sX1RpbGVTdGF0ZV8uSURMRSkge1xuICAgIHRoaXMuc3RhdGUgPSBfb2xfVGlsZVN0YXRlXy5MT0FESU5HO1xuICAgIHRoaXMuY2hhbmdlZCgpO1xuXG4gICAgdmFyIGxlZnRUb0xvYWQgPSAwO1xuXG4gICAgdGhpcy5zb3VyY2VzTGlzdGVuZXJLZXlzXyA9IFtdO1xuICAgIHRoaXMuc291cmNlVGlsZXNfLmZvckVhY2goZnVuY3Rpb24odGlsZSwgaSwgYXJyKSB7XG4gICAgICB2YXIgc3RhdGUgPSB0aWxlLmdldFN0YXRlKCk7XG4gICAgICBpZiAoc3RhdGUgPT0gX29sX1RpbGVTdGF0ZV8uSURMRSB8fCBzdGF0ZSA9PSBfb2xfVGlsZVN0YXRlXy5MT0FESU5HKSB7XG4gICAgICAgIGxlZnRUb0xvYWQrKztcblxuICAgICAgICB2YXIgc291cmNlTGlzdGVuS2V5O1xuICAgICAgICBzb3VyY2VMaXN0ZW5LZXkgPSBfb2xfZXZlbnRzXy5saXN0ZW4odGlsZSwgX29sX2V2ZW50c19FdmVudFR5cGVfLkNIQU5HRSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgdmFyIHN0YXRlID0gdGlsZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICBpZiAoc3RhdGUgPT0gX29sX1RpbGVTdGF0ZV8uTE9BREVEIHx8XG4gICAgICAgICAgICAgICAgICBzdGF0ZSA9PSBfb2xfVGlsZVN0YXRlXy5FUlJPUiB8fFxuICAgICAgICAgICAgICAgICAgc3RhdGUgPT0gX29sX1RpbGVTdGF0ZV8uRU1QVFkpIHtcbiAgICAgICAgICAgICAgICBfb2xfZXZlbnRzXy51bmxpc3RlbkJ5S2V5KHNvdXJjZUxpc3RlbktleSk7XG4gICAgICAgICAgICAgICAgbGVmdFRvTG9hZC0tO1xuICAgICAgICAgICAgICAgIGlmIChsZWZ0VG9Mb2FkID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnVubGlzdGVuU291cmNlc18oKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVwcm9qZWN0XygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHRoaXMuc291cmNlc0xpc3RlbmVyS2V5c18ucHVzaChzb3VyY2VMaXN0ZW5LZXkpO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuXG4gICAgdGhpcy5zb3VyY2VUaWxlc18uZm9yRWFjaChmdW5jdGlvbih0aWxlLCBpLCBhcnIpIHtcbiAgICAgIHZhciBzdGF0ZSA9IHRpbGUuZ2V0U3RhdGUoKTtcbiAgICAgIGlmIChzdGF0ZSA9PSBfb2xfVGlsZVN0YXRlXy5JRExFKSB7XG4gICAgICAgIHRpbGUubG9hZCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGxlZnRUb0xvYWQgPT09IDApIHtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5yZXByb2plY3RfLmJpbmQodGhpcyksIDApO1xuICAgIH1cbiAgfVxufTtcblxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbl9vbF9yZXByb2pfVGlsZV8ucHJvdG90eXBlLnVubGlzdGVuU291cmNlc18gPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zb3VyY2VzTGlzdGVuZXJLZXlzXy5mb3JFYWNoKF9vbF9ldmVudHNfLnVubGlzdGVuQnlLZXkpO1xuICB0aGlzLnNvdXJjZXNMaXN0ZW5lcktleXNfID0gbnVsbDtcbn07XG5leHBvcnQgZGVmYXVsdCBfb2xfcmVwcm9qX1RpbGVfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvcmVwcm9qL3RpbGUuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfb2xfIGZyb20gJy4uL2luZGV4LmpzJztcbmltcG9ydCBfb2xfVGlsZVN0YXRlXyBmcm9tICcuLi90aWxlc3RhdGUuanMnO1xuaW1wb3J0IF9vbF9UaWxlVXJsRnVuY3Rpb25fIGZyb20gJy4uL3RpbGV1cmxmdW5jdGlvbi5qcyc7XG5pbXBvcnQgX29sX3NvdXJjZV9UaWxlXyBmcm9tICcuLi9zb3VyY2UvdGlsZS5qcyc7XG5pbXBvcnQgX29sX3NvdXJjZV9UaWxlRXZlbnRUeXBlXyBmcm9tICcuLi9zb3VyY2UvdGlsZWV2ZW50dHlwZS5qcyc7XG5pbXBvcnQgX29sX3RpbGVjb29yZF8gZnJvbSAnLi4vdGlsZWNvb3JkLmpzJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBCYXNlIGNsYXNzIGZvciBzb3VyY2VzIHByb3ZpZGluZyB0aWxlcyBkaXZpZGVkIGludG8gYSB0aWxlIGdyaWQgb3ZlciBodHRwLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQGFic3RyYWN0XG4gKiBAZmlyZXMgb2wuc291cmNlLlRpbGUuRXZlbnRcbiAqIEBleHRlbmRzIHtvbC5zb3VyY2UuVGlsZX1cbiAqIEBwYXJhbSB7b2wuU291cmNlVXJsVGlsZU9wdGlvbnN9IG9wdGlvbnMgSW1hZ2UgdGlsZSBvcHRpb25zLlxuICovXG52YXIgX29sX3NvdXJjZV9VcmxUaWxlXyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblxuICBfb2xfc291cmNlX1RpbGVfLmNhbGwodGhpcywge1xuICAgIGF0dHJpYnV0aW9uczogb3B0aW9ucy5hdHRyaWJ1dGlvbnMsXG4gICAgY2FjaGVTaXplOiBvcHRpb25zLmNhY2hlU2l6ZSxcbiAgICBleHRlbnQ6IG9wdGlvbnMuZXh0ZW50LFxuICAgIGxvZ286IG9wdGlvbnMubG9nbyxcbiAgICBvcGFxdWU6IG9wdGlvbnMub3BhcXVlLFxuICAgIHByb2plY3Rpb246IG9wdGlvbnMucHJvamVjdGlvbixcbiAgICBzdGF0ZTogb3B0aW9ucy5zdGF0ZSxcbiAgICB0aWxlR3JpZDogb3B0aW9ucy50aWxlR3JpZCxcbiAgICB0aWxlUGl4ZWxSYXRpbzogb3B0aW9ucy50aWxlUGl4ZWxSYXRpbyxcbiAgICB3cmFwWDogb3B0aW9ucy53cmFwWCxcbiAgICB0cmFuc2l0aW9uOiBvcHRpb25zLnRyYW5zaXRpb25cbiAgfSk7XG5cbiAgLyoqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHR5cGUge29sLlRpbGVMb2FkRnVuY3Rpb25UeXBlfVxuICAgKi9cbiAgdGhpcy50aWxlTG9hZEZ1bmN0aW9uID0gb3B0aW9ucy50aWxlTG9hZEZ1bmN0aW9uO1xuXG4gIC8qKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEB0eXBlIHtvbC5UaWxlVXJsRnVuY3Rpb25UeXBlfVxuICAgKi9cbiAgdGhpcy50aWxlVXJsRnVuY3Rpb24gPSB0aGlzLmZpeGVkVGlsZVVybEZ1bmN0aW9uID9cbiAgICB0aGlzLmZpeGVkVGlsZVVybEZ1bmN0aW9uLmJpbmQodGhpcykgOlxuICAgIF9vbF9UaWxlVXJsRnVuY3Rpb25fLm51bGxUaWxlVXJsRnVuY3Rpb247XG5cbiAgLyoqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHR5cGUgeyFBcnJheS48c3RyaW5nPnxudWxsfVxuICAgKi9cbiAgdGhpcy51cmxzID0gbnVsbDtcblxuICBpZiAob3B0aW9ucy51cmxzKSB7XG4gICAgdGhpcy5zZXRVcmxzKG9wdGlvbnMudXJscyk7XG4gIH0gZWxzZSBpZiAob3B0aW9ucy51cmwpIHtcbiAgICB0aGlzLnNldFVybChvcHRpb25zLnVybCk7XG4gIH1cbiAgaWYgKG9wdGlvbnMudGlsZVVybEZ1bmN0aW9uKSB7XG4gICAgdGhpcy5zZXRUaWxlVXJsRnVuY3Rpb24ob3B0aW9ucy50aWxlVXJsRnVuY3Rpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtPYmplY3QuPG51bWJlciwgYm9vbGVhbj59XG4gICAqL1xuICB0aGlzLnRpbGVMb2FkaW5nS2V5c18gPSB7fTtcblxufTtcblxuX29sXy5pbmhlcml0cyhfb2xfc291cmNlX1VybFRpbGVfLCBfb2xfc291cmNlX1RpbGVfKTtcblxuXG4vKipcbiAqIEB0eXBlIHtvbC5UaWxlVXJsRnVuY3Rpb25UeXBlfHVuZGVmaW5lZH1cbiAqIEBwcm90ZWN0ZWRcbiAqL1xuX29sX3NvdXJjZV9VcmxUaWxlXy5wcm90b3R5cGUuZml4ZWRUaWxlVXJsRnVuY3Rpb247XG5cbi8qKlxuICogUmV0dXJuIHRoZSB0aWxlIGxvYWQgZnVuY3Rpb24gb2YgdGhlIHNvdXJjZS5cbiAqIEByZXR1cm4ge29sLlRpbGVMb2FkRnVuY3Rpb25UeXBlfSBUaWxlTG9hZEZ1bmN0aW9uXG4gKiBAYXBpXG4gKi9cbl9vbF9zb3VyY2VfVXJsVGlsZV8ucHJvdG90eXBlLmdldFRpbGVMb2FkRnVuY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudGlsZUxvYWRGdW5jdGlvbjtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm4gdGhlIHRpbGUgVVJMIGZ1bmN0aW9uIG9mIHRoZSBzb3VyY2UuXG4gKiBAcmV0dXJuIHtvbC5UaWxlVXJsRnVuY3Rpb25UeXBlfSBUaWxlVXJsRnVuY3Rpb25cbiAqIEBhcGlcbiAqL1xuX29sX3NvdXJjZV9VcmxUaWxlXy5wcm90b3R5cGUuZ2V0VGlsZVVybEZ1bmN0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnRpbGVVcmxGdW5jdGlvbjtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm4gdGhlIFVSTHMgdXNlZCBmb3IgdGhpcyBzb3VyY2UuXG4gKiBXaGVuIGEgdGlsZVVybEZ1bmN0aW9uIGlzIHVzZWQgaW5zdGVhZCBvZiB1cmwgb3IgdXJscyxcbiAqIG51bGwgd2lsbCBiZSByZXR1cm5lZC5cbiAqIEByZXR1cm4geyFBcnJheS48c3RyaW5nPnxudWxsfSBVUkxzLlxuICogQGFwaVxuICovXG5fb2xfc291cmNlX1VybFRpbGVfLnByb3RvdHlwZS5nZXRVcmxzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnVybHM7XG59O1xuXG5cbi8qKlxuICogSGFuZGxlIHRpbGUgY2hhbmdlIGV2ZW50cy5cbiAqIEBwYXJhbSB7b2wuZXZlbnRzLkV2ZW50fSBldmVudCBFdmVudC5cbiAqIEBwcm90ZWN0ZWRcbiAqL1xuX29sX3NvdXJjZV9VcmxUaWxlXy5wcm90b3R5cGUuaGFuZGxlVGlsZUNoYW5nZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIHZhciB0aWxlID0gLyoqIEB0eXBlIHtvbC5UaWxlfSAqLyAoZXZlbnQudGFyZ2V0KTtcbiAgdmFyIHVpZCA9IF9vbF8uZ2V0VWlkKHRpbGUpO1xuICB2YXIgdGlsZVN0YXRlID0gdGlsZS5nZXRTdGF0ZSgpO1xuICB2YXIgdHlwZTtcbiAgaWYgKHRpbGVTdGF0ZSA9PSBfb2xfVGlsZVN0YXRlXy5MT0FESU5HKSB7XG4gICAgdGhpcy50aWxlTG9hZGluZ0tleXNfW3VpZF0gPSB0cnVlO1xuICAgIHR5cGUgPSBfb2xfc291cmNlX1RpbGVFdmVudFR5cGVfLlRJTEVMT0FEU1RBUlQ7XG4gIH0gZWxzZSBpZiAodWlkIGluIHRoaXMudGlsZUxvYWRpbmdLZXlzXykge1xuICAgIGRlbGV0ZSB0aGlzLnRpbGVMb2FkaW5nS2V5c19bdWlkXTtcbiAgICB0eXBlID0gdGlsZVN0YXRlID09IF9vbF9UaWxlU3RhdGVfLkVSUk9SID8gX29sX3NvdXJjZV9UaWxlRXZlbnRUeXBlXy5USUxFTE9BREVSUk9SIDpcbiAgICAgICh0aWxlU3RhdGUgPT0gX29sX1RpbGVTdGF0ZV8uTE9BREVEIHx8IHRpbGVTdGF0ZSA9PSBfb2xfVGlsZVN0YXRlXy5BQk9SVCkgP1xuICAgICAgICBfb2xfc291cmNlX1RpbGVFdmVudFR5cGVfLlRJTEVMT0FERU5EIDogdW5kZWZpbmVkO1xuICB9XG4gIGlmICh0eXBlICE9IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX29sX3NvdXJjZV9UaWxlXy5FdmVudCh0eXBlLCB0aWxlKSk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBTZXQgdGhlIHRpbGUgbG9hZCBmdW5jdGlvbiBvZiB0aGUgc291cmNlLlxuICogQHBhcmFtIHtvbC5UaWxlTG9hZEZ1bmN0aW9uVHlwZX0gdGlsZUxvYWRGdW5jdGlvbiBUaWxlIGxvYWQgZnVuY3Rpb24uXG4gKiBAYXBpXG4gKi9cbl9vbF9zb3VyY2VfVXJsVGlsZV8ucHJvdG90eXBlLnNldFRpbGVMb2FkRnVuY3Rpb24gPSBmdW5jdGlvbih0aWxlTG9hZEZ1bmN0aW9uKSB7XG4gIHRoaXMudGlsZUNhY2hlLmNsZWFyKCk7XG4gIHRoaXMudGlsZUxvYWRGdW5jdGlvbiA9IHRpbGVMb2FkRnVuY3Rpb247XG4gIHRoaXMuY2hhbmdlZCgpO1xufTtcblxuXG4vKipcbiAqIFNldCB0aGUgdGlsZSBVUkwgZnVuY3Rpb24gb2YgdGhlIHNvdXJjZS5cbiAqIEBwYXJhbSB7b2wuVGlsZVVybEZ1bmN0aW9uVHlwZX0gdGlsZVVybEZ1bmN0aW9uIFRpbGUgVVJMIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtzdHJpbmc9fSBvcHRfa2V5IE9wdGlvbmFsIG5ldyB0aWxlIGtleSBmb3IgdGhlIHNvdXJjZS5cbiAqIEBhcGlcbiAqL1xuX29sX3NvdXJjZV9VcmxUaWxlXy5wcm90b3R5cGUuc2V0VGlsZVVybEZ1bmN0aW9uID0gZnVuY3Rpb24odGlsZVVybEZ1bmN0aW9uLCBvcHRfa2V5KSB7XG4gIHRoaXMudGlsZVVybEZ1bmN0aW9uID0gdGlsZVVybEZ1bmN0aW9uO1xuICB0aGlzLnRpbGVDYWNoZS5wcnVuZUV4Y2VwdE5ld2VzdFooKTtcbiAgaWYgKHR5cGVvZiBvcHRfa2V5ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuc2V0S2V5KG9wdF9rZXkpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuY2hhbmdlZCgpO1xuICB9XG59O1xuXG5cbi8qKlxuICogU2V0IHRoZSBVUkwgdG8gdXNlIGZvciByZXF1ZXN0cy5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVVJMLlxuICogQGFwaVxuICovXG5fb2xfc291cmNlX1VybFRpbGVfLnByb3RvdHlwZS5zZXRVcmwgPSBmdW5jdGlvbih1cmwpIHtcbiAgdmFyIHVybHMgPSB0aGlzLnVybHMgPSBfb2xfVGlsZVVybEZ1bmN0aW9uXy5leHBhbmRVcmwodXJsKTtcbiAgdGhpcy5zZXRUaWxlVXJsRnVuY3Rpb24odGhpcy5maXhlZFRpbGVVcmxGdW5jdGlvbiA/XG4gICAgdGhpcy5maXhlZFRpbGVVcmxGdW5jdGlvbi5iaW5kKHRoaXMpIDpcbiAgICBfb2xfVGlsZVVybEZ1bmN0aW9uXy5jcmVhdGVGcm9tVGVtcGxhdGVzKHVybHMsIHRoaXMudGlsZUdyaWQpLCB1cmwpO1xufTtcblxuXG4vKipcbiAqIFNldCB0aGUgVVJMcyB0byB1c2UgZm9yIHJlcXVlc3RzLlxuICogQHBhcmFtIHtBcnJheS48c3RyaW5nPn0gdXJscyBVUkxzLlxuICogQGFwaVxuICovXG5fb2xfc291cmNlX1VybFRpbGVfLnByb3RvdHlwZS5zZXRVcmxzID0gZnVuY3Rpb24odXJscykge1xuICB0aGlzLnVybHMgPSB1cmxzO1xuICB2YXIga2V5ID0gdXJscy5qb2luKCdcXG4nKTtcbiAgdGhpcy5zZXRUaWxlVXJsRnVuY3Rpb24odGhpcy5maXhlZFRpbGVVcmxGdW5jdGlvbiA/XG4gICAgdGhpcy5maXhlZFRpbGVVcmxGdW5jdGlvbi5iaW5kKHRoaXMpIDpcbiAgICBfb2xfVGlsZVVybEZ1bmN0aW9uXy5jcmVhdGVGcm9tVGVtcGxhdGVzKHVybHMsIHRoaXMudGlsZUdyaWQpLCBrZXkpO1xufTtcblxuXG4vKipcbiAqIEBpbmhlcml0RG9jXG4gKi9cbl9vbF9zb3VyY2VfVXJsVGlsZV8ucHJvdG90eXBlLnVzZVRpbGUgPSBmdW5jdGlvbih6LCB4LCB5KSB7XG4gIHZhciB0aWxlQ29vcmRLZXkgPSBfb2xfdGlsZWNvb3JkXy5nZXRLZXlaWFkoeiwgeCwgeSk7XG4gIGlmICh0aGlzLnRpbGVDYWNoZS5jb250YWluc0tleSh0aWxlQ29vcmRLZXkpKSB7XG4gICAgdGhpcy50aWxlQ2FjaGUuZ2V0KHRpbGVDb29yZEtleSk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBfb2xfc291cmNlX1VybFRpbGVfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvc291cmNlL3VybHRpbGUuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfb2xfYXNzZXJ0c18gZnJvbSAnLi9hc3NlcnRzLmpzJztcbmltcG9ydCBfb2xfbWF0aF8gZnJvbSAnLi9tYXRoLmpzJztcbmltcG9ydCBfb2xfdGlsZWNvb3JkXyBmcm9tICcuL3RpbGVjb29yZC5qcyc7XG52YXIgX29sX1RpbGVVcmxGdW5jdGlvbl8gPSB7fTtcblxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZSBUZW1wbGF0ZS5cbiAqIEBwYXJhbSB7b2wudGlsZWdyaWQuVGlsZUdyaWR9IHRpbGVHcmlkIFRpbGUgZ3JpZC5cbiAqIEByZXR1cm4ge29sLlRpbGVVcmxGdW5jdGlvblR5cGV9IFRpbGUgVVJMIGZ1bmN0aW9uLlxuICovXG5fb2xfVGlsZVVybEZ1bmN0aW9uXy5jcmVhdGVGcm9tVGVtcGxhdGUgPSBmdW5jdGlvbih0ZW1wbGF0ZSwgdGlsZUdyaWQpIHtcbiAgdmFyIHpSZWdFeCA9IC9cXHt6XFx9L2c7XG4gIHZhciB4UmVnRXggPSAvXFx7eFxcfS9nO1xuICB2YXIgeVJlZ0V4ID0gL1xce3lcXH0vZztcbiAgdmFyIGRhc2hZUmVnRXggPSAvXFx7LXlcXH0vZztcbiAgcmV0dXJuIChcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge29sLlRpbGVDb29yZH0gdGlsZUNvb3JkIFRpbGUgQ29vcmRpbmF0ZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGl4ZWxSYXRpbyBQaXhlbCByYXRpby5cbiAgICAgKiBAcGFyYW0ge29sLnByb2ouUHJvamVjdGlvbn0gcHJvamVjdGlvbiBQcm9qZWN0aW9uLlxuICAgICAqIEByZXR1cm4ge3N0cmluZ3x1bmRlZmluZWR9IFRpbGUgVVJMLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uKHRpbGVDb29yZCwgcGl4ZWxSYXRpbywgcHJvamVjdGlvbikge1xuICAgICAgaWYgKCF0aWxlQ29vcmQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZS5yZXBsYWNlKHpSZWdFeCwgdGlsZUNvb3JkWzBdLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAucmVwbGFjZSh4UmVnRXgsIHRpbGVDb29yZFsxXS50b1N0cmluZygpKVxuICAgICAgICAgICAgLnJlcGxhY2UoeVJlZ0V4LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdmFyIHkgPSAtdGlsZUNvb3JkWzJdIC0gMTtcbiAgICAgICAgICAgICAgcmV0dXJuIHkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAucmVwbGFjZShkYXNoWVJlZ0V4LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdmFyIHogPSB0aWxlQ29vcmRbMF07XG4gICAgICAgICAgICAgIHZhciByYW5nZSA9IHRpbGVHcmlkLmdldEZ1bGxUaWxlUmFuZ2Uoeik7XG4gICAgICAgICAgICAgIF9vbF9hc3NlcnRzXy5hc3NlcnQocmFuZ2UsIDU1KTsgLy8gVGhlIHsteX0gcGxhY2Vob2xkZXIgcmVxdWlyZXMgYSB0aWxlIGdyaWQgd2l0aCBleHRlbnRcbiAgICAgICAgICAgICAgdmFyIHkgPSByYW5nZS5nZXRIZWlnaHQoKSArIHRpbGVDb29yZFsyXTtcbiAgICAgICAgICAgICAgcmV0dXJuIHkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5LjxzdHJpbmc+fSB0ZW1wbGF0ZXMgVGVtcGxhdGVzLlxuICogQHBhcmFtIHtvbC50aWxlZ3JpZC5UaWxlR3JpZH0gdGlsZUdyaWQgVGlsZSBncmlkLlxuICogQHJldHVybiB7b2wuVGlsZVVybEZ1bmN0aW9uVHlwZX0gVGlsZSBVUkwgZnVuY3Rpb24uXG4gKi9cbl9vbF9UaWxlVXJsRnVuY3Rpb25fLmNyZWF0ZUZyb21UZW1wbGF0ZXMgPSBmdW5jdGlvbih0ZW1wbGF0ZXMsIHRpbGVHcmlkKSB7XG4gIHZhciBsZW4gPSB0ZW1wbGF0ZXMubGVuZ3RoO1xuICB2YXIgdGlsZVVybEZ1bmN0aW9ucyA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdGlsZVVybEZ1bmN0aW9uc1tpXSA9IF9vbF9UaWxlVXJsRnVuY3Rpb25fLmNyZWF0ZUZyb21UZW1wbGF0ZShcbiAgICAgICAgdGVtcGxhdGVzW2ldLCB0aWxlR3JpZCk7XG4gIH1cbiAgcmV0dXJuIF9vbF9UaWxlVXJsRnVuY3Rpb25fLmNyZWF0ZUZyb21UaWxlVXJsRnVuY3Rpb25zKHRpbGVVcmxGdW5jdGlvbnMpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXkuPG9sLlRpbGVVcmxGdW5jdGlvblR5cGU+fSB0aWxlVXJsRnVuY3Rpb25zIFRpbGUgVVJMIEZ1bmN0aW9ucy5cbiAqIEByZXR1cm4ge29sLlRpbGVVcmxGdW5jdGlvblR5cGV9IFRpbGUgVVJMIGZ1bmN0aW9uLlxuICovXG5fb2xfVGlsZVVybEZ1bmN0aW9uXy5jcmVhdGVGcm9tVGlsZVVybEZ1bmN0aW9ucyA9IGZ1bmN0aW9uKHRpbGVVcmxGdW5jdGlvbnMpIHtcbiAgaWYgKHRpbGVVcmxGdW5jdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIHRpbGVVcmxGdW5jdGlvbnNbMF07XG4gIH1cbiAgcmV0dXJuIChcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge29sLlRpbGVDb29yZH0gdGlsZUNvb3JkIFRpbGUgQ29vcmRpbmF0ZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGl4ZWxSYXRpbyBQaXhlbCByYXRpby5cbiAgICAgKiBAcGFyYW0ge29sLnByb2ouUHJvamVjdGlvbn0gcHJvamVjdGlvbiBQcm9qZWN0aW9uLlxuICAgICAqIEByZXR1cm4ge3N0cmluZ3x1bmRlZmluZWR9IFRpbGUgVVJMLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uKHRpbGVDb29yZCwgcGl4ZWxSYXRpbywgcHJvamVjdGlvbikge1xuICAgICAgaWYgKCF0aWxlQ29vcmQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBoID0gX29sX3RpbGVjb29yZF8uaGFzaCh0aWxlQ29vcmQpO1xuICAgICAgICB2YXIgaW5kZXggPSBfb2xfbWF0aF8ubW9kdWxvKGgsIHRpbGVVcmxGdW5jdGlvbnMubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHRpbGVVcmxGdW5jdGlvbnNbaW5kZXhdKHRpbGVDb29yZCwgcGl4ZWxSYXRpbywgcHJvamVjdGlvbik7XG4gICAgICB9XG4gICAgfVxuICApO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wuVGlsZUNvb3JkfSB0aWxlQ29vcmQgVGlsZSBjb29yZGluYXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IHBpeGVsUmF0aW8gUGl4ZWwgcmF0aW8uXG4gKiBAcGFyYW0ge29sLnByb2ouUHJvamVjdGlvbn0gcHJvamVjdGlvbiBQcm9qZWN0aW9uLlxuICogQHJldHVybiB7c3RyaW5nfHVuZGVmaW5lZH0gVGlsZSBVUkwuXG4gKi9cbl9vbF9UaWxlVXJsRnVuY3Rpb25fLm51bGxUaWxlVXJsRnVuY3Rpb24gPSBmdW5jdGlvbih0aWxlQ29vcmQsIHBpeGVsUmF0aW8sIHByb2plY3Rpb24pIHtcbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFVSTC5cbiAqIEByZXR1cm4ge0FycmF5LjxzdHJpbmc+fSBBcnJheSBvZiB1cmxzLlxuICovXG5fb2xfVGlsZVVybEZ1bmN0aW9uXy5leHBhbmRVcmwgPSBmdW5jdGlvbih1cmwpIHtcbiAgdmFyIHVybHMgPSBbXTtcbiAgdmFyIG1hdGNoID0gL1xceyhbYS16XSktKFthLXpdKVxcfS8uZXhlYyh1cmwpO1xuICBpZiAobWF0Y2gpIHtcbiAgICAvLyBjaGFyIHJhbmdlXG4gICAgdmFyIHN0YXJ0Q2hhckNvZGUgPSBtYXRjaFsxXS5jaGFyQ29kZUF0KDApO1xuICAgIHZhciBzdG9wQ2hhckNvZGUgPSBtYXRjaFsyXS5jaGFyQ29kZUF0KDApO1xuICAgIHZhciBjaGFyQ29kZTtcbiAgICBmb3IgKGNoYXJDb2RlID0gc3RhcnRDaGFyQ29kZTsgY2hhckNvZGUgPD0gc3RvcENoYXJDb2RlOyArK2NoYXJDb2RlKSB7XG4gICAgICB1cmxzLnB1c2godXJsLnJlcGxhY2UobWF0Y2hbMF0sIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhckNvZGUpKSk7XG4gICAgfVxuICAgIHJldHVybiB1cmxzO1xuICB9XG4gIG1hdGNoID0gbWF0Y2ggPSAvXFx7KFxcZCspLShcXGQrKVxcfS8uZXhlYyh1cmwpO1xuICBpZiAobWF0Y2gpIHtcbiAgICAvLyBudW1iZXIgcmFuZ2VcbiAgICB2YXIgc3RvcCA9IHBhcnNlSW50KG1hdGNoWzJdLCAxMCk7XG4gICAgZm9yICh2YXIgaSA9IHBhcnNlSW50KG1hdGNoWzFdLCAxMCk7IGkgPD0gc3RvcDsgaSsrKSB7XG4gICAgICB1cmxzLnB1c2godXJsLnJlcGxhY2UobWF0Y2hbMF0sIGkudG9TdHJpbmcoKSkpO1xuICAgIH1cbiAgICByZXR1cm4gdXJscztcbiAgfVxuICB1cmxzLnB1c2godXJsKTtcbiAgcmV0dXJuIHVybHM7XG59O1xuZXhwb3J0IGRlZmF1bHQgX29sX1RpbGVVcmxGdW5jdGlvbl87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC90aWxldXJsZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfb2xfIGZyb20gJy4uL2luZGV4LmpzJztcbmltcG9ydCBfb2xfVGlsZUNhY2hlXyBmcm9tICcuLi90aWxlY2FjaGUuanMnO1xuaW1wb3J0IF9vbF9UaWxlU3RhdGVfIGZyb20gJy4uL3RpbGVzdGF0ZS5qcyc7XG5pbXBvcnQgX29sX2V2ZW50c19FdmVudF8gZnJvbSAnLi4vZXZlbnRzL2V2ZW50LmpzJztcbmltcG9ydCBfb2xfcHJval8gZnJvbSAnLi4vcHJvai5qcyc7XG5pbXBvcnQgX29sX3NpemVfIGZyb20gJy4uL3NpemUuanMnO1xuaW1wb3J0IF9vbF9zb3VyY2VfU291cmNlXyBmcm9tICcuLi9zb3VyY2Uvc291cmNlLmpzJztcbmltcG9ydCBfb2xfdGlsZWNvb3JkXyBmcm9tICcuLi90aWxlY29vcmQuanMnO1xuaW1wb3J0IF9vbF90aWxlZ3JpZF8gZnJvbSAnLi4vdGlsZWdyaWQuanMnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIEFic3RyYWN0IGJhc2UgY2xhc3M7IG5vcm1hbGx5IG9ubHkgdXNlZCBmb3IgY3JlYXRpbmcgc3ViY2xhc3NlcyBhbmQgbm90XG4gKiBpbnN0YW50aWF0ZWQgaW4gYXBwcy5cbiAqIEJhc2UgY2xhc3MgZm9yIHNvdXJjZXMgcHJvdmlkaW5nIGltYWdlcyBkaXZpZGVkIGludG8gYSB0aWxlIGdyaWQuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAYWJzdHJhY3RcbiAqIEBleHRlbmRzIHtvbC5zb3VyY2UuU291cmNlfVxuICogQHBhcmFtIHtvbC5Tb3VyY2VUaWxlT3B0aW9uc30gb3B0aW9ucyBUaWxlIHNvdXJjZSBvcHRpb25zLlxuICogQGFwaVxuICovXG52YXIgX29sX3NvdXJjZV9UaWxlXyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblxuICBfb2xfc291cmNlX1NvdXJjZV8uY2FsbCh0aGlzLCB7XG4gICAgYXR0cmlidXRpb25zOiBvcHRpb25zLmF0dHJpYnV0aW9ucyxcbiAgICBleHRlbnQ6IG9wdGlvbnMuZXh0ZW50LFxuICAgIGxvZ286IG9wdGlvbnMubG9nbyxcbiAgICBwcm9qZWN0aW9uOiBvcHRpb25zLnByb2plY3Rpb24sXG4gICAgc3RhdGU6IG9wdGlvbnMuc3RhdGUsXG4gICAgd3JhcFg6IG9wdGlvbnMud3JhcFhcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgdGhpcy5vcGFxdWVfID0gb3B0aW9ucy5vcGFxdWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMub3BhcXVlIDogZmFsc2U7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICB0aGlzLnRpbGVQaXhlbFJhdGlvXyA9IG9wdGlvbnMudGlsZVBpeGVsUmF0aW8gIT09IHVuZGVmaW5lZCA/XG4gICAgb3B0aW9ucy50aWxlUGl4ZWxSYXRpbyA6IDE7XG5cbiAgLyoqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHR5cGUge29sLnRpbGVncmlkLlRpbGVHcmlkfVxuICAgKi9cbiAgdGhpcy50aWxlR3JpZCA9IG9wdGlvbnMudGlsZUdyaWQgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMudGlsZUdyaWQgOiBudWxsO1xuXG4gIC8qKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEB0eXBlIHtvbC5UaWxlQ2FjaGV9XG4gICAqL1xuICB0aGlzLnRpbGVDYWNoZSA9IG5ldyBfb2xfVGlsZUNhY2hlXyhvcHRpb25zLmNhY2hlU2l6ZSk7XG5cbiAgLyoqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHR5cGUge29sLlNpemV9XG4gICAqL1xuICB0aGlzLnRtcFNpemUgPSBbMCwgMF07XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICB0aGlzLmtleV8gPSAnJztcblxuICAvKipcbiAgICogQHByb3RlY3RlZFxuICAgKiBAdHlwZSB7b2x4LlRpbGVPcHRpb25zfVxuICAgKi9cbiAgdGhpcy50aWxlT3B0aW9ucyA9IHt0cmFuc2l0aW9uOiBvcHRpb25zLnRyYW5zaXRpb259O1xuXG59O1xuXG5fb2xfLmluaGVyaXRzKF9vbF9zb3VyY2VfVGlsZV8sIF9vbF9zb3VyY2VfU291cmNlXyk7XG5cblxuLyoqXG4gKiBAcmV0dXJuIHtib29sZWFufSBDYW4gZXhwaXJlIGNhY2hlLlxuICovXG5fb2xfc291cmNlX1RpbGVfLnByb3RvdHlwZS5jYW5FeHBpcmVDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy50aWxlQ2FjaGUuY2FuRXhwaXJlQ2FjaGUoKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge29sLnByb2ouUHJvamVjdGlvbn0gcHJvamVjdGlvbiBQcm9qZWN0aW9uLlxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgb2wuVGlsZVJhbmdlPn0gdXNlZFRpbGVzIFVzZWQgdGlsZXMuXG4gKi9cbl9vbF9zb3VyY2VfVGlsZV8ucHJvdG90eXBlLmV4cGlyZUNhY2hlID0gZnVuY3Rpb24ocHJvamVjdGlvbiwgdXNlZFRpbGVzKSB7XG4gIHZhciB0aWxlQ2FjaGUgPSB0aGlzLmdldFRpbGVDYWNoZUZvclByb2plY3Rpb24ocHJvamVjdGlvbik7XG4gIGlmICh0aWxlQ2FjaGUpIHtcbiAgICB0aWxlQ2FjaGUuZXhwaXJlQ2FjaGUodXNlZFRpbGVzKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wucHJvai5Qcm9qZWN0aW9ufSBwcm9qZWN0aW9uIFByb2plY3Rpb24uXG4gKiBAcGFyYW0ge251bWJlcn0geiBab29tIGxldmVsLlxuICogQHBhcmFtIHtvbC5UaWxlUmFuZ2V9IHRpbGVSYW5nZSBUaWxlIHJhbmdlLlxuICogQHBhcmFtIHtmdW5jdGlvbihvbC5UaWxlKTooYm9vbGVhbnx1bmRlZmluZWQpfSBjYWxsYmFjayBDYWxsZWQgd2l0aCBlYWNoXG4gKiAgICAgbG9hZGVkIHRpbGUuICBJZiB0aGUgY2FsbGJhY2sgcmV0dXJucyBgZmFsc2VgLCB0aGUgdGlsZSB3aWxsIG5vdCBiZVxuICogICAgIGNvbnNpZGVyZWQgbG9hZGVkLlxuICogQHJldHVybiB7Ym9vbGVhbn0gVGhlIHRpbGUgcmFuZ2UgaXMgZnVsbHkgY292ZXJlZCB3aXRoIGxvYWRlZCB0aWxlcy5cbiAqL1xuX29sX3NvdXJjZV9UaWxlXy5wcm90b3R5cGUuZm9yRWFjaExvYWRlZFRpbGUgPSBmdW5jdGlvbihwcm9qZWN0aW9uLCB6LCB0aWxlUmFuZ2UsIGNhbGxiYWNrKSB7XG4gIHZhciB0aWxlQ2FjaGUgPSB0aGlzLmdldFRpbGVDYWNoZUZvclByb2plY3Rpb24ocHJvamVjdGlvbik7XG4gIGlmICghdGlsZUNhY2hlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGNvdmVyZWQgPSB0cnVlO1xuICB2YXIgdGlsZSwgdGlsZUNvb3JkS2V5LCBsb2FkZWQ7XG4gIGZvciAodmFyIHggPSB0aWxlUmFuZ2UubWluWDsgeCA8PSB0aWxlUmFuZ2UubWF4WDsgKyt4KSB7XG4gICAgZm9yICh2YXIgeSA9IHRpbGVSYW5nZS5taW5ZOyB5IDw9IHRpbGVSYW5nZS5tYXhZOyArK3kpIHtcbiAgICAgIHRpbGVDb29yZEtleSA9IF9vbF90aWxlY29vcmRfLmdldEtleVpYWSh6LCB4LCB5KTtcbiAgICAgIGxvYWRlZCA9IGZhbHNlO1xuICAgICAgaWYgKHRpbGVDYWNoZS5jb250YWluc0tleSh0aWxlQ29vcmRLZXkpKSB7XG4gICAgICAgIHRpbGUgPSAvKiogQHR5cGUgeyFvbC5UaWxlfSAqLyAodGlsZUNhY2hlLmdldCh0aWxlQ29vcmRLZXkpKTtcbiAgICAgICAgbG9hZGVkID0gdGlsZS5nZXRTdGF0ZSgpID09PSBfb2xfVGlsZVN0YXRlXy5MT0FERUQ7XG4gICAgICAgIGlmIChsb2FkZWQpIHtcbiAgICAgICAgICBsb2FkZWQgPSAoY2FsbGJhY2sodGlsZSkgIT09IGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFsb2FkZWQpIHtcbiAgICAgICAgY292ZXJlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY292ZXJlZDtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge29sLnByb2ouUHJvamVjdGlvbn0gcHJvamVjdGlvbiBQcm9qZWN0aW9uLlxuICogQHJldHVybiB7bnVtYmVyfSBHdXR0ZXIuXG4gKi9cbl9vbF9zb3VyY2VfVGlsZV8ucHJvdG90eXBlLmdldEd1dHRlciA9IGZ1bmN0aW9uKHByb2plY3Rpb24pIHtcbiAgcmV0dXJuIDA7XG59O1xuXG5cbi8qKlxuICogUmV0dXJuIHRoZSBrZXkgdG8gYmUgdXNlZCBmb3IgYWxsIHRpbGVzIGluIHRoZSBzb3VyY2UuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBrZXkgZm9yIGFsbCB0aWxlcy5cbiAqIEBwcm90ZWN0ZWRcbiAqL1xuX29sX3NvdXJjZV9UaWxlXy5wcm90b3R5cGUuZ2V0S2V5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmtleV87XG59O1xuXG5cbi8qKlxuICogU2V0IHRoZSB2YWx1ZSB0byBiZSB1c2VkIGFzIHRoZSBrZXkgZm9yIGFsbCB0aWxlcyBpbiB0aGUgc291cmNlLlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IGZvciB0aWxlcy5cbiAqIEBwcm90ZWN0ZWRcbiAqL1xuX29sX3NvdXJjZV9UaWxlXy5wcm90b3R5cGUuc2V0S2V5ID0gZnVuY3Rpb24oa2V5KSB7XG4gIGlmICh0aGlzLmtleV8gIT09IGtleSkge1xuICAgIHRoaXMua2V5XyA9IGtleTtcbiAgICB0aGlzLmNoYW5nZWQoKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wucHJvai5Qcm9qZWN0aW9ufSBwcm9qZWN0aW9uIFByb2plY3Rpb24uXG4gKiBAcmV0dXJuIHtib29sZWFufSBPcGFxdWUuXG4gKi9cbl9vbF9zb3VyY2VfVGlsZV8ucHJvdG90eXBlLmdldE9wYXF1ZSA9IGZ1bmN0aW9uKHByb2plY3Rpb24pIHtcbiAgcmV0dXJuIHRoaXMub3BhcXVlXztcbn07XG5cblxuLyoqXG4gKiBAaW5oZXJpdERvY1xuICovXG5fb2xfc291cmNlX1RpbGVfLnByb3RvdHlwZS5nZXRSZXNvbHV0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy50aWxlR3JpZC5nZXRSZXNvbHV0aW9ucygpO1xufTtcblxuXG4vKipcbiAqIEBhYnN0cmFjdFxuICogQHBhcmFtIHtudW1iZXJ9IHogVGlsZSBjb29yZGluYXRlIHouXG4gKiBAcGFyYW0ge251bWJlcn0geCBUaWxlIGNvb3JkaW5hdGUgeC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB5IFRpbGUgY29vcmRpbmF0ZSB5LlxuICogQHBhcmFtIHtudW1iZXJ9IHBpeGVsUmF0aW8gUGl4ZWwgcmF0aW8uXG4gKiBAcGFyYW0ge29sLnByb2ouUHJvamVjdGlvbn0gcHJvamVjdGlvbiBQcm9qZWN0aW9uLlxuICogQHJldHVybiB7IW9sLlRpbGV9IFRpbGUuXG4gKi9cbl9vbF9zb3VyY2VfVGlsZV8ucHJvdG90eXBlLmdldFRpbGUgPSBmdW5jdGlvbih6LCB4LCB5LCBwaXhlbFJhdGlvLCBwcm9qZWN0aW9uKSB7fTtcblxuXG4vKipcbiAqIFJldHVybiB0aGUgdGlsZSBncmlkIG9mIHRoZSB0aWxlIHNvdXJjZS5cbiAqIEByZXR1cm4ge29sLnRpbGVncmlkLlRpbGVHcmlkfSBUaWxlIGdyaWQuXG4gKiBAYXBpXG4gKi9cbl9vbF9zb3VyY2VfVGlsZV8ucHJvdG90eXBlLmdldFRpbGVHcmlkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnRpbGVHcmlkO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wucHJvai5Qcm9qZWN0aW9ufSBwcm9qZWN0aW9uIFByb2plY3Rpb24uXG4gKiBAcmV0dXJuIHshb2wudGlsZWdyaWQuVGlsZUdyaWR9IFRpbGUgZ3JpZC5cbiAqL1xuX29sX3NvdXJjZV9UaWxlXy5wcm90b3R5cGUuZ2V0VGlsZUdyaWRGb3JQcm9qZWN0aW9uID0gZnVuY3Rpb24ocHJvamVjdGlvbikge1xuICBpZiAoIXRoaXMudGlsZUdyaWQpIHtcbiAgICByZXR1cm4gX29sX3RpbGVncmlkXy5nZXRGb3JQcm9qZWN0aW9uKHByb2plY3Rpb24pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLnRpbGVHcmlkO1xuICB9XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtvbC5wcm9qLlByb2plY3Rpb259IHByb2plY3Rpb24gUHJvamVjdGlvbi5cbiAqIEByZXR1cm4ge29sLlRpbGVDYWNoZX0gVGlsZSBjYWNoZS5cbiAqIEBwcm90ZWN0ZWRcbiAqL1xuX29sX3NvdXJjZV9UaWxlXy5wcm90b3R5cGUuZ2V0VGlsZUNhY2hlRm9yUHJvamVjdGlvbiA9IGZ1bmN0aW9uKHByb2plY3Rpb24pIHtcbiAgdmFyIHRoaXNQcm9qID0gdGhpcy5nZXRQcm9qZWN0aW9uKCk7XG4gIGlmICh0aGlzUHJvaiAmJiAhX29sX3Byb2pfLmVxdWl2YWxlbnQodGhpc1Byb2osIHByb2plY3Rpb24pKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRoaXMudGlsZUNhY2hlO1xuICB9XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSB0aWxlIHBpeGVsIHJhdGlvIGZvciB0aGlzIHNvdXJjZS4gU3ViY2xhc3NlcyBtYXkgb3ZlcnJpZGUgdGhpc1xuICogbWV0aG9kLCB3aGljaCBpcyBtZWFudCB0byByZXR1cm4gYSBzdXBwb3J0ZWQgcGl4ZWwgcmF0aW8gdGhhdCBtYXRjaGVzIHRoZVxuICogcHJvdmlkZWQgYHBpeGVsUmF0aW9gIGFzIGNsb3NlIGFzIHBvc3NpYmxlLlxuICogQHBhcmFtIHtudW1iZXJ9IHBpeGVsUmF0aW8gUGl4ZWwgcmF0aW8uXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRpbGUgcGl4ZWwgcmF0aW8uXG4gKi9cbl9vbF9zb3VyY2VfVGlsZV8ucHJvdG90eXBlLmdldFRpbGVQaXhlbFJhdGlvID0gZnVuY3Rpb24ocGl4ZWxSYXRpbykge1xuICByZXR1cm4gdGhpcy50aWxlUGl4ZWxSYXRpb187XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHogWi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBwaXhlbFJhdGlvIFBpeGVsIHJhdGlvLlxuICogQHBhcmFtIHtvbC5wcm9qLlByb2plY3Rpb259IHByb2plY3Rpb24gUHJvamVjdGlvbi5cbiAqIEByZXR1cm4ge29sLlNpemV9IFRpbGUgc2l6ZS5cbiAqL1xuX29sX3NvdXJjZV9UaWxlXy5wcm90b3R5cGUuZ2V0VGlsZVBpeGVsU2l6ZSA9IGZ1bmN0aW9uKHosIHBpeGVsUmF0aW8sIHByb2plY3Rpb24pIHtcbiAgdmFyIHRpbGVHcmlkID0gdGhpcy5nZXRUaWxlR3JpZEZvclByb2plY3Rpb24ocHJvamVjdGlvbik7XG4gIHZhciB0aWxlUGl4ZWxSYXRpbyA9IHRoaXMuZ2V0VGlsZVBpeGVsUmF0aW8ocGl4ZWxSYXRpbyk7XG4gIHZhciB0aWxlU2l6ZSA9IF9vbF9zaXplXy50b1NpemUodGlsZUdyaWQuZ2V0VGlsZVNpemUoeiksIHRoaXMudG1wU2l6ZSk7XG4gIGlmICh0aWxlUGl4ZWxSYXRpbyA9PSAxKSB7XG4gICAgcmV0dXJuIHRpbGVTaXplO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBfb2xfc2l6ZV8uc2NhbGUodGlsZVNpemUsIHRpbGVQaXhlbFJhdGlvLCB0aGlzLnRtcFNpemUpO1xuICB9XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyBhIHRpbGUgY29vcmRpbmF0ZSB3cmFwcGVkIGFyb3VuZCB0aGUgeC1heGlzLiBXaGVuIHRoZSB0aWxlIGNvb3JkaW5hdGVcbiAqIGlzIG91dHNpZGUgdGhlIHJlc29sdXRpb24gYW5kIGV4dGVudCByYW5nZSBvZiB0aGUgdGlsZSBncmlkLCBgbnVsbGAgd2lsbCBiZVxuICogcmV0dXJuZWQuXG4gKiBAcGFyYW0ge29sLlRpbGVDb29yZH0gdGlsZUNvb3JkIFRpbGUgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7b2wucHJvai5Qcm9qZWN0aW9uPX0gb3B0X3Byb2plY3Rpb24gUHJvamVjdGlvbi5cbiAqIEByZXR1cm4ge29sLlRpbGVDb29yZH0gVGlsZSBjb29yZGluYXRlIHRvIGJlIHBhc3NlZCB0byB0aGUgdGlsZVVybEZ1bmN0aW9uIG9yXG4gKiAgICAgbnVsbCBpZiBubyB0aWxlIFVSTCBzaG91bGQgYmUgY3JlYXRlZCBmb3IgdGhlIHBhc3NlZCBgdGlsZUNvb3JkYC5cbiAqL1xuX29sX3NvdXJjZV9UaWxlXy5wcm90b3R5cGUuZ2V0VGlsZUNvb3JkRm9yVGlsZVVybEZ1bmN0aW9uID0gZnVuY3Rpb24odGlsZUNvb3JkLCBvcHRfcHJvamVjdGlvbikge1xuICB2YXIgcHJvamVjdGlvbiA9IG9wdF9wcm9qZWN0aW9uICE9PSB1bmRlZmluZWQgP1xuICAgIG9wdF9wcm9qZWN0aW9uIDogdGhpcy5nZXRQcm9qZWN0aW9uKCk7XG4gIHZhciB0aWxlR3JpZCA9IHRoaXMuZ2V0VGlsZUdyaWRGb3JQcm9qZWN0aW9uKHByb2plY3Rpb24pO1xuICBpZiAodGhpcy5nZXRXcmFwWCgpICYmIHByb2plY3Rpb24uaXNHbG9iYWwoKSkge1xuICAgIHRpbGVDb29yZCA9IF9vbF90aWxlZ3JpZF8ud3JhcFgodGlsZUdyaWQsIHRpbGVDb29yZCwgcHJvamVjdGlvbik7XG4gIH1cbiAgcmV0dXJuIF9vbF90aWxlY29vcmRfLndpdGhpbkV4dGVudEFuZFoodGlsZUNvb3JkLCB0aWxlR3JpZCkgPyB0aWxlQ29vcmQgOiBudWxsO1xufTtcblxuXG4vKipcbiAqIEBpbmhlcml0RG9jXG4gKi9cbl9vbF9zb3VyY2VfVGlsZV8ucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcbiAgdGhpcy50aWxlQ2FjaGUuY2xlYXIoKTtcbiAgdGhpcy5jaGFuZ2VkKCk7XG59O1xuXG5cbi8qKlxuICogTWFya3MgYSB0aWxlIGNvb3JkIGFzIGJlaW5nIHVzZWQsIHdpdGhvdXQgdHJpZ2dlcmluZyBhIGxvYWQuXG4gKiBAcGFyYW0ge251bWJlcn0geiBUaWxlIGNvb3JkaW5hdGUgei5cbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFRpbGUgY29vcmRpbmF0ZSB4LlxuICogQHBhcmFtIHtudW1iZXJ9IHkgVGlsZSBjb29yZGluYXRlIHkuXG4gKiBAcGFyYW0ge29sLnByb2ouUHJvamVjdGlvbn0gcHJvamVjdGlvbiBQcm9qZWN0aW9uLlxuICovXG5fb2xfc291cmNlX1RpbGVfLnByb3RvdHlwZS51c2VUaWxlID0gX29sXy5udWxsRnVuY3Rpb247XG5cblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBFdmVudHMgZW1pdHRlZCBieSB7QGxpbmsgb2wuc291cmNlLlRpbGV9IGluc3RhbmNlcyBhcmUgaW5zdGFuY2VzIG9mIHRoaXNcbiAqIHR5cGUuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAZXh0ZW5kcyB7b2wuZXZlbnRzLkV2ZW50fVxuICogQGltcGxlbWVudHMge29saS5zb3VyY2UuVGlsZS5FdmVudH1cbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFR5cGUuXG4gKiBAcGFyYW0ge29sLlRpbGV9IHRpbGUgVGhlIHRpbGUuXG4gKi9cbl9vbF9zb3VyY2VfVGlsZV8uRXZlbnQgPSBmdW5jdGlvbih0eXBlLCB0aWxlKSB7XG5cbiAgX29sX2V2ZW50c19FdmVudF8uY2FsbCh0aGlzLCB0eXBlKTtcblxuICAvKipcbiAgICogVGhlIHRpbGUgcmVsYXRlZCB0byB0aGUgZXZlbnQuXG4gICAqIEB0eXBlIHtvbC5UaWxlfVxuICAgKiBAYXBpXG4gICAqL1xuICB0aGlzLnRpbGUgPSB0aWxlO1xuXG59O1xuX29sXy5pbmhlcml0cyhfb2xfc291cmNlX1RpbGVfLkV2ZW50LCBfb2xfZXZlbnRzX0V2ZW50Xyk7XG5leHBvcnQgZGVmYXVsdCBfb2xfc291cmNlX1RpbGVfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvc291cmNlL3RpbGUuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGVudW0ge3N0cmluZ31cbiAqL1xudmFyIF9vbF9zb3VyY2VfVGlsZUV2ZW50VHlwZV8gPSB7XG5cbiAgLyoqXG4gICAqIFRyaWdnZXJlZCB3aGVuIGEgdGlsZSBzdGFydHMgbG9hZGluZy5cbiAgICogQGV2ZW50IG9sLnNvdXJjZS5UaWxlLkV2ZW50I3RpbGVsb2Fkc3RhcnRcbiAgICogQGFwaVxuICAgKi9cbiAgVElMRUxPQURTVEFSVDogJ3RpbGVsb2Fkc3RhcnQnLFxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyZWQgd2hlbiBhIHRpbGUgZmluaXNoZXMgbG9hZGluZywgZWl0aGVyIHdoZW4gaXRzIGRhdGEgaXMgbG9hZGVkLFxuICAgKiBvciB3aGVuIGxvYWRpbmcgd2FzIGFib3J0ZWQgYmVjYXVzZSB0aGUgdGlsZSBpcyBubyBsb25nZXIgbmVlZGVkLlxuICAgKiBAZXZlbnQgb2wuc291cmNlLlRpbGUuRXZlbnQjdGlsZWxvYWRlbmRcbiAgICogQGFwaVxuICAgKi9cbiAgVElMRUxPQURFTkQ6ICd0aWxlbG9hZGVuZCcsXG5cbiAgLyoqXG4gICAqIFRyaWdnZXJlZCBpZiB0aWxlIGxvYWRpbmcgcmVzdWx0cyBpbiBhbiBlcnJvci5cbiAgICogQGV2ZW50IG9sLnNvdXJjZS5UaWxlLkV2ZW50I3RpbGVsb2FkZXJyb3JcbiAgICogQGFwaVxuICAgKi9cbiAgVElMRUxPQURFUlJPUjogJ3RpbGVsb2FkZXJyb3InXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IF9vbF9zb3VyY2VfVGlsZUV2ZW50VHlwZV87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9zb3VyY2UvdGlsZWV2ZW50dHlwZS5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==