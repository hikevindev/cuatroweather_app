import { useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next"
import { useEffect } from 'react';
import { fetchWeather } from '../../redux/slices/weatherSlice';
import { AppDispatch } from '../../redux/store';

export const SideBar = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { t } = useTranslation()

    useEffect(() => {
        dispatch(fetchWeather('Londres'))
    },[])

    const changeWeatherCity = (location: string) => {
        dispatch(fetchWeather(location))
    };

    return (
        <aside>
            <div>
                <nav>
                    <p onClick={() => changeWeatherCity('Londres')}>Londres</p>
                    <p onClick={() => changeWeatherCity('Toronto')}>Toronto</p>
                    <p onClick={() => changeWeatherCity('Singapur')}>Singapur</p>
                </nav>
            </div>
        </aside>
    )
}