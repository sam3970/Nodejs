var http = require('http');
var fs = require('fs');
var url = require('url');

var express = require('express');
var app = express();
var router = require('./router/main.js')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});
app.use(express.static('public'));

//서버 생성
http.createServer(function (request, response)
{
	var path = url.parse(request.url).pathname;

	console.log("요청 "+ path +" 받음.");

	// 파일 이름이 비어있다면 index.html 로 설정
	if(path == "/")
	{
       path = "/index.html";
	}

	// 파일을 읽기
	fs.readFile(path.substr(1), function (err, data) 
	{
      if (err) 
	  {
         console.log(err);
         // 페이지를 찾을 수 없음
         // HTTP Status: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
      }
	  else
	  {	
         // 페이지를 찾음	  
         // HTTP Status: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});	
         
         // 파일을 읽어와서 responseBody 에 작성
         response.write(data.toString());		
      }
      // responseBody 전송
      response.end();
   });   
}).listen(8001);


console.log('Nodejs Server가 http://127.0.0.1:8001/ 주소로 실행중입니다.');
