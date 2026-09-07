import styles from './Map.module.css'
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Map() {
 const [searchParams,setSearchParams] = useSearchParams();
 const lat=searchParams.get("lat");
 const lng=searchParams.get("lng");
 const navigate=useNavigate();
 return (
  <div className={styles.mapContainer} onClick={()=>navigate("form")}>
   map
   <h1>position : {lat} , {lng} </h1>
   <button onClick={()=>setSearchParams({lat:51.505,lng:-0.09})}>London</button>
  </div>
 )
}

export default Map;
