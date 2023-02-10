import estilos from './Footer.module.css'
const Footer = ({children}) => {
    return (
        <footer className={estilos.footer}>{children}</footer>
    )
}
export default Footer