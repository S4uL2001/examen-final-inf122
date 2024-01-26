import React from "react";
import Item from "./Item";
import style from "./itemList.module.css";
export default function ItemList({ pokemon }) {
    
    if (!pokemon) {
        return null; 
    }

    return (
        <div className={style.container}>
            <Item imageUrl={pokemon.imageUrl} name={pokemon.name} />
        </div>
    );
}
