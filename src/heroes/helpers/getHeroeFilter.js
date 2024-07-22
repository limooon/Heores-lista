import {heroes} from '../data/heroes'

export const getNameHeroes = (name = '') =>{
     
    name = name.toLowerCase().trim();
    if(name.length === 0) return [];
     
    //validar si el nombre que recive por parametro existe y si exuiste traer 
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name));
}