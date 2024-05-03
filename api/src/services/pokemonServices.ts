import PokemonModel, { IPokemon } from "../models/Pokemons"

export async function createPokemonService (pokemon: IPokemon) {
  const newPokemon = await PokemonModel.create(pokemon)
  return newPokemon
}

export async function getAllPokemonsService() {
  const allPokemons = await PokemonModel.find({})
  return allPokemons
}