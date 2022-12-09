(function () {

    async function getForecast(){
        let max = 0;
        let avg = 0;

        await FetchData("https://api.open-meteo.com/v1/forecast?latitude=52.3738&longitude=4.8910&hourly=temperature_2m", "application/x-www-form-urlencoded" , "GET").then(data => {


            const temps = [];

            for(let i = 9; i < 21; i++){
                temps[i-9] = data.hourly.temperature_2m[i];
            }

            let addTemp = 0;

            for(let i = 0; i < temps.length; i++){

                console.log(max)

                if(temps[i] > max){
                    max = temps[i];
                }
                addTemp += temps[i];
            }

            avg = parseFloat(addTemp / temps.length).toFixed(1);

            console.log('Max: ' + max + ' | avg: ' + avg)
        });

        return [max , avg]
    }

    function defineInfo(name = 'weather-forecast') {

        let customElements;
        try {
            customElements = window.customElements;
        }

        catch (err) {
            return;
        }

        class WeatherForecast extends HTMLElement{

            constructor() {
                super();
            }

            async connectedCallback() {

                const weather = await getForecast();

                this.innerHTML = `
                    <div class='WeatherForecast_Root' >
                        <div class='WeatherForecast_Content_Div'>
                            <div class='WeatherForecast_Forecast_Div'>
                                <h3 class='WeatherForecast_Forecast_Text'>Todays Average weather!: ${weather[1]}°C</h3>
                                <h3 class='WeatherForecast_Forecast_Text'>With a high of ${weather[0]}°C !</h3>
                            </div>
                        </div>
                    </div>
                `;
            }
        }

        customElements.define(name, WeatherForecast);

    }

    defineInfo();
})();

async function FetchData(link, content, method, body) {

    const fetchData = {
        headers: {
            "Content-Type" : content,
        },
        method: method,
    };

    if (body) {
        fetchData.body = JSON.stringify(body);
    }

    return await fetch(link, fetchData).then((res) => res.status === 200 ? res.json() : res.status === 201 ?  console.log("Created " + res.status) : res.status === 404 ? console.log("Source not available: " + res.status) : console.log("Forbidden: " + res.statusText));
}


