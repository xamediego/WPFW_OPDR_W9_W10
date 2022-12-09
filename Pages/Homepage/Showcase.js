(function () {
    function defineInfo(name = 'img-showcase') {

        let customElements;
        try {
            customElements = window.customElements;
        }

        catch (err) {
            return;
        }

        class Showcase extends HTMLElement{
            constructor() {
                super();
            }

            connectedCallback() {
                const images = ['../../Assets/Showcase/1.png', '../../Assets/Showcase/2.png' , '../../Assets/Showcase/3.png' , '../../Assets/Showcase/4.png' , '../../Assets/Showcase/5.png']

                this.innerHTML = `
                    <div class='Showcase_Root'>
                        <div class='Showcase_Top_Div'>
                            <div>
                                <h1 class='Showcase_Title'>
                                    Laat je verwonderen tijdens de kleurrijke herfst
                                </h1>
                            </div>
                            <div class='Showcase_Line_Div'>
                                <hr>
                            </div>
                        </div>

                        <div class='Showcase_Image_Container'>
                            <div class='Showcase_Top_Image_Div'>
                                <img class='Showcase_Top_Image Showcase_Image' src=${images[0]}/>
                                <img class='Showcase_Top_Image Showcase_Image' src=${images[1]}/>
                            </div>
                            <div class='Showcase_Low_Image_Div'>
                                <img class='Showcase_Low_image Showcase_Image' src=${images[2]}/>
                                <img class='Showcase_Low_image Showcase_Image' src=${images[3]}/>
                                <img class='Showcase_Low_image Showcase_Image' src=${images[4]}/>
                            </div>
                        </div>

                    </div>
                `;
            }
        }

        customElements.define(name, Showcase);

    }

    defineInfo();
})();


