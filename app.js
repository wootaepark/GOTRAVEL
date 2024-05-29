const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const app = express();
const PageRouter = require('./routes/page');

dotenv.config();


app.use(morgan('dev'));



app.set('port',process.env.PORT || 3000);
app.use(express.static(path.join(__dirname,'build')));
app.use(express.json());
app.use(express.urlencoded({extended : false}));


app.use('/', PageRouter);



app.post('/predict', async (req, res) => {
    try {
      const response = await axios.post('http://r-server:3001/predict', req.body); // 같은 컨테이너 내부에서는 docker-compose 파일의 이름으로 접근해야함
      res.json(response.data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });


app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 대기중');
});