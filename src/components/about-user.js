import React from "react"
import Userstyles from "../styles/about-user.module.css"

const User = props => (
    <div className={Userstyles.user}>
        <div className={Userstyles.description}>
            <h2 className={Userstyles.username}>{props.username}</h2>
            <p className={Userstyles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

/*
TODO: use a markdown to show self introction
*/
export default () => (
    <User
        username="李泱丞 Li Yangcheng"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt=""

        
    >
        Heere
    </User>
)