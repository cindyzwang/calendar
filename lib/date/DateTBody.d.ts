import React, { ReactNode } from 'react';
import { Moment } from 'moment';
export interface DateTBodyProps {
    contentRender?: (current: Moment, value: Moment) => ReactNode;
    value?: Moment;
    showWeekNumber?: boolean;
    dateRender?: (current: Moment, value: Moment) => ReactNode;
    selectedValue?: Moment | Moment[];
    prefixCls?: string;
    disabledDate?: (next: Moment, value: Moment) => boolean;
    hoverValue?: Moment[];
    onSelect?: any;
    onDayHover?: (current: Moment | null, value: Moment) => void;
    weekOnly?: boolean;
}
declare const DateTBody: React.FC<DateTBodyProps>;
export default DateTBody;
