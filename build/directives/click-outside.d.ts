declare const ClickOutside: {
    instances: any[];
    beforeMount: typeof bind;
    updated: (el: any, binding: any) => void;
    unmounted: typeof unbind;
};
declare function bind(el: any, { value }: {
    value: any;
}): void;
declare function unbind(el: any): void;
export default ClickOutside;
