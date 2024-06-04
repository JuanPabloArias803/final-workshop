import styles from './navbar.css'

export function Navbar(username){
    return `
        <nav class="${styles.navbar}">
            <p>Bienvenido ${username}</p>
            <button id="logout">Cerrar Sesión</button>
        </nav>
    `;
}