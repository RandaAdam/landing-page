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
//let section_1 = document.getElementById("section1");
//let section_2 = document.getElementById("section2");
//let section_3 = document.getElementById("section3");

//let dataNav = document.getAttribute("data-nav");

let activeclasses = document.getElementsByClassName("your-active-class");
let landingContainers = document.getElementsByClassName("landing__container");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

//toDO: add Listener to call this function
function buildTheNav(){
    //loop through sections to append and build nav
    for (let i=0;i< landingContainers.length ;i++){
        const newLi = document.createElement("li");
        let secString = "section" + (i+1).toString();
        let sec = document.getElementById(secString);
        let dataNav = sec.getAttribute("data-nav");
        newLi.appendChild(document.createTextNode(dataNav));
        newLi.setAttribute("class", "menu__link");
        navbarList.appendChild(newLi);
    }
}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildTheNav();
// Scroll to section on link click
let menuItemsLinks = document.getElementsByClassName("menu__link");
for (const itemNo in menuItemsLinks) {
    if (menuItemsLinks.hasOwnProperty(itemNo)) {
        const menuItem = menuItemsLinks[itemNo];
        menuItem.addEventListener("click", function () {
            let secString = "section" + (Number(itemNo)+1).toString();
            let sec = document.getElementById(secString);
            sec.scrollIntoView();

          });
    }
}
// Set sections as active


