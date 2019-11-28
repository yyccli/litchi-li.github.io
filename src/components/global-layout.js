import React from "react"
import {Link} from "gatsby"
import styles from "../styles/global-layout.module.css"

const ListLink = props => (
    <li className={styles.listlink}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default ({ children }) => (
  <div className={styles.global_layout}>
      <header className={styles.header}>
          <Link to="/" className={styles.link}>
              <h3 className={styles.h3_name}>Litchi</h3>
          </Link>

          <ul className={styles.ul}>
              <ListLink to="/">Home</ListLink>
              <ListLink to="/archive/">Archive</ListLink>
              <ListLink to="/about/">About</ListLink>
          </ul>
      </header>
    {children}
  </div>
)