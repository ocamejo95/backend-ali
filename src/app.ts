import "reflect-metadata";

import cors from "cors";
import express from "express";
import path from "path";

import { loadApiEndpoints } from "./controllers/api";
import { authRoute } from "./routes/authRoutes";
import { fileRoute } from "./routes/fileRoutes";
import { userRoute } from "./routes/userRoutes";
import { connectDB } from "./util/connection";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("*", (req, res) => {
  res.sendfile(path.resolve(__dirname, "public/dist/index.htlm"));
});

connectDB();

//Directorio publico
app.use(express.static("public"));

loadApiEndpoints(app);
userRoute(app);
fileRoute(app);
authRoute(app);

export default app;
