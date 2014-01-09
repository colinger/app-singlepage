goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = {};
domina.events.prevent_default = (function prevent_default(evt){
if((function (){var and__3941__auto__ = evt;
if(and__3941__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__9709__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.prevent_default[goog.typeOf(x__9709__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.prevent_default["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){
if((function (){var and__3941__auto__ = evt;
if(and__3941__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__9709__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.stop_propagation[goog.typeOf(x__9709__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.stop_propagation["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){
if((function (){var and__3941__auto__ = evt;
if(and__3941__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__9709__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.target[goog.typeOf(x__9709__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.target["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){
if((function (){var and__3941__auto__ = evt;
if(and__3941__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__9709__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.current_target[goog.typeOf(x__9709__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.current_target["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){
if((function (){var and__3941__auto__ = evt;
if(and__3941__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__9709__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.event_type[goog.typeOf(x__9709__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.event_type["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){
if((function (){var and__3941__auto__ = evt;
if(and__3941__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__9709__auto__ = (((evt == null))?null:evt);
return (function (){var or__3943__auto__ = (domina.events.raw_event[goog.typeOf(x__9709__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.raw_event["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.builtin_events = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.keyword,goog.object.getValues(goog.events.EventType)));
domina.events.root_element = window.document.documentElement;
domina.events.find_builtin_type = (function find_builtin_type(evt_type){
if(cljs.core.contains_QMARK_.call(null,domina.events.builtin_events,evt_type))
{return cljs.core.name.call(null,evt_type);
} else
{return evt_type;
}
});
domina.events.create_listener_function = (function create_listener_function(f){
return (function (evt){
f.call(null,(function (){if((void 0 === domina.events.t12670))
{goog.provide('domina.events.t12670');

/**
* @constructor
*/
domina.events.t12670 = (function (evt,f,create_listener_function,meta12671){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta12671 = meta12671;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t12670.cljs$lang$type = true;
domina.events.t12670.cljs$lang$ctorStr = "domina.events/t12670";
domina.events.t12670.cljs$lang$ctorPrWriter = (function (this__9650__auto__,writer__9651__auto__,opt__9652__auto__){
return cljs.core._write.call(null,writer__9651__auto__,"domina.events/t12670");
});
domina.events.t12670.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var temp__4090__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;
return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t12670.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var or__3943__auto__ = o.cljs$core$ILookup$_lookup$arity$2(o,k);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return not_found;
}
});
domina.events.t12670.prototype.domina$events$Event$ = true;
domina.events.t12670.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
return self__.evt.preventDefault();
});
domina.events.t12670.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
return self__.evt.stopPropagation();
});
domina.events.t12670.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
return self__.evt.target;
});
domina.events.t12670.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
return self__.evt.currentTarget;
});
domina.events.t12670.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
return self__.evt.type;
});
domina.events.t12670.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
return self__.evt;
});
domina.events.t12670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12672){
var self__ = this;
return self__.meta12671;
});
domina.events.t12670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12672,meta12671__$1){
var self__ = this;
return (new domina.events.t12670(self__.evt,self__.f,self__.create_listener_function,meta12671__$1));
});
domina.events.__GT_t12670 = (function __GT_t12670(evt__$1,f__$1,create_listener_function__$1,meta12671){
return (new domina.events.t12670(evt__$1,f__$1,create_listener_function__$1,meta12671));
});
} else
{}
return (new domina.events.t12670(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = domina.events.find_builtin_type.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__9809__auto__ = (function iter__12677(s__12678){
return (new cljs.core.LazySeq(null,false,(function (){
var s__12678__$1 = s__12678;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12678__$1);
if(temp__4092__auto__)
{var s__12678__$2 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12678__$2))
{var c__9807__auto__ = cljs.core.chunk_first.call(null,s__12678__$2);
var size__9808__auto__ = cljs.core.count.call(null,c__9807__auto__);
var b__12680 = cljs.core.chunk_buffer.call(null,size__9808__auto__);
if((function (){var i__12679 = 0;
while(true){
if((i__12679 < size__9808__auto__))
{var node = cljs.core._nth.call(null,c__9807__auto__,i__12679);
cljs.core.chunk_append.call(null,b__12680,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__12681 = (i__12679 + 1);
i__12679 = G__12681;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12680),iter__12677.call(null,cljs.core.chunk_rest.call(null,s__12678__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12680),null);
}
} else
{var node = cljs.core.first.call(null,s__12678__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__12677.call(null,cljs.core.rest.call(null,s__12678__$2)));
}
} else
{return null;
}
break;
}
}),null));
});
return iter__9809__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){
return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){
return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_BANG___2;
capture_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){
return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){
return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){
return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){
var seq__12690 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__12691 = null;
var count__12692 = 0;
var i__12693 = 0;
while(true){
if((i__12693 < count__12692))
{var node = cljs.core._nth.call(null,chunk__12691,i__12693);
goog.events.removeAll(node);
{
var G__12698 = seq__12690;
var G__12699 = chunk__12691;
var G__12700 = count__12692;
var G__12701 = (i__12693 + 1);
seq__12690 = G__12698;
chunk__12691 = G__12699;
count__12692 = G__12700;
i__12693 = G__12701;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12690);
if(temp__4092__auto__)
{var seq__12690__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12690__$1))
{var c__9840__auto__ = cljs.core.chunk_first.call(null,seq__12690__$1);
{
var G__12702 = cljs.core.chunk_rest.call(null,seq__12690__$1);
var G__12703 = c__9840__auto__;
var G__12704 = cljs.core.count.call(null,c__9840__auto__);
var G__12705 = 0;
seq__12690 = G__12702;
chunk__12691 = G__12703;
count__12692 = G__12704;
i__12693 = G__12705;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__12690__$1);
goog.events.removeAll(node);
{
var G__12706 = cljs.core.next.call(null,seq__12690__$1);
var G__12707 = null;
var G__12708 = 0;
var G__12709 = 0;
seq__12690 = G__12706;
chunk__12691 = G__12707;
count__12692 = G__12708;
i__12693 = G__12709;
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
var unlisten_BANG___2 = (function (content,type){
var type__$1 = domina.events.find_builtin_type.call(null,type);
var seq__12694 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__12695 = null;
var count__12696 = 0;
var i__12697 = 0;
while(true){
if((i__12697 < count__12696))
{var node = cljs.core._nth.call(null,chunk__12695,i__12697);
goog.events.removeAll(node,type__$1);
{
var G__12710 = seq__12694;
var G__12711 = chunk__12695;
var G__12712 = count__12696;
var G__12713 = (i__12697 + 1);
seq__12694 = G__12710;
chunk__12695 = G__12711;
count__12696 = G__12712;
i__12697 = G__12713;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12694);
if(temp__4092__auto__)
{var seq__12694__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12694__$1))
{var c__9840__auto__ = cljs.core.chunk_first.call(null,seq__12694__$1);
{
var G__12714 = cljs.core.chunk_rest.call(null,seq__12694__$1);
var G__12715 = c__9840__auto__;
var G__12716 = cljs.core.count.call(null,c__9840__auto__);
var G__12717 = 0;
seq__12694 = G__12714;
chunk__12695 = G__12715;
count__12696 = G__12716;
i__12697 = G__12717;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__12694__$1);
goog.events.removeAll(node,type__$1);
{
var G__12718 = cljs.core.next.call(null,seq__12694__$1);
var G__12719 = null;
var G__12720 = 0;
var G__12721 = 0;
seq__12694 = G__12718;
chunk__12695 = G__12719;
count__12696 = G__12720;
i__12697 = G__12721;
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
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){
return ancestor_nodes.call(null,n,cljs.core.PersistentVector.fromArray([n], true));
});
var ancestor_nodes__2 = (function (n,so_far){
while(true){
var temp__4090__auto__ = n.parentNode;
if(cljs.core.truth_(temp__4090__auto__))
{var parent = temp__4090__auto__;
{
var G__12722 = parent;
var G__12723 = cljs.core.cons.call(null,parent,so_far);
n = G__12722;
so_far = G__12723;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));
var seq__12732_12740 = cljs.core.seq.call(null,ancestors);
var chunk__12733_12741 = null;
var count__12734_12742 = 0;
var i__12735_12743 = 0;
while(true){
if((i__12735_12743 < count__12734_12742))
{var n_12744 = cljs.core._nth.call(null,chunk__12733_12741,i__12735_12743);
if(cljs.core.truth_(n_12744.propagationStopped))
{} else
{evt.currentTarget = n_12744;
goog.events.fireListeners(n_12744,evt.type,true,evt);
}
{
var G__12745 = seq__12732_12740;
var G__12746 = chunk__12733_12741;
var G__12747 = count__12734_12742;
var G__12748 = (i__12735_12743 + 1);
seq__12732_12740 = G__12745;
chunk__12733_12741 = G__12746;
count__12734_12742 = G__12747;
i__12735_12743 = G__12748;
continue;
}
} else
{var temp__4092__auto___12749 = cljs.core.seq.call(null,seq__12732_12740);
if(temp__4092__auto___12749)
{var seq__12732_12750__$1 = temp__4092__auto___12749;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12732_12750__$1))
{var c__9840__auto___12751 = cljs.core.chunk_first.call(null,seq__12732_12750__$1);
{
var G__12752 = cljs.core.chunk_rest.call(null,seq__12732_12750__$1);
var G__12753 = c__9840__auto___12751;
var G__12754 = cljs.core.count.call(null,c__9840__auto___12751);
var G__12755 = 0;
seq__12732_12740 = G__12752;
chunk__12733_12741 = G__12753;
count__12734_12742 = G__12754;
i__12735_12743 = G__12755;
continue;
}
} else
{var n_12756 = cljs.core.first.call(null,seq__12732_12750__$1);
if(cljs.core.truth_(n_12756.propagationStopped))
{} else
{evt.currentTarget = n_12756;
goog.events.fireListeners(n_12756,evt.type,true,evt);
}
{
var G__12757 = cljs.core.next.call(null,seq__12732_12750__$1);
var G__12758 = null;
var G__12759 = 0;
var G__12760 = 0;
seq__12732_12740 = G__12757;
chunk__12733_12741 = G__12758;
count__12734_12742 = G__12759;
i__12735_12743 = G__12760;
continue;
}
}
} else
{}
}
break;
}
var seq__12736_12761 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__12737_12762 = null;
var count__12738_12763 = 0;
var i__12739_12764 = 0;
while(true){
if((i__12739_12764 < count__12738_12763))
{var n_12765 = cljs.core._nth.call(null,chunk__12737_12762,i__12739_12764);
if(cljs.core.truth_(n_12765.propagationStopped))
{} else
{evt.currentTarget = n_12765;
goog.events.fireListeners(n_12765,evt.type,false,evt);
}
{
var G__12766 = seq__12736_12761;
var G__12767 = chunk__12737_12762;
var G__12768 = count__12738_12763;
var G__12769 = (i__12739_12764 + 1);
seq__12736_12761 = G__12766;
chunk__12737_12762 = G__12767;
count__12738_12763 = G__12768;
i__12739_12764 = G__12769;
continue;
}
} else
{var temp__4092__auto___12770 = cljs.core.seq.call(null,seq__12736_12761);
if(temp__4092__auto___12770)
{var seq__12736_12771__$1 = temp__4092__auto___12770;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12736_12771__$1))
{var c__9840__auto___12772 = cljs.core.chunk_first.call(null,seq__12736_12771__$1);
{
var G__12773 = cljs.core.chunk_rest.call(null,seq__12736_12771__$1);
var G__12774 = c__9840__auto___12772;
var G__12775 = cljs.core.count.call(null,c__9840__auto___12772);
var G__12776 = 0;
seq__12736_12761 = G__12773;
chunk__12737_12762 = G__12774;
count__12738_12763 = G__12775;
i__12739_12764 = G__12776;
continue;
}
} else
{var n_12777 = cljs.core.first.call(null,seq__12736_12771__$1);
if(cljs.core.truth_(n_12777.propagationStopped))
{} else
{evt.currentTarget = n_12777;
goog.events.fireListeners(n_12777,evt.type,false,evt);
}
{
var G__12778 = cljs.core.next.call(null,seq__12736_12771__$1);
var G__12779 = null;
var G__12780 = 0;
var G__12781 = 0;
seq__12736_12761 = G__12778;
chunk__12737_12762 = G__12779;
count__12738_12763 = G__12780;
i__12739_12764 = G__12781;
continue;
}
}
} else
{}
}
break;
}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){
return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){
var and__3941__auto__ = o.getParentEventTarget;
if(cljs.core.truth_(and__3941__auto__))
{return o.dispatchEvent;
} else
{return and__3941__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){
return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(domina.events.find_builtin_type.call(null,type)));
var seq__12788_12794 = cljs.core.seq.call(null,evt_map);
var chunk__12789_12795 = null;
var count__12790_12796 = 0;
var i__12791_12797 = 0;
while(true){
if((i__12791_12797 < count__12790_12796))
{var vec__12792_12798 = cljs.core._nth.call(null,chunk__12789_12795,i__12791_12797);
var k_12799 = cljs.core.nth.call(null,vec__12792_12798,0,null);
var v_12800 = cljs.core.nth.call(null,vec__12792_12798,1,null);
(evt[k_12799] = v_12800);
{
var G__12801 = seq__12788_12794;
var G__12802 = chunk__12789_12795;
var G__12803 = count__12790_12796;
var G__12804 = (i__12791_12797 + 1);
seq__12788_12794 = G__12801;
chunk__12789_12795 = G__12802;
count__12790_12796 = G__12803;
i__12791_12797 = G__12804;
continue;
}
} else
{var temp__4092__auto___12805 = cljs.core.seq.call(null,seq__12788_12794);
if(temp__4092__auto___12805)
{var seq__12788_12806__$1 = temp__4092__auto___12805;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12788_12806__$1))
{var c__9840__auto___12807 = cljs.core.chunk_first.call(null,seq__12788_12806__$1);
{
var G__12808 = cljs.core.chunk_rest.call(null,seq__12788_12806__$1);
var G__12809 = c__9840__auto___12807;
var G__12810 = cljs.core.count.call(null,c__9840__auto___12807);
var G__12811 = 0;
seq__12788_12794 = G__12808;
chunk__12789_12795 = G__12809;
count__12790_12796 = G__12810;
i__12791_12797 = G__12811;
continue;
}
} else
{var vec__12793_12812 = cljs.core.first.call(null,seq__12788_12806__$1);
var k_12813 = cljs.core.nth.call(null,vec__12793_12812,0,null);
var v_12814 = cljs.core.nth.call(null,vec__12793_12812,1,null);
(evt[k_12813] = v_12814);
{
var G__12815 = cljs.core.next.call(null,seq__12788_12806__$1);
var G__12816 = null;
var G__12817 = 0;
var G__12818 = 0;
seq__12788_12794 = G__12815;
chunk__12789_12795 = G__12816;
count__12790_12796 = G__12817;
i__12791_12797 = G__12818;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){
return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){
var type__$1 = domina.events.find_builtin_type.call(null,type);
return cljs.core.mapcat.call(null,(function (p1__12819_SHARP_){
return goog.events.getListeners(p1__12819_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
