import React from 'react';
export interface TimePickerButtonProps {
    prefixCls?: string;
    locale?: {
        [key: string]: any;
    };
    showTimePicker?: boolean;
    timePickerDisabled?: boolean;
    onOpenTimePicker?: React.MouseEventHandler<HTMLAnchorElement>;
    onCloseTimePicker?: React.MouseEventHandler<HTMLAnchorElement>;
}
declare const TimePickerButton: React.FC<TimePickerButtonProps>;
export default TimePickerButton;
