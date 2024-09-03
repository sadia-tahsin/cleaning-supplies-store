const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// MongoDB Connection URL
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = client.db("SuperStore");
const productCollection = db.collection("products");

async function run() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB");

    app.get("/kitchen-cleaners/:productId", async (req, res) => {
      try {
        const id = req.params.productId;
        const product = await productCollection.findOne({
          _id: new ObjectId(id),
        });
        res.json(product);
      } catch (error) {
        console.error("Error fetching data from posts collection:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    });
    // get all products
    app.get("/flash-sale", async (req, res) => {
      try {
        const products = await productCollection
          .find({ flashSale: true })
          .toArray();
        res.json(products);
      } catch (error) {
        console.error("Error fetching data from posts collection:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    });
    app.get("/kitchen-cleaners", async (req, res) => {
      const { Category } = req.query;

      try {
        let query = {};

        if (Category) {
          query.Category = Category;
        }

        // Fetch products, optionally filtered by category
        const products = await productCollection
          .find(query)
          //.sort({ Ratings: -1 }) // Sort by Ratings in descending order if needed
          .toArray();

        res.json(products);
      } catch (error) {
        console.error("Error fetching data from product collection:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } finally {
  }
}

run().catch(console.dir);

// Test route
app.get("/", (req, res) => {
  const serverStatus = {
    message: "Server is running smoothly",
    timestamp: new Date(),
  };
  res.json(serverStatus);
});
