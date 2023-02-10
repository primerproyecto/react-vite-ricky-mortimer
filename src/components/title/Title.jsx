import estilos from './Title.module.css'

const Title = (props) => {
    return (
        <h1 className={estilos.titular}>{props.titulo}</h1>
    )
}
export default Title