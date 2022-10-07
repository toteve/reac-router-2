// redireccionamiento con useNavigate  y el Outlet para indicar donde mostrar subrutas
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function DashboardPage() {

  // instanciando el useNavigate
  const navigate = useNavigate();

  // funcion para redireccion programatica a la raiz o home
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Dashboard</h1>

       {/* redireccionamiento usando Link en componente Dashboard para que vaya a una subruta  */}
      <Link to="welcome">Say Welcome</Link>

      

      <button onClick={handleClick}>Logout</button>

      {/* componente para indicar donde mostrar subrutas */}
      <Outlet />

    </div>
  );
}
