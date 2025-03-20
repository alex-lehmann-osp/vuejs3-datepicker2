import { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    showYearView: {
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
        type: PropType<Date>;
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
export default _default;
