// function to generate markdown for README
function generateMarkdown(data) {
  licence = '';

  switch(data.licence){
    case 'MIT':
      licence = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache 2.0':
      licence = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GNU GPL 3.0':
      licence = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'Mozzilla Public License 2.0':
      licence = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
  }


  return `# ${data.projectName}
  ${data.description}

  ${licence}

  ## Table of Contents
  * [Installation](##Installation)
  * [Usage](##Usage)
  * [Licence](##Licence)
  * [Contributing](##Contriuting)
  * [Tests](##Tests)
  * [Questions](##Questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Licence
  This program is covered under ${data.licence} licence agreement.


  ## Contributing
  ${data.contribute}

  ## Tests
  ${data.tests}

  ## Questions
  To contact me please use ${data.email}. 

  [GitHub Repository](http://github.com/${data.userName})

`;
}

module.exports = generateMarkdown;
