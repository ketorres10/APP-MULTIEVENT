/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(null, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/common/locales/tr", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        if (n === 1)
            return 1;
        return 5;
    }
    exports.default = [
        'tr',
        [['öö', 'ös'], ['ÖÖ', 'ÖS'], u],
        [['ÖÖ', 'ÖS'], u, u],
        [
            ['P', 'P', 'S', 'Ç', 'P', 'C', 'C'], ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
            ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
            ['Pa', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct']
        ],
        u,
        [
            ['O', 'Ş', 'M', 'N', 'M', 'H', 'T', 'A', 'E', 'E', 'K', 'A'],
            ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
            [
                'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül',
                'Ekim', 'Kasım', 'Aralık'
            ]
        ],
        u,
        [['MÖ', 'MS'], u, ['Milattan Önce', 'Milattan Sonra']],
        1,
        [6, 0],
        ['d.MM.y', 'd MMM y', 'd MMMM y', 'd MMMM y EEEE'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
        ['{1} {0}', u, u, u],
        [',', '.', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '%#,##0', '¤#,##0.00', '#E0'],
        'TRY',
        '₺',
        'Türk Lirası',
        { 'AUD': ['AU$', '$'], 'RON': [u, 'L'], 'THB': ['฿'], 'TRY': ['₺'], 'TWD': ['NT$'] },
        'ltr',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy90ci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGtCQUFlO1FBQ2IsSUFBSTtRQUNKLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQjtZQUNFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDdEYsQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUM7WUFDM0UsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7U0FDM0M7UUFDRCxDQUFDO1FBQ0Q7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQzVELENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDcEY7Z0JBQ0UsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPO2dCQUNsRixNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVE7YUFDMUI7U0FDRjtRQUNELENBQUM7UUFDRCxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3RELENBQUM7UUFDRCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDTixDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGVBQWUsQ0FBQztRQUNsRCxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLGVBQWUsQ0FBQztRQUNwRCxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDO1FBQzlELENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDO1FBQzNDLEtBQUs7UUFDTCxHQUFHO1FBQ0gsYUFBYTtRQUNiLEVBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBQztRQUNsRixLQUFLO1FBQ0wsTUFBTTtLQUNQLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vIFRISVMgQ09ERSBJUyBHRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZXG4vLyBTZWUgYW5ndWxhci90b29scy9ndWxwLXRhc2tzL2NsZHIvZXh0cmFjdC5qc1xuXG5jb25zdCB1ID0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBwbHVyYWwobjogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKG4gPT09IDEpIHJldHVybiAxO1xuICByZXR1cm4gNTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW1xuICAndHInLFxuICBbWyfDtsO2JywgJ8O2cyddLCBbJ8OWw5YnLCAnw5ZTJ10sIHVdLFxuICBbWyfDlsOWJywgJ8OWUyddLCB1LCB1XSxcbiAgW1xuICAgIFsnUCcsICdQJywgJ1MnLCAnw4cnLCAnUCcsICdDJywgJ0MnXSwgWydQYXonLCAnUHp0JywgJ1NhbCcsICfDh2FyJywgJ1BlcicsICdDdW0nLCAnQ210J10sXG4gICAgWydQYXphcicsICdQYXphcnRlc2knLCAnU2FsxLEnLCAnw4dhcsWfYW1iYScsICdQZXLFn2VtYmUnLCAnQ3VtYScsICdDdW1hcnRlc2knXSxcbiAgICBbJ1BhJywgJ1B0JywgJ1NhJywgJ8OHYScsICdQZScsICdDdScsICdDdCddXG4gIF0sXG4gIHUsXG4gIFtcbiAgICBbJ08nLCAnxZ4nLCAnTScsICdOJywgJ00nLCAnSCcsICdUJywgJ0EnLCAnRScsICdFJywgJ0snLCAnQSddLFxuICAgIFsnT2NhJywgJ8WedWInLCAnTWFyJywgJ05pcycsICdNYXknLCAnSGF6JywgJ1RlbScsICdBxJ91JywgJ0V5bCcsICdFa2knLCAnS2FzJywgJ0FyYSddLFxuICAgIFtcbiAgICAgICdPY2FrJywgJ8WedWJhdCcsICdNYXJ0JywgJ05pc2FuJywgJ01hecSxcycsICdIYXppcmFuJywgJ1RlbW11eicsICdBxJ91c3RvcycsICdFeWzDvGwnLFxuICAgICAgJ0VraW0nLCAnS2FzxLFtJywgJ0FyYWzEsWsnXG4gICAgXVxuICBdLFxuICB1LFxuICBbWydNw5YnLCAnTVMnXSwgdSwgWydNaWxhdHRhbiDDlm5jZScsICdNaWxhdHRhbiBTb25yYSddXSxcbiAgMSxcbiAgWzYsIDBdLFxuICBbJ2QuTU0ueScsICdkIE1NTSB5JywgJ2QgTU1NTSB5JywgJ2QgTU1NTSB5IEVFRUUnXSxcbiAgWydISDptbScsICdISDptbTpzcycsICdISDptbTpzcyB6JywgJ0hIOm1tOnNzIHp6enonXSxcbiAgWyd7MX0gezB9JywgdSwgdSwgdV0sXG4gIFsnLCcsICcuJywgJzsnLCAnJScsICcrJywgJy0nLCAnRScsICfDlycsICfigLAnLCAn4oieJywgJ05hTicsICc6J10sXG4gIFsnIywjIzAuIyMjJywgJyUjLCMjMCcsICfCpCMsIyMwLjAwJywgJyNFMCddLFxuICAnVFJZJyxcbiAgJ+KCuicsXG4gICdUw7xyayBMaXJhc8SxJyxcbiAgeydBVUQnOiBbJ0FVJCcsICckJ10sICdST04nOiBbdSwgJ0wnXSwgJ1RIQic6IFsn4Li/J10sICdUUlknOiBbJ+KCuiddLCAnVFdEJzogWydOVCQnXX0sXG4gICdsdHInLFxuICBwbHVyYWxcbl07XG4iXX0=