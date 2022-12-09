(function () {
    function defineInfo(name = 'main-menu') {

        let customElements;
        try {
            customElements = window.customElements;
        }

        catch (err) {
            return;
        }

        class MainMenu extends HTMLElement{
            constructor() {
                super();
            }

            connectedCallback() {
                this.innerHTML = `
                        <div class='Home_Root'>
                            <home-banner></home-banner>
                        
                            <div class='Home_Mid_Div'>
                                <info-div title="Attractiepark" info="Ontdek een wereld vol Wonderen. Bezoek Nederlands grootste en leukste attractiepark de Efteling" buttonText="Ontdek de Efteling" ImgUrl='../../Assets/InfoDivImg/1.png'></info-div>
                                <info-div title="Kom overnachten" info="Geniet van nog meer momenten samen en beleef horrorachtig overnachten in een van de vele accommodaties" buttonText="Kom overnachten" ImgUrl='../../Assets/InfoDivImg/2.png'></info-div>
                                <info-div title="Werken bij de Efteling" info="Ontdek een wereld vol Wonderen. Bezoek Nederlands grootste en leukste attractiepark de Efteling" buttonText="Ontdek meer" ImgUrl='../../Assets/InfoDivImg/3.png'></info-div>
                            </div>
                        
                            <img-showcase></img-showcase>
                        
                            <weather-forecast></weather-forecast>
                        </div>
                `;
            }
        }

        customElements.define(name, MainMenu);

    }

    defineInfo();
})();


