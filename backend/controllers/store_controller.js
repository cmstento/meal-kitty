// Google's search api does not allow access through the browser
// In order to use it, we will expose a route through our own API

var express = require('express')
var fetch = require('isomorphic-fetch')

var router = express.Router()

router.get('/', function (req, res) {
    console.log(req.query)
    if (!req.query.latitude || !req.query.longitude || !req.query.radius) {
        res.send('You must provide a latitude, longitude, and radius!')
    } else {
        url=`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyDgYI2i3Bk-3iXHW1jL3ed-QueViCN3Akg&location=${req.query.latitude},${req.query.longitude}&radius=${req.query.radius}&type=supermarket`
        fetch(url)
            .then(response => response.json())
            .then(json => res.send(json))
    }
})

module.exports = router