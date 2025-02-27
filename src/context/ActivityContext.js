import { createContext, useState, useContext } from "react";

const ActivityContext = createContext();

export const ActivityProvider = ({ children }) => {
  const [atividades, setAtividades] = useState([]);

  const addAtividade = (atividade) => {
    setAtividades([...atividades, { id: atividades.length + 1, ...atividade }]);
  };

  const updateAtividade = (id, updatedAtividade) => {
    setAtividades(atividades.map((a) => (a.id === id ? updatedAtividade : a)));
  };

  const removeAtividade = (id) => {
    setAtividades(atividades.filter((a) => a.id !== id));
  };

  const updatePresenca = (id, presenca) => {
    setAtividades((prevAtividades) =>
      prevAtividades.map((atividade) =>
        atividade.id === id ? { ...atividade, presenca: presenca } : atividade
      )
    );
  };

  return (
    <ActivityContext.Provider value={{ atividades, addAtividade, updateAtividade, removeAtividade, updatePresenca }}>
      {children}
    </ActivityContext.Provider>
  );
};

export const useActivity = () => useContext(ActivityContext);
