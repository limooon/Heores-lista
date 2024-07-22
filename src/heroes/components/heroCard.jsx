import { Link } from "react-router-dom";

const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {

  const heroImagen = `src/assets/heroes/${id}.jpg`;
  
  return (
    <>
      <div className="card   bg-black shadow-xl">
        <div className="card-body">
          <h2 className=" mb-5 font-bold text-center text-white text-2xl">{superhero}</h2>
          <p className=" text-white text-lg">{alter_ego}</p>
          <p className=" text-white text-lg">{publisher}</p>
          <p className=" text-white text-lg">{first_appearance}</p>

          {(alter_ego !== characters) && ( <p className=" text-white text-lg mb-4">{characters}</p>)}
          
          <Link className="link link-primary" to={`/hero/${id}`}>
              Mas Informacion
          </Link>
          
        </div>
        <figure>
          <img className=" w-[100%] h-[100%]" src={heroImagen} alt={superhero} />
        </figure>
      </div>
    </>
  );
};

export default HeroCard;
