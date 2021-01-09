import * as tslib_1 from "tslib";
import { HostListener } from '@angular/core';
import { raf } from '../../util/util';
export class ValueAccessor {
    constructor(el) {
        this.el = el;
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    writeValue(value) {
        /**
         * TODO for Ionic 6:
         * Change `value == null ? '' : value;`
         * to `value`. This was a fix for IE9, but IE9
         * is no longer supported; however, this change
         * is potentially a breaking change
         */
        this.el.nativeElement.value = this.lastValue = value == null ? '' : value;
        setIonicClasses(this.el);
    }
    handleChangeEvent(el, value) {
        if (el === this.el.nativeElement) {
            if (value !== this.lastValue) {
                this.lastValue = value;
                this.onChange(value);
            }
            setIonicClasses(this.el);
        }
    }
    _handleBlurEvent(el) {
        if (el === this.el.nativeElement) {
            this.onTouched();
            setIonicClasses(this.el);
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.el.nativeElement.disabled = isDisabled;
    }
}
tslib_1.__decorate([
    HostListener('ionBlur', ['$event.target'])
], ValueAccessor.prototype, "_handleBlurEvent", null);
export const setIonicClasses = (element) => {
    raf(() => {
        const input = element.nativeElement;
        const classes = getClasses(input);
        setClasses(input, classes);
        const item = input.closest('ion-item');
        if (item) {
            setClasses(item, classes);
        }
    });
};
const getClasses = (element) => {
    const classList = element.classList;
    const classes = [];
    for (let i = 0; i < classList.length; i++) {
        const item = classList.item(i);
        if (item !== null && startsWith(item, 'ng-')) {
            classes.push(`ion-${item.substr(3)}`);
        }
    }
    return classes;
};
const ɵ0 = getClasses;
const setClasses = (element, classes) => {
    const classList = element.classList;
    [
        'ion-valid',
        'ion-invalid',
        'ion-touched',
        'ion-untouched',
        'ion-dirty',
        'ion-pristine'
    ].forEach(c => classList.remove(c));
    classes.forEach(c => classList.add(c));
};
const ɵ1 = setClasses;
const startsWith = (input, search) => {
    return input.substr(0, search.length) === search;
};
const ɵ2 = startsWith;
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWUtYWNjZXNzb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uaWMvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvY29udHJvbC12YWx1ZS1hY2Nlc3NvcnMvdmFsdWUtYWNjZXNzb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBYyxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHekQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRDLE1BQU0sT0FBTyxhQUFhO0lBTXhCLFlBQXNCLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBSjVCLGFBQVEsR0FBeUIsR0FBRyxFQUFFLEdBQU0sQ0FBQyxDQUFDO1FBQzlDLGNBQVMsR0FBZSxHQUFHLEVBQUUsR0FBTSxDQUFDLENBQUM7SUFHTixDQUFDO0lBRXhDLFVBQVUsQ0FBQyxLQUFVO1FBQ25COzs7Ozs7V0FNRztRQUNILElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzFFLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQWUsRUFBRSxLQUFVO1FBQzNDLElBQUksRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFO1lBQ2hDLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3RCO1lBQ0QsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFHRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVELGdCQUFnQixDQUFDLEVBQXdCO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFjO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFtQjtRQUNsQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzlDLENBQUM7Q0FDRjtBQWxCQztJQURDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQztxREFNMUM7QUFlSCxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsQ0FBQyxPQUFtQixFQUFFLEVBQUU7SUFDckQsR0FBRyxDQUFDLEdBQUcsRUFBRTtRQUNQLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxhQUE0QixDQUFDO1FBQ25ELE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxVQUFVLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRTNCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkMsSUFBSSxJQUFJLEVBQUU7WUFDUixVQUFVLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRixNQUFNLFVBQVUsR0FBRyxDQUFDLE9BQW9CLEVBQUUsRUFBRTtJQUMxQyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQ3BDLE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN6QyxNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQzVDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN2QztLQUNGO0lBQ0QsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyxDQUFDOztBQUVGLE1BQU0sVUFBVSxHQUFHLENBQUMsT0FBb0IsRUFBRSxPQUFpQixFQUFFLEVBQUU7SUFDN0QsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUNwQztRQUNFLFdBQVc7UUFDWCxhQUFhO1FBQ2IsYUFBYTtRQUNiLGVBQWU7UUFDZixXQUFXO1FBQ1gsY0FBYztLQUNmLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXBDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDOztBQUVGLE1BQU0sVUFBVSxHQUFHLENBQUMsS0FBYSxFQUFFLE1BQWMsRUFBVyxFQUFFO0lBQzVELE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLE1BQU0sQ0FBQztBQUNuRCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyByYWYgfSBmcm9tICcuLi8uLi91dGlsL3V0aWwnO1xuXG5leHBvcnQgY2xhc3MgVmFsdWVBY2Nlc3NvciBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICBwcml2YXRlIG9uQ2hhbmdlOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHsvKiovfTtcbiAgcHJpdmF0ZSBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiB7LyoqL307XG4gIHByb3RlY3RlZCBsYXN0VmFsdWU6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgLyoqXG4gICAgICogVE9ETyBmb3IgSW9uaWMgNjpcbiAgICAgKiBDaGFuZ2UgYHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO2BcbiAgICAgKiB0byBgdmFsdWVgLiBUaGlzIHdhcyBhIGZpeCBmb3IgSUU5LCBidXQgSUU5XG4gICAgICogaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZDsgaG93ZXZlciwgdGhpcyBjaGFuZ2VcbiAgICAgKiBpcyBwb3RlbnRpYWxseSBhIGJyZWFraW5nIGNoYW5nZVxuICAgICAqL1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMubGFzdFZhbHVlID0gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG4gICAgc2V0SW9uaWNDbGFzc2VzKHRoaXMuZWwpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlRXZlbnQoZWw6IEhUTUxFbGVtZW50LCB2YWx1ZTogYW55KSB7XG4gICAgaWYgKGVsID09PSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5sYXN0VmFsdWUpIHtcbiAgICAgICAgdGhpcy5sYXN0VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgICBzZXRJb25pY0NsYXNzZXModGhpcy5lbCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW9uQmx1cicsIFsnJGV2ZW50LnRhcmdldCddKVxuICBfaGFuZGxlQmx1ckV2ZW50KGVsOiBhbnkpIHtcbiAgICBpZiAoZWwgPT09IHRoaXMuZWwubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICAgIHNldElvbmljQ2xhc3Nlcyh0aGlzLmVsKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCkge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldElvbmljQ2xhc3NlcyA9IChlbGVtZW50OiBFbGVtZW50UmVmKSA9PiB7XG4gIHJhZigoKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgY2xhc3NlcyA9IGdldENsYXNzZXMoaW5wdXQpO1xuICAgIHNldENsYXNzZXMoaW5wdXQsIGNsYXNzZXMpO1xuXG4gICAgY29uc3QgaXRlbSA9IGlucHV0LmNsb3Nlc3QoJ2lvbi1pdGVtJyk7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIHNldENsYXNzZXMoaXRlbSwgY2xhc3Nlcyk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGdldENsYXNzZXMgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgY29uc3QgY2xhc3NMaXN0ID0gZWxlbWVudC5jbGFzc0xpc3Q7XG4gIGNvbnN0IGNsYXNzZXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGFzc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBpdGVtID0gY2xhc3NMaXN0Lml0ZW0oaSk7XG4gICAgaWYgKGl0ZW0gIT09IG51bGwgJiYgc3RhcnRzV2l0aChpdGVtLCAnbmctJykpIHtcbiAgICAgIGNsYXNzZXMucHVzaChgaW9uLSR7aXRlbS5zdWJzdHIoMyl9YCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBjbGFzc2VzO1xufTtcblxuY29uc3Qgc2V0Q2xhc3NlcyA9IChlbGVtZW50OiBIVE1MRWxlbWVudCwgY2xhc3Nlczogc3RyaW5nW10pID0+IHtcbiAgY29uc3QgY2xhc3NMaXN0ID0gZWxlbWVudC5jbGFzc0xpc3Q7XG4gIFtcbiAgICAnaW9uLXZhbGlkJyxcbiAgICAnaW9uLWludmFsaWQnLFxuICAgICdpb24tdG91Y2hlZCcsXG4gICAgJ2lvbi11bnRvdWNoZWQnLFxuICAgICdpb24tZGlydHknLFxuICAgICdpb24tcHJpc3RpbmUnXG4gIF0uZm9yRWFjaChjID0+IGNsYXNzTGlzdC5yZW1vdmUoYykpO1xuXG4gIGNsYXNzZXMuZm9yRWFjaChjID0+IGNsYXNzTGlzdC5hZGQoYykpO1xufTtcblxuY29uc3Qgc3RhcnRzV2l0aCA9IChpbnB1dDogc3RyaW5nLCBzZWFyY2g6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gaW5wdXQuc3Vic3RyKDAsIHNlYXJjaC5sZW5ndGgpID09PSBzZWFyY2g7XG59O1xuIl19