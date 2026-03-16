import { getWeather, getCoordinates } from "./apiCall";

interface Coordinates {
    lat: string;
    lon: string;
    name: string;
}

export default async function forecastWeather(cityName: string) {
    const data: Coordinates | null = await getCoordinates(cityName);

    if (!data) return null;

    const res = await getWeather('forecast', data.lat, data.lon);

    if (!res) return null;
    return res;
}