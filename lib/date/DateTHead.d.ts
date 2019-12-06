import React from 'react';
import { Moment } from 'moment';
export interface DateTHeadProps {
    prefixCls?: string;
    value?: Moment;
    showWeekNumber?: boolean;
}
declare const DateTHead: React.FC<DateTHeadProps>;
export default DateTHead;
