import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import AppLayout from "./components/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import './index.css'
function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/app" element={<AppLayout />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}


export default App;
