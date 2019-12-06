import React, { ReactNode, CSSProperties } from 'react';
import { Moment } from 'moment';
export interface MonthPanelProps {
    value?: Moment;
    onSelect?: (value: Moment) => void;
    prefixCls?: string;
    rootPrefixCls?: string;
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
    renderFooter?: (key: string) => ReactNode;
    changeYear?: (direction: number) => void;
    style?: CSSProperties;
    onYearPanelShow: React.MouseEventHandler<HTMLAnchorElement>;
}
export interface MonthPanelState {
    value: Moment;
}
declare class MonthPanel extends React.Component<MonthPanelProps, MonthPanelState> {
    static defaultProps: {
        onChange: () => any;
        onSelect: () => any;
    };
    goYear: (direction: number) => void;
    nextYear: () => void;
    previousYear: () => void;
    prefixCls: string;
    constructor(props: any);
    static getDerivedStateFromProps(props: any): {};
    setAndSelectValue: (value: any) => void;
    setValue: (value: any) => void;
    render(): JSX.Element;
}
export default MonthPanel;
