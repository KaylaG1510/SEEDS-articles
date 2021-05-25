const router = require('express').Router();
// const { default: Axios } = require('axios');
// let Article = require('../../models/article.model');
const Article = require('../../models/article.model');

// router.route('/').get((req, res) => {
//   Article.find()
//     .sort({date: -1})
//     .then(articles => res.json(articles))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.get('/', (req, res) => {
  Article.find()
    .sort({date: -1})
    .then(articles => res.json(articles))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/', (req, res) => {
  const newArticle = new Article({
    title: req.body.title,
    author: req.body.author,
    year: req.body.year,
    practice: req.body.practice,
    claim: req.body.claim,
    strength: req.body.strength
  });

  newArticle.save().then(article => res.json(article));
});

// router.route('/add').post((req, res) => {
//   const title = req.body.title;
//   const author = req.body.author;
//   const year = Number(req.body.year);
//   const practice = req.body.practice;
//   const claim = req.body.claim;
//   const strength = req.body.strength;

//   const newArticle = new Article({
//     title,
//     author,
//     year,
//     practice,
//     claim,
//     strength
//   });

//   newArticle.save()
//   .then(() => res.json('Article added!'))
//   .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').get((req, res) => {
//   Article.findById(req.params.id)
//     .then(article => res.json(article))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// //if wanted to search by practice follow above code but practice instead of id?
// // router.route('/:practice').get((req, res) => {
// //     Article.findOne(req.params.practice)
// //         .then(article => res.json(article))
// //         .catch(err => res.status(400).json('Error: ' + err));
// // });

// router.route('/:id').delete((req, res) => {
//   Article.findByIdAndDelete(req.params.id)
//     .then(() => res.json('Article deleted.'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/update/:id').post((req, res) => {
//   Article.findById(req.params.id)
//     .then(article => {
//       article.title = req.body.title;
//       article.author = req.body.author;
//       article.year = Number(req.body.year);
//       article.practice = req.body.practice;
//       article.claim = req.body.claim;
//       article.strength = req.body.strength;

//       article.save()
//         .then(() => res.json('Article updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;