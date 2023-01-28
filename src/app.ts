import "reflect-metadata";

import cors from "cors";
import express from "express";

import apiRoutes from "./controllers/api";
import authRoutes from "./routes/authRoutes";
import fileRoutes from "./routes/fileRoutes";
import userRoutes from "./routes/userRoutes";
import { connectDB } from "./util/connection";
import path from "path";


// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);

//Lectura y parseo del body
app.use(express.json());

//Configurar cors
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//Coneccion a la BD
connectDB();

//Directorio publico
app.use(express.static("public"));

//Rutas
app.use("/api", apiRoutes);
app.use("/api/file", fileRoutes);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use("*", (req, res) => {
  res.sendFile(path.resolve("./public/index.html"));
});

export default app;
