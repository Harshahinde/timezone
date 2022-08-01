// let moment = require('moment');
let moment = require('moment-timezone');

let date = new moment().format('LLL');
console.log('Moment date:', date);

var newYork    = moment.tz("2014-06-01 12:00", "America/New_York");
var losAngeles = newYork.clone().tz("America/Los_Angeles");
var london     = newYork.clone().tz("Europe/London");
var tokya     = newYork.clone().tz("Asia/Tokyo");



console.log('newYork',newYork.format());    // 2014-06-01T12:00:00-04:00
console.log('losAngeles',losAngeles.format()); // 2014-06-01T09:00:00-07:00
console.log('london',london.format());     // 2014-06-01T17:00:00+01:00
console.log('tokya',tokya.format());     // 2014-06-01T17:00:00+01:00
