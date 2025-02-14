import app from "./app.js";
import { PORT } from "./config.js";

const startServer = async () => {
  try {
    await app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor", error);
  }
};

startServer();
