(function () {
    function defineInfo(name = 'ticket-purchase') {

        let customElements;
        try {
            customElements = window.customElements;
        } catch (err) {
            return;
        }

        class TicketPurchase extends HTMLElement {
            constructor() {
                super();
            }

            connectedCallback() {
                this.innerHTML = `  
                        <div class='TicketPurchase_Root'>
                        
                        <div>
                                <div>
                                    <h1 class='TicketPurchase_Title'>
                                        Reserveer je bezoek
                                    </h1>
                                </div>
                                <div class='TicketPurchase_Line_Div'>
                                    <hr style="color: #2B1313"/>
                                </div>
                            </div>
 
                            <div>
                                <ticketpurchase-top></ticketpurchase-top>
                            </div>
                            
                            <div class='TicketPurchase_Lower_Div'>
                                   <ticketpurchase-datepicker></ticketpurchase-datepicker>
                                   <ticketpurchase-info></ticketpurchase-info>
                            </div>
                            
                        </div>
                `;
            }
        }

        customElements.define(name, TicketPurchase);

    }

    defineInfo();
})();


