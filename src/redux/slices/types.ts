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
