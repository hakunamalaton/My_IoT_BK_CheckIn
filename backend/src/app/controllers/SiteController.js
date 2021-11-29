class SiteController {
    home(req, res) {
        res.render('home');
    }
    search(req, res) {
        res.render('search');
    }
    show(req, res) {
        res.send('Show detail')
    }
}

module.exports = new SiteController()