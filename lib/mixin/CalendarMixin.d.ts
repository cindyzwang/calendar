import PropTypes from 'prop-types';
declare function noop(): void;
export declare function getNowByCurrentStateValue(value: any): any;
export declare const calendarMixinPropTypes: {
    value: PropTypes.Requireable<object>;
    defaultValue: PropTypes.Requireable<object>;
    onKeyDown: PropTypes.Requireable<(...args: any[]) => any>;
};
export declare const calendarMixinDefaultProps: {
    onKeyDown: typeof noop;
};
export {};
