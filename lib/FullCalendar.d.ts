import React, { ReactNode } from 'react';
import moment, { Moment } from 'moment';
import { CalendarProps, CalendarState } from './Calendar';
import { CalendarTypeMode } from './date/DateInput';
export interface FullCalendarProps extends CalendarProps {
    fullscreen?: boolean;
    showHeader?: boolean;
    /**
     * 这个做成了组件有点奇怪，应该用 render 的
     */
    headerComponent?: React.ComponentClass<any, any>;
    type?: CalendarTypeMode;
    defaultType?: FullCalendarProps['type'];
    headerRender?: (value: Moment, type: FullCalendarProps['type'], locale: CalendarProps['locale']) => void;
    onTypeChange?: (type: FullCalendarProps['type']) => void;
    dateCellRender?: (value: Moment) => ReactNode;
    dateCellContentRender?: (value: Moment) => ReactNode;
}
export interface FullCalendarState extends CalendarState {
    type?: FullCalendarProps['type'];
    selectedValue?: Moment;
}
declare class FullCalendar extends React.Component<FullCalendarProps, FullCalendarState> {
    static defaultProps: {
        defaultType: string;
        fullscreen: boolean;
        showTypeSwitch: boolean;
        showHeader: boolean;
        onTypeChange(): void;
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
    constructor(props: FullCalendarProps);
    shouldComponentUpdate(nextProps: any): any;
    onSelect: (value: any, cause: any) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLDivElement>) => void;
    renderRoot: (newProps: any) => JSX.Element;
    setSelectedValue: (selectedValue: any, cause?: any) => void;
    setValue: (value: moment.Moment) => void;
    isAllowedDate: (value: any) => boolean;
    getFormat: () => string | string[];
    focusElement: HTMLElement;
    rootInstance: HTMLElement;
    focus: () => void;
    saveFocusElement: (focusElement: HTMLElement) => void;
    saveRoot: (root: any) => void;
    onMonthSelect: (value: any) => void;
    static getDerivedStateFromProps(nextProps: FullCalendarProps, state: FullCalendarState): FullCalendarState;
    setType: (type: any) => void;
    render(): JSX.Element;
}
export default FullCalendar;
