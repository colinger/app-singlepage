goog.provide('io.pedestal.app.util.platform');
goog.require('cljs.core');
goog.require('cljs.reader');
io.pedestal.app.util.platform.safe_read_string = (function safe_read_string(s){
return cljs.reader.read_string.call(null,s);
});
io.pedestal.app.util.platform.parse_int = (function parse_int(s){
if((function (){var or__3943__auto__ = typeof s === 'number';
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.string_QMARK_.call(null,s);
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("the value passed to parse-int must be a number or a string"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"number?","number?",653920207,null),new cljs.core.Symbol(null,"s","s",-1640531412,null)),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"s","s",-1640531412,null)))))].join('')));
}
return parseInt(s,10);
});
io.pedestal.app.util.platform.date = (function date(){
return (new Date());
});
io.pedestal.app.util.platform.create_timeout = (function create_timeout(msecs,f){
return setTimeout(f,msecs);
});
io.pedestal.app.util.platform.cancel_timeout = (function cancel_timeout(timeout){
return clearTimeout(timeout);
});
io.pedestal.app.util.platform.read_form_if_string = (function read_form_if_string(x){
if(cljs.core.string_QMARK_.call(null,x))
{try{return io.pedestal.app.util.platform.safe_read_string.call(null,x);
}catch (e12386){if((e12386 instanceof Error))
{var _ = e12386;
return null;
} else
{if("\uFDD0:else")
{throw e12386;
} else
{return null;
}
}
}} else
{return x;
}
});
io.pedestal.app.util.platform.log_group = (function log_group(group_name,coll){
console.group(group_name);
var seq__12391_12395 = cljs.core.seq.call(null,coll);
var chunk__12392_12396 = null;
var count__12393_12397 = 0;
var i__12394_12398 = 0;
while(true){
if((i__12394_12398 < count__12393_12397))
{var d_12399 = cljs.core._nth.call(null,chunk__12392_12396,i__12394_12398);
console.log(cljs.core.pr_str.call(null,d_12399));
{
var G__12400 = seq__12391_12395;
var G__12401 = chunk__12392_12396;
var G__12402 = count__12393_12397;
var G__12403 = (i__12394_12398 + 1);
seq__12391_12395 = G__12400;
chunk__12392_12396 = G__12401;
count__12393_12397 = G__12402;
i__12394_12398 = G__12403;
continue;
}
} else
{var temp__4092__auto___12404 = cljs.core.seq.call(null,seq__12391_12395);
if(temp__4092__auto___12404)
{var seq__12391_12405__$1 = temp__4092__auto___12404;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12391_12405__$1))
{var c__9840__auto___12406 = cljs.core.chunk_first.call(null,seq__12391_12405__$1);
{
var G__12407 = cljs.core.chunk_rest.call(null,seq__12391_12405__$1);
var G__12408 = c__9840__auto___12406;
var G__12409 = cljs.core.count.call(null,c__9840__auto___12406);
var G__12410 = 0;
seq__12391_12395 = G__12407;
chunk__12392_12396 = G__12408;
count__12393_12397 = G__12409;
i__12394_12398 = G__12410;
continue;
}
} else
{var d_12411 = cljs.core.first.call(null,seq__12391_12405__$1);
console.log(cljs.core.pr_str.call(null,d_12411));
{
var G__12412 = cljs.core.next.call(null,seq__12391_12405__$1);
var G__12413 = null;
var G__12414 = 0;
var G__12415 = 0;
seq__12391_12395 = G__12412;
chunk__12392_12396 = G__12413;
count__12393_12397 = G__12414;
i__12394_12398 = G__12415;
continue;
}
}
} else
{}
}
break;
}
return console.groupEnd();
});
/**
* @param {...*} var_args
*/
io.pedestal.app.util.platform.log_exceptions = (function() { 
var log_exceptions__delegate = function (f,args){
try{return cljs.core.apply.call(null,f,args);
}catch (e12417){if((e12417 instanceof Error))
{var e = e12417;
console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if("\uFDD0:else")
{throw e12417;
} else
{return null;
}
}
}};
var log_exceptions = function (f,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log_exceptions__delegate.call(this, f, args);
};
log_exceptions.cljs$lang$maxFixedArity = 1;
log_exceptions.cljs$lang$applyTo = (function (arglist__12418){
var f = cljs.core.first(arglist__12418);
var args = cljs.core.rest(arglist__12418);
return log_exceptions__delegate(f, args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
io.pedestal.app.util.platform.vec_unless_seqable = (function vec_unless_seqable(x){
try{cljs.core.seq.call(null,x);
return x;
}catch (e12420){if((e12420 instanceof Error))
{var e = e12420;
return cljs.core.PersistentVector.fromArray([x], true);
} else
{if("\uFDD0:else")
{throw e12420;
} else
{return null;
}
}
}});
