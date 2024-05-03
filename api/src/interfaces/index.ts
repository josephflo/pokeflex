export interface Pokemon {
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