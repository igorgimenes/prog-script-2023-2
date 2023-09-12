export default function ValidadorCPF(props){
    let numcpf = props.cpf
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(numcpf.charAt(i)) * (10 - i);
    }
    
    let resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
    
    if (resto !== parseInt(numcpf.charAt(9))) {
      return "CPF INVÁLIDO";
    }
    
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(numcpf.charAt(i)) * (11 - i);
    }
    
    resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
    
    if (resto !== parseInt(numcpf.charAt(10))) {
      return "CPF INVÁLIDO";
    }
    
    return "CPF VÁLIDO";
  }