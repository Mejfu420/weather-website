const API_KEY = import.meta.env.VITE_API_KEY;

interface Coordinates {
    lat: string;
    lon: string;
    name: string;
}

export async function getCoordinates(cityName: string): Promise<Coordinates | null> {
    if (!API_KEY) {
        console.error("Brak klucza API w zmiennych środowiskowych!");
        return null;
    }

    try {
        const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(cityName)}&limit=1&appid=${API_KEY}`;
        const res = await fetch(url);

        if (!res.ok) throw new Error(`Geocoding failed: ${res.status}`);

        const data = await res.json();

        if (!data || data.length === 0) return null;

        const { lat, lon, name, country } = data[0];

        return {
            lat: lat.toString(),
            lon: lon.toString(),
            name: `${name}, ${country}`
        };
    } catch (error) {
        console.error("Geocoding error:", error);
        return null;
    }
}

export async function getWeather(type: 'weather' | 'forecast', lat: string, lon: string) {
    if (!API_KEY) return null;

    try {
        const url = `https://api.openweathermap.org/data/2.5/${type}?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
        const res = await fetch(url);

        if (!res.ok) throw new Error(`Weather API failed: ${res.status}`);

        return await res.json();
    } catch (error) {
        console.error("Weather API error:", error);
        return null;
    }
}