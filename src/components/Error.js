import { useRouteError } from "react-router";

const Error = () => {

    const err = useRouteError();

    return (
        <div>
            <h1>Opps we have some Error</h1>
            <h4>{err.status}: {err.statusText}</h4>
            <h4></h4>

        </div>
    )
}

export default Error;