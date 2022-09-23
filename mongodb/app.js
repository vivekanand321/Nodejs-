//Installing mongoose and nodemon package for every app npi i mongoose.


const express=require('express')
const mongoose=require('mongoose');
const app=express();
app.use(express.json());//middlewere
//Connec ot mongoDB ,password is writeen atpassword place
mongoose.connect('mongodb+srv://vivekanand:1234@cluster0.h3w3xpi.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true});

//check moongose is connected
mongoose.connection.on('connected',()=>{
    console.log("connected to MongoDB");
});
// //create a schema 
// const Schema=mongoose.Schema;
// const ObjectId=Schema.ObjectId;

//Saving data to database.
//Nosql database have somthing called collection ,each collection contains many small parts known as modules or collection also.
//collection takes two parameter first isname of the collection and second is type or schema for that name.
//scema is a set of rules that define the structure of the document.    
//Createing collection movies,with this collection we can get ,post, delete any movie.
 
const moviesSchema=new mongoose.Schema({
    name:String,
    year:Number,
    rating:Number,
});
const movieModel=mongoose.model('movies',moviesSchema);

//[CRUD] with moongoose
//[1]Creating movies by post request,whatever we are creating we can see it at mongodb server.
app.post('/movies',async(req,res)=>{
    const body=req.body;//getting the datails of movie
    await movieModel.create(body);
    res.status(201);
    res.send({
        message:'Movie created'+body.name,
    })
});
//js is synochronous in nature,means we cannot move until execution happen line by line if any line is taking much time. 
//to handel this problem we use async at (req,res) and await at query.
//[2]Getting the movie
app.get('/movies',async (req,res)=>{ 
    const movies=await movieModel.find();//Asynchronous
    //if we have to get particular item from database we send that condition while requesting api
    //in moviewModel.find(req.body) we will pass req.body. if not passed anything find will access all the data. 
    res.send({
        message:"movie fetched",
        data:movies,
    })
})
//mongodb assign id to each element inside coleection,with that we can use that id for RUD.
//[3]Deleting the movie
app.delete('/movies',async (req,res)=>
{
    const body=req.body;
    await movieModel.findByIdAndDelete(body.id);
    res.status(200);
    res.send({
        message:'Movie Deleted',
    })
})

//[4]Update(PUt,Patch)
app.patch('/movies',async (req,res)=>{
    const body=req.body;
    const id=body.id;
    await movieModel.findByIdAndUpdate(id,body);
    res.status(200)
    res.send({
        message:"Movie updated",
    })
});

app.listen(4000,()=>console.log('Serverstarted on port 4000'));
