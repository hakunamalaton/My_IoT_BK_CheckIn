class NewController {
    index(req, res) {
        res.render('news');
    }
    show(req, res) {
        res.send('Show detail')
    }
}

module.exports = new NewController()