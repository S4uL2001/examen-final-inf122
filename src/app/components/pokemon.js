"use client";

import { useEffect, useState } from "react";
import style from "./Pokemons.module.css";

function Pokemon(props) {
    const [pokemonData, setPokemonData] = useState({
        id: null, name: "Sudowoodo", type: "Unknown Type", imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png",
        height: null,
        weight: null,
        abilities: [],
        stats: {
            hp: null,
            attack: null,
            defense: null,
            speed: null,
        },
    });

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await fetch("https://pokeapi.co/api/v2/pokemon/185");
                const data = await response.json();

                const newPokemonData = {
                    id: data.id, name: data.name, type: data.types[0]?.type.name || "Unknown Type", imageUrl: data.sprites.front_default || "/default-pokemon-image.png", height: data.height,
                    weight: data.weight,
                    abilities: data.abilities.map((ability) => ability.ability.name),
                    stats: {
                        hp: data.stats.find((stat) => stat.stat.name === "hp").base_stat,
                        attack: data.stats.find((stat) => stat.stat.name === "attack").base_stat,
                        defense: data.stats.find((stat) => stat.stat.name === "defense").base_stat,
                        speed: data.stats.find((stat) => stat.stat.name === "speed").base_stat,
                    },
                };

                setPokemonData((prevData) => ({ ...prevData, ...newPokemonData }));
                props.addPokemonList((prevData) => ({ ...prevData, ...newPokemonData }));
            } catch (error) {
                console.error(error);
            }
        };

        fetchPokemonData();
    }, []);

    return (
        <div className={style.box}>
            <h1>My Pokemon</h1>
            <h1 className={style.H}>{pokemonData.name}</h1>
            <p className={style.nom}># {pokemonData.id}</p>
            <img src={pokemonData.imageUrl} alt={pokemonData.name} width={500} height={500} />
            <h3 className={style.t}>About</h3>
            <div>
                <div className={style.am}>
                    <p>Type:            </p> <p className={style.ps}>{pokemonData.type}</p>
                </div>
                <div className={style.am}>
                    <p>Height:          </p> <p className={style.ps}>{pokemonData.height}</p>
                </div>
                <div className={style.am}>
                    <p>Weight:          </p> <p className={style.ps}>{pokemonData.weight}</p>
                </div>
                <div className={style.am}>
                    <p >Abilities:          </p> <p className={style.ps}>{pokemonData.abilities.join(", ")}</p>
                </div>
            </div>
            <div>
                <h3>Stats</h3>
                <p>HP: {pokemonData.stats.hp}</p>
                <p>Attack: {pokemonData.stats.attack}</p>
                <p>Defense: {pokemonData.stats.defense}</p>
                <p>Speed: {pokemonData.stats.speed}</p>
            </div>
        </div>
    );
}

export default Pokemon;

