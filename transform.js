

exports.transformPayloadData = function (payloaddata, referenceData) {
    try {
        return getAndReplacePayloadValue(payloaddata, referenceData);
    } catch (error) {
        console.log("Error in  transformation", error)
        throw new Error(error.message)
    }
}

function getAndReplacePayloadValue(payloaddata, referenceData) {
    payloaddata.value.forEach(val => {
        //console.log(val.value)
        if (val.valueType == 'string') {


            if (val.value.includes('REF')) {
                let firstval = val.value.split('{')
                let secondval = firstval[1].split('}')
                val.value = referenceData[secondval[0]] + '' + secondval[1]
            }

        } else {

            getAndReplacePayloadValue(val, referenceData)
        }
    });
    return payloaddata
}
