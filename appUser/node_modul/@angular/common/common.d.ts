/**
 * @license Angular v9.1.9
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { ChangeDetectorRef } from '@angular/core';
import { DoCheck } from '@angular/core';
import { ElementRef } from '@angular/core';
import { InjectionToken } from '@angular/core';
import { Injector } from '@angular/core';
import { IterableDiffers } from '@angular/core';
import { KeyValueDiffers } from '@angular/core';
import { NgIterable } from '@angular/core';
import { NgModuleFactory } from '@angular/core';
import { Observable } from 'rxjs';
import { OnChanges } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { PipeTransform } from '@angular/core';
import { Provider } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { SubscriptionLike } from 'rxjs';
import { TemplateRef } from '@angular/core';
import { TrackByFunction } from '@angular/core';
import { Type } from '@angular/core';
import { Version } from '@angular/core';
import { ViewContainerRef } from '@angular/core';

/**
 * A predefined [DI token](guide/glossary#di-token) for the base href
 * to be used with the `PathLocationStrategy`.
 * The base href is the URL prefix that should be preserved when generating
 * and recognizing URLs.
 *
 * @usageNotes
 *
 * The following example shows how to use this token to configure the root app injector
 * with a base href value, so that the DI framework can supply the dependency anywhere in the app.
 *
 * ```typescript
 * import {Component, NgModule} from '@angular/core';
 * import {APP_BASE_HREF} from '@angular/common';
 *
 * @NgModule({
 *   providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
 * })
 * class AppModule {}
 * ```
 *
 * @publicApi
 */
import * as ɵngcc0 from '@angular/core';
export declare const APP_BASE_HREF: InjectionToken<string>;

/**
 * @ngModule CommonModule
 * @description
 *
 * Unwraps a value from an asynchronous primitive.
 *
 * The `async` pipe subscribes to an `Observable` or `Promise` and returns the latest value it has
 * emitted. When a new value is emitted, the `async` pipe marks the component to be checked for
 * changes. When the component gets destroyed, the `async` pipe unsubscribes automatically to avoid
 * potential memory leaks.
 *
 * @usageNotes
 *
 * ### Examples
 *
 * This example binds a `Promise` to the view. Clicking the `Resolve` button resolves the
 * promise.
 *
 * {@example common/pipes/ts/async_pipe.ts region='AsyncPipePromise'}
 *
 * It's also possible to use `async` with Observables. The example below binds the `time` Observable
 * to the view. The Observable continuously updates the view with the current time.
 *
 * {@example common/pipes/ts/async_pipe.ts region='AsyncPipeObservable'}
 *
 * @publicApi
 */
export declare class AsyncPipe implements OnDestroy, PipeTransform {
    private _ref;
    private _latestValue;
    private _latestReturnedValue;
    private _subscription;
    private _obj;
    private _strategy;
    constructor(_ref: ChangeDetectorRef);
    ngOnDestroy(): void;
    transform<T>(obj: null): null;
    transform<T>(obj: undefined): undefined;
    transform<T>(obj: Observable<T> | null | undefined): T | null;
    transform<T>(obj: Promise<T> | null | undefined): T | null;
    private _subscribe;
    private _selectStrategy;
    private _dispose;
    private _updateLatestValue;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AsyncPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<AsyncPipe, "async">;
}


/**
 * Exports all the basic Angular directives and pipes,
 * such as `NgIf`, `NgForOf`, `DecimalPipe`, and so on.
 * Re-exported by `BrowserModule`, which is included automatically in the root
 * `AppModule` when you create a new app with the CLI `new` command.
 *
 * * The `providers` options configure the NgModule's injector to provide
 * localization dependencies to members.
 * * The `exports` options make the declared directives and pipes available for import
 * by other NgModules.
 *
 * @publicApi
 */
export declare class CommonModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<CommonModule, [typeof NgClass, typeof NgComponentOutlet, typeof NgForOf, typeof NgIf, typeof NgTemplateOutlet, typeof NgStyle, typeof NgSwitch, typeof NgSwitchCase, typeof NgSwitchDefault, typeof NgPlural, typeof NgPluralCase, typeof AsyncPipe, typeof UpperCasePipe, typeof LowerCasePipe, typeof JsonPipe, typeof SlicePipe, typeof DecimalPipe, typeof PercentPipe, typeof TitleCasePipe, typeof CurrencyPipe, typeof DatePipe, typeof I18nPluralPipe, typeof I18nSelectPipe, typeof KeyValuePipe], never, [typeof NgClass, typeof NgComponentOutlet, typeof NgForOf, typeof NgIf, typeof NgTemplateOutlet, typeof NgStyle, typeof NgSwitch, typeof NgSwitchCase, typeof NgSwitchDefault, typeof NgPlural, typeof NgPluralCase, typeof AsyncPipe, typeof UpperCasePipe, typeof LowerCasePipe, typeof JsonPipe, typeof SlicePipe, typeof DecimalPipe, typeof PercentPipe, typeof TitleCasePipe, typeof CurrencyPipe, typeof DatePipe, typeof I18nPluralPipe, typeof I18nSelectPipe, typeof KeyValuePipe]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<CommonModule>;
}

/**
 * @ngModule CommonModule
 * @description
 *
 * Transforms a number to a currency string, formatted according to locale rules
 * that determine group sizing and separator, decimal-point character,
 * and other locale-specific configurations.
 *
 * {@a currency-code-deprecation}
 * <div class="alert is-helpful">
 *
 * **Deprecation notice:**
 *
 * The default currency code is currently always `USD` but this is deprecated from v9.
 *
 * **In v11 the default currency code will be taken from the current locale identified by
 * the `LOCAL_ID` token. See the [i18n guide](guide/i18n#setting-up-the-locale-of-your-app) for
 * more information.**
 *
 * If you need the previous behavior then set it by creating a `DEFAULT_CURRENCY_CODE` provider in
 * your application `NgModule`:
 *
 * ```ts
 * {provide: DEFAULT_CURRENCY_CODE, useValue: 'USD'}
 * ```
 *
 * </div>
 *
 * @see `getCurrencySymbol()`
 * @see `formatCurrency()`
 *
 * @usageNotes
 * The following code shows how the pipe transforms numbers
 * into text strings, according to various format specifications,
 * where the caller's default locale is `en-US`.
 *
 * <code-example path="common/pipes/ts/currency_pipe.ts" region='CurrencyPipe'></code-example>
 *
 * @publicApi
 */
export declare class CurrencyPipe implements PipeTransform {
    private _locale;
    private _defaultCurrencyCode;
    constructor(_locale: string, _defaultCurrencyCode?: string);
    /**
     *
     * @param value The number to be formatted as currency.
     * @param currencyCode The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code,
     * such as `USD` for the US dollar and `EUR` for the euro. The default currency code can be
     * configured using the `DEFAULT_CURRENCY_CODE` injection token.
     * @param display The format for the currency indicator. One of the following:
     *   - `code`: Show the code (such as `USD`).
     *   - `symbol`(default): Show the symbol (such as `$`).
     *   - `symbol-narrow`: Use the narrow symbol for locales that have two symbols for their
     * currency.
     * For example, the Canadian dollar CAD has the symbol `CA$` and the symbol-narrow `$`. If the
     * locale has no narrow symbol, uses the standard symbol for the locale.
     *   - String: Use the given string value instead of a code or a symbol.
     * For example, an empty string will suppress the currency & symbol.
     *   - Boolean (marked deprecated in v5): `true` for symbol and false for `code`.
     *
     * @param digitsInfo Decimal representation options, specified by a string
     * in the following format:<br>
     * <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>.
     *   - `minIntegerDigits`: The minimum number of integer digits before the decimal point.
     * Default is `1`.
     *   - `minFractionDigits`: The minimum number of digits after the decimal point.
     * Default is `2`.
     *   - `maxFractionDigits`: The maximum number of digits after the decimal point.
     * Default is `2`.
     * If not provided, the number will be formatted with the proper amount of digits,
     * depending on what the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) specifies.
     * For example, the Canadian dollar has 2 digits, whereas the Chilean peso has none.
     * @param locale A locale code for the locale format rules to use.
     * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
     * See [Setting your app locale](guide/i18n#setting-up-the-locale-of-your-app).
     */
    transform(value: any, currencyCode?: string, display?: 'code' | 'symbol' | 'symbol-narrow' | string | boolean, digitsInfo?: string, locale?: string): string | null;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CurrencyPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<CurrencyPipe, "currency">;
}

/**
 * @ngModule CommonModule
 * @description
 *
 * Formats a date value according to locale rules.
 *
 * Only the `en-US` locale data comes with Angular. To localize dates
 * in another language, you must import the corresponding locale data.
 * See the [I18n guide](guide/i18n#i18n-pipes) for more information.
 *
 * @see `formatDate()`
 *
 *
 * @usageNotes
 *
 * The result of this pipe is not reevaluated when the input is mutated. To avoid the need to
 * reformat the date on every change-detection cycle, treat the date as an immutable object
 * and change the reference when the pipe needs to run again.
 *
 * ### Pre-defined format options
 *
 * Examples are given in `en-US` locale.
 *
 * - `'short'`: equivalent to `'M/d/yy, h:mm a'` (`6/15/15, 9:03 AM`).
 * - `'medium'`: equivalent to `'MMM d, y, h:mm:ss a'` (`Jun 15, 2015, 9:03:01 AM`).
 * - `'long'`: equivalent to `'MMMM d, y, h:mm:ss a z'` (`June 15, 2015 at 9:03:01 AM
 * GMT+1`).
 * - `'full'`: equivalent to `'EEEE, MMMM d, y, h:mm:ss a zzzz'` (`Monday, June 15, 2015 at
 * 9:03:01 AM GMT+01:00`).
 * - `'shortDate'`: equivalent to `'M/d/yy'` (`6/15/15`).
 * - `'mediumDate'`: equivalent to `'MMM d, y'` (`Jun 15, 2015`).
 * - `'longDate'`: equivalent to `'MMMM d, y'` (`June 15, 2015`).
 * - `'fullDate'`: equivalent to `'EEEE, MMMM d, y'` (`Monday, June 15, 2015`).
 * - `'shortTime'`: equivalent to `'h:mm a'` (`9:03 AM`).
 * - `'mediumTime'`: equivalent to `'h:mm:ss a'` (`9:03:01 AM`).
 * - `'longTime'`: equivalent to `'h:mm:ss a z'` (`9:03:01 AM GMT+1`).
 * - `'fullTime'`: equivalent to `'h:mm:ss a zzzz'` (`9:03:01 AM GMT+01:00`).
 *
 * ### Custom format options
 *
 * You can construct a format string using symbols to specify the components
 * of a date-time value, as described in the following table.
 * Format details depend on the locale.
 * Fields marked with (*) are only available in the extra data set for the given locale.
 *
 *  | Field type         | Format      | Description                                                   | Example Value                                              |
 *  |--------------------|-------------|---------------------------------------------------------------|------------------------------------------------------------|
 *  | Era                | G, GG & GGG | Abbreviated                                                   | AD                                                         |
 *  |                    | GGGG        | Wide                                                          | Anno Domini                                                |
 *  |                    | GGGGG       | Narrow                                                        | A                                                          |
 *  | Year               | y           | Numeric: minimum digits                                       | 2, 20, 201, 2017, 20173                                    |
 *  |                    | yy          | Numeric: 2 digits + zero padded                               | 02, 20, 01, 17, 73                                         |
 *  |                    | yyy         | Numeric: 3 digits + zero padded                               | 002, 020, 201, 2017, 20173                                 |
 *  |                    | yyyy        | Numeric: 4 digits or more + zero padded                       | 0002, 0020, 0201, 2017, 20173                              |
 *  | Month              | M           | Numeric: 1 digit                                              | 9, 12                                                      |
 *  |                    | MM          | Numeric: 2 digits + zero padded                               | 09, 12                                                     |
 *  |                    | MMM         | Abbreviated                                                   | Sep                                                        |
 *  |                    | MMMM        | Wide                                                          | September                                                  |
 *  |                    | MMMMM       | Narrow                                                        | S                                                          |
 *  | Month standalone   | L           | Numeric: 1 digit                                              | 9, 12                                                      |
 *  |                    | LL          | Numeric: 2 digits + zero padded                               | 09, 12                                                     |
 *  |                    | LLL         | Abbreviated                                                   | Sep                                                        |
 *  |                    | LLLL        | Wide                                                          | September                                                  |
 *  |                    | LLLLL       | Narrow                                                        | S                                                          |
 *  | Week of year       | w           | Numeric: minimum digits                                       | 1... 53                                                    |
 *  |                    | ww          | Numeric: 2 digits + zero padded                               | 01... 53                                                   |
 *  | Week of month      | W           | Numeric: 1 digit                                              | 1... 5                                                     |
 *  | Day of month       | d           | Numeric: minimum digits                                       | 1                                                          |
 *  |                    | dd          | Numeric: 2 digits + zero padded                               | 01                                                          |
 *  | Week day           | E, EE & EEE | Abbreviated                                                   | Tue                                                        |
 *  |                    | EEEE        | Wide                                                          | Tuesday                                                    |
 *  |                    | EEEEE       | Narrow                                                        | T                                                          |
 *  |                    | EEEEEE      | Short                                                         | Tu                                                         |
 *  | Period             | a, aa & aaa | Abbreviated                                                   | am/pm or AM/PM                                             |
 *  |                    | aaaa        | Wide (fallback to `a` when missing)                           | ante meridiem/post meridiem                                |
 *  |                    | aaaaa       | Narrow                                                        | a/p                                                        |
 *  | Period*            | B, BB & BBB | Abbreviated                                                   | mid.                                                       |
 *  |                    | BBBB        | Wide                                                          | am, pm, midnight, noon, morning, afternoon, evening, night |
 *  |                    | BBBBB       | Narrow                                                        | md                                                         |
 *  | Period standalone* | b, bb & bbb | Abbreviated                                                   | mid.                                                       |
 *  |                    | bbbb        | Wide                                                          | am, pm, midnight, noon, morning, afternoon, evening, night |
 *  |                    | bbbbb       | Narrow                                                        | md                                                         |
 *  | Hour 1-12          | h           | Numeric: minimum digits                                       | 1, 12                                                      |
 *  |                    | hh          | Numeric: 2 digits + zero padded                               | 01, 12                                                     |
 *  | Hour 0-23          | H           | Numeric: minimum digits                                       | 0, 23                                                      |
 *  |                    | HH          | Numeric: 2 digits + zero padded                               | 00, 23                                                     |
 *  | Minute             | m           | Numeric: minimum digits                                       | 8, 59                                                      |
 *  |                    | mm          | Numeric: 2 digits + zero padded                               | 08, 59                                                     |
 *  | Second             | s           | Numeric: minimum digits                                       | 0... 59                                                    |
 *  |                    | ss          | Numeric: 2 digits + zero padded                               | 00... 59                                                   |
 *  | Fractional seconds | S           | Numeric: 1 digit                                              | 0... 9                                                     |
 *  |                    | SS          | Numeric: 2 digits + zero padded                               | 00... 99                                                   |
 *  |                    | SSS         | Numeric: 3 digits + zero padded (= milliseconds)              | 000... 999                                                 |
 *  | Zone               | z, zz & zzz | Short specific non location format (fallback to O)            | GMT-8                                                      |
 *  |                    | zzzz        | Long specific non location format (fallback to OOOO)          | GMT-08:00                                                  |
 *  |                    | Z, ZZ & ZZZ | ISO8601 basic format                                          | -0800                                                      |
 *  |                    | ZZZZ        | Long localized GMT format                                     | GMT-8:00                                                   |
 *  |                    | ZZZZZ       | ISO8601 extended format + Z indicator for offset 0 (= XXXXX)  | -08:00                                                     |
 *  |                    | O, OO & OOO | Short localized GMT format                                    | GMT-8                                                      |
 *  |                    | OOOO        | Long localized GMT format                                     | GMT-08:00                                                  |
 *
 * Note that timezone correction is not applied to an ISO string that has no time component, such as "2016-09-19"
 *
 * ### Format examples
 *
 * These examples transform a date into various formats,
 * assuming that `dateObj` is a JavaScript `Date` object for
 * year: 2015, month: 6, day: 15, hour: 21, minute: 43, second: 11,
 * given in the local time for the `en-US` locale.
 *
 * ```
 * {{ dateObj | date }}               // output is 'Jun 15, 2015'
 * {{ dateObj | date:'medium' }}      // output is 'Jun 15, 2015, 9:43:11 PM'
 * {{ dateObj | date:'shortTime' }}   // output is '9:43 PM'
 * {{ dateObj | date:'mm:ss' }}       // output is '43:11'
 * ```
 *
 * ### Usage example
 *
 * The following component uses a date pipe to display the current date in different formats.
 *
 * ```
 * @Component({
 *  selector: 'date-pipe',
 *  template: `<div>
 *    <p>Today is {{today | date}}</p>
 *    <p>Or if you prefer, {{today | date:'fullDate'}}</p>
 *    <p>The time is {{today | date:'h:mm a z'}}</p>
 *  </div>`
 * })
 * // Get the current date and time as a date-time value.
 * export class DatePipeComponent {
 *   today: number = Date.now();
 * }
 * ```
 *
 * @publicApi
 */
export declare class DatePipe implements PipeTransform {
    private locale;
    constructor(locale: string);
    /**
     * @param value The date expression: a `Date` object,  a number
     * (milliseconds since UTC epoch), or an ISO string (https://www.w3.org/TR/NOTE-datetime).
     * @param format The date/time components to include, using predefined options or a
     * custom format string.
     * @param timezone A timezone offset (such as `'+0430'`), or a standard
     * UTC/GMT or continental US timezone abbreviation.
     * When not supplied, uses the end-user's local system timezone.
     * @param locale A locale code for the locale format rules to use.
     * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
     * See [Setting your app locale](guide/i18n#setting-up-the-locale-of-your-app).
     * @returns A date string in the desired format.
     */
    transform(value: any, format?: string, timezone?: string, locale?: string): string | null;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DatePipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<DatePipe, "date">;
}

/**
 * @ngModule CommonModule
 * @description
 *
 * Transforms a number into a string,
 * formatted according to locale rules that determine group sizing and
 * separator, decimal-point character, and other locale-specific
 * configurations.
 *
 * If no parameters are specified, the function rounds off to the nearest value using this
 * [rounding method](https://en.wikibooks.org/wiki/Arithmetic/Rounding).
 * The behavior differs from that of the JavaScript ```Math.round()``` function.
 * In the following case for example, the pipe rounds down where
 * ```Math.round()``` rounds up:
 *
 * ```html
 * -2.5 | number:'1.0-0'
 * > -3
 * Math.round(-2.5)
 * > -2
 * ```
 *
 * @see `formatNumber()`
 *
 * @usageNotes
 * The following code shows how the pipe transforms numbers
 * into text strings, according to various format specifications,
 * where the caller's default locale is `en-US`.
 *
 * ### Example
 *
 * <code-example path="common/pipes/ts/number_pipe.ts" region='NumberPipe'></code-example>
 *
 * @publicApi
 */
export declare class DecimalPipe implements PipeTransform {
    private _locale;
    constructor(_locale: string);
    /**
     * @param value The number to be formatted.
     * @param digitsInfo Decimal representation options, specified by a string
     * in the following format:<br>
     * <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>.
     *   - `minIntegerDigits`: The minimum number of integer digits before the decimal point.
     * Default is `1`.
     *   - `minFractionDigits`: The minimum number of digits after the decimal point.
     * Default is `0`.
     *   - `maxFractionDigits`: The maximum number of digits after the decimal point.
     * Default is `3`.
     * @param locale A locale code for the locale format rules to use.
     * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
     * See [Setting your app locale](guide/i18n#setting-up-the-locale-of-your-app).
     */
    transform(value: any, digitsInfo?: string, locale?: string): string | null;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DecimalPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<DecimalPipe, "number">;
}

/**
 * A DI Token representing the main rendering context. In a browser this is the DOM Document.
 *
 * Note: Document might not be available in the Application Context when Application and Rendering
 * Contexts are not the same (e.g. when running the application in a Web Worker).
 *
 * @publicApi
 */
export declare const DOCUMENT: InjectionToken<Document>;

/**
 * @ngModule CommonModule
 * @description
 *
 * Formats a number as currency using locale rules.
 *
 * @param value The number to format.
 * @param locale A locale code for the locale format rules to use.
 * @param currency A string containing the currency symbol or its name,
 * such as "$" or "Canadian Dollar". Used in output string, but does not affect the operation
 * of the function.
 * @param currencyCode The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)
 * currency code, such as `USD` for the US dollar and `EUR` for the euro.
 * Used to determine the number of digits in the decimal part.
 * @param digitInfo Decimal representation options, specified by a string in the following format:
 * `{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}`. See `DecimalPipe` for more details.
 *
 * @returns The formatted currency value.
 *
 * @see `formatNumber()`
 * @see `DecimalPipe`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function formatCurrency(value: number, locale: string, currency: string, currencyCode?: string, digitsInfo?: string): string;

/**
 * @ngModule CommonModule
 * @description
 *
 * Formats a date according to locale rules.
 *
 * @param value The date to format, as a Date, or a number (milliseconds since UTC epoch)
 * or an [ISO date-time string](https://www.w3.org/TR/NOTE-datetime).
 * @param format The date-time components to include. See `DatePipe` for details.
 * @param locale A locale code for the locale format rules to use.
 * @param timezone The time zone. A time zone offset from GMT (such as `'+0430'`),
 * or a standard UTC/GMT or continental US time zone abbreviation.
 * If not specified, uses host system settings.
 *
 * @returns The formatted date string.
 *
 * @see `DatePipe`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function formatDate(value: string | number | Date, format: string, locale: string, timezone?: string): string;

/**
 * @ngModule CommonModule
 * @description
 *
 * Formats a number as text, with group sizing, separator, and other
 * parameters based on the locale.
 *
 * @param value The number to format.
 * @param locale A locale code for the locale format rules to use.
 * @param digitInfo Decimal representation options, specified by a string in the following format:
 * `{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}`. See `DecimalPipe` for more details.
 *
 * @returns The formatted text string.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function formatNumber(value: number, locale: string, digitsInfo?: string): string;

/**
 * @ngModule CommonModule
 * @description
 *
 * Formats a number as a percentage according to locale rules.
 *
 * @param value The number to format.
 * @param locale A locale code for the locale format rules to use.
 * @param digitInfo Decimal representation options, specified by a string in the following format:
 * `{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}`. See `DecimalPipe` for more details.
 *
 * @returns The formatted percentage value.
 *
 * @see `formatNumber()`
 * @see `DecimalPipe`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 * @publicApi
 *
 */
export declare function formatPercent(value: number, locale: string, digitsInfo?: string): string;

/**
 * String widths available for date-time formats.
 * The specific character widths are locale-specific.
 * Examples are given for `en-US`.
 *
 * @see `getLocaleDateFormat()`
 * @see `getLocaleTimeFormat()``
 * @see `getLocaleDateTimeFormat()`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 * @publicApi
 */
export declare enum FormatWidth {
    /**
     * For `en-US`, 'M/d/yy, h:mm a'`
     * (Example: `6/15/15, 9:03 AM`)
     */
    Short = 0,
    /**
     * For `en-US`, `'MMM d, y, h:mm:ss a'`
     * (Example: `Jun 15, 2015, 9:03:01 AM`)
     */
    Medium = 1,
    /**
     * For `en-US`, `'MMMM d, y, h:mm:ss a z'`
     * (Example: `June 15, 2015 at 9:03:01 AM GMT+1`)
     */
    Long = 2,
    /**
     * For `en-US`, `'EEEE, MMMM d, y, h:mm:ss a zzzz'`
     * (Example: `Monday, June 15, 2015 at 9:03:01 AM GMT+01:00`)
     */
    Full = 3
}

/**
 * Context-dependant translation forms for strings.
 * Typically the standalone version is for the nominative form of the word,
 * and the format version is used for the genitive case.
 * @see [CLDR website](http://cldr.unicode.org/translation/date-time-1/date-time#TOC-Standalone-vs.-Format-Styles)
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare enum FormStyle {
    Format = 0,
    Standalone = 1
}

/**
 * Retrieves the currency symbol for a given currency code.
 *
 * For example, for the default `en-US` locale, the code `USD` can
 * be represented by the narrow symbol `$` or the wide symbol `US$`.
 *
 * @param code The currency code.
 * @param format The format, `wide` or `narrow`.
 * @param locale A locale code for the locale format rules to use.
 *
 * @returns The symbol, or the currency code if no symbol is available.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getCurrencySymbol(code: string, format: 'wide' | 'narrow', locale?: string): string;

/**
 * Retrieves the default currency code for the given locale.
 *
 * The default is defined as the first currency which is still in use.
 *
 * @param locale The code of the locale whose currency code we want.
 * @returns The code of the default currency for the given locale.
 *
 * @publicApi
 */
export declare function getLocaleCurrencyCode(locale: string): string | null;

/**
 * Retrieves the name of the currency for the main country corresponding
 * to a given locale. For example, 'US Dollar' for `en-US`.
 * @param locale A locale code for the locale format rules to use.
 * @returns The currency name,
 * or `null` if the main country cannot be determined.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleCurrencyName(locale: string): string | null;

/**
 * Retrieves the symbol used to represent the currency for the main country
 * corresponding to a given locale. For example, '$' for `en-US`.
 *
 * @param locale A locale code for the locale format rules to use.
 * @returns The localized symbol character,
 * or `null` if the main country cannot be determined.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleCurrencySymbol(locale: string): string | null;

/**
 * Retrieves a localized date-value formating string.
 *
 * @param locale A locale code for the locale format rules to use.
 * @param width The format type.
 * @returns The localized formating string.
 * @see `FormatWidth`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleDateFormat(locale: string, width: FormatWidth): string;

/**
 * Retrieves a localized date-time formatting string.
 *
 * @param locale A locale code for the locale format rules to use.
 * @param width The format type.
 * @returns The localized formatting string.
 * @see `FormatWidth`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleDateTimeFormat(locale: string, width: FormatWidth): string;

/**
 * Retrieves days of the week for the given locale, using the Gregorian calendar.
 *
 * @param locale A locale code for the locale format rules to use.
 * @param formStyle The required grammatical form.
 * @param width The required character width.
 * @returns An array of localized name strings.
 * For example,`[Sunday, Monday, ... Saturday]` for `en-US`.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleDayNames(locale: string, formStyle: FormStyle, width: TranslationWidth): string[];

/**
 * Retrieves day period strings for the given locale.
 *
 * @param locale A locale code for the locale format rules to use.
 * @param formStyle The required grammatical form.
 * @param width The required character width.
 * @returns An array of localized period strings. For example, `[AM, PM]` for `en-US`.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleDayPeriods(locale: string, formStyle: FormStyle, width: TranslationWidth): [string, string];

/**
 * Retrieves the writing direction of a specified locale
 * @param locale A locale code for the locale format rules to use.
 * @publicApi
 * @returns 'rtl' or 'ltr'
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 */
export declare function getLocaleDirection(locale: string): 'ltr' | 'rtl';

/**
 * Retrieves Gregorian-calendar eras for the given locale.
 * @param locale A locale code for the locale format rules to use.
 * @param formStyle The required grammatical form.
 * @param width The required character width.

 * @returns An array of localized era strings.
 * For example, `[AD, BC]` for `en-US`.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleEraNames(locale: string, width: TranslationWidth): [string, string];

/**
 * Retrieves locale-specific rules used to determine which day period to use
 * when more than one period is defined for a locale.
 *
 * There is a rule for each defined day period. The
 * first rule is applied to the first day period and so on.
 * Fall back to AM/PM when no rules are available.
 *
 * A rule can specify a period as time range, or as a single time value.
 *
 * This functionality is only available when you have loaded the full locale data.
 * See the ["I18n guide"](guide/i18n#i18n-pipes).
 *
 * @param locale A locale code for the locale format rules to use.
 * @returns The rules for the locale, a single time value or array of *from-time, to-time*,
 * or null if no periods are available.
 *
 * @see `getLocaleExtraDayPeriods()`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleExtraDayPeriodRules(locale: string): (Time | [Time, Time])[];

/**
 * Retrieves locale-specific day periods, which indicate roughly how a day is broken up
 * in different languages.
 * For example, for `en-US`, periods are morning, noon, afternoon, evening, and midnight.
 *
 * This functionality is only available when you have loaded the full locale data.
 * See the ["I18n guide"](guide/i18n#i18n-pipes).
 *
 * @param locale A locale code for the locale format rules to use.
 * @param formStyle The required grammatical form.
 * @param width The required character width.
 * @returns The translated day-period strings.
 * @see `getLocaleExtraDayPeriodRules()`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleExtraDayPeriods(locale: string, formStyle: FormStyle, width: TranslationWidth): string[];

/**
 * Retrieves the first day of the week for the given locale.
 *
 * @param locale A locale code for the locale format rules to use.
 * @returns A day index number, using the 0-based week-day index for `en-US`
 * (Sunday = 0, Monday = 1, ...).
 * For example, for `fr-FR`, returns 1 to indicate that the first day is Monday.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleFirstDayOfWeek(locale: string): WeekDay;

/**
 * Retrieves the locale ID from the currently loaded locale.
 * The loaded locale could be, for example, a global one rather than a regional one.
 * @param locale A locale code, such as `fr-FR`.
 * @returns The locale code. For example, `fr`.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleId(locale: string): string;

/**
 * Retrieves months of the year for the given locale, using the Gregorian calendar.
 *
 * @param locale A locale code for the locale format rules to use.
 * @param formStyle The required grammatical form.
 * @param width The required character width.
 * @returns An array of localized name strings.
 * For example,  `[January, February, ...]` for `en-US`.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleMonthNames(locale: string, formStyle: FormStyle, width: TranslationWidth): string[];

/**
 * Retrieves a number format for a given locale.
 *
 * Numbers are formatted using patterns, like `#,###.00`. For example, the pattern `#,###.00`
 * when used to format the number 12345.678 could result in "12'345,678". That would happen if the
 * grouping separator for your language is an apostrophe, and the decimal separator is a comma.
 *
 * <b>Important:</b> The characters `.` `,` `0` `#` (and others below) are special placeholders
 * that stand for the decimal separator, and so on, and are NOT real characters.
 * You must NOT "translate" the placeholders. For example, don't change `.` to `,` even though in
 * your language the decimal point is written with a comma. The symbols should be replaced by the
 * local equivalents, using the appropriate `NumberSymbol` for your language.
 *
 * Here are the special characters used in number patterns:
 *
 * | Symbol | Meaning |
 * |--------|---------|
 * | . | Replaced automatically by the character used for the decimal point. |
 * | , | Replaced by the "grouping" (thousands) separator. |
 * | 0 | Replaced by a digit (or zero if there aren't enough digits). |
 * | # | Replaced by a digit (or nothing if there aren't enough). |
 * | ¤ | Replaced by a currency symbol, such as $ or USD. |
 * | % | Marks a percent format. The % symbol may change position, but must be retained. |
 * | E | Marks a scientific format. The E symbol may change position, but must be retained. |
 * | ' | Special characters used as literal characters are quoted with ASCII single quotes. |
 *
 * @param locale A locale code for the locale format rules to use.
 * @param type The type of numeric value to be formatted (such as `Decimal` or `Currency`.)
 * @returns The localized format string.
 * @see `NumberFormatStyle`
 * @see [CLDR website](http://cldr.unicode.org/translation/number-patterns)
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleNumberFormat(locale: string, type: NumberFormatStyle): string;

/**
 * Retrieves a localized number symbol that can be used to replace placeholders in number formats.
 * @param locale The locale code.
 * @param symbol The symbol to localize.
 * @returns The character for the localized symbol.
 * @see `NumberSymbol`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleNumberSymbol(locale: string, symbol: NumberSymbol): string;

/**
 * @alias core/ɵgetLocalePluralCase
 * @publicApi
 */
export declare const getLocalePluralCase: (locale: string) => ((value: number) => Plural);

/**
 * Retrieves a localized time-value formatting string.
 *
 * @param locale A locale code for the locale format rules to use.
 * @param width The format type.
 * @returns The localized formatting string.
 * @see `FormatWidth`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)

 * @publicApi
 */
export declare function getLocaleTimeFormat(locale: string, width: FormatWidth): string;

/**
 * Range of week days that are considered the week-end for the given locale.
 *
 * @param locale A locale code for the locale format rules to use.
 * @returns The range of day values, `[startDay, endDay]`.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleWeekEndRange(locale: string): [WeekDay, WeekDay];

/**
 * Reports the number of decimal digits for a given currency.
 * The value depends upon the presence of cents in that particular currency.
 *
 * @param code The currency code.
 * @returns The number of decimal digits, typically 0 or 2.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getNumberOfCurrencyDigits(code: string): number;

/**
 * @description
 * A {@link LocationStrategy} used to configure the {@link Location} service to
 * represent its state in the
 * [hash fragment](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax)
 * of the browser's URL.
 *
 * For instance, if you call `location.go('/foo')`, the browser's URL will become
 * `example.com#/foo`.
 *
 * @usageNotes
 *
 * ### Example
 *
 * {@example common/location/ts/hash_location_component.ts region='LocationComponent'}
 *
 * @publicApi
 */
export declare class HashLocationStrategy extends LocationStrategy {
    private _platformLocation;
    private _baseHref;
    constructor(_platformLocation: PlatformLocation, _baseHref?: string);
    onPopState(fn: LocationChangeListener): void;
    getBaseHref(): string;
    path(includeHash?: boolean): string;
    prepareExternalUrl(internal: string): string;
    pushState(state: any, title: string, path: string, queryParams: string): void;
    replaceState(state: any, title: string, path: string, queryParams: string): void;
    forward(): void;
    back(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<HashLocationStrategy, [null, { optional: true; }]>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<HashLocationStrategy>;
}

/**
 * @ngModule CommonModule
 * @description
 *
 * Maps a value to a string that pluralizes the value according to locale rules.
 *
 * @usageNotes
 *
 * ### Example
 *
 * {@example common/pipes/ts/i18n_pipe.ts region='I18nPluralPipeComponent'}
 *
 * @publicApi
 */
export declare class I18nPluralPipe implements PipeTransform {
    private _localization;
    constructor(_localization: NgLocalization);
    /**
     * @param value the number to be formatted
     * @param pluralMap an object that mimics the ICU format, see
     * http://userguide.icu-project.org/formatparse/messages.
     * @param locale a `string` defining the locale to use (uses the current {@link LOCALE_ID} by
     * default).
     */
    transform(value: number, pluralMap: {
        [count: string]: string;
    }, locale?: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<I18nPluralPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<I18nPluralPipe, "i18nPlural">;
}

/**
 * @ngModule CommonModule
 * @description
 *
 * Generic selector that displays the string that matches the current value.
 *
 * If none of the keys of the `mapping` match the `value`, then the content
 * of the `other` key is returned when present, otherwise an empty string is returned.
 *
 * @usageNotes
 *
 * ### Example
 *
 * {@example common/pipes/ts/i18n_pipe.ts region='I18nSelectPipeComponent'}
 *
 * @publicApi
 */
export declare class I18nSelectPipe implements PipeTransform {
    /**
     * @param value a string to be internationalized.
     * @param mapping an object that indicates the text that should be displayed
     * for different values of the provided `value`.
     */
    transform(value: string | null | undefined, mapping: {
        [key: string]: string;
    }): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<I18nSelectPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<I18nSelectPipe, "i18nSelect">;
}

/**
 * Returns whether a platform id represents a browser platform.
 * @publicApi
 */
export declare function isPlatformBrowser(platformId: Object): boolean;

/**
 * Returns whether a platform id represents a server platform.
 * @publicApi
 */
export declare function isPlatformServer(platformId: Object): boolean;

/**
 * Returns whether a platform id represents a web worker app platform.
 * @publicApi
 */
export declare function isPlatformWorkerApp(platformId: Object): boolean;

/**
 * Returns whether a platform id represents a web worker UI platform.
 * @publicApi
 */
export declare function isPlatformWorkerUi(platformId: Object): boolean;

/**
 * @ngModule CommonModule
 * @description
 *
 * Converts a value into its JSON-format representation.  Useful for debugging.
 *
 * @usageNotes
 *
 * The following component uses a JSON pipe to convert an object
 * to JSON format, and displays the string in both formats for comparison.
 *
 * {@example common/pipes/ts/json_pipe.ts region='JsonPipe'}
 *
 * @publicApi
 */
export declare class JsonPipe implements PipeTransform {
    /**
     * @param value A value of any type to convert into a JSON-format string.
     */
    transform(value: any): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<JsonPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<JsonPipe, "json">;
}

/**
 * A key value pair.
 * Usually used to represent the key value pairs from a Map or Object.
 *
 * @publicApi
 */
export declare interface KeyValue<K, V> {
    key: K;
    value: V;
}

/**
 * @ngModule CommonModule
 * @description
 *
 * Transforms Object or Map into an array of key value pairs.
 *
 * The output array will be ordered by keys.
 * By default the comparator will be by Unicode point value.
 * You can optionally pass a compareFn if your keys are complex types.
 *
 * @usageNotes
 * ### Examples
 *
 * This examples show how an Object or a Map can be iterated by ngFor with the use of this keyvalue
 * pipe.
 *
 * {@example common/pipes/ts/keyvalue_pipe.ts region='KeyValuePipe'}
 *
 * @publicApi
 */
export declare class KeyValuePipe implements PipeTransform {
    private readonly differs;
    constructor(differs: KeyValueDiffers);
    private differ;
    private keyValues;
    transform<K, V>(input: null, compareFn?: (a: KeyValue<K, V>, b: KeyValue<K, V>) => number): null;
    transform<V>(input: {
        [key: string]: V;
    } | Map<string, V>, compareFn?: (a: KeyValue<string, V>, b: KeyValue<string, V>) => number): Array<KeyValue<string, V>>;
    transform<V>(input: {
        [key: string]: V;
    } | Map<string, V> | null, compareFn?: (a: KeyValue<string, V>, b: KeyValue<string, V>) => number): Array<KeyValue<string, V>> | null;
    transform<V>(input: {
        [key: number]: V;
    } | Map<number, V>, compareFn?: (a: KeyValue<number, V>, b: KeyValue<number, V>) => number): Array<KeyValue<number, V>>;
    transform<V>(input: {
        [key: number]: V;
    } | Map<number, V> | null, compareFn?: (a: KeyValue<number, V>, b: KeyValue<number, V>) => number): Array<KeyValue<number, V>> | null;
    transform<K, V>(input: Map<K, V>, compareFn?: (a: KeyValue<K, V>, b: KeyValue<K, V>) => number): Array<KeyValue<K, V>>;
    transform<K, V>(input: Map<K, V> | null, compareFn?: (a: KeyValue<K, V>, b: KeyValue<K, V>) => number): Array<KeyValue<K, V>> | null;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<KeyValuePipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<KeyValuePipe, "keyvalue">;
}

/**
 * @description
 *
 * A service that applications can use to interact with a browser's URL.
 *
 * Depending on the `LocationStrategy` used, `Location` persists
 * to the URL's path or the URL's hash segment.
 *
 * @usageNotes
 *
 * It's better to use the `Router#navigate` service to trigger route changes. Use
 * `Location` only if you need to interact with or create normalized URLs outside of
 * routing.
 *
 * `Location` is responsible for normalizing the URL against the application's base href.
 * A normalized URL is absolute from the URL host, includes the application's base href, and has no
 * trailing slash:
 * - `/my/app/user/123` is normalized
 * - `my/app/user/123` **is not** normalized
 * - `/my/app/user/123/` **is not** normalized
 *
 * ### Example
 *
 * <code-example path='common/location/ts/path_location_component.ts'
 * region='LocationComponent'></code-example>
 *
 * @publicApi
 */
export declare class Location {
    constructor(platformStrategy: LocationStrategy, platformLocation: PlatformLocation);
    /**
     * Normalizes the URL path for this location.
     *
     * @param includeHash True to include an anchor fragment in the path.
     *
     * @returns The normalized URL path.
     */
    path(includeHash?: boolean): string;
    /**
     * Reports the current state of the location history.
     * @returns The current value of the `history.state` object.
     */
    getState(): unknown;
    /**
     * Normalizes the given path and compares to the current normalized path.
     *
     * @param path The given URL path.
     * @param query Query parameters.
     *
     * @returns True if the given URL path is equal to the current normalized path, false
     * otherwise.
     */
    isCurrentPathEqualTo(path: string, query?: string): boolean;
    /**
     * Normalizes a URL path by stripping any trailing slashes.
     *
     * @param url String representing a URL.
     *
     * @returns The normalized URL string.
     */
    normalize(url: string): string;
    /**
     * Normalizes an external URL path.
     * If the given URL doesn't begin with a leading slash (`'/'`), adds one
     * before normalizing. Adds a hash if `HashLocationStrategy` is
     * in use, or the `APP_BASE_HREF` if the `PathLocationStrategy` is in use.
     *
     * @param url String representing a URL.
     *
     * @returns  A normalized platform-specific URL.
     */
    prepareExternalUrl(url: string): string;
    /**
     * Changes the browser's URL to a normalized version of a given URL, and pushes a
     * new item onto the platform's history.
     *
     * @param path  URL path to normalize.
     * @param query Query parameters.
     * @param state Location history state.
     *
     */
    go(path: string, query?: string, state?: any): void;
    /**
     * Changes the browser's URL to a normalized version of the given URL, and replaces
     * the top item on the platform's history stack.
     *
     * @param path  URL path to normalize.
     * @param query Query parameters.
     * @param state Location history state.
     */
    replaceState(path: string, query?: string, state?: any): void;
    /**
     * Navigates forward in the platform's history.
     */
    forward(): void;
    /**
     * Navigates back in the platform's history.
     */
    back(): void;
    /**
     * Registers a URL change listener. Use to catch updates performed by the Angular
     * framework that are not detectible through "popstate" or "hashchange" events.
     *
     * @param fn The change handler function, which take a URL and a location history state.
     */
    onUrlChange(fn: (url: string, state: unknown) => void): void;
    /**
     * Subscribes to the platform's `popState` events.
     *
     * @param value Event that is triggered when the state history changes.
     * @param exception The exception to throw.
     *
     * @returns Subscribed events.
     */
    subscribe(onNext: (value: PopStateEvent) => void, onThrow?: ((exception: any) => void) | null, onReturn?: (() => void) | null): SubscriptionLike;
    /**
     * Normalizes URL parameters by prepending with `?` if needed.
     *
     * @param  params String of URL parameters.
     *
     * @returns The normalized URL parameters string.
     */
    static normalizeQueryParams: (params: string) => string;
    /**
     * Joins two parts of a URL with a slash if needed.
     *
     * @param start  URL string
     * @param end    URL string
     *
     *
     * @returns The joined URL string.
     */
    static joinWithSlash: (start: string, end: string) => string;
    /**
     * Removes a trailing slash from a URL string if needed.
     * Looks for the first occurrence of either `#`, `?`, or the end of the
     * line as `/` characters and removes the trailing slash if one exists.
     *
     * @param url URL string.
     *
     * @returns The URL string, modified if needed.
     */
    static stripTrailingSlash: (url: string) => string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Location, never>;
}

/**
 * @description
 * Indicates when a location is initialized.
 *
 * @publicApi
 */
export declare const LOCATION_INITIALIZED: InjectionToken<Promise<any>>;

/**
 * @description
 * A serializable version of the event from `onPopState` or `onHashChange`
 *
 * @publicApi
 */
export declare interface LocationChangeEvent {
    type: string;
    state: any;
}

/**
 * @publicApi
 */
export declare interface LocationChangeListener {
    (event: LocationChangeEvent): any;
}

/**
 * Enables the `Location` service to read route state from the browser's URL.
 * Angular provides two strategies:
 * `HashLocationStrategy` and `PathLocationStrategy`.
 *
 * Applications should use the `Router` or `Location` services to
 * interact with application route state.
 *
 * For instance, `HashLocationStrategy` produces URLs like
 * <code class="no-auto-link">http://example.com#/foo</code>,
 * and `PathLocationStrategy` produces
 * <code class="no-auto-link">http://example.com/foo</code> as an equivalent URL.
 *
 * See these two classes for more.
 *
 * @publicApi
 */
export declare abstract class LocationStrategy {
    abstract path(includeHash?: boolean): string;
    abstract prepareExternalUrl(internal: string): string;
    abstract pushState(state: any, title: string, url: string, queryParams: string): void;
    abstract replaceState(state: any, title: string, url: string, queryParams: string): void;
    abstract forward(): void;
    abstract back(): void;
    abstract onPopState(fn: LocationChangeListener): void;
    abstract getBaseHref(): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LocationStrategy, never>;
}

/**
 * Transforms text to all lower case.
 *
 * @see `UpperCasePipe`
 * @see `TitleCasePipe`
 * @usageNotes
 *
 * The following example defines a view that allows the user to enter
 * text, and then uses the pipe to convert the input text to all lower case.
 *
 * <code-example path="common/pipes/ts/lowerupper_pipe.ts" region='LowerUpperPipe'></code-example>
 *
 * @ngModule CommonModule
 * @publicApi
 */
export declare class LowerCasePipe implements PipeTransform {
    /**
     * @param value The string to transform to lower case.
     */
    transform(value: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LowerCasePipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<LowerCasePipe, "lowercase">;
}

/**
 * @ngModule CommonModule
 *
 * @usageNotes
 * ```
 *     <some-element [ngClass]="'first second'">...</some-element>
 *
 *     <some-element [ngClass]="['first', 'second']">...</some-element>
 *
 *     <some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>
 *
 *     <some-element [ngClass]="stringExp|arrayExp|objExp">...</some-element>
 *
 *     <some-element [ngClass]="{'class1 class2 class3' : true}">...</some-element>
 * ```
 *
 * @description
 *
 * Adds and removes CSS classes on an HTML element.
 *
 * The CSS classes are updated as follows, depending on the type of the expression evaluation:
 * - `string` - the CSS classes listed in the string (space delimited) are added,
 * - `Array` - the CSS classes declared as Array elements are added,
 * - `Object` - keys are CSS classes that get added when the expression given in the value
 *              evaluates to a truthy value, otherwise they are removed.
 *
 * @publicApi
 */
export declare class NgClass implements DoCheck {
    private _iterableDiffers;
    private _keyValueDiffers;
    private _ngEl;
    private _renderer;
    private _iterableDiffer;
    private _keyValueDiffer;
    private _initialClasses;
    private _rawClass;
    constructor(_iterableDiffers: IterableDiffers, _keyValueDiffers: KeyValueDiffers, _ngEl: ElementRef, _renderer: Renderer2);
    set klass(value: string);
    set ngClass(value: string | string[] | Set<string> | {
        [klass: string]: any;
    });
    ngDoCheck(): void;
    private _applyKeyValueChanges;
    private _applyIterableChanges;
    /**
     * Applies a collection of CSS classes to the DOM element.
     *
     * For argument of type Set and Array CSS class names contained in those collections are always
     * added.
     * For argument of type Map CSS class name in the map's key is toggled based on the value (added
     * for truthy and removed for falsy).
     */
    private _applyClasses;
    /**
     * Removes a collection of CSS classes from the DOM element. This is mostly useful for cleanup
     * purposes.
     */
    private _removeClasses;
    private _toggleClass;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgClass, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgClass, "[ngClass]", never, { "klass": "class"; "ngClass": "ngClass"; }, {}, never>;
}

/**
 * Instantiates a single {@link Component} type and inserts its Host View into current View.
 * `NgComponentOutlet` provides a declarative approach for dynamic component creation.
 *
 * `NgComponentOutlet` requires a component type, if a falsy value is set the view will clear and
 * any existing component will get destroyed.
 *
 * @usageNotes
 *
 * ### Fine tune control
 *
 * You can control the component creation process by using the following optional attributes:
 *
 * * `ngComponentOutletInjector`: Optional custom {@link Injector} that will be used as parent for
 * the Component. Defaults to the injector of the current view container.
 *
 * * `ngComponentOutletContent`: Optional list of projectable nodes to insert into the content
 * section of the component, if exists.
 *
 * * `ngComponentOutletNgModuleFactory`: Optional module factory to allow dynamically loading other
 * module, then load a component from that module.
 *
 * ### Syntax
 *
 * Simple
 * ```
 * <ng-container *ngComponentOutlet="componentTypeExpression"></ng-container>
 * ```
 *
 * Customized injector/content
 * ```
 * <ng-container *ngComponentOutlet="componentTypeExpression;
 *                                   injector: injectorExpression;
 *                                   content: contentNodesExpression;">
 * </ng-container>
 * ```
 *
 * Customized ngModuleFactory
 * ```
 * <ng-container *ngComponentOutlet="componentTypeExpression;
 *                                   ngModuleFactory: moduleFactory;">
 * </ng-container>
 * ```
 *
 * ### A simple example
 *
 * {@example common/ngComponentOutlet/ts/module.ts region='SimpleExample'}
 *
 * A more complete example with additional options:
 *
 * {@example common/ngComponentOutlet/ts/module.ts region='CompleteExample'}
 *
 * @publicApi
 * @ngModule CommonModule
 */
export declare class NgComponentOutlet implements OnChanges, OnDestroy {
    private _viewContainerRef;
    ngComponentOutlet: Type<any>;
    ngComponentOutletInjector: Injector;
    ngComponentOutletContent: any[][];
    ngComponentOutletNgModuleFactory: NgModuleFactory<any>;
    private _componentRef;
    private _moduleRef;
    constructor(_viewContainerRef: ViewContainerRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgComponentOutlet, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgComponentOutlet, "[ngComponentOutlet]", never, { "ngComponentOutlet": "ngComponentOutlet"; "ngComponentOutletInjector": "ngComponentOutletInjector"; "ngComponentOutletContent": "ngComponentOutletContent"; "ngComponentOutletNgModuleFactory": "ngComponentOutletNgModuleFactory"; }, {}, never>;
}

/**
 * A [structural directive](guide/structural-directives) that renders
 * a template for each item in a collection.
 * The directive is placed on an element, which becomes the parent
 * of the cloned templates.
 *
 * The `ngForOf` directive is generally used in the
 * [shorthand form](guide/structural-directives#the-asterisk--prefix) `*ngFor`.
 * In this form, the template to be rendered for each iteration is the content
 * of an anchor element containing the directive.
 *
 * The following example shows the shorthand syntax with some options,
 * contained in an `<li>` element.
 *
 * ```
 * <li *ngFor="let item of items; index as i; trackBy: trackByFn">...</li>
 * ```
 *
 * The shorthand form expands into a long form that uses the `ngForOf` selector
 * on an `<ng-template>` element.
 * The content of the `<ng-template>` element is the `<li>` element that held the
 * short-form directive.
 *
 * Here is the expanded version of the short-form example.
 *
 * ```
 * <ng-template ngFor let-item [ngForOf]="items" let-i="index" [ngForTrackBy]="trackByFn">
 *   <li>...</li>
 * </ng-template>
 * ```
 *
 * Angular automatically expands the shorthand syntax as it compiles the template.
 * The context for each embedded view is logically merged to the current component
 * context according to its lexical position.
 *
 * When using the shorthand syntax, Angular allows only [one structural directive
 * on an element](guide/structural-directives#one-structural-directive-per-host-element).
 * If you want to iterate conditionally, for example,
 * put the `*ngIf` on a container element that wraps the `*ngFor` element.
 * For futher discussion, see
 * [Structural Directives](guide/structural-directives#one-per-element).
 *
 * @usageNotes
 *
 * ### Local variables
 *
 * `NgForOf` provides exported values that can be aliased to local variables.
 * For example:
 *
 *  ```
 * <li *ngFor="let user of users; index as i; first as isFirst">
 *    {{i}}/{{users.length}}. {{user}} <span *ngIf="isFirst">default</span>
 * </li>
 * ```
 *
 * The following exported values can be aliased to local variables:
 *
 * - `$implicit: T`: The value of the individual items in the iterable (`ngForOf`).
 * - `ngForOf: NgIterable<T>`: The value of the iterable expression. Useful when the expression is
 * more complex then a property access, for example when using the async pipe (`userStreams |
 * async`).
 * - `index: number`: The index of the current item in the iterable.
 * - `count: number`: The length of the iterable.
 * - `first: boolean`: True when the item is the first item in the iterable.
 * - `last: boolean`: True when the item is the last item in the iterable.
 * - `even: boolean`: True when the item has an even index in the iterable.
 * - `odd: boolean`: True when the item has an odd index in the iterable.
 *
 * ### Change propagation
 *
 * When the contents of the iterator changes, `NgForOf` makes the corresponding changes to the DOM:
 *
 * * When an item is added, a new instance of the template is added to the DOM.
 * * When an item is removed, its template instance is removed from the DOM.
 * * When items are reordered, their respective templates are reordered in the DOM.
 *
 * Angular uses object identity to track insertions and deletions within the iterator and reproduce
 * those changes in the DOM. This has important implications for animations and any stateful
 * controls that are present, such as `<input>` elements that accept user input. Inserted rows can
 * be animated in, deleted rows can be animated out, and unchanged rows retain any unsaved state
 * such as user input.
 * For more on animations, see [Transitions and Triggers](guide/transition-and-triggers).
 *
 * The identities of elements in the iterator can change while the data does not.
 * This can happen, for example, if the iterator is produced from an RPC to the server, and that
 * RPC is re-run. Even if the data hasn't changed, the second response produces objects with
 * different identities, and Angular must tear down the entire DOM and rebuild it (as if all old
 * elements were deleted and all new elements inserted).
 *
 * To avoid this expensive operation, you can customize the default tracking algorithm.
 * by supplying the `trackBy` option to `NgForOf`.
 * `trackBy` takes a function that has two arguments: `index` and `item`.
 * If `trackBy` is given, Angular tracks changes by the return value of the function.
 *
 * @see [Structural Directives](guide/structural-directives)
 * @ngModule CommonModule
 * @publicApi
 */
export declare class NgForOf<T, U extends NgIterable<T> = NgIterable<T>> implements DoCheck {
    private _viewContainer;
    private _template;
    private _differs;
    /**
     * The value of the iterable expression, which can be used as a
     * [template input variable](guide/structural-directives#template-input-variable).
     */
    set ngForOf(ngForOf: (U & NgIterable<T>) | undefined | null);
    /**
     * A function that defines how to track changes for items in the iterable.
     *
     * When items are added, moved, or removed in the iterable,
     * the directive must re-render the appropriate DOM nodes.
     * To minimize churn in the DOM, only nodes that have changed
     * are re-rendered.
     *
     * By default, the change detector assumes that
     * the object instance identifies the node in the iterable.
     * When this function is supplied, the directive uses
     * the result of calling this function to identify the item node,
     * rather than the identity of the object itself.
     *
     * The function receives two inputs,
     * the iteration index and the node object ID.
     */
    set ngForTrackBy(fn: TrackByFunction<T>);
    get ngForTrackBy(): TrackByFunction<T>;
    private _ngForOf;
    private _ngForOfDirty;
    private _differ;
    private _trackByFn;
    constructor(_viewContainer: ViewContainerRef, _template: TemplateRef<NgForOfContext<T, U>>, _differs: IterableDiffers);
    /**
     * A reference to the template that is stamped out for each item in the iterable.
     * @see [template reference variable](guide/template-syntax#template-reference-variables--var-)
     */
    set ngForTemplate(value: TemplateRef<NgForOfContext<T, U>>);
    /**
     * Applies the changes when needed.
     */
    ngDoCheck(): void;
    private _applyChanges;
    private _perViewChange;
    /**
     * Asserts the correct type of the context for the template that `NgForOf` will render.
     *
     * The presence of this method is a signal to the Ivy template type-check compiler that the
     * `NgForOf` structural directive renders its template with a specific context type.
     */
    static ngTemplateContextGuard<T, U extends NgIterable<T>>(dir: NgForOf<T, U>, ctx: any): ctx is NgForOfContext<T, U>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgForOf<any, any>, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgForOf<any, any>, "[ngFor][ngForOf]", never, { "ngForOf": "ngForOf"; "ngForTrackBy": "ngForTrackBy"; "ngForTemplate": "ngForTemplate"; }, {}, never>;
}

/**
 * @publicApi
 */
export declare class NgForOfContext<T, U extends NgIterable<T> = NgIterable<T>> {
    $implicit: T;
    ngForOf: U;
    index: number;
    count: number;
    constructor($implicit: T, ngForOf: U, index: number, count: number);
    get first(): boolean;
    get last(): boolean;
    get even(): boolean;
    get odd(): boolean;
}

/**
 * A structural directive that conditionally includes a template based on the value of
 * an expression coerced to Boolean.
 * When the expression evaluates to true, Angular renders the template
 * provided in a `then` clause, and when  false or null,
 * Angular renders the template provided in an optional `else` clause. The default
 * template for the `else` clause is blank.
 *
 * A [shorthand form](guide/structural-directives#the-asterisk--prefix) of the directive,
 * `*ngIf="condition"`, is generally used, provided
 * as an attribute of the anchor element for the inserted template.
 * Angular expands this into a more explicit version, in which the anchor element
 * is contained in an `<ng-template>` element.
 *
 * Simple form with shorthand syntax:
 *
 * ```
 * <div *ngIf="condition">Content to render when condition is true.</div>
 * ```
 *
 * Simple form with expanded syntax:
 *
 * ```
 * <ng-template [ngIf]="condition"><div>Content to render when condition is
 * true.</div></ng-template>
 * ```
 *
 * Form with an "else" block:
 *
 * ```
 * <div *ngIf="condition; else elseBlock">Content to render when condition is true.</div>
 * <ng-template #elseBlock>Content to render when condition is false.</ng-template>
 * ```
 *
 * Shorthand form with "then" and "else" blocks:
 *
 * ```
 * <div *ngIf="condition; then thenBlock else elseBlock"></div>
 * <ng-template #thenBlock>Content to render when condition is true.</ng-template>
 * <ng-template #elseBlock>Content to render when condition is false.</ng-template>
 * ```
 *
 * Form with storing the value locally:
 *
 * ```
 * <div *ngIf="condition as value; else elseBlock">{{value}}</div>
 * <ng-template #elseBlock>Content to render when value is null.</ng-template>
 * ```
 *
 * @usageNotes
 *
 * The `*ngIf` directive is most commonly used to conditionally show an inline template,
 * as seen in the following  example.
 * The default `else` template is blank.
 *
 * {@example common/ngIf/ts/module.ts region='NgIfSimple'}
 *
 * ### Showing an alternative template using `else`
 *
 * To display a template when `expression` evaluates to false, use an `else` template
 * binding as shown in the following example.
 * The `else` binding points to an `<ng-template>`  element labeled `#elseBlock`.
 * The template can be defined anywhere in the component view, but is typically placed right after
 * `ngIf` for readability.
 *
 * {@example common/ngIf/ts/module.ts region='NgIfElse'}
 *
 * ### Using an external `then` template
 *
 * In the previous example, the then-clause template is specified inline, as the content of the
 * tag that contains the `ngIf` directive. You can also specify a template that is defined
 * externally, by referencing a labeled `<ng-template>` element. When you do this, you can
 * change which template to use at runtime, as shown in the following example.
 *
 * {@example common/ngIf/ts/module.ts region='NgIfThenElse'}
 *
 * ### Storing a conditional result in a variable
 *
 * You might want to show a set of properties from the same object. If you are waiting
 * for asynchronous data, the object can be undefined.
 * In this case, you can use `ngIf` and store the result of the condition in a local
 * variable as shown in the the following example.
 *
 * {@example common/ngIf/ts/module.ts region='NgIfAs'}
 *
 * This code uses only one `AsyncPipe`, so only one subscription is created.
 * The conditional statement stores the result of `userStream|async` in the local variable `user`.
 * You can then bind the local `user` repeatedly.
 *
 * The conditional displays the data only if `userStream` returns a value,
 * so you don't need to use the
 * [safe-navigation-operator](guide/template-syntax#safe-navigation-operator) (`?.`)
 * to guard against null values when accessing properties.
 * You can display an alternative template while waiting for the data.
 *
 * ### Shorthand syntax
 *
 * The shorthand syntax `*ngIf` expands into two separate template specifications
 * for the "then" and "else" clauses. For example, consider the following shorthand statement,
 * that is meant to show a loading page while waiting for data to be loaded.
 *
 * ```
 * <div class="hero-list" *ngIf="heroes else loading">
 *  ...
 * </div>
 *
 * <ng-template #loading>
 *  <div>Loading...</div>
 * </ng-template>
 * ```
 *
 * You can see that the "else" clause references the `<ng-template>`
 * with the `#loading` label, and the template for the "then" clause
 * is provided as the content of the anchor element.
 *
 * However, when Angular expands the shorthand syntax, it creates
 * another `<ng-template>` tag, with `ngIf` and `ngIfElse` directives.
 * The anchor element containing the template for the "then" clause becomes
 * the content of this unlabeled `<ng-template>` tag.
 *
 * ```
 * <ng-template [ngIf]="heroes" [ngIfElse]="loading">
 *  <div class="hero-list">
 *   ...
 *  </div>
 * </ng-template>
 *
 * <ng-template #loading>
 *  <div>Loading...</div>
 * </ng-template>
 * ```
 *
 * The presence of the implicit template object has implications for the nesting of
 * structural directives. For more on this subject, see
 * [Structural Directives](https://angular.io/guide/structural-directives#one-per-element).
 *
 * @ngModule CommonModule
 * @publicApi
 */
export declare class NgIf<T = unknown> {
    private _viewContainer;
    private _context;
    private _thenTemplateRef;
    private _elseTemplateRef;
    private _thenViewRef;
    private _elseViewRef;
    constructor(_viewContainer: ViewContainerRef, templateRef: TemplateRef<NgIfContext<T>>);
    /**
     * The Boolean expression to evaluate as the condition for showing a template.
     */
    set ngIf(condition: T);
    /**
     * A template to show if the condition expression evaluates to true.
     */
    set ngIfThen(templateRef: TemplateRef<NgIfContext<T>> | null);
    /**
     * A template to show if the condition expression evaluates to false.
     */
    set ngIfElse(templateRef: TemplateRef<NgIfContext<T>> | null);
    private _updateView;
    /**
     * Assert the correct type of the expression bound to the `ngIf` input within the template.
     *
     * The presence of this static field is a signal to the Ivy template type check compiler that
     * when the `NgIf` structural directive renders its template, the type of the expression bound
     * to `ngIf` should be narrowed in some way. For `NgIf`, the binding expression itself is used to
     * narrow its type, which allows the strictNullChecks feature of TypeScript to work with `NgIf`.
     */
    static ngTemplateGuard_ngIf: 'binding';
    /**
     * Asserts the correct type of the context for the template that `NgIf` will render.
     *
     * The presence of this method is a signal to the Ivy template type-check compiler that the
     * `NgIf` structural directive renders its template with a specific context type.
     */
    static ngTemplateContextGuard<T>(dir: NgIf<T>, ctx: any): ctx is NgIfContext<NonNullable<T>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgIf<any>, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgIf<any>, "[ngIf]", never, { "ngIf": "ngIf"; "ngIfThen": "ngIfThen"; "ngIfElse": "ngIfElse"; }, {}, never>;
}

/**
 * @publicApi
 */
export declare class NgIfContext<T = unknown> {
    $implicit: T;
    ngIf: T;
}

/**
 * Returns the plural case based on the locale
 *
 * @publicApi
 */
export declare class NgLocaleLocalization extends NgLocalization {
    protected locale: string;
    constructor(locale: string);
    getPluralCategory(value: any, locale?: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgLocaleLocalization, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgLocaleLocalization>;
}


/**
 * @publicApi
 */
export declare abstract class NgLocalization {
    abstract getPluralCategory(value: any, locale?: string): string;
}

/**
 * @ngModule CommonModule
 *
 * @usageNotes
 * ```
 * <some-element [ngPlural]="value">
 *   <ng-template ngPluralCase="=0">there is nothing</ng-template>
 *   <ng-template ngPluralCase="=1">there is one</ng-template>
 *   <ng-template ngPluralCase="few">there are a few</ng-template>
 * </some-element>
 * ```
 *
 * @description
 *
 * Adds / removes DOM sub-trees based on a numeric value. Tailored for pluralization.
 *
 * Displays DOM sub-trees that match the switch expression value, or failing that, DOM sub-trees
 * that match the switch expression's pluralization category.
 *
 * To use this directive you must provide a container element that sets the `[ngPlural]` attribute
 * to a switch expression. Inner elements with a `[ngPluralCase]` will display based on their
 * expression:
 * - if `[ngPluralCase]` is set to a value starting with `=`, it will only display if the value
 *   matches the switch expression exactly,
 * - otherwise, the view will be treated as a "category match", and will only display if exact
 *   value matches aren't found and the value maps to its category for the defined locale.
 *
 * See http://cldr.unicode.org/index/cldr-spec/plural-rules
 *
 * @publicApi
 */
export declare class NgPlural {
    private _localization;
    private _switchValue;
    private _activeView;
    private _caseViews;
    constructor(_localization: NgLocalization);
    set ngPlural(value: number);
    addCase(value: string, switchView: SwitchView): void;
    private _updateView;
    private _clearViews;
    private _activateView;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgPlural, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgPlural, "[ngPlural]", never, { "ngPlural": "ngPlural"; }, {}, never>;
}

/**
 * @ngModule CommonModule
 *
 * @description
 *
 * Creates a view that will be added/removed from the parent {@link NgPlural} when the
 * given expression matches the plural expression according to CLDR rules.
 *
 * @usageNotes
 * ```
 * <some-element [ngPlural]="value">
 *   <ng-template ngPluralCase="=0">...</ng-template>
 *   <ng-template ngPluralCase="other">...</ng-template>
 * </some-element>
 *```
 *
 * See {@link NgPlural} for more details and example.
 *
 * @publicApi
 */
export declare class NgPluralCase {
    value: string;
    constructor(value: string, template: TemplateRef<Object>, viewContainer: ViewContainerRef, ngPlural: NgPlural);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgPluralCase, [{ attribute: "ngPluralCase"; }, null, null, { host: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgPluralCase, "[ngPluralCase]", never, {}, {}, never>;
}

/**
 * @ngModule CommonModule
 *
 * @usageNotes
 *
 * Set the font of the containing element to the result of an expression.
 *
 * ```
 * <some-element [ngStyle]="{'font-style': styleExp}">...</some-element>
 * ```
 *
 * Set the width of the containing element to a pixel value returned by an expression.
 *
 * ```
 * <some-element [ngStyle]="{'max-width.px': widthExp}">...</some-element>
 * ```
 *
 * Set a collection of style values using an expression that returns key-value pairs.
 *
 * ```
 * <some-element [ngStyle]="objExp">...</some-element>
 * ```
 *
 * @description
 *
 * An attribute directive that updates styles for the containing HTML element.
 * Sets one or more style properties, specified as colon-separated key-value pairs.
 * The key is a style name, with an optional `.<unit>` suffix
 * (such as 'top.px', 'font-style.em').
 * The value is an expression to be evaluated.
 * The resulting non-null value, expressed in the given unit,
 * is assigned to the given style property.
 * If the result of evaluation is null, the corresponding style is removed.
 *
 * @publicApi
 */
export declare class NgStyle implements DoCheck {
    private _ngEl;
    private _differs;
    private _renderer;
    private _ngStyle;
    private _differ;
    constructor(_ngEl: ElementRef, _differs: KeyValueDiffers, _renderer: Renderer2);
    set ngStyle(values: {
        [klass: string]: any;
    } | null);
    ngDoCheck(): void;
    private _setStyle;
    private _applyChanges;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgStyle, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgStyle, "[ngStyle]", never, { "ngStyle": "ngStyle"; }, {}, never>;
}

/**
 * @ngModule CommonModule
 *
 * @description
 * The `[ngSwitch]` directive on a container specifies an expression to match against.
 * The expressions to match are provided by `ngSwitchCase` directives on views within the container.
 * - Every view that matches is rendered.
 * - If there are no matches, a view with the `ngSwitchDefault` directive is rendered.
 * - Elements within the `[NgSwitch]` statement but outside of any `NgSwitchCase`
 * or `ngSwitchDefault` directive are preserved at the location.
 *
 * @usageNotes
 * Define a container element for the directive, and specify the switch expression
 * to match against as an attribute:
 *
 * ```
 * <container-element [ngSwitch]="switch_expression">
 * ```
 *
 * Within the container, `*ngSwitchCase` statements specify the match expressions
 * as attributes. Include `*ngSwitchDefault` as the final case.
 *
 * ```
 * <container-element [ngSwitch]="switch_expression">
 *    <some-element *ngSwitchCase="match_expression_1">...</some-element>
 * ...
 *    <some-element *ngSwitchDefault>...</some-element>
 * </container-element>
 * ```
 *
 * ### Usage Examples
 *
 * The following example shows how to use more than one case to display the same view:
 *
 * ```
 * <container-element [ngSwitch]="switch_expression">
 *   <!-- the same view can be shown in more than one case -->
 *   <some-element *ngSwitchCase="match_expression_1">...</some-element>
 *   <some-element *ngSwitchCase="match_expression_2">...</some-element>
 *   <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
 *   <!--default case when there are no matches -->
 *   <some-element *ngSwitchDefault>...</some-element>
 * </container-element>
 * ```
 *
 * The following example shows how cases can be nested:
 * ```
 * <container-element [ngSwitch]="switch_expression">
 *       <some-element *ngSwitchCase="match_expression_1">...</some-element>
 *       <some-element *ngSwitchCase="match_expression_2">...</some-element>
 *       <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
 *       <ng-container *ngSwitchCase="match_expression_3">
 *         <!-- use a ng-container to group multiple root nodes -->
 *         <inner-element></inner-element>
 *         <inner-other-element></inner-other-element>
 *       </ng-container>
 *       <some-element *ngSwitchDefault>...</some-element>
 *     </container-element>
 * ```
 *
 * @publicApi
 * @see `NgSwitchCase`
 * @see `NgSwitchDefault`
 * @see [Structural Directives](guide/structural-directives)
 *
 */
export declare class NgSwitch {
    private _defaultViews;
    private _defaultUsed;
    private _caseCount;
    private _lastCaseCheckIndex;
    private _lastCasesMatched;
    private _ngSwitch;
    set ngSwitch(newValue: any);
    private _updateDefaultCases;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgSwitch, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgSwitch, "[ngSwitch]", never, { "ngSwitch": "ngSwitch"; }, {}, never>;
}

/**
 * @ngModule CommonModule
 *
 * @description
 * Provides a switch case expression to match against an enclosing `ngSwitch` expression.
 * When the expressions match, the given `NgSwitchCase` template is rendered.
 * If multiple match expressions match the switch expression value, all of them are displayed.
 *
 * @usageNotes
 *
 * Within a switch container, `*ngSwitchCase` statements specify the match expressions
 * as attributes. Include `*ngSwitchDefault` as the final case.
 *
 * ```
 * <container-element [ngSwitch]="switch_expression">
 *   <some-element *ngSwitchCase="match_expression_1">...</some-element>
 *   ...
 *   <some-element *ngSwitchDefault>...</some-element>
 * </container-element>
 * ```
 *
 * Each switch-case statement contains an in-line HTML template or template reference
 * that defines the subtree to be selected if the value of the match expression
 * matches the value of the switch expression.
 *
 * Unlike JavaScript, which uses strict equality, Angular uses loose equality.
 * This means that the empty string, `""` matches 0.
 *
 * @publicApi
 * @see `NgSwitch`
 * @see `NgSwitchDefault`
 *
 */
export declare class NgSwitchCase implements DoCheck {
    private ngSwitch;
    private _view;
    /**
     * Stores the HTML template to be selected on match.
     */
    ngSwitchCase: any;
    constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<Object>, ngSwitch: NgSwitch);
    /**
     * Performs case matching. For internal use only.
     */
    ngDoCheck(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgSwitchCase, [null, null, { host: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgSwitchCase, "[ngSwitchCase]", never, { "ngSwitchCase": "ngSwitchCase"; }, {}, never>;
}

/**
 * @ngModule CommonModule
 *
 * @description
 *
 * Creates a view that is rendered when no `NgSwitchCase` expressions
 * match the `NgSwitch` expression.
 * This statement should be the final case in an `NgSwitch`.
 *
 * @publicApi
 * @see `NgSwitch`
 * @see `NgSwitchCase`
 *
 */
export declare class NgSwitchDefault {
    constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<Object>, ngSwitch: NgSwitch);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgSwitchDefault, [null, null, { host: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgSwitchDefault, "[ngSwitchDefault]", never, {}, {}, never>;
}

/**
 * @ngModule CommonModule
 *
 * @description
 *
 * Inserts an embedded view from a prepared `TemplateRef`.
 *
 * You can attach a context object to the `EmbeddedViewRef` by setting `[ngTemplateOutletContext]`.
 * `[ngTemplateOutletContext]` should be an object, the object's keys will be available for binding
 * by the local template `let` declarations.
 *
 * @usageNotes
 * ```
 * <ng-container *ngTemplateOutlet="templateRefExp; context: contextExp"></ng-container>
 * ```
 *
 * Using the key `$implicit` in the context object will set its value as default.
 *
 * ### Example
 *
 * {@example common/ngTemplateOutlet/ts/module.ts region='NgTemplateOutlet'}
 *
 * @publicApi
 */
export declare class NgTemplateOutlet implements OnChanges {
    private _viewContainerRef;
    private _viewRef;
    /**
     * A context object to attach to the {@link EmbeddedViewRef}. This should be an
     * object, the object's keys will be available for binding by the local template `let`
     * declarations.
     * Using the key `$implicit` in the context object will set its value as default.
     */
    ngTemplateOutletContext: Object | null;
    /**
     * A string defining the template reference and optionally the context object for the template.
     */
    ngTemplateOutlet: TemplateRef<any> | null;
    constructor(_viewContainerRef: ViewContainerRef);
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * We need to re-create existing embedded view if:
     * - templateRef has changed
     * - context has changes
     *
     * We mark context object as changed when the corresponding object
     * shape changes (new properties are added or existing properties are removed).
     * In other words we consider context with the same properties as "the same" even
     * if object reference changes (see https://github.com/angular/angular/issues/13407).
     */
    private _shouldRecreateView;
    private _hasContextShapeChanged;
    private _updateExistingContext;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgTemplateOutlet, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgTemplateOutlet, "[ngTemplateOutlet]", never, { "ngTemplateOutletContext": "ngTemplateOutletContext"; "ngTemplateOutlet": "ngTemplateOutlet"; }, {}, never>;
}


/**
 * Format styles that can be used to represent numbers.
 * @see `getLocaleNumberFormat()`.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare enum NumberFormatStyle {
    Decimal = 0,
    Percent = 1,
    Currency = 2,
    Scientific = 3
}

/**
 * Symbols that can be used to replace placeholders in number patterns.
 * Examples are based on `en-US` values.
 *
 * @see `getLocaleNumberSymbol()`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare enum NumberSymbol {
    /**
     * Decimal separator.
     * For `en-US`, the dot character.
     * Example : 2,345`.`67
     */
    Decimal = 0,
    /**
     * Grouping separator, typically for thousands.
     * For `en-US`, the comma character.
     * Example: 2`,`345.67
     */
    Group = 1,
    /**
     * List-item separator.
     * Example: "one, two, and three"
     */
    List = 2,
    /**
     * Sign for percentage (out of 100).
     * Example: 23.4%
     */
    PercentSign = 3,
    /**
     * Sign for positive numbers.
     * Example: +23
     */
    PlusSign = 4,
    /**
     * Sign for negative numbers.
     * Example: -23
     */
    MinusSign = 5,
    /**
     * Computer notation for exponential value (n times a power of 10).
     * Example: 1.2E3
     */
    Exponential = 6,
    /**
     * Human-readable format of exponential.
     * Example: 1.2x103
     */
    SuperscriptingExponent = 7,
    /**
     * Sign for permille (out of 1000).
     * Example: 23.4‰
     */
    PerMille = 8,
    /**
     * Infinity, can be used with plus and minus.
     * Example: ∞, +∞, -∞
     */
    Infinity = 9,
    /**
     * Not a number.
     * Example: NaN
     */
    NaN = 10,
    /**
     * Symbol used between time units.
     * Example: 10:52
     */
    TimeSeparator = 11,
    /**
     * Decimal separator for currency values (fallback to `Decimal`).
     * Example: $2,345.67
     */
    CurrencyDecimal = 12,
    /**
     * Group separator for currency values (fallback to `Group`).
     * Example: $2,345.67
     */
    CurrencyGroup = 13
}

/**
 * @description
 * A {@link LocationStrategy} used to configure the {@link Location} service to
 * represent its state in the
 * [path](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax) of the
 * browser's URL.
 *
 * If you're using `PathLocationStrategy`, you must provide a {@link APP_BASE_HREF}
 * or add a base element to the document. This URL prefix that will be preserved
 * when generating and recognizing URLs.
 *
 * For instance, if you provide an `APP_BASE_HREF` of `'/my/app'` and call
 * `location.go('/foo')`, the browser's URL will become
 * `example.com/my/app/foo`.
 *
 * Similarly, if you add `<base href='/my/app'/>` to the document and call
 * `location.go('/foo')`, the browser's URL will become
 * `example.com/my/app/foo`.
 *
 * @usageNotes
 *
 * ### Example
 *
 * {@example common/location/ts/path_location_component.ts region='LocationComponent'}
 *
 * @publicApi
 */
export declare class PathLocationStrategy extends LocationStrategy {
    private _platformLocation;
    private _baseHref;
    constructor(_platformLocation: PlatformLocation, href?: string);
    onPopState(fn: LocationChangeListener): void;
    getBaseHref(): string;
    prepareExternalUrl(internal: string): string;
    path(includeHash?: boolean): string;
    pushState(state: any, title: string, url: string, queryParams: string): void;
    replaceState(state: any, title: string, url: string, queryParams: string): void;
    forward(): void;
    back(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PathLocationStrategy, [null, { optional: true; }]>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<PathLocationStrategy>;
}

/**
 * @ngModule CommonModule
 * @description
 *
 * Transforms a number to a percentage
 * string, formatted according to locale rules that determine group sizing and
 * separator, decimal-point character, and other locale-specific
 * configurations.
 *
 * @see `formatPercent()`
 *
 * @usageNotes
 * The following code shows how the pipe transforms numbers
 * into text strings, according to various format specifications,
 * where the caller's default locale is `en-US`.
 *
 * <code-example path="common/pipes/ts/percent_pipe.ts" region='PercentPipe'></code-example>
 *
 * @publicApi
 */
export declare class PercentPipe implements PipeTransform {
    private _locale;
    constructor(_locale: string);
    /**
     *
     * @param value The number to be formatted as a percentage.
     * @param digitsInfo Decimal representation options, specified by a string
     * in the following format:<br>
     * <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>.
     *   - `minIntegerDigits`: The minimum number of integer digits before the decimal point.
     * Default is `1`.
     *   - `minFractionDigits`: The minimum number of digits after the decimal point.
     * Default is `0`.
     *   - `maxFractionDigits`: The maximum number of digits after the decimal point.
     * Default is `0`.
     * @param locale A locale code for the locale format rules to use.
     * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
     * See [Setting your app locale](guide/i18n#setting-up-the-locale-of-your-app).
     */
    transform(value: any, digitsInfo?: string, locale?: string): string | null;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PercentPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<PercentPipe, "percent">;
}

/**
 * This class should not be used directly by an application developer. Instead, use
 * {@link Location}.
 *
 * `PlatformLocation` encapsulates all calls to DOM APIs, which allows the Router to be
 * platform-agnostic.
 * This means that we can have different implementation of `PlatformLocation` for the different
 * platforms that Angular supports. For example, `@angular/platform-browser` provides an
 * implementation specific to the browser environment, while `@angular/platform-server` provides
 * one suitable for use with server-side rendering.
 *
 * The `PlatformLocation` class is used directly by all implementations of {@link LocationStrategy}
 * when they need to interact with the DOM APIs like pushState, popState, etc.
 *
 * {@link LocationStrategy} in turn is used by the {@link Location} service which is used directly
 * by the {@link Router} in order to navigate between routes. Since all interactions between {@link
 * Router} /
 * {@link Location} / {@link LocationStrategy} and DOM APIs flow through the `PlatformLocation`
 * class, they are all platform-agnostic.
 *
 * @publicApi
 */
export declare abstract class PlatformLocation {
    abstract getBaseHrefFromDOM(): string;
    abstract getState(): unknown;
    abstract onPopState(fn: LocationChangeListener): void;
    abstract onHashChange(fn: LocationChangeListener): void;
    abstract get href(): string;
    abstract get protocol(): string;
    abstract get hostname(): string;
    abstract get port(): string;
    abstract get pathname(): string;
    abstract get search(): string;
    abstract get hash(): string;
    abstract replaceState(state: any, title: string, url: string): void;
    abstract pushState(state: any, title: string, url: string): void;
    abstract forward(): void;
    abstract back(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PlatformLocation, never>;
}

/**
 * Plurality cases used for translating plurals to different languages.
 *
 * @see `NgPlural`
 * @see `NgPluralCase`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare enum Plural {
    Zero = 0,
    One = 1,
    Two = 2,
    Few = 3,
    Many = 4,
    Other = 5
}

/** @publicApi */
export declare interface PopStateEvent {
    pop?: boolean;
    state?: any;
    type?: string;
    url?: string;
}


/**
 * Register global data to be used internally by Angular. See the
 * ["I18n guide"](guide/i18n#i18n-pipes) to know how to import additional locale data.
 *
 * The signature registerLocaleData(data: any, extraData?: any) is deprecated since v5.1
 *
 * @publicApi
 */
export declare function registerLocaleData(data: any, localeId?: string | any, extraData?: any): void;

/**
 * @ngModule CommonModule
 * @description
 *
 * Creates a new `Array` or `String` containing a subset (slice) of the elements.
 *
 * @usageNotes
 *
 * All behavior is based on the expected behavior of the JavaScript API `Array.prototype.slice()`
 * and `String.prototype.slice()`.
 *
 * When operating on an `Array`, the returned `Array` is always a copy even when all
 * the elements are being returned.
 *
 * When operating on a blank value, the pipe returns the blank value.
 *
 * ### List Example
 *
 * This `ngFor` example:
 *
 * {@example common/pipes/ts/slice_pipe.ts region='SlicePipe_list'}
 *
 * produces the following:
 *
 * ```html
 * <li>b</li>
 * <li>c</li>
 * ```
 *
 * ### String Examples
 *
 * {@example common/pipes/ts/slice_pipe.ts region='SlicePipe_string'}
 *
 * @publicApi
 */
export declare class SlicePipe implements PipeTransform {
    /**
     * @param value a list or a string to be sliced.
     * @param start the starting index of the subset to return:
     *   - **a positive integer**: return the item at `start` index and all items after
     *     in the list or string expression.
     *   - **a negative integer**: return the item at `start` index from the end and all items after
     *     in the list or string expression.
     *   - **if positive and greater than the size of the expression**: return an empty list or
     * string.
     *   - **if negative and greater than the size of the expression**: return entire list or string.
     * @param end the ending index of the subset to return:
     *   - **omitted**: return all items until the end.
     *   - **if positive**: return all items before `end` index of the list or string.
     *   - **if negative**: return all items before `end` index from the end of the list or string.
     */
    transform<T>(value: ReadonlyArray<T>, start: number, end?: number): Array<T>;
    transform(value: string, start: number, end?: number): string;
    transform(value: null, start: number, end?: number): null;
    transform(value: undefined, start: number, end?: number): undefined;
    private supports;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SlicePipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<SlicePipe, "slice">;
}

declare class SwitchView {
    private _viewContainerRef;
    private _templateRef;
    private _created;
    constructor(_viewContainerRef: ViewContainerRef, _templateRef: TemplateRef<Object>);
    create(): void;
    destroy(): void;
    enforceState(created: boolean): void;
}

/**
 * Represents a time value with hours and minutes.
 *
 * @publicApi
 */
export declare type Time = {
    hours: number;
    minutes: number;
};

/**
 * Transforms text to title case.
 * Capitalizes the first letter of each word and transforms the
 * rest of the word to lower case.
 * Words are delimited by any whitespace character, such as a space, tab, or line-feed character.
 *
 * @see `LowerCasePipe`
 * @see `UpperCasePipe`
 *
 * @usageNotes
 * The following example shows the result of transforming various strings into title case.
 *
 * <code-example path="common/pipes/ts/titlecase_pipe.ts" region='TitleCasePipe'></code-example>
 *
 * @ngModule CommonModule
 * @publicApi
 */
export declare class TitleCasePipe implements PipeTransform {
    /**
     * @param value The string to transform to title case.
     */
    transform(value: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TitleCasePipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<TitleCasePipe, "titlecase">;
}

/**
 * String widths available for translations.
 * The specific character widths are locale-specific.
 * Examples are given for the word "Sunday" in English.
 *
 * @publicApi
 */
export declare enum TranslationWidth {
    /** 1 character for `en-US`. For example: 'S' */
    Narrow = 0,
    /** 3 characters for `en-US`. For example: 'Sun' */
    Abbreviated = 1,
    /** Full length for `en-US`. For example: "Sunday" */
    Wide = 2,
    /** 2 characters for `en-US`, For example: "Su" */
    Short = 3
}

/**
 * Transforms text to all upper case.
 * @see `LowerCasePipe`
 * @see `TitleCasePipe`
 *
 * @ngModule CommonModule
 * @publicApi
 */
export declare class UpperCasePipe implements PipeTransform {
    /**
     * @param value The string to transform to upper case.
     */
    transform(value: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UpperCasePipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<UpperCasePipe, "uppercase">;
}

/**
 * @publicApi
 */
export declare const VERSION: Version;

/**
 * Defines a scroll position manager. Implemented by `BrowserViewportScroller`.
 *
 * @publicApi
 */
export declare abstract class ViewportScroller {
    /** @nocollapse */
    static ɵprov: never;
    /**
     * Configures the top offset used when scrolling to an anchor.
     * @param offset A position in screen coordinates (a tuple with x and y values)
     * or a function that returns the top offset position.
     *
     */
    abstract setOffset(offset: [number, number] | (() => [number, number])): void;
    /**
     * Retrieves the current scroll position.
     * @returns A position in screen coordinates (a tuple with x and y values).
     */
    abstract getScrollPosition(): [number, number];
    /**
     * Scrolls to a specified position.
     * @param position A position in screen coordinates (a tuple with x and y values).
     */
    abstract scrollToPosition(position: [number, number]): void;
    /**
     * Scrolls to an anchor element.
     * @param anchor The ID of the anchor element.
     */
    abstract scrollToAnchor(anchor: string): void;
    /**
     * Disables automatic scroll restoration provided by the browser.
     * See also [window.history.scrollRestoration
     * info](https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration).
     */
    abstract setHistoryScrollRestoration(scrollRestoration: 'auto' | 'manual'): void;
}

/**
 * The value for each day of the week, based on the `en-US` locale
 *
 * @publicApi
 */
export declare enum WeekDay {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6
}

export declare function ɵangular_packages_common_common_a(): ɵBrowserPlatformLocation;

export declare function ɵangular_packages_common_common_b(): ɵBrowserPlatformLocation;

export declare function ɵangular_packages_common_common_c(): Location;

export declare function ɵangular_packages_common_common_d(platformLocation: PlatformLocation): PathLocationStrategy;

/**
 * A collection of Angular directives that are likely to be used in each and every Angular
 * application.
 */
export declare const ɵangular_packages_common_common_e: Provider[];

/**
 * A collection of Angular pipes that are likely to be used in each and every application.
 */
export declare const ɵangular_packages_common_common_f: (typeof AsyncPipe | typeof SlicePipe | typeof DecimalPipe | typeof PercentPipe | typeof CurrencyPipe | typeof DatePipe | typeof I18nPluralPipe | typeof I18nSelectPipe | typeof KeyValuePipe)[];

/**
 * `PlatformLocation` encapsulates all of the direct calls to platform APIs.
 * This class should not be used directly by an application developer. Instead, use
 * {@link Location}.
 */
export declare class ɵBrowserPlatformLocation extends PlatformLocation {
    private _doc;
    readonly location: Location;
    private _history;
    constructor(_doc: any);
    getBaseHrefFromDOM(): string;
    onPopState(fn: LocationChangeListener): void;
    onHashChange(fn: LocationChangeListener): void;
    get href(): string;
    get protocol(): string;
    get hostname(): string;
    get port(): string;
    get pathname(): string;
    get search(): string;
    get hash(): string;
    set pathname(newPath: string);
    pushState(state: any, title: string, url: string): void;
    replaceState(state: any, title: string, url: string): void;
    forward(): void;
    back(): void;
    getState(): unknown;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵBrowserPlatformLocation, never>;
}

/**
 * Provides DOM operations in an environment-agnostic way.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
export declare abstract class ɵDomAdapter {
    abstract getProperty(el: Element, name: string): any;
    abstract dispatchEvent(el: any, evt: any): any;
    abstract log(error: any): any;
    abstract logGroup(error: any): any;
    abstract logGroupEnd(): any;
    abstract remove(el: any): Node;
    abstract createElement(tagName: any, doc?: any): HTMLElement;
    abstract createHtmlDocument(): HTMLDocument;
    abstract getDefaultDocument(): Document;
    abstract isElementNode(node: any): boolean;
    abstract isShadowRoot(node: any): boolean;
    abstract onAndCancel(el: any, evt: any, listener: any): Function;
    abstract supportsDOMEvents(): boolean;
    abstract getGlobalEventTarget(doc: Document, target: string): any;
    abstract getHistory(): History;
    abstract getLocation(): any; /** This is the ambient Location definition, NOT Location from @angular/common.  */
    abstract getBaseHref(doc: Document): string | null;
    abstract resetBaseElement(): void;
    abstract getUserAgent(): string;
    abstract performanceNow(): number;
    abstract supportsCookies(): boolean;
    abstract getCookie(name: string): string | null;
}


export declare function ɵgetDOM(): ɵDomAdapter;

/**
 * Provides an empty implementation of the viewport scroller. This will
 * live in @angular/common as it will be used by both platform-server and platform-webworker.
 */
export declare class ɵNullViewportScroller implements ViewportScroller {
    /**
     * Empty implementation
     */
    setOffset(offset: [number, number] | (() => [number, number])): void;
    /**
     * Empty implementation
     */
    getScrollPosition(): [number, number];
    /**
     * Empty implementation
     */
    scrollToPosition(position: [number, number]): void;
    /**
     * Empty implementation
     */
    scrollToAnchor(anchor: string): void;
    /**
     * Empty implementation
     */
    setHistoryScrollRestoration(scrollRestoration: 'auto' | 'manual'): void;
}


export declare function ɵparseCookieValue(cookieStr: string, name: string): string | null;


export declare const ɵPLATFORM_BROWSER_ID = "browser";

export declare const ɵPLATFORM_SERVER_ID = "server";

export declare const ɵPLATFORM_WORKER_APP_ID = "browserWorkerApp";

export declare const ɵPLATFORM_WORKER_UI_ID = "browserWorkerUi";

export declare function ɵsetRootDomAdapter(adapter: ɵDomAdapter): void;

export { }

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmQudHMiLCJzb3VyY2VzIjpbImNvbW1vbi5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgQW5ndWxhciB2OS4xLjlcbiAqIChjKSAyMDEwLTIwMjAgR29vZ2xlIExMQy4gaHR0cHM6Ly9hbmd1bGFyLmlvL1xuICogTGljZW5zZTogTUlUXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9DaGVjayB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEl0ZXJhYmxlRGlmZmVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLZXlWYWx1ZURpZmZlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdJdGVyYWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZUZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uTGlrZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmFja0J5RnVuY3Rpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBWZXJzaW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBBIHByZWRlZmluZWQgW0RJIHRva2VuXShndWlkZS9nbG9zc2FyeSNkaS10b2tlbikgZm9yIHRoZSBiYXNlIGhyZWZcclxuICogdG8gYmUgdXNlZCB3aXRoIHRoZSBgUGF0aExvY2F0aW9uU3RyYXRlZ3lgLlxyXG4gKiBUaGUgYmFzZSBocmVmIGlzIHRoZSBVUkwgcHJlZml4IHRoYXQgc2hvdWxkIGJlIHByZXNlcnZlZCB3aGVuIGdlbmVyYXRpbmdcclxuICogYW5kIHJlY29nbml6aW5nIFVSTHMuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqXHJcbiAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBzaG93cyBob3cgdG8gdXNlIHRoaXMgdG9rZW4gdG8gY29uZmlndXJlIHRoZSByb290IGFwcCBpbmplY3RvclxyXG4gKiB3aXRoIGEgYmFzZSBocmVmIHZhbHVlLCBzbyB0aGF0IHRoZSBESSBmcmFtZXdvcmsgY2FuIHN1cHBseSB0aGUgZGVwZW5kZW5jeSBhbnl3aGVyZSBpbiB0aGUgYXBwLlxyXG4gKlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7Q29tcG9uZW50LCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbiAqIGltcG9ydCB7QVBQX0JBU0VfSFJFRn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuICpcclxuICogQE5nTW9kdWxlKHtcclxuICogICBwcm92aWRlcnM6IFt7cHJvdmlkZTogQVBQX0JBU0VfSFJFRiwgdXNlVmFsdWU6ICcvbXkvYXBwJ31dXHJcbiAqIH0pXHJcbiAqIGNsYXNzIEFwcE1vZHVsZSB7fVxyXG4gKiBgYGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgQVBQX0JBU0VfSFJFRjogSW5qZWN0aW9uVG9rZW48c3RyaW5nPjtcclxuXHJcbi8qKlxyXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBVbndyYXBzIGEgdmFsdWUgZnJvbSBhbiBhc3luY2hyb25vdXMgcHJpbWl0aXZlLlxyXG4gKlxyXG4gKiBUaGUgYGFzeW5jYCBwaXBlIHN1YnNjcmliZXMgdG8gYW4gYE9ic2VydmFibGVgIG9yIGBQcm9taXNlYCBhbmQgcmV0dXJucyB0aGUgbGF0ZXN0IHZhbHVlIGl0IGhhc1xyXG4gKiBlbWl0dGVkLiBXaGVuIGEgbmV3IHZhbHVlIGlzIGVtaXR0ZWQsIHRoZSBgYXN5bmNgIHBpcGUgbWFya3MgdGhlIGNvbXBvbmVudCB0byBiZSBjaGVja2VkIGZvclxyXG4gKiBjaGFuZ2VzLiBXaGVuIHRoZSBjb21wb25lbnQgZ2V0cyBkZXN0cm95ZWQsIHRoZSBgYXN5bmNgIHBpcGUgdW5zdWJzY3JpYmVzIGF1dG9tYXRpY2FsbHkgdG8gYXZvaWRcclxuICogcG90ZW50aWFsIG1lbW9yeSBsZWFrcy5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICpcclxuICogIyMjIEV4YW1wbGVzXHJcbiAqXHJcbiAqIFRoaXMgZXhhbXBsZSBiaW5kcyBhIGBQcm9taXNlYCB0byB0aGUgdmlldy4gQ2xpY2tpbmcgdGhlIGBSZXNvbHZlYCBidXR0b24gcmVzb2x2ZXMgdGhlXHJcbiAqIHByb21pc2UuXHJcbiAqXHJcbiAqIHtAZXhhbXBsZSBjb21tb24vcGlwZXMvdHMvYXN5bmNfcGlwZS50cyByZWdpb249J0FzeW5jUGlwZVByb21pc2UnfVxyXG4gKlxyXG4gKiBJdCdzIGFsc28gcG9zc2libGUgdG8gdXNlIGBhc3luY2Agd2l0aCBPYnNlcnZhYmxlcy4gVGhlIGV4YW1wbGUgYmVsb3cgYmluZHMgdGhlIGB0aW1lYCBPYnNlcnZhYmxlXHJcbiAqIHRvIHRoZSB2aWV3LiBUaGUgT2JzZXJ2YWJsZSBjb250aW51b3VzbHkgdXBkYXRlcyB0aGUgdmlldyB3aXRoIHRoZSBjdXJyZW50IHRpbWUuXHJcbiAqXHJcbiAqIHtAZXhhbXBsZSBjb21tb24vcGlwZXMvdHMvYXN5bmNfcGlwZS50cyByZWdpb249J0FzeW5jUGlwZU9ic2VydmFibGUnfVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBc3luY1BpcGUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgcHJpdmF0ZSBfcmVmO1xyXG4gICAgcHJpdmF0ZSBfbGF0ZXN0VmFsdWU7XHJcbiAgICBwcml2YXRlIF9sYXRlc3RSZXR1cm5lZFZhbHVlO1xyXG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uO1xyXG4gICAgcHJpdmF0ZSBfb2JqO1xyXG4gICAgcHJpdmF0ZSBfc3RyYXRlZ3k7XHJcbiAgICBjb25zdHJ1Y3RvcihfcmVmOiBDaGFuZ2VEZXRlY3RvclJlZik7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgdHJhbnNmb3JtPFQ+KG9iajogbnVsbCk6IG51bGw7XHJcbiAgICB0cmFuc2Zvcm08VD4ob2JqOiB1bmRlZmluZWQpOiB1bmRlZmluZWQ7XHJcbiAgICB0cmFuc2Zvcm08VD4ob2JqOiBPYnNlcnZhYmxlPFQ+IHwgbnVsbCB8IHVuZGVmaW5lZCk6IFQgfCBudWxsO1xyXG4gICAgdHJhbnNmb3JtPFQ+KG9iajogUHJvbWlzZTxUPiB8IG51bGwgfCB1bmRlZmluZWQpOiBUIHwgbnVsbDtcclxuICAgIHByaXZhdGUgX3N1YnNjcmliZTtcclxuICAgIHByaXZhdGUgX3NlbGVjdFN0cmF0ZWd5O1xyXG4gICAgcHJpdmF0ZSBfZGlzcG9zZTtcclxuICAgIHByaXZhdGUgX3VwZGF0ZUxhdGVzdFZhbHVlO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEV4cG9ydHMgYWxsIHRoZSBiYXNpYyBBbmd1bGFyIGRpcmVjdGl2ZXMgYW5kIHBpcGVzLFxyXG4gKiBzdWNoIGFzIGBOZ0lmYCwgYE5nRm9yT2ZgLCBgRGVjaW1hbFBpcGVgLCBhbmQgc28gb24uXHJcbiAqIFJlLWV4cG9ydGVkIGJ5IGBCcm93c2VyTW9kdWxlYCwgd2hpY2ggaXMgaW5jbHVkZWQgYXV0b21hdGljYWxseSBpbiB0aGUgcm9vdFxyXG4gKiBgQXBwTW9kdWxlYCB3aGVuIHlvdSBjcmVhdGUgYSBuZXcgYXBwIHdpdGggdGhlIENMSSBgbmV3YCBjb21tYW5kLlxyXG4gKlxyXG4gKiAqIFRoZSBgcHJvdmlkZXJzYCBvcHRpb25zIGNvbmZpZ3VyZSB0aGUgTmdNb2R1bGUncyBpbmplY3RvciB0byBwcm92aWRlXHJcbiAqIGxvY2FsaXphdGlvbiBkZXBlbmRlbmNpZXMgdG8gbWVtYmVycy5cclxuICogKiBUaGUgYGV4cG9ydHNgIG9wdGlvbnMgbWFrZSB0aGUgZGVjbGFyZWQgZGlyZWN0aXZlcyBhbmQgcGlwZXMgYXZhaWxhYmxlIGZvciBpbXBvcnRcclxuICogYnkgb3RoZXIgTmdNb2R1bGVzLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDb21tb25Nb2R1bGUge1xyXG59XHJcblxyXG4vKipcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogVHJhbnNmb3JtcyBhIG51bWJlciB0byBhIGN1cnJlbmN5IHN0cmluZywgZm9ybWF0dGVkIGFjY29yZGluZyB0byBsb2NhbGUgcnVsZXNcclxuICogdGhhdCBkZXRlcm1pbmUgZ3JvdXAgc2l6aW5nIGFuZCBzZXBhcmF0b3IsIGRlY2ltYWwtcG9pbnQgY2hhcmFjdGVyLFxyXG4gKiBhbmQgb3RoZXIgbG9jYWxlLXNwZWNpZmljIGNvbmZpZ3VyYXRpb25zLlxyXG4gKlxyXG4gKiB7QGEgY3VycmVuY3ktY29kZS1kZXByZWNhdGlvbn1cclxuICogPGRpdiBjbGFzcz1cImFsZXJ0IGlzLWhlbHBmdWxcIj5cclxuICpcclxuICogKipEZXByZWNhdGlvbiBub3RpY2U6KipcclxuICpcclxuICogVGhlIGRlZmF1bHQgY3VycmVuY3kgY29kZSBpcyBjdXJyZW50bHkgYWx3YXlzIGBVU0RgIGJ1dCB0aGlzIGlzIGRlcHJlY2F0ZWQgZnJvbSB2OS5cclxuICpcclxuICogKipJbiB2MTEgdGhlIGRlZmF1bHQgY3VycmVuY3kgY29kZSB3aWxsIGJlIHRha2VuIGZyb20gdGhlIGN1cnJlbnQgbG9jYWxlIGlkZW50aWZpZWQgYnlcclxuICogdGhlIGBMT0NBTF9JRGAgdG9rZW4uIFNlZSB0aGUgW2kxOG4gZ3VpZGVdKGd1aWRlL2kxOG4jc2V0dGluZy11cC10aGUtbG9jYWxlLW9mLXlvdXItYXBwKSBmb3JcclxuICogbW9yZSBpbmZvcm1hdGlvbi4qKlxyXG4gKlxyXG4gKiBJZiB5b3UgbmVlZCB0aGUgcHJldmlvdXMgYmVoYXZpb3IgdGhlbiBzZXQgaXQgYnkgY3JlYXRpbmcgYSBgREVGQVVMVF9DVVJSRU5DWV9DT0RFYCBwcm92aWRlciBpblxyXG4gKiB5b3VyIGFwcGxpY2F0aW9uIGBOZ01vZHVsZWA6XHJcbiAqXHJcbiAqIGBgYHRzXHJcbiAqIHtwcm92aWRlOiBERUZBVUxUX0NVUlJFTkNZX0NPREUsIHVzZVZhbHVlOiAnVVNEJ31cclxuICogYGBgXHJcbiAqXHJcbiAqIDwvZGl2PlxyXG4gKlxyXG4gKiBAc2VlIGBnZXRDdXJyZW5jeVN5bWJvbCgpYFxyXG4gKiBAc2VlIGBmb3JtYXRDdXJyZW5jeSgpYFxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiBUaGUgZm9sbG93aW5nIGNvZGUgc2hvd3MgaG93IHRoZSBwaXBlIHRyYW5zZm9ybXMgbnVtYmVyc1xyXG4gKiBpbnRvIHRleHQgc3RyaW5ncywgYWNjb3JkaW5nIHRvIHZhcmlvdXMgZm9ybWF0IHNwZWNpZmljYXRpb25zLFxyXG4gKiB3aGVyZSB0aGUgY2FsbGVyJ3MgZGVmYXVsdCBsb2NhbGUgaXMgYGVuLVVTYC5cclxuICpcclxuICogPGNvZGUtZXhhbXBsZSBwYXRoPVwiY29tbW9uL3BpcGVzL3RzL2N1cnJlbmN5X3BpcGUudHNcIiByZWdpb249J0N1cnJlbmN5UGlwZSc+PC9jb2RlLWV4YW1wbGU+XHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEN1cnJlbmN5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgcHJpdmF0ZSBfbG9jYWxlO1xyXG4gICAgcHJpdmF0ZSBfZGVmYXVsdEN1cnJlbmN5Q29kZTtcclxuICAgIGNvbnN0cnVjdG9yKF9sb2NhbGU6IHN0cmluZywgX2RlZmF1bHRDdXJyZW5jeUNvZGU/OiBzdHJpbmcpO1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBudW1iZXIgdG8gYmUgZm9ybWF0dGVkIGFzIGN1cnJlbmN5LlxyXG4gICAgICogQHBhcmFtIGN1cnJlbmN5Q29kZSBUaGUgW0lTTyA0MjE3XShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fNDIxNykgY3VycmVuY3kgY29kZSxcclxuICAgICAqIHN1Y2ggYXMgYFVTRGAgZm9yIHRoZSBVUyBkb2xsYXIgYW5kIGBFVVJgIGZvciB0aGUgZXVyby4gVGhlIGRlZmF1bHQgY3VycmVuY3kgY29kZSBjYW4gYmVcclxuICAgICAqIGNvbmZpZ3VyZWQgdXNpbmcgdGhlIGBERUZBVUxUX0NVUlJFTkNZX0NPREVgIGluamVjdGlvbiB0b2tlbi5cclxuICAgICAqIEBwYXJhbSBkaXNwbGF5IFRoZSBmb3JtYXQgZm9yIHRoZSBjdXJyZW5jeSBpbmRpY2F0b3IuIE9uZSBvZiB0aGUgZm9sbG93aW5nOlxyXG4gICAgICogICAtIGBjb2RlYDogU2hvdyB0aGUgY29kZSAoc3VjaCBhcyBgVVNEYCkuXHJcbiAgICAgKiAgIC0gYHN5bWJvbGAoZGVmYXVsdCk6IFNob3cgdGhlIHN5bWJvbCAoc3VjaCBhcyBgJGApLlxyXG4gICAgICogICAtIGBzeW1ib2wtbmFycm93YDogVXNlIHRoZSBuYXJyb3cgc3ltYm9sIGZvciBsb2NhbGVzIHRoYXQgaGF2ZSB0d28gc3ltYm9scyBmb3IgdGhlaXJcclxuICAgICAqIGN1cnJlbmN5LlxyXG4gICAgICogRm9yIGV4YW1wbGUsIHRoZSBDYW5hZGlhbiBkb2xsYXIgQ0FEIGhhcyB0aGUgc3ltYm9sIGBDQSRgIGFuZCB0aGUgc3ltYm9sLW5hcnJvdyBgJGAuIElmIHRoZVxyXG4gICAgICogbG9jYWxlIGhhcyBubyBuYXJyb3cgc3ltYm9sLCB1c2VzIHRoZSBzdGFuZGFyZCBzeW1ib2wgZm9yIHRoZSBsb2NhbGUuXHJcbiAgICAgKiAgIC0gU3RyaW5nOiBVc2UgdGhlIGdpdmVuIHN0cmluZyB2YWx1ZSBpbnN0ZWFkIG9mIGEgY29kZSBvciBhIHN5bWJvbC5cclxuICAgICAqIEZvciBleGFtcGxlLCBhbiBlbXB0eSBzdHJpbmcgd2lsbCBzdXBwcmVzcyB0aGUgY3VycmVuY3kgJiBzeW1ib2wuXHJcbiAgICAgKiAgIC0gQm9vbGVhbiAobWFya2VkIGRlcHJlY2F0ZWQgaW4gdjUpOiBgdHJ1ZWAgZm9yIHN5bWJvbCBhbmQgZmFsc2UgZm9yIGBjb2RlYC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZGlnaXRzSW5mbyBEZWNpbWFsIHJlcHJlc2VudGF0aW9uIG9wdGlvbnMsIHNwZWNpZmllZCBieSBhIHN0cmluZ1xyXG4gICAgICogaW4gdGhlIGZvbGxvd2luZyBmb3JtYXQ6PGJyPlxyXG4gICAgICogPGNvZGU+e21pbkludGVnZXJEaWdpdHN9LnttaW5GcmFjdGlvbkRpZ2l0c30te21heEZyYWN0aW9uRGlnaXRzfTwvY29kZT4uXHJcbiAgICAgKiAgIC0gYG1pbkludGVnZXJEaWdpdHNgOiBUaGUgbWluaW11bSBudW1iZXIgb2YgaW50ZWdlciBkaWdpdHMgYmVmb3JlIHRoZSBkZWNpbWFsIHBvaW50LlxyXG4gICAgICogRGVmYXVsdCBpcyBgMWAuXHJcbiAgICAgKiAgIC0gYG1pbkZyYWN0aW9uRGlnaXRzYDogVGhlIG1pbmltdW0gbnVtYmVyIG9mIGRpZ2l0cyBhZnRlciB0aGUgZGVjaW1hbCBwb2ludC5cclxuICAgICAqIERlZmF1bHQgaXMgYDJgLlxyXG4gICAgICogICAtIGBtYXhGcmFjdGlvbkRpZ2l0c2A6IFRoZSBtYXhpbXVtIG51bWJlciBvZiBkaWdpdHMgYWZ0ZXIgdGhlIGRlY2ltYWwgcG9pbnQuXHJcbiAgICAgKiBEZWZhdWx0IGlzIGAyYC5cclxuICAgICAqIElmIG5vdCBwcm92aWRlZCwgdGhlIG51bWJlciB3aWxsIGJlIGZvcm1hdHRlZCB3aXRoIHRoZSBwcm9wZXIgYW1vdW50IG9mIGRpZ2l0cyxcclxuICAgICAqIGRlcGVuZGluZyBvbiB3aGF0IHRoZSBbSVNPIDQyMTddKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT180MjE3KSBzcGVjaWZpZXMuXHJcbiAgICAgKiBGb3IgZXhhbXBsZSwgdGhlIENhbmFkaWFuIGRvbGxhciBoYXMgMiBkaWdpdHMsIHdoZXJlYXMgdGhlIENoaWxlYW4gcGVzbyBoYXMgbm9uZS5cclxuICAgICAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxyXG4gICAgICogV2hlbiBub3Qgc3VwcGxpZWQsIHVzZXMgdGhlIHZhbHVlIG9mIGBMT0NBTEVfSURgLCB3aGljaCBpcyBgZW4tVVNgIGJ5IGRlZmF1bHQuXHJcbiAgICAgKiBTZWUgW1NldHRpbmcgeW91ciBhcHAgbG9jYWxlXShndWlkZS9pMThuI3NldHRpbmctdXAtdGhlLWxvY2FsZS1vZi15b3VyLWFwcCkuXHJcbiAgICAgKi9cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBjdXJyZW5jeUNvZGU/OiBzdHJpbmcsIGRpc3BsYXk/OiAnY29kZScgfCAnc3ltYm9sJyB8ICdzeW1ib2wtbmFycm93JyB8IHN0cmluZyB8IGJvb2xlYW4sIGRpZ2l0c0luZm8/OiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZyk6IHN0cmluZyB8IG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBGb3JtYXRzIGEgZGF0ZSB2YWx1ZSBhY2NvcmRpbmcgdG8gbG9jYWxlIHJ1bGVzLlxyXG4gKlxyXG4gKiBPbmx5IHRoZSBgZW4tVVNgIGxvY2FsZSBkYXRhIGNvbWVzIHdpdGggQW5ndWxhci4gVG8gbG9jYWxpemUgZGF0ZXNcclxuICogaW4gYW5vdGhlciBsYW5ndWFnZSwgeW91IG11c3QgaW1wb3J0IHRoZSBjb3JyZXNwb25kaW5nIGxvY2FsZSBkYXRhLlxyXG4gKiBTZWUgdGhlIFtJMThuIGd1aWRlXShndWlkZS9pMThuI2kxOG4tcGlwZXMpIGZvciBtb3JlIGluZm9ybWF0aW9uLlxyXG4gKlxyXG4gKiBAc2VlIGBmb3JtYXREYXRlKClgXHJcbiAqXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqXHJcbiAqIFRoZSByZXN1bHQgb2YgdGhpcyBwaXBlIGlzIG5vdCByZWV2YWx1YXRlZCB3aGVuIHRoZSBpbnB1dCBpcyBtdXRhdGVkLiBUbyBhdm9pZCB0aGUgbmVlZCB0b1xyXG4gKiByZWZvcm1hdCB0aGUgZGF0ZSBvbiBldmVyeSBjaGFuZ2UtZGV0ZWN0aW9uIGN5Y2xlLCB0cmVhdCB0aGUgZGF0ZSBhcyBhbiBpbW11dGFibGUgb2JqZWN0XHJcbiAqIGFuZCBjaGFuZ2UgdGhlIHJlZmVyZW5jZSB3aGVuIHRoZSBwaXBlIG5lZWRzIHRvIHJ1biBhZ2Fpbi5cclxuICpcclxuICogIyMjIFByZS1kZWZpbmVkIGZvcm1hdCBvcHRpb25zXHJcbiAqXHJcbiAqIEV4YW1wbGVzIGFyZSBnaXZlbiBpbiBgZW4tVVNgIGxvY2FsZS5cclxuICpcclxuICogLSBgJ3Nob3J0J2A6IGVxdWl2YWxlbnQgdG8gYCdNL2QveXksIGg6bW0gYSdgIChgNi8xNS8xNSwgOTowMyBBTWApLlxyXG4gKiAtIGAnbWVkaXVtJ2A6IGVxdWl2YWxlbnQgdG8gYCdNTU0gZCwgeSwgaDptbTpzcyBhJ2AgKGBKdW4gMTUsIDIwMTUsIDk6MDM6MDEgQU1gKS5cclxuICogLSBgJ2xvbmcnYDogZXF1aXZhbGVudCB0byBgJ01NTU0gZCwgeSwgaDptbTpzcyBhIHonYCAoYEp1bmUgMTUsIDIwMTUgYXQgOTowMzowMSBBTVxyXG4gKiBHTVQrMWApLlxyXG4gKiAtIGAnZnVsbCdgOiBlcXVpdmFsZW50IHRvIGAnRUVFRSwgTU1NTSBkLCB5LCBoOm1tOnNzIGEgenp6eidgIChgTW9uZGF5LCBKdW5lIDE1LCAyMDE1IGF0XHJcbiAqIDk6MDM6MDEgQU0gR01UKzAxOjAwYCkuXHJcbiAqIC0gYCdzaG9ydERhdGUnYDogZXF1aXZhbGVudCB0byBgJ00vZC95eSdgIChgNi8xNS8xNWApLlxyXG4gKiAtIGAnbWVkaXVtRGF0ZSdgOiBlcXVpdmFsZW50IHRvIGAnTU1NIGQsIHknYCAoYEp1biAxNSwgMjAxNWApLlxyXG4gKiAtIGAnbG9uZ0RhdGUnYDogZXF1aXZhbGVudCB0byBgJ01NTU0gZCwgeSdgIChgSnVuZSAxNSwgMjAxNWApLlxyXG4gKiAtIGAnZnVsbERhdGUnYDogZXF1aXZhbGVudCB0byBgJ0VFRUUsIE1NTU0gZCwgeSdgIChgTW9uZGF5LCBKdW5lIDE1LCAyMDE1YCkuXHJcbiAqIC0gYCdzaG9ydFRpbWUnYDogZXF1aXZhbGVudCB0byBgJ2g6bW0gYSdgIChgOTowMyBBTWApLlxyXG4gKiAtIGAnbWVkaXVtVGltZSdgOiBlcXVpdmFsZW50IHRvIGAnaDptbTpzcyBhJ2AgKGA5OjAzOjAxIEFNYCkuXHJcbiAqIC0gYCdsb25nVGltZSdgOiBlcXVpdmFsZW50IHRvIGAnaDptbTpzcyBhIHonYCAoYDk6MDM6MDEgQU0gR01UKzFgKS5cclxuICogLSBgJ2Z1bGxUaW1lJ2A6IGVxdWl2YWxlbnQgdG8gYCdoOm1tOnNzIGEgenp6eidgIChgOTowMzowMSBBTSBHTVQrMDE6MDBgKS5cclxuICpcclxuICogIyMjIEN1c3RvbSBmb3JtYXQgb3B0aW9uc1xyXG4gKlxyXG4gKiBZb3UgY2FuIGNvbnN0cnVjdCBhIGZvcm1hdCBzdHJpbmcgdXNpbmcgc3ltYm9scyB0byBzcGVjaWZ5IHRoZSBjb21wb25lbnRzXHJcbiAqIG9mIGEgZGF0ZS10aW1lIHZhbHVlLCBhcyBkZXNjcmliZWQgaW4gdGhlIGZvbGxvd2luZyB0YWJsZS5cclxuICogRm9ybWF0IGRldGFpbHMgZGVwZW5kIG9uIHRoZSBsb2NhbGUuXHJcbiAqIEZpZWxkcyBtYXJrZWQgd2l0aCAoKikgYXJlIG9ubHkgYXZhaWxhYmxlIGluIHRoZSBleHRyYSBkYXRhIHNldCBmb3IgdGhlIGdpdmVuIGxvY2FsZS5cclxuICpcclxuICogIHwgRmllbGQgdHlwZSAgICAgICAgIHwgRm9ybWF0ICAgICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRXhhbXBsZSBWYWx1ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8LS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxyXG4gKiAgfCBFcmEgICAgICAgICAgICAgICAgfCBHLCBHRyAmIEdHRyB8IEFiYnJldmlhdGVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBBRCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICAgICAgfCBXaWRlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQW5ubyBEb21pbmkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgICAgIHwgTmFycm93ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCBZZWFyICAgICAgICAgICAgICAgfCB5ICAgICAgICAgICB8IE51bWVyaWM6IG1pbmltdW0gZGlnaXRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyLCAyMCwgMjAxLCAyMDE3LCAyMDE3MyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICAgICAgfCBOdW1lcmljOiAyIGRpZ2l0cyArIHplcm8gcGFkZGVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMDIsIDIwLCAwMSwgMTcsIDczICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgICAgIHwgTnVtZXJpYzogMyBkaWdpdHMgKyB6ZXJvIHBhZGRlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDAwMiwgMDIwLCAyMDEsIDIwMTcsIDIwMTczICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgICAgICB8IE51bWVyaWM6IDQgZGlnaXRzIG9yIG1vcmUgKyB6ZXJvIHBhZGRlZCAgICAgICAgICAgICAgICAgICAgICAgfCAwMDAyLCAwMDIwLCAwMjAxLCAyMDE3LCAyMDE3MyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgTW9udGggICAgICAgICAgICAgIHwgTSAgICAgICAgICAgfCBOdW1lcmljOiAxIGRpZ2l0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgOSwgMTIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgICAgIHwgTnVtZXJpYzogMiBkaWdpdHMgKyB6ZXJvIHBhZGRlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDA5LCAxMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgICAgICB8IEFiYnJldmlhdGVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTZXAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICAgICAgfCBXaWRlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU2VwdGVtYmVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgICAgIHwgTmFycm93ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCBNb250aCBzdGFuZGFsb25lICAgfCBMICAgICAgICAgICB8IE51bWVyaWM6IDEgZGlnaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCA5LCAxMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICAgICAgfCBOdW1lcmljOiAyIGRpZ2l0cyArIHplcm8gcGFkZGVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMDksIDEyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgICAgIHwgQWJicmV2aWF0ZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNlcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgICAgICB8IFdpZGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTZXB0ZW1iZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICAgICAgfCBOYXJyb3cgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8IFdlZWsgb2YgeWVhciAgICAgICB8IHcgICAgICAgICAgIHwgTnVtZXJpYzogbWluaW11bSBkaWdpdHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDEuLi4gNTMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgICAgICB8IE51bWVyaWM6IDIgZGlnaXRzICsgemVybyBwYWRkZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAwMS4uLiA1MyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgV2VlayBvZiBtb250aCAgICAgIHwgVyAgICAgICAgICAgfCBOdW1lcmljOiAxIGRpZ2l0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMS4uLiA1ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8IERheSBvZiBtb250aCAgICAgICB8IGQgICAgICAgICAgIHwgTnVtZXJpYzogbWluaW11bSBkaWdpdHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgICAgICB8IE51bWVyaWM6IDIgZGlnaXRzICsgemVybyBwYWRkZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAwMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8IFdlZWsgZGF5ICAgICAgICAgICB8IEUsIEVFICYgRUVFIHwgQWJicmV2aWF0ZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFR1ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgICAgICB8IFdpZGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUdWVzZGF5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICAgICAgfCBOYXJyb3cgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgICAgIHwgU2hvcnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFR1ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCBQZXJpb2QgICAgICAgICAgICAgfCBhLCBhYSAmIGFhYSB8IEFiYnJldmlhdGVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbS9wbSBvciBBTS9QTSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICAgICAgfCBXaWRlIChmYWxsYmFjayB0byBgYWAgd2hlbiBtaXNzaW5nKSAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYW50ZSBtZXJpZGllbS9wb3N0IG1lcmlkaWVtICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgICAgIHwgTmFycm93ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEvcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCBQZXJpb2QqICAgICAgICAgICAgfCBCLCBCQiAmIEJCQiB8IEFiYnJldmlhdGVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtaWQuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICAgICAgfCBXaWRlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYW0sIHBtLCBtaWRuaWdodCwgbm9vbiwgbW9ybmluZywgYWZ0ZXJub29uLCBldmVuaW5nLCBuaWdodCB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgICAgIHwgTmFycm93ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1kICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCBQZXJpb2Qgc3RhbmRhbG9uZSogfCBiLCBiYiAmIGJiYiB8IEFiYnJldmlhdGVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtaWQuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICAgICAgfCBXaWRlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYW0sIHBtLCBtaWRuaWdodCwgbm9vbiwgbW9ybmluZywgYWZ0ZXJub29uLCBldmVuaW5nLCBuaWdodCB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgICAgIHwgTmFycm93ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1kICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCBIb3VyIDEtMTIgICAgICAgICAgfCBoICAgICAgICAgICB8IE51bWVyaWM6IG1pbmltdW0gZGlnaXRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAxLCAxMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICAgICAgfCBOdW1lcmljOiAyIGRpZ2l0cyArIHplcm8gcGFkZGVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMDEsIDEyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8IEhvdXIgMC0yMyAgICAgICAgICB8IEggICAgICAgICAgIHwgTnVtZXJpYzogbWluaW11bSBkaWdpdHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDAsIDIzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgICAgICB8IE51bWVyaWM6IDIgZGlnaXRzICsgemVybyBwYWRkZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAwMCwgMjMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgTWludXRlICAgICAgICAgICAgIHwgbSAgICAgICAgICAgfCBOdW1lcmljOiBtaW5pbXVtIGRpZ2l0cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgOCwgNTkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgICAgIHwgTnVtZXJpYzogMiBkaWdpdHMgKyB6ZXJvIHBhZGRlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDA4LCA1OSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCBTZWNvbmQgICAgICAgICAgICAgfCBzICAgICAgICAgICB8IE51bWVyaWM6IG1pbmltdW0gZGlnaXRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAwLi4uIDU5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICAgICAgfCBOdW1lcmljOiAyIGRpZ2l0cyArIHplcm8gcGFkZGVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMDAuLi4gNTkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8IEZyYWN0aW9uYWwgc2Vjb25kcyB8IFMgICAgICAgICAgIHwgTnVtZXJpYzogMSBkaWdpdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDAuLi4gOSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgICAgICB8IE51bWVyaWM6IDIgZGlnaXRzICsgemVybyBwYWRkZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAwMC4uLiA5OSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICAgICAgfCBOdW1lcmljOiAzIGRpZ2l0cyArIHplcm8gcGFkZGVkICg9IG1pbGxpc2Vjb25kcykgICAgICAgICAgICAgIHwgMDAwLi4uIDk5OSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8IFpvbmUgICAgICAgICAgICAgICB8IHosIHp6ICYgenp6IHwgU2hvcnQgc3BlY2lmaWMgbm9uIGxvY2F0aW9uIGZvcm1hdCAoZmFsbGJhY2sgdG8gTykgICAgICAgICAgICB8IEdNVC04ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgICAgICB8IExvbmcgc3BlY2lmaWMgbm9uIGxvY2F0aW9uIGZvcm1hdCAoZmFsbGJhY2sgdG8gT09PTykgICAgICAgICAgfCBHTVQtMDg6MDAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgWiwgWlogJiBaWlogfCBJU084NjAxIGJhc2ljIGZvcm1hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgLTA4MDAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IFpaWlogICAgICAgIHwgTG9uZyBsb2NhbGl6ZWQgR01UIGZvcm1hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdNVC04OjAwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBaWlpaWiAgICAgICB8IElTTzg2MDEgZXh0ZW5kZWQgZm9ybWF0ICsgWiBpbmRpY2F0b3IgZm9yIG9mZnNldCAwICg9IFhYWFhYKSAgfCAtMDg6MDAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgTywgT08gJiBPT08gfCBTaG9ydCBsb2NhbGl6ZWQgR01UIGZvcm1hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR01ULTggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgICAgIHwgTG9uZyBsb2NhbGl6ZWQgR01UIGZvcm1hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdNVC0wODowMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKlxyXG4gKiBOb3RlIHRoYXQgdGltZXpvbmUgY29ycmVjdGlvbiBpcyBub3QgYXBwbGllZCB0byBhbiBJU08gc3RyaW5nIHRoYXQgaGFzIG5vIHRpbWUgY29tcG9uZW50LCBzdWNoIGFzIFwiMjAxNi0wOS0xOVwiXHJcbiAqXHJcbiAqICMjIyBGb3JtYXQgZXhhbXBsZXNcclxuICpcclxuICogVGhlc2UgZXhhbXBsZXMgdHJhbnNmb3JtIGEgZGF0ZSBpbnRvIHZhcmlvdXMgZm9ybWF0cyxcclxuICogYXNzdW1pbmcgdGhhdCBgZGF0ZU9iamAgaXMgYSBKYXZhU2NyaXB0IGBEYXRlYCBvYmplY3QgZm9yXHJcbiAqIHllYXI6IDIwMTUsIG1vbnRoOiA2LCBkYXk6IDE1LCBob3VyOiAyMSwgbWludXRlOiA0Mywgc2Vjb25kOiAxMSxcclxuICogZ2l2ZW4gaW4gdGhlIGxvY2FsIHRpbWUgZm9yIHRoZSBgZW4tVVNgIGxvY2FsZS5cclxuICpcclxuICogYGBgXHJcbiAqIHt7IGRhdGVPYmogfCBkYXRlIH19ICAgICAgICAgICAgICAgLy8gb3V0cHV0IGlzICdKdW4gMTUsIDIwMTUnXHJcbiAqIHt7IGRhdGVPYmogfCBkYXRlOidtZWRpdW0nIH19ICAgICAgLy8gb3V0cHV0IGlzICdKdW4gMTUsIDIwMTUsIDk6NDM6MTEgUE0nXHJcbiAqIHt7IGRhdGVPYmogfCBkYXRlOidzaG9ydFRpbWUnIH19ICAgLy8gb3V0cHV0IGlzICc5OjQzIFBNJ1xyXG4gKiB7eyBkYXRlT2JqIHwgZGF0ZTonbW06c3MnIH19ICAgICAgIC8vIG91dHB1dCBpcyAnNDM6MTEnXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAjIyMgVXNhZ2UgZXhhbXBsZVxyXG4gKlxyXG4gKiBUaGUgZm9sbG93aW5nIGNvbXBvbmVudCB1c2VzIGEgZGF0ZSBwaXBlIHRvIGRpc3BsYXkgdGhlIGN1cnJlbnQgZGF0ZSBpbiBkaWZmZXJlbnQgZm9ybWF0cy5cclxuICpcclxuICogYGBgXHJcbiAqIEBDb21wb25lbnQoe1xyXG4gKiAgc2VsZWN0b3I6ICdkYXRlLXBpcGUnLFxyXG4gKiAgdGVtcGxhdGU6IGA8ZGl2PlxyXG4gKiAgICA8cD5Ub2RheSBpcyB7e3RvZGF5IHwgZGF0ZX19PC9wPlxyXG4gKiAgICA8cD5PciBpZiB5b3UgcHJlZmVyLCB7e3RvZGF5IHwgZGF0ZTonZnVsbERhdGUnfX08L3A+XHJcbiAqICAgIDxwPlRoZSB0aW1lIGlzIHt7dG9kYXkgfCBkYXRlOidoOm1tIGEgeid9fTwvcD5cclxuICogIDwvZGl2PmBcclxuICogfSlcclxuICogLy8gR2V0IHRoZSBjdXJyZW50IGRhdGUgYW5kIHRpbWUgYXMgYSBkYXRlLXRpbWUgdmFsdWUuXHJcbiAqIGV4cG9ydCBjbGFzcyBEYXRlUGlwZUNvbXBvbmVudCB7XHJcbiAqICAgdG9kYXk6IG51bWJlciA9IERhdGUubm93KCk7XHJcbiAqIH1cclxuICogYGBgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIERhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBwcml2YXRlIGxvY2FsZTtcclxuICAgIGNvbnN0cnVjdG9yKGxvY2FsZTogc3RyaW5nKTtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBkYXRlIGV4cHJlc3Npb246IGEgYERhdGVgIG9iamVjdCwgIGEgbnVtYmVyXHJcbiAgICAgKiAobWlsbGlzZWNvbmRzIHNpbmNlIFVUQyBlcG9jaCksIG9yIGFuIElTTyBzdHJpbmcgKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9OT1RFLWRhdGV0aW1lKS5cclxuICAgICAqIEBwYXJhbSBmb3JtYXQgVGhlIGRhdGUvdGltZSBjb21wb25lbnRzIHRvIGluY2x1ZGUsIHVzaW5nIHByZWRlZmluZWQgb3B0aW9ucyBvciBhXHJcbiAgICAgKiBjdXN0b20gZm9ybWF0IHN0cmluZy5cclxuICAgICAqIEBwYXJhbSB0aW1lem9uZSBBIHRpbWV6b25lIG9mZnNldCAoc3VjaCBhcyBgJyswNDMwJ2ApLCBvciBhIHN0YW5kYXJkXHJcbiAgICAgKiBVVEMvR01UIG9yIGNvbnRpbmVudGFsIFVTIHRpbWV6b25lIGFiYnJldmlhdGlvbi5cclxuICAgICAqIFdoZW4gbm90IHN1cHBsaWVkLCB1c2VzIHRoZSBlbmQtdXNlcidzIGxvY2FsIHN5c3RlbSB0aW1lem9uZS5cclxuICAgICAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxyXG4gICAgICogV2hlbiBub3Qgc3VwcGxpZWQsIHVzZXMgdGhlIHZhbHVlIG9mIGBMT0NBTEVfSURgLCB3aGljaCBpcyBgZW4tVVNgIGJ5IGRlZmF1bHQuXHJcbiAgICAgKiBTZWUgW1NldHRpbmcgeW91ciBhcHAgbG9jYWxlXShndWlkZS9pMThuI3NldHRpbmctdXAtdGhlLWxvY2FsZS1vZi15b3VyLWFwcCkuXHJcbiAgICAgKiBAcmV0dXJucyBBIGRhdGUgc3RyaW5nIGluIHRoZSBkZXNpcmVkIGZvcm1hdC5cclxuICAgICAqL1xyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGZvcm1hdD86IHN0cmluZywgdGltZXpvbmU/OiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZyk6IHN0cmluZyB8IG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBUcmFuc2Zvcm1zIGEgbnVtYmVyIGludG8gYSBzdHJpbmcsXHJcbiAqIGZvcm1hdHRlZCBhY2NvcmRpbmcgdG8gbG9jYWxlIHJ1bGVzIHRoYXQgZGV0ZXJtaW5lIGdyb3VwIHNpemluZyBhbmRcclxuICogc2VwYXJhdG9yLCBkZWNpbWFsLXBvaW50IGNoYXJhY3RlciwgYW5kIG90aGVyIGxvY2FsZS1zcGVjaWZpY1xyXG4gKiBjb25maWd1cmF0aW9ucy5cclxuICpcclxuICogSWYgbm8gcGFyYW1ldGVycyBhcmUgc3BlY2lmaWVkLCB0aGUgZnVuY3Rpb24gcm91bmRzIG9mZiB0byB0aGUgbmVhcmVzdCB2YWx1ZSB1c2luZyB0aGlzXHJcbiAqIFtyb3VuZGluZyBtZXRob2RdKGh0dHBzOi8vZW4ud2lraWJvb2tzLm9yZy93aWtpL0FyaXRobWV0aWMvUm91bmRpbmcpLlxyXG4gKiBUaGUgYmVoYXZpb3IgZGlmZmVycyBmcm9tIHRoYXQgb2YgdGhlIEphdmFTY3JpcHQgYGBgTWF0aC5yb3VuZCgpYGBgIGZ1bmN0aW9uLlxyXG4gKiBJbiB0aGUgZm9sbG93aW5nIGNhc2UgZm9yIGV4YW1wbGUsIHRoZSBwaXBlIHJvdW5kcyBkb3duIHdoZXJlXHJcbiAqIGBgYE1hdGgucm91bmQoKWBgYCByb3VuZHMgdXA6XHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogLTIuNSB8IG51bWJlcjonMS4wLTAnXHJcbiAqID4gLTNcclxuICogTWF0aC5yb3VuZCgtMi41KVxyXG4gKiA+IC0yXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAc2VlIGBmb3JtYXROdW1iZXIoKWBcclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogVGhlIGZvbGxvd2luZyBjb2RlIHNob3dzIGhvdyB0aGUgcGlwZSB0cmFuc2Zvcm1zIG51bWJlcnNcclxuICogaW50byB0ZXh0IHN0cmluZ3MsIGFjY29yZGluZyB0byB2YXJpb3VzIGZvcm1hdCBzcGVjaWZpY2F0aW9ucyxcclxuICogd2hlcmUgdGhlIGNhbGxlcidzIGRlZmF1bHQgbG9jYWxlIGlzIGBlbi1VU2AuXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqXHJcbiAqIDxjb2RlLWV4YW1wbGUgcGF0aD1cImNvbW1vbi9waXBlcy90cy9udW1iZXJfcGlwZS50c1wiIHJlZ2lvbj0nTnVtYmVyUGlwZSc+PC9jb2RlLWV4YW1wbGU+XHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIERlY2ltYWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBwcml2YXRlIF9sb2NhbGU7XHJcbiAgICBjb25zdHJ1Y3RvcihfbG9jYWxlOiBzdHJpbmcpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIG51bWJlciB0byBiZSBmb3JtYXR0ZWQuXHJcbiAgICAgKiBAcGFyYW0gZGlnaXRzSW5mbyBEZWNpbWFsIHJlcHJlc2VudGF0aW9uIG9wdGlvbnMsIHNwZWNpZmllZCBieSBhIHN0cmluZ1xyXG4gICAgICogaW4gdGhlIGZvbGxvd2luZyBmb3JtYXQ6PGJyPlxyXG4gICAgICogPGNvZGU+e21pbkludGVnZXJEaWdpdHN9LnttaW5GcmFjdGlvbkRpZ2l0c30te21heEZyYWN0aW9uRGlnaXRzfTwvY29kZT4uXHJcbiAgICAgKiAgIC0gYG1pbkludGVnZXJEaWdpdHNgOiBUaGUgbWluaW11bSBudW1iZXIgb2YgaW50ZWdlciBkaWdpdHMgYmVmb3JlIHRoZSBkZWNpbWFsIHBvaW50LlxyXG4gICAgICogRGVmYXVsdCBpcyBgMWAuXHJcbiAgICAgKiAgIC0gYG1pbkZyYWN0aW9uRGlnaXRzYDogVGhlIG1pbmltdW0gbnVtYmVyIG9mIGRpZ2l0cyBhZnRlciB0aGUgZGVjaW1hbCBwb2ludC5cclxuICAgICAqIERlZmF1bHQgaXMgYDBgLlxyXG4gICAgICogICAtIGBtYXhGcmFjdGlvbkRpZ2l0c2A6IFRoZSBtYXhpbXVtIG51bWJlciBvZiBkaWdpdHMgYWZ0ZXIgdGhlIGRlY2ltYWwgcG9pbnQuXHJcbiAgICAgKiBEZWZhdWx0IGlzIGAzYC5cclxuICAgICAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxyXG4gICAgICogV2hlbiBub3Qgc3VwcGxpZWQsIHVzZXMgdGhlIHZhbHVlIG9mIGBMT0NBTEVfSURgLCB3aGljaCBpcyBgZW4tVVNgIGJ5IGRlZmF1bHQuXHJcbiAgICAgKiBTZWUgW1NldHRpbmcgeW91ciBhcHAgbG9jYWxlXShndWlkZS9pMThuI3NldHRpbmctdXAtdGhlLWxvY2FsZS1vZi15b3VyLWFwcCkuXHJcbiAgICAgKi9cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBkaWdpdHNJbmZvPzogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogQSBESSBUb2tlbiByZXByZXNlbnRpbmcgdGhlIG1haW4gcmVuZGVyaW5nIGNvbnRleHQuIEluIGEgYnJvd3NlciB0aGlzIGlzIHRoZSBET00gRG9jdW1lbnQuXHJcbiAqXHJcbiAqIE5vdGU6IERvY3VtZW50IG1pZ2h0IG5vdCBiZSBhdmFpbGFibGUgaW4gdGhlIEFwcGxpY2F0aW9uIENvbnRleHQgd2hlbiBBcHBsaWNhdGlvbiBhbmQgUmVuZGVyaW5nXHJcbiAqIENvbnRleHRzIGFyZSBub3QgdGhlIHNhbWUgKGUuZy4gd2hlbiBydW5uaW5nIHRoZSBhcHBsaWNhdGlvbiBpbiBhIFdlYiBXb3JrZXIpLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCBET0NVTUVOVDogSW5qZWN0aW9uVG9rZW48RG9jdW1lbnQ+O1xyXG5cclxuLyoqXHJcbiAqIEBuZ01vZHVsZSBDb21tb25Nb2R1bGVcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIEZvcm1hdHMgYSBudW1iZXIgYXMgY3VycmVuY3kgdXNpbmcgbG9jYWxlIHJ1bGVzLlxyXG4gKlxyXG4gKiBAcGFyYW0gdmFsdWUgVGhlIG51bWJlciB0byBmb3JtYXQuXHJcbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxyXG4gKiBAcGFyYW0gY3VycmVuY3kgQSBzdHJpbmcgY29udGFpbmluZyB0aGUgY3VycmVuY3kgc3ltYm9sIG9yIGl0cyBuYW1lLFxyXG4gKiBzdWNoIGFzIFwiJFwiIG9yIFwiQ2FuYWRpYW4gRG9sbGFyXCIuIFVzZWQgaW4gb3V0cHV0IHN0cmluZywgYnV0IGRvZXMgbm90IGFmZmVjdCB0aGUgb3BlcmF0aW9uXHJcbiAqIG9mIHRoZSBmdW5jdGlvbi5cclxuICogQHBhcmFtIGN1cnJlbmN5Q29kZSBUaGUgW0lTTyA0MjE3XShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fNDIxNylcclxuICogY3VycmVuY3kgY29kZSwgc3VjaCBhcyBgVVNEYCBmb3IgdGhlIFVTIGRvbGxhciBhbmQgYEVVUmAgZm9yIHRoZSBldXJvLlxyXG4gKiBVc2VkIHRvIGRldGVybWluZSB0aGUgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZGVjaW1hbCBwYXJ0LlxyXG4gKiBAcGFyYW0gZGlnaXRJbmZvIERlY2ltYWwgcmVwcmVzZW50YXRpb24gb3B0aW9ucywgc3BlY2lmaWVkIGJ5IGEgc3RyaW5nIGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0OlxyXG4gKiBge21pbkludGVnZXJEaWdpdHN9LnttaW5GcmFjdGlvbkRpZ2l0c30te21heEZyYWN0aW9uRGlnaXRzfWAuIFNlZSBgRGVjaW1hbFBpcGVgIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIEByZXR1cm5zIFRoZSBmb3JtYXR0ZWQgY3VycmVuY3kgdmFsdWUuXHJcbiAqXHJcbiAqIEBzZWUgYGZvcm1hdE51bWJlcigpYFxyXG4gKiBAc2VlIGBEZWNpbWFsUGlwZWBcclxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gZm9ybWF0Q3VycmVuY3kodmFsdWU6IG51bWJlciwgbG9jYWxlOiBzdHJpbmcsIGN1cnJlbmN5OiBzdHJpbmcsIGN1cnJlbmN5Q29kZT86IHN0cmluZywgZGlnaXRzSW5mbz86IHN0cmluZyk6IHN0cmluZztcclxuXHJcbi8qKlxyXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBGb3JtYXRzIGEgZGF0ZSBhY2NvcmRpbmcgdG8gbG9jYWxlIHJ1bGVzLlxyXG4gKlxyXG4gKiBAcGFyYW0gdmFsdWUgVGhlIGRhdGUgdG8gZm9ybWF0LCBhcyBhIERhdGUsIG9yIGEgbnVtYmVyIChtaWxsaXNlY29uZHMgc2luY2UgVVRDIGVwb2NoKVxyXG4gKiBvciBhbiBbSVNPIGRhdGUtdGltZSBzdHJpbmddKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9OT1RFLWRhdGV0aW1lKS5cclxuICogQHBhcmFtIGZvcm1hdCBUaGUgZGF0ZS10aW1lIGNvbXBvbmVudHMgdG8gaW5jbHVkZS4gU2VlIGBEYXRlUGlwZWAgZm9yIGRldGFpbHMuXHJcbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxyXG4gKiBAcGFyYW0gdGltZXpvbmUgVGhlIHRpbWUgem9uZS4gQSB0aW1lIHpvbmUgb2Zmc2V0IGZyb20gR01UIChzdWNoIGFzIGAnKzA0MzAnYCksXHJcbiAqIG9yIGEgc3RhbmRhcmQgVVRDL0dNVCBvciBjb250aW5lbnRhbCBVUyB0aW1lIHpvbmUgYWJicmV2aWF0aW9uLlxyXG4gKiBJZiBub3Qgc3BlY2lmaWVkLCB1c2VzIGhvc3Qgc3lzdGVtIHNldHRpbmdzLlxyXG4gKlxyXG4gKiBAcmV0dXJucyBUaGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nLlxyXG4gKlxyXG4gKiBAc2VlIGBEYXRlUGlwZWBcclxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gZm9ybWF0RGF0ZSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGxvY2FsZTogc3RyaW5nLCB0aW1lem9uZT86IHN0cmluZyk6IHN0cmluZztcclxuXHJcbi8qKlxyXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBGb3JtYXRzIGEgbnVtYmVyIGFzIHRleHQsIHdpdGggZ3JvdXAgc2l6aW5nLCBzZXBhcmF0b3IsIGFuZCBvdGhlclxyXG4gKiBwYXJhbWV0ZXJzIGJhc2VkIG9uIHRoZSBsb2NhbGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgbnVtYmVyIHRvIGZvcm1hdC5cclxuICogQHBhcmFtIGxvY2FsZSBBIGxvY2FsZSBjb2RlIGZvciB0aGUgbG9jYWxlIGZvcm1hdCBydWxlcyB0byB1c2UuXHJcbiAqIEBwYXJhbSBkaWdpdEluZm8gRGVjaW1hbCByZXByZXNlbnRhdGlvbiBvcHRpb25zLCBzcGVjaWZpZWQgYnkgYSBzdHJpbmcgaW4gdGhlIGZvbGxvd2luZyBmb3JtYXQ6XHJcbiAqIGB7bWluSW50ZWdlckRpZ2l0c30ue21pbkZyYWN0aW9uRGlnaXRzfS17bWF4RnJhY3Rpb25EaWdpdHN9YC4gU2VlIGBEZWNpbWFsUGlwZWAgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogQHJldHVybnMgVGhlIGZvcm1hdHRlZCB0ZXh0IHN0cmluZy5cclxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gZm9ybWF0TnVtYmVyKHZhbHVlOiBudW1iZXIsIGxvY2FsZTogc3RyaW5nLCBkaWdpdHNJbmZvPzogc3RyaW5nKTogc3RyaW5nO1xyXG5cclxuLyoqXHJcbiAqIEBuZ01vZHVsZSBDb21tb25Nb2R1bGVcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIEZvcm1hdHMgYSBudW1iZXIgYXMgYSBwZXJjZW50YWdlIGFjY29yZGluZyB0byBsb2NhbGUgcnVsZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgbnVtYmVyIHRvIGZvcm1hdC5cclxuICogQHBhcmFtIGxvY2FsZSBBIGxvY2FsZSBjb2RlIGZvciB0aGUgbG9jYWxlIGZvcm1hdCBydWxlcyB0byB1c2UuXHJcbiAqIEBwYXJhbSBkaWdpdEluZm8gRGVjaW1hbCByZXByZXNlbnRhdGlvbiBvcHRpb25zLCBzcGVjaWZpZWQgYnkgYSBzdHJpbmcgaW4gdGhlIGZvbGxvd2luZyBmb3JtYXQ6XHJcbiAqIGB7bWluSW50ZWdlckRpZ2l0c30ue21pbkZyYWN0aW9uRGlnaXRzfS17bWF4RnJhY3Rpb25EaWdpdHN9YC4gU2VlIGBEZWNpbWFsUGlwZWAgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogQHJldHVybnMgVGhlIGZvcm1hdHRlZCBwZXJjZW50YWdlIHZhbHVlLlxyXG4gKlxyXG4gKiBAc2VlIGBmb3JtYXROdW1iZXIoKWBcclxuICogQHNlZSBgRGVjaW1hbFBpcGVgXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqIEBwdWJsaWNBcGlcclxuICpcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGZvcm1hdFBlcmNlbnQodmFsdWU6IG51bWJlciwgbG9jYWxlOiBzdHJpbmcsIGRpZ2l0c0luZm8/OiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG4vKipcclxuICogU3RyaW5nIHdpZHRocyBhdmFpbGFibGUgZm9yIGRhdGUtdGltZSBmb3JtYXRzLlxyXG4gKiBUaGUgc3BlY2lmaWMgY2hhcmFjdGVyIHdpZHRocyBhcmUgbG9jYWxlLXNwZWNpZmljLlxyXG4gKiBFeGFtcGxlcyBhcmUgZ2l2ZW4gZm9yIGBlbi1VU2AuXHJcbiAqXHJcbiAqIEBzZWUgYGdldExvY2FsZURhdGVGb3JtYXQoKWBcclxuICogQHNlZSBgZ2V0TG9jYWxlVGltZUZvcm1hdCgpYGBcclxuICogQHNlZSBgZ2V0TG9jYWxlRGF0ZVRpbWVGb3JtYXQoKWBcclxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZW51bSBGb3JtYXRXaWR0aCB7XHJcbiAgICAvKipcclxuICAgICAqIEZvciBgZW4tVVNgLCAnTS9kL3l5LCBoOm1tIGEnYFxyXG4gICAgICogKEV4YW1wbGU6IGA2LzE1LzE1LCA5OjAzIEFNYClcclxuICAgICAqL1xyXG4gICAgU2hvcnQgPSAwLFxyXG4gICAgLyoqXHJcbiAgICAgKiBGb3IgYGVuLVVTYCwgYCdNTU0gZCwgeSwgaDptbTpzcyBhJ2BcclxuICAgICAqIChFeGFtcGxlOiBgSnVuIDE1LCAyMDE1LCA5OjAzOjAxIEFNYClcclxuICAgICAqL1xyXG4gICAgTWVkaXVtID0gMSxcclxuICAgIC8qKlxyXG4gICAgICogRm9yIGBlbi1VU2AsIGAnTU1NTSBkLCB5LCBoOm1tOnNzIGEgeidgXHJcbiAgICAgKiAoRXhhbXBsZTogYEp1bmUgMTUsIDIwMTUgYXQgOTowMzowMSBBTSBHTVQrMWApXHJcbiAgICAgKi9cclxuICAgIExvbmcgPSAyLFxyXG4gICAgLyoqXHJcbiAgICAgKiBGb3IgYGVuLVVTYCwgYCdFRUVFLCBNTU1NIGQsIHksIGg6bW06c3MgYSB6enp6J2BcclxuICAgICAqIChFeGFtcGxlOiBgTW9uZGF5LCBKdW5lIDE1LCAyMDE1IGF0IDk6MDM6MDEgQU0gR01UKzAxOjAwYClcclxuICAgICAqL1xyXG4gICAgRnVsbCA9IDNcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnRleHQtZGVwZW5kYW50IHRyYW5zbGF0aW9uIGZvcm1zIGZvciBzdHJpbmdzLlxyXG4gKiBUeXBpY2FsbHkgdGhlIHN0YW5kYWxvbmUgdmVyc2lvbiBpcyBmb3IgdGhlIG5vbWluYXRpdmUgZm9ybSBvZiB0aGUgd29yZCxcclxuICogYW5kIHRoZSBmb3JtYXQgdmVyc2lvbiBpcyB1c2VkIGZvciB0aGUgZ2VuaXRpdmUgY2FzZS5cclxuICogQHNlZSBbQ0xEUiB3ZWJzaXRlXShodHRwOi8vY2xkci51bmljb2RlLm9yZy90cmFuc2xhdGlvbi9kYXRlLXRpbWUtMS9kYXRlLXRpbWUjVE9DLVN0YW5kYWxvbmUtdnMuLUZvcm1hdC1TdHlsZXMpXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGVudW0gRm9ybVN0eWxlIHtcclxuICAgIEZvcm1hdCA9IDAsXHJcbiAgICBTdGFuZGFsb25lID0gMVxyXG59XHJcblxyXG4vKipcclxuICogUmV0cmlldmVzIHRoZSBjdXJyZW5jeSBzeW1ib2wgZm9yIGEgZ2l2ZW4gY3VycmVuY3kgY29kZS5cclxuICpcclxuICogRm9yIGV4YW1wbGUsIGZvciB0aGUgZGVmYXVsdCBgZW4tVVNgIGxvY2FsZSwgdGhlIGNvZGUgYFVTRGAgY2FuXHJcbiAqIGJlIHJlcHJlc2VudGVkIGJ5IHRoZSBuYXJyb3cgc3ltYm9sIGAkYCBvciB0aGUgd2lkZSBzeW1ib2wgYFVTJGAuXHJcbiAqXHJcbiAqIEBwYXJhbSBjb2RlIFRoZSBjdXJyZW5jeSBjb2RlLlxyXG4gKiBAcGFyYW0gZm9ybWF0IFRoZSBmb3JtYXQsIGB3aWRlYCBvciBgbmFycm93YC5cclxuICogQHBhcmFtIGxvY2FsZSBBIGxvY2FsZSBjb2RlIGZvciB0aGUgbG9jYWxlIGZvcm1hdCBydWxlcyB0byB1c2UuXHJcbiAqXHJcbiAqIEByZXR1cm5zIFRoZSBzeW1ib2wsIG9yIHRoZSBjdXJyZW5jeSBjb2RlIGlmIG5vIHN5bWJvbCBpcyBhdmFpbGFibGUuXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGdldEN1cnJlbmN5U3ltYm9sKGNvZGU6IHN0cmluZywgZm9ybWF0OiAnd2lkZScgfCAnbmFycm93JywgbG9jYWxlPzogc3RyaW5nKTogc3RyaW5nO1xyXG5cclxuLyoqXHJcbiAqIFJldHJpZXZlcyB0aGUgZGVmYXVsdCBjdXJyZW5jeSBjb2RlIGZvciB0aGUgZ2l2ZW4gbG9jYWxlLlxyXG4gKlxyXG4gKiBUaGUgZGVmYXVsdCBpcyBkZWZpbmVkIGFzIHRoZSBmaXJzdCBjdXJyZW5jeSB3aGljaCBpcyBzdGlsbCBpbiB1c2UuXHJcbiAqXHJcbiAqIEBwYXJhbSBsb2NhbGUgVGhlIGNvZGUgb2YgdGhlIGxvY2FsZSB3aG9zZSBjdXJyZW5jeSBjb2RlIHdlIHdhbnQuXHJcbiAqIEByZXR1cm5zIFRoZSBjb2RlIG9mIHRoZSBkZWZhdWx0IGN1cnJlbmN5IGZvciB0aGUgZ2l2ZW4gbG9jYWxlLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBnZXRMb2NhbGVDdXJyZW5jeUNvZGUobG9jYWxlOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsO1xyXG5cclxuLyoqXHJcbiAqIFJldHJpZXZlcyB0aGUgbmFtZSBvZiB0aGUgY3VycmVuY3kgZm9yIHRoZSBtYWluIGNvdW50cnkgY29ycmVzcG9uZGluZ1xyXG4gKiB0byBhIGdpdmVuIGxvY2FsZS4gRm9yIGV4YW1wbGUsICdVUyBEb2xsYXInIGZvciBgZW4tVVNgLlxyXG4gKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cclxuICogQHJldHVybnMgVGhlIGN1cnJlbmN5IG5hbWUsXHJcbiAqIG9yIGBudWxsYCBpZiB0aGUgbWFpbiBjb3VudHJ5IGNhbm5vdCBiZSBkZXRlcm1pbmVkLlxyXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBnZXRMb2NhbGVDdXJyZW5jeU5hbWUobG9jYWxlOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsO1xyXG5cclxuLyoqXHJcbiAqIFJldHJpZXZlcyB0aGUgc3ltYm9sIHVzZWQgdG8gcmVwcmVzZW50IHRoZSBjdXJyZW5jeSBmb3IgdGhlIG1haW4gY291bnRyeVxyXG4gKiBjb3JyZXNwb25kaW5nIHRvIGEgZ2l2ZW4gbG9jYWxlLiBGb3IgZXhhbXBsZSwgJyQnIGZvciBgZW4tVVNgLlxyXG4gKlxyXG4gKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cclxuICogQHJldHVybnMgVGhlIGxvY2FsaXplZCBzeW1ib2wgY2hhcmFjdGVyLFxyXG4gKiBvciBgbnVsbGAgaWYgdGhlIG1haW4gY291bnRyeSBjYW5ub3QgYmUgZGV0ZXJtaW5lZC5cclxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gZ2V0TG9jYWxlQ3VycmVuY3lTeW1ib2wobG9jYWxlOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsO1xyXG5cclxuLyoqXHJcbiAqIFJldHJpZXZlcyBhIGxvY2FsaXplZCBkYXRlLXZhbHVlIGZvcm1hdGluZyBzdHJpbmcuXHJcbiAqXHJcbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxyXG4gKiBAcGFyYW0gd2lkdGggVGhlIGZvcm1hdCB0eXBlLlxyXG4gKiBAcmV0dXJucyBUaGUgbG9jYWxpemVkIGZvcm1hdGluZyBzdHJpbmcuXHJcbiAqIEBzZWUgYEZvcm1hdFdpZHRoYFxyXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBnZXRMb2NhbGVEYXRlRm9ybWF0KGxvY2FsZTogc3RyaW5nLCB3aWR0aDogRm9ybWF0V2lkdGgpOiBzdHJpbmc7XHJcblxyXG4vKipcclxuICogUmV0cmlldmVzIGEgbG9jYWxpemVkIGRhdGUtdGltZSBmb3JtYXR0aW5nIHN0cmluZy5cclxuICpcclxuICogQHBhcmFtIGxvY2FsZSBBIGxvY2FsZSBjb2RlIGZvciB0aGUgbG9jYWxlIGZvcm1hdCBydWxlcyB0byB1c2UuXHJcbiAqIEBwYXJhbSB3aWR0aCBUaGUgZm9ybWF0IHR5cGUuXHJcbiAqIEByZXR1cm5zIFRoZSBsb2NhbGl6ZWQgZm9ybWF0dGluZyBzdHJpbmcuXHJcbiAqIEBzZWUgYEZvcm1hdFdpZHRoYFxyXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBnZXRMb2NhbGVEYXRlVGltZUZvcm1hdChsb2NhbGU6IHN0cmluZywgd2lkdGg6IEZvcm1hdFdpZHRoKTogc3RyaW5nO1xyXG5cclxuLyoqXHJcbiAqIFJldHJpZXZlcyBkYXlzIG9mIHRoZSB3ZWVrIGZvciB0aGUgZ2l2ZW4gbG9jYWxlLCB1c2luZyB0aGUgR3JlZ29yaWFuIGNhbGVuZGFyLlxyXG4gKlxyXG4gKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cclxuICogQHBhcmFtIGZvcm1TdHlsZSBUaGUgcmVxdWlyZWQgZ3JhbW1hdGljYWwgZm9ybS5cclxuICogQHBhcmFtIHdpZHRoIFRoZSByZXF1aXJlZCBjaGFyYWN0ZXIgd2lkdGguXHJcbiAqIEByZXR1cm5zIEFuIGFycmF5IG9mIGxvY2FsaXplZCBuYW1lIHN0cmluZ3MuXHJcbiAqIEZvciBleGFtcGxlLGBbU3VuZGF5LCBNb25kYXksIC4uLiBTYXR1cmRheV1gIGZvciBgZW4tVVNgLlxyXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBnZXRMb2NhbGVEYXlOYW1lcyhsb2NhbGU6IHN0cmluZywgZm9ybVN0eWxlOiBGb3JtU3R5bGUsIHdpZHRoOiBUcmFuc2xhdGlvbldpZHRoKTogc3RyaW5nW107XHJcblxyXG4vKipcclxuICogUmV0cmlldmVzIGRheSBwZXJpb2Qgc3RyaW5ncyBmb3IgdGhlIGdpdmVuIGxvY2FsZS5cclxuICpcclxuICogQHBhcmFtIGxvY2FsZSBBIGxvY2FsZSBjb2RlIGZvciB0aGUgbG9jYWxlIGZvcm1hdCBydWxlcyB0byB1c2UuXHJcbiAqIEBwYXJhbSBmb3JtU3R5bGUgVGhlIHJlcXVpcmVkIGdyYW1tYXRpY2FsIGZvcm0uXHJcbiAqIEBwYXJhbSB3aWR0aCBUaGUgcmVxdWlyZWQgY2hhcmFjdGVyIHdpZHRoLlxyXG4gKiBAcmV0dXJucyBBbiBhcnJheSBvZiBsb2NhbGl6ZWQgcGVyaW9kIHN0cmluZ3MuIEZvciBleGFtcGxlLCBgW0FNLCBQTV1gIGZvciBgZW4tVVNgLlxyXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBnZXRMb2NhbGVEYXlQZXJpb2RzKGxvY2FsZTogc3RyaW5nLCBmb3JtU3R5bGU6IEZvcm1TdHlsZSwgd2lkdGg6IFRyYW5zbGF0aW9uV2lkdGgpOiBbc3RyaW5nLCBzdHJpbmddO1xyXG5cclxuLyoqXHJcbiAqIFJldHJpZXZlcyB0aGUgd3JpdGluZyBkaXJlY3Rpb24gb2YgYSBzcGVjaWZpZWQgbG9jYWxlXHJcbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEByZXR1cm5zICdydGwnIG9yICdsdHInXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBnZXRMb2NhbGVEaXJlY3Rpb24obG9jYWxlOiBzdHJpbmcpOiAnbHRyJyB8ICdydGwnO1xyXG5cclxuLyoqXHJcbiAqIFJldHJpZXZlcyBHcmVnb3JpYW4tY2FsZW5kYXIgZXJhcyBmb3IgdGhlIGdpdmVuIGxvY2FsZS5cclxuICogQHBhcmFtIGxvY2FsZSBBIGxvY2FsZSBjb2RlIGZvciB0aGUgbG9jYWxlIGZvcm1hdCBydWxlcyB0byB1c2UuXHJcbiAqIEBwYXJhbSBmb3JtU3R5bGUgVGhlIHJlcXVpcmVkIGdyYW1tYXRpY2FsIGZvcm0uXHJcbiAqIEBwYXJhbSB3aWR0aCBUaGUgcmVxdWlyZWQgY2hhcmFjdGVyIHdpZHRoLlxyXG5cclxuICogQHJldHVybnMgQW4gYXJyYXkgb2YgbG9jYWxpemVkIGVyYSBzdHJpbmdzLlxyXG4gKiBGb3IgZXhhbXBsZSwgYFtBRCwgQkNdYCBmb3IgYGVuLVVTYC5cclxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gZ2V0TG9jYWxlRXJhTmFtZXMobG9jYWxlOiBzdHJpbmcsIHdpZHRoOiBUcmFuc2xhdGlvbldpZHRoKTogW3N0cmluZywgc3RyaW5nXTtcclxuXHJcbi8qKlxyXG4gKiBSZXRyaWV2ZXMgbG9jYWxlLXNwZWNpZmljIHJ1bGVzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoaWNoIGRheSBwZXJpb2QgdG8gdXNlXHJcbiAqIHdoZW4gbW9yZSB0aGFuIG9uZSBwZXJpb2QgaXMgZGVmaW5lZCBmb3IgYSBsb2NhbGUuXHJcbiAqXHJcbiAqIFRoZXJlIGlzIGEgcnVsZSBmb3IgZWFjaCBkZWZpbmVkIGRheSBwZXJpb2QuIFRoZVxyXG4gKiBmaXJzdCBydWxlIGlzIGFwcGxpZWQgdG8gdGhlIGZpcnN0IGRheSBwZXJpb2QgYW5kIHNvIG9uLlxyXG4gKiBGYWxsIGJhY2sgdG8gQU0vUE0gd2hlbiBubyBydWxlcyBhcmUgYXZhaWxhYmxlLlxyXG4gKlxyXG4gKiBBIHJ1bGUgY2FuIHNwZWNpZnkgYSBwZXJpb2QgYXMgdGltZSByYW5nZSwgb3IgYXMgYSBzaW5nbGUgdGltZSB2YWx1ZS5cclxuICpcclxuICogVGhpcyBmdW5jdGlvbmFsaXR5IGlzIG9ubHkgYXZhaWxhYmxlIHdoZW4geW91IGhhdmUgbG9hZGVkIHRoZSBmdWxsIGxvY2FsZSBkYXRhLlxyXG4gKiBTZWUgdGhlIFtcIkkxOG4gZ3VpZGVcIl0oZ3VpZGUvaTE4biNpMThuLXBpcGVzKS5cclxuICpcclxuICogQHBhcmFtIGxvY2FsZSBBIGxvY2FsZSBjb2RlIGZvciB0aGUgbG9jYWxlIGZvcm1hdCBydWxlcyB0byB1c2UuXHJcbiAqIEByZXR1cm5zIFRoZSBydWxlcyBmb3IgdGhlIGxvY2FsZSwgYSBzaW5nbGUgdGltZSB2YWx1ZSBvciBhcnJheSBvZiAqZnJvbS10aW1lLCB0by10aW1lKixcclxuICogb3IgbnVsbCBpZiBubyBwZXJpb2RzIGFyZSBhdmFpbGFibGUuXHJcbiAqXHJcbiAqIEBzZWUgYGdldExvY2FsZUV4dHJhRGF5UGVyaW9kcygpYFxyXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBnZXRMb2NhbGVFeHRyYURheVBlcmlvZFJ1bGVzKGxvY2FsZTogc3RyaW5nKTogKFRpbWUgfCBbVGltZSwgVGltZV0pW107XHJcblxyXG4vKipcclxuICogUmV0cmlldmVzIGxvY2FsZS1zcGVjaWZpYyBkYXkgcGVyaW9kcywgd2hpY2ggaW5kaWNhdGUgcm91Z2hseSBob3cgYSBkYXkgaXMgYnJva2VuIHVwXHJcbiAqIGluIGRpZmZlcmVudCBsYW5ndWFnZXMuXHJcbiAqIEZvciBleGFtcGxlLCBmb3IgYGVuLVVTYCwgcGVyaW9kcyBhcmUgbW9ybmluZywgbm9vbiwgYWZ0ZXJub29uLCBldmVuaW5nLCBhbmQgbWlkbmlnaHQuXHJcbiAqXHJcbiAqIFRoaXMgZnVuY3Rpb25hbGl0eSBpcyBvbmx5IGF2YWlsYWJsZSB3aGVuIHlvdSBoYXZlIGxvYWRlZCB0aGUgZnVsbCBsb2NhbGUgZGF0YS5cclxuICogU2VlIHRoZSBbXCJJMThuIGd1aWRlXCJdKGd1aWRlL2kxOG4jaTE4bi1waXBlcykuXHJcbiAqXHJcbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxyXG4gKiBAcGFyYW0gZm9ybVN0eWxlIFRoZSByZXF1aXJlZCBncmFtbWF0aWNhbCBmb3JtLlxyXG4gKiBAcGFyYW0gd2lkdGggVGhlIHJlcXVpcmVkIGNoYXJhY3RlciB3aWR0aC5cclxuICogQHJldHVybnMgVGhlIHRyYW5zbGF0ZWQgZGF5LXBlcmlvZCBzdHJpbmdzLlxyXG4gKiBAc2VlIGBnZXRMb2NhbGVFeHRyYURheVBlcmlvZFJ1bGVzKClgXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGdldExvY2FsZUV4dHJhRGF5UGVyaW9kcyhsb2NhbGU6IHN0cmluZywgZm9ybVN0eWxlOiBGb3JtU3R5bGUsIHdpZHRoOiBUcmFuc2xhdGlvbldpZHRoKTogc3RyaW5nW107XHJcblxyXG4vKipcclxuICogUmV0cmlldmVzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgZm9yIHRoZSBnaXZlbiBsb2NhbGUuXHJcbiAqXHJcbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxyXG4gKiBAcmV0dXJucyBBIGRheSBpbmRleCBudW1iZXIsIHVzaW5nIHRoZSAwLWJhc2VkIHdlZWstZGF5IGluZGV4IGZvciBgZW4tVVNgXHJcbiAqIChTdW5kYXkgPSAwLCBNb25kYXkgPSAxLCAuLi4pLlxyXG4gKiBGb3IgZXhhbXBsZSwgZm9yIGBmci1GUmAsIHJldHVybnMgMSB0byBpbmRpY2F0ZSB0aGF0IHRoZSBmaXJzdCBkYXkgaXMgTW9uZGF5LlxyXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBnZXRMb2NhbGVGaXJzdERheU9mV2Vlayhsb2NhbGU6IHN0cmluZyk6IFdlZWtEYXk7XHJcblxyXG4vKipcclxuICogUmV0cmlldmVzIHRoZSBsb2NhbGUgSUQgZnJvbSB0aGUgY3VycmVudGx5IGxvYWRlZCBsb2NhbGUuXHJcbiAqIFRoZSBsb2FkZWQgbG9jYWxlIGNvdWxkIGJlLCBmb3IgZXhhbXBsZSwgYSBnbG9iYWwgb25lIHJhdGhlciB0aGFuIGEgcmVnaW9uYWwgb25lLlxyXG4gKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUsIHN1Y2ggYXMgYGZyLUZSYC5cclxuICogQHJldHVybnMgVGhlIGxvY2FsZSBjb2RlLiBGb3IgZXhhbXBsZSwgYGZyYC5cclxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gZ2V0TG9jYWxlSWQobG9jYWxlOiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG4vKipcclxuICogUmV0cmlldmVzIG1vbnRocyBvZiB0aGUgeWVhciBmb3IgdGhlIGdpdmVuIGxvY2FsZSwgdXNpbmcgdGhlIEdyZWdvcmlhbiBjYWxlbmRhci5cclxuICpcclxuICogQHBhcmFtIGxvY2FsZSBBIGxvY2FsZSBjb2RlIGZvciB0aGUgbG9jYWxlIGZvcm1hdCBydWxlcyB0byB1c2UuXHJcbiAqIEBwYXJhbSBmb3JtU3R5bGUgVGhlIHJlcXVpcmVkIGdyYW1tYXRpY2FsIGZvcm0uXHJcbiAqIEBwYXJhbSB3aWR0aCBUaGUgcmVxdWlyZWQgY2hhcmFjdGVyIHdpZHRoLlxyXG4gKiBAcmV0dXJucyBBbiBhcnJheSBvZiBsb2NhbGl6ZWQgbmFtZSBzdHJpbmdzLlxyXG4gKiBGb3IgZXhhbXBsZSwgIGBbSmFudWFyeSwgRmVicnVhcnksIC4uLl1gIGZvciBgZW4tVVNgLlxyXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBnZXRMb2NhbGVNb250aE5hbWVzKGxvY2FsZTogc3RyaW5nLCBmb3JtU3R5bGU6IEZvcm1TdHlsZSwgd2lkdGg6IFRyYW5zbGF0aW9uV2lkdGgpOiBzdHJpbmdbXTtcclxuXHJcbi8qKlxyXG4gKiBSZXRyaWV2ZXMgYSBudW1iZXIgZm9ybWF0IGZvciBhIGdpdmVuIGxvY2FsZS5cclxuICpcclxuICogTnVtYmVycyBhcmUgZm9ybWF0dGVkIHVzaW5nIHBhdHRlcm5zLCBsaWtlIGAjLCMjIy4wMGAuIEZvciBleGFtcGxlLCB0aGUgcGF0dGVybiBgIywjIyMuMDBgXHJcbiAqIHdoZW4gdXNlZCB0byBmb3JtYXQgdGhlIG51bWJlciAxMjM0NS42NzggY291bGQgcmVzdWx0IGluIFwiMTInMzQ1LDY3OFwiLiBUaGF0IHdvdWxkIGhhcHBlbiBpZiB0aGVcclxuICogZ3JvdXBpbmcgc2VwYXJhdG9yIGZvciB5b3VyIGxhbmd1YWdlIGlzIGFuIGFwb3N0cm9waGUsIGFuZCB0aGUgZGVjaW1hbCBzZXBhcmF0b3IgaXMgYSBjb21tYS5cclxuICpcclxuICogPGI+SW1wb3J0YW50OjwvYj4gVGhlIGNoYXJhY3RlcnMgYC5gIGAsYCBgMGAgYCNgIChhbmQgb3RoZXJzIGJlbG93KSBhcmUgc3BlY2lhbCBwbGFjZWhvbGRlcnNcclxuICogdGhhdCBzdGFuZCBmb3IgdGhlIGRlY2ltYWwgc2VwYXJhdG9yLCBhbmQgc28gb24sIGFuZCBhcmUgTk9UIHJlYWwgY2hhcmFjdGVycy5cclxuICogWW91IG11c3QgTk9UIFwidHJhbnNsYXRlXCIgdGhlIHBsYWNlaG9sZGVycy4gRm9yIGV4YW1wbGUsIGRvbid0IGNoYW5nZSBgLmAgdG8gYCxgIGV2ZW4gdGhvdWdoIGluXHJcbiAqIHlvdXIgbGFuZ3VhZ2UgdGhlIGRlY2ltYWwgcG9pbnQgaXMgd3JpdHRlbiB3aXRoIGEgY29tbWEuIFRoZSBzeW1ib2xzIHNob3VsZCBiZSByZXBsYWNlZCBieSB0aGVcclxuICogbG9jYWwgZXF1aXZhbGVudHMsIHVzaW5nIHRoZSBhcHByb3ByaWF0ZSBgTnVtYmVyU3ltYm9sYCBmb3IgeW91ciBsYW5ndWFnZS5cclxuICpcclxuICogSGVyZSBhcmUgdGhlIHNwZWNpYWwgY2hhcmFjdGVycyB1c2VkIGluIG51bWJlciBwYXR0ZXJuczpcclxuICpcclxuICogfCBTeW1ib2wgfCBNZWFuaW5nIHxcclxuICogfC0tLS0tLS0tfC0tLS0tLS0tLXxcclxuICogfCAuIHwgUmVwbGFjZWQgYXV0b21hdGljYWxseSBieSB0aGUgY2hhcmFjdGVyIHVzZWQgZm9yIHRoZSBkZWNpbWFsIHBvaW50LiB8XHJcbiAqIHwgLCB8IFJlcGxhY2VkIGJ5IHRoZSBcImdyb3VwaW5nXCIgKHRob3VzYW5kcykgc2VwYXJhdG9yLiB8XHJcbiAqIHwgMCB8IFJlcGxhY2VkIGJ5IGEgZGlnaXQgKG9yIHplcm8gaWYgdGhlcmUgYXJlbid0IGVub3VnaCBkaWdpdHMpLiB8XHJcbiAqIHwgIyB8IFJlcGxhY2VkIGJ5IGEgZGlnaXQgKG9yIG5vdGhpbmcgaWYgdGhlcmUgYXJlbid0IGVub3VnaCkuIHxcclxuICogfCDCpCB8IFJlcGxhY2VkIGJ5IGEgY3VycmVuY3kgc3ltYm9sLCBzdWNoIGFzICQgb3IgVVNELiB8XHJcbiAqIHwgJSB8IE1hcmtzIGEgcGVyY2VudCBmb3JtYXQuIFRoZSAlIHN5bWJvbCBtYXkgY2hhbmdlIHBvc2l0aW9uLCBidXQgbXVzdCBiZSByZXRhaW5lZC4gfFxyXG4gKiB8IEUgfCBNYXJrcyBhIHNjaWVudGlmaWMgZm9ybWF0LiBUaGUgRSBzeW1ib2wgbWF5IGNoYW5nZSBwb3NpdGlvbiwgYnV0IG11c3QgYmUgcmV0YWluZWQuIHxcclxuICogfCAnIHwgU3BlY2lhbCBjaGFyYWN0ZXJzIHVzZWQgYXMgbGl0ZXJhbCBjaGFyYWN0ZXJzIGFyZSBxdW90ZWQgd2l0aCBBU0NJSSBzaW5nbGUgcXVvdGVzLiB8XHJcbiAqXHJcbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxyXG4gKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiBudW1lcmljIHZhbHVlIHRvIGJlIGZvcm1hdHRlZCAoc3VjaCBhcyBgRGVjaW1hbGAgb3IgYEN1cnJlbmN5YC4pXHJcbiAqIEByZXR1cm5zIFRoZSBsb2NhbGl6ZWQgZm9ybWF0IHN0cmluZy5cclxuICogQHNlZSBgTnVtYmVyRm9ybWF0U3R5bGVgXHJcbiAqIEBzZWUgW0NMRFIgd2Vic2l0ZV0oaHR0cDovL2NsZHIudW5pY29kZS5vcmcvdHJhbnNsYXRpb24vbnVtYmVyLXBhdHRlcm5zKVxyXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBnZXRMb2NhbGVOdW1iZXJGb3JtYXQobG9jYWxlOiBzdHJpbmcsIHR5cGU6IE51bWJlckZvcm1hdFN0eWxlKTogc3RyaW5nO1xyXG5cclxuLyoqXHJcbiAqIFJldHJpZXZlcyBhIGxvY2FsaXplZCBudW1iZXIgc3ltYm9sIHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVwbGFjZSBwbGFjZWhvbGRlcnMgaW4gbnVtYmVyIGZvcm1hdHMuXHJcbiAqIEBwYXJhbSBsb2NhbGUgVGhlIGxvY2FsZSBjb2RlLlxyXG4gKiBAcGFyYW0gc3ltYm9sIFRoZSBzeW1ib2wgdG8gbG9jYWxpemUuXHJcbiAqIEByZXR1cm5zIFRoZSBjaGFyYWN0ZXIgZm9yIHRoZSBsb2NhbGl6ZWQgc3ltYm9sLlxyXG4gKiBAc2VlIGBOdW1iZXJTeW1ib2xgXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGdldExvY2FsZU51bWJlclN5bWJvbChsb2NhbGU6IHN0cmluZywgc3ltYm9sOiBOdW1iZXJTeW1ib2wpOiBzdHJpbmc7XHJcblxyXG4vKipcclxuICogQGFsaWFzIGNvcmUvybVnZXRMb2NhbGVQbHVyYWxDYXNlXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IGdldExvY2FsZVBsdXJhbENhc2U6IChsb2NhbGU6IHN0cmluZykgPT4gKCh2YWx1ZTogbnVtYmVyKSA9PiBQbHVyYWwpO1xyXG5cclxuLyoqXHJcbiAqIFJldHJpZXZlcyBhIGxvY2FsaXplZCB0aW1lLXZhbHVlIGZvcm1hdHRpbmcgc3RyaW5nLlxyXG4gKlxyXG4gKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cclxuICogQHBhcmFtIHdpZHRoIFRoZSBmb3JtYXQgdHlwZS5cclxuICogQHJldHVybnMgVGhlIGxvY2FsaXplZCBmb3JtYXR0aW5nIHN0cmluZy5cclxuICogQHNlZSBgRm9ybWF0V2lkdGhgXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcblxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBnZXRMb2NhbGVUaW1lRm9ybWF0KGxvY2FsZTogc3RyaW5nLCB3aWR0aDogRm9ybWF0V2lkdGgpOiBzdHJpbmc7XHJcblxyXG4vKipcclxuICogUmFuZ2Ugb2Ygd2VlayBkYXlzIHRoYXQgYXJlIGNvbnNpZGVyZWQgdGhlIHdlZWstZW5kIGZvciB0aGUgZ2l2ZW4gbG9jYWxlLlxyXG4gKlxyXG4gKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cclxuICogQHJldHVybnMgVGhlIHJhbmdlIG9mIGRheSB2YWx1ZXMsIGBbc3RhcnREYXksIGVuZERheV1gLlxyXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBnZXRMb2NhbGVXZWVrRW5kUmFuZ2UobG9jYWxlOiBzdHJpbmcpOiBbV2Vla0RheSwgV2Vla0RheV07XHJcblxyXG4vKipcclxuICogUmVwb3J0cyB0aGUgbnVtYmVyIG9mIGRlY2ltYWwgZGlnaXRzIGZvciBhIGdpdmVuIGN1cnJlbmN5LlxyXG4gKiBUaGUgdmFsdWUgZGVwZW5kcyB1cG9uIHRoZSBwcmVzZW5jZSBvZiBjZW50cyBpbiB0aGF0IHBhcnRpY3VsYXIgY3VycmVuY3kuXHJcbiAqXHJcbiAqIEBwYXJhbSBjb2RlIFRoZSBjdXJyZW5jeSBjb2RlLlxyXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGRlY2ltYWwgZGlnaXRzLCB0eXBpY2FsbHkgMCBvciAyLlxyXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBnZXROdW1iZXJPZkN1cnJlbmN5RGlnaXRzKGNvZGU6IHN0cmluZyk6IG51bWJlcjtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB7QGxpbmsgTG9jYXRpb25TdHJhdGVneX0gdXNlZCB0byBjb25maWd1cmUgdGhlIHtAbGluayBMb2NhdGlvbn0gc2VydmljZSB0b1xyXG4gKiByZXByZXNlbnQgaXRzIHN0YXRlIGluIHRoZVxyXG4gKiBbaGFzaCBmcmFnbWVudF0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW5pZm9ybV9SZXNvdXJjZV9Mb2NhdG9yI1N5bnRheClcclxuICogb2YgdGhlIGJyb3dzZXIncyBVUkwuXHJcbiAqXHJcbiAqIEZvciBpbnN0YW5jZSwgaWYgeW91IGNhbGwgYGxvY2F0aW9uLmdvKCcvZm9vJylgLCB0aGUgYnJvd3NlcidzIFVSTCB3aWxsIGJlY29tZVxyXG4gKiBgZXhhbXBsZS5jb20jL2Zvb2AuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqXHJcbiAqIHtAZXhhbXBsZSBjb21tb24vbG9jYXRpb24vdHMvaGFzaF9sb2NhdGlvbl9jb21wb25lbnQudHMgcmVnaW9uPSdMb2NhdGlvbkNvbXBvbmVudCd9XHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEhhc2hMb2NhdGlvblN0cmF0ZWd5IGV4dGVuZHMgTG9jYXRpb25TdHJhdGVneSB7XHJcbiAgICBwcml2YXRlIF9wbGF0Zm9ybUxvY2F0aW9uO1xyXG4gICAgcHJpdmF0ZSBfYmFzZUhyZWY7XHJcbiAgICBjb25zdHJ1Y3RvcihfcGxhdGZvcm1Mb2NhdGlvbjogUGxhdGZvcm1Mb2NhdGlvbiwgX2Jhc2VIcmVmPzogc3RyaW5nKTtcclxuICAgIG9uUG9wU3RhdGUoZm46IExvY2F0aW9uQ2hhbmdlTGlzdGVuZXIpOiB2b2lkO1xyXG4gICAgZ2V0QmFzZUhyZWYoKTogc3RyaW5nO1xyXG4gICAgcGF0aChpbmNsdWRlSGFzaD86IGJvb2xlYW4pOiBzdHJpbmc7XHJcbiAgICBwcmVwYXJlRXh0ZXJuYWxVcmwoaW50ZXJuYWw6IHN0cmluZyk6IHN0cmluZztcclxuICAgIHB1c2hTdGF0ZShzdGF0ZTogYW55LCB0aXRsZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHF1ZXJ5UGFyYW1zOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgcmVwbGFjZVN0YXRlKHN0YXRlOiBhbnksIHRpdGxlOiBzdHJpbmcsIHBhdGg6IHN0cmluZywgcXVlcnlQYXJhbXM6IHN0cmluZyk6IHZvaWQ7XHJcbiAgICBmb3J3YXJkKCk6IHZvaWQ7XHJcbiAgICBiYWNrKCk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBNYXBzIGEgdmFsdWUgdG8gYSBzdHJpbmcgdGhhdCBwbHVyYWxpemVzIHRoZSB2YWx1ZSBhY2NvcmRpbmcgdG8gbG9jYWxlIHJ1bGVzLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKlxyXG4gKiB7QGV4YW1wbGUgY29tbW9uL3BpcGVzL3RzL2kxOG5fcGlwZS50cyByZWdpb249J0kxOG5QbHVyYWxQaXBlQ29tcG9uZW50J31cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSTE4blBsdXJhbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHByaXZhdGUgX2xvY2FsaXphdGlvbjtcclxuICAgIGNvbnN0cnVjdG9yKF9sb2NhbGl6YXRpb246IE5nTG9jYWxpemF0aW9uKTtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHZhbHVlIHRoZSBudW1iZXIgdG8gYmUgZm9ybWF0dGVkXHJcbiAgICAgKiBAcGFyYW0gcGx1cmFsTWFwIGFuIG9iamVjdCB0aGF0IG1pbWljcyB0aGUgSUNVIGZvcm1hdCwgc2VlXHJcbiAgICAgKiBodHRwOi8vdXNlcmd1aWRlLmljdS1wcm9qZWN0Lm9yZy9mb3JtYXRwYXJzZS9tZXNzYWdlcy5cclxuICAgICAqIEBwYXJhbSBsb2NhbGUgYSBgc3RyaW5nYCBkZWZpbmluZyB0aGUgbG9jYWxlIHRvIHVzZSAodXNlcyB0aGUgY3VycmVudCB7QGxpbmsgTE9DQUxFX0lEfSBieVxyXG4gICAgICogZGVmYXVsdCkuXHJcbiAgICAgKi9cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyLCBwbHVyYWxNYXA6IHtcclxuICAgICAgICBbY291bnQ6IHN0cmluZ106IHN0cmluZztcclxuICAgIH0sIGxvY2FsZT86IHN0cmluZyk6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuZ01vZHVsZSBDb21tb25Nb2R1bGVcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIEdlbmVyaWMgc2VsZWN0b3IgdGhhdCBkaXNwbGF5cyB0aGUgc3RyaW5nIHRoYXQgbWF0Y2hlcyB0aGUgY3VycmVudCB2YWx1ZS5cclxuICpcclxuICogSWYgbm9uZSBvZiB0aGUga2V5cyBvZiB0aGUgYG1hcHBpbmdgIG1hdGNoIHRoZSBgdmFsdWVgLCB0aGVuIHRoZSBjb250ZW50XHJcbiAqIG9mIHRoZSBgb3RoZXJgIGtleSBpcyByZXR1cm5lZCB3aGVuIHByZXNlbnQsIG90aGVyd2lzZSBhbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWQuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqXHJcbiAqIHtAZXhhbXBsZSBjb21tb24vcGlwZXMvdHMvaTE4bl9waXBlLnRzIHJlZ2lvbj0nSTE4blNlbGVjdFBpcGVDb21wb25lbnQnfVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJMThuU2VsZWN0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgYSBzdHJpbmcgdG8gYmUgaW50ZXJuYXRpb25hbGl6ZWQuXHJcbiAgICAgKiBAcGFyYW0gbWFwcGluZyBhbiBvYmplY3QgdGhhdCBpbmRpY2F0ZXMgdGhlIHRleHQgdGhhdCBzaG91bGQgYmUgZGlzcGxheWVkXHJcbiAgICAgKiBmb3IgZGlmZmVyZW50IHZhbHVlcyBvZiB0aGUgcHJvdmlkZWQgYHZhbHVlYC5cclxuICAgICAqL1xyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBtYXBwaW5nOiB7XHJcbiAgICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xyXG4gICAgfSk6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciBhIHBsYXRmb3JtIGlkIHJlcHJlc2VudHMgYSBicm93c2VyIHBsYXRmb3JtLlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkOiBPYmplY3QpOiBib29sZWFuO1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciBhIHBsYXRmb3JtIGlkIHJlcHJlc2VudHMgYSBzZXJ2ZXIgcGxhdGZvcm0uXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGlzUGxhdGZvcm1TZXJ2ZXIocGxhdGZvcm1JZDogT2JqZWN0KTogYm9vbGVhbjtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgYSBwbGF0Zm9ybSBpZCByZXByZXNlbnRzIGEgd2ViIHdvcmtlciBhcHAgcGxhdGZvcm0uXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGlzUGxhdGZvcm1Xb3JrZXJBcHAocGxhdGZvcm1JZDogT2JqZWN0KTogYm9vbGVhbjtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgYSBwbGF0Zm9ybSBpZCByZXByZXNlbnRzIGEgd2ViIHdvcmtlciBVSSBwbGF0Zm9ybS5cclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gaXNQbGF0Zm9ybVdvcmtlclVpKHBsYXRmb3JtSWQ6IE9iamVjdCk6IGJvb2xlYW47XHJcblxyXG4vKipcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQ29udmVydHMgYSB2YWx1ZSBpbnRvIGl0cyBKU09OLWZvcm1hdCByZXByZXNlbnRhdGlvbi4gIFVzZWZ1bCBmb3IgZGVidWdnaW5nLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKlxyXG4gKiBUaGUgZm9sbG93aW5nIGNvbXBvbmVudCB1c2VzIGEgSlNPTiBwaXBlIHRvIGNvbnZlcnQgYW4gb2JqZWN0XHJcbiAqIHRvIEpTT04gZm9ybWF0LCBhbmQgZGlzcGxheXMgdGhlIHN0cmluZyBpbiBib3RoIGZvcm1hdHMgZm9yIGNvbXBhcmlzb24uXHJcbiAqXHJcbiAqIHtAZXhhbXBsZSBjb21tb24vcGlwZXMvdHMvanNvbl9waXBlLnRzIHJlZ2lvbj0nSnNvblBpcGUnfVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBKc29uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgQSB2YWx1ZSBvZiBhbnkgdHlwZSB0byBjb252ZXJ0IGludG8gYSBKU09OLWZvcm1hdCBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55KTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQSBrZXkgdmFsdWUgcGFpci5cclxuICogVXN1YWxseSB1c2VkIHRvIHJlcHJlc2VudCB0aGUga2V5IHZhbHVlIHBhaXJzIGZyb20gYSBNYXAgb3IgT2JqZWN0LlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgS2V5VmFsdWU8SywgVj4ge1xyXG4gICAga2V5OiBLO1xyXG4gICAgdmFsdWU6IFY7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBUcmFuc2Zvcm1zIE9iamVjdCBvciBNYXAgaW50byBhbiBhcnJheSBvZiBrZXkgdmFsdWUgcGFpcnMuXHJcbiAqXHJcbiAqIFRoZSBvdXRwdXQgYXJyYXkgd2lsbCBiZSBvcmRlcmVkIGJ5IGtleXMuXHJcbiAqIEJ5IGRlZmF1bHQgdGhlIGNvbXBhcmF0b3Igd2lsbCBiZSBieSBVbmljb2RlIHBvaW50IHZhbHVlLlxyXG4gKiBZb3UgY2FuIG9wdGlvbmFsbHkgcGFzcyBhIGNvbXBhcmVGbiBpZiB5b3VyIGtleXMgYXJlIGNvbXBsZXggdHlwZXMuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqICMjIyBFeGFtcGxlc1xyXG4gKlxyXG4gKiBUaGlzIGV4YW1wbGVzIHNob3cgaG93IGFuIE9iamVjdCBvciBhIE1hcCBjYW4gYmUgaXRlcmF0ZWQgYnkgbmdGb3Igd2l0aCB0aGUgdXNlIG9mIHRoaXMga2V5dmFsdWVcclxuICogcGlwZS5cclxuICpcclxuICoge0BleGFtcGxlIGNvbW1vbi9waXBlcy90cy9rZXl2YWx1ZV9waXBlLnRzIHJlZ2lvbj0nS2V5VmFsdWVQaXBlJ31cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgS2V5VmFsdWVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRpZmZlcnM7XHJcbiAgICBjb25zdHJ1Y3RvcihkaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMpO1xyXG4gICAgcHJpdmF0ZSBkaWZmZXI7XHJcbiAgICBwcml2YXRlIGtleVZhbHVlcztcclxuICAgIHRyYW5zZm9ybTxLLCBWPihpbnB1dDogbnVsbCwgY29tcGFyZUZuPzogKGE6IEtleVZhbHVlPEssIFY+LCBiOiBLZXlWYWx1ZTxLLCBWPikgPT4gbnVtYmVyKTogbnVsbDtcclxuICAgIHRyYW5zZm9ybTxWPihpbnB1dDoge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IFY7XHJcbiAgICB9IHwgTWFwPHN0cmluZywgVj4sIGNvbXBhcmVGbj86IChhOiBLZXlWYWx1ZTxzdHJpbmcsIFY+LCBiOiBLZXlWYWx1ZTxzdHJpbmcsIFY+KSA9PiBudW1iZXIpOiBBcnJheTxLZXlWYWx1ZTxzdHJpbmcsIFY+PjtcclxuICAgIHRyYW5zZm9ybTxWPihpbnB1dDoge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IFY7XHJcbiAgICB9IHwgTWFwPHN0cmluZywgVj4gfCBudWxsLCBjb21wYXJlRm4/OiAoYTogS2V5VmFsdWU8c3RyaW5nLCBWPiwgYjogS2V5VmFsdWU8c3RyaW5nLCBWPikgPT4gbnVtYmVyKTogQXJyYXk8S2V5VmFsdWU8c3RyaW5nLCBWPj4gfCBudWxsO1xyXG4gICAgdHJhbnNmb3JtPFY+KGlucHV0OiB7XHJcbiAgICAgICAgW2tleTogbnVtYmVyXTogVjtcclxuICAgIH0gfCBNYXA8bnVtYmVyLCBWPiwgY29tcGFyZUZuPzogKGE6IEtleVZhbHVlPG51bWJlciwgVj4sIGI6IEtleVZhbHVlPG51bWJlciwgVj4pID0+IG51bWJlcik6IEFycmF5PEtleVZhbHVlPG51bWJlciwgVj4+O1xyXG4gICAgdHJhbnNmb3JtPFY+KGlucHV0OiB7XHJcbiAgICAgICAgW2tleTogbnVtYmVyXTogVjtcclxuICAgIH0gfCBNYXA8bnVtYmVyLCBWPiB8IG51bGwsIGNvbXBhcmVGbj86IChhOiBLZXlWYWx1ZTxudW1iZXIsIFY+LCBiOiBLZXlWYWx1ZTxudW1iZXIsIFY+KSA9PiBudW1iZXIpOiBBcnJheTxLZXlWYWx1ZTxudW1iZXIsIFY+PiB8IG51bGw7XHJcbiAgICB0cmFuc2Zvcm08SywgVj4oaW5wdXQ6IE1hcDxLLCBWPiwgY29tcGFyZUZuPzogKGE6IEtleVZhbHVlPEssIFY+LCBiOiBLZXlWYWx1ZTxLLCBWPikgPT4gbnVtYmVyKTogQXJyYXk8S2V5VmFsdWU8SywgVj4+O1xyXG4gICAgdHJhbnNmb3JtPEssIFY+KGlucHV0OiBNYXA8SywgVj4gfCBudWxsLCBjb21wYXJlRm4/OiAoYTogS2V5VmFsdWU8SywgVj4sIGI6IEtleVZhbHVlPEssIFY+KSA9PiBudW1iZXIpOiBBcnJheTxLZXlWYWx1ZTxLLCBWPj4gfCBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIEEgc2VydmljZSB0aGF0IGFwcGxpY2F0aW9ucyBjYW4gdXNlIHRvIGludGVyYWN0IHdpdGggYSBicm93c2VyJ3MgVVJMLlxyXG4gKlxyXG4gKiBEZXBlbmRpbmcgb24gdGhlIGBMb2NhdGlvblN0cmF0ZWd5YCB1c2VkLCBgTG9jYXRpb25gIHBlcnNpc3RzXHJcbiAqIHRvIHRoZSBVUkwncyBwYXRoIG9yIHRoZSBVUkwncyBoYXNoIHNlZ21lbnQuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqXHJcbiAqIEl0J3MgYmV0dGVyIHRvIHVzZSB0aGUgYFJvdXRlciNuYXZpZ2F0ZWAgc2VydmljZSB0byB0cmlnZ2VyIHJvdXRlIGNoYW5nZXMuIFVzZVxyXG4gKiBgTG9jYXRpb25gIG9ubHkgaWYgeW91IG5lZWQgdG8gaW50ZXJhY3Qgd2l0aCBvciBjcmVhdGUgbm9ybWFsaXplZCBVUkxzIG91dHNpZGUgb2ZcclxuICogcm91dGluZy5cclxuICpcclxuICogYExvY2F0aW9uYCBpcyByZXNwb25zaWJsZSBmb3Igbm9ybWFsaXppbmcgdGhlIFVSTCBhZ2FpbnN0IHRoZSBhcHBsaWNhdGlvbidzIGJhc2UgaHJlZi5cclxuICogQSBub3JtYWxpemVkIFVSTCBpcyBhYnNvbHV0ZSBmcm9tIHRoZSBVUkwgaG9zdCwgaW5jbHVkZXMgdGhlIGFwcGxpY2F0aW9uJ3MgYmFzZSBocmVmLCBhbmQgaGFzIG5vXHJcbiAqIHRyYWlsaW5nIHNsYXNoOlxyXG4gKiAtIGAvbXkvYXBwL3VzZXIvMTIzYCBpcyBub3JtYWxpemVkXHJcbiAqIC0gYG15L2FwcC91c2VyLzEyM2AgKippcyBub3QqKiBub3JtYWxpemVkXHJcbiAqIC0gYC9teS9hcHAvdXNlci8xMjMvYCAqKmlzIG5vdCoqIG5vcm1hbGl6ZWRcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICpcclxuICogPGNvZGUtZXhhbXBsZSBwYXRoPSdjb21tb24vbG9jYXRpb24vdHMvcGF0aF9sb2NhdGlvbl9jb21wb25lbnQudHMnXHJcbiAqIHJlZ2lvbj0nTG9jYXRpb25Db21wb25lbnQnPjwvY29kZS1leGFtcGxlPlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBMb2NhdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF0Zm9ybVN0cmF0ZWd5OiBMb2NhdGlvblN0cmF0ZWd5LCBwbGF0Zm9ybUxvY2F0aW9uOiBQbGF0Zm9ybUxvY2F0aW9uKTtcclxuICAgIC8qKlxyXG4gICAgICogTm9ybWFsaXplcyB0aGUgVVJMIHBhdGggZm9yIHRoaXMgbG9jYXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGluY2x1ZGVIYXNoIFRydWUgdG8gaW5jbHVkZSBhbiBhbmNob3IgZnJhZ21lbnQgaW4gdGhlIHBhdGguXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgVGhlIG5vcm1hbGl6ZWQgVVJMIHBhdGguXHJcbiAgICAgKi9cclxuICAgIHBhdGgoaW5jbHVkZUhhc2g/OiBib29sZWFuKTogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXBvcnRzIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBsb2NhdGlvbiBoaXN0b3J5LlxyXG4gICAgICogQHJldHVybnMgVGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGBoaXN0b3J5LnN0YXRlYCBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIGdldFN0YXRlKCk6IHVua25vd247XHJcbiAgICAvKipcclxuICAgICAqIE5vcm1hbGl6ZXMgdGhlIGdpdmVuIHBhdGggYW5kIGNvbXBhcmVzIHRvIHRoZSBjdXJyZW50IG5vcm1hbGl6ZWQgcGF0aC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gcGF0aCBUaGUgZ2l2ZW4gVVJMIHBhdGguXHJcbiAgICAgKiBAcGFyYW0gcXVlcnkgUXVlcnkgcGFyYW1ldGVycy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBnaXZlbiBVUkwgcGF0aCBpcyBlcXVhbCB0byB0aGUgY3VycmVudCBub3JtYWxpemVkIHBhdGgsIGZhbHNlXHJcbiAgICAgKiBvdGhlcndpc2UuXHJcbiAgICAgKi9cclxuICAgIGlzQ3VycmVudFBhdGhFcXVhbFRvKHBhdGg6IHN0cmluZywgcXVlcnk/OiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBOb3JtYWxpemVzIGEgVVJMIHBhdGggYnkgc3RyaXBwaW5nIGFueSB0cmFpbGluZyBzbGFzaGVzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgU3RyaW5nIHJlcHJlc2VudGluZyBhIFVSTC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbm9ybWFsaXplZCBVUkwgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBub3JtYWxpemUodXJsOiBzdHJpbmcpOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIE5vcm1hbGl6ZXMgYW4gZXh0ZXJuYWwgVVJMIHBhdGguXHJcbiAgICAgKiBJZiB0aGUgZ2l2ZW4gVVJMIGRvZXNuJ3QgYmVnaW4gd2l0aCBhIGxlYWRpbmcgc2xhc2ggKGAnLydgKSwgYWRkcyBvbmVcclxuICAgICAqIGJlZm9yZSBub3JtYWxpemluZy4gQWRkcyBhIGhhc2ggaWYgYEhhc2hMb2NhdGlvblN0cmF0ZWd5YCBpc1xyXG4gICAgICogaW4gdXNlLCBvciB0aGUgYEFQUF9CQVNFX0hSRUZgIGlmIHRoZSBgUGF0aExvY2F0aW9uU3RyYXRlZ3lgIGlzIGluIHVzZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFN0cmluZyByZXByZXNlbnRpbmcgYSBVUkwuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgIEEgbm9ybWFsaXplZCBwbGF0Zm9ybS1zcGVjaWZpYyBVUkwuXHJcbiAgICAgKi9cclxuICAgIHByZXBhcmVFeHRlcm5hbFVybCh1cmw6IHN0cmluZyk6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogQ2hhbmdlcyB0aGUgYnJvd3NlcidzIFVSTCB0byBhIG5vcm1hbGl6ZWQgdmVyc2lvbiBvZiBhIGdpdmVuIFVSTCwgYW5kIHB1c2hlcyBhXHJcbiAgICAgKiBuZXcgaXRlbSBvbnRvIHRoZSBwbGF0Zm9ybSdzIGhpc3RvcnkuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHBhdGggIFVSTCBwYXRoIHRvIG5vcm1hbGl6ZS5cclxuICAgICAqIEBwYXJhbSBxdWVyeSBRdWVyeSBwYXJhbWV0ZXJzLlxyXG4gICAgICogQHBhcmFtIHN0YXRlIExvY2F0aW9uIGhpc3Rvcnkgc3RhdGUuXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBnbyhwYXRoOiBzdHJpbmcsIHF1ZXJ5Pzogc3RyaW5nLCBzdGF0ZT86IGFueSk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIENoYW5nZXMgdGhlIGJyb3dzZXIncyBVUkwgdG8gYSBub3JtYWxpemVkIHZlcnNpb24gb2YgdGhlIGdpdmVuIFVSTCwgYW5kIHJlcGxhY2VzXHJcbiAgICAgKiB0aGUgdG9wIGl0ZW0gb24gdGhlIHBsYXRmb3JtJ3MgaGlzdG9yeSBzdGFjay5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gcGF0aCAgVVJMIHBhdGggdG8gbm9ybWFsaXplLlxyXG4gICAgICogQHBhcmFtIHF1ZXJ5IFF1ZXJ5IHBhcmFtZXRlcnMuXHJcbiAgICAgKiBAcGFyYW0gc3RhdGUgTG9jYXRpb24gaGlzdG9yeSBzdGF0ZS5cclxuICAgICAqL1xyXG4gICAgcmVwbGFjZVN0YXRlKHBhdGg6IHN0cmluZywgcXVlcnk/OiBzdHJpbmcsIHN0YXRlPzogYW55KTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogTmF2aWdhdGVzIGZvcndhcmQgaW4gdGhlIHBsYXRmb3JtJ3MgaGlzdG9yeS5cclxuICAgICAqL1xyXG4gICAgZm9yd2FyZCgpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBOYXZpZ2F0ZXMgYmFjayBpbiB0aGUgcGxhdGZvcm0ncyBoaXN0b3J5LlxyXG4gICAgICovXHJcbiAgICBiYWNrKCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVycyBhIFVSTCBjaGFuZ2UgbGlzdGVuZXIuIFVzZSB0byBjYXRjaCB1cGRhdGVzIHBlcmZvcm1lZCBieSB0aGUgQW5ndWxhclxyXG4gICAgICogZnJhbWV3b3JrIHRoYXQgYXJlIG5vdCBkZXRlY3RpYmxlIHRocm91Z2ggXCJwb3BzdGF0ZVwiIG9yIFwiaGFzaGNoYW5nZVwiIGV2ZW50cy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZm4gVGhlIGNoYW5nZSBoYW5kbGVyIGZ1bmN0aW9uLCB3aGljaCB0YWtlIGEgVVJMIGFuZCBhIGxvY2F0aW9uIGhpc3Rvcnkgc3RhdGUuXHJcbiAgICAgKi9cclxuICAgIG9uVXJsQ2hhbmdlKGZuOiAodXJsOiBzdHJpbmcsIHN0YXRlOiB1bmtub3duKSA9PiB2b2lkKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogU3Vic2NyaWJlcyB0byB0aGUgcGxhdGZvcm0ncyBgcG9wU3RhdGVgIGV2ZW50cy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgRXZlbnQgdGhhdCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgc3RhdGUgaGlzdG9yeSBjaGFuZ2VzLlxyXG4gICAgICogQHBhcmFtIGV4Y2VwdGlvbiBUaGUgZXhjZXB0aW9uIHRvIHRocm93LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIFN1YnNjcmliZWQgZXZlbnRzLlxyXG4gICAgICovXHJcbiAgICBzdWJzY3JpYmUob25OZXh0OiAodmFsdWU6IFBvcFN0YXRlRXZlbnQpID0+IHZvaWQsIG9uVGhyb3c/OiAoKGV4Y2VwdGlvbjogYW55KSA9PiB2b2lkKSB8IG51bGwsIG9uUmV0dXJuPzogKCgpID0+IHZvaWQpIHwgbnVsbCk6IFN1YnNjcmlwdGlvbkxpa2U7XHJcbiAgICAvKipcclxuICAgICAqIE5vcm1hbGl6ZXMgVVJMIHBhcmFtZXRlcnMgYnkgcHJlcGVuZGluZyB3aXRoIGA/YCBpZiBuZWVkZWQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICBwYXJhbXMgU3RyaW5nIG9mIFVSTCBwYXJhbWV0ZXJzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIFRoZSBub3JtYWxpemVkIFVSTCBwYXJhbWV0ZXJzIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIG5vcm1hbGl6ZVF1ZXJ5UGFyYW1zOiAocGFyYW1zOiBzdHJpbmcpID0+IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogSm9pbnMgdHdvIHBhcnRzIG9mIGEgVVJMIHdpdGggYSBzbGFzaCBpZiBuZWVkZWQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHN0YXJ0ICBVUkwgc3RyaW5nXHJcbiAgICAgKiBAcGFyYW0gZW5kICAgIFVSTCBzdHJpbmdcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgVGhlIGpvaW5lZCBVUkwgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgam9pbldpdGhTbGFzaDogKHN0YXJ0OiBzdHJpbmcsIGVuZDogc3RyaW5nKSA9PiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYSB0cmFpbGluZyBzbGFzaCBmcm9tIGEgVVJMIHN0cmluZyBpZiBuZWVkZWQuXHJcbiAgICAgKiBMb29rcyBmb3IgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgZWl0aGVyIGAjYCwgYD9gLCBvciB0aGUgZW5kIG9mIHRoZVxyXG4gICAgICogbGluZSBhcyBgL2AgY2hhcmFjdGVycyBhbmQgcmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggaWYgb25lIGV4aXN0cy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFVSTCBzdHJpbmcuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgVGhlIFVSTCBzdHJpbmcsIG1vZGlmaWVkIGlmIG5lZWRlZC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIHN0cmlwVHJhaWxpbmdTbGFzaDogKHVybDogc3RyaW5nKSA9PiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogSW5kaWNhdGVzIHdoZW4gYSBsb2NhdGlvbiBpcyBpbml0aWFsaXplZC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgTE9DQVRJT05fSU5JVElBTElaRUQ6IEluamVjdGlvblRva2VuPFByb21pc2U8YW55Pj47XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgc2VyaWFsaXphYmxlIHZlcnNpb24gb2YgdGhlIGV2ZW50IGZyb20gYG9uUG9wU3RhdGVgIG9yIGBvbkhhc2hDaGFuZ2VgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBMb2NhdGlvbkNoYW5nZUV2ZW50IHtcclxuICAgIHR5cGU6IHN0cmluZztcclxuICAgIHN0YXRlOiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgTG9jYXRpb25DaGFuZ2VMaXN0ZW5lciB7XHJcbiAgICAoZXZlbnQ6IExvY2F0aW9uQ2hhbmdlRXZlbnQpOiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFbmFibGVzIHRoZSBgTG9jYXRpb25gIHNlcnZpY2UgdG8gcmVhZCByb3V0ZSBzdGF0ZSBmcm9tIHRoZSBicm93c2VyJ3MgVVJMLlxyXG4gKiBBbmd1bGFyIHByb3ZpZGVzIHR3byBzdHJhdGVnaWVzOlxyXG4gKiBgSGFzaExvY2F0aW9uU3RyYXRlZ3lgIGFuZCBgUGF0aExvY2F0aW9uU3RyYXRlZ3lgLlxyXG4gKlxyXG4gKiBBcHBsaWNhdGlvbnMgc2hvdWxkIHVzZSB0aGUgYFJvdXRlcmAgb3IgYExvY2F0aW9uYCBzZXJ2aWNlcyB0b1xyXG4gKiBpbnRlcmFjdCB3aXRoIGFwcGxpY2F0aW9uIHJvdXRlIHN0YXRlLlxyXG4gKlxyXG4gKiBGb3IgaW5zdGFuY2UsIGBIYXNoTG9jYXRpb25TdHJhdGVneWAgcHJvZHVjZXMgVVJMcyBsaWtlXHJcbiAqIDxjb2RlIGNsYXNzPVwibm8tYXV0by1saW5rXCI+aHR0cDovL2V4YW1wbGUuY29tIy9mb288L2NvZGU+LFxyXG4gKiBhbmQgYFBhdGhMb2NhdGlvblN0cmF0ZWd5YCBwcm9kdWNlc1xyXG4gKiA8Y29kZSBjbGFzcz1cIm5vLWF1dG8tbGlua1wiPmh0dHA6Ly9leGFtcGxlLmNvbS9mb288L2NvZGU+IGFzIGFuIGVxdWl2YWxlbnQgVVJMLlxyXG4gKlxyXG4gKiBTZWUgdGhlc2UgdHdvIGNsYXNzZXMgZm9yIG1vcmUuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIExvY2F0aW9uU3RyYXRlZ3kge1xyXG4gICAgYWJzdHJhY3QgcGF0aChpbmNsdWRlSGFzaD86IGJvb2xlYW4pOiBzdHJpbmc7XHJcbiAgICBhYnN0cmFjdCBwcmVwYXJlRXh0ZXJuYWxVcmwoaW50ZXJuYWw6IHN0cmluZyk6IHN0cmluZztcclxuICAgIGFic3RyYWN0IHB1c2hTdGF0ZShzdGF0ZTogYW55LCB0aXRsZTogc3RyaW5nLCB1cmw6IHN0cmluZywgcXVlcnlQYXJhbXM6IHN0cmluZyk6IHZvaWQ7XHJcbiAgICBhYnN0cmFjdCByZXBsYWNlU3RhdGUoc3RhdGU6IGFueSwgdGl0bGU6IHN0cmluZywgdXJsOiBzdHJpbmcsIHF1ZXJ5UGFyYW1zOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgYWJzdHJhY3QgZm9yd2FyZCgpOiB2b2lkO1xyXG4gICAgYWJzdHJhY3QgYmFjaygpOiB2b2lkO1xyXG4gICAgYWJzdHJhY3Qgb25Qb3BTdGF0ZShmbjogTG9jYXRpb25DaGFuZ2VMaXN0ZW5lcik6IHZvaWQ7XHJcbiAgICBhYnN0cmFjdCBnZXRCYXNlSHJlZigpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcmFuc2Zvcm1zIHRleHQgdG8gYWxsIGxvd2VyIGNhc2UuXHJcbiAqXHJcbiAqIEBzZWUgYFVwcGVyQ2FzZVBpcGVgXHJcbiAqIEBzZWUgYFRpdGxlQ2FzZVBpcGVgXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqXHJcbiAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBkZWZpbmVzIGEgdmlldyB0aGF0IGFsbG93cyB0aGUgdXNlciB0byBlbnRlclxyXG4gKiB0ZXh0LCBhbmQgdGhlbiB1c2VzIHRoZSBwaXBlIHRvIGNvbnZlcnQgdGhlIGlucHV0IHRleHQgdG8gYWxsIGxvd2VyIGNhc2UuXHJcbiAqXHJcbiAqIDxjb2RlLWV4YW1wbGUgcGF0aD1cImNvbW1vbi9waXBlcy90cy9sb3dlcnVwcGVyX3BpcGUudHNcIiByZWdpb249J0xvd2VyVXBwZXJQaXBlJz48L2NvZGUtZXhhbXBsZT5cclxuICpcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBMb3dlckNhc2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgc3RyaW5nIHRvIHRyYW5zZm9ybSB0byBsb3dlciBjYXNlLlxyXG4gICAgICovXHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyk6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuZ01vZHVsZSBDb21tb25Nb2R1bGVcclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogYGBgXHJcbiAqICAgICA8c29tZS1lbGVtZW50IFtuZ0NsYXNzXT1cIidmaXJzdCBzZWNvbmQnXCI+Li4uPC9zb21lLWVsZW1lbnQ+XHJcbiAqXHJcbiAqICAgICA8c29tZS1lbGVtZW50IFtuZ0NsYXNzXT1cIlsnZmlyc3QnLCAnc2Vjb25kJ11cIj4uLi48L3NvbWUtZWxlbWVudD5cclxuICpcclxuICogICAgIDxzb21lLWVsZW1lbnQgW25nQ2xhc3NdPVwieydmaXJzdCc6IHRydWUsICdzZWNvbmQnOiB0cnVlLCAndGhpcmQnOiBmYWxzZX1cIj4uLi48L3NvbWUtZWxlbWVudD5cclxuICpcclxuICogICAgIDxzb21lLWVsZW1lbnQgW25nQ2xhc3NdPVwic3RyaW5nRXhwfGFycmF5RXhwfG9iakV4cFwiPi4uLjwvc29tZS1lbGVtZW50PlxyXG4gKlxyXG4gKiAgICAgPHNvbWUtZWxlbWVudCBbbmdDbGFzc109XCJ7J2NsYXNzMSBjbGFzczIgY2xhc3MzJyA6IHRydWV9XCI+Li4uPC9zb21lLWVsZW1lbnQ+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQWRkcyBhbmQgcmVtb3ZlcyBDU1MgY2xhc3NlcyBvbiBhbiBIVE1MIGVsZW1lbnQuXHJcbiAqXHJcbiAqIFRoZSBDU1MgY2xhc3NlcyBhcmUgdXBkYXRlZCBhcyBmb2xsb3dzLCBkZXBlbmRpbmcgb24gdGhlIHR5cGUgb2YgdGhlIGV4cHJlc3Npb24gZXZhbHVhdGlvbjpcclxuICogLSBgc3RyaW5nYCAtIHRoZSBDU1MgY2xhc3NlcyBsaXN0ZWQgaW4gdGhlIHN0cmluZyAoc3BhY2UgZGVsaW1pdGVkKSBhcmUgYWRkZWQsXHJcbiAqIC0gYEFycmF5YCAtIHRoZSBDU1MgY2xhc3NlcyBkZWNsYXJlZCBhcyBBcnJheSBlbGVtZW50cyBhcmUgYWRkZWQsXHJcbiAqIC0gYE9iamVjdGAgLSBrZXlzIGFyZSBDU1MgY2xhc3NlcyB0aGF0IGdldCBhZGRlZCB3aGVuIHRoZSBleHByZXNzaW9uIGdpdmVuIGluIHRoZSB2YWx1ZVxyXG4gKiAgICAgICAgICAgICAgZXZhbHVhdGVzIHRvIGEgdHJ1dGh5IHZhbHVlLCBvdGhlcndpc2UgdGhleSBhcmUgcmVtb3ZlZC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdDbGFzcyBpbXBsZW1lbnRzIERvQ2hlY2sge1xyXG4gICAgcHJpdmF0ZSBfaXRlcmFibGVEaWZmZXJzO1xyXG4gICAgcHJpdmF0ZSBfa2V5VmFsdWVEaWZmZXJzO1xyXG4gICAgcHJpdmF0ZSBfbmdFbDtcclxuICAgIHByaXZhdGUgX3JlbmRlcmVyO1xyXG4gICAgcHJpdmF0ZSBfaXRlcmFibGVEaWZmZXI7XHJcbiAgICBwcml2YXRlIF9rZXlWYWx1ZURpZmZlcjtcclxuICAgIHByaXZhdGUgX2luaXRpYWxDbGFzc2VzO1xyXG4gICAgcHJpdmF0ZSBfcmF3Q2xhc3M7XHJcbiAgICBjb25zdHJ1Y3RvcihfaXRlcmFibGVEaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMsIF9rZXlWYWx1ZURpZmZlcnM6IEtleVZhbHVlRGlmZmVycywgX25nRWw6IEVsZW1lbnRSZWYsIF9yZW5kZXJlcjogUmVuZGVyZXIyKTtcclxuICAgIHNldCBrbGFzcyh2YWx1ZTogc3RyaW5nKTtcclxuICAgIHNldCBuZ0NsYXNzKHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSB8IFNldDxzdHJpbmc+IHwge1xyXG4gICAgICAgIFtrbGFzczogc3RyaW5nXTogYW55O1xyXG4gICAgfSk7XHJcbiAgICBuZ0RvQ2hlY2soKTogdm9pZDtcclxuICAgIHByaXZhdGUgX2FwcGx5S2V5VmFsdWVDaGFuZ2VzO1xyXG4gICAgcHJpdmF0ZSBfYXBwbHlJdGVyYWJsZUNoYW5nZXM7XHJcbiAgICAvKipcclxuICAgICAqIEFwcGxpZXMgYSBjb2xsZWN0aW9uIG9mIENTUyBjbGFzc2VzIHRvIHRoZSBET00gZWxlbWVudC5cclxuICAgICAqXHJcbiAgICAgKiBGb3IgYXJndW1lbnQgb2YgdHlwZSBTZXQgYW5kIEFycmF5IENTUyBjbGFzcyBuYW1lcyBjb250YWluZWQgaW4gdGhvc2UgY29sbGVjdGlvbnMgYXJlIGFsd2F5c1xyXG4gICAgICogYWRkZWQuXHJcbiAgICAgKiBGb3IgYXJndW1lbnQgb2YgdHlwZSBNYXAgQ1NTIGNsYXNzIG5hbWUgaW4gdGhlIG1hcCdzIGtleSBpcyB0b2dnbGVkIGJhc2VkIG9uIHRoZSB2YWx1ZSAoYWRkZWRcclxuICAgICAqIGZvciB0cnV0aHkgYW5kIHJlbW92ZWQgZm9yIGZhbHN5KS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfYXBwbHlDbGFzc2VzO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGEgY29sbGVjdGlvbiBvZiBDU1MgY2xhc3NlcyBmcm9tIHRoZSBET00gZWxlbWVudC4gVGhpcyBpcyBtb3N0bHkgdXNlZnVsIGZvciBjbGVhbnVwXHJcbiAgICAgKiBwdXJwb3Nlcy5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfcmVtb3ZlQ2xhc3NlcztcclxuICAgIHByaXZhdGUgX3RvZ2dsZUNsYXNzO1xyXG59XHJcblxyXG4vKipcclxuICogSW5zdGFudGlhdGVzIGEgc2luZ2xlIHtAbGluayBDb21wb25lbnR9IHR5cGUgYW5kIGluc2VydHMgaXRzIEhvc3QgVmlldyBpbnRvIGN1cnJlbnQgVmlldy5cclxuICogYE5nQ29tcG9uZW50T3V0bGV0YCBwcm92aWRlcyBhIGRlY2xhcmF0aXZlIGFwcHJvYWNoIGZvciBkeW5hbWljIGNvbXBvbmVudCBjcmVhdGlvbi5cclxuICpcclxuICogYE5nQ29tcG9uZW50T3V0bGV0YCByZXF1aXJlcyBhIGNvbXBvbmVudCB0eXBlLCBpZiBhIGZhbHN5IHZhbHVlIGlzIHNldCB0aGUgdmlldyB3aWxsIGNsZWFyIGFuZFxyXG4gKiBhbnkgZXhpc3RpbmcgY29tcG9uZW50IHdpbGwgZ2V0IGRlc3Ryb3llZC5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICpcclxuICogIyMjIEZpbmUgdHVuZSBjb250cm9sXHJcbiAqXHJcbiAqIFlvdSBjYW4gY29udHJvbCB0aGUgY29tcG9uZW50IGNyZWF0aW9uIHByb2Nlc3MgYnkgdXNpbmcgdGhlIGZvbGxvd2luZyBvcHRpb25hbCBhdHRyaWJ1dGVzOlxyXG4gKlxyXG4gKiAqIGBuZ0NvbXBvbmVudE91dGxldEluamVjdG9yYDogT3B0aW9uYWwgY3VzdG9tIHtAbGluayBJbmplY3Rvcn0gdGhhdCB3aWxsIGJlIHVzZWQgYXMgcGFyZW50IGZvclxyXG4gKiB0aGUgQ29tcG9uZW50LiBEZWZhdWx0cyB0byB0aGUgaW5qZWN0b3Igb2YgdGhlIGN1cnJlbnQgdmlldyBjb250YWluZXIuXHJcbiAqXHJcbiAqICogYG5nQ29tcG9uZW50T3V0bGV0Q29udGVudGA6IE9wdGlvbmFsIGxpc3Qgb2YgcHJvamVjdGFibGUgbm9kZXMgdG8gaW5zZXJ0IGludG8gdGhlIGNvbnRlbnRcclxuICogc2VjdGlvbiBvZiB0aGUgY29tcG9uZW50LCBpZiBleGlzdHMuXHJcbiAqXHJcbiAqICogYG5nQ29tcG9uZW50T3V0bGV0TmdNb2R1bGVGYWN0b3J5YDogT3B0aW9uYWwgbW9kdWxlIGZhY3RvcnkgdG8gYWxsb3cgZHluYW1pY2FsbHkgbG9hZGluZyBvdGhlclxyXG4gKiBtb2R1bGUsIHRoZW4gbG9hZCBhIGNvbXBvbmVudCBmcm9tIHRoYXQgbW9kdWxlLlxyXG4gKlxyXG4gKiAjIyMgU3ludGF4XHJcbiAqXHJcbiAqIFNpbXBsZVxyXG4gKiBgYGBcclxuICogPG5nLWNvbnRhaW5lciAqbmdDb21wb25lbnRPdXRsZXQ9XCJjb21wb25lbnRUeXBlRXhwcmVzc2lvblwiPjwvbmctY29udGFpbmVyPlxyXG4gKiBgYGBcclxuICpcclxuICogQ3VzdG9taXplZCBpbmplY3Rvci9jb250ZW50XHJcbiAqIGBgYFxyXG4gKiA8bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImNvbXBvbmVudFR5cGVFeHByZXNzaW9uO1xyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5qZWN0b3I6IGluamVjdG9yRXhwcmVzc2lvbjtcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnROb2Rlc0V4cHJlc3Npb247XCI+XHJcbiAqIDwvbmctY29udGFpbmVyPlxyXG4gKiBgYGBcclxuICpcclxuICogQ3VzdG9taXplZCBuZ01vZHVsZUZhY3RvcnlcclxuICogYGBgXHJcbiAqIDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50VHlwZUV4cHJlc3Npb247XHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZ01vZHVsZUZhY3Rvcnk6IG1vZHVsZUZhY3Rvcnk7XCI+XHJcbiAqIDwvbmctY29udGFpbmVyPlxyXG4gKiBgYGBcclxuICpcclxuICogIyMjIEEgc2ltcGxlIGV4YW1wbGVcclxuICpcclxuICoge0BleGFtcGxlIGNvbW1vbi9uZ0NvbXBvbmVudE91dGxldC90cy9tb2R1bGUudHMgcmVnaW9uPSdTaW1wbGVFeGFtcGxlJ31cclxuICpcclxuICogQSBtb3JlIGNvbXBsZXRlIGV4YW1wbGUgd2l0aCBhZGRpdGlvbmFsIG9wdGlvbnM6XHJcbiAqXHJcbiAqIHtAZXhhbXBsZSBjb21tb24vbmdDb21wb25lbnRPdXRsZXQvdHMvbW9kdWxlLnRzIHJlZ2lvbj0nQ29tcGxldGVFeGFtcGxlJ31cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ0NvbXBvbmVudE91dGxldCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY7XHJcbiAgICBuZ0NvbXBvbmVudE91dGxldDogVHlwZTxhbnk+O1xyXG4gICAgbmdDb21wb25lbnRPdXRsZXRJbmplY3RvcjogSW5qZWN0b3I7XHJcbiAgICBuZ0NvbXBvbmVudE91dGxldENvbnRlbnQ6IGFueVtdW107XHJcbiAgICBuZ0NvbXBvbmVudE91dGxldE5nTW9kdWxlRmFjdG9yeTogTmdNb2R1bGVGYWN0b3J5PGFueT47XHJcbiAgICBwcml2YXRlIF9jb21wb25lbnRSZWY7XHJcbiAgICBwcml2YXRlIF9tb2R1bGVSZWY7XHJcbiAgICBjb25zdHJ1Y3Rvcihfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZik7XHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIFtzdHJ1Y3R1cmFsIGRpcmVjdGl2ZV0oZ3VpZGUvc3RydWN0dXJhbC1kaXJlY3RpdmVzKSB0aGF0IHJlbmRlcnNcclxuICogYSB0ZW1wbGF0ZSBmb3IgZWFjaCBpdGVtIGluIGEgY29sbGVjdGlvbi5cclxuICogVGhlIGRpcmVjdGl2ZSBpcyBwbGFjZWQgb24gYW4gZWxlbWVudCwgd2hpY2ggYmVjb21lcyB0aGUgcGFyZW50XHJcbiAqIG9mIHRoZSBjbG9uZWQgdGVtcGxhdGVzLlxyXG4gKlxyXG4gKiBUaGUgYG5nRm9yT2ZgIGRpcmVjdGl2ZSBpcyBnZW5lcmFsbHkgdXNlZCBpbiB0aGVcclxuICogW3Nob3J0aGFuZCBmb3JtXShndWlkZS9zdHJ1Y3R1cmFsLWRpcmVjdGl2ZXMjdGhlLWFzdGVyaXNrLS1wcmVmaXgpIGAqbmdGb3JgLlxyXG4gKiBJbiB0aGlzIGZvcm0sIHRoZSB0ZW1wbGF0ZSB0byBiZSByZW5kZXJlZCBmb3IgZWFjaCBpdGVyYXRpb24gaXMgdGhlIGNvbnRlbnRcclxuICogb2YgYW4gYW5jaG9yIGVsZW1lbnQgY29udGFpbmluZyB0aGUgZGlyZWN0aXZlLlxyXG4gKlxyXG4gKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgc2hvd3MgdGhlIHNob3J0aGFuZCBzeW50YXggd2l0aCBzb21lIG9wdGlvbnMsXHJcbiAqIGNvbnRhaW5lZCBpbiBhbiBgPGxpPmAgZWxlbWVudC5cclxuICpcclxuICogYGBgXHJcbiAqIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtczsgaW5kZXggYXMgaTsgdHJhY2tCeTogdHJhY2tCeUZuXCI+Li4uPC9saT5cclxuICogYGBgXHJcbiAqXHJcbiAqIFRoZSBzaG9ydGhhbmQgZm9ybSBleHBhbmRzIGludG8gYSBsb25nIGZvcm0gdGhhdCB1c2VzIHRoZSBgbmdGb3JPZmAgc2VsZWN0b3JcclxuICogb24gYW4gYDxuZy10ZW1wbGF0ZT5gIGVsZW1lbnQuXHJcbiAqIFRoZSBjb250ZW50IG9mIHRoZSBgPG5nLXRlbXBsYXRlPmAgZWxlbWVudCBpcyB0aGUgYDxsaT5gIGVsZW1lbnQgdGhhdCBoZWxkIHRoZVxyXG4gKiBzaG9ydC1mb3JtIGRpcmVjdGl2ZS5cclxuICpcclxuICogSGVyZSBpcyB0aGUgZXhwYW5kZWQgdmVyc2lvbiBvZiB0aGUgc2hvcnQtZm9ybSBleGFtcGxlLlxyXG4gKlxyXG4gKiBgYGBcclxuICogPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1pdGVtIFtuZ0Zvck9mXT1cIml0ZW1zXCIgbGV0LWk9XCJpbmRleFwiIFtuZ0ZvclRyYWNrQnldPVwidHJhY2tCeUZuXCI+XHJcbiAqICAgPGxpPi4uLjwvbGk+XHJcbiAqIDwvbmctdGVtcGxhdGU+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBBbmd1bGFyIGF1dG9tYXRpY2FsbHkgZXhwYW5kcyB0aGUgc2hvcnRoYW5kIHN5bnRheCBhcyBpdCBjb21waWxlcyB0aGUgdGVtcGxhdGUuXHJcbiAqIFRoZSBjb250ZXh0IGZvciBlYWNoIGVtYmVkZGVkIHZpZXcgaXMgbG9naWNhbGx5IG1lcmdlZCB0byB0aGUgY3VycmVudCBjb21wb25lbnRcclxuICogY29udGV4dCBhY2NvcmRpbmcgdG8gaXRzIGxleGljYWwgcG9zaXRpb24uXHJcbiAqXHJcbiAqIFdoZW4gdXNpbmcgdGhlIHNob3J0aGFuZCBzeW50YXgsIEFuZ3VsYXIgYWxsb3dzIG9ubHkgW29uZSBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZVxyXG4gKiBvbiBhbiBlbGVtZW50XShndWlkZS9zdHJ1Y3R1cmFsLWRpcmVjdGl2ZXMjb25lLXN0cnVjdHVyYWwtZGlyZWN0aXZlLXBlci1ob3N0LWVsZW1lbnQpLlxyXG4gKiBJZiB5b3Ugd2FudCB0byBpdGVyYXRlIGNvbmRpdGlvbmFsbHksIGZvciBleGFtcGxlLFxyXG4gKiBwdXQgdGhlIGAqbmdJZmAgb24gYSBjb250YWluZXIgZWxlbWVudCB0aGF0IHdyYXBzIHRoZSBgKm5nRm9yYCBlbGVtZW50LlxyXG4gKiBGb3IgZnV0aGVyIGRpc2N1c3Npb24sIHNlZVxyXG4gKiBbU3RydWN0dXJhbCBEaXJlY3RpdmVzXShndWlkZS9zdHJ1Y3R1cmFsLWRpcmVjdGl2ZXMjb25lLXBlci1lbGVtZW50KS5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICpcclxuICogIyMjIExvY2FsIHZhcmlhYmxlc1xyXG4gKlxyXG4gKiBgTmdGb3JPZmAgcHJvdmlkZXMgZXhwb3J0ZWQgdmFsdWVzIHRoYXQgY2FuIGJlIGFsaWFzZWQgdG8gbG9jYWwgdmFyaWFibGVzLlxyXG4gKiBGb3IgZXhhbXBsZTpcclxuICpcclxuICogIGBgYFxyXG4gKiA8bGkgKm5nRm9yPVwibGV0IHVzZXIgb2YgdXNlcnM7IGluZGV4IGFzIGk7IGZpcnN0IGFzIGlzRmlyc3RcIj5cclxuICogICAge3tpfX0ve3t1c2Vycy5sZW5ndGh9fS4ge3t1c2VyfX0gPHNwYW4gKm5nSWY9XCJpc0ZpcnN0XCI+ZGVmYXVsdDwvc3Bhbj5cclxuICogPC9saT5cclxuICogYGBgXHJcbiAqXHJcbiAqIFRoZSBmb2xsb3dpbmcgZXhwb3J0ZWQgdmFsdWVzIGNhbiBiZSBhbGlhc2VkIHRvIGxvY2FsIHZhcmlhYmxlczpcclxuICpcclxuICogLSBgJGltcGxpY2l0OiBUYDogVGhlIHZhbHVlIG9mIHRoZSBpbmRpdmlkdWFsIGl0ZW1zIGluIHRoZSBpdGVyYWJsZSAoYG5nRm9yT2ZgKS5cclxuICogLSBgbmdGb3JPZjogTmdJdGVyYWJsZTxUPmA6IFRoZSB2YWx1ZSBvZiB0aGUgaXRlcmFibGUgZXhwcmVzc2lvbi4gVXNlZnVsIHdoZW4gdGhlIGV4cHJlc3Npb24gaXNcclxuICogbW9yZSBjb21wbGV4IHRoZW4gYSBwcm9wZXJ0eSBhY2Nlc3MsIGZvciBleGFtcGxlIHdoZW4gdXNpbmcgdGhlIGFzeW5jIHBpcGUgKGB1c2VyU3RyZWFtcyB8XHJcbiAqIGFzeW5jYCkuXHJcbiAqIC0gYGluZGV4OiBudW1iZXJgOiBUaGUgaW5kZXggb2YgdGhlIGN1cnJlbnQgaXRlbSBpbiB0aGUgaXRlcmFibGUuXHJcbiAqIC0gYGNvdW50OiBudW1iZXJgOiBUaGUgbGVuZ3RoIG9mIHRoZSBpdGVyYWJsZS5cclxuICogLSBgZmlyc3Q6IGJvb2xlYW5gOiBUcnVlIHdoZW4gdGhlIGl0ZW0gaXMgdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIGl0ZXJhYmxlLlxyXG4gKiAtIGBsYXN0OiBib29sZWFuYDogVHJ1ZSB3aGVuIHRoZSBpdGVtIGlzIHRoZSBsYXN0IGl0ZW0gaW4gdGhlIGl0ZXJhYmxlLlxyXG4gKiAtIGBldmVuOiBib29sZWFuYDogVHJ1ZSB3aGVuIHRoZSBpdGVtIGhhcyBhbiBldmVuIGluZGV4IGluIHRoZSBpdGVyYWJsZS5cclxuICogLSBgb2RkOiBib29sZWFuYDogVHJ1ZSB3aGVuIHRoZSBpdGVtIGhhcyBhbiBvZGQgaW5kZXggaW4gdGhlIGl0ZXJhYmxlLlxyXG4gKlxyXG4gKiAjIyMgQ2hhbmdlIHByb3BhZ2F0aW9uXHJcbiAqXHJcbiAqIFdoZW4gdGhlIGNvbnRlbnRzIG9mIHRoZSBpdGVyYXRvciBjaGFuZ2VzLCBgTmdGb3JPZmAgbWFrZXMgdGhlIGNvcnJlc3BvbmRpbmcgY2hhbmdlcyB0byB0aGUgRE9NOlxyXG4gKlxyXG4gKiAqIFdoZW4gYW4gaXRlbSBpcyBhZGRlZCwgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIHRlbXBsYXRlIGlzIGFkZGVkIHRvIHRoZSBET00uXHJcbiAqICogV2hlbiBhbiBpdGVtIGlzIHJlbW92ZWQsIGl0cyB0ZW1wbGF0ZSBpbnN0YW5jZSBpcyByZW1vdmVkIGZyb20gdGhlIERPTS5cclxuICogKiBXaGVuIGl0ZW1zIGFyZSByZW9yZGVyZWQsIHRoZWlyIHJlc3BlY3RpdmUgdGVtcGxhdGVzIGFyZSByZW9yZGVyZWQgaW4gdGhlIERPTS5cclxuICpcclxuICogQW5ndWxhciB1c2VzIG9iamVjdCBpZGVudGl0eSB0byB0cmFjayBpbnNlcnRpb25zIGFuZCBkZWxldGlvbnMgd2l0aGluIHRoZSBpdGVyYXRvciBhbmQgcmVwcm9kdWNlXHJcbiAqIHRob3NlIGNoYW5nZXMgaW4gdGhlIERPTS4gVGhpcyBoYXMgaW1wb3J0YW50IGltcGxpY2F0aW9ucyBmb3IgYW5pbWF0aW9ucyBhbmQgYW55IHN0YXRlZnVsXHJcbiAqIGNvbnRyb2xzIHRoYXQgYXJlIHByZXNlbnQsIHN1Y2ggYXMgYDxpbnB1dD5gIGVsZW1lbnRzIHRoYXQgYWNjZXB0IHVzZXIgaW5wdXQuIEluc2VydGVkIHJvd3MgY2FuXHJcbiAqIGJlIGFuaW1hdGVkIGluLCBkZWxldGVkIHJvd3MgY2FuIGJlIGFuaW1hdGVkIG91dCwgYW5kIHVuY2hhbmdlZCByb3dzIHJldGFpbiBhbnkgdW5zYXZlZCBzdGF0ZVxyXG4gKiBzdWNoIGFzIHVzZXIgaW5wdXQuXHJcbiAqIEZvciBtb3JlIG9uIGFuaW1hdGlvbnMsIHNlZSBbVHJhbnNpdGlvbnMgYW5kIFRyaWdnZXJzXShndWlkZS90cmFuc2l0aW9uLWFuZC10cmlnZ2VycykuXHJcbiAqXHJcbiAqIFRoZSBpZGVudGl0aWVzIG9mIGVsZW1lbnRzIGluIHRoZSBpdGVyYXRvciBjYW4gY2hhbmdlIHdoaWxlIHRoZSBkYXRhIGRvZXMgbm90LlxyXG4gKiBUaGlzIGNhbiBoYXBwZW4sIGZvciBleGFtcGxlLCBpZiB0aGUgaXRlcmF0b3IgaXMgcHJvZHVjZWQgZnJvbSBhbiBSUEMgdG8gdGhlIHNlcnZlciwgYW5kIHRoYXRcclxuICogUlBDIGlzIHJlLXJ1bi4gRXZlbiBpZiB0aGUgZGF0YSBoYXNuJ3QgY2hhbmdlZCwgdGhlIHNlY29uZCByZXNwb25zZSBwcm9kdWNlcyBvYmplY3RzIHdpdGhcclxuICogZGlmZmVyZW50IGlkZW50aXRpZXMsIGFuZCBBbmd1bGFyIG11c3QgdGVhciBkb3duIHRoZSBlbnRpcmUgRE9NIGFuZCByZWJ1aWxkIGl0IChhcyBpZiBhbGwgb2xkXHJcbiAqIGVsZW1lbnRzIHdlcmUgZGVsZXRlZCBhbmQgYWxsIG5ldyBlbGVtZW50cyBpbnNlcnRlZCkuXHJcbiAqXHJcbiAqIFRvIGF2b2lkIHRoaXMgZXhwZW5zaXZlIG9wZXJhdGlvbiwgeW91IGNhbiBjdXN0b21pemUgdGhlIGRlZmF1bHQgdHJhY2tpbmcgYWxnb3JpdGhtLlxyXG4gKiBieSBzdXBwbHlpbmcgdGhlIGB0cmFja0J5YCBvcHRpb24gdG8gYE5nRm9yT2ZgLlxyXG4gKiBgdHJhY2tCeWAgdGFrZXMgYSBmdW5jdGlvbiB0aGF0IGhhcyB0d28gYXJndW1lbnRzOiBgaW5kZXhgIGFuZCBgaXRlbWAuXHJcbiAqIElmIGB0cmFja0J5YCBpcyBnaXZlbiwgQW5ndWxhciB0cmFja3MgY2hhbmdlcyBieSB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmdW5jdGlvbi5cclxuICpcclxuICogQHNlZSBbU3RydWN0dXJhbCBEaXJlY3RpdmVzXShndWlkZS9zdHJ1Y3R1cmFsLWRpcmVjdGl2ZXMpXHJcbiAqIEBuZ01vZHVsZSBDb21tb25Nb2R1bGVcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdGb3JPZjxULCBVIGV4dGVuZHMgTmdJdGVyYWJsZTxUPiA9IE5nSXRlcmFibGU8VD4+IGltcGxlbWVudHMgRG9DaGVjayB7XHJcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyO1xyXG4gICAgcHJpdmF0ZSBfdGVtcGxhdGU7XHJcbiAgICBwcml2YXRlIF9kaWZmZXJzO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdmFsdWUgb2YgdGhlIGl0ZXJhYmxlIGV4cHJlc3Npb24sIHdoaWNoIGNhbiBiZSB1c2VkIGFzIGFcclxuICAgICAqIFt0ZW1wbGF0ZSBpbnB1dCB2YXJpYWJsZV0oZ3VpZGUvc3RydWN0dXJhbC1kaXJlY3RpdmVzI3RlbXBsYXRlLWlucHV0LXZhcmlhYmxlKS5cclxuICAgICAqL1xyXG4gICAgc2V0IG5nRm9yT2YobmdGb3JPZjogKFUgJiBOZ0l0ZXJhYmxlPFQ+KSB8IHVuZGVmaW5lZCB8IG51bGwpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyBob3cgdG8gdHJhY2sgY2hhbmdlcyBmb3IgaXRlbXMgaW4gdGhlIGl0ZXJhYmxlLlxyXG4gICAgICpcclxuICAgICAqIFdoZW4gaXRlbXMgYXJlIGFkZGVkLCBtb3ZlZCwgb3IgcmVtb3ZlZCBpbiB0aGUgaXRlcmFibGUsXHJcbiAgICAgKiB0aGUgZGlyZWN0aXZlIG11c3QgcmUtcmVuZGVyIHRoZSBhcHByb3ByaWF0ZSBET00gbm9kZXMuXHJcbiAgICAgKiBUbyBtaW5pbWl6ZSBjaHVybiBpbiB0aGUgRE9NLCBvbmx5IG5vZGVzIHRoYXQgaGF2ZSBjaGFuZ2VkXHJcbiAgICAgKiBhcmUgcmUtcmVuZGVyZWQuXHJcbiAgICAgKlxyXG4gICAgICogQnkgZGVmYXVsdCwgdGhlIGNoYW5nZSBkZXRlY3RvciBhc3N1bWVzIHRoYXRcclxuICAgICAqIHRoZSBvYmplY3QgaW5zdGFuY2UgaWRlbnRpZmllcyB0aGUgbm9kZSBpbiB0aGUgaXRlcmFibGUuXHJcbiAgICAgKiBXaGVuIHRoaXMgZnVuY3Rpb24gaXMgc3VwcGxpZWQsIHRoZSBkaXJlY3RpdmUgdXNlc1xyXG4gICAgICogdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoaXMgZnVuY3Rpb24gdG8gaWRlbnRpZnkgdGhlIGl0ZW0gbm9kZSxcclxuICAgICAqIHJhdGhlciB0aGFuIHRoZSBpZGVudGl0eSBvZiB0aGUgb2JqZWN0IGl0c2VsZi5cclxuICAgICAqXHJcbiAgICAgKiBUaGUgZnVuY3Rpb24gcmVjZWl2ZXMgdHdvIGlucHV0cyxcclxuICAgICAqIHRoZSBpdGVyYXRpb24gaW5kZXggYW5kIHRoZSBub2RlIG9iamVjdCBJRC5cclxuICAgICAqL1xyXG4gICAgc2V0IG5nRm9yVHJhY2tCeShmbjogVHJhY2tCeUZ1bmN0aW9uPFQ+KTtcclxuICAgIGdldCBuZ0ZvclRyYWNrQnkoKTogVHJhY2tCeUZ1bmN0aW9uPFQ+O1xyXG4gICAgcHJpdmF0ZSBfbmdGb3JPZjtcclxuICAgIHByaXZhdGUgX25nRm9yT2ZEaXJ0eTtcclxuICAgIHByaXZhdGUgX2RpZmZlcjtcclxuICAgIHByaXZhdGUgX3RyYWNrQnlGbjtcclxuICAgIGNvbnN0cnVjdG9yKF92aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCBfdGVtcGxhdGU6IFRlbXBsYXRlUmVmPE5nRm9yT2ZDb250ZXh0PFQsIFU+PiwgX2RpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycyk7XHJcbiAgICAvKipcclxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSB0ZW1wbGF0ZSB0aGF0IGlzIHN0YW1wZWQgb3V0IGZvciBlYWNoIGl0ZW0gaW4gdGhlIGl0ZXJhYmxlLlxyXG4gICAgICogQHNlZSBbdGVtcGxhdGUgcmVmZXJlbmNlIHZhcmlhYmxlXShndWlkZS90ZW1wbGF0ZS1zeW50YXgjdGVtcGxhdGUtcmVmZXJlbmNlLXZhcmlhYmxlcy0tdmFyLSlcclxuICAgICAqL1xyXG4gICAgc2V0IG5nRm9yVGVtcGxhdGUodmFsdWU6IFRlbXBsYXRlUmVmPE5nRm9yT2ZDb250ZXh0PFQsIFU+Pik7XHJcbiAgICAvKipcclxuICAgICAqIEFwcGxpZXMgdGhlIGNoYW5nZXMgd2hlbiBuZWVkZWQuXHJcbiAgICAgKi9cclxuICAgIG5nRG9DaGVjaygpOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBfYXBwbHlDaGFuZ2VzO1xyXG4gICAgcHJpdmF0ZSBfcGVyVmlld0NoYW5nZTtcclxuICAgIC8qKlxyXG4gICAgICogQXNzZXJ0cyB0aGUgY29ycmVjdCB0eXBlIG9mIHRoZSBjb250ZXh0IGZvciB0aGUgdGVtcGxhdGUgdGhhdCBgTmdGb3JPZmAgd2lsbCByZW5kZXIuXHJcbiAgICAgKlxyXG4gICAgICogVGhlIHByZXNlbmNlIG9mIHRoaXMgbWV0aG9kIGlzIGEgc2lnbmFsIHRvIHRoZSBJdnkgdGVtcGxhdGUgdHlwZS1jaGVjayBjb21waWxlciB0aGF0IHRoZVxyXG4gICAgICogYE5nRm9yT2ZgIHN0cnVjdHVyYWwgZGlyZWN0aXZlIHJlbmRlcnMgaXRzIHRlbXBsYXRlIHdpdGggYSBzcGVjaWZpYyBjb250ZXh0IHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPFQsIFUgZXh0ZW5kcyBOZ0l0ZXJhYmxlPFQ+PihkaXI6IE5nRm9yT2Y8VCwgVT4sIGN0eDogYW55KTogY3R4IGlzIE5nRm9yT2ZDb250ZXh0PFQsIFU+O1xyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdGb3JPZkNvbnRleHQ8VCwgVSBleHRlbmRzIE5nSXRlcmFibGU8VD4gPSBOZ0l0ZXJhYmxlPFQ+PiB7XHJcbiAgICAkaW1wbGljaXQ6IFQ7XHJcbiAgICBuZ0Zvck9mOiBVO1xyXG4gICAgaW5kZXg6IG51bWJlcjtcclxuICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3RvcigkaW1wbGljaXQ6IFQsIG5nRm9yT2Y6IFUsIGluZGV4OiBudW1iZXIsIGNvdW50OiBudW1iZXIpO1xyXG4gICAgZ2V0IGZpcnN0KCk6IGJvb2xlYW47XHJcbiAgICBnZXQgbGFzdCgpOiBib29sZWFuO1xyXG4gICAgZ2V0IGV2ZW4oKTogYm9vbGVhbjtcclxuICAgIGdldCBvZGQoKTogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgc3RydWN0dXJhbCBkaXJlY3RpdmUgdGhhdCBjb25kaXRpb25hbGx5IGluY2x1ZGVzIGEgdGVtcGxhdGUgYmFzZWQgb24gdGhlIHZhbHVlIG9mXHJcbiAqIGFuIGV4cHJlc3Npb24gY29lcmNlZCB0byBCb29sZWFuLlxyXG4gKiBXaGVuIHRoZSBleHByZXNzaW9uIGV2YWx1YXRlcyB0byB0cnVlLCBBbmd1bGFyIHJlbmRlcnMgdGhlIHRlbXBsYXRlXHJcbiAqIHByb3ZpZGVkIGluIGEgYHRoZW5gIGNsYXVzZSwgYW5kIHdoZW4gIGZhbHNlIG9yIG51bGwsXHJcbiAqIEFuZ3VsYXIgcmVuZGVycyB0aGUgdGVtcGxhdGUgcHJvdmlkZWQgaW4gYW4gb3B0aW9uYWwgYGVsc2VgIGNsYXVzZS4gVGhlIGRlZmF1bHRcclxuICogdGVtcGxhdGUgZm9yIHRoZSBgZWxzZWAgY2xhdXNlIGlzIGJsYW5rLlxyXG4gKlxyXG4gKiBBIFtzaG9ydGhhbmQgZm9ybV0oZ3VpZGUvc3RydWN0dXJhbC1kaXJlY3RpdmVzI3RoZS1hc3Rlcmlzay0tcHJlZml4KSBvZiB0aGUgZGlyZWN0aXZlLFxyXG4gKiBgKm5nSWY9XCJjb25kaXRpb25cImAsIGlzIGdlbmVyYWxseSB1c2VkLCBwcm92aWRlZFxyXG4gKiBhcyBhbiBhdHRyaWJ1dGUgb2YgdGhlIGFuY2hvciBlbGVtZW50IGZvciB0aGUgaW5zZXJ0ZWQgdGVtcGxhdGUuXHJcbiAqIEFuZ3VsYXIgZXhwYW5kcyB0aGlzIGludG8gYSBtb3JlIGV4cGxpY2l0IHZlcnNpb24sIGluIHdoaWNoIHRoZSBhbmNob3IgZWxlbWVudFxyXG4gKiBpcyBjb250YWluZWQgaW4gYW4gYDxuZy10ZW1wbGF0ZT5gIGVsZW1lbnQuXHJcbiAqXHJcbiAqIFNpbXBsZSBmb3JtIHdpdGggc2hvcnRoYW5kIHN5bnRheDpcclxuICpcclxuICogYGBgXHJcbiAqIDxkaXYgKm5nSWY9XCJjb25kaXRpb25cIj5Db250ZW50IHRvIHJlbmRlciB3aGVuIGNvbmRpdGlvbiBpcyB0cnVlLjwvZGl2PlxyXG4gKiBgYGBcclxuICpcclxuICogU2ltcGxlIGZvcm0gd2l0aCBleHBhbmRlZCBzeW50YXg6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8bmctdGVtcGxhdGUgW25nSWZdPVwiY29uZGl0aW9uXCI+PGRpdj5Db250ZW50IHRvIHJlbmRlciB3aGVuIGNvbmRpdGlvbiBpc1xyXG4gKiB0cnVlLjwvZGl2PjwvbmctdGVtcGxhdGU+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBGb3JtIHdpdGggYW4gXCJlbHNlXCIgYmxvY2s6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8ZGl2ICpuZ0lmPVwiY29uZGl0aW9uOyBlbHNlIGVsc2VCbG9ja1wiPkNvbnRlbnQgdG8gcmVuZGVyIHdoZW4gY29uZGl0aW9uIGlzIHRydWUuPC9kaXY+XHJcbiAqIDxuZy10ZW1wbGF0ZSAjZWxzZUJsb2NrPkNvbnRlbnQgdG8gcmVuZGVyIHdoZW4gY29uZGl0aW9uIGlzIGZhbHNlLjwvbmctdGVtcGxhdGU+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBTaG9ydGhhbmQgZm9ybSB3aXRoIFwidGhlblwiIGFuZCBcImVsc2VcIiBibG9ja3M6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8ZGl2ICpuZ0lmPVwiY29uZGl0aW9uOyB0aGVuIHRoZW5CbG9jayBlbHNlIGVsc2VCbG9ja1wiPjwvZGl2PlxyXG4gKiA8bmctdGVtcGxhdGUgI3RoZW5CbG9jaz5Db250ZW50IHRvIHJlbmRlciB3aGVuIGNvbmRpdGlvbiBpcyB0cnVlLjwvbmctdGVtcGxhdGU+XHJcbiAqIDxuZy10ZW1wbGF0ZSAjZWxzZUJsb2NrPkNvbnRlbnQgdG8gcmVuZGVyIHdoZW4gY29uZGl0aW9uIGlzIGZhbHNlLjwvbmctdGVtcGxhdGU+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBGb3JtIHdpdGggc3RvcmluZyB0aGUgdmFsdWUgbG9jYWxseTpcclxuICpcclxuICogYGBgXHJcbiAqIDxkaXYgKm5nSWY9XCJjb25kaXRpb24gYXMgdmFsdWU7IGVsc2UgZWxzZUJsb2NrXCI+e3t2YWx1ZX19PC9kaXY+XHJcbiAqIDxuZy10ZW1wbGF0ZSAjZWxzZUJsb2NrPkNvbnRlbnQgdG8gcmVuZGVyIHdoZW4gdmFsdWUgaXMgbnVsbC48L25nLXRlbXBsYXRlPlxyXG4gKiBgYGBcclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICpcclxuICogVGhlIGAqbmdJZmAgZGlyZWN0aXZlIGlzIG1vc3QgY29tbW9ubHkgdXNlZCB0byBjb25kaXRpb25hbGx5IHNob3cgYW4gaW5saW5lIHRlbXBsYXRlLFxyXG4gKiBhcyBzZWVuIGluIHRoZSBmb2xsb3dpbmcgIGV4YW1wbGUuXHJcbiAqIFRoZSBkZWZhdWx0IGBlbHNlYCB0ZW1wbGF0ZSBpcyBibGFuay5cclxuICpcclxuICoge0BleGFtcGxlIGNvbW1vbi9uZ0lmL3RzL21vZHVsZS50cyByZWdpb249J05nSWZTaW1wbGUnfVxyXG4gKlxyXG4gKiAjIyMgU2hvd2luZyBhbiBhbHRlcm5hdGl2ZSB0ZW1wbGF0ZSB1c2luZyBgZWxzZWBcclxuICpcclxuICogVG8gZGlzcGxheSBhIHRlbXBsYXRlIHdoZW4gYGV4cHJlc3Npb25gIGV2YWx1YXRlcyB0byBmYWxzZSwgdXNlIGFuIGBlbHNlYCB0ZW1wbGF0ZVxyXG4gKiBiaW5kaW5nIGFzIHNob3duIGluIHRoZSBmb2xsb3dpbmcgZXhhbXBsZS5cclxuICogVGhlIGBlbHNlYCBiaW5kaW5nIHBvaW50cyB0byBhbiBgPG5nLXRlbXBsYXRlPmAgIGVsZW1lbnQgbGFiZWxlZCBgI2Vsc2VCbG9ja2AuXHJcbiAqIFRoZSB0ZW1wbGF0ZSBjYW4gYmUgZGVmaW5lZCBhbnl3aGVyZSBpbiB0aGUgY29tcG9uZW50IHZpZXcsIGJ1dCBpcyB0eXBpY2FsbHkgcGxhY2VkIHJpZ2h0IGFmdGVyXHJcbiAqIGBuZ0lmYCBmb3IgcmVhZGFiaWxpdHkuXHJcbiAqXHJcbiAqIHtAZXhhbXBsZSBjb21tb24vbmdJZi90cy9tb2R1bGUudHMgcmVnaW9uPSdOZ0lmRWxzZSd9XHJcbiAqXHJcbiAqICMjIyBVc2luZyBhbiBleHRlcm5hbCBgdGhlbmAgdGVtcGxhdGVcclxuICpcclxuICogSW4gdGhlIHByZXZpb3VzIGV4YW1wbGUsIHRoZSB0aGVuLWNsYXVzZSB0ZW1wbGF0ZSBpcyBzcGVjaWZpZWQgaW5saW5lLCBhcyB0aGUgY29udGVudCBvZiB0aGVcclxuICogdGFnIHRoYXQgY29udGFpbnMgdGhlIGBuZ0lmYCBkaXJlY3RpdmUuIFlvdSBjYW4gYWxzbyBzcGVjaWZ5IGEgdGVtcGxhdGUgdGhhdCBpcyBkZWZpbmVkXHJcbiAqIGV4dGVybmFsbHksIGJ5IHJlZmVyZW5jaW5nIGEgbGFiZWxlZCBgPG5nLXRlbXBsYXRlPmAgZWxlbWVudC4gV2hlbiB5b3UgZG8gdGhpcywgeW91IGNhblxyXG4gKiBjaGFuZ2Ugd2hpY2ggdGVtcGxhdGUgdG8gdXNlIGF0IHJ1bnRpbWUsIGFzIHNob3duIGluIHRoZSBmb2xsb3dpbmcgZXhhbXBsZS5cclxuICpcclxuICoge0BleGFtcGxlIGNvbW1vbi9uZ0lmL3RzL21vZHVsZS50cyByZWdpb249J05nSWZUaGVuRWxzZSd9XHJcbiAqXHJcbiAqICMjIyBTdG9yaW5nIGEgY29uZGl0aW9uYWwgcmVzdWx0IGluIGEgdmFyaWFibGVcclxuICpcclxuICogWW91IG1pZ2h0IHdhbnQgdG8gc2hvdyBhIHNldCBvZiBwcm9wZXJ0aWVzIGZyb20gdGhlIHNhbWUgb2JqZWN0LiBJZiB5b3UgYXJlIHdhaXRpbmdcclxuICogZm9yIGFzeW5jaHJvbm91cyBkYXRhLCB0aGUgb2JqZWN0IGNhbiBiZSB1bmRlZmluZWQuXHJcbiAqIEluIHRoaXMgY2FzZSwgeW91IGNhbiB1c2UgYG5nSWZgIGFuZCBzdG9yZSB0aGUgcmVzdWx0IG9mIHRoZSBjb25kaXRpb24gaW4gYSBsb2NhbFxyXG4gKiB2YXJpYWJsZSBhcyBzaG93biBpbiB0aGUgdGhlIGZvbGxvd2luZyBleGFtcGxlLlxyXG4gKlxyXG4gKiB7QGV4YW1wbGUgY29tbW9uL25nSWYvdHMvbW9kdWxlLnRzIHJlZ2lvbj0nTmdJZkFzJ31cclxuICpcclxuICogVGhpcyBjb2RlIHVzZXMgb25seSBvbmUgYEFzeW5jUGlwZWAsIHNvIG9ubHkgb25lIHN1YnNjcmlwdGlvbiBpcyBjcmVhdGVkLlxyXG4gKiBUaGUgY29uZGl0aW9uYWwgc3RhdGVtZW50IHN0b3JlcyB0aGUgcmVzdWx0IG9mIGB1c2VyU3RyZWFtfGFzeW5jYCBpbiB0aGUgbG9jYWwgdmFyaWFibGUgYHVzZXJgLlxyXG4gKiBZb3UgY2FuIHRoZW4gYmluZCB0aGUgbG9jYWwgYHVzZXJgIHJlcGVhdGVkbHkuXHJcbiAqXHJcbiAqIFRoZSBjb25kaXRpb25hbCBkaXNwbGF5cyB0aGUgZGF0YSBvbmx5IGlmIGB1c2VyU3RyZWFtYCByZXR1cm5zIGEgdmFsdWUsXHJcbiAqIHNvIHlvdSBkb24ndCBuZWVkIHRvIHVzZSB0aGVcclxuICogW3NhZmUtbmF2aWdhdGlvbi1vcGVyYXRvcl0oZ3VpZGUvdGVtcGxhdGUtc3ludGF4I3NhZmUtbmF2aWdhdGlvbi1vcGVyYXRvcikgKGA/LmApXHJcbiAqIHRvIGd1YXJkIGFnYWluc3QgbnVsbCB2YWx1ZXMgd2hlbiBhY2Nlc3NpbmcgcHJvcGVydGllcy5cclxuICogWW91IGNhbiBkaXNwbGF5IGFuIGFsdGVybmF0aXZlIHRlbXBsYXRlIHdoaWxlIHdhaXRpbmcgZm9yIHRoZSBkYXRhLlxyXG4gKlxyXG4gKiAjIyMgU2hvcnRoYW5kIHN5bnRheFxyXG4gKlxyXG4gKiBUaGUgc2hvcnRoYW5kIHN5bnRheCBgKm5nSWZgIGV4cGFuZHMgaW50byB0d28gc2VwYXJhdGUgdGVtcGxhdGUgc3BlY2lmaWNhdGlvbnNcclxuICogZm9yIHRoZSBcInRoZW5cIiBhbmQgXCJlbHNlXCIgY2xhdXNlcy4gRm9yIGV4YW1wbGUsIGNvbnNpZGVyIHRoZSBmb2xsb3dpbmcgc2hvcnRoYW5kIHN0YXRlbWVudCxcclxuICogdGhhdCBpcyBtZWFudCB0byBzaG93IGEgbG9hZGluZyBwYWdlIHdoaWxlIHdhaXRpbmcgZm9yIGRhdGEgdG8gYmUgbG9hZGVkLlxyXG4gKlxyXG4gKiBgYGBcclxuICogPGRpdiBjbGFzcz1cImhlcm8tbGlzdFwiICpuZ0lmPVwiaGVyb2VzIGVsc2UgbG9hZGluZ1wiPlxyXG4gKiAgLi4uXHJcbiAqIDwvZGl2PlxyXG4gKlxyXG4gKiA8bmctdGVtcGxhdGUgI2xvYWRpbmc+XHJcbiAqICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cclxuICogPC9uZy10ZW1wbGF0ZT5cclxuICogYGBgXHJcbiAqXHJcbiAqIFlvdSBjYW4gc2VlIHRoYXQgdGhlIFwiZWxzZVwiIGNsYXVzZSByZWZlcmVuY2VzIHRoZSBgPG5nLXRlbXBsYXRlPmBcclxuICogd2l0aCB0aGUgYCNsb2FkaW5nYCBsYWJlbCwgYW5kIHRoZSB0ZW1wbGF0ZSBmb3IgdGhlIFwidGhlblwiIGNsYXVzZVxyXG4gKiBpcyBwcm92aWRlZCBhcyB0aGUgY29udGVudCBvZiB0aGUgYW5jaG9yIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEhvd2V2ZXIsIHdoZW4gQW5ndWxhciBleHBhbmRzIHRoZSBzaG9ydGhhbmQgc3ludGF4LCBpdCBjcmVhdGVzXHJcbiAqIGFub3RoZXIgYDxuZy10ZW1wbGF0ZT5gIHRhZywgd2l0aCBgbmdJZmAgYW5kIGBuZ0lmRWxzZWAgZGlyZWN0aXZlcy5cclxuICogVGhlIGFuY2hvciBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIHRlbXBsYXRlIGZvciB0aGUgXCJ0aGVuXCIgY2xhdXNlIGJlY29tZXNcclxuICogdGhlIGNvbnRlbnQgb2YgdGhpcyB1bmxhYmVsZWQgYDxuZy10ZW1wbGF0ZT5gIHRhZy5cclxuICpcclxuICogYGBgXHJcbiAqIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJoZXJvZXNcIiBbbmdJZkVsc2VdPVwibG9hZGluZ1wiPlxyXG4gKiAgPGRpdiBjbGFzcz1cImhlcm8tbGlzdFwiPlxyXG4gKiAgIC4uLlxyXG4gKiAgPC9kaXY+XHJcbiAqIDwvbmctdGVtcGxhdGU+XHJcbiAqXHJcbiAqIDxuZy10ZW1wbGF0ZSAjbG9hZGluZz5cclxuICogIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG4gKiA8L25nLXRlbXBsYXRlPlxyXG4gKiBgYGBcclxuICpcclxuICogVGhlIHByZXNlbmNlIG9mIHRoZSBpbXBsaWNpdCB0ZW1wbGF0ZSBvYmplY3QgaGFzIGltcGxpY2F0aW9ucyBmb3IgdGhlIG5lc3Rpbmcgb2ZcclxuICogc3RydWN0dXJhbCBkaXJlY3RpdmVzLiBGb3IgbW9yZSBvbiB0aGlzIHN1YmplY3QsIHNlZVxyXG4gKiBbU3RydWN0dXJhbCBEaXJlY3RpdmVzXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvc3RydWN0dXJhbC1kaXJlY3RpdmVzI29uZS1wZXItZWxlbWVudCkuXHJcbiAqXHJcbiAqIEBuZ01vZHVsZSBDb21tb25Nb2R1bGVcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdJZjxUID0gdW5rbm93bj4ge1xyXG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lcjtcclxuICAgIHByaXZhdGUgX2NvbnRleHQ7XHJcbiAgICBwcml2YXRlIF90aGVuVGVtcGxhdGVSZWY7XHJcbiAgICBwcml2YXRlIF9lbHNlVGVtcGxhdGVSZWY7XHJcbiAgICBwcml2YXRlIF90aGVuVmlld1JlZjtcclxuICAgIHByaXZhdGUgX2Vsc2VWaWV3UmVmO1xyXG4gICAgY29uc3RydWN0b3IoX3ZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxOZ0lmQ29udGV4dDxUPj4pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgQm9vbGVhbiBleHByZXNzaW9uIHRvIGV2YWx1YXRlIGFzIHRoZSBjb25kaXRpb24gZm9yIHNob3dpbmcgYSB0ZW1wbGF0ZS5cclxuICAgICAqL1xyXG4gICAgc2V0IG5nSWYoY29uZGl0aW9uOiBUKTtcclxuICAgIC8qKlxyXG4gICAgICogQSB0ZW1wbGF0ZSB0byBzaG93IGlmIHRoZSBjb25kaXRpb24gZXhwcmVzc2lvbiBldmFsdWF0ZXMgdG8gdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgc2V0IG5nSWZUaGVuKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxOZ0lmQ29udGV4dDxUPj4gfCBudWxsKTtcclxuICAgIC8qKlxyXG4gICAgICogQSB0ZW1wbGF0ZSB0byBzaG93IGlmIHRoZSBjb25kaXRpb24gZXhwcmVzc2lvbiBldmFsdWF0ZXMgdG8gZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIHNldCBuZ0lmRWxzZSh0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8TmdJZkNvbnRleHQ8VD4+IHwgbnVsbCk7XHJcbiAgICBwcml2YXRlIF91cGRhdGVWaWV3O1xyXG4gICAgLyoqXHJcbiAgICAgKiBBc3NlcnQgdGhlIGNvcnJlY3QgdHlwZSBvZiB0aGUgZXhwcmVzc2lvbiBib3VuZCB0byB0aGUgYG5nSWZgIGlucHV0IHdpdGhpbiB0aGUgdGVtcGxhdGUuXHJcbiAgICAgKlxyXG4gICAgICogVGhlIHByZXNlbmNlIG9mIHRoaXMgc3RhdGljIGZpZWxkIGlzIGEgc2lnbmFsIHRvIHRoZSBJdnkgdGVtcGxhdGUgdHlwZSBjaGVjayBjb21waWxlciB0aGF0XHJcbiAgICAgKiB3aGVuIHRoZSBgTmdJZmAgc3RydWN0dXJhbCBkaXJlY3RpdmUgcmVuZGVycyBpdHMgdGVtcGxhdGUsIHRoZSB0eXBlIG9mIHRoZSBleHByZXNzaW9uIGJvdW5kXHJcbiAgICAgKiB0byBgbmdJZmAgc2hvdWxkIGJlIG5hcnJvd2VkIGluIHNvbWUgd2F5LiBGb3IgYE5nSWZgLCB0aGUgYmluZGluZyBleHByZXNzaW9uIGl0c2VsZiBpcyB1c2VkIHRvXHJcbiAgICAgKiBuYXJyb3cgaXRzIHR5cGUsIHdoaWNoIGFsbG93cyB0aGUgc3RyaWN0TnVsbENoZWNrcyBmZWF0dXJlIG9mIFR5cGVTY3JpcHQgdG8gd29yayB3aXRoIGBOZ0lmYC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIG5nVGVtcGxhdGVHdWFyZF9uZ0lmOiAnYmluZGluZyc7XHJcbiAgICAvKipcclxuICAgICAqIEFzc2VydHMgdGhlIGNvcnJlY3QgdHlwZSBvZiB0aGUgY29udGV4dCBmb3IgdGhlIHRlbXBsYXRlIHRoYXQgYE5nSWZgIHdpbGwgcmVuZGVyLlxyXG4gICAgICpcclxuICAgICAqIFRoZSBwcmVzZW5jZSBvZiB0aGlzIG1ldGhvZCBpcyBhIHNpZ25hbCB0byB0aGUgSXZ5IHRlbXBsYXRlIHR5cGUtY2hlY2sgY29tcGlsZXIgdGhhdCB0aGVcclxuICAgICAqIGBOZ0lmYCBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZSByZW5kZXJzIGl0cyB0ZW1wbGF0ZSB3aXRoIGEgc3BlY2lmaWMgY29udGV4dCB0eXBlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZDxUPihkaXI6IE5nSWY8VD4sIGN0eDogYW55KTogY3R4IGlzIE5nSWZDb250ZXh0PE5vbk51bGxhYmxlPFQ+PjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nSWZDb250ZXh0PFQgPSB1bmtub3duPiB7XHJcbiAgICAkaW1wbGljaXQ6IFQ7XHJcbiAgICBuZ0lmOiBUO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgcGx1cmFsIGNhc2UgYmFzZWQgb24gdGhlIGxvY2FsZVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ0xvY2FsZUxvY2FsaXphdGlvbiBleHRlbmRzIE5nTG9jYWxpemF0aW9uIHtcclxuICAgIHByb3RlY3RlZCBsb2NhbGU6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGxvY2FsZTogc3RyaW5nKTtcclxuICAgIGdldFBsdXJhbENhdGVnb3J5KHZhbHVlOiBhbnksIGxvY2FsZT86IHN0cmluZyk6IHN0cmluZztcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBOZ0xvY2FsaXphdGlvbiB7XHJcbiAgICBhYnN0cmFjdCBnZXRQbHVyYWxDYXRlZ29yeSh2YWx1ZTogYW55LCBsb2NhbGU/OiBzdHJpbmcpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqIGBgYFxyXG4gKiA8c29tZS1lbGVtZW50IFtuZ1BsdXJhbF09XCJ2YWx1ZVwiPlxyXG4gKiAgIDxuZy10ZW1wbGF0ZSBuZ1BsdXJhbENhc2U9XCI9MFwiPnRoZXJlIGlzIG5vdGhpbmc8L25nLXRlbXBsYXRlPlxyXG4gKiAgIDxuZy10ZW1wbGF0ZSBuZ1BsdXJhbENhc2U9XCI9MVwiPnRoZXJlIGlzIG9uZTwvbmctdGVtcGxhdGU+XHJcbiAqICAgPG5nLXRlbXBsYXRlIG5nUGx1cmFsQ2FzZT1cImZld1wiPnRoZXJlIGFyZSBhIGZldzwvbmctdGVtcGxhdGU+XHJcbiAqIDwvc29tZS1lbGVtZW50PlxyXG4gKiBgYGBcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIEFkZHMgLyByZW1vdmVzIERPTSBzdWItdHJlZXMgYmFzZWQgb24gYSBudW1lcmljIHZhbHVlLiBUYWlsb3JlZCBmb3IgcGx1cmFsaXphdGlvbi5cclxuICpcclxuICogRGlzcGxheXMgRE9NIHN1Yi10cmVlcyB0aGF0IG1hdGNoIHRoZSBzd2l0Y2ggZXhwcmVzc2lvbiB2YWx1ZSwgb3IgZmFpbGluZyB0aGF0LCBET00gc3ViLXRyZWVzXHJcbiAqIHRoYXQgbWF0Y2ggdGhlIHN3aXRjaCBleHByZXNzaW9uJ3MgcGx1cmFsaXphdGlvbiBjYXRlZ29yeS5cclxuICpcclxuICogVG8gdXNlIHRoaXMgZGlyZWN0aXZlIHlvdSBtdXN0IHByb3ZpZGUgYSBjb250YWluZXIgZWxlbWVudCB0aGF0IHNldHMgdGhlIGBbbmdQbHVyYWxdYCBhdHRyaWJ1dGVcclxuICogdG8gYSBzd2l0Y2ggZXhwcmVzc2lvbi4gSW5uZXIgZWxlbWVudHMgd2l0aCBhIGBbbmdQbHVyYWxDYXNlXWAgd2lsbCBkaXNwbGF5IGJhc2VkIG9uIHRoZWlyXHJcbiAqIGV4cHJlc3Npb246XHJcbiAqIC0gaWYgYFtuZ1BsdXJhbENhc2VdYCBpcyBzZXQgdG8gYSB2YWx1ZSBzdGFydGluZyB3aXRoIGA9YCwgaXQgd2lsbCBvbmx5IGRpc3BsYXkgaWYgdGhlIHZhbHVlXHJcbiAqICAgbWF0Y2hlcyB0aGUgc3dpdGNoIGV4cHJlc3Npb24gZXhhY3RseSxcclxuICogLSBvdGhlcndpc2UsIHRoZSB2aWV3IHdpbGwgYmUgdHJlYXRlZCBhcyBhIFwiY2F0ZWdvcnkgbWF0Y2hcIiwgYW5kIHdpbGwgb25seSBkaXNwbGF5IGlmIGV4YWN0XHJcbiAqICAgdmFsdWUgbWF0Y2hlcyBhcmVuJ3QgZm91bmQgYW5kIHRoZSB2YWx1ZSBtYXBzIHRvIGl0cyBjYXRlZ29yeSBmb3IgdGhlIGRlZmluZWQgbG9jYWxlLlxyXG4gKlxyXG4gKiBTZWUgaHR0cDovL2NsZHIudW5pY29kZS5vcmcvaW5kZXgvY2xkci1zcGVjL3BsdXJhbC1ydWxlc1xyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ1BsdXJhbCB7XHJcbiAgICBwcml2YXRlIF9sb2NhbGl6YXRpb247XHJcbiAgICBwcml2YXRlIF9zd2l0Y2hWYWx1ZTtcclxuICAgIHByaXZhdGUgX2FjdGl2ZVZpZXc7XHJcbiAgICBwcml2YXRlIF9jYXNlVmlld3M7XHJcbiAgICBjb25zdHJ1Y3RvcihfbG9jYWxpemF0aW9uOiBOZ0xvY2FsaXphdGlvbik7XHJcbiAgICBzZXQgbmdQbHVyYWwodmFsdWU6IG51bWJlcik7XHJcbiAgICBhZGRDYXNlKHZhbHVlOiBzdHJpbmcsIHN3aXRjaFZpZXc6IFN3aXRjaFZpZXcpOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBfdXBkYXRlVmlldztcclxuICAgIHByaXZhdGUgX2NsZWFyVmlld3M7XHJcbiAgICBwcml2YXRlIF9hY3RpdmF0ZVZpZXc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBDcmVhdGVzIGEgdmlldyB0aGF0IHdpbGwgYmUgYWRkZWQvcmVtb3ZlZCBmcm9tIHRoZSBwYXJlbnQge0BsaW5rIE5nUGx1cmFsfSB3aGVuIHRoZVxyXG4gKiBnaXZlbiBleHByZXNzaW9uIG1hdGNoZXMgdGhlIHBsdXJhbCBleHByZXNzaW9uIGFjY29yZGluZyB0byBDTERSIHJ1bGVzLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiBgYGBcclxuICogPHNvbWUtZWxlbWVudCBbbmdQbHVyYWxdPVwidmFsdWVcIj5cclxuICogICA8bmctdGVtcGxhdGUgbmdQbHVyYWxDYXNlPVwiPTBcIj4uLi48L25nLXRlbXBsYXRlPlxyXG4gKiAgIDxuZy10ZW1wbGF0ZSBuZ1BsdXJhbENhc2U9XCJvdGhlclwiPi4uLjwvbmctdGVtcGxhdGU+XHJcbiAqIDwvc29tZS1lbGVtZW50PlxyXG4gKmBgYFxyXG4gKlxyXG4gKiBTZWUge0BsaW5rIE5nUGx1cmFsfSBmb3IgbW9yZSBkZXRhaWxzIGFuZCBleGFtcGxlLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ1BsdXJhbENhc2Uge1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcsIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxPYmplY3Q+LCB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCBuZ1BsdXJhbDogTmdQbHVyYWwpO1xyXG59XHJcblxyXG4vKipcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKlxyXG4gKiBTZXQgdGhlIGZvbnQgb2YgdGhlIGNvbnRhaW5pbmcgZWxlbWVudCB0byB0aGUgcmVzdWx0IG9mIGFuIGV4cHJlc3Npb24uXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8c29tZS1lbGVtZW50IFtuZ1N0eWxlXT1cInsnZm9udC1zdHlsZSc6IHN0eWxlRXhwfVwiPi4uLjwvc29tZS1lbGVtZW50PlxyXG4gKiBgYGBcclxuICpcclxuICogU2V0IHRoZSB3aWR0aCBvZiB0aGUgY29udGFpbmluZyBlbGVtZW50IHRvIGEgcGl4ZWwgdmFsdWUgcmV0dXJuZWQgYnkgYW4gZXhwcmVzc2lvbi5cclxuICpcclxuICogYGBgXHJcbiAqIDxzb21lLWVsZW1lbnQgW25nU3R5bGVdPVwieydtYXgtd2lkdGgucHgnOiB3aWR0aEV4cH1cIj4uLi48L3NvbWUtZWxlbWVudD5cclxuICogYGBgXHJcbiAqXHJcbiAqIFNldCBhIGNvbGxlY3Rpb24gb2Ygc3R5bGUgdmFsdWVzIHVzaW5nIGFuIGV4cHJlc3Npb24gdGhhdCByZXR1cm5zIGtleS12YWx1ZSBwYWlycy5cclxuICpcclxuICogYGBgXHJcbiAqIDxzb21lLWVsZW1lbnQgW25nU3R5bGVdPVwib2JqRXhwXCI+Li4uPC9zb21lLWVsZW1lbnQ+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQW4gYXR0cmlidXRlIGRpcmVjdGl2ZSB0aGF0IHVwZGF0ZXMgc3R5bGVzIGZvciB0aGUgY29udGFpbmluZyBIVE1MIGVsZW1lbnQuXHJcbiAqIFNldHMgb25lIG9yIG1vcmUgc3R5bGUgcHJvcGVydGllcywgc3BlY2lmaWVkIGFzIGNvbG9uLXNlcGFyYXRlZCBrZXktdmFsdWUgcGFpcnMuXHJcbiAqIFRoZSBrZXkgaXMgYSBzdHlsZSBuYW1lLCB3aXRoIGFuIG9wdGlvbmFsIGAuPHVuaXQ+YCBzdWZmaXhcclxuICogKHN1Y2ggYXMgJ3RvcC5weCcsICdmb250LXN0eWxlLmVtJykuXHJcbiAqIFRoZSB2YWx1ZSBpcyBhbiBleHByZXNzaW9uIHRvIGJlIGV2YWx1YXRlZC5cclxuICogVGhlIHJlc3VsdGluZyBub24tbnVsbCB2YWx1ZSwgZXhwcmVzc2VkIGluIHRoZSBnaXZlbiB1bml0LFxyXG4gKiBpcyBhc3NpZ25lZCB0byB0aGUgZ2l2ZW4gc3R5bGUgcHJvcGVydHkuXHJcbiAqIElmIHRoZSByZXN1bHQgb2YgZXZhbHVhdGlvbiBpcyBudWxsLCB0aGUgY29ycmVzcG9uZGluZyBzdHlsZSBpcyByZW1vdmVkLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ1N0eWxlIGltcGxlbWVudHMgRG9DaGVjayB7XHJcbiAgICBwcml2YXRlIF9uZ0VsO1xyXG4gICAgcHJpdmF0ZSBfZGlmZmVycztcclxuICAgIHByaXZhdGUgX3JlbmRlcmVyO1xyXG4gICAgcHJpdmF0ZSBfbmdTdHlsZTtcclxuICAgIHByaXZhdGUgX2RpZmZlcjtcclxuICAgIGNvbnN0cnVjdG9yKF9uZ0VsOiBFbGVtZW50UmVmLCBfZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzLCBfcmVuZGVyZXI6IFJlbmRlcmVyMik7XHJcbiAgICBzZXQgbmdTdHlsZSh2YWx1ZXM6IHtcclxuICAgICAgICBba2xhc3M6IHN0cmluZ106IGFueTtcclxuICAgIH0gfCBudWxsKTtcclxuICAgIG5nRG9DaGVjaygpOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBfc2V0U3R5bGU7XHJcbiAgICBwcml2YXRlIF9hcHBseUNoYW5nZXM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGUgYFtuZ1N3aXRjaF1gIGRpcmVjdGl2ZSBvbiBhIGNvbnRhaW5lciBzcGVjaWZpZXMgYW4gZXhwcmVzc2lvbiB0byBtYXRjaCBhZ2FpbnN0LlxyXG4gKiBUaGUgZXhwcmVzc2lvbnMgdG8gbWF0Y2ggYXJlIHByb3ZpZGVkIGJ5IGBuZ1N3aXRjaENhc2VgIGRpcmVjdGl2ZXMgb24gdmlld3Mgd2l0aGluIHRoZSBjb250YWluZXIuXHJcbiAqIC0gRXZlcnkgdmlldyB0aGF0IG1hdGNoZXMgaXMgcmVuZGVyZWQuXHJcbiAqIC0gSWYgdGhlcmUgYXJlIG5vIG1hdGNoZXMsIGEgdmlldyB3aXRoIHRoZSBgbmdTd2l0Y2hEZWZhdWx0YCBkaXJlY3RpdmUgaXMgcmVuZGVyZWQuXHJcbiAqIC0gRWxlbWVudHMgd2l0aGluIHRoZSBgW05nU3dpdGNoXWAgc3RhdGVtZW50IGJ1dCBvdXRzaWRlIG9mIGFueSBgTmdTd2l0Y2hDYXNlYFxyXG4gKiBvciBgbmdTd2l0Y2hEZWZhdWx0YCBkaXJlY3RpdmUgYXJlIHByZXNlcnZlZCBhdCB0aGUgbG9jYXRpb24uXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqIERlZmluZSBhIGNvbnRhaW5lciBlbGVtZW50IGZvciB0aGUgZGlyZWN0aXZlLCBhbmQgc3BlY2lmeSB0aGUgc3dpdGNoIGV4cHJlc3Npb25cclxuICogdG8gbWF0Y2ggYWdhaW5zdCBhcyBhbiBhdHRyaWJ1dGU6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8Y29udGFpbmVyLWVsZW1lbnQgW25nU3dpdGNoXT1cInN3aXRjaF9leHByZXNzaW9uXCI+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBXaXRoaW4gdGhlIGNvbnRhaW5lciwgYCpuZ1N3aXRjaENhc2VgIHN0YXRlbWVudHMgc3BlY2lmeSB0aGUgbWF0Y2ggZXhwcmVzc2lvbnNcclxuICogYXMgYXR0cmlidXRlcy4gSW5jbHVkZSBgKm5nU3dpdGNoRGVmYXVsdGAgYXMgdGhlIGZpbmFsIGNhc2UuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8Y29udGFpbmVyLWVsZW1lbnQgW25nU3dpdGNoXT1cInN3aXRjaF9leHByZXNzaW9uXCI+XHJcbiAqICAgIDxzb21lLWVsZW1lbnQgKm5nU3dpdGNoQ2FzZT1cIm1hdGNoX2V4cHJlc3Npb25fMVwiPi4uLjwvc29tZS1lbGVtZW50PlxyXG4gKiAuLi5cclxuICogICAgPHNvbWUtZWxlbWVudCAqbmdTd2l0Y2hEZWZhdWx0Pi4uLjwvc29tZS1lbGVtZW50PlxyXG4gKiA8L2NvbnRhaW5lci1lbGVtZW50PlxyXG4gKiBgYGBcclxuICpcclxuICogIyMjIFVzYWdlIEV4YW1wbGVzXHJcbiAqXHJcbiAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBzaG93cyBob3cgdG8gdXNlIG1vcmUgdGhhbiBvbmUgY2FzZSB0byBkaXNwbGF5IHRoZSBzYW1lIHZpZXc6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8Y29udGFpbmVyLWVsZW1lbnQgW25nU3dpdGNoXT1cInN3aXRjaF9leHByZXNzaW9uXCI+XHJcbiAqICAgPCEtLSB0aGUgc2FtZSB2aWV3IGNhbiBiZSBzaG93biBpbiBtb3JlIHRoYW4gb25lIGNhc2UgLS0+XHJcbiAqICAgPHNvbWUtZWxlbWVudCAqbmdTd2l0Y2hDYXNlPVwibWF0Y2hfZXhwcmVzc2lvbl8xXCI+Li4uPC9zb21lLWVsZW1lbnQ+XHJcbiAqICAgPHNvbWUtZWxlbWVudCAqbmdTd2l0Y2hDYXNlPVwibWF0Y2hfZXhwcmVzc2lvbl8yXCI+Li4uPC9zb21lLWVsZW1lbnQ+XHJcbiAqICAgPHNvbWUtb3RoZXItZWxlbWVudCAqbmdTd2l0Y2hDYXNlPVwibWF0Y2hfZXhwcmVzc2lvbl8zXCI+Li4uPC9zb21lLW90aGVyLWVsZW1lbnQ+XHJcbiAqICAgPCEtLWRlZmF1bHQgY2FzZSB3aGVuIHRoZXJlIGFyZSBubyBtYXRjaGVzIC0tPlxyXG4gKiAgIDxzb21lLWVsZW1lbnQgKm5nU3dpdGNoRGVmYXVsdD4uLi48L3NvbWUtZWxlbWVudD5cclxuICogPC9jb250YWluZXItZWxlbWVudD5cclxuICogYGBgXHJcbiAqXHJcbiAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBzaG93cyBob3cgY2FzZXMgY2FuIGJlIG5lc3RlZDpcclxuICogYGBgXHJcbiAqIDxjb250YWluZXItZWxlbWVudCBbbmdTd2l0Y2hdPVwic3dpdGNoX2V4cHJlc3Npb25cIj5cclxuICogICAgICAgPHNvbWUtZWxlbWVudCAqbmdTd2l0Y2hDYXNlPVwibWF0Y2hfZXhwcmVzc2lvbl8xXCI+Li4uPC9zb21lLWVsZW1lbnQ+XHJcbiAqICAgICAgIDxzb21lLWVsZW1lbnQgKm5nU3dpdGNoQ2FzZT1cIm1hdGNoX2V4cHJlc3Npb25fMlwiPi4uLjwvc29tZS1lbGVtZW50PlxyXG4gKiAgICAgICA8c29tZS1vdGhlci1lbGVtZW50ICpuZ1N3aXRjaENhc2U9XCJtYXRjaF9leHByZXNzaW9uXzNcIj4uLi48L3NvbWUtb3RoZXItZWxlbWVudD5cclxuICogICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwibWF0Y2hfZXhwcmVzc2lvbl8zXCI+XHJcbiAqICAgICAgICAgPCEtLSB1c2UgYSBuZy1jb250YWluZXIgdG8gZ3JvdXAgbXVsdGlwbGUgcm9vdCBub2RlcyAtLT5cclxuICogICAgICAgICA8aW5uZXItZWxlbWVudD48L2lubmVyLWVsZW1lbnQ+XHJcbiAqICAgICAgICAgPGlubmVyLW90aGVyLWVsZW1lbnQ+PC9pbm5lci1vdGhlci1lbGVtZW50PlxyXG4gKiAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICogICAgICAgPHNvbWUtZWxlbWVudCAqbmdTd2l0Y2hEZWZhdWx0Pi4uLjwvc29tZS1lbGVtZW50PlxyXG4gKiAgICAgPC9jb250YWluZXItZWxlbWVudD5cclxuICogYGBgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQHNlZSBgTmdTd2l0Y2hDYXNlYFxyXG4gKiBAc2VlIGBOZ1N3aXRjaERlZmF1bHRgXHJcbiAqIEBzZWUgW1N0cnVjdHVyYWwgRGlyZWN0aXZlc10oZ3VpZGUvc3RydWN0dXJhbC1kaXJlY3RpdmVzKVxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdTd2l0Y2gge1xyXG4gICAgcHJpdmF0ZSBfZGVmYXVsdFZpZXdzO1xyXG4gICAgcHJpdmF0ZSBfZGVmYXVsdFVzZWQ7XHJcbiAgICBwcml2YXRlIF9jYXNlQ291bnQ7XHJcbiAgICBwcml2YXRlIF9sYXN0Q2FzZUNoZWNrSW5kZXg7XHJcbiAgICBwcml2YXRlIF9sYXN0Q2FzZXNNYXRjaGVkO1xyXG4gICAgcHJpdmF0ZSBfbmdTd2l0Y2g7XHJcbiAgICBzZXQgbmdTd2l0Y2gobmV3VmFsdWU6IGFueSk7XHJcbiAgICBwcml2YXRlIF91cGRhdGVEZWZhdWx0Q2FzZXM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBQcm92aWRlcyBhIHN3aXRjaCBjYXNlIGV4cHJlc3Npb24gdG8gbWF0Y2ggYWdhaW5zdCBhbiBlbmNsb3NpbmcgYG5nU3dpdGNoYCBleHByZXNzaW9uLlxyXG4gKiBXaGVuIHRoZSBleHByZXNzaW9ucyBtYXRjaCwgdGhlIGdpdmVuIGBOZ1N3aXRjaENhc2VgIHRlbXBsYXRlIGlzIHJlbmRlcmVkLlxyXG4gKiBJZiBtdWx0aXBsZSBtYXRjaCBleHByZXNzaW9ucyBtYXRjaCB0aGUgc3dpdGNoIGV4cHJlc3Npb24gdmFsdWUsIGFsbCBvZiB0aGVtIGFyZSBkaXNwbGF5ZWQuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqXHJcbiAqIFdpdGhpbiBhIHN3aXRjaCBjb250YWluZXIsIGAqbmdTd2l0Y2hDYXNlYCBzdGF0ZW1lbnRzIHNwZWNpZnkgdGhlIG1hdGNoIGV4cHJlc3Npb25zXHJcbiAqIGFzIGF0dHJpYnV0ZXMuIEluY2x1ZGUgYCpuZ1N3aXRjaERlZmF1bHRgIGFzIHRoZSBmaW5hbCBjYXNlLlxyXG4gKlxyXG4gKiBgYGBcclxuICogPGNvbnRhaW5lci1lbGVtZW50IFtuZ1N3aXRjaF09XCJzd2l0Y2hfZXhwcmVzc2lvblwiPlxyXG4gKiAgIDxzb21lLWVsZW1lbnQgKm5nU3dpdGNoQ2FzZT1cIm1hdGNoX2V4cHJlc3Npb25fMVwiPi4uLjwvc29tZS1lbGVtZW50PlxyXG4gKiAgIC4uLlxyXG4gKiAgIDxzb21lLWVsZW1lbnQgKm5nU3dpdGNoRGVmYXVsdD4uLi48L3NvbWUtZWxlbWVudD5cclxuICogPC9jb250YWluZXItZWxlbWVudD5cclxuICogYGBgXHJcbiAqXHJcbiAqIEVhY2ggc3dpdGNoLWNhc2Ugc3RhdGVtZW50IGNvbnRhaW5zIGFuIGluLWxpbmUgSFRNTCB0ZW1wbGF0ZSBvciB0ZW1wbGF0ZSByZWZlcmVuY2VcclxuICogdGhhdCBkZWZpbmVzIHRoZSBzdWJ0cmVlIHRvIGJlIHNlbGVjdGVkIGlmIHRoZSB2YWx1ZSBvZiB0aGUgbWF0Y2ggZXhwcmVzc2lvblxyXG4gKiBtYXRjaGVzIHRoZSB2YWx1ZSBvZiB0aGUgc3dpdGNoIGV4cHJlc3Npb24uXHJcbiAqXHJcbiAqIFVubGlrZSBKYXZhU2NyaXB0LCB3aGljaCB1c2VzIHN0cmljdCBlcXVhbGl0eSwgQW5ndWxhciB1c2VzIGxvb3NlIGVxdWFsaXR5LlxyXG4gKiBUaGlzIG1lYW5zIHRoYXQgdGhlIGVtcHR5IHN0cmluZywgYFwiXCJgIG1hdGNoZXMgMC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAc2VlIGBOZ1N3aXRjaGBcclxuICogQHNlZSBgTmdTd2l0Y2hEZWZhdWx0YFxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdTd2l0Y2hDYXNlIGltcGxlbWVudHMgRG9DaGVjayB7XHJcbiAgICBwcml2YXRlIG5nU3dpdGNoO1xyXG4gICAgcHJpdmF0ZSBfdmlldztcclxuICAgIC8qKlxyXG4gICAgICogU3RvcmVzIHRoZSBIVE1MIHRlbXBsYXRlIHRvIGJlIHNlbGVjdGVkIG9uIG1hdGNoLlxyXG4gICAgICovXHJcbiAgICBuZ1N3aXRjaENhc2U6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxPYmplY3Q+LCBuZ1N3aXRjaDogTmdTd2l0Y2gpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJmb3JtcyBjYXNlIG1hdGNoaW5nLiBGb3IgaW50ZXJuYWwgdXNlIG9ubHkuXHJcbiAgICAgKi9cclxuICAgIG5nRG9DaGVjaygpOiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQ3JlYXRlcyBhIHZpZXcgdGhhdCBpcyByZW5kZXJlZCB3aGVuIG5vIGBOZ1N3aXRjaENhc2VgIGV4cHJlc3Npb25zXHJcbiAqIG1hdGNoIHRoZSBgTmdTd2l0Y2hgIGV4cHJlc3Npb24uXHJcbiAqIFRoaXMgc3RhdGVtZW50IHNob3VsZCBiZSB0aGUgZmluYWwgY2FzZSBpbiBhbiBgTmdTd2l0Y2hgLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBzZWUgYE5nU3dpdGNoYFxyXG4gKiBAc2VlIGBOZ1N3aXRjaENhc2VgXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ1N3aXRjaERlZmF1bHQge1xyXG4gICAgY29uc3RydWN0b3Iodmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPE9iamVjdD4sIG5nU3dpdGNoOiBOZ1N3aXRjaCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBJbnNlcnRzIGFuIGVtYmVkZGVkIHZpZXcgZnJvbSBhIHByZXBhcmVkIGBUZW1wbGF0ZVJlZmAuXHJcbiAqXHJcbiAqIFlvdSBjYW4gYXR0YWNoIGEgY29udGV4dCBvYmplY3QgdG8gdGhlIGBFbWJlZGRlZFZpZXdSZWZgIGJ5IHNldHRpbmcgYFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF1gLlxyXG4gKiBgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XWAgc2hvdWxkIGJlIGFuIG9iamVjdCwgdGhlIG9iamVjdCdzIGtleXMgd2lsbCBiZSBhdmFpbGFibGUgZm9yIGJpbmRpbmdcclxuICogYnkgdGhlIGxvY2FsIHRlbXBsYXRlIGBsZXRgIGRlY2xhcmF0aW9ucy5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogYGBgXHJcbiAqIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZVJlZkV4cDsgY29udGV4dDogY29udGV4dEV4cFwiPjwvbmctY29udGFpbmVyPlxyXG4gKiBgYGBcclxuICpcclxuICogVXNpbmcgdGhlIGtleSBgJGltcGxpY2l0YCBpbiB0aGUgY29udGV4dCBvYmplY3Qgd2lsbCBzZXQgaXRzIHZhbHVlIGFzIGRlZmF1bHQuXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqXHJcbiAqIHtAZXhhbXBsZSBjb21tb24vbmdUZW1wbGF0ZU91dGxldC90cy9tb2R1bGUudHMgcmVnaW9uPSdOZ1RlbXBsYXRlT3V0bGV0J31cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdUZW1wbGF0ZU91dGxldCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmO1xyXG4gICAgcHJpdmF0ZSBfdmlld1JlZjtcclxuICAgIC8qKlxyXG4gICAgICogQSBjb250ZXh0IG9iamVjdCB0byBhdHRhY2ggdG8gdGhlIHtAbGluayBFbWJlZGRlZFZpZXdSZWZ9LiBUaGlzIHNob3VsZCBiZSBhblxyXG4gICAgICogb2JqZWN0LCB0aGUgb2JqZWN0J3Mga2V5cyB3aWxsIGJlIGF2YWlsYWJsZSBmb3IgYmluZGluZyBieSB0aGUgbG9jYWwgdGVtcGxhdGUgYGxldGBcclxuICAgICAqIGRlY2xhcmF0aW9ucy5cclxuICAgICAqIFVzaW5nIHRoZSBrZXkgYCRpbXBsaWNpdGAgaW4gdGhlIGNvbnRleHQgb2JqZWN0IHdpbGwgc2V0IGl0cyB2YWx1ZSBhcyBkZWZhdWx0LlxyXG4gICAgICovXHJcbiAgICBuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dDogT2JqZWN0IHwgbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICogQSBzdHJpbmcgZGVmaW5pbmcgdGhlIHRlbXBsYXRlIHJlZmVyZW5jZSBhbmQgb3B0aW9uYWxseSB0aGUgY29udGV4dCBvYmplY3QgZm9yIHRoZSB0ZW1wbGF0ZS5cclxuICAgICAqL1xyXG4gICAgbmdUZW1wbGF0ZU91dGxldDogVGVtcGxhdGVSZWY8YW55PiB8IG51bGw7XHJcbiAgICBjb25zdHJ1Y3Rvcihfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZik7XHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogV2UgbmVlZCB0byByZS1jcmVhdGUgZXhpc3RpbmcgZW1iZWRkZWQgdmlldyBpZjpcclxuICAgICAqIC0gdGVtcGxhdGVSZWYgaGFzIGNoYW5nZWRcclxuICAgICAqIC0gY29udGV4dCBoYXMgY2hhbmdlc1xyXG4gICAgICpcclxuICAgICAqIFdlIG1hcmsgY29udGV4dCBvYmplY3QgYXMgY2hhbmdlZCB3aGVuIHRoZSBjb3JyZXNwb25kaW5nIG9iamVjdFxyXG4gICAgICogc2hhcGUgY2hhbmdlcyAobmV3IHByb3BlcnRpZXMgYXJlIGFkZGVkIG9yIGV4aXN0aW5nIHByb3BlcnRpZXMgYXJlIHJlbW92ZWQpLlxyXG4gICAgICogSW4gb3RoZXIgd29yZHMgd2UgY29uc2lkZXIgY29udGV4dCB3aXRoIHRoZSBzYW1lIHByb3BlcnRpZXMgYXMgXCJ0aGUgc2FtZVwiIGV2ZW5cclxuICAgICAqIGlmIG9iamVjdCByZWZlcmVuY2UgY2hhbmdlcyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEzNDA3KS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfc2hvdWxkUmVjcmVhdGVWaWV3O1xyXG4gICAgcHJpdmF0ZSBfaGFzQ29udGV4dFNoYXBlQ2hhbmdlZDtcclxuICAgIHByaXZhdGUgX3VwZGF0ZUV4aXN0aW5nQ29udGV4dDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBGb3JtYXQgc3R5bGVzIHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVwcmVzZW50IG51bWJlcnMuXHJcbiAqIEBzZWUgYGdldExvY2FsZU51bWJlckZvcm1hdCgpYC5cclxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZW51bSBOdW1iZXJGb3JtYXRTdHlsZSB7XHJcbiAgICBEZWNpbWFsID0gMCxcclxuICAgIFBlcmNlbnQgPSAxLFxyXG4gICAgQ3VycmVuY3kgPSAyLFxyXG4gICAgU2NpZW50aWZpYyA9IDNcclxufVxyXG5cclxuLyoqXHJcbiAqIFN5bWJvbHMgdGhhdCBjYW4gYmUgdXNlZCB0byByZXBsYWNlIHBsYWNlaG9sZGVycyBpbiBudW1iZXIgcGF0dGVybnMuXHJcbiAqIEV4YW1wbGVzIGFyZSBiYXNlZCBvbiBgZW4tVVNgIHZhbHVlcy5cclxuICpcclxuICogQHNlZSBgZ2V0TG9jYWxlTnVtYmVyU3ltYm9sKClgXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGVudW0gTnVtYmVyU3ltYm9sIHtcclxuICAgIC8qKlxyXG4gICAgICogRGVjaW1hbCBzZXBhcmF0b3IuXHJcbiAgICAgKiBGb3IgYGVuLVVTYCwgdGhlIGRvdCBjaGFyYWN0ZXIuXHJcbiAgICAgKiBFeGFtcGxlIDogMiwzNDVgLmA2N1xyXG4gICAgICovXHJcbiAgICBEZWNpbWFsID0gMCxcclxuICAgIC8qKlxyXG4gICAgICogR3JvdXBpbmcgc2VwYXJhdG9yLCB0eXBpY2FsbHkgZm9yIHRob3VzYW5kcy5cclxuICAgICAqIEZvciBgZW4tVVNgLCB0aGUgY29tbWEgY2hhcmFjdGVyLlxyXG4gICAgICogRXhhbXBsZTogMmAsYDM0NS42N1xyXG4gICAgICovXHJcbiAgICBHcm91cCA9IDEsXHJcbiAgICAvKipcclxuICAgICAqIExpc3QtaXRlbSBzZXBhcmF0b3IuXHJcbiAgICAgKiBFeGFtcGxlOiBcIm9uZSwgdHdvLCBhbmQgdGhyZWVcIlxyXG4gICAgICovXHJcbiAgICBMaXN0ID0gMixcclxuICAgIC8qKlxyXG4gICAgICogU2lnbiBmb3IgcGVyY2VudGFnZSAob3V0IG9mIDEwMCkuXHJcbiAgICAgKiBFeGFtcGxlOiAyMy40JVxyXG4gICAgICovXHJcbiAgICBQZXJjZW50U2lnbiA9IDMsXHJcbiAgICAvKipcclxuICAgICAqIFNpZ24gZm9yIHBvc2l0aXZlIG51bWJlcnMuXHJcbiAgICAgKiBFeGFtcGxlOiArMjNcclxuICAgICAqL1xyXG4gICAgUGx1c1NpZ24gPSA0LFxyXG4gICAgLyoqXHJcbiAgICAgKiBTaWduIGZvciBuZWdhdGl2ZSBudW1iZXJzLlxyXG4gICAgICogRXhhbXBsZTogLTIzXHJcbiAgICAgKi9cclxuICAgIE1pbnVzU2lnbiA9IDUsXHJcbiAgICAvKipcclxuICAgICAqIENvbXB1dGVyIG5vdGF0aW9uIGZvciBleHBvbmVudGlhbCB2YWx1ZSAobiB0aW1lcyBhIHBvd2VyIG9mIDEwKS5cclxuICAgICAqIEV4YW1wbGU6IDEuMkUzXHJcbiAgICAgKi9cclxuICAgIEV4cG9uZW50aWFsID0gNixcclxuICAgIC8qKlxyXG4gICAgICogSHVtYW4tcmVhZGFibGUgZm9ybWF0IG9mIGV4cG9uZW50aWFsLlxyXG4gICAgICogRXhhbXBsZTogMS4yeDEwM1xyXG4gICAgICovXHJcbiAgICBTdXBlcnNjcmlwdGluZ0V4cG9uZW50ID0gNyxcclxuICAgIC8qKlxyXG4gICAgICogU2lnbiBmb3IgcGVybWlsbGUgKG91dCBvZiAxMDAwKS5cclxuICAgICAqIEV4YW1wbGU6IDIzLjTigLBcclxuICAgICAqL1xyXG4gICAgUGVyTWlsbGUgPSA4LFxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmZpbml0eSwgY2FuIGJlIHVzZWQgd2l0aCBwbHVzIGFuZCBtaW51cy5cclxuICAgICAqIEV4YW1wbGU6IOKIniwgK+KIniwgLeKInlxyXG4gICAgICovXHJcbiAgICBJbmZpbml0eSA9IDksXHJcbiAgICAvKipcclxuICAgICAqIE5vdCBhIG51bWJlci5cclxuICAgICAqIEV4YW1wbGU6IE5hTlxyXG4gICAgICovXHJcbiAgICBOYU4gPSAxMCxcclxuICAgIC8qKlxyXG4gICAgICogU3ltYm9sIHVzZWQgYmV0d2VlbiB0aW1lIHVuaXRzLlxyXG4gICAgICogRXhhbXBsZTogMTA6NTJcclxuICAgICAqL1xyXG4gICAgVGltZVNlcGFyYXRvciA9IDExLFxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWNpbWFsIHNlcGFyYXRvciBmb3IgY3VycmVuY3kgdmFsdWVzIChmYWxsYmFjayB0byBgRGVjaW1hbGApLlxyXG4gICAgICogRXhhbXBsZTogJDIsMzQ1LjY3XHJcbiAgICAgKi9cclxuICAgIEN1cnJlbmN5RGVjaW1hbCA9IDEyLFxyXG4gICAgLyoqXHJcbiAgICAgKiBHcm91cCBzZXBhcmF0b3IgZm9yIGN1cnJlbmN5IHZhbHVlcyAoZmFsbGJhY2sgdG8gYEdyb3VwYCkuXHJcbiAgICAgKiBFeGFtcGxlOiAkMiwzNDUuNjdcclxuICAgICAqL1xyXG4gICAgQ3VycmVuY3lHcm91cCA9IDEzXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB7QGxpbmsgTG9jYXRpb25TdHJhdGVneX0gdXNlZCB0byBjb25maWd1cmUgdGhlIHtAbGluayBMb2NhdGlvbn0gc2VydmljZSB0b1xyXG4gKiByZXByZXNlbnQgaXRzIHN0YXRlIGluIHRoZVxyXG4gKiBbcGF0aF0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW5pZm9ybV9SZXNvdXJjZV9Mb2NhdG9yI1N5bnRheCkgb2YgdGhlXHJcbiAqIGJyb3dzZXIncyBVUkwuXHJcbiAqXHJcbiAqIElmIHlvdSdyZSB1c2luZyBgUGF0aExvY2F0aW9uU3RyYXRlZ3lgLCB5b3UgbXVzdCBwcm92aWRlIGEge0BsaW5rIEFQUF9CQVNFX0hSRUZ9XHJcbiAqIG9yIGFkZCBhIGJhc2UgZWxlbWVudCB0byB0aGUgZG9jdW1lbnQuIFRoaXMgVVJMIHByZWZpeCB0aGF0IHdpbGwgYmUgcHJlc2VydmVkXHJcbiAqIHdoZW4gZ2VuZXJhdGluZyBhbmQgcmVjb2duaXppbmcgVVJMcy5cclxuICpcclxuICogRm9yIGluc3RhbmNlLCBpZiB5b3UgcHJvdmlkZSBhbiBgQVBQX0JBU0VfSFJFRmAgb2YgYCcvbXkvYXBwJ2AgYW5kIGNhbGxcclxuICogYGxvY2F0aW9uLmdvKCcvZm9vJylgLCB0aGUgYnJvd3NlcidzIFVSTCB3aWxsIGJlY29tZVxyXG4gKiBgZXhhbXBsZS5jb20vbXkvYXBwL2Zvb2AuXHJcbiAqXHJcbiAqIFNpbWlsYXJseSwgaWYgeW91IGFkZCBgPGJhc2UgaHJlZj0nL215L2FwcCcvPmAgdG8gdGhlIGRvY3VtZW50IGFuZCBjYWxsXHJcbiAqIGBsb2NhdGlvbi5nbygnL2ZvbycpYCwgdGhlIGJyb3dzZXIncyBVUkwgd2lsbCBiZWNvbWVcclxuICogYGV4YW1wbGUuY29tL215L2FwcC9mb29gLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKlxyXG4gKiB7QGV4YW1wbGUgY29tbW9uL2xvY2F0aW9uL3RzL3BhdGhfbG9jYXRpb25fY29tcG9uZW50LnRzIHJlZ2lvbj0nTG9jYXRpb25Db21wb25lbnQnfVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQYXRoTG9jYXRpb25TdHJhdGVneSBleHRlbmRzIExvY2F0aW9uU3RyYXRlZ3kge1xyXG4gICAgcHJpdmF0ZSBfcGxhdGZvcm1Mb2NhdGlvbjtcclxuICAgIHByaXZhdGUgX2Jhc2VIcmVmO1xyXG4gICAgY29uc3RydWN0b3IoX3BsYXRmb3JtTG9jYXRpb246IFBsYXRmb3JtTG9jYXRpb24sIGhyZWY/OiBzdHJpbmcpO1xyXG4gICAgb25Qb3BTdGF0ZShmbjogTG9jYXRpb25DaGFuZ2VMaXN0ZW5lcik6IHZvaWQ7XHJcbiAgICBnZXRCYXNlSHJlZigpOiBzdHJpbmc7XHJcbiAgICBwcmVwYXJlRXh0ZXJuYWxVcmwoaW50ZXJuYWw6IHN0cmluZyk6IHN0cmluZztcclxuICAgIHBhdGgoaW5jbHVkZUhhc2g/OiBib29sZWFuKTogc3RyaW5nO1xyXG4gICAgcHVzaFN0YXRlKHN0YXRlOiBhbnksIHRpdGxlOiBzdHJpbmcsIHVybDogc3RyaW5nLCBxdWVyeVBhcmFtczogc3RyaW5nKTogdm9pZDtcclxuICAgIHJlcGxhY2VTdGF0ZShzdGF0ZTogYW55LCB0aXRsZTogc3RyaW5nLCB1cmw6IHN0cmluZywgcXVlcnlQYXJhbXM6IHN0cmluZyk6IHZvaWQ7XHJcbiAgICBmb3J3YXJkKCk6IHZvaWQ7XHJcbiAgICBiYWNrKCk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBUcmFuc2Zvcm1zIGEgbnVtYmVyIHRvIGEgcGVyY2VudGFnZVxyXG4gKiBzdHJpbmcsIGZvcm1hdHRlZCBhY2NvcmRpbmcgdG8gbG9jYWxlIHJ1bGVzIHRoYXQgZGV0ZXJtaW5lIGdyb3VwIHNpemluZyBhbmRcclxuICogc2VwYXJhdG9yLCBkZWNpbWFsLXBvaW50IGNoYXJhY3RlciwgYW5kIG90aGVyIGxvY2FsZS1zcGVjaWZpY1xyXG4gKiBjb25maWd1cmF0aW9ucy5cclxuICpcclxuICogQHNlZSBgZm9ybWF0UGVyY2VudCgpYFxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiBUaGUgZm9sbG93aW5nIGNvZGUgc2hvd3MgaG93IHRoZSBwaXBlIHRyYW5zZm9ybXMgbnVtYmVyc1xyXG4gKiBpbnRvIHRleHQgc3RyaW5ncywgYWNjb3JkaW5nIHRvIHZhcmlvdXMgZm9ybWF0IHNwZWNpZmljYXRpb25zLFxyXG4gKiB3aGVyZSB0aGUgY2FsbGVyJ3MgZGVmYXVsdCBsb2NhbGUgaXMgYGVuLVVTYC5cclxuICpcclxuICogPGNvZGUtZXhhbXBsZSBwYXRoPVwiY29tbW9uL3BpcGVzL3RzL3BlcmNlbnRfcGlwZS50c1wiIHJlZ2lvbj0nUGVyY2VudFBpcGUnPjwvY29kZS1leGFtcGxlPlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQZXJjZW50UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgcHJpdmF0ZSBfbG9jYWxlO1xyXG4gICAgY29uc3RydWN0b3IoX2xvY2FsZTogc3RyaW5nKTtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgbnVtYmVyIHRvIGJlIGZvcm1hdHRlZCBhcyBhIHBlcmNlbnRhZ2UuXHJcbiAgICAgKiBAcGFyYW0gZGlnaXRzSW5mbyBEZWNpbWFsIHJlcHJlc2VudGF0aW9uIG9wdGlvbnMsIHNwZWNpZmllZCBieSBhIHN0cmluZ1xyXG4gICAgICogaW4gdGhlIGZvbGxvd2luZyBmb3JtYXQ6PGJyPlxyXG4gICAgICogPGNvZGU+e21pbkludGVnZXJEaWdpdHN9LnttaW5GcmFjdGlvbkRpZ2l0c30te21heEZyYWN0aW9uRGlnaXRzfTwvY29kZT4uXHJcbiAgICAgKiAgIC0gYG1pbkludGVnZXJEaWdpdHNgOiBUaGUgbWluaW11bSBudW1iZXIgb2YgaW50ZWdlciBkaWdpdHMgYmVmb3JlIHRoZSBkZWNpbWFsIHBvaW50LlxyXG4gICAgICogRGVmYXVsdCBpcyBgMWAuXHJcbiAgICAgKiAgIC0gYG1pbkZyYWN0aW9uRGlnaXRzYDogVGhlIG1pbmltdW0gbnVtYmVyIG9mIGRpZ2l0cyBhZnRlciB0aGUgZGVjaW1hbCBwb2ludC5cclxuICAgICAqIERlZmF1bHQgaXMgYDBgLlxyXG4gICAgICogICAtIGBtYXhGcmFjdGlvbkRpZ2l0c2A6IFRoZSBtYXhpbXVtIG51bWJlciBvZiBkaWdpdHMgYWZ0ZXIgdGhlIGRlY2ltYWwgcG9pbnQuXHJcbiAgICAgKiBEZWZhdWx0IGlzIGAwYC5cclxuICAgICAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxyXG4gICAgICogV2hlbiBub3Qgc3VwcGxpZWQsIHVzZXMgdGhlIHZhbHVlIG9mIGBMT0NBTEVfSURgLCB3aGljaCBpcyBgZW4tVVNgIGJ5IGRlZmF1bHQuXHJcbiAgICAgKiBTZWUgW1NldHRpbmcgeW91ciBhcHAgbG9jYWxlXShndWlkZS9pMThuI3NldHRpbmctdXAtdGhlLWxvY2FsZS1vZi15b3VyLWFwcCkuXHJcbiAgICAgKi9cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBkaWdpdHNJbmZvPzogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyBzaG91bGQgbm90IGJlIHVzZWQgZGlyZWN0bHkgYnkgYW4gYXBwbGljYXRpb24gZGV2ZWxvcGVyLiBJbnN0ZWFkLCB1c2VcclxuICoge0BsaW5rIExvY2F0aW9ufS5cclxuICpcclxuICogYFBsYXRmb3JtTG9jYXRpb25gIGVuY2Fwc3VsYXRlcyBhbGwgY2FsbHMgdG8gRE9NIEFQSXMsIHdoaWNoIGFsbG93cyB0aGUgUm91dGVyIHRvIGJlXHJcbiAqIHBsYXRmb3JtLWFnbm9zdGljLlxyXG4gKiBUaGlzIG1lYW5zIHRoYXQgd2UgY2FuIGhhdmUgZGlmZmVyZW50IGltcGxlbWVudGF0aW9uIG9mIGBQbGF0Zm9ybUxvY2F0aW9uYCBmb3IgdGhlIGRpZmZlcmVudFxyXG4gKiBwbGF0Zm9ybXMgdGhhdCBBbmd1bGFyIHN1cHBvcnRzLiBGb3IgZXhhbXBsZSwgYEBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJgIHByb3ZpZGVzIGFuXHJcbiAqIGltcGxlbWVudGF0aW9uIHNwZWNpZmljIHRvIHRoZSBicm93c2VyIGVudmlyb25tZW50LCB3aGlsZSBgQGFuZ3VsYXIvcGxhdGZvcm0tc2VydmVyYCBwcm92aWRlc1xyXG4gKiBvbmUgc3VpdGFibGUgZm9yIHVzZSB3aXRoIHNlcnZlci1zaWRlIHJlbmRlcmluZy5cclxuICpcclxuICogVGhlIGBQbGF0Zm9ybUxvY2F0aW9uYCBjbGFzcyBpcyB1c2VkIGRpcmVjdGx5IGJ5IGFsbCBpbXBsZW1lbnRhdGlvbnMgb2Yge0BsaW5rIExvY2F0aW9uU3RyYXRlZ3l9XHJcbiAqIHdoZW4gdGhleSBuZWVkIHRvIGludGVyYWN0IHdpdGggdGhlIERPTSBBUElzIGxpa2UgcHVzaFN0YXRlLCBwb3BTdGF0ZSwgZXRjLlxyXG4gKlxyXG4gKiB7QGxpbmsgTG9jYXRpb25TdHJhdGVneX0gaW4gdHVybiBpcyB1c2VkIGJ5IHRoZSB7QGxpbmsgTG9jYXRpb259IHNlcnZpY2Ugd2hpY2ggaXMgdXNlZCBkaXJlY3RseVxyXG4gKiBieSB0aGUge0BsaW5rIFJvdXRlcn0gaW4gb3JkZXIgdG8gbmF2aWdhdGUgYmV0d2VlbiByb3V0ZXMuIFNpbmNlIGFsbCBpbnRlcmFjdGlvbnMgYmV0d2VlbiB7QGxpbmtcclxuICogUm91dGVyfSAvXHJcbiAqIHtAbGluayBMb2NhdGlvbn0gLyB7QGxpbmsgTG9jYXRpb25TdHJhdGVneX0gYW5kIERPTSBBUElzIGZsb3cgdGhyb3VnaCB0aGUgYFBsYXRmb3JtTG9jYXRpb25gXHJcbiAqIGNsYXNzLCB0aGV5IGFyZSBhbGwgcGxhdGZvcm0tYWdub3N0aWMuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIFBsYXRmb3JtTG9jYXRpb24ge1xyXG4gICAgYWJzdHJhY3QgZ2V0QmFzZUhyZWZGcm9tRE9NKCk6IHN0cmluZztcclxuICAgIGFic3RyYWN0IGdldFN0YXRlKCk6IHVua25vd247XHJcbiAgICBhYnN0cmFjdCBvblBvcFN0YXRlKGZuOiBMb2NhdGlvbkNoYW5nZUxpc3RlbmVyKTogdm9pZDtcclxuICAgIGFic3RyYWN0IG9uSGFzaENoYW5nZShmbjogTG9jYXRpb25DaGFuZ2VMaXN0ZW5lcik6IHZvaWQ7XHJcbiAgICBhYnN0cmFjdCBnZXQgaHJlZigpOiBzdHJpbmc7XHJcbiAgICBhYnN0cmFjdCBnZXQgcHJvdG9jb2woKTogc3RyaW5nO1xyXG4gICAgYWJzdHJhY3QgZ2V0IGhvc3RuYW1lKCk6IHN0cmluZztcclxuICAgIGFic3RyYWN0IGdldCBwb3J0KCk6IHN0cmluZztcclxuICAgIGFic3RyYWN0IGdldCBwYXRobmFtZSgpOiBzdHJpbmc7XHJcbiAgICBhYnN0cmFjdCBnZXQgc2VhcmNoKCk6IHN0cmluZztcclxuICAgIGFic3RyYWN0IGdldCBoYXNoKCk6IHN0cmluZztcclxuICAgIGFic3RyYWN0IHJlcGxhY2VTdGF0ZShzdGF0ZTogYW55LCB0aXRsZTogc3RyaW5nLCB1cmw6IHN0cmluZyk6IHZvaWQ7XHJcbiAgICBhYnN0cmFjdCBwdXNoU3RhdGUoc3RhdGU6IGFueSwgdGl0bGU6IHN0cmluZywgdXJsOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgYWJzdHJhY3QgZm9yd2FyZCgpOiB2b2lkO1xyXG4gICAgYWJzdHJhY3QgYmFjaygpOiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICogUGx1cmFsaXR5IGNhc2VzIHVzZWQgZm9yIHRyYW5zbGF0aW5nIHBsdXJhbHMgdG8gZGlmZmVyZW50IGxhbmd1YWdlcy5cclxuICpcclxuICogQHNlZSBgTmdQbHVyYWxgXHJcbiAqIEBzZWUgYE5nUGx1cmFsQ2FzZWBcclxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZW51bSBQbHVyYWwge1xyXG4gICAgWmVybyA9IDAsXHJcbiAgICBPbmUgPSAxLFxyXG4gICAgVHdvID0gMixcclxuICAgIEZldyA9IDMsXHJcbiAgICBNYW55ID0gNCxcclxuICAgIE90aGVyID0gNVxyXG59XHJcblxyXG4vKiogQHB1YmxpY0FwaSAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgUG9wU3RhdGVFdmVudCB7XHJcbiAgICBwb3A/OiBib29sZWFuO1xyXG4gICAgc3RhdGU/OiBhbnk7XHJcbiAgICB0eXBlPzogc3RyaW5nO1xyXG4gICAgdXJsPzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFJlZ2lzdGVyIGdsb2JhbCBkYXRhIHRvIGJlIHVzZWQgaW50ZXJuYWxseSBieSBBbmd1bGFyLiBTZWUgdGhlXHJcbiAqIFtcIkkxOG4gZ3VpZGVcIl0oZ3VpZGUvaTE4biNpMThuLXBpcGVzKSB0byBrbm93IGhvdyB0byBpbXBvcnQgYWRkaXRpb25hbCBsb2NhbGUgZGF0YS5cclxuICpcclxuICogVGhlIHNpZ25hdHVyZSByZWdpc3RlckxvY2FsZURhdGEoZGF0YTogYW55LCBleHRyYURhdGE/OiBhbnkpIGlzIGRlcHJlY2F0ZWQgc2luY2UgdjUuMVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiByZWdpc3RlckxvY2FsZURhdGEoZGF0YTogYW55LCBsb2NhbGVJZD86IHN0cmluZyB8IGFueSwgZXh0cmFEYXRhPzogYW55KTogdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBDcmVhdGVzIGEgbmV3IGBBcnJheWAgb3IgYFN0cmluZ2AgY29udGFpbmluZyBhIHN1YnNldCAoc2xpY2UpIG9mIHRoZSBlbGVtZW50cy5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICpcclxuICogQWxsIGJlaGF2aW9yIGlzIGJhc2VkIG9uIHRoZSBleHBlY3RlZCBiZWhhdmlvciBvZiB0aGUgSmF2YVNjcmlwdCBBUEkgYEFycmF5LnByb3RvdHlwZS5zbGljZSgpYFxyXG4gKiBhbmQgYFN0cmluZy5wcm90b3R5cGUuc2xpY2UoKWAuXHJcbiAqXHJcbiAqIFdoZW4gb3BlcmF0aW5nIG9uIGFuIGBBcnJheWAsIHRoZSByZXR1cm5lZCBgQXJyYXlgIGlzIGFsd2F5cyBhIGNvcHkgZXZlbiB3aGVuIGFsbFxyXG4gKiB0aGUgZWxlbWVudHMgYXJlIGJlaW5nIHJldHVybmVkLlxyXG4gKlxyXG4gKiBXaGVuIG9wZXJhdGluZyBvbiBhIGJsYW5rIHZhbHVlLCB0aGUgcGlwZSByZXR1cm5zIHRoZSBibGFuayB2YWx1ZS5cclxuICpcclxuICogIyMjIExpc3QgRXhhbXBsZVxyXG4gKlxyXG4gKiBUaGlzIGBuZ0ZvcmAgZXhhbXBsZTpcclxuICpcclxuICoge0BleGFtcGxlIGNvbW1vbi9waXBlcy90cy9zbGljZV9waXBlLnRzIHJlZ2lvbj0nU2xpY2VQaXBlX2xpc3QnfVxyXG4gKlxyXG4gKiBwcm9kdWNlcyB0aGUgZm9sbG93aW5nOlxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxsaT5iPC9saT5cclxuICogPGxpPmM8L2xpPlxyXG4gKiBgYGBcclxuICpcclxuICogIyMjIFN0cmluZyBFeGFtcGxlc1xyXG4gKlxyXG4gKiB7QGV4YW1wbGUgY29tbW9uL3BpcGVzL3RzL3NsaWNlX3BpcGUudHMgcmVnaW9uPSdTbGljZVBpcGVfc3RyaW5nJ31cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2xpY2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBhIGxpc3Qgb3IgYSBzdHJpbmcgdG8gYmUgc2xpY2VkLlxyXG4gICAgICogQHBhcmFtIHN0YXJ0IHRoZSBzdGFydGluZyBpbmRleCBvZiB0aGUgc3Vic2V0IHRvIHJldHVybjpcclxuICAgICAqICAgLSAqKmEgcG9zaXRpdmUgaW50ZWdlcioqOiByZXR1cm4gdGhlIGl0ZW0gYXQgYHN0YXJ0YCBpbmRleCBhbmQgYWxsIGl0ZW1zIGFmdGVyXHJcbiAgICAgKiAgICAgaW4gdGhlIGxpc3Qgb3Igc3RyaW5nIGV4cHJlc3Npb24uXHJcbiAgICAgKiAgIC0gKiphIG5lZ2F0aXZlIGludGVnZXIqKjogcmV0dXJuIHRoZSBpdGVtIGF0IGBzdGFydGAgaW5kZXggZnJvbSB0aGUgZW5kIGFuZCBhbGwgaXRlbXMgYWZ0ZXJcclxuICAgICAqICAgICBpbiB0aGUgbGlzdCBvciBzdHJpbmcgZXhwcmVzc2lvbi5cclxuICAgICAqICAgLSAqKmlmIHBvc2l0aXZlIGFuZCBncmVhdGVyIHRoYW4gdGhlIHNpemUgb2YgdGhlIGV4cHJlc3Npb24qKjogcmV0dXJuIGFuIGVtcHR5IGxpc3Qgb3JcclxuICAgICAqIHN0cmluZy5cclxuICAgICAqICAgLSAqKmlmIG5lZ2F0aXZlIGFuZCBncmVhdGVyIHRoYW4gdGhlIHNpemUgb2YgdGhlIGV4cHJlc3Npb24qKjogcmV0dXJuIGVudGlyZSBsaXN0IG9yIHN0cmluZy5cclxuICAgICAqIEBwYXJhbSBlbmQgdGhlIGVuZGluZyBpbmRleCBvZiB0aGUgc3Vic2V0IHRvIHJldHVybjpcclxuICAgICAqICAgLSAqKm9taXR0ZWQqKjogcmV0dXJuIGFsbCBpdGVtcyB1bnRpbCB0aGUgZW5kLlxyXG4gICAgICogICAtICoqaWYgcG9zaXRpdmUqKjogcmV0dXJuIGFsbCBpdGVtcyBiZWZvcmUgYGVuZGAgaW5kZXggb2YgdGhlIGxpc3Qgb3Igc3RyaW5nLlxyXG4gICAgICogICAtICoqaWYgbmVnYXRpdmUqKjogcmV0dXJuIGFsbCBpdGVtcyBiZWZvcmUgYGVuZGAgaW5kZXggZnJvbSB0aGUgZW5kIG9mIHRoZSBsaXN0IG9yIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgdHJhbnNmb3JtPFQ+KHZhbHVlOiBSZWFkb25seUFycmF5PFQ+LCBzdGFydDogbnVtYmVyLCBlbmQ/OiBudW1iZXIpOiBBcnJheTxUPjtcclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBzdGFydDogbnVtYmVyLCBlbmQ/OiBudW1iZXIpOiBzdHJpbmc7XHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IG51bGwsIHN0YXJ0OiBudW1iZXIsIGVuZD86IG51bWJlcik6IG51bGw7XHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IHVuZGVmaW5lZCwgc3RhcnQ6IG51bWJlciwgZW5kPzogbnVtYmVyKTogdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBzdXBwb3J0cztcclxufVxyXG5cclxuZGVjbGFyZSBjbGFzcyBTd2l0Y2hWaWV3IHtcclxuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY7XHJcbiAgICBwcml2YXRlIF90ZW1wbGF0ZVJlZjtcclxuICAgIHByaXZhdGUgX2NyZWF0ZWQ7XHJcbiAgICBjb25zdHJ1Y3Rvcihfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgX3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxPYmplY3Q+KTtcclxuICAgIGNyZWF0ZSgpOiB2b2lkO1xyXG4gICAgZGVzdHJveSgpOiB2b2lkO1xyXG4gICAgZW5mb3JjZVN0YXRlKGNyZWF0ZWQ6IGJvb2xlYW4pOiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIHRpbWUgdmFsdWUgd2l0aCBob3VycyBhbmQgbWludXRlcy5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBUaW1lID0ge1xyXG4gICAgaG91cnM6IG51bWJlcjtcclxuICAgIG1pbnV0ZXM6IG51bWJlcjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUcmFuc2Zvcm1zIHRleHQgdG8gdGl0bGUgY2FzZS5cclxuICogQ2FwaXRhbGl6ZXMgdGhlIGZpcnN0IGxldHRlciBvZiBlYWNoIHdvcmQgYW5kIHRyYW5zZm9ybXMgdGhlXHJcbiAqIHJlc3Qgb2YgdGhlIHdvcmQgdG8gbG93ZXIgY2FzZS5cclxuICogV29yZHMgYXJlIGRlbGltaXRlZCBieSBhbnkgd2hpdGVzcGFjZSBjaGFyYWN0ZXIsIHN1Y2ggYXMgYSBzcGFjZSwgdGFiLCBvciBsaW5lLWZlZWQgY2hhcmFjdGVyLlxyXG4gKlxyXG4gKiBAc2VlIGBMb3dlckNhc2VQaXBlYFxyXG4gKiBAc2VlIGBVcHBlckNhc2VQaXBlYFxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgc2hvd3MgdGhlIHJlc3VsdCBvZiB0cmFuc2Zvcm1pbmcgdmFyaW91cyBzdHJpbmdzIGludG8gdGl0bGUgY2FzZS5cclxuICpcclxuICogPGNvZGUtZXhhbXBsZSBwYXRoPVwiY29tbW9uL3BpcGVzL3RzL3RpdGxlY2FzZV9waXBlLnRzXCIgcmVnaW9uPSdUaXRsZUNhc2VQaXBlJz48L2NvZGUtZXhhbXBsZT5cclxuICpcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBUaXRsZUNhc2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgc3RyaW5nIHRvIHRyYW5zZm9ybSB0byB0aXRsZSBjYXNlLlxyXG4gICAgICovXHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyk6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFN0cmluZyB3aWR0aHMgYXZhaWxhYmxlIGZvciB0cmFuc2xhdGlvbnMuXHJcbiAqIFRoZSBzcGVjaWZpYyBjaGFyYWN0ZXIgd2lkdGhzIGFyZSBsb2NhbGUtc3BlY2lmaWMuXHJcbiAqIEV4YW1wbGVzIGFyZSBnaXZlbiBmb3IgdGhlIHdvcmQgXCJTdW5kYXlcIiBpbiBFbmdsaXNoLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBlbnVtIFRyYW5zbGF0aW9uV2lkdGgge1xyXG4gICAgLyoqIDEgY2hhcmFjdGVyIGZvciBgZW4tVVNgLiBGb3IgZXhhbXBsZTogJ1MnICovXHJcbiAgICBOYXJyb3cgPSAwLFxyXG4gICAgLyoqIDMgY2hhcmFjdGVycyBmb3IgYGVuLVVTYC4gRm9yIGV4YW1wbGU6ICdTdW4nICovXHJcbiAgICBBYmJyZXZpYXRlZCA9IDEsXHJcbiAgICAvKiogRnVsbCBsZW5ndGggZm9yIGBlbi1VU2AuIEZvciBleGFtcGxlOiBcIlN1bmRheVwiICovXHJcbiAgICBXaWRlID0gMixcclxuICAgIC8qKiAyIGNoYXJhY3RlcnMgZm9yIGBlbi1VU2AsIEZvciBleGFtcGxlOiBcIlN1XCIgKi9cclxuICAgIFNob3J0ID0gM1xyXG59XHJcblxyXG4vKipcclxuICogVHJhbnNmb3JtcyB0ZXh0IHRvIGFsbCB1cHBlciBjYXNlLlxyXG4gKiBAc2VlIGBMb3dlckNhc2VQaXBlYFxyXG4gKiBAc2VlIGBUaXRsZUNhc2VQaXBlYFxyXG4gKlxyXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFVwcGVyQ2FzZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBzdHJpbmcgdG8gdHJhbnNmb3JtIHRvIHVwcGVyIGNhc2UuXHJcbiAgICAgKi9cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgVkVSU0lPTjogVmVyc2lvbjtcclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIGEgc2Nyb2xsIHBvc2l0aW9uIG1hbmFnZXIuIEltcGxlbWVudGVkIGJ5IGBCcm93c2VyVmlld3BvcnRTY3JvbGxlcmAuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIFZpZXdwb3J0U2Nyb2xsZXIge1xyXG4gICAgLyoqIEBub2NvbGxhcHNlICovXHJcbiAgICBzdGF0aWMgybVwcm92OiBuZXZlcjtcclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgdG9wIG9mZnNldCB1c2VkIHdoZW4gc2Nyb2xsaW5nIHRvIGFuIGFuY2hvci5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgQSBwb3NpdGlvbiBpbiBzY3JlZW4gY29vcmRpbmF0ZXMgKGEgdHVwbGUgd2l0aCB4IGFuZCB5IHZhbHVlcylcclxuICAgICAqIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB0b3Agb2Zmc2V0IHBvc2l0aW9uLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3Qgc2V0T2Zmc2V0KG9mZnNldDogW251bWJlciwgbnVtYmVyXSB8ICgoKSA9PiBbbnVtYmVyLCBudW1iZXJdKSk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24uXHJcbiAgICAgKiBAcmV0dXJucyBBIHBvc2l0aW9uIGluIHNjcmVlbiBjb29yZGluYXRlcyAoYSB0dXBsZSB3aXRoIHggYW5kIHkgdmFsdWVzKS5cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgZ2V0U2Nyb2xsUG9zaXRpb24oKTogW251bWJlciwgbnVtYmVyXTtcclxuICAgIC8qKlxyXG4gICAgICogU2Nyb2xscyB0byBhIHNwZWNpZmllZCBwb3NpdGlvbi5cclxuICAgICAqIEBwYXJhbSBwb3NpdGlvbiBBIHBvc2l0aW9uIGluIHNjcmVlbiBjb29yZGluYXRlcyAoYSB0dXBsZSB3aXRoIHggYW5kIHkgdmFsdWVzKS5cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3Qgc2Nyb2xsVG9Qb3NpdGlvbihwb3NpdGlvbjogW251bWJlciwgbnVtYmVyXSk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIFNjcm9sbHMgdG8gYW4gYW5jaG9yIGVsZW1lbnQuXHJcbiAgICAgKiBAcGFyYW0gYW5jaG9yIFRoZSBJRCBvZiB0aGUgYW5jaG9yIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IHNjcm9sbFRvQW5jaG9yKGFuY2hvcjogc3RyaW5nKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogRGlzYWJsZXMgYXV0b21hdGljIHNjcm9sbCByZXN0b3JhdGlvbiBwcm92aWRlZCBieSB0aGUgYnJvd3Nlci5cclxuICAgICAqIFNlZSBhbHNvIFt3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvblxyXG4gICAgICogaW5mb10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3VwZGF0ZXMvMjAxNS8wOS9oaXN0b3J5LWFwaS1zY3JvbGwtcmVzdG9yYXRpb24pLlxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBzZXRIaXN0b3J5U2Nyb2xsUmVzdG9yYXRpb24oc2Nyb2xsUmVzdG9yYXRpb246ICdhdXRvJyB8ICdtYW51YWwnKTogdm9pZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSB2YWx1ZSBmb3IgZWFjaCBkYXkgb2YgdGhlIHdlZWssIGJhc2VkIG9uIHRoZSBgZW4tVVNgIGxvY2FsZVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBlbnVtIFdlZWtEYXkge1xyXG4gICAgU3VuZGF5ID0gMCxcclxuICAgIE1vbmRheSA9IDEsXHJcbiAgICBUdWVzZGF5ID0gMixcclxuICAgIFdlZG5lc2RheSA9IDMsXHJcbiAgICBUaHVyc2RheSA9IDQsXHJcbiAgICBGcmlkYXkgPSA1LFxyXG4gICAgU2F0dXJkYXkgPSA2XHJcbn1cclxuXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIMm1YW5ndWxhcl9wYWNrYWdlc19jb21tb25fY29tbW9uX2EoKTogybVCcm93c2VyUGxhdGZvcm1Mb2NhdGlvbjtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIMm1YW5ndWxhcl9wYWNrYWdlc19jb21tb25fY29tbW9uX2IoKTogybVCcm93c2VyUGxhdGZvcm1Mb2NhdGlvbjtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIMm1YW5ndWxhcl9wYWNrYWdlc19jb21tb25fY29tbW9uX2MoKTogTG9jYXRpb247XHJcblxyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtWFuZ3VsYXJfcGFja2FnZXNfY29tbW9uX2NvbW1vbl9kKHBsYXRmb3JtTG9jYXRpb246IFBsYXRmb3JtTG9jYXRpb24pOiBQYXRoTG9jYXRpb25TdHJhdGVneTtcclxuXHJcbi8qKlxyXG4gKiBBIGNvbGxlY3Rpb24gb2YgQW5ndWxhciBkaXJlY3RpdmVzIHRoYXQgYXJlIGxpa2VseSB0byBiZSB1c2VkIGluIGVhY2ggYW5kIGV2ZXJ5IEFuZ3VsYXJcclxuICogYXBwbGljYXRpb24uXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCDJtWFuZ3VsYXJfcGFja2FnZXNfY29tbW9uX2NvbW1vbl9lOiBQcm92aWRlcltdO1xyXG5cclxuLyoqXHJcbiAqIEEgY29sbGVjdGlvbiBvZiBBbmd1bGFyIHBpcGVzIHRoYXQgYXJlIGxpa2VseSB0byBiZSB1c2VkIGluIGVhY2ggYW5kIGV2ZXJ5IGFwcGxpY2F0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgybVhbmd1bGFyX3BhY2thZ2VzX2NvbW1vbl9jb21tb25fZjogKHR5cGVvZiBBc3luY1BpcGUgfCB0eXBlb2YgU2xpY2VQaXBlIHwgdHlwZW9mIERlY2ltYWxQaXBlIHwgdHlwZW9mIFBlcmNlbnRQaXBlIHwgdHlwZW9mIEN1cnJlbmN5UGlwZSB8IHR5cGVvZiBEYXRlUGlwZSB8IHR5cGVvZiBJMThuUGx1cmFsUGlwZSB8IHR5cGVvZiBJMThuU2VsZWN0UGlwZSB8IHR5cGVvZiBLZXlWYWx1ZVBpcGUpW107XHJcblxyXG4vKipcclxuICogYFBsYXRmb3JtTG9jYXRpb25gIGVuY2Fwc3VsYXRlcyBhbGwgb2YgdGhlIGRpcmVjdCBjYWxscyB0byBwbGF0Zm9ybSBBUElzLlxyXG4gKiBUaGlzIGNsYXNzIHNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseSBieSBhbiBhcHBsaWNhdGlvbiBkZXZlbG9wZXIuIEluc3RlYWQsIHVzZVxyXG4gKiB7QGxpbmsgTG9jYXRpb259LlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVCcm93c2VyUGxhdGZvcm1Mb2NhdGlvbiBleHRlbmRzIFBsYXRmb3JtTG9jYXRpb24ge1xyXG4gICAgcHJpdmF0ZSBfZG9jO1xyXG4gICAgcmVhZG9ubHkgbG9jYXRpb246IExvY2F0aW9uO1xyXG4gICAgcHJpdmF0ZSBfaGlzdG9yeTtcclxuICAgIGNvbnN0cnVjdG9yKF9kb2M6IGFueSk7XHJcbiAgICBnZXRCYXNlSHJlZkZyb21ET00oKTogc3RyaW5nO1xyXG4gICAgb25Qb3BTdGF0ZShmbjogTG9jYXRpb25DaGFuZ2VMaXN0ZW5lcik6IHZvaWQ7XHJcbiAgICBvbkhhc2hDaGFuZ2UoZm46IExvY2F0aW9uQ2hhbmdlTGlzdGVuZXIpOiB2b2lkO1xyXG4gICAgZ2V0IGhyZWYoKTogc3RyaW5nO1xyXG4gICAgZ2V0IHByb3RvY29sKCk6IHN0cmluZztcclxuICAgIGdldCBob3N0bmFtZSgpOiBzdHJpbmc7XHJcbiAgICBnZXQgcG9ydCgpOiBzdHJpbmc7XHJcbiAgICBnZXQgcGF0aG5hbWUoKTogc3RyaW5nO1xyXG4gICAgZ2V0IHNlYXJjaCgpOiBzdHJpbmc7XHJcbiAgICBnZXQgaGFzaCgpOiBzdHJpbmc7XHJcbiAgICBzZXQgcGF0aG5hbWUobmV3UGF0aDogc3RyaW5nKTtcclxuICAgIHB1c2hTdGF0ZShzdGF0ZTogYW55LCB0aXRsZTogc3RyaW5nLCB1cmw6IHN0cmluZyk6IHZvaWQ7XHJcbiAgICByZXBsYWNlU3RhdGUoc3RhdGU6IGFueSwgdGl0bGU6IHN0cmluZywgdXJsOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgZm9yd2FyZCgpOiB2b2lkO1xyXG4gICAgYmFjaygpOiB2b2lkO1xyXG4gICAgZ2V0U3RhdGUoKTogdW5rbm93bjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFByb3ZpZGVzIERPTSBvcGVyYXRpb25zIGluIGFuIGVudmlyb25tZW50LWFnbm9zdGljIHdheS5cclxuICpcclxuICogQHNlY3VyaXR5IFRyZWFkIGNhcmVmdWxseSEgSW50ZXJhY3Rpbmcgd2l0aCB0aGUgRE9NIGRpcmVjdGx5IGlzIGRhbmdlcm91cyBhbmRcclxuICogY2FuIGludHJvZHVjZSBYU1Mgcmlza3MuXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyDJtURvbUFkYXB0ZXIge1xyXG4gICAgYWJzdHJhY3QgZ2V0UHJvcGVydHkoZWw6IEVsZW1lbnQsIG5hbWU6IHN0cmluZyk6IGFueTtcclxuICAgIGFic3RyYWN0IGRpc3BhdGNoRXZlbnQoZWw6IGFueSwgZXZ0OiBhbnkpOiBhbnk7XHJcbiAgICBhYnN0cmFjdCBsb2coZXJyb3I6IGFueSk6IGFueTtcclxuICAgIGFic3RyYWN0IGxvZ0dyb3VwKGVycm9yOiBhbnkpOiBhbnk7XHJcbiAgICBhYnN0cmFjdCBsb2dHcm91cEVuZCgpOiBhbnk7XHJcbiAgICBhYnN0cmFjdCByZW1vdmUoZWw6IGFueSk6IE5vZGU7XHJcbiAgICBhYnN0cmFjdCBjcmVhdGVFbGVtZW50KHRhZ05hbWU6IGFueSwgZG9jPzogYW55KTogSFRNTEVsZW1lbnQ7XHJcbiAgICBhYnN0cmFjdCBjcmVhdGVIdG1sRG9jdW1lbnQoKTogSFRNTERvY3VtZW50O1xyXG4gICAgYWJzdHJhY3QgZ2V0RGVmYXVsdERvY3VtZW50KCk6IERvY3VtZW50O1xyXG4gICAgYWJzdHJhY3QgaXNFbGVtZW50Tm9kZShub2RlOiBhbnkpOiBib29sZWFuO1xyXG4gICAgYWJzdHJhY3QgaXNTaGFkb3dSb290KG5vZGU6IGFueSk6IGJvb2xlYW47XHJcbiAgICBhYnN0cmFjdCBvbkFuZENhbmNlbChlbDogYW55LCBldnQ6IGFueSwgbGlzdGVuZXI6IGFueSk6IEZ1bmN0aW9uO1xyXG4gICAgYWJzdHJhY3Qgc3VwcG9ydHNET01FdmVudHMoKTogYm9vbGVhbjtcclxuICAgIGFic3RyYWN0IGdldEdsb2JhbEV2ZW50VGFyZ2V0KGRvYzogRG9jdW1lbnQsIHRhcmdldDogc3RyaW5nKTogYW55O1xyXG4gICAgYWJzdHJhY3QgZ2V0SGlzdG9yeSgpOiBIaXN0b3J5O1xyXG4gICAgYWJzdHJhY3QgZ2V0TG9jYXRpb24oKTogYW55OyAvKiogVGhpcyBpcyB0aGUgYW1iaWVudCBMb2NhdGlvbiBkZWZpbml0aW9uLCBOT1QgTG9jYXRpb24gZnJvbSBAYW5ndWxhci9jb21tb24uICAqL1xyXG4gICAgYWJzdHJhY3QgZ2V0QmFzZUhyZWYoZG9jOiBEb2N1bWVudCk6IHN0cmluZyB8IG51bGw7XHJcbiAgICBhYnN0cmFjdCByZXNldEJhc2VFbGVtZW50KCk6IHZvaWQ7XHJcbiAgICBhYnN0cmFjdCBnZXRVc2VyQWdlbnQoKTogc3RyaW5nO1xyXG4gICAgYWJzdHJhY3QgcGVyZm9ybWFuY2VOb3coKTogbnVtYmVyO1xyXG4gICAgYWJzdHJhY3Qgc3VwcG9ydHNDb29raWVzKCk6IGJvb2xlYW47XHJcbiAgICBhYnN0cmFjdCBnZXRDb29raWUobmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIMm1Z2V0RE9NKCk6IMm1RG9tQWRhcHRlcjtcclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBhbiBlbXB0eSBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgdmlld3BvcnQgc2Nyb2xsZXIuIFRoaXMgd2lsbFxyXG4gKiBsaXZlIGluIEBhbmd1bGFyL2NvbW1vbiBhcyBpdCB3aWxsIGJlIHVzZWQgYnkgYm90aCBwbGF0Zm9ybS1zZXJ2ZXIgYW5kIHBsYXRmb3JtLXdlYndvcmtlci5cclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIMm1TnVsbFZpZXdwb3J0U2Nyb2xsZXIgaW1wbGVtZW50cyBWaWV3cG9ydFNjcm9sbGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogRW1wdHkgaW1wbGVtZW50YXRpb25cclxuICAgICAqL1xyXG4gICAgc2V0T2Zmc2V0KG9mZnNldDogW251bWJlciwgbnVtYmVyXSB8ICgoKSA9PiBbbnVtYmVyLCBudW1iZXJdKSk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIEVtcHR5IGltcGxlbWVudGF0aW9uXHJcbiAgICAgKi9cclxuICAgIGdldFNjcm9sbFBvc2l0aW9uKCk6IFtudW1iZXIsIG51bWJlcl07XHJcbiAgICAvKipcclxuICAgICAqIEVtcHR5IGltcGxlbWVudGF0aW9uXHJcbiAgICAgKi9cclxuICAgIHNjcm9sbFRvUG9zaXRpb24ocG9zaXRpb246IFtudW1iZXIsIG51bWJlcl0pOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBFbXB0eSBpbXBsZW1lbnRhdGlvblxyXG4gICAgICovXHJcbiAgICBzY3JvbGxUb0FuY2hvcihhbmNob3I6IHN0cmluZyk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIEVtcHR5IGltcGxlbWVudGF0aW9uXHJcbiAgICAgKi9cclxuICAgIHNldEhpc3RvcnlTY3JvbGxSZXN0b3JhdGlvbihzY3JvbGxSZXN0b3JhdGlvbjogJ2F1dG8nIHwgJ21hbnVhbCcpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gybVwYXJzZUNvb2tpZVZhbHVlKGNvb2tpZVN0cjogc3RyaW5nLCBuYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsO1xyXG5cclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IMm1UExBVEZPUk1fQlJPV1NFUl9JRCA9IFwiYnJvd3NlclwiO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgybVQTEFURk9STV9TRVJWRVJfSUQgPSBcInNlcnZlclwiO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgybVQTEFURk9STV9XT1JLRVJfQVBQX0lEID0gXCJicm93c2VyV29ya2VyQXBwXCI7XHJcblxyXG5leHBvcnQgZGVjbGFyZSBjb25zdCDJtVBMQVRGT1JNX1dPUktFUl9VSV9JRCA9IFwiYnJvd3NlcldvcmtlclVpXCI7XHJcblxyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtXNldFJvb3REb21BZGFwdGVyKGFkYXB0ZXI6IMm1RG9tQWRhcHRlcik6IHZvaWQ7XHJcblxyXG5leHBvcnQgeyB9XHJcbiJdfQ==