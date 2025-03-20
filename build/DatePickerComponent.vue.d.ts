declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor | (new () => Date))[];
    };
    value: {
        type: (StringConstructor | NumberConstructor | (new () => Date))[];
    };
    format: {
        type: (StringConstructor | FunctionConstructor)[];
        default: string;
    };
    language: {
        type: StringConstructor;
        default: string;
    };
    openDate: {
        validator: (val: Date) => boolean;
        type: new () => Date;
        default: Date;
    };
    minimumView: {
        type: StringConstructor;
        default: string;
    };
    maximumView: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
    };
    id: {
        type: StringConstructor;
    };
    dayCellContent: {
        type: FunctionConstructor;
    };
    fullMonthName: {
        type: BooleanConstructor;
    };
    disabledDates: {
        type: ObjectConstructor;
    };
    highlighted: {
        type: ObjectConstructor;
    };
    placeholder: {
        type: StringConstructor;
    };
    inline: {
        type: BooleanConstructor;
    };
    calendarClass: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
    };
    inputClass: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
    };
    wrapperClass: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
    };
    mondayFirst: {
        type: BooleanConstructor;
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
    addBootstrapClass: {
        type: BooleanConstructor;
    };
    initialView: {
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
    useUtc: {
        type: BooleanConstructor;
    };
    hideInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    preventDisableDateSelection: {
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
    pageTimestamp: import('vue').Ref<number, number>;
    selectedDate: Date;
    showDayView: import('vue').Ref<boolean, boolean>;
    showMonthView: import('vue').Ref<boolean, boolean>;
    showYearView: import('vue').Ref<boolean, boolean>;
    calendarHeight: import('vue').Ref<number, number>;
    resetTypedDate: import('vue').Ref<Date, Date>;
    pageDate: import('vue').ComputedRef<Date>;
    translation: import('vue').ComputedRef<any>;
    calendarStyle: import('vue').ComputedRef<{
        position: string | undefined;
    }>;
    isOpen: import('vue').ComputedRef<boolean>;
    isInline: import('vue').ComputedRef<boolean>;
    isRtl: import('vue').ComputedRef<any>;
    setTypedDate: (date: {
        getTime: () => string | number | Date;
    }) => void;
    handleChangedMonthFromDayPicker: (date: string | number | Date | undefined) => void;
    selectYear: (year: {
        timestamp: any;
    }) => void;
    selectMonth: (month: {
        timestamp: any;
    }) => void;
    selectDisabledDate: (date: any) => void;
    clearDate: () => void;
    showCalendar: () => boolean | void;
    close: (emitEvent?: boolean) => void;
    allowedToShowView: (view: string) => boolean;
    showYearCalendar: () => boolean;
    showMonthCalendar: () => boolean;
    setPageDate: (date?: string | number | Date | undefined) => void;
    selectDate: (date: {
        timestamp: string | number | Date;
    }) => void;
    closeOnClickOutside: () => void;
    showDayCalendar: () => boolean;
    computedInitialView: import('vue').ComputedRef<string>;
    setDate: (date: Date, value: any, useUtc?: boolean) => number;
    setDate1: (timestamp: string | number | Date) => void;
    setValue: (date?: Date | string | number) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("input" | "changed-month" | "selected-disabled" | "selected" | "changed-year" | "cleared" | "update:modelValue" | "closed" | "changed-day")[], "input" | "changed-month" | "selected-disabled" | "selected" | "changed-year" | "cleared" | "update:modelValue" | "closed" | "changed-day", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor | (new () => Date))[];
    };
    value: {
        type: (StringConstructor | NumberConstructor | (new () => Date))[];
    };
    format: {
        type: (StringConstructor | FunctionConstructor)[];
        default: string;
    };
    language: {
        type: StringConstructor;
        default: string;
    };
    openDate: {
        validator: (val: Date) => boolean;
        type: new () => Date;
        default: Date;
    };
    minimumView: {
        type: StringConstructor;
        default: string;
    };
    maximumView: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
    };
    id: {
        type: StringConstructor;
    };
    dayCellContent: {
        type: FunctionConstructor;
    };
    fullMonthName: {
        type: BooleanConstructor;
    };
    disabledDates: {
        type: ObjectConstructor;
    };
    highlighted: {
        type: ObjectConstructor;
    };
    placeholder: {
        type: StringConstructor;
    };
    inline: {
        type: BooleanConstructor;
    };
    calendarClass: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
    };
    inputClass: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
    };
    wrapperClass: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
    };
    mondayFirst: {
        type: BooleanConstructor;
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
    addBootstrapClass: {
        type: BooleanConstructor;
    };
    initialView: {
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
    useUtc: {
        type: BooleanConstructor;
    };
    hideInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    preventDisableDateSelection: {
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
    onInput?: ((...args: any[]) => any) | undefined;
    "onChanged-month"?: ((...args: any[]) => any) | undefined;
    "onSelected-disabled"?: ((...args: any[]) => any) | undefined;
    onSelected?: ((...args: any[]) => any) | undefined;
    "onChanged-year"?: ((...args: any[]) => any) | undefined;
    onCleared?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onClosed?: ((...args: any[]) => any) | undefined;
    "onChanged-day"?: ((...args: any[]) => any) | undefined;
}>, {
    inline: boolean;
    language: string;
    required: boolean;
    format: string | Function;
    openDate: Date;
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
    mondayFirst: boolean;
    preventDisableDateSelection: boolean;
}, {}, {
    DateInput: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
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
    PickerDay: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        showDayView: {
            type: BooleanConstructor;
        };
        selectedDate: {
            type: (StringConstructor | DateConstructor)[];
            required: false;
            default: null;
        };
        pageDate: {
            type: import('vue').PropType<Date>;
            default: Date;
        };
        fullMonthName: {
            type: BooleanConstructor;
        };
        allowedToShowView: {
            type: FunctionConstructor;
            required: true;
        };
        dayCellContent: {
            type: FunctionConstructor;
            default: (day: {
                date: Date;
            }) => Date;
        };
        disabledDates: {
            type: ObjectConstructor;
        };
        highlighted: {
            type: ObjectConstructor;
        };
        calendarClass: {
            type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        };
        calendarStyle: {
            type: ObjectConstructor;
        };
        translation: {
            type: ObjectConstructor;
        };
        isRtl: {
            type: BooleanConstructor;
        };
        mondayFirst: {
            type: BooleanConstructor;
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
        preventDisableDateSelection: {
            type: BooleanConstructor;
            default: boolean;
        };
        theme: {
            default: string;
            type: StringConstructor;
        };
    }>, {
        isDefined: (prop: any) => any;
        showMonthCalendar: () => void;
        daysOfWeek: import('vue').ComputedRef<any>;
        blankDays: import('vue').ComputedRef<any>;
        isYmd: import('vue').ComputedRef<boolean>;
        days: import('vue').ComputedRef<import('./PickerDay.vue').IDays[]>;
        currMonthName: import('vue').ComputedRef<number>;
        currYearName: import('vue').ComputedRef<string>;
        isLeftNavDisabled: import('vue').ComputedRef<boolean>;
        isRightNavDisabled: import('vue').ComputedRef<boolean>;
        selectDate: (date: {
            isDisabled: any;
        }) => void;
        previousMonth: () => void;
        nextMonth: () => void;
        dayClasses: (day: {
            isSelected: any;
            isDisabled: any;
            isHighlighted: any;
            isToday: any;
            isWeekend: any;
            isSaturday: any;
            isSunday: any;
            isHighlightStart: any;
            isHighlightEnd: any;
        }) => any;
        monthName: import('vue').ComputedRef<number>;
        getDayName: import('vue').ComputedRef<number | null>;
        getDisplayDate: import('vue').ComputedRef<number | null>;
        showYearCalendar: () => void;
        isNextMonthDisabled: () => boolean;
        ifDifferentViews: import('vue').ComputedRef<boolean>;
        isSelectedDate: (dObj: Date) => boolean;
        isDisabledDate: (date: number | Date) => boolean;
        isHighlightedDate: (date: number | Date) => boolean;
        isHighlightStart: (date: Date) => boolean;
        isHighlightEnd: (date: Date) => boolean;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("show-year-calendar" | "changed-month" | "show-month-calendar" | "selected-disabled" | "select-date")[], "show-year-calendar" | "changed-month" | "show-month-calendar" | "selected-disabled" | "select-date", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        showDayView: {
            type: BooleanConstructor;
        };
        selectedDate: {
            type: (StringConstructor | DateConstructor)[];
            required: false;
            default: null;
        };
        pageDate: {
            type: import('vue').PropType<Date>;
            default: Date;
        };
        fullMonthName: {
            type: BooleanConstructor;
        };
        allowedToShowView: {
            type: FunctionConstructor;
            required: true;
        };
        dayCellContent: {
            type: FunctionConstructor;
            default: (day: {
                date: Date;
            }) => Date;
        };
        disabledDates: {
            type: ObjectConstructor;
        };
        highlighted: {
            type: ObjectConstructor;
        };
        calendarClass: {
            type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        };
        calendarStyle: {
            type: ObjectConstructor;
        };
        translation: {
            type: ObjectConstructor;
        };
        isRtl: {
            type: BooleanConstructor;
        };
        mondayFirst: {
            type: BooleanConstructor;
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
        preventDisableDateSelection: {
            type: BooleanConstructor;
            default: boolean;
        };
        theme: {
            default: string;
            type: StringConstructor;
        };
    }>> & Readonly<{
        "onShow-year-calendar"?: ((...args: any[]) => any) | undefined;
        "onChanged-month"?: ((...args: any[]) => any) | undefined;
        "onShow-month-calendar"?: ((...args: any[]) => any) | undefined;
        "onSelected-disabled"?: ((...args: any[]) => any) | undefined;
        "onSelect-date"?: ((...args: any[]) => any) | undefined;
    }>, {
        selectedDate: string | Date;
        useUtc: boolean;
        minimumView: string;
        maximumView: string;
        fullMonthName: boolean;
        theme: string;
        showDayView: boolean;
        pageDate: Date;
        dayCellContent: Function;
        isRtl: boolean;
        mondayFirst: boolean;
        preventDisableDateSelection: boolean;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    PickerMonth: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        showMonthView: {
            type: BooleanConstructor;
        };
        selectedDate: {
            type: (StringConstructor | DateConstructor)[];
            required: false;
            default: null;
        };
        pageDate: {
            type: import('vue').PropType<Date>;
            default: Date;
        };
        disabledDates: {
            type: ObjectConstructor;
        };
        calendarClass: {
            type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        };
        calendarStyle: {
            type: ObjectConstructor;
        };
        translation: {
            type: ObjectConstructor;
        };
        isRtl: {
            type: BooleanConstructor;
        };
        allowedToShowView: {
            type: FunctionConstructor;
            required: true;
        };
        useUtc: {
            type: BooleanConstructor;
        };
        fullMonthName: {
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
        theme: {
            default: string;
            type: StringConstructor;
        };
    }>, {
        isRightNavDisabled: import('vue').ComputedRef<boolean>;
        isLeftNavDisabled: import('vue').ComputedRef<boolean>;
        pageYearName: import('vue').ComputedRef<string>;
        months: import('vue').ComputedRef<import('./PickerMonth.vue').IMonths[]>;
        selectMonth: (month: {
            isDisabled: boolean;
        }) => void;
        previousYear: () => void;
        nextYear: () => void;
        currYearName: import('vue').ComputedRef<string>;
        getDisplayDate: import('vue').ComputedRef<number | null>;
        monthName: import('vue').ComputedRef<number>;
        showYearCalendar: () => void;
        getDayName: import('vue').ComputedRef<number | null>;
        currMonthName: import('vue').ComputedRef<number>;
        ifDifferentViews: import('vue').ComputedRef<boolean>;
        isSelectedMonth: (date: Date) => boolean;
        isDisabledMonth: (date: Date) => boolean;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        showMonthView: {
            type: BooleanConstructor;
        };
        selectedDate: {
            type: (StringConstructor | DateConstructor)[];
            required: false;
            default: null;
        };
        pageDate: {
            type: import('vue').PropType<Date>;
            default: Date;
        };
        disabledDates: {
            type: ObjectConstructor;
        };
        calendarClass: {
            type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        };
        calendarStyle: {
            type: ObjectConstructor;
        };
        translation: {
            type: ObjectConstructor;
        };
        isRtl: {
            type: BooleanConstructor;
        };
        allowedToShowView: {
            type: FunctionConstructor;
            required: true;
        };
        useUtc: {
            type: BooleanConstructor;
        };
        fullMonthName: {
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
        theme: {
            default: string;
            type: StringConstructor;
        };
    }>> & Readonly<{}>, {
        selectedDate: string | Date;
        useUtc: boolean;
        minimumView: string;
        maximumView: string;
        fullMonthName: boolean;
        theme: string;
        pageDate: Date;
        isRtl: boolean;
        showMonthView: boolean;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    PickerYear: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        showYearView: {
            type: BooleanConstructor;
        };
        selectedDate: {
            type: (StringConstructor | DateConstructor)[];
            required: false;
            default: null;
        };
        pageDate: {
            type: import('vue').PropType<Date>;
            default: Date;
        };
        disabledDates: {
            type: ObjectConstructor;
        };
        highlighted: {
            type: ObjectConstructor;
        };
        calendarClass: {
            type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        };
        calendarStyle: {
            type: ObjectConstructor;
        };
        translation: {
            type: ObjectConstructor;
        };
        isRtl: {
            type: BooleanConstructor;
        };
        allowedToShowView: {
            type: FunctionConstructor;
            required: true;
        };
        useUtc: {
            type: BooleanConstructor;
        };
        fullMonthName: {
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
        theme: {
            default: string;
            type: StringConstructor;
        };
    }>, {
        isRightNavDisabled: import('vue').ComputedRef<boolean>;
        isLeftNavDisabled: import('vue').ComputedRef<boolean>;
        getPageDecade: import('vue').ComputedRef<string>;
        years: import('vue').ComputedRef<{
            year: number;
            timestamp: number;
            isSelected: boolean;
            isDisabled: boolean;
        }[]>;
        nextDecade: () => void;
        previousDecade: () => void;
        selectYear: (year: {
            isDisabled: boolean;
        }) => void;
        getDayName: import('vue').ComputedRef<number | null>;
        monthName: import('vue').ComputedRef<number>;
        getDisplayDate: import('vue').ComputedRef<number | null>;
        currYearName: import('vue').ComputedRef<string>;
        currMonthName: import('vue').ComputedRef<number>;
        ifDifferentViews: import('vue').ComputedRef<boolean>;
        isNextDecadeDisabled: () => boolean;
        isPreviousDecadeDisabled: () => boolean;
        isDisabledYear: (date: Date) => boolean;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("select-year" | "changed-decade")[], "select-year" | "changed-decade", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        showYearView: {
            type: BooleanConstructor;
        };
        selectedDate: {
            type: (StringConstructor | DateConstructor)[];
            required: false;
            default: null;
        };
        pageDate: {
            type: import('vue').PropType<Date>;
            default: Date;
        };
        disabledDates: {
            type: ObjectConstructor;
        };
        highlighted: {
            type: ObjectConstructor;
        };
        calendarClass: {
            type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        };
        calendarStyle: {
            type: ObjectConstructor;
        };
        translation: {
            type: ObjectConstructor;
        };
        isRtl: {
            type: BooleanConstructor;
        };
        allowedToShowView: {
            type: FunctionConstructor;
            required: true;
        };
        useUtc: {
            type: BooleanConstructor;
        };
        fullMonthName: {
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
        theme: {
            default: string;
            type: StringConstructor;
        };
    }>> & Readonly<{
        "onSelect-year"?: ((...args: any[]) => any) | undefined;
        "onChanged-decade"?: ((...args: any[]) => any) | undefined;
    }>, {
        selectedDate: string | Date;
        useUtc: boolean;
        minimumView: string;
        maximumView: string;
        fullMonthName: boolean;
        theme: string;
        pageDate: Date;
        isRtl: boolean;
        showYearView: boolean;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
}, {
    clickoutside: {
        instances: any[];
        beforeMount: (el: any, { value }: {
            value: any;
        }) => void;
        updated: (el: any, binding: any) => void;
        unmounted: (el: any) => void;
    };
}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
