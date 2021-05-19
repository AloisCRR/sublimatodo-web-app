# Sublimatodo Administration Web App

Project made for university subject final project.

## Run Locally

1. Install both:

    - [Node.js](https://nodejs.org/es/download/)
    - [MongoDB](https://www.mongodb.com/try/download/community)

    You will need to have MongoDB running on port 27017.

2. Clone the project:

    ```bash
    git clone https://github.com/AloisCRR/sublimatodo-web-app.git
    ```

3. Go to the project directory:

    ```bash
    cd sublimatodo-web-app
    ```

4. Install dependencies:

    ```bash
    npm install
    ```

5. Start the dev server:

    ```bash
    npm run dev
    ```

    Project will run in [http://localhost:3000](http://localhost:3000).

6. To compile TypeScript to JavaScript and run the project:

    ```bash
    npm run build && npm start
    ```

## Features

-   Order management
    -   C.R.U.D operations
    -   Installment payments
    -   Order review
-   Client management
    -   C.R.U.D operations
-   Product management
    -   C.R.U.D operations
    -   Stock control
-   Admin control
    -   Basic employee management
        -   C.R.U.D operations
    -   Job administration
        -   C.R.U.D operations
    -   Supplier management
        -   C.R.U.D operations

## Screenshots

Main page

![Main page](https://i.imgur.com/QxPd9T7.png)

Client management

![Client management](https://i.imgur.com/GT3U16j.png)

Order management

![Order management](https://i.imgur.com/Q1LIn9d.png)

Admin login

![Admin login](https://i.imgur.com/qGG3wKS.png)

Admin main page

![Admin main page](https://i.imgur.com/u3AWjF6.png)

Supplier management

![Supplier management](https://i.imgur.com/VKuSm9k.png)

## Tech Stack

| Name                                                      | Description                        |
| --------------------------------------------------------- | ---------------------------------- |
| [Node.js](https://nodejs.org/es/download/)                | Template rendering, business logic |
| [MongoDB](https://www.mongodb.com/try/download/community) | Database                           |
| [Express](https://expressjs.com/es/api.html)              | HTTP Server                        |
| [Handlebars](https://devdocs.io/handlebars/)              | Template engine                    |
| [Mongoose](https://mongoosejs.com/docs/api.html)          | ODM (Object Data Modeling)         |

## Roadmap

-   [x] App functionality
-   [ ] Improve design
-   [ ] Stock control
-   [ ] Some bugs need to be fixed
-   [ ] Change mongoose populate to MongoDB Aggregation
-   [ ] Testing
-   [ ] Hosting, domain, etc.
-   [ ] CI/CD
