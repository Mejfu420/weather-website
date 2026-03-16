import type { Route } from "./+types/weather";
import currentWeather from "~/libs/currentWeather";
import { type LoaderFunctionArgs } from "react-router";
import forecastWeather from "~/libs/forecastWeather";

import WeatherDetails from "~/pages/weather";

export interface Data {
    weather: object | null,
    forecast: object | null,
    searchedCity: string | null
}

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "WeatherApp" },
        { name: "description", content: "Check weather for chosen location!" },
    ];
}

export async function loader({ request }: LoaderFunctionArgs) {
    const url = new URL(request.url);
    const location: string | null = url.searchParams.get("location");
    if (!location) return {
        weather: null,
        forecast: null,
        searchedCity: null
    };
    const currentRes = await currentWeather(location);
    const forecastRes = await forecastWeather(location);
    return {
        weather: currentRes,
        forecast: forecastRes,
        searchedCity: location
    };
}

export default function Weather({ loaderData }: Route.ComponentProps) {
    const data: Data = loaderData;

    return <WeatherDetails data={data} />;
}