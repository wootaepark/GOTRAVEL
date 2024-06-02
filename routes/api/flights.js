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

module.exports = router;