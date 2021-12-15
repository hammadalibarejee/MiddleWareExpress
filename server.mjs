import express from "express";
import fs from "fs";
import router from "./routes/routes.mjs";

// import morgan from "morgan ";

const PORT=3000 || process.env.PORT;
const app=express();

const user=fs.readFileSync('./data/sample.json','utf8');
const hello = (req,res)=>{
    console.log(req.requestTime);
    res.status(200).json({
        status:"Success",
        Time: req.requestTime ,
        Data:"Hello World"

    })
}
const showUser= (req,res)=>{
    res.status(200).json({
        status:"Success",
        Data: user
    })
}

const postUser=(req,res)=>{
    
    const newUser= Object.assign(req.body);
    // user.push(newUser);

    fs.writeFile('./data/sample.json',JSON.stringify(user,err=>{
        res.status(200).json({
            status:"success",
            data:{
                user:newUser
            }
        })
    }))


}

// app.use(morgan('dev'));
app.use(express.json());

// const Rout= express.Router();
app.use('/users',router);
app.use((req,res,next)=>{
    console.log("Hello from the middle ware")
    next();
})

app.use((req,res,next)=>{
    req.requestTime = new Date().toISOString;
    next();
})
app.route("/")
    .get(hello);

// Rout
//     .get(showUser) 
//     .post(postUser);


app.listen(PORT,()=>{
    console.log(`The application is hosted on  http://localhost:${PORT}`);
})

