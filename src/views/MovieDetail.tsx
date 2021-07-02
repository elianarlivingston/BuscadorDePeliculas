import { useParams } from "react-router";

const MovieDetail = () => {
    const { id } = useParams() as any;
    return (
        <h1>Modie Detail { id }</h1>
    )
}

export default MovieDetail