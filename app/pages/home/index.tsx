import { Container } from "~/components/layout";
import Search from "~/components/search";
import "~/styles/pages/index/index.scss";

export default function Home() {
    return (
        <div className="home-page">
            <Container className="home-page-title">
                <h1>Check the weather all around the <span>world!</span></h1>
                <p>
                    Type in a name of chosen city to look up both current weather
                    and forecast for coming days.
                </p>
            </Container>

            <Container className="home-page-search">
                <Search />
            </Container>
        </div>
    );
}