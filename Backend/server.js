import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import { router as authorRouter } from "./routes/authorRoutes.js";
import { router as blogPostRouter } from "./routes/blogpostRoutes.js";


const app = express();
app.use(express.json());
app.use(cors());
connectDB();

app.get("/", (req, res) => {
  res.send("Salve, questa è la backend");
});

app.use("/api/authors", authorRouter);
app.use("/api/blogposts", blogPostRouter);

app.listen(3001, () => {
  console.log("Server connesso, aperta porta 3001");
});
