"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ROW = 4;
var COL = 3;

var DecadePanel = function DecadePanel(props) {
  var _useState = (0, _react.useState)(props.value || props.defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  function chooseDecade(year, event) {
    var next = value.clone();
    next.year(year);
    next.month(value.month());

    if (props.onSelect) {
      props.onSelect(next);
    }

    event.preventDefault();
  }

  var nextCentury = function nextCentury() {
    var next = value.clone();
    next.add(100, 'years');
    setValue(next);
  };

  var previousCentury = function previousCentury() {
    var next = value.clone();
    next.add(-100, 'years');
    setValue(next);
  }; // bind methods


  var prefixCls = "".concat(props.rootPrefixCls, "-decade-panel");
  var locale = props.locale,
      renderFooter = props.renderFooter;
  var currentYear = value.year();
  var startYear = parseInt("".concat(currentYear / 100), 10) * 100;
  var preYear = startYear - 10;
  var endYear = startYear + 99;
  var decades = [];
  var index = 0;

  for (var rowIndex = 0; rowIndex < ROW; rowIndex += 1) {
    decades[rowIndex] = [];

    for (var colIndex = 0; colIndex < COL; colIndex += 1) {
      var startDecade = preYear + index * 10;
      var endDecade = preYear + index * 10 + 9;
      decades[rowIndex][colIndex] = {
        startDecade: startDecade,
        endDecade: endDecade
      };
      index += 1;
    }
  }

  var footer = renderFooter && renderFooter('decade');
  var decadesEls = decades.map(function (row, decadeIndex) {
    var tds = row.map(function (decadeData) {
      var _classNameMap;

      var dStartDecade = decadeData.startDecade;
      var dEndDecade = decadeData.endDecade;
      var isLast = dStartDecade < startYear;
      var isNext = dEndDecade > endYear;
      var classNameMap = (_classNameMap = {}, _defineProperty(_classNameMap, "".concat(prefixCls, "-cell"), 1), _defineProperty(_classNameMap, "".concat(prefixCls, "-selected-cell"), dStartDecade <= currentYear && currentYear <= dEndDecade), _defineProperty(_classNameMap, "".concat(prefixCls, "-last-century-cell"), isLast), _defineProperty(_classNameMap, "".concat(prefixCls, "-next-century-cell"), isNext), _classNameMap);
      var content = "".concat(dStartDecade, "-").concat(dEndDecade);
      var clickHandler;

      if (isLast) {
        clickHandler = previousCentury;
      } else if (isNext) {
        clickHandler = nextCentury;
      } else {
        clickHandler = chooseDecade.bind(_this, dStartDecade);
      }

      return _react.default.createElement("td", {
        key: dStartDecade,
        onClick: clickHandler,
        role: "gridcell",
        className: (0, _classnames.default)(classNameMap)
      }, _react.default.createElement("a", {
        className: "".concat(prefixCls, "-decade")
      }, content));
    });
    return (// eslint-disable-next-line react/no-array-index-key
      _react.default.createElement("tr", {
        key: decadeIndex,
        role: "row"
      }, tds)
    );
  });
  return _react.default.createElement("div", {
    className: prefixCls
  }, _react.default.createElement("div", {
    className: "".concat(prefixCls, "-header")
  }, _react.default.createElement("a", {
    className: "".concat(prefixCls, "-prev-century-btn"),
    role: "button",
    onClick: previousCentury,
    title: locale.previousCentury
  }), _react.default.createElement("div", {
    className: "".concat(prefixCls, "-century")
  }, startYear, "-", endYear), _react.default.createElement("a", {
    className: "".concat(prefixCls, "-next-century-btn"),
    role: "button",
    onClick: nextCentury,
    title: locale.nextCentury
  })), _react.default.createElement("div", {
    className: "".concat(prefixCls, "-body")
  }, _react.default.createElement("table", {
    className: "".concat(prefixCls, "-table"),
    cellSpacing: "0",
    role: "grid"
  }, _react.default.createElement("tbody", {
    className: "".concat(prefixCls, "-tbody")
  }, decadesEls))), footer && _react.default.createElement("div", {
    className: "".concat(prefixCls, "-footer")
  }, footer));
};

var _default = DecadePanel;
exports.default = _default;