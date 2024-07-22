import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  

  const { login } = useContext(AuthContext);
  //hacese redirecion al menu
  const navigate = useNavigate(); 

  const redirect = () => {

      //en la redirecionmanmdas allamar la funcion del login desde el contexto
      login('edgar');
      navigate("/",{
        replace: true
      });
  };

  return (
    <>
      <div className="flex justify-center flex-col items-center gap-6 mt-7">
        <p className="text-3xl font-bold">Login</p>
        <button onClick={redirect} className="btn btn-primary text-lg w-[180px]">
          Acceso
        </button>
      </div>
    </>
  );
};

export default Login;
