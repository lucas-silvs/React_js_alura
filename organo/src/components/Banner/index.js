import "./Banner.css";

function Banner() {
  //JSX
  return (
    // com React se utiliza className ao invés de class
    <header className="banner">
      <img
        src="imagens/banner.png"
        alt="banner principal da pagina do Organo"
      ></img>
    </header>
  );
}

export default Banner;
