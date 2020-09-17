const core = require('@actions/core');
const path = require('path');
const fs = require('fs');
const showdown  = require('showdown');
const sgMail = require('@sendgrid/mail');

const  convertMDToHTML = async(mdContent) =>{
  let converter = new showdown.Converter();
  return await converter.makeHtml(mdContent);

}
const sendEmail = (emailTo,readmeContent) =>{
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: emailTo,
  from: emailTo,
  subject: `Readme.md Update in ${process.env.GITHUB_REPOSITORY}!`,
  html: readmeContent
};
sgMail.send(msg);
}
try {
  const mainDir = './';
  let README = fs.readdirSync(mainDir).includes('readme.md')
  ? 'readme.md'
  : 'README.md';
  const readme = fs.readFileSync(path.join(mainDir,README), { encoding: 'utf8' });
  const repoEmailAddress = process.env.REPO_EMAIL_ADDRESS;
  convertMDToHTML(readme).then(readmeContent =>{
    sendEmail(repoEmailAddress,readmeContent);
  }).catch(error =>{
    core.setFailed(error.message);
  })
} catch (error) {
  core.setFailed(error.message);
}

