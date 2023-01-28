import fs from "fs";

function htmlRenderer(data) {
  let template = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team</title>

      <!-- Bootstrap -->
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      />

      <!-- Font Awesome -->
      <script
        src="https://kit.fontawesome.com/a9333a589d.js"
        crossorigin="anonymous"
      ></script>
    </head>
    <body>
      <header class="container-fluid text-center text-light bg-danger py-4">
        <h1>My Team</h1>
      </header>

      <main class="container-fluid pt-4 d-flex justify-content-center">
      `;

  data.forEach((obj) => {
    template += `<div class="card col-2 mx-2">
          <div class="card-header bg-primary text-light">
            <h4 class="card-title">${obj.getName()}</h4>
            <h4 class="card-text">
              ${
                obj.getRole() === "Manager"
                  ? `<i class="fa-solid fa-mug-hot pe-1"></i>`
                  : `${
                      obj.getRole() === "Engineer"
                        ? `<i class="fa-solid fa-glasses pe-1"></i>`
                        : `<i class="fa-solid fa-user-graduate pe-1"></i>`
                    }`
              } ${obj.getRole()}
            </h4>
          </div>
          <div class="card-body my-3">
            <ul class="list-group">
              <li class="list-group-item">ID: ${obj.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${obj.getEmail()}">${obj.getEmail()}</a></li>
              <li class="list-group-item">`;

    if (obj.getRole() === "Manager") {
      template += `Office Number: ${obj.officeNumber}</li>`;
    } else if (obj.getRole() === "Engineer") {
      template += `Github: <a href="https://github.com/${obj.github}" target="_blank">${obj.github}</a></li>`;
    } else if (obj.getRole() === "Intern") {
      template += `School: ${obj.school}</li>`;
    }

    template += `
            </ul>
          </div>
        </div>`;
  });

  template += `
      </main>
    </body>
  </html>`;

  fs.writeFile("./dist/index.html", template, (err) =>
    err ? console.log(err) : console.log("Success")
  );
}

export default htmlRenderer;
