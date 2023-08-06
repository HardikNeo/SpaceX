var prevScrollpos = window.scrollY;
window.onscroll = function () {
  var nowScrollpos = window.scrollY;
  if (prevScrollpos < nowScrollpos) {
    document.getElementById("nav-dad").style.opacity = 0;
  } else {
    document.getElementById("nav-dad").style.opacity = 1;
  }
  prevScrollpos = nowScrollpos;
};
