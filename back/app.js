import express from "express";
import cors from "cors";

import usersRouter from "./src/routes/users.js";
import signupRouter from "./src/routes/signup.js";
import loginRouter from "./src/routes/login.js";
import refreshTokenRouter from "./src/routes/refreshToken.js";
import signoutRouter from "./src/routes/signout.js";

const app = express();

app.use(
  cors({
    origin: "XXXXXXXXXXXXXXXXXXXXX",
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/signup", signupRouter);
app.use("/api/login", loginRouter);
app.use("/api/refresh-token", refreshTokenRouter);
app.use("/api/signout", signoutRouter);

export default app;
