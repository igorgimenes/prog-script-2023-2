import styles from "@/styles/tabCSS.module.css"

export default function ComponenteTabuleiro(props) {
/*
    let linhaTab = []
    var cores = ['branco', 'preto'];
    var corAtual = 0;

    for (var linha = 0; linha < 8; linha++) {
        for (var coluna = 0; coluna < 8; coluna++) {
            var cor = cores[corAtual];
            linhaTab.push(<div className={styles[cor.css]}></div>)
            console.log(linhaTab);
           corAtual = 1 - corAtual; // Alterna entre branco e preto
        }
        corAtual = 1 - corAtual; // Inverte a cor no início de cada linha
    } */ 
    return (

        <div className={styles[props.css]}></div>
    )
}