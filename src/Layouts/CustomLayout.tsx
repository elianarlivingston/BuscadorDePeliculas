import * as React from "react"

interface ComponentProps {
    children: React.ReactNode
}

const CustomLayout = (props: ComponentProps) => {
    const { children } = props
    return (
        <>
            <header>header</header>
            <main>{ children }</main>
            <footer>footer</footer>
        </>
    )
}

export default CustomLayout