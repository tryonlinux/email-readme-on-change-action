# email-readme-on-change-action

Your readme is probably the most important part of your project, it is the first thing people see when they visit your repo. You probably should check it out when someone or yourself makes changes. This action is for that, it will send an email with the readme content on a push change to an email you specify. 

I created this action to learn as part of the dev.to github action hackathon. Feedback is welcomed as it was my first attempt. 

## Inputs

Nothing

## Outputs

Nothing

## Example usage

uses: tryonlinux/email-readme-on-change-action@master

Make sure you set the sendgrid api secret for the repo under Settings > Secrets > SENDGRID_API_KEY as well as REPO_EMAIL_ADDRESS

Once those are set, if you or someone else updates the readme file and pushes it to the repo, an email will be sent to the email listed in REPO_EMAIL_ADDRESS with an markdown to html conversion in the body of the message to check over the content. 
