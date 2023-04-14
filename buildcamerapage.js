


export function BuildCameraPage(){

    const pageBox = document.getElementById("camera-page")

    pageBox.innerHTML = 
        `<div class="page-banner">
            <div class="icon-box">
                <div class="profile-icon-circle"></div>
            </div>

            <div class="currency-box">
                <div class="misc-text">800</div>
                <img src="images/jae_currency.png" alt="" id="gems">
            </div>
        </div>

        <div class="search-box">
            <div class="search-box-cushion"></div>
            <div class="destination-title">Middleton Hall</div>
            <div class="search-box-cushion">
                <div class="search-icon"></div>
            </div>
        </div>

        <div class="cross-bar-hidden"></div>

        <div class="page-banner">
            <div class="icon-box">
                <div class="memories-icon-circle"></div>
            </div>
        </div>

        <div class="camera-view-footer">
            <div class="big-circle"></div>
        </div>`
}
