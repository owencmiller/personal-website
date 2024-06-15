goog.provide('website.app');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});

website.app.app = (function (){var G__12751 = (function website$app$app_render(props__11935__auto__,maybe_ref__11936__auto__){
var vec__12752 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__11935__auto__),maybe_ref__11936__auto__], null);

return helix.core.get_react().createElement("div",(function (){var obj12756 = ({"style":(function (){var obj12758 = ({"display":helix.impl.props.__GT_js("flex"),"flexDirection":helix.impl.props.__GT_js("column"),"height":helix.impl.props.__GT_js("100%"),"width":helix.impl.props.__GT_js("100%"),"alignItems":helix.impl.props.__GT_js("center")});
return obj12758;
})()});
return obj12756;
})(),helix.core.get_react().createElement("h1",null,"----- Site Under Construction -----"),helix.core.get_react().createElement("p",null,"updated Jun 15th 2024"),helix.core.get_react().createElement("p",null,"come back later :) - Owen Miller"));
});
if(goog.DEBUG === true){
var G__12759 = G__12751;
(G__12759.displayName = "website.app/app");

return G__12759;
} else {
return G__12751;
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
