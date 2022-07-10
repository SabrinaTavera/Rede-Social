import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from "./App.module.css"
import "./global.css"

// author: { avatar_url: "", name: "", role:""}
// publishedAt: Date 
//content: String

const posts = [
  {
      id:1,
      author:{
          avatarUrl:"https://scontent.fmii10-1.fna.fbcdn.net/v/t1.6435-9/174335523_3883790261698521_8738826948683911753_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=o9jU8v9gdToAX-D9Rbq&_nc_ht=scontent.fmii10-1.fna&oh=00_AT-197_IaDiv_YGYWZFI8lKuYyaPbuRtwPkjIPj8ONw3Mg&oe=62EC7979",
          name: "Sabrina Tavera",
          role: "CTO @ Rocketseat",
      },
      content: [
          { type: 'paragrapg', content: 'Fala galeraa 👋'},
          { type: 'paragrapg', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
          { type: 'link', content: 'jane.design/doctorcare'},
             
      ],
      publishedAt: new Date('2022-05-03 20:00:00')

  },
  {
      id:2,
      author:{
          avatarUrl:"https://scontent.fmii10-1.fna.fbcdn.net/v/t1.6435-9/67413736_2483876498501871_6329360271798173696_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=f-5gmAdABg4AX9JQyac&tn=ezzBBKLOf2FfBwvf&_nc_ht=scontent.fmii10-1.fna&oh=00_AT8F0RbpS7HH6LZ2GM2Wos2qE_nbpySLSOs427DfvRSXLA&oe=62EDBB4A",
          name: "Larissa Tavera",
          role: "Educadora @ Rocketseat",
      },
      content: [
          { type: 'paragrapg', content: 'Fala galeraa 👋'},
          { type: 'paragrapg', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
          { type: 'link', content: 'jane.design/doctorcare'},
             
      ],
      publishedAt: new Date('2022-07-09 09:00:00')

  },
];

function App() {
  return (
  <h1>
    <Header/>
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        {posts.map(post=>{
          return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}
      </main>
    </div>
  </h1>
  )
}


export default App
 