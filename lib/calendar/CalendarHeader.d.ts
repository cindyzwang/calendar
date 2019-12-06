import React from 'react';
import { Moment } from 'moment';
import { MonthPanelProps } from '../month/MonthPanel';
import { CalendarTypeMode } from '../date/DateInput';
interface CalendarHeaderProps {
    prefixCls?: string;
    locale?: {
        [key: string]: any;
    };
    showTimePicker?: boolean;
    timePickerDisabled?: boolean;
    value?: Moment;
    mode?: CalendarTypeMode;
    onValueChange?: (value: Moment) => void;
    onPanelChange?: (value: Moment, type: CalendarTypeMode) => void;
    onMonthSelect?: (value: Moment) => void;
    enableNext?: boolean;
    enablePrev?: boolean;
    disabledMonth?: (value: Moment) => boolean;
    monthCellRender?: MonthPanelProps['cellRender'];
    monthCellContentRender?: MonthPanelProps['contentRender'];
    renderFooter?: MonthPanelProps['renderFooter'];
}
export default class CalendarHeader extends React.Component<CalendarHeaderProps> {
    static defaultProps: {
        enableNext: number;
        enablePrev: number;
        onPanelChange(): void;
        onValueChange(): void;
    };
    goMonth: (direction: any) => void;
    goYear: (direction: any) => void;
    showIf: (condition: any, el: any) => any;
    nextMonth: () => void;
    previousMonth: () => void;
    nextYear: () => void;
    previousYear: () => void;
    state: {
        yearPanelReferer: any;
    };
    onMonthSelect: (value: any) => void;
    onYearSelect: (value: any) => void;
    onDecadeSelect: (value: any) => void;
    changeYear: (direction: any) => void;
    monthYearElement: (showTimePicker: any) => JSX.Element;
    showMonthPanel: () => void;
    showYearPanel: (referer: any) => void;
    showDecadePanel: () => void;
    render(): JSX.Element;
}
export {};
