// types/weather.ts
export interface WeatherData {
    resolvedAddress: string;
    days: WeatherDay[];
    currentConditions: CurrentConditions;
  }
  
  export interface WeatherDay {
    datetime: string;
    temp: number;
    feelslike: number;
    humidity: number;
    precip: number;
    precipprob: number;
    windspeed: number;
    winddir: number;
    pressure: number;
    conditions: string;
    description: string;
    icon: string;
  }
  
  export interface CurrentConditions {
    temp: number;
    feelslike: number;
    humidity: number;
    windspeed: number;
    winddir: number;
    pressure: number;
    conditions: string;
    icon: string;
  }