namespace exemplo2 {
    let idade: number = 18;

    if(idade >= 18) {
        console.log("A pessoa pode beber.");
    }else{
        console.log("A pessoa pode beber.");
    }

    let resultado: string;
    resultado = idade >= 18 ? "Pode beber" : "Não pode beber";
    console.log(resultado);

    switch (idade) {
        case 18:
            console.log("Pode beber.");
            break;
        case 15:
            console.log("Pode beber refri");
            break;
        case 7:
            console.log("Pode beber suco");
            break;
        default:
            console.log("Beba agua");
            break;
    }
    
}