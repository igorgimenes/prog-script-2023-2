export default function ValidaCPF(props) {
    let validacao = props.cpf
    let countNumber = validacao.match(/\d/g)
    let isValid
    if(countNumber.length >= 11) {
        isValid = true
    } else {
        isValid = false
    }

    return (
        <>
            <p>{isValid ? "Valido" : "Invalido"}</p>
        </>
    )


}
