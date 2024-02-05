import styles from "./Post.module.css";

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://pbs.twimg.com/profile_images/1713005373420908544/M9BCEJWG_400x400.jpg" alt="avatar" />
                    <div className={styles.authorInfo}>
                        <strong>Martenisss</strong>
                        <span>metedor de gols</span>
                    </div>
                </div>

                <time title="05 de janeiro as 01:53" dateTime="2024-02-05 01:53:40">

                </time>
            </header>
            
            <div className={styles.content}>
                <p> oi eu sou o martenier</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis nesciunt a quos expedita porro eveniet deleniti explicabo sunt officia non nihil cupiditate asperiores perferendis, error quidem molestiae eius quasi?</p>
            </div>
            
        </article>
    )
}