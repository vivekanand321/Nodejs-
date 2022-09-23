/*
Concept of server->Every system has its own ip address , let supposr multiple systems are connected to internet 
and system A has to send some request to system B,then it is only possible when a Moderater comes to picture 
this modearator is server,  A knows ip address of system B then through server A can send request to System B.
module is collection of functions,at installeatio some modules bydefault install
ex-> http module 
const sum=()=>{}
const sub=()=>{}
const mul=()=>{}
const div=()=>{}

//Creating Server->const http is object,whereas we are accessing http modeule to create server .
we can pass function inside function and perform operations which are needed.

const http=require('http')
const fun=()=>{
    console.log("hii i am in Server. 😀😀");
}
const server=http.createServer(fun);
//at port 4000 we can get request from the globe . here this will activate the serverobject
//now whatever function has been passed while making new server will executed when port nuber hitted 
server.listen(4000);//t is port number pno>1000 but pt.no<9999
console.log(server);

[*]request and respose through function
if we print th request it will show all the details of request,everything
*/
const http=require('http')
const fun=(request,respose)=>{
    // console.log(request);
    respose.end("hello from server");//shown on web wahtever response have to send,end is used for that.
}
const server=http.createServer(fun);//without defining new function at other place we can write it  () while instantiating th object.
server.listen(4000);//listen take another parameter as function known as annonimous function.server.listen(4000,()=>{console.log("server is listening at port 4000")})
  
//for making server we use ,http is preinstall but this same work can be done by express we are using it because it provides more features.