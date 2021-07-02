import { Button } from "antd"

interface ComponentProps {
    id?: string;
    title?: string;
    overview?: string;
}

const Movie = (props: ComponentProps) => {
    const { id, title, overview } = props
    
    return (
        <article>
            <header>
                <h2>{ title }</h2>
                <p>{ overview }</p>
                
                    <Button type="primary">
                        Ver más
                    </Button>
            </header>
        </article>
    )
}

export default Movie