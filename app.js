//SERVER SIDE RENDERING USING EJS

//IMPORT ALL ROUTES HERE OF ALL PAGES
require('dotenv').config();
const path=require("path");
const express=require("express");
const mongoose=require("mongoose");
const cookieParser=require('cookie-parser');



//getting blogs
const Blog=require('./models/blog')

const userRoute=require("./routes/user")
const blogRoute=require("./routes/blog");

const { checkForAuthenticationCookie }= require( "./middlewares/authentication");

//DEPLOYING ENVIRONMENT VARIABLES
//CREATING SERVER
const app=express();

const PORT=process.env.PORT ||8004;

//CONNECTING MONGODB
// mongoose.connect('mongodb://localhost:27017/blogify')
mongoose.connect(process.env.MONGO_URL)
.then((e)=>console.log("MongoDB Connected"));


app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use(express.urlencoded({extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve('./public')))

//Route for home page 
app.get("/",async(req,res)=>{
    const allBlogs= await Blog.find({});
    res.render("home",{
        user:req.user,
       blogs:allBlogs,
    });
});

app.use("/user", userRoute);
app.use("/blog", blogRoute)



app.listen(PORT,()=>console.log(`Server Started at PORT:${PORT}`));