import { Link } from "react-router-dom"; 
import { useState } from "react";
import { useActivity } from "../context/ActivityContext";

const Listagem = () => {
  const { atividades, removeAtividade } = useActivity();
  const [marcados, setMarcados] = useState({});

  // Função para alternar o estado da bolinha e a cor da presença
  const togglePresenca = (id) => {
    setMarcados((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="container">
      <h1>Lista de Atividades</h1>
      <Link to="/cadastro" className="btn cadastrar">Cadastrar Nova Atividade</Link>

      <div className="atividade-list">
        {atividades.map((atividade) => (
          <div key={atividade.id} className="atividade-card">
            {/* Cabeçalho colorido baseado na presença */}
            <div 
              className={`card-header ${marcados[atividade.id] ? 'presenca-confirmada' : 'presenca-nao-confirmada'}`}
            >
              {atividade.nome}
              {/* Bolinha para alternar a cor de presença */}
              <span
                className={`bolinha ${marcados[atividade.id] ? 'marcado' : ''}`}
                onClick={() => togglePresenca(atividade.id)}
              ></span>
            </div>

            <p><strong>Responsável:</strong> {atividade.responsavel}</p>
            <p><strong>Data:</strong> {atividade.data}</p>
            <p><strong>Descrição:</strong> {atividade.descricao}</p>

            <div className="acao-btns">
              <Link to={`/detalhes/${atividade.id}`} className="btn detalhes">Detalhes</Link>
              <button 
                onClick={() => removeAtividade(atividade.id)} 
                className="btn excluir"
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listagem;
