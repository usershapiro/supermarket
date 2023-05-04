import axios from "axios";
import appConfig from "../Utils/Config";
import ProductModel from "../Models/ProductModel";
import CategoryModel from "../Models/CategoryModel";


class ProductsService  {

    public async getAllCategories():Promise <CategoryModel[]>{
        const response = await axios.get(appConfig.categoiesUrl);
        const categories = response.data;
        return categories
    }

    public async getProductByCategory(categoryId:number):Promise <ProductModel[]>{
         const response = await axios.get(appConfig.productsByCategoryUrl + categoryId);
         const productsByCategory = response.data;
         return productsByCategory
    }

    public async addProduct(product:ProductModel):Promise<void>{
         await axios.post<ProductModel>(appConfig.addProduct , product);
        
    }
    public async deleteProduct(productId:number):Promise<void>{
         await axios.delete(appConfig.deleteProduct + productId);
    }


}
const productService = new ProductsService()
export default productService