//requires 
var bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    express = require("express"),
    app = express();


//app config

mongoose.connect("mongodb+srv://root:root@cluster0-iuz5o.mongodb.net/test?retryWrites=true&w=majority")
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));
// mongoose model


var blogScema = mongoose.Schema({
    title   :    String,
    img     :    String,
    body    :    String,
    created :   {
                    type : Date,
                    default : Date.now
                } 
})
var Blog =mongoose.model("Blog",blogScema);


// routes
// Blog.create({
//     titel : "test blog",
//     image:"khasfkhvasfvhasv",
//     body:"lorem ipldgbaskhvd"
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

app.listen(8080, () => {
    console.log('App listening on port 8080!');
});

