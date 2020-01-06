var express= require("express")

var router = express.Router();
var Blog = require("../models/Blogs")
router.get('/', (req, res) => {
    Blog.find({} , (err , blogs) =>{
        if (err) {
            console.log(err);
        }else{
        res.render("index", {blogs});
        }
    })
});

// new route
router.get('/new', (req, res) => {
   res.render("new") 
});


//create route
router.post('/', (req, res) => {

    //create a blog
    Blog.create(req.body.blog, (err , newBlog)=>{
        if(err){
            console.log(err);
        }else{
            console.log(newBlog);
        }
        res.redirect("/")
    })
});

//show route 
router.get('/:id', (req, res) => {
    Blog.findById(req.params.id, (err,newBlog)=>{
        if (err) {
            console.log(err);
        } else {
            res.render("show",{newBlog});
        }
    })
});





module.exports = router