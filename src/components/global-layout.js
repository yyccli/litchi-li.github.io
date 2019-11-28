import React from "react"
import {Link} from "gatsby"
import Layoutstyles from "../styles/global-layout.module.css"

const ListLink = props => (
    <li className={Layoutstyles.listlink}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default ({ children }) => (
  <div className={Layoutstyles.global_layout}>
      <header className={Layoutstyles.header}>
          <Link to="/" className={Layoutstyles.link}>
              <h3 className={Layoutstyles.h3_name}>Litchi</h3>
          </Link>

          <ul className={Layoutstyles.ul}>
              <ListLink to="/">Home</ListLink>
              <ListLink to="/archive/">Archive</ListLink>
              <ListLink to="/about/">About</ListLink>
          </ul>
      </header>
    {children}
  </div>
)