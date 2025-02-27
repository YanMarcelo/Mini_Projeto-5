import { useParams, useNavigate } from "react-router-dom";
import { useActivity } from "../context/ActivityContext";

const Detalhes = () => {
  const { id } = useParams();
  const { atividades } = useActivity();
  const atividade = atividades.find((a) => a.id === parseInt(id));
  const navigate = useNavigate();

  if (!atividade) return <h2>Atividade não encontrada!</h2>;

  return (
    <div className="container">
      <div className="atividade-detalhe">
        <h1>{atividade.nome}</h1>
        <p><strong>Responsável:</strong> {atividade.responsavel}</p>
        <p><strong>Data:</strong> {atividade.data}</p>
        <p><strong>Descrição:</strong> {atividade.descricao}</p>

        <div className="acao-btns">
          <button onClick={() => navigate(`/editar/${atividade.id}`)} className="btn editar">
            Editar 
          </button>
          <button onClick={() => navigate("/")} className="btn voltar">
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detalhes;
