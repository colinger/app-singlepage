goog.provide('tutorial_client.behavior');
goog.require('cljs.core');
goog.require('io.pedestal.app');
goog.require('io.pedestal.app.messages');
goog.require('clojure.string');
tutorial_client.behavior.inc_transform = (function inc_transform(old_value,_){
return cljs.core.fnil.call(null,cljs.core.inc,0).call(null,old_value);
});
tutorial_client.behavior.init_main = (function init_main(_){
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:transform-enable",cljs.core.PersistentVector.fromArray(["\uFDD0:main","\uFDD0:my-counter"], true),"\uFDD0:inc",cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([io.pedestal.app.messages.topic,cljs.core.PersistentVector.fromArray(["\uFDD0:my-counter"], true)], true)], true)], true)], true);
});
tutorial_client.behavior.example_app = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:version",2,"\uFDD0:transform",cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:inc",cljs.core.PersistentVector.fromArray(["\uFDD0:my-counter"], true),tutorial_client.behavior.inc_transform], true)], true),"\uFDD0:emit",cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray(["\uFDD0:init",tutorial_client.behavior.init_main], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0:*"], true),null], true),io.pedestal.app.default_emitter.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:main"], true))], true)], true)], true);
