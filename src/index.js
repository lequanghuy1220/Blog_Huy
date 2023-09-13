const express = require('express');
const app = express();
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const port = 3000;
const route = require('./routes');

//static file img
app.use(express.static(path.join(__dirname, 'public')));
//dùng để submit HTML từ client lên HTML(dạng form)
app.use(
    express.urlencoded({
        extended: true,
    }),
);
//dùng để submit dữ liệu bằng code js hoặc các thư viện của js (ex:XMLHttpRequest,fetch,...)
app.use(express.json());
//http logger
      app.use(morgan('combined'));
      //template engine => phải .engine moi su dung dc
      app.engine('handlebars', handlebars.engine());
      app.set('view engine', 'handlebars');
      app.set('views', path.join(__dirname, 'resources/views'));

//routes init
route(app);

        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
