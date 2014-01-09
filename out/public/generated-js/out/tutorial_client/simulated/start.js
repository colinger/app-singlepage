goog.provide('tutorial_client.simulated.start');
goog.require('cljs.core');
goog.require('io.pedestal.app_tools.tooling');
goog.require('goog.Uri');
goog.require('tutorial_client.rendering');
goog.require('tutorial_client.start');
goog.require('io.pedestal.app.render.push.handlers.automatic');
tutorial_client.simulated.start.param = (function param(name){
var uri = (new goog.Uri(document.location.toString()));
return uri.getParameterValue(name);
});
tutorial_client.simulated.start.main = (function main(){
return tutorial_client.start.create_app.call(null,((cljs.core._EQ_.call(null,"auto",tutorial_client.simulated.start.param.call(null,"renderer")))?io.pedestal.app.render.push.handlers.automatic.data_renderer_config:tutorial_client.rendering.render_config.call(null)));
});
goog.exportSymbol('tutorial_client.simulated.start.main', tutorial_client.simulated.start.main);
