import React, { CSSProperties } from 'react';
import { Moment } from 'moment';
declare function noop(): void;
export interface PickerProps {
    animation?: string;
    disabled?: boolean;
    transitionName?: string;
    onChange?: (value: Moment) => void;
    onOpenChange?: (open: boolean) => void;
    getCalendarContainer?: (ref: HTMLElement) => HTMLElement;
    calendar?: JSX.Element;
    style?: CSSProperties;
    open?: boolean;
    defaultOpen?: boolean;
    prefixCls?: string;
    placement?: string;
    value?: Moment | Moment[];
    defaultValue?: Moment | Moment[];
    align?: any;
    dateRender?: (value: Moment) => React.ReactNode;
    onBlur?: () => void;
    dropdownClassName?: string;
    children?: any;
}
export interface PickerState {
    open?: boolean;
    value?: Moment | Moment[];
}
declare class Picker extends React.Component<PickerProps, PickerState> {
    static defaultProps: {
        prefixCls: string;
        style: {};
        align: {};
        placement: string;
        defaultOpen: boolean;
        onChange: typeof noop;
        onOpenChange: typeof noop;
        onBlur: typeof noop;
    };
    saveCalendarRef: any;
    constructor(props: any);
    focusTimeout: number | any;
    componentDidUpdate(_: any, prevState: any): void;
    componentWillUnmount(): void;
    onCalendarKeyDown: (event: any) => void;
    onCalendarSelect: (value: any, cause?: {
        source: string;
    }) => void;
    onKeyDown: (event: any) => void;
    onCalendarOk: () => void;
    onCalendarClear: () => void;
    onCalendarBlur: () => void;
    onVisibleChange: (open: any) => void;
    static getDerivedStateFromProps(nextProps: any): PickerState;
    getCalendarElement: () => React.FunctionComponentElement<any>;
    setOpen: (open: boolean, callback?: () => void) => void;
    open: (callback?: () => void) => void;
    close: (callback: any) => void;
    focus: () => void;
    calendarInstance?: HTMLElement;
    focusCalendar: () => void;
    render(): JSX.Element;
}
export default Picker;
