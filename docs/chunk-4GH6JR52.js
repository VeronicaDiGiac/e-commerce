import{Jb as e,Ta as o,_ as s}from"./chunk-KH45VKOF.js";var c=class r{items=o([]);cartIsEmpty=e(()=>this.items().length===0);totalCartItems=e(()=>this.items().length);totalCartCost=e(()=>this.items().reduce((t,a)=>t+a.price,0));addToCart(t){this.items().find(i=>i.id===t.id)||this.items.update(i=>[...i,t]),console.log("addotocart chiamata")}removeFromCart(t){this.items.update(a=>a.filter(i=>i.id!==t.id))}clearCart(){this.items.set([])}static \u0275fac=function(a){return new(a||r)};static \u0275prov=s({token:r,factory:r.\u0275fac,providedIn:"root"})};export{c as a};