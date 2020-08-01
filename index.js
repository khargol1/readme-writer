const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

var filePath = '';
// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project? (required)',
        validate: projectName => {
            if (projectName) {
                return true;
            } else {
                console.log('Please enter your project name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is your GitHub user name? (required)',
        validate: userName => {
            if (userName) {
                return true;
            } else {
                console.log('Please enter your user name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: email => {
            if (email) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please explain how to install your project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please explain how to use your project.'
    },
    {
        type: 'list',
        name: 'licence',
        message: 'Please select a licence to use with this project.',
        choices: ['MIT', 'Apache 2.0', 'GNU GPL 3.0', 'Mozilla Public License 2.0'],
        default: 'MIT'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please add instructions for contributing to the project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please add instructions for testing.'
    },
];

// function to write README file
function writeToFile(fileName, data) {
    
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    })
}

function promptUser() {
    return inquirer.prompt(questions);
}

// function to initialize program
function init() {
    promptUser()
        .then(answers => {
            //create file path
            filePath = './dist/' + answers.projectName.split(' ').join('') + '.md'; 
            return generateMarkdown(answers);
        })
        .then(markDown => {
            writeToFile(filePath, markDown);
        })
        .catch(err => console.log(err));
}

// function call to initialize program
init();
