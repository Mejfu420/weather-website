import { getWeather, getCoordinates } from "./apiCall";

interface Coordinates {
    lat: string;
    lon: string;
    name: string;
}

export default async function currentWeather(cityName: string) {
    const data: Coordinates | null = await getCoordinates(cityName);

    if (!data) return null;

    const res = await getWeather('weather', data.lat, data.lon);

    if (!res) return null;
    return res;
}