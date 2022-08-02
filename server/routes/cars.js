const router = require('express').Router();
let Car = require('../models/car.model');

router.route('/').get((req, res) => {
    Car.find()
        .then(cars => res.json(cars))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const make = req.body.make;
    const model = req.body.model;
    const year = Number(req.body.year);

    const newCar = new Car({
        make,
        model,
        year,
    });

    newCar.save()
        .then(() => res.json('Car added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;