
import {NavLink } from 'react-router-dom'
import styles from './PageNav.module.css'
import Logo from './Logo';
function PageNav() {
  return (
   <nav className={styles.nav}>
    <Logo />
    <ul>
     <li>
      <NavLink to="/pricing">Pricing</NavLink>
     </li>
     <li>
      <NavLink to="/product">Product</NavLink>
     </li>
     <li>
      <NavLink to="/login" className={styles.ctaLink}>Login</NavLink>
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