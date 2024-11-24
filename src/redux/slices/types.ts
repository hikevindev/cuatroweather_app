export type WeatherSlice = {
  city: string;
  humidity: number;
  temp: number;
  tempFeels: number;
  tempMax: number;
  tempMin: number;
  weather: weather | null;
  windVelocity: number;
};

export type fetchWeaterParams = {
  location: string;
  lang: string;
};

export type forecastSliceType = {
  list: Array<object> | null;
  city: object | null;
  loading: boolean;
  error: boolean;
};

export type weather = {
  id: number;
  icon: string;
  description: string;
  main: string;
};

export type WeatherSliceType = {
  loading: boolean;
  error: boolean;
  data: null | WeatherSlice;
};

export type SessionSliceType = {
  user: null | string;
};
