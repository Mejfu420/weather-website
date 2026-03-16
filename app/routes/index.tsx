import type { Route } from "./+types/index";
import currentWeather from "~/libs/currentWeather";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Weather App" },
    { name: "description", content: "Check weather for chosen location!" },
  ];
}

export default function Index() {
    return <></>;
}