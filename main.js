
import {BuildMainMenu} from "./buildmainmenu.js"

BuildMainMenu();







function SwapToPage(pagename){


    switch (pagename){

        case "Main Menu":
            return;
        


    }

}











///// sliding pages

const pageContainer = document.querySelector(".page-container")
const leftBtn = document.getElementById("left-btn")
const rightBtn = document.getElementById("right-btn")
const pages = document.querySelectorAll(".page-box")

const startPage = 0

let i = startPage
const length = pages.length

leftBtn.addEventListener("click", () => changePage(-1))
rightBtn.addEventListener("click", () => changePage(1))

changePage(0)

function changePage(x) {

    const destination = i + x;
    if(0 <= destination && destination < length){
        i = destination
        pageContainer.style.transform = `translateX(-${i*100}vw)`
    }
}

/////