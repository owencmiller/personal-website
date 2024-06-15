goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__13910){
var map__13912 = p__13910;
var map__13912__$1 = cljs.core.__destructure_map(map__13912);
var runtime = map__13912__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13912__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14092 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14092)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__13917 = runtime;
var G__13918 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14092);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__13917,G__13918) : shadow.remote.runtime.shared.process.call(null,G__13917,G__13918));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__13921,res){
var map__13922 = p__13921;
var map__13922__$1 = cljs.core.__destructure_map(map__13922);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13922__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13922__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__13923 = res;
var G__13923__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13923,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__13923);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13923__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__13923__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__13927 = arguments.length;
switch (G__13927) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__13930,msg,handlers,timeout_after_ms){
var map__13931 = p__13930;
var map__13931__$1 = cljs.core.__destructure_map(map__13931);
var runtime = map__13931__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13931__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14112 = arguments.length;
var i__5770__auto___14113 = (0);
while(true){
if((i__5770__auto___14113 < len__5769__auto___14112)){
args__5775__auto__.push((arguments[i__5770__auto___14113]));

var G__14115 = (i__5770__auto___14113 + (1));
i__5770__auto___14113 = G__14115;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__13942,ev,args){
var map__13943 = p__13942;
var map__13943__$1 = cljs.core.__destructure_map(map__13943);
var runtime = map__13943__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13943__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__13944 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13947 = null;
var count__13948 = (0);
var i__13949 = (0);
while(true){
if((i__13949 < count__13948)){
var ext = chunk__13947.cljs$core$IIndexed$_nth$arity$2(null,i__13949);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14135 = seq__13944;
var G__14136 = chunk__13947;
var G__14137 = count__13948;
var G__14138 = (i__13949 + (1));
seq__13944 = G__14135;
chunk__13947 = G__14136;
count__13948 = G__14137;
i__13949 = G__14138;
continue;
} else {
var G__14139 = seq__13944;
var G__14140 = chunk__13947;
var G__14141 = count__13948;
var G__14142 = (i__13949 + (1));
seq__13944 = G__14139;
chunk__13947 = G__14140;
count__13948 = G__14141;
i__13949 = G__14142;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13944);
if(temp__5804__auto__){
var seq__13944__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13944__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__13944__$1);
var G__14144 = cljs.core.chunk_rest(seq__13944__$1);
var G__14145 = c__5568__auto__;
var G__14146 = cljs.core.count(c__5568__auto__);
var G__14147 = (0);
seq__13944 = G__14144;
chunk__13947 = G__14145;
count__13948 = G__14146;
i__13949 = G__14147;
continue;
} else {
var ext = cljs.core.first(seq__13944__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14148 = cljs.core.next(seq__13944__$1);
var G__14149 = null;
var G__14150 = (0);
var G__14151 = (0);
seq__13944 = G__14148;
chunk__13947 = G__14149;
count__13948 = G__14150;
i__13949 = G__14151;
continue;
} else {
var G__14152 = cljs.core.next(seq__13944__$1);
var G__14153 = null;
var G__14154 = (0);
var G__14155 = (0);
seq__13944 = G__14152;
chunk__13947 = G__14153;
count__13948 = G__14154;
i__13949 = G__14155;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq13932){
var G__13933 = cljs.core.first(seq13932);
var seq13932__$1 = cljs.core.next(seq13932);
var G__13934 = cljs.core.first(seq13932__$1);
var seq13932__$2 = cljs.core.next(seq13932__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13933,G__13934,seq13932__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__13957,p__13958){
var map__13959 = p__13957;
var map__13959__$1 = cljs.core.__destructure_map(map__13959);
var runtime = map__13959__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13959__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13960 = p__13958;
var map__13960__$1 = cljs.core.__destructure_map(map__13960);
var msg = map__13960__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13960__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__13961 = cljs.core.deref(state_ref);
var map__13961__$1 = cljs.core.__destructure_map(map__13961);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13961__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13961__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__13966,msg){
var map__13969 = p__13966;
var map__13969__$1 = cljs.core.__destructure_map(map__13969);
var runtime = map__13969__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13969__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__13991,key,p__13992){
var map__13993 = p__13991;
var map__13993__$1 = cljs.core.__destructure_map(map__13993);
var state = map__13993__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13993__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__13994 = p__13992;
var map__13994__$1 = cljs.core.__destructure_map(map__13994);
var spec = map__13994__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13994__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__13995,key,spec){
var map__13996 = p__13995;
var map__13996__$1 = cljs.core.__destructure_map(map__13996);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13996__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__13998_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__13998_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14000_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14000_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14001_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14001_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14002_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14002_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14003_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14003_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14011,key){
var map__14012 = p__14011;
var map__14012__$1 = cljs.core.__destructure_map(map__14012);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14012__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14016,msg){
var map__14018 = p__14016;
var map__14018__$1 = cljs.core.__destructure_map(map__14018);
var runtime = map__14018__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14018__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14025,p__14026){
var map__14030 = p__14025;
var map__14030__$1 = cljs.core.__destructure_map(map__14030);
var runtime = map__14030__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14030__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14031 = p__14026;
var map__14031__$1 = cljs.core.__destructure_map(map__14031);
var msg = map__14031__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14031__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14031__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14045 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14047 = null;
var count__14048 = (0);
var i__14049 = (0);
while(true){
if((i__14049 < count__14048)){
var map__14063 = chunk__14047.cljs$core$IIndexed$_nth$arity$2(null,i__14049);
var map__14063__$1 = cljs.core.__destructure_map(map__14063);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14063__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14208 = seq__14045;
var G__14209 = chunk__14047;
var G__14210 = count__14048;
var G__14211 = (i__14049 + (1));
seq__14045 = G__14208;
chunk__14047 = G__14209;
count__14048 = G__14210;
i__14049 = G__14211;
continue;
} else {
var G__14213 = seq__14045;
var G__14214 = chunk__14047;
var G__14215 = count__14048;
var G__14216 = (i__14049 + (1));
seq__14045 = G__14213;
chunk__14047 = G__14214;
count__14048 = G__14215;
i__14049 = G__14216;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14045);
if(temp__5804__auto__){
var seq__14045__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14045__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14045__$1);
var G__14220 = cljs.core.chunk_rest(seq__14045__$1);
var G__14221 = c__5568__auto__;
var G__14222 = cljs.core.count(c__5568__auto__);
var G__14223 = (0);
seq__14045 = G__14220;
chunk__14047 = G__14221;
count__14048 = G__14222;
i__14049 = G__14223;
continue;
} else {
var map__14069 = cljs.core.first(seq__14045__$1);
var map__14069__$1 = cljs.core.__destructure_map(map__14069);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14069__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14225 = cljs.core.next(seq__14045__$1);
var G__14226 = null;
var G__14227 = (0);
var G__14228 = (0);
seq__14045 = G__14225;
chunk__14047 = G__14226;
count__14048 = G__14227;
i__14049 = G__14228;
continue;
} else {
var G__14229 = cljs.core.next(seq__14045__$1);
var G__14230 = null;
var G__14231 = (0);
var G__14232 = (0);
seq__14045 = G__14229;
chunk__14047 = G__14230;
count__14048 = G__14231;
i__14049 = G__14232;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
