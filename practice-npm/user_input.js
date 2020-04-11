//const yargs = require('yargs')

/*const print = console.log;
const input = process.argv[2];


if (input === 'add') {
	print('Adding Notes')
}else if(input === 'remove') {
	print("removibg notes")
}*/


/*const print = console.log;

yargs.command({
	command: 'add',
	describe: 'adding a new notes',
	handler: function() {
		//console.log('Hello')
		print('Hello')
	}
})
print(yargs.argv)*/

const argv = require('yargs').argv

if (argv.ships > 3 && argv.distance < 53.5) {
	console.log('Plunder more riffiwobbles!')
} else {
	console.log('Retreat from the xupptumblers!')
}