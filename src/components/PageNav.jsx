
import {NavLink } from 'react-router-dom'
import styles from './PageNav.module.css'

function PageNav() {
  return (
   <nav className={styles.nav}>
    <ul>
     <li>
      <NavLink to="/">Home</NavLink>
     </li>
     <li>
      <NavLink to="/pricing">Pricing</NavLink>
     </li>
     <li>
      <NavLink to="/product">Product</NavLink>
     </li>
    </ul>
   </nav>
  )
}
//navlink is used to highlight the active link in the navigation bar. It automatically adds an 
// "active" class to the link that matches the current URL, allowing you to style it differently 
// from the other links. This is useful for providing visual feedback to users about which page they
//  are currently on.
export default PageNav