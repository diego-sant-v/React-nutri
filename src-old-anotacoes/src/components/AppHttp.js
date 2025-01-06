import React, {use, useEffect, useState} from "react";
import '../style.css'
function AppHttp(){
    const [nutri, setNutri] = useState([]);

    useEffect(()=>{
        function loadApi(){
            let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
            fetch(url)
            .then((result)=> result.json())
            .then((json)=>{
              console.log('no json', json)  
              setNutri(json)
            })
        }
        loadApi();
    },[])

    return(
        <div>
           <header>
                <strong>React nutri</strong>
           </header>
           {nutri.map((item)=>{
            return(
                <article key={item.id} className="post">
                    <strong className="titulo">{item.titulo}</strong>
                    <img src={item.capa} alt={item.titulo} className="capa"></img>
                    <p className="subtitulo">
                        {item.subtitulo}
                    </p>
                    <a className="botao">Acessar</a>
                </article>
            )
        })}
        </div>
    )
}

export default AppHttp;
