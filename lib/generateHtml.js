const fs = require('fs');
const path = require('path');

// Generate HTML
const renderCard = (employee) => {
  let cardInfo = [];

  if (employee.constructor.name === "Manager") {
    cardInfo.push(`<li class="list-group-item">Office number: ${employee.getOfficeNum()}</li>`)
  } else if (employee.constructor.name === "Engineer") {
    cardInfo.push(`<li class="list-group-item">GitHub:<a href=https://github.com/${employee.getGithub()}> ${employee.getGithub()}</a></li>`)
  } else if (employee.constructor.name === "Intern") {
    cardInfo.push(`<li class="list-group-item">School: ${employee.getSchool()}</li>`)
  }

  const html = `<div class="card" style="width: 18rem">
    <div id="card-header" class="card-body">
      <h3 class="card-title">${employee.getName()}</h3>
      <div class="card-employee-role">
        ${employee.icon}
        <h4>${employee.getRole()}</h4>
      </div>
    </div>
    <ul id="info-wrapper" class="list-group list-group-flush">
      <li class="list-group-item">ID: ${employee.getId()}</li>
      <li class="list-group-item">
        Email: <a href="mailto:${employee.getEmail()}" target="_blank">${employee.getEmail()}</a>
      </li>
      ${cardInfo.join('')}
    </ul>
  </div>`

  return html
}

// HTML template
const generateTemplate = (team, cards) => {
  const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${team.name}</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
      integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
      crossorigin="anonymous"
    />
    <script
      src="https://kit.fontawesome.com/4bb3f6f1cf.js"
      crossorigin="anonymous"
    ></script>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <main class="container-fluid flex-d">
      <div class="row">
        <header class="d-flex justify-content-center align-items-center col-12">
          <h1>${team.name}</h1>
        </header>
      </div>
      <div id="card-wrapper" class="row flex-d justify-content-center align-items-center">
        ${cards.join('\n')}
      </div>
    </main>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
`
  return htmlTemplate
}

const updateDist = async (html) => {
  fs.appendFile('./dist/index.html', html, (err) => {
    err
      ? console.log(err)
      : console.log("Your html file was generated successfully!")
  })
}

// Initiate script
const renderHTML = async (team) => {
  const cards = team.members.map(employee => {
    return renderCard(employee)
  });
  const html = generateTemplate(team, cards);

  await updateDist(html);
}

module.exports = renderHTML