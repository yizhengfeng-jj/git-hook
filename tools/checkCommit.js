// 引入模块
const fs = require('fs'); // 改模块用于读取文件;

// 读取数据
const data = fs.readFileSync('../.git/COMMIT_EDITMSG');


console.log(data);
console.log('=============');
