import { Routes, Route } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Listagem from "../pages/Listagem";
import Detalhes from "../pages/Detalhes";
import EditarAtividade from "../pages/EditarAtividade"; // Importa a nova página

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Listagem />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/detalhes/:id" element={<Detalhes />} />
      <Route path="/editar/:id" element={<EditarAtividade />} /> {/* Nova rota para edição */}
    </Routes>
  );
};

export default AppRoutes;
