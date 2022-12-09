(function () {
    function defineInfo(name = 'ticketpurchase-info') {

        let customElements;
        try {
            customElements = window.customElements;
        }

        catch (err) {
            return;
        }

        class TicketPurchase_Info extends HTMLElement{
            constructor() {
                super();
            }

            connectedCallback() {
                const datum = new Date();

                this.innerHTML = `
                        <div class='TicketPurchase_Info_Root'>
                
                            <div class='TicketPurchase_Info_Title_Div'>
                                <h2 class='TicketPurchase_Info_Title'>
                                    ${datum.getUTCDate() + "/" + datum.getUTCMonth() + "/" + datum.getFullYear()}
                                </h2>
                                <div class='TicketPurchase_Info_Line_Div'>
                                    <hr style="width: 300px"/>
                                </div>
                            </div>
                
                            <label
                                class='TicketPurchase_Info_InputField'>Email*
                                <input  id="email" type="text"
                                       class='TicketPurchase_Info_EmailInput' placeholder="someone@example.com"/>
                                <p class="TicketPurchase_Info_Email_Error"></p>
                            </label>
                
                            <div class='TicketPurchase_Info_TicketInfo'>
                                <h4>Personen: 0</h4>
                                <h4>Prijs: € 0.00</h4>
                            </div>
                
                            <div>
                                <button class='TicketPurchase_Info_PurchaseButton'>Tickets Bestellen</button>
                            </div>
                
                        </div>
                `;
            }
        }

        customElements.define(name, TicketPurchase_Info);

    }

    defineInfo();
})();


