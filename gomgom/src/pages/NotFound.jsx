import { useLocation } from "react-router-dom";

export const NotFound = () => {
    let location = useLocation();
    console.log(location);

    return (
        <h1>Page not found at {location.pathname}</h1>
    );
}

export default NotFound;