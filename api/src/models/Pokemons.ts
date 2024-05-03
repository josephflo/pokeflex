import mongoose, { Schema, Types, model, Document } from "mongoose";

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
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    img: String,
    hp: Number,
    attack: Number,
    defense: Number,
    speed: Number,
    height: Number,
    weight: Number
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const PokemonModel = model("Pokemons", PokemonSchema);
export default PokemonModel;