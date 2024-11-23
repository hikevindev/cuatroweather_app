import { combineReducers, configureStore } from '@reduxjs/toolkit';
import weatherReducer from './slices/weatherSlice';
import forecastReducer from './slices/forecastSlice';
import sessionReducer from './slices/sessionSlice';

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    weather: weatherReducer,
    forecast: forecastReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
