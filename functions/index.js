const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey("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")

exports.sendMail = functions.firestore
  .document("entries/{entry}")
  .onWrite(async (change, context) => {
    // configure mail options for nodemailer
    const msg = {
      from: "besampson0@gmail.com",
      to: "bnicerrr@gmail.com",
      subject: "New Photo Submission",
      html: `
      <h3>
        New Photo Submission for Mincraft Competition
      </h3>
      <p>
        <strong>Submitted by:</strong> ${change.after.data().name} <br>
        <img src="${change.after.data().img}" height="200px" width="auto">
        <br><br>
        You can view all submissions at <a href="https://minecraft-windmills.netlify.app/submissions">https://minecraft-windmills.netlify.app/submissions</a>.
      </p>
      `
    };

    sgMail.send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
  });