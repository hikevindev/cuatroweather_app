import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { WeatherRepo } from '../../repositories/weatherRepository';
import { WeatherService } from '../../services/weatherService';
import { forecastSliceType } from './types';

const weatherService = new WeatherService(new WeatherRepo());

export const fetchForecast = createAsyncThunk(
  'forecast/fetchForecas',
  async (location: string, { rejectWithValue }) => {
    try {
      const forecastData = await weatherService.getForecastByCity(location);
      if (!forecastData) throw new Error('Error al obtener la previsión');

      return forecastData;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const initialState: forecastSliceType = {
  list: [],
  city: null,
  loading: false,
  error: false,
};

export const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchForecast.fulfilled, (state, action) => {
        state.list = action.payload.list.slice(0, 3);
        state.city = action.payload.city;
        state.loading = false;
      })
      .addCase(fetchForecast.pending, (state) => {
        state.loading = true;
      });
  },
});

export default forecastSlice.reducer;
