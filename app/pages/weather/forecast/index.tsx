import { Section, Container } from "~/components/layout";
import "~/styles/pages/weather/forecast.scss";

export default function Forecast({ forecast }: { forecast: any }) {
    if (!forecast) return null;

    const daily = forecast.list.filter((f: any) => f.dt_txt.includes("12:00:00"));

    return (
        <Section className="weather-section">
            <Container className="weather-forecast">
                <h2>5-Day Forecast</h2>
                <div className="forecast-list">
                    {daily.map((item: any) => (
                        <div key={item.dt} className="forecast-item">
                            <span className="date">{new Date(item.dt * 1000).toLocaleDateString([], { weekday: 'short', day: 'numeric' })}</span>
                            <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="icon" />
                            <span className="temp">{Math.round(item.main.temp)}°C</span>
                            <h3>Rain</h3>
                            <div className="extra-info">
                                <span>{Math.round(item.pop * 100)}%</span>
                                {item.rain && <span>{item.rain['3h']}mm</span>}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}