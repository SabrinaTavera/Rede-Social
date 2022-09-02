import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from "./App.module.css"
import "./global.css"

function App() {

  //testando vs code github.dev 
  return (
  <h1>
    <Header/>
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        <Post author="Sabrina Tavera" content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus molestiae consequuntur recusandae qui cupiditate perspiciatis! Possimus placeat tempora, totam veritatis assumenda similique at numquam minima magni, neque, facilis corrupti distinctio."></Post>
        <Post author="Sabrina Tavera" content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus molestiae consequuntur recusandae qui cupiditate perspiciatis! Possimus placeat tempora, totam veritatis assumenda similique at numquam minima magni, neque, facilis corrupti distinctio."></Post>
        
      </main>
    </div>
  </h1>
  )
}


export default App
 