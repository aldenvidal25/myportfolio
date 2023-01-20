const router = require('express').router;
const nodemailer = require('nodemailer');


router.post('/contact', (req, res) => {
  let data = req.body;
  if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0) {
    return res.json({ msg: "please fill all the fields" });
  }
  let smtpTransporter = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: 'gwapongcoder@gmail.com',
      pass: 'MeI6PVQRMyy$uow'
    }
  })
  let mailOptions = {
    from: data.email,
    to: 'gwapongcoder@gmail.com',
    subject: `message from ${data.name}`,
    html: `

        < h3 > Informations </h3>
        <ul>
          <li>Name: ${data.name}</li>
        </ul>
        <h3>Message</h3>
        <p>${data.message}</p>
        `
  }

  smtpTransporter.sendMail(mailOptions, () => {
    try {
      if (error) return res.status(400).json({ msg: 'please fill all the fields' })
      res.status(200).json({ msg: 'Thank you for contacting Alden Vidal!' })
    } catch (error) {
      if (error) return res.status(500).json({ msg: "There is a server error" })
    }
  })

})
module.export = router;