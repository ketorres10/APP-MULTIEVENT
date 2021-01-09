import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
import * as ɵngcc0 from '@angular/core';
var StatusBar = /** @class */ (function (_super) {
    __extends(StatusBar, _super);
    function StatusBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StatusBar.prototype.overlaysWebView = function (doesOverlay) { return cordova(this, "overlaysWebView", { "sync": true }, arguments); };
    StatusBar.prototype.styleDefault = function () { return cordova(this, "styleDefault", { "sync": true }, arguments); };
    StatusBar.prototype.styleLightContent = function () { return cordova(this, "styleLightContent", { "sync": true }, arguments); };
    StatusBar.prototype.styleBlackTranslucent = function () { return cordova(this, "styleBlackTranslucent", { "sync": true }, arguments); };
    StatusBar.prototype.styleBlackOpaque = function () { return cordova(this, "styleBlackOpaque", { "sync": true }, arguments); };
    StatusBar.prototype.backgroundColorByName = function (colorName) { return cordova(this, "backgroundColorByName", { "sync": true }, arguments); };
    StatusBar.prototype.backgroundColorByHexString = function (hexString) { return cordova(this, "backgroundColorByHexString", { "sync": true }, arguments); };
    StatusBar.prototype.hide = function () { return cordova(this, "hide", { "sync": true }, arguments); };
    StatusBar.prototype.show = function () { return cordova(this, "show", { "sync": true }, arguments); };
    Object.defineProperty(StatusBar.prototype, "isVisible", {
        get: function () { return cordovaPropertyGet(this, "isVisible"); },
        set: function (value) { cordovaPropertySet(this, "isVisible", value); },
        enumerable: true,
        configurable: true
    });
    StatusBar.pluginName = "StatusBar";
    StatusBar.plugin = "cordova-plugin-statusbar";
    StatusBar.pluginRef = "StatusBar";
    StatusBar.repo = "https://github.com/apache/cordova-plugin-statusbar";
    StatusBar.platforms = ["Android", "iOS", "Windows"];
StatusBar.ɵfac = function StatusBar_Factory(t) { return ɵStatusBar_BaseFactory(t || StatusBar); };
StatusBar.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: StatusBar, factory: function (t) { return StatusBar.ɵfac(t); } });
var ɵStatusBar_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(StatusBar);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(StatusBar, [{
        type: Injectable
    }], null, null); })();
    return StatusBar;
}(IonicNativePlugin));
export { StatusBar };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvc3RhdHVzLWJhci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxzRUFBdUQsTUFBTSxvQkFBb0IsQ0FBQzs7QUFDekY7QUFJVSxJQTRCcUIsNkJBQWlCO0FBQUM7QUFFOUI7QUFHVjtBQUFNLElBV2IsbUNBQWUsYUFBQyxXQUFvQjtBQUcyQixJQUsvRCxnQ0FBWTtBQUlaLElBSUEscUNBQWlCO0FBSWhCLElBSUQseUNBQXFCO0FBS2pCLElBR0osb0NBQWdCO0FBSU4sSUFTVix5Q0FBcUIsYUFBQyxTQUFpQjtBQUc4QixJQVNyRSw4Q0FBMEIsYUFBQyxTQUFpQjtBQVM5QyxJQURFLHdCQUFJO0FBUUosSUFBQSx3QkFBSTtBQUVpRSwwQkF0RnJFLGdDQUFTO0FBQUk7QUFHK0M7QUFHVjtBQUEwQjtBQUc5RTtBQUFRO0FBRW1CO0FBR0M7QUFDNUI7QUFPUTtJQTNCSyxTQUFTLHdCQURyQixVQUFVLEVBQUUsUUFDQSxTQUFTOzs7OzswQkFBRTtBQUFDLG9CQWxDekI7QUFBRSxFQWtDNkIsaUJBQWlCO0FBQy9DLFNBRFksU0FBUztBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBTdGF0dXMgQmFyXG4gKiBAZGVzY3JpcHRpb25cbiAqIE1hbmFnZSB0aGUgYXBwZWFyYW5jZSBvZiB0aGUgbmF0aXZlIHN0YXR1cyBiYXIuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1zdGF0dXNiYXJgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbU3RhdHVzQmFyIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLXN0YXR1c2JhcikuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3N0YXR1cy1iYXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0YXR1c0JhcjogU3RhdHVzQmFyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiAvLyBsZXQgc3RhdHVzIGJhciBvdmVybGF5IHdlYnZpZXdcbiAqIHRoaXMuc3RhdHVzQmFyLm92ZXJsYXlzV2ViVmlldyh0cnVlKTtcbiAqXG4gKiAvLyBzZXQgc3RhdHVzIGJhciB0byB3aGl0ZVxuICogdGhpcy5zdGF0dXNCYXIuYmFja2dyb3VuZENvbG9yQnlIZXhTdHJpbmcoJyNmZmZmZmYnKTtcbiAqIGBgYFxuICpcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTdGF0dXNCYXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zdGF0dXNiYXInLFxuICBwbHVnaW5SZWY6ICdTdGF0dXNCYXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1zdGF0dXNiYXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdGF0dXNCYXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBTdGF0dXNCYXIgaXMgY3VycmVudGx5IHZpc2libGUgb3Igbm90LlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIGlzVmlzaWJsZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IHdoZXRoZXIgdGhlIHN0YXR1cyBiYXIgb3ZlcmxheXMgdGhlIG1haW4gYXBwIHZpZXcuIFRoZSBkZWZhdWx0XG4gICAqIGlzIHRydWUuXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZG9lc092ZXJsYXkgIFdoZXRoZXIgdGhlIHN0YXR1cyBiYXIgb3ZlcmxheXMgdGhlIG1haW4gYXBwIHZpZXcuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgb3ZlcmxheXNXZWJWaWV3KGRvZXNPdmVybGF5OiBib29sZWFuKSB7fVxuXG4gIC8qKlxuICAgKiBVc2UgdGhlIGRlZmF1bHQgc3RhdHVzYmFyIChkYXJrIHRleHQsIGZvciBsaWdodCBiYWNrZ3JvdW5kcykuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc3R5bGVEZWZhdWx0KCkge31cblxuICAvKipcbiAgICogVXNlIHRoZSBsaWdodENvbnRlbnQgc3RhdHVzYmFyIChsaWdodCB0ZXh0LCBmb3IgZGFyayBiYWNrZ3JvdW5kcykuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc3R5bGVMaWdodENvbnRlbnQoKSB7fVxuXG4gIC8qKlxuICAgKiBVc2UgdGhlIGJsYWNrVHJhbnNsdWNlbnQgc3RhdHVzYmFyIChsaWdodCB0ZXh0LCBmb3IgZGFyayBiYWNrZ3JvdW5kcykuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc3R5bGVCbGFja1RyYW5zbHVjZW50KCkge31cblxuICAvKipcbiAgICogVXNlIHRoZSBibGFja09wYXF1ZSBzdGF0dXNiYXIgKGxpZ2h0IHRleHQsIGZvciBkYXJrIGJhY2tncm91bmRzKS5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBzdHlsZUJsYWNrT3BhcXVlKCkge31cblxuICAvKipcbiAgICogU2V0IHRoZSBzdGF0dXMgYmFyIHRvIGEgc3BlY2lmaWMgbmFtZWQgY29sb3IuIFZhbGlkIG9wdGlvbnM6XG4gICAqIGJsYWNrLCBkYXJrR3JheSwgbGlnaHRHcmF5LCB3aGl0ZSwgZ3JheSwgcmVkLCBncmVlbiwgYmx1ZSwgY3lhbiwgeWVsbG93LCBtYWdlbnRhLCBvcmFuZ2UsIHB1cnBsZSwgYnJvd24uXG4gICAqXG4gICAqIGlPUyBub3RlOiB5b3UgbXVzdCBjYWxsIFN0YXR1c0Jhci5vdmVybGF5c1dlYlZpZXcoZmFsc2UpIHRvIGVuYWJsZSBjb2xvciBjaGFuZ2luZy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yTmFtZSAgVGhlIG5hbWUgb2YgdGhlIGNvbG9yIChmcm9tIGFib3ZlKVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGJhY2tncm91bmRDb2xvckJ5TmFtZShjb2xvck5hbWU6IHN0cmluZykge31cblxuICAvKipcbiAgICogU2V0IHRoZSBzdGF0dXMgYmFyIHRvIGEgc3BlY2lmaWMgaGV4IGNvbG9yIChDU1Mgc2hvcnRoYW5kIHN1cHBvcnRlZCEpLlxuICAgKlxuICAgKiBpT1Mgbm90ZTogeW91IG11c3QgY2FsbCBTdGF0dXNCYXIub3ZlcmxheXNXZWJWaWV3KGZhbHNlKSB0byBlbmFibGUgY29sb3IgY2hhbmdpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoZXhTdHJpbmcgIFRoZSBoZXggdmFsdWUgb2YgdGhlIGNvbG9yLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGJhY2tncm91bmRDb2xvckJ5SGV4U3RyaW5nKGhleFN0cmluZzogc3RyaW5nKSB7fVxuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBTdGF0dXNCYXJcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBoaWRlKCkge31cblxuICAvKipcbiAgICogU2hvdyB0aGUgU3RhdHVzQmFyXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc2hvdygpIHt9XG59XG4iXX0=