import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var SplashScreen = /** @class */ (function (_super) {
    __extends(SplashScreen, _super);
    function SplashScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SplashScreen.prototype.show = function () { return cordova(this, "show", { "sync": true }, arguments); };
    SplashScreen.prototype.hide = function () { return cordova(this, "hide", { "sync": true }, arguments); };
    SplashScreen.pluginName = "SplashScreen";
    SplashScreen.plugin = "cordova-plugin-splashscreen";
    SplashScreen.pluginRef = "navigator.splashscreen";
    SplashScreen.repo = "https://github.com/apache/cordova-plugin-splashscreen";
    SplashScreen.platforms = ["Amazon Fire OS", "Android", "iOS", "Windows"];
    SplashScreen = __decorate([
        Injectable()
    ], SplashScreen);
    return SplashScreen;
}(IonicNativePlugin));
export { SplashScreen };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NwbGFzaC1zY3JlZW4vbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBMEJ0QyxnQ0FBaUI7Ozs7SUFPakQsMkJBQUk7SUFRSiwyQkFBSTs7Ozs7O0lBZk8sWUFBWTtRQUR4QixVQUFVLEVBQUU7T0FDQSxZQUFZO3VCQTNCekI7RUEyQmtDLGlCQUFpQjtTQUF0QyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgU3BsYXNoIFNjcmVlblxuICogQGRlc2NyaXB0aW9uIFRoaXMgcGx1Z2luIGRpc3BsYXlzIGFuZCBoaWRlcyBhIHNwbGFzaCBzY3JlZW4gZHVyaW5nIGFwcGxpY2F0aW9uIGxhdW5jaC4gVGhlIG1ldGhvZHMgYmVsb3cgYWxsb3dzIHNob3dpbmcgYW5kIGhpZGluZyB0aGUgc3BsYXNoc2NyZWVuIGFmdGVyIHRoZSBhcHAgaGFzIGxvYWRlZC5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU3BsYXNoU2NyZWVuIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zcGxhc2gtc2NyZWVuL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzcGxhc2hTY3JlZW46IFNwbGFzaFNjcmVlbikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5zcGxhc2hTY3JlZW4uc2hvdygpO1xuICpcbiAqIHRoaXMuc3BsYXNoU2NyZWVuLmhpZGUoKTtcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NwbGFzaFNjcmVlbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXNwbGFzaHNjcmVlbicsXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5zcGxhc2hzY3JlZW4nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1zcGxhc2hzY3JlZW4nLFxuICBwbGF0Zm9ybXM6IFsnQW1hem9uIEZpcmUgT1MnLCAnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTcGxhc2hTY3JlZW4gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTaG93cyB0aGUgc3BsYXNoc2NyZWVuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc2hvdygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEhpZGVzIHRoZSBzcGxhc2hzY3JlZW5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBoaWRlKCk6IHZvaWQge31cbn1cbiJdfQ==