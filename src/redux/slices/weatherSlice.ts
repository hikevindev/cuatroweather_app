import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { WeatherSliceType } from './types';
import { WeatherService } from '../../services/weatherService';
import { WeatherRepo } from '../../repositories/weatherRepository';

const weatherService = new WeatherService(new WeatherRepo());

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (location: string, { rejectWithValue }) => {
    try {
      const weatherData = await weatherService.getWeatherByCity(location);
      if (!weatherData) throw new Error('Error al obtener clima');

      return weatherData;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const initialState: WeatherSliceType = {
  loading: false,
  data: null,
  error: false,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export default weatherSlice.reducer;
