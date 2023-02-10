import estilos from './ItemList.module.css'
const ItemList = ({children}) => {
    return (
        <li className={estilos.item}>{children}</li>
    )
}
export default ItemList