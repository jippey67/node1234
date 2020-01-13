const request = require('request')
/*

//const url = "https://api.darksky.net/forecast/2afa3845c349a0d9e785b49d0d0800bf/37.8267,-122.4233"
const url = "https://api.darksky.net/forecast/2afa3845c349a0d9e785b49d0d0800bf/52.10461,4.27557"
request({url: url, json: true}, (err, res) => {
    if (err) {
        console.err(err)
    } else {
        console.log(res.body.currently)
    }
})


*/
const mapBoxToken = "pk.eyJ1IjoiamVyb2Vud2FsdGEiLCJhIjoiY2s1OGFtNHhmMGxldjNncGFwanBya213cSJ9.Cv5qqnMTwj5NS4rqsp5kXA"
const url2 = "https://api.mapbox.com/geocoding/v5/mapbox.places/Den%20Haag.json?access_token="+mapBoxToken

request({url:url2, json:true
}, (err,res) => {
    console.log(res.body.features[0].center)
})