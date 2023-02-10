import estilos from './Main.module.css'
import Image from '../image/Image'
import CharacterList from '../characterList/CharacterList'
import ItemList from '../itemList/ItemList'
import Paragraph from '../paragraph/Paragraph'


const Main = ({children}) => {
    return (
        <main className={estilos.wrapper}>
        
        <CharacterList>
            <ItemList>
                <Paragraph texto="contenido del componente párrafo" />
                <Image alt="texto alternativo" height="100" width="60" url="https://images.unsplash.com/photo-1673423050335-43b991cf57e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" />
            </ItemList>
        </CharacterList>
        {children}
        
        </main>
    )
}
export default Main