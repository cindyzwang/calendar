import React, { CSSProperties } from 'react';
import { Moment } from 'moment';
import { TodayButtonProps } from './TodayButton';
import { OkButtonProps } from './OkButton';
import { TimePickerButtonProps } from './TimePickerButton';
import { CalendarTypeMode } from '../date/DateInput';
export interface CalendarProps extends OkButtonProps, TimePickerButtonProps, TodayButtonProps {
    prefixCls?: string;
    className?: string;
    style?: CSSProperties;
    defaultValue?: Moment;
    value?: Moment;
    selectedValue?: Moment;
    defaultSelectedValue?: Moment;
    mode?: CalendarTypeMode;
    locale?: {
        [key: string]: any;
    };
    showDateInput?: boolean;
    showWeekNumber?: boolean;
    showToday?: boolean;
    showOk?: boolean;
    onSelect?: (value: Moment, cause?: {
        source: string;
    }) => void;
    timePicker?: JSX.Element;
    disabledTime?: (value: Moment) => boolean;
    renderFooter?: (mode: CalendarProps['mode']) => void;
}
export default class CalendarFooter extends React.Component<CalendarProps> {
    onSelect(value: any): void;
    getRootDOMNode: () => any;
    render(): any;
}
