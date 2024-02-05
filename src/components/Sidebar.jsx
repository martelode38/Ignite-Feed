import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';
import Mengocapa from '../assets/mengaocapa.jpg';


export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img  className={styles.cover} src={Mengocapa} alt="gabigol" />

            <div className={styles.profile}>
                <img className={styles.avatar} src='https://pbs.twimg.com/profile_images/1713005373420908544/M9BCEJWG_400x400.jpg'/>

                <strong>martenis</strong>
                <span>Metedor de gol</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                    </a>
            </footer>
        </aside>
    );
}