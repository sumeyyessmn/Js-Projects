class WeatherAPI{
    constructor(){
    this.baseURL = "https://api.openweathermap.org/data/2.5/weather";
    this.apiKey = "940725feb7396f7cf70d2ce64add965c"
    }

    async getWeatherInfo(cityName){
    const response =  await fetch(`${this.baseURL}?q=${cityName}&appid=${this.apiKey}&units=metric&lang=tr`)
    const data = await response.json();
    return data;
    }
}