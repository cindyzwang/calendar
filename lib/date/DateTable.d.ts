import React from 'react';
import { DateTHeadProps } from './DateTHead';
import { DateTBodyProps } from './DateTBody';
interface DateTableProps extends DateTHeadProps, DateTBodyProps {
    prefixCls?: string;
    locale?: {
        [key: string]: any;
    };
}
declare const DateTable: React.FC<DateTableProps>;
export default DateTable;
