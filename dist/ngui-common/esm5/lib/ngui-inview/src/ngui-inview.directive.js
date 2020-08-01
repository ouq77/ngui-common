/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Inject, Input, Output, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
/**
 * Fires (nguiInview) or (nguiOutview) events dependents on the element is in viewport or not
 */
var NguiInviewDirective = /** @class */ (function () {
    function NguiInviewDirective(element, platformId) {
        this.element = element;
        this.platformId = platformId;
        /**
         * IntersectionObserver options
         */
        this.observerOptions = { threshold: [.1, .2, .3, .4, .5, .6, .7, .8] };
        /**
         * Event that will be fired when in viewport
         */
        this.nguiInview = new EventEmitter();
        /**
         * Event that will be fired when out of  viewport
         */
        this.nguiOutview = new EventEmitter();
    }
    /** Starts IntersectionObserver */
    /**
     * Starts IntersectionObserver
     * @return {?}
     */
    NguiInviewDirective.prototype.ngOnInit = /**
     * Starts IntersectionObserver
     * @return {?}
     */
    function () {
        if (this.options) {
            this.observerOptions = this.options;
        }
        if (isPlatformBrowser(this.platformId)) {
            this.observer = new IntersectionObserver(this.handleIntersect.bind(this), this.observerOptions);
            this.observer.observe(this.element.nativeElement);
        }
    };
    /** Stops IntersectionObserver */
    /**
     * Stops IntersectionObserver
     * @return {?}
     */
    NguiInviewDirective.prototype.ngOnDestroy = /**
     * Stops IntersectionObserver
     * @return {?}
     */
    function () {
        if (isPlatformBrowser(this.platformId) && this.observer) {
            this.observer.disconnect();
        }
    };
    /**
     * Fires (nguiInview) event when this element is in viewport
     *  and fires (nguiOutview) event when this element is not in viewport
     */
    /**
     * Fires (nguiInview) event when this element is in viewport
     *  and fires (nguiOutview) event when this element is not in viewport
     * @param {?} entries
     * @return {?}
     */
    NguiInviewDirective.prototype.handleIntersect = /**
     * Fires (nguiInview) event when this element is in viewport
     *  and fires (nguiOutview) event when this element is not in viewport
     * @param {?} entries
     * @return {?}
     */
    function (entries) {
        var _this = this;
        entries.forEach(function (entry) {
            if (entry['isIntersecting']) {
                _this.nguiInview.emit(entry);
            }
            else {
                _this.nguiOutview.emit(entry);
            }
        });
    };
    NguiInviewDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nguiInview], [nguiOutview]' // tslint:disable-line
                },] }
    ];
    /** @nocollapse */
    NguiInviewDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    NguiInviewDirective.propDecorators = {
        observerOptions: [{ type: Input }],
        options: [{ type: Input }],
        nguiInview: [{ type: Output }],
        nguiOutview: [{ type: Output }]
    };
    return NguiInviewDirective;
}());
export { NguiInviewDirective };
if (false) {
    /** @type {?} */
    NguiInviewDirective.prototype.observer;
    /**
     * IntersectionObserver options
     * @type {?}
     */
    NguiInviewDirective.prototype.observerOptions;
    /**
     * Deprecated config. Use `observerOptions` instead.
     * @deprecated Use `observerOptions` instead.
     * @type {?}
     */
    NguiInviewDirective.prototype.options;
    /**
     * Event that will be fired when in viewport
     * @type {?}
     */
    NguiInviewDirective.prototype.nguiInview;
    /**
     * Event that will be fired when out of  viewport
     * @type {?}
     */
    NguiInviewDirective.prototype.nguiOutview;
    /** @type {?} */
    NguiInviewDirective.prototype.element;
    /** @type {?} */
    NguiInviewDirective.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd1aS1pbnZpZXcuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5ndWkvY29tbW9uLyIsInNvdXJjZXMiOlsibGliL25ndWktaW52aWV3L3NyYy9uZ3VpLWludmlldy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUdMLE1BQU0sRUFDTixXQUFXLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFLbEQ7SUFpQkUsNkJBQ2EsT0FBbUIsRUFDRyxVQUFlO1FBRHJDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDRyxlQUFVLEdBQVYsVUFBVSxDQUFLOzs7O1FBWnpDLG9CQUFlLEdBQTZCLEVBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFDLENBQUM7Ozs7UUFNekYsZUFBVSxHQUE0QyxJQUFJLFlBQVksRUFBRSxDQUFDOzs7O1FBRXpFLGdCQUFXLEdBQTRDLElBQUksWUFBWSxFQUFFLENBQUM7SUFLcEYsQ0FBQztJQUVDLGtDQUFrQzs7Ozs7SUFDcEMsc0NBQVE7Ozs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDckM7UUFFRCxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksb0JBQW9CLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ2hHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDO0lBRUMsaUNBQWlDOzs7OztJQUNuQyx5Q0FBVzs7OztJQUFYO1FBQ0UsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN2RCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVDOzs7T0FHRzs7Ozs7OztJQUNMLDZDQUFlOzs7Ozs7SUFBZixVQUFnQixPQUFPO1FBQXZCLGlCQVFDO1FBUEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQWdDO1lBQy9DLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7Z0JBQzNCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzdCO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzlCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFyREYsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSw2QkFBNkIsQ0FBQyxzQkFBc0I7aUJBQ2pFOzs7O2dCQWhCRyxVQUFVO2dEQWlDTCxNQUFNLFNBQUMsV0FBVzs7O2tDQVp4QixLQUFLOzBCQUdMLEtBQUs7NkJBR0wsTUFBTTs4QkFFTixNQUFNOztJQXVDVCwwQkFBQztDQUFBLEFBdERELElBc0RDO1NBbkRZLG1CQUFtQjs7O0lBQzlCLHVDQUErQjs7Ozs7SUFHL0IsOENBQW1HOzs7Ozs7SUFHbkcsc0NBQXNCOzs7OztJQUd0Qix5Q0FBbUY7Ozs7O0lBRW5GLDBDQUFvRjs7SUFHOUUsc0NBQTBCOztJQUMxQix5Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIERpcmVjdGl2ZSxcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBJbmplY3QsXG4gICAgSW5wdXQsXG4gICAgT25EZXN0cm95LFxuICAgIE9uSW5pdCxcbiAgICBPdXRwdXQsXG4gICAgUExBVEZPUk1fSURcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2lzUGxhdGZvcm1Ccm93c2VyfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vKipcbiAqIEZpcmVzIChuZ3VpSW52aWV3KSBvciAobmd1aU91dHZpZXcpIGV2ZW50cyBkZXBlbmRlbnRzIG9uIHRoZSBlbGVtZW50IGlzIGluIHZpZXdwb3J0IG9yIG5vdFxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tuZ3VpSW52aWV3XSwgW25ndWlPdXR2aWV3XScgLy8gdHNsaW50OmRpc2FibGUtbGluZVxufSlcbmV4cG9ydCBjbGFzcyBOZ3VpSW52aWV3RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG5cbiAgICAvKiogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgb3B0aW9ucyAqL1xuICBASW5wdXQoKSBvYnNlcnZlck9wdGlvbnM6IEludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IHt0aHJlc2hvbGQ6IFsuMSwgLjIsIC4zLCAuNCwgLjUsIC42LCAuNywgLjhdfTtcbiAgICAvKiogRGVwcmVjYXRlZCBjb25maWcuIFVzZSBgb2JzZXJ2ZXJPcHRpb25zYCBpbnN0ZWFkLlxuICAgICAqIEBkZXByZWNhdGVkIFVzZSBgb2JzZXJ2ZXJPcHRpb25zYCBpbnN0ZWFkLiAqL1xuICBASW5wdXQoKSBvcHRpb25zOiBhbnk7XG5cbiAgICAvKiogRXZlbnQgdGhhdCB3aWxsIGJlIGZpcmVkIHdoZW4gaW4gdmlld3BvcnQgKi9cbiAgQE91dHB1dCgpIG5ndWlJbnZpZXc6IEV2ZW50RW1pdHRlcjxJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAvKiogRXZlbnQgdGhhdCB3aWxsIGJlIGZpcmVkIHdoZW4gb3V0IG9mICB2aWV3cG9ydCAqL1xuICBAT3V0cHV0KCkgbmd1aU91dHZpZXc6IEV2ZW50RW1pdHRlcjxJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55KSB7XG4gIH1cblxuICAgIC8qKiBTdGFydHMgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3B0aW9ucykge1xuICAgICAgdGhpcy5vYnNlcnZlck9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodGhpcy5oYW5kbGVJbnRlcnNlY3QuYmluZCh0aGlzKSwgdGhpcy5vYnNlcnZlck9wdGlvbnMpO1xuICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICAgIC8qKiBTdG9wcyBJbnRlcnNlY3Rpb25PYnNlcnZlciAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSAmJiB0aGlzLm9ic2VydmVyKSB7XG4gICAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG4gIH1cblxuICAgIC8qKlxuICAgICAqIEZpcmVzIChuZ3VpSW52aWV3KSBldmVudCB3aGVuIHRoaXMgZWxlbWVudCBpcyBpbiB2aWV3cG9ydFxuICAgICAqICBhbmQgZmlyZXMgKG5ndWlPdXR2aWV3KSBldmVudCB3aGVuIHRoaXMgZWxlbWVudCBpcyBub3QgaW4gdmlld3BvcnRcbiAgICAgKi9cbiAgaGFuZGxlSW50ZXJzZWN0KGVudHJpZXMpOiB2b2lkIHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5OiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5KSA9PiB7XG4gICAgICBpZiAoZW50cnlbJ2lzSW50ZXJzZWN0aW5nJ10pIHtcbiAgICAgICAgdGhpcy5uZ3VpSW52aWV3LmVtaXQoZW50cnkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5uZ3VpT3V0dmlldy5lbWl0KGVudHJ5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19