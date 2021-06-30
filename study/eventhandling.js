var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {

	console.log("연결 성공!!");

	eventEmitter.emit("data_received");
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function(){
	console.log("데이터 받았음!!");
});

eventEmitter.emit('connection');

console.log("프로그램의 끝.");
