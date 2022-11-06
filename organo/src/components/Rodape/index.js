import "./Rodape.css";

const Rodape = () => {
  return (
    <section className="mainRodape">
      <div className="redesSociais">
        <img src="imagens/fb.png" alt="logo facebook" />
        <img src="imagens/tw.png" alt="logo twitter" />
        <img src="imagens/ig.png" alt="logo instragam" />
      </div>
      <div className="logo">
        <img src="imagens/logo.png" alt="logo Organo" />
      </div>
      <label>Desenvolvido por Alura.</label>
    </section>
  );
};

export default Rodape;
