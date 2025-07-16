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
    y : 100,
    duration:2,
    scrollTrigger:{ 
        trigger : ".page2 .overView ",
        scroller : "body",
        start: "top 0%",
        end: "bottom 10%",
        markers: false,
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
gsap.from(".page1 #para",{
    opacity: 0,
    y : -10,
    duration:1,
    scrollTrigger:{ 
        trigger : ".page1 .line3",
        scroller : "body",
        start: "top -0%",
        end: "bottom 10%",
        markers: false,
        opacity: 5,
        y: -50,
        scrub : 2,

    }
})

gsap.from(".cards #c2",{
    opacity: 0,
    y : -50,
    duration:1,
    scrollTrigger:{ 
        trigger : ".page2 .tubelight",
        scroller : "body",
        start: "top -0%",
        end: "bottom 10%",
        markers: false,
        opacity: 1,
        y: 1000,
        Transition: "ease-in",
        scrub : 2,

    }
})
gsap.from(".page1 .name",{
    opacity: 1,
    y : -100,
    duration:1,
    backGround :"red",

})
gsap.from("#border",{
    opacity: 0,
    y : -100,
    duration:1,
    scrollTrigger:{ 
        trigger : ".page3 h1 ",
        scroller : "body",
        start: "top 0%",
        end: "bottom 50%",
        markers: false,
        opacity: 1,
        y: 0,
        backGround :"red",
        Transition: "ease-in",
        scrub : 2,

    }
})