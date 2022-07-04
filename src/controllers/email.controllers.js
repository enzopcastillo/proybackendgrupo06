const { request, response } = require('express');
const nodeMailer = require('nodemailer');

const envioCorreo = (req=request, resp=response) =>{
    let body = req.body;

    let config = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        auth:{
            user: 'gatheringeventos@gmail.com',
            pass: 'taulkxxaaedmkgjx'
        },
    });

    const opciones = {
        from: 'gatheringeventos@gmail.com',
        subject: body.asunto,
        to: body.email,
        text: body.message,
        attachments: [{
            filename: 'image.png',
            path: body.img,
            cid: 'unique@nodemailer.com',
        }],
        html: `
        <strong>Nombre:</strong> ${body.message} <br/>
        <strong>E-mail:</strong> ${body.email} <br/>
        <strong>Mensaje:</strong> ${body.asunto}<br/>
        <img src="cid:unique@nodemailer.com"/>
        `,
    };

    config.sendMail(opciones, function(error, result){
        if (error) return resp.json({
            ok: false,
            msg: error
        })
        return resp.json({
            ok: true,
            msg: result
        })
    });

}

module.exports = {envioCorreo};