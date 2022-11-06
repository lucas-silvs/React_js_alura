import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Rodape from "./components/Rodape";
import Time from "./components/Time";

function App() {
  const [colaboradores, setColaboradores] = useState([]);
  // const times = [
  //   "UX",
  //   "Programação",
  //   "Front end",
  //   "Batatinha Legal"]

  const times = [
    {
      nome: "UX",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Front end",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger;
    setColaboradores([...colaboradores, colaborador]);
    console.log(colaboradores);
  };
  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {/* percorrendo a lista de times e criando o componente Time para cada item da lista */}
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          // filtrando os colaboradores por times antes de renderizar os as section's de times
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
