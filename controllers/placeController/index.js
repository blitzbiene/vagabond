const getPlaceById = require('./getPlaceById');
const getPlaceByUserId = require('./getPlaceByUserId');
const createPlace = require('./createPlace');
const checkUser = require('./checkUser');
const deletePlace = require('./deletePlace');
module.exports = {
    getPlaceById,
    getPlaceByUserId,
    createPlace,
    checkUser,
    deletePlace
}