goog.provide('domina');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_13024 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper_13025 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper_13026 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col","\uFDD0:default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),cljs.core.PersistentVector.fromArray([0,"",""], true),table_section_wrapper_13025,table_section_wrapper_13025,opt_wrapper_13024,cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),cell_wrapper_13026,table_section_wrapper_13025,cell_wrapper_13026,opt_wrapper_13024,table_section_wrapper_13025,cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),table_section_wrapper_13025]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,tag_name,"table");
if(and__3941__auto__)
{return no_tbody_QMARK_;
} else
{return and__3941__auto__;
}
})())?(function (){var and__3941__auto__ = div.firstChild;
if(cljs.core.truth_(and__3941__auto__))
{return div.firstChild.childNodes;
} else
{return and__3941__auto__;
}
})():(((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,start_wrap,"<table>");
if(and__3941__auto__)
{return no_tbody_QMARK_;
} else
{return and__3941__auto__;
}
})())?divchildNodes:cljs.core.PersistentVector.EMPTY));
var seq__13031 = cljs.core.seq.call(null,tbody);
var chunk__13032 = null;
var count__13033 = 0;
var i__13034 = 0;
while(true){
if((i__13034 < count__13033))
{var child = cljs.core._nth.call(null,chunk__13032,i__13034);
if((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,child.nodeName,"tbody");
if(and__3941__auto__)
{return cljs.core._EQ_.call(null,child.childNodes.length,0);
} else
{return and__3941__auto__;
}
})())
{child.parentNode.removeChild(child);
} else
{}
{
var G__13035 = seq__13031;
var G__13036 = chunk__13032;
var G__13037 = count__13033;
var G__13038 = (i__13034 + 1);
seq__13031 = G__13035;
chunk__13032 = G__13036;
count__13033 = G__13037;
i__13034 = G__13038;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13031);
if(temp__4092__auto__)
{var seq__13031__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13031__$1))
{var c__9840__auto__ = cljs.core.chunk_first.call(null,seq__13031__$1);
{
var G__13039 = cljs.core.chunk_rest.call(null,seq__13031__$1);
var G__13040 = c__9840__auto__;
var G__13041 = cljs.core.count.call(null,c__9840__auto__);
var G__13042 = 0;
seq__13031 = G__13039;
chunk__13032 = G__13040;
count__13033 = G__13041;
i__13034 = G__13042;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__13031__$1);
if((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,child.nodeName,"tbody");
if(and__3941__auto__)
{return cljs.core._EQ_.call(null,child.childNodes.length,0);
} else
{return and__3941__auto__;
}
})())
{child.parentNode.removeChild(child);
} else
{}
{
var G__13043 = cljs.core.next.call(null,seq__13031__$1);
var G__13044 = null;
var G__13045 = 0;
var G__13046 = 0;
seq__13031 = G__13043;
chunk__13032 = G__13044;
count__13033 = G__13045;
i__13034 = G__13046;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__13048 = cljs.core.get.call(null,domina.wrap_map,tag_name,(new cljs.core.Keyword("\uFDD0:default")).call(null,domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__13048,0,null);
var start_wrap = cljs.core.nth.call(null,vec__13048,1,null);
var end_wrap = cljs.core.nth.call(null,vec__13048,2,null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();
var level = depth;
while(true){
if((level > 0))
{{
var G__13049 = wrapper.lastChild;
var G__13050 = (level - 1);
wrapper = G__13049;
level = G__13050;
continue;
}
} else
{return wrapper;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3941__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__3941__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3941__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if((function (){var and__3941__auto__ = content;
if(and__3941__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3941__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__9709__auto__ = (((content == null))?null:content);
return (function (){var or__3943__auto__ = (domina.nodes[goog.typeOf(x__9709__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.nodes["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if((function (){var and__3941__auto__ = nodeseq;
if(and__3941__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3941__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__9709__auto__ = (((nodeseq == null))?null:nodeseq);
return (function (){var or__3943__auto__ = (domina.single_node[goog.typeOf(x__9709__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.single_node["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){
if(cljs.core.truth_((function (){var and__3941__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3941__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3941__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;
if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log_debug__delegate.call(this, mesg);
};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__13051){
var mesg = cljs.core.seq(arglist__13051);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){
if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;
if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log__delegate.call(this, mesg);
};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__13052){
var mesg = cljs.core.seq(arglist__13052);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
if((void 0 === domina.t13056))
{goog.provide('domina.t13056');

/**
* @constructor
*/
domina.t13056 = (function (class_name,by_class,meta13057){
this.class_name = class_name;
this.by_class = by_class;
this.meta13057 = meta13057;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t13056.cljs$lang$type = true;
domina.t13056.cljs$lang$ctorStr = "domina/t13056";
domina.t13056.cljs$lang$ctorPrWriter = (function (this__9650__auto__,writer__9651__auto__,opt__9652__auto__){
return cljs.core._write.call(null,writer__9651__auto__,"domina/t13056");
});
domina.t13056.prototype.domina$DomContent$ = true;
domina.t13056.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,self__.class_name)));
});
domina.t13056.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name.call(null,self__.class_name)));
});
domina.t13056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13058){
var self__ = this;
return self__.meta13057;
});
domina.t13056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13058,meta13057__$1){
var self__ = this;
return (new domina.t13056(self__.class_name,self__.by_class,meta13057__$1));
});
domina.__GT_t13056 = (function __GT_t13056(class_name__$1,by_class__$1,meta13057){
return (new domina.t13056(class_name__$1,by_class__$1,meta13057));
});
} else
{}
return (new domina.t13056(class_name,by_class,null));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;
if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return common_ancestor__delegate.call(this, contents);
};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__13059){
var contents = cljs.core.seq(arglist__13059);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.call(null,(function (p1__13060_SHARP_){
return p1__13060_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__13061_SHARP_,p2__13062_SHARP_){
return goog.dom.insertChildAt(p1__13061_SHARP_,p2__13062_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__13064_SHARP_,p2__13063_SHARP_){
return goog.dom.insertSiblingBefore(p2__13063_SHARP_,p1__13064_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__13066_SHARP_,p2__13065_SHARP_){
return goog.dom.insertSiblingAfter(p2__13065_SHARP_,p1__13066_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__13068_SHARP_,p2__13067_SHARP_){
return goog.dom.replaceNode(p2__13067_SHARP_,p1__13068_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){
var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){
var seq__13073_13077 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13074_13078 = null;
var count__13075_13079 = 0;
var i__13076_13080 = 0;
while(true){
if((i__13076_13080 < count__13075_13079))
{var n_13081 = cljs.core._nth.call(null,chunk__13074_13078,i__13076_13080);
goog.style.setStyle(n_13081,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__13082 = seq__13073_13077;
var G__13083 = chunk__13074_13078;
var G__13084 = count__13075_13079;
var G__13085 = (i__13076_13080 + 1);
seq__13073_13077 = G__13082;
chunk__13074_13078 = G__13083;
count__13075_13079 = G__13084;
i__13076_13080 = G__13085;
continue;
}
} else
{var temp__4092__auto___13086 = cljs.core.seq.call(null,seq__13073_13077);
if(temp__4092__auto___13086)
{var seq__13073_13087__$1 = temp__4092__auto___13086;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13073_13087__$1))
{var c__9840__auto___13088 = cljs.core.chunk_first.call(null,seq__13073_13087__$1);
{
var G__13089 = cljs.core.chunk_rest.call(null,seq__13073_13087__$1);
var G__13090 = c__9840__auto___13088;
var G__13091 = cljs.core.count.call(null,c__9840__auto___13088);
var G__13092 = 0;
seq__13073_13077 = G__13089;
chunk__13074_13078 = G__13090;
count__13075_13079 = G__13091;
i__13076_13080 = G__13092;
continue;
}
} else
{var n_13093 = cljs.core.first.call(null,seq__13073_13087__$1);
goog.style.setStyle(n_13093,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__13094 = cljs.core.next.call(null,seq__13073_13087__$1);
var G__13095 = null;
var G__13096 = 0;
var G__13097 = 0;
seq__13073_13077 = G__13094;
chunk__13074_13078 = G__13095;
count__13075_13079 = G__13096;
i__13076_13080 = G__13097;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;
if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_style_BANG___delegate.call(this, content, name, value);
};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__13098){
var content = cljs.core.first(arglist__13098);
arglist__13098 = cljs.core.next(arglist__13098);
var name = cljs.core.first(arglist__13098);
var value = cljs.core.rest(arglist__13098);
return set_style_BANG___delegate(content, name, value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){
var seq__13103_13107 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13104_13108 = null;
var count__13105_13109 = 0;
var i__13106_13110 = 0;
while(true){
if((i__13106_13110 < count__13105_13109))
{var n_13111 = cljs.core._nth.call(null,chunk__13104_13108,i__13106_13110);
n_13111.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__13112 = seq__13103_13107;
var G__13113 = chunk__13104_13108;
var G__13114 = count__13105_13109;
var G__13115 = (i__13106_13110 + 1);
seq__13103_13107 = G__13112;
chunk__13104_13108 = G__13113;
count__13105_13109 = G__13114;
i__13106_13110 = G__13115;
continue;
}
} else
{var temp__4092__auto___13116 = cljs.core.seq.call(null,seq__13103_13107);
if(temp__4092__auto___13116)
{var seq__13103_13117__$1 = temp__4092__auto___13116;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13103_13117__$1))
{var c__9840__auto___13118 = cljs.core.chunk_first.call(null,seq__13103_13117__$1);
{
var G__13119 = cljs.core.chunk_rest.call(null,seq__13103_13117__$1);
var G__13120 = c__9840__auto___13118;
var G__13121 = cljs.core.count.call(null,c__9840__auto___13118);
var G__13122 = 0;
seq__13103_13107 = G__13119;
chunk__13104_13108 = G__13120;
count__13105_13109 = G__13121;
i__13106_13110 = G__13122;
continue;
}
} else
{var n_13123 = cljs.core.first.call(null,seq__13103_13117__$1);
n_13123.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__13124 = cljs.core.next.call(null,seq__13103_13117__$1);
var G__13125 = null;
var G__13126 = 0;
var G__13127 = 0;
seq__13103_13107 = G__13124;
chunk__13104_13108 = G__13125;
count__13105_13109 = G__13126;
i__13106_13110 = G__13127;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;
if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_attr_BANG___delegate.call(this, content, name, value);
};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__13128){
var content = cljs.core.first(arglist__13128);
arglist__13128 = cljs.core.next(arglist__13128);
var name = cljs.core.first(arglist__13128);
var value = cljs.core.rest(arglist__13128);
return set_attr_BANG___delegate(content, name, value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){
var seq__13133_13137 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13134_13138 = null;
var count__13135_13139 = 0;
var i__13136_13140 = 0;
while(true){
if((i__13136_13140 < count__13135_13139))
{var n_13141 = cljs.core._nth.call(null,chunk__13134_13138,i__13136_13140);
n_13141.removeAttribute(cljs.core.name.call(null,name));
{
var G__13142 = seq__13133_13137;
var G__13143 = chunk__13134_13138;
var G__13144 = count__13135_13139;
var G__13145 = (i__13136_13140 + 1);
seq__13133_13137 = G__13142;
chunk__13134_13138 = G__13143;
count__13135_13139 = G__13144;
i__13136_13140 = G__13145;
continue;
}
} else
{var temp__4092__auto___13146 = cljs.core.seq.call(null,seq__13133_13137);
if(temp__4092__auto___13146)
{var seq__13133_13147__$1 = temp__4092__auto___13146;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13133_13147__$1))
{var c__9840__auto___13148 = cljs.core.chunk_first.call(null,seq__13133_13147__$1);
{
var G__13149 = cljs.core.chunk_rest.call(null,seq__13133_13147__$1);
var G__13150 = c__9840__auto___13148;
var G__13151 = cljs.core.count.call(null,c__9840__auto___13148);
var G__13152 = 0;
seq__13133_13137 = G__13149;
chunk__13134_13138 = G__13150;
count__13135_13139 = G__13151;
i__13136_13140 = G__13152;
continue;
}
} else
{var n_13153 = cljs.core.first.call(null,seq__13133_13147__$1);
n_13153.removeAttribute(cljs.core.name.call(null,name));
{
var G__13154 = cljs.core.next.call(null,seq__13133_13147__$1);
var G__13155 = null;
var G__13156 = 0;
var G__13157 = 0;
seq__13133_13137 = G__13154;
chunk__13134_13138 = G__13155;
count__13135_13139 = G__13156;
i__13136_13140 = G__13157;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__13159 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__13159,0,null);
var v = cljs.core.nth.call(null,vec__13159,1,null);
if(cljs.core.truth_((function (){var and__3941__auto__ = k;
if(cljs.core.truth_(and__3941__auto__))
{return v;
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style = domina.attr.call(null,content,"style");
if(cljs.core.string_QMARK_.call(null,style))
{return domina.parse_style_attributes.call(null,style);
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node = domina.single_node.call(null,content);
var attrs__$1 = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__13160_SHARP_){
var attr = attrs__$1.item(p1__13160_SHARP_);
var value = attr.nodeValue;
if((function (){var and__3941__auto__ = cljs.core.not_EQ_.call(null,null,value);
if(and__3941__auto__)
{return cljs.core.not_EQ_.call(null,"",value);
} else
{return and__3941__auto__;
}
})())
{return cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var seq__13167_13173 = cljs.core.seq.call(null,styles);
var chunk__13168_13174 = null;
var count__13169_13175 = 0;
var i__13170_13176 = 0;
while(true){
if((i__13170_13176 < count__13169_13175))
{var vec__13171_13177 = cljs.core._nth.call(null,chunk__13168_13174,i__13170_13176);
var name_13178 = cljs.core.nth.call(null,vec__13171_13177,0,null);
var value_13179 = cljs.core.nth.call(null,vec__13171_13177,1,null);
domina.set_style_BANG_.call(null,content,name_13178,value_13179);
{
var G__13180 = seq__13167_13173;
var G__13181 = chunk__13168_13174;
var G__13182 = count__13169_13175;
var G__13183 = (i__13170_13176 + 1);
seq__13167_13173 = G__13180;
chunk__13168_13174 = G__13181;
count__13169_13175 = G__13182;
i__13170_13176 = G__13183;
continue;
}
} else
{var temp__4092__auto___13184 = cljs.core.seq.call(null,seq__13167_13173);
if(temp__4092__auto___13184)
{var seq__13167_13185__$1 = temp__4092__auto___13184;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13167_13185__$1))
{var c__9840__auto___13186 = cljs.core.chunk_first.call(null,seq__13167_13185__$1);
{
var G__13187 = cljs.core.chunk_rest.call(null,seq__13167_13185__$1);
var G__13188 = c__9840__auto___13186;
var G__13189 = cljs.core.count.call(null,c__9840__auto___13186);
var G__13190 = 0;
seq__13167_13173 = G__13187;
chunk__13168_13174 = G__13188;
count__13169_13175 = G__13189;
i__13170_13176 = G__13190;
continue;
}
} else
{var vec__13172_13191 = cljs.core.first.call(null,seq__13167_13185__$1);
var name_13192 = cljs.core.nth.call(null,vec__13172_13191,0,null);
var value_13193 = cljs.core.nth.call(null,vec__13172_13191,1,null);
domina.set_style_BANG_.call(null,content,name_13192,value_13193);
{
var G__13194 = cljs.core.next.call(null,seq__13167_13185__$1);
var G__13195 = null;
var G__13196 = 0;
var G__13197 = 0;
seq__13167_13173 = G__13194;
chunk__13168_13174 = G__13195;
count__13169_13175 = G__13196;
i__13170_13176 = G__13197;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified CSS styles fpr each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){
var seq__13204_13210 = cljs.core.seq.call(null,attrs);
var chunk__13205_13211 = null;
var count__13206_13212 = 0;
var i__13207_13213 = 0;
while(true){
if((i__13207_13213 < count__13206_13212))
{var vec__13208_13214 = cljs.core._nth.call(null,chunk__13205_13211,i__13207_13213);
var name_13215 = cljs.core.nth.call(null,vec__13208_13214,0,null);
var value_13216 = cljs.core.nth.call(null,vec__13208_13214,1,null);
domina.set_attr_BANG_.call(null,content,name_13215,value_13216);
{
var G__13217 = seq__13204_13210;
var G__13218 = chunk__13205_13211;
var G__13219 = count__13206_13212;
var G__13220 = (i__13207_13213 + 1);
seq__13204_13210 = G__13217;
chunk__13205_13211 = G__13218;
count__13206_13212 = G__13219;
i__13207_13213 = G__13220;
continue;
}
} else
{var temp__4092__auto___13221 = cljs.core.seq.call(null,seq__13204_13210);
if(temp__4092__auto___13221)
{var seq__13204_13222__$1 = temp__4092__auto___13221;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13204_13222__$1))
{var c__9840__auto___13223 = cljs.core.chunk_first.call(null,seq__13204_13222__$1);
{
var G__13224 = cljs.core.chunk_rest.call(null,seq__13204_13222__$1);
var G__13225 = c__9840__auto___13223;
var G__13226 = cljs.core.count.call(null,c__9840__auto___13223);
var G__13227 = 0;
seq__13204_13210 = G__13224;
chunk__13205_13211 = G__13225;
count__13206_13212 = G__13226;
i__13207_13213 = G__13227;
continue;
}
} else
{var vec__13209_13228 = cljs.core.first.call(null,seq__13204_13222__$1);
var name_13229 = cljs.core.nth.call(null,vec__13209_13228,0,null);
var value_13230 = cljs.core.nth.call(null,vec__13209_13228,1,null);
domina.set_attr_BANG_.call(null,content,name_13229,value_13230);
{
var G__13231 = cljs.core.next.call(null,seq__13204_13222__$1);
var G__13232 = null;
var G__13233 = 0;
var G__13234 = 0;
seq__13204_13210 = G__13231;
chunk__13205_13211 = G__13232;
count__13206_13212 = G__13233;
i__13207_13213 = G__13234;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var seq__13239_13243 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13240_13244 = null;
var count__13241_13245 = 0;
var i__13242_13246 = 0;
while(true){
if((i__13242_13246 < count__13241_13245))
{var node_13247 = cljs.core._nth.call(null,chunk__13240_13244,i__13242_13246);
goog.dom.classes.add(node_13247,class$);
{
var G__13248 = seq__13239_13243;
var G__13249 = chunk__13240_13244;
var G__13250 = count__13241_13245;
var G__13251 = (i__13242_13246 + 1);
seq__13239_13243 = G__13248;
chunk__13240_13244 = G__13249;
count__13241_13245 = G__13250;
i__13242_13246 = G__13251;
continue;
}
} else
{var temp__4092__auto___13252 = cljs.core.seq.call(null,seq__13239_13243);
if(temp__4092__auto___13252)
{var seq__13239_13253__$1 = temp__4092__auto___13252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13239_13253__$1))
{var c__9840__auto___13254 = cljs.core.chunk_first.call(null,seq__13239_13253__$1);
{
var G__13255 = cljs.core.chunk_rest.call(null,seq__13239_13253__$1);
var G__13256 = c__9840__auto___13254;
var G__13257 = cljs.core.count.call(null,c__9840__auto___13254);
var G__13258 = 0;
seq__13239_13243 = G__13255;
chunk__13240_13244 = G__13256;
count__13241_13245 = G__13257;
i__13242_13246 = G__13258;
continue;
}
} else
{var node_13259 = cljs.core.first.call(null,seq__13239_13253__$1);
goog.dom.classes.add(node_13259,class$);
{
var G__13260 = cljs.core.next.call(null,seq__13239_13253__$1);
var G__13261 = null;
var G__13262 = 0;
var G__13263 = 0;
seq__13239_13243 = G__13260;
chunk__13240_13244 = G__13261;
count__13241_13245 = G__13262;
i__13242_13246 = G__13263;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){
var seq__13268_13272 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13269_13273 = null;
var count__13270_13274 = 0;
var i__13271_13275 = 0;
while(true){
if((i__13271_13275 < count__13270_13274))
{var node_13276 = cljs.core._nth.call(null,chunk__13269_13273,i__13271_13275);
goog.dom.classes.remove(node_13276,class$);
{
var G__13277 = seq__13268_13272;
var G__13278 = chunk__13269_13273;
var G__13279 = count__13270_13274;
var G__13280 = (i__13271_13275 + 1);
seq__13268_13272 = G__13277;
chunk__13269_13273 = G__13278;
count__13270_13274 = G__13279;
i__13271_13275 = G__13280;
continue;
}
} else
{var temp__4092__auto___13281 = cljs.core.seq.call(null,seq__13268_13272);
if(temp__4092__auto___13281)
{var seq__13268_13282__$1 = temp__4092__auto___13281;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13268_13282__$1))
{var c__9840__auto___13283 = cljs.core.chunk_first.call(null,seq__13268_13282__$1);
{
var G__13284 = cljs.core.chunk_rest.call(null,seq__13268_13282__$1);
var G__13285 = c__9840__auto___13283;
var G__13286 = cljs.core.count.call(null,c__9840__auto___13283);
var G__13287 = 0;
seq__13268_13272 = G__13284;
chunk__13269_13273 = G__13285;
count__13270_13274 = G__13286;
i__13271_13275 = G__13287;
continue;
}
} else
{var node_13288 = cljs.core.first.call(null,seq__13268_13282__$1);
goog.dom.classes.remove(node_13288,class$);
{
var G__13289 = cljs.core.next.call(null,seq__13268_13282__$1);
var G__13290 = null;
var G__13291 = 0;
var G__13292 = 0;
seq__13268_13272 = G__13289;
chunk__13269_13273 = G__13290;
count__13270_13274 = G__13291;
i__13271_13275 = G__13292;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){
var classes_13301__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__13297_13302 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13298_13303 = null;
var count__13299_13304 = 0;
var i__13300_13305 = 0;
while(true){
if((i__13300_13305 < count__13299_13304))
{var node_13306 = cljs.core._nth.call(null,chunk__13298_13303,i__13300_13305);
goog.dom.classes.set(node_13306,classes_13301__$1);
{
var G__13307 = seq__13297_13302;
var G__13308 = chunk__13298_13303;
var G__13309 = count__13299_13304;
var G__13310 = (i__13300_13305 + 1);
seq__13297_13302 = G__13307;
chunk__13298_13303 = G__13308;
count__13299_13304 = G__13309;
i__13300_13305 = G__13310;
continue;
}
} else
{var temp__4092__auto___13311 = cljs.core.seq.call(null,seq__13297_13302);
if(temp__4092__auto___13311)
{var seq__13297_13312__$1 = temp__4092__auto___13311;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13297_13312__$1))
{var c__9840__auto___13313 = cljs.core.chunk_first.call(null,seq__13297_13312__$1);
{
var G__13314 = cljs.core.chunk_rest.call(null,seq__13297_13312__$1);
var G__13315 = c__9840__auto___13313;
var G__13316 = cljs.core.count.call(null,c__9840__auto___13313);
var G__13317 = 0;
seq__13297_13302 = G__13314;
chunk__13298_13303 = G__13315;
count__13299_13304 = G__13316;
i__13300_13305 = G__13317;
continue;
}
} else
{var node_13318 = cljs.core.first.call(null,seq__13297_13312__$1);
goog.dom.classes.set(node_13318,classes_13301__$1);
{
var G__13319 = cljs.core.next.call(null,seq__13297_13312__$1);
var G__13320 = null;
var G__13321 = 0;
var G__13322 = 0;
seq__13297_13302 = G__13319;
chunk__13298_13303 = G__13320;
count__13299_13304 = G__13321;
i__13300_13305 = G__13322;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var seq__13327_13331 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13328_13332 = null;
var count__13329_13333 = 0;
var i__13330_13334 = 0;
while(true){
if((i__13330_13334 < count__13329_13333))
{var node_13335 = cljs.core._nth.call(null,chunk__13328_13332,i__13330_13334);
goog.dom.setTextContent(node_13335,value);
{
var G__13336 = seq__13327_13331;
var G__13337 = chunk__13328_13332;
var G__13338 = count__13329_13333;
var G__13339 = (i__13330_13334 + 1);
seq__13327_13331 = G__13336;
chunk__13328_13332 = G__13337;
count__13329_13333 = G__13338;
i__13330_13334 = G__13339;
continue;
}
} else
{var temp__4092__auto___13340 = cljs.core.seq.call(null,seq__13327_13331);
if(temp__4092__auto___13340)
{var seq__13327_13341__$1 = temp__4092__auto___13340;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13327_13341__$1))
{var c__9840__auto___13342 = cljs.core.chunk_first.call(null,seq__13327_13341__$1);
{
var G__13343 = cljs.core.chunk_rest.call(null,seq__13327_13341__$1);
var G__13344 = c__9840__auto___13342;
var G__13345 = cljs.core.count.call(null,c__9840__auto___13342);
var G__13346 = 0;
seq__13327_13331 = G__13343;
chunk__13328_13332 = G__13344;
count__13329_13333 = G__13345;
i__13330_13334 = G__13346;
continue;
}
} else
{var node_13347 = cljs.core.first.call(null,seq__13327_13341__$1);
goog.dom.setTextContent(node_13347,value);
{
var G__13348 = cljs.core.next.call(null,seq__13327_13341__$1);
var G__13349 = null;
var G__13350 = 0;
var G__13351 = 0;
seq__13327_13331 = G__13348;
chunk__13328_13332 = G__13349;
count__13329_13333 = G__13350;
i__13330_13334 = G__13351;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var seq__13356_13360 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13357_13361 = null;
var count__13358_13362 = 0;
var i__13359_13363 = 0;
while(true){
if((i__13359_13363 < count__13358_13362))
{var node_13364 = cljs.core._nth.call(null,chunk__13357_13361,i__13359_13363);
goog.dom.forms.setValue(node_13364,value);
{
var G__13365 = seq__13356_13360;
var G__13366 = chunk__13357_13361;
var G__13367 = count__13358_13362;
var G__13368 = (i__13359_13363 + 1);
seq__13356_13360 = G__13365;
chunk__13357_13361 = G__13366;
count__13358_13362 = G__13367;
i__13359_13363 = G__13368;
continue;
}
} else
{var temp__4092__auto___13369 = cljs.core.seq.call(null,seq__13356_13360);
if(temp__4092__auto___13369)
{var seq__13356_13370__$1 = temp__4092__auto___13369;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13356_13370__$1))
{var c__9840__auto___13371 = cljs.core.chunk_first.call(null,seq__13356_13370__$1);
{
var G__13372 = cljs.core.chunk_rest.call(null,seq__13356_13370__$1);
var G__13373 = c__9840__auto___13371;
var G__13374 = cljs.core.count.call(null,c__9840__auto___13371);
var G__13375 = 0;
seq__13356_13360 = G__13372;
chunk__13357_13361 = G__13373;
count__13358_13362 = G__13374;
i__13359_13363 = G__13375;
continue;
}
} else
{var node_13376 = cljs.core.first.call(null,seq__13356_13370__$1);
goog.dom.forms.setValue(node_13376,value);
{
var G__13377 = cljs.core.next.call(null,seq__13356_13370__$1);
var G__13378 = null;
var G__13379 = 0;
var G__13380 = 0;
seq__13356_13360 = G__13377;
chunk__13357_13361 = G__13378;
count__13358_13362 = G__13379;
i__13359_13363 = G__13380;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);
if(cljs.core.truth_((function (){var and__3941__auto__ = allows_inner_html_QMARK_;
if(and__3941__auto__)
{var and__3941__auto____$1 = (function (){var or__3943__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__3941__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{var value_13391 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__13387_13392 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13388_13393 = null;
var count__13389_13394 = 0;
var i__13390_13395 = 0;
while(true){
if((i__13390_13395 < count__13389_13394))
{var node_13396 = cljs.core._nth.call(null,chunk__13388_13393,i__13390_13395);
goog.events.removeAll(node_13396);
node_13396.innerHTML = value_13391;
{
var G__13397 = seq__13387_13392;
var G__13398 = chunk__13388_13393;
var G__13399 = count__13389_13394;
var G__13400 = (i__13390_13395 + 1);
seq__13387_13392 = G__13397;
chunk__13388_13393 = G__13398;
count__13389_13394 = G__13399;
i__13390_13395 = G__13400;
continue;
}
} else
{var temp__4092__auto___13401 = cljs.core.seq.call(null,seq__13387_13392);
if(temp__4092__auto___13401)
{var seq__13387_13402__$1 = temp__4092__auto___13401;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13387_13402__$1))
{var c__9840__auto___13403 = cljs.core.chunk_first.call(null,seq__13387_13402__$1);
{
var G__13404 = cljs.core.chunk_rest.call(null,seq__13387_13402__$1);
var G__13405 = c__9840__auto___13403;
var G__13406 = cljs.core.count.call(null,c__9840__auto___13403);
var G__13407 = 0;
seq__13387_13392 = G__13404;
chunk__13388_13393 = G__13405;
count__13389_13394 = G__13406;
i__13390_13395 = G__13407;
continue;
}
} else
{var node_13408 = cljs.core.first.call(null,seq__13387_13402__$1);
goog.events.removeAll(node_13408);
node_13408.innerHTML = value_13391;
{
var G__13409 = cljs.core.next.call(null,seq__13387_13402__$1);
var G__13410 = null;
var G__13411 = 0;
var G__13412 = 0;
seq__13387_13392 = G__13409;
chunk__13388_13393 = G__13410;
count__13389_13394 = G__13411;
i__13390_13395 = G__13412;
continue;
}
}
} else
{}
}
break;
}
}catch (e13386){if((e13386 instanceof Error))
{var e_13413 = e13386;
domina.replace_children_BANG_.call(null,content,value_13391);
} else
{if("\uFDD0:else")
{throw e13386;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){
if(cljs.core.string_QMARK_.call(null,inner_content))
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){
return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__3941__auto__ = bubble;
if(cljs.core.truth_(and__3941__auto__))
{return (value == null);
} else
{return and__3941__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;
return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){
var m = (function (){var or__3943__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes.call(null,parent_content);
var children = domina.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__13420_13424 = cljs.core.seq.call(null,children);
var chunk__13421_13425 = null;
var count__13422_13426 = 0;
var i__13423_13427 = 0;
while(true){
if((i__13423_13427 < count__13422_13426))
{var child_13428 = cljs.core._nth.call(null,chunk__13421_13425,i__13423_13427);
frag.appendChild(child_13428);
{
var G__13429 = seq__13420_13424;
var G__13430 = chunk__13421_13425;
var G__13431 = count__13422_13426;
var G__13432 = (i__13423_13427 + 1);
seq__13420_13424 = G__13429;
chunk__13421_13425 = G__13430;
count__13422_13426 = G__13431;
i__13423_13427 = G__13432;
continue;
}
} else
{var temp__4092__auto___13433 = cljs.core.seq.call(null,seq__13420_13424);
if(temp__4092__auto___13433)
{var seq__13420_13434__$1 = temp__4092__auto___13433;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13420_13434__$1))
{var c__9840__auto___13435 = cljs.core.chunk_first.call(null,seq__13420_13434__$1);
{
var G__13436 = cljs.core.chunk_rest.call(null,seq__13420_13434__$1);
var G__13437 = c__9840__auto___13435;
var G__13438 = cljs.core.count.call(null,c__9840__auto___13435);
var G__13439 = 0;
seq__13420_13424 = G__13436;
chunk__13421_13425 = G__13437;
count__13422_13426 = G__13438;
i__13423_13427 = G__13439;
continue;
}
} else
{var child_13440 = cljs.core.first.call(null,seq__13420_13434__$1);
frag.appendChild(child_13440);
{
var G__13441 = cljs.core.next.call(null,seq__13420_13434__$1);
var G__13442 = null;
var G__13443 = 0;
var G__13444 = 0;
seq__13420_13424 = G__13441;
chunk__13421_13425 = G__13442;
count__13422_13426 = G__13443;
i__13423_13427 = G__13444;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__13414_SHARP_,p2__13415_SHARP_){
return f.call(null,p1__13414_SHARP_,p2__13415_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){
if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){
if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){
if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){
var and__3941__auto__ = obj;
if(cljs.core.truth_(and__3941__auto__))
{return obj.length;
} else
{return and__3941__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){
if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__13446 = list_thing;
if(G__13446)
{if((function (){var or__3943__auto__ = (G__13446.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__13446.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__13446.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__13446);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__13446);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if("\uFDD0:default")
{return cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray([list_thing], true));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__13447 = content;
if(G__13447)
{if((function (){var or__3943__auto__ = (G__13447.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__13447.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__13447.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__13447);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__13447);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if("\uFDD0:default")
{return cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray([content], true));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){
if((content == null))
{return null;
} else
{if((function (){var G__13448 = content;
if(G__13448)
{if((function (){var or__3943__auto__ = (G__13448.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__13448.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__13448.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__13448);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__13448);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if("\uFDD0:default")
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
return nodelist.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
return nodelist.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
return domina.lazy_nodelist.call(null,coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
return coll.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
if((coll.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
return coll.length;
});
} else
{}
