import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import { useState } from "react";

const Formulario = (props) => {

    //Ao criar um useState, é devolvido 2 itens, a variavel e o método de set dessa variavel
    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");

    const times = ["UX", "Programação", "Front end", "Batatinha Legal"]

const aoSalvar = (evento) => {
  evento.preventDefault()
  //console.log("Form foi submetido => Nome:" + nome + " Cargo: " + cargo + " Imagem: " + imagem + "Time: " + time) 
  props.aoColaboradorCadastrado({
    nome: nome, 
    cargo: cargo, 
    imagem: imagem,
    time: time 
  })
}


  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        {/* Passando parametro para o componente React */}
        <CampoTexto  
        obrigatorio={true} 
        label="Nome" 
        placeholder="Digite seu nome" 
        valor={nome}
        setValor={valor => setNome(valor)}
        />
        <CampoTexto 
        obrigatorio={true} 
        label="Cargo" 
        placeholder="Digite seu cargo" 
        valor={cargo}
        setValor={valor => setCargo(valor)}
        />
        <CampoTexto 
        obrigatorio={true} 
        label="Imagem" 
        placeholder="Informe o endereço da imagem" 
        valor={imagem}
        setValor={valor => setImagem(valor)}
        />
        <ListaSuspensa 
        obrigatorio={true} 
        itens={times} 
        label="times"
        valor={time}
        setValor={valor => setTime(valor)}
        />
        <Botao>
          Criar Card
        </Botao>
      </form>
      
    </section>
  );
};

export default Formulario
