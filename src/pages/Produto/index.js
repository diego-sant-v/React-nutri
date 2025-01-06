import { useParams } from "react-router-dom";

function Produto(){
    const { id } = useParams();
    return(
        <div>
            <h2>PAGINA DETALHE DO PRODUTO:</h2>
            SEU PRODUTO É {id}
        </div>
    )
}

export default Produto;