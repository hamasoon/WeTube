import express from "express";

const PORT = 4000;

const app = express();//express appilcation create

//request <-> listening
//해당 서버에 접속(방문)이나 입력등을 하는 것 : request
//서버에서 해당 request를 받아들이는 것 : listening

const handleListening = () => console.log("Server is Listening");//yes this is Lambda

app.listen(PORT/*port*/, handleListening/*callBack 함수*/);
//port에 접속하면 callback함수를 호출한다. -> 나중에는 이게 Router가 될 예정