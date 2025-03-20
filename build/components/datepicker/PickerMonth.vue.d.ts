import { PropType } from 'vue';
interface IMonths {
    month: number;
    timestamp: number;
    isSelected: boolean;
    isDisabled: boolean;
}
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    showMonthView: {
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
    months: import('vue').ComputedRef<IMonths[]>;
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
        type: PropType<Date>;
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
export default _default;
