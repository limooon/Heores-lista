import {heroes} from '../data/heroes'

//valida la informacion de la dara y filtra los datos dependiendo del valid en el piblisher
export const getHeroes = (publisher) => {
    const valid = ['DC Comics','Marvel Comics'];
    if(!valid.includes(publisher)){
        throw new Error(`invalid ${publisher}`)
    }
    return heroes.filter(hero => hero.publisher === publisher)
}