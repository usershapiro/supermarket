class Config {
 categoiesUrl = "http://localhost:3001/api/categories"
 productsByCategoryUrl = "http://localhost:3001/api/product-by-category/"
 addProduct = "http://localhost:3001/api/products"
 deleteProduct = " http://localhost:3001/api/delete-product/"



}
const appConfig = new Config()
export default appConfig;