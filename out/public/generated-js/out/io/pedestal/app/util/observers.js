goog.provide('io.pedestal.app.util.observers');
goog.require('cljs.core');
io.pedestal.app.util.observers.listeners = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
io.pedestal.app.util.observers.publish = (function publish(topic,message){
var seq__10753 = cljs.core.seq.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,io.pedestal.app.util.observers.listeners),topic));
var chunk__10754 = null;
var count__10755 = 0;
var i__10756 = 0;
while(true){
if((i__10756 < count__10755))
{var f = cljs.core._nth.call(null,chunk__10754,i__10756);
f.call(null,message);
{
var G__10757 = seq__10753;
var G__10758 = chunk__10754;
var G__10759 = count__10755;
var G__10760 = (i__10756 + 1);
seq__10753 = G__10757;
chunk__10754 = G__10758;
count__10755 = G__10759;
i__10756 = G__10760;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10753);
if(temp__4092__auto__)
{var seq__10753__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10753__$1))
{var c__9840__auto__ = cljs.core.chunk_first.call(null,seq__10753__$1);
{
var G__10761 = cljs.core.chunk_rest.call(null,seq__10753__$1);
var G__10762 = c__9840__auto__;
var G__10763 = cljs.core.count.call(null,c__9840__auto__);
var G__10764 = 0;
seq__10753 = G__10761;
chunk__10754 = G__10762;
count__10755 = G__10763;
i__10756 = G__10764;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__10753__$1);
f.call(null,message);
{
var G__10765 = cljs.core.next.call(null,seq__10753__$1);
var G__10766 = null;
var G__10767 = 0;
var G__10768 = 0;
seq__10753 = G__10765;
chunk__10754 = G__10766;
count__10755 = G__10767;
i__10756 = G__10768;
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
io.pedestal.app.util.observers.subscribe = (function subscribe(topic,f){
return cljs.core.swap_BANG_.call(null,io.pedestal.app.util.observers.listeners,cljs.core.update_in,cljs.core.PersistentVector.fromArray([topic], true),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),f);
});
io.pedestal.app.util.observers.clear = (function clear(){
return cljs.core.reset_BANG_.call(null,io.pedestal.app.util.observers.listeners,cljs.core.PersistentArrayMap.EMPTY);
});
