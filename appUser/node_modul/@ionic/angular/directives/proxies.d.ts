import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone } from "@angular/core";
import { Components } from "@ionic/core";
import * as ɵngcc0 from '@angular/core';
export declare interface IonApp extends Components.IonApp {
}
export declare class IonApp {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonApp, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonApp, "ion-app", never, {}, {}, never, ["*"]>;
}
export declare interface IonAvatar extends Components.IonAvatar {
}
export declare class IonAvatar {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonAvatar, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonAvatar, "ion-avatar", never, {}, {}, never, ["*"]>;
}
export declare interface IonBackButton extends Components.IonBackButton {
}
export declare class IonBackButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonBackButton, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonBackButton, "ion-back-button", never, { "color": "color"; "defaultHref": "defaultHref"; "disabled": "disabled"; "icon": "icon"; "mode": "mode"; "text": "text"; "type": "type"; }, {}, never, ["*"]>;
}
export declare interface IonBackdrop extends Components.IonBackdrop {
}
export declare class IonBackdrop {
    protected z: NgZone;
    ionBackdropTap: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonBackdrop, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonBackdrop, "ion-backdrop", never, { "stopPropagation": "stopPropagation"; "tappable": "tappable"; "visible": "visible"; }, {}, never, ["*"]>;
}
export declare interface IonBadge extends Components.IonBadge {
}
export declare class IonBadge {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonBadge, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonBadge, "ion-badge", never, { "color": "color"; "mode": "mode"; }, {}, never, ["*"]>;
}
export declare interface IonButton extends Components.IonButton {
}
export declare class IonButton {
    protected z: NgZone;
    ionFocus: EventEmitter<CustomEvent>;
    ionBlur: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonButton, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonButton, "ion-button", never, { "buttonType": "buttonType"; "color": "color"; "disabled": "disabled"; "download": "download"; "expand": "expand"; "fill": "fill"; "href": "href"; "mode": "mode"; "rel": "rel"; "routerDirection": "routerDirection"; "shape": "shape"; "size": "size"; "strong": "strong"; "target": "target"; "type": "type"; }, {}, never, ["*"]>;
}
export declare interface IonButtons extends Components.IonButtons {
}
export declare class IonButtons {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonButtons, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonButtons, "ion-buttons", never, { "collapse": "collapse"; }, {}, never, ["*"]>;
}
export declare interface IonCard extends Components.IonCard {
}
export declare class IonCard {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonCard, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonCard, "ion-card", never, { "button": "button"; "color": "color"; "disabled": "disabled"; "download": "download"; "href": "href"; "mode": "mode"; "rel": "rel"; "routerDirection": "routerDirection"; "target": "target"; "type": "type"; }, {}, never, ["*"]>;
}
export declare interface IonCardContent extends Components.IonCardContent {
}
export declare class IonCardContent {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonCardContent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonCardContent, "ion-card-content", never, { "mode": "mode"; }, {}, never, ["*"]>;
}
export declare interface IonCardHeader extends Components.IonCardHeader {
}
export declare class IonCardHeader {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonCardHeader, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonCardHeader, "ion-card-header", never, { "color": "color"; "mode": "mode"; "translucent": "translucent"; }, {}, never, ["*"]>;
}
export declare interface IonCardSubtitle extends Components.IonCardSubtitle {
}
export declare class IonCardSubtitle {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonCardSubtitle, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonCardSubtitle, "ion-card-subtitle", never, { "color": "color"; "mode": "mode"; }, {}, never, ["*"]>;
}
export declare interface IonCardTitle extends Components.IonCardTitle {
}
export declare class IonCardTitle {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonCardTitle, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonCardTitle, "ion-card-title", never, { "color": "color"; "mode": "mode"; }, {}, never, ["*"]>;
}
export declare interface IonCheckbox extends Components.IonCheckbox {
}
export declare class IonCheckbox {
    protected z: NgZone;
    ionChange: EventEmitter<CustomEvent>;
    ionFocus: EventEmitter<CustomEvent>;
    ionBlur: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonCheckbox, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonCheckbox, "ion-checkbox", never, { "checked": "checked"; "color": "color"; "disabled": "disabled"; "indeterminate": "indeterminate"; "mode": "mode"; "name": "name"; "value": "value"; }, {}, never, ["*"]>;
}
export declare interface IonChip extends Components.IonChip {
}
export declare class IonChip {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonChip, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonChip, "ion-chip", never, { "color": "color"; "mode": "mode"; "outline": "outline"; }, {}, never, ["*"]>;
}
export declare interface IonCol extends Components.IonCol {
}
export declare class IonCol {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonCol, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonCol, "ion-col", never, { "offset": "offset"; "offsetLg": "offsetLg"; "offsetMd": "offsetMd"; "offsetSm": "offsetSm"; "offsetXl": "offsetXl"; "offsetXs": "offsetXs"; "pull": "pull"; "pullLg": "pullLg"; "pullMd": "pullMd"; "pullSm": "pullSm"; "pullXl": "pullXl"; "pullXs": "pullXs"; "push": "push"; "pushLg": "pushLg"; "pushMd": "pushMd"; "pushSm": "pushSm"; "pushXl": "pushXl"; "pushXs": "pushXs"; "size": "size"; "sizeLg": "sizeLg"; "sizeMd": "sizeMd"; "sizeSm": "sizeSm"; "sizeXl": "sizeXl"; "sizeXs": "sizeXs"; }, {}, never, ["*"]>;
}
export declare interface IonContent extends Components.IonContent {
}
export declare class IonContent {
    protected z: NgZone;
    ionScrollStart: EventEmitter<CustomEvent>;
    ionScroll: EventEmitter<CustomEvent>;
    ionScrollEnd: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonContent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonContent, "ion-content", never, { "color": "color"; "forceOverscroll": "forceOverscroll"; "fullscreen": "fullscreen"; "scrollEvents": "scrollEvents"; "scrollX": "scrollX"; "scrollY": "scrollY"; }, {}, never, ["*"]>;
}
export declare interface IonDatetime extends Components.IonDatetime {
}
export declare class IonDatetime {
    protected z: NgZone;
    ionCancel: EventEmitter<CustomEvent>;
    ionChange: EventEmitter<CustomEvent>;
    ionFocus: EventEmitter<CustomEvent>;
    ionBlur: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonDatetime, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonDatetime, "ion-datetime", never, { "cancelText": "cancelText"; "dayNames": "dayNames"; "dayShortNames": "dayShortNames"; "dayValues": "dayValues"; "disabled": "disabled"; "displayFormat": "displayFormat"; "displayTimezone": "displayTimezone"; "doneText": "doneText"; "hourValues": "hourValues"; "max": "max"; "min": "min"; "minuteValues": "minuteValues"; "mode": "mode"; "monthNames": "monthNames"; "monthShortNames": "monthShortNames"; "monthValues": "monthValues"; "name": "name"; "pickerFormat": "pickerFormat"; "pickerOptions": "pickerOptions"; "placeholder": "placeholder"; "readonly": "readonly"; "value": "value"; "yearValues": "yearValues"; }, {}, never, ["*"]>;
}
export declare interface IonFab extends Components.IonFab {
}
export declare class IonFab {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonFab, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonFab, "ion-fab", never, { "activated": "activated"; "edge": "edge"; "horizontal": "horizontal"; "vertical": "vertical"; }, {}, never, ["*"]>;
}
export declare interface IonFabButton extends Components.IonFabButton {
}
export declare class IonFabButton {
    protected z: NgZone;
    ionFocus: EventEmitter<CustomEvent>;
    ionBlur: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonFabButton, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonFabButton, "ion-fab-button", never, { "activated": "activated"; "color": "color"; "disabled": "disabled"; "download": "download"; "href": "href"; "mode": "mode"; "rel": "rel"; "routerDirection": "routerDirection"; "show": "show"; "size": "size"; "target": "target"; "translucent": "translucent"; "type": "type"; }, {}, never, ["*"]>;
}
export declare interface IonFabList extends Components.IonFabList {
}
export declare class IonFabList {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonFabList, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonFabList, "ion-fab-list", never, { "activated": "activated"; "side": "side"; }, {}, never, ["*"]>;
}
export declare interface IonFooter extends Components.IonFooter {
}
export declare class IonFooter {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonFooter, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonFooter, "ion-footer", never, { "mode": "mode"; "translucent": "translucent"; }, {}, never, ["*"]>;
}
export declare interface IonGrid extends Components.IonGrid {
}
export declare class IonGrid {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonGrid, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonGrid, "ion-grid", never, { "fixed": "fixed"; }, {}, never, ["*"]>;
}
export declare interface IonHeader extends Components.IonHeader {
}
export declare class IonHeader {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonHeader, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonHeader, "ion-header", never, { "collapse": "collapse"; "mode": "mode"; "translucent": "translucent"; }, {}, never, ["*"]>;
}
export declare interface IonIcon extends Components.IonIcon {
}
export declare class IonIcon {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonIcon, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonIcon, "ion-icon", never, { "ariaLabel": "ariaLabel"; "color": "color"; "flipRtl": "flipRtl"; "icon": "icon"; "ios": "ios"; "lazy": "lazy"; "md": "md"; "mode": "mode"; "name": "name"; "size": "size"; "src": "src"; }, {}, never, ["*"]>;
}
export declare interface IonImg extends Components.IonImg {
}
export declare class IonImg {
    protected z: NgZone;
    ionImgWillLoad: EventEmitter<CustomEvent>;
    ionImgDidLoad: EventEmitter<CustomEvent>;
    ionError: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonImg, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonImg, "ion-img", never, { "alt": "alt"; "src": "src"; }, {}, never, ["*"]>;
}
export declare interface IonInfiniteScroll extends Components.IonInfiniteScroll {
}
export declare class IonInfiniteScroll {
    protected z: NgZone;
    ionInfinite: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonInfiniteScroll, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonInfiniteScroll, "ion-infinite-scroll", never, { "disabled": "disabled"; "position": "position"; "threshold": "threshold"; }, {}, never, ["*"]>;
}
export declare interface IonInfiniteScrollContent extends Components.IonInfiniteScrollContent {
}
export declare class IonInfiniteScrollContent {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonInfiniteScrollContent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonInfiniteScrollContent, "ion-infinite-scroll-content", never, { "loadingSpinner": "loadingSpinner"; "loadingText": "loadingText"; }, {}, never, ["*"]>;
}
export declare interface IonInput extends Components.IonInput {
}
export declare class IonInput {
    protected z: NgZone;
    ionInput: EventEmitter<CustomEvent>;
    ionChange: EventEmitter<CustomEvent>;
    ionBlur: EventEmitter<CustomEvent>;
    ionFocus: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonInput, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonInput, "ion-input", never, { "accept": "accept"; "autocapitalize": "autocapitalize"; "autocomplete": "autocomplete"; "autocorrect": "autocorrect"; "autofocus": "autofocus"; "clearInput": "clearInput"; "clearOnEdit": "clearOnEdit"; "color": "color"; "debounce": "debounce"; "disabled": "disabled"; "enterkeyhint": "enterkeyhint"; "inputmode": "inputmode"; "max": "max"; "maxlength": "maxlength"; "min": "min"; "minlength": "minlength"; "mode": "mode"; "multiple": "multiple"; "name": "name"; "pattern": "pattern"; "placeholder": "placeholder"; "readonly": "readonly"; "required": "required"; "size": "size"; "spellcheck": "spellcheck"; "step": "step"; "type": "type"; "value": "value"; }, {}, never, ["*"]>;
}
export declare interface IonItem extends Components.IonItem {
}
export declare class IonItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonItem, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonItem, "ion-item", never, { "button": "button"; "color": "color"; "detail": "detail"; "detailIcon": "detailIcon"; "disabled": "disabled"; "download": "download"; "href": "href"; "lines": "lines"; "mode": "mode"; "rel": "rel"; "routerDirection": "routerDirection"; "target": "target"; "type": "type"; }, {}, never, ["*"]>;
}
export declare interface IonItemDivider extends Components.IonItemDivider {
}
export declare class IonItemDivider {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonItemDivider, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonItemDivider, "ion-item-divider", never, { "color": "color"; "mode": "mode"; "sticky": "sticky"; }, {}, never, ["*"]>;
}
export declare interface IonItemGroup extends Components.IonItemGroup {
}
export declare class IonItemGroup {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonItemGroup, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonItemGroup, "ion-item-group", never, {}, {}, never, ["*"]>;
}
export declare interface IonItemOption extends Components.IonItemOption {
}
export declare class IonItemOption {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonItemOption, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonItemOption, "ion-item-option", never, { "color": "color"; "disabled": "disabled"; "download": "download"; "expandable": "expandable"; "href": "href"; "mode": "mode"; "rel": "rel"; "target": "target"; "type": "type"; }, {}, never, ["*"]>;
}
export declare interface IonItemOptions extends Components.IonItemOptions {
}
export declare class IonItemOptions {
    protected z: NgZone;
    ionSwipe: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonItemOptions, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonItemOptions, "ion-item-options", never, { "side": "side"; }, {}, never, ["*"]>;
}
export declare interface IonItemSliding extends Components.IonItemSliding {
}
export declare class IonItemSliding {
    protected z: NgZone;
    ionDrag: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonItemSliding, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonItemSliding, "ion-item-sliding", never, { "disabled": "disabled"; }, {}, never, ["*"]>;
}
export declare interface IonLabel extends Components.IonLabel {
}
export declare class IonLabel {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonLabel, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonLabel, "ion-label", never, { "color": "color"; "mode": "mode"; "position": "position"; }, {}, never, ["*"]>;
}
export declare interface IonList extends Components.IonList {
}
export declare class IonList {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonList, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonList, "ion-list", never, { "inset": "inset"; "lines": "lines"; "mode": "mode"; }, {}, never, ["*"]>;
}
export declare interface IonListHeader extends Components.IonListHeader {
}
export declare class IonListHeader {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonListHeader, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonListHeader, "ion-list-header", never, { "color": "color"; "lines": "lines"; "mode": "mode"; }, {}, never, ["*"]>;
}
export declare interface IonMenu extends Components.IonMenu {
}
export declare class IonMenu {
    protected z: NgZone;
    ionWillOpen: EventEmitter<CustomEvent>;
    ionWillClose: EventEmitter<CustomEvent>;
    ionDidOpen: EventEmitter<CustomEvent>;
    ionDidClose: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonMenu, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonMenu, "ion-menu", never, { "contentId": "contentId"; "disabled": "disabled"; "maxEdgeStart": "maxEdgeStart"; "menuId": "menuId"; "side": "side"; "swipeGesture": "swipeGesture"; "type": "type"; }, {}, never, ["*"]>;
}
export declare interface IonMenuButton extends Components.IonMenuButton {
}
export declare class IonMenuButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonMenuButton, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonMenuButton, "ion-menu-button", never, { "autoHide": "autoHide"; "color": "color"; "disabled": "disabled"; "menu": "menu"; "type": "type"; }, {}, never, ["*"]>;
}
export declare interface IonMenuToggle extends Components.IonMenuToggle {
}
export declare class IonMenuToggle {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonMenuToggle, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonMenuToggle, "ion-menu-toggle", never, { "autoHide": "autoHide"; "menu": "menu"; }, {}, never, ["*"]>;
}
export declare interface IonNav extends Components.IonNav {
}
export declare class IonNav {
    protected z: NgZone;
    ionNavWillChange: EventEmitter<CustomEvent>;
    ionNavDidChange: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonNav, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonNav, "ion-nav", never, { "animated": "animated"; "animation": "animation"; "root": "root"; "rootParams": "rootParams"; "swipeGesture": "swipeGesture"; }, {}, never, ["*"]>;
}
export declare interface IonNavLink extends Components.IonNavLink {
}
export declare class IonNavLink {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonNavLink, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonNavLink, "ion-nav-link", never, { "component": "component"; "componentProps": "componentProps"; "routerDirection": "routerDirection"; }, {}, never, ["*"]>;
}
export declare interface IonNote extends Components.IonNote {
}
export declare class IonNote {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonNote, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonNote, "ion-note", never, { "color": "color"; "mode": "mode"; }, {}, never, ["*"]>;
}
export declare interface IonProgressBar extends Components.IonProgressBar {
}
export declare class IonProgressBar {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonProgressBar, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonProgressBar, "ion-progress-bar", never, { "buffer": "buffer"; "color": "color"; "mode": "mode"; "reversed": "reversed"; "type": "type"; "value": "value"; }, {}, never, ["*"]>;
}
export declare interface IonRadio extends Components.IonRadio {
}
export declare class IonRadio {
    protected z: NgZone;
    ionFocus: EventEmitter<CustomEvent>;
    ionBlur: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonRadio, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonRadio, "ion-radio", never, { "color": "color"; "disabled": "disabled"; "mode": "mode"; "name": "name"; "value": "value"; }, {}, never, ["*"]>;
}
export declare interface IonRadioGroup extends Components.IonRadioGroup {
}
export declare class IonRadioGroup {
    protected z: NgZone;
    ionChange: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonRadioGroup, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonRadioGroup, "ion-radio-group", never, { "allowEmptySelection": "allowEmptySelection"; "name": "name"; "value": "value"; }, {}, never, ["*"]>;
}
export declare interface IonRange extends Components.IonRange {
}
export declare class IonRange {
    protected z: NgZone;
    ionChange: EventEmitter<CustomEvent>;
    ionFocus: EventEmitter<CustomEvent>;
    ionBlur: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonRange, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonRange, "ion-range", never, { "color": "color"; "debounce": "debounce"; "disabled": "disabled"; "dualKnobs": "dualKnobs"; "max": "max"; "min": "min"; "mode": "mode"; "name": "name"; "pin": "pin"; "snaps": "snaps"; "step": "step"; "ticks": "ticks"; "value": "value"; }, {}, never, ["*"]>;
}
export declare interface IonRefresher extends Components.IonRefresher {
}
export declare class IonRefresher {
    protected z: NgZone;
    ionRefresh: EventEmitter<CustomEvent>;
    ionPull: EventEmitter<CustomEvent>;
    ionStart: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonRefresher, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonRefresher, "ion-refresher", never, { "closeDuration": "closeDuration"; "disabled": "disabled"; "pullFactor": "pullFactor"; "pullMax": "pullMax"; "pullMin": "pullMin"; "snapbackDuration": "snapbackDuration"; }, {}, never, ["*"]>;
}
export declare interface IonRefresherContent extends Components.IonRefresherContent {
}
export declare class IonRefresherContent {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonRefresherContent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonRefresherContent, "ion-refresher-content", never, { "pullingIcon": "pullingIcon"; "pullingText": "pullingText"; "refreshingSpinner": "refreshingSpinner"; "refreshingText": "refreshingText"; }, {}, never, ["*"]>;
}
export declare interface IonReorder extends Components.IonReorder {
}
export declare class IonReorder {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonReorder, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonReorder, "ion-reorder", never, {}, {}, never, ["*"]>;
}
export declare interface IonReorderGroup extends Components.IonReorderGroup {
}
export declare class IonReorderGroup {
    protected z: NgZone;
    ionItemReorder: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonReorderGroup, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonReorderGroup, "ion-reorder-group", never, { "disabled": "disabled"; }, {}, never, ["*"]>;
}
export declare interface IonRippleEffect extends Components.IonRippleEffect {
}
export declare class IonRippleEffect {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonRippleEffect, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonRippleEffect, "ion-ripple-effect", never, { "type": "type"; }, {}, never, ["*"]>;
}
export declare interface IonRow extends Components.IonRow {
}
export declare class IonRow {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonRow, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonRow, "ion-row", never, {}, {}, never, ["*"]>;
}
export declare interface IonSearchbar extends Components.IonSearchbar {
}
export declare class IonSearchbar {
    protected z: NgZone;
    ionInput: EventEmitter<CustomEvent>;
    ionChange: EventEmitter<CustomEvent>;
    ionCancel: EventEmitter<CustomEvent>;
    ionClear: EventEmitter<CustomEvent>;
    ionBlur: EventEmitter<CustomEvent>;
    ionFocus: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonSearchbar, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonSearchbar, "ion-searchbar", never, { "animated": "animated"; "autocomplete": "autocomplete"; "autocorrect": "autocorrect"; "cancelButtonIcon": "cancelButtonIcon"; "cancelButtonText": "cancelButtonText"; "clearIcon": "clearIcon"; "color": "color"; "debounce": "debounce"; "disabled": "disabled"; "enterkeyhint": "enterkeyhint"; "inputmode": "inputmode"; "mode": "mode"; "placeholder": "placeholder"; "searchIcon": "searchIcon"; "showCancelButton": "showCancelButton"; "spellcheck": "spellcheck"; "type": "type"; "value": "value"; }, {}, never, ["*"]>;
}
export declare interface IonSegment extends Components.IonSegment {
}
export declare class IonSegment {
    protected z: NgZone;
    ionChange: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonSegment, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonSegment, "ion-segment", never, { "color": "color"; "disabled": "disabled"; "mode": "mode"; "scrollable": "scrollable"; "value": "value"; }, {}, never, ["*"]>;
}
export declare interface IonSegmentButton extends Components.IonSegmentButton {
}
export declare class IonSegmentButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonSegmentButton, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonSegmentButton, "ion-segment-button", never, { "disabled": "disabled"; "layout": "layout"; "mode": "mode"; "type": "type"; "value": "value"; }, {}, never, ["*"]>;
}
export declare interface IonSelect extends Components.IonSelect {
}
export declare class IonSelect {
    protected z: NgZone;
    ionChange: EventEmitter<CustomEvent>;
    ionCancel: EventEmitter<CustomEvent>;
    ionFocus: EventEmitter<CustomEvent>;
    ionBlur: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonSelect, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonSelect, "ion-select", never, { "cancelText": "cancelText"; "compareWith": "compareWith"; "disabled": "disabled"; "interface": "interface"; "interfaceOptions": "interfaceOptions"; "mode": "mode"; "multiple": "multiple"; "name": "name"; "okText": "okText"; "placeholder": "placeholder"; "selectedText": "selectedText"; "value": "value"; }, {}, never, ["*"]>;
}
export declare interface IonSelectOption extends Components.IonSelectOption {
}
export declare class IonSelectOption {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonSelectOption, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonSelectOption, "ion-select-option", never, { "disabled": "disabled"; "value": "value"; }, {}, never, ["*"]>;
}
export declare interface IonSkeletonText extends Components.IonSkeletonText {
}
export declare class IonSkeletonText {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonSkeletonText, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonSkeletonText, "ion-skeleton-text", never, { "animated": "animated"; }, {}, never, ["*"]>;
}
export declare interface IonSlide extends Components.IonSlide {
}
export declare class IonSlide {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonSlide, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonSlide, "ion-slide", never, {}, {}, never, ["*"]>;
}
export declare interface IonSlides extends Components.IonSlides {
}
export declare class IonSlides {
    protected z: NgZone;
    ionSlidesDidLoad: EventEmitter<CustomEvent>;
    ionSlideTap: EventEmitter<CustomEvent>;
    ionSlideDoubleTap: EventEmitter<CustomEvent>;
    ionSlideWillChange: EventEmitter<CustomEvent>;
    ionSlideDidChange: EventEmitter<CustomEvent>;
    ionSlideNextStart: EventEmitter<CustomEvent>;
    ionSlidePrevStart: EventEmitter<CustomEvent>;
    ionSlideNextEnd: EventEmitter<CustomEvent>;
    ionSlidePrevEnd: EventEmitter<CustomEvent>;
    ionSlideTransitionStart: EventEmitter<CustomEvent>;
    ionSlideTransitionEnd: EventEmitter<CustomEvent>;
    ionSlideDrag: EventEmitter<CustomEvent>;
    ionSlideReachStart: EventEmitter<CustomEvent>;
    ionSlideReachEnd: EventEmitter<CustomEvent>;
    ionSlideTouchStart: EventEmitter<CustomEvent>;
    ionSlideTouchEnd: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonSlides, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonSlides, "ion-slides", never, { "mode": "mode"; "options": "options"; "pager": "pager"; "scrollbar": "scrollbar"; }, {}, never, ["*"]>;
}
export declare interface IonSpinner extends Components.IonSpinner {
}
export declare class IonSpinner {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonSpinner, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonSpinner, "ion-spinner", never, { "color": "color"; "duration": "duration"; "name": "name"; "paused": "paused"; }, {}, never, ["*"]>;
}
export declare interface IonSplitPane extends Components.IonSplitPane {
}
export declare class IonSplitPane {
    protected z: NgZone;
    ionSplitPaneVisible: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonSplitPane, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonSplitPane, "ion-split-pane", never, { "contentId": "contentId"; "disabled": "disabled"; "when": "when"; }, {}, never, ["*"]>;
}
export declare interface IonTabBar extends Components.IonTabBar {
}
export declare class IonTabBar {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonTabBar, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonTabBar, "ion-tab-bar", never, { "color": "color"; "mode": "mode"; "selectedTab": "selectedTab"; "translucent": "translucent"; }, {}, never, ["*"]>;
}
export declare interface IonTabButton extends Components.IonTabButton {
}
export declare class IonTabButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonTabButton, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonTabButton, "ion-tab-button", never, { "disabled": "disabled"; "download": "download"; "href": "href"; "layout": "layout"; "mode": "mode"; "rel": "rel"; "selected": "selected"; "tab": "tab"; "target": "target"; }, {}, never, ["*"]>;
}
export declare interface IonText extends Components.IonText {
}
export declare class IonText {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonText, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonText, "ion-text", never, { "color": "color"; "mode": "mode"; }, {}, never, ["*"]>;
}
export declare interface IonTextarea extends Components.IonTextarea {
}
export declare class IonTextarea {
    protected z: NgZone;
    ionChange: EventEmitter<CustomEvent>;
    ionInput: EventEmitter<CustomEvent>;
    ionBlur: EventEmitter<CustomEvent>;
    ionFocus: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonTextarea, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonTextarea, "ion-textarea", never, { "autoGrow": "autoGrow"; "autocapitalize": "autocapitalize"; "autofocus": "autofocus"; "clearOnEdit": "clearOnEdit"; "color": "color"; "cols": "cols"; "debounce": "debounce"; "disabled": "disabled"; "enterkeyhint": "enterkeyhint"; "inputmode": "inputmode"; "maxlength": "maxlength"; "minlength": "minlength"; "mode": "mode"; "name": "name"; "placeholder": "placeholder"; "readonly": "readonly"; "required": "required"; "rows": "rows"; "spellcheck": "spellcheck"; "value": "value"; "wrap": "wrap"; }, {}, never, ["*"]>;
}
export declare interface IonThumbnail extends Components.IonThumbnail {
}
export declare class IonThumbnail {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonThumbnail, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonThumbnail, "ion-thumbnail", never, {}, {}, never, ["*"]>;
}
export declare interface IonTitle extends Components.IonTitle {
}
export declare class IonTitle {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonTitle, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonTitle, "ion-title", never, { "color": "color"; "size": "size"; }, {}, never, ["*"]>;
}
export declare interface IonToggle extends Components.IonToggle {
}
export declare class IonToggle {
    protected z: NgZone;
    ionChange: EventEmitter<CustomEvent>;
    ionFocus: EventEmitter<CustomEvent>;
    ionBlur: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonToggle, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonToggle, "ion-toggle", never, { "checked": "checked"; "color": "color"; "disabled": "disabled"; "mode": "mode"; "name": "name"; "value": "value"; }, {}, never, ["*"]>;
}
export declare interface IonToolbar extends Components.IonToolbar {
}
export declare class IonToolbar {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonToolbar, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonToolbar, "ion-toolbar", never, { "color": "color"; "mode": "mode"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJveGllcy5kLnRzIiwic291cmNlcyI6WyJwcm94aWVzLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tIFwiQGlvbmljL2NvcmVcIjtcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25BcHAgZXh0ZW5kcyBDb21wb25lbnRzLklvbkFwcCB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJb25BcHAge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25BdmF0YXIgZXh0ZW5kcyBDb21wb25lbnRzLklvbkF2YXRhciB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJb25BdmF0YXIge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25CYWNrQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25CYWNrQnV0dG9uIHtcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIElvbkJhY2tCdXR0b24ge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25CYWNrZHJvcCBleHRlbmRzIENvbXBvbmVudHMuSW9uQmFja2Ryb3Age1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW9uQmFja2Ryb3Age1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgaW9uQmFja2Ryb3BUYXA6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25CYWRnZSBleHRlbmRzIENvbXBvbmVudHMuSW9uQmFkZ2Uge1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW9uQmFkZ2Uge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25CdXR0b24gZXh0ZW5kcyBDb21wb25lbnRzLklvbkJ1dHRvbiB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJb25CdXR0b24ge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgaW9uRm9jdXM6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uQmx1cjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCB6OiBOZ1pvbmUpO1xufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkJ1dHRvbnMgZXh0ZW5kcyBDb21wb25lbnRzLklvbkJ1dHRvbnMge1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW9uQnV0dG9ucyB7XG4gICAgcHJvdGVjdGVkIHo6IE5nWm9uZTtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCB6OiBOZ1pvbmUpO1xufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkNhcmQgZXh0ZW5kcyBDb21wb25lbnRzLklvbkNhcmQge1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW9uQ2FyZCB7XG4gICAgcHJvdGVjdGVkIHo6IE5nWm9uZTtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCB6OiBOZ1pvbmUpO1xufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkNhcmRDb250ZW50IGV4dGVuZHMgQ29tcG9uZW50cy5Jb25DYXJkQ29udGVudCB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJb25DYXJkQ29udGVudCB7XG4gICAgcHJvdGVjdGVkIHo6IE5nWm9uZTtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCB6OiBOZ1pvbmUpO1xufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkNhcmRIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnRzLklvbkNhcmRIZWFkZXIge1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW9uQ2FyZEhlYWRlciB7XG4gICAgcHJvdGVjdGVkIHo6IE5nWm9uZTtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCB6OiBOZ1pvbmUpO1xufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkNhcmRTdWJ0aXRsZSBleHRlbmRzIENvbXBvbmVudHMuSW9uQ2FyZFN1YnRpdGxlIHtcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIElvbkNhcmRTdWJ0aXRsZSB7XG4gICAgcHJvdGVjdGVkIHo6IE5nWm9uZTtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCB6OiBOZ1pvbmUpO1xufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkNhcmRUaXRsZSBleHRlbmRzIENvbXBvbmVudHMuSW9uQ2FyZFRpdGxlIHtcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIElvbkNhcmRUaXRsZSB7XG4gICAgcHJvdGVjdGVkIHo6IE5nWm9uZTtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCB6OiBOZ1pvbmUpO1xufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkNoZWNrYm94IGV4dGVuZHMgQ29tcG9uZW50cy5Jb25DaGVja2JveCB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJb25DaGVja2JveCB7XG4gICAgcHJvdGVjdGVkIHo6IE5nWm9uZTtcbiAgICBpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uRm9jdXM6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uQmx1cjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCB6OiBOZ1pvbmUpO1xufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkNoaXAgZXh0ZW5kcyBDb21wb25lbnRzLklvbkNoaXAge1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW9uQ2hpcCB7XG4gICAgcHJvdGVjdGVkIHo6IE5nWm9uZTtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCB6OiBOZ1pvbmUpO1xufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkNvbCBleHRlbmRzIENvbXBvbmVudHMuSW9uQ29sIHtcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIElvbkNvbCB7XG4gICAgcHJvdGVjdGVkIHo6IE5nWm9uZTtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCB6OiBOZ1pvbmUpO1xufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkNvbnRlbnQgZXh0ZW5kcyBDb21wb25lbnRzLklvbkNvbnRlbnQge1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW9uQ29udGVudCB7XG4gICAgcHJvdGVjdGVkIHo6IE5nWm9uZTtcbiAgICBpb25TY3JvbGxTdGFydDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25TY3JvbGw6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uU2Nyb2xsRW5kOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHo6IE5nWm9uZSk7XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uRGF0ZXRpbWUgZXh0ZW5kcyBDb21wb25lbnRzLklvbkRhdGV0aW1lIHtcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIElvbkRhdGV0aW1lIHtcbiAgICBwcm90ZWN0ZWQgejogTmdab25lO1xuICAgIGlvbkNhbmNlbDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uRm9jdXM6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uQmx1cjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCB6OiBOZ1pvbmUpO1xufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkZhYiBleHRlbmRzIENvbXBvbmVudHMuSW9uRmFiIHtcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIElvbkZhYiB7XG4gICAgcHJvdGVjdGVkIHo6IE5nWm9uZTtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCB6OiBOZ1pvbmUpO1xufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkZhYkJ1dHRvbiBleHRlbmRzIENvbXBvbmVudHMuSW9uRmFiQnV0dG9uIHtcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIElvbkZhYkJ1dHRvbiB7XG4gICAgcHJvdGVjdGVkIHo6IE5nWm9uZTtcbiAgICBpb25Gb2N1czogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25CbHVyOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHo6IE5nWm9uZSk7XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uRmFiTGlzdCBleHRlbmRzIENvbXBvbmVudHMuSW9uRmFiTGlzdCB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJb25GYWJMaXN0IHtcbiAgICBwcm90ZWN0ZWQgejogTmdab25lO1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHo6IE5nWm9uZSk7XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25Gb290ZXIge1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW9uRm9vdGVyIHtcbiAgICBwcm90ZWN0ZWQgejogTmdab25lO1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHo6IE5nWm9uZSk7XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uR3JpZCBleHRlbmRzIENvbXBvbmVudHMuSW9uR3JpZCB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJb25HcmlkIHtcbiAgICBwcm90ZWN0ZWQgejogTmdab25lO1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHo6IE5nWm9uZSk7XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25IZWFkZXIge1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW9uSGVhZGVyIHtcbiAgICBwcm90ZWN0ZWQgejogTmdab25lO1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHo6IE5nWm9uZSk7XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uSWNvbiBleHRlbmRzIENvbXBvbmVudHMuSW9uSWNvbiB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJb25JY29uIHtcbiAgICBwcm90ZWN0ZWQgejogTmdab25lO1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHo6IE5nWm9uZSk7XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uSW1nIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25JbWcge1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW9uSW1nIHtcbiAgICBwcm90ZWN0ZWQgejogTmdab25lO1xuICAgIGlvbkltZ1dpbGxMb2FkOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkltZ0RpZExvYWQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uRXJyb3I6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25JbmZpbml0ZVNjcm9sbCBleHRlbmRzIENvbXBvbmVudHMuSW9uSW5maW5pdGVTY3JvbGwge1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW9uSW5maW5pdGVTY3JvbGwge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgaW9uSW5maW5pdGU6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25JbmZpbml0ZVNjcm9sbENvbnRlbnQgZXh0ZW5kcyBDb21wb25lbnRzLklvbkluZmluaXRlU2Nyb2xsQ29udGVudCB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJb25JbmZpbml0ZVNjcm9sbENvbnRlbnQge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25JbnB1dCBleHRlbmRzIENvbXBvbmVudHMuSW9uSW5wdXQge1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW9uSW5wdXQge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgaW9uSW5wdXQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkJsdXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uRm9jdXM6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25JdGVtIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25JdGVtIHtcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIElvbkl0ZW0ge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25JdGVtRGl2aWRlciBleHRlbmRzIENvbXBvbmVudHMuSW9uSXRlbURpdmlkZXIge1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW9uSXRlbURpdmlkZXIge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25JdGVtR3JvdXAgZXh0ZW5kcyBDb21wb25lbnRzLklvbkl0ZW1Hcm91cCB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJb25JdGVtR3JvdXAge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25JdGVtT3B0aW9uIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25JdGVtT3B0aW9uIHtcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIElvbkl0ZW1PcHRpb24ge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25JdGVtT3B0aW9ucyBleHRlbmRzIENvbXBvbmVudHMuSW9uSXRlbU9wdGlvbnMge1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW9uSXRlbU9wdGlvbnMge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgaW9uU3dpcGU6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25JdGVtU2xpZGluZyBleHRlbmRzIENvbXBvbmVudHMuSW9uSXRlbVNsaWRpbmcge1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW9uSXRlbVNsaWRpbmcge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgaW9uRHJhZzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCB6OiBOZ1pvbmUpO1xufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkxhYmVsIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25MYWJlbCB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJb25MYWJlbCB7XG4gICAgcHJvdGVjdGVkIHo6IE5nWm9uZTtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCB6OiBOZ1pvbmUpO1xufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkxpc3QgZXh0ZW5kcyBDb21wb25lbnRzLklvbkxpc3Qge1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW9uTGlzdCB7XG4gICAgcHJvdGVjdGVkIHo6IE5nWm9uZTtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCB6OiBOZ1pvbmUpO1xufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkxpc3RIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnRzLklvbkxpc3RIZWFkZXIge1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW9uTGlzdEhlYWRlciB7XG4gICAgcHJvdGVjdGVkIHo6IE5nWm9uZTtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCB6OiBOZ1pvbmUpO1xufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbk1lbnUgZXh0ZW5kcyBDb21wb25lbnRzLklvbk1lbnUge1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW9uTWVudSB7XG4gICAgcHJvdGVjdGVkIHo6IE5nWm9uZTtcbiAgICBpb25XaWxsT3BlbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25XaWxsQ2xvc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uRGlkT3BlbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25EaWRDbG9zZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCB6OiBOZ1pvbmUpO1xufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbk1lbnVCdXR0b24gZXh0ZW5kcyBDb21wb25lbnRzLklvbk1lbnVCdXR0b24ge1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW9uTWVudUJ1dHRvbiB7XG4gICAgcHJvdGVjdGVkIHo6IE5nWm9uZTtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCB6OiBOZ1pvbmUpO1xufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbk1lbnVUb2dnbGUgZXh0ZW5kcyBDb21wb25lbnRzLklvbk1lbnVUb2dnbGUge1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW9uTWVudVRvZ2dsZSB7XG4gICAgcHJvdGVjdGVkIHo6IE5nWm9uZTtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCB6OiBOZ1pvbmUpO1xufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbk5hdiBleHRlbmRzIENvbXBvbmVudHMuSW9uTmF2IHtcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIElvbk5hdiB7XG4gICAgcHJvdGVjdGVkIHo6IE5nWm9uZTtcbiAgICBpb25OYXZXaWxsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbk5hdkRpZENoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCB6OiBOZ1pvbmUpO1xufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbk5hdkxpbmsgZXh0ZW5kcyBDb21wb25lbnRzLklvbk5hdkxpbmsge1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW9uTmF2TGluayB7XG4gICAgcHJvdGVjdGVkIHo6IE5nWm9uZTtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCB6OiBOZ1pvbmUpO1xufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbk5vdGUgZXh0ZW5kcyBDb21wb25lbnRzLklvbk5vdGUge1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW9uTm90ZSB7XG4gICAgcHJvdGVjdGVkIHo6IE5nWm9uZTtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCB6OiBOZ1pvbmUpO1xufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblByb2dyZXNzQmFyIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25Qcm9ncmVzc0JhciB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJb25Qcm9ncmVzc0JhciB7XG4gICAgcHJvdGVjdGVkIHo6IE5nWm9uZTtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCB6OiBOZ1pvbmUpO1xufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblJhZGlvIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25SYWRpbyB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJb25SYWRpbyB7XG4gICAgcHJvdGVjdGVkIHo6IE5nWm9uZTtcbiAgICBpb25Gb2N1czogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25CbHVyOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHo6IE5nWm9uZSk7XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uUmFkaW9Hcm91cCBleHRlbmRzIENvbXBvbmVudHMuSW9uUmFkaW9Hcm91cCB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJb25SYWRpb0dyb3VwIHtcbiAgICBwcm90ZWN0ZWQgejogTmdab25lO1xuICAgIGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCB6OiBOZ1pvbmUpO1xufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblJhbmdlIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25SYW5nZSB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJb25SYW5nZSB7XG4gICAgcHJvdGVjdGVkIHo6IE5nWm9uZTtcbiAgICBpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uRm9jdXM6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uQmx1cjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCB6OiBOZ1pvbmUpO1xufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblJlZnJlc2hlciBleHRlbmRzIENvbXBvbmVudHMuSW9uUmVmcmVzaGVyIHtcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIElvblJlZnJlc2hlciB7XG4gICAgcHJvdGVjdGVkIHo6IE5nWm9uZTtcbiAgICBpb25SZWZyZXNoOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvblB1bGw6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uU3RhcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25SZWZyZXNoZXJDb250ZW50IGV4dGVuZHMgQ29tcG9uZW50cy5Jb25SZWZyZXNoZXJDb250ZW50IHtcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIElvblJlZnJlc2hlckNvbnRlbnQge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25SZW9yZGVyIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25SZW9yZGVyIHtcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIElvblJlb3JkZXIge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25SZW9yZGVyR3JvdXAgZXh0ZW5kcyBDb21wb25lbnRzLklvblJlb3JkZXJHcm91cCB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJb25SZW9yZGVyR3JvdXAge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgaW9uSXRlbVJlb3JkZXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25SaXBwbGVFZmZlY3QgZXh0ZW5kcyBDb21wb25lbnRzLklvblJpcHBsZUVmZmVjdCB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJb25SaXBwbGVFZmZlY3Qge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25Sb3cgZXh0ZW5kcyBDb21wb25lbnRzLklvblJvdyB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJb25Sb3cge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25TZWFyY2hiYXIgZXh0ZW5kcyBDb21wb25lbnRzLklvblNlYXJjaGJhciB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJb25TZWFyY2hiYXIge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgaW9uSW5wdXQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkNhbmNlbDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25DbGVhcjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25CbHVyOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkZvY3VzOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHo6IE5nWm9uZSk7XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uU2VnbWVudCBleHRlbmRzIENvbXBvbmVudHMuSW9uU2VnbWVudCB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJb25TZWdtZW50IHtcbiAgICBwcm90ZWN0ZWQgejogTmdab25lO1xuICAgIGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCB6OiBOZ1pvbmUpO1xufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblNlZ21lbnRCdXR0b24gZXh0ZW5kcyBDb21wb25lbnRzLklvblNlZ21lbnRCdXR0b24ge1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW9uU2VnbWVudEJ1dHRvbiB7XG4gICAgcHJvdGVjdGVkIHo6IE5nWm9uZTtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCB6OiBOZ1pvbmUpO1xufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblNlbGVjdCBleHRlbmRzIENvbXBvbmVudHMuSW9uU2VsZWN0IHtcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIElvblNlbGVjdCB7XG4gICAgcHJvdGVjdGVkIHo6IE5nWm9uZTtcbiAgICBpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uQ2FuY2VsOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkZvY3VzOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkJsdXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25TZWxlY3RPcHRpb24gZXh0ZW5kcyBDb21wb25lbnRzLklvblNlbGVjdE9wdGlvbiB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJb25TZWxlY3RPcHRpb24ge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25Ta2VsZXRvblRleHQgZXh0ZW5kcyBDb21wb25lbnRzLklvblNrZWxldG9uVGV4dCB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJb25Ta2VsZXRvblRleHQge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25TbGlkZSBleHRlbmRzIENvbXBvbmVudHMuSW9uU2xpZGUge1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW9uU2xpZGUge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25TbGlkZXMgZXh0ZW5kcyBDb21wb25lbnRzLklvblNsaWRlcyB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJb25TbGlkZXMge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgaW9uU2xpZGVzRGlkTG9hZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25TbGlkZVRhcDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25TbGlkZURvdWJsZVRhcDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25TbGlkZVdpbGxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uU2xpZGVEaWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uU2xpZGVOZXh0U3RhcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uU2xpZGVQcmV2U3RhcnQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uU2xpZGVOZXh0RW5kOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvblNsaWRlUHJldkVuZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25TbGlkZVRyYW5zaXRpb25TdGFydDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25TbGlkZVRyYW5zaXRpb25FbmQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uU2xpZGVEcmFnOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvblNsaWRlUmVhY2hTdGFydDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25TbGlkZVJlYWNoRW5kOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvblNsaWRlVG91Y2hTdGFydDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25TbGlkZVRvdWNoRW5kOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHo6IE5nWm9uZSk7XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uU3Bpbm5lciBleHRlbmRzIENvbXBvbmVudHMuSW9uU3Bpbm5lciB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJb25TcGlubmVyIHtcbiAgICBwcm90ZWN0ZWQgejogTmdab25lO1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHo6IE5nWm9uZSk7XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uU3BsaXRQYW5lIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25TcGxpdFBhbmUge1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW9uU3BsaXRQYW5lIHtcbiAgICBwcm90ZWN0ZWQgejogTmdab25lO1xuICAgIGlvblNwbGl0UGFuZVZpc2libGU6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25UYWJCYXIgZXh0ZW5kcyBDb21wb25lbnRzLklvblRhYkJhciB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJb25UYWJCYXIge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25UYWJCdXR0b24gZXh0ZW5kcyBDb21wb25lbnRzLklvblRhYkJ1dHRvbiB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJb25UYWJCdXR0b24ge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25UZXh0IGV4dGVuZHMgQ29tcG9uZW50cy5Jb25UZXh0IHtcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIElvblRleHQge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25UZXh0YXJlYSBleHRlbmRzIENvbXBvbmVudHMuSW9uVGV4dGFyZWEge1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW9uVGV4dGFyZWEge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgaW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbklucHV0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkJsdXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uRm9jdXM6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25UaHVtYm5haWwgZXh0ZW5kcyBDb21wb25lbnRzLklvblRodW1ibmFpbCB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJb25UaHVtYm5haWwge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25UaXRsZSBleHRlbmRzIENvbXBvbmVudHMuSW9uVGl0bGUge1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW9uVGl0bGUge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25Ub2dnbGUgZXh0ZW5kcyBDb21wb25lbnRzLklvblRvZ2dsZSB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJb25Ub2dnbGUge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgaW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkZvY3VzOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkJsdXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25Ub29sYmFyIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25Ub29sYmFyIHtcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIElvblRvb2xiYXIge1xuICAgIHByb3RlY3RlZCB6OiBOZ1pvbmU7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgejogTmdab25lKTtcbn1cbiJdfQ==