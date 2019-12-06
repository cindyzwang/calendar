import { Component, ReactNode } from 'react';
import { Moment } from 'moment';
interface MonthTableProps {
    value?: Moment;
    onSelect?: (value: Moment) => void;
    prefixCls?: string;
    locale?: {
        [key: string]: any;
    };
    contentRender?: (value: Moment, locale: {
        [key: string]: any;
    }) => ReactNode;
    cellRender?: (value: Moment, locale: {
        [key: string]: any;
    }) => ReactNode;
    disabledDate?: (value: Moment) => boolean;
}
interface MonthTableState {
    value: Moment;
}
declare class MonthTable extends Component<MonthTableProps, MonthTableState> {
    constructor(props: any);
    static getDerivedStateFromProps(nextProps: any): {
        value: any;
    };
    setAndSelectValue(value: any): void;
    months(): any[];
    render(): JSX.Element;
}
export default MonthTable;
