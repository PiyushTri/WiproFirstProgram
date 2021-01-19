const bodyParser = require('body-parser')
const express = require('express');
const app = express();

app.use(bodyParser.json({ limit: '10mb' }));


app.post('/transformPayload', (req, res) => {

    let payloaddata = req.body.payload;
    let referenceData = req.body.referenceData;

    console.log(payloaddata)
    if (Object.keys(payloaddata).length == 0 || Object.keys(referenceData).length == 0) {
    
        return res.status(400).send('Please enter payload & reference Data')
    
    }
   
    res.status(200).send(payloaddata)
});















let server = app.listen(8080, () => {
    console.log(`Server Running on port 8080`)

});