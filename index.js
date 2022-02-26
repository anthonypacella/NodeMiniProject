const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
        },
        {
            type: "input",
            name: "location",
            message: "What city do you live in?",
        },
        {
            type: "input",
            name: "bio",
            message: "Tell us something about yourself.",
        },
        {
            type: "input",
            name: "linkedin",
            message: "What is your LinkedIn URL?",
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?",
        },
    ])

    .then((data) => {
        //creating HTML
        const HTML = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
            <title>Portfolio Profile</title>
        </head>
        <body class = "card">
            <h1 class = "card-title">${data.name}</h1>
            <h2 class = "card-subtitle">${data.location}</h2>
            <p class = "card-text">${data.bio}</p>
            <a type="button" class="btn btn-secondary" href="${data.linkedin}">LinkedIn Profile</a>
            <a type="button" class="btn btn-secondary" href="www.github.com/${data.github}">GitHub Profile</a>
        </body>
        </html>`

        //WriteHTML file
        const filename = `${data.name.toLowerCase().split(' ').join('')}.html`;



        fs.writeFile(filename,HTML, (err) =>
        err ? console.log(err) : console.log('Success!'));


    })

