# Node+Express, Mongo, Winston, Morgan, Docker, ESLint, Prettier, Husky Template
An opinionated node, express and mongo backend template with winston logger, morgan request logger, and docker support out of the box. These technologies are the most popular and reliable in the industry, and with this template you can spin up a properly orgnanized express server with in no time.

> **⚠️**  Ensure that the `.env` file is in place before you proceed. The `sample.env` file can be referred to for making the `.env` file.

## Getting started
To get started with this template, follow these steps:

1. Clone the repository using `git clone https://github.com/rohilsaraf97/sokka-template.git`
2. Change into the project directory using `cd sokka-template`
3. Install dependencies using `npm install`
4. Start the development server using `npm run dev`

## Building and running the app with Docker Compose
This template comes with a Docker Compose configuration file that can be used to build and run the app inside a Docker container. To do this, follow these steps:

1. Build the Docker image using docker compose build.
2. Start the container using `docker compose up` (or) `docker compose up -d` to start the container in the background.
3. Since the docker-compose file uses volumes, local changes (during development) in the project directory will be reflected in the docker container.

## Technology Stack
This template uses the following technologies:

- Node - JavaScript runtime environment to build server-side applications
- Express.js - A small framework on top of Node.js web server functionality. It simplifies its APIs and add helpful new features.
- Mongoose - A programming library that creates a connection between MongoDB and the Node.js JavaScript runtime environment.
- Winston - A simple and universal logging library supporting multiple modes of transport
- Morgan - A HTTP request logger middleware for Node.js
- ESLint - A pluggable and configurable linter for JavaScript and JSX.
- Prettier - An opinionated code formatter.
- Husky - A tool for running Git hooks.
- Docker Compose - A tool for defining and running multi-container Docker applications.

## Contributing
If you find any issues with this template or have suggestions for improvements, please feel free to open an issue or submit a pull request.

