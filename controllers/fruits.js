
function newFruit(req,res){

    res.render('fruits/new.ejs', {title : 'new fruit'})
}

module.exports = {
   newFruit,
}