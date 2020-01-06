//requires 
var bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    express = require("express"),
    app = express();
const PORT = process.env.PORT || 8080


//app config

mongoose.connect("mongodb+srv://root:root@cluster0-iuz5o.mongodb.net/blog");
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));
// mongoose model
var Blog = require("./models/Blogs")
var blogs = require("./routes/blogs")


// routes

// Blog.findOne({},(err,blog)=>{
//     console.log(blog);
    
// })


app.get('/', (req, res) => {
res.redirect("/blogs")
});


app.use("/blogs",blogs);



// listen
app.listen(PORT, () => {
    console.log('App listening on port '+ PORT);
});