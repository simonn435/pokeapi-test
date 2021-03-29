import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import Pokemons from "./Pokemons";
import { getAllPokemons, getPokemon } from "../api";
import Pagination from "./Pagination";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  // GET POKEMONS DATA
  const fetchPokemonsData = async () => {
    setLoading(true);
    const data = await getAllPokemons(10, page * 10);
    const pokemonData = await Promise.all(
      data.results.map((pokemon) => {
        return getPokemon(pokemon.name);
      }),
    );
    setPokemons(data.results);
    setPokemonInfo(pokemonData);
    setTotal(Math.ceil(data.count / 10 - 1));
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemonsData();
  }, [page]);

  const nextPage = () => {
    setPage(Math.min(page + 1, total));
  };

  const prevPage = () => {
    setPage(Math.max(page - 1, 0));
  };

  const statsColor = (number) => {
    console.log(number);
    if (number < 50) {
      return "danger";
    } else if (number >= 50 && number < 75) {
      return "warning";
    } else {
      return "success";
    }
  };

  return (
    <section>
      <Searchbar statsColor={statsColor} />
      <Pagination
        page={page}
        total={total}
        nextPage={nextPage}
        prevPage={prevPage}
      />
      <Pokemons
        pokemonInfo={pokemonInfo}
        loading={loading}
        statsColor={statsColor}
      />
      <Pagination
        page={page}
        total={total}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </section>
  );
};

export default Pokedex;
