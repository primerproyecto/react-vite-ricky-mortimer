import React from "react";
import styles from './card.module.css'
export const Card = (props) => {
  const { character } = props;
  console.log(props)

  return (
    <article className={styles.manuelo}>
      <h2>{character.id}</h2>
      <h3 className={styles.subTitular}>{character.name}</h3>
      <p>{character.status}</p>
      <img src={character.image} />
    </article>
  );
};

export default Card;