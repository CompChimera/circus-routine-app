import{u as i,c as s,e as t,t as m,a as e,F as u,f as c,o as a,i as d}from"./index-CeOzVH1C.js";import{_ as l}from"./MoveCard-BqYZ19uV.js";import{u as _}from"./MoveCard.vue_vue_type_style_index_0_lang-gjAX6ghE.js";import{g as f}from"./useApparatus-BM6ZtZ3V.js";const g={key:1},v=t("p",null,"There are no moves yet for this apparatus. Time to add some!",-1),I={__name:"ApparatusSinglePage",props:["id"],setup(h){const o=i(),r=_(o.params.id),n=f(o.params.id);return(k,y)=>(a(),s(u,null,[t("h2",null,"Apparatus page - "+m(e(n).name),1),e(r).length>0?(a(!0),s(u,{key:0},c(e(r),p=>(a(),d(l,{moveId:p.id,key:`move=${p.id}`},null,8,["moveId"]))),128)):(a(),s("div",g,[v,t("div",null," Form to add move for "+m(e(n).name),1)]))],64))}};export{I as default};
