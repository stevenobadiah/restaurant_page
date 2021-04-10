(()=>{"use strict";const e=()=>{let e=document.getElementById("dynamicContainer");const t=document.createElement("div");t.id="home",e.appendChild(t);const n=document.createElement("p");n.innerHTML="Psycho Potato is a gourment potato restaurant on the upper east side.",n.id="homeText",t.appendChild(n);const o=document.createElement("img");o.id="imgPotatoe",o.src="images/potato.jpg",t.appendChild(o)},t=()=>{let e=document.getElementById("dynamicContainer");for(;e.firstChild;)e.removeChild(e.lastChild)},n=document.getElementById("content"),o=(()=>{const e=document.createElement("header"),t=document.createElement("h1");t.innerHTML="Psycho Potatoe",t.id="restaurantName";const n=(()=>{const e=document.createElement("nav");let t=document.createElement("button");t.innerHTML="Home",t.id="btnHome";let n=document.createElement("button");n.innerHTML="About",n.id="btnAbout";let o=document.createElement("button");o.innerHTML="Menu",o.id="btnMenu";let d=document.createElement("button");return d.innerHTML="Contact Us",d.id="btnContact",e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(d),e})();return e.appendChild(t),e.appendChild(n),e})();n.appendChild(o);const d=document.createElement("main");n.appendChild(d);const i=document.createElement("div");i.id="dynamicContainer",d.appendChild(i),e();const a=(()=>{const e=document.createElement("footer"),t=document.createElement("p");return t.innerHTML="Book reservations today!",t.id="footerText",e.appendChild(t),e})();n.appendChild(a),document.getElementById("btnHome").onclick=()=>{t(),e()},document.getElementById("btnAbout").onclick=()=>{t(),(()=>{let e=document.getElementById("dynamicContainer");const t=document.createElement("div");t.id="about",e.appendChild(t);const n=document.createElement("p");n.innerHTML="Psycho Potatoe is a killer, potatoe-themed restaurant for those of us who feel the Potatoe Famine is an under-empathized piece of global history. We have something for just about everyone: meat lovers, vegetarians, vegans, the poor, the rich - everyone. The one thing everyone has in common when they walk through our doors: they f'ckin love potatoes.",n.id="aboutText",t.appendChild(n);let o=document.createElement("img");o.id="imgSamwise",o.src="images/samwise.jpg",t.appendChild(o)})()},document.getElementById("btnMenu").onclick=()=>{t(),(()=>{let e=document.getElementById("dynamicContainer");const t=document.createElement("div");t.id="menu",e.appendChild(t);const n=document.createElement("ul");n.id="menuList",t.appendChild(n);const o=document.createElement("li");o.innerHTML="Steak Fries ~ $14",n.appendChild(o);const d=document.createElement("li");d.innerHTML="Cheese Fries ~ $12",n.appendChild(d);const i=document.createElement("li");i.innerHTML="Baked Potatoe ~ $12",n.appendChild(i);const a=document.createElement("li");a.innerHTML="Sweet Potatoe ~ $10",n.appendChild(a);const c=document.createElement("li");c.innerHTML="Potatoe Skins ~ $18",n.appendChild(c);const m=document.createElement("li");m.innerHTML="Herb-Lathered Tiny Potatoes Skins ~ $20",n.appendChild(m);const l=document.createElement("li");l.innerHTML="Genetically-Engineered Giant Potatoe ~ $44",n.appendChild(l);const r=document.createElement("li");r.innerHTML="Gold Potatoe ~ $120",n.appendChild(r)})()},document.getElementById("btnContact").onclick=()=>{t(),(()=>{let e=document.getElementById("dynamicContainer");const t=document.createElement("div");t.id="contact",e.appendChild(t);const n=document.createElement("p");n.innerHTML="Address:",t.appendChild(n);const o=document.createElement("p");o.innerHTML="1561 3rd Ave, New York, NY 10028",o.id="address",t.appendChild(o);const d=document.createElement("p");d.innerHTML="Phone Number:",t.appendChild(d);const i=document.createElement("p");i.innerHTML="(123) 456-7890",i.id="phoneNumber",t.appendChild(i)})()}})();