import{a as W,b as X,c as Se,d as De,e as Ee,g as Ie,j as Me,k as Pe,l as ke,m as Re,n as Ae,o as Oe,w as E,x as Le,y as B}from"./chunk-IWCTQMW2.js";import{G as _e,H as fe,X as U,n as H,na as G,oa as ge,pa as ve,qa as be,ta as ye,va as Ce,wa as we,xa as Te,ya as xe}from"./chunk-2XORILJT.js";import{Bb as O,Ea as ee,Ia as c,Ja as h,Qb as L,Ra as te,Ta as ie,Ua as oe,W as g,Yb as pe,_a as D,aa as q,ab as m,bb as se,ca as z,cb as Y,dc as he,eb as a,ec as me,f as F,fa as j,fb as l,fc as ue,gb as ne,ic as N,ja as P,jb as R,ka as Q,la as K,lb as u,mb as x,pb as re,qb as ae,ra as J,rb as le,sa as w,ta as T,tb as d,ub as ce,vb as de,wa as $,wb as A,xb as v,ya as S,yb as b,za as k,zb as y}from"./chunk-NOL2URQB.js";import{a as f,b as V,f as M}from"./chunk-XBB5NZD7.js";var Be=["tooltip"],Fe=20;var ze=new z("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let r=j(E);return()=>r.scrollStrategies.reposition({scrollThrottle:Fe})}});function Ze(r){return()=>r.scrollStrategies.reposition({scrollThrottle:Fe})}var qe={provide:ze,deps:[E],useFactory:Ze};function Qe(){return{showDelay:0,hideDelay:0,touchendHideDelay:1500}}var Ke=new z("mat-tooltip-default-options",{providedIn:"root",factory:Qe});var Ne="tooltip-panel",Ve=Ee({passive:!0}),Je=8,$e=8,et=24,tt=200,je=(()=>{let n=class n{get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=W(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){this._disabled=W(e),this._disabled?this.hide(0):this._setupPointerEnterEventsIfNeeded()}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=X(e)}get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=X(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}get message(){return this._message}set message(e){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this._message,"tooltip"),this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage(),this._ngZone.runOutsideAngular(()=>{Promise.resolve().then(()=>{this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")})}))}get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}constructor(e,t,i,o,s,C,I,He,Ue,Z,_,Ge){this._overlay=e,this._elementRef=t,this._scrollDispatcher=i,this._viewContainerRef=o,this._ngZone=s,this._platform=C,this._ariaDescriber=I,this._focusMonitor=He,this._dir=Z,this._defaultOptions=_,this._position="below",this._positionAtOrigin=!1,this._disabled=!1,this._viewInitialized=!1,this._pointerExitEventsInitialized=!1,this._tooltipComponent=it,this._viewportMargin=8,this._cssClassPrefix="mat-mdc",this.touchGestures="auto",this._message="",this._passiveListeners=[],this._destroyed=new F,this._injector=j($),this._scrollStrategy=Ue,this._document=Ge,_&&(this._showDelay=_.showDelay,this._hideDelay=_.hideDelay,_.position&&(this.position=_.position),_.positionAtOrigin&&(this.positionAtOrigin=_.positionAtOrigin),_.touchGestures&&(this.touchGestures=_.touchGestures)),Z.change.pipe(g(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)}),this._viewportMargin=Je}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(g(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._passiveListeners.forEach(([t,i])=>{e.removeEventListener(t,i,Ve)}),this._passiveListeners.length=0,this._destroyed.next(),this._destroyed.complete(),this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(t);this._detach(),this._portal=this._portal||new Oe(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=i.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(g(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let o=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&o._origin instanceof S)return this._overlayRef;this._detach()}let t=this._scrollDispatcher.getAncestorScrollContainers(this._elementRef),i=this._overlay.position().flexibleConnectedTo(this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t);return i.positionChanges.pipe(g(this._destroyed)).subscribe(o=>{this._updateCurrentPositionClass(o.connectionPair),this._tooltipInstance&&o.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=this._overlay.create({direction:this._dir,positionStrategy:i,panelClass:`${this._cssClassPrefix}-${Ne}`,scrollStrategy:this._scrollStrategy()}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(g(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(g(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(g(this._destroyed)).subscribe(o=>{this._isTooltipVisible()&&o.keyCode===27&&!Se(o)&&(o.preventDefault(),o.stopPropagation(),this._ngZone.run(()=>this.hide(0)))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,i=this._getOrigin(),o=this._getOverlayPosition();t.withPositions([this._addOffset(f(f({},i.main),o.main)),this._addOffset(f(f({},i.fallback),o.fallback))])}_addOffset(e){let t=$e,i=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=i?-t:t:e.originX==="end"&&(e.offsetX=i?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,i;t=="above"||t=="below"?i={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?i={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(i={originX:"end",originY:"center"});let{x:o,y:s}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:o,originY:s}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,i;t=="above"?i={overlayX:"center",overlayY:"bottom"}:t=="below"?i={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?i={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(i={overlayX:"start",overlayY:"center"});let{x:o,y:s}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:o,overlayY:s}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),ie(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:i,originY:o}=e,s;if(t==="center"?this._dir&&this._dir.value==="rtl"?s=i==="end"?"left":"right":s=i==="start"?"left":"right":s=t==="bottom"&&o==="top"?"above":"below",s!==this._currentPosition){let C=this._overlayRef;if(C){let I=`${this._cssClassPrefix}-${Ne}-`;C.removePanelClass(I+this._currentPosition),C.addPanelClass(I+s)}this._currentPosition=s}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._passiveListeners.length||(this._platformSupportsMouseEvents()?this._passiveListeners.push(["mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}]):this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._passiveListeners.push(["touchstart",e=>{let t=e.targetTouches?.[0],i=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>this.show(void 0,i),this._defaultOptions.touchLongPressShowDelay??o)}])),this._addListeners(this._passiveListeners))}_setupPointerExitEventsIfNeeded(){if(this._pointerExitEventsInitialized)return;this._pointerExitEventsInitialized=!0;let e=[];if(this._platformSupportsMouseEvents())e.push(["mouseleave",t=>{let i=t.relatedTarget;(!i||!this._overlayRef?.overlayElement.contains(i))&&this.hide()}],["wheel",t=>this._wheelListener(t)]);else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let t=()=>{clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions.touchendHideDelay)};e.push(["touchend",t],["touchcancel",t])}this._addListeners(e),this._passiveListeners.push(...e)}_addListeners(e){e.forEach(([t,i])=>{this._elementRef.nativeElement.addEventListener(t,i,Ve)})}_platformSupportsMouseEvents(){return!this._platform.IOS&&!this._platform.ANDROID}_wheelListener(e){if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),i=this._elementRef.nativeElement;t!==i&&!i.contains(t)&&this.hide()}}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,i=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect="none"),(e==="on"||!t.draggable)&&(i.webkitUserDrag="none"),i.touchAction="none",i.webkitTapHighlightColor="transparent"}}};n.\u0275fac=function(t){return new(t||n)(h(E),h(S),h(Re),h(oe),h(te),h(De),h(Ie),h(Me),h(ze),h(ke),h(Ke,8),h(pe))},n.\u0275dir=K({type:n,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,i){t&2&&Y("mat-mdc-tooltip-disabled",i.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"],standalone:!0});let r=n;return r})(),it=(()=>{let n=class n{constructor(e,t,i){this._changeDetectorRef=e,this._elementRef=t,this._isMultiline=!1,this._closeOnInteraction=!1,this._isVisible=!1,this._onHide=new F,this._showAnimation="mat-mdc-tooltip-show",this._hideAnimation="mat-mdc-tooltip-hide",this._animationsDisabled=i==="NoopAnimations"}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>et&&e.width>=tt}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,i=this._showAnimation,o=this._hideAnimation;if(t.classList.remove(e?o:i),t.classList.add(e?i:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let s=getComputedStyle(t);(s.getPropertyValue("animation-duration")==="0s"||s.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}};n.\u0275fac=function(t){return new(t||n)(h(L),h(S),h(ee,8))},n.\u0275cmp=P({type:n,selectors:[["mat-tooltip-component"]],viewQuery:function(t,i){if(t&1&&re(Be,7),t&2){let o;ae(o=le())&&(i._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostVars:2,hostBindings:function(t,i){t&1&&u("mouseleave",function(s){return i._handleMouseLeave(s)}),t&2&&se("zoom",i.isVisible()?1:null)},standalone:!0,features:[O],decls:4,vars:4,consts:[["tooltip",""],[1,"mdc-tooltip","mdc-tooltip--shown","mat-mdc-tooltip",3,"animationend","ngClass"],[1,"mdc-tooltip__surface","mdc-tooltip__surface-animation"]],template:function(t,i){if(t&1){let o=R();a(0,"div",1,0),u("animationend",function(C){return w(o),T(i._handleAnimationEnd(C))}),a(2,"div",2),d(3),l()()}t&2&&(Y("mdc-tooltip--multiline",i._isMultiline),m("ngClass",i.tooltipClass),c(3),ce(i.message))},dependencies:[he],styles:['.mdc-tooltip__surface{word-break:break-all;word-break:var(--mdc-tooltip-word-break, normal);overflow-wrap:anywhere}.mdc-tooltip--showing-transition .mdc-tooltip__surface-animation{transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-tooltip--hide-transition .mdc-tooltip__surface-animation{transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-tooltip{position:fixed;display:none;z-index:9}.mdc-tooltip-wrapper--rich{position:relative}.mdc-tooltip--shown,.mdc-tooltip--showing,.mdc-tooltip--hide{display:inline-flex}.mdc-tooltip--shown.mdc-tooltip--rich,.mdc-tooltip--showing.mdc-tooltip--rich,.mdc-tooltip--hide.mdc-tooltip--rich{display:inline-block;left:-320px;position:absolute}.mdc-tooltip__surface{line-height:16px;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center}.mdc-tooltip__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-tooltip__surface::before{border-color:CanvasText}}.mdc-tooltip--rich .mdc-tooltip__surface{align-items:flex-start;display:flex;flex-direction:column;min-height:24px;min-width:40px;max-width:320px;position:relative}.mdc-tooltip--multiline .mdc-tooltip__surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mdc-tooltip__surface,.mdc-tooltip--multiline .mdc-tooltip__surface[dir=rtl]{text-align:right}.mdc-tooltip__surface .mdc-tooltip__title{margin:0 8px}.mdc-tooltip__surface .mdc-tooltip__content{max-width:calc(200px - 2*8px);margin:8px;text-align:left}[dir=rtl] .mdc-tooltip__surface .mdc-tooltip__content,.mdc-tooltip__surface .mdc-tooltip__content[dir=rtl]{text-align:right}.mdc-tooltip--rich .mdc-tooltip__surface .mdc-tooltip__content{max-width:calc(320px - 2*8px);align-self:stretch}.mdc-tooltip__surface .mdc-tooltip__content-link{text-decoration:none}.mdc-tooltip--rich-actions,.mdc-tooltip__content,.mdc-tooltip__title{z-index:1}.mdc-tooltip__surface-animation{opacity:0;transform:scale(0.8);will-change:transform,opacity}.mdc-tooltip--shown .mdc-tooltip__surface-animation{transform:scale(1);opacity:1}.mdc-tooltip--hide .mdc-tooltip__surface-animation{transform:scale(1)}.mdc-tooltip__caret-surface-top,.mdc-tooltip__caret-surface-bottom{position:absolute;height:24px;width:24px;transform:rotate(35deg) skewY(20deg) scaleX(0.9396926208)}.mdc-tooltip__caret-surface-top .mdc-elevation-overlay,.mdc-tooltip__caret-surface-bottom .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-tooltip__caret-surface-bottom{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);outline:1px solid rgba(0,0,0,0);z-index:-1}@media screen and (forced-colors: active){.mdc-tooltip__caret-surface-bottom{outline-color:CanvasText}}.mat-mdc-tooltip .mdc-tooltip__surface{background-color:var(--mdc-plain-tooltip-container-color)}.mat-mdc-tooltip .mdc-tooltip__surface{border-radius:var(--mdc-plain-tooltip-container-shape)}.mat-mdc-tooltip .mdc-tooltip__caret-surface-top,.mat-mdc-tooltip .mdc-tooltip__caret-surface-bottom{border-radius:var(--mdc-plain-tooltip-container-shape)}.mat-mdc-tooltip .mdc-tooltip__surface{color:var(--mdc-plain-tooltip-supporting-text-color)}.mat-mdc-tooltip .mdc-tooltip__surface{font-family:var(--mdc-plain-tooltip-supporting-text-font);line-height:var(--mdc-plain-tooltip-supporting-text-line-height);font-size:var(--mdc-plain-tooltip-supporting-text-size);font-weight:var(--mdc-plain-tooltip-supporting-text-weight);letter-spacing:var(--mdc-plain-tooltip-supporting-text-tracking)}.mat-mdc-tooltip{position:relative;transform:scale(0)}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}'],encapsulation:2,changeDetection:0});let r=n;return r})();var Ye=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=Q({type:n}),n.\u0275inj=q({providers:[qe],imports:[Pe,N,Le,B,B,Ae]});let r=n;return r})();function st(r,n){r&1&&(a(0,"option",18),d(1,"Cargando..."),l())}function nt(r,n){if(r&1&&(a(0,"option",19),d(1),l()),r&2){let p=n.$implicit;m("value",p.nombre+" "+p.apellido),c(),A(" ",p.nombre," ",p.apellido," ")}}function rt(r,n){r&1&&(a(0,"option",18),d(1," Cargando... "),l())}function at(r,n){if(r&1&&(a(0,"option",19),d(1),l()),r&2){let p=n.$implicit;m("value",p.nombre),c(),de(" ",p.nombre," ")}}function lt(r,n){r&1&&(a(0,"option",18),d(1,"Cargando..."),l())}function ct(r,n){if(r&1&&(a(0,"option",19),d(1),l()),r&2){let p=n.$implicit;m("value",p.nombre+" "+p.apellido),c(),A(" ",p.nombre," ",p.apellido," ")}}function dt(r,n){if(r&1){let p=R();a(0,"div",20)(1,"span",21),d(2),l(),a(3,"div",22)(4,"div",23)(5,"span",24),d(6,"R"),l(),a(7,"input",25),y("ngModelChange",function(t){let i=w(p).index,o=x();return b(o.responsableChecklistSeleccionado[i],t)||(o.responsableChecklistSeleccionado[i]=t),T(t)}),u("ngModelChange",function(){w(p);let t=x();return T(t.checkResponsableStatus())}),l()(),a(8,"div",23)(9,"span",24),d(10,"A"),l(),a(11,"input",25),y("ngModelChange",function(t){let i=w(p).index,o=x();return b(o.auditorChecklistSeleccionado[i],t)||(o.auditorChecklistSeleccionado[i]=t),T(t)}),u("ngModelChange",function(t){let i=w(p).index,o=x();return T(o.auditorChecklistSeleccionado[i]!==void 0&&(o.auditorChecklistSeleccionado[i]=t))}),l()()()()}if(r&2){let p=n.$implicit,e=n.index,t=x();c(2),A("",e+1,". ",p.valor,""),c(5),v("ngModel",t.responsableChecklistSeleccionado[e]),c(4),v("ngModel",t.auditorChecklistSeleccionado[e])}}var Zt=(()=>{let n=class n{constructor(e){this.cdr=e,this.campos=[],this.ambiente="",this.cerrar=new k,this.guardar=new k,this.editar=new k,this.usuarios=[],this.microservicios=[],this.responsable="",this.tag="",this.microservicio="",this.auditor="",this.fecha="",this.responsableChecklistSeleccionado=[],this.auditorChecklistSeleccionado=[],this.despliegueEditado={},this.editando=!1,this.loadingUsuarios=!0,this.loadingMicroservicios=!0}ngOnInit(){this.cargarUsuarios(),this.cargarMicroservicios(),this.despliegue&&this.inicializarDespliegue()}ngOnChanges(e){return M(this,null,function*(){e.ambiente&&(this.loadingMicroservicios=!0,yield this.cargarMicroservicios())})}cargarUsuarios(){return M(this,null,function*(){let e=H(G,"usuarios"),t=yield U(e);this.usuarios=t.docs.map(i=>f({id:i.id},i.data())),this.loadingUsuarios=!1,this.cdr.detectChanges()})}cargarMicroservicios(){return M(this,null,function*(){let e=H(G,"microservicios"),t=_e(e,fe("ambiente","==",this.ambiente)),i=yield U(t);this.microservicios=i.docs.map(o=>f({id:o.id},o.data())),this.loadingMicroservicios=!1,this.cdr.detectChanges()})}inicializarDespliegue(){this.responsableChecklistSeleccionado=new Array(this.campos.length).fill(!1),this.auditorChecklistSeleccionado=new Array(this.campos.length).fill(!1),this.responsable=this.despliegue.responsable,this.tag=this.despliegue.tag,this.microservicio=this.despliegue.microservicio,this.auditor=this.despliegue.auditor,this.fecha=this.despliegue.fecha,this.despliegue.checklist&&Array.isArray(this.despliegue.checklist)&&(this.responsableChecklistSeleccionado=this.campos.map(e=>this.despliegue.checklist.some(t=>t.valor===e.valor&&t.responsable)),this.auditorChecklistSeleccionado=this.campos.map(e=>this.despliegue.checklist.some(t=>t.valor===e.valor&&t.auditor))),this.despliegueEditado=V(f({},this.despliegue),{responsable:this.responsable,tag:this.tag,microservicio:this.microservicio,auditor:this.auditor,fecha:this.fecha,responsableChecklistSeleccionado:this.responsableChecklistSeleccionado,auditorChecklistSeleccionado:this.auditorChecklistSeleccionado}),this.editando=!0}get todosMarcados(){return this.responsableChecklistSeleccionado.every(e=>e)}get inputsLlenos(){return this.responsable.trim()!==""&&this.tag.trim()!==""&&this.microservicio.trim()!==""&&this.fecha.trim()!==""}get todosResponsablesMarcados(){return this.responsableChecklistSeleccionado.length===this.campos.length&&this.responsableChecklistSeleccionado.every(e=>e)}get puedeGuardar(){return this.inputsLlenos&&this.todosResponsablesMarcados}checkResponsableStatus(){this.cdr.markForCheck()}guardarDatos(){if(this.editando)this.despliegueEditado=V(f({},this.despliegueEditado),{responsable:this.responsable,tag:this.tag,microservicio:this.microservicio,auditor:this.auditor,fecha:this.fecha,checklist:this.campos.map((e,t)=>({valor:e.valor,responsable:this.responsableChecklistSeleccionado[t],auditor:this.auditorChecklistSeleccionado[t]||null}))}),this.editar.emit(this.despliegueEditado);else{let e={responsable:this.responsable,tag:this.tag,microservicio:this.microservicio,auditor:this.auditor,fecha:this.fecha,checklist:this.campos.map((t,i)=>({valor:t.valor,responsable:this.responsableChecklistSeleccionado[i],auditor:this.auditorChecklistSeleccionado[i]||null}))};this.guardar.emit(e)}}getUsuariosFiltradosParaResponsable(){return this.usuarios.filter(e=>e.nombre+" "+e.apellido!==this.auditor)}getUsuariosFiltradosParaAuditor(){return this.usuarios.filter(e=>e.nombre+" "+e.apellido!==this.responsable)}};n.\u0275fac=function(t){return new(t||n)(h(L))},n.\u0275cmp=P({type:n,selectors:[["app-nuevo-despliegue"]],inputs:{campos:"campos",despliegue:"despliegue",ambiente:"ambiente"},outputs:{cerrar:"cerrar",guardar:"guardar",editar:"editar"},standalone:!0,features:[J,O],decls:45,vars:14,consts:[[1,"fixed","inset-0","flex","items-center","justify-center","bg-black","bg-opacity-50","z-50"],[1,"bg-gray-900","rounded-lg","overflow-hidden","p-6","w-full","md:w-3/4","lg:w-1/2","mx-auto"],[1,"flex","flex-col","md:flex-row"],[1,"w-full","md:w-3/5","p-3","flex","flex-col"],[1,"text-2xl","font-bold","text-center","text-white","mb-4"],[1,"flex-grow","space-y-4"],[1,"block","text-white","mb-1"],[1,"w-full","h-10","rounded-md","text-gray-900","bg-gray-200","border","border-gray-400","focus:outline-none","focus:ring-2","focus:ring-indigo-600",3,"ngModelChange","ngModel"],["disabled","",4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],["type","date",1,"w-full","h-10","rounded-md","text-gray-900","bg-gray-200","border","border-gray-400","focus:outline-none","focus:ring-2","focus:ring-indigo-600",3,"ngModelChange","ngModel"],[1,"hidden","md:block","border-l","border-gray-700","mx-6"],[1,"w-full","md:w-2/5","p-3","flex","flex-col"],[1,"w-full","bg-gray-800","p-3","rounded-lg","flex","flex-col","h-96","overflow-y-auto","scrollbar-thin","scrollbar-thumb-gray-700","scrollbar-track-gray-900","scrollbar-thumb-rounded-full","scrollbar-track-rounded-full","pb-4"],["class","flex items-center justify-between p-2 bg-gray-700 rounded-md mb-2 last:mb-4",4,"ngFor","ngForOf"],[1,"flex","justify-end","mt-6"],[1,"btn-primary","mr-1",3,"click"],["matTooltip","No se puede guardar hasta que todos los campos est\xE9n llenos y todos los responsables est\xE9n marcados",1,"btn-primary",3,"click","disabled","matTooltipDisabled"],["disabled",""],[3,"value"],[1,"flex","items-center","justify-between","p-2","bg-gray-700","rounded-md","mb-2","last:mb-4"],[1,"text-white","mr-4"],[1,"flex","items-center","space-x-2"],[1,"flex","flex-col","items-center"],[1,"text-white"],["type","checkbox",1,"transform","scale-100",3,"ngModelChange","ngModel"]],template:function(t,i){t&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2",4),d(5," Nuevo Despliegue "),l(),a(6,"div",5)(7,"div")(8,"label",6),d(9,"Responsable"),l(),a(10,"select",7),y("ngModelChange",function(s){return b(i.responsable,s)||(i.responsable=s),s}),u("ngModelChange",function(s){return i.despliegueEditado.responsable=s,i.checkResponsableStatus()}),D(11,st,2,0,"option",8)(12,nt,2,3,"option",9),l()(),a(13,"div")(14,"label",6),d(15,"Tag"),l(),a(16,"input",7),y("ngModelChange",function(s){return b(i.tag,s)||(i.tag=s),s}),u("ngModelChange",function(s){return i.despliegueEditado.tag=s,i.checkResponsableStatus()}),l()(),a(17,"div")(18,"label",6),d(19,"Microservicio"),l(),a(20,"select",7),y("ngModelChange",function(s){return b(i.microservicio,s)||(i.microservicio=s),s}),u("ngModelChange",function(s){return i.despliegueEditado.microservicio=s,i.checkResponsableStatus()}),D(21,rt,2,0,"option",8)(22,at,2,2,"option",9),l()(),a(23,"div")(24,"label",6),d(25,"Auditor"),l(),a(26,"select",7),y("ngModelChange",function(s){return b(i.auditor,s)||(i.auditor=s),s}),u("ngModelChange",function(s){return i.despliegueEditado.auditor=s,i.checkResponsableStatus()}),D(27,lt,2,0,"option",8)(28,ct,2,3,"option",9),l()(),a(29,"div")(30,"label",6),d(31,"Fecha"),l(),a(32,"input",10),y("ngModelChange",function(s){return b(i.fecha,s)||(i.fecha=s),s}),u("ngModelChange",function(s){return i.despliegueEditado.fecha=s,i.checkResponsableStatus()}),l()()()(),ne(33,"div",11),a(34,"div",12)(35,"h2",4),d(36," Checklist "),l(),a(37,"div",13)(38,"div",5),D(39,dt,12,4,"div",14),l()()()(),a(40,"div",15)(41,"button",16),u("click",function(){return i.cerrar.emit()}),d(42,"Cancelar"),l(),a(43,"button",17),u("click",function(){return i.guardarDatos()}),d(44," Guardar "),l()()()()),t&2&&(c(10),v("ngModel",i.responsable),c(),m("ngIf",i.loadingUsuarios),c(),m("ngForOf",i.getUsuariosFiltradosParaResponsable()),c(4),v("ngModel",i.tag),c(4),v("ngModel",i.microservicio),c(),m("ngIf",i.loadingMicroservicios),c(),m("ngForOf",i.microservicios),c(4),v("ngModel",i.auditor),c(),m("ngIf",i.loadingUsuarios),c(),m("ngForOf",i.getUsuariosFiltradosParaAuditor()),c(4),v("ngModel",i.fecha),c(7),m("ngForOf",i.campos),c(4),m("disabled",!i.puedeGuardar)("matTooltipDisabled",i.puedeGuardar))},dependencies:[N,me,ue,xe,we,Te,ve,ge,Ce,be,ye,Ye,je],encapsulation:2});let r=n;return r})();export{Zt as a};