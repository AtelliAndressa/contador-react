import { useState } from "react";
import Contador from "./Contador/Contador";
import { Usuario } from "./Usuario/Usuario";
//import Flex from "./Flex/Flex";
import { Card } from "./Card/Card";

function App() {

  const [contadores, setContadores] = useState([]);

  const [unidadePorClique, setUnidadePorClique] = useState(1);


  const adicionarContador = () => {

    setContadores((contadoresAtuais) =>
      contadoresAtuais.concat({
        id: new Date().getTime(),
        contagem: 0,
      })
    );
  };

  console.log(contadores);

  const nomeDaClasse = "button";


  const handleOnChange = (event) => {

    setUnidadePorClique(Number(event.target.value));
  };


  const removerContador = (idContador) => {
    console.log(`opa, bora remover esse contador ${idContador}`);

    setContadores((contadores) => {
      return contadores.filter((contador) => contador.id !== idContador);
    });
  };


  let nomeNomeDoUsuario = "";

  if (contadores.length > 1) {
    nomeNomeDoUsuario = "Andressa";
  } else {
    nomeNomeDoUsuario = "Visitante";
  }

  const meuCallback = (novaContagem, idContador) => {
    setContadores((contadoresAntigos) => {
      return contadoresAntigos.map((contador) => {
        if (contador.id === idContador) {
          return {
            ...contador,
            contagem: novaContagem,
          };
        }

        return contador;
      });
    });
  };

  return (
    <div>
      <Usuario nome={nomeNomeDoUsuario.toUpperCase()} />
      <label htmlFor="unidadePorClique">Unidade</label>
      <input
        id="unidadePorClique"
        type="text"
        onChange={handleOnChange}
        value={unidadePorClique}
      />

      <button className={nomeDaClasse} onClick={adicionarContador}>
        Adicionar contador
      </button>

      {contadores.map((contador) => (

        <div style={{ padding: 20 }} key={contador.id}>
          <Card>
            <Contador
              unidadePorClique={unidadePorClique}
              onDelete={removerContador}
              index={contador.id}
              contagem={contador.contagem}
              onChange={meuCallback}
            />
          </Card>
        </div>
      ))}

    </div>
  );
}

export default App;
