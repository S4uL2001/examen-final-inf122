'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Pokemon from "./components/pokemon";
import { useState } from "react";
import ItemList from "./components/itemList";

export default function Home() {
  const [pokemons, setPokemons] = useState([])

  const addPokemonList = (pokemon) => {
    setPokemons([...pokemons, pokemon])
  }

  return (
    <main className={styles.main}>
      <Pokemon addPokemonList={addPokemonList}/>
      <ItemList pokemons={pokemons} />
    </main>
  );
}

