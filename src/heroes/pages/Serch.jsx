import HeroCard from "../components/heroCard";
import { useForm } from "../../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { getNameHeroes } from "../helpers/getHeroeFilter";
const Serch = () => {

  const navigate = useNavigate();
  const location = useLocation();
  
  // Extraer parámetro de la URL llamado 'query'
  const { query = '' } = queryString.parse(location.search);

  const { serch, onInputChange } = useForm({
    serch: query, // Establecer el valor inicial del campo de búsqueda como el valor del parámetro 'query'
  });

  const onSerchSubmit = (e) => {
    e.preventDefault();
    if (serch.trim().length <= 1) return;
    navigate(`?query=${serch}`);
  };

  // Usar el nombre correcto del parámetro en la función 'getNameHeroes'
  const heroes = getNameHeroes(query);

  return (
    <>
      <div className=" flex flex-col gap-10 justify-center items-center">
        <h2 className="text-white text-2xl font-bold">Buscador de Heroes</h2>
        <form onSubmitCapture={onSerchSubmit}>
          <label className="input input-bordered flex items-center gap-2 text-white">
            <input
              type="text"
              className="w-[450px] h-4 "
              name="serch"
              value={serch}
              onChange={onInputChange}
              placeholder="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-6 h-6 opacity-70 cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </form>

        <div className=" mt-10 flex flex-col flex-wrap justify-center items-center">
            {
              (query === '')
               ?
                <div role="alert" className="alert alert-info">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-current shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>New software update available.</span>
                </div>
             : (heroes.length === 0) &&
                
                 <div role="alert" className="alert alert-error">
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   className="stroke-current shrink-0 h-6 w-6"
                   fill="none"
                   viewBox="0 0 24 24"
                 >
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                   />
                 </svg>
                 <span>Error! Task failed successfully.</span>
                 </div>
            }
           
          { heroes.map( hero => (
              <HeroCard key={hero.id} {...hero}/>
          ))}
          {/* <HeroCard/> */}
        </div>
      </div>
    </>
  );
};

export default Serch;
