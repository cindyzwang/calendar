"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var YearPanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(YearPanel, _React$Component);

  function YearPanel(props) {
    var _this;

    _classCallCheck(this, YearPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(YearPanel).call(this, props));

    _this.goYear = function (direction) {
      var stateValue = _this.state.value;
      var value = stateValue.clone();
      value.add(direction, 'year');

      _this.setState({
        value: value
      });
    };

    _this.chooseYear = function (year) {
      var stateValue = _this.state.value;
      var value = stateValue.clone();
      value.year(year);
      value.month(_this.state.value.month());

      _this.setState({
        value: value
      });

      _this.props.onSelect(value);
    };

    _this.nextDecade = function () {
      return _this.goYear(10);
    };

    _this.previousDecade = function () {
      return _this.goYear(-10);
    };

    _this.prefixCls = "".concat(_this.props.rootPrefixCls, "-year-panel");
    _this.state = {
      value: props.value || props.defaultValue
    };
    return _this;
  }

  _createClass(YearPanel, [{
    key: "years",
    value: function years() {
      var value = this.state.value;
      var currentYear = value.year();
      var startYear = parseInt("".concat(currentYear / 10), 10) * 10;
      var previousYear = startYear - 1;
      var years = [];
      var index = 0;

      for (var rowIndex = 0; rowIndex < ROW; rowIndex += 1) {
        years[rowIndex] = [];

        for (var colIndex = 0; colIndex < COL; colIndex += 1) {
          var year = previousYear + index;
          var content = String(year);
          years[rowIndex][colIndex] = {
            content: content,
            year: year,
            title: content
          };
          index += 1;
        }
      }

      return years;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;
      var value = this.state.value;
      var locale = props.locale,
          renderFooter = props.renderFooter;
      var years = this.years();
      var currentYear = value.year();
      var startYear = parseInt("".concat(currentYear / 10), 10) * 10;
      var endYear = startYear + 9;
      var prefixCls = this.prefixCls;
      var yeasEls = years.map(function (row, index) {
        var tds = row.map(function (yearData) {
          var _classNameMap;

          var classNameMap = (_classNameMap = {}, _defineProperty(_classNameMap, "".concat(prefixCls, "-cell"), 1), _defineProperty(_classNameMap, "".concat(prefixCls, "-selected-cell"), yearData.year === currentYear), _defineProperty(_classNameMap, "".concat(prefixCls, "-last-decade-cell"), yearData.year < startYear), _defineProperty(_classNameMap, "".concat(prefixCls, "-next-decade-cell"), yearData.year > endYear), _classNameMap);
          var clickHandler;

          if (yearData.year < startYear) {
            clickHandler = _this2.previousDecade;
          } else if (yearData.year > endYear) {
            clickHandler = _this2.nextDecade;
          } else {
            clickHandler = function clickHandler() {
              return _this2.chooseYear(yearData.year);
            };
          }

          return _react.default.createElement("td", {
            role: "gridcell",
            title: yearData.title,
            key: yearData.content,
            onClick: clickHandler,
            className: (0, _classnames.default)(classNameMap)
          }, _react.default.createElement("a", {
            className: "".concat(prefixCls, "-year")
          }, yearData.content));
        });
        return _react.default.createElement("tr", {
          key: index,
          role: "row"
        }, tds);
      });
      var footer = renderFooter && renderFooter('year');
      return _react.default.createElement("div", {
        className: this.prefixCls
      }, _react.default.createElement("div", null, _react.default.createElement("div", {
        className: "".concat(prefixCls, "-header")
      }, _react.default.createElement("a", {
        className: "".concat(prefixCls, "-prev-decade-btn"),
        role: "button",
        onClick: this.previousDecade,
        title: locale.previousDecade
      }), _react.default.createElement("a", {
        className: "".concat(prefixCls, "-decade-select"),
        role: "button",
        onClick: props.onDecadePanelShow,
        title: locale.decadeSelect
      }, _react.default.createElement("span", {
        className: "".concat(prefixCls, "-decade-select-content")
      }, startYear, "-", endYear), _react.default.createElement("span", {
        className: "".concat(prefixCls, "-decade-select-arrow")
      }, "x")), _react.default.createElement("a", {
        className: "".concat(prefixCls, "-next-decade-btn"),
        role: "button",
        onClick: this.nextDecade,
        title: locale.nextDecade
      })), _react.default.createElement("div", {
        className: "".concat(prefixCls, "-body")
      }, _react.default.createElement("table", {
        className: "".concat(prefixCls, "-table"),
        cellSpacing: "0",
        role: "grid"
      }, _react.default.createElement("tbody", {
        className: "".concat(prefixCls, "-tbody")
      }, yeasEls))), footer && _react.default.createElement("div", {
        className: "".concat(prefixCls, "-footer")
      }, footer)));
    }
  }]);

  return YearPanel;
}(_react.default.Component);

exports.default = YearPanel;