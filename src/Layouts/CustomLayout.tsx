import * as React from "react"
import { Header, Footer } from '../components/index'

interface ComponentProps {
    children: React.ReactNode
}

const CustomLayout = (props: ComponentProps) => {
    const { children } = props
    return (
        <div className="custom-layout">
            <Header />
            <main>{ children }</main>
            <Footer />
        </div>
    )
}

export default CustomLayout