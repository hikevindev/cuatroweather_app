import { useState } from "react"
import { useTranslation } from "react-i18next"
import { WeatherRepo } from "../repositories/weatherRepository"
import { WeatherService } from "../services/weatherService"

const weatherService = new WeatherService(new WeatherRepo())

const Dashboard = () => {
    const [city, setCity] = useState()
    const [weather, setWeather] = useState()
    const { t } = useTranslation()
    
    const handleCityWeather = async () => {
        const weatherData = await weatherService.getWeatherByCity('Valencia');
    }

    return (
        <div>
            Dashboard, {t('welcome')} , kevin
            <button onClick={handleCityWeather}>setear valencia</button>
        </div>
    )
}

export default Dashboard