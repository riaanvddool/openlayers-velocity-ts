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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYThiNzA0OTgyMWY4MWZjNDEyMjEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9tYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9ldmVudHMvZXZlbnR0eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9leHRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL3Byb2ouanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvb2JqLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC90aWxlY29vcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL3RpbGVzdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvYXNzZXJ0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvcHJvai91bml0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvZXZlbnRzL2V2ZW50dGFyZ2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9ldmVudHMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL3RpbGVncmlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL2ltYWdlc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL3Byb2ovcHJvamVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvc2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2luZHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlY3Rvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FudmFzQm91bmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcEJvdW5kLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9sYXllcnR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL2xheWVyL2xheWVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9sYXllci9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvc291cmNlL3N0YXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9pbWFnZWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL2V4dGVudC9jb3JuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9wcm9qL3Byb2o0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9yZXByb2ouanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvcmVwcm9qL3RyaWFuZ3VsYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL3NvdXJjZS9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL3RpbGVyYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvc291cmNlL3h5ei5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvdGlsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvdGlsZWNhY2hlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmVsb2NpdHlsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29sb3JTY2FsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0aW9uQnVja2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9wYXJ0aWNsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL2xheWVyL2ltYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9vYmplY3RldmVudHR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL29ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL2Rpc3Bvc2FibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL2xheWVyL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL2Fzc2VydGlvbmVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9yZW5kZXIvZXZlbnR0eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9zb3VyY2UvaW1hZ2VjYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL2ltYWdlY2FudmFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9leHRlbnQvcmVsYXRpb25zaGlwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9zb3VyY2UvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL3NwaGVyZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvZ2VvbS9nZW9tZXRyeXR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL3Byb2ovZXBzZzM4NTcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL3Byb2ovZXBzZzQzMjYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL3Byb2ovcHJvamVjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL3Byb2ovdHJhbnNmb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvcmVwcm9qL2ltYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9hdHRyaWJ1dGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvdGlsZWdyaWQvdGlsZWdyaWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rlc3RsYXllci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvbGF5ZXIvdGlsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvbGF5ZXIvdGlsZXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9zb3VyY2Uvc3RhbWVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9zb3VyY2Uvb3NtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9zb3VyY2UvdGlsZWltYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9pbWFnZXRpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL2Vhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvc3RydWN0cy9scnVjYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2wvcmVwcm9qL3RpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL3NvdXJjZS91cmx0aWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC90aWxldXJsZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29sL3NvdXJjZS90aWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vbC9zb3VyY2UvdGlsZWV2ZW50dHlwZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsdUJBQXVCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLE9BQU87QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7O0FDdk1BO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNELHlDQUF5QztBQUN6QyxnQ0FBZ0M7QUFDaEMsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7O0FDdkdBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7OztBQzdEQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7OztBQzNDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7OztBQzFCQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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YTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLG1CQUFtQjtBQUM5QixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLG9CQUFvQjtBQUMvQixZQUFZLGFBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLG1CQUFtQjtBQUM5QjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0Esc0JBQXNCLHFCQUFxQjtBQUMzQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDMVVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSIsImZpbGUiOiJvcGVubGF5ZXJzLXZlbG9jaXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGE4YjcwNDk4MjFmODFmYzQxMjIxIiwidmFyIF9vbF8gPSB7fTtcblxuXG4vKipcbiAqIENvbnN0YW50cyBkZWZpbmVkIHdpdGggdGhlIGRlZmluZSB0YWcgY2Fubm90IGJlIGNoYW5nZWQgaW4gYXBwbGljYXRpb25cbiAqIGNvZGUsIGJ1dCBjYW4gYmUgc2V0IGF0IGNvbXBpbGUgdGltZS5cbiAqIFNvbWUgcmVkdWNlIHRoZSBzaXplIG9mIHRoZSBidWlsZCBpbiBhZHZhbmNlZCBjb21waWxlIG1vZGUuXG4gKi9cblxuXG4vKipcbiAqIEBkZWZpbmUge2Jvb2xlYW59IEFzc3VtZSB0b3VjaC4gIERlZmF1bHQgaXMgYGZhbHNlYC5cbiAqL1xuX29sXy5BU1NVTUVfVE9VQ0ggPSBmYWxzZTtcblxuXG4vKipcbiAqIFRPRE86IHJlbmFtZSB0aGlzIHRvIHNvbWV0aGluZyBoYXZpbmcgdG8gZG8gd2l0aCB0aWxlIGdyaWRzXG4gKiBzZWUgaHR0cHM6Ly9naXRodWIuY29tL29wZW5sYXllcnMvb3BlbmxheWVycy9pc3N1ZXMvMjA3NlxuICogQGRlZmluZSB7bnVtYmVyfSBEZWZhdWx0IG1heGltdW0gem9vbSBmb3IgZGVmYXVsdCB0aWxlIGdyaWRzLlxuICovXG5fb2xfLkRFRkFVTFRfTUFYX1pPT00gPSA0MjtcblxuXG4vKipcbiAqIEBkZWZpbmUge251bWJlcn0gRGVmYXVsdCBtaW4gem9vbSBsZXZlbCBmb3IgdGhlIG1hcCB2aWV3LiAgRGVmYXVsdCBpcyBgMGAuXG4gKi9cbl9vbF8uREVGQVVMVF9NSU5fWk9PTSA9IDA7XG5cblxuLyoqXG4gKiBAZGVmaW5lIHtudW1iZXJ9IERlZmF1bHQgbWF4aW11bSBhbGxvd2VkIHRocmVzaG9sZCAgKGluIHBpeGVscykgZm9yXG4gKiAgICAgcmVwcm9qZWN0aW9uIHRyaWFuZ3VsYXRpb24uIERlZmF1bHQgaXMgYDAuNWAuXG4gKi9cbl9vbF8uREVGQVVMVF9SQVNURVJfUkVQUk9KRUNUSU9OX0VSUk9SX1RIUkVTSE9MRCA9IDAuNTtcblxuXG4vKipcbiAqIEBkZWZpbmUge251bWJlcn0gRGVmYXVsdCB0aWxlIHNpemUuXG4gKi9cbl9vbF8uREVGQVVMVF9USUxFX1NJWkUgPSAyNTY7XG5cblxuLyoqXG4gKiBAZGVmaW5lIHtzdHJpbmd9IERlZmF1bHQgV01TIHZlcnNpb24uXG4gKi9cbl9vbF8uREVGQVVMVF9XTVNfVkVSU0lPTiA9ICcxLjMuMCc7XG5cblxuLyoqXG4gKiBAZGVmaW5lIHtib29sZWFufSBFbmFibGUgdGhlIENhbnZhcyByZW5kZXJlci4gIERlZmF1bHQgaXMgYHRydWVgLiBTZXR0aW5nXG4gKiAgICAgdGhpcyB0byBmYWxzZSBhdCBjb21waWxlIHRpbWUgaW4gYWR2YW5jZWQgbW9kZSByZW1vdmVzIGFsbCBjb2RlXG4gKiAgICAgc3VwcG9ydGluZyB0aGUgQ2FudmFzIHJlbmRlcmVyIGZyb20gdGhlIGJ1aWxkLlxuICovXG5fb2xfLkVOQUJMRV9DQU5WQVMgPSB0cnVlO1xuXG5cbi8qKlxuICogQGRlZmluZSB7Ym9vbGVhbn0gRW5hYmxlIGludGVncmF0aW9uIHdpdGggdGhlIFByb2o0anMgbGlicmFyeS4gIERlZmF1bHQgaXNcbiAqICAgICBgdHJ1ZWAuXG4gKi9cbl9vbF8uRU5BQkxFX1BST0o0SlMgPSB0cnVlO1xuXG5cbi8qKlxuICogQGRlZmluZSB7Ym9vbGVhbn0gRW5hYmxlIGF1dG9tYXRpYyByZXByb2plY3Rpb24gb2YgcmFzdGVyIHNvdXJjZXMuIERlZmF1bHQgaXNcbiAqICAgICBgdHJ1ZWAuXG4gKi9cbl9vbF8uRU5BQkxFX1JBU1RFUl9SRVBST0pFQ1RJT04gPSB0cnVlO1xuXG5cbi8qKlxuICogQGRlZmluZSB7Ym9vbGVhbn0gRW5hYmxlIHRoZSBXZWJHTCByZW5kZXJlci4gIERlZmF1bHQgaXMgYHRydWVgLiBTZXR0aW5nXG4gKiAgICAgdGhpcyB0byBmYWxzZSBhdCBjb21waWxlIHRpbWUgaW4gYWR2YW5jZWQgbW9kZSByZW1vdmVzIGFsbCBjb2RlXG4gKiAgICAgc3VwcG9ydGluZyB0aGUgV2ViR0wgcmVuZGVyZXIgZnJvbSB0aGUgYnVpbGQuXG4gKi9cbl9vbF8uRU5BQkxFX1dFQkdMID0gdHJ1ZTtcblxuXG4vKipcbiAqIEBkZWZpbmUge2Jvb2xlYW59IEluY2x1ZGUgZGVidWdnYWJsZSBzaGFkZXIgc291cmNlcy4gIERlZmF1bHQgaXMgYHRydWVgLlxuICogICAgIFRoaXMgc2hvdWxkIGJlIHNldCB0byBgZmFsc2VgIGZvciBwcm9kdWN0aW9uIGJ1aWxkcyAoaWYgYG9sLkVOQUJMRV9XRUJHTGBcbiAqICAgICBpcyBgdHJ1ZWApLlxuICovXG5fb2xfLkRFQlVHX1dFQkdMID0gdHJ1ZTtcblxuXG4vKipcbiAqIEBkZWZpbmUge251bWJlcn0gVGhlIHNpemUgaW4gcGl4ZWxzIG9mIHRoZSBmaXJzdCBhdGxhcyBpbWFnZS4gRGVmYXVsdCBpc1xuICogYDI1NmAuXG4gKi9cbl9vbF8uSU5JVElBTF9BVExBU19TSVpFID0gMjU2O1xuXG5cbi8qKlxuICogQGRlZmluZSB7bnVtYmVyfSBUaGUgbWF4aW11bSBzaXplIGluIHBpeGVscyBvZiBhdGxhcyBpbWFnZXMuIERlZmF1bHQgaXNcbiAqIGAtMWAsIG1lYW5pbmcgaXQgaXMgbm90IHVzZWQgKGFuZCBgb2wuV0VCR0xfTUFYX1RFWFRVUkVfU0laRWAgaXNcbiAqIHVzZWQgaW5zdGVhZCkuXG4gKi9cbl9vbF8uTUFYX0FUTEFTX1NJWkUgPSAtMTtcblxuXG4vKipcbiAqIEBkZWZpbmUge251bWJlcn0gTWF4aW11bSBtb3VzZSB3aGVlbCBkZWx0YS5cbiAqL1xuX29sXy5NT1VTRVdIRUVMWk9PTV9NQVhERUxUQSA9IDE7XG5cblxuLyoqXG4gKiBAZGVmaW5lIHtudW1iZXJ9IE1heGltdW0gd2lkdGggYW5kL29yIGhlaWdodCBleHRlbnQgcmF0aW8gdGhhdCBkZXRlcm1pbmVzXG4gKiB3aGVuIHRoZSBvdmVydmlldyBtYXAgc2hvdWxkIGJlIHpvb21lZCBvdXQuXG4gKi9cbl9vbF8uT1ZFUlZJRVdNQVBfTUFYX1JBVElPID0gMC43NTtcblxuXG4vKipcbiAqIEBkZWZpbmUge251bWJlcn0gTWluaW11bSB3aWR0aCBhbmQvb3IgaGVpZ2h0IGV4dGVudCByYXRpbyB0aGF0IGRldGVybWluZXNcbiAqIHdoZW4gdGhlIG92ZXJ2aWV3IG1hcCBzaG91bGQgYmUgem9vbWVkIGluLlxuICovXG5fb2xfLk9WRVJWSUVXTUFQX01JTl9SQVRJTyA9IDAuMTtcblxuXG4vKipcbiAqIEBkZWZpbmUge251bWJlcn0gTWF4aW11bSBudW1iZXIgb2Ygc291cmNlIHRpbGVzIGZvciByYXN0ZXIgcmVwcm9qZWN0aW9uIG9mXG4gKiAgICAgYSBzaW5nbGUgdGlsZS5cbiAqICAgICBJZiB0b28gbWFueSBzb3VyY2UgdGlsZXMgYXJlIGRldGVybWluZWQgdG8gYmUgbG9hZGVkIHRvIGNyZWF0ZSBhIHNpbmdsZVxuICogICAgIHJlcHJvamVjdGVkIHRpbGUgdGhlIGJyb3dzZXIgY2FuIGJlY29tZSB1bnJlc3BvbnNpdmUgb3IgZXZlbiBjcmFzaC5cbiAqICAgICBUaGlzIGNhbiBoYXBwZW4gaWYgdGhlIGRldmVsb3BlciBkZWZpbmVzIHByb2plY3Rpb25zIGltcHJvcGVybHkgYW5kL29yXG4gKiAgICAgd2l0aCB1bmxpbWl0ZWQgZXh0ZW50cy5cbiAqICAgICBJZiB0b28gbWFueSB0aWxlcyBhcmUgcmVxdWlyZWQsIG5vIHRpbGVzIGFyZSBsb2FkZWQgYW5kXG4gKiAgICAgYG9sLlRpbGVTdGF0ZS5FUlJPUmAgc3RhdGUgaXMgc2V0LiBEZWZhdWx0IGlzIGAxMDBgLlxuICovXG5fb2xfLlJBU1RFUl9SRVBST0pFQ1RJT05fTUFYX1NPVVJDRV9USUxFUyA9IDEwMDtcblxuXG4vKipcbiAqIEBkZWZpbmUge251bWJlcn0gTWF4aW11bSBudW1iZXIgb2Ygc3ViZGl2aXNpb24gc3RlcHMgZHVyaW5nIHJhc3RlclxuICogICAgIHJlcHJvamVjdGlvbiB0cmlhbmd1bGF0aW9uLiBQcmV2ZW50cyBoaWdoIG1lbW9yeSB1c2FnZSBhbmQgbGFyZ2VcbiAqICAgICBudW1iZXIgb2YgcHJvajQgY2FsbHMgKGZvciBjZXJ0YWluIHRyYW5zZm9ybWF0aW9ucyBhbmQgYXJlYXMpLlxuICogICAgIEF0IG1vc3QgYDIqKDJedGhpcylgIHRyaWFuZ2xlcyBhcmUgY3JlYXRlZCBmb3IgZWFjaCB0cmlhbmd1bGF0ZWRcbiAqICAgICBleHRlbnQgKHRpbGUvaW1hZ2UpLiBEZWZhdWx0IGlzIGAxMGAuXG4gKi9cbl9vbF8uUkFTVEVSX1JFUFJPSkVDVElPTl9NQVhfU1VCRElWSVNJT04gPSAxMDtcblxuXG4vKipcbiAqIEBkZWZpbmUge251bWJlcn0gTWF4aW11bSBhbGxvd2VkIHNpemUgb2YgdHJpYW5nbGUgcmVsYXRpdmUgdG8gd29ybGQgd2lkdGguXG4gKiAgICAgV2hlbiB0cmFuc2Zvcm1pbmcgY29ybmVycyBvZiB3b3JsZCBleHRlbnQgYmV0d2VlbiBjZXJ0YWluIHByb2plY3Rpb25zLFxuICogICAgIHRoZSByZXN1bHRpbmcgdHJpYW5ndWxhdGlvbiBzZWVtcyB0byBoYXZlIHplcm8gZXJyb3IgYW5kIG5vIHN1YmRpdmlzaW9uXG4gKiAgICAgaXMgcGVyZm9ybWVkLlxuICogICAgIElmIHRoZSB0cmlhbmdsZSB3aWR0aCBpcyBtb3JlIHRoYW4gdGhpcyAocmVsYXRpdmUgdG8gd29ybGQgd2lkdGg7IDAtMSksXG4gKiAgICAgc3ViZGl2aXNvbiBpcyBmb3JjZWQgKHVwIHRvIGBvbC5SQVNURVJfUkVQUk9KRUNUSU9OX01BWF9TVUJESVZJU0lPTmApLlxuICogICAgIERlZmF1bHQgaXMgYDAuMjVgLlxuICovXG5fb2xfLlJBU1RFUl9SRVBST0pFQ1RJT05fTUFYX1RSSUFOR0xFX1dJRFRIID0gMC4yNTtcblxuXG4vKipcbiAqIEBkZWZpbmUge251bWJlcn0gVG9sZXJhbmNlIGZvciBnZW9tZXRyeSBzaW1wbGlmaWNhdGlvbiBpbiBkZXZpY2UgcGl4ZWxzLlxuICovXG5fb2xfLlNJTVBMSUZZX1RPTEVSQU5DRSA9IDAuNTtcblxuXG4vKipcbiAqIEBkZWZpbmUge251bWJlcn0gVGV4dHVyZSBjYWNoZSBoaWdoIHdhdGVyIG1hcmsuXG4gKi9cbl9vbF8uV0VCR0xfVEVYVFVSRV9DQUNIRV9ISUdIX1dBVEVSX01BUksgPSAxMDI0O1xuXG5cbi8qKlxuICogQGRlZmluZSB7c3RyaW5nfSBPcGVuTGF5ZXJzIHZlcnNpb24uXG4gKi9cbl9vbF8uVkVSU0lPTiA9ICd2NC42LjUnO1xuXG5cbi8qKlxuICogVGhlIG1heGltdW0gc3VwcG9ydGVkIFdlYkdMIHRleHR1cmUgc2l6ZSBpbiBwaXhlbHMuIElmIFdlYkdMIGlzIG5vdFxuICogc3VwcG9ydGVkLCB0aGUgdmFsdWUgaXMgc2V0IHRvIGB1bmRlZmluZWRgLlxuICogQGNvbnN0XG4gKiBAdHlwZSB7bnVtYmVyfHVuZGVmaW5lZH1cbiAqL1xuX29sXy5XRUJHTF9NQVhfVEVYVFVSRV9TSVpFOyAvLyB2YWx1ZSBpcyBzZXQgaW4gYG9sLmhhc2BcblxuXG4vKipcbiAqIExpc3Qgb2Ygc3VwcG9ydGVkIFdlYkdMIGV4dGVuc2lvbnMuXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtBcnJheS48c3RyaW5nPn1cbiAqL1xuX29sXy5XRUJHTF9FWFRFTlNJT05TOyAvLyB2YWx1ZSBpcyBzZXQgaW4gYG9sLmhhc2BcblxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlci5cbiAqXG4gKiBVc2FnZTpcbiAqXG4gKiAgICAgZnVuY3Rpb24gUGFyZW50Q2xhc3MoYSwgYikgeyB9XG4gKiAgICAgUGFyZW50Q2xhc3MucHJvdG90eXBlLmZvbyA9IGZ1bmN0aW9uKGEpIHsgfVxuICpcbiAqICAgICBmdW5jdGlvbiBDaGlsZENsYXNzKGEsIGIsIGMpIHtcbiAqICAgICAgIC8vIENhbGwgcGFyZW50IGNvbnN0cnVjdG9yXG4gKiAgICAgICBQYXJlbnRDbGFzcy5jYWxsKHRoaXMsIGEsIGIpO1xuICogICAgIH1cbiAqICAgICBvbC5pbmhlcml0cyhDaGlsZENsYXNzLCBQYXJlbnRDbGFzcyk7XG4gKlxuICogICAgIHZhciBjaGlsZCA9IG5ldyBDaGlsZENsYXNzKCdhJywgJ2InLCAnc2VlJyk7XG4gKiAgICAgY2hpbGQuZm9vKCk7IC8vIFRoaXMgd29ya3MuXG4gKlxuICogQHBhcmFtIHshRnVuY3Rpb259IGNoaWxkQ3RvciBDaGlsZCBjb25zdHJ1Y3Rvci5cbiAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBwYXJlbnRDdG9yIFBhcmVudCBjb25zdHJ1Y3Rvci5cbiAqIEBmdW5jdGlvblxuICogQGFwaVxuICovXG5fb2xfLmluaGVyaXRzID0gZnVuY3Rpb24oY2hpbGRDdG9yLCBwYXJlbnRDdG9yKSB7XG4gIGNoaWxkQ3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHBhcmVudEN0b3IucHJvdG90eXBlKTtcbiAgY2hpbGRDdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGNoaWxkQ3Rvcjtcbn07XG5cblxuLyoqXG4gKiBBIHJldXNhYmxlIGZ1bmN0aW9uLCB1c2VkIGUuZy4gYXMgYSBkZWZhdWx0IGZvciBjYWxsYmFja3MuXG4gKlxuICogQHJldHVybiB7dW5kZWZpbmVkfSBOb3RoaW5nLlxuICovXG5fb2xfLm51bGxGdW5jdGlvbiA9IGZ1bmN0aW9uKCkge307XG5cblxuLyoqXG4gKiBHZXRzIGEgdW5pcXVlIElEIGZvciBhbiBvYmplY3QuIFRoaXMgbXV0YXRlcyB0aGUgb2JqZWN0IHNvIHRoYXQgZnVydGhlciBjYWxsc1xuICogd2l0aCB0aGUgc2FtZSBvYmplY3QgYXMgYSBwYXJhbWV0ZXIgcmV0dXJucyB0aGUgc2FtZSB2YWx1ZS4gVW5pcXVlIElEcyBhcmUgZ2VuZXJhdGVkXG4gKiBhcyBhIHN0cmljdGx5IGluY3JlYXNpbmcgc2VxdWVuY2UuIEFkYXB0ZWQgZnJvbSBnb29nLmdldFVpZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gZ2V0IHRoZSB1bmlxdWUgSUQgZm9yLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgdW5pcXVlIElEIGZvciB0aGUgb2JqZWN0LlxuICovXG5fb2xfLmdldFVpZCA9IGZ1bmN0aW9uKG9iaikge1xuICByZXR1cm4gb2JqLm9sX3VpZCB8fFxuICAgICAgKG9iai5vbF91aWQgPSArK19vbF8udWlkQ291bnRlcl8pO1xufTtcblxuXG4vKipcbiAqIENvdW50ZXIgZm9yIGdldFVpZC5cbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5fb2xfLnVpZENvdW50ZXJfID0gMDtcbmV4cG9ydCBkZWZhdWx0IF9vbF87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgX29sX2Fzc2VydHNfIGZyb20gJy4vYXNzZXJ0cy5qcyc7XG52YXIgX29sX21hdGhfID0ge307XG5cblxuLyoqXG4gKiBUYWtlcyBhIG51bWJlciBhbmQgY2xhbXBzIGl0IHRvIHdpdGhpbiB0aGUgcHJvdmlkZWQgYm91bmRzLlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSBpbnB1dCBudW1iZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIFRoZSBtaW5pbXVtIHZhbHVlIHRvIHJldHVybi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggVGhlIG1heGltdW0gdmFsdWUgdG8gcmV0dXJuLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgaW5wdXQgbnVtYmVyIGlmIGl0IGlzIHdpdGhpbiBib3VuZHMsIG9yIHRoZSBuZWFyZXN0XG4gKiAgICAgbnVtYmVyIHdpdGhpbiB0aGUgYm91bmRzLlxuICovXG5fb2xfbWF0aF8uY2xhbXAgPSBmdW5jdGlvbih2YWx1ZSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBtaW4pLCBtYXgpO1xufTtcblxuXG4vKipcbiAqIFJldHVybiB0aGUgaHlwZXJib2xpYyBjb3NpbmUgb2YgYSBnaXZlbiBudW1iZXIuIFRoZSBtZXRob2Qgd2lsbCB1c2UgdGhlXG4gKiBuYXRpdmUgYE1hdGguY29zaGAgZnVuY3Rpb24gaWYgaXQgaXMgYXZhaWxhYmxlLCBvdGhlcndpc2UgdGhlIGh5cGVyYm9saWNcbiAqIGNvc2luZSB3aWxsIGJlIGNhbGN1bGF0ZWQgdmlhIHRoZSByZWZlcmVuY2UgaW1wbGVtZW50YXRpb24gb2YgdGhlIE1vemlsbGFcbiAqIGRldmVsb3BlciBuZXR3b3JrLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFguXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEh5cGVyYm9saWMgY29zaW5lIG9mIHguXG4gKi9cbl9vbF9tYXRoXy5jb3NoID0gKGZ1bmN0aW9uKCkge1xuICAvLyBXcmFwcGVkIGluIGEgaWlmZSwgdG8gc2F2ZSB0aGUgb3ZlcmhlYWQgb2YgY2hlY2tpbmcgZm9yIHRoZSBuYXRpdmVcbiAgLy8gaW1wbGVtZW50YXRpb24gb24gZXZlcnkgaW52b2NhdGlvbi5cbiAgdmFyIGNvc2g7XG4gIGlmICgnY29zaCcgaW4gTWF0aCkge1xuICAgIC8vIFRoZSBlbnZpcm9ubWVudCBzdXBwb3J0cyB0aGUgbmF0aXZlIE1hdGguY29zaCBmdW5jdGlvbiwgdXNlIGl04oCmXG4gICAgY29zaCA9IE1hdGguY29zaDtcbiAgfSBlbHNlIHtcbiAgICAvLyDigKYgZWxzZSwgdXNlIHRoZSByZWZlcmVuY2UgaW1wbGVtZW50YXRpb24gb2YgTUROOlxuICAgIGNvc2ggPSBmdW5jdGlvbih4KSB7XG4gICAgICB2YXIgeSA9IE1hdGguZXhwKHgpO1xuICAgICAgcmV0dXJuICh5ICsgMSAvIHkpIC8gMjtcbiAgICB9O1xuICB9XG4gIHJldHVybiBjb3NoO1xufSgpKTtcblxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFguXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBzbWFsbGVzdCBwb3dlciBvZiB0d28gZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHguXG4gKi9cbl9vbF9tYXRoXy5yb3VuZFVwVG9Qb3dlck9mVHdvID0gZnVuY3Rpb24oeCkge1xuICBfb2xfYXNzZXJ0c18uYXNzZXJ0KDAgPCB4LCAyOSk7IC8vIGB4YCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBgMGBcbiAgcmV0dXJuIE1hdGgucG93KDIsIE1hdGguY2VpbChNYXRoLmxvZyh4KSAvIE1hdGguTE4yKSk7XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgc3F1YXJlIG9mIHRoZSBjbG9zZXN0IGRpc3RhbmNlIGJldHdlZW4gdGhlIHBvaW50ICh4LCB5KSBhbmQgdGhlXG4gKiBsaW5lIHNlZ21lbnQgKHgxLCB5MSkgdG8gKHgyLCB5MikuXG4gKiBAcGFyYW0ge251bWJlcn0geCBYLlxuICogQHBhcmFtIHtudW1iZXJ9IHkgWS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB4MSBYMS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB5MSBZMS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB4MiBYMi5cbiAqIEBwYXJhbSB7bnVtYmVyfSB5MiBZMi5cbiAqIEByZXR1cm4ge251bWJlcn0gU3F1YXJlZCBkaXN0YW5jZS5cbiAqL1xuX29sX21hdGhfLnNxdWFyZWRTZWdtZW50RGlzdGFuY2UgPSBmdW5jdGlvbih4LCB5LCB4MSwgeTEsIHgyLCB5Mikge1xuICB2YXIgZHggPSB4MiAtIHgxO1xuICB2YXIgZHkgPSB5MiAtIHkxO1xuICBpZiAoZHggIT09IDAgfHwgZHkgIT09IDApIHtcbiAgICB2YXIgdCA9ICgoeCAtIHgxKSAqIGR4ICsgKHkgLSB5MSkgKiBkeSkgLyAoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIGlmICh0ID4gMSkge1xuICAgICAgeDEgPSB4MjtcbiAgICAgIHkxID0geTI7XG4gICAgfSBlbHNlIGlmICh0ID4gMCkge1xuICAgICAgeDEgKz0gZHggKiB0O1xuICAgICAgeTEgKz0gZHkgKiB0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gX29sX21hdGhfLnNxdWFyZWREaXN0YW5jZSh4LCB5LCB4MSwgeTEpO1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIHNxdWFyZSBvZiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgcG9pbnRzICh4MSwgeTEpIGFuZCAoeDIsIHkyKS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB4MSBYMS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB5MSBZMS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB4MiBYMi5cbiAqIEBwYXJhbSB7bnVtYmVyfSB5MiBZMi5cbiAqIEByZXR1cm4ge251bWJlcn0gU3F1YXJlZCBkaXN0YW5jZS5cbiAqL1xuX29sX21hdGhfLnNxdWFyZWREaXN0YW5jZSA9IGZ1bmN0aW9uKHgxLCB5MSwgeDIsIHkyKSB7XG4gIHZhciBkeCA9IHgyIC0geDE7XG4gIHZhciBkeSA9IHkyIC0geTE7XG4gIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcbn07XG5cblxuLyoqXG4gKiBTb2x2ZXMgc3lzdGVtIG9mIGxpbmVhciBlcXVhdGlvbnMgdXNpbmcgR2F1c3NpYW4gZWxpbWluYXRpb24gbWV0aG9kLlxuICpcbiAqIEBwYXJhbSB7QXJyYXkuPEFycmF5LjxudW1iZXI+Pn0gbWF0IEF1Z21lbnRlZCBtYXRyaXggKG4geCBuICsgMSBjb2x1bW4pXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbiByb3ctbWFqb3Igb3JkZXIuXG4gKiBAcmV0dXJuIHtBcnJheS48bnVtYmVyPn0gVGhlIHJlc3VsdGluZyB2ZWN0b3IuXG4gKi9cbl9vbF9tYXRoXy5zb2x2ZUxpbmVhclN5c3RlbSA9IGZ1bmN0aW9uKG1hdCkge1xuICB2YXIgbiA9IG1hdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAvLyBGaW5kIG1heCBpbiB0aGUgaS10aCBjb2x1bW4gKGlnbm9yaW5nIGkgLSAxIGZpcnN0IHJvd3MpXG4gICAgdmFyIG1heFJvdyA9IGk7XG4gICAgdmFyIG1heEVsID0gTWF0aC5hYnMobWF0W2ldW2ldKTtcbiAgICBmb3IgKHZhciByID0gaSArIDE7IHIgPCBuOyByKyspIHtcbiAgICAgIHZhciBhYnNWYWx1ZSA9IE1hdGguYWJzKG1hdFtyXVtpXSk7XG4gICAgICBpZiAoYWJzVmFsdWUgPiBtYXhFbCkge1xuICAgICAgICBtYXhFbCA9IGFic1ZhbHVlO1xuICAgICAgICBtYXhSb3cgPSByO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtYXhFbCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7IC8vIG1hdHJpeCBpcyBzaW5ndWxhclxuICAgIH1cblxuICAgIC8vIFN3YXAgbWF4IHJvdyB3aXRoIGktdGggKGN1cnJlbnQpIHJvd1xuICAgIHZhciB0bXAgPSBtYXRbbWF4Um93XTtcbiAgICBtYXRbbWF4Um93XSA9IG1hdFtpXTtcbiAgICBtYXRbaV0gPSB0bXA7XG5cbiAgICAvLyBTdWJ0cmFjdCB0aGUgaS10aCByb3cgdG8gbWFrZSBhbGwgdGhlIHJlbWFpbmluZyByb3dzIDAgaW4gdGhlIGktdGggY29sdW1uXG4gICAgZm9yICh2YXIgaiA9IGkgKyAxOyBqIDwgbjsgaisrKSB7XG4gICAgICB2YXIgY29lZiA9IC1tYXRbal1baV0gLyBtYXRbaV1baV07XG4gICAgICBmb3IgKHZhciBrID0gaTsgayA8IG4gKyAxOyBrKyspIHtcbiAgICAgICAgaWYgKGkgPT0gaykge1xuICAgICAgICAgIG1hdFtqXVtrXSA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWF0W2pdW2tdICs9IGNvZWYgKiBtYXRbaV1ba107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTb2x2ZSBBeD1iIGZvciB1cHBlciB0cmlhbmd1bGFyIG1hdHJpeCBBIChtYXQpXG4gIHZhciB4ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBsID0gbiAtIDE7IGwgPj0gMDsgbC0tKSB7XG4gICAgeFtsXSA9IG1hdFtsXVtuXSAvIG1hdFtsXVtsXTtcbiAgICBmb3IgKHZhciBtID0gbCAtIDE7IG0gPj0gMDsgbS0tKSB7XG4gICAgICBtYXRbbV1bbl0gLT0gbWF0W21dW2xdICogeFtsXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHg7XG59O1xuXG5cbi8qKlxuICogQ29udmVydHMgcmFkaWFucyB0byB0byBkZWdyZWVzLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZUluUmFkaWFucyBBbmdsZSBpbiByYWRpYW5zLlxuICogQHJldHVybiB7bnVtYmVyfSBBbmdsZSBpbiBkZWdyZWVzLlxuICovXG5fb2xfbWF0aF8udG9EZWdyZWVzID0gZnVuY3Rpb24oYW5nbGVJblJhZGlhbnMpIHtcbiAgcmV0dXJuIGFuZ2xlSW5SYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcbn07XG5cblxuLyoqXG4gKiBDb252ZXJ0cyBkZWdyZWVzIHRvIHJhZGlhbnMuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlSW5EZWdyZWVzIEFuZ2xlIGluIGRlZ3JlZXMuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuZ2xlIGluIHJhZGlhbnMuXG4gKi9cbl9vbF9tYXRoXy50b1JhZGlhbnMgPSBmdW5jdGlvbihhbmdsZUluRGVncmVlcykge1xuICByZXR1cm4gYW5nbGVJbkRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtb2R1bG8gb2YgYSAvIGIsIGRlcGVuZGluZyBvbiB0aGUgc2lnbiBvZiBiLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIERpdmlkZW5kLlxuICogQHBhcmFtIHtudW1iZXJ9IGIgRGl2aXNvci5cbiAqIEByZXR1cm4ge251bWJlcn0gTW9kdWxvLlxuICovXG5fb2xfbWF0aF8ubW9kdWxvID0gZnVuY3Rpb24oYSwgYikge1xuICB2YXIgciA9IGEgJSBiO1xuICByZXR1cm4gciAqIGIgPCAwID8gciArIGIgOiByO1xufTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBsaW5lYXJseSBpbnRlcnBvbGF0ZWQgdmFsdWUgb2YgeCBiZXR3ZWVuIGEgYW5kIGIuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGEgTnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYiBOdW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFZhbHVlIHRvIGJlIGludGVycG9sYXRlZC5cbiAqIEByZXR1cm4ge251bWJlcn0gSW50ZXJwb2xhdGVkIHZhbHVlLlxuICovXG5fb2xfbWF0aF8ubGVycCA9IGZ1bmN0aW9uKGEsIGIsIHgpIHtcbiAgcmV0dXJuIGEgKyB4ICogKGIgLSBhKTtcbn07XG5leHBvcnQgZGVmYXVsdCBfb2xfbWF0aF87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9tYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGVudW0ge3N0cmluZ31cbiAqIEBjb25zdFxuICovXG52YXIgX29sX2V2ZW50c19FdmVudFR5cGVfID0ge1xuICAvKipcbiAgICogR2VuZXJpYyBjaGFuZ2UgZXZlbnQuIFRyaWdnZXJlZCB3aGVuIHRoZSByZXZpc2lvbiBjb3VudGVyIGlzIGluY3JlYXNlZC5cbiAgICogQGV2ZW50IG9sLmV2ZW50cy5FdmVudCNjaGFuZ2VcbiAgICogQGFwaVxuICAgKi9cbiAgQ0hBTkdFOiAnY2hhbmdlJyxcblxuICBDTEVBUjogJ2NsZWFyJyxcbiAgQ0xJQ0s6ICdjbGljaycsXG4gIERCTENMSUNLOiAnZGJsY2xpY2snLFxuICBEUkFHRU5URVI6ICdkcmFnZW50ZXInLFxuICBEUkFHT1ZFUjogJ2RyYWdvdmVyJyxcbiAgRFJPUDogJ2Ryb3AnLFxuICBFUlJPUjogJ2Vycm9yJyxcbiAgS0VZRE9XTjogJ2tleWRvd24nLFxuICBLRVlQUkVTUzogJ2tleXByZXNzJyxcbiAgTE9BRDogJ2xvYWQnLFxuICBNT1VTRURPV046ICdtb3VzZWRvd24nLFxuICBNT1VTRU1PVkU6ICdtb3VzZW1vdmUnLFxuICBNT1VTRU9VVDogJ21vdXNlb3V0JyxcbiAgTU9VU0VVUDogJ21vdXNldXAnLFxuICBNT1VTRVdIRUVMOiAnbW91c2V3aGVlbCcsXG4gIE1TUE9JTlRFUkRPV046ICdNU1BvaW50ZXJEb3duJyxcbiAgUkVTSVpFOiAncmVzaXplJyxcbiAgVE9VQ0hTVEFSVDogJ3RvdWNoc3RhcnQnLFxuICBUT1VDSE1PVkU6ICd0b3VjaG1vdmUnLFxuICBUT1VDSEVORDogJ3RvdWNoZW5kJyxcbiAgV0hFRUw6ICd3aGVlbCdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IF9vbF9ldmVudHNfRXZlbnRUeXBlXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL2V2ZW50cy9ldmVudHR5cGUuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF9vbF9hc3NlcnRzXyBmcm9tICcuL2Fzc2VydHMuanMnO1xuaW1wb3J0IF9vbF9leHRlbnRfQ29ybmVyXyBmcm9tICcuL2V4dGVudC9jb3JuZXIuanMnO1xuaW1wb3J0IF9vbF9leHRlbnRfUmVsYXRpb25zaGlwXyBmcm9tICcuL2V4dGVudC9yZWxhdGlvbnNoaXAuanMnO1xudmFyIF9vbF9leHRlbnRfID0ge307XG5cblxuLyoqXG4gKiBCdWlsZCBhbiBleHRlbnQgdGhhdCBpbmNsdWRlcyBhbGwgZ2l2ZW4gY29vcmRpbmF0ZXMuXG4gKlxuICogQHBhcmFtIHtBcnJheS48b2wuQ29vcmRpbmF0ZT59IGNvb3JkaW5hdGVzIENvb3JkaW5hdGVzLlxuICogQHJldHVybiB7b2wuRXh0ZW50fSBCb3VuZGluZyBleHRlbnQuXG4gKiBAYXBpXG4gKi9cbl9vbF9leHRlbnRfLmJvdW5kaW5nRXh0ZW50ID0gZnVuY3Rpb24oY29vcmRpbmF0ZXMpIHtcbiAgdmFyIGV4dGVudCA9IF9vbF9leHRlbnRfLmNyZWF0ZUVtcHR5KCk7XG4gIGZvciAodmFyIGkgPSAwLCBpaSA9IGNvb3JkaW5hdGVzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICBfb2xfZXh0ZW50Xy5leHRlbmRDb29yZGluYXRlKGV4dGVudCwgY29vcmRpbmF0ZXNbaV0pO1xuICB9XG4gIHJldHVybiBleHRlbnQ7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheS48bnVtYmVyPn0geHMgWHMuXG4gKiBAcGFyYW0ge0FycmF5LjxudW1iZXI+fSB5cyBZcy5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50PX0gb3B0X2V4dGVudCBEZXN0aW5hdGlvbiBleHRlbnQuXG4gKiBAcHJpdmF0ZVxuICogQHJldHVybiB7b2wuRXh0ZW50fSBFeHRlbnQuXG4gKi9cbl9vbF9leHRlbnRfLmJvdW5kaW5nRXh0ZW50WFlzXyA9IGZ1bmN0aW9uKHhzLCB5cywgb3B0X2V4dGVudCkge1xuICB2YXIgbWluWCA9IE1hdGgubWluLmFwcGx5KG51bGwsIHhzKTtcbiAgdmFyIG1pblkgPSBNYXRoLm1pbi5hcHBseShudWxsLCB5cyk7XG4gIHZhciBtYXhYID0gTWF0aC5tYXguYXBwbHkobnVsbCwgeHMpO1xuICB2YXIgbWF4WSA9IE1hdGgubWF4LmFwcGx5KG51bGwsIHlzKTtcbiAgcmV0dXJuIF9vbF9leHRlbnRfLmNyZWF0ZU9yVXBkYXRlKG1pblgsIG1pblksIG1heFgsIG1heFksIG9wdF9leHRlbnQpO1xufTtcblxuXG4vKipcbiAqIFJldHVybiBleHRlbnQgaW5jcmVhc2VkIGJ5IHRoZSBwcm92aWRlZCB2YWx1ZS5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSBhbW91bnQgYnkgd2hpY2ggdGhlIGV4dGVudCBzaG91bGQgYmUgYnVmZmVyZWQuXG4gKiBAcGFyYW0ge29sLkV4dGVudD19IG9wdF9leHRlbnQgRXh0ZW50LlxuICogQHJldHVybiB7b2wuRXh0ZW50fSBFeHRlbnQuXG4gKiBAYXBpXG4gKi9cbl9vbF9leHRlbnRfLmJ1ZmZlciA9IGZ1bmN0aW9uKGV4dGVudCwgdmFsdWUsIG9wdF9leHRlbnQpIHtcbiAgaWYgKG9wdF9leHRlbnQpIHtcbiAgICBvcHRfZXh0ZW50WzBdID0gZXh0ZW50WzBdIC0gdmFsdWU7XG4gICAgb3B0X2V4dGVudFsxXSA9IGV4dGVudFsxXSAtIHZhbHVlO1xuICAgIG9wdF9leHRlbnRbMl0gPSBleHRlbnRbMl0gKyB2YWx1ZTtcbiAgICBvcHRfZXh0ZW50WzNdID0gZXh0ZW50WzNdICsgdmFsdWU7XG4gICAgcmV0dXJuIG9wdF9leHRlbnQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGV4dGVudFswXSAtIHZhbHVlLFxuICAgICAgZXh0ZW50WzFdIC0gdmFsdWUsXG4gICAgICBleHRlbnRbMl0gKyB2YWx1ZSxcbiAgICAgIGV4dGVudFszXSArIHZhbHVlXG4gICAgXTtcbiAgfVxufTtcblxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBhbiBleHRlbnQuXG4gKlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudCBFeHRlbnQgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge29sLkV4dGVudD19IG9wdF9leHRlbnQgRXh0ZW50LlxuICogQHJldHVybiB7b2wuRXh0ZW50fSBUaGUgY2xvbmUuXG4gKi9cbl9vbF9leHRlbnRfLmNsb25lID0gZnVuY3Rpb24oZXh0ZW50LCBvcHRfZXh0ZW50KSB7XG4gIGlmIChvcHRfZXh0ZW50KSB7XG4gICAgb3B0X2V4dGVudFswXSA9IGV4dGVudFswXTtcbiAgICBvcHRfZXh0ZW50WzFdID0gZXh0ZW50WzFdO1xuICAgIG9wdF9leHRlbnRbMl0gPSBleHRlbnRbMl07XG4gICAgb3B0X2V4dGVudFszXSA9IGV4dGVudFszXTtcbiAgICByZXR1cm4gb3B0X2V4dGVudDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXh0ZW50LnNsaWNlKCk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge29sLkV4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFguXG4gKiBAcGFyYW0ge251bWJlcn0geSBZLlxuICogQHJldHVybiB7bnVtYmVyfSBDbG9zZXN0IHNxdWFyZWQgZGlzdGFuY2UuXG4gKi9cbl9vbF9leHRlbnRfLmNsb3Nlc3RTcXVhcmVkRGlzdGFuY2VYWSA9IGZ1bmN0aW9uKGV4dGVudCwgeCwgeSkge1xuICB2YXIgZHgsIGR5O1xuICBpZiAoeCA8IGV4dGVudFswXSkge1xuICAgIGR4ID0gZXh0ZW50WzBdIC0geDtcbiAgfSBlbHNlIGlmIChleHRlbnRbMl0gPCB4KSB7XG4gICAgZHggPSB4IC0gZXh0ZW50WzJdO1xuICB9IGVsc2Uge1xuICAgIGR4ID0gMDtcbiAgfVxuICBpZiAoeSA8IGV4dGVudFsxXSkge1xuICAgIGR5ID0gZXh0ZW50WzFdIC0geTtcbiAgfSBlbHNlIGlmIChleHRlbnRbM10gPCB5KSB7XG4gICAgZHkgPSB5IC0gZXh0ZW50WzNdO1xuICB9IGVsc2Uge1xuICAgIGR5ID0gMDtcbiAgfVxuICByZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XG59O1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIHBhc3NlZCBjb29yZGluYXRlIGlzIGNvbnRhaW5lZCBvciBvbiB0aGUgZWRnZSBvZiB0aGUgZXh0ZW50LlxuICpcbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHBhcmFtIHtvbC5Db29yZGluYXRlfSBjb29yZGluYXRlIENvb3JkaW5hdGUuXG4gKiBAcmV0dXJuIHtib29sZWFufSBUaGUgY29vcmRpbmF0ZSBpcyBjb250YWluZWQgaW4gdGhlIGV4dGVudC5cbiAqIEBhcGlcbiAqL1xuX29sX2V4dGVudF8uY29udGFpbnNDb29yZGluYXRlID0gZnVuY3Rpb24oZXh0ZW50LCBjb29yZGluYXRlKSB7XG4gIHJldHVybiBfb2xfZXh0ZW50Xy5jb250YWluc1hZKGV4dGVudCwgY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXSk7XG59O1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgb25lIGV4dGVudCBjb250YWlucyBhbm90aGVyLlxuICpcbiAqIEFuIGV4dGVudCBpcyBkZWVtZWQgY29udGFpbmVkIGlmIGl0IGxpZXMgY29tcGxldGVseSB3aXRoaW4gdGhlIG90aGVyIGV4dGVudCxcbiAqIGluY2x1ZGluZyBpZiB0aGV5IHNoYXJlIG9uZSBvciBtb3JlIGVkZ2VzLlxuICpcbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQxIEV4dGVudCAxLlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudDIgRXh0ZW50IDIuXG4gKiBAcmV0dXJuIHtib29sZWFufSBUaGUgc2Vjb25kIGV4dGVudCBpcyBjb250YWluZWQgYnkgb3Igb24gdGhlIGVkZ2Ugb2YgdGhlXG4gKiAgICAgZmlyc3QuXG4gKiBAYXBpXG4gKi9cbl9vbF9leHRlbnRfLmNvbnRhaW5zRXh0ZW50ID0gZnVuY3Rpb24oZXh0ZW50MSwgZXh0ZW50Mikge1xuICByZXR1cm4gZXh0ZW50MVswXSA8PSBleHRlbnQyWzBdICYmIGV4dGVudDJbMl0gPD0gZXh0ZW50MVsyXSAmJlxuICAgICAgZXh0ZW50MVsxXSA8PSBleHRlbnQyWzFdICYmIGV4dGVudDJbM10gPD0gZXh0ZW50MVszXTtcbn07XG5cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgcGFzc2VkIGNvb3JkaW5hdGUgaXMgY29udGFpbmVkIG9yIG9uIHRoZSBlZGdlIG9mIHRoZSBleHRlbnQuXG4gKlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0geCBYIGNvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge251bWJlcn0geSBZIGNvb3JkaW5hdGUuXG4gKiBAcmV0dXJuIHtib29sZWFufSBUaGUgeCwgeSB2YWx1ZXMgYXJlIGNvbnRhaW5lZCBpbiB0aGUgZXh0ZW50LlxuICogQGFwaVxuICovXG5fb2xfZXh0ZW50Xy5jb250YWluc1hZID0gZnVuY3Rpb24oZXh0ZW50LCB4LCB5KSB7XG4gIHJldHVybiBleHRlbnRbMF0gPD0geCAmJiB4IDw9IGV4dGVudFsyXSAmJiBleHRlbnRbMV0gPD0geSAmJiB5IDw9IGV4dGVudFszXTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIHJlbGF0aW9uc2hpcCBiZXR3ZWVuIGEgY29vcmRpbmF0ZSBhbmQgZXh0ZW50LlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudCBUaGUgZXh0ZW50LlxuICogQHBhcmFtIHtvbC5Db29yZGluYXRlfSBjb29yZGluYXRlIFRoZSBjb29yZGluYXRlLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgcmVsYXRpb25zaGlwIChiaXR3aXNlIGNvbXBhcmUgd2l0aFxuICogICAgIG9sLmV4dGVudC5SZWxhdGlvbnNoaXApLlxuICovXG5fb2xfZXh0ZW50Xy5jb29yZGluYXRlUmVsYXRpb25zaGlwID0gZnVuY3Rpb24oZXh0ZW50LCBjb29yZGluYXRlKSB7XG4gIHZhciBtaW5YID0gZXh0ZW50WzBdO1xuICB2YXIgbWluWSA9IGV4dGVudFsxXTtcbiAgdmFyIG1heFggPSBleHRlbnRbMl07XG4gIHZhciBtYXhZID0gZXh0ZW50WzNdO1xuICB2YXIgeCA9IGNvb3JkaW5hdGVbMF07XG4gIHZhciB5ID0gY29vcmRpbmF0ZVsxXTtcbiAgdmFyIHJlbGF0aW9uc2hpcCA9IF9vbF9leHRlbnRfUmVsYXRpb25zaGlwXy5VTktOT1dOO1xuICBpZiAoeCA8IG1pblgpIHtcbiAgICByZWxhdGlvbnNoaXAgPSByZWxhdGlvbnNoaXAgfCBfb2xfZXh0ZW50X1JlbGF0aW9uc2hpcF8uTEVGVDtcbiAgfSBlbHNlIGlmICh4ID4gbWF4WCkge1xuICAgIHJlbGF0aW9uc2hpcCA9IHJlbGF0aW9uc2hpcCB8IF9vbF9leHRlbnRfUmVsYXRpb25zaGlwXy5SSUdIVDtcbiAgfVxuICBpZiAoeSA8IG1pblkpIHtcbiAgICByZWxhdGlvbnNoaXAgPSByZWxhdGlvbnNoaXAgfCBfb2xfZXh0ZW50X1JlbGF0aW9uc2hpcF8uQkVMT1c7XG4gIH0gZWxzZSBpZiAoeSA+IG1heFkpIHtcbiAgICByZWxhdGlvbnNoaXAgPSByZWxhdGlvbnNoaXAgfCBfb2xfZXh0ZW50X1JlbGF0aW9uc2hpcF8uQUJPVkU7XG4gIH1cbiAgaWYgKHJlbGF0aW9uc2hpcCA9PT0gX29sX2V4dGVudF9SZWxhdGlvbnNoaXBfLlVOS05PV04pIHtcbiAgICByZWxhdGlvbnNoaXAgPSBfb2xfZXh0ZW50X1JlbGF0aW9uc2hpcF8uSU5URVJTRUNUSU5HO1xuICB9XG4gIHJldHVybiByZWxhdGlvbnNoaXA7XG59O1xuXG5cbi8qKlxuICogQ3JlYXRlIGFuIGVtcHR5IGV4dGVudC5cbiAqIEByZXR1cm4ge29sLkV4dGVudH0gRW1wdHkgZXh0ZW50LlxuICogQGFwaVxuICovXG5fb2xfZXh0ZW50Xy5jcmVhdGVFbXB0eSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gW0luZmluaXR5LCBJbmZpbml0eSwgLUluZmluaXR5LCAtSW5maW5pdHldO1xufTtcblxuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBleHRlbnQgb3IgdXBkYXRlIHRoZSBwcm92aWRlZCBleHRlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gbWluWCBNaW5pbXVtIFguXG4gKiBAcGFyYW0ge251bWJlcn0gbWluWSBNaW5pbXVtIFkuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4WCBNYXhpbXVtIFguXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4WSBNYXhpbXVtIFkuXG4gKiBAcGFyYW0ge29sLkV4dGVudD19IG9wdF9leHRlbnQgRGVzdGluYXRpb24gZXh0ZW50LlxuICogQHJldHVybiB7b2wuRXh0ZW50fSBFeHRlbnQuXG4gKi9cbl9vbF9leHRlbnRfLmNyZWF0ZU9yVXBkYXRlID0gZnVuY3Rpb24obWluWCwgbWluWSwgbWF4WCwgbWF4WSwgb3B0X2V4dGVudCkge1xuICBpZiAob3B0X2V4dGVudCkge1xuICAgIG9wdF9leHRlbnRbMF0gPSBtaW5YO1xuICAgIG9wdF9leHRlbnRbMV0gPSBtaW5ZO1xuICAgIG9wdF9leHRlbnRbMl0gPSBtYXhYO1xuICAgIG9wdF9leHRlbnRbM10gPSBtYXhZO1xuICAgIHJldHVybiBvcHRfZXh0ZW50O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBbbWluWCwgbWluWSwgbWF4WCwgbWF4WV07XG4gIH1cbn07XG5cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgZW1wdHkgZXh0ZW50IG9yIG1ha2UgdGhlIHByb3ZpZGVkIG9uZSBlbXB0eS5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50PX0gb3B0X2V4dGVudCBFeHRlbnQuXG4gKiBAcmV0dXJuIHtvbC5FeHRlbnR9IEV4dGVudC5cbiAqL1xuX29sX2V4dGVudF8uY3JlYXRlT3JVcGRhdGVFbXB0eSA9IGZ1bmN0aW9uKG9wdF9leHRlbnQpIHtcbiAgcmV0dXJuIF9vbF9leHRlbnRfLmNyZWF0ZU9yVXBkYXRlKFxuICAgICAgSW5maW5pdHksIEluZmluaXR5LCAtSW5maW5pdHksIC1JbmZpbml0eSwgb3B0X2V4dGVudCk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtvbC5Db29yZGluYXRlfSBjb29yZGluYXRlIENvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge29sLkV4dGVudD19IG9wdF9leHRlbnQgRXh0ZW50LlxuICogQHJldHVybiB7b2wuRXh0ZW50fSBFeHRlbnQuXG4gKi9cbl9vbF9leHRlbnRfLmNyZWF0ZU9yVXBkYXRlRnJvbUNvb3JkaW5hdGUgPSBmdW5jdGlvbihjb29yZGluYXRlLCBvcHRfZXh0ZW50KSB7XG4gIHZhciB4ID0gY29vcmRpbmF0ZVswXTtcbiAgdmFyIHkgPSBjb29yZGluYXRlWzFdO1xuICByZXR1cm4gX29sX2V4dGVudF8uY3JlYXRlT3JVcGRhdGUoeCwgeSwgeCwgeSwgb3B0X2V4dGVudCk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheS48b2wuQ29vcmRpbmF0ZT59IGNvb3JkaW5hdGVzIENvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtvbC5FeHRlbnQ9fSBvcHRfZXh0ZW50IEV4dGVudC5cbiAqIEByZXR1cm4ge29sLkV4dGVudH0gRXh0ZW50LlxuICovXG5fb2xfZXh0ZW50Xy5jcmVhdGVPclVwZGF0ZUZyb21Db29yZGluYXRlcyA9IGZ1bmN0aW9uKGNvb3JkaW5hdGVzLCBvcHRfZXh0ZW50KSB7XG4gIHZhciBleHRlbnQgPSBfb2xfZXh0ZW50Xy5jcmVhdGVPclVwZGF0ZUVtcHR5KG9wdF9leHRlbnQpO1xuICByZXR1cm4gX29sX2V4dGVudF8uZXh0ZW5kQ29vcmRpbmF0ZXMoZXh0ZW50LCBjb29yZGluYXRlcyk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheS48bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgRW5kLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcGFyYW0ge29sLkV4dGVudD19IG9wdF9leHRlbnQgRXh0ZW50LlxuICogQHJldHVybiB7b2wuRXh0ZW50fSBFeHRlbnQuXG4gKi9cbl9vbF9leHRlbnRfLmNyZWF0ZU9yVXBkYXRlRnJvbUZsYXRDb29yZGluYXRlcyA9IGZ1bmN0aW9uKGZsYXRDb29yZGluYXRlcywgb2Zmc2V0LCBlbmQsIHN0cmlkZSwgb3B0X2V4dGVudCkge1xuICB2YXIgZXh0ZW50ID0gX29sX2V4dGVudF8uY3JlYXRlT3JVcGRhdGVFbXB0eShvcHRfZXh0ZW50KTtcbiAgcmV0dXJuIF9vbF9leHRlbnRfLmV4dGVuZEZsYXRDb29yZGluYXRlcyhcbiAgICAgIGV4dGVudCwgZmxhdENvb3JkaW5hdGVzLCBvZmZzZXQsIGVuZCwgc3RyaWRlKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5LjxBcnJheS48b2wuQ29vcmRpbmF0ZT4+fSByaW5ncyBSaW5ncy5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50PX0gb3B0X2V4dGVudCBFeHRlbnQuXG4gKiBAcmV0dXJuIHtvbC5FeHRlbnR9IEV4dGVudC5cbiAqL1xuX29sX2V4dGVudF8uY3JlYXRlT3JVcGRhdGVGcm9tUmluZ3MgPSBmdW5jdGlvbihyaW5ncywgb3B0X2V4dGVudCkge1xuICB2YXIgZXh0ZW50ID0gX29sX2V4dGVudF8uY3JlYXRlT3JVcGRhdGVFbXB0eShvcHRfZXh0ZW50KTtcbiAgcmV0dXJuIF9vbF9leHRlbnRfLmV4dGVuZFJpbmdzKGV4dGVudCwgcmluZ3MpO1xufTtcblxuXG4vKipcbiAqIERldGVybWluZSBpZiB0d28gZXh0ZW50cyBhcmUgZXF1aXZhbGVudC5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQxIEV4dGVudCAxLlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudDIgRXh0ZW50IDIuXG4gKiBAcmV0dXJuIHtib29sZWFufSBUaGUgdHdvIGV4dGVudHMgYXJlIGVxdWl2YWxlbnQuXG4gKiBAYXBpXG4gKi9cbl9vbF9leHRlbnRfLmVxdWFscyA9IGZ1bmN0aW9uKGV4dGVudDEsIGV4dGVudDIpIHtcbiAgcmV0dXJuIGV4dGVudDFbMF0gPT0gZXh0ZW50MlswXSAmJiBleHRlbnQxWzJdID09IGV4dGVudDJbMl0gJiZcbiAgICAgIGV4dGVudDFbMV0gPT0gZXh0ZW50MlsxXSAmJiBleHRlbnQxWzNdID09IGV4dGVudDJbM107XG59O1xuXG5cbi8qKlxuICogTW9kaWZ5IGFuIGV4dGVudCB0byBpbmNsdWRlIGFub3RoZXIgZXh0ZW50LlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudDEgVGhlIGV4dGVudCB0byBiZSBtb2RpZmllZC5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQyIFRoZSBleHRlbnQgdGhhdCB3aWxsIGJlIGluY2x1ZGVkIGluIHRoZSBmaXJzdC5cbiAqIEByZXR1cm4ge29sLkV4dGVudH0gQSByZWZlcmVuY2UgdG8gdGhlIGZpcnN0IChleHRlbmRlZCkgZXh0ZW50LlxuICogQGFwaVxuICovXG5fb2xfZXh0ZW50Xy5leHRlbmQgPSBmdW5jdGlvbihleHRlbnQxLCBleHRlbnQyKSB7XG4gIGlmIChleHRlbnQyWzBdIDwgZXh0ZW50MVswXSkge1xuICAgIGV4dGVudDFbMF0gPSBleHRlbnQyWzBdO1xuICB9XG4gIGlmIChleHRlbnQyWzJdID4gZXh0ZW50MVsyXSkge1xuICAgIGV4dGVudDFbMl0gPSBleHRlbnQyWzJdO1xuICB9XG4gIGlmIChleHRlbnQyWzFdIDwgZXh0ZW50MVsxXSkge1xuICAgIGV4dGVudDFbMV0gPSBleHRlbnQyWzFdO1xuICB9XG4gIGlmIChleHRlbnQyWzNdID4gZXh0ZW50MVszXSkge1xuICAgIGV4dGVudDFbM10gPSBleHRlbnQyWzNdO1xuICB9XG4gIHJldHVybiBleHRlbnQxO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHBhcmFtIHtvbC5Db29yZGluYXRlfSBjb29yZGluYXRlIENvb3JkaW5hdGUuXG4gKi9cbl9vbF9leHRlbnRfLmV4dGVuZENvb3JkaW5hdGUgPSBmdW5jdGlvbihleHRlbnQsIGNvb3JkaW5hdGUpIHtcbiAgaWYgKGNvb3JkaW5hdGVbMF0gPCBleHRlbnRbMF0pIHtcbiAgICBleHRlbnRbMF0gPSBjb29yZGluYXRlWzBdO1xuICB9XG4gIGlmIChjb29yZGluYXRlWzBdID4gZXh0ZW50WzJdKSB7XG4gICAgZXh0ZW50WzJdID0gY29vcmRpbmF0ZVswXTtcbiAgfVxuICBpZiAoY29vcmRpbmF0ZVsxXSA8IGV4dGVudFsxXSkge1xuICAgIGV4dGVudFsxXSA9IGNvb3JkaW5hdGVbMV07XG4gIH1cbiAgaWYgKGNvb3JkaW5hdGVbMV0gPiBleHRlbnRbM10pIHtcbiAgICBleHRlbnRbM10gPSBjb29yZGluYXRlWzFdO1xuICB9XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcGFyYW0ge0FycmF5LjxvbC5Db29yZGluYXRlPn0gY29vcmRpbmF0ZXMgQ29vcmRpbmF0ZXMuXG4gKiBAcmV0dXJuIHtvbC5FeHRlbnR9IEV4dGVudC5cbiAqL1xuX29sX2V4dGVudF8uZXh0ZW5kQ29vcmRpbmF0ZXMgPSBmdW5jdGlvbihleHRlbnQsIGNvb3JkaW5hdGVzKSB7XG4gIHZhciBpLCBpaTtcbiAgZm9yIChpID0gMCwgaWkgPSBjb29yZGluYXRlcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgX29sX2V4dGVudF8uZXh0ZW5kQ29vcmRpbmF0ZShleHRlbnQsIGNvb3JkaW5hdGVzW2ldKTtcbiAgfVxuICByZXR1cm4gZXh0ZW50O1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHBhcmFtIHtBcnJheS48bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgRW5kLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcmV0dXJuIHtvbC5FeHRlbnR9IEV4dGVudC5cbiAqL1xuX29sX2V4dGVudF8uZXh0ZW5kRmxhdENvb3JkaW5hdGVzID0gZnVuY3Rpb24oZXh0ZW50LCBmbGF0Q29vcmRpbmF0ZXMsIG9mZnNldCwgZW5kLCBzdHJpZGUpIHtcbiAgZm9yICg7IG9mZnNldCA8IGVuZDsgb2Zmc2V0ICs9IHN0cmlkZSkge1xuICAgIF9vbF9leHRlbnRfLmV4dGVuZFhZKFxuICAgICAgICBleHRlbnQsIGZsYXRDb29yZGluYXRlc1tvZmZzZXRdLCBmbGF0Q29vcmRpbmF0ZXNbb2Zmc2V0ICsgMV0pO1xuICB9XG4gIHJldHVybiBleHRlbnQ7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcGFyYW0ge0FycmF5LjxBcnJheS48b2wuQ29vcmRpbmF0ZT4+fSByaW5ncyBSaW5ncy5cbiAqIEByZXR1cm4ge29sLkV4dGVudH0gRXh0ZW50LlxuICovXG5fb2xfZXh0ZW50Xy5leHRlbmRSaW5ncyA9IGZ1bmN0aW9uKGV4dGVudCwgcmluZ3MpIHtcbiAgdmFyIGksIGlpO1xuICBmb3IgKGkgPSAwLCBpaSA9IHJpbmdzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICBfb2xfZXh0ZW50Xy5leHRlbmRDb29yZGluYXRlcyhleHRlbnQsIHJpbmdzW2ldKTtcbiAgfVxuICByZXR1cm4gZXh0ZW50O1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IHggWC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB5IFkuXG4gKi9cbl9vbF9leHRlbnRfLmV4dGVuZFhZID0gZnVuY3Rpb24oZXh0ZW50LCB4LCB5KSB7XG4gIGV4dGVudFswXSA9IE1hdGgubWluKGV4dGVudFswXSwgeCk7XG4gIGV4dGVudFsxXSA9IE1hdGgubWluKGV4dGVudFsxXSwgeSk7XG4gIGV4dGVudFsyXSA9IE1hdGgubWF4KGV4dGVudFsyXSwgeCk7XG4gIGV4dGVudFszXSA9IE1hdGgubWF4KGV4dGVudFszXSwgeSk7XG59O1xuXG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjYWxscyBgY2FsbGJhY2tgIGZvciBlYWNoIGNvcm5lciBvZiB0aGUgZXh0ZW50LiBJZiB0aGVcbiAqIGNhbGxiYWNrIHJldHVybnMgYSB0cnV0aHkgdmFsdWUgdGhlIGZ1bmN0aW9uIHJldHVybnMgdGhhdCB2YWx1ZVxuICogaW1tZWRpYXRlbHkuIE90aGVyd2lzZSB0aGUgZnVuY3Rpb24gcmV0dXJucyBgZmFsc2VgLlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHRoaXM6VCwgb2wuQ29vcmRpbmF0ZSk6IFN9IGNhbGxiYWNrIENhbGxiYWNrLlxuICogQHBhcmFtIHtUPX0gb3B0X3RoaXMgVmFsdWUgdG8gdXNlIGFzIGB0aGlzYCB3aGVuIGV4ZWN1dGluZyBgY2FsbGJhY2tgLlxuICogQHJldHVybiB7U3xib29sZWFufSBWYWx1ZS5cbiAqIEB0ZW1wbGF0ZSBTLCBUXG4gKi9cbl9vbF9leHRlbnRfLmZvckVhY2hDb3JuZXIgPSBmdW5jdGlvbihleHRlbnQsIGNhbGxiYWNrLCBvcHRfdGhpcykge1xuICB2YXIgdmFsO1xuICB2YWwgPSBjYWxsYmFjay5jYWxsKG9wdF90aGlzLCBfb2xfZXh0ZW50Xy5nZXRCb3R0b21MZWZ0KGV4dGVudCkpO1xuICBpZiAodmFsKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuICB2YWwgPSBjYWxsYmFjay5jYWxsKG9wdF90aGlzLCBfb2xfZXh0ZW50Xy5nZXRCb3R0b21SaWdodChleHRlbnQpKTtcbiAgaWYgKHZhbCkge1xuICAgIHJldHVybiB2YWw7XG4gIH1cbiAgdmFsID0gY2FsbGJhY2suY2FsbChvcHRfdGhpcywgX29sX2V4dGVudF8uZ2V0VG9wUmlnaHQoZXh0ZW50KSk7XG4gIGlmICh2YWwpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9XG4gIHZhbCA9IGNhbGxiYWNrLmNhbGwob3B0X3RoaXMsIF9vbF9leHRlbnRfLmdldFRvcExlZnQoZXh0ZW50KSk7XG4gIGlmICh2YWwpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIHNpemUgb2YgYW4gZXh0ZW50LlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFyZWEuXG4gKiBAYXBpXG4gKi9cbl9vbF9leHRlbnRfLmdldEFyZWEgPSBmdW5jdGlvbihleHRlbnQpIHtcbiAgdmFyIGFyZWEgPSAwO1xuICBpZiAoIV9vbF9leHRlbnRfLmlzRW1wdHkoZXh0ZW50KSkge1xuICAgIGFyZWEgPSBfb2xfZXh0ZW50Xy5nZXRXaWR0aChleHRlbnQpICogX29sX2V4dGVudF8uZ2V0SGVpZ2h0KGV4dGVudCk7XG4gIH1cbiAgcmV0dXJuIGFyZWE7XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBib3R0b20gbGVmdCBjb29yZGluYXRlIG9mIGFuIGV4dGVudC5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHJldHVybiB7b2wuQ29vcmRpbmF0ZX0gQm90dG9tIGxlZnQgY29vcmRpbmF0ZS5cbiAqIEBhcGlcbiAqL1xuX29sX2V4dGVudF8uZ2V0Qm90dG9tTGVmdCA9IGZ1bmN0aW9uKGV4dGVudCkge1xuICByZXR1cm4gW2V4dGVudFswXSwgZXh0ZW50WzFdXTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIGJvdHRvbSByaWdodCBjb29yZGluYXRlIG9mIGFuIGV4dGVudC5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHJldHVybiB7b2wuQ29vcmRpbmF0ZX0gQm90dG9tIHJpZ2h0IGNvb3JkaW5hdGUuXG4gKiBAYXBpXG4gKi9cbl9vbF9leHRlbnRfLmdldEJvdHRvbVJpZ2h0ID0gZnVuY3Rpb24oZXh0ZW50KSB7XG4gIHJldHVybiBbZXh0ZW50WzJdLCBleHRlbnRbMV1dO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgY2VudGVyIGNvb3JkaW5hdGUgb2YgYW4gZXh0ZW50LlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcmV0dXJuIHtvbC5Db29yZGluYXRlfSBDZW50ZXIuXG4gKiBAYXBpXG4gKi9cbl9vbF9leHRlbnRfLmdldENlbnRlciA9IGZ1bmN0aW9uKGV4dGVudCkge1xuICByZXR1cm4gWyhleHRlbnRbMF0gKyBleHRlbnRbMl0pIC8gMiwgKGV4dGVudFsxXSArIGV4dGVudFszXSkgLyAyXTtcbn07XG5cblxuLyoqXG4gKiBHZXQgYSBjb3JuZXIgY29vcmRpbmF0ZSBvZiBhbiBleHRlbnQuXG4gKiBAcGFyYW0ge29sLkV4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEBwYXJhbSB7b2wuZXh0ZW50LkNvcm5lcn0gY29ybmVyIENvcm5lci5cbiAqIEByZXR1cm4ge29sLkNvb3JkaW5hdGV9IENvcm5lciBjb29yZGluYXRlLlxuICovXG5fb2xfZXh0ZW50Xy5nZXRDb3JuZXIgPSBmdW5jdGlvbihleHRlbnQsIGNvcm5lcikge1xuICB2YXIgY29vcmRpbmF0ZTtcbiAgaWYgKGNvcm5lciA9PT0gX29sX2V4dGVudF9Db3JuZXJfLkJPVFRPTV9MRUZUKSB7XG4gICAgY29vcmRpbmF0ZSA9IF9vbF9leHRlbnRfLmdldEJvdHRvbUxlZnQoZXh0ZW50KTtcbiAgfSBlbHNlIGlmIChjb3JuZXIgPT09IF9vbF9leHRlbnRfQ29ybmVyXy5CT1RUT01fUklHSFQpIHtcbiAgICBjb29yZGluYXRlID0gX29sX2V4dGVudF8uZ2V0Qm90dG9tUmlnaHQoZXh0ZW50KTtcbiAgfSBlbHNlIGlmIChjb3JuZXIgPT09IF9vbF9leHRlbnRfQ29ybmVyXy5UT1BfTEVGVCkge1xuICAgIGNvb3JkaW5hdGUgPSBfb2xfZXh0ZW50Xy5nZXRUb3BMZWZ0KGV4dGVudCk7XG4gIH0gZWxzZSBpZiAoY29ybmVyID09PSBfb2xfZXh0ZW50X0Nvcm5lcl8uVE9QX1JJR0hUKSB7XG4gICAgY29vcmRpbmF0ZSA9IF9vbF9leHRlbnRfLmdldFRvcFJpZ2h0KGV4dGVudCk7XG4gIH0gZWxzZSB7XG4gICAgX29sX2Fzc2VydHNfLmFzc2VydChmYWxzZSwgMTMpOyAvLyBJbnZhbGlkIGNvcm5lclxuICB9XG4gIHJldHVybiAvKiogQHR5cGUgeyFvbC5Db29yZGluYXRlfSAqLyAoY29vcmRpbmF0ZSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudDEgRXh0ZW50IDEuXG4gKiBAcGFyYW0ge29sLkV4dGVudH0gZXh0ZW50MiBFeHRlbnQgMi5cbiAqIEByZXR1cm4ge251bWJlcn0gRW5sYXJnZWQgYXJlYS5cbiAqL1xuX29sX2V4dGVudF8uZ2V0RW5sYXJnZWRBcmVhID0gZnVuY3Rpb24oZXh0ZW50MSwgZXh0ZW50Mikge1xuICB2YXIgbWluWCA9IE1hdGgubWluKGV4dGVudDFbMF0sIGV4dGVudDJbMF0pO1xuICB2YXIgbWluWSA9IE1hdGgubWluKGV4dGVudDFbMV0sIGV4dGVudDJbMV0pO1xuICB2YXIgbWF4WCA9IE1hdGgubWF4KGV4dGVudDFbMl0sIGV4dGVudDJbMl0pO1xuICB2YXIgbWF4WSA9IE1hdGgubWF4KGV4dGVudDFbM10sIGV4dGVudDJbM10pO1xuICByZXR1cm4gKG1heFggLSBtaW5YKSAqIChtYXhZIC0gbWluWSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtvbC5Db29yZGluYXRlfSBjZW50ZXIgQ2VudGVyLlxuICogQHBhcmFtIHtudW1iZXJ9IHJlc29sdXRpb24gUmVzb2x1dGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSByb3RhdGlvbiBSb3RhdGlvbi5cbiAqIEBwYXJhbSB7b2wuU2l6ZX0gc2l6ZSBTaXplLlxuICogQHBhcmFtIHtvbC5FeHRlbnQ9fSBvcHRfZXh0ZW50IERlc3RpbmF0aW9uIGV4dGVudC5cbiAqIEByZXR1cm4ge29sLkV4dGVudH0gRXh0ZW50LlxuICovXG5fb2xfZXh0ZW50Xy5nZXRGb3JWaWV3QW5kU2l6ZSA9IGZ1bmN0aW9uKGNlbnRlciwgcmVzb2x1dGlvbiwgcm90YXRpb24sIHNpemUsIG9wdF9leHRlbnQpIHtcbiAgdmFyIGR4ID0gcmVzb2x1dGlvbiAqIHNpemVbMF0gLyAyO1xuICB2YXIgZHkgPSByZXNvbHV0aW9uICogc2l6ZVsxXSAvIDI7XG4gIHZhciBjb3NSb3RhdGlvbiA9IE1hdGguY29zKHJvdGF0aW9uKTtcbiAgdmFyIHNpblJvdGF0aW9uID0gTWF0aC5zaW4ocm90YXRpb24pO1xuICB2YXIgeENvcyA9IGR4ICogY29zUm90YXRpb247XG4gIHZhciB4U2luID0gZHggKiBzaW5Sb3RhdGlvbjtcbiAgdmFyIHlDb3MgPSBkeSAqIGNvc1JvdGF0aW9uO1xuICB2YXIgeVNpbiA9IGR5ICogc2luUm90YXRpb247XG4gIHZhciB4ID0gY2VudGVyWzBdO1xuICB2YXIgeSA9IGNlbnRlclsxXTtcbiAgdmFyIHgwID0geCAtIHhDb3MgKyB5U2luO1xuICB2YXIgeDEgPSB4IC0geENvcyAtIHlTaW47XG4gIHZhciB4MiA9IHggKyB4Q29zIC0geVNpbjtcbiAgdmFyIHgzID0geCArIHhDb3MgKyB5U2luO1xuICB2YXIgeTAgPSB5IC0geFNpbiAtIHlDb3M7XG4gIHZhciB5MSA9IHkgLSB4U2luICsgeUNvcztcbiAgdmFyIHkyID0geSArIHhTaW4gKyB5Q29zO1xuICB2YXIgeTMgPSB5ICsgeFNpbiAtIHlDb3M7XG4gIHJldHVybiBfb2xfZXh0ZW50Xy5jcmVhdGVPclVwZGF0ZShcbiAgICAgIE1hdGgubWluKHgwLCB4MSwgeDIsIHgzKSwgTWF0aC5taW4oeTAsIHkxLCB5MiwgeTMpLFxuICAgICAgTWF0aC5tYXgoeDAsIHgxLCB4MiwgeDMpLCBNYXRoLm1heCh5MCwgeTEsIHkyLCB5MyksXG4gICAgICBvcHRfZXh0ZW50KTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIGhlaWdodCBvZiBhbiBleHRlbnQuXG4gKiBAcGFyYW0ge29sLkV4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEByZXR1cm4ge251bWJlcn0gSGVpZ2h0LlxuICogQGFwaVxuICovXG5fb2xfZXh0ZW50Xy5nZXRIZWlnaHQgPSBmdW5jdGlvbihleHRlbnQpIHtcbiAgcmV0dXJuIGV4dGVudFszXSAtIGV4dGVudFsxXTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge29sLkV4dGVudH0gZXh0ZW50MSBFeHRlbnQgMS5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQyIEV4dGVudCAyLlxuICogQHJldHVybiB7bnVtYmVyfSBJbnRlcnNlY3Rpb24gYXJlYS5cbiAqL1xuX29sX2V4dGVudF8uZ2V0SW50ZXJzZWN0aW9uQXJlYSA9IGZ1bmN0aW9uKGV4dGVudDEsIGV4dGVudDIpIHtcbiAgdmFyIGludGVyc2VjdGlvbiA9IF9vbF9leHRlbnRfLmdldEludGVyc2VjdGlvbihleHRlbnQxLCBleHRlbnQyKTtcbiAgcmV0dXJuIF9vbF9leHRlbnRfLmdldEFyZWEoaW50ZXJzZWN0aW9uKTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIGludGVyc2VjdGlvbiBvZiB0d28gZXh0ZW50cy5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQxIEV4dGVudCAxLlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudDIgRXh0ZW50IDIuXG4gKiBAcGFyYW0ge29sLkV4dGVudD19IG9wdF9leHRlbnQgT3B0aW9uYWwgZXh0ZW50IHRvIHBvcHVsYXRlIHdpdGggaW50ZXJzZWN0aW9uLlxuICogQHJldHVybiB7b2wuRXh0ZW50fSBJbnRlcnNlY3RpbmcgZXh0ZW50LlxuICogQGFwaVxuICovXG5fb2xfZXh0ZW50Xy5nZXRJbnRlcnNlY3Rpb24gPSBmdW5jdGlvbihleHRlbnQxLCBleHRlbnQyLCBvcHRfZXh0ZW50KSB7XG4gIHZhciBpbnRlcnNlY3Rpb24gPSBvcHRfZXh0ZW50ID8gb3B0X2V4dGVudCA6IF9vbF9leHRlbnRfLmNyZWF0ZUVtcHR5KCk7XG4gIGlmIChfb2xfZXh0ZW50Xy5pbnRlcnNlY3RzKGV4dGVudDEsIGV4dGVudDIpKSB7XG4gICAgaWYgKGV4dGVudDFbMF0gPiBleHRlbnQyWzBdKSB7XG4gICAgICBpbnRlcnNlY3Rpb25bMF0gPSBleHRlbnQxWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnRlcnNlY3Rpb25bMF0gPSBleHRlbnQyWzBdO1xuICAgIH1cbiAgICBpZiAoZXh0ZW50MVsxXSA+IGV4dGVudDJbMV0pIHtcbiAgICAgIGludGVyc2VjdGlvblsxXSA9IGV4dGVudDFbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGludGVyc2VjdGlvblsxXSA9IGV4dGVudDJbMV07XG4gICAgfVxuICAgIGlmIChleHRlbnQxWzJdIDwgZXh0ZW50MlsyXSkge1xuICAgICAgaW50ZXJzZWN0aW9uWzJdID0gZXh0ZW50MVsyXTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW50ZXJzZWN0aW9uWzJdID0gZXh0ZW50MlsyXTtcbiAgICB9XG4gICAgaWYgKGV4dGVudDFbM10gPCBleHRlbnQyWzNdKSB7XG4gICAgICBpbnRlcnNlY3Rpb25bM10gPSBleHRlbnQxWzNdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnRlcnNlY3Rpb25bM10gPSBleHRlbnQyWzNdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaW50ZXJzZWN0aW9uO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHJldHVybiB7bnVtYmVyfSBNYXJnaW4uXG4gKi9cbl9vbF9leHRlbnRfLmdldE1hcmdpbiA9IGZ1bmN0aW9uKGV4dGVudCkge1xuICByZXR1cm4gX29sX2V4dGVudF8uZ2V0V2lkdGgoZXh0ZW50KSArIF9vbF9leHRlbnRfLmdldEhlaWdodChleHRlbnQpO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgc2l6ZSAod2lkdGgsIGhlaWdodCkgb2YgYW4gZXh0ZW50LlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudCBUaGUgZXh0ZW50LlxuICogQHJldHVybiB7b2wuU2l6ZX0gVGhlIGV4dGVudCBzaXplLlxuICogQGFwaVxuICovXG5fb2xfZXh0ZW50Xy5nZXRTaXplID0gZnVuY3Rpb24oZXh0ZW50KSB7XG4gIHJldHVybiBbZXh0ZW50WzJdIC0gZXh0ZW50WzBdLCBleHRlbnRbM10gLSBleHRlbnRbMV1dO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgdG9wIGxlZnQgY29vcmRpbmF0ZSBvZiBhbiBleHRlbnQuXG4gKiBAcGFyYW0ge29sLkV4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEByZXR1cm4ge29sLkNvb3JkaW5hdGV9IFRvcCBsZWZ0IGNvb3JkaW5hdGUuXG4gKiBAYXBpXG4gKi9cbl9vbF9leHRlbnRfLmdldFRvcExlZnQgPSBmdW5jdGlvbihleHRlbnQpIHtcbiAgcmV0dXJuIFtleHRlbnRbMF0sIGV4dGVudFszXV07XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSB0b3AgcmlnaHQgY29vcmRpbmF0ZSBvZiBhbiBleHRlbnQuXG4gKiBAcGFyYW0ge29sLkV4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEByZXR1cm4ge29sLkNvb3JkaW5hdGV9IFRvcCByaWdodCBjb29yZGluYXRlLlxuICogQGFwaVxuICovXG5fb2xfZXh0ZW50Xy5nZXRUb3BSaWdodCA9IGZ1bmN0aW9uKGV4dGVudCkge1xuICByZXR1cm4gW2V4dGVudFsyXSwgZXh0ZW50WzNdXTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIHdpZHRoIG9mIGFuIGV4dGVudC5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHJldHVybiB7bnVtYmVyfSBXaWR0aC5cbiAqIEBhcGlcbiAqL1xuX29sX2V4dGVudF8uZ2V0V2lkdGggPSBmdW5jdGlvbihleHRlbnQpIHtcbiAgcmV0dXJuIGV4dGVudFsyXSAtIGV4dGVudFswXTtcbn07XG5cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgb25lIGV4dGVudCBpbnRlcnNlY3RzIGFub3RoZXIuXG4gKiBAcGFyYW0ge29sLkV4dGVudH0gZXh0ZW50MSBFeHRlbnQgMS5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQyIEV4dGVudC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRoZSB0d28gZXh0ZW50cyBpbnRlcnNlY3QuXG4gKiBAYXBpXG4gKi9cbl9vbF9leHRlbnRfLmludGVyc2VjdHMgPSBmdW5jdGlvbihleHRlbnQxLCBleHRlbnQyKSB7XG4gIHJldHVybiBleHRlbnQxWzBdIDw9IGV4dGVudDJbMl0gJiZcbiAgICAgIGV4dGVudDFbMl0gPj0gZXh0ZW50MlswXSAmJlxuICAgICAgZXh0ZW50MVsxXSA8PSBleHRlbnQyWzNdICYmXG4gICAgICBleHRlbnQxWzNdID49IGV4dGVudDJbMV07XG59O1xuXG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGFuIGV4dGVudCBpcyBlbXB0eS5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHJldHVybiB7Ym9vbGVhbn0gSXMgZW1wdHkuXG4gKiBAYXBpXG4gKi9cbl9vbF9leHRlbnRfLmlzRW1wdHkgPSBmdW5jdGlvbihleHRlbnQpIHtcbiAgcmV0dXJuIGV4dGVudFsyXSA8IGV4dGVudFswXSB8fCBleHRlbnRbM10gPCBleHRlbnRbMV07XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcGFyYW0ge29sLkV4dGVudD19IG9wdF9leHRlbnQgRXh0ZW50LlxuICogQHJldHVybiB7b2wuRXh0ZW50fSBFeHRlbnQuXG4gKi9cbl9vbF9leHRlbnRfLnJldHVybk9yVXBkYXRlID0gZnVuY3Rpb24oZXh0ZW50LCBvcHRfZXh0ZW50KSB7XG4gIGlmIChvcHRfZXh0ZW50KSB7XG4gICAgb3B0X2V4dGVudFswXSA9IGV4dGVudFswXTtcbiAgICBvcHRfZXh0ZW50WzFdID0gZXh0ZW50WzFdO1xuICAgIG9wdF9leHRlbnRbMl0gPSBleHRlbnRbMl07XG4gICAgb3B0X2V4dGVudFszXSA9IGV4dGVudFszXTtcbiAgICByZXR1cm4gb3B0X2V4dGVudDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXh0ZW50O1xuICB9XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVmFsdWUuXG4gKi9cbl9vbF9leHRlbnRfLnNjYWxlRnJvbUNlbnRlciA9IGZ1bmN0aW9uKGV4dGVudCwgdmFsdWUpIHtcbiAgdmFyIGRlbHRhWCA9ICgoZXh0ZW50WzJdIC0gZXh0ZW50WzBdKSAvIDIpICogKHZhbHVlIC0gMSk7XG4gIHZhciBkZWx0YVkgPSAoKGV4dGVudFszXSAtIGV4dGVudFsxXSkgLyAyKSAqICh2YWx1ZSAtIDEpO1xuICBleHRlbnRbMF0gLT0gZGVsdGFYO1xuICBleHRlbnRbMl0gKz0gZGVsdGFYO1xuICBleHRlbnRbMV0gLT0gZGVsdGFZO1xuICBleHRlbnRbM10gKz0gZGVsdGFZO1xufTtcblxuXG4vKipcbiAqIERldGVybWluZSBpZiB0aGUgc2VnbWVudCBiZXR3ZWVuIHR3byBjb29yZGluYXRlcyBpbnRlcnNlY3RzIChjcm9zc2VzLFxuICogdG91Y2hlcywgb3IgaXMgY29udGFpbmVkIGJ5KSB0aGUgcHJvdmlkZWQgZXh0ZW50LlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudCBUaGUgZXh0ZW50LlxuICogQHBhcmFtIHtvbC5Db29yZGluYXRlfSBzdGFydCBTZWdtZW50IHN0YXJ0IGNvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge29sLkNvb3JkaW5hdGV9IGVuZCBTZWdtZW50IGVuZCBjb29yZGluYXRlLlxuICogQHJldHVybiB7Ym9vbGVhbn0gVGhlIHNlZ21lbnQgaW50ZXJzZWN0cyB0aGUgZXh0ZW50LlxuICovXG5fb2xfZXh0ZW50Xy5pbnRlcnNlY3RzU2VnbWVudCA9IGZ1bmN0aW9uKGV4dGVudCwgc3RhcnQsIGVuZCkge1xuICB2YXIgaW50ZXJzZWN0cyA9IGZhbHNlO1xuICB2YXIgc3RhcnRSZWwgPSBfb2xfZXh0ZW50Xy5jb29yZGluYXRlUmVsYXRpb25zaGlwKGV4dGVudCwgc3RhcnQpO1xuICB2YXIgZW5kUmVsID0gX29sX2V4dGVudF8uY29vcmRpbmF0ZVJlbGF0aW9uc2hpcChleHRlbnQsIGVuZCk7XG4gIGlmIChzdGFydFJlbCA9PT0gX29sX2V4dGVudF9SZWxhdGlvbnNoaXBfLklOVEVSU0VDVElORyB8fFxuICAgICAgZW5kUmVsID09PSBfb2xfZXh0ZW50X1JlbGF0aW9uc2hpcF8uSU5URVJTRUNUSU5HKSB7XG4gICAgaW50ZXJzZWN0cyA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1pblggPSBleHRlbnRbMF07XG4gICAgdmFyIG1pblkgPSBleHRlbnRbMV07XG4gICAgdmFyIG1heFggPSBleHRlbnRbMl07XG4gICAgdmFyIG1heFkgPSBleHRlbnRbM107XG4gICAgdmFyIHN0YXJ0WCA9IHN0YXJ0WzBdO1xuICAgIHZhciBzdGFydFkgPSBzdGFydFsxXTtcbiAgICB2YXIgZW5kWCA9IGVuZFswXTtcbiAgICB2YXIgZW5kWSA9IGVuZFsxXTtcbiAgICB2YXIgc2xvcGUgPSAoZW5kWSAtIHN0YXJ0WSkgLyAoZW5kWCAtIHN0YXJ0WCk7XG4gICAgdmFyIHgsIHk7XG4gICAgaWYgKCEhKGVuZFJlbCAmIF9vbF9leHRlbnRfUmVsYXRpb25zaGlwXy5BQk9WRSkgJiZcbiAgICAgICAgIShzdGFydFJlbCAmIF9vbF9leHRlbnRfUmVsYXRpb25zaGlwXy5BQk9WRSkpIHtcbiAgICAgIC8vIHBvdGVudGlhbGx5IGludGVyc2VjdHMgdG9wXG4gICAgICB4ID0gZW5kWCAtICgoZW5kWSAtIG1heFkpIC8gc2xvcGUpO1xuICAgICAgaW50ZXJzZWN0cyA9IHggPj0gbWluWCAmJiB4IDw9IG1heFg7XG4gICAgfVxuICAgIGlmICghaW50ZXJzZWN0cyAmJiAhIShlbmRSZWwgJiBfb2xfZXh0ZW50X1JlbGF0aW9uc2hpcF8uUklHSFQpICYmXG4gICAgICAgICEoc3RhcnRSZWwgJiBfb2xfZXh0ZW50X1JlbGF0aW9uc2hpcF8uUklHSFQpKSB7XG4gICAgICAvLyBwb3RlbnRpYWxseSBpbnRlcnNlY3RzIHJpZ2h0XG4gICAgICB5ID0gZW5kWSAtICgoZW5kWCAtIG1heFgpICogc2xvcGUpO1xuICAgICAgaW50ZXJzZWN0cyA9IHkgPj0gbWluWSAmJiB5IDw9IG1heFk7XG4gICAgfVxuICAgIGlmICghaW50ZXJzZWN0cyAmJiAhIShlbmRSZWwgJiBfb2xfZXh0ZW50X1JlbGF0aW9uc2hpcF8uQkVMT1cpICYmXG4gICAgICAgICEoc3RhcnRSZWwgJiBfb2xfZXh0ZW50X1JlbGF0aW9uc2hpcF8uQkVMT1cpKSB7XG4gICAgICAvLyBwb3RlbnRpYWxseSBpbnRlcnNlY3RzIGJvdHRvbVxuICAgICAgeCA9IGVuZFggLSAoKGVuZFkgLSBtaW5ZKSAvIHNsb3BlKTtcbiAgICAgIGludGVyc2VjdHMgPSB4ID49IG1pblggJiYgeCA8PSBtYXhYO1xuICAgIH1cbiAgICBpZiAoIWludGVyc2VjdHMgJiYgISEoZW5kUmVsICYgX29sX2V4dGVudF9SZWxhdGlvbnNoaXBfLkxFRlQpICYmXG4gICAgICAgICEoc3RhcnRSZWwgJiBfb2xfZXh0ZW50X1JlbGF0aW9uc2hpcF8uTEVGVCkpIHtcbiAgICAgIC8vIHBvdGVudGlhbGx5IGludGVyc2VjdHMgbGVmdFxuICAgICAgeSA9IGVuZFkgLSAoKGVuZFggLSBtaW5YKSAqIHNsb3BlKTtcbiAgICAgIGludGVyc2VjdHMgPSB5ID49IG1pblkgJiYgeSA8PSBtYXhZO1xuICAgIH1cblxuICB9XG4gIHJldHVybiBpbnRlcnNlY3RzO1xufTtcblxuXG4vKipcbiAqIEFwcGx5IGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHRvIHRoZSBleHRlbnQuXG4gKiBAcGFyYW0ge29sLkV4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEBwYXJhbSB7b2wuVHJhbnNmb3JtRnVuY3Rpb259IHRyYW5zZm9ybUZuIFRyYW5zZm9ybSBmdW5jdGlvbi4gIENhbGxlZCB3aXRoXG4gKiBbbWluWCwgbWluWSwgbWF4WCwgbWF4WV0gZXh0ZW50IGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtvbC5FeHRlbnQ9fSBvcHRfZXh0ZW50IERlc3RpbmF0aW9uIGV4dGVudC5cbiAqIEByZXR1cm4ge29sLkV4dGVudH0gRXh0ZW50LlxuICogQGFwaVxuICovXG5fb2xfZXh0ZW50Xy5hcHBseVRyYW5zZm9ybSA9IGZ1bmN0aW9uKGV4dGVudCwgdHJhbnNmb3JtRm4sIG9wdF9leHRlbnQpIHtcbiAgdmFyIGNvb3JkaW5hdGVzID0gW1xuICAgIGV4dGVudFswXSwgZXh0ZW50WzFdLFxuICAgIGV4dGVudFswXSwgZXh0ZW50WzNdLFxuICAgIGV4dGVudFsyXSwgZXh0ZW50WzFdLFxuICAgIGV4dGVudFsyXSwgZXh0ZW50WzNdXG4gIF07XG4gIHRyYW5zZm9ybUZuKGNvb3JkaW5hdGVzLCBjb29yZGluYXRlcywgMik7XG4gIHZhciB4cyA9IFtjb29yZGluYXRlc1swXSwgY29vcmRpbmF0ZXNbMl0sIGNvb3JkaW5hdGVzWzRdLCBjb29yZGluYXRlc1s2XV07XG4gIHZhciB5cyA9IFtjb29yZGluYXRlc1sxXSwgY29vcmRpbmF0ZXNbM10sIGNvb3JkaW5hdGVzWzVdLCBjb29yZGluYXRlc1s3XV07XG4gIHJldHVybiBfb2xfZXh0ZW50Xy5ib3VuZGluZ0V4dGVudFhZc18oeHMsIHlzLCBvcHRfZXh0ZW50KTtcbn07XG5leHBvcnQgZGVmYXVsdCBfb2xfZXh0ZW50XztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL2V4dGVudC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgX29sXyBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCBfb2xfU3BoZXJlXyBmcm9tICcuL3NwaGVyZS5qcyc7XG5pbXBvcnQgX29sX2V4dGVudF8gZnJvbSAnLi9leHRlbnQuanMnO1xuaW1wb3J0IF9vbF9tYXRoXyBmcm9tICcuL21hdGguanMnO1xuaW1wb3J0IF9vbF9wcm9qX0VQU0czODU3XyBmcm9tICcuL3Byb2ovZXBzZzM4NTcuanMnO1xuaW1wb3J0IF9vbF9wcm9qX0VQU0c0MzI2XyBmcm9tICcuL3Byb2ovZXBzZzQzMjYuanMnO1xuaW1wb3J0IF9vbF9wcm9qX1Byb2plY3Rpb25fIGZyb20gJy4vcHJvai9wcm9qZWN0aW9uLmpzJztcbmltcG9ydCBfb2xfcHJval9Vbml0c18gZnJvbSAnLi9wcm9qL3VuaXRzLmpzJztcbmltcG9ydCBfb2xfcHJval9wcm9qNF8gZnJvbSAnLi9wcm9qL3Byb2o0LmpzJztcbmltcG9ydCBfb2xfcHJval9wcm9qZWN0aW9uc18gZnJvbSAnLi9wcm9qL3Byb2plY3Rpb25zLmpzJztcbmltcG9ydCBfb2xfcHJval90cmFuc2Zvcm1zXyBmcm9tICcuL3Byb2ovdHJhbnNmb3Jtcy5qcyc7XG52YXIgX29sX3Byb2pfID0ge307XG5cblxuLyoqXG4gKiBNZXRlcnMgcGVyIHVuaXQgbG9va3VwIHRhYmxlLlxuICogQGNvbnN0XG4gKiBAdHlwZSB7T2JqZWN0LjxvbC5wcm9qLlVuaXRzLCBudW1iZXI+fVxuICogQGFwaVxuICovXG5fb2xfcHJval8uTUVURVJTX1BFUl9VTklUID0gX29sX3Byb2pfVW5pdHNfLk1FVEVSU19QRVJfVU5JVDtcblxuXG4vKipcbiAqIEEgcGxhY2UgdG8gc3RvcmUgdGhlIG1lYW4gcmFkaXVzIG9mIHRoZSBFYXJ0aC5cbiAqIEBwcml2YXRlXG4gKiBAdHlwZSB7b2wuU3BoZXJlfVxuICovXG5fb2xfcHJval8uU1BIRVJFXyA9IG5ldyBfb2xfU3BoZXJlXyhfb2xfU3BoZXJlXy5ERUZBVUxUX1JBRElVUyk7XG5cblxuaWYgKF9vbF8uRU5BQkxFX1BST0o0SlMpIHtcbiAgLyoqXG4gICAqIFJlZ2lzdGVyIHByb2o0LiBJZiBub3QgZXhwbGljaXRseSByZWdpc3RlcmVkLCBpdCB3aWxsIGJlIGFzc3VtZWQgdGhhdFxuICAgKiBwcm9qNGpzIHdpbGwgYmUgbG9hZGVkIGluIHRoZSBnbG9iYWwgbmFtZXNwYWNlLiBGb3IgZXhhbXBsZSBpbiBhXG4gICAqIGJyb3dzZXJpZnkgRVM2IGVudmlyb25tZW50IHlvdSBjb3VsZCB1c2U6XG4gICAqXG4gICAqICAgICBpbXBvcnQgb2wgZnJvbSAnb3BlbmxheWVycyc7XG4gICAqICAgICBpbXBvcnQgcHJvajQgZnJvbSAncHJvajQnO1xuICAgKiAgICAgb2wucHJvai5zZXRQcm9qNChwcm9qNCk7XG4gICAqXG4gICAqIEBwYXJhbSB7UHJvajR9IHByb2o0IFByb2o0LlxuICAgKiBAYXBpXG4gICAqL1xuICBfb2xfcHJval8uc2V0UHJvajQgPSBmdW5jdGlvbihwcm9qNCkge1xuICAgIF9vbF9wcm9qX3Byb2o0Xy5zZXQocHJvajQpO1xuICB9O1xufVxuXG5cbi8qKlxuICogR2V0IHRoZSByZXNvbHV0aW9uIG9mIHRoZSBwb2ludCBpbiBkZWdyZWVzIG9yIGRpc3RhbmNlIHVuaXRzLlxuICogRm9yIHByb2plY3Rpb25zIHdpdGggZGVncmVlcyBhcyB0aGUgdW5pdCB0aGlzIHdpbGwgc2ltcGx5IHJldHVybiB0aGVcbiAqIHByb3ZpZGVkIHJlc29sdXRpb24uIEZvciBvdGhlciBwcm9qZWN0aW9ucyB0aGUgcG9pbnQgcmVzb2x1dGlvbiBpc1xuICogYnkgZGVmYXVsdCBlc3RpbWF0ZWQgYnkgdHJhbnNmb3JtaW5nIHRoZSAncG9pbnQnIHBpeGVsIHRvIEVQU0c6NDMyNixcbiAqIG1lYXN1cmluZyBpdHMgd2lkdGggYW5kIGhlaWdodCBvbiB0aGUgbm9ybWFsIHNwaGVyZSxcbiAqIGFuZCB0YWtpbmcgdGhlIGF2ZXJhZ2Ugb2YgdGhlIHdpZHRoIGFuZCBoZWlnaHQuXG4gKiBBIGN1c3RvbSBmdW5jdGlvbiBjYW4gYmUgcHJvdmlkZWQgZm9yIGEgc3BlY2lmaWMgcHJvamVjdGlvbiwgZWl0aGVyXG4gKiBieSBzZXR0aW5nIHRoZSBgZ2V0UG9pbnRSZXNvbHV0aW9uYCBvcHRpb24gaW4gdGhlXG4gKiB7QGxpbmsgb2wucHJvai5Qcm9qZWN0aW9ufSBjb25zdHJ1Y3RvciBvciBieSB1c2luZ1xuICoge0BsaW5rIG9sLnByb2ouUHJvamVjdGlvbiNzZXRHZXRQb2ludFJlc29sdXRpb259IHRvIGNoYW5nZSBhbiBleGlzdGluZ1xuICogcHJvamVjdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge29sLlByb2plY3Rpb25MaWtlfSBwcm9qZWN0aW9uIFRoZSBwcm9qZWN0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IHJlc29sdXRpb24gTm9taW5hbCByZXNvbHV0aW9uIGluIHByb2plY3Rpb24gdW5pdHMuXG4gKiBAcGFyYW0ge29sLkNvb3JkaW5hdGV9IHBvaW50IFBvaW50IHRvIGZpbmQgYWRqdXN0ZWQgcmVzb2x1dGlvbiBhdC5cbiAqIEBwYXJhbSB7b2wucHJvai5Vbml0cz19IG9wdF91bml0cyBVbml0cyB0byBnZXQgdGhlIHBvaW50IHJlc29sdXRpb24gaW4uXG4gKiBEZWZhdWx0IGlzIHRoZSBwcm9qZWN0aW9uJ3MgdW5pdHMuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFBvaW50IHJlc29sdXRpb24uXG4gKiBAYXBpXG4gKi9cbl9vbF9wcm9qXy5nZXRQb2ludFJlc29sdXRpb24gPSBmdW5jdGlvbihwcm9qZWN0aW9uLCByZXNvbHV0aW9uLCBwb2ludCwgb3B0X3VuaXRzKSB7XG4gIHByb2plY3Rpb24gPSBfb2xfcHJval8uZ2V0KHByb2plY3Rpb24pO1xuICB2YXIgcG9pbnRSZXNvbHV0aW9uO1xuICB2YXIgZ2V0dGVyID0gcHJvamVjdGlvbi5nZXRQb2ludFJlc29sdXRpb25GdW5jKCk7XG4gIGlmIChnZXR0ZXIpIHtcbiAgICBwb2ludFJlc29sdXRpb24gPSBnZXR0ZXIocmVzb2x1dGlvbiwgcG9pbnQpO1xuICB9IGVsc2Uge1xuICAgIHZhciB1bml0cyA9IHByb2plY3Rpb24uZ2V0VW5pdHMoKTtcbiAgICBpZiAodW5pdHMgPT0gX29sX3Byb2pfVW5pdHNfLkRFR1JFRVMgJiYgIW9wdF91bml0cyB8fCBvcHRfdW5pdHMgPT0gX29sX3Byb2pfVW5pdHNfLkRFR1JFRVMpIHtcbiAgICAgIHBvaW50UmVzb2x1dGlvbiA9IHJlc29sdXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEVzdGltYXRlIHBvaW50IHJlc29sdXRpb24gYnkgdHJhbnNmb3JtaW5nIHRoZSBjZW50ZXIgcGl4ZWwgdG8gRVBTRzo0MzI2LFxuICAgICAgLy8gbWVhc3VyaW5nIGl0cyB3aWR0aCBhbmQgaGVpZ2h0IG9uIHRoZSBub3JtYWwgc3BoZXJlLCBhbmQgdGFraW5nIHRoZVxuICAgICAgLy8gYXZlcmFnZSBvZiB0aGUgd2lkdGggYW5kIGhlaWdodC5cbiAgICAgIHZhciB0b0VQU0c0MzI2ID0gX29sX3Byb2pfLmdldFRyYW5zZm9ybUZyb21Qcm9qZWN0aW9ucyhwcm9qZWN0aW9uLCBfb2xfcHJval8uZ2V0KCdFUFNHOjQzMjYnKSk7XG4gICAgICB2YXIgdmVydGljZXMgPSBbXG4gICAgICAgIHBvaW50WzBdIC0gcmVzb2x1dGlvbiAvIDIsIHBvaW50WzFdLFxuICAgICAgICBwb2ludFswXSArIHJlc29sdXRpb24gLyAyLCBwb2ludFsxXSxcbiAgICAgICAgcG9pbnRbMF0sIHBvaW50WzFdIC0gcmVzb2x1dGlvbiAvIDIsXG4gICAgICAgIHBvaW50WzBdLCBwb2ludFsxXSArIHJlc29sdXRpb24gLyAyXG4gICAgICBdO1xuICAgICAgdmVydGljZXMgPSB0b0VQU0c0MzI2KHZlcnRpY2VzLCB2ZXJ0aWNlcywgMik7XG4gICAgICB2YXIgd2lkdGggPSBfb2xfcHJval8uU1BIRVJFXy5oYXZlcnNpbmVEaXN0YW5jZShcbiAgICAgICAgICB2ZXJ0aWNlcy5zbGljZSgwLCAyKSwgdmVydGljZXMuc2xpY2UoMiwgNCkpO1xuICAgICAgdmFyIGhlaWdodCA9IF9vbF9wcm9qXy5TUEhFUkVfLmhhdmVyc2luZURpc3RhbmNlKFxuICAgICAgICAgIHZlcnRpY2VzLnNsaWNlKDQsIDYpLCB2ZXJ0aWNlcy5zbGljZSg2LCA4KSk7XG4gICAgICBwb2ludFJlc29sdXRpb24gPSAod2lkdGggKyBoZWlnaHQpIC8gMjtcbiAgICAgIHZhciBtZXRlcnNQZXJVbml0ID0gb3B0X3VuaXRzID9cbiAgICAgICAgX29sX3Byb2pfVW5pdHNfLk1FVEVSU19QRVJfVU5JVFtvcHRfdW5pdHNdIDpcbiAgICAgICAgcHJvamVjdGlvbi5nZXRNZXRlcnNQZXJVbml0KCk7XG4gICAgICBpZiAobWV0ZXJzUGVyVW5pdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBvaW50UmVzb2x1dGlvbiAvPSBtZXRlcnNQZXJVbml0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcG9pbnRSZXNvbHV0aW9uO1xufTtcblxuXG4vKipcbiAqIFJlZ2lzdGVycyB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbnMgdGhhdCBkb24ndCBhbHRlciBjb29yZGluYXRlcy4gVGhvc2UgYWxsb3dcbiAqIHRvIHRyYW5zZm9ybSBiZXR3ZWVuIHByb2plY3Rpb25zIHdpdGggZXF1YWwgbWVhbmluZy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5LjxvbC5wcm9qLlByb2plY3Rpb24+fSBwcm9qZWN0aW9ucyBQcm9qZWN0aW9ucy5cbiAqIEBhcGlcbiAqL1xuX29sX3Byb2pfLmFkZEVxdWl2YWxlbnRQcm9qZWN0aW9ucyA9IGZ1bmN0aW9uKHByb2plY3Rpb25zKSB7XG4gIF9vbF9wcm9qXy5hZGRQcm9qZWN0aW9ucyhwcm9qZWN0aW9ucyk7XG4gIHByb2plY3Rpb25zLmZvckVhY2goZnVuY3Rpb24oc291cmNlKSB7XG4gICAgcHJvamVjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihkZXN0aW5hdGlvbikge1xuICAgICAgaWYgKHNvdXJjZSAhPT0gZGVzdGluYXRpb24pIHtcbiAgICAgICAgX29sX3Byb2pfdHJhbnNmb3Jtc18uYWRkKHNvdXJjZSwgZGVzdGluYXRpb24sIF9vbF9wcm9qXy5jbG9uZVRyYW5zZm9ybSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuXG4vKipcbiAqIFJlZ2lzdGVycyB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbnMgdG8gY29udmVydCBjb29yZGluYXRlcyBpbiBhbnkgcHJvamVjdGlvblxuICogaW4gcHJvamVjdGlvbjEgdG8gYW55IHByb2plY3Rpb24gaW4gcHJvamVjdGlvbjIuXG4gKlxuICogQHBhcmFtIHtBcnJheS48b2wucHJvai5Qcm9qZWN0aW9uPn0gcHJvamVjdGlvbnMxIFByb2plY3Rpb25zIHdpdGggZXF1YWxcbiAqICAgICBtZWFuaW5nLlxuICogQHBhcmFtIHtBcnJheS48b2wucHJvai5Qcm9qZWN0aW9uPn0gcHJvamVjdGlvbnMyIFByb2plY3Rpb25zIHdpdGggZXF1YWxcbiAqICAgICBtZWFuaW5nLlxuICogQHBhcmFtIHtvbC5UcmFuc2Zvcm1GdW5jdGlvbn0gZm9yd2FyZFRyYW5zZm9ybSBUcmFuc2Zvcm1hdGlvbiBmcm9tIGFueVxuICogICBwcm9qZWN0aW9uIGluIHByb2plY3Rpb24xIHRvIGFueSBwcm9qZWN0aW9uIGluIHByb2plY3Rpb24yLlxuICogQHBhcmFtIHtvbC5UcmFuc2Zvcm1GdW5jdGlvbn0gaW52ZXJzZVRyYW5zZm9ybSBUcmFuc2Zvcm0gZnJvbSBhbnkgcHJvamVjdGlvblxuICogICBpbiBwcm9qZWN0aW9uMiB0byBhbnkgcHJvamVjdGlvbiBpbiBwcm9qZWN0aW9uMS4uXG4gKi9cbl9vbF9wcm9qXy5hZGRFcXVpdmFsZW50VHJhbnNmb3JtcyA9IGZ1bmN0aW9uKHByb2plY3Rpb25zMSwgcHJvamVjdGlvbnMyLCBmb3J3YXJkVHJhbnNmb3JtLCBpbnZlcnNlVHJhbnNmb3JtKSB7XG4gIHByb2plY3Rpb25zMS5mb3JFYWNoKGZ1bmN0aW9uKHByb2plY3Rpb24xKSB7XG4gICAgcHJvamVjdGlvbnMyLmZvckVhY2goZnVuY3Rpb24ocHJvamVjdGlvbjIpIHtcbiAgICAgIF9vbF9wcm9qX3RyYW5zZm9ybXNfLmFkZChwcm9qZWN0aW9uMSwgcHJvamVjdGlvbjIsIGZvcndhcmRUcmFuc2Zvcm0pO1xuICAgICAgX29sX3Byb2pfdHJhbnNmb3Jtc18uYWRkKHByb2plY3Rpb24yLCBwcm9qZWN0aW9uMSwgaW52ZXJzZVRyYW5zZm9ybSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuXG4vKipcbiAqIEFkZCBhIFByb2plY3Rpb24gb2JqZWN0IHRvIHRoZSBsaXN0IG9mIHN1cHBvcnRlZCBwcm9qZWN0aW9ucyB0aGF0IGNhbiBiZVxuICogbG9va2VkIHVwIGJ5IHRoZWlyIGNvZGUuXG4gKlxuICogQHBhcmFtIHtvbC5wcm9qLlByb2plY3Rpb259IHByb2plY3Rpb24gUHJvamVjdGlvbiBpbnN0YW5jZS5cbiAqIEBhcGlcbiAqL1xuX29sX3Byb2pfLmFkZFByb2plY3Rpb24gPSBmdW5jdGlvbihwcm9qZWN0aW9uKSB7XG4gIF9vbF9wcm9qX3Byb2plY3Rpb25zXy5hZGQocHJvamVjdGlvbi5nZXRDb2RlKCksIHByb2plY3Rpb24pO1xuICBfb2xfcHJval90cmFuc2Zvcm1zXy5hZGQocHJvamVjdGlvbiwgcHJvamVjdGlvbiwgX29sX3Byb2pfLmNsb25lVHJhbnNmb3JtKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5LjxvbC5wcm9qLlByb2plY3Rpb24+fSBwcm9qZWN0aW9ucyBQcm9qZWN0aW9ucy5cbiAqL1xuX29sX3Byb2pfLmFkZFByb2plY3Rpb25zID0gZnVuY3Rpb24ocHJvamVjdGlvbnMpIHtcbiAgcHJvamVjdGlvbnMuZm9yRWFjaChfb2xfcHJval8uYWRkUHJvamVjdGlvbik7XG59O1xuXG5cbi8qKlxuICogQ2xlYXIgYWxsIGNhY2hlZCBwcm9qZWN0aW9ucyBhbmQgdHJhbnNmb3Jtcy5cbiAqL1xuX29sX3Byb2pfLmNsZWFyQWxsUHJvamVjdGlvbnMgPSBmdW5jdGlvbigpIHtcbiAgX29sX3Byb2pfcHJvamVjdGlvbnNfLmNsZWFyKCk7XG4gIF9vbF9wcm9qX3RyYW5zZm9ybXNfLmNsZWFyKCk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtvbC5wcm9qLlByb2plY3Rpb258c3RyaW5nfHVuZGVmaW5lZH0gcHJvamVjdGlvbiBQcm9qZWN0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IGRlZmF1bHRDb2RlIERlZmF1bHQgY29kZS5cbiAqIEByZXR1cm4ge29sLnByb2ouUHJvamVjdGlvbn0gUHJvamVjdGlvbi5cbiAqL1xuX29sX3Byb2pfLmNyZWF0ZVByb2plY3Rpb24gPSBmdW5jdGlvbihwcm9qZWN0aW9uLCBkZWZhdWx0Q29kZSkge1xuICBpZiAoIXByb2plY3Rpb24pIHtcbiAgICByZXR1cm4gX29sX3Byb2pfLmdldChkZWZhdWx0Q29kZSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2plY3Rpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIF9vbF9wcm9qXy5nZXQocHJvamVjdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7b2wucHJvai5Qcm9qZWN0aW9ufSAqLyAocHJvamVjdGlvbik7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBSZWdpc3RlcnMgY29vcmRpbmF0ZSB0cmFuc2Zvcm0gZnVuY3Rpb25zIHRvIGNvbnZlcnQgY29vcmRpbmF0ZXMgYmV0d2VlbiB0aGVcbiAqIHNvdXJjZSBwcm9qZWN0aW9uIGFuZCB0aGUgZGVzdGluYXRpb24gcHJvamVjdGlvbi5cbiAqIFRoZSBmb3J3YXJkIGFuZCBpbnZlcnNlIGZ1bmN0aW9ucyBjb252ZXJ0IGNvb3JkaW5hdGUgcGFpcnM7IHRoaXMgZnVuY3Rpb25cbiAqIGNvbnZlcnRzIHRoZXNlIGludG8gdGhlIGZ1bmN0aW9ucyB1c2VkIGludGVybmFsbHkgd2hpY2ggYWxzbyBoYW5kbGVcbiAqIGV4dGVudHMgYW5kIGNvb3JkaW5hdGUgYXJyYXlzLlxuICpcbiAqIEBwYXJhbSB7b2wuUHJvamVjdGlvbkxpa2V9IHNvdXJjZSBTb3VyY2UgcHJvamVjdGlvbi5cbiAqIEBwYXJhbSB7b2wuUHJvamVjdGlvbkxpa2V9IGRlc3RpbmF0aW9uIERlc3RpbmF0aW9uIHByb2plY3Rpb24uXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKG9sLkNvb3JkaW5hdGUpOiBvbC5Db29yZGluYXRlfSBmb3J3YXJkIFRoZSBmb3J3YXJkIHRyYW5zZm9ybVxuICogICAgIGZ1bmN0aW9uICh0aGF0IGlzLCBmcm9tIHRoZSBzb3VyY2UgcHJvamVjdGlvbiB0byB0aGUgZGVzdGluYXRpb25cbiAqICAgICBwcm9qZWN0aW9uKSB0aGF0IHRha2VzIGEge0BsaW5rIG9sLkNvb3JkaW5hdGV9IGFzIGFyZ3VtZW50IGFuZCByZXR1cm5zXG4gKiAgICAgdGhlIHRyYW5zZm9ybWVkIHtAbGluayBvbC5Db29yZGluYXRlfS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24ob2wuQ29vcmRpbmF0ZSk6IG9sLkNvb3JkaW5hdGV9IGludmVyc2UgVGhlIGludmVyc2UgdHJhbnNmb3JtXG4gKiAgICAgZnVuY3Rpb24gKHRoYXQgaXMsIGZyb20gdGhlIGRlc3RpbmF0aW9uIHByb2plY3Rpb24gdG8gdGhlIHNvdXJjZVxuICogICAgIHByb2plY3Rpb24pIHRoYXQgdGFrZXMgYSB7QGxpbmsgb2wuQ29vcmRpbmF0ZX0gYXMgYXJndW1lbnQgYW5kIHJldHVybnNcbiAqICAgICB0aGUgdHJhbnNmb3JtZWQge0BsaW5rIG9sLkNvb3JkaW5hdGV9LlxuICogQGFwaVxuICovXG5fb2xfcHJval8uYWRkQ29vcmRpbmF0ZVRyYW5zZm9ybXMgPSBmdW5jdGlvbihzb3VyY2UsIGRlc3RpbmF0aW9uLCBmb3J3YXJkLCBpbnZlcnNlKSB7XG4gIHZhciBzb3VyY2VQcm9qID0gX29sX3Byb2pfLmdldChzb3VyY2UpO1xuICB2YXIgZGVzdFByb2ogPSBfb2xfcHJval8uZ2V0KGRlc3RpbmF0aW9uKTtcbiAgX29sX3Byb2pfdHJhbnNmb3Jtc18uYWRkKHNvdXJjZVByb2osIGRlc3RQcm9qLFxuICAgICAgX29sX3Byb2pfLmNyZWF0ZVRyYW5zZm9ybUZyb21Db29yZGluYXRlVHJhbnNmb3JtKGZvcndhcmQpKTtcbiAgX29sX3Byb2pfdHJhbnNmb3Jtc18uYWRkKGRlc3RQcm9qLCBzb3VyY2VQcm9qLFxuICAgICAgX29sX3Byb2pfLmNyZWF0ZVRyYW5zZm9ybUZyb21Db29yZGluYXRlVHJhbnNmb3JtKGludmVyc2UpKTtcbn07XG5cblxuLyoqXG4gKiBDcmVhdGVzIGEge0BsaW5rIG9sLlRyYW5zZm9ybUZ1bmN0aW9ufSBmcm9tIGEgc2ltcGxlIDJEIGNvb3JkaW5hdGUgdHJhbnNmb3JtXG4gKiBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24ob2wuQ29vcmRpbmF0ZSk6IG9sLkNvb3JkaW5hdGV9IHRyYW5zZm9ybSBDb29yZGluYXRlXG4gKiAgICAgdHJhbnNmb3JtLlxuICogQHJldHVybiB7b2wuVHJhbnNmb3JtRnVuY3Rpb259IFRyYW5zZm9ybSBmdW5jdGlvbi5cbiAqL1xuX29sX3Byb2pfLmNyZWF0ZVRyYW5zZm9ybUZyb21Db29yZGluYXRlVHJhbnNmb3JtID0gZnVuY3Rpb24odHJhbnNmb3JtKSB7XG4gIHJldHVybiAoXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtBcnJheS48bnVtYmVyPn0gaW5wdXQgSW5wdXQuXG4gICAgICogQHBhcmFtIHtBcnJheS48bnVtYmVyPj19IG9wdF9vdXRwdXQgT3V0cHV0LlxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gb3B0X2RpbWVuc2lvbiBEaW1lbnNpb24uXG4gICAgICogQHJldHVybiB7QXJyYXkuPG51bWJlcj59IE91dHB1dC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbihpbnB1dCwgb3B0X291dHB1dCwgb3B0X2RpbWVuc2lvbikge1xuICAgICAgdmFyIGxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgICAgIHZhciBkaW1lbnNpb24gPSBvcHRfZGltZW5zaW9uICE9PSB1bmRlZmluZWQgPyBvcHRfZGltZW5zaW9uIDogMjtcbiAgICAgIHZhciBvdXRwdXQgPSBvcHRfb3V0cHV0ICE9PSB1bmRlZmluZWQgPyBvcHRfb3V0cHV0IDogbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgICB2YXIgcG9pbnQsIGksIGo7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IGRpbWVuc2lvbikge1xuICAgICAgICBwb2ludCA9IHRyYW5zZm9ybShbaW5wdXRbaV0sIGlucHV0W2kgKyAxXV0pO1xuICAgICAgICBvdXRwdXRbaV0gPSBwb2ludFswXTtcbiAgICAgICAgb3V0cHV0W2kgKyAxXSA9IHBvaW50WzFdO1xuICAgICAgICBmb3IgKGogPSBkaW1lbnNpb24gLSAxOyBqID49IDI7IC0taikge1xuICAgICAgICAgIG91dHB1dFtpICsgal0gPSBpbnB1dFtpICsgal07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSk7XG59O1xuXG5cbi8qKlxuICogVHJhbnNmb3JtcyBhIGNvb3JkaW5hdGUgZnJvbSBsb25naXR1ZGUvbGF0aXR1ZGUgdG8gYSBkaWZmZXJlbnQgcHJvamVjdGlvbi5cbiAqIEBwYXJhbSB7b2wuQ29vcmRpbmF0ZX0gY29vcmRpbmF0ZSBDb29yZGluYXRlIGFzIGxvbmdpdHVkZSBhbmQgbGF0aXR1ZGUsIGkuZS5cbiAqICAgICBhbiBhcnJheSB3aXRoIGxvbmdpdHVkZSBhcyAxc3QgYW5kIGxhdGl0dWRlIGFzIDJuZCBlbGVtZW50LlxuICogQHBhcmFtIHtvbC5Qcm9qZWN0aW9uTGlrZT19IG9wdF9wcm9qZWN0aW9uIFRhcmdldCBwcm9qZWN0aW9uLiBUaGVcbiAqICAgICBkZWZhdWx0IGlzIFdlYiBNZXJjYXRvciwgaS5lLiAnRVBTRzozODU3Jy5cbiAqIEByZXR1cm4ge29sLkNvb3JkaW5hdGV9IENvb3JkaW5hdGUgcHJvamVjdGVkIHRvIHRoZSB0YXJnZXQgcHJvamVjdGlvbi5cbiAqIEBhcGlcbiAqL1xuX29sX3Byb2pfLmZyb21Mb25MYXQgPSBmdW5jdGlvbihjb29yZGluYXRlLCBvcHRfcHJvamVjdGlvbikge1xuICByZXR1cm4gX29sX3Byb2pfLnRyYW5zZm9ybShjb29yZGluYXRlLCAnRVBTRzo0MzI2JyxcbiAgICAgIG9wdF9wcm9qZWN0aW9uICE9PSB1bmRlZmluZWQgPyBvcHRfcHJvamVjdGlvbiA6ICdFUFNHOjM4NTcnKTtcbn07XG5cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIGEgY29vcmRpbmF0ZSB0byBsb25naXR1ZGUvbGF0aXR1ZGUuXG4gKiBAcGFyYW0ge29sLkNvb3JkaW5hdGV9IGNvb3JkaW5hdGUgUHJvamVjdGVkIGNvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge29sLlByb2plY3Rpb25MaWtlPX0gb3B0X3Byb2plY3Rpb24gUHJvamVjdGlvbiBvZiB0aGUgY29vcmRpbmF0ZS5cbiAqICAgICBUaGUgZGVmYXVsdCBpcyBXZWIgTWVyY2F0b3IsIGkuZS4gJ0VQU0c6Mzg1NycuXG4gKiBAcmV0dXJuIHtvbC5Db29yZGluYXRlfSBDb29yZGluYXRlIGFzIGxvbmdpdHVkZSBhbmQgbGF0aXR1ZGUsIGkuZS4gYW4gYXJyYXlcbiAqICAgICB3aXRoIGxvbmdpdHVkZSBhcyAxc3QgYW5kIGxhdGl0dWRlIGFzIDJuZCBlbGVtZW50LlxuICogQGFwaVxuICovXG5fb2xfcHJval8udG9Mb25MYXQgPSBmdW5jdGlvbihjb29yZGluYXRlLCBvcHRfcHJvamVjdGlvbikge1xuICB2YXIgbG9uTGF0ID0gX29sX3Byb2pfLnRyYW5zZm9ybShjb29yZGluYXRlLFxuICAgICAgb3B0X3Byb2plY3Rpb24gIT09IHVuZGVmaW5lZCA/IG9wdF9wcm9qZWN0aW9uIDogJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKTtcbiAgdmFyIGxvbiA9IGxvbkxhdFswXTtcbiAgaWYgKGxvbiA8IC0xODAgfHwgbG9uID4gMTgwKSB7XG4gICAgbG9uTGF0WzBdID0gX29sX21hdGhfLm1vZHVsbyhsb24gKyAxODAsIDM2MCkgLSAxODA7XG4gIH1cbiAgcmV0dXJuIGxvbkxhdDtcbn07XG5cblxuLyoqXG4gKiBGZXRjaGVzIGEgUHJvamVjdGlvbiBvYmplY3QgZm9yIHRoZSBjb2RlIHNwZWNpZmllZC5cbiAqXG4gKiBAcGFyYW0ge29sLlByb2plY3Rpb25MaWtlfSBwcm9qZWN0aW9uTGlrZSBFaXRoZXIgYSBjb2RlIHN0cmluZyB3aGljaCBpc1xuICogICAgIGEgY29tYmluYXRpb24gb2YgYXV0aG9yaXR5IGFuZCBpZGVudGlmaWVyIHN1Y2ggYXMgXCJFUFNHOjQzMjZcIiwgb3IgYW5cbiAqICAgICBleGlzdGluZyBwcm9qZWN0aW9uIG9iamVjdCwgb3IgdW5kZWZpbmVkLlxuICogQHJldHVybiB7b2wucHJvai5Qcm9qZWN0aW9ufSBQcm9qZWN0aW9uIG9iamVjdCwgb3IgbnVsbCBpZiBub3QgaW4gbGlzdC5cbiAqIEBhcGlcbiAqL1xuX29sX3Byb2pfLmdldCA9IGZ1bmN0aW9uKHByb2plY3Rpb25MaWtlKSB7XG4gIHZhciBwcm9qZWN0aW9uID0gbnVsbDtcbiAgaWYgKHByb2plY3Rpb25MaWtlIGluc3RhbmNlb2YgX29sX3Byb2pfUHJvamVjdGlvbl8pIHtcbiAgICBwcm9qZWN0aW9uID0gcHJvamVjdGlvbkxpa2U7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2plY3Rpb25MaWtlID09PSAnc3RyaW5nJykge1xuICAgIHZhciBjb2RlID0gcHJvamVjdGlvbkxpa2U7XG4gICAgcHJvamVjdGlvbiA9IF9vbF9wcm9qX3Byb2plY3Rpb25zXy5nZXQoY29kZSk7XG4gICAgaWYgKF9vbF8uRU5BQkxFX1BST0o0SlMgJiYgIXByb2plY3Rpb24pIHtcbiAgICAgIHZhciBwcm9qNGpzID0gX29sX3Byb2pfcHJvajRfLmdldCgpO1xuICAgICAgaWYgKHR5cGVvZiBwcm9qNGpzID09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICBwcm9qNGpzLmRlZnMoY29kZSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9qZWN0aW9uID0gbmV3IF9vbF9wcm9qX1Byb2plY3Rpb25fKHtjb2RlOiBjb2RlfSk7XG4gICAgICAgIF9vbF9wcm9qXy5hZGRQcm9qZWN0aW9uKHByb2plY3Rpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcHJvamVjdGlvbjtcbn07XG5cblxuLyoqXG4gKiBDaGVja3MgaWYgdHdvIHByb2plY3Rpb25zIGFyZSB0aGUgc2FtZSwgdGhhdCBpcyBldmVyeSBjb29yZGluYXRlIGluIG9uZVxuICogcHJvamVjdGlvbiBkb2VzIHJlcHJlc2VudCB0aGUgc2FtZSBnZW9ncmFwaGljIHBvaW50IGFzIHRoZSBzYW1lIGNvb3JkaW5hdGUgaW5cbiAqIHRoZSBvdGhlciBwcm9qZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7b2wucHJvai5Qcm9qZWN0aW9ufSBwcm9qZWN0aW9uMSBQcm9qZWN0aW9uIDEuXG4gKiBAcGFyYW0ge29sLnByb2ouUHJvamVjdGlvbn0gcHJvamVjdGlvbjIgUHJvamVjdGlvbiAyLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRXF1aXZhbGVudC5cbiAqIEBhcGlcbiAqL1xuX29sX3Byb2pfLmVxdWl2YWxlbnQgPSBmdW5jdGlvbihwcm9qZWN0aW9uMSwgcHJvamVjdGlvbjIpIHtcbiAgaWYgKHByb2plY3Rpb24xID09PSBwcm9qZWN0aW9uMikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBlcXVhbFVuaXRzID0gcHJvamVjdGlvbjEuZ2V0VW5pdHMoKSA9PT0gcHJvamVjdGlvbjIuZ2V0VW5pdHMoKTtcbiAgaWYgKHByb2plY3Rpb24xLmdldENvZGUoKSA9PT0gcHJvamVjdGlvbjIuZ2V0Q29kZSgpKSB7XG4gICAgcmV0dXJuIGVxdWFsVW5pdHM7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRyYW5zZm9ybUZuID0gX29sX3Byb2pfLmdldFRyYW5zZm9ybUZyb21Qcm9qZWN0aW9ucyhcbiAgICAgICAgcHJvamVjdGlvbjEsIHByb2plY3Rpb24yKTtcbiAgICByZXR1cm4gdHJhbnNmb3JtRm4gPT09IF9vbF9wcm9qXy5jbG9uZVRyYW5zZm9ybSAmJiBlcXVhbFVuaXRzO1xuICB9XG59O1xuXG5cbi8qKlxuICogR2l2ZW4gdGhlIHByb2plY3Rpb24tbGlrZSBvYmplY3RzLCBzZWFyY2hlcyBmb3IgYSB0cmFuc2Zvcm1hdGlvblxuICogZnVuY3Rpb24gdG8gY29udmVydCBhIGNvb3JkaW5hdGVzIGFycmF5IGZyb20gdGhlIHNvdXJjZSBwcm9qZWN0aW9uIHRvIHRoZVxuICogZGVzdGluYXRpb24gcHJvamVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge29sLlByb2plY3Rpb25MaWtlfSBzb3VyY2UgU291cmNlLlxuICogQHBhcmFtIHtvbC5Qcm9qZWN0aW9uTGlrZX0gZGVzdGluYXRpb24gRGVzdGluYXRpb24uXG4gKiBAcmV0dXJuIHtvbC5UcmFuc2Zvcm1GdW5jdGlvbn0gVHJhbnNmb3JtIGZ1bmN0aW9uLlxuICogQGFwaVxuICovXG5fb2xfcHJval8uZ2V0VHJhbnNmb3JtID0gZnVuY3Rpb24oc291cmNlLCBkZXN0aW5hdGlvbikge1xuICB2YXIgc291cmNlUHJvamVjdGlvbiA9IF9vbF9wcm9qXy5nZXQoc291cmNlKTtcbiAgdmFyIGRlc3RpbmF0aW9uUHJvamVjdGlvbiA9IF9vbF9wcm9qXy5nZXQoZGVzdGluYXRpb24pO1xuICByZXR1cm4gX29sX3Byb2pfLmdldFRyYW5zZm9ybUZyb21Qcm9qZWN0aW9ucyhcbiAgICAgIHNvdXJjZVByb2plY3Rpb24sIGRlc3RpbmF0aW9uUHJvamVjdGlvbik7XG59O1xuXG5cbi8qKlxuICogU2VhcmNoZXMgaW4gdGhlIGxpc3Qgb2YgdHJhbnNmb3JtIGZ1bmN0aW9ucyBmb3IgdGhlIGZ1bmN0aW9uIGZvciBjb252ZXJ0aW5nXG4gKiBjb29yZGluYXRlcyBmcm9tIHRoZSBzb3VyY2UgcHJvamVjdGlvbiB0byB0aGUgZGVzdGluYXRpb24gcHJvamVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge29sLnByb2ouUHJvamVjdGlvbn0gc291cmNlUHJvamVjdGlvbiBTb3VyY2UgUHJvamVjdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge29sLnByb2ouUHJvamVjdGlvbn0gZGVzdGluYXRpb25Qcm9qZWN0aW9uIERlc3RpbmF0aW9uIFByb2plY3Rpb25cbiAqICAgICBvYmplY3QuXG4gKiBAcmV0dXJuIHtvbC5UcmFuc2Zvcm1GdW5jdGlvbn0gVHJhbnNmb3JtIGZ1bmN0aW9uLlxuICovXG5fb2xfcHJval8uZ2V0VHJhbnNmb3JtRnJvbVByb2plY3Rpb25zID0gZnVuY3Rpb24oc291cmNlUHJvamVjdGlvbiwgZGVzdGluYXRpb25Qcm9qZWN0aW9uKSB7XG4gIHZhciBzb3VyY2VDb2RlID0gc291cmNlUHJvamVjdGlvbi5nZXRDb2RlKCk7XG4gIHZhciBkZXN0aW5hdGlvbkNvZGUgPSBkZXN0aW5hdGlvblByb2plY3Rpb24uZ2V0Q29kZSgpO1xuICB2YXIgdHJhbnNmb3JtID0gX29sX3Byb2pfdHJhbnNmb3Jtc18uZ2V0KHNvdXJjZUNvZGUsIGRlc3RpbmF0aW9uQ29kZSk7XG4gIGlmIChfb2xfLkVOQUJMRV9QUk9KNEpTICYmICF0cmFuc2Zvcm0pIHtcbiAgICB2YXIgcHJvajRqcyA9IF9vbF9wcm9qX3Byb2o0Xy5nZXQoKTtcbiAgICBpZiAodHlwZW9mIHByb2o0anMgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIHNvdXJjZURlZiA9IHByb2o0anMuZGVmcyhzb3VyY2VDb2RlKTtcbiAgICAgIHZhciBkZXN0aW5hdGlvbkRlZiA9IHByb2o0anMuZGVmcyhkZXN0aW5hdGlvbkNvZGUpO1xuXG4gICAgICBpZiAoc291cmNlRGVmICE9PSB1bmRlZmluZWQgJiYgZGVzdGluYXRpb25EZWYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoc291cmNlRGVmID09PSBkZXN0aW5hdGlvbkRlZikge1xuICAgICAgICAgIF9vbF9wcm9qXy5hZGRFcXVpdmFsZW50UHJvamVjdGlvbnMoW2Rlc3RpbmF0aW9uUHJvamVjdGlvbiwgc291cmNlUHJvamVjdGlvbl0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBwcm9qNFRyYW5zZm9ybSA9IHByb2o0anMoZGVzdGluYXRpb25Db2RlLCBzb3VyY2VDb2RlKTtcbiAgICAgICAgICBfb2xfcHJval8uYWRkQ29vcmRpbmF0ZVRyYW5zZm9ybXMoZGVzdGluYXRpb25Qcm9qZWN0aW9uLCBzb3VyY2VQcm9qZWN0aW9uLFxuICAgICAgICAgICAgICBwcm9qNFRyYW5zZm9ybS5mb3J3YXJkLCBwcm9qNFRyYW5zZm9ybS5pbnZlcnNlKTtcbiAgICAgICAgfVxuICAgICAgICB0cmFuc2Zvcm0gPSBfb2xfcHJval90cmFuc2Zvcm1zXy5nZXQoc291cmNlQ29kZSwgZGVzdGluYXRpb25Db2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKCF0cmFuc2Zvcm0pIHtcbiAgICB0cmFuc2Zvcm0gPSBfb2xfcHJval8uaWRlbnRpdHlUcmFuc2Zvcm07XG4gIH1cbiAgcmV0dXJuIHRyYW5zZm9ybTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5LjxudW1iZXI+fSBpbnB1dCBJbnB1dCBjb29yZGluYXRlIGFycmF5LlxuICogQHBhcmFtIHtBcnJheS48bnVtYmVyPj19IG9wdF9vdXRwdXQgT3V0cHV0IGFycmF5IG9mIGNvb3JkaW5hdGUgdmFsdWVzLlxuICogQHBhcmFtIHtudW1iZXI9fSBvcHRfZGltZW5zaW9uIERpbWVuc2lvbi5cbiAqIEByZXR1cm4ge0FycmF5LjxudW1iZXI+fSBJbnB1dCBjb29yZGluYXRlIGFycmF5IChzYW1lIGFycmF5IGFzIGlucHV0KS5cbiAqL1xuX29sX3Byb2pfLmlkZW50aXR5VHJhbnNmb3JtID0gZnVuY3Rpb24oaW5wdXQsIG9wdF9vdXRwdXQsIG9wdF9kaW1lbnNpb24pIHtcbiAgaWYgKG9wdF9vdXRwdXQgIT09IHVuZGVmaW5lZCAmJiBpbnB1dCAhPT0gb3B0X291dHB1dCkge1xuICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IGlucHV0Lmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgIG9wdF9vdXRwdXRbaV0gPSBpbnB1dFtpXTtcbiAgICB9XG4gICAgaW5wdXQgPSBvcHRfb3V0cHV0O1xuICB9XG4gIHJldHVybiBpbnB1dDtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5LjxudW1iZXI+fSBpbnB1dCBJbnB1dCBjb29yZGluYXRlIGFycmF5LlxuICogQHBhcmFtIHtBcnJheS48bnVtYmVyPj19IG9wdF9vdXRwdXQgT3V0cHV0IGFycmF5IG9mIGNvb3JkaW5hdGUgdmFsdWVzLlxuICogQHBhcmFtIHtudW1iZXI9fSBvcHRfZGltZW5zaW9uIERpbWVuc2lvbi5cbiAqIEByZXR1cm4ge0FycmF5LjxudW1iZXI+fSBPdXRwdXQgY29vcmRpbmF0ZSBhcnJheSAobmV3IGFycmF5LCBzYW1lIGNvb3JkaW5hdGVcbiAqICAgICB2YWx1ZXMpLlxuICovXG5fb2xfcHJval8uY2xvbmVUcmFuc2Zvcm0gPSBmdW5jdGlvbihpbnB1dCwgb3B0X291dHB1dCwgb3B0X2RpbWVuc2lvbikge1xuICB2YXIgb3V0cHV0O1xuICBpZiAob3B0X291dHB1dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGlpID0gaW5wdXQubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgb3B0X291dHB1dFtpXSA9IGlucHV0W2ldO1xuICAgIH1cbiAgICBvdXRwdXQgPSBvcHRfb3V0cHV0O1xuICB9IGVsc2Uge1xuICAgIG91dHB1dCA9IGlucHV0LnNsaWNlKCk7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn07XG5cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIGEgY29vcmRpbmF0ZSBmcm9tIHNvdXJjZSBwcm9qZWN0aW9uIHRvIGRlc3RpbmF0aW9uIHByb2plY3Rpb24uXG4gKiBUaGlzIHJldHVybnMgYSBuZXcgY29vcmRpbmF0ZSAoYW5kIGRvZXMgbm90IG1vZGlmeSB0aGUgb3JpZ2luYWwpLlxuICpcbiAqIFNlZSB7QGxpbmsgb2wucHJvai50cmFuc2Zvcm1FeHRlbnR9IGZvciBleHRlbnQgdHJhbnNmb3JtYXRpb24uXG4gKiBTZWUgdGhlIHRyYW5zZm9ybSBtZXRob2Qgb2Yge0BsaW5rIG9sLmdlb20uR2VvbWV0cnl9IGFuZCBpdHMgc3ViY2xhc3NlcyBmb3JcbiAqIGdlb21ldHJ5IHRyYW5zZm9ybXMuXG4gKlxuICogQHBhcmFtIHtvbC5Db29yZGluYXRlfSBjb29yZGluYXRlIENvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge29sLlByb2plY3Rpb25MaWtlfSBzb3VyY2UgU291cmNlIHByb2plY3Rpb24tbGlrZS5cbiAqIEBwYXJhbSB7b2wuUHJvamVjdGlvbkxpa2V9IGRlc3RpbmF0aW9uIERlc3RpbmF0aW9uIHByb2plY3Rpb24tbGlrZS5cbiAqIEByZXR1cm4ge29sLkNvb3JkaW5hdGV9IENvb3JkaW5hdGUuXG4gKiBAYXBpXG4gKi9cbl9vbF9wcm9qXy50cmFuc2Zvcm0gPSBmdW5jdGlvbihjb29yZGluYXRlLCBzb3VyY2UsIGRlc3RpbmF0aW9uKSB7XG4gIHZhciB0cmFuc2Zvcm1GbiA9IF9vbF9wcm9qXy5nZXRUcmFuc2Zvcm0oc291cmNlLCBkZXN0aW5hdGlvbik7XG4gIHJldHVybiB0cmFuc2Zvcm1Gbihjb29yZGluYXRlLCB1bmRlZmluZWQsIGNvb3JkaW5hdGUubGVuZ3RoKTtcbn07XG5cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIGFuIGV4dGVudCBmcm9tIHNvdXJjZSBwcm9qZWN0aW9uIHRvIGRlc3RpbmF0aW9uIHByb2plY3Rpb24uICBUaGlzXG4gKiByZXR1cm5zIGEgbmV3IGV4dGVudCAoYW5kIGRvZXMgbm90IG1vZGlmeSB0aGUgb3JpZ2luYWwpLlxuICpcbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQgVGhlIGV4dGVudCB0byB0cmFuc2Zvcm0uXG4gKiBAcGFyYW0ge29sLlByb2plY3Rpb25MaWtlfSBzb3VyY2UgU291cmNlIHByb2plY3Rpb24tbGlrZS5cbiAqIEBwYXJhbSB7b2wuUHJvamVjdGlvbkxpa2V9IGRlc3RpbmF0aW9uIERlc3RpbmF0aW9uIHByb2plY3Rpb24tbGlrZS5cbiAqIEByZXR1cm4ge29sLkV4dGVudH0gVGhlIHRyYW5zZm9ybWVkIGV4dGVudC5cbiAqIEBhcGlcbiAqL1xuX29sX3Byb2pfLnRyYW5zZm9ybUV4dGVudCA9IGZ1bmN0aW9uKGV4dGVudCwgc291cmNlLCBkZXN0aW5hdGlvbikge1xuICB2YXIgdHJhbnNmb3JtRm4gPSBfb2xfcHJval8uZ2V0VHJhbnNmb3JtKHNvdXJjZSwgZGVzdGluYXRpb24pO1xuICByZXR1cm4gX29sX2V4dGVudF8uYXBwbHlUcmFuc2Zvcm0oZXh0ZW50LCB0cmFuc2Zvcm1Gbik7XG59O1xuXG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgZ2l2ZW4gcG9pbnQgdG8gdGhlIGRlc3RpbmF0aW9uIHByb2plY3Rpb24uXG4gKlxuICogQHBhcmFtIHtvbC5Db29yZGluYXRlfSBwb2ludCBQb2ludC5cbiAqIEBwYXJhbSB7b2wucHJvai5Qcm9qZWN0aW9ufSBzb3VyY2VQcm9qZWN0aW9uIFNvdXJjZSBwcm9qZWN0aW9uLlxuICogQHBhcmFtIHtvbC5wcm9qLlByb2plY3Rpb259IGRlc3RpbmF0aW9uUHJvamVjdGlvbiBEZXN0aW5hdGlvbiBwcm9qZWN0aW9uLlxuICogQHJldHVybiB7b2wuQ29vcmRpbmF0ZX0gUG9pbnQuXG4gKi9cbl9vbF9wcm9qXy50cmFuc2Zvcm1XaXRoUHJvamVjdGlvbnMgPSBmdW5jdGlvbihwb2ludCwgc291cmNlUHJvamVjdGlvbiwgZGVzdGluYXRpb25Qcm9qZWN0aW9uKSB7XG4gIHZhciB0cmFuc2Zvcm1GbiA9IF9vbF9wcm9qXy5nZXRUcmFuc2Zvcm1Gcm9tUHJvamVjdGlvbnMoXG4gICAgICBzb3VyY2VQcm9qZWN0aW9uLCBkZXN0aW5hdGlvblByb2plY3Rpb24pO1xuICByZXR1cm4gdHJhbnNmb3JtRm4ocG9pbnQpO1xufTtcblxuLyoqXG4gKiBBZGQgdHJhbnNmb3JtcyB0byBhbmQgZnJvbSBFUFNHOjQzMjYgYW5kIEVQU0c6Mzg1Ny4gIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkXG4gKiBieSB3aGVuIHRoaXMgbW9kdWxlIGlzIGV4ZWN1dGVkIGFuZCBzaG91bGQgb25seSBuZWVkIHRvIGJlIGNhbGxlZCBhZ2FpbiBhZnRlclxuICogYG9sLnByb2ouY2xlYXJBbGxQcm9qZWN0aW9ucygpYCBpcyBjYWxsZWQgKGUuZy4gaW4gdGVzdHMpLlxuICovXG5fb2xfcHJval8uYWRkQ29tbW9uID0gZnVuY3Rpb24oKSB7XG4gIC8vIEFkZCB0cmFuc2Zvcm1hdGlvbnMgdGhhdCBkb24ndCBhbHRlciBjb29yZGluYXRlcyB0byBjb252ZXJ0IHdpdGhpbiBzZXQgb2ZcbiAgLy8gcHJvamVjdGlvbnMgd2l0aCBlcXVhbCBtZWFuaW5nLlxuICBfb2xfcHJval8uYWRkRXF1aXZhbGVudFByb2plY3Rpb25zKF9vbF9wcm9qX0VQU0czODU3Xy5QUk9KRUNUSU9OUyk7XG4gIF9vbF9wcm9qXy5hZGRFcXVpdmFsZW50UHJvamVjdGlvbnMoX29sX3Byb2pfRVBTRzQzMjZfLlBST0pFQ1RJT05TKTtcbiAgLy8gQWRkIHRyYW5zZm9ybWF0aW9ucyB0byBjb252ZXJ0IEVQU0c6NDMyNiBsaWtlIGNvb3JkaW5hdGVzIHRvIEVQU0c6Mzg1NyBsaWtlXG4gIC8vIGNvb3JkaW5hdGVzIGFuZCBiYWNrLlxuICBfb2xfcHJval8uYWRkRXF1aXZhbGVudFRyYW5zZm9ybXMoXG4gICAgICBfb2xfcHJval9FUFNHNDMyNl8uUFJPSkVDVElPTlMsXG4gICAgICBfb2xfcHJval9FUFNHMzg1N18uUFJPSkVDVElPTlMsXG4gICAgICBfb2xfcHJval9FUFNHMzg1N18uZnJvbUVQU0c0MzI2LFxuICAgICAgX29sX3Byb2pfRVBTRzM4NTdfLnRvRVBTRzQzMjYpO1xufTtcblxuX29sX3Byb2pfLmFkZENvbW1vbigpO1xuZXhwb3J0IGRlZmF1bHQgX29sX3Byb2pfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvcHJvai5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgX29sX29ial8gZnJvbSAnLi9vYmouanMnO1xudmFyIF9vbF9ldmVudHNfID0ge307XG5cblxuLyoqXG4gKiBAcGFyYW0ge29sLkV2ZW50c0tleX0gbGlzdGVuZXJPYmogTGlzdGVuZXIgb2JqZWN0LlxuICogQHJldHVybiB7b2wuRXZlbnRzTGlzdGVuZXJGdW5jdGlvblR5cGV9IEJvdW5kIGxpc3RlbmVyLlxuICovXG5fb2xfZXZlbnRzXy5iaW5kTGlzdGVuZXJfID0gZnVuY3Rpb24obGlzdGVuZXJPYmopIHtcbiAgdmFyIGJvdW5kTGlzdGVuZXIgPSBmdW5jdGlvbihldnQpIHtcbiAgICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lck9iai5saXN0ZW5lcjtcbiAgICB2YXIgYmluZFRvID0gbGlzdGVuZXJPYmouYmluZFRvIHx8IGxpc3RlbmVyT2JqLnRhcmdldDtcbiAgICBpZiAobGlzdGVuZXJPYmouY2FsbE9uY2UpIHtcbiAgICAgIF9vbF9ldmVudHNfLnVubGlzdGVuQnlLZXkobGlzdGVuZXJPYmopO1xuICAgIH1cbiAgICByZXR1cm4gbGlzdGVuZXIuY2FsbChiaW5kVG8sIGV2dCk7XG4gIH07XG4gIGxpc3RlbmVyT2JqLmJvdW5kTGlzdGVuZXIgPSBib3VuZExpc3RlbmVyO1xuICByZXR1cm4gYm91bmRMaXN0ZW5lcjtcbn07XG5cblxuLyoqXG4gKiBGaW5kcyB0aGUgbWF0Y2hpbmcge0BsaW5rIG9sLkV2ZW50c0tleX0gaW4gdGhlIGdpdmVuIGxpc3RlbmVyXG4gKiBhcnJheS5cbiAqXG4gKiBAcGFyYW0geyFBcnJheTwhb2wuRXZlbnRzS2V5Pn0gbGlzdGVuZXJzIEFycmF5IG9mIGxpc3RlbmVycy5cbiAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBsaXN0ZW5lciBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdF90aGlzIFRoZSBgdGhpc2AgdmFsdWUgaW5zaWRlIHRoZSBsaXN0ZW5lci5cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdF9zZXREZWxldGVJbmRleCBTZXQgdGhlIGRlbGV0ZUluZGV4IG9uIHRoZSBtYXRjaGluZ1xuICogICAgIGxpc3RlbmVyLCBmb3Ige0BsaW5rIG9sLmV2ZW50cy51bmxpc3RlbkJ5S2V5fS5cbiAqIEByZXR1cm4ge29sLkV2ZW50c0tleXx1bmRlZmluZWR9IFRoZSBtYXRjaGluZyBsaXN0ZW5lciBvYmplY3QuXG4gKiBAcHJpdmF0ZVxuICovXG5fb2xfZXZlbnRzXy5maW5kTGlzdGVuZXJfID0gZnVuY3Rpb24obGlzdGVuZXJzLCBsaXN0ZW5lciwgb3B0X3RoaXMsXG4gICAgb3B0X3NldERlbGV0ZUluZGV4KSB7XG4gIHZhciBsaXN0ZW5lck9iajtcbiAgZm9yICh2YXIgaSA9IDAsIGlpID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICBsaXN0ZW5lck9iaiA9IGxpc3RlbmVyc1tpXTtcbiAgICBpZiAobGlzdGVuZXJPYmoubGlzdGVuZXIgPT09IGxpc3RlbmVyICYmXG4gICAgICAgIGxpc3RlbmVyT2JqLmJpbmRUbyA9PT0gb3B0X3RoaXMpIHtcbiAgICAgIGlmIChvcHRfc2V0RGVsZXRlSW5kZXgpIHtcbiAgICAgICAgbGlzdGVuZXJPYmouZGVsZXRlSW5kZXggPSBpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxpc3RlbmVyT2JqO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wuRXZlbnRUYXJnZXRMaWtlfSB0YXJnZXQgVGFyZ2V0LlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVHlwZS5cbiAqIEByZXR1cm4ge0FycmF5LjxvbC5FdmVudHNLZXk+fHVuZGVmaW5lZH0gTGlzdGVuZXJzLlxuICovXG5fb2xfZXZlbnRzXy5nZXRMaXN0ZW5lcnMgPSBmdW5jdGlvbih0YXJnZXQsIHR5cGUpIHtcbiAgdmFyIGxpc3RlbmVyTWFwID0gdGFyZ2V0Lm9sX2xtO1xuICByZXR1cm4gbGlzdGVuZXJNYXAgPyBsaXN0ZW5lck1hcFt0eXBlXSA6IHVuZGVmaW5lZDtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIGxvb2t1cCBvZiBsaXN0ZW5lcnMuICBJZiBvbmUgZG9lcyBub3QgZXhpc3Qgb24gdGhlIHRhcmdldCwgaXQgaXNcbiAqIGNyZWF0ZWQuXG4gKiBAcGFyYW0ge29sLkV2ZW50VGFyZ2V0TGlrZX0gdGFyZ2V0IFRhcmdldC5cbiAqIEByZXR1cm4geyFPYmplY3QuPHN0cmluZywgQXJyYXkuPG9sLkV2ZW50c0tleT4+fSBNYXAgb2ZcbiAqICAgICBsaXN0ZW5lcnMgYnkgZXZlbnQgdHlwZS5cbiAqIEBwcml2YXRlXG4gKi9cbl9vbF9ldmVudHNfLmdldExpc3RlbmVyTWFwXyA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICB2YXIgbGlzdGVuZXJNYXAgPSB0YXJnZXQub2xfbG07XG4gIGlmICghbGlzdGVuZXJNYXApIHtcbiAgICBsaXN0ZW5lck1hcCA9IHRhcmdldC5vbF9sbSA9IHt9O1xuICB9XG4gIHJldHVybiBsaXN0ZW5lck1hcDtcbn07XG5cblxuLyoqXG4gKiBDbGVhbiB1cCBhbGwgbGlzdGVuZXIgb2JqZWN0cyBvZiB0aGUgZ2l2ZW4gdHlwZS4gIEFsbCBwcm9wZXJ0aWVzIG9uIHRoZVxuICogbGlzdGVuZXIgb2JqZWN0cyB3aWxsIGJlIHJlbW92ZWQsIGFuZCBpZiBubyBsaXN0ZW5lcnMgcmVtYWluIGluIHRoZSBsaXN0ZW5lclxuICogbWFwLCBpdCB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgdGFyZ2V0LlxuICogQHBhcmFtIHtvbC5FdmVudFRhcmdldExpa2V9IHRhcmdldCBUYXJnZXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUeXBlLlxuICogQHByaXZhdGVcbiAqL1xuX29sX2V2ZW50c18ucmVtb3ZlTGlzdGVuZXJzXyA9IGZ1bmN0aW9uKHRhcmdldCwgdHlwZSkge1xuICB2YXIgbGlzdGVuZXJzID0gX29sX2V2ZW50c18uZ2V0TGlzdGVuZXJzKHRhcmdldCwgdHlwZSk7XG4gIGlmIChsaXN0ZW5lcnMpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgaWkgPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldLmJvdW5kTGlzdGVuZXIpO1xuICAgICAgX29sX29ial8uY2xlYXIobGlzdGVuZXJzW2ldKTtcbiAgICB9XG4gICAgbGlzdGVuZXJzLmxlbmd0aCA9IDA7XG4gICAgdmFyIGxpc3RlbmVyTWFwID0gdGFyZ2V0Lm9sX2xtO1xuICAgIGlmIChsaXN0ZW5lck1hcCkge1xuICAgICAgZGVsZXRlIGxpc3RlbmVyTWFwW3R5cGVdO1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGxpc3RlbmVyTWFwKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZGVsZXRlIHRhcmdldC5vbF9sbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cblxuLyoqXG4gKiBSZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgb24gYW4gZXZlbnQgdGFyZ2V0LiBJbnNwaXJlZCBieVxuICoge0BsaW5rIGh0dHBzOi8vZ29vZ2xlLmdpdGh1Yi5pby9jbG9zdXJlLWxpYnJhcnkvYXBpL3NvdXJjZS9jbG9zdXJlL2dvb2cvZXZlbnRzL2V2ZW50cy5qcy5zcmMuaHRtbH1cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGVmZmljaWVudGx5IGJpbmRzIGEgYGxpc3RlbmVyYCB0byBhIGB0aGlzYCBvYmplY3QsIGFuZCByZXR1cm5zXG4gKiBhIGtleSBmb3IgdXNlIHdpdGgge0BsaW5rIG9sLmV2ZW50cy51bmxpc3RlbkJ5S2V5fS5cbiAqXG4gKiBAcGFyYW0ge29sLkV2ZW50VGFyZ2V0TGlrZX0gdGFyZ2V0IEV2ZW50IHRhcmdldC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIEV2ZW50IHR5cGUuXG4gKiBAcGFyYW0ge29sLkV2ZW50c0xpc3RlbmVyRnVuY3Rpb25UeXBlfSBsaXN0ZW5lciBMaXN0ZW5lci5cbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0X3RoaXMgT2JqZWN0IHJlZmVyZW5jZWQgYnkgdGhlIGB0aGlzYCBrZXl3b3JkIGluIHRoZVxuICogICAgIGxpc3RlbmVyLiBEZWZhdWx0IGlzIHRoZSBgdGFyZ2V0YC5cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdF9vbmNlIElmIHRydWUsIGFkZCB0aGUgbGlzdGVuZXIgYXMgb25lLW9mZiBsaXN0ZW5lci5cbiAqIEByZXR1cm4ge29sLkV2ZW50c0tleX0gVW5pcXVlIGtleSBmb3IgdGhlIGxpc3RlbmVyLlxuICovXG5fb2xfZXZlbnRzXy5saXN0ZW4gPSBmdW5jdGlvbih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBvcHRfdGhpcywgb3B0X29uY2UpIHtcbiAgdmFyIGxpc3RlbmVyTWFwID0gX29sX2V2ZW50c18uZ2V0TGlzdGVuZXJNYXBfKHRhcmdldCk7XG4gIHZhciBsaXN0ZW5lcnMgPSBsaXN0ZW5lck1hcFt0eXBlXTtcbiAgaWYgKCFsaXN0ZW5lcnMpIHtcbiAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lck1hcFt0eXBlXSA9IFtdO1xuICB9XG4gIHZhciBsaXN0ZW5lck9iaiA9IF9vbF9ldmVudHNfLmZpbmRMaXN0ZW5lcl8obGlzdGVuZXJzLCBsaXN0ZW5lciwgb3B0X3RoaXMsXG4gICAgICBmYWxzZSk7XG4gIGlmIChsaXN0ZW5lck9iaikge1xuICAgIGlmICghb3B0X29uY2UpIHtcbiAgICAgIC8vIFR1cm4gb25lLW9mZiBsaXN0ZW5lciBpbnRvIGEgcGVybWFuZW50IG9uZS5cbiAgICAgIGxpc3RlbmVyT2JqLmNhbGxPbmNlID0gZmFsc2U7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxpc3RlbmVyT2JqID0gLyoqIEB0eXBlIHtvbC5FdmVudHNLZXl9ICovICh7XG4gICAgICBiaW5kVG86IG9wdF90aGlzLFxuICAgICAgY2FsbE9uY2U6ICEhb3B0X29uY2UsXG4gICAgICBsaXN0ZW5lcjogbGlzdGVuZXIsXG4gICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9KTtcbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBfb2xfZXZlbnRzXy5iaW5kTGlzdGVuZXJfKGxpc3RlbmVyT2JqKSk7XG4gICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXJPYmopO1xuICB9XG5cbiAgcmV0dXJuIGxpc3RlbmVyT2JqO1xufTtcblxuXG4vKipcbiAqIFJlZ2lzdGVycyBhIG9uZS1vZmYgZXZlbnQgbGlzdGVuZXIgb24gYW4gZXZlbnQgdGFyZ2V0LiBJbnNwaXJlZCBieVxuICoge0BsaW5rIGh0dHBzOi8vZ29vZ2xlLmdpdGh1Yi5pby9jbG9zdXJlLWxpYnJhcnkvYXBpL3NvdXJjZS9jbG9zdXJlL2dvb2cvZXZlbnRzL2V2ZW50cy5qcy5zcmMuaHRtbH1cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGVmZmljaWVudGx5IGJpbmRzIGEgYGxpc3RlbmVyYCBhcyBzZWxmLXVucmVnaXN0ZXJpbmcgbGlzdGVuZXJcbiAqIHRvIGEgYHRoaXNgIG9iamVjdCwgYW5kIHJldHVybnMgYSBrZXkgZm9yIHVzZSB3aXRoXG4gKiB7QGxpbmsgb2wuZXZlbnRzLnVubGlzdGVuQnlLZXl9IGluIGNhc2UgdGhlIGxpc3RlbmVyIG5lZWRzIHRvIGJlIHVucmVnaXN0ZXJlZFxuICogYmVmb3JlIGl0IGlzIGNhbGxlZC5cbiAqXG4gKiBXaGVuIHtAbGluayBvbC5ldmVudHMubGlzdGVufSBpcyBjYWxsZWQgd2l0aCB0aGUgc2FtZSBhcmd1bWVudHMgYWZ0ZXIgdGhpc1xuICogZnVuY3Rpb24sIHRoZSBzZWxmLXVucmVnaXN0ZXJpbmcgbGlzdGVuZXIgd2lsbCBiZSB0dXJuZWQgaW50byBhIHBlcm1hbmVudFxuICogbGlzdGVuZXIuXG4gKlxuICogQHBhcmFtIHtvbC5FdmVudFRhcmdldExpa2V9IHRhcmdldCBFdmVudCB0YXJnZXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBFdmVudCB0eXBlLlxuICogQHBhcmFtIHtvbC5FdmVudHNMaXN0ZW5lckZ1bmN0aW9uVHlwZX0gbGlzdGVuZXIgTGlzdGVuZXIuXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdF90aGlzIE9iamVjdCByZWZlcmVuY2VkIGJ5IHRoZSBgdGhpc2Aga2V5d29yZCBpbiB0aGVcbiAqICAgICBsaXN0ZW5lci4gRGVmYXVsdCBpcyB0aGUgYHRhcmdldGAuXG4gKiBAcmV0dXJuIHtvbC5FdmVudHNLZXl9IEtleSBmb3IgdW5saXN0ZW5CeUtleS5cbiAqL1xuX29sX2V2ZW50c18ubGlzdGVuT25jZSA9IGZ1bmN0aW9uKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIG9wdF90aGlzKSB7XG4gIHJldHVybiBfb2xfZXZlbnRzXy5saXN0ZW4odGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgb3B0X3RoaXMsIHRydWUpO1xufTtcblxuXG4vKipcbiAqIFVucmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIG9uIGFuIGV2ZW50IHRhcmdldC4gSW5zcGlyZWQgYnlcbiAqIHtAbGluayBodHRwczovL2dvb2dsZS5naXRodWIuaW8vY2xvc3VyZS1saWJyYXJ5L2FwaS9zb3VyY2UvY2xvc3VyZS9nb29nL2V2ZW50cy9ldmVudHMuanMuc3JjLmh0bWx9XG4gKlxuICogVG8gcmV0dXJuIGEgbGlzdGVuZXIsIHRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgY2FsbGVkIHdpdGggdGhlIGV4YWN0IHNhbWVcbiAqIGFyZ3VtZW50cyB0aGF0IHdlcmUgdXNlZCBmb3IgYSBwcmV2aW91cyB7QGxpbmsgb2wuZXZlbnRzLmxpc3Rlbn0gY2FsbC5cbiAqXG4gKiBAcGFyYW0ge29sLkV2ZW50VGFyZ2V0TGlrZX0gdGFyZ2V0IEV2ZW50IHRhcmdldC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIEV2ZW50IHR5cGUuXG4gKiBAcGFyYW0ge29sLkV2ZW50c0xpc3RlbmVyRnVuY3Rpb25UeXBlfSBsaXN0ZW5lciBMaXN0ZW5lci5cbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0X3RoaXMgT2JqZWN0IHJlZmVyZW5jZWQgYnkgdGhlIGB0aGlzYCBrZXl3b3JkIGluIHRoZVxuICogICAgIGxpc3RlbmVyLiBEZWZhdWx0IGlzIHRoZSBgdGFyZ2V0YC5cbiAqL1xuX29sX2V2ZW50c18udW5saXN0ZW4gPSBmdW5jdGlvbih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBvcHRfdGhpcykge1xuICB2YXIgbGlzdGVuZXJzID0gX29sX2V2ZW50c18uZ2V0TGlzdGVuZXJzKHRhcmdldCwgdHlwZSk7XG4gIGlmIChsaXN0ZW5lcnMpIHtcbiAgICB2YXIgbGlzdGVuZXJPYmogPSBfb2xfZXZlbnRzXy5maW5kTGlzdGVuZXJfKGxpc3RlbmVycywgbGlzdGVuZXIsIG9wdF90aGlzLFxuICAgICAgICB0cnVlKTtcbiAgICBpZiAobGlzdGVuZXJPYmopIHtcbiAgICAgIF9vbF9ldmVudHNfLnVubGlzdGVuQnlLZXkobGlzdGVuZXJPYmopO1xuICAgIH1cbiAgfVxufTtcblxuXG4vKipcbiAqIFVucmVnaXN0ZXJzIGV2ZW50IGxpc3RlbmVycyBvbiBhbiBldmVudCB0YXJnZXQuIEluc3BpcmVkIGJ5XG4gKiB7QGxpbmsgaHR0cHM6Ly9nb29nbGUuZ2l0aHViLmlvL2Nsb3N1cmUtbGlicmFyeS9hcGkvc291cmNlL2Nsb3N1cmUvZ29vZy9ldmVudHMvZXZlbnRzLmpzLnNyYy5odG1sfVxuICpcbiAqIFRoZSBhcmd1bWVudCBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbiBpcyB0aGUga2V5IHJldHVybmVkIGZyb21cbiAqIHtAbGluayBvbC5ldmVudHMubGlzdGVufSBvciB7QGxpbmsgb2wuZXZlbnRzLmxpc3Rlbk9uY2V9LlxuICpcbiAqIEBwYXJhbSB7b2wuRXZlbnRzS2V5fSBrZXkgVGhlIGtleS5cbiAqL1xuX29sX2V2ZW50c18udW5saXN0ZW5CeUtleSA9IGZ1bmN0aW9uKGtleSkge1xuICBpZiAoa2V5ICYmIGtleS50YXJnZXQpIHtcbiAgICBrZXkudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoa2V5LnR5cGUsIGtleS5ib3VuZExpc3RlbmVyKTtcbiAgICB2YXIgbGlzdGVuZXJzID0gX29sX2V2ZW50c18uZ2V0TGlzdGVuZXJzKGtleS50YXJnZXQsIGtleS50eXBlKTtcbiAgICBpZiAobGlzdGVuZXJzKSB7XG4gICAgICB2YXIgaSA9ICdkZWxldGVJbmRleCcgaW4ga2V5ID8ga2V5LmRlbGV0ZUluZGV4IDogbGlzdGVuZXJzLmluZGV4T2Yoa2V5KTtcbiAgICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgICAgaWYgKGxpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgX29sX2V2ZW50c18ucmVtb3ZlTGlzdGVuZXJzXyhrZXkudGFyZ2V0LCBrZXkudHlwZSk7XG4gICAgICB9XG4gICAgfVxuICAgIF9vbF9vYmpfLmNsZWFyKGtleSk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBVbnJlZ2lzdGVycyBhbGwgZXZlbnQgbGlzdGVuZXJzIG9uIGFuIGV2ZW50IHRhcmdldC4gSW5zcGlyZWQgYnlcbiAqIHtAbGluayBodHRwczovL2dvb2dsZS5naXRodWIuaW8vY2xvc3VyZS1saWJyYXJ5L2FwaS9zb3VyY2UvY2xvc3VyZS9nb29nL2V2ZW50cy9ldmVudHMuanMuc3JjLmh0bWx9XG4gKlxuICogQHBhcmFtIHtvbC5FdmVudFRhcmdldExpa2V9IHRhcmdldCBUYXJnZXQuXG4gKi9cbl9vbF9ldmVudHNfLnVubGlzdGVuQWxsID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gIHZhciBsaXN0ZW5lck1hcCA9IF9vbF9ldmVudHNfLmdldExpc3RlbmVyTWFwXyh0YXJnZXQpO1xuICBmb3IgKHZhciB0eXBlIGluIGxpc3RlbmVyTWFwKSB7XG4gICAgX29sX2V2ZW50c18ucmVtb3ZlTGlzdGVuZXJzXyh0YXJnZXQsIHR5cGUpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgX29sX2V2ZW50c187XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9ldmVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9vbF9vYmpfID0ge307XG5cblxuLyoqXG4gKiBQb2x5ZmlsbCBmb3IgT2JqZWN0LmFzc2lnbigpLiAgQXNzaWducyBlbnVtZXJhYmxlIGFuZCBvd24gcHJvcGVydGllcyBmcm9tXG4gKiBvbmUgb3IgbW9yZSBzb3VyY2Ugb2JqZWN0cyB0byBhIHRhcmdldCBvYmplY3QuXG4gKlxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvYXNzaWduXG4gKiBAcGFyYW0geyFPYmplY3R9IHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdC5cbiAqIEBwYXJhbSB7Li4uT2JqZWN0fSB2YXJfc291cmNlcyBUaGUgc291cmNlIG9iamVjdChzKS5cbiAqIEByZXR1cm4geyFPYmplY3R9IFRoZSBtb2RpZmllZCB0YXJnZXQgb2JqZWN0LlxuICovXG5fb2xfb2JqXy5hc3NpZ24gPSAodHlwZW9mIE9iamVjdC5hc3NpZ24gPT09ICdmdW5jdGlvbicpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uKHRhcmdldCwgdmFyX3NvdXJjZXMpIHtcbiAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkIHx8IHRhcmdldCA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xuICB9XG5cbiAgdmFyIG91dHB1dCA9IE9iamVjdCh0YXJnZXQpO1xuICBmb3IgKHZhciBpID0gMSwgaWkgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkICYmIHNvdXJjZSAhPT0gbnVsbCkge1xuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBvdXRwdXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59O1xuXG5cbi8qKlxuICogUmVtb3ZlcyBhbGwgcHJvcGVydGllcyBmcm9tIGFuIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbGVhci5cbiAqL1xuX29sX29ial8uY2xlYXIgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gb2JqZWN0KSB7XG4gICAgZGVsZXRlIG9iamVjdFtwcm9wZXJ0eV07XG4gIH1cbn07XG5cblxuLyoqXG4gKiBHZXQgYW4gYXJyYXkgb2YgcHJvcGVydHkgdmFsdWVzIGZyb20gYW4gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3Q8SyxWPn0gb2JqZWN0IFRoZSBvYmplY3QgZnJvbSB3aGljaCB0byBnZXQgdGhlIHZhbHVlcy5cbiAqIEByZXR1cm4geyFBcnJheTxWPn0gVGhlIHByb3BlcnR5IHZhbHVlcy5cbiAqIEB0ZW1wbGF0ZSBLLFZcbiAqL1xuX29sX29ial8uZ2V0VmFsdWVzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gIHZhciB2YWx1ZXMgPSBbXTtcbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gb2JqZWN0KSB7XG4gICAgdmFsdWVzLnB1c2gob2JqZWN0W3Byb3BlcnR5XSk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlcztcbn07XG5cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGhhcyBhbnkgcHJvcGVydGllcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRoZSBvYmplY3QgaXMgZW1wdHkuXG4gKi9cbl9vbF9vYmpfLmlzRW1wdHkgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgdmFyIHByb3BlcnR5O1xuICBmb3IgKHByb3BlcnR5IGluIG9iamVjdCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gIXByb3BlcnR5O1xufTtcbmV4cG9ydCBkZWZhdWx0IF9vbF9vYmpfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvb2JqLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfb2xfdGlsZWNvb3JkXyA9IHt9O1xuXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHogWi5cbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFguXG4gKiBAcGFyYW0ge251bWJlcn0geSBZLlxuICogQHBhcmFtIHtvbC5UaWxlQ29vcmQ9fSBvcHRfdGlsZUNvb3JkIFRpbGUgY29vcmRpbmF0ZS5cbiAqIEByZXR1cm4ge29sLlRpbGVDb29yZH0gVGlsZSBjb29yZGluYXRlLlxuICovXG5fb2xfdGlsZWNvb3JkXy5jcmVhdGVPclVwZGF0ZSA9IGZ1bmN0aW9uKHosIHgsIHksIG9wdF90aWxlQ29vcmQpIHtcbiAgaWYgKG9wdF90aWxlQ29vcmQgIT09IHVuZGVmaW5lZCkge1xuICAgIG9wdF90aWxlQ29vcmRbMF0gPSB6O1xuICAgIG9wdF90aWxlQ29vcmRbMV0gPSB4O1xuICAgIG9wdF90aWxlQ29vcmRbMl0gPSB5O1xuICAgIHJldHVybiBvcHRfdGlsZUNvb3JkO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBbeiwgeCwgeV07XG4gIH1cbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0geiBaLlxuICogQHBhcmFtIHtudW1iZXJ9IHggWC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB5IFkuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEtleS5cbiAqL1xuX29sX3RpbGVjb29yZF8uZ2V0S2V5WlhZID0gZnVuY3Rpb24oeiwgeCwgeSkge1xuICByZXR1cm4geiArICcvJyArIHggKyAnLycgKyB5O1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUga2V5IGZvciBhIHRpbGUgY29vcmQuXG4gKiBAcGFyYW0ge29sLlRpbGVDb29yZH0gdGlsZUNvb3JkIFRoZSB0aWxlIGNvb3JkLlxuICogQHJldHVybiB7c3RyaW5nfSBLZXkuXG4gKi9cbl9vbF90aWxlY29vcmRfLmdldEtleSA9IGZ1bmN0aW9uKHRpbGVDb29yZCkge1xuICByZXR1cm4gX29sX3RpbGVjb29yZF8uZ2V0S2V5WlhZKHRpbGVDb29yZFswXSwgdGlsZUNvb3JkWzFdLCB0aWxlQ29vcmRbMl0pO1xufTtcblxuXG4vKipcbiAqIEdldCBhIHRpbGUgY29vcmQgZ2l2ZW4gYSBrZXkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSB0aWxlIGNvb3JkIGtleS5cbiAqIEByZXR1cm4ge29sLlRpbGVDb29yZH0gVGhlIHRpbGUgY29vcmQuXG4gKi9cbl9vbF90aWxlY29vcmRfLmZyb21LZXkgPSBmdW5jdGlvbihrZXkpIHtcbiAgcmV0dXJuIGtleS5zcGxpdCgnLycpLm1hcChOdW1iZXIpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wuVGlsZUNvb3JkfSB0aWxlQ29vcmQgVGlsZSBjb29yZC5cbiAqIEByZXR1cm4ge251bWJlcn0gSGFzaC5cbiAqL1xuX29sX3RpbGVjb29yZF8uaGFzaCA9IGZ1bmN0aW9uKHRpbGVDb29yZCkge1xuICByZXR1cm4gKHRpbGVDb29yZFsxXSA8PCB0aWxlQ29vcmRbMF0pICsgdGlsZUNvb3JkWzJdO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wuVGlsZUNvb3JkfSB0aWxlQ29vcmQgVGlsZSBjb29yZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gUXVhZCBrZXkuXG4gKi9cbl9vbF90aWxlY29vcmRfLnF1YWRLZXkgPSBmdW5jdGlvbih0aWxlQ29vcmQpIHtcbiAgdmFyIHogPSB0aWxlQ29vcmRbMF07XG4gIHZhciBkaWdpdHMgPSBuZXcgQXJyYXkoeik7XG4gIHZhciBtYXNrID0gMSA8PCAoeiAtIDEpO1xuICB2YXIgaSwgY2hhckNvZGU7XG4gIGZvciAoaSA9IDA7IGkgPCB6OyArK2kpIHtcbiAgICAvLyA0OCBpcyBjaGFyQ29kZSBmb3IgMCAtICcwJy5jaGFyQ29kZUF0KDApXG4gICAgY2hhckNvZGUgPSA0ODtcbiAgICBpZiAodGlsZUNvb3JkWzFdICYgbWFzaykge1xuICAgICAgY2hhckNvZGUgKz0gMTtcbiAgICB9XG4gICAgaWYgKHRpbGVDb29yZFsyXSAmIG1hc2spIHtcbiAgICAgIGNoYXJDb2RlICs9IDI7XG4gICAgfVxuICAgIGRpZ2l0c1tpXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhckNvZGUpO1xuICAgIG1hc2sgPj49IDE7XG4gIH1cbiAgcmV0dXJuIGRpZ2l0cy5qb2luKCcnKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge29sLlRpbGVDb29yZH0gdGlsZUNvb3JkIFRpbGUgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7IW9sLnRpbGVncmlkLlRpbGVHcmlkfSB0aWxlR3JpZCBUaWxlIGdyaWQuXG4gKiBAcmV0dXJuIHtib29sZWFufSBUaWxlIGNvb3JkaW5hdGUgaXMgd2l0aGluIGV4dGVudCBhbmQgem9vbSBsZXZlbCByYW5nZS5cbiAqL1xuX29sX3RpbGVjb29yZF8ud2l0aGluRXh0ZW50QW5kWiA9IGZ1bmN0aW9uKHRpbGVDb29yZCwgdGlsZUdyaWQpIHtcbiAgdmFyIHogPSB0aWxlQ29vcmRbMF07XG4gIHZhciB4ID0gdGlsZUNvb3JkWzFdO1xuICB2YXIgeSA9IHRpbGVDb29yZFsyXTtcblxuICBpZiAodGlsZUdyaWQuZ2V0TWluWm9vbSgpID4geiB8fCB6ID4gdGlsZUdyaWQuZ2V0TWF4Wm9vbSgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBleHRlbnQgPSB0aWxlR3JpZC5nZXRFeHRlbnQoKTtcbiAgdmFyIHRpbGVSYW5nZTtcbiAgaWYgKCFleHRlbnQpIHtcbiAgICB0aWxlUmFuZ2UgPSB0aWxlR3JpZC5nZXRGdWxsVGlsZVJhbmdlKHopO1xuICB9IGVsc2Uge1xuICAgIHRpbGVSYW5nZSA9IHRpbGVHcmlkLmdldFRpbGVSYW5nZUZvckV4dGVudEFuZFooZXh0ZW50LCB6KTtcbiAgfVxuICBpZiAoIXRpbGVSYW5nZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aWxlUmFuZ2UuY29udGFpbnNYWSh4LCB5KTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IF9vbF90aWxlY29vcmRfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvdGlsZWNvb3JkLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGVudW0ge251bWJlcn1cbiAqL1xudmFyIF9vbF9UaWxlU3RhdGVfID0ge1xuICBJRExFOiAwLFxuICBMT0FESU5HOiAxLFxuICBMT0FERUQ6IDIsXG4gIEVSUk9SOiAzLFxuICBFTVBUWTogNCxcbiAgQUJPUlQ6IDVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IF9vbF9UaWxlU3RhdGVfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvdGlsZXN0YXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfb2xfQXNzZXJ0aW9uRXJyb3JfIGZyb20gJy4vYXNzZXJ0aW9uZXJyb3IuanMnO1xudmFyIF9vbF9hc3NlcnRzXyA9IHt9O1xuXG5cbi8qKlxuICogQHBhcmFtIHsqfSBhc3NlcnRpb24gQXNzZXJ0aW9uIHdlIGV4cGVjdGVkIHRvIGJlIHRydXRoeS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlcnJvckNvZGUgRXJyb3IgY29kZS5cbiAqL1xuX29sX2Fzc2VydHNfLmFzc2VydCA9IGZ1bmN0aW9uKGFzc2VydGlvbiwgZXJyb3JDb2RlKSB7XG4gIGlmICghYXNzZXJ0aW9uKSB7XG4gICAgdGhyb3cgbmV3IF9vbF9Bc3NlcnRpb25FcnJvcl8oZXJyb3JDb2RlKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IF9vbF9hc3NlcnRzXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL2Fzc2VydHMuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBQcm9qZWN0aW9uIHVuaXRzOiBgJ2RlZ3JlZXMnYCwgYCdmdCdgLCBgJ20nYCwgYCdwaXhlbHMnYCwgYCd0aWxlLXBpeGVscydgIG9yXG4gKiBgJ3VzLWZ0J2AuXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG52YXIgX29sX3Byb2pfVW5pdHNfID0ge1xuICBERUdSRUVTOiAnZGVncmVlcycsXG4gIEZFRVQ6ICdmdCcsXG4gIE1FVEVSUzogJ20nLFxuICBQSVhFTFM6ICdwaXhlbHMnLFxuICBUSUxFX1BJWEVMUzogJ3RpbGUtcGl4ZWxzJyxcbiAgVVNGRUVUOiAndXMtZnQnXG59O1xuXG5cbi8qKlxuICogTWV0ZXJzIHBlciB1bml0IGxvb2t1cCB0YWJsZS5cbiAqIEBjb25zdFxuICogQHR5cGUge09iamVjdC48b2wucHJvai5Vbml0cywgbnVtYmVyPn1cbiAqIEBhcGlcbiAqL1xuX29sX3Byb2pfVW5pdHNfLk1FVEVSU19QRVJfVU5JVCA9IHt9O1xuLy8gdXNlIHRoZSByYWRpdXMgb2YgdGhlIE5vcm1hbCBzcGhlcmVcbl9vbF9wcm9qX1VuaXRzXy5NRVRFUlNfUEVSX1VOSVRbX29sX3Byb2pfVW5pdHNfLkRFR1JFRVNdID1cbiAgICAyICogTWF0aC5QSSAqIDYzNzA5OTcgLyAzNjA7XG5fb2xfcHJval9Vbml0c18uTUVURVJTX1BFUl9VTklUW19vbF9wcm9qX1VuaXRzXy5GRUVUXSA9IDAuMzA0ODtcbl9vbF9wcm9qX1VuaXRzXy5NRVRFUlNfUEVSX1VOSVRbX29sX3Byb2pfVW5pdHNfLk1FVEVSU10gPSAxO1xuX29sX3Byb2pfVW5pdHNfLk1FVEVSU19QRVJfVU5JVFtfb2xfcHJval9Vbml0c18uVVNGRUVUXSA9IDEyMDAgLyAzOTM3O1xuZXhwb3J0IGRlZmF1bHQgX29sX3Byb2pfVW5pdHNfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvcHJvai91bml0cy5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF9vbF8gZnJvbSAnLi4vaW5kZXguanMnO1xuaW1wb3J0IF9vbF9EaXNwb3NhYmxlXyBmcm9tICcuLi9kaXNwb3NhYmxlLmpzJztcbmltcG9ydCBfb2xfZXZlbnRzXyBmcm9tICcuLi9ldmVudHMuanMnO1xuaW1wb3J0IF9vbF9ldmVudHNfRXZlbnRfIGZyb20gJy4uL2V2ZW50cy9ldmVudC5qcyc7XG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogQSBzaW1wbGlmaWVkIGltcGxlbWVudGF0aW9uIG9mIHRoZSBXM0MgRE9NIExldmVsIDIgRXZlbnRUYXJnZXQgaW50ZXJmYWNlLlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93d3cudzMub3JnL1RSLzIwMDAvUkVDLURPTS1MZXZlbC0yLUV2ZW50cy0yMDAwMTExMy9ldmVudHMuaHRtbCNFdmVudHMtRXZlbnRUYXJnZXR9XG4gKlxuICogVGhlcmUgYXJlIHR3byBpbXBvcnRhbnQgc2ltcGxpZmljYXRpb25zIGNvbXBhcmVkIHRvIHRoZSBzcGVjaWZpY2F0aW9uOlxuICpcbiAqIDEuIFRoZSBoYW5kbGluZyBvZiBgdXNlQ2FwdHVyZWAgaW4gYGFkZEV2ZW50TGlzdGVuZXJgIGFuZFxuICogICAgYHJlbW92ZUV2ZW50TGlzdGVuZXJgLiBUaGVyZSBpcyBubyByZWFsIGNhcHR1cmUgbW9kZWwuXG4gKiAyLiBUaGUgaGFuZGxpbmcgb2YgYHN0b3BQcm9wYWdhdGlvbmAgYW5kIGBwcmV2ZW50RGVmYXVsdGAgb24gYGRpc3BhdGNoRXZlbnRgLlxuICogICAgVGhlcmUgaXMgbm8gZXZlbnQgdGFyZ2V0IGhpZXJhcmNoeS4gV2hlbiBhIGxpc3RlbmVyIGNhbGxzXG4gKiAgICBgc3RvcFByb3BhZ2F0aW9uYCBvciBgcHJldmVudERlZmF1bHRgIG9uIGFuIGV2ZW50IG9iamVjdCwgaXQgbWVhbnMgdGhhdCBub1xuICogICAgbW9yZSBsaXN0ZW5lcnMgYWZ0ZXIgdGhpcyBvbmUgd2lsbCBiZSBjYWxsZWQuIFNhbWUgYXMgd2hlbiB0aGUgbGlzdGVuZXJcbiAqICAgIHJldHVybnMgZmFsc2UuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAZXh0ZW5kcyB7b2wuRGlzcG9zYWJsZX1cbiAqL1xudmFyIF9vbF9ldmVudHNfRXZlbnRUYXJnZXRfID0gZnVuY3Rpb24oKSB7XG5cbiAgX29sX0Rpc3Bvc2FibGVfLmNhbGwodGhpcyk7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHshT2JqZWN0LjxzdHJpbmcsIG51bWJlcj59XG4gICAqL1xuICB0aGlzLnBlbmRpbmdSZW1vdmFsc18gPSB7fTtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUgeyFPYmplY3QuPHN0cmluZywgbnVtYmVyPn1cbiAgICovXG4gIHRoaXMuZGlzcGF0Y2hpbmdfID0ge307XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHshT2JqZWN0LjxzdHJpbmcsIEFycmF5LjxvbC5FdmVudHNMaXN0ZW5lckZ1bmN0aW9uVHlwZT4+fVxuICAgKi9cbiAgdGhpcy5saXN0ZW5lcnNfID0ge307XG5cbn07XG5cbl9vbF8uaW5oZXJpdHMoX29sX2V2ZW50c19FdmVudFRhcmdldF8sIF9vbF9EaXNwb3NhYmxlXyk7XG5cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUeXBlLlxuICogQHBhcmFtIHtvbC5FdmVudHNMaXN0ZW5lckZ1bmN0aW9uVHlwZX0gbGlzdGVuZXIgTGlzdGVuZXIuXG4gKi9cbl9vbF9ldmVudHNfRXZlbnRUYXJnZXRfLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzX1t0eXBlXTtcbiAgaWYgKCFsaXN0ZW5lcnMpIHtcbiAgICBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc19bdHlwZV0gPSBbXTtcbiAgfVxuICBpZiAobGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpID09PSAtMSkge1xuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7e3R5cGU6IHN0cmluZyxcbiAqICAgICB0YXJnZXQ6IChFdmVudFRhcmdldHxvbC5ldmVudHMuRXZlbnRUYXJnZXR8dW5kZWZpbmVkKX18b2wuZXZlbnRzLkV2ZW50fFxuICogICAgIHN0cmluZ30gZXZlbnQgRXZlbnQgb3IgZXZlbnQgdHlwZS5cbiAqIEByZXR1cm4ge2Jvb2xlYW58dW5kZWZpbmVkfSBgZmFsc2VgIGlmIGFueW9uZSBjYWxsZWQgcHJldmVudERlZmF1bHQgb24gdGhlXG4gKiAgICAgZXZlbnQgb2JqZWN0IG9yIGlmIGFueSBvZiB0aGUgbGlzdGVuZXJzIHJldHVybmVkIGZhbHNlLlxuICovXG5fb2xfZXZlbnRzX0V2ZW50VGFyZ2V0Xy5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIHZhciBldnQgPSB0eXBlb2YgZXZlbnQgPT09ICdzdHJpbmcnID8gbmV3IF9vbF9ldmVudHNfRXZlbnRfKGV2ZW50KSA6IGV2ZW50O1xuICB2YXIgdHlwZSA9IGV2dC50eXBlO1xuICBldnQudGFyZ2V0ID0gdGhpcztcbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzX1t0eXBlXTtcbiAgdmFyIHByb3BhZ2F0ZTtcbiAgaWYgKGxpc3RlbmVycykge1xuICAgIGlmICghKHR5cGUgaW4gdGhpcy5kaXNwYXRjaGluZ18pKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoaW5nX1t0eXBlXSA9IDA7XG4gICAgICB0aGlzLnBlbmRpbmdSZW1vdmFsc19bdHlwZV0gPSAwO1xuICAgIH1cbiAgICArK3RoaXMuZGlzcGF0Y2hpbmdfW3R5cGVdO1xuICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICBpZiAobGlzdGVuZXJzW2ldLmNhbGwodGhpcywgZXZ0KSA9PT0gZmFsc2UgfHwgZXZ0LnByb3BhZ2F0aW9uU3RvcHBlZCkge1xuICAgICAgICBwcm9wYWdhdGUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIC0tdGhpcy5kaXNwYXRjaGluZ19bdHlwZV07XG4gICAgaWYgKHRoaXMuZGlzcGF0Y2hpbmdfW3R5cGVdID09PSAwKSB7XG4gICAgICB2YXIgcGVuZGluZ1JlbW92YWxzID0gdGhpcy5wZW5kaW5nUmVtb3ZhbHNfW3R5cGVdO1xuICAgICAgZGVsZXRlIHRoaXMucGVuZGluZ1JlbW92YWxzX1t0eXBlXTtcbiAgICAgIHdoaWxlIChwZW5kaW5nUmVtb3ZhbHMtLSkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgX29sXy5udWxsRnVuY3Rpb24pO1xuICAgICAgfVxuICAgICAgZGVsZXRlIHRoaXMuZGlzcGF0Y2hpbmdfW3R5cGVdO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcGFnYXRlO1xuICB9XG59O1xuXG5cbi8qKlxuICogQGluaGVyaXREb2NcbiAqL1xuX29sX2V2ZW50c19FdmVudFRhcmdldF8ucHJvdG90eXBlLmRpc3Bvc2VJbnRlcm5hbCA9IGZ1bmN0aW9uKCkge1xuICBfb2xfZXZlbnRzXy51bmxpc3RlbkFsbCh0aGlzKTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIGxpc3RlbmVycyBmb3IgYSBzcGVjaWZpZWQgZXZlbnQgdHlwZS4gTGlzdGVuZXJzIGFyZSByZXR1cm5lZCBpbiB0aGVcbiAqIG9yZGVyIHRoYXQgdGhleSB3aWxsIGJlIGNhbGxlZCBpbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUeXBlLlxuICogQHJldHVybiB7QXJyYXkuPG9sLkV2ZW50c0xpc3RlbmVyRnVuY3Rpb25UeXBlPn0gTGlzdGVuZXJzLlxuICovXG5fb2xfZXZlbnRzX0V2ZW50VGFyZ2V0Xy5wcm90b3R5cGUuZ2V0TGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICByZXR1cm4gdGhpcy5saXN0ZW5lcnNfW3R5cGVdO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nPX0gb3B0X3R5cGUgVHlwZS4gSWYgbm90IHByb3ZpZGVkLFxuICogICAgIGB0cnVlYCB3aWxsIGJlIHJldHVybmVkIGlmIHRoaXMgRXZlbnRUYXJnZXQgaGFzIGFueSBsaXN0ZW5lcnMuXG4gKiBAcmV0dXJuIHtib29sZWFufSBIYXMgbGlzdGVuZXJzLlxuICovXG5fb2xfZXZlbnRzX0V2ZW50VGFyZ2V0Xy5wcm90b3R5cGUuaGFzTGlzdGVuZXIgPSBmdW5jdGlvbihvcHRfdHlwZSkge1xuICByZXR1cm4gb3B0X3R5cGUgP1xuICAgIG9wdF90eXBlIGluIHRoaXMubGlzdGVuZXJzXyA6XG4gICAgT2JqZWN0LmtleXModGhpcy5saXN0ZW5lcnNfKS5sZW5ndGggPiAwO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFR5cGUuXG4gKiBAcGFyYW0ge29sLkV2ZW50c0xpc3RlbmVyRnVuY3Rpb25UeXBlfSBsaXN0ZW5lciBMaXN0ZW5lci5cbiAqL1xuX29sX2V2ZW50c19FdmVudFRhcmdldF8ucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnNfW3R5cGVdO1xuICBpZiAobGlzdGVuZXJzKSB7XG4gICAgdmFyIGluZGV4ID0gbGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgIGlmICh0eXBlIGluIHRoaXMucGVuZGluZ1JlbW92YWxzXykge1xuICAgICAgLy8gbWFrZSBsaXN0ZW5lciBhIG5vLW9wLCBhbmQgcmVtb3ZlIGxhdGVyIGluICNkaXNwYXRjaEV2ZW50KClcbiAgICAgIGxpc3RlbmVyc1tpbmRleF0gPSBfb2xfLm51bGxGdW5jdGlvbjtcbiAgICAgICsrdGhpcy5wZW5kaW5nUmVtb3ZhbHNfW3R5cGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIGlmIChsaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmxpc3RlbmVyc19bdHlwZV07XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgX29sX2V2ZW50c19FdmVudFRhcmdldF87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9ldmVudHMvZXZlbnR0YXJnZXQuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGNsYXNzZGVzY1xuICogU3RyaXBwZWQgZG93biBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgVzNDIERPTSBMZXZlbCAyIEV2ZW50IGludGVyZmFjZS5cbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMi1FdmVudHMvZXZlbnRzLmh0bWwjRXZlbnRzLWludGVyZmFjZX1cbiAqXG4gKiBUaGlzIGltcGxlbWVudGF0aW9uIG9ubHkgcHJvdmlkZXMgYHR5cGVgIGFuZCBgdGFyZ2V0YCBwcm9wZXJ0aWVzLCBhbmRcbiAqIGBzdG9wUHJvcGFnYXRpb25gIGFuZCBgcHJldmVudERlZmF1bHRgIG1ldGhvZHMuIEl0IGlzIG1lYW50IGFzIGJhc2UgY2xhc3NcbiAqIGZvciBoaWdoZXIgbGV2ZWwgZXZlbnRzIGRlZmluZWQgaW4gdGhlIGxpYnJhcnksIGFuZCB3b3JrcyB3aXRoXG4gKiB7QGxpbmsgb2wuZXZlbnRzLkV2ZW50VGFyZ2V0fS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBpbXBsZW1lbnRzIHtvbGkuZXZlbnRzLkV2ZW50fVxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVHlwZS5cbiAqL1xudmFyIF9vbF9ldmVudHNfRXZlbnRfID0gZnVuY3Rpb24odHlwZSkge1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIHRoaXMucHJvcGFnYXRpb25TdG9wcGVkO1xuXG4gIC8qKlxuICAgKiBUaGUgZXZlbnQgdHlwZS5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGFwaVxuICAgKi9cbiAgdGhpcy50eXBlID0gdHlwZTtcblxuICAvKipcbiAgICogVGhlIGV2ZW50IHRhcmdldC5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICogQGFwaVxuICAgKi9cbiAgdGhpcy50YXJnZXQgPSBudWxsO1xuXG59O1xuXG5cbi8qKlxuICogU3RvcCBldmVudCBwcm9wYWdhdGlvbi5cbiAqIEBmdW5jdGlvblxuICogQG92ZXJyaWRlXG4gKiBAYXBpXG4gKi9cbl9vbF9ldmVudHNfRXZlbnRfLnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdCA9XG5cbiAgLyoqXG4gICAqIFN0b3AgZXZlbnQgcHJvcGFnYXRpb24uXG4gICAqIEBmdW5jdGlvblxuICAgKiBAb3ZlcnJpZGVcbiAgICogQGFwaVxuICAgKi9cbiAgX29sX2V2ZW50c19FdmVudF8ucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucHJvcGFnYXRpb25TdG9wcGVkID0gdHJ1ZTtcbiAgfTtcblxuXG4vKipcbiAqIEBwYXJhbSB7RXZlbnR8b2wuZXZlbnRzLkV2ZW50fSBldnQgRXZlbnRcbiAqL1xuX29sX2V2ZW50c19FdmVudF8uc3RvcFByb3BhZ2F0aW9uID0gZnVuY3Rpb24oZXZ0KSB7XG4gIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge0V2ZW50fG9sLmV2ZW50cy5FdmVudH0gZXZ0IEV2ZW50XG4gKi9cbl9vbF9ldmVudHNfRXZlbnRfLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24oZXZ0KSB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xufTtcbmV4cG9ydCBkZWZhdWx0IF9vbF9ldmVudHNfRXZlbnRfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvZXZlbnRzL2V2ZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgX29sXyBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCBfb2xfc2l6ZV8gZnJvbSAnLi9zaXplLmpzJztcbmltcG9ydCBfb2xfZXh0ZW50XyBmcm9tICcuL2V4dGVudC5qcyc7XG5pbXBvcnQgX29sX2V4dGVudF9Db3JuZXJfIGZyb20gJy4vZXh0ZW50L2Nvcm5lci5qcyc7XG5pbXBvcnQgX29sX29ial8gZnJvbSAnLi9vYmouanMnO1xuaW1wb3J0IF9vbF9wcm9qXyBmcm9tICcuL3Byb2ouanMnO1xuaW1wb3J0IF9vbF9wcm9qX1VuaXRzXyBmcm9tICcuL3Byb2ovdW5pdHMuanMnO1xuaW1wb3J0IF9vbF90aWxlZ3JpZF9UaWxlR3JpZF8gZnJvbSAnLi90aWxlZ3JpZC90aWxlZ3JpZC5qcyc7XG52YXIgX29sX3RpbGVncmlkXyA9IHt9O1xuXG5cbi8qKlxuICogQHBhcmFtIHtvbC5wcm9qLlByb2plY3Rpb259IHByb2plY3Rpb24gUHJvamVjdGlvbi5cbiAqIEByZXR1cm4geyFvbC50aWxlZ3JpZC5UaWxlR3JpZH0gRGVmYXVsdCB0aWxlIGdyaWQgZm9yIHRoZSBwYXNzZWQgcHJvamVjdGlvbi5cbiAqL1xuX29sX3RpbGVncmlkXy5nZXRGb3JQcm9qZWN0aW9uID0gZnVuY3Rpb24ocHJvamVjdGlvbikge1xuICB2YXIgdGlsZUdyaWQgPSBwcm9qZWN0aW9uLmdldERlZmF1bHRUaWxlR3JpZCgpO1xuICBpZiAoIXRpbGVHcmlkKSB7XG4gICAgdGlsZUdyaWQgPSBfb2xfdGlsZWdyaWRfLmNyZWF0ZUZvclByb2plY3Rpb24ocHJvamVjdGlvbik7XG4gICAgcHJvamVjdGlvbi5zZXREZWZhdWx0VGlsZUdyaWQodGlsZUdyaWQpO1xuICB9XG4gIHJldHVybiB0aWxlR3JpZDtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge29sLnRpbGVncmlkLlRpbGVHcmlkfSB0aWxlR3JpZCBUaWxlIGdyaWQuXG4gKiBAcGFyYW0ge29sLlRpbGVDb29yZH0gdGlsZUNvb3JkIFRpbGUgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7b2wucHJvai5Qcm9qZWN0aW9ufSBwcm9qZWN0aW9uIFByb2plY3Rpb24uXG4gKiBAcmV0dXJuIHtvbC5UaWxlQ29vcmR9IFRpbGUgY29vcmRpbmF0ZS5cbiAqL1xuX29sX3RpbGVncmlkXy53cmFwWCA9IGZ1bmN0aW9uKHRpbGVHcmlkLCB0aWxlQ29vcmQsIHByb2plY3Rpb24pIHtcbiAgdmFyIHogPSB0aWxlQ29vcmRbMF07XG4gIHZhciBjZW50ZXIgPSB0aWxlR3JpZC5nZXRUaWxlQ29vcmRDZW50ZXIodGlsZUNvb3JkKTtcbiAgdmFyIHByb2plY3Rpb25FeHRlbnQgPSBfb2xfdGlsZWdyaWRfLmV4dGVudEZyb21Qcm9qZWN0aW9uKHByb2plY3Rpb24pO1xuICBpZiAoIV9vbF9leHRlbnRfLmNvbnRhaW5zQ29vcmRpbmF0ZShwcm9qZWN0aW9uRXh0ZW50LCBjZW50ZXIpKSB7XG4gICAgdmFyIHdvcmxkV2lkdGggPSBfb2xfZXh0ZW50Xy5nZXRXaWR0aChwcm9qZWN0aW9uRXh0ZW50KTtcbiAgICB2YXIgd29ybGRzQXdheSA9IE1hdGguY2VpbCgocHJvamVjdGlvbkV4dGVudFswXSAtIGNlbnRlclswXSkgLyB3b3JsZFdpZHRoKTtcbiAgICBjZW50ZXJbMF0gKz0gd29ybGRXaWR0aCAqIHdvcmxkc0F3YXk7XG4gICAgcmV0dXJuIHRpbGVHcmlkLmdldFRpbGVDb29yZEZvckNvb3JkQW5kWihjZW50ZXIsIHopO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aWxlQ29vcmQ7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge29sLkV4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEBwYXJhbSB7bnVtYmVyPX0gb3B0X21heFpvb20gTWF4aW11bSB6b29tIGxldmVsIChkZWZhdWx0IGlzXG4gKiAgICAgb2wuREVGQVVMVF9NQVhfWk9PTSkuXG4gKiBAcGFyYW0ge251bWJlcnxvbC5TaXplPX0gb3B0X3RpbGVTaXplIFRpbGUgc2l6ZSAoZGVmYXVsdCB1c2VzXG4gKiAgICAgb2wuREVGQVVMVF9USUxFX1NJWkUpLlxuICogQHBhcmFtIHtvbC5leHRlbnQuQ29ybmVyPX0gb3B0X2Nvcm5lciBFeHRlbnQgY29ybmVyIChkZWZhdWx0IGlzXG4gKiAgICAgb2wuZXh0ZW50LkNvcm5lci5UT1BfTEVGVCkuXG4gKiBAcmV0dXJuIHshb2wudGlsZWdyaWQuVGlsZUdyaWR9IFRpbGVHcmlkIGluc3RhbmNlLlxuICovXG5fb2xfdGlsZWdyaWRfLmNyZWF0ZUZvckV4dGVudCA9IGZ1bmN0aW9uKGV4dGVudCwgb3B0X21heFpvb20sIG9wdF90aWxlU2l6ZSwgb3B0X2Nvcm5lcikge1xuICB2YXIgY29ybmVyID0gb3B0X2Nvcm5lciAhPT0gdW5kZWZpbmVkID9cbiAgICBvcHRfY29ybmVyIDogX29sX2V4dGVudF9Db3JuZXJfLlRPUF9MRUZUO1xuXG4gIHZhciByZXNvbHV0aW9ucyA9IF9vbF90aWxlZ3JpZF8ucmVzb2x1dGlvbnNGcm9tRXh0ZW50KFxuICAgICAgZXh0ZW50LCBvcHRfbWF4Wm9vbSwgb3B0X3RpbGVTaXplKTtcblxuICByZXR1cm4gbmV3IF9vbF90aWxlZ3JpZF9UaWxlR3JpZF8oe1xuICAgIGV4dGVudDogZXh0ZW50LFxuICAgIG9yaWdpbjogX29sX2V4dGVudF8uZ2V0Q29ybmVyKGV4dGVudCwgY29ybmVyKSxcbiAgICByZXNvbHV0aW9uczogcmVzb2x1dGlvbnMsXG4gICAgdGlsZVNpemU6IG9wdF90aWxlU2l6ZVxuICB9KTtcbn07XG5cblxuLyoqXG4gKiBDcmVhdGVzIGEgdGlsZSBncmlkIHdpdGggYSBzdGFuZGFyZCBYWVogdGlsaW5nIHNjaGVtZS5cbiAqIEBwYXJhbSB7b2x4LnRpbGVncmlkLlhZWk9wdGlvbnM9fSBvcHRfb3B0aW9ucyBUaWxlIGdyaWQgb3B0aW9ucy5cbiAqIEByZXR1cm4geyFvbC50aWxlZ3JpZC5UaWxlR3JpZH0gVGlsZSBncmlkIGluc3RhbmNlLlxuICogQGFwaVxuICovXG5fb2xfdGlsZWdyaWRfLmNyZWF0ZVhZWiA9IGZ1bmN0aW9uKG9wdF9vcHRpb25zKSB7XG4gIHZhciBvcHRpb25zID0gLyoqIEB0eXBlIHtvbHgudGlsZWdyaWQuVGlsZUdyaWRPcHRpb25zfSAqLyAoe30pO1xuICBfb2xfb2JqXy5hc3NpZ24ob3B0aW9ucywgb3B0X29wdGlvbnMgIT09IHVuZGVmaW5lZCA/XG4gICAgb3B0X29wdGlvbnMgOiAvKiogQHR5cGUge29seC50aWxlZ3JpZC5YWVpPcHRpb25zfSAqLyAoe30pKTtcbiAgaWYgKG9wdGlvbnMuZXh0ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICBvcHRpb25zLmV4dGVudCA9IF9vbF9wcm9qXy5nZXQoJ0VQU0c6Mzg1NycpLmdldEV4dGVudCgpO1xuICB9XG4gIG9wdGlvbnMucmVzb2x1dGlvbnMgPSBfb2xfdGlsZWdyaWRfLnJlc29sdXRpb25zRnJvbUV4dGVudChcbiAgICAgIG9wdGlvbnMuZXh0ZW50LCBvcHRpb25zLm1heFpvb20sIG9wdGlvbnMudGlsZVNpemUpO1xuICBkZWxldGUgb3B0aW9ucy5tYXhab29tO1xuXG4gIHJldHVybiBuZXcgX29sX3RpbGVncmlkX1RpbGVHcmlkXyhvcHRpb25zKTtcbn07XG5cblxuLyoqXG4gKiBDcmVhdGUgYSByZXNvbHV0aW9ucyBhcnJheSBmcm9tIGFuIGV4dGVudC4gIEEgem9vbSBmYWN0b3Igb2YgMiBpcyBhc3N1bWVkLlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcGFyYW0ge251bWJlcj19IG9wdF9tYXhab29tIE1heGltdW0gem9vbSBsZXZlbCAoZGVmYXVsdCBpc1xuICogICAgIG9sLkRFRkFVTFRfTUFYX1pPT00pLlxuICogQHBhcmFtIHtudW1iZXJ8b2wuU2l6ZT19IG9wdF90aWxlU2l6ZSBUaWxlIHNpemUgKGRlZmF1bHQgdXNlc1xuICogICAgIG9sLkRFRkFVTFRfVElMRV9TSVpFKS5cbiAqIEByZXR1cm4geyFBcnJheS48bnVtYmVyPn0gUmVzb2x1dGlvbnMgYXJyYXkuXG4gKi9cbl9vbF90aWxlZ3JpZF8ucmVzb2x1dGlvbnNGcm9tRXh0ZW50ID0gZnVuY3Rpb24oZXh0ZW50LCBvcHRfbWF4Wm9vbSwgb3B0X3RpbGVTaXplKSB7XG4gIHZhciBtYXhab29tID0gb3B0X21heFpvb20gIT09IHVuZGVmaW5lZCA/XG4gICAgb3B0X21heFpvb20gOiBfb2xfLkRFRkFVTFRfTUFYX1pPT007XG5cbiAgdmFyIGhlaWdodCA9IF9vbF9leHRlbnRfLmdldEhlaWdodChleHRlbnQpO1xuICB2YXIgd2lkdGggPSBfb2xfZXh0ZW50Xy5nZXRXaWR0aChleHRlbnQpO1xuXG4gIHZhciB0aWxlU2l6ZSA9IF9vbF9zaXplXy50b1NpemUob3B0X3RpbGVTaXplICE9PSB1bmRlZmluZWQgP1xuICAgIG9wdF90aWxlU2l6ZSA6IF9vbF8uREVGQVVMVF9USUxFX1NJWkUpO1xuICB2YXIgbWF4UmVzb2x1dGlvbiA9IE1hdGgubWF4KFxuICAgICAgd2lkdGggLyB0aWxlU2l6ZVswXSwgaGVpZ2h0IC8gdGlsZVNpemVbMV0pO1xuXG4gIHZhciBsZW5ndGggPSBtYXhab29tICsgMTtcbiAgdmFyIHJlc29sdXRpb25zID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gIGZvciAodmFyIHogPSAwOyB6IDwgbGVuZ3RoOyArK3opIHtcbiAgICByZXNvbHV0aW9uc1t6XSA9IG1heFJlc29sdXRpb24gLyBNYXRoLnBvdygyLCB6KTtcbiAgfVxuICByZXR1cm4gcmVzb2x1dGlvbnM7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtvbC5Qcm9qZWN0aW9uTGlrZX0gcHJvamVjdGlvbiBQcm9qZWN0aW9uLlxuICogQHBhcmFtIHtudW1iZXI9fSBvcHRfbWF4Wm9vbSBNYXhpbXVtIHpvb20gbGV2ZWwgKGRlZmF1bHQgaXNcbiAqICAgICBvbC5ERUZBVUxUX01BWF9aT09NKS5cbiAqIEBwYXJhbSB7bnVtYmVyfG9sLlNpemU9fSBvcHRfdGlsZVNpemUgVGlsZSBzaXplIChkZWZhdWx0IHVzZXNcbiAqICAgICBvbC5ERUZBVUxUX1RJTEVfU0laRSkuXG4gKiBAcGFyYW0ge29sLmV4dGVudC5Db3JuZXI9fSBvcHRfY29ybmVyIEV4dGVudCBjb3JuZXIgKGRlZmF1bHQgaXNcbiAqICAgICBvbC5leHRlbnQuQ29ybmVyLkJPVFRPTV9MRUZUKS5cbiAqIEByZXR1cm4geyFvbC50aWxlZ3JpZC5UaWxlR3JpZH0gVGlsZUdyaWQgaW5zdGFuY2UuXG4gKi9cbl9vbF90aWxlZ3JpZF8uY3JlYXRlRm9yUHJvamVjdGlvbiA9IGZ1bmN0aW9uKHByb2plY3Rpb24sIG9wdF9tYXhab29tLCBvcHRfdGlsZVNpemUsIG9wdF9jb3JuZXIpIHtcbiAgdmFyIGV4dGVudCA9IF9vbF90aWxlZ3JpZF8uZXh0ZW50RnJvbVByb2plY3Rpb24ocHJvamVjdGlvbik7XG4gIHJldHVybiBfb2xfdGlsZWdyaWRfLmNyZWF0ZUZvckV4dGVudChcbiAgICAgIGV4dGVudCwgb3B0X21heFpvb20sIG9wdF90aWxlU2l6ZSwgb3B0X2Nvcm5lcik7XG59O1xuXG5cbi8qKlxuICogR2VuZXJhdGUgYSB0aWxlIGdyaWQgZXh0ZW50IGZyb20gYSBwcm9qZWN0aW9uLiAgSWYgdGhlIHByb2plY3Rpb24gaGFzIGFuXG4gKiBleHRlbnQsIGl0IGlzIHVzZWQuICBJZiBub3QsIGEgZ2xvYmFsIGV4dGVudCBpcyBhc3N1bWVkLlxuICogQHBhcmFtIHtvbC5Qcm9qZWN0aW9uTGlrZX0gcHJvamVjdGlvbiBQcm9qZWN0aW9uLlxuICogQHJldHVybiB7b2wuRXh0ZW50fSBFeHRlbnQuXG4gKi9cbl9vbF90aWxlZ3JpZF8uZXh0ZW50RnJvbVByb2plY3Rpb24gPSBmdW5jdGlvbihwcm9qZWN0aW9uKSB7XG4gIHByb2plY3Rpb24gPSBfb2xfcHJval8uZ2V0KHByb2plY3Rpb24pO1xuICB2YXIgZXh0ZW50ID0gcHJvamVjdGlvbi5nZXRFeHRlbnQoKTtcbiAgaWYgKCFleHRlbnQpIHtcbiAgICB2YXIgaGFsZiA9IDE4MCAqIF9vbF9wcm9qXy5NRVRFUlNfUEVSX1VOSVRbX29sX3Byb2pfVW5pdHNfLkRFR1JFRVNdIC9cbiAgICAgICAgcHJvamVjdGlvbi5nZXRNZXRlcnNQZXJVbml0KCk7XG4gICAgZXh0ZW50ID0gX29sX2V4dGVudF8uY3JlYXRlT3JVcGRhdGUoLWhhbGYsIC1oYWxmLCBoYWxmLCBoYWxmKTtcbiAgfVxuICByZXR1cm4gZXh0ZW50O1xufTtcbmV4cG9ydCBkZWZhdWx0IF9vbF90aWxlZ3JpZF87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC90aWxlZ3JpZC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF9vbF8gZnJvbSAnLi9pbmRleC5qcyc7XG5pbXBvcnQgX29sX09iamVjdEV2ZW50VHlwZV8gZnJvbSAnLi9vYmplY3RldmVudHR5cGUuanMnO1xuaW1wb3J0IF9vbF9PYnNlcnZhYmxlXyBmcm9tICcuL29ic2VydmFibGUuanMnO1xuaW1wb3J0IF9vbF9ldmVudHNfRXZlbnRfIGZyb20gJy4vZXZlbnRzL2V2ZW50LmpzJztcbmltcG9ydCBfb2xfb2JqXyBmcm9tICcuL29iai5qcyc7XG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogQWJzdHJhY3QgYmFzZSBjbGFzczsgbm9ybWFsbHkgb25seSB1c2VkIGZvciBjcmVhdGluZyBzdWJjbGFzc2VzIGFuZCBub3RcbiAqIGluc3RhbnRpYXRlZCBpbiBhcHBzLlxuICogTW9zdCBub24tdHJpdmlhbCBjbGFzc2VzIGluaGVyaXQgZnJvbSB0aGlzLlxuICpcbiAqIFRoaXMgZXh0ZW5kcyB7QGxpbmsgb2wuT2JzZXJ2YWJsZX0gd2l0aCBvYnNlcnZhYmxlIHByb3BlcnRpZXMsIHdoZXJlIGVhY2hcbiAqIHByb3BlcnR5IGlzIG9ic2VydmFibGUgYXMgd2VsbCBhcyB0aGUgb2JqZWN0IGFzIGEgd2hvbGUuXG4gKlxuICogQ2xhc3NlcyB0aGF0IGluaGVyaXQgZnJvbSB0aGlzIGhhdmUgcHJlLWRlZmluZWQgcHJvcGVydGllcywgdG8gd2hpY2ggeW91IGNhblxuICogYWRkIHlvdXIgb3ducy4gVGhlIHByZS1kZWZpbmVkIHByb3BlcnRpZXMgYXJlIGxpc3RlZCBpbiB0aGlzIGRvY3VtZW50YXRpb24gYXNcbiAqICdPYnNlcnZhYmxlIFByb3BlcnRpZXMnLCBhbmQgaGF2ZSB0aGVpciBvd24gYWNjZXNzb3JzOyBmb3IgZXhhbXBsZSxcbiAqIHtAbGluayBvbC5NYXB9IGhhcyBhIGB0YXJnZXRgIHByb3BlcnR5LCBhY2Nlc3NlZCB3aXRoIGBnZXRUYXJnZXQoKWAgIGFuZFxuICogY2hhbmdlZCB3aXRoIGBzZXRUYXJnZXQoKWAuIE5vdCBhbGwgcHJvcGVydGllcyBhcmUgaG93ZXZlciBzZXR0YWJsZS4gVGhlcmVcbiAqIGFyZSBhbHNvIGdlbmVyYWwtcHVycG9zZSBhY2Nlc3NvcnMgYGdldCgpYCBhbmQgYHNldCgpYC4gRm9yIGV4YW1wbGUsXG4gKiBgZ2V0KCd0YXJnZXQnKWAgaXMgZXF1aXZhbGVudCB0byBgZ2V0VGFyZ2V0KClgLlxuICpcbiAqIFRoZSBgc2V0YCBhY2Nlc3NvcnMgdHJpZ2dlciBhIGNoYW5nZSBldmVudCwgYW5kIHlvdSBjYW4gbW9uaXRvciB0aGlzIGJ5XG4gKiByZWdpc3RlcmluZyBhIGxpc3RlbmVyLiBGb3IgZXhhbXBsZSwge0BsaW5rIG9sLlZpZXd9IGhhcyBhIGBjZW50ZXJgXG4gKiBwcm9wZXJ0eSwgc28gYHZpZXcub24oJ2NoYW5nZTpjZW50ZXInLCBmdW5jdGlvbihldnQpIHsuLi59KTtgIHdvdWxkIGNhbGwgdGhlXG4gKiBmdW5jdGlvbiB3aGVuZXZlciB0aGUgdmFsdWUgb2YgdGhlIGNlbnRlciBwcm9wZXJ0eSBjaGFuZ2VzLiBXaXRoaW4gdGhlXG4gKiBmdW5jdGlvbiwgYGV2dC50YXJnZXRgIHdvdWxkIGJlIHRoZSB2aWV3LCBzbyBgZXZ0LnRhcmdldC5nZXRDZW50ZXIoKWAgd291bGRcbiAqIHJldHVybiB0aGUgbmV3IGNlbnRlci5cbiAqXG4gKiBZb3UgY2FuIGFkZCB5b3VyIG93biBvYnNlcnZhYmxlIHByb3BlcnRpZXMgd2l0aFxuICogYG9iamVjdC5zZXQoJ3Byb3AnLCAndmFsdWUnKWAsIGFuZCByZXRyaWV2ZSB0aGF0IHdpdGggYG9iamVjdC5nZXQoJ3Byb3AnKWAuXG4gKiBZb3UgY2FuIGxpc3RlbiBmb3IgY2hhbmdlcyBvbiB0aGF0IHByb3BlcnR5IHZhbHVlIHdpdGhcbiAqIGBvYmplY3Qub24oJ2NoYW5nZTpwcm9wJywgbGlzdGVuZXIpYC4gWW91IGNhbiBnZXQgYSBsaXN0IG9mIGFsbFxuICogcHJvcGVydGllcyB3aXRoIHtAbGluayBvbC5PYmplY3QjZ2V0UHJvcGVydGllcyBvYmplY3QuZ2V0UHJvcGVydGllcygpfS5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIG9ic2VydmFibGUgcHJvcGVydGllcyBhcmUgc2VwYXJhdGUgZnJvbSBzdGFuZGFyZCBKUyBwcm9wZXJ0aWVzLlxuICogWW91IGNhbiwgZm9yIGV4YW1wbGUsIGdpdmUgeW91ciBtYXAgb2JqZWN0IGEgdGl0bGUgd2l0aFxuICogYG1hcC50aXRsZT0nTmV3IHRpdGxlJ2AgYW5kIHdpdGggYG1hcC5zZXQoJ3RpdGxlJywgJ0Fub3RoZXIgdGl0bGUnKWAuIFRoZVxuICogZmlyc3Qgd2lsbCBiZSBhIGBoYXNPd25Qcm9wZXJ0eWA7IHRoZSBzZWNvbmQgd2lsbCBhcHBlYXIgaW5cbiAqIGBnZXRQcm9wZXJ0aWVzKClgLiBPbmx5IHRoZSBzZWNvbmQgaXMgb2JzZXJ2YWJsZS5cbiAqXG4gKiBQcm9wZXJ0aWVzIGNhbiBiZSBkZWxldGVkIGJ5IHVzaW5nIHRoZSB1bnNldCBtZXRob2QuIEUuZy5cbiAqIG9iamVjdC51bnNldCgnZm9vJykuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAZXh0ZW5kcyB7b2wuT2JzZXJ2YWJsZX1cbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsICo+PX0gb3B0X3ZhbHVlcyBBbiBvYmplY3Qgd2l0aCBrZXktdmFsdWUgcGFpcnMuXG4gKiBAZmlyZXMgb2wuT2JqZWN0LkV2ZW50XG4gKiBAYXBpXG4gKi9cbnZhciBfb2xfT2JqZWN0XyA9IGZ1bmN0aW9uKG9wdF92YWx1ZXMpIHtcbiAgX29sX09ic2VydmFibGVfLmNhbGwodGhpcyk7XG5cbiAgLy8gQ2FsbCBvbC5nZXRVaWQgdG8gZW5zdXJlIHRoYXQgdGhlIG9yZGVyIG9mIG9iamVjdHMnIGlkcyBpcyB0aGUgc2FtZSBhc1xuICAvLyB0aGUgb3JkZXIgaW4gd2hpY2ggdGhleSB3ZXJlIGNyZWF0ZWQuICBUaGlzIGFsc28gaGVscHMgdG8gZW5zdXJlIHRoYXRcbiAgLy8gb2JqZWN0IHByb3BlcnRpZXMgYXJlIGFsd2F5cyBhZGRlZCBpbiB0aGUgc2FtZSBvcmRlciwgd2hpY2ggaGVscHMgbWFueVxuICAvLyBKYXZhU2NyaXB0IGVuZ2luZXMgZ2VuZXJhdGUgZmFzdGVyIGNvZGUuXG4gIF9vbF8uZ2V0VWlkKHRoaXMpO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7IU9iamVjdC48c3RyaW5nLCAqPn1cbiAgICovXG4gIHRoaXMudmFsdWVzXyA9IHt9O1xuXG4gIGlmIChvcHRfdmFsdWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMob3B0X3ZhbHVlcyk7XG4gIH1cbn07XG5cbl9vbF8uaW5oZXJpdHMoX29sX09iamVjdF8sIF9vbF9PYnNlcnZhYmxlXyk7XG5cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICogQHR5cGUge09iamVjdC48c3RyaW5nLCBzdHJpbmc+fVxuICovXG5fb2xfT2JqZWN0Xy5jaGFuZ2VFdmVudFR5cGVDYWNoZV8gPSB7fTtcblxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgS2V5IG5hbWUuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IENoYW5nZSBuYW1lLlxuICovXG5fb2xfT2JqZWN0Xy5nZXRDaGFuZ2VFdmVudFR5cGUgPSBmdW5jdGlvbihrZXkpIHtcbiAgcmV0dXJuIF9vbF9PYmplY3RfLmNoYW5nZUV2ZW50VHlwZUNhY2hlXy5oYXNPd25Qcm9wZXJ0eShrZXkpID9cbiAgICBfb2xfT2JqZWN0Xy5jaGFuZ2VFdmVudFR5cGVDYWNoZV9ba2V5XSA6XG4gICAgKF9vbF9PYmplY3RfLmNoYW5nZUV2ZW50VHlwZUNhY2hlX1trZXldID0gJ2NoYW5nZTonICsga2V5KTtcbn07XG5cblxuLyoqXG4gKiBHZXRzIGEgdmFsdWUuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IEtleSBuYW1lLlxuICogQHJldHVybiB7Kn0gVmFsdWUuXG4gKiBAYXBpXG4gKi9cbl9vbF9PYmplY3RfLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihrZXkpIHtcbiAgdmFyIHZhbHVlO1xuICBpZiAodGhpcy52YWx1ZXNfLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICB2YWx1ZSA9IHRoaXMudmFsdWVzX1trZXldO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cblxuLyoqXG4gKiBHZXQgYSBsaXN0IG9mIG9iamVjdCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm4ge0FycmF5LjxzdHJpbmc+fSBMaXN0IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGFwaVxuICovXG5fb2xfT2JqZWN0Xy5wcm90b3R5cGUuZ2V0S2V5cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gT2JqZWN0LmtleXModGhpcy52YWx1ZXNfKTtcbn07XG5cblxuLyoqXG4gKiBHZXQgYW4gb2JqZWN0IG9mIGFsbCBwcm9wZXJ0eSBuYW1lcyBhbmQgdmFsdWVzLlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsICo+fSBPYmplY3QuXG4gKiBAYXBpXG4gKi9cbl9vbF9PYmplY3RfLnByb3RvdHlwZS5nZXRQcm9wZXJ0aWVzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBfb2xfb2JqXy5hc3NpZ24oe30sIHRoaXMudmFsdWVzXyk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBLZXkgbmFtZS5cbiAqIEBwYXJhbSB7Kn0gb2xkVmFsdWUgT2xkIHZhbHVlLlxuICovXG5fb2xfT2JqZWN0Xy5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24oa2V5LCBvbGRWYWx1ZSkge1xuICB2YXIgZXZlbnRUeXBlO1xuICBldmVudFR5cGUgPSBfb2xfT2JqZWN0Xy5nZXRDaGFuZ2VFdmVudFR5cGUoa2V5KTtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfb2xfT2JqZWN0Xy5FdmVudChldmVudFR5cGUsIGtleSwgb2xkVmFsdWUpKTtcbiAgZXZlbnRUeXBlID0gX29sX09iamVjdEV2ZW50VHlwZV8uUFJPUEVSVFlDSEFOR0U7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX29sX09iamVjdF8uRXZlbnQoZXZlbnRUeXBlLCBrZXksIG9sZFZhbHVlKSk7XG59O1xuXG5cbi8qKlxuICogU2V0cyBhIHZhbHVlLlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBLZXkgbmFtZS5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVmFsdWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfc2lsZW50IFVwZGF0ZSB3aXRob3V0IHRyaWdnZXJpbmcgYW4gZXZlbnQuXG4gKiBAYXBpXG4gKi9cbl9vbF9PYmplY3RfLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihrZXksIHZhbHVlLCBvcHRfc2lsZW50KSB7XG4gIGlmIChvcHRfc2lsZW50KSB7XG4gICAgdGhpcy52YWx1ZXNfW2tleV0gPSB2YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlc19ba2V5XTtcbiAgICB0aGlzLnZhbHVlc19ba2V5XSA9IHZhbHVlO1xuICAgIGlmIChvbGRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMubm90aWZ5KGtleSwgb2xkVmFsdWUpO1xuICAgIH1cbiAgfVxufTtcblxuXG4vKipcbiAqIFNldHMgYSBjb2xsZWN0aW9uIG9mIGtleS12YWx1ZSBwYWlycy4gIE5vdGUgdGhhdCB0aGlzIGNoYW5nZXMgYW55IGV4aXN0aW5nXG4gKiBwcm9wZXJ0aWVzIGFuZCBhZGRzIG5ldyBvbmVzIChpdCBkb2VzIG5vdCByZW1vdmUgYW55IGV4aXN0aW5nIHByb3BlcnRpZXMpLlxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgKj59IHZhbHVlcyBWYWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfc2lsZW50IFVwZGF0ZSB3aXRob3V0IHRyaWdnZXJpbmcgYW4gZXZlbnQuXG4gKiBAYXBpXG4gKi9cbl9vbF9PYmplY3RfLnByb3RvdHlwZS5zZXRQcm9wZXJ0aWVzID0gZnVuY3Rpb24odmFsdWVzLCBvcHRfc2lsZW50KSB7XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIHZhbHVlcykge1xuICAgIHRoaXMuc2V0KGtleSwgdmFsdWVzW2tleV0sIG9wdF9zaWxlbnQpO1xuICB9XG59O1xuXG5cbi8qKlxuICogVW5zZXRzIGEgcHJvcGVydHkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IEtleSBuYW1lLlxuICogQHBhcmFtIHtib29sZWFuPX0gb3B0X3NpbGVudCBVbnNldCB3aXRob3V0IHRyaWdnZXJpbmcgYW4gZXZlbnQuXG4gKiBAYXBpXG4gKi9cbl9vbF9PYmplY3RfLnByb3RvdHlwZS51bnNldCA9IGZ1bmN0aW9uKGtleSwgb3B0X3NpbGVudCkge1xuICBpZiAoa2V5IGluIHRoaXMudmFsdWVzXykge1xuICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWVzX1trZXldO1xuICAgIGRlbGV0ZSB0aGlzLnZhbHVlc19ba2V5XTtcbiAgICBpZiAoIW9wdF9zaWxlbnQpIHtcbiAgICAgIHRoaXMubm90aWZ5KGtleSwgb2xkVmFsdWUpO1xuICAgIH1cbiAgfVxufTtcblxuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIEV2ZW50cyBlbWl0dGVkIGJ5IHtAbGluayBvbC5PYmplY3R9IGluc3RhbmNlcyBhcmUgaW5zdGFuY2VzIG9mIHRoaXMgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgZXZlbnQgdHlwZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHByb3BlcnR5IG5hbWUuXG4gKiBAcGFyYW0geyp9IG9sZFZhbHVlIFRoZSBvbGQgdmFsdWUgZm9yIGBrZXlgLlxuICogQGV4dGVuZHMge29sLmV2ZW50cy5FdmVudH1cbiAqIEBpbXBsZW1lbnRzIHtvbGkuT2JqZWN0LkV2ZW50fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbl9vbF9PYmplY3RfLkV2ZW50ID0gZnVuY3Rpb24odHlwZSwga2V5LCBvbGRWYWx1ZSkge1xuICBfb2xfZXZlbnRzX0V2ZW50Xy5jYWxsKHRoaXMsIHR5cGUpO1xuXG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgd2hvc2UgdmFsdWUgaXMgY2hhbmdpbmcuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBhcGlcbiAgICovXG4gIHRoaXMua2V5ID0ga2V5O1xuXG4gIC8qKlxuICAgKiBUaGUgb2xkIHZhbHVlLiBUbyBnZXQgdGhlIG5ldyB2YWx1ZSB1c2UgYGUudGFyZ2V0LmdldChlLmtleSlgIHdoZXJlXG4gICAqIGBlYCBpcyB0aGUgZXZlbnQgb2JqZWN0LlxuICAgKiBAdHlwZSB7Kn1cbiAgICogQGFwaVxuICAgKi9cbiAgdGhpcy5vbGRWYWx1ZSA9IG9sZFZhbHVlO1xuXG59O1xuX29sXy5pbmhlcml0cyhfb2xfT2JqZWN0Xy5FdmVudCwgX29sX2V2ZW50c19FdmVudF8pO1xuZXhwb3J0IGRlZmF1bHQgX29sX09iamVjdF87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGVudW0ge251bWJlcn1cbiAqL1xudmFyIF9vbF9JbWFnZVN0YXRlXyA9IHtcbiAgSURMRTogMCxcbiAgTE9BRElORzogMSxcbiAgTE9BREVEOiAyLFxuICBFUlJPUjogM1xufTtcblxuZXhwb3J0IGRlZmF1bHQgX29sX0ltYWdlU3RhdGVfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvaW1hZ2VzdGF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF9vbF8gZnJvbSAnLi4vaW5kZXguanMnO1xuaW1wb3J0IF9vbF9wcm9qX1VuaXRzXyBmcm9tICcuLi9wcm9qL3VuaXRzLmpzJztcbmltcG9ydCBfb2xfcHJval9wcm9qNF8gZnJvbSAnLi4vcHJvai9wcm9qNC5qcyc7XG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogUHJvamVjdGlvbiBkZWZpbml0aW9uIGNsYXNzLiBPbmUgb2YgdGhlc2UgaXMgY3JlYXRlZCBmb3IgZWFjaCBwcm9qZWN0aW9uXG4gKiBzdXBwb3J0ZWQgaW4gdGhlIGFwcGxpY2F0aW9uIGFuZCBzdG9yZWQgaW4gdGhlIHtAbGluayBvbC5wcm9qfSBuYW1lc3BhY2UuXG4gKiBZb3UgY2FuIHVzZSB0aGVzZSBpbiBhcHBsaWNhdGlvbnMsIGJ1dCB0aGlzIGlzIG5vdCByZXF1aXJlZCwgYXMgQVBJIHBhcmFtc1xuICogYW5kIG9wdGlvbnMgdXNlIHtAbGluayBvbC5Qcm9qZWN0aW9uTGlrZX0gd2hpY2ggbWVhbnMgdGhlIHNpbXBsZSBzdHJpbmdcbiAqIGNvZGUgd2lsbCBzdWZmaWNlLlxuICpcbiAqIFlvdSBjYW4gdXNlIHtAbGluayBvbC5wcm9qLmdldH0gdG8gcmV0cmlldmUgdGhlIG9iamVjdCBmb3IgYSBwYXJ0aWN1bGFyXG4gKiBwcm9qZWN0aW9uLlxuICpcbiAqIFRoZSBsaWJyYXJ5IGluY2x1ZGVzIGRlZmluaXRpb25zIGZvciBgRVBTRzo0MzI2YCBhbmQgYEVQU0c6Mzg1N2AsIHRvZ2V0aGVyXG4gKiB3aXRoIHRoZSBmb2xsb3dpbmcgYWxpYXNlczpcbiAqICogYEVQU0c6NDMyNmA6IENSUzo4NCwgdXJuOm9nYzpkZWY6Y3JzOkVQU0c6Ni42OjQzMjYsXG4gKiAgICAgdXJuOm9nYzpkZWY6Y3JzOk9HQzoxLjM6Q1JTODQsIHVybjpvZ2M6ZGVmOmNyczpPR0M6Mjo4NCxcbiAqICAgICBodHRwOi8vd3d3Lm9wZW5naXMubmV0L2dtbC9zcnMvZXBzZy54bWwjNDMyNixcbiAqICAgICB1cm46eC1vZ2M6ZGVmOmNyczpFUFNHOjQzMjZcbiAqICogYEVQU0c6Mzg1N2A6IEVQU0c6MTAyMTAwLCBFUFNHOjEwMjExMywgRVBTRzo5MDA5MTMsXG4gKiAgICAgdXJuOm9nYzpkZWY6Y3JzOkVQU0c6Ni4xODozOjM4NTcsXG4gKiAgICAgaHR0cDovL3d3dy5vcGVuZ2lzLm5ldC9nbWwvc3JzL2Vwc2cueG1sIzM4NTdcbiAqXG4gKiBJZiB5b3UgdXNlIHByb2o0anMsIGFsaWFzZXMgY2FuIGJlIGFkZGVkIHVzaW5nIGBwcm9qNC5kZWZzKClgOyBzZWVcbiAqIFtkb2N1bWVudGF0aW9uXShodHRwczovL2dpdGh1Yi5jb20vcHJvajRqcy9wcm9qNGpzKS4gVG8gc2V0IGFuIGFsdGVybmF0aXZlXG4gKiBuYW1lc3BhY2UgZm9yIHByb2o0LCB1c2Uge0BsaW5rIG9sLnByb2ouc2V0UHJvajR9LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtvbHguUHJvamVjdGlvbk9wdGlvbnN9IG9wdGlvbnMgUHJvamVjdGlvbiBvcHRpb25zLlxuICogQHN0cnVjdFxuICogQGFwaVxuICovXG52YXIgX29sX3Byb2pfUHJvamVjdGlvbl8gPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgdGhpcy5jb2RlXyA9IG9wdGlvbnMuY29kZTtcblxuICAvKipcbiAgICogVW5pdHMgb2YgcHJvamVjdGVkIGNvb3JkaW5hdGVzLiBXaGVuIHNldCB0byBgb2wucHJvai5Vbml0cy5USUxFX1BJWEVMU2AsIGFcbiAgICogYHRoaXMuZXh0ZW50X2AgYW5kIGB0aGlzLndvcmxkRXh0ZW50X2AgbXVzdCBiZSBjb25maWd1cmVkIHByb3Blcmx5IGZvciBlYWNoXG4gICAqIHRpbGUuXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtvbC5wcm9qLlVuaXRzfVxuICAgKi9cbiAgdGhpcy51bml0c18gPSAvKiogQHR5cGUge29sLnByb2ouVW5pdHN9ICovIChvcHRpb25zLnVuaXRzKTtcblxuICAvKipcbiAgICogVmFsaWRpdHkgZXh0ZW50IG9mIHRoZSBwcm9qZWN0aW9uIGluIHByb2plY3RlZCBjb29yZGluYXRlcy4gRm9yIHByb2plY3Rpb25zXG4gICAqIHdpdGggYG9sLnByb2ouVW5pdHMuVElMRV9QSVhFTFNgIHVuaXRzLCB0aGlzIGlzIHRoZSBleHRlbnQgb2YgdGhlIHRpbGUgaW5cbiAgICogdGlsZSBwaXhlbCBzcGFjZS5cbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge29sLkV4dGVudH1cbiAgICovXG4gIHRoaXMuZXh0ZW50XyA9IG9wdGlvbnMuZXh0ZW50ICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmV4dGVudCA6IG51bGw7XG5cbiAgLyoqXG4gICAqIEV4dGVudCBvZiB0aGUgd29ybGQgaW4gRVBTRzo0MzI2LiBGb3IgcHJvamVjdGlvbnMgd2l0aFxuICAgKiBgb2wucHJvai5Vbml0cy5USUxFX1BJWEVMU2AgdW5pdHMsIHRoaXMgaXMgdGhlIGV4dGVudCBvZiB0aGUgdGlsZSBpblxuICAgKiBwcm9qZWN0ZWQgY29vcmRpbmF0ZSBzcGFjZS5cbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge29sLkV4dGVudH1cbiAgICovXG4gIHRoaXMud29ybGRFeHRlbnRfID0gb3B0aW9ucy53b3JsZEV4dGVudCAhPT0gdW5kZWZpbmVkID9cbiAgICBvcHRpb25zLndvcmxkRXh0ZW50IDogbnVsbDtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHRoaXMuYXhpc09yaWVudGF0aW9uXyA9IG9wdGlvbnMuYXhpc09yaWVudGF0aW9uICE9PSB1bmRlZmluZWQgP1xuICAgIG9wdGlvbnMuYXhpc09yaWVudGF0aW9uIDogJ2VudSc7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgdGhpcy5nbG9iYWxfID0gb3B0aW9ucy5nbG9iYWwgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuZ2xvYmFsIDogZmFsc2U7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgdGhpcy5jYW5XcmFwWF8gPSAhISh0aGlzLmdsb2JhbF8gJiYgdGhpcy5leHRlbnRfKTtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge2Z1bmN0aW9uKG51bWJlciwgb2wuQ29vcmRpbmF0ZSk6bnVtYmVyfHVuZGVmaW5lZH1cbiAgICovXG4gIHRoaXMuZ2V0UG9pbnRSZXNvbHV0aW9uRnVuY18gPSBvcHRpb25zLmdldFBvaW50UmVzb2x1dGlvbjtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge29sLnRpbGVncmlkLlRpbGVHcmlkfVxuICAgKi9cbiAgdGhpcy5kZWZhdWx0VGlsZUdyaWRfID0gbnVsbDtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge251bWJlcnx1bmRlZmluZWR9XG4gICAqL1xuICB0aGlzLm1ldGVyc1BlclVuaXRfID0gb3B0aW9ucy5tZXRlcnNQZXJVbml0O1xuXG4gIHZhciBjb2RlID0gb3B0aW9ucy5jb2RlO1xuICBpZiAoX29sXy5FTkFCTEVfUFJPSjRKUykge1xuICAgIHZhciBwcm9qNGpzID0gX29sX3Byb2pfcHJvajRfLmdldCgpO1xuICAgIGlmICh0eXBlb2YgcHJvajRqcyA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgZGVmID0gcHJvajRqcy5kZWZzKGNvZGUpO1xuICAgICAgaWYgKGRlZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChkZWYuYXhpcyAhPT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuYXhpc09yaWVudGF0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmF4aXNPcmllbnRhdGlvbl8gPSBkZWYuYXhpcztcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5tZXRlcnNQZXJVbml0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLm1ldGVyc1BlclVuaXRfID0gZGVmLnRvX21ldGVyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnVuaXRzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLnVuaXRzXyA9IGRlZi51bml0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuXG4vKipcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRoZSBwcm9qZWN0aW9uIGlzIHN1aXRhYmxlIGZvciB3cmFwcGluZyB0aGUgeC1heGlzXG4gKi9cbl9vbF9wcm9qX1Byb2plY3Rpb25fLnByb3RvdHlwZS5jYW5XcmFwWCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5jYW5XcmFwWF87XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBjb2RlIGZvciB0aGlzIHByb2plY3Rpb24sIGUuZy4gJ0VQU0c6NDMyNicuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IENvZGUuXG4gKiBAYXBpXG4gKi9cbl9vbF9wcm9qX1Byb2plY3Rpb25fLnByb3RvdHlwZS5nZXRDb2RlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmNvZGVfO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgdmFsaWRpdHkgZXh0ZW50IGZvciB0aGlzIHByb2plY3Rpb24uXG4gKiBAcmV0dXJuIHtvbC5FeHRlbnR9IEV4dGVudC5cbiAqIEBhcGlcbiAqL1xuX29sX3Byb2pfUHJvamVjdGlvbl8ucHJvdG90eXBlLmdldEV4dGVudCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5leHRlbnRfO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgdW5pdHMgb2YgdGhpcyBwcm9qZWN0aW9uLlxuICogQHJldHVybiB7b2wucHJvai5Vbml0c30gVW5pdHMuXG4gKiBAYXBpXG4gKi9cbl9vbF9wcm9qX1Byb2plY3Rpb25fLnByb3RvdHlwZS5nZXRVbml0cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy51bml0c187XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBhbW91bnQgb2YgbWV0ZXJzIHBlciB1bml0IG9mIHRoaXMgcHJvamVjdGlvbi4gIElmIHRoZSBwcm9qZWN0aW9uIGlzXG4gKiBub3QgY29uZmlndXJlZCB3aXRoIGBtZXRlcnNQZXJVbml0YCBvciBhIHVuaXRzIGlkZW50aWZpZXIsIHRoZSByZXR1cm4gaXNcbiAqIGB1bmRlZmluZWRgLlxuICogQHJldHVybiB7bnVtYmVyfHVuZGVmaW5lZH0gTWV0ZXJzLlxuICogQGFwaVxuICovXG5fb2xfcHJval9Qcm9qZWN0aW9uXy5wcm90b3R5cGUuZ2V0TWV0ZXJzUGVyVW5pdCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5tZXRlcnNQZXJVbml0XyB8fCBfb2xfcHJval9Vbml0c18uTUVURVJTX1BFUl9VTklUW3RoaXMudW5pdHNfXTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIHdvcmxkIGV4dGVudCBmb3IgdGhpcyBwcm9qZWN0aW9uLlxuICogQHJldHVybiB7b2wuRXh0ZW50fSBFeHRlbnQuXG4gKiBAYXBpXG4gKi9cbl9vbF9wcm9qX1Byb2plY3Rpb25fLnByb3RvdHlwZS5nZXRXb3JsZEV4dGVudCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy53b3JsZEV4dGVudF87XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBheGlzIG9yaWVudGF0aW9uIG9mIHRoaXMgcHJvamVjdGlvbi5cbiAqIEV4YW1wbGUgdmFsdWVzIGFyZTpcbiAqIGVudSAtIHRoZSBkZWZhdWx0IGVhc3RpbmcsIG5vcnRoaW5nLCBlbGV2YXRpb24uXG4gKiBuZXUgLSBub3J0aGluZywgZWFzdGluZywgdXAgLSB1c2VmdWwgZm9yIFwibGF0L2xvbmdcIiBnZW9ncmFwaGljIGNvb3JkaW5hdGVzLFxuICogICAgIG9yIHNvdXRoIG9yaWVudGF0ZWQgdHJhbnN2ZXJzZSBtZXJjYXRvci5cbiAqIHdudSAtIHdlc3RpbmcsIG5vcnRoaW5nLCB1cCAtIHNvbWUgcGxhbmV0YXJ5IGNvb3JkaW5hdGUgc3lzdGVtcyBoYXZlXG4gKiAgICAgXCJ3ZXN0IHBvc2l0aXZlXCIgY29vcmRpbmF0ZSBzeXN0ZW1zXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEF4aXMgb3JpZW50YXRpb24uXG4gKiBAYXBpXG4gKi9cbl9vbF9wcm9qX1Byb2plY3Rpb25fLnByb3RvdHlwZS5nZXRBeGlzT3JpZW50YXRpb24gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuYXhpc09yaWVudGF0aW9uXztcbn07XG5cblxuLyoqXG4gKiBJcyB0aGlzIHByb2plY3Rpb24gYSBnbG9iYWwgcHJvamVjdGlvbiB3aGljaCBzcGFucyB0aGUgd2hvbGUgd29ybGQ/XG4gKiBAcmV0dXJuIHtib29sZWFufSBXaGV0aGVyIHRoZSBwcm9qZWN0aW9uIGlzIGdsb2JhbC5cbiAqIEBhcGlcbiAqL1xuX29sX3Byb2pfUHJvamVjdGlvbl8ucHJvdG90eXBlLmlzR2xvYmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmdsb2JhbF87XG59O1xuXG5cbi8qKlxuKiBTZXQgaWYgdGhlIHByb2plY3Rpb24gaXMgYSBnbG9iYWwgcHJvamVjdGlvbiB3aGljaCBzcGFucyB0aGUgd2hvbGUgd29ybGRcbiogQHBhcmFtIHtib29sZWFufSBnbG9iYWwgV2hldGhlciB0aGUgcHJvamVjdGlvbiBpcyBnbG9iYWwuXG4qIEBhcGlcbiovXG5fb2xfcHJval9Qcm9qZWN0aW9uXy5wcm90b3R5cGUuc2V0R2xvYmFsID0gZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIHRoaXMuZ2xvYmFsXyA9IGdsb2JhbDtcbiAgdGhpcy5jYW5XcmFwWF8gPSAhIShnbG9iYWwgJiYgdGhpcy5leHRlbnRfKTtcbn07XG5cblxuLyoqXG4gKiBAcmV0dXJuIHtvbC50aWxlZ3JpZC5UaWxlR3JpZH0gVGhlIGRlZmF1bHQgdGlsZSBncmlkLlxuICovXG5fb2xfcHJval9Qcm9qZWN0aW9uXy5wcm90b3R5cGUuZ2V0RGVmYXVsdFRpbGVHcmlkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmRlZmF1bHRUaWxlR3JpZF87XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtvbC50aWxlZ3JpZC5UaWxlR3JpZH0gdGlsZUdyaWQgVGhlIGRlZmF1bHQgdGlsZSBncmlkLlxuICovXG5fb2xfcHJval9Qcm9qZWN0aW9uXy5wcm90b3R5cGUuc2V0RGVmYXVsdFRpbGVHcmlkID0gZnVuY3Rpb24odGlsZUdyaWQpIHtcbiAgdGhpcy5kZWZhdWx0VGlsZUdyaWRfID0gdGlsZUdyaWQ7XG59O1xuXG5cbi8qKlxuICogU2V0IHRoZSB2YWxpZGl0eSBleHRlbnQgZm9yIHRoaXMgcHJvamVjdGlvbi5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQGFwaVxuICovXG5fb2xfcHJval9Qcm9qZWN0aW9uXy5wcm90b3R5cGUuc2V0RXh0ZW50ID0gZnVuY3Rpb24oZXh0ZW50KSB7XG4gIHRoaXMuZXh0ZW50XyA9IGV4dGVudDtcbiAgdGhpcy5jYW5XcmFwWF8gPSAhISh0aGlzLmdsb2JhbF8gJiYgZXh0ZW50KTtcbn07XG5cblxuLyoqXG4gKiBTZXQgdGhlIHdvcmxkIGV4dGVudCBmb3IgdGhpcyBwcm9qZWN0aW9uLlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IHdvcmxkRXh0ZW50IFdvcmxkIGV4dGVudFxuICogICAgIFttaW5sb24sIG1pbmxhdCwgbWF4bG9uLCBtYXhsYXRdLlxuICogQGFwaVxuICovXG5fb2xfcHJval9Qcm9qZWN0aW9uXy5wcm90b3R5cGUuc2V0V29ybGRFeHRlbnQgPSBmdW5jdGlvbih3b3JsZEV4dGVudCkge1xuICB0aGlzLndvcmxkRXh0ZW50XyA9IHdvcmxkRXh0ZW50O1xufTtcblxuXG4vKipcbiAqIFNldCB0aGUgZ2V0UG9pbnRSZXNvbHV0aW9uIGZ1bmN0aW9uIChzZWUge0BsaW5rIG9sLnByb2ojZ2V0UG9pbnRSZXNvbHV0aW9ufVxuICogZm9yIHRoaXMgcHJvamVjdGlvbi5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24obnVtYmVyLCBvbC5Db29yZGluYXRlKTpudW1iZXJ9IGZ1bmMgRnVuY3Rpb25cbiAqIEBhcGlcbiAqL1xuX29sX3Byb2pfUHJvamVjdGlvbl8ucHJvdG90eXBlLnNldEdldFBvaW50UmVzb2x1dGlvbiA9IGZ1bmN0aW9uKGZ1bmMpIHtcbiAgdGhpcy5nZXRQb2ludFJlc29sdXRpb25GdW5jXyA9IGZ1bmM7XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBjdXN0b20gcG9pbnQgcmVzb2x1dGlvbiBmdW5jdGlvbiBmb3IgdGhpcyBwcm9qZWN0aW9uIChpZiBzZXQpLlxuICogQHJldHVybiB7ZnVuY3Rpb24obnVtYmVyLCBvbC5Db29yZGluYXRlKTpudW1iZXJ8dW5kZWZpbmVkfSBUaGUgY3VzdG9tIHBvaW50XG4gKiByZXNvbHV0aW9uIGZ1bmN0aW9uIChpZiBzZXQpLlxuICovXG5fb2xfcHJval9Qcm9qZWN0aW9uXy5wcm90b3R5cGUuZ2V0UG9pbnRSZXNvbHV0aW9uRnVuYyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5nZXRQb2ludFJlc29sdXRpb25GdW5jXztcbn07XG5leHBvcnQgZGVmYXVsdCBfb2xfcHJval9Qcm9qZWN0aW9uXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL3Byb2ovcHJvamVjdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9vbF9zaXplXyA9IHt9O1xuXG5cbi8qKlxuICogUmV0dXJucyBhIGJ1ZmZlcmVkIHNpemUuXG4gKiBAcGFyYW0ge29sLlNpemV9IHNpemUgU2l6ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBidWZmZXIgQnVmZmVyLlxuICogQHBhcmFtIHtvbC5TaXplPX0gb3B0X3NpemUgT3B0aW9uYWwgcmV1c2FibGUgc2l6ZSBhcnJheS5cbiAqIEByZXR1cm4ge29sLlNpemV9IFRoZSBidWZmZXJlZCBzaXplLlxuICovXG5fb2xfc2l6ZV8uYnVmZmVyID0gZnVuY3Rpb24oc2l6ZSwgYnVmZmVyLCBvcHRfc2l6ZSkge1xuICBpZiAob3B0X3NpemUgPT09IHVuZGVmaW5lZCkge1xuICAgIG9wdF9zaXplID0gWzAsIDBdO1xuICB9XG4gIG9wdF9zaXplWzBdID0gc2l6ZVswXSArIDIgKiBidWZmZXI7XG4gIG9wdF9zaXplWzFdID0gc2l6ZVsxXSArIDIgKiBidWZmZXI7XG4gIHJldHVybiBvcHRfc2l6ZTtcbn07XG5cblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGEgc2l6ZSBoYXMgYSBwb3NpdGl2ZSBhcmVhLlxuICogQHBhcmFtIHtvbC5TaXplfSBzaXplIFRoZSBzaXplIHRvIHRlc3QuXG4gKiBAcmV0dXJuIHtib29sZWFufSBUaGUgc2l6ZSBoYXMgYSBwb3NpdGl2ZSBhcmVhLlxuICovXG5fb2xfc2l6ZV8uaGFzQXJlYSA9IGZ1bmN0aW9uKHNpemUpIHtcbiAgcmV0dXJuIHNpemVbMF0gPiAwICYmIHNpemVbMV0gPiAwO1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBzaXplIHNjYWxlZCBieSBhIHJhdGlvLiBUaGUgcmVzdWx0IHdpbGwgYmUgYW4gYXJyYXkgb2YgaW50ZWdlcnMuXG4gKiBAcGFyYW0ge29sLlNpemV9IHNpemUgU2l6ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSByYXRpbyBSYXRpby5cbiAqIEBwYXJhbSB7b2wuU2l6ZT19IG9wdF9zaXplIE9wdGlvbmFsIHJldXNhYmxlIHNpemUgYXJyYXkuXG4gKiBAcmV0dXJuIHtvbC5TaXplfSBUaGUgc2NhbGVkIHNpemUuXG4gKi9cbl9vbF9zaXplXy5zY2FsZSA9IGZ1bmN0aW9uKHNpemUsIHJhdGlvLCBvcHRfc2l6ZSkge1xuICBpZiAob3B0X3NpemUgPT09IHVuZGVmaW5lZCkge1xuICAgIG9wdF9zaXplID0gWzAsIDBdO1xuICB9XG4gIG9wdF9zaXplWzBdID0gKHNpemVbMF0gKiByYXRpbyArIDAuNSkgfCAwO1xuICBvcHRfc2l6ZVsxXSA9IChzaXplWzFdICogcmF0aW8gKyAwLjUpIHwgMDtcbiAgcmV0dXJuIG9wdF9zaXplO1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgYW4gYG9sLlNpemVgIGFycmF5IGZvciB0aGUgcGFzc2VkIGluIG51bWJlciAobWVhbmluZzogc3F1YXJlKSBvclxuICogYG9sLlNpemVgIGFycmF5LlxuICogKG1lYW5pbmc6IG5vbi1zcXVhcmUpLFxuICogQHBhcmFtIHtudW1iZXJ8b2wuU2l6ZX0gc2l6ZSBXaWR0aCBhbmQgaGVpZ2h0LlxuICogQHBhcmFtIHtvbC5TaXplPX0gb3B0X3NpemUgT3B0aW9uYWwgcmV1c2FibGUgc2l6ZSBhcnJheS5cbiAqIEByZXR1cm4ge29sLlNpemV9IFNpemUuXG4gKiBAYXBpXG4gKi9cbl9vbF9zaXplXy50b1NpemUgPSBmdW5jdGlvbihzaXplLCBvcHRfc2l6ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShzaXplKSkge1xuICAgIHJldHVybiBzaXplO1xuICB9IGVsc2Uge1xuICAgIGlmIChvcHRfc2l6ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcHRfc2l6ZSA9IFtzaXplLCBzaXplXTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0X3NpemVbMF0gPSBvcHRfc2l6ZVsxXSA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoc2l6ZSk7XG4gICAgfVxuICAgIHJldHVybiBvcHRfc2l6ZTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IF9vbF9zaXplXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL3NpemUuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHZlY3Rvcl8xID0gcmVxdWlyZShcIi4vdmVjdG9yXCIpO1xudmFyIGdyaWRfMSA9IHJlcXVpcmUoXCIuL2dyaWRcIik7XG52YXIgY29sb3JTY2FsZV8xID0gcmVxdWlyZShcIi4vY29sb3JTY2FsZVwiKTtcbnZhciBhbmltYXRpb25CdWNrZXRfMSA9IHJlcXVpcmUoXCIuL2FuaW1hdGlvbkJ1Y2tldFwiKTtcbnZhciBXaW5keSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXaW5keShvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gbnVsbDtcbiAgICAgICAgdGhpcy5wYXJ0aWN1bGVNdWx0aXBsaWVyID0gMSAvIDMwMDtcbiAgICAgICAgdGhpcy5hdXRvQ29sb3JSYW5nZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBhcnRpY3VsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25Mb29wID0gbnVsbDtcbiAgICAgICAgdGhpcy50aGVuID0gMDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBvcHRpb25zLmNhbnZhcztcbiAgICAgICAgaWYgKG9wdGlvbnMubWluVmVsb2NpdHkgPT09IHVuZGVmaW5lZCAmJiBvcHRpb25zLm1heFZlbG9jaXR5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0b0NvbG9yUmFuZ2UgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3JTY2FsZSA9IG5ldyBjb2xvclNjYWxlXzEuZGVmYXVsdChvcHRpb25zLm1pblZlbG9jaXR5IHx8IDAsIG9wdGlvbnMubWF4VmVsb2NpdHkgfHwgMTAsIG9wdGlvbnMuY29sb3JTY2FsZSk7XG4gICAgICAgIHRoaXMudmVsb2NpdHlTY2FsZSA9IG9wdGlvbnMudmVsb2NpdHlTY2FsZSB8fCAwLjAxO1xuICAgICAgICB0aGlzLnBhcnRpY2xlQWdlID0gb3B0aW9ucy5wYXJ0aWNsZUFnZSB8fCA2NDtcbiAgICAgICAgdGhpcy5zZXREYXRhKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIHRoaXMucGFydGljdWxlTXVsdGlwbGllciA9IG9wdGlvbnMucGFydGljbGVNdWx0aXBsaWVyIHx8IDEgLyAzMDA7XG4gICAgICAgIHRoaXMucGFydGljdWxlTGluZVdpZHRoID0gb3B0aW9ucy5saW5lV2lkdGggfHwgMTtcbiAgICAgICAgdmFyIGZyYW1lUmF0ZSA9IG9wdGlvbnMuZnJhbWVSYXRlIHx8IDE1O1xuICAgICAgICB0aGlzLmZyYW1lVGltZSA9IDEwMDAgLyBmcmFtZVJhdGU7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXaW5keS5wcm90b3R5cGUsIFwicGFydGljdWxlQ291bnRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwYXJ0aWN1bGVSZWR1Y3Rpb24gPSAoKC9hbmRyb2lkfGJsYWNrYmVycnl8aWVtb2JpbGV8aXBhZHxpcGhvbmV8aXBvZHxvcGVyYSBtaW5pfHdlYm9zL2kpLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpID8gKE1hdGgucG93KHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLCAxIC8gMykgfHwgMS42KSA6IDE7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLmxheWVyLmNhbnZhc0JvdW5kLndpZHRoICogdGhpcy5sYXllci5jYW52YXNCb3VuZC5oZWlnaHQgKiB0aGlzLnBhcnRpY3VsZU11bHRpcGxpZXIpICogcGFydGljdWxlUmVkdWN0aW9uO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBMb2FkIGRhdGFcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIFdpbmR5LnByb3RvdHlwZS5zZXREYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHVEYXRhID0gbnVsbDtcbiAgICAgICAgdmFyIHZEYXRhID0gbnVsbDtcbiAgICAgICAgdmFyIGdyaWQgPSBbXTtcbiAgICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAocmVjb3JkLmhlYWRlci5wYXJhbWV0ZXJDYXRlZ29yeSArIFwiLFwiICsgcmVjb3JkLmhlYWRlci5wYXJhbWV0ZXJOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiMSwyXCI6XG4gICAgICAgICAgICAgICAgY2FzZSBcIjIsMlwiOlxuICAgICAgICAgICAgICAgICAgICB1RGF0YSA9IHJlY29yZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIjEsM1wiOlxuICAgICAgICAgICAgICAgIGNhc2UgXCIyLDNcIjpcbiAgICAgICAgICAgICAgICAgICAgdkRhdGEgPSByZWNvcmQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXVEYXRhIHx8ICF2RGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiRGF0YSBhcmUgbm90IGNvcnJlY3QgZm9ybWF0XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHVEYXRhLmRhdGEuZm9yRWFjaChmdW5jdGlvbiAodSwgaW5kZXgpIHtcbiAgICAgICAgICAgIGdyaWQucHVzaChuZXcgdmVjdG9yXzEuZGVmYXVsdCh1LCB2RGF0YS5kYXRhW2luZGV4XSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygndURhdGEnLCB1RGF0YSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3ZEYXRhJywgdkRhdGEpO1xuICAgICAgICB0aGlzLmdyaWQgPSBuZXcgZ3JpZF8xLmRlZmF1bHQoZ3JpZCwgdURhdGEuaGVhZGVyLmxhMSwgdURhdGEuaGVhZGVyLmxvMSwgdURhdGEuaGVhZGVyLmR5LCB1RGF0YS5oZWFkZXIuZHgsIHVEYXRhLmhlYWRlci5ueSwgdURhdGEuaGVhZGVyLm54KTtcbiAgICAgICAgdGhpcy7OuzAgPSB1RGF0YS5oZWFkZXIubG8xO1xuICAgICAgICB0aGlzLs+GMCA9IHVEYXRhLmhlYWRlci5sYTE7XG4gICAgICAgIHRoaXMuzpTOuyA9IHVEYXRhLmhlYWRlci5keDtcbiAgICAgICAgdGhpcy7OlM+GID0gdURhdGEuaGVhZGVyLmR5O1xuICAgICAgICB0aGlzLm5pID0gdURhdGEuaGVhZGVyLm54O1xuICAgICAgICB0aGlzLm5qID0gdURhdGEuaGVhZGVyLm55OyAvLyBudW1iZXIgb2YgZ3JpZCBwb2ludHMgVy1FIGFuZCBOLVMgKGUuZy4sIDE0NCB4IDczKVxuICAgICAgICB2YXIgcCA9IDA7XG4gICAgICAgIHZhciBpc0NvbnRpbnVvdXMgPSBNYXRoLmZsb29yKHRoaXMubmkgKiB0aGlzLs6UzrspID49IDM2MDtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLm5qOyBqKyspIHtcbiAgICAgICAgICAgIHZhciByb3cgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5uaTsgaSsrLCBwKyspIHtcbiAgICAgICAgICAgICAgICByb3dbaV0gPSB0aGlzLmdyaWQuZGF0YVtwXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0NvbnRpbnVvdXMpIHtcbiAgICAgICAgICAgICAgICAvLyBGb3Igd3JhcHBlZCBncmlkcywgZHVwbGljYXRlIGZpcnN0IGNvbHVtbiBhcyBsYXN0IGNvbHVtbiB0byBzaW1wbGlmeSBpbnRlcnBvbGF0aW9uIGxvZ2ljXG4gICAgICAgICAgICAgICAgcm93LnB1c2gocm93WzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ3JpZFtqXSA9IHJvdztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hdXRvQ29sb3JSYW5nZSkge1xuICAgICAgICAgICAgdmFyIG1pbk1heCA9IHRoaXMuZ3JpZC52YWx1ZVJhbmdlO1xuICAgICAgICAgICAgdGhpcy5jb2xvclNjYWxlLnNldE1pbk1heChtaW5NYXhbMF0sIG1pbk1heFsxXSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFdpbmR5LnByb3RvdHlwZS5mbG9vck1vZCA9IGZ1bmN0aW9uIChhLCBuKSB7XG4gICAgICAgIHJldHVybiBhIC0gbiAqIE1hdGguZmxvb3IoYSAvIG4pO1xuICAgIH07XG4gICAgO1xuICAgIFdpbmR5LnByb3RvdHlwZS5pc1ZhbHVlID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHggIT09IG51bGwgJiYgeCAhPT0gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgO1xuICAgIFdpbmR5LnByb3RvdHlwZS5iaWxpbmVhckludGVycG9sYXRlVmVjdG9yID0gZnVuY3Rpb24gKHgsIHksIGcwMCwgZzEwLCBnMDEsIGcxMSkge1xuICAgICAgICB2YXIgcnggPSAoMSAtIHgpO1xuICAgICAgICB2YXIgcnkgPSAoMSAtIHkpO1xuICAgICAgICB2YXIgYSA9IHJ4ICogcnksIGIgPSB4ICogcnksIGMgPSByeCAqIHksIGQgPSB4ICogeTtcbiAgICAgICAgdmFyIHUgPSBnMDAudSAqIGEgKyBnMTAudSAqIGIgKyBnMDEudSAqIGMgKyBnMTEudSAqIGQ7XG4gICAgICAgIHZhciB2ID0gZzAwLnYgKiBhICsgZzEwLnYgKiBiICsgZzAxLnYgKiBjICsgZzExLnYgKiBkO1xuICAgICAgICByZXR1cm4gW3UsIHYsIE1hdGguc3FydCh1ICogdSArIHYgKiB2KV07XG4gICAgfTtcbiAgICA7XG4gICAgLyogR2V0IGludGVycG9sYXRlZCBncmlkIHZhbHVlIGZyb20gTG9uL0xhdCBwb3NpdGlvblxuICAgICogQHBhcmFtIM67IHtGbG9hdH0gTG9uZ2l0dWRlXG4gICAgKiBAcGFyYW0gz4Yge0Zsb2F0fSBMYXRpdHVkZVxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgIFdpbmR5LnByb3RvdHlwZS5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uICjOuywgz4YpIHtcbiAgICAgICAgaWYgKCF0aGlzLmdyaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0gdGhpcy5mbG9vck1vZCjOuyAtIHRoaXMuzrswLCAzNjApIC8gdGhpcy7OlM67OyAvLyBjYWxjdWxhdGUgbG9uZ2l0dWRlIGluZGV4IGluIHdyYXBwZWQgcmFuZ2UgWzAsIDM2MClcbiAgICAgICAgdmFyIGogPSAodGhpcy7PhjAgLSDPhikgLyB0aGlzLs6Uz4Y7IC8vIGNhbGN1bGF0ZSBsYXRpdHVkZSBpbmRleCBpbiBkaXJlY3Rpb24gKzkwIHRvIC05MFxuICAgICAgICB2YXIgZmkgPSBNYXRoLmZsb29yKGkpO1xuICAgICAgICB2YXIgY2kgPSBmaSArIDE7XG4gICAgICAgIHZhciBmaiA9IE1hdGguZmxvb3Ioaik7XG4gICAgICAgIHZhciBjaiA9IGZqICsgMTtcbiAgICAgICAgdmFyIHJvdyA9IHRoaXMuZ3JpZFtmal07IC8vRG9udCBrbm93IHdoeSBoZSBkb3NlbnQgZm91bmQgYW55IHJvdyBFUlJSUk9SXG4gICAgICAgIGlmIChyb3cpIHtcbiAgICAgICAgICAgIHZhciBnMDAgPSByb3dbZmldO1xuICAgICAgICAgICAgdmFyIGcxMCA9IHJvd1tjaV07XG4gICAgICAgICAgICBpZiAodGhpcy5pc1ZhbHVlKGcwMCkgJiYgdGhpcy5pc1ZhbHVlKGcxMCkgJiYgKHJvdyA9IHRoaXMuZ3JpZFtjal0pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGcwMSA9IHJvd1tmaV07XG4gICAgICAgICAgICAgICAgdmFyIGcxMSA9IHJvd1tjaV07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWx1ZShnMDEpICYmIHRoaXMuaXNWYWx1ZShnMTEpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFsbCBmb3VyIHBvaW50cyBmb3VuZCwgc28gaW50ZXJwb2xhdGUgdGhlIHZhbHVlLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5iaWxpbmVhckludGVycG9sYXRlVmVjdG9yKGkgLSBmaSwgaiAtIGZqLCBnMDAsIGcxMCwgZzAxLCBnMTEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIDtcbiAgICBXaW5keS5wcm90b3R5cGUuZ2V0UGFydGljdWxlV2luZCA9IGZ1bmN0aW9uIChwKSB7XG4gICAgICAgIHZhciBsbmdMYXQgPSB0aGlzLmxheWVyLmNhbnZhc1RvTWFwKHAueCwgcC55KTtcbiAgICAgICAgdmFyIHdpbmQgPSB0aGlzLmdyaWQuZ2V0KGxuZ0xhdFswXSwgbG5nTGF0WzFdKTtcbiAgICAgICAgcC5pbnRlbnNpdHkgPSB3aW5kLmludGVuc2l0eTtcbiAgICAgICAgdmFyIG1hcEFyZWEgPSB0aGlzLmxheWVyLm1hcEJvdW5kLmhlaWdodCAqIHRoaXMubGF5ZXIubWFwQm91bmQud2lkdGg7XG4gICAgICAgIHZhciB2ZWxvY2l0eVNjYWxlID0gdGhpcy52ZWxvY2l0eVNjYWxlICogTWF0aC5wb3cobWFwQXJlYSwgMC40KTtcbiAgICAgICAgdGhpcy5sYXllci5kaXN0b3J0KGxuZ0xhdFswXSwgbG5nTGF0WzFdLCBwLngsIHAueSwgdmVsb2NpdHlTY2FsZSwgd2luZCk7XG4gICAgICAgIHJldHVybiB3aW5kO1xuICAgIH07XG4gICAgV2luZHkucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKGxheWVyKSB7XG4gICAgICAgIHRoaXMuY29udGV4dDJEID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmNvbnRleHQyRC5saW5lV2lkdGggPSB0aGlzLnBhcnRpY3VsZUxpbmVXaWR0aDtcbiAgICAgICAgdGhpcy5jb250ZXh0MkQuZmlsbFN0eWxlID0gXCJyZ2JhKDAsIDAsIDAsIDAuOTcpXCI7XG4gICAgICAgIHRoaXMuY29udGV4dDJELmdsb2JhbEFscGhhID0gMC42O1xuICAgICAgICB0aGlzLmxheWVyID0gbGF5ZXI7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQnVja2V0ID0gbmV3IGFuaW1hdGlvbkJ1Y2tldF8xLmRlZmF1bHQodGhpcy5jb2xvclNjYWxlKTtcbiAgICAgICAgdGhpcy5wYXJ0aWN1bGVzLnNwbGljZSgwLCB0aGlzLnBhcnRpY3VsZXMubGVuZ3RoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY3VsZUNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucGFydGljdWxlcy5wdXNoKHRoaXMubGF5ZXIuY2FudmFzQm91bmQuZ2V0UmFuZG9tUGFydGljdWxlKHRoaXMucGFydGljbGVBZ2UpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRoZW4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdGhpcy5mcmFtZSgpO1xuICAgIH07XG4gICAgV2luZHkucHJvdG90eXBlLmZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkxvb3AgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuZnJhbWUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIGRlbHRhID0gbm93IC0gdGhpcy50aGVuO1xuICAgICAgICBpZiAoZGVsdGEgPiB0aGlzLmZyYW1lVGltZSkge1xuICAgICAgICAgICAgdGhpcy50aGVuID0gbm93IC0gKGRlbHRhICUgdGhpcy5mcmFtZVRpbWUpO1xuICAgICAgICAgICAgdGhpcy5ldm9sdmUoKTtcbiAgICAgICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBXaW5keS5wcm90b3R5cGUuZXZvbHZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkJ1Y2tldC5jbGVhcigpO1xuICAgICAgICB0aGlzLnBhcnRpY3VsZXMuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgcC5ncm93KCk7XG4gICAgICAgICAgICBpZiAocC5pc0RlYWQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5sYXllci5jYW52YXNCb3VuZC5yZXNldFBhcnRpY3VsZShwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB3aW5kID0gX3RoaXMuZ2V0UGFydGljdWxlV2luZChwKTtcbiAgICAgICAgICAgIF90aGlzLmFuaW1hdGlvbkJ1Y2tldC5hZGQocCwgd2luZCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2luZHkucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dDJELmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwiZGVzdGluYXRpb24taW5cIjtcbiAgICAgICAgdGhpcy5jb250ZXh0MkQuZmlsbFJlY3QodGhpcy5sYXllci5jYW52YXNCb3VuZC54TWluLCB0aGlzLmxheWVyLmNhbnZhc0JvdW5kLnlNaW4sIHRoaXMubGF5ZXIuY2FudmFzQm91bmQud2lkdGgsIHRoaXMubGF5ZXIuY2FudmFzQm91bmQuaGVpZ2h0KTtcbiAgICAgICAgLy8gRmFkZSBleGlzdGluZyBwYXJ0aWNsZSB0cmFpbHMuXG4gICAgICAgIHRoaXMuY29udGV4dDJELmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwibGlnaHRlclwiO1xuICAgICAgICB0aGlzLmNvbnRleHQyRC5nbG9iYWxBbHBoYSA9IDAuOTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25CdWNrZXQuZHJhdyh0aGlzLmNvbnRleHQyRCk7XG4gICAgfTtcbiAgICBXaW5keS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wYXJ0aWN1bGVzLnNwbGljZSgwLCB0aGlzLnBhcnRpY3VsZXMubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25CdWNrZXQuY2xlYXIoKTtcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uTG9vcCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYW5pbWF0aW9uTG9vcCk7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkxvb3AgPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gV2luZHk7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gV2luZHk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy93aW5keS50c1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgVmVjdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFZlY3Rvcih1LCB2KSB7XG4gICAgICAgIHRoaXMudSA9IHUgfHwgMDtcbiAgICAgICAgdGhpcy52ID0gdiB8fCAwO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yLnByb3RvdHlwZSwgXCJpbnRlbnNpdHlcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy51ICogdGhpcy51ICsgdGhpcy52ICogdGhpcy52KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIFZlY3Rvcjtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBWZWN0b3I7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92ZWN0b3IudHNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHBhcnRpY2xlXzEgPSByZXF1aXJlKFwiLi9wYXJ0aWNsZVwiKTtcbnZhciBDYW52YXNCb3VuZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDYW52YXNCb3VuZCh4TWluLCB5TWluLCB4TWF4LCB5TWF4KSB7XG4gICAgICAgIHRoaXMueE1pbiA9IHhNaW47XG4gICAgICAgIHRoaXMueU1pbiA9IHlNaW47XG4gICAgICAgIHRoaXMueE1heCA9IHhNYXg7XG4gICAgICAgIHRoaXMueU1heCA9IHlNYXg7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDYW52YXNCb3VuZC5wcm90b3R5cGUsIFwid2lkdGhcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnhNYXggLSB0aGlzLnhNaW47XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDYW52YXNCb3VuZC5wcm90b3R5cGUsIFwiaGVpZ2h0XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy55TWF4IC0gdGhpcy55TWluO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBDYW52YXNCb3VuZC5wcm90b3R5cGUuZ2V0UmFuZG9tUGFydGljdWxlID0gZnVuY3Rpb24gKG1heEFnZSkge1xuICAgICAgICB2YXIgeCA9IE1hdGgucm91bmQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy53aWR0aCkgKyB0aGlzLnhNaW4pO1xuICAgICAgICB2YXIgeSA9IE1hdGgucm91bmQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5oZWlnaHQpICsgdGhpcy55TWluKTtcbiAgICAgICAgcmV0dXJuIG5ldyBwYXJ0aWNsZV8xLmRlZmF1bHQoeCwgeSwgbWF4QWdlKTtcbiAgICB9O1xuICAgIENhbnZhc0JvdW5kLnByb3RvdHlwZS5yZXNldFBhcnRpY3VsZSA9IGZ1bmN0aW9uIChwKSB7XG4gICAgICAgIHZhciB4ID0gTWF0aC5yb3VuZChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLndpZHRoKSArIHRoaXMueE1pbik7XG4gICAgICAgIHZhciB5ID0gTWF0aC5yb3VuZChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmhlaWdodCkgKyB0aGlzLnlNaW4pO1xuICAgICAgICBwLnJlc2V0KHgsIHkpO1xuICAgICAgICByZXR1cm4gcDtcbiAgICB9O1xuICAgIHJldHVybiBDYW52YXNCb3VuZDtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBDYW52YXNCb3VuZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NhbnZhc0JvdW5kLnRzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBNYXBCb3VuZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYXBCb3VuZChub3J0aCwgZWFzdCwgc291dGgsIHdlc3QpIHtcbiAgICAgICAgdGhpcy5ub3J0aCA9IG5vcnRoICogTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgdGhpcy5lYXN0ID0gZWFzdCAqIE1hdGguUEkgLyAxODA7XG4gICAgICAgIHRoaXMuc291dGggPSBzb3V0aCAqIE1hdGguUEkgLyAxODA7XG4gICAgICAgIHRoaXMud2VzdCA9IHdlc3QgKiBNYXRoLlBJIC8gMTgwO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWFwQm91bmQucHJvdG90eXBlLCBcIndpZHRoXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKDcyMCArIHRoaXMuZWFzdCAtIHRoaXMud2VzdCkgJSAzNjA7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNYXBCb3VuZC5wcm90b3R5cGUsIFwiaGVpZ2h0XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKDM2MCArIHRoaXMubm9ydGggLSB0aGlzLnNvdXRoKSAlIDE4MDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIE1hcEJvdW5kO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IE1hcEJvdW5kO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFwQm91bmQudHNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQSBsYXllciB0eXBlIHVzZWQgd2hlbiBjcmVhdGluZyBsYXllciByZW5kZXJlcnMuXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG52YXIgX29sX0xheWVyVHlwZV8gPSB7XG4gIElNQUdFOiAnSU1BR0UnLFxuICBUSUxFOiAnVElMRScsXG4gIFZFQ1RPUl9USUxFOiAnVkVDVE9SX1RJTEUnLFxuICBWRUNUT1I6ICdWRUNUT1InXG59O1xuXG5leHBvcnQgZGVmYXVsdCBfb2xfTGF5ZXJUeXBlXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL2xheWVydHlwZS5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF9vbF9ldmVudHNfIGZyb20gJy4uL2V2ZW50cy5qcyc7XG5pbXBvcnQgX29sX2V2ZW50c19FdmVudFR5cGVfIGZyb20gJy4uL2V2ZW50cy9ldmVudHR5cGUuanMnO1xuaW1wb3J0IF9vbF8gZnJvbSAnLi4vaW5kZXguanMnO1xuaW1wb3J0IF9vbF9PYmplY3RfIGZyb20gJy4uL29iamVjdC5qcyc7XG5pbXBvcnQgX29sX2xheWVyX0Jhc2VfIGZyb20gJy4uL2xheWVyL2Jhc2UuanMnO1xuaW1wb3J0IF9vbF9sYXllcl9Qcm9wZXJ0eV8gZnJvbSAnLi4vbGF5ZXIvcHJvcGVydHkuanMnO1xuaW1wb3J0IF9vbF9vYmpfIGZyb20gJy4uL29iai5qcyc7XG5pbXBvcnQgX29sX3JlbmRlcl9FdmVudFR5cGVfIGZyb20gJy4uL3JlbmRlci9ldmVudHR5cGUuanMnO1xuaW1wb3J0IF9vbF9zb3VyY2VfU3RhdGVfIGZyb20gJy4uL3NvdXJjZS9zdGF0ZS5qcyc7XG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogQWJzdHJhY3QgYmFzZSBjbGFzczsgbm9ybWFsbHkgb25seSB1c2VkIGZvciBjcmVhdGluZyBzdWJjbGFzc2VzIGFuZCBub3RcbiAqIGluc3RhbnRpYXRlZCBpbiBhcHBzLlxuICogQSB2aXN1YWwgcmVwcmVzZW50YXRpb24gb2YgcmFzdGVyIG9yIHZlY3RvciBtYXAgZGF0YS5cbiAqIExheWVycyBncm91cCB0b2dldGhlciB0aG9zZSBwcm9wZXJ0aWVzIHRoYXQgcGVydGFpbiB0byBob3cgdGhlIGRhdGEgaXMgdG8gYmVcbiAqIGRpc3BsYXllZCwgaXJyZXNwZWN0aXZlIG9mIHRoZSBzb3VyY2Ugb2YgdGhhdCBkYXRhLlxuICpcbiAqIExheWVycyBhcmUgdXN1YWxseSBhZGRlZCB0byBhIG1hcCB3aXRoIHtAbGluayBvbC5NYXAjYWRkTGF5ZXJ9LiBDb21wb25lbnRzXG4gKiBsaWtlIHtAbGluayBvbC5pbnRlcmFjdGlvbi5TZWxlY3R9IHVzZSB1bm1hbmFnZWQgbGF5ZXJzIGludGVybmFsbHkuIFRoZXNlXG4gKiB1bm1hbmFnZWQgbGF5ZXJzIGFyZSBhc3NvY2lhdGVkIHdpdGggdGhlIG1hcCB1c2luZ1xuICoge0BsaW5rIG9sLmxheWVyLkxheWVyI3NldE1hcH0gaW5zdGVhZC5cbiAqXG4gKiBBIGdlbmVyaWMgYGNoYW5nZWAgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgc3RhdGUgb2YgdGhlIHNvdXJjZSBjaGFuZ2VzLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQGFic3RyYWN0XG4gKiBAZXh0ZW5kcyB7b2wubGF5ZXIuQmFzZX1cbiAqIEBmaXJlcyBvbC5yZW5kZXIuRXZlbnRcbiAqIEBwYXJhbSB7b2x4LmxheWVyLkxheWVyT3B0aW9uc30gb3B0aW9ucyBMYXllciBvcHRpb25zLlxuICogQGFwaVxuICovXG52YXIgX29sX2xheWVyX0xheWVyXyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblxuICB2YXIgYmFzZU9wdGlvbnMgPSBfb2xfb2JqXy5hc3NpZ24oe30sIG9wdGlvbnMpO1xuICBkZWxldGUgYmFzZU9wdGlvbnMuc291cmNlO1xuXG4gIF9vbF9sYXllcl9CYXNlXy5jYWxsKHRoaXMsIC8qKiBAdHlwZSB7b2x4LmxheWVyLkJhc2VPcHRpb25zfSAqLyAoYmFzZU9wdGlvbnMpKTtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUgez9vbC5FdmVudHNLZXl9XG4gICAqL1xuICB0aGlzLm1hcFByZWNvbXBvc2VLZXlfID0gbnVsbDtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUgez9vbC5FdmVudHNLZXl9XG4gICAqL1xuICB0aGlzLm1hcFJlbmRlcktleV8gPSBudWxsO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7P29sLkV2ZW50c0tleX1cbiAgICovXG4gIHRoaXMuc291cmNlQ2hhbmdlS2V5XyA9IG51bGw7XG5cbiAgaWYgKG9wdGlvbnMubWFwKSB7XG4gICAgdGhpcy5zZXRNYXAob3B0aW9ucy5tYXApO1xuICB9XG5cbiAgX29sX2V2ZW50c18ubGlzdGVuKHRoaXMsXG4gICAgICBfb2xfT2JqZWN0Xy5nZXRDaGFuZ2VFdmVudFR5cGUoX29sX2xheWVyX1Byb3BlcnR5Xy5TT1VSQ0UpLFxuICAgICAgdGhpcy5oYW5kbGVTb3VyY2VQcm9wZXJ0eUNoYW5nZV8sIHRoaXMpO1xuXG4gIHZhciBzb3VyY2UgPSBvcHRpb25zLnNvdXJjZSA/IG9wdGlvbnMuc291cmNlIDogbnVsbDtcbiAgdGhpcy5zZXRTb3VyY2Uoc291cmNlKTtcbn07XG5cbl9vbF8uaW5oZXJpdHMoX29sX2xheWVyX0xheWVyXywgX29sX2xheWVyX0Jhc2VfKTtcblxuXG4vKipcbiAqIFJldHVybiBgdHJ1ZWAgaWYgdGhlIGxheWVyIGlzIHZpc2libGUsIGFuZCBpZiB0aGUgcGFzc2VkIHJlc29sdXRpb24gaXNcbiAqIGJldHdlZW4gdGhlIGxheWVyJ3MgbWluUmVzb2x1dGlvbiBhbmQgbWF4UmVzb2x1dGlvbi4gVGhlIGNvbXBhcmlzb24gaXNcbiAqIGluY2x1c2l2ZSBmb3IgYG1pblJlc29sdXRpb25gIGFuZCBleGNsdXNpdmUgZm9yIGBtYXhSZXNvbHV0aW9uYC5cbiAqIEBwYXJhbSB7b2wuTGF5ZXJTdGF0ZX0gbGF5ZXJTdGF0ZSBMYXllciBzdGF0ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSByZXNvbHV0aW9uIFJlc29sdXRpb24uXG4gKiBAcmV0dXJuIHtib29sZWFufSBUaGUgbGF5ZXIgaXMgdmlzaWJsZSBhdCB0aGUgZ2l2ZW4gcmVzb2x1dGlvbi5cbiAqL1xuX29sX2xheWVyX0xheWVyXy52aXNpYmxlQXRSZXNvbHV0aW9uID0gZnVuY3Rpb24obGF5ZXJTdGF0ZSwgcmVzb2x1dGlvbikge1xuICByZXR1cm4gbGF5ZXJTdGF0ZS52aXNpYmxlICYmIHJlc29sdXRpb24gPj0gbGF5ZXJTdGF0ZS5taW5SZXNvbHV0aW9uICYmXG4gICAgICByZXNvbHV0aW9uIDwgbGF5ZXJTdGF0ZS5tYXhSZXNvbHV0aW9uO1xufTtcblxuXG4vKipcbiAqIEBpbmhlcml0RG9jXG4gKi9cbl9vbF9sYXllcl9MYXllcl8ucHJvdG90eXBlLmdldExheWVyc0FycmF5ID0gZnVuY3Rpb24ob3B0X2FycmF5KSB7XG4gIHZhciBhcnJheSA9IG9wdF9hcnJheSA/IG9wdF9hcnJheSA6IFtdO1xuICBhcnJheS5wdXNoKHRoaXMpO1xuICByZXR1cm4gYXJyYXk7XG59O1xuXG5cbi8qKlxuICogQGluaGVyaXREb2NcbiAqL1xuX29sX2xheWVyX0xheWVyXy5wcm90b3R5cGUuZ2V0TGF5ZXJTdGF0ZXNBcnJheSA9IGZ1bmN0aW9uKG9wdF9zdGF0ZXMpIHtcbiAgdmFyIHN0YXRlcyA9IG9wdF9zdGF0ZXMgPyBvcHRfc3RhdGVzIDogW107XG4gIHN0YXRlcy5wdXNoKHRoaXMuZ2V0TGF5ZXJTdGF0ZSgpKTtcbiAgcmV0dXJuIHN0YXRlcztcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIGxheWVyIHNvdXJjZS5cbiAqIEByZXR1cm4ge29sLnNvdXJjZS5Tb3VyY2V9IFRoZSBsYXllciBzb3VyY2UgKG9yIGBudWxsYCBpZiBub3QgeWV0IHNldCkuXG4gKiBAb2JzZXJ2YWJsZVxuICogQGFwaVxuICovXG5fb2xfbGF5ZXJfTGF5ZXJfLnByb3RvdHlwZS5nZXRTb3VyY2UgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHNvdXJjZSA9IHRoaXMuZ2V0KF9vbF9sYXllcl9Qcm9wZXJ0eV8uU09VUkNFKTtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7b2wuc291cmNlLlNvdXJjZX0gKi8gKHNvdXJjZSkgfHwgbnVsbDtcbn07XG5cblxuLyoqXG4gICogQGluaGVyaXREb2NcbiAgKi9cbl9vbF9sYXllcl9MYXllcl8ucHJvdG90eXBlLmdldFNvdXJjZVN0YXRlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzb3VyY2UgPSB0aGlzLmdldFNvdXJjZSgpO1xuICByZXR1cm4gIXNvdXJjZSA/IF9vbF9zb3VyY2VfU3RhdGVfLlVOREVGSU5FRCA6IHNvdXJjZS5nZXRTdGF0ZSgpO1xufTtcblxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbl9vbF9sYXllcl9MYXllcl8ucHJvdG90eXBlLmhhbmRsZVNvdXJjZUNoYW5nZV8gPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5jaGFuZ2VkKCk7XG59O1xuXG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuX29sX2xheWVyX0xheWVyXy5wcm90b3R5cGUuaGFuZGxlU291cmNlUHJvcGVydHlDaGFuZ2VfID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLnNvdXJjZUNoYW5nZUtleV8pIHtcbiAgICBfb2xfZXZlbnRzXy51bmxpc3RlbkJ5S2V5KHRoaXMuc291cmNlQ2hhbmdlS2V5Xyk7XG4gICAgdGhpcy5zb3VyY2VDaGFuZ2VLZXlfID0gbnVsbDtcbiAgfVxuICB2YXIgc291cmNlID0gdGhpcy5nZXRTb3VyY2UoKTtcbiAgaWYgKHNvdXJjZSkge1xuICAgIHRoaXMuc291cmNlQ2hhbmdlS2V5XyA9IF9vbF9ldmVudHNfLmxpc3Rlbihzb3VyY2UsXG4gICAgICAgIF9vbF9ldmVudHNfRXZlbnRUeXBlXy5DSEFOR0UsIHRoaXMuaGFuZGxlU291cmNlQ2hhbmdlXywgdGhpcyk7XG4gIH1cbiAgdGhpcy5jaGFuZ2VkKCk7XG59O1xuXG5cbi8qKlxuICogU2V0cyB0aGUgbGF5ZXIgdG8gYmUgcmVuZGVyZWQgb24gdG9wIG9mIG90aGVyIGxheWVycyBvbiBhIG1hcC4gVGhlIG1hcCB3aWxsXG4gKiBub3QgbWFuYWdlIHRoaXMgbGF5ZXIgaW4gaXRzIGxheWVycyBjb2xsZWN0aW9uLCBhbmQgdGhlIGNhbGxiYWNrIGluXG4gKiB7QGxpbmsgb2wuTWFwI2ZvckVhY2hMYXllckF0UGl4ZWx9IHdpbGwgcmVjZWl2ZSBgbnVsbGAgYXMgbGF5ZXIuIFRoaXNcbiAqIGlzIHVzZWZ1bCBmb3IgdGVtcG9yYXJ5IGxheWVycy4gVG8gcmVtb3ZlIGFuIHVubWFuYWdlZCBsYXllciBmcm9tIHRoZSBtYXAsXG4gKiB1c2UgYCNzZXRNYXAobnVsbClgLlxuICpcbiAqIFRvIGFkZCB0aGUgbGF5ZXIgdG8gYSBtYXAgYW5kIGhhdmUgaXQgbWFuYWdlZCBieSB0aGUgbWFwLCB1c2VcbiAqIHtAbGluayBvbC5NYXAjYWRkTGF5ZXJ9IGluc3RlYWQuXG4gKiBAcGFyYW0ge29sLlBsdWdnYWJsZU1hcH0gbWFwIE1hcC5cbiAqIEBhcGlcbiAqL1xuX29sX2xheWVyX0xheWVyXy5wcm90b3R5cGUuc2V0TWFwID0gZnVuY3Rpb24obWFwKSB7XG4gIGlmICh0aGlzLm1hcFByZWNvbXBvc2VLZXlfKSB7XG4gICAgX29sX2V2ZW50c18udW5saXN0ZW5CeUtleSh0aGlzLm1hcFByZWNvbXBvc2VLZXlfKTtcbiAgICB0aGlzLm1hcFByZWNvbXBvc2VLZXlfID0gbnVsbDtcbiAgfVxuICBpZiAoIW1hcCkge1xuICAgIHRoaXMuY2hhbmdlZCgpO1xuICB9XG4gIGlmICh0aGlzLm1hcFJlbmRlcktleV8pIHtcbiAgICBfb2xfZXZlbnRzXy51bmxpc3RlbkJ5S2V5KHRoaXMubWFwUmVuZGVyS2V5Xyk7XG4gICAgdGhpcy5tYXBSZW5kZXJLZXlfID0gbnVsbDtcbiAgfVxuICBpZiAobWFwKSB7XG4gICAgdGhpcy5tYXBQcmVjb21wb3NlS2V5XyA9IF9vbF9ldmVudHNfLmxpc3RlbihcbiAgICAgICAgbWFwLCBfb2xfcmVuZGVyX0V2ZW50VHlwZV8uUFJFQ09NUE9TRSwgZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgdmFyIGxheWVyU3RhdGUgPSB0aGlzLmdldExheWVyU3RhdGUoKTtcbiAgICAgICAgICBsYXllclN0YXRlLm1hbmFnZWQgPSBmYWxzZTtcbiAgICAgICAgICBsYXllclN0YXRlLnpJbmRleCA9IEluZmluaXR5O1xuICAgICAgICAgIGV2dC5mcmFtZVN0YXRlLmxheWVyU3RhdGVzQXJyYXkucHVzaChsYXllclN0YXRlKTtcbiAgICAgICAgICBldnQuZnJhbWVTdGF0ZS5sYXllclN0YXRlc1tfb2xfLmdldFVpZCh0aGlzKV0gPSBsYXllclN0YXRlO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB0aGlzLm1hcFJlbmRlcktleV8gPSBfb2xfZXZlbnRzXy5saXN0ZW4oXG4gICAgICAgIHRoaXMsIF9vbF9ldmVudHNfRXZlbnRUeXBlXy5DSEFOR0UsIG1hcC5yZW5kZXIsIG1hcCk7XG4gICAgdGhpcy5jaGFuZ2VkKCk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBTZXQgdGhlIGxheWVyIHNvdXJjZS5cbiAqIEBwYXJhbSB7b2wuc291cmNlLlNvdXJjZX0gc291cmNlIFRoZSBsYXllciBzb3VyY2UuXG4gKiBAb2JzZXJ2YWJsZVxuICogQGFwaVxuICovXG5fb2xfbGF5ZXJfTGF5ZXJfLnByb3RvdHlwZS5zZXRTb3VyY2UgPSBmdW5jdGlvbihzb3VyY2UpIHtcbiAgdGhpcy5zZXQoX29sX2xheWVyX1Byb3BlcnR5Xy5TT1VSQ0UsIHNvdXJjZSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgX29sX2xheWVyX0xheWVyXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL2xheWVyL2xheWVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbnZhciBfb2xfbGF5ZXJfUHJvcGVydHlfID0ge1xuICBPUEFDSVRZOiAnb3BhY2l0eScsXG4gIFZJU0lCTEU6ICd2aXNpYmxlJyxcbiAgRVhURU5UOiAnZXh0ZW50JyxcbiAgWl9JTkRFWDogJ3pJbmRleCcsXG4gIE1BWF9SRVNPTFVUSU9OOiAnbWF4UmVzb2x1dGlvbicsXG4gIE1JTl9SRVNPTFVUSU9OOiAnbWluUmVzb2x1dGlvbicsXG4gIFNPVVJDRTogJ3NvdXJjZSdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IF9vbF9sYXllcl9Qcm9wZXJ0eV87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9sYXllci9wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBTdGF0ZSBvZiB0aGUgc291cmNlLCBvbmUgb2YgJ3VuZGVmaW5lZCcsICdsb2FkaW5nJywgJ3JlYWR5JyBvciAnZXJyb3InLlxuICogQGVudW0ge3N0cmluZ31cbiAqL1xudmFyIF9vbF9zb3VyY2VfU3RhdGVfID0ge1xuICBVTkRFRklORUQ6ICd1bmRlZmluZWQnLFxuICBMT0FESU5HOiAnbG9hZGluZycsXG4gIFJFQURZOiAncmVhZHknLFxuICBFUlJPUjogJ2Vycm9yJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgX29sX3NvdXJjZV9TdGF0ZV87XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL3NvdXJjZS9zdGF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF9vbF8gZnJvbSAnLi9pbmRleC5qcyc7XG5pbXBvcnQgX29sX2V2ZW50c19FdmVudFRhcmdldF8gZnJvbSAnLi9ldmVudHMvZXZlbnR0YXJnZXQuanMnO1xuaW1wb3J0IF9vbF9ldmVudHNfRXZlbnRUeXBlXyBmcm9tICcuL2V2ZW50cy9ldmVudHR5cGUuanMnO1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICogQGFic3RyYWN0XG4gKiBAZXh0ZW5kcyB7b2wuZXZlbnRzLkV2ZW50VGFyZ2V0fVxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcGFyYW0ge251bWJlcnx1bmRlZmluZWR9IHJlc29sdXRpb24gUmVzb2x1dGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBwaXhlbFJhdGlvIFBpeGVsIHJhdGlvLlxuICogQHBhcmFtIHtvbC5JbWFnZVN0YXRlfSBzdGF0ZSBTdGF0ZS5cbiAqL1xudmFyIF9vbF9JbWFnZUJhc2VfID0gZnVuY3Rpb24oZXh0ZW50LCByZXNvbHV0aW9uLCBwaXhlbFJhdGlvLCBzdGF0ZSkge1xuXG4gIF9vbF9ldmVudHNfRXZlbnRUYXJnZXRfLmNhbGwodGhpcyk7XG5cbiAgLyoqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHR5cGUge29sLkV4dGVudH1cbiAgICovXG4gIHRoaXMuZXh0ZW50ID0gZXh0ZW50O1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgdGhpcy5waXhlbFJhdGlvXyA9IHBpeGVsUmF0aW87XG5cbiAgLyoqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHR5cGUge251bWJlcnx1bmRlZmluZWR9XG4gICAqL1xuICB0aGlzLnJlc29sdXRpb24gPSByZXNvbHV0aW9uO1xuXG4gIC8qKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEB0eXBlIHtvbC5JbWFnZVN0YXRlfVxuICAgKi9cbiAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG59O1xuXG5fb2xfLmluaGVyaXRzKF9vbF9JbWFnZUJhc2VfLCBfb2xfZXZlbnRzX0V2ZW50VGFyZ2V0Xyk7XG5cblxuLyoqXG4gKiBAcHJvdGVjdGVkXG4gKi9cbl9vbF9JbWFnZUJhc2VfLnByb3RvdHlwZS5jaGFuZ2VkID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudChfb2xfZXZlbnRzX0V2ZW50VHlwZV8uQ0hBTkdFKTtcbn07XG5cblxuLyoqXG4gKiBAcmV0dXJuIHtvbC5FeHRlbnR9IEV4dGVudC5cbiAqL1xuX29sX0ltYWdlQmFzZV8ucHJvdG90eXBlLmdldEV4dGVudCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5leHRlbnQ7XG59O1xuXG5cbi8qKlxuICogQGFic3RyYWN0XG4gKiBAcmV0dXJuIHtIVE1MQ2FudmFzRWxlbWVudHxJbWFnZXxIVE1MVmlkZW9FbGVtZW50fSBJbWFnZS5cbiAqL1xuX29sX0ltYWdlQmFzZV8ucHJvdG90eXBlLmdldEltYWdlID0gZnVuY3Rpb24oKSB7fTtcblxuXG4vKipcbiAqIEByZXR1cm4ge251bWJlcn0gUGl4ZWxSYXRpby5cbiAqL1xuX29sX0ltYWdlQmFzZV8ucHJvdG90eXBlLmdldFBpeGVsUmF0aW8gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucGl4ZWxSYXRpb187XG59O1xuXG5cbi8qKlxuICogQHJldHVybiB7bnVtYmVyfSBSZXNvbHV0aW9uLlxuICovXG5fb2xfSW1hZ2VCYXNlXy5wcm90b3R5cGUuZ2V0UmVzb2x1dGlvbiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtudW1iZXJ9ICovICh0aGlzLnJlc29sdXRpb24pO1xufTtcblxuXG4vKipcbiAqIEByZXR1cm4ge29sLkltYWdlU3RhdGV9IFN0YXRlLlxuICovXG5fb2xfSW1hZ2VCYXNlXy5wcm90b3R5cGUuZ2V0U3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuc3RhdGU7XG59O1xuXG5cbi8qKlxuICogTG9hZCBub3QgeWV0IGxvYWRlZCBVUkkuXG4gKiBAYWJzdHJhY3RcbiAqL1xuX29sX0ltYWdlQmFzZV8ucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbigpIHt9O1xuZXhwb3J0IGRlZmF1bHQgX29sX0ltYWdlQmFzZV87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9pbWFnZWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogRXh0ZW50IGNvcm5lci5cbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbnZhciBfb2xfZXh0ZW50X0Nvcm5lcl8gPSB7XG4gIEJPVFRPTV9MRUZUOiAnYm90dG9tLWxlZnQnLFxuICBCT1RUT01fUklHSFQ6ICdib3R0b20tcmlnaHQnLFxuICBUT1BfTEVGVDogJ3RvcC1sZWZ0JyxcbiAgVE9QX1JJR0hUOiAndG9wLXJpZ2h0J1xufTtcblxuZXhwb3J0IGRlZmF1bHQgX29sX2V4dGVudF9Db3JuZXJfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvZXh0ZW50L2Nvcm5lci5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9vbF9hcnJheV8gPSB7fTtcblxuXG4vKipcbiAqIFBlcmZvcm1zIGEgYmluYXJ5IHNlYXJjaCBvbiB0aGUgcHJvdmlkZWQgc29ydGVkIGxpc3QgYW5kIHJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBpdGVtIGlmIGZvdW5kLiBJZiBpdCBjYW4ndCBiZSBmb3VuZCBpdCdsbCByZXR1cm4gLTEuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZGFya3NreWFwcC9iaW5hcnktc2VhcmNoXG4gKlxuICogQHBhcmFtIHtBcnJheS48Kj59IGhheXN0YWNrIEl0ZW1zIHRvIHNlYXJjaCB0aHJvdWdoLlxuICogQHBhcmFtIHsqfSBuZWVkbGUgVGhlIGl0ZW0gdG8gbG9vayBmb3IuXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gb3B0X2NvbXBhcmF0b3IgQ29tcGFyYXRvciBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGluZGV4IG9mIHRoZSBpdGVtIGlmIGZvdW5kLCAtMSBpZiBub3QuXG4gKi9cbl9vbF9hcnJheV8uYmluYXJ5U2VhcmNoID0gZnVuY3Rpb24oaGF5c3RhY2ssIG5lZWRsZSwgb3B0X2NvbXBhcmF0b3IpIHtcbiAgdmFyIG1pZCwgY21wO1xuICB2YXIgY29tcGFyYXRvciA9IG9wdF9jb21wYXJhdG9yIHx8IF9vbF9hcnJheV8ubnVtYmVyU2FmZUNvbXBhcmVGdW5jdGlvbjtcbiAgdmFyIGxvdyA9IDA7XG4gIHZhciBoaWdoID0gaGF5c3RhY2subGVuZ3RoO1xuICB2YXIgZm91bmQgPSBmYWxzZTtcblxuICB3aGlsZSAobG93IDwgaGlnaCkge1xuICAgIC8qIE5vdGUgdGhhdCBcIihsb3cgKyBoaWdoKSA+Pj4gMVwiIG1heSBvdmVyZmxvdywgYW5kIHJlc3VsdHMgaW4gYSB0eXBlY2FzdFxuICAgICAqIHRvIGRvdWJsZSAod2hpY2ggZ2l2ZXMgdGhlIHdyb25nIHJlc3VsdHMpLiAqL1xuICAgIG1pZCA9IGxvdyArIChoaWdoIC0gbG93ID4+IDEpO1xuICAgIGNtcCA9ICtjb21wYXJhdG9yKGhheXN0YWNrW21pZF0sIG5lZWRsZSk7XG5cbiAgICBpZiAoY21wIDwgMC4wKSB7IC8qIFRvbyBsb3cuICovXG4gICAgICBsb3cgID0gbWlkICsgMTtcblxuICAgIH0gZWxzZSB7IC8qIEtleSBmb3VuZCBvciB0b28gaGlnaCAqL1xuICAgICAgaGlnaCA9IG1pZDtcbiAgICAgIGZvdW5kID0gIWNtcDtcbiAgICB9XG4gIH1cblxuICAvKiBLZXkgbm90IGZvdW5kLiAqL1xuICByZXR1cm4gZm91bmQgPyBsb3cgOiB+bG93O1xufTtcblxuXG4vKipcbiAqIENvbXBhcmUgZnVuY3Rpb24gZm9yIGFycmF5IHNvcnQgdGhhdCBpcyBzYWZlIGZvciBudW1iZXJzLlxuICogQHBhcmFtIHsqfSBhIFRoZSBmaXJzdCBvYmplY3QgdG8gYmUgY29tcGFyZWQuXG4gKiBAcGFyYW0geyp9IGIgVGhlIHNlY29uZCBvYmplY3QgdG8gYmUgY29tcGFyZWQuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgbmVnYXRpdmUgbnVtYmVyLCB6ZXJvLCBvciBhIHBvc2l0aXZlIG51bWJlciBhcyB0aGUgZmlyc3RcbiAqICAgICBhcmd1bWVudCBpcyBsZXNzIHRoYW4sIGVxdWFsIHRvLCBvciBncmVhdGVyIHRoYW4gdGhlIHNlY29uZC5cbiAqL1xuX29sX2FycmF5Xy5udW1iZXJTYWZlQ29tcGFyZUZ1bmN0aW9uID0gZnVuY3Rpb24oYSwgYikge1xuICByZXR1cm4gYSA+IGIgPyAxIDogYSA8IGIgPyAtMSA6IDA7XG59O1xuXG5cbi8qKlxuICogV2hldGhlciB0aGUgYXJyYXkgY29udGFpbnMgdGhlIGdpdmVuIG9iamVjdC5cbiAqIEBwYXJhbSB7QXJyYXkuPCo+fSBhcnIgVGhlIGFycmF5IHRvIHRlc3QgZm9yIHRoZSBwcmVzZW5jZSBvZiB0aGUgZWxlbWVudC5cbiAqIEBwYXJhbSB7Kn0gb2JqIFRoZSBvYmplY3QgZm9yIHdoaWNoIHRvIHRlc3QuXG4gKiBAcmV0dXJuIHtib29sZWFufSBUaGUgb2JqZWN0IGlzIGluIHRoZSBhcnJheS5cbiAqL1xuX29sX2FycmF5Xy5pbmNsdWRlcyA9IGZ1bmN0aW9uKGFyciwgb2JqKSB7XG4gIHJldHVybiBhcnIuaW5kZXhPZihvYmopID49IDA7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheS48bnVtYmVyPn0gYXJyIEFycmF5LlxuICogQHBhcmFtIHtudW1iZXJ9IHRhcmdldCBUYXJnZXQuXG4gKiBAcGFyYW0ge251bWJlcn0gZGlyZWN0aW9uIDAgbWVhbnMgcmV0dXJuIHRoZSBuZWFyZXN0LCA+IDBcbiAqICAgIG1lYW5zIHJldHVybiB0aGUgbGFyZ2VzdCBuZWFyZXN0LCA8IDAgbWVhbnMgcmV0dXJuIHRoZVxuICogICAgc21hbGxlc3QgbmVhcmVzdC5cbiAqIEByZXR1cm4ge251bWJlcn0gSW5kZXguXG4gKi9cbl9vbF9hcnJheV8ubGluZWFyRmluZE5lYXJlc3QgPSBmdW5jdGlvbihhcnIsIHRhcmdldCwgZGlyZWN0aW9uKSB7XG4gIHZhciBuID0gYXJyLmxlbmd0aDtcbiAgaWYgKGFyclswXSA8PSB0YXJnZXQpIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIGlmICh0YXJnZXQgPD0gYXJyW24gLSAxXSkge1xuICAgIHJldHVybiBuIC0gMTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaTtcbiAgICBpZiAoZGlyZWN0aW9uID4gMCkge1xuICAgICAgZm9yIChpID0gMTsgaSA8IG47ICsraSkge1xuICAgICAgICBpZiAoYXJyW2ldIDwgdGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuIGkgLSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPCAwKSB7XG4gICAgICBmb3IgKGkgPSAxOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIGlmIChhcnJbaV0gPD0gdGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChpID0gMTsgaSA8IG47ICsraSkge1xuICAgICAgICBpZiAoYXJyW2ldID09IHRhcmdldCkge1xuICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9IGVsc2UgaWYgKGFycltpXSA8IHRhcmdldCkge1xuICAgICAgICAgIGlmIChhcnJbaSAtIDFdIC0gdGFyZ2V0IDwgdGFyZ2V0IC0gYXJyW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gaSAtIDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbiAtIDE7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5LjwqPn0gYXJyIEFycmF5LlxuICogQHBhcmFtIHtudW1iZXJ9IGJlZ2luIEJlZ2luIGluZGV4LlxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBFbmQgaW5kZXguXG4gKi9cbl9vbF9hcnJheV8ucmV2ZXJzZVN1YkFycmF5ID0gZnVuY3Rpb24oYXJyLCBiZWdpbiwgZW5kKSB7XG4gIHdoaWxlIChiZWdpbiA8IGVuZCkge1xuICAgIHZhciB0bXAgPSBhcnJbYmVnaW5dO1xuICAgIGFycltiZWdpbl0gPSBhcnJbZW5kXTtcbiAgICBhcnJbZW5kXSA9IHRtcDtcbiAgICArK2JlZ2luO1xuICAgIC0tZW5kO1xuICB9XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheS48VkFMVUU+fSBhcnIgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXkuPFZBTFVFPnxWQUxVRX0gZGF0YSBUaGUgZWxlbWVudHMgb3IgYXJyYXlzIG9mIGVsZW1lbnRzXG4gKiAgICAgdG8gYWRkIHRvIGFyci5cbiAqIEB0ZW1wbGF0ZSBWQUxVRVxuICovXG5fb2xfYXJyYXlfLmV4dGVuZCA9IGZ1bmN0aW9uKGFyciwgZGF0YSkge1xuICB2YXIgaTtcbiAgdmFyIGV4dGVuc2lvbiA9IEFycmF5LmlzQXJyYXkoZGF0YSkgPyBkYXRhIDogW2RhdGFdO1xuICB2YXIgbGVuZ3RoID0gZXh0ZW5zaW9uLmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgYXJyW2Fyci5sZW5ndGhdID0gZXh0ZW5zaW9uW2ldO1xuICB9XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheS48VkFMVUU+fSBhcnIgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7VkFMVUV9IG9iaiBUaGUgZWxlbWVudCB0byByZW1vdmUuXG4gKiBAdGVtcGxhdGUgVkFMVUVcbiAqIEByZXR1cm4ge2Jvb2xlYW59IElmIHRoZSBlbGVtZW50IHdhcyByZW1vdmVkLlxuICovXG5fb2xfYXJyYXlfLnJlbW92ZSA9IGZ1bmN0aW9uKGFyciwgb2JqKSB7XG4gIHZhciBpID0gYXJyLmluZGV4T2Yob2JqKTtcbiAgdmFyIGZvdW5kID0gaSA+IC0xO1xuICBpZiAoZm91bmQpIHtcbiAgICBhcnIuc3BsaWNlKGksIDEpO1xuICB9XG4gIHJldHVybiBmb3VuZDtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5LjxWQUxVRT59IGFyciBUaGUgYXJyYXkgdG8gc2VhcmNoIGluLlxuICogQHBhcmFtIHtmdW5jdGlvbihWQUxVRSwgbnVtYmVyLCA/KSA6IGJvb2xlYW59IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbXBhcmUuXG4gKiBAdGVtcGxhdGUgVkFMVUVcbiAqIEByZXR1cm4ge1ZBTFVFfSBUaGUgZWxlbWVudCBmb3VuZC5cbiAqL1xuX29sX2FycmF5Xy5maW5kID0gZnVuY3Rpb24oYXJyLCBmdW5jKSB7XG4gIHZhciBsZW5ndGggPSBhcnIubGVuZ3RoID4+PiAwO1xuICB2YXIgdmFsdWU7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHZhbHVlID0gYXJyW2ldO1xuICAgIGlmIChmdW5jKHZhbHVlLCBpLCBhcnIpKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXl8VWludDhDbGFtcGVkQXJyYXl9IGFycjEgVGhlIGZpcnN0IGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge0FycmF5fFVpbnQ4Q2xhbXBlZEFycmF5fSBhcnIyIFRoZSBzZWNvbmQgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFdoZXRoZXIgdGhlIHR3byBhcnJheXMgYXJlIGVxdWFsLlxuICovXG5fb2xfYXJyYXlfLmVxdWFscyA9IGZ1bmN0aW9uKGFycjEsIGFycjIpIHtcbiAgdmFyIGxlbjEgPSBhcnIxLmxlbmd0aDtcbiAgaWYgKGxlbjEgIT09IGFycjIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuMTsgaSsrKSB7XG4gICAgaWYgKGFycjFbaV0gIT09IGFycjJbaV0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheS48Kj59IGFyciBUaGUgYXJyYXkgdG8gc29ydCAobW9kaWZpZXMgb3JpZ2luYWwpLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29tcGFyZUZuYyBDb21wYXJpc29uIGZ1bmN0aW9uLlxuICovXG5fb2xfYXJyYXlfLnN0YWJsZVNvcnQgPSBmdW5jdGlvbihhcnIsIGNvbXBhcmVGbmMpIHtcbiAgdmFyIGxlbmd0aCA9IGFyci5sZW5ndGg7XG4gIHZhciB0bXAgPSBBcnJheShhcnIubGVuZ3RoKTtcbiAgdmFyIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHRtcFtpXSA9IHtpbmRleDogaSwgdmFsdWU6IGFycltpXX07XG4gIH1cbiAgdG1wLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBjb21wYXJlRm5jKGEudmFsdWUsIGIudmFsdWUpIHx8IGEuaW5kZXggLSBiLmluZGV4O1xuICB9KTtcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGFycltpXSA9IHRtcFtpXS52YWx1ZTtcbiAgfVxufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXkuPCo+fSBhcnIgVGhlIGFycmF5IHRvIHNlYXJjaCBpbi5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgQ29tcGFyaXNvbiBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge251bWJlcn0gUmV0dXJuIGluZGV4LlxuICovXG5fb2xfYXJyYXlfLmZpbmRJbmRleCA9IGZ1bmN0aW9uKGFyciwgZnVuYykge1xuICB2YXIgaW5kZXg7XG4gIHZhciBmb3VuZCA9ICFhcnIuZXZlcnkoZnVuY3Rpb24oZWwsIGlkeCkge1xuICAgIGluZGV4ID0gaWR4O1xuICAgIHJldHVybiAhZnVuYyhlbCwgaWR4LCBhcnIpO1xuICB9KTtcbiAgcmV0dXJuIGZvdW5kID8gaW5kZXggOiAtMTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5LjwqPn0gYXJyIFRoZSBhcnJheSB0byB0ZXN0LlxuICogQHBhcmFtIHtGdW5jdGlvbj19IG9wdF9mdW5jIENvbXBhcmlzb24gZnVuY3Rpb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfc3RyaWN0IFN0cmljdGx5IHNvcnRlZCAoZGVmYXVsdCBmYWxzZSkuXG4gKiBAcmV0dXJuIHtib29sZWFufSBSZXR1cm4gaW5kZXguXG4gKi9cbl9vbF9hcnJheV8uaXNTb3J0ZWQgPSBmdW5jdGlvbihhcnIsIG9wdF9mdW5jLCBvcHRfc3RyaWN0KSB7XG4gIHZhciBjb21wYXJlID0gb3B0X2Z1bmMgfHwgX29sX2FycmF5Xy5udW1iZXJTYWZlQ29tcGFyZUZ1bmN0aW9uO1xuICByZXR1cm4gYXJyLmV2ZXJ5KGZ1bmN0aW9uKGN1cnJlbnRWYWwsIGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIHJlcyA9IGNvbXBhcmUoYXJyW2luZGV4IC0gMV0sIGN1cnJlbnRWYWwpO1xuICAgIHJldHVybiAhKHJlcyA+IDAgfHwgb3B0X3N0cmljdCAmJiByZXMgPT09IDApO1xuICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBfb2xfYXJyYXlfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfb2xfcHJval9wcm9qNF8gPSB7fTtcblxuXG4vKipcbiAqIEBwcml2YXRlXG4gKiBAdHlwZSB7UHJvajR9XG4gKi9cbl9vbF9wcm9qX3Byb2o0Xy5jYWNoZV8gPSBudWxsO1xuXG5cbi8qKlxuICogU3RvcmUgdGhlIHByb2o0IGZ1bmN0aW9uLlxuICogQHBhcmFtIHtQcm9qNH0gcHJvajQgVGhlIHByb2o0IGZ1bmN0aW9uLlxuICovXG5fb2xfcHJval9wcm9qNF8uc2V0ID0gZnVuY3Rpb24ocHJvajQpIHtcbiAgX29sX3Byb2pfcHJvajRfLmNhY2hlXyA9IHByb2o0O1xufTtcblxuXG4vKipcbiAqIEdldCBwcm9qNC5cbiAqIEByZXR1cm4ge1Byb2o0fSBUaGUgcHJvajQgZnVuY3Rpb24gc2V0IGFib3ZlIG9yIGF2YWlsYWJsZSBnbG9iYWxseS5cbiAqL1xuX29sX3Byb2pfcHJvajRfLmdldCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gX29sX3Byb2pfcHJvajRfLmNhY2hlXyB8fCB3aW5kb3dbJ3Byb2o0J107XG59O1xuZXhwb3J0IGRlZmF1bHQgX29sX3Byb2pfcHJvajRfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvcHJvai9wcm9qNC5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF9vbF9kb21fIGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCBfb2xfZXh0ZW50XyBmcm9tICcuL2V4dGVudC5qcyc7XG5pbXBvcnQgX29sX21hdGhfIGZyb20gJy4vbWF0aC5qcyc7XG5pbXBvcnQgX29sX3Byb2pfIGZyb20gJy4vcHJvai5qcyc7XG52YXIgX29sX3JlcHJval8gPSB7fTtcblxuXG4vKipcbiAqIENhbGN1bGF0ZXMgaWRlYWwgcmVzb2x1dGlvbiB0byB1c2UgZnJvbSB0aGUgc291cmNlIGluIG9yZGVyIHRvIGFjaGlldmVcbiAqIHBpeGVsIG1hcHBpbmcgYXMgY2xvc2UgYXMgcG9zc2libGUgdG8gMToxIGR1cmluZyByZXByb2plY3Rpb24uXG4gKiBUaGUgcmVzb2x1dGlvbiBpcyBjYWxjdWxhdGVkIHJlZ2FyZGxlc3Mgb2Ygd2hhdCByZXNvbHV0aW9uc1xuICogYXJlIGFjdHVhbGx5IGF2YWlsYWJsZSBpbiB0aGUgZGF0YXNldCAoVGlsZUdyaWQsIEltYWdlLCAuLi4pLlxuICpcbiAqIEBwYXJhbSB7b2wucHJvai5Qcm9qZWN0aW9ufSBzb3VyY2VQcm9qIFNvdXJjZSBwcm9qZWN0aW9uLlxuICogQHBhcmFtIHtvbC5wcm9qLlByb2plY3Rpb259IHRhcmdldFByb2ogVGFyZ2V0IHByb2plY3Rpb24uXG4gKiBAcGFyYW0ge29sLkNvb3JkaW5hdGV9IHRhcmdldENlbnRlciBUYXJnZXQgY2VudGVyLlxuICogQHBhcmFtIHtudW1iZXJ9IHRhcmdldFJlc29sdXRpb24gVGFyZ2V0IHJlc29sdXRpb24uXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBiZXN0IHJlc29sdXRpb24gdG8gdXNlLiBDYW4gYmUgKy1JbmZpbml0eSwgTmFOIG9yIDAuXG4gKi9cbl9vbF9yZXByb2pfLmNhbGN1bGF0ZVNvdXJjZVJlc29sdXRpb24gPSBmdW5jdGlvbihzb3VyY2VQcm9qLCB0YXJnZXRQcm9qLFxuICAgIHRhcmdldENlbnRlciwgdGFyZ2V0UmVzb2x1dGlvbikge1xuXG4gIHZhciBzb3VyY2VDZW50ZXIgPSBfb2xfcHJval8udHJhbnNmb3JtKHRhcmdldENlbnRlciwgdGFyZ2V0UHJvaiwgc291cmNlUHJvaik7XG5cbiAgLy8gY2FsY3VsYXRlIHRoZSBpZGVhbCByZXNvbHV0aW9uIG9mIHRoZSBzb3VyY2UgZGF0YVxuICB2YXIgc291cmNlUmVzb2x1dGlvbiA9XG4gICAgICBfb2xfcHJval8uZ2V0UG9pbnRSZXNvbHV0aW9uKHRhcmdldFByb2osIHRhcmdldFJlc29sdXRpb24sIHRhcmdldENlbnRlcik7XG5cbiAgdmFyIHRhcmdldE1ldGVyc1BlclVuaXQgPSB0YXJnZXRQcm9qLmdldE1ldGVyc1BlclVuaXQoKTtcbiAgaWYgKHRhcmdldE1ldGVyc1BlclVuaXQgIT09IHVuZGVmaW5lZCkge1xuICAgIHNvdXJjZVJlc29sdXRpb24gKj0gdGFyZ2V0TWV0ZXJzUGVyVW5pdDtcbiAgfVxuICB2YXIgc291cmNlTWV0ZXJzUGVyVW5pdCA9IHNvdXJjZVByb2ouZ2V0TWV0ZXJzUGVyVW5pdCgpO1xuICBpZiAoc291cmNlTWV0ZXJzUGVyVW5pdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgc291cmNlUmVzb2x1dGlvbiAvPSBzb3VyY2VNZXRlcnNQZXJVbml0O1xuICB9XG5cbiAgLy8gQmFzZWQgb24gdGhlIHByb2plY3Rpb24gcHJvcGVydGllcywgdGhlIHBvaW50IHJlc29sdXRpb24gYXQgdGhlIHNwZWNpZmllZFxuICAvLyBjb29yZGluYXRlcyBtYXkgYmUgc2xpZ2h0bHkgZGlmZmVyZW50LiBXZSBuZWVkIHRvIHJldmVyc2UtY29tcGVuc2F0ZSB0aGlzXG4gIC8vIGluIG9yZGVyIHRvIGFjaGlldmUgb3B0aW1hbCByZXN1bHRzLlxuXG4gIHZhciBzb3VyY2VFeHRlbnQgPSBzb3VyY2VQcm9qLmdldEV4dGVudCgpO1xuICBpZiAoIXNvdXJjZUV4dGVudCB8fCBfb2xfZXh0ZW50Xy5jb250YWluc0Nvb3JkaW5hdGUoc291cmNlRXh0ZW50LCBzb3VyY2VDZW50ZXIpKSB7XG4gICAgdmFyIGNvbXBlbnNhdGlvbkZhY3RvciA9XG4gICAgICAgIF9vbF9wcm9qXy5nZXRQb2ludFJlc29sdXRpb24oc291cmNlUHJvaiwgc291cmNlUmVzb2x1dGlvbiwgc291cmNlQ2VudGVyKSAvXG4gICAgICAgIHNvdXJjZVJlc29sdXRpb247XG4gICAgaWYgKGlzRmluaXRlKGNvbXBlbnNhdGlvbkZhY3RvcikgJiYgY29tcGVuc2F0aW9uRmFjdG9yID4gMCkge1xuICAgICAgc291cmNlUmVzb2x1dGlvbiAvPSBjb21wZW5zYXRpb25GYWN0b3I7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNvdXJjZVJlc29sdXRpb247XG59O1xuXG5cbi8qKlxuICogRW5sYXJnZSB0aGUgY2xpcHBpbmcgdHJpYW5nbGUgcG9pbnQgYnkgMSBwaXhlbCB0byBlbnN1cmUgdGhlIGVkZ2VzIG92ZXJsYXBcbiAqIGluIG9yZGVyIHRvIG1hc2sgZ2FwcyBjYXVzZWQgYnkgYW50aWFsaWFzaW5nLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBjZW50cm9pZFggQ2VudHJvaWQgb2YgdGhlIHRyaWFuZ2xlICh4IGNvb3JkaW5hdGUgaW4gcGl4ZWxzKS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBjZW50cm9pZFkgQ2VudHJvaWQgb2YgdGhlIHRyaWFuZ2xlICh5IGNvb3JkaW5hdGUgaW4gcGl4ZWxzKS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFggY29vcmRpbmF0ZSBvZiB0aGUgcG9pbnQgKGluIHBpeGVscykuXG4gKiBAcGFyYW0ge251bWJlcn0geSBZIGNvb3JkaW5hdGUgb2YgdGhlIHBvaW50IChpbiBwaXhlbHMpLlxuICogQHJldHVybiB7b2wuQ29vcmRpbmF0ZX0gTmV3IHBvaW50IDEgcHggZmFydGhlciBmcm9tIHRoZSBjZW50cm9pZC5cbiAqIEBwcml2YXRlXG4gKi9cbl9vbF9yZXByb2pfLmVubGFyZ2VDbGlwUG9pbnRfID0gZnVuY3Rpb24oY2VudHJvaWRYLCBjZW50cm9pZFksIHgsIHkpIHtcbiAgdmFyIGRYID0geCAtIGNlbnRyb2lkWCwgZFkgPSB5IC0gY2VudHJvaWRZO1xuICB2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZFggKiBkWCArIGRZICogZFkpO1xuICByZXR1cm4gW01hdGgucm91bmQoeCArIGRYIC8gZGlzdGFuY2UpLCBNYXRoLnJvdW5kKHkgKyBkWSAvIGRpc3RhbmNlKV07XG59O1xuXG5cbi8qKlxuICogUmVuZGVycyB0aGUgc291cmNlIGRhdGEgaW50byBuZXcgY2FudmFzIGJhc2VkIG9uIHRoZSB0cmlhbmd1bGF0aW9uLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBXaWR0aCBvZiB0aGUgY2FudmFzLlxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBIZWlnaHQgb2YgdGhlIGNhbnZhcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBwaXhlbFJhdGlvIFBpeGVsIHJhdGlvLlxuICogQHBhcmFtIHtudW1iZXJ9IHNvdXJjZVJlc29sdXRpb24gU291cmNlIHJlc29sdXRpb24uXG4gKiBAcGFyYW0ge29sLkV4dGVudH0gc291cmNlRXh0ZW50IEV4dGVudCBvZiB0aGUgZGF0YSBzb3VyY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gdGFyZ2V0UmVzb2x1dGlvbiBUYXJnZXQgcmVzb2x1dGlvbi5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSB0YXJnZXRFeHRlbnQgVGFyZ2V0IGV4dGVudC5cbiAqIEBwYXJhbSB7b2wucmVwcm9qLlRyaWFuZ3VsYXRpb259IHRyaWFuZ3VsYXRpb24gQ2FsY3VsYXRlZCB0cmlhbmd1bGF0aW9uLlxuICogQHBhcmFtIHtBcnJheS48e2V4dGVudDogb2wuRXh0ZW50LFxuICogICAgICAgICAgICAgICAgIGltYWdlOiAoSFRNTENhbnZhc0VsZW1lbnR8SW1hZ2V8SFRNTFZpZGVvRWxlbWVudCl9Pn0gc291cmNlc1xuICogICAgICAgICAgICAgQXJyYXkgb2Ygc291cmNlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBndXR0ZXIgR3V0dGVyIG9mIHRoZSBzb3VyY2VzLlxuICogQHBhcmFtIHtib29sZWFuPX0gb3B0X3JlbmRlckVkZ2VzIFJlbmRlciByZXByb2plY3Rpb24gZWRnZXMuXG4gKiBAcmV0dXJuIHtIVE1MQ2FudmFzRWxlbWVudH0gQ2FudmFzIHdpdGggcmVwcm9qZWN0ZWQgZGF0YS5cbiAqL1xuX29sX3JlcHJval8ucmVuZGVyID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCwgcGl4ZWxSYXRpbyxcbiAgICBzb3VyY2VSZXNvbHV0aW9uLCBzb3VyY2VFeHRlbnQsIHRhcmdldFJlc29sdXRpb24sIHRhcmdldEV4dGVudCxcbiAgICB0cmlhbmd1bGF0aW9uLCBzb3VyY2VzLCBndXR0ZXIsIG9wdF9yZW5kZXJFZGdlcykge1xuXG4gIHZhciBjb250ZXh0ID0gX29sX2RvbV8uY3JlYXRlQ2FudmFzQ29udGV4dDJEKE1hdGgucm91bmQocGl4ZWxSYXRpbyAqIHdpZHRoKSxcbiAgICAgIE1hdGgucm91bmQocGl4ZWxSYXRpbyAqIGhlaWdodCkpO1xuXG4gIGlmIChzb3VyY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBjb250ZXh0LmNhbnZhcztcbiAgfVxuXG4gIGNvbnRleHQuc2NhbGUocGl4ZWxSYXRpbywgcGl4ZWxSYXRpbyk7XG5cbiAgdmFyIHNvdXJjZURhdGFFeHRlbnQgPSBfb2xfZXh0ZW50Xy5jcmVhdGVFbXB0eSgpO1xuICBzb3VyY2VzLmZvckVhY2goZnVuY3Rpb24oc3JjLCBpLCBhcnIpIHtcbiAgICBfb2xfZXh0ZW50Xy5leHRlbmQoc291cmNlRGF0YUV4dGVudCwgc3JjLmV4dGVudCk7XG4gIH0pO1xuXG4gIHZhciBjYW52YXNXaWR0aEluVW5pdHMgPSBfb2xfZXh0ZW50Xy5nZXRXaWR0aChzb3VyY2VEYXRhRXh0ZW50KTtcbiAgdmFyIGNhbnZhc0hlaWdodEluVW5pdHMgPSBfb2xfZXh0ZW50Xy5nZXRIZWlnaHQoc291cmNlRGF0YUV4dGVudCk7XG4gIHZhciBzdGl0Y2hDb250ZXh0ID0gX29sX2RvbV8uY3JlYXRlQ2FudmFzQ29udGV4dDJEKFxuICAgICAgTWF0aC5yb3VuZChwaXhlbFJhdGlvICogY2FudmFzV2lkdGhJblVuaXRzIC8gc291cmNlUmVzb2x1dGlvbiksXG4gICAgICBNYXRoLnJvdW5kKHBpeGVsUmF0aW8gKiBjYW52YXNIZWlnaHRJblVuaXRzIC8gc291cmNlUmVzb2x1dGlvbikpO1xuXG4gIHZhciBzdGl0Y2hTY2FsZSA9IHBpeGVsUmF0aW8gLyBzb3VyY2VSZXNvbHV0aW9uO1xuXG4gIHNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbihzcmMsIGksIGFycikge1xuICAgIHZhciB4UG9zID0gc3JjLmV4dGVudFswXSAtIHNvdXJjZURhdGFFeHRlbnRbMF07XG4gICAgdmFyIHlQb3MgPSAtKHNyYy5leHRlbnRbM10gLSBzb3VyY2VEYXRhRXh0ZW50WzNdKTtcbiAgICB2YXIgc3JjV2lkdGggPSBfb2xfZXh0ZW50Xy5nZXRXaWR0aChzcmMuZXh0ZW50KTtcbiAgICB2YXIgc3JjSGVpZ2h0ID0gX29sX2V4dGVudF8uZ2V0SGVpZ2h0KHNyYy5leHRlbnQpO1xuXG4gICAgc3RpdGNoQ29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICAgIHNyYy5pbWFnZSxcbiAgICAgICAgZ3V0dGVyLCBndXR0ZXIsXG4gICAgICAgIHNyYy5pbWFnZS53aWR0aCAtIDIgKiBndXR0ZXIsIHNyYy5pbWFnZS5oZWlnaHQgLSAyICogZ3V0dGVyLFxuICAgICAgICB4UG9zICogc3RpdGNoU2NhbGUsIHlQb3MgKiBzdGl0Y2hTY2FsZSxcbiAgICAgICAgc3JjV2lkdGggKiBzdGl0Y2hTY2FsZSwgc3JjSGVpZ2h0ICogc3RpdGNoU2NhbGUpO1xuICB9KTtcblxuICB2YXIgdGFyZ2V0VG9wTGVmdCA9IF9vbF9leHRlbnRfLmdldFRvcExlZnQodGFyZ2V0RXh0ZW50KTtcblxuICB0cmlhbmd1bGF0aW9uLmdldFRyaWFuZ2xlcygpLmZvckVhY2goZnVuY3Rpb24odHJpYW5nbGUsIGksIGFycikge1xuICAgIC8qIENhbGN1bGF0ZSBhZmZpbmUgdHJhbnNmb3JtIChzcmMgLT4gZHN0KVxuICAgICAqIFJlc3VsdGluZyBtYXRyaXggY2FuIGJlIHVzZWQgdG8gdHJhbnNmb3JtIGNvb3JkaW5hdGVcbiAgICAgKiBmcm9tIGBzb3VyY2VQcm9qZWN0aW9uYCB0byBkZXN0aW5hdGlvbiBwaXhlbHMuXG4gICAgICpcbiAgICAgKiBUbyBvcHRpbWl6ZSBudW1iZXIgb2YgY29udGV4dCBjYWxscyBhbmQgaW5jcmVhc2UgbnVtZXJpY2FsIHN0YWJpbGl0eSxcbiAgICAgKiB3ZSBhbHNvIGRvIHRoZSBmb2xsb3dpbmcgb3BlcmF0aW9uczpcbiAgICAgKiB0cmFucygtdG9wTGVmdEV4dGVudENvcm5lciksIHNjYWxlKDEgLyB0YXJnZXRSZXNvbHV0aW9uKSwgc2NhbGUoMSwgLTEpXG4gICAgICogaGVyZSBiZWZvcmUgc29sdmluZyB0aGUgbGluZWFyIHN5c3RlbSBzbyBbdWksIHZpXSBhcmUgcGl4ZWwgY29vcmRpbmF0ZXMuXG4gICAgICpcbiAgICAgKiBTcmMgcG9pbnRzOiB4aSwgeWlcbiAgICAgKiBEc3QgcG9pbnRzOiB1aSwgdmlcbiAgICAgKiBBZmZpbmUgY29lZmZpY2llbnRzOiBhaWpcbiAgICAgKlxuICAgICAqIHwgeDAgeTAgMSAgMCAgMCAwIHwgICB8YTAwfCAgIHx1MHxcbiAgICAgKiB8IHgxIHkxIDEgIDAgIDAgMCB8ICAgfGEwMXwgICB8dTF8XG4gICAgICogfCB4MiB5MiAxICAwICAwIDAgfCB4IHxhMDJ8ID0gfHUyfFxuICAgICAqIHwgIDAgIDAgMCB4MCB5MCAxIHwgICB8YTEwfCAgIHx2MHxcbiAgICAgKiB8ICAwICAwIDAgeDEgeTEgMSB8ICAgfGExMXwgICB8djF8XG4gICAgICogfCAgMCAgMCAwIHgyIHkyIDEgfCAgIHxhMTJ8ICAgfHYyfFxuICAgICAqL1xuICAgIHZhciBzb3VyY2UgPSB0cmlhbmdsZS5zb3VyY2UsIHRhcmdldCA9IHRyaWFuZ2xlLnRhcmdldDtcbiAgICB2YXIgeDAgPSBzb3VyY2VbMF1bMF0sIHkwID0gc291cmNlWzBdWzFdLFxuICAgICAgICB4MSA9IHNvdXJjZVsxXVswXSwgeTEgPSBzb3VyY2VbMV1bMV0sXG4gICAgICAgIHgyID0gc291cmNlWzJdWzBdLCB5MiA9IHNvdXJjZVsyXVsxXTtcbiAgICB2YXIgdTAgPSAodGFyZ2V0WzBdWzBdIC0gdGFyZ2V0VG9wTGVmdFswXSkgLyB0YXJnZXRSZXNvbHV0aW9uLFxuICAgICAgICB2MCA9IC0odGFyZ2V0WzBdWzFdIC0gdGFyZ2V0VG9wTGVmdFsxXSkgLyB0YXJnZXRSZXNvbHV0aW9uO1xuICAgIHZhciB1MSA9ICh0YXJnZXRbMV1bMF0gLSB0YXJnZXRUb3BMZWZ0WzBdKSAvIHRhcmdldFJlc29sdXRpb24sXG4gICAgICAgIHYxID0gLSh0YXJnZXRbMV1bMV0gLSB0YXJnZXRUb3BMZWZ0WzFdKSAvIHRhcmdldFJlc29sdXRpb247XG4gICAgdmFyIHUyID0gKHRhcmdldFsyXVswXSAtIHRhcmdldFRvcExlZnRbMF0pIC8gdGFyZ2V0UmVzb2x1dGlvbixcbiAgICAgICAgdjIgPSAtKHRhcmdldFsyXVsxXSAtIHRhcmdldFRvcExlZnRbMV0pIC8gdGFyZ2V0UmVzb2x1dGlvbjtcblxuICAgIC8vIFNoaWZ0IGFsbCB0aGUgc291cmNlIHBvaW50cyB0byBpbXByb3ZlIG51bWVyaWNhbCBzdGFiaWxpdHlcbiAgICAvLyBvZiBhbGwgdGhlIHN1YnNlcXVlbnQgY2FsY3VsYXRpb25zLiBUaGUgW3gwLCB5MF0gaXMgdXNlZCBoZXJlLlxuICAgIC8vIFRoaXMgaXMgYWxzbyB1c2VkIHRvIHNpbXBsaWZ5IHRoZSBsaW5lYXIgc3lzdGVtLlxuICAgIHZhciBzb3VyY2VOdW1lcmljYWxTaGlmdFggPSB4MCwgc291cmNlTnVtZXJpY2FsU2hpZnRZID0geTA7XG4gICAgeDAgPSAwO1xuICAgIHkwID0gMDtcbiAgICB4MSAtPSBzb3VyY2VOdW1lcmljYWxTaGlmdFg7XG4gICAgeTEgLT0gc291cmNlTnVtZXJpY2FsU2hpZnRZO1xuICAgIHgyIC09IHNvdXJjZU51bWVyaWNhbFNoaWZ0WDtcbiAgICB5MiAtPSBzb3VyY2VOdW1lcmljYWxTaGlmdFk7XG5cbiAgICB2YXIgYXVnbWVudGVkTWF0cml4ID0gW1xuICAgICAgW3gxLCB5MSwgMCwgMCwgdTEgLSB1MF0sXG4gICAgICBbeDIsIHkyLCAwLCAwLCB1MiAtIHUwXSxcbiAgICAgIFswLCAwLCB4MSwgeTEsIHYxIC0gdjBdLFxuICAgICAgWzAsIDAsIHgyLCB5MiwgdjIgLSB2MF1cbiAgICBdO1xuICAgIHZhciBhZmZpbmVDb2VmcyA9IF9vbF9tYXRoXy5zb2x2ZUxpbmVhclN5c3RlbShhdWdtZW50ZWRNYXRyaXgpO1xuICAgIGlmICghYWZmaW5lQ29lZnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIHZhciBjZW50cm9pZFggPSAodTAgKyB1MSArIHUyKSAvIDMsIGNlbnRyb2lkWSA9ICh2MCArIHYxICsgdjIpIC8gMztcbiAgICB2YXIgcDAgPSBfb2xfcmVwcm9qXy5lbmxhcmdlQ2xpcFBvaW50XyhjZW50cm9pZFgsIGNlbnRyb2lkWSwgdTAsIHYwKTtcbiAgICB2YXIgcDEgPSBfb2xfcmVwcm9qXy5lbmxhcmdlQ2xpcFBvaW50XyhjZW50cm9pZFgsIGNlbnRyb2lkWSwgdTEsIHYxKTtcbiAgICB2YXIgcDIgPSBfb2xfcmVwcm9qXy5lbmxhcmdlQ2xpcFBvaW50XyhjZW50cm9pZFgsIGNlbnRyb2lkWSwgdTIsIHYyKTtcblxuICAgIGNvbnRleHQubW92ZVRvKHAxWzBdLCBwMVsxXSk7XG4gICAgY29udGV4dC5saW5lVG8ocDBbMF0sIHAwWzFdKTtcbiAgICBjb250ZXh0LmxpbmVUbyhwMlswXSwgcDJbMV0pO1xuICAgIGNvbnRleHQuY2xpcCgpO1xuXG4gICAgY29udGV4dC50cmFuc2Zvcm0oXG4gICAgICAgIGFmZmluZUNvZWZzWzBdLCBhZmZpbmVDb2Vmc1syXSwgYWZmaW5lQ29lZnNbMV0sIGFmZmluZUNvZWZzWzNdLCB1MCwgdjApO1xuXG4gICAgY29udGV4dC50cmFuc2xhdGUoc291cmNlRGF0YUV4dGVudFswXSAtIHNvdXJjZU51bWVyaWNhbFNoaWZ0WCxcbiAgICAgICAgc291cmNlRGF0YUV4dGVudFszXSAtIHNvdXJjZU51bWVyaWNhbFNoaWZ0WSk7XG5cbiAgICBjb250ZXh0LnNjYWxlKHNvdXJjZVJlc29sdXRpb24gLyBwaXhlbFJhdGlvLFxuICAgICAgICAtc291cmNlUmVzb2x1dGlvbiAvIHBpeGVsUmF0aW8pO1xuXG4gICAgY29udGV4dC5kcmF3SW1hZ2Uoc3RpdGNoQ29udGV4dC5jYW52YXMsIDAsIDApO1xuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9KTtcblxuICBpZiAob3B0X3JlbmRlckVkZ2VzKSB7XG4gICAgY29udGV4dC5zYXZlKCk7XG5cbiAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJ2JsYWNrJztcbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG5cbiAgICB0cmlhbmd1bGF0aW9uLmdldFRyaWFuZ2xlcygpLmZvckVhY2goZnVuY3Rpb24odHJpYW5nbGUsIGksIGFycikge1xuICAgICAgdmFyIHRhcmdldCA9IHRyaWFuZ2xlLnRhcmdldDtcbiAgICAgIHZhciB1MCA9ICh0YXJnZXRbMF1bMF0gLSB0YXJnZXRUb3BMZWZ0WzBdKSAvIHRhcmdldFJlc29sdXRpb24sXG4gICAgICAgICAgdjAgPSAtKHRhcmdldFswXVsxXSAtIHRhcmdldFRvcExlZnRbMV0pIC8gdGFyZ2V0UmVzb2x1dGlvbjtcbiAgICAgIHZhciB1MSA9ICh0YXJnZXRbMV1bMF0gLSB0YXJnZXRUb3BMZWZ0WzBdKSAvIHRhcmdldFJlc29sdXRpb24sXG4gICAgICAgICAgdjEgPSAtKHRhcmdldFsxXVsxXSAtIHRhcmdldFRvcExlZnRbMV0pIC8gdGFyZ2V0UmVzb2x1dGlvbjtcbiAgICAgIHZhciB1MiA9ICh0YXJnZXRbMl1bMF0gLSB0YXJnZXRUb3BMZWZ0WzBdKSAvIHRhcmdldFJlc29sdXRpb24sXG4gICAgICAgICAgdjIgPSAtKHRhcmdldFsyXVsxXSAtIHRhcmdldFRvcExlZnRbMV0pIC8gdGFyZ2V0UmVzb2x1dGlvbjtcblxuICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgIGNvbnRleHQubW92ZVRvKHUxLCB2MSk7XG4gICAgICBjb250ZXh0LmxpbmVUbyh1MCwgdjApO1xuICAgICAgY29udGV4dC5saW5lVG8odTIsIHYyKTtcbiAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgIH0pO1xuXG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQuY2FudmFzO1xufTtcbmV4cG9ydCBkZWZhdWx0IF9vbF9yZXByb2pfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvcmVwcm9qLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX29sX2RvbV8gPSB7fTtcblxuXG4vKipcbiAqIENyZWF0ZSBhbiBodG1sIGNhbnZhcyBlbGVtZW50IGFuZCByZXR1cm5zIGl0cyAyZCBjb250ZXh0LlxuICogQHBhcmFtIHtudW1iZXI9fSBvcHRfd2lkdGggQ2FudmFzIHdpZHRoLlxuICogQHBhcmFtIHtudW1iZXI9fSBvcHRfaGVpZ2h0IENhbnZhcyBoZWlnaHQuXG4gKiBAcmV0dXJuIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IFRoZSBjb250ZXh0LlxuICovXG5fb2xfZG9tXy5jcmVhdGVDYW52YXNDb250ZXh0MkQgPSBmdW5jdGlvbihvcHRfd2lkdGgsIG9wdF9oZWlnaHQpIHtcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0NBTlZBUycpO1xuICBpZiAob3B0X3dpZHRoKSB7XG4gICAgY2FudmFzLndpZHRoID0gb3B0X3dpZHRoO1xuICB9XG4gIGlmIChvcHRfaGVpZ2h0KSB7XG4gICAgY2FudmFzLmhlaWdodCA9IG9wdF9oZWlnaHQ7XG4gIH1cbiAgcmV0dXJuIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgY3VycmVudCBjb21wdXRlZCB3aWR0aCBmb3IgdGhlIGdpdmVuIGVsZW1lbnQgaW5jbHVkaW5nIG1hcmdpbixcbiAqIHBhZGRpbmcgYW5kIGJvcmRlci5cbiAqIEVxdWl2YWxlbnQgdG8galF1ZXJ5J3MgYCQoZWwpLm91dGVyV2lkdGgodHJ1ZSlgLlxuICogQHBhcmFtIHshRWxlbWVudH0gZWxlbWVudCBFbGVtZW50LlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgd2lkdGguXG4gKi9cbl9vbF9kb21fLm91dGVyV2lkdGggPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gIHZhciB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gIHdpZHRoICs9IHBhcnNlSW50KHN0eWxlLm1hcmdpbkxlZnQsIDEwKSArIHBhcnNlSW50KHN0eWxlLm1hcmdpblJpZ2h0LCAxMCk7XG5cbiAgcmV0dXJuIHdpZHRoO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgY3VycmVudCBjb21wdXRlZCBoZWlnaHQgZm9yIHRoZSBnaXZlbiBlbGVtZW50IGluY2x1ZGluZyBtYXJnaW4sXG4gKiBwYWRkaW5nIGFuZCBib3JkZXIuXG4gKiBFcXVpdmFsZW50IHRvIGpRdWVyeSdzIGAkKGVsKS5vdXRlckhlaWdodCh0cnVlKWAuXG4gKiBAcGFyYW0geyFFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBoZWlnaHQuXG4gKi9cbl9vbF9kb21fLm91dGVySGVpZ2h0ID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICB2YXIgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gIGhlaWdodCArPSBwYXJzZUludChzdHlsZS5tYXJnaW5Ub3AsIDEwKSArIHBhcnNlSW50KHN0eWxlLm1hcmdpbkJvdHRvbSwgMTApO1xuXG4gIHJldHVybiBoZWlnaHQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZX0gbmV3Tm9kZSBOb2RlIHRvIHJlcGxhY2Ugb2xkIG5vZGVcbiAqIEBwYXJhbSB7Tm9kZX0gb2xkTm9kZSBUaGUgbm9kZSB0byBiZSByZXBsYWNlZFxuICovXG5fb2xfZG9tXy5yZXBsYWNlTm9kZSA9IGZ1bmN0aW9uKG5ld05vZGUsIG9sZE5vZGUpIHtcbiAgdmFyIHBhcmVudCA9IG9sZE5vZGUucGFyZW50Tm9kZTtcbiAgaWYgKHBhcmVudCkge1xuICAgIHBhcmVudC5yZXBsYWNlQ2hpbGQobmV3Tm9kZSwgb2xkTm9kZSk7XG4gIH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlfSBub2RlIFRoZSBub2RlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtOb2RlfSBUaGUgbm9kZSB0aGF0IHdhcyByZW1vdmVkIG9yIG51bGwuXG4gKi9cbl9vbF9kb21fLnJlbW92ZU5vZGUgPSBmdW5jdGlvbihub2RlKSB7XG4gIHJldHVybiBub2RlICYmIG5vZGUucGFyZW50Tm9kZSA/IG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKSA6IG51bGw7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBUaGUgbm9kZSB0byByZW1vdmUgdGhlIGNoaWxkcmVuIGZyb20uXG4gKi9cbl9vbF9kb21fLnJlbW92ZUNoaWxkcmVuID0gZnVuY3Rpb24obm9kZSkge1xuICB3aGlsZSAobm9kZS5sYXN0Q2hpbGQpIHtcbiAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUubGFzdENoaWxkKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IF9vbF9kb21fO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvZG9tLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgX29sXyBmcm9tICcuLi9pbmRleC5qcyc7XG5pbXBvcnQgX29sX2V4dGVudF8gZnJvbSAnLi4vZXh0ZW50LmpzJztcbmltcG9ydCBfb2xfbWF0aF8gZnJvbSAnLi4vbWF0aC5qcyc7XG5pbXBvcnQgX29sX3Byb2pfIGZyb20gJy4uL3Byb2ouanMnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIENsYXNzIGNvbnRhaW5pbmcgdHJpYW5ndWxhdGlvbiBvZiB0aGUgZ2l2ZW4gdGFyZ2V0IGV4dGVudC5cbiAqIFVzZWQgZm9yIGRldGVybWluaW5nIHNvdXJjZSBkYXRhIGFuZCB0aGUgcmVwcm9qZWN0aW9uIGl0c2VsZi5cbiAqXG4gKiBAcGFyYW0ge29sLnByb2ouUHJvamVjdGlvbn0gc291cmNlUHJvaiBTb3VyY2UgcHJvamVjdGlvbi5cbiAqIEBwYXJhbSB7b2wucHJvai5Qcm9qZWN0aW9ufSB0YXJnZXRQcm9qIFRhcmdldCBwcm9qZWN0aW9uLlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IHRhcmdldEV4dGVudCBUYXJnZXQgZXh0ZW50IHRvIHRyaWFuZ3VsYXRlLlxuICogQHBhcmFtIHtvbC5FeHRlbnR9IG1heFNvdXJjZUV4dGVudCBNYXhpbWFsIHNvdXJjZSBleHRlbnQgdGhhdCBjYW4gYmUgdXNlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlcnJvclRocmVzaG9sZCBBY2NlcHRhYmxlIGVycm9yIChpbiBzb3VyY2UgdW5pdHMpLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBfb2xfcmVwcm9qX1RyaWFuZ3VsYXRpb25fID0gZnVuY3Rpb24oc291cmNlUHJvaiwgdGFyZ2V0UHJvaiwgdGFyZ2V0RXh0ZW50LFxuICAgIG1heFNvdXJjZUV4dGVudCwgZXJyb3JUaHJlc2hvbGQpIHtcblxuICAvKipcbiAgICogQHR5cGUge29sLnByb2ouUHJvamVjdGlvbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHRoaXMuc291cmNlUHJval8gPSBzb3VyY2VQcm9qO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7b2wucHJvai5Qcm9qZWN0aW9ufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdGhpcy50YXJnZXRQcm9qXyA9IHRhcmdldFByb2o7XG5cbiAgLyoqIEB0eXBlIHshT2JqZWN0LjxzdHJpbmcsIG9sLkNvb3JkaW5hdGU+fSAqL1xuICB2YXIgdHJhbnNmb3JtSW52Q2FjaGUgPSB7fTtcbiAgdmFyIHRyYW5zZm9ybUludiA9IF9vbF9wcm9qXy5nZXRUcmFuc2Zvcm0odGhpcy50YXJnZXRQcm9qXywgdGhpcy5zb3VyY2VQcm9qXyk7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7b2wuQ29vcmRpbmF0ZX0gYyBBIGNvb3JkaW5hdGUuXG4gICAqIEByZXR1cm4ge29sLkNvb3JkaW5hdGV9IFRyYW5zZm9ybWVkIGNvb3JkaW5hdGUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB0aGlzLnRyYW5zZm9ybUludl8gPSBmdW5jdGlvbihjKSB7XG4gICAgdmFyIGtleSA9IGNbMF0gKyAnLycgKyBjWzFdO1xuICAgIGlmICghdHJhbnNmb3JtSW52Q2FjaGVba2V5XSkge1xuICAgICAgdHJhbnNmb3JtSW52Q2FjaGVba2V5XSA9IHRyYW5zZm9ybUludihjKTtcbiAgICB9XG4gICAgcmV0dXJuIHRyYW5zZm9ybUludkNhY2hlW2tleV07XG4gIH07XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtvbC5FeHRlbnR9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB0aGlzLm1heFNvdXJjZUV4dGVudF8gPSBtYXhTb3VyY2VFeHRlbnQ7XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB0aGlzLmVycm9yVGhyZXNob2xkU3F1YXJlZF8gPSBlcnJvclRocmVzaG9sZCAqIGVycm9yVGhyZXNob2xkO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7QXJyYXkuPG9sLlJlcHJvalRyaWFuZ2xlPn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHRoaXMudHJpYW5nbGVzXyA9IFtdO1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgdHJpYW5ndWxhdGlvbiBjcm9zc2VzIGVkZ2Ugb2YgdGhlIHNvdXJjZSBwcm9qZWN0aW9uLlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHRoaXMud3JhcHNYSW5Tb3VyY2VfID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdGhpcy5jYW5XcmFwWEluU291cmNlXyA9IHRoaXMuc291cmNlUHJval8uY2FuV3JhcFgoKSAmJlxuICAgICAgISFtYXhTb3VyY2VFeHRlbnQgJiZcbiAgICAgICEhdGhpcy5zb3VyY2VQcm9qXy5nZXRFeHRlbnQoKSAmJlxuICAgICAgKF9vbF9leHRlbnRfLmdldFdpZHRoKG1heFNvdXJjZUV4dGVudCkgPT1cbiAgICAgICBfb2xfZXh0ZW50Xy5nZXRXaWR0aCh0aGlzLnNvdXJjZVByb2pfLmdldEV4dGVudCgpKSk7XG5cbiAgLyoqXG4gICAqIEB0eXBlIHs/bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdGhpcy5zb3VyY2VXb3JsZFdpZHRoXyA9IHRoaXMuc291cmNlUHJval8uZ2V0RXh0ZW50KCkgP1xuICAgIF9vbF9leHRlbnRfLmdldFdpZHRoKHRoaXMuc291cmNlUHJval8uZ2V0RXh0ZW50KCkpIDogbnVsbDtcblxuICAvKipcbiAgICogQHR5cGUgez9udW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB0aGlzLnRhcmdldFdvcmxkV2lkdGhfID0gdGhpcy50YXJnZXRQcm9qXy5nZXRFeHRlbnQoKSA/XG4gICAgX29sX2V4dGVudF8uZ2V0V2lkdGgodGhpcy50YXJnZXRQcm9qXy5nZXRFeHRlbnQoKSkgOiBudWxsO1xuXG4gIHZhciBkZXN0aW5hdGlvblRvcExlZnQgPSBfb2xfZXh0ZW50Xy5nZXRUb3BMZWZ0KHRhcmdldEV4dGVudCk7XG4gIHZhciBkZXN0aW5hdGlvblRvcFJpZ2h0ID0gX29sX2V4dGVudF8uZ2V0VG9wUmlnaHQodGFyZ2V0RXh0ZW50KTtcbiAgdmFyIGRlc3RpbmF0aW9uQm90dG9tUmlnaHQgPSBfb2xfZXh0ZW50Xy5nZXRCb3R0b21SaWdodCh0YXJnZXRFeHRlbnQpO1xuICB2YXIgZGVzdGluYXRpb25Cb3R0b21MZWZ0ID0gX29sX2V4dGVudF8uZ2V0Qm90dG9tTGVmdCh0YXJnZXRFeHRlbnQpO1xuICB2YXIgc291cmNlVG9wTGVmdCA9IHRoaXMudHJhbnNmb3JtSW52XyhkZXN0aW5hdGlvblRvcExlZnQpO1xuICB2YXIgc291cmNlVG9wUmlnaHQgPSB0aGlzLnRyYW5zZm9ybUludl8oZGVzdGluYXRpb25Ub3BSaWdodCk7XG4gIHZhciBzb3VyY2VCb3R0b21SaWdodCA9IHRoaXMudHJhbnNmb3JtSW52XyhkZXN0aW5hdGlvbkJvdHRvbVJpZ2h0KTtcbiAgdmFyIHNvdXJjZUJvdHRvbUxlZnQgPSB0aGlzLnRyYW5zZm9ybUludl8oZGVzdGluYXRpb25Cb3R0b21MZWZ0KTtcblxuICB0aGlzLmFkZFF1YWRfKFxuICAgICAgZGVzdGluYXRpb25Ub3BMZWZ0LCBkZXN0aW5hdGlvblRvcFJpZ2h0LFxuICAgICAgZGVzdGluYXRpb25Cb3R0b21SaWdodCwgZGVzdGluYXRpb25Cb3R0b21MZWZ0LFxuICAgICAgc291cmNlVG9wTGVmdCwgc291cmNlVG9wUmlnaHQsIHNvdXJjZUJvdHRvbVJpZ2h0LCBzb3VyY2VCb3R0b21MZWZ0LFxuICAgICAgX29sXy5SQVNURVJfUkVQUk9KRUNUSU9OX01BWF9TVUJESVZJU0lPTik7XG5cbiAgaWYgKHRoaXMud3JhcHNYSW5Tb3VyY2VfKSB7XG4gICAgdmFyIGxlZnRCb3VuZCA9IEluZmluaXR5O1xuICAgIHRoaXMudHJpYW5nbGVzXy5mb3JFYWNoKGZ1bmN0aW9uKHRyaWFuZ2xlLCBpLCBhcnIpIHtcbiAgICAgIGxlZnRCb3VuZCA9IE1hdGgubWluKGxlZnRCb3VuZCxcbiAgICAgICAgICB0cmlhbmdsZS5zb3VyY2VbMF1bMF0sIHRyaWFuZ2xlLnNvdXJjZVsxXVswXSwgdHJpYW5nbGUuc291cmNlWzJdWzBdKTtcbiAgICB9KTtcblxuICAgIC8vIFNoaWZ0IHRyaWFuZ2xlcyB0byBiZSBhcyBjbG9zZSB0byBgbGVmdEJvdW5kYCBhcyBwb3NzaWJsZVxuICAgIC8vIChpZiB0aGUgZGlzdGFuY2UgaXMgbW9yZSB0aGFuIGB3b3JsZFdpZHRoIC8gMmAgaXQgY2FuIGJlIGNsb3Nlci5cbiAgICB0aGlzLnRyaWFuZ2xlc18uZm9yRWFjaChmdW5jdGlvbih0cmlhbmdsZSkge1xuICAgICAgaWYgKE1hdGgubWF4KHRyaWFuZ2xlLnNvdXJjZVswXVswXSwgdHJpYW5nbGUuc291cmNlWzFdWzBdLFxuICAgICAgICAgIHRyaWFuZ2xlLnNvdXJjZVsyXVswXSkgLSBsZWZ0Qm91bmQgPiB0aGlzLnNvdXJjZVdvcmxkV2lkdGhfIC8gMikge1xuICAgICAgICB2YXIgbmV3VHJpYW5nbGUgPSBbW3RyaWFuZ2xlLnNvdXJjZVswXVswXSwgdHJpYW5nbGUuc291cmNlWzBdWzFdXSxcbiAgICAgICAgICBbdHJpYW5nbGUuc291cmNlWzFdWzBdLCB0cmlhbmdsZS5zb3VyY2VbMV1bMV1dLFxuICAgICAgICAgIFt0cmlhbmdsZS5zb3VyY2VbMl1bMF0sIHRyaWFuZ2xlLnNvdXJjZVsyXVsxXV1dO1xuICAgICAgICBpZiAoKG5ld1RyaWFuZ2xlWzBdWzBdIC0gbGVmdEJvdW5kKSA+IHRoaXMuc291cmNlV29ybGRXaWR0aF8gLyAyKSB7XG4gICAgICAgICAgbmV3VHJpYW5nbGVbMF1bMF0gLT0gdGhpcy5zb3VyY2VXb3JsZFdpZHRoXztcbiAgICAgICAgfVxuICAgICAgICBpZiAoKG5ld1RyaWFuZ2xlWzFdWzBdIC0gbGVmdEJvdW5kKSA+IHRoaXMuc291cmNlV29ybGRXaWR0aF8gLyAyKSB7XG4gICAgICAgICAgbmV3VHJpYW5nbGVbMV1bMF0gLT0gdGhpcy5zb3VyY2VXb3JsZFdpZHRoXztcbiAgICAgICAgfVxuICAgICAgICBpZiAoKG5ld1RyaWFuZ2xlWzJdWzBdIC0gbGVmdEJvdW5kKSA+IHRoaXMuc291cmNlV29ybGRXaWR0aF8gLyAyKSB7XG4gICAgICAgICAgbmV3VHJpYW5nbGVbMl1bMF0gLT0gdGhpcy5zb3VyY2VXb3JsZFdpZHRoXztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJhcmVseSAoaWYgdGhlIGV4dGVudCBjb250YWlucyBib3RoIHRoZSBkYXRlbGluZSBhbmQgcHJpbWUgbWVyaWRpYW4pXG4gICAgICAgIC8vIHRoZSBzaGlmdCBjYW4gaW4gdHVybiBicmVhayBzb21lIHRyaWFuZ2xlcy5cbiAgICAgICAgLy8gRGV0ZWN0IHRoaXMgaGVyZSBhbmQgZG9uJ3Qgc2hpZnQgaW4gc3VjaCBjYXNlcy5cbiAgICAgICAgdmFyIG1pblggPSBNYXRoLm1pbihcbiAgICAgICAgICAgIG5ld1RyaWFuZ2xlWzBdWzBdLCBuZXdUcmlhbmdsZVsxXVswXSwgbmV3VHJpYW5nbGVbMl1bMF0pO1xuICAgICAgICB2YXIgbWF4WCA9IE1hdGgubWF4KFxuICAgICAgICAgICAgbmV3VHJpYW5nbGVbMF1bMF0sIG5ld1RyaWFuZ2xlWzFdWzBdLCBuZXdUcmlhbmdsZVsyXVswXSk7XG4gICAgICAgIGlmICgobWF4WCAtIG1pblgpIDwgdGhpcy5zb3VyY2VXb3JsZFdpZHRoXyAvIDIpIHtcbiAgICAgICAgICB0cmlhbmdsZS5zb3VyY2UgPSBuZXdUcmlhbmdsZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9XG5cbiAgdHJhbnNmb3JtSW52Q2FjaGUgPSB7fTtcbn07XG5cblxuLyoqXG4gKiBBZGRzIHRyaWFuZ2xlIHRvIHRoZSB0cmlhbmd1bGF0aW9uLlxuICogQHBhcmFtIHtvbC5Db29yZGluYXRlfSBhIFRoZSB0YXJnZXQgYSBjb29yZGluYXRlLlxuICogQHBhcmFtIHtvbC5Db29yZGluYXRlfSBiIFRoZSB0YXJnZXQgYiBjb29yZGluYXRlLlxuICogQHBhcmFtIHtvbC5Db29yZGluYXRlfSBjIFRoZSB0YXJnZXQgYyBjb29yZGluYXRlLlxuICogQHBhcmFtIHtvbC5Db29yZGluYXRlfSBhU3JjIFRoZSBzb3VyY2UgYSBjb29yZGluYXRlLlxuICogQHBhcmFtIHtvbC5Db29yZGluYXRlfSBiU3JjIFRoZSBzb3VyY2UgYiBjb29yZGluYXRlLlxuICogQHBhcmFtIHtvbC5Db29yZGluYXRlfSBjU3JjIFRoZSBzb3VyY2UgYyBjb29yZGluYXRlLlxuICogQHByaXZhdGVcbiAqL1xuX29sX3JlcHJval9Ucmlhbmd1bGF0aW9uXy5wcm90b3R5cGUuYWRkVHJpYW5nbGVfID0gZnVuY3Rpb24oYSwgYiwgYyxcbiAgICBhU3JjLCBiU3JjLCBjU3JjKSB7XG4gIHRoaXMudHJpYW5nbGVzXy5wdXNoKHtcbiAgICBzb3VyY2U6IFthU3JjLCBiU3JjLCBjU3JjXSxcbiAgICB0YXJnZXQ6IFthLCBiLCBjXVxuICB9KTtcbn07XG5cblxuLyoqXG4gKiBBZGRzIHF1YWQgKHBvaW50cyBpbiBjbG9jay13aXNlIG9yZGVyKSB0byB0aGUgdHJpYW5ndWxhdGlvblxuICogKGFuZCByZXByb2plY3RzIHRoZSB2ZXJ0aWNlcykgaWYgdmFsaWQuXG4gKiBQZXJmb3JtcyBxdWFkIHN1YmRpdmlzaW9uIGlmIG5lZWRlZCB0byBpbmNyZWFzZSBwcmVjaXNpb24uXG4gKlxuICogQHBhcmFtIHtvbC5Db29yZGluYXRlfSBhIFRoZSB0YXJnZXQgYSBjb29yZGluYXRlLlxuICogQHBhcmFtIHtvbC5Db29yZGluYXRlfSBiIFRoZSB0YXJnZXQgYiBjb29yZGluYXRlLlxuICogQHBhcmFtIHtvbC5Db29yZGluYXRlfSBjIFRoZSB0YXJnZXQgYyBjb29yZGluYXRlLlxuICogQHBhcmFtIHtvbC5Db29yZGluYXRlfSBkIFRoZSB0YXJnZXQgZCBjb29yZGluYXRlLlxuICogQHBhcmFtIHtvbC5Db29yZGluYXRlfSBhU3JjIFRoZSBzb3VyY2UgYSBjb29yZGluYXRlLlxuICogQHBhcmFtIHtvbC5Db29yZGluYXRlfSBiU3JjIFRoZSBzb3VyY2UgYiBjb29yZGluYXRlLlxuICogQHBhcmFtIHtvbC5Db29yZGluYXRlfSBjU3JjIFRoZSBzb3VyY2UgYyBjb29yZGluYXRlLlxuICogQHBhcmFtIHtvbC5Db29yZGluYXRlfSBkU3JjIFRoZSBzb3VyY2UgZCBjb29yZGluYXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heFN1YmRpdmlzaW9uIE1heGltYWwgYWxsb3dlZCBzdWJkaXZpc2lvbiBvZiB0aGUgcXVhZC5cbiAqIEBwcml2YXRlXG4gKi9cbl9vbF9yZXByb2pfVHJpYW5ndWxhdGlvbl8ucHJvdG90eXBlLmFkZFF1YWRfID0gZnVuY3Rpb24oYSwgYiwgYywgZCxcbiAgICBhU3JjLCBiU3JjLCBjU3JjLCBkU3JjLCBtYXhTdWJkaXZpc2lvbikge1xuXG4gIHZhciBzb3VyY2VRdWFkRXh0ZW50ID0gX29sX2V4dGVudF8uYm91bmRpbmdFeHRlbnQoW2FTcmMsIGJTcmMsIGNTcmMsIGRTcmNdKTtcbiAgdmFyIHNvdXJjZUNvdmVyYWdlWCA9IHRoaXMuc291cmNlV29ybGRXaWR0aF8gP1xuICAgIF9vbF9leHRlbnRfLmdldFdpZHRoKHNvdXJjZVF1YWRFeHRlbnQpIC8gdGhpcy5zb3VyY2VXb3JsZFdpZHRoXyA6IG51bGw7XG4gIHZhciBzb3VyY2VXb3JsZFdpZHRoID0gLyoqIEB0eXBlIHtudW1iZXJ9ICovICh0aGlzLnNvdXJjZVdvcmxkV2lkdGhfKTtcblxuICAvLyB3aGVuIHRoZSBxdWFkIGlzIHdyYXBwZWQgaW4gdGhlIHNvdXJjZSBwcm9qZWN0aW9uXG4gIC8vIGl0IGNvdmVycyBtb3N0IG9mIHRoZSBwcm9qZWN0aW9uIGV4dGVudCwgYnV0IG5vdCBmdWxseVxuICB2YXIgd3JhcHNYID0gdGhpcy5zb3VyY2VQcm9qXy5jYW5XcmFwWCgpICYmXG4gICAgICAgICAgICAgICBzb3VyY2VDb3ZlcmFnZVggPiAwLjUgJiYgc291cmNlQ292ZXJhZ2VYIDwgMTtcblxuICB2YXIgbmVlZHNTdWJkaXZpc2lvbiA9IGZhbHNlO1xuXG4gIGlmIChtYXhTdWJkaXZpc2lvbiA+IDApIHtcbiAgICBpZiAodGhpcy50YXJnZXRQcm9qXy5pc0dsb2JhbCgpICYmIHRoaXMudGFyZ2V0V29ybGRXaWR0aF8pIHtcbiAgICAgIHZhciB0YXJnZXRRdWFkRXh0ZW50ID0gX29sX2V4dGVudF8uYm91bmRpbmdFeHRlbnQoW2EsIGIsIGMsIGRdKTtcbiAgICAgIHZhciB0YXJnZXRDb3ZlcmFnZVggPVxuICAgICAgICAgIF9vbF9leHRlbnRfLmdldFdpZHRoKHRhcmdldFF1YWRFeHRlbnQpIC8gdGhpcy50YXJnZXRXb3JsZFdpZHRoXztcbiAgICAgIG5lZWRzU3ViZGl2aXNpb24gfD1cbiAgICAgICAgICB0YXJnZXRDb3ZlcmFnZVggPiBfb2xfLlJBU1RFUl9SRVBST0pFQ1RJT05fTUFYX1RSSUFOR0xFX1dJRFRIO1xuICAgIH1cbiAgICBpZiAoIXdyYXBzWCAmJiB0aGlzLnNvdXJjZVByb2pfLmlzR2xvYmFsKCkgJiYgc291cmNlQ292ZXJhZ2VYKSB7XG4gICAgICBuZWVkc1N1YmRpdmlzaW9uIHw9XG4gICAgICAgICAgc291cmNlQ292ZXJhZ2VYID4gX29sXy5SQVNURVJfUkVQUk9KRUNUSU9OX01BWF9UUklBTkdMRV9XSURUSDtcbiAgICB9XG4gIH1cblxuICBpZiAoIW5lZWRzU3ViZGl2aXNpb24gJiYgdGhpcy5tYXhTb3VyY2VFeHRlbnRfKSB7XG4gICAgaWYgKCFfb2xfZXh0ZW50Xy5pbnRlcnNlY3RzKHNvdXJjZVF1YWRFeHRlbnQsIHRoaXMubWF4U291cmNlRXh0ZW50XykpIHtcbiAgICAgIC8vIHdob2xlIHF1YWQgb3V0c2lkZSBzb3VyY2UgcHJvamVjdGlvbiBleHRlbnQgLT4gaWdub3JlXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKCFuZWVkc1N1YmRpdmlzaW9uKSB7XG4gICAgaWYgKCFpc0Zpbml0ZShhU3JjWzBdKSB8fCAhaXNGaW5pdGUoYVNyY1sxXSkgfHxcbiAgICAgICAgIWlzRmluaXRlKGJTcmNbMF0pIHx8ICFpc0Zpbml0ZShiU3JjWzFdKSB8fFxuICAgICAgICAhaXNGaW5pdGUoY1NyY1swXSkgfHwgIWlzRmluaXRlKGNTcmNbMV0pIHx8XG4gICAgICAgICFpc0Zpbml0ZShkU3JjWzBdKSB8fCAhaXNGaW5pdGUoZFNyY1sxXSkpIHtcbiAgICAgIGlmIChtYXhTdWJkaXZpc2lvbiA+IDApIHtcbiAgICAgICAgbmVlZHNTdWJkaXZpc2lvbiA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKG1heFN1YmRpdmlzaW9uID4gMCkge1xuICAgIGlmICghbmVlZHNTdWJkaXZpc2lvbikge1xuICAgICAgdmFyIGNlbnRlciA9IFsoYVswXSArIGNbMF0pIC8gMiwgKGFbMV0gKyBjWzFdKSAvIDJdO1xuICAgICAgdmFyIGNlbnRlclNyYyA9IHRoaXMudHJhbnNmb3JtSW52XyhjZW50ZXIpO1xuXG4gICAgICB2YXIgZHg7XG4gICAgICBpZiAod3JhcHNYKSB7XG4gICAgICAgIHZhciBjZW50ZXJTcmNFc3RpbVggPVxuICAgICAgICAgICAgKF9vbF9tYXRoXy5tb2R1bG8oYVNyY1swXSwgc291cmNlV29ybGRXaWR0aCkgK1xuICAgICAgICAgICAgIF9vbF9tYXRoXy5tb2R1bG8oY1NyY1swXSwgc291cmNlV29ybGRXaWR0aCkpIC8gMjtcbiAgICAgICAgZHggPSBjZW50ZXJTcmNFc3RpbVggLVxuICAgICAgICAgICAgX29sX21hdGhfLm1vZHVsbyhjZW50ZXJTcmNbMF0sIHNvdXJjZVdvcmxkV2lkdGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHggPSAoYVNyY1swXSArIGNTcmNbMF0pIC8gMiAtIGNlbnRlclNyY1swXTtcbiAgICAgIH1cbiAgICAgIHZhciBkeSA9IChhU3JjWzFdICsgY1NyY1sxXSkgLyAyIC0gY2VudGVyU3JjWzFdO1xuICAgICAgdmFyIGNlbnRlclNyY0Vycm9yU3F1YXJlZCA9IGR4ICogZHggKyBkeSAqIGR5O1xuICAgICAgbmVlZHNTdWJkaXZpc2lvbiA9IGNlbnRlclNyY0Vycm9yU3F1YXJlZCA+IHRoaXMuZXJyb3JUaHJlc2hvbGRTcXVhcmVkXztcbiAgICB9XG4gICAgaWYgKG5lZWRzU3ViZGl2aXNpb24pIHtcbiAgICAgIGlmIChNYXRoLmFicyhhWzBdIC0gY1swXSkgPD0gTWF0aC5hYnMoYVsxXSAtIGNbMV0pKSB7XG4gICAgICAgIC8vIHNwbGl0IGhvcml6b250YWxseSAodG9wICYgYm90dG9tKVxuICAgICAgICB2YXIgYmMgPSBbKGJbMF0gKyBjWzBdKSAvIDIsIChiWzFdICsgY1sxXSkgLyAyXTtcbiAgICAgICAgdmFyIGJjU3JjID0gdGhpcy50cmFuc2Zvcm1JbnZfKGJjKTtcbiAgICAgICAgdmFyIGRhID0gWyhkWzBdICsgYVswXSkgLyAyLCAoZFsxXSArIGFbMV0pIC8gMl07XG4gICAgICAgIHZhciBkYVNyYyA9IHRoaXMudHJhbnNmb3JtSW52XyhkYSk7XG5cbiAgICAgICAgdGhpcy5hZGRRdWFkXyhcbiAgICAgICAgICAgIGEsIGIsIGJjLCBkYSwgYVNyYywgYlNyYywgYmNTcmMsIGRhU3JjLCBtYXhTdWJkaXZpc2lvbiAtIDEpO1xuICAgICAgICB0aGlzLmFkZFF1YWRfKFxuICAgICAgICAgICAgZGEsIGJjLCBjLCBkLCBkYVNyYywgYmNTcmMsIGNTcmMsIGRTcmMsIG1heFN1YmRpdmlzaW9uIC0gMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBzcGxpdCB2ZXJ0aWNhbGx5IChsZWZ0ICYgcmlnaHQpXG4gICAgICAgIHZhciBhYiA9IFsoYVswXSArIGJbMF0pIC8gMiwgKGFbMV0gKyBiWzFdKSAvIDJdO1xuICAgICAgICB2YXIgYWJTcmMgPSB0aGlzLnRyYW5zZm9ybUludl8oYWIpO1xuICAgICAgICB2YXIgY2QgPSBbKGNbMF0gKyBkWzBdKSAvIDIsIChjWzFdICsgZFsxXSkgLyAyXTtcbiAgICAgICAgdmFyIGNkU3JjID0gdGhpcy50cmFuc2Zvcm1JbnZfKGNkKTtcblxuICAgICAgICB0aGlzLmFkZFF1YWRfKFxuICAgICAgICAgICAgYSwgYWIsIGNkLCBkLCBhU3JjLCBhYlNyYywgY2RTcmMsIGRTcmMsIG1heFN1YmRpdmlzaW9uIC0gMSk7XG4gICAgICAgIHRoaXMuYWRkUXVhZF8oXG4gICAgICAgICAgICBhYiwgYiwgYywgY2QsIGFiU3JjLCBiU3JjLCBjU3JjLCBjZFNyYywgbWF4U3ViZGl2aXNpb24gLSAxKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBpZiAod3JhcHNYKSB7XG4gICAgaWYgKCF0aGlzLmNhbldyYXBYSW5Tb3VyY2VfKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMud3JhcHNYSW5Tb3VyY2VfID0gdHJ1ZTtcbiAgfVxuXG4gIHRoaXMuYWRkVHJpYW5nbGVfKGEsIGMsIGQsIGFTcmMsIGNTcmMsIGRTcmMpO1xuICB0aGlzLmFkZFRyaWFuZ2xlXyhhLCBiLCBjLCBhU3JjLCBiU3JjLCBjU3JjKTtcbn07XG5cblxuLyoqXG4gKiBDYWxjdWxhdGVzIGV4dGVudCBvZiB0aGUgJ3NvdXJjZScgY29vcmRpbmF0ZXMgZnJvbSBhbGwgdGhlIHRyaWFuZ2xlcy5cbiAqXG4gKiBAcmV0dXJuIHtvbC5FeHRlbnR9IENhbGN1bGF0ZWQgZXh0ZW50LlxuICovXG5fb2xfcmVwcm9qX1RyaWFuZ3VsYXRpb25fLnByb3RvdHlwZS5jYWxjdWxhdGVTb3VyY2VFeHRlbnQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGV4dGVudCA9IF9vbF9leHRlbnRfLmNyZWF0ZUVtcHR5KCk7XG5cbiAgdGhpcy50cmlhbmdsZXNfLmZvckVhY2goZnVuY3Rpb24odHJpYW5nbGUsIGksIGFycikge1xuICAgIHZhciBzcmMgPSB0cmlhbmdsZS5zb3VyY2U7XG4gICAgX29sX2V4dGVudF8uZXh0ZW5kQ29vcmRpbmF0ZShleHRlbnQsIHNyY1swXSk7XG4gICAgX29sX2V4dGVudF8uZXh0ZW5kQ29vcmRpbmF0ZShleHRlbnQsIHNyY1sxXSk7XG4gICAgX29sX2V4dGVudF8uZXh0ZW5kQ29vcmRpbmF0ZShleHRlbnQsIHNyY1syXSk7XG4gIH0pO1xuXG4gIHJldHVybiBleHRlbnQ7XG59O1xuXG5cbi8qKlxuICogQHJldHVybiB7QXJyYXkuPG9sLlJlcHJvalRyaWFuZ2xlPn0gQXJyYXkgb2YgdGhlIGNhbGN1bGF0ZWQgdHJpYW5nbGVzLlxuICovXG5fb2xfcmVwcm9qX1RyaWFuZ3VsYXRpb25fLnByb3RvdHlwZS5nZXRUcmlhbmdsZXMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudHJpYW5nbGVzXztcbn07XG5leHBvcnQgZGVmYXVsdCBfb2xfcmVwcm9qX1RyaWFuZ3VsYXRpb25fO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvcmVwcm9qL3RyaWFuZ3VsYXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfb2xfIGZyb20gJy4uL2luZGV4LmpzJztcbmltcG9ydCBfb2xfQXR0cmlidXRpb25fIGZyb20gJy4uL2F0dHJpYnV0aW9uLmpzJztcbmltcG9ydCBfb2xfT2JqZWN0XyBmcm9tICcuLi9vYmplY3QuanMnO1xuaW1wb3J0IF9vbF9wcm9qXyBmcm9tICcuLi9wcm9qLmpzJztcbmltcG9ydCBfb2xfc291cmNlX1N0YXRlXyBmcm9tICcuLi9zb3VyY2Uvc3RhdGUuanMnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIEFic3RyYWN0IGJhc2UgY2xhc3M7IG5vcm1hbGx5IG9ubHkgdXNlZCBmb3IgY3JlYXRpbmcgc3ViY2xhc3NlcyBhbmQgbm90XG4gKiBpbnN0YW50aWF0ZWQgaW4gYXBwcy5cbiAqIEJhc2UgY2xhc3MgZm9yIHtAbGluayBvbC5sYXllci5MYXllcn0gc291cmNlcy5cbiAqXG4gKiBBIGdlbmVyaWMgYGNoYW5nZWAgZXZlbnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHN0YXRlIG9mIHRoZSBzb3VyY2UgY2hhbmdlcy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBhYnN0cmFjdFxuICogQGV4dGVuZHMge29sLk9iamVjdH1cbiAqIEBwYXJhbSB7b2wuU291cmNlU291cmNlT3B0aW9uc30gb3B0aW9ucyBTb3VyY2Ugb3B0aW9ucy5cbiAqIEBhcGlcbiAqL1xudmFyIF9vbF9zb3VyY2VfU291cmNlXyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblxuICBfb2xfT2JqZWN0Xy5jYWxsKHRoaXMpO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7b2wucHJvai5Qcm9qZWN0aW9ufVxuICAgKi9cbiAgdGhpcy5wcm9qZWN0aW9uXyA9IF9vbF9wcm9qXy5nZXQob3B0aW9ucy5wcm9qZWN0aW9uKTtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge0FycmF5LjxvbC5BdHRyaWJ1dGlvbj59XG4gICAqL1xuICB0aGlzLmF0dHJpYnV0aW9uc18gPSBudWxsO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7P29sLkF0dHJpYnV0aW9uMn1cbiAgICovXG4gIHRoaXMuYXR0cmlidXRpb25zMl8gPSB0aGlzLmFkYXB0QXR0cmlidXRpb25zXyhvcHRpb25zLmF0dHJpYnV0aW9ucyk7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtzdHJpbmd8b2x4LkxvZ29PcHRpb25zfHVuZGVmaW5lZH1cbiAgICovXG4gIHRoaXMubG9nb18gPSBvcHRpb25zLmxvZ287XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtvbC5zb3VyY2UuU3RhdGV9XG4gICAqL1xuICB0aGlzLnN0YXRlXyA9IG9wdGlvbnMuc3RhdGUgIT09IHVuZGVmaW5lZCA/XG4gICAgb3B0aW9ucy5zdGF0ZSA6IF9vbF9zb3VyY2VfU3RhdGVfLlJFQURZO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIHRoaXMud3JhcFhfID0gb3B0aW9ucy53cmFwWCAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy53cmFwWCA6IGZhbHNlO1xuXG59O1xuXG5fb2xfLmluaGVyaXRzKF9vbF9zb3VyY2VfU291cmNlXywgX29sX09iamVjdF8pO1xuXG4vKipcbiAqIFR1cm5zIHRoZSBhdHRyaWJ1dGlvbnMgb3B0aW9uIGludG8gYW4gYXR0cmlidXRpb25zIGZ1bmN0aW9uLlxuICogQHN1cHByZXNzIHtkZXByZWNhdGVkfVxuICogQHBhcmFtIHtvbC5BdHRyaWJ1dGlvbkxpa2V8dW5kZWZpbmVkfSBhdHRyaWJ1dGlvbkxpa2UgVGhlIGF0dHJpYnV0aW9uIG9wdGlvbi5cbiAqIEByZXR1cm4gez9vbC5BdHRyaWJ1dGlvbjJ9IEFuIGF0dHJpYnV0aW9uIGZ1bmN0aW9uIChvciBudWxsKS5cbiAqL1xuX29sX3NvdXJjZV9Tb3VyY2VfLnByb3RvdHlwZS5hZGFwdEF0dHJpYnV0aW9uc18gPSBmdW5jdGlvbihhdHRyaWJ1dGlvbkxpa2UpIHtcbiAgaWYgKCFhdHRyaWJ1dGlvbkxpa2UpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAoYXR0cmlidXRpb25MaWtlIGluc3RhbmNlb2YgX29sX0F0dHJpYnV0aW9uXykge1xuXG4gICAgLy8gVE9ETzogcmVtb3ZlIGF0dHJpYnV0aW9uc18gaW4gbmV4dCBtYWpvciByZWxlYXNlXG4gICAgdGhpcy5hdHRyaWJ1dGlvbnNfID0gW2F0dHJpYnV0aW9uTGlrZV07XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oZnJhbWVTdGF0ZSkge1xuICAgICAgcmV0dXJuIFthdHRyaWJ1dGlvbkxpa2UuZ2V0SFRNTCgpXTtcbiAgICB9O1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KGF0dHJpYnV0aW9uTGlrZSkpIHtcbiAgICBpZiAoYXR0cmlidXRpb25MaWtlWzBdIGluc3RhbmNlb2YgX29sX0F0dHJpYnV0aW9uXykge1xuXG4gICAgICAvLyBUT0RPOiByZW1vdmUgYXR0cmlidXRpb25zXyBpbiBuZXh0IG1ham9yIHJlbGVhc2VcbiAgICAgIHRoaXMuYXR0cmlidXRpb25zXyA9IGF0dHJpYnV0aW9uTGlrZTtcblxuICAgICAgdmFyIGF0dHJpYnV0aW9ucyA9IGF0dHJpYnV0aW9uTGlrZS5tYXAoZnVuY3Rpb24oYXR0cmlidXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0aW9uLmdldEhUTUwoKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGZyYW1lU3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0aW9ucztcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gVE9ETzogcmVtb3ZlIGF0dHJpYnV0aW9uc18gaW4gbmV4dCBtYWpvciByZWxlYXNlXG4gICAgdGhpcy5hdHRyaWJ1dGlvbnNfID0gYXR0cmlidXRpb25MaWtlLm1hcChmdW5jdGlvbihhdHRyaWJ1dGlvbikge1xuICAgICAgcmV0dXJuIG5ldyBfb2xfQXR0cmlidXRpb25fKHtodG1sOiBhdHRyaWJ1dGlvbn0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGZyYW1lU3RhdGUpIHtcbiAgICAgIHJldHVybiBhdHRyaWJ1dGlvbkxpa2U7XG4gICAgfTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRpb25MaWtlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGF0dHJpYnV0aW9uTGlrZTtcbiAgfVxuXG4gIC8vIFRPRE86IHJlbW92ZSBhdHRyaWJ1dGlvbnNfIGluIG5leHQgbWFqb3IgcmVsZWFzZVxuICB0aGlzLmF0dHJpYnV0aW9uc18gPSBbXG4gICAgbmV3IF9vbF9BdHRyaWJ1dGlvbl8oe2h0bWw6IGF0dHJpYnV0aW9uTGlrZX0pXG4gIF07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGZyYW1lU3RhdGUpIHtcbiAgICByZXR1cm4gW2F0dHJpYnV0aW9uTGlrZV07XG4gIH07XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7b2wuQ29vcmRpbmF0ZX0gY29vcmRpbmF0ZSBDb29yZGluYXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IHJlc29sdXRpb24gUmVzb2x1dGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSByb3RhdGlvbiBSb3RhdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBoaXRUb2xlcmFuY2UgSGl0IHRvbGVyYW5jZSBpbiBwaXhlbHMuXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBib29sZWFuPn0gc2tpcHBlZEZlYXR1cmVVaWRzIFNraXBwZWQgZmVhdHVyZSB1aWRzLlxuICogQHBhcmFtIHtmdW5jdGlvbigob2wuRmVhdHVyZXxvbC5yZW5kZXIuRmVhdHVyZSkpOiBUfSBjYWxsYmFjayBGZWF0dXJlXG4gKiAgICAgY2FsbGJhY2suXG4gKiBAcmV0dXJuIHtUfHVuZGVmaW5lZH0gQ2FsbGJhY2sgcmVzdWx0LlxuICogQHRlbXBsYXRlIFRcbiAqL1xuX29sX3NvdXJjZV9Tb3VyY2VfLnByb3RvdHlwZS5mb3JFYWNoRmVhdHVyZUF0Q29vcmRpbmF0ZSA9IF9vbF8ubnVsbEZ1bmN0aW9uO1xuXG5cbi8qKlxuICogR2V0IHRoZSBhdHRyaWJ1dGlvbnMgb2YgdGhlIHNvdXJjZS5cbiAqIEByZXR1cm4ge0FycmF5LjxvbC5BdHRyaWJ1dGlvbj59IEF0dHJpYnV0aW9ucy5cbiAqIEBhcGlcbiAqL1xuX29sX3NvdXJjZV9Tb3VyY2VfLnByb3RvdHlwZS5nZXRBdHRyaWJ1dGlvbnMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuYXR0cmlidXRpb25zXztcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIGF0dHJpYnV0aW9uIGZ1bmN0aW9uIGZvciB0aGUgc291cmNlLlxuICogQHJldHVybiB7P29sLkF0dHJpYnV0aW9uMn0gQXR0cmlidXRpb24gZnVuY3Rpb24uXG4gKi9cbl9vbF9zb3VyY2VfU291cmNlXy5wcm90b3R5cGUuZ2V0QXR0cmlidXRpb25zMiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5hdHRyaWJ1dGlvbnMyXztcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIGxvZ28gb2YgdGhlIHNvdXJjZS5cbiAqIEByZXR1cm4ge3N0cmluZ3xvbHguTG9nb09wdGlvbnN8dW5kZWZpbmVkfSBMb2dvLlxuICogQGFwaVxuICovXG5fb2xfc291cmNlX1NvdXJjZV8ucHJvdG90eXBlLmdldExvZ28gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMubG9nb187XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBwcm9qZWN0aW9uIG9mIHRoZSBzb3VyY2UuXG4gKiBAcmV0dXJuIHtvbC5wcm9qLlByb2plY3Rpb259IFByb2plY3Rpb24uXG4gKiBAYXBpXG4gKi9cbl9vbF9zb3VyY2VfU291cmNlXy5wcm90b3R5cGUuZ2V0UHJvamVjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5wcm9qZWN0aW9uXztcbn07XG5cblxuLyoqXG4gKiBAYWJzdHJhY3RcbiAqIEByZXR1cm4ge0FycmF5LjxudW1iZXI+fHVuZGVmaW5lZH0gUmVzb2x1dGlvbnMuXG4gKi9cbl9vbF9zb3VyY2VfU291cmNlXy5wcm90b3R5cGUuZ2V0UmVzb2x1dGlvbnMgPSBmdW5jdGlvbigpIHt9O1xuXG5cbi8qKlxuICogR2V0IHRoZSBzdGF0ZSBvZiB0aGUgc291cmNlLCBzZWUge0BsaW5rIG9sLnNvdXJjZS5TdGF0ZX0gZm9yIHBvc3NpYmxlIHN0YXRlcy5cbiAqIEByZXR1cm4ge29sLnNvdXJjZS5TdGF0ZX0gU3RhdGUuXG4gKiBAYXBpXG4gKi9cbl9vbF9zb3VyY2VfU291cmNlXy5wcm90b3R5cGUuZ2V0U3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuc3RhdGVfO1xufTtcblxuXG4vKipcbiAqIEByZXR1cm4ge2Jvb2xlYW58dW5kZWZpbmVkfSBXcmFwIFguXG4gKi9cbl9vbF9zb3VyY2VfU291cmNlXy5wcm90b3R5cGUuZ2V0V3JhcFggPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMud3JhcFhfO1xufTtcblxuXG4vKipcbiAqIFJlZnJlc2hlcyB0aGUgc291cmNlIGFuZCBmaW5hbGx5IGRpc3BhdGNoZXMgYSAnY2hhbmdlJyBldmVudC5cbiAqIEBhcGlcbiAqL1xuX29sX3NvdXJjZV9Tb3VyY2VfLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuY2hhbmdlZCgpO1xufTtcblxuXG4vKipcbiAqIFNldCB0aGUgYXR0cmlidXRpb25zIG9mIHRoZSBzb3VyY2UuXG4gKiBAcGFyYW0ge29sLkF0dHJpYnV0aW9uTGlrZXx1bmRlZmluZWR9IGF0dHJpYnV0aW9ucyBBdHRyaWJ1dGlvbnMuXG4gKiAgICAgQ2FuIGJlIHBhc3NlZCBhcyBgc3RyaW5nYCwgYEFycmF5PHN0cmluZz5gLCBge0BsaW5rIG9sLkF0dHJpYnV0aW9uMn1gLFxuICogICAgIG9yIGB1bmRlZmluZWRgLlxuICogQGFwaVxuICovXG5fb2xfc291cmNlX1NvdXJjZV8ucHJvdG90eXBlLnNldEF0dHJpYnV0aW9ucyA9IGZ1bmN0aW9uKGF0dHJpYnV0aW9ucykge1xuICB0aGlzLmF0dHJpYnV0aW9uczJfID0gdGhpcy5hZGFwdEF0dHJpYnV0aW9uc18oYXR0cmlidXRpb25zKTtcbiAgdGhpcy5jaGFuZ2VkKCk7XG59O1xuXG5cbi8qKlxuICogU2V0IHRoZSBsb2dvIG9mIHRoZSBzb3VyY2UuXG4gKiBAcGFyYW0ge3N0cmluZ3xvbHguTG9nb09wdGlvbnN8dW5kZWZpbmVkfSBsb2dvIExvZ28uXG4gKi9cbl9vbF9zb3VyY2VfU291cmNlXy5wcm90b3R5cGUuc2V0TG9nbyA9IGZ1bmN0aW9uKGxvZ28pIHtcbiAgdGhpcy5sb2dvXyA9IGxvZ287XG59O1xuXG5cbi8qKlxuICogU2V0IHRoZSBzdGF0ZSBvZiB0aGUgc291cmNlLlxuICogQHBhcmFtIHtvbC5zb3VyY2UuU3RhdGV9IHN0YXRlIFN0YXRlLlxuICogQHByb3RlY3RlZFxuICovXG5fb2xfc291cmNlX1NvdXJjZV8ucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgdGhpcy5zdGF0ZV8gPSBzdGF0ZTtcbiAgdGhpcy5jaGFuZ2VkKCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgX29sX3NvdXJjZV9Tb3VyY2VfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvc291cmNlL3NvdXJjZS5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBBIHJlcHJlc2VudGF0aW9uIG9mIGEgY29udGlndW91cyBibG9jayBvZiB0aWxlcy4gIEEgdGlsZSByYW5nZSBpcyBzcGVjaWZpZWRcbiAqIGJ5IGl0cyBtaW4vbWF4IHRpbGUgY29vcmRpbmF0ZXMgYW5kIGlzIGluY2x1c2l2ZSBvZiBjb29yZGluYXRlcy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW5YIE1pbmltdW0gWC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhYIE1heGltdW0gWC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW5ZIE1pbmltdW0gWS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhZIE1heGltdW0gWS5cbiAqIEBzdHJ1Y3RcbiAqL1xudmFyIF9vbF9UaWxlUmFuZ2VfID0gZnVuY3Rpb24obWluWCwgbWF4WCwgbWluWSwgbWF4WSkge1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgdGhpcy5taW5YID0gbWluWDtcblxuICAvKipcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIHRoaXMubWF4WCA9IG1heFg7XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICB0aGlzLm1pblkgPSBtaW5ZO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgdGhpcy5tYXhZID0gbWF4WTtcblxufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW5YIE1pbmltdW0gWC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhYIE1heGltdW0gWC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW5ZIE1pbmltdW0gWS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhZIE1heGltdW0gWS5cbiAqIEBwYXJhbSB7b2wuVGlsZVJhbmdlfHVuZGVmaW5lZH0gdGlsZVJhbmdlIFRpbGVSYW5nZS5cbiAqIEByZXR1cm4ge29sLlRpbGVSYW5nZX0gVGlsZSByYW5nZS5cbiAqL1xuX29sX1RpbGVSYW5nZV8uY3JlYXRlT3JVcGRhdGUgPSBmdW5jdGlvbihtaW5YLCBtYXhYLCBtaW5ZLCBtYXhZLCB0aWxlUmFuZ2UpIHtcbiAgaWYgKHRpbGVSYW5nZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGlsZVJhbmdlLm1pblggPSBtaW5YO1xuICAgIHRpbGVSYW5nZS5tYXhYID0gbWF4WDtcbiAgICB0aWxlUmFuZ2UubWluWSA9IG1pblk7XG4gICAgdGlsZVJhbmdlLm1heFkgPSBtYXhZO1xuICAgIHJldHVybiB0aWxlUmFuZ2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBfb2xfVGlsZVJhbmdlXyhtaW5YLCBtYXhYLCBtaW5ZLCBtYXhZKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wuVGlsZUNvb3JkfSB0aWxlQ29vcmQgVGlsZSBjb29yZGluYXRlLlxuICogQHJldHVybiB7Ym9vbGVhbn0gQ29udGFpbnMgdGlsZSBjb29yZGluYXRlLlxuICovXG5fb2xfVGlsZVJhbmdlXy5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbih0aWxlQ29vcmQpIHtcbiAgcmV0dXJuIHRoaXMuY29udGFpbnNYWSh0aWxlQ29vcmRbMV0sIHRpbGVDb29yZFsyXSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtvbC5UaWxlUmFuZ2V9IHRpbGVSYW5nZSBUaWxlIHJhbmdlLlxuICogQHJldHVybiB7Ym9vbGVhbn0gQ29udGFpbnMuXG4gKi9cbl9vbF9UaWxlUmFuZ2VfLnByb3RvdHlwZS5jb250YWluc1RpbGVSYW5nZSA9IGZ1bmN0aW9uKHRpbGVSYW5nZSkge1xuICByZXR1cm4gdGhpcy5taW5YIDw9IHRpbGVSYW5nZS5taW5YICYmIHRpbGVSYW5nZS5tYXhYIDw9IHRoaXMubWF4WCAmJlxuICAgICAgdGhpcy5taW5ZIDw9IHRpbGVSYW5nZS5taW5ZICYmIHRpbGVSYW5nZS5tYXhZIDw9IHRoaXMubWF4WTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0geCBUaWxlIGNvb3JkaW5hdGUgeC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB5IFRpbGUgY29vcmRpbmF0ZSB5LlxuICogQHJldHVybiB7Ym9vbGVhbn0gQ29udGFpbnMgY29vcmRpbmF0ZS5cbiAqL1xuX29sX1RpbGVSYW5nZV8ucHJvdG90eXBlLmNvbnRhaW5zWFkgPSBmdW5jdGlvbih4LCB5KSB7XG4gIHJldHVybiB0aGlzLm1pblggPD0geCAmJiB4IDw9IHRoaXMubWF4WCAmJiB0aGlzLm1pblkgPD0geSAmJiB5IDw9IHRoaXMubWF4WTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge29sLlRpbGVSYW5nZX0gdGlsZVJhbmdlIFRpbGUgcmFuZ2UuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFcXVhbHMuXG4gKi9cbl9vbF9UaWxlUmFuZ2VfLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbih0aWxlUmFuZ2UpIHtcbiAgcmV0dXJuIHRoaXMubWluWCA9PSB0aWxlUmFuZ2UubWluWCAmJiB0aGlzLm1pblkgPT0gdGlsZVJhbmdlLm1pblkgJiZcbiAgICAgIHRoaXMubWF4WCA9PSB0aWxlUmFuZ2UubWF4WCAmJiB0aGlzLm1heFkgPT0gdGlsZVJhbmdlLm1heFk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtvbC5UaWxlUmFuZ2V9IHRpbGVSYW5nZSBUaWxlIHJhbmdlLlxuICovXG5fb2xfVGlsZVJhbmdlXy5wcm90b3R5cGUuZXh0ZW5kID0gZnVuY3Rpb24odGlsZVJhbmdlKSB7XG4gIGlmICh0aWxlUmFuZ2UubWluWCA8IHRoaXMubWluWCkge1xuICAgIHRoaXMubWluWCA9IHRpbGVSYW5nZS5taW5YO1xuICB9XG4gIGlmICh0aWxlUmFuZ2UubWF4WCA+IHRoaXMubWF4WCkge1xuICAgIHRoaXMubWF4WCA9IHRpbGVSYW5nZS5tYXhYO1xuICB9XG4gIGlmICh0aWxlUmFuZ2UubWluWSA8IHRoaXMubWluWSkge1xuICAgIHRoaXMubWluWSA9IHRpbGVSYW5nZS5taW5ZO1xuICB9XG4gIGlmICh0aWxlUmFuZ2UubWF4WSA+IHRoaXMubWF4WSkge1xuICAgIHRoaXMubWF4WSA9IHRpbGVSYW5nZS5tYXhZO1xuICB9XG59O1xuXG5cbi8qKlxuICogQHJldHVybiB7bnVtYmVyfSBIZWlnaHQuXG4gKi9cbl9vbF9UaWxlUmFuZ2VfLnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMubWF4WSAtIHRoaXMubWluWSArIDE7XG59O1xuXG5cbi8qKlxuICogQHJldHVybiB7b2wuU2l6ZX0gU2l6ZS5cbiAqL1xuX29sX1RpbGVSYW5nZV8ucHJvdG90eXBlLmdldFNpemUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIFt0aGlzLmdldFdpZHRoKCksIHRoaXMuZ2V0SGVpZ2h0KCldO1xufTtcblxuXG4vKipcbiAqIEByZXR1cm4ge251bWJlcn0gV2lkdGguXG4gKi9cbl9vbF9UaWxlUmFuZ2VfLnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5tYXhYIC0gdGhpcy5taW5YICsgMTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge29sLlRpbGVSYW5nZX0gdGlsZVJhbmdlIFRpbGUgcmFuZ2UuXG4gKiBAcmV0dXJuIHtib29sZWFufSBJbnRlcnNlY3RzLlxuICovXG5fb2xfVGlsZVJhbmdlXy5wcm90b3R5cGUuaW50ZXJzZWN0cyA9IGZ1bmN0aW9uKHRpbGVSYW5nZSkge1xuICByZXR1cm4gdGhpcy5taW5YIDw9IHRpbGVSYW5nZS5tYXhYICYmXG4gICAgICB0aGlzLm1heFggPj0gdGlsZVJhbmdlLm1pblggJiZcbiAgICAgIHRoaXMubWluWSA8PSB0aWxlUmFuZ2UubWF4WSAmJlxuICAgICAgdGhpcy5tYXhZID49IHRpbGVSYW5nZS5taW5ZO1xufTtcbmV4cG9ydCBkZWZhdWx0IF9vbF9UaWxlUmFuZ2VfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvdGlsZXJhbmdlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgX29sXyBmcm9tICcuLi9pbmRleC5qcyc7XG5pbXBvcnQgX29sX3NvdXJjZV9UaWxlSW1hZ2VfIGZyb20gJy4uL3NvdXJjZS90aWxlaW1hZ2UuanMnO1xuaW1wb3J0IF9vbF90aWxlZ3JpZF8gZnJvbSAnLi4vdGlsZWdyaWQuanMnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIExheWVyIHNvdXJjZSBmb3IgdGlsZSBkYXRhIHdpdGggVVJMcyBpbiBhIHNldCBYWVogZm9ybWF0IHRoYXQgYXJlXG4gKiBkZWZpbmVkIGluIGEgVVJMIHRlbXBsYXRlLiBCeSBkZWZhdWx0LCB0aGlzIGZvbGxvd3MgdGhlIHdpZGVseS11c2VkXG4gKiBHb29nbGUgZ3JpZCB3aGVyZSBgeGAgMCBhbmQgYHlgIDAgYXJlIGluIHRoZSB0b3AgbGVmdC4gR3JpZHMgbGlrZVxuICogVE1TIHdoZXJlIGB4YCAwIGFuZCBgeWAgMCBhcmUgaW4gdGhlIGJvdHRvbSBsZWZ0IGNhbiBiZSB1c2VkIGJ5XG4gKiB1c2luZyB0aGUgYHsteX1gIHBsYWNlaG9sZGVyIGluIHRoZSBVUkwgdGVtcGxhdGUsIHNvIGxvbmcgYXMgdGhlXG4gKiBzb3VyY2UgZG9lcyBub3QgaGF2ZSBhIGN1c3RvbSB0aWxlIGdyaWQuIEluIHRoaXMgY2FzZSxcbiAqIHtAbGluayBvbC5zb3VyY2UuVGlsZUltYWdlfSBjYW4gYmUgdXNlZCB3aXRoIGEgYHRpbGVVcmxGdW5jdGlvbmBcbiAqIHN1Y2ggYXM6XG4gKlxuICogIHRpbGVVcmxGdW5jdGlvbjogZnVuY3Rpb24oY29vcmRpbmF0ZSkge1xuICogICAgcmV0dXJuICdodHRwOi8vbWFwc2VydmVyLmNvbS8nICsgY29vcmRpbmF0ZVswXSArICcvJyArXG4gKiAgICAgICAgY29vcmRpbmF0ZVsxXSArICcvJyArIGNvb3JkaW5hdGVbMl0gKyAnLnBuZyc7XG4gKiAgICB9XG4gKlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVuZHMge29sLnNvdXJjZS5UaWxlSW1hZ2V9XG4gKiBAcGFyYW0ge29seC5zb3VyY2UuWFlaT3B0aW9ucz19IG9wdF9vcHRpb25zIFhZWiBvcHRpb25zLlxuICogQGFwaVxuICovXG52YXIgX29sX3NvdXJjZV9YWVpfID0gZnVuY3Rpb24ob3B0X29wdGlvbnMpIHtcbiAgdmFyIG9wdGlvbnMgPSBvcHRfb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHByb2plY3Rpb24gPSBvcHRpb25zLnByb2plY3Rpb24gIT09IHVuZGVmaW5lZCA/XG4gICAgb3B0aW9ucy5wcm9qZWN0aW9uIDogJ0VQU0c6Mzg1Nyc7XG5cbiAgdmFyIHRpbGVHcmlkID0gb3B0aW9ucy50aWxlR3JpZCAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy50aWxlR3JpZCA6XG4gICAgX29sX3RpbGVncmlkXy5jcmVhdGVYWVooe1xuICAgICAgZXh0ZW50OiBfb2xfdGlsZWdyaWRfLmV4dGVudEZyb21Qcm9qZWN0aW9uKHByb2plY3Rpb24pLFxuICAgICAgbWF4Wm9vbTogb3B0aW9ucy5tYXhab29tLFxuICAgICAgbWluWm9vbTogb3B0aW9ucy5taW5ab29tLFxuICAgICAgdGlsZVNpemU6IG9wdGlvbnMudGlsZVNpemVcbiAgICB9KTtcblxuICBfb2xfc291cmNlX1RpbGVJbWFnZV8uY2FsbCh0aGlzLCB7XG4gICAgYXR0cmlidXRpb25zOiBvcHRpb25zLmF0dHJpYnV0aW9ucyxcbiAgICBjYWNoZVNpemU6IG9wdGlvbnMuY2FjaGVTaXplLFxuICAgIGNyb3NzT3JpZ2luOiBvcHRpb25zLmNyb3NzT3JpZ2luLFxuICAgIGxvZ286IG9wdGlvbnMubG9nbyxcbiAgICBvcGFxdWU6IG9wdGlvbnMub3BhcXVlLFxuICAgIHByb2plY3Rpb246IHByb2plY3Rpb24sXG4gICAgcmVwcm9qZWN0aW9uRXJyb3JUaHJlc2hvbGQ6IG9wdGlvbnMucmVwcm9qZWN0aW9uRXJyb3JUaHJlc2hvbGQsXG4gICAgdGlsZUdyaWQ6IHRpbGVHcmlkLFxuICAgIHRpbGVMb2FkRnVuY3Rpb246IG9wdGlvbnMudGlsZUxvYWRGdW5jdGlvbixcbiAgICB0aWxlUGl4ZWxSYXRpbzogb3B0aW9ucy50aWxlUGl4ZWxSYXRpbyxcbiAgICB0aWxlVXJsRnVuY3Rpb246IG9wdGlvbnMudGlsZVVybEZ1bmN0aW9uLFxuICAgIHVybDogb3B0aW9ucy51cmwsXG4gICAgdXJsczogb3B0aW9ucy51cmxzLFxuICAgIHdyYXBYOiBvcHRpb25zLndyYXBYICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLndyYXBYIDogdHJ1ZSxcbiAgICB0cmFuc2l0aW9uOiBvcHRpb25zLnRyYW5zaXRpb25cbiAgfSk7XG5cbn07XG5cbl9vbF8uaW5oZXJpdHMoX29sX3NvdXJjZV9YWVpfLCBfb2xfc291cmNlX1RpbGVJbWFnZV8pO1xuZXhwb3J0IGRlZmF1bHQgX29sX3NvdXJjZV9YWVpfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvc291cmNlL3h5ei5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF9vbF8gZnJvbSAnLi9pbmRleC5qcyc7XG5pbXBvcnQgX29sX1RpbGVTdGF0ZV8gZnJvbSAnLi90aWxlc3RhdGUuanMnO1xuaW1wb3J0IF9vbF9lYXNpbmdfIGZyb20gJy4vZWFzaW5nLmpzJztcbmltcG9ydCBfb2xfZXZlbnRzX0V2ZW50VGFyZ2V0XyBmcm9tICcuL2V2ZW50cy9ldmVudHRhcmdldC5qcyc7XG5pbXBvcnQgX29sX2V2ZW50c19FdmVudFR5cGVfIGZyb20gJy4vZXZlbnRzL2V2ZW50dHlwZS5qcyc7XG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogQmFzZSBjbGFzcyBmb3IgdGlsZXMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAYWJzdHJhY3RcbiAqIEBleHRlbmRzIHtvbC5ldmVudHMuRXZlbnRUYXJnZXR9XG4gKiBAcGFyYW0ge29sLlRpbGVDb29yZH0gdGlsZUNvb3JkIFRpbGUgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7b2wuVGlsZVN0YXRlfSBzdGF0ZSBTdGF0ZS5cbiAqIEBwYXJhbSB7b2x4LlRpbGVPcHRpb25zPX0gb3B0X29wdGlvbnMgVGlsZSBvcHRpb25zLlxuICovXG52YXIgX29sX1RpbGVfID0gZnVuY3Rpb24odGlsZUNvb3JkLCBzdGF0ZSwgb3B0X29wdGlvbnMpIHtcbiAgX29sX2V2ZW50c19FdmVudFRhcmdldF8uY2FsbCh0aGlzKTtcblxuICB2YXIgb3B0aW9ucyA9IG9wdF9vcHRpb25zID8gb3B0X29wdGlvbnMgOiB7fTtcblxuICAvKipcbiAgICogQHR5cGUge29sLlRpbGVDb29yZH1cbiAgICovXG4gIHRoaXMudGlsZUNvb3JkID0gdGlsZUNvb3JkO1xuXG4gIC8qKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEB0eXBlIHtvbC5UaWxlU3RhdGV9XG4gICAqL1xuICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgLyoqXG4gICAqIEFuIFwiaW50ZXJpbVwiIHRpbGUgZm9yIHRoaXMgdGlsZS4gVGhlIGludGVyaW0gdGlsZSBtYXkgYmUgdXNlZCB3aGlsZSB0aGlzXG4gICAqIG9uZSBpcyBsb2FkaW5nLCBmb3IgXCJzbW9vdGhcIiB0cmFuc2l0aW9ucyB3aGVuIGNoYW5naW5nIHBhcmFtcy9kaW1lbnNpb25zXG4gICAqIG9uIHRoZSBzb3VyY2UuXG4gICAqIEB0eXBlIHtvbC5UaWxlfVxuICAgKi9cbiAgdGhpcy5pbnRlcmltVGlsZSA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEEga2V5IGFzc2lnbmVkIHRvIHRoZSB0aWxlLiBUaGlzIGlzIHVzZWQgYnkgdGhlIHRpbGUgc291cmNlIHRvIGRldGVybWluZVxuICAgKiBpZiB0aGlzIHRpbGUgY2FuIGVmZmVjdGl2ZWx5IGJlIHVzZWQsIG9yIGlmIGEgbmV3IHRpbGUgc2hvdWxkIGJlIGNyZWF0ZWRcbiAgICogYW5kIHRoaXMgb25lIGJlIHVzZWQgYXMgYW4gaW50ZXJpbSB0aWxlIGZvciB0aGlzIG5ldyB0aWxlLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgdGhpcy5rZXkgPSAnJztcblxuICAvKipcbiAgICogVGhlIGR1cmF0aW9uIGZvciB0aGUgb3BhY2l0eSB0cmFuc2l0aW9uLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgdGhpcy50cmFuc2l0aW9uXyA9IG9wdGlvbnMudHJhbnNpdGlvbiA9PT0gdW5kZWZpbmVkID9cbiAgICAyNTAgOiBvcHRpb25zLnRyYW5zaXRpb247XG5cbiAgLyoqXG4gICAqIExvb2t1cCBvZiBzdGFydCB0aW1lcyBmb3IgcmVuZGVyaW5nIHRyYW5zaXRpb25zLiAgSWYgdGhlIHN0YXJ0IHRpbWUgaXNcbiAgICogZXF1YWwgdG8gLTEsIHRoZSB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlLlxuICAgKiBAdHlwZSB7T2JqZWN0LjxudW1iZXIsIG51bWJlcj59XG4gICAqL1xuICB0aGlzLnRyYW5zaXRpb25TdGFydHNfID0ge307XG5cbn07XG5cbl9vbF8uaW5oZXJpdHMoX29sX1RpbGVfLCBfb2xfZXZlbnRzX0V2ZW50VGFyZ2V0Xyk7XG5cblxuLyoqXG4gKiBAcHJvdGVjdGVkXG4gKi9cbl9vbF9UaWxlXy5wcm90b3R5cGUuY2hhbmdlZCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoX29sX2V2ZW50c19FdmVudFR5cGVfLkNIQU5HRSk7XG59O1xuXG5cbi8qKlxuICogQHJldHVybiB7c3RyaW5nfSBLZXkuXG4gKi9cbl9vbF9UaWxlXy5wcm90b3R5cGUuZ2V0S2V5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmtleSArICcvJyArIHRoaXMudGlsZUNvb3JkO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGludGVyaW0gdGlsZSBtb3N0IHN1aXRhYmxlIGZvciByZW5kZXJpbmcgdXNpbmcgdGhlIGNoYWluIG9mIGludGVyaW1cbiAqIHRpbGVzLiBUaGlzIGNvcnJlc3BvbmRzIHRvIHRoZSAgbW9zdCByZWNlbnQgdGlsZSB0aGF0IGhhcyBiZWVuIGxvYWRlZCwgaWYgbm9cbiAqIHN1Y2ggdGlsZSBleGlzdHMsIHRoZSBvcmlnaW5hbCB0aWxlIGlzIHJldHVybmVkLlxuICogQHJldHVybiB7IW9sLlRpbGV9IEJlc3QgdGlsZSBmb3IgcmVuZGVyaW5nLlxuICovXG5fb2xfVGlsZV8ucHJvdG90eXBlLmdldEludGVyaW1UaWxlID0gZnVuY3Rpb24oKSB7XG4gIGlmICghdGhpcy5pbnRlcmltVGlsZSkge1xuICAgIC8vZW1wdHkgY2hhaW5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB2YXIgdGlsZSA9IHRoaXMuaW50ZXJpbVRpbGU7XG5cbiAgLy8gZmluZCB0aGUgZmlyc3QgbG9hZGVkIHRpbGUgYW5kIHJldHVybiBpdC4gU2luY2UgdGhlIGNoYWluIGlzIHNvcnRlZCBpblxuICAvLyBkZWNyZWFzaW5nIG9yZGVyIG9mIGNyZWF0aW9uIHRpbWUsIHRoZXJlIGlzIG5vIG5lZWQgdG8gc2VhcmNoIHRoZSByZW1haW5kZXJcbiAgLy8gb2YgdGhlIGxpc3QgKGFsbCB0aG9zZSB0aWxlcyBjb3JyZXNwb25kIHRvIG9sZGVyIHJlcXVlc3RzIGFuZCB3aWxsIGJlXG4gIC8vIGNsZWFuZWQgdXAgYnkgcmVmcmVzaEludGVyaW1DaGFpbilcbiAgZG8ge1xuICAgIGlmICh0aWxlLmdldFN0YXRlKCkgPT0gX29sX1RpbGVTdGF0ZV8uTE9BREVEKSB7XG4gICAgICByZXR1cm4gdGlsZTtcbiAgICB9XG4gICAgdGlsZSA9IHRpbGUuaW50ZXJpbVRpbGU7XG4gIH0gd2hpbGUgKHRpbGUpO1xuXG4gIC8vIHdlIGNhbiBub3QgZmluZCBhIGJldHRlciB0aWxlXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBHb2VzIHRocm91Z2ggdGhlIGNoYWluIG9mIGludGVyaW0gdGlsZXMgYW5kIGRpc2NhcmRzIHNlY3Rpb25zIG9mIHRoZSBjaGFpblxuICogdGhhdCBhcmUgbm8gbG9uZ2VyIHJlbGV2YW50LlxuICovXG5fb2xfVGlsZV8ucHJvdG90eXBlLnJlZnJlc2hJbnRlcmltQ2hhaW4gPSBmdW5jdGlvbigpIHtcbiAgaWYgKCF0aGlzLmludGVyaW1UaWxlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHRpbGUgPSB0aGlzLmludGVyaW1UaWxlO1xuICB2YXIgcHJldiA9IHRoaXM7XG5cbiAgZG8ge1xuICAgIGlmICh0aWxlLmdldFN0YXRlKCkgPT0gX29sX1RpbGVTdGF0ZV8uTE9BREVEKSB7XG4gICAgICAvL3dlIGhhdmUgYSBsb2FkZWQgdGlsZSwgd2UgY2FuIGRpc2NhcmQgdGhlIHJlc3Qgb2YgdGhlIGxpc3RcbiAgICAgIC8vd2Ugd291bGQgY291bGQgYWJvcnQgYW55IExPQURJTkcgdGlsZSByZXF1ZXN0XG4gICAgICAvL29sZGVyIHRoYW4gdGhpcyB0aWxlIChpLmUuIGFueSBMT0FESU5HIHRpbGUgZm9sbG93aW5nIHRoaXMgZW50cnkgaW4gdGhlIGNoYWluKVxuICAgICAgdGlsZS5pbnRlcmltVGlsZSA9IG51bGw7XG4gICAgICBicmVhaztcbiAgICB9IGVsc2UgaWYgKHRpbGUuZ2V0U3RhdGUoKSA9PSBfb2xfVGlsZVN0YXRlXy5MT0FESU5HKSB7XG4gICAgICAvL2tlZXAgdGhpcyBMT0FESU5HIHRpbGUgYW55IGxvYWRlZCB0aWxlcyBsYXRlciBpbiB0aGUgY2hhaW4gYXJlXG4gICAgICAvL29sZGVyIHRoYW4gdGhpcyB0aWxlLCBzbyB3ZSdyZSBzdGlsbCBpbnRlcmVzdGVkIGluIHRoZSByZXF1ZXN0XG4gICAgICBwcmV2ID0gdGlsZTtcbiAgICB9IGVsc2UgaWYgKHRpbGUuZ2V0U3RhdGUoKSA9PSBfb2xfVGlsZVN0YXRlXy5JRExFKSB7XG4gICAgICAvL3RoZSBoZWFkIG9mIHRoZSBsaXN0IGlzIHRoZSBtb3N0IGN1cnJlbnQgdGlsZSwgd2UgZG9uJ3QgbmVlZFxuICAgICAgLy90byBzdGFydCBhbnkgb3RoZXIgcmVxdWVzdHMgZm9yIHRoaXMgY2hhaW5cbiAgICAgIHByZXYuaW50ZXJpbVRpbGUgPSB0aWxlLmludGVyaW1UaWxlO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmV2ID0gdGlsZTtcbiAgICB9XG4gICAgdGlsZSA9IHByZXYuaW50ZXJpbVRpbGU7XG4gIH0gd2hpbGUgKHRpbGUpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHRpbGUgY29vcmRpbmF0ZSBmb3IgdGhpcyB0aWxlLlxuICogQHJldHVybiB7b2wuVGlsZUNvb3JkfSBUaGUgdGlsZSBjb29yZGluYXRlLlxuICogQGFwaVxuICovXG5fb2xfVGlsZV8ucHJvdG90eXBlLmdldFRpbGVDb29yZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy50aWxlQ29vcmQ7XG59O1xuXG5cbi8qKlxuICogQHJldHVybiB7b2wuVGlsZVN0YXRlfSBTdGF0ZS5cbiAqL1xuX29sX1RpbGVfLnByb3RvdHlwZS5nZXRTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5zdGF0ZTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtvbC5UaWxlU3RhdGV9IHN0YXRlIFN0YXRlLlxuICovXG5fb2xfVGlsZV8ucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICB0aGlzLmNoYW5nZWQoKTtcbn07XG5cbi8qKlxuICogTG9hZCB0aGUgaW1hZ2Ugb3IgcmV0cnkgaWYgbG9hZGluZyBwcmV2aW91c2x5IGZhaWxlZC5cbiAqIExvYWRpbmcgaXMgdGFrZW4gY2FyZSBvZiBieSB0aGUgdGlsZSBxdWV1ZSwgYW5kIGNhbGxpbmcgdGhpcyBtZXRob2QgaXNcbiAqIG9ubHkgbmVlZGVkIGZvciBwcmVsb2FkaW5nIG9yIGZvciByZWxvYWRpbmcgaW4gY2FzZSBvZiBhbiBlcnJvci5cbiAqIEBhYnN0cmFjdFxuICogQGFwaVxuICovXG5fb2xfVGlsZV8ucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbigpIHt9O1xuXG4vKipcbiAqIEdldCB0aGUgYWxwaGEgdmFsdWUgZm9yIHJlbmRlcmluZy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpZCBBbiBpZCBmb3IgdGhlIHJlbmRlcmVyLlxuICogQHBhcmFtIHtudW1iZXJ9IHRpbWUgVGhlIHJlbmRlciBmcmFtZSB0aW1lLlxuICogQHJldHVybiB7bnVtYmVyfSBBIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEuXG4gKi9cbl9vbF9UaWxlXy5wcm90b3R5cGUuZ2V0QWxwaGEgPSBmdW5jdGlvbihpZCwgdGltZSkge1xuICBpZiAoIXRoaXMudHJhbnNpdGlvbl8pIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHZhciBzdGFydCA9IHRoaXMudHJhbnNpdGlvblN0YXJ0c19baWRdO1xuICBpZiAoIXN0YXJ0KSB7XG4gICAgc3RhcnQgPSB0aW1lO1xuICAgIHRoaXMudHJhbnNpdGlvblN0YXJ0c19baWRdID0gc3RhcnQ7XG4gIH0gZWxzZSBpZiAoc3RhcnQgPT09IC0xKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgZGVsdGEgPSB0aW1lIC0gc3RhcnQgKyAoMTAwMCAvIDYwKTsgLy8gYXZvaWQgcmVuZGVyaW5nIGF0IDBcbiAgaWYgKGRlbHRhID49IHRoaXMudHJhbnNpdGlvbl8pIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICByZXR1cm4gX29sX2Vhc2luZ18uZWFzZUluKGRlbHRhIC8gdGhpcy50cmFuc2l0aW9uXyk7XG59O1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHRpbGUgaXMgaW4gYW4gYWxwaGEgdHJhbnNpdGlvbi4gIEEgdGlsZSBpcyBjb25zaWRlcmVkIGluXG4gKiB0cmFuc2l0aW9uIGlmIHRpbGUuZ2V0QWxwaGEoKSBoYXMgbm90IHlldCBiZWVuIGNhbGxlZCBvciBoYXMgYmVlbiBjYWxsZWRcbiAqIGFuZCByZXR1cm5lZCAxLlxuICogQHBhcmFtIHtudW1iZXJ9IGlkIEFuIGlkIGZvciB0aGUgcmVuZGVyZXIuXG4gKiBAcmV0dXJuIHtib29sZWFufSBUaGUgdGlsZSBpcyBpbiB0cmFuc2l0aW9uLlxuICovXG5fb2xfVGlsZV8ucHJvdG90eXBlLmluVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKGlkKSB7XG4gIGlmICghdGhpcy50cmFuc2l0aW9uXykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdGhpcy50cmFuc2l0aW9uU3RhcnRzX1tpZF0gIT09IC0xO1xufTtcblxuLyoqXG4gKiBNYXJrIGEgdHJhbnNpdGlvbiBhcyBjb21wbGV0ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpZCBBbiBpZCBmb3IgdGhlIHJlbmRlcmVyLlxuICovXG5fb2xfVGlsZV8ucHJvdG90eXBlLmVuZFRyYW5zaXRpb24gPSBmdW5jdGlvbihpZCkge1xuICBpZiAodGhpcy50cmFuc2l0aW9uXykge1xuICAgIHRoaXMudHJhbnNpdGlvblN0YXJ0c19baWRdID0gLTE7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBfb2xfVGlsZV87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC90aWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgX29sXyBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCBfb2xfc3RydWN0c19MUlVDYWNoZV8gZnJvbSAnLi9zdHJ1Y3RzL2xydWNhY2hlLmpzJztcbmltcG9ydCBfb2xfdGlsZWNvb3JkXyBmcm9tICcuL3RpbGVjb29yZC5qcyc7XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAZXh0ZW5kcyB7b2wuc3RydWN0cy5MUlVDYWNoZS48b2wuVGlsZT59XG4gKiBAcGFyYW0ge251bWJlcj19IG9wdF9oaWdoV2F0ZXJNYXJrIEhpZ2ggd2F0ZXIgbWFyay5cbiAqIEBzdHJ1Y3RcbiAqL1xudmFyIF9vbF9UaWxlQ2FjaGVfID0gZnVuY3Rpb24ob3B0X2hpZ2hXYXRlck1hcmspIHtcblxuICBfb2xfc3RydWN0c19MUlVDYWNoZV8uY2FsbCh0aGlzLCBvcHRfaGlnaFdhdGVyTWFyayk7XG5cbn07XG5cbl9vbF8uaW5oZXJpdHMoX29sX1RpbGVDYWNoZV8sIF9vbF9zdHJ1Y3RzX0xSVUNhY2hlXyk7XG5cblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBvbC5UaWxlUmFuZ2U+fSB1c2VkVGlsZXMgVXNlZCB0aWxlcy5cbiAqL1xuX29sX1RpbGVDYWNoZV8ucHJvdG90eXBlLmV4cGlyZUNhY2hlID0gZnVuY3Rpb24odXNlZFRpbGVzKSB7XG4gIHZhciB0aWxlLCB6S2V5O1xuICB3aGlsZSAodGhpcy5jYW5FeHBpcmVDYWNoZSgpKSB7XG4gICAgdGlsZSA9IHRoaXMucGVla0xhc3QoKTtcbiAgICB6S2V5ID0gdGlsZS50aWxlQ29vcmRbMF0udG9TdHJpbmcoKTtcbiAgICBpZiAoektleSBpbiB1c2VkVGlsZXMgJiYgdXNlZFRpbGVzW3pLZXldLmNvbnRhaW5zKHRpbGUudGlsZUNvb3JkKSkge1xuICAgICAgYnJlYWs7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9wKCkuZGlzcG9zZSgpO1xuICAgIH1cbiAgfVxufTtcblxuXG4vKipcbiAqIFBydW5lIGFsbCB0aWxlcyBmcm9tIHRoZSBjYWNoZSB0aGF0IGRvbid0IGhhdmUgdGhlIHNhbWUgeiBhcyB0aGUgbmV3ZXN0IHRpbGUuXG4gKi9cbl9vbF9UaWxlQ2FjaGVfLnByb3RvdHlwZS5wcnVuZUV4Y2VwdE5ld2VzdFogPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuZ2V0Q291bnQoKSA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIga2V5ID0gdGhpcy5wZWVrRmlyc3RLZXkoKTtcbiAgdmFyIHRpbGVDb29yZCA9IF9vbF90aWxlY29vcmRfLmZyb21LZXkoa2V5KTtcbiAgdmFyIHogPSB0aWxlQ29vcmRbMF07XG4gIHRoaXMuZm9yRWFjaChmdW5jdGlvbih0aWxlKSB7XG4gICAgaWYgKHRpbGUudGlsZUNvb3JkWzBdICE9PSB6KSB7XG4gICAgICB0aGlzLnJlbW92ZShfb2xfdGlsZWNvb3JkXy5nZXRLZXkodGlsZS50aWxlQ29vcmQpKTtcbiAgICAgIHRpbGUuZGlzcG9zZSgpO1xuICAgIH1cbiAgfSwgdGhpcyk7XG59O1xuZXhwb3J0IGRlZmF1bHQgX29sX1RpbGVDYWNoZV87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC90aWxlY2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHZlbG9jaXR5bGF5ZXJfMSA9IHJlcXVpcmUoXCIuL3ZlbG9jaXR5bGF5ZXJcIik7XG52YXIgY2FudmFzQm91bmRfMSA9IHJlcXVpcmUoXCIuL2NhbnZhc0JvdW5kXCIpO1xudmFyIG1hcEJvdW5kXzEgPSByZXF1aXJlKFwiLi9tYXBCb3VuZFwiKTtcbnZhciB3aW5keV8xID0gcmVxdWlyZShcIi4vd2luZHlcIik7XG4vLyBpbXBvcnQgQ2FudmFzTGF5ZXIgZnJvbSBcIi4vTC5DYW52YXNMYXllclwiO1xuLy8gaW1wb3J0IFZlbG9jaXR5TGF5ZXIgZnJvbSBcIi4vTC5WZWxvY2l0eUxheWVyXCI7XG4vLyBpbXBvcnQgVmVsb2NpdHlDb250cm9sIGZyb20gJy4vTC5Db250cm9sVmVsb2NpdHknO1xud2luZG93LlZlbG9jaXR5TGF5ZXIgPSB2ZWxvY2l0eWxheWVyXzEuZGVmYXVsdDtcbndpbmRvdy5DYW52YXNCb3VuZCA9IGNhbnZhc0JvdW5kXzEuZGVmYXVsdDtcbndpbmRvdy5NYXBCb3VuZCA9IG1hcEJvdW5kXzEuZGVmYXVsdDtcbndpbmRvdy5XaW5keSA9IHdpbmR5XzEuZGVmYXVsdDtcbnZhciB0ZXN0bGF5ZXJfMSA9IHJlcXVpcmUoXCIuL3Rlc3RsYXllclwiKTtcbndpbmRvdy5UZXN0TGF5ZXIgPSB0ZXN0bGF5ZXJfMS5kZWZhdWx0O1xuLy8gZGVjbGFyZSB2YXIgTDogYW55O1xuLy8gTC5DYW52YXNMYXllciA9IChMLkxheWVyID8gTC5MYXllciA6IEwuQ2xhc3MpLmV4dGVuZChuZXcgQ2FudmFzTGF5ZXIoKSk7XG4vLyBMLmNhbnZhc0xheWVyID0gZnVuY3Rpb24gKCkge1xuLy8gXHRyZXR1cm4gbmV3IEwuQ2FudmFzTGF5ZXIoKTtcbi8vIH07XG4vLyBMLkNvbnRyb2xWZWxvY2l0eSA9IChMLkNvbnRyb2wpLmV4dGVuZChuZXcgVmVsb2NpdHlDb250cm9sKCkpO1xuLy8gTC5jb250cm9sVmVsb2NpdHkgPSBmdW5jdGlvbigpIHtcbi8vICAgcmV0dXJuIG5ldyBMLkNvbnRyb2xWZWxvY2l0eSgpO1xuLy8gfTtcbi8vIEwuVmVsb2NpdHlMYXllciA9IChMLkxheWVyID8gTC5MYXllciA6IEwuQ2xhc3MpLmV4dGVuZChuZXcgVmVsb2NpdHlMYXllcigpKTtcbi8vIEwudmVsb2NpdHlMYXllciA9IGZ1bmN0aW9uKG9wdGlvbnM6IGFueSkge1xuLy8gXHRyZXR1cm4gbmV3IEwuVmVsb2NpdHlMYXllcihvcHRpb25zKTtcbi8vIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgd2luZHlfMSA9IHJlcXVpcmUoXCIuL3dpbmR5XCIpO1xudmFyIGNhbnZhc0JvdW5kXzEgPSByZXF1aXJlKFwiLi9jYW52YXNCb3VuZFwiKTtcbnZhciBtYXBCb3VuZF8xID0gcmVxdWlyZShcIi4vbWFwQm91bmRcIik7XG52YXIgbGF5ZXJfMSA9IHJlcXVpcmUoXCIuL2xheWVyXCIpO1xudmFyIGltYWdlXzEgPSByZXF1aXJlKFwib2wvbGF5ZXIvaW1hZ2VcIik7XG52YXIgaW1hZ2VjYW52YXNfMSA9IHJlcXVpcmUoXCJvbC9zb3VyY2UvaW1hZ2VjYW52YXNcIik7XG52YXIgcHJvaiA9IHJlcXVpcmUoJ29sL3Byb2onKS5kZWZhdWx0O1xuLy8gRml4OiBodHRwczovL2dpdGh1Yi5jb20vb3BlbmxheWVycy9vcGVubGF5ZXJzL2lzc3Vlcy84MDM3XG4vL2ltcG9ydCB7IHRyYW5zZm9ybUV4dGVudCB9IGZyb20gJ29sL3Byb2onO1xuLy8gaW1wb3J0IENhbnZhc0xheWVyIGZyb20gJy4vTC5DYW52YXNMYXllcic7XG4vLyBpbXBvcnQgVmVsb2NpdHlDb250cm9sIGZyb20gJy4vTC5Db250cm9sVmVsb2NpdHknXG4vLyBkZWNsYXJlIHZhciBMOiBhbnk7XG4vLyBjb25zdCBMX0NhbnZhc0xheWVyID0gKEwuTGF5ZXIgPyBMLkxheWVyIDogTC5DbGFzcykuZXh0ZW5kKG5ldyBDYW52YXNMYXllcigpKTtcbi8vIGNvbnN0IExfY2FudmFzTGF5ZXIgPSBmdW5jdGlvbigpIHtcbi8vICAgcmV0dXJuIG5ldyBMX0NhbnZhc0xheWVyKCk7XG4vLyB9O1xuLy8gY29uc3QgTF9Db250cm9sVmVsb2NpdHkgPSAoTC5Db250cm9sKS5leHRlbmQobmV3IFZlbG9jaXR5Q29udHJvbCk7XG4vLyBjb25zdCBMX2NvbnRyb2xWZWxvY2l0eSA9IGZ1bmN0aW9uKCkge1xuLy8gICByZXR1cm4gbmV3IExfQ29udHJvbFZlbG9jaXR5KCk7XG4vLyB9O1xudmFyIFZlbG9jaXR5TGF5ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVmVsb2NpdHlMYXllcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX21hcCA9IG51bGw7XG4gICAgICAgIHRoaXMuX2NhbnZhcyA9IG51bGw7XG4gICAgICAgIHRoaXMuX2NhbnZhc0xheWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd2luZHkgPSBudWxsO1xuICAgICAgICB0aGlzLl9jb250ZXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZGlzcGxheVRpbWVvdXQgPSAwO1xuICAgICAgICB0aGlzLl9tb3VzZUNvbnRyb2wgPSBudWxsO1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdWZWxvY2l0eUxheWVyLmNvbnN0cnVjdG9yJyk7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGRpc3BsYXlWYWx1ZXM6IHRydWUsXG4gICAgICAgICAgICBkaXNwbGF5T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHZlbG9jaXR5VHlwZTogJ1ZlbG9jaXR5JyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbWxlZnQnLFxuICAgICAgICAgICAgICAgIGVtcHR5U3RyaW5nOiAnTm8gdmVsb2NpdHkgZGF0YScsXG4gICAgICAgICAgICAgICAgYW5nbGVDb252ZW50aW9uOiAnYmVhcmluZ0NDVycsXG4gICAgICAgICAgICAgICAgc3BlZWRVbml0OiAnbS9zJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1heFZlbG9jaXR5OiAxMCxcbiAgICAgICAgICAgIGNvbG9yU2NhbGU6IG51bGwsXG4gICAgICAgICAgICBkYXRhOiBudWxsXG4gICAgICAgIH07XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaW5pdGlhbGl6ZShvcHRpb25zOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnVmVsb2NpdHlMYXllci5pbml0aWFsaXplJyk7XG4gICAgICAgIGZvciAodmFyIGkgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zW2ldID0gb3B0aW9uc1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBWZWxvY2l0eUxheWVyLnByb3RvdHlwZS5fY2FudmFzRnVuY3Rpb24gPSBmdW5jdGlvbiAoZXh0ZW50LCByZXNvbHV0aW9uLCBwaXhlbFJhdGlvLCBzaXplLCBwcm9qZWN0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ1ZlbG9jaXR5TGF5ZXIuY2FudmFzRnVuY3Rpb24nKTtcbiAgICAgICAgLy8gdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB0aGlzLl9jYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHNpemVbMF0pO1xuICAgICAgICB0aGlzLl9jYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBzaXplWzFdKTtcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAvLyBDYW52YXMgZXh0ZW50IGlzIGRpZmZlcmVudCB0aGFuIG1hcCBleHRlbnQsIHNvIGNvbXB1dGUgZGVsdGEgYmV0d2VlbiBcbiAgICAgICAgLy8gbGVmdC10b3Agb2YgbWFwIGFuZCBjYW52YXMgZXh0ZW50LlxuICAgICAgICAvLyB2YXIgbWFwRXh0ZW50ID0gbWFwLmdldFZpZXcoKS5jYWxjdWxhdGVFeHRlbnQobWFwLmdldFNpemUoKSlcbiAgICAgICAgLy8gdmFyIGNhbnZhc09yaWdpbiA9IG1hcC5nZXRQaXhlbEZyb21Db29yZGluYXRlKFtleHRlbnRbMF0sIGV4dGVudFszXV0pO1xuICAgICAgICAvLyB2YXIgbWFwT3JpZ2luID0gbWFwLmdldFBpeGVsRnJvbUNvb3JkaW5hdGUoW21hcEV4dGVudFswXSwgbWFwRXh0ZW50WzNdXSk7XG4gICAgICAgIC8vIHZhciBkZWx0YSA9IFttYXBPcmlnaW5bMF0tY2FudmFzT3JpZ2luWzBdLCBtYXBPcmlnaW5bMV0tY2FudmFzT3JpZ2luWzFdXVxuICAgICAgICByZXR1cm4gdGhpcy5fY2FudmFzO1xuICAgIH07XG4gICAgVmVsb2NpdHlMYXllci5wcm90b3R5cGUuZ2V0TWFwTGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ1ZlbG9jaXR5TGF5ZXIuZ2V0TWFwTGF5ZXInKTtcbiAgICAgICAgdGhpcy5fY2FudmFzID0gdGhpcy5fY2FudmFzIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdWZWxvY2l0eUxheWVyLmdldE1hcExheWVyIDEnKTtcbiAgICAgICAgdGhpcy5fY2FudmFzTGF5ZXIgPSB0aGlzLl9jYW52YXNMYXllciB8fCBuZXcgaW1hZ2VfMS5kZWZhdWx0KHtcbiAgICAgICAgICAgIHNvdXJjZTogbmV3IGltYWdlY2FudmFzXzEuZGVmYXVsdCh7XG4gICAgICAgICAgICAgICAgY2FudmFzRnVuY3Rpb246IHRoaXMuX2NhbnZhc0Z1bmN0aW9uLFxuICAgICAgICAgICAgICAgIHByb2plY3Rpb246ICdFUFNHOjM4NTcnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnVmVsb2NpdHlMYXllci5nZXRNYXBMYXllciByZXR1cm4nKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbnZhc0xheWVyO1xuICAgIH07XG4gICAgVmVsb2NpdHlMYXllci5wcm90b3R5cGUuYWRkVG9NYXAgPSBmdW5jdGlvbiAobWFwKSB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ1ZlbG9jaXR5TGF5ZXIuYWRkVG9NYXAnKTtcbiAgICAgICAgbWFwLmFkZExheWVyKHRoaXMuZ2V0TWFwTGF5ZXIoKSk7XG4gICAgICAgIHRoaXMuX21hcCA9IG1hcDtcbiAgICAgICAgdGhpcy5fZHJhd1dpbmR5KCk7XG4gICAgfTtcbiAgICBWZWxvY2l0eUxheWVyLnByb3RvdHlwZS5yZW1vdmVGcm9tTWFwID0gZnVuY3Rpb24gKG1hcCkge1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdWZWxvY2l0eUxheWVyLnJlbW92ZUZyb21NYXAnKTtcbiAgICAgICAgdGhpcy5fZGVzdHJveVdpbmQoKTtcbiAgICAgICAgbWFwLnJlbW92ZUxheWVyKHRoaXMuX2NhbnZhc0xheWVyKTtcbiAgICB9O1xuICAgIFZlbG9jaXR5TGF5ZXIucHJvdG90eXBlLnNldERhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdWZWxvY2l0eUxheWVyLnNldERhdGEnKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLmRhdGEgPSBkYXRhO1xuICAgICAgICBpZiAodGhpcy5fd2luZHkpIHtcbiAgICAgICAgICAgIHRoaXMuX3dpbmR5LnNldERhdGEoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLl9jbGVhckFuZFJlc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVmVsb2NpdHlMYXllci5wcm90b3R5cGUuX2luaXRXaW5keSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnVmVsb2NpdHlMYXllci5faW5pdFdpbmR5Jyk7XG4gICAgICAgIC8vIHdpbmR5IG9iamVjdCwgY29weSBvcHRpb25zXG4gICAgICAgIHZhciBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7IGNhbnZhczogdGhpcy5fY2FudmFzIH0sIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX3dpbmR5ID0gbmV3IHdpbmR5XzEuZGVmYXVsdChvcHRpb25zKTtcbiAgICAgICAgLy9UT0RPIDogRmlndXJlIG91dCB3aHkgdGhlIGV2ZW50IGlzIGNhbGxlZCBhZnRlciB0aGUgbGF5ZXIgaXMgcmVtb3ZlZFxuICAgICAgICB0aGlzLl9tYXAub24oJ2RyYWdzdGFydCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5fd2luZHkpXG4gICAgICAgICAgICAgICAgX3RoaXMuX3dpbmR5LnN0b3AoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX21hcC5vbignZHJhZ2VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLl9jbGVhckFuZFJlc3RhcnQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX21hcC5vbignem9vbXN0YXJ0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLl93aW5keSlcbiAgICAgICAgICAgICAgICBfdGhpcy5fd2luZHkuc3RvcCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fbWFwLm9uKCd6b29tZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuX2NsZWFyQW5kUmVzdGFydCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fbWFwLm9uKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5fY2xlYXJXaW5kKCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0aGlzLl9pbml0TW91c2VIYW5kbGVyKCk7XG4gICAgfTtcbiAgICAvLyBfaW5pdE1vdXNlSGFuZGxlcigpIHtcbiAgICAvLyAgIGlmICghdGhpcy5fbW91c2VDb250cm9sICYmIHRoaXMub3B0aW9ucy5kaXNwbGF5VmFsdWVzKSB7XG4gICAgLy8gICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLmRpc3BsYXlPcHRpb25zIHx8IHt9O1xuICAgIC8vICAgICBvcHRpb25zWydsZWFmbGV0VmVsb2NpdHknXSA9IHRoaXM7XG4gICAgLy8gICAgIHRoaXMuX21vdXNlQ29udHJvbCA9IExfY29udHJvbFZlbG9jaXR5KCk7XG4gICAgLy8gICAgIHRoaXMuX21vdXNlQ29udHJvbC5zZXRXaW5keSh0aGlzLl93aW5keSk7XG4gICAgLy8gICAgIHRoaXMuX21vdXNlQ29udHJvbC5zZXRPcHRpb25zKHRoaXMub3B0aW9ucy5kaXNwbGF5T3B0aW9ucyk7XG4gICAgLy8gICAgIHRoaXMuX21vdXNlQ29udHJvbC5hZGRUbyh0aGlzLl9tYXApO1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICBWZWxvY2l0eUxheWVyLnByb3RvdHlwZS5fc3RhcnRXaW5keSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnVmVsb2NpdHlMYXllci5fc3RhcnRXaW5keScpO1xuICAgICAgICB2YXIgbWFwU2l6ZSA9IHRoaXMuX21hcC5nZXRTaXplKCk7XG4gICAgICAgIHZhciBtYXBFeHRlbnQgPSB0aGlzLl9tYXAuZ2V0VmlldygpLmNhbGN1bGF0ZUV4dGVudChtYXBTaXplKTtcbiAgICAgICAgdmFyIGV4dGVudExMID0gcHJvai50cmFuc2Zvcm1FeHRlbnQobWFwRXh0ZW50LCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpO1xuICAgICAgICB0aGlzLl93aW5keS5zdGFydChuZXcgbGF5ZXJfMS5kZWZhdWx0KG5ldyBtYXBCb3VuZF8xLmRlZmF1bHQoZXh0ZW50TExbM10gLyAxODAgKiBNYXRoLlBJLCAvLyBtYXh5IChub3J0aClcbiAgICAgICAgZXh0ZW50TExbMl0gLyAxODAgKiBNYXRoLlBJLCAvLyBtYXh4IChlYXN0KVxuICAgICAgICBleHRlbnRMTFsxXSAvIDE4MCAqIE1hdGguUEksIC8vIG1pbnkgKHNvdXRoKVxuICAgICAgICBleHRlbnRMTFswXSAvIDE4MCAqIE1hdGguUEkgLy8gbWlueCAod2VzdClcbiAgICAgICAgKSwgbmV3IGNhbnZhc0JvdW5kXzEuZGVmYXVsdCgwLCAwLCBtYXBTaXplWzBdLCBtYXBTaXplWzFdKSkpO1xuICAgIH07XG4gICAgVmVsb2NpdHlMYXllci5wcm90b3R5cGUuX2RyYXdXaW5keSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnVmVsb2NpdHlMYXllci5fZHJhd1dpbmR5Jyk7XG4gICAgICAgIGlmICghdGhpcy5fd2luZHkpIHtcbiAgICAgICAgICAgIHRoaXMuX2luaXRXaW5keSgpO1xuICAgICAgICAgICAgdGhpcy5fZHJhd1dpbmR5KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnVmVsb2NpdHlMYXllci5fZHJhd1dpbmR5OiBubyBkYXRhIScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ1ZlbG9jaXR5TGF5ZXIuX2RyYXdXaW5keTogMScpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ1ZlbG9jaXR5TGF5ZXIuX2RyYXdXaW5keTogMicpO1xuICAgICAgICBpZiAodGhpcy5fZGlzcGxheVRpbWVvdXQpXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoc2VsZi5fZGlzcGxheVRpbWVvdXQpO1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdWZWxvY2l0eUxheWVyLl9kcmF3V2luZHk6IDMnKTtcbiAgICAgICAgdGhpcy5fZGlzcGxheVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ1ZlbG9jaXR5TGF5ZXIuX2RyYXdXaW5keTogNCcpO1xuICAgICAgICAgICAgc2VsZi5fc3RhcnRXaW5keSgpO1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnVmVsb2NpdHlMYXllci5fZHJhd1dpbmR5OiA1Jyk7XG4gICAgICAgIH0sIDE1MCk7IC8vIHNob3dpbmcgdmVsb2NpdHkgaXMgZGVsYXllZFxuICAgICAgICBjb25zb2xlLmRlYnVnKCdWZWxvY2l0eUxheWVyLl9kcmF3V2luZHk6IDYnKTtcbiAgICB9O1xuICAgIFZlbG9jaXR5TGF5ZXIucHJvdG90eXBlLl9jbGVhckFuZFJlc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ1ZlbG9jaXR5TGF5ZXIuX2NsZWFyQW5kUmVzdGFydCcpO1xuICAgICAgICBpZiAodGhpcy5fY29udGV4dClcbiAgICAgICAgICAgIHRoaXMuX2NvbnRleHQuY2xlYXJSZWN0KDAsIDAsIDMwMDAsIDMwMDApO1xuICAgICAgICBpZiAodGhpcy5fd2luZHkpXG4gICAgICAgICAgICB0aGlzLl9zdGFydFdpbmR5KCk7XG4gICAgfTtcbiAgICBWZWxvY2l0eUxheWVyLnByb3RvdHlwZS5fY2xlYXJXaW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdWZWxvY2l0eUxheWVyLl9jbGVhcldpbmQnKTtcbiAgICAgICAgaWYgKHRoaXMuX3dpbmR5KVxuICAgICAgICAgICAgdGhpcy5fd2luZHkuc3RvcCgpO1xuICAgICAgICBpZiAodGhpcy5fY29udGV4dClcbiAgICAgICAgICAgIHRoaXMuX2NvbnRleHQuY2xlYXJSZWN0KDAsIDAsIDMwMDAsIDMwMDApO1xuICAgIH07XG4gICAgVmVsb2NpdHlMYXllci5wcm90b3R5cGUuX2Rlc3Ryb3lXaW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdWZWxvY2l0eUxheWVyLl9kZXN0cm95V2luZCcpO1xuICAgICAgICBpZiAodGhpcy5fZGlzcGxheVRpbWVvdXQpXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGlzcGxheVRpbWVvdXQpO1xuICAgICAgICBpZiAodGhpcy5fd2luZHkpXG4gICAgICAgICAgICB0aGlzLl93aW5keS5zdG9wKCk7XG4gICAgICAgIGlmICh0aGlzLl9jb250ZXh0KVxuICAgICAgICAgICAgdGhpcy5fY29udGV4dC5jbGVhclJlY3QoMCwgMCwgMzAwMCwgMzAwMCk7XG4gICAgICAgIC8vIGlmICh0aGlzLl9tb3VzZUNvbnRyb2wpXG4gICAgICAgIC8vICAgdGhpcy5fbWFwLnJlbW92ZUNvbnRyb2wodGhpcy5fbW91c2VDb250cm9sKTtcbiAgICAgICAgLy8gdGhpcy5fbW91c2VDb250cm9sID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd2luZHkgPSBudWxsO1xuICAgICAgICAvLyB0aGlzLl9tYXAucmVtb3ZlTGF5ZXIodGhpcy5fY2FudmFzTGF5ZXIpO1xuICAgIH07XG4gICAgcmV0dXJuIFZlbG9jaXR5TGF5ZXI7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gVmVsb2NpdHlMYXllcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZlbG9jaXR5bGF5ZXIudHNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHZlY3Rvcl8xID0gcmVxdWlyZShcIi4vdmVjdG9yXCIpO1xudmFyIEdyaWQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gR3JpZChkYXRhLCDPhjAsIM67MCwgzpTPhiwgzpTOuywgaGVpZ2h0LCB3aWR0aCkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLs+GMCA9IM+GMDtcbiAgICAgICAgdGhpcy7OuzAgPSDOuzA7XG4gICAgICAgIHRoaXMuzpTOuyA9IM6Uzrs7XG4gICAgICAgIHRoaXMuzpTPhiA9IM6Uz4Y7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHcmlkLnByb3RvdHlwZSwgXCJ2YWx1ZVJhbmdlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzAsIDBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG1pbiA9IHRoaXMuZGF0YVswXS5pbnRlbnNpdHk7XG4gICAgICAgICAgICB2YXIgbWF4ID0gdGhpcy5kYXRhWzBdLmludGVuc2l0eTtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIG1pbiA9IE1hdGgubWluKG1pbiwgdmFsdWUuaW50ZW5zaXR5KTtcbiAgICAgICAgICAgICAgICBtYXggPSBNYXRoLm1heChtYXgsIHZhbHVlLmludGVuc2l0eSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBbbWluLCBtYXhdO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBHZXQgdmVjdG9yIGF0IGFueSBwb2ludFxuICAgICAqIEBwYXJhbSDOuyBMb25naXR1ZGVcbiAgICAgKiBAcGFyYW0gz4YgTGF0aXR1ZGVcbiAgICAgKi9cbiAgICBHcmlkLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAozrssIM+GKSB7XG4gICAgICAgIHZhciBmzrsgPSB0aGlzLmZsb29yTW9kKM67IC0gdGhpcy7OuzAsIDM2MCkgLyB0aGlzLs6Uzrs7IC8vIGNhbGN1bGF0ZSBsb25naXR1ZGUgaW5kZXggaW4gd3JhcHBlZCByYW5nZSBbMCwgMzYwKVxuICAgICAgICB2YXIgZs+GID0gKHRoaXMuz4YwIC0gz4YpIC8gdGhpcy7OlM+GOyAvLyBjYWxjdWxhdGUgbGF0aXR1ZGUgaW5kZXggaW4gZGlyZWN0aW9uICs5MCB0byAtOTBcbiAgICAgICAgdmFyIGnOuyA9IE1hdGguZmxvb3IoZs67KTsgLy8gY29sIG5cbiAgICAgICAgdmFyIGrOuyA9IGnOuyArIDE7IC8vIGNvbCBuKzFcbiAgICAgICAgaWYgKGrOuyA+PSB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICBqzrsgPSB0aGlzLs67MDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgac+GID0gTWF0aC5mbG9vcihmz4YpOyAvLyBsaW5lIG1cbiAgICAgICAgdmFyIGrPhiA9IGnPhiArIDE7IC8vIGxpbmUgbSsxXG4gICAgICAgIGlmIChqz4YgPj0gdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIGrPhiA9IGnPhjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgds67ID0gZs67IC0gac67OyAvLyBjb2wgdmFyaWF0aW9uIFswLi4xXVxuICAgICAgICB2YXIgds+GID0gZs+GIC0gac+GOyAvLyBsaW5lIHZhcmlhdGlvbiBbMC4uMV1cbiAgICAgICAgaWYgKGnOuyA+PSAwICYmIGnPhiA+PSAwICYmIGnOuyA8IHRoaXMud2lkdGggJiYgac+GIDwgdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHZhciBnMDAgPSB0aGlzLmRhdGFbac67ICsgac+GICogdGhpcy53aWR0aF07XG4gICAgICAgICAgICB2YXIgZzEwID0gdGhpcy5kYXRhW2rOuyArIGnPhiAqIHRoaXMud2lkdGhdO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWx1ZShnMDApICYmIHRoaXMuaXNWYWx1ZShnMTApKSB7XG4gICAgICAgICAgICAgICAgdmFyIGcwMSA9IHRoaXMuZGF0YVtpzrsgKyBqz4YgKiB0aGlzLndpZHRoXTtcbiAgICAgICAgICAgICAgICB2YXIgZzExID0gdGhpcy5kYXRhW2rOuyArIGrPhiAqIHRoaXMud2lkdGhdO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsdWUoZzAxKSAmJiB0aGlzLmlzVmFsdWUoZzExKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uKHbOuywgds+GLCBnMDAsIC8vbDBjMFxuICAgICAgICAgICAgICAgICAgICBnMTAsIC8vbDBjMVxuICAgICAgICAgICAgICAgICAgICBnMDEsIC8vbDFjMFxuICAgICAgICAgICAgICAgICAgICBnMTEgLy9sMWNsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgdmVjdG9yXzEuZGVmYXVsdCgwLCAwKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEludGVycG9sYXRlIHZhbHVlXG4gICAgICogQHBhcmFtIHggdmFyaWF0aW9uIGJldHdlZW4gZzAqIGFuZCBnMSpcbiAgICAgKiBAcGFyYW0geSB2YXJpYXRpb24gYmV0d2VlbiBnKjAgZGFucyBnKjFcbiAgICAgKiBAcGFyYW0gZzAwIHBvaW50IGF0IGNvbF8wIGFuZCBsaW5lXzBcbiAgICAgKiBAcGFyYW0gZzEwIHBvaW50IGF0IGNvbF8xIGFuZCBsaW5lXzBcbiAgICAgKiBAcGFyYW0gZzAxIHBvaW50IGF0IGNvbF8wIGFuZCBsaW5lXzFcbiAgICAgKiBAcGFyYW0gZzExIHBvaW50IGF0IGNvbF8xIGFuZCBsaW5lXzFcbiAgICAgKiBAcmV0dXJuIGludGVycG9sYXRlZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBHcmlkLnByb3RvdHlwZS5pbnRlcnBvbGF0aW9uID0gZnVuY3Rpb24gKHgsIHksIGcwMCwgZzEwLCBnMDEsIGcxMSkge1xuICAgICAgICB2YXIgcnggPSAoMSAtIHgpO1xuICAgICAgICB2YXIgcnkgPSAoMSAtIHkpO1xuICAgICAgICB2YXIgYSA9IHJ4ICogcnksIGIgPSB4ICogcnksIGMgPSByeCAqIHksIGQgPSB4ICogeTtcbiAgICAgICAgdmFyIHUgPSBnMDAudSAqIGEgKyBnMTAudSAqIGIgKyBnMDEudSAqIGMgKyBnMTEudSAqIGQ7XG4gICAgICAgIHZhciB2ID0gZzAwLnYgKiBhICsgZzEwLnYgKiBiICsgZzAxLnYgKiBjICsgZzExLnYgKiBkO1xuICAgICAgICByZXR1cm4gbmV3IHZlY3Rvcl8xLmRlZmF1bHQodSwgdik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDdXN0b20gbW9kdWxvXG4gICAgICogQHJldHVybnMge251bWJlcn0gcmV0dXJucyByZW1haW5kZXIgb2YgZmxvb3JlZCBkaXZpc2lvbiwgaS5lLiwgZmxvb3IoYSAvIG4pLiBVc2VmdWwgZm9yIGNvbnNpc3RlbnQgbW9kdWxvXG4gICAgICogICAgICAgICAgb2YgbmVnYXRpdmUgbnVtYmVycy4gU2VlIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTW9kdWxvX29wZXJhdGlvbi5cbiAgICAgKi9cbiAgICBHcmlkLnByb3RvdHlwZS5mbG9vck1vZCA9IGZ1bmN0aW9uIChhLCBuKSB7XG4gICAgICAgIHJldHVybiBhIC0gbiAqIE1hdGguZmxvb3IoYSAvIG4pO1xuICAgIH07XG4gICAgO1xuICAgIC8qKlxuICAgICAqIERldGVjdCBpZiB4IGlzIGEgdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzIG5vdCBudWxsIGFuZCBub3QgdW5kZWZpbmVkLlxuICAgICAqL1xuICAgIEdyaWQucHJvdG90eXBlLmlzVmFsdWUgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geCAhPT0gbnVsbCAmJiB4ICE9PSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICA7XG4gICAgcmV0dXJuIEdyaWQ7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gR3JpZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2dyaWQudHNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIENvbG9yU2NhbGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29sb3JTY2FsZShtaW5WYWx1ZSwgbWF4VmFsdWUsIHNjYWxlKSB7XG4gICAgICAgIHRoaXMuc2NhbGUgPSBbXG4gICAgICAgICAgICBcInJnYigzNiwxMDQsIDE4MClcIixcbiAgICAgICAgICAgIFwicmdiKDYwLDE1NywgMTk0KVwiLFxuICAgICAgICAgICAgXCJyZ2IoMTI4LDIwNSwxOTMgKVwiLFxuICAgICAgICAgICAgXCJyZ2IoMTUxLDIxOCwxNjggKVwiLFxuICAgICAgICAgICAgXCJyZ2IoMTk4LDIzMSwxODEpXCIsXG4gICAgICAgICAgICBcInJnYigyMzgsMjQ3LDIxNylcIixcbiAgICAgICAgICAgIFwicmdiKDI1NSwyMzgsMTU5KVwiLFxuICAgICAgICAgICAgXCJyZ2IoMjUyLDIxNywxMjUpXCIsXG4gICAgICAgICAgICBcInJnYigyNTUsMTgyLDEwMClcIixcbiAgICAgICAgICAgIFwicmdiKDI1MiwxNTAsNzUpXCIsXG4gICAgICAgICAgICBcInJnYigyNTAsMTEyLDUyKVwiLFxuICAgICAgICAgICAgXCJyZ2IoMjQ1LDY0LDMyKVwiLFxuICAgICAgICAgICAgXCJyZ2IoMjM3LDQ1LDI4KVwiLFxuICAgICAgICAgICAgXCJyZ2IoMjIwLDI0LDMyKVwiLFxuICAgICAgICAgICAgXCJyZ2IoMTgwLDAsMzUpXCJcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5zZXRNaW5NYXgobWluVmFsdWUsIG1heFZhbHVlKTtcbiAgICAgICAgaWYgKChzY2FsZSBpbnN0YW5jZW9mIEFycmF5KSAmJiBzY2FsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDb2xvclNjYWxlLnByb3RvdHlwZS5zZXRNaW5NYXggPSBmdW5jdGlvbiAobWluVmFsdWUsIG1heFZhbHVlKSB7XG4gICAgICAgIHRoaXMubWluVmFsdWUgPSBtaW5WYWx1ZTtcbiAgICAgICAgdGhpcy5tYXhWYWx1ZSA9IG1heFZhbHVlO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbG9yU2NhbGUucHJvdG90eXBlLCBcInNpemVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjYWxlLmxlbmd0aDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQ29sb3JTY2FsZS5wcm90b3R5cGUuZ2V0Q29sb3JJbmRleCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPD0gdGhpcy5taW5WYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID49IHRoaXMubWF4VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjYWxlLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5zY2FsZS5sZW5ndGggKiAodmFsdWUgLSB0aGlzLm1pblZhbHVlKSAvICh0aGlzLm1heFZhbHVlIC0gdGhpcy5taW5WYWx1ZSk7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA+IHRoaXMuc2NhbGUubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGUubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihpbmRleCk7XG4gICAgfTtcbiAgICBDb2xvclNjYWxlLnByb3RvdHlwZS5jb2xvckF0ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjYWxlW2luZGV4XTtcbiAgICB9O1xuICAgIENvbG9yU2NhbGUucHJvdG90eXBlLmdldENvbG9yID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjYWxlW3RoaXMuZ2V0Q29sb3JJbmRleCh2YWx1ZSldO1xuICAgIH07XG4gICAgcmV0dXJuIENvbG9yU2NhbGU7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gQ29sb3JTY2FsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbG9yU2NhbGUudHNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEFuaW1hdGlvbkJ1Y2tldCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBbmltYXRpb25CdWNrZXQoY29sb3JTY2FsZSkge1xuICAgICAgICB0aGlzLmJ1Y2tldHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb2xvclNjYWxlID0gY29sb3JTY2FsZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2xvclNjYWxlLnNpemU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5idWNrZXRzLnB1c2goW10pO1xuICAgICAgICB9XG4gICAgfVxuICAgIEFuaW1hdGlvbkJ1Y2tldC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYnVja2V0cy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJ0aWN1bGVTZXQpIHtcbiAgICAgICAgICAgIHBhcnRpY3VsZVNldC5zcGxpY2UoMCwgcGFydGljdWxlU2V0Lmxlbmd0aCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQW5pbWF0aW9uQnVja2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAocCwgdikge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNvbG9yU2NhbGUuZ2V0Q29sb3JJbmRleChwLmludGVuc2l0eSk7XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5idWNrZXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHAueHQgPSBwLnggKyB2LnU7XG4gICAgICAgIHAueXQgPSBwLnkgKyB2LnY7XG4gICAgICAgIHRoaXMuYnVja2V0c1tpbmRleF0ucHVzaChwKTtcbiAgICB9O1xuICAgIEFuaW1hdGlvbkJ1Y2tldC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChjb250ZXh0MkQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5idWNrZXRzLmZvckVhY2goZnVuY3Rpb24gKGJ1Y2tldCwgaSkge1xuICAgICAgICAgICAgaWYgKGJ1Y2tldC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dDJELmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQyRC5zdHJva2VTdHlsZSA9IF90aGlzLmNvbG9yU2NhbGUuY29sb3JBdChpKTtcbiAgICAgICAgICAgICAgICBidWNrZXQuZm9yRWFjaChmdW5jdGlvbiAocGFydGljbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDJELm1vdmVUbyhwYXJ0aWNsZS54LCBwYXJ0aWNsZS55KTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDJELmxpbmVUbyhwYXJ0aWNsZS54dCwgcGFydGljbGUueXQpO1xuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZS54ID0gcGFydGljbGUueHQ7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlLnkgPSBwYXJ0aWNsZS55dDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0MkQuc3Ryb2tlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEFuaW1hdGlvbkJ1Y2tldDtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBBbmltYXRpb25CdWNrZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hbmltYXRpb25CdWNrZXQudHNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFBhcnRpY3VsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQYXJ0aWN1bGUoeCwgeSwgbWF4QWdlKSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuYWdlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4QWdlKTtcbiAgICAgICAgdGhpcy5tYXhBZ2UgPSBtYXhBZ2U7XG4gICAgfVxuICAgIFBhcnRpY3VsZS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmFnZSA9IDA7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUGFydGljdWxlLnByb3RvdHlwZSwgXCJpc0RlYWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFnZSA+IHRoaXMubWF4QWdlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBQYXJ0aWN1bGUucHJvdG90eXBlLmdyb3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWdlKys7XG4gICAgfTtcbiAgICByZXR1cm4gUGFydGljdWxlO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFBhcnRpY3VsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3BhcnRpY2xlLnRzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBsYXllciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBsYXllcihtYXBCb3VuZCwgY2FudmFzQm91bmQpIHtcbiAgICAgICAgdGhpcy5jYW52YXNCb3VuZCA9IGNhbnZhc0JvdW5kO1xuICAgICAgICB0aGlzLm1hcEJvdW5kID0gbWFwQm91bmQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpbmQgZ2VvY29vcmRpbmF0ZSBmcm9tIGNhbnZhcyBwb2ludFxuICAgICAqIEBwYXJhbSB4XG4gICAgICogQHBhcmFtIHlcbiAgICAgKiByZXR1cm4gW2xuZywgbGF0XVxuICAgICAqL1xuICAgIGxheWVyLnByb3RvdHlwZS5jYW52YXNUb01hcCA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHZhciBtYXBMb25EZWx0YSA9IHRoaXMubWFwQm91bmQuZWFzdCAtIHRoaXMubWFwQm91bmQud2VzdDtcbiAgICAgICAgdmFyIHdvcmxkTWFwUmFkaXVzID0gKHRoaXMuY2FudmFzQm91bmQud2lkdGggLyB0aGlzLnJhZDJkZWcobWFwTG9uRGVsdGEpKSAqIDM2MCAvICgyICogTWF0aC5QSSk7XG4gICAgICAgIHZhciBtYXBPZmZzZXRZID0gKHdvcmxkTWFwUmFkaXVzIC8gMiAqIE1hdGgubG9nKCgxICsgTWF0aC5zaW4odGhpcy5tYXBCb3VuZC5zb3V0aCkpIC8gKDEgLSBNYXRoLnNpbih0aGlzLm1hcEJvdW5kLnNvdXRoKSkpKTtcbiAgICAgICAgdmFyIGVxdWF0b3JZID0gdGhpcy5jYW52YXNCb3VuZC5oZWlnaHQgKyBtYXBPZmZzZXRZO1xuICAgICAgICB2YXIgYSA9IChlcXVhdG9yWSAtIHkpIC8gd29ybGRNYXBSYWRpdXM7XG4gICAgICAgIHZhciDPhiA9IDE4MCAvIE1hdGguUEkgKiAoMiAqIE1hdGguYXRhbihNYXRoLmV4cChhKSkgLSBNYXRoLlBJIC8gMik7XG4gICAgICAgIHZhciDOuyA9IHRoaXMucmFkMmRlZyh0aGlzLm1hcEJvdW5kLndlc3QpICsgeCAvIHRoaXMuY2FudmFzQm91bmQud2lkdGggKiB0aGlzLnJhZDJkZWcobWFwTG9uRGVsdGEpO1xuICAgICAgICByZXR1cm4gW867LCDPhl07XG4gICAgfTtcbiAgICA7XG4gICAgbGF5ZXIucHJvdG90eXBlLm1lcmNZID0gZnVuY3Rpb24gKM+GKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmxvZyhNYXRoLnRhbijPhiAvIDIgKyBNYXRoLlBJIC8gNCkpO1xuICAgIH07XG4gICAgO1xuICAgIC8qKlxuICAgICAqIFByb2plY3QgYSBwb2ludCBvbiB0aGUgbWFwXG4gICAgICogQHBhcmFtIM67IExvbmdpdHVkZVxuICAgICAqIEBwYXJhbSDPhiBMYXRpdHVkZVxuICAgICAqIEByZXR1cm4gW3gsIHldXG4gICAgICovXG4gICAgbGF5ZXIucHJvdG90eXBlLm1hcFRvQ2FudmFzID0gZnVuY3Rpb24gKM67LCDPhikge1xuICAgICAgICB2YXIgeW1pbiA9IHRoaXMubWVyY1kodGhpcy5tYXBCb3VuZC5zb3V0aCk7XG4gICAgICAgIHZhciB5bWF4ID0gdGhpcy5tZXJjWSh0aGlzLm1hcEJvdW5kLm5vcnRoKTtcbiAgICAgICAgdmFyIHhGYWN0b3IgPSB0aGlzLmNhbnZhc0JvdW5kLndpZHRoIC8gKHRoaXMubWFwQm91bmQuZWFzdCAtIHRoaXMubWFwQm91bmQud2VzdCk7XG4gICAgICAgIHZhciB5RmFjdG9yID0gdGhpcy5jYW52YXNCb3VuZC5oZWlnaHQgLyAoeW1heCAtIHltaW4pO1xuICAgICAgICB2YXIgeSA9IHRoaXMubWVyY1kodGhpcy5kZWcycmFkKM+GKSk7XG4gICAgICAgIHZhciB4ID0gKHRoaXMuZGVnMnJhZCjOuykgLSB0aGlzLm1hcEJvdW5kLndlc3QpICogeEZhY3RvcjtcbiAgICAgICAgeSA9ICh5bWF4IC0geSkgKiB5RmFjdG9yO1xuICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgIH07XG4gICAgO1xuICAgIGxheWVyLnByb3RvdHlwZS5kZWcycmFkID0gZnVuY3Rpb24gKGRlZykge1xuICAgICAgICByZXR1cm4gZGVnICogTWF0aC5QSSAvIDE4MDtcbiAgICB9O1xuICAgIDtcbiAgICBsYXllci5wcm90b3R5cGUucmFkMmRlZyA9IGZ1bmN0aW9uIChyYWQpIHtcbiAgICAgICAgcmV0dXJuIHJhZCAqIDE4MCAvIE1hdGguUEk7XG4gICAgfTtcbiAgICA7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gzrsgTG9uZ2l0dWRlXG4gICAgICogQHBhcmFtIM+GIExhdGl0dWRlXG4gICAgICogQHBhcmFtIHhcbiAgICAgKiBAcGFyYW0geVxuICAgICAqIEByZXR1cm4gW11cbiAgICAgKi9cbiAgICBsYXllci5wcm90b3R5cGUuZGlzdG9ydGlvbiA9IGZ1bmN0aW9uICjOuywgz4YsIHgsIHkpIHtcbiAgICAgICAgdmFyIM+EID0gMiAqIE1hdGguUEk7XG4gICAgICAgIHZhciBIID0gTWF0aC5wb3coMTAsIC01LjIpO1xuICAgICAgICB2YXIgaM67ID0gzrsgPCAwID8gSCA6IC1IO1xuICAgICAgICB2YXIgaM+GID0gz4YgPCAwID8gSCA6IC1IO1xuICAgICAgICB2YXIgcM67ID0gdGhpcy5tYXBUb0NhbnZhcyjOuyArIGjOuywgz4YpO1xuICAgICAgICB2YXIgcM+GID0gdGhpcy5tYXBUb0NhbnZhcyjOuywgz4YgKyBoz4YpO1xuICAgICAgICAvLyBNZXJpZGlhbiBzY2FsZSBmYWN0b3IgKHNlZSBTbnlkZXIsIGVxdWF0aW9uIDQtMyksIHdoZXJlIFIgPSAxLiBUaGlzIGhhbmRsZXMgaXNzdWUgd2hlcmUgbGVuZ3RoIG9mIDHCuiDOu1xuICAgICAgICAvLyBjaGFuZ2VzIGRlcGVuZGluZyBvbiDPhi4gV2l0aG91dCB0aGlzLCB0aGVyZSBpcyBhIHBpbmNoaW5nIGVmZmVjdCBhdCB0aGUgcG9sZXMuXG4gICAgICAgIHZhciBrID0gTWF0aC5jb3Moz4YgLyAzNjAgKiDPhCk7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAocM67WzBdIC0geCkgLyBozrsgLyBrLFxuICAgICAgICAgICAgKHDOu1sxXSAtIHkpIC8gaM67IC8gayxcbiAgICAgICAgICAgIChwz4ZbMF0gLSB4KSAvIGjPhixcbiAgICAgICAgICAgIChwz4ZbMV0gLSB5KSAvIGjPhlxuICAgICAgICBdO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIGRpc3RvcnRpb24gb2YgdGhlIHdpbmQgdmVjdG9yIGNhdXNlZCBieSB0aGUgc2hhcGUgb2YgdGhlIHByb2plY3Rpb24gYXQgcG9pbnQgKHgsIHkpLiBUaGUgd2luZFxuICAgICAqIHZlY3RvciBpcyBtb2RpZmllZCBpbiBwbGFjZSBhbmQgcmV0dXJuZWQgYnkgdGhpcyBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0gzrtcbiAgICAgKiBAcGFyYW0gz4ZcbiAgICAgKiBAcGFyYW0geFxuICAgICAqIEBwYXJhbSB5XG4gICAgICogQHBhcmFtIHNjYWxlIHNjYWxlIGZhY3RvclxuICAgICAqIEBwYXJhbSB3aW5kIFt1LCB2XVxuICAgICAqIEByZXR1cm4gW11cbiAgICAgKi9cbiAgICBsYXllci5wcm90b3R5cGUuZGlzdG9ydCA9IGZ1bmN0aW9uICjOuywgz4YsIHgsIHksIHNjYWxlLCB3aW5kKSB7XG4gICAgICAgIHZhciB1ID0gd2luZC51ICogc2NhbGU7XG4gICAgICAgIHZhciB2ID0gd2luZC52ICogc2NhbGU7XG4gICAgICAgIHZhciBkID0gdGhpcy5kaXN0b3J0aW9uKM67LCDPhiwgeCwgeSk7XG4gICAgICAgIC8vIFNjYWxlIGRpc3RvcnRpb24gdmVjdG9ycyBieSB1IGFuZCB2LCB0aGVuIGFkZC5cbiAgICAgICAgd2luZC51ID0gZFswXSAqIHUgKyBkWzJdICogdjtcbiAgICAgICAgd2luZC52ID0gZFsxXSAqIHUgKyBkWzNdICogdjtcbiAgICAgICAgcmV0dXJuIHdpbmQ7XG4gICAgfTtcbiAgICByZXR1cm4gbGF5ZXI7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gbGF5ZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9sYXllci50c1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF9vbF8gZnJvbSAnLi4vaW5kZXguanMnO1xuaW1wb3J0IF9vbF9MYXllclR5cGVfIGZyb20gJy4uL2xheWVydHlwZS5qcyc7XG5pbXBvcnQgX29sX2xheWVyX0xheWVyXyBmcm9tICcuLi9sYXllci9sYXllci5qcyc7XG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogU2VydmVyLXJlbmRlcmVkIGltYWdlcyB0aGF0IGFyZSBhdmFpbGFibGUgZm9yIGFyYml0cmFyeSBleHRlbnRzIGFuZFxuICogcmVzb2x1dGlvbnMuXG4gKiBOb3RlIHRoYXQgYW55IHByb3BlcnR5IHNldCBpbiB0aGUgb3B0aW9ucyBpcyBzZXQgYXMgYSB7QGxpbmsgb2wuT2JqZWN0fVxuICogcHJvcGVydHkgb24gdGhlIGxheWVyIG9iamVjdDsgZm9yIGV4YW1wbGUsIHNldHRpbmcgYHRpdGxlOiAnTXkgVGl0bGUnYCBpbiB0aGVcbiAqIG9wdGlvbnMgbWVhbnMgdGhhdCBgdGl0bGVgIGlzIG9ic2VydmFibGUsIGFuZCBoYXMgZ2V0L3NldCBhY2Nlc3NvcnMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAZXh0ZW5kcyB7b2wubGF5ZXIuTGF5ZXJ9XG4gKiBAZmlyZXMgb2wucmVuZGVyLkV2ZW50XG4gKiBAcGFyYW0ge29seC5sYXllci5JbWFnZU9wdGlvbnM9fSBvcHRfb3B0aW9ucyBMYXllciBvcHRpb25zLlxuICogQGFwaVxuICovXG52YXIgX29sX2xheWVyX0ltYWdlXyA9IGZ1bmN0aW9uKG9wdF9vcHRpb25zKSB7XG4gIHZhciBvcHRpb25zID0gb3B0X29wdGlvbnMgPyBvcHRfb3B0aW9ucyA6IHt9O1xuICBfb2xfbGF5ZXJfTGF5ZXJfLmNhbGwodGhpcywgIC8qKiBAdHlwZSB7b2x4LmxheWVyLkxheWVyT3B0aW9uc30gKi8gKG9wdGlvbnMpKTtcblxuICAvKipcbiAgICogVGhlIGxheWVyIHR5cGUuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHR5cGUge29sLkxheWVyVHlwZX1cbiAgICovXG4gIHRoaXMudHlwZSA9IF9vbF9MYXllclR5cGVfLklNQUdFO1xuXG59O1xuXG5fb2xfLmluaGVyaXRzKF9vbF9sYXllcl9JbWFnZV8sIF9vbF9sYXllcl9MYXllcl8pO1xuXG5cbi8qKlxuICogUmV0dXJuIHRoZSBhc3NvY2lhdGVkIHtAbGluayBvbC5zb3VyY2UuSW1hZ2Ugc291cmNlfSBvZiB0aGUgaW1hZ2UgbGF5ZXIuXG4gKiBAZnVuY3Rpb25cbiAqIEByZXR1cm4ge29sLnNvdXJjZS5JbWFnZX0gU291cmNlLlxuICogQGFwaVxuICovXG5fb2xfbGF5ZXJfSW1hZ2VfLnByb3RvdHlwZS5nZXRTb3VyY2U7XG5leHBvcnQgZGVmYXVsdCBfb2xfbGF5ZXJfSW1hZ2VfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvbGF5ZXIvaW1hZ2UuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGVudW0ge3N0cmluZ31cbiAqL1xudmFyIF9vbF9PYmplY3RFdmVudFR5cGVfID0ge1xuICAvKipcbiAgICogVHJpZ2dlcmVkIHdoZW4gYSBwcm9wZXJ0eSBpcyBjaGFuZ2VkLlxuICAgKiBAZXZlbnQgb2wuT2JqZWN0LkV2ZW50I3Byb3BlcnR5Y2hhbmdlXG4gICAqIEBhcGlcbiAgICovXG4gIFBST1BFUlRZQ0hBTkdFOiAncHJvcGVydHljaGFuZ2UnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBfb2xfT2JqZWN0RXZlbnRUeXBlXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL29iamVjdGV2ZW50dHlwZS5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF9vbF8gZnJvbSAnLi9pbmRleC5qcyc7XG5pbXBvcnQgX29sX2V2ZW50c18gZnJvbSAnLi9ldmVudHMuanMnO1xuaW1wb3J0IF9vbF9ldmVudHNfRXZlbnRUYXJnZXRfIGZyb20gJy4vZXZlbnRzL2V2ZW50dGFyZ2V0LmpzJztcbmltcG9ydCBfb2xfZXZlbnRzX0V2ZW50VHlwZV8gZnJvbSAnLi9ldmVudHMvZXZlbnR0eXBlLmpzJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBBYnN0cmFjdCBiYXNlIGNsYXNzOyBub3JtYWxseSBvbmx5IHVzZWQgZm9yIGNyZWF0aW5nIHN1YmNsYXNzZXMgYW5kIG5vdFxuICogaW5zdGFudGlhdGVkIGluIGFwcHMuXG4gKiBBbiBldmVudCB0YXJnZXQgcHJvdmlkaW5nIGNvbnZlbmllbnQgbWV0aG9kcyBmb3IgbGlzdGVuZXIgcmVnaXN0cmF0aW9uXG4gKiBhbmQgdW5yZWdpc3RyYXRpb24uIEEgZ2VuZXJpYyBgY2hhbmdlYCBldmVudCBpcyBhbHdheXMgYXZhaWxhYmxlIHRocm91Z2hcbiAqIHtAbGluayBvbC5PYnNlcnZhYmxlI2NoYW5nZWR9LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVuZHMge29sLmV2ZW50cy5FdmVudFRhcmdldH1cbiAqIEBmaXJlcyBvbC5ldmVudHMuRXZlbnRcbiAqIEBzdHJ1Y3RcbiAqIEBhcGlcbiAqL1xudmFyIF9vbF9PYnNlcnZhYmxlXyA9IGZ1bmN0aW9uKCkge1xuXG4gIF9vbF9ldmVudHNfRXZlbnRUYXJnZXRfLmNhbGwodGhpcyk7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICB0aGlzLnJldmlzaW9uXyA9IDA7XG5cbn07XG5cbl9vbF8uaW5oZXJpdHMoX29sX09ic2VydmFibGVfLCBfb2xfZXZlbnRzX0V2ZW50VGFyZ2V0Xyk7XG5cblxuLyoqXG4gKiBSZW1vdmVzIGFuIGV2ZW50IGxpc3RlbmVyIHVzaW5nIHRoZSBrZXkgcmV0dXJuZWQgYnkgYG9uKClgIG9yIGBvbmNlKClgLlxuICogQHBhcmFtIHtvbC5FdmVudHNLZXl8QXJyYXkuPG9sLkV2ZW50c0tleT59IGtleSBUaGUga2V5IHJldHVybmVkIGJ5IGBvbigpYFxuICogICAgIG9yIGBvbmNlKClgIChvciBhbiBhcnJheSBvZiBrZXlzKS5cbiAqIEBhcGlcbiAqL1xuX29sX09ic2VydmFibGVfLnVuQnlLZXkgPSBmdW5jdGlvbihrZXkpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoa2V5KSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IGtleS5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICBfb2xfZXZlbnRzXy51bmxpc3RlbkJ5S2V5KGtleVtpXSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIF9vbF9ldmVudHNfLnVubGlzdGVuQnlLZXkoLyoqIEB0eXBlIHtvbC5FdmVudHNLZXl9ICovIChrZXkpKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIEluY3JlYXNlcyB0aGUgcmV2aXNpb24gY291bnRlciBhbmQgZGlzcGF0Y2hlcyBhICdjaGFuZ2UnIGV2ZW50LlxuICogQGFwaVxuICovXG5fb2xfT2JzZXJ2YWJsZV8ucHJvdG90eXBlLmNoYW5nZWQgPSBmdW5jdGlvbigpIHtcbiAgKyt0aGlzLnJldmlzaW9uXztcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KF9vbF9ldmVudHNfRXZlbnRUeXBlXy5DSEFOR0UpO1xufTtcblxuXG4vKipcbiAqIERpc3BhdGNoZXMgYW4gZXZlbnQgYW5kIGNhbGxzIGFsbCBsaXN0ZW5lcnMgbGlzdGVuaW5nIGZvciBldmVudHNcbiAqIG9mIHRoaXMgdHlwZS4gVGhlIGV2ZW50IHBhcmFtZXRlciBjYW4gZWl0aGVyIGJlIGEgc3RyaW5nIG9yIGFuXG4gKiBPYmplY3Qgd2l0aCBhIGB0eXBlYCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge3t0eXBlOiBzdHJpbmcsXG4gKiAgICAgdGFyZ2V0OiAoRXZlbnRUYXJnZXR8b2wuZXZlbnRzLkV2ZW50VGFyZ2V0fHVuZGVmaW5lZCl9fG9sLmV2ZW50cy5FdmVudHxcbiAqICAgICBzdHJpbmd9IGV2ZW50IEV2ZW50IG9iamVjdC5cbiAqIEBmdW5jdGlvblxuICogQGFwaVxuICovXG5fb2xfT2JzZXJ2YWJsZV8ucHJvdG90eXBlLmRpc3BhdGNoRXZlbnQ7XG5cblxuLyoqXG4gKiBHZXQgdGhlIHZlcnNpb24gbnVtYmVyIGZvciB0aGlzIG9iamVjdC4gIEVhY2ggdGltZSB0aGUgb2JqZWN0IGlzIG1vZGlmaWVkLFxuICogaXRzIHZlcnNpb24gbnVtYmVyIHdpbGwgYmUgaW5jcmVtZW50ZWQuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFJldmlzaW9uLlxuICogQGFwaVxuICovXG5fb2xfT2JzZXJ2YWJsZV8ucHJvdG90eXBlLmdldFJldmlzaW9uID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnJldmlzaW9uXztcbn07XG5cblxuLyoqXG4gKiBMaXN0ZW4gZm9yIGEgY2VydGFpbiB0eXBlIG9mIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd8QXJyYXkuPHN0cmluZz59IHR5cGUgVGhlIGV2ZW50IHR5cGUgb3IgYXJyYXkgb2YgZXZlbnQgdHlwZXMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKD8pOiA/fSBsaXN0ZW5lciBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdF90aGlzIFRoZSBvYmplY3QgdG8gdXNlIGFzIGB0aGlzYCBpbiBgbGlzdGVuZXJgLlxuICogQHJldHVybiB7b2wuRXZlbnRzS2V5fEFycmF5LjxvbC5FdmVudHNLZXk+fSBVbmlxdWUga2V5IGZvciB0aGUgbGlzdGVuZXIuIElmXG4gKiAgICAgY2FsbGVkIHdpdGggYW4gYXJyYXkgb2YgZXZlbnQgdHlwZXMgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LCB0aGUgcmV0dXJuXG4gKiAgICAgd2lsbCBiZSBhbiBhcnJheSBvZiBrZXlzLlxuICogQGFwaVxuICovXG5fb2xfT2JzZXJ2YWJsZV8ucHJvdG90eXBlLm9uID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIsIG9wdF90aGlzKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgdmFyIGxlbiA9IHR5cGUubGVuZ3RoO1xuICAgIHZhciBrZXlzID0gbmV3IEFycmF5KGxlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAga2V5c1tpXSA9IF9vbF9ldmVudHNfLmxpc3Rlbih0aGlzLCB0eXBlW2ldLCBsaXN0ZW5lciwgb3B0X3RoaXMpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5cztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gX29sX2V2ZW50c18ubGlzdGVuKFxuICAgICAgICB0aGlzLCAvKiogQHR5cGUge3N0cmluZ30gKi8gKHR5cGUpLCBsaXN0ZW5lciwgb3B0X3RoaXMpO1xuICB9XG59O1xuXG5cbi8qKlxuICogTGlzdGVuIG9uY2UgZm9yIGEgY2VydGFpbiB0eXBlIG9mIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd8QXJyYXkuPHN0cmluZz59IHR5cGUgVGhlIGV2ZW50IHR5cGUgb3IgYXJyYXkgb2YgZXZlbnQgdHlwZXMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKD8pOiA/fSBsaXN0ZW5lciBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdF90aGlzIFRoZSBvYmplY3QgdG8gdXNlIGFzIGB0aGlzYCBpbiBgbGlzdGVuZXJgLlxuICogQHJldHVybiB7b2wuRXZlbnRzS2V5fEFycmF5LjxvbC5FdmVudHNLZXk+fSBVbmlxdWUga2V5IGZvciB0aGUgbGlzdGVuZXIuIElmXG4gKiAgICAgY2FsbGVkIHdpdGggYW4gYXJyYXkgb2YgZXZlbnQgdHlwZXMgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LCB0aGUgcmV0dXJuXG4gKiAgICAgd2lsbCBiZSBhbiBhcnJheSBvZiBrZXlzLlxuICogQGFwaVxuICovXG5fb2xfT2JzZXJ2YWJsZV8ucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lciwgb3B0X3RoaXMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICB2YXIgbGVuID0gdHlwZS5sZW5ndGg7XG4gICAgdmFyIGtleXMgPSBuZXcgQXJyYXkobGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBrZXlzW2ldID0gX29sX2V2ZW50c18ubGlzdGVuT25jZSh0aGlzLCB0eXBlW2ldLCBsaXN0ZW5lciwgb3B0X3RoaXMpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5cztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gX29sX2V2ZW50c18ubGlzdGVuT25jZShcbiAgICAgICAgdGhpcywgLyoqIEB0eXBlIHtzdHJpbmd9ICovICh0eXBlKSwgbGlzdGVuZXIsIG9wdF90aGlzKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIFVubGlzdGVuIGZvciBhIGNlcnRhaW4gdHlwZSBvZiBldmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5LjxzdHJpbmc+fSB0eXBlIFRoZSBldmVudCB0eXBlIG9yIGFycmF5IG9mIGV2ZW50IHR5cGVzLlxuICogQHBhcmFtIHtmdW5jdGlvbig/KTogP30gbGlzdGVuZXIgVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRfdGhpcyBUaGUgb2JqZWN0IHdoaWNoIHdhcyB1c2VkIGFzIGB0aGlzYCBieSB0aGVcbiAqIGBsaXN0ZW5lcmAuXG4gKiBAYXBpXG4gKi9cbl9vbF9PYnNlcnZhYmxlXy5wcm90b3R5cGUudW4gPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lciwgb3B0X3RoaXMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgaWkgPSB0eXBlLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgIF9vbF9ldmVudHNfLnVubGlzdGVuKHRoaXMsIHR5cGVbaV0sIGxpc3RlbmVyLCBvcHRfdGhpcyk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICBfb2xfZXZlbnRzXy51bmxpc3Rlbih0aGlzLCAvKiogQHR5cGUge3N0cmluZ30gKi8gKHR5cGUpLCBsaXN0ZW5lciwgb3B0X3RoaXMpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgX29sX09ic2VydmFibGVfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvb2JzZXJ2YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF9vbF8gZnJvbSAnLi9pbmRleC5qcyc7XG5cbi8qKlxuICogT2JqZWN0cyB0aGF0IG5lZWQgdG8gY2xlYW4gdXAgYWZ0ZXIgdGhlbXNlbHZlcy5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgX29sX0Rpc3Bvc2FibGVfID0gZnVuY3Rpb24oKSB7fTtcblxuLyoqXG4gKiBUaGUgb2JqZWN0IGhhcyBhbHJlYWR5IGJlZW4gZGlzcG9zZWQuXG4gKiBAdHlwZSB7Ym9vbGVhbn1cbiAqIEBwcml2YXRlXG4gKi9cbl9vbF9EaXNwb3NhYmxlXy5wcm90b3R5cGUuZGlzcG9zZWRfID0gZmFsc2U7XG5cbi8qKlxuICogQ2xlYW4gdXAuXG4gKi9cbl9vbF9EaXNwb3NhYmxlXy5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIXRoaXMuZGlzcG9zZWRfKSB7XG4gICAgdGhpcy5kaXNwb3NlZF8gPSB0cnVlO1xuICAgIHRoaXMuZGlzcG9zZUludGVybmFsKCk7XG4gIH1cbn07XG5cbi8qKlxuICogRXh0ZW5zaW9uIHBvaW50IGZvciBkaXNwb3NhYmxlIG9iamVjdHMuXG4gKiBAcHJvdGVjdGVkXG4gKi9cbl9vbF9EaXNwb3NhYmxlXy5wcm90b3R5cGUuZGlzcG9zZUludGVybmFsID0gX29sXy5udWxsRnVuY3Rpb247XG5leHBvcnQgZGVmYXVsdCBfb2xfRGlzcG9zYWJsZV87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9kaXNwb3NhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgX29sXyBmcm9tICcuLi9pbmRleC5qcyc7XG5pbXBvcnQgX29sX09iamVjdF8gZnJvbSAnLi4vb2JqZWN0LmpzJztcbmltcG9ydCBfb2xfbGF5ZXJfUHJvcGVydHlfIGZyb20gJy4uL2xheWVyL3Byb3BlcnR5LmpzJztcbmltcG9ydCBfb2xfbWF0aF8gZnJvbSAnLi4vbWF0aC5qcyc7XG5pbXBvcnQgX29sX29ial8gZnJvbSAnLi4vb2JqLmpzJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBBYnN0cmFjdCBiYXNlIGNsYXNzOyBub3JtYWxseSBvbmx5IHVzZWQgZm9yIGNyZWF0aW5nIHN1YmNsYXNzZXMgYW5kIG5vdFxuICogaW5zdGFudGlhdGVkIGluIGFwcHMuXG4gKiBOb3RlIHRoYXQgd2l0aCBgb2wubGF5ZXIuQmFzZWAgYW5kIGFsbCBpdHMgc3ViY2xhc3NlcywgYW55IHByb3BlcnR5IHNldCBpblxuICogdGhlIG9wdGlvbnMgaXMgc2V0IGFzIGEge0BsaW5rIG9sLk9iamVjdH0gcHJvcGVydHkgb24gdGhlIGxheWVyIG9iamVjdCwgc29cbiAqIGlzIG9ic2VydmFibGUsIGFuZCBoYXMgZ2V0L3NldCBhY2Nlc3NvcnMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAYWJzdHJhY3RcbiAqIEBleHRlbmRzIHtvbC5PYmplY3R9XG4gKiBAcGFyYW0ge29seC5sYXllci5CYXNlT3B0aW9uc30gb3B0aW9ucyBMYXllciBvcHRpb25zLlxuICogQGFwaVxuICovXG52YXIgX29sX2xheWVyX0Jhc2VfID0gZnVuY3Rpb24ob3B0aW9ucykge1xuXG4gIF9vbF9PYmplY3RfLmNhbGwodGhpcyk7XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgKj59XG4gICAqL1xuICB2YXIgcHJvcGVydGllcyA9IF9vbF9vYmpfLmFzc2lnbih7fSwgb3B0aW9ucyk7XG4gIHByb3BlcnRpZXNbX29sX2xheWVyX1Byb3BlcnR5Xy5PUEFDSVRZXSA9XG4gICAgICBvcHRpb25zLm9wYWNpdHkgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMub3BhY2l0eSA6IDE7XG4gIHByb3BlcnRpZXNbX29sX2xheWVyX1Byb3BlcnR5Xy5WSVNJQkxFXSA9XG4gICAgICBvcHRpb25zLnZpc2libGUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMudmlzaWJsZSA6IHRydWU7XG4gIHByb3BlcnRpZXNbX29sX2xheWVyX1Byb3BlcnR5Xy5aX0lOREVYXSA9XG4gICAgICBvcHRpb25zLnpJbmRleCAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy56SW5kZXggOiAwO1xuICBwcm9wZXJ0aWVzW19vbF9sYXllcl9Qcm9wZXJ0eV8uTUFYX1JFU09MVVRJT05dID1cbiAgICAgIG9wdGlvbnMubWF4UmVzb2x1dGlvbiAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tYXhSZXNvbHV0aW9uIDogSW5maW5pdHk7XG4gIHByb3BlcnRpZXNbX29sX2xheWVyX1Byb3BlcnR5Xy5NSU5fUkVTT0xVVElPTl0gPVxuICAgICAgb3B0aW9ucy5taW5SZXNvbHV0aW9uICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1pblJlc29sdXRpb24gOiAwO1xuXG4gIHRoaXMuc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcblxuICAvKipcbiAgICogQHR5cGUge29sLkxheWVyU3RhdGV9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB0aGlzLnN0YXRlXyA9IC8qKiBAdHlwZSB7b2wuTGF5ZXJTdGF0ZX0gKi8gKHtcbiAgICBsYXllcjogLyoqIEB0eXBlIHtvbC5sYXllci5MYXllcn0gKi8gKHRoaXMpLFxuICAgIG1hbmFnZWQ6IHRydWVcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFRoZSBsYXllciB0eXBlLlxuICAgKiBAdHlwZSB7b2wuTGF5ZXJUeXBlfVxuICAgKiBAcHJvdGVjdGVkO1xuICAgKi9cbiAgdGhpcy50eXBlO1xuXG59O1xuXG5fb2xfLmluaGVyaXRzKF9vbF9sYXllcl9CYXNlXywgX29sX09iamVjdF8pO1xuXG5cbi8qKlxuICogR2V0IHRoZSBsYXllciB0eXBlICh1c2VkIHdoZW4gY3JlYXRpbmcgYSBsYXllciByZW5kZXJlcikuXG4gKiBAcmV0dXJuIHtvbC5MYXllclR5cGV9IFRoZSBsYXllciB0eXBlLlxuICovXG5fb2xfbGF5ZXJfQmFzZV8ucHJvdG90eXBlLmdldFR5cGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudHlwZTtcbn07XG5cblxuLyoqXG4gKiBAcmV0dXJuIHtvbC5MYXllclN0YXRlfSBMYXllciBzdGF0ZS5cbiAqL1xuX29sX2xheWVyX0Jhc2VfLnByb3RvdHlwZS5nZXRMYXllclN0YXRlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc3RhdGVfLm9wYWNpdHkgPSBfb2xfbWF0aF8uY2xhbXAodGhpcy5nZXRPcGFjaXR5KCksIDAsIDEpO1xuICB0aGlzLnN0YXRlXy5zb3VyY2VTdGF0ZSA9IHRoaXMuZ2V0U291cmNlU3RhdGUoKTtcbiAgdGhpcy5zdGF0ZV8udmlzaWJsZSA9IHRoaXMuZ2V0VmlzaWJsZSgpO1xuICB0aGlzLnN0YXRlXy5leHRlbnQgPSB0aGlzLmdldEV4dGVudCgpO1xuICB0aGlzLnN0YXRlXy56SW5kZXggPSB0aGlzLmdldFpJbmRleCgpO1xuICB0aGlzLnN0YXRlXy5tYXhSZXNvbHV0aW9uID0gdGhpcy5nZXRNYXhSZXNvbHV0aW9uKCk7XG4gIHRoaXMuc3RhdGVfLm1pblJlc29sdXRpb24gPSBNYXRoLm1heCh0aGlzLmdldE1pblJlc29sdXRpb24oKSwgMCk7XG5cbiAgcmV0dXJuIHRoaXMuc3RhdGVfO1xufTtcblxuXG4vKipcbiAqIEBhYnN0cmFjdFxuICogQHBhcmFtIHtBcnJheS48b2wubGF5ZXIuTGF5ZXI+PX0gb3B0X2FycmF5IEFycmF5IG9mIGxheWVycyAodG8gYmVcbiAqICAgICBtb2RpZmllZCBpbiBwbGFjZSkuXG4gKiBAcmV0dXJuIHtBcnJheS48b2wubGF5ZXIuTGF5ZXI+fSBBcnJheSBvZiBsYXllcnMuXG4gKi9cbl9vbF9sYXllcl9CYXNlXy5wcm90b3R5cGUuZ2V0TGF5ZXJzQXJyYXkgPSBmdW5jdGlvbihvcHRfYXJyYXkpIHt9O1xuXG5cbi8qKlxuICogQGFic3RyYWN0XG4gKiBAcGFyYW0ge0FycmF5LjxvbC5MYXllclN0YXRlPj19IG9wdF9zdGF0ZXMgT3B0aW9uYWwgbGlzdCBvZiBsYXllclxuICogICAgIHN0YXRlcyAodG8gYmUgbW9kaWZpZWQgaW4gcGxhY2UpLlxuICogQHJldHVybiB7QXJyYXkuPG9sLkxheWVyU3RhdGU+fSBMaXN0IG9mIGxheWVyIHN0YXRlcy5cbiAqL1xuX29sX2xheWVyX0Jhc2VfLnByb3RvdHlwZS5nZXRMYXllclN0YXRlc0FycmF5ID0gZnVuY3Rpb24ob3B0X3N0YXRlcykge307XG5cblxuLyoqXG4gKiBSZXR1cm4gdGhlIHtAbGluayBvbC5FeHRlbnQgZXh0ZW50fSBvZiB0aGUgbGF5ZXIgb3IgYHVuZGVmaW5lZGAgaWYgaXRcbiAqIHdpbGwgYmUgdmlzaWJsZSByZWdhcmRsZXNzIG9mIGV4dGVudC5cbiAqIEByZXR1cm4ge29sLkV4dGVudHx1bmRlZmluZWR9IFRoZSBsYXllciBleHRlbnQuXG4gKiBAb2JzZXJ2YWJsZVxuICogQGFwaVxuICovXG5fb2xfbGF5ZXJfQmFzZV8ucHJvdG90eXBlLmdldEV4dGVudCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gKFxuICAvKiogQHR5cGUge29sLkV4dGVudHx1bmRlZmluZWR9ICovIHRoaXMuZ2V0KF9vbF9sYXllcl9Qcm9wZXJ0eV8uRVhURU5UKVxuICApO1xufTtcblxuXG4vKipcbiAqIFJldHVybiB0aGUgbWF4aW11bSByZXNvbHV0aW9uIG9mIHRoZSBsYXllci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG1heGltdW0gcmVzb2x1dGlvbiBvZiB0aGUgbGF5ZXIuXG4gKiBAb2JzZXJ2YWJsZVxuICogQGFwaVxuICovXG5fb2xfbGF5ZXJfQmFzZV8ucHJvdG90eXBlLmdldE1heFJlc29sdXRpb24gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIChcbiAgLyoqIEB0eXBlIHtudW1iZXJ9ICovIHRoaXMuZ2V0KF9vbF9sYXllcl9Qcm9wZXJ0eV8uTUFYX1JFU09MVVRJT04pXG4gICk7XG59O1xuXG5cbi8qKlxuICogUmV0dXJuIHRoZSBtaW5pbXVtIHJlc29sdXRpb24gb2YgdGhlIGxheWVyLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbWluaW11bSByZXNvbHV0aW9uIG9mIHRoZSBsYXllci5cbiAqIEBvYnNlcnZhYmxlXG4gKiBAYXBpXG4gKi9cbl9vbF9sYXllcl9CYXNlXy5wcm90b3R5cGUuZ2V0TWluUmVzb2x1dGlvbiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gKFxuICAvKiogQHR5cGUge251bWJlcn0gKi8gdGhpcy5nZXQoX29sX2xheWVyX1Byb3BlcnR5Xy5NSU5fUkVTT0xVVElPTilcbiAgKTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm4gdGhlIG9wYWNpdHkgb2YgdGhlIGxheWVyIChiZXR3ZWVuIDAgYW5kIDEpLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgb3BhY2l0eSBvZiB0aGUgbGF5ZXIuXG4gKiBAb2JzZXJ2YWJsZVxuICogQGFwaVxuICovXG5fb2xfbGF5ZXJfQmFzZV8ucHJvdG90eXBlLmdldE9wYWNpdHkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIChcbiAgLyoqIEB0eXBlIHtudW1iZXJ9ICovIHRoaXMuZ2V0KF9vbF9sYXllcl9Qcm9wZXJ0eV8uT1BBQ0lUWSlcbiAgKTtcbn07XG5cblxuLyoqXG4gKiBAYWJzdHJhY3RcbiAqIEByZXR1cm4ge29sLnNvdXJjZS5TdGF0ZX0gU291cmNlIHN0YXRlLlxuICovXG5fb2xfbGF5ZXJfQmFzZV8ucHJvdG90eXBlLmdldFNvdXJjZVN0YXRlID0gZnVuY3Rpb24oKSB7fTtcblxuXG4vKipcbiAqIFJldHVybiB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgbGF5ZXIgKGB0cnVlYCBvciBgZmFsc2VgKS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRoZSB2aXNpYmlsaXR5IG9mIHRoZSBsYXllci5cbiAqIEBvYnNlcnZhYmxlXG4gKiBAYXBpXG4gKi9cbl9vbF9sYXllcl9CYXNlXy5wcm90b3R5cGUuZ2V0VmlzaWJsZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gKFxuICAvKiogQHR5cGUge2Jvb2xlYW59ICovIHRoaXMuZ2V0KF9vbF9sYXllcl9Qcm9wZXJ0eV8uVklTSUJMRSlcbiAgKTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm4gdGhlIFotaW5kZXggb2YgdGhlIGxheWVyLCB3aGljaCBpcyB1c2VkIHRvIG9yZGVyIGxheWVycyBiZWZvcmVcbiAqIHJlbmRlcmluZy4gVGhlIGRlZmF1bHQgWi1pbmRleCBpcyAwLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgWi1pbmRleCBvZiB0aGUgbGF5ZXIuXG4gKiBAb2JzZXJ2YWJsZVxuICogQGFwaVxuICovXG5fb2xfbGF5ZXJfQmFzZV8ucHJvdG90eXBlLmdldFpJbmRleCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gKFxuICAvKiogQHR5cGUge251bWJlcn0gKi8gdGhpcy5nZXQoX29sX2xheWVyX1Byb3BlcnR5Xy5aX0lOREVYKVxuICApO1xufTtcblxuXG4vKipcbiAqIFNldCB0aGUgZXh0ZW50IGF0IHdoaWNoIHRoZSBsYXllciBpcyB2aXNpYmxlLiAgSWYgYHVuZGVmaW5lZGAsIHRoZSBsYXllclxuICogd2lsbCBiZSB2aXNpYmxlIGF0IGFsbCBleHRlbnRzLlxuICogQHBhcmFtIHtvbC5FeHRlbnR8dW5kZWZpbmVkfSBleHRlbnQgVGhlIGV4dGVudCBvZiB0aGUgbGF5ZXIuXG4gKiBAb2JzZXJ2YWJsZVxuICogQGFwaVxuICovXG5fb2xfbGF5ZXJfQmFzZV8ucHJvdG90eXBlLnNldEV4dGVudCA9IGZ1bmN0aW9uKGV4dGVudCkge1xuICB0aGlzLnNldChfb2xfbGF5ZXJfUHJvcGVydHlfLkVYVEVOVCwgZXh0ZW50KTtcbn07XG5cblxuLyoqXG4gKiBTZXQgdGhlIG1heGltdW0gcmVzb2x1dGlvbiBhdCB3aGljaCB0aGUgbGF5ZXIgaXMgdmlzaWJsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhSZXNvbHV0aW9uIFRoZSBtYXhpbXVtIHJlc29sdXRpb24gb2YgdGhlIGxheWVyLlxuICogQG9ic2VydmFibGVcbiAqIEBhcGlcbiAqL1xuX29sX2xheWVyX0Jhc2VfLnByb3RvdHlwZS5zZXRNYXhSZXNvbHV0aW9uID0gZnVuY3Rpb24obWF4UmVzb2x1dGlvbikge1xuICB0aGlzLnNldChfb2xfbGF5ZXJfUHJvcGVydHlfLk1BWF9SRVNPTFVUSU9OLCBtYXhSZXNvbHV0aW9uKTtcbn07XG5cblxuLyoqXG4gKiBTZXQgdGhlIG1pbmltdW0gcmVzb2x1dGlvbiBhdCB3aGljaCB0aGUgbGF5ZXIgaXMgdmlzaWJsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW5SZXNvbHV0aW9uIFRoZSBtaW5pbXVtIHJlc29sdXRpb24gb2YgdGhlIGxheWVyLlxuICogQG9ic2VydmFibGVcbiAqIEBhcGlcbiAqL1xuX29sX2xheWVyX0Jhc2VfLnByb3RvdHlwZS5zZXRNaW5SZXNvbHV0aW9uID0gZnVuY3Rpb24obWluUmVzb2x1dGlvbikge1xuICB0aGlzLnNldChfb2xfbGF5ZXJfUHJvcGVydHlfLk1JTl9SRVNPTFVUSU9OLCBtaW5SZXNvbHV0aW9uKTtcbn07XG5cblxuLyoqXG4gKiBTZXQgdGhlIG9wYWNpdHkgb2YgdGhlIGxheWVyLCBhbGxvd2VkIHZhbHVlcyByYW5nZSBmcm9tIDAgdG8gMS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvcGFjaXR5IFRoZSBvcGFjaXR5IG9mIHRoZSBsYXllci5cbiAqIEBvYnNlcnZhYmxlXG4gKiBAYXBpXG4gKi9cbl9vbF9sYXllcl9CYXNlXy5wcm90b3R5cGUuc2V0T3BhY2l0eSA9IGZ1bmN0aW9uKG9wYWNpdHkpIHtcbiAgdGhpcy5zZXQoX29sX2xheWVyX1Byb3BlcnR5Xy5PUEFDSVRZLCBvcGFjaXR5KTtcbn07XG5cblxuLyoqXG4gKiBTZXQgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGxheWVyIChgdHJ1ZWAgb3IgYGZhbHNlYCkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHZpc2libGUgVGhlIHZpc2liaWxpdHkgb2YgdGhlIGxheWVyLlxuICogQG9ic2VydmFibGVcbiAqIEBhcGlcbiAqL1xuX29sX2xheWVyX0Jhc2VfLnByb3RvdHlwZS5zZXRWaXNpYmxlID0gZnVuY3Rpb24odmlzaWJsZSkge1xuICB0aGlzLnNldChfb2xfbGF5ZXJfUHJvcGVydHlfLlZJU0lCTEUsIHZpc2libGUpO1xufTtcblxuXG4vKipcbiAqIFNldCBaLWluZGV4IG9mIHRoZSBsYXllciwgd2hpY2ggaXMgdXNlZCB0byBvcmRlciBsYXllcnMgYmVmb3JlIHJlbmRlcmluZy5cbiAqIFRoZSBkZWZhdWx0IFotaW5kZXggaXMgMC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB6aW5kZXggVGhlIHotaW5kZXggb2YgdGhlIGxheWVyLlxuICogQG9ic2VydmFibGVcbiAqIEBhcGlcbiAqL1xuX29sX2xheWVyX0Jhc2VfLnByb3RvdHlwZS5zZXRaSW5kZXggPSBmdW5jdGlvbih6aW5kZXgpIHtcbiAgdGhpcy5zZXQoX29sX2xheWVyX1Byb3BlcnR5Xy5aX0lOREVYLCB6aW5kZXgpO1xufTtcbmV4cG9ydCBkZWZhdWx0IF9vbF9sYXllcl9CYXNlXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL2xheWVyL2Jhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfb2xfIGZyb20gJy4vaW5kZXguanMnO1xuXG4vKipcbiAqIEVycm9yIG9iamVjdCB0aHJvd24gd2hlbiBhbiBhc3NlcnRpb24gZmFpbGVkLiBUaGlzIGlzIGFuIEVDTUEtMjYyIEVycm9yLFxuICogZXh0ZW5kZWQgd2l0aCBhIGBjb2RlYCBwcm9wZXJ0eS5cbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0Vycm9yfVxuICogQGNvbnN0cnVjdG9yXG4gKiBAZXh0ZW5kcyB7RXJyb3J9XG4gKiBAaW1wbGVtZW50cyB7b2xpLkFzc2VydGlvbkVycm9yfVxuICogQHBhcmFtIHtudW1iZXJ9IGNvZGUgRXJyb3IgY29kZS5cbiAqL1xudmFyIF9vbF9Bc3NlcnRpb25FcnJvcl8gPSBmdW5jdGlvbihjb2RlKSB7XG5cbiAgdmFyIHBhdGggPSBfb2xfLlZFUlNJT04gPyBfb2xfLlZFUlNJT04uc3BsaXQoJy0nKVswXSA6ICdsYXRlc3QnO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgdGhpcy5tZXNzYWdlID0gJ0Fzc2VydGlvbiBmYWlsZWQuIFNlZSBodHRwczovL29wZW5sYXllcnMub3JnL2VuLycgKyBwYXRoICtcbiAgICAgICcvZG9jL2Vycm9ycy8jJyArIGNvZGUgKyAnIGZvciBkZXRhaWxzLic7XG5cbiAgLyoqXG4gICAqIEVycm9yIGNvZGUuIFRoZSBtZWFuaW5nIG9mIHRoZSBjb2RlIGNhbiBiZSBmb3VuZCBvblxuICAgKiB7QGxpbmsgaHR0cHM6Ly9vcGVubGF5ZXJzLm9yZy9lbi9sYXRlc3QvZG9jL2Vycm9ycy99IChyZXBsYWNlIGBsYXRlc3RgIHdpdGhcbiAgICogdGhlIHZlcnNpb24gZm91bmQgaW4gdGhlIE9wZW5MYXllcnMgc2NyaXB0J3MgaGVhZGVyIGNvbW1lbnQgaWYgYSB2ZXJzaW9uXG4gICAqIG90aGVyIHRoYW4gdGhlIGxhdGVzdCBpcyB1c2VkKS5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGFwaVxuICAgKi9cbiAgdGhpcy5jb2RlID0gY29kZTtcblxuICB0aGlzLm5hbWUgPSAnQXNzZXJ0aW9uRXJyb3InO1xuXG59O1xuXG5fb2xfLmluaGVyaXRzKF9vbF9Bc3NlcnRpb25FcnJvcl8sIEVycm9yKTtcbmV4cG9ydCBkZWZhdWx0IF9vbF9Bc3NlcnRpb25FcnJvcl87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9hc3NlcnRpb25lcnJvci5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG52YXIgX29sX3JlbmRlcl9FdmVudFR5cGVfID0ge1xuICAvKipcbiAgICogQGV2ZW50IG9sLnJlbmRlci5FdmVudCNwb3N0Y29tcG9zZVxuICAgKiBAYXBpXG4gICAqL1xuICBQT1NUQ09NUE9TRTogJ3Bvc3Rjb21wb3NlJyxcbiAgLyoqXG4gICAqIEBldmVudCBvbC5yZW5kZXIuRXZlbnQjcHJlY29tcG9zZVxuICAgKiBAYXBpXG4gICAqL1xuICBQUkVDT01QT1NFOiAncHJlY29tcG9zZScsXG4gIC8qKlxuICAgKiBAZXZlbnQgb2wucmVuZGVyLkV2ZW50I3JlbmRlclxuICAgKiBAYXBpXG4gICAqL1xuICBSRU5ERVI6ICdyZW5kZXInXG59O1xuXG5leHBvcnQgZGVmYXVsdCBfb2xfcmVuZGVyX0V2ZW50VHlwZV87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9yZW5kZXIvZXZlbnR0eXBlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgX29sXyBmcm9tICcuLi9pbmRleC5qcyc7XG5pbXBvcnQgX29sX0ltYWdlQ2FudmFzXyBmcm9tICcuLi9pbWFnZWNhbnZhcy5qcyc7XG5pbXBvcnQgX29sX2V4dGVudF8gZnJvbSAnLi4vZXh0ZW50LmpzJztcbmltcG9ydCBfb2xfc291cmNlX0ltYWdlXyBmcm9tICcuLi9zb3VyY2UvaW1hZ2UuanMnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIEJhc2UgY2xhc3MgZm9yIGltYWdlIHNvdXJjZXMgd2hlcmUgYSBjYW52YXMgZWxlbWVudCBpcyB0aGUgaW1hZ2UuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAZXh0ZW5kcyB7b2wuc291cmNlLkltYWdlfVxuICogQHBhcmFtIHtvbHguc291cmNlLkltYWdlQ2FudmFzT3B0aW9uc30gb3B0aW9ucyBDb25zdHJ1Y3RvciBvcHRpb25zLlxuICogQGFwaVxuICovXG52YXIgX29sX3NvdXJjZV9JbWFnZUNhbnZhc18gPSBmdW5jdGlvbihvcHRpb25zKSB7XG5cbiAgX29sX3NvdXJjZV9JbWFnZV8uY2FsbCh0aGlzLCB7XG4gICAgYXR0cmlidXRpb25zOiBvcHRpb25zLmF0dHJpYnV0aW9ucyxcbiAgICBsb2dvOiBvcHRpb25zLmxvZ28sXG4gICAgcHJvamVjdGlvbjogb3B0aW9ucy5wcm9qZWN0aW9uLFxuICAgIHJlc29sdXRpb25zOiBvcHRpb25zLnJlc29sdXRpb25zLFxuICAgIHN0YXRlOiBvcHRpb25zLnN0YXRlXG4gIH0pO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7b2wuQ2FudmFzRnVuY3Rpb25UeXBlfVxuICAgKi9cbiAgdGhpcy5jYW52YXNGdW5jdGlvbl8gPSBvcHRpb25zLmNhbnZhc0Z1bmN0aW9uO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7b2wuSW1hZ2VDYW52YXN9XG4gICAqL1xuICB0aGlzLmNhbnZhc18gPSBudWxsO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgdGhpcy5yZW5kZXJlZFJldmlzaW9uXyA9IDA7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICB0aGlzLnJhdGlvXyA9IG9wdGlvbnMucmF0aW8gIT09IHVuZGVmaW5lZCA/XG4gICAgb3B0aW9ucy5yYXRpbyA6IDEuNTtcblxufTtcblxuX29sXy5pbmhlcml0cyhfb2xfc291cmNlX0ltYWdlQ2FudmFzXywgX29sX3NvdXJjZV9JbWFnZV8pO1xuXG5cbi8qKlxuICogQGluaGVyaXREb2NcbiAqL1xuX29sX3NvdXJjZV9JbWFnZUNhbnZhc18ucHJvdG90eXBlLmdldEltYWdlSW50ZXJuYWwgPSBmdW5jdGlvbihleHRlbnQsIHJlc29sdXRpb24sIHBpeGVsUmF0aW8sIHByb2plY3Rpb24pIHtcbiAgcmVzb2x1dGlvbiA9IHRoaXMuZmluZE5lYXJlc3RSZXNvbHV0aW9uKHJlc29sdXRpb24pO1xuXG4gIHZhciBjYW52YXMgPSB0aGlzLmNhbnZhc187XG4gIGlmIChjYW52YXMgJiZcbiAgICAgIHRoaXMucmVuZGVyZWRSZXZpc2lvbl8gPT0gdGhpcy5nZXRSZXZpc2lvbigpICYmXG4gICAgICBjYW52YXMuZ2V0UmVzb2x1dGlvbigpID09IHJlc29sdXRpb24gJiZcbiAgICAgIGNhbnZhcy5nZXRQaXhlbFJhdGlvKCkgPT0gcGl4ZWxSYXRpbyAmJlxuICAgICAgX29sX2V4dGVudF8uY29udGFpbnNFeHRlbnQoY2FudmFzLmdldEV4dGVudCgpLCBleHRlbnQpKSB7XG4gICAgcmV0dXJuIGNhbnZhcztcbiAgfVxuXG4gIGV4dGVudCA9IGV4dGVudC5zbGljZSgpO1xuICBfb2xfZXh0ZW50Xy5zY2FsZUZyb21DZW50ZXIoZXh0ZW50LCB0aGlzLnJhdGlvXyk7XG4gIHZhciB3aWR0aCA9IF9vbF9leHRlbnRfLmdldFdpZHRoKGV4dGVudCkgLyByZXNvbHV0aW9uO1xuICB2YXIgaGVpZ2h0ID0gX29sX2V4dGVudF8uZ2V0SGVpZ2h0KGV4dGVudCkgLyByZXNvbHV0aW9uO1xuICB2YXIgc2l6ZSA9IFt3aWR0aCAqIHBpeGVsUmF0aW8sIGhlaWdodCAqIHBpeGVsUmF0aW9dO1xuXG4gIHZhciBjYW52YXNFbGVtZW50ID0gdGhpcy5jYW52YXNGdW5jdGlvbl8oXG4gICAgICBleHRlbnQsIHJlc29sdXRpb24sIHBpeGVsUmF0aW8sIHNpemUsIHByb2plY3Rpb24pO1xuICBpZiAoY2FudmFzRWxlbWVudCkge1xuICAgIGNhbnZhcyA9IG5ldyBfb2xfSW1hZ2VDYW52YXNfKGV4dGVudCwgcmVzb2x1dGlvbiwgcGl4ZWxSYXRpbywgY2FudmFzRWxlbWVudCk7XG4gIH1cbiAgdGhpcy5jYW52YXNfID0gY2FudmFzO1xuICB0aGlzLnJlbmRlcmVkUmV2aXNpb25fID0gdGhpcy5nZXRSZXZpc2lvbigpO1xuXG4gIHJldHVybiBjYW52YXM7XG59O1xuZXhwb3J0IGRlZmF1bHQgX29sX3NvdXJjZV9JbWFnZUNhbnZhc187XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9zb3VyY2UvaW1hZ2VjYW52YXMuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfb2xfIGZyb20gJy4vaW5kZXguanMnO1xuaW1wb3J0IF9vbF9JbWFnZUJhc2VfIGZyb20gJy4vaW1hZ2ViYXNlLmpzJztcbmltcG9ydCBfb2xfSW1hZ2VTdGF0ZV8gZnJvbSAnLi9pbWFnZXN0YXRlLmpzJztcblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBleHRlbmRzIHtvbC5JbWFnZUJhc2V9XG4gKiBAcGFyYW0ge29sLkV4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSByZXNvbHV0aW9uIFJlc29sdXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gcGl4ZWxSYXRpbyBQaXhlbCByYXRpby5cbiAqIEBwYXJhbSB7SFRNTENhbnZhc0VsZW1lbnR9IGNhbnZhcyBDYW52YXMuXG4gKiBAcGFyYW0ge29sLkltYWdlQ2FudmFzTG9hZGVyPX0gb3B0X2xvYWRlciBPcHRpb25hbCBsb2FkZXIgZnVuY3Rpb24gdG9cbiAqICAgICBzdXBwb3J0IGFzeW5jaHJvbm91cyBjYW52YXMgZHJhd2luZy5cbiAqL1xudmFyIF9vbF9JbWFnZUNhbnZhc18gPSBmdW5jdGlvbihleHRlbnQsIHJlc29sdXRpb24sIHBpeGVsUmF0aW8sIGNhbnZhcywgb3B0X2xvYWRlcikge1xuXG4gIC8qKlxuICAgKiBPcHRpb25hbCBjYW52YXMgbG9hZGVyIGZ1bmN0aW9uLlxuICAgKiBAdHlwZSB7P29sLkltYWdlQ2FudmFzTG9hZGVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdGhpcy5sb2FkZXJfID0gb3B0X2xvYWRlciAhPT0gdW5kZWZpbmVkID8gb3B0X2xvYWRlciA6IG51bGw7XG5cbiAgdmFyIHN0YXRlID0gb3B0X2xvYWRlciAhPT0gdW5kZWZpbmVkID9cbiAgICBfb2xfSW1hZ2VTdGF0ZV8uSURMRSA6IF9vbF9JbWFnZVN0YXRlXy5MT0FERUQ7XG5cbiAgX29sX0ltYWdlQmFzZV8uY2FsbCh0aGlzLCBleHRlbnQsIHJlc29sdXRpb24sIHBpeGVsUmF0aW8sIHN0YXRlKTtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge0hUTUxDYW52YXNFbGVtZW50fVxuICAgKi9cbiAgdGhpcy5jYW52YXNfID0gY2FudmFzO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7RXJyb3J9XG4gICAqL1xuICB0aGlzLmVycm9yXyA9IG51bGw7XG5cbn07XG5cbl9vbF8uaW5oZXJpdHMoX29sX0ltYWdlQ2FudmFzXywgX29sX0ltYWdlQmFzZV8pO1xuXG5cbi8qKlxuICogR2V0IGFueSBlcnJvciBhc3NvY2lhdGVkIHdpdGggYXN5bmNocm9ub3VzIHJlbmRlcmluZy5cbiAqIEByZXR1cm4ge0Vycm9yfSBBbnkgZXJyb3IgdGhhdCBvY2N1cnJlZCBkdXJpbmcgcmVuZGVyaW5nLlxuICovXG5fb2xfSW1hZ2VDYW52YXNfLnByb3RvdHlwZS5nZXRFcnJvciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5lcnJvcl87XG59O1xuXG5cbi8qKlxuICogSGFuZGxlIGFzeW5jIGRyYXdpbmcgY29tcGxldGUuXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnIgQW55IGVycm9yIGR1cmluZyBkcmF3aW5nLlxuICogQHByaXZhdGVcbiAqL1xuX29sX0ltYWdlQ2FudmFzXy5wcm90b3R5cGUuaGFuZGxlTG9hZF8gPSBmdW5jdGlvbihlcnIpIHtcbiAgaWYgKGVycikge1xuICAgIHRoaXMuZXJyb3JfID0gZXJyO1xuICAgIHRoaXMuc3RhdGUgPSBfb2xfSW1hZ2VTdGF0ZV8uRVJST1I7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zdGF0ZSA9IF9vbF9JbWFnZVN0YXRlXy5MT0FERUQ7XG4gIH1cbiAgdGhpcy5jaGFuZ2VkKCk7XG59O1xuXG5cbi8qKlxuICogQGluaGVyaXREb2NcbiAqL1xuX29sX0ltYWdlQ2FudmFzXy5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5zdGF0ZSA9PSBfb2xfSW1hZ2VTdGF0ZV8uSURMRSkge1xuICAgIHRoaXMuc3RhdGUgPSBfb2xfSW1hZ2VTdGF0ZV8uTE9BRElORztcbiAgICB0aGlzLmNoYW5nZWQoKTtcbiAgICB0aGlzLmxvYWRlcl8odGhpcy5oYW5kbGVMb2FkXy5iaW5kKHRoaXMpKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIEBpbmhlcml0RG9jXG4gKi9cbl9vbF9JbWFnZUNhbnZhc18ucHJvdG90eXBlLmdldEltYWdlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmNhbnZhc187XG59O1xuZXhwb3J0IGRlZmF1bHQgX29sX0ltYWdlQ2FudmFzXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL2ltYWdlY2FudmFzLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFJlbGF0aW9uc2hpcCB0byBhbiBleHRlbnQuXG4gKiBAZW51bSB7bnVtYmVyfVxuICovXG52YXIgX29sX2V4dGVudF9SZWxhdGlvbnNoaXBfID0ge1xuICBVTktOT1dOOiAwLFxuICBJTlRFUlNFQ1RJTkc6IDEsXG4gIEFCT1ZFOiAyLFxuICBSSUdIVDogNCxcbiAgQkVMT1c6IDgsXG4gIExFRlQ6IDE2XG59O1xuXG5leHBvcnQgZGVmYXVsdCBfb2xfZXh0ZW50X1JlbGF0aW9uc2hpcF87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9leHRlbnQvcmVsYXRpb25zaGlwLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgX29sXyBmcm9tICcuLi9pbmRleC5qcyc7XG5pbXBvcnQgX29sX0ltYWdlU3RhdGVfIGZyb20gJy4uL2ltYWdlc3RhdGUuanMnO1xuaW1wb3J0IF9vbF9hcnJheV8gZnJvbSAnLi4vYXJyYXkuanMnO1xuaW1wb3J0IF9vbF9ldmVudHNfRXZlbnRfIGZyb20gJy4uL2V2ZW50cy9ldmVudC5qcyc7XG5pbXBvcnQgX29sX2V4dGVudF8gZnJvbSAnLi4vZXh0ZW50LmpzJztcbmltcG9ydCBfb2xfcHJval8gZnJvbSAnLi4vcHJvai5qcyc7XG5pbXBvcnQgX29sX3JlcHJval9JbWFnZV8gZnJvbSAnLi4vcmVwcm9qL2ltYWdlLmpzJztcbmltcG9ydCBfb2xfc291cmNlX1NvdXJjZV8gZnJvbSAnLi4vc291cmNlL3NvdXJjZS5qcyc7XG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogQWJzdHJhY3QgYmFzZSBjbGFzczsgbm9ybWFsbHkgb25seSB1c2VkIGZvciBjcmVhdGluZyBzdWJjbGFzc2VzIGFuZCBub3RcbiAqIGluc3RhbnRpYXRlZCBpbiBhcHBzLlxuICogQmFzZSBjbGFzcyBmb3Igc291cmNlcyBwcm92aWRpbmcgYSBzaW5nbGUgaW1hZ2UuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAYWJzdHJhY3RcbiAqIEBleHRlbmRzIHtvbC5zb3VyY2UuU291cmNlfVxuICogQHBhcmFtIHtvbC5Tb3VyY2VJbWFnZU9wdGlvbnN9IG9wdGlvbnMgU2luZ2xlIGltYWdlIHNvdXJjZSBvcHRpb25zLlxuICogQGFwaVxuICovXG52YXIgX29sX3NvdXJjZV9JbWFnZV8gPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIF9vbF9zb3VyY2VfU291cmNlXy5jYWxsKHRoaXMsIHtcbiAgICBhdHRyaWJ1dGlvbnM6IG9wdGlvbnMuYXR0cmlidXRpb25zLFxuICAgIGV4dGVudDogb3B0aW9ucy5leHRlbnQsXG4gICAgbG9nbzogb3B0aW9ucy5sb2dvLFxuICAgIHByb2plY3Rpb246IG9wdGlvbnMucHJvamVjdGlvbixcbiAgICBzdGF0ZTogb3B0aW9ucy5zdGF0ZVxuICB9KTtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge0FycmF5LjxudW1iZXI+fVxuICAgKi9cbiAgdGhpcy5yZXNvbHV0aW9uc18gPSBvcHRpb25zLnJlc29sdXRpb25zICE9PSB1bmRlZmluZWQgP1xuICAgIG9wdGlvbnMucmVzb2x1dGlvbnMgOiBudWxsO1xuXG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtvbC5yZXByb2ouSW1hZ2V9XG4gICAqL1xuICB0aGlzLnJlcHJvamVjdGVkSW1hZ2VfID0gbnVsbDtcblxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgdGhpcy5yZXByb2plY3RlZFJldmlzaW9uXyA9IDA7XG59O1xuXG5fb2xfLmluaGVyaXRzKF9vbF9zb3VyY2VfSW1hZ2VfLCBfb2xfc291cmNlX1NvdXJjZV8pO1xuXG5cbi8qKlxuICogQHJldHVybiB7QXJyYXkuPG51bWJlcj59IFJlc29sdXRpb25zLlxuICogQG92ZXJyaWRlXG4gKi9cbl9vbF9zb3VyY2VfSW1hZ2VfLnByb3RvdHlwZS5nZXRSZXNvbHV0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5yZXNvbHV0aW9uc187XG59O1xuXG5cbi8qKlxuICogQHByb3RlY3RlZFxuICogQHBhcmFtIHtudW1iZXJ9IHJlc29sdXRpb24gUmVzb2x1dGlvbi5cbiAqIEByZXR1cm4ge251bWJlcn0gUmVzb2x1dGlvbi5cbiAqL1xuX29sX3NvdXJjZV9JbWFnZV8ucHJvdG90eXBlLmZpbmROZWFyZXN0UmVzb2x1dGlvbiA9IGZ1bmN0aW9uKHJlc29sdXRpb24pIHtcbiAgaWYgKHRoaXMucmVzb2x1dGlvbnNfKSB7XG4gICAgdmFyIGlkeCA9IF9vbF9hcnJheV8ubGluZWFyRmluZE5lYXJlc3QodGhpcy5yZXNvbHV0aW9uc18sIHJlc29sdXRpb24sIDApO1xuICAgIHJlc29sdXRpb24gPSB0aGlzLnJlc29sdXRpb25zX1tpZHhdO1xuICB9XG4gIHJldHVybiByZXNvbHV0aW9uO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IHJlc29sdXRpb24gUmVzb2x1dGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBwaXhlbFJhdGlvIFBpeGVsIHJhdGlvLlxuICogQHBhcmFtIHtvbC5wcm9qLlByb2plY3Rpb259IHByb2plY3Rpb24gUHJvamVjdGlvbi5cbiAqIEByZXR1cm4ge29sLkltYWdlQmFzZX0gU2luZ2xlIGltYWdlLlxuICovXG5fb2xfc291cmNlX0ltYWdlXy5wcm90b3R5cGUuZ2V0SW1hZ2UgPSBmdW5jdGlvbihleHRlbnQsIHJlc29sdXRpb24sIHBpeGVsUmF0aW8sIHByb2plY3Rpb24pIHtcbiAgdmFyIHNvdXJjZVByb2plY3Rpb24gPSB0aGlzLmdldFByb2plY3Rpb24oKTtcbiAgaWYgKCFfb2xfLkVOQUJMRV9SQVNURVJfUkVQUk9KRUNUSU9OIHx8XG4gICAgICAhc291cmNlUHJvamVjdGlvbiB8fFxuICAgICAgIXByb2plY3Rpb24gfHxcbiAgICAgIF9vbF9wcm9qXy5lcXVpdmFsZW50KHNvdXJjZVByb2plY3Rpb24sIHByb2plY3Rpb24pKSB7XG4gICAgaWYgKHNvdXJjZVByb2plY3Rpb24pIHtcbiAgICAgIHByb2plY3Rpb24gPSBzb3VyY2VQcm9qZWN0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5nZXRJbWFnZUludGVybmFsKGV4dGVudCwgcmVzb2x1dGlvbiwgcGl4ZWxSYXRpbywgcHJvamVjdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHRoaXMucmVwcm9qZWN0ZWRJbWFnZV8pIHtcbiAgICAgIGlmICh0aGlzLnJlcHJvamVjdGVkUmV2aXNpb25fID09IHRoaXMuZ2V0UmV2aXNpb24oKSAmJlxuICAgICAgICAgIF9vbF9wcm9qXy5lcXVpdmFsZW50KFxuICAgICAgICAgICAgICB0aGlzLnJlcHJvamVjdGVkSW1hZ2VfLmdldFByb2plY3Rpb24oKSwgcHJvamVjdGlvbikgJiZcbiAgICAgICAgICB0aGlzLnJlcHJvamVjdGVkSW1hZ2VfLmdldFJlc29sdXRpb24oKSA9PSByZXNvbHV0aW9uICYmXG4gICAgICAgICAgX29sX2V4dGVudF8uZXF1YWxzKHRoaXMucmVwcm9qZWN0ZWRJbWFnZV8uZ2V0RXh0ZW50KCksIGV4dGVudCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwcm9qZWN0ZWRJbWFnZV87XG4gICAgICB9XG4gICAgICB0aGlzLnJlcHJvamVjdGVkSW1hZ2VfLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMucmVwcm9qZWN0ZWRJbWFnZV8gPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMucmVwcm9qZWN0ZWRJbWFnZV8gPSBuZXcgX29sX3JlcHJval9JbWFnZV8oXG4gICAgICAgIHNvdXJjZVByb2plY3Rpb24sIHByb2plY3Rpb24sIGV4dGVudCwgcmVzb2x1dGlvbiwgcGl4ZWxSYXRpbyxcbiAgICAgICAgZnVuY3Rpb24oZXh0ZW50LCByZXNvbHV0aW9uLCBwaXhlbFJhdGlvKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW1hZ2VJbnRlcm5hbChleHRlbnQsIHJlc29sdXRpb24sXG4gICAgICAgICAgICAgIHBpeGVsUmF0aW8sIHNvdXJjZVByb2plY3Rpb24pO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIHRoaXMucmVwcm9qZWN0ZWRSZXZpc2lvbl8gPSB0aGlzLmdldFJldmlzaW9uKCk7XG5cbiAgICByZXR1cm4gdGhpcy5yZXByb2plY3RlZEltYWdlXztcbiAgfVxufTtcblxuXG4vKipcbiAqIEBhYnN0cmFjdFxuICogQHBhcmFtIHtvbC5FeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gcmVzb2x1dGlvbiBSZXNvbHV0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IHBpeGVsUmF0aW8gUGl4ZWwgcmF0aW8uXG4gKiBAcGFyYW0ge29sLnByb2ouUHJvamVjdGlvbn0gcHJvamVjdGlvbiBQcm9qZWN0aW9uLlxuICogQHJldHVybiB7b2wuSW1hZ2VCYXNlfSBTaW5nbGUgaW1hZ2UuXG4gKiBAcHJvdGVjdGVkXG4gKi9cbl9vbF9zb3VyY2VfSW1hZ2VfLnByb3RvdHlwZS5nZXRJbWFnZUludGVybmFsID0gZnVuY3Rpb24oZXh0ZW50LCByZXNvbHV0aW9uLCBwaXhlbFJhdGlvLCBwcm9qZWN0aW9uKSB7fTtcblxuXG4vKipcbiAqIEhhbmRsZSBpbWFnZSBjaGFuZ2UgZXZlbnRzLlxuICogQHBhcmFtIHtvbC5ldmVudHMuRXZlbnR9IGV2ZW50IEV2ZW50LlxuICogQHByb3RlY3RlZFxuICovXG5fb2xfc291cmNlX0ltYWdlXy5wcm90b3R5cGUuaGFuZGxlSW1hZ2VDaGFuZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICB2YXIgaW1hZ2UgPSAvKiogQHR5cGUge29sLkltYWdlfSAqLyAoZXZlbnQudGFyZ2V0KTtcbiAgc3dpdGNoIChpbWFnZS5nZXRTdGF0ZSgpKSB7XG4gICAgY2FzZSBfb2xfSW1hZ2VTdGF0ZV8uTE9BRElORzpcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICBuZXcgX29sX3NvdXJjZV9JbWFnZV8uRXZlbnQoX29sX3NvdXJjZV9JbWFnZV8uRXZlbnRUeXBlXy5JTUFHRUxPQURTVEFSVCxcbiAgICAgICAgICAgICAgaW1hZ2UpKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgX29sX0ltYWdlU3RhdGVfLkxPQURFRDpcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICBuZXcgX29sX3NvdXJjZV9JbWFnZV8uRXZlbnQoX29sX3NvdXJjZV9JbWFnZV8uRXZlbnRUeXBlXy5JTUFHRUxPQURFTkQsXG4gICAgICAgICAgICAgIGltYWdlKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIF9vbF9JbWFnZVN0YXRlXy5FUlJPUjpcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICBuZXcgX29sX3NvdXJjZV9JbWFnZV8uRXZlbnQoX29sX3NvdXJjZV9JbWFnZV8uRXZlbnRUeXBlXy5JTUFHRUxPQURFUlJPUixcbiAgICAgICAgICAgICAgaW1hZ2UpKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBwYXNzXG4gIH1cbn07XG5cblxuLyoqXG4gKiBEZWZhdWx0IGltYWdlIGxvYWQgZnVuY3Rpb24gZm9yIGltYWdlIHNvdXJjZXMgdGhhdCB1c2Ugb2wuSW1hZ2UgaW1hZ2VcbiAqIGluc3RhbmNlcy5cbiAqIEBwYXJhbSB7b2wuSW1hZ2V9IGltYWdlIEltYWdlLlxuICogQHBhcmFtIHtzdHJpbmd9IHNyYyBTb3VyY2UuXG4gKi9cbl9vbF9zb3VyY2VfSW1hZ2VfLmRlZmF1bHRJbWFnZUxvYWRGdW5jdGlvbiA9IGZ1bmN0aW9uKGltYWdlLCBzcmMpIHtcbiAgaW1hZ2UuZ2V0SW1hZ2UoKS5zcmMgPSBzcmM7XG59O1xuXG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogRXZlbnRzIGVtaXR0ZWQgYnkge0BsaW5rIG9sLnNvdXJjZS5JbWFnZX0gaW5zdGFuY2VzIGFyZSBpbnN0YW5jZXMgb2YgdGhpc1xuICogdHlwZS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBleHRlbmRzIHtvbC5ldmVudHMuRXZlbnR9XG4gKiBAaW1wbGVtZW50cyB7b2xpLnNvdXJjZS5JbWFnZUV2ZW50fVxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVHlwZS5cbiAqIEBwYXJhbSB7b2wuSW1hZ2V9IGltYWdlIFRoZSBpbWFnZS5cbiAqL1xuX29sX3NvdXJjZV9JbWFnZV8uRXZlbnQgPSBmdW5jdGlvbih0eXBlLCBpbWFnZSkge1xuXG4gIF9vbF9ldmVudHNfRXZlbnRfLmNhbGwodGhpcywgdHlwZSk7XG5cbiAgLyoqXG4gICAqIFRoZSBpbWFnZSByZWxhdGVkIHRvIHRoZSBldmVudC5cbiAgICogQHR5cGUge29sLkltYWdlfVxuICAgKiBAYXBpXG4gICAqL1xuICB0aGlzLmltYWdlID0gaW1hZ2U7XG5cbn07XG5fb2xfLmluaGVyaXRzKF9vbF9zb3VyY2VfSW1hZ2VfLkV2ZW50LCBfb2xfZXZlbnRzX0V2ZW50Xyk7XG5cblxuLyoqXG4gKiBAZW51bSB7c3RyaW5nfVxuICogQHByaXZhdGVcbiAqL1xuX29sX3NvdXJjZV9JbWFnZV8uRXZlbnRUeXBlXyA9IHtcblxuICAvKipcbiAgICogVHJpZ2dlcmVkIHdoZW4gYW4gaW1hZ2Ugc3RhcnRzIGxvYWRpbmcuXG4gICAqIEBldmVudCBvbC5zb3VyY2UuSW1hZ2UuRXZlbnQjaW1hZ2Vsb2Fkc3RhcnRcbiAgICogQGFwaVxuICAgKi9cbiAgSU1BR0VMT0FEU1RBUlQ6ICdpbWFnZWxvYWRzdGFydCcsXG5cbiAgLyoqXG4gICAqIFRyaWdnZXJlZCB3aGVuIGFuIGltYWdlIGZpbmlzaGVzIGxvYWRpbmcuXG4gICAqIEBldmVudCBvbC5zb3VyY2UuSW1hZ2UuRXZlbnQjaW1hZ2Vsb2FkZW5kXG4gICAqIEBhcGlcbiAgICovXG4gIElNQUdFTE9BREVORDogJ2ltYWdlbG9hZGVuZCcsXG5cbiAgLyoqXG4gICAqIFRyaWdnZXJlZCBpZiBpbWFnZSBsb2FkaW5nIHJlc3VsdHMgaW4gYW4gZXJyb3IuXG4gICAqIEBldmVudCBvbC5zb3VyY2UuSW1hZ2UuRXZlbnQjaW1hZ2Vsb2FkZXJyb3JcbiAgICogQGFwaVxuICAgKi9cbiAgSU1BR0VMT0FERVJST1I6ICdpbWFnZWxvYWRlcnJvcidcblxufTtcbmV4cG9ydCBkZWZhdWx0IF9vbF9zb3VyY2VfSW1hZ2VfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvc291cmNlL2ltYWdlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBMYXRpdHVkZS9sb25naXR1ZGUgc3BoZXJpY2FsIGdlb2Rlc3kgZm9ybXVsYWUgdGFrZW4gZnJvbVxuICogaHR0cDovL3d3dy5tb3ZhYmxlLXR5cGUuY28udWsvc2NyaXB0cy9sYXRsb25nLmh0bWxcbiAqIExpY2Vuc2VkIHVuZGVyIENDLUJZLTMuMC5cbiAqL1xuXG5pbXBvcnQgX29sX21hdGhfIGZyb20gJy4vbWF0aC5qcyc7XG5pbXBvcnQgX29sX2dlb21fR2VvbWV0cnlUeXBlXyBmcm9tICcuL2dlb20vZ2VvbWV0cnl0eXBlLmpzJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBDbGFzcyB0byBjcmVhdGUgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkIHdpdGgge0BsaW5rXG4gKiBvbC5nZW9tLlBvbHlnb24uY2lyY3VsYXJ9LlxuICpcbiAqIEZvciBleGFtcGxlIHRvIGNyZWF0ZSBhIHNwaGVyZSB3aG9zZSByYWRpdXMgaXMgZXF1YWwgdG8gdGhlIHNlbWktbWFqb3JcbiAqIGF4aXMgb2YgdGhlIFdHUzg0IGVsbGlwc29pZDpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHdnczg0U3BoZXJlPSBuZXcgb2wuU3BoZXJlKDYzNzgxMzcpO1xuICogYGBgXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzIFJhZGl1cy5cbiAqIEBhcGlcbiAqL1xudmFyIF9vbF9TcGhlcmVfID0gZnVuY3Rpb24ocmFkaXVzKSB7XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcblxufTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIGdlb2Rlc2ljIGFyZWEgZm9yIGEgbGlzdCBvZiBjb29yZGluYXRlcy5cbiAqXG4gKiBbUmVmZXJlbmNlXShodHRwczovL3Rycy1uZXcuanBsLm5hc2EuZ292L2hhbmRsZS8yMDE0LzQwNDA5KVxuICogUm9iZXJ0LiBHLiBDaGFtYmVybGFpbiBhbmQgV2lsbGlhbSBILiBEdXF1ZXR0ZSwgXCJTb21lIEFsZ29yaXRobXMgZm9yXG4gKiBQb2x5Z29ucyBvbiBhIFNwaGVyZVwiLCBKUEwgUHVibGljYXRpb24gMDctMDMsIEpldCBQcm9wdWxzaW9uXG4gKiBMYWJvcmF0b3J5LCBQYXNhZGVuYSwgQ0EsIEp1bmUgMjAwN1xuICpcbiAqIEBwYXJhbSB7QXJyYXkuPG9sLkNvb3JkaW5hdGU+fSBjb29yZGluYXRlcyBMaXN0IG9mIGNvb3JkaW5hdGVzIG9mIGEgbGluZWFyXG4gKiByaW5nLiBJZiB0aGUgcmluZyBpcyBvcmllbnRlZCBjbG9ja3dpc2UsIHRoZSBhcmVhIHdpbGwgYmUgcG9zaXRpdmUsXG4gKiBvdGhlcndpc2UgaXQgd2lsbCBiZSBuZWdhdGl2ZS5cbiAqIEByZXR1cm4ge251bWJlcn0gQXJlYS5cbiAqIEBhcGlcbiAqL1xuX29sX1NwaGVyZV8ucHJvdG90eXBlLmdlb2Rlc2ljQXJlYSA9IGZ1bmN0aW9uKGNvb3JkaW5hdGVzKSB7XG4gIHJldHVybiBfb2xfU3BoZXJlXy5nZXRBcmVhXyhjb29yZGluYXRlcywgdGhpcy5yYWRpdXMpO1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIGRpc3RhbmNlIGZyb20gYzEgdG8gYzIgdXNpbmcgdGhlIGhhdmVyc2luZSBmb3JtdWxhLlxuICpcbiAqIEBwYXJhbSB7b2wuQ29vcmRpbmF0ZX0gYzEgQ29vcmRpbmF0ZSAxLlxuICogQHBhcmFtIHtvbC5Db29yZGluYXRlfSBjMiBDb29yZGluYXRlIDIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEhhdmVyc2luZSBkaXN0YW5jZS5cbiAqIEBhcGlcbiAqL1xuX29sX1NwaGVyZV8ucHJvdG90eXBlLmhhdmVyc2luZURpc3RhbmNlID0gZnVuY3Rpb24oYzEsIGMyKSB7XG4gIHJldHVybiBfb2xfU3BoZXJlXy5nZXREaXN0YW5jZV8oYzEsIGMyLCB0aGlzLnJhZGl1cyk7XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgY29vcmRpbmF0ZSBhdCB0aGUgZ2l2ZW4gZGlzdGFuY2UgYW5kIGJlYXJpbmcgZnJvbSBgYzFgLlxuICpcbiAqIEBwYXJhbSB7b2wuQ29vcmRpbmF0ZX0gYzEgVGhlIG9yaWdpbiBwb2ludCAoYFtsb24sIGxhdF1gIGluIGRlZ3JlZXMpLlxuICogQHBhcmFtIHtudW1iZXJ9IGRpc3RhbmNlIFRoZSBncmVhdC1jaXJjbGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgb3JpZ2luXG4gKiAgICAgcG9pbnQgYW5kIHRoZSB0YXJnZXQgcG9pbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gYmVhcmluZyBUaGUgYmVhcmluZyAoaW4gcmFkaWFucykuXG4gKiBAcmV0dXJuIHtvbC5Db29yZGluYXRlfSBUaGUgdGFyZ2V0IHBvaW50LlxuICovXG5fb2xfU3BoZXJlXy5wcm90b3R5cGUub2Zmc2V0ID0gZnVuY3Rpb24oYzEsIGRpc3RhbmNlLCBiZWFyaW5nKSB7XG4gIHZhciBsYXQxID0gX29sX21hdGhfLnRvUmFkaWFucyhjMVsxXSk7XG4gIHZhciBsb24xID0gX29sX21hdGhfLnRvUmFkaWFucyhjMVswXSk7XG4gIHZhciBkQnlSID0gZGlzdGFuY2UgLyB0aGlzLnJhZGl1cztcbiAgdmFyIGxhdCA9IE1hdGguYXNpbihcbiAgICAgIE1hdGguc2luKGxhdDEpICogTWF0aC5jb3MoZEJ5UikgK1xuICAgICAgTWF0aC5jb3MobGF0MSkgKiBNYXRoLnNpbihkQnlSKSAqIE1hdGguY29zKGJlYXJpbmcpKTtcbiAgdmFyIGxvbiA9IGxvbjEgKyBNYXRoLmF0YW4yKFxuICAgICAgTWF0aC5zaW4oYmVhcmluZykgKiBNYXRoLnNpbihkQnlSKSAqIE1hdGguY29zKGxhdDEpLFxuICAgICAgTWF0aC5jb3MoZEJ5UikgLSBNYXRoLnNpbihsYXQxKSAqIE1hdGguc2luKGxhdCkpO1xuICByZXR1cm4gW19vbF9tYXRoXy50b0RlZ3JlZXMobG9uKSwgX29sX21hdGhfLnRvRGVncmVlcyhsYXQpXTtcbn07XG5cblxuLyoqXG4gKiBUaGUgbWVhbiBFYXJ0aCByYWRpdXMgKDEvMyAqICgyYSArIGIpKSBmb3IgdGhlIFdHUzg0IGVsbGlwc29pZC5cbiAqIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0VhcnRoX3JhZGl1cyNNZWFuX3JhZGl1c1xuICogQHR5cGUge251bWJlcn1cbiAqL1xuX29sX1NwaGVyZV8uREVGQVVMVF9SQURJVVMgPSA2MzcxMDA4Ljg7XG5cblxuLyoqXG4gKiBHZXQgdGhlIHNwaGVyaWNhbCBsZW5ndGggb2YgYSBnZW9tZXRyeS4gIFRoaXMgbGVuZ3RoIGlzIHRoZSBzdW0gb2YgdGhlXG4gKiBncmVhdCBjaXJjbGUgZGlzdGFuY2VzIGJldHdlZW4gY29vcmRpbmF0ZXMuICBGb3IgcG9seWdvbnMsIHRoZSBsZW5ndGggaXNcbiAqIHRoZSBzdW0gb2YgYWxsIHJpbmdzLiAgRm9yIHBvaW50cywgdGhlIGxlbmd0aCBpcyB6ZXJvLiAgRm9yIG11bHRpLXBhcnRcbiAqIGdlb21ldHJpZXMsIHRoZSBsZW5ndGggaXMgdGhlIHN1bSBvZiB0aGUgbGVuZ3RoIG9mIGVhY2ggcGFydC5cbiAqIEBwYXJhbSB7b2wuZ2VvbS5HZW9tZXRyeX0gZ2VvbWV0cnkgQSBnZW9tZXRyeS5cbiAqIEBwYXJhbSB7b2x4LlNwaGVyZU1ldHJpY09wdGlvbnM9fSBvcHRfb3B0aW9ucyBPcHRpb25zIGZvciB0aGUgbGVuZ3RoXG4gKiAgICAgY2FsY3VsYXRpb24uICBCeSBkZWZhdWx0LCBnZW9tZXRyaWVzIGFyZSBhc3N1bWVkIHRvIGJlIGluICdFUFNHOjM4NTcnLlxuICogICAgIFlvdSBjYW4gY2hhbmdlIHRoaXMgYnkgcHJvdmlkaW5nIGEgYHByb2plY3Rpb25gIG9wdGlvbi5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIHNwaGVyaWNhbCBsZW5ndGggKGluIG1ldGVycykuXG4gKiBAYXBpXG4gKi9cbl9vbF9TcGhlcmVfLmdldExlbmd0aCA9IGZ1bmN0aW9uKGdlb21ldHJ5LCBvcHRfb3B0aW9ucykge1xuICB2YXIgb3B0aW9ucyA9IG9wdF9vcHRpb25zIHx8IHt9O1xuICB2YXIgcmFkaXVzID0gb3B0aW9ucy5yYWRpdXMgfHwgX29sX1NwaGVyZV8uREVGQVVMVF9SQURJVVM7XG4gIHZhciBwcm9qZWN0aW9uID0gb3B0aW9ucy5wcm9qZWN0aW9uIHx8ICdFUFNHOjM4NTcnO1xuICBnZW9tZXRyeSA9IGdlb21ldHJ5LmNsb25lKCkudHJhbnNmb3JtKHByb2plY3Rpb24sICdFUFNHOjQzMjYnKTtcbiAgdmFyIHR5cGUgPSBnZW9tZXRyeS5nZXRUeXBlKCk7XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgY29vcmRpbmF0ZXMsIGNvb3JkcywgaSwgaWksIGosIGpqO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIF9vbF9nZW9tX0dlb21ldHJ5VHlwZV8uUE9JTlQ6XG4gICAgY2FzZSBfb2xfZ2VvbV9HZW9tZXRyeVR5cGVfLk1VTFRJX1BPSU5UOiB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBfb2xfZ2VvbV9HZW9tZXRyeVR5cGVfLkxJTkVfU1RSSU5HOlxuICAgIGNhc2UgX29sX2dlb21fR2VvbWV0cnlUeXBlXy5MSU5FQVJfUklORzoge1xuICAgICAgY29vcmRpbmF0ZXMgPSAvKiogQHR5cGUge29sLmdlb20uU2ltcGxlR2VvbWV0cnl9ICovIChnZW9tZXRyeSkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgIGxlbmd0aCA9IF9vbF9TcGhlcmVfLmdldExlbmd0aF8oY29vcmRpbmF0ZXMsIHJhZGl1cyk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBfb2xfZ2VvbV9HZW9tZXRyeVR5cGVfLk1VTFRJX0xJTkVfU1RSSU5HOlxuICAgIGNhc2UgX29sX2dlb21fR2VvbWV0cnlUeXBlXy5QT0xZR09OOiB7XG4gICAgICBjb29yZGluYXRlcyA9IC8qKiBAdHlwZSB7b2wuZ2VvbS5TaW1wbGVHZW9tZXRyeX0gKi8gKGdlb21ldHJ5KS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgZm9yIChpID0gMCwgaWkgPSBjb29yZGluYXRlcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgIGxlbmd0aCArPSBfb2xfU3BoZXJlXy5nZXRMZW5ndGhfKGNvb3JkaW5hdGVzW2ldLCByYWRpdXMpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgX29sX2dlb21fR2VvbWV0cnlUeXBlXy5NVUxUSV9QT0xZR09OOiB7XG4gICAgICBjb29yZGluYXRlcyA9IC8qKiBAdHlwZSB7b2wuZ2VvbS5TaW1wbGVHZW9tZXRyeX0gKi8gKGdlb21ldHJ5KS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgZm9yIChpID0gMCwgaWkgPSBjb29yZGluYXRlcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgIGNvb3JkcyA9IGNvb3JkaW5hdGVzW2ldO1xuICAgICAgICBmb3IgKGogPSAwLCBqaiA9IGNvb3Jkcy5sZW5ndGg7IGogPCBqajsgKytqKSB7XG4gICAgICAgICAgbGVuZ3RoICs9IF9vbF9TcGhlcmVfLmdldExlbmd0aF8oY29vcmRzW2pdLCByYWRpdXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBfb2xfZ2VvbV9HZW9tZXRyeVR5cGVfLkdFT01FVFJZX0NPTExFQ1RJT046IHtcbiAgICAgIHZhciBnZW9tZXRyaWVzID0gLyoqIEB0eXBlIHtvbC5nZW9tLkdlb21ldHJ5Q29sbGVjdGlvbn0gKi8gKGdlb21ldHJ5KS5nZXRHZW9tZXRyaWVzKCk7XG4gICAgICBmb3IgKGkgPSAwLCBpaSA9IGdlb21ldHJpZXMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgICBsZW5ndGggKz0gX29sX1NwaGVyZV8uZ2V0TGVuZ3RoKGdlb21ldHJpZXNbaV0sIG9wdF9vcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIGdlb21ldHJ5IHR5cGU6ICcgKyB0eXBlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGxlbmd0aDtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIGN1bXVsYXRpdmUgZ3JlYXQgY2lyY2xlIGxlbmd0aCBvZiBsaW5lc3RyaW5nIGNvb3JkaW5hdGVzIChnZW9ncmFwaGljKS5cbiAqIEBwYXJhbSB7QXJyYXl9IGNvb3JkaW5hdGVzIExpbmVzdHJpbmcgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzIFRoZSBzcGhlcmUgcmFkaXVzIHRvIHVzZS5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGxlbmd0aCAoaW4gbWV0ZXJzKS5cbiAqL1xuX29sX1NwaGVyZV8uZ2V0TGVuZ3RoXyA9IGZ1bmN0aW9uKGNvb3JkaW5hdGVzLCByYWRpdXMpIHtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIGZvciAodmFyIGkgPSAwLCBpaSA9IGNvb3JkaW5hdGVzLmxlbmd0aDsgaSA8IGlpIC0gMTsgKytpKSB7XG4gICAgbGVuZ3RoICs9IF9vbF9TcGhlcmVfLmdldERpc3RhbmNlXyhjb29yZGluYXRlc1tpXSwgY29vcmRpbmF0ZXNbaSArIDFdLCByYWRpdXMpO1xuICB9XG4gIHJldHVybiBsZW5ndGg7XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBncmVhdCBjaXJjbGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gZ2VvZ3JhcGhpYyBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7QXJyYXl9IGMxIFN0YXJ0aW5nIGNvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge0FycmF5fSBjMiBFbmRpbmcgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgVGhlIHNwaGVyZSByYWRpdXMgdG8gdXNlLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgZ3JlYXQgY2lyY2xlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHBvaW50cyAoaW4gbWV0ZXJzKS5cbiAqL1xuX29sX1NwaGVyZV8uZ2V0RGlzdGFuY2VfID0gZnVuY3Rpb24oYzEsIGMyLCByYWRpdXMpIHtcbiAgdmFyIGxhdDEgPSBfb2xfbWF0aF8udG9SYWRpYW5zKGMxWzFdKTtcbiAgdmFyIGxhdDIgPSBfb2xfbWF0aF8udG9SYWRpYW5zKGMyWzFdKTtcbiAgdmFyIGRlbHRhTGF0QnkyID0gKGxhdDIgLSBsYXQxKSAvIDI7XG4gIHZhciBkZWx0YUxvbkJ5MiA9IF9vbF9tYXRoXy50b1JhZGlhbnMoYzJbMF0gLSBjMVswXSkgLyAyO1xuICB2YXIgYSA9IE1hdGguc2luKGRlbHRhTGF0QnkyKSAqIE1hdGguc2luKGRlbHRhTGF0QnkyKSArXG4gICAgICBNYXRoLnNpbihkZWx0YUxvbkJ5MikgKiBNYXRoLnNpbihkZWx0YUxvbkJ5MikgKlxuICAgICAgTWF0aC5jb3MobGF0MSkgKiBNYXRoLmNvcyhsYXQyKTtcbiAgcmV0dXJuIDIgKiByYWRpdXMgKiBNYXRoLmF0YW4yKE1hdGguc3FydChhKSwgTWF0aC5zcXJ0KDEgLSBhKSk7XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBzcGhlcmljYWwgYXJlYSBvZiBhIGdlb21ldHJ5LiAgVGhpcyBpcyB0aGUgYXJlYSAoaW4gbWV0ZXJzKSBhc3N1bWluZ1xuICogdGhhdCBwb2x5Z29uIGVkZ2VzIGFyZSBzZWdtZW50cyBvZiBncmVhdCBjaXJjbGVzIG9uIGEgc3BoZXJlLlxuICogQHBhcmFtIHtvbC5nZW9tLkdlb21ldHJ5fSBnZW9tZXRyeSBBIGdlb21ldHJ5LlxuICogQHBhcmFtIHtvbHguU3BoZXJlTWV0cmljT3B0aW9ucz19IG9wdF9vcHRpb25zIE9wdGlvbnMgZm9yIHRoZSBhcmVhXG4gKiAgICAgY2FsY3VsYXRpb24uICBCeSBkZWZhdWx0LCBnZW9tZXRyaWVzIGFyZSBhc3N1bWVkIHRvIGJlIGluICdFUFNHOjM4NTcnLlxuICogICAgIFlvdSBjYW4gY2hhbmdlIHRoaXMgYnkgcHJvdmlkaW5nIGEgYHByb2plY3Rpb25gIG9wdGlvbi5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIHNwaGVyaWNhbCBhcmVhIChpbiBzcXVhcmUgbWV0ZXJzKS5cbiAqIEBhcGlcbiAqL1xuX29sX1NwaGVyZV8uZ2V0QXJlYSA9IGZ1bmN0aW9uKGdlb21ldHJ5LCBvcHRfb3B0aW9ucykge1xuICB2YXIgb3B0aW9ucyA9IG9wdF9vcHRpb25zIHx8IHt9O1xuICB2YXIgcmFkaXVzID0gb3B0aW9ucy5yYWRpdXMgfHwgX29sX1NwaGVyZV8uREVGQVVMVF9SQURJVVM7XG4gIHZhciBwcm9qZWN0aW9uID0gb3B0aW9ucy5wcm9qZWN0aW9uIHx8ICdFUFNHOjM4NTcnO1xuICBnZW9tZXRyeSA9IGdlb21ldHJ5LmNsb25lKCkudHJhbnNmb3JtKHByb2plY3Rpb24sICdFUFNHOjQzMjYnKTtcbiAgdmFyIHR5cGUgPSBnZW9tZXRyeS5nZXRUeXBlKCk7XG4gIHZhciBhcmVhID0gMDtcbiAgdmFyIGNvb3JkaW5hdGVzLCBjb29yZHMsIGksIGlpLCBqLCBqajtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBfb2xfZ2VvbV9HZW9tZXRyeVR5cGVfLlBPSU5UOlxuICAgIGNhc2UgX29sX2dlb21fR2VvbWV0cnlUeXBlXy5NVUxUSV9QT0lOVDpcbiAgICBjYXNlIF9vbF9nZW9tX0dlb21ldHJ5VHlwZV8uTElORV9TVFJJTkc6XG4gICAgY2FzZSBfb2xfZ2VvbV9HZW9tZXRyeVR5cGVfLk1VTFRJX0xJTkVfU1RSSU5HOlxuICAgIGNhc2UgX29sX2dlb21fR2VvbWV0cnlUeXBlXy5MSU5FQVJfUklORzoge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgX29sX2dlb21fR2VvbWV0cnlUeXBlXy5QT0xZR09OOiB7XG4gICAgICBjb29yZGluYXRlcyA9IC8qKiBAdHlwZSB7b2wuZ2VvbS5Qb2x5Z29ufSAqLyAoZ2VvbWV0cnkpLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICBhcmVhID0gTWF0aC5hYnMoX29sX1NwaGVyZV8uZ2V0QXJlYV8oY29vcmRpbmF0ZXNbMF0sIHJhZGl1cykpO1xuICAgICAgZm9yIChpID0gMSwgaWkgPSBjb29yZGluYXRlcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgIGFyZWEgLT0gTWF0aC5hYnMoX29sX1NwaGVyZV8uZ2V0QXJlYV8oY29vcmRpbmF0ZXNbaV0sIHJhZGl1cykpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgX29sX2dlb21fR2VvbWV0cnlUeXBlXy5NVUxUSV9QT0xZR09OOiB7XG4gICAgICBjb29yZGluYXRlcyA9IC8qKiBAdHlwZSB7b2wuZ2VvbS5TaW1wbGVHZW9tZXRyeX0gKi8gKGdlb21ldHJ5KS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgZm9yIChpID0gMCwgaWkgPSBjb29yZGluYXRlcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgIGNvb3JkcyA9IGNvb3JkaW5hdGVzW2ldO1xuICAgICAgICBhcmVhICs9IE1hdGguYWJzKF9vbF9TcGhlcmVfLmdldEFyZWFfKGNvb3Jkc1swXSwgcmFkaXVzKSk7XG4gICAgICAgIGZvciAoaiA9IDEsIGpqID0gY29vcmRzLmxlbmd0aDsgaiA8IGpqOyArK2opIHtcbiAgICAgICAgICBhcmVhIC09IE1hdGguYWJzKF9vbF9TcGhlcmVfLmdldEFyZWFfKGNvb3Jkc1tqXSwgcmFkaXVzKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIF9vbF9nZW9tX0dlb21ldHJ5VHlwZV8uR0VPTUVUUllfQ09MTEVDVElPTjoge1xuICAgICAgdmFyIGdlb21ldHJpZXMgPSAvKiogQHR5cGUge29sLmdlb20uR2VvbWV0cnlDb2xsZWN0aW9ufSAqLyAoZ2VvbWV0cnkpLmdldEdlb21ldHJpZXMoKTtcbiAgICAgIGZvciAoaSA9IDAsIGlpID0gZ2VvbWV0cmllcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgIGFyZWEgKz0gX29sX1NwaGVyZV8uZ2V0QXJlYShnZW9tZXRyaWVzW2ldLCBvcHRfb3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBnZW9tZXRyeSB0eXBlOiAnICsgdHlwZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcmVhO1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIHNwaGVyaWNhbCBhcmVhIGZvciBhIGxpc3Qgb2YgY29vcmRpbmF0ZXMuXG4gKlxuICogW1JlZmVyZW5jZV0oaHR0cHM6Ly90cnMtbmV3LmpwbC5uYXNhLmdvdi9oYW5kbGUvMjAxNC80MDQwOSlcbiAqIFJvYmVydC4gRy4gQ2hhbWJlcmxhaW4gYW5kIFdpbGxpYW0gSC4gRHVxdWV0dGUsIFwiU29tZSBBbGdvcml0aG1zIGZvclxuICogUG9seWdvbnMgb24gYSBTcGhlcmVcIiwgSlBMIFB1YmxpY2F0aW9uIDA3LTAzLCBKZXQgUHJvcHVsc2lvblxuICogTGFib3JhdG9yeSwgUGFzYWRlbmEsIENBLCBKdW5lIDIwMDdcbiAqXG4gKiBAcGFyYW0ge0FycmF5LjxvbC5Db29yZGluYXRlPn0gY29vcmRpbmF0ZXMgTGlzdCBvZiBjb29yZGluYXRlcyBvZiBhIGxpbmVhclxuICogcmluZy4gSWYgdGhlIHJpbmcgaXMgb3JpZW50ZWQgY2xvY2t3aXNlLCB0aGUgYXJlYSB3aWxsIGJlIHBvc2l0aXZlLFxuICogb3RoZXJ3aXNlIGl0IHdpbGwgYmUgbmVnYXRpdmUuXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzIFRoZSBzcGhlcmUgcmFkaXVzLlxuICogQHJldHVybiB7bnVtYmVyfSBBcmVhIChpbiBzcXVhcmUgbWV0ZXJzKS5cbiAqL1xuX29sX1NwaGVyZV8uZ2V0QXJlYV8gPSBmdW5jdGlvbihjb29yZGluYXRlcywgcmFkaXVzKSB7XG4gIHZhciBhcmVhID0gMCwgbGVuID0gY29vcmRpbmF0ZXMubGVuZ3RoO1xuICB2YXIgeDEgPSBjb29yZGluYXRlc1tsZW4gLSAxXVswXTtcbiAgdmFyIHkxID0gY29vcmRpbmF0ZXNbbGVuIC0gMV1bMV07XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgeDIgPSBjb29yZGluYXRlc1tpXVswXSwgeTIgPSBjb29yZGluYXRlc1tpXVsxXTtcbiAgICBhcmVhICs9IF9vbF9tYXRoXy50b1JhZGlhbnMoeDIgLSB4MSkgKlxuICAgICAgICAoMiArIE1hdGguc2luKF9vbF9tYXRoXy50b1JhZGlhbnMoeTEpKSArXG4gICAgICAgIE1hdGguc2luKF9vbF9tYXRoXy50b1JhZGlhbnMoeTIpKSk7XG4gICAgeDEgPSB4MjtcbiAgICB5MSA9IHkyO1xuICB9XG4gIHJldHVybiBhcmVhICogcmFkaXVzICogcmFkaXVzIC8gMi4wO1xufTtcbmV4cG9ydCBkZWZhdWx0IF9vbF9TcGhlcmVfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvc3BoZXJlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoZSBnZW9tZXRyeSB0eXBlLiBPbmUgb2YgYCdQb2ludCdgLCBgJ0xpbmVTdHJpbmcnYCwgYCdMaW5lYXJSaW5nJ2AsXG4gKiBgJ1BvbHlnb24nYCwgYCdNdWx0aVBvaW50J2AsIGAnTXVsdGlMaW5lU3RyaW5nJ2AsIGAnTXVsdGlQb2x5Z29uJ2AsXG4gKiBgJ0dlb21ldHJ5Q29sbGVjdGlvbidgLCBgJ0NpcmNsZSdgLlxuICogQGVudW0ge3N0cmluZ31cbiAqL1xudmFyIF9vbF9nZW9tX0dlb21ldHJ5VHlwZV8gPSB7XG4gIFBPSU5UOiAnUG9pbnQnLFxuICBMSU5FX1NUUklORzogJ0xpbmVTdHJpbmcnLFxuICBMSU5FQVJfUklORzogJ0xpbmVhclJpbmcnLFxuICBQT0xZR09OOiAnUG9seWdvbicsXG4gIE1VTFRJX1BPSU5UOiAnTXVsdGlQb2ludCcsXG4gIE1VTFRJX0xJTkVfU1RSSU5HOiAnTXVsdGlMaW5lU3RyaW5nJyxcbiAgTVVMVElfUE9MWUdPTjogJ011bHRpUG9seWdvbicsXG4gIEdFT01FVFJZX0NPTExFQ1RJT046ICdHZW9tZXRyeUNvbGxlY3Rpb24nLFxuICBDSVJDTEU6ICdDaXJjbGUnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBfb2xfZ2VvbV9HZW9tZXRyeVR5cGVfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvZ2VvbS9nZW9tZXRyeXR5cGUuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfb2xfIGZyb20gJy4uL2luZGV4LmpzJztcbmltcG9ydCBfb2xfbWF0aF8gZnJvbSAnLi4vbWF0aC5qcyc7XG5pbXBvcnQgX29sX3Byb2pfUHJvamVjdGlvbl8gZnJvbSAnLi4vcHJvai9wcm9qZWN0aW9uLmpzJztcbmltcG9ydCBfb2xfcHJval9Vbml0c18gZnJvbSAnLi4vcHJvai91bml0cy5qcyc7XG52YXIgX29sX3Byb2pfRVBTRzM4NTdfID0ge307XG5cblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBQcm9qZWN0aW9uIG9iamVjdCBmb3Igd2ViL3NwaGVyaWNhbCBNZXJjYXRvciAoRVBTRzozODU3KS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBleHRlbmRzIHtvbC5wcm9qLlByb2plY3Rpb259XG4gKiBAcGFyYW0ge3N0cmluZ30gY29kZSBDb2RlLlxuICogQHByaXZhdGVcbiAqL1xuX29sX3Byb2pfRVBTRzM4NTdfLlByb2plY3Rpb25fID0gZnVuY3Rpb24oY29kZSkge1xuICBfb2xfcHJval9Qcm9qZWN0aW9uXy5jYWxsKHRoaXMsIHtcbiAgICBjb2RlOiBjb2RlLFxuICAgIHVuaXRzOiBfb2xfcHJval9Vbml0c18uTUVURVJTLFxuICAgIGV4dGVudDogX29sX3Byb2pfRVBTRzM4NTdfLkVYVEVOVCxcbiAgICBnbG9iYWw6IHRydWUsXG4gICAgd29ybGRFeHRlbnQ6IF9vbF9wcm9qX0VQU0czODU3Xy5XT1JMRF9FWFRFTlQsXG4gICAgZ2V0UG9pbnRSZXNvbHV0aW9uOiBmdW5jdGlvbihyZXNvbHV0aW9uLCBwb2ludCkge1xuICAgICAgcmV0dXJuIHJlc29sdXRpb24gLyBfb2xfbWF0aF8uY29zaChwb2ludFsxXSAvIF9vbF9wcm9qX0VQU0czODU3Xy5SQURJVVMpO1xuICAgIH1cbiAgfSk7XG59O1xuX29sXy5pbmhlcml0cyhfb2xfcHJval9FUFNHMzg1N18uUHJvamVjdGlvbl8sIF9vbF9wcm9qX1Byb2plY3Rpb25fKTtcblxuXG4vKipcbiAqIFJhZGl1cyBvZiBXR1M4NCBzcGhlcmVcbiAqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbl9vbF9wcm9qX0VQU0czODU3Xy5SQURJVVMgPSA2Mzc4MTM3O1xuXG5cbi8qKlxuICogQGNvbnN0XG4gKiBAdHlwZSB7bnVtYmVyfVxuICovXG5fb2xfcHJval9FUFNHMzg1N18uSEFMRl9TSVpFID0gTWF0aC5QSSAqIF9vbF9wcm9qX0VQU0czODU3Xy5SQURJVVM7XG5cblxuLyoqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtvbC5FeHRlbnR9XG4gKi9cbl9vbF9wcm9qX0VQU0czODU3Xy5FWFRFTlQgPSBbXG4gIC1fb2xfcHJval9FUFNHMzg1N18uSEFMRl9TSVpFLCAtX29sX3Byb2pfRVBTRzM4NTdfLkhBTEZfU0laRSxcbiAgX29sX3Byb2pfRVBTRzM4NTdfLkhBTEZfU0laRSwgX29sX3Byb2pfRVBTRzM4NTdfLkhBTEZfU0laRVxuXTtcblxuXG4vKipcbiAqIEBjb25zdFxuICogQHR5cGUge29sLkV4dGVudH1cbiAqL1xuX29sX3Byb2pfRVBTRzM4NTdfLldPUkxEX0VYVEVOVCA9IFstMTgwLCAtODUsIDE4MCwgODVdO1xuXG5cbi8qKlxuICogUHJvamVjdGlvbnMgZXF1YWwgdG8gRVBTRzozODU3LlxuICpcbiAqIEBjb25zdFxuICogQHR5cGUge0FycmF5LjxvbC5wcm9qLlByb2plY3Rpb24+fVxuICovXG5fb2xfcHJval9FUFNHMzg1N18uUFJPSkVDVElPTlMgPSBbXG4gIG5ldyBfb2xfcHJval9FUFNHMzg1N18uUHJvamVjdGlvbl8oJ0VQU0c6Mzg1NycpLFxuICBuZXcgX29sX3Byb2pfRVBTRzM4NTdfLlByb2plY3Rpb25fKCdFUFNHOjEwMjEwMCcpLFxuICBuZXcgX29sX3Byb2pfRVBTRzM4NTdfLlByb2plY3Rpb25fKCdFUFNHOjEwMjExMycpLFxuICBuZXcgX29sX3Byb2pfRVBTRzM4NTdfLlByb2plY3Rpb25fKCdFUFNHOjkwMDkxMycpLFxuICBuZXcgX29sX3Byb2pfRVBTRzM4NTdfLlByb2plY3Rpb25fKCd1cm46b2djOmRlZjpjcnM6RVBTRzo2LjE4OjM6Mzg1NycpLFxuICBuZXcgX29sX3Byb2pfRVBTRzM4NTdfLlByb2plY3Rpb25fKCd1cm46b2djOmRlZjpjcnM6RVBTRzo6Mzg1NycpLFxuICBuZXcgX29sX3Byb2pfRVBTRzM4NTdfLlByb2plY3Rpb25fKCdodHRwOi8vd3d3Lm9wZW5naXMubmV0L2dtbC9zcnMvZXBzZy54bWwjMzg1NycpXG5dO1xuXG5cbi8qKlxuICogVHJhbnNmb3JtYXRpb24gZnJvbSBFUFNHOjQzMjYgdG8gRVBTRzozODU3LlxuICpcbiAqIEBwYXJhbSB7QXJyYXkuPG51bWJlcj59IGlucHV0IElucHV0IGFycmF5IG9mIGNvb3JkaW5hdGUgdmFsdWVzLlxuICogQHBhcmFtIHtBcnJheS48bnVtYmVyPj19IG9wdF9vdXRwdXQgT3V0cHV0IGFycmF5IG9mIGNvb3JkaW5hdGUgdmFsdWVzLlxuICogQHBhcmFtIHtudW1iZXI9fSBvcHRfZGltZW5zaW9uIERpbWVuc2lvbiAoZGVmYXVsdCBpcyBgMmApLlxuICogQHJldHVybiB7QXJyYXkuPG51bWJlcj59IE91dHB1dCBhcnJheSBvZiBjb29yZGluYXRlIHZhbHVlcy5cbiAqL1xuX29sX3Byb2pfRVBTRzM4NTdfLmZyb21FUFNHNDMyNiA9IGZ1bmN0aW9uKGlucHV0LCBvcHRfb3V0cHV0LCBvcHRfZGltZW5zaW9uKSB7XG4gIHZhciBsZW5ndGggPSBpbnB1dC5sZW5ndGgsXG4gICAgICBkaW1lbnNpb24gPSBvcHRfZGltZW5zaW9uID4gMSA/IG9wdF9kaW1lbnNpb24gOiAyLFxuICAgICAgb3V0cHV0ID0gb3B0X291dHB1dDtcbiAgaWYgKG91dHB1dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKGRpbWVuc2lvbiA+IDIpIHtcbiAgICAgIC8vIHByZXNlcnZlIHZhbHVlcyBiZXlvbmQgc2Vjb25kIGRpbWVuc2lvblxuICAgICAgb3V0cHV0ID0gaW5wdXQuc2xpY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0ID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgfVxuICB9XG4gIHZhciBoYWxmU2l6ZSA9IF9vbF9wcm9qX0VQU0czODU3Xy5IQUxGX1NJWkU7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IGRpbWVuc2lvbikge1xuICAgIG91dHB1dFtpXSA9IGhhbGZTaXplICogaW5wdXRbaV0gLyAxODA7XG4gICAgdmFyIHkgPSBfb2xfcHJval9FUFNHMzg1N18uUkFESVVTICpcbiAgICAgICAgTWF0aC5sb2coTWF0aC50YW4oTWF0aC5QSSAqIChpbnB1dFtpICsgMV0gKyA5MCkgLyAzNjApKTtcbiAgICBpZiAoeSA+IGhhbGZTaXplKSB7XG4gICAgICB5ID0gaGFsZlNpemU7XG4gICAgfSBlbHNlIGlmICh5IDwgLWhhbGZTaXplKSB7XG4gICAgICB5ID0gLWhhbGZTaXplO1xuICAgIH1cbiAgICBvdXRwdXRbaSArIDFdID0geTtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufTtcblxuXG4vKipcbiAqIFRyYW5zZm9ybWF0aW9uIGZyb20gRVBTRzozODU3IHRvIEVQU0c6NDMyNi5cbiAqXG4gKiBAcGFyYW0ge0FycmF5LjxudW1iZXI+fSBpbnB1dCBJbnB1dCBhcnJheSBvZiBjb29yZGluYXRlIHZhbHVlcy5cbiAqIEBwYXJhbSB7QXJyYXkuPG51bWJlcj49fSBvcHRfb3V0cHV0IE91dHB1dCBhcnJheSBvZiBjb29yZGluYXRlIHZhbHVlcy5cbiAqIEBwYXJhbSB7bnVtYmVyPX0gb3B0X2RpbWVuc2lvbiBEaW1lbnNpb24gKGRlZmF1bHQgaXMgYDJgKS5cbiAqIEByZXR1cm4ge0FycmF5LjxudW1iZXI+fSBPdXRwdXQgYXJyYXkgb2YgY29vcmRpbmF0ZSB2YWx1ZXMuXG4gKi9cbl9vbF9wcm9qX0VQU0czODU3Xy50b0VQU0c0MzI2ID0gZnVuY3Rpb24oaW5wdXQsIG9wdF9vdXRwdXQsIG9wdF9kaW1lbnNpb24pIHtcbiAgdmFyIGxlbmd0aCA9IGlucHV0Lmxlbmd0aCxcbiAgICAgIGRpbWVuc2lvbiA9IG9wdF9kaW1lbnNpb24gPiAxID8gb3B0X2RpbWVuc2lvbiA6IDIsXG4gICAgICBvdXRwdXQgPSBvcHRfb3V0cHV0O1xuICBpZiAob3V0cHV0ID09PSB1bmRlZmluZWQpIHtcbiAgICBpZiAoZGltZW5zaW9uID4gMikge1xuICAgICAgLy8gcHJlc2VydmUgdmFsdWVzIGJleW9uZCBzZWNvbmQgZGltZW5zaW9uXG4gICAgICBvdXRwdXQgPSBpbnB1dC5zbGljZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICB9XG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gZGltZW5zaW9uKSB7XG4gICAgb3V0cHV0W2ldID0gMTgwICogaW5wdXRbaV0gLyBfb2xfcHJval9FUFNHMzg1N18uSEFMRl9TSVpFO1xuICAgIG91dHB1dFtpICsgMV0gPSAzNjAgKiBNYXRoLmF0YW4oXG4gICAgICAgIE1hdGguZXhwKGlucHV0W2kgKyAxXSAvIF9vbF9wcm9qX0VQU0czODU3Xy5SQURJVVMpKSAvIE1hdGguUEkgLSA5MDtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufTtcbmV4cG9ydCBkZWZhdWx0IF9vbF9wcm9qX0VQU0czODU3XztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL3Byb2ovZXBzZzM4NTcuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfb2xfIGZyb20gJy4uL2luZGV4LmpzJztcbmltcG9ydCBfb2xfcHJval9Qcm9qZWN0aW9uXyBmcm9tICcuLi9wcm9qL3Byb2plY3Rpb24uanMnO1xuaW1wb3J0IF9vbF9wcm9qX1VuaXRzXyBmcm9tICcuLi9wcm9qL3VuaXRzLmpzJztcbnZhciBfb2xfcHJval9FUFNHNDMyNl8gPSB7fTtcblxuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIFByb2plY3Rpb24gb2JqZWN0IGZvciBXR1M4NCBnZW9ncmFwaGljIGNvb3JkaW5hdGVzIChFUFNHOjQzMjYpLlxuICpcbiAqIE5vdGUgdGhhdCBPcGVuTGF5ZXJzIGRvZXMgbm90IHN0cmljdGx5IGNvbXBseSB3aXRoIHRoZSBFUFNHIGRlZmluaXRpb24uXG4gKiBUaGUgRVBTRyByZWdpc3RyeSBkZWZpbmVzIDQzMjYgYXMgYSBDUlMgZm9yIExhdGl0dWRlLExvbmdpdHVkZSAoeSx4KS5cbiAqIE9wZW5MYXllcnMgdHJlYXRzIEVQU0c6NDMyNiBhcyBhIHBzZXVkby1wcm9qZWN0aW9uLCB3aXRoIHgseSBjb29yZGluYXRlcy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBleHRlbmRzIHtvbC5wcm9qLlByb2plY3Rpb259XG4gKiBAcGFyYW0ge3N0cmluZ30gY29kZSBDb2RlLlxuICogQHBhcmFtIHtzdHJpbmc9fSBvcHRfYXhpc09yaWVudGF0aW9uIEF4aXMgb3JpZW50YXRpb24uXG4gKiBAcHJpdmF0ZVxuICovXG5fb2xfcHJval9FUFNHNDMyNl8uUHJvamVjdGlvbl8gPSBmdW5jdGlvbihjb2RlLCBvcHRfYXhpc09yaWVudGF0aW9uKSB7XG4gIF9vbF9wcm9qX1Byb2plY3Rpb25fLmNhbGwodGhpcywge1xuICAgIGNvZGU6IGNvZGUsXG4gICAgdW5pdHM6IF9vbF9wcm9qX1VuaXRzXy5ERUdSRUVTLFxuICAgIGV4dGVudDogX29sX3Byb2pfRVBTRzQzMjZfLkVYVEVOVCxcbiAgICBheGlzT3JpZW50YXRpb246IG9wdF9heGlzT3JpZW50YXRpb24sXG4gICAgZ2xvYmFsOiB0cnVlLFxuICAgIG1ldGVyc1BlclVuaXQ6IF9vbF9wcm9qX0VQU0c0MzI2Xy5NRVRFUlNfUEVSX1VOSVQsXG4gICAgd29ybGRFeHRlbnQ6IF9vbF9wcm9qX0VQU0c0MzI2Xy5FWFRFTlRcbiAgfSk7XG59O1xuX29sXy5pbmhlcml0cyhfb2xfcHJval9FUFNHNDMyNl8uUHJvamVjdGlvbl8sIF9vbF9wcm9qX1Byb2plY3Rpb25fKTtcblxuXG4vKipcbiAqIFJhZGl1cyBvZiBXR1M4NCBzcGhlcmVcbiAqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbl9vbF9wcm9qX0VQU0c0MzI2Xy5SQURJVVMgPSA2Mzc4MTM3O1xuXG5cbi8qKlxuICogRXh0ZW50IG9mIHRoZSBFUFNHOjQzMjYgcHJvamVjdGlvbiB3aGljaCBpcyB0aGUgd2hvbGUgd29ybGQuXG4gKlxuICogQGNvbnN0XG4gKiBAdHlwZSB7b2wuRXh0ZW50fVxuICovXG5fb2xfcHJval9FUFNHNDMyNl8uRVhURU5UID0gWy0xODAsIC05MCwgMTgwLCA5MF07XG5cblxuLyoqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbl9vbF9wcm9qX0VQU0c0MzI2Xy5NRVRFUlNfUEVSX1VOSVQgPSBNYXRoLlBJICogX29sX3Byb2pfRVBTRzQzMjZfLlJBRElVUyAvIDE4MDtcblxuXG4vKipcbiAqIFByb2plY3Rpb25zIGVxdWFsIHRvIEVQU0c6NDMyNi5cbiAqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtBcnJheS48b2wucHJvai5Qcm9qZWN0aW9uPn1cbiAqL1xuX29sX3Byb2pfRVBTRzQzMjZfLlBST0pFQ1RJT05TID0gW1xuICBuZXcgX29sX3Byb2pfRVBTRzQzMjZfLlByb2plY3Rpb25fKCdDUlM6ODQnKSxcbiAgbmV3IF9vbF9wcm9qX0VQU0c0MzI2Xy5Qcm9qZWN0aW9uXygnRVBTRzo0MzI2JywgJ25ldScpLFxuICBuZXcgX29sX3Byb2pfRVBTRzQzMjZfLlByb2plY3Rpb25fKCd1cm46b2djOmRlZjpjcnM6RVBTRzo6NDMyNicsICduZXUnKSxcbiAgbmV3IF9vbF9wcm9qX0VQU0c0MzI2Xy5Qcm9qZWN0aW9uXygndXJuOm9nYzpkZWY6Y3JzOkVQU0c6Ni42OjQzMjYnLCAnbmV1JyksXG4gIG5ldyBfb2xfcHJval9FUFNHNDMyNl8uUHJvamVjdGlvbl8oJ3VybjpvZ2M6ZGVmOmNyczpPR0M6MS4zOkNSUzg0JyksXG4gIG5ldyBfb2xfcHJval9FUFNHNDMyNl8uUHJvamVjdGlvbl8oJ3VybjpvZ2M6ZGVmOmNyczpPR0M6Mjo4NCcpLFxuICBuZXcgX29sX3Byb2pfRVBTRzQzMjZfLlByb2plY3Rpb25fKCdodHRwOi8vd3d3Lm9wZW5naXMubmV0L2dtbC9zcnMvZXBzZy54bWwjNDMyNicsICduZXUnKSxcbiAgbmV3IF9vbF9wcm9qX0VQU0c0MzI2Xy5Qcm9qZWN0aW9uXygndXJuOngtb2djOmRlZjpjcnM6RVBTRzo0MzI2JywgJ25ldScpXG5dO1xuZXhwb3J0IGRlZmF1bHQgX29sX3Byb2pfRVBTRzQzMjZfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvcHJvai9lcHNnNDMyNi5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9vbF9wcm9qX3Byb2plY3Rpb25zXyA9IHt9O1xuXG5cbi8qKlxuICogQHByaXZhdGVcbiAqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgb2wucHJvai5Qcm9qZWN0aW9uPn1cbiAqL1xuX29sX3Byb2pfcHJvamVjdGlvbnNfLmNhY2hlXyA9IHt9O1xuXG5cbi8qKlxuICogQ2xlYXIgdGhlIHByb2plY3Rpb25zIGNhY2hlLlxuICovXG5fb2xfcHJval9wcm9qZWN0aW9uc18uY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgX29sX3Byb2pfcHJvamVjdGlvbnNfLmNhY2hlXyA9IHt9O1xufTtcblxuXG4vKipcbiAqIEdldCBhIGNhY2hlZCBwcm9qZWN0aW9uIGJ5IGNvZGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gY29kZSBUaGUgY29kZSBmb3IgdGhlIHByb2plY3Rpb24uXG4gKiBAcmV0dXJuIHtvbC5wcm9qLlByb2plY3Rpb259IFRoZSBwcm9qZWN0aW9uIChpZiBjYWNoZWQpLlxuICovXG5fb2xfcHJval9wcm9qZWN0aW9uc18uZ2V0ID0gZnVuY3Rpb24oY29kZSkge1xuICB2YXIgcHJvamVjdGlvbnMgPSBfb2xfcHJval9wcm9qZWN0aW9uc18uY2FjaGVfO1xuICByZXR1cm4gcHJvamVjdGlvbnNbY29kZV0gfHwgbnVsbDtcbn07XG5cblxuLyoqXG4gKiBBZGQgYSBwcm9qZWN0aW9uIHRvIHRoZSBjYWNoZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlIFRoZSBwcm9qZWN0aW9uIGNvZGUuXG4gKiBAcGFyYW0ge29sLnByb2ouUHJvamVjdGlvbn0gcHJvamVjdGlvbiBUaGUgcHJvamVjdGlvbiB0byBjYWNoZS5cbiAqL1xuX29sX3Byb2pfcHJvamVjdGlvbnNfLmFkZCA9IGZ1bmN0aW9uKGNvZGUsIHByb2plY3Rpb24pIHtcbiAgdmFyIHByb2plY3Rpb25zID0gX29sX3Byb2pfcHJvamVjdGlvbnNfLmNhY2hlXztcbiAgcHJvamVjdGlvbnNbY29kZV0gPSBwcm9qZWN0aW9uO1xufTtcbmV4cG9ydCBkZWZhdWx0IF9vbF9wcm9qX3Byb2plY3Rpb25zXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL3Byb2ovcHJvamVjdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfb2xfb2JqXyBmcm9tICcuLi9vYmouanMnO1xudmFyIF9vbF9wcm9qX3RyYW5zZm9ybXNfID0ge307XG5cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICogQHR5cGUge09iamVjdC48c3RyaW5nLCBPYmplY3QuPHN0cmluZywgb2wuVHJhbnNmb3JtRnVuY3Rpb24+Pn1cbiAqL1xuX29sX3Byb2pfdHJhbnNmb3Jtc18uY2FjaGVfID0ge307XG5cblxuLyoqXG4gKiBDbGVhciB0aGUgdHJhbnNmb3JtIGNhY2hlLlxuICovXG5fb2xfcHJval90cmFuc2Zvcm1zXy5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICBfb2xfcHJval90cmFuc2Zvcm1zXy5jYWNoZV8gPSB7fTtcbn07XG5cblxuLyoqXG4gKiBSZWdpc3RlcnMgYSBjb252ZXJzaW9uIGZ1bmN0aW9uIHRvIGNvbnZlcnQgY29vcmRpbmF0ZXMgZnJvbSB0aGUgc291cmNlXG4gKiBwcm9qZWN0aW9uIHRvIHRoZSBkZXN0aW5hdGlvbiBwcm9qZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7b2wucHJvai5Qcm9qZWN0aW9ufSBzb3VyY2UgU291cmNlLlxuICogQHBhcmFtIHtvbC5wcm9qLlByb2plY3Rpb259IGRlc3RpbmF0aW9uIERlc3RpbmF0aW9uLlxuICogQHBhcmFtIHtvbC5UcmFuc2Zvcm1GdW5jdGlvbn0gdHJhbnNmb3JtRm4gVHJhbnNmb3JtLlxuICovXG5fb2xfcHJval90cmFuc2Zvcm1zXy5hZGQgPSBmdW5jdGlvbihzb3VyY2UsIGRlc3RpbmF0aW9uLCB0cmFuc2Zvcm1Gbikge1xuICB2YXIgc291cmNlQ29kZSA9IHNvdXJjZS5nZXRDb2RlKCk7XG4gIHZhciBkZXN0aW5hdGlvbkNvZGUgPSBkZXN0aW5hdGlvbi5nZXRDb2RlKCk7XG4gIHZhciB0cmFuc2Zvcm1zID0gX29sX3Byb2pfdHJhbnNmb3Jtc18uY2FjaGVfO1xuICBpZiAoIShzb3VyY2VDb2RlIGluIHRyYW5zZm9ybXMpKSB7XG4gICAgdHJhbnNmb3Jtc1tzb3VyY2VDb2RlXSA9IHt9O1xuICB9XG4gIHRyYW5zZm9ybXNbc291cmNlQ29kZV1bZGVzdGluYXRpb25Db2RlXSA9IHRyYW5zZm9ybUZuO1xufTtcblxuXG4vKipcbiAqIFVucmVnaXN0ZXJzIHRoZSBjb252ZXJzaW9uIGZ1bmN0aW9uIHRvIGNvbnZlcnQgY29vcmRpbmF0ZXMgZnJvbSB0aGUgc291cmNlXG4gKiBwcm9qZWN0aW9uIHRvIHRoZSBkZXN0aW5hdGlvbiBwcm9qZWN0aW9uLiAgVGhpcyBtZXRob2QgaXMgdXNlZCB0byBjbGVhbiB1cFxuICogY2FjaGVkIHRyYW5zZm9ybXMgZHVyaW5nIHRlc3RpbmcuXG4gKlxuICogQHBhcmFtIHtvbC5wcm9qLlByb2plY3Rpb259IHNvdXJjZSBTb3VyY2UgcHJvamVjdGlvbi5cbiAqIEBwYXJhbSB7b2wucHJvai5Qcm9qZWN0aW9ufSBkZXN0aW5hdGlvbiBEZXN0aW5hdGlvbiBwcm9qZWN0aW9uLlxuICogQHJldHVybiB7b2wuVHJhbnNmb3JtRnVuY3Rpb259IHRyYW5zZm9ybUZuIFRoZSB1bnJlZ2lzdGVyZWQgdHJhbnNmb3JtLlxuICovXG5fb2xfcHJval90cmFuc2Zvcm1zXy5yZW1vdmUgPSBmdW5jdGlvbihzb3VyY2UsIGRlc3RpbmF0aW9uKSB7XG4gIHZhciBzb3VyY2VDb2RlID0gc291cmNlLmdldENvZGUoKTtcbiAgdmFyIGRlc3RpbmF0aW9uQ29kZSA9IGRlc3RpbmF0aW9uLmdldENvZGUoKTtcbiAgdmFyIHRyYW5zZm9ybXMgPSBfb2xfcHJval90cmFuc2Zvcm1zXy5jYWNoZV87XG4gIHZhciB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm1zW3NvdXJjZUNvZGVdW2Rlc3RpbmF0aW9uQ29kZV07XG4gIGRlbGV0ZSB0cmFuc2Zvcm1zW3NvdXJjZUNvZGVdW2Rlc3RpbmF0aW9uQ29kZV07XG4gIGlmIChfb2xfb2JqXy5pc0VtcHR5KHRyYW5zZm9ybXNbc291cmNlQ29kZV0pKSB7XG4gICAgZGVsZXRlIHRyYW5zZm9ybXNbc291cmNlQ29kZV07XG4gIH1cbiAgcmV0dXJuIHRyYW5zZm9ybTtcbn07XG5cblxuLyoqXG4gKiBHZXQgYSB0cmFuc2Zvcm0gZ2l2ZW4gYSBzb3VyY2UgY29kZSBhbmQgYSBkZXN0aW5hdGlvbiBjb2RlLlxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZUNvZGUgVGhlIGNvZGUgZm9yIHRoZSBzb3VyY2UgcHJvamVjdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkZXN0aW5hdGlvbkNvZGUgVGhlIGNvZGUgZm9yIHRoZSBkZXN0aW5hdGlvbiBwcm9qZWN0aW9uLlxuICogQHJldHVybiB7b2wuVHJhbnNmb3JtRnVuY3Rpb258dW5kZWZpbmVkfSBUaGUgdHJhbnNmb3JtIGZ1bmN0aW9uIChpZiBmb3VuZCkuXG4gKi9cbl9vbF9wcm9qX3RyYW5zZm9ybXNfLmdldCA9IGZ1bmN0aW9uKHNvdXJjZUNvZGUsIGRlc3RpbmF0aW9uQ29kZSkge1xuICB2YXIgdHJhbnNmb3JtO1xuICB2YXIgdHJhbnNmb3JtcyA9IF9vbF9wcm9qX3RyYW5zZm9ybXNfLmNhY2hlXztcbiAgaWYgKHNvdXJjZUNvZGUgaW4gdHJhbnNmb3JtcyAmJiBkZXN0aW5hdGlvbkNvZGUgaW4gdHJhbnNmb3Jtc1tzb3VyY2VDb2RlXSkge1xuICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybXNbc291cmNlQ29kZV1bZGVzdGluYXRpb25Db2RlXTtcbiAgfVxuICByZXR1cm4gdHJhbnNmb3JtO1xufTtcbmV4cG9ydCBkZWZhdWx0IF9vbF9wcm9qX3RyYW5zZm9ybXNfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvcHJvai90cmFuc2Zvcm1zLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgX29sXyBmcm9tICcuLi9pbmRleC5qcyc7XG5pbXBvcnQgX29sX0ltYWdlQmFzZV8gZnJvbSAnLi4vaW1hZ2ViYXNlLmpzJztcbmltcG9ydCBfb2xfSW1hZ2VTdGF0ZV8gZnJvbSAnLi4vaW1hZ2VzdGF0ZS5qcyc7XG5pbXBvcnQgX29sX2V2ZW50c18gZnJvbSAnLi4vZXZlbnRzLmpzJztcbmltcG9ydCBfb2xfZXZlbnRzX0V2ZW50VHlwZV8gZnJvbSAnLi4vZXZlbnRzL2V2ZW50dHlwZS5qcyc7XG5pbXBvcnQgX29sX2V4dGVudF8gZnJvbSAnLi4vZXh0ZW50LmpzJztcbmltcG9ydCBfb2xfcmVwcm9qXyBmcm9tICcuLi9yZXByb2ouanMnO1xuaW1wb3J0IF9vbF9yZXByb2pfVHJpYW5ndWxhdGlvbl8gZnJvbSAnLi4vcmVwcm9qL3RyaWFuZ3VsYXRpb24uanMnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIENsYXNzIGVuY2Fwc3VsYXRpbmcgc2luZ2xlIHJlcHJvamVjdGVkIGltYWdlLlxuICogU2VlIHtAbGluayBvbC5zb3VyY2UuSW1hZ2V9LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVuZHMge29sLkltYWdlQmFzZX1cbiAqIEBwYXJhbSB7b2wucHJvai5Qcm9qZWN0aW9ufSBzb3VyY2VQcm9qIFNvdXJjZSBwcm9qZWN0aW9uIChvZiB0aGUgZGF0YSkuXG4gKiBAcGFyYW0ge29sLnByb2ouUHJvamVjdGlvbn0gdGFyZ2V0UHJvaiBUYXJnZXQgcHJvamVjdGlvbi5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSB0YXJnZXRFeHRlbnQgVGFyZ2V0IGV4dGVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0YXJnZXRSZXNvbHV0aW9uIFRhcmdldCByZXNvbHV0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IHBpeGVsUmF0aW8gUGl4ZWwgcmF0aW8uXG4gKiBAcGFyYW0ge29sLlJlcHJvakltYWdlRnVuY3Rpb25UeXBlfSBnZXRJbWFnZUZ1bmN0aW9uXG4gKiAgICAgRnVuY3Rpb24gcmV0dXJuaW5nIHNvdXJjZSBpbWFnZXMgKGV4dGVudCwgcmVzb2x1dGlvbiwgcGl4ZWxSYXRpbykuXG4gKi9cbnZhciBfb2xfcmVwcm9qX0ltYWdlXyA9IGZ1bmN0aW9uKHNvdXJjZVByb2osIHRhcmdldFByb2osXG4gICAgdGFyZ2V0RXh0ZW50LCB0YXJnZXRSZXNvbHV0aW9uLCBwaXhlbFJhdGlvLCBnZXRJbWFnZUZ1bmN0aW9uKSB7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtvbC5wcm9qLlByb2plY3Rpb259XG4gICAqL1xuICB0aGlzLnRhcmdldFByb2pfID0gdGFyZ2V0UHJvajtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge29sLkV4dGVudH1cbiAgICovXG4gIHRoaXMubWF4U291cmNlRXh0ZW50XyA9IHNvdXJjZVByb2ouZ2V0RXh0ZW50KCk7XG4gIHZhciBtYXhUYXJnZXRFeHRlbnQgPSB0YXJnZXRQcm9qLmdldEV4dGVudCgpO1xuXG4gIHZhciBsaW1pdGVkVGFyZ2V0RXh0ZW50ID0gbWF4VGFyZ2V0RXh0ZW50ID9cbiAgICBfb2xfZXh0ZW50Xy5nZXRJbnRlcnNlY3Rpb24odGFyZ2V0RXh0ZW50LCBtYXhUYXJnZXRFeHRlbnQpIDogdGFyZ2V0RXh0ZW50O1xuXG4gIHZhciB0YXJnZXRDZW50ZXIgPSBfb2xfZXh0ZW50Xy5nZXRDZW50ZXIobGltaXRlZFRhcmdldEV4dGVudCk7XG4gIHZhciBzb3VyY2VSZXNvbHV0aW9uID0gX29sX3JlcHJval8uY2FsY3VsYXRlU291cmNlUmVzb2x1dGlvbihcbiAgICAgIHNvdXJjZVByb2osIHRhcmdldFByb2osIHRhcmdldENlbnRlciwgdGFyZ2V0UmVzb2x1dGlvbik7XG5cbiAgdmFyIGVycm9yVGhyZXNob2xkSW5QaXhlbHMgPSBfb2xfLkRFRkFVTFRfUkFTVEVSX1JFUFJPSkVDVElPTl9FUlJPUl9USFJFU0hPTEQ7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHshb2wucmVwcm9qLlRyaWFuZ3VsYXRpb259XG4gICAqL1xuICB0aGlzLnRyaWFuZ3VsYXRpb25fID0gbmV3IF9vbF9yZXByb2pfVHJpYW5ndWxhdGlvbl8oXG4gICAgICBzb3VyY2VQcm9qLCB0YXJnZXRQcm9qLCBsaW1pdGVkVGFyZ2V0RXh0ZW50LCB0aGlzLm1heFNvdXJjZUV4dGVudF8sXG4gICAgICBzb3VyY2VSZXNvbHV0aW9uICogZXJyb3JUaHJlc2hvbGRJblBpeGVscyk7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICB0aGlzLnRhcmdldFJlc29sdXRpb25fID0gdGFyZ2V0UmVzb2x1dGlvbjtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge29sLkV4dGVudH1cbiAgICovXG4gIHRoaXMudGFyZ2V0RXh0ZW50XyA9IHRhcmdldEV4dGVudDtcblxuICB2YXIgc291cmNlRXh0ZW50ID0gdGhpcy50cmlhbmd1bGF0aW9uXy5jYWxjdWxhdGVTb3VyY2VFeHRlbnQoKTtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge29sLkltYWdlQmFzZX1cbiAgICovXG4gIHRoaXMuc291cmNlSW1hZ2VfID1cbiAgICAgIGdldEltYWdlRnVuY3Rpb24oc291cmNlRXh0ZW50LCBzb3VyY2VSZXNvbHV0aW9uLCBwaXhlbFJhdGlvKTtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIHRoaXMuc291cmNlUGl4ZWxSYXRpb18gPVxuICAgICAgdGhpcy5zb3VyY2VJbWFnZV8gPyB0aGlzLnNvdXJjZUltYWdlXy5nZXRQaXhlbFJhdGlvKCkgOiAxO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7SFRNTENhbnZhc0VsZW1lbnR9XG4gICAqL1xuICB0aGlzLmNhbnZhc18gPSBudWxsO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7P29sLkV2ZW50c0tleX1cbiAgICovXG4gIHRoaXMuc291cmNlTGlzdGVuZXJLZXlfID0gbnVsbDtcblxuXG4gIHZhciBzdGF0ZSA9IF9vbF9JbWFnZVN0YXRlXy5MT0FERUQ7XG5cbiAgaWYgKHRoaXMuc291cmNlSW1hZ2VfKSB7XG4gICAgc3RhdGUgPSBfb2xfSW1hZ2VTdGF0ZV8uSURMRTtcbiAgfVxuXG4gIF9vbF9JbWFnZUJhc2VfLmNhbGwodGhpcywgdGFyZ2V0RXh0ZW50LCB0YXJnZXRSZXNvbHV0aW9uLCB0aGlzLnNvdXJjZVBpeGVsUmF0aW9fLCBzdGF0ZSk7XG59O1xuXG5fb2xfLmluaGVyaXRzKF9vbF9yZXByb2pfSW1hZ2VfLCBfb2xfSW1hZ2VCYXNlXyk7XG5cblxuLyoqXG4gKiBAaW5oZXJpdERvY1xuICovXG5fb2xfcmVwcm9qX0ltYWdlXy5wcm90b3R5cGUuZGlzcG9zZUludGVybmFsID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLnN0YXRlID09IF9vbF9JbWFnZVN0YXRlXy5MT0FESU5HKSB7XG4gICAgdGhpcy51bmxpc3RlblNvdXJjZV8oKTtcbiAgfVxuICBfb2xfSW1hZ2VCYXNlXy5wcm90b3R5cGUuZGlzcG9zZUludGVybmFsLmNhbGwodGhpcyk7XG59O1xuXG5cbi8qKlxuICogQGluaGVyaXREb2NcbiAqL1xuX29sX3JlcHJval9JbWFnZV8ucHJvdG90eXBlLmdldEltYWdlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmNhbnZhc187XG59O1xuXG5cbi8qKlxuICogQHJldHVybiB7b2wucHJvai5Qcm9qZWN0aW9ufSBQcm9qZWN0aW9uLlxuICovXG5fb2xfcmVwcm9qX0ltYWdlXy5wcm90b3R5cGUuZ2V0UHJvamVjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy50YXJnZXRQcm9qXztcbn07XG5cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5fb2xfcmVwcm9qX0ltYWdlXy5wcm90b3R5cGUucmVwcm9qZWN0XyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc291cmNlU3RhdGUgPSB0aGlzLnNvdXJjZUltYWdlXy5nZXRTdGF0ZSgpO1xuICBpZiAoc291cmNlU3RhdGUgPT0gX29sX0ltYWdlU3RhdGVfLkxPQURFRCkge1xuICAgIHZhciB3aWR0aCA9IF9vbF9leHRlbnRfLmdldFdpZHRoKHRoaXMudGFyZ2V0RXh0ZW50XykgLyB0aGlzLnRhcmdldFJlc29sdXRpb25fO1xuICAgIHZhciBoZWlnaHQgPVxuICAgICAgICBfb2xfZXh0ZW50Xy5nZXRIZWlnaHQodGhpcy50YXJnZXRFeHRlbnRfKSAvIHRoaXMudGFyZ2V0UmVzb2x1dGlvbl87XG5cbiAgICB0aGlzLmNhbnZhc18gPSBfb2xfcmVwcm9qXy5yZW5kZXIod2lkdGgsIGhlaWdodCwgdGhpcy5zb3VyY2VQaXhlbFJhdGlvXyxcbiAgICAgICAgdGhpcy5zb3VyY2VJbWFnZV8uZ2V0UmVzb2x1dGlvbigpLCB0aGlzLm1heFNvdXJjZUV4dGVudF8sXG4gICAgICAgIHRoaXMudGFyZ2V0UmVzb2x1dGlvbl8sIHRoaXMudGFyZ2V0RXh0ZW50XywgdGhpcy50cmlhbmd1bGF0aW9uXywgW3tcbiAgICAgICAgICBleHRlbnQ6IHRoaXMuc291cmNlSW1hZ2VfLmdldEV4dGVudCgpLFxuICAgICAgICAgIGltYWdlOiB0aGlzLnNvdXJjZUltYWdlXy5nZXRJbWFnZSgpXG4gICAgICAgIH1dLCAwKTtcbiAgfVxuICB0aGlzLnN0YXRlID0gc291cmNlU3RhdGU7XG4gIHRoaXMuY2hhbmdlZCgpO1xufTtcblxuXG4vKipcbiAqIEBpbmhlcml0RG9jXG4gKi9cbl9vbF9yZXByb2pfSW1hZ2VfLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLnN0YXRlID09IF9vbF9JbWFnZVN0YXRlXy5JRExFKSB7XG4gICAgdGhpcy5zdGF0ZSA9IF9vbF9JbWFnZVN0YXRlXy5MT0FESU5HO1xuICAgIHRoaXMuY2hhbmdlZCgpO1xuXG4gICAgdmFyIHNvdXJjZVN0YXRlID0gdGhpcy5zb3VyY2VJbWFnZV8uZ2V0U3RhdGUoKTtcbiAgICBpZiAoc291cmNlU3RhdGUgPT0gX29sX0ltYWdlU3RhdGVfLkxPQURFRCB8fFxuICAgICAgICBzb3VyY2VTdGF0ZSA9PSBfb2xfSW1hZ2VTdGF0ZV8uRVJST1IpIHtcbiAgICAgIHRoaXMucmVwcm9qZWN0XygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNvdXJjZUxpc3RlbmVyS2V5XyA9IF9vbF9ldmVudHNfLmxpc3Rlbih0aGlzLnNvdXJjZUltYWdlXyxcbiAgICAgICAgICBfb2xfZXZlbnRzX0V2ZW50VHlwZV8uQ0hBTkdFLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgc291cmNlU3RhdGUgPSB0aGlzLnNvdXJjZUltYWdlXy5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgaWYgKHNvdXJjZVN0YXRlID09IF9vbF9JbWFnZVN0YXRlXy5MT0FERUQgfHxcbiAgICAgICAgICAgICAgICBzb3VyY2VTdGF0ZSA9PSBfb2xfSW1hZ2VTdGF0ZV8uRVJST1IpIHtcbiAgICAgICAgICAgICAgdGhpcy51bmxpc3RlblNvdXJjZV8oKTtcbiAgICAgICAgICAgICAgdGhpcy5yZXByb2plY3RfKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgdGhpcyk7XG4gICAgICB0aGlzLnNvdXJjZUltYWdlXy5sb2FkKCk7XG4gICAgfVxuICB9XG59O1xuXG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuX29sX3JlcHJval9JbWFnZV8ucHJvdG90eXBlLnVubGlzdGVuU291cmNlXyA9IGZ1bmN0aW9uKCkge1xuICBfb2xfZXZlbnRzXy51bmxpc3RlbkJ5S2V5KC8qKiBAdHlwZSB7IW9sLkV2ZW50c0tleX0gKi8gKHRoaXMuc291cmNlTGlzdGVuZXJLZXlfKSk7XG4gIHRoaXMuc291cmNlTGlzdGVuZXJLZXlfID0gbnVsbDtcbn07XG5leHBvcnQgZGVmYXVsdCBfb2xfcmVwcm9qX0ltYWdlXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL3JlcHJvai9pbWFnZS5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF9vbF9UaWxlUmFuZ2VfIGZyb20gJy4vdGlsZXJhbmdlLmpzJztcbmltcG9ydCBfb2xfbWF0aF8gZnJvbSAnLi9tYXRoLmpzJztcbmltcG9ydCBfb2xfdGlsZWdyaWRfIGZyb20gJy4vdGlsZWdyaWQuanMnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIEFuIGF0dHJpYnV0aW9uIGZvciBhIGxheWVyIHNvdXJjZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICBzb3VyY2U6IG5ldyBvbC5zb3VyY2UuT1NNKHtcbiAqICAgICAgIGF0dHJpYnV0aW9uczogW1xuICogICAgICAgICBuZXcgb2wuQXR0cmlidXRpb24oe1xuICogICAgICAgICAgIGh0bWw6ICdBbGwgbWFwcyAmY29weTsgJyArXG4gKiAgICAgICAgICAgICAgICc8YSBocmVmPVwiaHR0cHM6Ly93d3cub3BlbmN5Y2xlbWFwLm9yZy9cIj5PcGVuQ3ljbGVNYXA8L2E+J1xuICogICAgICAgICB9KSxcbiAqICAgICAgICAgb2wuc291cmNlLk9TTS5BVFRSSUJVVElPTlxuICogICAgICAgXSxcbiAqICAgICAuLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQGRlcHJlY2F0ZWQgVGhpcyBjbGFzcyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS5cbiAqIEBwYXJhbSB7b2x4LkF0dHJpYnV0aW9uT3B0aW9uc30gb3B0aW9ucyBBdHRyaWJ1dGlvbiBvcHRpb25zLlxuICogQHN0cnVjdFxuICogQGFwaVxuICovXG52YXIgX29sX0F0dHJpYnV0aW9uXyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHRoaXMuaHRtbF8gPSBvcHRpb25zLmh0bWw7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgQXJyYXkuPG9sLlRpbGVSYW5nZT4+fVxuICAgKi9cbiAgdGhpcy50aWxlUmFuZ2VzXyA9IG9wdGlvbnMudGlsZVJhbmdlcyA/IG9wdGlvbnMudGlsZVJhbmdlcyA6IG51bGw7XG5cbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIGF0dHJpYnV0aW9uIG1hcmt1cC5cbiAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGF0dHJpYnV0aW9uIEhUTUwuXG4gKiBAYXBpXG4gKi9cbl9vbF9BdHRyaWJ1dGlvbl8ucHJvdG90eXBlLmdldEhUTUwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuaHRtbF87XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgb2wuVGlsZVJhbmdlPn0gdGlsZVJhbmdlcyBUaWxlIHJhbmdlcy5cbiAqIEBwYXJhbSB7IW9sLnRpbGVncmlkLlRpbGVHcmlkfSB0aWxlR3JpZCBUaWxlIGdyaWQuXG4gKiBAcGFyYW0geyFvbC5wcm9qLlByb2plY3Rpb259IHByb2plY3Rpb24gUHJvamVjdGlvbi5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEludGVyc2VjdHMgYW55IHRpbGUgcmFuZ2UuXG4gKi9cbl9vbF9BdHRyaWJ1dGlvbl8ucHJvdG90eXBlLmludGVyc2VjdHNBbnlUaWxlUmFuZ2UgPSBmdW5jdGlvbih0aWxlUmFuZ2VzLCB0aWxlR3JpZCwgcHJvamVjdGlvbikge1xuICBpZiAoIXRoaXMudGlsZVJhbmdlc18pIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgaSwgaWksIHRpbGVSYW5nZSwgektleTtcbiAgZm9yICh6S2V5IGluIHRpbGVSYW5nZXMpIHtcbiAgICBpZiAoISh6S2V5IGluIHRoaXMudGlsZVJhbmdlc18pKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgdGlsZVJhbmdlID0gdGlsZVJhbmdlc1t6S2V5XTtcbiAgICB2YXIgdGVzdFRpbGVSYW5nZTtcbiAgICBmb3IgKGkgPSAwLCBpaSA9IHRoaXMudGlsZVJhbmdlc19bektleV0ubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgdGVzdFRpbGVSYW5nZSA9IHRoaXMudGlsZVJhbmdlc19bektleV1baV07XG4gICAgICBpZiAodGVzdFRpbGVSYW5nZS5pbnRlcnNlY3RzKHRpbGVSYW5nZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICB2YXIgZXh0ZW50VGlsZVJhbmdlID0gdGlsZUdyaWQuZ2V0VGlsZVJhbmdlRm9yRXh0ZW50QW5kWihcbiAgICAgICAgICBfb2xfdGlsZWdyaWRfLmV4dGVudEZyb21Qcm9qZWN0aW9uKHByb2plY3Rpb24pLCBwYXJzZUludCh6S2V5LCAxMCkpO1xuICAgICAgdmFyIHdpZHRoID0gZXh0ZW50VGlsZVJhbmdlLmdldFdpZHRoKCk7XG4gICAgICBpZiAodGlsZVJhbmdlLm1pblggPCBleHRlbnRUaWxlUmFuZ2UubWluWCB8fFxuICAgICAgICAgIHRpbGVSYW5nZS5tYXhYID4gZXh0ZW50VGlsZVJhbmdlLm1heFgpIHtcbiAgICAgICAgaWYgKHRlc3RUaWxlUmFuZ2UuaW50ZXJzZWN0cyhuZXcgX29sX1RpbGVSYW5nZV8oXG4gICAgICAgICAgICBfb2xfbWF0aF8ubW9kdWxvKHRpbGVSYW5nZS5taW5YLCB3aWR0aCksXG4gICAgICAgICAgICBfb2xfbWF0aF8ubW9kdWxvKHRpbGVSYW5nZS5tYXhYLCB3aWR0aCksXG4gICAgICAgICAgICB0aWxlUmFuZ2UubWluWSwgdGlsZVJhbmdlLm1heFkpKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aWxlUmFuZ2UuZ2V0V2lkdGgoKSA+IHdpZHRoICYmXG4gICAgICAgICAgICB0ZXN0VGlsZVJhbmdlLmludGVyc2VjdHMoZXh0ZW50VGlsZVJhbmdlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5leHBvcnQgZGVmYXVsdCBfb2xfQXR0cmlidXRpb25fO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvYXR0cmlidXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfb2xfIGZyb20gJy4uL2luZGV4LmpzJztcbmltcG9ydCBfb2xfYXNzZXJ0c18gZnJvbSAnLi4vYXNzZXJ0cy5qcyc7XG5pbXBvcnQgX29sX1RpbGVSYW5nZV8gZnJvbSAnLi4vdGlsZXJhbmdlLmpzJztcbmltcG9ydCBfb2xfYXJyYXlfIGZyb20gJy4uL2FycmF5LmpzJztcbmltcG9ydCBfb2xfZXh0ZW50XyBmcm9tICcuLi9leHRlbnQuanMnO1xuaW1wb3J0IF9vbF9tYXRoXyBmcm9tICcuLi9tYXRoLmpzJztcbmltcG9ydCBfb2xfc2l6ZV8gZnJvbSAnLi4vc2l6ZS5qcyc7XG5pbXBvcnQgX29sX3RpbGVjb29yZF8gZnJvbSAnLi4vdGlsZWNvb3JkLmpzJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBCYXNlIGNsYXNzIGZvciBzZXR0aW5nIHRoZSBncmlkIHBhdHRlcm4gZm9yIHNvdXJjZXMgYWNjZXNzaW5nIHRpbGVkLWltYWdlXG4gKiBzZXJ2ZXJzLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtvbHgudGlsZWdyaWQuVGlsZUdyaWRPcHRpb25zfSBvcHRpb25zIFRpbGUgZ3JpZCBvcHRpb25zLlxuICogQHN0cnVjdFxuICogQGFwaVxuICovXG52YXIgX29sX3RpbGVncmlkX1RpbGVHcmlkXyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblxuICAvKipcbiAgICogQHByb3RlY3RlZFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgdGhpcy5taW5ab29tID0gb3B0aW9ucy5taW5ab29tICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1pblpvb20gOiAwO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7IUFycmF5LjxudW1iZXI+fVxuICAgKi9cbiAgdGhpcy5yZXNvbHV0aW9uc18gPSBvcHRpb25zLnJlc29sdXRpb25zO1xuICBfb2xfYXNzZXJ0c18uYXNzZXJ0KF9vbF9hcnJheV8uaXNTb3J0ZWQodGhpcy5yZXNvbHV0aW9uc18sIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gYiAtIGE7XG4gIH0sIHRydWUpLCAxNyk7IC8vIGByZXNvbHV0aW9uc2AgbXVzdCBiZSBzb3J0ZWQgaW4gZGVzY2VuZGluZyBvcmRlclxuXG5cbiAgLy8gY2hlY2sgaWYgd2UndmUgZ290IGEgY29uc2lzdGVudCB6b29tIGZhY3RvciBhbmQgb3JpZ2luXG4gIHZhciB6b29tRmFjdG9yO1xuICBpZiAoIW9wdGlvbnMub3JpZ2lucykge1xuICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IHRoaXMucmVzb2x1dGlvbnNfLmxlbmd0aCAtIDE7IGkgPCBpaTsgKytpKSB7XG4gICAgICBpZiAoIXpvb21GYWN0b3IpIHtcbiAgICAgICAgem9vbUZhY3RvciA9IHRoaXMucmVzb2x1dGlvbnNfW2ldIC8gdGhpcy5yZXNvbHV0aW9uc19baSArIDFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMucmVzb2x1dGlvbnNfW2ldIC8gdGhpcy5yZXNvbHV0aW9uc19baSArIDFdICE9PSB6b29tRmFjdG9yKSB7XG4gICAgICAgICAgem9vbUZhY3RvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtudW1iZXJ8dW5kZWZpbmVkfVxuICAgKi9cbiAgdGhpcy56b29tRmFjdG9yXyA9IHpvb21GYWN0b3I7XG5cblxuICAvKipcbiAgICogQHByb3RlY3RlZFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgdGhpcy5tYXhab29tID0gdGhpcy5yZXNvbHV0aW9uc18ubGVuZ3RoIC0gMTtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge29sLkNvb3JkaW5hdGV9XG4gICAqL1xuICB0aGlzLm9yaWdpbl8gPSBvcHRpb25zLm9yaWdpbiAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5vcmlnaW4gOiBudWxsO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7QXJyYXkuPG9sLkNvb3JkaW5hdGU+fVxuICAgKi9cbiAgdGhpcy5vcmlnaW5zXyA9IG51bGw7XG4gIGlmIChvcHRpb25zLm9yaWdpbnMgIT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMub3JpZ2luc18gPSBvcHRpb25zLm9yaWdpbnM7XG4gICAgX29sX2Fzc2VydHNfLmFzc2VydCh0aGlzLm9yaWdpbnNfLmxlbmd0aCA9PSB0aGlzLnJlc29sdXRpb25zXy5sZW5ndGgsXG4gICAgICAgIDIwKTsgLy8gTnVtYmVyIG9mIGBvcmlnaW5zYCBhbmQgYHJlc29sdXRpb25zYCBtdXN0IGJlIGVxdWFsXG4gIH1cblxuICB2YXIgZXh0ZW50ID0gb3B0aW9ucy5leHRlbnQ7XG5cbiAgaWYgKGV4dGVudCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAhdGhpcy5vcmlnaW5fICYmICF0aGlzLm9yaWdpbnNfKSB7XG4gICAgdGhpcy5vcmlnaW5fID0gX29sX2V4dGVudF8uZ2V0VG9wTGVmdChleHRlbnQpO1xuICB9XG5cbiAgX29sX2Fzc2VydHNfLmFzc2VydChcbiAgICAgICghdGhpcy5vcmlnaW5fICYmIHRoaXMub3JpZ2luc18pIHx8ICh0aGlzLm9yaWdpbl8gJiYgIXRoaXMub3JpZ2luc18pLFxuICAgICAgMTgpOyAvLyBFaXRoZXIgYG9yaWdpbmAgb3IgYG9yaWdpbnNgIG11c3QgYmUgY29uZmlndXJlZCwgbmV2ZXIgYm90aFxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7QXJyYXkuPG51bWJlcnxvbC5TaXplPn1cbiAgICovXG4gIHRoaXMudGlsZVNpemVzXyA9IG51bGw7XG4gIGlmIChvcHRpb25zLnRpbGVTaXplcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy50aWxlU2l6ZXNfID0gb3B0aW9ucy50aWxlU2l6ZXM7XG4gICAgX29sX2Fzc2VydHNfLmFzc2VydCh0aGlzLnRpbGVTaXplc18ubGVuZ3RoID09IHRoaXMucmVzb2x1dGlvbnNfLmxlbmd0aCxcbiAgICAgICAgMTkpOyAvLyBOdW1iZXIgb2YgYHRpbGVTaXplc2AgYW5kIGByZXNvbHV0aW9uc2AgbXVzdCBiZSBlcXVhbFxuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtudW1iZXJ8b2wuU2l6ZX1cbiAgICovXG4gIHRoaXMudGlsZVNpemVfID0gb3B0aW9ucy50aWxlU2l6ZSAhPT0gdW5kZWZpbmVkID9cbiAgICBvcHRpb25zLnRpbGVTaXplIDpcbiAgICAhdGhpcy50aWxlU2l6ZXNfID8gX29sXy5ERUZBVUxUX1RJTEVfU0laRSA6IG51bGw7XG4gIF9vbF9hc3NlcnRzXy5hc3NlcnQoXG4gICAgICAoIXRoaXMudGlsZVNpemVfICYmIHRoaXMudGlsZVNpemVzXykgfHxcbiAgICAgICh0aGlzLnRpbGVTaXplXyAmJiAhdGhpcy50aWxlU2l6ZXNfKSxcbiAgICAgIDIyKTsgLy8gRWl0aGVyIGB0aWxlU2l6ZWAgb3IgYHRpbGVTaXplc2AgbXVzdCBiZSBjb25maWd1cmVkLCBuZXZlciBib3RoXG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtvbC5FeHRlbnR9XG4gICAqL1xuICB0aGlzLmV4dGVudF8gPSBleHRlbnQgIT09IHVuZGVmaW5lZCA/IGV4dGVudCA6IG51bGw7XG5cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge0FycmF5LjxvbC5UaWxlUmFuZ2U+fVxuICAgKi9cbiAgdGhpcy5mdWxsVGlsZVJhbmdlc18gPSBudWxsO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7b2wuU2l6ZX1cbiAgICovXG4gIHRoaXMudG1wU2l6ZV8gPSBbMCwgMF07XG5cbiAgaWYgKG9wdGlvbnMuc2l6ZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuZnVsbFRpbGVSYW5nZXNfID0gb3B0aW9ucy5zaXplcy5tYXAoZnVuY3Rpb24oc2l6ZSwgeikge1xuICAgICAgdmFyIHRpbGVSYW5nZSA9IG5ldyBfb2xfVGlsZVJhbmdlXyhcbiAgICAgICAgICBNYXRoLm1pbigwLCBzaXplWzBdKSwgTWF0aC5tYXgoc2l6ZVswXSAtIDEsIC0xKSxcbiAgICAgICAgICBNYXRoLm1pbigwLCBzaXplWzFdKSwgTWF0aC5tYXgoc2l6ZVsxXSAtIDEsIC0xKSk7XG4gICAgICByZXR1cm4gdGlsZVJhbmdlO1xuICAgIH0sIHRoaXMpO1xuICB9IGVsc2UgaWYgKGV4dGVudCkge1xuICAgIHRoaXMuY2FsY3VsYXRlVGlsZVJhbmdlc18oZXh0ZW50KTtcbiAgfVxuXG59O1xuXG5cbi8qKlxuICogQHByaXZhdGVcbiAqIEB0eXBlIHtvbC5UaWxlQ29vcmR9XG4gKi9cbl9vbF90aWxlZ3JpZF9UaWxlR3JpZF8udG1wVGlsZUNvb3JkXyA9IFswLCAwLCAwXTtcblxuXG4vKipcbiAqIENhbGwgYSBmdW5jdGlvbiB3aXRoIGVhY2ggdGlsZSBjb29yZGluYXRlIGZvciBhIGdpdmVuIGV4dGVudCBhbmQgem9vbSBsZXZlbC5cbiAqXG4gKiBAcGFyYW0ge29sLkV4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB6b29tIEludGVnZXIgem9vbSBsZXZlbC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24ob2wuVGlsZUNvb3JkKX0gY2FsbGJhY2sgRnVuY3Rpb24gY2FsbGVkIHdpdGggZWFjaCB0aWxlIGNvb3JkaW5hdGUuXG4gKiBAYXBpXG4gKi9cbl9vbF90aWxlZ3JpZF9UaWxlR3JpZF8ucHJvdG90eXBlLmZvckVhY2hUaWxlQ29vcmQgPSBmdW5jdGlvbihleHRlbnQsIHpvb20sIGNhbGxiYWNrKSB7XG4gIHZhciB0aWxlUmFuZ2UgPSB0aGlzLmdldFRpbGVSYW5nZUZvckV4dGVudEFuZFooZXh0ZW50LCB6b29tKTtcbiAgZm9yICh2YXIgaSA9IHRpbGVSYW5nZS5taW5YLCBpaSA9IHRpbGVSYW5nZS5tYXhYOyBpIDw9IGlpOyArK2kpIHtcbiAgICBmb3IgKHZhciBqID0gdGlsZVJhbmdlLm1pblksIGpqID0gdGlsZVJhbmdlLm1heFk7IGogPD0gamo7ICsraikge1xuICAgICAgY2FsbGJhY2soW3pvb20sIGksIGpdKTtcbiAgICB9XG4gIH1cbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge29sLlRpbGVDb29yZH0gdGlsZUNvb3JkIFRpbGUgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24odGhpczogVCwgbnVtYmVyLCBvbC5UaWxlUmFuZ2UpOiBib29sZWFufSBjYWxsYmFjayBDYWxsYmFjay5cbiAqIEBwYXJhbSB7VD19IG9wdF90aGlzIFRoZSBvYmplY3QgdG8gdXNlIGFzIGB0aGlzYCBpbiBgY2FsbGJhY2tgLlxuICogQHBhcmFtIHtvbC5UaWxlUmFuZ2U9fSBvcHRfdGlsZVJhbmdlIFRlbXBvcmFyeSBvbC5UaWxlUmFuZ2Ugb2JqZWN0LlxuICogQHBhcmFtIHtvbC5FeHRlbnQ9fSBvcHRfZXh0ZW50IFRlbXBvcmFyeSBvbC5FeHRlbnQgb2JqZWN0LlxuICogQHJldHVybiB7Ym9vbGVhbn0gQ2FsbGJhY2sgc3VjY2VlZGVkLlxuICogQHRlbXBsYXRlIFRcbiAqL1xuX29sX3RpbGVncmlkX1RpbGVHcmlkXy5wcm90b3R5cGUuZm9yRWFjaFRpbGVDb29yZFBhcmVudFRpbGVSYW5nZSA9IGZ1bmN0aW9uKHRpbGVDb29yZCwgY2FsbGJhY2ssIG9wdF90aGlzLCBvcHRfdGlsZVJhbmdlLCBvcHRfZXh0ZW50KSB7XG4gIHZhciB0aWxlUmFuZ2UsIHgsIHk7XG4gIHZhciB0aWxlQ29vcmRFeHRlbnQgPSBudWxsO1xuICB2YXIgeiA9IHRpbGVDb29yZFswXSAtIDE7XG4gIGlmICh0aGlzLnpvb21GYWN0b3JfID09PSAyKSB7XG4gICAgeCA9IHRpbGVDb29yZFsxXTtcbiAgICB5ID0gdGlsZUNvb3JkWzJdO1xuICB9IGVsc2Uge1xuICAgIHRpbGVDb29yZEV4dGVudCA9IHRoaXMuZ2V0VGlsZUNvb3JkRXh0ZW50KHRpbGVDb29yZCwgb3B0X2V4dGVudCk7XG4gIH1cbiAgd2hpbGUgKHogPj0gdGhpcy5taW5ab29tKSB7XG4gICAgaWYgKHRoaXMuem9vbUZhY3Rvcl8gPT09IDIpIHtcbiAgICAgIHggPSBNYXRoLmZsb29yKHggLyAyKTtcbiAgICAgIHkgPSBNYXRoLmZsb29yKHkgLyAyKTtcbiAgICAgIHRpbGVSYW5nZSA9IF9vbF9UaWxlUmFuZ2VfLmNyZWF0ZU9yVXBkYXRlKHgsIHgsIHksIHksIG9wdF90aWxlUmFuZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aWxlUmFuZ2UgPSB0aGlzLmdldFRpbGVSYW5nZUZvckV4dGVudEFuZFoodGlsZUNvb3JkRXh0ZW50LCB6LCBvcHRfdGlsZVJhbmdlKTtcbiAgICB9XG4gICAgaWYgKGNhbGxiYWNrLmNhbGwob3B0X3RoaXMsIHosIHRpbGVSYW5nZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAtLXo7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgZXh0ZW50IGZvciB0aGlzIHRpbGUgZ3JpZCwgaWYgaXQgd2FzIGNvbmZpZ3VyZWQuXG4gKiBAcmV0dXJuIHtvbC5FeHRlbnR9IEV4dGVudC5cbiAqL1xuX29sX3RpbGVncmlkX1RpbGVHcmlkXy5wcm90b3R5cGUuZ2V0RXh0ZW50ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmV4dGVudF87XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBtYXhpbXVtIHpvb20gbGV2ZWwgZm9yIHRoZSBncmlkLlxuICogQHJldHVybiB7bnVtYmVyfSBNYXggem9vbS5cbiAqIEBhcGlcbiAqL1xuX29sX3RpbGVncmlkX1RpbGVHcmlkXy5wcm90b3R5cGUuZ2V0TWF4Wm9vbSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5tYXhab29tO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgbWluaW11bSB6b29tIGxldmVsIGZvciB0aGUgZ3JpZC5cbiAqIEByZXR1cm4ge251bWJlcn0gTWluIHpvb20uXG4gKiBAYXBpXG4gKi9cbl9vbF90aWxlZ3JpZF9UaWxlR3JpZF8ucHJvdG90eXBlLmdldE1pblpvb20gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMubWluWm9vbTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIG9yaWdpbiBmb3IgdGhlIGdyaWQgYXQgdGhlIGdpdmVuIHpvb20gbGV2ZWwuXG4gKiBAcGFyYW0ge251bWJlcn0geiBJbnRlZ2VyIHpvb20gbGV2ZWwuXG4gKiBAcmV0dXJuIHtvbC5Db29yZGluYXRlfSBPcmlnaW4uXG4gKiBAYXBpXG4gKi9cbl9vbF90aWxlZ3JpZF9UaWxlR3JpZF8ucHJvdG90eXBlLmdldE9yaWdpbiA9IGZ1bmN0aW9uKHopIHtcbiAgaWYgKHRoaXMub3JpZ2luXykge1xuICAgIHJldHVybiB0aGlzLm9yaWdpbl87XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRoaXMub3JpZ2luc19bel07XG4gIH1cbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIHJlc29sdXRpb24gZm9yIHRoZSBnaXZlbiB6b29tIGxldmVsLlxuICogQHBhcmFtIHtudW1iZXJ9IHogSW50ZWdlciB6b29tIGxldmVsLlxuICogQHJldHVybiB7bnVtYmVyfSBSZXNvbHV0aW9uLlxuICogQGFwaVxuICovXG5fb2xfdGlsZWdyaWRfVGlsZUdyaWRfLnByb3RvdHlwZS5nZXRSZXNvbHV0aW9uID0gZnVuY3Rpb24oeikge1xuICByZXR1cm4gdGhpcy5yZXNvbHV0aW9uc19bel07XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBsaXN0IG9mIHJlc29sdXRpb25zIGZvciB0aGUgdGlsZSBncmlkLlxuICogQHJldHVybiB7QXJyYXkuPG51bWJlcj59IFJlc29sdXRpb25zLlxuICogQGFwaVxuICovXG5fb2xfdGlsZWdyaWRfVGlsZUdyaWRfLnByb3RvdHlwZS5nZXRSZXNvbHV0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5yZXNvbHV0aW9uc187XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtvbC5UaWxlQ29vcmR9IHRpbGVDb29yZCBUaWxlIGNvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge29sLlRpbGVSYW5nZT19IG9wdF90aWxlUmFuZ2UgVGVtcG9yYXJ5IG9sLlRpbGVSYW5nZSBvYmplY3QuXG4gKiBAcGFyYW0ge29sLkV4dGVudD19IG9wdF9leHRlbnQgVGVtcG9yYXJ5IG9sLkV4dGVudCBvYmplY3QuXG4gKiBAcmV0dXJuIHtvbC5UaWxlUmFuZ2V9IFRpbGUgcmFuZ2UuXG4gKi9cbl9vbF90aWxlZ3JpZF9UaWxlR3JpZF8ucHJvdG90eXBlLmdldFRpbGVDb29yZENoaWxkVGlsZVJhbmdlID0gZnVuY3Rpb24odGlsZUNvb3JkLCBvcHRfdGlsZVJhbmdlLCBvcHRfZXh0ZW50KSB7XG4gIGlmICh0aWxlQ29vcmRbMF0gPCB0aGlzLm1heFpvb20pIHtcbiAgICBpZiAodGhpcy56b29tRmFjdG9yXyA9PT0gMikge1xuICAgICAgdmFyIG1pblggPSB0aWxlQ29vcmRbMV0gKiAyO1xuICAgICAgdmFyIG1pblkgPSB0aWxlQ29vcmRbMl0gKiAyO1xuICAgICAgcmV0dXJuIF9vbF9UaWxlUmFuZ2VfLmNyZWF0ZU9yVXBkYXRlKG1pblgsIG1pblggKyAxLCBtaW5ZLCBtaW5ZICsgMSwgb3B0X3RpbGVSYW5nZSk7XG4gICAgfVxuICAgIHZhciB0aWxlQ29vcmRFeHRlbnQgPSB0aGlzLmdldFRpbGVDb29yZEV4dGVudCh0aWxlQ29vcmQsIG9wdF9leHRlbnQpO1xuICAgIHJldHVybiB0aGlzLmdldFRpbGVSYW5nZUZvckV4dGVudEFuZFooXG4gICAgICAgIHRpbGVDb29yZEV4dGVudCwgdGlsZUNvb3JkWzBdICsgMSwgb3B0X3RpbGVSYW5nZSk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBleHRlbnQgZm9yIGEgdGlsZSByYW5nZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB6IEludGVnZXIgem9vbSBsZXZlbC5cbiAqIEBwYXJhbSB7b2wuVGlsZVJhbmdlfSB0aWxlUmFuZ2UgVGlsZSByYW5nZS5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50PX0gb3B0X2V4dGVudCBUZW1wb3Jhcnkgb2wuRXh0ZW50IG9iamVjdC5cbiAqIEByZXR1cm4ge29sLkV4dGVudH0gRXh0ZW50LlxuICovXG5fb2xfdGlsZWdyaWRfVGlsZUdyaWRfLnByb3RvdHlwZS5nZXRUaWxlUmFuZ2VFeHRlbnQgPSBmdW5jdGlvbih6LCB0aWxlUmFuZ2UsIG9wdF9leHRlbnQpIHtcbiAgdmFyIG9yaWdpbiA9IHRoaXMuZ2V0T3JpZ2luKHopO1xuICB2YXIgcmVzb2x1dGlvbiA9IHRoaXMuZ2V0UmVzb2x1dGlvbih6KTtcbiAgdmFyIHRpbGVTaXplID0gX29sX3NpemVfLnRvU2l6ZSh0aGlzLmdldFRpbGVTaXplKHopLCB0aGlzLnRtcFNpemVfKTtcbiAgdmFyIG1pblggPSBvcmlnaW5bMF0gKyB0aWxlUmFuZ2UubWluWCAqIHRpbGVTaXplWzBdICogcmVzb2x1dGlvbjtcbiAgdmFyIG1heFggPSBvcmlnaW5bMF0gKyAodGlsZVJhbmdlLm1heFggKyAxKSAqIHRpbGVTaXplWzBdICogcmVzb2x1dGlvbjtcbiAgdmFyIG1pblkgPSBvcmlnaW5bMV0gKyB0aWxlUmFuZ2UubWluWSAqIHRpbGVTaXplWzFdICogcmVzb2x1dGlvbjtcbiAgdmFyIG1heFkgPSBvcmlnaW5bMV0gKyAodGlsZVJhbmdlLm1heFkgKyAxKSAqIHRpbGVTaXplWzFdICogcmVzb2x1dGlvbjtcbiAgcmV0dXJuIF9vbF9leHRlbnRfLmNyZWF0ZU9yVXBkYXRlKG1pblgsIG1pblksIG1heFgsIG1heFksIG9wdF9leHRlbnQpO1xufTtcblxuXG4vKipcbiAqIEdldCBhIHRpbGUgcmFuZ2UgZm9yIHRoZSBnaXZlbiBleHRlbnQgYW5kIGludGVnZXIgem9vbSBsZXZlbC5cbiAqIEBwYXJhbSB7b2wuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IHogSW50ZWdlciB6b29tIGxldmVsLlxuICogQHBhcmFtIHtvbC5UaWxlUmFuZ2U9fSBvcHRfdGlsZVJhbmdlIFRlbXBvcmFyeSB0aWxlIHJhbmdlIG9iamVjdC5cbiAqIEByZXR1cm4ge29sLlRpbGVSYW5nZX0gVGlsZSByYW5nZS5cbiAqL1xuX29sX3RpbGVncmlkX1RpbGVHcmlkXy5wcm90b3R5cGUuZ2V0VGlsZVJhbmdlRm9yRXh0ZW50QW5kWiA9IGZ1bmN0aW9uKGV4dGVudCwgeiwgb3B0X3RpbGVSYW5nZSkge1xuICB2YXIgdGlsZUNvb3JkID0gX29sX3RpbGVncmlkX1RpbGVHcmlkXy50bXBUaWxlQ29vcmRfO1xuICB0aGlzLmdldFRpbGVDb29yZEZvclhZQW5kWl8oZXh0ZW50WzBdLCBleHRlbnRbMV0sIHosIGZhbHNlLCB0aWxlQ29vcmQpO1xuICB2YXIgbWluWCA9IHRpbGVDb29yZFsxXTtcbiAgdmFyIG1pblkgPSB0aWxlQ29vcmRbMl07XG4gIHRoaXMuZ2V0VGlsZUNvb3JkRm9yWFlBbmRaXyhleHRlbnRbMl0sIGV4dGVudFszXSwgeiwgdHJ1ZSwgdGlsZUNvb3JkKTtcbiAgcmV0dXJuIF9vbF9UaWxlUmFuZ2VfLmNyZWF0ZU9yVXBkYXRlKFxuICAgICAgbWluWCwgdGlsZUNvb3JkWzFdLCBtaW5ZLCB0aWxlQ29vcmRbMl0sIG9wdF90aWxlUmFuZ2UpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wuVGlsZUNvb3JkfSB0aWxlQ29vcmQgVGlsZSBjb29yZGluYXRlLlxuICogQHJldHVybiB7b2wuQ29vcmRpbmF0ZX0gVGlsZSBjZW50ZXIuXG4gKi9cbl9vbF90aWxlZ3JpZF9UaWxlR3JpZF8ucHJvdG90eXBlLmdldFRpbGVDb29yZENlbnRlciA9IGZ1bmN0aW9uKHRpbGVDb29yZCkge1xuICB2YXIgb3JpZ2luID0gdGhpcy5nZXRPcmlnaW4odGlsZUNvb3JkWzBdKTtcbiAgdmFyIHJlc29sdXRpb24gPSB0aGlzLmdldFJlc29sdXRpb24odGlsZUNvb3JkWzBdKTtcbiAgdmFyIHRpbGVTaXplID0gX29sX3NpemVfLnRvU2l6ZSh0aGlzLmdldFRpbGVTaXplKHRpbGVDb29yZFswXSksIHRoaXMudG1wU2l6ZV8pO1xuICByZXR1cm4gW1xuICAgIG9yaWdpblswXSArICh0aWxlQ29vcmRbMV0gKyAwLjUpICogdGlsZVNpemVbMF0gKiByZXNvbHV0aW9uLFxuICAgIG9yaWdpblsxXSArICh0aWxlQ29vcmRbMl0gKyAwLjUpICogdGlsZVNpemVbMV0gKiByZXNvbHV0aW9uXG4gIF07XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBleHRlbnQgb2YgYSB0aWxlIGNvb3JkaW5hdGUuXG4gKlxuICogQHBhcmFtIHtvbC5UaWxlQ29vcmR9IHRpbGVDb29yZCBUaWxlIGNvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge29sLkV4dGVudD19IG9wdF9leHRlbnQgVGVtcG9yYXJ5IGV4dGVudCBvYmplY3QuXG4gKiBAcmV0dXJuIHtvbC5FeHRlbnR9IEV4dGVudC5cbiAqIEBhcGlcbiAqL1xuX29sX3RpbGVncmlkX1RpbGVHcmlkXy5wcm90b3R5cGUuZ2V0VGlsZUNvb3JkRXh0ZW50ID0gZnVuY3Rpb24odGlsZUNvb3JkLCBvcHRfZXh0ZW50KSB7XG4gIHZhciBvcmlnaW4gPSB0aGlzLmdldE9yaWdpbih0aWxlQ29vcmRbMF0pO1xuICB2YXIgcmVzb2x1dGlvbiA9IHRoaXMuZ2V0UmVzb2x1dGlvbih0aWxlQ29vcmRbMF0pO1xuICB2YXIgdGlsZVNpemUgPSBfb2xfc2l6ZV8udG9TaXplKHRoaXMuZ2V0VGlsZVNpemUodGlsZUNvb3JkWzBdKSwgdGhpcy50bXBTaXplXyk7XG4gIHZhciBtaW5YID0gb3JpZ2luWzBdICsgdGlsZUNvb3JkWzFdICogdGlsZVNpemVbMF0gKiByZXNvbHV0aW9uO1xuICB2YXIgbWluWSA9IG9yaWdpblsxXSArIHRpbGVDb29yZFsyXSAqIHRpbGVTaXplWzFdICogcmVzb2x1dGlvbjtcbiAgdmFyIG1heFggPSBtaW5YICsgdGlsZVNpemVbMF0gKiByZXNvbHV0aW9uO1xuICB2YXIgbWF4WSA9IG1pblkgKyB0aWxlU2l6ZVsxXSAqIHJlc29sdXRpb247XG4gIHJldHVybiBfb2xfZXh0ZW50Xy5jcmVhdGVPclVwZGF0ZShtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZLCBvcHRfZXh0ZW50KTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIHRpbGUgY29vcmRpbmF0ZSBmb3IgdGhlIGdpdmVuIG1hcCBjb29yZGluYXRlIGFuZCByZXNvbHV0aW9uLiAgVGhpc1xuICogbWV0aG9kIGNvbnNpZGVycyB0aGF0IGNvb3JkaW5hdGVzIHRoYXQgaW50ZXJzZWN0IHRpbGUgYm91bmRhcmllcyBzaG91bGQgYmVcbiAqIGFzc2lnbmVkIHRoZSBoaWdoZXIgdGlsZSBjb29yZGluYXRlLlxuICpcbiAqIEBwYXJhbSB7b2wuQ29vcmRpbmF0ZX0gY29vcmRpbmF0ZSBDb29yZGluYXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IHJlc29sdXRpb24gUmVzb2x1dGlvbi5cbiAqIEBwYXJhbSB7b2wuVGlsZUNvb3JkPX0gb3B0X3RpbGVDb29yZCBEZXN0aW5hdGlvbiBvbC5UaWxlQ29vcmQgb2JqZWN0LlxuICogQHJldHVybiB7b2wuVGlsZUNvb3JkfSBUaWxlIGNvb3JkaW5hdGUuXG4gKiBAYXBpXG4gKi9cbl9vbF90aWxlZ3JpZF9UaWxlR3JpZF8ucHJvdG90eXBlLmdldFRpbGVDb29yZEZvckNvb3JkQW5kUmVzb2x1dGlvbiA9IGZ1bmN0aW9uKGNvb3JkaW5hdGUsIHJlc29sdXRpb24sIG9wdF90aWxlQ29vcmQpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0VGlsZUNvb3JkRm9yWFlBbmRSZXNvbHV0aW9uXyhcbiAgICAgIGNvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV0sIHJlc29sdXRpb24sIGZhbHNlLCBvcHRfdGlsZUNvb3JkKTtcbn07XG5cblxuLyoqXG4gKiBOb3RlIHRoYXQgdGhpcyBtZXRob2Qgc2hvdWxkIG5vdCBiZSBjYWxsZWQgZm9yIHJlc29sdXRpb25zIHRoYXQgY29ycmVzcG9uZFxuICogdG8gYW4gaW50ZWdlciB6b29tIGxldmVsLiAgSW5zdGVhZCBjYWxsIHRoZSBgZ2V0VGlsZUNvb3JkRm9yWFlBbmRaX2AgbWV0aG9kLlxuICogQHBhcmFtIHtudW1iZXJ9IHggWC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB5IFkuXG4gKiBAcGFyYW0ge251bWJlcn0gcmVzb2x1dGlvbiBSZXNvbHV0aW9uIChmb3IgYSBub24taW50ZWdlciB6b29tIGxldmVsKS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcmV2ZXJzZUludGVyc2VjdGlvblBvbGljeSBJbnN0ZWFkIG9mIGxldHRpbmcgZWRnZVxuICogICAgIGludGVyc2VjdGlvbnMgZ28gdG8gdGhlIGhpZ2hlciB0aWxlIGNvb3JkaW5hdGUsIGxldCBlZGdlIGludGVyc2VjdGlvbnNcbiAqICAgICBnbyB0byB0aGUgbG93ZXIgdGlsZSBjb29yZGluYXRlLlxuICogQHBhcmFtIHtvbC5UaWxlQ29vcmQ9fSBvcHRfdGlsZUNvb3JkIFRlbXBvcmFyeSBvbC5UaWxlQ29vcmQgb2JqZWN0LlxuICogQHJldHVybiB7b2wuVGlsZUNvb3JkfSBUaWxlIGNvb3JkaW5hdGUuXG4gKiBAcHJpdmF0ZVxuICovXG5fb2xfdGlsZWdyaWRfVGlsZUdyaWRfLnByb3RvdHlwZS5nZXRUaWxlQ29vcmRGb3JYWUFuZFJlc29sdXRpb25fID0gZnVuY3Rpb24oXG4gICAgeCwgeSwgcmVzb2x1dGlvbiwgcmV2ZXJzZUludGVyc2VjdGlvblBvbGljeSwgb3B0X3RpbGVDb29yZCkge1xuICB2YXIgeiA9IHRoaXMuZ2V0WkZvclJlc29sdXRpb24ocmVzb2x1dGlvbik7XG4gIHZhciBzY2FsZSA9IHJlc29sdXRpb24gLyB0aGlzLmdldFJlc29sdXRpb24oeik7XG4gIHZhciBvcmlnaW4gPSB0aGlzLmdldE9yaWdpbih6KTtcbiAgdmFyIHRpbGVTaXplID0gX29sX3NpemVfLnRvU2l6ZSh0aGlzLmdldFRpbGVTaXplKHopLCB0aGlzLnRtcFNpemVfKTtcblxuICB2YXIgYWRqdXN0WCA9IHJldmVyc2VJbnRlcnNlY3Rpb25Qb2xpY3kgPyAwLjUgOiAwO1xuICB2YXIgYWRqdXN0WSA9IHJldmVyc2VJbnRlcnNlY3Rpb25Qb2xpY3kgPyAwIDogMC41O1xuICB2YXIgeEZyb21PcmlnaW4gPSBNYXRoLmZsb29yKCh4IC0gb3JpZ2luWzBdKSAvIHJlc29sdXRpb24gKyBhZGp1c3RYKTtcbiAgdmFyIHlGcm9tT3JpZ2luID0gTWF0aC5mbG9vcigoeSAtIG9yaWdpblsxXSkgLyByZXNvbHV0aW9uICsgYWRqdXN0WSk7XG4gIHZhciB0aWxlQ29vcmRYID0gc2NhbGUgKiB4RnJvbU9yaWdpbiAvIHRpbGVTaXplWzBdO1xuICB2YXIgdGlsZUNvb3JkWSA9IHNjYWxlICogeUZyb21PcmlnaW4gLyB0aWxlU2l6ZVsxXTtcblxuICBpZiAocmV2ZXJzZUludGVyc2VjdGlvblBvbGljeSkge1xuICAgIHRpbGVDb29yZFggPSBNYXRoLmNlaWwodGlsZUNvb3JkWCkgLSAxO1xuICAgIHRpbGVDb29yZFkgPSBNYXRoLmNlaWwodGlsZUNvb3JkWSkgLSAxO1xuICB9IGVsc2Uge1xuICAgIHRpbGVDb29yZFggPSBNYXRoLmZsb29yKHRpbGVDb29yZFgpO1xuICAgIHRpbGVDb29yZFkgPSBNYXRoLmZsb29yKHRpbGVDb29yZFkpO1xuICB9XG5cbiAgcmV0dXJuIF9vbF90aWxlY29vcmRfLmNyZWF0ZU9yVXBkYXRlKHosIHRpbGVDb29yZFgsIHRpbGVDb29yZFksIG9wdF90aWxlQ29vcmQpO1xufTtcblxuXG4vKipcbiAqIEFsdGhvdWdoIHRoZXJlIGlzIHJlcGV0aXRpb24gYmV0d2VlbiB0aGlzIG1ldGhvZCBhbmQgYGdldFRpbGVDb29yZEZvclhZQW5kUmVzb2x1dGlvbl9gLFxuICogdGhleSBzaG91bGQgaGF2ZSBzZXBhcmF0ZSBpbXBsZW1lbnRhdGlvbnMuICBUaGlzIG1ldGhvZCBpcyBmb3IgaW50ZWdlciB6b29tXG4gKiBsZXZlbHMuICBUaGUgb3RoZXIgbWV0aG9kIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBmb3IgcmVzb2x1dGlvbnMgY29ycmVzcG9uZGluZ1xuICogdG8gbm9uLWludGVnZXIgem9vbSBsZXZlbHMuXG4gKiBAcGFyYW0ge251bWJlcn0geCBNYXAgeCBjb29yZGluYXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IHkgTWFwIHkgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB6IEludGVnZXIgem9vbSBsZXZlbC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcmV2ZXJzZUludGVyc2VjdGlvblBvbGljeSBJbnN0ZWFkIG9mIGxldHRpbmcgZWRnZVxuICogICAgIGludGVyc2VjdGlvbnMgZ28gdG8gdGhlIGhpZ2hlciB0aWxlIGNvb3JkaW5hdGUsIGxldCBlZGdlIGludGVyc2VjdGlvbnNcbiAqICAgICBnbyB0byB0aGUgbG93ZXIgdGlsZSBjb29yZGluYXRlLlxuICogQHBhcmFtIHtvbC5UaWxlQ29vcmQ9fSBvcHRfdGlsZUNvb3JkIFRlbXBvcmFyeSBvbC5UaWxlQ29vcmQgb2JqZWN0LlxuICogQHJldHVybiB7b2wuVGlsZUNvb3JkfSBUaWxlIGNvb3JkaW5hdGUuXG4gKiBAcHJpdmF0ZVxuICovXG5fb2xfdGlsZWdyaWRfVGlsZUdyaWRfLnByb3RvdHlwZS5nZXRUaWxlQ29vcmRGb3JYWUFuZFpfID0gZnVuY3Rpb24oeCwgeSwgeiwgcmV2ZXJzZUludGVyc2VjdGlvblBvbGljeSwgb3B0X3RpbGVDb29yZCkge1xuICB2YXIgb3JpZ2luID0gdGhpcy5nZXRPcmlnaW4oeik7XG4gIHZhciByZXNvbHV0aW9uID0gdGhpcy5nZXRSZXNvbHV0aW9uKHopO1xuICB2YXIgdGlsZVNpemUgPSBfb2xfc2l6ZV8udG9TaXplKHRoaXMuZ2V0VGlsZVNpemUoeiksIHRoaXMudG1wU2l6ZV8pO1xuXG4gIHZhciBhZGp1c3RYID0gcmV2ZXJzZUludGVyc2VjdGlvblBvbGljeSA/IDAuNSA6IDA7XG4gIHZhciBhZGp1c3RZID0gcmV2ZXJzZUludGVyc2VjdGlvblBvbGljeSA/IDAgOiAwLjU7XG4gIHZhciB4RnJvbU9yaWdpbiA9IE1hdGguZmxvb3IoKHggLSBvcmlnaW5bMF0pIC8gcmVzb2x1dGlvbiArIGFkanVzdFgpO1xuICB2YXIgeUZyb21PcmlnaW4gPSBNYXRoLmZsb29yKCh5IC0gb3JpZ2luWzFdKSAvIHJlc29sdXRpb24gKyBhZGp1c3RZKTtcbiAgdmFyIHRpbGVDb29yZFggPSB4RnJvbU9yaWdpbiAvIHRpbGVTaXplWzBdO1xuICB2YXIgdGlsZUNvb3JkWSA9IHlGcm9tT3JpZ2luIC8gdGlsZVNpemVbMV07XG5cbiAgaWYgKHJldmVyc2VJbnRlcnNlY3Rpb25Qb2xpY3kpIHtcbiAgICB0aWxlQ29vcmRYID0gTWF0aC5jZWlsKHRpbGVDb29yZFgpIC0gMTtcbiAgICB0aWxlQ29vcmRZID0gTWF0aC5jZWlsKHRpbGVDb29yZFkpIC0gMTtcbiAgfSBlbHNlIHtcbiAgICB0aWxlQ29vcmRYID0gTWF0aC5mbG9vcih0aWxlQ29vcmRYKTtcbiAgICB0aWxlQ29vcmRZID0gTWF0aC5mbG9vcih0aWxlQ29vcmRZKTtcbiAgfVxuXG4gIHJldHVybiBfb2xfdGlsZWNvb3JkXy5jcmVhdGVPclVwZGF0ZSh6LCB0aWxlQ29vcmRYLCB0aWxlQ29vcmRZLCBvcHRfdGlsZUNvb3JkKTtcbn07XG5cblxuLyoqXG4gKiBHZXQgYSB0aWxlIGNvb3JkaW5hdGUgZ2l2ZW4gYSBtYXAgY29vcmRpbmF0ZSBhbmQgem9vbSBsZXZlbC5cbiAqIEBwYXJhbSB7b2wuQ29vcmRpbmF0ZX0gY29vcmRpbmF0ZSBDb29yZGluYXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IHogWm9vbSBsZXZlbC5cbiAqIEBwYXJhbSB7b2wuVGlsZUNvb3JkPX0gb3B0X3RpbGVDb29yZCBEZXN0aW5hdGlvbiBvbC5UaWxlQ29vcmQgb2JqZWN0LlxuICogQHJldHVybiB7b2wuVGlsZUNvb3JkfSBUaWxlIGNvb3JkaW5hdGUuXG4gKiBAYXBpXG4gKi9cbl9vbF90aWxlZ3JpZF9UaWxlR3JpZF8ucHJvdG90eXBlLmdldFRpbGVDb29yZEZvckNvb3JkQW5kWiA9IGZ1bmN0aW9uKGNvb3JkaW5hdGUsIHosIG9wdF90aWxlQ29vcmQpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0VGlsZUNvb3JkRm9yWFlBbmRaXyhcbiAgICAgIGNvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV0sIHosIGZhbHNlLCBvcHRfdGlsZUNvb3JkKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge29sLlRpbGVDb29yZH0gdGlsZUNvb3JkIFRpbGUgY29vcmRpbmF0ZS5cbiAqIEByZXR1cm4ge251bWJlcn0gVGlsZSByZXNvbHV0aW9uLlxuICovXG5fb2xfdGlsZWdyaWRfVGlsZUdyaWRfLnByb3RvdHlwZS5nZXRUaWxlQ29vcmRSZXNvbHV0aW9uID0gZnVuY3Rpb24odGlsZUNvb3JkKSB7XG4gIHJldHVybiB0aGlzLnJlc29sdXRpb25zX1t0aWxlQ29vcmRbMF1dO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgdGlsZSBzaXplIGZvciBhIHpvb20gbGV2ZWwuIFRoZSB0eXBlIG9mIHRoZSByZXR1cm4gdmFsdWUgbWF0Y2hlcyB0aGVcbiAqIGB0aWxlU2l6ZWAgb3IgYHRpbGVTaXplc2AgdGhhdCB0aGUgdGlsZSBncmlkIHdhcyBjb25maWd1cmVkIHdpdGguIFRvIGFsd2F5c1xuICogZ2V0IGFuIGBvbC5TaXplYCwgcnVuIHRoZSByZXN1bHQgdGhyb3VnaCBgb2wuc2l6ZS50b1NpemUoKWAuXG4gKiBAcGFyYW0ge251bWJlcn0geiBaLlxuICogQHJldHVybiB7bnVtYmVyfG9sLlNpemV9IFRpbGUgc2l6ZS5cbiAqIEBhcGlcbiAqL1xuX29sX3RpbGVncmlkX1RpbGVHcmlkXy5wcm90b3R5cGUuZ2V0VGlsZVNpemUgPSBmdW5jdGlvbih6KSB7XG4gIGlmICh0aGlzLnRpbGVTaXplXykge1xuICAgIHJldHVybiB0aGlzLnRpbGVTaXplXztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGhpcy50aWxlU2l6ZXNfW3pdO1xuICB9XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHogWm9vbSBsZXZlbC5cbiAqIEByZXR1cm4ge29sLlRpbGVSYW5nZX0gRXh0ZW50IHRpbGUgcmFuZ2UgZm9yIHRoZSBzcGVjaWZpZWQgem9vbSBsZXZlbC5cbiAqL1xuX29sX3RpbGVncmlkX1RpbGVHcmlkXy5wcm90b3R5cGUuZ2V0RnVsbFRpbGVSYW5nZSA9IGZ1bmN0aW9uKHopIHtcbiAgaWYgKCF0aGlzLmZ1bGxUaWxlUmFuZ2VzXykge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLmZ1bGxUaWxlUmFuZ2VzX1t6XTtcbiAgfVxufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSByZXNvbHV0aW9uIFJlc29sdXRpb24uXG4gKiBAcGFyYW0ge251bWJlcj19IG9wdF9kaXJlY3Rpb24gSWYgMCwgdGhlIG5lYXJlc3QgcmVzb2x1dGlvbiB3aWxsIGJlIHVzZWQuXG4gKiAgICAgSWYgMSwgdGhlIG5lYXJlc3QgbG93ZXIgcmVzb2x1dGlvbiB3aWxsIGJlIHVzZWQuIElmIC0xLCB0aGUgbmVhcmVzdFxuICogICAgIGhpZ2hlciByZXNvbHV0aW9uIHdpbGwgYmUgdXNlZC4gRGVmYXVsdCBpcyAwLlxuICogQHJldHVybiB7bnVtYmVyfSBaLlxuICogQGFwaVxuICovXG5fb2xfdGlsZWdyaWRfVGlsZUdyaWRfLnByb3RvdHlwZS5nZXRaRm9yUmVzb2x1dGlvbiA9IGZ1bmN0aW9uKFxuICAgIHJlc29sdXRpb24sIG9wdF9kaXJlY3Rpb24pIHtcbiAgdmFyIHogPSBfb2xfYXJyYXlfLmxpbmVhckZpbmROZWFyZXN0KHRoaXMucmVzb2x1dGlvbnNfLCByZXNvbHV0aW9uLFxuICAgICAgb3B0X2RpcmVjdGlvbiB8fCAwKTtcbiAgcmV0dXJuIF9vbF9tYXRoXy5jbGFtcCh6LCB0aGlzLm1pblpvb20sIHRoaXMubWF4Wm9vbSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHshb2wuRXh0ZW50fSBleHRlbnQgRXh0ZW50IGZvciB0aGlzIHRpbGUgZ3JpZC5cbiAqIEBwcml2YXRlXG4gKi9cbl9vbF90aWxlZ3JpZF9UaWxlR3JpZF8ucHJvdG90eXBlLmNhbGN1bGF0ZVRpbGVSYW5nZXNfID0gZnVuY3Rpb24oZXh0ZW50KSB7XG4gIHZhciBsZW5ndGggPSB0aGlzLnJlc29sdXRpb25zXy5sZW5ndGg7XG4gIHZhciBmdWxsVGlsZVJhbmdlcyA9IG5ldyBBcnJheShsZW5ndGgpO1xuICBmb3IgKHZhciB6ID0gdGhpcy5taW5ab29tOyB6IDwgbGVuZ3RoOyArK3opIHtcbiAgICBmdWxsVGlsZVJhbmdlc1t6XSA9IHRoaXMuZ2V0VGlsZVJhbmdlRm9yRXh0ZW50QW5kWihleHRlbnQsIHopO1xuICB9XG4gIHRoaXMuZnVsbFRpbGVSYW5nZXNfID0gZnVsbFRpbGVSYW5nZXM7XG59O1xuZXhwb3J0IGRlZmF1bHQgX29sX3RpbGVncmlkX1RpbGVHcmlkXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL3RpbGVncmlkL3RpbGVncmlkLmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB0aWxlXzEgPSByZXF1aXJlKFwib2wvbGF5ZXIvdGlsZVwiKTtcbnZhciBzdGFtZW5fMSA9IHJlcXVpcmUoXCJvbC9zb3VyY2Uvc3RhbWVuXCIpO1xudmFyIFRlc3RMYXllciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUZXN0TGF5ZXIob3B0aW9ucykge1xuICAgICAgICB0aGlzLl9tYXAgPSBudWxsO1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdUZXN0TGF5ZXIuY29uc3RydWN0b3InKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgICAgIGZvciAodmFyIGkgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zW2ldID0gb3B0aW9uc1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUZXN0TGF5ZXIucHJvdG90eXBlLmdldE1hcExheWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdUZXN0TGF5ZXIuZ2V0TWFwTGF5ZXInKTtcbiAgICAgICAgdGhpcy5fbGF5ZXIgPSB0aGlzLl9sYXllciB8fCBuZXcgdGlsZV8xLmRlZmF1bHQoe1xuICAgICAgICAgICAgc291cmNlOiBuZXcgc3RhbWVuXzEuZGVmYXVsdCh7XG4gICAgICAgICAgICAgICAgbGF5ZXI6ICd0b25lcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdUZXN0TGF5ZXIuZ2V0TWFwTGF5ZXIgcmV0dXJuJyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYXllcjtcbiAgICB9O1xuICAgIFRlc3RMYXllci5wcm90b3R5cGUuYWRkVG9NYXAgPSBmdW5jdGlvbiAobWFwKSB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ1ZlbG9jaXR5TGF5ZXIuYWRkVG9NYXAnKTtcbiAgICAgICAgbWFwLmFkZExheWVyKHRoaXMuZ2V0TWFwTGF5ZXIoKSk7XG4gICAgICAgIHRoaXMuX21hcCA9IG1hcDtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnVGVzdExheWVyLmFkZFRvTWFwIHJldHVybicpO1xuICAgIH07XG4gICAgcmV0dXJuIFRlc3RMYXllcjtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBUZXN0TGF5ZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZXN0bGF5ZXIudHNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfb2xfIGZyb20gJy4uL2luZGV4LmpzJztcbmltcG9ydCBfb2xfTGF5ZXJUeXBlXyBmcm9tICcuLi9sYXllcnR5cGUuanMnO1xuaW1wb3J0IF9vbF9sYXllcl9MYXllcl8gZnJvbSAnLi4vbGF5ZXIvbGF5ZXIuanMnO1xuaW1wb3J0IF9vbF9sYXllcl9UaWxlUHJvcGVydHlfIGZyb20gJy4uL2xheWVyL3RpbGVwcm9wZXJ0eS5qcyc7XG5pbXBvcnQgX29sX29ial8gZnJvbSAnLi4vb2JqLmpzJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBGb3IgbGF5ZXIgc291cmNlcyB0aGF0IHByb3ZpZGUgcHJlLXJlbmRlcmVkLCB0aWxlZCBpbWFnZXMgaW4gZ3JpZHMgdGhhdCBhcmVcbiAqIG9yZ2FuaXplZCBieSB6b29tIGxldmVscyBmb3Igc3BlY2lmaWMgcmVzb2x1dGlvbnMuXG4gKiBOb3RlIHRoYXQgYW55IHByb3BlcnR5IHNldCBpbiB0aGUgb3B0aW9ucyBpcyBzZXQgYXMgYSB7QGxpbmsgb2wuT2JqZWN0fVxuICogcHJvcGVydHkgb24gdGhlIGxheWVyIG9iamVjdDsgZm9yIGV4YW1wbGUsIHNldHRpbmcgYHRpdGxlOiAnTXkgVGl0bGUnYCBpbiB0aGVcbiAqIG9wdGlvbnMgbWVhbnMgdGhhdCBgdGl0bGVgIGlzIG9ic2VydmFibGUsIGFuZCBoYXMgZ2V0L3NldCBhY2Nlc3NvcnMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAZXh0ZW5kcyB7b2wubGF5ZXIuTGF5ZXJ9XG4gKiBAZmlyZXMgb2wucmVuZGVyLkV2ZW50XG4gKiBAcGFyYW0ge29seC5sYXllci5UaWxlT3B0aW9ucz19IG9wdF9vcHRpb25zIFRpbGUgbGF5ZXIgb3B0aW9ucy5cbiAqIEBhcGlcbiAqL1xudmFyIF9vbF9sYXllcl9UaWxlXyA9IGZ1bmN0aW9uKG9wdF9vcHRpb25zKSB7XG4gIHZhciBvcHRpb25zID0gb3B0X29wdGlvbnMgPyBvcHRfb3B0aW9ucyA6IHt9O1xuXG4gIHZhciBiYXNlT3B0aW9ucyA9IF9vbF9vYmpfLmFzc2lnbih7fSwgb3B0aW9ucyk7XG5cbiAgZGVsZXRlIGJhc2VPcHRpb25zLnByZWxvYWQ7XG4gIGRlbGV0ZSBiYXNlT3B0aW9ucy51c2VJbnRlcmltVGlsZXNPbkVycm9yO1xuICBfb2xfbGF5ZXJfTGF5ZXJfLmNhbGwodGhpcywgIC8qKiBAdHlwZSB7b2x4LmxheWVyLkxheWVyT3B0aW9uc30gKi8gKGJhc2VPcHRpb25zKSk7XG5cbiAgdGhpcy5zZXRQcmVsb2FkKG9wdGlvbnMucHJlbG9hZCAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5wcmVsb2FkIDogMCk7XG4gIHRoaXMuc2V0VXNlSW50ZXJpbVRpbGVzT25FcnJvcihvcHRpb25zLnVzZUludGVyaW1UaWxlc09uRXJyb3IgIT09IHVuZGVmaW5lZCA/XG4gICAgb3B0aW9ucy51c2VJbnRlcmltVGlsZXNPbkVycm9yIDogdHJ1ZSk7XG5cbiAgLyoqXG4gICAqIFRoZSBsYXllciB0eXBlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEB0eXBlIHtvbC5MYXllclR5cGV9XG4gICAqL1xuICB0aGlzLnR5cGUgPSBfb2xfTGF5ZXJUeXBlXy5USUxFO1xuXG59O1xuXG5fb2xfLmluaGVyaXRzKF9vbF9sYXllcl9UaWxlXywgX29sX2xheWVyX0xheWVyXyk7XG5cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGxldmVsIGFzIG51bWJlciB0byB3aGljaCB3ZSB3aWxsIHByZWxvYWQgdGlsZXMgdXAgdG8uXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBsZXZlbCB0byBwcmVsb2FkIHRpbGVzIHVwIHRvLlxuICogQG9ic2VydmFibGVcbiAqIEBhcGlcbiAqL1xuX29sX2xheWVyX1RpbGVfLnByb3RvdHlwZS5nZXRQcmVsb2FkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAoXG4gIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyB0aGlzLmdldChfb2xfbGF5ZXJfVGlsZVByb3BlcnR5Xy5QUkVMT0FEKVxuICApO1xufTtcblxuXG4vKipcbiAqIFJldHVybiB0aGUgYXNzb2NpYXRlZCB7QGxpbmsgb2wuc291cmNlLlRpbGUgdGlsZXNvdXJjZX0gb2YgdGhlIGxheWVyLlxuICogQGZ1bmN0aW9uXG4gKiBAcmV0dXJuIHtvbC5zb3VyY2UuVGlsZX0gU291cmNlLlxuICogQGFwaVxuICovXG5fb2xfbGF5ZXJfVGlsZV8ucHJvdG90eXBlLmdldFNvdXJjZTtcblxuXG4vKipcbiAqIFNldCB0aGUgbGV2ZWwgYXMgbnVtYmVyIHRvIHdoaWNoIHdlIHdpbGwgcHJlbG9hZCB0aWxlcyB1cCB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBwcmVsb2FkIFRoZSBsZXZlbCB0byBwcmVsb2FkIHRpbGVzIHVwIHRvLlxuICogQG9ic2VydmFibGVcbiAqIEBhcGlcbiAqL1xuX29sX2xheWVyX1RpbGVfLnByb3RvdHlwZS5zZXRQcmVsb2FkID0gZnVuY3Rpb24ocHJlbG9hZCkge1xuICB0aGlzLnNldChfb2xfbGF5ZXJfVGlsZVByb3BlcnR5Xy5QUkVMT0FELCBwcmVsb2FkKTtcbn07XG5cblxuLyoqXG4gKiBXaGV0aGVyIHdlIHVzZSBpbnRlcmltIHRpbGVzIG9uIGVycm9yLlxuICogQHJldHVybiB7Ym9vbGVhbn0gVXNlIGludGVyaW0gdGlsZXMgb24gZXJyb3IuXG4gKiBAb2JzZXJ2YWJsZVxuICogQGFwaVxuICovXG5fb2xfbGF5ZXJfVGlsZV8ucHJvdG90eXBlLmdldFVzZUludGVyaW1UaWxlc09uRXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIChcbiAgLyoqIEB0eXBlIHtib29sZWFufSAqLyB0aGlzLmdldChfb2xfbGF5ZXJfVGlsZVByb3BlcnR5Xy5VU0VfSU5URVJJTV9USUxFU19PTl9FUlJPUilcbiAgKTtcbn07XG5cblxuLyoqXG4gKiBTZXQgd2hldGhlciB3ZSB1c2UgaW50ZXJpbSB0aWxlcyBvbiBlcnJvci5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlSW50ZXJpbVRpbGVzT25FcnJvciBVc2UgaW50ZXJpbSB0aWxlcyBvbiBlcnJvci5cbiAqIEBvYnNlcnZhYmxlXG4gKiBAYXBpXG4gKi9cbl9vbF9sYXllcl9UaWxlXy5wcm90b3R5cGUuc2V0VXNlSW50ZXJpbVRpbGVzT25FcnJvciA9IGZ1bmN0aW9uKHVzZUludGVyaW1UaWxlc09uRXJyb3IpIHtcbiAgdGhpcy5zZXQoXG4gICAgICBfb2xfbGF5ZXJfVGlsZVByb3BlcnR5Xy5VU0VfSU5URVJJTV9USUxFU19PTl9FUlJPUiwgdXNlSW50ZXJpbVRpbGVzT25FcnJvcik7XG59O1xuZXhwb3J0IGRlZmF1bHQgX29sX2xheWVyX1RpbGVfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvbGF5ZXIvdGlsZS5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG52YXIgX29sX2xheWVyX1RpbGVQcm9wZXJ0eV8gPSB7XG4gIFBSRUxPQUQ6ICdwcmVsb2FkJyxcbiAgVVNFX0lOVEVSSU1fVElMRVNfT05fRVJST1I6ICd1c2VJbnRlcmltVGlsZXNPbkVycm9yJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgX29sX2xheWVyX1RpbGVQcm9wZXJ0eV87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9sYXllci90aWxlcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfb2xfIGZyb20gJy4uL2luZGV4LmpzJztcbmltcG9ydCBfb2xfc291cmNlX09TTV8gZnJvbSAnLi4vc291cmNlL29zbS5qcyc7XG5pbXBvcnQgX29sX3NvdXJjZV9YWVpfIGZyb20gJy4uL3NvdXJjZS94eXouanMnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIExheWVyIHNvdXJjZSBmb3IgdGhlIFN0YW1lbiB0aWxlIHNlcnZlci5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBleHRlbmRzIHtvbC5zb3VyY2UuWFlafVxuICogQHBhcmFtIHtvbHguc291cmNlLlN0YW1lbk9wdGlvbnN9IG9wdGlvbnMgU3RhbWVuIG9wdGlvbnMuXG4gKiBAYXBpXG4gKi9cbnZhciBfb2xfc291cmNlX1N0YW1lbl8gPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHZhciBpID0gb3B0aW9ucy5sYXllci5pbmRleE9mKCctJyk7XG4gIHZhciBwcm92aWRlciA9IGkgPT0gLTEgPyBvcHRpb25zLmxheWVyIDogb3B0aW9ucy5sYXllci5zbGljZSgwLCBpKTtcbiAgdmFyIHByb3ZpZGVyQ29uZmlnID0gX29sX3NvdXJjZV9TdGFtZW5fLlByb3ZpZGVyQ29uZmlnW3Byb3ZpZGVyXTtcblxuICB2YXIgbGF5ZXJDb25maWcgPSBfb2xfc291cmNlX1N0YW1lbl8uTGF5ZXJDb25maWdbb3B0aW9ucy5sYXllcl07XG5cbiAgdmFyIHVybCA9IG9wdGlvbnMudXJsICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLnVybCA6XG4gICAgJ2h0dHBzOi8vc3RhbWVuLXRpbGVzLXthLWR9LmEuc3NsLmZhc3RseS5uZXQvJyArIG9wdGlvbnMubGF5ZXIgK1xuICAgICAgJy97en0ve3h9L3t5fS4nICsgbGF5ZXJDb25maWcuZXh0ZW5zaW9uO1xuXG4gIF9vbF9zb3VyY2VfWFlaXy5jYWxsKHRoaXMsIHtcbiAgICBhdHRyaWJ1dGlvbnM6IF9vbF9zb3VyY2VfU3RhbWVuXy5BVFRSSUJVVElPTlMsXG4gICAgY2FjaGVTaXplOiBvcHRpb25zLmNhY2hlU2l6ZSxcbiAgICBjcm9zc09yaWdpbjogJ2Fub255bW91cycsXG4gICAgbWF4Wm9vbTogb3B0aW9ucy5tYXhab29tICE9IHVuZGVmaW5lZCA/IG9wdGlvbnMubWF4Wm9vbSA6IHByb3ZpZGVyQ29uZmlnLm1heFpvb20sXG4gICAgbWluWm9vbTogb3B0aW9ucy5taW5ab29tICE9IHVuZGVmaW5lZCA/IG9wdGlvbnMubWluWm9vbSA6IHByb3ZpZGVyQ29uZmlnLm1pblpvb20sXG4gICAgb3BhcXVlOiBsYXllckNvbmZpZy5vcGFxdWUsXG4gICAgcmVwcm9qZWN0aW9uRXJyb3JUaHJlc2hvbGQ6IG9wdGlvbnMucmVwcm9qZWN0aW9uRXJyb3JUaHJlc2hvbGQsXG4gICAgdGlsZUxvYWRGdW5jdGlvbjogb3B0aW9ucy50aWxlTG9hZEZ1bmN0aW9uLFxuICAgIHVybDogdXJsLFxuICAgIHdyYXBYOiBvcHRpb25zLndyYXBYXG4gIH0pO1xufTtcblxuX29sXy5pbmhlcml0cyhfb2xfc291cmNlX1N0YW1lbl8sIF9vbF9zb3VyY2VfWFlaXyk7XG5cblxuLyoqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtBcnJheS48c3RyaW5nPn1cbiAqL1xuX29sX3NvdXJjZV9TdGFtZW5fLkFUVFJJQlVUSU9OUyA9IFtcbiAgJ01hcCB0aWxlcyBieSA8YSBocmVmPVwiaHR0cHM6Ly9zdGFtZW4uY29tL1wiPlN0YW1lbiBEZXNpZ248L2E+LCAnICtcbiAgICAgICAgJ3VuZGVyIDxhIGhyZWY9XCJodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnkvMy4wL1wiPkNDIEJZJyArXG4gICAgICAgICcgMy4wPC9hPi4nLFxuICBfb2xfc291cmNlX09TTV8uQVRUUklCVVRJT05cbl07XG5cbi8qKlxuICogQHR5cGUge09iamVjdC48c3RyaW5nLCB7ZXh0ZW5zaW9uOiBzdHJpbmcsIG9wYXF1ZTogYm9vbGVhbn0+fVxuICovXG5fb2xfc291cmNlX1N0YW1lbl8uTGF5ZXJDb25maWcgPSB7XG4gICd0ZXJyYWluJzoge1xuICAgIGV4dGVuc2lvbjogJ2pwZycsXG4gICAgb3BhcXVlOiB0cnVlXG4gIH0sXG4gICd0ZXJyYWluLWJhY2tncm91bmQnOiB7XG4gICAgZXh0ZW5zaW9uOiAnanBnJyxcbiAgICBvcGFxdWU6IHRydWVcbiAgfSxcbiAgJ3RlcnJhaW4tbGFiZWxzJzoge1xuICAgIGV4dGVuc2lvbjogJ3BuZycsXG4gICAgb3BhcXVlOiBmYWxzZVxuICB9LFxuICAndGVycmFpbi1saW5lcyc6IHtcbiAgICBleHRlbnNpb246ICdwbmcnLFxuICAgIG9wYXF1ZTogZmFsc2VcbiAgfSxcbiAgJ3RvbmVyLWJhY2tncm91bmQnOiB7XG4gICAgZXh0ZW5zaW9uOiAncG5nJyxcbiAgICBvcGFxdWU6IHRydWVcbiAgfSxcbiAgJ3RvbmVyJzoge1xuICAgIGV4dGVuc2lvbjogJ3BuZycsXG4gICAgb3BhcXVlOiB0cnVlXG4gIH0sXG4gICd0b25lci1oeWJyaWQnOiB7XG4gICAgZXh0ZW5zaW9uOiAncG5nJyxcbiAgICBvcGFxdWU6IGZhbHNlXG4gIH0sXG4gICd0b25lci1sYWJlbHMnOiB7XG4gICAgZXh0ZW5zaW9uOiAncG5nJyxcbiAgICBvcGFxdWU6IGZhbHNlXG4gIH0sXG4gICd0b25lci1saW5lcyc6IHtcbiAgICBleHRlbnNpb246ICdwbmcnLFxuICAgIG9wYXF1ZTogZmFsc2VcbiAgfSxcbiAgJ3RvbmVyLWxpdGUnOiB7XG4gICAgZXh0ZW5zaW9uOiAncG5nJyxcbiAgICBvcGFxdWU6IHRydWVcbiAgfSxcbiAgJ3dhdGVyY29sb3InOiB7XG4gICAgZXh0ZW5zaW9uOiAnanBnJyxcbiAgICBvcGFxdWU6IHRydWVcbiAgfVxufTtcblxuLyoqXG4gKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsIHttaW5ab29tOiBudW1iZXIsIG1heFpvb206IG51bWJlcn0+fVxuICovXG5fb2xfc291cmNlX1N0YW1lbl8uUHJvdmlkZXJDb25maWcgPSB7XG4gICd0ZXJyYWluJzoge1xuICAgIG1pblpvb206IDQsXG4gICAgbWF4Wm9vbTogMThcbiAgfSxcbiAgJ3RvbmVyJzoge1xuICAgIG1pblpvb206IDAsXG4gICAgbWF4Wm9vbTogMjBcbiAgfSxcbiAgJ3dhdGVyY29sb3InOiB7XG4gICAgbWluWm9vbTogMSxcbiAgICBtYXhab29tOiAxNlxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgX29sX3NvdXJjZV9TdGFtZW5fO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvc291cmNlL3N0YW1lbi5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF9vbF8gZnJvbSAnLi4vaW5kZXguanMnO1xuaW1wb3J0IF9vbF9zb3VyY2VfWFlaXyBmcm9tICcuLi9zb3VyY2UveHl6LmpzJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBMYXllciBzb3VyY2UgZm9yIHRoZSBPcGVuU3RyZWV0TWFwIHRpbGUgc2VydmVyLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVuZHMge29sLnNvdXJjZS5YWVp9XG4gKiBAcGFyYW0ge29seC5zb3VyY2UuT1NNT3B0aW9ucz19IG9wdF9vcHRpb25zIE9wZW4gU3RyZWV0IE1hcCBvcHRpb25zLlxuICogQGFwaVxuICovXG52YXIgX29sX3NvdXJjZV9PU01fID0gZnVuY3Rpb24ob3B0X29wdGlvbnMpIHtcblxuICB2YXIgb3B0aW9ucyA9IG9wdF9vcHRpb25zIHx8IHt9O1xuXG4gIHZhciBhdHRyaWJ1dGlvbnM7XG4gIGlmIChvcHRpb25zLmF0dHJpYnV0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgYXR0cmlidXRpb25zID0gb3B0aW9ucy5hdHRyaWJ1dGlvbnM7XG4gIH0gZWxzZSB7XG4gICAgYXR0cmlidXRpb25zID0gW19vbF9zb3VyY2VfT1NNXy5BVFRSSUJVVElPTl07XG4gIH1cblxuICB2YXIgY3Jvc3NPcmlnaW4gPSBvcHRpb25zLmNyb3NzT3JpZ2luICE9PSB1bmRlZmluZWQgP1xuICAgIG9wdGlvbnMuY3Jvc3NPcmlnaW4gOiAnYW5vbnltb3VzJztcblxuICB2YXIgdXJsID0gb3B0aW9ucy51cmwgIT09IHVuZGVmaW5lZCA/XG4gICAgb3B0aW9ucy51cmwgOiAnaHR0cHM6Ly97YS1jfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZyc7XG5cbiAgX29sX3NvdXJjZV9YWVpfLmNhbGwodGhpcywge1xuICAgIGF0dHJpYnV0aW9uczogYXR0cmlidXRpb25zLFxuICAgIGNhY2hlU2l6ZTogb3B0aW9ucy5jYWNoZVNpemUsXG4gICAgY3Jvc3NPcmlnaW46IGNyb3NzT3JpZ2luLFxuICAgIG9wYXF1ZTogb3B0aW9ucy5vcGFxdWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMub3BhcXVlIDogdHJ1ZSxcbiAgICBtYXhab29tOiBvcHRpb25zLm1heFpvb20gIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubWF4Wm9vbSA6IDE5LFxuICAgIHJlcHJvamVjdGlvbkVycm9yVGhyZXNob2xkOiBvcHRpb25zLnJlcHJvamVjdGlvbkVycm9yVGhyZXNob2xkLFxuICAgIHRpbGVMb2FkRnVuY3Rpb246IG9wdGlvbnMudGlsZUxvYWRGdW5jdGlvbixcbiAgICB1cmw6IHVybCxcbiAgICB3cmFwWDogb3B0aW9ucy53cmFwWFxuICB9KTtcblxufTtcblxuX29sXy5pbmhlcml0cyhfb2xfc291cmNlX09TTV8sIF9vbF9zb3VyY2VfWFlaXyk7XG5cblxuLyoqXG4gKiBUaGUgYXR0cmlidXRpb24gY29udGFpbmluZyBhIGxpbmsgdG8gdGhlIE9wZW5TdHJlZXRNYXAgQ29weXJpZ2h0IGFuZCBMaWNlbnNlXG4gKiBwYWdlLlxuICogQGNvbnN0XG4gKiBAdHlwZSB7c3RyaW5nfVxuICogQGFwaVxuICovXG5fb2xfc291cmNlX09TTV8uQVRUUklCVVRJT04gPSAnJmNvcHk7ICcgK1xuICAgICAgJzxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiAnICtcbiAgICAgICdjb250cmlidXRvcnMuJztcbmV4cG9ydCBkZWZhdWx0IF9vbF9zb3VyY2VfT1NNXztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29sL3NvdXJjZS9vc20uanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfb2xfIGZyb20gJy4uL2luZGV4LmpzJztcbmltcG9ydCBfb2xfSW1hZ2VUaWxlXyBmcm9tICcuLi9pbWFnZXRpbGUuanMnO1xuaW1wb3J0IF9vbF9UaWxlQ2FjaGVfIGZyb20gJy4uL3RpbGVjYWNoZS5qcyc7XG5pbXBvcnQgX29sX1RpbGVTdGF0ZV8gZnJvbSAnLi4vdGlsZXN0YXRlLmpzJztcbmltcG9ydCBfb2xfZXZlbnRzXyBmcm9tICcuLi9ldmVudHMuanMnO1xuaW1wb3J0IF9vbF9ldmVudHNfRXZlbnRUeXBlXyBmcm9tICcuLi9ldmVudHMvZXZlbnR0eXBlLmpzJztcbmltcG9ydCBfb2xfcHJval8gZnJvbSAnLi4vcHJvai5qcyc7XG5pbXBvcnQgX29sX3JlcHJval9UaWxlXyBmcm9tICcuLi9yZXByb2ovdGlsZS5qcyc7XG5pbXBvcnQgX29sX3NvdXJjZV9VcmxUaWxlXyBmcm9tICcuLi9zb3VyY2UvdXJsdGlsZS5qcyc7XG5pbXBvcnQgX29sX3RpbGVjb29yZF8gZnJvbSAnLi4vdGlsZWNvb3JkLmpzJztcbmltcG9ydCBfb2xfdGlsZWdyaWRfIGZyb20gJy4uL3RpbGVncmlkLmpzJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBCYXNlIGNsYXNzIGZvciBzb3VyY2VzIHByb3ZpZGluZyBpbWFnZXMgZGl2aWRlZCBpbnRvIGEgdGlsZSBncmlkLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQGZpcmVzIG9sLnNvdXJjZS5UaWxlLkV2ZW50XG4gKiBAZXh0ZW5kcyB7b2wuc291cmNlLlVybFRpbGV9XG4gKiBAcGFyYW0ge29seC5zb3VyY2UuVGlsZUltYWdlT3B0aW9uc30gb3B0aW9ucyBJbWFnZSB0aWxlIG9wdGlvbnMuXG4gKiBAYXBpXG4gKi9cbnZhciBfb2xfc291cmNlX1RpbGVJbWFnZV8gPSBmdW5jdGlvbihvcHRpb25zKSB7XG5cbiAgX29sX3NvdXJjZV9VcmxUaWxlXy5jYWxsKHRoaXMsIHtcbiAgICBhdHRyaWJ1dGlvbnM6IG9wdGlvbnMuYXR0cmlidXRpb25zLFxuICAgIGNhY2hlU2l6ZTogb3B0aW9ucy5jYWNoZVNpemUsXG4gICAgZXh0ZW50OiBvcHRpb25zLmV4dGVudCxcbiAgICBsb2dvOiBvcHRpb25zLmxvZ28sXG4gICAgb3BhcXVlOiBvcHRpb25zLm9wYXF1ZSxcbiAgICBwcm9qZWN0aW9uOiBvcHRpb25zLnByb2plY3Rpb24sXG4gICAgc3RhdGU6IG9wdGlvbnMuc3RhdGUsXG4gICAgdGlsZUdyaWQ6IG9wdGlvbnMudGlsZUdyaWQsXG4gICAgdGlsZUxvYWRGdW5jdGlvbjogb3B0aW9ucy50aWxlTG9hZEZ1bmN0aW9uID9cbiAgICAgIG9wdGlvbnMudGlsZUxvYWRGdW5jdGlvbiA6IF9vbF9zb3VyY2VfVGlsZUltYWdlXy5kZWZhdWx0VGlsZUxvYWRGdW5jdGlvbixcbiAgICB0aWxlUGl4ZWxSYXRpbzogb3B0aW9ucy50aWxlUGl4ZWxSYXRpbyxcbiAgICB0aWxlVXJsRnVuY3Rpb246IG9wdGlvbnMudGlsZVVybEZ1bmN0aW9uLFxuICAgIHVybDogb3B0aW9ucy51cmwsXG4gICAgdXJsczogb3B0aW9ucy51cmxzLFxuICAgIHdyYXBYOiBvcHRpb25zLndyYXBYLFxuICAgIHRyYW5zaXRpb246IG9wdGlvbnMudHJhbnNpdGlvblxuICB9KTtcblxuICAvKipcbiAgICogQHByb3RlY3RlZFxuICAgKiBAdHlwZSB7P3N0cmluZ31cbiAgICovXG4gIHRoaXMuY3Jvc3NPcmlnaW4gPVxuICAgICAgb3B0aW9ucy5jcm9zc09yaWdpbiAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jcm9zc09yaWdpbiA6IG51bGw7XG5cbiAgLyoqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHR5cGUge2Z1bmN0aW9uKG5ldzogb2wuSW1hZ2VUaWxlLCBvbC5UaWxlQ29vcmQsIG9sLlRpbGVTdGF0ZSwgc3RyaW5nLFxuICAgKiAgICAgICAgP3N0cmluZywgb2wuVGlsZUxvYWRGdW5jdGlvblR5cGUsIG9seC5UaWxlT3B0aW9ucz0pfVxuICAgKi9cbiAgdGhpcy50aWxlQ2xhc3MgPSBvcHRpb25zLnRpbGVDbGFzcyAhPT0gdW5kZWZpbmVkID9cbiAgICBvcHRpb25zLnRpbGVDbGFzcyA6IF9vbF9JbWFnZVRpbGVfO1xuXG4gIC8qKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgb2wuVGlsZUNhY2hlPn1cbiAgICovXG4gIHRoaXMudGlsZUNhY2hlRm9yUHJvamVjdGlvbiA9IHt9O1xuXG4gIC8qKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgb2wudGlsZWdyaWQuVGlsZUdyaWQ+fVxuICAgKi9cbiAgdGhpcy50aWxlR3JpZEZvclByb2plY3Rpb24gPSB7fTtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge251bWJlcnx1bmRlZmluZWR9XG4gICAqL1xuICB0aGlzLnJlcHJvamVjdGlvbkVycm9yVGhyZXNob2xkXyA9IG9wdGlvbnMucmVwcm9qZWN0aW9uRXJyb3JUaHJlc2hvbGQ7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgdGhpcy5yZW5kZXJSZXByb2plY3Rpb25FZGdlc18gPSBmYWxzZTtcbn07XG5cbl9vbF8uaW5oZXJpdHMoX29sX3NvdXJjZV9UaWxlSW1hZ2VfLCBfb2xfc291cmNlX1VybFRpbGVfKTtcblxuXG4vKipcbiAqIEBpbmhlcml0RG9jXG4gKi9cbl9vbF9zb3VyY2VfVGlsZUltYWdlXy5wcm90b3R5cGUuY2FuRXhwaXJlQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCFfb2xfLkVOQUJMRV9SQVNURVJfUkVQUk9KRUNUSU9OKSB7XG4gICAgcmV0dXJuIF9vbF9zb3VyY2VfVXJsVGlsZV8ucHJvdG90eXBlLmNhbkV4cGlyZUNhY2hlLmNhbGwodGhpcyk7XG4gIH1cbiAgaWYgKHRoaXMudGlsZUNhY2hlLmNhbkV4cGlyZUNhY2hlKCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy50aWxlQ2FjaGVGb3JQcm9qZWN0aW9uKSB7XG4gICAgICBpZiAodGhpcy50aWxlQ2FjaGVGb3JQcm9qZWN0aW9uW2tleV0uY2FuRXhwaXJlQ2FjaGUoKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuXG4vKipcbiAqIEBpbmhlcml0RG9jXG4gKi9cbl9vbF9zb3VyY2VfVGlsZUltYWdlXy5wcm90b3R5cGUuZXhwaXJlQ2FjaGUgPSBmdW5jdGlvbihwcm9qZWN0aW9uLCB1c2VkVGlsZXMpIHtcbiAgaWYgKCFfb2xfLkVOQUJMRV9SQVNURVJfUkVQUk9KRUNUSU9OKSB7XG4gICAgX29sX3NvdXJjZV9VcmxUaWxlXy5wcm90b3R5cGUuZXhwaXJlQ2FjaGUuY2FsbCh0aGlzLCBwcm9qZWN0aW9uLCB1c2VkVGlsZXMpO1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgdXNlZFRpbGVDYWNoZSA9IHRoaXMuZ2V0VGlsZUNhY2hlRm9yUHJvamVjdGlvbihwcm9qZWN0aW9uKTtcblxuICB0aGlzLnRpbGVDYWNoZS5leHBpcmVDYWNoZSh0aGlzLnRpbGVDYWNoZSA9PSB1c2VkVGlsZUNhY2hlID8gdXNlZFRpbGVzIDoge30pO1xuICBmb3IgKHZhciBpZCBpbiB0aGlzLnRpbGVDYWNoZUZvclByb2plY3Rpb24pIHtcbiAgICB2YXIgdGlsZUNhY2hlID0gdGhpcy50aWxlQ2FjaGVGb3JQcm9qZWN0aW9uW2lkXTtcbiAgICB0aWxlQ2FjaGUuZXhwaXJlQ2FjaGUodGlsZUNhY2hlID09IHVzZWRUaWxlQ2FjaGUgPyB1c2VkVGlsZXMgOiB7fSk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBAaW5oZXJpdERvY1xuICovXG5fb2xfc291cmNlX1RpbGVJbWFnZV8ucHJvdG90eXBlLmdldEd1dHRlciA9IGZ1bmN0aW9uKHByb2plY3Rpb24pIHtcbiAgaWYgKF9vbF8uRU5BQkxFX1JBU1RFUl9SRVBST0pFQ1RJT04gJiZcbiAgICAgIHRoaXMuZ2V0UHJvamVjdGlvbigpICYmIHByb2plY3Rpb24gJiZcbiAgICAgICFfb2xfcHJval8uZXF1aXZhbGVudCh0aGlzLmdldFByb2plY3Rpb24oKSwgcHJvamVjdGlvbikpIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGhpcy5nZXRHdXR0ZXJJbnRlcm5hbCgpO1xuICB9XG59O1xuXG5cbi8qKlxuICogQHByb3RlY3RlZFxuICogQHJldHVybiB7bnVtYmVyfSBHdXR0ZXIuXG4gKi9cbl9vbF9zb3VyY2VfVGlsZUltYWdlXy5wcm90b3R5cGUuZ2V0R3V0dGVySW50ZXJuYWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIDA7XG59O1xuXG5cbi8qKlxuICogQGluaGVyaXREb2NcbiAqL1xuX29sX3NvdXJjZV9UaWxlSW1hZ2VfLnByb3RvdHlwZS5nZXRPcGFxdWUgPSBmdW5jdGlvbihwcm9qZWN0aW9uKSB7XG4gIGlmIChfb2xfLkVOQUJMRV9SQVNURVJfUkVQUk9KRUNUSU9OICYmXG4gICAgICB0aGlzLmdldFByb2plY3Rpb24oKSAmJiBwcm9qZWN0aW9uICYmXG4gICAgICAhX29sX3Byb2pfLmVxdWl2YWxlbnQodGhpcy5nZXRQcm9qZWN0aW9uKCksIHByb2plY3Rpb24pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBfb2xfc291cmNlX1VybFRpbGVfLnByb3RvdHlwZS5nZXRPcGFxdWUuY2FsbCh0aGlzLCBwcm9qZWN0aW9uKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIEBpbmhlcml0RG9jXG4gKi9cbl9vbF9zb3VyY2VfVGlsZUltYWdlXy5wcm90b3R5cGUuZ2V0VGlsZUdyaWRGb3JQcm9qZWN0aW9uID0gZnVuY3Rpb24ocHJvamVjdGlvbikge1xuICBpZiAoIV9vbF8uRU5BQkxFX1JBU1RFUl9SRVBST0pFQ1RJT04pIHtcbiAgICByZXR1cm4gX29sX3NvdXJjZV9VcmxUaWxlXy5wcm90b3R5cGUuZ2V0VGlsZUdyaWRGb3JQcm9qZWN0aW9uLmNhbGwodGhpcywgcHJvamVjdGlvbik7XG4gIH1cbiAgdmFyIHRoaXNQcm9qID0gdGhpcy5nZXRQcm9qZWN0aW9uKCk7XG4gIGlmICh0aGlzLnRpbGVHcmlkICYmXG4gICAgICAoIXRoaXNQcm9qIHx8IF9vbF9wcm9qXy5lcXVpdmFsZW50KHRoaXNQcm9qLCBwcm9qZWN0aW9uKSkpIHtcbiAgICByZXR1cm4gdGhpcy50aWxlR3JpZDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcHJvaktleSA9IF9vbF8uZ2V0VWlkKHByb2plY3Rpb24pLnRvU3RyaW5nKCk7XG4gICAgaWYgKCEocHJvaktleSBpbiB0aGlzLnRpbGVHcmlkRm9yUHJvamVjdGlvbikpIHtcbiAgICAgIHRoaXMudGlsZUdyaWRGb3JQcm9qZWN0aW9uW3Byb2pLZXldID1cbiAgICAgICAgICBfb2xfdGlsZWdyaWRfLmdldEZvclByb2plY3Rpb24ocHJvamVjdGlvbik7XG4gICAgfVxuICAgIHJldHVybiAvKiogQHR5cGUgeyFvbC50aWxlZ3JpZC5UaWxlR3JpZH0gKi8gKHRoaXMudGlsZUdyaWRGb3JQcm9qZWN0aW9uW3Byb2pLZXldKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIEBpbmhlcml0RG9jXG4gKi9cbl9vbF9zb3VyY2VfVGlsZUltYWdlXy5wcm90b3R5cGUuZ2V0VGlsZUNhY2hlRm9yUHJvamVjdGlvbiA9IGZ1bmN0aW9uKHByb2plY3Rpb24pIHtcbiAgaWYgKCFfb2xfLkVOQUJMRV9SQVNURVJfUkVQUk9KRUNUSU9OKSB7XG4gICAgcmV0dXJuIF9vbF9zb3VyY2VfVXJsVGlsZV8ucHJvdG90eXBlLmdldFRpbGVDYWNoZUZvclByb2plY3Rpb24uY2FsbCh0aGlzLCBwcm9qZWN0aW9uKTtcbiAgfVxuICB2YXIgdGhpc1Byb2ogPSB0aGlzLmdldFByb2plY3Rpb24oKTtcbiAgaWYgKCF0aGlzUHJvaiB8fCBfb2xfcHJval8uZXF1aXZhbGVudCh0aGlzUHJvaiwgcHJvamVjdGlvbikpIHtcbiAgICByZXR1cm4gdGhpcy50aWxlQ2FjaGU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHByb2pLZXkgPSBfb2xfLmdldFVpZChwcm9qZWN0aW9uKS50b1N0cmluZygpO1xuICAgIGlmICghKHByb2pLZXkgaW4gdGhpcy50aWxlQ2FjaGVGb3JQcm9qZWN0aW9uKSkge1xuICAgICAgdGhpcy50aWxlQ2FjaGVGb3JQcm9qZWN0aW9uW3Byb2pLZXldID0gbmV3IF9vbF9UaWxlQ2FjaGVfKHRoaXMudGlsZUNhY2hlLmhpZ2hXYXRlck1hcmspO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy50aWxlQ2FjaGVGb3JQcm9qZWN0aW9uW3Byb2pLZXldO1xuICB9XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHogVGlsZSBjb29yZGluYXRlIHouXG4gKiBAcGFyYW0ge251bWJlcn0geCBUaWxlIGNvb3JkaW5hdGUgeC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB5IFRpbGUgY29vcmRpbmF0ZSB5LlxuICogQHBhcmFtIHtudW1iZXJ9IHBpeGVsUmF0aW8gUGl4ZWwgcmF0aW8uXG4gKiBAcGFyYW0ge29sLnByb2ouUHJvamVjdGlvbn0gcHJvamVjdGlvbiBQcm9qZWN0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IHNldCBvbiB0aGUgdGlsZS5cbiAqIEByZXR1cm4geyFvbC5UaWxlfSBUaWxlLlxuICogQHByaXZhdGVcbiAqL1xuX29sX3NvdXJjZV9UaWxlSW1hZ2VfLnByb3RvdHlwZS5jcmVhdGVUaWxlXyA9IGZ1bmN0aW9uKHosIHgsIHksIHBpeGVsUmF0aW8sIHByb2plY3Rpb24sIGtleSkge1xuICB2YXIgdGlsZUNvb3JkID0gW3osIHgsIHldO1xuICB2YXIgdXJsVGlsZUNvb3JkID0gdGhpcy5nZXRUaWxlQ29vcmRGb3JUaWxlVXJsRnVuY3Rpb24oXG4gICAgICB0aWxlQ29vcmQsIHByb2plY3Rpb24pO1xuICB2YXIgdGlsZVVybCA9IHVybFRpbGVDb29yZCA/XG4gICAgdGhpcy50aWxlVXJsRnVuY3Rpb24odXJsVGlsZUNvb3JkLCBwaXhlbFJhdGlvLCBwcm9qZWN0aW9uKSA6IHVuZGVmaW5lZDtcbiAgdmFyIHRpbGUgPSBuZXcgdGhpcy50aWxlQ2xhc3MoXG4gICAgICB0aWxlQ29vcmQsXG4gICAgICB0aWxlVXJsICE9PSB1bmRlZmluZWQgPyBfb2xfVGlsZVN0YXRlXy5JRExFIDogX29sX1RpbGVTdGF0ZV8uRU1QVFksXG4gICAgICB0aWxlVXJsICE9PSB1bmRlZmluZWQgPyB0aWxlVXJsIDogJycsXG4gICAgICB0aGlzLmNyb3NzT3JpZ2luLFxuICAgICAgdGhpcy50aWxlTG9hZEZ1bmN0aW9uLFxuICAgICAgdGhpcy50aWxlT3B0aW9ucyk7XG4gIHRpbGUua2V5ID0ga2V5O1xuICBfb2xfZXZlbnRzXy5saXN0ZW4odGlsZSwgX29sX2V2ZW50c19FdmVudFR5cGVfLkNIQU5HRSxcbiAgICAgIHRoaXMuaGFuZGxlVGlsZUNoYW5nZSwgdGhpcyk7XG4gIHJldHVybiB0aWxlO1xufTtcblxuXG4vKipcbiAqIEBpbmhlcml0RG9jXG4gKi9cbl9vbF9zb3VyY2VfVGlsZUltYWdlXy5wcm90b3R5cGUuZ2V0VGlsZSA9IGZ1bmN0aW9uKHosIHgsIHksIHBpeGVsUmF0aW8sIHByb2plY3Rpb24pIHtcbiAgdmFyIHNvdXJjZVByb2plY3Rpb24gPSAvKiogQHR5cGUgeyFvbC5wcm9qLlByb2plY3Rpb259ICovICh0aGlzLmdldFByb2plY3Rpb24oKSk7XG4gIGlmICghX29sXy5FTkFCTEVfUkFTVEVSX1JFUFJPSkVDVElPTiB8fFxuICAgICAgIXNvdXJjZVByb2plY3Rpb24gfHwgIXByb2plY3Rpb24gfHxcbiAgICAgIF9vbF9wcm9qXy5lcXVpdmFsZW50KHNvdXJjZVByb2plY3Rpb24sIHByb2plY3Rpb24pKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGlsZUludGVybmFsKHosIHgsIHksIHBpeGVsUmF0aW8sIHNvdXJjZVByb2plY3Rpb24gfHwgcHJvamVjdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNhY2hlID0gdGhpcy5nZXRUaWxlQ2FjaGVGb3JQcm9qZWN0aW9uKHByb2plY3Rpb24pO1xuICAgIHZhciB0aWxlQ29vcmQgPSBbeiwgeCwgeV07XG4gICAgdmFyIHRpbGU7XG4gICAgdmFyIHRpbGVDb29yZEtleSA9IF9vbF90aWxlY29vcmRfLmdldEtleSh0aWxlQ29vcmQpO1xuICAgIGlmIChjYWNoZS5jb250YWluc0tleSh0aWxlQ29vcmRLZXkpKSB7XG4gICAgICB0aWxlID0gLyoqIEB0eXBlIHshb2wuVGlsZX0gKi8gKGNhY2hlLmdldCh0aWxlQ29vcmRLZXkpKTtcbiAgICB9XG4gICAgdmFyIGtleSA9IHRoaXMuZ2V0S2V5KCk7XG4gICAgaWYgKHRpbGUgJiYgdGlsZS5rZXkgPT0ga2V5KSB7XG4gICAgICByZXR1cm4gdGlsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHNvdXJjZVRpbGVHcmlkID0gdGhpcy5nZXRUaWxlR3JpZEZvclByb2plY3Rpb24oc291cmNlUHJvamVjdGlvbik7XG4gICAgICB2YXIgdGFyZ2V0VGlsZUdyaWQgPSB0aGlzLmdldFRpbGVHcmlkRm9yUHJvamVjdGlvbihwcm9qZWN0aW9uKTtcbiAgICAgIHZhciB3cmFwcGVkVGlsZUNvb3JkID1cbiAgICAgICAgICB0aGlzLmdldFRpbGVDb29yZEZvclRpbGVVcmxGdW5jdGlvbih0aWxlQ29vcmQsIHByb2plY3Rpb24pO1xuICAgICAgdmFyIG5ld1RpbGUgPSBuZXcgX29sX3JlcHJval9UaWxlXyhcbiAgICAgICAgICBzb3VyY2VQcm9qZWN0aW9uLCBzb3VyY2VUaWxlR3JpZCxcbiAgICAgICAgICBwcm9qZWN0aW9uLCB0YXJnZXRUaWxlR3JpZCxcbiAgICAgICAgICB0aWxlQ29vcmQsIHdyYXBwZWRUaWxlQ29vcmQsIHRoaXMuZ2V0VGlsZVBpeGVsUmF0aW8ocGl4ZWxSYXRpbyksXG4gICAgICAgICAgdGhpcy5nZXRHdXR0ZXJJbnRlcm5hbCgpLFxuICAgICAgICAgIGZ1bmN0aW9uKHosIHgsIHksIHBpeGVsUmF0aW8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFRpbGVJbnRlcm5hbCh6LCB4LCB5LCBwaXhlbFJhdGlvLCBzb3VyY2VQcm9qZWN0aW9uKTtcbiAgICAgICAgICB9LmJpbmQodGhpcyksIHRoaXMucmVwcm9qZWN0aW9uRXJyb3JUaHJlc2hvbGRfLFxuICAgICAgICAgIHRoaXMucmVuZGVyUmVwcm9qZWN0aW9uRWRnZXNfKTtcbiAgICAgIG5ld1RpbGUua2V5ID0ga2V5O1xuXG4gICAgICBpZiAodGlsZSkge1xuICAgICAgICBuZXdUaWxlLmludGVyaW1UaWxlID0gdGlsZTtcbiAgICAgICAgbmV3VGlsZS5yZWZyZXNoSW50ZXJpbUNoYWluKCk7XG4gICAgICAgIGNhY2hlLnJlcGxhY2UodGlsZUNvb3JkS2V5LCBuZXdUaWxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhY2hlLnNldCh0aWxlQ29vcmRLZXksIG5ld1RpbGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld1RpbGU7XG4gICAgfVxuICB9XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHogVGlsZSBjb29yZGluYXRlIHouXG4gKiBAcGFyYW0ge251bWJlcn0geCBUaWxlIGNvb3JkaW5hdGUgeC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB5IFRpbGUgY29vcmRpbmF0ZSB5LlxuICogQHBhcmFtIHtudW1iZXJ9IHBpeGVsUmF0aW8gUGl4ZWwgcmF0aW8uXG4gKiBAcGFyYW0geyFvbC5wcm9qLlByb2plY3Rpb259IHByb2plY3Rpb24gUHJvamVjdGlvbi5cbiAqIEByZXR1cm4geyFvbC5UaWxlfSBUaWxlLlxuICogQHByb3RlY3RlZFxuICovXG5fb2xfc291cmNlX1RpbGVJbWFnZV8ucHJvdG90eXBlLmdldFRpbGVJbnRlcm5hbCA9IGZ1bmN0aW9uKHosIHgsIHksIHBpeGVsUmF0aW8sIHByb2plY3Rpb24pIHtcbiAgdmFyIHRpbGUgPSBudWxsO1xuICB2YXIgdGlsZUNvb3JkS2V5ID0gX29sX3RpbGVjb29yZF8uZ2V0S2V5WlhZKHosIHgsIHkpO1xuICB2YXIga2V5ID0gdGhpcy5nZXRLZXkoKTtcbiAgaWYgKCF0aGlzLnRpbGVDYWNoZS5jb250YWluc0tleSh0aWxlQ29vcmRLZXkpKSB7XG4gICAgdGlsZSA9IHRoaXMuY3JlYXRlVGlsZV8oeiwgeCwgeSwgcGl4ZWxSYXRpbywgcHJvamVjdGlvbiwga2V5KTtcbiAgICB0aGlzLnRpbGVDYWNoZS5zZXQodGlsZUNvb3JkS2V5LCB0aWxlKTtcbiAgfSBlbHNlIHtcbiAgICB0aWxlID0gdGhpcy50aWxlQ2FjaGUuZ2V0KHRpbGVDb29yZEtleSk7XG4gICAgaWYgKHRpbGUua2V5ICE9IGtleSkge1xuICAgICAgLy8gVGhlIHNvdXJjZSdzIHBhcmFtcyBjaGFuZ2VkLiBJZiB0aGUgdGlsZSBoYXMgYW4gaW50ZXJpbSB0aWxlIGFuZCBpZiB3ZVxuICAgICAgLy8gY2FuIHVzZSBpdCB0aGVuIHdlIHVzZSBpdC4gT3RoZXJ3aXNlIHdlIGNyZWF0ZSBhIG5ldyB0aWxlLiAgSW4gYm90aFxuICAgICAgLy8gY2FzZXMgd2UgYXR0ZW1wdCB0byBhc3NpZ24gYW4gaW50ZXJpbSB0aWxlIHRvIHRoZSBuZXcgdGlsZS5cbiAgICAgIHZhciBpbnRlcmltVGlsZSA9IHRpbGU7XG4gICAgICB0aWxlID0gdGhpcy5jcmVhdGVUaWxlXyh6LCB4LCB5LCBwaXhlbFJhdGlvLCBwcm9qZWN0aW9uLCBrZXkpO1xuXG4gICAgICAvL21ha2UgdGhlIG5ldyB0aWxlIHRoZSBoZWFkIG9mIHRoZSBsaXN0LFxuICAgICAgaWYgKGludGVyaW1UaWxlLmdldFN0YXRlKCkgPT0gX29sX1RpbGVTdGF0ZV8uSURMRSkge1xuICAgICAgICAvL3RoZSBvbGQgdGlsZSBoYXNuJ3QgYmVndW4gbG9hZGluZyB5ZXQsIGFuZCBpcyBub3cgb3V0ZGF0ZWQsIHNvIHdlIGNhbiBzaW1wbHkgZGlzY2FyZCBpdFxuICAgICAgICB0aWxlLmludGVyaW1UaWxlID0gaW50ZXJpbVRpbGUuaW50ZXJpbVRpbGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aWxlLmludGVyaW1UaWxlID0gaW50ZXJpbVRpbGU7XG4gICAgICB9XG4gICAgICB0aWxlLnJlZnJlc2hJbnRlcmltQ2hhaW4oKTtcbiAgICAgIHRoaXMudGlsZUNhY2hlLnJlcGxhY2UodGlsZUNvb3JkS2V5LCB0aWxlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRpbGU7XG59O1xuXG5cbi8qKlxuICogU2V0cyB3aGV0aGVyIHRvIHJlbmRlciByZXByb2plY3Rpb24gZWRnZXMgb3Igbm90ICh1c3VhbGx5IGZvciBkZWJ1Z2dpbmcpLlxuICogQHBhcmFtIHtib29sZWFufSByZW5kZXIgUmVuZGVyIHRoZSBlZGdlcy5cbiAqIEBhcGlcbiAqL1xuX29sX3NvdXJjZV9UaWxlSW1hZ2VfLnByb3RvdHlwZS5zZXRSZW5kZXJSZXByb2plY3Rpb25FZGdlcyA9IGZ1bmN0aW9uKHJlbmRlcikge1xuICBpZiAoIV9vbF8uRU5BQkxFX1JBU1RFUl9SRVBST0pFQ1RJT04gfHxcbiAgICAgIHRoaXMucmVuZGVyUmVwcm9qZWN0aW9uRWRnZXNfID09IHJlbmRlcikge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnJlbmRlclJlcHJvamVjdGlvbkVkZ2VzXyA9IHJlbmRlcjtcbiAgZm9yICh2YXIgaWQgaW4gdGhpcy50aWxlQ2FjaGVGb3JQcm9qZWN0aW9uKSB7XG4gICAgdGhpcy50aWxlQ2FjaGVGb3JQcm9qZWN0aW9uW2lkXS5jbGVhcigpO1xuICB9XG4gIHRoaXMuY2hhbmdlZCgpO1xufTtcblxuXG4vKipcbiAqIFNldHMgdGhlIHRpbGUgZ3JpZCB0byB1c2Ugd2hlbiByZXByb2plY3RpbmcgdGhlIHRpbGVzIHRvIHRoZSBnaXZlblxuICogcHJvamVjdGlvbiBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRpbGUgZ3JpZCBmb3IgdGhlIHByb2plY3Rpb24uXG4gKlxuICogVGhpcyBjYW4gYmUgdXNlZnVsIHdoZW4gdGhlIGRlZmF1bHQgdGlsZSBncmlkIGNhbm5vdCBiZSBjcmVhdGVkXG4gKiAoZS5nLiBwcm9qZWN0aW9uIGhhcyBubyBleHRlbnQgZGVmaW5lZCkgb3JcbiAqIGZvciBvcHRpbWl6YXRpb24gcmVhc29ucyAoY3VzdG9tIHRpbGUgc2l6ZSwgcmVzb2x1dGlvbnMsIC4uLikuXG4gKlxuICogQHBhcmFtIHtvbC5Qcm9qZWN0aW9uTGlrZX0gcHJvamVjdGlvbiBQcm9qZWN0aW9uLlxuICogQHBhcmFtIHtvbC50aWxlZ3JpZC5UaWxlR3JpZH0gdGlsZWdyaWQgVGlsZSBncmlkIHRvIHVzZSBmb3IgdGhlIHByb2plY3Rpb24uXG4gKiBAYXBpXG4gKi9cbl9vbF9zb3VyY2VfVGlsZUltYWdlXy5wcm90b3R5cGUuc2V0VGlsZUdyaWRGb3JQcm9qZWN0aW9uID0gZnVuY3Rpb24ocHJvamVjdGlvbiwgdGlsZWdyaWQpIHtcbiAgaWYgKF9vbF8uRU5BQkxFX1JBU1RFUl9SRVBST0pFQ1RJT04pIHtcbiAgICB2YXIgcHJvaiA9IF9vbF9wcm9qXy5nZXQocHJvamVjdGlvbik7XG4gICAgaWYgKHByb2opIHtcbiAgICAgIHZhciBwcm9qS2V5ID0gX29sXy5nZXRVaWQocHJvaikudG9TdHJpbmcoKTtcbiAgICAgIGlmICghKHByb2pLZXkgaW4gdGhpcy50aWxlR3JpZEZvclByb2plY3Rpb24pKSB7XG4gICAgICAgIHRoaXMudGlsZUdyaWRGb3JQcm9qZWN0aW9uW3Byb2pLZXldID0gdGlsZWdyaWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtvbC5JbWFnZVRpbGV9IGltYWdlVGlsZSBJbWFnZSB0aWxlLlxuICogQHBhcmFtIHtzdHJpbmd9IHNyYyBTb3VyY2UuXG4gKi9cbl9vbF9zb3VyY2VfVGlsZUltYWdlXy5kZWZhdWx0VGlsZUxvYWRGdW5jdGlvbiA9IGZ1bmN0aW9uKGltYWdlVGlsZSwgc3JjKSB7XG4gIGltYWdlVGlsZS5nZXRJbWFnZSgpLnNyYyA9IHNyYztcbn07XG5leHBvcnQgZGVmYXVsdCBfb2xfc291cmNlX1RpbGVJbWFnZV87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9zb3VyY2UvdGlsZWltYWdlLmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgX29sXyBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCBfb2xfVGlsZV8gZnJvbSAnLi90aWxlLmpzJztcbmltcG9ydCBfb2xfVGlsZVN0YXRlXyBmcm9tICcuL3RpbGVzdGF0ZS5qcyc7XG5pbXBvcnQgX29sX2RvbV8gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IF9vbF9ldmVudHNfIGZyb20gJy4vZXZlbnRzLmpzJztcbmltcG9ydCBfb2xfZXZlbnRzX0V2ZW50VHlwZV8gZnJvbSAnLi9ldmVudHMvZXZlbnR0eXBlLmpzJztcblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBleHRlbmRzIHtvbC5UaWxlfVxuICogQHBhcmFtIHtvbC5UaWxlQ29vcmR9IHRpbGVDb29yZCBUaWxlIGNvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge29sLlRpbGVTdGF0ZX0gc3RhdGUgU3RhdGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gc3JjIEltYWdlIHNvdXJjZSBVUkkuXG4gKiBAcGFyYW0gez9zdHJpbmd9IGNyb3NzT3JpZ2luIENyb3NzIG9yaWdpbi5cbiAqIEBwYXJhbSB7b2wuVGlsZUxvYWRGdW5jdGlvblR5cGV9IHRpbGVMb2FkRnVuY3Rpb24gVGlsZSBsb2FkIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtvbHguVGlsZU9wdGlvbnM9fSBvcHRfb3B0aW9ucyBUaWxlIG9wdGlvbnMuXG4gKi9cbnZhciBfb2xfSW1hZ2VUaWxlXyA9IGZ1bmN0aW9uKHRpbGVDb29yZCwgc3RhdGUsIHNyYywgY3Jvc3NPcmlnaW4sIHRpbGVMb2FkRnVuY3Rpb24sIG9wdF9vcHRpb25zKSB7XG5cbiAgX29sX1RpbGVfLmNhbGwodGhpcywgdGlsZUNvb3JkLCBzdGF0ZSwgb3B0X29wdGlvbnMpO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7P3N0cmluZ31cbiAgICovXG4gIHRoaXMuY3Jvc3NPcmlnaW5fID0gY3Jvc3NPcmlnaW47XG5cbiAgLyoqXG4gICAqIEltYWdlIFVSSVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgdGhpcy5zcmNfID0gc3JjO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7SW1hZ2V8SFRNTENhbnZhc0VsZW1lbnR9XG4gICAqL1xuICB0aGlzLmltYWdlXyA9IG5ldyBJbWFnZSgpO1xuICBpZiAoY3Jvc3NPcmlnaW4gIT09IG51bGwpIHtcbiAgICB0aGlzLmltYWdlXy5jcm9zc09yaWdpbiA9IGNyb3NzT3JpZ2luO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtBcnJheS48b2wuRXZlbnRzS2V5Pn1cbiAgICovXG4gIHRoaXMuaW1hZ2VMaXN0ZW5lcktleXNfID0gbnVsbDtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge29sLlRpbGVMb2FkRnVuY3Rpb25UeXBlfVxuICAgKi9cbiAgdGhpcy50aWxlTG9hZEZ1bmN0aW9uXyA9IHRpbGVMb2FkRnVuY3Rpb247XG5cbn07XG5cbl9vbF8uaW5oZXJpdHMoX29sX0ltYWdlVGlsZV8sIF9vbF9UaWxlXyk7XG5cblxuLyoqXG4gKiBAaW5oZXJpdERvY1xuICovXG5fb2xfSW1hZ2VUaWxlXy5wcm90b3R5cGUuZGlzcG9zZUludGVybmFsID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLnN0YXRlID09IF9vbF9UaWxlU3RhdGVfLkxPQURJTkcpIHtcbiAgICB0aGlzLnVubGlzdGVuSW1hZ2VfKCk7XG4gICAgdGhpcy5pbWFnZV8gPSBfb2xfSW1hZ2VUaWxlXy5nZXRCbGFua0ltYWdlKCk7XG4gIH1cbiAgaWYgKHRoaXMuaW50ZXJpbVRpbGUpIHtcbiAgICB0aGlzLmludGVyaW1UaWxlLmRpc3Bvc2UoKTtcbiAgfVxuICB0aGlzLnN0YXRlID0gX29sX1RpbGVTdGF0ZV8uQUJPUlQ7XG4gIHRoaXMuY2hhbmdlZCgpO1xuICBfb2xfVGlsZV8ucHJvdG90eXBlLmRpc3Bvc2VJbnRlcm5hbC5jYWxsKHRoaXMpO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgSFRNTCBpbWFnZSBlbGVtZW50IGZvciB0aGlzIHRpbGUgKG1heSBiZSBhIENhbnZhcywgSW1hZ2UsIG9yIFZpZGVvKS5cbiAqIEByZXR1cm4ge0hUTUxDYW52YXNFbGVtZW50fEhUTUxJbWFnZUVsZW1lbnR8SFRNTFZpZGVvRWxlbWVudH0gSW1hZ2UuXG4gKiBAYXBpXG4gKi9cbl9vbF9JbWFnZVRpbGVfLnByb3RvdHlwZS5nZXRJbWFnZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5pbWFnZV87XG59O1xuXG5cbi8qKlxuICogQGluaGVyaXREb2NcbiAqL1xuX29sX0ltYWdlVGlsZV8ucHJvdG90eXBlLmdldEtleSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5zcmNfO1xufTtcblxuXG4vKipcbiAqIFRyYWNrcyBsb2FkaW5nIG9yIHJlYWQgZXJyb3JzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbl9vbF9JbWFnZVRpbGVfLnByb3RvdHlwZS5oYW5kbGVJbWFnZUVycm9yXyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnN0YXRlID0gX29sX1RpbGVTdGF0ZV8uRVJST1I7XG4gIHRoaXMudW5saXN0ZW5JbWFnZV8oKTtcbiAgdGhpcy5pbWFnZV8gPSBfb2xfSW1hZ2VUaWxlXy5nZXRCbGFua0ltYWdlKCk7XG4gIHRoaXMuY2hhbmdlZCgpO1xufTtcblxuXG4vKipcbiAqIFRyYWNrcyBzdWNjZXNzZnVsIGltYWdlIGxvYWQuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuX29sX0ltYWdlVGlsZV8ucHJvdG90eXBlLmhhbmRsZUltYWdlTG9hZF8gPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuaW1hZ2VfLm5hdHVyYWxXaWR0aCAmJiB0aGlzLmltYWdlXy5uYXR1cmFsSGVpZ2h0KSB7XG4gICAgdGhpcy5zdGF0ZSA9IF9vbF9UaWxlU3RhdGVfLkxPQURFRDtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnN0YXRlID0gX29sX1RpbGVTdGF0ZV8uRU1QVFk7XG4gIH1cbiAgdGhpcy51bmxpc3RlbkltYWdlXygpO1xuICB0aGlzLmNoYW5nZWQoKTtcbn07XG5cblxuLyoqXG4gKiBAaW5oZXJpdERvY1xuICogQGFwaVxuICovXG5fb2xfSW1hZ2VUaWxlXy5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5zdGF0ZSA9PSBfb2xfVGlsZVN0YXRlXy5FUlJPUikge1xuICAgIHRoaXMuc3RhdGUgPSBfb2xfVGlsZVN0YXRlXy5JRExFO1xuICAgIHRoaXMuaW1hZ2VfID0gbmV3IEltYWdlKCk7XG4gICAgaWYgKHRoaXMuY3Jvc3NPcmlnaW5fICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmltYWdlXy5jcm9zc09yaWdpbiA9IHRoaXMuY3Jvc3NPcmlnaW5fO1xuICAgIH1cbiAgfVxuICBpZiAodGhpcy5zdGF0ZSA9PSBfb2xfVGlsZVN0YXRlXy5JRExFKSB7XG4gICAgdGhpcy5zdGF0ZSA9IF9vbF9UaWxlU3RhdGVfLkxPQURJTkc7XG4gICAgdGhpcy5jaGFuZ2VkKCk7XG4gICAgdGhpcy5pbWFnZUxpc3RlbmVyS2V5c18gPSBbXG4gICAgICBfb2xfZXZlbnRzXy5saXN0ZW5PbmNlKHRoaXMuaW1hZ2VfLCBfb2xfZXZlbnRzX0V2ZW50VHlwZV8uRVJST1IsXG4gICAgICAgICAgdGhpcy5oYW5kbGVJbWFnZUVycm9yXywgdGhpcyksXG4gICAgICBfb2xfZXZlbnRzXy5saXN0ZW5PbmNlKHRoaXMuaW1hZ2VfLCBfb2xfZXZlbnRzX0V2ZW50VHlwZV8uTE9BRCxcbiAgICAgICAgICB0aGlzLmhhbmRsZUltYWdlTG9hZF8sIHRoaXMpXG4gICAgXTtcbiAgICB0aGlzLnRpbGVMb2FkRnVuY3Rpb25fKHRoaXMsIHRoaXMuc3JjXyk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBEaXNjYXJkcyBldmVudCBoYW5kbGVycyB3aGljaCBsaXN0ZW4gZm9yIGxvYWQgY29tcGxldGlvbiBvciBlcnJvcnMuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuX29sX0ltYWdlVGlsZV8ucHJvdG90eXBlLnVubGlzdGVuSW1hZ2VfID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuaW1hZ2VMaXN0ZW5lcktleXNfLmZvckVhY2goX29sX2V2ZW50c18udW5saXN0ZW5CeUtleSk7XG4gIHRoaXMuaW1hZ2VMaXN0ZW5lcktleXNfID0gbnVsbDtcbn07XG5cblxuLyoqXG4gKiBHZXQgYSAxLXBpeGVsIGJsYW5rIGltYWdlLlxuICogQHJldHVybiB7SFRNTENhbnZhc0VsZW1lbnR9IEJsYW5rIGltYWdlLlxuICovXG5fb2xfSW1hZ2VUaWxlXy5nZXRCbGFua0ltYWdlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBjdHggPSBfb2xfZG9tXy5jcmVhdGVDYW52YXNDb250ZXh0MkQoMSwgMSk7XG4gIGN0eC5maWxsU3R5bGUgPSAncmdiYSgwLDAsMCwwKSc7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCAxLCAxKTtcbiAgcmV0dXJuIGN0eC5jYW52YXM7XG59O1xuZXhwb3J0IGRlZmF1bHQgX29sX0ltYWdlVGlsZV87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9pbWFnZXRpbGUuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfb2xfZWFzaW5nXyA9IHt9O1xuXG5cbi8qKlxuICogU3RhcnQgc2xvdyBhbmQgc3BlZWQgdXAuXG4gKiBAcGFyYW0ge251bWJlcn0gdCBJbnB1dCBiZXR3ZWVuIDAgYW5kIDEuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IE91dHB1dCBiZXR3ZWVuIDAgYW5kIDEuXG4gKiBAYXBpXG4gKi9cbl9vbF9lYXNpbmdfLmVhc2VJbiA9IGZ1bmN0aW9uKHQpIHtcbiAgcmV0dXJuIE1hdGgucG93KHQsIDMpO1xufTtcblxuXG4vKipcbiAqIFN0YXJ0IGZhc3QgYW5kIHNsb3cgZG93bi5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0IElucHV0IGJldHdlZW4gMCBhbmQgMS5cbiAqIEByZXR1cm4ge251bWJlcn0gT3V0cHV0IGJldHdlZW4gMCBhbmQgMS5cbiAqIEBhcGlcbiAqL1xuX29sX2Vhc2luZ18uZWFzZU91dCA9IGZ1bmN0aW9uKHQpIHtcbiAgcmV0dXJuIDEgLSBfb2xfZWFzaW5nXy5lYXNlSW4oMSAtIHQpO1xufTtcblxuXG4vKipcbiAqIFN0YXJ0IHNsb3csIHNwZWVkIHVwLCBhbmQgdGhlbiBzbG93IGRvd24gYWdhaW4uXG4gKiBAcGFyYW0ge251bWJlcn0gdCBJbnB1dCBiZXR3ZWVuIDAgYW5kIDEuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IE91dHB1dCBiZXR3ZWVuIDAgYW5kIDEuXG4gKiBAYXBpXG4gKi9cbl9vbF9lYXNpbmdfLmluQW5kT3V0ID0gZnVuY3Rpb24odCkge1xuICByZXR1cm4gMyAqIHQgKiB0IC0gMiAqIHQgKiB0ICogdDtcbn07XG5cblxuLyoqXG4gKiBNYWludGFpbiBhIGNvbnN0YW50IHNwZWVkIG92ZXIgdGltZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0IElucHV0IGJldHdlZW4gMCBhbmQgMS5cbiAqIEByZXR1cm4ge251bWJlcn0gT3V0cHV0IGJldHdlZW4gMCBhbmQgMS5cbiAqIEBhcGlcbiAqL1xuX29sX2Vhc2luZ18ubGluZWFyID0gZnVuY3Rpb24odCkge1xuICByZXR1cm4gdDtcbn07XG5cblxuLyoqXG4gKiBTdGFydCBzbG93LCBzcGVlZCB1cCwgYW5kIGF0IHRoZSB2ZXJ5IGVuZCBzbG93IGRvd24gYWdhaW4uICBUaGlzIGhhcyB0aGVcbiAqIHNhbWUgZ2VuZXJhbCBiZWhhdmlvciBhcyB7QGxpbmsgb2wuZWFzaW5nLmluQW5kT3V0fSwgYnV0IHRoZSBmaW5hbCBzbG93ZG93blxuICogaXMgZGVsYXllZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0IElucHV0IGJldHdlZW4gMCBhbmQgMS5cbiAqIEByZXR1cm4ge251bWJlcn0gT3V0cHV0IGJldHdlZW4gMCBhbmQgMS5cbiAqIEBhcGlcbiAqL1xuX29sX2Vhc2luZ18udXBBbmREb3duID0gZnVuY3Rpb24odCkge1xuICBpZiAodCA8IDAuNSkge1xuICAgIHJldHVybiBfb2xfZWFzaW5nXy5pbkFuZE91dCgyICogdCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDEgLSBfb2xfZWFzaW5nXy5pbkFuZE91dCgyICogKHQgLSAwLjUpKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IF9vbF9lYXNpbmdfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvZWFzaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgX29sXyBmcm9tICcuLi9pbmRleC5qcyc7XG5pbXBvcnQgX29sX2Fzc2VydHNfIGZyb20gJy4uL2Fzc2VydHMuanMnO1xuaW1wb3J0IF9vbF9ldmVudHNfRXZlbnRUYXJnZXRfIGZyb20gJy4uL2V2ZW50cy9ldmVudHRhcmdldC5qcyc7XG5pbXBvcnQgX29sX2V2ZW50c19FdmVudFR5cGVfIGZyb20gJy4uL2V2ZW50cy9ldmVudHR5cGUuanMnO1xuXG4vKipcbiAqIEltcGxlbWVudHMgYSBMZWFzdC1SZWNlbnRseS1Vc2VkIGNhY2hlIHdoZXJlIHRoZSBrZXlzIGRvIG5vdCBjb25mbGljdCB3aXRoXG4gKiBPYmplY3QncyBwcm9wZXJ0aWVzIChlLmcuICdoYXNPd25Qcm9wZXJ0eScgaXMgbm90IGFsbG93ZWQgYXMgYSBrZXkpLiBFeHBpcmluZ1xuICogaXRlbXMgZnJvbSB0aGUgY2FjaGUgaXMgdGhlIHJlc3BvbnNpYmlsaXR5IG9mIHRoZSB1c2VyLlxuICogQGNvbnN0cnVjdG9yXG4gKiBAZXh0ZW5kcyB7b2wuZXZlbnRzLkV2ZW50VGFyZ2V0fVxuICogQGZpcmVzIG9sLmV2ZW50cy5FdmVudFxuICogQHN0cnVjdFxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7bnVtYmVyPX0gb3B0X2hpZ2hXYXRlck1hcmsgSGlnaCB3YXRlciBtYXJrLlxuICovXG52YXIgX29sX3N0cnVjdHNfTFJVQ2FjaGVfID0gZnVuY3Rpb24ob3B0X2hpZ2hXYXRlck1hcmspIHtcblxuICBfb2xfZXZlbnRzX0V2ZW50VGFyZ2V0Xy5jYWxsKHRoaXMpO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgdGhpcy5oaWdoV2F0ZXJNYXJrID0gb3B0X2hpZ2hXYXRlck1hcmsgIT09IHVuZGVmaW5lZCA/IG9wdF9oaWdoV2F0ZXJNYXJrIDogMjA0ODtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIHRoaXMuY291bnRfID0gMDtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUgeyFPYmplY3QuPHN0cmluZywgb2wuTFJVQ2FjaGVFbnRyeT59XG4gICAqL1xuICB0aGlzLmVudHJpZXNfID0ge307XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHs/b2wuTFJVQ2FjaGVFbnRyeX1cbiAgICovXG4gIHRoaXMub2xkZXN0XyA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHs/b2wuTFJVQ2FjaGVFbnRyeX1cbiAgICovXG4gIHRoaXMubmV3ZXN0XyA9IG51bGw7XG5cbn07XG5cbl9vbF8uaW5oZXJpdHMoX29sX3N0cnVjdHNfTFJVQ2FjaGVfLCBfb2xfZXZlbnRzX0V2ZW50VGFyZ2V0Xyk7XG5cblxuLyoqXG4gKiBAcmV0dXJuIHtib29sZWFufSBDYW4gZXhwaXJlIGNhY2hlLlxuICovXG5fb2xfc3RydWN0c19MUlVDYWNoZV8ucHJvdG90eXBlLmNhbkV4cGlyZUNhY2hlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmdldENvdW50KCkgPiB0aGlzLmhpZ2hXYXRlck1hcms7XG59O1xuXG5cbi8qKlxuICogRklYTUUgZW1wdHkgZGVzY3JpcHRpb24gZm9yIGpzZG9jXG4gKi9cbl9vbF9zdHJ1Y3RzX0xSVUNhY2hlXy5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5jb3VudF8gPSAwO1xuICB0aGlzLmVudHJpZXNfID0ge307XG4gIHRoaXMub2xkZXN0XyA9IG51bGw7XG4gIHRoaXMubmV3ZXN0XyA9IG51bGw7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudChfb2xfZXZlbnRzX0V2ZW50VHlwZV8uQ0xFQVIpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgS2V5LlxuICogQHJldHVybiB7Ym9vbGVhbn0gQ29udGFpbnMga2V5LlxuICovXG5fb2xfc3RydWN0c19MUlVDYWNoZV8ucHJvdG90eXBlLmNvbnRhaW5zS2V5ID0gZnVuY3Rpb24oa2V5KSB7XG4gIHJldHVybiB0aGlzLmVudHJpZXNfLmhhc093blByb3BlcnR5KGtleSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtmdW5jdGlvbih0aGlzOiBTLCBULCBzdHJpbmcsIG9sLnN0cnVjdHMuTFJVQ2FjaGUpOiA/fSBmIFRoZSBmdW5jdGlvblxuICogICAgIHRvIGNhbGwgZm9yIGV2ZXJ5IGVudHJ5IGZyb20gdGhlIG9sZGVzdCB0byB0aGUgbmV3ZXIuIFRoaXMgZnVuY3Rpb24gdGFrZXNcbiAqICAgICAzIGFyZ3VtZW50cyAodGhlIGVudHJ5IHZhbHVlLCB0aGUgZW50cnkga2V5IGFuZCB0aGUgTFJVQ2FjaGUgb2JqZWN0KS5cbiAqICAgICBUaGUgcmV0dXJuIHZhbHVlIGlzIGlnbm9yZWQuXG4gKiBAcGFyYW0ge1M9fSBvcHRfdGhpcyBUaGUgb2JqZWN0IHRvIHVzZSBhcyBgdGhpc2AgaW4gYGZgLlxuICogQHRlbXBsYXRlIFNcbiAqL1xuX29sX3N0cnVjdHNfTFJVQ2FjaGVfLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oZiwgb3B0X3RoaXMpIHtcbiAgdmFyIGVudHJ5ID0gdGhpcy5vbGRlc3RfO1xuICB3aGlsZSAoZW50cnkpIHtcbiAgICBmLmNhbGwob3B0X3RoaXMsIGVudHJ5LnZhbHVlXywgZW50cnkua2V5XywgdGhpcyk7XG4gICAgZW50cnkgPSBlbnRyeS5uZXdlcjtcbiAgfVxufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgS2V5LlxuICogQHJldHVybiB7VH0gVmFsdWUuXG4gKi9cbl9vbF9zdHJ1Y3RzX0xSVUNhY2hlXy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oa2V5KSB7XG4gIHZhciBlbnRyeSA9IHRoaXMuZW50cmllc19ba2V5XTtcbiAgX29sX2Fzc2VydHNfLmFzc2VydChlbnRyeSAhPT0gdW5kZWZpbmVkLFxuICAgICAgMTUpOyAvLyBUcmllZCB0byBnZXQgYSB2YWx1ZSBmb3IgYSBrZXkgdGhhdCBkb2VzIG5vdCBleGlzdCBpbiB0aGUgY2FjaGVcbiAgaWYgKGVudHJ5ID09PSB0aGlzLm5ld2VzdF8pIHtcbiAgICByZXR1cm4gZW50cnkudmFsdWVfO1xuICB9IGVsc2UgaWYgKGVudHJ5ID09PSB0aGlzLm9sZGVzdF8pIHtcbiAgICB0aGlzLm9sZGVzdF8gPSAvKiogQHR5cGUge29sLkxSVUNhY2hlRW50cnl9ICovICh0aGlzLm9sZGVzdF8ubmV3ZXIpO1xuICAgIHRoaXMub2xkZXN0Xy5vbGRlciA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgZW50cnkubmV3ZXIub2xkZXIgPSBlbnRyeS5vbGRlcjtcbiAgICBlbnRyeS5vbGRlci5uZXdlciA9IGVudHJ5Lm5ld2VyO1xuICB9XG4gIGVudHJ5Lm5ld2VyID0gbnVsbDtcbiAgZW50cnkub2xkZXIgPSB0aGlzLm5ld2VzdF87XG4gIHRoaXMubmV3ZXN0Xy5uZXdlciA9IGVudHJ5O1xuICB0aGlzLm5ld2VzdF8gPSBlbnRyeTtcbiAgcmV0dXJuIGVudHJ5LnZhbHVlXztcbn07XG5cblxuLyoqXG4gKiBSZW1vdmUgYW4gZW50cnkgZnJvbSB0aGUgY2FjaGUuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBlbnRyeSBrZXkuXG4gKiBAcmV0dXJuIHtUfSBUaGUgcmVtb3ZlZCBlbnRyeS5cbiAqL1xuX29sX3N0cnVjdHNfTFJVQ2FjaGVfLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihrZXkpIHtcbiAgdmFyIGVudHJ5ID0gdGhpcy5lbnRyaWVzX1trZXldO1xuICBfb2xfYXNzZXJ0c18uYXNzZXJ0KGVudHJ5ICE9PSB1bmRlZmluZWQsIDE1KTsgLy8gVHJpZWQgdG8gZ2V0IGEgdmFsdWUgZm9yIGEga2V5IHRoYXQgZG9lcyBub3QgZXhpc3QgaW4gdGhlIGNhY2hlXG4gIGlmIChlbnRyeSA9PT0gdGhpcy5uZXdlc3RfKSB7XG4gICAgdGhpcy5uZXdlc3RfID0gLyoqIEB0eXBlIHtvbC5MUlVDYWNoZUVudHJ5fSAqLyAoZW50cnkub2xkZXIpO1xuICAgIGlmICh0aGlzLm5ld2VzdF8pIHtcbiAgICAgIHRoaXMubmV3ZXN0Xy5uZXdlciA9IG51bGw7XG4gICAgfVxuICB9IGVsc2UgaWYgKGVudHJ5ID09PSB0aGlzLm9sZGVzdF8pIHtcbiAgICB0aGlzLm9sZGVzdF8gPSAvKiogQHR5cGUge29sLkxSVUNhY2hlRW50cnl9ICovIChlbnRyeS5uZXdlcik7XG4gICAgaWYgKHRoaXMub2xkZXN0Xykge1xuICAgICAgdGhpcy5vbGRlc3RfLm9sZGVyID0gbnVsbDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZW50cnkubmV3ZXIub2xkZXIgPSBlbnRyeS5vbGRlcjtcbiAgICBlbnRyeS5vbGRlci5uZXdlciA9IGVudHJ5Lm5ld2VyO1xuICB9XG4gIGRlbGV0ZSB0aGlzLmVudHJpZXNfW2tleV07XG4gIC0tdGhpcy5jb3VudF87XG4gIHJldHVybiBlbnRyeS52YWx1ZV87XG59O1xuXG5cbi8qKlxuICogQHJldHVybiB7bnVtYmVyfSBDb3VudC5cbiAqL1xuX29sX3N0cnVjdHNfTFJVQ2FjaGVfLnByb3RvdHlwZS5nZXRDb3VudCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5jb3VudF87XG59O1xuXG5cbi8qKlxuICogQHJldHVybiB7QXJyYXkuPHN0cmluZz59IEtleXMuXG4gKi9cbl9vbF9zdHJ1Y3RzX0xSVUNhY2hlXy5wcm90b3R5cGUuZ2V0S2V5cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIga2V5cyA9IG5ldyBBcnJheSh0aGlzLmNvdW50Xyk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGVudHJ5O1xuICBmb3IgKGVudHJ5ID0gdGhpcy5uZXdlc3RfOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5vbGRlcikge1xuICAgIGtleXNbaSsrXSA9IGVudHJ5LmtleV87XG4gIH1cbiAgcmV0dXJuIGtleXM7XG59O1xuXG5cbi8qKlxuICogQHJldHVybiB7QXJyYXkuPFQ+fSBWYWx1ZXMuXG4gKi9cbl9vbF9zdHJ1Y3RzX0xSVUNhY2hlXy5wcm90b3R5cGUuZ2V0VmFsdWVzID0gZnVuY3Rpb24oKSB7XG4gIHZhciB2YWx1ZXMgPSBuZXcgQXJyYXkodGhpcy5jb3VudF8pO1xuICB2YXIgaSA9IDA7XG4gIHZhciBlbnRyeTtcbiAgZm9yIChlbnRyeSA9IHRoaXMubmV3ZXN0XzsgZW50cnk7IGVudHJ5ID0gZW50cnkub2xkZXIpIHtcbiAgICB2YWx1ZXNbaSsrXSA9IGVudHJ5LnZhbHVlXztcbiAgfVxuICByZXR1cm4gdmFsdWVzO1xufTtcblxuXG4vKipcbiAqIEByZXR1cm4ge1R9IExhc3QgdmFsdWUuXG4gKi9cbl9vbF9zdHJ1Y3RzX0xSVUNhY2hlXy5wcm90b3R5cGUucGVla0xhc3QgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMub2xkZXN0Xy52YWx1ZV87XG59O1xuXG5cbi8qKlxuICogQHJldHVybiB7c3RyaW5nfSBMYXN0IGtleS5cbiAqL1xuX29sX3N0cnVjdHNfTFJVQ2FjaGVfLnByb3RvdHlwZS5wZWVrTGFzdEtleSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5vbGRlc3RfLmtleV87XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBrZXkgb2YgdGhlIG5ld2VzdCBpdGVtIGluIHRoZSBjYWNoZS4gIFRocm93cyBpZiB0aGUgY2FjaGUgaXMgZW1wdHkuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBuZXdlc3Qga2V5LlxuICovXG5fb2xfc3RydWN0c19MUlVDYWNoZV8ucHJvdG90eXBlLnBlZWtGaXJzdEtleSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5uZXdlc3RfLmtleV87XG59O1xuXG5cbi8qKlxuICogQHJldHVybiB7VH0gdmFsdWUgVmFsdWUuXG4gKi9cbl9vbF9zdHJ1Y3RzX0xSVUNhY2hlXy5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24oKSB7XG4gIHZhciBlbnRyeSA9IHRoaXMub2xkZXN0XztcbiAgZGVsZXRlIHRoaXMuZW50cmllc19bZW50cnkua2V5X107XG4gIGlmIChlbnRyeS5uZXdlcikge1xuICAgIGVudHJ5Lm5ld2VyLm9sZGVyID0gbnVsbDtcbiAgfVxuICB0aGlzLm9sZGVzdF8gPSAvKiogQHR5cGUge29sLkxSVUNhY2hlRW50cnl9ICovIChlbnRyeS5uZXdlcik7XG4gIGlmICghdGhpcy5vbGRlc3RfKSB7XG4gICAgdGhpcy5uZXdlc3RfID0gbnVsbDtcbiAgfVxuICAtLXRoaXMuY291bnRfO1xuICByZXR1cm4gZW50cnkudmFsdWVfO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgS2V5LlxuICogQHBhcmFtIHtUfSB2YWx1ZSBWYWx1ZS5cbiAqL1xuX29sX3N0cnVjdHNfTFJVQ2FjaGVfLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICB0aGlzLmdldChrZXkpOyAgLy8gdXBkYXRlIGBuZXdlc3RfYFxuICB0aGlzLmVudHJpZXNfW2tleV0udmFsdWVfID0gdmFsdWU7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBLZXkuXG4gKiBAcGFyYW0ge1R9IHZhbHVlIFZhbHVlLlxuICovXG5fb2xfc3RydWN0c19MUlVDYWNoZV8ucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgX29sX2Fzc2VydHNfLmFzc2VydCghKGtleSBpbiB0aGlzLmVudHJpZXNfKSxcbiAgICAgIDE2KTsgLy8gVHJpZWQgdG8gc2V0IGEgdmFsdWUgZm9yIGEga2V5IHRoYXQgaXMgdXNlZCBhbHJlYWR5XG4gIHZhciBlbnRyeSA9IC8qKiBAdHlwZSB7b2wuTFJVQ2FjaGVFbnRyeX0gKi8gKHtcbiAgICBrZXlfOiBrZXksXG4gICAgbmV3ZXI6IG51bGwsXG4gICAgb2xkZXI6IHRoaXMubmV3ZXN0XyxcbiAgICB2YWx1ZV86IHZhbHVlXG4gIH0pO1xuICBpZiAoIXRoaXMubmV3ZXN0Xykge1xuICAgIHRoaXMub2xkZXN0XyA9IGVudHJ5O1xuICB9IGVsc2Uge1xuICAgIHRoaXMubmV3ZXN0Xy5uZXdlciA9IGVudHJ5O1xuICB9XG4gIHRoaXMubmV3ZXN0XyA9IGVudHJ5O1xuICB0aGlzLmVudHJpZXNfW2tleV0gPSBlbnRyeTtcbiAgKyt0aGlzLmNvdW50Xztcbn07XG5cblxuLyoqXG4gKiBQcnVuZSB0aGUgY2FjaGUuXG4gKi9cbl9vbF9zdHJ1Y3RzX0xSVUNhY2hlXy5wcm90b3R5cGUucHJ1bmUgPSBmdW5jdGlvbigpIHtcbiAgd2hpbGUgKHRoaXMuY2FuRXhwaXJlQ2FjaGUoKSkge1xuICAgIHRoaXMucG9wKCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBfb2xfc3RydWN0c19MUlVDYWNoZV87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9zdHJ1Y3RzL2xydWNhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgX29sXyBmcm9tICcuLi9pbmRleC5qcyc7XG5pbXBvcnQgX29sX1RpbGVfIGZyb20gJy4uL3RpbGUuanMnO1xuaW1wb3J0IF9vbF9UaWxlU3RhdGVfIGZyb20gJy4uL3RpbGVzdGF0ZS5qcyc7XG5pbXBvcnQgX29sX2V2ZW50c18gZnJvbSAnLi4vZXZlbnRzLmpzJztcbmltcG9ydCBfb2xfZXZlbnRzX0V2ZW50VHlwZV8gZnJvbSAnLi4vZXZlbnRzL2V2ZW50dHlwZS5qcyc7XG5pbXBvcnQgX29sX2V4dGVudF8gZnJvbSAnLi4vZXh0ZW50LmpzJztcbmltcG9ydCBfb2xfbWF0aF8gZnJvbSAnLi4vbWF0aC5qcyc7XG5pbXBvcnQgX29sX3JlcHJval8gZnJvbSAnLi4vcmVwcm9qLmpzJztcbmltcG9ydCBfb2xfcmVwcm9qX1RyaWFuZ3VsYXRpb25fIGZyb20gJy4uL3JlcHJvai90cmlhbmd1bGF0aW9uLmpzJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBDbGFzcyBlbmNhcHN1bGF0aW5nIHNpbmdsZSByZXByb2plY3RlZCB0aWxlLlxuICogU2VlIHtAbGluayBvbC5zb3VyY2UuVGlsZUltYWdlfS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBleHRlbmRzIHtvbC5UaWxlfVxuICogQHBhcmFtIHtvbC5wcm9qLlByb2plY3Rpb259IHNvdXJjZVByb2ogU291cmNlIHByb2plY3Rpb24uXG4gKiBAcGFyYW0ge29sLnRpbGVncmlkLlRpbGVHcmlkfSBzb3VyY2VUaWxlR3JpZCBTb3VyY2UgdGlsZSBncmlkLlxuICogQHBhcmFtIHtvbC5wcm9qLlByb2plY3Rpb259IHRhcmdldFByb2ogVGFyZ2V0IHByb2plY3Rpb24uXG4gKiBAcGFyYW0ge29sLnRpbGVncmlkLlRpbGVHcmlkfSB0YXJnZXRUaWxlR3JpZCBUYXJnZXQgdGlsZSBncmlkLlxuICogQHBhcmFtIHtvbC5UaWxlQ29vcmR9IHRpbGVDb29yZCBDb29yZGluYXRlIG9mIHRoZSB0aWxlLlxuICogQHBhcmFtIHtvbC5UaWxlQ29vcmR9IHdyYXBwZWRUaWxlQ29vcmQgQ29vcmRpbmF0ZSBvZiB0aGUgdGlsZSB3cmFwcGVkIGluIFguXG4gKiBAcGFyYW0ge251bWJlcn0gcGl4ZWxSYXRpbyBQaXhlbCByYXRpby5cbiAqIEBwYXJhbSB7bnVtYmVyfSBndXR0ZXIgR3V0dGVyIG9mIHRoZSBzb3VyY2UgdGlsZXMuXG4gKiBAcGFyYW0ge29sLlJlcHJvalRpbGVGdW5jdGlvblR5cGV9IGdldFRpbGVGdW5jdGlvblxuICogICAgIEZ1bmN0aW9uIHJldHVybmluZyBzb3VyY2UgdGlsZXMgKHosIHgsIHksIHBpeGVsUmF0aW8pLlxuICogQHBhcmFtIHtudW1iZXI9fSBvcHRfZXJyb3JUaHJlc2hvbGQgQWNjZXB0YWJsZSByZXByb2plY3Rpb24gZXJyb3IgKGluIHB4KS5cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdF9yZW5kZXJFZGdlcyBSZW5kZXIgcmVwcm9qZWN0aW9uIGVkZ2VzLlxuICovXG52YXIgX29sX3JlcHJval9UaWxlXyA9IGZ1bmN0aW9uKHNvdXJjZVByb2osIHNvdXJjZVRpbGVHcmlkLFxuICAgIHRhcmdldFByb2osIHRhcmdldFRpbGVHcmlkLCB0aWxlQ29vcmQsIHdyYXBwZWRUaWxlQ29vcmQsXG4gICAgcGl4ZWxSYXRpbywgZ3V0dGVyLCBnZXRUaWxlRnVuY3Rpb24sXG4gICAgb3B0X2Vycm9yVGhyZXNob2xkLCBvcHRfcmVuZGVyRWRnZXMpIHtcbiAgX29sX1RpbGVfLmNhbGwodGhpcywgdGlsZUNvb3JkLCBfb2xfVGlsZVN0YXRlXy5JRExFKTtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICB0aGlzLnJlbmRlckVkZ2VzXyA9IG9wdF9yZW5kZXJFZGdlcyAhPT0gdW5kZWZpbmVkID8gb3B0X3JlbmRlckVkZ2VzIDogZmFsc2U7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICB0aGlzLnBpeGVsUmF0aW9fID0gcGl4ZWxSYXRpbztcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIHRoaXMuZ3V0dGVyXyA9IGd1dHRlcjtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge0hUTUxDYW52YXNFbGVtZW50fVxuICAgKi9cbiAgdGhpcy5jYW52YXNfID0gbnVsbDtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge29sLnRpbGVncmlkLlRpbGVHcmlkfVxuICAgKi9cbiAgdGhpcy5zb3VyY2VUaWxlR3JpZF8gPSBzb3VyY2VUaWxlR3JpZDtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge29sLnRpbGVncmlkLlRpbGVHcmlkfVxuICAgKi9cbiAgdGhpcy50YXJnZXRUaWxlR3JpZF8gPSB0YXJnZXRUaWxlR3JpZDtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge29sLlRpbGVDb29yZH1cbiAgICovXG4gIHRoaXMud3JhcHBlZFRpbGVDb29yZF8gPSB3cmFwcGVkVGlsZUNvb3JkID8gd3JhcHBlZFRpbGVDb29yZCA6IHRpbGVDb29yZDtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUgeyFBcnJheS48b2wuVGlsZT59XG4gICAqL1xuICB0aGlzLnNvdXJjZVRpbGVzXyA9IFtdO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7QXJyYXkuPG9sLkV2ZW50c0tleT59XG4gICAqL1xuICB0aGlzLnNvdXJjZXNMaXN0ZW5lcktleXNfID0gbnVsbDtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIHRoaXMuc291cmNlWl8gPSAwO1xuXG4gIHZhciB0YXJnZXRFeHRlbnQgPSB0YXJnZXRUaWxlR3JpZC5nZXRUaWxlQ29vcmRFeHRlbnQodGhpcy53cmFwcGVkVGlsZUNvb3JkXyk7XG4gIHZhciBtYXhUYXJnZXRFeHRlbnQgPSB0aGlzLnRhcmdldFRpbGVHcmlkXy5nZXRFeHRlbnQoKTtcbiAgdmFyIG1heFNvdXJjZUV4dGVudCA9IHRoaXMuc291cmNlVGlsZUdyaWRfLmdldEV4dGVudCgpO1xuXG4gIHZhciBsaW1pdGVkVGFyZ2V0RXh0ZW50ID0gbWF4VGFyZ2V0RXh0ZW50ID9cbiAgICBfb2xfZXh0ZW50Xy5nZXRJbnRlcnNlY3Rpb24odGFyZ2V0RXh0ZW50LCBtYXhUYXJnZXRFeHRlbnQpIDogdGFyZ2V0RXh0ZW50O1xuXG4gIGlmIChfb2xfZXh0ZW50Xy5nZXRBcmVhKGxpbWl0ZWRUYXJnZXRFeHRlbnQpID09PSAwKSB7XG4gICAgLy8gVGlsZSBpcyBjb21wbGV0ZWx5IG91dHNpZGUgcmFuZ2UgLT4gRU1QVFlcbiAgICAvLyBUT0RPOiBpcyBpdCBhY3R1YWxseSBjb3JyZWN0IHRoYXQgdGhlIHNvdXJjZSBldmVuIGNyZWF0ZXMgdGhlIHRpbGUgP1xuICAgIHRoaXMuc3RhdGUgPSBfb2xfVGlsZVN0YXRlXy5FTVBUWTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgc291cmNlUHJvakV4dGVudCA9IHNvdXJjZVByb2ouZ2V0RXh0ZW50KCk7XG4gIGlmIChzb3VyY2VQcm9qRXh0ZW50KSB7XG4gICAgaWYgKCFtYXhTb3VyY2VFeHRlbnQpIHtcbiAgICAgIG1heFNvdXJjZUV4dGVudCA9IHNvdXJjZVByb2pFeHRlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1heFNvdXJjZUV4dGVudCA9IF9vbF9leHRlbnRfLmdldEludGVyc2VjdGlvbihcbiAgICAgICAgICBtYXhTb3VyY2VFeHRlbnQsIHNvdXJjZVByb2pFeHRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHZhciB0YXJnZXRSZXNvbHV0aW9uID0gdGFyZ2V0VGlsZUdyaWQuZ2V0UmVzb2x1dGlvbihcbiAgICAgIHRoaXMud3JhcHBlZFRpbGVDb29yZF9bMF0pO1xuXG4gIHZhciB0YXJnZXRDZW50ZXIgPSBfb2xfZXh0ZW50Xy5nZXRDZW50ZXIobGltaXRlZFRhcmdldEV4dGVudCk7XG4gIHZhciBzb3VyY2VSZXNvbHV0aW9uID0gX29sX3JlcHJval8uY2FsY3VsYXRlU291cmNlUmVzb2x1dGlvbihcbiAgICAgIHNvdXJjZVByb2osIHRhcmdldFByb2osIHRhcmdldENlbnRlciwgdGFyZ2V0UmVzb2x1dGlvbik7XG5cbiAgaWYgKCFpc0Zpbml0ZShzb3VyY2VSZXNvbHV0aW9uKSB8fCBzb3VyY2VSZXNvbHV0aW9uIDw9IDApIHtcbiAgICAvLyBpbnZhbGlkIHNvdXJjZVJlc29sdXRpb24gLT4gRU1QVFlcbiAgICAvLyBwcm9iYWJseSBlZGdlcyBvZiB0aGUgcHJvamVjdGlvbnMgd2hlbiBubyBleHRlbnQgaXMgZGVmaW5lZFxuICAgIHRoaXMuc3RhdGUgPSBfb2xfVGlsZVN0YXRlXy5FTVBUWTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZXJyb3JUaHJlc2hvbGRJblBpeGVscyA9IG9wdF9lcnJvclRocmVzaG9sZCAhPT0gdW5kZWZpbmVkID9cbiAgICBvcHRfZXJyb3JUaHJlc2hvbGQgOiBfb2xfLkRFRkFVTFRfUkFTVEVSX1JFUFJPSkVDVElPTl9FUlJPUl9USFJFU0hPTEQ7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHshb2wucmVwcm9qLlRyaWFuZ3VsYXRpb259XG4gICAqL1xuICB0aGlzLnRyaWFuZ3VsYXRpb25fID0gbmV3IF9vbF9yZXByb2pfVHJpYW5ndWxhdGlvbl8oXG4gICAgICBzb3VyY2VQcm9qLCB0YXJnZXRQcm9qLCBsaW1pdGVkVGFyZ2V0RXh0ZW50LCBtYXhTb3VyY2VFeHRlbnQsXG4gICAgICBzb3VyY2VSZXNvbHV0aW9uICogZXJyb3JUaHJlc2hvbGRJblBpeGVscyk7XG5cbiAgaWYgKHRoaXMudHJpYW5ndWxhdGlvbl8uZ2V0VHJpYW5nbGVzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gbm8gdmFsaWQgdHJpYW5nbGVzIC0+IEVNUFRZXG4gICAgdGhpcy5zdGF0ZSA9IF9vbF9UaWxlU3RhdGVfLkVNUFRZO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuc291cmNlWl8gPSBzb3VyY2VUaWxlR3JpZC5nZXRaRm9yUmVzb2x1dGlvbihzb3VyY2VSZXNvbHV0aW9uKTtcbiAgdmFyIHNvdXJjZUV4dGVudCA9IHRoaXMudHJpYW5ndWxhdGlvbl8uY2FsY3VsYXRlU291cmNlRXh0ZW50KCk7XG5cbiAgaWYgKG1heFNvdXJjZUV4dGVudCkge1xuICAgIGlmIChzb3VyY2VQcm9qLmNhbldyYXBYKCkpIHtcbiAgICAgIHNvdXJjZUV4dGVudFsxXSA9IF9vbF9tYXRoXy5jbGFtcChcbiAgICAgICAgICBzb3VyY2VFeHRlbnRbMV0sIG1heFNvdXJjZUV4dGVudFsxXSwgbWF4U291cmNlRXh0ZW50WzNdKTtcbiAgICAgIHNvdXJjZUV4dGVudFszXSA9IF9vbF9tYXRoXy5jbGFtcChcbiAgICAgICAgICBzb3VyY2VFeHRlbnRbM10sIG1heFNvdXJjZUV4dGVudFsxXSwgbWF4U291cmNlRXh0ZW50WzNdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc291cmNlRXh0ZW50ID0gX29sX2V4dGVudF8uZ2V0SW50ZXJzZWN0aW9uKHNvdXJjZUV4dGVudCwgbWF4U291cmNlRXh0ZW50KTtcbiAgICB9XG4gIH1cblxuICBpZiAoIV9vbF9leHRlbnRfLmdldEFyZWEoc291cmNlRXh0ZW50KSkge1xuICAgIHRoaXMuc3RhdGUgPSBfb2xfVGlsZVN0YXRlXy5FTVBUWTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgc291cmNlUmFuZ2UgPSBzb3VyY2VUaWxlR3JpZC5nZXRUaWxlUmFuZ2VGb3JFeHRlbnRBbmRaKFxuICAgICAgICBzb3VyY2VFeHRlbnQsIHRoaXMuc291cmNlWl8pO1xuXG4gICAgZm9yICh2YXIgc3JjWCA9IHNvdXJjZVJhbmdlLm1pblg7IHNyY1ggPD0gc291cmNlUmFuZ2UubWF4WDsgc3JjWCsrKSB7XG4gICAgICBmb3IgKHZhciBzcmNZID0gc291cmNlUmFuZ2UubWluWTsgc3JjWSA8PSBzb3VyY2VSYW5nZS5tYXhZOyBzcmNZKyspIHtcbiAgICAgICAgdmFyIHRpbGUgPSBnZXRUaWxlRnVuY3Rpb24odGhpcy5zb3VyY2VaXywgc3JjWCwgc3JjWSwgcGl4ZWxSYXRpbyk7XG4gICAgICAgIGlmICh0aWxlKSB7XG4gICAgICAgICAgdGhpcy5zb3VyY2VUaWxlc18ucHVzaCh0aWxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnNvdXJjZVRpbGVzXy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc3RhdGUgPSBfb2xfVGlsZVN0YXRlXy5FTVBUWTtcbiAgICB9XG4gIH1cbn07XG5cbl9vbF8uaW5oZXJpdHMoX29sX3JlcHJval9UaWxlXywgX29sX1RpbGVfKTtcblxuXG4vKipcbiAqIEBpbmhlcml0RG9jXG4gKi9cbl9vbF9yZXByb2pfVGlsZV8ucHJvdG90eXBlLmRpc3Bvc2VJbnRlcm5hbCA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5zdGF0ZSA9PSBfb2xfVGlsZVN0YXRlXy5MT0FESU5HKSB7XG4gICAgdGhpcy51bmxpc3RlblNvdXJjZXNfKCk7XG4gIH1cbiAgX29sX1RpbGVfLnByb3RvdHlwZS5kaXNwb3NlSW50ZXJuYWwuY2FsbCh0aGlzKTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIEhUTUwgQ2FudmFzIGVsZW1lbnQgZm9yIHRoaXMgdGlsZS5cbiAqIEByZXR1cm4ge0hUTUxDYW52YXNFbGVtZW50fSBDYW52YXMuXG4gKi9cbl9vbF9yZXByb2pfVGlsZV8ucHJvdG90eXBlLmdldEltYWdlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmNhbnZhc187XG59O1xuXG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuX29sX3JlcHJval9UaWxlXy5wcm90b3R5cGUucmVwcm9qZWN0XyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc291cmNlcyA9IFtdO1xuICB0aGlzLnNvdXJjZVRpbGVzXy5mb3JFYWNoKGZ1bmN0aW9uKHRpbGUsIGksIGFycikge1xuICAgIGlmICh0aWxlICYmIHRpbGUuZ2V0U3RhdGUoKSA9PSBfb2xfVGlsZVN0YXRlXy5MT0FERUQpIHtcbiAgICAgIHNvdXJjZXMucHVzaCh7XG4gICAgICAgIGV4dGVudDogdGhpcy5zb3VyY2VUaWxlR3JpZF8uZ2V0VGlsZUNvb3JkRXh0ZW50KHRpbGUudGlsZUNvb3JkKSxcbiAgICAgICAgaW1hZ2U6IHRpbGUuZ2V0SW1hZ2UoKVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB0aGlzKTtcbiAgdGhpcy5zb3VyY2VUaWxlc18ubGVuZ3RoID0gMDtcblxuICBpZiAoc291cmNlcy5sZW5ndGggPT09IDApIHtcbiAgICB0aGlzLnN0YXRlID0gX29sX1RpbGVTdGF0ZV8uRVJST1I7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHogPSB0aGlzLndyYXBwZWRUaWxlQ29vcmRfWzBdO1xuICAgIHZhciBzaXplID0gdGhpcy50YXJnZXRUaWxlR3JpZF8uZ2V0VGlsZVNpemUoeik7XG4gICAgdmFyIHdpZHRoID0gdHlwZW9mIHNpemUgPT09ICdudW1iZXInID8gc2l6ZSA6IHNpemVbMF07XG4gICAgdmFyIGhlaWdodCA9IHR5cGVvZiBzaXplID09PSAnbnVtYmVyJyA/IHNpemUgOiBzaXplWzFdO1xuICAgIHZhciB0YXJnZXRSZXNvbHV0aW9uID0gdGhpcy50YXJnZXRUaWxlR3JpZF8uZ2V0UmVzb2x1dGlvbih6KTtcbiAgICB2YXIgc291cmNlUmVzb2x1dGlvbiA9IHRoaXMuc291cmNlVGlsZUdyaWRfLmdldFJlc29sdXRpb24odGhpcy5zb3VyY2VaXyk7XG5cbiAgICB2YXIgdGFyZ2V0RXh0ZW50ID0gdGhpcy50YXJnZXRUaWxlR3JpZF8uZ2V0VGlsZUNvb3JkRXh0ZW50KFxuICAgICAgICB0aGlzLndyYXBwZWRUaWxlQ29vcmRfKTtcbiAgICB0aGlzLmNhbnZhc18gPSBfb2xfcmVwcm9qXy5yZW5kZXIod2lkdGgsIGhlaWdodCwgdGhpcy5waXhlbFJhdGlvXyxcbiAgICAgICAgc291cmNlUmVzb2x1dGlvbiwgdGhpcy5zb3VyY2VUaWxlR3JpZF8uZ2V0RXh0ZW50KCksXG4gICAgICAgIHRhcmdldFJlc29sdXRpb24sIHRhcmdldEV4dGVudCwgdGhpcy50cmlhbmd1bGF0aW9uXywgc291cmNlcyxcbiAgICAgICAgdGhpcy5ndXR0ZXJfLCB0aGlzLnJlbmRlckVkZ2VzXyk7XG5cbiAgICB0aGlzLnN0YXRlID0gX29sX1RpbGVTdGF0ZV8uTE9BREVEO1xuICB9XG4gIHRoaXMuY2hhbmdlZCgpO1xufTtcblxuXG4vKipcbiAqIEBpbmhlcml0RG9jXG4gKi9cbl9vbF9yZXByb2pfVGlsZV8ucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuc3RhdGUgPT0gX29sX1RpbGVTdGF0ZV8uSURMRSkge1xuICAgIHRoaXMuc3RhdGUgPSBfb2xfVGlsZVN0YXRlXy5MT0FESU5HO1xuICAgIHRoaXMuY2hhbmdlZCgpO1xuXG4gICAgdmFyIGxlZnRUb0xvYWQgPSAwO1xuXG4gICAgdGhpcy5zb3VyY2VzTGlzdGVuZXJLZXlzXyA9IFtdO1xuICAgIHRoaXMuc291cmNlVGlsZXNfLmZvckVhY2goZnVuY3Rpb24odGlsZSwgaSwgYXJyKSB7XG4gICAgICB2YXIgc3RhdGUgPSB0aWxlLmdldFN0YXRlKCk7XG4gICAgICBpZiAoc3RhdGUgPT0gX29sX1RpbGVTdGF0ZV8uSURMRSB8fCBzdGF0ZSA9PSBfb2xfVGlsZVN0YXRlXy5MT0FESU5HKSB7XG4gICAgICAgIGxlZnRUb0xvYWQrKztcblxuICAgICAgICB2YXIgc291cmNlTGlzdGVuS2V5O1xuICAgICAgICBzb3VyY2VMaXN0ZW5LZXkgPSBfb2xfZXZlbnRzXy5saXN0ZW4odGlsZSwgX29sX2V2ZW50c19FdmVudFR5cGVfLkNIQU5HRSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgdmFyIHN0YXRlID0gdGlsZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICBpZiAoc3RhdGUgPT0gX29sX1RpbGVTdGF0ZV8uTE9BREVEIHx8XG4gICAgICAgICAgICAgICAgICBzdGF0ZSA9PSBfb2xfVGlsZVN0YXRlXy5FUlJPUiB8fFxuICAgICAgICAgICAgICAgICAgc3RhdGUgPT0gX29sX1RpbGVTdGF0ZV8uRU1QVFkpIHtcbiAgICAgICAgICAgICAgICBfb2xfZXZlbnRzXy51bmxpc3RlbkJ5S2V5KHNvdXJjZUxpc3RlbktleSk7XG4gICAgICAgICAgICAgICAgbGVmdFRvTG9hZC0tO1xuICAgICAgICAgICAgICAgIGlmIChsZWZ0VG9Mb2FkID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnVubGlzdGVuU291cmNlc18oKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVwcm9qZWN0XygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHRoaXMuc291cmNlc0xpc3RlbmVyS2V5c18ucHVzaChzb3VyY2VMaXN0ZW5LZXkpO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuXG4gICAgdGhpcy5zb3VyY2VUaWxlc18uZm9yRWFjaChmdW5jdGlvbih0aWxlLCBpLCBhcnIpIHtcbiAgICAgIHZhciBzdGF0ZSA9IHRpbGUuZ2V0U3RhdGUoKTtcbiAgICAgIGlmIChzdGF0ZSA9PSBfb2xfVGlsZVN0YXRlXy5JRExFKSB7XG4gICAgICAgIHRpbGUubG9hZCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGxlZnRUb0xvYWQgPT09IDApIHtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5yZXByb2plY3RfLmJpbmQodGhpcyksIDApO1xuICAgIH1cbiAgfVxufTtcblxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbl9vbF9yZXByb2pfVGlsZV8ucHJvdG90eXBlLnVubGlzdGVuU291cmNlc18gPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zb3VyY2VzTGlzdGVuZXJLZXlzXy5mb3JFYWNoKF9vbF9ldmVudHNfLnVubGlzdGVuQnlLZXkpO1xuICB0aGlzLnNvdXJjZXNMaXN0ZW5lcktleXNfID0gbnVsbDtcbn07XG5leHBvcnQgZGVmYXVsdCBfb2xfcmVwcm9qX1RpbGVfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvcmVwcm9qL3RpbGUuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfb2xfIGZyb20gJy4uL2luZGV4LmpzJztcbmltcG9ydCBfb2xfVGlsZVN0YXRlXyBmcm9tICcuLi90aWxlc3RhdGUuanMnO1xuaW1wb3J0IF9vbF9UaWxlVXJsRnVuY3Rpb25fIGZyb20gJy4uL3RpbGV1cmxmdW5jdGlvbi5qcyc7XG5pbXBvcnQgX29sX3NvdXJjZV9UaWxlXyBmcm9tICcuLi9zb3VyY2UvdGlsZS5qcyc7XG5pbXBvcnQgX29sX3NvdXJjZV9UaWxlRXZlbnRUeXBlXyBmcm9tICcuLi9zb3VyY2UvdGlsZWV2ZW50dHlwZS5qcyc7XG5pbXBvcnQgX29sX3RpbGVjb29yZF8gZnJvbSAnLi4vdGlsZWNvb3JkLmpzJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBCYXNlIGNsYXNzIGZvciBzb3VyY2VzIHByb3ZpZGluZyB0aWxlcyBkaXZpZGVkIGludG8gYSB0aWxlIGdyaWQgb3ZlciBodHRwLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQGFic3RyYWN0XG4gKiBAZmlyZXMgb2wuc291cmNlLlRpbGUuRXZlbnRcbiAqIEBleHRlbmRzIHtvbC5zb3VyY2UuVGlsZX1cbiAqIEBwYXJhbSB7b2wuU291cmNlVXJsVGlsZU9wdGlvbnN9IG9wdGlvbnMgSW1hZ2UgdGlsZSBvcHRpb25zLlxuICovXG52YXIgX29sX3NvdXJjZV9VcmxUaWxlXyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblxuICBfb2xfc291cmNlX1RpbGVfLmNhbGwodGhpcywge1xuICAgIGF0dHJpYnV0aW9uczogb3B0aW9ucy5hdHRyaWJ1dGlvbnMsXG4gICAgY2FjaGVTaXplOiBvcHRpb25zLmNhY2hlU2l6ZSxcbiAgICBleHRlbnQ6IG9wdGlvbnMuZXh0ZW50LFxuICAgIGxvZ286IG9wdGlvbnMubG9nbyxcbiAgICBvcGFxdWU6IG9wdGlvbnMub3BhcXVlLFxuICAgIHByb2plY3Rpb246IG9wdGlvbnMucHJvamVjdGlvbixcbiAgICBzdGF0ZTogb3B0aW9ucy5zdGF0ZSxcbiAgICB0aWxlR3JpZDogb3B0aW9ucy50aWxlR3JpZCxcbiAgICB0aWxlUGl4ZWxSYXRpbzogb3B0aW9ucy50aWxlUGl4ZWxSYXRpbyxcbiAgICB3cmFwWDogb3B0aW9ucy53cmFwWCxcbiAgICB0cmFuc2l0aW9uOiBvcHRpb25zLnRyYW5zaXRpb25cbiAgfSk7XG5cbiAgLyoqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHR5cGUge29sLlRpbGVMb2FkRnVuY3Rpb25UeXBlfVxuICAgKi9cbiAgdGhpcy50aWxlTG9hZEZ1bmN0aW9uID0gb3B0aW9ucy50aWxlTG9hZEZ1bmN0aW9uO1xuXG4gIC8qKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEB0eXBlIHtvbC5UaWxlVXJsRnVuY3Rpb25UeXBlfVxuICAgKi9cbiAgdGhpcy50aWxlVXJsRnVuY3Rpb24gPSB0aGlzLmZpeGVkVGlsZVVybEZ1bmN0aW9uID9cbiAgICB0aGlzLmZpeGVkVGlsZVVybEZ1bmN0aW9uLmJpbmQodGhpcykgOlxuICAgIF9vbF9UaWxlVXJsRnVuY3Rpb25fLm51bGxUaWxlVXJsRnVuY3Rpb247XG5cbiAgLyoqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHR5cGUgeyFBcnJheS48c3RyaW5nPnxudWxsfVxuICAgKi9cbiAgdGhpcy51cmxzID0gbnVsbDtcblxuICBpZiAob3B0aW9ucy51cmxzKSB7XG4gICAgdGhpcy5zZXRVcmxzKG9wdGlvbnMudXJscyk7XG4gIH0gZWxzZSBpZiAob3B0aW9ucy51cmwpIHtcbiAgICB0aGlzLnNldFVybChvcHRpb25zLnVybCk7XG4gIH1cbiAgaWYgKG9wdGlvbnMudGlsZVVybEZ1bmN0aW9uKSB7XG4gICAgdGhpcy5zZXRUaWxlVXJsRnVuY3Rpb24ob3B0aW9ucy50aWxlVXJsRnVuY3Rpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtPYmplY3QuPG51bWJlciwgYm9vbGVhbj59XG4gICAqL1xuICB0aGlzLnRpbGVMb2FkaW5nS2V5c18gPSB7fTtcblxufTtcblxuX29sXy5pbmhlcml0cyhfb2xfc291cmNlX1VybFRpbGVfLCBfb2xfc291cmNlX1RpbGVfKTtcblxuXG4vKipcbiAqIEB0eXBlIHtvbC5UaWxlVXJsRnVuY3Rpb25UeXBlfHVuZGVmaW5lZH1cbiAqIEBwcm90ZWN0ZWRcbiAqL1xuX29sX3NvdXJjZV9VcmxUaWxlXy5wcm90b3R5cGUuZml4ZWRUaWxlVXJsRnVuY3Rpb247XG5cbi8qKlxuICogUmV0dXJuIHRoZSB0aWxlIGxvYWQgZnVuY3Rpb24gb2YgdGhlIHNvdXJjZS5cbiAqIEByZXR1cm4ge29sLlRpbGVMb2FkRnVuY3Rpb25UeXBlfSBUaWxlTG9hZEZ1bmN0aW9uXG4gKiBAYXBpXG4gKi9cbl9vbF9zb3VyY2VfVXJsVGlsZV8ucHJvdG90eXBlLmdldFRpbGVMb2FkRnVuY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudGlsZUxvYWRGdW5jdGlvbjtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm4gdGhlIHRpbGUgVVJMIGZ1bmN0aW9uIG9mIHRoZSBzb3VyY2UuXG4gKiBAcmV0dXJuIHtvbC5UaWxlVXJsRnVuY3Rpb25UeXBlfSBUaWxlVXJsRnVuY3Rpb25cbiAqIEBhcGlcbiAqL1xuX29sX3NvdXJjZV9VcmxUaWxlXy5wcm90b3R5cGUuZ2V0VGlsZVVybEZ1bmN0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnRpbGVVcmxGdW5jdGlvbjtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm4gdGhlIFVSTHMgdXNlZCBmb3IgdGhpcyBzb3VyY2UuXG4gKiBXaGVuIGEgdGlsZVVybEZ1bmN0aW9uIGlzIHVzZWQgaW5zdGVhZCBvZiB1cmwgb3IgdXJscyxcbiAqIG51bGwgd2lsbCBiZSByZXR1cm5lZC5cbiAqIEByZXR1cm4geyFBcnJheS48c3RyaW5nPnxudWxsfSBVUkxzLlxuICogQGFwaVxuICovXG5fb2xfc291cmNlX1VybFRpbGVfLnByb3RvdHlwZS5nZXRVcmxzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnVybHM7XG59O1xuXG5cbi8qKlxuICogSGFuZGxlIHRpbGUgY2hhbmdlIGV2ZW50cy5cbiAqIEBwYXJhbSB7b2wuZXZlbnRzLkV2ZW50fSBldmVudCBFdmVudC5cbiAqIEBwcm90ZWN0ZWRcbiAqL1xuX29sX3NvdXJjZV9VcmxUaWxlXy5wcm90b3R5cGUuaGFuZGxlVGlsZUNoYW5nZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIHZhciB0aWxlID0gLyoqIEB0eXBlIHtvbC5UaWxlfSAqLyAoZXZlbnQudGFyZ2V0KTtcbiAgdmFyIHVpZCA9IF9vbF8uZ2V0VWlkKHRpbGUpO1xuICB2YXIgdGlsZVN0YXRlID0gdGlsZS5nZXRTdGF0ZSgpO1xuICB2YXIgdHlwZTtcbiAgaWYgKHRpbGVTdGF0ZSA9PSBfb2xfVGlsZVN0YXRlXy5MT0FESU5HKSB7XG4gICAgdGhpcy50aWxlTG9hZGluZ0tleXNfW3VpZF0gPSB0cnVlO1xuICAgIHR5cGUgPSBfb2xfc291cmNlX1RpbGVFdmVudFR5cGVfLlRJTEVMT0FEU1RBUlQ7XG4gIH0gZWxzZSBpZiAodWlkIGluIHRoaXMudGlsZUxvYWRpbmdLZXlzXykge1xuICAgIGRlbGV0ZSB0aGlzLnRpbGVMb2FkaW5nS2V5c19bdWlkXTtcbiAgICB0eXBlID0gdGlsZVN0YXRlID09IF9vbF9UaWxlU3RhdGVfLkVSUk9SID8gX29sX3NvdXJjZV9UaWxlRXZlbnRUeXBlXy5USUxFTE9BREVSUk9SIDpcbiAgICAgICh0aWxlU3RhdGUgPT0gX29sX1RpbGVTdGF0ZV8uTE9BREVEIHx8IHRpbGVTdGF0ZSA9PSBfb2xfVGlsZVN0YXRlXy5BQk9SVCkgP1xuICAgICAgICBfb2xfc291cmNlX1RpbGVFdmVudFR5cGVfLlRJTEVMT0FERU5EIDogdW5kZWZpbmVkO1xuICB9XG4gIGlmICh0eXBlICE9IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX29sX3NvdXJjZV9UaWxlXy5FdmVudCh0eXBlLCB0aWxlKSk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBTZXQgdGhlIHRpbGUgbG9hZCBmdW5jdGlvbiBvZiB0aGUgc291cmNlLlxuICogQHBhcmFtIHtvbC5UaWxlTG9hZEZ1bmN0aW9uVHlwZX0gdGlsZUxvYWRGdW5jdGlvbiBUaWxlIGxvYWQgZnVuY3Rpb24uXG4gKiBAYXBpXG4gKi9cbl9vbF9zb3VyY2VfVXJsVGlsZV8ucHJvdG90eXBlLnNldFRpbGVMb2FkRnVuY3Rpb24gPSBmdW5jdGlvbih0aWxlTG9hZEZ1bmN0aW9uKSB7XG4gIHRoaXMudGlsZUNhY2hlLmNsZWFyKCk7XG4gIHRoaXMudGlsZUxvYWRGdW5jdGlvbiA9IHRpbGVMb2FkRnVuY3Rpb247XG4gIHRoaXMuY2hhbmdlZCgpO1xufTtcblxuXG4vKipcbiAqIFNldCB0aGUgdGlsZSBVUkwgZnVuY3Rpb24gb2YgdGhlIHNvdXJjZS5cbiAqIEBwYXJhbSB7b2wuVGlsZVVybEZ1bmN0aW9uVHlwZX0gdGlsZVVybEZ1bmN0aW9uIFRpbGUgVVJMIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtzdHJpbmc9fSBvcHRfa2V5IE9wdGlvbmFsIG5ldyB0aWxlIGtleSBmb3IgdGhlIHNvdXJjZS5cbiAqIEBhcGlcbiAqL1xuX29sX3NvdXJjZV9VcmxUaWxlXy5wcm90b3R5cGUuc2V0VGlsZVVybEZ1bmN0aW9uID0gZnVuY3Rpb24odGlsZVVybEZ1bmN0aW9uLCBvcHRfa2V5KSB7XG4gIHRoaXMudGlsZVVybEZ1bmN0aW9uID0gdGlsZVVybEZ1bmN0aW9uO1xuICB0aGlzLnRpbGVDYWNoZS5wcnVuZUV4Y2VwdE5ld2VzdFooKTtcbiAgaWYgKHR5cGVvZiBvcHRfa2V5ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuc2V0S2V5KG9wdF9rZXkpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuY2hhbmdlZCgpO1xuICB9XG59O1xuXG5cbi8qKlxuICogU2V0IHRoZSBVUkwgdG8gdXNlIGZvciByZXF1ZXN0cy5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVVJMLlxuICogQGFwaVxuICovXG5fb2xfc291cmNlX1VybFRpbGVfLnByb3RvdHlwZS5zZXRVcmwgPSBmdW5jdGlvbih1cmwpIHtcbiAgdmFyIHVybHMgPSB0aGlzLnVybHMgPSBfb2xfVGlsZVVybEZ1bmN0aW9uXy5leHBhbmRVcmwodXJsKTtcbiAgdGhpcy5zZXRUaWxlVXJsRnVuY3Rpb24odGhpcy5maXhlZFRpbGVVcmxGdW5jdGlvbiA/XG4gICAgdGhpcy5maXhlZFRpbGVVcmxGdW5jdGlvbi5iaW5kKHRoaXMpIDpcbiAgICBfb2xfVGlsZVVybEZ1bmN0aW9uXy5jcmVhdGVGcm9tVGVtcGxhdGVzKHVybHMsIHRoaXMudGlsZUdyaWQpLCB1cmwpO1xufTtcblxuXG4vKipcbiAqIFNldCB0aGUgVVJMcyB0byB1c2UgZm9yIHJlcXVlc3RzLlxuICogQHBhcmFtIHtBcnJheS48c3RyaW5nPn0gdXJscyBVUkxzLlxuICogQGFwaVxuICovXG5fb2xfc291cmNlX1VybFRpbGVfLnByb3RvdHlwZS5zZXRVcmxzID0gZnVuY3Rpb24odXJscykge1xuICB0aGlzLnVybHMgPSB1cmxzO1xuICB2YXIga2V5ID0gdXJscy5qb2luKCdcXG4nKTtcbiAgdGhpcy5zZXRUaWxlVXJsRnVuY3Rpb24odGhpcy5maXhlZFRpbGVVcmxGdW5jdGlvbiA/XG4gICAgdGhpcy5maXhlZFRpbGVVcmxGdW5jdGlvbi5iaW5kKHRoaXMpIDpcbiAgICBfb2xfVGlsZVVybEZ1bmN0aW9uXy5jcmVhdGVGcm9tVGVtcGxhdGVzKHVybHMsIHRoaXMudGlsZUdyaWQpLCBrZXkpO1xufTtcblxuXG4vKipcbiAqIEBpbmhlcml0RG9jXG4gKi9cbl9vbF9zb3VyY2VfVXJsVGlsZV8ucHJvdG90eXBlLnVzZVRpbGUgPSBmdW5jdGlvbih6LCB4LCB5KSB7XG4gIHZhciB0aWxlQ29vcmRLZXkgPSBfb2xfdGlsZWNvb3JkXy5nZXRLZXlaWFkoeiwgeCwgeSk7XG4gIGlmICh0aGlzLnRpbGVDYWNoZS5jb250YWluc0tleSh0aWxlQ29vcmRLZXkpKSB7XG4gICAgdGhpcy50aWxlQ2FjaGUuZ2V0KHRpbGVDb29yZEtleSk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBfb2xfc291cmNlX1VybFRpbGVfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvc291cmNlL3VybHRpbGUuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfb2xfYXNzZXJ0c18gZnJvbSAnLi9hc3NlcnRzLmpzJztcbmltcG9ydCBfb2xfbWF0aF8gZnJvbSAnLi9tYXRoLmpzJztcbmltcG9ydCBfb2xfdGlsZWNvb3JkXyBmcm9tICcuL3RpbGVjb29yZC5qcyc7XG52YXIgX29sX1RpbGVVcmxGdW5jdGlvbl8gPSB7fTtcblxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZSBUZW1wbGF0ZS5cbiAqIEBwYXJhbSB7b2wudGlsZWdyaWQuVGlsZUdyaWR9IHRpbGVHcmlkIFRpbGUgZ3JpZC5cbiAqIEByZXR1cm4ge29sLlRpbGVVcmxGdW5jdGlvblR5cGV9IFRpbGUgVVJMIGZ1bmN0aW9uLlxuICovXG5fb2xfVGlsZVVybEZ1bmN0aW9uXy5jcmVhdGVGcm9tVGVtcGxhdGUgPSBmdW5jdGlvbih0ZW1wbGF0ZSwgdGlsZUdyaWQpIHtcbiAgdmFyIHpSZWdFeCA9IC9cXHt6XFx9L2c7XG4gIHZhciB4UmVnRXggPSAvXFx7eFxcfS9nO1xuICB2YXIgeVJlZ0V4ID0gL1xce3lcXH0vZztcbiAgdmFyIGRhc2hZUmVnRXggPSAvXFx7LXlcXH0vZztcbiAgcmV0dXJuIChcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge29sLlRpbGVDb29yZH0gdGlsZUNvb3JkIFRpbGUgQ29vcmRpbmF0ZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGl4ZWxSYXRpbyBQaXhlbCByYXRpby5cbiAgICAgKiBAcGFyYW0ge29sLnByb2ouUHJvamVjdGlvbn0gcHJvamVjdGlvbiBQcm9qZWN0aW9uLlxuICAgICAqIEByZXR1cm4ge3N0cmluZ3x1bmRlZmluZWR9IFRpbGUgVVJMLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uKHRpbGVDb29yZCwgcGl4ZWxSYXRpbywgcHJvamVjdGlvbikge1xuICAgICAgaWYgKCF0aWxlQ29vcmQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZS5yZXBsYWNlKHpSZWdFeCwgdGlsZUNvb3JkWzBdLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAucmVwbGFjZSh4UmVnRXgsIHRpbGVDb29yZFsxXS50b1N0cmluZygpKVxuICAgICAgICAgICAgLnJlcGxhY2UoeVJlZ0V4LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdmFyIHkgPSAtdGlsZUNvb3JkWzJdIC0gMTtcbiAgICAgICAgICAgICAgcmV0dXJuIHkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAucmVwbGFjZShkYXNoWVJlZ0V4LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdmFyIHogPSB0aWxlQ29vcmRbMF07XG4gICAgICAgICAgICAgIHZhciByYW5nZSA9IHRpbGVHcmlkLmdldEZ1bGxUaWxlUmFuZ2Uoeik7XG4gICAgICAgICAgICAgIF9vbF9hc3NlcnRzXy5hc3NlcnQocmFuZ2UsIDU1KTsgLy8gVGhlIHsteX0gcGxhY2Vob2xkZXIgcmVxdWlyZXMgYSB0aWxlIGdyaWQgd2l0aCBleHRlbnRcbiAgICAgICAgICAgICAgdmFyIHkgPSByYW5nZS5nZXRIZWlnaHQoKSArIHRpbGVDb29yZFsyXTtcbiAgICAgICAgICAgICAgcmV0dXJuIHkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5LjxzdHJpbmc+fSB0ZW1wbGF0ZXMgVGVtcGxhdGVzLlxuICogQHBhcmFtIHtvbC50aWxlZ3JpZC5UaWxlR3JpZH0gdGlsZUdyaWQgVGlsZSBncmlkLlxuICogQHJldHVybiB7b2wuVGlsZVVybEZ1bmN0aW9uVHlwZX0gVGlsZSBVUkwgZnVuY3Rpb24uXG4gKi9cbl9vbF9UaWxlVXJsRnVuY3Rpb25fLmNyZWF0ZUZyb21UZW1wbGF0ZXMgPSBmdW5jdGlvbih0ZW1wbGF0ZXMsIHRpbGVHcmlkKSB7XG4gIHZhciBsZW4gPSB0ZW1wbGF0ZXMubGVuZ3RoO1xuICB2YXIgdGlsZVVybEZ1bmN0aW9ucyA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdGlsZVVybEZ1bmN0aW9uc1tpXSA9IF9vbF9UaWxlVXJsRnVuY3Rpb25fLmNyZWF0ZUZyb21UZW1wbGF0ZShcbiAgICAgICAgdGVtcGxhdGVzW2ldLCB0aWxlR3JpZCk7XG4gIH1cbiAgcmV0dXJuIF9vbF9UaWxlVXJsRnVuY3Rpb25fLmNyZWF0ZUZyb21UaWxlVXJsRnVuY3Rpb25zKHRpbGVVcmxGdW5jdGlvbnMpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXkuPG9sLlRpbGVVcmxGdW5jdGlvblR5cGU+fSB0aWxlVXJsRnVuY3Rpb25zIFRpbGUgVVJMIEZ1bmN0aW9ucy5cbiAqIEByZXR1cm4ge29sLlRpbGVVcmxGdW5jdGlvblR5cGV9IFRpbGUgVVJMIGZ1bmN0aW9uLlxuICovXG5fb2xfVGlsZVVybEZ1bmN0aW9uXy5jcmVhdGVGcm9tVGlsZVVybEZ1bmN0aW9ucyA9IGZ1bmN0aW9uKHRpbGVVcmxGdW5jdGlvbnMpIHtcbiAgaWYgKHRpbGVVcmxGdW5jdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIHRpbGVVcmxGdW5jdGlvbnNbMF07XG4gIH1cbiAgcmV0dXJuIChcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge29sLlRpbGVDb29yZH0gdGlsZUNvb3JkIFRpbGUgQ29vcmRpbmF0ZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGl4ZWxSYXRpbyBQaXhlbCByYXRpby5cbiAgICAgKiBAcGFyYW0ge29sLnByb2ouUHJvamVjdGlvbn0gcHJvamVjdGlvbiBQcm9qZWN0aW9uLlxuICAgICAqIEByZXR1cm4ge3N0cmluZ3x1bmRlZmluZWR9IFRpbGUgVVJMLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uKHRpbGVDb29yZCwgcGl4ZWxSYXRpbywgcHJvamVjdGlvbikge1xuICAgICAgaWYgKCF0aWxlQ29vcmQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBoID0gX29sX3RpbGVjb29yZF8uaGFzaCh0aWxlQ29vcmQpO1xuICAgICAgICB2YXIgaW5kZXggPSBfb2xfbWF0aF8ubW9kdWxvKGgsIHRpbGVVcmxGdW5jdGlvbnMubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHRpbGVVcmxGdW5jdGlvbnNbaW5kZXhdKHRpbGVDb29yZCwgcGl4ZWxSYXRpbywgcHJvamVjdGlvbik7XG4gICAgICB9XG4gICAgfVxuICApO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wuVGlsZUNvb3JkfSB0aWxlQ29vcmQgVGlsZSBjb29yZGluYXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IHBpeGVsUmF0aW8gUGl4ZWwgcmF0aW8uXG4gKiBAcGFyYW0ge29sLnByb2ouUHJvamVjdGlvbn0gcHJvamVjdGlvbiBQcm9qZWN0aW9uLlxuICogQHJldHVybiB7c3RyaW5nfHVuZGVmaW5lZH0gVGlsZSBVUkwuXG4gKi9cbl9vbF9UaWxlVXJsRnVuY3Rpb25fLm51bGxUaWxlVXJsRnVuY3Rpb24gPSBmdW5jdGlvbih0aWxlQ29vcmQsIHBpeGVsUmF0aW8sIHByb2plY3Rpb24pIHtcbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFVSTC5cbiAqIEByZXR1cm4ge0FycmF5LjxzdHJpbmc+fSBBcnJheSBvZiB1cmxzLlxuICovXG5fb2xfVGlsZVVybEZ1bmN0aW9uXy5leHBhbmRVcmwgPSBmdW5jdGlvbih1cmwpIHtcbiAgdmFyIHVybHMgPSBbXTtcbiAgdmFyIG1hdGNoID0gL1xceyhbYS16XSktKFthLXpdKVxcfS8uZXhlYyh1cmwpO1xuICBpZiAobWF0Y2gpIHtcbiAgICAvLyBjaGFyIHJhbmdlXG4gICAgdmFyIHN0YXJ0Q2hhckNvZGUgPSBtYXRjaFsxXS5jaGFyQ29kZUF0KDApO1xuICAgIHZhciBzdG9wQ2hhckNvZGUgPSBtYXRjaFsyXS5jaGFyQ29kZUF0KDApO1xuICAgIHZhciBjaGFyQ29kZTtcbiAgICBmb3IgKGNoYXJDb2RlID0gc3RhcnRDaGFyQ29kZTsgY2hhckNvZGUgPD0gc3RvcENoYXJDb2RlOyArK2NoYXJDb2RlKSB7XG4gICAgICB1cmxzLnB1c2godXJsLnJlcGxhY2UobWF0Y2hbMF0sIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhckNvZGUpKSk7XG4gICAgfVxuICAgIHJldHVybiB1cmxzO1xuICB9XG4gIG1hdGNoID0gbWF0Y2ggPSAvXFx7KFxcZCspLShcXGQrKVxcfS8uZXhlYyh1cmwpO1xuICBpZiAobWF0Y2gpIHtcbiAgICAvLyBudW1iZXIgcmFuZ2VcbiAgICB2YXIgc3RvcCA9IHBhcnNlSW50KG1hdGNoWzJdLCAxMCk7XG4gICAgZm9yICh2YXIgaSA9IHBhcnNlSW50KG1hdGNoWzFdLCAxMCk7IGkgPD0gc3RvcDsgaSsrKSB7XG4gICAgICB1cmxzLnB1c2godXJsLnJlcGxhY2UobWF0Y2hbMF0sIGkudG9TdHJpbmcoKSkpO1xuICAgIH1cbiAgICByZXR1cm4gdXJscztcbiAgfVxuICB1cmxzLnB1c2godXJsKTtcbiAgcmV0dXJuIHVybHM7XG59O1xuZXhwb3J0IGRlZmF1bHQgX29sX1RpbGVVcmxGdW5jdGlvbl87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC90aWxldXJsZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfb2xfIGZyb20gJy4uL2luZGV4LmpzJztcbmltcG9ydCBfb2xfVGlsZUNhY2hlXyBmcm9tICcuLi90aWxlY2FjaGUuanMnO1xuaW1wb3J0IF9vbF9UaWxlU3RhdGVfIGZyb20gJy4uL3RpbGVzdGF0ZS5qcyc7XG5pbXBvcnQgX29sX2V2ZW50c19FdmVudF8gZnJvbSAnLi4vZXZlbnRzL2V2ZW50LmpzJztcbmltcG9ydCBfb2xfcHJval8gZnJvbSAnLi4vcHJvai5qcyc7XG5pbXBvcnQgX29sX3NpemVfIGZyb20gJy4uL3NpemUuanMnO1xuaW1wb3J0IF9vbF9zb3VyY2VfU291cmNlXyBmcm9tICcuLi9zb3VyY2Uvc291cmNlLmpzJztcbmltcG9ydCBfb2xfdGlsZWNvb3JkXyBmcm9tICcuLi90aWxlY29vcmQuanMnO1xuaW1wb3J0IF9vbF90aWxlZ3JpZF8gZnJvbSAnLi4vdGlsZWdyaWQuanMnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIEFic3RyYWN0IGJhc2UgY2xhc3M7IG5vcm1hbGx5IG9ubHkgdXNlZCBmb3IgY3JlYXRpbmcgc3ViY2xhc3NlcyBhbmQgbm90XG4gKiBpbnN0YW50aWF0ZWQgaW4gYXBwcy5cbiAqIEJhc2UgY2xhc3MgZm9yIHNvdXJjZXMgcHJvdmlkaW5nIGltYWdlcyBkaXZpZGVkIGludG8gYSB0aWxlIGdyaWQuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAYWJzdHJhY3RcbiAqIEBleHRlbmRzIHtvbC5zb3VyY2UuU291cmNlfVxuICogQHBhcmFtIHtvbC5Tb3VyY2VUaWxlT3B0aW9uc30gb3B0aW9ucyBUaWxlIHNvdXJjZSBvcHRpb25zLlxuICogQGFwaVxuICovXG52YXIgX29sX3NvdXJjZV9UaWxlXyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblxuICBfb2xfc291cmNlX1NvdXJjZV8uY2FsbCh0aGlzLCB7XG4gICAgYXR0cmlidXRpb25zOiBvcHRpb25zLmF0dHJpYnV0aW9ucyxcbiAgICBleHRlbnQ6IG9wdGlvbnMuZXh0ZW50LFxuICAgIGxvZ286IG9wdGlvbnMubG9nbyxcbiAgICBwcm9qZWN0aW9uOiBvcHRpb25zLnByb2plY3Rpb24sXG4gICAgc3RhdGU6IG9wdGlvbnMuc3RhdGUsXG4gICAgd3JhcFg6IG9wdGlvbnMud3JhcFhcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgdGhpcy5vcGFxdWVfID0gb3B0aW9ucy5vcGFxdWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMub3BhcXVlIDogZmFsc2U7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICB0aGlzLnRpbGVQaXhlbFJhdGlvXyA9IG9wdGlvbnMudGlsZVBpeGVsUmF0aW8gIT09IHVuZGVmaW5lZCA/XG4gICAgb3B0aW9ucy50aWxlUGl4ZWxSYXRpbyA6IDE7XG5cbiAgLyoqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHR5cGUge29sLnRpbGVncmlkLlRpbGVHcmlkfVxuICAgKi9cbiAgdGhpcy50aWxlR3JpZCA9IG9wdGlvbnMudGlsZUdyaWQgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMudGlsZUdyaWQgOiBudWxsO1xuXG4gIC8qKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEB0eXBlIHtvbC5UaWxlQ2FjaGV9XG4gICAqL1xuICB0aGlzLnRpbGVDYWNoZSA9IG5ldyBfb2xfVGlsZUNhY2hlXyhvcHRpb25zLmNhY2hlU2l6ZSk7XG5cbiAgLyoqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHR5cGUge29sLlNpemV9XG4gICAqL1xuICB0aGlzLnRtcFNpemUgPSBbMCwgMF07XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICB0aGlzLmtleV8gPSAnJztcblxuICAvKipcbiAgICogQHByb3RlY3RlZFxuICAgKiBAdHlwZSB7b2x4LlRpbGVPcHRpb25zfVxuICAgKi9cbiAgdGhpcy50aWxlT3B0aW9ucyA9IHt0cmFuc2l0aW9uOiBvcHRpb25zLnRyYW5zaXRpb259O1xuXG59O1xuXG5fb2xfLmluaGVyaXRzKF9vbF9zb3VyY2VfVGlsZV8sIF9vbF9zb3VyY2VfU291cmNlXyk7XG5cblxuLyoqXG4gKiBAcmV0dXJuIHtib29sZWFufSBDYW4gZXhwaXJlIGNhY2hlLlxuICovXG5fb2xfc291cmNlX1RpbGVfLnByb3RvdHlwZS5jYW5FeHBpcmVDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy50aWxlQ2FjaGUuY2FuRXhwaXJlQ2FjaGUoKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge29sLnByb2ouUHJvamVjdGlvbn0gcHJvamVjdGlvbiBQcm9qZWN0aW9uLlxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgb2wuVGlsZVJhbmdlPn0gdXNlZFRpbGVzIFVzZWQgdGlsZXMuXG4gKi9cbl9vbF9zb3VyY2VfVGlsZV8ucHJvdG90eXBlLmV4cGlyZUNhY2hlID0gZnVuY3Rpb24ocHJvamVjdGlvbiwgdXNlZFRpbGVzKSB7XG4gIHZhciB0aWxlQ2FjaGUgPSB0aGlzLmdldFRpbGVDYWNoZUZvclByb2plY3Rpb24ocHJvamVjdGlvbik7XG4gIGlmICh0aWxlQ2FjaGUpIHtcbiAgICB0aWxlQ2FjaGUuZXhwaXJlQ2FjaGUodXNlZFRpbGVzKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wucHJvai5Qcm9qZWN0aW9ufSBwcm9qZWN0aW9uIFByb2plY3Rpb24uXG4gKiBAcGFyYW0ge251bWJlcn0geiBab29tIGxldmVsLlxuICogQHBhcmFtIHtvbC5UaWxlUmFuZ2V9IHRpbGVSYW5nZSBUaWxlIHJhbmdlLlxuICogQHBhcmFtIHtmdW5jdGlvbihvbC5UaWxlKTooYm9vbGVhbnx1bmRlZmluZWQpfSBjYWxsYmFjayBDYWxsZWQgd2l0aCBlYWNoXG4gKiAgICAgbG9hZGVkIHRpbGUuICBJZiB0aGUgY2FsbGJhY2sgcmV0dXJucyBgZmFsc2VgLCB0aGUgdGlsZSB3aWxsIG5vdCBiZVxuICogICAgIGNvbnNpZGVyZWQgbG9hZGVkLlxuICogQHJldHVybiB7Ym9vbGVhbn0gVGhlIHRpbGUgcmFuZ2UgaXMgZnVsbHkgY292ZXJlZCB3aXRoIGxvYWRlZCB0aWxlcy5cbiAqL1xuX29sX3NvdXJjZV9UaWxlXy5wcm90b3R5cGUuZm9yRWFjaExvYWRlZFRpbGUgPSBmdW5jdGlvbihwcm9qZWN0aW9uLCB6LCB0aWxlUmFuZ2UsIGNhbGxiYWNrKSB7XG4gIHZhciB0aWxlQ2FjaGUgPSB0aGlzLmdldFRpbGVDYWNoZUZvclByb2plY3Rpb24ocHJvamVjdGlvbik7XG4gIGlmICghdGlsZUNhY2hlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGNvdmVyZWQgPSB0cnVlO1xuICB2YXIgdGlsZSwgdGlsZUNvb3JkS2V5LCBsb2FkZWQ7XG4gIGZvciAodmFyIHggPSB0aWxlUmFuZ2UubWluWDsgeCA8PSB0aWxlUmFuZ2UubWF4WDsgKyt4KSB7XG4gICAgZm9yICh2YXIgeSA9IHRpbGVSYW5nZS5taW5ZOyB5IDw9IHRpbGVSYW5nZS5tYXhZOyArK3kpIHtcbiAgICAgIHRpbGVDb29yZEtleSA9IF9vbF90aWxlY29vcmRfLmdldEtleVpYWSh6LCB4LCB5KTtcbiAgICAgIGxvYWRlZCA9IGZhbHNlO1xuICAgICAgaWYgKHRpbGVDYWNoZS5jb250YWluc0tleSh0aWxlQ29vcmRLZXkpKSB7XG4gICAgICAgIHRpbGUgPSAvKiogQHR5cGUgeyFvbC5UaWxlfSAqLyAodGlsZUNhY2hlLmdldCh0aWxlQ29vcmRLZXkpKTtcbiAgICAgICAgbG9hZGVkID0gdGlsZS5nZXRTdGF0ZSgpID09PSBfb2xfVGlsZVN0YXRlXy5MT0FERUQ7XG4gICAgICAgIGlmIChsb2FkZWQpIHtcbiAgICAgICAgICBsb2FkZWQgPSAoY2FsbGJhY2sodGlsZSkgIT09IGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFsb2FkZWQpIHtcbiAgICAgICAgY292ZXJlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY292ZXJlZDtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge29sLnByb2ouUHJvamVjdGlvbn0gcHJvamVjdGlvbiBQcm9qZWN0aW9uLlxuICogQHJldHVybiB7bnVtYmVyfSBHdXR0ZXIuXG4gKi9cbl9vbF9zb3VyY2VfVGlsZV8ucHJvdG90eXBlLmdldEd1dHRlciA9IGZ1bmN0aW9uKHByb2plY3Rpb24pIHtcbiAgcmV0dXJuIDA7XG59O1xuXG5cbi8qKlxuICogUmV0dXJuIHRoZSBrZXkgdG8gYmUgdXNlZCBmb3IgYWxsIHRpbGVzIGluIHRoZSBzb3VyY2UuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBrZXkgZm9yIGFsbCB0aWxlcy5cbiAqIEBwcm90ZWN0ZWRcbiAqL1xuX29sX3NvdXJjZV9UaWxlXy5wcm90b3R5cGUuZ2V0S2V5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmtleV87XG59O1xuXG5cbi8qKlxuICogU2V0IHRoZSB2YWx1ZSB0byBiZSB1c2VkIGFzIHRoZSBrZXkgZm9yIGFsbCB0aWxlcyBpbiB0aGUgc291cmNlLlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IGZvciB0aWxlcy5cbiAqIEBwcm90ZWN0ZWRcbiAqL1xuX29sX3NvdXJjZV9UaWxlXy5wcm90b3R5cGUuc2V0S2V5ID0gZnVuY3Rpb24oa2V5KSB7XG4gIGlmICh0aGlzLmtleV8gIT09IGtleSkge1xuICAgIHRoaXMua2V5XyA9IGtleTtcbiAgICB0aGlzLmNoYW5nZWQoKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wucHJvai5Qcm9qZWN0aW9ufSBwcm9qZWN0aW9uIFByb2plY3Rpb24uXG4gKiBAcmV0dXJuIHtib29sZWFufSBPcGFxdWUuXG4gKi9cbl9vbF9zb3VyY2VfVGlsZV8ucHJvdG90eXBlLmdldE9wYXF1ZSA9IGZ1bmN0aW9uKHByb2plY3Rpb24pIHtcbiAgcmV0dXJuIHRoaXMub3BhcXVlXztcbn07XG5cblxuLyoqXG4gKiBAaW5oZXJpdERvY1xuICovXG5fb2xfc291cmNlX1RpbGVfLnByb3RvdHlwZS5nZXRSZXNvbHV0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy50aWxlR3JpZC5nZXRSZXNvbHV0aW9ucygpO1xufTtcblxuXG4vKipcbiAqIEBhYnN0cmFjdFxuICogQHBhcmFtIHtudW1iZXJ9IHogVGlsZSBjb29yZGluYXRlIHouXG4gKiBAcGFyYW0ge251bWJlcn0geCBUaWxlIGNvb3JkaW5hdGUgeC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB5IFRpbGUgY29vcmRpbmF0ZSB5LlxuICogQHBhcmFtIHtudW1iZXJ9IHBpeGVsUmF0aW8gUGl4ZWwgcmF0aW8uXG4gKiBAcGFyYW0ge29sLnByb2ouUHJvamVjdGlvbn0gcHJvamVjdGlvbiBQcm9qZWN0aW9uLlxuICogQHJldHVybiB7IW9sLlRpbGV9IFRpbGUuXG4gKi9cbl9vbF9zb3VyY2VfVGlsZV8ucHJvdG90eXBlLmdldFRpbGUgPSBmdW5jdGlvbih6LCB4LCB5LCBwaXhlbFJhdGlvLCBwcm9qZWN0aW9uKSB7fTtcblxuXG4vKipcbiAqIFJldHVybiB0aGUgdGlsZSBncmlkIG9mIHRoZSB0aWxlIHNvdXJjZS5cbiAqIEByZXR1cm4ge29sLnRpbGVncmlkLlRpbGVHcmlkfSBUaWxlIGdyaWQuXG4gKiBAYXBpXG4gKi9cbl9vbF9zb3VyY2VfVGlsZV8ucHJvdG90eXBlLmdldFRpbGVHcmlkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnRpbGVHcmlkO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7b2wucHJvai5Qcm9qZWN0aW9ufSBwcm9qZWN0aW9uIFByb2plY3Rpb24uXG4gKiBAcmV0dXJuIHshb2wudGlsZWdyaWQuVGlsZUdyaWR9IFRpbGUgZ3JpZC5cbiAqL1xuX29sX3NvdXJjZV9UaWxlXy5wcm90b3R5cGUuZ2V0VGlsZUdyaWRGb3JQcm9qZWN0aW9uID0gZnVuY3Rpb24ocHJvamVjdGlvbikge1xuICBpZiAoIXRoaXMudGlsZUdyaWQpIHtcbiAgICByZXR1cm4gX29sX3RpbGVncmlkXy5nZXRGb3JQcm9qZWN0aW9uKHByb2plY3Rpb24pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLnRpbGVHcmlkO1xuICB9XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtvbC5wcm9qLlByb2plY3Rpb259IHByb2plY3Rpb24gUHJvamVjdGlvbi5cbiAqIEByZXR1cm4ge29sLlRpbGVDYWNoZX0gVGlsZSBjYWNoZS5cbiAqIEBwcm90ZWN0ZWRcbiAqL1xuX29sX3NvdXJjZV9UaWxlXy5wcm90b3R5cGUuZ2V0VGlsZUNhY2hlRm9yUHJvamVjdGlvbiA9IGZ1bmN0aW9uKHByb2plY3Rpb24pIHtcbiAgdmFyIHRoaXNQcm9qID0gdGhpcy5nZXRQcm9qZWN0aW9uKCk7XG4gIGlmICh0aGlzUHJvaiAmJiAhX29sX3Byb2pfLmVxdWl2YWxlbnQodGhpc1Byb2osIHByb2plY3Rpb24pKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRoaXMudGlsZUNhY2hlO1xuICB9XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSB0aWxlIHBpeGVsIHJhdGlvIGZvciB0aGlzIHNvdXJjZS4gU3ViY2xhc3NlcyBtYXkgb3ZlcnJpZGUgdGhpc1xuICogbWV0aG9kLCB3aGljaCBpcyBtZWFudCB0byByZXR1cm4gYSBzdXBwb3J0ZWQgcGl4ZWwgcmF0aW8gdGhhdCBtYXRjaGVzIHRoZVxuICogcHJvdmlkZWQgYHBpeGVsUmF0aW9gIGFzIGNsb3NlIGFzIHBvc3NpYmxlLlxuICogQHBhcmFtIHtudW1iZXJ9IHBpeGVsUmF0aW8gUGl4ZWwgcmF0aW8uXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRpbGUgcGl4ZWwgcmF0aW8uXG4gKi9cbl9vbF9zb3VyY2VfVGlsZV8ucHJvdG90eXBlLmdldFRpbGVQaXhlbFJhdGlvID0gZnVuY3Rpb24ocGl4ZWxSYXRpbykge1xuICByZXR1cm4gdGhpcy50aWxlUGl4ZWxSYXRpb187XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHogWi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBwaXhlbFJhdGlvIFBpeGVsIHJhdGlvLlxuICogQHBhcmFtIHtvbC5wcm9qLlByb2plY3Rpb259IHByb2plY3Rpb24gUHJvamVjdGlvbi5cbiAqIEByZXR1cm4ge29sLlNpemV9IFRpbGUgc2l6ZS5cbiAqL1xuX29sX3NvdXJjZV9UaWxlXy5wcm90b3R5cGUuZ2V0VGlsZVBpeGVsU2l6ZSA9IGZ1bmN0aW9uKHosIHBpeGVsUmF0aW8sIHByb2plY3Rpb24pIHtcbiAgdmFyIHRpbGVHcmlkID0gdGhpcy5nZXRUaWxlR3JpZEZvclByb2plY3Rpb24ocHJvamVjdGlvbik7XG4gIHZhciB0aWxlUGl4ZWxSYXRpbyA9IHRoaXMuZ2V0VGlsZVBpeGVsUmF0aW8ocGl4ZWxSYXRpbyk7XG4gIHZhciB0aWxlU2l6ZSA9IF9vbF9zaXplXy50b1NpemUodGlsZUdyaWQuZ2V0VGlsZVNpemUoeiksIHRoaXMudG1wU2l6ZSk7XG4gIGlmICh0aWxlUGl4ZWxSYXRpbyA9PSAxKSB7XG4gICAgcmV0dXJuIHRpbGVTaXplO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBfb2xfc2l6ZV8uc2NhbGUodGlsZVNpemUsIHRpbGVQaXhlbFJhdGlvLCB0aGlzLnRtcFNpemUpO1xuICB9XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyBhIHRpbGUgY29vcmRpbmF0ZSB3cmFwcGVkIGFyb3VuZCB0aGUgeC1heGlzLiBXaGVuIHRoZSB0aWxlIGNvb3JkaW5hdGVcbiAqIGlzIG91dHNpZGUgdGhlIHJlc29sdXRpb24gYW5kIGV4dGVudCByYW5nZSBvZiB0aGUgdGlsZSBncmlkLCBgbnVsbGAgd2lsbCBiZVxuICogcmV0dXJuZWQuXG4gKiBAcGFyYW0ge29sLlRpbGVDb29yZH0gdGlsZUNvb3JkIFRpbGUgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7b2wucHJvai5Qcm9qZWN0aW9uPX0gb3B0X3Byb2plY3Rpb24gUHJvamVjdGlvbi5cbiAqIEByZXR1cm4ge29sLlRpbGVDb29yZH0gVGlsZSBjb29yZGluYXRlIHRvIGJlIHBhc3NlZCB0byB0aGUgdGlsZVVybEZ1bmN0aW9uIG9yXG4gKiAgICAgbnVsbCBpZiBubyB0aWxlIFVSTCBzaG91bGQgYmUgY3JlYXRlZCBmb3IgdGhlIHBhc3NlZCBgdGlsZUNvb3JkYC5cbiAqL1xuX29sX3NvdXJjZV9UaWxlXy5wcm90b3R5cGUuZ2V0VGlsZUNvb3JkRm9yVGlsZVVybEZ1bmN0aW9uID0gZnVuY3Rpb24odGlsZUNvb3JkLCBvcHRfcHJvamVjdGlvbikge1xuICB2YXIgcHJvamVjdGlvbiA9IG9wdF9wcm9qZWN0aW9uICE9PSB1bmRlZmluZWQgP1xuICAgIG9wdF9wcm9qZWN0aW9uIDogdGhpcy5nZXRQcm9qZWN0aW9uKCk7XG4gIHZhciB0aWxlR3JpZCA9IHRoaXMuZ2V0VGlsZUdyaWRGb3JQcm9qZWN0aW9uKHByb2plY3Rpb24pO1xuICBpZiAodGhpcy5nZXRXcmFwWCgpICYmIHByb2plY3Rpb24uaXNHbG9iYWwoKSkge1xuICAgIHRpbGVDb29yZCA9IF9vbF90aWxlZ3JpZF8ud3JhcFgodGlsZUdyaWQsIHRpbGVDb29yZCwgcHJvamVjdGlvbik7XG4gIH1cbiAgcmV0dXJuIF9vbF90aWxlY29vcmRfLndpdGhpbkV4dGVudEFuZFoodGlsZUNvb3JkLCB0aWxlR3JpZCkgPyB0aWxlQ29vcmQgOiBudWxsO1xufTtcblxuXG4vKipcbiAqIEBpbmhlcml0RG9jXG4gKi9cbl9vbF9zb3VyY2VfVGlsZV8ucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcbiAgdGhpcy50aWxlQ2FjaGUuY2xlYXIoKTtcbiAgdGhpcy5jaGFuZ2VkKCk7XG59O1xuXG5cbi8qKlxuICogTWFya3MgYSB0aWxlIGNvb3JkIGFzIGJlaW5nIHVzZWQsIHdpdGhvdXQgdHJpZ2dlcmluZyBhIGxvYWQuXG4gKiBAcGFyYW0ge251bWJlcn0geiBUaWxlIGNvb3JkaW5hdGUgei5cbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFRpbGUgY29vcmRpbmF0ZSB4LlxuICogQHBhcmFtIHtudW1iZXJ9IHkgVGlsZSBjb29yZGluYXRlIHkuXG4gKiBAcGFyYW0ge29sLnByb2ouUHJvamVjdGlvbn0gcHJvamVjdGlvbiBQcm9qZWN0aW9uLlxuICovXG5fb2xfc291cmNlX1RpbGVfLnByb3RvdHlwZS51c2VUaWxlID0gX29sXy5udWxsRnVuY3Rpb247XG5cblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBFdmVudHMgZW1pdHRlZCBieSB7QGxpbmsgb2wuc291cmNlLlRpbGV9IGluc3RhbmNlcyBhcmUgaW5zdGFuY2VzIG9mIHRoaXNcbiAqIHR5cGUuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAZXh0ZW5kcyB7b2wuZXZlbnRzLkV2ZW50fVxuICogQGltcGxlbWVudHMge29saS5zb3VyY2UuVGlsZS5FdmVudH1cbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFR5cGUuXG4gKiBAcGFyYW0ge29sLlRpbGV9IHRpbGUgVGhlIHRpbGUuXG4gKi9cbl9vbF9zb3VyY2VfVGlsZV8uRXZlbnQgPSBmdW5jdGlvbih0eXBlLCB0aWxlKSB7XG5cbiAgX29sX2V2ZW50c19FdmVudF8uY2FsbCh0aGlzLCB0eXBlKTtcblxuICAvKipcbiAgICogVGhlIHRpbGUgcmVsYXRlZCB0byB0aGUgZXZlbnQuXG4gICAqIEB0eXBlIHtvbC5UaWxlfVxuICAgKiBAYXBpXG4gICAqL1xuICB0aGlzLnRpbGUgPSB0aWxlO1xuXG59O1xuX29sXy5pbmhlcml0cyhfb2xfc291cmNlX1RpbGVfLkV2ZW50LCBfb2xfZXZlbnRzX0V2ZW50Xyk7XG5leHBvcnQgZGVmYXVsdCBfb2xfc291cmNlX1RpbGVfO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2wvc291cmNlL3RpbGUuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGVudW0ge3N0cmluZ31cbiAqL1xudmFyIF9vbF9zb3VyY2VfVGlsZUV2ZW50VHlwZV8gPSB7XG5cbiAgLyoqXG4gICAqIFRyaWdnZXJlZCB3aGVuIGEgdGlsZSBzdGFydHMgbG9hZGluZy5cbiAgICogQGV2ZW50IG9sLnNvdXJjZS5UaWxlLkV2ZW50I3RpbGVsb2Fkc3RhcnRcbiAgICogQGFwaVxuICAgKi9cbiAgVElMRUxPQURTVEFSVDogJ3RpbGVsb2Fkc3RhcnQnLFxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyZWQgd2hlbiBhIHRpbGUgZmluaXNoZXMgbG9hZGluZywgZWl0aGVyIHdoZW4gaXRzIGRhdGEgaXMgbG9hZGVkLFxuICAgKiBvciB3aGVuIGxvYWRpbmcgd2FzIGFib3J0ZWQgYmVjYXVzZSB0aGUgdGlsZSBpcyBubyBsb25nZXIgbmVlZGVkLlxuICAgKiBAZXZlbnQgb2wuc291cmNlLlRpbGUuRXZlbnQjdGlsZWxvYWRlbmRcbiAgICogQGFwaVxuICAgKi9cbiAgVElMRUxPQURFTkQ6ICd0aWxlbG9hZGVuZCcsXG5cbiAgLyoqXG4gICAqIFRyaWdnZXJlZCBpZiB0aWxlIGxvYWRpbmcgcmVzdWx0cyBpbiBhbiBlcnJvci5cbiAgICogQGV2ZW50IG9sLnNvdXJjZS5UaWxlLkV2ZW50I3RpbGVsb2FkZXJyb3JcbiAgICogQGFwaVxuICAgKi9cbiAgVElMRUxPQURFUlJPUjogJ3RpbGVsb2FkZXJyb3InXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IF9vbF9zb3VyY2VfVGlsZUV2ZW50VHlwZV87XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vbC9zb3VyY2UvdGlsZWV2ZW50dHlwZS5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==