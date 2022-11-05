import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const times = ["UX", "Programação", "Front end", "Batatinha Legal"]

const aoSalvar = (evento) => {
  evento.preventDefault()
  console.log("Form foi submetido")
}

const Formulario = () => {
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar }>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        {/* Passando parametro para o componente React */}
        <CampoTexto  obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto obrigatorio={true} label="Imagem" placeholder="Informe o endereço da imagem" />
        <ListaSuspensa obrigatorio={true} itens={times} label="times"></ListaSuspensa>
        <Botao>
          Criar Card
        </Botao>
      </form>
      
    </section>
  );
};

export default Formulario
