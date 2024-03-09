import { Header } from './components/Header';
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatar: "https://pbs.twimg.com/profile_images/1756553394955620352/kQ51lzCK_400x400.jpg",
      name: "Martenisss",
      role: "flamenguista Profissional"
    },
    content: [
      {type: 'paragraph', content: 'Fala flamenguista!!!'},
      {type: 'paragraph', content: 'partida muito segura hoje do mengão.'},
      {type: 'paragraph', content: 'o time ta VOANDO!'},
      {type: 'paragraph', content: 'Segue o lider da primeira fase do carioca nação!!!'}
      
  ],
  publishedAt: new Date('2024-02-21 01:51:00'),
  },

  {
    id: 2,
    author: {
      avatar: "https://pbs.twimg.com/profile_images/1756553394955620352/kQ51lzCK_400x400.jpg",
      name: "Martenisss",
      role: "flamenguista Profissional"
    },
    content: [
      {type: 'paragraph', content: '  QUW PARTIDA ASURDA DE GABRIEL BARBOSA!'},
      {type: 'paragraph', content: 'SEMPRE SERA ELE. O PREDESTINADO!'},
      {type: 'paragraph', content: 'QUE GOLAÇO DO NOSSO ETERNO IDOLO!!!!!!!!'},

      
  ],
  publishedAt: new Date('2024-02-24 04:21:00'),
  },

];


function App() {


  return (
    <div>
    <Header/>
    <div className={styles.wrapper}>
     <Sidebar/>
      <main>
        {posts.map(post =>{
          return (
          <Post
          key={post.id}
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}
          />)
        })}
      </main>

    </div>

   </div>
  )
}

export default App
