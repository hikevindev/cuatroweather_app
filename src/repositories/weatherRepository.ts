import axios from "axios"
import i18n from "../config/i18n"
import { API_KEY , BASE_URL} from "../config/weatherConfig"
import { IweatherRepo } from "./IweatherRepository"

export class WeatherRepo implements IweatherRepo {
    private axios = axios.create({
        baseURL: BASE_URL,
        params: {
            appid: API_KEY,
            units: 'metric',
            lang: i18n.language
        }
    })

    async getCurrentWeather(location: string): Promise<any> {
        const response = await this.axios.get('weather', { params: { q: location }})
        return response.data
    }

    async getWeatherForecast(location: string): Promise<any> {
        const response = await this.axios.get('forecast', { params: { q: location }})
        return response.data
    }
}