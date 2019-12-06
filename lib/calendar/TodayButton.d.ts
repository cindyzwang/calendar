import React from 'react';
import { Moment } from 'moment';
export interface TodayButtonProps {
    prefixCls?: string;
    locale?: {
        [key: string]: any;
    };
    value?: Moment;
    timePicker?: JSX.Element;
    disabled?: boolean;
    disabledDate?: (value: Moment) => boolean;
    onToday?: React.MouseEventHandler<HTMLAnchorElement>;
    text?: React.ReactNode;
}
declare const TodayButton: React.FC<TodayButtonProps>;
export default TodayButton;
