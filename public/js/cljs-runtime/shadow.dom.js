goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_18539 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_18539(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_18541 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_18541(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17020 = coll;
var G__17021 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17020,G__17021) : shadow.dom.lazy_native_coll_seq.call(null,G__17020,G__17021));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__17053 = arguments.length;
switch (G__17053) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__17055 = arguments.length;
switch (G__17055) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__17061 = arguments.length;
switch (G__17061) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__17063 = arguments.length;
switch (G__17063) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__17068 = arguments.length;
switch (G__17068) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__17080 = arguments.length;
switch (G__17080) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e17094){if((e17094 instanceof Object)){
var e = e17094;
return console.log("didnt support attachEvent",el,e);
} else {
throw e17094;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__17103 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__17104 = null;
var count__17105 = (0);
var i__17106 = (0);
while(true){
if((i__17106 < count__17105)){
var el = chunk__17104.cljs$core$IIndexed$_nth$arity$2(null,i__17106);
var handler_18559__$1 = ((function (seq__17103,chunk__17104,count__17105,i__17106,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17103,chunk__17104,count__17105,i__17106,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18559__$1);


var G__18560 = seq__17103;
var G__18561 = chunk__17104;
var G__18562 = count__17105;
var G__18563 = (i__17106 + (1));
seq__17103 = G__18560;
chunk__17104 = G__18561;
count__17105 = G__18562;
i__17106 = G__18563;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17103);
if(temp__5804__auto__){
var seq__17103__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17103__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17103__$1);
var G__18564 = cljs.core.chunk_rest(seq__17103__$1);
var G__18565 = c__5568__auto__;
var G__18566 = cljs.core.count(c__5568__auto__);
var G__18567 = (0);
seq__17103 = G__18564;
chunk__17104 = G__18565;
count__17105 = G__18566;
i__17106 = G__18567;
continue;
} else {
var el = cljs.core.first(seq__17103__$1);
var handler_18568__$1 = ((function (seq__17103,chunk__17104,count__17105,i__17106,el,seq__17103__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17103,chunk__17104,count__17105,i__17106,el,seq__17103__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18568__$1);


var G__18572 = cljs.core.next(seq__17103__$1);
var G__18573 = null;
var G__18574 = (0);
var G__18575 = (0);
seq__17103 = G__18572;
chunk__17104 = G__18573;
count__17105 = G__18574;
i__17106 = G__18575;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__17138 = arguments.length;
switch (G__17138) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__17160 = cljs.core.seq(events);
var chunk__17161 = null;
var count__17162 = (0);
var i__17163 = (0);
while(true){
if((i__17163 < count__17162)){
var vec__17179 = chunk__17161.cljs$core$IIndexed$_nth$arity$2(null,i__17163);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17179,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17179,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18579 = seq__17160;
var G__18580 = chunk__17161;
var G__18581 = count__17162;
var G__18582 = (i__17163 + (1));
seq__17160 = G__18579;
chunk__17161 = G__18580;
count__17162 = G__18581;
i__17163 = G__18582;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17160);
if(temp__5804__auto__){
var seq__17160__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17160__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17160__$1);
var G__18583 = cljs.core.chunk_rest(seq__17160__$1);
var G__18584 = c__5568__auto__;
var G__18585 = cljs.core.count(c__5568__auto__);
var G__18586 = (0);
seq__17160 = G__18583;
chunk__17161 = G__18584;
count__17162 = G__18585;
i__17163 = G__18586;
continue;
} else {
var vec__17185 = cljs.core.first(seq__17160__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17185,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17185,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18587 = cljs.core.next(seq__17160__$1);
var G__18588 = null;
var G__18589 = (0);
var G__18590 = (0);
seq__17160 = G__18587;
chunk__17161 = G__18588;
count__17162 = G__18589;
i__17163 = G__18590;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__17193 = cljs.core.seq(styles);
var chunk__17194 = null;
var count__17195 = (0);
var i__17196 = (0);
while(true){
if((i__17196 < count__17195)){
var vec__17221 = chunk__17194.cljs$core$IIndexed$_nth$arity$2(null,i__17196);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17221,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17221,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18592 = seq__17193;
var G__18593 = chunk__17194;
var G__18594 = count__17195;
var G__18595 = (i__17196 + (1));
seq__17193 = G__18592;
chunk__17194 = G__18593;
count__17195 = G__18594;
i__17196 = G__18595;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17193);
if(temp__5804__auto__){
var seq__17193__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17193__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17193__$1);
var G__18597 = cljs.core.chunk_rest(seq__17193__$1);
var G__18598 = c__5568__auto__;
var G__18599 = cljs.core.count(c__5568__auto__);
var G__18600 = (0);
seq__17193 = G__18597;
chunk__17194 = G__18598;
count__17195 = G__18599;
i__17196 = G__18600;
continue;
} else {
var vec__17246 = cljs.core.first(seq__17193__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17246,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17246,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18601 = cljs.core.next(seq__17193__$1);
var G__18602 = null;
var G__18603 = (0);
var G__18604 = (0);
seq__17193 = G__18601;
chunk__17194 = G__18602;
count__17195 = G__18603;
i__17196 = G__18604;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__17265_18605 = key;
var G__17265_18606__$1 = (((G__17265_18605 instanceof cljs.core.Keyword))?G__17265_18605.fqn:null);
switch (G__17265_18606__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_18610 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_18610,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_18610,"aria-");
}
})())){
el.setAttribute(ks_18610,value);
} else {
(el[ks_18610] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__17317){
var map__17318 = p__17317;
var map__17318__$1 = cljs.core.__destructure_map(map__17318);
var props = map__17318__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17318__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__17321 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17321,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17321,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17321,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__17324 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__17324,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__17324;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__17330 = arguments.length;
switch (G__17330) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__17336){
var vec__17339 = p__17336;
var seq__17340 = cljs.core.seq(vec__17339);
var first__17341 = cljs.core.first(seq__17340);
var seq__17340__$1 = cljs.core.next(seq__17340);
var nn = first__17341;
var first__17341__$1 = cljs.core.first(seq__17340__$1);
var seq__17340__$2 = cljs.core.next(seq__17340__$1);
var np = first__17341__$1;
var nc = seq__17340__$2;
var node = vec__17339;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17346 = nn;
var G__17347 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17346,G__17347) : create_fn.call(null,G__17346,G__17347));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17349 = nn;
var G__17350 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17349,G__17350) : create_fn.call(null,G__17349,G__17350));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__17360 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17360,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17360,(1),null);
var seq__17366_18635 = cljs.core.seq(node_children);
var chunk__17367_18636 = null;
var count__17368_18637 = (0);
var i__17369_18638 = (0);
while(true){
if((i__17369_18638 < count__17368_18637)){
var child_struct_18640 = chunk__17367_18636.cljs$core$IIndexed$_nth$arity$2(null,i__17369_18638);
var children_18641 = shadow.dom.dom_node(child_struct_18640);
if(cljs.core.seq_QMARK_(children_18641)){
var seq__17446_18642 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18641));
var chunk__17448_18643 = null;
var count__17449_18644 = (0);
var i__17450_18645 = (0);
while(true){
if((i__17450_18645 < count__17449_18644)){
var child_18646 = chunk__17448_18643.cljs$core$IIndexed$_nth$arity$2(null,i__17450_18645);
if(cljs.core.truth_(child_18646)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18646);


var G__18647 = seq__17446_18642;
var G__18648 = chunk__17448_18643;
var G__18649 = count__17449_18644;
var G__18650 = (i__17450_18645 + (1));
seq__17446_18642 = G__18647;
chunk__17448_18643 = G__18648;
count__17449_18644 = G__18649;
i__17450_18645 = G__18650;
continue;
} else {
var G__18651 = seq__17446_18642;
var G__18652 = chunk__17448_18643;
var G__18653 = count__17449_18644;
var G__18654 = (i__17450_18645 + (1));
seq__17446_18642 = G__18651;
chunk__17448_18643 = G__18652;
count__17449_18644 = G__18653;
i__17450_18645 = G__18654;
continue;
}
} else {
var temp__5804__auto___18655 = cljs.core.seq(seq__17446_18642);
if(temp__5804__auto___18655){
var seq__17446_18656__$1 = temp__5804__auto___18655;
if(cljs.core.chunked_seq_QMARK_(seq__17446_18656__$1)){
var c__5568__auto___18657 = cljs.core.chunk_first(seq__17446_18656__$1);
var G__18658 = cljs.core.chunk_rest(seq__17446_18656__$1);
var G__18659 = c__5568__auto___18657;
var G__18660 = cljs.core.count(c__5568__auto___18657);
var G__18661 = (0);
seq__17446_18642 = G__18658;
chunk__17448_18643 = G__18659;
count__17449_18644 = G__18660;
i__17450_18645 = G__18661;
continue;
} else {
var child_18663 = cljs.core.first(seq__17446_18656__$1);
if(cljs.core.truth_(child_18663)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18663);


var G__18664 = cljs.core.next(seq__17446_18656__$1);
var G__18665 = null;
var G__18666 = (0);
var G__18667 = (0);
seq__17446_18642 = G__18664;
chunk__17448_18643 = G__18665;
count__17449_18644 = G__18666;
i__17450_18645 = G__18667;
continue;
} else {
var G__18668 = cljs.core.next(seq__17446_18656__$1);
var G__18669 = null;
var G__18670 = (0);
var G__18671 = (0);
seq__17446_18642 = G__18668;
chunk__17448_18643 = G__18669;
count__17449_18644 = G__18670;
i__17450_18645 = G__18671;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18641);
}


var G__18672 = seq__17366_18635;
var G__18673 = chunk__17367_18636;
var G__18674 = count__17368_18637;
var G__18675 = (i__17369_18638 + (1));
seq__17366_18635 = G__18672;
chunk__17367_18636 = G__18673;
count__17368_18637 = G__18674;
i__17369_18638 = G__18675;
continue;
} else {
var temp__5804__auto___18676 = cljs.core.seq(seq__17366_18635);
if(temp__5804__auto___18676){
var seq__17366_18677__$1 = temp__5804__auto___18676;
if(cljs.core.chunked_seq_QMARK_(seq__17366_18677__$1)){
var c__5568__auto___18678 = cljs.core.chunk_first(seq__17366_18677__$1);
var G__18679 = cljs.core.chunk_rest(seq__17366_18677__$1);
var G__18680 = c__5568__auto___18678;
var G__18681 = cljs.core.count(c__5568__auto___18678);
var G__18682 = (0);
seq__17366_18635 = G__18679;
chunk__17367_18636 = G__18680;
count__17368_18637 = G__18681;
i__17369_18638 = G__18682;
continue;
} else {
var child_struct_18683 = cljs.core.first(seq__17366_18677__$1);
var children_18684 = shadow.dom.dom_node(child_struct_18683);
if(cljs.core.seq_QMARK_(children_18684)){
var seq__17476_18685 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18684));
var chunk__17478_18686 = null;
var count__17479_18687 = (0);
var i__17480_18688 = (0);
while(true){
if((i__17480_18688 < count__17479_18687)){
var child_18689 = chunk__17478_18686.cljs$core$IIndexed$_nth$arity$2(null,i__17480_18688);
if(cljs.core.truth_(child_18689)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18689);


var G__18690 = seq__17476_18685;
var G__18691 = chunk__17478_18686;
var G__18692 = count__17479_18687;
var G__18693 = (i__17480_18688 + (1));
seq__17476_18685 = G__18690;
chunk__17478_18686 = G__18691;
count__17479_18687 = G__18692;
i__17480_18688 = G__18693;
continue;
} else {
var G__18694 = seq__17476_18685;
var G__18696 = chunk__17478_18686;
var G__18697 = count__17479_18687;
var G__18698 = (i__17480_18688 + (1));
seq__17476_18685 = G__18694;
chunk__17478_18686 = G__18696;
count__17479_18687 = G__18697;
i__17480_18688 = G__18698;
continue;
}
} else {
var temp__5804__auto___18699__$1 = cljs.core.seq(seq__17476_18685);
if(temp__5804__auto___18699__$1){
var seq__17476_18700__$1 = temp__5804__auto___18699__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17476_18700__$1)){
var c__5568__auto___18701 = cljs.core.chunk_first(seq__17476_18700__$1);
var G__18702 = cljs.core.chunk_rest(seq__17476_18700__$1);
var G__18703 = c__5568__auto___18701;
var G__18704 = cljs.core.count(c__5568__auto___18701);
var G__18705 = (0);
seq__17476_18685 = G__18702;
chunk__17478_18686 = G__18703;
count__17479_18687 = G__18704;
i__17480_18688 = G__18705;
continue;
} else {
var child_18707 = cljs.core.first(seq__17476_18700__$1);
if(cljs.core.truth_(child_18707)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18707);


var G__18709 = cljs.core.next(seq__17476_18700__$1);
var G__18710 = null;
var G__18711 = (0);
var G__18712 = (0);
seq__17476_18685 = G__18709;
chunk__17478_18686 = G__18710;
count__17479_18687 = G__18711;
i__17480_18688 = G__18712;
continue;
} else {
var G__18713 = cljs.core.next(seq__17476_18700__$1);
var G__18714 = null;
var G__18715 = (0);
var G__18716 = (0);
seq__17476_18685 = G__18713;
chunk__17478_18686 = G__18714;
count__17479_18687 = G__18715;
i__17480_18688 = G__18716;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18684);
}


var G__18717 = cljs.core.next(seq__17366_18677__$1);
var G__18718 = null;
var G__18719 = (0);
var G__18720 = (0);
seq__17366_18635 = G__18717;
chunk__17367_18636 = G__18718;
count__17368_18637 = G__18719;
i__17369_18638 = G__18720;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__17514 = cljs.core.seq(node);
var chunk__17515 = null;
var count__17516 = (0);
var i__17517 = (0);
while(true){
if((i__17517 < count__17516)){
var n = chunk__17515.cljs$core$IIndexed$_nth$arity$2(null,i__17517);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18722 = seq__17514;
var G__18723 = chunk__17515;
var G__18724 = count__17516;
var G__18725 = (i__17517 + (1));
seq__17514 = G__18722;
chunk__17515 = G__18723;
count__17516 = G__18724;
i__17517 = G__18725;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17514);
if(temp__5804__auto__){
var seq__17514__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17514__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17514__$1);
var G__18726 = cljs.core.chunk_rest(seq__17514__$1);
var G__18727 = c__5568__auto__;
var G__18728 = cljs.core.count(c__5568__auto__);
var G__18729 = (0);
seq__17514 = G__18726;
chunk__17515 = G__18727;
count__17516 = G__18728;
i__17517 = G__18729;
continue;
} else {
var n = cljs.core.first(seq__17514__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18730 = cljs.core.next(seq__17514__$1);
var G__18731 = null;
var G__18732 = (0);
var G__18733 = (0);
seq__17514 = G__18730;
chunk__17515 = G__18731;
count__17516 = G__18732;
i__17517 = G__18733;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__17538 = arguments.length;
switch (G__17538) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__17548 = arguments.length;
switch (G__17548) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__17575 = arguments.length;
switch (G__17575) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18746 = arguments.length;
var i__5770__auto___18747 = (0);
while(true){
if((i__5770__auto___18747 < len__5769__auto___18746)){
args__5775__auto__.push((arguments[i__5770__auto___18747]));

var G__18748 = (i__5770__auto___18747 + (1));
i__5770__auto___18747 = G__18748;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__17598_18749 = cljs.core.seq(nodes);
var chunk__17599_18750 = null;
var count__17601_18751 = (0);
var i__17602_18752 = (0);
while(true){
if((i__17602_18752 < count__17601_18751)){
var node_18753 = chunk__17599_18750.cljs$core$IIndexed$_nth$arity$2(null,i__17602_18752);
fragment.appendChild(shadow.dom._to_dom(node_18753));


var G__18754 = seq__17598_18749;
var G__18755 = chunk__17599_18750;
var G__18756 = count__17601_18751;
var G__18757 = (i__17602_18752 + (1));
seq__17598_18749 = G__18754;
chunk__17599_18750 = G__18755;
count__17601_18751 = G__18756;
i__17602_18752 = G__18757;
continue;
} else {
var temp__5804__auto___18758 = cljs.core.seq(seq__17598_18749);
if(temp__5804__auto___18758){
var seq__17598_18760__$1 = temp__5804__auto___18758;
if(cljs.core.chunked_seq_QMARK_(seq__17598_18760__$1)){
var c__5568__auto___18761 = cljs.core.chunk_first(seq__17598_18760__$1);
var G__18765 = cljs.core.chunk_rest(seq__17598_18760__$1);
var G__18766 = c__5568__auto___18761;
var G__18767 = cljs.core.count(c__5568__auto___18761);
var G__18768 = (0);
seq__17598_18749 = G__18765;
chunk__17599_18750 = G__18766;
count__17601_18751 = G__18767;
i__17602_18752 = G__18768;
continue;
} else {
var node_18769 = cljs.core.first(seq__17598_18760__$1);
fragment.appendChild(shadow.dom._to_dom(node_18769));


var G__18771 = cljs.core.next(seq__17598_18760__$1);
var G__18772 = null;
var G__18773 = (0);
var G__18774 = (0);
seq__17598_18749 = G__18771;
chunk__17599_18750 = G__18772;
count__17601_18751 = G__18773;
i__17602_18752 = G__18774;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq17590){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17590));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__17636_18775 = cljs.core.seq(scripts);
var chunk__17637_18776 = null;
var count__17638_18777 = (0);
var i__17639_18778 = (0);
while(true){
if((i__17639_18778 < count__17638_18777)){
var vec__17654_18780 = chunk__17637_18776.cljs$core$IIndexed$_nth$arity$2(null,i__17639_18778);
var script_tag_18781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17654_18780,(0),null);
var script_body_18782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17654_18780,(1),null);
eval(script_body_18782);


var G__18786 = seq__17636_18775;
var G__18787 = chunk__17637_18776;
var G__18788 = count__17638_18777;
var G__18789 = (i__17639_18778 + (1));
seq__17636_18775 = G__18786;
chunk__17637_18776 = G__18787;
count__17638_18777 = G__18788;
i__17639_18778 = G__18789;
continue;
} else {
var temp__5804__auto___18793 = cljs.core.seq(seq__17636_18775);
if(temp__5804__auto___18793){
var seq__17636_18794__$1 = temp__5804__auto___18793;
if(cljs.core.chunked_seq_QMARK_(seq__17636_18794__$1)){
var c__5568__auto___18795 = cljs.core.chunk_first(seq__17636_18794__$1);
var G__18796 = cljs.core.chunk_rest(seq__17636_18794__$1);
var G__18797 = c__5568__auto___18795;
var G__18798 = cljs.core.count(c__5568__auto___18795);
var G__18799 = (0);
seq__17636_18775 = G__18796;
chunk__17637_18776 = G__18797;
count__17638_18777 = G__18798;
i__17639_18778 = G__18799;
continue;
} else {
var vec__17659_18800 = cljs.core.first(seq__17636_18794__$1);
var script_tag_18801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17659_18800,(0),null);
var script_body_18802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17659_18800,(1),null);
eval(script_body_18802);


var G__18803 = cljs.core.next(seq__17636_18794__$1);
var G__18804 = null;
var G__18805 = (0);
var G__18806 = (0);
seq__17636_18775 = G__18803;
chunk__17637_18776 = G__18804;
count__17638_18777 = G__18805;
i__17639_18778 = G__18806;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__17662){
var vec__17663 = p__17662;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17663,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17663,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__17686 = arguments.length;
switch (G__17686) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__17700 = cljs.core.seq(style_keys);
var chunk__17701 = null;
var count__17702 = (0);
var i__17703 = (0);
while(true){
if((i__17703 < count__17702)){
var it = chunk__17701.cljs$core$IIndexed$_nth$arity$2(null,i__17703);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18817 = seq__17700;
var G__18818 = chunk__17701;
var G__18819 = count__17702;
var G__18820 = (i__17703 + (1));
seq__17700 = G__18817;
chunk__17701 = G__18818;
count__17702 = G__18819;
i__17703 = G__18820;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17700);
if(temp__5804__auto__){
var seq__17700__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17700__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17700__$1);
var G__18821 = cljs.core.chunk_rest(seq__17700__$1);
var G__18822 = c__5568__auto__;
var G__18823 = cljs.core.count(c__5568__auto__);
var G__18824 = (0);
seq__17700 = G__18821;
chunk__17701 = G__18822;
count__17702 = G__18823;
i__17703 = G__18824;
continue;
} else {
var it = cljs.core.first(seq__17700__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18825 = cljs.core.next(seq__17700__$1);
var G__18826 = null;
var G__18827 = (0);
var G__18828 = (0);
seq__17700 = G__18825;
chunk__17701 = G__18826;
count__17702 = G__18827;
i__17703 = G__18828;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k17719,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__17729 = k17719;
var G__17729__$1 = (((G__17729 instanceof cljs.core.Keyword))?G__17729.fqn:null);
switch (G__17729__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17719,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__17734){
var vec__17735 = p__17734;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17735,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17735,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17718){
var self__ = this;
var G__17718__$1 = this;
return (new cljs.core.RecordIter((0),G__17718__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17720,other17721){
var self__ = this;
var this17720__$1 = this;
return (((!((other17721 == null)))) && ((((this17720__$1.constructor === other17721.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17720__$1.x,other17721.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17720__$1.y,other17721.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17720__$1.__extmap,other17721.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k17719){
var self__ = this;
var this__5350__auto____$1 = this;
var G__17788 = k17719;
var G__17788__$1 = (((G__17788 instanceof cljs.core.Keyword))?G__17788.fqn:null);
switch (G__17788__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17719);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__17718){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__17793 = cljs.core.keyword_identical_QMARK_;
var expr__17794 = k__5352__auto__;
if(cljs.core.truth_((pred__17793.cljs$core$IFn$_invoke$arity$2 ? pred__17793.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__17794) : pred__17793.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__17794)))){
return (new shadow.dom.Coordinate(G__17718,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17793.cljs$core$IFn$_invoke$arity$2 ? pred__17793.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__17794) : pred__17793.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__17794)))){
return (new shadow.dom.Coordinate(self__.x,G__17718,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__17718),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__17718){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__17718,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__17724){
var extmap__5385__auto__ = (function (){var G__17824 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17724,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__17724)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17824);
} else {
return G__17824;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__17724),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__17724),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k17839,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__17867 = k17839;
var G__17867__$1 = (((G__17867 instanceof cljs.core.Keyword))?G__17867.fqn:null);
switch (G__17867__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17839,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__17873){
var vec__17874 = p__17873;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17874,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17874,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17838){
var self__ = this;
var G__17838__$1 = this;
return (new cljs.core.RecordIter((0),G__17838__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17840,other17841){
var self__ = this;
var this17840__$1 = this;
return (((!((other17841 == null)))) && ((((this17840__$1.constructor === other17841.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17840__$1.w,other17841.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17840__$1.h,other17841.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17840__$1.__extmap,other17841.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k17839){
var self__ = this;
var this__5350__auto____$1 = this;
var G__17903 = k17839;
var G__17903__$1 = (((G__17903 instanceof cljs.core.Keyword))?G__17903.fqn:null);
switch (G__17903__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17839);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__17838){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__17916 = cljs.core.keyword_identical_QMARK_;
var expr__17917 = k__5352__auto__;
if(cljs.core.truth_((pred__17916.cljs$core$IFn$_invoke$arity$2 ? pred__17916.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__17917) : pred__17916.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__17917)))){
return (new shadow.dom.Size(G__17838,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17916.cljs$core$IFn$_invoke$arity$2 ? pred__17916.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__17917) : pred__17916.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__17917)))){
return (new shadow.dom.Size(self__.w,G__17838,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__17838),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__17838){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__17838,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__17845){
var extmap__5385__auto__ = (function (){var G__17943 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17845,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__17845)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17943);
} else {
return G__17943;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__17845),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__17845),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__18898 = (i + (1));
var G__18899 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__18898;
ret = G__18899;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18019){
var vec__18023 = p__18019;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18023,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18023,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__18032 = arguments.length;
switch (G__18032) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__18901 = ps;
var G__18902 = (i + (1));
el__$1 = G__18901;
i = G__18902;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__18116 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18116,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18116,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18116,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__18121_18912 = cljs.core.seq(props);
var chunk__18122_18913 = null;
var count__18123_18914 = (0);
var i__18124_18915 = (0);
while(true){
if((i__18124_18915 < count__18123_18914)){
var vec__18147_18916 = chunk__18122_18913.cljs$core$IIndexed$_nth$arity$2(null,i__18124_18915);
var k_18917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18147_18916,(0),null);
var v_18918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18147_18916,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_18917);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_18917),v_18918);


var G__18919 = seq__18121_18912;
var G__18920 = chunk__18122_18913;
var G__18921 = count__18123_18914;
var G__18922 = (i__18124_18915 + (1));
seq__18121_18912 = G__18919;
chunk__18122_18913 = G__18920;
count__18123_18914 = G__18921;
i__18124_18915 = G__18922;
continue;
} else {
var temp__5804__auto___18926 = cljs.core.seq(seq__18121_18912);
if(temp__5804__auto___18926){
var seq__18121_18927__$1 = temp__5804__auto___18926;
if(cljs.core.chunked_seq_QMARK_(seq__18121_18927__$1)){
var c__5568__auto___18928 = cljs.core.chunk_first(seq__18121_18927__$1);
var G__18929 = cljs.core.chunk_rest(seq__18121_18927__$1);
var G__18930 = c__5568__auto___18928;
var G__18931 = cljs.core.count(c__5568__auto___18928);
var G__18932 = (0);
seq__18121_18912 = G__18929;
chunk__18122_18913 = G__18930;
count__18123_18914 = G__18931;
i__18124_18915 = G__18932;
continue;
} else {
var vec__18160_18935 = cljs.core.first(seq__18121_18927__$1);
var k_18936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18160_18935,(0),null);
var v_18937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18160_18935,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_18936);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_18936),v_18937);


var G__18938 = cljs.core.next(seq__18121_18927__$1);
var G__18939 = null;
var G__18940 = (0);
var G__18941 = (0);
seq__18121_18912 = G__18938;
chunk__18122_18913 = G__18939;
count__18123_18914 = G__18940;
i__18124_18915 = G__18941;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__18168 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18168,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18168,(1),null);
var seq__18171_18944 = cljs.core.seq(node_children);
var chunk__18173_18945 = null;
var count__18174_18946 = (0);
var i__18175_18947 = (0);
while(true){
if((i__18175_18947 < count__18174_18946)){
var child_struct_18948 = chunk__18173_18945.cljs$core$IIndexed$_nth$arity$2(null,i__18175_18947);
if((!((child_struct_18948 == null)))){
if(typeof child_struct_18948 === 'string'){
var text_18949 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_18949),child_struct_18948].join(''));
} else {
var children_18950 = shadow.dom.svg_node(child_struct_18948);
if(cljs.core.seq_QMARK_(children_18950)){
var seq__18257_18951 = cljs.core.seq(children_18950);
var chunk__18259_18952 = null;
var count__18260_18953 = (0);
var i__18261_18954 = (0);
while(true){
if((i__18261_18954 < count__18260_18953)){
var child_18956 = chunk__18259_18952.cljs$core$IIndexed$_nth$arity$2(null,i__18261_18954);
if(cljs.core.truth_(child_18956)){
node.appendChild(child_18956);


var G__18957 = seq__18257_18951;
var G__18958 = chunk__18259_18952;
var G__18959 = count__18260_18953;
var G__18960 = (i__18261_18954 + (1));
seq__18257_18951 = G__18957;
chunk__18259_18952 = G__18958;
count__18260_18953 = G__18959;
i__18261_18954 = G__18960;
continue;
} else {
var G__18961 = seq__18257_18951;
var G__18962 = chunk__18259_18952;
var G__18963 = count__18260_18953;
var G__18964 = (i__18261_18954 + (1));
seq__18257_18951 = G__18961;
chunk__18259_18952 = G__18962;
count__18260_18953 = G__18963;
i__18261_18954 = G__18964;
continue;
}
} else {
var temp__5804__auto___18965 = cljs.core.seq(seq__18257_18951);
if(temp__5804__auto___18965){
var seq__18257_18966__$1 = temp__5804__auto___18965;
if(cljs.core.chunked_seq_QMARK_(seq__18257_18966__$1)){
var c__5568__auto___18967 = cljs.core.chunk_first(seq__18257_18966__$1);
var G__18968 = cljs.core.chunk_rest(seq__18257_18966__$1);
var G__18969 = c__5568__auto___18967;
var G__18970 = cljs.core.count(c__5568__auto___18967);
var G__18971 = (0);
seq__18257_18951 = G__18968;
chunk__18259_18952 = G__18969;
count__18260_18953 = G__18970;
i__18261_18954 = G__18971;
continue;
} else {
var child_18972 = cljs.core.first(seq__18257_18966__$1);
if(cljs.core.truth_(child_18972)){
node.appendChild(child_18972);


var G__18974 = cljs.core.next(seq__18257_18966__$1);
var G__18975 = null;
var G__18976 = (0);
var G__18977 = (0);
seq__18257_18951 = G__18974;
chunk__18259_18952 = G__18975;
count__18260_18953 = G__18976;
i__18261_18954 = G__18977;
continue;
} else {
var G__18983 = cljs.core.next(seq__18257_18966__$1);
var G__18984 = null;
var G__18985 = (0);
var G__18986 = (0);
seq__18257_18951 = G__18983;
chunk__18259_18952 = G__18984;
count__18260_18953 = G__18985;
i__18261_18954 = G__18986;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_18950);
}
}


var G__18987 = seq__18171_18944;
var G__18988 = chunk__18173_18945;
var G__18989 = count__18174_18946;
var G__18990 = (i__18175_18947 + (1));
seq__18171_18944 = G__18987;
chunk__18173_18945 = G__18988;
count__18174_18946 = G__18989;
i__18175_18947 = G__18990;
continue;
} else {
var G__18991 = seq__18171_18944;
var G__18992 = chunk__18173_18945;
var G__18993 = count__18174_18946;
var G__18994 = (i__18175_18947 + (1));
seq__18171_18944 = G__18991;
chunk__18173_18945 = G__18992;
count__18174_18946 = G__18993;
i__18175_18947 = G__18994;
continue;
}
} else {
var temp__5804__auto___18995 = cljs.core.seq(seq__18171_18944);
if(temp__5804__auto___18995){
var seq__18171_18999__$1 = temp__5804__auto___18995;
if(cljs.core.chunked_seq_QMARK_(seq__18171_18999__$1)){
var c__5568__auto___19000 = cljs.core.chunk_first(seq__18171_18999__$1);
var G__19001 = cljs.core.chunk_rest(seq__18171_18999__$1);
var G__19002 = c__5568__auto___19000;
var G__19003 = cljs.core.count(c__5568__auto___19000);
var G__19004 = (0);
seq__18171_18944 = G__19001;
chunk__18173_18945 = G__19002;
count__18174_18946 = G__19003;
i__18175_18947 = G__19004;
continue;
} else {
var child_struct_19019 = cljs.core.first(seq__18171_18999__$1);
if((!((child_struct_19019 == null)))){
if(typeof child_struct_19019 === 'string'){
var text_19020 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19020),child_struct_19019].join(''));
} else {
var children_19021 = shadow.dom.svg_node(child_struct_19019);
if(cljs.core.seq_QMARK_(children_19021)){
var seq__18304_19022 = cljs.core.seq(children_19021);
var chunk__18306_19023 = null;
var count__18307_19024 = (0);
var i__18308_19025 = (0);
while(true){
if((i__18308_19025 < count__18307_19024)){
var child_19029 = chunk__18306_19023.cljs$core$IIndexed$_nth$arity$2(null,i__18308_19025);
if(cljs.core.truth_(child_19029)){
node.appendChild(child_19029);


var G__19030 = seq__18304_19022;
var G__19031 = chunk__18306_19023;
var G__19032 = count__18307_19024;
var G__19033 = (i__18308_19025 + (1));
seq__18304_19022 = G__19030;
chunk__18306_19023 = G__19031;
count__18307_19024 = G__19032;
i__18308_19025 = G__19033;
continue;
} else {
var G__19034 = seq__18304_19022;
var G__19035 = chunk__18306_19023;
var G__19036 = count__18307_19024;
var G__19037 = (i__18308_19025 + (1));
seq__18304_19022 = G__19034;
chunk__18306_19023 = G__19035;
count__18307_19024 = G__19036;
i__18308_19025 = G__19037;
continue;
}
} else {
var temp__5804__auto___19038__$1 = cljs.core.seq(seq__18304_19022);
if(temp__5804__auto___19038__$1){
var seq__18304_19039__$1 = temp__5804__auto___19038__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18304_19039__$1)){
var c__5568__auto___19040 = cljs.core.chunk_first(seq__18304_19039__$1);
var G__19041 = cljs.core.chunk_rest(seq__18304_19039__$1);
var G__19042 = c__5568__auto___19040;
var G__19043 = cljs.core.count(c__5568__auto___19040);
var G__19044 = (0);
seq__18304_19022 = G__19041;
chunk__18306_19023 = G__19042;
count__18307_19024 = G__19043;
i__18308_19025 = G__19044;
continue;
} else {
var child_19045 = cljs.core.first(seq__18304_19039__$1);
if(cljs.core.truth_(child_19045)){
node.appendChild(child_19045);


var G__19048 = cljs.core.next(seq__18304_19039__$1);
var G__19049 = null;
var G__19050 = (0);
var G__19051 = (0);
seq__18304_19022 = G__19048;
chunk__18306_19023 = G__19049;
count__18307_19024 = G__19050;
i__18308_19025 = G__19051;
continue;
} else {
var G__19052 = cljs.core.next(seq__18304_19039__$1);
var G__19053 = null;
var G__19054 = (0);
var G__19055 = (0);
seq__18304_19022 = G__19052;
chunk__18306_19023 = G__19053;
count__18307_19024 = G__19054;
i__18308_19025 = G__19055;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19021);
}
}


var G__19056 = cljs.core.next(seq__18171_18999__$1);
var G__19057 = null;
var G__19058 = (0);
var G__19059 = (0);
seq__18171_18944 = G__19056;
chunk__18173_18945 = G__19057;
count__18174_18946 = G__19058;
i__18175_18947 = G__19059;
continue;
} else {
var G__19060 = cljs.core.next(seq__18171_18999__$1);
var G__19061 = null;
var G__19062 = (0);
var G__19063 = (0);
seq__18171_18944 = G__19060;
chunk__18173_18945 = G__19061;
count__18174_18946 = G__19062;
i__18175_18947 = G__19063;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19072 = arguments.length;
var i__5770__auto___19073 = (0);
while(true){
if((i__5770__auto___19073 < len__5769__auto___19072)){
args__5775__auto__.push((arguments[i__5770__auto___19073]));

var G__19075 = (i__5770__auto___19073 + (1));
i__5770__auto___19073 = G__19075;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq18386){
var G__18387 = cljs.core.first(seq18386);
var seq18386__$1 = cljs.core.next(seq18386);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18387,seq18386__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__18426 = arguments.length;
switch (G__18426) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__13711__auto___19099 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13712__auto__ = (function (){var switch__13461__auto__ = (function (state_18463){
var state_val_18464 = (state_18463[(1)]);
if((state_val_18464 === (1))){
var state_18463__$1 = state_18463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18463__$1,(2),once_or_cleanup);
} else {
if((state_val_18464 === (2))){
var inst_18457 = (state_18463[(2)]);
var inst_18460 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_18463__$1 = (function (){var statearr_18495 = state_18463;
(statearr_18495[(7)] = inst_18457);

return statearr_18495;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18463__$1,inst_18460);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__13462__auto__ = null;
var shadow$dom$state_machine__13462__auto____0 = (function (){
var statearr_18505 = [null,null,null,null,null,null,null,null];
(statearr_18505[(0)] = shadow$dom$state_machine__13462__auto__);

(statearr_18505[(1)] = (1));

return statearr_18505;
});
var shadow$dom$state_machine__13462__auto____1 = (function (state_18463){
while(true){
var ret_value__13463__auto__ = (function (){try{while(true){
var result__13464__auto__ = switch__13461__auto__(state_18463);
if(cljs.core.keyword_identical_QMARK_(result__13464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13464__auto__;
}
break;
}
}catch (e18507){var ex__13465__auto__ = e18507;
var statearr_18508_19114 = state_18463;
(statearr_18508_19114[(2)] = ex__13465__auto__);


if(cljs.core.seq((state_18463[(4)]))){
var statearr_18510_19116 = state_18463;
(statearr_18510_19116[(1)] = cljs.core.first((state_18463[(4)])));

} else {
throw ex__13465__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19124 = state_18463;
state_18463 = G__19124;
continue;
} else {
return ret_value__13463__auto__;
}
break;
}
});
shadow$dom$state_machine__13462__auto__ = function(state_18463){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__13462__auto____0.call(this);
case 1:
return shadow$dom$state_machine__13462__auto____1.call(this,state_18463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__13462__auto____0;
shadow$dom$state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__13462__auto____1;
return shadow$dom$state_machine__13462__auto__;
})()
})();
var state__13713__auto__ = (function (){var statearr_18520 = f__13712__auto__();
(statearr_18520[(6)] = c__13711__auto___19099);

return statearr_18520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13713__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
