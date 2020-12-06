// navbar and burger

const navigation = document.querySelector("nav");
const navigationUl = document.querySelector(".navMenu");
const navigationUlLi = navigationUl.querySelectorAll("li");


const burgerWrapper = document.querySelector(".burgerWrapper");

const burgerChanger = () => {
    const burgerA = document.querySelector(".burgerA");
    const burgerB = document.querySelector(".burgerB");
    burgerA.classList.toggle("rotateA");
    burgerB.classList.toggle("rotateB");
    console.log ("klik");
    addVisibleNav()
};

const addHiddenNav = (cssStyle) => {
    setTimeout(function(){
        navigationUl.classList.add(cssStyle)
    }, 100);
    }


const addVisibleNav = () => {
    
    if (navigation.dataset.display === "none")
    {
        navigation.dataset.display = "block"
        navigation.style.display = "block";
        navigationUl.classList.add("sideNavHidden");
        addHiddenNav("sideNavVisible");
        navigationUlLi.forEach((element) => {
            element.style.padding = "10% 10%"
        })
    }
    else {
        navigation.style.display = "none";
        navigation.dataset.display = "none";
        navigationUl.classList.remove("sideNavHidden");
        navigationUl.classList.remove("sideNavVisible");
    }
};

burgerWrapper.addEventListener("click", burgerChanger);

// top nav

const header = document.querySelector("header");
const  navLinkElem = document.querySelectorAll(".link");
const social = document.querySelector("aside ul");
const aside = document.querySelector("aside");

function getScrollPosition() {
    return window.scrollY;
};



function showTopNav( scrollPosition) {
   if (window.innerWidth > 768){
    if ( scrollPosition > header.offsetHeight ) {
        navigationUl.classList.add("topNavHidden");
        navLinkElem.forEach((element) => {
            element.style.color = "#5729b0";
        })
     

        addHiddenNav("topNavVisible");
        
    }

    else if (window.innerWidth < 1024){
        navigationUl.classList.remove("topNavHidden");
        navigationUl.classList.remove("topNavVisible");
     
    }}

}

// animation effects

const h2 = [...document.querySelectorAll("h2")];

const opacityAnimElem = [...document.querySelectorAll(".animateOpacity")]

function addRemoveOnScroll(scrollPosition, elementPosition, windowHeight, element, clasname) {
    if(windowHeight + scrollPosition > elementPosition ){
      element.classList.add(clasname)
    }
    else {
        element.classList.remove(clasname)
    }
}

function getParam( windowHeight, scrollPosition) {
    
    for (let i=0; i < h2.length; i++) {
        let elementPosition = h2[i].offsetTop;
       
        addRemoveOnScroll( scrollPosition,elementPosition, windowHeight, h2[i], "move")
    }
    for (let i = 0; i < opacityAnimElem.length; i++ ) {
        let opacityElementPosition = opacityAnimElem[i].offsetTop;
       
        addRemoveOnScroll( scrollPosition,opacityElementPosition, windowHeight, opacityAnimElem[i], "opacity")
    }
}


function onscrollFuntions() {
    const windowHeight = window.innerHeight;
    const scrollPosition = getScrollPosition();
    showTopNav(scrollPosition);
    getParam(windowHeight, scrollPosition);

}


window.addEventListener("scroll", onscrollFuntions)

