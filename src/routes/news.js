const express = require('express');
const router = express.Router();
//cấu hình news
const newsController = require('../app/controllers/NewsController');

//newsController.index

router.use('/:slug', newsController.show);
router.use('/', newsController.index);

//export
module.exports = router;
