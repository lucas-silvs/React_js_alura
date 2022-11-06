import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  return (
    //validando se uma lista de colaboradores for maior que 0, ele retorna a segunda condição, utilizando 
    // props.colaboradores.length > 0 && 
    // // utilizando estilização dinamica recebida pelo props, utilizando styles do HTML
    // <section className="time" style={{ backgroundColor: props.corSecundaria }}>
    //   <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>

    //   <div className="colaboradores">
    //     {props.colaboradores.map((colaborador) => (
    //       <Colaborador
    //         nome={colaborador.nome}
    //         cargo={colaborador.cargo}
    //         imagem={colaborador.imagem}
    //         corPrimaria= {props.corPrimaria}
    //       />
    //     ))}
    //   </div>
    // </section>
    //tambem é possivel utilizar o if ternario
    props.colaboradores.length > 0 ?
    // utilizando estilização dinamica recebida pelo props, utilizando styles do HTML
    <section className="time" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>

      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            corPrimaria= {props.corPrimaria}
          />
        ))}
      </div>
    </section>
    : null
  );
};

export default Time;
