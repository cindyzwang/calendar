import React, { Component, ReactNode } from 'react';
import { Moment } from 'moment';
import { CalendarTypeMode } from '../date/DateInput';
declare function noop(): void;
interface CalendarHeaderProps {
    value?: Moment;
    onValueChange?: (value: Moment) => void;
    yearSelectOffset?: number;
    yearSelectTotal?: number;
    prefixCls?: string;
    onTypeChange?: (value: CalendarTypeMode) => void;
    type?: CalendarTypeMode;
    locale?: {
        [key: string]: any;
    };
    showTypeSwitch?: boolean;
    headerComponents?: ReactNode;
    /**
     * 这个做成了组件有点奇怪，应该用 render 的
     */
    Select?: React.ComponentClass<any, any> & {
        Option: React.ComponentClass<any, any>;
    };
}
declare class CalendarHeader extends Component<CalendarHeaderProps, {}> {
    static defaultProps: {
        yearSelectOffset: number;
        yearSelectTotal: number;
        onValueChange: typeof noop;
        onTypeChange: typeof noop;
    };
    onYearChange: (year: any) => void;
    onMonthChange: (month: number) => void;
    onWeekChange: (week: any) => void;
    yearSelectElement: (year: number) => JSX.Element;
    monthSelectElement: (month: any) => JSX.Element;
    weekSelectElement: (week: any) => JSX.Element;
    changeTypeToWeek: () => void;
    changeTypeToDate: () => void;
    changeTypeToMonth: () => void;
    render(): JSX.Element;
}
export default CalendarHeader;
