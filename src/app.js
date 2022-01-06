const express = require('express')
const path = require('path');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;

const staticpath = path.join(__dirname,"../public");
const viewspath = path.join(__dirname, '../template/views');
const partialpath = path.join(__dirname, '../template/partials') 

console.log(staticpath);

app.set('view engine', 'hbs');
app.set("views",viewspath);	
app.use(express.static(staticpath));
hbs.registerPartials(partialpath);

app.get('/', (req,res) => {
  res.render("index");
})

app.get('/index', (req,res) => {
  res.render("index");
})

app.get('/about', (req,res) => {
  res.render("about");
})

app.get('/movie', (req,res) => {
  res.render("movie");
})

app.get('*', (req,res) => {
  res.render("error");
})

app.listen(port, () => {
  console.log(`listening to ${port}`)
})