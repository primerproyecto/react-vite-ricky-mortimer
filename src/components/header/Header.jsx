import Title from "../title/Title"
import estilos from './Header.module.css'
import SubTitle from '../subTitle/SubTitle'

const Header = ({children}) => {
    return (



        <header className={estilos.header}><Title titulo="Título de la aplicación" className="manuela" />
        <SubTitle subtitulo='Subtítulo de ejemplo'/>{children}</header>
    )
}
export default Header