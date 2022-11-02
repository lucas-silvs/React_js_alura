import "./CampoTexto.css";
//outra alternativa para exportar componentes react
const CampoTexto = (props) => {
    return (
        <div className='campo-texto'>
            {/* Ṕassando parametro recebido na chamada do componente e utilizando no HTML */}
            <label>{props.label}</label>
            <input placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto