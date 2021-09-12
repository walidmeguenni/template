const nodemailer = require("nodemailer");


exports.main = (fulname, email, token,stutus) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,  
    },
  });
  const Muilemail = {
    from: "storesapce@gmail.com",
    to: email,
    subject: "Please confirm your account",
    html: `<h1>Email Confirmation</h1>
        <h3>Hello ${fulname}</h3>
        <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
        <a href=http://localhost:3000/users/confirm/${token}> Click here</a>
        </div>`,
  };
  const Muilpass = {
    from: "storesapce@gmail.com",
    to: email,
    subject: "Please confirm to change your forgot password",
    html: `<h1>forgot password</h1>
        <h3>Hello ${fulname}</h3
        <p> Please confirm your forgot password by clicking on the following link</p>
        <a href=http://localhost:3000/users/change/${token}> Click here</a>
        </div>`,
  };
  let MuilOptions=null;
  
  if(stutus==="email"){
    MuilOptions=Muilemail
  }else{
      MuilOptions=Muilpass
  }

  transporter.sendMail(MuilOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent : " + info.response);
    }
    transporter.close();
  });
};
