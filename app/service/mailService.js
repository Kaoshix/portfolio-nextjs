var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(email, otpText) {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PW,
        },
    });

    var mailOptions = {
        to: 'sebastien.olha@gmail.com',
        subject: "New message from your website",
        text: `Email: ${email} \nMessage: ${otpText}`,
    };

    await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailOptions, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response);
            }
        });
    });
}