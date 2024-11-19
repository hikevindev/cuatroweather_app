export interface IweatherRepo {
    getCurrentWeather(location: string): Promise<any>
    getWeatherForecast(location: string): Promise<any>
}