(()=>{function e(e,t,i){Array.from(e).forEach((e=>{e.addEventListener(t,i)}))}function t(t){let i=t.querySelector(".section__tab_active").dataset.id;const a=t.querySelectorAll(".section__tab"),n=Array.from(a).map((e=>e.dataset.id)),r=t.querySelector(".section__select");function s(e){const a=t.querySelector(`.section__tab[data-id=${e}]`),n=t.querySelector(`.section__panel[data-id=${e}]`),s=t.querySelector(".section__tab_active"),c=t.querySelector(".section__panel:not(.section__panel_hidden)");i=e,s.classList.remove("section__tab_active"),s.setAttribute("aria-selected","false"),s.removeAttribute("tabindex"),a.classList.add("section__tab_active"),a.setAttribute("aria-selected","true"),a.setAttribute("tabindex","0"),a.focus({preventScroll:!0}),c.classList.add("section__panel_hidden"),c.setAttribute("aria-hidden","true"),n.classList.remove("section__panel_hidden"),n.setAttribute("aria-hidden","false"),r.value=e}r.addEventListener("input",(()=>{s(r.value)})),e(a,"click",(e=>{s(e.target.dataset.id)})),e(a,"keydown",(e=>{if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;let t=n.indexOf(i);if(37===e.which)--t;else if(39===e.which)++t;else if(36===e.which)t=0;else{if(35!==e.which)return;t=n.length-1}t>=n.length?t=0:t<0&&(t=n.length-1),s(n[t]),e.preventDefault()}))}document.addEventListener("DOMContentLoaded",(()=>{Array.from(document.querySelectorAll(".main__devices")).forEach(t),function(e){let t=!1;const i=document.querySelector(".header__links");e.addEventListener("click",(()=>{t=!t,e.setAttribute("aria-expanded",t?"true":"false"),i.classList.toggle("header__links_opened",t),i.classList.add("header__links-toggled")}))}(document.querySelector(".header__menu"))}))})();