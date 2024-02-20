import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://pbs.twimg.com/profile_images/1756553394955620352/kQ51lzCK_400x400.jpg" alt="avatar" />
                    <div className={styles.authorInfo}>
                        <strong>Martenisss</strong>
                        <span>metedor de gols</span>
                    </div>
                </div>

                <time title="05 de janeiro as 01:53" dateTime="2024-02-05 01:53:40">
                    Publicado há 1h
                </time>
            </header>
            
            <div className={styles.content}>
                <p>GABRIEL BARBOSA AKA GABIGOL</p>
                <p>RESPEITEM! Respeitem a história do maior camisa 10 do Brasil amigos!</p>
                <p>
                    <a href="">#gabigol</a>{' '}
                    <a href="">#gabigol</a>{' '}
                    <a href="">#gabigol</a>
                </p>
            </div>
            
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe um comentário"/>

                <footer>
                <button type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>

        </article>
    )
}