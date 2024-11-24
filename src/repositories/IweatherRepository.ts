export interface IweatherRepo {
  getCurrentWeather(location: string, lang: string): Promise<object>;
  getWeatherForecast(location: string, lang: string): Promise<object>;
}
