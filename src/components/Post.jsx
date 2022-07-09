import { format, formatDistanceToNow} from "date-fns"
import ptBR from 'date-fns/locale/pt-BR'

import styles from "./Post.module.css"
import { Comment } from "./Comment"
import { Avatar } from "./Avatar"


export function Post({author, publishedAt, content }){

    /**
     * publishedAt.toISOString()
     * A função toISOString() também é nativa do javascript 
     */

    /**
     * Intl api que vem por padrão no javascript sem instalação 
     * Ele permite fazer a formatação de datas, números, puralização, listas  e etc 
     */
    // const publishedAtDateFormat = new Intl.DateTimeFormat('pt-BR',{
    //     day: "2-digit",
    //     month: "long",
    //     hour: "2-digit",
    //     minute: "2-digit",
    // }).format(publishedAt)

    /**
     * Também temos a opção de trabalhar com o date-fns, mas é necessário a instalação 
     * npm i date-fns 
     */
    const publishedAtDateFormat = format(publishedAt,  "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
                </div>
                <time title={publishedAtDateFormat} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(line=>{
                    if(line.type === 'paragraph'){
                        return <p>{line.content}</p>;
                    }else if(line.type === 'link'){
                        return <p><a>{line.content}</a></p>;
                    }
                })}
         
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
                <Comment/>
                <Comment/>

            </div>

        </article>
    )
}












