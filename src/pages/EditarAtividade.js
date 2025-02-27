import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useActivity } from "../context/ActivityContext";

const EditarAtividade = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { atividades, updateAtividade } = useActivity();
  
  const atividadeExistente = atividades.find((a) => a.id === Number(id));

  const [formData, setFormData] = useState({
    nome: "",
    responsavel: "",
    data: "",
    descricao: "",
  });

  useEffect(() => {
    if (atividadeExistente) {
      setFormData(atividadeExistente);
    }
  }, [atividadeExistente]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateAtividade(Number(id), formData);
    navigate("/"); // Redireciona para a listagem após salvar
  };

  return (
    <div className="container">
      <h1>Editar Atividade</h1>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />

        <label>Responsável:</label>
        <input type="text" name="responsavel" value={formData.responsavel} onChange={handleChange} required />

        <label>Data:</label>
        <input type="date" name="data" value={formData.data} onChange={handleChange} required />

        <label>Descrição:</label>
        <textarea name="descricao" value={formData.descricao} onChange={handleChange} required />

        <button type="submit" className="btn editar">Salvar Alterações</button>
        <button type="button" className="btn voltar" onClick={() => navigate("/")}>Cancelar</button>
      </form>
    </div>
  );
};

export default EditarAtividade;
