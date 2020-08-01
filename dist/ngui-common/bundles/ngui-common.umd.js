(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@ngui/common', ['exports', 'rxjs', '@angular/common', '@angular/core'], factory) :
    (factory((global.ngui = global.ngui || {}, global.ngui.common = {}),global.rxjs,global.ng.common,global.ng.core));
}(this, (function (exports,rxjs,common,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * An element that listens to viewport positioning and fires inView and notInview events
     * ### example
     * ```ts
     * <ngui-inview [observerOptions]="myObserverOptions" (inview)="doA()" (notInview)="doB()">
     *   <img *ngIf src="https://picsum.photos/800/300?image=1>
     * </ngui-inview>
     * ```
     */
    var NguiInviewComponent = /** @class */ (function () {
        function NguiInviewComponent(element, platformId) {
            this.element = element;
            this.platformId = platformId;
            /**
             * IntersectionObserver options
             */
            this.observerOptions = { threshold: [.1, .2, .3, .4, .5, .6, .7, .8] };
            /**
             * Controls whether blur effect is applied to a component with less than 80% intersection ratio.
             * Only applies when there are no "inview" event handlers defined.
             *
             */
            this.blurEnabled = true;
            this.inview = new core.EventEmitter();
            this.notInview = new core.EventEmitter();
            /**
             * indicates that this element is in viewport
             */
            this.isInview = false;
            /**
             * indicates that this element is 80% in viewport. Used by the default callback
             */
            this.once80PctVisible = false;
        }
        /** Starts IntersectionObserver */
        /**
         * Starts IntersectionObserver
         * @return {?}
         */
        NguiInviewComponent.prototype.ngOnInit = /**
         * Starts IntersectionObserver
         * @return {?}
         */
            function () {
                if (this.options) {
                    this.observerOptions = this.options;
                }
                if (common.isPlatformBrowser(this.platformId)) {
                    this.observer = new IntersectionObserver(this.handleIntersect.bind(this), this.observerOptions);
                    this.observer.observe(this.element.nativeElement);
                }
            };
        /** stop IntersectionObserver */
        /**
         * stop IntersectionObserver
         * @return {?}
         */
        NguiInviewComponent.prototype.ngOnDestroy = /**
         * stop IntersectionObserver
         * @return {?}
         */
            function () {
                this.observer.disconnect();
            };
        /** fires (inview) and (notInview) events when this component is visible or not visible  */
        /**
         * fires (inview) and (notInview) events when this component is visible or not visible
         * @param {?} entries
         * @return {?}
         */
        NguiInviewComponent.prototype.handleIntersect = /**
         * fires (inview) and (notInview) events when this component is visible or not visible
         * @param {?} entries
         * @return {?}
         */
            function (entries) {
                var _this = this;
                entries.forEach(function (entry) {
                    if (entry['isIntersecting']) {
                        _this.isInview = true;
                        _this.defaultInviewHandler(entry);
                        _this.inview.emit(entry);
                    }
                    else {
                        _this.notInview.emit(entry);
                    }
                });
            };
        /**
         * default intersection handler, which sets blur dependes on intersection ratio
         * this won't be invoked if user provides any (inview) event. e.g. (inview)="something()"
         */
        /**
         * default intersection handler, which sets blur dependes on intersection ratio
         * this won't be invoked if user provides any (inview) event. e.g. (inview)="something()"
         * @param {?} entry
         * @return {?}
         */
        NguiInviewComponent.prototype.defaultInviewHandler = /**
         * default intersection handler, which sets blur dependes on intersection ratio
         * this won't be invoked if user provides any (inview) event. e.g. (inview)="something()"
         * @param {?} entry
         * @return {?}
         */
            function (entry) {
                if (!this.blurEnabled || this.once80PctVisible || this.inview.observers.length) {
                    return;
                }
                if (entry.intersectionRatio < 0.8) {
                    /** @type {?} */
                    var opacity = entry.intersectionRatio * (1 / 0.8);
                    /** @type {?} */
                    var blur_1 = 20 - Math.floor(entry.intersectionRatio * 10) * 4;
                    /** @type {?} */
                    var filter = "blur(" + blur_1 + "px)";
                    Object.assign(entry.target.style, { opacity: opacity, filter: filter });
                }
                else {
                    entry.target.style.opacity = 1;
                    entry.target.style.filter = 'unset';
                    this.once80PctVisible = true;
                }
            };
        NguiInviewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngui-inview',
                        template: "\n        <ng-container *ngIf=\"isInview\" [ngTemplateOutlet]=\"template\">\n        </ng-container>\n    ",
                        styles: [':host {display: block;}']
                    }] }
        ];
        /** @nocollapse */
        NguiInviewComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
            ];
        };
        NguiInviewComponent.propDecorators = {
            template: [{ type: core.ContentChild, args: [core.TemplateRef,] }],
            observerOptions: [{ type: core.Input }],
            options: [{ type: core.Input }],
            blurEnabled: [{ type: core.Input }],
            inview: [{ type: core.Output }],
            notInview: [{ type: core.Output }]
        };
        return NguiInviewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
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
            this.nguiInview = new core.EventEmitter();
            /**
             * Event that will be fired when out of  viewport
             */
            this.nguiOutview = new core.EventEmitter();
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
                if (common.isPlatformBrowser(this.platformId)) {
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
                if (common.isPlatformBrowser(this.platformId) && this.observer) {
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
            { type: core.Directive, args: [{
                        selector: '[nguiInview], [nguiOutview]' // tslint:disable-line
                    },] }
        ];
        /** @nocollapse */
        NguiInviewDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
            ];
        };
        NguiInviewDirective.propDecorators = {
            observerOptions: [{ type: core.Input }],
            options: [{ type: core.Input }],
            nguiInview: [{ type: core.Output }],
            nguiOutview: [{ type: core.Output }]
        };
        return NguiInviewDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var NguiInviewModule = /** @class */ (function () {
        function NguiInviewModule() {
        }
        NguiInviewModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            NguiInviewComponent,
                            NguiInviewDirective
                        ],
                        exports: [
                            NguiInviewComponent,
                            NguiInviewDirective
                        ]
                    },] }
        ];
        return NguiInviewModule;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * fire the given event with options on the element
     * \@example
     * fireEvent(el, 'click');
     * fireEvent(el, 'keypress', {key: 'Enter'});
     * @param {?} el
     * @param {?} type
     * @param {?=} options
     * @return {?}
     */
    function fireEvent(el, type, options) {
        if (options === void 0) {
            options = {};
        }
        /** @type {?} */
        var event;
        if (type === 'click' || type.match(/^mouse/)) {
            event = new MouseEvent(type, options);
        }
        else if (type.match(/^key/)) {
            event = new KeyboardEvent(type, options);
        }
        else if (type.match(/^touch/)) {
            event = new TouchEvent(type, options);
        }
        return el.dispatchEvent(event);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * Provide service to add or remove component dynamically
     */
    var DynamicComponentService = /** @class */ (function () {
        function DynamicComponentService(factoryResolver) {
            this.factoryResolver = factoryResolver;
        }
        /**
         * returns component reference
         * The reason to seperate `createCompnent` and `insertComponent` is
         * to allow some actions before we insert into a hostView.
         * e.g styling, setting attributes, etc
         */
        /**
         * returns component reference
         * The reason to seperate `createCompnent` and `insertComponent` is
         * to allow some actions before we insert into a hostView.
         * e.g styling, setting attributes, etc
         * @param {?} component
         * @param {?=} into
         * @return {?}
         */
        DynamicComponentService.prototype.createComponent = /**
         * returns component reference
         * The reason to seperate `createCompnent` and `insertComponent` is
         * to allow some actions before we insert into a hostView.
         * e.g styling, setting attributes, etc
         * @param {?} component
         * @param {?=} into
         * @return {?}
         */
            function (component, into) {
                this.rootViewContainer = into || this.rootViewContainer;
                /** @type {?} */
                var factory = this.factoryResolver.resolveComponentFactory(component);
                return factory.create(this.rootViewContainer.parentInjector);
            };
        /**
         * insert component
         */
        /**
         * insert component
         * @param {?} componentRef
         * @return {?}
         */
        DynamicComponentService.prototype.insertComponent = /**
         * insert component
         * @param {?} componentRef
         * @return {?}
         */
            function (componentRef) {
                /** @type {?} */
                var compId = "ngui-dyn-" + (Math.floor(Math.random() * Math.pow(10, 7)) + Math.pow(10, 6));
                componentRef.location.nativeElement.setAttribute('id', compId);
                componentRef.instance.id = compId;
                this.rootViewContainer.insert(componentRef.hostView);
                return componentRef.instance;
            };
        DynamicComponentService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        DynamicComponentService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [core.ComponentFactoryResolver,] }] }
            ];
        };
        return DynamicComponentService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * A block of component that listens to inView and outView events,
     * so that it empties contents when out of view after backup items
     * and restores the contents when in view
     *
     * ### example
     * ```ts
     * <ngui-inview-page [items]="items">
     *   <ng-template let-items="items">
     *     <div *ngIf="items else noItems">
     *       <li *ngFor="let num of items; trackBy: num">row number: {{ num }}</li>
     *     </div>
     *   </ng-template>
     * </ngui-inview-page>
     * ```
     */
    var NguiInviewPageComponent = /** @class */ (function () {
        function NguiInviewPageComponent(element, renderer, cdRef) {
            this.element = element;
            this.renderer = renderer;
            this.cdRef = cdRef;
            /**
             * Indicates that the page of out of viewport
             */
            this.outView = false;
            /**
             * The copy of items. This is set when this element is out of viewport
             */
            this.itemsBackup = [];
        }
        /**
         * Restore items when in viewport, so that elements are rendered
         */
        /**
         * Restore items when in viewport, so that elements are rendered
         * @return {?}
         */
        NguiInviewPageComponent.prototype.restoreItems = /**
         * Restore items when in viewport, so that elements are rendered
         * @return {?}
         */
            function () {
                if (this.outView) {
                    this.outView = false;
                    this.items = Array.from(this.itemsBackup || []);
                    this.itemsBackup = undefined;
                    this.renderer.setStyle(this.contentsEl, 'height', undefined);
                    this.cdRef.detectChanges();
                }
            };
        /**
         * @return {?}
         */
        NguiInviewPageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.contentsEl =
                    this.element.nativeElement.querySelector('.inview-page.contents');
            };
        /**
         * @return {?}
         */
        NguiInviewPageComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                console.log('NguiInviewPageComponent.ngOnDestroy() is called');
                this.destroyed = true;
            };
        /**
         * Empty items when not in viewport, so that elements are not rendered
         */
        /**
         * Empty items when not in viewport, so that elements are not rendered
         * @return {?}
         */
        NguiInviewPageComponent.prototype.emptyItems = /**
         * Empty items when not in viewport, so that elements are not rendered
         * @return {?}
         */
            function () {
                if (this.items && this.contentsEl && !this.outView) {
                    // set height before emptying contents
                    /** @type {?} */
                    var height = this.element.nativeElement.getBoundingClientRect().height;
                    this.renderer.setStyle(this.contentsEl, 'height', height + "px");
                    this.outView = true;
                    this.itemsBackup = Array.from(this.items || []);
                    this.items = undefined;
                    if (!this.destroyed) {
                        this.cdRef.detectChanges();
                    }
                }
            };
        /**
         * @param {?} items
         * @return {?}
         */
        NguiInviewPageComponent.prototype.setItems = /**
         * @param {?} items
         * @return {?}
         */
            function (items) {
                if (!this.destroyed) {
                    console.log('NguiInviewPageComponent.setItems() is called with', items);
                    this.items = items;
                    this.cdRef.detectChanges();
                }
            };
        NguiInviewPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngui-inview-page',
                        template: "\n    <div class=\"inview-page contents\"\n      (nguiInview)=\"restoreItems()\"\n      (nguiOutview)=\"emptyItems()\">\n      <!-- add blank ngui-list-item by condition  -->\n      <!-- no match found ngui-list-item by condition -->\n      <ng-container\n        [ngTemplateOutlet]=\"template||defaultTemplate\"\n        [ngTemplateOutletContext]=\"{items: items, outView: outView}\">\n      </ng-container>\n      <div *ngIf=\"outView\">{{ itemsBackup.length }} items hidden</div>\n    </div>\n\n    <ng-template #defaultTemplate>\n      <div *ngIf=\"!items\"> Error: requires [items] </div>\n      <div *ngIf=\"!template\"> Error: requires &lt;ng-template></div>\n    </ng-template>\n  ",
                        styles: ["\n    :host {display: block}\n  "]
                    }] }
        ];
        /** @nocollapse */
        NguiInviewPageComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: core.ChangeDetectorRef }
            ];
        };
        NguiInviewPageComponent.propDecorators = {
            template: [{ type: core.ContentChild, args: [core.TemplateRef,] }],
            items: [{ type: core.Input }]
        };
        return NguiInviewPageComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * Virtual List
     *
     * The `<ngui-inview ..>` inserts <ngui-inview-page> into
     * `<div #pages>` when it is in viewport
     * When it's inserted, it will be pushed down, which makes it out of viewport.
     * User scrolls down to see the bottom of the list,
     * then it will insert another `<ngui-inview-page>` again.
     *
     * <ngui-inview-page> listens to (nguiInview) and (nguiOutview) events,
     * when <ngui-inview-page> is out of view port, it empties out the contents.
     * and it restores back the contents when it is in viewport again.
     *
     * ### example
     * ```ts
     * <ngui-virtual-list (bottomInview)="loadItems($event)">
     *   <ng-template let-items="items">
     *     <div *ngIf="!items">Loading</div>
     *     <li *ngFor="let num of items; trackBy: num">row number: {{ num }}</li>
     *   </ng-template>
     * </ngui-virtual-list>
     * ```
     */
    var NguiVirtualListComponent = /** @class */ (function () {
        function NguiVirtualListComponent(renderer, element, dynamicComponentService, cdr) {
            this.renderer = renderer;
            this.element = element;
            this.dynamicComponentService = dynamicComponentService;
            this.cdr = cdr;
            /**
             * Fired when child `<ngui-list-item>` is selected
             */
            this.selected = new core.EventEmitter();
            /**
             * Fired when `ESC` key is pressed from `<ngui-list-item>`
             */
            this.escaped = new core.EventEmitter();
            /**
             * Event fired when bottom of the virtual list is in view
             * The handler of this event must call `$event.addItems(items: Array<any>)` to fill contents
             * If not, only the first page is loaded, and rest of the pages won't be loaded;
             *
             * ### example
             * ```ts
             * <ngui-virtual-list (bottomInview)="loadItems($event)">
             *   <ng-template let-items="items">
             *     <div *ngIf="items else noItems">
             *        <li *ngFor="let num of items; trackBy: num">row number: {{ num }}</li>
             *     </div>
             *     <ng-template #noItems>Loading</ng-template>
             *   </ng-template>
             * </ngui-virtual-list>
             * ```
             */
            this.bottomInview = new core.EventEmitter();
            this._focused = false;
            this.inviewPages = [];
        }
        /** Check if necessary input and output is provided */
        /**
         * Check if necessary input and output is provided
         * @return {?}
         */
        NguiVirtualListComponent.prototype.ngAfterViewInit = /**
         * Check if necessary input and output is provided
         * @return {?}
         */
            function () {
                if (!this.template || !this.bottomInview.observers.length) {
                    console.error('<ngui-virtual-list> requires [template] and {bottomInview)');
                }
            };
        /**
         * When the bottom is inview port, this function is called
         * It will insert a dynamicall created NguiInviewPageComponent with the given template.
         * It will also fires (bottomInview) event, so that user can fill up items for the page.
         */
        /**
         * When the bottom is inview port, this function is called
         * It will insert a dynamicall created NguiInviewPageComponent with the given template.
         * It will also fires (bottomInview) event, so that user can fill up items for the page.
         * @return {?}
         */
        NguiVirtualListComponent.prototype.addAnInviewPageToPages = /**
         * When the bottom is inview port, this function is called
         * It will insert a dynamicall created NguiInviewPageComponent with the given template.
         * It will also fires (bottomInview) event, so that user can fill up items for the page.
         * @return {?}
         */
            function () {
                if (!this.isListLoading) {
                    this.isListLoading = true;
                    this.inviewPage =
                        this.dynamicComponentService.createComponent(NguiInviewPageComponent, this.pagesRef);
                    this.dynamicComponentService.insertComponent(this.inviewPage);
                    this.inviewPage.instance.template = this.template;
                    this.inviewPages.push(this.inviewPage);
                    this.bottomInview.emit(this); // fire event, so that user can load items
                }
                else {
                    console.log('Already a page being inserted, skipping adding a page');
                }
            };
        // set items of NguiInviewPageComponent
        // set items of NguiInviewPageComponent
        /**
         * @param {?} items
         * @return {?}
         */
        NguiVirtualListComponent.prototype.addList =
            // set items of NguiInviewPageComponent
            /**
             * @param {?} items
             * @return {?}
             */
            function (items) {
                this.isListLoading = false;
                console.log('>>>>>> NguiVirtualListComponent.addList() is called()');
                this.inviewPage.instance.setItems(items);
            };
        NguiVirtualListComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngui-virtual-list',
                        template: "\n    <div class=\"ngui-virtual-list\"\n      (focus)=\"_focused = true\"\n      (click)=\"_focused = true\">\n      <!-- hold multiple <ngui-inview-page> -->\n      <div #pages></div>\n      <!-- insert <ngui-inview-page> into #pages -->\n      <ngui-inview (inview)=\"addAnInviewPageToPages()\"></ngui-inview>\n    </div>\n  ",
                        styles: ["\n    :host {display: block}\n  "]
                    }] }
        ];
        /** @nocollapse */
        NguiVirtualListComponent.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: core.ElementRef },
                { type: DynamicComponentService },
                { type: core.ChangeDetectorRef }
            ];
        };
        NguiVirtualListComponent.propDecorators = {
            pagesRef: [{ type: core.ViewChild, args: ['pages', { read: core.ViewContainerRef },] }],
            template: [{ type: core.ContentChild, args: [core.TemplateRef,] }],
            selected: [{ type: core.Output }],
            escaped: [{ type: core.Output }],
            bottomInview: [{ type: core.Output }]
        };
        return NguiVirtualListComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var NoMatchFound = /** @class */ (function () {
        function NoMatchFound() {
            this.html = 'No Match Found';
        }
        return NoMatchFound;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var NoneSelect = /** @class */ (function () {
        function NoneSelect() {
            this.html = 'Select';
        }
        return NoneSelect;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var NguiAutocompleteComponent = /** @class */ (function (_super) {
        __extends(NguiAutocompleteComponent, _super);
        function NguiAutocompleteComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // input tag id
            _this.minInputChars = 1;
            _this.blankOption = 'Select One';
            _this.noMatchItem = 'No Match Found';
            _this._focused = { input: false, listItem: false };
            return _this;
        }
        Object.defineProperty(NguiAutocompleteComponent.prototype, "isReady", {
            /**
             * returns autocomplete display condition
             * autocompolete list is only visible
             *   - when input element is focused or list element is focused
             *   - when input value has enought characters
             *   - and user just did not selected or escaped
             */
            get: /**
             * returns autocomplete display condition
             * autocompolete list is only visible
             *   - when input element is focused or list element is focused
             *   - when input value has enought characters
             *   - and user just did not selected or escaped
             * @return {?}
             */ function () {
                /** @type {?} */
                var selectedOrEscaped = this._selectedFromList || this._escapedFromList;
                /** @type {?} */
                var focused = this._focused.input || this._focused.listItem;
                /** @type {?} */
                var minChars = this.inputEl.value.length >= this.minInputChars;
                return (!selectedOrEscaped && focused && minChars);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NguiAutocompleteComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.inputEl = ( /** @type {?} */(document.querySelector('#' + this.for))); // tslint:disable-line
                this.positionThisUnderInputEl();
                rxjs.fromEvent(this.inputEl, 'keyup').subscribe(this.onInputElKeyup.bind(this));
                this.inputEl.addEventListener('focus', this.onInputElFocused.bind(this));
                this.inputEl.addEventListener('blur', this.onInputElBlurred.bind(this));
                this.selected.subscribe(this.onSelected.bind(this));
                this.escaped.subscribe(this.onEscaped.bind(this));
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NguiAutocompleteComponent.prototype.onSelected = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._selectedFromList = true;
                this.inputEl.focus();
                this._lastSelected = value;
                this.cdr.detectChanges(); // for ChangeDetectionStrategy.OnPush
                console.log('NguiAutoCompleteComponent.onSelected() is called', value);
            };
        /**
         * @return {?}
         */
        NguiAutocompleteComponent.prototype.onEscaped = /**
         * @return {?}
         */
            function () {
                this._escapedFromList = true;
                this.inputEl.focus();
                if (!this._lastSelected) {
                    this.inputEl.value = this._orgInputValue;
                }
                this.cdr.detectChanges(); // for ChangeDetectionStrategy.OnPush
                console.log('NguiAutoCompleteComponent.onEscaped() is called');
            };
        /**
         * @param {?} event
         * @return {?}
         */
        NguiAutocompleteComponent.prototype.onInputElFocused = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                console.log('NguiAutoCompleteComponent.onInputElFocused() is called', event);
                this.isListLoading = false;
                if (typeof this._orgInputValue === 'undefined') {
                    this._orgInputValue = this.inputEl.value;
                }
                this._prevInputValue = this.inputEl.value;
                this.setFocused('input', true);
            };
        /**
         * @return {?}
         */
        NguiAutocompleteComponent.prototype.onInputElBlurred = /**
         * @return {?}
         */
            function () {
                this.setFocused('input', false);
            };
        /**
         * @return {?}
         */
        NguiAutocompleteComponent.prototype.clearList = /**
         * @return {?}
         */
            function () {
                this.inviewPages.forEach(function (compRef) {
                    compRef.destroy();
                });
                this.inviewPages = [];
            };
        /**
         * @param {?} event
         * @return {?}
         */
        NguiAutocompleteComponent.prototype.onInputElKeyup = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                console.log('NguiAutoCompleteComponent.onInputKeyup() is called', event.key);
                /** @type {?} */
                var firstList = this.element.nativeElement.querySelector('ngui-list-item');
                if (event.key === 'Enter' || event.key === 'Escape') {
                    if (firstList) {
                        fireEvent(firstList, 'keyup', { key: event.key });
                    }
                    else {
                        this.onEscaped();
                    }
                }
                else if ((event.key === 'ArrowDown' || event.key === 'ArrowRight') && firstList) {
                    firstList.focus();
                }
                else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') ;
                else if (this.inputEl.value.length >= this.minInputChars) {
                    this._selectedFromList = false;
                    this._escapedFromList = false;
                    this.addAutocompleteList();
                }
            };
        /** Complete the first page of autocomplete */
        /**
         * Complete the first page of autocomplete
         * @return {?}
         */
        NguiAutocompleteComponent.prototype.addAutocompleteList = /**
         * Complete the first page of autocomplete
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.isReady) {
                    clearTimeout(this._acTimer);
                    this._acTimer = setTimeout(function () {
                        _this.isListLoading = false; // ???????/
                        _this._prevInputValue = _this.inputEl.value;
                        _this._escapedFromList = false;
                        _this._selectedFromList = false;
                        _this.clearList();
                        _this.addAnInviewPageToPages();
                    }, 200);
                }
            };
        /** Complete after the first page of autocomplete when it scrolls to the bottom */
        /**
         * Complete after the first page of autocomplete when it scrolls to the bottom
         * @return {?}
         */
        NguiAutocompleteComponent.prototype.addMorePages = /**
         * Complete after the first page of autocomplete when it scrolls to the bottom
         * @return {?}
         */
            function () {
                if (this.inviewPages.length) {
                    this.addAnInviewPageToPages();
                }
            };
        /**
         * @param {?} elType
         * @param {?} val
         * @return {?}
         */
        NguiAutocompleteComponent.prototype.setFocused = /**
         * @param {?} elType
         * @param {?} val
         * @return {?}
         */
            function (elType, val) {
                var _this = this;
                if (val) {
                    clearTimeout(this._focusTimer);
                    this._focused = { input: false, listItem: false };
                    this._focused[elType] = true;
                }
                else {
                    this._focusTimer = setTimeout(function () {
                        _this._focused[elType] = false;
                        _this.cdr.detectChanges(); // for ChangeDetectionStrategy.OnPush
                    }, 100);
                }
            };
        /**
         * @return {?}
         */
        NguiAutocompleteComponent.prototype.positionThisUnderInputEl = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var thisEl = this.element.nativeElement;
                /** @type {?} */
                var thisInputElBCR = this.inputEl.getBoundingClientRect();
                /** @type {?} */
                var top = thisInputElBCR.top + thisInputElBCR.height + window.scrollY;
                this.renderer.setStyle(thisEl, 'left', thisInputElBCR.left + "px");
                this.renderer.setStyle(thisEl, 'top', top + "px");
                this.renderer.setStyle(thisEl, 'minWidth', thisInputElBCR.width + "px");
            };
        // set items of NguiInviewPageComponent
        // set items of NguiInviewPageComponent
        /**
         * @param {?} items
         * @return {?}
         */
        NguiAutocompleteComponent.prototype.addList =
            // set items of NguiInviewPageComponent
            /**
             * @param {?} items
             * @return {?}
             */
            function (items) {
                console.log('>>>>>> NguiAutocompleteComponent.addList() is called()');
                this.isListLoading = false;
                // TODO: ........ for 1st page only, show no match found or blank option
                /** @type {?} */
                var noMatchItem;
                /** @type {?} */
                var blankItem = {};
                if (this.inviewPages.length === 1) {
                    if (this.noMatchItem && (!items || items.length === 0)) { // add no match item
                        noMatchItem = new NoMatchFound();
                        blankItem.html = this.noMatchItem;
                    }
                    else if (this.blankOption) {
                        blankItem = new NoneSelect();
                        blankItem.html = this.blankOption;
                    }
                }
                /** @type {?} */
                var allItems = [].concat(noMatchItem, blankItem, items).filter(function (x) { return x; });
                this.inviewPage.instance.setItems(allItems);
                this.cdr.detectChanges();
            };
        NguiAutocompleteComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngui-autocomplete',
                        template: "\n    <div *ngIf=\"isReady\" class=\"ngui-autocomplete\">\n      <div #pages></div>\n      <ngui-inview (inview)=\"addMorePages()\"></ngui-inview>\n    </div>\n  ",
                        styles: ["\n    :host {position: absolute; background-color: #fff; max-height: 300px; overflow: auto}\n    .ngui-autocomplete { border: 1px solid #ccc; padding: 4px }\n  "]
                    }] }
        ];
        NguiAutocompleteComponent.propDecorators = {
            for: [{ type: core.Input }],
            minInputChars: [{ type: core.Input }],
            blankOption: [{ type: core.Input }],
            noMatchItem: [{ type: core.Input }],
            template: [{ type: core.ContentChild, args: [core.TemplateRef,] }]
        };
        return NguiAutocompleteComponent;
    }(NguiVirtualListComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var NguiListDirective = /** @class */ (function () {
        function NguiListDirective(element) {
            this.element = element;
            /**
             * Fired when child `<ngui-list-item>` is selected
             */
            this.selected = new core.EventEmitter();
            /**
             * Fired when `ESC` key is pressed from `<ngui-list-item>`
             */
            this.escaped = new core.EventEmitter();
        }
        NguiListDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ngui-list' // tslint:disable-line
                    },] }
        ];
        /** @nocollapse */
        NguiListDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        NguiListDirective.propDecorators = {
            selected: [{ type: core.Output }],
            escaped: [{ type: core.Output }]
        };
        return NguiListDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    // tabindex, keydown, keyup(ENTER, ESC), click
    var NguiListItemDirective = /** @class */ (function () {
        function NguiListItemDirective(el, renderer, viewContainer, listDirective, virtualListComponent, autocompleteComponent) {
            this.el = el;
            this.renderer = renderer;
            this.viewContainer = viewContainer;
            this.listDirective = listDirective;
            this.virtualListComponent = virtualListComponent;
            this.autocompleteComponent = autocompleteComponent;
        }
        /**
         * @return {?}
         */
        NguiListItemDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.renderer.setAttribute(this.el.nativeElement, 'tabindex', '0');
                this.parentListComp = this.listDirective || this.virtualListComponent || this.autocompleteComponent;
                if (!this.parentListComp) {
                    throw Error('ngui-list-item requires parent of ngui-list, ngui-virtual-list, or ngui-autocomplete.');
                }
                if ((this.object instanceof NoneSelect) || (this.object instanceof NoMatchFound)) {
                    this.viewContainer.clear();
                    this.el.nativeElement.innerHTML = this.object.html;
                }
            };
        // handles keyboard up, down, left, right
        // handles keyboard up, down, left, right
        /**
         * @param {?} event
         * @return {?}
         */
        NguiListItemDirective.prototype.keydown =
            // handles keyboard up, down, left, right
            /**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                /** @type {?} */
                var thisListItem = this.el.nativeElement;
                /** @type {?} */
                var keyCode = event.which || event.keyCode;
                /** @type {?} */
                var parentListEl = this.parentListComp.element.nativeElement;
                /** @type {?} */
                var listItems = Array.from(parentListEl.querySelectorAll('ngui-list-item'));
                /** @type {?} */
                var listItemNdx = listItems.indexOf(thisListItem);
                /** @type {?} */
                var nextListItem = listItems[listItemNdx + 1] || listItems[0];
                /** @type {?} */
                var prevListItem = listItems[listItemNdx - 1] || listItems[listItems.length - 1];
                switch (keyCode) {
                    case 37:
                    case 38: // up arrow, left arrow
                        prevListItem.focus();
                        break;
                    case 39:
                    case 40: // down arrow, right arrow
                        nextListItem.focus();
                        break;
                    default:
                        break;
                }
            };
        // handles keyboard enter(13), esc(27)
        // handles keyboard enter(13), esc(27)
        /**
         * @param {?} event
         * @return {?}
         */
        NguiListItemDirective.prototype.keyup =
            // handles keyboard enter(13), esc(27)
            /**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                switch (event.key) {
                    case 'Enter':
                        this.parentListComp.selected.emit(this.object);
                        break;
                    case 'Escape':
                        this.parentListComp.escaped.emit();
                        break;
                    default:
                        break;
                }
            };
        /**
         * @return {?}
         */
        NguiListItemDirective.prototype.mousedown = /**
         * @return {?}
         */
            function () {
                this.parentListComp.selected.emit(this.object);
            };
        /**
         * @return {?}
         */
        NguiListItemDirective.prototype.focused = /**
         * @return {?}
         */
            function () {
                if (this.parentListComp['setFocused']) {
                    this.parentListComp['setFocused']('listItem', true);
                }
            };
        /**
         * @return {?}
         */
        NguiListItemDirective.prototype.blurred = /**
         * @return {?}
         */
            function () {
                if (this.parentListComp['setFocused']) {
                    this.parentListComp['setFocused']('listItem', false);
                }
            };
        NguiListItemDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ngui-list-item' // tslint:disable-line
                    },] }
        ];
        /** @nocollapse */
        NguiListItemDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: core.ViewContainerRef },
                { type: NguiListDirective, decorators: [{ type: core.Optional }, { type: core.Host }] },
                { type: NguiVirtualListComponent, decorators: [{ type: core.Optional }, { type: core.Host }] },
                { type: NguiAutocompleteComponent, decorators: [{ type: core.Optional }, { type: core.Host }] }
            ];
        };
        NguiListItemDirective.propDecorators = {
            object: [{ type: core.Input, args: ['item',] }],
            keydown: [{ type: core.HostListener, args: ['keydown', ['$event'],] }],
            keyup: [{ type: core.HostListener, args: ['keyup', ['$event'],] }],
            mousedown: [{ type: core.HostListener, args: ['click', ['$event'],] }],
            focused: [{ type: core.HostListener, args: ['focus', ['$event'],] }],
            blurred: [{ type: core.HostListener, args: ['blur', ['$event'],] }]
        };
        return NguiListItemDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var NguiListModule = /** @class */ (function () {
        function NguiListModule() {
        }
        NguiListModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            NguiInviewModule
                        ],
                        declarations: [
                            NguiAutocompleteComponent,
                            NguiInviewPageComponent,
                            NguiListDirective,
                            NguiListItemDirective,
                            NguiVirtualListComponent
                        ],
                        exports: [
                            NguiAutocompleteComponent,
                            NguiInviewPageComponent,
                            NguiListDirective,
                            NguiListItemDirective,
                            NguiVirtualListComponent
                        ],
                        entryComponents: [NguiInviewPageComponent]
                    },] }
        ];
        return NguiListModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var NguiHighlightPipe = /** @class */ (function () {
        function NguiHighlightPipe() {
        }
        /**
         * @param {?} text
         * @param {?} search
         * @return {?}
         */
        NguiHighlightPipe.prototype.transform = /**
         * @param {?} text
         * @param {?} search
         * @return {?}
         */
            function (text, search) {
                /** @type {?} */
                var ret = text;
                if (search) {
                    /** @type {?} */
                    var re = new RegExp(search, 'ig');
                    ret = text.replace(re, function (match) { return "<span class=\"ngui-highlight\">" + match + "</span>"; });
                }
                return ret;
            };
        NguiHighlightPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'nguiHighlight' },] }
        ];
        return NguiHighlightPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * window.konsole alternative
     * ### example
     * ```
     * konsole.setLogLevel('error');
     * konwole.log(1,2,3,4,5);
     * ```
     * @abstract
     */
    var konsole = /** @class */ (function () {
        function konsole() {
        }
        /** returns if it should call `window.console` or not */
        /**
         * returns if it should call `window.console` or not
         * @param {?} param
         * @return {?}
         */
        konsole.toLog = /**
         * returns if it should call `window.console` or not
         * @param {?} param
         * @return {?}
         */
            function (param) {
                // returns to log or not
                /** @type {?} */
                var restrictionNum = this.LOG_LEVELS[this.logLevel];
                /** @type {?} */
                var requiredNum = this.LOG_LEVELS[param];
                return requiredNum > restrictionNum;
            };
        /** sets the current log level */
        /**
         * sets the current log level
         * @param {?} logLevel
         * @return {?}
         */
        konsole.setLogLevel = /**
         * sets the current log level
         * @param {?} logLevel
         * @return {?}
         */
            function (logLevel) {
                logLevel = logLevel.toUpperCase();
                /** @type {?} */
                var logLevels = Object.keys(this.LOG_LEVELS);
                if (logLevels.indexOf(logLevel) > -1) {
                    if (window && window.sessionStorage) { // for browser env.
                        window.sessionStorage.setItem('konsole.LOG_LEVEL', logLevel);
                    }
                    this.logLevel = logLevel;
                }
                else {
                    console.error("Error, invalid logLevel, it must be one of " + logLevels);
                }
            };
        /** The same as `console.debug()` if the current log level is greater than `debug` */
        /**
         * The same as `console.debug()` if the current log level is greater than `debug`
         * @param {...?} args
         * @return {?}
         */
        konsole.debug = /**
         * The same as `console.debug()` if the current log level is greater than `debug`
         * @param {...?} args
         * @return {?}
         */
            function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (this.toLog('DEBUG')) {
                    // noinspection TsLint
                    console.debug.apply(console, arguments); // tslint:disable-line
                }
            };
        /** The same as `console.log()` if the current log level is greater than `log` */
        /**
         * The same as `console.log()` if the current log level is greater than `log`
         * @param {...?} args
         * @return {?}
         */
        konsole.log = /**
         * The same as `console.log()` if the current log level is greater than `log`
         * @param {...?} args
         * @return {?}
         */
            function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (this.toLog('LOG')) {
                    console.log.apply(console, arguments);
                }
            };
        /** The same as `console.info()` if the current log level is greater than `info` */
        /**
         * The same as `console.info()` if the current log level is greater than `info`
         * @param {...?} args
         * @return {?}
         */
        konsole.info = /**
         * The same as `console.info()` if the current log level is greater than `info`
         * @param {...?} args
         * @return {?}
         */
            function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (this.toLog('INFO')) {
                    // noinspection TsLint
                    console.info.apply(console, arguments); // tslint:disable-line
                }
            };
        /** The same as `console.warn()` if the current log level is greater than `warn` */
        /**
         * The same as `console.warn()` if the current log level is greater than `warn`
         * @param {...?} args
         * @return {?}
         */
        konsole.warn = /**
         * The same as `console.warn()` if the current log level is greater than `warn`
         * @param {...?} args
         * @return {?}
         */
            function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (this.toLog('WARN')) {
                    console.warn.apply(console, arguments);
                }
            };
        /** The same as `console.error()` if the current log level is greater than `error` */
        /**
         * The same as `console.error()` if the current log level is greater than `error`
         * @param {...?} args
         * @return {?}
         */
        konsole.error = /**
         * The same as `console.error()` if the current log level is greater than `error`
         * @param {...?} args
         * @return {?}
         */
            function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (this.toLog('ERROR')) {
                    console.error.apply(console, arguments);
                }
            };
        // tslint:disable-line
        /**
         * all log levels
         */
        konsole.LOG_LEVELS = {
            ALL: parseInt('00000', 2),
            DEBUG: parseInt('00001', 2),
            LOG: parseInt('00010', 2),
            INFO: parseInt('00100', 2),
            WARN: parseInt('01000', 2),
            ERROR: parseInt('10000', 2),
            NONE: parseInt('11111', 2)
        };
        /**
         * current log level set by setLogLevel, default 'INFO'
         */
        konsole.logLevel = 'INFO';
        return konsole;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var NguiUtilsModule = /** @class */ (function () {
        function NguiUtilsModule() {
        }
        NguiUtilsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [NguiHighlightPipe],
                        exports: [NguiHighlightPipe],
                        providers: [DynamicComponentService]
                    },] }
        ];
        return NguiUtilsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var NguiCommonModule = /** @class */ (function () {
        function NguiCommonModule() {
        }
        NguiCommonModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            NguiInviewModule,
                            NguiListModule,
                            NguiUtilsModule
                        ],
                        exports: [
                            NguiInviewModule,
                            NguiListModule,
                            NguiUtilsModule
                        ]
                    },] }
        ];
        return NguiCommonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.NguiInviewComponent = NguiInviewComponent;
    exports.NguiInviewDirective = NguiInviewDirective;
    exports.NguiInviewModule = NguiInviewModule;
    exports.NguiAutocompleteComponent = NguiAutocompleteComponent;
    exports.NguiListItemDirective = NguiListItemDirective;
    exports.NguiListDirective = NguiListDirective;
    exports.NguiInviewPageComponent = NguiInviewPageComponent;
    exports.NguiVirtualListComponent = NguiVirtualListComponent;
    exports.NguiListModule = NguiListModule;
    exports.DynamicComponentService = DynamicComponentService;
    exports.NguiHighlightPipe = NguiHighlightPipe;
    exports.konsole = konsole;
    exports.fireEvent = fireEvent;
    exports.NguiUtilsModule = NguiUtilsModule;
    exports.NguiCommonModule = NguiCommonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngui-common.umd.js.map