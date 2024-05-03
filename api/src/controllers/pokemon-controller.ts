import {Request, Response} from 'express'
import { handleHttp } from '../utils/error.handle'
import {createPokemonService, getAllPokemonsService} from '../services/pokemonServices'


const getPokemon = (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    handleHttp(res, 'ERROR_GET_POKEMON')
  }
}

const getAllPokemons = async (req: Request, res: Response) => {
  try {
    const response = await getAllPokemonsService()
    res.send(response)
  } catch (error) {
    
  }
}

const updatePokemon = async (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    
  }
}

const createPokemon = async ({body}: Request, res: Response) => {
  try {
    const newPokemon = await createPokemonService(body)
    res.send(newPokemon)
    console.log(`New Pokemon has been created: ${newPokemon}`)
  } catch (error) {
    handleHttp(res, 'ERROR_CREATE_POKEMON',error)
  }
}

const deletePokemon = async (req: Request, res: Response) => {

}


export {getPokemon, getAllPokemons, updatePokemon, createPokemon, deletePokemon}