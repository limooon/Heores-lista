import { Routes, Route} from "react-router-dom";
import Heroes from "../heroes/routes/HeroesRutas";
import Login from "../auth/pages/Login";


function AppRouter() {
  //JUNTAS TODOS LOS COMPONENTES PARA CREAR LA SRUTAS 
  //la parte de rutas se mostrar dependiendo la url}
  // se colocan las rutas por componente donde heroes tendra las vuisible spara el sistema
  return (
    <>
            
            <Routes>
                <Route path="/Login" element={<Login />} />
                <Route path="/*" element={<Heroes />} />
            </Routes>
    </>
    
  );
}

export default AppRouter;
