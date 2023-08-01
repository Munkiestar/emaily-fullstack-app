const sendgrid = require("@sendgrid/mail");

const { sendGridKey, mailFrom } = require("../config/keys");
sendgrid.setApiKey(sendGridKey);

module.exports = async ({ body, subject, recipients }, content) => {
  console.log("content: ", content);
  const msg = {
    from: mailFrom,
    subject: subject,
    text: body,
    // content,
    personalizations: recipients.map((rec) => ({ to: [rec.email] })),
  };

  try {
    const rez = await sendgrid.send(msg);
    console.log("Mail sent: ", rez);
  } catch (err) {
    console.log("Error sending mail: ", err);
  }
};
