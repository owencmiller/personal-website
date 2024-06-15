goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13806 = (function (f,blockable,meta13807){
this.f = f;
this.blockable = blockable;
this.meta13807 = meta13807;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13808,meta13807__$1){
var self__ = this;
var _13808__$1 = this;
return (new cljs.core.async.t_cljs$core$async13806(self__.f,self__.blockable,meta13807__$1));
}));

(cljs.core.async.t_cljs$core$async13806.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13808){
var self__ = this;
var _13808__$1 = this;
return self__.meta13807;
}));

(cljs.core.async.t_cljs$core$async13806.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13806.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13806.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13806.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13806.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13807","meta13807",-1728900852,null)], null);
}));

(cljs.core.async.t_cljs$core$async13806.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13806.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13806");

(cljs.core.async.t_cljs$core$async13806.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13806");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13806.
 */
cljs.core.async.__GT_t_cljs$core$async13806 = (function cljs$core$async$__GT_t_cljs$core$async13806(f,blockable,meta13807){
return (new cljs.core.async.t_cljs$core$async13806(f,blockable,meta13807));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13805 = arguments.length;
switch (G__13805) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async13806(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__13823 = arguments.length;
switch (G__13823) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__13835 = arguments.length;
switch (G__13835) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__13847 = arguments.length;
switch (G__13847) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17018 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17018) : fn1.call(null,val_17018));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17018) : fn1.call(null,val_17018));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__13882 = arguments.length;
switch (G__13882) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___17028 = n;
var x_17030 = (0);
while(true){
if((x_17030 < n__5636__auto___17028)){
(a[x_17030] = x_17030);

var G__17032 = (x_17030 + (1));
x_17030 = G__17032;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13887 = (function (flag,meta13888){
this.flag = flag;
this.meta13888 = meta13888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13889,meta13888__$1){
var self__ = this;
var _13889__$1 = this;
return (new cljs.core.async.t_cljs$core$async13887(self__.flag,meta13888__$1));
}));

(cljs.core.async.t_cljs$core$async13887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13889){
var self__ = this;
var _13889__$1 = this;
return self__.meta13888;
}));

(cljs.core.async.t_cljs$core$async13887.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13887.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13887.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13887.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13887.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13888","meta13888",984466345,null)], null);
}));

(cljs.core.async.t_cljs$core$async13887.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13887.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13887");

(cljs.core.async.t_cljs$core$async13887.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13887");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13887.
 */
cljs.core.async.__GT_t_cljs$core$async13887 = (function cljs$core$async$__GT_t_cljs$core$async13887(flag,meta13888){
return (new cljs.core.async.t_cljs$core$async13887(flag,meta13888));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async13887(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13893 = (function (flag,cb,meta13894){
this.flag = flag;
this.cb = cb;
this.meta13894 = meta13894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13895,meta13894__$1){
var self__ = this;
var _13895__$1 = this;
return (new cljs.core.async.t_cljs$core$async13893(self__.flag,self__.cb,meta13894__$1));
}));

(cljs.core.async.t_cljs$core$async13893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13895){
var self__ = this;
var _13895__$1 = this;
return self__.meta13894;
}));

(cljs.core.async.t_cljs$core$async13893.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13893.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13893.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13893.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async13893.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13894","meta13894",-1452766245,null)], null);
}));

(cljs.core.async.t_cljs$core$async13893.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13893.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13893");

(cljs.core.async.t_cljs$core$async13893.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13893");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13893.
 */
cljs.core.async.__GT_t_cljs$core$async13893 = (function cljs$core$async$__GT_t_cljs$core$async13893(flag,cb,meta13894){
return (new cljs.core.async.t_cljs$core$async13893(flag,cb,meta13894));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async13893(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13911_SHARP_){
var G__13919 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13911_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13919) : fret.call(null,G__13919));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13913_SHARP_){
var G__13920 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13913_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13920) : fret.call(null,G__13920));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17051 = (i + (1));
i = G__17051;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17064 = arguments.length;
var i__5770__auto___17065 = (0);
while(true){
if((i__5770__auto___17065 < len__5769__auto___17064)){
args__5775__auto__.push((arguments[i__5770__auto___17065]));

var G__17067 = (i__5770__auto___17065 + (1));
i__5770__auto___17065 = G__17067;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13928){
var map__13929 = p__13928;
var map__13929__$1 = cljs.core.__destructure_map(map__13929);
var opts = map__13929__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13924){
var G__13925 = cljs.core.first(seq13924);
var seq13924__$1 = cljs.core.next(seq13924);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13925,seq13924__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__13941 = arguments.length;
switch (G__13941) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13711__auto___17072 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13712__auto__ = (function (){var switch__13461__auto__ = (function (state_13988){
var state_val_13990 = (state_13988[(1)]);
if((state_val_13990 === (7))){
var inst_13983 = (state_13988[(2)]);
var state_13988__$1 = state_13988;
var statearr_13999_17073 = state_13988__$1;
(statearr_13999_17073[(2)] = inst_13983);

(statearr_13999_17073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13990 === (1))){
var state_13988__$1 = state_13988;
var statearr_14004_17074 = state_13988__$1;
(statearr_14004_17074[(2)] = null);

(statearr_14004_17074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13990 === (4))){
var inst_13963 = (state_13988[(7)]);
var inst_13963__$1 = (state_13988[(2)]);
var inst_13965 = (inst_13963__$1 == null);
var state_13988__$1 = (function (){var statearr_14005 = state_13988;
(statearr_14005[(7)] = inst_13963__$1);

return statearr_14005;
})();
if(cljs.core.truth_(inst_13965)){
var statearr_14006_17075 = state_13988__$1;
(statearr_14006_17075[(1)] = (5));

} else {
var statearr_14007_17076 = state_13988__$1;
(statearr_14007_17076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13990 === (13))){
var state_13988__$1 = state_13988;
var statearr_14009_17077 = state_13988__$1;
(statearr_14009_17077[(2)] = null);

(statearr_14009_17077[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13990 === (6))){
var inst_13963 = (state_13988[(7)]);
var state_13988__$1 = state_13988;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13988__$1,(11),to,inst_13963);
} else {
if((state_val_13990 === (3))){
var inst_13985 = (state_13988[(2)]);
var state_13988__$1 = state_13988;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13988__$1,inst_13985);
} else {
if((state_val_13990 === (12))){
var state_13988__$1 = state_13988;
var statearr_14013_17079 = state_13988__$1;
(statearr_14013_17079[(2)] = null);

(statearr_14013_17079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13990 === (2))){
var state_13988__$1 = state_13988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13988__$1,(4),from);
} else {
if((state_val_13990 === (11))){
var inst_13976 = (state_13988[(2)]);
var state_13988__$1 = state_13988;
if(cljs.core.truth_(inst_13976)){
var statearr_14014_17082 = state_13988__$1;
(statearr_14014_17082[(1)] = (12));

} else {
var statearr_14015_17083 = state_13988__$1;
(statearr_14015_17083[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13990 === (9))){
var state_13988__$1 = state_13988;
var statearr_14019_17084 = state_13988__$1;
(statearr_14019_17084[(2)] = null);

(statearr_14019_17084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13990 === (5))){
var state_13988__$1 = state_13988;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14020_17085 = state_13988__$1;
(statearr_14020_17085[(1)] = (8));

} else {
var statearr_14021_17086 = state_13988__$1;
(statearr_14021_17086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13990 === (14))){
var inst_13981 = (state_13988[(2)]);
var state_13988__$1 = state_13988;
var statearr_14022_17087 = state_13988__$1;
(statearr_14022_17087[(2)] = inst_13981);

(statearr_14022_17087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13990 === (10))){
var inst_13973 = (state_13988[(2)]);
var state_13988__$1 = state_13988;
var statearr_14023_17088 = state_13988__$1;
(statearr_14023_17088[(2)] = inst_13973);

(statearr_14023_17088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13990 === (8))){
var inst_13970 = cljs.core.async.close_BANG_(to);
var state_13988__$1 = state_13988;
var statearr_14027_17089 = state_13988__$1;
(statearr_14027_17089[(2)] = inst_13970);

(statearr_14027_17089[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13462__auto__ = null;
var cljs$core$async$state_machine__13462__auto____0 = (function (){
var statearr_14033 = [null,null,null,null,null,null,null,null];
(statearr_14033[(0)] = cljs$core$async$state_machine__13462__auto__);

(statearr_14033[(1)] = (1));

return statearr_14033;
});
var cljs$core$async$state_machine__13462__auto____1 = (function (state_13988){
while(true){
var ret_value__13463__auto__ = (function (){try{while(true){
var result__13464__auto__ = switch__13461__auto__(state_13988);
if(cljs.core.keyword_identical_QMARK_(result__13464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13464__auto__;
}
break;
}
}catch (e14034){var ex__13465__auto__ = e14034;
var statearr_14039_17092 = state_13988;
(statearr_14039_17092[(2)] = ex__13465__auto__);


if(cljs.core.seq((state_13988[(4)]))){
var statearr_14040_17093 = state_13988;
(statearr_14040_17093[(1)] = cljs.core.first((state_13988[(4)])));

} else {
throw ex__13465__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17095 = state_13988;
state_13988 = G__17095;
continue;
} else {
return ret_value__13463__auto__;
}
break;
}
});
cljs$core$async$state_machine__13462__auto__ = function(state_13988){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13462__auto____1.call(this,state_13988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13462__auto____0;
cljs$core$async$state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13462__auto____1;
return cljs$core$async$state_machine__13462__auto__;
})()
})();
var state__13713__auto__ = (function (){var statearr_14044 = f__13712__auto__();
(statearr_14044[(6)] = c__13711__auto___17072);

return statearr_14044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13713__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14065){
var vec__14066 = p__14065;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14066,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14066,(1),null);
var job = vec__14066;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13711__auto___17096 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13712__auto__ = (function (){var switch__13461__auto__ = (function (state_14074){
var state_val_14075 = (state_14074[(1)]);
if((state_val_14075 === (1))){
var state_14074__$1 = state_14074;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14074__$1,(2),res,v);
} else {
if((state_val_14075 === (2))){
var inst_14071 = (state_14074[(2)]);
var inst_14072 = cljs.core.async.close_BANG_(res);
var state_14074__$1 = (function (){var statearr_14082 = state_14074;
(statearr_14082[(7)] = inst_14071);

return statearr_14082;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14074__$1,inst_14072);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13462__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13462__auto____0 = (function (){
var statearr_14083 = [null,null,null,null,null,null,null,null];
(statearr_14083[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13462__auto__);

(statearr_14083[(1)] = (1));

return statearr_14083;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13462__auto____1 = (function (state_14074){
while(true){
var ret_value__13463__auto__ = (function (){try{while(true){
var result__13464__auto__ = switch__13461__auto__(state_14074);
if(cljs.core.keyword_identical_QMARK_(result__13464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13464__auto__;
}
break;
}
}catch (e14088){var ex__13465__auto__ = e14088;
var statearr_14090_17100 = state_14074;
(statearr_14090_17100[(2)] = ex__13465__auto__);


if(cljs.core.seq((state_14074[(4)]))){
var statearr_14094_17101 = state_14074;
(statearr_14094_17101[(1)] = cljs.core.first((state_14074[(4)])));

} else {
throw ex__13465__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17102 = state_14074;
state_14074 = G__17102;
continue;
} else {
return ret_value__13463__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13462__auto__ = function(state_14074){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13462__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13462__auto____1.call(this,state_14074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13462__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13462__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13462__auto__;
})()
})();
var state__13713__auto__ = (function (){var statearr_14096 = f__13712__auto__();
(statearr_14096[(6)] = c__13711__auto___17096);

return statearr_14096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13713__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14098){
var vec__14101 = p__14098;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14101,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14101,(1),null);
var job = vec__14101;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___17107 = n;
var __17108 = (0);
while(true){
if((__17108 < n__5636__auto___17107)){
var G__14111_17109 = type;
var G__14111_17110__$1 = (((G__14111_17109 instanceof cljs.core.Keyword))?G__14111_17109.fqn:null);
switch (G__14111_17110__$1) {
case "compute":
var c__13711__auto___17112 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17108,c__13711__auto___17112,G__14111_17109,G__14111_17110__$1,n__5636__auto___17107,jobs,results,process__$1,async){
return (function (){
var f__13712__auto__ = (function (){var switch__13461__auto__ = ((function (__17108,c__13711__auto___17112,G__14111_17109,G__14111_17110__$1,n__5636__auto___17107,jobs,results,process__$1,async){
return (function (state_14130){
var state_val_14131 = (state_14130[(1)]);
if((state_val_14131 === (1))){
var state_14130__$1 = state_14130;
var statearr_14143_17116 = state_14130__$1;
(statearr_14143_17116[(2)] = null);

(statearr_14143_17116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14131 === (2))){
var state_14130__$1 = state_14130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14130__$1,(4),jobs);
} else {
if((state_val_14131 === (3))){
var inst_14127 = (state_14130[(2)]);
var state_14130__$1 = state_14130;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14130__$1,inst_14127);
} else {
if((state_val_14131 === (4))){
var inst_14117 = (state_14130[(2)]);
var inst_14118 = process__$1(inst_14117);
var state_14130__$1 = state_14130;
if(cljs.core.truth_(inst_14118)){
var statearr_14159_17117 = state_14130__$1;
(statearr_14159_17117[(1)] = (5));

} else {
var statearr_14161_17118 = state_14130__$1;
(statearr_14161_17118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14131 === (5))){
var state_14130__$1 = state_14130;
var statearr_14163_17121 = state_14130__$1;
(statearr_14163_17121[(2)] = null);

(statearr_14163_17121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14131 === (6))){
var state_14130__$1 = state_14130;
var statearr_14166_17123 = state_14130__$1;
(statearr_14166_17123[(2)] = null);

(statearr_14166_17123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14131 === (7))){
var inst_14125 = (state_14130[(2)]);
var state_14130__$1 = state_14130;
var statearr_14167_17125 = state_14130__$1;
(statearr_14167_17125[(2)] = inst_14125);

(statearr_14167_17125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17108,c__13711__auto___17112,G__14111_17109,G__14111_17110__$1,n__5636__auto___17107,jobs,results,process__$1,async))
;
return ((function (__17108,switch__13461__auto__,c__13711__auto___17112,G__14111_17109,G__14111_17110__$1,n__5636__auto___17107,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13462__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13462__auto____0 = (function (){
var statearr_14171 = [null,null,null,null,null,null,null];
(statearr_14171[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13462__auto__);

(statearr_14171[(1)] = (1));

return statearr_14171;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13462__auto____1 = (function (state_14130){
while(true){
var ret_value__13463__auto__ = (function (){try{while(true){
var result__13464__auto__ = switch__13461__auto__(state_14130);
if(cljs.core.keyword_identical_QMARK_(result__13464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13464__auto__;
}
break;
}
}catch (e14173){var ex__13465__auto__ = e14173;
var statearr_14174_17129 = state_14130;
(statearr_14174_17129[(2)] = ex__13465__auto__);


if(cljs.core.seq((state_14130[(4)]))){
var statearr_14175_17130 = state_14130;
(statearr_14175_17130[(1)] = cljs.core.first((state_14130[(4)])));

} else {
throw ex__13465__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17131 = state_14130;
state_14130 = G__17131;
continue;
} else {
return ret_value__13463__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13462__auto__ = function(state_14130){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13462__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13462__auto____1.call(this,state_14130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13462__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13462__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13462__auto__;
})()
;})(__17108,switch__13461__auto__,c__13711__auto___17112,G__14111_17109,G__14111_17110__$1,n__5636__auto___17107,jobs,results,process__$1,async))
})();
var state__13713__auto__ = (function (){var statearr_14176 = f__13712__auto__();
(statearr_14176[(6)] = c__13711__auto___17112);

return statearr_14176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13713__auto__);
});})(__17108,c__13711__auto___17112,G__14111_17109,G__14111_17110__$1,n__5636__auto___17107,jobs,results,process__$1,async))
);


break;
case "async":
var c__13711__auto___17132 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17108,c__13711__auto___17132,G__14111_17109,G__14111_17110__$1,n__5636__auto___17107,jobs,results,process__$1,async){
return (function (){
var f__13712__auto__ = (function (){var switch__13461__auto__ = ((function (__17108,c__13711__auto___17132,G__14111_17109,G__14111_17110__$1,n__5636__auto___17107,jobs,results,process__$1,async){
return (function (state_14189){
var state_val_14190 = (state_14189[(1)]);
if((state_val_14190 === (1))){
var state_14189__$1 = state_14189;
var statearr_14195_17133 = state_14189__$1;
(statearr_14195_17133[(2)] = null);

(statearr_14195_17133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14190 === (2))){
var state_14189__$1 = state_14189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14189__$1,(4),jobs);
} else {
if((state_val_14190 === (3))){
var inst_14187 = (state_14189[(2)]);
var state_14189__$1 = state_14189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14189__$1,inst_14187);
} else {
if((state_val_14190 === (4))){
var inst_14179 = (state_14189[(2)]);
var inst_14180 = async(inst_14179);
var state_14189__$1 = state_14189;
if(cljs.core.truth_(inst_14180)){
var statearr_14196_17135 = state_14189__$1;
(statearr_14196_17135[(1)] = (5));

} else {
var statearr_14197_17136 = state_14189__$1;
(statearr_14197_17136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14190 === (5))){
var state_14189__$1 = state_14189;
var statearr_14198_17137 = state_14189__$1;
(statearr_14198_17137[(2)] = null);

(statearr_14198_17137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14190 === (6))){
var state_14189__$1 = state_14189;
var statearr_14199_17139 = state_14189__$1;
(statearr_14199_17139[(2)] = null);

(statearr_14199_17139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14190 === (7))){
var inst_14185 = (state_14189[(2)]);
var state_14189__$1 = state_14189;
var statearr_14200_17142 = state_14189__$1;
(statearr_14200_17142[(2)] = inst_14185);

(statearr_14200_17142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17108,c__13711__auto___17132,G__14111_17109,G__14111_17110__$1,n__5636__auto___17107,jobs,results,process__$1,async))
;
return ((function (__17108,switch__13461__auto__,c__13711__auto___17132,G__14111_17109,G__14111_17110__$1,n__5636__auto___17107,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13462__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13462__auto____0 = (function (){
var statearr_14202 = [null,null,null,null,null,null,null];
(statearr_14202[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13462__auto__);

(statearr_14202[(1)] = (1));

return statearr_14202;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13462__auto____1 = (function (state_14189){
while(true){
var ret_value__13463__auto__ = (function (){try{while(true){
var result__13464__auto__ = switch__13461__auto__(state_14189);
if(cljs.core.keyword_identical_QMARK_(result__13464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13464__auto__;
}
break;
}
}catch (e14206){var ex__13465__auto__ = e14206;
var statearr_14207_17143 = state_14189;
(statearr_14207_17143[(2)] = ex__13465__auto__);


if(cljs.core.seq((state_14189[(4)]))){
var statearr_14212_17144 = state_14189;
(statearr_14212_17144[(1)] = cljs.core.first((state_14189[(4)])));

} else {
throw ex__13465__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17145 = state_14189;
state_14189 = G__17145;
continue;
} else {
return ret_value__13463__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13462__auto__ = function(state_14189){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13462__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13462__auto____1.call(this,state_14189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13462__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13462__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13462__auto__;
})()
;})(__17108,switch__13461__auto__,c__13711__auto___17132,G__14111_17109,G__14111_17110__$1,n__5636__auto___17107,jobs,results,process__$1,async))
})();
var state__13713__auto__ = (function (){var statearr_14224 = f__13712__auto__();
(statearr_14224[(6)] = c__13711__auto___17132);

return statearr_14224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13713__auto__);
});})(__17108,c__13711__auto___17132,G__14111_17109,G__14111_17110__$1,n__5636__auto___17107,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14111_17110__$1)].join('')));

}

var G__17146 = (__17108 + (1));
__17108 = G__17146;
continue;
} else {
}
break;
}

var c__13711__auto___17147 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13712__auto__ = (function (){var switch__13461__auto__ = (function (state_14262){
var state_val_14263 = (state_14262[(1)]);
if((state_val_14263 === (7))){
var inst_14258 = (state_14262[(2)]);
var state_14262__$1 = state_14262;
var statearr_14273_17148 = state_14262__$1;
(statearr_14273_17148[(2)] = inst_14258);

(statearr_14273_17148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14263 === (1))){
var state_14262__$1 = state_14262;
var statearr_14274_17149 = state_14262__$1;
(statearr_14274_17149[(2)] = null);

(statearr_14274_17149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14263 === (4))){
var inst_14239 = (state_14262[(7)]);
var inst_14239__$1 = (state_14262[(2)]);
var inst_14240 = (inst_14239__$1 == null);
var state_14262__$1 = (function (){var statearr_14279 = state_14262;
(statearr_14279[(7)] = inst_14239__$1);

return statearr_14279;
})();
if(cljs.core.truth_(inst_14240)){
var statearr_14280_17150 = state_14262__$1;
(statearr_14280_17150[(1)] = (5));

} else {
var statearr_14281_17151 = state_14262__$1;
(statearr_14281_17151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14263 === (6))){
var inst_14244 = (state_14262[(8)]);
var inst_14239 = (state_14262[(7)]);
var inst_14244__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14245 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14250 = [inst_14239,inst_14244__$1];
var inst_14251 = (new cljs.core.PersistentVector(null,2,(5),inst_14245,inst_14250,null));
var state_14262__$1 = (function (){var statearr_14282 = state_14262;
(statearr_14282[(8)] = inst_14244__$1);

return statearr_14282;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14262__$1,(8),jobs,inst_14251);
} else {
if((state_val_14263 === (3))){
var inst_14260 = (state_14262[(2)]);
var state_14262__$1 = state_14262;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14262__$1,inst_14260);
} else {
if((state_val_14263 === (2))){
var state_14262__$1 = state_14262;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14262__$1,(4),from);
} else {
if((state_val_14263 === (9))){
var inst_14255 = (state_14262[(2)]);
var state_14262__$1 = (function (){var statearr_14286 = state_14262;
(statearr_14286[(9)] = inst_14255);

return statearr_14286;
})();
var statearr_14287_17168 = state_14262__$1;
(statearr_14287_17168[(2)] = null);

(statearr_14287_17168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14263 === (5))){
var inst_14242 = cljs.core.async.close_BANG_(jobs);
var state_14262__$1 = state_14262;
var statearr_14288_17169 = state_14262__$1;
(statearr_14288_17169[(2)] = inst_14242);

(statearr_14288_17169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14263 === (8))){
var inst_14244 = (state_14262[(8)]);
var inst_14253 = (state_14262[(2)]);
var state_14262__$1 = (function (){var statearr_14289 = state_14262;
(statearr_14289[(10)] = inst_14253);

return statearr_14289;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14262__$1,(9),results,inst_14244);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13462__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13462__auto____0 = (function (){
var statearr_14290 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14290[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13462__auto__);

(statearr_14290[(1)] = (1));

return statearr_14290;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13462__auto____1 = (function (state_14262){
while(true){
var ret_value__13463__auto__ = (function (){try{while(true){
var result__13464__auto__ = switch__13461__auto__(state_14262);
if(cljs.core.keyword_identical_QMARK_(result__13464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13464__auto__;
}
break;
}
}catch (e14291){var ex__13465__auto__ = e14291;
var statearr_14292_17182 = state_14262;
(statearr_14292_17182[(2)] = ex__13465__auto__);


if(cljs.core.seq((state_14262[(4)]))){
var statearr_14293_17183 = state_14262;
(statearr_14293_17183[(1)] = cljs.core.first((state_14262[(4)])));

} else {
throw ex__13465__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17184 = state_14262;
state_14262 = G__17184;
continue;
} else {
return ret_value__13463__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13462__auto__ = function(state_14262){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13462__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13462__auto____1.call(this,state_14262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13462__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13462__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13462__auto__;
})()
})();
var state__13713__auto__ = (function (){var statearr_14300 = f__13712__auto__();
(statearr_14300[(6)] = c__13711__auto___17147);

return statearr_14300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13713__auto__);
}));


var c__13711__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13712__auto__ = (function (){var switch__13461__auto__ = (function (state_14355){
var state_val_14356 = (state_14355[(1)]);
if((state_val_14356 === (7))){
var inst_14351 = (state_14355[(2)]);
var state_14355__$1 = state_14355;
var statearr_14357_17188 = state_14355__$1;
(statearr_14357_17188[(2)] = inst_14351);

(statearr_14357_17188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14356 === (20))){
var state_14355__$1 = state_14355;
var statearr_14358_17189 = state_14355__$1;
(statearr_14358_17189[(2)] = null);

(statearr_14358_17189[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14356 === (1))){
var state_14355__$1 = state_14355;
var statearr_14360_17190 = state_14355__$1;
(statearr_14360_17190[(2)] = null);

(statearr_14360_17190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14356 === (4))){
var inst_14315 = (state_14355[(7)]);
var inst_14315__$1 = (state_14355[(2)]);
var inst_14317 = (inst_14315__$1 == null);
var state_14355__$1 = (function (){var statearr_14363 = state_14355;
(statearr_14363[(7)] = inst_14315__$1);

return statearr_14363;
})();
if(cljs.core.truth_(inst_14317)){
var statearr_14364_17191 = state_14355__$1;
(statearr_14364_17191[(1)] = (5));

} else {
var statearr_14365_17192 = state_14355__$1;
(statearr_14365_17192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14356 === (15))){
var inst_14333 = (state_14355[(8)]);
var state_14355__$1 = state_14355;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14355__$1,(18),to,inst_14333);
} else {
if((state_val_14356 === (21))){
var inst_14346 = (state_14355[(2)]);
var state_14355__$1 = state_14355;
var statearr_14366_17197 = state_14355__$1;
(statearr_14366_17197[(2)] = inst_14346);

(statearr_14366_17197[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14356 === (13))){
var inst_14348 = (state_14355[(2)]);
var state_14355__$1 = (function (){var statearr_14367 = state_14355;
(statearr_14367[(9)] = inst_14348);

return statearr_14367;
})();
var statearr_14368_17201 = state_14355__$1;
(statearr_14368_17201[(2)] = null);

(statearr_14368_17201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14356 === (6))){
var inst_14315 = (state_14355[(7)]);
var state_14355__$1 = state_14355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14355__$1,(11),inst_14315);
} else {
if((state_val_14356 === (17))){
var inst_14341 = (state_14355[(2)]);
var state_14355__$1 = state_14355;
if(cljs.core.truth_(inst_14341)){
var statearr_14379_17202 = state_14355__$1;
(statearr_14379_17202[(1)] = (19));

} else {
var statearr_14381_17203 = state_14355__$1;
(statearr_14381_17203[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14356 === (3))){
var inst_14353 = (state_14355[(2)]);
var state_14355__$1 = state_14355;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14355__$1,inst_14353);
} else {
if((state_val_14356 === (12))){
var inst_14330 = (state_14355[(10)]);
var state_14355__$1 = state_14355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14355__$1,(14),inst_14330);
} else {
if((state_val_14356 === (2))){
var state_14355__$1 = state_14355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14355__$1,(4),results);
} else {
if((state_val_14356 === (19))){
var state_14355__$1 = state_14355;
var statearr_14393_17208 = state_14355__$1;
(statearr_14393_17208[(2)] = null);

(statearr_14393_17208[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14356 === (11))){
var inst_14330 = (state_14355[(2)]);
var state_14355__$1 = (function (){var statearr_14394 = state_14355;
(statearr_14394[(10)] = inst_14330);

return statearr_14394;
})();
var statearr_14395_17209 = state_14355__$1;
(statearr_14395_17209[(2)] = null);

(statearr_14395_17209[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14356 === (9))){
var state_14355__$1 = state_14355;
var statearr_14396_17210 = state_14355__$1;
(statearr_14396_17210[(2)] = null);

(statearr_14396_17210[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14356 === (5))){
var state_14355__$1 = state_14355;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14401_17211 = state_14355__$1;
(statearr_14401_17211[(1)] = (8));

} else {
var statearr_14403_17220 = state_14355__$1;
(statearr_14403_17220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14356 === (14))){
var inst_14333 = (state_14355[(8)]);
var inst_14335 = (state_14355[(11)]);
var inst_14333__$1 = (state_14355[(2)]);
var inst_14334 = (inst_14333__$1 == null);
var inst_14335__$1 = cljs.core.not(inst_14334);
var state_14355__$1 = (function (){var statearr_14420 = state_14355;
(statearr_14420[(8)] = inst_14333__$1);

(statearr_14420[(11)] = inst_14335__$1);

return statearr_14420;
})();
if(inst_14335__$1){
var statearr_14421_17230 = state_14355__$1;
(statearr_14421_17230[(1)] = (15));

} else {
var statearr_14422_17231 = state_14355__$1;
(statearr_14422_17231[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14356 === (16))){
var inst_14335 = (state_14355[(11)]);
var state_14355__$1 = state_14355;
var statearr_14423_17232 = state_14355__$1;
(statearr_14423_17232[(2)] = inst_14335);

(statearr_14423_17232[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14356 === (10))){
var inst_14327 = (state_14355[(2)]);
var state_14355__$1 = state_14355;
var statearr_14428_17237 = state_14355__$1;
(statearr_14428_17237[(2)] = inst_14327);

(statearr_14428_17237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14356 === (18))){
var inst_14338 = (state_14355[(2)]);
var state_14355__$1 = state_14355;
var statearr_14434_17249 = state_14355__$1;
(statearr_14434_17249[(2)] = inst_14338);

(statearr_14434_17249[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14356 === (8))){
var inst_14324 = cljs.core.async.close_BANG_(to);
var state_14355__$1 = state_14355;
var statearr_14447_17250 = state_14355__$1;
(statearr_14447_17250[(2)] = inst_14324);

(statearr_14447_17250[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13462__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13462__auto____0 = (function (){
var statearr_14448 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14448[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13462__auto__);

(statearr_14448[(1)] = (1));

return statearr_14448;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13462__auto____1 = (function (state_14355){
while(true){
var ret_value__13463__auto__ = (function (){try{while(true){
var result__13464__auto__ = switch__13461__auto__(state_14355);
if(cljs.core.keyword_identical_QMARK_(result__13464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13464__auto__;
}
break;
}
}catch (e14449){var ex__13465__auto__ = e14449;
var statearr_14450_17255 = state_14355;
(statearr_14450_17255[(2)] = ex__13465__auto__);


if(cljs.core.seq((state_14355[(4)]))){
var statearr_14451_17256 = state_14355;
(statearr_14451_17256[(1)] = cljs.core.first((state_14355[(4)])));

} else {
throw ex__13465__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17266 = state_14355;
state_14355 = G__17266;
continue;
} else {
return ret_value__13463__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13462__auto__ = function(state_14355){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13462__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13462__auto____1.call(this,state_14355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13462__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13462__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13462__auto__;
})()
})();
var state__13713__auto__ = (function (){var statearr_14452 = f__13712__auto__();
(statearr_14452[(6)] = c__13711__auto__);

return statearr_14452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13713__auto__);
}));

return c__13711__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14455 = arguments.length;
switch (G__14455) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14462 = arguments.length;
switch (G__14462) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14475 = arguments.length;
switch (G__14475) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13711__auto___17285 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13712__auto__ = (function (){var switch__13461__auto__ = (function (state_14505){
var state_val_14506 = (state_14505[(1)]);
if((state_val_14506 === (7))){
var inst_14501 = (state_14505[(2)]);
var state_14505__$1 = state_14505;
var statearr_14509_17286 = state_14505__$1;
(statearr_14509_17286[(2)] = inst_14501);

(statearr_14509_17286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (1))){
var state_14505__$1 = state_14505;
var statearr_14511_17287 = state_14505__$1;
(statearr_14511_17287[(2)] = null);

(statearr_14511_17287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (4))){
var inst_14482 = (state_14505[(7)]);
var inst_14482__$1 = (state_14505[(2)]);
var inst_14483 = (inst_14482__$1 == null);
var state_14505__$1 = (function (){var statearr_14514 = state_14505;
(statearr_14514[(7)] = inst_14482__$1);

return statearr_14514;
})();
if(cljs.core.truth_(inst_14483)){
var statearr_14516_17288 = state_14505__$1;
(statearr_14516_17288[(1)] = (5));

} else {
var statearr_14517_17289 = state_14505__$1;
(statearr_14517_17289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (13))){
var state_14505__$1 = state_14505;
var statearr_14518_17294 = state_14505__$1;
(statearr_14518_17294[(2)] = null);

(statearr_14518_17294[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (6))){
var inst_14482 = (state_14505[(7)]);
var inst_14488 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14482) : p.call(null,inst_14482));
var state_14505__$1 = state_14505;
if(cljs.core.truth_(inst_14488)){
var statearr_14519_17295 = state_14505__$1;
(statearr_14519_17295[(1)] = (9));

} else {
var statearr_14520_17296 = state_14505__$1;
(statearr_14520_17296[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (3))){
var inst_14503 = (state_14505[(2)]);
var state_14505__$1 = state_14505;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14505__$1,inst_14503);
} else {
if((state_val_14506 === (12))){
var state_14505__$1 = state_14505;
var statearr_14525_17301 = state_14505__$1;
(statearr_14525_17301[(2)] = null);

(statearr_14525_17301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (2))){
var state_14505__$1 = state_14505;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14505__$1,(4),ch);
} else {
if((state_val_14506 === (11))){
var inst_14482 = (state_14505[(7)]);
var inst_14492 = (state_14505[(2)]);
var state_14505__$1 = state_14505;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14505__$1,(8),inst_14492,inst_14482);
} else {
if((state_val_14506 === (9))){
var state_14505__$1 = state_14505;
var statearr_14528_17306 = state_14505__$1;
(statearr_14528_17306[(2)] = tc);

(statearr_14528_17306[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (5))){
var inst_14485 = cljs.core.async.close_BANG_(tc);
var inst_14486 = cljs.core.async.close_BANG_(fc);
var state_14505__$1 = (function (){var statearr_14531 = state_14505;
(statearr_14531[(8)] = inst_14485);

return statearr_14531;
})();
var statearr_14534_17311 = state_14505__$1;
(statearr_14534_17311[(2)] = inst_14486);

(statearr_14534_17311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (14))){
var inst_14499 = (state_14505[(2)]);
var state_14505__$1 = state_14505;
var statearr_14538_17312 = state_14505__$1;
(statearr_14538_17312[(2)] = inst_14499);

(statearr_14538_17312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (10))){
var state_14505__$1 = state_14505;
var statearr_14541_17313 = state_14505__$1;
(statearr_14541_17313[(2)] = fc);

(statearr_14541_17313[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (8))){
var inst_14494 = (state_14505[(2)]);
var state_14505__$1 = state_14505;
if(cljs.core.truth_(inst_14494)){
var statearr_14542_17319 = state_14505__$1;
(statearr_14542_17319[(1)] = (12));

} else {
var statearr_14543_17320 = state_14505__$1;
(statearr_14543_17320[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13462__auto__ = null;
var cljs$core$async$state_machine__13462__auto____0 = (function (){
var statearr_14547 = [null,null,null,null,null,null,null,null,null];
(statearr_14547[(0)] = cljs$core$async$state_machine__13462__auto__);

(statearr_14547[(1)] = (1));

return statearr_14547;
});
var cljs$core$async$state_machine__13462__auto____1 = (function (state_14505){
while(true){
var ret_value__13463__auto__ = (function (){try{while(true){
var result__13464__auto__ = switch__13461__auto__(state_14505);
if(cljs.core.keyword_identical_QMARK_(result__13464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13464__auto__;
}
break;
}
}catch (e14550){var ex__13465__auto__ = e14550;
var statearr_14551_17329 = state_14505;
(statearr_14551_17329[(2)] = ex__13465__auto__);


if(cljs.core.seq((state_14505[(4)]))){
var statearr_14552_17332 = state_14505;
(statearr_14552_17332[(1)] = cljs.core.first((state_14505[(4)])));

} else {
throw ex__13465__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17333 = state_14505;
state_14505 = G__17333;
continue;
} else {
return ret_value__13463__auto__;
}
break;
}
});
cljs$core$async$state_machine__13462__auto__ = function(state_14505){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13462__auto____1.call(this,state_14505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13462__auto____0;
cljs$core$async$state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13462__auto____1;
return cljs$core$async$state_machine__13462__auto__;
})()
})();
var state__13713__auto__ = (function (){var statearr_14555 = f__13712__auto__();
(statearr_14555[(6)] = c__13711__auto___17285);

return statearr_14555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13713__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13711__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13712__auto__ = (function (){var switch__13461__auto__ = (function (state_14586){
var state_val_14587 = (state_14586[(1)]);
if((state_val_14587 === (7))){
var inst_14581 = (state_14586[(2)]);
var state_14586__$1 = state_14586;
var statearr_14590_17334 = state_14586__$1;
(statearr_14590_17334[(2)] = inst_14581);

(statearr_14590_17334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14587 === (1))){
var inst_14560 = init;
var inst_14561 = inst_14560;
var state_14586__$1 = (function (){var statearr_14593 = state_14586;
(statearr_14593[(7)] = inst_14561);

return statearr_14593;
})();
var statearr_14594_17335 = state_14586__$1;
(statearr_14594_17335[(2)] = null);

(statearr_14594_17335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14587 === (4))){
var inst_14565 = (state_14586[(8)]);
var inst_14565__$1 = (state_14586[(2)]);
var inst_14566 = (inst_14565__$1 == null);
var state_14586__$1 = (function (){var statearr_14595 = state_14586;
(statearr_14595[(8)] = inst_14565__$1);

return statearr_14595;
})();
if(cljs.core.truth_(inst_14566)){
var statearr_14597_17337 = state_14586__$1;
(statearr_14597_17337[(1)] = (5));

} else {
var statearr_14598_17338 = state_14586__$1;
(statearr_14598_17338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14587 === (6))){
var inst_14565 = (state_14586[(8)]);
var inst_14561 = (state_14586[(7)]);
var inst_14570 = (state_14586[(9)]);
var inst_14570__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14561,inst_14565) : f.call(null,inst_14561,inst_14565));
var inst_14571 = cljs.core.reduced_QMARK_(inst_14570__$1);
var state_14586__$1 = (function (){var statearr_14599 = state_14586;
(statearr_14599[(9)] = inst_14570__$1);

return statearr_14599;
})();
if(inst_14571){
var statearr_14603_17344 = state_14586__$1;
(statearr_14603_17344[(1)] = (8));

} else {
var statearr_14604_17345 = state_14586__$1;
(statearr_14604_17345[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14587 === (3))){
var inst_14583 = (state_14586[(2)]);
var state_14586__$1 = state_14586;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14586__$1,inst_14583);
} else {
if((state_val_14587 === (2))){
var state_14586__$1 = state_14586;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14586__$1,(4),ch);
} else {
if((state_val_14587 === (9))){
var inst_14570 = (state_14586[(9)]);
var inst_14561 = inst_14570;
var state_14586__$1 = (function (){var statearr_14606 = state_14586;
(statearr_14606[(7)] = inst_14561);

return statearr_14606;
})();
var statearr_14607_17348 = state_14586__$1;
(statearr_14607_17348[(2)] = null);

(statearr_14607_17348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14587 === (5))){
var inst_14561 = (state_14586[(7)]);
var state_14586__$1 = state_14586;
var statearr_14610_17351 = state_14586__$1;
(statearr_14610_17351[(2)] = inst_14561);

(statearr_14610_17351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14587 === (10))){
var inst_14579 = (state_14586[(2)]);
var state_14586__$1 = state_14586;
var statearr_14613_17354 = state_14586__$1;
(statearr_14613_17354[(2)] = inst_14579);

(statearr_14613_17354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14587 === (8))){
var inst_14570 = (state_14586[(9)]);
var inst_14574 = cljs.core.deref(inst_14570);
var state_14586__$1 = state_14586;
var statearr_14614_17358 = state_14586__$1;
(statearr_14614_17358[(2)] = inst_14574);

(statearr_14614_17358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13462__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13462__auto____0 = (function (){
var statearr_14619 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14619[(0)] = cljs$core$async$reduce_$_state_machine__13462__auto__);

(statearr_14619[(1)] = (1));

return statearr_14619;
});
var cljs$core$async$reduce_$_state_machine__13462__auto____1 = (function (state_14586){
while(true){
var ret_value__13463__auto__ = (function (){try{while(true){
var result__13464__auto__ = switch__13461__auto__(state_14586);
if(cljs.core.keyword_identical_QMARK_(result__13464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13464__auto__;
}
break;
}
}catch (e14621){var ex__13465__auto__ = e14621;
var statearr_14622_17370 = state_14586;
(statearr_14622_17370[(2)] = ex__13465__auto__);


if(cljs.core.seq((state_14586[(4)]))){
var statearr_14623_17373 = state_14586;
(statearr_14623_17373[(1)] = cljs.core.first((state_14586[(4)])));

} else {
throw ex__13465__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17375 = state_14586;
state_14586 = G__17375;
continue;
} else {
return ret_value__13463__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13462__auto__ = function(state_14586){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13462__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13462__auto____1.call(this,state_14586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13462__auto____0;
cljs$core$async$reduce_$_state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13462__auto____1;
return cljs$core$async$reduce_$_state_machine__13462__auto__;
})()
})();
var state__13713__auto__ = (function (){var statearr_14624 = f__13712__auto__();
(statearr_14624[(6)] = c__13711__auto__);

return statearr_14624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13713__auto__);
}));

return c__13711__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13711__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13712__auto__ = (function (){var switch__13461__auto__ = (function (state_14639){
var state_val_14640 = (state_14639[(1)]);
if((state_val_14640 === (1))){
var inst_14634 = cljs.core.async.reduce(f__$1,init,ch);
var state_14639__$1 = state_14639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14639__$1,(2),inst_14634);
} else {
if((state_val_14640 === (2))){
var inst_14636 = (state_14639[(2)]);
var inst_14637 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_14636) : f__$1.call(null,inst_14636));
var state_14639__$1 = state_14639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14639__$1,inst_14637);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13462__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13462__auto____0 = (function (){
var statearr_14647 = [null,null,null,null,null,null,null];
(statearr_14647[(0)] = cljs$core$async$transduce_$_state_machine__13462__auto__);

(statearr_14647[(1)] = (1));

return statearr_14647;
});
var cljs$core$async$transduce_$_state_machine__13462__auto____1 = (function (state_14639){
while(true){
var ret_value__13463__auto__ = (function (){try{while(true){
var result__13464__auto__ = switch__13461__auto__(state_14639);
if(cljs.core.keyword_identical_QMARK_(result__13464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13464__auto__;
}
break;
}
}catch (e14649){var ex__13465__auto__ = e14649;
var statearr_14650_17385 = state_14639;
(statearr_14650_17385[(2)] = ex__13465__auto__);


if(cljs.core.seq((state_14639[(4)]))){
var statearr_14652_17389 = state_14639;
(statearr_14652_17389[(1)] = cljs.core.first((state_14639[(4)])));

} else {
throw ex__13465__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17393 = state_14639;
state_14639 = G__17393;
continue;
} else {
return ret_value__13463__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13462__auto__ = function(state_14639){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13462__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13462__auto____1.call(this,state_14639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13462__auto____0;
cljs$core$async$transduce_$_state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13462__auto____1;
return cljs$core$async$transduce_$_state_machine__13462__auto__;
})()
})();
var state__13713__auto__ = (function (){var statearr_14664 = f__13712__auto__();
(statearr_14664[(6)] = c__13711__auto__);

return statearr_14664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13713__auto__);
}));

return c__13711__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__14670 = arguments.length;
switch (G__14670) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13711__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13712__auto__ = (function (){var switch__13461__auto__ = (function (state_14707){
var state_val_14708 = (state_14707[(1)]);
if((state_val_14708 === (7))){
var inst_14688 = (state_14707[(2)]);
var state_14707__$1 = state_14707;
var statearr_14712_17400 = state_14707__$1;
(statearr_14712_17400[(2)] = inst_14688);

(statearr_14712_17400[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14708 === (1))){
var inst_14682 = cljs.core.seq(coll);
var inst_14683 = inst_14682;
var state_14707__$1 = (function (){var statearr_14713 = state_14707;
(statearr_14713[(7)] = inst_14683);

return statearr_14713;
})();
var statearr_14715_17401 = state_14707__$1;
(statearr_14715_17401[(2)] = null);

(statearr_14715_17401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14708 === (4))){
var inst_14683 = (state_14707[(7)]);
var inst_14686 = cljs.core.first(inst_14683);
var state_14707__$1 = state_14707;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14707__$1,(7),ch,inst_14686);
} else {
if((state_val_14708 === (13))){
var inst_14700 = (state_14707[(2)]);
var state_14707__$1 = state_14707;
var statearr_14722_17403 = state_14707__$1;
(statearr_14722_17403[(2)] = inst_14700);

(statearr_14722_17403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14708 === (6))){
var inst_14691 = (state_14707[(2)]);
var state_14707__$1 = state_14707;
if(cljs.core.truth_(inst_14691)){
var statearr_14725_17408 = state_14707__$1;
(statearr_14725_17408[(1)] = (8));

} else {
var statearr_14727_17409 = state_14707__$1;
(statearr_14727_17409[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14708 === (3))){
var inst_14704 = (state_14707[(2)]);
var state_14707__$1 = state_14707;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14707__$1,inst_14704);
} else {
if((state_val_14708 === (12))){
var state_14707__$1 = state_14707;
var statearr_14733_17410 = state_14707__$1;
(statearr_14733_17410[(2)] = null);

(statearr_14733_17410[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14708 === (2))){
var inst_14683 = (state_14707[(7)]);
var state_14707__$1 = state_14707;
if(cljs.core.truth_(inst_14683)){
var statearr_14734_17417 = state_14707__$1;
(statearr_14734_17417[(1)] = (4));

} else {
var statearr_14736_17418 = state_14707__$1;
(statearr_14736_17418[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14708 === (11))){
var inst_14697 = cljs.core.async.close_BANG_(ch);
var state_14707__$1 = state_14707;
var statearr_14740_17419 = state_14707__$1;
(statearr_14740_17419[(2)] = inst_14697);

(statearr_14740_17419[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14708 === (9))){
var state_14707__$1 = state_14707;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14742_17422 = state_14707__$1;
(statearr_14742_17422[(1)] = (11));

} else {
var statearr_14744_17423 = state_14707__$1;
(statearr_14744_17423[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14708 === (5))){
var inst_14683 = (state_14707[(7)]);
var state_14707__$1 = state_14707;
var statearr_14745_17424 = state_14707__$1;
(statearr_14745_17424[(2)] = inst_14683);

(statearr_14745_17424[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14708 === (10))){
var inst_14702 = (state_14707[(2)]);
var state_14707__$1 = state_14707;
var statearr_14747_17427 = state_14707__$1;
(statearr_14747_17427[(2)] = inst_14702);

(statearr_14747_17427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14708 === (8))){
var inst_14683 = (state_14707[(7)]);
var inst_14693 = cljs.core.next(inst_14683);
var inst_14683__$1 = inst_14693;
var state_14707__$1 = (function (){var statearr_14748 = state_14707;
(statearr_14748[(7)] = inst_14683__$1);

return statearr_14748;
})();
var statearr_14749_17428 = state_14707__$1;
(statearr_14749_17428[(2)] = null);

(statearr_14749_17428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13462__auto__ = null;
var cljs$core$async$state_machine__13462__auto____0 = (function (){
var statearr_14756 = [null,null,null,null,null,null,null,null];
(statearr_14756[(0)] = cljs$core$async$state_machine__13462__auto__);

(statearr_14756[(1)] = (1));

return statearr_14756;
});
var cljs$core$async$state_machine__13462__auto____1 = (function (state_14707){
while(true){
var ret_value__13463__auto__ = (function (){try{while(true){
var result__13464__auto__ = switch__13461__auto__(state_14707);
if(cljs.core.keyword_identical_QMARK_(result__13464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13464__auto__;
}
break;
}
}catch (e14761){var ex__13465__auto__ = e14761;
var statearr_14762_17441 = state_14707;
(statearr_14762_17441[(2)] = ex__13465__auto__);


if(cljs.core.seq((state_14707[(4)]))){
var statearr_14765_17443 = state_14707;
(statearr_14765_17443[(1)] = cljs.core.first((state_14707[(4)])));

} else {
throw ex__13465__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17444 = state_14707;
state_14707 = G__17444;
continue;
} else {
return ret_value__13463__auto__;
}
break;
}
});
cljs$core$async$state_machine__13462__auto__ = function(state_14707){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13462__auto____1.call(this,state_14707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13462__auto____0;
cljs$core$async$state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13462__auto____1;
return cljs$core$async$state_machine__13462__auto__;
})()
})();
var state__13713__auto__ = (function (){var statearr_14769 = f__13712__auto__();
(statearr_14769[(6)] = c__13711__auto__);

return statearr_14769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13713__auto__);
}));

return c__13711__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__14786 = arguments.length;
switch (G__14786) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17452 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17452(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17460 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17460(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17466 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17466(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17473 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17473(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14857 = (function (ch,cs,meta14858){
this.ch = ch;
this.cs = cs;
this.meta14858 = meta14858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14859,meta14858__$1){
var self__ = this;
var _14859__$1 = this;
return (new cljs.core.async.t_cljs$core$async14857(self__.ch,self__.cs,meta14858__$1));
}));

(cljs.core.async.t_cljs$core$async14857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14859){
var self__ = this;
var _14859__$1 = this;
return self__.meta14858;
}));

(cljs.core.async.t_cljs$core$async14857.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14857.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14857.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14857.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async14857.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async14857.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async14857.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14858","meta14858",-248919306,null)], null);
}));

(cljs.core.async.t_cljs$core$async14857.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14857");

(cljs.core.async.t_cljs$core$async14857.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14857");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14857.
 */
cljs.core.async.__GT_t_cljs$core$async14857 = (function cljs$core$async$__GT_t_cljs$core$async14857(ch,cs,meta14858){
return (new cljs.core.async.t_cljs$core$async14857(ch,cs,meta14858));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async14857(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__13711__auto___17484 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13712__auto__ = (function (){var switch__13461__auto__ = (function (state_15065){
var state_val_15066 = (state_15065[(1)]);
if((state_val_15066 === (7))){
var inst_15058 = (state_15065[(2)]);
var state_15065__$1 = state_15065;
var statearr_15067_17485 = state_15065__$1;
(statearr_15067_17485[(2)] = inst_15058);

(statearr_15067_17485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (20))){
var inst_14937 = (state_15065[(7)]);
var inst_14964 = cljs.core.first(inst_14937);
var inst_14965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14964,(0),null);
var inst_14966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14964,(1),null);
var state_15065__$1 = (function (){var statearr_15068 = state_15065;
(statearr_15068[(8)] = inst_14965);

return statearr_15068;
})();
if(cljs.core.truth_(inst_14966)){
var statearr_15069_17486 = state_15065__$1;
(statearr_15069_17486[(1)] = (22));

} else {
var statearr_15070_17487 = state_15065__$1;
(statearr_15070_17487[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (27))){
var inst_15003 = (state_15065[(9)]);
var inst_14901 = (state_15065[(10)]);
var inst_14998 = (state_15065[(11)]);
var inst_14996 = (state_15065[(12)]);
var inst_15003__$1 = cljs.core._nth(inst_14996,inst_14998);
var inst_15004 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15003__$1,inst_14901,done);
var state_15065__$1 = (function (){var statearr_15075 = state_15065;
(statearr_15075[(9)] = inst_15003__$1);

return statearr_15075;
})();
if(cljs.core.truth_(inst_15004)){
var statearr_15080_17489 = state_15065__$1;
(statearr_15080_17489[(1)] = (30));

} else {
var statearr_15081_17490 = state_15065__$1;
(statearr_15081_17490[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (1))){
var state_15065__$1 = state_15065;
var statearr_15086_17491 = state_15065__$1;
(statearr_15086_17491[(2)] = null);

(statearr_15086_17491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (24))){
var inst_14937 = (state_15065[(7)]);
var inst_14972 = (state_15065[(2)]);
var inst_14973 = cljs.core.next(inst_14937);
var inst_14911 = inst_14973;
var inst_14912 = null;
var inst_14913 = (0);
var inst_14914 = (0);
var state_15065__$1 = (function (){var statearr_15091 = state_15065;
(statearr_15091[(13)] = inst_14911);

(statearr_15091[(14)] = inst_14913);

(statearr_15091[(15)] = inst_14972);

(statearr_15091[(16)] = inst_14914);

(statearr_15091[(17)] = inst_14912);

return statearr_15091;
})();
var statearr_15092_17492 = state_15065__$1;
(statearr_15092_17492[(2)] = null);

(statearr_15092_17492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (39))){
var state_15065__$1 = state_15065;
var statearr_15100_17493 = state_15065__$1;
(statearr_15100_17493[(2)] = null);

(statearr_15100_17493[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (4))){
var inst_14901 = (state_15065[(10)]);
var inst_14901__$1 = (state_15065[(2)]);
var inst_14902 = (inst_14901__$1 == null);
var state_15065__$1 = (function (){var statearr_15101 = state_15065;
(statearr_15101[(10)] = inst_14901__$1);

return statearr_15101;
})();
if(cljs.core.truth_(inst_14902)){
var statearr_15102_17495 = state_15065__$1;
(statearr_15102_17495[(1)] = (5));

} else {
var statearr_15103_17496 = state_15065__$1;
(statearr_15103_17496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (15))){
var inst_14911 = (state_15065[(13)]);
var inst_14913 = (state_15065[(14)]);
var inst_14914 = (state_15065[(16)]);
var inst_14912 = (state_15065[(17)]);
var inst_14933 = (state_15065[(2)]);
var inst_14934 = (inst_14914 + (1));
var tmp15093 = inst_14911;
var tmp15094 = inst_14913;
var tmp15095 = inst_14912;
var inst_14911__$1 = tmp15093;
var inst_14912__$1 = tmp15095;
var inst_14913__$1 = tmp15094;
var inst_14914__$1 = inst_14934;
var state_15065__$1 = (function (){var statearr_15104 = state_15065;
(statearr_15104[(13)] = inst_14911__$1);

(statearr_15104[(14)] = inst_14913__$1);

(statearr_15104[(16)] = inst_14914__$1);

(statearr_15104[(17)] = inst_14912__$1);

(statearr_15104[(18)] = inst_14933);

return statearr_15104;
})();
var statearr_15107_17497 = state_15065__$1;
(statearr_15107_17497[(2)] = null);

(statearr_15107_17497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (21))){
var inst_14976 = (state_15065[(2)]);
var state_15065__$1 = state_15065;
var statearr_15114_17498 = state_15065__$1;
(statearr_15114_17498[(2)] = inst_14976);

(statearr_15114_17498[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (31))){
var inst_15003 = (state_15065[(9)]);
var inst_15011 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15003);
var state_15065__$1 = state_15065;
var statearr_15116_17502 = state_15065__$1;
(statearr_15116_17502[(2)] = inst_15011);

(statearr_15116_17502[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (32))){
var inst_14995 = (state_15065[(19)]);
var inst_14998 = (state_15065[(11)]);
var inst_14997 = (state_15065[(20)]);
var inst_14996 = (state_15065[(12)]);
var inst_15013 = (state_15065[(2)]);
var inst_15015 = (inst_14998 + (1));
var tmp15110 = inst_14995;
var tmp15111 = inst_14997;
var tmp15112 = inst_14996;
var inst_14995__$1 = tmp15110;
var inst_14996__$1 = tmp15112;
var inst_14997__$1 = tmp15111;
var inst_14998__$1 = inst_15015;
var state_15065__$1 = (function (){var statearr_15117 = state_15065;
(statearr_15117[(19)] = inst_14995__$1);

(statearr_15117[(21)] = inst_15013);

(statearr_15117[(11)] = inst_14998__$1);

(statearr_15117[(20)] = inst_14997__$1);

(statearr_15117[(12)] = inst_14996__$1);

return statearr_15117;
})();
var statearr_15119_17505 = state_15065__$1;
(statearr_15119_17505[(2)] = null);

(statearr_15119_17505[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (40))){
var inst_15031 = (state_15065[(22)]);
var inst_15035 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15031);
var state_15065__$1 = state_15065;
var statearr_15120_17506 = state_15065__$1;
(statearr_15120_17506[(2)] = inst_15035);

(statearr_15120_17506[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (33))){
var inst_15020 = (state_15065[(23)]);
var inst_15023 = cljs.core.chunked_seq_QMARK_(inst_15020);
var state_15065__$1 = state_15065;
if(inst_15023){
var statearr_15122_17507 = state_15065__$1;
(statearr_15122_17507[(1)] = (36));

} else {
var statearr_15124_17508 = state_15065__$1;
(statearr_15124_17508[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (13))){
var inst_14927 = (state_15065[(24)]);
var inst_14930 = cljs.core.async.close_BANG_(inst_14927);
var state_15065__$1 = state_15065;
var statearr_15127_17511 = state_15065__$1;
(statearr_15127_17511[(2)] = inst_14930);

(statearr_15127_17511[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (22))){
var inst_14965 = (state_15065[(8)]);
var inst_14969 = cljs.core.async.close_BANG_(inst_14965);
var state_15065__$1 = state_15065;
var statearr_15129_17513 = state_15065__$1;
(statearr_15129_17513[(2)] = inst_14969);

(statearr_15129_17513[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (36))){
var inst_15020 = (state_15065[(23)]);
var inst_15026 = cljs.core.chunk_first(inst_15020);
var inst_15027 = cljs.core.chunk_rest(inst_15020);
var inst_15028 = cljs.core.count(inst_15026);
var inst_14995 = inst_15027;
var inst_14996 = inst_15026;
var inst_14997 = inst_15028;
var inst_14998 = (0);
var state_15065__$1 = (function (){var statearr_15132 = state_15065;
(statearr_15132[(19)] = inst_14995);

(statearr_15132[(11)] = inst_14998);

(statearr_15132[(20)] = inst_14997);

(statearr_15132[(12)] = inst_14996);

return statearr_15132;
})();
var statearr_15133_17518 = state_15065__$1;
(statearr_15133_17518[(2)] = null);

(statearr_15133_17518[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (41))){
var inst_15020 = (state_15065[(23)]);
var inst_15037 = (state_15065[(2)]);
var inst_15038 = cljs.core.next(inst_15020);
var inst_14995 = inst_15038;
var inst_14996 = null;
var inst_14997 = (0);
var inst_14998 = (0);
var state_15065__$1 = (function (){var statearr_15134 = state_15065;
(statearr_15134[(19)] = inst_14995);

(statearr_15134[(11)] = inst_14998);

(statearr_15134[(20)] = inst_14997);

(statearr_15134[(12)] = inst_14996);

(statearr_15134[(25)] = inst_15037);

return statearr_15134;
})();
var statearr_15135_17524 = state_15065__$1;
(statearr_15135_17524[(2)] = null);

(statearr_15135_17524[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (43))){
var state_15065__$1 = state_15065;
var statearr_15136_17525 = state_15065__$1;
(statearr_15136_17525[(2)] = null);

(statearr_15136_17525[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (29))){
var inst_15046 = (state_15065[(2)]);
var state_15065__$1 = state_15065;
var statearr_15138_17526 = state_15065__$1;
(statearr_15138_17526[(2)] = inst_15046);

(statearr_15138_17526[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (44))){
var inst_15055 = (state_15065[(2)]);
var state_15065__$1 = (function (){var statearr_15139 = state_15065;
(statearr_15139[(26)] = inst_15055);

return statearr_15139;
})();
var statearr_15140_17527 = state_15065__$1;
(statearr_15140_17527[(2)] = null);

(statearr_15140_17527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (6))){
var inst_14987 = (state_15065[(27)]);
var inst_14986 = cljs.core.deref(cs);
var inst_14987__$1 = cljs.core.keys(inst_14986);
var inst_14988 = cljs.core.count(inst_14987__$1);
var inst_14989 = cljs.core.reset_BANG_(dctr,inst_14988);
var inst_14994 = cljs.core.seq(inst_14987__$1);
var inst_14995 = inst_14994;
var inst_14996 = null;
var inst_14997 = (0);
var inst_14998 = (0);
var state_15065__$1 = (function (){var statearr_15141 = state_15065;
(statearr_15141[(19)] = inst_14995);

(statearr_15141[(27)] = inst_14987__$1);

(statearr_15141[(28)] = inst_14989);

(statearr_15141[(11)] = inst_14998);

(statearr_15141[(20)] = inst_14997);

(statearr_15141[(12)] = inst_14996);

return statearr_15141;
})();
var statearr_15142_17528 = state_15065__$1;
(statearr_15142_17528[(2)] = null);

(statearr_15142_17528[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (28))){
var inst_14995 = (state_15065[(19)]);
var inst_15020 = (state_15065[(23)]);
var inst_15020__$1 = cljs.core.seq(inst_14995);
var state_15065__$1 = (function (){var statearr_15145 = state_15065;
(statearr_15145[(23)] = inst_15020__$1);

return statearr_15145;
})();
if(inst_15020__$1){
var statearr_15146_17529 = state_15065__$1;
(statearr_15146_17529[(1)] = (33));

} else {
var statearr_15148_17530 = state_15065__$1;
(statearr_15148_17530[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (25))){
var inst_14998 = (state_15065[(11)]);
var inst_14997 = (state_15065[(20)]);
var inst_15000 = (inst_14998 < inst_14997);
var inst_15001 = inst_15000;
var state_15065__$1 = state_15065;
if(cljs.core.truth_(inst_15001)){
var statearr_15149_17532 = state_15065__$1;
(statearr_15149_17532[(1)] = (27));

} else {
var statearr_15150_17533 = state_15065__$1;
(statearr_15150_17533[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (34))){
var state_15065__$1 = state_15065;
var statearr_15154_17534 = state_15065__$1;
(statearr_15154_17534[(2)] = null);

(statearr_15154_17534[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (17))){
var state_15065__$1 = state_15065;
var statearr_15157_17537 = state_15065__$1;
(statearr_15157_17537[(2)] = null);

(statearr_15157_17537[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (3))){
var inst_15060 = (state_15065[(2)]);
var state_15065__$1 = state_15065;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15065__$1,inst_15060);
} else {
if((state_val_15066 === (12))){
var inst_14981 = (state_15065[(2)]);
var state_15065__$1 = state_15065;
var statearr_15159_17540 = state_15065__$1;
(statearr_15159_17540[(2)] = inst_14981);

(statearr_15159_17540[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (2))){
var state_15065__$1 = state_15065;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15065__$1,(4),ch);
} else {
if((state_val_15066 === (23))){
var state_15065__$1 = state_15065;
var statearr_15166_17542 = state_15065__$1;
(statearr_15166_17542[(2)] = null);

(statearr_15166_17542[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (35))){
var inst_15044 = (state_15065[(2)]);
var state_15065__$1 = state_15065;
var statearr_15167_17543 = state_15065__$1;
(statearr_15167_17543[(2)] = inst_15044);

(statearr_15167_17543[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (19))){
var inst_14937 = (state_15065[(7)]);
var inst_14949 = cljs.core.chunk_first(inst_14937);
var inst_14951 = cljs.core.chunk_rest(inst_14937);
var inst_14952 = cljs.core.count(inst_14949);
var inst_14911 = inst_14951;
var inst_14912 = inst_14949;
var inst_14913 = inst_14952;
var inst_14914 = (0);
var state_15065__$1 = (function (){var statearr_15171 = state_15065;
(statearr_15171[(13)] = inst_14911);

(statearr_15171[(14)] = inst_14913);

(statearr_15171[(16)] = inst_14914);

(statearr_15171[(17)] = inst_14912);

return statearr_15171;
})();
var statearr_15173_17544 = state_15065__$1;
(statearr_15173_17544[(2)] = null);

(statearr_15173_17544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (11))){
var inst_14937 = (state_15065[(7)]);
var inst_14911 = (state_15065[(13)]);
var inst_14937__$1 = cljs.core.seq(inst_14911);
var state_15065__$1 = (function (){var statearr_15178 = state_15065;
(statearr_15178[(7)] = inst_14937__$1);

return statearr_15178;
})();
if(inst_14937__$1){
var statearr_15180_17546 = state_15065__$1;
(statearr_15180_17546[(1)] = (16));

} else {
var statearr_15181_17547 = state_15065__$1;
(statearr_15181_17547[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (9))){
var inst_14983 = (state_15065[(2)]);
var state_15065__$1 = state_15065;
var statearr_15185_17549 = state_15065__$1;
(statearr_15185_17549[(2)] = inst_14983);

(statearr_15185_17549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (5))){
var inst_14909 = cljs.core.deref(cs);
var inst_14910 = cljs.core.seq(inst_14909);
var inst_14911 = inst_14910;
var inst_14912 = null;
var inst_14913 = (0);
var inst_14914 = (0);
var state_15065__$1 = (function (){var statearr_15186 = state_15065;
(statearr_15186[(13)] = inst_14911);

(statearr_15186[(14)] = inst_14913);

(statearr_15186[(16)] = inst_14914);

(statearr_15186[(17)] = inst_14912);

return statearr_15186;
})();
var statearr_15188_17550 = state_15065__$1;
(statearr_15188_17550[(2)] = null);

(statearr_15188_17550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (14))){
var state_15065__$1 = state_15065;
var statearr_15189_17551 = state_15065__$1;
(statearr_15189_17551[(2)] = null);

(statearr_15189_17551[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (45))){
var inst_15052 = (state_15065[(2)]);
var state_15065__$1 = state_15065;
var statearr_15194_17552 = state_15065__$1;
(statearr_15194_17552[(2)] = inst_15052);

(statearr_15194_17552[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (26))){
var inst_14987 = (state_15065[(27)]);
var inst_15048 = (state_15065[(2)]);
var inst_15049 = cljs.core.seq(inst_14987);
var state_15065__$1 = (function (){var statearr_15196 = state_15065;
(statearr_15196[(29)] = inst_15048);

return statearr_15196;
})();
if(inst_15049){
var statearr_15197_17553 = state_15065__$1;
(statearr_15197_17553[(1)] = (42));

} else {
var statearr_15198_17554 = state_15065__$1;
(statearr_15198_17554[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (16))){
var inst_14937 = (state_15065[(7)]);
var inst_14941 = cljs.core.chunked_seq_QMARK_(inst_14937);
var state_15065__$1 = state_15065;
if(inst_14941){
var statearr_15199_17555 = state_15065__$1;
(statearr_15199_17555[(1)] = (19));

} else {
var statearr_15200_17556 = state_15065__$1;
(statearr_15200_17556[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (38))){
var inst_15041 = (state_15065[(2)]);
var state_15065__$1 = state_15065;
var statearr_15201_17557 = state_15065__$1;
(statearr_15201_17557[(2)] = inst_15041);

(statearr_15201_17557[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (30))){
var state_15065__$1 = state_15065;
var statearr_15206_17570 = state_15065__$1;
(statearr_15206_17570[(2)] = null);

(statearr_15206_17570[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (10))){
var inst_14914 = (state_15065[(16)]);
var inst_14912 = (state_15065[(17)]);
var inst_14926 = cljs.core._nth(inst_14912,inst_14914);
var inst_14927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14926,(0),null);
var inst_14928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14926,(1),null);
var state_15065__$1 = (function (){var statearr_15209 = state_15065;
(statearr_15209[(24)] = inst_14927);

return statearr_15209;
})();
if(cljs.core.truth_(inst_14928)){
var statearr_15211_17571 = state_15065__$1;
(statearr_15211_17571[(1)] = (13));

} else {
var statearr_15213_17572 = state_15065__$1;
(statearr_15213_17572[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (18))){
var inst_14979 = (state_15065[(2)]);
var state_15065__$1 = state_15065;
var statearr_15216_17573 = state_15065__$1;
(statearr_15216_17573[(2)] = inst_14979);

(statearr_15216_17573[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (42))){
var state_15065__$1 = state_15065;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15065__$1,(45),dchan);
} else {
if((state_val_15066 === (37))){
var inst_14901 = (state_15065[(10)]);
var inst_15020 = (state_15065[(23)]);
var inst_15031 = (state_15065[(22)]);
var inst_15031__$1 = cljs.core.first(inst_15020);
var inst_15032 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15031__$1,inst_14901,done);
var state_15065__$1 = (function (){var statearr_15217 = state_15065;
(statearr_15217[(22)] = inst_15031__$1);

return statearr_15217;
})();
if(cljs.core.truth_(inst_15032)){
var statearr_15220_17576 = state_15065__$1;
(statearr_15220_17576[(1)] = (39));

} else {
var statearr_15221_17577 = state_15065__$1;
(statearr_15221_17577[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (8))){
var inst_14913 = (state_15065[(14)]);
var inst_14914 = (state_15065[(16)]);
var inst_14920 = (inst_14914 < inst_14913);
var inst_14921 = inst_14920;
var state_15065__$1 = state_15065;
if(cljs.core.truth_(inst_14921)){
var statearr_15225_17578 = state_15065__$1;
(statearr_15225_17578[(1)] = (10));

} else {
var statearr_15226_17579 = state_15065__$1;
(statearr_15226_17579[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13462__auto__ = null;
var cljs$core$async$mult_$_state_machine__13462__auto____0 = (function (){
var statearr_15230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15230[(0)] = cljs$core$async$mult_$_state_machine__13462__auto__);

(statearr_15230[(1)] = (1));

return statearr_15230;
});
var cljs$core$async$mult_$_state_machine__13462__auto____1 = (function (state_15065){
while(true){
var ret_value__13463__auto__ = (function (){try{while(true){
var result__13464__auto__ = switch__13461__auto__(state_15065);
if(cljs.core.keyword_identical_QMARK_(result__13464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13464__auto__;
}
break;
}
}catch (e15234){var ex__13465__auto__ = e15234;
var statearr_15236_17580 = state_15065;
(statearr_15236_17580[(2)] = ex__13465__auto__);


if(cljs.core.seq((state_15065[(4)]))){
var statearr_15237_17581 = state_15065;
(statearr_15237_17581[(1)] = cljs.core.first((state_15065[(4)])));

} else {
throw ex__13465__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17582 = state_15065;
state_15065 = G__17582;
continue;
} else {
return ret_value__13463__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13462__auto__ = function(state_15065){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13462__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13462__auto____1.call(this,state_15065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13462__auto____0;
cljs$core$async$mult_$_state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13462__auto____1;
return cljs$core$async$mult_$_state_machine__13462__auto__;
})()
})();
var state__13713__auto__ = (function (){var statearr_15242 = f__13712__auto__();
(statearr_15242[(6)] = c__13711__auto___17484);

return statearr_15242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13713__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15250 = arguments.length;
switch (G__15250) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17587 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17587(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17588 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17588(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17589 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17589(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17600 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17600(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17619 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17619(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17628 = arguments.length;
var i__5770__auto___17629 = (0);
while(true){
if((i__5770__auto___17629 < len__5769__auto___17628)){
args__5775__auto__.push((arguments[i__5770__auto___17629]));

var G__17630 = (i__5770__auto___17629 + (1));
i__5770__auto___17629 = G__17630;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15293){
var map__15294 = p__15293;
var map__15294__$1 = cljs.core.__destructure_map(map__15294);
var opts = map__15294__$1;
var statearr_15295_17635 = state;
(statearr_15295_17635[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15297_17687 = state;
(statearr_15297_17687[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15298_17688 = state;
(statearr_15298_17688[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15288){
var G__15289 = cljs.core.first(seq15288);
var seq15288__$1 = cljs.core.next(seq15288);
var G__15290 = cljs.core.first(seq15288__$1);
var seq15288__$2 = cljs.core.next(seq15288__$1);
var G__15291 = cljs.core.first(seq15288__$2);
var seq15288__$3 = cljs.core.next(seq15288__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15289,G__15290,G__15291,seq15288__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15317 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15318){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15318 = meta15318;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15319,meta15318__$1){
var self__ = this;
var _15319__$1 = this;
return (new cljs.core.async.t_cljs$core$async15317(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15318__$1));
}));

(cljs.core.async.t_cljs$core$async15317.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15319){
var self__ = this;
var _15319__$1 = this;
return self__.meta15318;
}));

(cljs.core.async.t_cljs$core$async15317.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15317.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15317.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15317.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15317.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15317.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15317.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15317.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15317.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15318","meta15318",-953842051,null)], null);
}));

(cljs.core.async.t_cljs$core$async15317.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15317.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15317");

(cljs.core.async.t_cljs$core$async15317.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15317");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15317.
 */
cljs.core.async.__GT_t_cljs$core$async15317 = (function cljs$core$async$__GT_t_cljs$core$async15317(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15318){
return (new cljs.core.async.t_cljs$core$async15317(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15318));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async15317(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__13711__auto___17707 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13712__auto__ = (function (){var switch__13461__auto__ = (function (state_15409){
var state_val_15410 = (state_15409[(1)]);
if((state_val_15410 === (7))){
var inst_15362 = (state_15409[(2)]);
var state_15409__$1 = state_15409;
if(cljs.core.truth_(inst_15362)){
var statearr_15411_17716 = state_15409__$1;
(statearr_15411_17716[(1)] = (8));

} else {
var statearr_15412_17717 = state_15409__$1;
(statearr_15412_17717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15410 === (20))){
var inst_15355 = (state_15409[(7)]);
var state_15409__$1 = state_15409;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15409__$1,(23),out,inst_15355);
} else {
if((state_val_15410 === (1))){
var inst_15338 = calc_state();
var inst_15339 = cljs.core.__destructure_map(inst_15338);
var inst_15340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15339,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15339,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15339,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15343 = inst_15338;
var state_15409__$1 = (function (){var statearr_15415 = state_15409;
(statearr_15415[(8)] = inst_15341);

(statearr_15415[(9)] = inst_15343);

(statearr_15415[(10)] = inst_15342);

(statearr_15415[(11)] = inst_15340);

return statearr_15415;
})();
var statearr_15418_17722 = state_15409__$1;
(statearr_15418_17722[(2)] = null);

(statearr_15418_17722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15410 === (24))){
var inst_15346 = (state_15409[(12)]);
var inst_15343 = inst_15346;
var state_15409__$1 = (function (){var statearr_15420 = state_15409;
(statearr_15420[(9)] = inst_15343);

return statearr_15420;
})();
var statearr_15421_17725 = state_15409__$1;
(statearr_15421_17725[(2)] = null);

(statearr_15421_17725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15410 === (4))){
var inst_15357 = (state_15409[(13)]);
var inst_15355 = (state_15409[(7)]);
var inst_15354 = (state_15409[(2)]);
var inst_15355__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15354,(0),null);
var inst_15356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15354,(1),null);
var inst_15357__$1 = (inst_15355__$1 == null);
var state_15409__$1 = (function (){var statearr_15424 = state_15409;
(statearr_15424[(13)] = inst_15357__$1);

(statearr_15424[(7)] = inst_15355__$1);

(statearr_15424[(14)] = inst_15356);

return statearr_15424;
})();
if(cljs.core.truth_(inst_15357__$1)){
var statearr_15426_17726 = state_15409__$1;
(statearr_15426_17726[(1)] = (5));

} else {
var statearr_15427_17727 = state_15409__$1;
(statearr_15427_17727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15410 === (15))){
var inst_15377 = (state_15409[(15)]);
var inst_15347 = (state_15409[(16)]);
var inst_15377__$1 = cljs.core.empty_QMARK_(inst_15347);
var state_15409__$1 = (function (){var statearr_15429 = state_15409;
(statearr_15429[(15)] = inst_15377__$1);

return statearr_15429;
})();
if(inst_15377__$1){
var statearr_15430_17749 = state_15409__$1;
(statearr_15430_17749[(1)] = (17));

} else {
var statearr_15431_17750 = state_15409__$1;
(statearr_15431_17750[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15410 === (21))){
var inst_15346 = (state_15409[(12)]);
var inst_15343 = inst_15346;
var state_15409__$1 = (function (){var statearr_15433 = state_15409;
(statearr_15433[(9)] = inst_15343);

return statearr_15433;
})();
var statearr_15434_17757 = state_15409__$1;
(statearr_15434_17757[(2)] = null);

(statearr_15434_17757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15410 === (13))){
var inst_15369 = (state_15409[(2)]);
var inst_15370 = calc_state();
var inst_15343 = inst_15370;
var state_15409__$1 = (function (){var statearr_15435 = state_15409;
(statearr_15435[(17)] = inst_15369);

(statearr_15435[(9)] = inst_15343);

return statearr_15435;
})();
var statearr_15437_17759 = state_15409__$1;
(statearr_15437_17759[(2)] = null);

(statearr_15437_17759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15410 === (22))){
var inst_15399 = (state_15409[(2)]);
var state_15409__$1 = state_15409;
var statearr_15442_17770 = state_15409__$1;
(statearr_15442_17770[(2)] = inst_15399);

(statearr_15442_17770[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15410 === (6))){
var inst_15356 = (state_15409[(14)]);
var inst_15360 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15356,change);
var state_15409__$1 = state_15409;
var statearr_15445_17774 = state_15409__$1;
(statearr_15445_17774[(2)] = inst_15360);

(statearr_15445_17774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15410 === (25))){
var state_15409__$1 = state_15409;
var statearr_15446_17775 = state_15409__$1;
(statearr_15446_17775[(2)] = null);

(statearr_15446_17775[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15410 === (17))){
var inst_15348 = (state_15409[(18)]);
var inst_15356 = (state_15409[(14)]);
var inst_15380 = (inst_15348.cljs$core$IFn$_invoke$arity$1 ? inst_15348.cljs$core$IFn$_invoke$arity$1(inst_15356) : inst_15348.call(null,inst_15356));
var inst_15381 = cljs.core.not(inst_15380);
var state_15409__$1 = state_15409;
var statearr_15447_17777 = state_15409__$1;
(statearr_15447_17777[(2)] = inst_15381);

(statearr_15447_17777[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15410 === (3))){
var inst_15403 = (state_15409[(2)]);
var state_15409__$1 = state_15409;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15409__$1,inst_15403);
} else {
if((state_val_15410 === (12))){
var state_15409__$1 = state_15409;
var statearr_15450_17789 = state_15409__$1;
(statearr_15450_17789[(2)] = null);

(statearr_15450_17789[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15410 === (2))){
var inst_15343 = (state_15409[(9)]);
var inst_15346 = (state_15409[(12)]);
var inst_15346__$1 = cljs.core.__destructure_map(inst_15343);
var inst_15347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15346__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15346__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15346__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15409__$1 = (function (){var statearr_15454 = state_15409;
(statearr_15454[(18)] = inst_15348);

(statearr_15454[(12)] = inst_15346__$1);

(statearr_15454[(16)] = inst_15347);

return statearr_15454;
})();
return cljs.core.async.ioc_alts_BANG_(state_15409__$1,(4),inst_15349);
} else {
if((state_val_15410 === (23))){
var inst_15389 = (state_15409[(2)]);
var state_15409__$1 = state_15409;
if(cljs.core.truth_(inst_15389)){
var statearr_15460_17796 = state_15409__$1;
(statearr_15460_17796[(1)] = (24));

} else {
var statearr_15461_17797 = state_15409__$1;
(statearr_15461_17797[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15410 === (19))){
var inst_15384 = (state_15409[(2)]);
var state_15409__$1 = state_15409;
var statearr_15462_17800 = state_15409__$1;
(statearr_15462_17800[(2)] = inst_15384);

(statearr_15462_17800[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15410 === (11))){
var inst_15356 = (state_15409[(14)]);
var inst_15366 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15356);
var state_15409__$1 = state_15409;
var statearr_15465_17801 = state_15409__$1;
(statearr_15465_17801[(2)] = inst_15366);

(statearr_15465_17801[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15410 === (9))){
var inst_15373 = (state_15409[(19)]);
var inst_15356 = (state_15409[(14)]);
var inst_15347 = (state_15409[(16)]);
var inst_15373__$1 = (inst_15347.cljs$core$IFn$_invoke$arity$1 ? inst_15347.cljs$core$IFn$_invoke$arity$1(inst_15356) : inst_15347.call(null,inst_15356));
var state_15409__$1 = (function (){var statearr_15468 = state_15409;
(statearr_15468[(19)] = inst_15373__$1);

return statearr_15468;
})();
if(cljs.core.truth_(inst_15373__$1)){
var statearr_15469_17803 = state_15409__$1;
(statearr_15469_17803[(1)] = (14));

} else {
var statearr_15470_17804 = state_15409__$1;
(statearr_15470_17804[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15410 === (5))){
var inst_15357 = (state_15409[(13)]);
var state_15409__$1 = state_15409;
var statearr_15472_17806 = state_15409__$1;
(statearr_15472_17806[(2)] = inst_15357);

(statearr_15472_17806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15410 === (14))){
var inst_15373 = (state_15409[(19)]);
var state_15409__$1 = state_15409;
var statearr_15474_17815 = state_15409__$1;
(statearr_15474_17815[(2)] = inst_15373);

(statearr_15474_17815[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15410 === (26))){
var inst_15395 = (state_15409[(2)]);
var state_15409__$1 = state_15409;
var statearr_15476_17817 = state_15409__$1;
(statearr_15476_17817[(2)] = inst_15395);

(statearr_15476_17817[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15410 === (16))){
var inst_15386 = (state_15409[(2)]);
var state_15409__$1 = state_15409;
if(cljs.core.truth_(inst_15386)){
var statearr_15477_17818 = state_15409__$1;
(statearr_15477_17818[(1)] = (20));

} else {
var statearr_15478_17819 = state_15409__$1;
(statearr_15478_17819[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15410 === (10))){
var inst_15401 = (state_15409[(2)]);
var state_15409__$1 = state_15409;
var statearr_15479_17820 = state_15409__$1;
(statearr_15479_17820[(2)] = inst_15401);

(statearr_15479_17820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15410 === (18))){
var inst_15377 = (state_15409[(15)]);
var state_15409__$1 = state_15409;
var statearr_15480_17821 = state_15409__$1;
(statearr_15480_17821[(2)] = inst_15377);

(statearr_15480_17821[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15410 === (8))){
var inst_15355 = (state_15409[(7)]);
var inst_15364 = (inst_15355 == null);
var state_15409__$1 = state_15409;
if(cljs.core.truth_(inst_15364)){
var statearr_15483_17822 = state_15409__$1;
(statearr_15483_17822[(1)] = (11));

} else {
var statearr_15486_17823 = state_15409__$1;
(statearr_15486_17823[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13462__auto__ = null;
var cljs$core$async$mix_$_state_machine__13462__auto____0 = (function (){
var statearr_15489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15489[(0)] = cljs$core$async$mix_$_state_machine__13462__auto__);

(statearr_15489[(1)] = (1));

return statearr_15489;
});
var cljs$core$async$mix_$_state_machine__13462__auto____1 = (function (state_15409){
while(true){
var ret_value__13463__auto__ = (function (){try{while(true){
var result__13464__auto__ = switch__13461__auto__(state_15409);
if(cljs.core.keyword_identical_QMARK_(result__13464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13464__auto__;
}
break;
}
}catch (e15491){var ex__13465__auto__ = e15491;
var statearr_15492_17825 = state_15409;
(statearr_15492_17825[(2)] = ex__13465__auto__);


if(cljs.core.seq((state_15409[(4)]))){
var statearr_15496_17826 = state_15409;
(statearr_15496_17826[(1)] = cljs.core.first((state_15409[(4)])));

} else {
throw ex__13465__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17827 = state_15409;
state_15409 = G__17827;
continue;
} else {
return ret_value__13463__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13462__auto__ = function(state_15409){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13462__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13462__auto____1.call(this,state_15409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13462__auto____0;
cljs$core$async$mix_$_state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13462__auto____1;
return cljs$core$async$mix_$_state_machine__13462__auto__;
})()
})();
var state__13713__auto__ = (function (){var statearr_15498 = f__13712__auto__();
(statearr_15498[(6)] = c__13711__auto___17707);

return statearr_15498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13713__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_17831 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_17831(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17837 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_17837(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17847 = (function() {
var G__17848 = null;
var G__17848__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__17848__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__17848 = function(p,v){
switch(arguments.length){
case 1:
return G__17848__1.call(this,p);
case 2:
return G__17848__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17848.cljs$core$IFn$_invoke$arity$1 = G__17848__1;
G__17848.cljs$core$IFn$_invoke$arity$2 = G__17848__2;
return G__17848;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15526 = arguments.length;
switch (G__15526) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17847(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17847(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15540 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15541){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15541 = meta15541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15542,meta15541__$1){
var self__ = this;
var _15542__$1 = this;
return (new cljs.core.async.t_cljs$core$async15540(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15541__$1));
}));

(cljs.core.async.t_cljs$core$async15540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15542){
var self__ = this;
var _15542__$1 = this;
return self__.meta15541;
}));

(cljs.core.async.t_cljs$core$async15540.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15540.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15540.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15540.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15540.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async15540.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15540.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15541","meta15541",497601828,null)], null);
}));

(cljs.core.async.t_cljs$core$async15540.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15540");

(cljs.core.async.t_cljs$core$async15540.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15540");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15540.
 */
cljs.core.async.__GT_t_cljs$core$async15540 = (function cljs$core$async$__GT_t_cljs$core$async15540(ch,topic_fn,buf_fn,mults,ensure_mult,meta15541){
return (new cljs.core.async.t_cljs$core$async15540(ch,topic_fn,buf_fn,mults,ensure_mult,meta15541));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__15538 = arguments.length;
switch (G__15538) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15532_SHARP_){
if(cljs.core.truth_((p1__15532_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15532_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15532_SHARP_.call(null,topic)))){
return p1__15532_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15532_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async15540(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__13711__auto___17895 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13712__auto__ = (function (){var switch__13461__auto__ = (function (state_15637){
var state_val_15638 = (state_15637[(1)]);
if((state_val_15638 === (7))){
var inst_15633 = (state_15637[(2)]);
var state_15637__$1 = state_15637;
var statearr_15641_17896 = state_15637__$1;
(statearr_15641_17896[(2)] = inst_15633);

(statearr_15641_17896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15638 === (20))){
var state_15637__$1 = state_15637;
var statearr_15646_17897 = state_15637__$1;
(statearr_15646_17897[(2)] = null);

(statearr_15646_17897[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15638 === (1))){
var state_15637__$1 = state_15637;
var statearr_15647_17898 = state_15637__$1;
(statearr_15647_17898[(2)] = null);

(statearr_15647_17898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15638 === (24))){
var inst_15616 = (state_15637[(7)]);
var inst_15625 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15616);
var state_15637__$1 = state_15637;
var statearr_15648_17899 = state_15637__$1;
(statearr_15648_17899[(2)] = inst_15625);

(statearr_15648_17899[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15638 === (4))){
var inst_15558 = (state_15637[(8)]);
var inst_15558__$1 = (state_15637[(2)]);
var inst_15559 = (inst_15558__$1 == null);
var state_15637__$1 = (function (){var statearr_15650 = state_15637;
(statearr_15650[(8)] = inst_15558__$1);

return statearr_15650;
})();
if(cljs.core.truth_(inst_15559)){
var statearr_15651_17900 = state_15637__$1;
(statearr_15651_17900[(1)] = (5));

} else {
var statearr_15652_17901 = state_15637__$1;
(statearr_15652_17901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15638 === (15))){
var inst_15610 = (state_15637[(2)]);
var state_15637__$1 = state_15637;
var statearr_15653_17902 = state_15637__$1;
(statearr_15653_17902[(2)] = inst_15610);

(statearr_15653_17902[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15638 === (21))){
var inst_15630 = (state_15637[(2)]);
var state_15637__$1 = (function (){var statearr_15655 = state_15637;
(statearr_15655[(9)] = inst_15630);

return statearr_15655;
})();
var statearr_15659_17919 = state_15637__$1;
(statearr_15659_17919[(2)] = null);

(statearr_15659_17919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15638 === (13))){
var inst_15589 = (state_15637[(10)]);
var inst_15593 = cljs.core.chunked_seq_QMARK_(inst_15589);
var state_15637__$1 = state_15637;
if(inst_15593){
var statearr_15660_17920 = state_15637__$1;
(statearr_15660_17920[(1)] = (16));

} else {
var statearr_15661_17921 = state_15637__$1;
(statearr_15661_17921[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15638 === (22))){
var inst_15622 = (state_15637[(2)]);
var state_15637__$1 = state_15637;
if(cljs.core.truth_(inst_15622)){
var statearr_15662_17926 = state_15637__$1;
(statearr_15662_17926[(1)] = (23));

} else {
var statearr_15664_17929 = state_15637__$1;
(statearr_15664_17929[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15638 === (6))){
var inst_15618 = (state_15637[(11)]);
var inst_15616 = (state_15637[(7)]);
var inst_15558 = (state_15637[(8)]);
var inst_15616__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15558) : topic_fn.call(null,inst_15558));
var inst_15617 = cljs.core.deref(mults);
var inst_15618__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15617,inst_15616__$1);
var state_15637__$1 = (function (){var statearr_15666 = state_15637;
(statearr_15666[(11)] = inst_15618__$1);

(statearr_15666[(7)] = inst_15616__$1);

return statearr_15666;
})();
if(cljs.core.truth_(inst_15618__$1)){
var statearr_15667_17933 = state_15637__$1;
(statearr_15667_17933[(1)] = (19));

} else {
var statearr_15668_17937 = state_15637__$1;
(statearr_15668_17937[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15638 === (25))){
var inst_15627 = (state_15637[(2)]);
var state_15637__$1 = state_15637;
var statearr_15674_17938 = state_15637__$1;
(statearr_15674_17938[(2)] = inst_15627);

(statearr_15674_17938[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15638 === (17))){
var inst_15589 = (state_15637[(10)]);
var inst_15601 = cljs.core.first(inst_15589);
var inst_15602 = cljs.core.async.muxch_STAR_(inst_15601);
var inst_15603 = cljs.core.async.close_BANG_(inst_15602);
var inst_15604 = cljs.core.next(inst_15589);
var inst_15568 = inst_15604;
var inst_15569 = null;
var inst_15570 = (0);
var inst_15571 = (0);
var state_15637__$1 = (function (){var statearr_15675 = state_15637;
(statearr_15675[(12)] = inst_15569);

(statearr_15675[(13)] = inst_15568);

(statearr_15675[(14)] = inst_15571);

(statearr_15675[(15)] = inst_15603);

(statearr_15675[(16)] = inst_15570);

return statearr_15675;
})();
var statearr_15676_17947 = state_15637__$1;
(statearr_15676_17947[(2)] = null);

(statearr_15676_17947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15638 === (3))){
var inst_15635 = (state_15637[(2)]);
var state_15637__$1 = state_15637;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15637__$1,inst_15635);
} else {
if((state_val_15638 === (12))){
var inst_15612 = (state_15637[(2)]);
var state_15637__$1 = state_15637;
var statearr_15678_17951 = state_15637__$1;
(statearr_15678_17951[(2)] = inst_15612);

(statearr_15678_17951[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15638 === (2))){
var state_15637__$1 = state_15637;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15637__$1,(4),ch);
} else {
if((state_val_15638 === (23))){
var state_15637__$1 = state_15637;
var statearr_15679_17955 = state_15637__$1;
(statearr_15679_17955[(2)] = null);

(statearr_15679_17955[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15638 === (19))){
var inst_15618 = (state_15637[(11)]);
var inst_15558 = (state_15637[(8)]);
var inst_15620 = cljs.core.async.muxch_STAR_(inst_15618);
var state_15637__$1 = state_15637;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15637__$1,(22),inst_15620,inst_15558);
} else {
if((state_val_15638 === (11))){
var inst_15568 = (state_15637[(13)]);
var inst_15589 = (state_15637[(10)]);
var inst_15589__$1 = cljs.core.seq(inst_15568);
var state_15637__$1 = (function (){var statearr_15684 = state_15637;
(statearr_15684[(10)] = inst_15589__$1);

return statearr_15684;
})();
if(inst_15589__$1){
var statearr_15685_17959 = state_15637__$1;
(statearr_15685_17959[(1)] = (13));

} else {
var statearr_15686_17960 = state_15637__$1;
(statearr_15686_17960[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15638 === (9))){
var inst_15614 = (state_15637[(2)]);
var state_15637__$1 = state_15637;
var statearr_15687_17961 = state_15637__$1;
(statearr_15687_17961[(2)] = inst_15614);

(statearr_15687_17961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15638 === (5))){
var inst_15565 = cljs.core.deref(mults);
var inst_15566 = cljs.core.vals(inst_15565);
var inst_15567 = cljs.core.seq(inst_15566);
var inst_15568 = inst_15567;
var inst_15569 = null;
var inst_15570 = (0);
var inst_15571 = (0);
var state_15637__$1 = (function (){var statearr_15688 = state_15637;
(statearr_15688[(12)] = inst_15569);

(statearr_15688[(13)] = inst_15568);

(statearr_15688[(14)] = inst_15571);

(statearr_15688[(16)] = inst_15570);

return statearr_15688;
})();
var statearr_15689_17965 = state_15637__$1;
(statearr_15689_17965[(2)] = null);

(statearr_15689_17965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15638 === (14))){
var state_15637__$1 = state_15637;
var statearr_15694_17966 = state_15637__$1;
(statearr_15694_17966[(2)] = null);

(statearr_15694_17966[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15638 === (16))){
var inst_15589 = (state_15637[(10)]);
var inst_15595 = cljs.core.chunk_first(inst_15589);
var inst_15596 = cljs.core.chunk_rest(inst_15589);
var inst_15598 = cljs.core.count(inst_15595);
var inst_15568 = inst_15596;
var inst_15569 = inst_15595;
var inst_15570 = inst_15598;
var inst_15571 = (0);
var state_15637__$1 = (function (){var statearr_15699 = state_15637;
(statearr_15699[(12)] = inst_15569);

(statearr_15699[(13)] = inst_15568);

(statearr_15699[(14)] = inst_15571);

(statearr_15699[(16)] = inst_15570);

return statearr_15699;
})();
var statearr_15701_17973 = state_15637__$1;
(statearr_15701_17973[(2)] = null);

(statearr_15701_17973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15638 === (10))){
var inst_15569 = (state_15637[(12)]);
var inst_15568 = (state_15637[(13)]);
var inst_15571 = (state_15637[(14)]);
var inst_15570 = (state_15637[(16)]);
var inst_15576 = cljs.core._nth(inst_15569,inst_15571);
var inst_15579 = cljs.core.async.muxch_STAR_(inst_15576);
var inst_15580 = cljs.core.async.close_BANG_(inst_15579);
var inst_15581 = (inst_15571 + (1));
var tmp15691 = inst_15569;
var tmp15692 = inst_15568;
var tmp15693 = inst_15570;
var inst_15568__$1 = tmp15692;
var inst_15569__$1 = tmp15691;
var inst_15570__$1 = tmp15693;
var inst_15571__$1 = inst_15581;
var state_15637__$1 = (function (){var statearr_15702 = state_15637;
(statearr_15702[(12)] = inst_15569__$1);

(statearr_15702[(13)] = inst_15568__$1);

(statearr_15702[(14)] = inst_15571__$1);

(statearr_15702[(17)] = inst_15580);

(statearr_15702[(16)] = inst_15570__$1);

return statearr_15702;
})();
var statearr_15705_17986 = state_15637__$1;
(statearr_15705_17986[(2)] = null);

(statearr_15705_17986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15638 === (18))){
var inst_15607 = (state_15637[(2)]);
var state_15637__$1 = state_15637;
var statearr_15709_17987 = state_15637__$1;
(statearr_15709_17987[(2)] = inst_15607);

(statearr_15709_17987[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15638 === (8))){
var inst_15571 = (state_15637[(14)]);
var inst_15570 = (state_15637[(16)]);
var inst_15573 = (inst_15571 < inst_15570);
var inst_15574 = inst_15573;
var state_15637__$1 = state_15637;
if(cljs.core.truth_(inst_15574)){
var statearr_15714_17991 = state_15637__$1;
(statearr_15714_17991[(1)] = (10));

} else {
var statearr_15716_17994 = state_15637__$1;
(statearr_15716_17994[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13462__auto__ = null;
var cljs$core$async$state_machine__13462__auto____0 = (function (){
var statearr_15717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15717[(0)] = cljs$core$async$state_machine__13462__auto__);

(statearr_15717[(1)] = (1));

return statearr_15717;
});
var cljs$core$async$state_machine__13462__auto____1 = (function (state_15637){
while(true){
var ret_value__13463__auto__ = (function (){try{while(true){
var result__13464__auto__ = switch__13461__auto__(state_15637);
if(cljs.core.keyword_identical_QMARK_(result__13464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13464__auto__;
}
break;
}
}catch (e15718){var ex__13465__auto__ = e15718;
var statearr_15720_17997 = state_15637;
(statearr_15720_17997[(2)] = ex__13465__auto__);


if(cljs.core.seq((state_15637[(4)]))){
var statearr_15721_18001 = state_15637;
(statearr_15721_18001[(1)] = cljs.core.first((state_15637[(4)])));

} else {
throw ex__13465__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18005 = state_15637;
state_15637 = G__18005;
continue;
} else {
return ret_value__13463__auto__;
}
break;
}
});
cljs$core$async$state_machine__13462__auto__ = function(state_15637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13462__auto____1.call(this,state_15637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13462__auto____0;
cljs$core$async$state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13462__auto____1;
return cljs$core$async$state_machine__13462__auto__;
})()
})();
var state__13713__auto__ = (function (){var statearr_15723 = f__13712__auto__();
(statearr_15723[(6)] = c__13711__auto___17895);

return statearr_15723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13713__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__15731 = arguments.length;
switch (G__15731) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__15740 = arguments.length;
switch (G__15740) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__15744 = arguments.length;
switch (G__15744) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__13711__auto___18053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13712__auto__ = (function (){var switch__13461__auto__ = (function (state_15799){
var state_val_15800 = (state_15799[(1)]);
if((state_val_15800 === (7))){
var state_15799__$1 = state_15799;
var statearr_15801_18054 = state_15799__$1;
(statearr_15801_18054[(2)] = null);

(statearr_15801_18054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (1))){
var state_15799__$1 = state_15799;
var statearr_15802_18055 = state_15799__$1;
(statearr_15802_18055[(2)] = null);

(statearr_15802_18055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (4))){
var inst_15752 = (state_15799[(7)]);
var inst_15753 = (state_15799[(8)]);
var inst_15756 = (inst_15753 < inst_15752);
var state_15799__$1 = state_15799;
if(cljs.core.truth_(inst_15756)){
var statearr_15804_18057 = state_15799__$1;
(statearr_15804_18057[(1)] = (6));

} else {
var statearr_15805_18058 = state_15799__$1;
(statearr_15805_18058[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (15))){
var inst_15785 = (state_15799[(9)]);
var inst_15790 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15785);
var state_15799__$1 = state_15799;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15799__$1,(17),out,inst_15790);
} else {
if((state_val_15800 === (13))){
var inst_15785 = (state_15799[(9)]);
var inst_15785__$1 = (state_15799[(2)]);
var inst_15786 = cljs.core.some(cljs.core.nil_QMARK_,inst_15785__$1);
var state_15799__$1 = (function (){var statearr_15806 = state_15799;
(statearr_15806[(9)] = inst_15785__$1);

return statearr_15806;
})();
if(cljs.core.truth_(inst_15786)){
var statearr_15807_18059 = state_15799__$1;
(statearr_15807_18059[(1)] = (14));

} else {
var statearr_15808_18060 = state_15799__$1;
(statearr_15808_18060[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (6))){
var state_15799__$1 = state_15799;
var statearr_15809_18061 = state_15799__$1;
(statearr_15809_18061[(2)] = null);

(statearr_15809_18061[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (17))){
var inst_15792 = (state_15799[(2)]);
var state_15799__$1 = (function (){var statearr_15821 = state_15799;
(statearr_15821[(10)] = inst_15792);

return statearr_15821;
})();
var statearr_15825_18064 = state_15799__$1;
(statearr_15825_18064[(2)] = null);

(statearr_15825_18064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (3))){
var inst_15797 = (state_15799[(2)]);
var state_15799__$1 = state_15799;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15799__$1,inst_15797);
} else {
if((state_val_15800 === (12))){
var _ = (function (){var statearr_15826 = state_15799;
(statearr_15826[(4)] = cljs.core.rest((state_15799[(4)])));

return statearr_15826;
})();
var state_15799__$1 = state_15799;
var ex15819 = (state_15799__$1[(2)]);
var statearr_15827_18068 = state_15799__$1;
(statearr_15827_18068[(5)] = ex15819);


if((ex15819 instanceof Object)){
var statearr_15833_18071 = state_15799__$1;
(statearr_15833_18071[(1)] = (11));

(statearr_15833_18071[(5)] = null);

} else {
throw ex15819;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (2))){
var inst_15751 = cljs.core.reset_BANG_(dctr,cnt);
var inst_15752 = cnt;
var inst_15753 = (0);
var state_15799__$1 = (function (){var statearr_15839 = state_15799;
(statearr_15839[(7)] = inst_15752);

(statearr_15839[(8)] = inst_15753);

(statearr_15839[(11)] = inst_15751);

return statearr_15839;
})();
var statearr_15840_18072 = state_15799__$1;
(statearr_15840_18072[(2)] = null);

(statearr_15840_18072[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (11))){
var inst_15759 = (state_15799[(2)]);
var inst_15760 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15799__$1 = (function (){var statearr_15847 = state_15799;
(statearr_15847[(12)] = inst_15759);

return statearr_15847;
})();
var statearr_15849_18073 = state_15799__$1;
(statearr_15849_18073[(2)] = inst_15760);

(statearr_15849_18073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (9))){
var inst_15753 = (state_15799[(8)]);
var _ = (function (){var statearr_15850 = state_15799;
(statearr_15850[(4)] = cljs.core.cons((12),(state_15799[(4)])));

return statearr_15850;
})();
var inst_15768 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15753) : chs__$1.call(null,inst_15753));
var inst_15772 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15753) : done.call(null,inst_15753));
var inst_15773 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15768,inst_15772);
var ___$1 = (function (){var statearr_15852 = state_15799;
(statearr_15852[(4)] = cljs.core.rest((state_15799[(4)])));

return statearr_15852;
})();
var state_15799__$1 = state_15799;
var statearr_15855_18075 = state_15799__$1;
(statearr_15855_18075[(2)] = inst_15773);

(statearr_15855_18075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (5))){
var inst_15783 = (state_15799[(2)]);
var state_15799__$1 = (function (){var statearr_15857 = state_15799;
(statearr_15857[(13)] = inst_15783);

return statearr_15857;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15799__$1,(13),dchan);
} else {
if((state_val_15800 === (14))){
var inst_15788 = cljs.core.async.close_BANG_(out);
var state_15799__$1 = state_15799;
var statearr_15861_18076 = state_15799__$1;
(statearr_15861_18076[(2)] = inst_15788);

(statearr_15861_18076[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (16))){
var inst_15795 = (state_15799[(2)]);
var state_15799__$1 = state_15799;
var statearr_15865_18080 = state_15799__$1;
(statearr_15865_18080[(2)] = inst_15795);

(statearr_15865_18080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (10))){
var inst_15753 = (state_15799[(8)]);
var inst_15776 = (state_15799[(2)]);
var inst_15777 = (inst_15753 + (1));
var inst_15753__$1 = inst_15777;
var state_15799__$1 = (function (){var statearr_15866 = state_15799;
(statearr_15866[(8)] = inst_15753__$1);

(statearr_15866[(14)] = inst_15776);

return statearr_15866;
})();
var statearr_15868_18081 = state_15799__$1;
(statearr_15868_18081[(2)] = null);

(statearr_15868_18081[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15800 === (8))){
var inst_15781 = (state_15799[(2)]);
var state_15799__$1 = state_15799;
var statearr_15874_18083 = state_15799__$1;
(statearr_15874_18083[(2)] = inst_15781);

(statearr_15874_18083[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13462__auto__ = null;
var cljs$core$async$state_machine__13462__auto____0 = (function (){
var statearr_15878 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15878[(0)] = cljs$core$async$state_machine__13462__auto__);

(statearr_15878[(1)] = (1));

return statearr_15878;
});
var cljs$core$async$state_machine__13462__auto____1 = (function (state_15799){
while(true){
var ret_value__13463__auto__ = (function (){try{while(true){
var result__13464__auto__ = switch__13461__auto__(state_15799);
if(cljs.core.keyword_identical_QMARK_(result__13464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13464__auto__;
}
break;
}
}catch (e15879){var ex__13465__auto__ = e15879;
var statearr_15881_18084 = state_15799;
(statearr_15881_18084[(2)] = ex__13465__auto__);


if(cljs.core.seq((state_15799[(4)]))){
var statearr_15884_18085 = state_15799;
(statearr_15884_18085[(1)] = cljs.core.first((state_15799[(4)])));

} else {
throw ex__13465__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18086 = state_15799;
state_15799 = G__18086;
continue;
} else {
return ret_value__13463__auto__;
}
break;
}
});
cljs$core$async$state_machine__13462__auto__ = function(state_15799){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13462__auto____1.call(this,state_15799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13462__auto____0;
cljs$core$async$state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13462__auto____1;
return cljs$core$async$state_machine__13462__auto__;
})()
})();
var state__13713__auto__ = (function (){var statearr_15886 = f__13712__auto__();
(statearr_15886[(6)] = c__13711__auto___18053);

return statearr_15886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13713__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__15893 = arguments.length;
switch (G__15893) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13711__auto___18088 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13712__auto__ = (function (){var switch__13461__auto__ = (function (state_15936){
var state_val_15937 = (state_15936[(1)]);
if((state_val_15937 === (7))){
var inst_15912 = (state_15936[(7)]);
var inst_15913 = (state_15936[(8)]);
var inst_15912__$1 = (state_15936[(2)]);
var inst_15913__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15912__$1,(0),null);
var inst_15914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15912__$1,(1),null);
var inst_15915 = (inst_15913__$1 == null);
var state_15936__$1 = (function (){var statearr_15943 = state_15936;
(statearr_15943[(7)] = inst_15912__$1);

(statearr_15943[(8)] = inst_15913__$1);

(statearr_15943[(9)] = inst_15914);

return statearr_15943;
})();
if(cljs.core.truth_(inst_15915)){
var statearr_15945_18090 = state_15936__$1;
(statearr_15945_18090[(1)] = (8));

} else {
var statearr_15946_18094 = state_15936__$1;
(statearr_15946_18094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (1))){
var inst_15900 = cljs.core.vec(chs);
var inst_15901 = inst_15900;
var state_15936__$1 = (function (){var statearr_15949 = state_15936;
(statearr_15949[(10)] = inst_15901);

return statearr_15949;
})();
var statearr_15950_18095 = state_15936__$1;
(statearr_15950_18095[(2)] = null);

(statearr_15950_18095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (4))){
var inst_15901 = (state_15936[(10)]);
var state_15936__$1 = state_15936;
return cljs.core.async.ioc_alts_BANG_(state_15936__$1,(7),inst_15901);
} else {
if((state_val_15937 === (6))){
var inst_15930 = (state_15936[(2)]);
var state_15936__$1 = state_15936;
var statearr_15955_18103 = state_15936__$1;
(statearr_15955_18103[(2)] = inst_15930);

(statearr_15955_18103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (3))){
var inst_15932 = (state_15936[(2)]);
var state_15936__$1 = state_15936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15936__$1,inst_15932);
} else {
if((state_val_15937 === (2))){
var inst_15901 = (state_15936[(10)]);
var inst_15905 = cljs.core.count(inst_15901);
var inst_15906 = (inst_15905 > (0));
var state_15936__$1 = state_15936;
if(cljs.core.truth_(inst_15906)){
var statearr_15960_18104 = state_15936__$1;
(statearr_15960_18104[(1)] = (4));

} else {
var statearr_15962_18105 = state_15936__$1;
(statearr_15962_18105[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (11))){
var inst_15901 = (state_15936[(10)]);
var inst_15923 = (state_15936[(2)]);
var tmp15957 = inst_15901;
var inst_15901__$1 = tmp15957;
var state_15936__$1 = (function (){var statearr_15964 = state_15936;
(statearr_15964[(11)] = inst_15923);

(statearr_15964[(10)] = inst_15901__$1);

return statearr_15964;
})();
var statearr_15965_18106 = state_15936__$1;
(statearr_15965_18106[(2)] = null);

(statearr_15965_18106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (9))){
var inst_15913 = (state_15936[(8)]);
var state_15936__$1 = state_15936;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15936__$1,(11),out,inst_15913);
} else {
if((state_val_15937 === (5))){
var inst_15928 = cljs.core.async.close_BANG_(out);
var state_15936__$1 = state_15936;
var statearr_15976_18107 = state_15936__$1;
(statearr_15976_18107[(2)] = inst_15928);

(statearr_15976_18107[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (10))){
var inst_15926 = (state_15936[(2)]);
var state_15936__$1 = state_15936;
var statearr_15981_18108 = state_15936__$1;
(statearr_15981_18108[(2)] = inst_15926);

(statearr_15981_18108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (8))){
var inst_15912 = (state_15936[(7)]);
var inst_15913 = (state_15936[(8)]);
var inst_15914 = (state_15936[(9)]);
var inst_15901 = (state_15936[(10)]);
var inst_15918 = (function (){var cs = inst_15901;
var vec__15908 = inst_15912;
var v = inst_15913;
var c = inst_15914;
return (function (p1__15890_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__15890_SHARP_);
});
})();
var inst_15919 = cljs.core.filterv(inst_15918,inst_15901);
var inst_15901__$1 = inst_15919;
var state_15936__$1 = (function (){var statearr_15984 = state_15936;
(statearr_15984[(10)] = inst_15901__$1);

return statearr_15984;
})();
var statearr_15985_18109 = state_15936__$1;
(statearr_15985_18109[(2)] = null);

(statearr_15985_18109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13462__auto__ = null;
var cljs$core$async$state_machine__13462__auto____0 = (function (){
var statearr_15991 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15991[(0)] = cljs$core$async$state_machine__13462__auto__);

(statearr_15991[(1)] = (1));

return statearr_15991;
});
var cljs$core$async$state_machine__13462__auto____1 = (function (state_15936){
while(true){
var ret_value__13463__auto__ = (function (){try{while(true){
var result__13464__auto__ = switch__13461__auto__(state_15936);
if(cljs.core.keyword_identical_QMARK_(result__13464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13464__auto__;
}
break;
}
}catch (e16017){var ex__13465__auto__ = e16017;
var statearr_16020_18113 = state_15936;
(statearr_16020_18113[(2)] = ex__13465__auto__);


if(cljs.core.seq((state_15936[(4)]))){
var statearr_16021_18115 = state_15936;
(statearr_16021_18115[(1)] = cljs.core.first((state_15936[(4)])));

} else {
throw ex__13465__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18119 = state_15936;
state_15936 = G__18119;
continue;
} else {
return ret_value__13463__auto__;
}
break;
}
});
cljs$core$async$state_machine__13462__auto__ = function(state_15936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13462__auto____1.call(this,state_15936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13462__auto____0;
cljs$core$async$state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13462__auto____1;
return cljs$core$async$state_machine__13462__auto__;
})()
})();
var state__13713__auto__ = (function (){var statearr_16023 = f__13712__auto__();
(statearr_16023[(6)] = c__13711__auto___18088);

return statearr_16023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13713__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16030 = arguments.length;
switch (G__16030) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13711__auto___18128 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13712__auto__ = (function (){var switch__13461__auto__ = (function (state_16056){
var state_val_16057 = (state_16056[(1)]);
if((state_val_16057 === (7))){
var inst_16038 = (state_16056[(7)]);
var inst_16038__$1 = (state_16056[(2)]);
var inst_16039 = (inst_16038__$1 == null);
var inst_16040 = cljs.core.not(inst_16039);
var state_16056__$1 = (function (){var statearr_16059 = state_16056;
(statearr_16059[(7)] = inst_16038__$1);

return statearr_16059;
})();
if(inst_16040){
var statearr_16060_18131 = state_16056__$1;
(statearr_16060_18131[(1)] = (8));

} else {
var statearr_16061_18132 = state_16056__$1;
(statearr_16061_18132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16057 === (1))){
var inst_16033 = (0);
var state_16056__$1 = (function (){var statearr_16064 = state_16056;
(statearr_16064[(8)] = inst_16033);

return statearr_16064;
})();
var statearr_16065_18133 = state_16056__$1;
(statearr_16065_18133[(2)] = null);

(statearr_16065_18133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16057 === (4))){
var state_16056__$1 = state_16056;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16056__$1,(7),ch);
} else {
if((state_val_16057 === (6))){
var inst_16051 = (state_16056[(2)]);
var state_16056__$1 = state_16056;
var statearr_16069_18134 = state_16056__$1;
(statearr_16069_18134[(2)] = inst_16051);

(statearr_16069_18134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16057 === (3))){
var inst_16053 = (state_16056[(2)]);
var inst_16054 = cljs.core.async.close_BANG_(out);
var state_16056__$1 = (function (){var statearr_16071 = state_16056;
(statearr_16071[(9)] = inst_16053);

return statearr_16071;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16056__$1,inst_16054);
} else {
if((state_val_16057 === (2))){
var inst_16033 = (state_16056[(8)]);
var inst_16035 = (inst_16033 < n);
var state_16056__$1 = state_16056;
if(cljs.core.truth_(inst_16035)){
var statearr_16075_18143 = state_16056__$1;
(statearr_16075_18143[(1)] = (4));

} else {
var statearr_16079_18144 = state_16056__$1;
(statearr_16079_18144[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16057 === (11))){
var inst_16033 = (state_16056[(8)]);
var inst_16043 = (state_16056[(2)]);
var inst_16044 = (inst_16033 + (1));
var inst_16033__$1 = inst_16044;
var state_16056__$1 = (function (){var statearr_16084 = state_16056;
(statearr_16084[(8)] = inst_16033__$1);

(statearr_16084[(10)] = inst_16043);

return statearr_16084;
})();
var statearr_16085_18145 = state_16056__$1;
(statearr_16085_18145[(2)] = null);

(statearr_16085_18145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16057 === (9))){
var state_16056__$1 = state_16056;
var statearr_16089_18146 = state_16056__$1;
(statearr_16089_18146[(2)] = null);

(statearr_16089_18146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16057 === (5))){
var state_16056__$1 = state_16056;
var statearr_16092_18150 = state_16056__$1;
(statearr_16092_18150[(2)] = null);

(statearr_16092_18150[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16057 === (10))){
var inst_16048 = (state_16056[(2)]);
var state_16056__$1 = state_16056;
var statearr_16093_18151 = state_16056__$1;
(statearr_16093_18151[(2)] = inst_16048);

(statearr_16093_18151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16057 === (8))){
var inst_16038 = (state_16056[(7)]);
var state_16056__$1 = state_16056;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16056__$1,(11),out,inst_16038);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13462__auto__ = null;
var cljs$core$async$state_machine__13462__auto____0 = (function (){
var statearr_16100 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16100[(0)] = cljs$core$async$state_machine__13462__auto__);

(statearr_16100[(1)] = (1));

return statearr_16100;
});
var cljs$core$async$state_machine__13462__auto____1 = (function (state_16056){
while(true){
var ret_value__13463__auto__ = (function (){try{while(true){
var result__13464__auto__ = switch__13461__auto__(state_16056);
if(cljs.core.keyword_identical_QMARK_(result__13464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13464__auto__;
}
break;
}
}catch (e16101){var ex__13465__auto__ = e16101;
var statearr_16103_18156 = state_16056;
(statearr_16103_18156[(2)] = ex__13465__auto__);


if(cljs.core.seq((state_16056[(4)]))){
var statearr_16105_18158 = state_16056;
(statearr_16105_18158[(1)] = cljs.core.first((state_16056[(4)])));

} else {
throw ex__13465__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18159 = state_16056;
state_16056 = G__18159;
continue;
} else {
return ret_value__13463__auto__;
}
break;
}
});
cljs$core$async$state_machine__13462__auto__ = function(state_16056){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13462__auto____1.call(this,state_16056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13462__auto____0;
cljs$core$async$state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13462__auto____1;
return cljs$core$async$state_machine__13462__auto__;
})()
})();
var state__13713__auto__ = (function (){var statearr_16111 = f__13712__auto__();
(statearr_16111[(6)] = c__13711__auto___18128);

return statearr_16111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13713__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16133 = (function (f,ch,meta16120,_,fn1,meta16134){
this.f = f;
this.ch = ch;
this.meta16120 = meta16120;
this._ = _;
this.fn1 = fn1;
this.meta16134 = meta16134;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16135,meta16134__$1){
var self__ = this;
var _16135__$1 = this;
return (new cljs.core.async.t_cljs$core$async16133(self__.f,self__.ch,self__.meta16120,self__._,self__.fn1,meta16134__$1));
}));

(cljs.core.async.t_cljs$core$async16133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16135){
var self__ = this;
var _16135__$1 = this;
return self__.meta16134;
}));

(cljs.core.async.t_cljs$core$async16133.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16133.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16133.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16133.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16114_SHARP_){
var G__16144 = (((p1__16114_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16114_SHARP_) : self__.f.call(null,p1__16114_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16144) : f1.call(null,G__16144));
});
}));

(cljs.core.async.t_cljs$core$async16133.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16120","meta16120",2004987801,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16119","cljs.core.async/t_cljs$core$async16119",-884609779,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16134","meta16134",-4848293,null)], null);
}));

(cljs.core.async.t_cljs$core$async16133.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16133.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16133");

(cljs.core.async.t_cljs$core$async16133.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16133");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16133.
 */
cljs.core.async.__GT_t_cljs$core$async16133 = (function cljs$core$async$__GT_t_cljs$core$async16133(f,ch,meta16120,_,fn1,meta16134){
return (new cljs.core.async.t_cljs$core$async16133(f,ch,meta16120,_,fn1,meta16134));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16119 = (function (f,ch,meta16120){
this.f = f;
this.ch = ch;
this.meta16120 = meta16120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16121,meta16120__$1){
var self__ = this;
var _16121__$1 = this;
return (new cljs.core.async.t_cljs$core$async16119(self__.f,self__.ch,meta16120__$1));
}));

(cljs.core.async.t_cljs$core$async16119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16121){
var self__ = this;
var _16121__$1 = this;
return self__.meta16120;
}));

(cljs.core.async.t_cljs$core$async16119.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16119.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16119.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16119.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16119.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16133(self__.f,self__.ch,self__.meta16120,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16160 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16160) : self__.f.call(null,G__16160));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16119.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16119.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16119.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16120","meta16120",2004987801,null)], null);
}));

(cljs.core.async.t_cljs$core$async16119.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16119.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16119");

(cljs.core.async.t_cljs$core$async16119.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16119");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16119.
 */
cljs.core.async.__GT_t_cljs$core$async16119 = (function cljs$core$async$__GT_t_cljs$core$async16119(f,ch,meta16120){
return (new cljs.core.async.t_cljs$core$async16119(f,ch,meta16120));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16119(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16180 = (function (f,ch,meta16181){
this.f = f;
this.ch = ch;
this.meta16181 = meta16181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16182,meta16181__$1){
var self__ = this;
var _16182__$1 = this;
return (new cljs.core.async.t_cljs$core$async16180(self__.f,self__.ch,meta16181__$1));
}));

(cljs.core.async.t_cljs$core$async16180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16182){
var self__ = this;
var _16182__$1 = this;
return self__.meta16181;
}));

(cljs.core.async.t_cljs$core$async16180.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16180.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16180.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16180.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16180.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16180.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16180.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16181","meta16181",-1055763816,null)], null);
}));

(cljs.core.async.t_cljs$core$async16180.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16180");

(cljs.core.async.t_cljs$core$async16180.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16180");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16180.
 */
cljs.core.async.__GT_t_cljs$core$async16180 = (function cljs$core$async$__GT_t_cljs$core$async16180(f,ch,meta16181){
return (new cljs.core.async.t_cljs$core$async16180(f,ch,meta16181));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16180(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16228 = (function (p,ch,meta16229){
this.p = p;
this.ch = ch;
this.meta16229 = meta16229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16230,meta16229__$1){
var self__ = this;
var _16230__$1 = this;
return (new cljs.core.async.t_cljs$core$async16228(self__.p,self__.ch,meta16229__$1));
}));

(cljs.core.async.t_cljs$core$async16228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16230){
var self__ = this;
var _16230__$1 = this;
return self__.meta16229;
}));

(cljs.core.async.t_cljs$core$async16228.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16228.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16228.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16228.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16228.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16228.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16228.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16228.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16229","meta16229",-1995091248,null)], null);
}));

(cljs.core.async.t_cljs$core$async16228.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16228.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16228");

(cljs.core.async.t_cljs$core$async16228.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16228");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16228.
 */
cljs.core.async.__GT_t_cljs$core$async16228 = (function cljs$core$async$__GT_t_cljs$core$async16228(p,ch,meta16229){
return (new cljs.core.async.t_cljs$core$async16228(p,ch,meta16229));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16228(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16267 = arguments.length;
switch (G__16267) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13711__auto___18202 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13712__auto__ = (function (){var switch__13461__auto__ = (function (state_16305){
var state_val_16306 = (state_16305[(1)]);
if((state_val_16306 === (7))){
var inst_16300 = (state_16305[(2)]);
var state_16305__$1 = state_16305;
var statearr_16316_18206 = state_16305__$1;
(statearr_16316_18206[(2)] = inst_16300);

(statearr_16316_18206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16306 === (1))){
var state_16305__$1 = state_16305;
var statearr_16317_18208 = state_16305__$1;
(statearr_16317_18208[(2)] = null);

(statearr_16317_18208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16306 === (4))){
var inst_16281 = (state_16305[(7)]);
var inst_16281__$1 = (state_16305[(2)]);
var inst_16282 = (inst_16281__$1 == null);
var state_16305__$1 = (function (){var statearr_16320 = state_16305;
(statearr_16320[(7)] = inst_16281__$1);

return statearr_16320;
})();
if(cljs.core.truth_(inst_16282)){
var statearr_16325_18218 = state_16305__$1;
(statearr_16325_18218[(1)] = (5));

} else {
var statearr_16327_18219 = state_16305__$1;
(statearr_16327_18219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16306 === (6))){
var inst_16281 = (state_16305[(7)]);
var inst_16290 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16281) : p.call(null,inst_16281));
var state_16305__$1 = state_16305;
if(cljs.core.truth_(inst_16290)){
var statearr_16331_18220 = state_16305__$1;
(statearr_16331_18220[(1)] = (8));

} else {
var statearr_16336_18221 = state_16305__$1;
(statearr_16336_18221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16306 === (3))){
var inst_16302 = (state_16305[(2)]);
var state_16305__$1 = state_16305;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16305__$1,inst_16302);
} else {
if((state_val_16306 === (2))){
var state_16305__$1 = state_16305;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16305__$1,(4),ch);
} else {
if((state_val_16306 === (11))){
var inst_16294 = (state_16305[(2)]);
var state_16305__$1 = state_16305;
var statearr_16338_18227 = state_16305__$1;
(statearr_16338_18227[(2)] = inst_16294);

(statearr_16338_18227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16306 === (9))){
var state_16305__$1 = state_16305;
var statearr_16341_18228 = state_16305__$1;
(statearr_16341_18228[(2)] = null);

(statearr_16341_18228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16306 === (5))){
var inst_16285 = cljs.core.async.close_BANG_(out);
var state_16305__$1 = state_16305;
var statearr_16346_18230 = state_16305__$1;
(statearr_16346_18230[(2)] = inst_16285);

(statearr_16346_18230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16306 === (10))){
var inst_16297 = (state_16305[(2)]);
var state_16305__$1 = (function (){var statearr_16350 = state_16305;
(statearr_16350[(8)] = inst_16297);

return statearr_16350;
})();
var statearr_16352_18231 = state_16305__$1;
(statearr_16352_18231[(2)] = null);

(statearr_16352_18231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16306 === (8))){
var inst_16281 = (state_16305[(7)]);
var state_16305__$1 = state_16305;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16305__$1,(11),out,inst_16281);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13462__auto__ = null;
var cljs$core$async$state_machine__13462__auto____0 = (function (){
var statearr_16353 = [null,null,null,null,null,null,null,null,null];
(statearr_16353[(0)] = cljs$core$async$state_machine__13462__auto__);

(statearr_16353[(1)] = (1));

return statearr_16353;
});
var cljs$core$async$state_machine__13462__auto____1 = (function (state_16305){
while(true){
var ret_value__13463__auto__ = (function (){try{while(true){
var result__13464__auto__ = switch__13461__auto__(state_16305);
if(cljs.core.keyword_identical_QMARK_(result__13464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13464__auto__;
}
break;
}
}catch (e16361){var ex__13465__auto__ = e16361;
var statearr_16363_18233 = state_16305;
(statearr_16363_18233[(2)] = ex__13465__auto__);


if(cljs.core.seq((state_16305[(4)]))){
var statearr_16365_18234 = state_16305;
(statearr_16365_18234[(1)] = cljs.core.first((state_16305[(4)])));

} else {
throw ex__13465__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18235 = state_16305;
state_16305 = G__18235;
continue;
} else {
return ret_value__13463__auto__;
}
break;
}
});
cljs$core$async$state_machine__13462__auto__ = function(state_16305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13462__auto____1.call(this,state_16305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13462__auto____0;
cljs$core$async$state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13462__auto____1;
return cljs$core$async$state_machine__13462__auto__;
})()
})();
var state__13713__auto__ = (function (){var statearr_16370 = f__13712__auto__();
(statearr_16370[(6)] = c__13711__auto___18202);

return statearr_16370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13713__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16374 = arguments.length;
switch (G__16374) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13711__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13712__auto__ = (function (){var switch__13461__auto__ = (function (state_16466){
var state_val_16467 = (state_16466[(1)]);
if((state_val_16467 === (7))){
var inst_16462 = (state_16466[(2)]);
var state_16466__$1 = state_16466;
var statearr_16488_18246 = state_16466__$1;
(statearr_16488_18246[(2)] = inst_16462);

(statearr_16488_18246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16467 === (20))){
var inst_16432 = (state_16466[(7)]);
var inst_16443 = (state_16466[(2)]);
var inst_16444 = cljs.core.next(inst_16432);
var inst_16414 = inst_16444;
var inst_16415 = null;
var inst_16416 = (0);
var inst_16417 = (0);
var state_16466__$1 = (function (){var statearr_16489 = state_16466;
(statearr_16489[(8)] = inst_16443);

(statearr_16489[(9)] = inst_16415);

(statearr_16489[(10)] = inst_16414);

(statearr_16489[(11)] = inst_16417);

(statearr_16489[(12)] = inst_16416);

return statearr_16489;
})();
var statearr_16490_18256 = state_16466__$1;
(statearr_16490_18256[(2)] = null);

(statearr_16490_18256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16467 === (1))){
var state_16466__$1 = state_16466;
var statearr_16491_18263 = state_16466__$1;
(statearr_16491_18263[(2)] = null);

(statearr_16491_18263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16467 === (4))){
var inst_16403 = (state_16466[(13)]);
var inst_16403__$1 = (state_16466[(2)]);
var inst_16404 = (inst_16403__$1 == null);
var state_16466__$1 = (function (){var statearr_16494 = state_16466;
(statearr_16494[(13)] = inst_16403__$1);

return statearr_16494;
})();
if(cljs.core.truth_(inst_16404)){
var statearr_16519_18264 = state_16466__$1;
(statearr_16519_18264[(1)] = (5));

} else {
var statearr_16520_18265 = state_16466__$1;
(statearr_16520_18265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16467 === (15))){
var state_16466__$1 = state_16466;
var statearr_16524_18266 = state_16466__$1;
(statearr_16524_18266[(2)] = null);

(statearr_16524_18266[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16467 === (21))){
var state_16466__$1 = state_16466;
var statearr_16525_18267 = state_16466__$1;
(statearr_16525_18267[(2)] = null);

(statearr_16525_18267[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16467 === (13))){
var inst_16415 = (state_16466[(9)]);
var inst_16414 = (state_16466[(10)]);
var inst_16417 = (state_16466[(11)]);
var inst_16416 = (state_16466[(12)]);
var inst_16428 = (state_16466[(2)]);
var inst_16429 = (inst_16417 + (1));
var tmp16521 = inst_16415;
var tmp16522 = inst_16414;
var tmp16523 = inst_16416;
var inst_16414__$1 = tmp16522;
var inst_16415__$1 = tmp16521;
var inst_16416__$1 = tmp16523;
var inst_16417__$1 = inst_16429;
var state_16466__$1 = (function (){var statearr_16526 = state_16466;
(statearr_16526[(9)] = inst_16415__$1);

(statearr_16526[(10)] = inst_16414__$1);

(statearr_16526[(14)] = inst_16428);

(statearr_16526[(11)] = inst_16417__$1);

(statearr_16526[(12)] = inst_16416__$1);

return statearr_16526;
})();
var statearr_16527_18269 = state_16466__$1;
(statearr_16527_18269[(2)] = null);

(statearr_16527_18269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16467 === (22))){
var state_16466__$1 = state_16466;
var statearr_16534_18270 = state_16466__$1;
(statearr_16534_18270[(2)] = null);

(statearr_16534_18270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16467 === (6))){
var inst_16403 = (state_16466[(13)]);
var inst_16412 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16403) : f.call(null,inst_16403));
var inst_16413 = cljs.core.seq(inst_16412);
var inst_16414 = inst_16413;
var inst_16415 = null;
var inst_16416 = (0);
var inst_16417 = (0);
var state_16466__$1 = (function (){var statearr_16536 = state_16466;
(statearr_16536[(9)] = inst_16415);

(statearr_16536[(10)] = inst_16414);

(statearr_16536[(11)] = inst_16417);

(statearr_16536[(12)] = inst_16416);

return statearr_16536;
})();
var statearr_16552_18272 = state_16466__$1;
(statearr_16552_18272[(2)] = null);

(statearr_16552_18272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16467 === (17))){
var inst_16432 = (state_16466[(7)]);
var inst_16436 = cljs.core.chunk_first(inst_16432);
var inst_16437 = cljs.core.chunk_rest(inst_16432);
var inst_16438 = cljs.core.count(inst_16436);
var inst_16414 = inst_16437;
var inst_16415 = inst_16436;
var inst_16416 = inst_16438;
var inst_16417 = (0);
var state_16466__$1 = (function (){var statearr_16553 = state_16466;
(statearr_16553[(9)] = inst_16415);

(statearr_16553[(10)] = inst_16414);

(statearr_16553[(11)] = inst_16417);

(statearr_16553[(12)] = inst_16416);

return statearr_16553;
})();
var statearr_16554_18275 = state_16466__$1;
(statearr_16554_18275[(2)] = null);

(statearr_16554_18275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16467 === (3))){
var inst_16464 = (state_16466[(2)]);
var state_16466__$1 = state_16466;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16466__$1,inst_16464);
} else {
if((state_val_16467 === (12))){
var inst_16452 = (state_16466[(2)]);
var state_16466__$1 = state_16466;
var statearr_16555_18279 = state_16466__$1;
(statearr_16555_18279[(2)] = inst_16452);

(statearr_16555_18279[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16467 === (2))){
var state_16466__$1 = state_16466;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16466__$1,(4),in$);
} else {
if((state_val_16467 === (23))){
var inst_16460 = (state_16466[(2)]);
var state_16466__$1 = state_16466;
var statearr_16559_18283 = state_16466__$1;
(statearr_16559_18283[(2)] = inst_16460);

(statearr_16559_18283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16467 === (19))){
var inst_16447 = (state_16466[(2)]);
var state_16466__$1 = state_16466;
var statearr_16560_18284 = state_16466__$1;
(statearr_16560_18284[(2)] = inst_16447);

(statearr_16560_18284[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16467 === (11))){
var inst_16414 = (state_16466[(10)]);
var inst_16432 = (state_16466[(7)]);
var inst_16432__$1 = cljs.core.seq(inst_16414);
var state_16466__$1 = (function (){var statearr_16561 = state_16466;
(statearr_16561[(7)] = inst_16432__$1);

return statearr_16561;
})();
if(inst_16432__$1){
var statearr_16562_18285 = state_16466__$1;
(statearr_16562_18285[(1)] = (14));

} else {
var statearr_16563_18286 = state_16466__$1;
(statearr_16563_18286[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16467 === (9))){
var inst_16454 = (state_16466[(2)]);
var inst_16455 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16466__$1 = (function (){var statearr_16564 = state_16466;
(statearr_16564[(15)] = inst_16454);

return statearr_16564;
})();
if(cljs.core.truth_(inst_16455)){
var statearr_16565_18287 = state_16466__$1;
(statearr_16565_18287[(1)] = (21));

} else {
var statearr_16566_18288 = state_16466__$1;
(statearr_16566_18288[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16467 === (5))){
var inst_16406 = cljs.core.async.close_BANG_(out);
var state_16466__$1 = state_16466;
var statearr_16567_18289 = state_16466__$1;
(statearr_16567_18289[(2)] = inst_16406);

(statearr_16567_18289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16467 === (14))){
var inst_16432 = (state_16466[(7)]);
var inst_16434 = cljs.core.chunked_seq_QMARK_(inst_16432);
var state_16466__$1 = state_16466;
if(inst_16434){
var statearr_16569_18290 = state_16466__$1;
(statearr_16569_18290[(1)] = (17));

} else {
var statearr_16571_18291 = state_16466__$1;
(statearr_16571_18291[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16467 === (16))){
var inst_16450 = (state_16466[(2)]);
var state_16466__$1 = state_16466;
var statearr_16572_18292 = state_16466__$1;
(statearr_16572_18292[(2)] = inst_16450);

(statearr_16572_18292[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16467 === (10))){
var inst_16415 = (state_16466[(9)]);
var inst_16417 = (state_16466[(11)]);
var inst_16426 = cljs.core._nth(inst_16415,inst_16417);
var state_16466__$1 = state_16466;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16466__$1,(13),out,inst_16426);
} else {
if((state_val_16467 === (18))){
var inst_16432 = (state_16466[(7)]);
var inst_16441 = cljs.core.first(inst_16432);
var state_16466__$1 = state_16466;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16466__$1,(20),out,inst_16441);
} else {
if((state_val_16467 === (8))){
var inst_16417 = (state_16466[(11)]);
var inst_16416 = (state_16466[(12)]);
var inst_16422 = (inst_16417 < inst_16416);
var inst_16423 = inst_16422;
var state_16466__$1 = state_16466;
if(cljs.core.truth_(inst_16423)){
var statearr_16573_18293 = state_16466__$1;
(statearr_16573_18293[(1)] = (10));

} else {
var statearr_16574_18294 = state_16466__$1;
(statearr_16574_18294[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13462__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13462__auto____0 = (function (){
var statearr_16575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16575[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13462__auto__);

(statearr_16575[(1)] = (1));

return statearr_16575;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13462__auto____1 = (function (state_16466){
while(true){
var ret_value__13463__auto__ = (function (){try{while(true){
var result__13464__auto__ = switch__13461__auto__(state_16466);
if(cljs.core.keyword_identical_QMARK_(result__13464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13464__auto__;
}
break;
}
}catch (e16576){var ex__13465__auto__ = e16576;
var statearr_16577_18295 = state_16466;
(statearr_16577_18295[(2)] = ex__13465__auto__);


if(cljs.core.seq((state_16466[(4)]))){
var statearr_16578_18296 = state_16466;
(statearr_16578_18296[(1)] = cljs.core.first((state_16466[(4)])));

} else {
throw ex__13465__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18297 = state_16466;
state_16466 = G__18297;
continue;
} else {
return ret_value__13463__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13462__auto__ = function(state_16466){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13462__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13462__auto____1.call(this,state_16466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13462__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13462__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13462__auto__;
})()
})();
var state__13713__auto__ = (function (){var statearr_16582 = f__13712__auto__();
(statearr_16582[(6)] = c__13711__auto__);

return statearr_16582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13713__auto__);
}));

return c__13711__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16584 = arguments.length;
switch (G__16584) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__16593 = arguments.length;
switch (G__16593) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__16597 = arguments.length;
switch (G__16597) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13711__auto___18301 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13712__auto__ = (function (){var switch__13461__auto__ = (function (state_16632){
var state_val_16633 = (state_16632[(1)]);
if((state_val_16633 === (7))){
var inst_16627 = (state_16632[(2)]);
var state_16632__$1 = state_16632;
var statearr_16640_18302 = state_16632__$1;
(statearr_16640_18302[(2)] = inst_16627);

(statearr_16640_18302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16633 === (1))){
var inst_16606 = null;
var state_16632__$1 = (function (){var statearr_16646 = state_16632;
(statearr_16646[(7)] = inst_16606);

return statearr_16646;
})();
var statearr_16647_18303 = state_16632__$1;
(statearr_16647_18303[(2)] = null);

(statearr_16647_18303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16633 === (4))){
var inst_16612 = (state_16632[(8)]);
var inst_16612__$1 = (state_16632[(2)]);
var inst_16613 = (inst_16612__$1 == null);
var inst_16614 = cljs.core.not(inst_16613);
var state_16632__$1 = (function (){var statearr_16658 = state_16632;
(statearr_16658[(8)] = inst_16612__$1);

return statearr_16658;
})();
if(inst_16614){
var statearr_16659_18311 = state_16632__$1;
(statearr_16659_18311[(1)] = (5));

} else {
var statearr_16660_18312 = state_16632__$1;
(statearr_16660_18312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16633 === (6))){
var state_16632__$1 = state_16632;
var statearr_16661_18313 = state_16632__$1;
(statearr_16661_18313[(2)] = null);

(statearr_16661_18313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16633 === (3))){
var inst_16629 = (state_16632[(2)]);
var inst_16630 = cljs.core.async.close_BANG_(out);
var state_16632__$1 = (function (){var statearr_16662 = state_16632;
(statearr_16662[(9)] = inst_16629);

return statearr_16662;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16632__$1,inst_16630);
} else {
if((state_val_16633 === (2))){
var state_16632__$1 = state_16632;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16632__$1,(4),ch);
} else {
if((state_val_16633 === (11))){
var inst_16612 = (state_16632[(8)]);
var inst_16621 = (state_16632[(2)]);
var inst_16606 = inst_16612;
var state_16632__$1 = (function (){var statearr_16666 = state_16632;
(statearr_16666[(7)] = inst_16606);

(statearr_16666[(10)] = inst_16621);

return statearr_16666;
})();
var statearr_16667_18325 = state_16632__$1;
(statearr_16667_18325[(2)] = null);

(statearr_16667_18325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16633 === (9))){
var inst_16612 = (state_16632[(8)]);
var state_16632__$1 = state_16632;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16632__$1,(11),out,inst_16612);
} else {
if((state_val_16633 === (5))){
var inst_16606 = (state_16632[(7)]);
var inst_16612 = (state_16632[(8)]);
var inst_16616 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16612,inst_16606);
var state_16632__$1 = state_16632;
if(inst_16616){
var statearr_16692_18329 = state_16632__$1;
(statearr_16692_18329[(1)] = (8));

} else {
var statearr_16696_18330 = state_16632__$1;
(statearr_16696_18330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16633 === (10))){
var inst_16624 = (state_16632[(2)]);
var state_16632__$1 = state_16632;
var statearr_16698_18331 = state_16632__$1;
(statearr_16698_18331[(2)] = inst_16624);

(statearr_16698_18331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16633 === (8))){
var inst_16606 = (state_16632[(7)]);
var tmp16688 = inst_16606;
var inst_16606__$1 = tmp16688;
var state_16632__$1 = (function (){var statearr_16699 = state_16632;
(statearr_16699[(7)] = inst_16606__$1);

return statearr_16699;
})();
var statearr_16704_18332 = state_16632__$1;
(statearr_16704_18332[(2)] = null);

(statearr_16704_18332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13462__auto__ = null;
var cljs$core$async$state_machine__13462__auto____0 = (function (){
var statearr_16711 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16711[(0)] = cljs$core$async$state_machine__13462__auto__);

(statearr_16711[(1)] = (1));

return statearr_16711;
});
var cljs$core$async$state_machine__13462__auto____1 = (function (state_16632){
while(true){
var ret_value__13463__auto__ = (function (){try{while(true){
var result__13464__auto__ = switch__13461__auto__(state_16632);
if(cljs.core.keyword_identical_QMARK_(result__13464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13464__auto__;
}
break;
}
}catch (e16712){var ex__13465__auto__ = e16712;
var statearr_16715_18337 = state_16632;
(statearr_16715_18337[(2)] = ex__13465__auto__);


if(cljs.core.seq((state_16632[(4)]))){
var statearr_16716_18338 = state_16632;
(statearr_16716_18338[(1)] = cljs.core.first((state_16632[(4)])));

} else {
throw ex__13465__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18340 = state_16632;
state_16632 = G__18340;
continue;
} else {
return ret_value__13463__auto__;
}
break;
}
});
cljs$core$async$state_machine__13462__auto__ = function(state_16632){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13462__auto____1.call(this,state_16632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13462__auto____0;
cljs$core$async$state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13462__auto____1;
return cljs$core$async$state_machine__13462__auto__;
})()
})();
var state__13713__auto__ = (function (){var statearr_16722 = f__13712__auto__();
(statearr_16722[(6)] = c__13711__auto___18301);

return statearr_16722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13713__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16726 = arguments.length;
switch (G__16726) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13711__auto___18354 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13712__auto__ = (function (){var switch__13461__auto__ = (function (state_16768){
var state_val_16769 = (state_16768[(1)]);
if((state_val_16769 === (7))){
var inst_16763 = (state_16768[(2)]);
var state_16768__$1 = state_16768;
var statearr_16776_18367 = state_16768__$1;
(statearr_16776_18367[(2)] = inst_16763);

(statearr_16776_18367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16769 === (1))){
var inst_16729 = (new Array(n));
var inst_16730 = inst_16729;
var inst_16731 = (0);
var state_16768__$1 = (function (){var statearr_16777 = state_16768;
(statearr_16777[(7)] = inst_16731);

(statearr_16777[(8)] = inst_16730);

return statearr_16777;
})();
var statearr_16778_18375 = state_16768__$1;
(statearr_16778_18375[(2)] = null);

(statearr_16778_18375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16769 === (4))){
var inst_16734 = (state_16768[(9)]);
var inst_16734__$1 = (state_16768[(2)]);
var inst_16735 = (inst_16734__$1 == null);
var inst_16736 = cljs.core.not(inst_16735);
var state_16768__$1 = (function (){var statearr_16779 = state_16768;
(statearr_16779[(9)] = inst_16734__$1);

return statearr_16779;
})();
if(inst_16736){
var statearr_16780_18381 = state_16768__$1;
(statearr_16780_18381[(1)] = (5));

} else {
var statearr_16781_18388 = state_16768__$1;
(statearr_16781_18388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16769 === (15))){
var inst_16756 = (state_16768[(2)]);
var state_16768__$1 = state_16768;
var statearr_16783_18392 = state_16768__$1;
(statearr_16783_18392[(2)] = inst_16756);

(statearr_16783_18392[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16769 === (13))){
var state_16768__$1 = state_16768;
var statearr_16784_18398 = state_16768__$1;
(statearr_16784_18398[(2)] = null);

(statearr_16784_18398[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16769 === (6))){
var inst_16731 = (state_16768[(7)]);
var inst_16752 = (inst_16731 > (0));
var state_16768__$1 = state_16768;
if(cljs.core.truth_(inst_16752)){
var statearr_16785_18403 = state_16768__$1;
(statearr_16785_18403[(1)] = (12));

} else {
var statearr_16786_18404 = state_16768__$1;
(statearr_16786_18404[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16769 === (3))){
var inst_16765 = (state_16768[(2)]);
var state_16768__$1 = state_16768;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16768__$1,inst_16765);
} else {
if((state_val_16769 === (12))){
var inst_16730 = (state_16768[(8)]);
var inst_16754 = cljs.core.vec(inst_16730);
var state_16768__$1 = state_16768;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16768__$1,(15),out,inst_16754);
} else {
if((state_val_16769 === (2))){
var state_16768__$1 = state_16768;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16768__$1,(4),ch);
} else {
if((state_val_16769 === (11))){
var inst_16746 = (state_16768[(2)]);
var inst_16747 = (new Array(n));
var inst_16730 = inst_16747;
var inst_16731 = (0);
var state_16768__$1 = (function (){var statearr_16795 = state_16768;
(statearr_16795[(10)] = inst_16746);

(statearr_16795[(7)] = inst_16731);

(statearr_16795[(8)] = inst_16730);

return statearr_16795;
})();
var statearr_16797_18406 = state_16768__$1;
(statearr_16797_18406[(2)] = null);

(statearr_16797_18406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16769 === (9))){
var inst_16730 = (state_16768[(8)]);
var inst_16744 = cljs.core.vec(inst_16730);
var state_16768__$1 = state_16768;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16768__$1,(11),out,inst_16744);
} else {
if((state_val_16769 === (5))){
var inst_16734 = (state_16768[(9)]);
var inst_16739 = (state_16768[(11)]);
var inst_16731 = (state_16768[(7)]);
var inst_16730 = (state_16768[(8)]);
var inst_16738 = (inst_16730[inst_16731] = inst_16734);
var inst_16739__$1 = (inst_16731 + (1));
var inst_16740 = (inst_16739__$1 < n);
var state_16768__$1 = (function (){var statearr_16800 = state_16768;
(statearr_16800[(11)] = inst_16739__$1);

(statearr_16800[(12)] = inst_16738);

return statearr_16800;
})();
if(cljs.core.truth_(inst_16740)){
var statearr_16802_18415 = state_16768__$1;
(statearr_16802_18415[(1)] = (8));

} else {
var statearr_16803_18416 = state_16768__$1;
(statearr_16803_18416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16769 === (14))){
var inst_16759 = (state_16768[(2)]);
var inst_16761 = cljs.core.async.close_BANG_(out);
var state_16768__$1 = (function (){var statearr_16806 = state_16768;
(statearr_16806[(13)] = inst_16759);

return statearr_16806;
})();
var statearr_16807_18417 = state_16768__$1;
(statearr_16807_18417[(2)] = inst_16761);

(statearr_16807_18417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16769 === (10))){
var inst_16750 = (state_16768[(2)]);
var state_16768__$1 = state_16768;
var statearr_16808_18418 = state_16768__$1;
(statearr_16808_18418[(2)] = inst_16750);

(statearr_16808_18418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16769 === (8))){
var inst_16739 = (state_16768[(11)]);
var inst_16730 = (state_16768[(8)]);
var tmp16804 = inst_16730;
var inst_16730__$1 = tmp16804;
var inst_16731 = inst_16739;
var state_16768__$1 = (function (){var statearr_16809 = state_16768;
(statearr_16809[(7)] = inst_16731);

(statearr_16809[(8)] = inst_16730__$1);

return statearr_16809;
})();
var statearr_16810_18419 = state_16768__$1;
(statearr_16810_18419[(2)] = null);

(statearr_16810_18419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13462__auto__ = null;
var cljs$core$async$state_machine__13462__auto____0 = (function (){
var statearr_16811 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16811[(0)] = cljs$core$async$state_machine__13462__auto__);

(statearr_16811[(1)] = (1));

return statearr_16811;
});
var cljs$core$async$state_machine__13462__auto____1 = (function (state_16768){
while(true){
var ret_value__13463__auto__ = (function (){try{while(true){
var result__13464__auto__ = switch__13461__auto__(state_16768);
if(cljs.core.keyword_identical_QMARK_(result__13464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13464__auto__;
}
break;
}
}catch (e16812){var ex__13465__auto__ = e16812;
var statearr_16816_18424 = state_16768;
(statearr_16816_18424[(2)] = ex__13465__auto__);


if(cljs.core.seq((state_16768[(4)]))){
var statearr_16817_18425 = state_16768;
(statearr_16817_18425[(1)] = cljs.core.first((state_16768[(4)])));

} else {
throw ex__13465__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18427 = state_16768;
state_16768 = G__18427;
continue;
} else {
return ret_value__13463__auto__;
}
break;
}
});
cljs$core$async$state_machine__13462__auto__ = function(state_16768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13462__auto____1.call(this,state_16768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13462__auto____0;
cljs$core$async$state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13462__auto____1;
return cljs$core$async$state_machine__13462__auto__;
})()
})();
var state__13713__auto__ = (function (){var statearr_16818 = f__13712__auto__();
(statearr_16818[(6)] = c__13711__auto___18354);

return statearr_16818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13713__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16824 = arguments.length;
switch (G__16824) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13711__auto___18440 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13712__auto__ = (function (){var switch__13461__auto__ = (function (state_16879){
var state_val_16880 = (state_16879[(1)]);
if((state_val_16880 === (7))){
var inst_16875 = (state_16879[(2)]);
var state_16879__$1 = state_16879;
var statearr_16881_18444 = state_16879__$1;
(statearr_16881_18444[(2)] = inst_16875);

(statearr_16881_18444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16880 === (1))){
var inst_16835 = [];
var inst_16836 = inst_16835;
var inst_16837 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16879__$1 = (function (){var statearr_16883 = state_16879;
(statearr_16883[(7)] = inst_16836);

(statearr_16883[(8)] = inst_16837);

return statearr_16883;
})();
var statearr_16884_18446 = state_16879__$1;
(statearr_16884_18446[(2)] = null);

(statearr_16884_18446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16880 === (4))){
var inst_16840 = (state_16879[(9)]);
var inst_16840__$1 = (state_16879[(2)]);
var inst_16841 = (inst_16840__$1 == null);
var inst_16842 = cljs.core.not(inst_16841);
var state_16879__$1 = (function (){var statearr_16887 = state_16879;
(statearr_16887[(9)] = inst_16840__$1);

return statearr_16887;
})();
if(inst_16842){
var statearr_16888_18449 = state_16879__$1;
(statearr_16888_18449[(1)] = (5));

} else {
var statearr_16889_18451 = state_16879__$1;
(statearr_16889_18451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16880 === (15))){
var inst_16836 = (state_16879[(7)]);
var inst_16867 = cljs.core.vec(inst_16836);
var state_16879__$1 = state_16879;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16879__$1,(18),out,inst_16867);
} else {
if((state_val_16880 === (13))){
var inst_16862 = (state_16879[(2)]);
var state_16879__$1 = state_16879;
var statearr_16890_18455 = state_16879__$1;
(statearr_16890_18455[(2)] = inst_16862);

(statearr_16890_18455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16880 === (6))){
var inst_16836 = (state_16879[(7)]);
var inst_16864 = inst_16836.length;
var inst_16865 = (inst_16864 > (0));
var state_16879__$1 = state_16879;
if(cljs.core.truth_(inst_16865)){
var statearr_16900_18458 = state_16879__$1;
(statearr_16900_18458[(1)] = (15));

} else {
var statearr_16907_18462 = state_16879__$1;
(statearr_16907_18462[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16880 === (17))){
var inst_16872 = (state_16879[(2)]);
var inst_16873 = cljs.core.async.close_BANG_(out);
var state_16879__$1 = (function (){var statearr_16908 = state_16879;
(statearr_16908[(10)] = inst_16872);

return statearr_16908;
})();
var statearr_16910_18468 = state_16879__$1;
(statearr_16910_18468[(2)] = inst_16873);

(statearr_16910_18468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16880 === (3))){
var inst_16877 = (state_16879[(2)]);
var state_16879__$1 = state_16879;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16879__$1,inst_16877);
} else {
if((state_val_16880 === (12))){
var inst_16836 = (state_16879[(7)]);
var inst_16855 = cljs.core.vec(inst_16836);
var state_16879__$1 = state_16879;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16879__$1,(14),out,inst_16855);
} else {
if((state_val_16880 === (2))){
var state_16879__$1 = state_16879;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16879__$1,(4),ch);
} else {
if((state_val_16880 === (11))){
var inst_16840 = (state_16879[(9)]);
var inst_16844 = (state_16879[(11)]);
var inst_16836 = (state_16879[(7)]);
var inst_16852 = inst_16836.push(inst_16840);
var tmp16911 = inst_16836;
var inst_16836__$1 = tmp16911;
var inst_16837 = inst_16844;
var state_16879__$1 = (function (){var statearr_16914 = state_16879;
(statearr_16914[(12)] = inst_16852);

(statearr_16914[(7)] = inst_16836__$1);

(statearr_16914[(8)] = inst_16837);

return statearr_16914;
})();
var statearr_16915_18501 = state_16879__$1;
(statearr_16915_18501[(2)] = null);

(statearr_16915_18501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16880 === (9))){
var inst_16837 = (state_16879[(8)]);
var inst_16848 = cljs.core.keyword_identical_QMARK_(inst_16837,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_16879__$1 = state_16879;
var statearr_16916_18506 = state_16879__$1;
(statearr_16916_18506[(2)] = inst_16848);

(statearr_16916_18506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16880 === (5))){
var inst_16840 = (state_16879[(9)]);
var inst_16845 = (state_16879[(13)]);
var inst_16844 = (state_16879[(11)]);
var inst_16837 = (state_16879[(8)]);
var inst_16844__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16840) : f.call(null,inst_16840));
var inst_16845__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16844__$1,inst_16837);
var state_16879__$1 = (function (){var statearr_16918 = state_16879;
(statearr_16918[(13)] = inst_16845__$1);

(statearr_16918[(11)] = inst_16844__$1);

return statearr_16918;
})();
if(inst_16845__$1){
var statearr_16922_18509 = state_16879__$1;
(statearr_16922_18509[(1)] = (8));

} else {
var statearr_16923_18511 = state_16879__$1;
(statearr_16923_18511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16880 === (14))){
var inst_16840 = (state_16879[(9)]);
var inst_16844 = (state_16879[(11)]);
var inst_16857 = (state_16879[(2)]);
var inst_16858 = [];
var inst_16859 = inst_16858.push(inst_16840);
var inst_16836 = inst_16858;
var inst_16837 = inst_16844;
var state_16879__$1 = (function (){var statearr_16925 = state_16879;
(statearr_16925[(14)] = inst_16859);

(statearr_16925[(7)] = inst_16836);

(statearr_16925[(8)] = inst_16837);

(statearr_16925[(15)] = inst_16857);

return statearr_16925;
})();
var statearr_16930_18518 = state_16879__$1;
(statearr_16930_18518[(2)] = null);

(statearr_16930_18518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16880 === (16))){
var state_16879__$1 = state_16879;
var statearr_16931_18519 = state_16879__$1;
(statearr_16931_18519[(2)] = null);

(statearr_16931_18519[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16880 === (10))){
var inst_16850 = (state_16879[(2)]);
var state_16879__$1 = state_16879;
if(cljs.core.truth_(inst_16850)){
var statearr_16932_18524 = state_16879__$1;
(statearr_16932_18524[(1)] = (11));

} else {
var statearr_16933_18525 = state_16879__$1;
(statearr_16933_18525[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16880 === (18))){
var inst_16869 = (state_16879[(2)]);
var state_16879__$1 = state_16879;
var statearr_16934_18528 = state_16879__$1;
(statearr_16934_18528[(2)] = inst_16869);

(statearr_16934_18528[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16880 === (8))){
var inst_16845 = (state_16879[(13)]);
var state_16879__$1 = state_16879;
var statearr_16935_18530 = state_16879__$1;
(statearr_16935_18530[(2)] = inst_16845);

(statearr_16935_18530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13462__auto__ = null;
var cljs$core$async$state_machine__13462__auto____0 = (function (){
var statearr_16936 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16936[(0)] = cljs$core$async$state_machine__13462__auto__);

(statearr_16936[(1)] = (1));

return statearr_16936;
});
var cljs$core$async$state_machine__13462__auto____1 = (function (state_16879){
while(true){
var ret_value__13463__auto__ = (function (){try{while(true){
var result__13464__auto__ = switch__13461__auto__(state_16879);
if(cljs.core.keyword_identical_QMARK_(result__13464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13464__auto__;
}
break;
}
}catch (e16937){var ex__13465__auto__ = e16937;
var statearr_16939_18532 = state_16879;
(statearr_16939_18532[(2)] = ex__13465__auto__);


if(cljs.core.seq((state_16879[(4)]))){
var statearr_16940_18533 = state_16879;
(statearr_16940_18533[(1)] = cljs.core.first((state_16879[(4)])));

} else {
throw ex__13465__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18534 = state_16879;
state_16879 = G__18534;
continue;
} else {
return ret_value__13463__auto__;
}
break;
}
});
cljs$core$async$state_machine__13462__auto__ = function(state_16879){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13462__auto____1.call(this,state_16879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13462__auto____0;
cljs$core$async$state_machine__13462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13462__auto____1;
return cljs$core$async$state_machine__13462__auto__;
})()
})();
var state__13713__auto__ = (function (){var statearr_16949 = f__13712__auto__();
(statearr_16949[(6)] = c__13711__auto___18440);

return statearr_16949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13713__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
