import React from "react"
import styles from "../styles/about-user.module.css"

const User = props => (
    <div className={styles.user}>
        <div className={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

/*
TODO: use a markdown to show self introction
*/
export default () => (
    <User
        username="Li Yangcheng"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="I'm bob."
    />
)