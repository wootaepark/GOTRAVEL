const express = require('express');

const router = express.Router();


router.get('/api/flights', (req, res) =>{
   const departure =req.query.departure;
   const arrival = req.query.arrival;
   try{
    if(departure && arrival){
        res.json({
            departure : departure,
            arrival : arrival,
       })
    } // 임시 데이터 response
    else{   
        console.log('데이터가 없습니다.');
        res.status(204).json({
            data : 'No data',
        })
        // No data
    }
 
   }
   catch(error){
    console.error(error);
    res.status(500).send('서버 오류');
   }
   
});

router.get('/api/getCurrentTime',(req, res)=>{

    try{
        res.json({
            'Current Time' : new Date() ,
        })

    }
    catch(error){
        console.error(error);
        res.json(500).json({
            info : 'Internal Server Error',

        });
    }
});

module.exports = router;