import React from 'react';
import { Moment } from 'moment';
export declare type CalendarTypeMode = 'time' | 'week' | 'date' | 'month' | 'year' | 'decade';
export interface DateInputProps {
    prefixCls?: string;
    value?: Moment;
    format?: string | string[];
    onClear?: (value: any) => void;
    disabledDate?: (value: Moment) => boolean;
    onChange?: (value: Moment) => void;
    selectedValue?: Moment;
    onSelect?: (value: Moment) => void;
    mode?: CalendarTypeMode;
    locale?: {
        [key: string]: any;
    };
    placeholder?: string;
    disabled?: boolean;
    showClear?: boolean;
    clearIcon?: React.ReactNode;
    inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
}
declare class DateInput extends React.Component<DateInputProps, {
    hasFocus: boolean;
    invalid: boolean;
    str: string;
}> {
    constructor(props: any);
    componentDidUpdate(): void;
    onClear: () => void;
    onInputChange: (event: any) => void;
    onFocus: () => void;
    onBlur: () => void;
    onKeyDown: (event: any) => void;
    static getDerivedStateFromProps(nextProps: any, state: any): {};
    static getInstance(): any;
    getRootDOMNode: () => any;
    focus: () => void;
    saveDateInput: (dateInput: any) => void;
    render(): JSX.Element;
}
export default DateInput;
