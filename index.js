// let moment = require('moment');
let moment_tz = require('moment-timezone');
moment_tz.tz.setDefault("America/New_York");
// var readline = require('readline');

// let date = new moment().format('LLL');
// console.log('Moment date:', date);

// var newYork    = moment.tz("2014-06-01 12:00", "America/New_York");
// var losAngeles = newYork.clone().tz("America/Los_Angeles");
// var london     = newYork.clone().tz("Europe/London");
// var tokya     = newYork.clone().tz("Asia/Tokyo");

// console.log('newYork',newYork.format());    // 2014-06-01T12:00:00-04:00
// console.log('losAngeles',losAngeles.format()); // 2014-06-01T09:00:00-07:00
// console.log('london',london.format());     // 2014-06-01T17:00:00+01:00
// console.log('tokya',tokya.format());     // 2014-06-01T17:00:00+01:00



// const targetTimeZone = "Europe/London";

// var rl = readline.createInterface(
//      process.stdin, 
//      process.stdout);

// rl.question('What is timeline? ', (targetTimeZone) => {
//     console.log('Your name is: ' + targetTimeZone);
//     rl.close();
//     console.log(`The time at ${targetTimeZone} timezone is ${moment_tz().tz(targetTimeZone).format()}`);
// });

// console.log(process.argv);
let targetTimeZone;

if (process.argv.length != 3){

	console.log('Usage : node <script-file> <timezone>');
	process.exit(1);

} else {
	targetTimeZone = process.argv[2];
}

const changedTimeZone = moment_tz().tz(targetTimeZone).format();


if (changedTimeZone.includes('Moment Timezone has no data for')){
	// console.log(changedTimeZone);
	console.log('Please try with correct timezone');

}else{
	console.log('else');
	console.log(`The time at ${targetTimeZone} timezone is ${changedTimeZone}`);
}

