import PropTypes from 'prop-types';
declare function noop(): void;
export declare const propType: {
    className: PropTypes.Requireable<string>;
    locale: PropTypes.Requireable<object>;
    style: PropTypes.Requireable<object>;
    visible: PropTypes.Requireable<boolean>;
    onSelect: PropTypes.Requireable<(...args: any[]) => any>;
    prefixCls: PropTypes.Requireable<string>;
    onChange: PropTypes.Requireable<(...args: any[]) => any>;
    onOk: PropTypes.Requireable<(...args: any[]) => any>;
};
export declare const defaultProp: {
    locale: any;
    style: {};
    visible: boolean;
    prefixCls: string;
    className: string;
    onSelect: typeof noop;
    onChange: typeof noop;
    onClear: typeof noop;
    renderFooter(): any;
    renderSidebar(): any;
};
export {};
