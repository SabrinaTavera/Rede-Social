import styles from "./Post.module.css"
import { Comment } from "./Comment"
import { Avatar } from "./Avatar"


export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://scontent.fmii10-1.fna.fbcdn.net/v/t1.6435-9/174335523_3883790261698521_8738826948683911753_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=o9jU8v9gdToAX-D9Rbq&_nc_ht=scontent.fmii10-1.fna&oh=00_AT-197_IaDiv_YGYWZFI8lKuYyaPbuRtwPkjIPj8ONw3Mg&oe=62EC7979"/>
                <div className={styles.authorInfo}>
                    <strong>Sabrina Tavera</strong>
                    <span>Web Developer</span>
                </div>
                </div>
                <time title="11 de maio as 11:13h" dateTime="2022-05-11 08:13:30">
                    Publicado há 1h
                </time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉 <a>jane.design/doctorcare</a></p>

                <p>
                    <a>#novoprojeto </a>
                    <a href="#">   #nlw </a>
                    <a href="#">    #rocketseat</a>
                </p>

            </div>
            <form className={styles.comentForm}>
                <strong>Deixe seu cometário</strong>
                <textarea
                    placeholder="Deixe um cometário"
                />
                <footer>
                    <button type="submit">
                        Publicar
                    </button>
                </footer>


                

            </form>
            <div className={styles.commentList}>
                <Comment/>

            </div>

        </article>
    )
}












