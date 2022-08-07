//nodemailer 와 mailtrap을 이용한(smtp server) 이메일 전송 테스트 
const nodemailer = require('nodemailer');
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "8c2b275d8b9094",
        pass: "203d06d351834b"
    }
};

const email2 = {
    service: 'gmail',
    auth: {
        user: 'mymail@gmail.com',
        pass: 'mymail password'
    }
}

const send = async (auth, option) => {
    nodemailer.createTransport(auth).sendMail(option, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log(info);
            return info.response;
        }
    })
};

let emailData = {
    from: 'o0x0oa86@gmail.com',
    to: 'o0x0oa86@gmail.com',
    subject: '테스트 메일',
    text: 'node js test'
}
//send(email, emailData);
send(email2, emailData); //보안으로 테스트 실패
//run $node email_test