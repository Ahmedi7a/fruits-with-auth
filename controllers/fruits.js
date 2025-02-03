const Fruit = require('../models/fruit')

// new page form
function newFruit(req, res) {
    res.render('fruits/new.ejs', { title: 'add fruit' })
}

//post and create
async function addFruits(req, res) {
    if (req.body.isReadyToEat === 'on') {
        req.body.isReadyToEat = true
    } else req.body.isReadyToEat = false

    await Fruit.create(req.body)
    res.redirect('/fruits')
}

//index page and get the added fruites
async function index(req, res) {
    const fruits = await Fruit.find({})
	res.render('fruits/index.ejs', { fruits, title: 'Fruits' })
}





//================================
module.exports = {
    newFruit,
    addFruits,
    index,
}