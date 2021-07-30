const http = require('http');
const fs= require('fs').promises;

http.createServer(async (req, res) => {
    try {
        const data = await fs.readFile('./server.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
    }
    catch (err) {
        console.log(err);
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' }); //에러메시지는 일반문자열이므로 plain 사용
        res.end(err.message);
    }
})
    .listen(8088, () => {
        console.log('8088 포트에서 서버 대기중..')
});