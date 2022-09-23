/*
//NPM=>node,package,manager,use to help in management of project
//npm init =>for installing express,asked some question.make a package.json file
//npm i express =>insatll express.get a folder name node modules it contain all third party feature when we install somthing.
//[*]Making Server in Express
//when we have to start server we execute on terminal node file_name.js but insted of writing this command for restarting the server again and again 
//we can do some changes in package.json file,in scripts add new ket value("start":"node app.js").
//now have to call (npm start) only.
const express=require("express");
const server=express();
server.listen(3000,()=>{
    console.log("express server is running at 3000");
});
//[*]ROUTING 
//after port number if something is written i.e /page2 then to handle this request we use routing.
//locally if somthing is written after / for handling it we use get method
//as a request we can send html pages css can be inbuilded.
*/
const database=[{"id":1,"name":"avengers"},{"id":2,"name":"batman"},{"id":3,"name":"superman"}];
const express=require("express");
const server=express();
server.use(express.json());//json use to extract the bidy from request
//express.json() i body parser.
server.listen(3000,()=>{
    console.log("express server is running at 3000, it will enovoke once listen will call");
});
server.get('/',(req,res)=>{
    res.status(301);
    res.header('Content-type','text/html');
    res.send("ya everything is working fine we are at home page");
})
server.get('/greet',(req,res)=>
{
    res.send("Namaskaram ,Today is 21 of september");
})
//installing tunderclient for dummy request
server.get('/movies',(req,res)=>{
    res.status(200);
    res.send(
            {
                message:"here are your movies",
                data:database,
            }
        )
})
//"*" is for all route,if we have to give message for any request not present in function.
server.get("*",(req,res)=>{
res.send("in 404");
})
//npm install -g nodemon or
//npm i nodemonnode->restart the server automatically if any change occour
//if specifically have to run server npm start will work but we want that whenever changes occour it automatically restart the server for that
//we use npm run dev to run the server for automatic restart

//A request and response has two part header,body followed by status code

//Adding someting on database variable,CREATE,READ
// server.use((req,res,next)=>{
//     console.log("in middleware");
//     next();
// });//it is middleware,it will execute each and everytime.next is use to execute next 
server.post("/movies",(req,res)=>{
    res.send("pot method on /movies");
    console.log(req.body);
    database.push(req.body)
    console.log("database is"+database);
})
//delete
server.delete("/movies",(req,res)=>{
    console.log("in delete")
    const id=req.query.id;
    console.log(req.query); 
    console.log(id)
    const index=movies.findIndex((movie)=>movie.id===parseInt(id));
    movies.splice(index,1);
    res.send("movie deleted");
})