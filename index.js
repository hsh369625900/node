var http = require('http');
var fs = require('fs');
var myeventEmit = require('events').EventEmitter;
var myevent = new myeventEmit();
var jisuan = require('./jisuan');
var b = require('./b');

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
	res.write('<h2>'+jisuan.jisuan(1,3)+'</h2>');
	res.write('<h3>'+b.name+'</h3>');
	res.write('<h3>'+b.jisuan(4,2)+'</h3>');
});

setTimeout(function(){
	myevent.emit('some_event');
},1000);

server.listen(3000);

console.log('server on 3000');