webpackJsonp([47],{

/***/ 1006:
/***/ (function(module, exports) {

module.exports = "/Educ/public/images/avatar1.jpg?2d4968bd8ec1519b0535ba849643dd1c";

/***/ }),

/***/ 1010:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        height: null,
        minHeight: null,
        maxHeight: null,
        color: null,
        barWidth: null,
        alwaysvisible: Boolean
    },
    mounted: function mounted() {
        this.dragDealer();
        this.moveBar();
    },
    data: function data() {
        return {
            scrollRatio: 0,
            grabbed: false
        };
    },

    methods: {
        // Mouse drag handler
        dragDealer: function dragDealer() {
            var _this = this;

            var t = this;
            var lastPageY;
            this.$refs.bar.addEventListener('mousedown', function (e) {
                lastPageY = e.pageY;
                _this.grabbed = true;
                document.body.classList.add('ss-grabbed');
                document.addEventListener('mousemove', drag);
                document.addEventListener('mouseup', stop);
                return false;

                function drag(e) {
                    var delta = e.pageY - lastPageY;
                    lastPageY = e.pageY;
                    t.$refs.content.scrollTop += delta / t.scrollRatio;
                }

                function stop() {
                    t.grabbed = false;
                    document.body.classList.remove('ss-grabbed');
                    document.removeEventListener('mousemove', drag);
                    document.removeEventListener('mouseup', stop);
                }
            });
        },
        moveBar: function moveBar() {
            var content = this.$refs.content;
            var bar = this.$refs.bar;
            var totalHeight = content.scrollHeight,
                ownHeight = content.clientHeight;
            this.scrollRatio = ownHeight / totalHeight;
            // Hide scrollbar if no scrolling is possible
            if (this.scrollRatio >= 1) {
                bar.classList.add('ss-hidden');
            } else {
                bar.classList.remove('ss-hidden');
                bar.style.cssText = 'height:' + this.scrollRatio * 100 + '%; top:' + content.scrollTop / totalHeight * 100 + '%;right:-' + (this.$refs.vscroll.clientWidth - bar.clientWidth) + 'px;background-color:' + this.color + ';width:' + this.barWidth;
            }
        },
        scrolltotop: function scrolltotop() {
            this.$refs.content.scrollTop = 0;
        },
        scrolltobottom: function scrolltobottom() {
            this.$refs.content.scrollTop = this.$refs.content.scrollHeight;
        }
    }
});

/***/ }),

/***/ 1011:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "vscroll",
      staticClass: "ss-container",
      style: {
        height: _vm.height,
        "min-height": _vm.minHeight,
        "max-height": _vm.maxHeight
      }
    },
    [
      _c("div", { ref: "wrapper", staticClass: "ss-wrapper" }, [
        _c(
          "div",
          {
            ref: "content",
            staticClass: "ss-content",
            on: { scroll: _vm.moveBar, mouseenter: _vm.moveBar }
          },
          [_vm._t("default")],
          2
        )
      ]),
      _vm._v(" "),
      _c("div", {
        ref: "bar",
        staticClass: "ss-scroll",
        class: { "ss-grabbed": _vm.grabbed, visible: _vm.alwaysvisible }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-583e6eb5", module.exports)
  }
}

/***/ }),

/***/ 1012:
/***/ (function(module, exports) {

module.exports = "/Educ/public/images/avatar6.jpg?ad632ec07148871732e34440c087874d";

/***/ }),

/***/ 1043:
/***/ (function(module, exports) {

module.exports = "/Educ/public/images/avatar.jpg?9ec1314ec47a05d978a1e1568daab7ec";

/***/ }),

/***/ 1082:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return (root['Chartist'] = factory());
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    root['Chartist'] = factory();
  }
}(this, function () {

/* Chartist.js 0.11.4
 * Copyright © 2019 Gion Kunz
 * Free to use under either the WTFPL license or the MIT license.
 * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-WTFPL
 * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-MIT
 */
/**
 * The core module of Chartist that is mainly providing static functions and higher level functions for chart modules.
 *
 * @module Chartist.Core
 */
var Chartist = {
  version: '0.11.4'
};

(function (globalRoot, Chartist) {
  'use strict';

  var window = globalRoot.window;
  var document = globalRoot.document;

  /**
   * This object contains all namespaces used within Chartist.
   *
   * @memberof Chartist.Core
   * @type {{svg: string, xmlns: string, xhtml: string, xlink: string, ct: string}}
   */
  Chartist.namespaces = {
    svg: 'http://www.w3.org/2000/svg',
    xmlns: 'http://www.w3.org/2000/xmlns/',
    xhtml: 'http://www.w3.org/1999/xhtml',
    xlink: 'http://www.w3.org/1999/xlink',
    ct: 'http://gionkunz.github.com/chartist-js/ct'
  };

  /**
   * Helps to simplify functional style code
   *
   * @memberof Chartist.Core
   * @param {*} n This exact value will be returned by the noop function
   * @return {*} The same value that was provided to the n parameter
   */
  Chartist.noop = function (n) {
    return n;
  };

  /**
   * Generates a-z from a number 0 to 26
   *
   * @memberof Chartist.Core
   * @param {Number} n A number from 0 to 26 that will result in a letter a-z
   * @return {String} A character from a-z based on the input number n
   */
  Chartist.alphaNumerate = function (n) {
    // Limit to a-z
    return String.fromCharCode(97 + n % 26);
  };

  /**
   * Simple recursive object extend
   *
   * @memberof Chartist.Core
   * @param {Object} target Target object where the source will be merged into
   * @param {Object...} sources This object (objects) will be merged into target and then target is returned
   * @return {Object} An object that has the same reference as target but is extended and merged with the properties of source
   */
  Chartist.extend = function (target) {
    var i, source, sourceProp;
    target = target || {};

    for (i = 1; i < arguments.length; i++) {
      source = arguments[i];
      for (var prop in source) {
        sourceProp = source[prop];
        if (typeof sourceProp === 'object' && sourceProp !== null && !(sourceProp instanceof Array)) {
          target[prop] = Chartist.extend(target[prop], sourceProp);
        } else {
          target[prop] = sourceProp;
        }
      }
    }

    return target;
  };

  /**
   * Replaces all occurrences of subStr in str with newSubStr and returns a new string.
   *
   * @memberof Chartist.Core
   * @param {String} str
   * @param {String} subStr
   * @param {String} newSubStr
   * @return {String}
   */
  Chartist.replaceAll = function(str, subStr, newSubStr) {
    return str.replace(new RegExp(subStr, 'g'), newSubStr);
  };

  /**
   * Converts a number to a string with a unit. If a string is passed then this will be returned unmodified.
   *
   * @memberof Chartist.Core
   * @param {Number} value
   * @param {String} unit
   * @return {String} Returns the passed number value with unit.
   */
  Chartist.ensureUnit = function(value, unit) {
    if(typeof value === 'number') {
      value = value + unit;
    }

    return value;
  };

  /**
   * Converts a number or string to a quantity object.
   *
   * @memberof Chartist.Core
   * @param {String|Number} input
   * @return {Object} Returns an object containing the value as number and the unit as string.
   */
  Chartist.quantity = function(input) {
    if (typeof input === 'string') {
      var match = (/^(\d+)\s*(.*)$/g).exec(input);
      return {
        value : +match[1],
        unit: match[2] || undefined
      };
    }
    return { value: input };
  };

  /**
   * This is a wrapper around document.querySelector that will return the query if it's already of type Node
   *
   * @memberof Chartist.Core
   * @param {String|Node} query The query to use for selecting a Node or a DOM node that will be returned directly
   * @return {Node}
   */
  Chartist.querySelector = function(query) {
    return query instanceof Node ? query : document.querySelector(query);
  };

  /**
   * Functional style helper to produce array with given length initialized with undefined values
   *
   * @memberof Chartist.Core
   * @param length
   * @return {Array}
   */
  Chartist.times = function(length) {
    return Array.apply(null, new Array(length));
  };

  /**
   * Sum helper to be used in reduce functions
   *
   * @memberof Chartist.Core
   * @param previous
   * @param current
   * @return {*}
   */
  Chartist.sum = function(previous, current) {
    return previous + (current ? current : 0);
  };

  /**
   * Multiply helper to be used in `Array.map` for multiplying each value of an array with a factor.
   *
   * @memberof Chartist.Core
   * @param {Number} factor
   * @returns {Function} Function that can be used in `Array.map` to multiply each value in an array
   */
  Chartist.mapMultiply = function(factor) {
    return function(num) {
      return num * factor;
    };
  };

  /**
   * Add helper to be used in `Array.map` for adding a addend to each value of an array.
   *
   * @memberof Chartist.Core
   * @param {Number} addend
   * @returns {Function} Function that can be used in `Array.map` to add a addend to each value in an array
   */
  Chartist.mapAdd = function(addend) {
    return function(num) {
      return num + addend;
    };
  };

  /**
   * Map for multi dimensional arrays where their nested arrays will be mapped in serial. The output array will have the length of the largest nested array. The callback function is called with variable arguments where each argument is the nested array value (or undefined if there are no more values).
   *
   * @memberof Chartist.Core
   * @param arr
   * @param cb
   * @return {Array}
   */
  Chartist.serialMap = function(arr, cb) {
    var result = [],
        length = Math.max.apply(null, arr.map(function(e) {
          return e.length;
        }));

    Chartist.times(length).forEach(function(e, index) {
      var args = arr.map(function(e) {
        return e[index];
      });

      result[index] = cb.apply(null, args);
    });

    return result;
  };

  /**
   * This helper function can be used to round values with certain precision level after decimal. This is used to prevent rounding errors near float point precision limit.
   *
   * @memberof Chartist.Core
   * @param {Number} value The value that should be rounded with precision
   * @param {Number} [digits] The number of digits after decimal used to do the rounding
   * @returns {number} Rounded value
   */
  Chartist.roundWithPrecision = function(value, digits) {
    var precision = Math.pow(10, digits || Chartist.precision);
    return Math.round(value * precision) / precision;
  };

  /**
   * Precision level used internally in Chartist for rounding. If you require more decimal places you can increase this number.
   *
   * @memberof Chartist.Core
   * @type {number}
   */
  Chartist.precision = 8;

  /**
   * A map with characters to escape for strings to be safely used as attribute values.
   *
   * @memberof Chartist.Core
   * @type {Object}
   */
  Chartist.escapingMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#039;'
  };

  /**
   * This function serializes arbitrary data to a string. In case of data that can't be easily converted to a string, this function will create a wrapper object and serialize the data using JSON.stringify. The outcoming string will always be escaped using Chartist.escapingMap.
   * If called with null or undefined the function will return immediately with null or undefined.
   *
   * @memberof Chartist.Core
   * @param {Number|String|Object} data
   * @return {String}
   */
  Chartist.serialize = function(data) {
    if(data === null || data === undefined) {
      return data;
    } else if(typeof data === 'number') {
      data = ''+data;
    } else if(typeof data === 'object') {
      data = JSON.stringify({data: data});
    }

    return Object.keys(Chartist.escapingMap).reduce(function(result, key) {
      return Chartist.replaceAll(result, key, Chartist.escapingMap[key]);
    }, data);
  };

  /**
   * This function de-serializes a string previously serialized with Chartist.serialize. The string will always be unescaped using Chartist.escapingMap before it's returned. Based on the input value the return type can be Number, String or Object. JSON.parse is used with try / catch to see if the unescaped string can be parsed into an Object and this Object will be returned on success.
   *
   * @memberof Chartist.Core
   * @param {String} data
   * @return {String|Number|Object}
   */
  Chartist.deserialize = function(data) {
    if(typeof data !== 'string') {
      return data;
    }

    data = Object.keys(Chartist.escapingMap).reduce(function(result, key) {
      return Chartist.replaceAll(result, Chartist.escapingMap[key], key);
    }, data);

    try {
      data = JSON.parse(data);
      data = data.data !== undefined ? data.data : data;
    } catch(e) {}

    return data;
  };

  /**
   * Create or reinitialize the SVG element for the chart
   *
   * @memberof Chartist.Core
   * @param {Node} container The containing DOM Node object that will be used to plant the SVG element
   * @param {String} width Set the width of the SVG element. Default is 100%
   * @param {String} height Set the height of the SVG element. Default is 100%
   * @param {String} className Specify a class to be added to the SVG element
   * @return {Object} The created/reinitialized SVG element
   */
  Chartist.createSvg = function (container, width, height, className) {
    var svg;

    width = width || '100%';
    height = height || '100%';

    // Check if there is a previous SVG element in the container that contains the Chartist XML namespace and remove it
    // Since the DOM API does not support namespaces we need to manually search the returned list http://www.w3.org/TR/selectors-api/
    Array.prototype.slice.call(container.querySelectorAll('svg')).filter(function filterChartistSvgObjects(svg) {
      return svg.getAttributeNS(Chartist.namespaces.xmlns, 'ct');
    }).forEach(function removePreviousElement(svg) {
      container.removeChild(svg);
    });

    // Create svg object with width and height or use 100% as default
    svg = new Chartist.Svg('svg').attr({
      width: width,
      height: height
    }).addClass(className);

    svg._node.style.width = width;
    svg._node.style.height = height;

    // Add the DOM node to our container
    container.appendChild(svg._node);

    return svg;
  };

  /**
   * Ensures that the data object passed as second argument to the charts is present and correctly initialized.
   *
   * @param  {Object} data The data object that is passed as second argument to the charts
   * @return {Object} The normalized data object
   */
  Chartist.normalizeData = function(data, reverse, multi) {
    var labelCount;
    var output = {
      raw: data,
      normalized: {}
    };

    // Check if we should generate some labels based on existing series data
    output.normalized.series = Chartist.getDataArray({
      series: data.series || []
    }, reverse, multi);

    // If all elements of the normalized data array are arrays we're dealing with
    // multi series data and we need to find the largest series if they are un-even
    if (output.normalized.series.every(function(value) {
        return value instanceof Array;
      })) {
      // Getting the series with the the most elements
      labelCount = Math.max.apply(null, output.normalized.series.map(function(series) {
        return series.length;
      }));
    } else {
      // We're dealing with Pie data so we just take the normalized array length
      labelCount = output.normalized.series.length;
    }

    output.normalized.labels = (data.labels || []).slice();
    // Padding the labels to labelCount with empty strings
    Array.prototype.push.apply(
      output.normalized.labels,
      Chartist.times(Math.max(0, labelCount - output.normalized.labels.length)).map(function() {
        return '';
      })
    );

    if(reverse) {
      Chartist.reverseData(output.normalized);
    }

    return output;
  };

  /**
   * This function safely checks if an objects has an owned property.
   *
   * @param {Object} object The object where to check for a property
   * @param {string} property The property name
   * @returns {boolean} Returns true if the object owns the specified property
   */
  Chartist.safeHasProperty = function(object, property) {
    return object !== null &&
      typeof object === 'object' &&
      object.hasOwnProperty(property);
  };

  /**
   * Checks if a value is considered a hole in the data series.
   *
   * @param {*} value
   * @returns {boolean} True if the value is considered a data hole
   */
  Chartist.isDataHoleValue = function(value) {
    return value === null ||
      value === undefined ||
      (typeof value === 'number' && isNaN(value));
  };

  /**
   * Reverses the series, labels and series data arrays.
   *
   * @memberof Chartist.Core
   * @param data
   */
  Chartist.reverseData = function(data) {
    data.labels.reverse();
    data.series.reverse();
    for (var i = 0; i < data.series.length; i++) {
      if(typeof(data.series[i]) === 'object' && data.series[i].data !== undefined) {
        data.series[i].data.reverse();
      } else if(data.series[i] instanceof Array) {
        data.series[i].reverse();
      }
    }
  };

  /**
   * Convert data series into plain array
   *
   * @memberof Chartist.Core
   * @param {Object} data The series object that contains the data to be visualized in the chart
   * @param {Boolean} [reverse] If true the whole data is reversed by the getDataArray call. This will modify the data object passed as first parameter. The labels as well as the series order is reversed. The whole series data arrays are reversed too.
   * @param {Boolean} [multi] Create a multi dimensional array from a series data array where a value object with `x` and `y` values will be created.
   * @return {Array} A plain array that contains the data to be visualized in the chart
   */
  Chartist.getDataArray = function(data, reverse, multi) {
    // Recursively walks through nested arrays and convert string values to numbers and objects with value properties
    // to values. Check the tests in data core -> data normalization for a detailed specification of expected values
    function recursiveConvert(value) {
      if(Chartist.safeHasProperty(value, 'value')) {
        // We are dealing with value object notation so we need to recurse on value property
        return recursiveConvert(value.value);
      } else if(Chartist.safeHasProperty(value, 'data')) {
        // We are dealing with series object notation so we need to recurse on data property
        return recursiveConvert(value.data);
      } else if(value instanceof Array) {
        // Data is of type array so we need to recurse on the series
        return value.map(recursiveConvert);
      } else if(Chartist.isDataHoleValue(value)) {
        // We're dealing with a hole in the data and therefore need to return undefined
        // We're also returning undefined for multi value output
        return undefined;
      } else {
        // We need to prepare multi value output (x and y data)
        if(multi) {
          var multiValue = {};

          // Single series value arrays are assumed to specify the Y-Axis value
          // For example: [1, 2] => [{x: undefined, y: 1}, {x: undefined, y: 2}]
          // If multi is a string then it's assumed that it specified which dimension should be filled as default
          if(typeof multi === 'string') {
            multiValue[multi] = Chartist.getNumberOrUndefined(value);
          } else {
            multiValue.y = Chartist.getNumberOrUndefined(value);
          }

          multiValue.x = value.hasOwnProperty('x') ? Chartist.getNumberOrUndefined(value.x) : multiValue.x;
          multiValue.y = value.hasOwnProperty('y') ? Chartist.getNumberOrUndefined(value.y) : multiValue.y;

          return multiValue;

        } else {
          // We can return simple data
          return Chartist.getNumberOrUndefined(value);
        }
      }
    }

    return data.series.map(recursiveConvert);
  };

  /**
   * Converts a number into a padding object.
   *
   * @memberof Chartist.Core
   * @param {Object|Number} padding
   * @param {Number} [fallback] This value is used to fill missing values if a incomplete padding object was passed
   * @returns {Object} Returns a padding object containing top, right, bottom, left properties filled with the padding number passed in as argument. If the argument is something else than a number (presumably already a correct padding object) then this argument is directly returned.
   */
  Chartist.normalizePadding = function(padding, fallback) {
    fallback = fallback || 0;

    return typeof padding === 'number' ? {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    } : {
      top: typeof padding.top === 'number' ? padding.top : fallback,
      right: typeof padding.right === 'number' ? padding.right : fallback,
      bottom: typeof padding.bottom === 'number' ? padding.bottom : fallback,
      left: typeof padding.left === 'number' ? padding.left : fallback
    };
  };

  Chartist.getMetaData = function(series, index) {
    var value = series.data ? series.data[index] : series[index];
    return value ? value.meta : undefined;
  };

  /**
   * Calculate the order of magnitude for the chart scale
   *
   * @memberof Chartist.Core
   * @param {Number} value The value Range of the chart
   * @return {Number} The order of magnitude
   */
  Chartist.orderOfMagnitude = function (value) {
    return Math.floor(Math.log(Math.abs(value)) / Math.LN10);
  };

  /**
   * Project a data length into screen coordinates (pixels)
   *
   * @memberof Chartist.Core
   * @param {Object} axisLength The svg element for the chart
   * @param {Number} length Single data value from a series array
   * @param {Object} bounds All the values to set the bounds of the chart
   * @return {Number} The projected data length in pixels
   */
  Chartist.projectLength = function (axisLength, length, bounds) {
    return length / bounds.range * axisLength;
  };

  /**
   * Get the height of the area in the chart for the data series
   *
   * @memberof Chartist.Core
   * @param {Object} svg The svg element for the chart
   * @param {Object} options The Object that contains all the optional values for the chart
   * @return {Number} The height of the area in the chart for the data series
   */
  Chartist.getAvailableHeight = function (svg, options) {
    return Math.max((Chartist.quantity(options.height).value || svg.height()) - (options.chartPadding.top +  options.chartPadding.bottom) - options.axisX.offset, 0);
  };

  /**
   * Get highest and lowest value of data array. This Array contains the data that will be visualized in the chart.
   *
   * @memberof Chartist.Core
   * @param {Array} data The array that contains the data to be visualized in the chart
   * @param {Object} options The Object that contains the chart options
   * @param {String} dimension Axis dimension 'x' or 'y' used to access the correct value and high / low configuration
   * @return {Object} An object that contains the highest and lowest value that will be visualized on the chart.
   */
  Chartist.getHighLow = function (data, options, dimension) {
    // TODO: Remove workaround for deprecated global high / low config. Axis high / low configuration is preferred
    options = Chartist.extend({}, options, dimension ? options['axis' + dimension.toUpperCase()] : {});

    var highLow = {
        high: options.high === undefined ? -Number.MAX_VALUE : +options.high,
        low: options.low === undefined ? Number.MAX_VALUE : +options.low
      };
    var findHigh = options.high === undefined;
    var findLow = options.low === undefined;

    // Function to recursively walk through arrays and find highest and lowest number
    function recursiveHighLow(data) {
      if(data === undefined) {
        return undefined;
      } else if(data instanceof Array) {
        for (var i = 0; i < data.length; i++) {
          recursiveHighLow(data[i]);
        }
      } else {
        var value = dimension ? +data[dimension] : +data;

        if (findHigh && value > highLow.high) {
          highLow.high = value;
        }

        if (findLow && value < highLow.low) {
          highLow.low = value;
        }
      }
    }

    // Start to find highest and lowest number recursively
    if(findHigh || findLow) {
      recursiveHighLow(data);
    }

    // Overrides of high / low based on reference value, it will make sure that the invisible reference value is
    // used to generate the chart. This is useful when the chart always needs to contain the position of the
    // invisible reference value in the view i.e. for bipolar scales.
    if (options.referenceValue || options.referenceValue === 0) {
      highLow.high = Math.max(options.referenceValue, highLow.high);
      highLow.low = Math.min(options.referenceValue, highLow.low);
    }

    // If high and low are the same because of misconfiguration or flat data (only the same value) we need
    // to set the high or low to 0 depending on the polarity
    if (highLow.high <= highLow.low) {
      // If both values are 0 we set high to 1
      if (highLow.low === 0) {
        highLow.high = 1;
      } else if (highLow.low < 0) {
        // If we have the same negative value for the bounds we set bounds.high to 0
        highLow.high = 0;
      } else if (highLow.high > 0) {
        // If we have the same positive value for the bounds we set bounds.low to 0
        highLow.low = 0;
      } else {
        // If data array was empty, values are Number.MAX_VALUE and -Number.MAX_VALUE. Set bounds to prevent errors
        highLow.high = 1;
        highLow.low = 0;
      }
    }

    return highLow;
  };

  /**
   * Checks if a value can be safely coerced to a number. This includes all values except null which result in finite numbers when coerced. This excludes NaN, since it's not finite.
   *
   * @memberof Chartist.Core
   * @param value
   * @returns {Boolean}
   */
  Chartist.isNumeric = function(value) {
    return value === null ? false : isFinite(value);
  };

  /**
   * Returns true on all falsey values except the numeric value 0.
   *
   * @memberof Chartist.Core
   * @param value
   * @returns {boolean}
   */
  Chartist.isFalseyButZero = function(value) {
    return !value && value !== 0;
  };

  /**
   * Returns a number if the passed parameter is a valid number or the function will return undefined. On all other values than a valid number, this function will return undefined.
   *
   * @memberof Chartist.Core
   * @param value
   * @returns {*}
   */
  Chartist.getNumberOrUndefined = function(value) {
    return Chartist.isNumeric(value) ? +value : undefined;
  };

  /**
   * Checks if provided value object is multi value (contains x or y properties)
   *
   * @memberof Chartist.Core
   * @param value
   */
  Chartist.isMultiValue = function(value) {
    return typeof value === 'object' && ('x' in value || 'y' in value);
  };

  /**
   * Gets a value from a dimension `value.x` or `value.y` while returning value directly if it's a valid numeric value. If the value is not numeric and it's falsey this function will return `defaultValue`.
   *
   * @memberof Chartist.Core
   * @param value
   * @param dimension
   * @param defaultValue
   * @returns {*}
   */
  Chartist.getMultiValue = function(value, dimension) {
    if(Chartist.isMultiValue(value)) {
      return Chartist.getNumberOrUndefined(value[dimension || 'y']);
    } else {
      return Chartist.getNumberOrUndefined(value);
    }
  };

  /**
   * Pollard Rho Algorithm to find smallest factor of an integer value. There are more efficient algorithms for factorization, but this one is quite efficient and not so complex.
   *
   * @memberof Chartist.Core
   * @param {Number} num An integer number where the smallest factor should be searched for
   * @returns {Number} The smallest integer factor of the parameter num.
   */
  Chartist.rho = function(num) {
    if(num === 1) {
      return num;
    }

    function gcd(p, q) {
      if (p % q === 0) {
        return q;
      } else {
        return gcd(q, p % q);
      }
    }

    function f(x) {
      return x * x + 1;
    }

    var x1 = 2, x2 = 2, divisor;
    if (num % 2 === 0) {
      return 2;
    }

    do {
      x1 = f(x1) % num;
      x2 = f(f(x2)) % num;
      divisor = gcd(Math.abs(x1 - x2), num);
    } while (divisor === 1);

    return divisor;
  };

  /**
   * Calculate and retrieve all the bounds for the chart and return them in one array
   *
   * @memberof Chartist.Core
   * @param {Number} axisLength The length of the Axis used for
   * @param {Object} highLow An object containing a high and low property indicating the value range of the chart.
   * @param {Number} scaleMinSpace The minimum projected length a step should result in
   * @param {Boolean} onlyInteger
   * @return {Object} All the values to set the bounds of the chart
   */
  Chartist.getBounds = function (axisLength, highLow, scaleMinSpace, onlyInteger) {
    var i,
      optimizationCounter = 0,
      newMin,
      newMax,
      bounds = {
        high: highLow.high,
        low: highLow.low
      };

    bounds.valueRange = bounds.high - bounds.low;
    bounds.oom = Chartist.orderOfMagnitude(bounds.valueRange);
    bounds.step = Math.pow(10, bounds.oom);
    bounds.min = Math.floor(bounds.low / bounds.step) * bounds.step;
    bounds.max = Math.ceil(bounds.high / bounds.step) * bounds.step;
    bounds.range = bounds.max - bounds.min;
    bounds.numberOfSteps = Math.round(bounds.range / bounds.step);

    // Optimize scale step by checking if subdivision is possible based on horizontalGridMinSpace
    // If we are already below the scaleMinSpace value we will scale up
    var length = Chartist.projectLength(axisLength, bounds.step, bounds);
    var scaleUp = length < scaleMinSpace;
    var smallestFactor = onlyInteger ? Chartist.rho(bounds.range) : 0;

    // First check if we should only use integer steps and if step 1 is still larger than scaleMinSpace so we can use 1
    if(onlyInteger && Chartist.projectLength(axisLength, 1, bounds) >= scaleMinSpace) {
      bounds.step = 1;
    } else if(onlyInteger && smallestFactor < bounds.step && Chartist.projectLength(axisLength, smallestFactor, bounds) >= scaleMinSpace) {
      // If step 1 was too small, we can try the smallest factor of range
      // If the smallest factor is smaller than the current bounds.step and the projected length of smallest factor
      // is larger than the scaleMinSpace we should go for it.
      bounds.step = smallestFactor;
    } else {
      // Trying to divide or multiply by 2 and find the best step value
      while (true) {
        if (scaleUp && Chartist.projectLength(axisLength, bounds.step, bounds) <= scaleMinSpace) {
          bounds.step *= 2;
        } else if (!scaleUp && Chartist.projectLength(axisLength, bounds.step / 2, bounds) >= scaleMinSpace) {
          bounds.step /= 2;
          if(onlyInteger && bounds.step % 1 !== 0) {
            bounds.step *= 2;
            break;
          }
        } else {
          break;
        }

        if(optimizationCounter++ > 1000) {
          throw new Error('Exceeded maximum number of iterations while optimizing scale step!');
        }
      }
    }

    var EPSILON = 2.221E-16;
    bounds.step = Math.max(bounds.step, EPSILON);
    function safeIncrement(value, increment) {
      // If increment is too small use *= (1+EPSILON) as a simple nextafter
      if (value === (value += increment)) {
      	value *= (1 + (increment > 0 ? EPSILON : -EPSILON));
      }
      return value;
    }

    // Narrow min and max based on new step
    newMin = bounds.min;
    newMax = bounds.max;
    while (newMin + bounds.step <= bounds.low) {
    	newMin = safeIncrement(newMin, bounds.step);
    }
    while (newMax - bounds.step >= bounds.high) {
    	newMax = safeIncrement(newMax, -bounds.step);
    }
    bounds.min = newMin;
    bounds.max = newMax;
    bounds.range = bounds.max - bounds.min;

    var values = [];
    for (i = bounds.min; i <= bounds.max; i = safeIncrement(i, bounds.step)) {
      var value = Chartist.roundWithPrecision(i);
      if (value !== values[values.length - 1]) {
        values.push(value);
      }
    }
    bounds.values = values;
    return bounds;
  };

  /**
   * Calculate cartesian coordinates of polar coordinates
   *
   * @memberof Chartist.Core
   * @param {Number} centerX X-axis coordinates of center point of circle segment
   * @param {Number} centerY X-axis coordinates of center point of circle segment
   * @param {Number} radius Radius of circle segment
   * @param {Number} angleInDegrees Angle of circle segment in degrees
   * @return {{x:Number, y:Number}} Coordinates of point on circumference
   */
  Chartist.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  /**
   * Initialize chart drawing rectangle (area where chart is drawn) x1,y1 = bottom left / x2,y2 = top right
   *
   * @memberof Chartist.Core
   * @param {Object} svg The svg element for the chart
   * @param {Object} options The Object that contains all the optional values for the chart
   * @param {Number} [fallbackPadding] The fallback padding if partial padding objects are used
   * @return {Object} The chart rectangles coordinates inside the svg element plus the rectangles measurements
   */
  Chartist.createChartRect = function (svg, options, fallbackPadding) {
    var hasAxis = !!(options.axisX || options.axisY);
    var yAxisOffset = hasAxis ? options.axisY.offset : 0;
    var xAxisOffset = hasAxis ? options.axisX.offset : 0;
    // If width or height results in invalid value (including 0) we fallback to the unitless settings or even 0
    var width = svg.width() || Chartist.quantity(options.width).value || 0;
    var height = svg.height() || Chartist.quantity(options.height).value || 0;
    var normalizedPadding = Chartist.normalizePadding(options.chartPadding, fallbackPadding);

    // If settings were to small to cope with offset (legacy) and padding, we'll adjust
    width = Math.max(width, yAxisOffset + normalizedPadding.left + normalizedPadding.right);
    height = Math.max(height, xAxisOffset + normalizedPadding.top + normalizedPadding.bottom);

    var chartRect = {
      padding: normalizedPadding,
      width: function () {
        return this.x2 - this.x1;
      },
      height: function () {
        return this.y1 - this.y2;
      }
    };

    if(hasAxis) {
      if (options.axisX.position === 'start') {
        chartRect.y2 = normalizedPadding.top + xAxisOffset;
        chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
      } else {
        chartRect.y2 = normalizedPadding.top;
        chartRect.y1 = Math.max(height - normalizedPadding.bottom - xAxisOffset, chartRect.y2 + 1);
      }

      if (options.axisY.position === 'start') {
        chartRect.x1 = normalizedPadding.left + yAxisOffset;
        chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
      } else {
        chartRect.x1 = normalizedPadding.left;
        chartRect.x2 = Math.max(width - normalizedPadding.right - yAxisOffset, chartRect.x1 + 1);
      }
    } else {
      chartRect.x1 = normalizedPadding.left;
      chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
      chartRect.y2 = normalizedPadding.top;
      chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
    }

    return chartRect;
  };

  /**
   * Creates a grid line based on a projected value.
   *
   * @memberof Chartist.Core
   * @param position
   * @param index
   * @param axis
   * @param offset
   * @param length
   * @param group
   * @param classes
   * @param eventEmitter
   */
  Chartist.createGrid = function(position, index, axis, offset, length, group, classes, eventEmitter) {
    var positionalData = {};
    positionalData[axis.units.pos + '1'] = position;
    positionalData[axis.units.pos + '2'] = position;
    positionalData[axis.counterUnits.pos + '1'] = offset;
    positionalData[axis.counterUnits.pos + '2'] = offset + length;

    var gridElement = group.elem('line', positionalData, classes.join(' '));

    // Event for grid draw
    eventEmitter.emit('draw',
      Chartist.extend({
        type: 'grid',
        axis: axis,
        index: index,
        group: group,
        element: gridElement
      }, positionalData)
    );
  };

  /**
   * Creates a grid background rect and emits the draw event.
   *
   * @memberof Chartist.Core
   * @param gridGroup
   * @param chartRect
   * @param className
   * @param eventEmitter
   */
  Chartist.createGridBackground = function (gridGroup, chartRect, className, eventEmitter) {
    var gridBackground = gridGroup.elem('rect', {
        x: chartRect.x1,
        y: chartRect.y2,
        width: chartRect.width(),
        height: chartRect.height(),
      }, className, true);

      // Event for grid background draw
      eventEmitter.emit('draw', {
        type: 'gridBackground',
        group: gridGroup,
        element: gridBackground
      });
  };

  /**
   * Creates a label based on a projected value and an axis.
   *
   * @memberof Chartist.Core
   * @param position
   * @param length
   * @param index
   * @param labels
   * @param axis
   * @param axisOffset
   * @param labelOffset
   * @param group
   * @param classes
   * @param useForeignObject
   * @param eventEmitter
   */
  Chartist.createLabel = function(position, length, index, labels, axis, axisOffset, labelOffset, group, classes, useForeignObject, eventEmitter) {
    var labelElement;
    var positionalData = {};

    positionalData[axis.units.pos] = position + labelOffset[axis.units.pos];
    positionalData[axis.counterUnits.pos] = labelOffset[axis.counterUnits.pos];
    positionalData[axis.units.len] = length;
    positionalData[axis.counterUnits.len] = Math.max(0, axisOffset - 10);

    if(useForeignObject) {
      // We need to set width and height explicitly to px as span will not expand with width and height being
      // 100% in all browsers
      var content = document.createElement('span');
      content.className = classes.join(' ');
      content.setAttribute('xmlns', Chartist.namespaces.xhtml);
      content.innerText = labels[index];
      content.style[axis.units.len] = Math.round(positionalData[axis.units.len]) + 'px';
      content.style[axis.counterUnits.len] = Math.round(positionalData[axis.counterUnits.len]) + 'px';

      labelElement = group.foreignObject(content, Chartist.extend({
        style: 'overflow: visible;'
      }, positionalData));
    } else {
      labelElement = group.elem('text', positionalData, classes.join(' ')).text(labels[index]);
    }

    eventEmitter.emit('draw', Chartist.extend({
      type: 'label',
      axis: axis,
      index: index,
      group: group,
      element: labelElement,
      text: labels[index]
    }, positionalData));
  };

  /**
   * Helper to read series specific options from options object. It automatically falls back to the global option if
   * there is no option in the series options.
   *
   * @param {Object} series Series object
   * @param {Object} options Chartist options object
   * @param {string} key The options key that should be used to obtain the options
   * @returns {*}
   */
  Chartist.getSeriesOption = function(series, options, key) {
    if(series.name && options.series && options.series[series.name]) {
      var seriesOptions = options.series[series.name];
      return seriesOptions.hasOwnProperty(key) ? seriesOptions[key] : options[key];
    } else {
      return options[key];
    }
  };

  /**
   * Provides options handling functionality with callback for options changes triggered by responsive options and media query matches
   *
   * @memberof Chartist.Core
   * @param {Object} options Options set by user
   * @param {Array} responsiveOptions Optional functions to add responsive behavior to chart
   * @param {Object} eventEmitter The event emitter that will be used to emit the options changed events
   * @return {Object} The consolidated options object from the defaults, base and matching responsive options
   */
  Chartist.optionsProvider = function (options, responsiveOptions, eventEmitter) {
    var baseOptions = Chartist.extend({}, options),
      currentOptions,
      mediaQueryListeners = [],
      i;

    function updateCurrentOptions(mediaEvent) {
      var previousOptions = currentOptions;
      currentOptions = Chartist.extend({}, baseOptions);

      if (responsiveOptions) {
        for (i = 0; i < responsiveOptions.length; i++) {
          var mql = window.matchMedia(responsiveOptions[i][0]);
          if (mql.matches) {
            currentOptions = Chartist.extend(currentOptions, responsiveOptions[i][1]);
          }
        }
      }

      if(eventEmitter && mediaEvent) {
        eventEmitter.emit('optionsChanged', {
          previousOptions: previousOptions,
          currentOptions: currentOptions
        });
      }
    }

    function removeMediaQueryListeners() {
      mediaQueryListeners.forEach(function(mql) {
        mql.removeListener(updateCurrentOptions);
      });
    }

    if (!window.matchMedia) {
      throw 'window.matchMedia not found! Make sure you\'re using a polyfill.';
    } else if (responsiveOptions) {

      for (i = 0; i < responsiveOptions.length; i++) {
        var mql = window.matchMedia(responsiveOptions[i][0]);
        mql.addListener(updateCurrentOptions);
        mediaQueryListeners.push(mql);
      }
    }
    // Execute initially without an event argument so we get the correct options
    updateCurrentOptions();

    return {
      removeMediaQueryListeners: removeMediaQueryListeners,
      getCurrentOptions: function getCurrentOptions() {
        return Chartist.extend({}, currentOptions);
      }
    };
  };


  /**
   * Splits a list of coordinates and associated values into segments. Each returned segment contains a pathCoordinates
   * valueData property describing the segment.
   *
   * With the default options, segments consist of contiguous sets of points that do not have an undefined value. Any
   * points with undefined values are discarded.
   *
   * **Options**
   * The following options are used to determine how segments are formed
   * ```javascript
   * var options = {
   *   // If fillHoles is true, undefined values are simply discarded without creating a new segment. Assuming other options are default, this returns single segment.
   *   fillHoles: false,
   *   // If increasingX is true, the coordinates in all segments have strictly increasing x-values.
   *   increasingX: false
   * };
   * ```
   *
   * @memberof Chartist.Core
   * @param {Array} pathCoordinates List of point coordinates to be split in the form [x1, y1, x2, y2 ... xn, yn]
   * @param {Array} values List of associated point values in the form [v1, v2 .. vn]
   * @param {Object} options Options set by user
   * @return {Array} List of segments, each containing a pathCoordinates and valueData property.
   */
  Chartist.splitIntoSegments = function(pathCoordinates, valueData, options) {
    var defaultOptions = {
      increasingX: false,
      fillHoles: false
    };

    options = Chartist.extend({}, defaultOptions, options);

    var segments = [];
    var hole = true;

    for(var i = 0; i < pathCoordinates.length; i += 2) {
      // If this value is a "hole" we set the hole flag
      if(Chartist.getMultiValue(valueData[i / 2].value) === undefined) {
      // if(valueData[i / 2].value === undefined) {
        if(!options.fillHoles) {
          hole = true;
        }
      } else {
        if(options.increasingX && i >= 2 && pathCoordinates[i] <= pathCoordinates[i-2]) {
          // X is not increasing, so we need to make sure we start a new segment
          hole = true;
        }


        // If it's a valid value we need to check if we're coming out of a hole and create a new empty segment
        if(hole) {
          segments.push({
            pathCoordinates: [],
            valueData: []
          });
          // As we have a valid value now, we are not in a "hole" anymore
          hole = false;
        }

        // Add to the segment pathCoordinates and valueData
        segments[segments.length - 1].pathCoordinates.push(pathCoordinates[i], pathCoordinates[i + 1]);
        segments[segments.length - 1].valueData.push(valueData[i / 2]);
      }
    }

    return segments;
  };
}(this || global, Chartist));
;/**
 * Chartist path interpolation functions.
 *
 * @module Chartist.Interpolation
 */
/* global Chartist */
(function(globalRoot, Chartist) {
  'use strict';

  Chartist.Interpolation = {};

  /**
   * This interpolation function does not smooth the path and the result is only containing lines and no curves.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.none({
   *     fillHoles: false
   *   })
   * });
   *
   *
   * @memberof Chartist.Interpolation
   * @return {Function}
   */
  Chartist.Interpolation.none = function(options) {
    var defaultOptions = {
      fillHoles: false
    };
    options = Chartist.extend({}, defaultOptions, options);
    return function none(pathCoordinates, valueData) {
      var path = new Chartist.Svg.Path();
      var hole = true;

      for(var i = 0; i < pathCoordinates.length; i += 2) {
        var currX = pathCoordinates[i];
        var currY = pathCoordinates[i + 1];
        var currData = valueData[i / 2];

        if(Chartist.getMultiValue(currData.value) !== undefined) {

          if(hole) {
            path.move(currX, currY, false, currData);
          } else {
            path.line(currX, currY, false, currData);
          }

          hole = false;
        } else if(!options.fillHoles) {
          hole = true;
        }
      }

      return path;
    };
  };

  /**
   * Simple smoothing creates horizontal handles that are positioned with a fraction of the length between two data points. You can use the divisor option to specify the amount of smoothing.
   *
   * Simple smoothing can be used instead of `Chartist.Smoothing.cardinal` if you'd like to get rid of the artifacts it produces sometimes. Simple smoothing produces less flowing lines but is accurate by hitting the points and it also doesn't swing below or above the given data point.
   *
   * All smoothing functions within Chartist are factory functions that accept an options parameter. The simple interpolation function accepts one configuration parameter `divisor`, between 1 and ∞, which controls the smoothing characteristics.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.simple({
   *     divisor: 2,
   *     fillHoles: false
   *   })
   * });
   *
   *
   * @memberof Chartist.Interpolation
   * @param {Object} options The options of the simple interpolation factory function.
   * @return {Function}
   */
  Chartist.Interpolation.simple = function(options) {
    var defaultOptions = {
      divisor: 2,
      fillHoles: false
    };
    options = Chartist.extend({}, defaultOptions, options);

    var d = 1 / Math.max(1, options.divisor);

    return function simple(pathCoordinates, valueData) {
      var path = new Chartist.Svg.Path();
      var prevX, prevY, prevData;

      for(var i = 0; i < pathCoordinates.length; i += 2) {
        var currX = pathCoordinates[i];
        var currY = pathCoordinates[i + 1];
        var length = (currX - prevX) * d;
        var currData = valueData[i / 2];

        if(currData.value !== undefined) {

          if(prevData === undefined) {
            path.move(currX, currY, false, currData);
          } else {
            path.curve(
              prevX + length,
              prevY,
              currX - length,
              currY,
              currX,
              currY,
              false,
              currData
            );
          }

          prevX = currX;
          prevY = currY;
          prevData = currData;
        } else if(!options.fillHoles) {
          prevX = currX = prevData = undefined;
        }
      }

      return path;
    };
  };

  /**
   * Cardinal / Catmull-Rome spline interpolation is the default smoothing function in Chartist. It produces nice results where the splines will always meet the points. It produces some artifacts though when data values are increased or decreased rapidly. The line may not follow a very accurate path and if the line should be accurate this smoothing function does not produce the best results.
   *
   * Cardinal splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
   *
   * All smoothing functions within Chartist are factory functions that accept an options parameter. The cardinal interpolation function accepts one configuration parameter `tension`, between 0 and 1, which controls the smoothing intensity.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.cardinal({
   *     tension: 1,
   *     fillHoles: false
   *   })
   * });
   *
   * @memberof Chartist.Interpolation
   * @param {Object} options The options of the cardinal factory function.
   * @return {Function}
   */
  Chartist.Interpolation.cardinal = function(options) {
    var defaultOptions = {
      tension: 1,
      fillHoles: false
    };

    options = Chartist.extend({}, defaultOptions, options);

    var t = Math.min(1, Math.max(0, options.tension)),
      c = 1 - t;

    return function cardinal(pathCoordinates, valueData) {
      // First we try to split the coordinates into segments
      // This is necessary to treat "holes" in line charts
      var segments = Chartist.splitIntoSegments(pathCoordinates, valueData, {
        fillHoles: options.fillHoles
      });

      if(!segments.length) {
        // If there were no segments return 'Chartist.Interpolation.none'
        return Chartist.Interpolation.none()([]);
      } else if(segments.length > 1) {
        // If the split resulted in more that one segment we need to interpolate each segment individually and join them
        // afterwards together into a single path.
          var paths = [];
        // For each segment we will recurse the cardinal function
        segments.forEach(function(segment) {
          paths.push(cardinal(segment.pathCoordinates, segment.valueData));
        });
        // Join the segment path data into a single path and return
        return Chartist.Svg.Path.join(paths);
      } else {
        // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
        // segment
        pathCoordinates = segments[0].pathCoordinates;
        valueData = segments[0].valueData;

        // If less than two points we need to fallback to no smoothing
        if(pathCoordinates.length <= 4) {
          return Chartist.Interpolation.none()(pathCoordinates, valueData);
        }

        var path = new Chartist.Svg.Path().move(pathCoordinates[0], pathCoordinates[1], false, valueData[0]),
          z;

        for (var i = 0, iLen = pathCoordinates.length; iLen - 2 * !z > i; i += 2) {
          var p = [
            {x: +pathCoordinates[i - 2], y: +pathCoordinates[i - 1]},
            {x: +pathCoordinates[i], y: +pathCoordinates[i + 1]},
            {x: +pathCoordinates[i + 2], y: +pathCoordinates[i + 3]},
            {x: +pathCoordinates[i + 4], y: +pathCoordinates[i + 5]}
          ];
          if (z) {
            if (!i) {
              p[0] = {x: +pathCoordinates[iLen - 2], y: +pathCoordinates[iLen - 1]};
            } else if (iLen - 4 === i) {
              p[3] = {x: +pathCoordinates[0], y: +pathCoordinates[1]};
            } else if (iLen - 2 === i) {
              p[2] = {x: +pathCoordinates[0], y: +pathCoordinates[1]};
              p[3] = {x: +pathCoordinates[2], y: +pathCoordinates[3]};
            }
          } else {
            if (iLen - 4 === i) {
              p[3] = p[2];
            } else if (!i) {
              p[0] = {x: +pathCoordinates[i], y: +pathCoordinates[i + 1]};
            }
          }

          path.curve(
            (t * (-p[0].x + 6 * p[1].x + p[2].x) / 6) + (c * p[2].x),
            (t * (-p[0].y + 6 * p[1].y + p[2].y) / 6) + (c * p[2].y),
            (t * (p[1].x + 6 * p[2].x - p[3].x) / 6) + (c * p[2].x),
            (t * (p[1].y + 6 * p[2].y - p[3].y) / 6) + (c * p[2].y),
            p[2].x,
            p[2].y,
            false,
            valueData[(i + 2) / 2]
          );
        }

        return path;
      }
    };
  };

  /**
   * Monotone Cubic spline interpolation produces a smooth curve which preserves monotonicity. Unlike cardinal splines, the curve will not extend beyond the range of y-values of the original data points.
   *
   * Monotone Cubic splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
   *
   * The x-values of subsequent points must be increasing to fit a Monotone Cubic spline. If this condition is not met for a pair of adjacent points, then there will be a break in the curve between those data points.
   *
   * All smoothing functions within Chartist are factory functions that accept an options parameter.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.monotoneCubic({
   *     fillHoles: false
   *   })
   * });
   *
   * @memberof Chartist.Interpolation
   * @param {Object} options The options of the monotoneCubic factory function.
   * @return {Function}
   */
  Chartist.Interpolation.monotoneCubic = function(options) {
    var defaultOptions = {
      fillHoles: false
    };

    options = Chartist.extend({}, defaultOptions, options);

    return function monotoneCubic(pathCoordinates, valueData) {
      // First we try to split the coordinates into segments
      // This is necessary to treat "holes" in line charts
      var segments = Chartist.splitIntoSegments(pathCoordinates, valueData, {
        fillHoles: options.fillHoles,
        increasingX: true
      });

      if(!segments.length) {
        // If there were no segments return 'Chartist.Interpolation.none'
        return Chartist.Interpolation.none()([]);
      } else if(segments.length > 1) {
        // If the split resulted in more that one segment we need to interpolate each segment individually and join them
        // afterwards together into a single path.
          var paths = [];
        // For each segment we will recurse the monotoneCubic fn function
        segments.forEach(function(segment) {
          paths.push(monotoneCubic(segment.pathCoordinates, segment.valueData));
        });
        // Join the segment path data into a single path and return
        return Chartist.Svg.Path.join(paths);
      } else {
        // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
        // segment
        pathCoordinates = segments[0].pathCoordinates;
        valueData = segments[0].valueData;

        // If less than three points we need to fallback to no smoothing
        if(pathCoordinates.length <= 4) {
          return Chartist.Interpolation.none()(pathCoordinates, valueData);
        }

        var xs = [],
          ys = [],
          i,
          n = pathCoordinates.length / 2,
          ms = [],
          ds = [], dys = [], dxs = [],
          path;

        // Populate x and y coordinates into separate arrays, for readability

        for(i = 0; i < n; i++) {
          xs[i] = pathCoordinates[i * 2];
          ys[i] = pathCoordinates[i * 2 + 1];
        }

        // Calculate deltas and derivative

        for(i = 0; i < n - 1; i++) {
          dys[i] = ys[i + 1] - ys[i];
          dxs[i] = xs[i + 1] - xs[i];
          ds[i] = dys[i] / dxs[i];
        }

        // Determine desired slope (m) at each point using Fritsch-Carlson method
        // See: http://math.stackexchange.com/questions/45218/implementation-of-monotone-cubic-interpolation

        ms[0] = ds[0];
        ms[n - 1] = ds[n - 2];

        for(i = 1; i < n - 1; i++) {
          if(ds[i] === 0 || ds[i - 1] === 0 || (ds[i - 1] > 0) !== (ds[i] > 0)) {
            ms[i] = 0;
          } else {
            ms[i] = 3 * (dxs[i - 1] + dxs[i]) / (
              (2 * dxs[i] + dxs[i - 1]) / ds[i - 1] +
              (dxs[i] + 2 * dxs[i - 1]) / ds[i]);

            if(!isFinite(ms[i])) {
              ms[i] = 0;
            }
          }
        }

        // Now build a path from the slopes

        path = new Chartist.Svg.Path().move(xs[0], ys[0], false, valueData[0]);

        for(i = 0; i < n - 1; i++) {
          path.curve(
            // First control point
            xs[i] + dxs[i] / 3,
            ys[i] + ms[i] * dxs[i] / 3,
            // Second control point
            xs[i + 1] - dxs[i] / 3,
            ys[i + 1] - ms[i + 1] * dxs[i] / 3,
            // End point
            xs[i + 1],
            ys[i + 1],

            false,
            valueData[i + 1]
          );
        }

        return path;
      }
    };
  };

  /**
   * Step interpolation will cause the line chart to move in steps rather than diagonal or smoothed lines. This interpolation will create additional points that will also be drawn when the `showPoint` option is enabled.
   *
   * All smoothing functions within Chartist are factory functions that accept an options parameter. The step interpolation function accepts one configuration parameter `postpone`, that can be `true` or `false`. The default value is `true` and will cause the step to occur where the value actually changes. If a different behaviour is needed where the step is shifted to the left and happens before the actual value, this option can be set to `false`.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.step({
   *     postpone: true,
   *     fillHoles: false
   *   })
   * });
   *
   * @memberof Chartist.Interpolation
   * @param options
   * @returns {Function}
   */
  Chartist.Interpolation.step = function(options) {
    var defaultOptions = {
      postpone: true,
      fillHoles: false
    };

    options = Chartist.extend({}, defaultOptions, options);

    return function step(pathCoordinates, valueData) {
      var path = new Chartist.Svg.Path();

      var prevX, prevY, prevData;

      for (var i = 0; i < pathCoordinates.length; i += 2) {
        var currX = pathCoordinates[i];
        var currY = pathCoordinates[i + 1];
        var currData = valueData[i / 2];

        // If the current point is also not a hole we can draw the step lines
        if(currData.value !== undefined) {
          if(prevData === undefined) {
            path.move(currX, currY, false, currData);
          } else {
            if(options.postpone) {
              // If postponed we should draw the step line with the value of the previous value
              path.line(currX, prevY, false, prevData);
            } else {
              // If not postponed we should draw the step line with the value of the current value
              path.line(prevX, currY, false, currData);
            }
            // Line to the actual point (this should only be a Y-Axis movement
            path.line(currX, currY, false, currData);
          }

          prevX = currX;
          prevY = currY;
          prevData = currData;
        } else if(!options.fillHoles) {
          prevX = prevY = prevData = undefined;
        }
      }

      return path;
    };
  };

}(this || global, Chartist));
;/**
 * A very basic event module that helps to generate and catch events.
 *
 * @module Chartist.Event
 */
/* global Chartist */
(function (globalRoot, Chartist) {
  'use strict';

  Chartist.EventEmitter = function () {
    var handlers = [];

    /**
     * Add an event handler for a specific event
     *
     * @memberof Chartist.Event
     * @param {String} event The event name
     * @param {Function} handler A event handler function
     */
    function addEventHandler(event, handler) {
      handlers[event] = handlers[event] || [];
      handlers[event].push(handler);
    }

    /**
     * Remove an event handler of a specific event name or remove all event handlers for a specific event.
     *
     * @memberof Chartist.Event
     * @param {String} event The event name where a specific or all handlers should be removed
     * @param {Function} [handler] An optional event handler function. If specified only this specific handler will be removed and otherwise all handlers are removed.
     */
    function removeEventHandler(event, handler) {
      // Only do something if there are event handlers with this name existing
      if(handlers[event]) {
        // If handler is set we will look for a specific handler and only remove this
        if(handler) {
          handlers[event].splice(handlers[event].indexOf(handler), 1);
          if(handlers[event].length === 0) {
            delete handlers[event];
          }
        } else {
          // If no handler is specified we remove all handlers for this event
          delete handlers[event];
        }
      }
    }

    /**
     * Use this function to emit an event. All handlers that are listening for this event will be triggered with the data parameter.
     *
     * @memberof Chartist.Event
     * @param {String} event The event name that should be triggered
     * @param {*} data Arbitrary data that will be passed to the event handler callback functions
     */
    function emit(event, data) {
      // Only do something if there are event handlers with this name existing
      if(handlers[event]) {
        handlers[event].forEach(function(handler) {
          handler(data);
        });
      }

      // Emit event to star event handlers
      if(handlers['*']) {
        handlers['*'].forEach(function(starHandler) {
          starHandler(event, data);
        });
      }
    }

    return {
      addEventHandler: addEventHandler,
      removeEventHandler: removeEventHandler,
      emit: emit
    };
  };

}(this || global, Chartist));
;/**
 * This module provides some basic prototype inheritance utilities.
 *
 * @module Chartist.Class
 */
/* global Chartist */
(function(globalRoot, Chartist) {
  'use strict';

  function listToArray(list) {
    var arr = [];
    if (list.length) {
      for (var i = 0; i < list.length; i++) {
        arr.push(list[i]);
      }
    }
    return arr;
  }

  /**
   * Method to extend from current prototype.
   *
   * @memberof Chartist.Class
   * @param {Object} properties The object that serves as definition for the prototype that gets created for the new class. This object should always contain a constructor property that is the desired constructor for the newly created class.
   * @param {Object} [superProtoOverride] By default extens will use the current class prototype or Chartist.class. With this parameter you can specify any super prototype that will be used.
   * @return {Function} Constructor function of the new class
   *
   * @example
   * var Fruit = Class.extend({
     * color: undefined,
     *   sugar: undefined,
     *
     *   constructor: function(color, sugar) {
     *     this.color = color;
     *     this.sugar = sugar;
     *   },
     *
     *   eat: function() {
     *     this.sugar = 0;
     *     return this;
     *   }
     * });
   *
   * var Banana = Fruit.extend({
     *   length: undefined,
     *
     *   constructor: function(length, sugar) {
     *     Banana.super.constructor.call(this, 'Yellow', sugar);
     *     this.length = length;
     *   }
     * });
   *
   * var banana = new Banana(20, 40);
   * console.log('banana instanceof Fruit', banana instanceof Fruit);
   * console.log('Fruit is prototype of banana', Fruit.prototype.isPrototypeOf(banana));
   * console.log('bananas prototype is Fruit', Object.getPrototypeOf(banana) === Fruit.prototype);
   * console.log(banana.sugar);
   * console.log(banana.eat().sugar);
   * console.log(banana.color);
   */
  function extend(properties, superProtoOverride) {
    var superProto = superProtoOverride || this.prototype || Chartist.Class;
    var proto = Object.create(superProto);

    Chartist.Class.cloneDefinitions(proto, properties);

    var constr = function() {
      var fn = proto.constructor || function () {},
        instance;

      // If this is linked to the Chartist namespace the constructor was not called with new
      // To provide a fallback we will instantiate here and return the instance
      instance = this === Chartist ? Object.create(proto) : this;
      fn.apply(instance, Array.prototype.slice.call(arguments, 0));

      // If this constructor was not called with new we need to return the instance
      // This will not harm when the constructor has been called with new as the returned value is ignored
      return instance;
    };

    constr.prototype = proto;
    constr.super = superProto;
    constr.extend = this.extend;

    return constr;
  }

  // Variable argument list clones args > 0 into args[0] and retruns modified args[0]
  function cloneDefinitions() {
    var args = listToArray(arguments);
    var target = args[0];

    args.splice(1, args.length - 1).forEach(function (source) {
      Object.getOwnPropertyNames(source).forEach(function (propName) {
        // If this property already exist in target we delete it first
        delete target[propName];
        // Define the property with the descriptor from source
        Object.defineProperty(target, propName,
          Object.getOwnPropertyDescriptor(source, propName));
      });
    });

    return target;
  }

  Chartist.Class = {
    extend: extend,
    cloneDefinitions: cloneDefinitions
  };

}(this || global, Chartist));
;/**
 * Base for all chart types. The methods in Chartist.Base are inherited to all chart types.
 *
 * @module Chartist.Base
 */
/* global Chartist */
(function(globalRoot, Chartist) {
  'use strict';

  var window = globalRoot.window;

  // TODO: Currently we need to re-draw the chart on window resize. This is usually very bad and will affect performance.
  // This is done because we can't work with relative coordinates when drawing the chart because SVG Path does not
  // work with relative positions yet. We need to check if we can do a viewBox hack to switch to percentage.
  // See http://mozilla.6506.n7.nabble.com/Specyfing-paths-with-percentages-unit-td247474.html
  // Update: can be done using the above method tested here: http://codepen.io/gionkunz/pen/KDvLj
  // The problem is with the label offsets that can't be converted into percentage and affecting the chart container
  /**
   * Updates the chart which currently does a full reconstruction of the SVG DOM
   *
   * @param {Object} [data] Optional data you'd like to set for the chart before it will update. If not specified the update method will use the data that is already configured with the chart.
   * @param {Object} [options] Optional options you'd like to add to the previous options for the chart before it will update. If not specified the update method will use the options that have been already configured with the chart.
   * @param {Boolean} [override] If set to true, the passed options will be used to extend the options that have been configured already. Otherwise the chart default options will be used as the base
   * @memberof Chartist.Base
   */
  function update(data, options, override) {
    if(data) {
      this.data = data || {};
      this.data.labels = this.data.labels || [];
      this.data.series = this.data.series || [];
      // Event for data transformation that allows to manipulate the data before it gets rendered in the charts
      this.eventEmitter.emit('data', {
        type: 'update',
        data: this.data
      });
    }

    if(options) {
      this.options = Chartist.extend({}, override ? this.options : this.defaultOptions, options);

      // If chartist was not initialized yet, we just set the options and leave the rest to the initialization
      // Otherwise we re-create the optionsProvider at this point
      if(!this.initializeTimeoutId) {
        this.optionsProvider.removeMediaQueryListeners();
        this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
      }
    }

    // Only re-created the chart if it has been initialized yet
    if(!this.initializeTimeoutId) {
      this.createChart(this.optionsProvider.getCurrentOptions());
    }

    // Return a reference to the chart object to chain up calls
    return this;
  }

  /**
   * This method can be called on the API object of each chart and will un-register all event listeners that were added to other components. This currently includes a window.resize listener as well as media query listeners if any responsive options have been provided. Use this function if you need to destroy and recreate Chartist charts dynamically.
   *
   * @memberof Chartist.Base
   */
  function detach() {
    // Only detach if initialization already occurred on this chart. If this chart still hasn't initialized (therefore
    // the initializationTimeoutId is still a valid timeout reference, we will clear the timeout
    if(!this.initializeTimeoutId) {
      window.removeEventListener('resize', this.resizeListener);
      this.optionsProvider.removeMediaQueryListeners();
    } else {
      window.clearTimeout(this.initializeTimeoutId);
    }

    return this;
  }

  /**
   * Use this function to register event handlers. The handler callbacks are synchronous and will run in the main thread rather than the event loop.
   *
   * @memberof Chartist.Base
   * @param {String} event Name of the event. Check the examples for supported events.
   * @param {Function} handler The handler function that will be called when an event with the given name was emitted. This function will receive a data argument which contains event data. See the example for more details.
   */
  function on(event, handler) {
    this.eventEmitter.addEventHandler(event, handler);
    return this;
  }

  /**
   * Use this function to un-register event handlers. If the handler function parameter is omitted all handlers for the given event will be un-registered.
   *
   * @memberof Chartist.Base
   * @param {String} event Name of the event for which a handler should be removed
   * @param {Function} [handler] The handler function that that was previously used to register a new event handler. This handler will be removed from the event handler list. If this parameter is omitted then all event handlers for the given event are removed from the list.
   */
  function off(event, handler) {
    this.eventEmitter.removeEventHandler(event, handler);
    return this;
  }

  function initialize() {
    // Add window resize listener that re-creates the chart
    window.addEventListener('resize', this.resizeListener);

    // Obtain current options based on matching media queries (if responsive options are given)
    // This will also register a listener that is re-creating the chart based on media changes
    this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
    // Register options change listener that will trigger a chart update
    this.eventEmitter.addEventHandler('optionsChanged', function() {
      this.update();
    }.bind(this));

    // Before the first chart creation we need to register us with all plugins that are configured
    // Initialize all relevant plugins with our chart object and the plugin options specified in the config
    if(this.options.plugins) {
      this.options.plugins.forEach(function(plugin) {
        if(plugin instanceof Array) {
          plugin[0](this, plugin[1]);
        } else {
          plugin(this);
        }
      }.bind(this));
    }

    // Event for data transformation that allows to manipulate the data before it gets rendered in the charts
    this.eventEmitter.emit('data', {
      type: 'initial',
      data: this.data
    });

    // Create the first chart
    this.createChart(this.optionsProvider.getCurrentOptions());

    // As chart is initialized from the event loop now we can reset our timeout reference
    // This is important if the chart gets initialized on the same element twice
    this.initializeTimeoutId = undefined;
  }

  /**
   * Constructor of chart base class.
   *
   * @param query
   * @param data
   * @param defaultOptions
   * @param options
   * @param responsiveOptions
   * @constructor
   */
  function Base(query, data, defaultOptions, options, responsiveOptions) {
    this.container = Chartist.querySelector(query);
    this.data = data || {};
    this.data.labels = this.data.labels || [];
    this.data.series = this.data.series || [];
    this.defaultOptions = defaultOptions;
    this.options = options;
    this.responsiveOptions = responsiveOptions;
    this.eventEmitter = Chartist.EventEmitter();
    this.supportsForeignObject = Chartist.Svg.isSupported('Extensibility');
    this.supportsAnimations = Chartist.Svg.isSupported('AnimationEventsAttribute');
    this.resizeListener = function resizeListener(){
      this.update();
    }.bind(this);

    if(this.container) {
      // If chartist was already initialized in this container we are detaching all event listeners first
      if(this.container.__chartist__) {
        this.container.__chartist__.detach();
      }

      this.container.__chartist__ = this;
    }

    // Using event loop for first draw to make it possible to register event listeners in the same call stack where
    // the chart was created.
    this.initializeTimeoutId = setTimeout(initialize.bind(this), 0);
  }

  // Creating the chart base class
  Chartist.Base = Chartist.Class.extend({
    constructor: Base,
    optionsProvider: undefined,
    container: undefined,
    svg: undefined,
    eventEmitter: undefined,
    createChart: function() {
      throw new Error('Base chart type can\'t be instantiated!');
    },
    update: update,
    detach: detach,
    on: on,
    off: off,
    version: Chartist.version,
    supportsForeignObject: false
  });

}(this || global, Chartist));
;/**
 * Chartist SVG module for simple SVG DOM abstraction
 *
 * @module Chartist.Svg
 */
/* global Chartist */
(function(globalRoot, Chartist) {
  'use strict';

  var document = globalRoot.document;

  /**
   * Chartist.Svg creates a new SVG object wrapper with a starting element. You can use the wrapper to fluently create sub-elements and modify them.
   *
   * @memberof Chartist.Svg
   * @constructor
   * @param {String|Element} name The name of the SVG element to create or an SVG dom element which should be wrapped into Chartist.Svg
   * @param {Object} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
   * @param {String} className This class or class list will be added to the SVG element
   * @param {Object} parent The parent SVG wrapper object where this newly created wrapper and it's element will be attached to as child
   * @param {Boolean} insertFirst If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
   */
  function Svg(name, attributes, className, parent, insertFirst) {
    // If Svg is getting called with an SVG element we just return the wrapper
    if(name instanceof Element) {
      this._node = name;
    } else {
      this._node = document.createElementNS(Chartist.namespaces.svg, name);

      // If this is an SVG element created then custom namespace
      if(name === 'svg') {
        this.attr({
          'xmlns:ct': Chartist.namespaces.ct
        });
      }
    }

    if(attributes) {
      this.attr(attributes);
    }

    if(className) {
      this.addClass(className);
    }

    if(parent) {
      if (insertFirst && parent._node.firstChild) {
        parent._node.insertBefore(this._node, parent._node.firstChild);
      } else {
        parent._node.appendChild(this._node);
      }
    }
  }

  /**
   * Set attributes on the current SVG element of the wrapper you're currently working on.
   *
   * @memberof Chartist.Svg
   * @param {Object|String} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added. If this parameter is a String then the function is used as a getter and will return the attribute value.
   * @param {String} [ns] If specified, the attribute will be obtained using getAttributeNs. In order to write namepsaced attributes you can use the namespace:attribute notation within the attributes object.
   * @return {Object|String} The current wrapper object will be returned so it can be used for chaining or the attribute value if used as getter function.
   */
  function attr(attributes, ns) {
    if(typeof attributes === 'string') {
      if(ns) {
        return this._node.getAttributeNS(ns, attributes);
      } else {
        return this._node.getAttribute(attributes);
      }
    }

    Object.keys(attributes).forEach(function(key) {
      // If the attribute value is undefined we can skip this one
      if(attributes[key] === undefined) {
        return;
      }

      if (key.indexOf(':') !== -1) {
        var namespacedAttribute = key.split(':');
        this._node.setAttributeNS(Chartist.namespaces[namespacedAttribute[0]], key, attributes[key]);
      } else {
        this._node.setAttribute(key, attributes[key]);
      }
    }.bind(this));

    return this;
  }

  /**
   * Create a new SVG element whose wrapper object will be selected for further operations. This way you can also create nested groups easily.
   *
   * @memberof Chartist.Svg
   * @param {String} name The name of the SVG element that should be created as child element of the currently selected element wrapper
   * @param {Object} [attributes] An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
   * @param {String} [className] This class or class list will be added to the SVG element
   * @param {Boolean} [insertFirst] If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
   * @return {Chartist.Svg} Returns a Chartist.Svg wrapper object that can be used to modify the containing SVG data
   */
  function elem(name, attributes, className, insertFirst) {
    return new Chartist.Svg(name, attributes, className, this, insertFirst);
  }

  /**
   * Returns the parent Chartist.SVG wrapper object
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} Returns a Chartist.Svg wrapper around the parent node of the current node. If the parent node is not existing or it's not an SVG node then this function will return null.
   */
  function parent() {
    return this._node.parentNode instanceof SVGElement ? new Chartist.Svg(this._node.parentNode) : null;
  }

  /**
   * This method returns a Chartist.Svg wrapper around the root SVG element of the current tree.
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} The root SVG element wrapped in a Chartist.Svg element
   */
  function root() {
    var node = this._node;
    while(node.nodeName !== 'svg') {
      node = node.parentNode;
    }
    return new Chartist.Svg(node);
  }

  /**
   * Find the first child SVG element of the current element that matches a CSS selector. The returned object is a Chartist.Svg wrapper.
   *
   * @memberof Chartist.Svg
   * @param {String} selector A CSS selector that is used to query for child SVG elements
   * @return {Chartist.Svg} The SVG wrapper for the element found or null if no element was found
   */
  function querySelector(selector) {
    var foundNode = this._node.querySelector(selector);
    return foundNode ? new Chartist.Svg(foundNode) : null;
  }

  /**
   * Find the all child SVG elements of the current element that match a CSS selector. The returned object is a Chartist.Svg.List wrapper.
   *
   * @memberof Chartist.Svg
   * @param {String} selector A CSS selector that is used to query for child SVG elements
   * @return {Chartist.Svg.List} The SVG wrapper list for the element found or null if no element was found
   */
  function querySelectorAll(selector) {
    var foundNodes = this._node.querySelectorAll(selector);
    return foundNodes.length ? new Chartist.Svg.List(foundNodes) : null;
  }

  /**
   * Returns the underlying SVG node for the current element.
   *
   * @memberof Chartist.Svg
   * @returns {Node}
   */
  function getNode() {
    return this._node;
  }

  /**
   * This method creates a foreignObject (see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) that allows to embed HTML content into a SVG graphic. With the help of foreignObjects you can enable the usage of regular HTML elements inside of SVG where they are subject for SVG positioning and transformation but the Browser will use the HTML rendering capabilities for the containing DOM.
   *
   * @memberof Chartist.Svg
   * @param {Node|String} content The DOM Node, or HTML string that will be converted to a DOM Node, that is then placed into and wrapped by the foreignObject
   * @param {String} [attributes] An object with properties that will be added as attributes to the foreignObject element that is created. Attributes with undefined values will not be added.
   * @param {String} [className] This class or class list will be added to the SVG element
   * @param {Boolean} [insertFirst] Specifies if the foreignObject should be inserted as first child
   * @return {Chartist.Svg} New wrapper object that wraps the foreignObject element
   */
  function foreignObject(content, attributes, className, insertFirst) {
    // If content is string then we convert it to DOM
    // TODO: Handle case where content is not a string nor a DOM Node
    if(typeof content === 'string') {
      var container = document.createElement('div');
      container.innerHTML = content;
      content = container.firstChild;
    }

    // Adding namespace to content element
    content.setAttribute('xmlns', Chartist.namespaces.xmlns);

    // Creating the foreignObject without required extension attribute (as described here
    // http://www.w3.org/TR/SVG/extend.html#ForeignObjectElement)
    var fnObj = this.elem('foreignObject', attributes, className, insertFirst);

    // Add content to foreignObjectElement
    fnObj._node.appendChild(content);

    return fnObj;
  }

  /**
   * This method adds a new text element to the current Chartist.Svg wrapper.
   *
   * @memberof Chartist.Svg
   * @param {String} t The text that should be added to the text element that is created
   * @return {Chartist.Svg} The same wrapper object that was used to add the newly created element
   */
  function text(t) {
    this._node.appendChild(document.createTextNode(t));
    return this;
  }

  /**
   * This method will clear all child nodes of the current wrapper object.
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} The same wrapper object that got emptied
   */
  function empty() {
    while (this._node.firstChild) {
      this._node.removeChild(this._node.firstChild);
    }

    return this;
  }

  /**
   * This method will cause the current wrapper to remove itself from its parent wrapper. Use this method if you'd like to get rid of an element in a given DOM structure.
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} The parent wrapper object of the element that got removed
   */
  function remove() {
    this._node.parentNode.removeChild(this._node);
    return this.parent();
  }

  /**
   * This method will replace the element with a new element that can be created outside of the current DOM.
   *
   * @memberof Chartist.Svg
   * @param {Chartist.Svg} newElement The new Chartist.Svg object that will be used to replace the current wrapper object
   * @return {Chartist.Svg} The wrapper of the new element
   */
  function replace(newElement) {
    this._node.parentNode.replaceChild(newElement._node, this._node);
    return newElement;
  }

  /**
   * This method will append an element to the current element as a child.
   *
   * @memberof Chartist.Svg
   * @param {Chartist.Svg} element The Chartist.Svg element that should be added as a child
   * @param {Boolean} [insertFirst] Specifies if the element should be inserted as first child
   * @return {Chartist.Svg} The wrapper of the appended object
   */
  function append(element, insertFirst) {
    if(insertFirst && this._node.firstChild) {
      this._node.insertBefore(element._node, this._node.firstChild);
    } else {
      this._node.appendChild(element._node);
    }

    return this;
  }

  /**
   * Returns an array of class names that are attached to the current wrapper element. This method can not be chained further.
   *
   * @memberof Chartist.Svg
   * @return {Array} A list of classes or an empty array if there are no classes on the current element
   */
  function classes() {
    return this._node.getAttribute('class') ? this._node.getAttribute('class').trim().split(/\s+/) : [];
  }

  /**
   * Adds one or a space separated list of classes to the current element and ensures the classes are only existing once.
   *
   * @memberof Chartist.Svg
   * @param {String} names A white space separated list of class names
   * @return {Chartist.Svg} The wrapper of the current element
   */
  function addClass(names) {
    this._node.setAttribute('class',
      this.classes(this._node)
        .concat(names.trim().split(/\s+/))
        .filter(function(elem, pos, self) {
          return self.indexOf(elem) === pos;
        }).join(' ')
    );

    return this;
  }

  /**
   * Removes one or a space separated list of classes from the current element.
   *
   * @memberof Chartist.Svg
   * @param {String} names A white space separated list of class names
   * @return {Chartist.Svg} The wrapper of the current element
   */
  function removeClass(names) {
    var removedClasses = names.trim().split(/\s+/);

    this._node.setAttribute('class', this.classes(this._node).filter(function(name) {
      return removedClasses.indexOf(name) === -1;
    }).join(' '));

    return this;
  }

  /**
   * Removes all classes from the current element.
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} The wrapper of the current element
   */
  function removeAllClasses() {
    this._node.setAttribute('class', '');

    return this;
  }

  /**
   * Get element height using `getBoundingClientRect`
   *
   * @memberof Chartist.Svg
   * @return {Number} The elements height in pixels
   */
  function height() {
    return this._node.getBoundingClientRect().height;
  }

  /**
   * Get element width using `getBoundingClientRect`
   *
   * @memberof Chartist.Core
   * @return {Number} The elements width in pixels
   */
  function width() {
    return this._node.getBoundingClientRect().width;
  }

  /**
   * The animate function lets you animate the current element with SMIL animations. You can add animations for multiple attributes at the same time by using an animation definition object. This object should contain SMIL animation attributes. Please refer to http://www.w3.org/TR/SVG/animate.html for a detailed specification about the available animation attributes. Additionally an easing property can be passed in the animation definition object. This can be a string with a name of an easing function in `Chartist.Svg.Easing` or an array with four numbers specifying a cubic Bézier curve.
   * **An animations object could look like this:**
   * ```javascript
   * element.animate({
   *   opacity: {
   *     dur: 1000,
   *     from: 0,
   *     to: 1
   *   },
   *   x1: {
   *     dur: '1000ms',
   *     from: 100,
   *     to: 200,
   *     easing: 'easeOutQuart'
   *   },
   *   y1: {
   *     dur: '2s',
   *     from: 0,
   *     to: 100
   *   }
   * });
   * ```
   * **Automatic unit conversion**
   * For the `dur` and the `begin` animate attribute you can also omit a unit by passing a number. The number will automatically be converted to milli seconds.
   * **Guided mode**
   * The default behavior of SMIL animations with offset using the `begin` attribute is that the attribute will keep it's original value until the animation starts. Mostly this behavior is not desired as you'd like to have your element attributes already initialized with the animation `from` value even before the animation starts. Also if you don't specify `fill="freeze"` on an animate element or if you delete the animation after it's done (which is done in guided mode) the attribute will switch back to the initial value. This behavior is also not desired when performing simple one-time animations. For one-time animations you'd want to trigger animations immediately instead of relative to the document begin time. That's why in guided mode Chartist.Svg will also use the `begin` property to schedule a timeout and manually start the animation after the timeout. If you're using multiple SMIL definition objects for an attribute (in an array), guided mode will be disabled for this attribute, even if you explicitly enabled it.
   * If guided mode is enabled the following behavior is added:
   * - Before the animation starts (even when delayed with `begin`) the animated attribute will be set already to the `from` value of the animation
   * - `begin` is explicitly set to `indefinite` so it can be started manually without relying on document begin time (creation)
   * - The animate element will be forced to use `fill="freeze"`
   * - The animation will be triggered with `beginElement()` in a timeout where `begin` of the definition object is interpreted in milli seconds. If no `begin` was specified the timeout is triggered immediately.
   * - After the animation the element attribute value will be set to the `to` value of the animation
   * - The animate element is deleted from the DOM
   *
   * @memberof Chartist.Svg
   * @param {Object} animations An animations object where the property keys are the attributes you'd like to animate. The properties should be objects again that contain the SMIL animation attributes (usually begin, dur, from, and to). The property begin and dur is auto converted (see Automatic unit conversion). You can also schedule multiple animations for the same attribute by passing an Array of SMIL definition objects. Attributes that contain an array of SMIL definition objects will not be executed in guided mode.
   * @param {Boolean} guided Specify if guided mode should be activated for this animation (see Guided mode). If not otherwise specified, guided mode will be activated.
   * @param {Object} eventEmitter If specified, this event emitter will be notified when an animation starts or ends.
   * @return {Chartist.Svg} The current element where the animation was added
   */
  function animate(animations, guided, eventEmitter) {
    if(guided === undefined) {
      guided = true;
    }

    Object.keys(animations).forEach(function createAnimateForAttributes(attribute) {

      function createAnimate(animationDefinition, guided) {
        var attributeProperties = {},
          animate,
          timeout,
          easing;

        // Check if an easing is specified in the definition object and delete it from the object as it will not
        // be part of the animate element attributes.
        if(animationDefinition.easing) {
          // If already an easing Bézier curve array we take it or we lookup a easing array in the Easing object
          easing = animationDefinition.easing instanceof Array ?
            animationDefinition.easing :
            Chartist.Svg.Easing[animationDefinition.easing];
          delete animationDefinition.easing;
        }

        // If numeric dur or begin was provided we assume milli seconds
        animationDefinition.begin = Chartist.ensureUnit(animationDefinition.begin, 'ms');
        animationDefinition.dur = Chartist.ensureUnit(animationDefinition.dur, 'ms');

        if(easing) {
          animationDefinition.calcMode = 'spline';
          animationDefinition.keySplines = easing.join(' ');
          animationDefinition.keyTimes = '0;1';
        }

        // Adding "fill: freeze" if we are in guided mode and set initial attribute values
        if(guided) {
          animationDefinition.fill = 'freeze';
          // Animated property on our element should already be set to the animation from value in guided mode
          attributeProperties[attribute] = animationDefinition.from;
          this.attr(attributeProperties);

          // In guided mode we also set begin to indefinite so we can trigger the start manually and put the begin
          // which needs to be in ms aside
          timeout = Chartist.quantity(animationDefinition.begin || 0).value;
          animationDefinition.begin = 'indefinite';
        }

        animate = this.elem('animate', Chartist.extend({
          attributeName: attribute
        }, animationDefinition));

        if(guided) {
          // If guided we take the value that was put aside in timeout and trigger the animation manually with a timeout
          setTimeout(function() {
            // If beginElement fails we set the animated attribute to the end position and remove the animate element
            // This happens if the SMIL ElementTimeControl interface is not supported or any other problems occured in
            // the browser. (Currently FF 34 does not support animate elements in foreignObjects)
            try {
              animate._node.beginElement();
            } catch(err) {
              // Set animated attribute to current animated value
              attributeProperties[attribute] = animationDefinition.to;
              this.attr(attributeProperties);
              // Remove the animate element as it's no longer required
              animate.remove();
            }
          }.bind(this), timeout);
        }

        if(eventEmitter) {
          animate._node.addEventListener('beginEvent', function handleBeginEvent() {
            eventEmitter.emit('animationBegin', {
              element: this,
              animate: animate._node,
              params: animationDefinition
            });
          }.bind(this));
        }

        animate._node.addEventListener('endEvent', function handleEndEvent() {
          if(eventEmitter) {
            eventEmitter.emit('animationEnd', {
              element: this,
              animate: animate._node,
              params: animationDefinition
            });
          }

          if(guided) {
            // Set animated attribute to current animated value
            attributeProperties[attribute] = animationDefinition.to;
            this.attr(attributeProperties);
            // Remove the animate element as it's no longer required
            animate.remove();
          }
        }.bind(this));
      }

      // If current attribute is an array of definition objects we create an animate for each and disable guided mode
      if(animations[attribute] instanceof Array) {
        animations[attribute].forEach(function(animationDefinition) {
          createAnimate.bind(this)(animationDefinition, false);
        }.bind(this));
      } else {
        createAnimate.bind(this)(animations[attribute], guided);
      }

    }.bind(this));

    return this;
  }

  Chartist.Svg = Chartist.Class.extend({
    constructor: Svg,
    attr: attr,
    elem: elem,
    parent: parent,
    root: root,
    querySelector: querySelector,
    querySelectorAll: querySelectorAll,
    getNode: getNode,
    foreignObject: foreignObject,
    text: text,
    empty: empty,
    remove: remove,
    replace: replace,
    append: append,
    classes: classes,
    addClass: addClass,
    removeClass: removeClass,
    removeAllClasses: removeAllClasses,
    height: height,
    width: width,
    animate: animate
  });

  /**
   * This method checks for support of a given SVG feature like Extensibility, SVG-animation or the like. Check http://www.w3.org/TR/SVG11/feature for a detailed list.
   *
   * @memberof Chartist.Svg
   * @param {String} feature The SVG 1.1 feature that should be checked for support.
   * @return {Boolean} True of false if the feature is supported or not
   */
  Chartist.Svg.isSupported = function(feature) {
    return document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#' + feature, '1.1');
  };

  /**
   * This Object contains some standard easing cubic bezier curves. Then can be used with their name in the `Chartist.Svg.animate`. You can also extend the list and use your own name in the `animate` function. Click the show code button to see the available bezier functions.
   *
   * @memberof Chartist.Svg
   */
  var easingCubicBeziers = {
    easeInSine: [0.47, 0, 0.745, 0.715],
    easeOutSine: [0.39, 0.575, 0.565, 1],
    easeInOutSine: [0.445, 0.05, 0.55, 0.95],
    easeInQuad: [0.55, 0.085, 0.68, 0.53],
    easeOutQuad: [0.25, 0.46, 0.45, 0.94],
    easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
    easeInCubic: [0.55, 0.055, 0.675, 0.19],
    easeOutCubic: [0.215, 0.61, 0.355, 1],
    easeInOutCubic: [0.645, 0.045, 0.355, 1],
    easeInQuart: [0.895, 0.03, 0.685, 0.22],
    easeOutQuart: [0.165, 0.84, 0.44, 1],
    easeInOutQuart: [0.77, 0, 0.175, 1],
    easeInQuint: [0.755, 0.05, 0.855, 0.06],
    easeOutQuint: [0.23, 1, 0.32, 1],
    easeInOutQuint: [0.86, 0, 0.07, 1],
    easeInExpo: [0.95, 0.05, 0.795, 0.035],
    easeOutExpo: [0.19, 1, 0.22, 1],
    easeInOutExpo: [1, 0, 0, 1],
    easeInCirc: [0.6, 0.04, 0.98, 0.335],
    easeOutCirc: [0.075, 0.82, 0.165, 1],
    easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
    easeInBack: [0.6, -0.28, 0.735, 0.045],
    easeOutBack: [0.175, 0.885, 0.32, 1.275],
    easeInOutBack: [0.68, -0.55, 0.265, 1.55]
  };

  Chartist.Svg.Easing = easingCubicBeziers;

  /**
   * This helper class is to wrap multiple `Chartist.Svg` elements into a list where you can call the `Chartist.Svg` functions on all elements in the list with one call. This is helpful when you'd like to perform calls with `Chartist.Svg` on multiple elements.
   * An instance of this class is also returned by `Chartist.Svg.querySelectorAll`.
   *
   * @memberof Chartist.Svg
   * @param {Array<Node>|NodeList} nodeList An Array of SVG DOM nodes or a SVG DOM NodeList (as returned by document.querySelectorAll)
   * @constructor
   */
  function SvgList(nodeList) {
    var list = this;

    this.svgElements = [];
    for(var i = 0; i < nodeList.length; i++) {
      this.svgElements.push(new Chartist.Svg(nodeList[i]));
    }

    // Add delegation methods for Chartist.Svg
    Object.keys(Chartist.Svg.prototype).filter(function(prototypeProperty) {
      return ['constructor',
          'parent',
          'querySelector',
          'querySelectorAll',
          'replace',
          'append',
          'classes',
          'height',
          'width'].indexOf(prototypeProperty) === -1;
    }).forEach(function(prototypeProperty) {
      list[prototypeProperty] = function() {
        var args = Array.prototype.slice.call(arguments, 0);
        list.svgElements.forEach(function(element) {
          Chartist.Svg.prototype[prototypeProperty].apply(element, args);
        });
        return list;
      };
    });
  }

  Chartist.Svg.List = Chartist.Class.extend({
    constructor: SvgList
  });
}(this || global, Chartist));
;/**
 * Chartist SVG path module for SVG path description creation and modification.
 *
 * @module Chartist.Svg.Path
 */
/* global Chartist */
(function(globalRoot, Chartist) {
  'use strict';

  /**
   * Contains the descriptors of supported element types in a SVG path. Currently only move, line and curve are supported.
   *
   * @memberof Chartist.Svg.Path
   * @type {Object}
   */
  var elementDescriptions = {
    m: ['x', 'y'],
    l: ['x', 'y'],
    c: ['x1', 'y1', 'x2', 'y2', 'x', 'y'],
    a: ['rx', 'ry', 'xAr', 'lAf', 'sf', 'x', 'y']
  };

  /**
   * Default options for newly created SVG path objects.
   *
   * @memberof Chartist.Svg.Path
   * @type {Object}
   */
  var defaultOptions = {
    // The accuracy in digit count after the decimal point. This will be used to round numbers in the SVG path. If this option is set to false then no rounding will be performed.
    accuracy: 3
  };

  function element(command, params, pathElements, pos, relative, data) {
    var pathElement = Chartist.extend({
      command: relative ? command.toLowerCase() : command.toUpperCase()
    }, params, data ? { data: data } : {} );

    pathElements.splice(pos, 0, pathElement);
  }

  function forEachParam(pathElements, cb) {
    pathElements.forEach(function(pathElement, pathElementIndex) {
      elementDescriptions[pathElement.command.toLowerCase()].forEach(function(paramName, paramIndex) {
        cb(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
      });
    });
  }

  /**
   * Used to construct a new path object.
   *
   * @memberof Chartist.Svg.Path
   * @param {Boolean} close If set to true then this path will be closed when stringified (with a Z at the end)
   * @param {Object} options Options object that overrides the default objects. See default options for more details.
   * @constructor
   */
  function SvgPath(close, options) {
    this.pathElements = [];
    this.pos = 0;
    this.close = close;
    this.options = Chartist.extend({}, defaultOptions, options);
  }

  /**
   * Gets or sets the current position (cursor) inside of the path. You can move around the cursor freely but limited to 0 or the count of existing elements. All modifications with element functions will insert new elements at the position of this cursor.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} [pos] If a number is passed then the cursor is set to this position in the path element array.
   * @return {Chartist.Svg.Path|Number} If the position parameter was passed then the return value will be the path object for easy call chaining. If no position parameter was passed then the current position is returned.
   */
  function position(pos) {
    if(pos !== undefined) {
      this.pos = Math.max(0, Math.min(this.pathElements.length, pos));
      return this;
    } else {
      return this.pos;
    }
  }

  /**
   * Removes elements from the path starting at the current position.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} count Number of path elements that should be removed from the current position.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function remove(count) {
    this.pathElements.splice(this.pos, count);
    return this;
  }

  /**
   * Use this function to add a new move SVG path element.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The x coordinate for the move element.
   * @param {Number} y The y coordinate for the move element.
   * @param {Boolean} [relative] If set to true the move element will be created with relative coordinates (lowercase letter)
   * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function move(x, y, relative, data) {
    element('M', {
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }

  /**
   * Use this function to add a new line SVG path element.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The x coordinate for the line element.
   * @param {Number} y The y coordinate for the line element.
   * @param {Boolean} [relative] If set to true the line element will be created with relative coordinates (lowercase letter)
   * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function line(x, y, relative, data) {
    element('L', {
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }

  /**
   * Use this function to add a new curve SVG path element.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x1 The x coordinate for the first control point of the bezier curve.
   * @param {Number} y1 The y coordinate for the first control point of the bezier curve.
   * @param {Number} x2 The x coordinate for the second control point of the bezier curve.
   * @param {Number} y2 The y coordinate for the second control point of the bezier curve.
   * @param {Number} x The x coordinate for the target point of the curve element.
   * @param {Number} y The y coordinate for the target point of the curve element.
   * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
   * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function curve(x1, y1, x2, y2, x, y, relative, data) {
    element('C', {
      x1: +x1,
      y1: +y1,
      x2: +x2,
      y2: +y2,
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }

  /**
   * Use this function to add a new non-bezier curve SVG path element.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} rx The radius to be used for the x-axis of the arc.
   * @param {Number} ry The radius to be used for the y-axis of the arc.
   * @param {Number} xAr Defines the orientation of the arc
   * @param {Number} lAf Large arc flag
   * @param {Number} sf Sweep flag
   * @param {Number} x The x coordinate for the target point of the curve element.
   * @param {Number} y The y coordinate for the target point of the curve element.
   * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
   * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function arc(rx, ry, xAr, lAf, sf, x, y, relative, data) {
    element('A', {
      rx: +rx,
      ry: +ry,
      xAr: +xAr,
      lAf: +lAf,
      sf: +sf,
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }

  /**
   * Parses an SVG path seen in the d attribute of path elements, and inserts the parsed elements into the existing path object at the current cursor position. Any closing path indicators (Z at the end of the path) will be ignored by the parser as this is provided by the close option in the options of the path object.
   *
   * @memberof Chartist.Svg.Path
   * @param {String} path Any SVG path that contains move (m), line (l) or curve (c) components.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function parse(path) {
    // Parsing the SVG path string into an array of arrays [['M', '10', '10'], ['L', '100', '100']]
    var chunks = path.replace(/([A-Za-z])([0-9])/g, '$1 $2')
      .replace(/([0-9])([A-Za-z])/g, '$1 $2')
      .split(/[\s,]+/)
      .reduce(function(result, element) {
        if(element.match(/[A-Za-z]/)) {
          result.push([]);
        }

        result[result.length - 1].push(element);
        return result;
      }, []);

    // If this is a closed path we remove the Z at the end because this is determined by the close option
    if(chunks[chunks.length - 1][0].toUpperCase() === 'Z') {
      chunks.pop();
    }

    // Using svgPathElementDescriptions to map raw path arrays into objects that contain the command and the parameters
    // For example {command: 'M', x: '10', y: '10'}
    var elements = chunks.map(function(chunk) {
        var command = chunk.shift(),
          description = elementDescriptions[command.toLowerCase()];

        return Chartist.extend({
          command: command
        }, description.reduce(function(result, paramName, index) {
          result[paramName] = +chunk[index];
          return result;
        }, {}));
      });

    // Preparing a splice call with the elements array as var arg params and insert the parsed elements at the current position
    var spliceArgs = [this.pos, 0];
    Array.prototype.push.apply(spliceArgs, elements);
    Array.prototype.splice.apply(this.pathElements, spliceArgs);
    // Increase the internal position by the element count
    this.pos += elements.length;

    return this;
  }

  /**
   * This function renders to current SVG path object into a final SVG string that can be used in the d attribute of SVG path elements. It uses the accuracy option to round big decimals. If the close parameter was set in the constructor of this path object then a path closing Z will be appended to the output string.
   *
   * @memberof Chartist.Svg.Path
   * @return {String}
   */
  function stringify() {
    var accuracyMultiplier = Math.pow(10, this.options.accuracy);

    return this.pathElements.reduce(function(path, pathElement) {
        var params = elementDescriptions[pathElement.command.toLowerCase()].map(function(paramName) {
          return this.options.accuracy ?
            (Math.round(pathElement[paramName] * accuracyMultiplier) / accuracyMultiplier) :
            pathElement[paramName];
        }.bind(this));

        return path + pathElement.command + params.join(',');
      }.bind(this), '') + (this.close ? 'Z' : '');
  }

  /**
   * Scales all elements in the current SVG path object. There is an individual parameter for each coordinate. Scaling will also be done for control points of curves, affecting the given coordinate.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The number which will be used to scale the x, x1 and x2 of all path elements.
   * @param {Number} y The number which will be used to scale the y, y1 and y2 of all path elements.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function scale(x, y) {
    forEachParam(this.pathElements, function(pathElement, paramName) {
      pathElement[paramName] *= paramName[0] === 'x' ? x : y;
    });
    return this;
  }

  /**
   * Translates all elements in the current SVG path object. The translation is relative and there is an individual parameter for each coordinate. Translation will also be done for control points of curves, affecting the given coordinate.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The number which will be used to translate the x, x1 and x2 of all path elements.
   * @param {Number} y The number which will be used to translate the y, y1 and y2 of all path elements.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function translate(x, y) {
    forEachParam(this.pathElements, function(pathElement, paramName) {
      pathElement[paramName] += paramName[0] === 'x' ? x : y;
    });
    return this;
  }

  /**
   * This function will run over all existing path elements and then loop over their attributes. The callback function will be called for every path element attribute that exists in the current path.
   * The method signature of the callback function looks like this:
   * ```javascript
   * function(pathElement, paramName, pathElementIndex, paramIndex, pathElements)
   * ```
   * If something else than undefined is returned by the callback function, this value will be used to replace the old value. This allows you to build custom transformations of path objects that can't be achieved using the basic transformation functions scale and translate.
   *
   * @memberof Chartist.Svg.Path
   * @param {Function} transformFnc The callback function for the transformation. Check the signature in the function description.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function transform(transformFnc) {
    forEachParam(this.pathElements, function(pathElement, paramName, pathElementIndex, paramIndex, pathElements) {
      var transformed = transformFnc(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
      if(transformed || transformed === 0) {
        pathElement[paramName] = transformed;
      }
    });
    return this;
  }

  /**
   * This function clones a whole path object with all its properties. This is a deep clone and path element objects will also be cloned.
   *
   * @memberof Chartist.Svg.Path
   * @param {Boolean} [close] Optional option to set the new cloned path to closed. If not specified or false, the original path close option will be used.
   * @return {Chartist.Svg.Path}
   */
  function clone(close) {
    var c = new Chartist.Svg.Path(close || this.close);
    c.pos = this.pos;
    c.pathElements = this.pathElements.slice().map(function cloneElements(pathElement) {
      return Chartist.extend({}, pathElement);
    });
    c.options = Chartist.extend({}, this.options);
    return c;
  }

  /**
   * Split a Svg.Path object by a specific command in the path chain. The path chain will be split and an array of newly created paths objects will be returned. This is useful if you'd like to split an SVG path by it's move commands, for example, in order to isolate chunks of drawings.
   *
   * @memberof Chartist.Svg.Path
   * @param {String} command The command you'd like to use to split the path
   * @return {Array<Chartist.Svg.Path>}
   */
  function splitByCommand(command) {
    var split = [
      new Chartist.Svg.Path()
    ];

    this.pathElements.forEach(function(pathElement) {
      if(pathElement.command === command.toUpperCase() && split[split.length - 1].pathElements.length !== 0) {
        split.push(new Chartist.Svg.Path());
      }

      split[split.length - 1].pathElements.push(pathElement);
    });

    return split;
  }

  /**
   * This static function on `Chartist.Svg.Path` is joining multiple paths together into one paths.
   *
   * @memberof Chartist.Svg.Path
   * @param {Array<Chartist.Svg.Path>} paths A list of paths to be joined together. The order is important.
   * @param {boolean} close If the newly created path should be a closed path
   * @param {Object} options Path options for the newly created path.
   * @return {Chartist.Svg.Path}
   */

  function join(paths, close, options) {
    var joinedPath = new Chartist.Svg.Path(close, options);
    for(var i = 0; i < paths.length; i++) {
      var path = paths[i];
      for(var j = 0; j < path.pathElements.length; j++) {
        joinedPath.pathElements.push(path.pathElements[j]);
      }
    }
    return joinedPath;
  }

  Chartist.Svg.Path = Chartist.Class.extend({
    constructor: SvgPath,
    position: position,
    remove: remove,
    move: move,
    line: line,
    curve: curve,
    arc: arc,
    scale: scale,
    translate: translate,
    transform: transform,
    parse: parse,
    stringify: stringify,
    clone: clone,
    splitByCommand: splitByCommand
  });

  Chartist.Svg.Path.elementDescriptions = elementDescriptions;
  Chartist.Svg.Path.join = join;
}(this || global, Chartist));
;/* global Chartist */
(function (globalRoot, Chartist) {
  'use strict';

  var window = globalRoot.window;
  var document = globalRoot.document;

  var axisUnits = {
    x: {
      pos: 'x',
      len: 'width',
      dir: 'horizontal',
      rectStart: 'x1',
      rectEnd: 'x2',
      rectOffset: 'y2'
    },
    y: {
      pos: 'y',
      len: 'height',
      dir: 'vertical',
      rectStart: 'y2',
      rectEnd: 'y1',
      rectOffset: 'x1'
    }
  };

  function Axis(units, chartRect, ticks, options) {
    this.units = units;
    this.counterUnits = units === axisUnits.x ? axisUnits.y : axisUnits.x;
    this.chartRect = chartRect;
    this.axisLength = chartRect[units.rectEnd] - chartRect[units.rectStart];
    this.gridOffset = chartRect[units.rectOffset];
    this.ticks = ticks;
    this.options = options;
  }

  function createGridAndLabels(gridGroup, labelGroup, useForeignObject, chartOptions, eventEmitter) {
    var axisOptions = chartOptions['axis' + this.units.pos.toUpperCase()];
    var projectedValues = this.ticks.map(this.projectValue.bind(this));
    var labelValues = this.ticks.map(axisOptions.labelInterpolationFnc);

    projectedValues.forEach(function(projectedValue, index) {
      var labelOffset = {
        x: 0,
        y: 0
      };

      // TODO: Find better solution for solving this problem
      // Calculate how much space we have available for the label
      var labelLength;
      if(projectedValues[index + 1]) {
        // If we still have one label ahead, we can calculate the distance to the next tick / label
        labelLength = projectedValues[index + 1] - projectedValue;
      } else {
        // If we don't have a label ahead and we have only two labels in total, we just take the remaining distance to
        // on the whole axis length. We limit that to a minimum of 30 pixel, so that labels close to the border will
        // still be visible inside of the chart padding.
        labelLength = Math.max(this.axisLength - projectedValue, 30);
      }

      // Skip grid lines and labels where interpolated label values are falsey (execpt for 0)
      if(Chartist.isFalseyButZero(labelValues[index]) && labelValues[index] !== '') {
        return;
      }

      // Transform to global coordinates using the chartRect
      // We also need to set the label offset for the createLabel function
      if(this.units.pos === 'x') {
        projectedValue = this.chartRect.x1 + projectedValue;
        labelOffset.x = chartOptions.axisX.labelOffset.x;

        // If the labels should be positioned in start position (top side for vertical axis) we need to set a
        // different offset as for positioned with end (bottom)
        if(chartOptions.axisX.position === 'start') {
          labelOffset.y = this.chartRect.padding.top + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
        } else {
          labelOffset.y = this.chartRect.y1 + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
        }
      } else {
        projectedValue = this.chartRect.y1 - projectedValue;
        labelOffset.y = chartOptions.axisY.labelOffset.y - (useForeignObject ? labelLength : 0);

        // If the labels should be positioned in start position (left side for horizontal axis) we need to set a
        // different offset as for positioned with end (right side)
        if(chartOptions.axisY.position === 'start') {
          labelOffset.x = useForeignObject ? this.chartRect.padding.left + chartOptions.axisY.labelOffset.x : this.chartRect.x1 - 10;
        } else {
          labelOffset.x = this.chartRect.x2 + chartOptions.axisY.labelOffset.x + 10;
        }
      }

      if(axisOptions.showGrid) {
        Chartist.createGrid(projectedValue, index, this, this.gridOffset, this.chartRect[this.counterUnits.len](), gridGroup, [
          chartOptions.classNames.grid,
          chartOptions.classNames[this.units.dir]
        ], eventEmitter);
      }

      if(axisOptions.showLabel) {
        Chartist.createLabel(projectedValue, labelLength, index, labelValues, this, axisOptions.offset, labelOffset, labelGroup, [
          chartOptions.classNames.label,
          chartOptions.classNames[this.units.dir],
          (axisOptions.position === 'start' ? chartOptions.classNames[axisOptions.position] : chartOptions.classNames['end'])
        ], useForeignObject, eventEmitter);
      }
    }.bind(this));
  }

  Chartist.Axis = Chartist.Class.extend({
    constructor: Axis,
    createGridAndLabels: createGridAndLabels,
    projectValue: function(value, index, data) {
      throw new Error('Base axis can\'t be instantiated!');
    }
  });

  Chartist.Axis.units = axisUnits;

}(this || global, Chartist));
;/**
 * The auto scale axis uses standard linear scale projection of values along an axis. It uses order of magnitude to find a scale automatically and evaluates the available space in order to find the perfect amount of ticks for your chart.
 * **Options**
 * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
 * ```javascript
 * var options = {
 *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
 *   high: 100,
 *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
 *   low: 0,
 *   // This option will be used when finding the right scale division settings. The amount of ticks on the scale will be determined so that as many ticks as possible will be displayed, while not violating this minimum required space (in pixel).
 *   scaleMinSpace: 20,
 *   // Can be set to true or false. If set to true, the scale will be generated with whole numbers only.
 *   onlyInteger: true,
 *   // The reference value can be used to make sure that this value will always be on the chart. This is especially useful on bipolar charts where the bipolar center always needs to be part of the chart.
 *   referenceValue: 5
 * };
 * ```
 *
 * @module Chartist.AutoScaleAxis
 */
/* global Chartist */
(function (globalRoot, Chartist) {
  'use strict';

  var window = globalRoot.window;
  var document = globalRoot.document;

  function AutoScaleAxis(axisUnit, data, chartRect, options) {
    // Usually we calculate highLow based on the data but this can be overriden by a highLow object in the options
    var highLow = options.highLow || Chartist.getHighLow(data, options, axisUnit.pos);
    this.bounds = Chartist.getBounds(chartRect[axisUnit.rectEnd] - chartRect[axisUnit.rectStart], highLow, options.scaleMinSpace || 20, options.onlyInteger);
    this.range = {
      min: this.bounds.min,
      max: this.bounds.max
    };

    Chartist.AutoScaleAxis.super.constructor.call(this,
      axisUnit,
      chartRect,
      this.bounds.values,
      options);
  }

  function projectValue(value) {
    return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.bounds.min) / this.bounds.range;
  }

  Chartist.AutoScaleAxis = Chartist.Axis.extend({
    constructor: AutoScaleAxis,
    projectValue: projectValue
  });

}(this || global, Chartist));
;/**
 * The fixed scale axis uses standard linear projection of values along an axis. It makes use of a divisor option to divide the range provided from the minimum and maximum value or the options high and low that will override the computed minimum and maximum.
 * **Options**
 * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
 * ```javascript
 * var options = {
 *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
 *   high: 100,
 *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
 *   low: 0,
 *   // If specified then the value range determined from minimum to maximum (or low and high) will be divided by this number and ticks will be generated at those division points. The default divisor is 1.
 *   divisor: 4,
 *   // If ticks is explicitly set, then the axis will not compute the ticks with the divisor, but directly use the data in ticks to determine at what points on the axis a tick need to be generated.
 *   ticks: [1, 10, 20, 30]
 * };
 * ```
 *
 * @module Chartist.FixedScaleAxis
 */
/* global Chartist */
(function (globalRoot, Chartist) {
  'use strict';

  var window = globalRoot.window;
  var document = globalRoot.document;

  function FixedScaleAxis(axisUnit, data, chartRect, options) {
    var highLow = options.highLow || Chartist.getHighLow(data, options, axisUnit.pos);
    this.divisor = options.divisor || 1;
    this.ticks = options.ticks || Chartist.times(this.divisor).map(function(value, index) {
      return highLow.low + (highLow.high - highLow.low) / this.divisor * index;
    }.bind(this));
    this.ticks.sort(function(a, b) {
      return a - b;
    });
    this.range = {
      min: highLow.low,
      max: highLow.high
    };

    Chartist.FixedScaleAxis.super.constructor.call(this,
      axisUnit,
      chartRect,
      this.ticks,
      options);

    this.stepLength = this.axisLength / this.divisor;
  }

  function projectValue(value) {
    return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.range.min) / (this.range.max - this.range.min);
  }

  Chartist.FixedScaleAxis = Chartist.Axis.extend({
    constructor: FixedScaleAxis,
    projectValue: projectValue
  });

}(this || global, Chartist));
;/**
 * The step axis for step based charts like bar chart or step based line charts. It uses a fixed amount of ticks that will be equally distributed across the whole axis length. The projection is done using the index of the data value rather than the value itself and therefore it's only useful for distribution purpose.
 * **Options**
 * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
 * ```javascript
 * var options = {
 *   // Ticks to be used to distribute across the axis length. As this axis type relies on the index of the value rather than the value, arbitrary data that can be converted to a string can be used as ticks.
 *   ticks: ['One', 'Two', 'Three'],
 *   // If set to true the full width will be used to distribute the values where the last value will be at the maximum of the axis length. If false the spaces between the ticks will be evenly distributed instead.
 *   stretch: true
 * };
 * ```
 *
 * @module Chartist.StepAxis
 */
/* global Chartist */
(function (globalRoot, Chartist) {
  'use strict';

  var window = globalRoot.window;
  var document = globalRoot.document;

  function StepAxis(axisUnit, data, chartRect, options) {
    Chartist.StepAxis.super.constructor.call(this,
      axisUnit,
      chartRect,
      options.ticks,
      options);

    var calc = Math.max(1, options.ticks.length - (options.stretch ? 1 : 0));
    this.stepLength = this.axisLength / calc;
  }

  function projectValue(value, index) {
    return this.stepLength * index;
  }

  Chartist.StepAxis = Chartist.Axis.extend({
    constructor: StepAxis,
    projectValue: projectValue
  });

}(this || global, Chartist));
;/**
 * The Chartist line chart can be used to draw Line or Scatter charts. If used in the browser you can access the global `Chartist` namespace where you find the `Line` function as a main entry point.
 *
 * For examples on how to use the line chart please check the examples of the `Chartist.Line` method.
 *
 * @module Chartist.Line
 */
/* global Chartist */
(function(globalRoot, Chartist){
  'use strict';

  var window = globalRoot.window;
  var document = globalRoot.document;

  /**
   * Default options in line charts. Expand the code view to see a detailed list of options with comments.
   *
   * @memberof Chartist.Line
   */
  var defaultOptions = {
    // Options for X-Axis
    axisX: {
      // The offset of the labels to the chart area
      offset: 30,
      // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
      position: 'end',
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
      // Set the axis type to be used to project values on this axis. If not defined, Chartist.StepAxis will be used for the X-Axis, where the ticks option will be set to the labels in the data and the stretch option will be set to the global fullWidth option. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
      type: undefined
    },
    // Options for Y-Axis
    axisY: {
      // The offset of the labels to the chart area
      offset: 40,
      // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
      position: 'start',
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
      // Set the axis type to be used to project values on this axis. If not defined, Chartist.AutoScaleAxis will be used for the Y-Axis, where the high and low options will be set to the global high and low options. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
      type: undefined,
      // This value specifies the minimum height in pixel of the scale steps
      scaleMinSpace: 20,
      // Use only integer values (whole numbers) for the scale steps
      onlyInteger: false
    },
    // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
    width: undefined,
    // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
    height: undefined,
    // If the line should be drawn or not
    showLine: true,
    // If dots should be drawn or not
    showPoint: true,
    // If the line chart should draw an area
    showArea: false,
    // The base for the area chart that will be used to close the area shape (is normally 0)
    areaBase: 0,
    // Specify if the lines should be smoothed. This value can be true or false where true will result in smoothing using the default smoothing interpolation function Chartist.Interpolation.cardinal and false results in Chartist.Interpolation.none. You can also choose other smoothing / interpolation functions available in the Chartist.Interpolation module, or write your own interpolation function. Check the examples for a brief description.
    lineSmooth: true,
    // If the line chart should add a background fill to the .ct-grids group.
    showGridBackground: false,
    // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
    low: undefined,
    // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
    high: undefined,
    // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
    chartPadding: {
      top: 15,
      right: 15,
      bottom: 5,
      left: 10
    },
    // When set to true, the last grid line on the x-axis is not drawn and the chart elements will expand to the full available width of the chart. For the last label to be drawn correctly you might need to add chart padding or offset the last label with a draw event handler.
    fullWidth: false,
    // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
    reverseData: false,
    // Override the class names that get used to generate the SVG structure of the chart
    classNames: {
      chart: 'ct-chart-line',
      label: 'ct-label',
      labelGroup: 'ct-labels',
      series: 'ct-series',
      line: 'ct-line',
      point: 'ct-point',
      area: 'ct-area',
      grid: 'ct-grid',
      gridGroup: 'ct-grids',
      gridBackground: 'ct-grid-background',
      vertical: 'ct-vertical',
      horizontal: 'ct-horizontal',
      start: 'ct-start',
      end: 'ct-end'
    }
  };

  /**
   * Creates a new chart
   *
   */
  function createChart(options) {
    var data = Chartist.normalizeData(this.data, options.reverseData, true);

    // Create new svg object
    this.svg = Chartist.createSvg(this.container, options.width, options.height, options.classNames.chart);
    // Create groups for labels, grid and series
    var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
    var seriesGroup = this.svg.elem('g');
    var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);

    var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
    var axisX, axisY;

    if(options.axisX.type === undefined) {
      axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
        ticks: data.normalized.labels,
        stretch: options.fullWidth
      }));
    } else {
      axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, options.axisX);
    }

    if(options.axisY.type === undefined) {
      axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
        high: Chartist.isNumeric(options.high) ? options.high : options.axisY.high,
        low: Chartist.isNumeric(options.low) ? options.low : options.axisY.low
      }));
    } else {
      axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, options.axisY);
    }

    axisX.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
    axisY.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

    if (options.showGridBackground) {
      Chartist.createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
    }

    // Draw the series
    data.raw.series.forEach(function(series, seriesIndex) {
      var seriesElement = seriesGroup.elem('g');

      // Write attributes to series group element. If series name or meta is undefined the attributes will not be written
      seriesElement.attr({
        'ct:series-name': series.name,
        'ct:meta': Chartist.serialize(series.meta)
      });

      // Use series class from series data or if not set generate one
      seriesElement.addClass([
        options.classNames.series,
        (series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex))
      ].join(' '));

      var pathCoordinates = [],
        pathData = [];

      data.normalized.series[seriesIndex].forEach(function(value, valueIndex) {
        var p = {
          x: chartRect.x1 + axisX.projectValue(value, valueIndex, data.normalized.series[seriesIndex]),
          y: chartRect.y1 - axisY.projectValue(value, valueIndex, data.normalized.series[seriesIndex])
        };
        pathCoordinates.push(p.x, p.y);
        pathData.push({
          value: value,
          valueIndex: valueIndex,
          meta: Chartist.getMetaData(series, valueIndex)
        });
      }.bind(this));

      var seriesOptions = {
        lineSmooth: Chartist.getSeriesOption(series, options, 'lineSmooth'),
        showPoint: Chartist.getSeriesOption(series, options, 'showPoint'),
        showLine: Chartist.getSeriesOption(series, options, 'showLine'),
        showArea: Chartist.getSeriesOption(series, options, 'showArea'),
        areaBase: Chartist.getSeriesOption(series, options, 'areaBase')
      };

      var smoothing = typeof seriesOptions.lineSmooth === 'function' ?
        seriesOptions.lineSmooth : (seriesOptions.lineSmooth ? Chartist.Interpolation.monotoneCubic() : Chartist.Interpolation.none());
      // Interpolating path where pathData will be used to annotate each path element so we can trace back the original
      // index, value and meta data
      var path = smoothing(pathCoordinates, pathData);

      // If we should show points we need to create them now to avoid secondary loop
      // Points are drawn from the pathElements returned by the interpolation function
      // Small offset for Firefox to render squares correctly
      if (seriesOptions.showPoint) {

        path.pathElements.forEach(function(pathElement) {
          var point = seriesElement.elem('line', {
            x1: pathElement.x,
            y1: pathElement.y,
            x2: pathElement.x + 0.01,
            y2: pathElement.y
          }, options.classNames.point).attr({
            'ct:value': [pathElement.data.value.x, pathElement.data.value.y].filter(Chartist.isNumeric).join(','),
            'ct:meta': Chartist.serialize(pathElement.data.meta)
          });

          this.eventEmitter.emit('draw', {
            type: 'point',
            value: pathElement.data.value,
            index: pathElement.data.valueIndex,
            meta: pathElement.data.meta,
            series: series,
            seriesIndex: seriesIndex,
            axisX: axisX,
            axisY: axisY,
            group: seriesElement,
            element: point,
            x: pathElement.x,
            y: pathElement.y
          });
        }.bind(this));
      }

      if(seriesOptions.showLine) {
        var line = seriesElement.elem('path', {
          d: path.stringify()
        }, options.classNames.line, true);

        this.eventEmitter.emit('draw', {
          type: 'line',
          values: data.normalized.series[seriesIndex],
          path: path.clone(),
          chartRect: chartRect,
          index: seriesIndex,
          series: series,
          seriesIndex: seriesIndex,
          seriesMeta: series.meta,
          axisX: axisX,
          axisY: axisY,
          group: seriesElement,
          element: line
        });
      }

      // Area currently only works with axes that support a range!
      if(seriesOptions.showArea && axisY.range) {
        // If areaBase is outside the chart area (< min or > max) we need to set it respectively so that
        // the area is not drawn outside the chart area.
        var areaBase = Math.max(Math.min(seriesOptions.areaBase, axisY.range.max), axisY.range.min);

        // We project the areaBase value into screen coordinates
        var areaBaseProjected = chartRect.y1 - axisY.projectValue(areaBase);

        // In order to form the area we'll first split the path by move commands so we can chunk it up into segments
        path.splitByCommand('M').filter(function onlySolidSegments(pathSegment) {
          // We filter only "solid" segments that contain more than one point. Otherwise there's no need for an area
          return pathSegment.pathElements.length > 1;
        }).map(function convertToArea(solidPathSegments) {
          // Receiving the filtered solid path segments we can now convert those segments into fill areas
          var firstElement = solidPathSegments.pathElements[0];
          var lastElement = solidPathSegments.pathElements[solidPathSegments.pathElements.length - 1];

          // Cloning the solid path segment with closing option and removing the first move command from the clone
          // We then insert a new move that should start at the area base and draw a straight line up or down
          // at the end of the path we add an additional straight line to the projected area base value
          // As the closing option is set our path will be automatically closed
          return solidPathSegments.clone(true)
            .position(0)
            .remove(1)
            .move(firstElement.x, areaBaseProjected)
            .line(firstElement.x, firstElement.y)
            .position(solidPathSegments.pathElements.length + 1)
            .line(lastElement.x, areaBaseProjected);

        }).forEach(function createArea(areaPath) {
          // For each of our newly created area paths, we'll now create path elements by stringifying our path objects
          // and adding the created DOM elements to the correct series group
          var area = seriesElement.elem('path', {
            d: areaPath.stringify()
          }, options.classNames.area, true);

          // Emit an event for each area that was drawn
          this.eventEmitter.emit('draw', {
            type: 'area',
            values: data.normalized.series[seriesIndex],
            path: areaPath.clone(),
            series: series,
            seriesIndex: seriesIndex,
            axisX: axisX,
            axisY: axisY,
            chartRect: chartRect,
            index: seriesIndex,
            group: seriesElement,
            element: area
          });
        }.bind(this));
      }
    }.bind(this));

    this.eventEmitter.emit('created', {
      bounds: axisY.bounds,
      chartRect: chartRect,
      axisX: axisX,
      axisY: axisY,
      svg: this.svg,
      options: options
    });
  }

  /**
   * This method creates a new line chart.
   *
   * @memberof Chartist.Line
   * @param {String|Node} query A selector query string or directly a DOM element
   * @param {Object} data The data object that needs to consist of a labels and a series array
   * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
   * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
   * @return {Object} An object which exposes the API for the created chart
   *
   * @example
   * // Create a simple line chart
   * var data = {
   *   // A labels array that can contain any sort of values
   *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
   *   // Our series array that contains series objects or in this case series data arrays
   *   series: [
   *     [5, 2, 4, 2, 0]
   *   ]
   * };
   *
   * // As options we currently only set a static size of 300x200 px
   * var options = {
   *   width: '300px',
   *   height: '200px'
   * };
   *
   * // In the global name space Chartist we call the Line function to initialize a line chart. As a first parameter we pass in a selector where we would like to get our chart created. Second parameter is the actual data object and as a third parameter we pass in our options
   * new Chartist.Line('.ct-chart', data, options);
   *
   * @example
   * // Use specific interpolation function with configuration from the Chartist.Interpolation module
   *
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [
   *     [1, 1, 8, 1, 7]
   *   ]
   * }, {
   *   lineSmooth: Chartist.Interpolation.cardinal({
   *     tension: 0.2
   *   })
   * });
   *
   * @example
   * // Create a line chart with responsive options
   *
   * var data = {
   *   // A labels array that can contain any sort of values
   *   labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
   *   // Our series array that contains series objects or in this case series data arrays
   *   series: [
   *     [5, 2, 4, 2, 0]
   *   ]
   * };
   *
   * // In addition to the regular options we specify responsive option overrides that will override the default configutation based on the matching media queries.
   * var responsiveOptions = [
   *   ['screen and (min-width: 641px) and (max-width: 1024px)', {
   *     showPoint: false,
   *     axisX: {
   *       labelInterpolationFnc: function(value) {
   *         // Will return Mon, Tue, Wed etc. on medium screens
   *         return value.slice(0, 3);
   *       }
   *     }
   *   }],
   *   ['screen and (max-width: 640px)', {
   *     showLine: false,
   *     axisX: {
   *       labelInterpolationFnc: function(value) {
   *         // Will return M, T, W etc. on small screens
   *         return value[0];
   *       }
   *     }
   *   }]
   * ];
   *
   * new Chartist.Line('.ct-chart', data, null, responsiveOptions);
   *
   */
  function Line(query, data, options, responsiveOptions) {
    Chartist.Line.super.constructor.call(this,
      query,
      data,
      defaultOptions,
      Chartist.extend({}, defaultOptions, options),
      responsiveOptions);
  }

  // Creating line chart type in Chartist namespace
  Chartist.Line = Chartist.Base.extend({
    constructor: Line,
    createChart: createChart
  });

}(this || global, Chartist));
;/**
 * The bar chart module of Chartist that can be used to draw unipolar or bipolar bar and grouped bar charts.
 *
 * @module Chartist.Bar
 */
/* global Chartist */
(function(globalRoot, Chartist){
  'use strict';

  var window = globalRoot.window;
  var document = globalRoot.document;

  /**
   * Default options in bar charts. Expand the code view to see a detailed list of options with comments.
   *
   * @memberof Chartist.Bar
   */
  var defaultOptions = {
    // Options for X-Axis
    axisX: {
      // The offset of the chart drawing area to the border of the container
      offset: 30,
      // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
      position: 'end',
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
      // This value specifies the minimum width in pixel of the scale steps
      scaleMinSpace: 30,
      // Use only integer values (whole numbers) for the scale steps
      onlyInteger: false
    },
    // Options for Y-Axis
    axisY: {
      // The offset of the chart drawing area to the border of the container
      offset: 40,
      // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
      position: 'start',
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
      // This value specifies the minimum height in pixel of the scale steps
      scaleMinSpace: 20,
      // Use only integer values (whole numbers) for the scale steps
      onlyInteger: false
    },
    // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
    width: undefined,
    // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
    height: undefined,
    // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
    high: undefined,
    // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
    low: undefined,
    // Unless low/high are explicitly set, bar chart will be centered at zero by default. Set referenceValue to null to auto scale.
    referenceValue: 0,
    // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
    chartPadding: {
      top: 15,
      right: 15,
      bottom: 5,
      left: 10
    },
    // Specify the distance in pixel of bars in a group
    seriesBarDistance: 15,
    // If set to true this property will cause the series bars to be stacked. Check the `stackMode` option for further stacking options.
    stackBars: false,
    // If set to 'overlap' this property will force the stacked bars to draw from the zero line.
    // If set to 'accumulate' this property will form a total for each series point. This will also influence the y-axis and the overall bounds of the chart. In stacked mode the seriesBarDistance property will have no effect.
    stackMode: 'accumulate',
    // Inverts the axes of the bar chart in order to draw a horizontal bar chart. Be aware that you also need to invert your axis settings as the Y Axis will now display the labels and the X Axis the values.
    horizontalBars: false,
    // If set to true then each bar will represent a series and the data array is expected to be a one dimensional array of data values rather than a series array of series. This is useful if the bar chart should represent a profile rather than some data over time.
    distributeSeries: false,
    // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
    reverseData: false,
    // If the bar chart should add a background fill to the .ct-grids group.
    showGridBackground: false,
    // Override the class names that get used to generate the SVG structure of the chart
    classNames: {
      chart: 'ct-chart-bar',
      horizontalBars: 'ct-horizontal-bars',
      label: 'ct-label',
      labelGroup: 'ct-labels',
      series: 'ct-series',
      bar: 'ct-bar',
      grid: 'ct-grid',
      gridGroup: 'ct-grids',
      gridBackground: 'ct-grid-background',
      vertical: 'ct-vertical',
      horizontal: 'ct-horizontal',
      start: 'ct-start',
      end: 'ct-end'
    }
  };

  /**
   * Creates a new chart
   *
   */
  function createChart(options) {
    var data;
    var highLow;

    if(options.distributeSeries) {
      data = Chartist.normalizeData(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y');
      data.normalized.series = data.normalized.series.map(function(value) {
        return [value];
      });
    } else {
      data = Chartist.normalizeData(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y');
    }

    // Create new svg element
    this.svg = Chartist.createSvg(
      this.container,
      options.width,
      options.height,
      options.classNames.chart + (options.horizontalBars ? ' ' + options.classNames.horizontalBars : '')
    );

    // Drawing groups in correct order
    var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
    var seriesGroup = this.svg.elem('g');
    var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);

    if(options.stackBars && data.normalized.series.length !== 0) {

      // If stacked bars we need to calculate the high low from stacked values from each series
      var serialSums = Chartist.serialMap(data.normalized.series, function serialSums() {
        return Array.prototype.slice.call(arguments).map(function(value) {
          return value;
        }).reduce(function(prev, curr) {
          return {
            x: prev.x + (curr && curr.x) || 0,
            y: prev.y + (curr && curr.y) || 0
          };
        }, {x: 0, y: 0});
      });

      highLow = Chartist.getHighLow([serialSums], options, options.horizontalBars ? 'x' : 'y');

    } else {

      highLow = Chartist.getHighLow(data.normalized.series, options, options.horizontalBars ? 'x' : 'y');
    }

    // Overrides of high / low from settings
    highLow.high = +options.high || (options.high === 0 ? 0 : highLow.high);
    highLow.low = +options.low || (options.low === 0 ? 0 : highLow.low);

    var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);

    var valueAxis,
      labelAxisTicks,
      labelAxis,
      axisX,
      axisY;

    // We need to set step count based on some options combinations
    if(options.distributeSeries && options.stackBars) {
      // If distributed series are enabled and bars need to be stacked, we'll only have one bar and therefore should
      // use only the first label for the step axis
      labelAxisTicks = data.normalized.labels.slice(0, 1);
    } else {
      // If distributed series are enabled but stacked bars aren't, we should use the series labels
      // If we are drawing a regular bar chart with two dimensional series data, we just use the labels array
      // as the bars are normalized
      labelAxisTicks = data.normalized.labels;
    }

    // Set labelAxis and valueAxis based on the horizontalBars setting. This setting will flip the axes if necessary.
    if(options.horizontalBars) {
      if(options.axisX.type === undefined) {
        valueAxis = axisX = new Chartist.AutoScaleAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
          highLow: highLow,
          referenceValue: 0
        }));
      } else {
        valueAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
          highLow: highLow,
          referenceValue: 0
        }));
      }

      if(options.axisY.type === undefined) {
        labelAxis = axisY = new Chartist.StepAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, {
          ticks: labelAxisTicks
        });
      } else {
        labelAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, options.axisY);
      }
    } else {
      if(options.axisX.type === undefined) {
        labelAxis = axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, {
          ticks: labelAxisTicks
        });
      } else {
        labelAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, options.axisX);
      }

      if(options.axisY.type === undefined) {
        valueAxis = axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
          highLow: highLow,
          referenceValue: 0
        }));
      } else {
        valueAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
          highLow: highLow,
          referenceValue: 0
        }));
      }
    }

    // Projected 0 point
    var zeroPoint = options.horizontalBars ? (chartRect.x1 + valueAxis.projectValue(0)) : (chartRect.y1 - valueAxis.projectValue(0));
    // Used to track the screen coordinates of stacked bars
    var stackedBarValues = [];

    labelAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
    valueAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

    if (options.showGridBackground) {
      Chartist.createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
    }

    // Draw the series
    data.raw.series.forEach(function(series, seriesIndex) {
      // Calculating bi-polar value of index for seriesOffset. For i = 0..4 biPol will be -1.5, -0.5, 0.5, 1.5 etc.
      var biPol = seriesIndex - (data.raw.series.length - 1) / 2;
      // Half of the period width between vertical grid lines used to position bars
      var periodHalfLength;
      // Current series SVG element
      var seriesElement;

      // We need to set periodHalfLength based on some options combinations
      if(options.distributeSeries && !options.stackBars) {
        // If distributed series are enabled but stacked bars aren't, we need to use the length of the normaizedData array
        // which is the series count and divide by 2
        periodHalfLength = labelAxis.axisLength / data.normalized.series.length / 2;
      } else if(options.distributeSeries && options.stackBars) {
        // If distributed series and stacked bars are enabled we'll only get one bar so we should just divide the axis
        // length by 2
        periodHalfLength = labelAxis.axisLength / 2;
      } else {
        // On regular bar charts we should just use the series length
        periodHalfLength = labelAxis.axisLength / data.normalized.series[seriesIndex].length / 2;
      }

      // Adding the series group to the series element
      seriesElement = seriesGroup.elem('g');

      // Write attributes to series group element. If series name or meta is undefined the attributes will not be written
      seriesElement.attr({
        'ct:series-name': series.name,
        'ct:meta': Chartist.serialize(series.meta)
      });

      // Use series class from series data or if not set generate one
      seriesElement.addClass([
        options.classNames.series,
        (series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex))
      ].join(' '));

      data.normalized.series[seriesIndex].forEach(function(value, valueIndex) {
        var projected,
          bar,
          previousStack,
          labelAxisValueIndex;

        // We need to set labelAxisValueIndex based on some options combinations
        if(options.distributeSeries && !options.stackBars) {
          // If distributed series are enabled but stacked bars aren't, we can use the seriesIndex for later projection
          // on the step axis for label positioning
          labelAxisValueIndex = seriesIndex;
        } else if(options.distributeSeries && options.stackBars) {
          // If distributed series and stacked bars are enabled, we will only get one bar and therefore always use
          // 0 for projection on the label step axis
          labelAxisValueIndex = 0;
        } else {
          // On regular bar charts we just use the value index to project on the label step axis
          labelAxisValueIndex = valueIndex;
        }

        // We need to transform coordinates differently based on the chart layout
        if(options.horizontalBars) {
          projected = {
            x: chartRect.x1 + valueAxis.projectValue(value && value.x ? value.x : 0, valueIndex, data.normalized.series[seriesIndex]),
            y: chartRect.y1 - labelAxis.projectValue(value && value.y ? value.y : 0, labelAxisValueIndex, data.normalized.series[seriesIndex])
          };
        } else {
          projected = {
            x: chartRect.x1 + labelAxis.projectValue(value && value.x ? value.x : 0, labelAxisValueIndex, data.normalized.series[seriesIndex]),
            y: chartRect.y1 - valueAxis.projectValue(value && value.y ? value.y : 0, valueIndex, data.normalized.series[seriesIndex])
          }
        }

        // If the label axis is a step based axis we will offset the bar into the middle of between two steps using
        // the periodHalfLength value. Also we do arrange the different series so that they align up to each other using
        // the seriesBarDistance. If we don't have a step axis, the bar positions can be chosen freely so we should not
        // add any automated positioning.
        if(labelAxis instanceof Chartist.StepAxis) {
          // Offset to center bar between grid lines, but only if the step axis is not stretched
          if(!labelAxis.options.stretch) {
            projected[labelAxis.units.pos] += periodHalfLength * (options.horizontalBars ? -1 : 1);
          }
          // Using bi-polar offset for multiple series if no stacked bars or series distribution is used
          projected[labelAxis.units.pos] += (options.stackBars || options.distributeSeries) ? 0 : biPol * options.seriesBarDistance * (options.horizontalBars ? -1 : 1);
        }

        // Enter value in stacked bar values used to remember previous screen value for stacking up bars
        previousStack = stackedBarValues[valueIndex] || zeroPoint;
        stackedBarValues[valueIndex] = previousStack - (zeroPoint - projected[labelAxis.counterUnits.pos]);

        // Skip if value is undefined
        if(value === undefined) {
          return;
        }

        var positions = {};
        positions[labelAxis.units.pos + '1'] = projected[labelAxis.units.pos];
        positions[labelAxis.units.pos + '2'] = projected[labelAxis.units.pos];

        if(options.stackBars && (options.stackMode === 'accumulate' || !options.stackMode)) {
          // Stack mode: accumulate (default)
          // If bars are stacked we use the stackedBarValues reference and otherwise base all bars off the zero line
          // We want backwards compatibility, so the expected fallback without the 'stackMode' option
          // to be the original behaviour (accumulate)
          positions[labelAxis.counterUnits.pos + '1'] = previousStack;
          positions[labelAxis.counterUnits.pos + '2'] = stackedBarValues[valueIndex];
        } else {
          // Draw from the zero line normally
          // This is also the same code for Stack mode: overlap
          positions[labelAxis.counterUnits.pos + '1'] = zeroPoint;
          positions[labelAxis.counterUnits.pos + '2'] = projected[labelAxis.counterUnits.pos];
        }

        // Limit x and y so that they are within the chart rect
        positions.x1 = Math.min(Math.max(positions.x1, chartRect.x1), chartRect.x2);
        positions.x2 = Math.min(Math.max(positions.x2, chartRect.x1), chartRect.x2);
        positions.y1 = Math.min(Math.max(positions.y1, chartRect.y2), chartRect.y1);
        positions.y2 = Math.min(Math.max(positions.y2, chartRect.y2), chartRect.y1);

        var metaData = Chartist.getMetaData(series, valueIndex);

        // Create bar element
        bar = seriesElement.elem('line', positions, options.classNames.bar).attr({
          'ct:value': [value.x, value.y].filter(Chartist.isNumeric).join(','),
          'ct:meta': Chartist.serialize(metaData)
        });

        this.eventEmitter.emit('draw', Chartist.extend({
          type: 'bar',
          value: value,
          index: valueIndex,
          meta: metaData,
          series: series,
          seriesIndex: seriesIndex,
          axisX: axisX,
          axisY: axisY,
          chartRect: chartRect,
          group: seriesElement,
          element: bar
        }, positions));
      }.bind(this));
    }.bind(this));

    this.eventEmitter.emit('created', {
      bounds: valueAxis.bounds,
      chartRect: chartRect,
      axisX: axisX,
      axisY: axisY,
      svg: this.svg,
      options: options
    });
  }

  /**
   * This method creates a new bar chart and returns API object that you can use for later changes.
   *
   * @memberof Chartist.Bar
   * @param {String|Node} query A selector query string or directly a DOM element
   * @param {Object} data The data object that needs to consist of a labels and a series array
   * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
   * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
   * @return {Object} An object which exposes the API for the created chart
   *
   * @example
   * // Create a simple bar chart
   * var data = {
   *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
   *   series: [
   *     [5, 2, 4, 2, 0]
   *   ]
   * };
   *
   * // In the global name space Chartist we call the Bar function to initialize a bar chart. As a first parameter we pass in a selector where we would like to get our chart created and as a second parameter we pass our data object.
   * new Chartist.Bar('.ct-chart', data);
   *
   * @example
   * // This example creates a bipolar grouped bar chart where the boundaries are limitted to -10 and 10
   * new Chartist.Bar('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5, 6, 7],
   *   series: [
   *     [1, 3, 2, -5, -3, 1, -6],
   *     [-5, -2, -4, -1, 2, -3, 1]
   *   ]
   * }, {
   *   seriesBarDistance: 12,
   *   low: -10,
   *   high: 10
   * });
   *
   */
  function Bar(query, data, options, responsiveOptions) {
    Chartist.Bar.super.constructor.call(this,
      query,
      data,
      defaultOptions,
      Chartist.extend({}, defaultOptions, options),
      responsiveOptions);
  }

  // Creating bar chart type in Chartist namespace
  Chartist.Bar = Chartist.Base.extend({
    constructor: Bar,
    createChart: createChart
  });

}(this || global, Chartist));
;/**
 * The pie chart module of Chartist that can be used to draw pie, donut or gauge charts
 *
 * @module Chartist.Pie
 */
/* global Chartist */
(function(globalRoot, Chartist) {
  'use strict';

  var window = globalRoot.window;
  var document = globalRoot.document;

  /**
   * Default options in line charts. Expand the code view to see a detailed list of options with comments.
   *
   * @memberof Chartist.Pie
   */
  var defaultOptions = {
    // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
    width: undefined,
    // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
    height: undefined,
    // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
    chartPadding: 5,
    // Override the class names that are used to generate the SVG structure of the chart
    classNames: {
      chartPie: 'ct-chart-pie',
      chartDonut: 'ct-chart-donut',
      series: 'ct-series',
      slicePie: 'ct-slice-pie',
      sliceDonut: 'ct-slice-donut',
      sliceDonutSolid: 'ct-slice-donut-solid',
      label: 'ct-label'
    },
    // The start angle of the pie chart in degrees where 0 points north. A higher value offsets the start angle clockwise.
    startAngle: 0,
    // An optional total you can specify. By specifying a total value, the sum of the values in the series must be this total in order to draw a full pie. You can use this parameter to draw only parts of a pie or gauge charts.
    total: undefined,
    // If specified the donut CSS classes will be used and strokes will be drawn instead of pie slices.
    donut: false,
    // If specified the donut segments will be drawn as shapes instead of strokes.
    donutSolid: false,
    // Specify the donut stroke width, currently done in javascript for convenience. May move to CSS styles in the future.
    // This option can be set as number or string to specify a relative width (i.e. 100 or '30%').
    donutWidth: 60,
    // If a label should be shown or not
    showLabel: true,
    // Label position offset from the standard position which is half distance of the radius. This value can be either positive or negative. Positive values will position the label away from the center.
    labelOffset: 0,
    // This option can be set to 'inside', 'outside' or 'center'. Positioned with 'inside' the labels will be placed on half the distance of the radius to the border of the Pie by respecting the 'labelOffset'. The 'outside' option will place the labels at the border of the pie and 'center' will place the labels in the absolute center point of the chart. The 'center' option only makes sense in conjunction with the 'labelOffset' option.
    labelPosition: 'inside',
    // An interpolation function for the label value
    labelInterpolationFnc: Chartist.noop,
    // Label direction can be 'neutral', 'explode' or 'implode'. The labels anchor will be positioned based on those settings as well as the fact if the labels are on the right or left side of the center of the chart. Usually explode is useful when labels are positioned far away from the center.
    labelDirection: 'neutral',
    // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
    reverseData: false,
    // If true empty values will be ignored to avoid drawing unncessary slices and labels
    ignoreEmptyValues: false
  };

  /**
   * Determines SVG anchor position based on direction and center parameter
   *
   * @param center
   * @param label
   * @param direction
   * @return {string}
   */
  function determineAnchorPosition(center, label, direction) {
    var toTheRight = label.x > center.x;

    if(toTheRight && direction === 'explode' ||
      !toTheRight && direction === 'implode') {
      return 'start';
    } else if(toTheRight && direction === 'implode' ||
      !toTheRight && direction === 'explode') {
      return 'end';
    } else {
      return 'middle';
    }
  }

  /**
   * Creates the pie chart
   *
   * @param options
   */
  function createChart(options) {
    var data = Chartist.normalizeData(this.data);
    var seriesGroups = [],
      labelsGroup,
      chartRect,
      radius,
      labelRadius,
      totalDataSum,
      startAngle = options.startAngle;

    // Create SVG.js draw
    this.svg = Chartist.createSvg(this.container, options.width, options.height,options.donut ? options.classNames.chartDonut : options.classNames.chartPie);
    // Calculate charting rect
    chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
    // Get biggest circle radius possible within chartRect
    radius = Math.min(chartRect.width() / 2, chartRect.height() / 2);
    // Calculate total of all series to get reference value or use total reference from optional options
    totalDataSum = options.total || data.normalized.series.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    }, 0);

    var donutWidth = Chartist.quantity(options.donutWidth);
    if (donutWidth.unit === '%') {
      donutWidth.value *= radius / 100;
    }

    // If this is a donut chart we need to adjust our radius to enable strokes to be drawn inside
    // Unfortunately this is not possible with the current SVG Spec
    // See this proposal for more details: http://lists.w3.org/Archives/Public/www-svg/2003Oct/0000.html
    radius -= options.donut && !options.donutSolid ? donutWidth.value / 2  : 0;

    // If labelPosition is set to `outside` or a donut chart is drawn then the label position is at the radius,
    // if regular pie chart it's half of the radius
    if(options.labelPosition === 'outside' || options.donut && !options.donutSolid) {
      labelRadius = radius;
    } else if(options.labelPosition === 'center') {
      // If labelPosition is center we start with 0 and will later wait for the labelOffset
      labelRadius = 0;
    } else if(options.donutSolid) {
      labelRadius = radius - donutWidth.value / 2;
    } else {
      // Default option is 'inside' where we use half the radius so the label will be placed in the center of the pie
      // slice
      labelRadius = radius / 2;
    }
    // Add the offset to the labelRadius where a negative offset means closed to the center of the chart
    labelRadius += options.labelOffset;

    // Calculate end angle based on total sum and current data value and offset with padding
    var center = {
      x: chartRect.x1 + chartRect.width() / 2,
      y: chartRect.y2 + chartRect.height() / 2
    };

    // Check if there is only one non-zero value in the series array.
    var hasSingleValInSeries = data.raw.series.filter(function(val) {
      return val.hasOwnProperty('value') ? val.value !== 0 : val !== 0;
    }).length === 1;

    // Creating the series groups
    data.raw.series.forEach(function(series, index) {
      seriesGroups[index] = this.svg.elem('g', null, null);
    }.bind(this));
    //if we need to show labels we create the label group now
    if(options.showLabel) {
      labelsGroup = this.svg.elem('g', null, null);
    }

    // Draw the series
    // initialize series groups
    data.raw.series.forEach(function(series, index) {
      // If current value is zero and we are ignoring empty values then skip to next value
      if (data.normalized.series[index] === 0 && options.ignoreEmptyValues) return;

      // If the series is an object and contains a name or meta data we add a custom attribute
      seriesGroups[index].attr({
        'ct:series-name': series.name
      });

      // Use series class from series data or if not set generate one
      seriesGroups[index].addClass([
        options.classNames.series,
        (series.className || options.classNames.series + '-' + Chartist.alphaNumerate(index))
      ].join(' '));

      // If the whole dataset is 0 endAngle should be zero. Can't divide by 0.
      var endAngle = (totalDataSum > 0 ? startAngle + data.normalized.series[index] / totalDataSum * 360 : 0);

      // Use slight offset so there are no transparent hairline issues
      var overlappigStartAngle = Math.max(0, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2));

      // If we need to draw the arc for all 360 degrees we need to add a hack where we close the circle
      // with Z and use 359.99 degrees
      if(endAngle - overlappigStartAngle >= 359.99) {
        endAngle = overlappigStartAngle + 359.99;
      }

      var start = Chartist.polarToCartesian(center.x, center.y, radius, overlappigStartAngle),
        end = Chartist.polarToCartesian(center.x, center.y, radius, endAngle);

      var innerStart,
        innerEnd,
        donutSolidRadius;

      // Create a new path element for the pie chart. If this isn't a donut chart we should close the path for a correct stroke
      var path = new Chartist.Svg.Path(!options.donut || options.donutSolid)
        .move(end.x, end.y)
        .arc(radius, radius, 0, endAngle - startAngle > 180, 0, start.x, start.y);

      // If regular pie chart (no donut) we add a line to the center of the circle for completing the pie
      if(!options.donut) {
        path.line(center.x, center.y);
      } else if (options.donutSolid) {
        donutSolidRadius = radius - donutWidth.value;
        innerStart = Chartist.polarToCartesian(center.x, center.y, donutSolidRadius, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2));
        innerEnd = Chartist.polarToCartesian(center.x, center.y, donutSolidRadius, endAngle);
        path.line(innerStart.x, innerStart.y);
        path.arc(donutSolidRadius, donutSolidRadius, 0, endAngle - startAngle  > 180, 1, innerEnd.x, innerEnd.y);
      }

      // Create the SVG path
      // If this is a donut chart we add the donut class, otherwise just a regular slice
      var pathClassName = options.classNames.slicePie;
      if (options.donut) {
        pathClassName = options.classNames.sliceDonut;
        if (options.donutSolid) {
          pathClassName = options.classNames.sliceDonutSolid;
        }
      }
      var pathElement = seriesGroups[index].elem('path', {
        d: path.stringify()
      }, pathClassName);

      // Adding the pie series value to the path
      pathElement.attr({
        'ct:value': data.normalized.series[index],
        'ct:meta': Chartist.serialize(series.meta)
      });

      // If this is a donut, we add the stroke-width as style attribute
      if(options.donut && !options.donutSolid) {
        pathElement._node.style.strokeWidth = donutWidth.value + 'px';
      }

      // Fire off draw event
      this.eventEmitter.emit('draw', {
        type: 'slice',
        value: data.normalized.series[index],
        totalDataSum: totalDataSum,
        index: index,
        meta: series.meta,
        series: series,
        group: seriesGroups[index],
        element: pathElement,
        path: path.clone(),
        center: center,
        radius: radius,
        startAngle: startAngle,
        endAngle: endAngle
      });

      // If we need to show labels we need to add the label for this slice now
      if(options.showLabel) {
        var labelPosition;
        if(data.raw.series.length === 1) {
          // If we have only 1 series, we can position the label in the center of the pie
          labelPosition = {
            x: center.x,
            y: center.y
          };
        } else {
          // Position at the labelRadius distance from center and between start and end angle
          labelPosition = Chartist.polarToCartesian(
            center.x,
            center.y,
            labelRadius,
            startAngle + (endAngle - startAngle) / 2
          );
        }

        var rawValue;
        if(data.normalized.labels && !Chartist.isFalseyButZero(data.normalized.labels[index])) {
          rawValue = data.normalized.labels[index];
        } else {
          rawValue = data.normalized.series[index];
        }

        var interpolatedValue = options.labelInterpolationFnc(rawValue, index);

        if(interpolatedValue || interpolatedValue === 0) {
          var labelElement = labelsGroup.elem('text', {
            dx: labelPosition.x,
            dy: labelPosition.y,
            'text-anchor': determineAnchorPosition(center, labelPosition, options.labelDirection)
          }, options.classNames.label).text('' + interpolatedValue);

          // Fire off draw event
          this.eventEmitter.emit('draw', {
            type: 'label',
            index: index,
            group: labelsGroup,
            element: labelElement,
            text: '' + interpolatedValue,
            x: labelPosition.x,
            y: labelPosition.y
          });
        }
      }

      // Set next startAngle to current endAngle.
      // (except for last slice)
      startAngle = endAngle;
    }.bind(this));

    this.eventEmitter.emit('created', {
      chartRect: chartRect,
      svg: this.svg,
      options: options
    });
  }

  /**
   * This method creates a new pie chart and returns an object that can be used to redraw the chart.
   *
   * @memberof Chartist.Pie
   * @param {String|Node} query A selector query string or directly a DOM element
   * @param {Object} data The data object in the pie chart needs to have a series property with a one dimensional data array. The values will be normalized against each other and don't necessarily need to be in percentage. The series property can also be an array of value objects that contain a value property and a className property to override the CSS class name for the series group.
   * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
   * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
   * @return {Object} An object with a version and an update method to manually redraw the chart
   *
   * @example
   * // Simple pie chart example with four series
   * new Chartist.Pie('.ct-chart', {
   *   series: [10, 2, 4, 3]
   * });
   *
   * @example
   * // Drawing a donut chart
   * new Chartist.Pie('.ct-chart', {
   *   series: [10, 2, 4, 3]
   * }, {
   *   donut: true
   * });
   *
   * @example
   * // Using donut, startAngle and total to draw a gauge chart
   * new Chartist.Pie('.ct-chart', {
   *   series: [20, 10, 30, 40]
   * }, {
   *   donut: true,
   *   donutWidth: 20,
   *   startAngle: 270,
   *   total: 200
   * });
   *
   * @example
   * // Drawing a pie chart with padding and labels that are outside the pie
   * new Chartist.Pie('.ct-chart', {
   *   series: [20, 10, 30, 40]
   * }, {
   *   chartPadding: 30,
   *   labelOffset: 50,
   *   labelDirection: 'explode'
   * });
   *
   * @example
   * // Overriding the class names for individual series as well as a name and meta data.
   * // The name will be written as ct:series-name attribute and the meta data will be serialized and written
   * // to a ct:meta attribute.
   * new Chartist.Pie('.ct-chart', {
   *   series: [{
   *     value: 20,
   *     name: 'Series 1',
   *     className: 'my-custom-class-one',
   *     meta: 'Meta One'
   *   }, {
   *     value: 10,
   *     name: 'Series 2',
   *     className: 'my-custom-class-two',
   *     meta: 'Meta Two'
   *   }, {
   *     value: 70,
   *     name: 'Series 3',
   *     className: 'my-custom-class-three',
   *     meta: 'Meta Three'
   *   }]
   * });
   */
  function Pie(query, data, options, responsiveOptions) {
    Chartist.Pie.super.constructor.call(this,
      query,
      data,
      defaultOptions,
      Chartist.extend({}, defaultOptions, options),
      responsiveOptions);
  }

  // Creating pie chart type in Chartist namespace
  Chartist.Pie = Chartist.Base.extend({
    constructor: Pie,
    createChart: createChart,
    determineAnchorPosition: determineAnchorPosition
  });

}(this || global, Chartist));

return Chartist;

}));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ }),

/***/ 1106:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1107)
  __webpack_require__(1110)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1113)
/* template */
var __vue_template__ = __webpack_require__(1115)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1ff18504"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/components/widgets/weather/weather.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1ff18504", Component.options)
  } else {
    hotAPI.reload("data-v-1ff18504", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1107:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1108);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(39)("81e529b4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1ff18504\",\"scoped\":false,\"hasInlineConfig\":true}!./weather-icons.min.css", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1ff18504\",\"scoped\":false,\"hasInlineConfig\":true}!./weather-icons.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1108:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(836);
exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "/*!\n *  Weather Icons 2.0\n *  Updated August 1, 2015\n *  Weather themed icons for Bootstrap\n *  Author - Erik Flowers - erik@helloerik.com\n *  Email: erik@helloerik.com\n *  Twitter: http://twitter.com/Erik_UX\n *  ------------------------------------------------------------------------------\n *  Maintained at http://erikflowers.github.io/weather-icons\n *\n *  License\n *  ------------------------------------------------------------------------------\n *  - Font licensed under SIL OFL 1.1 -\n *    http://scripts.sil.org/OFL\n *  - CSS, SCSS and LESS are licensed under MIT License -\n *    http://opensource.org/licenses/mit-license.html\n *  - Documentation licensed under CC BY 3.0 -\n *    http://creativecommons.org/licenses/by/3.0/\n *  - Inspired by and works great as a companion with Font Awesome\n *    \"Font Awesome by Dave Gandy - http://fontawesome.io\"\n *//*!\n *  Weather Icons 2.0\n *  Updated August 1, 2015\n *  Weather themed icons for Bootstrap\n *  Author - Erik Flowers - erik@helloerik.com\n *  Email: erik@helloerik.com\n *  Twitter: http://twitter.com/Erik_UX\n *  ------------------------------------------------------------------------------\n *  Maintained at http://erikflowers.github.io/weather-icons\n *\n *  License\n *  ------------------------------------------------------------------------------\n *  - Font licensed under SIL OFL 1.1 -\n *    http://scripts.sil.org/OFL\n *  - CSS, SCSS and LESS are licensed under MIT License -\n *    http://opensource.org/licenses/mit-license.html\n *  - Documentation licensed under CC BY 3.0 -\n *    http://creativecommons.org/licenses/by/3.0/\n *  - Inspired by and works great as a companion with Font Awesome\n *    \"Font Awesome by Dave Gandy - http://fontawesome.io\"\n */\n@font-face{font-family:weathericons;src:url(" + escape(__webpack_require__(1109)) + ") format('woff');font-weight:400;font-style:normal\n}\n.wi{display:inline-block;font-family:weathericons;font-style:normal;font-weight:400;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale\n}\n.wi-fw{text-align:center;width:1.4em\n}\n.wi-rotate-90{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);transform:rotate(90deg)\n}\n.wi-rotate-180{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2);transform:rotate(180deg)\n}\n.wi-rotate-270{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3);transform:rotate(270deg)\n}\n.wi-flip-horizontal{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);transform:scale(-1,1)\n}\n.wi-flip-vertical{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);transform:scale(1,-1)\n}\n.wi-day-sunny:before{content:\"\\F00D\"\n}\n.wi-day-cloudy:before{content:\"\\F002\"\n}\n.wi-day-cloudy-gusts:before{content:\"\\F000\"\n}\n.wi-day-cloudy-windy:before{content:\"\\F001\"\n}\n.wi-day-fog:before{content:\"\\F003\"\n}\n.wi-day-hail:before{content:\"\\F004\"\n}\n.wi-day-haze:before{content:\"\\F0B6\"\n}\n.wi-day-lightning:before{content:\"\\F005\"\n}\n.wi-day-rain:before{content:\"\\F008\"\n}\n.wi-day-rain-mix:before{content:\"\\F006\"\n}\n.wi-day-rain-wind:before{content:\"\\F007\"\n}\n.wi-day-showers:before{content:\"\\F009\"\n}\n.wi-day-sleet:before{content:\"\\F0B2\"\n}\n.wi-day-sleet-storm:before{content:\"\\F068\"\n}\n.wi-day-snow:before{content:\"\\F00A\"\n}\n.wi-day-snow-thunderstorm:before{content:\"\\F06B\"\n}\n.wi-day-snow-wind:before{content:\"\\F065\"\n}\n.wi-day-sprinkle:before{content:\"\\F00B\"\n}\n.wi-day-storm-showers:before{content:\"\\F00E\"\n}\n.wi-day-sunny-overcast:before{content:\"\\F00C\"\n}\n.wi-day-thunderstorm:before{content:\"\\F010\"\n}\n.wi-day-windy:before{content:\"\\F085\"\n}\n.wi-solar-eclipse:before{content:\"\\F06E\"\n}\n.wi-hot:before{content:\"\\F072\"\n}\n.wi-day-cloudy-high:before{content:\"\\F07D\"\n}\n.wi-day-light-wind:before{content:\"\\F0C4\"\n}\n.wi-night-clear:before{content:\"\\F02E\"\n}\n.wi-night-alt-cloudy:before{content:\"\\F086\"\n}\n.wi-night-alt-cloudy-gusts:before{content:\"\\F022\"\n}\n.wi-night-alt-cloudy-windy:before{content:\"\\F023\"\n}\n.wi-night-alt-hail:before{content:\"\\F024\"\n}\n.wi-night-alt-lightning:before{content:\"\\F025\"\n}\n.wi-night-alt-rain:before{content:\"\\F028\"\n}\n.wi-night-alt-rain-mix:before{content:\"\\F026\"\n}\n.wi-night-alt-rain-wind:before{content:\"\\F027\"\n}\n.wi-night-alt-showers:before{content:\"\\F029\"\n}\n.wi-night-alt-sleet:before{content:\"\\F0B4\"\n}\n.wi-night-alt-sleet-storm:before{content:\"\\F06A\"\n}\n.wi-night-alt-snow:before{content:\"\\F02A\"\n}\n.wi-night-alt-snow-thunderstorm:before{content:\"\\F06D\"\n}\n.wi-night-alt-snow-wind:before{content:\"\\F067\"\n}\n.wi-night-alt-sprinkle:before{content:\"\\F02B\"\n}\n.wi-night-alt-storm-showers:before{content:\"\\F02C\"\n}\n.wi-night-alt-thunderstorm:before{content:\"\\F02D\"\n}\n.wi-night-cloudy:before{content:\"\\F031\"\n}\n.wi-night-cloudy-gusts:before{content:\"\\F02F\"\n}\n.wi-night-cloudy-windy:before{content:\"\\F030\"\n}\n.wi-night-fog:before{content:\"\\F04A\"\n}\n.wi-night-hail:before{content:\"\\F032\"\n}\n.wi-night-lightning:before{content:\"\\F033\"\n}\n.wi-night-partly-cloudy:before{content:\"\\F083\"\n}\n.wi-night-rain:before{content:\"\\F036\"\n}\n.wi-night-rain-mix:before{content:\"\\F034\"\n}\n.wi-night-rain-wind:before{content:\"\\F035\"\n}\n.wi-night-showers:before{content:\"\\F037\"\n}\n.wi-night-sleet:before{content:\"\\F0B3\"\n}\n.wi-night-sleet-storm:before{content:\"\\F069\"\n}\n.wi-night-snow:before{content:\"\\F038\"\n}\n.wi-night-snow-thunderstorm:before{content:\"\\F06C\"\n}\n.wi-night-snow-wind:before{content:\"\\F066\"\n}\n.wi-night-sprinkle:before{content:\"\\F039\"\n}\n.wi-night-storm-showers:before{content:\"\\F03A\"\n}\n.wi-night-thunderstorm:before{content:\"\\F03B\"\n}\n.wi-lunar-eclipse:before{content:\"\\F070\"\n}\n.wi-stars:before{content:\"\\F077\"\n}\n.wi-storm-showers:before{content:\"\\F01D\"\n}\n.wi-thunderstorm:before{content:\"\\F01E\"\n}\n.wi-night-alt-cloudy-high:before{content:\"\\F07E\"\n}\n.wi-night-cloudy-high:before{content:\"\\F080\"\n}\n.wi-night-alt-partly-cloudy:before{content:\"\\F081\"\n}\n.wi-cloud:before{content:\"\\F041\"\n}\n.wi-cloudy:before{content:\"\\F013\"\n}\n.wi-cloudy-gusts:before{content:\"\\F011\"\n}\n.wi-cloudy-windy:before{content:\"\\F012\"\n}\n.wi-fog:before{content:\"\\F014\"\n}\n.wi-hail:before{content:\"\\F015\"\n}\n.wi-rain:before{content:\"\\F019\"\n}\n.wi-rain-mix:before{content:\"\\F017\"\n}\n.wi-rain-wind:before{content:\"\\F018\"\n}\n.wi-showers:before{content:\"\\F01A\"\n}\n.wi-sleet:before{content:\"\\F0B5\"\n}\n.wi-snow:before{content:\"\\F01B\"\n}\n.wi-sprinkle:before{content:\"\\F01C\"\n}\n.wi-storm-showers:before{content:\"\\F01D\"\n}\n.wi-thunderstorm:before{content:\"\\F01E\"\n}\n.wi-snow-wind:before{content:\"\\F064\"\n}\n.wi-snow:before{content:\"\\F01B\"\n}\n.wi-smog:before{content:\"\\F074\"\n}\n.wi-smoke:before{content:\"\\F062\"\n}\n.wi-lightning:before{content:\"\\F016\"\n}\n.wi-raindrops:before{content:\"\\F04E\"\n}\n.wi-raindrop:before{content:\"\\F078\"\n}\n.wi-dust:before{content:\"\\F063\"\n}\n.wi-snowflake-cold:before{content:\"\\F076\"\n}\n.wi-windy:before{content:\"\\F021\"\n}\n.wi-strong-wind:before{content:\"\\F050\"\n}\n.wi-sandstorm:before{content:\"\\F082\"\n}\n.wi-earthquake:before{content:\"\\F0C6\"\n}\n.wi-fire:before{content:\"\\F0C7\"\n}\n.wi-flood:before{content:\"\\F07C\"\n}\n.wi-meteor:before{content:\"\\F071\"\n}\n.wi-tsunami:before{content:\"\\F0C5\"\n}\n.wi-volcano:before{content:\"\\F0C8\"\n}\n.wi-hurricane:before{content:\"\\F073\"\n}\n.wi-tornado:before{content:\"\\F056\"\n}\n.wi-small-craft-advisory:before{content:\"\\F0CC\"\n}\n.wi-gale-warning:before{content:\"\\F0CD\"\n}\n.wi-storm-warning:before{content:\"\\F0CE\"\n}\n.wi-hurricane-warning:before{content:\"\\F0CF\"\n}\n.wi-wind-direction:before{content:\"\\F0B1\"\n}\n.wi-alien:before{content:\"\\F075\"\n}\n.wi-celsius:before{content:\"\\F03C\"\n}\n.wi-fahrenheit:before{content:\"\\F045\"\n}\n.wi-degrees:before{content:\"\\F042\"\n}\n.wi-thermometer:before{content:\"\\F055\"\n}\n.wi-thermometer-exterior:before{content:\"\\F053\"\n}\n.wi-thermometer-internal:before{content:\"\\F054\"\n}\n.wi-cloud-down:before{content:\"\\F03D\"\n}\n.wi-cloud-up:before{content:\"\\F040\"\n}\n.wi-cloud-refresh:before{content:\"\\F03E\"\n}\n.wi-horizon:before{content:\"\\F047\"\n}\n.wi-horizon-alt:before{content:\"\\F046\"\n}\n.wi-sunrise:before{content:\"\\F051\"\n}\n.wi-sunset:before{content:\"\\F052\"\n}\n.wi-moonrise:before{content:\"\\F0C9\"\n}\n.wi-moonset:before{content:\"\\F0CA\"\n}\n.wi-refresh:before{content:\"\\F04C\"\n}\n.wi-refresh-alt:before{content:\"\\F04B\"\n}\n.wi-umbrella:before{content:\"\\F084\"\n}\n.wi-barometer:before{content:\"\\F079\"\n}\n.wi-humidity:before{content:\"\\F07A\"\n}\n.wi-na:before{content:\"\\F07B\"\n}\n.wi-train:before{content:\"\\F0CB\"\n}\n.wi-moon-new:before{content:\"\\F095\"\n}\n.wi-moon-waxing-crescent-1:before{content:\"\\F096\"\n}\n.wi-moon-waxing-crescent-2:before{content:\"\\F097\"\n}\n.wi-moon-waxing-crescent-3:before{content:\"\\F098\"\n}\n.wi-moon-waxing-crescent-4:before{content:\"\\F099\"\n}\n.wi-moon-waxing-crescent-5:before{content:\"\\F09A\"\n}\n.wi-moon-waxing-crescent-6:before{content:\"\\F09B\"\n}\n.wi-moon-first-quarter:before{content:\"\\F09C\"\n}\n.wi-moon-waxing-gibbous-1:before{content:\"\\F09D\"\n}\n.wi-moon-waxing-gibbous-2:before{content:\"\\F09E\"\n}\n.wi-moon-waxing-gibbous-3:before{content:\"\\F09F\"\n}\n.wi-moon-waxing-gibbous-4:before{content:\"\\F0A0\"\n}\n.wi-moon-waxing-gibbous-5:before{content:\"\\F0A1\"\n}\n.wi-moon-waxing-gibbous-6:before{content:\"\\F0A2\"\n}\n.wi-moon-full:before{content:\"\\F0A3\"\n}\n.wi-moon-waning-gibbous-1:before{content:\"\\F0A4\"\n}\n.wi-moon-waning-gibbous-2:before{content:\"\\F0A5\"\n}\n.wi-moon-waning-gibbous-3:before{content:\"\\F0A6\"\n}\n.wi-moon-waning-gibbous-4:before{content:\"\\F0A7\"\n}\n.wi-moon-waning-gibbous-5:before{content:\"\\F0A8\"\n}\n.wi-moon-waning-gibbous-6:before{content:\"\\F0A9\"\n}\n.wi-moon-third-quarter:before{content:\"\\F0AA\"\n}\n.wi-moon-waning-crescent-1:before{content:\"\\F0AB\"\n}\n.wi-moon-waning-crescent-2:before{content:\"\\F0AC\"\n}\n.wi-moon-waning-crescent-3:before{content:\"\\F0AD\"\n}\n.wi-moon-waning-crescent-4:before{content:\"\\F0AE\"\n}\n.wi-moon-waning-crescent-5:before{content:\"\\F0AF\"\n}\n.wi-moon-waning-crescent-6:before{content:\"\\F0B0\"\n}\n.wi-moon-alt-new:before{content:\"\\F0EB\"\n}\n.wi-moon-alt-waxing-crescent-1:before{content:\"\\F0D0\"\n}\n.wi-moon-alt-waxing-crescent-2:before{content:\"\\F0D1\"\n}\n.wi-moon-alt-waxing-crescent-3:before{content:\"\\F0D2\"\n}\n.wi-moon-alt-waxing-crescent-4:before{content:\"\\F0D3\"\n}\n.wi-moon-alt-waxing-crescent-5:before{content:\"\\F0D4\"\n}\n.wi-moon-alt-waxing-crescent-6:before{content:\"\\F0D5\"\n}\n.wi-moon-alt-first-quarter:before{content:\"\\F0D6\"\n}\n.wi-moon-alt-waxing-gibbous-1:before{content:\"\\F0D7\"\n}\n.wi-moon-alt-waxing-gibbous-2:before{content:\"\\F0D8\"\n}\n.wi-moon-alt-waxing-gibbous-3:before{content:\"\\F0D9\"\n}\n.wi-moon-alt-waxing-gibbous-4:before{content:\"\\F0DA\"\n}\n.wi-moon-alt-waxing-gibbous-5:before{content:\"\\F0DB\"\n}\n.wi-moon-alt-waxing-gibbous-6:before{content:\"\\F0DC\"\n}\n.wi-moon-alt-full:before{content:\"\\F0DD\"\n}\n.wi-moon-alt-waning-gibbous-1:before{content:\"\\F0DE\"\n}\n.wi-moon-alt-waning-gibbous-2:before{content:\"\\F0DF\"\n}\n.wi-moon-alt-waning-gibbous-3:before{content:\"\\F0E0\"\n}\n.wi-moon-alt-waning-gibbous-4:before{content:\"\\F0E1\"\n}\n.wi-moon-alt-waning-gibbous-5:before{content:\"\\F0E2\"\n}\n.wi-moon-alt-waning-gibbous-6:before{content:\"\\F0E3\"\n}\n.wi-moon-alt-third-quarter:before{content:\"\\F0E4\"\n}\n.wi-moon-alt-waning-crescent-1:before{content:\"\\F0E5\"\n}\n.wi-moon-alt-waning-crescent-2:before{content:\"\\F0E6\"\n}\n.wi-moon-alt-waning-crescent-3:before{content:\"\\F0E7\"\n}\n.wi-moon-alt-waning-crescent-4:before{content:\"\\F0E8\"\n}\n.wi-moon-alt-waning-crescent-5:before{content:\"\\F0E9\"\n}\n.wi-moon-alt-waning-crescent-6:before{content:\"\\F0EA\"\n}\n.wi-moon-0:before{content:\"\\F095\"\n}\n.wi-moon-1:before{content:\"\\F096\"\n}\n.wi-moon-2:before{content:\"\\F097\"\n}\n.wi-moon-3:before{content:\"\\F098\"\n}\n.wi-moon-4:before{content:\"\\F099\"\n}\n.wi-moon-5:before{content:\"\\F09A\"\n}\n.wi-moon-6:before{content:\"\\F09B\"\n}\n.wi-moon-7:before{content:\"\\F09C\"\n}\n.wi-moon-8:before{content:\"\\F09D\"\n}\n.wi-moon-9:before{content:\"\\F09E\"\n}\n.wi-moon-10:before{content:\"\\F09F\"\n}\n.wi-moon-11:before{content:\"\\F0A0\"\n}\n.wi-moon-12:before{content:\"\\F0A1\"\n}\n.wi-moon-13:before{content:\"\\F0A2\"\n}\n.wi-moon-14:before{content:\"\\F0A3\"\n}\n.wi-moon-15:before{content:\"\\F0A4\"\n}\n.wi-moon-16:before{content:\"\\F0A5\"\n}\n.wi-moon-17:before{content:\"\\F0A6\"\n}\n.wi-moon-18:before{content:\"\\F0A7\"\n}\n.wi-moon-19:before{content:\"\\F0A8\"\n}\n.wi-moon-20:before{content:\"\\F0A9\"\n}\n.wi-moon-21:before{content:\"\\F0AA\"\n}\n.wi-moon-22:before{content:\"\\F0AB\"\n}\n.wi-moon-23:before{content:\"\\F0AC\"\n}\n.wi-moon-24:before{content:\"\\F0AD\"\n}\n.wi-moon-25:before{content:\"\\F0AE\"\n}\n.wi-moon-26:before{content:\"\\F0AF\"\n}\n.wi-moon-27:before{content:\"\\F0B0\"\n}\n.wi-time-1:before{content:\"\\F08A\"\n}\n.wi-time-2:before{content:\"\\F08B\"\n}\n.wi-time-3:before{content:\"\\F08C\"\n}\n.wi-time-4:before{content:\"\\F08D\"\n}\n.wi-time-5:before{content:\"\\F08E\"\n}\n.wi-time-6:before{content:\"\\F08F\"\n}\n.wi-time-7:before{content:\"\\F090\"\n}\n.wi-time-8:before{content:\"\\F091\"\n}\n.wi-time-9:before{content:\"\\F092\"\n}\n.wi-time-10:before{content:\"\\F093\"\n}\n.wi-time-11:before{content:\"\\F094\"\n}\n.wi-time-12:before{content:\"\\F089\"\n}\n.wi-direction-up:before{content:\"\\F058\"\n}\n.wi-direction-up-right:before{content:\"\\F057\"\n}\n.wi-direction-right:before{content:\"\\F04D\"\n}\n.wi-direction-down-right:before{content:\"\\F088\"\n}\n.wi-direction-down:before{content:\"\\F044\"\n}\n.wi-direction-down-left:before{content:\"\\F043\"\n}\n.wi-direction-left:before{content:\"\\F048\"\n}\n.wi-direction-up-left:before{content:\"\\F087\"\n}\n.wi-wind-beaufort-0:before{content:\"\\F0B7\"\n}\n.wi-wind-beaufort-1:before{content:\"\\F0B8\"\n}\n.wi-wind-beaufort-2:before{content:\"\\F0B9\"\n}\n.wi-wind-beaufort-3:before{content:\"\\F0BA\"\n}\n.wi-wind-beaufort-4:before{content:\"\\F0BB\"\n}\n.wi-wind-beaufort-5:before{content:\"\\F0BC\"\n}\n.wi-wind-beaufort-6:before{content:\"\\F0BD\"\n}\n.wi-wind-beaufort-7:before{content:\"\\F0BE\"\n}\n.wi-wind-beaufort-8:before{content:\"\\F0BF\"\n}\n.wi-wind-beaufort-9:before{content:\"\\F0C0\"\n}\n.wi-wind-beaufort-10:before{content:\"\\F0C1\"\n}\n.wi-wind-beaufort-11:before{content:\"\\F0C2\"\n}\n.wi-wind-beaufort-12:before{content:\"\\F0C3\"\n}\n.wi-yahoo-0:before{content:\"\\F056\"\n}\n.wi-yahoo-1:before{content:\"\\F00E\"\n}\n.wi-yahoo-2:before{content:\"\\F073\"\n}\n.wi-yahoo-3:before{content:\"\\F01E\"\n}\n.wi-yahoo-4:before{content:\"\\F01E\"\n}\n.wi-yahoo-5:before{content:\"\\F017\"\n}\n.wi-yahoo-6:before{content:\"\\F017\"\n}\n.wi-yahoo-7:before{content:\"\\F017\"\n}\n.wi-yahoo-8:before{content:\"\\F015\"\n}\n.wi-yahoo-9:before{content:\"\\F01A\"\n}\n.wi-yahoo-10:before{content:\"\\F015\"\n}\n.wi-yahoo-11:before{content:\"\\F01A\"\n}\n.wi-yahoo-12:before{content:\"\\F01A\"\n}\n.wi-yahoo-13:before{content:\"\\F01B\"\n}\n.wi-yahoo-14:before{content:\"\\F00A\"\n}\n.wi-yahoo-15:before{content:\"\\F064\"\n}\n.wi-yahoo-16:before{content:\"\\F01B\"\n}\n.wi-yahoo-17:before{content:\"\\F015\"\n}\n.wi-yahoo-18:before{content:\"\\F017\"\n}\n.wi-yahoo-19:before{content:\"\\F063\"\n}\n.wi-yahoo-20:before{content:\"\\F014\"\n}\n.wi-yahoo-21:before{content:\"\\F021\"\n}\n.wi-yahoo-22:before{content:\"\\F062\"\n}\n.wi-yahoo-23:before{content:\"\\F050\"\n}\n.wi-yahoo-24:before{content:\"\\F050\"\n}\n.wi-yahoo-25:before{content:\"\\F076\"\n}\n.wi-yahoo-26:before{content:\"\\F013\"\n}\n.wi-yahoo-27:before{content:\"\\F031\"\n}\n.wi-yahoo-28:before{content:\"\\F002\"\n}\n.wi-yahoo-29:before{content:\"\\F031\"\n}\n.wi-yahoo-30:before{content:\"\\F002\"\n}\n.wi-yahoo-31:before{content:\"\\F02E\"\n}\n.wi-yahoo-32:before{content:\"\\F00D\"\n}\n.wi-yahoo-33:before{content:\"\\F083\"\n}\n.wi-yahoo-34:before{content:\"\\F00C\"\n}\n.wi-yahoo-35:before{content:\"\\F017\"\n}\n.wi-yahoo-36:before{content:\"\\F072\"\n}\n.wi-yahoo-37:before{content:\"\\F00E\"\n}\n.wi-yahoo-38:before{content:\"\\F00E\"\n}\n.wi-yahoo-39:before{content:\"\\F00E\"\n}\n.wi-yahoo-40:before{content:\"\\F01A\"\n}\n.wi-yahoo-41:before{content:\"\\F064\"\n}\n.wi-yahoo-42:before{content:\"\\F01B\"\n}\n.wi-yahoo-43:before{content:\"\\F064\"\n}\n.wi-yahoo-44:before{content:\"\\F00C\"\n}\n.wi-yahoo-45:before{content:\"\\F00E\"\n}\n.wi-yahoo-46:before{content:\"\\F01B\"\n}\n.wi-yahoo-47:before{content:\"\\F00E\"\n}\n.wi-yahoo-3200:before{content:\"\\F077\"\n}\n.wi-forecast-io-clear-day:before{content:\"\\F00D\"\n}\n.wi-forecast-io-clear-night:before{content:\"\\F02E\"\n}\n.wi-forecast-io-rain:before{content:\"\\F019\"\n}\n.wi-forecast-io-snow:before{content:\"\\F01B\"\n}\n.wi-forecast-io-sleet:before{content:\"\\F0B5\"\n}\n.wi-forecast-io-wind:before{content:\"\\F050\"\n}\n.wi-forecast-io-fog:before{content:\"\\F014\"\n}\n.wi-forecast-io-cloudy:before{content:\"\\F013\"\n}\n.wi-forecast-io-partly-cloudy-day:before{content:\"\\F002\"\n}\n.wi-forecast-io-partly-cloudy-night:before{content:\"\\F031\"\n}\n.wi-forecast-io-hail:before{content:\"\\F015\"\n}\n.wi-forecast-io-thunderstorm:before{content:\"\\F01E\"\n}\n.wi-forecast-io-tornado:before{content:\"\\F056\"\n}\n.wi-wmo4680-00:before,.wi-wmo4680-0:before{content:\"\\F055\"\n}\n.wi-wmo4680-01:before,.wi-wmo4680-1:before{content:\"\\F013\"\n}\n.wi-wmo4680-02:before,.wi-wmo4680-2:before{content:\"\\F055\"\n}\n.wi-wmo4680-03:before,.wi-wmo4680-3:before{content:\"\\F013\"\n}\n.wi-wmo4680-04:before,.wi-wmo4680-4:before{content:\"\\F014\"\n}\n.wi-wmo4680-05:before,.wi-wmo4680-5:before{content:\"\\F014\"\n}\n.wi-wmo4680-10:before{content:\"\\F014\"\n}\n.wi-wmo4680-11:before{content:\"\\F014\"\n}\n.wi-wmo4680-12:before{content:\"\\F016\"\n}\n.wi-wmo4680-18:before{content:\"\\F050\"\n}\n.wi-wmo4680-20:before{content:\"\\F014\"\n}\n.wi-wmo4680-21:before{content:\"\\F017\"\n}\n.wi-wmo4680-22:before{content:\"\\F017\"\n}\n.wi-wmo4680-23:before{content:\"\\F019\"\n}\n.wi-wmo4680-24:before{content:\"\\F01B\"\n}\n.wi-wmo4680-25:before{content:\"\\F015\"\n}\n.wi-wmo4680-26:before{content:\"\\F01E\"\n}\n.wi-wmo4680-27:before{content:\"\\F063\"\n}\n.wi-wmo4680-28:before{content:\"\\F063\"\n}\n.wi-wmo4680-29:before{content:\"\\F063\"\n}\n.wi-wmo4680-30:before{content:\"\\F014\"\n}\n.wi-wmo4680-31:before{content:\"\\F014\"\n}\n.wi-wmo4680-32:before{content:\"\\F014\"\n}\n.wi-wmo4680-33:before{content:\"\\F014\"\n}\n.wi-wmo4680-34:before{content:\"\\F014\"\n}\n.wi-wmo4680-35:before{content:\"\\F014\"\n}\n.wi-wmo4680-40:before{content:\"\\F017\"\n}\n.wi-wmo4680-41:before{content:\"\\F01C\"\n}\n.wi-wmo4680-42:before{content:\"\\F019\"\n}\n.wi-wmo4680-43:before{content:\"\\F01C\"\n}\n.wi-wmo4680-44:before{content:\"\\F019\"\n}\n.wi-wmo4680-45:before{content:\"\\F015\"\n}\n.wi-wmo4680-46:before{content:\"\\F015\"\n}\n.wi-wmo4680-47:before{content:\"\\F01B\"\n}\n.wi-wmo4680-48:before{content:\"\\F01B\"\n}\n.wi-wmo4680-50:before{content:\"\\F01C\"\n}\n.wi-wmo4680-51:before{content:\"\\F01C\"\n}\n.wi-wmo4680-52:before{content:\"\\F019\"\n}\n.wi-wmo4680-53:before{content:\"\\F019\"\n}\n.wi-wmo4680-54:before{content:\"\\F076\"\n}\n.wi-wmo4680-55:before{content:\"\\F076\"\n}\n.wi-wmo4680-56:before{content:\"\\F076\"\n}\n.wi-wmo4680-57:before{content:\"\\F01C\"\n}\n.wi-wmo4680-58:before{content:\"\\F019\"\n}\n.wi-wmo4680-60:before{content:\"\\F01C\"\n}\n.wi-wmo4680-61:before{content:\"\\F01C\"\n}\n.wi-wmo4680-62:before{content:\"\\F019\"\n}\n.wi-wmo4680-63:before{content:\"\\F019\"\n}\n.wi-wmo4680-64:before{content:\"\\F015\"\n}\n.wi-wmo4680-65:before{content:\"\\F015\"\n}\n.wi-wmo4680-66:before{content:\"\\F015\"\n}\n.wi-wmo4680-67:before{content:\"\\F017\"\n}\n.wi-wmo4680-68:before{content:\"\\F017\"\n}\n.wi-wmo4680-70:before{content:\"\\F01B\"\n}\n.wi-wmo4680-71:before{content:\"\\F01B\"\n}\n.wi-wmo4680-72:before{content:\"\\F01B\"\n}\n.wi-wmo4680-73:before{content:\"\\F01B\"\n}\n.wi-wmo4680-74:before{content:\"\\F076\"\n}\n.wi-wmo4680-75:before{content:\"\\F076\"\n}\n.wi-wmo4680-76:before{content:\"\\F076\"\n}\n.wi-wmo4680-77:before{content:\"\\F01B\"\n}\n.wi-wmo4680-78:before{content:\"\\F076\"\n}\n.wi-wmo4680-80:before{content:\"\\F019\"\n}\n.wi-wmo4680-81:before{content:\"\\F01C\"\n}\n.wi-wmo4680-82:before{content:\"\\F019\"\n}\n.wi-wmo4680-83:before{content:\"\\F019\"\n}\n.wi-wmo4680-84:before{content:\"\\F01D\"\n}\n.wi-wmo4680-85:before{content:\"\\F017\"\n}\n.wi-wmo4680-86:before{content:\"\\F017\"\n}\n.wi-wmo4680-87:before{content:\"\\F017\"\n}\n.wi-wmo4680-89:before{content:\"\\F015\"\n}\n.wi-wmo4680-90:before{content:\"\\F016\"\n}\n.wi-wmo4680-91:before{content:\"\\F01D\"\n}\n.wi-wmo4680-92:before{content:\"\\F01E\"\n}\n.wi-wmo4680-93:before{content:\"\\F01E\"\n}\n.wi-wmo4680-94:before{content:\"\\F016\"\n}\n.wi-wmo4680-95:before{content:\"\\F01E\"\n}\n.wi-wmo4680-96:before{content:\"\\F01E\"\n}\n.wi-wmo4680-99:before{content:\"\\F056\"\n}\n.wi-owm-200:before{content:\"\\F01E\"\n}\n.wi-owm-201:before{content:\"\\F01E\"\n}\n.wi-owm-202:before{content:\"\\F01E\"\n}\n.wi-owm-210:before{content:\"\\F016\"\n}\n.wi-owm-211:before{content:\"\\F016\"\n}\n.wi-owm-212:before{content:\"\\F016\"\n}\n.wi-owm-221:before{content:\"\\F016\"\n}\n.wi-owm-230:before{content:\"\\F01E\"\n}\n.wi-owm-231:before{content:\"\\F01E\"\n}\n.wi-owm-232:before{content:\"\\F01E\"\n}\n.wi-owm-300:before{content:\"\\F01C\"\n}\n.wi-owm-301:before{content:\"\\F01C\"\n}\n.wi-owm-302:before{content:\"\\F019\"\n}\n.wi-owm-310:before{content:\"\\F017\"\n}\n.wi-owm-311:before{content:\"\\F019\"\n}\n.wi-owm-312:before{content:\"\\F019\"\n}\n.wi-owm-313:before{content:\"\\F01A\"\n}\n.wi-owm-314:before{content:\"\\F019\"\n}\n.wi-owm-321:before{content:\"\\F01C\"\n}\n.wi-owm-500:before{content:\"\\F01C\"\n}\n.wi-owm-501:before{content:\"\\F019\"\n}\n.wi-owm-502:before{content:\"\\F019\"\n}\n.wi-owm-503:before{content:\"\\F019\"\n}\n.wi-owm-504:before{content:\"\\F019\"\n}\n.wi-owm-511:before{content:\"\\F017\"\n}\n.wi-owm-520:before{content:\"\\F01A\"\n}\n.wi-owm-521:before{content:\"\\F01A\"\n}\n.wi-owm-522:before{content:\"\\F01A\"\n}\n.wi-owm-531:before{content:\"\\F01D\"\n}\n.wi-owm-600:before{content:\"\\F01B\"\n}\n.wi-owm-601:before{content:\"\\F01B\"\n}\n.wi-owm-602:before{content:\"\\F0B5\"\n}\n.wi-owm-611:before{content:\"\\F017\"\n}\n.wi-owm-612:before{content:\"\\F017\"\n}\n.wi-owm-615:before{content:\"\\F017\"\n}\n.wi-owm-616:before{content:\"\\F017\"\n}\n.wi-owm-620:before{content:\"\\F017\"\n}\n.wi-owm-621:before{content:\"\\F01B\"\n}\n.wi-owm-622:before{content:\"\\F01B\"\n}\n.wi-owm-701:before{content:\"\\F01A\"\n}\n.wi-owm-711:before{content:\"\\F062\"\n}\n.wi-owm-721:before{content:\"\\F0B6\"\n}\n.wi-owm-731:before{content:\"\\F063\"\n}\n.wi-owm-741:before{content:\"\\F014\"\n}\n.wi-owm-761:before{content:\"\\F063\"\n}\n.wi-owm-762:before{content:\"\\F063\"\n}\n.wi-owm-771:before{content:\"\\F011\"\n}\n.wi-owm-781:before{content:\"\\F056\"\n}\n.wi-owm-800:before{content:\"\\F00D\"\n}\n.wi-owm-801:before{content:\"\\F011\"\n}\n.wi-owm-802:before{content:\"\\F011\"\n}\n.wi-owm-803:before{content:\"\\F012\"\n}\n.wi-owm-804:before{content:\"\\F013\"\n}\n.wi-owm-900:before{content:\"\\F056\"\n}\n.wi-owm-901:before{content:\"\\F01D\"\n}\n.wi-owm-902:before{content:\"\\F073\"\n}\n.wi-owm-903:before{content:\"\\F076\"\n}\n.wi-owm-904:before{content:\"\\F072\"\n}\n.wi-owm-905:before{content:\"\\F021\"\n}\n.wi-owm-906:before{content:\"\\F015\"\n}\n.wi-owm-957:before{content:\"\\F050\"\n}\n.wi-owm-day-200:before{content:\"\\F010\"\n}\n.wi-owm-day-201:before{content:\"\\F010\"\n}\n.wi-owm-day-202:before{content:\"\\F010\"\n}\n.wi-owm-day-210:before{content:\"\\F005\"\n}\n.wi-owm-day-211:before{content:\"\\F005\"\n}\n.wi-owm-day-212:before{content:\"\\F005\"\n}\n.wi-owm-day-221:before{content:\"\\F005\"\n}\n.wi-owm-day-230:before{content:\"\\F010\"\n}\n.wi-owm-day-231:before{content:\"\\F010\"\n}\n.wi-owm-day-232:before{content:\"\\F010\"\n}\n.wi-owm-day-300:before{content:\"\\F00B\"\n}\n.wi-owm-day-301:before{content:\"\\F00B\"\n}\n.wi-owm-day-302:before{content:\"\\F008\"\n}\n.wi-owm-day-310:before{content:\"\\F008\"\n}\n.wi-owm-day-311:before{content:\"\\F008\"\n}\n.wi-owm-day-312:before{content:\"\\F008\"\n}\n.wi-owm-day-313:before{content:\"\\F008\"\n}\n.wi-owm-day-314:before{content:\"\\F008\"\n}\n.wi-owm-day-321:before{content:\"\\F00B\"\n}\n.wi-owm-day-500:before{content:\"\\F00B\"\n}\n.wi-owm-day-501:before{content:\"\\F008\"\n}\n.wi-owm-day-502:before{content:\"\\F008\"\n}\n.wi-owm-day-503:before{content:\"\\F008\"\n}\n.wi-owm-day-504:before{content:\"\\F008\"\n}\n.wi-owm-day-511:before{content:\"\\F006\"\n}\n.wi-owm-day-520:before{content:\"\\F009\"\n}\n.wi-owm-day-521:before{content:\"\\F009\"\n}\n.wi-owm-day-522:before{content:\"\\F009\"\n}\n.wi-owm-day-531:before{content:\"\\F00E\"\n}\n.wi-owm-day-600:before{content:\"\\F00A\"\n}\n.wi-owm-day-601:before{content:\"\\F0B2\"\n}\n.wi-owm-day-602:before{content:\"\\F00A\"\n}\n.wi-owm-day-611:before{content:\"\\F006\"\n}\n.wi-owm-day-612:before{content:\"\\F006\"\n}\n.wi-owm-day-615:before{content:\"\\F006\"\n}\n.wi-owm-day-616:before{content:\"\\F006\"\n}\n.wi-owm-day-620:before{content:\"\\F006\"\n}\n.wi-owm-day-621:before{content:\"\\F00A\"\n}\n.wi-owm-day-622:before{content:\"\\F00A\"\n}\n.wi-owm-day-701:before{content:\"\\F009\"\n}\n.wi-owm-day-711:before{content:\"\\F062\"\n}\n.wi-owm-day-721:before{content:\"\\F0B6\"\n}\n.wi-owm-day-731:before{content:\"\\F063\"\n}\n.wi-owm-day-741:before{content:\"\\F003\"\n}\n.wi-owm-day-761:before{content:\"\\F063\"\n}\n.wi-owm-day-762:before{content:\"\\F063\"\n}\n.wi-owm-day-781:before{content:\"\\F056\"\n}\n.wi-owm-day-800:before{content:\"\\F00D\"\n}\n.wi-owm-day-801:before{content:\"\\F000\"\n}\n.wi-owm-day-802:before{content:\"\\F000\"\n}\n.wi-owm-day-803:before{content:\"\\F000\"\n}\n.wi-owm-day-804:before{content:\"\\F00C\"\n}\n.wi-owm-day-900:before{content:\"\\F056\"\n}\n.wi-owm-day-902:before{content:\"\\F073\"\n}\n.wi-owm-day-903:before{content:\"\\F076\"\n}\n.wi-owm-day-904:before{content:\"\\F072\"\n}\n.wi-owm-day-906:before{content:\"\\F004\"\n}\n.wi-owm-day-957:before{content:\"\\F050\"\n}\n.wi-owm-night-200:before{content:\"\\F02D\"\n}\n.wi-owm-night-201:before{content:\"\\F02D\"\n}\n.wi-owm-night-202:before{content:\"\\F02D\"\n}\n.wi-owm-night-210:before{content:\"\\F025\"\n}\n.wi-owm-night-211:before{content:\"\\F025\"\n}\n.wi-owm-night-212:before{content:\"\\F025\"\n}\n.wi-owm-night-221:before{content:\"\\F025\"\n}\n.wi-owm-night-230:before{content:\"\\F02D\"\n}\n.wi-owm-night-231:before{content:\"\\F02D\"\n}\n.wi-owm-night-232:before{content:\"\\F02D\"\n}\n.wi-owm-night-300:before{content:\"\\F02B\"\n}\n.wi-owm-night-301:before{content:\"\\F02B\"\n}\n.wi-owm-night-302:before{content:\"\\F028\"\n}\n.wi-owm-night-310:before{content:\"\\F028\"\n}\n.wi-owm-night-311:before{content:\"\\F028\"\n}\n.wi-owm-night-312:before{content:\"\\F028\"\n}\n.wi-owm-night-313:before{content:\"\\F028\"\n}\n.wi-owm-night-314:before{content:\"\\F028\"\n}\n.wi-owm-night-321:before{content:\"\\F02B\"\n}\n.wi-owm-night-500:before{content:\"\\F02B\"\n}\n.wi-owm-night-501:before{content:\"\\F028\"\n}\n.wi-owm-night-502:before{content:\"\\F028\"\n}\n.wi-owm-night-503:before{content:\"\\F028\"\n}\n.wi-owm-night-504:before{content:\"\\F028\"\n}\n.wi-owm-night-511:before{content:\"\\F026\"\n}\n.wi-owm-night-520:before{content:\"\\F029\"\n}\n.wi-owm-night-521:before{content:\"\\F029\"\n}\n.wi-owm-night-522:before{content:\"\\F029\"\n}\n.wi-owm-night-531:before{content:\"\\F02C\"\n}\n.wi-owm-night-600:before{content:\"\\F02A\"\n}\n.wi-owm-night-601:before{content:\"\\F0B4\"\n}\n.wi-owm-night-602:before{content:\"\\F02A\"\n}\n.wi-owm-night-611:before{content:\"\\F026\"\n}\n.wi-owm-night-612:before{content:\"\\F026\"\n}\n.wi-owm-night-615:before{content:\"\\F026\"\n}\n.wi-owm-night-616:before{content:\"\\F026\"\n}\n.wi-owm-night-620:before{content:\"\\F026\"\n}\n.wi-owm-night-621:before{content:\"\\F02A\"\n}\n.wi-owm-night-622:before{content:\"\\F02A\"\n}\n.wi-owm-night-701:before{content:\"\\F029\"\n}\n.wi-owm-night-711:before{content:\"\\F062\"\n}\n.wi-owm-night-721:before{content:\"\\F0B6\"\n}\n.wi-owm-night-731:before{content:\"\\F063\"\n}\n.wi-owm-night-741:before{content:\"\\F04A\"\n}\n.wi-owm-night-761:before{content:\"\\F063\"\n}\n.wi-owm-night-762:before{content:\"\\F063\"\n}\n.wi-owm-night-781:before{content:\"\\F056\"\n}\n.wi-owm-night-800:before{content:\"\\F02E\"\n}\n.wi-owm-night-801:before{content:\"\\F022\"\n}\n.wi-owm-night-802:before{content:\"\\F022\"\n}\n.wi-owm-night-803:before{content:\"\\F022\"\n}\n.wi-owm-night-804:before{content:\"\\F086\"\n}\n.wi-owm-night-900:before{content:\"\\F056\"\n}\n.wi-owm-night-902:before{content:\"\\F073\"\n}\n.wi-owm-night-903:before{content:\"\\F076\"\n}\n.wi-owm-night-904:before{content:\"\\F072\"\n}\n.wi-owm-night-906:before{content:\"\\F024\"\n}\n.wi-owm-night-957:before{content:\"\\F050\"\n}\n.wi-wu-chanceflurries:before{content:\"\\F064\"\n}\n.wi-wu-chancerain:before{content:\"\\F019\"\n}\n.wi-wu-chancesleat:before{content:\"\\F0B5\"\n}\n.wi-wu-chancesnow:before{content:\"\\F01B\"\n}\n.wi-wu-chancetstorms:before{content:\"\\F01E\"\n}\n.wi-wu-clear:before{content:\"\\F00D\"\n}\n.wi-wu-cloudy:before{content:\"\\F002\"\n}\n.wi-wu-flurries:before{content:\"\\F064\"\n}\n.wi-wu-hazy:before{content:\"\\F0B6\"\n}\n.wi-wu-mostlycloudy:before{content:\"\\F002\"\n}\n.wi-wu-mostlysunny:before{content:\"\\F00D\"\n}\n.wi-wu-partlycloudy:before{content:\"\\F002\"\n}\n.wi-wu-partlysunny:before{content:\"\\F00D\"\n}\n.wi-wu-rain:before{content:\"\\F01A\"\n}\n.wi-wu-sleat:before{content:\"\\F0B5\"\n}\n.wi-wu-snow:before{content:\"\\F01B\"\n}\n.wi-wu-sunny:before{content:\"\\F00D\"\n}\n.wi-wu-tstorms:before{content:\"\\F01E\"\n}\n.wi-wu-unknown:before{content:\"\\F00D\"\n}\n", ""]);

// exports


/***/ }),

/***/ 1109:
/***/ (function(module, exports) {

module.exports = "/Educ/public/fonts/vendor/weathericons/weathericons-regular-webfont.woff?8cac70ebda3f23ce472110d9f21e8593";

/***/ }),

/***/ 1110:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1111);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(39)("6682f939", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1ff18504\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./weather.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1ff18504\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./weather.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1111:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(836);
exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*weather widget*/\n.weather-widget[data-v-1ff18504] {\n    background-image: url(" + escape(__webpack_require__(1112)) + ");\n    background-size: cover;\n    color: #fff;\n    padding: 26px 0;\n    position: relative;\n    border-radius: 5px;\n}\n.weather-data .temperature[data-v-1ff18504] {\n    padding-top: 29px;\n    padding-left: 10%;\n}\n.weather-data .temperature h2 span[data-v-1ff18504] {\n    font-size: 60px;\n    margin-right: 40px;\n}\n.weather-data .temperature .icon[data-v-1ff18504] {\n    position: relative;\n    font-size: 82px;\n    z-index: 0;\n}\n.weather-data .temperature .location[data-v-1ff18504] {\n    font-size: 14px;\n    position: absolute;\n}\n.weather-footer[data-v-1ff18504] {\n    background: rgba(0, 0, 0, 0.4);\n    height: 100px;\n    bottom: 0;\n    width: 100%;\n    position: relative;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n}\n.weather-footer h5[data-v-1ff18504] {\n    color: #ccc;\n}\n.weather-footer i[data-v-1ff18504] {\n    font-size: 22px;\n    margin: 5px 0 8px 0;\n}\n.weather-footer p[data-v-1ff18504] {\n    font-size: 15px;\n}\n.weather-footer .popup[data-v-1ff18504] {\n    transition: .1s ease-in-out;\n}\n.weather-footer .popup[data-v-1ff18504]:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n}\n@media screen and (max-width: 768px) {\n.weather-data .temperature h2 span.pull-right[data-v-1ff18504] {\n        font-size: 45px;\n        margin-right: 20px;\n        margin-top: -15px;\n}\n.weather-data .temperature .icon[data-v-1ff18504] {\n        font-size: 40px;\n}\n.weather-widget[data-v-1ff18504] {\n        padding: 70px 0;\n}\n}\n/*weather widget ends*/\n", ""]);

// exports


/***/ }),

/***/ 1112:
/***/ (function(module, exports) {

module.exports = "/Educ/public/images/weathernew.jpg?9cb297ebc24b752abb4d45c5dcbccff3";

/***/ }),

/***/ 1113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_geolocator__ = __webpack_require__(1114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_geolocator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_geolocator__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumWait: 10000,
    maximumAge: 0, // disable cache
    desiredAccuracy: 30, // meters
    fallbackToIP: true
};
/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        id: {
            type: String,
            default: "1269843"
        }
    },
    components: {},
    mounted: function mounted() {
        this.getLocation();
    },

    watch: {
        id: function id() {
            this.showdata();
        }
    },

    data: function data() {
        return {
            weather: {},
            cords: null,
            // ==get api key from http://openweathermap.org/api
            appid: this.$store.state.openWeather_key
        };
    },

    methods: {
        getLocation: function getLocation() {
            var x = this;
            __WEBPACK_IMPORTED_MODULE_0_geolocator___default.a.locate(options, function (err, location) {
                if (err) return console.log(err);
                x.cords = location;
                x.showdata();
            });
            this.showdata();
        },
        showdata: function showdata() {
            var _this = this;

            var getid = "id=" + this.id;
            if (this.cords) {
                var getcords = "lat=" + this.cords.coords.latitude + "&lon=" + this.cords.coords.longitude;
            }
            var getdata = getcords ? getcords : getid;
            axios.get("http://api.openweathermap.org/data/2.5/forecast/daily?" + getdata + "&appid=" + this.appid + "&units=metric&cnt=7").then(function (response) {
                _this.weather = response.data;
            }).catch(function (error) {
                console.log(error);
            });
        },
        getday: function getday(dt) {
            return new Date(dt * 1000).toString().split(" ")[0];
        }
    }
});

/***/ }),

/***/ 1114:
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Geolocator.js https://github.com/onury/geolocator
 * @license MIT. © 2019, Onur Yıldırım
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("geolocator", [], factory);
	else if(typeof exports === 'object')
		exports["geolocator"] = factory();
	else
		root["geolocator"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core/enums.js":
/*!***************************!*\
  !*** ./src/core/enums.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var GOOGLE_MAPS_API_BASE = '//maps.googleapis.com/maps/api';

/**
 * This file only includes partial documentation about `geolocator` enumerations.
 * Note that these enumerations are mostly an aggregation of
 * {@link https://developers.google.com/maps/documentation/javascript|Google Maps API} constants.
 *
 * @private
 * @readonly
 */
var enums = Object.freeze({
  /**
   * Enumerates API endpoints used within Geolocator core.
   *
   * @enum {String}
   * @readonly
   * @private
   */
  URL: {
    /**
     *  Public IP retrieval (free) service.
     *  @type {String}
     *  @private
     */
    IP: '//api.ipify.org',
    /**
     *  Country SVG flags.
     *  e.g. <url>/tr.svg for Turkey flag.
     *  @type {String}
     *  @private
     */
    FLAG: '//cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.3.1/flags/4x3/',
    /**
     * Google Maps API bootstrap endpoint that loads all of the main
     * Javascript objects and symbols for use in the Maps API.
     * Some Maps API features are also available in self-contained
     * libraries which are not loaded unless you specifically request them.
     * See {@link https://developers.google.com/maps/documentation/javascript/libraries|details}.
     * @type {String}
     * @private
     */
    GOOGLE_MAPS_API: GOOGLE_MAPS_API_BASE + '/js',
    /**
     * Google Maps API Static Map endpoint.
     * @type {String}
     * @private
     */
    GOOGLE_SATATIC_MAP: GOOGLE_MAPS_API_BASE + '/staticmap',
    /**
     * Google Geolocation API endpoint.
     * @type {String}
     * @private
     */
    GOOGLE_GEOLOCATION: '//www.googleapis.com/geolocation/v1/geolocate',
    /**
     * Google Geocode API endpoint.
     * @type {String}
     * @private
     */
    GOOGLE_GEOCODE: '//maps.googleapis.com/maps/api/geocode/json',
    /**
     * Google TimeZone API endpoint.
     * @type {String}
     * @private
     */
    GOOGLE_TIMEZONE: '//maps.googleapis.com/maps/api/timezone/json',
    /**
     * Google Distance Matrix API endpoint.
     * @type {String}
     * @private
     */
    GOOGLE_DISTANCE_MATRIX: '//maps.googleapis.com/maps/api/distancematrix/json'
  },
  /**
   * Enumerates Google map types.
   * @memberof! geolocator
   *
   * @enum {String}
   * @readonly
   */
  MapTypeId: {
    /**
     * Map type that displays a transparent layer of major streets on
     * satellite images.
     * @type {String}
     */
    HYBRID: 'hybrid',
    /**
     * Map type that displays a normal street map.
     * @type {String}
     */
    ROADMAP: 'roadmap',
    /**
     * Map type that displays satellite images.
     * @type {String}
     */
    SATELLITE: 'satellite',
    /**
     * Map type displays maps with physical features such as terrain and
     * vegetation.
     * @type {String}
     */
    TERRAIN: 'terrain'
  },
  /**
   * Enumerates Google location types.
   * @memberof! geolocator
   *
   * @enum {String}
   * @readonly
   */
  LocationType: {
    /**
     * Indicates that the returned result is a precise geocode for which
     * we have location information accurate down to street address
     * precision.
     * @type {String}
     */
    ROOFTOP: 'ROOFTOP',
    /**
     * Indicates that the returned result reflects an approximation
     * (usually on a road) interpolated between two precise points (such as
     * intersections). Interpolated results are generally returned when
     * rooftop geocodes are unavailable for a street address.
     * @type {String}
     */
    RANGE_INTERPOLATED: 'RANGE_INTERPOLATED',
    /**
     * Indicates that the returned result is the geometric center of a
     * result such as a polyline (for example, a street) or polygon
     * (region).
     * @type {String}
     */
    GEOMETRIC_CENTER: 'GEOMETRIC_CENTER',
    /**
     * Indicates that the returned result is approximate.
     * @type {String}
     */
    APPROXIMATE: 'APPROXIMATE'
  },
  /**
   * Enumerates Google travel modes.
   * @memberof! geolocator
   *
   * @enum {String}
   * @readonly
   */
  TravelMode: {
    /**
     * Indicates distance calculation using the road network.
     * @type {String}
     */
    DRIVING: 'DRIVING',
    /**
     * Requests distance calculation for walking via pedestrian paths &
     * sidewalks (where available).
     * @type {String}
     */
    WALKING: 'WALKING',
    /**
     * Requests distance calculation for bicycling via bicycle paths &
     * preferred streets (where available).
     * @type {String}
     */
    BICYCLING: 'BICYCLING',
    /**
     * Requests distance calculation via public transit routes (where
     * available). This value may only be specified if the request includes
     * an API key or a Google Maps APIs Premium Plan client ID. If you set
     * the mode to transit you can optionally specify either a
     * `departureTime` or an `arrivalTime`. If neither time is specified,
     * the `departureTime` defaults to now (that is, the departure time defaults
     * to the current time). You can also optionally include a `transitMode`
     * and/or a `transitRoutingPreference`.
     * @type {String}
     */
    TRANSIT: 'TRANSIT'
  },
  // /**
  //  * Enumerates Google route restrictions.
  //  * @memberof! geolocator
  //  *
  //  * @enum {String}
  //  * @readonly
  //  */
  // RouteRestriction: {
  //     TOLLS: 'tolls',
  //     HIGHWAYS: 'highways',
  //     FERRIES: 'ferries',
  //     INDOOR: 'indoor'
  // },
  /**
   * Enumerates Google unit systems.
   * @memberof! geolocator
   *
   * @enum {Number}
   * @readonly
   */
  UnitSystem: {
    /**
     * Distances in kilometers and meters.
     * @type {Number}
     */
    METRIC: 0,
    /**
     * Distances defined in miles and feet.
     * @type {Number}
     */
    IMPERIAL: 1
  },
  /**
   * Enumerates mobile radio types.
   * @memberof! geolocator
   *
   * @enum {String}
   * @readonly
   */
  RadioType: {
    /**
     * LTE (Long-Term Evolution) mobile radio type.
     * @type {String}
     */
    LTE: 'lte',
    /**
     * GSM (Global System for Mobile Communications) mobile radio type.
     * @type {String}
     */
    GSM: 'gsm',
    /**
     * CDMA (Code division multiple access) mobile radio access technology.
     * @type {String}
     */
    CDMA: 'cdma',
    /**
     * Wideband CDMA mobile radio access technology.
     * @type {String}
     */
    WCDMA: 'wcdma'
  },
  /**
   * Enumerates formulas/algorithms for calculating the distance between two
   * lat/lng points.
   * @memberof! geolocator
   *
   * @readonly
   * @enum {String}
   *
   * @todo {@link https://en.wikipedia.org/wiki/Vincenty%27s_formulae|Vincenty's Formula}
   */
  DistanceFormula: {
    /**
     * Haversine formula for calculating the distance between two lat/lng points
     * by relating the sides and angles of spherical triangles.
     * @see {@link http://en.wikipedia.org/wiki/Haversine_formula|Haversine_formula}.
     * @type {String}
     */
    HAVERSINE: 'haversine',
    /**
     * Formula based on the Pythagoras Theorem for calculating the
     * distance between two lat/lng points on a Equirectangular projection
     * to account for curvature of the longitude lines.
     * @see {@link https://en.wikipedia.org/wiki/Pythagorean_theorem|Pythagorean_theorem}
     * @type {String}
     */
    PYTHAGOREAN: 'pythagorean'
  },
  /**
   *  Enumerates the image formats used for getting static Google Map images.
   *  @memberof! geolocator
   *
   *  @readonly
   *  @enum {String}
   */
  ImageFormat: {
    /**
     *  Specifies the PNG image format.
     *  Same as `PNG_8`.
     *  @type {String}
     */
    PNG: 'png',
    /**
     *  Specifies the 8-bit PNG image format.
     *  Same as `PNG`.
     *  @type {String}
     */
    PNG_8: 'png8',
    /**
     *  Specifies the 32-bit PNG image format.
     *  @type {String}
     */
    PNG_32: 'png32',
    /**
     *  Specifies the GIF image format.
     *  @type {String}
     */
    GIF: 'gif',
    /**
     *  Specifies the JPEG compressed image format.
     *  @type {String}
     */
    JPG: 'jpg',
    /**
     *  Specifies a non-progressive JPEG compression image format.
     *  @type {String}
     */
    JPG_BASELINE: 'jpg-baseline'
  }
});

/* harmony default export */ __webpack_exports__["default"] = (enums);

/***/ }),

/***/ "./src/core/geo.error.js":
/*!*******************************!*\
  !*** ./src/core/geo.error.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/utils */ "./src/lib/utils.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * Geolocator Error class that provides a common type of error object for the
 * various APIs implemented in Geolocator. All callbacks of Geolocator will
 * include an instance of this object as the first argument; if the
 * corresponding operation fails. Also all thrown errors will be an instance of
 * this object.
 *
 * This object can be publicly accessed via `geolocator.Error`.
 *
 * @extends Error
 */

var GeoError = function () {
    // extends Error (doesn't work with transpilers)

    /**
     * Costructs a new instance of `GeoError`.
     *
     * @param {String} [code="UNKNOWN_ERROR"]
     *        Any valid Geolocator Error code.
     *        See {@link #GeoError.Code|`GeoError.Code` enumeration} for
     *        possible values.
     * @param {String} [message]
     *        Error message. If omitted, this will be set to `code`.
     *
     * @returns {GeoError}
     *
     * @example
     * var GeoError = geolocator.Error,
     *     error = new GeoError(GeoError.Code.GEOLOCATION_NOT_SUPPORTED);
     * console.log(error.code); // "GEOLOCATION_NOT_SUPPORTED"
     * console.log(error instanceof GeoError); // true
     */
    function GeoError() {
        var code = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : GeoError.Code.UNKNOWN_ERROR;
        var message = arguments[1];

        _classCallCheck(this, GeoError);

        message = message || String(code);

        /**
         *  Gets the name of the Error object.
         *  This always returns `"GeoError"`.
         *  @name GeoError#name
         *  @type {String}
         */
        Object.defineProperty(this, 'name', {
            enumerable: false,
            writable: false,
            value: 'GeoError' // this.constructor.name
        });

        /**
         *  Gets the error code set for this instance.
         *  This will return one of
         *  {@link #GeoError.Code|`GeoError.Code` enumeration}.
         *  @name GeoError#code
         *  @type {String}
         */
        Object.defineProperty(this, 'code', {
            enumerable: false,
            writable: true,
            value: code
        });

        /**
         *  Gets the error message set for this instance.
         *  If no message is set, this will return the error code value.
         *  @name GeoError#message
         *  @type {String}
         */
        Object.defineProperty(this, 'message', {
            enumerable: false,
            writable: true,
            value: message
        });

        if (Error.hasOwnProperty('captureStackTrace')) {
            // V8
            Error.captureStackTrace(this, this.constructor);
        } else {
            /**
             *  Gets the error stack for this instance.
             *  @name GeoError#stack
             *  @type {String}
             */
            Object.defineProperty(this, 'stack', {
                enumerable: false,
                writable: false,
                value: new Error(message).stack
            });
        }
    }

    /**
     * Creates a new instance of `GeoError` from the given value.
     *
     * @param {*} [err]
     *        Value to be transformed. This is used to determine the proper
     *        error code for the created instance. If an `Error` or `Object` is
     *        passed, its `message` property is checked if it matches any of the
     *        valid error codes. If omitted or no match is found, error code
     *        `GeoError.Code.UNKNOWN_ERROR` will be used as default.
     *
     * @returns {GeoError}
     *
     * @example
     * var GeoError = geolocator.Error,
     * 	   error = GeoError.create();
     * console.log(error.code); // "UNKNOWN_ERROR"
     * error = GeoError.create(GeoError.Code.GEOLOCATION_NOT_SUPPORTED);
     * console.log(error.code); // "GEOLOCATION_NOT_SUPPORTED"
     */


    _createClass(GeoError, null, [{
        key: 'create',
        value: function create(err) {
            if (err instanceof GeoError) {
                return err;
            }

            var code = void 0,
                msg = void 0;

            if (_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isPositionError(err) && err.code) {
                switch (err.code) {
                    case 1:
                        code = GeoError.Code.PERMISSION_DENIED;
                        break;
                    case 2:
                        code = GeoError.Code.POSITION_UNAVAILABLE;
                        break;
                    case 3:
                        code = GeoError.Code.TIMEOUT;
                        break;
                    default:
                        code = GeoError.Code.UNKNOWN_ERROR;
                        break;
                }
                return new GeoError(code, err.message || '');
            }

            if (typeof err === 'string') {
                code = msg = err;
            } else if ((typeof err === 'undefined' ? 'undefined' : _typeof(err)) === 'object') {
                code = err.code || err.message;
                msg = err.message || err.code;
            }
            if (code && GeoError.isValidErrorCode(code)) {
                return new GeoError(code, msg);
            }

            return new GeoError(GeoError.Code.UNKNOWN_ERROR, msg);
        }

        /**
         * Creates a new instance of `GeoError` from the given response object.
         * Since Geolocator implements various Google APIs, we might receive
         * responses if different structures. For example, some APIs return a
         * response object with a `status:String` property (such as the TimeZone
         * API) and some return responses with an `error:Object` property. This
         * method will determine the correct reason or message and return a
         * consistent error object.
         *
         * @param {Object|String} response
         *        Response (Object) or status (String) to be transformed.
         * @param {String} [message=null]
         *        Error message.
         *
         * @returns {GeoError}
         *          `GeoError` instance if response contains an error. Otherwise,
         *          returns `null`.
         *
         * @example
         * var error = geolocator.Error.fromResponse(googleResponse);
         * console.log(error.code); // "GOOGLE_KEY_INVALID"
         */

    }, {
        key: 'fromResponse',
        value: function fromResponse(response) {
            var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            // example Google Geolocation API response:
            // https://developers.google.com/maps/documentation/geolocation/intro#errors
            // {
            //      "error": {
            //          "errors": [
            //              {
            //                  "domain": "global",
            //                  "reason": "parseError",
            //                  "message": "Parse Error",
            //              }
            //          ],
            //      "code": 400,
            //      "message": "Parse Error"
            //      }
            // }
            // example Google TimeZone API response:
            // {
            //     "status": "REQUEST_DENIED"
            // }

            if (!response) return new GeoError(GeoError.Code.INVALID_RESPONSE);

            var errCode = void 0;

            if (_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isString(response)) {
                errCode = errorCodeFromStatus(response);
                if (errCode) return new GeoError(errCode, message || response);
            }

            if (!_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(response)) return null;

            var errMsg = response.error_message || response.errorMessage || response.error && response.error.message || '' || '';

            if (response.status) {
                errCode = errorCodeFromStatus(response.status);
                if (errCode) return new GeoError(errCode, errMsg || message || response.status);
            }

            if (response.error) {
                var reason = response.reason || response.error.reason;
                if (!reason) {
                    var errors = response.error.errors;
                    if (_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(errors) && errors.length > 0) {
                        reason = errors[0].reason; // get the first reason only
                        errMsg = errMsg || errors[0].message; // update errMsg
                    }
                }
                errCode = errorCodeFromReason(reason) || GeoError.Code.UNKNOWN_ERROR;
                return new GeoError(errCode, errMsg || reason || message);
            }

            if (errMsg) {
                errCode = errorCodeFromStatus(errMsg) || GeoError.Code.UNKNOWN_ERROR;
                return new GeoError(errCode, errMsg || message);
            }

            return null;
        }

        /**
         *  Checks whether the given value is an instance of `GeoError`.
         *
         *  @param {*} err - Object to be checked.
         *
         *  @returns {Boolean}
         */

    }, {
        key: 'isGeoError',
        value: function isGeoError(err) {
            return err instanceof GeoError;
        }

        /**
         *  Checks whether the given value is a valid Geolocator Error code.
         *
         *  @param {String} errorCode - Error code to be checked.
         *
         *  @returns {Boolean}
         */

    }, {
        key: 'isValidErrorCode',
        value: function isValidErrorCode(errorCode) {
            var prop = void 0;
            for (prop in GeoError.Code) {
                if (GeoError.Code.hasOwnProperty(prop) && errorCode === GeoError.Code[prop]) {
                    return true;
                }
            }
            return false;
        }
    }]);

    return GeoError;
}();

/**
 *  Gets the string representation of the error instance.
 *
 *  @returns {String}
 */


GeoError.prototype.toString = function () {
    var msg = this.code !== this.message ? ' (' + this.message + ')' : '';
    return this.name + ': ' + this.code + msg;
};

// `class x extends Error` doesn't work when using an ES6 transpiler, such as
// Babel, since subclasses must extend a class. With Babel 6, we need
// transform-builtin-extend plugin for this to work. So we're extending from
// Error the old way. Now, `err instanceof Error` also returns `true`.
if (typeof Object.setPrototypeOf === 'function') {
    Object.setPrototypeOf(GeoError.prototype, Error.prototype);
} else {
    GeoError.prototype = Object.create(Error.prototype);
}

// ---------------------------
// ERROR CODES
// ---------------------------

/**
 *  Enumerates Geolocator error codes.
 *  This enumeration combines Google API status (error) codes, HTML5 Geolocation
 *  position error codes and other Geolocator-specific error codes.
 *  @enum {String}
 */
GeoError.Code = {
    /**
     *  Indicates that HTML5 Geolocation API is not supported by the browser.
     *  @type {String}
     */
    GEOLOCATION_NOT_SUPPORTED: 'GEOLOCATION_NOT_SUPPORTED',
    /**
     *  Indicates that Geolocation-IP source is not set or invalid.
     *  @type {String}
     */
    INVALID_GEO_IP_SOURCE: 'INVALID_GEO_IP_SOURCE',
    /**
     *  The acquisition of the geolocation information failed because the
     *  page didn't have the permission to do it.
     *  @type {String}
     */
    PERMISSION_DENIED: 'PERMISSION_DENIED',
    /**
     *  The acquisition of the geolocation failed because at least one
     *  internal source of position returned an internal error.
     *  @type {String}
     */
    POSITION_UNAVAILABLE: 'POSITION_UNAVAILABLE',
    /**
     *  The time allowed to acquire the geolocation, defined by
     *  PositionOptions.timeout information was reached before
     *  the information was obtained.
     *  @type {String}
     */
    TIMEOUT: 'TIMEOUT',
    /**
     * Indicates that the request had one or more invalid parameters.
     * @type {String}
     */
    INVALID_PARAMETERS: 'INVALID_PARAMETERS',
    /**
     * Indicates that the service returned invalid response.
     * @type {String}
     */
    INVALID_RESPONSE: 'INVALID_RESPONSE',
    /**
     * Generally indicates that the query (address, components or latlng)
     * is missing.
     * @type {String}
     */
    INVALID_REQUEST: 'INVALID_REQUEST',
    /**
     * Indicates that the request was denied by the service.
     * This will generally occur because of a missing API key or because the request
     * is sent over HTTP instead of HTTPS.
     * @type {String}
     */
    REQUEST_DENIED: 'REQUEST_DENIED',
    /**
     * Indicates that the request has failed.
     * This will generally occur because of an XHR error.
     * @type {String}
     */
    REQUEST_FAILED: 'REQUEST_FAILED',
    /**
     * Indicates that Google API could not be loaded.
     * @type {String}
     */
    GOOGLE_API_FAILED: 'GOOGLE_API_FAILED',
    /**
     * Indicates that you are over your Google API quota.
     * @type {String}
     */
    OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
    /**
     * Indicates that you've exceeded the requests per second per user limit that
     * you configured in the Google Developers Console. This limit should be
     * configured to prevent a single or small group of users from exhausting your
     * daily quota, while still allowing reasonable access to all users.
     * @type {String}
     */
    USER_RATE_LIMIT_EXCEEDED: 'USER_RATE_LIMIT_EXCEEDED',
    /**
     * Indicates that you've exceeded your daily limit for Google API(s).
     * @type {String}
     */
    DAILY_LIMIT_EXCEEDED: 'DAILY_LIMIT_EXCEEDED',
    /**
     * Indicates that your Google API key is not valid. Please ensure that you've
     * included the entire key, and that you've either purchased the API or have
     * enabled billing and activated the API to obtain the free quota.
     * @type {String}
     */
    GOOGLE_KEY_INVALID: 'GOOGLE_KEY_INVALID',
    /**
     * Indicates that maximum number of elements limit is exceeded. For
     * example, for the Distance Matrix API; occurs when the product of
     * origins and destinations exceeds the per-query limit.
     * @type {String}
     */
    MAX_ELEMENTS_EXCEEDED: 'MAX_ELEMENTS_EXCEEDED',
    /**
     * Indicates that the request contained more than 25 origins,
     * or more than 25 destinations.
     * @type {String}
     */
    MAX_DIMENSIONS_EXCEEDED: 'MAX_DIMENSIONS_EXCEEDED',
    /**
     * Indicates that the request contained more than allowed waypoints.
     * @type {String}
     */
    MAX_WAYPOINTS_EXCEEDED: 'MAX_WAYPOINTS_EXCEEDED',
    /**
     * Indicates that the request body is not valid JSON.
     * @type {String}
     */
    PARSE_ERROR: 'PARSE_ERROR',
    /**
     * Indicates that the requested resource could not be found.
     * Note that this also covers `ZERO_RESULTS`.
     * @type {String}
     */
    NOT_FOUND: 'NOT_FOUND',
    /**
     * Indicates that an internal error (such as XHR cross-domain, etc) has occured.
     * @type {String}
     */
    INTERNAL_ERROR: 'INTERNAL_ERROR',
    /**
     * Indicates that an unknown error has occured.
     * @type {String}
     */
    UNKNOWN_ERROR: 'UNKNOWN_ERROR'
};

// ---------------------------
// HELPER METHODS
// ---------------------------

/**
 *  @private
 */
function errorCodeFromStatus(status) {
    if (!status) return GeoError.Code.INVALID_RESPONSE;
    if (status === 'OK') return null;
    if (status === 'ZERO_RESULTS') return GeoError.Code.NOT_FOUND;
    if (GeoError.Code.hasOwnProperty(status)) return status;
    return null;
}

/**
 *  Gets `GeoError.Code` from the given response error reason.
 *  @private
 *
 *  @param {String} reason
 *         Google response error reason.
 *
 *  @returns {String}
 */
function errorCodeFromReason(reason) {
    switch (reason) {
        case 'invalid':
            return GeoError.Code.INVALID_REQUEST;
        case 'dailyLimitExceeded':
            return GeoError.Code.DAILY_LIMIT_EXCEEDED;
        case 'keyInvalid':
            return GeoError.Code.GOOGLE_KEY_INVALID;
        case 'userRateLimitExceeded':
            return GeoError.Code.USER_RATE_LIMIT_EXCEEDED;
        case 'notFound':
            return GeoError.Code.NOT_FOUND;
        case 'parseError':
            return GeoError.Code.PARSE_ERROR;
        default:
            return null;
    }
}

// ---------------------------
// EXPORT
// ---------------------------

/* harmony default export */ __webpack_exports__["default"] = (GeoError);

/***/ }),

/***/ "./src/core/geo.helper.js":
/*!********************************!*\
  !*** ./src/core/geo.helper.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/utils */ "./src/lib/utils.js");
/* harmony import */ var _lib_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/fetch */ "./src/lib/fetch.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums */ "./src/core/enums.js");
/* harmony import */ var _geo_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geo.error */ "./src/core/geo.error.js");





/**
 *  Helper methods.
 *  @type {Object}
 *  @private
 */
var geoHelper = {
    toGoogleCoords: function toGoogleCoords(coords) {
        return {
            lat: coords.lat || coords.latitude,
            lng: coords.lng || coords.longitude
        };
    },
    fromGoogleCoords: function fromGoogleCoords(coords) {
        return {
            latitude: coords.latitude || coords.lat,
            longitude: coords.longitude || coords.lng
        };
    },


    // used for distance matrix origins and destinations
    toPointList: function toPointList(arr) {
        arr = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(arr) ? arr : [arr];
        return arr.map(function (o) {
            return _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isString(o) ? o : geoHelper.toGoogleCoords(o);
        });
    },
    getGeocodeComps: function getGeocodeComps(comp) {
        return {
            route: comp.route,
            locality: comp.locality,
            administrative_area: comp.administrativeArea, // eslint-disable-line camelcase
            postal_code: comp.postalCode, // eslint-disable-line camelcase
            country: comp.country,
            region: comp.region
        };
    },


    // Geocode examples:
    // address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=API_KEY
    // address=Winnetka&bounds=34.172684,-118.604794|34.236144,-118.500938&key=API_KEY
    // address=santa+cruz&components=country:ES&key=API_KEY
    // components=administrative_area:TX|country:US&key=API_KEY
    // Reverse Geocode examples:
    // latlng=40.714224,-73.961452&key=API_KEY
    // place_id=ChIJd8BlQ2BZwokRAFUEcm_qrcA&key=API_KEY
    buildGeocodeParams: function buildGeocodeParams(options, reverse) {
        var params = [],
            e = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].encodeURI;

        if (reverse) {
            if (options.placeId) {
                params.push('place_id=' + options.placeId);
            } else if (options.latitude && options.longitude) {
                params.push('latlng=' + options.latitude + ',' + options.longitude);
            }
        } else {
            if (options.address) {
                params.push('address=' + e(options.address));
            }

            var geoComps = geoHelper.getGeocodeComps(options);
            geoComps = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].params(geoComps, { operator: ':', separator: '|' });
            params.push('components=' + geoComps);

            var b = options.bounds;
            if (_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(b) && b.length === 4) {
                params.push('bounds=' + b[0] + ',' + b[1] + '|' + b[2] + ',' + b[3]);
            } else if (_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(b) && Object.keys(b).length === 4) {
                params.push('bounds=' + b.southwestLat + ',' + b.southwestLng + '|' + b.northeastLat + ',' + b.northeastLng);
            }
        }

        params.push('language=' + options.language);
        params.push('key=' + options.key);
        return params.join('&');
    },


    // See https://developers.google.com/maps/documentation/geocoding/intro
    formatGeocodeResults: function formatGeocodeResults(results) {
        if (!_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(results) || results.length <= 0) {
            return {
                location: null,
                address: null,
                formattedAddress: '',
                type: null, // locationType
                placeId: ''
            };
        }

        var i = void 0,
            c = void 0,
            o = {},
            data = results[0],
            comps = data.address_components;

        for (i = 0; i < comps.length; i += 1) {
            c = comps[i];
            if (c.types && c.types.length > 0) {
                o[c.types[0]] = c.long_name;
                o[c.types[0] + '_s'] = c.short_name;
            }
        }

        var geometry = data.geometry;
        return {
            coords: geometry && geometry.location ? {
                latitude: geometry.location.lat,
                longitude: geometry.location.lng
            } : null,
            address: {
                commonName: o.point_of_interest || o.premise || o.subpremise || o.colloquial_area || '',
                streetNumber: o.street_number || '',
                street: o.administrative_area_level_4 || o.administrative_area_level_3 || o.route || '',
                route: o.route || '',
                neighborhood: o.neighborhood || o.administrative_area_level_5 || o.administrative_area_level_4 || '',
                town: o.sublocality || o.administrative_area_level_2 || '',
                city: o.locality || o.administrative_area_level_1 || '',
                region: o.administrative_area_level_2 || o.administrative_area_level_1 || '',
                postalCode: o.postal_code || '',
                state: o.administrative_area_level_1 || '',
                stateCode: o.administrative_area_level_1_s || '',
                country: o.country || '',
                countryCode: o.country_s || ''
            },
            formattedAddress: data.formatted_address,
            type: geometry.location_type || '',
            placeId: data.place_id,
            timestamp: _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].time()
        };
    },
    geocode: function geocode(reverse, conf, options, callback) {
        var opts = {};
        if (_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isString(options)) {
            opts = {};
            var prop = reverse ? 'placeId' : 'address';
            opts[prop] = options;
        } else if (_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(options)) {
            opts = options;
        } else {
            throw new _geo_error__WEBPACK_IMPORTED_MODULE_3__["default"](_geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].Code.INVALID_PARAMETERS);
        }

        if (reverse) {
            var coordsSet = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isNumber(options.latitude) && _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isNumber(options.longitude);
            if (!_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isString(options.placeId) && !coordsSet) {
                throw new _geo_error__WEBPACK_IMPORTED_MODULE_3__["default"](_geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].Code.INVALID_PARAMETERS);
            }
        }

        opts = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
            key: conf.google.key || '',
            language: conf.language || 'en',
            raw: false
        }, opts);

        var query = geoHelper.buildGeocodeParams(opts, reverse),
            url = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].setProtocol(_enums__WEBPACK_IMPORTED_MODULE_2__["default"].URL.GOOGLE_GEOCODE, conf.https),
            xhrOpts = {
            url: url + '?' + query
        };

        _lib_fetch__WEBPACK_IMPORTED_MODULE_1__["default"].xhr(xhrOpts, function (err, xhr) {
            if (err) return callback(_geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].create(err), null);

            var response = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].safeJsonParse(xhr.responseText),
                gErr = _geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].fromResponse(response);

            if (gErr) return callback(gErr, null);

            response = options.raw ? response : geoHelper.formatGeocodeResults(response.results);
            callback(null, response);
        });
    },


    // See https://developers.google.com/maps/documentation/distance-matrix/intro
    // Raw Result Example:
    // {
    //    "destination_addresses" : [ "San Francisco, CA, USA", "Victoria, BC, Canada" ],
    //    "origin_addresses" : [ "Vancouver, BC, Canada", "Seattle, WA, USA" ],
    //    "rows" : [
    //       {
    //          "elements" : [
    //             {
    //                "distance" : { "text" : "1,704 km", "value" : 1704324 },
    //                "duration" : { "text" : "3 days 19 hours", "value" : 327061
    //                },
    //                "status" : "OK"
    //             },
    //             {
    //                "distance" : { "text" : "138 km", "value" : 138295 },
    //                "duration" : { "text" : "6 hours 44 mins", "value" : 24236 },
    //                "status" : "OK"
    //             }
    //          ]
    //       },
    //       {
    //          "elements" : [
    //             {
    //                "distance" : { "text" : "1,452 km", "value" : 1451623 },
    //                "duration" : { "text" : "3 days 4 hours", "value" : 275062 },
    //                "status" : "OK"
    //             },
    //             {
    //                "distance" : { "text" : "146 km", "value" : 146496 },
    //                "duration" : { "text" : "2 hours 52 mins", "value" : 10324 },
    //                "status" : "OK"
    //             }
    //          ]
    //       }
    //    ],
    //    "status" : "OK"
    // }
    // Formatted to:

    formatDistanceResults: function formatDistanceResults(results) {
        if (!_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(results)) {
            return null;
        }

        var arr = [],
            origins = results.originAddresses,
            dests = results.destinationAddresses,
            rows = results.rows;

        // [
        //     {
        //          from: 'Vancouver, BC, Canada',
        //          to: 'San Francisco, CA, USA',
        //          distance: { value: 1704107, text: "1,704 km" },
        //          duration: { value: 327025, text: "3 days 19 hours" },
        //          fare: { currency: "USD", value: 6, text: "$6.00" }
        //     },
        //     ...
        // ]

        var e = void 0;
        origins.forEach(function (origin, oIndex) {
            dests.forEach(function (dest, dIndex) {
                e = rows[oIndex].elements[dIndex];
                arr.push({
                    from: origin,
                    to: dest,
                    distance: e.distance,
                    duration: e.duration,
                    fare: e.fare,
                    timestamp: _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].time()
                });
            });
        });

        return arr;
    },


    // Converts a map-styles object in to static map styles (formatted query-string params).
    // See https://developers.google.com/maps/documentation/static-maps/styling
    mapStylesToParams: function mapStylesToParams(styles) {
        if (!styles) return '';
        if (!_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(styles)) styles = [styles];
        var result = [];
        styles.forEach(function (v, i, a) {
            var style = '';
            if (v.stylers) {
                // only if there is a styler object
                if (v.stylers.length > 0) {
                    // Needs to have a style rule to be valid.
                    style += (v.hasOwnProperty('featureType') ? 'feature:' + v.featureType : 'feature:all') + '|';
                    style += (v.hasOwnProperty('elementType') ? 'element:' + v.elementType : 'element:all') + '|';
                    v.stylers.forEach(function (val, i, a) {
                        var propName = Object.keys(val)[0],
                            propVal = val[propName].toString().replace('#', '0x');
                        style += propName + ':' + propVal + '|';
                    });
                }
            }
            result.push('style=' + encodeURIComponent(style));
        });
        return result.join('&');
    }
};

/* harmony default export */ __webpack_exports__["default"] = (geoHelper);

/***/ }),

/***/ "./src/core/geo.watcher.js":
/*!*********************************!*\
  !*** ./src/core/geo.watcher.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/utils */ "./src/lib/utils.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var GeoWatcher = function () {
    function GeoWatcher(onChange, onError) {
        var _this = this;

        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        _classCallCheck(this, GeoWatcher);

        this.isCleared = false;
        this.cycle = 0;
        this._timer = null;
        this.id = navigator.geolocation.watchPosition(function (pos) {
            _this.cycle++;
            if (_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(onChange)) onChange(pos);
        }, function (err) {
            _this.cycle++;
            if (_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(onError)) onError(err);
            if (options.clearOnError) {
                _this.clear();
            }
        }, options);
    }

    _createClass(GeoWatcher, [{
        key: '_clear',
        value: function _clear() {
            navigator.geolocation.clearWatch(this.id);
            this.isCleared = true;
            this._timer = null;
        }
    }, {
        key: 'clear',
        value: function clear(delay, callback) {
            var _this2 = this;

            var d = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isNumber(delay) ? delay : 0,
                cb = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(callback) ? callback : _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(delay) ? delay : null;
            // clear any previous timeout
            if (this._timer) {
                clearTimeout(this._timer);
                this._timer = null;
            }
            // check if watcher is not cleared
            if (!this.isCleared) {
                if (d === 0) {
                    this._clear();
                    if (cb) cb();
                    return;
                }
                this._timer = setTimeout(function () {
                    _this2._clear();
                    if (cb) cb();
                }, d);
            }
        }
    }]);

    return GeoWatcher;
}();

// ---------------------------
// EXPORT
// ---------------------------

/* harmony default export */ __webpack_exports__["default"] = (GeoWatcher);

/***/ }),

/***/ "./src/core/geolocator.js":
/*!********************************!*\
  !*** ./src/core/geolocator.js ***!
  \********************************/
/*! exports provided: geolocator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geolocator", function() { return geolocator; });
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/utils */ "./src/lib/utils.js");
/* harmony import */ var _lib_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/fetch */ "./src/lib/fetch.js");
/* harmony import */ var _geo_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geo.helper */ "./src/core/geo.helper.js");
/* harmony import */ var _geo_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geo.error */ "./src/core/geo.error.js");
/* harmony import */ var _geo_watcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./geo.watcher */ "./src/core/geo.watcher.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enums */ "./src/core/enums.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }








/**
 *  Radius of earth in kilometers.
 *  @private
 *  @type {Number}
 */
var EARTH_RADIUS_KM = 6371;

/**
 *  Radius of earth in miles.
 *  @private
 *  @type {Number}
 */
var EARTH_RADIUS_MI = 3959;

/**
 *  Storage for Geolocator default configuration.
 *
 *  @readonly
 *  @private
 */
var defaultConfig = {
    language: 'en',
    https: true,
    google: {
        version: '3', // latest 3.x
        key: '',
        styles: null
    }
};

/**
 *  Geolocator library that provides methods for getting geo-location information,
 *  geocoding, address look-ups, distance & durations, timezone information and more...
 *  This library makes use of HTML5 position feautures, implements Google APIs
 *  and other services.
 *
 *  <b>Important Notes:</b>
 *
 *  Although some calls might work without a key, it is generally required by
 *  most {@link https://developers.google.com/maps/faq#using-google-maps-apis|Goolge APIs}
 *  (such as Time Zone API). To get a free (or premium) key,
 *  {@link https://developers.google.com/maps/documentation/javascript/|click here}.
 *  After getting a key, you can enable multiple APIs for it. Make sure you
 *  {@link https://console.developers.google.com|enable}
 *  all the APIs supported by Geolocator.
 *
 *  Note that browser API keys cannot have referer restrictions when used
 *  with some Google APIs.
 *
 *  Make sure your doctype is HTML5 and you're calling Geolocation APIs from an
 *  HTTPS page. Geolocation API is removed from unsecured origins in Chrome 50.
 *  Other browsers are expected to follow.
 *
 *  @license MIT
 *  @copyright 2019, Onur Yıldırım <onur@cutepilot.com>
 */

var geolocator = function () {
    function geolocator() {
        _classCallCheck(this, geolocator);
    }

    _createClass(geolocator, null, [{
        key: 'config',


        // ---------------------------
        // STATIC METHODS
        // ---------------------------

        /**
         *  Sets or gets the geolocator configuration object.
         *  Make sure you configure Geolocator before calling other methods that
         *  require a Google API key.
         *
         *  @param {Object} [options]
         *         Configuration object. If omitted, this method returns the current
         *         configuration.
         *      @param {String} [options.language="en"]
         *             Language to be used for API requests that supports language
         *             configurations. This is generally used for Google APIs.
         *             See {@link https://developers.google.com/maps/faq#languagesupport|supported languages}.
         *      @param {Boolean} [options.https=true]
         *             As Google recommends; using HTTPS encryption makes your site
         *             more secure, and more resistant to snooping or tampering.
         *             If set to `true`, the API calls are made over HTTPS, at all
         *             times. Setting to `false` will switch to HTTP (even if the
         *             page is on HTTPS). And if set to `null`, current protocol will
         *             be used. Note that some APIs might not work with HTTP such as
         *             Google Maps TimeZone API.
         *      @param {Object} [options.google]
         *             Google specific options.
         *          @param {String} [options.google.version="3"]
         *                 Google Maps API version to be used (with
         *                 `geolocator.createMap()`) method. The default version
         *                 value is tested and works with Geolocator. You can set a
         *                 greater value or the latest version number and it should
         *                 work; but it's not guaranteed. Find out the
         *                 {@link https://developers.google.com/maps/documentation/javascript/versions|latest version here}.
         *          @param {String} [options.google.key=""]
         *                 API key to be used with Google API calls. Although some
         *                 calls might work without a key, it is generally required
         *                 by most Goolge APIs. To get a free (or premium) key,
         *                 {@link https://developers.google.com/maps/documentation/javascript/|click here}.
         *          @param {Array} [options.google.styles]
         *                 An array of objects to customize the presentation of the
         *                 Google base maps, changing the visual display of such
         *                 elements as roads, parks, and built-up areas.
         *                 See {@link https://developers.google.com/maps/documentation/javascript/styling|Styling Maps}.
         *
         *  @returns {Object} - Returns the current or updated configuration object.
         *
         *  @example
         *  geolocator.config({
         *      language: "en",
         *      google: {
         *          version: "3",
         *          key: "YOUR-GOOGLE-API-KEY"
         *      }
         *  });
         */
        value: function config(options) {
            if (options) {
                geolocator._.config = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].extend(defaultConfig, options);
            }
            return geolocator._.config;
        }

        /**
         *  Gets a static map image URL which can be embeded via an `<img />` tag
         *  on the page.
         *
         *  Note that, if `options.center` is set to an address (instead of
         *  coordinates) and `options.marker` is also set; we will need to geocode
         *  that address to get center coordinates for the marker.
         *  In this case, you must use the `callback` parameter to get the async
         *  result. Otherwise, this method will directly return a `String`.
         *
         *  Make sure you have enabled Static Maps API (and Geocoding API if
         *  `marker` is enabled) in your Google Developers console.
         *
         *  For interactive map, see {@link #geolocator.createMap|`geolocator.createMap()` method}.
         *
         *  @see {@link https://developers.google.com/maps/documentation/static-maps/intro|Static Maps}
         *  @see {@link https://developers.google.com/maps/documentation/static-maps/usage-limits|Usage Limits}
         *
         *  @param {Object} options
         *         Static map options.
         *         @param {String|Object} options.center
         *                Defines the center of the map and the location.
         *                Either an address `String` or an coordinates `Object` with
         *                `latitude:Number` and `longitude:Number` properties.
         *         @param {String} [options.mapTypeId="roadmap"]
         *                Type of the map to be created.
         *                See {@link #geolocator.MapTypeId|`geolocator.MapTypeId` enumeration}
         *                for possible values.
         *         @param {String|Object} [options.size="600x300"]
         *                Defines the size (in pixels) of the returned image.
         *                Either a string in `widthxheight` format or an Object
         *                with `width:Number` and `height:Number` properties.
         *         @param {Number} [options.scale=1]
         *                Affects the number of pixels that are returned. scale=2
         *                returns twice as many pixels as scale=1 while retaining
         *                the same coverage area and level of detail (i.e. the
         *                contents of the map don't change). Accepted values are 1,
         *                2 and 4 (4 is only available to Google Maps APIs Premium
         *                Plan customers.)
         *         @param {Number} [options.zoom=9]
         *                Zoom level to be set for the map.
         *         @param {String} [options.format=png]
         *                Defines the format of the resulting image.
         *                See {@link #geolocator.ImageFormat|`geolocator.ImageFormat` enumeration}
         *                for possible values.
         *         @param {Boolean|String} [options.marker=true]
         *                Specifies whether to add a marker to the center of the map.
         *                You can define the color of the marker by passing a color
         *                `String` instead of a `Boolean`. Color can be a predefined
         *                color from the set `red` (default), `black`, `brown`,
         *                `green`, `purple`, `yellow`, `blue`, `gray`, `orange` and
         *                `white`; or a HEX 24-bit color (e.g. `"0xFF0000"`).
         *                Note that marker will not be visible if `center` is set to
         *                a `String` address and you don't use the callback.
         *         @param {String} [options.region]
         *                Defines the appropriate borders to display, based on
         *                geo-political sensitivities. Accepts a region code
         *                specified as a two-character ccTLD (top-level domain)
         *                value. e.g. `"us"`.
         *         @param {Array} [options.styles]
         *                An array of objects to customize the presentation of the
         *                Google base maps, changing the visual display of such
         *                elements as roads, parks, and built-up areas.
         *                This will default to the global styles set via
         *                {@link #geolocator.config|`geolocator.config()` method}, if any.
         *                See {@link https://developers.google.com/maps/documentation/javascript/styling|Styling Maps}.
         *
         *  @param {Function} [callback]
         *         Callback function to be executed when the static map URL is built.
         *         This takes 2 arguments: `function (err, url) { ... }`.
         *         If omitted, this method will directly return the static map
         *         image URL; but (if enabled) the marker will not be visible if
         *         `options.center` is set to an address `String` instead of a
         *         coordinates `Object`.
         *
         *  @returns {String|void}
         *           If a callback is passed, this will return `void`.
         *           Otherwise, a `String` that represents the URL of the static map.
         *
         *  @example
         *  // Async example (with address and marker)
         *  var options = {
         *      center: "Los Angles, CA, US",
         *      mapTypeId: geolocator.MapTypeId.ROADMAP,
         *      size: "600x300",
         *      scale: 1,
         *      zoom: 5,
         *      marker: "0xFFCC00",
         *      format: geolocator.ImageFormat.PNG
         *  };
         *  geolocator.getStaticMap(options, function (err, url) {
         *      if (!err) {
         *          document.getElementById('my-img').src = url;
         *      }
         *  });
         *
         *  @example
         *  // Sync example (with coordinates)
         *  var options = {
         *      center: {
         *          longitude: 34.0522342,
         *          latitude: -118.2436849
         *      },
         *      mapTypeId: geolocator.MapTypeId.ROADMAP,
         *      size: "600x300",
         *      scale: 1,
         *      zoom: 5,
         *      marker: "0xFFCC00",
         *      format: geolocator.ImageFormat.PNG
         *  };
         *  document.getElementById('my-img').src = geolocator.getStaticMap(options);
         */

    }, {
        key: 'getStaticMap',
        value: function getStaticMap(options, callback) {
            if (!_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(options) || !options.center) {
                throw new _geo_error__WEBPACK_IMPORTED_MODULE_3__["default"](_geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].Code.INVALID_PARAMETERS, 'A center address or coordinates are required.');
            }

            if (_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isString(options.center)) {
                return geolocator.geocode(options.center, function (err, location) {
                    if (err) callback(err);
                    options.center = location.coords;
                    callback(null, geolocator.getStaticMap(options));
                });
            }

            var conf = geolocator._.config;
            var opts = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
                mapTypeId: _enums__WEBPACK_IMPORTED_MODULE_5__["default"].MapTypeId.ROADMAP,
                size: {
                    width: 600,
                    height: 300
                },
                scale: 1, // 1 | 2 | (4 for business customers of google maps)
                zoom: 9,
                marker: 'red',
                format: _enums__WEBPACK_IMPORTED_MODULE_5__["default"].ImageFormat.PNG,
                language: conf.language || 'en',
                region: null
            }, options);

            var center = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(opts.center) ? opts.center.latitude + ',' + opts.center.longitude : String(opts.center);

            var size = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(opts.size) ? opts.size.width + 'x' + opts.size.height : String(opts.size);

            var url = _enums__WEBPACK_IMPORTED_MODULE_5__["default"].URL.GOOGLE_SATATIC_MAP // not using utils.setProtocol() here
            + ('?center=' + center + '&maptype=' + opts.mapTypeId) + ('&size=' + size + '&scale=' + opts.scale + '&zoom=' + opts.zoom) + ('&format=' + opts.format + '&language=' + opts.language);

            if (opts.marker) {
                var color = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isString(opts.marker) ? opts.marker : 'red';
                url += '&markers=' + encodeURIComponent('color:' + color + '|' + center);
            }
            if (opts.region) url += '&region=' + opts.region;
            if (conf.google.key) url += '&key=' + conf.google.key;

            var styles = getStyles(opts);
            if (styles) url += '&' + _geo_helper__WEBPACK_IMPORTED_MODULE_2__["default"].mapStylesToParams(styles);

            if (_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(callback)) return callback(null, url);
            return url;
        }

        /**
         *  Creates an interactive Google Map within the given element.
         *  Make sure you have enabled Google Static Maps API in your Google Developers console.
         *  For static map, see {@link #geolocator.getStaticMap|`geolocator.getStaticMap()` method}.
         *  @see {@link https://developers.google.com/maps/documentation/javascript/reference|Google Maps JavaScript API}
         *  @see {@link https://developers.google.com/maps/documentation/javascript/usage|Usage Limits}
         *
         *  @param {Object|String|HTMLElement|Map} options
         *         Either map options object with the following properties or; the ID
         *         of a DOM element, or element itself which the map will be
         *         created within; or a previously created `google.maps.Map` instance.
         *         If a map instance is set, this only will apply the options without
         *         re-creating it.
         *      @param {String|HTMLElement|Map} options.element
         *             Either the ID of a DOM element or the element itself;
         *             which the map will be created within; or a previously created
         *             `google.maps.Map` instance. If a map instance is set, this
         *             only will apply the options without re-creating it.
         *      @param {Object} options.center
         *             Center coordinates for the map to be created.
         *          @param {Number} options.center.latitude
         *                 Latitude of the center point coordinates.
         *          @param {Number} options.center.longitude
         *                 Longitude of the center point coordinates.
         *      @param {String} [options.mapTypeId="roadmap"]
         *             Type of the map to be created.
         *             See {@link #geolocator.MapTypeId|`geolocator.MapTypeId` enumeration}
         *             for possible values.
         *      @param {String} [options.title]
         *             Title text to be displayed within an `InfoWindow`, when the
         *             marker is clicked. This only take effect if `marker` is
         *             enabled.
         *      @param {Boolean} [options.marker=true]
         *             Whether to place a marker at the given coordinates.
         *             If `title` is set, an `InfoWindow` will be opened when the
         *             marker is clicked.
         *      @param {Number} [options.zoom=9]
         *             Zoom level to be set for the map.
         *      @param {Array} [options.styles]
         *             An array of objects to customize the presentation of the
         *             Google base maps, changing the visual display of such
         *             elements as roads, parks, and built-up areas.
         *             This will default to the global styles set via
         *             {@link #geolocator.config|`geolocator.config` method}`, if any.
         *             See {@link https://developers.google.com/maps/documentation/javascript/styling|Styling Maps}.
         *
         *  @param {Function} callback
         *         Callback function to be executed when the map is created.
         *         This takes 2 arguments: `function (err, map) { ... }`.
         *         See {@link #geolocator~MapData|`geolocator~MapData` type} for details.
         *
         *  @returns {void}
         *
         *  @example
         *  var options = {
         *      element: "my-map",
         *      center: {
         *          latitude: 48.8534100,
         *          longitude: 2.3488000
         *  	},
         *  	marker: true,
         *  	title: "Paris, France",
         *  	zoom: 12
         *  };
         *  geolocator.createMap(options, function (err, map) {
         *      if (map && map.infoWindow) {
         *          map.infoWindow.open(map.instance, map.marker);
         *      }
         *  });
         */

    }, {
        key: 'createMap',
        value: function createMap(options, callback) {
            // if options is not a plain object, consider element ID, `HTMLElement`,
            // `jQuery` instance or `google.maps.Map` instance.
            if (!_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(options)) {
                options = { element: options };
            }

            options = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
                element: null,
                mapTypeId: _enums__WEBPACK_IMPORTED_MODULE_5__["default"].MapTypeId.ROADMAP,
                title: undefined,
                marker: true,
                zoom: 9
            }, options);

            var e = options.element,
                elem = void 0;
            if (_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isString(e)) {
                elem = document.getElementById(e);
            } else if (_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isJQueryObject(e)) {
                elem = e[0];
            } else if (geolocator.isGoogleLoaded() && e instanceof google.maps.Map) {
                elem = e.getDiv();
            }

            if (!_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isElement(elem) && !_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isNode(elem)) {
                throw new _geo_error__WEBPACK_IMPORTED_MODULE_3__["default"](_geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].Code.INVALID_PARAMETERS, 'A valid DOM element or element ID is required to create a map.');
            }

            if (!_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(options.center) || !_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isNumber(options.center.latitude) || !_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isNumber(options.center.longitude)) {
                throw new _geo_error__WEBPACK_IMPORTED_MODULE_3__["default"](_geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].Code.INVALID_PARAMETERS, 'Center coordinates are required to create a map.');
            }

            options.element = elem;

            var conf = geolocator._.config,
                key = conf.google.key;
            options.styles = getStyles(options);

            geolocator.ensureGoogleLoaded(key, function (err) {
                if (err) {
                    throw new _geo_error__WEBPACK_IMPORTED_MODULE_3__["default"](_geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].Code.GOOGLE_API_FAILED, String(err.message || err));
                }

                var mapData = configCreateMap(options);
                callback(null, mapData);
            });
        }

        /**
         *  Locates the user's location via HTML5 geolocation. This may
         *  require/prompt for user's permission. If the permission is granted we'll
         *  get the most accurate location information. Otherwise, we'll fallback to
         *  locating via user's IP (if enabled).
         *
         *  For better accuracy, Geolocator implements a different approach than the
         *  `getCurrentPosition` API; which generally triggers before the device's
         *  GPS hardware can provide anything accurate. Thanks to
         *  {@link https://github.com/gwilson/getAccurateCurrentPosition#background|Greg Wilson}
         *  for the idea.
         *
         *  Also note that HTML5 Geolocation feature no more allows insecure origins.
         *  See {@link https://goo.gl/rStTGz|this} for more details.
         *  This means if you don't call this method from an HTTPS page, it will
         *  fail. And if `options.fallbackToIP` is enabled, this will locate by IP.
         *
         *  @param {Object} [options]
         *         HTML5 geo-location settings with some additional options.
         *      @param {Boolean} [options.enableHighAccuracy=true]
         *             Specifies whether the device should provide the most accurate
         *             position it can. Note that setting this to `true` might
         *             consume more CPU and/or battery power; and result in slower
         *             response times.
         *      @param {Number} [options.desiredAccuracy=30]
         *             Minimum accuracy desired, in meters. Position will not be
         *             returned until this is met, before the timeout. This only
         *             takes effect if `enableHighAccuracy` is set to `true`.
         *      @param {Number} [options.timeout=5000]
         *             HTML5 position timeout setting in milliseconds. Setting this
         *             to `Infinity` means that Geolocator won't return until the
         *             position is available.
         *      @param {Number} [options.maximumWait=10000]
         *             Maximum time to wait (in milliseconds) for the desired
         *             accuracy (which should be greater than `timeout`).
         *             This only takes effect if `enableHighAccuracy` is set to
         *             `true`.
         *      @param {Number} [options.maximumAge=0]
         *             HTML5 position maximum age. Indicates the maximum age in
         *             milliseconds of a possible cached position that is acceptable
         *             to return. `0` means, the device cannot use a cached position
         *             and must attempt to retrieve the real current position. If set
         *             to `Infinity` the device must return a cached position
         *             regardless of its age. Note that if `enableHighAccuracy` is
         *             set to `true`, `maximumAge` will be forced to `0`.
         *      @param {Function} [options.onProgress]
         *             If `enableHighAccuracy` is set to `true`, you can use this
         *             callback to check the progress of the location accuracy;
         *             while waiting for the final, best accurate location.
         *      @param {Boolean} [options.fallbackToIP=false]
         *             Specifies whether to fallback to IP geolocation if the HTML5
         *             geolocation fails (e.g. user rejection).
         *      @param {Boolean} [options.addressLookup=false]
         *             Specifies whether to run a reverse-geocode operation for the
         *             fetched coordinates to retrieve detailed address information.
         *             Note that this means an additional request which requires a
         *             Google API key to be set in the Geolocator configuration.
         *             See {@link #geolocator.config|`geolocator.config()`}.
         *      @param {Boolean} [options.timezone=false]
         *             Specifies whether to also fetch the time zone information for
         *             the receieved coordinates. Note that this means an additional
         *             request which requires a Google API key to be set in the
         *             Geolocator configuration.
         *             See {@link #geolocator.config|`geolocator.config()`}.
         *      @param {String|MapOptions} [options.map]
         *             In order to create an interactive map from the fetched
         *             location coordinates; either set this to a
         *             {@link #geolocator~MapOptions|`MapOptions` object}
         *             or; the ID of a DOM element or DOM element itself which the
         *             map will be created within.
         *      @param {Boolean|Object} [options.staticMap=false]
         *             Set to `true` to get a static Google Map image URL (with
         *             default options); or pass a static map options object.
         *
         *  @param {Function} callback
         *         Callback function to be executed when the request completes.
         *         This takes 2 arguments: `function (err, location) { ... }`.
         *         See {@link #geolocator~Location|`geolocator~Location` type} for details.
         *
         *  @returns {void}
         *
         *  @example
         *  var options = {
         *      enableHighAccuracy: true,
         *      desiredAccuracy: 30,
         *      timeout: 5000,
         *      maximumWait: 10000,
         *      maximumAge: 0,
         *      fallbackToIP: true,
         *      addressLookup: true,
         *      timezone: true,
         *      map: "my-map",
         *      staticMap: true
         *  };
         *  geolocator.locate(options, function (err, location) {
         *      console.log(err || location);
         *  });
         *
         * @example
         *  // location result:
         *  {
         *      coords: {
         *          latitude: 37.4224764,
         *          longitude: -122.0842499,
         *          accuracy: 30,
         *          altitude: null,
         *          altitudeAccuracy: null,
         *          heading: null,
         *          speed: null
         *      },
         *      address: {
         *          commonName: "",
         *          street: "Amphitheatre Pkwy",
         *          route: "Amphitheatre Pkwy",
         *          streetNumber: "1600",
         *          neighborhood: "",
         *          town: "",
         *          city: "Mountain View",
         *          region: "Santa Clara County",
         *          state: "California",
         *          stateCode: "CA",
         *          postalCode: "94043",
         *          country: "United States",
         *          countryCode: "US"
         *      },
         *      formattedAddress: "1600 Amphitheatre Parkway, Mountain View, CA 94043, USA",
         *      type: "ROOFTOP",
         *      placeId: "ChIJ2eUgeAK6j4ARbn5u_wAGqWA",
         *      timezone: {
         *          id: "America/Los_Angeles",
         *          name: "Pacific Standard Time",
         *          abbr: "PST",
         *          dstOffset: 0,
         *          rawOffset: -28800
         *      },
         *      flag: "//cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.3.1/flags/4x3/us.svg",
         *      map: {
         *          element: HTMLElement,
         *          instance: Object, // google.maps.Map
         *          marker: Object, // google.maps.Marker
         *          infoWindow: Object, // google.maps.InfoWindow
         *          options: Object // map options
         *      },
         *      staticMap: "//maps.googleapis.com/maps/api/staticmap?center=37.4224764,-122.0842499&maptype=roadmap&size=600x300&scale=1&zoom=9&format=png&language=en&markers=color%3Ared%7C37.4224764%2C2-122.0842499&key=YOUR-GOOGLE-API-KEY",
         *      timestamp: 1456795956380
         *  }
         */

    }, {
        key: 'locate',
        value: function locate(options, callback) {
            options = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
                enableHighAccuracy: true,
                timeout: 6000,
                maximumWait: 10000,
                maximumAge: 0,
                desiredAccuracy: 30,
                onProgress: _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].noop,
                fallbackToIP: false,
                addressLookup: false,
                timezone: false,
                map: undefined,
                staticMap: false
            }, options);

            // force disable cache if high-accuracy is enabled
            if (options.enableHighAccuracy) options.maximumAge = 0;
            // set a min value for timeout
            if (options.timeout < 1000) options.timeout = 1000;
            // max wait should not be less than timeout
            if (options.maximumWait < options.timeout) options.maximumWait = options.timeout;

            // check options and Google key
            checkGoogleKey(options);

            var cb = callbackMap(options, callback);

            function fallbackToIP(error) {
                if (options.fallbackToIP) {
                    return geolocator.locateByIP(options, function (err, location) {
                        if (err) return cb(err, null);
                        return cb(null, location);
                    });
                }
                cb(error, null);
            }
            function onPositionReceived(location) {
                fetchAddressAndTimezone(location, options, cb);
            }
            function onPositionError(err) {
                err = _geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].create(err);
                fallbackToIP(err);
            }

            if (geolocator.isGeolocationSupported()) {
                if (options.enableHighAccuracy) {
                    locateAccurate(options, onPositionReceived, onPositionError);
                } else {
                    navigator.geolocation.getCurrentPosition(onPositionReceived, onPositionError, options);
                }
            } else {
                var err = new _geo_error__WEBPACK_IMPORTED_MODULE_3__["default"](_geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].Code.GEOLOCATION_NOT_SUPPORTED);
                fallbackToIP(err);
            }
        }

        /**
         *  Returns a location and accuracy radius based on information about cell
         *  towers and WiFi nodes that the mobile client can detect; via the Google
         *  Maps Geolocation API.
         *  @see {@link https://developers.google.com/maps/documentation/geolocation/intro|Google Maps Geolocation API}
         *  @see {@link https://developers.google.com/maps/documentation/geolocation/usage-limits|Usage Limits}
         *
         *  @param {Object} [options]
         *         Geolocation options.
         *      @param {Number} [options.homeMobileCountryCode]
         *             The mobile country code (MCC) for the device's home network.
         *      @param {Number} [options.homeMobileNetworkCode]
         *             The mobile network code (MNC) for the device's home network.
         *      @param {String} [options.radioType]
         *             The mobile radio type.
         *             See {@link #geolocator.RadioType|`geolocator.RadioType` enumeration}
         *             for possible values. While this field is optional, it should
         *             be included if a value is available, for more accurate results.
         *      @param {string} [options.carrier]
         *             The carrier name. e.g. "Vodafone"
         *      @param {Boolean} [options.fallbackToIP=false]
         *             Specifies whether to fallback to IP geolocation if wifi and
         *             cell tower signals are not available. Note that the IP address
         *             in the request header may not be the IP of the device. Set
         *             `fallbackToIP` to `false` to disable fall back.
         *      @param {Array} [options.cellTowers]
         *             An array of cell tower objects.
         *             See {@link https://developers.google.com/maps/documentation/geolocation/intro#cell_tower_object|Cell tower objects} for details.
         *      @param {Array} [options.wifiAccessPoints]
         *             An array of WiFi access point objects.
         *             See {@link https://developers.google.com/maps/documentation/geolocation/intro#wifi_access_point_object|WiFi access point objects} for details.
         *      @param {Boolean} [options.addressLookup=false]
         *             Specifies whether to run a reverse-geocode operation for the
         *             fetched coordinates to retrieve detailed address information.
         *             Note that this means an additional request which requires a
         *             Google API key to be set in the Geolocator configuration.
         *             See {@link #geolocator.config|`geolocator.config()`}.
         *      @param {Boolean} [options.timezone=false]
         *             Specifies whether to also fetch the time zone information for
         *             the receieved coordinates. Note that this means an additional
         *             request which requires a Google API key to be set in the
         *             Geolocator configuration.
         *             See {@link #geolocator.config|`geolocator.config()`}.
         *      @param {String|MapOptions} [options.map]
         *             In order to create an interactive map from the fetched
         *             location coordinates; either set this to a
         *             {@link #geolocator~MapOptions|`MapOptions` object}
         *             or; the ID of a DOM element or DOM element itself which the
         *             map will be created within.
         *      @param {Boolean|Object} [options.staticMap=false]
         *             Set to `true` to get a static Google Map image URL (with
         *             default options); or pass a static map options object.
         *      @param {Boolean} [options.raw=false]
         *      	      Whether to return the raw Google API result.
         *  @param {Function} callback
         *         Callback function to be executed when the request completes.
         *         This takes 2 arguments: `function (err, location) { ... }`.
         *         See {@link #geolocator~Location|`geolocator~Location` type} for details.
         *
         *  @returns {void}
         *
         *  @example
         *  var options = {
         *      homeMobileCountryCode: 310,
         *      homeMobileNetworkCode: 410,
         *      carrier: 'Vodafone',
         *      radioType: geolocator.RadioType.GSM,
         *      fallbackToIP: true,
         *      addressLookup: false,
         *      timezone: false,
         *      map: "my-map",
         *      staticMap: false
         *  };
         *  geolocator.locateByMobile(options, function (err, location) {
         *      console.log(err || location);
         *  });
         */

    }, {
        key: 'locateByMobile',
        value: function locateByMobile(options, callback) {
            if (!_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(options)) {
                throw new _geo_error__WEBPACK_IMPORTED_MODULE_3__["default"](_geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].Code.INVALID_PARAMETERS);
            }

            var cb = callbackMap(options, callback);

            options = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
                homeMobileCountryCode: undefined,
                homeMobileNetworkCode: undefined,
                radioType: undefined,
                carrier: undefined,
                fallbackToIP: false,
                cellTowers: undefined,
                wifiAccessPoints: undefined,
                addressLookup: false,
                timezone: false,
                map: undefined,
                raw: false
            }, options);

            options.considerIp = options.fallbackToIP;
            // check Google key
            checkGoogleKey();

            var conf = geolocator._.config,
                key = conf.google.key || '',
                url = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].setProtocol(_enums__WEBPACK_IMPORTED_MODULE_5__["default"].URL.GOOGLE_GEOLOCATION, conf.https),
                xhrOpts = {
                url: url + '?key=' + key,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(options)
            };
            // console.log(xhrOpts.data);

            _lib_fetch__WEBPACK_IMPORTED_MODULE_1__["default"].post(xhrOpts, function (err, xhr) {
                var response = getXHRResponse(err, xhr);
                if (_geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].isGeoError(response)) return cb(response, null);

                response = options.raw ? response : {
                    coords: {
                        latitude: response.location.lat,
                        longitude: response.location.lng,
                        accuracy: response.accuracy
                    },
                    timestamp: _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].time()
                };

                fetchAddressAndTimezone(response, options, cb);

                // e.g. raw response
                // {
                //     "location": {
                //         "lat": 51.0,
                //         "lng": -0.1
                //     },
                //     "accuracy": 1200.4
                // }
            });
        }

        /**
         *  Locates the user's location by the client's IP.
         *
         *  This method uses a free lookup service, by default.
         *  In order to change the source provider, you can use
         *  {@link #geolocator.setGeoIPSource|`geolocator.setGeoIPSource()` method}.
         *
         *  @param {Object} [options]
         *         Locate options.
         *      @param {Boolean} [options.addressLookup=false]
         *             Specifies whether to run a reverse-geocode operation for the
         *             fetched coordinates to retrieve detailed address information.
         *             Since no precise address can be fetched from an IP addres; you
         *             should only enable this if the Geo-IP Source returns no useful
         *             address information other than coordinates. Also, note that
         *             this means an additional request which requires a Google API
         *             key to be set in the Geolocator configuration.
         *             See {@link #geolocator.config|`geolocator.config()`}.
         *      @param {Boolean} [options.timezone=false]
         *             Specifies whether to also fetch the time zone information for
         *             the receieved coordinates. Note that this means an additional
         *             request which requires a Google API key to be set in the
         *             Geolocator configuration.
         *             See {@link #geolocator.config|`geolocator.config()`}.
         *      @param {String|MapOptions} [options.map]
         *             In order to create an interactive map from the fetched
         *             location coordinates; either set this to a
         *             {@link #geolocator~MapOptions|`MapOptions` object}
         *             or; the ID of a DOM element or DOM element itself which the
         *             map will be created within.
         *      @param {Boolean|Object} [options.staticMap=false]
         *             Set to `true` to get a static Google Map image URL (with
         *             default options); or pass a static map options object.
         *  @param {Function} callback
         *         Callback function to be executed when the request completes.
         *         This takes 2 arguments: `function (err, location) { ... }`.
         *         See {@link #geolocator~Location|`geolocator~Location` type} for details.
         *
         *  @returns {void}
         *
         *  @example
         *  var options = {
         *  	addressLookup: true,
         *  	timezone: true,
         *  	map: "my-map",
         *  	staticMap: true
         *  };
         *  geolocator.locateByIP(options, function (err, location) {
         *  	console.log(err || location);
         *  });
         *
         *  @example
         *  // location result:
         *  {
         *      coords: {
         *          latitude: 41.0214,
         *          longitude: 28.9948,
         *      },
         *      address: {
         *          city: "Istanbul",
         *          region: "34",
         *          state: "34",
         *          country: "Turkey",
         *          countryCode: "TR"
         *      },
         *      formattedAddress: "Demirtaş, Tesviyeci Sk. No:7, 34134 Fatih/İstanbul, Turkey",
         *      type: "ROOFTOP",
         *      placeId: "ChIJ-ZRLfO25yhQRBi5YJxX80Q0",
         *      timezone: {
         *          id: "Europe/Istanbul",
         *          name: "Eastern European Summer Time",
         *          abbr: "EEST",
         *          dstOffset: 3600,
         *          rawOffset: 7200
         *      },
         *      flag: "//cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.3.1/flags/4x3/tr.svg",
         *      map: {
         *          element: HTMLElement,
         *          instance: Object, // google.maps.Map
         *          marker: Object, // google.maps.Marker
         *          infoWindow: Object, // google.maps.InfoWindow
         *          options: Object // map options
         *      },
         *      staticMap: "//maps.googleapis.com/maps/api/staticmap?center=41.0214,28.9948&maptype=roadmap&size=600x300&scale=1&zoom=9&format=png&language=en&markers=color%3Ared%7C41.0214%2C228.9948&key=YOUR-GOOGLE-API-KEY",
         *      provider: "geobytes",
         *      timestamp: 1466216325223
         *  }
         */

    }, {
        key: 'locateByIP',
        value: function locateByIP(options, callback) {
            // passed source can be a string or object
            var source = geolocator._.geoIpSource;

            if (!_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(source)) {
                throw new _geo_error__WEBPACK_IMPORTED_MODULE_3__["default"](_geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].Code.INVALID_GEO_IP_SOURCE, 'Please set a valid Geo-IP Source via geolocator.setGeoIPSource(options).');
            }

            // check options and Google key
            checkGoogleKey(options || {});

            function updateResponse(response) {
                if (!response) {
                    var err = new _geo_error__WEBPACK_IMPORTED_MODULE_3__["default"](_geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].Code.INVALID_RESPONSE);
                    return callback(err, null);
                }
                if (_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(source.schema)) {
                    response = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].mapToSchema(response, source.schema);
                } else if (_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(source.schema)) {
                    response = source.schema(response);
                }
                response.provider = source.provider || 'unknown';
                setLocationURLs(response, options);
                if (response.coords) {
                    response.coords.latitude = Number(response.coords.latitude);
                    response.coords.longitude = Number(response.coords.longitude);
                }
                var cb = callbackMap(options, callback);
                fetchAddressAndTimezone(response, options, cb);
            }

            if (source.xhr) {
                var opts = {
                    url: source.url,
                    async: true
                };
                return _lib_fetch__WEBPACK_IMPORTED_MODULE_1__["default"].get(opts, function (err, xhr) {
                    var response = xhr.responseText ? JSON.parse(xhr.responseText) : null;
                    if (err) return callback(_geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].create(err), null);
                    updateResponse(response);
                });
            }

            if (source.callbackParam || source.globalVar) {
                var jsonpOpts = {
                    url: source.url,
                    async: true,
                    clean: true
                    // params: {}
                };
                if (source.callbackParam) {
                    jsonpOpts.callbackParam = source.callbackParam;
                    jsonpOpts.rootName = 'geolocator._.cb';
                }
                return _lib_fetch__WEBPACK_IMPORTED_MODULE_1__["default"].jsonp(jsonpOpts, function (err, response) {
                    if (err) return callback(_geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].create(err), null);
                    if (source.globalVar) {
                        if (window[source.globalVar]) {
                            response = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].clone(window[source.globalVar]);
                            delete window[source.globalVar];
                        } else {
                            response = null;
                        }
                    }
                    updateResponse(response);
                });
            }

            throw new _geo_error__WEBPACK_IMPORTED_MODULE_3__["default"](_geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].Code.INVALID_GEO_IP_SOURCE, 'Either xhr, callbackParam or globalVar should be set for Geo-IP source.');
        }

        /**
         *  Sets the Geo-IP source to be used for fetching location information
         *  by user's IP; which is internally used by
         *  {@link #geolocator.locateByIP|`geolocator.locateByIP()` method}.
         *
         *  By default, Geolocator uses a free Geo-IP source provider.
         *  You can use this method to change this; or you can choose from
         *  ready-to-use
         *  {@link https://github.com/onury/geolocator/tree/master/src/geo-ip-sources|Geo-IP sources}.
         *
         *  @param {Object} options
         *         Geo-IP Source options.
         *      @param {String} [options.provider]
         *             Source or service provider's name.
         *      @param {String} options.url
         *             Source URL without the callback query parameter. The callback
         *             name (if supported) should be set via `options.callbackParam`.
         *             Also, make sure the service supports the protocol you use in
         *             the enums.URL. If it supports both HTTP and HTTPS, you can omit the
         *             protocol. In this case, it will be determined via Geolocator
         *             configuration.
         *             See {@link #geolocator.config|`geolocator.config()`}.
         *             NOTE: Do not forget to include your API key in the query
         *             parameters of the URL, if you have one.
         *      @param {String} [options.callbackParam]
         *             If JSON callback is supported, pass the name of the callback
         *             parameter, defined by the provider.
         *      @param {Object} [options.globalVar]
         *             Set this instead of `options.callbackParam` if the service
         *             does not support JSON callbacks, but weirdly set a global
         *             variable in the document. For example, if the response is
         *             `Geo = { lat, lng }`, you should set this to `"Geo"`.
         *      @param {Object} [options.schema]
         *             Schema object to be used to re-structure the response returned
         *             from the service. Set the response object's keys as values of
         *             a custom object to map the format to the `location` object.
         *             For example; if the service returns a response like
         *             `{ lat: 40.112233, lng: 10.112233, otherProp: 'hello' }`.
         *             Then you should set the following schema:
         *             `{ coords: { latitude: 'lat', longitude: 'lng' } }`.
         *
         *  @return {geolocator}
         */

    }, {
        key: 'setGeoIPSource',
        value: function setGeoIPSource(options) {
            if (!_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(options)) {
                throw new _geo_error__WEBPACK_IMPORTED_MODULE_3__["default"](_geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].Code.INVALID_PARAMETERS, 'Geo-IP source options is invalid.');
            }
            if (!_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isStringSet(options.url)) {
                throw new _geo_error__WEBPACK_IMPORTED_MODULE_3__["default"](_geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].Code.INVALID_PARAMETERS, 'Geo-IP source should have a valid URI.');
            }
            // if (!utils.isStringSet(options.callbackParam) && !utils.isStringSet(options.globalVar)) {
            //     throw new GeoError(GeoError.Code.INVALID_PARAMETERS, 'No \'callbackParam\' or \'globalVar\' is provided for the Geo-IP Source options.');
            // }
            geolocator._.geoIpSource = Object.freeze(options);
        }

        /**
         *  Registers a handler for watching the user's location via HTML5
         *  geolocation; that is triggered each time the position of the device
         *  changes. This may require/prompt for user's permission.
         *
         *  @param {Object} [options]
         *         HTML5 geo-location settings.
         *      @param {Boolean} [options.enableHighAccuracy=true]
         *             Specifies whether the device should provide the most accurate
         *             position it can. Note that setting this to `true` might consume
         *             more CPU and/or battery power; and result in slower response
         *             times.
         *      @param {Number} [options.timeout=6000]
         *             HTML5 position timeout setting in milliseconds. Setting this
         *             to `Infinity` means that Geolocator won't return until the
         *             position is available.
         *      @param {Number} [options.maximumAge=0]
         *             HTML5 position maximum age. Indicates the maximum age in
         *             milliseconds of a possible cached position that is acceptable
         *             to return. `0` means, the device cannot use a cached position
         *             and must attempt to retrieve the real current position. If set
         *             to `Infinity` the device must return a cached position
         *             regardless of its age.
         *      @param {Boolean} [options.clearOnError=false]
         *             Specifies whether to clear the watcher on first error so that
         *             it does not execute any more callbacks.
         *      @param {Object} [options.target]
         *             Object that defines the target location and settings; that
         *             when the location is reached, the watcher will auto-clear
         *             itself and invoke the callback.
         *      @param {Number} options.target.latitude
         *             The `latitude` of the target location.
         *      @param {Number} options.target.longitude
         *             The `longitude` of the target location.
         *      @param {Number} [options.target.radius=0.5]
         *             The radius, in other words; the minimum distance (in
         *             kilometers or miles) to the target point that should be
         *             reached.
         *      @param {Number} [options.target.unitSystem=0]
         *             Unit system to be used for target radius.
         *             See {@link #geolocator.UnitSystem|`geolocator.UnitSystem` enumeration}
         *             for possible values.
         *  @param {Function} callback
         *         Callback function to be executed when the request completes.
         *         This takes 2 arguments: `function (err, location) { ... }`.
         *         If `options.target` is set, `location` will also
         *         include a `targetReached:Boolean` property.
         *         See {@link #geolocator~Location|`geolocator~Location` type} for details.
         *
         *  @returns {GeoWatcher} - A watcher object that provides a
         *  `.clear(delay:Number, callback:Function)` method to clear the watcher
         *  when needed. Optional `delay` argument can be set (in milliseconds) to
         *  clear in a later time. Omitting this argument will clear the watcher
         *  immediately. You should always call this method, except if you've set up
         *  a target; which will auto-clear the watcher when reached.
         *
         *  @example
         *  // Watch my position for 5 minutes.
         *  var options = { enableHighAccuracy: true, timeout: 6000, maximumAge: 0 };
         *  var watcher = geolocator.watch(options, function (err, location) {
         *      console.log(err || location);
         *  });
         *  console.log(watcher.id); // ID of the watcher
         *  watcher.clear(300000); // clear after 5 minutes.
         *
         *  @example
         *  // Watch my position until I'm 350 meters near Disneyland Park.
         *  options.target = {
         *      latitude: 33.8120918,
         *      longitude: -117.9233569,
         *      radius: 0.35,
         *      unitSystem: geolocator.UnitSystem.METRIC
         *  };
         *  watcher = geolocator.watch(options, function (err, location) {
         *      if (err) {
         *          console.log(err);
         *          return;
         *      }
         *      if (location.targetReached) {
         *          console.log(watcher.isCleared); // true
         *          console.log(watcher.cycle); // 15 — target reached after 15 cycles
         *      } else {
         *          console.log(watcher.isCleared); // false — watcher is active.
         *      }
         *  });
         */

    }, {
        key: 'watch',
        value: function watch(options, callback) {
            if (!geolocator.isGeolocationSupported()) {
                callback(new _geo_error__WEBPACK_IMPORTED_MODULE_3__["default"](_geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].Code.GEOLOCATION_NOT_SUPPORTED), null);
                return {};
            }

            var watcher = void 0,
                target = void 0;

            options = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
                enableHighAccuracy: true,
                timeout: 6000,
                maximumAge: 0,
                clearOnError: false
            }, options);

            if (_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(options.target)) {
                target = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
                    radius: 0.5,
                    unitSystem: geolocator.UnitSystem.METRIC
                }, options.target);
            }

            function onPositionChanged(location) {
                var pos = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].clone(location, { own: false });
                if (target) {
                    var distance = geolocator.calcDistance({
                        from: location.coords,
                        to: target,
                        formula: geolocator.DistanceFormula.HAVERSINE,
                        unitSystem: target.unitSystem
                    });
                    pos.targetReached = distance <= target.radius;
                    if (watcher && pos.targetReached) {
                        watcher.clear(function () {
                            return callback(null, pos);
                        });
                    }
                }
                return callback(null, pos);
            }
            function onPositionError(err) {
                callback(_geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].create(err), null);
            }
            return new _geo_watcher__WEBPACK_IMPORTED_MODULE_4__["default"](onPositionChanged, onPositionError, options);
        }

        /**
         *  Converts a given address (or address components) into geographic
         *  coordinates (i.e. latitude, longitude); and gets detailed address
         *  information.
         *  @see {@link https://developers.google.com/maps/documentation/geocoding/intro|Google Maps Geocoding API}
         *  @see {@link https://developers.google.com/maps/documentation/geocoding/usage-limits|Usage Limits}
         *
         *  @param {String|Object} options
         *         Either the address to geocode or geocoding options with the
         *         following properties.
         *      @param {String} options.address
         *             The street address to geocode, in the format used by the
         *             national postal service of the country concerned. Additional
         *             address elements such as business names and unit, suite or
         *             floor numbers should be avoided. Note that any address
         *             component (route, locality, administrativeArea, postalCode and
         *             country) should be specified either in address or the
         *             corresponding property - not both. Doing so may result in
         *             `ZERO_RESULTS`.
         *      @param {String} [options.route]
         *      	      Long or short name of a route.
         *      @param {String} [options.locality]
         *      	      Locality and sublocality of the location.
         *      @param {String} [options.administrativeArea]
         *      	      Administrative area of the location.
         *      @param {String} [options.postalCode]
         *      	      Postal code of the location.
         *      @param {String} [options.country]
         *      	      A country name or a two letter ISO 3166-1 country code.
         *      @param {String} [options.region]
         *      	      The region code, specified as a ccTLD ("top-level domain")
         *      	      two-character value. e.g.: `"fr"` for France.
         *      @param {Array|Object} [options.bounds]
         *      	      The bounding box of the viewport within which to bias geocode
         *      	      results more prominently. e.g.:
         *      	      `[ southwestLat:Number, southwestLng:Number, northeastLat:Number, northeastLng:Number ]`
         *      @param {String|MapOptions} [options.map]
         *             In order to create an interactive map from the fetched
         *             location coordinates; either set this to a
         *             {@link #geolocator~MapOptions|`MapOptions` object}
         *             or; the ID of a DOM element or DOM element itself which the
         *             map will be created within.
         *      @param {Boolean|Object} [options.staticMap=false]
         *             Set to `true` to get a static Google Map image URL (with
         *             default options); or pass a static map options object.
         *      @param {Boolean} [options.raw=false]
         *      	      Whether to return the raw Google API result.
         *  @param {Function} callback
         *         Callback function to be executed when the request completes.
         *         This takes 2 arguments: `function (err, location) { ... }`.
         *         See {@link #geolocator~Location|`geolocator~Location` type} for details.
         *
         *  @returns {void}
         *
         *  @example
         *  var address = '1600 Amphitheatre Parkway, CA';
         *  geolocator.geocode(address, function (err, location) {
         *      console.log(err || location);
         *  });
         *
         *  @example
         *  // location result:
         *  {
         *      coords: {
         *          latitude: 37.4224764,
         *          longitude: -122.0842499
         *      },
         *      address: {
         *          commonName: "",
         *          street: "Amphitheatre Pkwy",
         *          route: "Amphitheatre Pkwy",
         *          streetNumber: "1600",
         *          neighborhood: "",
         *          town: "",
         *          city: "Mountain View",
         *          region: "Santa Clara County",
         *          state: "California",
         *          stateCode: "CA",
         *          postalCode: "94043",
         *          country: "United States",
         *          countryCode: "US"
         *      },
         *      formattedAddress: "1600 Amphitheatre Parkway, Mountain View, CA 94043, USA",
         *      type: "ROOFTOP",
         *      placeId: "ChIJ2eUgeAK6j4ARbn5u_wAGqWA",
         *      flag: "//cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.3.1/flags/4x3/us.svg",
         *      map: {
         *          element: HTMLElement,
         *          instance: Object, // google.maps.Map
         *          marker: Object, // google.maps.Marker
         *          infoWindow: Object, // google.maps.InfoWindow
         *          options: Object // map options
         *      },
         *      timestamp: 1456795956380
         *  }
         */

    }, {
        key: 'geocode',
        value: function geocode(options, callback) {
            _geocode(false, options, callback);
        }

        /**
         *  Converts the given geographic coordinates into a human-readable address
         *  information.
         *  @see {@link https://developers.google.com/maps/documentation/geocoding/intro#ReverseGeocoding|Google Maps (Reverse) Geocoding API}
         *  @see {@link https://developers.google.com/maps/documentation/geocoding/usage-limits|Usage Limits}
         *  @alias geolocator.addressLookup
         *
         *  @param {Object|String} options
         *         Either the `placeId` of the location or Reverse Geocoding options
         *         with the following properties.
         *      @param {Number} options.latitude
         *      Latitude of the target location.
         *      @param {Number} options.longitude
         *      Longitude of the target location.
         *      @param {String} [options.placeId]
         *             Required if `latitude` and `longitude` are omitted. The place
         *             ID of the place for which you wish to obtain the
         *             human-readable address. The place ID is a unique identifier
         *             that can be used with other Google APIs. Note that if
         *             `placeId` is set, `latitude` and `longitude` are ignored.
         *      @param {String|MapOptions} [options.map]
         *             In order to create an interactive map from the fetched
         *             location coordinates; either set this to a
         *             {@link #geolocator~MapOptions|`MapOptions` object}
         *             or; the ID of a DOM element or DOM element itself which the
         *             map will be created within.
         *      @param {Boolean|Object} [options.staticMap=false]
         *             Set to `true` to get a static Google Map image URL (with
         *             default options); or pass a static map options object.
         *      @param {Boolean} [options.raw=false]
         *             Whether to return the raw Google API result.
         *  @param {Function} callback
         *         Callback function to be executed when the request completes.
         *         This takes 2 arguments: `function (err, location) { ... }`
         *         See {@link #geolocator~Location|`geolocator~Location` type} for details.
         *
         *  @returns {void}
         *
         *  @example
         *  var coords = {
         *      latitude: 37.4224764,
         *      longitude: -122.0842499
         *  };
         *
         *  geolocator.reverseGeocode(coords, function (err, location) {
         *      console.log(err || location);
         *  });
         *
         *  @example
         *  // location result:
         *  {
         *      coords: {
         *          latitude: 37.4224764,
         *          longitude: -122.0842499
         *      },
         *      address: {
         *          commonName: "",
         *          street: "Amphitheatre Pkwy",
         *          route: "Amphitheatre Pkwy",
         *          streetNumber: "1600",
         *          neighborhood: "",
         *          town: "",
         *          city: "Mountain View",
         *          region: "Santa Clara County",
         *          state: "California",
         *          stateCode: "CA",
         *          postalCode: "94043",
         *          country: "United States",
         *          countryCode: "US"
         *      },
         *      formattedAddress: "1600 Amphitheatre Parkway, Mountain View, CA 94043, USA",
         *      type: "ROOFTOP",
         *      placeId: "ChIJ2eUgeAK6j4ARbn5u_wAGqWA",
         *      flag: "//cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.3.1/flags/4x3/us.svg",
         *      map: {
         *          element: HTMLElement,
         *          instance: Object, // google.maps.Map
         *          marker: Object, // google.maps.Marker
         *          infoWindow: Object, // google.maps.InfoWindow
         *          options: Object // map options
         *      },
         *      timestamp: 1456795956380
         *  }
         */

    }, {
        key: 'reverseGeocode',
        value: function reverseGeocode(options, callback) {
            _geocode(true, options, callback);
        }

        /**
         *  Alias for `geolocator.reverseGeocode`
         *  @private
         */

    }, {
        key: 'addressLookup',
        value: function addressLookup(options, callback) {
            geolocator.reverseGeocode(options, callback);
        }

        /**
         *  Gets timezone information for the given coordinates.
         *  Note: Google Browser API keys cannot have referer restrictions when used with this API.
         *  @see {@link https://developers.google.com/maps/documentation/timezone/intro|Google Maps TimeZone API}
         *  @see {@link https://developers.google.com/maps/documentation/timezone/usage-limits|Usage Limits}
         *
         *  @param {Object} options
         *         Time zone options.
         *      @param {Number} options.latitude
         *             Latitude of location.
         *      @param {Number} options.longitude
         *             Longitude of location.
         *      @param {Number} [options.timestamp=Date.now()]
         *             Specifies the desired time as seconds since midnight, January
         *             1, 1970 UTC. This is used to determine whether or not Daylight
         *             Savings should be applied.
         *      @param {Boolean} [options.raw=false]
         *             Whether to return the raw Google API result.
         *  @param {Function} callback
         *         Callback function to be executed when the request completes, in
         *         the following signature: `function (err, timezone) { ... }`.
         *         See {@link #geolocator~TimeZone|`geolocator~TimeZone` type} for
         *         details.
         *
         *  @returns {void}
         *
         *  @example
         *  var options = {
         *      latitude: 48.8534100,
         *      longitude: 2.3488000
         *  };
         *  geolocator.getTimeZone(options, function (err, timezone) {
         *      console.log(err || timezone);
         *  });
         *
         *  @example
         *  // timezone result:
         *  {
         *      id: "Europe/Paris",
         *      name: "Central European Standard Time",
         *      abbr: "CEST",
         *      dstOffset: 0,
         *      rawOffset: 3600,
         *      timestamp: 1455733120
         *  }
         */

    }, {
        key: 'getTimeZone',
        value: function getTimeZone(options, callback) {
            if (!_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(options) || !_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isNumber(options.latitude) || !_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isNumber(options.longitude)) {
                throw new _geo_error__WEBPACK_IMPORTED_MODULE_3__["default"](_geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].Code.INVALID_PARAMETERS);
            }

            checkGoogleKey();

            var conf = geolocator._.config;
            options = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
                key: conf.google.key || '',
                language: conf.language || 'en',
                timestamp: _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].time(true),
                raw: false
            }, options);

            var url = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].setProtocol(_enums__WEBPACK_IMPORTED_MODULE_5__["default"].URL.GOOGLE_TIMEZONE, conf.https),
                xhrOpts = {
                url: url + '?location=' + options.latitude + ',' + options.longitude + '&timestamp=' + options.timestamp + '&language=' + options.language + '&key=' + options.key
            };

            _lib_fetch__WEBPACK_IMPORTED_MODULE_1__["default"].xhr(xhrOpts, function (err, xhr) {
                var response = getXHRResponse(err, xhr);
                if (_geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].isGeoError(response)) return callback(response, null);

                response = options.raw ? response : {
                    id: response.timeZoneId,
                    name: response.timeZoneName,
                    abbr: _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].abbr(response.timeZoneName, { dots: false }),
                    dstOffset: response.dstOffset,
                    rawOffset: response.rawOffset,
                    timestamp: options.timestamp
                };
                callback(err, response);
            });
        }

        /**
         *  Gets the distance and duration values based on the recommended route
         *  between start and end points.
         *  @see {@link https://developers.google.com/maps/documentation/distance-matrix/intro|Google Maps Distance Matrix API}
         *  @see {@link https://developers.google.com/maps/documentation/distance-matrix/usage-limits|Usage Limits}
         *
         *  @param {Object} options
         *         Distance matrix options.
         *      @param {String|Object|Array} options.origins
         *             One or more addresses and/or an object of latitude/longitude
         *             values, from which to calculate distance and time. If you pass
         *             an address as a string, the service will geocode the string
         *             and convert it to a latitude/longitude coordinate to calculate
         *             distances. Following are valid examples:
         *  <pre><code>options.origins = 'London';
         *  options.origins = ['London', 'Paris'];
         *  options.origins = { latitude: 51.5085300, longitude: -0.1257400 };
         *  options.origins = [
         *      { latitude: 51.5085300, longitude: -0.1257400 },
         *      { latitude: 48.8534100, longitude: 2.3488000 }
         *  ];
         *  </code></pre>
         *      @param {String|Object|Array} options.destinations
         *             One or more addresses and/or an object of latitude/longitude
         *             values, from which to calculate distance and time. If you pass
         *             an address as a string, the service will geocode the string
         *             and convert it to a latitude/longitude coordinate to calculate
         *             distances.
         *      @param {String} [options.travelMode="DRIVING"]
         *             Type of routing requested.
         *             See {@link #geolocator.TravelMode|`geolocator.TravelMode` enumeration}
         *             for possible values.
         *      @param {Boolean} [options.avoidFerries]
         *             If true, instructs the Distance Matrix service to avoid
         *             ferries where possible.
         *      @param {Boolean} [options.avoidHighways]
         *             If true, instructs the Distance Matrix service to avoid
         *             highways where possible.
         *      @param {Boolean} [options.avoidTolls]
         *             If true, instructs the Distance Matrix service to avoid toll
         *             roads where possible.
         *      @param {Number} [options.unitSystem=0]
         *             Preferred unit system to use when displaying distance.
         *             See {@link #geolocator.UnitSystem|`geolocator.UnitSystem` enumeration}
         *             for possible values.
         *      @param {String} [options.region]
         *             Region code used as a bias for geocoding requests.
         *  @param {Boolean} [options.raw=false]
         *         Whether to return the raw Google API result.
         *  @param {Function} callback
         *         Callback function to be executed when the request completes,
         *         in the following signature: `function (err, result) { ... }`
         *
         *  @returns {void}
         *
         *  @example
         *  var options = {
         *      origins: [{ latitude: 51.5085300, longitude: -0.1257400 }],
         *      destinations: [{ latitude: 48.8534100, longitude: 2.3488000 }],
         *      travelMode: geolocator.TravelMode.DRIVING,
         *      unitSystem: geolocator.UnitSystem.METRIC
         *  };
         *  geolocator.getDistanceMatrix(options, function (err, result) {
         *      console.log(err || result);
         *  });
         *
         *  @example
         *  // result:
         *  [
         *  	{
         *  		from: "449 Duncannon St, London WC2R 0DZ, UK",
         *  		to: "1 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris-4E-Arrondissement, France",
         *  		distance: {
         *  			value: 475104,
         *  			text: "475 km"
         *  		},
         *  		duration: {
         *  			value: 20193,
         *  			text: "5 hours 37 mins"
         *  		},
         *  		fare: undefined,
         *  		timestamp: 1456795956380
         *  	}
         *  ]
         */

    }, {
        key: 'getDistanceMatrix',
        value: function getDistanceMatrix(options, callback) {
            checkGoogleKey();

            var key = geolocator._.config.google.key;
            geolocator.ensureGoogleLoaded(key, function (err) {
                if (err) {
                    throw new _geo_error__WEBPACK_IMPORTED_MODULE_3__["default"](_geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].Code.GOOGLE_API_FAILED, String(err.message || err));
                }

                var o = options.origins || options.origin || options.from,
                    d = options.destinations || options.destination || options.to;
                if (!_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(options) || invalidOriginOrDest(o) || invalidOriginOrDest(d)) {
                    throw new _geo_error__WEBPACK_IMPORTED_MODULE_3__["default"](_geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].Code.INVALID_PARAMETERS);
                }
                options.origins = _geo_helper__WEBPACK_IMPORTED_MODULE_2__["default"].toPointList(o);
                options.destinations = _geo_helper__WEBPACK_IMPORTED_MODULE_2__["default"].toPointList(d);

                options = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
                    travelMode: google.maps.TravelMode.DRIVING,
                    avoidFerries: undefined,
                    avoidHighways: undefined,
                    avoidTolls: undefined,
                    unitSystem: google.maps.UnitSystem.METRIC
                }, options);

                var service = new google.maps.DistanceMatrixService();
                service.getDistanceMatrix(options, function (response, status) {
                    var err = null;
                    if (status !== google.maps.DistanceMatrixStatus.OK) {
                        err = _geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].fromResponse(status) || _geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].fromResponse(response);
                        response = null;
                    } else {
                        response = options.raw ? response : _geo_helper__WEBPACK_IMPORTED_MODULE_2__["default"].formatDistanceResults(response);
                    }
                    callback(err, response);
                });
            });
        }

        /**
         *  Calculates the distance between two geographic points.
         *
         *  @param {Object} options
         *         Calculation and display options.
         *      @param {Object} options.from
         *             Object containing the `latitude` and `longitude` of original
         *             location.
         *      @param {Object} options.to
         *             Object containing the `latitude` and `longitude` of destination.
         *      @param {String} [options.formula="haversine"]
         *             The algorithm or formula to calculate the distance.
         *             See {@link #geolocator.DistanceFormula|`geolocator.DistanceFormula` enumeration}.
         *      @param {Number} [options.unitSystem=0]
         *             Preferred unit system to use when displaying distance.
         *             See {@link #geolocator.UnitSystem|`geolocator.UnitSystem` enumeration}.
         *
         *  @returns {Number} - The calculated distance.
         *
         *  @example
         *  // Calculate distance from London to Paris.
         *  var result = geolocator.calcDistance({
         *      from: {
         *          latitude: 51.5085300,
         *          longitude: -0.1257400
         *      },
         *      to: {
         *          latitude: 48.8534100,
         *          longitude: 2.3488000
         *      },
         *      formula: geolocator.DistanceFormula.HAVERSINE,
         *      unitSystem: geolocator.UnitSystem.METRIC
         *  });
         *  // result: 366.41656039126093 (kilometers)
         */

    }, {
        key: 'calcDistance',
        value: function calcDistance(options) {
            options = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
                formula: geolocator.DistanceFormula.HAVERSINE,
                unitSystem: geolocator.UnitSystem.METRIC
            }, options);

            var from = options.from,
                to = options.to,
                radius = options.unitSystem === geolocator.UnitSystem.METRIC ? EARTH_RADIUS_KM : EARTH_RADIUS_MI;

            if (options.formula === geolocator.DistanceFormula.HAVERSINE) {
                var dLat = geolocator.degToRad(to.latitude - from.latitude),
                    dLng = geolocator.degToRad(to.longitude - from.longitude),
                    a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(geolocator.degToRad(from.latitude)) * Math.cos(geolocator.degToRad(to.longitude)) * Math.sin(dLng / 2) * Math.sin(dLng / 2),
                    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                return radius * c;
            }
            // geolocator.DistanceFormula.PYTHAGOREAN
            var latA = geolocator.degToRad(from.latitude),
                latB = geolocator.degToRad(to.latitude),
                lngA = geolocator.degToRad(from.longitude),
                lngB = geolocator.degToRad(to.longitude),
                x = (lngB - lngA) * Math.cos((latA + latB) / 2),
                y = latB - latA;
            return Math.sqrt(x * x + y * y) * radius;
        }

        /**
         *  Gets the current public IP of the client.
         *
         *  @param {Function} callback
         *         Callback function to be executed when the request completes, in
         *         the following signature: `function (err, result) { ... }`
         *
         *  @returns {void}
         *
         *  @example
         *  geolocator.getIP(function (err, result) {
         *      console.log(err || result);
         *  });
         *
         *  @example
         *  // result:
         *  {
         *      ip: "176.232.71.155",
         *      timestamp: 1457573683427
         *  }
         */

    }, {
        key: 'getIP',
        value: function getIP(callback) {
            var conf = geolocator._.config;

            // ipify.org supports CORS, so we'll use XMLHttpRequest instead of a
            // JSONP request.
            var opts = {
                url: _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].setProtocol(_enums__WEBPACK_IMPORTED_MODULE_5__["default"].URL.IP, conf.https),
                async: true
            };
            return _lib_fetch__WEBPACK_IMPORTED_MODULE_1__["default"].get(opts, function (err, xhr) {
                var response = xhr.responseText;
                if (err) {
                    return callback(_geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].create(err), null);
                }
                if (!response) {
                    err = new _geo_error__WEBPACK_IMPORTED_MODULE_3__["default"](_geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].Code.INVALID_RESPONSE);
                    return callback(err, null);
                }
                callback(null, {
                    ip: response,
                    timestamp: _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].time()
                });
            });
            // let jsonpOpts = {
            //     url: utils.setProtocol(enums.URL.IP, conf.https),
            //     async: true,
            //     clean: true,
            //     params: {
            //         format: 'jsonp'
            //     },
            //     callbackParam: 'callback',
            //     rootName: 'geolocator._.cb'
            // };
            // return fetch.jsonp(jsonpOpts, (err, response) => {
            //     if (err) {
            //         return callback(GeoError.create(err), null);
            //     }
            //     if (!response) {
            //         err = new GeoError(GeoError.Code.INVALID_RESPONSE);
            //         return callback(err, null);
            //     }
            //     if (typeof response === 'object') response.timestamp = utils.time();
            //     callback(null, response);
            // });
        }

        /**
         *  Ensures Google Maps API is loaded. If not, this will load all of the
         *  main Javascript objects and symbols for use in the Maps API.
         *
         *  Note that, Google Maps API is loaded only when needed. For example,
         *  the DistanceMatrix API does not support Web Service requests and
         *  requires this API to be loaded. However, the TimeZone API requests are
         *  made throught the Web Service without requiring a `google` object
         *  within DOM.
         *
         *  Also note that this will not re-load the API if `google.maps` object
         *  already exists. In this case, the `callback` is still executed and
         *  no errors are passed.
         *
         *  You can use the following overload to omit the `key` argument altogether:
         *
         *  `geolocator.ensureGoogleLoaded(callback)`
         *
         *  @param {String} [key]
         *         Google API key.
         *  @param {Function} callback
         *         Callback function to be executed when the operation ends.
         *
         *  @returns {void}
         *
         *  @example
         *  geolocator.ensureGoogleLoaded(function (err) {
         *      if (err) return;
         *      console.log('google' in window); // true
         *  });
         */

    }, {
        key: 'ensureGoogleLoaded',
        value: function ensureGoogleLoaded(key, callback) {
            var k = void 0;
            if (_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(key)) {
                callback = key;
            } else {
                k = key;
            }
            if (!geolocator.isGoogleLoaded()) {
                var jsonpOpts = {
                    url: _enums__WEBPACK_IMPORTED_MODULE_5__["default"].URL.GOOGLE_MAPS_API,
                    async: true,
                    callbackParam: 'callback',
                    params: {
                        key: k || ''
                        // callback: ''
                    },
                    rootName: 'geolocator._.cb'
                };
                return _lib_fetch__WEBPACK_IMPORTED_MODULE_1__["default"].jsonp(jsonpOpts, callback);
            }
            callback();
        }

        /**
         *  Checks whether the Google Maps API is loaded.
         *
         *  @returns {Boolean} - Returns `true` if already loaded.
         */

    }, {
        key: 'isGoogleLoaded',
        value: function isGoogleLoaded() {
            return 'google' in window && google.maps;
        }

        /**
         *  Checks whether the type of the given object is an HTML5 `PositionError`.
         *
         *  @param {*} obj - Object to be checked.
         *  @return {Boolean}
         */

    }, {
        key: 'isPositionError',
        value: function isPositionError(obj) {
            return _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isPositionError(obj);
        }

        /**
         *  Checks whether the given value is an instance of `GeoError`.
         *
         *  @param {*} obj - Object to be checked.
         *  @return {Boolean}
         */

    }, {
        key: 'isGeoError',
        value: function isGeoError(obj) {
            return _geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].isGeoError(obj);
        }

        /**
         *  Checks whether HTML5 Geolocation API is supported.
         *
         *  @return {Boolean}
         */

    }, {
        key: 'isGeolocationSupported',
        value: function isGeolocationSupported() {
            return navigator && 'geolocation' in navigator;
        }

        /**
         *  Converts kilometers to miles.
         *
         *  @param {Number} km - Kilometers to be converted.
         *  @returns {Number} - Miles.
         */

    }, {
        key: 'kmToMi',
        value: function kmToMi(km) {
            return km * 0.621371;
        }

        /**
         *  Converts miles to kilometers.
         *
         *  @param {Number} mi - Miles to be converted.
         *  @returns {Number} - Kilometers.
         */

    }, {
        key: 'miToKm',
        value: function miToKm(mi) {
            return mi / 0.621371;
        }

        /**
         *  Converts degrees to radians.
         *
         *  @param {Number} deg - Degrees to be converted.
         *  @returns {Number} - Radians.
         */

    }, {
        key: 'degToRad',
        value: function degToRad(degrees) {
            return degrees * (Math.PI / 180);
        }

        /**
         *  Converts radians to degrees.
         *
         *  @param {Number} rad - Radians to be converted.
         *  @returns {Number} - Degrees.
         */

    }, {
        key: 'radToDeg',
        value: function radToDeg(radians) {
            return radians * (180 / Math.PI);
        }

        /**
         *  Converts decimal coordinates (either lat or lng) to degrees, minutes, seconds.
         *
         *  @param {Number} dec
         *         Decimals to be converted.
         *  @param {Boolean} [isLng=false]
         *         Indicates whether the given decimals is longitude.
         *
         *  @returns {String} - Degrees, minutes, seconds.
         */

    }, {
        key: 'decToDegMinSec',
        value: function decToDegMinSec(dec) {
            var isLng = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            // Degrees Latitude must be in the range of -90. to 90.
            // Degrees Longitude must be in the range of -180 to 180.
            // +Latitude is North, -Latitude is South
            // +Longitude is East, -Longitude is West
            var sign = dec < 0 ? -1 : 1,
                sn = dec < 0 ? 'S' : 'N',
                we = dec < 0 ? 'W' : 'E',
                nsew = !isLng ? sn : we,
                absValue = Math.abs(Math.round(dec * 1000000.0));
            return Math.floor(absValue / 1000000) * sign + '° ' + Math.floor((absValue / 1000000 - Math.floor(absValue / 1000000)) * 60) + '\' ' + Math.floor(((absValue / 1000000 - Math.floor(absValue / 1000000)) * 60 - Math.floor((absValue / 1000000 - Math.floor(absValue / 1000000)) * 60)) * 100000) * 60 / 100000 + '" ' + nsew;
        }
    }, {
        key: 'Error',


        // ---------------------------
        // PROPERTIES
        // ---------------------------

        /**
         *  Geolocator Error class that provides a common type of error object for
         *  the various APIs implemented in Geolocator. All callbacks of Geolocator
         *  will include an instance of this object as the first argument; if the
         *  corresponding operation fails. Also all thrown errors will be an instance
         *  of this object.
         *
         *  This object also enumerates
         *  {@link ?api=geolocator-error#GeoError.Code|Geolocator Error codes}.
         *
         *  @see {@link ?api=geolocator-error|`GeoError` documentation}
         *  @type {GeoError}
         *  @readonly
         */
        get: function get() {
            return _geo_error__WEBPACK_IMPORTED_MODULE_3__["default"];
        }

        /**
         *  Documented separately in enums.js
         *  @private
         */

    }, {
        key: 'MapTypeId',
        get: function get() {
            return _enums__WEBPACK_IMPORTED_MODULE_5__["default"].MapTypeId;
        }

        /**
         *  Documented separately in enums.js
         *  @private
         */

    }, {
        key: 'LocationType',
        get: function get() {
            return _enums__WEBPACK_IMPORTED_MODULE_5__["default"].LocationType;
        }

        /**
         *  Documented separately in enums.js
         *  @private
         */

    }, {
        key: 'TravelMode',
        get: function get() {
            return _enums__WEBPACK_IMPORTED_MODULE_5__["default"].TravelMode;
        }

        /**
         *  Documented separately in enums.js
         *  @private
         */

    }, {
        key: 'UnitSystem',
        get: function get() {
            return _enums__WEBPACK_IMPORTED_MODULE_5__["default"].UnitSystem;
        }

        /**
         *  Documented separately in enums.js
         *  @private
         */

    }, {
        key: 'RadioType',
        get: function get() {
            return _enums__WEBPACK_IMPORTED_MODULE_5__["default"].RadioType;
        }

        /**
         *  Documented separately in enums.js
         *  @private
         */

    }, {
        key: 'DistanceFormula',
        get: function get() {
            return _enums__WEBPACK_IMPORTED_MODULE_5__["default"].DistanceFormula;
        }

        /**
         *  Documented separately in enums.js
         *  @private
         */

    }, {
        key: 'ImageFormat',
        get: function get() {
            return _enums__WEBPACK_IMPORTED_MODULE_5__["default"].ImageFormat;
        }
    }]);

    return geolocator;
}();

// ---------------------------
// HELPER METHODS
// ---------------------------

/**
 *  Used with distance matrix calls.
 *  @private
 */


function invalidOriginOrDest(value) {
    return !_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isString(value) && !_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) && !_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(value);
}

/**
 *  Check if XHR response is an error response and returns a `GeoError`.
 *  If not, returns the parsed response.
 *  @private
 *
 *  @param {Error} err
 *         XHR error.
 *  @param {Object} xhr
 *         XHR object to be checked.
 *
 *  @returns {GeoError|Object}
 */
function getXHRResponse(err, xhr) {
    if (err) return _geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].create(err);
    if (!xhr) return new _geo_error__WEBPACK_IMPORTED_MODULE_3__["default"](_geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].Code.REQUEST_FAILED);
    var response = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].safeJsonParse(xhr.responseText);
    // Check if XHR response is an error response.
    // return response if not.
    return _geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].fromResponse(response) || response;
}

/**
 *  Checks the given options and determines if Google key is required.
 *  Throws if key is required but not set or valid.
 *  @private
 *
 *  @param {Object} [options]
 *         Options to be checked. If `undefined`, directly checks Googke key.
 */
function checkGoogleKey(options) {
    if (!options || options.addressLookup || options.timezone || options.map || options.staticMap) {
        if (!geolocator._.config.google.key) {
            throw new _geo_error__WEBPACK_IMPORTED_MODULE_3__["default"](_geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].Code.GOOGLE_KEY_INVALID, 'A Google API key is required but it\'s not set or valid.');
        }
    }
}

/**
 *  Checks and adds necessary properties to map options from the given location
 *  result object. This is used with methods that support `map` option; to
 *  create a map from the result coordinates; such as locate() method.
 *  @private
 *
 *  @param {Object|String} options
 *         Original options object.
 *  @param {Object} location
 *         Location result object.
 *
 *  @returns {Object} - Final map options object.
 */
function getMapOpts(mapOptions, location) {
    if (_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(mapOptions)) {
        mapOptions.center = location.coords;
    } else {
        mapOptions = {
            element: mapOptions,
            center: location.coords
        };
    }
    // this will enable infoWindow
    if (location.formattedAddress) {
        mapOptions.title = location.formattedAddress;
    }
    // if location has accuracy, (and zoom is not set) we can zoom in a bit more
    if (!mapOptions.zoom && location.coords && _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isNumber(location.coords.accuracy) && location.coords.accuracy < 1500) {
        mapOptions.zoom = 15;
    }
    return mapOptions;
}

/**
 *  Checks the HTMLElement to see whether a previous map and related objects
 *  (marker, infoWindow) are created for it; by checking our private property
 *  `_geolocatorMapData`. If there is a map, this does not re-create it (which
 *  will break the map) but only re-adjust center, zoom and re-create the marker
 *  if needed. We use this approach bec. Google maps has no feature to destroy
 *  a map. This is considered a bug by Google developers.
 *  @private
 *
 *  @param {Object} options
 *         Options for creating a map.
 */
function configCreateMap(options) {
    var elem = options.element,

    // when geolocator creates a map, it will set a `_geolocatorMapData`
    // property on the element. So we can use this map instance later,
    // when the same HTMLElement is passed to create a map. So check if
    // we have it here.
    mapData = elem._geolocatorMapData,
        map = mapData && mapData.instance || null,
        marker = mapData && mapData.marker || null,
        infoWindow = mapData && mapData.infoWindow || null,
        center = new google.maps.LatLng(options.center.latitude, options.center.longitude),
        mapOptions = {
        mapTypeId: options.mapTypeId,
        center: center,
        zoom: options.zoom,
        styles: options.styles || null
    };

    // if we have a map, we'll just configure it. otherwise, we'll create
    // one.
    if (map) {
        map.setOptions(mapOptions);
    } else {
        map = new google.maps.Map(options.element, mapOptions);
    }

    // destroy marker and infoWindow if previously created for this element.
    if (infoWindow) infoWindow = null;
    if (marker && marker instanceof google.maps.Marker) {
        google.maps.event.clearInstanceListeners(marker);
        marker.setMap(null);
        marker = null;
    }

    // check the new options to see if we need to re-create a marker for
    // this.
    if (options.marker) {
        marker = new google.maps.Marker({
            position: mapOptions.center,
            map: map
        });
        if (options.title) {
            infoWindow = new google.maps.InfoWindow();
            infoWindow.setContent(options.title);
            // infoWindow.open(map, marker);
            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open(map, marker);
            });
        }
    }

    mapData = {
        element: elem,
        instance: map,
        marker: marker,
        infoWindow: infoWindow,
        options: mapOptions
    };
    // set the reference on the element for later use, if needed.
    elem._geolocatorMapData = mapData;
    return mapData;
}

/**
 *  Sets the `flag` and `staticMap` (if enabled) property of the given location.
 *  @private
 *
 *  @param {Object} location - Fetched location result.
 *  @param {Object} options - initial options.
 */
function setLocationURLs(location, options) {
    if (!location || !location.address) return;
    var cc = void 0,
        address = location.address;
    if (_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isString(address.countryCode) && address.countryCode.length === 2) {
        cc = address.countryCode;
    } else if (_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isString(address.country) && address.country.length === 2) {
        cc = address.country;
    }
    if (!cc) return;
    location.flag = _enums__WEBPACK_IMPORTED_MODULE_5__["default"].URL.FLAG + cc.toLowerCase() + '.svg';
    if (options.staticMap) {
        var opts = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(options.staticMap) ? _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].clone(options.staticMap) : {};
        opts.center = location.coords;
        location.staticMap = geolocator.getStaticMap(opts);
    }
}

/**
 *  Nests `createMap` callback within the given callback.
 *  @private
 *
 *  @param {Object} options
 *         Method options.
 *  @param {Function} callback
 *         Parent callback.
 *
 *  @returns {Function} - Nested callback.
 */
function callbackMap(options, callback) {
    return function cb(err, location) {
        if (err) return callback(_geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].create(err), null);
        setLocationURLs(location, options);
        if (!options.map) return callback(null, location);
        options.map = getMapOpts(options.map, location);
        geolocator.createMap(options.map, function (error, map) {
            if (error) return callback(error, null);
            location.map = map;
            return callback(null, location);
        });
    };
}

/**
 *  Sends a geocode or reverse-geocode request with the given options.
 *  @private
 *
 *  @param {Boolean} reverse
 *         Whether to send reverse-geocode request.
 *  @param {Object} options
 *         Geocode options.
 *  @param {Function} callback
 *         Callback to be nested and executed with map callback.
 */
function _geocode(reverse, options, callback) {
    checkGoogleKey();
    _geo_helper__WEBPACK_IMPORTED_MODULE_2__["default"].geocode(reverse, geolocator._.config, options, callbackMap(options, callback));
}

/**
 *  Runs both an address and a timezone look-up for the given location.
 *  @private
 *
 *  @param {Object} location
 *         Location object.
 *  @param {Object} options
 *         Method options.
 *  @param {Function} callback
 *         Parent callback.
 */
function fetchAddressAndTimezone(location, options, callback) {
    var loc = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].clone(location, { own: false });
    if (!options.addressLookup && !options.timezone) {
        return callback(null, loc);
    }
    function getTZ(cb) {
        geolocator.getTimeZone(loc.coords, function (err, timezone) {
            if (err) {
                return cb(err, null);
            }
            delete timezone.timestamp;
            loc.timezone = timezone;
            loc.timestamp = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].time(); // update timestamp
            cb(null, loc);
        });
    }
    if (options.addressLookup) {
        geolocator.reverseGeocode(loc.coords, function (err, result) {
            if (err) return callback(err, null);
            loc = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].extend({}, result, loc);
            loc.address = result.address;
            loc.timestamp = _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].time(); // update timestamp
            if (!options.timezone) {
                callback(err, loc);
            } else {
                getTZ(callback);
            }
        });
    } else if (options.timezone) {
        getTZ(callback);
    } else {
        callback(null, loc);
    }
}

/**
 *  Gets the position with better accuracy.
 *  See https://github.com/gwilson/getAccurateCurrentPosition#background
 *  @private
 *
 *  @param {Object} options
 *         Locate options.
 *  @param {Function} onPositionReceived
 *         Success callback.
 *  @param {Function} onPositionError
 *         Error callback.
 */
function locateAccurate(options, onPositionReceived, onPositionError) {
    var loc = void 0,
        watcher = void 0,
        onProgress = !_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(options.onProgress) ? _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].noop : options.onProgress;

    function complete() {
        watcher = null;
        if (!loc) {
            onPositionError(new _geo_error__WEBPACK_IMPORTED_MODULE_3__["default"](_geo_error__WEBPACK_IMPORTED_MODULE_3__["default"].Code.POSITION_UNAVAILABLE));
        } else {
            onPositionReceived(loc);
        }
    }

    watcher = geolocator.watch(options, function (err, location) {
        if (!watcher) return;
        if (err) {
            return watcher.clear(function () {
                onPositionError(err);
            });
        }
        loc = location;
        // ignore the first event if not the only result; for more accuracy.
        if (watcher.cycle > 1 && loc.coords.accuracy <= options.desiredAccuracy) {
            watcher.clear(complete);
        } else {
            onProgress(loc);
        }
    });
    if (watcher) watcher.clear(options.maximumWait + 100, complete);
}

function getStyles(options) {
    var conf = geolocator._.config;
    return !_lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isFilledArray(options.styles) ? _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isFilledArray(conf.google.styles) ? conf.google.styles : null : options.styles;
}

// ---------------------------
// INITIALIZE
// ---------------------------

/**
 *  @private
 *  @type {Object}
 */
geolocator._ = {
    config: _lib_utils__WEBPACK_IMPORTED_MODULE_0__["default"].extend({}, defaultConfig),
    // Storage for global callbacks.
    cb: {}
};

// setting default Geo-IP source

geolocator.setGeoIPSource({
    provider: 'geojs.io',
    url: 'https://get.geojs.io/v1/ip/geo.json',
    xhr: true,
    schema: {
        ip: 'ip',
        coords: {
            latitude: 'latitude',
            longitude: 'longitude'
        },
        address: {
            city: 'city',
            state: 'region',
            stateCode: '',
            postalCode: '',
            countryCode: 'country_code',
            country: 'country',
            region: 'region'
        },
        timezone: {
            id: 'timezone'
        }
    }
});

// ---------------------------
// EXPORT
// ---------------------------



// ---------------------------
// ADDITIONAL DOCUMENTATION
// ---------------------------

/**
 *  `Coordinates` inner type that specifies the geographic position of the
 *  device. The position is expressed as a set of geographic coordinates
 *  together with information about heading and speed.
 *
 *  This is generally returned as part of the
 *  {@link ?api=geolocator#geolocator~Location|`Location` result object}.
 *
 *  @typedef geolocator~Coordinates
 *  @type Object
 *
 *  @property {Number} latitude
 *         Specifies the latitude estimate in decimal degrees. The value
 *         range is [-90.00, +90.00].
 *  @property {Number} longitude
 *         Specifies the longitude estimate in decimal degrees. The value
 *         range is [-180.00, +180.00].
 *  @property {Number} altitude
 *         Specifies the altitude estimate in meters above the WGS 84
 *         ellipsoid.
 *  @property {Number} accuracy
 *         Specifies the accuracy of the latitude and longitude estimates in
 *         meters.
 *  @property {Number} altitudeAccuracy
 *         Specifies the accuracy of the altitude estimate in meters.
 *  @property {Number} heading
 *         Specifies the device's current direction of movement in degrees
 *         counting clockwise relative to true north.
 *  @property {Number} speed
 *         Specifies the device's current ground speed in meters per second.
 */

/**
 *	`Address` inner type that specifies the address of the fetched location.
 *	The address is expressed as a set of political and locality components.
 *
 *  This is generally returned as part of the
 *  {@link ?api=geolocator#geolocator~Location|`Location` result object}.
 *
 *  @typedef geolocator~Address
 *  @type Object
 *
 *  @property {String} commonName
 *         Indicates a point of interest, a premise or colloquial area name for
 *         the fetched location, if any.
 *  @property {String} streetNumber
 *         Indicates the precise street number of the fetched location, if any.
 *  @property {String} street
 *         Indicates the street name of the fetched location, if any.
 *  @property {String} route
 *         Indicates the route name of the fetched location, if any.
 *  @property {String} neighborhood
 *         Indicates the neighborhood name of the fetched location, if any.
 *  @property {String} town
 *         Indictes the town of the fetched location, if any.
 *  @property {String} city
 *         Indicates the city of the fetched location.
 *  @property {String} region
 *         Indicates the political region name of the fetched location, if any.
 *  @property {String} postalCode
 *         Indicates the postal code of the fetched location, if any.
 *  @property {String} state
 *         Indicates the state of the fetched location, if any.
 *  @property {String} stateCode
 *         Indicates the state code of the fetched location, if any.
 *  @property {String} country
 *         Indicates the national political entity of the fetched location.
 *  @property {String} countryCode
 *         Indicates the ISO alpha-2 country code of the fetched location.
 */

/**
 *	`TimeZone` inner type that specifies time offset data for the fetched
 *	location on the surface of the earth.
 *
 *  This is generally returned as part of the
 *  {@link ?api=geolocator#geolocator~Location|`Location` result object}.
 *
 *  @typedef geolocator~TimeZone
 *  @type Object
 *
 *  @property {String} id
 *         The ID of the time zone, such as `"America/Los_Angeles"` or
 *         `"Australia/Sydney"`. These IDs are defined in the
 *         {@link http://www.iana.org/time-zones|IANA Time Zone Database},
 *         which is also available in searchable format in Wikipedia's
 *         {@link http://en.wikipedia.org/wiki/List_of_tz_database_time_zones|List of tz database time zones}.
 *  @property {String} name
 *         The long form name of the time zone. This field will be localized if
 *         the Geolocator `language` is configured. e.g. `"Pacific Daylight Time"`
 *         or `"Australian Eastern Daylight Time"`.
 *  @property {String} abbr
 *         The abbreviation of the time zone.
 *  @property {Number} dstOffset
 *         The offset for daylight-savings time in seconds. This will be zero
 *         if the time zone is not in Daylight Savings Time during the specified
 *         timestamp.
 *  @property {Number} rawOffset
 *         The offset from UTC (in seconds) for the given location. This does
 *         not take into effect daylight savings.
 */

/**
 *	`MapData` inner type that provides references to the components of a
 *	created Google Maps `Map` and the containing DOM element.
 *
 *  This is generally returned as part of the
 *  {@link ?api=geolocator#geolocator~Location|`Location` result object}.
 *
 *  @typedef geolocator~MapData
 *  @type Object
 *
 *  @property {HTMLElement} element
 *         DOM element which a (Google) map is created within.
 *  @property {google.maps.Map} instance
 *         Instance of a Google Maps `Map` object.
 *  @property {google.maps.Marker} marker
 *         Instance of a Google Maps `Marker` object, if any.
 *  @property {google.maps.InfoWindow} infoWindow
 *         Instance of a Google Maps `InfoWindow` object, if any.
 *  @property {Object} options
 *         Arbitrary object of applied map options.
 */

/**
 *	`Location` inner type that specifies geographic coordinates, address and
 *	time zone information for the fetched location.
 *
 *  This result object is passed to the callbacks of the corresponding
 *  asynchronous Geolocator methods (such as `.locate()` method), as the second
 *  argument. The contents of this object will differ for various  Geolocator
 *  methods, depending on the configured method options.
 *
 *  @typedef geolocator~Location
 *  @type Object
 *
 *  @property {Coordinates} coords
 *         Specifies the geographic location of the device. The location is
 *         expressed as a set of geographic coordinates together with
 *         information about heading and speed.
 *         See {@link #geolocator~Coordinates|`geolocator~Coordinates` type}
 *         for details.
 *  @property {Address} address
 *         Specifies the address of the fetched location. The address is
 *         expressed as a set of political and locality components.
 *         This property might be `undefined` if `addressLookup` option is not
 *         enabled for the corresponding method.
 *         See {@link #geolocator~Address|`geolocator~Address` type}
 *         for details.
 *  @property {String} formattedAddress
 *         The human-readable address of this location. Often this address is
 *         equivalent to the "postal address," which sometimes differs from
 *         country to country.
 *  @property {Boolean} targetReached
 *         Specifies whether the defined target coordinates is reached.
 *         This property is only available for
 *         {@link #geolocator.watch|`geolocator.watch()`} method when `target`
 *         option is defined.
 *  @property {String} type
 *         Type of the location. See
 *         {@link #geolcoator.LocationType|`geolcoator.LocationType` enumeration}
 *         for details.
 *  @property {String} placeId
 *         A unique identifier that can be used with other Google APIs.
 *  @property {String} flag
 *         URL of the country flag image, in SVG format. This property exists
 *         only if address information is available.
 *  @property {TimeZone} timezone
 *         Specifies time offset data for the fetched location on the surface of
 *         the earth. See {@link #geolocator~TimeZone|`geolocator~TimeZone` type}
 *         for details.
 *  @property {MapData} map
 *         Provides references to the components of a created Google Maps `Map`
 *         and the containing DOM element. See
 *         {@link #geolocator~MapData|`geolocator~MapData` type} for details.
 *  @property {String} staticMap
 *         URL of a static Google map image, for the location.
 *  @property {Number} timestamp
 *         Specifies the time when the location information was retrieved and
 *         the `Location` object created.
 */

/**
 *  `MapOptions` inner type that specifies options for the map to be created.
 *
 *  @typedef geolocator~MapOptions
 *  @type Object
 *
 *  @property {String|HTMLElement|Map} element
 *         Either the ID of a DOM element or the element itself;
 *         which the map will be created within; or a previously created
 *         `google.maps.Map` instance. If a map instance is set, this
 *         only will apply the options without re-creating it.
 *  @property {Object} center
 *         Center coordinates for the map to be created.
 *      @property {Number} center.latitude
 *             Latitude of the center point coordinates.
 *      @property {Number} center.longitude
 *             Longitude of the center point coordinates.
 *  @property {String} mapTypeId
 *         Type of the map to be created.
 *         See {@link #geolocator.MapTypeId|`geolocator.MapTypeId` enumeration}
 *         for possible values.
 *  @property {String} title
 *         Title text to be displayed within an `InfoWindow`, when the
 *         marker is clicked. This only take effect if `marker` is
 *         enabled.
 *  @property {Boolean} marker
 *         Whether to place a marker at the given coordinates.
 *         If `title` is set, an `InfoWindow` will be opened when the
 *         marker is clicked.
 *  @property {Number} zoom
 *             Zoom level to be set for the map.
 */

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// we don't mix import and module.exports in same file, so using require here.
var geolocator = __webpack_require__(/*! ./core/geolocator */ "./src/core/geolocator.js").geolocator;

// See https://github.com/onury/geolocator/issues/42
if (typeof window !== 'undefined' && typeof window.geolocator === 'undefined') {
        window.geolocator = geolocator;
}

// export default geolocator;
// http://stackoverflow.com/a/33683495/112731
module.exports = geolocator;

/***/ }),

/***/ "./src/lib/fetch.js":
/*!**************************!*\
  !*** ./src/lib/fetch.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/lib/utils.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * Utility for making `XMLHttpRequest` and `JSONP` requests.
 * @copyright 2019, Onur Yıldırım <onur@cutepilot.com>
 */

var fetch = function () {
    function fetch() {
        _classCallCheck(this, fetch);
    }

    _createClass(fetch, null, [{
        key: 'jsonp',


        // https://html.spec.whatwg.org/multipage/scripting.html#script

        /**
         * Makes a JSONP (GET) request by injecting a script tag in the browser.
         * Note that using JSONP has some security implications. As JSONP is really
         * javascript, it can do everything else javascript can do, so you need to
         * trust the provider of the JSONP data.
         * @see https://en.wikipedia.org/wiki/JSONP
         * @memberof fetch
         *
         * @param {Object|String} options - Required. Either the URL string which
         *     will set other options to defaults or an options object with the
         *     following properties.
         *     @param {String} options.url
         *            Source URL to be called.
         *     @param {String} [options.type]
         *            The MIME type that identifies the scripting language of the
         *            code referenced within the script element.
         *            e.g. `"text/javascript"`
         *     @param {String} [options.charset]
         *            Indicates the character encoding of the external resource.
         *            e.g. `"utf-8"`.
         *     @param {Boolean} [options.async=true]
         *            Indicates whether or not to perform the operation
         *            asynchronously. See {@link http://caniuse.com/#feat=script-async|browser support}.
         *     @param {Boolean} [options.defer=false]
         *            Indicates whether the script should be executed when the page
         *            has finished parsing. See {@link http://caniuse.com/#feat=script-defer|browser support}.
         *     @param {String} [options.crossorigin]
         *            Indicates the CORS setting for the script element being
         *            injected. Note that this attribute is not widely supported.
         *            Valid values: `"anonymous"`, `"use-credentials"`.
         *            See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes|CORS settings}.
         *     @param {Number} [options.timeout=0]
         *            The number of milliseconds a request can take before
         *            automatically being terminated. `0` disables timeout.
         *     @param {Boolean} [options.clean=false]
         *            Whether to remove the loaded script from DOM when the
         *            operation ends. Note that the initial source might load
         *            additional sources which are not deteceted or removed. Only
         *            the initial source is removed.
         *     @param {Object} [options.params]
         *            Optional query parameters to be appended at the end of the URL.
         *            e.g. `{ key: "MY-KEY" }`
         *            You can also include the JSONP callback name parameter here
         *            but if you want the object to be passed to the callback
         *            argument of this method, use `options.callbackParam` to set
         *            the callback parameter.
         *     @param {String} [options.callbackParam]
         *            If the endpoint supports JSONP callbacks, you can set the
         *            callback parameter with this setting. This will enable a
         *            second `obj` argument in the callback of this method which is
         *            useful if the JSONP source invokes the callback with an
         *            argument.
         *     @param {String} [options.rootName]
         *            The name (or notation) of the object that the generated JSONP
         *            callback function should be assigned to. By default, this is
         *            the `window` object but you can set this to a custom object
         *            notation; for example, to prevent global namespace polution.
         *            Note that this root object has to be globally accessible for
         *            this to work. e.g. `"window.myObject"` (as string)
         * @param {Function} [callback]
         *        The callback function that will be executed when the script is
         *        loaded. This callback has the following signature:
         *        `function (err, obj) { ... }`. Note that the second argument
         *        `obj` will always be `undefined` if the source endpoint does not
         *        support JSONP callbacks or a callback param is not set explicitly
         *        via `options.callbackParam` (or if the source does not invoke the
         *        jsonp with an argument). However, the function will always execute
         *        when the script loads or an error occurs.
         *
         * @returns {void}
         *
         * @example
         * var opts1 = {
         * 	   url: 'some/api',
         * 	   callbackParam: 'jsonCallback',
         * 	   params: { key: 'MY-KEY' }
         * };
         * // This will load the following source:
         * // some/api?jsonCallback={auto-generated-fn-name}&key=MY-KEY
         * fetch.jsonp(opts1, function (err, obj) {
         * 	   console.log(obj); // some object
         * });
         *
         * var opts2 = {
         * 	   url: 'some/api',
         * 	   params: {
         * 		   key: 'MY-KEY',
         * 		   jsonCallback: 'my-fn-name'
         * 	   }
         * };
         * // This will load the following source:
         * // some/api?jsonCallback=my-fn-name&key=MY-KEY
         * fetch.jsonp(options, function (err, obj) {
         * 	   console.log(obj); // undefined
         * 	   // still executes, catch errors here
         * });
         * // JSON callback should be explicitly set.
         * window['my-fn-name'] = function (obj) {
         * 	   console.log(obj); // some object
         * };
         */
        value: function jsonp(options, callback) {
            var timeout = void 0;

            callback = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(callback) ? callback : _utils__WEBPACK_IMPORTED_MODULE_0__["default"].noop;

            if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isString(options)) {
                options = { url: options };
            }

            if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(options)) {
                options = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
                    // type: undefined,
                    async: true,
                    defer: false,
                    // crossorigin: undefined,
                    timeout: 0,
                    params: {},
                    // callbackParam: undefined,
                    // rootName: undefined,
                    clean: true
                }, options);
            } else {
                return callback(new Error('No options or target URL is provided.'));
            }

            if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isString(options.url) === false || options.url.trim() === '') {
                return callback(new Error('No target URL is provided.'));
            }

            var script = document.createElement('script'),
                cbParamSet = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].isString(options.callbackParam) && options.callbackParam.trim() !== '',
                cbFnName = void 0,
                root = void 0,
                rootNameSet = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].isString(options.rootName) && options.rootName !== 'window' && options.rootName !== 'document' && options.rootName.trim() !== '';

            if (cbParamSet) {
                cbFnName = '_jsonp_' + _utils__WEBPACK_IMPORTED_MODULE_0__["default"].randomString(10);
                options.params[options.callbackParam] = rootNameSet ? options.rootName + '.' + cbFnName : cbFnName;
            }
            var query = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].params(options.params) || '',
                qMark = options.url.indexOf('?') >= 0 ? '&' : '?',
                url = query ? '' + options.url + qMark + query : options.url;
            // console.log(url);

            function execCb(err, timeUp, obj) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                if ((timeUp || options.clean) && script.parentNode) {
                    script.parentNode.removeChild(script);
                }
                // delete the jsonp callback function
                if (rootNameSet) {
                    delete root[cbFnName];
                }
                callback(err, obj);
            }

            if (cbFnName) {
                var fn = function fn(obj) {
                    execCb(null, false, obj);
                };
                root = rootNameSet
                // ? window[options.rootName][cbFnName] = fn;
                ? _utils__WEBPACK_IMPORTED_MODULE_0__["default"].notateGlobalObj(options.rootName) // if rootName is dot-notation.
                : window;
                root[cbFnName] = fn;
            } else if (script.readyState) {
                // IE < 11
                script.onreadystatechange = function () {
                    if (script.readyState === 'loaded' || script.readyState === 'complete') {
                        script.onreadystatechange = null;
                        execCb(null);
                    }
                };
            } else {
                // IE 11+
                script.onload = function () {
                    execCb(null);
                };
            }

            script.onerror = function (error) {
                var errMsg = 'Could not load source at ' + _utils__WEBPACK_IMPORTED_MODULE_0__["default"].removeQuery(options.url);
                if (error) {
                    errMsg += '\n' + (error.message || error);
                }
                execCb(new Error(errMsg));
            };

            if (options.type) {
                script.type = options.type;
            }
            if (options.charset) {
                script.charset = options.charset;
            }
            if (options.async) {
                script.async = true;
            }
            if (options.defer) {
                script.defer = true;
            }
            if (options.crossorigin) {
                script.crossorigin = options.crossorigin;
            }

            script.src = url;
            document.getElementsByTagName('head')[0].appendChild(script);

            // Timeout
            if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isNumber(options.timeout) && options.timeout > 0) {
                timeout = setTimeout(function () {
                    script.src = '';
                    execCb(new Error('Operation timed out.'), true);
                }, options.timeout);
            }
        }

        /**
         * Makes an XMLHttpRequest with the given parameters.
         * Note that `"Access-Control-Allow-Origin"` header should be present on
         * the requested resource. Otherwise, the request will not be allowed.
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest|XMLHttpRequest}.
         * @memberof fetch
         *
         * @param {Object|String} options
         *        Either the URL string which will set other options to defaults or
         *        the full options object.
         *     @param {String} options.url
         *            Target URL to be called.
         *     @param {String} [options.method="GET"]
         *            HTTP method.
         *     @param {*} [options.data]
         *            Data to be sent with the request.
         *     @param {Number} [options.timeout]
         *            The number of milliseconds a request can take before
         *            automatically being terminated. `0` disables timeout.
         *     @param {Boolean} [options.withCredentials=false]
         *            Indicates whether or not cross-site Access-Control requests
         *            should be made using credentials such as cookies or
         *            authorization headers.
         *     @param {Boolean} [options.async=true]
         *            Indicating whether or not to perform the operation
         *            asynchronously. If this value is false, the `send()` method
         *            does not return until the response is received. If `true`,
         *            notification of a completed transaction is provided using
         *            event listeners. This must be `true` if the multipart
         *            attribute is `true`, or an exception will be thrown.
         *     @param {String} [options.mimeType]
         *            If set, overrides the MIME type returned by the server. This
         *            may be used, for example, to force a stream to be treated and
         *            parsed as `text/xml`, even if the server does not report it as
         *            such.
         *     @param {Object} [options.headers]
         *            Sets the HTTP request headers. Each key should be a header
         *            name with a value. e.g. `{ 'Content-Length': 50 }`. For
         *            security reasons, some headers cannot be set and can only be
         *            controlled by the user agent.
         *     @param {String} [options.username=""]
         *            User name to use for authentication purposes.
         *     @param {String} [options.password=""]
         *            Password to use for authentication purposes.
         * @param {Function} [callback]
         *        The callback function in the following signature:
         *        `function (err, xhr) { ... }`
         *        Note that `xhr` object is always passed regardless of an error.
         *
         * @returns {void}
         */

    }, {
        key: 'xhr',
        value: function xhr(options, callback) {
            var xhr = void 0,
                err = void 0;
            var isXDR = false;

            if ('XMLHttpRequest' in window) {
                xhr = new XMLHttpRequest();
            } else if ('XDomainRequest' in window) {
                // IE9
                xhr = new XDomainRequest();
                isXDR = true;
            } else {
                throw new Error('XMLHttpRequest is not supported!');
            }

            var hasCallback = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(callback);
            callback = hasCallback ? callback : _utils__WEBPACK_IMPORTED_MODULE_0__["default"].noop;

            if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isString(options)) options = { url: options };
            if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(options)) {
                options = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
                    method: 'GET',
                    data: undefined,
                    async: true,
                    timeout: 0, // no timeout
                    withCredentials: false,
                    mimeType: undefined,
                    username: '',
                    password: ''
                }, options);
            } else {
                callback(new Error('No options or target URL is provided.'));
            }

            if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isString(options.url) === false) {
                callback(new Error('No target URL is provided.'));
            }

            options.username = String(options.username);
            options.password = String(options.password);
            options.method = options.method.toUpperCase();
            if (options.method !== 'POST' && options.method !== 'PUT') {
                options.data = undefined;
            }
            // console.log(JSON.stringify(options));

            function xError() {
                var crossDomain = xhr.status === 0 ? '. Make sure you have permission if this is a cross-domain request.' : '';
                err = new Error('The request returned status: ' + xhr.status + crossDomain);
                // console.log(xhr);
                callback(err, xhr);
            }

            if (hasCallback) {
                if (isXDR) {
                    // IE9
                    xhr.onload = function () {
                        callback(null, xhr);
                    };
                    xhr.onerror = xError;
                } else {
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === fetch.XHR_READY_STATE.DONE) {
                            if (xhr.status === 200) {
                                callback(null, xhr);
                            } else {
                                xError();
                            }
                        }
                    };
                }

                if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isNumber(options.timeout) && options.timeout > 0) {
                    xhr.timeout = options.timeout;
                    xhr.ontimeout = function () {
                        // xhr.abort();
                        err = new Error('The request had timed out.');
                        callback(err, xhr);
                    };
                }
            }
            // console.log(options);
            xhr.open(options.method, options.url, options.async, options.username, options.password);

            // if this is XDomainRequest, it doesn't support setting custom headers;
            // or overriding the mime type.
            if (!isXDR) {
                if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(options.headers)) {
                    // xhr.setRequestHeader() method should be called after open(), but
                    // before send().
                    Object.keys(options.headers).forEach(function (key) {
                        var value = options.headers[key];
                        xhr.setRequestHeader(key, value);
                    });
                }

                // xhr.overrideMimeType() method must be called before send().
                if (options.mimeType) {
                    xhr.overrideMimeType(options.mimeType);
                }
            }

            xhr.send(options.data);
        }

        /**
         * Alias of `fetch.xhr()` with request method set to `"GET"` by default.
         * @memberof fetch
         *
         * @param {Object} options
         *        Either the URL string which will set other options to defaults or
         *        the full options object. See `fetch.xhr()` method options for
         *        details.
         * @param {Function} [callback]
         *        The callback function in the following signature:
         *        `function (err, xhr) { ... }`
         *        Note that `xhr` object is always passed regardless of an error.
         * @returns {void}
         */

    }, {
        key: 'get',
        value: function get(options, callback) {
            return fetch.xhr(options, callback);
        }

        /**
         * Alias of `fetch.xhr()` with request method set to `"POST"` by default.
         * @memberof fetch
         *
         * @param {Object} options
         *        Either the URL string which will set other options to defaults or
         *        the full options object. See `fetch.xhr()` method options for
         *        details.
         * @param {Function} [callback]
         *        The callback function in the following signature:
         *        `function (err, xhr) { ... }`
         *        Note that `xhr` object is always passed regardless of an error.
         * @returns {void}
         */

    }, {
        key: 'post',
        value: function post(options, callback) {
            return _xhr('POST', options, callback);
        }

        /**
         * Alias of `fetch.xhr()` with request method set to `"PUT"` by default.
         * @memberof fetch
         *
         * @param {Object} options
         *        Either the URL string which will set other options to defaults or
         *        the full options object. See `fetch.xhr()` method options for
         *        details.
         * @param {Function} [callback]
         *        The callback function in the following signature:
         *        `function (err, xhr) { ... }`
         *        Note that `xhr` object is always passed regardless of an error.
         * @returns {void}
         */

    }, {
        key: 'put',
        value: function put(options, callback) {
            return _xhr('PUT', options, callback);
        }

        /**
         * Alias of `fetch.xhr()` with request method set to `"DELETE"` by default.
         * @memberof fetch
         *
         * @param {Object} options
         *        Either the URL string which will set other options to defaults or
         *        the full options object. See `fetch.xhr()` method options for
         *        details.
         * @param {Function} [callback]
         *        The callback function in the following signature:
         *        `function (err, xhr) { ... }`
         *        Note that `xhr` object is always passed regardless of an error.
         * @returns {void}
         */

    }, {
        key: 'delete',
        value: function _delete(options, callback) {
            return _xhr('DELETE', options, callback);
        }
    }]);

    return fetch;
}();

/**
 *  @private
 */


function _xhr(method, options, callback) {
    options = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].isString(options) ? { url: options } : options || {};
    options.method = method;
    return fetch.xhr(options, callback);
}

/**
 * Enumerates `XMLHttpRequest` ready states.
 * Not to be confused with `script.readyState`.
 * @memberof fetch
 *
 * @enum {Number}
 */
fetch.XHR_READY_STATE = {
    /**
     * `xhr.open()` has not been called yet.
     * @type {Number}
     */
    UNSENT: 0,
    /**
     * `xhr.send()` has been called.
     * @type {Number}
     */
    OPENED: 1,
    /**
     * `xhr.send()` has been called, and headers and status are available.
     * @type {Number}
     */
    HEADERS_RECEIVED: 2,
    /**
     * Downloading; responseText holds partial data.
     * @type {Number}
     */
    LOADING: 3,
    /**
     * The operation is complete.
     * @type {Number}
     */
    DONE: 4
};

/* harmony default export */ __webpack_exports__["default"] = (fetch);

/***/ }),

/***/ "./src/lib/utils.js":
/*!**************************!*\
  !*** ./src/lib/utils.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _toString = Object.prototype.toString;

/**
 * Simple utility methods; internally used within Geolocator core;
 * made publically accessible.
 * @type {Object}
 * @readonly
 */
var utils = {
    noop: function noop() {},


    // ---------------------------
    // Validation
    // ---------------------------

    /**
     * Checks if the type of the given value is `String`.
     * @memberof utils
     *
     * @param {*} value - Value to be checked.
     * @returns {Boolean}
     */
    isString: function isString(value) {
        return typeof value === 'string';
    },
    isStringSet: function isStringSet(value) {
        return typeof value === 'string' && value.trim().length > 0;
    },


    /**
     * Checks if the type of the given value is `Number`.
     * @memberof utils
     *
     * @param {*} value - Value to be checked.
     * @returns {Boolean}
     */
    isNumber: function isNumber(value) {
        return typeof value === 'number';
    },


    /**
     * Checks if the type of the given value is an `Object` or `Function`.
     * @memberof utils
     *
     * @param {*} value - Value to be checked.
     * @returns {Boolean}
     */
    isObject: function isObject(value) {
        var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
        return Boolean(value) && (type === 'object' || type === 'function');
    },


    /**
     * Checks if the type of the given value is `Function`.
     * @memberof utils
     *
     * @param {*} value - Value to be checked.
     * @returns {Boolean}
     */
    isFunction: function isFunction(value) {
        return typeof value === 'function';
    },


    /**
     * Checks if the type of the given value is `Array`.
     * @memberof utils
     *
     * @param {*} value - Value to be checked.
     * @returns {Boolean}
     */
    isArray: function isArray(value) {
        return Boolean(value) && _toString.call(value) === '[object Array]';
    },


    /**
     * Checks if the given object is a non-empty `Array`.
     * @memberof utils
     *
     * @param {*} array - Object to be checked.
     * @returns {Boolean}
     */
    isFilledArray: function isFilledArray(array) {
        return utils.isArray(array) && array.length > 0;
    },


    /**
     * Checks if the given value is a plain `Object`.
     * @memberof utils
     *
     * @param {*} value - Value to be checked.
     * @returns {Boolean}
     */
    isPlainObject: function isPlainObject(value) {
        return Boolean(value) && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && _toString.call(value) === '[object Object]';
    },


    /**
     * Checks if the given value is a `Date`.
     * @memberof utils
     *
     * @param {*} value - Value to be checked.
     * @returns {Boolean}
     */
    isDate: function isDate(value) {
        return Boolean(value) && _toString.call(value) === '[object Date]';
    },


    /**
     * Checks if the given object is a DOM element.
     * @memberof utils
     *
     * @param {Object} object - Object to be checked.
     * @returns {Boolean}
     */
    isElement: function isElement(object) {
        if (!object) return false;
        return object instanceof HTMLElement || (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object.nodeType === 1;
    },


    /**
     * Checks if the given object is a DOM node.
     * @memberof utils
     *
     * @param {Object} object - Object to be checked.
     * @returns {Boolean}
     */
    isNode: function isNode(object) {
        if (!object) return false;
        return object instanceof Node || (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && typeof object.nodeType === 'number';
    },


    /**
     * Checks if the given object is a jQuery instance.
     * This will still return `false` if the jQuery instance has no items.
     * @memberof utils
     *
     * @param {Object} object - Object to be checked.
     * @returns {Boolean}
     */
    isJQueryObject: function isJQueryObject(object) {
        if (!object) return false;
        return 'jQuery' in window && object instanceof window.jQuery && Boolean(object[0]);
        // http://api.jquery.com/jquery-2/
        // || (typeof object === 'object' && Boolean(object.jquery));
    },


    /**
     * Checks if the type of the given value is an HTML5 `PositionError`.
     * @memberof utils
     *
     * @param {*} value - Value to be checked.
     * @returns {Boolean}
     */
    isPositionError: function isPositionError(value) {
        return Boolean(value) && _toString.call(value) === '[object PositionError]';
    },


    /**
     * Checks if the given value is an instance of `Error` or HTML5 `PositionError`.
     * @memberof utils
     *
     * @param {*} value - Value to be checked.
     * @returns {Boolean}
     */
    isError: function isError(value) {
        return value instanceof Error || utils.isPositionError(value);
    },


    // ---------------------------
    // String
    // ---------------------------

    /**
     * Removes the query string portion from the given URL string.
     * @memberof utils
     *
     * @param {String} str - String to be processed.
     * @returns {String} - Returns the rest of the string.
     */
    removeQuery: function removeQuery(str) {
        return str.replace(/\?.*$/, '');
    },


    /**
     * Removes the protocol portion from the given URL string.
     * @memberof utils
     *
     * @param {String} str - String to be processed.
     * @returns {String} - Returns the rest of the string.
     */
    removeProtocol: function removeProtocol(str) {
        return str.replace(/^(.*:)?\/\//, '');
    },


    /**
     * Sets the protocol of the given URL.
     * @memberof utils
     *
     * @param {String} url
     *        The URL to be modified.
     * @param {Boolean} [https]
     *        Specifies whether to set the protocol to HTTPS.
     *        If omitted, current page protocol will be used.
     *
     * @returns {String} - The modified URL string.
     */
    setProtocol: function setProtocol(url, https) {
        var p = void 0;
        if (https === undefined || https === null) {
            p = window.location.protocol;
        } else {
            p = https ? 'https:' : 'http:';
        }
        url = utils.removeProtocol(url);
        return p + '//' + url;
    },


    /**
     * Removes both the leading and trailing dots from the given string.
     * @memberof utils
     *
     * @param {String} str - String to be processed.
     * @returns {String} - Returns the rest of the string.
     */
    trimDots: function trimDots(str) {
        return str.replace(/^\.+?(.*?)\.+?$/g, '$1');
    },


    /**
     * URL-Encodes the given string. Note that the encoding is done Google's
     * way; that is, spaces are replaced with `+` instead of `%20`.
     * @memberof utils
     *
     * @param {String} str - String to be processed.
     * @returns {String} - Returns the encoded string.
     */
    encodeURI: function encodeURI(str) {
        return encodeURIComponent(str).replace(/%20/g, '+');
    },


    /**
     * URL-Decodes the given string. This is the reverse of `utils.encodeURI()`;
     * so pluses (`+`) are replaced with spaces.
     * @memberof utils
     *
     * @param {String} str - String to be processed.
     * @returns {String} - Returns the decoded string.
     */
    decodeURI: function decodeURI(str) {
        return decodeURIComponent(str.replace(/\+/g, '%20'));
    },


    /**
     * Converts the given value to string.
     * `null` and `undefined` converts to empty string.
     * If value is a function, it's native `toString()` method is used.
     * Otherwise, value is coerced.
     * @memberof utils
     *
     * @param {*} value - String to be converted.
     * @returns {String} - Returns the result string.
     */
    toString: function toString(value) {
        if (value === null || value === undefined) return '';
        if (value.toString && utils.isFunction(value.toString)) {
            return value.toString();
        }
        return String(value);
    },


    /**
     * Generates a random string with the number of characters.
     * @memberof utils
     *
     * @param {Number} [len=1] - Length of the string.
     * @returns {String} - Returns a random string.
     */
    randomString: function randomString(len) {
        if (!len || !utils.isNumber(len)) len = 1;
        len = -Math.abs(len);
        return Math.random().toString(36).slice(len);
    },


    /**
     * Gets the abbreviation of the given phrase.
     * @memberof utils
     *
     * @param {String} str
     *        String to abbreviate.
     * @param {Object} [options]
     *        Abbreviation options.
     *     @param {Boolean} [options.upper=true]
     *            Whether to convert to upper-case.
     *     @param {Boolean} [options.dots=true]
     *            Whether to add dots after each abbreviation.
     *
     * @returns {String} - Returns the abbreviation of the given phrase.
     */
    abbr: function abbr(str, options) {
        options = utils.extend({
            upper: true,
            dots: true
        }, options);
        var d = options.dots ? '.' : '',
            s = str.match(/(\b\w)/gi).join(d) + d;
        return options.upper ? s.toUpperCase() : s;
    },


    /**
     * Builds URI parameters from the given object.
     * Note: This does not iterate deep objects.
     * @memberof utils
     *
     * @param {Object} obj - Object to be processed.
     * @param {Object} options - Parameterize options.
     *     @param {Boolean} [options.encode=true]
     *            Whether to encode URI components.
     *     @param {String} [options.operator="="]
     *     @param {String} [options.separator="&"]
     *     @param {Array} [options.include]
     *            Keys to be included in the output params. If defined,
     *            `options.exclude` is ignored.
     *     @param {Array} [options.exclude]
     *            Keys to be excluded from the output params.
     *
     * @returns {String} - URI parameters string.
     */
    params: function params(obj, options) {
        if (!utils.isPlainObject(obj) || Object.keys(obj).length === 0) {
            return '';
        }

        options = utils.extend({
            encode: true,
            operator: '=',
            separator: '&',
            include: undefined,
            exclude: undefined
        }, options);

        var params = [],
            inc = utils.isArray(options.include) ? options.include : null,
            exc = !inc && utils.isArray(options.exclude) ? options.exclude : null;
        utils.forIn(obj, function (value, key) {
            if ((!inc || inc.indexOf(key) >= 0) && (!exc || exc.indexOf(key) < 0)) {
                var v = utils.toString(value);
                v = options.encode ? utils.encodeURI(v) : v;
                var k = options.encode ? utils.encodeURI(key) : key;
                params.push(k + options.operator + v);
            }
        });

        return params.join(options.separator);
    },


    /**
     * Gets the object from the given object notation string.
     * @private
     *
     * @param {String} notation - Object notation.
     * @returns {*} - Any existing object.
     */
    notateGlobalObj: function notateGlobalObj(notation) {
        notation = utils.trimDots(notation);
        var levels = notation.split('.'),
            o = window;
        if (levels[0] === 'window' || levels[0] === 'document') {
            levels.shift();
        }
        levels.forEach(function (note) {
            o = o[note];
        });
        return o;
    },


    // ---------------------------
    // Object
    // ---------------------------

    /**
     * Iterates over own properties of an object invoking a callback for each
     * property.
     * @memberof utils
     *
     * @param {Object} obj
     *        Object to be processed.
     * @param {Function} callback
     *        Callback function with the following signature:
     *        `function (value, key, object) { ... }`.
     *        Explicitly returning `false` will exit the iteration early.
     * @returns {void}
     */
    forIn: function forIn(obj, callback) {
        var k = void 0;
        for (k in obj) {
            // if (obj.hasOwnProperty(k)) {} // Do this inside callback if needed.
            if (callback(obj[k], k, obj) === false) break;
        }
    },


    /**
     * Extends the given object with the specified sources.
     * Right most source overwrites the previous.
     * NOTE: This is not a full implementation. Use with caution.
     * @memberof utils
     *
     * @param {Object} destination
     *        Destionation Object that will be extended and holds the default
     *        values.
     * @param {...Object} sources
     *        Source objects to be merged.
     *
     * @returns {Object} - Returns the extended object.
     */
    extend: function extend(destination) {
        if (!utils.isObject(destination)) return {};
        var key = void 0,
            value = void 0;

        for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            sources[_key - 1] = arguments[_key];
        }

        sources.forEach(function (source) {
            for (key in source) {
                // eslint-disable-line
                value = source[key];
                if (utils.isArray(value)) {
                    destination[key] = value.concat();
                } else if (utils.isDate(value)) {
                    destination[key] = new Date(value);
                } else if (utils.isFunction(value)) {
                    // should be before object
                    destination[key] = value;
                } else if (utils.isObject(value)) {
                    destination[key] = utils.extend({}, value);
                } else {
                    destination[key] = value;
                }
            }
        });
        return destination;
    },


    /**
     * Clones the given object.
     * NOTE: This is not a full implementation. Use with caution.
     * @memberof utils
     *
     * @param {Object} obj
     *        Target Object to be cloned.
     * @param {Object|Array} [options]
     *        Clone options or array of keys to be cloned.
     *     @param {Array} [options.keys]
     *            Keys of the properties to be cloned.
     *     @param {Boolean} [options.own=true]
     *            Whether to clone own properties only. This is only effective
     *            if `keys` is not defined.
     *
     * @returns {Object} - Returns the cloned object.
     */
    clone: function clone(obj, options) {
        if (!obj) return {};

        if (utils.isArray(options)) {
            options = { keys: options };
        }
        options = utils.extend({
            keys: null,
            own: true
        }, options);

        var include = void 0,
            cloned = {};

        utils.forIn(obj, function (value, key) {
            include = options.keys ? options.keys.indexOf(key) >= 0 : options.own && obj.hasOwnProperty(key) || !options.own;
            if (include) {
                if (utils.isObject(value)) {
                    cloned[key] = utils.clone(value, options);
                } else {
                    cloned[key] = value;
                }
            }
        });
        return cloned;
    },


    /**
     *  Maps the values of the given object to a schema to re-structure a new
     *  object.
     *  @memberof utils
     *
     *  @param {Object} obj
     *         Original object to be mapped.
     *  @param {Object} schema
     *         Schema to be used to map the object.
     *
     *  @returns {Object} - Mapped object.
     */
    mapToSchema: function mapToSchema(obj, schema) {
        var mapped = {};
        utils.forIn(schema, function (value, key) {
            if (utils.isPlainObject(value)) {
                mapped[key] = utils.mapToSchema(obj, value);
            } else {
                mapped[key] = obj[value];
            }
        });
        return mapped;
    },


    // ---------------------------
    // Misc
    // ---------------------------

    /**
     * Safely parses the given JSON `String` into an `Object`.
     * The only difference from `JSON.parse()` is that this method does not
     * throw for invalid input. Instead, returns `null`.
     * @memberof utils
     *
     * @param {String} str - JSON string to be parsed
     * @returns {Object|null} - Returns the parsed `Object` or `null` if the
     * input is invalid.
     */
    safeJsonParse: function safeJsonParse(str) {
        var o = null;
        try {
            o = JSON.parse(str);
        } catch (e) {}
        return o;
    },


    /**
     * Gets a timestamp that is seconds or milliseconds since midnight,
     * January 1, 1970 UTC.
     * @memberof utils
     *
     * @param {Boolean} [seconds=false]
     *        Specifies whether seconds should be returned instead of
     *        milliseconds.
     *
     * @returns {Number} - Returns seconds or milliseconds since midnight,
     * January 1, 1970 UTC.
     */
    time: function time(seconds) {
        var ts = Date.now();
        return seconds ? parseInt(ts / 1000, 10) : ts;
    }
};

/* harmony default export */ __webpack_exports__["default"] = (utils);

/***/ })

/******/ });
});
//# sourceMappingURL=geolocator.js.map

/***/ }),

/***/ 1115:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-card",
        {
          staticClass: "bg-primary-card weather-widget",
          attrs: { "header-tag": "h4" }
        },
        [
          _c("div", { staticClass: "row weather-data" }, [
            _c("div", { staticClass: "col-lg-12 temperature" }, [
              _c("h2", [
                _vm.weather.list
                  ? _c("i", {
                      staticClass: "wi icon",
                      class: "wi-owm-" + _vm.weather.list[0].weather[0].id
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.weather.list
                  ? _c("span", { staticClass: "pull-right" }, [
                      _vm._v(
                        _vm._s(_vm.weather.list[0].temp.day) +
                          "\n                        "
                      ),
                      _c("sup", [_c("sup", [_vm._v("o")])]),
                      _vm._v("c\n                        "),
                      _c("br"),
                      _vm._v(" "),
                      _c("span", { staticClass: "location" }, [
                        _c("i", {
                          staticClass: "fa fa-map-marker text-default",
                          attrs: { "aria-hidden": "true" }
                        }),
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.weather.city.name) +
                            ", " +
                            _vm._s(_vm.weather.city.country)
                        )
                      ])
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "weather-footer mt-5" }, [
              _vm.weather.list
                ? _c(
                    "div",
                    { staticClass: "row text-center mt-1" },
                    _vm._l(_vm.weather.list, function(day, index) {
                      return index > 0
                        ? _c(
                            "div",
                            { key: index, staticClass: "col-md-2 col-4 popup" },
                            [
                              _c("h5", [_vm._v(_vm._s(_vm.getday(day.dt)))]),
                              _vm._v(" "),
                              _c("i", {
                                staticClass: "wi",
                                class: "wi-owm-" + day.weather[0].id
                              }),
                              _vm._v(" "),
                              _c("p", [_vm._v(_vm._s(day.temp.day) + "°c")])
                            ]
                          )
                        : _vm._e()
                    }),
                    0
                  )
                : _vm._e()
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1ff18504", module.exports)
  }
}

/***/ }),

/***/ 1116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var chat = [{
    user: "Rickey",
    image: __webpack_require__(972),
    status: "Lorem ipsum dolor sit ametm  elit.",
    messages: [{
        msg: "Hi",
        from: "me",
        time: "09:10"
    }, {
        msg: "Good Morning",
        from: "me",
        time: "09:11"
    }, {
        msg: "Have a Nice day",
        from: "you",
        time: "09:12"
    }, {
        msg: "Hi ,How are you?",
        from: "me",
        time: "09:13"
    }, {
        msg: " Morning",
        from: "you",
        time: "09:14"
    }, {
        msg: "Have a Nice day",
        from: "me",
        time: "09:15"
    }, {
        msg: "Hi ,How are you?",
        from: "You",
        time: "09:16"
    }, {
        msg: "I am Fine",
        from: "me",
        time: "09:17"
    }, {
        msg: "I am Good",
        from: "you",
        time: "09:18"
    }]
}, {
    user: "Jenny",
    image: __webpack_require__(979),
    status: "Consec  ipsum  adipisicing.Lorem   elit.",
    messages: [{
        msg: "Hi,Good Morning",
        from: "me",
        time: "17:23"
    }, {
        msg: "Have a Nice day",
        from: "you",
        time: "17:24"
    }, {
        msg: "Hi ,How are you?",
        from: "me",
        time: "17:25"
    }, {
        msg: " Morning",
        from: "you",
        time: "17:26"
    }, {
        msg: "Have a Nice day",
        from: "me",
        time: "17:27"
    }, {
        msg: "Hi ,How are you?",
        from: "You",
        time: "17:28"
    }, {
        msg: "I am Fine",
        from: "me",
        time: "17:29"
    }, {
        msg: "I am Good",
        from: "you",
        time: "17:30"
    }]
}, {
    user: "David",
    image: __webpack_require__(971),
    status: "Lorem ipsum dolor ipsum dolor  elit",
    messages: [{
        msg: "Hi",
        from: "me",
        time: "13:49"
    }, {
        msg: "Hello",
        from: "you",
        time: "13:50"
    }, {
        msg: "What Are You Doing",
        from: "me",
        time: "13:51"
    }, {
        msg: "Hello",
        from: "you",
        time: "13:52"
    }, {
        msg: "What Are You Doing",
        from: "me",
        time: "13:53"
    }, {
        msg: "I am Doing Somework",
        from: "you",
        time: "13:54"
    }, {
        msg: "I am Doing Somework",
        from: "me",
        time: "13:55"
    }]
}, {
    user: "Roysingh",
    image: __webpack_require__(990),
    status: "Dolor ipsum amet elitLorem ipsum ",
    messages: [{
        msg: "Hi",
        from: "me",
        time: "19:17"
    }, {
        msg: "Hello",
        from: "you",
        time: "19:18"
    }, {
        msg: "What Are You Doing",
        from: "me",
        time: "19:19"
    }, {
        msg: "I am Doing Somework",
        from: "you",
        time: "19:20"
    }]
}, {
    user: "Shasla",
    image: __webpack_require__(1043),
    status: "Dolor ipsum dolor dolor elitLorem ",
    messages: [{
        msg: "Hi",
        from: "me",
        time: "22:06"
    }, {
        msg: "Hello",
        from: "you",
        time: "22:07"
    }, {
        msg: "What Are You Doing",
        from: "you",
        time: "22:08"
    }, {
        msg: "I am Doing Somework",
        from: "me",
        time: "22:09"
    }]
}];

/* harmony default export */ __webpack_exports__["a"] = (chat);

/***/ }),

/***/ 1117:
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(1082)):"function"==typeof define&&define.amd?define(["Chartist"],t):"object"==typeof exports?exports.VueChartist=t(require("chartist")):e.VueChartist=t(e.Chartist)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n.n(r),i=n(4),s=n(3),u=s(o.a,i.a,null,null,null);u.options.__file="src/vue-chartist.vue",u.esModule&&Object.keys(u.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] vue-chartist.vue: functional components are not supported with templates, they should use render functions."),t.default=u.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={name:"vue-chartist",props:{type:{type:String,validator:function(e){return"Pie"===e||"Line"===e||"Bar"===e},default:function(){return"Line"}},data:{type:Object,required:!0},options:{type:Object},listener:{type:Object},responsiveOptions:{type:Array}},data:function(){return{chartist:void 0}},methods:{updateEventListener:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"on";e=e||{};for(var n in e)e.hasOwnProperty(n)&&this.chartist[t](n,e[n])},renderChart:function(){var e=this.data,t=this.options?this.options:{},n=this.responsiveOptions?this.responsiveOptions:[];this.chartist?this.chartist.update(e,t,n):(this.chartist=new o.default[this.type](this.$el,e,t,n),this.updateEventListener(this.listener,"on"))}},watch:{data:{handler:"renderChart",deep:!0},options:{handler:"renderChart",deep:!0},responsiveOptions:{handler:"renderChart",deep:!0},listener:function(e,t){this.updateEventListener(t,"off"),this.updateEventListener(e,"on")}},mounted:function(){this.renderChart()},destroyed:function(){this.chartist&&this.chartist.detach()}}},function(e,t,n){"use strict";var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r);e.exports=o.default},function(e,t){e.exports=function(e,t,n,r,o){var i,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(i=e,s=e.default);var a="function"==typeof s?s.options:s;t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),r&&(a._scopeId=r);var c;if(o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},a._ssrRegister=c):n&&(c=n),c){var d=a.functional,p=d?a.render:a.beforeCreate;d?a.render=function(e,t){return c.call(t),p(e,t)}:a.beforeCreate=p?[].concat(p,c):[c]}return{esModule:i,exports:s,options:a}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"v-chartist-container"})},o=[];r._withStripped=!0;var i={render:r,staticRenderFns:o};t.a=i},function(t,n){t.exports=e}])});

/***/ }),

/***/ 1686:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1687);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(39)("1cccd0ca", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8737e860\",\"scoped\":false,\"hasInlineConfig\":true}!./chartist.css", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8737e860\",\"scoped\":false,\"hasInlineConfig\":true}!./chartist.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1687:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "\n.ct-label {\n  fill: rgba(0, 0, 0, 0.4);\n  color: rgba(0, 0, 0, 0.4);\n  font-size: 0.75rem;\n  line-height: 1;\n}\n.ct-chart-line .ct-label,\n.ct-chart-bar .ct-label {\n  display: block;\n  display: flex;\n}\n.ct-chart-pie .ct-label,\n.ct-chart-donut .ct-label {\n  dominant-baseline: central;\n}\n.ct-label.ct-horizontal.ct-start {\n  align-items: flex-end;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start;\n}\n.ct-label.ct-horizontal.ct-end {\n  align-items: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start;\n}\n.ct-label.ct-vertical.ct-start {\n  align-items: flex-end;\n  justify-content: flex-end;\n  text-align: right;\n  text-anchor: end;\n}\n.ct-label.ct-vertical.ct-end {\n  align-items: flex-end;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start;\n}\n.ct-chart-bar .ct-label.ct-horizontal.ct-start {\n  align-items: flex-end;\n  justify-content: center;\n  text-align: center;\n  text-anchor: start;\n}\n.ct-chart-bar .ct-label.ct-horizontal.ct-end {\n  align-items: flex-start;\n  justify-content: center;\n  text-align: center;\n  text-anchor: start;\n}\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-start {\n  align-items: flex-end;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start;\n}\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-end {\n  align-items: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start;\n}\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-start {\n  align-items: center;\n  justify-content: flex-end;\n  text-align: right;\n  text-anchor: end;\n}\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-end {\n  align-items: center;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: end;\n}\n.ct-grid {\n  stroke: rgba(0, 0, 0, 0.2);\n  stroke-width: 1px;\n  stroke-dasharray: 2px;\n}\n.ct-grid-background {\n  fill: none;\n}\n.ct-point {\n  stroke-width: 10px;\n  stroke-linecap: round;\n}\n.ct-line {\n  fill: none;\n  stroke-width: 4px;\n}\n.ct-area {\n  stroke: none;\n  fill-opacity: 0.1;\n}\n.ct-bar {\n  fill: none;\n  stroke-width: 10px;\n}\n.ct-slice-donut {\n  fill: none;\n  stroke-width: 60px;\n}\n.ct-series-a .ct-point, .ct-series-a .ct-line, .ct-series-a .ct-bar, .ct-series-a .ct-slice-donut {\n  stroke: #d70206;\n}\n.ct-series-a .ct-slice-pie, .ct-series-a .ct-slice-donut-solid, .ct-series-a .ct-area {\n  fill: #d70206;\n}\n.ct-series-b .ct-point, .ct-series-b .ct-line, .ct-series-b .ct-bar, .ct-series-b .ct-slice-donut {\n  stroke: #f05b4f;\n}\n.ct-series-b .ct-slice-pie, .ct-series-b .ct-slice-donut-solid, .ct-series-b .ct-area {\n  fill: #f05b4f;\n}\n.ct-series-c .ct-point, .ct-series-c .ct-line, .ct-series-c .ct-bar, .ct-series-c .ct-slice-donut {\n  stroke: #f4c63d;\n}\n.ct-series-c .ct-slice-pie, .ct-series-c .ct-slice-donut-solid, .ct-series-c .ct-area {\n  fill: #f4c63d;\n}\n.ct-series-d .ct-point, .ct-series-d .ct-line, .ct-series-d .ct-bar, .ct-series-d .ct-slice-donut {\n  stroke: #d17905;\n}\n.ct-series-d .ct-slice-pie, .ct-series-d .ct-slice-donut-solid, .ct-series-d .ct-area {\n  fill: #d17905;\n}\n.ct-series-e .ct-point, .ct-series-e .ct-line, .ct-series-e .ct-bar, .ct-series-e .ct-slice-donut {\n  stroke: #453d3f;\n}\n.ct-series-e .ct-slice-pie, .ct-series-e .ct-slice-donut-solid, .ct-series-e .ct-area {\n  fill: #453d3f;\n}\n.ct-series-f .ct-point, .ct-series-f .ct-line, .ct-series-f .ct-bar, .ct-series-f .ct-slice-donut {\n  stroke: #59922b;\n}\n.ct-series-f .ct-slice-pie, .ct-series-f .ct-slice-donut-solid, .ct-series-f .ct-area {\n  fill: #59922b;\n}\n.ct-series-g .ct-point, .ct-series-g .ct-line, .ct-series-g .ct-bar, .ct-series-g .ct-slice-donut {\n  stroke: #0544d3;\n}\n.ct-series-g .ct-slice-pie, .ct-series-g .ct-slice-donut-solid, .ct-series-g .ct-area {\n  fill: #0544d3;\n}\n.ct-series-h .ct-point, .ct-series-h .ct-line, .ct-series-h .ct-bar, .ct-series-h .ct-slice-donut {\n  stroke: #6b0392;\n}\n.ct-series-h .ct-slice-pie, .ct-series-h .ct-slice-donut-solid, .ct-series-h .ct-area {\n  fill: #6b0392;\n}\n.ct-series-i .ct-point, .ct-series-i .ct-line, .ct-series-i .ct-bar, .ct-series-i .ct-slice-donut {\n  stroke: #f05b4f;\n}\n.ct-series-i .ct-slice-pie, .ct-series-i .ct-slice-donut-solid, .ct-series-i .ct-area {\n  fill: #f05b4f;\n}\n.ct-series-j .ct-point, .ct-series-j .ct-line, .ct-series-j .ct-bar, .ct-series-j .ct-slice-donut {\n  stroke: #dda458;\n}\n.ct-series-j .ct-slice-pie, .ct-series-j .ct-slice-donut-solid, .ct-series-j .ct-area {\n  fill: #dda458;\n}\n.ct-series-k .ct-point, .ct-series-k .ct-line, .ct-series-k .ct-bar, .ct-series-k .ct-slice-donut {\n  stroke: #eacf7d;\n}\n.ct-series-k .ct-slice-pie, .ct-series-k .ct-slice-donut-solid, .ct-series-k .ct-area {\n  fill: #eacf7d;\n}\n.ct-series-l .ct-point, .ct-series-l .ct-line, .ct-series-l .ct-bar, .ct-series-l .ct-slice-donut {\n  stroke: #86797d;\n}\n.ct-series-l .ct-slice-pie, .ct-series-l .ct-slice-donut-solid, .ct-series-l .ct-area {\n  fill: #86797d;\n}\n.ct-series-m .ct-point, .ct-series-m .ct-line, .ct-series-m .ct-bar, .ct-series-m .ct-slice-donut {\n  stroke: #b2c326;\n}\n.ct-series-m .ct-slice-pie, .ct-series-m .ct-slice-donut-solid, .ct-series-m .ct-area {\n  fill: #b2c326;\n}\n.ct-series-n .ct-point, .ct-series-n .ct-line, .ct-series-n .ct-bar, .ct-series-n .ct-slice-donut {\n  stroke: #6188e2;\n}\n.ct-series-n .ct-slice-pie, .ct-series-n .ct-slice-donut-solid, .ct-series-n .ct-area {\n  fill: #6188e2;\n}\n.ct-series-o .ct-point, .ct-series-o .ct-line, .ct-series-o .ct-bar, .ct-series-o .ct-slice-donut {\n  stroke: #a748ca;\n}\n.ct-series-o .ct-slice-pie, .ct-series-o .ct-slice-donut-solid, .ct-series-o .ct-area {\n  fill: #a748ca;\n}\n.ct-square {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-square:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 100%;\n}\n.ct-square:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-square > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-minor-second {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-minor-second:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 93.75%;\n}\n.ct-minor-second:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-minor-second > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-major-second {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-second:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 88.8888888889%;\n}\n.ct-major-second:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-major-second > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-minor-third {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-minor-third:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 83.3333333333%;\n}\n.ct-minor-third:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-minor-third > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-major-third {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-third:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 80%;\n}\n.ct-major-third:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-major-third > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-perfect-fourth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-perfect-fourth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 75%;\n}\n.ct-perfect-fourth:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-perfect-fourth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-perfect-fifth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-perfect-fifth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 66.6666666667%;\n}\n.ct-perfect-fifth:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-perfect-fifth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-minor-sixth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-minor-sixth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 62.5%;\n}\n.ct-minor-sixth:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-minor-sixth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-golden-section {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-golden-section:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 61.804697157%;\n}\n.ct-golden-section:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-golden-section > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-major-sixth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-sixth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 60%;\n}\n.ct-major-sixth:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-major-sixth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-minor-seventh {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-minor-seventh:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 56.25%;\n}\n.ct-minor-seventh:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-minor-seventh > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-major-seventh {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-seventh:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 53.3333333333%;\n}\n.ct-major-seventh:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-major-seventh > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-octave {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-octave:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 50%;\n}\n.ct-octave:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-octave > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-major-tenth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-tenth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 40%;\n}\n.ct-major-tenth:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-major-tenth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-major-eleventh {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-eleventh:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 37.5%;\n}\n.ct-major-eleventh:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-major-eleventh > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-major-twelfth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-twelfth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 33.3333333333%;\n}\n.ct-major-twelfth:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-major-twelfth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-double-octave {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-double-octave:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 25%;\n}\n.ct-double-octave:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-double-octave > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}", ""]);

// exports


/***/ }),

/***/ 1688:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1689);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(39)("4acb5dc1", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8737e860\",\"scoped\":true,\"hasInlineConfig\":true}!./index.css", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8737e860\",\"scoped\":true,\"hasInlineConfig\":true}!./index.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1689:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "\n.echart-sales[data-v-8737e860] {\n    width: 100%;\n    height: 300px;\n}\n.sales-data[data-v-8737e860] {\n    border-top: 1px solid #ccc;\n}\n.sales-data p[data-v-8737e860] {\n    color: #777;\n    padding-top: 15px;\n    margin: 0;\n}\n\n\n/*widget-1*/\n.swiper-widget[data-v-8737e860] {\n    min-height: 190px;\n    background: linear-gradient(to right,rgba(74, 207, 255, 0.18),#d9e8ff);\n    /*color:blue;     */\n}\n.swiper-widget .swiper-slide[data-v-8737e860] {\n    min-height: 140px;\n    color: #FFF;\n    font-size: 14px;\n    padding-top: 15px;\n    width: 100%;\n}\nh1[data-v-8737e860],h2[data-v-8737e860], h3[data-v-8737e860],h4[data-v-8737e860],h5[data-v-8737e860],h6[data-v-8737e860]{\ncolor: #525e67 !important;\n}\n\n/*weekly data chart*/\n.echarts[data-v-8737e860] {\n    width: 100%;\n    height: 150px;\n    margin: 10px 0;\n}\n.weekly-data p[data-v-8737e860] {\n    color: #555;\n    margin: 0;\n    border-top: 1px solid #ddd;\n    padding-top: 10px;\n}\n.sales-data[data-v-8737e860] {\n    border-top: 1px solid #ccc;\n}\n.sales-data p[data-v-8737e860] {\n    color: #777;\n    padding-top: 15px;\n    margin: 0;\n}\n.text-blue[data-v-8737e860]{\n    color:#2B85DA;\n    font-size: 18px;\n}\n/*visitors*/\n.visitors-details[data-v-8737e860] {\n    padding-top: 5px;\n}\n.trend-chart svg[data-v-8737e860] {\n    height: 85px;\n}\n@media screen and (min-width: 768px)and (max-width: 1199px) {\n.weekly-data p[data-v-8737e860] {\n        border-left: 1px solid #ddd;\n        border-top: 0;\n        padding-top: 15px;\n        padding-bottom: 15px;\n}\n.visitors-details[data-v-8737e860] {\n        padding-top: 22px;\n        padding-bottom: 22px;\n}\n}\n@media screen and (max-width: 575px) {\n.sales-data p[data-v-8737e860] {\n        padding-top: 7px;\n        padding-bottom: 7px;\n}\n}\n.widget_social_icons[data-v-8737e860]:hover {\n    cursor: pointer;\n    box-shadow: 3px 0 44px -6px #8e8c8e;\n}\n.bg-instagram[data-v-8737e860] {\n    background-color: #BD237A;\n    color: #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ 1690:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1691);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(39)("15fd0bf4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8737e860\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=2!./index2.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8737e860\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=2!./index2.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1691:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "\n.index1_swiper .swiper-pagination-bullet-active {\n    background: #fff !important;\n}\n.swiper-widget{\n  padding: 7px;\n}\n.sales-info{\n    color: #636c72;\n}\n.echarts{\n    height: 179px !important;\n}\n/*socio-tabs*/\n.socio-tabs {\n    min-height: 370px;\n    background-color:#f5f8fa;\n}\n.socio-tabs .tab-content {\n    min-height: 315px;\n}\n.socio-tabs .nav-item a {\n    padding: 15px 0;\n    text-align: center;\n}\n.socio-tabs .nav-tabs li:first-child a.active {\n    background-color: #55ACEE;\n}\n.socio-tabs .nav-tabs li:nth-child(2) a.active {\n    background-color: #3B5998;\n}\n.socio-tabs .nav-tabs li:last-child a.active {\n    background-color: #3F729B;\n}\n.socio-tabs .nav-tabs {\n    border-top: 3px solid #FFF;\n    border-bottom: 0;\n}\n.socio-tabs .nav-item {\n    width: 33.33%;\n}\n.socio-tabs .nav-tabs .nav-link,\n.socio-tabs .nav-tabs .nav-link:focus,\n.socio-tabs .nav-tabs .nav-link:hover {\n    border-color: #fff #fff #ddd;\n    font-size: 14px;\n    color: #777;\n}\n.socio-tabs .nav-tabs .nav-link.active,\n.socio-tabs .nav-tabs .nav-item.show .nav-link {\n    border-color: #fff #fff #ddd;\n    color: #FFF;\n}\n.tab-pane .card {\n    border-color: #FFF;\n    margin:3px 0 0 0;\n}\n.tab-pane .card-block {\n    padding: 12px;\n}\n.twitter .tweet-img {\n    width: 17%;\n}\n.twitter .tweet {\n    width: 83%;\n    padding-left: 3%;\n}\n.swiper-container{\n    margin-top: 22px;\n}\n.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{\n    bottom: 26px !important;\n}\na.prfl-link {\n    overflow: hidden;\n    display: block;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.twitter .tweet .options {\n    margin: 0;\n}\n.twitter .tweet .options i {\n    margin-left: 15px;\n    cursor: pointer;\n}\n.facebook .page-img,\n.instagram .page-img {\n    width: 17%;\n}\n.facebook .page-name,\n.instagram .page-name {\n    width: 83%;\n    padding-left: 3%;\n}\n.fb-friends{\n    overflow: hidden;\n}\n.fb-friends img {\n    width: 23%;\n    margin: 0 0 5px 2px;\n    cursor: pointer;\n}\n.fb-friends img:hover{\n    transform: scale(1.1,1.1);\n    transition: 300ms\n}\n.insta-pins .insta-img {\n    width: 49%;\n    margin: 0 1px;\n    float: left;\n    position: relative;\n}\n.insta-pins .insta-img img {\n    width: 100%;\n    height: 130px;\n}\n.insta-pins .insta-img .pic-credits {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    padding: 3px 7px;\n    color: #555;\n    background-color: rgba(255, 255, 255, .6);\n}\n.task1 {\n    padding-bottom: 20px!important;\n}\n.task1 .btn {\n    margin-right: 15px!important;\n}\n\n\n/*========chart============*/\n#annual-sales {\n    position: relative;\n    height: 260px;\n}\n#annual-sales .ct-grid {\n    stroke: rgba(0, 0, 0, .07);\n    stroke-width: 1px;\n    stroke-dasharray: 0;\n}\n#annual-sales .ct-label {\n    color: rgba(0, 0, 0, .7);\n    font-size: 1.1rem;\n}\n#annual-sales .ct-label.ct-horizontal.ct-end {\n    margin-left: -15px;\n}\n@media screen and (max-width:390px) {\n#annual-sales {\n        height: 200px;\n}\n#annual-sales .ct-label.ct-horizontal.ct-end {\n        transform: rotate(-45deg);\n}\n}\n#annual-sales .ct-series-a .ct-line,\n#annual-sales .ct-series-a .ct-point {\n    stroke: #4FC1E9;\n}\n#annual-sales .ct-series-b .ct-line,\n#annual-sales .ct-series-b .ct-point {\n    stroke: #09BD8F;\n}\n#annual-sales .ct-point {\n    stroke-width: 7px;\n    cursor: pointer;\n}\n#annual-sales .ct-series-a .ct-area {\n    fill: #BFBFC6;\n    fill-opacity: .05\n}\n#annual-sales .ct-series-b .ct-area {\n    fill: #4086C1;\n    fill-opacity: .05\n}\n#annual-sales .ct-line {\n    stroke-width: 1px\n}\n.chartist-tooltip {\n    background-color: #0a0a0a;\n    color: #FFF;\n    border-radius: 4px;\n}\n.chartist-tooltip:before,\n.chartist-tooltip:after {\n    content: none;\n}\n.nav-tabs:focus {\n    outline: none;\n}\n.icon_color {\n    color: #22b1e3;\n    font-size: 25px;\n}\n.circle_round{\n    font-size: 20px;\n}\n.circle_round1{\n    font-size: 22px;\n}\n.top_border1{\n    width:60px;\n    height:60px;\n    border-radius: 50%;\n    line-height: 4.1;\n    font-size: 15px;\n    color: #fff;\n    box-shadow:1px 1px 20px rgba(75, 156, 228, 0.88);\n}\n.top_border2{\n    width:60px;\n    height:60px;\n    border-radius: 50%;\n    line-height: 4.1;\n    font-size: 15px;\n    color: #fff;\n    box-shadow: 1px 1px 20px rgba(82, 162, 185, 0.86);\n}\n.top_border3{\n    width:60px;\n    height:60px;\n    border-radius: 50%;\n    line-height: 4.1;\n    font-size: 15px;\n    color: #fff;\n    box-shadow: 1px 1px 22px rgb(19, 191, 210);\n}\n.top_border4{\n    width:60px;\n    height:60px;\n    border-radius: 50%;\n    line-height: 4.1;\n    font-size: 15px;\n    color: #fff;\n    box-shadow:1px 1px 20px rgba(23, 96, 160, 0.89);\n}\n.bg_color1{\n    background-color: #4b9ce4;\n}\n.bg_color2{\n    background-color: #328ba7;\n}\n.bg_color3{\n    background-color: #13bfd2;\n}\n.bg_color4{\n    background-color: #1760a0;\n}\n.number_size{\n    font-size: 20px;\n    color: #646567;\n    margin-bottom: 0 !important;\n}\n.user_font{\n    font-size: 13px;\n    color: #646567;\n    margin-bottom: 0!important;\n}\n.m-t-10{\n    margin-top: 8px;\n}\n/*======chartist=========*/\n", ""]);

// exports


/***/ }),

/***/ 1692:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1693);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(39)("1b36a833", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8737e860\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=3!./index2.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8737e860\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=3!./index2.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1693:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "/*========================easy pie chart========================*/\n.easychart .chart[data-v-8737e860] {\n  margin: 2px auto;\n  position: relative;\n  display: inline-block;\n  text-align: center;\n}\n.easychart .circle_val[data-v-8737e860] {\n  display: block;\n  font-weight: normal;\n  color: #646a6f;\n  position: relative;\n}\n.easychart .percent[data-v-8737e860] {\n  display: inline-block;\n  z-index: 2;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n", ""]);

// exports


/***/ }),

/***/ 1694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_widgets_task_component_task_vue__ = __webpack_require__(1695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_widgets_task_component_task_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_widgets_task_component_task_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_widgets_chat_component_chat_vue__ = __webpack_require__(1700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_widgets_chat_component_chat_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_widgets_chat_component_chat_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_widgets_weather_weather_vue__ = __webpack_require__(1106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_widgets_weather_weather_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_widgets_weather_weather_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_echarts_v3_src_full_js__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_v_chartist__ = __webpack_require__(1117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_v_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_v_chartist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_zrender_lib_graphic_LinearGradient__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_zrender_lib_graphic_LinearGradient___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_zrender_lib_graphic_LinearGradient__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_awesome_swiper__ = __webpack_require__(843);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_awesome_swiper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vue_awesome_swiper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_components_plugins_scroll_vScroll_vue__ = __webpack_require__(997);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_components_plugins_scroll_vScroll_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_components_plugins_scroll_vScroll_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_assets_js_chat_data__ = __webpack_require__(1116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vuetrend__ = __webpack_require__(1706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_components_plugins_easypiechart_easyPieChart_vue__ = __webpack_require__(1707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_components_plugins_easypiechart_easyPieChart_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_components_plugins_easypiechart_easyPieChart_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//















__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_10_vuetrend__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_7_vue_awesome_swiper___default.a);
__webpack_require__(1713);

var unsub;
/* harmony default export */ __webpack_exports__["default"] = ({
    name: "index",
    components: {
        IEcharts: __WEBPACK_IMPORTED_MODULE_4_vue_echarts_v3_src_full_js__["default"],
        vScroll: __WEBPACK_IMPORTED_MODULE_8_components_plugins_scroll_vScroll_vue___default.a,
        easyPieChart: __WEBPACK_IMPORTED_MODULE_11_components_plugins_easypiechart_easyPieChart_vue___default.a,
        task: __WEBPACK_IMPORTED_MODULE_1_components_widgets_task_component_task_vue___default.a,
        chat: __WEBPACK_IMPORTED_MODULE_2_components_widgets_chat_component_chat_vue___default.a,
        weather: __WEBPACK_IMPORTED_MODULE_3_components_widgets_weather_weather_vue___default.a,
        VueChartist: __WEBPACK_IMPORTED_MODULE_5_v_chartist___default.a
    },
    data: function data() {
        return {
            tabindex: 0,
            //==task options
            list: [{
                tname: "Meeting",
                mark: true
            }, {
                tname: "Holiday",
                mark: true
            }, {
                tname: "Team Out",
                mark: false
            }, {
                tname: "Client Meeting",
                mark: true
            }, {
                tname: "Product Seminar",
                mark: false
            }, {
                tname: "Team Seminar",
                mark: true
            }],
            //==task options

            //==chat options
            chat: __WEBPACK_IMPORTED_MODULE_9_assets_js_chat_data__["a" /* default */],
            //==chat options
            // ========easypiechart

            val1: 80,
            val2: 95,
            val3: 70,
            val4: 85,
            // ========easypiechart
            swiperOption: {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                spaceBetween: 75,
                centeredSlides: true,
                autoplay: 2500,
                autoplayDisableOnInteraction: false,
                loop: false
            },
            instances: [],
            loading: false,
            // ===========main chat=============
            chartist1: {
                data: {
                    labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016'],
                    series: [[2, 8, 3, 7, 4, 6, 4], [5, 2, 6, 2, 7, 2, 6]]
                },
                options: {
                    top: 0,
                    low: 1,
                    showPoint: true,
                    fullWidth: true,
                    chartPadding: 30,
                    labelOffset: 50,
                    labelDirection: 'explode',
                    axisY: {
                        labelInterpolationFnc: function labelInterpolationFnc(value) {
                            return value / 1 + 'k';
                        }
                    },
                    showArea: true
                }
            },
            // ======area chart start================
            area_chart: {
                title: {
                    text: '',
                    subtext: ''
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    show: false,
                    data: ['A', 'B']
                },

                color: {
                    pattern: ['red', 'red']
                },
                calculable: true,
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: ['Jan', 'Mar', 'May', 'July', 'Sep', 'Nov', 'Dec']
                }],
                yAxis: [{
                    type: 'value'
                }],
                series: [{
                    name: 'A',
                    type: 'line',
                    smooth: true,
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                type: 'default',
                                color: '#E0EEF9'
                            },
                            lineStyle: {
                                color: "#E0EEF9"
                            }

                        }
                    },
                    data: [10, 180, 601, 54, 560, 230, 410]
                }, {
                    name: 'B',
                    type: 'line',
                    smooth: true,
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                type: 'default',
                                color: '#a1def4'
                            },
                            lineStyle: {
                                color: '#a1def4'
                            }
                        }
                    },
                    data: [90, 500, 234, 591, 290, 30, 10]
                }]
            },
            // =============area chart end==========
            line: {
                tooltip: {},
                grid: {
                    top: 10,
                    bottom: 35,
                    right: '7%'
                },
                xAxis: {
                    axisLine: {
                        lineStyle: {
                            color: '#188df0'
                        }
                    },
                    data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
                },
                yAxis: {
                    axisLine: {
                        lineStyle: {
                            color: '#188df0'
                        }
                    },
                    axisTick: {
                        show: true,
                        alignWithLabel: false,
                        interval: 'auto',
                        inside: false,
                        length: 5
                    }
                },
                series: [{
                    name: 'item 1',
                    type: 'line',
                    symbolSize: 5,
                    data: [8, 13, 10, 25, 20, 27, 38],
                    color: '#188df0'
                }, {
                    name: 'item 2',
                    type: 'line',
                    symbolSize: 5,
                    data: [11, 9, 6, 16, 19, 19, 33],
                    color: '#188df0'
                }]
            },

            trend: [0, 2, 5, 9, 5, 10, 3, 5, 0, 2, 9]
        };
    },


    methods: {
        onReady: function onReady(instance) {
            this.instances.push(instance);
        },

        // ===chart animation===
        update_chart: function update_chart() {
            var _this = this;

            setInterval(function () {
                for (var i = 0; i < _this.area_chart.series.length; i++) {
                    _this.area_chart.series[i].data.shift();
                    _this.area_chart.series[i].data.push(Math.floor(Math.random() * (1000 - 80) + 80 + 1));
                }
            }, 2000);
        }
    },
    watch: {
        tabindex: function tabindex() {
            var _this2 = this;

            setTimeout(function () {
                _this2.$refs.chartist.renderChart();
                _this2.instances.forEach(function (item, index) {
                    setTimeout(function () {
                        item.resize();
                    });
                });
            });
        }
    },
    mounted: function mounted() {
        var _this3 = this;

        unsub = this.$store.subscribe(function (mutation, state) {
            if (mutation.type == "left_menu") {
                _this3.instances.forEach(function (item, index) {
                    setTimeout(function () {
                        item.resize();
                    });
                });
                setTimeout(function () {
                    _this3.$refs.chartist.renderChart();
                    _this3.$refs.swiper.swiper.update();
                });
            }
        });
        this.update_chart();
        setInterval(function () {
            _this3.val1 = Math.floor(100 * Math.random());
            _this3.val2 = Math.floor(100 * Math.random());
            _this3.val3 = Math.floor(50 * Math.random());
            _this3.val4 = Math.floor(100 * Math.random());
        }, 3000);
    },
    beforeRouteLeave: function beforeRouteLeave(to, from, next) {
        unsub();
        next();
    }
});

/***/ }),

/***/ 1695:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1696)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1698)
/* template */
var __vue_template__ = __webpack_require__(1699)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/components/widgets/task_component/task.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5258a808", Component.options)
  } else {
    hotAPI.reload("data-v-5258a808", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1696:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1697);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(39)("002a2bc4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5258a808\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./task.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5258a808\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./task.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1697:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "\n.task_block {\n    border: 1px solid #e6e6e6;\n    padding: 10px 15px;\n    margin: 5px 0;\n    box-shadow: 0 0 7px #e6e6e6;\n}\n.task_block:hover {\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\n}\n.task_block1 {\n    padding: 0;\n}\n.task_input {\n    border-radius: 5px;\n    padding: 5px;\n    border-width: 1px;\n    width: 90%;\n}\n.task_block {\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n@media screen and (max-width: 575px) {\n.task_block1 input {\n        margin-left: -10px;\n}\n}\n.task_block i,\n.marker,\n.send-btn {\n    cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ 1698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugins_scroll_vScroll_vue__ = __webpack_require__(997);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugins_scroll_vScroll_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__plugins_scroll_vScroll_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    props: ["value"],
    components: {
        vScroll: __WEBPACK_IMPORTED_MODULE_0__plugins_scroll_vScroll_vue___default.a
    },
    mounted: function mounted() {
        var _this = this;

        this.value.forEach(function (item, index) {
            _this.$set(item, "edit", false);
        });
    },
    data: function data() {
        return {
            newtask: "",
            task_editing: []
        };
    },

    methods: {
        remove: function remove(item, index) {
            this.value.splice(index, 1);
        },
        edit: function edit(item, index) {
            item.edit = !item.edit;
            this.task_editing[index] = item.tname;
        },
        save: function save(item, index) {
            if (item.tname || item.tname.trim().length) {
                this.value[index].tname = item.tname;
            } else {
                item.tname = this.task_editing[index];
            }
            item.edit = false;
        },
        cancel: function cancel(item, index) {
            this.value[index].tname = this.task_editing[index];
            item.edit = false;
        },
        addtask: function addtask() {
            if (this.newtask.trim() != "") {
                this.value.push({
                    tname: this.newtask,
                    edit: false,
                    mark: false
                });
                this.$emit('input', this.value);
                this.newtask = "";
                this.$refs.task_scroller.scrolltobottom();
            }
        }
    }
});

/***/ }),

/***/ 1699:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-scroll",
        {
          ref: "task_scroller",
          attrs: { height: "300px", color: "#ccc", "bar-width": "3px" }
        },
        [
          _c(
            "ul",
            { staticClass: "task_block1" },
            _vm._l(_vm.value, function(item, index) {
              return _c("li", { key: index, staticClass: "task_block" }, [
                !item.edit
                  ? _c("div", [
                      _c(
                        "span",
                        {
                          staticClass: "marker",
                          on: {
                            click: function($event) {
                              item.mark = !item.mark
                            }
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-check",
                            class: {
                              "fa fa-check": item.mark,
                              "fa fa-times": !item.mark
                            }
                          })
                        ]
                      ),
                      _vm._v(
                        " " + _vm._s(item.tname) + "\n\n                    "
                      ),
                      _c("span", { staticClass: "float-right" }, [
                        _c("i", {
                          staticClass: "fa fa-pencil",
                          on: {
                            click: function($event) {
                              return _vm.edit(item, index)
                            }
                          }
                        }),
                        _vm._v(" | "),
                        _c("i", {
                          staticClass: "fa fa-trash text-danger",
                          on: {
                            click: function($event) {
                              return _vm.remove(item, index)
                            }
                          }
                        })
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                item.edit
                  ? _c("div", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: item.tname,
                            expression: "item.tname"
                          }
                        ],
                        attrs: { type: "text" },
                        domProps: { value: item.tname },
                        on: {
                          keyup: function($event) {
                            if (
                              !$event.type.indexOf("key") &&
                              _vm._k(
                                $event.keyCode,
                                "enter",
                                13,
                                $event.key,
                                "Enter"
                              )
                            ) {
                              return null
                            }
                            return _vm.save(item, index)
                          },
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(item, "tname", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "float-right " }, [
                        _c("i", {
                          staticClass: "fa fa-save",
                          on: {
                            click: function($event) {
                              return _vm.save(item, index)
                            }
                          }
                        }),
                        _vm._v(" | "),
                        _c("i", {
                          staticClass: "fa fa-times text-danger",
                          on: {
                            click: function($event) {
                              return _vm.cancel(item, index)
                            }
                          }
                        })
                      ])
                    ])
                  : _vm._e()
              ])
            }),
            0
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "input-group text-field" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.newtask,
              expression: "newtask"
            }
          ],
          staticClass: "ml-4 task_input form-control",
          attrs: { type: "text", placeholder: "New Task" },
          domProps: { value: _vm.newtask },
          on: {
            keyup: function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
              ) {
                return null
              }
              return _vm.addtask($event)
            },
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.newtask = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "input-group-btn" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-success send-btn",
              attrs: { type: "submit" },
              on: { click: _vm.addtask }
            },
            [
              _c("i", {
                staticClass: "fa fa-plus text-white",
                attrs: { "aria-hidden": "true" }
              })
            ]
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5258a808", module.exports)
  }
}

/***/ }),

/***/ 1700:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1701)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1704)
/* template */
var __vue_template__ = __webpack_require__(1705)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-473f1b9c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/components/widgets/chat_component/chat.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-473f1b9c", Component.options)
  } else {
    hotAPI.reload("data-v-473f1b9c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1701:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1702);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(39)("13f71964", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-473f1b9c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./chat.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-473f1b9c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./chat.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1702:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(836);
exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "/*==Transition code==*/\n.slide-fade-enter-active[data-v-473f1b9c] {\n  transition: all .3s ease;\n  position: absolute;\n}\n.slide-fade-leave-active[data-v-473f1b9c] {\n  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.slide-fade-enter[data-v-473f1b9c],\n.slide-fade-leave-to[data-v-473f1b9c] {\n  transform: translateX(-10px);\n  opacity: 0;\n  position: absolute;\n}\n\n/*==Transition code==*/\n.desc-img[data-v-473f1b9c] {\n  height: 40px;\n  width: 40px;\n}\n.chat_block[data-v-473f1b9c] {\n  border-bottom: 1px solid #f4f2f2;\n}\n.chatalign ul[data-v-473f1b9c] {\n  padding: 0;\n}\n.converstion_back[data-v-473f1b9c] {\n  background-image: url(" + escape(__webpack_require__(1703)) + ");\n  overflow: hidden;\n  background-color: #0a001f;\n}\n.converstion_back ul[data-v-473f1b9c] {\n  padding: 0;\n}\n.sent > div[data-v-473f1b9c] {\n  text-align: right;\n}\n.sent > div p[data-v-473f1b9c] {\n    background-color: #fff;\n    border-radius: 3px;\n    display: inline-block;\n    padding: 5px 10px;\n    position: relative;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.sent > div p .msg_time[data-v-473f1b9c] {\n      font-size: 10px;\n}\n.received > div[data-v-473f1b9c] {\n  text-align: left;\n}\n.received > div > p[data-v-473f1b9c] {\n    background-color: #dbf2fa;\n    border-radius: 3px;\n    display: inline-block;\n    padding: 5px 10px;\n    position: relative;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.received > div > p .msg_time[data-v-473f1b9c] {\n      font-size: 10px;\n}\n.converstion_back > .chat_header[data-v-473f1b9c] {\n  background-color: #7388c6;\n  padding: 4px;\n  font-size: 20px;\n  font-weight: 500;\n}\n.chat_input[data-v-473f1b9c] {\n  padding: 5px;\n  border: none;\n  width: 100%;\n}\n.chat_content[data-v-473f1b9c] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n", ""]);

// exports


/***/ }),

/***/ 1703:
/***/ (function(module, exports) {

module.exports = "/Educ/public/images/brick-wall.png?effad1520fc39d8897385d7004d2dbf4";

/***/ }),

/***/ 1704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugins_scroll_vScroll_vue__ = __webpack_require__(997);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugins_scroll_vScroll_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__plugins_scroll_vScroll_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        list: {
            default: []
        },
        height: {
            default: "auto"
        }
    },
    components: {
        vScroll: __WEBPACK_IMPORTED_MODULE_0__plugins_scroll_vScroll_vue___default.a
    },
    mounted: function mounted() {},
    data: function data() {
        return {
            view: "user",
            newmessage: "",
            selected_user_index: 0
        };
    },

    methods: {
        send_message: function send_message() {
            if (this.newmessage.trim() != "") {
                this.list[this.selected_user_index].messages.push({
                    msg: this.newmessage,
                    from: "me"
                });
                this.newmessage = "";
                this.$refs.message_scroller.scrolltobottom();
            }
        },
        show_chat: function show_chat(user, index) {
            var _this = this;

            this.selected_user_index = index;
            this.view = "chat";
            setTimeout(function () {
                _this.$refs.input.focus();
            }, 20);
        }
    }
});

/***/ }),

/***/ 1705:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { style: { height: _vm.height + "px" } },
    [
      _c("transition", { attrs: { name: "slide-fade", mode: "in-out" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.view == "chat",
                expression: "view=='chat'"
              }
            ],
            staticClass: "converstion_back"
          },
          [
            _c("div", { staticClass: "chat_header " }, [
              _c(
                "a",
                {
                  attrs: { href: "" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.view = "user"
                    }
                  }
                },
                [_c("i", { staticClass: "fa fa-arrow-left text-white pl-2" })]
              ),
              _c("span", { staticClass: "pl-4" }, [
                _c("img", {
                  staticClass: "img-fluid rounded-circle desc-img ",
                  attrs: { src: _vm.list[_vm.selected_user_index].image }
                })
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "pl-3 text-white" }, [
                _vm._v(_vm._s(_vm.list[_vm.selected_user_index].user))
              ]),
              _vm._v(" "),
              _c("i", {
                staticClass: "fa fa-bars text-white pr-4  mt-3 pull-right"
              })
            ]),
            _vm._v(" "),
            _c(
              "v-scroll",
              {
                ref: "message_scroller",
                attrs: {
                  height: _vm.height - 79 + "px",
                  color: "#ccc",
                  "bar-width": "3px"
                }
              },
              [
                _c(
                  "ul",
                  _vm._l(_vm.list[_vm.selected_user_index].messages, function(
                    item,
                    index
                  ) {
                    return _c(
                      "li",
                      {
                        key: index,
                        class: [
                          { sent: item.from == "me" },
                          { received: item.from !== "me" }
                        ]
                      },
                      [
                        _c("div", [
                          _c("p", [
                            _vm._v(_vm._s(item.msg) + " "),
                            _c("span", { staticClass: "msg_time" }, [
                              _vm._v(_vm._s(item.time))
                            ])
                          ])
                        ])
                      ]
                    )
                  }),
                  0
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "input-group text-field" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.newmessage,
                    expression: "newmessage"
                  }
                ],
                ref: "input",
                staticClass: "chat_input form-control",
                attrs: { type: "text", placeholder: "New Message" },
                domProps: { value: _vm.newmessage },
                on: {
                  keyup: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.send_message($event)
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.newmessage = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "input-group-btn" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success send-btn",
                    attrs: { type: "submit" },
                    on: { click: _vm.send_message }
                  },
                  [
                    _c("i", {
                      staticClass: "fa fa-paper-plane-o text-white",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                )
              ])
            ])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "slide-fade", mode: "in-out" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.view == "user",
                expression: "view=='user'"
              }
            ],
            staticClass: "chatalign"
          },
          [
            _c(
              "v-scroll",
              {
                attrs: {
                  height: _vm.height + "px",
                  color: "#ccc",
                  "bar-width": "3px"
                }
              },
              [
                _c(
                  "ul",
                  _vm._l(_vm.list, function(user, index) {
                    return _c("li", { staticClass: "chat_block" }, [
                      _c(
                        "a",
                        {
                          attrs: { href: user.user },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.show_chat(user, index)
                            }
                          }
                        },
                        [
                          _c("article", { staticClass: "media" }, [
                            _c(
                              "a",
                              { staticClass: "float-left desc-img mt-3" },
                              [
                                _c("img", {
                                  staticClass: "img-fluid rounded-circle",
                                  attrs: { src: user.image }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "media-body pl-3 mb-1 mt-3 chat_content"
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "c-head text-success ",
                                    attrs: { href: "javascript:void(0)" }
                                  },
                                  [_vm._v(_vm._s(user.user))]
                                ),
                                _vm._v(" "),
                                _c("p", { staticClass: "text-muted" }, [
                                  _c("span", [_vm._v(_vm._s(user.status))])
                                ])
                              ]
                            )
                          ])
                        ]
                      )
                    ])
                  }),
                  0
                )
              ]
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-473f1b9c", module.exports)
  }
}

/***/ }),

/***/ 1706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function int (value) {
  return parseInt(value, 10)
}

/**
 * https://en.wikipedia.org/wiki/Collinearity
 * x=(x1+x2)/2
 * y=(y1+y2)/2
 */
function checkCollinear (p0, p1, p2) {
  return int(p0.x + p2.x) === int(2 * p1.x) && int(p0.y + p2.y) === int(2 * p1.y)
}

function getDistance (p1, p2) {
  return Math.sqrt(
    Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)
  )
}

function moveTo (to, from, radius) {
  var vector = { x: to.x - from.x, y: to.y - from.y };
  var length = Math.sqrt((vector.x * vector.x) + (vector.y * vector.y));
  var unitVector = { x: vector.x / length, y: vector.y / length };

  return {
    x: from.x + unitVector.x * radius,
    y: from.y + unitVector.y * radius
  }
}

/**
 *  Calculate the coordinate
 * @param  {number[]|object[]}  arr
 * @param  {object}             boundary
 * @return {object[]}
 */
function genPoints (arr, ref) {
  var minX = ref.minX;
  var minY = ref.minY;
  var maxX = ref.maxX;
  var maxY = ref.maxY;

  arr = arr.map(function (item) { return typeof item === 'number' ? item : item.value; });
  var minValue = Math.min.apply(Math, arr) - 0.001;
  var gridX = (maxX - minX) / (arr.length - 1);
  var gridY = (maxY - minY) / (Math.max.apply(Math, arr) + 0.001 - minValue);

  return arr.map(function (value, index) {
    return { x: index * gridX + minX, y: maxY - (value - minValue) * gridY + +(index == (arr.length - 1)) * 0.00001 - +(index == 0) * 0.00001 }
  })
}

function linearPath (points) {
  var ref = points.shift();
  var x = ref.x;
  var y = ref.y;

  return "M" + x + " " + y + points.map(function (ref) {
    var x = ref.x;
    var y = ref.y;

    return ("L" + x + " " + y);
  }).join('')
}

/**
 * From https://github.com/unsplash/react-trend/blob/master/src/helpers/DOM.helpers.js#L18
 */
function smoothPath (points, radius) {
  var start = points.shift();

  return "M" + (start.x) + " " + (start.y) + points.map(function (point, index) {
    var next = points[index + 1];
    var prev = points[index - 1] || start;
    var isCollinear = next && checkCollinear(next, point, prev);

    if (!next || isCollinear) {
      return ("L" + (point.x) + " " + (point.y))
    }

    var threshold = Math.min(getDistance(prev, point), getDistance(next, point));
    var isTooCloseForRadius = (threshold / 2) < radius;
    var radiusForPoint = isTooCloseForRadius ? threshold / 2 : radius;

    var before = moveTo(prev, point, radiusForPoint);
    var after = moveTo(next, point, radiusForPoint);

    return ("L" + (before.x) + " " + (before.y) + "S" + (point.x) + " " + (point.y) + " " + (after.x) + " " + (after.y))
  }).join('')
}

var Path = {
  props: ['smooth', 'data', 'boundary', 'radius', 'id'],

  render: function render (h) {
    var points = genPoints(this.data, this.boundary);
    var d = (this.smooth ? smoothPath : linearPath)(points, this.radius);

    return h('path', {
      attrs: { d: d, fill: 'none', stroke: ("url(#" + (this.id) + ")") }
    })
  }
};

var Gradient = {
  props: ['gradient', 'id'],

  render: function render (h) {
    var ref = this;
    var gradient = ref.gradient;
    var id = ref.id;
    var len = gradient.length - 1;
    var stops = gradient.slice().reverse().map(function (color, index) { return h('stop', {
        attrs: {
          offset: index / len,
          'stop-color': color
        }
      }); }
    );

    return h('defs', [
      h('linearGradient', {
        attrs: {
          id: id,
          x1: 0, y1: 0,
          x2: 0, y2: 1
        }
      }, stops)
    ])
  }
};

function injectStyle (css) {
  // http://stackoverflow.com/questions/524696/how-to-create-a-style-tag-with-javascript
  var tag = document.createElement('style');
  var head = document.head || document.getElementsByTagName('head')[0];

  tag.type = 'text/css';
  head.appendChild(tag);
  tag.appendChild(document.createTextNode(css));

  return tag
}

var Trend$1 = {
  name: 'Trend',

  props: {
    data: {
      type: Array,
      required: true
    },
    autoDraw: Boolean,
    autoDrawDuration: {
      type: Number,
      default: 2000
    },
    autoDrawEasing: {
      type: String,
      default: 'ease'
    },
    gradient: Array,
    height: Number,
    width: Number,
    padding: {
      type: Number,
      default: 8
    },
    radius: {
      type: Number,
      default: 10
    },
    smooth: Boolean
  },

  destroyed: function destroyed () {
    this.removeStyle();
  },

  methods: {
    addStyle: function addStyle () {
      this.removeStyle();
      var len = this.$refs.path.$el.getTotalLength();
      var ref = this;
      var pathId = ref.pathId;
      var autoDrawDuration = ref.autoDrawDuration;
      var autoDrawEasing = ref.autoDrawEasing;
      var autoDraw = ref.autoDraw;

      if (!autoDraw) {
        return
      }

      this.styleEl = injectStyle(("\n@keyframes " + pathId + "-autodraw {\n  0% {\n  stroke-dashoffset: " + len + ";\n  stroke-dasharray: " + len + ";\n}\n100% {\n  stroke-dashoffset: 0;\n  stroke-dasharray: " + len + ";\n}\n100% {\n  stroke-dashoffset: '';\n  stroke-dasharray: '';\n}\n}\n@keyframes " + pathId + "-autodraw-cleanup {\nto {\n  stroke-dashoffset: '';\n  stroke-dasharray: '';\n  }\n}\n#" + pathId + " {\nanimation:\n  " + pathId + "-autodraw " + autoDrawDuration + "ms " + autoDrawEasing + ",\n  " + pathId + "-autodraw-cleanup 1ms " + autoDrawDuration + "ms;\n}"));
    },

    removeStyle: function removeStyle () {
      this.styleEl && this.styleEl.remove();
    }
  },

  watch: {
    data: {
      immediate: true,
      handler: function handler (val) {
        if (!val || val.length < 2) { return }
        this.$nextTick(this.addStyle);
      }
    }
  },

  render: function render (h) {
    if (!this.data || this.data.length < 2) { return }
    var ref = this;
    var width = ref.width;
    var height = ref.height;
    var padding = ref.padding;
    var viewWidth = width || 300;
    var viewHeight = height || 75;
    var boundary = {
      minX: padding, minY: padding,
      maxX: viewWidth - padding, maxY: viewHeight - padding
    };
    var props = this.$props;

    props.boundary = boundary;
    props.id = 'vue-trend-' + this._uid;
    this.pathId = props.id + '-path';

    return h('svg', {
      attrs: {
        stroke: 'black',
        'stroke-width': '1',
        width: width || '100%',
        height: height || '25%',
        viewBox: ("0 0 " + viewWidth + " " + viewHeight)
      }
    }, [
      h(Gradient, { props: props }),
      h(Path, {
        props: props,
        attrs: { id: this.pathId },
        ref: 'path'
      })
    ])
  }
};

Trend$1.install = function (Vue) {
  Vue.component(Trend$1.name, Trend$1);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Trend$1);
}

/* harmony default export */ __webpack_exports__["a"] = (Trend$1);


/***/ }),

/***/ 1707:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1708)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1710)
/* template */
var __vue_template__ = __webpack_require__(1712)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8f2f7e6a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/components/plugins/easypiechart/easyPieChart.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8f2f7e6a", Component.options)
  } else {
    hotAPI.reload("data-v-8f2f7e6a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1708:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1709);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(39)("6327b8fd", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8f2f7e6a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./easyPieChart.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8f2f7e6a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./easyPieChart.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1709:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
//
//
//
//
//


var EasyPieChart = __webpack_require__(1711);
/* harmony default export */ __webpack_exports__["default"] = ({
    name: "easyPieChart",
    // ===Props passed to component
    props: {
        percent: {
            required: true,
            default: 0
        },
        barColor: {},
        trackColor: {},
        scaleColor: {},
        scaleLength: {},
        lineCap: {},
        lineWidth: {},
        size: {},
        rotate: {},
        animate: {},
        easing: {}
    },
    // ===Code to be executed when Component is mounted
    mounted: function mounted() {
        this.chart = new EasyPieChart(this.$refs.pie, {
            barColor: this.barColor,
            trackColor: this.trackColor,
            scaleColor: this.scaleColor,
            scaleLength: this.scaleLength,
            lineCap: this.lineCap,
            lineWidth: this.lineWidth,
            size: this.size,
            rotate: this.rotate,
            animate: this.animate,
            easing: this.easing
        });
    },

    watch: {
        percent: function percent() {
            this.chart.update(this.percent);
        }
    },
    // ===Component data
    data: function data() {
        return {
            chart: ""
        };
    },

    // ===Component methods
    methods: {}
});

/***/ }),

/***/ 1711:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**!
 * easy-pie-chart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license 
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.7
 **/
!function(a,b){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return a.EasyPieChart=b()}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?module.exports=b():a.EasyPieChart=b()}(this,function(){var a=function(a,b){var c,d=document.createElement("canvas");a.appendChild(d),"object"==typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(d);var e=d.getContext("2d");d.width=d.height=b.size;var f=1;window.devicePixelRatio>1&&(f=window.devicePixelRatio,d.style.width=d.style.height=[b.size,"px"].join(""),d.width=d.height=b.size*f,e.scale(f,f)),e.translate(b.size/2,b.size/2),e.rotate((-0.5+b.rotate/180)*Math.PI);var g=(b.size-b.lineWidth)/2;b.scaleColor&&b.scaleLength&&(g-=b.scaleLength+2),Date.now=Date.now||function(){return+new Date};var h=function(a,b,c){c=Math.min(Math.max(-1,c||0),1);var d=0>=c?!0:!1;e.beginPath(),e.arc(0,0,g,0,2*Math.PI*c,d),e.strokeStyle=a,e.lineWidth=b,e.stroke()},i=function(){var a,c;e.lineWidth=1,e.fillStyle=b.scaleColor,e.save();for(var d=24;d>0;--d)d%6===0?(c=b.scaleLength,a=0):(c=.6*b.scaleLength,a=b.scaleLength-c),e.fillRect(-b.size/2+a,0,c,1),e.rotate(Math.PI/12);e.restore()},j=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}(),k=function(){b.scaleColor&&i(),b.trackColor&&h(b.trackColor,b.trackWidth||b.lineWidth,1)};this.getCanvas=function(){return d},this.getCtx=function(){return e},this.clear=function(){e.clearRect(b.size/-2,b.size/-2,b.size,b.size)},this.draw=function(a){b.scaleColor||b.trackColor?e.getImageData&&e.putImageData?c?e.putImageData(c,0,0):(k(),c=e.getImageData(0,0,b.size*f,b.size*f)):(this.clear(),k()):this.clear(),e.lineCap=b.lineCap;var d;d="function"==typeof b.barColor?b.barColor(a):b.barColor,h(d,b.lineWidth,a/100)}.bind(this),this.animate=function(a,c){var d=Date.now();b.onStart(a,c);var e=function(){var f=Math.min(Date.now()-d,b.animate.duration),g=b.easing(this,f,a,c-a,b.animate.duration);this.draw(g),b.onStep(a,c,g),f>=b.animate.duration?b.onStop(a,c):j(e)}.bind(this);j(e)}.bind(this)},b=function(b,c){var d={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(a,b,c,d,e){return b/=e/2,1>b?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},onStart:function(a,b){},onStep:function(a,b,c){},onStop:function(a,b){}};if("undefined"!=typeof a)d.renderer=a;else{if("undefined"==typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");d.renderer=SVGRenderer}var e={},f=0,g=function(){this.el=b,this.options=e;for(var a in d)d.hasOwnProperty(a)&&(e[a]=c&&"undefined"!=typeof c[a]?c[a]:d[a],"function"==typeof e[a]&&(e[a]=e[a].bind(this)));"string"==typeof e.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[e.easing])?e.easing=jQuery.easing[e.easing]:e.easing=d.easing,"number"==typeof e.animate&&(e.animate={duration:e.animate,enabled:!0}),"boolean"!=typeof e.animate||e.animate||(e.animate={duration:1e3,enabled:e.animate}),this.renderer=new e.renderer(b,e),this.renderer.draw(f),b.dataset&&b.dataset.percent?this.update(parseFloat(b.dataset.percent)):b.getAttribute&&b.getAttribute("data-percent")&&this.update(parseFloat(b.getAttribute("data-percent")))}.bind(this);this.update=function(a){return a=parseFloat(a),e.animate.enabled?this.renderer.animate(f,a):this.renderer.draw(a),f=a,this}.bind(this),this.disableAnimation=function(){return e.animate.enabled=!1,this},this.enableAnimation=function(){return e.animate.enabled=!0,this},g()};return b});

/***/ }),

/***/ 1712:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "span",
    {
      ref: "pie",
      staticClass: "chart",
      attrs: { "data-percent": _vm.percent }
    },
    [_c("span", { staticClass: "percent" }, [_vm._t("default")], 2)]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8f2f7e6a", module.exports)
  }
}

/***/ }),

/***/ 1713:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1714);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(803)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js!./swiper.css", function() {
			var newContent = require("!!../../../css-loader/index.js!./swiper.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1714:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "/**\n * Swiper 4.5.1\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * http://www.idangero.us/swiper/\n *\n * Copyright 2014-2019 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: September 13, 2019\n */\n.swiper-container {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n}\n.swiper-container-no-flexbox .swiper-slide {\n  float: left;\n}\n.swiper-container-vertical > .swiper-wrapper {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  -o-transition-property: transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n}\n.swiper-container-android .swiper-slide,\n.swiper-wrapper {\n  -webkit-transform: translate3d(0px, 0, 0);\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-container-multirow > .swiper-wrapper {\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n.swiper-container-free-mode > .swiper-wrapper {\n  -webkit-transition-timing-function: ease-out;\n  -o-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n  margin: 0 auto;\n}\n.swiper-slide {\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  -o-transition-property: transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n/* Auto Height */\n.swiper-container-autoheight,\n.swiper-container-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-container-autoheight .swiper-wrapper {\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  -webkit-transition-property: height, -webkit-transform;\n  transition-property: height, -webkit-transform;\n  -o-transition-property: transform, height;\n  transition-property: transform, height;\n  transition-property: transform, height, -webkit-transform;\n}\n/* 3D Effects */\n.swiper-container-3d {\n  -webkit-perspective: 1200px;\n  perspective: 1200px;\n}\n.swiper-container-3d .swiper-wrapper,\n.swiper-container-3d .swiper-slide,\n.swiper-container-3d .swiper-slide-shadow-left,\n.swiper-container-3d .swiper-slide-shadow-right,\n.swiper-container-3d .swiper-slide-shadow-top,\n.swiper-container-3d .swiper-slide-shadow-bottom,\n.swiper-container-3d .swiper-cube-shadow {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n}\n.swiper-container-3d .swiper-slide-shadow-left,\n.swiper-container-3d .swiper-slide-shadow-right,\n.swiper-container-3d .swiper-slide-shadow-top,\n.swiper-container-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-container-3d .swiper-slide-shadow-left {\n  background-image: -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));\n  background-image: -webkit-linear-gradient(right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: -o-linear-gradient(right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d .swiper-slide-shadow-right {\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d .swiper-slide-shadow-top {\n  background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));\n  background-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: -o-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d .swiper-slide-shadow-bottom {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));\n  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: -o-linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n/* IE10 Windows Phone 8 Fixes */\n.swiper-container-wp8-horizontal,\n.swiper-container-wp8-horizontal > .swiper-wrapper {\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n}\n.swiper-container-wp8-vertical,\n.swiper-container-wp8-vertical > .swiper-wrapper {\n  -ms-touch-action: pan-x;\n  touch-action: pan-x;\n}\n.swiper-button-prev,\n.swiper-button-next {\n  position: absolute;\n  top: 50%;\n  width: 27px;\n  height: 44px;\n  margin-top: -22px;\n  z-index: 10;\n  cursor: pointer;\n  background-size: 27px 44px;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.swiper-button-prev.swiper-button-disabled,\n.swiper-button-next.swiper-button-disabled {\n  opacity: 0.35;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-button-prev,\n.swiper-container-rtl .swiper-button-next {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");\n  left: 10px;\n  right: auto;\n}\n.swiper-button-next,\n.swiper-container-rtl .swiper-button-prev {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");\n  right: 10px;\n  left: auto;\n}\n.swiper-button-prev.swiper-button-white,\n.swiper-container-rtl .swiper-button-next.swiper-button-white {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\");\n}\n.swiper-button-next.swiper-button-white,\n.swiper-container-rtl .swiper-button-prev.swiper-button-white {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\");\n}\n.swiper-button-prev.swiper-button-black,\n.swiper-container-rtl .swiper-button-next.swiper-button-black {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\");\n}\n.swiper-button-next.swiper-button-black,\n.swiper-container-rtl .swiper-button-prev.swiper-button-black {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\");\n}\n.swiper-button-lock {\n  display: none;\n}\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  -webkit-transition: 300ms opacity;\n  -o-transition: 300ms opacity;\n  transition: 300ms opacity;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n.swiper-pagination.swiper-pagination-hidden {\n  opacity: 0;\n}\n/* Common Styles */\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-container-horizontal > .swiper-pagination-bullets {\n  bottom: 10px;\n  left: 0;\n  width: 100%;\n}\n/* Bullets */\n.swiper-pagination-bullets-dynamic {\n  overflow: hidden;\n  font-size: 0;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  -webkit-transform: scale(0.33);\n  -ms-transform: scale(0.33);\n  transform: scale(0.33);\n  position: relative;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\n  -webkit-transform: scale(0.66);\n  -ms-transform: scale(0.66);\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {\n  -webkit-transform: scale(0.33);\n  -ms-transform: scale(0.33);\n  transform: scale(0.33);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n  -webkit-transform: scale(0.66);\n  -ms-transform: scale(0.66);\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\n  -webkit-transform: scale(0.33);\n  -ms-transform: scale(0.33);\n  transform: scale(0.33);\n}\n.swiper-pagination-bullet {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 100%;\n  background: #000;\n  opacity: 0.2;\n}\nbutton.swiper-pagination-bullet {\n  border: none;\n  margin: 0;\n  padding: 0;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.swiper-pagination-clickable .swiper-pagination-bullet {\n  cursor: pointer;\n}\n.swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #007aff;\n}\n.swiper-container-vertical > .swiper-pagination-bullets {\n  right: 10px;\n  top: 50%;\n  -webkit-transform: translate3d(0px, -50%, 0);\n  transform: translate3d(0px, -50%, 0);\n}\n.swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 6px 0;\n  display: block;\n}\n.swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n  width: 8px;\n}\n.swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  display: inline-block;\n  -webkit-transition: 200ms top, 200ms -webkit-transform;\n  transition: 200ms top, 200ms -webkit-transform;\n  -o-transition: 200ms transform, 200ms top;\n  transition: 200ms transform, 200ms top;\n  transition: 200ms transform, 200ms top, 200ms -webkit-transform;\n}\n.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 4px;\n}\n.swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n.swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  -webkit-transition: 200ms left, 200ms -webkit-transform;\n  transition: 200ms left, 200ms -webkit-transform;\n  -o-transition: 200ms transform, 200ms left;\n  transition: 200ms transform, 200ms left;\n  transition: 200ms transform, 200ms left, 200ms -webkit-transform;\n}\n.swiper-container-horizontal.swiper-container-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  -webkit-transition: 200ms right, 200ms -webkit-transform;\n  transition: 200ms right, 200ms -webkit-transform;\n  -o-transition: 200ms transform, 200ms right;\n  transition: 200ms transform, 200ms right;\n  transition: 200ms transform, 200ms right, 200ms -webkit-transform;\n}\n/* Progress */\n.swiper-pagination-progressbar {\n  background: rgba(0, 0, 0, 0.25);\n  position: absolute;\n}\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: #007aff;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-transform: scale(0);\n  -ms-transform: scale(0);\n  transform: scale(0);\n  -webkit-transform-origin: left top;\n  -ms-transform-origin: left top;\n  transform-origin: left top;\n}\n.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  -webkit-transform-origin: right top;\n  -ms-transform-origin: right top;\n  transform-origin: right top;\n}\n.swiper-container-horizontal > .swiper-pagination-progressbar,\n.swiper-container-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {\n  width: 100%;\n  height: 4px;\n  left: 0;\n  top: 0;\n}\n.swiper-container-vertical > .swiper-pagination-progressbar,\n.swiper-container-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {\n  width: 4px;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.swiper-pagination-white .swiper-pagination-bullet-active {\n  background: #ffffff;\n}\n.swiper-pagination-progressbar.swiper-pagination-white {\n  background: rgba(255, 255, 255, 0.25);\n}\n.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill {\n  background: #ffffff;\n}\n.swiper-pagination-black .swiper-pagination-bullet-active {\n  background: #000000;\n}\n.swiper-pagination-progressbar.swiper-pagination-black {\n  background: rgba(0, 0, 0, 0.25);\n}\n.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill {\n  background: #000000;\n}\n.swiper-pagination-lock {\n  display: none;\n}\n/* Scrollbar */\n.swiper-scrollbar {\n  border-radius: 10px;\n  position: relative;\n  -ms-touch-action: none;\n  background: rgba(0, 0, 0, 0.1);\n}\n.swiper-container-horizontal > .swiper-scrollbar {\n  position: absolute;\n  left: 1%;\n  bottom: 3px;\n  z-index: 50;\n  height: 5px;\n  width: 98%;\n}\n.swiper-container-vertical > .swiper-scrollbar {\n  position: absolute;\n  right: 3px;\n  top: 1%;\n  z-index: 50;\n  width: 5px;\n  height: 98%;\n}\n.swiper-scrollbar-drag {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  left: 0;\n  top: 0;\n}\n.swiper-scrollbar-cursor-drag {\n  cursor: move;\n}\n.swiper-scrollbar-lock {\n  display: none;\n}\n.swiper-zoom-container {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  text-align: center;\n}\n.swiper-zoom-container > img,\n.swiper-zoom-container > svg,\n.swiper-zoom-container > canvas {\n  max-width: 100%;\n  max-height: 100%;\n  -o-object-fit: contain;\n  object-fit: contain;\n}\n.swiper-slide-zoomed {\n  cursor: move;\n}\n/* Preloader */\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  -webkit-transform-origin: 50%;\n  -ms-transform-origin: 50%;\n  transform-origin: 50%;\n  -webkit-animation: swiper-preloader-spin 1s steps(12, end) infinite;\n  animation: swiper-preloader-spin 1s steps(12, end) infinite;\n}\n.swiper-lazy-preloader:after {\n  display: block;\n  content: '';\n  width: 100%;\n  height: 100%;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n  background-position: 50%;\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n.swiper-lazy-preloader-white:after {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n}\n@-webkit-keyframes swiper-preloader-spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes swiper-preloader-spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n/* a11y */\n.swiper-container .swiper-notification {\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  opacity: 0;\n  z-index: -1000;\n}\n.swiper-container-fade.swiper-container-free-mode .swiper-slide {\n  -webkit-transition-timing-function: ease-out;\n  -o-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.swiper-container-fade .swiper-slide {\n  pointer-events: none;\n  -webkit-transition-property: opacity;\n  -o-transition-property: opacity;\n  transition-property: opacity;\n}\n.swiper-container-fade .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-container-fade .swiper-slide-active,\n.swiper-container-fade .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-container-cube {\n  overflow: visible;\n}\n.swiper-container-cube .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 1;\n  visibility: hidden;\n  -webkit-transform-origin: 0 0;\n  -ms-transform-origin: 0 0;\n  transform-origin: 0 0;\n  width: 100%;\n  height: 100%;\n}\n.swiper-container-cube .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-container-cube.swiper-container-rtl .swiper-slide {\n  -webkit-transform-origin: 100% 0;\n  -ms-transform-origin: 100% 0;\n  transform-origin: 100% 0;\n}\n.swiper-container-cube .swiper-slide-active,\n.swiper-container-cube .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-container-cube .swiper-slide-active,\n.swiper-container-cube .swiper-slide-next,\n.swiper-container-cube .swiper-slide-prev,\n.swiper-container-cube .swiper-slide-next + .swiper-slide {\n  pointer-events: auto;\n  visibility: visible;\n}\n.swiper-container-cube .swiper-slide-shadow-top,\n.swiper-container-cube .swiper-slide-shadow-bottom,\n.swiper-container-cube .swiper-slide-shadow-left,\n.swiper-container-cube .swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.swiper-container-cube .swiper-cube-shadow {\n  position: absolute;\n  left: 0;\n  bottom: 0px;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0.6;\n  -webkit-filter: blur(50px);\n  filter: blur(50px);\n  z-index: 0;\n}\n.swiper-container-flip {\n  overflow: visible;\n}\n.swiper-container-flip .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 1;\n}\n.swiper-container-flip .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-container-flip .swiper-slide-active,\n.swiper-container-flip .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-container-flip .swiper-slide-shadow-top,\n.swiper-container-flip .swiper-slide-shadow-bottom,\n.swiper-container-flip .swiper-slide-shadow-left,\n.swiper-container-flip .swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.swiper-container-coverflow .swiper-wrapper {\n  /* Windows 8 IE 10 fix */\n  -ms-perspective: 1200px;\n}\n", ""]);

// exports


/***/ }),

/***/ 1715:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-xl-3 col-lg-6 col-sm-6 text-center" },
        [
          _c(
            "b-card",
            { attrs: { claass: "bg-default-card easy_pie_chart1" } },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12 mb-3 mt-3" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-4 p-t-10 push-1" }, [
                      _c("div", { staticClass: "top_border1 bg_color1" }, [
                        _c("i", { staticClass: "fa fa-user-o circle_round" })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-8 m-t-10" }, [
                      _c("p", { staticClass: "user_font" }, [_vm._v("Users")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "number_size" }, [
                        _vm._v("5,445+")
                      ])
                    ])
                  ])
                ])
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-xl-3 col-lg-6 col-sm-6 text-center" },
        [
          _c(
            "b-card",
            { attrs: { claass: "bg-default-card easy_pie_chart1" } },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12 mb-3 mt-3" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-4 p-t-10 push-1" }, [
                      _c("div", { staticClass: "top_border2 bg_color2" }, [
                        _c("i", { staticClass: "fa fa-eye circle_round1" })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-8 m-t-10" }, [
                      _c("p", { staticClass: "user_font" }, [_vm._v("Views")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "number_size" }, [
                        _vm._v("2,402+")
                      ])
                    ])
                  ])
                ])
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-xl-3 col-lg-6  col-sm-6 text-center" },
        [
          _c(
            "b-card",
            { attrs: { claass: "bg-default-card easy_pie_chart1" } },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12 mb-3 mt-3" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-4 p-t-10 push-1" }, [
                      _c("div", { staticClass: "top_border3 bg_color3" }, [
                        _c("i", {
                          staticClass: "fa fa-thumbs-o-up circle_round1"
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-8 m-t-10" }, [
                      _c("p", { staticClass: "user_font" }, [_vm._v("Likes")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "number_size" }, [
                        _vm._v("1,897+")
                      ])
                    ])
                  ])
                ])
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-xl-3 col-lg-6 col-sm-6 text-center" },
        [
          _c(
            "b-card",
            { attrs: { claass: "bg-default-card easy_pie_chart1" } },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12 mb-3 mt-3" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-4 p-t-10 push-1" }, [
                      _c("div", { staticClass: "top_border4 bg_color4" }, [
                        _c("i", {
                          staticClass: "fa fa-line-chart circle_round"
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-8 m-t-10" }, [
                      _c("p", { staticClass: "user_font" }, [_vm._v("Sales")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "number_size" }, [_vm._v("575+")])
                    ])
                  ])
                ])
              ])
            ]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-xl-8 col-lg-12" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-default-card",
              attrs: { header: "Annual Stats", "header-tag": "h4" }
            },
            [
              _c(
                "b-tabs",
                {
                  model: {
                    value: _vm.tabindex,
                    callback: function($$v) {
                      _vm.tabindex = $$v
                    },
                    expression: "tabindex"
                  }
                },
                [
                  _c(
                    "b-tab",
                    { staticClass: "sales_text", attrs: { title: "Sales" } },
                    [
                      _c(
                        "div",
                        { staticStyle: { height: "320px" } },
                        [
                          _c("IEcharts", {
                            ref: "areachart",
                            attrs: {
                              option: _vm.area_chart,
                              loading: _vm.loading
                            },
                            on: { ready: _vm.onReady }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-tab",
                    { staticClass: "sales_text", attrs: { title: "Products" } },
                    [
                      _c("vue-chartist", {
                        ref: "chartist",
                        attrs: {
                          data: _vm.chartist1.data,
                          options: _vm.chartist1.options,
                          type: "Line",
                          id: "annual-sales"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "row text-center mt-2" }, [
                _c("div", { staticClass: "col-sm-3 col-6" }, [
                  _c("p", [
                    _vm._v("CPU load\n                            "),
                    _c("br"),
                    _vm._v(" "),
                    _c("b", [_vm._v("5.4")])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-3 col-6" }, [
                  _c("p", [
                    _vm._v("Memory used\n                            "),
                    _c("br"),
                    _vm._v(" "),
                    _c("b", [_vm._v("3.5 GB")])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-3 col-6" }, [
                  _c("p", [
                    _vm._v("Disk usage\n                            "),
                    _c("br"),
                    _vm._v(" "),
                    _c("b", [_vm._v("84 GB")])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-3 col-6" }, [
                  _c("p", [
                    _vm._v("Bandwidth used\n                            "),
                    _c("br"),
                    _vm._v(" "),
                    _c("b", [_vm._v("37 GB")])
                  ])
                ])
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-xl-4 col-lg-12" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-12 col-lg-6 col-xl-12" },
            [
              _c(
                "b-card",
                {
                  staticClass: "bg-default-card",
                  attrs: { header: "Site Visits", "header-tag": "h4" }
                },
                [
                  _c("div", { staticClass: "row text-center" }, [
                    _c("div", { staticClass: "col-6 visitors-details" }, [
                      _c("p", [_vm._v("Server Loading")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-12 trend-chart" },
                      [
                        _c("trend", {
                          attrs: {
                            data: _vm.trend,
                            "stroke-width": 3,
                            gradient: ["#1ba3d6", "#1ba3d6", "#cfeef9"],
                            "auto-draw": "",
                            smooth: ""
                          }
                        })
                      ],
                      1
                    )
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xl-12  col-lg-6 index1_swiper" },
            [
              _c(
                "b-card",
                { attrs: { header: "Quotations", "header-tag": "h4" } },
                [
                  _c(
                    "div",
                    { staticClass: "swiper-widget text-center" },
                    [
                      _c(
                        "swiper",
                        { ref: "swiper", attrs: { options: _vm.swiperOption } },
                        [
                          _c("swiper-slide", [
                            _c("p", { staticClass: "text-blue" }, [
                              _c("i", [
                                _vm._v(
                                  "Lorem Ipsum is simply dummy text of the printing typesetting."
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("swiper-slide", [
                            _c("p", { staticClass: "text-blue" }, [
                              _c("i", [
                                _vm._v(
                                  "It is a long established fact that a reader will bing at its ."
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("swiper-slide", [
                            _c("p", { staticClass: "text-blue" }, [
                              _c("i", [
                                _vm._v(
                                  "There are many variations of passages of Loremd alteration."
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("swiper-slide", [
                            _c("p", { staticClass: "text-blue" }, [
                              _c("i", [
                                _vm._v(
                                  "Contrary to popular belief, Lorem literature from 45 BC,  2000 years."
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("swiper-slide", [
                            _c("p", { staticClass: "text-blue" }, [
                              _c("i", [
                                _vm._v(
                                  "I must explain to you how iorn and I will give you a complete accoun."
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", {
                            staticClass: "swiper-pagination",
                            attrs: { slot: "pagination" },
                            slot: "pagination"
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-xl-4 col-sm-6" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-default-card",
              attrs: { header: "Weekly Sales", "header-tag": "h4" }
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12" }, [
                  _c("p", { staticClass: "sales-info" }, [
                    _vm._v(
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda corporis cumque eos minima. Alias assumenda corporis cumque eos minima. Alias assumenda corporis cumque eos minima."
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12" }, [
                  _c(
                    "div",
                    { staticClass: "echarts" },
                    [
                      _c("IEcharts", {
                        attrs: { option: _vm.line, loading: _vm.loading },
                        on: { ready: _vm.onReady }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-6 text-center weekly-data" },
                      [
                        _c("p", [
                          _vm._v(
                            "Target\n                                    "
                          ),
                          _c("br"),
                          _vm._v(" "),
                          _c("b", [_vm._v("904")])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-6 text-center weekly-data" },
                      [
                        _c("p", [
                          _vm._v(
                            "Reached\n                                    "
                          ),
                          _c("br"),
                          _vm._v(" "),
                          _c("b", [_vm._v("654")])
                        ])
                      ]
                    )
                  ])
                ])
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-xl-4 col-sm-6" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-default-card task1",
              attrs: { header: "Task", "header-tag": "h4", "no-block": "" }
            },
            [
              _c("task", {
                model: {
                  value: _vm.list,
                  callback: function($$v) {
                    _vm.list = $$v
                  },
                  expression: "list"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-xl-4 col-sm-6" },
        [
          _c(
            "b-card",
            { attrs: { "no-block": "" } },
            [
              _c(
                "b-tabs",
                { staticClass: "socio-tabs", attrs: { bottom: "" } },
                [
                  _c(
                    "b-tab",
                    {
                      staticClass: "twitter",
                      attrs: { title: "Twitter", active: "" }
                    },
                    [
                      _c("b-card", [
                        _c("div", { staticClass: "tweet-img float-left" }, [
                          _c("img", {
                            staticClass: "img-fluid rounded-circle",
                            attrs: {
                              src: __webpack_require__(972),
                              alt: "profile image"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "tweet float-left" }, [
                          _c("p", [
                            _c("strong", [_vm._v("Vincent Porter")]),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("a", { attrs: { href: "javascript:void(0)" } }, [
                              _vm._v(" @Importer")
                            ]),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass:
                                  "btn btn-info btn-sm float-right text-white"
                              },
                              [_vm._v("Follow")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "Lorem ipsum dolor sit amet, consec adipisicing elit.\n                                    "
                            ),
                            _c(
                              "a",
                              {
                                staticClass: "prfl-link",
                                attrs: { href: "javascript:void(0)" }
                              },
                              [_vm._v("https://www.google.co.in/df565gf")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "options" }, [
                            _c("span", { staticClass: "text-muted" }, [
                              _vm._v("2h")
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "float-right" }, [
                              _c("i", {
                                staticClass: "fa fa-share-square-o text-info",
                                attrs: { "aria-hidden": "true" }
                              }),
                              _vm._v(" "),
                              _c("i", {
                                staticClass: "fa fa-heart text-info",
                                attrs: { "aria-hidden": "true" }
                              }),
                              _vm._v(" "),
                              _c("i", {
                                staticClass: "fa fa-chain-broken text-info",
                                attrs: { "aria-hidden": "true" }
                              }),
                              _vm._v(" "),
                              _c("i", {
                                staticClass: "fa fa-comment-o text-info",
                                attrs: { "aria-hidden": "true" }
                              })
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("b-card", [
                        _c("div", { staticClass: "tweet-img float-left" }, [
                          _c("img", {
                            staticClass: "img-fluid rounded-circle",
                            attrs: {
                              src: __webpack_require__(971),
                              alt: "profile image"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "tweet float-left" }, [
                          _c("p", [
                            _c("strong", [_vm._v(" Wark Peter ")]),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("a", { attrs: { href: "javascript:void(0)" } }, [
                              _vm._v(" @Importer")
                            ]),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass:
                                  "btn btn-info btn-sm float-right text-white"
                              },
                              [_vm._v("Follow")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "Lorem ipsum dolor sit amet, consec adipisicing elit.\n                                    "
                            ),
                            _c(
                              "a",
                              {
                                staticClass: "prfl-link",
                                attrs: { href: "javascript:void(0)" }
                              },
                              [_vm._v("https://www.google.co.in/etre5gf")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "options" }, [
                            _c("span", { staticClass: "text-muted" }, [
                              _vm._v("2h")
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "float-right" }, [
                              _c("i", {
                                staticClass: "fa fa-share-square-o text-info",
                                attrs: { "aria-hidden": "true" }
                              }),
                              _vm._v(" "),
                              _c("i", {
                                staticClass: "fa fa-heart text-info",
                                attrs: { "aria-hidden": "true" }
                              }),
                              _vm._v(" "),
                              _c("i", {
                                staticClass: "fa fa-chain-broken text-info",
                                attrs: { "aria-hidden": "true" }
                              }),
                              _vm._v(" "),
                              _c("i", {
                                staticClass: "fa fa-comment-o text-info",
                                attrs: { "aria-hidden": "true" }
                              })
                            ])
                          ])
                        ])
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-tab",
                    { staticClass: "facebook", attrs: { title: "Facebook" } },
                    [
                      _c("b-card", [
                        _c("div", { staticClass: "page-img float-left" }, [
                          _c("img", {
                            staticClass: "img-fluid rounded-circle",
                            attrs: {
                              src: __webpack_require__(979),
                              alt: "profile image"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "page-name float-left" }, [
                          _c("p", [
                            _c("strong", [_vm._v("Vincent Porter")]),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("a", { attrs: { href: "javascript:void(0)" } }, [
                              _vm._v(" @Importer")
                            ]),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass:
                                  "btn btn-primary btn-sm float-right text-white"
                              },
                              [_vm._v("Follow")]
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("b-card", [
                        _c("p", [
                          _c("a", { attrs: { href: "javascript:void(0)" } }, [
                            _vm._v("Carter Kenn")
                          ]),
                          _vm._v(" and 142 people like this.")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "fb-friends" }, [
                          _c("img", {
                            staticClass: "img-fluid",
                            attrs: {
                              src: __webpack_require__(1006),
                              title: "Carter",
                              alt: "images"
                            }
                          }),
                          _vm._v(" "),
                          _c("img", {
                            staticClass: "img-fluid",
                            attrs: {
                              src: __webpack_require__(972),
                              title: "Mike",
                              alt: "images"
                            }
                          }),
                          _vm._v(" "),
                          _c("img", {
                            staticClass: "img-fluid",
                            attrs: {
                              src: __webpack_require__(971),
                              title: "Tyler",
                              alt: "images"
                            }
                          }),
                          _vm._v(" "),
                          _c("img", {
                            staticClass: "img-fluid",
                            attrs: {
                              src: __webpack_require__(979),
                              title: "harper",
                              alt: "images"
                            }
                          }),
                          _vm._v(" "),
                          _c("img", {
                            staticClass: "img-fluid",
                            attrs: {
                              src: __webpack_require__(990),
                              title: "Colleen",
                              alt: "images"
                            }
                          }),
                          _vm._v(" "),
                          _c("img", {
                            staticClass: "img-fluid",
                            attrs: {
                              src: __webpack_require__(1012),
                              title: "Logan",
                              alt: "images"
                            }
                          }),
                          _vm._v(" "),
                          _c("img", {
                            staticClass: "img-fluid",
                            attrs: {
                              src: __webpack_require__(1716),
                              title: "kaylee",
                              alt: "images"
                            }
                          }),
                          _vm._v(" "),
                          _c("img", {
                            staticClass: "img-fluid",
                            attrs: {
                              src: __webpack_require__(1043),
                              title: "Dixon",
                              alt: "images"
                            }
                          }),
                          _vm._v(" "),
                          _c("img", {
                            staticClass: "img-fluid",
                            attrs: {
                              src: __webpack_require__(1717),
                              title: "Wallace",
                              alt: "images"
                            }
                          }),
                          _vm._v(" "),
                          _c("img", {
                            staticClass: "img-fluid",
                            attrs: {
                              src: __webpack_require__(979),
                              title: "rogers",
                              alt: "images"
                            }
                          }),
                          _vm._v(" "),
                          _c("img", {
                            staticClass: "img-fluid",
                            attrs: {
                              src: __webpack_require__(972),
                              title: "Bowman",
                              alt: "images"
                            }
                          }),
                          _vm._v(" "),
                          _c("img", {
                            staticClass: "img-fluid",
                            attrs: {
                              src: __webpack_require__(971),
                              title: "Donald",
                              alt: "images"
                            }
                          })
                        ])
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-tab",
                    { staticClass: "instagram", attrs: { title: "Instagram" } },
                    [
                      _c("b-card", [
                        _c("div", { staticClass: "page-img float-left" }, [
                          _c("img", {
                            staticClass: "img-fluid rounded-circle",
                            attrs: {
                              src: __webpack_require__(990),
                              alt: "profile image"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "page-name float-left" }, [
                          _c("p", [
                            _c("strong", [_vm._v("Vincent Porter")]),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("a", { attrs: { href: "javascript:void(0)" } }, [
                              _vm._v(" @Importer")
                            ]),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass:
                                  "btn btn-primary btn-sm float-right text-white"
                              },
                              [_vm._v("Follow")]
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("b-card", [
                        _c(
                          "div",
                          { staticClass: "insta-pins" },
                          [
                            _c(
                              "v-scroll",
                              {
                                attrs: {
                                  height: "260px",
                                  color: "#ccc",
                                  "bar-width": "3px"
                                }
                              },
                              [
                                _c("div", { staticClass: "insta-img" }, [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src: __webpack_require__(1006),
                                      title: "Carter",
                                      alt: "images"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "pic-credits" }, [
                                    _c(
                                      "span",
                                      { staticClass: "text-primary" },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "fa fa-clock-o text-info",
                                          attrs: { "aria-hidden": "true" }
                                        }),
                                        _vm._v(" 4m")
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass: "float-right text-primary"
                                      },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "fa fa-heart-o text-danger",
                                          attrs: { "aria-hidden": "true" }
                                        }),
                                        _vm._v(" 257")
                                      ]
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "insta-img" }, [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src: __webpack_require__(972),
                                      title: "Mike",
                                      alt: "images"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "pic-credits" }, [
                                    _c(
                                      "span",
                                      { staticClass: "text-primary" },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "fa fa-clock-o text-primary",
                                          attrs: { "aria-hidden": "true" }
                                        }),
                                        _vm._v(" 4m")
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass: "float-right text-primary"
                                      },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "fa fa-heart-o text-danger",
                                          attrs: { "aria-hidden": "true" }
                                        }),
                                        _vm._v(" 257")
                                      ]
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "insta-img" }, [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src: __webpack_require__(971),
                                      title: "Tyler",
                                      alt: "images"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "pic-credits" }, [
                                    _c(
                                      "span",
                                      { staticClass: "text-primary" },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "fa fa-clock-o text-primary",
                                          attrs: { "aria-hidden": "true" }
                                        }),
                                        _vm._v(" 4m")
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass: "float-right text-primary"
                                      },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "fa fa-heart-o text-danger",
                                          attrs: { "aria-hidden": "true" }
                                        }),
                                        _vm._v(" 257")
                                      ]
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "insta-img" }, [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src: __webpack_require__(979),
                                      title: "harper",
                                      alt: "images"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "pic-credits" }, [
                                    _c(
                                      "span",
                                      { staticClass: "text-primary" },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "fa fa-clock-o text-primary",
                                          attrs: { "aria-hidden": "true" }
                                        }),
                                        _vm._v(" 4m")
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass: "float-right text-primary"
                                      },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "fa fa-heart-o text-danger",
                                          attrs: { "aria-hidden": "true" }
                                        }),
                                        _vm._v(" 257")
                                      ]
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "insta-img" }, [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src: __webpack_require__(990),
                                      title: "Colleen",
                                      alt: "images"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "pic-credits" }, [
                                    _c(
                                      "span",
                                      { staticClass: "text-primary" },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "fa fa-clock-o text-primary",
                                          attrs: { "aria-hidden": "true" }
                                        }),
                                        _vm._v(" 4m")
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass: "float-right text-primary"
                                      },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "fa fa-heart-o text-danger",
                                          attrs: { "aria-hidden": "true" }
                                        }),
                                        _vm._v(" 257")
                                      ]
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "insta-img" }, [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src: __webpack_require__(1012),
                                      title: "Logan",
                                      alt: "images"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "pic-credits" }, [
                                    _c(
                                      "span",
                                      { staticClass: "text-primary" },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "fa fa-clock-o text-primary",
                                          attrs: { "aria-hidden": "true" }
                                        }),
                                        _vm._v(" 4m")
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass: "float-right text-primary"
                                      },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "fa fa-heart-o text-danger",
                                          attrs: { "aria-hidden": "true" }
                                        }),
                                        _vm._v(" 257")
                                      ]
                                    )
                                  ])
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-xl-4 col-md-6" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-default-card",
              attrs: { header: "Chat", "header-tag": "h4", "no-block": "" }
            },
            [
              _c("chat", {
                staticClass: "chat",
                attrs: { list: _vm.chat, height: "315" }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-xl-8 col-md-12" },
        [_c("weather", { attrs: { id: "5128638" } })],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8737e860", module.exports)
  }
}

/***/ }),

/***/ 1716:
/***/ (function(module, exports) {

module.exports = "/Educ/public/images/avatar7.jpg?611f91d558e9e15ce5a00443a4d3948f";

/***/ }),

/***/ 1717:
/***/ (function(module, exports) {

module.exports = "/Educ/public/images/user.jpg?4654b410ebe5facf35599d04fbe33621";

/***/ }),

/***/ 789:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1686)
  __webpack_require__(1688)
  __webpack_require__(1690)
  __webpack_require__(1692)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1694)
/* template */
var __vue_template__ = __webpack_require__(1715)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8737e860"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/components/pages/index2.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8737e860", Component.options)
  } else {
    hotAPI.reload("data-v-8737e860", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(804);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 804:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 836:
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ 843:
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(844)):"function"==typeof define&&define.amd?define("VueAwesomeSwiper",["swiper"],t):"object"==typeof exports?exports.VueAwesomeSwiper=t(require("swiper/dist/js/swiper.js")):e.VueAwesomeSwiper=t(e.Swiper)}(this,function(e){return function(e){function t(i){if(n[i])return n[i].exports;var s=n[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=4)}([function(t,n){t.exports=e},function(e,t){e.exports=function(e,t,n,i,s,r){var o,a=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(o=e,a=e.default);var p="function"==typeof a?a.options:a;t&&(p.render=t.render,p.staticRenderFns=t.staticRenderFns,p._compiled=!0),n&&(p.functional=!0),s&&(p._scopeId=s);var l;if(r?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},p._ssrRegister=l):i&&(l=i),l){var c=p.functional,d=c?p.render:p.beforeCreate;c?(p._injectStyles=l,p.render=function(e,t){return l.call(t),d(e,t)}):p.beforeCreate=d?[].concat(d,l):[l]}return{esModule:o,exports:a,options:p}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),s=n.n(i),r=n(8),o=n(1),a=o(s.a,r.a,!1,null,null,null);t.default=a.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(6),s=n.n(i),r=n(7),o=n(1),a=o(s.a,r.a,!1,null,null,null);t.default=a.exports},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.install=t.swiperSlide=t.swiper=t.Swiper=void 0;var s=n(0),r=i(s),o=n(2),a=i(o),u=n(3),p=i(u),l=window.Swiper||r.default,c=p.default,d=a.default,f=function(e,t){t&&(p.default.props.globalOptions.default=function(){return t}),e.component(p.default.name,p.default),e.component(a.default.name,a.default)},h={Swiper:l,swiper:c,swiperSlide:d,install:f};t.default=h,t.Swiper=l,t.swiper=c,t.swiperSlide=d,t.install=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent&&this.$parent.options&&this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.update()}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),s=function(e){return e&&e.__esModule?e:{default:e}}(i),r=window.Swiper||s.default;"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),i=1;i<arguments.length;i++){var s=arguments[i];if(null!=s)for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r])}return n},writable:!0,configurable:!0});var o=["beforeDestroy","slideChange","slideChangeTransitionStart","slideChangeTransitionEnd","slideNextTransitionStart","slideNextTransitionEnd","slidePrevTransitionStart","slidePrevTransitionEnd","transitionStart","transitionEnd","touchStart","touchMove","touchMoveOpposite","sliderMove","touchEnd","click","tap","doubleTap","imagesReady","progress","reachBeginning","reachEnd","fromEdge","setTranslate","setTransition","resize"];t.default={name:"swiper",props:{options:{type:Object,default:function(){return{}}},globalOptions:{type:Object,required:!1,default:function(){return{}}}},data:function(){return{swiper:null,classes:{wrapperClass:"swiper-wrapper"}}},ready:function(){this.swiper||this.mountInstance()},mounted:function(){if(!this.swiper){var e=!1;for(var t in this.classes)this.classes.hasOwnProperty(t)&&this.options[t]&&(e=!0,this.classes[t]=this.options[t]);e?this.$nextTick(this.mountInstance):this.mountInstance()}},activated:function(){this.update()},updated:function(){this.update()},beforeDestroy:function(){this.$nextTick(function(){this.swiper&&(this.swiper.destroy&&this.swiper.destroy(),delete this.swiper)})},methods:{update:function(){this.swiper&&(this.swiper.update&&this.swiper.update(),this.swiper.navigation&&this.swiper.navigation.update(),this.swiper.pagination&&this.swiper.pagination.render(),this.swiper.pagination&&this.swiper.pagination.update())},mountInstance:function(){var e=Object.assign({},this.globalOptions,this.options);this.swiper=new r(this.$el,e),this.bindEvents(),this.$emit("ready",this.swiper)},bindEvents:function(){var e=this,t=this;o.forEach(function(n){e.swiper.on(n,function(){t.$emit.apply(t,[n].concat(Array.prototype.slice.call(arguments))),t.$emit.apply(t,[n.replace(/([A-Z])/g,"-$1").toLowerCase()].concat(Array.prototype.slice.call(arguments)))})})}}}},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"swiper-container"},[e._t("parallax-bg"),e._v(" "),n("div",{class:e.classes.wrapperClass},[e._t("default")],2),e._v(" "),e._t("pagination"),e._v(" "),e._t("button-prev"),e._v(" "),e._t("button-next"),e._v(" "),e._t("scrollbar")],2)},s=[],r={render:i,staticRenderFns:s};t.a=r},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.slideClass},[e._t("default")],2)},s=[],r={render:i,staticRenderFns:s};t.a=r}])});

/***/ }),

/***/ 844:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Swiper 4.5.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2019 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 13, 2019
 */

(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Swiper = factory());
}(this, function () { 'use strict';

  /**
   * SSR Window 1.0.1
   * Better handling for window object in SSR environment
   * https://github.com/nolimits4web/ssr-window
   *
   * Copyright 2018, Vladimir Kharlampidi
   *
   * Licensed under MIT
   *
   * Released on: July 18, 2018
   */
  var doc = (typeof document === 'undefined') ? {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: '',
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {},
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        },
      };
    },
    location: { hash: '' },
  } : document; // eslint-disable-line

  var win = (typeof window === 'undefined') ? {
    document: doc,
    navigator: {
      userAgent: '',
    },
    location: {},
    history: {},
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return '';
        },
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
  } : window; // eslint-disable-line

  /**
   * Dom7 2.1.3
   * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
   * http://framework7.io/docs/dom.html
   *
   * Copyright 2019, Vladimir Kharlampidi
   * The iDangero.us
   * http://www.idangero.us/
   *
   * Licensed under MIT
   *
   * Released on: February 11, 2019
   */

  var Dom7 = function Dom7(arr) {
    var self = this;
    // Create array-like object
    for (var i = 0; i < arr.length; i += 1) {
      self[i] = arr[i];
    }
    self.length = arr.length;
    // Return collection with methods
    return this;
  };

  function $(selector, context) {
    var arr = [];
    var i = 0;
    if (selector && !context) {
      if (selector instanceof Dom7) {
        return selector;
      }
    }
    if (selector) {
        // String
      if (typeof selector === 'string') {
        var els;
        var tempParent;
        var html = selector.trim();
        if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
          var toCreate = 'div';
          if (html.indexOf('<li') === 0) { toCreate = 'ul'; }
          if (html.indexOf('<tr') === 0) { toCreate = 'tbody'; }
          if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) { toCreate = 'tr'; }
          if (html.indexOf('<tbody') === 0) { toCreate = 'table'; }
          if (html.indexOf('<option') === 0) { toCreate = 'select'; }
          tempParent = doc.createElement(toCreate);
          tempParent.innerHTML = html;
          for (i = 0; i < tempParent.childNodes.length; i += 1) {
            arr.push(tempParent.childNodes[i]);
          }
        } else {
          if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
            // Pure ID selector
            els = [doc.getElementById(selector.trim().split('#')[1])];
          } else {
            // Other selectors
            els = (context || doc).querySelectorAll(selector.trim());
          }
          for (i = 0; i < els.length; i += 1) {
            if (els[i]) { arr.push(els[i]); }
          }
        }
      } else if (selector.nodeType || selector === win || selector === doc) {
        // Node/element
        arr.push(selector);
      } else if (selector.length > 0 && selector[0].nodeType) {
        // Array of elements or instance of Dom
        for (i = 0; i < selector.length; i += 1) {
          arr.push(selector[i]);
        }
      }
    }
    return new Dom7(arr);
  }

  $.fn = Dom7.prototype;
  $.Class = Dom7;
  $.Dom7 = Dom7;

  function unique(arr) {
    var uniqueArray = [];
    for (var i = 0; i < arr.length; i += 1) {
      if (uniqueArray.indexOf(arr[i]) === -1) { uniqueArray.push(arr[i]); }
    }
    return uniqueArray;
  }

  // Classes and attributes
  function addClass(className) {
    if (typeof className === 'undefined') {
      return this;
    }
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.add(classes[i]); }
      }
    }
    return this;
  }
  function removeClass(className) {
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.remove(classes[i]); }
      }
    }
    return this;
  }
  function hasClass(className) {
    if (!this[0]) { return false; }
    return this[0].classList.contains(className);
  }
  function toggleClass(className) {
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.toggle(classes[i]); }
      }
    }
    return this;
  }
  function attr(attrs, value) {
    var arguments$1 = arguments;

    if (arguments.length === 1 && typeof attrs === 'string') {
      // Get attr
      if (this[0]) { return this[0].getAttribute(attrs); }
      return undefined;
    }

    // Set attrs
    for (var i = 0; i < this.length; i += 1) {
      if (arguments$1.length === 2) {
        // String
        this[i].setAttribute(attrs, value);
      } else {
        // Object
        // eslint-disable-next-line
        for (var attrName in attrs) {
          this[i][attrName] = attrs[attrName];
          this[i].setAttribute(attrName, attrs[attrName]);
        }
      }
    }
    return this;
  }
  // eslint-disable-next-line
  function removeAttr(attr) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].removeAttribute(attr);
    }
    return this;
  }
  function data(key, value) {
    var el;
    if (typeof value === 'undefined') {
      el = this[0];
      // Get value
      if (el) {
        if (el.dom7ElementDataStorage && (key in el.dom7ElementDataStorage)) {
          return el.dom7ElementDataStorage[key];
        }

        var dataKey = el.getAttribute(("data-" + key));
        if (dataKey) {
          return dataKey;
        }
        return undefined;
      }
      return undefined;
    }

    // Set value
    for (var i = 0; i < this.length; i += 1) {
      el = this[i];
      if (!el.dom7ElementDataStorage) { el.dom7ElementDataStorage = {}; }
      el.dom7ElementDataStorage[key] = value;
    }
    return this;
  }
  // Transforms
  // eslint-disable-next-line
  function transform(transform) {
    for (var i = 0; i < this.length; i += 1) {
      var elStyle = this[i].style;
      elStyle.webkitTransform = transform;
      elStyle.transform = transform;
    }
    return this;
  }
  function transition(duration) {
    if (typeof duration !== 'string') {
      duration = duration + "ms"; // eslint-disable-line
    }
    for (var i = 0; i < this.length; i += 1) {
      var elStyle = this[i].style;
      elStyle.webkitTransitionDuration = duration;
      elStyle.transitionDuration = duration;
    }
    return this;
  }
  // Events
  function on() {
    var assign;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
    var eventType = args[0];
    var targetSelector = args[1];
    var listener = args[2];
    var capture = args[3];
    if (typeof args[1] === 'function') {
      (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
      targetSelector = undefined;
    }
    if (!capture) { capture = false; }

    function handleLiveEvent(e) {
      var target = e.target;
      if (!target) { return; }
      var eventData = e.target.dom7EventData || [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      if ($(target).is(targetSelector)) { listener.apply(target, eventData); }
      else {
        var parents = $(target).parents(); // eslint-disable-line
        for (var k = 0; k < parents.length; k += 1) {
          if ($(parents[k]).is(targetSelector)) { listener.apply(parents[k], eventData); }
        }
      }
    }
    function handleEvent(e) {
      var eventData = e && e.target ? e.target.dom7EventData || [] : [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      listener.apply(this, eventData);
    }
    var events = eventType.split(' ');
    var j;
    for (var i = 0; i < this.length; i += 1) {
      var el = this[i];
      if (!targetSelector) {
        for (j = 0; j < events.length; j += 1) {
          var event = events[j];
          if (!el.dom7Listeners) { el.dom7Listeners = {}; }
          if (!el.dom7Listeners[event]) { el.dom7Listeners[event] = []; }
          el.dom7Listeners[event].push({
            listener: listener,
            proxyListener: handleEvent,
          });
          el.addEventListener(event, handleEvent, capture);
        }
      } else {
        // Live events
        for (j = 0; j < events.length; j += 1) {
          var event$1 = events[j];
          if (!el.dom7LiveListeners) { el.dom7LiveListeners = {}; }
          if (!el.dom7LiveListeners[event$1]) { el.dom7LiveListeners[event$1] = []; }
          el.dom7LiveListeners[event$1].push({
            listener: listener,
            proxyListener: handleLiveEvent,
          });
          el.addEventListener(event$1, handleLiveEvent, capture);
        }
      }
    }
    return this;
  }
  function off() {
    var assign;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
    var eventType = args[0];
    var targetSelector = args[1];
    var listener = args[2];
    var capture = args[3];
    if (typeof args[1] === 'function') {
      (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
      targetSelector = undefined;
    }
    if (!capture) { capture = false; }

    var events = eventType.split(' ');
    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];
      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        var handlers = (void 0);
        if (!targetSelector && el.dom7Listeners) {
          handlers = el.dom7Listeners[event];
        } else if (targetSelector && el.dom7LiveListeners) {
          handlers = el.dom7LiveListeners[event];
        }
        if (handlers && handlers.length) {
          for (var k = handlers.length - 1; k >= 0; k -= 1) {
            var handler = handlers[k];
            if (listener && handler.listener === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (!listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            }
          }
        }
      }
    }
    return this;
  }
  function trigger() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var events = args[0].split(' ');
    var eventData = args[1];
    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];
      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        var evt = (void 0);
        try {
          evt = new win.CustomEvent(event, {
            detail: eventData,
            bubbles: true,
            cancelable: true,
          });
        } catch (e) {
          evt = doc.createEvent('Event');
          evt.initEvent(event, true, true);
          evt.detail = eventData;
        }
        // eslint-disable-next-line
        el.dom7EventData = args.filter(function (data, dataIndex) { return dataIndex > 0; });
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
    return this;
  }
  function transitionEnd(callback) {
    var events = ['webkitTransitionEnd', 'transitionend'];
    var dom = this;
    var i;
    function fireCallBack(e) {
      /* jshint validthis:true */
      if (e.target !== this) { return; }
      callback.call(this, e);
      for (i = 0; i < events.length; i += 1) {
        dom.off(events[i], fireCallBack);
      }
    }
    if (callback) {
      for (i = 0; i < events.length; i += 1) {
        dom.on(events[i], fireCallBack);
      }
    }
    return this;
  }
  function outerWidth(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        // eslint-disable-next-line
        var styles = this.styles();
        return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
      }
      return this[0].offsetWidth;
    }
    return null;
  }
  function outerHeight(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        // eslint-disable-next-line
        var styles = this.styles();
        return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
      }
      return this[0].offsetHeight;
    }
    return null;
  }
  function offset() {
    if (this.length > 0) {
      var el = this[0];
      var box = el.getBoundingClientRect();
      var body = doc.body;
      var clientTop = el.clientTop || body.clientTop || 0;
      var clientLeft = el.clientLeft || body.clientLeft || 0;
      var scrollTop = el === win ? win.scrollY : el.scrollTop;
      var scrollLeft = el === win ? win.scrollX : el.scrollLeft;
      return {
        top: (box.top + scrollTop) - clientTop,
        left: (box.left + scrollLeft) - clientLeft,
      };
    }

    return null;
  }
  function styles() {
    if (this[0]) { return win.getComputedStyle(this[0], null); }
    return {};
  }
  function css(props, value) {
    var i;
    if (arguments.length === 1) {
      if (typeof props === 'string') {
        if (this[0]) { return win.getComputedStyle(this[0], null).getPropertyValue(props); }
      } else {
        for (i = 0; i < this.length; i += 1) {
          // eslint-disable-next-line
          for (var prop in props) {
            this[i].style[prop] = props[prop];
          }
        }
        return this;
      }
    }
    if (arguments.length === 2 && typeof props === 'string') {
      for (i = 0; i < this.length; i += 1) {
        this[i].style[props] = value;
      }
      return this;
    }
    return this;
  }
  // Iterate over the collection passing elements to `callback`
  function each(callback) {
    // Don't bother continuing without a callback
    if (!callback) { return this; }
    // Iterate over the current collection
    for (var i = 0; i < this.length; i += 1) {
      // If the callback returns false
      if (callback.call(this[i], i, this[i]) === false) {
        // End the loop early
        return this;
      }
    }
    // Return `this` to allow chained DOM operations
    return this;
  }
  // eslint-disable-next-line
  function html(html) {
    if (typeof html === 'undefined') {
      return this[0] ? this[0].innerHTML : undefined;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].innerHTML = html;
    }
    return this;
  }
  // eslint-disable-next-line
  function text(text) {
    if (typeof text === 'undefined') {
      if (this[0]) {
        return this[0].textContent.trim();
      }
      return null;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].textContent = text;
    }
    return this;
  }
  function is(selector) {
    var el = this[0];
    var compareWith;
    var i;
    if (!el || typeof selector === 'undefined') { return false; }
    if (typeof selector === 'string') {
      if (el.matches) { return el.matches(selector); }
      else if (el.webkitMatchesSelector) { return el.webkitMatchesSelector(selector); }
      else if (el.msMatchesSelector) { return el.msMatchesSelector(selector); }

      compareWith = $(selector);
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) { return true; }
      }
      return false;
    } else if (selector === doc) { return el === doc; }
    else if (selector === win) { return el === win; }

    if (selector.nodeType || selector instanceof Dom7) {
      compareWith = selector.nodeType ? [selector] : selector;
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) { return true; }
      }
      return false;
    }
    return false;
  }
  function index() {
    var child = this[0];
    var i;
    if (child) {
      i = 0;
      // eslint-disable-next-line
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) { i += 1; }
      }
      return i;
    }
    return undefined;
  }
  // eslint-disable-next-line
  function eq(index) {
    if (typeof index === 'undefined') { return this; }
    var length = this.length;
    var returnIndex;
    if (index > length - 1) {
      return new Dom7([]);
    }
    if (index < 0) {
      returnIndex = length + index;
      if (returnIndex < 0) { return new Dom7([]); }
      return new Dom7([this[returnIndex]]);
    }
    return new Dom7([this[index]]);
  }
  function append() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var newChild;

    for (var k = 0; k < args.length; k += 1) {
      newChild = args[k];
      for (var i = 0; i < this.length; i += 1) {
        if (typeof newChild === 'string') {
          var tempDiv = doc.createElement('div');
          tempDiv.innerHTML = newChild;
          while (tempDiv.firstChild) {
            this[i].appendChild(tempDiv.firstChild);
          }
        } else if (newChild instanceof Dom7) {
          for (var j = 0; j < newChild.length; j += 1) {
            this[i].appendChild(newChild[j]);
          }
        } else {
          this[i].appendChild(newChild);
        }
      }
    }

    return this;
  }
  function prepend(newChild) {
    var i;
    var j;
    for (i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = doc.createElement('div');
        tempDiv.innerHTML = newChild;
        for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
          this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        }
      } else if (newChild instanceof Dom7) {
        for (j = 0; j < newChild.length; j += 1) {
          this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        }
      } else {
        this[i].insertBefore(newChild, this[i].childNodes[0]);
      }
    }
    return this;
  }
  function next(selector) {
    if (this.length > 0) {
      if (selector) {
        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
          return new Dom7([this[0].nextElementSibling]);
        }
        return new Dom7([]);
      }

      if (this[0].nextElementSibling) { return new Dom7([this[0].nextElementSibling]); }
      return new Dom7([]);
    }
    return new Dom7([]);
  }
  function nextAll(selector) {
    var nextEls = [];
    var el = this[0];
    if (!el) { return new Dom7([]); }
    while (el.nextElementSibling) {
      var next = el.nextElementSibling; // eslint-disable-line
      if (selector) {
        if ($(next).is(selector)) { nextEls.push(next); }
      } else { nextEls.push(next); }
      el = next;
    }
    return new Dom7(nextEls);
  }
  function prev(selector) {
    if (this.length > 0) {
      var el = this[0];
      if (selector) {
        if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
          return new Dom7([el.previousElementSibling]);
        }
        return new Dom7([]);
      }

      if (el.previousElementSibling) { return new Dom7([el.previousElementSibling]); }
      return new Dom7([]);
    }
    return new Dom7([]);
  }
  function prevAll(selector) {
    var prevEls = [];
    var el = this[0];
    if (!el) { return new Dom7([]); }
    while (el.previousElementSibling) {
      var prev = el.previousElementSibling; // eslint-disable-line
      if (selector) {
        if ($(prev).is(selector)) { prevEls.push(prev); }
      } else { prevEls.push(prev); }
      el = prev;
    }
    return new Dom7(prevEls);
  }
  function parent(selector) {
    var parents = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode !== null) {
        if (selector) {
          if ($(this[i].parentNode).is(selector)) { parents.push(this[i].parentNode); }
        } else {
          parents.push(this[i].parentNode);
        }
      }
    }
    return $(unique(parents));
  }
  function parents(selector) {
    var parents = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
      var parent = this[i].parentNode; // eslint-disable-line
      while (parent) {
        if (selector) {
          if ($(parent).is(selector)) { parents.push(parent); }
        } else {
          parents.push(parent);
        }
        parent = parent.parentNode;
      }
    }
    return $(unique(parents));
  }
  function closest(selector) {
    var closest = this; // eslint-disable-line
    if (typeof selector === 'undefined') {
      return new Dom7([]);
    }
    if (!closest.is(selector)) {
      closest = closest.parents(selector).eq(0);
    }
    return closest;
  }
  function find(selector) {
    var foundElements = [];
    for (var i = 0; i < this.length; i += 1) {
      var found = this[i].querySelectorAll(selector);
      for (var j = 0; j < found.length; j += 1) {
        foundElements.push(found[j]);
      }
    }
    return new Dom7(foundElements);
  }
  function children(selector) {
    var children = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
      var childNodes = this[i].childNodes;

      for (var j = 0; j < childNodes.length; j += 1) {
        if (!selector) {
          if (childNodes[j].nodeType === 1) { children.push(childNodes[j]); }
        } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
          children.push(childNodes[j]);
        }
      }
    }
    return new Dom7(unique(children));
  }
  function remove() {
    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode) { this[i].parentNode.removeChild(this[i]); }
    }
    return this;
  }
  function add() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var dom = this;
    var i;
    var j;
    for (i = 0; i < args.length; i += 1) {
      var toAdd = $(args[i]);
      for (j = 0; j < toAdd.length; j += 1) {
        dom[dom.length] = toAdd[j];
        dom.length += 1;
      }
    }
    return dom;
  }

  var Methods = {
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    toggleClass: toggleClass,
    attr: attr,
    removeAttr: removeAttr,
    data: data,
    transform: transform,
    transition: transition,
    on: on,
    off: off,
    trigger: trigger,
    transitionEnd: transitionEnd,
    outerWidth: outerWidth,
    outerHeight: outerHeight,
    offset: offset,
    css: css,
    each: each,
    html: html,
    text: text,
    is: is,
    index: index,
    eq: eq,
    append: append,
    prepend: prepend,
    next: next,
    nextAll: nextAll,
    prev: prev,
    prevAll: prevAll,
    parent: parent,
    parents: parents,
    closest: closest,
    find: find,
    children: children,
    remove: remove,
    add: add,
    styles: styles,
  };

  Object.keys(Methods).forEach(function (methodName) {
    $.fn[methodName] = $.fn[methodName] || Methods[methodName];
  });

  var Utils = {
    deleteProps: function deleteProps(obj) {
      var object = obj;
      Object.keys(object).forEach(function (key) {
        try {
          object[key] = null;
        } catch (e) {
          // no getter for object
        }
        try {
          delete object[key];
        } catch (e) {
          // something got wrong
        }
      });
    },
    nextTick: function nextTick(callback, delay) {
      if ( delay === void 0 ) delay = 0;

      return setTimeout(callback, delay);
    },
    now: function now() {
      return Date.now();
    },
    getTranslate: function getTranslate(el, axis) {
      if ( axis === void 0 ) axis = 'x';

      var matrix;
      var curTransform;
      var transformMatrix;

      var curStyle = win.getComputedStyle(el, null);

      if (win.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(',').length > 6) {
          curTransform = curTransform.split(', ').map(function (a) { return a.replace(',', '.'); }).join(', ');
        }
        // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case
        transformMatrix = new win.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
      } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
      }

      if (axis === 'x') {
        // Latest Chrome and webkits Fix
        if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m41; }
        // Crazy IE10 Matrix
        else if (matrix.length === 16) { curTransform = parseFloat(matrix[12]); }
        // Normal Browsers
        else { curTransform = parseFloat(matrix[4]); }
      }
      if (axis === 'y') {
        // Latest Chrome and webkits Fix
        if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m42; }
        // Crazy IE10 Matrix
        else if (matrix.length === 16) { curTransform = parseFloat(matrix[13]); }
        // Normal Browsers
        else { curTransform = parseFloat(matrix[5]); }
      }
      return curTransform || 0;
    },
    parseUrlQuery: function parseUrlQuery(url) {
      var query = {};
      var urlToParse = url || win.location.href;
      var i;
      var params;
      var param;
      var length;
      if (typeof urlToParse === 'string' && urlToParse.length) {
        urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
        params = urlToParse.split('&').filter(function (paramsPart) { return paramsPart !== ''; });
        length = params.length;

        for (i = 0; i < length; i += 1) {
          param = params[i].replace(/#\S+/g, '').split('=');
          query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
        }
      }
      return query;
    },
    isObject: function isObject(o) {
      return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
    },
    extend: function extend() {
      var args = [], len$1 = arguments.length;
      while ( len$1-- ) args[ len$1 ] = arguments[ len$1 ];

      var to = Object(args[0]);
      for (var i = 1; i < args.length; i += 1) {
        var nextSource = args[i];
        if (nextSource !== undefined && nextSource !== null) {
          var keysArray = Object.keys(Object(nextSource));
          for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
            if (desc !== undefined && desc.enumerable) {
              if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                Utils.extend(to[nextKey], nextSource[nextKey]);
              } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                to[nextKey] = {};
                Utils.extend(to[nextKey], nextSource[nextKey]);
              } else {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
      }
      return to;
    },
  };

  var Support = (function Support() {
    var testDiv = doc.createElement('div');
    return {
      touch: (win.Modernizr && win.Modernizr.touch === true) || (function checkTouch() {
        return !!((win.navigator.maxTouchPoints > 0) || ('ontouchstart' in win) || (win.DocumentTouch && doc instanceof win.DocumentTouch));
      }()),

      pointerEvents: !!(win.navigator.pointerEnabled || win.PointerEvent || ('maxTouchPoints' in win.navigator && win.navigator.maxTouchPoints > 0)),
      prefixedPointerEvents: !!win.navigator.msPointerEnabled,

      transition: (function checkTransition() {
        var style = testDiv.style;
        return ('transition' in style || 'webkitTransition' in style || 'MozTransition' in style);
      }()),
      transforms3d: (win.Modernizr && win.Modernizr.csstransforms3d === true) || (function checkTransforms3d() {
        var style = testDiv.style;
        return ('webkitPerspective' in style || 'MozPerspective' in style || 'OPerspective' in style || 'MsPerspective' in style || 'perspective' in style);
      }()),

      flexbox: (function checkFlexbox() {
        var style = testDiv.style;
        var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
        for (var i = 0; i < styles.length; i += 1) {
          if (styles[i] in style) { return true; }
        }
        return false;
      }()),

      observer: (function checkObserver() {
        return ('MutationObserver' in win || 'WebkitMutationObserver' in win);
      }()),

      passiveListener: (function checkPassiveListener() {
        var supportsPassive = false;
        try {
          var opts = Object.defineProperty({}, 'passive', {
            // eslint-disable-next-line
            get: function get() {
              supportsPassive = true;
            },
          });
          win.addEventListener('testPassiveListener', null, opts);
        } catch (e) {
          // No support
        }
        return supportsPassive;
      }()),

      gestures: (function checkGestures() {
        return 'ongesturestart' in win;
      }()),
    };
  }());

  var Browser = (function Browser() {
    function isSafari() {
      var ua = win.navigator.userAgent.toLowerCase();
      return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
    }
    return {
      isIE: !!win.navigator.userAgent.match(/Trident/g) || !!win.navigator.userAgent.match(/MSIE/g),
      isEdge: !!win.navigator.userAgent.match(/Edge/g),
      isSafari: isSafari(),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(win.navigator.userAgent),
    };
  }());

  var SwiperClass = function SwiperClass(params) {
    if ( params === void 0 ) params = {};

    var self = this;
    self.params = params;

    // Events
    self.eventsListeners = {};

    if (self.params && self.params.on) {
      Object.keys(self.params.on).forEach(function (eventName) {
        self.on(eventName, self.params.on[eventName]);
      });
    }
  };

  var staticAccessors = { components: { configurable: true } };

  SwiperClass.prototype.on = function on (events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') { return self; }
    var method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(function (event) {
      if (!self.eventsListeners[event]) { self.eventsListeners[event] = []; }
      self.eventsListeners[event][method](handler);
    });
    return self;
  };

  SwiperClass.prototype.once = function once (events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') { return self; }
    function onceHandler() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

      handler.apply(self, args);
      self.off(events, onceHandler);
      if (onceHandler.f7proxy) {
        delete onceHandler.f7proxy;
      }
    }
    onceHandler.f7proxy = handler;
    return self.on(events, onceHandler, priority);
  };

  SwiperClass.prototype.off = function off (events, handler) {
    var self = this;
    if (!self.eventsListeners) { return self; }
    events.split(' ').forEach(function (event) {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
        self.eventsListeners[event].forEach(function (eventHandler, index) {
          if (eventHandler === handler || (eventHandler.f7proxy && eventHandler.f7proxy === handler)) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  };

  SwiperClass.prototype.emit = function emit () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

    var self = this;
    if (!self.eventsListeners) { return self; }
    var events;
    var data;
    var context;
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    var eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(function (event) {
      if (self.eventsListeners && self.eventsListeners[event]) {
        var handlers = [];
        self.eventsListeners[event].forEach(function (eventHandler) {
          handlers.push(eventHandler);
        });
        handlers.forEach(function (eventHandler) {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  };

  SwiperClass.prototype.useModulesParams = function useModulesParams (instanceParams) {
    var instance = this;
    if (!instance.modules) { return; }
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      // Extend params
      if (module.params) {
        Utils.extend(instanceParams, module.params);
      }
    });
  };

  SwiperClass.prototype.useModules = function useModules (modulesParams) {
      if ( modulesParams === void 0 ) modulesParams = {};

    var instance = this;
    if (!instance.modules) { return; }
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      var moduleParams = modulesParams[moduleName] || {};
      // Extend instance methods and props
      if (module.instance) {
        Object.keys(module.instance).forEach(function (modulePropName) {
          var moduleProp = module.instance[modulePropName];
          if (typeof moduleProp === 'function') {
            instance[modulePropName] = moduleProp.bind(instance);
          } else {
            instance[modulePropName] = moduleProp;
          }
        });
      }
      // Add event listeners
      if (module.on && instance.on) {
        Object.keys(module.on).forEach(function (moduleEventName) {
          instance.on(moduleEventName, module.on[moduleEventName]);
        });
      }

      // Module create callback
      if (module.create) {
        module.create.bind(instance)(moduleParams);
      }
    });
  };

  staticAccessors.components.set = function (components) {
    var Class = this;
    if (!Class.use) { return; }
    Class.use(components);
  };

  SwiperClass.installModule = function installModule (module) {
      var params = [], len = arguments.length - 1;
      while ( len-- > 0 ) params[ len ] = arguments[ len + 1 ];

    var Class = this;
    if (!Class.prototype.modules) { Class.prototype.modules = {}; }
    var name = module.name || (((Object.keys(Class.prototype.modules).length) + "_" + (Utils.now())));
    Class.prototype.modules[name] = module;
    // Prototype
    if (module.proto) {
      Object.keys(module.proto).forEach(function (key) {
        Class.prototype[key] = module.proto[key];
      });
    }
    // Class
    if (module.static) {
      Object.keys(module.static).forEach(function (key) {
        Class[key] = module.static[key];
      });
    }
    // Callback
    if (module.install) {
      module.install.apply(Class, params);
    }
    return Class;
  };

  SwiperClass.use = function use (module) {
      var params = [], len = arguments.length - 1;
      while ( len-- > 0 ) params[ len ] = arguments[ len + 1 ];

    var Class = this;
    if (Array.isArray(module)) {
      module.forEach(function (m) { return Class.installModule(m); });
      return Class;
    }
    return Class.installModule.apply(Class, [ module ].concat( params ));
  };

  Object.defineProperties( SwiperClass, staticAccessors );

  function updateSize () {
    var swiper = this;
    var width;
    var height;
    var $el = swiper.$el;
    if (typeof swiper.params.width !== 'undefined') {
      width = swiper.params.width;
    } else {
      width = $el[0].clientWidth;
    }
    if (typeof swiper.params.height !== 'undefined') {
      height = swiper.params.height;
    } else {
      height = $el[0].clientHeight;
    }
    if ((width === 0 && swiper.isHorizontal()) || (height === 0 && swiper.isVertical())) {
      return;
    }

    // Subtract paddings
    width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
    height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);

    Utils.extend(swiper, {
      width: width,
      height: height,
      size: swiper.isHorizontal() ? width : height,
    });
  }

  function updateSlides () {
    var swiper = this;
    var params = swiper.params;

    var $wrapperEl = swiper.$wrapperEl;
    var swiperSize = swiper.size;
    var rtl = swiper.rtlTranslate;
    var wrongRTL = swiper.wrongRTL;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    var slides = $wrapperEl.children(("." + (swiper.params.slideClass)));
    var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    var snapGrid = [];
    var slidesGrid = [];
    var slidesSizesGrid = [];

    var offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === 'function') {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }

    var offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === 'function') {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }

    var previousSnapGridLength = swiper.snapGrid.length;
    var previousSlidesGridLength = swiper.snapGrid.length;

    var spaceBetween = params.spaceBetween;
    var slidePosition = -offsetBefore;
    var prevSlideSize = 0;
    var index = 0;
    if (typeof swiperSize === 'undefined') {
      return;
    }
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize;
    }

    swiper.virtualSize = -spaceBetween;

    // reset margins
    if (rtl) { slides.css({ marginLeft: '', marginTop: '' }); }
    else { slides.css({ marginRight: '', marginBottom: '' }); }

    var slidesNumberEvenToRows;
    if (params.slidesPerColumn > 1) {
      if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
        slidesNumberEvenToRows = slidesLength;
      } else {
        slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
      }
      if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
        slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
      }
    }

    // Calc slides
    var slideSize;
    var slidesPerColumn = params.slidesPerColumn;
    var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
    var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
    for (var i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      var slide = slides.eq(i);
      if (params.slidesPerColumn > 1) {
        // Set slides order
        var newSlideOrderIndex = (void 0);
        var column = (void 0);
        var row = (void 0);
        if (
          (params.slidesPerColumnFill === 'column')
          || (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1)
        ) {
          if (params.slidesPerColumnFill === 'column') {
            column = Math.floor(i / slidesPerColumn);
            row = i - (column * slidesPerColumn);
            if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
              row += 1;
              if (row >= slidesPerColumn) {
                row = 0;
                column += 1;
              }
            }
          } else {
            var groupIndex = Math.floor(i / params.slidesPerGroup);
            row = Math.floor(i / params.slidesPerView) - groupIndex * params.slidesPerColumn;
            column = i - row * params.slidesPerView - groupIndex * params.slidesPerView;
          }
          newSlideOrderIndex = column + ((row * slidesNumberEvenToRows) / slidesPerColumn);
          slide
            .css({
              '-webkit-box-ordinal-group': newSlideOrderIndex,
              '-moz-box-ordinal-group': newSlideOrderIndex,
              '-ms-flex-order': newSlideOrderIndex,
              '-webkit-order': newSlideOrderIndex,
              order: newSlideOrderIndex,
            });
        } else {
          row = Math.floor(i / slidesPerRow);
          column = i - (row * slidesPerRow);
        }
        slide
          .css(
            ("margin-" + (swiper.isHorizontal() ? 'top' : 'left')),
            (row !== 0 && params.spaceBetween) && (((params.spaceBetween) + "px"))
          )
          .attr('data-swiper-column', column)
          .attr('data-swiper-row', row);
      }
      if (slide.css('display') === 'none') { continue; } // eslint-disable-line

      if (params.slidesPerView === 'auto') {
        var slideStyles = win.getComputedStyle(slide[0], null);
        var currentTransform = slide[0].style.transform;
        var currentWebKitTransform = slide[0].style.webkitTransform;
        if (currentTransform) {
          slide[0].style.transform = 'none';
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = 'none';
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal()
            ? slide.outerWidth(true)
            : slide.outerHeight(true);
        } else {
          // eslint-disable-next-line
          if (swiper.isHorizontal()) {
            var width = parseFloat(slideStyles.getPropertyValue('width'));
            var paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left'));
            var paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right'));
            var marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left'));
            var marginRight = parseFloat(slideStyles.getPropertyValue('margin-right'));
            var boxSizing = slideStyles.getPropertyValue('box-sizing');
            if (boxSizing && boxSizing === 'border-box' && !Browser.isIE) {
              slideSize = width + marginLeft + marginRight;
            } else {
              slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;
            }
          } else {
            var height = parseFloat(slideStyles.getPropertyValue('height'));
            var paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top'));
            var paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom'));
            var marginTop = parseFloat(slideStyles.getPropertyValue('margin-top'));
            var marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom'));
            var boxSizing$1 = slideStyles.getPropertyValue('box-sizing');
            if (boxSizing$1 && boxSizing$1 === 'border-box' && !Browser.isIE) {
              slideSize = height + marginTop + marginBottom;
            } else {
              slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;
            }
          }
        }
        if (currentTransform) {
          slide[0].style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths) { slideSize = Math.floor(slideSize); }
      } else {
        slideSize = (swiperSize - ((params.slidesPerView - 1) * spaceBetween)) / params.slidesPerView;
        if (params.roundLengths) { slideSize = Math.floor(slideSize); }

        if (slides[i]) {
          if (swiper.isHorizontal()) {
            slides[i].style.width = slideSize + "px";
          } else {
            slides[i].style.height = slideSize + "px";
          }
        }
      }
      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);


      if (params.centeredSlides) {
        slidePosition = slidePosition + (slideSize / 2) + (prevSlideSize / 2) + spaceBetween;
        if (prevSlideSize === 0 && i !== 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
        if (i === 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
        if (Math.abs(slidePosition) < 1 / 1000) { slidePosition = 0; }
        if (params.roundLengths) { slidePosition = Math.floor(slidePosition); }
        if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths) { slidePosition = Math.floor(slidePosition); }
        if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }

      swiper.virtualSize += slideSize + spaceBetween;

      prevSlideSize = slideSize;

      index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    var newSlidesGrid;

    if (
      rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
      $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") });
    }
    if (!Support.flexbox || params.setWrapperSize) {
      if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
      else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
    }

    if (params.slidesPerColumn > 1) {
      swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
      swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
      if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
      else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
      if (params.centeredSlides) {
        newSlidesGrid = [];
        for (var i$1 = 0; i$1 < snapGrid.length; i$1 += 1) {
          var slidesGridItem = snapGrid[i$1];
          if (params.roundLengths) { slidesGridItem = Math.floor(slidesGridItem); }
          if (snapGrid[i$1] < swiper.virtualSize + snapGrid[0]) { newSlidesGrid.push(slidesGridItem); }
        }
        snapGrid = newSlidesGrid;
      }
    }

    // Remove last grid elements depending on width
    if (!params.centeredSlides) {
      newSlidesGrid = [];
      for (var i$2 = 0; i$2 < snapGrid.length; i$2 += 1) {
        var slidesGridItem$1 = snapGrid[i$2];
        if (params.roundLengths) { slidesGridItem$1 = Math.floor(slidesGridItem$1); }
        if (snapGrid[i$2] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem$1);
        }
      }
      snapGrid = newSlidesGrid;
      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (snapGrid.length === 0) { snapGrid = [0]; }

    if (params.spaceBetween !== 0) {
      if (swiper.isHorizontal()) {
        if (rtl) { slides.css({ marginLeft: (spaceBetween + "px") }); }
        else { slides.css({ marginRight: (spaceBetween + "px") }); }
      } else { slides.css({ marginBottom: (spaceBetween + "px") }); }
    }

    if (params.centerInsufficientSlides) {
      var allSlidesSize = 0;
      slidesSizesGrid.forEach(function (slideSizeValue) {
        allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      allSlidesSize -= params.spaceBetween;
      if (allSlidesSize < swiperSize) {
        var allSlidesOffset = (swiperSize - allSlidesSize) / 2;
        snapGrid.forEach(function (snap, snapIndex) {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach(function (snap, snapIndex) {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }

    Utils.extend(swiper, {
      slides: slides,
      snapGrid: snapGrid,
      slidesGrid: slidesGrid,
      slidesSizesGrid: slidesSizesGrid,
    });

    if (slidesLength !== previousSlidesLength) {
      swiper.emit('slidesLengthChange');
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow) { swiper.checkOverflow(); }
      swiper.emit('snapGridLengthChange');
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit('slidesGridLengthChange');
    }

    if (params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateSlidesOffset();
    }
  }

  function updateAutoHeight (speed) {
    var swiper = this;
    var activeSlides = [];
    var newHeight = 0;
    var i;
    if (typeof speed === 'number') {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    // Find slides currently in view
    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        var index = swiper.activeIndex + i;
        if (index > swiper.slides.length) { break; }
        activeSlides.push(swiper.slides.eq(index)[0]);
      }
    } else {
      activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
    }

    // Find new height from highest slide in view
    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== 'undefined') {
        var height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }

    // Update Height
    if (newHeight) { swiper.$wrapperEl.css('height', (newHeight + "px")); }
  }

  function updateSlidesOffset () {
    var swiper = this;
    var slides = swiper.slides;
    for (var i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
    }
  }

  function updateSlidesProgress (translate) {
    if ( translate === void 0 ) translate = (this && this.translate) || 0;

    var swiper = this;
    var params = swiper.params;

    var slides = swiper.slides;
    var rtl = swiper.rtlTranslate;

    if (slides.length === 0) { return; }
    if (typeof slides[0].swiperSlideOffset === 'undefined') { swiper.updateSlidesOffset(); }

    var offsetCenter = -translate;
    if (rtl) { offsetCenter = translate; }

    // Visible Slides
    slides.removeClass(params.slideVisibleClass);

    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];

    for (var i = 0; i < slides.length; i += 1) {
      var slide = slides[i];
      var slideProgress = (
        (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0)) - slide.swiperSlideOffset
      ) / (slide.swiperSlideSize + params.spaceBetween);
      if (params.watchSlidesVisibility) {
        var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
        var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        var isVisible = (slideBefore >= 0 && slideBefore < swiper.size - 1)
                  || (slideAfter > 1 && slideAfter <= swiper.size)
                  || (slideBefore <= 0 && slideAfter >= swiper.size);
        if (isVisible) {
          swiper.visibleSlides.push(slide);
          swiper.visibleSlidesIndexes.push(i);
          slides.eq(i).addClass(params.slideVisibleClass);
        }
      }
      slide.progress = rtl ? -slideProgress : slideProgress;
    }
    swiper.visibleSlides = $(swiper.visibleSlides);
  }

  function updateProgress (translate) {
    if ( translate === void 0 ) translate = (this && this.translate) || 0;

    var swiper = this;
    var params = swiper.params;

    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    var progress = swiper.progress;
    var isBeginning = swiper.isBeginning;
    var isEnd = swiper.isEnd;
    var wasBeginning = isBeginning;
    var wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate - swiper.minTranslate()) / (translatesDiff);
      isBeginning = progress <= 0;
      isEnd = progress >= 1;
    }
    Utils.extend(swiper, {
      progress: progress,
      isBeginning: isBeginning,
      isEnd: isEnd,
    });

    if (params.watchSlidesProgress || params.watchSlidesVisibility) { swiper.updateSlidesProgress(translate); }

    if (isBeginning && !wasBeginning) {
      swiper.emit('reachBeginning toEdge');
    }
    if (isEnd && !wasEnd) {
      swiper.emit('reachEnd toEdge');
    }
    if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
      swiper.emit('fromEdge');
    }

    swiper.emit('progress', progress);
  }

  function updateSlidesClasses () {
    var swiper = this;

    var slides = swiper.slides;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;
    var realIndex = swiper.realIndex;
    var isVirtual = swiper.virtual && params.virtual.enabled;

    slides.removeClass(((params.slideActiveClass) + " " + (params.slideNextClass) + " " + (params.slidePrevClass) + " " + (params.slideDuplicateActiveClass) + " " + (params.slideDuplicateNextClass) + " " + (params.slideDuplicatePrevClass)));

    var activeSlide;
    if (isVirtual) {
      activeSlide = swiper.$wrapperEl.find(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + activeIndex + "\"]"));
    } else {
      activeSlide = slides.eq(activeIndex);
    }

    // Active classes
    activeSlide.addClass(params.slideActiveClass);

    if (params.loop) {
      // Duplicate to all looped slides
      if (activeSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + realIndex + "\"]"))
          .addClass(params.slideDuplicateActiveClass);
      } else {
        $wrapperEl
          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]"))
          .addClass(params.slideDuplicateActiveClass);
      }
    }
    // Next Slide
    var nextSlide = activeSlide.nextAll(("." + (params.slideClass))).eq(0).addClass(params.slideNextClass);
    if (params.loop && nextSlide.length === 0) {
      nextSlide = slides.eq(0);
      nextSlide.addClass(params.slideNextClass);
    }
    // Prev Slide
    var prevSlide = activeSlide.prevAll(("." + (params.slideClass))).eq(0).addClass(params.slidePrevClass);
    if (params.loop && prevSlide.length === 0) {
      prevSlide = slides.eq(-1);
      prevSlide.addClass(params.slidePrevClass);
    }
    if (params.loop) {
      // Duplicate to all looped slides
      if (nextSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicateNextClass);
      } else {
        $wrapperEl
          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicateNextClass);
      }
      if (prevSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicatePrevClass);
      } else {
        $wrapperEl
          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicatePrevClass);
      }
    }
  }

  function updateActiveIndex (newActiveIndex) {
    var swiper = this;
    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    var slidesGrid = swiper.slidesGrid;
    var snapGrid = swiper.snapGrid;
    var params = swiper.params;
    var previousIndex = swiper.activeIndex;
    var previousRealIndex = swiper.realIndex;
    var previousSnapIndex = swiper.snapIndex;
    var activeIndex = newActiveIndex;
    var snapIndex;
    if (typeof activeIndex === 'undefined') {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        if (typeof slidesGrid[i + 1] !== 'undefined') {
          if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - ((slidesGrid[i + 1] - slidesGrid[i]) / 2)) {
            activeIndex = i;
          } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
            activeIndex = i + 1;
          }
        } else if (translate >= slidesGrid[i]) {
          activeIndex = i;
        }
      }
      // Normalize slideIndex
      if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === 'undefined') { activeIndex = 0; }
      }
    }
    if (snapGrid.indexOf(translate) >= 0) {
      snapIndex = snapGrid.indexOf(translate);
    } else {
      snapIndex = Math.floor(activeIndex / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }
    if (activeIndex === previousIndex) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit('snapIndexChange');
      }
      return;
    }

    // Get real index
    var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);

    Utils.extend(swiper, {
      snapIndex: snapIndex,
      realIndex: realIndex,
      previousIndex: previousIndex,
      activeIndex: activeIndex,
    });
    swiper.emit('activeIndexChange');
    swiper.emit('snapIndexChange');
    if (previousRealIndex !== realIndex) {
      swiper.emit('realIndexChange');
    }
    if (swiper.initialized || swiper.runCallbacksOnInit) {
      swiper.emit('slideChange');
    }
  }

  function updateClickedSlide (e) {
    var swiper = this;
    var params = swiper.params;
    var slide = $(e.target).closest(("." + (params.slideClass)))[0];
    var slideFound = false;
    if (slide) {
      for (var i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide) { slideFound = true; }
      }
    }

    if (slide && slideFound) {
      swiper.clickedSlide = slide;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
      } else {
        swiper.clickedIndex = $(slide).index();
      }
    } else {
      swiper.clickedSlide = undefined;
      swiper.clickedIndex = undefined;
      return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
    }
  }

  var update = {
    updateSize: updateSize,
    updateSlides: updateSlides,
    updateAutoHeight: updateAutoHeight,
    updateSlidesOffset: updateSlidesOffset,
    updateSlidesProgress: updateSlidesProgress,
    updateProgress: updateProgress,
    updateSlidesClasses: updateSlidesClasses,
    updateActiveIndex: updateActiveIndex,
    updateClickedSlide: updateClickedSlide,
  };

  function getTranslate (axis) {
    if ( axis === void 0 ) axis = this.isHorizontal() ? 'x' : 'y';

    var swiper = this;

    var params = swiper.params;
    var rtl = swiper.rtlTranslate;
    var translate = swiper.translate;
    var $wrapperEl = swiper.$wrapperEl;

    if (params.virtualTranslate) {
      return rtl ? -translate : translate;
    }

    var currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
    if (rtl) { currentTranslate = -currentTranslate; }

    return currentTranslate || 0;
  }

  function setTranslate (translate, byController) {
    var swiper = this;
    var rtl = swiper.rtlTranslate;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var progress = swiper.progress;
    var x = 0;
    var y = 0;
    var z = 0;

    if (swiper.isHorizontal()) {
      x = rtl ? -translate : translate;
    } else {
      y = translate;
    }

    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }

    if (!params.virtualTranslate) {
      if (Support.transforms3d) { $wrapperEl.transform(("translate3d(" + x + "px, " + y + "px, " + z + "px)")); }
      else { $wrapperEl.transform(("translate(" + x + "px, " + y + "px)")); }
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;

    // Check if we need to update progress
    var newProgress;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate - swiper.minTranslate()) / (translatesDiff);
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate);
    }

    swiper.emit('setTranslate', swiper.translate, byController);
  }

  function minTranslate () {
    return (-this.snapGrid[0]);
  }

  function maxTranslate () {
    return (-this.snapGrid[this.snapGrid.length - 1]);
  }

  var translate = {
    getTranslate: getTranslate,
    setTranslate: setTranslate,
    minTranslate: minTranslate,
    maxTranslate: maxTranslate,
  };

  function setTransition (duration, byController) {
    var swiper = this;

    swiper.$wrapperEl.transition(duration);

    swiper.emit('setTransition', duration, byController);
  }

  function transitionStart (runCallbacks, direction) {
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var params = swiper.params;
    var previousIndex = swiper.previousIndex;
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    var dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) { dir = 'next'; }
      else if (activeIndex < previousIndex) { dir = 'prev'; }
      else { dir = 'reset'; }
    }

    swiper.emit('transitionStart');

    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        swiper.emit('slideResetTransitionStart');
        return;
      }
      swiper.emit('slideChangeTransitionStart');
      if (dir === 'next') {
        swiper.emit('slideNextTransitionStart');
      } else {
        swiper.emit('slidePrevTransitionStart');
      }
    }
  }

  function transitionEnd$1 (runCallbacks, direction) {
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var previousIndex = swiper.previousIndex;
    swiper.animating = false;
    swiper.setTransition(0);

    var dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) { dir = 'next'; }
      else if (activeIndex < previousIndex) { dir = 'prev'; }
      else { dir = 'reset'; }
    }

    swiper.emit('transitionEnd');

    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        swiper.emit('slideResetTransitionEnd');
        return;
      }
      swiper.emit('slideChangeTransitionEnd');
      if (dir === 'next') {
        swiper.emit('slideNextTransitionEnd');
      } else {
        swiper.emit('slidePrevTransitionEnd');
      }
    }
  }

  var transition$1 = {
    setTransition: setTransition,
    transitionStart: transitionStart,
    transitionEnd: transitionEnd$1,
  };

  function slideTo (index, speed, runCallbacks, internal) {
    if ( index === void 0 ) index = 0;
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var slideIndex = index;
    if (slideIndex < 0) { slideIndex = 0; }

    var params = swiper.params;
    var snapGrid = swiper.snapGrid;
    var slidesGrid = swiper.slidesGrid;
    var previousIndex = swiper.previousIndex;
    var activeIndex = swiper.activeIndex;
    var rtl = swiper.rtlTranslate;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }

    var snapIndex = Math.floor(slideIndex / params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }

    if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
      swiper.emit('beforeSlideChangeStart');
    }

    var translate = -snapGrid[snapIndex];

    // Update progress
    swiper.updateProgress(translate);

    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
          slideIndex = i;
        }
      }
    }
    // Directions locks
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
        return false;
      }
      if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex) { return false; }
      }
    }

    var direction;
    if (slideIndex > activeIndex) { direction = 'next'; }
    else if (slideIndex < activeIndex) { direction = 'prev'; }
    else { direction = 'reset'; }


    // Update Index
    if ((rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate)) {
      swiper.updateActiveIndex(slideIndex);
      // Update Height
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== 'slide') {
        swiper.setTranslate(translate);
      }
      if (direction !== 'reset') {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }

    if (speed === 0 || !Support.transition) {
      swiper.setTransition(0);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onSlideToWrapperTransitionEnd) {
          swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) { return; }
            if (e.target !== this) { return; }
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
          };
        }
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
      }
    }

    return true;
  }

  function slideToLoop (index, speed, runCallbacks, internal) {
    if ( index === void 0 ) index = 0;
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var newIndex = index;
    if (swiper.params.loop) {
      newIndex += swiper.loopedSlides;
    }

    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideNext (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var params = swiper.params;
    var animating = swiper.animating;
    if (params.loop) {
      if (animating) { return false; }
      swiper.loopFix();
      // eslint-disable-next-line
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
      return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
    }
    return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slidePrev (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var params = swiper.params;
    var animating = swiper.animating;
    var snapGrid = swiper.snapGrid;
    var slidesGrid = swiper.slidesGrid;
    var rtlTranslate = swiper.rtlTranslate;

    if (params.loop) {
      if (animating) { return false; }
      swiper.loopFix();
      // eslint-disable-next-line
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    var translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
      if (val < 0) { return -Math.floor(Math.abs(val)); }
      return Math.floor(val);
    }
    var normalizedTranslate = normalize(translate);
    var normalizedSnapGrid = snapGrid.map(function (val) { return normalize(val); });
    var normalizedSlidesGrid = slidesGrid.map(function (val) { return normalize(val); });

    var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
    var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    var prevIndex;
    if (typeof prevSnap !== 'undefined') {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0) { prevIndex = swiper.activeIndex - 1; }
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideReset (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideToClosest (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var index = swiper.activeIndex;
    var snapIndex = Math.floor(index / swiper.params.slidesPerGroup);

    if (snapIndex < swiper.snapGrid.length - 1) {
      var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

      var currentSnap = swiper.snapGrid[snapIndex];
      var nextSnap = swiper.snapGrid[snapIndex + 1];

      if ((translate - currentSnap) > (nextSnap - currentSnap) / 2) {
        index = swiper.params.slidesPerGroup;
      }
    }

    return swiper.slideTo(index, speed, runCallbacks, internal);
  }

  function slideToClickedSlide () {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;

    var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    var slideToIndex = swiper.clickedIndex;
    var realIndex;
    if (params.loop) {
      if (swiper.animating) { return; }
      realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
      if (params.centeredSlides) {
        if (
          (slideToIndex < swiper.loopedSlides - (slidesPerView / 2))
          || (slideToIndex > (swiper.slides.length - swiper.loopedSlides) + (slidesPerView / 2))
        ) {
          swiper.loopFix();
          slideToIndex = $wrapperEl
            .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
            .eq(0)
            .index();

          Utils.nextTick(function () {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = $wrapperEl
          .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
          .eq(0)
          .index();

        Utils.nextTick(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }

  var slide = {
    slideTo: slideTo,
    slideToLoop: slideToLoop,
    slideNext: slideNext,
    slidePrev: slidePrev,
    slideReset: slideReset,
    slideToClosest: slideToClosest,
    slideToClickedSlide: slideToClickedSlide,
  };

  function loopCreate () {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    // Remove duplicated slides
    $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass))).remove();

    var slides = $wrapperEl.children(("." + (params.slideClass)));

    if (params.loopFillGroupWithBlank) {
      var blankSlidesNum = params.slidesPerGroup - (slides.length % params.slidesPerGroup);
      if (blankSlidesNum !== params.slidesPerGroup) {
        for (var i = 0; i < blankSlidesNum; i += 1) {
          var blankNode = $(doc.createElement('div')).addClass(((params.slideClass) + " " + (params.slideBlankClass)));
          $wrapperEl.append(blankNode);
        }
        slides = $wrapperEl.children(("." + (params.slideClass)));
      }
    }

    if (params.slidesPerView === 'auto' && !params.loopedSlides) { params.loopedSlides = slides.length; }

    swiper.loopedSlides = parseInt(params.loopedSlides || params.slidesPerView, 10);
    swiper.loopedSlides += params.loopAdditionalSlides;
    if (swiper.loopedSlides > slides.length) {
      swiper.loopedSlides = slides.length;
    }

    var prependSlides = [];
    var appendSlides = [];
    slides.each(function (index, el) {
      var slide = $(el);
      if (index < swiper.loopedSlides) { appendSlides.push(el); }
      if (index < slides.length && index >= slides.length - swiper.loopedSlides) { prependSlides.push(el); }
      slide.attr('data-swiper-slide-index', index);
    });
    for (var i$1 = 0; i$1 < appendSlides.length; i$1 += 1) {
      $wrapperEl.append($(appendSlides[i$1].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
    for (var i$2 = prependSlides.length - 1; i$2 >= 0; i$2 -= 1) {
      $wrapperEl.prepend($(prependSlides[i$2].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
  }

  function loopFix () {
    var swiper = this;
    var params = swiper.params;
    var activeIndex = swiper.activeIndex;
    var slides = swiper.slides;
    var loopedSlides = swiper.loopedSlides;
    var allowSlidePrev = swiper.allowSlidePrev;
    var allowSlideNext = swiper.allowSlideNext;
    var snapGrid = swiper.snapGrid;
    var rtl = swiper.rtlTranslate;
    var newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;

    var snapTranslate = -snapGrid[activeIndex];
    var diff = snapTranslate - swiper.getTranslate();


    // Fix For Negative Oversliding
    if (activeIndex < loopedSlides) {
      newIndex = (slides.length - (loopedSlides * 3)) + activeIndex;
      newIndex += loopedSlides;
      var slideChanged = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    } else if ((params.slidesPerView === 'auto' && activeIndex >= loopedSlides * 2) || (activeIndex >= slides.length - loopedSlides)) {
      // Fix For Positive Oversliding
      newIndex = -slides.length + activeIndex + loopedSlides;
      newIndex += loopedSlides;
      var slideChanged$1 = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged$1 && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
  }

  function loopDestroy () {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    var slides = swiper.slides;
    $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + ",." + (params.slideClass) + "." + (params.slideBlankClass))).remove();
    slides.removeAttr('data-swiper-slide-index');
  }

  var loop = {
    loopCreate: loopCreate,
    loopFix: loopFix,
    loopDestroy: loopDestroy,
  };

  function setGrabCursor (moving) {
    var swiper = this;
    if (Support.touch || !swiper.params.simulateTouch || (swiper.params.watchOverflow && swiper.isLocked)) { return; }
    var el = swiper.el;
    el.style.cursor = 'move';
    el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
    el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
    el.style.cursor = moving ? 'grabbing' : 'grab';
  }

  function unsetGrabCursor () {
    var swiper = this;
    if (Support.touch || (swiper.params.watchOverflow && swiper.isLocked)) { return; }
    swiper.el.style.cursor = '';
  }

  var grabCursor = {
    setGrabCursor: setGrabCursor,
    unsetGrabCursor: unsetGrabCursor,
  };

  function appendSlide (slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    if (params.loop) {
      swiper.loopDestroy();
    }
    if (typeof slides === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) { $wrapperEl.append(slides[i]); }
      }
    } else {
      $wrapperEl.append(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
  }

  function prependSlide (slides) {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;

    if (params.loop) {
      swiper.loopDestroy();
    }
    var newActiveIndex = activeIndex + 1;
    if (typeof slides === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) { $wrapperEl.prepend(slides[i]); }
      }
      newActiveIndex = activeIndex + slides.length;
    } else {
      $wrapperEl.prepend(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    swiper.slideTo(newActiveIndex, 0, false);
  }

  function addSlide (index, slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    var activeIndex = swiper.activeIndex;
    var activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
    }
    var baseLength = swiper.slides.length;
    if (index <= 0) {
      swiper.prependSlide(slides);
      return;
    }
    if (index >= baseLength) {
      swiper.appendSlide(slides);
      return;
    }
    var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;

    var slidesBuffer = [];
    for (var i = baseLength - 1; i >= index; i -= 1) {
      var currentSlide = swiper.slides.eq(i);
      currentSlide.remove();
      slidesBuffer.unshift(currentSlide);
    }

    if (typeof slides === 'object' && 'length' in slides) {
      for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
        if (slides[i$1]) { $wrapperEl.append(slides[i$1]); }
      }
      newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else {
      $wrapperEl.append(slides);
    }

    for (var i$2 = 0; i$2 < slidesBuffer.length; i$2 += 1) {
      $wrapperEl.append(slidesBuffer[i$2]);
    }

    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  function removeSlide (slidesIndexes) {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;

    var activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
    }
    var newActiveIndex = activeIndexBuffer;
    var indexToRemove;

    if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
      for (var i = 0; i < slidesIndexes.length; i += 1) {
        indexToRemove = slidesIndexes[i];
        if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
        if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
      }
      newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
      indexToRemove = slidesIndexes;
      if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
      if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
      newActiveIndex = Math.max(newActiveIndex, 0);
    }

    if (params.loop) {
      swiper.loopCreate();
    }

    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  function removeAllSlides () {
    var swiper = this;

    var slidesIndexes = [];
    for (var i = 0; i < swiper.slides.length; i += 1) {
      slidesIndexes.push(i);
    }
    swiper.removeSlide(slidesIndexes);
  }

  var manipulation = {
    appendSlide: appendSlide,
    prependSlide: prependSlide,
    addSlide: addSlide,
    removeSlide: removeSlide,
    removeAllSlides: removeAllSlides,
  };

  var Device = (function Device() {
    var ua = win.navigator.userAgent;

    var device = {
      ios: false,
      android: false,
      androidChrome: false,
      desktop: false,
      windows: false,
      iphone: false,
      ipod: false,
      ipad: false,
      cordova: win.cordova || win.phonegap,
      phonegap: win.cordova || win.phonegap,
    };

    var windows = ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);


    // Windows
    if (windows) {
      device.os = 'windows';
      device.osVersion = windows[2];
      device.windows = true;
    }
    // Android
    if (android && !windows) {
      device.os = 'android';
      device.osVersion = android[2];
      device.android = true;
      device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
    }
    if (ipad || iphone || ipod) {
      device.os = 'ios';
      device.ios = true;
    }
    // iOS
    if (iphone && !ipod) {
      device.osVersion = iphone[2].replace(/_/g, '.');
      device.iphone = true;
    }
    if (ipad) {
      device.osVersion = ipad[2].replace(/_/g, '.');
      device.ipad = true;
    }
    if (ipod) {
      device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
      device.iphone = true;
    }
    // iOS 8+ changed UA
    if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
      if (device.osVersion.split('.')[0] === '10') {
        device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
      }
    }

    // Desktop
    device.desktop = !(device.os || device.android || device.webView);

    // Webview
    device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);

    // Minimal UI
    if (device.os && device.os === 'ios') {
      var osVersionArr = device.osVersion.split('.');
      var metaViewport = doc.querySelector('meta[name="viewport"]');
      device.minimalUi = !device.webView
        && (ipod || iphone)
        && (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7)
        && metaViewport && metaViewport.getAttribute('content').indexOf('minimal-ui') >= 0;
    }

    // Pixel Ratio
    device.pixelRatio = win.devicePixelRatio || 1;

    // Export object
    return device;
  }());

  function onTouchStart (event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params;
    var touches = swiper.touches;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    var e = event;
    if (e.originalEvent) { e = e.originalEvent; }
    data.isTouchEvent = e.type === 'touchstart';
    if (!data.isTouchEvent && 'which' in e && e.which === 3) { return; }
    if (!data.isTouchEvent && 'button' in e && e.button > 0) { return; }
    if (data.isTouched && data.isMoved) { return; }
    if (params.noSwiping && $(e.target).closest(params.noSwipingSelector ? params.noSwipingSelector : ("." + (params.noSwipingClass)))[0]) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!$(e).closest(params.swipeHandler)[0]) { return; }
    }

    touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    var startX = touches.currentX;
    var startY = touches.currentY;

    // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore

    var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (
      edgeSwipeDetection
      && ((startX <= edgeSwipeThreshold)
      || (startX >= win.screen.width - edgeSwipeThreshold))
    ) {
      return;
    }

    Utils.extend(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: undefined,
      startMoving: undefined,
    });

    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = Utils.now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) { data.allowThresholdMove = false; }
    if (e.type !== 'touchstart') {
      var preventDefault = true;
      if ($(e.target).is(data.formElements)) { preventDefault = false; }
      if (
        doc.activeElement
        && $(doc.activeElement).is(data.formElements)
        && doc.activeElement !== e.target
      ) {
        doc.activeElement.blur();
      }

      var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
      if (params.touchStartForcePreventDefault || shouldPreventDefault) {
        e.preventDefault();
      }
    }
    swiper.emit('touchStart', e);
  }

  function onTouchMove (event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params;
    var touches = swiper.touches;
    var rtl = swiper.rtlTranslate;
    var e = event;
    if (e.originalEvent) { e = e.originalEvent; }
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit('touchMoveOpposite', e);
      }
      return;
    }
    if (data.isTouchEvent && e.type === 'mousemove') { return; }
    var pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    var pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      // isMoved = true;
      swiper.allowClick = false;
      if (data.isTouched) {
        Utils.extend(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY,
        });
        data.touchStartTime = Utils.now();
      }
      return;
    }
    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        // Vertical
        if (
          (pageY < touches.startY && swiper.translate <= swiper.maxTranslate())
          || (pageY > touches.startY && swiper.translate >= swiper.minTranslate())
        ) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (
        (pageX < touches.startX && swiper.translate <= swiper.maxTranslate())
        || (pageX > touches.startX && swiper.translate >= swiper.minTranslate())
      ) {
        return;
      }
    }
    if (data.isTouchEvent && doc.activeElement) {
      if (e.target === doc.activeElement && $(e.target).is(data.formElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper.emit('touchMove', e);
    }
    if (e.targetTouches && e.targetTouches.length > 1) { return; }

    touches.currentX = pageX;
    touches.currentY = pageY;

    var diffX = touches.currentX - touches.startX;
    var diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt((Math.pow( diffX, 2 )) + (Math.pow( diffY, 2 ))) < swiper.params.threshold) { return; }

    if (typeof data.isScrolling === 'undefined') {
      var touchAngle;
      if ((swiper.isHorizontal() && touches.currentY === touches.startY) || (swiper.isVertical() && touches.currentX === touches.startX)) {
        data.isScrolling = false;
      } else {
        // eslint-disable-next-line
        if ((diffX * diffX) + (diffY * diffY) >= 25) {
          touchAngle = (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : (90 - touchAngle > params.touchAngle);
        }
      }
    }
    if (data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    if (typeof data.startMoving === 'undefined') {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper.allowClick = false;
    e.preventDefault();
    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }

    if (!data.isMoved) {
      if (params.loop) {
        swiper.loopFix();
      }
      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
      }
      data.allowMomentumBounce = false;
      // Grab Cursor
      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }
      swiper.emit('sliderFirstMove', e);
    }
    swiper.emit('sliderMove', e);
    data.isMoved = true;

    var diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;

    diff *= params.touchRatio;
    if (rtl) { diff = -diff; }

    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
    data.currentTranslate = diff + data.startTranslate;

    var disableParentSwiper = true;
    var resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if ((diff > 0 && data.currentTranslate > swiper.minTranslate())) {
      disableParentSwiper = false;
      if (params.resistance) { data.currentTranslate = (swiper.minTranslate() - 1) + (Math.pow( (-swiper.minTranslate() + data.startTranslate + diff), resistanceRatio )); }
    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) { data.currentTranslate = (swiper.maxTranslate() + 1) - (Math.pow( (swiper.maxTranslate() - data.startTranslate - diff), resistanceRatio )); }
    }

    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    }

    // Directions locks
    if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }


    // Threshold
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }

    if (!params.followFinger) { return; }

    // Update active index in free mode
    if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (params.freeMode) {
      // Velocity
      if (data.velocities.length === 0) {
        data.velocities.push({
          position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
          time: data.touchStartTime,
        });
      }
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
        time: Utils.now(),
      });
    }
    // Update progress
    swiper.updateProgress(data.currentTranslate);
    // Update translate
    swiper.setTranslate(data.currentTranslate);
  }

  function onTouchEnd (event) {
    var swiper = this;
    var data = swiper.touchEventsData;

    var params = swiper.params;
    var touches = swiper.touches;
    var rtl = swiper.rtlTranslate;
    var $wrapperEl = swiper.$wrapperEl;
    var slidesGrid = swiper.slidesGrid;
    var snapGrid = swiper.snapGrid;
    var e = event;
    if (e.originalEvent) { e = e.originalEvent; }
    if (data.allowTouchCallbacks) {
      swiper.emit('touchEnd', e);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    // Return Grab Cursor
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(false);
    }

    // Time diff
    var touchEndTime = Utils.now();
    var timeDiff = touchEndTime - data.touchStartTime;

    // Tap, doubleTap, Click
    if (swiper.allowClick) {
      swiper.updateClickedSlide(e);
      swiper.emit('tap', e);
      if (timeDiff < 300 && (touchEndTime - data.lastClickTime) > 300) {
        if (data.clickTimeout) { clearTimeout(data.clickTimeout); }
        data.clickTimeout = Utils.nextTick(function () {
          if (!swiper || swiper.destroyed) { return; }
          swiper.emit('click', e);
        }, 300);
      }
      if (timeDiff < 300 && (touchEndTime - data.lastClickTime) < 300) {
        if (data.clickTimeout) { clearTimeout(data.clickTimeout); }
        swiper.emit('doubleTap', e);
      }
    }

    data.lastClickTime = Utils.now();
    Utils.nextTick(function () {
      if (!swiper.destroyed) { swiper.allowClick = true; }
    });

    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;

    var currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }

    if (params.freeMode) {
      if (currentPos < -swiper.minTranslate()) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (currentPos > -swiper.maxTranslate()) {
        if (swiper.slides.length < snapGrid.length) {
          swiper.slideTo(snapGrid.length - 1);
        } else {
          swiper.slideTo(swiper.slides.length - 1);
        }
        return;
      }

      if (params.freeModeMomentum) {
        if (data.velocities.length > 1) {
          var lastMoveEvent = data.velocities.pop();
          var velocityEvent = data.velocities.pop();

          var distance = lastMoveEvent.position - velocityEvent.position;
          var time = lastMoveEvent.time - velocityEvent.time;
          swiper.velocity = distance / time;
          swiper.velocity /= 2;
          if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
            swiper.velocity = 0;
          }
          // this implies that the user stopped moving a finger then released.
          // There would be no events with distance zero, so the last event is stale.
          if (time > 150 || (Utils.now() - lastMoveEvent.time) > 300) {
            swiper.velocity = 0;
          }
        } else {
          swiper.velocity = 0;
        }
        swiper.velocity *= params.freeModeMomentumVelocityRatio;

        data.velocities.length = 0;
        var momentumDuration = 1000 * params.freeModeMomentumRatio;
        var momentumDistance = swiper.velocity * momentumDuration;

        var newPosition = swiper.translate + momentumDistance;
        if (rtl) { newPosition = -newPosition; }

        var doBounce = false;
        var afterBouncePosition;
        var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
        var needsLoopFix;
        if (newPosition < swiper.maxTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition + swiper.maxTranslate() < -bounceAmount) {
              newPosition = swiper.maxTranslate() - bounceAmount;
            }
            afterBouncePosition = swiper.maxTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.maxTranslate();
          }
          if (params.loop && params.centeredSlides) { needsLoopFix = true; }
        } else if (newPosition > swiper.minTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition - swiper.minTranslate() > bounceAmount) {
              newPosition = swiper.minTranslate() + bounceAmount;
            }
            afterBouncePosition = swiper.minTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.minTranslate();
          }
          if (params.loop && params.centeredSlides) { needsLoopFix = true; }
        } else if (params.freeModeSticky) {
          var nextSlide;
          for (var j = 0; j < snapGrid.length; j += 1) {
            if (snapGrid[j] > -newPosition) {
              nextSlide = j;
              break;
            }
          }

          if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
            newPosition = snapGrid[nextSlide];
          } else {
            newPosition = snapGrid[nextSlide - 1];
          }
          newPosition = -newPosition;
        }
        if (needsLoopFix) {
          swiper.once('transitionEnd', function () {
            swiper.loopFix();
          });
        }
        // Fix duration
        if (swiper.velocity !== 0) {
          if (rtl) {
            momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
          } else {
            momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
          }
        } else if (params.freeModeSticky) {
          swiper.slideToClosest();
          return;
        }

        if (params.freeModeMomentumBounce && doBounce) {
          swiper.updateProgress(afterBouncePosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed || !data.allowMomentumBounce) { return; }
            swiper.emit('momentumBounce');

            swiper.setTransition(params.speed);
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) { return; }
              swiper.transitionEnd();
            });
          });
        } else if (swiper.velocity) {
          swiper.updateProgress(newPosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          if (!swiper.animating) {
            swiper.animating = true;
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) { return; }
              swiper.transitionEnd();
            });
          }
        } else {
          swiper.updateProgress(newPosition);
        }

        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }

      if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      return;
    }

    // Find current slide
    var stopIndex = 0;
    var groupSize = swiper.slidesSizesGrid[0];
    for (var i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
      if (typeof slidesGrid[i + params.slidesPerGroup] !== 'undefined') {
        if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + params.slidesPerGroup]) {
          stopIndex = i;
          groupSize = slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
        }
      } else if (currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }

    // Find current slide size
    var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;

    if (timeDiff > params.longSwipesMs) {
      // Long touches
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === 'next') {
        if (ratio >= params.longSwipesRatio) { swiper.slideTo(stopIndex + params.slidesPerGroup); }
        else { swiper.slideTo(stopIndex); }
      }
      if (swiper.swipeDirection === 'prev') {
        if (ratio > (1 - params.longSwipesRatio)) { swiper.slideTo(stopIndex + params.slidesPerGroup); }
        else { swiper.slideTo(stopIndex); }
      }
    } else {
      // Short swipes
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(stopIndex + params.slidesPerGroup);
      }
      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(stopIndex);
      }
    }
  }

  function onResize () {
    var swiper = this;

    var params = swiper.params;
    var el = swiper.el;

    if (el && el.offsetWidth === 0) { return; }

    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Save locks
    var allowSlideNext = swiper.allowSlideNext;
    var allowSlidePrev = swiper.allowSlidePrev;
    var snapGrid = swiper.snapGrid;

    // Disable locks on resize
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;

    swiper.updateSize();
    swiper.updateSlides();

    if (params.freeMode) {
      var newTranslate = Math.min(Math.max(swiper.translate, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();

      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      swiper.updateSlidesClasses();
      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
    }
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
      swiper.autoplay.run();
    }
    // Return locks after resize
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;

    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }

  function onClick (e) {
    var swiper = this;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks) { e.preventDefault(); }
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }

  function attachEvents() {
    var swiper = this;
    var params = swiper.params;
    var touchEvents = swiper.touchEvents;
    var el = swiper.el;
    var wrapperEl = swiper.wrapperEl;

    {
      swiper.onTouchStart = onTouchStart.bind(swiper);
      swiper.onTouchMove = onTouchMove.bind(swiper);
      swiper.onTouchEnd = onTouchEnd.bind(swiper);
    }

    swiper.onClick = onClick.bind(swiper);

    var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
    var capture = !!params.nested;

    // Touch Events
    {
      if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
        target.addEventListener(touchEvents.start, swiper.onTouchStart, false);
        doc.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
        doc.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (Support.touch) {
          var passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
          target.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
          target.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? { passive: false, capture: capture } : capture);
          target.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
        }
        if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
          target.addEventListener('mousedown', swiper.onTouchStart, false);
          doc.addEventListener('mousemove', swiper.onTouchMove, capture);
          doc.addEventListener('mouseup', swiper.onTouchEnd, false);
        }
      }
      // Prevent Links Clicks
      if (params.preventClicks || params.preventClicksPropagation) {
        target.addEventListener('click', swiper.onClick, true);
      }
    }

    // Resize handler
    swiper.on((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize, true);
  }

  function detachEvents() {
    var swiper = this;

    var params = swiper.params;
    var touchEvents = swiper.touchEvents;
    var el = swiper.el;
    var wrapperEl = swiper.wrapperEl;

    var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
    var capture = !!params.nested;

    // Touch Events
    {
      if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
        target.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
        doc.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        doc.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (Support.touch) {
          var passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
          target.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
          target.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
          target.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
        }
        if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
          target.removeEventListener('mousedown', swiper.onTouchStart, false);
          doc.removeEventListener('mousemove', swiper.onTouchMove, capture);
          doc.removeEventListener('mouseup', swiper.onTouchEnd, false);
        }
      }
      // Prevent Links Clicks
      if (params.preventClicks || params.preventClicksPropagation) {
        target.removeEventListener('click', swiper.onClick, true);
      }
    }

    // Resize handler
    swiper.off((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize);
  }

  var events = {
    attachEvents: attachEvents,
    detachEvents: detachEvents,
  };

  function setBreakpoint () {
    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var initialized = swiper.initialized;
    var loopedSlides = swiper.loopedSlides; if ( loopedSlides === void 0 ) loopedSlides = 0;
    var params = swiper.params;
    var breakpoints = params.breakpoints;
    if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0)) { return; }

    // Set breakpoint for window width and update parameters
    var breakpoint = swiper.getBreakpoint(breakpoints);

    if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
      var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
      if (breakpointOnlyParams) {
        ['slidesPerView', 'spaceBetween', 'slidesPerGroup'].forEach(function (param) {
          var paramValue = breakpointOnlyParams[param];
          if (typeof paramValue === 'undefined') { return; }
          if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
            breakpointOnlyParams[param] = 'auto';
          } else if (param === 'slidesPerView') {
            breakpointOnlyParams[param] = parseFloat(paramValue);
          } else {
            breakpointOnlyParams[param] = parseInt(paramValue, 10);
          }
        });
      }

      var breakpointParams = breakpointOnlyParams || swiper.originalParams;
      var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
      var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

      if (directionChanged && initialized) {
        swiper.changeDirection();
      }

      Utils.extend(swiper.params, breakpointParams);

      Utils.extend(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
      });

      swiper.currentBreakpoint = breakpoint;

      if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate();
        swiper.updateSlides();
        swiper.slideTo((activeIndex - loopedSlides) + swiper.loopedSlides, 0, false);
      }

      swiper.emit('breakpoint', breakpointParams);
    }
  }

  function getBreakpoint (breakpoints) {
    var swiper = this;
    // Get breakpoint for window width
    if (!breakpoints) { return undefined; }
    var breakpoint = false;
    var points = [];
    Object.keys(breakpoints).forEach(function (point) {
      points.push(point);
    });
    points.sort(function (a, b) { return parseInt(a, 10) - parseInt(b, 10); });
    for (var i = 0; i < points.length; i += 1) {
      var point = points[i];
      if (swiper.params.breakpointsInverse) {
        if (point <= win.innerWidth) {
          breakpoint = point;
        }
      } else if (point >= win.innerWidth && !breakpoint) {
        breakpoint = point;
      }
    }
    return breakpoint || 'max';
  }

  var breakpoints = { setBreakpoint: setBreakpoint, getBreakpoint: getBreakpoint };

  function addClasses () {
    var swiper = this;
    var classNames = swiper.classNames;
    var params = swiper.params;
    var rtl = swiper.rtl;
    var $el = swiper.$el;
    var suffixes = [];

    suffixes.push('initialized');
    suffixes.push(params.direction);

    if (params.freeMode) {
      suffixes.push('free-mode');
    }
    if (!Support.flexbox) {
      suffixes.push('no-flexbox');
    }
    if (params.autoHeight) {
      suffixes.push('autoheight');
    }
    if (rtl) {
      suffixes.push('rtl');
    }
    if (params.slidesPerColumn > 1) {
      suffixes.push('multirow');
    }
    if (Device.android) {
      suffixes.push('android');
    }
    if (Device.ios) {
      suffixes.push('ios');
    }
    // WP8 Touch Events Fix
    if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
      suffixes.push(("wp8-" + (params.direction)));
    }

    suffixes.forEach(function (suffix) {
      classNames.push(params.containerModifierClass + suffix);
    });

    $el.addClass(classNames.join(' '));
  }

  function removeClasses () {
    var swiper = this;
    var $el = swiper.$el;
    var classNames = swiper.classNames;

    $el.removeClass(classNames.join(' '));
  }

  var classes = { addClasses: addClasses, removeClasses: removeClasses };

  function loadImage (imageEl, src, srcset, sizes, checkForComplete, callback) {
    var image;
    function onReady() {
      if (callback) { callback(); }
    }
    if (!imageEl.complete || !checkForComplete) {
      if (src) {
        image = new win.Image();
        image.onload = onReady;
        image.onerror = onReady;
        if (sizes) {
          image.sizes = sizes;
        }
        if (srcset) {
          image.srcset = srcset;
        }
        if (src) {
          image.src = src;
        }
      } else {
        onReady();
      }
    } else {
      // image already loaded...
      onReady();
    }
  }

  function preloadImages () {
    var swiper = this;
    swiper.imagesToLoad = swiper.$el.find('img');
    function onReady() {
      if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) { return; }
      if (swiper.imagesLoaded !== undefined) { swiper.imagesLoaded += 1; }
      if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
        if (swiper.params.updateOnImagesReady) { swiper.update(); }
        swiper.emit('imagesReady');
      }
    }
    for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
      var imageEl = swiper.imagesToLoad[i];
      swiper.loadImage(
        imageEl,
        imageEl.currentSrc || imageEl.getAttribute('src'),
        imageEl.srcset || imageEl.getAttribute('srcset'),
        imageEl.sizes || imageEl.getAttribute('sizes'),
        true,
        onReady
      );
    }
  }

  var images = {
    loadImage: loadImage,
    preloadImages: preloadImages,
  };

  function checkOverflow() {
    var swiper = this;
    var wasLocked = swiper.isLocked;

    swiper.isLocked = swiper.snapGrid.length === 1;
    swiper.allowSlideNext = !swiper.isLocked;
    swiper.allowSlidePrev = !swiper.isLocked;

    // events
    if (wasLocked !== swiper.isLocked) { swiper.emit(swiper.isLocked ? 'lock' : 'unlock'); }

    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
      swiper.navigation.update();
    }
  }

  var checkOverflow$1 = { checkOverflow: checkOverflow };

  var defaults = {
    init: true,
    direction: 'horizontal',
    touchEventsTarget: 'container',
    initialSlide: 0,
    speed: 300,
    //
    preventInteractionOnTransition: false,

    // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,

    // Free mode
    freeMode: false,
    freeModeMomentum: true,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: true,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: false,
    freeModeMinimumVelocity: 0.02,

    // Autoheight
    autoHeight: false,

    // Set wrapper width
    setWrapperSize: false,

    // Virtual Translate
    virtualTranslate: false,

    // Effects
    effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

    // Breakpoints
    breakpoints: undefined,
    breakpointsInverse: false,

    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: 'column',
    slidesPerGroup: 1,
    centeredSlides: false,
    slidesOffsetBefore: 0, // in px
    slidesOffsetAfter: 0, // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,

    // Disable swiper and hide navigation when container not overflow
    watchOverflow: false,

    // Round length
    roundLengths: false,

    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: true,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,

    // Unique Navigation Elements
    uniqueNavElements: true,

    // Resistance
    resistance: true,
    resistanceRatio: 0.85,

    // Progress
    watchSlidesProgress: false,
    watchSlidesVisibility: false,

    // Cursor
    grabCursor: false,

    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,

    // Images
    preloadImages: true,
    updateOnImagesReady: true,

    // loop
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: false,

    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null, // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,

    // Passive Listeners
    passiveListeners: true,

    // NS
    containerModifierClass: 'swiper-container-', // NEW
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-invisible-blank',
    slideActiveClass: 'swiper-slide-active',
    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
    slidePrevClass: 'swiper-slide-prev',
    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
    wrapperClass: 'swiper-wrapper',

    // Callbacks
    runCallbacksOnInit: true,
  };

  /* eslint no-param-reassign: "off" */

  var prototypes = {
    update: update,
    translate: translate,
    transition: transition$1,
    slide: slide,
    loop: loop,
    grabCursor: grabCursor,
    manipulation: manipulation,
    events: events,
    breakpoints: breakpoints,
    checkOverflow: checkOverflow$1,
    classes: classes,
    images: images,
  };

  var extendedDefaults = {};

  var Swiper = /*@__PURE__*/(function (SwiperClass) {
    function Swiper() {
      var assign;

      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];
      var el;
      var params;
      if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
        params = args[0];
      } else {
        (assign = args, el = assign[0], params = assign[1]);
      }
      if (!params) { params = {}; }

      params = Utils.extend({}, params);
      if (el && !params.el) { params.el = el; }

      SwiperClass.call(this, params);

      Object.keys(prototypes).forEach(function (prototypeGroup) {
        Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
          if (!Swiper.prototype[protoMethod]) {
            Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
          }
        });
      });

      // Swiper Instance
      var swiper = this;
      if (typeof swiper.modules === 'undefined') {
        swiper.modules = {};
      }
      Object.keys(swiper.modules).forEach(function (moduleName) {
        var module = swiper.modules[moduleName];
        if (module.params) {
          var moduleParamName = Object.keys(module.params)[0];
          var moduleParams = module.params[moduleParamName];
          if (typeof moduleParams !== 'object' || moduleParams === null) { return; }
          if (!(moduleParamName in params && 'enabled' in moduleParams)) { return; }
          if (params[moduleParamName] === true) {
            params[moduleParamName] = { enabled: true };
          }
          if (
            typeof params[moduleParamName] === 'object'
            && !('enabled' in params[moduleParamName])
          ) {
            params[moduleParamName].enabled = true;
          }
          if (!params[moduleParamName]) { params[moduleParamName] = { enabled: false }; }
        }
      });

      // Extend defaults with modules params
      var swiperParams = Utils.extend({}, defaults);
      swiper.useModulesParams(swiperParams);

      // Extend defaults with passed params
      swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = Utils.extend({}, swiper.params);
      swiper.passedParams = Utils.extend({}, params);

      // Save Dom lib
      swiper.$ = $;

      // Find el
      var $el = $(swiper.params.el);
      el = $el[0];

      if (!el) {
        return undefined;
      }

      if ($el.length > 1) {
        var swipers = [];
        $el.each(function (index, containerEl) {
          var newParams = Utils.extend({}, params, { el: containerEl });
          swipers.push(new Swiper(newParams));
        });
        return swipers;
      }

      el.swiper = swiper;
      $el.data('swiper', swiper);

      // Find Wrapper
      var $wrapperEl = $el.children(("." + (swiper.params.wrapperClass)));

      // Extend Swiper
      Utils.extend(swiper, {
        $el: $el,
        el: el,
        $wrapperEl: $wrapperEl,
        wrapperEl: $wrapperEl[0],

        // Classes
        classNames: [],

        // Slides
        slides: $(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],

        // isDirection
        isHorizontal: function isHorizontal() {
          return swiper.params.direction === 'horizontal';
        },
        isVertical: function isVertical() {
          return swiper.params.direction === 'vertical';
        },
        // RTL
        rtl: (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
        rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
        wrongRTL: $wrapperEl.css('display') === '-webkit-box',

        // Indexes
        activeIndex: 0,
        realIndex: 0,

        //
        isBeginning: true,
        isEnd: false,

        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,

        // Locks
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,

        // Touch Events
        touchEvents: (function touchEvents() {
          var touch = ['touchstart', 'touchmove', 'touchend'];
          var desktop = ['mousedown', 'mousemove', 'mouseup'];
          if (Support.pointerEvents) {
            desktop = ['pointerdown', 'pointermove', 'pointerup'];
          } else if (Support.prefixedPointerEvents) {
            desktop = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
          }
          swiper.touchEventsTouch = {
            start: touch[0],
            move: touch[1],
            end: touch[2],
          };
          swiper.touchEventsDesktop = {
            start: desktop[0],
            move: desktop[1],
            end: desktop[2],
          };
          return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
        }()),
        touchEventsData: {
          isTouched: undefined,
          isMoved: undefined,
          allowTouchCallbacks: undefined,
          touchStartTime: undefined,
          isScrolling: undefined,
          currentTranslate: undefined,
          startTranslate: undefined,
          allowThresholdMove: undefined,
          // Form elements to match
          formElements: 'input, select, option, textarea, button, video',
          // Last click time
          lastClickTime: Utils.now(),
          clickTimeout: undefined,
          // Velocities
          velocities: [],
          allowMomentumBounce: undefined,
          isTouchEvent: undefined,
          startMoving: undefined,
        },

        // Clicks
        allowClick: true,

        // Touches
        allowTouchMove: swiper.params.allowTouchMove,

        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0,
        },

        // Images
        imagesToLoad: [],
        imagesLoaded: 0,

      });

      // Install Modules
      swiper.useModules();

      // Init
      if (swiper.params.init) {
        swiper.init();
      }

      // Return app instance
      return swiper;
    }

    if ( SwiperClass ) Swiper.__proto__ = SwiperClass;
    Swiper.prototype = Object.create( SwiperClass && SwiperClass.prototype );
    Swiper.prototype.constructor = Swiper;

    var staticAccessors = { extendedDefaults: { configurable: true },defaults: { configurable: true },Class: { configurable: true },$: { configurable: true } };

    Swiper.prototype.slidesPerViewDynamic = function slidesPerViewDynamic () {
      var swiper = this;
      var params = swiper.params;
      var slides = swiper.slides;
      var slidesGrid = swiper.slidesGrid;
      var swiperSize = swiper.size;
      var activeIndex = swiper.activeIndex;
      var spv = 1;
      if (params.centeredSlides) {
        var slideSize = slides[activeIndex].swiperSlideSize;
        var breakLoop;
        for (var i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) { breakLoop = true; }
          }
        }
        for (var i$1 = activeIndex - 1; i$1 >= 0; i$1 -= 1) {
          if (slides[i$1] && !breakLoop) {
            slideSize += slides[i$1].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) { breakLoop = true; }
          }
        }
      } else {
        for (var i$2 = activeIndex + 1; i$2 < slides.length; i$2 += 1) {
          if (slidesGrid[i$2] - slidesGrid[activeIndex] < swiperSize) {
            spv += 1;
          }
        }
      }
      return spv;
    };

    Swiper.prototype.update = function update () {
      var swiper = this;
      if (!swiper || swiper.destroyed) { return; }
      var snapGrid = swiper.snapGrid;
      var params = swiper.params;
      // Breakpoints
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      function setTranslate() {
        var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      var translated;
      if (swiper.params.freeMode) {
        setTranslate();
        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
          translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit('update');
    };

    Swiper.prototype.changeDirection = function changeDirection (newDirection, needUpdate) {
      if ( needUpdate === void 0 ) needUpdate = true;

      var swiper = this;
      var currentDirection = swiper.params.direction;
      if (!newDirection) {
        // eslint-disable-next-line
        newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
      }
      if ((newDirection === currentDirection) || (newDirection !== 'horizontal' && newDirection !== 'vertical')) {
        return swiper;
      }

      swiper.$el
        .removeClass(("" + (swiper.params.containerModifierClass) + currentDirection + " wp8-" + currentDirection))
        .addClass(("" + (swiper.params.containerModifierClass) + newDirection));

      if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
        swiper.$el.addClass(((swiper.params.containerModifierClass) + "wp8-" + newDirection));
      }

      swiper.params.direction = newDirection;

      swiper.slides.each(function (slideIndex, slideEl) {
        if (newDirection === 'vertical') {
          slideEl.style.width = '';
        } else {
          slideEl.style.height = '';
        }
      });

      swiper.emit('changeDirection');
      if (needUpdate) { swiper.update(); }

      return swiper;
    };

    Swiper.prototype.init = function init () {
      var swiper = this;
      if (swiper.initialized) { return; }

      swiper.emit('beforeInit');

      // Set breakpoint
      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      }

      // Add Classes
      swiper.addClasses();

      // Create loop
      if (swiper.params.loop) {
        swiper.loopCreate();
      }

      // Update size
      swiper.updateSize();

      // Update slides
      swiper.updateSlides();

      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }

      // Set Grab Cursor
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }

      if (swiper.params.preloadImages) {
        swiper.preloadImages();
      }

      // Slide To Initial Slide
      if (swiper.params.loop) {
        swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
      }

      // Attach events
      swiper.attachEvents();

      // Init Flag
      swiper.initialized = true;

      // Emit
      swiper.emit('init');
    };

    Swiper.prototype.destroy = function destroy (deleteInstance, cleanStyles) {
      if ( deleteInstance === void 0 ) deleteInstance = true;
      if ( cleanStyles === void 0 ) cleanStyles = true;

      var swiper = this;
      var params = swiper.params;
      var $el = swiper.$el;
      var $wrapperEl = swiper.$wrapperEl;
      var slides = swiper.slides;

      if (typeof swiper.params === 'undefined' || swiper.destroyed) {
        return null;
      }

      swiper.emit('beforeDestroy');

      // Init Flag
      swiper.initialized = false;

      // Detach events
      swiper.detachEvents();

      // Destroy loop
      if (params.loop) {
        swiper.loopDestroy();
      }

      // Cleanup styles
      if (cleanStyles) {
        swiper.removeClasses();
        $el.removeAttr('style');
        $wrapperEl.removeAttr('style');
        if (slides && slides.length) {
          slides
            .removeClass([
              params.slideVisibleClass,
              params.slideActiveClass,
              params.slideNextClass,
              params.slidePrevClass ].join(' '))
            .removeAttr('style')
            .removeAttr('data-swiper-slide-index')
            .removeAttr('data-swiper-column')
            .removeAttr('data-swiper-row');
        }
      }

      swiper.emit('destroy');

      // Detach emitter events
      Object.keys(swiper.eventsListeners).forEach(function (eventName) {
        swiper.off(eventName);
      });

      if (deleteInstance !== false) {
        swiper.$el[0].swiper = null;
        swiper.$el.data('swiper', null);
        Utils.deleteProps(swiper);
      }
      swiper.destroyed = true;

      return null;
    };

    Swiper.extendDefaults = function extendDefaults (newDefaults) {
      Utils.extend(extendedDefaults, newDefaults);
    };

    staticAccessors.extendedDefaults.get = function () {
      return extendedDefaults;
    };

    staticAccessors.defaults.get = function () {
      return defaults;
    };

    staticAccessors.Class.get = function () {
      return SwiperClass;
    };

    staticAccessors.$.get = function () {
      return $;
    };

    Object.defineProperties( Swiper, staticAccessors );

    return Swiper;
  }(SwiperClass));

  var Device$1 = {
    name: 'device',
    proto: {
      device: Device,
    },
    static: {
      device: Device,
    },
  };

  var Support$1 = {
    name: 'support',
    proto: {
      support: Support,
    },
    static: {
      support: Support,
    },
  };

  var Browser$1 = {
    name: 'browser',
    proto: {
      browser: Browser,
    },
    static: {
      browser: Browser,
    },
  };

  var Resize = {
    name: 'resize',
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        resize: {
          resizeHandler: function resizeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
            swiper.emit('beforeResize');
            swiper.emit('resize');
          },
          orientationChangeHandler: function orientationChangeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
            swiper.emit('orientationchange');
          },
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        // Emit resize
        win.addEventListener('resize', swiper.resize.resizeHandler);

        // Emit orientationchange
        win.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
      },
      destroy: function destroy() {
        var swiper = this;
        win.removeEventListener('resize', swiper.resize.resizeHandler);
        win.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
      },
    },
  };

  var Observer = {
    func: win.MutationObserver || win.WebkitMutationObserver,
    attach: function attach(target, options) {
      if ( options === void 0 ) options = {};

      var swiper = this;

      var ObserverFunc = Observer.func;
      var observer = new ObserverFunc(function (mutations) {
        // The observerUpdate event should only be triggered
        // once despite the number of mutations.  Additional
        // triggers are redundant and are very costly
        if (mutations.length === 1) {
          swiper.emit('observerUpdate', mutations[0]);
          return;
        }
        var observerUpdate = function observerUpdate() {
          swiper.emit('observerUpdate', mutations[0]);
        };

        if (win.requestAnimationFrame) {
          win.requestAnimationFrame(observerUpdate);
        } else {
          win.setTimeout(observerUpdate, 0);
        }
      });

      observer.observe(target, {
        attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
        childList: typeof options.childList === 'undefined' ? true : options.childList,
        characterData: typeof options.characterData === 'undefined' ? true : options.characterData,
      });

      swiper.observer.observers.push(observer);
    },
    init: function init() {
      var swiper = this;
      if (!Support.observer || !swiper.params.observer) { return; }
      if (swiper.params.observeParents) {
        var containerParents = swiper.$el.parents();
        for (var i = 0; i < containerParents.length; i += 1) {
          swiper.observer.attach(containerParents[i]);
        }
      }
      // Observe container
      swiper.observer.attach(swiper.$el[0], { childList: swiper.params.observeSlideChildren });

      // Observe wrapper
      swiper.observer.attach(swiper.$wrapperEl[0], { attributes: false });
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.observer.observers.forEach(function (observer) {
        observer.disconnect();
      });
      swiper.observer.observers = [];
    },
  };

  var Observer$1 = {
    name: 'observer',
    params: {
      observer: false,
      observeParents: false,
      observeSlideChildren: false,
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        observer: {
          init: Observer.init.bind(swiper),
          attach: Observer.attach.bind(swiper),
          destroy: Observer.destroy.bind(swiper),
          observers: [],
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.observer.init();
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.observer.destroy();
      },
    },
  };

  var Virtual = {
    update: function update(force) {
      var swiper = this;
      var ref = swiper.params;
      var slidesPerView = ref.slidesPerView;
      var slidesPerGroup = ref.slidesPerGroup;
      var centeredSlides = ref.centeredSlides;
      var ref$1 = swiper.params.virtual;
      var addSlidesBefore = ref$1.addSlidesBefore;
      var addSlidesAfter = ref$1.addSlidesAfter;
      var ref$2 = swiper.virtual;
      var previousFrom = ref$2.from;
      var previousTo = ref$2.to;
      var slides = ref$2.slides;
      var previousSlidesGrid = ref$2.slidesGrid;
      var renderSlide = ref$2.renderSlide;
      var previousOffset = ref$2.offset;
      swiper.updateActiveIndex();
      var activeIndex = swiper.activeIndex || 0;

      var offsetProp;
      if (swiper.rtlTranslate) { offsetProp = 'right'; }
      else { offsetProp = swiper.isHorizontal() ? 'left' : 'top'; }

      var slidesAfter;
      var slidesBefore;
      if (centeredSlides) {
        slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
        slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      } else {
        slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
        slidesBefore = slidesPerGroup + addSlidesAfter;
      }
      var from = Math.max((activeIndex || 0) - slidesBefore, 0);
      var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
      var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);

      Utils.extend(swiper.virtual, {
        from: from,
        to: to,
        offset: offset,
        slidesGrid: swiper.slidesGrid,
      });

      function onRendered() {
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        if (swiper.lazy && swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      }

      if (previousFrom === from && previousTo === to && !force) {
        if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
          swiper.slides.css(offsetProp, (offset + "px"));
        }
        swiper.updateProgress();
        return;
      }
      if (swiper.params.virtual.renderExternal) {
        swiper.params.virtual.renderExternal.call(swiper, {
          offset: offset,
          from: from,
          to: to,
          slides: (function getSlides() {
            var slidesToRender = [];
            for (var i = from; i <= to; i += 1) {
              slidesToRender.push(slides[i]);
            }
            return slidesToRender;
          }()),
        });
        onRendered();
        return;
      }
      var prependIndexes = [];
      var appendIndexes = [];
      if (force) {
        swiper.$wrapperEl.find(("." + (swiper.params.slideClass))).remove();
      } else {
        for (var i = previousFrom; i <= previousTo; i += 1) {
          if (i < from || i > to) {
            swiper.$wrapperEl.find(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + i + "\"]")).remove();
          }
        }
      }
      for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
        if (i$1 >= from && i$1 <= to) {
          if (typeof previousTo === 'undefined' || force) {
            appendIndexes.push(i$1);
          } else {
            if (i$1 > previousTo) { appendIndexes.push(i$1); }
            if (i$1 < previousFrom) { prependIndexes.push(i$1); }
          }
        }
      }
      appendIndexes.forEach(function (index) {
        swiper.$wrapperEl.append(renderSlide(slides[index], index));
      });
      prependIndexes.sort(function (a, b) { return b - a; }).forEach(function (index) {
        swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
      });
      swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, (offset + "px"));
      onRendered();
    },
    renderSlide: function renderSlide(slide, index) {
      var swiper = this;
      var params = swiper.params.virtual;
      if (params.cache && swiper.virtual.cache[index]) {
        return swiper.virtual.cache[index];
      }
      var $slideEl = params.renderSlide
        ? $(params.renderSlide.call(swiper, slide, index))
        : $(("<div class=\"" + (swiper.params.slideClass) + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>"));
      if (!$slideEl.attr('data-swiper-slide-index')) { $slideEl.attr('data-swiper-slide-index', index); }
      if (params.cache) { swiper.virtual.cache[index] = $slideEl; }
      return $slideEl;
    },
    appendSlide: function appendSlide(slides) {
      var swiper = this;
      if (typeof slides === 'object' && 'length' in slides) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) { swiper.virtual.slides.push(slides[i]); }
        }
      } else {
        swiper.virtual.slides.push(slides);
      }
      swiper.virtual.update(true);
    },
    prependSlide: function prependSlide(slides) {
      var swiper = this;
      var activeIndex = swiper.activeIndex;
      var newActiveIndex = activeIndex + 1;
      var numberOfNewSlides = 1;

      if (Array.isArray(slides)) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) { swiper.virtual.slides.unshift(slides[i]); }
        }
        newActiveIndex = activeIndex + slides.length;
        numberOfNewSlides = slides.length;
      } else {
        swiper.virtual.slides.unshift(slides);
      }
      if (swiper.params.virtual.cache) {
        var cache = swiper.virtual.cache;
        var newCache = {};
        Object.keys(cache).forEach(function (cachedIndex) {
          newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cache[cachedIndex];
        });
        swiper.virtual.cache = newCache;
      }
      swiper.virtual.update(true);
      swiper.slideTo(newActiveIndex, 0);
    },
    removeSlide: function removeSlide(slidesIndexes) {
      var swiper = this;
      if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) { return; }
      var activeIndex = swiper.activeIndex;
      if (Array.isArray(slidesIndexes)) {
        for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
          swiper.virtual.slides.splice(slidesIndexes[i], 1);
          if (swiper.params.virtual.cache) {
            delete swiper.virtual.cache[slidesIndexes[i]];
          }
          if (slidesIndexes[i] < activeIndex) { activeIndex -= 1; }
          activeIndex = Math.max(activeIndex, 0);
        }
      } else {
        swiper.virtual.slides.splice(slidesIndexes, 1);
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes];
        }
        if (slidesIndexes < activeIndex) { activeIndex -= 1; }
        activeIndex = Math.max(activeIndex, 0);
      }
      swiper.virtual.update(true);
      swiper.slideTo(activeIndex, 0);
    },
    removeAllSlides: function removeAllSlides() {
      var swiper = this;
      swiper.virtual.slides = [];
      if (swiper.params.virtual.cache) {
        swiper.virtual.cache = {};
      }
      swiper.virtual.update(true);
      swiper.slideTo(0, 0);
    },
  };

  var Virtual$1 = {
    name: 'virtual',
    params: {
      virtual: {
        enabled: false,
        slides: [],
        cache: true,
        renderSlide: null,
        renderExternal: null,
        addSlidesBefore: 0,
        addSlidesAfter: 0,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        virtual: {
          update: Virtual.update.bind(swiper),
          appendSlide: Virtual.appendSlide.bind(swiper),
          prependSlide: Virtual.prependSlide.bind(swiper),
          removeSlide: Virtual.removeSlide.bind(swiper),
          removeAllSlides: Virtual.removeAllSlides.bind(swiper),
          renderSlide: Virtual.renderSlide.bind(swiper),
          slides: swiper.params.virtual.slides,
          cache: {},
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (!swiper.params.virtual.enabled) { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "virtual"));
        var overwriteParams = {
          watchSlidesProgress: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);

        if (!swiper.params.initialSlide) {
          swiper.virtual.update();
        }
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (!swiper.params.virtual.enabled) { return; }
        swiper.virtual.update();
      },
    },
  };

  var Keyboard = {
    handle: function handle(event) {
      var swiper = this;
      var rtl = swiper.rtlTranslate;
      var e = event;
      if (e.originalEvent) { e = e.originalEvent; } // jquery fix
      var kc = e.keyCode || e.charCode;
      // Directions locks
      if (!swiper.allowSlideNext && ((swiper.isHorizontal() && kc === 39) || (swiper.isVertical() && kc === 40) || kc === 34)) {
        return false;
      }
      if (!swiper.allowSlidePrev && ((swiper.isHorizontal() && kc === 37) || (swiper.isVertical() && kc === 38) || kc === 33)) {
        return false;
      }
      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
        return undefined;
      }
      if (doc.activeElement && doc.activeElement.nodeName && (doc.activeElement.nodeName.toLowerCase() === 'input' || doc.activeElement.nodeName.toLowerCase() === 'textarea')) {
        return undefined;
      }
      if (swiper.params.keyboard.onlyInViewport && (kc === 33 || kc === 34 || kc === 37 || kc === 39 || kc === 38 || kc === 40)) {
        var inView = false;
        // Check that swiper should be inside of visible area of window
        if (swiper.$el.parents(("." + (swiper.params.slideClass))).length > 0 && swiper.$el.parents(("." + (swiper.params.slideActiveClass))).length === 0) {
          return undefined;
        }
        var windowWidth = win.innerWidth;
        var windowHeight = win.innerHeight;
        var swiperOffset = swiper.$el.offset();
        if (rtl) { swiperOffset.left -= swiper.$el[0].scrollLeft; }
        var swiperCoord = [
          [swiperOffset.left, swiperOffset.top],
          [swiperOffset.left + swiper.width, swiperOffset.top],
          [swiperOffset.left, swiperOffset.top + swiper.height],
          [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height] ];
        for (var i = 0; i < swiperCoord.length; i += 1) {
          var point = swiperCoord[i];
          if (
            point[0] >= 0 && point[0] <= windowWidth
            && point[1] >= 0 && point[1] <= windowHeight
          ) {
            inView = true;
          }
        }
        if (!inView) { return undefined; }
      }
      if (swiper.isHorizontal()) {
        if (kc === 33 || kc === 34 || kc === 37 || kc === 39) {
          if (e.preventDefault) { e.preventDefault(); }
          else { e.returnValue = false; }
        }
        if (((kc === 34 || kc === 39) && !rtl) || ((kc === 33 || kc === 37) && rtl)) { swiper.slideNext(); }
        if (((kc === 33 || kc === 37) && !rtl) || ((kc === 34 || kc === 39) && rtl)) { swiper.slidePrev(); }
      } else {
        if (kc === 33 || kc === 34 || kc === 38 || kc === 40) {
          if (e.preventDefault) { e.preventDefault(); }
          else { e.returnValue = false; }
        }
        if (kc === 34 || kc === 40) { swiper.slideNext(); }
        if (kc === 33 || kc === 38) { swiper.slidePrev(); }
      }
      swiper.emit('keyPress', kc);
      return undefined;
    },
    enable: function enable() {
      var swiper = this;
      if (swiper.keyboard.enabled) { return; }
      $(doc).on('keydown', swiper.keyboard.handle);
      swiper.keyboard.enabled = true;
    },
    disable: function disable() {
      var swiper = this;
      if (!swiper.keyboard.enabled) { return; }
      $(doc).off('keydown', swiper.keyboard.handle);
      swiper.keyboard.enabled = false;
    },
  };

  var Keyboard$1 = {
    name: 'keyboard',
    params: {
      keyboard: {
        enabled: false,
        onlyInViewport: true,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        keyboard: {
          enabled: false,
          enable: Keyboard.enable.bind(swiper),
          disable: Keyboard.disable.bind(swiper),
          handle: Keyboard.handle.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.keyboard.enabled) {
          swiper.keyboard.enable();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.keyboard.enabled) {
          swiper.keyboard.disable();
        }
      },
    },
  };

  function isEventSupported() {
    var eventName = 'onwheel';
    var isSupported = eventName in doc;

    if (!isSupported) {
      var element = doc.createElement('div');
      element.setAttribute(eventName, 'return;');
      isSupported = typeof element[eventName] === 'function';
    }

    if (!isSupported
      && doc.implementation
      && doc.implementation.hasFeature
      // always returns true in newer browsers as per the standard.
      // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
      && doc.implementation.hasFeature('', '') !== true
    ) {
      // This is the only way to test support for the `wheel` event in IE9+.
      isSupported = doc.implementation.hasFeature('Events.wheel', '3.0');
    }

    return isSupported;
  }
  var Mousewheel = {
    lastScrollTime: Utils.now(),
    event: (function getEvent() {
      if (win.navigator.userAgent.indexOf('firefox') > -1) { return 'DOMMouseScroll'; }
      return isEventSupported() ? 'wheel' : 'mousewheel';
    }()),
    normalize: function normalize(e) {
      // Reasonable defaults
      var PIXEL_STEP = 10;
      var LINE_HEIGHT = 40;
      var PAGE_HEIGHT = 800;

      var sX = 0;
      var sY = 0; // spinX, spinY
      var pX = 0;
      var pY = 0; // pixelX, pixelY

      // Legacy
      if ('detail' in e) {
        sY = e.detail;
      }
      if ('wheelDelta' in e) {
        sY = -e.wheelDelta / 120;
      }
      if ('wheelDeltaY' in e) {
        sY = -e.wheelDeltaY / 120;
      }
      if ('wheelDeltaX' in e) {
        sX = -e.wheelDeltaX / 120;
      }

      // side scrolling on FF with DOMMouseScroll
      if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
      }

      pX = sX * PIXEL_STEP;
      pY = sY * PIXEL_STEP;

      if ('deltaY' in e) {
        pY = e.deltaY;
      }
      if ('deltaX' in e) {
        pX = e.deltaX;
      }

      if ((pX || pY) && e.deltaMode) {
        if (e.deltaMode === 1) { // delta in LINE units
          pX *= LINE_HEIGHT;
          pY *= LINE_HEIGHT;
        } else { // delta in PAGE units
          pX *= PAGE_HEIGHT;
          pY *= PAGE_HEIGHT;
        }
      }

      // Fall-back if spin cannot be determined
      if (pX && !sX) {
        sX = (pX < 1) ? -1 : 1;
      }
      if (pY && !sY) {
        sY = (pY < 1) ? -1 : 1;
      }

      return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY,
      };
    },
    handleMouseEnter: function handleMouseEnter() {
      var swiper = this;
      swiper.mouseEntered = true;
    },
    handleMouseLeave: function handleMouseLeave() {
      var swiper = this;
      swiper.mouseEntered = false;
    },
    handle: function handle(event) {
      var e = event;
      var swiper = this;
      var params = swiper.params.mousewheel;

      if (!swiper.mouseEntered && !params.releaseOnEdges) { return true; }

      if (e.originalEvent) { e = e.originalEvent; } // jquery fix
      var delta = 0;
      var rtlFactor = swiper.rtlTranslate ? -1 : 1;

      var data = Mousewheel.normalize(e);

      if (params.forceToAxis) {
        if (swiper.isHorizontal()) {
          if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) { delta = data.pixelX * rtlFactor; }
          else { return true; }
        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) { delta = data.pixelY; }
        else { return true; }
      } else {
        delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
      }

      if (delta === 0) { return true; }

      if (params.invert) { delta = -delta; }

      if (!swiper.params.freeMode) {
        if (Utils.now() - swiper.mousewheel.lastScrollTime > 60) {
          if (delta < 0) {
            if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
              swiper.slideNext();
              swiper.emit('scroll', e);
            } else if (params.releaseOnEdges) { return true; }
          } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
            swiper.slidePrev();
            swiper.emit('scroll', e);
          } else if (params.releaseOnEdges) { return true; }
        }
        swiper.mousewheel.lastScrollTime = (new win.Date()).getTime();
      } else {
        // Freemode or scrollContainer:
        if (swiper.params.loop) {
          swiper.loopFix();
        }
        var position = swiper.getTranslate() + (delta * params.sensitivity);
        var wasBeginning = swiper.isBeginning;
        var wasEnd = swiper.isEnd;

        if (position >= swiper.minTranslate()) { position = swiper.minTranslate(); }
        if (position <= swiper.maxTranslate()) { position = swiper.maxTranslate(); }

        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();

        if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) {
          swiper.updateSlidesClasses();
        }

        if (swiper.params.freeModeSticky) {
          clearTimeout(swiper.mousewheel.timeout);
          swiper.mousewheel.timeout = Utils.nextTick(function () {
            swiper.slideToClosest();
          }, 300);
        }
        // Emit event
        swiper.emit('scroll', e);

        // Stop autoplay
        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) { swiper.autoplay.stop(); }
        // Return page scroll on edge positions
        if (position === swiper.minTranslate() || position === swiper.maxTranslate()) { return true; }
      }

      if (e.preventDefault) { e.preventDefault(); }
      else { e.returnValue = false; }
      return false;
    },
    enable: function enable() {
      var swiper = this;
      if (!Mousewheel.event) { return false; }
      if (swiper.mousewheel.enabled) { return false; }
      var target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarged !== 'container') {
        target = $(swiper.params.mousewheel.eventsTarged);
      }
      target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
      target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
      target.on(Mousewheel.event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = true;
      return true;
    },
    disable: function disable() {
      var swiper = this;
      if (!Mousewheel.event) { return false; }
      if (!swiper.mousewheel.enabled) { return false; }
      var target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarged !== 'container') {
        target = $(swiper.params.mousewheel.eventsTarged);
      }
      target.off(Mousewheel.event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = false;
      return true;
    },
  };

  var Mousewheel$1 = {
    name: 'mousewheel',
    params: {
      mousewheel: {
        enabled: false,
        releaseOnEdges: false,
        invert: false,
        forceToAxis: false,
        sensitivity: 1,
        eventsTarged: 'container',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        mousewheel: {
          enabled: false,
          enable: Mousewheel.enable.bind(swiper),
          disable: Mousewheel.disable.bind(swiper),
          handle: Mousewheel.handle.bind(swiper),
          handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
          handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
          lastScrollTime: Utils.now(),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.mousewheel.enabled) { swiper.mousewheel.enable(); }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.mousewheel.enabled) { swiper.mousewheel.disable(); }
      },
    },
  };

  var Navigation = {
    update: function update() {
      // Update Navigation Buttons
      var swiper = this;
      var params = swiper.params.navigation;

      if (swiper.params.loop) { return; }
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;

      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          $prevEl.addClass(params.disabledClass);
        } else {
          $prevEl.removeClass(params.disabledClass);
        }
        $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          $nextEl.addClass(params.disabledClass);
        } else {
          $nextEl.removeClass(params.disabledClass);
        }
        $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    },
    onPrevClick: function onPrevClick(e) {
      var swiper = this;
      e.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop) { return; }
      swiper.slidePrev();
    },
    onNextClick: function onNextClick(e) {
      var swiper = this;
      e.preventDefault();
      if (swiper.isEnd && !swiper.params.loop) { return; }
      swiper.slideNext();
    },
    init: function init() {
      var swiper = this;
      var params = swiper.params.navigation;
      if (!(params.nextEl || params.prevEl)) { return; }

      var $nextEl;
      var $prevEl;
      if (params.nextEl) {
        $nextEl = $(params.nextEl);
        if (
          swiper.params.uniqueNavElements
          && typeof params.nextEl === 'string'
          && $nextEl.length > 1
          && swiper.$el.find(params.nextEl).length === 1
        ) {
          $nextEl = swiper.$el.find(params.nextEl);
        }
      }
      if (params.prevEl) {
        $prevEl = $(params.prevEl);
        if (
          swiper.params.uniqueNavElements
          && typeof params.prevEl === 'string'
          && $prevEl.length > 1
          && swiper.$el.find(params.prevEl).length === 1
        ) {
          $prevEl = swiper.$el.find(params.prevEl);
        }
      }

      if ($nextEl && $nextEl.length > 0) {
        $nextEl.on('click', swiper.navigation.onNextClick);
      }
      if ($prevEl && $prevEl.length > 0) {
        $prevEl.on('click', swiper.navigation.onPrevClick);
      }

      Utils.extend(swiper.navigation, {
        $nextEl: $nextEl,
        nextEl: $nextEl && $nextEl[0],
        $prevEl: $prevEl,
        prevEl: $prevEl && $prevEl[0],
      });
    },
    destroy: function destroy() {
      var swiper = this;
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;
      if ($nextEl && $nextEl.length) {
        $nextEl.off('click', swiper.navigation.onNextClick);
        $nextEl.removeClass(swiper.params.navigation.disabledClass);
      }
      if ($prevEl && $prevEl.length) {
        $prevEl.off('click', swiper.navigation.onPrevClick);
        $prevEl.removeClass(swiper.params.navigation.disabledClass);
      }
    },
  };

  var Navigation$1 = {
    name: 'navigation',
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,

        hideOnClick: false,
        disabledClass: 'swiper-button-disabled',
        hiddenClass: 'swiper-button-hidden',
        lockClass: 'swiper-button-lock',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        navigation: {
          init: Navigation.init.bind(swiper),
          update: Navigation.update.bind(swiper),
          destroy: Navigation.destroy.bind(swiper),
          onNextClick: Navigation.onNextClick.bind(swiper),
          onPrevClick: Navigation.onPrevClick.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.navigation.init();
        swiper.navigation.update();
      },
      toEdge: function toEdge() {
        var swiper = this;
        swiper.navigation.update();
      },
      fromEdge: function fromEdge() {
        var swiper = this;
        swiper.navigation.update();
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.navigation.destroy();
      },
      click: function click(e) {
        var swiper = this;
        var ref = swiper.navigation;
        var $nextEl = ref.$nextEl;
        var $prevEl = ref.$prevEl;
        if (
          swiper.params.navigation.hideOnClick
          && !$(e.target).is($prevEl)
          && !$(e.target).is($nextEl)
        ) {
          var isHidden;
          if ($nextEl) {
            isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
          } else if ($prevEl) {
            isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
          }
          if (isHidden === true) {
            swiper.emit('navigationShow', swiper);
          } else {
            swiper.emit('navigationHide', swiper);
          }
          if ($nextEl) {
            $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
          }
          if ($prevEl) {
            $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
          }
        }
      },
    },
  };

  var Pagination = {
    update: function update() {
      // Render || Update Pagination bullets/items
      var swiper = this;
      var rtl = swiper.rtl;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      var $el = swiper.pagination.$el;
      // Current/Total
      var current;
      var total = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.loop) {
        current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
        if (current > slidesLength - 1 - (swiper.loopedSlides * 2)) {
          current -= (slidesLength - (swiper.loopedSlides * 2));
        }
        if (current > total - 1) { current -= total; }
        if (current < 0 && swiper.params.paginationType !== 'bullets') { current = total + current; }
      } else if (typeof swiper.snapIndex !== 'undefined') {
        current = swiper.snapIndex;
      } else {
        current = swiper.activeIndex || 0;
      }
      // Types
      if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
        var bullets = swiper.pagination.bullets;
        var firstIndex;
        var lastIndex;
        var midIndex;
        if (params.dynamicBullets) {
          swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
          $el.css(swiper.isHorizontal() ? 'width' : 'height', ((swiper.pagination.bulletSize * (params.dynamicMainBullets + 4)) + "px"));
          if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
            swiper.pagination.dynamicBulletIndex += (current - swiper.previousIndex);
            if (swiper.pagination.dynamicBulletIndex > (params.dynamicMainBullets - 1)) {
              swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (swiper.pagination.dynamicBulletIndex < 0) {
              swiper.pagination.dynamicBulletIndex = 0;
            }
          }
          firstIndex = current - swiper.pagination.dynamicBulletIndex;
          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }
        bullets.removeClass(((params.bulletActiveClass) + " " + (params.bulletActiveClass) + "-next " + (params.bulletActiveClass) + "-next-next " + (params.bulletActiveClass) + "-prev " + (params.bulletActiveClass) + "-prev-prev " + (params.bulletActiveClass) + "-main"));
        if ($el.length > 1) {
          bullets.each(function (index, bullet) {
            var $bullet = $(bullet);
            var bulletIndex = $bullet.index();
            if (bulletIndex === current) {
              $bullet.addClass(params.bulletActiveClass);
            }
            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                $bullet.addClass(((params.bulletActiveClass) + "-main"));
              }
              if (bulletIndex === firstIndex) {
                $bullet
                  .prev()
                  .addClass(((params.bulletActiveClass) + "-prev"))
                  .prev()
                  .addClass(((params.bulletActiveClass) + "-prev-prev"));
              }
              if (bulletIndex === lastIndex) {
                $bullet
                  .next()
                  .addClass(((params.bulletActiveClass) + "-next"))
                  .next()
                  .addClass(((params.bulletActiveClass) + "-next-next"));
              }
            }
          });
        } else {
          var $bullet = bullets.eq(current);
          $bullet.addClass(params.bulletActiveClass);
          if (params.dynamicBullets) {
            var $firstDisplayedBullet = bullets.eq(firstIndex);
            var $lastDisplayedBullet = bullets.eq(lastIndex);
            for (var i = firstIndex; i <= lastIndex; i += 1) {
              bullets.eq(i).addClass(((params.bulletActiveClass) + "-main"));
            }
            $firstDisplayedBullet
              .prev()
              .addClass(((params.bulletActiveClass) + "-prev"))
              .prev()
              .addClass(((params.bulletActiveClass) + "-prev-prev"));
            $lastDisplayedBullet
              .next()
              .addClass(((params.bulletActiveClass) + "-next"))
              .next()
              .addClass(((params.bulletActiveClass) + "-next-next"));
          }
        }
        if (params.dynamicBullets) {
          var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
          var bulletsOffset = (((swiper.pagination.bulletSize * dynamicBulletsLength) - (swiper.pagination.bulletSize)) / 2) - (midIndex * swiper.pagination.bulletSize);
          var offsetProp = rtl ? 'right' : 'left';
          bullets.css(swiper.isHorizontal() ? offsetProp : 'top', (bulletsOffset + "px"));
        }
      }
      if (params.type === 'fraction') {
        $el.find(("." + (params.currentClass))).text(params.formatFractionCurrent(current + 1));
        $el.find(("." + (params.totalClass))).text(params.formatFractionTotal(total));
      }
      if (params.type === 'progressbar') {
        var progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
        } else {
          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
        }
        var scale = (current + 1) / total;
        var scaleX = 1;
        var scaleY = 1;
        if (progressbarDirection === 'horizontal') {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        $el.find(("." + (params.progressbarFillClass))).transform(("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")")).transition(swiper.params.speed);
      }
      if (params.type === 'custom' && params.renderCustom) {
        $el.html(params.renderCustom(swiper, current + 1, total));
        swiper.emit('paginationRender', swiper, $el[0]);
      } else {
        swiper.emit('paginationUpdate', swiper, $el[0]);
      }
      $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    },
    render: function render() {
      // Render Container
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;

      var $el = swiper.pagination.$el;
      var paginationHTML = '';
      if (params.type === 'bullets') {
        var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        for (var i = 0; i < numberOfBullets; i += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
          } else {
            paginationHTML += "<" + (params.bulletElement) + " class=\"" + (params.bulletClass) + "\"></" + (params.bulletElement) + ">";
          }
        }
        $el.html(paginationHTML);
        swiper.pagination.bullets = $el.find(("." + (params.bulletClass)));
      }
      if (params.type === 'fraction') {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
        } else {
          paginationHTML = "<span class=\"" + (params.currentClass) + "\"></span>"
          + ' / '
          + "<span class=\"" + (params.totalClass) + "\"></span>";
        }
        $el.html(paginationHTML);
      }
      if (params.type === 'progressbar') {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
        } else {
          paginationHTML = "<span class=\"" + (params.progressbarFillClass) + "\"></span>";
        }
        $el.html(paginationHTML);
      }
      if (params.type !== 'custom') {
        swiper.emit('paginationRender', swiper.pagination.$el[0]);
      }
    },
    init: function init() {
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el) { return; }

      var $el = $(params.el);
      if ($el.length === 0) { return; }

      if (
        swiper.params.uniqueNavElements
        && typeof params.el === 'string'
        && $el.length > 1
        && swiper.$el.find(params.el).length === 1
      ) {
        $el = swiper.$el.find(params.el);
      }

      if (params.type === 'bullets' && params.clickable) {
        $el.addClass(params.clickableClass);
      }

      $el.addClass(params.modifierClass + params.type);

      if (params.type === 'bullets' && params.dynamicBullets) {
        $el.addClass(("" + (params.modifierClass) + (params.type) + "-dynamic"));
        swiper.pagination.dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === 'progressbar' && params.progressbarOpposite) {
        $el.addClass(params.progressbarOppositeClass);
      }

      if (params.clickable) {
        $el.on('click', ("." + (params.bulletClass)), function onClick(e) {
          e.preventDefault();
          var index = $(this).index() * swiper.params.slidesPerGroup;
          if (swiper.params.loop) { index += swiper.loopedSlides; }
          swiper.slideTo(index);
        });
      }

      Utils.extend(swiper.pagination, {
        $el: $el,
        el: $el[0],
      });
    },
    destroy: function destroy() {
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
      var $el = swiper.pagination.$el;

      $el.removeClass(params.hiddenClass);
      $el.removeClass(params.modifierClass + params.type);
      if (swiper.pagination.bullets) { swiper.pagination.bullets.removeClass(params.bulletActiveClass); }
      if (params.clickable) {
        $el.off('click', ("." + (params.bulletClass)));
      }
    },
  };

  var Pagination$1 = {
    name: 'pagination',
    params: {
      pagination: {
        el: null,
        bulletElement: 'span',
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: 'bullets', // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: function (number) { return number; },
        formatFractionTotal: function (number) { return number; },
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
        modifierClass: 'swiper-pagination-', // NEW
        currentClass: 'swiper-pagination-current',
        totalClass: 'swiper-pagination-total',
        hiddenClass: 'swiper-pagination-hidden',
        progressbarFillClass: 'swiper-pagination-progressbar-fill',
        progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
        clickableClass: 'swiper-pagination-clickable', // NEW
        lockClass: 'swiper-pagination-lock',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        pagination: {
          init: Pagination.init.bind(swiper),
          render: Pagination.render.bind(swiper),
          update: Pagination.update.bind(swiper),
          destroy: Pagination.destroy.bind(swiper),
          dynamicBulletIndex: 0,
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.pagination.init();
        swiper.pagination.render();
        swiper.pagination.update();
      },
      activeIndexChange: function activeIndexChange() {
        var swiper = this;
        if (swiper.params.loop) {
          swiper.pagination.update();
        } else if (typeof swiper.snapIndex === 'undefined') {
          swiper.pagination.update();
        }
      },
      snapIndexChange: function snapIndexChange() {
        var swiper = this;
        if (!swiper.params.loop) {
          swiper.pagination.update();
        }
      },
      slidesLengthChange: function slidesLengthChange() {
        var swiper = this;
        if (swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      snapGridLengthChange: function snapGridLengthChange() {
        var swiper = this;
        if (!swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.pagination.destroy();
      },
      click: function click(e) {
        var swiper = this;
        if (
          swiper.params.pagination.el
          && swiper.params.pagination.hideOnClick
          && swiper.pagination.$el.length > 0
          && !$(e.target).hasClass(swiper.params.pagination.bulletClass)
        ) {
          var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);
          if (isHidden === true) {
            swiper.emit('paginationShow', swiper);
          } else {
            swiper.emit('paginationHide', swiper);
          }
          swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
        }
      },
    },
  };

  var Scrollbar = {
    setTranslate: function setTranslate() {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var rtl = swiper.rtlTranslate;
      var progress = swiper.progress;
      var dragSize = scrollbar.dragSize;
      var trackSize = scrollbar.trackSize;
      var $dragEl = scrollbar.$dragEl;
      var $el = scrollbar.$el;
      var params = swiper.params.scrollbar;

      var newSize = dragSize;
      var newPos = (trackSize - dragSize) * progress;
      if (rtl) {
        newPos = -newPos;
        if (newPos > 0) {
          newSize = dragSize - newPos;
          newPos = 0;
        } else if (-newPos + dragSize > trackSize) {
          newSize = trackSize + newPos;
        }
      } else if (newPos < 0) {
        newSize = dragSize + newPos;
        newPos = 0;
      } else if (newPos + dragSize > trackSize) {
        newSize = trackSize - newPos;
      }
      if (swiper.isHorizontal()) {
        if (Support.transforms3d) {
          $dragEl.transform(("translate3d(" + newPos + "px, 0, 0)"));
        } else {
          $dragEl.transform(("translateX(" + newPos + "px)"));
        }
        $dragEl[0].style.width = newSize + "px";
      } else {
        if (Support.transforms3d) {
          $dragEl.transform(("translate3d(0px, " + newPos + "px, 0)"));
        } else {
          $dragEl.transform(("translateY(" + newPos + "px)"));
        }
        $dragEl[0].style.height = newSize + "px";
      }
      if (params.hide) {
        clearTimeout(swiper.scrollbar.timeout);
        $el[0].style.opacity = 1;
        swiper.scrollbar.timeout = setTimeout(function () {
          $el[0].style.opacity = 0;
          $el.transition(400);
        }, 1000);
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
      swiper.scrollbar.$dragEl.transition(duration);
    },
    updateSize: function updateSize() {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }

      var scrollbar = swiper.scrollbar;
      var $dragEl = scrollbar.$dragEl;
      var $el = scrollbar.$el;

      $dragEl[0].style.width = '';
      $dragEl[0].style.height = '';
      var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;

      var divider = swiper.size / swiper.virtualSize;
      var moveDivider = divider * (trackSize / swiper.size);
      var dragSize;
      if (swiper.params.scrollbar.dragSize === 'auto') {
        dragSize = trackSize * divider;
      } else {
        dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
      }

      if (swiper.isHorizontal()) {
        $dragEl[0].style.width = dragSize + "px";
      } else {
        $dragEl[0].style.height = dragSize + "px";
      }

      if (divider >= 1) {
        $el[0].style.display = 'none';
      } else {
        $el[0].style.display = '';
      }
      if (swiper.params.scrollbar.hide) {
        $el[0].style.opacity = 0;
      }
      Utils.extend(scrollbar, {
        trackSize: trackSize,
        divider: divider,
        moveDivider: moveDivider,
        dragSize: dragSize,
      });
      scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
    },
    getPointerPosition: function getPointerPosition(e) {
      var swiper = this;
      if (swiper.isHorizontal()) {
        return ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX);
      }
      return ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY);
    },
    setDragPosition: function setDragPosition(e) {
      var swiper = this;
      var scrollbar = swiper.scrollbar;
      var rtl = swiper.rtlTranslate;
      var $el = scrollbar.$el;
      var dragSize = scrollbar.dragSize;
      var trackSize = scrollbar.trackSize;
      var dragStartPos = scrollbar.dragStartPos;

      var positionRatio;
      positionRatio = ((scrollbar.getPointerPosition(e)) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top']
        - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
      positionRatio = Math.max(Math.min(positionRatio, 1), 0);
      if (rtl) {
        positionRatio = 1 - positionRatio;
      }

      var position = swiper.minTranslate() + ((swiper.maxTranslate() - swiper.minTranslate()) * positionRatio);

      swiper.updateProgress(position);
      swiper.setTranslate(position);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    },
    onDragStart: function onDragStart(e) {
      var swiper = this;
      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar;
      var $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el;
      var $dragEl = scrollbar.$dragEl;
      swiper.scrollbar.isTouched = true;
      swiper.scrollbar.dragStartPos = (e.target === $dragEl[0] || e.target === $dragEl)
        ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
      e.preventDefault();
      e.stopPropagation();

      $wrapperEl.transition(100);
      $dragEl.transition(100);
      scrollbar.setDragPosition(e);

      clearTimeout(swiper.scrollbar.dragTimeout);

      $el.transition(0);
      if (params.hide) {
        $el.css('opacity', 1);
      }
      swiper.emit('scrollbarDragStart', e);
    },
    onDragMove: function onDragMove(e) {
      var swiper = this;
      var scrollbar = swiper.scrollbar;
      var $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el;
      var $dragEl = scrollbar.$dragEl;

      if (!swiper.scrollbar.isTouched) { return; }
      if (e.preventDefault) { e.preventDefault(); }
      else { e.returnValue = false; }
      scrollbar.setDragPosition(e);
      $wrapperEl.transition(0);
      $el.transition(0);
      $dragEl.transition(0);
      swiper.emit('scrollbarDragMove', e);
    },
    onDragEnd: function onDragEnd(e) {
      var swiper = this;

      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar;
      var $el = scrollbar.$el;

      if (!swiper.scrollbar.isTouched) { return; }
      swiper.scrollbar.isTouched = false;
      if (params.hide) {
        clearTimeout(swiper.scrollbar.dragTimeout);
        swiper.scrollbar.dragTimeout = Utils.nextTick(function () {
          $el.css('opacity', 0);
          $el.transition(400);
        }, 1000);
      }
      swiper.emit('scrollbarDragEnd', e);
      if (params.snapOnRelease) {
        swiper.slideToClosest();
      }
    },
    enableDraggable: function enableDraggable() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var touchEventsTouch = swiper.touchEventsTouch;
      var touchEventsDesktop = swiper.touchEventsDesktop;
      var params = swiper.params;
      var $el = scrollbar.$el;
      var target = $el[0];
      var activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
      var passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
      if (!Support.touch) {
        target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
        doc.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
        doc.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
      } else {
        target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
        target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
        target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
      }
    },
    disableDraggable: function disableDraggable() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var touchEventsTouch = swiper.touchEventsTouch;
      var touchEventsDesktop = swiper.touchEventsDesktop;
      var params = swiper.params;
      var $el = scrollbar.$el;
      var target = $el[0];
      var activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
      var passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
      if (!Support.touch) {
        target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
        doc.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
        doc.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
      } else {
        target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
        target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
        target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
      }
    },
    init: function init() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var $swiperEl = swiper.$el;
      var params = swiper.params.scrollbar;

      var $el = $(params.el);
      if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
        $el = $swiperEl.find(params.el);
      }

      var $dragEl = $el.find(("." + (swiper.params.scrollbar.dragClass)));
      if ($dragEl.length === 0) {
        $dragEl = $(("<div class=\"" + (swiper.params.scrollbar.dragClass) + "\"></div>"));
        $el.append($dragEl);
      }

      Utils.extend(scrollbar, {
        $el: $el,
        el: $el[0],
        $dragEl: $dragEl,
        dragEl: $dragEl[0],
      });

      if (params.draggable) {
        scrollbar.enableDraggable();
      }
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.scrollbar.disableDraggable();
    },
  };

  var Scrollbar$1 = {
    name: 'scrollbar',
    params: {
      scrollbar: {
        el: null,
        dragSize: 'auto',
        hide: false,
        draggable: false,
        snapOnRelease: true,
        lockClass: 'swiper-scrollbar-lock',
        dragClass: 'swiper-scrollbar-drag',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        scrollbar: {
          init: Scrollbar.init.bind(swiper),
          destroy: Scrollbar.destroy.bind(swiper),
          updateSize: Scrollbar.updateSize.bind(swiper),
          setTranslate: Scrollbar.setTranslate.bind(swiper),
          setTransition: Scrollbar.setTransition.bind(swiper),
          enableDraggable: Scrollbar.enableDraggable.bind(swiper),
          disableDraggable: Scrollbar.disableDraggable.bind(swiper),
          setDragPosition: Scrollbar.setDragPosition.bind(swiper),
          getPointerPosition: Scrollbar.getPointerPosition.bind(swiper),
          onDragStart: Scrollbar.onDragStart.bind(swiper),
          onDragMove: Scrollbar.onDragMove.bind(swiper),
          onDragEnd: Scrollbar.onDragEnd.bind(swiper),
          isTouched: false,
          timeout: null,
          dragTimeout: null,
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.scrollbar.init();
        swiper.scrollbar.updateSize();
        swiper.scrollbar.setTranslate();
      },
      update: function update() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      resize: function resize() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        swiper.scrollbar.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        swiper.scrollbar.setTransition(duration);
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.scrollbar.destroy();
      },
    },
  };

  var Parallax = {
    setTransform: function setTransform(el, progress) {
      var swiper = this;
      var rtl = swiper.rtl;

      var $el = $(el);
      var rtlFactor = rtl ? -1 : 1;

      var p = $el.attr('data-swiper-parallax') || '0';
      var x = $el.attr('data-swiper-parallax-x');
      var y = $el.attr('data-swiper-parallax-y');
      var scale = $el.attr('data-swiper-parallax-scale');
      var opacity = $el.attr('data-swiper-parallax-opacity');

      if (x || y) {
        x = x || '0';
        y = y || '0';
      } else if (swiper.isHorizontal()) {
        x = p;
        y = '0';
      } else {
        y = p;
        x = '0';
      }

      if ((x).indexOf('%') >= 0) {
        x = (parseInt(x, 10) * progress * rtlFactor) + "%";
      } else {
        x = (x * progress * rtlFactor) + "px";
      }
      if ((y).indexOf('%') >= 0) {
        y = (parseInt(y, 10) * progress) + "%";
      } else {
        y = (y * progress) + "px";
      }

      if (typeof opacity !== 'undefined' && opacity !== null) {
        var currentOpacity = opacity - ((opacity - 1) * (1 - Math.abs(progress)));
        $el[0].style.opacity = currentOpacity;
      }
      if (typeof scale === 'undefined' || scale === null) {
        $el.transform(("translate3d(" + x + ", " + y + ", 0px)"));
      } else {
        var currentScale = scale - ((scale - 1) * (1 - Math.abs(progress)));
        $el.transform(("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")"));
      }
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      var $el = swiper.$el;
      var slides = swiper.slides;
      var progress = swiper.progress;
      var snapGrid = swiper.snapGrid;
      $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
        .each(function (index, el) {
          swiper.parallax.setTransform(el, progress);
        });
      slides.each(function (slideIndex, slideEl) {
        var slideProgress = slideEl.progress;
        if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
          slideProgress += Math.ceil(slideIndex / 2) - (progress * (snapGrid.length - 1));
        }
        slideProgress = Math.min(Math.max(slideProgress, -1), 1);
        $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
          .each(function (index, el) {
            swiper.parallax.setTransform(el, slideProgress);
          });
      });
    },
    setTransition: function setTransition(duration) {
      if ( duration === void 0 ) duration = this.params.speed;

      var swiper = this;
      var $el = swiper.$el;
      $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
        .each(function (index, parallaxEl) {
          var $parallaxEl = $(parallaxEl);
          var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
          if (duration === 0) { parallaxDuration = 0; }
          $parallaxEl.transition(parallaxDuration);
        });
    },
  };

  var Parallax$1 = {
    name: 'parallax',
    params: {
      parallax: {
        enabled: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        parallax: {
          setTransform: Parallax.setTransform.bind(swiper),
          setTranslate: Parallax.setTranslate.bind(swiper),
          setTransition: Parallax.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (!swiper.params.parallax.enabled) { return; }
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      init: function init() {
        var swiper = this;
        if (!swiper.params.parallax.enabled) { return; }
        swiper.parallax.setTranslate();
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (!swiper.params.parallax.enabled) { return; }
        swiper.parallax.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (!swiper.params.parallax.enabled) { return; }
        swiper.parallax.setTransition(duration);
      },
    },
  };

  var Zoom = {
    // Calc Scale From Multi-touches
    getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) { return 1; }
      var x1 = e.targetTouches[0].pageX;
      var y1 = e.targetTouches[0].pageY;
      var x2 = e.targetTouches[1].pageX;
      var y2 = e.targetTouches[1].pageY;
      var distance = Math.sqrt((Math.pow( (x2 - x1), 2 )) + (Math.pow( (y2 - y1), 2 )));
      return distance;
    },
    // Events
    onGestureStart: function onGestureStart(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;
      if (!Support.gestures) {
        if (e.type !== 'touchstart' || (e.type === 'touchstart' && e.targetTouches.length < 2)) {
          return;
        }
        zoom.fakeGestureTouched = true;
        gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
      }
      if (!gesture.$slideEl || !gesture.$slideEl.length) {
        gesture.$slideEl = $(e.target).closest('.swiper-slide');
        if (gesture.$slideEl.length === 0) { gesture.$slideEl = swiper.slides.eq(swiper.activeIndex); }
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
        gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        if (gesture.$imageWrapEl.length === 0) {
          gesture.$imageEl = undefined;
          return;
        }
      }
      gesture.$imageEl.transition(0);
      swiper.zoom.isScaling = true;
    },
    onGestureChange: function onGestureChange(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (!Support.gestures) {
        if (e.type !== 'touchmove' || (e.type === 'touchmove' && e.targetTouches.length < 2)) {
          return;
        }
        zoom.fakeGestureMoved = true;
        gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      if (Support.gestures) {
        zoom.scale = e.scale * zoom.currentScale;
      } else {
        zoom.scale = (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale;
      }
      if (zoom.scale > gesture.maxRatio) {
        zoom.scale = (gesture.maxRatio - 1) + (Math.pow( ((zoom.scale - gesture.maxRatio) + 1), 0.5 ));
      }
      if (zoom.scale < params.minRatio) {
        zoom.scale = (params.minRatio + 1) - (Math.pow( ((params.minRatio - zoom.scale) + 1), 0.5 ));
      }
      gesture.$imageEl.transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
    },
    onGestureEnd: function onGestureEnd(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (!Support.gestures) {
        if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
          return;
        }
        if (e.type !== 'touchend' || (e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android)) {
          return;
        }
        zoom.fakeGestureTouched = false;
        zoom.fakeGestureMoved = false;
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
      gesture.$imageEl.transition(swiper.params.speed).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
      zoom.currentScale = zoom.scale;
      zoom.isScaling = false;
      if (zoom.scale === 1) { gesture.$slideEl = undefined; }
    },
    onTouchStart: function onTouchStart(e) {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      if (image.isTouched) { return; }
      if (Device.android) { e.preventDefault(); }
      image.isTouched = true;
      image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
      image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    },
    onTouchMove: function onTouchMove(e) {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      var velocity = zoom.velocity;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      swiper.allowClick = false;
      if (!image.isTouched || !gesture.$slideEl) { return; }

      if (!image.isMoved) {
        image.width = gesture.$imageEl[0].offsetWidth;
        image.height = gesture.$imageEl[0].offsetHeight;
        image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
        image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
        gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
        gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
        gesture.$imageWrapEl.transition(0);
        if (swiper.rtl) {
          image.startX = -image.startX;
          image.startY = -image.startY;
        }
      }
      // Define if we need image drag
      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;

      if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) { return; }

      image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
      image.maxX = -image.minX;
      image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
      image.maxY = -image.minY;

      image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
      image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

      if (!image.isMoved && !zoom.isScaling) {
        if (
          swiper.isHorizontal()
          && (
            (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x)
            || (Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)
          )
        ) {
          image.isTouched = false;
          return;
        } if (
          !swiper.isHorizontal()
          && (
            (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y)
            || (Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)
          )
        ) {
          image.isTouched = false;
          return;
        }
      }
      e.preventDefault();
      e.stopPropagation();

      image.isMoved = true;
      image.currentX = (image.touchesCurrent.x - image.touchesStart.x) + image.startX;
      image.currentY = (image.touchesCurrent.y - image.touchesStart.y) + image.startY;

      if (image.currentX < image.minX) {
        image.currentX = (image.minX + 1) - (Math.pow( ((image.minX - image.currentX) + 1), 0.8 ));
      }
      if (image.currentX > image.maxX) {
        image.currentX = (image.maxX - 1) + (Math.pow( ((image.currentX - image.maxX) + 1), 0.8 ));
      }

      if (image.currentY < image.minY) {
        image.currentY = (image.minY + 1) - (Math.pow( ((image.minY - image.currentY) + 1), 0.8 ));
      }
      if (image.currentY > image.maxY) {
        image.currentY = (image.maxY - 1) + (Math.pow( ((image.currentY - image.maxY) + 1), 0.8 ));
      }

      // Velocity
      if (!velocity.prevPositionX) { velocity.prevPositionX = image.touchesCurrent.x; }
      if (!velocity.prevPositionY) { velocity.prevPositionY = image.touchesCurrent.y; }
      if (!velocity.prevTime) { velocity.prevTime = Date.now(); }
      velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
      velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
      if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) { velocity.x = 0; }
      if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) { velocity.y = 0; }
      velocity.prevPositionX = image.touchesCurrent.x;
      velocity.prevPositionY = image.touchesCurrent.y;
      velocity.prevTime = Date.now();

      gesture.$imageWrapEl.transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
    },
    onTouchEnd: function onTouchEnd() {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      var velocity = zoom.velocity;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      if (!image.isTouched || !image.isMoved) {
        image.isTouched = false;
        image.isMoved = false;
        return;
      }
      image.isTouched = false;
      image.isMoved = false;
      var momentumDurationX = 300;
      var momentumDurationY = 300;
      var momentumDistanceX = velocity.x * momentumDurationX;
      var newPositionX = image.currentX + momentumDistanceX;
      var momentumDistanceY = velocity.y * momentumDurationY;
      var newPositionY = image.currentY + momentumDistanceY;

      // Fix duration
      if (velocity.x !== 0) { momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x); }
      if (velocity.y !== 0) { momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y); }
      var momentumDuration = Math.max(momentumDurationX, momentumDurationY);

      image.currentX = newPositionX;
      image.currentY = newPositionY;

      // Define if we need image drag
      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;
      image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
      image.maxX = -image.minX;
      image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
      image.maxY = -image.minY;
      image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
      image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);

      gesture.$imageWrapEl.transition(momentumDuration).transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
    },
    onTransitionEnd: function onTransitionEnd() {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
        gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
        gesture.$imageWrapEl.transform('translate3d(0,0,0)');

        zoom.scale = 1;
        zoom.currentScale = 1;

        gesture.$slideEl = undefined;
        gesture.$imageEl = undefined;
        gesture.$imageWrapEl = undefined;
      }
    },
    // Toggle Zoom
    toggle: function toggle(e) {
      var swiper = this;
      var zoom = swiper.zoom;

      if (zoom.scale && zoom.scale !== 1) {
        // Zoom Out
        zoom.out();
      } else {
        // Zoom In
        zoom.in(e);
      }
    },
    in: function in$1(e) {
      var swiper = this;

      var zoom = swiper.zoom;
      var params = swiper.params.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;

      if (!gesture.$slideEl) {
        gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }

      gesture.$slideEl.addClass(("" + (params.zoomedSlideClass)));

      var touchX;
      var touchY;
      var offsetX;
      var offsetY;
      var diffX;
      var diffY;
      var translateX;
      var translateY;
      var imageWidth;
      var imageHeight;
      var scaledWidth;
      var scaledHeight;
      var translateMinX;
      var translateMinY;
      var translateMaxX;
      var translateMaxY;
      var slideWidth;
      var slideHeight;

      if (typeof image.touchesStart.x === 'undefined' && e) {
        touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
        touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
      } else {
        touchX = image.touchesStart.x;
        touchY = image.touchesStart.y;
      }

      zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      if (e) {
        slideWidth = gesture.$slideEl[0].offsetWidth;
        slideHeight = gesture.$slideEl[0].offsetHeight;
        offsetX = gesture.$slideEl.offset().left;
        offsetY = gesture.$slideEl.offset().top;
        diffX = (offsetX + (slideWidth / 2)) - touchX;
        diffY = (offsetY + (slideHeight / 2)) - touchY;

        imageWidth = gesture.$imageEl[0].offsetWidth;
        imageHeight = gesture.$imageEl[0].offsetHeight;
        scaledWidth = imageWidth * zoom.scale;
        scaledHeight = imageHeight * zoom.scale;

        translateMinX = Math.min(((slideWidth / 2) - (scaledWidth / 2)), 0);
        translateMinY = Math.min(((slideHeight / 2) - (scaledHeight / 2)), 0);
        translateMaxX = -translateMinX;
        translateMaxY = -translateMinY;

        translateX = diffX * zoom.scale;
        translateY = diffY * zoom.scale;

        if (translateX < translateMinX) {
          translateX = translateMinX;
        }
        if (translateX > translateMaxX) {
          translateX = translateMaxX;
        }

        if (translateY < translateMinY) {
          translateY = translateMinY;
        }
        if (translateY > translateMaxY) {
          translateY = translateMaxY;
        }
      } else {
        translateX = 0;
        translateY = 0;
      }
      gesture.$imageWrapEl.transition(300).transform(("translate3d(" + translateX + "px, " + translateY + "px,0)"));
      gesture.$imageEl.transition(300).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
    },
    out: function out() {
      var swiper = this;

      var zoom = swiper.zoom;
      var params = swiper.params.zoom;
      var gesture = zoom.gesture;

      if (!gesture.$slideEl) {
        gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }

      zoom.scale = 1;
      zoom.currentScale = 1;
      gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
      gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
      gesture.$slideEl.removeClass(("" + (params.zoomedSlideClass)));
      gesture.$slideEl = undefined;
    },
    // Attach/Detach Events
    enable: function enable() {
      var swiper = this;
      var zoom = swiper.zoom;
      if (zoom.enabled) { return; }
      zoom.enabled = true;

      var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

      // Scale image
      if (Support.gestures) {
        swiper.$wrapperEl.on('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.on('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.on('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
      } else if (swiper.touchEvents.start === 'touchstart') {
        swiper.$wrapperEl.on(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.on(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.on(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
      }

      // Move image
      swiper.$wrapperEl.on(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove);
    },
    disable: function disable() {
      var swiper = this;
      var zoom = swiper.zoom;
      if (!zoom.enabled) { return; }

      swiper.zoom.enabled = false;

      var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

      // Scale image
      if (Support.gestures) {
        swiper.$wrapperEl.off('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.off('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.off('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
      } else if (swiper.touchEvents.start === 'touchstart') {
        swiper.$wrapperEl.off(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.off(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.off(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
      }

      // Move image
      swiper.$wrapperEl.off(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove);
    },
  };

  var Zoom$1 = {
    name: 'zoom',
    params: {
      zoom: {
        enabled: false,
        maxRatio: 3,
        minRatio: 1,
        toggle: true,
        containerClass: 'swiper-zoom-container',
        zoomedSlideClass: 'swiper-slide-zoomed',
      },
    },
    create: function create() {
      var swiper = this;
      var zoom = {
        enabled: false,
        scale: 1,
        currentScale: 1,
        isScaling: false,
        gesture: {
          $slideEl: undefined,
          slideWidth: undefined,
          slideHeight: undefined,
          $imageEl: undefined,
          $imageWrapEl: undefined,
          maxRatio: 3,
        },
        image: {
          isTouched: undefined,
          isMoved: undefined,
          currentX: undefined,
          currentY: undefined,
          minX: undefined,
          minY: undefined,
          maxX: undefined,
          maxY: undefined,
          width: undefined,
          height: undefined,
          startX: undefined,
          startY: undefined,
          touchesStart: {},
          touchesCurrent: {},
        },
        velocity: {
          x: undefined,
          y: undefined,
          prevPositionX: undefined,
          prevPositionY: undefined,
          prevTime: undefined,
        },
      };

      ('onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out').split(' ').forEach(function (methodName) {
        zoom[methodName] = Zoom[methodName].bind(swiper);
      });
      Utils.extend(swiper, {
        zoom: zoom,
      });

      var scale = 1;
      Object.defineProperty(swiper.zoom, 'scale', {
        get: function get() {
          return scale;
        },
        set: function set(value) {
          if (scale !== value) {
            var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
            var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
            swiper.emit('zoomChange', value, imageEl, slideEl);
          }
          scale = value;
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.zoom.enabled) {
          swiper.zoom.enable();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.zoom.disable();
      },
      touchStart: function touchStart(e) {
        var swiper = this;
        if (!swiper.zoom.enabled) { return; }
        swiper.zoom.onTouchStart(e);
      },
      touchEnd: function touchEnd(e) {
        var swiper = this;
        if (!swiper.zoom.enabled) { return; }
        swiper.zoom.onTouchEnd(e);
      },
      doubleTap: function doubleTap(e) {
        var swiper = this;
        if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
          swiper.zoom.toggle(e);
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
          swiper.zoom.onTransitionEnd();
        }
      },
    },
  };

  var Lazy = {
    loadInSlide: function loadInSlide(index, loadInDuplicate) {
      if ( loadInDuplicate === void 0 ) loadInDuplicate = true;

      var swiper = this;
      var params = swiper.params.lazy;
      if (typeof index === 'undefined') { return; }
      if (swiper.slides.length === 0) { return; }
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;

      var $slideEl = isVirtual
        ? swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]"))
        : swiper.slides.eq(index);

      var $images = $slideEl.find(("." + (params.elementClass) + ":not(." + (params.loadedClass) + "):not(." + (params.loadingClass) + ")"));
      if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
        $images = $images.add($slideEl[0]);
      }
      if ($images.length === 0) { return; }

      $images.each(function (imageIndex, imageEl) {
        var $imageEl = $(imageEl);
        $imageEl.addClass(params.loadingClass);

        var background = $imageEl.attr('data-background');
        var src = $imageEl.attr('data-src');
        var srcset = $imageEl.attr('data-srcset');
        var sizes = $imageEl.attr('data-sizes');

        swiper.loadImage($imageEl[0], (src || background), srcset, sizes, false, function () {
          if (typeof swiper === 'undefined' || swiper === null || !swiper || (swiper && !swiper.params) || swiper.destroyed) { return; }
          if (background) {
            $imageEl.css('background-image', ("url(\"" + background + "\")"));
            $imageEl.removeAttr('data-background');
          } else {
            if (srcset) {
              $imageEl.attr('srcset', srcset);
              $imageEl.removeAttr('data-srcset');
            }
            if (sizes) {
              $imageEl.attr('sizes', sizes);
              $imageEl.removeAttr('data-sizes');
            }
            if (src) {
              $imageEl.attr('src', src);
              $imageEl.removeAttr('data-src');
            }
          }

          $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
          $slideEl.find(("." + (params.preloaderClass))).remove();
          if (swiper.params.loop && loadInDuplicate) {
            var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
            if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
              var originalSlide = swiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + (swiper.params.slideDuplicateClass) + ")"));
              swiper.lazy.loadInSlide(originalSlide.index(), false);
            } else {
              var duplicatedSlide = swiper.$wrapperEl.children(("." + (swiper.params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]"));
              swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
            }
          }
          swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
        });

        swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
      });
    },
    load: function load() {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl;
      var swiperParams = swiper.params;
      var slides = swiper.slides;
      var activeIndex = swiper.activeIndex;
      var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
      var params = swiperParams.lazy;

      var slidesPerView = swiperParams.slidesPerView;
      if (slidesPerView === 'auto') {
        slidesPerView = 0;
      }

      function slideExist(index) {
        if (isVirtual) {
          if ($wrapperEl.children(("." + (swiperParams.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]")).length) {
            return true;
          }
        } else if (slides[index]) { return true; }
        return false;
      }
      function slideIndex(slideEl) {
        if (isVirtual) {
          return $(slideEl).attr('data-swiper-slide-index');
        }
        return $(slideEl).index();
      }

      if (!swiper.lazy.initialImageLoaded) { swiper.lazy.initialImageLoaded = true; }
      if (swiper.params.watchSlidesVisibility) {
        $wrapperEl.children(("." + (swiperParams.slideVisibleClass))).each(function (elIndex, slideEl) {
          var index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
          swiper.lazy.loadInSlide(index);
        });
      } else if (slidesPerView > 1) {
        for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
          if (slideExist(i)) { swiper.lazy.loadInSlide(i); }
        }
      } else {
        swiper.lazy.loadInSlide(activeIndex);
      }
      if (params.loadPrevNext) {
        if (slidesPerView > 1 || (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)) {
          var amount = params.loadPrevNextAmount;
          var spv = slidesPerView;
          var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
          var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
          // Next Slides
          for (var i$1 = activeIndex + slidesPerView; i$1 < maxIndex; i$1 += 1) {
            if (slideExist(i$1)) { swiper.lazy.loadInSlide(i$1); }
          }
          // Prev Slides
          for (var i$2 = minIndex; i$2 < activeIndex; i$2 += 1) {
            if (slideExist(i$2)) { swiper.lazy.loadInSlide(i$2); }
          }
        } else {
          var nextSlide = $wrapperEl.children(("." + (swiperParams.slideNextClass)));
          if (nextSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(nextSlide)); }

          var prevSlide = $wrapperEl.children(("." + (swiperParams.slidePrevClass)));
          if (prevSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(prevSlide)); }
        }
      }
    },
  };

  var Lazy$1 = {
    name: 'lazy',
    params: {
      lazy: {
        enabled: false,
        loadPrevNext: false,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: false,

        elementClass: 'swiper-lazy',
        loadingClass: 'swiper-lazy-loading',
        loadedClass: 'swiper-lazy-loaded',
        preloaderClass: 'swiper-lazy-preloader',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        lazy: {
          initialImageLoaded: false,
          load: Lazy.load.bind(swiper),
          loadInSlide: Lazy.loadInSlide.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
          swiper.params.preloadImages = false;
        }
      },
      init: function init() {
        var swiper = this;
        if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
          swiper.lazy.load();
        }
      },
      scroll: function scroll() {
        var swiper = this;
        if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
          swiper.lazy.load();
        }
      },
      resize: function resize() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      },
      scrollbarDragMove: function scrollbarDragMove() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      },
      transitionStart: function transitionStart() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          if (swiper.params.lazy.loadOnTransitionStart || (!swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded)) {
            swiper.lazy.load();
          }
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
          swiper.lazy.load();
        }
      },
    },
  };

  /* eslint no-bitwise: ["error", { "allow": [">>"] }] */

  var Controller = {
    LinearSpline: function LinearSpline(x, y) {
      var binarySearch = (function search() {
        var maxIndex;
        var minIndex;
        var guess;
        return function (array, val) {
          minIndex = -1;
          maxIndex = array.length;
          while (maxIndex - minIndex > 1) {
            guess = maxIndex + minIndex >> 1;
            if (array[guess] <= val) {
              minIndex = guess;
            } else {
              maxIndex = guess;
            }
          }
          return maxIndex;
        };
      }());
      this.x = x;
      this.y = y;
      this.lastIndex = x.length - 1;
      // Given an x value (x2), return the expected y2 value:
      // (x1,y1) is the known point before given value,
      // (x3,y3) is the known point after given value.
      var i1;
      var i3;

      this.interpolate = function interpolate(x2) {
        if (!x2) { return 0; }

        // Get the indexes of x1 and x3 (the array indexes before and after given x2):
        i3 = binarySearch(this.x, x2);
        i1 = i3 - 1;

        // We have our indexes i1 & i3, so we can calculate already:
        // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
        return (((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1])) + this.y[i1];
      };
      return this;
    },
    // xxx: for now i will just save one spline function to to
    getInterpolateFunction: function getInterpolateFunction(c) {
      var swiper = this;
      if (!swiper.controller.spline) {
        swiper.controller.spline = swiper.params.loop
          ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid)
          : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
      }
    },
    setTranslate: function setTranslate(setTranslate$1, byController) {
      var swiper = this;
      var controlled = swiper.controller.control;
      var multiplier;
      var controlledTranslate;
      function setControlledTranslate(c) {
        // this will create an Interpolate function based on the snapGrids
        // x is the Grid of the scrolled scroller and y will be the controlled scroller
        // it makes sense to create this only once and recall it for the interpolation
        // the function does a lot of value caching for performance
        var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
        if (swiper.params.controller.by === 'slide') {
          swiper.controller.getInterpolateFunction(c);
          // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
          // but it did not work out
          controlledTranslate = -swiper.controller.spline.interpolate(-translate);
        }

        if (!controlledTranslate || swiper.params.controller.by === 'container') {
          multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
          controlledTranslate = ((translate - swiper.minTranslate()) * multiplier) + c.minTranslate();
        }

        if (swiper.params.controller.inverse) {
          controlledTranslate = c.maxTranslate() - controlledTranslate;
        }
        c.updateProgress(controlledTranslate);
        c.setTranslate(controlledTranslate, swiper);
        c.updateActiveIndex();
        c.updateSlidesClasses();
      }
      if (Array.isArray(controlled)) {
        for (var i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTranslate(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTranslate(controlled);
      }
    },
    setTransition: function setTransition(duration, byController) {
      var swiper = this;
      var controlled = swiper.controller.control;
      var i;
      function setControlledTransition(c) {
        c.setTransition(duration, swiper);
        if (duration !== 0) {
          c.transitionStart();
          if (c.params.autoHeight) {
            Utils.nextTick(function () {
              c.updateAutoHeight();
            });
          }
          c.$wrapperEl.transitionEnd(function () {
            if (!controlled) { return; }
            if (c.params.loop && swiper.params.controller.by === 'slide') {
              c.loopFix();
            }
            c.transitionEnd();
          });
        }
      }
      if (Array.isArray(controlled)) {
        for (i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTransition(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTransition(controlled);
      }
    },
  };
  var Controller$1 = {
    name: 'controller',
    params: {
      controller: {
        control: undefined,
        inverse: false,
        by: 'slide', // or 'container'
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        controller: {
          control: swiper.params.controller.control,
          getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
          setTranslate: Controller.setTranslate.bind(swiper),
          setTransition: Controller.setTransition.bind(swiper),
        },
      });
    },
    on: {
      update: function update() {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      resize: function resize() {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      setTranslate: function setTranslate(translate, byController) {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        swiper.controller.setTranslate(translate, byController);
      },
      setTransition: function setTransition(duration, byController) {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        swiper.controller.setTransition(duration, byController);
      },
    },
  };

  var a11y = {
    makeElFocusable: function makeElFocusable($el) {
      $el.attr('tabIndex', '0');
      return $el;
    },
    addElRole: function addElRole($el, role) {
      $el.attr('role', role);
      return $el;
    },
    addElLabel: function addElLabel($el, label) {
      $el.attr('aria-label', label);
      return $el;
    },
    disableEl: function disableEl($el) {
      $el.attr('aria-disabled', true);
      return $el;
    },
    enableEl: function enableEl($el) {
      $el.attr('aria-disabled', false);
      return $el;
    },
    onEnterKey: function onEnterKey(e) {
      var swiper = this;
      var params = swiper.params.a11y;
      if (e.keyCode !== 13) { return; }
      var $targetEl = $(e.target);
      if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
        if (!(swiper.isEnd && !swiper.params.loop)) {
          swiper.slideNext();
        }
        if (swiper.isEnd) {
          swiper.a11y.notify(params.lastSlideMessage);
        } else {
          swiper.a11y.notify(params.nextSlideMessage);
        }
      }
      if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
        if (!(swiper.isBeginning && !swiper.params.loop)) {
          swiper.slidePrev();
        }
        if (swiper.isBeginning) {
          swiper.a11y.notify(params.firstSlideMessage);
        } else {
          swiper.a11y.notify(params.prevSlideMessage);
        }
      }
      if (swiper.pagination && $targetEl.is(("." + (swiper.params.pagination.bulletClass)))) {
        $targetEl[0].click();
      }
    },
    notify: function notify(message) {
      var swiper = this;
      var notification = swiper.a11y.liveRegion;
      if (notification.length === 0) { return; }
      notification.html('');
      notification.html(message);
    },
    updateNavigation: function updateNavigation() {
      var swiper = this;

      if (swiper.params.loop) { return; }
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;

      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          swiper.a11y.disableEl($prevEl);
        } else {
          swiper.a11y.enableEl($prevEl);
        }
      }
      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          swiper.a11y.disableEl($nextEl);
        } else {
          swiper.a11y.enableEl($nextEl);
        }
      }
    },
    updatePagination: function updatePagination() {
      var swiper = this;
      var params = swiper.params.a11y;
      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.bullets.each(function (bulletIndex, bulletEl) {
          var $bulletEl = $(bulletEl);
          swiper.a11y.makeElFocusable($bulletEl);
          swiper.a11y.addElRole($bulletEl, 'button');
          swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1));
        });
      }
    },
    init: function init() {
      var swiper = this;

      swiper.$el.append(swiper.a11y.liveRegion);

      // Navigation
      var params = swiper.params.a11y;
      var $nextEl;
      var $prevEl;
      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }
      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }
      if ($nextEl) {
        swiper.a11y.makeElFocusable($nextEl);
        swiper.a11y.addElRole($nextEl, 'button');
        swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
        $nextEl.on('keydown', swiper.a11y.onEnterKey);
      }
      if ($prevEl) {
        swiper.a11y.makeElFocusable($prevEl);
        swiper.a11y.addElRole($prevEl, 'button');
        swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
        $prevEl.on('keydown', swiper.a11y.onEnterKey);
      }

      // Pagination
      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.$el.on('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) { swiper.a11y.liveRegion.remove(); }

      var $nextEl;
      var $prevEl;
      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }
      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }
      if ($nextEl) {
        $nextEl.off('keydown', swiper.a11y.onEnterKey);
      }
      if ($prevEl) {
        $prevEl.off('keydown', swiper.a11y.onEnterKey);
      }

      // Pagination
      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.$el.off('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
      }
    },
  };
  var A11y = {
    name: 'a11y',
    params: {
      a11y: {
        enabled: true,
        notificationClass: 'swiper-notification',
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        firstSlideMessage: 'This is the first slide',
        lastSlideMessage: 'This is the last slide',
        paginationBulletMessage: 'Go to slide {{index}}',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        a11y: {
          liveRegion: $(("<span class=\"" + (swiper.params.a11y.notificationClass) + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")),
        },
      });
      Object.keys(a11y).forEach(function (methodName) {
        swiper.a11y[methodName] = a11y[methodName].bind(swiper);
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.init();
        swiper.a11y.updateNavigation();
      },
      toEdge: function toEdge() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.updateNavigation();
      },
      fromEdge: function fromEdge() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.updateNavigation();
      },
      paginationUpdate: function paginationUpdate() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.updatePagination();
      },
      destroy: function destroy() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.destroy();
      },
    },
  };

  var History = {
    init: function init() {
      var swiper = this;
      if (!swiper.params.history) { return; }
      if (!win.history || !win.history.pushState) {
        swiper.params.history.enabled = false;
        swiper.params.hashNavigation.enabled = true;
        return;
      }
      var history = swiper.history;
      history.initialized = true;
      history.paths = History.getPathValues();
      if (!history.paths.key && !history.paths.value) { return; }
      history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
      if (!swiper.params.history.replaceState) {
        win.addEventListener('popstate', swiper.history.setHistoryPopState);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (!swiper.params.history.replaceState) {
        win.removeEventListener('popstate', swiper.history.setHistoryPopState);
      }
    },
    setHistoryPopState: function setHistoryPopState() {
      var swiper = this;
      swiper.history.paths = History.getPathValues();
      swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
    },
    getPathValues: function getPathValues() {
      var pathArray = win.location.pathname.slice(1).split('/').filter(function (part) { return part !== ''; });
      var total = pathArray.length;
      var key = pathArray[total - 2];
      var value = pathArray[total - 1];
      return { key: key, value: value };
    },
    setHistory: function setHistory(key, index) {
      var swiper = this;
      if (!swiper.history.initialized || !swiper.params.history.enabled) { return; }
      var slide = swiper.slides.eq(index);
      var value = History.slugify(slide.attr('data-history'));
      if (!win.location.pathname.includes(key)) {
        value = key + "/" + value;
      }
      var currentState = win.history.state;
      if (currentState && currentState.value === value) {
        return;
      }
      if (swiper.params.history.replaceState) {
        win.history.replaceState({ value: value }, null, value);
      } else {
        win.history.pushState({ value: value }, null, value);
      }
    },
    slugify: function slugify(text) {
      return text.toString()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
    },
    scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
      var swiper = this;
      if (value) {
        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
          var slide = swiper.slides.eq(i);
          var slideHistory = History.slugify(slide.attr('data-history'));
          if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
            var index = slide.index();
            swiper.slideTo(index, speed, runCallbacks);
          }
        }
      } else {
        swiper.slideTo(0, speed, runCallbacks);
      }
    },
  };

  var History$1 = {
    name: 'history',
    params: {
      history: {
        enabled: false,
        replaceState: false,
        key: 'slides',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        history: {
          init: History.init.bind(swiper),
          setHistory: History.setHistory.bind(swiper),
          setHistoryPopState: History.setHistoryPopState.bind(swiper),
          scrollToSlide: History.scrollToSlide.bind(swiper),
          destroy: History.destroy.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.history.enabled) {
          swiper.history.init();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.params.history.enabled) {
          swiper.history.destroy();
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.history.initialized) {
          swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
        }
      },
    },
  };

  var HashNavigation = {
    onHashCange: function onHashCange() {
      var swiper = this;
      var newHash = doc.location.hash.replace('#', '');
      var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
      if (newHash !== activeSlideHash) {
        var newIndex = swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-hash=\"" + newHash + "\"]")).index();
        if (typeof newIndex === 'undefined') { return; }
        swiper.slideTo(newIndex);
      }
    },
    setHash: function setHash() {
      var swiper = this;
      if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) { return; }
      if (swiper.params.hashNavigation.replaceState && win.history && win.history.replaceState) {
        win.history.replaceState(null, null, (("#" + (swiper.slides.eq(swiper.activeIndex).attr('data-hash'))) || ''));
      } else {
        var slide = swiper.slides.eq(swiper.activeIndex);
        var hash = slide.attr('data-hash') || slide.attr('data-history');
        doc.location.hash = hash || '';
      }
    },
    init: function init() {
      var swiper = this;
      if (!swiper.params.hashNavigation.enabled || (swiper.params.history && swiper.params.history.enabled)) { return; }
      swiper.hashNavigation.initialized = true;
      var hash = doc.location.hash.replace('#', '');
      if (hash) {
        var speed = 0;
        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
          var slide = swiper.slides.eq(i);
          var slideHash = slide.attr('data-hash') || slide.attr('data-history');
          if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
            var index = slide.index();
            swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
          }
        }
      }
      if (swiper.params.hashNavigation.watchState) {
        $(win).on('hashchange', swiper.hashNavigation.onHashCange);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.params.hashNavigation.watchState) {
        $(win).off('hashchange', swiper.hashNavigation.onHashCange);
      }
    },
  };
  var HashNavigation$1 = {
    name: 'hash-navigation',
    params: {
      hashNavigation: {
        enabled: false,
        replaceState: false,
        watchState: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        hashNavigation: {
          initialized: false,
          init: HashNavigation.init.bind(swiper),
          destroy: HashNavigation.destroy.bind(swiper),
          setHash: HashNavigation.setHash.bind(swiper),
          onHashCange: HashNavigation.onHashCange.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.init();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.destroy();
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.hashNavigation.initialized) {
          swiper.hashNavigation.setHash();
        }
      },
    },
  };

  /* eslint no-underscore-dangle: "off" */

  var Autoplay = {
    run: function run() {
      var swiper = this;
      var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
      var delay = swiper.params.autoplay.delay;
      if ($activeSlideEl.attr('data-swiper-autoplay')) {
        delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
      }
      clearTimeout(swiper.autoplay.timeout);
      swiper.autoplay.timeout = Utils.nextTick(function () {
        if (swiper.params.autoplay.reverseDirection) {
          if (swiper.params.loop) {
            swiper.loopFix();
            swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.isBeginning) {
            swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else {
            swiper.autoplay.stop();
          }
        } else if (swiper.params.loop) {
          swiper.loopFix();
          swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.isEnd) {
          swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else {
          swiper.autoplay.stop();
        }
      }, delay);
    },
    start: function start() {
      var swiper = this;
      if (typeof swiper.autoplay.timeout !== 'undefined') { return false; }
      if (swiper.autoplay.running) { return false; }
      swiper.autoplay.running = true;
      swiper.emit('autoplayStart');
      swiper.autoplay.run();
      return true;
    },
    stop: function stop() {
      var swiper = this;
      if (!swiper.autoplay.running) { return false; }
      if (typeof swiper.autoplay.timeout === 'undefined') { return false; }

      if (swiper.autoplay.timeout) {
        clearTimeout(swiper.autoplay.timeout);
        swiper.autoplay.timeout = undefined;
      }
      swiper.autoplay.running = false;
      swiper.emit('autoplayStop');
      return true;
    },
    pause: function pause(speed) {
      var swiper = this;
      if (!swiper.autoplay.running) { return; }
      if (swiper.autoplay.paused) { return; }
      if (swiper.autoplay.timeout) { clearTimeout(swiper.autoplay.timeout); }
      swiper.autoplay.paused = true;
      if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
        swiper.autoplay.paused = false;
        swiper.autoplay.run();
      } else {
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
      }
    },
  };

  var Autoplay$1 = {
    name: 'autoplay',
    params: {
      autoplay: {
        enabled: false,
        delay: 3000,
        waitForTransition: true,
        disableOnInteraction: true,
        stopOnLastSlide: false,
        reverseDirection: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        autoplay: {
          running: false,
          paused: false,
          run: Autoplay.run.bind(swiper),
          start: Autoplay.start.bind(swiper),
          stop: Autoplay.stop.bind(swiper),
          pause: Autoplay.pause.bind(swiper),
          onTransitionEnd: function onTransitionEnd(e) {
            if (!swiper || swiper.destroyed || !swiper.$wrapperEl) { return; }
            if (e.target !== this) { return; }
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
            swiper.autoplay.paused = false;
            if (!swiper.autoplay.running) {
              swiper.autoplay.stop();
            } else {
              swiper.autoplay.run();
            }
          },
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.autoplay.enabled) {
          swiper.autoplay.start();
        }
      },
      beforeTransitionStart: function beforeTransitionStart(speed, internal) {
        var swiper = this;
        if (swiper.autoplay.running) {
          if (internal || !swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.pause(speed);
          } else {
            swiper.autoplay.stop();
          }
        }
      },
      sliderFirstMove: function sliderFirstMove() {
        var swiper = this;
        if (swiper.autoplay.running) {
          if (swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.stop();
          } else {
            swiper.autoplay.pause();
          }
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.autoplay.running) {
          swiper.autoplay.stop();
        }
      },
    },
  };

  var Fade = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var slides = swiper.slides;
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = swiper.slides.eq(i);
        var offset = $slideEl[0].swiperSlideOffset;
        var tx = -offset;
        if (!swiper.params.virtualTranslate) { tx -= swiper.translate; }
        var ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }
        var slideOpacity = swiper.params.fadeEffect.crossFade
          ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
          : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
        $slideEl
          .css({
            opacity: slideOpacity,
          })
          .transform(("translate3d(" + tx + "px, " + ty + "px, 0px)"));
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var slides = swiper.slides;
      var $wrapperEl = swiper.$wrapperEl;
      slides.transition(duration);
      if (swiper.params.virtualTranslate && duration !== 0) {
        var eventTriggered = false;
        slides.transitionEnd(function () {
          if (eventTriggered) { return; }
          if (!swiper || swiper.destroyed) { return; }
          eventTriggered = true;
          swiper.animating = false;
          var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
          for (var i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    },
  };

  var EffectFade = {
    name: 'effect-fade',
    params: {
      fadeEffect: {
        crossFade: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        fadeEffect: {
          setTranslate: Fade.setTranslate.bind(swiper),
          setTransition: Fade.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'fade') { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "fade"));
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'fade') { return; }
        swiper.fadeEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'fade') { return; }
        swiper.fadeEffect.setTransition(duration);
      },
    },
  };

  var Cube = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var $el = swiper.$el;
      var $wrapperEl = swiper.$wrapperEl;
      var slides = swiper.slides;
      var swiperWidth = swiper.width;
      var swiperHeight = swiper.height;
      var rtl = swiper.rtlTranslate;
      var swiperSize = swiper.size;
      var params = swiper.params.cubeEffect;
      var isHorizontal = swiper.isHorizontal();
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      var wrapperRotate = 0;
      var $cubeShadowEl;
      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $wrapperEl.append($cubeShadowEl);
          }
          $cubeShadowEl.css({ height: (swiperWidth + "px") });
        } else {
          $cubeShadowEl = $el.find('.swiper-cube-shadow');
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $el.append($cubeShadowEl);
          }
        }
      }
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = slides.eq(i);
        var slideIndex = i;
        if (isVirtual) {
          slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
        }
        var slideAngle = slideIndex * 90;
        var round = Math.floor(slideAngle / 360);
        if (rtl) {
          slideAngle = -slideAngle;
          round = Math.floor(-slideAngle / 360);
        }
        var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        var tx = 0;
        var ty = 0;
        var tz = 0;
        if (slideIndex % 4 === 0) {
          tx = -round * 4 * swiperSize;
          tz = 0;
        } else if ((slideIndex - 1) % 4 === 0) {
          tx = 0;
          tz = -round * 4 * swiperSize;
        } else if ((slideIndex - 2) % 4 === 0) {
          tx = swiperSize + (round * 4 * swiperSize);
          tz = swiperSize;
        } else if ((slideIndex - 3) % 4 === 0) {
          tx = -swiperSize;
          tz = (3 * swiperSize) + (swiperSize * 4 * round);
        }
        if (rtl) {
          tx = -tx;
        }

        if (!isHorizontal) {
          ty = tx;
          tx = 0;
        }

        var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";
        if (progress <= 1 && progress > -1) {
          wrapperRotate = (slideIndex * 90) + (progress * 90);
          if (rtl) { wrapperRotate = (-slideIndex * 90) - (progress * 90); }
        }
        $slideEl.transform(transform);
        if (params.slideShadows) {
          // Set shadows
          var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if (shadowBefore.length === 0) {
            shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
            $slideEl.append(shadowBefore);
          }
          if (shadowAfter.length === 0) {
            shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
            $slideEl.append(shadowAfter);
          }
          if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
          if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
        }
      }
      $wrapperEl.css({
        '-webkit-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
        '-moz-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
        '-ms-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
        'transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
      });

      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl.transform(("translate3d(0px, " + ((swiperWidth / 2) + params.shadowOffset) + "px, " + (-swiperWidth / 2) + "px) rotateX(90deg) rotateZ(0deg) scale(" + (params.shadowScale) + ")"));
        } else {
          var shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
          var multiplier = 1.5 - (
            (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2)
            + (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2)
          );
          var scale1 = params.shadowScale;
          var scale2 = params.shadowScale / multiplier;
          var offset = params.shadowOffset;
          $cubeShadowEl.transform(("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + ((swiperHeight / 2) + offset) + "px, " + (-swiperHeight / 2 / scale2) + "px) rotateX(-90deg)"));
        }
      }
      var zFactor = (Browser.isSafari || Browser.isUiWebView) ? (-swiperSize / 2) : 0;
      $wrapperEl
        .transform(("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)"));
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var $el = swiper.$el;
      var slides = swiper.slides;
      slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
      if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
        $el.find('.swiper-cube-shadow').transition(duration);
      }
    },
  };

  var EffectCube = {
    name: 'effect-cube',
    params: {
      cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        cubeEffect: {
          setTranslate: Cube.setTranslate.bind(swiper),
          setTransition: Cube.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'cube') { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "cube"));
        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: false,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'cube') { return; }
        swiper.cubeEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'cube') { return; }
        swiper.cubeEffect.setTransition(duration);
      },
    },
  };

  var Flip = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var slides = swiper.slides;
      var rtl = swiper.rtlTranslate;
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = slides.eq(i);
        var progress = $slideEl[0].progress;
        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        }
        var offset = $slideEl[0].swiperSlideOffset;
        var rotate = -180 * progress;
        var rotateY = rotate;
        var rotateX = 0;
        var tx = -offset;
        var ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
          rotateX = -rotateY;
          rotateY = 0;
        } else if (rtl) {
          rotateY = -rotateY;
        }

        $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

        if (swiper.params.flipEffect.slideShadows) {
          // Set shadows
          var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if (shadowBefore.length === 0) {
            shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>"));
            $slideEl.append(shadowBefore);
          }
          if (shadowAfter.length === 0) {
            shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>"));
            $slideEl.append(shadowAfter);
          }
          if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
          if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
        }
        $slideEl
          .transform(("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)"));
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var slides = swiper.slides;
      var activeIndex = swiper.activeIndex;
      var $wrapperEl = swiper.$wrapperEl;
      slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
      if (swiper.params.virtualTranslate && duration !== 0) {
        var eventTriggered = false;
        // eslint-disable-next-line
        slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
          if (eventTriggered) { return; }
          if (!swiper || swiper.destroyed) { return; }
          // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;
          eventTriggered = true;
          swiper.animating = false;
          var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
          for (var i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    },
  };

  var EffectFlip = {
    name: 'effect-flip',
    params: {
      flipEffect: {
        slideShadows: true,
        limitRotation: true,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        flipEffect: {
          setTranslate: Flip.setTranslate.bind(swiper),
          setTransition: Flip.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'flip') { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "flip"));
        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'flip') { return; }
        swiper.flipEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'flip') { return; }
        swiper.flipEffect.setTransition(duration);
      },
    },
  };

  var Coverflow = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var swiperWidth = swiper.width;
      var swiperHeight = swiper.height;
      var slides = swiper.slides;
      var $wrapperEl = swiper.$wrapperEl;
      var slidesSizesGrid = swiper.slidesSizesGrid;
      var params = swiper.params.coverflowEffect;
      var isHorizontal = swiper.isHorizontal();
      var transform = swiper.translate;
      var center = isHorizontal ? -transform + (swiperWidth / 2) : -transform + (swiperHeight / 2);
      var rotate = isHorizontal ? params.rotate : -params.rotate;
      var translate = params.depth;
      // Each slide offset from center
      for (var i = 0, length = slides.length; i < length; i += 1) {
        var $slideEl = slides.eq(i);
        var slideSize = slidesSizesGrid[i];
        var slideOffset = $slideEl[0].swiperSlideOffset;
        var offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;

        var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
        // var rotateZ = 0
        var translateZ = -translate * Math.abs(offsetMultiplier);

        var translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
        var translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;

        // Fix for ultra small values
        if (Math.abs(translateX) < 0.001) { translateX = 0; }
        if (Math.abs(translateY) < 0.001) { translateY = 0; }
        if (Math.abs(translateZ) < 0.001) { translateZ = 0; }
        if (Math.abs(rotateY) < 0.001) { rotateY = 0; }
        if (Math.abs(rotateX) < 0.001) { rotateX = 0; }

        var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";

        $slideEl.transform(slideTransform);
        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
        if (params.slideShadows) {
          // Set shadows
          var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if ($shadowBeforeEl.length === 0) {
            $shadowBeforeEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
            $slideEl.append($shadowBeforeEl);
          }
          if ($shadowAfterEl.length === 0) {
            $shadowAfterEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
            $slideEl.append($shadowAfterEl);
          }
          if ($shadowBeforeEl.length) { $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0; }
          if ($shadowAfterEl.length) { $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0; }
        }
      }

      // Set correct perspective for IE10
      if (Support.pointerEvents || Support.prefixedPointerEvents) {
        var ws = $wrapperEl[0].style;
        ws.perspectiveOrigin = center + "px 50%";
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      swiper.slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
    },
  };

  var EffectCoverflow = {
    name: 'effect-coverflow',
    params: {
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        coverflowEffect: {
          setTranslate: Coverflow.setTranslate.bind(swiper),
          setTransition: Coverflow.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'coverflow') { return; }

        swiper.classNames.push(((swiper.params.containerModifierClass) + "coverflow"));
        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));

        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'coverflow') { return; }
        swiper.coverflowEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'coverflow') { return; }
        swiper.coverflowEffect.setTransition(duration);
      },
    },
  };

  var Thumbs = {
    init: function init() {
      var swiper = this;
      var ref = swiper.params;
      var thumbsParams = ref.thumbs;
      var SwiperClass = swiper.constructor;
      if (thumbsParams.swiper instanceof SwiperClass) {
        swiper.thumbs.swiper = thumbsParams.swiper;
        Utils.extend(swiper.thumbs.swiper.originalParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        });
        Utils.extend(swiper.thumbs.swiper.params, {
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        });
      } else if (Utils.isObject(thumbsParams.swiper)) {
        swiper.thumbs.swiper = new SwiperClass(Utils.extend({}, thumbsParams.swiper, {
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        }));
        swiper.thumbs.swiperCreated = true;
      }
      swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
      swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
    },
    onThumbClick: function onThumbClick() {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) { return; }
      var clickedIndex = thumbsSwiper.clickedIndex;
      var clickedSlide = thumbsSwiper.clickedSlide;
      if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) { return; }
      if (typeof clickedIndex === 'undefined' || clickedIndex === null) { return; }
      var slideToIndex;
      if (thumbsSwiper.params.loop) {
        slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
      } else {
        slideToIndex = clickedIndex;
      }
      if (swiper.params.loop) {
        var currentIndex = swiper.activeIndex;
        if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
          swiper.loopFix();
          // eslint-disable-next-line
          swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
          currentIndex = swiper.activeIndex;
        }
        var prevIndex = swiper.slides.eq(currentIndex).prevAll(("[data-swiper-slide-index=\"" + slideToIndex + "\"]")).eq(0).index();
        var nextIndex = swiper.slides.eq(currentIndex).nextAll(("[data-swiper-slide-index=\"" + slideToIndex + "\"]")).eq(0).index();
        if (typeof prevIndex === 'undefined') { slideToIndex = nextIndex; }
        else if (typeof nextIndex === 'undefined') { slideToIndex = prevIndex; }
        else if (nextIndex - currentIndex < currentIndex - prevIndex) { slideToIndex = nextIndex; }
        else { slideToIndex = prevIndex; }
      }
      swiper.slideTo(slideToIndex);
    },
    update: function update(initial) {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) { return; }

      var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto'
        ? thumbsSwiper.slidesPerViewDynamic()
        : thumbsSwiper.params.slidesPerView;

      if (swiper.realIndex !== thumbsSwiper.realIndex) {
        var currentThumbsIndex = thumbsSwiper.activeIndex;
        var newThumbsIndex;
        if (thumbsSwiper.params.loop) {
          if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
            thumbsSwiper.loopFix();
            // eslint-disable-next-line
            thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
            currentThumbsIndex = thumbsSwiper.activeIndex;
          }
          // Find actual thumbs index to slide to
          var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(("[data-swiper-slide-index=\"" + (swiper.realIndex) + "\"]")).eq(0).index();
          var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(("[data-swiper-slide-index=\"" + (swiper.realIndex) + "\"]")).eq(0).index();
          if (typeof prevThumbsIndex === 'undefined') { newThumbsIndex = nextThumbsIndex; }
          else if (typeof nextThumbsIndex === 'undefined') { newThumbsIndex = prevThumbsIndex; }
          else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) { newThumbsIndex = currentThumbsIndex; }
          else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) { newThumbsIndex = nextThumbsIndex; }
          else { newThumbsIndex = prevThumbsIndex; }
        } else {
          newThumbsIndex = swiper.realIndex;
        }
        if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
          if (thumbsSwiper.params.centeredSlides) {
            if (newThumbsIndex > currentThumbsIndex) {
              newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
            } else {
              newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
            }
          } else if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - slidesPerView + 1;
          }
          thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
        }
      }

      // Activate thumbs
      var thumbsToActivate = 1;
      var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

      if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
        thumbsToActivate = swiper.params.slidesPerView;
      }

      thumbsSwiper.slides.removeClass(thumbActiveClass);
      if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual) {
        for (var i = 0; i < thumbsToActivate; i += 1) {
          thumbsSwiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]")).addClass(thumbActiveClass);
        }
      } else {
        for (var i$1 = 0; i$1 < thumbsToActivate; i$1 += 1) {
          thumbsSwiper.slides.eq(swiper.realIndex + i$1).addClass(thumbActiveClass);
        }
      }
    },
  };
  var Thumbs$1 = {
    name: 'thumbs',
    params: {
      thumbs: {
        swiper: null,
        slideThumbActiveClass: 'swiper-slide-thumb-active',
        thumbsContainerClass: 'swiper-container-thumbs',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        thumbs: {
          swiper: null,
          init: Thumbs.init.bind(swiper),
          update: Thumbs.update.bind(swiper),
          onThumbClick: Thumbs.onThumbClick.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        var ref = swiper.params;
        var thumbs = ref.thumbs;
        if (!thumbs || !thumbs.swiper) { return; }
        swiper.thumbs.init();
        swiper.thumbs.update(true);
      },
      slideChange: function slideChange() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      update: function update() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      resize: function resize() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) { return; }
        thumbsSwiper.setTransition(duration);
      },
      beforeDestroy: function beforeDestroy() {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) { return; }
        if (swiper.thumbs.swiperCreated && thumbsSwiper) {
          thumbsSwiper.destroy();
        }
      },
    },
  };

  // Swiper Class

  var components = [
    Device$1,
    Support$1,
    Browser$1,
    Resize,
    Observer$1,
    Virtual$1,
    Keyboard$1,
    Mousewheel$1,
    Navigation$1,
    Pagination$1,
    Scrollbar$1,
    Parallax$1,
    Zoom$1,
    Lazy$1,
    Controller$1,
    A11y,
    History$1,
    HashNavigation$1,
    Autoplay$1,
    EffectFade,
    EffectCube,
    EffectFlip,
    EffectCoverflow,
    Thumbs$1
  ];

  if (typeof Swiper.use === 'undefined') {
    Swiper.use = Swiper.Class.use;
    Swiper.installModule = Swiper.Class.installModule;
  }

  Swiper.use(components);

  return Swiper;

}));


/***/ }),

/***/ 971:
/***/ (function(module, exports) {

module.exports = "/Educ/public/images/avatar3.jpg?7e593f7330076b4b89e96f89b9396c0a";

/***/ }),

/***/ 972:
/***/ (function(module, exports) {

module.exports = "/Educ/public/images/avatar2.jpg?2a26dff9723fa354fe9cb39a4f4529e6";

/***/ }),

/***/ 979:
/***/ (function(module, exports) {

module.exports = "/Educ/public/images/avatar4.jpg?25bf7926d4f4c50c95e027395f7019f6";

/***/ }),

/***/ 990:
/***/ (function(module, exports) {

module.exports = "/Educ/public/images/avatar5.jpg?83fc5fdfbe37fb37db7a2fe84cca6d6d";

/***/ }),

/***/ 997:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1010)
/* template */
var __vue_template__ = __webpack_require__(1011)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/components/plugins/scroll/vScroll.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-583e6eb5", Component.options)
  } else {
    hotAPI.reload("data-v-583e6eb5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});