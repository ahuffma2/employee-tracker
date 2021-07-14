const index = require('../index');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

htmlGenerator = (data) => {
    return (`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Tracker</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">

</head>
<body>

    <!-- HEADER -->
    <nav class="navbar navbar-danger bg-danger mb-5 d-flex justify-content-center">
        <span class=" navbar-brand mb-0 h3 p-4 text-light"> <h1>My Team</h1></span>
      </nav>

      <!-- CARDS -->
    <div class = 'd-flex justify-content-center row'>`)+
  
    employees(data)
    
     +
    `</div>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>`
}

function employees(employees) {
  let employeeCards = [];
  for(let i = 0; i < employees.length; i++)  {
    
  console.log('hello yes I am being called multiple times');
    employeeCards.push( `
    <div class="card mx-5 mb-3 shadow " style="width: 18rem;">
    <div class="card-body bg-primary">
      <h5 class="card-name text-light">${employees[i].getName()}</h5>
      <p class="card-role text-light">${employees[i].getRole()}</p>
    </div>
    <div class = "p-3 bg-light">
      <ul class="list-group list-group-flush border ">
        <li class="list-group-item list-id">ID: ${employees[i].getID()}</li>
        <li class="list-group-item list-email">Email: ${employees[i].getEmail()}</li>
        ${roleHandler(employees[i])}
    </ul>
    </div>
    </div>`)
  }
  return employeeCards.join('');
}

function roleHandler(employee){
  switch (employee.getRole()){
    case 'Manager':
      return(`<li class="list-group-item office-number">Office Number: ${employee.getOffice()}</li>`);
    case 'Engineer':
      return(`<li class = "list-group-item github">Github: <a href ="https://github.com/${employee.getHub()}">${employee.getHub()}</a> </li>`)
    case 'Intern':
      return(`<li class="list-group-item school">School: ${employee.getSchool()}</li>`);
  }
}

module.exports = htmlGenerator;