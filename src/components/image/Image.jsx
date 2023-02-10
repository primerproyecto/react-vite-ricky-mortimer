import estilos from './Image.module.css'

const Image = (props) => {
    return (
        <img className={estilos.imagen} src={props.url} width={props.width} height={props.height} alt={props.alt}  />
    ) 
}
export default Image