


window.addEventListener('scroll', function(){
    let nav = this.document.querySelector('nav')
    nav.classList.toggle('sticky', window.scrollY > 0)
  });
  
  
  
  var owl = $('#brands .owl-carousel');
  owl.owlCarousel({
      loop:true,
      dots: false,
      margin:10,
      responsive:{
          0:{
              items:2
          },
          600:{
              items:3
          },            
          769:{
              items:4
          },
          1200:{
              items:6
          }
      }
  });
  owl.on('mousewheel', '.owl-stage', function (e) {
      if (e.deltaY>0) {
          owl.trigger('next.owl');
      } else {
          owl.trigger('prev.owl');
      }
      e.preventDefault();
  });
  
  
  
  $(document).ready(function(){
    $('#reviews .owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      dots: false,
    })
  });
  
  
  let SideBtn = document.querySelector('.help-btn')
  let sideForm = document.querySelector('.side-form')
  let overlayClose = document.querySelector('.close-overlay')
  let close = document.querySelector(".close-btn")

  SideBtn.addEventListener("click", function(){
    sideForm.style.right = '0';
    overlayClose.style.visibility = 'visible';
    overlayClose.style.opacity = '1';
  })
  close.addEventListener("click", function(){
    sideForm.style.right = '-100%';
    overlayClose.style.visibility = 'hidden';
    overlayClose.style.opacity = '0';
  })
  overlayClose.addEventListener("click", function(){
    sideForm.style.right = '-100%';
    overlayClose.style.visibility = 'hidden';
    overlayClose.style.opacity = '0';
  })




  //* Animation
  
  headerAnimation();
  Page2Animtaion();
  Page3Animation();
  Page4Animation();
  Page5Animation();
  Page6Animation();
  Page7Animation();
  Page8Animation();
  Page9Animation();
  Page10Animation();
  Page11Animation();
  Page12Animation();
  function headerAnimation(){
  let tl = gsap.timeline()
  tl.from(".navbar-brand, .nav-item, nav button, nav .button", {
      y: -20, 
      opacity:0,
      duration: .5,
      stagger: 0.05
  })
  
  tl.from("#hero h2, #hero p, #hero .button", {
      y: -20, 
      opacity:0,
      duration: .5,
      stagger: 0.15
  },"-=1.1")
  tl.from("#hero .hero-img", {
      y: 30, 
      duration: 1,
      opacity:0,
      stagger: 0.15
  },"-=.5")
  };
  function Page2Animtaion(){
  let tl = gsap.timeline()
  tl.from("#award-win .animItem", {
      y: 30, 
      opacity:0,
      duration: 1.5,
      stagger: 0.15,
      scrollTrigger:{
          trigger: "#award-win",
          scroller: "body",
          start: "top 70%",
          end: "top 70%",
          scrub: 2
      }
  })
  }
  function Page3Animation(){
  let tl = gsap.timeline()
  tl.from("#what-we-do .animItem", {
      y: 50, 
      opacity:0,
      duration: 1.5,
      stagger:.2,
      scrollTrigger:{
          trigger: "#what-we-do",
          scroller: "body",
          start: "top 80%",
          end: "top 80%",
          scrub: 2
      }
  })
  }
  function Page4Animation(){
  let tl = gsap.timeline()
  tl.from("#growth-info-area", {
      y: 50, 
      opacity:0,
      duration: 1.5,
      stagger:.2,
      scrollTrigger:{
          trigger: "#growth-info-area",
          scroller: "body",
          start: "top 90%",
          end: "top 90%",
          scrub: 2
      }
  })
  }
  function Page5Animation(){
  let tl = gsap.timeline({
      scrollTrigger:{
          trigger: "#capabilities",
          scroller: "body",
          start: "top 70%",
          end: "top 10%",
          scrub: 2
      }
  })
  tl.from("#capabilities .animItem", {
      y: 50, 
      opacity:0,
      duration: 1.5,
      stagger:.2,
  });
  tl.from("#capabilities .animItem2", {
      y: 50, 
      opacity:0,
      duration: 1.5,
      stagger:.2,
  })
  }
  function Page6Animation(){
  let tl = gsap.timeline({
      scrollTrigger:{
          trigger: "#progress",
          scroller: "body",
          start: "top 70%",
          end: "top 30%",
          scrub: 2
      }
  })
  tl.from("#progress .animItem", {
      y: 50, 
      opacity:0,
      duration: 1.5,
      stagger:.2,
  });
  tl.from("#progress .animItem2", {
      y: 50, 
      opacity:0,
      duration: 1.5,
      stagger:.2,
  })
  tl.from("#progress .animItem3", {
      y: 50, 
      opacity:0,
      duration: 1.5,
      stagger:.2,
  })
  }
  function Page7Animation(){
  let tl = gsap.timeline({
      scrollTrigger:{
          trigger: "#award-facts",
          scroller: "body",
          start: "top 80%",
          end: "top 70%",
          scrub: 2
      }
  })
  tl.from("#award-facts .animItem", {
      y: 50, 
      opacity:0,
      duration: 1.5,
      stagger:.2,
  });
  }
  function Page8Animation(){
  let tl = gsap.timeline({
      scrollTrigger:{
          trigger: "#success-stories",
          scroller: "body",
          start: "top 80%",
          end: "top 70%",
          scrub: 2
      }
  })
  tl.from("#success-stories .animItem", {
      y: 50, 
      opacity:0,
      duration: 1.5,
      stagger:.2,
  });
  }
  function Page9Animation(){
  let tl = gsap.timeline({
      scrollTrigger:{
          trigger: "#reviews",
          scroller: "body",
          start: "top 80%",
          end: "top 70%",
          scrub: 2
      }
  })
  tl.from("#reviews .animItem", {
      y: 50, 
      opacity:0,
      duration: 1.5,
      stagger:.2,
  });
  }
  function Page10Animation(){
  let tl = gsap.timeline({
      scrollTrigger:{
          trigger: "#transform-wrap",
          scroller: "body",
          start: "70% 80%",
          end: "70% 70%",
          scrub: 2
      }
  })
  tl.from("#transform-wrap .animItem", {
      y: 50, 
      opacity:0,
      duration: 1.5,
      stagger:.2,
  });
  }
  function Page11Animation(){
  let tl = gsap.timeline({
      scrollTrigger:{
          trigger: "#blogs",
          scroller: "body",
          start: "20% 80%",
          end: "20% 50%",
          scrub: 2
      }
  })
  tl.from("#blogs .animItem", {
      y: 50, 
      opacity:0,
      duration: 1.5,
      stagger:.2,
  });
  tl.from("#blogs .animItem2", {
      y: 50, 
      opacity:0,
      duration: 1.5,
      stagger:.2,
  })
  }
  function Page12Animation(){
  let tl = gsap.timeline({
      scrollTrigger:{
          trigger: "footer",
          scroller: "body",
          start: "20% 80%",
          end: "20% 50%",
          scrub: 2
      }
  })
  tl.from("footer .animItem", {
      y: 50, 
      opacity:0,
      duration: 1.5,
      stagger:.2,
  });
  }