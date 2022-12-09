(function () {
    function defineInfo(name = 'home-banner') {

        let customElements;
        try {
            customElements = window.customElements;
        }

        catch (err) {
            return;
        }

        class Banner extends HTMLElement{
            constructor() {
                super();
            }

            connectedCallback() {
                this.innerHTML = `
                    <div class='Banner_Root'>
                        <div class='Banner_Ontdek_Meer_Div'>

                            <div class='Banner_Ontdek_Meer_Content_Div'>

                                <p>Beleef de Halloween<br/>in de efteling</p>

                                <button class='Banner_Ontdek_Meer_Button'
                                        onClick="navigate('ABOUT_US')">
                                    Ontdek meer >
                                </button>
                            </div>
                        </div>

                        <div class='Banner_Reservation_Div'>
                            <div class='Banner_Reservation_Top_Div'>
                                <h1 class='Banner_Title'>
                                    Reservering en tickets kopen
                                </h1>
                            </div>
                            <div class='Banner_Reservation_Low_Div'>
                                <div class='Banner_Reservation_Low_Info_Div'>
                                    <h2 class='Banner_Title'>
                                        Bezoek de wereld vol horrors
                                    </h2>
                                    <h2 class='Banner_Reservation_Low_Info'>
                                        Reserveer je bezoek aan de Efteling. Kinderen t/m 3 jaar gratis
                                    </h2>
                                </div>
                                <div class='Banner_Reservation_Low_Button_Div'>
                                    <button class="PrimaryButton" style="width: 200px ; height: 50px"
                                            onClick="navigate('TICKET')">
                                        Reserveren >
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
        }

        customElements.define(name, Banner);

    }

    defineInfo();
})();


