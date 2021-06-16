const navTog = document.querySelector(".nav-tog");

navTog.addEventListener("click", togNav);

function togNav() {
  navTog.classList.toggle("active");
  document.querySelector(".lx").classList.toggle("openPlzz");
}

document.addEventListener("click", function(e){
  if(e.target.closest(".lk")) {
    togNav();
  }
});

// Let's set up the sticky header
window.addEventListener("scroll", function(){
  if (this.pageYOffset > 66){
    document.querySelector(".header").classList.add("sticky");
  } else {
    document.querySelector(".header").classList.remove("sticky");
  }
});

const menuTab = document.querySelector(".menu-tb");
menuTab.addEventListener("click", function(e) {
  if (e.target.classList.contains("menu-tb-it") && !e.target.classList.contains("active")){
    const target = e.target.getAttribute("data-target");
    menuTab.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const menuSc = document.querySelector(".menu-sc");
    menuSc.querySelector(".menu-tab-content.active").classList.remove("active");
    menuSc.querySelector(target).classList.add("active");
  }
});