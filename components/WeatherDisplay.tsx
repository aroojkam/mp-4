// components/WeatherDisplay.tsx
import { WeatherData } from '@/types/weather';

type WeatherDisplayProps = {
  weatherData: WeatherData;
};

export default function WeatherDisplay({ weatherData }: WeatherDisplayProps) {
  const current = weatherData.currentConditions;
  
  return (
    <section className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Current Weather in {weatherData.resolvedAddress}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">{current.conditions}</h3>
          <p className="text-4xl font-bold">{current.temp}°C</p>
          <p>Feels like: {current.feelslike}°C</p>
        </div>
        
        <div className="space-y-2">
          <p><strong>Humidity:</strong> {current.humidity}%</p>
          <p><strong>Wind:</strong> {current.windspeed} km/h</p>
          <p><strong>Pressure:</strong> {current.pressure} hPa</p>
        </div>
      </div>
      
      <h3 className="text-xl font-bold mt-8 mb-4">Forecast</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {weatherData.days.slice(1, 5).map((day) => (
          <div key={day.datetime} className="p-4 bg-gray-50 rounded-md">
            <p className="font-semibold">{new Date(day.datetime).toLocaleDateString('en-US', { weekday: 'short' })}</p>
            <p className="text-lg font-bold">{day.temp}°C</p>
            <p>{day.conditions}</p>
          </div>
        ))}
      </div>
    </section>
  );
}