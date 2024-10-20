const express = require("express");
const port = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.post("/login",(req, res)=>{

})

app.listen(port, ()=>{
    console.log(`server started on port ${port}`);
})