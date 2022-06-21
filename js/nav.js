let nav = document.getElementById("nav")
let navIcon = document.getElementById("bars");
let navItems = document.getElementById("nav-items");
let navLogo = document.getElementById("logo");
let closeIcon = document.getElementById("close")
navIcon.addEventListener("click",()=>{
    navItems.style.display = 'block';
    nav.style.margin = '0';
    nav.style.padding = '0';
    navItems.style.width = '100vw';
    navItems.style.height = '100vh';
    navLogo.style.display = 'none';
    navIcon.style.display = 'none';
})
closeIcon.addEventListener("click",()=>{
    navItems.style.display = 'none';
    navLogo.style.display = 'block';
    navIcon.style.display = 'block';
    nav.style.margin = '0';
    nav.style.padding = '12px';
    nav.style.justifyContent = 'space-between';
})