import express from "express";
import morgan from "morgan";
import path from "path";
import FAQ from "./data/faq.json" with { type: "json" };

const app = express();

app.use('/fonts/geist', express.static('node_modules/geist/dist/fonts'));
app.use(morgan('dev'));
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(import.meta.dirname, 'views'));

app.get('/', (req, res) => res.render('index', { page: 'home' }));

app.get('/faq', (req, res) => {
  const data = {
    faq: FAQ,
  };
  res.render('faq', { page: 'faq', data });
});

app.get('/team', (req, res) => {
  const students = [
    { name: 'string', avatar: 'link', role: 'string' },
  ];
  res.render('team',{ page: 'team', students });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
