import React from 'react';
import { Moment } from 'moment';
import { CalendarTypeMode } from '../date/DateInput';
interface YearPanelProps {
    locale?: {
        [key: string]: any;
    };
    defaultValue?: Moment;
    value?: Moment;
    onSelect?: (value: Moment) => void;
    rootPrefixCls?: string;
    renderFooter?: (mode: CalendarTypeMode) => React.ReactNode;
    onDecadePanelShow?: () => void;
}
interface YearPanelState {
    value: Moment;
}
export default class YearPanel extends React.Component<YearPanelProps, YearPanelState> {
    constructor(props: YearPanelProps);
    goYear: (direction: any) => void;
    chooseYear: (year: any) => void;
    nextDecade: () => void;
    previousDecade: () => void;
    prefixCls: string;
    years(): any[];
    render(): JSX.Element;
}
export {};
