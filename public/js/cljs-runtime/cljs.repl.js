goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18973){
var map__18982 = p__18973;
var map__18982__$1 = cljs.core.__destructure_map(map__18982);
var m = map__18982__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18982__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18982__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19009_19350 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19010_19351 = null;
var count__19011_19352 = (0);
var i__19012_19353 = (0);
while(true){
if((i__19012_19353 < count__19011_19352)){
var f_19354 = chunk__19010_19351.cljs$core$IIndexed$_nth$arity$2(null,i__19012_19353);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19354], 0));


var G__19355 = seq__19009_19350;
var G__19356 = chunk__19010_19351;
var G__19357 = count__19011_19352;
var G__19358 = (i__19012_19353 + (1));
seq__19009_19350 = G__19355;
chunk__19010_19351 = G__19356;
count__19011_19352 = G__19357;
i__19012_19353 = G__19358;
continue;
} else {
var temp__5804__auto___19359 = cljs.core.seq(seq__19009_19350);
if(temp__5804__auto___19359){
var seq__19009_19360__$1 = temp__5804__auto___19359;
if(cljs.core.chunked_seq_QMARK_(seq__19009_19360__$1)){
var c__5568__auto___19361 = cljs.core.chunk_first(seq__19009_19360__$1);
var G__19362 = cljs.core.chunk_rest(seq__19009_19360__$1);
var G__19363 = c__5568__auto___19361;
var G__19364 = cljs.core.count(c__5568__auto___19361);
var G__19365 = (0);
seq__19009_19350 = G__19362;
chunk__19010_19351 = G__19363;
count__19011_19352 = G__19364;
i__19012_19353 = G__19365;
continue;
} else {
var f_19366 = cljs.core.first(seq__19009_19360__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19366], 0));


var G__19367 = cljs.core.next(seq__19009_19360__$1);
var G__19368 = null;
var G__19369 = (0);
var G__19370 = (0);
seq__19009_19350 = G__19367;
chunk__19010_19351 = G__19368;
count__19011_19352 = G__19369;
i__19012_19353 = G__19370;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19371 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19371], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19371)))?cljs.core.second(arglists_19371):arglists_19371)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19081_19380 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19082_19381 = null;
var count__19083_19382 = (0);
var i__19084_19383 = (0);
while(true){
if((i__19084_19383 < count__19083_19382)){
var vec__19120_19384 = chunk__19082_19381.cljs$core$IIndexed$_nth$arity$2(null,i__19084_19383);
var name_19385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19120_19384,(0),null);
var map__19123_19386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19120_19384,(1),null);
var map__19123_19387__$1 = cljs.core.__destructure_map(map__19123_19386);
var doc_19388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19123_19387__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19123_19387__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19385], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19389], 0));

if(cljs.core.truth_(doc_19388)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19388], 0));
} else {
}


var G__19390 = seq__19081_19380;
var G__19391 = chunk__19082_19381;
var G__19392 = count__19083_19382;
var G__19393 = (i__19084_19383 + (1));
seq__19081_19380 = G__19390;
chunk__19082_19381 = G__19391;
count__19083_19382 = G__19392;
i__19084_19383 = G__19393;
continue;
} else {
var temp__5804__auto___19394 = cljs.core.seq(seq__19081_19380);
if(temp__5804__auto___19394){
var seq__19081_19399__$1 = temp__5804__auto___19394;
if(cljs.core.chunked_seq_QMARK_(seq__19081_19399__$1)){
var c__5568__auto___19400 = cljs.core.chunk_first(seq__19081_19399__$1);
var G__19401 = cljs.core.chunk_rest(seq__19081_19399__$1);
var G__19402 = c__5568__auto___19400;
var G__19403 = cljs.core.count(c__5568__auto___19400);
var G__19404 = (0);
seq__19081_19380 = G__19401;
chunk__19082_19381 = G__19402;
count__19083_19382 = G__19403;
i__19084_19383 = G__19404;
continue;
} else {
var vec__19131_19405 = cljs.core.first(seq__19081_19399__$1);
var name_19406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19131_19405,(0),null);
var map__19134_19407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19131_19405,(1),null);
var map__19134_19408__$1 = cljs.core.__destructure_map(map__19134_19407);
var doc_19409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19134_19408__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19134_19408__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19406], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19410], 0));

if(cljs.core.truth_(doc_19409)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19409], 0));
} else {
}


var G__19411 = cljs.core.next(seq__19081_19399__$1);
var G__19412 = null;
var G__19413 = (0);
var G__19414 = (0);
seq__19081_19380 = G__19411;
chunk__19082_19381 = G__19412;
count__19083_19382 = G__19413;
i__19084_19383 = G__19414;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19137 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19138 = null;
var count__19139 = (0);
var i__19140 = (0);
while(true){
if((i__19140 < count__19139)){
var role = chunk__19138.cljs$core$IIndexed$_nth$arity$2(null,i__19140);
var temp__5804__auto___19415__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19415__$1)){
var spec_19416 = temp__5804__auto___19415__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19416)], 0));
} else {
}


var G__19417 = seq__19137;
var G__19418 = chunk__19138;
var G__19419 = count__19139;
var G__19420 = (i__19140 + (1));
seq__19137 = G__19417;
chunk__19138 = G__19418;
count__19139 = G__19419;
i__19140 = G__19420;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19137);
if(temp__5804__auto____$1){
var seq__19137__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19137__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19137__$1);
var G__19421 = cljs.core.chunk_rest(seq__19137__$1);
var G__19422 = c__5568__auto__;
var G__19423 = cljs.core.count(c__5568__auto__);
var G__19424 = (0);
seq__19137 = G__19421;
chunk__19138 = G__19422;
count__19139 = G__19423;
i__19140 = G__19424;
continue;
} else {
var role = cljs.core.first(seq__19137__$1);
var temp__5804__auto___19425__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19425__$2)){
var spec_19426 = temp__5804__auto___19425__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19426)], 0));
} else {
}


var G__19427 = cljs.core.next(seq__19137__$1);
var G__19428 = null;
var G__19429 = (0);
var G__19430 = (0);
seq__19137 = G__19427;
chunk__19138 = G__19428;
count__19139 = G__19429;
i__19140 = G__19430;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__19432 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__19433 = cljs.core.ex_cause(t);
via = G__19432;
t = G__19433;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19167 = datafied_throwable;
var map__19167__$1 = cljs.core.__destructure_map(map__19167);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19167__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19167__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19167__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19168 = cljs.core.last(via);
var map__19168__$1 = cljs.core.__destructure_map(map__19168);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19168__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19168__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19168__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19169 = data;
var map__19169__$1 = cljs.core.__destructure_map(map__19169);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19169__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19169__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19169__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19170 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19170__$1 = cljs.core.__destructure_map(map__19170);
var top_data = map__19170__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19170__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19175 = phase;
var G__19175__$1 = (((G__19175 instanceof cljs.core.Keyword))?G__19175.fqn:null);
switch (G__19175__$1) {
case "read-source":
var map__19176 = data;
var map__19176__$1 = cljs.core.__destructure_map(map__19176);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19176__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19176__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19178 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19178__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19178,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19178);
var G__19178__$2 = (cljs.core.truth_((function (){var fexpr__19179 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19179.cljs$core$IFn$_invoke$arity$1 ? fexpr__19179.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19179.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19178__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19178__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19178__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19178__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19180 = top_data;
var G__19180__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19180,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19180);
var G__19180__$2 = (cljs.core.truth_((function (){var fexpr__19181 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19181.cljs$core$IFn$_invoke$arity$1 ? fexpr__19181.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19181.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19180__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19180__$1);
var G__19180__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19180__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19180__$2);
var G__19180__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19180__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19180__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19180__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19180__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19183 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19183,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19183,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19183,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19183,(3),null);
var G__19186 = top_data;
var G__19186__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19186,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19186);
var G__19186__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19186__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19186__$1);
var G__19186__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19186__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19186__$2);
var G__19186__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19186__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19186__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19186__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19186__$4;
}

break;
case "execution":
var vec__19192 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19192,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19192,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19192,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19192,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19164_SHARP_){
var or__5045__auto__ = (p1__19164_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__19199 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19199.cljs$core$IFn$_invoke$arity$1 ? fexpr__19199.cljs$core$IFn$_invoke$arity$1(p1__19164_SHARP_) : fexpr__19199.call(null,p1__19164_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__19204 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19204__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19204,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19204);
var G__19204__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19204__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19204__$1);
var G__19204__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19204__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19204__$2);
var G__19204__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19204__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19204__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19204__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19204__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19175__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19228){
var map__19244 = p__19228;
var map__19244__$1 = cljs.core.__destructure_map(map__19244);
var triage_data = map__19244__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19244__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19244__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19244__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19244__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19244__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19244__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19244__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19244__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19265 = phase;
var G__19265__$1 = (((G__19265 instanceof cljs.core.Keyword))?G__19265.fqn:null);
switch (G__19265__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19269 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19270 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19271 = loc;
var G__19272 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19273_19452 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19274_19453 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19275_19454 = true;
var _STAR_print_fn_STAR__temp_val__19276_19455 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19275_19454);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19276_19455);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19223_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19223_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19274_19453);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19273_19452);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19269,G__19270,G__19271,G__19272) : format.call(null,G__19269,G__19270,G__19271,G__19272));

break;
case "macroexpansion":
var G__19294 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19295 = cause_type;
var G__19296 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19297 = loc;
var G__19298 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19294,G__19295,G__19296,G__19297,G__19298) : format.call(null,G__19294,G__19295,G__19296,G__19297,G__19298));

break;
case "compile-syntax-check":
var G__19302 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19303 = cause_type;
var G__19304 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19305 = loc;
var G__19306 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19302,G__19303,G__19304,G__19305,G__19306) : format.call(null,G__19302,G__19303,G__19304,G__19305,G__19306));

break;
case "compilation":
var G__19307 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19308 = cause_type;
var G__19309 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19310 = loc;
var G__19311 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19307,G__19308,G__19309,G__19310,G__19311) : format.call(null,G__19307,G__19308,G__19309,G__19310,G__19311));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19320 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19321 = symbol;
var G__19322 = loc;
var G__19323 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19326_19456 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19327_19457 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19328_19458 = true;
var _STAR_print_fn_STAR__temp_val__19329_19459 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19328_19458);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19329_19459);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19227_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19227_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19327_19457);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19326_19456);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19320,G__19321,G__19322,G__19323) : format.call(null,G__19320,G__19321,G__19322,G__19323));
} else {
var G__19344 = "Execution error%s at %s(%s).\n%s\n";
var G__19345 = cause_type;
var G__19346 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19347 = loc;
var G__19348 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19344,G__19345,G__19346,G__19347,G__19348) : format.call(null,G__19344,G__19345,G__19346,G__19347,G__19348));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19265__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
