var express = require("express")
var app = express();

app.get('/', (req, res) => {
    res.render("index.ejs")
});

app.listen(8080, () => {
    console.log('App listening on port 8080!');
});