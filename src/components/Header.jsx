import styles from './Header.module.css';
import igniteLogo from '../assets/igniteSimbol.svg';

export function Header(){
     return(
         <header className={styles.header}>
            <img src={igniteLogo} alt= 'logotipo ignite'/>
         </header>
     );
}

