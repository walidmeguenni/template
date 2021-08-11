//javascript for navigation bar effects on scroll
window.onload = () => {
    window.addEventListener("scroll", () => {
      let header = document.querySelector("header");
      if (header) {
        header.classList.toggle("sticky", window.scrollY >0);
      }
    });
  
    //javascript for responsive navigation sidebar menu
    let menuBtn = document.querySelector(".menu-btn1");
    let navigation = document.querySelector(".navigation");
    let navigationItems = document.querySelectorAll(".navigation a");
    if (menuBtn) {
      menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active");
        if (navigation) {
          navigation.classList.toggle("active");
        }
      });
    }
    if (navigationItems) {
      navigationItems.forEach((navigationItem) => {
        navigationItem.addEventListener("click", () => {
          if (menuBtn) {
            menuBtn.classList.remove("active");
            if (navigation) {
              navigation.classList.remove("active");
            }
          }
        });
      });
    }
  
    //javascript for scroll to top button
    let scrollBtn = document.querySelector(".scrollToTop-btn1");
  
    window.addEventListener("scroll", function () {
      if (scrollBtn) {
        scrollBtn.classList.toggle("active", window.scrollY > 500);
      }
    });
  
    //javascript for scroll back to top on click scroll-to-top button
    if (scrollBtn) {
      scrollBtn.addEventListener("click", () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      });
    }
  
    //javascript for reveal website elements on scroll
    window.addEventListener("scroll", () => {
      var reveals = document.querySelectorAll(".reveal");
      if (reveals) {
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var revealTop = reveals[i].getBoundingClientRect().top;
          var revealPoint = 50;
  
          if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
          }
        }
      }
    });
  
    let signUpButton = document.getElementById("signUp1");
    let signInButton = document.getElementById("signIn1");
    let container = document.getElementById("container1");
    if (signUpButton) {
      signUpButton.addEventListener("click", () => {
        if (container) {
          container.classList.add("right-panel-active1");
        }
      });
    }
  
    if (signInButton) {
      signInButton.addEventListener("click", () => {
        if (container) {
          container.classList.remove("right-panel-active1");
        }
      });
    }
  };
  