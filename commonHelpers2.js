import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const o=document.querySelector(".feedback-form"),n={},a=()=>{try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e===null)return;console.log(e);for(const t in e)o.elements[t].value=e[t]}catch(e){console.log(e)}};a();const l=e=>{const{target:t}=e,r=t.name,c=t.value;n[r]=c,console.log(n),localStorage.setItem("feedback-form-state",JSON.stringify(n))},s=e=>{e.preventDefault(),localStorage.removeItem("feedback-form-state"),o.reset()};o.addEventListener("input",l);o.addEventListener("submit",s);
//# sourceMappingURL=commonHelpers2.js.map
