(function () {
    function defineInfo(name = 'ticketpurchase-top-buttons') {

        let customElements;
        try {
            customElements = window.customElements;
        }

        catch (err) {
            return;
        }

        class TicketPurchase_Top_Buttons extends HTMLElement{
            constructor() {
                super();
            }

            connectedCallback() {

                const count = 0;

                this.innerHTML = `
                    <div class='TicketPurchase_Top_Buttons_Root'>
            
                        <button class='TicketPurchase_Top_Buttons_Circle'><iconify-icon icon='mdi:minus' width="25" height="25"></iconify-icon></button>
            
                        <div class='TicketPurchase_Top_Button_Block'><p id="amount">${count}</p></div>
            
                        <button class='TicketPurchase_Top_Buttons_Circle'><iconify-icon icon='mdi:plus' width="25" height="25"></iconify-icon></button>
            
                    </div>
                `;
            }
        }

        customElements.define(name, TicketPurchase_Top_Buttons);

    }

    defineInfo();
})();


