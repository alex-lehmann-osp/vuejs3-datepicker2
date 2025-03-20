declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    selectedDate: {
        type: (StringConstructor | DateConstructor)[];
        default: null;
    };
    resetTypedDate: {
        type: (new () => Date)[];
        default: Date;
    };
    format: {
        type: (StringConstructor | FunctionConstructor)[];
    };
    translation: {
        type: ObjectConstructor;
    };
    inline: {
        type: BooleanConstructor;
    };
    id: {
        type: StringConstructor;
    };
    name: {
        type: StringConstructor;
    };
    openDate: {
        type: DateConstructor;
    };
    placeholder: {
        type: StringConstructor;
    };
    inputClass: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
    };
    clearButton: {
        type: BooleanConstructor;
    };
    clearButtonIcon: {
        type: StringConstructor;
    };
    calendarButton: {
        type: BooleanConstructor;
    };
    calendarButtonIcon: {
        type: StringConstructor;
    };
    calendarButtonIconContent: {
        type: StringConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
    required: {
        type: BooleanConstructor;
    };
    typeable: {
        type: BooleanConstructor;
    };
    addBootstrapClass: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    useUtc: {
        type: BooleanConstructor;
    };
    minimumView: {
        type: StringConstructor;
        default: string;
    };
    maximumView: {
        type: StringConstructor;
        default: string;
    };
    hideInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    fullMonthName: {
        type: BooleanConstructor;
        default: boolean;
    };
    iconColor: {
        default: string;
        type: StringConstructor;
    };
    iconHeight: {
        default: number;
        type: (StringConstructor | NumberConstructor)[];
    };
    iconWidth: {
        default: number;
        type: (StringConstructor | NumberConstructor)[];
    };
    theme: {
        default: string;
        type: StringConstructor;
    };
}>, {
    typedDate: import('vue').Ref<string | number | undefined, string | number | undefined>;
    computedInputClass: import('vue').ComputedRef<string | Record<string, any> | unknown[] | undefined>;
    formattedValue: import('vue').ComputedRef<string | number | Date | null>;
    showCalendar: () => void;
    parseTypedDate: (event: KeyboardEvent) => void;
    inputBlurred: () => void;
    inputRef: import('vue').Ref<null, null>;
    clearDate: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("show-calendar" | "typed-date" | "clear-date" | "close-calendar")[], "show-calendar" | "typed-date" | "clear-date" | "close-calendar", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    selectedDate: {
        type: (StringConstructor | DateConstructor)[];
        default: null;
    };
    resetTypedDate: {
        type: (new () => Date)[];
        default: Date;
    };
    format: {
        type: (StringConstructor | FunctionConstructor)[];
    };
    translation: {
        type: ObjectConstructor;
    };
    inline: {
        type: BooleanConstructor;
    };
    id: {
        type: StringConstructor;
    };
    name: {
        type: StringConstructor;
    };
    openDate: {
        type: DateConstructor;
    };
    placeholder: {
        type: StringConstructor;
    };
    inputClass: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
    };
    clearButton: {
        type: BooleanConstructor;
    };
    clearButtonIcon: {
        type: StringConstructor;
    };
    calendarButton: {
        type: BooleanConstructor;
    };
    calendarButtonIcon: {
        type: StringConstructor;
    };
    calendarButtonIconContent: {
        type: StringConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
    required: {
        type: BooleanConstructor;
    };
    typeable: {
        type: BooleanConstructor;
    };
    addBootstrapClass: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    useUtc: {
        type: BooleanConstructor;
    };
    minimumView: {
        type: StringConstructor;
        default: string;
    };
    maximumView: {
        type: StringConstructor;
        default: string;
    };
    hideInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    fullMonthName: {
        type: BooleanConstructor;
        default: boolean;
    };
    iconColor: {
        default: string;
        type: StringConstructor;
    };
    iconHeight: {
        default: number;
        type: (StringConstructor | NumberConstructor)[];
    };
    iconWidth: {
        default: number;
        type: (StringConstructor | NumberConstructor)[];
    };
    theme: {
        default: string;
        type: StringConstructor;
    };
}>> & Readonly<{
    "onShow-calendar"?: ((...args: any[]) => any) | undefined;
    "onTyped-date"?: ((...args: any[]) => any) | undefined;
    "onClear-date"?: ((...args: any[]) => any) | undefined;
    "onClose-calendar"?: ((...args: any[]) => any) | undefined;
}>, {
    inline: boolean;
    required: boolean;
    selectedDate: string | Date;
    resetTypedDate: Date;
    clearButton: boolean;
    calendarButton: boolean;
    disabled: boolean;
    typeable: boolean;
    addBootstrapClass: boolean;
    useUtc: boolean;
    minimumView: string;
    maximumView: string;
    hideInput: boolean;
    fullMonthName: boolean;
    iconColor: string;
    iconHeight: string | number;
    iconWidth: string | number;
    theme: string;
}, {}, {
    IconView: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        height: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        customClass: {
            type: StringConstructor;
            required: false;
            default: string;
        };
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        height: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        customClass: {
            type: StringConstructor;
            required: false;
            default: string;
        };
    }>> & Readonly<{}>, {
        customClass: string;
        height: string | number;
        width: string | number;
        color: string;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
