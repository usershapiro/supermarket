import { NavLink, useNavigate } from "react-router-dom";
import "./AddProduct.css";
import ProductModel from "../../../Models/ProductModel";
import { useForm } from "react-hook-form";
import productService from "../../../Services/ProductsService";
import { Button, TextField } from "@mui/material";


function AddProduct(): JSX.Element {
    
    const {handleSubmit , register} = useForm <ProductModel>();
    
    const navigate = useNavigate();

    async function send(product:ProductModel) {
        try {
            await productService.addProduct(product);
            alert("gift has been added")
            navigate("/products");
        }
        catch(err: any) {
            alert(err.message);
        }
    }
   

    return (
        <div className="AddProduct">
			<h1>you are welcomed to add a product</h1>

            {/* <form onSubmit={handleSubmit(send)}>
                <label>productName:</label><br/>
                <input type="text" {...register("productName")} ></input><br/>

                <label>manufacturingDate:</label><br/>
                <input type="date" {...register("manufacturingDate")}></input><br/>

                <label>expireDate:</label><br/>
                <input  type="date" {...register("expireDate")}></input><br/>
{/* 
                <label>categoryName:</label><br/>
                <input type="text" {...register("categoryName")} ></input><br/> */}
{/* 
                <label> productCategoryId: </label><br/>
                <input type="number"  {...register("productCategoryId")}></input><br/>

                <label> price: </label><br/>
                <input type="number"   {...register("price")}></input><br/>
                 
                 <button>Add</button>

            </form> */} 


           <form  onSubmit={handleSubmit(send)}> 
               
       
    <TextField className="formInput" id="outlined-basic" label="productName:" variant="outlined"    {...register("productName")}  />
    <TextField  className="formInput" id="outlined-basic" label="expireDate:"  variant="outlined"      {...register("expireDate")}/>
    <TextField id="outlined-basic" label="manufacturingDate:"    variant="outlined"  {...register("manufacturingDate")} />
    <TextField id="outlined-basic" label="productCategoryId:" variant="outlined" {...register("productCategoryId")} />
    <TextField id="outlined-basic" label=" price:" variant="outlined"  {...register("price")} />
    
    <Button variant="contained" type="submit">Add</Button>
    
    
     </form> 
              <NavLink to={"/home"}><span>back</span></NavLink>   
        </div>
    );
}

export default AddProduct;


