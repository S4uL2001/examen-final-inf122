
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import style from "./Pokemons.module.css";


function Pokemon(props) {
    const [pokemonData, setPokemonData] = useState({
        name: "Unknown Pokémon",
        type: "Unknown Type",
        imageUrl: "/default-pokemon-image.png",
    });
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

    const newPokemon = () => {
        const randomPokemonId = Math.floor(Math.random() * 898) + 1;
        const pokemonUrl = `${apiUrl}${randomPokemonId}`;

        fetch(pokemonUrl)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Error al cargar la información del Pokémon: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                const { name = "Unknown Pokémon", types = [{ type: { name: "Unknown Type" } }] } = data;
                const type = types.length > 0 ? types[0].type.name : "Unknown Type";
                const { sprites: { front_default: imageUrl } = { front_default: "/default-pokemon-image.png" } } = data;

                setPokemonData({ name, type, imageUrl });
                props.addPokemonList({ name, type, imageUrl });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        newPokemon();
    }, []);

    return (
        <div className={style.box}>
            <h1>My Pokemon</h1>
            <Button label="Nuevo Pokémon" onClick={newPokemon} />
            <h1>{pokemonData.name}</h1>
            <p>Tipo: {pokemonData.type}</p>
            <Image src={pokemonData.imageUrl} alt={pokemonData.name} width={500} height={500} />
        </div>
    );
}

export default Pokemon;
