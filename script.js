function loco() {
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
loco()
// ------------------- loader-----------------------
var tl10 = gsap.timeline()

function time(){
   var a = 0
   setInterval(function(){
           a = a + Math.floor(Math.random()*25)
          if(a<100){
            document.querySelector("#loader h1").
            innerHTML = a +"%"
          }else{
            a = 100
            document.querySelector("#loader h1").
            innerHTML = a +"%"
          }
   },150) 
}
tl10.to("#loader h1",{
   // scale:1.5,
   delay:0.5,
   duration:1,
   onStart:time(),
})

tl10.to("#loader",{
   top:"-100vh",
   delay:0.3,
   duration:1,
})

// ------------------- menu dom-----------------------
var menu = document.querySelector("#icon")
var cross = document.querySelector("#icon1")
var tl7= gsap.timeline()
tl7.to("#menu",{
  top:"00%",
  duration:0.5,
  scrub:1
})

tl7.from("#first1 h4",{
    opacity:0,
    duration:0.5,
    x:100,
    stagger:0.3
})
tl7.to("#menu-contant h1",{
  opacity:1,
  duration:0.3,
  x:100,
  stagger:0.3
})
tl7.pause()
menu.addEventListener("click",function(){
   tl7.play()
})
cross.addEventListener("click",function(){
    tl7.reverse()
 })
 // ------------------- card text dom-----------------------
var a = document.querySelector("#page7 #card1")
var b = document.querySelector("#page7 #card1 img")
var c = document.querySelector("#page7 #card2")
var d = document.querySelector("#page7 #card2 img")
var tl6= gsap.timeline()
tl6.to("#card1 h1",{
  top:"50%",
  opacity:1,
  duration:0.5,
})
tl6.pause()
a.addEventListener("mouseenter",function(){
  tl6.play()
})
a.addEventListener("mouseleave",function(){
  tl6.reverse()
})
a.addEventListener("mouseenter",function(){
   a.style.backgroundColor = "#29525E";
   a.style.width="750px"
   c.style.width="580px"
   b.style.opacity=0
})
a.addEventListener("mouseleave",function(){
  b.style.opacity=1
  a.style.width="680px"
  c.style.width="640px"
})
var tl8= gsap.timeline()
tl8.to("#card2 h1",{
  top:"50%",
  opacity:1,
  duration:0.5,
})
tl8.pause()
c.addEventListener("mouseenter",function(){
  tl8.play()
})
c.addEventListener("mouseleave",function(){
  tl8.reverse()
})
c.addEventListener("mouseenter",function(){
   c.style.backgroundColor = "#FA5C40";
   a.style.width="630px"
   c.style.width="750px"
   d.style.opacity=0
})
c.addEventListener("mouseleave",function(){
  d.style.opacity=1
  a.style.width="680px"
  c.style.width="640px"
})

                // ------------------- text1-----------------------
var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#text",
        scroller:"#main",
        start:"10% 40%",
        end:"60% 40%",
        pin:'true',
        // markers:true,
        scrub:1,
        stagger:true
    }
})
tl.to("#upper",{
    width:"100%",
    pin:true,
})
tl.to("#upper2",{
    width:"100%",
    pin:true,
})
                   // ------------------- text2-----------------------
var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page4",
        scroller:"#main",
        start:"80% 50%",
        end:"120% 50%",
        pin:'true',
        // markers:true,
        scrub:3,

    }
})
tl3.to("#upper1",{
    width:"100%",
    pin:true,
})
                  // ------------------- circle  -----------------------
var tl1 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        start:"-10% 00%",
        end:"100% 50%",
        pin:true,
        // markers:true,
        scrub:1,
        stagger:true
    }
})
tl1.to("#circle",{
    scale:11,
    duration:10,
    pin:'true',
},"s")
tl1.to("#v1",{
     scale:1,
},"s")
                       // ------------------- swiper js  -----------------------
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      centeredSlides: true,
      spaceBetween: 30,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    // ------------------- canvas text -----------------------
    var tl5 = gsap.timeline({
      scrollTrigger:{
          trigger:"#page5",
          scroller:"#main",
          start:"100% 50%",
          end:"300% 50%",
          // pin:true,
          // markers:true,
          scrub:3,
      }
  })
  tl5.to("#a",{
    opacity:0,
   top:"60%",
  },'a')
  tl5.to("#b",{
    opacity:0,
    top:"140%",
   },'b')
   tl5.to("#c",{
    opacity:0,
    top:"160%",
   },'c')
   // ------------------- footer -----------------------
var tl9 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page10",
        scroller:"#main",
        start:"10% 50%",
        end:"50% 50%",
        // pin:true,
        // markers:true,
        scrub:3,
    }
})
tl9.to("svg",{
  transform: "translate(50%, 10%)",
},)
                       // ------------------- canvas  -----------------------
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
});
 
function files(index) {
    var data = // for online image 
  `./garvit senior canvas/van${index.toString().padStart(5, '0')}.png`;
    return data
  }
const frameCount = 180;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}
console.log(images);

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    // markers:true,
    trigger: `#page5>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `200% top`,
    scroller: `#main`,
    pin:true
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page5",
  scroller:"#main",
  pin: 'true',
  // markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `00% 50%`,
  end: `160% 50%`,
});