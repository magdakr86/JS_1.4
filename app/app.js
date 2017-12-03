var OSinfo = require('../modules/OSInfo');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (input == null) {
		process.stdout.write('For more info, please type "help"\n');
	};

	if (input !== null) {
		var instruction = input.toString().trim();

		switch(instruction)	{
			case 'help':
			  process.stdout.write('Type "getOSinfo", "time" to get more info about your OS. Type "exit" to leave the app.\n');
			break;
			case 'getOSinfo':
              OSinfo.print();
            break;
            case 'time':
              OSinfo.formatTime();
            break;
			case 'exit':
			  process.stdout.write('Quitting app!\n');
			  process.exit();
			break;
			default:
			  process.stderr.write('Wrong instruction!\n');
			break;
		}	
	}
});











