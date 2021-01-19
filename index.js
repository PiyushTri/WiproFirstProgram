const bodyParser = require('body-parser')
const express = require('express');
const app = express();
const transform = require('./transform')

app.use(bodyParser.json({ limit: '10mb' }));


app.post('/transformPayload', (req, res) => {

    let payloaddata = req.body.payload;
    let referenceData = req.body.referenceData;

    // console.log(payloaddata)
    if (Object.keys(payloaddata).length == 0 || Object.keys(referenceData).length == 0) {

        return res.status(400).send('Please enter payload & reference Data')

    }

    try {
        let resultData = transform.transformPayloadData(payloaddata, referenceData)

        res.status(200).send(resultData)
    } catch (error) {
        console.log(error);
        res.status(500).send('Oops something went wrong while parsing data')

    }
    //res.status(200).send(payloaddata)
});















let server = app.listen(8080, () => {
    console.log(`Server Running on port 8080`)

});