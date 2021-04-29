import React from "react";
import Loading from "./Loading";
import { colors } from "../colors";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Pokemons = ({
  pokemonInfo,
  loading,
  statsColor,
  favorites,
  handleFavorites,
}) => {
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center">
      {loading ? (
        <Loading />
      ) : (
        pokemonInfo.map((pokemon, index) => {
          return (
            <div
              key={index}
              style={{
                width: "450px",
                minHeight: "450px",
                letterSpacing: "2px",
              }}
              className="m-2 p-2 bg-dark rounded text-light d-flex flex-column justify-content-center"
            >
              <div className="text-center">
                <img src={pokemon.sprites.front_default} alt="image" />
              </div>

              <div className="card-name d-flex justify-content-between align-items-center">
                <h3 className="text-capitalize">{pokemon.name}</h3>
                <h3># {pokemon.id}</h3>
              </div>

              <div className="d-flex flex-wrap">
                {pokemon.stats.map((stat, index) => {
                  return (
                    <div
                      key={index}
                      className="d-flex justify-content-between align-items-center w-50 py-3 px-1 text-uppercase"
                    >
                      <h6>{stat.stat.name}</h6>
                      <h6 className={`text-${statsColor(stat.base_stat)}`}>
                        {stat.base_stat}
                      </h6>
                    </div>
                  );
                })}
              </div>

              <div className="d-flex flex-wrap">
                {pokemon.abilities.map((ability, index) => {
                  return (
                    <span
                      key={index}
                      className="mr-2 py-1 px-3 rounded text-uppercase my-1 font-weight-bold"
                      style={{ backgroundColor: "#a4acaf" }}
                    >
                      {ability.ability.name}
                    </span>
                  );
                })}
              </div>

              <div className="d-flex flex-wrap">
                {pokemon.types.map((type, index) => {
                  return (
                    <span
                      key={index}
                      className="mr-2 text-uppercase rounded py-1 px-3 my-1 font-weight-bold"
                      style={{ backgroundColor: colors[type.type.name] }}
                    >
                      {type.type.name}
                    </span>
                  );
                })}
              </div>

              <div className="py-2">
                {favorites.includes(pokemon.name) ? (
                  <button
                    style={{ fontSize: "2rem", cursor: "pointer" }}
                    className="bg-transparent border-0 text-light"
                    onClick={() => handleFavorites(pokemon.name)}
                  >
                    <AiFillHeart />
                  </button>
                ) : (
                  <button
                    style={{ fontSize: "2rem", cursor: "pointer" }}
                    className="bg-transparent border-0 text-light"
                    onClick={() => handleFavorites(pokemon.name)}
                  >
                    <AiOutlineHeart />
                  </button>
                )}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Pokemons;
