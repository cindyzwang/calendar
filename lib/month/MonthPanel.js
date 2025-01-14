"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _MonthTable = _interopRequireDefault(require("./MonthTable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MonthPanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MonthPanel, _React$Component);

  function MonthPanel(props) {
    var _this;

    _classCallCheck(this, MonthPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MonthPanel).call(this, props));

    _this.goYear = function (direction) {
      _this.props.changeYear(direction);
    };

    _this.nextYear = function () {
      return _this.goYear(1);
    };

    _this.previousYear = function () {
      return _this.goYear(-1);
    };

    _this.prefixCls = "".concat(_this.props.rootPrefixCls, "-month-panel");

    _this.setAndSelectValue = function (value) {
      _this.setValue(value);

      _this.props.onSelect(value);
    };

    _this.setValue = function (value) {
      if ('value' in _this.props) {
        _this.setState({
          value: value
        });
      }
    };

    _this.state = {
      value: props.value || props.defaultValue
    };
    return _this;
  }

  _createClass(MonthPanel, [{
    key: "render",
    value: function render() {
      var props = this.props;
      var value = this.state.value;
      var locale = props.locale,
          cellRender = props.cellRender,
          contentRender = props.contentRender,
          renderFooter = props.renderFooter;
      var year = value.year();
      var prefixCls = this.prefixCls;
      var footer = renderFooter && renderFooter('month');
      return _react.default.createElement("div", {
        className: prefixCls,
        style: props.style
      }, _react.default.createElement("div", null, _react.default.createElement("div", {
        className: "".concat(prefixCls, "-header")
      }, _react.default.createElement("a", {
        className: "".concat(prefixCls, "-prev-year-btn"),
        role: "button",
        onClick: this.previousYear,
        title: locale.previousYear
      }), _react.default.createElement("a", {
        className: "".concat(prefixCls, "-year-select"),
        role: "button",
        onClick: props.onYearPanelShow,
        title: locale.yearSelect
      }, _react.default.createElement("span", {
        className: "".concat(prefixCls, "-year-select-content")
      }, year), _react.default.createElement("span", {
        className: "".concat(prefixCls, "-year-select-arrow")
      }, "x")), _react.default.createElement("a", {
        className: "".concat(prefixCls, "-next-year-btn"),
        role: "button",
        onClick: this.nextYear,
        title: locale.nextYear
      })), _react.default.createElement("div", {
        className: "".concat(prefixCls, "-body")
      }, _react.default.createElement(_MonthTable.default, {
        disabledDate: props.disabledDate,
        onSelect: this.setAndSelectValue,
        locale: locale,
        value: value,
        cellRender: cellRender,
        contentRender: contentRender,
        prefixCls: prefixCls
      })), footer && _react.default.createElement("div", {
        className: "".concat(prefixCls, "-footer")
      }, footer)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props) {
      var newState = {};

      if ('value' in props) {
        newState = {
          value: props.value
        };
      }

      return newState;
    }
  }]);

  return MonthPanel;
}(_react.default.Component);

MonthPanel.defaultProps = {
  onChange: function onChange() {
    return null;
  },
  onSelect: function onSelect() {
    return null;
  }
};
(0, _reactLifecyclesCompat.polyfill)(MonthPanel);
var _default = MonthPanel;
exports.default = _default;