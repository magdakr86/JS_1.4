var os = require('os');

var getOSinfo = function() {
	var type = os.type();	
	if(type === 'Darwin') {
    	type = 'OSX';
	} else if(type === 'Windows_NT') {
		type = 'Windows';
	}

	var release = os.release();
	var cpu = os.cpus()[0].model;
	var uptime = os.uptime();
	var userInfo = os.userInfo();
	
	console.log('System:' , type);
    console.log('Realase:' , release);
    console.log('CPU model:' , cpu);
    console.log('Uptime: ~' , (uptime/60).toFixed(0), 'min');
    console.log('User name:' , userInfo.username);
    console.log('Home dir:' , userInfo.homedir);
}

function formatTime() {

  var getTime = os.uptime().toFixed(0);
  var info = '';

  info +=  Math.trunc(getTime/3600) + ' h ';
  getTime -= 3600 * (Math.trunc(getTime / 3600));

  info += Math.trunc(getTime/60) +  ' min ';
  getTime -= 60 * (Math.trunc(getTime /60));

  info += Math.trunc(getTime) + ' s ';

  console.log('Your computer is turned on for: ');
  console.log(info);
}

module.exports = {
    print: getOSinfo,
    formatTime: formatTime
};



