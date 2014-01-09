goog.provide('tutorial_client.start');
goog.require('cljs.core');
goog.require('tutorial_client.rendering');
goog.require('tutorial_client.behavior');
goog.require('io.pedestal.app.messages');
goog.require('io.pedestal.app.render');
goog.require('io.pedestal.app.render.push');
goog.require('io.pedestal.app');
goog.require('io.pedestal.app.protocols');
tutorial_client.start.create_app = (function create_app(render_config){
var app = io.pedestal.app.build.call(null,tutorial_client.behavior.example_app);
var render_fn = io.pedestal.app.render.push.renderer.call(null,"content",render_config,io.pedestal.app.render.log_fn);
var app_model = io.pedestal.app.render.consume_app_model.call(null,app,render_fn);
io.pedestal.app.begin.call(null,app);
io.pedestal.app.protocols.put_message.call(null,(new cljs.core.Keyword("\uFDD0:input")).call(null,app),cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.type,"\uFDD0:inc",io.pedestal.app.messages.topic,cljs.core.PersistentVector.fromArray(["\uFDD0:my-counter"], true)], true));
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:app",app,"\uFDD0:app-model",app_model], true);
});
tutorial_client.start.main = (function main(){
return tutorial_client.start.create_app.call(null,tutorial_client.rendering.render_config.call(null));
});
goog.exportSymbol('tutorial_client.start.main', tutorial_client.start.main);
