goog.provide('io.pedestal.app.dataflow');
goog.require('cljs.core');
goog.require('io.pedestal.app.util.platform');
goog.require('io.pedestal.app.data.tracking_map');
/**
* Return true if the two elements match.
*/
io.pedestal.app.dataflow.matching_path_element_QMARK_ = (function matching_path_element_QMARK_(a,b){
var or__3943__auto__ = cljs.core._EQ_.call(null,a,b);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = cljs.core._EQ_.call(null,a,"\uFDD0:*");
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return cljs.core._EQ_.call(null,b,"\uFDD0:*");
}
}
});
/**
* Return true if the two paths match.
*/
io.pedestal.app.dataflow.matching_path_QMARK_ = (function matching_path_QMARK_(path_a,path_b){
var and__3941__auto__ = cljs.core._EQ_.call(null,cljs.core.count.call(null,path_a),cljs.core.count.call(null,path_b));
if(and__3941__auto__)
{return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (a,b){
return io.pedestal.app.dataflow.matching_path_element_QMARK_.call(null,a,b);
}),path_a,path_b));
} else
{return and__3941__auto__;
}
});
/**
* Return true if one path could be the parent of the other.
*/
io.pedestal.app.dataflow.descendant_QMARK_ = (function descendant_QMARK_(path_a,path_b){
var vec__10270 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?cljs.core.PersistentVector.fromArray([path_a,path_b], true):cljs.core.PersistentVector.fromArray([path_b,path_a], true));
var small = cljs.core.nth.call(null,vec__10270,0,null);
var large = cljs.core.nth.call(null,vec__10270,1,null);
return io.pedestal.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.take.call(null,cljs.core.count.call(null,small),large));
});
/**
* Returns a sequence of [path value] tuples
*/
io.pedestal.app.dataflow.get_path = (function() {
var get_path = null;
var get_path__2 = (function (data,path){
return get_path.call(null,data,cljs.core.PersistentVector.EMPTY,path);
});
var get_path__3 = (function (data,context,p__10272){
var vec__10274 = p__10272;
var x = cljs.core.nth.call(null,vec__10274,0,null);
var xs = cljs.core.nthnext.call(null,vec__10274,1);
if(cljs.core.truth_((function (){var and__3941__auto__ = x;
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.not_EQ_.call(null,data,"\uFDD0:io.pedestal.app.dataflow/nokey");
} else
{return and__3941__auto__;
}
})()))
{if(cljs.core._EQ_.call(null,x,"\uFDD0:*"))
{return cljs.core.mapcat.call(null,(function (p1__10271_SHARP_){
return get_path.call(null,cljs.core.get.call(null,data,p1__10271_SHARP_),cljs.core.conj.call(null,context,p1__10271_SHARP_),xs);
}),cljs.core.keys.call(null,data));
} else
{return get_path.call(null,cljs.core.get.call(null,data,x,"\uFDD0:io.pedestal.app.dataflow/nokey"),cljs.core.conj.call(null,context,x),xs);
}
} else
{return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([context,data], true)], true);
}
});
get_path = function(data,context,p__10272){
switch(arguments.length){
case 2:
return get_path__2.call(this,data,context);
case 3:
return get_path__3.call(this,data,context,p__10272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_path.cljs$core$IFn$_invoke$arity$2 = get_path__2;
get_path.cljs$core$IFn$_invoke$arity$3 = get_path__3;
return get_path;
})()
;
var rekey = (function rekey(k,path,arg_names){
if(cljs.core.truth_(arg_names))
{var new_key = cljs.core.get.call(null,arg_names,path);
if(cljs.core.keyword_QMARK_.call(null,new_key))
{return new_key;
} else
{return new_key.call(null,k);
}
} else
{return k;
}
});
var value_types = (function value_types(arg_names){
if(cljs.core.truth_(arg_names))
{return cljs.core.reduce.call(null,(function (a,p__10277){
var vec__10278 = p__10277;
var k = cljs.core.nth.call(null,vec__10278,0,null);
var v = cljs.core.nth.call(null,vec__10278,1,null);
if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),"\uFDD0:*"))
{return cljs.core.assoc.call(null,a,v,"\uFDD0:seq");
} else
{if(cljs.core.contains_QMARK_.call(null,a,v))
{return cljs.core.assoc.call(null,a,v,"\uFDD0:seq");
} else
{if((cljs.core.get.call(null,a,v) == null))
{return cljs.core.assoc.call(null,a,v,"\uFDD0:single");
} else
{if("\uFDD0:else")
{return a;
} else
{return null;
}
}
}
}
}),cljs.core.PersistentArrayMap.EMPTY,arg_names);
} else
{return cljs.core.constantly.call(null,"\uFDD0:single");
}
});
io.pedestal.app.dataflow.input_map = (function() {
var input_map = null;
var input_map__1 = (function (inputs){
return input_map.call(null,inputs,null);
});
var input_map__2 = (function (p__10279,arg_names){
var map__10297 = p__10279;
var map__10297__$1 = ((cljs.core.seq_QMARK_.call(null,map__10297))?cljs.core.apply.call(null,cljs.core.hash_map,map__10297):map__10297);
var input_paths = cljs.core.get.call(null,map__10297__$1,"\uFDD0:input-paths");
var new_model = cljs.core.get.call(null,map__10297__$1,"\uFDD0:new-model");
var v_type = value_types.call(null,arg_names);
return cljs.core.reduce.call(null,(function (a,p__10298){
var vec__10299 = p__10298;
var k = cljs.core.nth.call(null,vec__10299,0,null);
var v = cljs.core.nth.call(null,vec__10299,1,null);
if(cljs.core._EQ_.call(null,v_type.call(null,k),"\uFDD0:seq"))
{return cljs.core.update_in.call(null,a,cljs.core.PersistentVector.fromArray([k], true),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),v);
} else
{return cljs.core.assoc.call(null,a,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9809__auto__ = (function iter__10300(s__10301){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10301__$1 = s__10301;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10301__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var path = cljs.core.first.call(null,xs__4579__auto__);
var iterys__9805__auto__ = ((function (s__10301__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__10302(s__10303){
return (new cljs.core.LazySeq(null,false,((function (s__10301__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){
var s__10303__$1 = s__10303;
while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10303__$1);
if(temp__4092__auto____$1)
{var s__10303__$2 = temp__4092__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10303__$2))
{var c__9807__auto__ = cljs.core.chunk_first.call(null,s__10303__$2);
var size__9808__auto__ = cljs.core.count.call(null,c__9807__auto__);
var b__10305 = cljs.core.chunk_buffer.call(null,size__9808__auto__);
if((function (){var i__10304 = 0;
while(true){
if((i__10304 < size__9808__auto__))
{var vec__10312 = cljs.core._nth.call(null,c__9807__auto__,i__10304);
var k = cljs.core.nth.call(null,vec__10312,0,null);
var v = cljs.core.nth.call(null,vec__10312,1,null);
if(cljs.core.not_EQ_.call(null,v,"\uFDD0:io.pedestal.app.dataflow/nokey"))
{cljs.core.chunk_append.call(null,b__10305,cljs.core.PersistentVector.fromArray([rekey.call(null,k,path,arg_names),v], true));
{
var G__10314 = (i__10304 + 1);
i__10304 = G__10314;
continue;
}
} else
{{
var G__10315 = (i__10304 + 1);
i__10304 = G__10315;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10305),iter__10302.call(null,cljs.core.chunk_rest.call(null,s__10303__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10305),null);
}
} else
{var vec__10313 = cljs.core.first.call(null,s__10303__$2);
var k = cljs.core.nth.call(null,vec__10313,0,null);
var v = cljs.core.nth.call(null,vec__10313,1,null);
if(cljs.core.not_EQ_.call(null,v,"\uFDD0:io.pedestal.app.dataflow/nokey"))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([rekey.call(null,k,path,arg_names),v], true),iter__10302.call(null,cljs.core.rest.call(null,s__10303__$2)));
} else
{{
var G__10316 = cljs.core.rest.call(null,s__10303__$2);
s__10303__$1 = G__10316;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__10301__$1,path,xs__4579__auto__,temp__4092__auto__))
,null));
});})(s__10301__$1,path,xs__4579__auto__,temp__4092__auto__))
;
var fs__9806__auto__ = cljs.core.seq.call(null,iterys__9805__auto__.call(null,io.pedestal.app.dataflow.get_path.call(null,new_model,path)));
if(fs__9806__auto__)
{return cljs.core.concat.call(null,fs__9806__auto__,iter__10300.call(null,cljs.core.rest.call(null,s__10301__$1)));
} else
{{
var G__10317 = cljs.core.rest.call(null,s__10301__$1);
s__10301__$1 = G__10317;
continue;
}
}
} else
{return null;
}
break;
}
}),null));
});
return iter__9809__auto__.call(null,input_paths);
})());
});
input_map = function(p__10279,arg_names){
switch(arguments.length){
case 1:
return input_map__1.call(this,p__10279);
case 2:
return input_map__2.call(this,p__10279,arg_names);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
input_map.cljs$core$IFn$_invoke$arity$1 = input_map__1;
input_map.cljs$core$IFn$_invoke$arity$2 = input_map__2;
return input_map;
})()
;
io.pedestal.app.dataflow.input_vals = (function input_vals(inputs){
return cljs.core.vals.call(null,io.pedestal.app.dataflow.input_map.call(null,inputs));
});
io.pedestal.app.dataflow.single_val = (function single_val(inputs){
var m = io.pedestal.app.dataflow.input_map.call(null,inputs);
if((1 >= cljs.core.count.call(null,m)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("input is expected to have 0 or 1 values"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,">=",">=",-1640529544,null),1,cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"m","m",-1640531418,null)))))].join('')));
}
return cljs.core.first.call(null,cljs.core.vals.call(null,m));
});
io.pedestal.app.dataflow.change_map = (function change_map(inputs,model_key,change_key){
var vec__10333 = cljs.core.juxt.call(null,model_key,change_key).call(null,inputs);
var model = cljs.core.nth.call(null,vec__10333,0,null);
var change_paths = cljs.core.nth.call(null,vec__10333,1,null);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9809__auto__ = (function iter__10334(s__10335){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10335__$1 = s__10335;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10335__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var path = cljs.core.first.call(null,xs__4579__auto__);
var iterys__9805__auto__ = ((function (s__10335__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__10336(s__10337){
return (new cljs.core.LazySeq(null,false,((function (s__10335__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){
var s__10337__$1 = s__10337;
while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10337__$1);
if(temp__4092__auto____$1)
{var s__10337__$2 = temp__4092__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10337__$2))
{var c__9807__auto__ = cljs.core.chunk_first.call(null,s__10337__$2);
var size__9808__auto__ = cljs.core.count.call(null,c__9807__auto__);
var b__10339 = cljs.core.chunk_buffer.call(null,size__9808__auto__);
if((function (){var i__10338 = 0;
while(true){
if((i__10338 < size__9808__auto__))
{var vec__10346 = cljs.core._nth.call(null,c__9807__auto__,i__10338);
var k = cljs.core.nth.call(null,vec__10346,0,null);
var v = cljs.core.nth.call(null,vec__10346,1,null);
if(cljs.core.not_EQ_.call(null,v,"\uFDD0:io.pedestal.app.dataflow/nokey"))
{cljs.core.chunk_append.call(null,b__10339,cljs.core.PersistentVector.fromArray([k,v], true));
{
var G__10348 = (i__10338 + 1);
i__10338 = G__10348;
continue;
}
} else
{{
var G__10349 = (i__10338 + 1);
i__10338 = G__10349;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10339),iter__10336.call(null,cljs.core.chunk_rest.call(null,s__10337__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10339),null);
}
} else
{var vec__10347 = cljs.core.first.call(null,s__10337__$2);
var k = cljs.core.nth.call(null,vec__10347,0,null);
var v = cljs.core.nth.call(null,vec__10347,1,null);
if(cljs.core.not_EQ_.call(null,v,"\uFDD0:io.pedestal.app.dataflow/nokey"))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),iter__10336.call(null,cljs.core.rest.call(null,s__10337__$2)));
} else
{{
var G__10350 = cljs.core.rest.call(null,s__10337__$2);
s__10337__$1 = G__10350;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__10335__$1,path,xs__4579__auto__,temp__4092__auto__))
,null));
});})(s__10335__$1,path,xs__4579__auto__,temp__4092__auto__))
;
var fs__9806__auto__ = cljs.core.seq.call(null,iterys__9805__auto__.call(null,io.pedestal.app.dataflow.get_path.call(null,model,path)));
if(fs__9806__auto__)
{return cljs.core.concat.call(null,fs__9806__auto__,iter__10334.call(null,cljs.core.rest.call(null,s__10335__$1)));
} else
{{
var G__10351 = cljs.core.rest.call(null,s__10335__$1);
s__10335__$1 = G__10351;
continue;
}
}
} else
{return null;
}
break;
}
}),null));
});
return iter__9809__auto__.call(null,change_paths);
})());
});
io.pedestal.app.dataflow.updated_map = (function updated_map(inputs){
return io.pedestal.app.dataflow.change_map.call(null,inputs,"\uFDD0:new-model","\uFDD0:updated");
});
io.pedestal.app.dataflow.added_map = (function added_map(inputs){
return io.pedestal.app.dataflow.change_map.call(null,inputs,"\uFDD0:new-model","\uFDD0:added");
});
io.pedestal.app.dataflow.removed_map = (function removed_map(inputs){
return io.pedestal.app.dataflow.change_map.call(null,inputs,"\uFDD0:old-model","\uFDD0:removed");
});
io.pedestal.app.dataflow.changed_inputs = (function changed_inputs(inputs,f){
var input_m = io.pedestal.app.dataflow.input_map.call(null,inputs);
var changed = cljs.core.keys.call(null,f.call(null,inputs));
return cljs.core.reduce.call(null,(function (a,p__10355){
var vec__10356 = p__10355;
var k = cljs.core.nth.call(null,vec__10356,0,null);
var v = cljs.core.nth.call(null,vec__10356,1,null);
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10352_SHARP_){
return io.pedestal.app.dataflow.descendant_QMARK_.call(null,k,p1__10352_SHARP_);
}),changed)))
{return cljs.core.assoc.call(null,a,k,v);
} else
{return a;
}
}),cljs.core.PersistentArrayMap.EMPTY,input_m);
});
io.pedestal.app.dataflow.added_inputs = (function added_inputs(inputs){
return io.pedestal.app.dataflow.changed_inputs.call(null,inputs,io.pedestal.app.dataflow.added_map);
});
io.pedestal.app.dataflow.updated_inputs = (function updated_inputs(inputs){
return io.pedestal.app.dataflow.changed_inputs.call(null,inputs,io.pedestal.app.dataflow.updated_map);
});
io.pedestal.app.dataflow.old_and_new = (function old_and_new(inputs,path){
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:old",cljs.core.get_in.call(null,inputs,cljs.core.into.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:old-model"], true),path)),"\uFDD0:new",cljs.core.get_in.call(null,inputs,cljs.core.into.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:new-model"], true),path))], true);
});
var actual_input_paths = (function actual_input_paths(p__10358){
var map__10374 = p__10358;
var map__10374__$1 = ((cljs.core.seq_QMARK_.call(null,map__10374))?cljs.core.apply.call(null,cljs.core.hash_map,map__10374):map__10374);
var input_paths = cljs.core.get.call(null,map__10374__$1,"\uFDD0:input-paths");
var old_model = cljs.core.get.call(null,map__10374__$1,"\uFDD0:old-model");
var iter__9809__auto__ = (function iter__10375(s__10376){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10376__$1 = s__10376;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10376__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var path = cljs.core.first.call(null,xs__4579__auto__);
var iterys__9805__auto__ = ((function (s__10376__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__10377(s__10378){
return (new cljs.core.LazySeq(null,false,((function (s__10376__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){
var s__10378__$1 = s__10378;
while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10378__$1);
if(temp__4092__auto____$1)
{var s__10378__$2 = temp__4092__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10378__$2))
{var c__9807__auto__ = cljs.core.chunk_first.call(null,s__10378__$2);
var size__9808__auto__ = cljs.core.count.call(null,c__9807__auto__);
var b__10380 = cljs.core.chunk_buffer.call(null,size__9808__auto__);
if((function (){var i__10379 = 0;
while(true){
if((i__10379 < size__9808__auto__))
{var vec__10387 = cljs.core._nth.call(null,c__9807__auto__,i__10379);
var k = cljs.core.nth.call(null,vec__10387,0,null);
var v = cljs.core.nth.call(null,vec__10387,1,null);
cljs.core.chunk_append.call(null,b__10380,k);
{
var G__10389 = (i__10379 + 1);
i__10379 = G__10389;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10380),iter__10377.call(null,cljs.core.chunk_rest.call(null,s__10378__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10380),null);
}
} else
{var vec__10388 = cljs.core.first.call(null,s__10378__$2);
var k = cljs.core.nth.call(null,vec__10388,0,null);
var v = cljs.core.nth.call(null,vec__10388,1,null);
return cljs.core.cons.call(null,k,iter__10377.call(null,cljs.core.rest.call(null,s__10378__$2)));
}
} else
{return null;
}
break;
}
});})(s__10376__$1,path,xs__4579__auto__,temp__4092__auto__))
,null));
});})(s__10376__$1,path,xs__4579__auto__,temp__4092__auto__))
;
var fs__9806__auto__ = cljs.core.seq.call(null,iterys__9805__auto__.call(null,io.pedestal.app.dataflow.get_path.call(null,old_model,path)));
if(fs__9806__auto__)
{return cljs.core.concat.call(null,fs__9806__auto__,iter__10375.call(null,cljs.core.rest.call(null,s__10376__$1)));
} else
{{
var G__10390 = cljs.core.rest.call(null,s__10376__$1);
s__10376__$1 = G__10390;
continue;
}
}
} else
{return null;
}
break;
}
}),null));
});
return iter__9809__auto__.call(null,input_paths);
});
var removed = (function removed(input_paths,changed_paths,f){
return cljs.core.reduce.call(null,(function (acc,path){
return cljs.core.reduce.call(null,(function (a,cp){
return f.call(null,a,path,cp);
}),acc,cljs.core.filter.call(null,(function (p1__10357_SHARP_){
return io.pedestal.app.dataflow.descendant_QMARK_.call(null,path,p1__10357_SHARP_);
}),changed_paths));
}),cljs.core.PersistentArrayMap.EMPTY,input_paths);
});
io.pedestal.app.dataflow.removed_inputs = (function removed_inputs(inputs){
var paths = actual_input_paths.call(null,inputs);
return cljs.core.into.call(null,removed.call(null,paths,cljs.core.keys.call(null,io.pedestal.app.dataflow.removed_map.call(null,inputs)),(function (m,path,changed_path){
if((cljs.core.count.call(null,changed_path) <= cljs.core.count.call(null,path)))
{return cljs.core.assoc.call(null,m,path,"\uFDD0:io.pedestal.app.dataflow/removed");
} else
{return cljs.core.assoc.call(null,m,path,cljs.core.get_in.call(null,inputs,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:new-model"], true),path)));
}
})),removed.call(null,paths,cljs.core.keys.call(null,io.pedestal.app.dataflow.updated_map.call(null,inputs)),(function (m,path,changed_path){
if((cljs.core.count.call(null,changed_path) < cljs.core.count.call(null,path)))
{var new_m = (new cljs.core.Keyword("\uFDD0:new-model")).call(null,inputs);
var parent = cljs.core.butlast.call(null,path);
var k = cljs.core.last.call(null,path);
var parent_m = ((cljs.core.seq.call(null,parent))?cljs.core.get_in.call(null,new_m,parent):new_m);
if(cljs.core.contains_QMARK_.call(null,parent_m,k))
{return cljs.core.assoc.call(null,m,path,cljs.core.get_in.call(null,inputs,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0:new-model"], true),path)));
} else
{return cljs.core.assoc.call(null,m,path,"\uFDD0:io.pedestal.app.dataflow/removed");
}
} else
{return m;
}
})));
});
/**
* Perform a topological sort of the provided graph.
*/
io.pedestal.app.dataflow.topo_visit = (function topo_visit(graph,node){
var n = cljs.core.get.call(null,graph,node);
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:visited")).call(null,n)))
{return graph;
} else
{var graph__$1 = cljs.core.assoc_in.call(null,graph,cljs.core.PersistentVector.fromArray([node,"\uFDD0:visited"], true),true);
var graph__$2 = cljs.core.reduce.call(null,topo_visit,graph__$1,(new cljs.core.Keyword("\uFDD0:deps")).call(null,n));
return cljs.core.assoc.call(null,graph__$2,"\uFDD0:io.pedestal.app.dataflow/order",cljs.core.conj.call(null,(new cljs.core.Keyword("\uFDD0:io.pedestal.app.dataflow/order")).call(null,graph__$2),node));
}
});
/**
* Return a sorted sequence of derive function configurations.
*/
io.pedestal.app.dataflow.sort_derive_fns = (function sort_derive_fns(derive_fns){
var derive_fns__$1 = cljs.core.map.call(null,(function (p1__10391_SHARP_){
return cljs.core.assoc.call(null,p1__10391_SHARP_,"\uFDD0:id",cljs.core.gensym.call(null));
}),derive_fns);
var index = cljs.core.reduce.call(null,((function (derive_fns__$1){
return (function (a,x){
return cljs.core.assoc.call(null,a,(new cljs.core.Keyword("\uFDD0:id")).call(null,x),x);
});})(derive_fns__$1))
,cljs.core.PersistentArrayMap.EMPTY,derive_fns__$1);
var deps = (function (){var iter__9809__auto__ = ((function (derive_fns__$1,index){
return (function iter__10404(s__10405){
return (new cljs.core.LazySeq(null,false,((function (derive_fns__$1,index){
return (function (){
var s__10405__$1 = s__10405;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10405__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var map__10411 = cljs.core.first.call(null,xs__4579__auto__);
var map__10411__$1 = ((cljs.core.seq_QMARK_.call(null,map__10411))?cljs.core.apply.call(null,cljs.core.hash_map,map__10411):map__10411);
var id = cljs.core.get.call(null,map__10411__$1,"\uFDD0:id");
var out = cljs.core.get.call(null,map__10411__$1,"\uFDD0:out");
var in$ = cljs.core.get.call(null,map__10411__$1,"\uFDD0:in");
var iterys__9805__auto__ = ((function (s__10405__$1,map__10411,map__10411__$1,id,out,in$,xs__4579__auto__,temp__4092__auto__,derive_fns__$1,index){
return (function iter__10406(s__10407){
return (new cljs.core.LazySeq(null,false,((function (s__10405__$1,map__10411,map__10411__$1,id,out,in$,xs__4579__auto__,temp__4092__auto__,derive_fns__$1,index){
return (function (){
var s__10407__$1 = s__10407;
while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10407__$1);
if(temp__4092__auto____$1)
{var s__10407__$2 = temp__4092__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10407__$2))
{var c__9807__auto__ = cljs.core.chunk_first.call(null,s__10407__$2);
var size__9808__auto__ = cljs.core.count.call(null,c__9807__auto__);
var b__10409 = cljs.core.chunk_buffer.call(null,size__9808__auto__);
if((function (){var i__10408 = 0;
while(true){
if((i__10408 < size__9808__auto__))
{var i = cljs.core._nth.call(null,c__9807__auto__,i__10408);
cljs.core.chunk_append.call(null,b__10409,cljs.core.PersistentVector.fromArray([id,i,out], true));
{
var G__10416 = (i__10408 + 1);
i__10408 = G__10416;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10409),iter__10406.call(null,cljs.core.chunk_rest.call(null,s__10407__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10409),null);
}
} else
{var i = cljs.core.first.call(null,s__10407__$2);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([id,i,out], true),iter__10406.call(null,cljs.core.rest.call(null,s__10407__$2)));
}
} else
{return null;
}
break;
}
});})(s__10405__$1,map__10411,map__10411__$1,id,out,in$,xs__4579__auto__,temp__4092__auto__,derive_fns__$1,index))
,null));
});})(s__10405__$1,map__10411,map__10411__$1,id,out,in$,xs__4579__auto__,temp__4092__auto__,derive_fns__$1,index))
;
var fs__9806__auto__ = cljs.core.seq.call(null,iterys__9805__auto__.call(null,in$));
if(fs__9806__auto__)
{return cljs.core.concat.call(null,fs__9806__auto__,iter__10404.call(null,cljs.core.rest.call(null,s__10405__$1)));
} else
{{
var G__10417 = cljs.core.rest.call(null,s__10405__$1);
s__10405__$1 = G__10417;
continue;
}
}
} else
{return null;
}
break;
}
});})(derive_fns__$1,index))
,null));
});})(derive_fns__$1,index))
;
return iter__9809__auto__.call(null,derive_fns__$1);
})();
var graph = cljs.core.reduce.call(null,((function (derive_fns__$1,index,deps){
return (function (a,p__10412){
var vec__10413 = p__10412;
var f = cljs.core.nth.call(null,vec__10413,0,null);
var _ = cljs.core.nth.call(null,vec__10413,1,null);
var out = cljs.core.nth.call(null,vec__10413,2,null);
return cljs.core.assoc.call(null,a,f,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:deps",cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (vec__10413,f,_,out,derive_fns__$1,index,deps){
return (function (p__10414){
var vec__10415 = p__10414;
var ___$1 = cljs.core.nth.call(null,vec__10415,0,null);
var in$ = cljs.core.nth.call(null,vec__10415,1,null);
return io.pedestal.app.dataflow.descendant_QMARK_.call(null,in$,out);
});})(vec__10413,f,_,out,derive_fns__$1,index,deps))
,deps)))], true));
});})(derive_fns__$1,index,deps))
,cljs.core.PersistentArrayMap.EMPTY,deps);
return cljs.core.reverse.call(null,cljs.core.reduce.call(null,(function (a,b){
return cljs.core.conj.call(null,a,cljs.core.dissoc.call(null,cljs.core.get.call(null,index,b),"\uFDD0:id"));
}),cljs.core.PersistentVector.EMPTY,(new cljs.core.Keyword("\uFDD0:io.pedestal.app.dataflow/order")).call(null,cljs.core.reduce.call(null,io.pedestal.app.dataflow.topo_visit,cljs.core.assoc.call(null,graph,"\uFDD0:io.pedestal.app.dataflow/order",cljs.core.PersistentVector.EMPTY),cljs.core.keys.call(null,graph)))));
});
/**
* Given a transform configuration vector, find the first transform
* function which matches the given message.
*/
io.pedestal.app.dataflow.find_message_transformer = (function find_message_transformer(transforms,out_path,key){
var out_path__$1 = io.pedestal.app.util.platform.vec_unless_seqable.call(null,out_path);
return (new cljs.core.Keyword("\uFDD0:fn")).call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__10421){
var map__10422 = p__10421;
var map__10422__$1 = ((cljs.core.seq_QMARK_.call(null,map__10422))?cljs.core.apply.call(null,cljs.core.hash_map,map__10422):map__10422);
var op = cljs.core.get.call(null,map__10422__$1,"\uFDD0:key");
var path = cljs.core.get.call(null,map__10422__$1,"\uFDD0:out");
var vec__10423 = ((cljs.core._EQ_.call(null,cljs.core.last.call(null,path),"\uFDD0:**"))?(function (){var c = cljs.core.count.call(null,path);
return cljs.core.PersistentVector.fromArray([cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,(c - 1),path)),"\uFDD0:*"),cljs.core.vec.call(null,cljs.core.take.call(null,c,out_path__$1))], true);
})():cljs.core.PersistentVector.fromArray([path,out_path__$1], true));
var path__$1 = cljs.core.nth.call(null,vec__10423,0,null);
var out_path__$2 = cljs.core.nth.call(null,vec__10423,1,null);
var and__3941__auto__ = io.pedestal.app.dataflow.matching_path_element_QMARK_.call(null,op,key);
if(cljs.core.truth_(and__3941__auto__))
{return io.pedestal.app.dataflow.matching_path_QMARK_.call(null,path__$1,out_path__$2);
} else
{return and__3941__auto__;
}
}),transforms)));
});
io.pedestal.app.dataflow.merge_changes = (function merge_changes(old_changes,new_changes){
return cljs.core.merge_with.call(null,cljs.core.into,old_changes,new_changes);
});
io.pedestal.app.dataflow.update_flow_state = (function update_flow_state(state,tracking_map){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0:new","\uFDD0:data-model"], true),cljs.core.deref.call(null,tracking_map)),cljs.core.PersistentVector.fromArray(["\uFDD0:change"], true),io.pedestal.app.dataflow.merge_changes,io.pedestal.app.data.tracking_map.changes.call(null,tracking_map));
});
/**
* @param {...*} var_args
*/
io.pedestal.app.dataflow.track_update_in = (function() { 
var track_update_in__delegate = function (data_model,out_path,f,args){
return cljs.core.apply.call(null,cljs.core.update_in,io.pedestal.app.data.tracking_map.tracking_map.call(null,data_model),out_path,f,args);
};
var track_update_in = function (data_model,out_path,f,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return track_update_in__delegate.call(this, data_model, out_path, f, args);
};
track_update_in.cljs$lang$maxFixedArity = 3;
track_update_in.cljs$lang$applyTo = (function (arglist__10424){
var data_model = cljs.core.first(arglist__10424);
arglist__10424 = cljs.core.next(arglist__10424);
var out_path = cljs.core.first(arglist__10424);
arglist__10424 = cljs.core.next(arglist__10424);
var f = cljs.core.first(arglist__10424);
var args = cljs.core.rest(arglist__10424);
return track_update_in__delegate(data_model, out_path, f, args);
});
track_update_in.cljs$core$IFn$_invoke$arity$variadic = track_update_in__delegate;
return track_update_in;
})()
;
/**
* @param {...*} var_args
*/
io.pedestal.app.dataflow.apply_in = (function() { 
var apply_in__delegate = function (state,out_path,f,args){
var data_model = cljs.core.get_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0:new","\uFDD0:data-model"], true));
var new_data_model = cljs.core.apply.call(null,io.pedestal.app.dataflow.track_update_in,data_model,out_path,f,args);
return io.pedestal.app.dataflow.update_flow_state.call(null,state,new_data_model);
};
var apply_in = function (state,out_path,f,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return apply_in__delegate.call(this, state, out_path, f, args);
};
apply_in.cljs$lang$maxFixedArity = 3;
apply_in.cljs$lang$applyTo = (function (arglist__10425){
var state = cljs.core.first(arglist__10425);
arglist__10425 = cljs.core.next(arglist__10425);
var out_path = cljs.core.first(arglist__10425);
arglist__10425 = cljs.core.next(arglist__10425);
var f = cljs.core.first(arglist__10425);
var args = cljs.core.rest(arglist__10425);
return apply_in__delegate(state, out_path, f, args);
});
apply_in.cljs$core$IFn$_invoke$arity$variadic = apply_in__delegate;
return apply_in;
})()
;
/**
* Find the first transform function that matches the message and
* execute it, returning the updated flow state.
*/
io.pedestal.app.dataflow.transform_phase = (function transform_phase(p__10426){
var map__10429 = p__10426;
var map__10429__$1 = ((cljs.core.seq_QMARK_.call(null,map__10429))?cljs.core.apply.call(null,cljs.core.hash_map,map__10429):map__10429);
var state = map__10429__$1;
var context = cljs.core.get.call(null,map__10429__$1,"\uFDD0:context");
var dataflow = cljs.core.get.call(null,map__10429__$1,"\uFDD0:dataflow");
var new$ = cljs.core.get.call(null,map__10429__$1,"\uFDD0:new");
var map__10430 = (new cljs.core.Keyword("\uFDD0:input-adapter")).call(null,dataflow).call(null,(new cljs.core.Keyword("\uFDD0:message")).call(null,context));
var map__10430__$1 = ((cljs.core.seq_QMARK_.call(null,map__10430))?cljs.core.apply.call(null,cljs.core.hash_map,map__10430):map__10430);
var out_path = cljs.core.get.call(null,map__10430__$1,"\uFDD0:out");
var key = cljs.core.get.call(null,map__10430__$1,"\uFDD0:key");
var transform_fn = io.pedestal.app.dataflow.find_message_transformer.call(null,(new cljs.core.Keyword("\uFDD0:transform")).call(null,dataflow),out_path,key);
if(cljs.core.truth_(transform_fn))
{return io.pedestal.app.dataflow.apply_in.call(null,state,out_path,transform_fn,(new cljs.core.Keyword("\uFDD0:message")).call(null,context));
} else
{return state;
}
});
/**
* The default propagator predicate. Return true if any of the changed
* paths are on the same path as the input path.
*/
io.pedestal.app.dataflow.input_change_propagator = (function input_change_propagator(state,changed_inputs,input_path){
return cljs.core.some.call(null,cljs.core.partial.call(null,io.pedestal.app.dataflow.descendant_QMARK_,input_path),changed_inputs);
});
/**
* Return true if a dependent function should be run based on the
* state of its input paths.
* 
* Custom propagator predicates can be provided by attaching
* :propagator metadata to any input path.
*/
io.pedestal.app.dataflow.propagate_QMARK_ = (function propagate_QMARK_(p__10431,input_paths){
var map__10433 = p__10431;
var map__10433__$1 = ((cljs.core.seq_QMARK_.call(null,map__10433))?cljs.core.apply.call(null,cljs.core.hash_map,map__10433):map__10433);
var state = map__10433__$1;
var change = cljs.core.get.call(null,map__10433__$1,"\uFDD0:change");
var changed_inputs = ((cljs.core.seq.call(null,change))?cljs.core.reduce.call(null,cljs.core.into,cljs.core.vals.call(null,change)):cljs.core.PersistentVector.EMPTY);
return cljs.core.some.call(null,(function (input_path){
var propagator_pred = (new cljs.core.Keyword("\uFDD0:propagator")).call(null,cljs.core.meta.call(null,input_path));
return propagator_pred.call(null,state,changed_inputs,input_path);
}),input_paths);
});
io.pedestal.app.dataflow.input_set = (function input_set(changes,f,input_paths){
return cljs.core.set.call(null,f.call(null,(function (x){
return cljs.core.some.call(null,cljs.core.partial.call(null,io.pedestal.app.dataflow.descendant_QMARK_,x),input_paths);
}),changes));
});
io.pedestal.app.dataflow.update_input_sets = (function update_input_sets(m,ks,f,input_paths){
return cljs.core.reduce.call(null,(function (a,k){
return cljs.core.update_in.call(null,a,cljs.core.PersistentVector.fromArray([k], true),io.pedestal.app.dataflow.input_set,f,input_paths);
}),m,ks);
});
io.pedestal.app.dataflow.flow_input = (function flow_input(context,state,input_paths,change){
return io.pedestal.app.dataflow.update_input_sets.call(null,cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,context,"\uFDD0:new-model",cljs.core.get_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0:new","\uFDD0:data-model"], true))),"\uFDD0:old-model",cljs.core.get_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0:old","\uFDD0:data-model"], true))),"\uFDD0:input-paths",input_paths),cljs.core.select_keys.call(null,change,cljs.core.PersistentVector.fromArray(["\uFDD0:added","\uFDD0:updated","\uFDD0:removed"], true))),cljs.core.PersistentVector.fromArray(["\uFDD0:added","\uFDD0:updated","\uFDD0:removed"], true),cljs.core.filter,input_paths);
});
io.pedestal.app.dataflow.dataflow_fn_args = (function dataflow_fn_args(inputs,args_key,arg_names){
var G__10435 = args_key;
if(cljs.core._EQ_.call(null,"\uFDD0:default",G__10435))
{return cljs.core.PersistentVector.fromArray([inputs], true);
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:single-val",G__10435))
{return cljs.core.PersistentVector.fromArray([io.pedestal.app.dataflow.single_val.call(null,inputs)], true);
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:map-seq",G__10435))
{return cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,io.pedestal.app.dataflow.input_map.call(null,inputs,arg_names)));
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:map",G__10435))
{return cljs.core.PersistentVector.fromArray([io.pedestal.app.dataflow.input_map.call(null,inputs,arg_names)], true);
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:vals",G__10435))
{return cljs.core.PersistentVector.fromArray([io.pedestal.app.dataflow.input_vals.call(null,inputs)], true);
} else
{if("\uFDD0:else")
{return cljs.core.PersistentVector.fromArray([inputs], true);
} else
{return null;
}
}
}
}
}
}
});
/**
* Execute each derive function in dependency order only if some input to the
* function has changed. Return an updated flow state.
*/
io.pedestal.app.dataflow.derive_phase = (function derive_phase(p__10436){
var map__10442 = p__10436;
var map__10442__$1 = ((cljs.core.seq_QMARK_.call(null,map__10442))?cljs.core.apply.call(null,cljs.core.hash_map,map__10442):map__10442);
var state = map__10442__$1;
var context = cljs.core.get.call(null,map__10442__$1,"\uFDD0:context");
var dataflow = cljs.core.get.call(null,map__10442__$1,"\uFDD0:dataflow");
var derives = (new cljs.core.Keyword("\uFDD0:derive")).call(null,dataflow);
return cljs.core.reduce.call(null,(function (p__10443,p__10444){
var map__10445 = p__10443;
var map__10445__$1 = ((cljs.core.seq_QMARK_.call(null,map__10445))?cljs.core.apply.call(null,cljs.core.hash_map,map__10445):map__10445);
var acc = map__10445__$1;
var change = cljs.core.get.call(null,map__10445__$1,"\uFDD0:change");
var map__10446 = p__10444;
var map__10446__$1 = ((cljs.core.seq_QMARK_.call(null,map__10446))?cljs.core.apply.call(null,cljs.core.hash_map,map__10446):map__10446);
var input_paths = cljs.core.get.call(null,map__10446__$1,"\uFDD0:in");
var derive_fn = cljs.core.get.call(null,map__10446__$1,"\uFDD0:fn");
var out_path = cljs.core.get.call(null,map__10446__$1,"\uFDD0:out");
var args = cljs.core.get.call(null,map__10446__$1,"\uFDD0:args");
var arg_names = cljs.core.get.call(null,map__10446__$1,"\uFDD0:arg-names");
if(cljs.core.truth_(io.pedestal.app.dataflow.propagate_QMARK_.call(null,acc,input_paths)))
{return cljs.core.apply.call(null,io.pedestal.app.dataflow.apply_in,acc,out_path,derive_fn,io.pedestal.app.dataflow.dataflow_fn_args.call(null,io.pedestal.app.dataflow.flow_input.call(null,context,acc,input_paths,change),args,arg_names));
} else
{return acc;
}
}),state,derives);
});
/**
* Execute each function. Return an updated flow state.
*/
io.pedestal.app.dataflow.output_phase = (function output_phase(p__10447,k){
var map__10453 = p__10447;
var map__10453__$1 = ((cljs.core.seq_QMARK_.call(null,map__10453))?cljs.core.apply.call(null,cljs.core.hash_map,map__10453):map__10453);
var state = map__10453__$1;
var context = cljs.core.get.call(null,map__10453__$1,"\uFDD0:context");
var dataflow = cljs.core.get.call(null,map__10453__$1,"\uFDD0:dataflow");
var fns = k.call(null,dataflow);
return cljs.core.reduce.call(null,(function (p__10454,p__10455){
var map__10456 = p__10454;
var map__10456__$1 = ((cljs.core.seq_QMARK_.call(null,map__10456))?cljs.core.apply.call(null,cljs.core.hash_map,map__10456):map__10456);
var acc = map__10456__$1;
var change = cljs.core.get.call(null,map__10456__$1,"\uFDD0:change");
var map__10457 = p__10455;
var map__10457__$1 = ((cljs.core.seq_QMARK_.call(null,map__10457))?cljs.core.apply.call(null,cljs.core.hash_map,map__10457):map__10457);
var f = cljs.core.get.call(null,map__10457__$1,"\uFDD0:fn");
var input_paths = cljs.core.get.call(null,map__10457__$1,"\uFDD0:in");
var args = cljs.core.get.call(null,map__10457__$1,"\uFDD0:args");
var arg_names = cljs.core.get.call(null,map__10457__$1,"\uFDD0:arg-names");
if(cljs.core.truth_(io.pedestal.app.dataflow.propagate_QMARK_.call(null,acc,input_paths)))
{return cljs.core.update_in.call(null,acc,cljs.core.PersistentVector.fromArray(["\uFDD0:new",k], true),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,f,io.pedestal.app.dataflow.dataflow_fn_args.call(null,io.pedestal.app.dataflow.flow_input.call(null,context,acc,input_paths,change),args,arg_names)));
} else
{return acc;
}
}),state,fns);
});
/**
* Execute each continue function. Return an updated flow state.
*/
io.pedestal.app.dataflow.continue_phase = (function continue_phase(state){
return io.pedestal.app.dataflow.output_phase.call(null,state,"\uFDD0:continue");
});
/**
* Execute each effect function. Return an updated flow state.
*/
io.pedestal.app.dataflow.effect_phase = (function effect_phase(state){
return io.pedestal.app.dataflow.output_phase.call(null,state,"\uFDD0:effect");
});
var remover = (function remover(change_set,input_paths){
return cljs.core.set.call(null,cljs.core.remove.call(null,(function (p1__10458_SHARP_){
return cljs.core.some.call(null,cljs.core.partial.call(null,io.pedestal.app.dataflow.matching_path_QMARK_,p1__10458_SHARP_),input_paths);
}),change_set));
});
io.pedestal.app.dataflow.remove_matching_changes = (function remove_matching_changes(change,input_paths){
return cljs.core.reduce.call(null,(function (a,k){
return cljs.core.update_in.call(null,a,cljs.core.PersistentVector.fromArray([k], true),remover,input_paths);
}),change,cljs.core.PersistentVector.fromArray(["\uFDD0:inspect","\uFDD0:added","\uFDD0:updated","\uFDD0:removed"], true));
});
io.pedestal.app.dataflow.emit_phase = (function emit_phase(p__10459){
var map__10465 = p__10459;
var map__10465__$1 = ((cljs.core.seq_QMARK_.call(null,map__10465))?cljs.core.apply.call(null,cljs.core.hash_map,map__10465):map__10465);
var state = map__10465__$1;
var change = cljs.core.get.call(null,map__10465__$1,"\uFDD0:change");
var context = cljs.core.get.call(null,map__10465__$1,"\uFDD0:context");
var dataflow = cljs.core.get.call(null,map__10465__$1,"\uFDD0:dataflow");
var emits = (new cljs.core.Keyword("\uFDD0:emit")).call(null,dataflow);
return cljs.core.dissoc.call(null,cljs.core.reduce.call(null,(function (p__10466,p__10467){
var map__10468 = p__10466;
var map__10468__$1 = ((cljs.core.seq_QMARK_.call(null,map__10468))?cljs.core.apply.call(null,cljs.core.hash_map,map__10468):map__10468);
var acc = map__10468__$1;
var processed_inputs = cljs.core.get.call(null,map__10468__$1,"\uFDD0:processed-inputs");
var remaining_change = cljs.core.get.call(null,map__10468__$1,"\uFDD0:remaining-change");
var change__$1 = cljs.core.get.call(null,map__10468__$1,"\uFDD0:change");
var map__10469 = p__10467;
var map__10469__$1 = ((cljs.core.seq_QMARK_.call(null,map__10469))?cljs.core.apply.call(null,cljs.core.hash_map,map__10469):map__10469);
var input_paths = cljs.core.get.call(null,map__10469__$1,"\uFDD0:in");
var emit_fn = cljs.core.get.call(null,map__10469__$1,"\uFDD0:fn");
var mode = cljs.core.get.call(null,map__10469__$1,"\uFDD0:mode");
var report_change = ((cljs.core._EQ_.call(null,mode,"\uFDD0:always"))?change__$1:remaining_change);
if(cljs.core.truth_(io.pedestal.app.dataflow.propagate_QMARK_.call(null,cljs.core.assoc.call(null,acc,"\uFDD0:change",report_change),input_paths)))
{return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,acc,cljs.core.PersistentVector.fromArray(["\uFDD0:remaining-change"], true),io.pedestal.app.dataflow.remove_matching_changes,input_paths),cljs.core.PersistentVector.fromArray(["\uFDD0:processed-inputs"], true),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),input_paths),cljs.core.PersistentVector.fromArray(["\uFDD0:new","\uFDD0:emit"], true),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),emit_fn.call(null,cljs.core.assoc.call(null,io.pedestal.app.dataflow.flow_input.call(null,context,acc,input_paths,report_change),"\uFDD0:mode",mode,"\uFDD0:processed-inputs",processed_inputs)));
} else
{return acc;
}
}),cljs.core.assoc.call(null,state,"\uFDD0:remaining-change",change),emits),"\uFDD0:remaining-change");
});
/**
* Given a dataflow, a state and a message, run the message through
* the dataflow and return the updated state. The dataflow will be
* run only once.
*/
io.pedestal.app.dataflow.flow_phases_step = (function flow_phases_step(state,dataflow,message){
var state__$1 = cljs.core.update_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0:new"], true),cljs.core.dissoc,"\uFDD0:continue");
return io.pedestal.app.dataflow.continue_phase.call(null,io.pedestal.app.dataflow.derive_phase.call(null,io.pedestal.app.dataflow.transform_phase.call(null,cljs.core.assoc_in.call(null,state__$1,cljs.core.PersistentVector.fromArray(["\uFDD0:context","\uFDD0:message"], true),message))));
});
io.pedestal.app.dataflow.run_flow_phases = (function run_flow_phases(state,dataflow,message){
var map__10474 = io.pedestal.app.dataflow.flow_phases_step.call(null,state,dataflow,message);
var map__10474__$1 = ((cljs.core.seq_QMARK_.call(null,map__10474))?cljs.core.apply.call(null,cljs.core.hash_map,map__10474):map__10474);
var result = map__10474__$1;
var map__10475 = cljs.core.get.call(null,map__10474__$1,"\uFDD0:new");
var map__10475__$1 = ((cljs.core.seq_QMARK_.call(null,map__10475))?cljs.core.apply.call(null,cljs.core.hash_map,map__10475):map__10475);
var continue$ = cljs.core.get.call(null,map__10475__$1,"\uFDD0:continue");
var input = cljs.core.filter.call(null,((function (map__10474,map__10474__$1,result,map__10475,map__10475__$1,continue$){
return (function (p1__10470_SHARP_){
return (new cljs.core.Keyword("\uFDD0:input")).call(null,cljs.core.meta.call(null,p1__10470_SHARP_));
});})(map__10474,map__10474__$1,result,map__10475,map__10475__$1,continue$))
,continue$);
var continue$__$1 = cljs.core.remove.call(null,((function (map__10474,map__10474__$1,result,map__10475,map__10475__$1,continue$,input){
return (function (p1__10471_SHARP_){
return (new cljs.core.Keyword("\uFDD0:input")).call(null,cljs.core.meta.call(null,p1__10471_SHARP_));
});})(map__10474,map__10474__$1,result,map__10475,map__10475__$1,continue$,input))
,continue$);
var new_state = ((cljs.core.empty_QMARK_.call(null,continue$__$1))?cljs.core.update_in.call(null,result,cljs.core.PersistentVector.fromArray(["\uFDD0:new"], true),cljs.core.dissoc,"\uFDD0:continue"):cljs.core.reduce.call(null,((function (map__10474,map__10474__$1,result,map__10475,map__10475__$1,continue$,input,continue$__$1){
return (function (a,c_message){
return run_flow_phases.call(null,cljs.core.assoc.call(null,a,"\uFDD0:old",(new cljs.core.Keyword("\uFDD0:new")).call(null,a)),dataflow,c_message);
});})(map__10474,map__10474__$1,result,map__10475,map__10475__$1,continue$,input,continue$__$1))
,result,continue$__$1));
if(cljs.core.empty_QMARK_.call(null,input))
{return new_state;
} else
{return cljs.core.update_in.call(null,new_state,cljs.core.PersistentVector.fromArray(["\uFDD0:new","\uFDD0:continue-inputs"], true),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),input);
}
});
io.pedestal.app.dataflow.run_all_phases = (function run_all_phases(model,dataflow,message){
var state = cljs.core.PersistentArrayMap.fromArray(["\uFDD0:old",model,"\uFDD0:new",model,"\uFDD0:change",cljs.core.PersistentArrayMap.EMPTY,"\uFDD0:dataflow",dataflow,"\uFDD0:context",cljs.core.PersistentArrayMap.EMPTY], true);
var new_state = io.pedestal.app.dataflow.run_flow_phases.call(null,state,dataflow,message);
return (new cljs.core.Keyword("\uFDD0:new")).call(null,io.pedestal.app.dataflow.emit_phase.call(null,io.pedestal.app.dataflow.effect_phase.call(null,cljs.core.assoc_in.call(null,new_state,cljs.core.PersistentVector.fromArray(["\uFDD0:context","\uFDD0:message"], true),message))));
});
io.pedestal.app.dataflow.add_default = (function add_default(v,d){
var or__3943__auto__ = v;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return d;
}
});
/**
* Add a propagator predicate to each input path returning a set of
* input paths.
* 
* The single argument version will add the default propagator
* predicate.
*/
io.pedestal.app.dataflow.with_propagator = (function() {
var with_propagator = null;
var with_propagator__1 = (function (ins){
return with_propagator.call(null,ins,io.pedestal.app.dataflow.input_change_propagator);
});
var with_propagator__2 = (function (ins,propagator){
return cljs.core.set.call(null,cljs.core.mapv.call(null,(function (i){
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:propagator")).call(null,cljs.core.meta.call(null,i))))
{return i;
} else
{return cljs.core.vary_meta.call(null,i,cljs.core.assoc,"\uFDD0:propagator",propagator);
}
}),ins));
});
with_propagator = function(ins,propagator){
switch(arguments.length){
case 1:
return with_propagator__1.call(this,ins);
case 2:
return with_propagator__2.call(this,ins,propagator);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
with_propagator.cljs$core$IFn$_invoke$arity$1 = with_propagator__1;
with_propagator.cljs$core$IFn$_invoke$arity$2 = with_propagator__2;
return with_propagator;
})()
;
io.pedestal.app.dataflow.transform_maps = (function transform_maps(transforms){
return cljs.core.mapv.call(null,(function (x){
if(cljs.core.vector_QMARK_.call(null,x))
{var vec__10477 = x;
var key = cljs.core.nth.call(null,vec__10477,0,null);
var out = cljs.core.nth.call(null,vec__10477,1,null);
var fn = cljs.core.nth.call(null,vec__10477,2,null);
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:key",key,"\uFDD0:out",out,"\uFDD0:fn",fn], true);
} else
{return x;
}
}),transforms);
});
io.pedestal.app.dataflow.add_arg_names = (function add_arg_names(p__10478){
var map__10480 = p__10478;
var map__10480__$1 = ((cljs.core.seq_QMARK_.call(null,map__10480))?cljs.core.apply.call(null,cljs.core.hash_map,map__10480):map__10480);
var m = map__10480__$1;
var in$ = cljs.core.get.call(null,map__10480__$1,"\uFDD0:in");
var arg_names = ((cljs.core.map_QMARK_.call(null,in$))?in$:null);
var in$__$1 = ((cljs.core.map_QMARK_.call(null,in$))?cljs.core.set.call(null,cljs.core.keys.call(null,in$)):in$);
return cljs.core.assoc.call(null,m,"\uFDD0:in",in$__$1,"\uFDD0:arg-names",arg_names);
});
io.pedestal.app.dataflow.dataflow_maps = (function dataflow_maps(coll,f){
return cljs.core.mapv.call(null,(function (x){
return cljs.core.update_in.call(null,io.pedestal.app.dataflow.add_arg_names.call(null,((cljs.core.vector_QMARK_.call(null,x))?f.call(null,x):x)),cljs.core.PersistentVector.fromArray(["\uFDD0:in"], true),io.pedestal.app.dataflow.with_propagator);
}),coll);
});
io.pedestal.app.dataflow.derive_maps = (function derive_maps(derives){
return io.pedestal.app.dataflow.dataflow_maps.call(null,derives,(function (p__10483){
var vec__10484 = p__10483;
var in$ = cljs.core.nth.call(null,vec__10484,0,null);
var out = cljs.core.nth.call(null,vec__10484,1,null);
var fn = cljs.core.nth.call(null,vec__10484,2,null);
var args = cljs.core.nth.call(null,vec__10484,3,null);
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:in",in$,"\uFDD0:out",out,"\uFDD0:fn",fn,"\uFDD0:args",args], true);
}));
});
io.pedestal.app.dataflow.output_maps = (function output_maps(outputs){
return io.pedestal.app.dataflow.dataflow_maps.call(null,outputs,(function (p__10487){
var vec__10488 = p__10487;
var in$ = cljs.core.nth.call(null,vec__10488,0,null);
var fn = cljs.core.nth.call(null,vec__10488,1,null);
var args = cljs.core.nth.call(null,vec__10488,2,null);
return cljs.core.PersistentArrayMap.fromArray(["\uFDD0:in",in$,"\uFDD0:fn",fn,"\uFDD0:args",args], true);
}));
});
/**
* Given a dataflow description map, return a dataflow engine. An example dataflow
* configuration is shown below:
* 
* {:transform [[:op [:output :path] transform-fn]]
* :effect    #{{:fn effect-fn :in #{[:input :path]}}}
* :derive    #{{:fn derive-fn :in #{[:input :path]} :out [:output :path]}}
* :continue  #{{:fn some-continue-fn :in #{[:input :path]}}}
* :emit      [[#{[:input :path]} emit-fn]]}
* 
*/
io.pedestal.app.dataflow.build = (function build(description){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,description,cljs.core.PersistentVector.fromArray(["\uFDD0:transform"], true),io.pedestal.app.dataflow.transform_maps),cljs.core.PersistentVector.fromArray(["\uFDD0:derive"], true),io.pedestal.app.dataflow.derive_maps),cljs.core.PersistentVector.fromArray(["\uFDD0:continue"], true),cljs.core.comp.call(null,cljs.core.set,io.pedestal.app.dataflow.output_maps)),cljs.core.PersistentVector.fromArray(["\uFDD0:effect"], true),cljs.core.comp.call(null,cljs.core.set,io.pedestal.app.dataflow.output_maps)),cljs.core.PersistentVector.fromArray(["\uFDD0:emit"], true),io.pedestal.app.dataflow.output_maps),cljs.core.PersistentVector.fromArray(["\uFDD0:derive"], true),io.pedestal.app.dataflow.sort_derive_fns),cljs.core.PersistentVector.fromArray(["\uFDD0:input-adapter"], true),io.pedestal.app.dataflow.add_default,cljs.core.identity);
});
io.pedestal.app.dataflow.run = (function run(model,dataflow,message){
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:debug")).call(null,dataflow)))
{var start = io.pedestal.app.util.platform.date.call(null).getTime();
var new_model = io.pedestal.app.dataflow.run_all_phases.call(null,model,dataflow,message);
var end = io.pedestal.app.util.platform.date.call(null).getTime();
return io.pedestal.app.dataflow.run_all_phases.call(null,new_model,cljs.core.assoc.call(null,dataflow,"\uFDD0:input-adapter",cljs.core.identity),cljs.core.PersistentArrayMap.fromArray(["\uFDD0:key","\uFDD0:debug","\uFDD0:out",cljs.core.PersistentVector.fromArray(["\uFDD0:pedestal","\uFDD0:debug","\uFDD0:dataflow-time"], true),"\uFDD0:value",(end - start)], true));
} else
{return io.pedestal.app.dataflow.run_all_phases.call(null,model,dataflow,message);
}
});
