"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _mapSelf = _interopRequireDefault(require("rc-util/lib/Children/mapSelf"));

var _MonthPanel = _interopRequireDefault(require("../month/MonthPanel"));

var _YearPanel = _interopRequireDefault(require("../year/YearPanel"));

var _DecadePanel = _interopRequireDefault(require("../decade/DecadePanel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CalendarHeader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CalendarHeader, _React$Component);

  function CalendarHeader() {
    var _this;

    _classCallCheck(this, CalendarHeader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CalendarHeader).apply(this, arguments));

    _this.goMonth = function (direction) {
      var next = _this.props.value.clone();

      next.add(direction, 'months');

      _this.props.onValueChange(next);
    };

    _this.goYear = function (direction) {
      var next = _this.props.value.clone();

      next.add(direction, 'years');

      _this.props.onValueChange(next);
    };

    _this.showIf = function (condition, el) {
      return condition ? el : null;
    };

    _this.nextMonth = function () {
      return _this.goMonth(1);
    };

    _this.previousMonth = function () {
      return _this.goMonth(-1);
    };

    _this.nextYear = function () {
      return _this.goYear(1);
    };

    _this.previousYear = function () {
      return _this.goYear(-1);
    };

    _this.state = {
      yearPanelReferer: null
    };

    _this.onMonthSelect = function (value) {
      _this.props.onPanelChange(value, 'date');

      if (_this.props.onMonthSelect) {
        _this.props.onMonthSelect(value);
      } else {
        _this.props.onValueChange(value);
      }
    };

    _this.onYearSelect = function (value) {
      var referer = _this.state.yearPanelReferer;

      _this.setState({
        yearPanelReferer: null
      });

      _this.props.onPanelChange(value, referer);

      _this.props.onValueChange(value);
    };

    _this.onDecadeSelect = function (value) {
      _this.props.onPanelChange(value, 'year');

      _this.props.onValueChange(value);
    };

    _this.changeYear = function (direction) {
      if (direction > 0) {
        _this.nextYear();
      } else {
        _this.previousYear();
      }
    };

    _this.monthYearElement = function (showTimePicker) {
      var _assertThisInitialize = _assertThisInitialized(_this),
          props = _assertThisInitialize.props;

      var prefixCls = props.prefixCls;
      var locale = props.locale;
      var value = props.value;
      var localeData = value.localeData();
      var monthBeforeYear = locale.monthBeforeYear;
      var selectClassName = "".concat(prefixCls, "-").concat(monthBeforeYear ? 'my-select' : 'ym-select');
      var timeClassName = showTimePicker ? " ".concat(prefixCls, "-time-status") : '';

      var year = _react.default.createElement("a", {
        className: "".concat(prefixCls, "-year-select").concat(timeClassName),
        role: "button",
        onClick: showTimePicker ? null : function () {
          return _this.showYearPanel('date');
        },
        title: showTimePicker ? null : locale.yearSelect
      }, value.format(locale.yearFormat));

      var month = _react.default.createElement("a", {
        className: "".concat(prefixCls, "-month-select").concat(timeClassName),
        role: "button",
        onClick: showTimePicker ? null : _this.showMonthPanel,
        title: showTimePicker ? null : locale.monthSelect
      }, locale.monthFormat ? value.format(locale.monthFormat) : localeData.monthsShort(value));

      var day;

      if (showTimePicker) {
        day = _react.default.createElement("a", {
          className: "".concat(prefixCls, "-day-select").concat(timeClassName),
          role: "button"
        }, value.format(locale.dayFormat));
      }

      var my = [];

      if (monthBeforeYear) {
        my = [month, day, year];
      } else {
        my = [year, month, day];
      }

      return _react.default.createElement("span", {
        className: selectClassName
      }, (0, _mapSelf.default)(my));
    };

    _this.showMonthPanel = function () {
      // null means that users' interaction doesn't change value
      _this.props.onPanelChange(null, 'month');
    };

    _this.showYearPanel = function (referer) {
      _this.setState({
        yearPanelReferer: referer
      });

      _this.props.onPanelChange(null, 'year');
    };

    _this.showDecadePanel = function () {
      _this.props.onPanelChange(null, 'decade');
    };

    return _this;
  }

  _createClass(CalendarHeader, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;
      var prefixCls = props.prefixCls,
          locale = props.locale,
          mode = props.mode,
          value = props.value,
          showTimePicker = props.showTimePicker,
          enableNext = props.enableNext,
          enablePrev = props.enablePrev,
          disabledMonth = props.disabledMonth,
          renderFooter = props.renderFooter;
      var panel = null;

      if (mode === 'month') {
        panel = _react.default.createElement(_MonthPanel.default, {
          locale: locale,
          value: value,
          rootPrefixCls: prefixCls,
          onSelect: this.onMonthSelect,
          onYearPanelShow: function onYearPanelShow() {
            return _this2.showYearPanel('month');
          },
          disabledDate: disabledMonth,
          cellRender: props.monthCellRender,
          contentRender: props.monthCellContentRender,
          renderFooter: renderFooter,
          changeYear: this.changeYear
        });
      }

      if (mode === 'year') {
        panel = _react.default.createElement(_YearPanel.default, {
          locale: locale,
          defaultValue: value,
          rootPrefixCls: prefixCls,
          onSelect: this.onYearSelect,
          onDecadePanelShow: this.showDecadePanel,
          renderFooter: renderFooter
        });
      }

      if (mode === 'decade') {
        panel = _react.default.createElement(_DecadePanel.default, {
          locale: locale,
          defaultValue: value,
          rootPrefixCls: prefixCls,
          onSelect: this.onDecadeSelect,
          renderFooter: renderFooter
        });
      }

      return _react.default.createElement("div", {
        className: "".concat(prefixCls, "-header")
      }, _react.default.createElement("div", {
        style: {
          position: 'relative'
        }
      }, this.showIf(enablePrev && !showTimePicker, _react.default.createElement("a", {
        className: "".concat(prefixCls, "-prev-year-btn"),
        role: "button",
        onClick: this.previousYear,
        title: locale.previousYear
      })), this.showIf(enablePrev && !showTimePicker, _react.default.createElement("a", {
        className: "".concat(prefixCls, "-prev-month-btn"),
        role: "button",
        onClick: this.previousMonth,
        title: locale.previousMonth
      })), this.monthYearElement(showTimePicker), this.showIf(enableNext && !showTimePicker, _react.default.createElement("a", {
        className: "".concat(prefixCls, "-next-month-btn"),
        onClick: this.nextMonth,
        title: locale.nextMonth
      })), this.showIf(enableNext && !showTimePicker, _react.default.createElement("a", {
        className: "".concat(prefixCls, "-next-year-btn"),
        onClick: this.nextYear,
        title: locale.nextYear
      }))), panel);
    }
  }]);

  return CalendarHeader;
}(_react.default.Component);

exports.default = CalendarHeader;
CalendarHeader.defaultProps = {
  enableNext: 1,
  enablePrev: 1,
  onPanelChange: function onPanelChange() {},
  onValueChange: function onValueChange() {}
};