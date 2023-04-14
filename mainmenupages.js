

import { SwapToPage } from "./main.js"


export function BuildEditJourney(){

    const pageBox = document.getElementById("menu-page")

    pageBox.innerHTML = 
        `<div class="page-box" id="menu-page">
            <div class="menu-header">
                <button class="back-button"><</button>
                <div class="misc-text">Edit Journey</div>
                <div class="pillow"></div>
            </div>
        </div>`

    const backBtn = document.querySelector(".back-button")
    backBtn.addEventListener("click", () => SwapToPage("Main Menu"))
}


export function BuildMyProfile(){

    const pageBox = document.getElementById("menu-page")

    pageBox.innerHTML = 
        `<div class="menu-header">

            <button class="back-button"><</button>

            <div class="misc-text">
                My Profile
            </div>

            <div class="pillow"></div>
        </div>
        
        <div class="big-icon-box">
            <div class="profile-icon-circle"></div>
        </div>

        <div class="menu-box">
            <button class="menu-btn">Friends</button>
            <button class="menu-btn">Moments</button>
            <button class="menu-btn">Achievements</button>
        </div>`

    const backBtn = document.querySelector(".back-button")
    backBtn.addEventListener("click", () => SwapToPage("Main Menu"))
}


export function BuildViewEvents(){

    const pageBox = document.getElementById("menu-page")

    pageBox.innerHTML = 
        `<div class="page-box" id="menu-page">
            <div class="menu-header">
                <button class="back-button"><</button>
                <div class="misc-text">Events</div>
                <div class="pillow"></div>
            </div>
        </div>`

    const backBtn = document.querySelector(".back-button")
    backBtn.addEventListener("click", () => SwapToPage("Main Menu"))
}

export function BuildBuyGems(){

    const pageBox = document.getElementById("menu-page")

    pageBox.innerHTML = 
        `<div class="page-box" id="menu-page">
            <div class="menu-header">
                <button class="back-button"><</button>
                <div class="misc-text">Buy Gems</div>
                <div class="pillow"></div>
            </div>
        </div>`

    const backBtn = document.querySelector(".back-button")
    backBtn.addEventListener("click", () => SwapToPage("Main Menu"))
}

export function BuildSettings(){

    const pageBox = document.getElementById("menu-page")

    pageBox.innerHTML = 
        `<div class="page-box" id="menu-page">
            <div class="menu-header">
                <button class="back-button"><</button>
                <div class="misc-text">Settings</div>
                <div class="pillow"></div>
            </div>
        </div>`

    const backBtn = document.querySelector(".back-button")
    backBtn.addEventListener("click", () => SwapToPage("Main Menu"))
}

export function BuildExit(){

    const pageBox = document.getElementById("menu-page")

    pageBox.innerHTML = 
        `<div class="page-box" id="menu-page">
            <div class="menu-header">
                <button class="back-button"><</button>
                <div class="misc-text">Exit</div>
                <div class="pillow"></div>
            </div>
        </div>`

    const backBtn = document.querySelector(".back-button")
    backBtn.addEventListener("click", () => SwapToPage("Main Menu"))
}