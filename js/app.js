/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let navbarList = document.getElementById("navbar__list");
let mainHeros = document.getElementsByClassName("main__hero");

let activeclasses = document.getElementsByClassName("your-active-class");
let landingContainers = document.getElementsByClassName("landing__container");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function buildTheNav(){
    //loop through sections to append and build nav
    for (let i=0;i< landingContainers.length ;i++){
        const newLi = document.createElement("li");
        let secString = "section" + (i+1).toString();
        let sec = document.getElementById(secString);
        let dataNav = sec.getAttribute("data-nav");
        newLi.innerHTML = "<a href= #" + secString + ">" + dataNav + "</a>";
        newLi.className = "menu__link";
        // Scroll to section on link click
        newLi.addEventListener("click", function(){
            sec.scrollIntoView(false);
        });
        navbarList.appendChild(newLi);        
    }
}


// Add class 'active' to section when near top of viewport
function addClassActive(secPart){
    secPart.classList.add("your-active-class");
}

function removeClassActive(secPart){
    secPart.classList.remove("your-active-class");
}


// Scroll to anchor ID using scrollTO event
function scrollToSection (targetSection) {
    targetSection.scrollIntoView(false);
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
window.addEventListener('load', (event) => {
    buildTheNav();
  });



// Set sections as active
document.addEventListener('scroll', function () {
    //loop through sections to append and build nav
    for (let i=0;i< landingContainers.length ;i++){
        let secString = "section" + (i+1).toString();
        let sec = document.getElementById(secString);
        //check if this section is in viewport
        if(isInViewport(sec) == true){
            for(let j=0;j<landingContainers.length;j++){
                if(i != j){
                    let sectionString = "section" + (j+1).toString();
                    let deactiveSection = document.getElementById(sectionString);
                    removeClassActive(deactiveSection);
                }
            }
            addClassActive(sec);
        }
    }
}, {
    passive: false
});