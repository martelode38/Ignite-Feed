import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';
import Mengocapa from '../assets/mengaocapa.jpg';
import { Avatar } from './Avatar';


export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img  className={styles.cover} src={Mengocapa} alt="gabigol" />

            <div className={styles.profile}>
                <Avatar src="https://pbs.twimg.com/profile_images/1756553394955620352/kQ51lzCK_400x400.jpg"/>

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