

import AuthProvider from "./auth/context/AuthProvider";
import AppRouter from "./router/AppRouter";
function App() {
  //renderizar el router con vistas y obtienes el prevedor de servicio para todos los componentes
  return (
    <>
      <AuthProvider>
          <AppRouter/>
      </AuthProvider>
    </>
  );
}

export default App;
