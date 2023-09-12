function GerarLista(valor){
    let lista = [];
    for (let i = 0; i <= valor; i++){
        lista.push(<span>{i}</span>)
    }
    return lista
}

export default function Desafio (){
    return(
        <>
            <h1></h1>
            {GerarLista(10)}
        </>
        
    )
}