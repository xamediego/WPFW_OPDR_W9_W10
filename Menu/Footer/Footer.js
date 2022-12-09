(function () {
    function defineInfo(name = 'custom-footer') {

        let customElements;
        try {
            customElements = window.customElements;
        }

        catch (err) {
            return;
        }

        class Footer extends HTMLElement{
            connectedCallback() {
                this.innerHTML = `
                        <footer class='Footer_Root'>
                            <div class='Footer_Top_Div'>
                                <div class='Footer_Top_Left'>
                                    <div class='Footer_Links_Container'>
                                        <div class='Footer_Links_Div' }>
                                            <label>Het Park</label>
                                            <ul class='Footer_Link_List'>
                                                <li><a class='link'>Attracties</a></li>
                                                <li><a class='link'>Openingstijden & drukte</a></li>
                                                <li><a class='link'>Attracties in onderhoud</a></li>
                                            </ul>
                                        </div>
                        
                                        <div class='Footer_Links_Div' }>
                                            <label>Over de Efteling</label>
                                            <ul class='Footer_Link_List'>
                                                <li><a class='link'>Ons verhaal</a></li>
                                                <li><a class='link'>Geschiedenis</a></li>
                                                <li><a class='link'>Organisatie</a></li>
                                            </ul>
                                        </div>
                        
                                        <div class='Footer_Links_Div' }>
                                            <label>Meer Efteling</label>
                                            <ul class='Footer_Link_List'>
                                                <li><a id="TheaterShow_Link" onClick="navigate(SNEED)" class='link'>Theatershow Sneed</a></li>
                                                <li><a class='link'>Efteling Evenementen</a></li>
                                                <li><a class='link'>Efteling Kids website</a></li>
                                            </ul>
                                        </div>
                                    </div>
                        
                                    <div class='Footer_Right_Foot'>
                                        <div class='Footer_Right_Button_Div'>
                                            <button class='Footer_SocialMedia_Button PrimaryButton'>
                                                <iconify-icon icon='ph:youtube-logo' width="40" height="40"></iconify-icon>
                                            </button>
                                            <button class='Footer_SocialMedia_Button PrimaryButton'>
                                                <iconify-icon icon="ph:twitter-logo" width="40" height="40"></iconify-icon>
                                            </button>
                                            <button class='Footer_SocialMedia_Button PrimaryButton'>
                                                <iconify-icon icon="ph:instagram-logo" width="40" height="40"></iconify-icon>
                                            </button>
                                            <button class='Footer_SocialMedia_Button PrimaryButton'>
                                                <iconify-icon icon="ph:tiktok-logo" width="40" height="40"></iconify-icon>
                                            </button>
                                            <button class='Footer_SocialMedia_Button PrimaryButton'>
                                                <iconify-icon icon="ph:linkedin-logo" width="40" height="40"></iconify-icon>
                                            </button>
                                            <button class='Footer_SocialMedia_Button PrimaryButton'>
                                                <iconify-icon icon="ph:facebook-logo" width="40" height="40"></iconify-icon>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <div class='Footer_Low_Div'>
                                <div class='Footer_Low_Div_Line'>
                                    <hr/>
                                </div>
                                <div class='Footer_Disclaimer_Div'>
                                    <a>@ SneedPark 2022</a>
                                    <a>Privacy statement</a>
                                    <a>Algemene voorwaarden</a>
                                    <a>Contact & Klantenservice</a>
                                </div>
                            </div>
                        </footer>
                `;
            }
        }

        customElements.define(name, Footer);

    }

    defineInfo();
})();


