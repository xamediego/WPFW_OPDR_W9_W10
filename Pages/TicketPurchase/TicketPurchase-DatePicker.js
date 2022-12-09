(function () {
    function defineInfo(name = 'ticketpurchase-datepicker') {

        let customElements;
        try {
            customElements = window.customElements;
        }

        catch (err) {
            return;
        }

        class TicketPurchase_DatePicker extends HTMLElement{
            constructor() {
                super();
            }

            connectedCallback() {
                this.innerHTML = `
                            <div>
                                <div class='TicketPurchase_DatePicker_Title_Div'>
                                    <h2 class='TicketPurchase_DatePicker_Title'>
                                        Selecteer een datum
                                    </h2>
                                </div>
                                <div class='TicketPurchase_DatePicker_CalenderContainer'>

                                </div>
                            </div>
                `;
            }
        }

        customElements.define(name, TicketPurchase_DatePicker);

    }

    defineInfo();
})();


