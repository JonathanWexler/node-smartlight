var bluebird = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: bluebird
};

var pgp = require('pg-promise')(options);
var pgLocation = 'postgres://localhost:5432/colors';
var db = pgp(pgLocation);

// add query functions
module.exports = {
  getAllColors: getAllColors,
  getLastColor: getLastColor,
  addColor: addColor,
};


function getAllColors(req, res, next) {
  db.any('select * from color_selections')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Got the colors!'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


function getLastColor(req, res, next) {
  db.one('select * from color_selections order by id desc limit 1')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Got last colors'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function addColor(req, res, next) {
  console.log(req.body);
  db.none('insert into color_selections(red, green, blue)' +
    'values(${red}, ${green},${blue})', req.body)
  .then(function () {
    res.status(200)
    .json({
      status: 'success'
    });
  })
  .catch(function (err) {
    return next(err);
  });
}