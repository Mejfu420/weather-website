import Details from "./details";
import Current from "./current";
import Forecast from "./forecast";

import type { Data } from "~/routes/weather";

import "~/styles/pages/weather/base.scss"

export default function Weather({ data }: { data: Data }) {
    return (
        <>
            <Details weather={data.weather} searchedCity={data.searchedCity} />
            <Current weather={data.weather} />
            <Forecast forecast={data.forecast} />
        </>
    );
}