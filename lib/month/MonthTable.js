"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _index = require("../util/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ROW = 4;
var COL = 3;

function chooseMonth(month) {
  var next = this.state.value.clone();
  next.month(month);
  this.setAndSelectValue(next);
}

var MonthTable =
/*#__PURE__*/
function (_Component) {
  _inherits(MonthTable, _Component);

  function MonthTable(props) {
    var _this;

    _classCallCheck(this, MonthTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MonthTable).call(this, props));
    _this.state = {
      value: props.value
    };
    return _this;
  }

  _createClass(MonthTable, [{
    key: "setAndSelectValue",
    value: function setAndSelectValue(value) {
      this.setState({
        value: value
      });
      var onSelect = this.props.onSelect;

      if (onSelect) {
        onSelect(value);
      }
    }
  }, {
    key: "months",
    value: function months() {
      var value = this.state.value;
      var current = value.clone();
      var months = [];
      var index = 0;

      for (var rowIndex = 0; rowIndex < ROW; rowIndex += 1) {
        months[rowIndex] = [];

        for (var colIndex = 0; colIndex < COL; colIndex += 1) {
          current.month(index);
          var content = (0, _index.getMonthName)(current);
          months[rowIndex][colIndex] = {
            value: index,
            content: content,
            title: content
          };
          index += 1;
        }
      }

      return months;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;
      var value = this.state.value;
      var today = (0, _index.getTodayTime)(value);
      var months = this.months();
      var currentMonth = value.month();
      var prefixCls = props.prefixCls,
          locale = props.locale,
          contentRender = props.contentRender,
          cellRender = props.cellRender;
      var monthsEls = months.map(function (month, index) {
        var tds = month.map(function (monthData) {
          var _classNameMap;

          var disabled = false;

          if (props.disabledDate) {
            var testValue = value.clone();
            testValue.month(monthData.value);
            disabled = props.disabledDate(testValue);
          }

          var classNameMap = (_classNameMap = {}, _defineProperty(_classNameMap, "".concat(prefixCls, "-cell"), 1), _defineProperty(_classNameMap, "".concat(prefixCls, "-cell-disabled"), disabled), _defineProperty(_classNameMap, "".concat(prefixCls, "-selected-cell"), monthData.value === currentMonth), _defineProperty(_classNameMap, "".concat(prefixCls, "-current-cell"), today.year() === value.year() && monthData.value === today.month()), _classNameMap);
          var cellEl;

          if (cellRender) {
            var currentValue = value.clone();
            currentValue.month(monthData.value);
            cellEl = cellRender(currentValue, locale);
          } else {
            var content;

            if (contentRender) {
              var _currentValue = value.clone();

              _currentValue.month(monthData.value);

              content = contentRender(_currentValue, locale);
            } else {
              // eslint-disable-next-line prefer-destructuring
              content = monthData.content;
            }

            cellEl = _react.default.createElement("a", {
              className: "".concat(prefixCls, "-month")
            }, content);
          }

          return _react.default.createElement("td", {
            role: "gridcell",
            key: monthData.value,
            onClick: disabled ? null : chooseMonth.bind(_this2, monthData.value),
            title: monthData.title,
            className: (0, _classnames.default)(classNameMap)
          }, cellEl);
        });
        return _react.default.createElement("tr", {
          key: index,
          role: "row"
        }, tds);
      });
      return _react.default.createElement("table", {
        className: "".concat(prefixCls, "-table"),
        cellSpacing: "0",
        role: "grid"
      }, _react.default.createElement("tbody", {
        className: "".concat(prefixCls, "-tbody")
      }, monthsEls));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('value' in nextProps) {
        return {
          value: nextProps.value
        };
      }

      return null;
    }
  }]);

  return MonthTable;
}(_react.Component);

var _default = MonthTable;
exports.default = _default;