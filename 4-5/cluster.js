const http = require('http');
const cluster = require('cluster');
const e = require('express');
const numCPUs = require('os').cpus().length;

if(cluster.isMaster)
{
    console.log(`마스터 프로세스 아이디 : ${process.pid}`);

    //cpu 개수만 큼 워커 생산
    for(let i=0; i<numCPUs; i+=1)
    {
        cluster.fork();
    }

    //워커 종료됐을 때
    cluster.on('exit', (worker, code, signal) => {
        console.log(`${worker.process.pid}번 워커가 종료되었습니다.`);
        console.log('code', code, 'signal', signal);
        //cluster.fork(); //워커 프로세스 종료 시 새 워커를 하나씩 생성하는 구문
    });
}

else 
{
    //워커 포트 대기
    http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write('<h1>Hello Node!</h1>');
        res.end('<p>Hello Server!</p>');

        setTimeout(() => { //워커가 존재하는지 확인하기 위해 1초마다 강제 종료
            process.exit(1);
        }, 1000);
      }).listen(8086);
          
      console.log(`${process.pid}번 워커 실행`);
}