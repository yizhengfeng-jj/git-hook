// 引入模块
const fs = require('fs'); // 改模块用于读取文件;

// 读取数据
const data = fs.readFileSync('../.git/COMMIT_EDITMSG', 'utf-8');

if (/^(AR|BIG)-\d+/.test(data)) {
    console.log('符合要求');
    process.exit(0);
}else {
    console.log('不符合要求');
    process.exit(1);
}
console.log(process);
console.log(data);
console.log(data.indexOf(6));
console.log('===============');
