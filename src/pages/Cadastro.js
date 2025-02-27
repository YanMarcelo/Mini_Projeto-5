import { useState, useEffect } from "react";
import { useActivity } from "../context/ActivityContext";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
    const [atividade, setAtividade] = useState({ nome: "", responsavel: "", data: "", descricao: "" });
    const { addAtividade } = useActivity();
    const navigate = useNavigate();

    const [minDate, setMinDate] = useState('');
    const [maxDate, setMaxDate] = useState('');

    useEffect(() => {
        const currentDate = new Date().toISOString().split('T')[0];
        const futureDate = new Date();
        futureDate.setFullYear(futureDate.getFullYear() + 80);
        setMinDate(currentDate);
        setMaxDate(futureDate.toISOString().split('T')[0]);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!atividade.nome || !atividade.responsavel || !atividade.data) {
            alert("Todos os campos obrigatórios devem ser preenchidos!");
            return;
        }
        addAtividade(atividade);
        navigate("/");
    };

    const handleBack = () => navigate(-1);

    return (
        <div className="container">
            <h1>Cadastrar Atividade</h1>
            <div className="atividade-card">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Nome da Atividade"
                        onChange={(e) => setAtividade({ ...atividade, nome: e.target.value })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Responsável"
                        onChange={(e) => setAtividade({ ...atividade, responsavel: e.target.value })}
                        required
                    />
                    <input
                        type="date"
                        onChange={(e) => setAtividade({ ...atividade, data: e.target.value })}
                        required
                        min={minDate}
                        max={maxDate}
                    />
                    <textarea
                        placeholder="Descrição"
                        onChange={(e) => setAtividade({ ...atividade, descricao: e.target.value })}
                    />
                    <div className="acao-btns">
                        <button type="submit" className="btn cadastrar">Cadastrar</button>
                        <button type="button" onClick={handleBack} className="btn voltar">Voltar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Cadastro;
