const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use('/icons', express.static(path.join(__dirname, 'icons')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/sendmail', (req, res) => {
    const { name, email, message } = req.body;

    let transporter = nodemailer.createTransport({
        host: 'smtpout.secureserver.net',
        port: 465,
        secure: true,
        auth: {
            user: 'info@oldoakrentals.com',
            pass: 'NToor17#NToor97#'
        }
    });

    let mailOptions = {
        from: email, 
        to: 'info@oldoakrentals.com', 
        subject: `Old Oak Tree | enquiry from ${name} `,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.redirect('http://www.oldoakrentals.com/contactUs.html?success=false');
        } else {
            console.log('Email sent: ' + info.response);
            return res.redirect('http://www.oldoakrentals.com/contactUs.html?success=true');
        }
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
