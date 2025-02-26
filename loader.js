 var tl=gsap.timeline()
 tl.to(".welcome",{
    fontSize:"28vw",
   duration:2.5,
ease: "bounce.out",
 });
 tl.to(" .loader p",{
   opacity:1,
   y:-110,
    duration:1,
   ease: "power2.out"
})
 tl.to(".loader h1",{
    opacity:0,
    duration:2,
     ease: "power2.out"
 });

 tl.to(" .loader p",{
   opacity:0,
    duration:2,
   ease: "power2.out"
});
 tl.to(".loader",{
    height:0,
    display: "none",
    duration:1,
    ease: "power2.out"
 
 });
 tl.from("nav",{
   y:-90,
   duration:1
 })
 tl.from('.container p',{
   opacity:0,
   duration:1,
 });
 tl.to(".container h1",{
  scale:1,
   opacity:1,
   ease: "power1.out",
   duration:1
 });
 tl.from('.container .paraline',{
   opacity:0,
   duration:.5

 });






// // Check if the animation has already run
// if (!localStorage.getItem('hasSeenAnimation')) {
//    // Run the animation
//    var tl = gsap.timeline();
//    tl.to(".welcome", { fontSize: "18vw", duration: 2.5, ease: "bounce.out" });
//    tl.to(".loader h1", { opacity: 0, duration: 1 });
//    tl.to(".loader", { height: 0, duration: 2, ease: "power2.out" });
//    tl.to("#pageOne h1", { y: "0px", opacity: 1, duration: 1, ease: "power2.out" });
//    tl.to("#pageOne p", { opacity: 1, duration: 2, ease: "power2.out" });

//    // Mark animation as seen
//    localStorage.setItem('hasSeenAnimation', true);
// } else {
//    // Skip the animation if it has already run
//    document.querySelector(".loader").style.display = "none";
//    document.querySelector("#pageOne h1").style.opacity = "1";
//    document.querySelector("#pageOne p").style.opacity = "1";
// }




