
shadow.cljs.devtools.client.env.module_loaded('main');

try { website.app.init(); } catch (e) { console.error("An error occurred when calling (website.app/init)"); throw(e); }