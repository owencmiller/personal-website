goog.provide('website.app');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
website.app.draw = (function website$app$draw(state){
if(cljs.core.truth_(state)){
quil.core.background.cljs$core$IFn$_invoke$arity$3((100),(0),(100));

quil.core.fill.cljs$core$IFn$_invoke$arity$1((255));

return quil.core.text.cljs$core$IFn$_invoke$arity$3("A little graphic written to test the Quil library",(35),(150));
} else {
return quil.core.background.cljs$core$IFn$_invoke$arity$1((255));
}
});
website.app.make_sketch = (function website$app$make_sketch(){
return quil.core.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"draw","draw",1358331674),website.app.draw,new cljs.core.Keyword(null,"host","host",-1558485167),"sketch-id",new cljs.core.Keyword(null,"setup","setup",1987730512),(function (){
return false;
}),new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),(function (state){
return cljs.core.not(state);
}),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null)], 0));
});

website.app.app = (function (){var G__18360 = (function website$app$app_render(props__11998__auto__,maybe_ref__11999__auto__){
var vec__18361 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__11998__auto__),maybe_ref__11999__auto__], null);

var G__18364_18381 = helix.hooks.wrap_fx((function (){
return website.app.make_sketch();
}));
var G__18365_18382 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__18364_18381,G__18365_18382) : helix.hooks.raw_use_effect.call(null,G__18364_18381,G__18365_18382));

return helix.core.get_react().createElement("div",(function (){var obj18367 = ({"style":(function (){var obj18369 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("column"),"height":helix.impl.props.__GT_js("100%"),"width":helix.impl.props.__GT_js("100%"),"alignItems":helix.impl.props.__GT_js("center")});
return obj18369;
})()});
return obj18367;
})(),helix.core.get_react().createElement("h1",null,"Site Under Construction"),helix.core.get_react().createElement("p",null,"updated Jun 15th 2024"),helix.core.get_react().createElement("p",(function (){var obj18371 = ({"style":(function (){var obj18373 = ({"marginBottom":helix.impl.props.__GT_js("0")});
return obj18373;
})()});
return obj18371;
})(),"i'm working on moving this site to cljs, come back later :)"),helix.core.get_react().createElement("p",(function (){var obj18375 = ({"style":(function (){var obj18377 = ({"marginTop":helix.impl.props.__GT_js("5px")});
return obj18377;
})()});
return obj18375;
})()," - Owen"),helix.core.get_react().createElement("div",(function (){var obj18379 = ({"id":"sketch-id"});
return obj18379;
})()));
});
if(goog.DEBUG === true){
var G__18380 = G__18360;
(G__18380.displayName = "website.app/app");

return G__18380;
} else {
return G__18360;
}
})();



website.app.init = (function website$app$init(){
var root = module$node_modules$react_dom$client.createRoot(document.getElementById("root"));
return root.render(helix.core.get_react().createElement(website.app.app,null));
});
goog.exportSymbol('website.app.init', website.app.init);
website.app.re_render = (function website$app$re_render(){
return website.app.init();
});

//# sourceMappingURL=website.app.js.map
