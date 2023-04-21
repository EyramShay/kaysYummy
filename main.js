const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__link");


/*--toggle menu--*/
/*MENU SHOW */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

/*--Nenu Hidden--*/
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
} 

/*--Remove Menu Mobile*/
navLink.forEach(link => link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
})) 


/*---Change background heaader----*/
const scrollHeader = () => {
    const header = document.getElementById("header");

    this.scrollY >= 50 
    ? header.classList.add("bg-header") 
    : header.classList.remove("bg-header");
};

windows.addEventListener('scroll', scrollHeader);


 


/*----Show scroll up*/
const scrollUp = () => {
    const scrollUp = document.getElementById("Scroll-up");

    this.scrollY >= 350 
    ?  scrollUp.classList.add("show-scroll") 
    : scrollUp.classList.remove("show-scroll");
};

windows.addEventListener('scroll', scrollUp);

/*-----Dark theme---*/
const themeButton = document.getElementById('theme-button');
const body = document.body;

// Check if mode is stored in local storage
const mode = localStorage.getItem('mode');
if (mode === 'dark') {
  body.classList.add('dark-theme');
  themeButton.classList.replace('fa-rgular fa-moon', 'fa-sun');
}

themeButton.addEventListener('click', (e) => {
  if (body.classList.contains('dark-theme')) {
    // If currently in dark mode, toggle to light mode
    body.classList.remove('dark-theme');
    themeButton.classList.replace('fa-sun', 'fa-regular fa-moon');
    localStorage.setItem('mode', 'light');
  } else {
    // If currently in light mode, toggle to dark mode
    body.classList.add('dark-theme');
    themeButton.classList.replace('fa-regular fa-moon', 'fa-sun');
    localStorage.setItem('mode', 'dark');
  }
});
