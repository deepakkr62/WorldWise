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
import City from "./components/City";
import Form from "./components/Form";
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
      
      <Route index element={<HomePage />} />  
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/app" element={<AppLayout />}>
       <Route index element={<CityList cities={cities} isLoading={isLoading} />} />
       <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />
       <Route path="cities/:id" element={<City />} />
       <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading} />} />
       <Route path="form" element={<Form />} />
      </Route>
  
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}


export default App;
