const nodemailer = require("nodemailer");

require("dotenv").config()

const sendMail=async(req,res)=>{
    // console.log("mailreq",req.body)
    let testAccount=await nodemailer.createTestAccount();

// craete a connetion emtp server is start from here
const transporter = nodemailer.createTransport({
    service:"gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: req.body.email,
        pass: process.env.PASSWORD
    },

    // host: "smtp.ethereal.email",
    // port: 587,
    // secure: false, // Use `true` for port 465, `false` for all other ports
    // auth: {
    //     user: 'margarete.mante@ethereal.email',
    //     pass: 'TrPvBgWxxu7gRNasNe'
    // },
  });
  
// craete a connetion emtp server is end here

// send mail with defined transport object is start from here
try{
const info = await transporter.sendMail({


    from: {name:req.body.username,address:req.body.email}, // sender address
    // to: "syedhaideralishah79@gmail.com", // list of receivers
    to: "arslanz499@gmail.com", // list of receivers
    subject: "Mail ✔", // Subject line
    // text: "my mail", // plain text body
    html: `<b>${req.body.message}</b>`, // html body
  });

//   console.log("Message sent: %s", info);
  if(info?.rejected?.length==0){
    res.json({message:"Email send sucessfully"})
  }
// send mail with defined transport object is end here

}
catch(error){
    res.send(error)
}

}

module.exports=sendMail;