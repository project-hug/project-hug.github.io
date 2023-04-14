
import {BuildMainMenu} from "./buildmainmenu.js"
import { BuildMapPage } from "./buildmappage.js";
import { BuildCameraPage } from "./buildcamerapage.js";

import { BuildBuyGems, BuildEditJourney, BuildMyProfile, BuildViewEvents, BuildSettings, BuildExit } from "./mainmenupages.js";


BuildMainMenu();
BuildMapPage();
BuildCameraPage();


// SwapToPage("My Profile")


export function SwapToPage(pagename){


    switch (pagename){

        case "Main Menu":
            BuildMainMenu();
            return;

        /////

        case "Edit Journey":
            BuildEditJourney();
            return;

        case "My Profile":
            BuildMyProfile();
            return;

        case "View Events":
            BuildViewEvents();
            return;

        case "Buy Gems":
            BuildBuyGems();
            return;

        /////

        case "Settings":
            BuildSettings();
            return;

        case "Exit":
            BuildExit();
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