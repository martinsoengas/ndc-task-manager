const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'martin.fs@gmail.com',
        subject: 'Welcome to the Task App',
        text: `Welcome to the App, ${name}. Let me know how you get along with the app`,
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'martin.fs@gmail.com',
        subject: 'User account cancelled',
        text: `We are sorry to see you go, ${name}. Would you like to tell us the reason of your departure?`,
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}