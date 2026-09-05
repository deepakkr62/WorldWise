
import Sidebar from './Sidebar';
import styles from './AppLayout.module.css'
import Map from './Map';
function AppLayout() {
  return (
    <div className={styles.app}>
     <Sidebar />
     <Map />
    </div>
  )
}
 

export default AppLayout