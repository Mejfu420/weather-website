import { Section, Container } from "~/components/layout";
import "~/styles/pages/weather/details.scss";

export default function Details({ weather, searchedCity }: { weather: any; searchedCity: string | null }) {
    if (!weather) return null;

    const formatTime = (timestamp: number) => {
        return new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <Section className="details-header">
            <Container className="">
                <div className="location-meta">
                    <h1>{weather.name}, {weather.sys.country}</h1>
                    <p className="coords">Lat: {weather.coord.lat} | Lon: {weather.coord.lon}</p>
                </div>
                <div className="sun-times">
                    <span>Sunrise: {formatTime(weather.sys.sunrise)}</span>
                    <span>Sunset: {formatTime(weather.sys.sunset)}</span>
                </div>
            </Container>
        </Section>
    );
}