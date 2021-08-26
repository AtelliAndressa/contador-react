
import { useState } from "react";
import { Button } from "../Button/Button";
import classes from "./contador.module.css";

function Contador(props) {

  const [contador, setContador] = useState(0);

  const subtrair = () => {
    props.onChange(props.contagem - props.unidadePorClique, props.index);
 
    setContador((prevState) => prevState - props.unidadePorClique);
  };

  const adicionar = () => {
    props.onChange(props.contagem + props.unidadePorClique, props.index);
    setContador(contador + props.unidadePorClique);
  };

  const meuStilo = {};

  const onDelete = () => {

    props.onDelete(props.index);
  };

  return (
    <div>
      <h3>Contador</h3>
      <Button onClick={subtrair} type="warning">
        -
      </Button>
      <span>{props.contagem}</span>
      <Button onClick={adicionar} type="primary">
        +
      </Button>

      <Button style={{ marginLeft: "20px" }} onClick={onDelete} type="danger">
        Delete
      </Button>
    </div>
  );
}


export default Contador;

