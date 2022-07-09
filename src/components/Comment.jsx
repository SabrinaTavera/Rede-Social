import styles from "./Comment.module.css"
import { Trash, ThumbsUp } from "phosphor-react"
import { Avatar } from "./Avatar"
export function Comment(){
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://scontent.fmii10-1.fna.fbcdn.net/v/t1.6435-9/174335523_3883790261698521_8738826948683911753_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=o9jU8v9gdToAX-D9Rbq&_nc_ht=scontent.fmii10-1.fna&oh=00_AT-197_IaDiv_YGYWZFI8lKuYyaPbuRtwPkjIPj8ONw3Mg&oe=62EC7979"/>
            {/* <img className={styles.cover} src=""></img> */}
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Sabrina Tavera</strong>
                            <time title="11 de Maio às 08:13h" dataTime="2022-05-11 08:13:30">
                                Cerca de 1h atrás 
                            </time>
                        </div>
                        <button title="Deletar comnetário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir 
                        <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}