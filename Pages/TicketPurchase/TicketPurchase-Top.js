(function () {
    function defineInfo(name = 'ticketpurchase-top') {

        let customElements;
        try {
            customElements = window.customElements;
        }

        catch (err) {
            return;
        }

        class TicketPurchase_Top extends HTMLElement{
            constructor() {
                super();
            }

            connectedCallback() {
                this.innerHTML = `
                        <div class='TicketPurchase_Top_Root'>
                
                            <div class='TicketPurchase_Top_Title_Div'>
                                <h2>
                                    Voor hoeveel personen wil je reserveren?
                                </h2>
                            </div>
                            <div class='TicketPurchase_Top_Info_Div'>
                                <div class='TicketPurchase_Top_Info_Part'>
                                    <div class='TicketPurchase_Top_Info_Text'>
                                        <h3>
                                            Aantal personen vanaf 4 jaar
                                        </h3>
                                    </div>
                                    <div class='TicketPurchase_Info_Button_Div'><ticketpurchase-top-buttons></ticketpurchase-top-buttons>
                                    </div>
                                </div>
                
                                <div class='TicketPurchase_Info_Button_Div'>
                                    <hr>
                                </div>
                
                                <div class='TicketPurchase_Top_Info_Part'>
                                    <div class='TicketPurchase_Top_Info_Text'>
                                        <h3>
                                            Aantal personen vanaf 4 jaar
                                        </h3>
                                        <span class='TicketPurchase_Info_Text'>
                                                Kinderen (0-3) hebben gratis toegang, maar worden wel meegenomen
                                                <br/>in de reservering. Er kan gvraagdworden naar een legitimatiebewijs
                                            </span>
                                    </div>
                                    <div class='TicketPurchase_Info_Button_Div'><ticketpurchase-top-buttons></ticketpurchase-top-buttons>
                                    </div>
                
                                </div>
                            </div>
                        </div>
                `;
            }
        }

        customElements.define(name, TicketPurchase_Top);

    }

    defineInfo();
})();


