import{E as u,K as n,S as s,W as t,Wa as c,X as o,Xa as b,Y as l,Za as g,_a as v,ab as S,ba as p,cb as h,db as y,eb as F,fa as m,fb as x,ia as f,v as i,w as a}from"./chunk-LHUEEKJP.js";import"./chunk-6H46YYVM.js";var C=class d{resetForm;fb=i(F);authService=i(c);formSubmit=new u;constructor(){this.resetForm=this.fb.group({emailAddress:["",[]]})}onSubmit(){this.authService.resetPassword(this.resetForm.value.emailAddress),this.formSubmit.emit()}static \u0275fac=function(e){return new(e||d)};static \u0275cmp=a({type:d,selectors:[["app-reset"]],outputs:{formSubmit:"formSubmit"},standalone:!0,features:[f],decls:9,vars:2,consts:[[1,"flex","justify-center","container"],[1,"space-y-4",3,"ngSubmit","formGroup"],[1,"mb-3","row"],["for","emailAddress",1,"block","text-sm","font-medium","text-gray-700"],["type","text","id","emailAddress","formControlName","emailAddress",1,"py-1.5","px-2","mt-1","block","w-full","border","border-gray-300","rounded-md","shadow-sm","focus:ring-indigo-500","focus:border-indigo-500","sm:text-sm"],[1,"text-right","row"],["type","submit",1,"disabled:opacity-60","disabled:cursor-not-allowed","disabled:hover:bg-indigo-600","inline-flex","justify-center","py-2","px-4","border","border-transparent","shadow-sm","text-sm","font-medium","rounded-md","text-white","bg-indigo-600","hover:bg-indigo-700","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-indigo-500",3,"disabled"]],template:function(e,r){e&1&&(t(0,"div",0)(1,"form",1),p("ngSubmit",function(){return r.onSubmit()}),t(2,"div",2)(3,"label",3),m(4,"Email Address"),o(),l(5,"input",4),o(),t(6,"div",5)(7,"button",6),m(8," Create "),o()()()()),e&2&&(n(),s("formGroup",r.resetForm),n(6),s("disabled",!r.resetForm.valid))},dependencies:[x,S,b,g,v,h,y]})};export{C as ResetComponent};
