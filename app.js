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


// routes

// Blog.findOne({},(err,blog)=>{
//     console.log(blog);
    
// })

app.get('/', (req, res) => {
res.redirect("/blogs")
});

app.get('/blogs', (req, res) => {
    Blog.find({} , (err , blogs) =>{
        if (err) {
            console.log(err);
        }else{
        res.render("index", {blogs});
        }
    })
});

// new route
app.get('/blogs/new', (req, res) => {
   res.render("new") 
});


//create route
app.post('/blogs', (req, res) => {

    //create a blog
    Blog.create(req.body.blog, (err , newBlog)=>{
        if(err){
            console.log(err);
        }else{
            console.log(newBlog);
        }
        res.redirect("/blogs")
    })
});

//show route 
app.get('/blogs/:id', (req, res) => {
    Blog.findById(req.params.id, (err,newBlog)=>{
        if (err) {
            console.log(err);
        } else {
            res.render("show",{newBlog});
        }
    })
});











// listen
app.listen(PORT, () => {
    console.log('App listening on port 8080!');
});