import ComponenteTabuleiro from "@/components/CompTab";
import styles from "@/styles/tabCSS.module.css"


export default function ProvaTabuleiro () {
    return(
        <>
            <div className={styles.tabuleiro}>
            <ComponenteTabuleiro css="branco"/>
            <ComponenteTabuleiro css="pecaBranca"/>
            <ComponenteTabuleiro css="branco"/>
            <ComponenteTabuleiro css="pecaBranca"/>
            <ComponenteTabuleiro css="branco"/>
            <ComponenteTabuleiro css="pecaBranca"/>
            <ComponenteTabuleiro css="branco"/>
            <ComponenteTabuleiro css="pecaBranca"/>
            </div>
            
            <div className={styles.tabuleiro}>
            <ComponenteTabuleiro css="pecaBranca"/>
            <ComponenteTabuleiro css="branco"/>
            <ComponenteTabuleiro css="pecaBranca"/>
            <ComponenteTabuleiro css="branco"/>
            <ComponenteTabuleiro css="pecaBranca"/>
            <ComponenteTabuleiro css="branco"/>
            <ComponenteTabuleiro css="pecaBranca"/>
            <ComponenteTabuleiro css="branco"/>
            </div>
            <div className={styles.tabuleiro}>
            <ComponenteTabuleiro css="branco"/>
            <ComponenteTabuleiro css="pecaBranca"/>
            <ComponenteTabuleiro css="branco"/>
            <ComponenteTabuleiro css="pecaBranca"/>
            <ComponenteTabuleiro css="branco"/>
            <ComponenteTabuleiro css="pecaBranca"/>
            <ComponenteTabuleiro css="branco"/>
            <ComponenteTabuleiro css="pecaBranca"/>
            </div>

            <div className={styles.tabuleiro}>
            <ComponenteTabuleiro css="preto"/>
            <ComponenteTabuleiro css="branco"/>
            <ComponenteTabuleiro css="preto"/>
            <ComponenteTabuleiro css="branco"/>
            <ComponenteTabuleiro css="preto"/>
            <ComponenteTabuleiro css="branco"/>
            <ComponenteTabuleiro css="preto"/>
            <ComponenteTabuleiro css="branco"/>
            </div>

            <div className={styles.tabuleiro}>
            <ComponenteTabuleiro css="branco"/>
            <ComponenteTabuleiro css="preto"/>
            <ComponenteTabuleiro css="branco"/>
            <ComponenteTabuleiro css="preto"/>
            <ComponenteTabuleiro css="branco"/>
            <ComponenteTabuleiro css="preto"/>
            <ComponenteTabuleiro css="branco"/>
            <ComponenteTabuleiro css="preto"/>
            </div>

            <div className={styles.tabuleiro}>
            <ComponenteTabuleiro css="pecaVermelha"/>
            <ComponenteTabuleiro css="branco"/>
            <ComponenteTabuleiro css="pecaVermelha"/>
            <ComponenteTabuleiro css="branco"/>
            <ComponenteTabuleiro css="pecaVermelha"/>
            <ComponenteTabuleiro css="branco"/>
            <ComponenteTabuleiro css="pecaVermelha"/>
            <ComponenteTabuleiro css="branco"/>
            </div>

            <div className={styles.tabuleiro}>
            <ComponenteTabuleiro css="branco"/>
            <ComponenteTabuleiro css="pecaVermelha"/>
            <ComponenteTabuleiro css="branco"/>
            <ComponenteTabuleiro css="pecaVermelha"/>
            <ComponenteTabuleiro css="branco"/>
            <ComponenteTabuleiro css="pecaVermelha"/>
            <ComponenteTabuleiro css="branco"/>
            <ComponenteTabuleiro css="pecaVermelha"/>
            </div>

            <div className={styles.tabuleiro}>
            <ComponenteTabuleiro css="pecaVermelha"/>
            <ComponenteTabuleiro css="branco"/>
            <ComponenteTabuleiro css="pecaVermelha"/>
            <ComponenteTabuleiro css="branco"/>
            <ComponenteTabuleiro css="pecaVermelha"/>
            <ComponenteTabuleiro css="branco"/>
            <ComponenteTabuleiro css="pecaVermelha"/>
            <ComponenteTabuleiro css="branco"/> 
            </div>
        </>
    )
}