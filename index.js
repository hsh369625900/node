var http = require('http');
var fs = require('fs');
var myeventEmit = require('events').EventEmitter;
var myevent = new myeventEmit();

myevent.on('some_event',function(){
	console.log('some_event occurd');
});

var server = http.createServer(function(req,res){
	res.writeHead('200',{'contentType':'text/html;charset=UTF-8'});
	fs.readFile('./readme.txt','utf-8',function(err,data){
		if(err) {
			console.error(err);
		}
		else {
			res.write('<p>'+data+'</p>');
		}
		res.end();
	});
	res.write('<h1>hello</h1>');
});

setTimeout(function(){
	myevent.emit('some_event');
},1000);

server.listen(3000);

console.log('server on 3000');