// 引入模块
const fs = require('fs'); // 改模块用于读取文件;

// 读取数据
const data = fs.readFileSync('../.git/COMMIT_EDITMSG', 'utf-8');

// 打印信息
const info = `
    提交信息不符合规范，请按照以下规范提交信息:
        需求提交：AR-xxx xx(AR-456 机器学习)
        BUG提交：BIG-xxx xx(BIG-456 agent分页缺失)
        特殊提交：SPECIAL-COMMIT xx(SPECIAL-COMMIT 产品现场问题)
`;

// 特殊的提交，直接放行
if (/^SPECIAL-COMMIT/.test(data)) {
    process.exit(0);
}

if (/^(AR|BIG)-\d+/.test(data)) {
    process.exit(0);
}

console.error(info);
process.exit(1);

