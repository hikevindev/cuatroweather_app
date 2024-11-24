export interface IweatherRepo {
  getCurrentWeather(location: string, lang: string): Promise<any>;
  getWeatherForecast(location: string, lang: string): Promise<any>;
}
