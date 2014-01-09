goog.provide('io.pedestal.app.render.push');
goog.require('cljs.core');
goog.require('io.pedestal.app.queue');
goog.require('io.pedestal.app.util.log');
goog.require('io.pedestal.app.util.platform');
goog.require('io.pedestal.app.protocols');
io.pedestal.app.render.push.search_ops = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:node-create",cljs.core.PersistentHashSet.fromArray(["\uFDD0:*",null,"\uFDD0:node-*",null], true),"\uFDD0:node-destroy",cljs.core.PersistentHashSet.fromArray(["\uFDD0:*",null,"\uFDD0:node-*",null], true),"\uFDD0:value",cljs.core.PersistentHashSet.fromArray(["\uFDD0:*",null,"\uFDD0:value",null], true),"\uFDD0:attr",cljs.core.PersistentHashSet.fromArray(["\uFDD0:*",null,"\uFDD0:attr",null], true),"\uFDD0:transform-enable",cljs.core.PersistentHashSet.fromArray(["\uFDD0:*",null,"\uFDD0:transform-*",null], true),"\uFDD0:transform-disable",cljs.core.PersistentHashSet.fromArray(["\uFDD0:*",null,"\uFDD0:transform-*",null], true)], true);
io.pedestal.app.render.push.real_path = (function real_path(op,path){
return cljs.core.cons.call(null,op,cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.repeat.call(null,"\uFDD0:children"),path)),"\uFDD0:handler"));
});
io.pedestal.app.render.push.add_handler = (function add_handler(handlers,op,path,f){
return cljs.core.assoc_in.call(null,handlers,io.pedestal.app.render.push.real_path.call(null,op,path),f);
});
io.pedestal.app.render.push.add_handlers = (function() {
var add_handlers = null;
var add_handlers__1 = (function (hs){
return add_handlers.call(null,cljs.core.PersistentArrayMap.EMPTY,hs);
});
var add_handlers__2 = (function (m,hs){
return cljs.core.reduce.call(null,(function (acc,p__10571){
var vec__10572 = p__10571;
var op = cljs.core.nth.call(null,vec__10572,0,null);
var path = cljs.core.nth.call(null,vec__10572,1,null);
var f = cljs.core.nth.call(null,vec__10572,2,null);
return io.pedestal.app.render.push.add_handler.call(null,acc,op,path,f);
}),m,hs);
});
add_handlers = function(m,hs){
switch(arguments.length){
case 1:
return add_handlers__1.call(this,m);
case 2:
return add_handlers__2.call(this,m,hs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_handlers.cljs$core$IFn$_invoke$arity$1 = add_handlers__1;
add_handlers.cljs$core$IFn$_invoke$arity$2 = add_handlers__2;
return add_handlers;
})()
;
io.pedestal.app.render.push.matching_keys = (function matching_keys(ks,p){
return cljs.core.filter.call(null,(function (k){
var or__3943__auto__ = cljs.core._EQ_.call(null,k,p);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = cljs.core._EQ_.call(null,k,"\uFDD0:*");
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = cljs.core._EQ_.call(null,k,"\uFDD0:**");
if(or__3943__auto____$2)
{return or__3943__auto____$2;
} else
{if(cljs.core.contains_QMARK_.call(null,io.pedestal.app.render.push.search_ops,p))
{return cljs.core.contains_QMARK_.call(null,p.call(null,io.pedestal.app.render.push.search_ops),k);
} else
{return null;
}
}
}
}
}),ks);
});
io.pedestal.app.render.push.sort_keys = (function sort_keys(ks){
var sorted_keys = cljs.core.remove.call(null,(function (p1__10573_SHARP_){
return cljs.core._EQ_.call(null,p1__10573_SHARP_,"\uFDD0:**");
}),cljs.core.sort.call(null,ks));
return cljs.core.reverse.call(null,(((cljs.core.count.call(null,ks) > cljs.core.count.call(null,sorted_keys)))?cljs.core.conj.call(null,sorted_keys,"\uFDD0:**"):sorted_keys));
});
io.pedestal.app.render.push.select_matches = (function select_matches(handlers,p){
var keys = io.pedestal.app.render.push.matching_keys.call(null,cljs.core.keys.call(null,handlers),p);
return cljs.core.map.call(null,(function (k){
return cljs.core.PersistentVector.fromArray([k,cljs.core.get.call(null,handlers,k)], true);
}),io.pedestal.app.render.push.sort_keys.call(null,keys));
});
io.pedestal.app.render.push.find_handler_STAR_ = (function find_handler_STAR_(handlers,path){
if(cljs.core.empty_QMARK_.call(null,path))
{return (new cljs.core.Keyword("\uFDD0:handler")).call(null,handlers);
} else
{return cljs.core.some.call(null,(function (p__10576){
var vec__10577 = p__10576;
var k = cljs.core.nth.call(null,vec__10577,0,null);
var v = cljs.core.nth.call(null,vec__10577,1,null);
var temp__4090__auto__ = find_handler_STAR_.call(null,v,cljs.core.rest.call(null,path));
if(cljs.core.truth_(temp__4090__auto__))
{var handler = temp__4090__auto__;
return handler;
} else
{if(cljs.core._EQ_.call(null,k,"\uFDD0:**"))
{return (new cljs.core.Keyword("\uFDD0:handler")).call(null,v);
} else
{return null;
}
}
}),io.pedestal.app.render.push.select_matches.call(null,(new cljs.core.Keyword("\uFDD0:children")).call(null,handlers),cljs.core.first.call(null,path)));
}
});
io.pedestal.app.render.push.find_handler = (function find_handler(handlers,op,path){
return io.pedestal.app.render.push.find_handler_STAR_.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:children",handlers], true),cljs.core.vec.call(null,cljs.core.cons.call(null,op,path)));
});
io.pedestal.app.render.push.DomMapper = {};
io.pedestal.app.render.push.get_id = (function get_id(this$,path){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.io$pedestal$app$render$push$DomMapper$get_id$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.io$pedestal$app$render$push$DomMapper$get_id$arity$2(this$,path);
} else
{var x__9709__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (io.pedestal.app.render.push.get_id[goog.typeOf(x__9709__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (io.pedestal.app.render.push.get_id["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-id",this$);
}
}
})().call(null,this$,path);
}
});
io.pedestal.app.render.push.get_parent_id = (function get_parent_id(this$,path){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.io$pedestal$app$render$push$DomMapper$get_parent_id$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.io$pedestal$app$render$push$DomMapper$get_parent_id$arity$2(this$,path);
} else
{var x__9709__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (io.pedestal.app.render.push.get_parent_id[goog.typeOf(x__9709__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (io.pedestal.app.render.push.get_parent_id["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-parent-id",this$);
}
}
})().call(null,this$,path);
}
});
io.pedestal.app.render.push.new_id_BANG_ = (function() {
var new_id_BANG_ = null;
var new_id_BANG___2 = (function (this$,path){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.io$pedestal$app$render$push$DomMapper$new_id_BANG_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.io$pedestal$app$render$push$DomMapper$new_id_BANG_$arity$2(this$,path);
} else
{var x__9709__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (io.pedestal.app.render.push.new_id_BANG_[goog.typeOf(x__9709__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (io.pedestal.app.render.push.new_id_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.new-id!",this$);
}
}
})().call(null,this$,path);
}
});
var new_id_BANG___3 = (function (this$,path,v){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.io$pedestal$app$render$push$DomMapper$new_id_BANG_$arity$3;
} else
{return and__3941__auto__;
}
})())
{return this$.io$pedestal$app$render$push$DomMapper$new_id_BANG_$arity$3(this$,path,v);
} else
{var x__9709__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (io.pedestal.app.render.push.new_id_BANG_[goog.typeOf(x__9709__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (io.pedestal.app.render.push.new_id_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.new-id!",this$);
}
}
})().call(null,this$,path,v);
}
});
new_id_BANG_ = function(this$,path,v){
switch(arguments.length){
case 2:
return new_id_BANG___2.call(this,this$,path);
case 3:
return new_id_BANG___3.call(this,this$,path,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
new_id_BANG_.cljs$core$IFn$_invoke$arity$2 = new_id_BANG___2;
new_id_BANG_.cljs$core$IFn$_invoke$arity$3 = new_id_BANG___3;
return new_id_BANG_;
})()
;
io.pedestal.app.render.push.delete_id_BANG_ = (function delete_id_BANG_(this$,path){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.io$pedestal$app$render$push$DomMapper$delete_id_BANG_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.io$pedestal$app$render$push$DomMapper$delete_id_BANG_$arity$2(this$,path);
} else
{var x__9709__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (io.pedestal.app.render.push.delete_id_BANG_[goog.typeOf(x__9709__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (io.pedestal.app.render.push.delete_id_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.delete-id!",this$);
}
}
})().call(null,this$,path);
}
});
io.pedestal.app.render.push.on_destroy_BANG_ = (function on_destroy_BANG_(this$,path,f){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.io$pedestal$app$render$push$DomMapper$on_destroy_BANG_$arity$3;
} else
{return and__3941__auto__;
}
})())
{return this$.io$pedestal$app$render$push$DomMapper$on_destroy_BANG_$arity$3(this$,path,f);
} else
{var x__9709__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (io.pedestal.app.render.push.on_destroy_BANG_[goog.typeOf(x__9709__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (io.pedestal.app.render.push.on_destroy_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.on-destroy!",this$);
}
}
})().call(null,this$,path,f);
}
});
io.pedestal.app.render.push.set_data_BANG_ = (function set_data_BANG_(this$,ks,d){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.io$pedestal$app$render$push$DomMapper$set_data_BANG_$arity$3;
} else
{return and__3941__auto__;
}
})())
{return this$.io$pedestal$app$render$push$DomMapper$set_data_BANG_$arity$3(this$,ks,d);
} else
{var x__9709__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (io.pedestal.app.render.push.set_data_BANG_[goog.typeOf(x__9709__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (io.pedestal.app.render.push.set_data_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.set-data!",this$);
}
}
})().call(null,this$,ks,d);
}
});
io.pedestal.app.render.push.drop_data_BANG_ = (function drop_data_BANG_(this$,ks){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.io$pedestal$app$render$push$DomMapper$drop_data_BANG_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.io$pedestal$app$render$push$DomMapper$drop_data_BANG_$arity$2(this$,ks);
} else
{var x__9709__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (io.pedestal.app.render.push.drop_data_BANG_[goog.typeOf(x__9709__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (io.pedestal.app.render.push.drop_data_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.drop-data!",this$);
}
}
})().call(null,this$,ks);
}
});
io.pedestal.app.render.push.get_data = (function get_data(this$,ks){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.io$pedestal$app$render$push$DomMapper$get_data$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.io$pedestal$app$render$push$DomMapper$get_data$arity$2(this$,ks);
} else
{var x__9709__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (io.pedestal.app.render.push.get_data[goog.typeOf(x__9709__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (io.pedestal.app.render.push.get_data["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-data",this$);
}
}
})().call(null,this$,ks);
}
});
/**
* Given a node in the environment which is going to be deleted, run all on-destroy
* functions in the tree.
*/
io.pedestal.app.render.push.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){
var nodes = cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){
return cljs.core.map.call(null,(function (p1__10578_SHARP_){
return cljs.core.get.call(null,n,p1__10578_SHARP_);
}),cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0:on-destroy",null,"\uFDD0:_data",null,"\uFDD0:id",null], true),cljs.core.keys.call(null,n)));
}),env);
var seq__10583 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,"\uFDD0:on-destroy",nodes));
var chunk__10584 = null;
var count__10585 = 0;
var i__10586 = 0;
while(true){
if((i__10586 < count__10585))
{var f = cljs.core._nth.call(null,chunk__10584,i__10586);
f.call(null);
{
var G__10587 = seq__10583;
var G__10588 = chunk__10584;
var G__10589 = count__10585;
var G__10590 = (i__10586 + 1);
seq__10583 = G__10587;
chunk__10584 = G__10588;
count__10585 = G__10589;
i__10586 = G__10590;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10583);
if(temp__4092__auto__)
{var seq__10583__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10583__$1))
{var c__9840__auto__ = cljs.core.chunk_first.call(null,seq__10583__$1);
{
var G__10591 = cljs.core.chunk_rest.call(null,seq__10583__$1);
var G__10592 = c__9840__auto__;
var G__10593 = cljs.core.count.call(null,c__9840__auto__);
var G__10594 = 0;
seq__10583 = G__10591;
chunk__10584 = G__10592;
count__10585 = G__10593;
i__10586 = G__10594;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__10583__$1);
f.call(null);
{
var G__10595 = cljs.core.next.call(null,seq__10583__$1);
var G__10596 = null;
var G__10597 = 0;
var G__10598 = 0;
seq__10583 = G__10595;
chunk__10584 = G__10596;
count__10585 = G__10597;
i__10586 = G__10598;
continue;
}
}
} else
{return null;
}
}
break;
}
});
goog.provide('io.pedestal.app.render.push.DomRenderer');

/**
* @constructor
* @param {*} env
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
io.pedestal.app.render.push.DomRenderer = (function (env,__meta,__extmap){
this.env = env;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
io.pedestal.app.render.push.DomRenderer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9663__auto__){
var self__ = this;
var h__9535__auto__ = self__.__hash;
if(!((h__9535__auto__ == null)))
{return h__9535__auto__;
} else
{var h__9535__auto____$1 = cljs.core.hash_imap.call(null,this__9663__auto__);
self__.__hash = h__9535__auto____$1;
return h__9535__auto____$1;
}
});
io.pedestal.app.render.push.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9668__auto__,k__9669__auto__){
var self__ = this;
return this__9668__auto__.cljs$core$ILookup$_lookup$arity$3(this__9668__auto__,k__9669__auto__,null);
});
io.pedestal.app.render.push.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9670__auto__,k10600,else__9671__auto__){
var self__ = this;
if((k10600 === "\uFDD0:env"))
{return self__.env;
} else
{if("\uFDD0:else")
{return cljs.core.get.call(null,self__.__extmap,k10600,else__9671__auto__);
} else
{return null;
}
}
});
io.pedestal.app.render.push.DomRenderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9675__auto__,k__9676__auto__,G__10599){
var self__ = this;
var pred__10602 = cljs.core.identical_QMARK_;
var expr__10603 = k__9676__auto__;
if(pred__10602.call(null,"\uFDD0:env",expr__10603))
{return (new io.pedestal.app.render.push.DomRenderer(G__10599,self__.__meta,self__.__extmap,null));
} else
{return (new io.pedestal.app.render.push.DomRenderer(self__.env,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9676__auto__,G__10599),null));
}
});
io.pedestal.app.render.push.DomRenderer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9682__auto__,writer__9683__auto__,opts__9684__auto__){
var self__ = this;
var pr_pair__9685__auto__ = (function (keyval__9686__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9683__auto__,cljs.core.pr_writer,""," ","",opts__9684__auto__,keyval__9686__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__9683__auto__,pr_pair__9685__auto__,"#io.pedestal.app.render.push.DomRenderer{",", ","}",opts__9684__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0:env",self__.env)], true),self__.__extmap));
});
io.pedestal.app.render.push.DomRenderer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9673__auto__,entry__9674__auto__){
var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry__9674__auto__))
{return this__9673__auto__.cljs$core$IAssociative$_assoc$arity$3(this__9673__auto__,cljs.core._nth.call(null,entry__9674__auto__,0),cljs.core._nth.call(null,entry__9674__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__9673__auto__,entry__9674__auto__);
}
});
io.pedestal.app.render.push.DomRenderer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9680__auto__){
var self__ = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0:env",self__.env)], true),self__.__extmap));
});
io.pedestal.app.render.push.DomRenderer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9672__auto__){
var self__ = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});
io.pedestal.app.render.push.DomRenderer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__9664__auto__,other__9665__auto__){
var self__ = this;
if(cljs.core.truth_((function (){var and__3941__auto__ = other__9665__auto__;
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (this__9664__auto__.constructor === other__9665__auto__.constructor);
if(and__3941__auto____$1)
{return cljs.core.equiv_map.call(null,this__9664__auto__,other__9665__auto__);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
io.pedestal.app.render.push.DomRenderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9667__auto__,G__10599){
var self__ = this;
return (new io.pedestal.app.render.push.DomRenderer(self__.env,G__10599,self__.__extmap,self__.__hash));
});
io.pedestal.app.render.push.DomRenderer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9666__auto__){
var self__ = this;
return self__.__meta;
});
io.pedestal.app.render.push.DomRenderer.prototype.io$pedestal$app$render$push$DomMapper$ = true;
io.pedestal.app.render.push.DomRenderer.prototype.io$pedestal$app$render$push$DomMapper$get_id$arity$2 = (function (this$,path){
var self__ = this;
if(cljs.core.seq.call(null,path))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.env),cljs.core.conj.call(null,path,"\uFDD0:id"));
} else
{return (new cljs.core.Keyword("\uFDD0:id")).call(null,cljs.core.deref.call(null,self__.env));
}
});
io.pedestal.app.render.push.DomRenderer.prototype.io$pedestal$app$render$push$DomMapper$get_parent_id$arity$2 = (function (this$,path){
var self__ = this;
if(cljs.core.seq.call(null,path))
{return this$.io$pedestal$app$render$push$DomMapper$get_id$arity$2(this$,cljs.core.vec.call(null,cljs.core.butlast.call(null,path)));
} else
{return null;
}
});
io.pedestal.app.render.push.DomRenderer.prototype.io$pedestal$app$render$push$DomMapper$new_id_BANG_$arity$2 = (function (this$,path){
var self__ = this;
return this$.io$pedestal$app$render$push$DomMapper$new_id_BANG_$arity$3(this$,path,cljs.core.gensym.call(null));
});
io.pedestal.app.render.push.DomRenderer.prototype.io$pedestal$app$render$push$DomMapper$new_id_BANG_$arity$3 = (function (this$,path,v){
var self__ = this;
cljs.core.swap_BANG_.call(null,self__.env,cljs.core.assoc_in,cljs.core.conj.call(null,path,"\uFDD0:id"),v);
return v;
});
io.pedestal.app.render.push.DomRenderer.prototype.io$pedestal$app$render$push$DomMapper$delete_id_BANG_$arity$2 = (function (this$,path){
var self__ = this;
io.pedestal.app.render.push.run_on_destroy_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.env),path));
return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.assoc_in,path,null);
});
io.pedestal.app.render.push.DomRenderer.prototype.io$pedestal$app$render$push$DomMapper$on_destroy_BANG_$arity$3 = (function (this$,path,f){
var self__ = this;
return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.update_in,cljs.core.conj.call(null,path,"\uFDD0:on-destroy"),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),f);
});
io.pedestal.app.render.push.DomRenderer.prototype.io$pedestal$app$render$push$DomMapper$set_data_BANG_$arity$3 = (function (this$,ks,d){
var self__ = this;
return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.assoc_in,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:_data"], true),ks),d);
});
io.pedestal.app.render.push.DomRenderer.prototype.io$pedestal$app$render$push$DomMapper$drop_data_BANG_$arity$2 = (function (this$,ks){
var self__ = this;
return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.update_in,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:_data"], true),cljs.core.butlast.call(null,ks)),cljs.core.dissoc,cljs.core.last.call(null,ks));
});
io.pedestal.app.render.push.DomRenderer.prototype.io$pedestal$app$render$push$DomMapper$get_data$arity$2 = (function (this$,ks){
var self__ = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.env),cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:_data"], true),ks));
});
io.pedestal.app.render.push.DomRenderer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9677__auto__,k__9678__auto__){
var self__ = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0:env",null], true),k__9678__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9677__auto__),self__.__meta),k__9678__auto__);
} else
{return (new io.pedestal.app.render.push.DomRenderer(self__.env,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9678__auto__)),null));
}
});
io.pedestal.app.render.push.DomRenderer.cljs$lang$type = true;
io.pedestal.app.render.push.DomRenderer.cljs$lang$ctorPrSeq = (function (this__9702__auto__){
return cljs.core.list.call(null,"io.pedestal.app.render.push/DomRenderer");
});
io.pedestal.app.render.push.DomRenderer.cljs$lang$ctorPrWriter = (function (this__9702__auto__,writer__9703__auto__){
return cljs.core._write.call(null,writer__9703__auto__,"io.pedestal.app.render.push/DomRenderer");
});
io.pedestal.app.render.push.__GT_DomRenderer = (function __GT_DomRenderer(env){
return (new io.pedestal.app.render.push.DomRenderer(env));
});
io.pedestal.app.render.push.map__GT_DomRenderer = (function map__GT_DomRenderer(G__10601){
return (new io.pedestal.app.render.push.DomRenderer((new cljs.core.Keyword("\uFDD0:env")).call(null,G__10601),null,cljs.core.dissoc.call(null,G__10601,"\uFDD0:env")));
});
io.pedestal.app.render.push.renderer = (function() {
var renderer = null;
var renderer__2 = (function (root_id,handlers){
return renderer.call(null,root_id,handlers,cljs.core.identity);
});
var renderer__3 = (function (root_id,handlers,log_fn){
var handlers__$1 = ((cljs.core.vector_QMARK_.call(null,handlers))?io.pedestal.app.render.push.add_handlers.call(null,handlers):handlers);
var renderer__$1 = io.pedestal.app.render.push.__GT_DomRenderer.call(null,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:id",root_id], true)));
return (function (deltas,input_queue){
log_fn.call(null,deltas);
var seq__10611 = cljs.core.seq.call(null,deltas);
var chunk__10612 = null;
var count__10613 = 0;
var i__10614 = 0;
while(true){
if((i__10614 < count__10613))
{var d = cljs.core._nth.call(null,chunk__10612,i__10614);
var vec__10615_10617 = d;
var op_10618 = cljs.core.nth.call(null,vec__10615_10617,0,null);
var path_10619 = cljs.core.nth.call(null,vec__10615_10617,1,null);
var handler_10620 = io.pedestal.app.render.push.find_handler.call(null,handlers__$1,op_10618,path_10619);
if(cljs.core.truth_(handler_10620))
{handler_10620.call(null,renderer__$1,d,input_queue);
} else
{}
{
var G__10621 = seq__10611;
var G__10622 = chunk__10612;
var G__10623 = count__10613;
var G__10624 = (i__10614 + 1);
seq__10611 = G__10621;
chunk__10612 = G__10622;
count__10613 = G__10623;
i__10614 = G__10624;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10611);
if(temp__4092__auto__)
{var seq__10611__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10611__$1))
{var c__9840__auto__ = cljs.core.chunk_first.call(null,seq__10611__$1);
{
var G__10625 = cljs.core.chunk_rest.call(null,seq__10611__$1);
var G__10626 = c__9840__auto__;
var G__10627 = cljs.core.count.call(null,c__9840__auto__);
var G__10628 = 0;
seq__10611 = G__10625;
chunk__10612 = G__10626;
count__10613 = G__10627;
i__10614 = G__10628;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__10611__$1);
var vec__10616_10629 = d;
var op_10630 = cljs.core.nth.call(null,vec__10616_10629,0,null);
var path_10631 = cljs.core.nth.call(null,vec__10616_10629,1,null);
var handler_10632 = io.pedestal.app.render.push.find_handler.call(null,handlers__$1,op_10630,path_10631);
if(cljs.core.truth_(handler_10632))
{handler_10632.call(null,renderer__$1,d,input_queue);
} else
{}
{
var G__10633 = cljs.core.next.call(null,seq__10611__$1);
var G__10634 = null;
var G__10635 = 0;
var G__10636 = 0;
seq__10611 = G__10633;
chunk__10612 = G__10634;
count__10613 = G__10635;
i__10614 = G__10636;
continue;
}
}
} else
{return null;
}
}
break;
}
});
});
renderer = function(root_id,handlers,log_fn){
switch(arguments.length){
case 2:
return renderer__2.call(this,root_id,handlers);
case 3:
return renderer__3.call(this,root_id,handlers,log_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
renderer.cljs$core$IFn$_invoke$arity$2 = renderer__2;
renderer.cljs$core$IFn$_invoke$arity$3 = renderer__3;
return renderer;
})()
;
/**
* Return a queue for processing rendering deltas. This queue will
* receive one delta at a time. For each delta placed on the queue, find
* and then apply a handler to that delta. If no handler is found, the
* delta will be removed from the queue and no other processing will
* take place.
*/
io.pedestal.app.render.push.push_render_queue = (function push_render_queue(root_id,handlers,input_queue){
var renderer = io.pedestal.app.render.push.__GT_DomRenderer.call(null,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:id",root_id], true)));
var handlers__$1 = ((cljs.core.vector_QMARK_.call(null,handlers))?io.pedestal.app.render.push.add_handlers.call(null,handlers):handlers);
var render_queue = io.pedestal.app.queue.queue.call(null,"\uFDD0:render-queue");
var consume_render_queue = (function consume_render_queue(){
return io.pedestal.app.protocols.take_message.call(null,render_queue,(function (message){
var vec__10640_10641 = message;
var op_10642 = cljs.core.nth.call(null,vec__10640_10641,0,null);
var path_10643 = cljs.core.nth.call(null,vec__10640_10641,1,null);
var handler_10644 = io.pedestal.app.render.push.find_handler.call(null,handlers__$1,op_10642,path_10643);
if(cljs.core.truth_(handler_10644))
{handler_10644.call(null,renderer,message,input_queue);
} else
{}
return consume_render_queue.call(null);
}));
});
consume_render_queue.call(null);
return render_queue;
});
