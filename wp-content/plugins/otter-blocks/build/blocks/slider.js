!function(){"use strict";var e;e=()=>{const e=setInterval((()=>{void 0!==window?.Glide&&(clearInterval(e),(()=>{const e=document.querySelectorAll(".wp-block-themeisle-blocks-slider"),t={root:null,rootMargin:"0px",threshold:[0]};e.forEach((e=>{const i=e.querySelector(".glide__slides");if(!Boolean(i.childElementCount))return!1;Object.keys(t).map((e=>t[e]=Number(t[e])));const a=new IntersectionObserver((r=>{r.forEach((t=>{if(t.isIntersecting&&0<=t.intersectionRect.height){const t="false"!==e.dataset.autoplay&&("true"===e.dataset.autoplay?2e3:e.dataset.autoplay);if("true"!==e.dataset.hideArrows){const t=document.createElement("div");t.innerHTML='<div class="glide__arrows" data-glide-el="controls"><button class="glide__arrow glide__arrow--left" data-glide-dir="<"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewbox="0 0 100 100" role="img" aria-hidden="true"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path></svg></button><button class="glide__arrow glide__arrow--right" data-glide-dir="&gt;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewbox="0 0 100 100" role="img" aria-hidden="true"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path></svg></button></div>',e.appendChild(t.firstElementChild)}new window.Glide(`#${e.id}`,{...e.dataset,type:"carousel",keyboard:!0,autoplay:t,hoverpause:!0,animationTimingFunc:e.dataset?.transition||"ease",direction:window.themeisleGutenbergSlider.isRTL?"rtl":"ltr",breakpoints:{800:{perView:1,peek:0,gap:0}}}).mount(),i&&(i.style.height=e.dataset.height),a.unobserve(e)}}),t)}));a.observe(e)}))})())}),500)},"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",e):e())}();