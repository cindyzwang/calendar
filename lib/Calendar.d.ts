import React, { CSSProperties } from 'react';
import moment, { Moment } from 'moment';
import { CalendarTypeMode, DateInputProps } from './date/DateInput';
declare function noop(): void;
export interface CalendarProps {
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
    onSelect?: (value: Moment, cause: {
        source: string;
    }) => void;
    visible?: boolean;
    onOk?: (value: Moment) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
    timePicker?: JSX.Element;
    format?: string | string[];
    dateInputPlaceholder?: string;
    onClear?: () => void;
    onChange?: (value: Moment) => void;
    onPanelChange?: (value: Moment, mode: CalendarTypeMode) => void;
    disabledDate?: (value: Moment) => boolean;
    disabledTime?: () => boolean;
    dateRender?: () => boolean;
    renderFooter?: () => React.ReactNode;
    renderSidebar?: () => React.ReactNode;
    clearIcon?: React.ReactNode;
    focusablePanel?: boolean;
    inputMode?: DateInputProps['inputMode'];
    onBlur?: (e: React.MouseEvent<HTMLDivElement>) => void;
    monthCellRender?: () => React.ReactNode;
    monthCellContentRender?: () => React.ReactNode;
}
export interface CalendarState {
    value?: Moment;
    mode?: CalendarTypeMode;
    selectedValue?: Moment;
}
declare class Calendar extends React.Component<CalendarProps, CalendarState> {
    static defaultProps: {
        showToday: boolean;
        showDateInput: boolean;
        timePicker: any;
        onOk: typeof noop;
        onPanelChange: typeof noop;
        focusablePanel: boolean;
        locale: any;
        style: {};
        visible: boolean;
        prefixCls: string;
        className: string;
        onSelect: () => void;
        onChange: () => void;
        onClear: () => void;
        renderFooter(): any;
        renderSidebar(): any;
        onKeyDown: () => void;
    };
    focusElement: HTMLElement;
    saveFocusElement: (focusElement: HTMLElement) => void;
    focus: () => void;
    rootInstance: HTMLDivElement;
    setValue: (value: moment.Moment) => void;
    onSelect: (value: any, cause?: any) => void;
    setSelectedValue: (selectedValue: any, cause?: any) => void;
    isAllowedDate: (value: any) => boolean;
    getFormat: () => string | string[];
    saveRoot: (root: any) => void;
    renderRoot: (newProps: any) => JSX.Element;
    constructor(props: any);
    componentDidMount(): void;
    onPanelChange: (value: any, mode: any) => void;
    onKeyDown: (event: any) => number;
    onClear: () => void;
    onOk: () => void;
    onDateInputChange: (value: any) => void;
    onDateInputSelect: (value: any) => void;
    onDateTableSelect: (value: any) => void;
    onToday: () => void;
    onBlur: (event: any) => void;
    static getDerivedStateFromProps(nextProps: CalendarProps, state: CalendarState): CalendarState;
    getRootDOMNode: () => any;
    openTimePicker: () => void;
    closeTimePicker: () => void;
    goTime: (direction: any, unit: any) => void;
    render(): JSX.Element;
}
export default Calendar;
