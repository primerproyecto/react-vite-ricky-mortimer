import estilos from './Paragraph.module.css'
const Paragraph = (props) => {
    return (
        <p className={estilos.regular}>{props.texto}</p>
    )
}
export default Paragraph