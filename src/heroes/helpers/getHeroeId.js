import { heroes } from "../data/heroes";

export const getHeroesId = (id) =>{
  return heroes.find(hero => hero.id === id);
}