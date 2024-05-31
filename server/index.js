// index.js
import express from "express";
import cors from "cors";
import { serverConfig } from "./config.js";
import productRoute from "./routes/productRoute.js";
import './firebase.js';  // Certifique-se de que o Firebase é inicializado

const app = express();
app.use(cors());
app.use(express.json());

// Inicializar as rotas
app.use("/api", productRoute);

app.listen(serverConfig.port, () =>
  console.log(`Server is live @ ${serverConfig.hostUrl}`)
);
