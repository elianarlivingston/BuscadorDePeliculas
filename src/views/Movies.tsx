import { useParams } from "react-router";

const Movies = () => {
    const { type } = useParams() as any;
    return (
        <h1>Movies { type }</h1>
    )
}

export default Movies