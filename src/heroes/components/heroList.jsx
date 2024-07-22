import HeroCard from './heroCard';
import { getHeroes } from '../helpers/getHeroesPublicos';


const HeroList = ({ publisher }) => {
   
    const heroesList = getHeroes(publisher);
    return (
        <>
            <ul className='flex flex-wrap justify-center gap-10 mb-10'>
                {heroesList.map(hero => (
                    <HeroCard 
                     key={hero.id}
                     {...hero}
                    />
                ))}
            </ul>
        </>
    );
};

export default HeroList;
