import { Navigate, Route, Routes } from "react-router-dom";
import Menu from "../Menu/Menu";
import "./Routing.css";
import Home from "../../HomeArea/Home/Home";
import BreadList from "../../ProductsArea/BreadList/BreadList";
import DairyList from "../../ProductsArea/DairyList/DairyList";
import FruitsList from "../../ProductsArea/FruitsList/FruitsList";
import VegtablesList from "../../ProductsArea/VegtablesList/VegtablesList";
import ProductModel from "../../../Models/ProductModel";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import EditProduct from "../../ProductsArea/EditProduct/EditProduct";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
            <Route path="/home" element={<Home/>}/>  
            <Route path="/add" element={<AddProduct/>}/>
            <Route path="/edit" element={<EditProduct/>}/>
            <Route path="/bread" element={<BreadList  />}/>
            <Route path="/dairy" element={<DairyList/>}/>
            <Route path="/fruits" element={<FruitsList/>}/>
            <Route path="/vegtables" element={<VegtablesList/>}/>
			<Route path="/menu" element={<Menu/>}/>
            <Route path="/" element ={<Navigate to="home"/>}/>
            

            </Routes>      
        </div>
    );
}

export default Routing;
