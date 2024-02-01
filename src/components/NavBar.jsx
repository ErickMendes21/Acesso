import styles from './NavBar.module.css'
import download from "../images/download.png"


function NavBar() {
  return (
    <header>
        <img title="Acesso" className={styles.image} src={download}></img>
        <ul className={styles.list}>
            <li title="Home" className={styles.cursor}>Home</li>
            <li title="Sobre Nós" className={styles.cursor}>Sobre Nós</li>
            <li title="Serviços" className={styles.cursor}>Serviços</li>
            <li title="Parcerias" className={styles.cursor}>Parcerias</li>
            <li title="Contatos" className={styles.cursor}>Contatos</li>
            <li title="Fale com a gente" className={styles.btn}>Fale com a gente</li>
        </ul>
    </header>
  )
}
 
export default NavBar  