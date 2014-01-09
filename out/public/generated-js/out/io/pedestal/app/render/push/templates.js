goog.provide('io.pedestal.app.render.push.templates');
goog.require('cljs.core');
goog.require('domina');
goog.require('io.pedestal.app.render.push');
io.pedestal.app.render.push.templates.sibling = (function sibling(path,segment){
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.butlast.call(null,path)),segment);
});
io.pedestal.app.render.push.templates.parent = (function parent(path){
return cljs.core.vec.call(null,cljs.core.butlast.call(null,path));
});
io.pedestal.app.render.push.templates.update_template = (function update_template(t,m){
var seq__12842 = cljs.core.seq.call(null,t);
var chunk__12847 = null;
var count__12848 = 0;
var i__12849 = 0;
while(true){
if((i__12849 < count__12848))
{var vec__12854 = cljs.core._nth.call(null,chunk__12847,i__12849);
var k = cljs.core.nth.call(null,vec__12854,0,null);
var v = cljs.core.nth.call(null,vec__12854,1,null);
var seq__12850_12864 = cljs.core.seq.call(null,v);
var chunk__12851_12865 = null;
var count__12852_12866 = 0;
var i__12853_12867 = 0;
while(true){
if((i__12853_12867 < count__12852_12866))
{var map__12855_12868 = cljs.core._nth.call(null,chunk__12851_12865,i__12853_12867);
var map__12855_12869__$1 = ((cljs.core.seq_QMARK_.call(null,map__12855_12868))?cljs.core.apply.call(null,cljs.core.hash_map,map__12855_12868):map__12855_12868);
var attr_name_12870 = cljs.core.get.call(null,map__12855_12869__$1,"\uFDD0:attr-name");
var type_12871 = cljs.core.get.call(null,map__12855_12869__$1,"\uFDD0:type");
var id_12872 = cljs.core.get.call(null,map__12855_12869__$1,"\uFDD0:id");
var G__12856_12873 = type_12871;
if(cljs.core._EQ_.call(null,"\uFDD0:content",G__12856_12873))
{if(cljs.core.contains_QMARK_.call(null,m,k))
{domina.set_html_BANG_.call(null,domina.by_id.call(null,id_12872),cljs.core.get.call(null,m,k));
} else
{}
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:attr",G__12856_12873))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_.call(null,m,k);
if(and__3941__auto__)
{return (cljs.core.get.call(null,m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_.call(null,domina.by_id.call(null,id_12872),attr_name_12870);
} else
{if(cljs.core.contains_QMARK_.call(null,m,k))
{domina.set_attrs_BANG_.call(null,domina.by_id.call(null,id_12872),cljs.core.PersistentArrayMap.fromArray([attr_name_12870,cljs.core.get.call(null,m,k)], true));
} else
{}
}
} else
{if("\uFDD0:else")
{} else
{}
}
}
{
var G__12874 = seq__12850_12864;
var G__12875 = chunk__12851_12865;
var G__12876 = count__12852_12866;
var G__12877 = (i__12853_12867 + 1);
seq__12850_12864 = G__12874;
chunk__12851_12865 = G__12875;
count__12852_12866 = G__12876;
i__12853_12867 = G__12877;
continue;
}
} else
{var temp__4092__auto___12878 = cljs.core.seq.call(null,seq__12850_12864);
if(temp__4092__auto___12878)
{var seq__12850_12879__$1 = temp__4092__auto___12878;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12850_12879__$1))
{var c__9840__auto___12880 = cljs.core.chunk_first.call(null,seq__12850_12879__$1);
{
var G__12881 = cljs.core.chunk_rest.call(null,seq__12850_12879__$1);
var G__12882 = c__9840__auto___12880;
var G__12883 = cljs.core.count.call(null,c__9840__auto___12880);
var G__12884 = 0;
seq__12850_12864 = G__12881;
chunk__12851_12865 = G__12882;
count__12852_12866 = G__12883;
i__12853_12867 = G__12884;
continue;
}
} else
{var map__12857_12885 = cljs.core.first.call(null,seq__12850_12879__$1);
var map__12857_12886__$1 = ((cljs.core.seq_QMARK_.call(null,map__12857_12885))?cljs.core.apply.call(null,cljs.core.hash_map,map__12857_12885):map__12857_12885);
var attr_name_12887 = cljs.core.get.call(null,map__12857_12886__$1,"\uFDD0:attr-name");
var type_12888 = cljs.core.get.call(null,map__12857_12886__$1,"\uFDD0:type");
var id_12889 = cljs.core.get.call(null,map__12857_12886__$1,"\uFDD0:id");
var G__12858_12890 = type_12888;
if(cljs.core._EQ_.call(null,"\uFDD0:content",G__12858_12890))
{if(cljs.core.contains_QMARK_.call(null,m,k))
{domina.set_html_BANG_.call(null,domina.by_id.call(null,id_12889),cljs.core.get.call(null,m,k));
} else
{}
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:attr",G__12858_12890))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_.call(null,m,k);
if(and__3941__auto__)
{return (cljs.core.get.call(null,m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_.call(null,domina.by_id.call(null,id_12889),attr_name_12887);
} else
{if(cljs.core.contains_QMARK_.call(null,m,k))
{domina.set_attrs_BANG_.call(null,domina.by_id.call(null,id_12889),cljs.core.PersistentArrayMap.fromArray([attr_name_12887,cljs.core.get.call(null,m,k)], true));
} else
{}
}
} else
{if("\uFDD0:else")
{} else
{}
}
}
{
var G__12891 = cljs.core.next.call(null,seq__12850_12879__$1);
var G__12892 = null;
var G__12893 = 0;
var G__12894 = 0;
seq__12850_12864 = G__12891;
chunk__12851_12865 = G__12892;
count__12852_12866 = G__12893;
i__12853_12867 = G__12894;
continue;
}
}
} else
{}
}
break;
}
{
var G__12895 = seq__12842;
var G__12896 = chunk__12847;
var G__12897 = count__12848;
var G__12898 = (i__12849 + 1);
seq__12842 = G__12895;
chunk__12847 = G__12896;
count__12848 = G__12897;
i__12849 = G__12898;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12842);
if(temp__4092__auto__)
{var seq__12842__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12842__$1))
{var c__9840__auto__ = cljs.core.chunk_first.call(null,seq__12842__$1);
{
var G__12899 = cljs.core.chunk_rest.call(null,seq__12842__$1);
var G__12900 = c__9840__auto__;
var G__12901 = cljs.core.count.call(null,c__9840__auto__);
var G__12902 = 0;
seq__12842 = G__12899;
chunk__12847 = G__12900;
count__12848 = G__12901;
i__12849 = G__12902;
continue;
}
} else
{var vec__12859 = cljs.core.first.call(null,seq__12842__$1);
var k = cljs.core.nth.call(null,vec__12859,0,null);
var v = cljs.core.nth.call(null,vec__12859,1,null);
var seq__12843_12903 = cljs.core.seq.call(null,v);
var chunk__12844_12904 = null;
var count__12845_12905 = 0;
var i__12846_12906 = 0;
while(true){
if((i__12846_12906 < count__12845_12905))
{var map__12860_12907 = cljs.core._nth.call(null,chunk__12844_12904,i__12846_12906);
var map__12860_12908__$1 = ((cljs.core.seq_QMARK_.call(null,map__12860_12907))?cljs.core.apply.call(null,cljs.core.hash_map,map__12860_12907):map__12860_12907);
var attr_name_12909 = cljs.core.get.call(null,map__12860_12908__$1,"\uFDD0:attr-name");
var type_12910 = cljs.core.get.call(null,map__12860_12908__$1,"\uFDD0:type");
var id_12911 = cljs.core.get.call(null,map__12860_12908__$1,"\uFDD0:id");
var G__12861_12912 = type_12910;
if(cljs.core._EQ_.call(null,"\uFDD0:content",G__12861_12912))
{if(cljs.core.contains_QMARK_.call(null,m,k))
{domina.set_html_BANG_.call(null,domina.by_id.call(null,id_12911),cljs.core.get.call(null,m,k));
} else
{}
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:attr",G__12861_12912))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_.call(null,m,k);
if(and__3941__auto__)
{return (cljs.core.get.call(null,m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_.call(null,domina.by_id.call(null,id_12911),attr_name_12909);
} else
{if(cljs.core.contains_QMARK_.call(null,m,k))
{domina.set_attrs_BANG_.call(null,domina.by_id.call(null,id_12911),cljs.core.PersistentArrayMap.fromArray([attr_name_12909,cljs.core.get.call(null,m,k)], true));
} else
{}
}
} else
{if("\uFDD0:else")
{} else
{}
}
}
{
var G__12913 = seq__12843_12903;
var G__12914 = chunk__12844_12904;
var G__12915 = count__12845_12905;
var G__12916 = (i__12846_12906 + 1);
seq__12843_12903 = G__12913;
chunk__12844_12904 = G__12914;
count__12845_12905 = G__12915;
i__12846_12906 = G__12916;
continue;
}
} else
{var temp__4092__auto___12917__$1 = cljs.core.seq.call(null,seq__12843_12903);
if(temp__4092__auto___12917__$1)
{var seq__12843_12918__$1 = temp__4092__auto___12917__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12843_12918__$1))
{var c__9840__auto___12919 = cljs.core.chunk_first.call(null,seq__12843_12918__$1);
{
var G__12920 = cljs.core.chunk_rest.call(null,seq__12843_12918__$1);
var G__12921 = c__9840__auto___12919;
var G__12922 = cljs.core.count.call(null,c__9840__auto___12919);
var G__12923 = 0;
seq__12843_12903 = G__12920;
chunk__12844_12904 = G__12921;
count__12845_12905 = G__12922;
i__12846_12906 = G__12923;
continue;
}
} else
{var map__12862_12924 = cljs.core.first.call(null,seq__12843_12918__$1);
var map__12862_12925__$1 = ((cljs.core.seq_QMARK_.call(null,map__12862_12924))?cljs.core.apply.call(null,cljs.core.hash_map,map__12862_12924):map__12862_12924);
var attr_name_12926 = cljs.core.get.call(null,map__12862_12925__$1,"\uFDD0:attr-name");
var type_12927 = cljs.core.get.call(null,map__12862_12925__$1,"\uFDD0:type");
var id_12928 = cljs.core.get.call(null,map__12862_12925__$1,"\uFDD0:id");
var G__12863_12929 = type_12927;
if(cljs.core._EQ_.call(null,"\uFDD0:content",G__12863_12929))
{if(cljs.core.contains_QMARK_.call(null,m,k))
{domina.set_html_BANG_.call(null,domina.by_id.call(null,id_12928),cljs.core.get.call(null,m,k));
} else
{}
} else
{if(cljs.core._EQ_.call(null,"\uFDD0:attr",G__12863_12929))
{if((function (){var and__3941__auto__ = cljs.core.contains_QMARK_.call(null,m,k);
if(and__3941__auto__)
{return (cljs.core.get.call(null,m,k) == null);
} else
{return and__3941__auto__;
}
})())
{domina.remove_attr_BANG_.call(null,domina.by_id.call(null,id_12928),attr_name_12926);
} else
{if(cljs.core.contains_QMARK_.call(null,m,k))
{domina.set_attrs_BANG_.call(null,domina.by_id.call(null,id_12928),cljs.core.PersistentArrayMap.fromArray([attr_name_12926,cljs.core.get.call(null,m,k)], true));
} else
{}
}
} else
{if("\uFDD0:else")
{} else
{}
}
}
{
var G__12930 = cljs.core.next.call(null,seq__12843_12918__$1);
var G__12931 = null;
var G__12932 = 0;
var G__12933 = 0;
seq__12843_12903 = G__12930;
chunk__12844_12904 = G__12931;
count__12845_12905 = G__12932;
i__12846_12906 = G__12933;
continue;
}
}
} else
{}
}
break;
}
{
var G__12934 = cljs.core.next.call(null,seq__12842__$1);
var G__12935 = null;
var G__12936 = 0;
var G__12937 = 0;
seq__12842 = G__12934;
chunk__12847 = G__12935;
count__12848 = G__12936;
i__12849 = G__12937;
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
io.pedestal.app.render.push.templates.add_in_template = (function add_in_template(f,t,m){
var seq__12952 = cljs.core.seq.call(null,m);
var chunk__12953 = null;
var count__12954 = 0;
var i__12955 = 0;
while(true){
if((i__12955 < count__12954))
{var vec__12956 = cljs.core._nth.call(null,chunk__12953,i__12955);
var k = cljs.core.nth.call(null,vec__12956,0,null);
var v = cljs.core.nth.call(null,vec__12956,1,null);
if(cljs.core.every_QMARK_.call(null,((function (seq__12952,chunk__12953,count__12954,i__12955,vec__12956,k,v){
return (function (info){
return cljs.core._EQ_.call(null,"\uFDD0:content",(new cljs.core.Keyword("\uFDD0:type")).call(null,info));
});})(seq__12952,chunk__12953,count__12954,i__12955,vec__12956,k,v))
,cljs.core.get.call(null,t,k)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("You may only add to content"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"info","info",-1637294489,null)], true),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"\uFDD0:content",cljs.core.list("\uFDD0:type",new cljs.core.Symbol(null,"info","info",-1637294489,null)))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-1640429297,null),new cljs.core.Symbol(null,"t","t",-1640531411,null),new cljs.core.Symbol(null,"k","k",-1640531420,null)))))].join('')));
}
if(cljs.core.contains_QMARK_.call(null,t,k))
{var seq__12957_12966 = cljs.core.seq.call(null,cljs.core.get.call(null,t,k));
var chunk__12958_12967 = null;
var count__12959_12968 = 0;
var i__12960_12969 = 0;
while(true){
if((i__12960_12969 < count__12959_12968))
{var info_12970 = cljs.core._nth.call(null,chunk__12958_12967,i__12960_12969);
f.call(null,domina.by_id.call(null,(new cljs.core.Keyword("\uFDD0:id")).call(null,info_12970)),v);
{
var G__12971 = seq__12957_12966;
var G__12972 = chunk__12958_12967;
var G__12973 = count__12959_12968;
var G__12974 = (i__12960_12969 + 1);
seq__12957_12966 = G__12971;
chunk__12958_12967 = G__12972;
count__12959_12968 = G__12973;
i__12960_12969 = G__12974;
continue;
}
} else
{var temp__4092__auto___12975 = cljs.core.seq.call(null,seq__12957_12966);
if(temp__4092__auto___12975)
{var seq__12957_12976__$1 = temp__4092__auto___12975;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12957_12976__$1))
{var c__9840__auto___12977 = cljs.core.chunk_first.call(null,seq__12957_12976__$1);
{
var G__12978 = cljs.core.chunk_rest.call(null,seq__12957_12976__$1);
var G__12979 = c__9840__auto___12977;
var G__12980 = cljs.core.count.call(null,c__9840__auto___12977);
var G__12981 = 0;
seq__12957_12966 = G__12978;
chunk__12958_12967 = G__12979;
count__12959_12968 = G__12980;
i__12960_12969 = G__12981;
continue;
}
} else
{var info_12982 = cljs.core.first.call(null,seq__12957_12976__$1);
f.call(null,domina.by_id.call(null,(new cljs.core.Keyword("\uFDD0:id")).call(null,info_12982)),v);
{
var G__12983 = cljs.core.next.call(null,seq__12957_12976__$1);
var G__12984 = null;
var G__12985 = 0;
var G__12986 = 0;
seq__12957_12966 = G__12983;
chunk__12958_12967 = G__12984;
count__12959_12968 = G__12985;
i__12960_12969 = G__12986;
continue;
}
}
} else
{}
}
break;
}
} else
{}
{
var G__12987 = seq__12952;
var G__12988 = chunk__12953;
var G__12989 = count__12954;
var G__12990 = (i__12955 + 1);
seq__12952 = G__12987;
chunk__12953 = G__12988;
count__12954 = G__12989;
i__12955 = G__12990;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12952);
if(temp__4092__auto__)
{var seq__12952__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12952__$1))
{var c__9840__auto__ = cljs.core.chunk_first.call(null,seq__12952__$1);
{
var G__12991 = cljs.core.chunk_rest.call(null,seq__12952__$1);
var G__12992 = c__9840__auto__;
var G__12993 = cljs.core.count.call(null,c__9840__auto__);
var G__12994 = 0;
seq__12952 = G__12991;
chunk__12953 = G__12992;
count__12954 = G__12993;
i__12955 = G__12994;
continue;
}
} else
{var vec__12961 = cljs.core.first.call(null,seq__12952__$1);
var k = cljs.core.nth.call(null,vec__12961,0,null);
var v = cljs.core.nth.call(null,vec__12961,1,null);
if(cljs.core.every_QMARK_.call(null,((function (seq__12952,chunk__12953,count__12954,i__12955,vec__12961,k,v,seq__12952__$1,temp__4092__auto__){
return (function (info){
return cljs.core._EQ_.call(null,"\uFDD0:content",(new cljs.core.Keyword("\uFDD0:type")).call(null,info));
});})(seq__12952,chunk__12953,count__12954,i__12955,vec__12961,k,v,seq__12952__$1,temp__4092__auto__))
,cljs.core.get.call(null,t,k)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("You may only add to content"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"info","info",-1637294489,null)], true),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"\uFDD0:content",cljs.core.list("\uFDD0:type",new cljs.core.Symbol(null,"info","info",-1637294489,null)))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-1640429297,null),new cljs.core.Symbol(null,"t","t",-1640531411,null),new cljs.core.Symbol(null,"k","k",-1640531420,null)))))].join('')));
}
if(cljs.core.contains_QMARK_.call(null,t,k))
{var seq__12962_12995 = cljs.core.seq.call(null,cljs.core.get.call(null,t,k));
var chunk__12963_12996 = null;
var count__12964_12997 = 0;
var i__12965_12998 = 0;
while(true){
if((i__12965_12998 < count__12964_12997))
{var info_12999 = cljs.core._nth.call(null,chunk__12963_12996,i__12965_12998);
f.call(null,domina.by_id.call(null,(new cljs.core.Keyword("\uFDD0:id")).call(null,info_12999)),v);
{
var G__13000 = seq__12962_12995;
var G__13001 = chunk__12963_12996;
var G__13002 = count__12964_12997;
var G__13003 = (i__12965_12998 + 1);
seq__12962_12995 = G__13000;
chunk__12963_12996 = G__13001;
count__12964_12997 = G__13002;
i__12965_12998 = G__13003;
continue;
}
} else
{var temp__4092__auto___13004__$1 = cljs.core.seq.call(null,seq__12962_12995);
if(temp__4092__auto___13004__$1)
{var seq__12962_13005__$1 = temp__4092__auto___13004__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12962_13005__$1))
{var c__9840__auto___13006 = cljs.core.chunk_first.call(null,seq__12962_13005__$1);
{
var G__13007 = cljs.core.chunk_rest.call(null,seq__12962_13005__$1);
var G__13008 = c__9840__auto___13006;
var G__13009 = cljs.core.count.call(null,c__9840__auto___13006);
var G__13010 = 0;
seq__12962_12995 = G__13007;
chunk__12963_12996 = G__13008;
count__12964_12997 = G__13009;
i__12965_12998 = G__13010;
continue;
}
} else
{var info_13011 = cljs.core.first.call(null,seq__12962_13005__$1);
f.call(null,domina.by_id.call(null,(new cljs.core.Keyword("\uFDD0:id")).call(null,info_13011)),v);
{
var G__13012 = cljs.core.next.call(null,seq__12962_13005__$1);
var G__13013 = null;
var G__13014 = 0;
var G__13015 = 0;
seq__12962_12995 = G__13012;
chunk__12963_12996 = G__13013;
count__12964_12997 = G__13014;
i__12965_12998 = G__13015;
continue;
}
}
} else
{}
}
break;
}
} else
{}
{
var G__13016 = cljs.core.next.call(null,seq__12952__$1);
var G__13017 = null;
var G__13018 = 0;
var G__13019 = 0;
seq__12952 = G__13016;
chunk__12953 = G__13017;
count__12954 = G__13018;
i__12955 = G__13019;
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
io.pedestal.app.render.push.templates.update_t = (function update_t(r,path,data){
var template = io.pedestal.app.render.push.get_data.call(null,r,cljs.core.conj.call(null,path,"\uFDD0:io.pedestal.app.render.push.templates/template"));
return io.pedestal.app.render.push.templates.update_template.call(null,template,data);
});
io.pedestal.app.render.push.templates.prepend_t = (function prepend_t(r,path,data){
var template = io.pedestal.app.render.push.get_data.call(null,r,cljs.core.conj.call(null,path,"\uFDD0:io.pedestal.app.render.push.templates/template"));
return io.pedestal.app.render.push.templates.add_in_template.call(null,domina.prepend_BANG_,template,data);
});
io.pedestal.app.render.push.templates.insert_t = (function insert_t(r,path,data,idx){
var template = io.pedestal.app.render.push.get_data.call(null,r,cljs.core.conj.call(null,path,"\uFDD0:io.pedestal.app.render.push.templates/template"));
return io.pedestal.app.render.push.templates.add_in_template.call(null,(function (p1__13020_SHARP_,p2__13021_SHARP_){
return domina.insert_BANG_.call(null,p1__13020_SHARP_,p2__13021_SHARP_,idx);
}),template,data);
});
io.pedestal.app.render.push.templates.append_t = (function append_t(r,path,data){
var template = io.pedestal.app.render.push.get_data.call(null,r,cljs.core.conj.call(null,path,"\uFDD0:io.pedestal.app.render.push.templates/template"));
return io.pedestal.app.render.push.templates.add_in_template.call(null,domina.append_BANG_,template,data);
});
io.pedestal.app.render.push.templates.update_parent_t = (function update_parent_t(r,path,data){
var template = io.pedestal.app.render.push.get_data.call(null,r,cljs.core.conj.call(null,io.pedestal.app.render.push.templates.parent.call(null,path),"\uFDD0:io.pedestal.app.render.push.templates/template"));
return io.pedestal.app.render.push.templates.update_template.call(null,template,data);
});
io.pedestal.app.render.push.templates.add_template = (function add_template(r,path,make_template){
var vec__13023 = make_template.call(null);
var template = cljs.core.nth.call(null,vec__13023,0,null);
var html = cljs.core.nth.call(null,vec__13023,1,null);
io.pedestal.app.render.push.set_data_BANG_.call(null,r,cljs.core.conj.call(null,path,"\uFDD0:io.pedestal.app.render.push.templates/template"),template);
return html;
});
