let tabs = document.querySelector(".tabs");
let tabHeader = tabs.querySelector(".tab_header");
let tabBody = tabs.querySelector(".tab_body");
let tabIndicator = tabs.querySelector(".tab_indicator");
let tabHeaderNodes = tabs.querySelectorAll(".tab_header > div");
let tabBodyNodes = tabs.querySelectorAll(".tab_body > div");
let ABOUT =document.querySelector(".ABOUT");
let INGREDIENTS =document.querySelector(".INGREDIENTS");
let HOW_TO_USE =document.querySelector(".HOW_TO_USE");
let tab_indicator = document.querySelector(".tab_indicator");



for(let i=0;i<tabHeaderNodes.length;i++){
    tabHeaderNodes[i].addEventListener("click",function(){
        tabHeader.querySelector(".active").classList.remove("active");
        tabHeaderNodes[i].classList.add("active");
        tabBody.querySelector(".active").classList.remove("active");
        tabBodyNodes[i].classList.add("active");
        
    });
}

ABOUT.addEventListener("click",function(){
    tabIndicator.style.marginLeft = " 0px";
    tabIndicator.style.width = "30%";
})
INGREDIENTS.addEventListener("click",function(){
    tabIndicator.style.marginLeft = " 145px";
    tabIndicator.style.width = "30%";
})
HOW_TO_USE.addEventListener("click",function(){
    tabIndicator.style.marginLeft = " 290px";
    tabIndicator.style.width = "30%";
})


var x = window.matchMedia("(max-width: 400px)");


if(x.matches){
    tab_indicator.style.display = "none";
    ABOUT.addEventListener("click",function(){
        ABOUT.style.backgroundColor = "#418253";
        INGREDIENTS.style.backgroundColor = "#9fc7aa";
        HOW_TO_USE.style.backgroundColor = "#9fc7aa";
    })
    INGREDIENTS.addEventListener("click",function(){
        INGREDIENTS.style.backgroundColor = "#418253";
        ABOUT.style.backgroundColor = "#9fc7aa";
        HOW_TO_USE.style.backgroundColor = "#9fc7aa";
    })
    HOW_TO_USE.addEventListener("click",function(){
        HOW_TO_USE.style.backgroundColor = "#418253";
        ABOUT.style.backgroundColor = "#9fc7aa";
        INGREDIENTS.style.backgroundColor = "#9fc7aa";
    })
}

















