import React from 'react';
export interface OkButtonProps {
    prefixCls?: string;
    locale?: {
        [key: string]: any;
    };
    okDisabled?: boolean;
    onOk?: React.MouseEventHandler<HTMLAnchorElement>;
}
declare const OkButton: React.FC<OkButtonProps>;
export default OkButton;
