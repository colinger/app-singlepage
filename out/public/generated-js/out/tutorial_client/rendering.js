goog.provide('tutorial_client.rendering');
goog.require('cljs.core');
goog.require('io.pedestal.app.render.push.handlers.automatic');
goog.require('io.pedestal.app.render.push.templates');
goog.require('io.pedestal.app.render.push');
goog.require('domina');
tutorial_client.rendering.templates = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:tutorial-client-page",(function templates(){
var G__14206 = cljs.core.gensym.call(null);
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray(["\uFDD0:message",cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray(["\uFDD0:id",G__14206,"\uFDD0:type","\uFDD0:content"], true)], true)], true),(function (G__14204){
return (function (G__14207){
return [cljs.core.str("<div id=\""),cljs.core.str(cljs.core.get.call(null,G__14207,"\uFDD0:id")),cljs.core.str("\"><div id=\""),cljs.core.str(cljs.core.get.call(null,G__14207,"\uFDD0:G__14206")),cljs.core.str("\" class=\"message\">"),cljs.core.str(cljs.core.get.call(null,G__14207,"\uFDD0:message")),cljs.core.str("</div></div>")].join('');
}).call(null,cljs.core.assoc.call(null,G__14204,"\uFDD0:G__14206",G__14206));
})], true);
})], true);
tutorial_client.rendering.render_page = (function render_page(renderer,p__14208,transmitter){
var vec__14210 = p__14208;
var _ = cljs.core.nth.call(null,vec__14210,0,null);
var path = cljs.core.nth.call(null,vec__14210,1,null);
var parent = io.pedestal.app.render.push.get_parent_id.call(null,renderer,path);
var id = io.pedestal.app.render.push.new_id_BANG_.call(null,renderer,path);
var html = io.pedestal.app.render.push.templates.add_template.call(null,renderer,path,(new cljs.core.Keyword("\uFDD0:tutorial-client-page")).call(null,tutorial_client.rendering.templates));
return domina.append_BANG_.call(null,domina.by_id.call(null,parent),html.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:id",id,"\uFDD0:message",""], true)));
});
tutorial_client.rendering.render_message = (function render_message(renderer,p__14211,transmitter){
var vec__14213 = p__14211;
var _ = cljs.core.nth.call(null,vec__14213,0,null);
var path = cljs.core.nth.call(null,vec__14213,1,null);
var ___$1 = cljs.core.nth.call(null,vec__14213,2,null);
var new_value = cljs.core.nth.call(null,vec__14213,3,null);
return io.pedestal.app.render.push.templates.update_t.call(null,renderer,path,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:message",new_value], true));
});
tutorial_client.rendering.render_config = (function render_config(){
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:node-create",cljs.core.PersistentVector.fromArray(["\uFDD0:greeting"], true),tutorial_client.rendering.render_page], true),cljs.core.PersistentVector.fromArray(["\uFDD0:node-destroy",cljs.core.PersistentVector.fromArray(["\uFDD0:greeting"], true),io.pedestal.app.render.push.handlers.automatic.default_exit], true),cljs.core.PersistentVector.fromArray(["\uFDD0:value",cljs.core.PersistentVector.fromArray(["\uFDD0:greeting"], true),tutorial_client.rendering.render_message], true)], true);
});
