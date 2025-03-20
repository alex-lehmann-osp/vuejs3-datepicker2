interface ILocale {
    months: string[];
    monthsAbbr: string[];
    days: string[];
    yearSuffix: string;
    ymd: boolean;
    rtl: boolean;
    langName: string;
    daysNames: string[];
    language: string;
}
export declare const tr: () => ILocale;
export declare const vn: () => ILocale;
export declare const kr: () => ILocale;
export declare const data: {
    ar: ILocale;
    af: ILocale;
    arTn: ILocale;
    hi: ILocale;
    ja: ILocale;
    de: ILocale;
    en: ILocale;
    es: ILocale;
    fr: ILocale;
    nl: ILocale;
    pt: ILocale;
    it: ILocale;
    pl: ILocale;
    ru: ILocale;
    tr: ILocale;
    zh_TW: ILocale;
    vn: ILocale;
    bg: ILocale;
    kr: ILocale;
    id: ILocale;
    cs: ILocale;
};
export {};
