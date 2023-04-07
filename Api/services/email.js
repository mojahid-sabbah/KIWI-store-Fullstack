const nodemailer = require("nodemailer");


const sendEmail =async  (dest , subject , message)=>{

    let transporter = nodemailer.createTransport({
       service:'gmail',
        auth: {
          user: process.env.SENDERMAIL, // generated ethereal user
          pass:process.env.SENDERMAILPASS , // generated ethereal password
        },
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: `"My KIWI App" <${process.env.SENDERMAIL}>`, // sender address هون اول عمود بنكتب اسم بدل عصاحب الرسالة
        to: dest, // list of receivers 
        subject: subject, // Subject line
        text: " ", // plain text body
        html: message, // html body
      });
}

module.exports={sendEmail}