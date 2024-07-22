import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroesId } from "../helpers/getHeroeId";


const Heroe = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = getHeroesId(id);

  const heroImagen = `src/assets/heroes/${id}.jpg`;
  console.log(heroImagen);
  const { superhero, characters, alter_ego, publisher, first_appearance } = hero;

  if (!hero) {
    return <Navigate to={"/marvel"} />;
  }

  const Logout = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="card w-96 bg-black shadow-xl">
        <div className="card-body">
          <h2 className="mb-5 font-bold text-center text-white text-2xl">{superhero}</h2>
          <p className="text-white text-lg">{alter_ego}</p>
          <p className="text-white text-lg">{publisher}</p>
          <p className="text-white text-lg">{first_appearance}</p>
          {alter_ego !== characters && (
            <p className="text-white text-lg mb-4">{characters}</p>
          )}
        </div>
        <figure>
          <img className="w-[100%] h-[100%]" src={heroImagen} alt={superhero} />
        </figure>
        <button onClick={Logout} className="btn btn-primary text-lg m-5">Regresar</button>
      </div>
    </>
  );
};

export default Heroe;