interface Data {
    weather: object | null,
    forecast: object | null,
    searchedCity: string | null
}

export default function Weather({ data }: { data: Data }) {
    return <></>;
}