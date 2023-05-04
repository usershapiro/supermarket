
import "./Menu.css";
import breadpic from "../../../Assests/pictures/bread.jpeg"
import vegpic from "../../../Assests/pictures/veg.jpg"
import dairypic from "../../../Assests/pictures/dairy.jpg"
import fruitpic from "../../../Assests/pictures/fruits.jpeg"
import { NavLink, useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import ProductModel from "../../../Models/ProductModel";
import productService from "../../../Services/ProductsService";
import BreadList from "../../ProductsArea/BreadList/BreadList";
import CategoryModel from "../../../Models/CategoryModel";
import ProductList from "../../ProductsArea/ProductList/ProductList";


function Menu(): JSX.Element {

    const navigate = useNavigate();
    const [category , setCategory] = useState<CategoryModel[]>([]);
    const [products, setproducts] = useState<ProductModel[]>([]);
    
    useEffect(() => {
        productService.getAllCategories()
        .then(category=>setCategory(category))
        .catch(err=>alert(err.message))
      }, [])

        // HTMLSelectElement --> element raising the event
    // async function showProducts(args: ChangeEvent<HTMLSelectElement>) { 
        async function showProducts(e:any) { 
         let value=e.target.value
        // let value = +args.target.value;
        productService.getProductByCategory(value)
            .then(products => {setproducts(products)   
            }
            )
            .catch(err => alert(err.message));
    }

    
    function getImageForCategory(categoryName:string) {
        switch (categoryName) {
            case 'bread':
                return breadpic;
            case 'dairy':
                return dairypic;
            case 'vegtables':
                return vegpic;
            case 'fruits':
                return fruitpic;
            // default:
            //     return '';
        }
    }
    
    







    return (
        // <div className="Menu">
		// 	<h1>Select Our Fresh Products!!</h1>

        //     <select defaultValue="" onChange={showProducts}>
        //         <option disabled value="">Select...</option>
        //         {category.map(c =>
        //             <option key={c.categoryId} value={c.categoryId}>
        //                 {c.categoryName}
        //             </option>
        //         )}
        //     </select>

            
        //      <br/>
             
        //      {products.map(p=><ProductList key={p.productId} product={p}/>)}
            
        //     <NavLink to={"/bread"}>   <img src={breadpic} className="bread" alt="bread" /></NavLink>
        //     <NavLink to={"/dairy"}>   <img src={dairypic} className="dairy" alt="dairy" /> </NavLink>
        //     <NavLink to={"/vegtables"}><img src={vegpic} className="veg" alt="veg" /></NavLink>
        //     <NavLink to={"/fruits"}>   <img src={fruitpic} className="fruit" alt="fruit" /></NavLink>

        // </div>





        <div className="Menu">
    <h1>Select Our Fresh Products!!</h1>

    {/* <select defaultValue="" onChange={showProducts}>
        <option disabled value="">Select...</option>
        {category.map(c =>
            <button key={c.categoryId} value={c.categoryId} style={{ backgroundImage: `url('${getImageForCategory(c.categoryName)}')` }}>
                {c.categoryName}
            </button>
        )}
    </select> */}

    
    {category.map(c =>
        <button key={c.categoryId}className="buttonpic" value={c.categoryId} onClick={showProducts} 
        style={{ backgroundImage: `url('${getImageForCategory(c.categoryName)}')`,width:200,height:200 ,  border: "none", cursor: "pointer",  marginRight: 8}}>
            {c.categoryName}
        </button>
    )}


     <br/>
     <div className="card">
    {products.map(p=><ProductList  key={p.productId} product={p}/>)}
     </div>
     </div>


    );
}

export default Menu;
