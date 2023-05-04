import { ChangeEvent, useEffect, useState } from "react";
import ProductModel from "../../../Models/ProductModel";
import ProductList from "../ProductList/ProductList";
import "./BreadList.css";
import productService from "../../../Services/ProductsService";
import CategoryModel from "../../../Models/CategoryModel";
import { NavLink, useNavigate } from "react-router-dom";
import breadpic from "../../../Assests/pictures/bread.jpeg"
import vegpic from "../../../Assests/pictures/veg.jpg"
import dairypic from "../../../Assests/pictures/dairy.jpg"
import fruitpic from "../../../Assests/pictures/fruits.jpeg"


function BreadList(): JSX.Element {
    
    
    const navigate = useNavigate();
    const [category , setCategory] = useState<CategoryModel[]>([]);
    const [products, setproducts] = useState<ProductModel[]>([]);
    
    useEffect(() => {
        productService.getAllCategories()
        .then(category=>setCategory(category))
        .catch(err=>alert(err.message))
      }, [])

        // HTMLSelectElement --> element raising the event
    async function showProducts(args: ChangeEvent<HTMLSelectElement>) { 
        const value = +args.target.value;
        productService.getProductByCategory(value)
            .then(products => setproducts(products))
            .catch(err => alert(err.message));
    }
    async function showProductsbuttons(args: ChangeEvent<HTMLButtonElement>) { 
        const value = +args.target.value;
        // productService.getProductByCategory(value)
    //         .then(products => setproducts(products))
    //         .catch(err => alert(err.message));
    alert(value)
    }
    
    
    return (
        <div className="BreadList">
        	<h1>Select Our Fresh Products!!</h1>

<select defaultValue="" onChange={showProducts}>
    <option disabled value="">Select...</option>
    {category.map(c =>
        <option key={c.categoryId} value={c.categoryId}>
            {c.categoryName}
        </option>
    )}
</select>
{category.map(c=><button  key={c.categoryId} onChange={showProductsbuttons} value={c.categoryId}>{c.categoryName}</button>)}



 <br/>

 {products.map(p=><ProductList key={p.productId} product={p}/>)}


<NavLink to={"/dairy"}>   <img src={dairypic} className="dairy" alt="dairy" /> </NavLink>
<NavLink to={"/vegtables"}><img src={vegpic} className="veg" alt="veg" /></NavLink>
<NavLink to={"/fruits"}>   <img src={fruitpic} className="fruit" alt="fruit" /></NavLink>
             </div>
    );
}

export default BreadList;
