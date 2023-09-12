import PrimeiroComponente from "@/components/primeiroComp";
import ValidaCPF from "@/components/AulaCPF";


export default function AulaComp () {
    return (
        <>
            <PrimeiroComponente
                titulo="Meu primeiro componente"
                subtitulo="aprendendo next.js com react"
            />

            <PrimeiroComponente
                titulo="aaaaaaaaaaaaa"
                subtitulo="aaaaaaaaaaaaaaaaaaaaa"
            />

            <ValidaCPF
                cpf = "12345678901"
            />


        </>
    )
}