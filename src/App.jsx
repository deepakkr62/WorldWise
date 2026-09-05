import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState,useEffect } from "react";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import AppLayout from "./components/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import './index.css'
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";

const BASE_URL ="http://localhost:8000";
function App() {
  const [cities, setCities] =useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function (){
    async function fetchCities() {
      setIsLoading(true);
      try{
        const res=await fetch(`${BASE_URL}/cities`);
        const data=await res.json();
        // console.log(data);
        setCities(data);
        
      } catch (err){
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  },[]);
console.log(cities);
  return (
    
    <div>
    <BrowserRouter>
    <Routes>
      {/* index route is the default route for the app. It will be rendered when the user visits the 
      root URL of the app. The element prop specifies the component that will be rendered for this 
      route. In this case, it is the HomePage component. */}
      <Route index element={<HomePage />} />  
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/app" element={<AppLayout />}>
       <Route index element={<CityList cities={cities} isLoading={isLoading} />} />
       <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />
       <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading} />} />
       <Route path="form" element={<p>Form</p>} />
      </Route>
  
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}


export default App;
