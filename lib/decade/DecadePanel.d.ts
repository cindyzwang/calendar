import React, { ReactNode } from 'react';
import { Moment } from 'moment';
interface DecadePanelProps {
    value?: Moment;
    defaultValue?: Moment;
    locale?: {
        [key: string]: any;
    };
    rootPrefixCls?: string;
    renderFooter: (key: string) => ReactNode;
    onSelect: (value: Moment) => void;
}
declare const DecadePanel: React.FC<DecadePanelProps>;
export default DecadePanel;
