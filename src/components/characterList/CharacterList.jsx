import React, {useId} from "react";
import { Card } from "../card/Card";
import styles from './CharacterList.module.css'

const CharacterList = () => {
  const [characterList, setCharacterList] = React.useState([]);

  const IdCharacter = useId()

  React.useEffect(() => {
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
        (res) => res.json()
      );

      setCharacterList(data.results);
    })();
  }, []);

  return (
    <>
      {characterList.map((character) => (
        <div className={styles.background} key={IdCharacter + character.id } >
        <Card key={character.id} character={character}/>
        </div>
      ))}
    </>
  );
};

export default CharacterList