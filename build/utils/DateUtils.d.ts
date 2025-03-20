/**
 * Returns the full year, using UTC or not
 * @param {Date} date
 */
export declare const getFullYear: (date: Date, useUtc?: boolean) => number;
/**
 * Returns the month, using UTC or not
 * @param {Date} date
 */
export declare const getMonth: (date: Date, useUtc?: boolean) => number;
/**
 * Returns the date, using UTC or not
 * @param {Date} date
 */
export declare const getDate: (date: Date, useUtc?: boolean) => number;
/**
 * Returns the day, using UTC or not
 * @param {Date} date
 */
export declare const getDay: (date: Date, useUtc?: boolean) => number;
/**
 * Returns the hours, using UTC or not
 * @param {Date} date
 */
export declare const getHours: (date: Date, useUtc?: boolean) => number;
/**
 * Returns the minutes, using UTC or not
 * @param {Date} date
 */
export declare const getMinutes: (date: Date, useUtc?: boolean) => number;
/**
 * Sets the full year, using UTC or not
 * @param {Date} date
 */
export declare const setFullYear: (date: Date, value: any, useUtc?: boolean) => number;
/**
 * Sets the month, using UTC or not
 * @param {Date} date
 */
export declare const setMonth: (date: Date, value: any, useUtc?: boolean) => number;
/**
 * Sets the date, using UTC or not
 * @param {Date} date
 * @param {Number} value
 */
export declare const setDate: (date: Date, value: any, useUtc?: boolean) => number;
/**
 * Check if date1 is equivalent to date2, without comparing the time
 * @see https://stackoverflow.com/a/6202196/4455925
 * @param {Date} date1
 * @param {Date} date2
 */
export declare const compareDates: (date1: {
    getTime: () => string | number | Date;
}, date2: {
    getTime: () => string | number | Date;
}, useUtc?: boolean) => boolean;
/**
 * Validates a date object
 * @param {Date} date - an object instantiated with the new Date constructor
 * @return {Boolean}
 */
export declare const isValidDate: (date: {
    getTime: () => number;
}) => boolean;
/**
 * Return abbreviated week day name
 * @param {Date}
 * @param {Array}
 * @return {String}
 */
export declare const getDayNameAbbr: (date: any, days: {
    [x: string]: any;
}) => number;
/**
 * Return name of the month
 * @param {Number|Date}
 * @param {Array}
 * @return {String}
 */
export declare const getMonthName: (month: string | number, months: any[]) => number;
/**
 * Return an abbreviated version of the month
 * @param {Number|Date}
 * @return {String}
 */
export declare const getMonthNameAbbr: (month: string | number, monthsAbbr: any[]) => number;
/**
 * Alternative get total number of days in month
 * @param {Number} year
 * @param {Number} m
 * @return {Number}
 */
export declare const daysInMonth: (year: number, month: string | number) => number;
/**
 * Get nth suffix for date
 * @param {Number} day
 * @return {String}
 */
export declare const getNthSuffix: (day: any) => string;
/**
 * Formats date object
 * @param {Date}
 * @param {String}
 * @param {Object}
 * @return {String}
 */
export declare const formatDate: (date: Date, format: {
    replace: (arg0: RegExp, arg1: string) => {
        (): any;
        new (): any;
        replace: {
            (arg0: RegExp, arg1: any): {
                (): any;
                new (): any;
                replace: {
                    (arg0: RegExp, arg1: number): string;
                    new (): any;
                };
            };
            new (): any;
        };
    };
}, translation: {
    months: any;
    monthsAbbr: any;
    days: any;
}) => string;
/**
 * Creates an array of dates for each day in between two dates.
 * @param {Date} start
 * @param {Date} end
 * @return {Array}
 */
export declare const createDateArray: (start: number, end: number) => Date[];
/**
 * method used as a prop validator for input values
 * @param {*} val
 * @return {Boolean}
 */
export declare const validateDateInput: (val: any) => boolean;
export declare const stringToDate: (value: string | Date) => Date;
