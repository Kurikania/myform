const express = require('express'); 
const app = express(); 
let ejs = require('ejs'); 
const path = require('path');
const methodOverride = require('method-override');
app.use(express.static(path.join(__dirname, '/public')));

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));
 
let formData = {
    
};

app.get("/", (req, res) => {
    res.redirect("/home"); 
});

app.get("/home", (req, res) => {
    res.render("index")
});

app.post("/home", (req, res) => {
    const {username, first, age, food, pets} = req.body; 
    formData.username = username; 
    formData.first = first; 
    formData.age = age; 
    formData.food = food; 
    formData.pets = pets; 
    res.redirect("/answer"); 
})

app.get("/answer" , (req, res) => {
    res.render("answer", {formData}); 
})

app.listen(3000, () => {
    console.log('on port 3000')
})