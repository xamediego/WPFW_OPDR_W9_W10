(function () {
    function defineInfo(name = 'over-ons') {

        let customElements;
        try {
            customElements = window.customElements;
        }

        catch (err) {
            return;
        }

        class OverOns extends HTMLElement{
            constructor() {
                super();
            }

            connectedCallback() {
                this.innerHTML = `
                        <div class='OverOns_Root'>
                            <div>
                                <h1 class='OverOns_Title'>Over ons</h1>
                            </div>
                            <div class='OverOns_Line_Div'>
                                <hr style="color: #2B1313"/>
                            </div>
                        
                            <div class='OverOns_Content_Div'>
                                <text class='OverOns_Content_Text'>Lorem ipsum dolor sit amet,<br/>
                                    consectetur adipiscing elit.<br/>
                                    In vel mi non ex interdum molestie.<br/>
                                    Praesent eget ipsum risus.<br/>
                                    Cras in placerat ipsum.<br/>
                                    Etiam semper pretium<br/>
                                    quam quis venenatis.<br/>
                                    Cras mollis dapibus mauris.<br/>
                                    Ut vel augue id felis rhoncus accumsan.<br/>
                                </text>
                        
                                <img class='OverOns_Content_Image' src='../../Assets/OverOns/1.png' alt="sneed"/>
                            </div>
                        
                            <div class='OverOns_Line_Div'>
                                <hr style="color: #2B1313"/>
                            </div>
                        
                            <div class='OverOns_Content_Div'>
                                <img class='OverOns_Content_Image' src='../../Assets/OverOns/2.png' alt="sneed"/>
                        
                                <text class='OverOns_Content_Text'>Lorem ipsum dolor sit amet,<br/>
                                    consectetur adipiscing elit.<br/>
                                    In vel mi non ex interdum molestie.<br/>
                                    Praesent eget ipsum risus.<br/>
                                    Cras in placerat ipsum.<br/>
                                    Etiam semper pretium<br/>
                                    quam quis venenatis.<br/>
                                    Cras mollis dapibus mauris.<br/>
                                    Ut vel augue id felis rhoncus accumsan.<br/>
                                </text>
                            </div>
                        </div>
                `;
            }
        }

        customElements.define(name, OverOns);

    }

    defineInfo();
})();


