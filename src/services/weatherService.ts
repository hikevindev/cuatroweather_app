import { WeatherRepo } from "../repositories/weatherRepository";

export class WeatherService {
    private weatherRepository: WeatherRepo

    constructor(weatherRepository: WeatherRepo) {
        this.weatherRepository = weatherRepository
    }

    async getWeatherByCity(location: string): Promise<any> {
        const currentWeather = await this.weatherRepository.getCurrentWeather(location)
        return {
            ...currentWeather
        }
    }

    async getForecastByCity(location: string): Promise<any> {
        const forecast = await this.weatherRepository.getWeatherForecast(location)
        return {
            ...forecast
        }
    }
}