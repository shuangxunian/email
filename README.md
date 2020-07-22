# 群发邮件

新加一个更新博客会给付费用户群发通知邮件的功能

使用此项目需要你有node+npm

## 安装依赖：

npm install

## 改emailto.txt：

按行存储邮箱地址

## 改email.js：

addr为邮箱地址，即你的邮箱，ex：123456@qq.com

pwd为邮箱密码，这里用qq邮箱举例：点击qq邮箱，找到设置，账户，开启服务，开启POP3/SMTP服务，发送短信后会给你一串字符，将此字符复制粘贴到pwd的双引号中即可

host为smtp服务器主机，已填qq邮箱，如换其他邮箱记得更换，用qq邮箱就不用换了

mailSubject添加邮件主题，

mailText为邮件正文，正文中换行可用“/n”

## 运行

node email.js

