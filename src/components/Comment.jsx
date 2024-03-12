import styles from './Comment.module.css';
import { Trash } from 'phosphor-react';
import { ThumbsUp } from 'phosphor-react';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment(props){

    const [likeCount, setLikeCount] = useState(0);
    
    function handleDeleteComent(){

        props.deleteComment(props.content);
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder = {false} src="https://pbs.twimg.com/profile_images/1756553394955620352/kQ51lzCK_400x400.jpg"/>
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Martenis</strong>
                            <time title="05 de janeiro as 01:53" dateTime="2024-02-05 01:53:40">
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button onClick={handleDeleteComent} 
                        title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{props.content}</p>
                </div>

                <footer>
                    <button onClick={() => setLikeCount(likeCount + 1)}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}