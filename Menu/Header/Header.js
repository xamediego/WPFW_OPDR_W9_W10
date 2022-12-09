(function () {
    function defineInfo(name = 'custom-header') {

        let customElements;
        try {
            customElements = window.customElements;
        }

        catch (err) {
            return;
        }

        class Header extends HTMLElement{
            connectedCallback() {
                this.innerHTML = `
                        <header class='Header_Root'>
                            <div class='Header_Title_Div'>
                                <h1 class='Header_Eftelling_Title' onClick="navigate()">Eftelling</h1>
                            </div>
                            <div class='Header_Img_Div'>
                                <img src='../../Assets/pumpkin.svg' alt="pumpkin" width="100px"/>
                            </div>
                            <div class='Header_Choices_Div'>
                                <h1 class='Header_Choice'>Ontdek het park</h1>
                                <h1 class='Header_Choice'>Plan je bezoek</h1>
                                <h1 class='Header_Choice'>Kom overnachten</h1>
                                <button class="PrimaryButton" style="width:200px; height: 50px">Login</button>
                                <button
                                        class="PrimaryButton"
                                        style="width:200px; height: 50px"
                                        onClick="navigate('TICKET')">
                                    Reserveren
                                </button>
                            </div>
                        </header>
                `;
            }
        }

        customElements.define(name, Header);

    }

    defineInfo();
})();


