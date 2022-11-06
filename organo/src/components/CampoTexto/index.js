import "./CampoTexto.css";
//outra alternativa para exportar componentes react

const CampoTexto = (props) => {
  //let valor = 'Teste'


  const aoDigitado = (evento) => {
    props.setValor(evento.target.value);
  };

  return (
    <div className="campo-texto">
      {/* Ṕassando parametro recebido na chamada do componente e utilizando no HTML */}
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default CampoTexto;
