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
