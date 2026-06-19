```javascript
/* =====================================
   AI SKILLS HUB - MAIN JAVASCRIPT
===================================== */

/* NAVBAR SCROLL EFFECT */

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.background =
"rgba(2,6,23,0.95)";

navbar.style.boxShadow =
"0 10px 30px rgba(0,0,0,.3)";

}else{

navbar.style.background =
"rgba(15,23,42,.85)";

navbar.style.boxShadow = "none";

}

});


/* =====================================
   FAQ ACCORDION
===================================== */

const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

const answer =
item.querySelector("p");

answer.style.display = "none";

item.addEventListener("click", () => {

const isOpen =
answer.style.display === "block";

faqItems.forEach(i => {

i.querySelector("p").style.display =
"none";

});

if(!isOpen){

answer.style.display = "block";

}

});

});


/* =====================================
   COUNTER ANIMATION
===================================== */

const counters =
document.querySelectorAll(".hero-stats h3");

counters.forEach(counter => {

const updateCounter = () => {

const target =
counter.innerText;

if(target.includes("10K")){

let count = +counter.getAttribute("data-count") || 0;

if(count < 10000){

count += 250;

counter.setAttribute("data-count", count);

counter.innerText =
Math.floor(count/1000) + "K+";

requestAnimationFrame(updateCounter);

}else{

counter.innerText = "10K+";

}

}

if(target.includes("5K")){

let count = +counter.getAttribute("data-count") || 0;

if(count < 5000){

count += 100;

counter.setAttribute("data-count", count);

counter.innerText =
Math.floor(count/1000) + "K+";

requestAnimationFrame(updateCounter);

}else{

counter.innerText = "5K+";

}

}

};

updateCounter();

});


/* =====================================
   SCROLL TO TOP BUTTON
===================================== */

const scrollBtn =
document.createElement("button");

scrollBtn.innerHTML =
"↑";

scrollBtn.classList.add("scroll-top");

document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.right = "25px";
scrollBtn.style.bottom = "25px";
scrollBtn.style.width = "50px";
scrollBtn.style.height = "50px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.background =
"#6366f1";
scrollBtn.style.color = "#fff";
scrollBtn.style.fontSize = "22px";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

if(window.scrollY > 500){

scrollBtn.style.display = "block";

}else{

scrollBtn.style.display = "none";

}

});

scrollBtn.addEventListener("click", () => {

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/* =====================================
   PRODUCT SEARCH
===================================== */

const searchContainer =
document.createElement("div");

searchContainer.innerHTML =

`
<input
type="text"
id="productSearch"
placeholder="Search ebooks or courses..."
style="
padding:15px;
width:350px;
max-width:90%;
border:none;
border-radius:10px;
margin-bottom:40px;
background:#111827;
color:white;
">
`;

const productSection =
document.querySelector(".products");

if(productSection){

productSection.insertBefore(
searchContainer,
productSection.querySelector(".product-grid")
);

}

const searchInput =
document.getElementById("productSearch");

if(searchInput){

searchInput.addEventListener("keyup", () => {

const filter =
searchInput.value.toLowerCase();

const cards =
document.querySelectorAll(
".product-card,.course-card"
);

cards.forEach(card => {

const text =
card.innerText.toLowerCase();

card.style.display =
text.includes(filter)
? "block"
: "none";

});

});

}


/* =====================================
   TESTIMONIAL AUTO SLIDER
===================================== */

const testimonials =
document.querySelectorAll(".testimonial");

let testimonialIndex = 0;

function rotateTestimonials(){

testimonials.forEach(item => {

item.style.display = "none";

});

testimonialIndex++;

if(
testimonialIndex > testimonials.length
){

testimonialIndex = 1;

}

testimonials[
testimonialIndex - 1
].style.display = "block";

setTimeout(
rotateTestimonials,
4000
);

}

if(testimonials.length > 0){

rotateTestimonials();

}


/* =====================================
   IMAGE HOVER EFFECT
===================================== */

const portfolioImages =
document.querySelectorAll(
".portfolio-grid img"
);

portfolioImages.forEach(img => {

img.addEventListener(
"mouseenter",
() => {

img.style.transform =
"scale(1.08)";

}
);

img.addEventListener(
"mouseleave",
() => {

img.style.transform =
"scale(1)";

}
);

});


/* =====================================
   BUTTON RIPPLE EFFECT
===================================== */

const buttons =
document.querySelectorAll(
".btn-primary,.buy-btn"
);

buttons.forEach(button => {

button.addEventListener(
"click",
function(e){

const circle =
document.createElement("span");

const diameter =
Math.max(
button.clientWidth,
button.clientHeight
);

circle.style.width =
circle.style.height =
`${diameter}px`;

circle.style.position =
"absolute";

circle.style.borderRadius =
"50%";

circle.style.background =
"rgba(255,255,255,.4)";

circle.style.left =
`${e.offsetX}px`;

circle.style.top =
`${e.offsetY}px`;

circle.style.transform =
"translate(-50%,-50%)";

circle.style.pointerEvents =
"none";

button.appendChild(circle);

setTimeout(() => {

circle.remove();

},600);

}
);

});


/* =====================================
   LOADING SCREEN
===================================== */

window.addEventListener("load", () => {

const loader =
document.createElement("div");

loader.id = "loader";

loader.innerHTML =
`
<div class="loader-spinner"></div>
`;

loader.style.position = "fixed";
loader.style.top = "0";
loader.style.left = "0";
loader.style.width = "100%";
loader.style.height = "100%";
loader.style.background = "#0b0f19";
loader.style.display = "flex";
loader.style.alignItems = "center";
loader.style.justifyContent = "center";
loader.style.zIndex = "99999";

document.body.appendChild(loader);

setTimeout(() => {

loader.style.opacity = "0";

setTimeout(() => {

loader.remove();

},500);

},1000);

});


/* =====================================
   CONSOLE MESSAGE
===================================== */

console.log(
"AI Skills Hub Loaded Successfully 🚀"
);
```

