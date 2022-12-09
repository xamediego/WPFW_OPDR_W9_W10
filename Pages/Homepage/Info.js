(function () {
    function defineInfo(name = 'info-div') {

        let customElements;
        try {
            customElements = window.customElements;
        }

        catch (err) {
            return;
        }

        class InfoTest extends HTMLElement{
            constructor() {
                super();
            }

            connectedCallback() {
                const info = this.attributes.info.value;
                const buttonText = this.attributes.buttonText.value;
                const ImgUrl = this.attributes.ImgUrl.value;

                this.innerHTML =  `
                    <div class='Info_Root_Div'>
                        <img class='Info_Img_Div' src=${ImgUrl} alt="img" height="360px" width="450px"/>

                        <div class='Info_InfoContainer'>
                            <div class='Info_Text_Div'>
                                <h2 class='Info_Title'>${this.title}</h2>
                            <span class='Info_Text'>
                                 ${info}
                            </span>
                        </div>

                        <div class=Info_Button_Div>
                                <button onClick="navigate()" class="PrimaryButton" style="width: 250px; height: 50px">
                                    ${buttonText}
                                </button>
                            </div>
                        </div>
                    </div>`;
            }
        }

        customElements.define(name, InfoTest);
    }

    defineInfo();
})();


