import Product from "./models/products";
import Review from "./models/reviews";



Product.hasMany(Review); // => authorId  Author.findAll({include: Article})
Review.belongsTo(Product); // => Article.findAll({include:Author})

export default { Review, Product };