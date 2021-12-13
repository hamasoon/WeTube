import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();//express appilcation create

//request <-> listening
//해당 서버에 접속(방문)이나 입력등을 하는 것 : request
//서버에서 해당 request를 받아들이는 것 : listening

const protectingMiddleware = (req, res, next) => {
	if(req.url === "/protected"){
		return res.send("<h1>Not Allowed to Access</h1>");
	}
	next();
}

const homeController = (req, res) =>{
	console.log("SomeOne Come In!");
	return res.send("Home Sweet Home");//what the fuck? -> 이게 바로 request를 종료한 것 즉 return 했다!
} //request와 response 객체->event 객체 같은거임

app.use(morgan("dev"));
app.use(protectingMiddleware);

app.get("/", homeController);//root로 Request를 보내면 callback을 시켜주겠다.
//uselessMiddle의 Next는 homeController

const loginController = (req, res) =>{
	console.log("login is NOT ready");
	return res.send("login is NOT ready");
}

app.get("/login", loginController);

const protectedController = (req, res) =>{
	console.log("Welcome Master!");
	return res.send("Welcome Master!");
}

app.get("/protected", loginController);

const handleListening = () => console.log("Server is Listening");//yes this is Lambda

app.listen(PORT/*port*/, handleListening/*callBack 함수*/);
//port에 접속하면 callback함수를 호출한다.