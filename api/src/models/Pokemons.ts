import { Schema, model, Document } from "mongoose";
import { v4 as uuidv4 } from 'uuid';

export interface IPokemon extends Document {
    id: string;
    name: string;
    img?: string;
    hp?: number;
    attack?: number;
    defense?: number;
    speed?: number;
    height?: number;
    weight?: number;
    createdInDb: boolean;
}

const PokemonSchema = new Schema<IPokemon>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      default: () => uuidv4()
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
    },
    hp: {
      type: Number,
      required: true
    },
    attack: {
      type: Number,
      required: true
    },
    defense: {
      type: Number,
      required: true
    },
    speed: {
      type: Number,
      required: true
    },
    height: {
      type: Number
    },
    weight: {
      type: Number
    },
    createdInDb: {
      type: Boolean,
      defaultValue: true
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const PokemonModel = model("Pokemons", PokemonSchema);
export default PokemonModel;