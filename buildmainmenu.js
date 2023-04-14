import { SwapToPage } from "./main.js"

export function BuildMainMenu(){

    const pageBox = document.getElementById("menu-page")

    pageBox.innerHTML = 
        `<div class="menu-header">
            <div class="icon-box">
                <div class="profile-icon-circle"></div>
            </div>

            <div class="misc-text">
                Hull University Guide
            </div>

            <div class="pillow"></div>
        </div>

        <div class="cross-bar-hidden"></div>

        <div class="menu-box">
            <button class="menu-btn" id="edit-journey-btn">Edit Journey</button>
            <button class="menu-btn" id="my-profile-btn">My Profile</button>
            <button class="menu-btn" id="view-events-btn">View Events</button>
            <button class="menu-btn" id="buy-gems-btn">Buy Gems</button>
        </div>

        <div class="menu-box">
            <button class="menu-btn" id="settings-btn">Settings</button>
            <button class="menu-btn" id="exit-btn">Exit</button>
        </div>`

    const editJourney = document.getElementById("edit-journey-btn")
    const myProfile = document.getElementById("my-profile-btn")
    const viewEvents = document.getElementById("view-events-btn")
    const buyGems = document.getElementById("buy-gems-btn")

    editJourney.addEventListener("click", () => SwapToPage("Edit Journey"))
    myProfile.addEventListener("click", () => SwapToPage("My Profile"))
    viewEvents.addEventListener("click", () => SwapToPage("View Events"))
    buyGems.addEventListener("click", () => SwapToPage("Buy Gems"))

    const settings = document.getElementById("settings-btn")
    const exit = document.getElementById("exit-btn")

    settings.addEventListener("click", () => SwapToPage("Settings"))
    exit.addEventListener("click", () => SwapToPage("Exit"))
}
