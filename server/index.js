//IMPORT FROM PACKAGES
const express =require("express");
const mongoose=require("mongoose");
const cors = require("cors");

//IMPORT FROM OTHER FILES
const authRouter=require("./routes/auth");
const adminRouter=require("./routes/admin");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");




//INIT
const PORT=process.env.PORT || 3000;
const  DB ="mongodb+srv://mbugua:john123@cluster0.7oh5l.mongodb.net/?retryWrites=true&w=majority";
const app=express();

//middllewares
app.use(express.json());
app.use(cors());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);


//Connections
mongoose.connect(DB).then(()=>{
    console.log('Connection to database successful');
}).catch((e)=>{
    console.log(e);
});


app.listen(PORT,"0.0.0.0",()=>{
    console.log(`Connected at port ${PORT}`)
})
