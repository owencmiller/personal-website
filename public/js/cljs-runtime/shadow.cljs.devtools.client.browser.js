goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21333 = arguments.length;
var i__5770__auto___21334 = (0);
while(true){
if((i__5770__auto___21334 < len__5769__auto___21333)){
args__5775__auto__.push((arguments[i__5770__auto___21334]));

var G__21335 = (i__5770__auto___21334 + (1));
i__5770__auto___21334 = G__21335;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20726){
var G__20727 = cljs.core.first(seq20726);
var seq20726__$1 = cljs.core.next(seq20726);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20727,seq20726__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20730 = cljs.core.seq(sources);
var chunk__20731 = null;
var count__20732 = (0);
var i__20733 = (0);
while(true){
if((i__20733 < count__20732)){
var map__20745 = chunk__20731.cljs$core$IIndexed$_nth$arity$2(null,i__20733);
var map__20745__$1 = cljs.core.__destructure_map(map__20745);
var src = map__20745__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20745__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20745__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20745__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20745__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20750){var e_21342 = e20750;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21342);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21342.message)].join('')));
}

var G__21343 = seq__20730;
var G__21344 = chunk__20731;
var G__21345 = count__20732;
var G__21346 = (i__20733 + (1));
seq__20730 = G__21343;
chunk__20731 = G__21344;
count__20732 = G__21345;
i__20733 = G__21346;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20730);
if(temp__5804__auto__){
var seq__20730__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20730__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20730__$1);
var G__21347 = cljs.core.chunk_rest(seq__20730__$1);
var G__21348 = c__5568__auto__;
var G__21349 = cljs.core.count(c__5568__auto__);
var G__21350 = (0);
seq__20730 = G__21347;
chunk__20731 = G__21348;
count__20732 = G__21349;
i__20733 = G__21350;
continue;
} else {
var map__20756 = cljs.core.first(seq__20730__$1);
var map__20756__$1 = cljs.core.__destructure_map(map__20756);
var src = map__20756__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20756__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20756__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20756__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20756__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20760){var e_21351 = e20760;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21351);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21351.message)].join('')));
}

var G__21352 = cljs.core.next(seq__20730__$1);
var G__21353 = null;
var G__21354 = (0);
var G__21355 = (0);
seq__20730 = G__21352;
chunk__20731 = G__21353;
count__20732 = G__21354;
i__20733 = G__21355;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20763 = cljs.core.seq(js_requires);
var chunk__20764 = null;
var count__20765 = (0);
var i__20766 = (0);
while(true){
if((i__20766 < count__20765)){
var js_ns = chunk__20764.cljs$core$IIndexed$_nth$arity$2(null,i__20766);
var require_str_21360 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21360);


var G__21361 = seq__20763;
var G__21362 = chunk__20764;
var G__21363 = count__20765;
var G__21364 = (i__20766 + (1));
seq__20763 = G__21361;
chunk__20764 = G__21362;
count__20765 = G__21363;
i__20766 = G__21364;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20763);
if(temp__5804__auto__){
var seq__20763__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20763__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20763__$1);
var G__21365 = cljs.core.chunk_rest(seq__20763__$1);
var G__21366 = c__5568__auto__;
var G__21367 = cljs.core.count(c__5568__auto__);
var G__21368 = (0);
seq__20763 = G__21365;
chunk__20764 = G__21366;
count__20765 = G__21367;
i__20766 = G__21368;
continue;
} else {
var js_ns = cljs.core.first(seq__20763__$1);
var require_str_21370 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21370);


var G__21371 = cljs.core.next(seq__20763__$1);
var G__21372 = null;
var G__21373 = (0);
var G__21374 = (0);
seq__20763 = G__21371;
chunk__20764 = G__21372;
count__20765 = G__21373;
i__20766 = G__21374;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20770){
var map__20771 = p__20770;
var map__20771__$1 = cljs.core.__destructure_map(map__20771);
var msg = map__20771__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20771__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20771__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20772(s__20773){
return (new cljs.core.LazySeq(null,(function (){
var s__20773__$1 = s__20773;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20773__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20778 = cljs.core.first(xs__6360__auto__);
var map__20778__$1 = cljs.core.__destructure_map(map__20778);
var src = map__20778__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20778__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20778__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__20773__$1,map__20778,map__20778__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20771,map__20771__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20772_$_iter__20774(s__20775){
return (new cljs.core.LazySeq(null,((function (s__20773__$1,map__20778,map__20778__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20771,map__20771__$1,msg,info,reload_info){
return (function (){
var s__20775__$1 = s__20775;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20775__$1);
if(temp__5804__auto____$1){
var s__20775__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20775__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20775__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20777 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20776 = (0);
while(true){
if((i__20776 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__20776);
cljs.core.chunk_append(b__20777,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21379 = (i__20776 + (1));
i__20776 = G__21379;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20777),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20772_$_iter__20774(cljs.core.chunk_rest(s__20775__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20777),null);
}
} else {
var warning = cljs.core.first(s__20775__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20772_$_iter__20774(cljs.core.rest(s__20775__$2)));
}
} else {
return null;
}
break;
}
});})(s__20773__$1,map__20778,map__20778__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20771,map__20771__$1,msg,info,reload_info))
,null,null));
});})(s__20773__$1,map__20778,map__20778__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20771,map__20771__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20772(cljs.core.rest(s__20773__$1)));
} else {
var G__21383 = cljs.core.rest(s__20773__$1);
s__20773__$1 = G__21383;
continue;
}
} else {
var G__21384 = cljs.core.rest(s__20773__$1);
s__20773__$1 = G__21384;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20781_21385 = cljs.core.seq(warnings);
var chunk__20782_21386 = null;
var count__20783_21387 = (0);
var i__20784_21388 = (0);
while(true){
if((i__20784_21388 < count__20783_21387)){
var map__20787_21389 = chunk__20782_21386.cljs$core$IIndexed$_nth$arity$2(null,i__20784_21388);
var map__20787_21390__$1 = cljs.core.__destructure_map(map__20787_21389);
var w_21391 = map__20787_21390__$1;
var msg_21392__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20787_21390__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20787_21390__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20787_21390__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20787_21390__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21395)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21393),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21394),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21392__$1)].join(''));


var G__21396 = seq__20781_21385;
var G__21397 = chunk__20782_21386;
var G__21398 = count__20783_21387;
var G__21399 = (i__20784_21388 + (1));
seq__20781_21385 = G__21396;
chunk__20782_21386 = G__21397;
count__20783_21387 = G__21398;
i__20784_21388 = G__21399;
continue;
} else {
var temp__5804__auto___21400 = cljs.core.seq(seq__20781_21385);
if(temp__5804__auto___21400){
var seq__20781_21401__$1 = temp__5804__auto___21400;
if(cljs.core.chunked_seq_QMARK_(seq__20781_21401__$1)){
var c__5568__auto___21402 = cljs.core.chunk_first(seq__20781_21401__$1);
var G__21403 = cljs.core.chunk_rest(seq__20781_21401__$1);
var G__21404 = c__5568__auto___21402;
var G__21405 = cljs.core.count(c__5568__auto___21402);
var G__21406 = (0);
seq__20781_21385 = G__21403;
chunk__20782_21386 = G__21404;
count__20783_21387 = G__21405;
i__20784_21388 = G__21406;
continue;
} else {
var map__20788_21407 = cljs.core.first(seq__20781_21401__$1);
var map__20788_21408__$1 = cljs.core.__destructure_map(map__20788_21407);
var w_21409 = map__20788_21408__$1;
var msg_21410__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20788_21408__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20788_21408__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20788_21408__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20788_21408__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21413)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21411),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21412),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21410__$1)].join(''));


var G__21415 = cljs.core.next(seq__20781_21401__$1);
var G__21416 = null;
var G__21417 = (0);
var G__21418 = (0);
seq__20781_21385 = G__21415;
chunk__20782_21386 = G__21416;
count__20783_21387 = G__21417;
i__20784_21388 = G__21418;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20769_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20769_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20789){
var map__20790 = p__20789;
var map__20790__$1 = cljs.core.__destructure_map(map__20790);
var msg = map__20790__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20790__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20790__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20791 = cljs.core.seq(updates);
var chunk__20793 = null;
var count__20794 = (0);
var i__20795 = (0);
while(true){
if((i__20795 < count__20794)){
var path = chunk__20793.cljs$core$IIndexed$_nth$arity$2(null,i__20795);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21074_21425 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21078_21426 = null;
var count__21079_21427 = (0);
var i__21080_21428 = (0);
while(true){
if((i__21080_21428 < count__21079_21427)){
var node_21429 = chunk__21078_21426.cljs$core$IIndexed$_nth$arity$2(null,i__21080_21428);
if(cljs.core.not(node_21429.shadow$old)){
var path_match_21430 = shadow.cljs.devtools.client.browser.match_paths(node_21429.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21430)){
var new_link_21431 = (function (){var G__21164 = node_21429.cloneNode(true);
G__21164.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21430),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21164;
})();
(node_21429.shadow$old = true);

(new_link_21431.onload = ((function (seq__21074_21425,chunk__21078_21426,count__21079_21427,i__21080_21428,seq__20791,chunk__20793,count__20794,i__20795,new_link_21431,path_match_21430,node_21429,path,map__20790,map__20790__$1,msg,updates,reload_info){
return (function (e){
var seq__21165_21432 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21167_21433 = null;
var count__21168_21434 = (0);
var i__21169_21435 = (0);
while(true){
if((i__21169_21435 < count__21168_21434)){
var map__21176_21436 = chunk__21167_21433.cljs$core$IIndexed$_nth$arity$2(null,i__21169_21435);
var map__21176_21437__$1 = cljs.core.__destructure_map(map__21176_21436);
var task_21438 = map__21176_21437__$1;
var fn_str_21439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21176_21437__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21176_21437__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21442 = goog.getObjectByName(fn_str_21439,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21440)].join(''));

(fn_obj_21442.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21442.cljs$core$IFn$_invoke$arity$2(path,new_link_21431) : fn_obj_21442.call(null,path,new_link_21431));


var G__21443 = seq__21165_21432;
var G__21444 = chunk__21167_21433;
var G__21445 = count__21168_21434;
var G__21446 = (i__21169_21435 + (1));
seq__21165_21432 = G__21443;
chunk__21167_21433 = G__21444;
count__21168_21434 = G__21445;
i__21169_21435 = G__21446;
continue;
} else {
var temp__5804__auto___21448 = cljs.core.seq(seq__21165_21432);
if(temp__5804__auto___21448){
var seq__21165_21449__$1 = temp__5804__auto___21448;
if(cljs.core.chunked_seq_QMARK_(seq__21165_21449__$1)){
var c__5568__auto___21450 = cljs.core.chunk_first(seq__21165_21449__$1);
var G__21451 = cljs.core.chunk_rest(seq__21165_21449__$1);
var G__21452 = c__5568__auto___21450;
var G__21453 = cljs.core.count(c__5568__auto___21450);
var G__21454 = (0);
seq__21165_21432 = G__21451;
chunk__21167_21433 = G__21452;
count__21168_21434 = G__21453;
i__21169_21435 = G__21454;
continue;
} else {
var map__21189_21455 = cljs.core.first(seq__21165_21449__$1);
var map__21189_21456__$1 = cljs.core.__destructure_map(map__21189_21455);
var task_21457 = map__21189_21456__$1;
var fn_str_21458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21189_21456__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21189_21456__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21460 = goog.getObjectByName(fn_str_21458,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21459)].join(''));

(fn_obj_21460.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21460.cljs$core$IFn$_invoke$arity$2(path,new_link_21431) : fn_obj_21460.call(null,path,new_link_21431));


var G__21461 = cljs.core.next(seq__21165_21449__$1);
var G__21462 = null;
var G__21463 = (0);
var G__21464 = (0);
seq__21165_21432 = G__21461;
chunk__21167_21433 = G__21462;
count__21168_21434 = G__21463;
i__21169_21435 = G__21464;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21429);
});})(seq__21074_21425,chunk__21078_21426,count__21079_21427,i__21080_21428,seq__20791,chunk__20793,count__20794,i__20795,new_link_21431,path_match_21430,node_21429,path,map__20790,map__20790__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21430], 0));

goog.dom.insertSiblingAfter(new_link_21431,node_21429);


var G__21465 = seq__21074_21425;
var G__21466 = chunk__21078_21426;
var G__21467 = count__21079_21427;
var G__21468 = (i__21080_21428 + (1));
seq__21074_21425 = G__21465;
chunk__21078_21426 = G__21466;
count__21079_21427 = G__21467;
i__21080_21428 = G__21468;
continue;
} else {
var G__21469 = seq__21074_21425;
var G__21470 = chunk__21078_21426;
var G__21471 = count__21079_21427;
var G__21472 = (i__21080_21428 + (1));
seq__21074_21425 = G__21469;
chunk__21078_21426 = G__21470;
count__21079_21427 = G__21471;
i__21080_21428 = G__21472;
continue;
}
} else {
var G__21473 = seq__21074_21425;
var G__21474 = chunk__21078_21426;
var G__21475 = count__21079_21427;
var G__21476 = (i__21080_21428 + (1));
seq__21074_21425 = G__21473;
chunk__21078_21426 = G__21474;
count__21079_21427 = G__21475;
i__21080_21428 = G__21476;
continue;
}
} else {
var temp__5804__auto___21477 = cljs.core.seq(seq__21074_21425);
if(temp__5804__auto___21477){
var seq__21074_21478__$1 = temp__5804__auto___21477;
if(cljs.core.chunked_seq_QMARK_(seq__21074_21478__$1)){
var c__5568__auto___21479 = cljs.core.chunk_first(seq__21074_21478__$1);
var G__21480 = cljs.core.chunk_rest(seq__21074_21478__$1);
var G__21481 = c__5568__auto___21479;
var G__21482 = cljs.core.count(c__5568__auto___21479);
var G__21483 = (0);
seq__21074_21425 = G__21480;
chunk__21078_21426 = G__21481;
count__21079_21427 = G__21482;
i__21080_21428 = G__21483;
continue;
} else {
var node_21484 = cljs.core.first(seq__21074_21478__$1);
if(cljs.core.not(node_21484.shadow$old)){
var path_match_21485 = shadow.cljs.devtools.client.browser.match_paths(node_21484.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21485)){
var new_link_21486 = (function (){var G__21193 = node_21484.cloneNode(true);
G__21193.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21485),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21193;
})();
(node_21484.shadow$old = true);

(new_link_21486.onload = ((function (seq__21074_21425,chunk__21078_21426,count__21079_21427,i__21080_21428,seq__20791,chunk__20793,count__20794,i__20795,new_link_21486,path_match_21485,node_21484,seq__21074_21478__$1,temp__5804__auto___21477,path,map__20790,map__20790__$1,msg,updates,reload_info){
return (function (e){
var seq__21194_21487 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21196_21488 = null;
var count__21197_21489 = (0);
var i__21198_21490 = (0);
while(true){
if((i__21198_21490 < count__21197_21489)){
var map__21202_21491 = chunk__21196_21488.cljs$core$IIndexed$_nth$arity$2(null,i__21198_21490);
var map__21202_21492__$1 = cljs.core.__destructure_map(map__21202_21491);
var task_21493 = map__21202_21492__$1;
var fn_str_21494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21202_21492__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21202_21492__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21496 = goog.getObjectByName(fn_str_21494,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21495)].join(''));

(fn_obj_21496.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21496.cljs$core$IFn$_invoke$arity$2(path,new_link_21486) : fn_obj_21496.call(null,path,new_link_21486));


var G__21497 = seq__21194_21487;
var G__21498 = chunk__21196_21488;
var G__21499 = count__21197_21489;
var G__21500 = (i__21198_21490 + (1));
seq__21194_21487 = G__21497;
chunk__21196_21488 = G__21498;
count__21197_21489 = G__21499;
i__21198_21490 = G__21500;
continue;
} else {
var temp__5804__auto___21501__$1 = cljs.core.seq(seq__21194_21487);
if(temp__5804__auto___21501__$1){
var seq__21194_21502__$1 = temp__5804__auto___21501__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21194_21502__$1)){
var c__5568__auto___21503 = cljs.core.chunk_first(seq__21194_21502__$1);
var G__21504 = cljs.core.chunk_rest(seq__21194_21502__$1);
var G__21505 = c__5568__auto___21503;
var G__21506 = cljs.core.count(c__5568__auto___21503);
var G__21507 = (0);
seq__21194_21487 = G__21504;
chunk__21196_21488 = G__21505;
count__21197_21489 = G__21506;
i__21198_21490 = G__21507;
continue;
} else {
var map__21203_21508 = cljs.core.first(seq__21194_21502__$1);
var map__21203_21509__$1 = cljs.core.__destructure_map(map__21203_21508);
var task_21510 = map__21203_21509__$1;
var fn_str_21511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21203_21509__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21203_21509__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21513 = goog.getObjectByName(fn_str_21511,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21512)].join(''));

(fn_obj_21513.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21513.cljs$core$IFn$_invoke$arity$2(path,new_link_21486) : fn_obj_21513.call(null,path,new_link_21486));


var G__21515 = cljs.core.next(seq__21194_21502__$1);
var G__21516 = null;
var G__21517 = (0);
var G__21518 = (0);
seq__21194_21487 = G__21515;
chunk__21196_21488 = G__21516;
count__21197_21489 = G__21517;
i__21198_21490 = G__21518;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21484);
});})(seq__21074_21425,chunk__21078_21426,count__21079_21427,i__21080_21428,seq__20791,chunk__20793,count__20794,i__20795,new_link_21486,path_match_21485,node_21484,seq__21074_21478__$1,temp__5804__auto___21477,path,map__20790,map__20790__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21485], 0));

goog.dom.insertSiblingAfter(new_link_21486,node_21484);


var G__21520 = cljs.core.next(seq__21074_21478__$1);
var G__21521 = null;
var G__21522 = (0);
var G__21523 = (0);
seq__21074_21425 = G__21520;
chunk__21078_21426 = G__21521;
count__21079_21427 = G__21522;
i__21080_21428 = G__21523;
continue;
} else {
var G__21524 = cljs.core.next(seq__21074_21478__$1);
var G__21525 = null;
var G__21526 = (0);
var G__21527 = (0);
seq__21074_21425 = G__21524;
chunk__21078_21426 = G__21525;
count__21079_21427 = G__21526;
i__21080_21428 = G__21527;
continue;
}
} else {
var G__21528 = cljs.core.next(seq__21074_21478__$1);
var G__21529 = null;
var G__21530 = (0);
var G__21531 = (0);
seq__21074_21425 = G__21528;
chunk__21078_21426 = G__21529;
count__21079_21427 = G__21530;
i__21080_21428 = G__21531;
continue;
}
}
} else {
}
}
break;
}


var G__21532 = seq__20791;
var G__21533 = chunk__20793;
var G__21534 = count__20794;
var G__21535 = (i__20795 + (1));
seq__20791 = G__21532;
chunk__20793 = G__21533;
count__20794 = G__21534;
i__20795 = G__21535;
continue;
} else {
var G__21536 = seq__20791;
var G__21537 = chunk__20793;
var G__21538 = count__20794;
var G__21539 = (i__20795 + (1));
seq__20791 = G__21536;
chunk__20793 = G__21537;
count__20794 = G__21538;
i__20795 = G__21539;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20791);
if(temp__5804__auto__){
var seq__20791__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20791__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20791__$1);
var G__21540 = cljs.core.chunk_rest(seq__20791__$1);
var G__21541 = c__5568__auto__;
var G__21542 = cljs.core.count(c__5568__auto__);
var G__21543 = (0);
seq__20791 = G__21540;
chunk__20793 = G__21541;
count__20794 = G__21542;
i__20795 = G__21543;
continue;
} else {
var path = cljs.core.first(seq__20791__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21204_21544 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21208_21545 = null;
var count__21209_21546 = (0);
var i__21210_21547 = (0);
while(true){
if((i__21210_21547 < count__21209_21546)){
var node_21548 = chunk__21208_21545.cljs$core$IIndexed$_nth$arity$2(null,i__21210_21547);
if(cljs.core.not(node_21548.shadow$old)){
var path_match_21549 = shadow.cljs.devtools.client.browser.match_paths(node_21548.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21549)){
var new_link_21550 = (function (){var G__21241 = node_21548.cloneNode(true);
G__21241.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21549),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21241;
})();
(node_21548.shadow$old = true);

(new_link_21550.onload = ((function (seq__21204_21544,chunk__21208_21545,count__21209_21546,i__21210_21547,seq__20791,chunk__20793,count__20794,i__20795,new_link_21550,path_match_21549,node_21548,path,seq__20791__$1,temp__5804__auto__,map__20790,map__20790__$1,msg,updates,reload_info){
return (function (e){
var seq__21242_21552 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21244_21553 = null;
var count__21245_21554 = (0);
var i__21246_21555 = (0);
while(true){
if((i__21246_21555 < count__21245_21554)){
var map__21251_21559 = chunk__21244_21553.cljs$core$IIndexed$_nth$arity$2(null,i__21246_21555);
var map__21251_21560__$1 = cljs.core.__destructure_map(map__21251_21559);
var task_21561 = map__21251_21560__$1;
var fn_str_21562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21251_21560__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21251_21560__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21564 = goog.getObjectByName(fn_str_21562,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21563)].join(''));

(fn_obj_21564.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21564.cljs$core$IFn$_invoke$arity$2(path,new_link_21550) : fn_obj_21564.call(null,path,new_link_21550));


var G__21565 = seq__21242_21552;
var G__21566 = chunk__21244_21553;
var G__21567 = count__21245_21554;
var G__21568 = (i__21246_21555 + (1));
seq__21242_21552 = G__21565;
chunk__21244_21553 = G__21566;
count__21245_21554 = G__21567;
i__21246_21555 = G__21568;
continue;
} else {
var temp__5804__auto___21569__$1 = cljs.core.seq(seq__21242_21552);
if(temp__5804__auto___21569__$1){
var seq__21242_21570__$1 = temp__5804__auto___21569__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21242_21570__$1)){
var c__5568__auto___21572 = cljs.core.chunk_first(seq__21242_21570__$1);
var G__21573 = cljs.core.chunk_rest(seq__21242_21570__$1);
var G__21574 = c__5568__auto___21572;
var G__21575 = cljs.core.count(c__5568__auto___21572);
var G__21576 = (0);
seq__21242_21552 = G__21573;
chunk__21244_21553 = G__21574;
count__21245_21554 = G__21575;
i__21246_21555 = G__21576;
continue;
} else {
var map__21252_21577 = cljs.core.first(seq__21242_21570__$1);
var map__21252_21578__$1 = cljs.core.__destructure_map(map__21252_21577);
var task_21579 = map__21252_21578__$1;
var fn_str_21580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21252_21578__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21252_21578__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21582 = goog.getObjectByName(fn_str_21580,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21581)].join(''));

(fn_obj_21582.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21582.cljs$core$IFn$_invoke$arity$2(path,new_link_21550) : fn_obj_21582.call(null,path,new_link_21550));


var G__21583 = cljs.core.next(seq__21242_21570__$1);
var G__21584 = null;
var G__21585 = (0);
var G__21586 = (0);
seq__21242_21552 = G__21583;
chunk__21244_21553 = G__21584;
count__21245_21554 = G__21585;
i__21246_21555 = G__21586;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21548);
});})(seq__21204_21544,chunk__21208_21545,count__21209_21546,i__21210_21547,seq__20791,chunk__20793,count__20794,i__20795,new_link_21550,path_match_21549,node_21548,path,seq__20791__$1,temp__5804__auto__,map__20790,map__20790__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21549], 0));

goog.dom.insertSiblingAfter(new_link_21550,node_21548);


var G__21587 = seq__21204_21544;
var G__21588 = chunk__21208_21545;
var G__21589 = count__21209_21546;
var G__21590 = (i__21210_21547 + (1));
seq__21204_21544 = G__21587;
chunk__21208_21545 = G__21588;
count__21209_21546 = G__21589;
i__21210_21547 = G__21590;
continue;
} else {
var G__21591 = seq__21204_21544;
var G__21592 = chunk__21208_21545;
var G__21593 = count__21209_21546;
var G__21594 = (i__21210_21547 + (1));
seq__21204_21544 = G__21591;
chunk__21208_21545 = G__21592;
count__21209_21546 = G__21593;
i__21210_21547 = G__21594;
continue;
}
} else {
var G__21595 = seq__21204_21544;
var G__21596 = chunk__21208_21545;
var G__21597 = count__21209_21546;
var G__21598 = (i__21210_21547 + (1));
seq__21204_21544 = G__21595;
chunk__21208_21545 = G__21596;
count__21209_21546 = G__21597;
i__21210_21547 = G__21598;
continue;
}
} else {
var temp__5804__auto___21599__$1 = cljs.core.seq(seq__21204_21544);
if(temp__5804__auto___21599__$1){
var seq__21204_21600__$1 = temp__5804__auto___21599__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21204_21600__$1)){
var c__5568__auto___21601 = cljs.core.chunk_first(seq__21204_21600__$1);
var G__21602 = cljs.core.chunk_rest(seq__21204_21600__$1);
var G__21603 = c__5568__auto___21601;
var G__21604 = cljs.core.count(c__5568__auto___21601);
var G__21605 = (0);
seq__21204_21544 = G__21602;
chunk__21208_21545 = G__21603;
count__21209_21546 = G__21604;
i__21210_21547 = G__21605;
continue;
} else {
var node_21606 = cljs.core.first(seq__21204_21600__$1);
if(cljs.core.not(node_21606.shadow$old)){
var path_match_21607 = shadow.cljs.devtools.client.browser.match_paths(node_21606.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21607)){
var new_link_21608 = (function (){var G__21253 = node_21606.cloneNode(true);
G__21253.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21607),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21253;
})();
(node_21606.shadow$old = true);

(new_link_21608.onload = ((function (seq__21204_21544,chunk__21208_21545,count__21209_21546,i__21210_21547,seq__20791,chunk__20793,count__20794,i__20795,new_link_21608,path_match_21607,node_21606,seq__21204_21600__$1,temp__5804__auto___21599__$1,path,seq__20791__$1,temp__5804__auto__,map__20790,map__20790__$1,msg,updates,reload_info){
return (function (e){
var seq__21254_21609 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21256_21610 = null;
var count__21257_21611 = (0);
var i__21258_21612 = (0);
while(true){
if((i__21258_21612 < count__21257_21611)){
var map__21262_21614 = chunk__21256_21610.cljs$core$IIndexed$_nth$arity$2(null,i__21258_21612);
var map__21262_21615__$1 = cljs.core.__destructure_map(map__21262_21614);
var task_21616 = map__21262_21615__$1;
var fn_str_21617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21262_21615__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21262_21615__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21620 = goog.getObjectByName(fn_str_21617,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21618)].join(''));

(fn_obj_21620.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21620.cljs$core$IFn$_invoke$arity$2(path,new_link_21608) : fn_obj_21620.call(null,path,new_link_21608));


var G__21621 = seq__21254_21609;
var G__21622 = chunk__21256_21610;
var G__21623 = count__21257_21611;
var G__21624 = (i__21258_21612 + (1));
seq__21254_21609 = G__21621;
chunk__21256_21610 = G__21622;
count__21257_21611 = G__21623;
i__21258_21612 = G__21624;
continue;
} else {
var temp__5804__auto___21625__$2 = cljs.core.seq(seq__21254_21609);
if(temp__5804__auto___21625__$2){
var seq__21254_21626__$1 = temp__5804__auto___21625__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21254_21626__$1)){
var c__5568__auto___21627 = cljs.core.chunk_first(seq__21254_21626__$1);
var G__21628 = cljs.core.chunk_rest(seq__21254_21626__$1);
var G__21629 = c__5568__auto___21627;
var G__21630 = cljs.core.count(c__5568__auto___21627);
var G__21631 = (0);
seq__21254_21609 = G__21628;
chunk__21256_21610 = G__21629;
count__21257_21611 = G__21630;
i__21258_21612 = G__21631;
continue;
} else {
var map__21263_21632 = cljs.core.first(seq__21254_21626__$1);
var map__21263_21633__$1 = cljs.core.__destructure_map(map__21263_21632);
var task_21634 = map__21263_21633__$1;
var fn_str_21635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21263_21633__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21636 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21263_21633__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21637 = goog.getObjectByName(fn_str_21635,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21636)].join(''));

(fn_obj_21637.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21637.cljs$core$IFn$_invoke$arity$2(path,new_link_21608) : fn_obj_21637.call(null,path,new_link_21608));


var G__21638 = cljs.core.next(seq__21254_21626__$1);
var G__21639 = null;
var G__21640 = (0);
var G__21641 = (0);
seq__21254_21609 = G__21638;
chunk__21256_21610 = G__21639;
count__21257_21611 = G__21640;
i__21258_21612 = G__21641;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21606);
});})(seq__21204_21544,chunk__21208_21545,count__21209_21546,i__21210_21547,seq__20791,chunk__20793,count__20794,i__20795,new_link_21608,path_match_21607,node_21606,seq__21204_21600__$1,temp__5804__auto___21599__$1,path,seq__20791__$1,temp__5804__auto__,map__20790,map__20790__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21607], 0));

goog.dom.insertSiblingAfter(new_link_21608,node_21606);


var G__21642 = cljs.core.next(seq__21204_21600__$1);
var G__21643 = null;
var G__21644 = (0);
var G__21645 = (0);
seq__21204_21544 = G__21642;
chunk__21208_21545 = G__21643;
count__21209_21546 = G__21644;
i__21210_21547 = G__21645;
continue;
} else {
var G__21646 = cljs.core.next(seq__21204_21600__$1);
var G__21647 = null;
var G__21648 = (0);
var G__21649 = (0);
seq__21204_21544 = G__21646;
chunk__21208_21545 = G__21647;
count__21209_21546 = G__21648;
i__21210_21547 = G__21649;
continue;
}
} else {
var G__21650 = cljs.core.next(seq__21204_21600__$1);
var G__21651 = null;
var G__21652 = (0);
var G__21653 = (0);
seq__21204_21544 = G__21650;
chunk__21208_21545 = G__21651;
count__21209_21546 = G__21652;
i__21210_21547 = G__21653;
continue;
}
}
} else {
}
}
break;
}


var G__21654 = cljs.core.next(seq__20791__$1);
var G__21655 = null;
var G__21656 = (0);
var G__21657 = (0);
seq__20791 = G__21654;
chunk__20793 = G__21655;
count__20794 = G__21656;
i__20795 = G__21657;
continue;
} else {
var G__21658 = cljs.core.next(seq__20791__$1);
var G__21659 = null;
var G__21660 = (0);
var G__21661 = (0);
seq__20791 = G__21658;
chunk__20793 = G__21659;
count__20794 = G__21660;
i__20795 = G__21661;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__21269){
var map__21270 = p__21269;
var map__21270__$1 = cljs.core.__destructure_map(map__21270);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21270__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__21287){
var map__21288 = p__21287;
var map__21288__$1 = cljs.core.__destructure_map(map__21288);
var _ = map__21288__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21288__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21289,done,error){
var map__21290 = p__21289;
var map__21290__$1 = cljs.core.__destructure_map(map__21290);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21290__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21293,done,error){
var map__21294 = p__21293;
var map__21294__$1 = cljs.core.__destructure_map(map__21294);
var msg = map__21294__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21294__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21294__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21294__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21295){
var map__21296 = p__21295;
var map__21296__$1 = cljs.core.__destructure_map(map__21296);
var src = map__21296__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21296__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21306 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21306) : done.call(null,G__21306));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21311){
var map__21312 = p__21311;
var map__21312__$1 = cljs.core.__destructure_map(map__21312);
var msg__$1 = map__21312__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21312__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21313){var ex = e21313;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21315){
var map__21316 = p__21315;
var map__21316__$1 = cljs.core.__destructure_map(map__21316);
var env = map__21316__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21316__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21325){
var map__21326 = p__21325;
var map__21326__$1 = cljs.core.__destructure_map(map__21326);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21326__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21326__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21329){
var map__21330 = p__21329;
var map__21330__$1 = cljs.core.__destructure_map(map__21330);
var svc = map__21330__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21330__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
