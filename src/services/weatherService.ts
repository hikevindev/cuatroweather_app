import { WeatherRepo } from '../repositories/weatherRepository';

export class WeatherService {
  private weatherRepository: WeatherRepo;

  constructor(weatherRepository: WeatherRepo) {
    this.weatherRepository = weatherRepository;
  }

  async getWeatherByCity(location: string, lang: string): Promise<any> {
    const currentWeather = await this.weatherRepository.getCurrentWeather(
      location,
      lang
    );
    return {
      city: currentWeather.name,
      humidity: currentWeather.main.humidity,
      tempFeels: currentWeather.main.feels_like,
      temp: currentWeather.main.temp,
      tempMax: currentWeather.main.temp_max,
      tempMin: currentWeather.main.temp_min,
      windVelocity: currentWeather.wind.speed,
      weather: currentWeather.weather[0],
    };
  }

  async getForecastByCity(location: string, lang: string): Promise<any> {
    const forecast = await this.weatherRepository.getWeatherForecast(
      location,
      lang
    );
    return {
      ...forecast,
    };
  }
}
