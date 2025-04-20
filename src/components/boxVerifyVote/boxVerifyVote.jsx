import { useState } from "react";
import "./styles.css";

function BoxVerifyVote() {
  const [idade, setIdade] = useState(" ");
  const [mensagem, setMensagem] = useState(" ");

  function mudarIdade(event) {
    setIdade(event.target.value);
  }

  function meuEvento() {
    const idadeNum = parseInt(idade);

    if (idadeNum < 16) {
      setMensagem("Proibido votar.");
    } else if (idadeNum >= 16 && idadeNum < 18) {
      setMensagem("Voto Opcional.");
    } else if (idadeNum >= 18 && idadeNum <= 60) {
      setMensagem("Voto Obrigatório.");
    } else {
      setMensagem("Voto Opcional.");
    }
  }

  return (
    <>
      <div className="container">
        <h1>Verificando Voto</h1>
        <input
          type="number"
          placeholder="Digite sua idade"
          onChange={mudarIdade}
          value={idade}
        />
        <button onClick={meuEvento}>Enviar</button>
        <p> {mensagem}</p>
      </div>
    </>
  );
}
export default BoxVerifyVote;
