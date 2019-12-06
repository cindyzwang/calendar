"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _moment = _interopRequireDefault(require("moment"));

var _DateTable = _interopRequireDefault(require("./date/DateTable"));

var _MonthTable = _interopRequireDefault(require("./month/MonthTable"));

var _CalendarMixin = require("./mixin/CalendarMixin");

var _CommonMixin = require("./mixin/CommonMixin");

var _CalendarHeader = _interopRequireDefault(require("./full-calendar/CalendarHeader"));

var _index = require("./util/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FullCalendar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FullCalendar, _React$Component);

  function FullCalendar(props) {
    var _this;

    _classCallCheck(this, FullCalendar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FullCalendar).call(this, props));

    _this.onSelect = function (value, cause) {
      if (value) {
        _this.setValue(value);
      }

      _this.setSelectedValue(value, cause);
    };

    _this.renderRoot = function (newProps) {
      var _className;

      var _assertThisInitialize = _assertThisInitialized(_this),
          props = _assertThisInitialize.props;

      var prefixCls = props.prefixCls;
      var className = (_className = {}, _defineProperty(_className, prefixCls, 1), _defineProperty(_className, "".concat(prefixCls, "-hidden"), !props.visible), _defineProperty(_className, props.className, !!props.className), _defineProperty(_className, newProps.className, !!newProps.className), _className);
      return _react.default.createElement("div", {
        ref: _this.saveRoot,
        className: "".concat((0, _classnames.default)(className)),
        style: _this.props.style,
        tabIndex: 0,
        onKeyDown: _this.onKeyDown,
        onBlur: _this.onBlur
      }, newProps.children);
    };

    _this.setSelectedValue = function (selectedValue, cause) {
      if (!('selectedValue' in _this.props)) {
        _this.setState({
          // 这个值没有什么用，但是有个测试测试了
          // 强行增加了一下
          // eslint-disable-next-line react/no-unused-state
          selectedValue: selectedValue
        });
      }

      if (_this.props.onSelect) {
        _this.props.onSelect(selectedValue, cause);
      }
    };

    _this.setValue = function (value) {
      var originalValue = _this.state.value;

      if (!('value' in _this.props)) {
        _this.setState({
          value: value
        });
      }

      if (originalValue && value && !originalValue.isSame(value) || !originalValue && value || originalValue && !value) {
        _this.props.onChange(value);
      }
    };

    _this.isAllowedDate = function (value) {
      var disabledDate = _this.props.disabledDate;
      var disabledTime = _this.props.disabledTime;
      return (0, _index.isAllowedDate)(value, disabledDate, disabledTime);
    };

    _this.getFormat = function () {
      var format = _this.props.format;
      var _this$props = _this.props,
          locale = _this$props.locale,
          timePicker = _this$props.timePicker;

      if (!format) {
        if (timePicker) {
          format = locale.dateTimeFormat;
        } else {
          format = locale.dateFormat;
        }
      }

      return format;
    };

    _this.focus = function () {
      if (_this.focusElement) {
        _this.focusElement.focus();
      } else if (_this.rootInstance) {
        _this.rootInstance.focus();
      }
    };

    _this.saveFocusElement = function (focusElement) {
      _this.focusElement = focusElement;
    };

    _this.saveRoot = function (root) {
      _this.rootInstance = root;
    };

    _this.onMonthSelect = function (value) {
      _this.onSelect(value, {
        target: 'month'
      });
    };

    _this.setType = function (type) {
      if (!('type' in _this.props)) {
        _this.setState({
          type: type
        });
      }

      _this.props.onTypeChange(type);
    };

    var stateType;

    if ('type' in props) {
      stateType = props.type;
    } else {
      stateType = props.defaultType;
    }

    _this.state = {
      type: stateType,
      value: props.value || props.defaultValue || (0, _moment.default)()
    };
    return _this;
  } // from mix
  // to remove it, refactor to hooks


  _createClass(FullCalendar, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return this.props.visible || nextProps.visible;
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var locale = props.locale,
          prefixCls = props.prefixCls,
          fullscreen = props.fullscreen,
          showHeader = props.showHeader,
          headerComponent = props.headerComponent,
          headerRender = props.headerRender,
          disabledDate = props.disabledDate;
      var _this$state = this.state,
          value = _this$state.value,
          type = _this$state.type;
      var header;

      if (showHeader) {
        if (headerRender) {
          header = headerRender(value, type, locale);
        } else {
          var TheHeader = headerComponent || _CalendarHeader.default;
          header = _react.default.createElement(TheHeader, Object.assign({
            key: "calendar-header"
          }, props, {
            prefixCls: "".concat(prefixCls, "-full"),
            type: type,
            value: value,
            onTypeChange: this.setType,
            onValueChange: this.setValue
          }));
        }
      }

      var table = type === 'date' || type === 'week' ? _react.default.createElement(_DateTable.default, {
        dateRender: props.dateCellRender,
        contentRender: props.dateCellContentRender,
        locale: locale,
        prefixCls: prefixCls,
        onSelect: this.onSelect,
        value: value,
        disabledDate: disabledDate,
        weekOnly: type === 'week'
      }) : _react.default.createElement(_MonthTable.default, {
        cellRender: props.monthCellRender,
        contentRender: props.monthCellContentRender,
        locale: locale,
        onSelect: this.onMonthSelect,
        prefixCls: "".concat(prefixCls, "-month-panel"),
        value: value,
        disabledDate: disabledDate
      });
      var children = [header, _react.default.createElement("div", {
        key: "calendar-body",
        className: "".concat(prefixCls, "-calendar-body")
      }, table)];
      var className = ["".concat(prefixCls, "-full")];

      if (fullscreen) {
        className.push("".concat(prefixCls, "-fullscreen"));
      }

      return this.renderRoot({
        children: children,
        className: className.join(' ')
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, state) {
      var newState = {};
      var value = nextProps.value;

      if ('type' in nextProps) {
        newState = {
          type: nextProps.type
        };
      }

      if ('value' in nextProps) {
        newState.value = value || nextProps.defaultValue || (0, _CalendarMixin.getNowByCurrentStateValue)(state.value);
      }

      return newState;
    }
  }]);

  return FullCalendar;
}(_react.default.Component);

FullCalendar.defaultProps = _objectSpread({}, _CalendarMixin.calendarMixinDefaultProps, {}, _CommonMixin.defaultProp, {
  defaultType: 'date',
  fullscreen: false,
  showTypeSwitch: true,
  showHeader: true,
  onTypeChange: function onTypeChange() {}
});
(0, _reactLifecyclesCompat.polyfill)(FullCalendar);
var _default = FullCalendar;
exports.default = _default;