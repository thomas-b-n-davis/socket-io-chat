
let express =require("express");
let app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
let port =3000;

io.on("connection", socket => {
  console.log("a user connected :D");
  socket.on("chat message", msg => {
    console.log(msg);
    io.emit("chat message", msg);
  });
});

app.get('/',(req,res)=>{
  console.log("---->");
});

server.listen(port, () => console.log("server running on port:" + port));
