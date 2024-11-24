import axios from 'axios';
import { API_KEY, BASE_URL } from '../config/weatherConfig';
import { IweatherRepo } from './IweatherRepository';

export class WeatherRepo implements IweatherRepo {
  private axios = axios.create({
    baseURL: BASE_URL,
    params: {
      appid: API_KEY,
      units: 'metric',
    },
  });

  async getCurrentWeather(location: string, lang: string): Promise<any> {
    const response = await this.axios.get('weather', {
      params: { q: location, lang: lang },
    });
    return response.data;
  }

  async getWeatherForecast(location: string, lang: string): Promise<any> {
    const response = await this.axios.get('forecast', {
      params: { q: location, lang: lang },
    });
    return response.data;
  }
}
