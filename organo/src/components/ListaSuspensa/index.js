import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    const aoAlterado = (evento) => {
        props.setValor(evento.target.value);
      };
    
    return (
        <div className='listaSuspensa'>
            <label>{props.label}</label>
            <select onChange={aoAlterado} required={props.obrigatorio} value={props.valor}>
                {/* for each onde para cada item é criado um item de option */}
                {/* adicionando chave para o react saber quando precisar qual item gerar*/}
                {props.itens.map(item => <option key={item}> {item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa