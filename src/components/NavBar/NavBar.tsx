import './NavBar.scss'

export const NavBar = () => {
    return (
        <header className="navbar">
            <div className='navbar__logo'>
                <h1>CuatroWeatherApp</h1>
            </div>
            <div className="navbar__actions">
                <select>
                    <option>Ingles</option>
                    <option>Español</option>
                </select>
                <button>Cerrar Sesión</button>
            </div>
        </header>
    )
}

