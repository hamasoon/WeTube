import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express();//express appilcation create
//--------------------------------------미들웨어------------------------------------------
app.use(morgan("dev"));

//--------------------------------------라우터설정------------------------------------------
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () => console.log("Server is Listening");//yes this is Lambda

app.listen(PORT/*port*/, handleListening/*callBack 함수*/);
//port에 접속하면 callback함수를 호출한다.