import { Section, Container } from "~/components/layout";
import "~/styles/pages/weather/current.scss";

export default function Current({ weather }: { weather: any }) {
    if (!weather) return null;

    return (
        <Section className="weather-section">
            <Container className="weather-current">
                <h2>Current Conditions</h2>
                <div className="weather-current-grid">
                    <div className="main-card">
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="icon" />
                        <div className="temp-box">
                            <span className="current-temp">{Math.round(weather.main.temp)}°C</span>
                            <p className="description">{weather.weather[0].description}</p>
                        </div>
                    </div>

                    <div className="info-grid">
                        <div className="item"><span>Feels Like</span><strong>{Math.round(weather.main.feels_like)}°C</strong></div>
                        <div className="item"><span>Min / Max</span><strong>{Math.round(weather.main.temp_min)}° / {Math.round(weather.main.temp_max)}°</strong></div>
                        <div className="item"><span>Humidity</span><strong>{weather.main.humidity}%</strong></div>
                        <div className="item"><span>Pressure</span><strong>{weather.main.pressure} hPa</strong></div>
                        <div className="item"><span>Wind Speed</span><strong>{weather.wind.speed} m/s</strong></div>
                        <div className="item"><span>Wind Deg</span><strong>{weather.wind.deg}°</strong></div>
                        <div className="item"><span>Cloudiness</span><strong>{weather.clouds.all}%</strong></div>
                        <div className="item"><span>Visibility</span><strong>{weather.visibility / 1000} km</strong></div>
                        <div className="item"><span>Sea Level</span><strong>{weather.main.sea_level || 'N/A'}</strong></div>
                        <div className="item"><span>Ground Level</span><strong>{weather.main.grnd_level || 'N/A'}</strong></div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}