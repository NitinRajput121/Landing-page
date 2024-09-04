var t1 = gsap.timeline();
t1.from("#nav",{
    x:-1000,
    opacity:0,
    delay:0.4,
})
t1.from("#nav h1,#nav h4,#nav h3 " ,{
    y:-80,
    opacity:0,
    duration:0.8,
   
    stagger:0.2,
})

gsap.from("#left h1",{
    x:-500,
    opacity:0,
    duration:0.5,
    stagger:0.4,
})
gsap.from("#right",{
    scale:2,
    opacity:0,
    duration:1
})

gsap.from("#page2 #box",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{ //these animations will work when we will scroll
        trigger:"#page2 #box",
        scroller:"body",
       markers:true,
       start:"top 70%",
       end:"top 90%",
       scrub:2,
    }

})
