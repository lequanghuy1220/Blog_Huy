class NewsController {
    index(req, res) {
        res.render('news');
    }
    // [GET] /news/:slug
    show(req, res) {
        res.send('new details');
    }
}
// export file new controller để require giá trị NewController ở file khác
module.exports = new NewsController();
