import styles from "@/styles/tabCSS.module.css"

var tabuleiro = document.getElementsByClassName('tabuleiro');
var cores = ['branco', 'preto'];
var corAtual = 0;

for (var linha = 1; linha <= 8; linha++) {
    for (var coluna = 1; coluna <= 8; coluna++) {
        var cor = cores[corAtual];
        var quadrado = document.createElement('div');
        quadrado.className = 'quadrado ' + cor;
        tabuleiro.appendChild(quadrado);
        corAtual = 1 - corAtual; // Alterna entre branco e preto
    }
    corAtual = 1 - corAtual; // Inverte a cor no início de cada linha
}

export default function ComponenteTabuleiro (){
    return (
        <div className="tabuleiro">
    </div>
    )
}