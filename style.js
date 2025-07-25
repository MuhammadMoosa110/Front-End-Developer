function sendMail(){
    let parms = {
        name : document.getElementsByName("name").value,
        email : document.getElementById("email").value,
        text : document.getElementById("text").value,

    }
    emailjs.send("service_ut9e4ag","template_li7qrsk",parms).then(alert("Email Sent Successfully"))
}

gsap.from(".page2 .overView .insideView p",{
    opacity: 0,
    y : 80,
    duration:4,
    scrollTrigger:{ 
        trigger : ".page2 .overView ",
        scroller : "body",
        start: "top 80%",
        bottom:"bottom 80%",

        opacity: 0,

    }
})

gsap.from(".page1 .circle",{
    opacity: 0,
    scale : 2,
    BackgroundColor: "rgba(255, 0, 0, 0.1)",
    y : -5,
    duration:6,
    
})
gsap.to(".page1 #para",{
    opacity : 1,
    y : 40,
    delay:2,
    backGround:'#fafafa',
    duration:1,
    // scrollTrigger:{ 
    //     trigger : ".page1 .line3",
    //     scroller : "body",
    //     start: "top -0%",
    //     end: "bottom 10%",
    //     markers: false,
    //     opacity: 0,
    //     color:'#000',
    //     y: -10,
    //     scrub : 2,

    // }
})

gsap.to(".cards #c1",{
        opacity:1,
        duration:2,
        y:100,
    scrollTrigger:{ 
        trigger : ".page3 .light",
        scroller : "body",
        start: "top -0%",
        end: "bottom 10%",

        opacity: 0,
        y: 0,
        
        scrub : 2,

    }
})
gsap.to(".cards #c2",{
        opacity:1,
        duration:2,
        y:50,
    scrollTrigger:{ 
        trigger : ".page3 .light",
        scroller : "body",
        start: "top -0%",
        end: "bottom 10%",

        opacity: 0,
        y: 0,
        
        scrub : 2,

    }
})
gsap.to(".cards #c3",{
        opacity:1,
        duration:2,
        y:10,
    scrollTrigger:{ 
        trigger : ".page3 .light",
        scroller : "body",
        start: "top -0%",
        end: "bottom 10%",

        opacity: 0,
        y: 0,
        scrub : 2,

    }
})
gsap.from(".page1 .name",{
    opacity: 0,
    x: 100,
    duration:2,
    color :'#6e0606',
    backGround :"red",

})

gsap.from(".page4 #c",{
        backGround:'#6e0606',
        delay:2,
        duration:1,
        
        x:10000,
    scrollTrigger:{ 
        trigger : ".page4 h1",
        scroller : "body",
        start: "top 100%",
        end: "bottom 10%",

        opacity:0,       
        scrub : 5,
    }
})
gsap.from(".page4 .projects .prjOne .content h1",{
        backGround:'#6e0606',
        delay:5,
        duration:1,
        opacity:0,
        x:5000,
    scrollTrigger:{ 
        trigger : ".page4 h1",
        scroller : "body",
        start: "top 100%",
        end: "bottom 10%",

        color:'#000',
               
        scrub : 3,
    }
})
gsap.from(".page4 #l",{
        backGround:'#6e0606',
        opacity:0,
        delay:2,
        duration:1,
        x:10,
    scrollTrigger:{ 
        trigger : ".page4 h1",
        scroller : "body",
        start: "top 100%",
        end: "bottom 10%",

        opacity: 0,
        x:-10,
        
        scrub : 2,
    }
})
gsap.from(".page4 .projects .prjOne .line2",{
        
        opacity:1,
        
        duration:1,
        y:-20,
    scrollTrigger:{ 
        trigger : ".page4",
        scroller : "body",
        start: "top 0%",
        end: "bottom 0%",

        opacity: 1,
        y:-100,
        
        scrub : 5,
    }
})
gsap.to(".footer",{
        
        opacity:1,
        
        duration:1,
        y:-1000,
    scrollTrigger:{ 
        trigger : ".content",
        scroller : "body",
        start: "top 0%",
        end: "bottom -100%",
        markers:false,
        opacity: 1,
        y:-5000,
        
        scrub : 3,
    }
})
