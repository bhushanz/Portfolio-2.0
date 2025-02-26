
window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.refresh();
});

function locomotion(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
function infiLoader(){
  window.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
   gsap.to('nav',{
    y: "-100%", // Using `x` instead of `transform` for better GSAP compatibility
    duration: .3, // Corrected from `durations`
    ease: "none",
    overwrite: true 
   })
  
  
      gsap.to(".movein", {
        x: "-200%", // Using `x` instead of `transform` for better GSAP compatibility
        duration: 4, // Corrected from `durations`
        ease: "none",
        overwrite: true // Prevents animation conflicts
      });
      gsap.to(".movein img",{
        rotate:180
      })
    } else {
  
      gsap.to("nav", {
        y: "0%", // Move back to original position
        duration: .3,
        ease: "none",
        overwrite: true
      })
  
  
  
      gsap.to(".movein", {
        x: "0%", // Move back to original position
        duration: 5,
        ease: "none",
        overwrite: true
      })
      gsap.to(".movein img",{
        rotate:0
      })
    }
  });


  let touchStartY = 0; // Stores touch start position

  // ✅ Desktop Scroll (Mouse Wheel)
  window.addEventListener("wheel", function (event) {
    if (event.deltaY > 0) {
      hideNav();
    } else {
      showNav();
    }
  });

  // ✅ Mobile Scroll (Touch Gestures)
  window.addEventListener("touchstart", function (event) {
    touchStartY = event.touches[0].clientY; // Get initial touch position
  });

  window.addEventListener("touchmove", function (event) {
    let touchEndY = event.touches[0].clientY; // Get touch position when moving

    if (touchStartY > touchEndY + 20) { // Scroll Down
      hideNav();
    } else if (touchStartY < touchEndY - 20) { // Scroll Up
      showNav();
    }
  });

  function hideNav() {
    gsap.to('nav', { y: "-100%", duration: .3, ease: "none", overwrite: true });
    gsap.to(".movein", { x: "-200%", duration: 4, ease: "none", overwrite: true });
    gsap.to(".movein img", { rotate: 180 });
  }

  function showNav() {
    gsap.to("nav", { y: "0%", duration: .3, ease: "none", overwrite: true });
    gsap.to(".movein", { x: "0%", duration: 5, ease: "none", overwrite: true });
    gsap.to(".movein img", { rotate: 0 });
  }



}
locomotion();
infiLoader();




let menubtn= document.querySelector('.menu');
let sidebar = document.querySelector('.side-list');
let closebtn = document.querySelector(".side-close");
menubtn.addEventListener("click",()=>{
    
  gsap.to(" .side-list",{
      height: "45vh",
       duration: 1
     })
     gsap.to(".side-close",{
      rotate:360,
      duration:1
     })
  
});

closebtn.addEventListener("click",()=>{
  gsap.to(".side-list",{
   height: 0,
    duration: 1
  })
  gsap.to(".side-close",{
      rotate:-360,
      duration:1
     })

});














const heading =document.querySelector('.headline');
const hoverimg =document.querySelector('.hover img');
const frame =document.querySelector('.hover');


heading.addEventListener("mouseenter", function () {
  gsap.to(frame, {
    opacity: 1,
    scale: 1,
    duration: 0.5,
    ease: "power2.out",
  });
});
heading.addEventListener('mousemove',function(dets){
  gsap.to(frame,{
   x:dets.x -750,
   y:dets.y-500,
   scale:1,
   ease:"power2.out",
   duration:0.5
  })
})

heading.addEventListener("mouseleave",function(){
gsap.to(frame,{
  opacity:0,
  scale:0,
  duration:.5,
  ease:"power2.out",
})
})


var tl=gsap.timeline({
  scrollTrigger: {
    trigger: "#about",
    scroller: "#main",
    start: "top top",
    end: "bottom 30%",
    scrub: true,
    pin: true
  }
})
tl.to(".about .top", { 
  y: "-50vh",
  duration:2,

 }, 1)
.to(".about .bottom", {
   y: "50vh",
   duration:2,
   }, 1)
   .from(".details .photo",{
    opacity: 0,
    scale: 0.2,
    duration: 2,
    ease: "none"
  },2)
  .from('.center .gettoknow',{
    opacity: 0,
        duration:1.5,
        x:500,
        ease: "none"
  },2)
  .from(".center h4",{
    opacity: 0,
      duration:1.5,
        x:-500,
  },2)
  .from(".details .det-text",{
    opacity: 0,
    duration: 2,
  },2)


// var tl =gsap.timeline();

// tl.to(".about .top", {
//   top:"-50%",
//   scrollTrigger: {
//     trigger: "#about",
//     scroller: "body",
//     start: "top top",
//     end: "bottom center",
//     scrub: true,
//     pin: true
//   }
// },1)
// tl.to(".about .bottom", {
//   bottom:"-50%",
//   scrollTrigger: {
//     trigger: "#about",
//     scroller: "body",
//     start: "top top",
//     end: "bottom center",
//     scrub: true,
//   }
// },1)


//my personal skiils anmiation
 const heading1 =document.querySelector(".hdng");
 heading1.addEventListener("mouseover",function(){
  gsap.to(".hdng h1",{
    y:"-3.2vw",
    duration:0.3
  })
 })

 heading1.addEventListener("mouseleave",function(){
  gsap.to(".hdng h1",{
    y:"0vw",
    duration:0.3
  })
 })

 const skills = document.querySelector(".skills");
 const imgs = document.querySelectorAll(".imgbox");
 
 skills.addEventListener("mousemove", function (dets) {
   imgs.forEach((img) => {
     const position = img.getAttribute("value");
     var x = (window.innerWidth - dets.clientX * position) / 50;
     var y = (window.innerHeight - dets.clientY * position) / 50; // Fixed from innerWidth to innerHeight
 
     // Use GSAP for smooth animation
     gsap.to(img, {
       x: x,
       y: y,
       duration: 0.3,
       ease: "power2.out",
     });
   });
 });
 
 let mm = gsap.matchMedia();
 //project animation
 mm.add("(min-width: 768px)", () => {
 var crd = gsap.timeline({
  scrollTrigger: {
      trigger: "#project",
      scroller: "#main",
      start: "top top",
      end: "bottom bottom",
      scrub: 5,  // 🔹 Increased for smoother effect
      pin: true,
  }
});

crd.to(".page3head h1", {
  marginTop: "10vw",
  fontSize: "10vw",
  ease: "power2.out",
  duration: 4  
},'a')

.to("#project #card1", {
  top: "35%",
  ease: "power2.out",
  duration: 4  
},'a')

.to("#project #card2", {
  top: "100%",  // 🔹 Adjusted to prevent jumping
  ease: "power2.out",
  duration: 4  
},'a')

.to("#project #card2", {
  top: "38%",
  ease: "power2.out",
  duration: 4  
},'b')

.to("#project #card1", {
  width: "75%",
  height: "65vh",
  ease: "power2.out",
  duration: 4
},'b')

.to("#project #card3", {
  top: "180%",  // 🔹 Adjusted to prevent jumping
  ease: "power2.out",
  duration: 4  
},'b')

.to("#project #card3", {
  top: "41%",
  ease: "power2.out",
  duration: 4  
},'c')

.to("#project #card2", {
  width: "75%",
  height: "65vh",
  ease: "power2.out",
  duration: 4  
},'c')

.to("#project #card3", {
  width: "75%",
  height: "65vh",
  ease: "power2.out",
  duration: 4  
});
});
mm.add("(max-width: 767px)", () => {
  console.log("GSAP animation is disabled on mobile.");
});



function soundPlay(){
  // Select the button
const modeBtn = document.querySelector(".modeBtn");
const icon = modeBtn.querySelector("i");
const text = modeBtn.querySelector("p");

// Create an audio object
const audio = new Audio("sound/onePice.mp3"); // Replace with your audio file URL

let isPlaying = false;

modeBtn.addEventListener("click", () => {
    if (!isPlaying) {
        audio.play();
        icon.classList.replace("ri-megaphone-line", "ri-pause-line"); // Change icon
        text.innerHTML = "Pause Sound <i class='ri-pause-line'></i>"; 
    } else {
        audio.pause();
        icon.classList.replace("ri-pause-line", "ri-megaphone-line"); // Change icon
        text.innerHTML = "Play Sound <i class='ri-megaphone-line'></i>"; 
    }
    isPlaying = !isPlaying;
});

}
soundPlay();




// ✅ Mobile Animation

