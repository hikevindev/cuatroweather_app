export type WeatherSlice = {
  city: string;
  humidity: number;
  temp: number;
  tempFeels: number;
  tempMax: number;
  tempMin: number;
  weather: weather;
  windVelocity: number;
};

export type forecastSliceType = {
  list: Array<any> | null;
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
