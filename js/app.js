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
let section_1 = document.getElementById("section1");
let section_2 = document.getElementById("section2");
let section_3 = document.getElementById("section3");

let dataNav = document.getAttribute("data-nav");

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


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


