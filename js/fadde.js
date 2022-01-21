    /*========================================*/

    const fader = document.querySelectorAll('.fade-in');
    //const slider = document.querySelectorAll(".sliden");
    const appearoptions =  {
      threshold: 0,
      //rootMargin "0px 0px -100px 0px"
    };
    /*
    slider.forEach(slider => {
      appearOnScroll.observe(slider);
    });*/
    
    
    
    const appearOnScroll = new IntersectionObserver
    (function(
      entries, 
      appearOnScroll
      ) {
      entries.forEach(entry => {
        if(!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        }
      });
    },
    appearoptions);
    
    fader.forEach(fader => {
      appearOnScroll.observe(fader);
    });
    
    /*========================================*/