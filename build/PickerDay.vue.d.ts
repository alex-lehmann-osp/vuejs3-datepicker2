import { PropType } from 'vue';
export interface IDays {
    date: number;
    timestamp: number;
    isSelected: boolean;
    isDisabled: boolean;
    isHighlighted: boolean;
    isHighlightStart: boolean;
    isHighlightEnd: boolean;
    isToday: boolean;
    isWeekend: boolean;
    isSaturday: boolean;
    isSunday: boolean;
}
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    showDayView: {
        type: BooleanConstructor;
    };
    selectedDate: {
        type: (StringConstructor | DateConstructor)[];
        required: false;
        default: null;
    };
    pageDate: {
        type: PropType<Date>;
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
    days: import('vue').ComputedRef<IDays[]>;
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
        type: PropType<Date>;
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
export default _default;
