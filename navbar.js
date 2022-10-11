window.onscroll = function(){
  scrollLogic()
};

var navbar = document.getElementById("navbar");
var navLogo = document.getElementById("navLogo");
var navWrap = document.getElementById("nav-wrap");
var sticky = navbar.offsetTop;

var hr = document.getElementById("vertical-hr");
var hrOffset = hr.offsetTop;


function scrollLogic() {
  if (window.pageYOffset >= sticky-5){
    navbar.classList.add("sticky")
    navbar.classList.remove("no-stick")
    navbar.classList.add("main-color")
    navLogo.classList.add("navLogo")
    // navWrap.classList.add("nav-wrap")
    document.getElementById('navLogo').id = 'temp';
  } else if(window.pageYOffset < sticky+5){
    navbar.classList.remove("sticky");
    navbar.classList.add("no-stick")
    navbar.classList.remove("main-color")
    navLogo.classList.remove("navLogo")
    // navWrap.classList.remove("nav-wrap")
    document.getElementById('temp').id = 'navLogo';
  }
  if(hrOffset-5 > window.pageYOffset+window.innerHeight){
    hr.classList.add("vertical-hr")
  }

}
