const addr = ""; //Your mail address
const pwd = ""; //Your mail pwd
const host = "smtp.qq.com"; //Your SMTP host
const mailSubject = ""; //Mail subject
const mailText = ""; //Mail text

const email = require("emailjs");
const server = email.server.connect({
    user: addr,
    password: pwd,
    host: host,
    ssl: false
});
const readline = require("readline");
const fs = require("fs");
const rl = readline.createInterface({
    input: fs.createReadStream("emailto.txt")
});
var i = 0;
rl.on('line', (rs) => {
    var index = ++i;
    rs = rs.replace(/[\s,，;；]/g, ''); //自动过滤中英文逗号，分号和空格
    sendmail(rs, index);
});

function sendmail(rs, index) {
    server.send({
        text: mailText,
        from: addr,
        to: rs,
        subject: mailSubject
    }, (err, message) => {
        if (err != null) {
            console.log(`Error: (index:${index} , mail:${rs})`);
            //可递归，使发送失败的邮件重发
        }
    });
}