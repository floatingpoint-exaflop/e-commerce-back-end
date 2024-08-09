# Module 13 Challenge: postgreSQL, Sequelize, Express, and API Routes - E-Commerce Backend

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Credits](#credits)
  - [Questions](#questions)

  ## Description
  This Homework assignment was completed for Unit Thirteen of the U of M Bootcamp, to practice completing a backend for a simple e-commerce platform using Node.js packages and postgreSQL with, data seeded, then viewed, added to, and modified using API routes. The user can view, add, modify, or delete product categories, product tags to further categorize them, and the products themselves.  I learned a lot about the power of sequelize to flexibly - and very quickly! - generate databases, and expanded upon work with data relationships. While it would take a fair amount of work to expand this model, the code itself is a great reference for doing so, and at any rate, it would be very easy to add more columns and rows to expand the db and hold much more information!

  ## Installation
  To install this project after copying down the repo, you will first need to run npm init (-y for default settings) on the project root, which should grant you access to the necessary libraries listed in the package-lock.json file. You'll need a tool to call api routes.

  ## Usage
  1. To use this project, ensure you have [Postgres](https://www.postgresql.org/download/) and the node packages installed as specified in the Installation section above.
  2. Open a terminal on the db folder and run psql postgres.
  3. In Postgres, run \i schema.db to build the db.
  4. Open a separate terminal on the project root and run node index.js to seed the db.
  5. On that same node terminal, run nodemon server.js - the server will boot and the routes can be hit via Postman or Insomnia!
  6. Import the included ecommerce_db_postman_collection.json file on the project route into Postman to use the calls and setup data I had! 



  [A video tutorial for using content-management-system](https://drive.google.com/file/d/1PbVeZe7gJ-Ncxaioac_gMg6Bjc1BaeO8/view?usp=sharing)

  ## Contributing
  If you want to contribute to this project - particularly if you want to work with me on building this out and connecting it to a front end to make it useful, see my contact info in the Questions section below. Don’t hesitate to reach out! I am a beginner at this stuff but always hungry to learn from others in the community.

  ## Tests
  This project can and should be tested using Postman for the simplest way to both work with and visualize the data and its relationships. Pgadmin4 would also work well to see the tabluation, but it cannot call routes - only can use sql.
  
  ## Credits
  - Shoutout to Gary Almes for helping me with the many to many stuff. Again - Always simpler than it seems!
  - Starter Code from the U of M Bootcamp.

  ## Questions
  - [Check me out on Github!](https://www.github.com/floatingpoint-exaflop)
  - [Email Me](mailto:timscallon1@gmail.com?subject=Hello!)

  ## License
  [![Image showing badge for MIT License.](https://img.shields.io/badge/License-MIT_License-blue)](https://mit-license.org/)
  
  This project is using the MIT License. Please click the badge icon for more information, or refer directly to the LICENSE in the repo.
