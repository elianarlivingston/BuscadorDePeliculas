import { Link, NavLink } from "react-router-dom"
import { Menu } from "antd";
import logo from '../../assets/logo.svg'

const lang = 'es'
const NAVS = [
    {
        path: '/',
        text: {
            es: 'Inicio',
            en: 'Home'
        }
    },
    {
        path: '/movies/now_playing',
        text: {
            es: 'Ultimos lanzamientos',
            en: 'Latest releases'
        }      
    },
    {
        path: '/movies/popular',
        text: {
            es: 'Popular',
            en: 'Popular'
        }      
    },
    {
        path: '/search/movie',
        text: {
            es: 'Buscar',
            en: 'Search'
        }      
    },
]

const Header = () => {
    return (
        <header className="flex gap-4 px-8">
            <Link to="/">
                <figure className="w-10 p-2">
                    <img src={logo} alt="Logo" />
                </figure>
            </Link>

            <Menu
                mode="horizontal"
            >
                {
                    NAVS.map((nav) => (
                        <Menu.Item key={nav.path}>
                            <NavLink to={nav.path}>{nav.text[lang]}</NavLink>
                        </Menu.Item>
                    ))
                }
            </Menu>
        </header>
    )
}

export default Header