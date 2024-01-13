const hotelInfoRouter = require('../routes/hotelInfo');
const databasehotel = require('../backend/models/amazingView');

module.exports.hotelInfo_get = async (req, res) => {
    const id = req.params.id;
    const hotelData = await databasehotel.find({_id:id})
        .then((hotelId) => { 
            console.log(hotelId)
            res.render('hotelInfo', { hotelId, id })
        })
        .catch((e) => {
            console.log(e)
        })

};