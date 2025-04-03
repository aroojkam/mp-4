// app/api/weather/route.ts
import { NextRequest } from 'next/server';
import { getWeatherData } from '@/weather';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const location = searchParams.get('location');

  if (!location) {
    return new Response(JSON.stringify({ error: 'Location is required' }), { status: 400 });
  }

  try {
    const weatherData = await getWeatherData(location);
    return new Response(JSON.stringify(weatherData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message || 'Error fetching weather data' }), {
      status: 500,
    });
  }
}
