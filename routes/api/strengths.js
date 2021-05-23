const router = require('express').Router();
let Strength = require('../../models/strength.model');

router.route('/').get((req, res) => {
  Strength.find()
    .then(strength => res.json(strength))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const strength = req.body.strength;

  const newStrength = new Strength({strength});

  newStrength.save()
    .then(() => res.json('Strength added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;