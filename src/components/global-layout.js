import React from "react"
import {Link} from "gatsby"
import Layoutstyles from "../styles/global-layout.module.css"

const ListLink = props => (
    <li className={Layoutstyles.global_layout_listlink}>
        <Link className={Layoutstyles.global_layout_link} to={props.to}>{props.children}</Link>
    </li>
)

export default ({ children }) => (
  <div className={Layoutstyles.global_layout}>
      <header className={Layoutstyles.global_layout_header}>
          <Link to="/" className={Layoutstyles.global_layout_link}>
              <h3 className={Layoutstyles.global_layout_h3_name}>Litchi</h3>
          </Link>

          <ul className={Layoutstyles.global_layout_ul}>
              <ListLink to="/">Home</ListLink>
              <ListLink to="/archive/">Archive</ListLink>
              <ListLink to="/about/">About</ListLink>
          </ul>
      </header>
    {children}
  </div>
)