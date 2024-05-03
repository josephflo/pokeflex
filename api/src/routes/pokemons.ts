import { Router } from "express";
import { createPokemon, deletePokemon, getAllPokemons, getPokemon, updatePokemon } from "../controllers/pokemon-controller";


const router = Router();

router.get('/', getAllPokemons)

router.get('/:id', getPokemon)

router.post('/', createPokemon)

router.put('/:id', updatePokemon)

router.delete('/:id', deletePokemon)



export {router}