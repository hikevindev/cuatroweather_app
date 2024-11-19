export type WeatherSlice = {
  city: string;
  description: string;
  temperature: number;
  tempMax: number;
  tempMin: number;
};

export type WeatherSliceType = {
  loading: boolean;
  error: boolean;
  data: null | WeatherSlice;
};
