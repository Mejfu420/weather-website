import type { Route } from "./+types/index";
import Home from "~/pages/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "WeatherApp" },
    { name: "description", content: "Check weather for chosen location!" },
  ];
}

export default function Index() {
    return <Home />;
}