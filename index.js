var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("hideNav").style.top = "0";
  } else {
    document.getElementById("hideNav").style.top = "-59px";
  }
  prevScrollpos = currentScrollPos;
}

// Scroll reveal animation
// what is online tutoring section
ScrollReveal().reveal('#onlineTutor-content', { delay: 200 });
ScrollReveal().reveal('.btn-color-1', { delay: 500 });
//About Us section
ScrollReveal().reveal('#aboutus-content', { delay: 200 });
ScrollReveal().reveal('#ourteam', { delay: 700 });
ScrollReveal().reveal('#ourteam-responsive', { delay: 700 });
ScrollReveal().reveal('#scrollBtn', { delay: 1000 });
//Signup section
ScrollReveal().reveal('.signup-title', { delay: 200 });
ScrollReveal().reveal('#content', { delay: 500 });
ScrollReveal().reveal('#signup-form', { delay: 700 });
ScrollReveal().reveal('.btn-color-2', { delay: 1000 });
