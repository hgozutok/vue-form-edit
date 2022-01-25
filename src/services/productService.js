import axios from "axios";

class ProductService {
  // constructor() {
  //   this.products = [];
  // }

  addProduct(product) {
    this.products.push(product);
  }
  async getProducts() {
    var prods;
    await axios.get("https://fakestoreapi.com/products").then((res) => {
      prods = res.data;
      //console.log(prods);
      return res.data;
    });
    return prods;
  }
  getProduct(id) {
    var res = axios.get("https://fakestoreapi.com/products/" + id);
    return res.data;
  }
  deleteProduct(id) {
    var res = axios.delete("https://fakestoreapi.com/products/" + id);
    return res.data;
  }
  updateProduct(id, product) {
    var res = axios.put("https://fakestoreapi.com/products/" + id, product);
    return res.data;
  }
}
export default new ProductService();
