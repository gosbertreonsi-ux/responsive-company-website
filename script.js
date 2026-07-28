const toogleBtn = document.getElementById("modeToggle");
const body = document.body;

if(localStorage.getItem("theme") === "dark"){
    body.classList.add("dark");
    toogleBtn.textContent = "☀️";
}

toogleBtn.addEventListener("click",()=>{

    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
        toogleBtn.textContent = "☀️";
    } else{
        localStorage.setItem("theme","light");
        toogleBtn.textContent = "🌙";
    }
});

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const navBar = document.getElementById("navBar");

menuBtn.addEventListener("click",()=>{
    navMenu.classList.toggle("open");
});

window.addEventListener("scroll",()=>{
    if(window.scrollY > 20){
        navBar.classList.add("scrolled");
    }else{
        navBar.classList.remove("scrolled");
    }
});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSections);

function revealSections(){

  reveals.forEach(section => {

    const sectionTop = section.getBoundingClientRect().top;

    const triggerPoint = window.innerHeight - 100;

    if(sectionTop < triggerPoint){
      section.classList.add("active");
    }

  });

}

revealSections();