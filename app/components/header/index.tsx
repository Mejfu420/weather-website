import "~/styles/components/header.scss";
import { Link } from "react-router";
import Search from "../search";

export default function Header({ searchbar }: { searchbar: boolean }) {
    return (
        <div className="header">
            <div className="header-logo">
                <Link to="/" className="header-logo-link">
                    <img src="/favicon.svg" alt="WeatherApp" />
                    <h2>WeatherApp</h2>
                </Link>
            </div>
            <div className={`header-searchbar ${searchbar ? "" : "hidden"}`}>
                <Search />
            </div>
        </div>
    );
}