import { combineReducers, configureStore } from '@reduxjs/toolkit';
import weatherReducer from './slices/weatherSlice';
import forecastReducer from './slices/forecastSlice';
import sessionReducer from './slices/sessionSlice';

const rootReducer = combineReducers({
  session: sessionReducer,
  weather: weatherReducer,
  forecast: forecastReducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof setupStore>['dispatch'];
export type AppStore = ReturnType<typeof setupStore>;
