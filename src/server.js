import express from "express";
import cors from "cors";
import listEndpoints from "express-list-endpoints";
import { connectDB } from "./database/sequelize.js";
import productsRouter from "./services/products/index.js";
import reviewsRouter from "./services/reviews/index.js";



const server = express()

const {PORT=3001} = process.env;

server.use(cors());
server.use(express.json());

server.use("/products", productsRouter);
server.use("/reviews", reviewsRouter);
server.listen(PORT, async () => {
    await connectDB();
    console.log(`Server is listening on port ${PORT}`)
    
})

server.on('error', () =>{
    console.log('Server is stopped', error)
})

console.table(listEndpoints(server));