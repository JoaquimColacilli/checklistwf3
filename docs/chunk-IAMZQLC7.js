import{a as U}from"./chunk-6YJAR5JK.js";import{U as O,X as B,_ as S,aa as P,ba as q,n as k,na as C,p as y,pa as H,qa as J,ra as K,sa as Q}from"./chunk-U45EJMGZ.js";import"./chunk-TC6LVV5X.js";import"./chunk-ICTHBN6B.js";import{Bb as G,Cb as W,Ia as c,Ja as F,Nb as R,_a as v,ab as f,bc as j,cc as $,dc as z,gb as n,hb as r,ib as w,ja as V,jb as x,lb as _,mb as l,nb as T,sa as u,sb as I,ta as p,tb as a,ub as E,vb as h,xb as L,yb as M,zb as N}from"./chunk-SLWFH43B.js";import{a as b,b as D,f as g}from"./chunk-XBB5NZD7.js";function Y(s,d){if(s&1&&(n(0,"div",29),a(1),r()),s&2){let o=l().$implicit;c(),h(" ",o.valor," ")}}function Z(s,d){if(s&1){let o=x();n(0,"input",30),N("ngModelChange",function(t){u(o);let i=l().$implicit;return M(i.valor,t)||(i.valor=t),p(t)}),_("blur",function(){u(o);let t=l().index,i=l(2);return p(i.guardarCampo(t))}),r()}if(s&2){let o=l().$implicit;L("ngModel",o.valor)}}function ee(s,d){if(s&1){let o=x();n(0,"tr",22)(1,"td",17),a(2),r(),n(3,"td",23),v(4,Y,2,1,"div",24)(5,Z,1,1,"ng-template",null,0,W),r(),n(7,"td",17)(8,"button",25),_("click",function(){let t=u(o).index,i=l(2);return p(i.editarCampo(t))}),w(9,"i",26),a(10," Editar "),r(),n(11,"button",27),_("click",function(){let t=u(o).index,i=l(2);return p(i.confirmarEliminar(t))}),n(12,"i",28),_("click",function(){let t=u(o).index,i=l(2);return p(i.confirmarEliminar(t))}),r(),a(13," Eliminar "),r()()()}if(s&2){let o=d.$implicit,e=d.index,t=I(6);c(2),h(" ",e+1," "),c(2),f("ngIf",!o.editando)("ngIfElse",t),c(8),T("id","icono-",e,"")}}function te(s,d){if(s&1){let o=x();n(0,"div",12)(1,"div",13)(2,"div",14)(3,"h2",15),a(4," Editar Checklist "),r(),n(5,"table",16)(6,"thead")(7,"tr",9)(8,"th",17),a(9,"ID"),r(),n(10,"th",17),a(11," Campo "),r(),n(12,"th",17),a(13," Acciones "),r()()(),n(14,"tbody"),v(15,ee,14,5,"tr",18),n(16,"tr")(17,"td",19)(18,"button",4),_("click",function(){u(o);let t=l();return p(t.agregarCampo())}),a(19," Agregar Campo "),r()()()()(),n(20,"div",20)(21,"button",21),_("click",function(){u(o);let t=l();return p(t.cerrarModal())}),a(22," Cancelar "),r(),n(23,"button",4),_("click",function(){u(o);let t=l();return p(t.guardarCambios())}),a(24,"Guardar"),r()()()()()}if(s&2){let o=l();c(15),f("ngForOf",o.campos)}}function ie(s,d){if(s&1){let o=x();n(0,"app-nuevo-despliegue",31),_("cerrar",function(){u(o);let t=l();return p(t.cerrarModalNuevoDespliegue())})("guardar",function(t){u(o);let i=l();return p(i.guardarNuevoDespliegue(t,"WF3"))})("editar",function(t){u(o);let i=l();return p(i.editarNuevoDespliegue(t,"WF3"))}),r()}if(s&2){let o=l();f("campos",o.campos)("despliegue",o.esNuevoDespliegue?null:o.despliegueSeleccionado)}}function ne(s,d){if(s&1){let o=x();n(0,"div",12)(1,"div",36)(2,"h2",37),a(3," Confirmar eliminaci\xF3n "),r(),n(4,"p",38),a(5," \xBFEst\xE1 seguro de eliminar el despliegue "),n(6,"strong"),a(7),r(),a(8," de "),n(9,"strong"),a(10),r(),a(11,"? "),r(),n(12,"div",39)(13,"button",3),_("click",function(){u(o);let t=l(2);return p(t.showConfirmDeleteModal=!1)}),a(14," Cancelar "),r(),n(15,"button",4),_("click",function(){u(o);let t=l().index,i=l();return p(i.eliminarDespliegue(t,"WF3"))}),a(16," Eliminar "),r()()()()}if(s&2){let o=l(2);c(7),E(o.deploymentToDelete.tag),c(3),E(o.deploymentToDelete.microservicio)}}function re(s,d){if(s&1){let o=x();n(0,"tr",32)(1,"td",17),a(2),r(),n(3,"td",17),a(4),r(),n(5,"td",17),a(6),r(),n(7,"td",17),a(8),r(),n(9,"td",17),a(10),r(),n(11,"td",17),a(12),r(),n(13,"td",17)(14,"button",33),_("click",function(){let t=u(o).index,i=l();return p(i.editarDespliegue(t))}),w(15,"i",26),r(),n(16,"button",34),_("click",function(){let t=u(o).index,i=l();return p(i.confirmDeleteDeployment(t))}),w(17,"i",35),r()(),v(18,ne,17,2,"div",5),r()}if(s&2){let o=d.$implicit,e=d.index,t=l();c(2),h(" ",e+1," "),c(2),h(" ",o.responsable," "),c(2),h(" ",o.tag," "),c(2),h(" ",o.microservicio," "),c(2),h(" ",o.auditor," "),c(2),h(" ",o.fecha," "),c(6),f("ngIf",t.showConfirmDeleteModal)}}var pe=(()=>{let d=class d{constructor(e){this.cdr=e,this.modalAbierto=!1,this.modalNuevoDespliegueAbierto=!1,this.campos=[],this.datosGuardados=[],this.despliegueSeleccionado=null,this.esNuevoDespliegue=!0,this.deploymentToDelete={auditor:null,checkList:null,fecha:null,id:null,microservicio:null,responsable:null,tag:null},this.showConfirmDeleteModal=!1}ngOnInit(){return g(this,null,function*(){let e="WF3";yield this.cargarDespliegues(e),yield this.cargarDatos(e)})}cargarDatos(e){return g(this,null,function*(){let t=y(k(C,"checklists"),`checklistActas_${e}`),i=yield O(t);if(i.exists()){let m=i.data();m&&"campos"in m&&Array.isArray(m.campos)?(this.campos=m.campos,this.cdr.markForCheck()):console.log("La estructura de datos en Firestore es incorrecta o no contiene campos.")}else console.log("No se encontraron datos en Firestore.")})}cargarDespliegues(e){return g(this,null,function*(){let t=k(C,`nuevosDespliegues_${e}`),i=yield B(t);this.datosGuardados=i.docs.map(m=>b({id:m.id},m.data())),this.cdr.markForCheck()})}abrirModal(){this.modalAbierto=!0}cerrarModal(){this.modalAbierto=!1}agregarCampo(){this.campos.push({valor:"",editando:!0})}confirmarEliminar(e){if(this.campos[e]?.confirmarEliminar)this.eliminarCampo(e);else if(this.campos[e]){this.campos[e].confirmarEliminar=!0;let t=document.getElementById("icono-"+e);t&&t.classList.add("text-red-500"),setTimeout(()=>{t&&t.classList.remove("text-red-500"),this.campos[e]&&(this.campos[e].confirmarEliminar=!1)},3e3)}}guardarCampo(e){this.campos[e].valor.trim()!==""&&(this.campos[e].editando=!1,this.actualizarCampoEnFirestore("WF3"))}actualizarCampoEnFirestore(e){return g(this,null,function*(){let t=y(k(C,"checklists"),`checklistActas_${e}`);try{yield S(t,{campos:this.campos,ambiente:e}),console.log("Cambios guardados en Firestore.")}catch(i){console.error("Error guardando los cambios en Firestore:",i)}})}editarCampo(e){this.campos[e].editando=!0}eliminarCampo(e){this.campos.splice(e,1),this.actualizarCampoEnFirestore("WF3")}guardarCambios(){return g(this,null,function*(){this.campos=this.campos.map((e,t)=>D(b({},e),{id:t+1})),this.cerrarModal(),yield this.actualizarCampoEnFirestore("WF3")})}abrirNuevoDespliegueModal(){this.modalNuevoDespliegueAbierto=!0,this.despliegueSeleccionado=null,this.esNuevoDespliegue=!0}cerrarModalNuevoDespliegue(){this.modalNuevoDespliegueAbierto=!1}guardarNuevoDespliegue(e,t){return g(this,null,function*(){console.log(e);try{let i=k(C,`nuevosDespliegues_${t}`),m=yield q(i,D(b({},e),{ambiente:t}));console.log("Nuevo despliegue guardado con ID: ",m.id),this.datosGuardados.push(D(b({},e),{id:m.id})),this.cdr.markForCheck(),this.cerrarModalNuevoDespliegue()}catch(i){console.error("Error guardando el nuevo despliegue en Firestore:",i)}})}editarNuevoDespliegue(e,t){return g(this,null,function*(){try{let i=y(C,`nuevosDespliegues_${t}`,e.id);yield S(i,e),console.log("Despliegue editado con ID: ",e.id);let m=this.datosGuardados.findIndex(A=>A.id===e.id);m>-1&&(this.datosGuardados[m]=e),this.cdr.markForCheck(),this.cerrarModalNuevoDespliegue()}catch(i){console.error("Error editando el despliegue en Firestore:",i)}})}eliminarDespliegue(e,t){return g(this,null,function*(){try{let i=this.deploymentToDelete.id,m=y(C,`nuevosDespliegues_${t}`,i);yield P(m),this.datosGuardados=this.datosGuardados.filter((A,X)=>X!==e),console.log("Despliegue eliminado con ID: ",i),this.showConfirmDeleteModal=!1,this.cdr.markForCheck()}catch(i){console.error("Error eliminando el despliegue en Firestore:",i)}})}confirmDeleteDeployment(e){this.deploymentToDelete=this.datosGuardados[e],console.log(this.deploymentToDelete.id),this.showConfirmDeleteModal=!0}editarDespliegue(e){let t=this.datosGuardados[e];console.log(t),this.despliegueSeleccionado=t,this.esNuevoDespliegue=!1,console.log(this.despliegueSeleccionado),this.modalNuevoDespliegueAbierto=!0}};d.\u0275fac=function(t){return new(t||d)(F(R))},d.\u0275cmp=V({type:d,selectors:[["app-check-list-actas"]],standalone:!0,features:[G],decls:29,vars:3,consts:[["mostrarValor",""],[1,"font-bold","text-lg","lg:text-3xl","mb-4"],[1,"flex","justify-end","mb-4"],[1,"btn-primary","mr-2",3,"click"],[1,"btn-primary",3,"click"],["class","fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",4,"ngIf"],[3,"campos","despliegue","cerrar","guardar","editar",4,"ngIf"],[1,"overflow-x-auto","mt-4"],[1,"w-full","table-auto","bg-gray-800","rounded-lg","overflow-hidden"],[1,"bg-gray-700","text-white"],[1,"px-4","py-2"],["class","hover:bg-gray-700 transition-colors",4,"ngFor","ngForOf"],[1,"fixed","inset-0","flex","items-center","justify-center","bg-black","bg-opacity-50","z-50"],[1,"bg-gray-900","rounded-lg","w-1/3","max-h-[80%]","max-w-[80%]","overflow-auto","px-3","py-2","scrollbar-thin","scrollbar-thumb-gray-700","scrollbar-track-gray-900","scrollbar-thumb-rounded-full","scrollbar-track-rounded-full"],[1,"modal-content"],[1,"text-2xl","font-bold","text-center","text-white","mb-4"],[1,"w-full","table-auto","bg-gray-800","rounded-lg"],[1,"px-4","py-2","border-b","border-gray-700","text-center"],["class","hover:bg-gray-700 transition-colors","style","height: 50px",4,"ngFor","ngForOf"],["colspan","3",1,"px-4","py-2","text-center"],[1,"flex","justify-end","mt-4"],[1,"btn-primary","mr-1",3,"click"],[1,"hover:bg-gray-700","transition-colors",2,"height","50px"],[1,"px-4","py-2","border-b","border-gray-700","boxPerso"],["class","w-full h-full flex items-center justify-center",4,"ngIf","ngIfElse"],[1,"btn-secondary","mr-2","transition-transform","duration-300","ease-in-out","hover:scale-105",3,"click"],[1,"fas","fa-edit"],[1,"btn-danger","transition-transform","duration-300","ease-in-out","hover:scale-105",3,"click"],[1,"fas","fa-trash-alt",3,"click","id"],[1,"w-full","h-full","flex","items-center","justify-center"],[1,"w-full","rounded-md","text-gray-900","bg-gray-200","border","border-gray-400","focus:outline-none","focus:ring-2","focus:ring-indigo-600",3,"ngModelChange","blur","ngModel"],[3,"cerrar","guardar","editar","campos","despliegue"],[1,"hover:bg-gray-700","transition-colors"],[1,"btn-secondary","transition-transform","duration-300","ease-in-out","hover:scale-105","mr-2",3,"click"],[1,"btn-secondary","transition-transform","duration-300","ease-in-out","hover:scale-105",3,"click"],[1,"fas","fa-trash"],[1,"bg-gray-900","rounded-lg","p-4","max-w-sm"],[1,"text-lg","font-bold","text-center","text-white","mb-3"],[1,"text-gray-300","mb-4","text-center","justify-center"],[1,"flex","justify-end"]],template:function(t,i){t&1&&(n(0,"h1",1),a(1,"WF3 - Actas Digitales"),r(),n(2,"div",2)(3,"button",3),_("click",function(){return i.abrirNuevoDespliegueModal()}),a(4," Nuevo Despliegue "),r(),n(5,"button",4),_("click",function(){return i.abrirModal()}),a(6,"Editar Checklist"),r()(),v(7,te,25,1,"div",5)(8,ie,1,2,"app-nuevo-despliegue",6),n(9,"div",7)(10,"table",8)(11,"thead")(12,"tr",9)(13,"th",10),a(14,"ID"),r(),n(15,"th",10),a(16,"Responsable"),r(),n(17,"th",10),a(18,"Tag"),r(),n(19,"th",10),a(20,"Microservicio"),r(),n(21,"th",10),a(22,"Auditor"),r(),n(23,"th",10),a(24,"Fecha"),r(),n(25,"th",10),a(26,"Acciones"),r()()(),n(27,"tbody"),v(28,re,19,7,"tr",11),r()()()),t&2&&(c(7),f("ngIf",i.modalAbierto),c(),f("ngIf",i.modalNuevoDespliegueAbierto),c(20),f("ngForOf",i.datosGuardados))},dependencies:[z,j,$,Q,H,J,K,U],changeDetection:0});let s=d;return s})();export{pe as default};