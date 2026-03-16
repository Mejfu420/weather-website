import { Form } from "react-router";

import "~/styles/components/search.scss";

export default function Search() {
    return (
        <Form action="/weather" method="get" className="search-form">
            <input
                type="text"
                name="location"
                placeholder="Enter city name..."
                required
            />
            <button type="submit">Check Weather</button>
        </Form>
    );
}