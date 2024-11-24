import { RootState } from '../../redux/store';

export const MOCK_STORE_STATE: Partial<RootState> = {
  weather: {
    data: {
      city: 'London',
      humidity: 0,
      windVelocity: 0,
      temp: 0,
      tempFeels: 0,
      tempMax: 0,
      tempMin: 0,
      weather: null,
    },
    loading: false,
    error: false,
  },
  forecast: {
    list: null,
    city: null,
    loading: false,
    error: false,
  },
  session: {
    user: null,
  },
};
