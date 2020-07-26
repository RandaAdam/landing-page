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
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function addClassActive(secPart){
    //secPart.setAttribute("class", "your-active-class");
    secPart.classList.add("your-active-class");
}

function removeClassActive(secPart){
    //secPart.setAttribute("class", "");
    secPart.classList.remove("your-active-class");
}

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
        //newLi.innerHTML = "<a href=\"\">" + dataNav + "</a>";
        newLi.innerHTML = "<a href=#\"" + secString + "\">" + dataNav + "</a>";
        //newLi.setAttribute("href", "#"+ secString);
        //newLi.appendChild(document.createTextNode(dataNav));
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
            //sec.scrollIntoView();
            sec.scrollIntoView(false);

            //newLi.setAttribute("href", "#"+secString);

          });
    }
}

// Set sections as active
//Todo: listen to onscroll event
document.addEventListener('scroll', function () {
    //loop through sections to append and build nav
    for (let i=0;i< landingContainers.length ;i++){
        let secString = "section" + (i+1).toString();
        let sec = document.getElementById(secString);
        //check if this section is in viewport
        if(isInViewport(sec) == true){
            addClassActive(sec);
        }
        else{
            removeClassActive(sec);
        }
    }
}, {
    passive: false
});