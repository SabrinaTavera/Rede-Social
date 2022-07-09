import styles from "./Sidebar.module.css"
import { PencilLine } from "phosphor-react"
import { Avatar } from "./Avatar"
export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />

              

            <div className={styles.profile}>
            

              <Avatar src="https://scontent.fmii10-1.fna.fbcdn.net/v/t1.6435-9/174335523_3883790261698521_8738826948683911753_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=o9jU8v9gdToAX-D9Rbq&_nc_ht=scontent.fmii10-1.fna&oh=00_AT-197_IaDiv_YGYWZFI8lKuYyaPbuRtwPkjIPj8ONw3Mg&oe=62EC7979"/>
                <strong>
                    Sabrina Tavera 
                </strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}