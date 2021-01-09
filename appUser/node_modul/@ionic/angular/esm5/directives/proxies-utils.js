/* eslint-disable */
/* tslint:disable */
import { fromEvent } from 'rxjs';
export var proxyInputs = function (Cmp, inputs) {
    var Prototype = Cmp.prototype;
    inputs.forEach(function (item) {
        Object.defineProperty(Prototype, item, {
            get: function () {
                return this.el[item];
            },
            set: function (val) {
                var _this = this;
                this.z.runOutsideAngular(function () { return (_this.el[item] = val); });
            }
        });
    });
};
export var proxyMethods = function (Cmp, methods) {
    var Prototype = Cmp.prototype;
    methods.forEach(function (methodName) {
        Prototype[methodName] = function () {
            var _this = this;
            var args = arguments;
            return this.z.runOutsideAngular(function () {
                return _this.el[methodName].apply(_this.el, args);
            });
        };
    });
};
export var proxyOutputs = function (instance, el, events) {
    events.forEach(function (eventName) { return instance[eventName] = fromEvent(el, eventName); });
};
export function ProxyCmp(opts) {
    var decorator = function (cls) {
        if (opts.inputs) {
            proxyInputs(cls, opts.inputs);
        }
        if (opts.methods) {
            proxyMethods(cls, opts.methods);
        }
        return cls;
    };
    return decorator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJveGllcy11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25pYy9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9wcm94aWVzLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVqQyxNQUFNLENBQUMsSUFBTSxXQUFXLEdBQUcsVUFBQyxHQUFRLEVBQUUsTUFBZ0I7SUFDcEQsSUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUNoQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtRQUNuQixNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUU7WUFDckMsR0FBRztnQkFDSCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckIsQ0FBQztZQUNELEdBQUcsRUFBSCxVQUFJLEdBQVE7Z0JBQVosaUJBRUM7Z0JBREQsSUFBSSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFNLE9BQUEsQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7WUFDdEQsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLElBQU0sWUFBWSxHQUFHLFVBQUMsR0FBUSxFQUFFLE9BQWlCO0lBQ3RELElBQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFDaEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFVBQVU7UUFDMUIsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHO1lBQUEsaUJBS3ZCO1lBSkMsSUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDaEMsT0FBQSxLQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztZQUF4QyxDQUF3QyxDQUN2QyxDQUFDO1FBQ0osQ0FBQyxDQUFDO0lBQ0YsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsSUFBTSxZQUFZLEdBQUcsVUFBQyxRQUFhLEVBQUUsRUFBTyxFQUFFLE1BQWdCO0lBQ25FLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsU0FBUyxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsRUFBOUMsQ0FBOEMsQ0FBQyxDQUFDO0FBQzlFLENBQUMsQ0FBQTtBQUVELE1BQU0sVUFBVSxRQUFRLENBQUMsSUFBcUM7SUFDNUQsSUFBTSxTQUFTLEdBQUksVUFBUyxHQUFRO1FBQ3BDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLFlBQVksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDWCxDQUFDLENBQUM7SUFDRixPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbi8qIHRzbGludDpkaXNhYmxlICovXG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNvbnN0IHByb3h5SW5wdXRzID0gKENtcDogYW55LCBpbnB1dHM6IHN0cmluZ1tdKSA9PiB7XG4gIGNvbnN0IFByb3RvdHlwZSA9IENtcC5wcm90b3R5cGU7XG4gIGlucHV0cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUHJvdG90eXBlLCBpdGVtLCB7XG4gICAgZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLmVsW2l0ZW1dO1xuICAgIH0sXG4gICAgc2V0KHZhbDogYW55KSB7XG4gICAgdGhpcy56LnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+ICh0aGlzLmVsW2l0ZW1dID0gdmFsKSk7XG4gICAgfVxuICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgcHJveHlNZXRob2RzID0gKENtcDogYW55LCBtZXRob2RzOiBzdHJpbmdbXSkgPT4ge1xuICBjb25zdCBQcm90b3R5cGUgPSBDbXAucHJvdG90eXBlO1xuICBtZXRob2RzLmZvckVhY2gobWV0aG9kTmFtZSA9PiB7XG4gIFByb3RvdHlwZVttZXRob2ROYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiB0aGlzLnoucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT5cbiAgICB0aGlzLmVsW21ldGhvZE5hbWVdLmFwcGx5KHRoaXMuZWwsIGFyZ3MpXG4gICAgKTtcbiAgfTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgcHJveHlPdXRwdXRzID0gKGluc3RhbmNlOiBhbnksIGVsOiBhbnksIGV2ZW50czogc3RyaW5nW10pID0+IHtcbiAgZXZlbnRzLmZvckVhY2goZXZlbnROYW1lID0+IGluc3RhbmNlW2V2ZW50TmFtZV0gPSBmcm9tRXZlbnQoZWwsIGV2ZW50TmFtZSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUHJveHlDbXAob3B0czogeyBpbnB1dHM/OiBhbnk7IG1ldGhvZHM/OiBhbnkgfSkge1xuICBjb25zdCBkZWNvcmF0b3IgPSAgZnVuY3Rpb24oY2xzOiBhbnkpe1xuICBpZiAob3B0cy5pbnB1dHMpIHtcbiAgICBwcm94eUlucHV0cyhjbHMsIG9wdHMuaW5wdXRzKTtcbiAgfVxuICBpZiAob3B0cy5tZXRob2RzKSB7XG4gICAgcHJveHlNZXRob2RzKGNscywgb3B0cy5tZXRob2RzKTtcbiAgfVxuICByZXR1cm4gY2xzO1xuICB9O1xuICByZXR1cm4gZGVjb3JhdG9yO1xufVxuIl19