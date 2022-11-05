import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='listaSuspensa'>
            <label>{props.label}</label>
            <select required={props.obrigatorio}>
                {/* for each onde para cada item é criado um item de option */}
                {/* adicionando chave para o react saber quando precisar qual item gerar*/}
                {props.itens.map(item => <option key={item}> {item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa