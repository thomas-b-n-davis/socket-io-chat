
let express =require("express");
let app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
let port =3010;


io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat',function(msg){
    console.log('message: ' + msg);
    let message=msg.split("::");
    io.emit(message[0], message[1]);
  });
});


app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/index.html');
});

server.listen(port, () => console.log("server running on port:" + port));


