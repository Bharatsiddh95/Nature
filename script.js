const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from(".nlink",{
    stagger:.2,
    y:10,
    opacity:0,
    duration:1,
    ease:Power2,
})



Shery.textAnimate("#headings h1" , {
    
    style: 2,
    
    delay:0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    
  });

  gsap.from(".enam2",{
    y:50,
    stagger:.3,
    opacity:0.,
    else:Power4,
    duration:1,

  })



document.querySelector("#ftext button")
.addEventListener("mouseover",function(){
    gsap.to("#future video",{
        opacity:1,
        duration:1,
        ease:Power4
    })
    gsap.to("#ftext ",{
        opacity:0
    })
})
document.querySelector("#ftext button")
.addEventListener("mouseleave",function(){
    gsap.to("#future video",{
        opacity:0,
        duration:1,
        ease:Power4
    })
    gsap.to("#ftext ",{
        opacity:1,
        duration:1,
    })
    
})

    
