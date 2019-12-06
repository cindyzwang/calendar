"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

var _CalendarPart = _interopRequireDefault(require("./range-calendar/CalendarPart"));

var _TodayButton = _interopRequireDefault(require("./calendar/TodayButton"));

var _OkButton = _interopRequireDefault(require("./calendar/OkButton"));

var _TimePickerButton = _interopRequireDefault(require("./calendar/TimePickerButton"));

var _CommonMixin = require("./mixin/CommonMixin");

var _util = require("./util");

var _toTime = require("./util/toTime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function noop() {}

function isEmptyArray(arr) {
  return Array.isArray(arr) && (arr.length === 0 || arr.every(function (i) {
    return !i;
  }));
}

function isArraysEqual(a, b) {
  if (a === b) return true;

  if (a === null || typeof a === 'undefined' || b === null || typeof b === 'undefined') {
    return false;
  }

  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function getValueFromSelectedValue(selectedValue) {
  var _selectedValue = _slicedToArray(selectedValue, 2),
      start = _selectedValue[0],
      end = _selectedValue[1];

  if (end && (start === undefined || start === null)) {
    start = end.clone().subtract(1, 'month');
  }

  if (start && (end === undefined || end === null)) {
    end = start.clone().add(1, 'month');
  }

  return [start, end];
}

function normalizeAnchor(props, init) {
  var selectedValue = props.selectedValue || init && props.defaultSelectedValue;
  var value = props.value || init && props.defaultValue;
  var normalizedValue = value ? getValueFromSelectedValue(value) : getValueFromSelectedValue(selectedValue);
  return !isEmptyArray(normalizedValue) ? normalizedValue : init && [(0, _moment.default)(), (0, _moment.default)().add(1, 'months')];
}

function generateOptions(length, extraOptionGen) {
  var arr = extraOptionGen ? extraOptionGen().concat() : [];

  for (var value = 0; value < length; value += 1) {
    if (arr.indexOf(value) === -1) {
      arr.push(value);
    }
  }

  return arr;
}

function onInputSelect(direction, value, cause) {
  if (!value) {
    return;
  }

  var originalValue = this.state.selectedValue;
  var selectedValue = originalValue.concat();
  var index = direction === 'left' ? 0 : 1;
  selectedValue[index] = value;

  if (selectedValue[0] && this.compare(selectedValue[0], selectedValue[1]) > 0) {
    selectedValue[1 - index] = this.state.showTimePicker ? selectedValue[index] : undefined;
  }

  this.props.onInputSelect(selectedValue);
  this.fireSelectValueChange(selectedValue, null, cause || {
    source: 'dateInput'
  });
}

var RangeCalendar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RangeCalendar, _React$Component);

  function RangeCalendar(props) {
    var _this;

    _classCallCheck(this, RangeCalendar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RangeCalendar).call(this, props));

    _this.saveRoot = function (root) {
      _this.rootInstance = root;
    };

    _this.focus = function () {
      if (_this.rootInstance) {
        _this.rootInstance.focus();
      }
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

    _this.onDatePanelEnter = function () {
      if (_this.hasSelectedValue()) {
        _this.fireHoverValueChange(_this.state.selectedValue.concat());
      }
    };

    _this.onDatePanelLeave = function () {
      if (_this.hasSelectedValue()) {
        _this.fireHoverValueChange([]);
      }
    };

    _this.onSelect = function (value) {
      var type = _this.props.type;
      var _this$state = _this.state,
          selectedValue = _this$state.selectedValue,
          prevSelectedValue = _this$state.prevSelectedValue,
          firstSelectedValue = _this$state.firstSelectedValue;
      var nextSelectedValue;

      if (type === 'both') {
        if (!firstSelectedValue) {
          (0, _util.syncTime)(prevSelectedValue[0], value);
          nextSelectedValue = [value];
        } else if (_this.compare(firstSelectedValue, value) < 0) {
          (0, _util.syncTime)(prevSelectedValue[1], value);
          nextSelectedValue = [firstSelectedValue, value];
        } else {
          (0, _util.syncTime)(prevSelectedValue[0], value);
          (0, _util.syncTime)(prevSelectedValue[1], firstSelectedValue);
          nextSelectedValue = [value, firstSelectedValue];
        }
      } else if (type === 'start') {
        (0, _util.syncTime)(prevSelectedValue[0], value);
        var endValue = selectedValue[1];
        nextSelectedValue = endValue && _this.compare(endValue, value) > 0 ? [value, endValue] : [value];
      } else {
        // type === 'end'
        var startValue = selectedValue[0];

        if (startValue && _this.compare(startValue, value) <= 0) {
          (0, _util.syncTime)(prevSelectedValue[1], value);
          nextSelectedValue = [startValue, value];
        } else {
          (0, _util.syncTime)(prevSelectedValue[0], value);
          nextSelectedValue = [value];
        }
      }

      _this.fireSelectValueChange(nextSelectedValue);
    };

    _this.onKeyDown = function (event) {
      if (event.target.nodeName.toLowerCase() === 'input') {
        return;
      }

      var keyCode = event.keyCode;
      var ctrlKey = event.ctrlKey || event.metaKey;
      var _this$state2 = _this.state,
          selectedValue = _this$state2.selectedValue,
          hoverValue = _this$state2.hoverValue,
          firstSelectedValue = _this$state2.firstSelectedValue,
          value = _this$state2.value;
      var _this$props2 = _this.props,
          onKeyDown = _this$props2.onKeyDown,
          disabledDate = _this$props2.disabledDate; // Update last time of the picker

      var updateHoverPoint = function updateHoverPoint(func) {
        // Change hover to make focus in UI
        var currentHoverTime;
        var nextHoverTime;
        var nextHoverValue;

        if (!firstSelectedValue) {
          currentHoverTime = hoverValue[0] || selectedValue[0] || value[0] || (0, _moment.default)();
          nextHoverTime = func(currentHoverTime);
          nextHoverValue = [nextHoverTime];

          _this.fireHoverValueChange(nextHoverValue);
        } else if (hoverValue.length === 1) {
          currentHoverTime = hoverValue[0].clone();
          nextHoverTime = func(currentHoverTime);
          nextHoverValue = _this.onDayHover(nextHoverTime);
        } else {
          currentHoverTime = hoverValue[0].isSame(firstSelectedValue, 'day') ? hoverValue[1] : hoverValue[0];
          nextHoverTime = func(currentHoverTime);
          nextHoverValue = _this.onDayHover(nextHoverTime);
        } // Find origin hover time on value index


        if (nextHoverValue.length >= 2) {
          var miss = nextHoverValue.some(function (ht) {
            return !(0, _toTime.includesTime)(value, ht, 'month');
          });

          if (miss) {
            var newValue = nextHoverValue.slice().sort(function (t1, t2) {
              return t1.valueOf() - t2.valueOf();
            });

            if (newValue[0].isSame(newValue[1], 'month')) {
              newValue[1] = newValue[0].clone().add(1, 'month');
            }

            _this.fireValueChange(newValue);
          }
        } else if (nextHoverValue.length === 1) {
          // If only one value, let's keep the origin panel
          var oriValueIndex = value.findIndex(function (time) {
            return time.isSame(currentHoverTime, 'month');
          });
          if (oriValueIndex === -1) oriValueIndex = 0;

          if (value.every(function (time) {
            return !time.isSame(nextHoverTime, 'month');
          })) {
            var _newValue = value.slice();

            _newValue[oriValueIndex] = nextHoverTime.clone();

            _this.fireValueChange(_newValue);
          }
        }

        event.preventDefault();
        return nextHoverTime;
      };

      switch (keyCode) {
        case _KeyCode.default.DOWN:
          updateHoverPoint(function (time) {
            return (0, _toTime.goTime)(time, 1, 'weeks');
          });
          return;

        case _KeyCode.default.UP:
          updateHoverPoint(function (time) {
            return (0, _toTime.goTime)(time, -1, 'weeks');
          });
          return;

        case _KeyCode.default.LEFT:
          if (ctrlKey) {
            updateHoverPoint(function (time) {
              return (0, _toTime.goTime)(time, -1, 'years');
            });
          } else {
            updateHoverPoint(function (time) {
              return (0, _toTime.goTime)(time, -1, 'days');
            });
          }

          return;

        case _KeyCode.default.RIGHT:
          if (ctrlKey) {
            updateHoverPoint(function (time) {
              return (0, _toTime.goTime)(time, 1, 'years');
            });
          } else {
            updateHoverPoint(function (time) {
              return (0, _toTime.goTime)(time, 1, 'days');
            });
          }

          return;

        case _KeyCode.default.HOME:
          updateHoverPoint(function (time) {
            return (0, _toTime.goStartMonth)(time);
          });
          return;

        case _KeyCode.default.END:
          updateHoverPoint(function (time) {
            return (0, _toTime.goEndMonth)(time);
          });
          return;

        case _KeyCode.default.PAGE_DOWN:
          updateHoverPoint(function (time) {
            return (0, _toTime.goTime)(time, 1, 'month');
          });
          return;

        case _KeyCode.default.PAGE_UP:
          updateHoverPoint(function (time) {
            return (0, _toTime.goTime)(time, -1, 'month');
          });
          return;

        case _KeyCode.default.ENTER:
          {
            var lastValue;

            if (hoverValue.length === 0) {
              lastValue = updateHoverPoint(function (time) {
                return time;
              });
            } else if (hoverValue.length === 1) {
              // eslint-disable-next-line prefer-destructuring
              lastValue = hoverValue[0];
            } else {
              lastValue = hoverValue[0].isSame(firstSelectedValue, 'day') ? hoverValue[1] : hoverValue[0];
            }

            if (lastValue && (!disabledDate || !disabledDate(lastValue))) {
              _this.onSelect(lastValue);
            }

            event.preventDefault();
            return;
          }

        default:
          if (onKeyDown) {
            onKeyDown(event);
          }

      }
    };

    _this.onDayHover = function (value) {
      var hoverValue = [];
      var _this$state3 = _this.state,
          selectedValue = _this$state3.selectedValue,
          firstSelectedValue = _this$state3.firstSelectedValue;
      var type = _this.props.type;

      if (type === 'start' && selectedValue[1]) {
        hoverValue = _this.compare(value, selectedValue[1]) < 0 ? [value, selectedValue[1]] : [value];
      } else if (type === 'end' && selectedValue[0]) {
        hoverValue = _this.compare(value, selectedValue[0]) > 0 ? [selectedValue[0], value] : [];
      } else {
        if (!firstSelectedValue) {
          if (_this.state.hoverValue.length) {
            _this.setState({
              hoverValue: []
            });
          }

          return hoverValue;
        }

        hoverValue = _this.compare(value, firstSelectedValue) < 0 ? [value, firstSelectedValue] : [firstSelectedValue, value];
      }

      _this.fireHoverValueChange(hoverValue);

      return hoverValue;
    };

    _this.onToday = function () {
      var startValue = (0, _util.getTodayTime)(_this.state.value[0]);
      var endValue = startValue.clone().add(1, 'months');

      _this.setState({
        value: [startValue, endValue]
      });
    };

    _this.onOpenTimePicker = function () {
      _this.setState({
        showTimePicker: true
      });
    };

    _this.onCloseTimePicker = function () {
      _this.setState({
        showTimePicker: false
      });
    };

    _this.onOk = function () {
      var selectedValue = _this.state.selectedValue;

      if (_this.isAllowedDateAndTime(selectedValue)) {
        _this.props.onOk(_this.state.selectedValue);
      }
    };

    _this.onStartInputChange = function () {
      for (var _len = arguments.length, oargs = new Array(_len), _key = 0; _key < _len; _key++) {
        oargs[_key] = arguments[_key];
      }

      var args = ['left'].concat(oargs);
      return onInputSelect.apply(_assertThisInitialized(_this), args);
    };

    _this.onEndInputChange = function () {
      for (var _len2 = arguments.length, oargs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        oargs[_key2] = arguments[_key2];
      }

      var args = ['right'].concat(oargs);
      return onInputSelect.apply(_assertThisInitialized(_this), args);
    };

    _this.onStartInputSelect = function (value) {
      var args = ['left', value, {
        source: 'dateInputSelect'
      }];
      return onInputSelect.apply(_assertThisInitialized(_this), args);
    };

    _this.onEndInputSelect = function (value) {
      var args = ['right', value, {
        source: 'dateInputSelect'
      }];
      return onInputSelect.apply(_assertThisInitialized(_this), args);
    };

    _this.onStartValueChange = function (leftValue) {
      var value = _toConsumableArray(_this.state.value);

      value[0] = leftValue;
      return _this.fireValueChange(value);
    };

    _this.onEndValueChange = function (rightValue) {
      var value = _toConsumableArray(_this.state.value);

      value[1] = rightValue;
      return _this.fireValueChange(value);
    };

    _this.onStartPanelChange = function (value, mode) {
      var _assertThisInitialize = _assertThisInitialized(_this),
          props = _assertThisInitialize.props,
          state = _assertThisInitialize.state;

      var newMode = [mode, state.mode[1]];
      var newState = {
        panelTriggerSource: 'start'
      };

      if (!('mode' in props)) {
        newState.mode = newMode;
      }

      _this.setState(newState);

      var newValue = [value || state.value[0], state.value[1]];
      props.onPanelChange(newValue, newMode);
    };

    _this.onEndPanelChange = function (value, mode) {
      var _assertThisInitialize2 = _assertThisInitialized(_this),
          props = _assertThisInitialize2.props,
          state = _assertThisInitialize2.state;

      var newMode = [state.mode[0], mode];
      var newState = {
        panelTriggerSource: 'end'
      };

      if (!('mode' in props)) {
        newState.mode = newMode;
      }

      _this.setState(newState);

      var newValue = [state.value[0], value || state.value[1]];
      props.onPanelChange(newValue, newMode);
    };

    _this.getStartValue = function () {
      var _this$state4 = _this.state,
          selectedValue = _this$state4.selectedValue,
          showTimePicker = _this$state4.showTimePicker,
          value = _this$state4.value,
          mode = _this$state4.mode,
          panelTriggerSource = _this$state4.panelTriggerSource;
      var startValue = value[0]; // keep selectedTime when select date

      if (selectedValue[0] && _this.props.timePicker) {
        startValue = startValue.clone();
        (0, _util.syncTime)(selectedValue[0], startValue);
      }

      if (showTimePicker && selectedValue[0]) {
        // eslint-disable-next-line prefer-destructuring
        startValue = selectedValue[0];
      } // Adjust month if date not align


      if (panelTriggerSource === 'end' && mode[0] === 'date' && mode[1] === 'date' && startValue.isSame(value[1], 'month')) {
        startValue = startValue.clone().subtract(1, 'month');
      }

      return startValue;
    };

    _this.getEndValue = function () {
      var _this$state5 = _this.state,
          value = _this$state5.value,
          selectedValue = _this$state5.selectedValue,
          showTimePicker = _this$state5.showTimePicker,
          mode = _this$state5.mode,
          panelTriggerSource = _this$state5.panelTriggerSource;
      var endValue = value[1] ? value[1].clone() : value[0].clone().add(1, 'month'); // keep selectedTime when select date

      if (selectedValue[1] && _this.props.timePicker) {
        (0, _util.syncTime)(selectedValue[1], endValue);
      }

      if (showTimePicker) {
        endValue = selectedValue[1] ? selectedValue[1] : _this.getStartValue();
      } // Adjust month if date not align


      if (!showTimePicker && panelTriggerSource !== 'end' && mode[0] === 'date' && mode[1] === 'date' && endValue.isSame(value[0], 'month')) {
        endValue = endValue.clone().add(1, 'month');
      }

      return endValue;
    }; // get disabled hours for second picker


    _this.getEndDisableTime = function () {
      var _this$state6 = _this.state,
          selectedValue = _this$state6.selectedValue,
          value = _this$state6.value;
      var disabledTime = _this.props.disabledTime;
      var userSettingDisabledTime = disabledTime(selectedValue, 'end') || {
        disabledHours: undefined,
        disabledMinutes: undefined,
        disabledSeconds: undefined
      };
      var startValue = selectedValue && selectedValue[0] || value[0].clone(); // if startTime and endTime is same day..
      // the second time picker will not able to pick time before first time picker

      if (!selectedValue[1] || startValue.isSame(selectedValue[1], 'day')) {
        var hours = startValue.hour();
        var minutes = startValue.minute();
        var second = startValue.second();
        var _disabledHours = userSettingDisabledTime.disabledHours,
            _disabledMinutes = userSettingDisabledTime.disabledMinutes,
            _disabledSeconds = userSettingDisabledTime.disabledSeconds;
        var oldDisabledMinutes = _disabledMinutes ? _disabledMinutes() : [];
        var olddisabledSeconds = _disabledSeconds ? _disabledSeconds() : [];
        return {
          disabledHours: function disabledHours() {
            return generateOptions(hours, _disabledHours);
          },
          disabledMinutes: function disabledMinutes(hour) {
            if (hour === hours) {
              return generateOptions(minutes, _disabledMinutes);
            }

            return oldDisabledMinutes;
          },
          disabledSeconds: function disabledSeconds(hour, minute) {
            if (hour === hours && minute === minutes) {
              return generateOptions(second, _disabledSeconds);
            }

            return olddisabledSeconds;
          }
        };
      }

      return userSettingDisabledTime;
    };

    _this.isAllowedDateAndTime = function (selectedValue) {
      return (0, _util.isAllowedDate)(selectedValue[0], _this.props.disabledDate, _this.disabledStartTime) && (0, _util.isAllowedDate)(selectedValue[1], _this.props.disabledDate, _this.disabledEndTime);
    };

    _this.isMonthYearPanelShow = function (mode) {
      return ['month', 'year', 'decade'].indexOf(mode) > -1;
    };

    _this.hasSelectedValue = function () {
      var selectedValue = _this.state.selectedValue;
      return !!selectedValue[1] && !!selectedValue[0];
    };

    _this.compare = function (v1, v2) {
      if (_this.props.timePicker) {
        return v1.diff(v2);
      }

      return v1.diff(v2, 'days');
    };

    _this.fireSelectValueChange = function (selectedValue, direct, cause) {
      var timePicker = _this.props.timePicker;
      var prevSelectedValue = _this.state.prevSelectedValue;

      if (timePicker && timePicker.props.defaultValue) {
        var timePickerDefaultValue = timePicker.props.defaultValue;

        if (!prevSelectedValue[0] && selectedValue[0]) {
          (0, _util.syncTime)(timePickerDefaultValue[0], selectedValue[0]);
        }

        if (!prevSelectedValue[1] && selectedValue[1]) {
          (0, _util.syncTime)(timePickerDefaultValue[1], selectedValue[1]);
        }
      }

      if (!('selectedValue' in _this.props)) {
        _this.setState({
          selectedValue: selectedValue
        });
      } // 尚未选择过时间，直接输入的话


      if (!_this.state.selectedValue[0] || !_this.state.selectedValue[1]) {
        var startValue = selectedValue[0] || (0, _moment.default)();
        var endValue = selectedValue[1] || startValue.clone().add(1, 'months');

        _this.setState({
          selectedValue: selectedValue,
          value: getValueFromSelectedValue([startValue, endValue])
        });
      }

      if (selectedValue[0] && !selectedValue[1]) {
        _this.setState({
          firstSelectedValue: selectedValue[0]
        });

        _this.fireHoverValueChange(selectedValue.concat());
      }

      _this.props.onChange(selectedValue);

      if (direct || selectedValue[0] && selectedValue[1]) {
        _this.setState({
          prevSelectedValue: selectedValue,
          firstSelectedValue: null
        });

        _this.fireHoverValueChange([]);

        _this.props.onSelect(selectedValue, cause);
      }
    };

    _this.fireValueChange = function (value) {
      var _assertThisInitialize3 = _assertThisInitialized(_this),
          props = _assertThisInitialize3.props;

      if (!('value' in props)) {
        _this.setState({
          value: value
        });
      }

      props.onValueChange(value);
    };

    _this.fireHoverValueChange = function (hoverValue) {
      var _assertThisInitialize4 = _assertThisInitialized(_this),
          props = _assertThisInitialize4.props;

      if (!('hoverValue' in props)) {
        _this.setState({
          hoverValue: hoverValue
        });
      }

      props.onHoverChange(hoverValue);
    };

    _this.clear = function () {
      _this.fireSelectValueChange([], true);

      _this.props.onClear();
    };

    _this.disabledStartTime = function (time) {
      return _this.props.disabledTime(time, 'start');
    };

    _this.disabledEndTime = function (time) {
      return _this.props.disabledTime(time, 'end');
    };

    _this.disabledStartMonth = function (month) {
      var value = _this.state.value;
      return month.isAfter(value[1], 'month');
    };

    _this.disabledEndMonth = function (month) {
      var value = _this.state.value;
      return month.isBefore(value[0], 'month');
    };

    var selectedValue = props.selectedValue || props.defaultSelectedValue;
    var value = normalizeAnchor(props, 1);
    _this.state = {
      selectedValue: selectedValue,
      prevSelectedValue: selectedValue,
      firstSelectedValue: null,
      hoverValue: props.hoverValue || [],
      value: value,
      showTimePicker: false,
      mode: props.mode || ['date', 'date'],
      panelTriggerSource: ''
    };
    return _this;
  }

  _createClass(RangeCalendar, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return this.props.visible || nextProps.visible;
    }
  }, {
    key: "render",
    value: function render() {
      var _className, _classnames;

      var props = this.props,
          state = this.state;
      var prefixCls = props.prefixCls,
          dateInputPlaceholder = props.dateInputPlaceholder,
          seperator = props.seperator,
          timePicker = props.timePicker,
          showOk = props.showOk,
          locale = props.locale,
          showClear = props.showClear,
          showToday = props.showToday,
          type = props.type,
          clearIcon = props.clearIcon;
      var hoverValue = state.hoverValue,
          selectedValue = state.selectedValue,
          mode = state.mode,
          showTimePicker = state.showTimePicker;
      var className = (_className = {}, _defineProperty(_className, props.className, !!props.className), _defineProperty(_className, prefixCls, 1), _defineProperty(_className, "".concat(prefixCls, "-hidden"), !props.visible), _defineProperty(_className, "".concat(prefixCls, "-range"), 1), _defineProperty(_className, "".concat(prefixCls, "-show-time-picker"), showTimePicker), _defineProperty(_className, "".concat(prefixCls, "-week-number"), props.showWeekNumber), _className);
      var classes = (0, _classnames2.default)(className);
      var newProps = {
        selectedValue: state.selectedValue,
        onSelect: this.onSelect,
        onDayHover: type === 'start' && selectedValue[1] || type === 'end' && selectedValue[0] || !!hoverValue.length ? this.onDayHover : undefined
      };
      var placeholder1;
      var placeholder2;

      if (dateInputPlaceholder) {
        if (Array.isArray(dateInputPlaceholder)) {
          var _dateInputPlaceholder = _slicedToArray(dateInputPlaceholder, 2);

          placeholder1 = _dateInputPlaceholder[0];
          placeholder2 = _dateInputPlaceholder[1];
        } else {
          placeholder1 = dateInputPlaceholder;
          placeholder2 = dateInputPlaceholder;
        }
      }

      var showOkButton = showOk === true || showOk !== false && !!timePicker;
      var cls = (0, _classnames2.default)((_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-footer"), true), _defineProperty(_classnames, "".concat(prefixCls, "-range-bottom"), true), _defineProperty(_classnames, "".concat(prefixCls, "-footer-show-ok"), showOkButton), _classnames));
      var startValue = this.getStartValue();
      var endValue = this.getEndValue();
      var todayTime = (0, _util.getTodayTime)(startValue);
      var thisMonth = todayTime.month();
      var thisYear = todayTime.year();
      var isTodayInView = startValue.year() === thisYear && startValue.month() === thisMonth || endValue.year() === thisYear && endValue.month() === thisMonth;
      var nextMonthOfStart = startValue.clone().add(1, 'months');
      var isClosestMonths = nextMonthOfStart.year() === endValue.year() && nextMonthOfStart.month() === endValue.month();
      var extraFooter = props.renderFooter();
      return _react.default.createElement("div", {
        ref: this.saveRoot,
        className: classes,
        style: props.style,
        tabIndex: 0,
        onKeyDown: this.onKeyDown
      }, props.renderSidebar(), _react.default.createElement("div", {
        className: "".concat(prefixCls, "-panel")
      }, showClear && selectedValue[0] && selectedValue[1] ? _react.default.createElement("a", {
        role: "button",
        title: locale.clear,
        onClick: this.clear
      }, clearIcon || _react.default.createElement("span", {
        className: "".concat(prefixCls, "-clear-btn")
      })) : null, _react.default.createElement("div", {
        className: "".concat(prefixCls, "-date-panel"),
        onMouseLeave: type !== 'both' ? this.onDatePanelLeave : undefined,
        onMouseEnter: type !== 'both' ? this.onDatePanelEnter : undefined
      }, _react.default.createElement(_CalendarPart.default, Object.assign({}, props, newProps, {
        hoverValue: hoverValue,
        direction: "left",
        disabledTime: this.disabledStartTime,
        disabledMonth: this.disabledStartMonth,
        format: this.getFormat(),
        value: startValue,
        mode: mode[0],
        placeholder: placeholder1,
        onInputChange: this.onStartInputChange,
        onInputSelect: this.onStartInputSelect,
        onValueChange: this.onStartValueChange,
        onPanelChange: this.onStartPanelChange,
        showDateInput: this.props.showDateInput,
        timePicker: timePicker,
        showTimePicker: showTimePicker || mode[0] === 'time',
        enablePrev: true,
        enableNext: !isClosestMonths || this.isMonthYearPanelShow(mode[1]),
        clearIcon: clearIcon
      })), _react.default.createElement("span", {
        className: "".concat(prefixCls, "-range-middle")
      }, seperator), _react.default.createElement(_CalendarPart.default, Object.assign({}, props, newProps, {
        hoverValue: hoverValue,
        direction: "right",
        format: this.getFormat(),
        timePickerDisabledTime: this.getEndDisableTime(),
        placeholder: placeholder2,
        value: endValue,
        mode: mode[1],
        onInputChange: this.onEndInputChange,
        onInputSelect: this.onEndInputSelect,
        onValueChange: this.onEndValueChange,
        onPanelChange: this.onEndPanelChange,
        showDateInput: this.props.showDateInput,
        timePicker: timePicker,
        showTimePicker: showTimePicker || mode[1] === 'time',
        disabledTime: this.disabledEndTime,
        disabledMonth: this.disabledEndMonth,
        enablePrev: !isClosestMonths || this.isMonthYearPanelShow(mode[0]),
        enableNext: true,
        clearIcon: clearIcon
      }))), _react.default.createElement("div", {
        className: cls
      }, showToday || props.timePicker || showOkButton || extraFooter ? _react.default.createElement("div", {
        className: "".concat(prefixCls, "-footer-btn")
      }, extraFooter, showToday ? _react.default.createElement(_TodayButton.default, Object.assign({}, props, {
        disabled: isTodayInView,
        value: state.value[0],
        onToday: this.onToday,
        text: locale.backToToday
      })) : null, props.timePicker ? _react.default.createElement(_TimePickerButton.default, Object.assign({}, props, {
        showTimePicker: showTimePicker || mode[0] === 'time' && mode[1] === 'time',
        onOpenTimePicker: this.onOpenTimePicker,
        onCloseTimePicker: this.onCloseTimePicker,
        timePickerDisabled: !this.hasSelectedValue() || !!hoverValue.length
      })) : null, showOkButton ? _react.default.createElement(_OkButton.default, Object.assign({}, props, {
        onOk: this.onOk,
        okDisabled: !this.isAllowedDateAndTime(selectedValue) || !this.hasSelectedValue() || !!hoverValue.length
      })) : null) : null)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, state) {
      var newState = {};

      if ('value' in nextProps) {
        newState.value = normalizeAnchor(nextProps, 0);
      }

      if ('hoverValue' in nextProps && !isArraysEqual(state.hoverValue, nextProps.hoverValue)) {
        newState.hoverValue = nextProps.hoverValue;
      }

      if ('selectedValue' in nextProps) {
        newState.selectedValue = nextProps.selectedValue;
        newState.prevSelectedValue = nextProps.selectedValue;
      }

      if ('mode' in nextProps && !isArraysEqual(state.mode, nextProps.mode)) {
        newState.mode = nextProps.mode;
      }

      return newState;
    }
  }]);

  return RangeCalendar;
}(_react.default.Component);

RangeCalendar.defaultProps = _objectSpread({}, _CommonMixin.defaultProp, {
  type: 'both',
  seperator: '~',
  defaultSelectedValue: [],
  onValueChange: noop,
  onHoverChange: noop,
  onPanelChange: noop,
  disabledTime: noop,
  onInputSelect: noop,
  showToday: true,
  showDateInput: true
});
(0, _reactLifecyclesCompat.polyfill)(RangeCalendar);
var _default = RangeCalendar;
exports.default = _default;