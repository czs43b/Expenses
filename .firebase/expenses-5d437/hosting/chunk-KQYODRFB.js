import{Aa as h,E as f,K as s,L as g,S as a,W as o,Wa as v,X as t,Xa as y,Y as d,Ya as e,Za as S,_a as w,ab as x,ba as c,cb as F,db as C,eb as A,fa as r,fb as N,ia as b,v as m,w as p}from"./chunk-LHUEEKJP.js";var E=class l{constructor(u){this.router=u;this.loginForm=this.fb.group({emailAddress:["",[e.minLength(2),e.maxLength(255),e.required]],password:["",[e.minLength(8),e.maxLength(16),e.required]]})}loginForm;fb=m(A);formSubmit=new f;authService=m(v);onSubmit(){this.authService.login(this.loginForm.value.emailAddress,this.loginForm.value.password).then(()=>{this.router.navigate(["./"])}),this.formSubmit.emit()}logOut(){this.authService.logout()}static \u0275fac=function(i){return new(i||l)(g(h))};static \u0275cmp=p({type:l,selectors:[["app-login-form"]],outputs:{formSubmit:"formSubmit"},standalone:!0,features:[b],decls:13,vars:2,consts:[[1,"flex","justify-center","container"],[1,"space-y-4",3,"ngSubmit","formGroup"],[1,"mb-3","row"],["for","emailAddress",1,"block","text-sm","font-medium","text-gray-700"],["type","text","id","emailAddress","formControlName","emailAddress",1,"py-1.5","px-2","mt-1","block","w-full","border","border-gray-300","rounded-md","shadow-sm","focus:ring-indigo-500","focus:border-indigo-500","sm:text-sm"],["for","password",1,"block","text-sm","font-medium","text-gray-700"],["type","password","id","password","formControlName","password",1,"py-1.5","px-2","mt-1","block","w-full","border","border-gray-300","rounded-md","shadow-sm","focus:ring-indigo-500","focus:border-indigo-500","sm:text-sm"],[1,"text-right","row"],["type","submit",1,"disabled:opacity-60","disabled:cursor-not-allowed","disabled:hover:bg-indigo-600","inline-flex","justify-center","py-2","px-4","btn","btn-primary",3,"disabled"]],template:function(i,n){i&1&&(o(0,"div",0)(1,"form",1),c("ngSubmit",function(){return n.onSubmit()}),o(2,"div",2)(3,"label",3),r(4,"Email Address"),t(),d(5,"input",4),t(),o(6,"div",2)(7,"label",5),r(8,"Password"),t(),d(9,"input",6),t(),o(10,"div",7)(11,"button",8),r(12," Login "),t()()()()),i&2&&(s(),a("formGroup",n.loginForm),s(10),a("disabled",!n.loginForm.valid))},dependencies:[N,x,y,S,w,F,C]})};export{E as a};
