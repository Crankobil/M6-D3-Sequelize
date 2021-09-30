import Product from "./models/products.js";
import Review from "./models/reviews.js";



Product.hasMany(Review); 
Review.belongsTo(Product);

export default { Review, Product };