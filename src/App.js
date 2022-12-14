// Importar el componente Navigate solo
import {
  BrowserRouter as Router,  // renombrando el componente
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

// iMPORTAMOS TODAS LAS PAGINAS QUE ESTARAN ASOCIADAS A LAS RUTAS
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UsersPage from "./pages/UsersPage";
import UserPage from "./pages/UserPage";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";

//IMPORTAMOS EL COMPONENTE Navbar
import Navbar from "./components/Navbar";

// uso de Router como envolvente de la Routes y Route 
// Route anidado para subrutas welcome es /dashboard/welcome

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users/*" element={<UserPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/myusers/" element={<Navigate replace to="/users" />} />
        <Route path="/users/:id" element={<UserPage />} />
        <Route path="/dashboard/*" element={<DashboardPage />}>
          <Route path="welcome" element={<p>Welcome!</p>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
