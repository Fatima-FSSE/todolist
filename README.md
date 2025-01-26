# To-Do List App

The To-Do List App is a Node.js, Express, MongoDB, and EJS templating engine-based application designed to help users manage their tasks efficiently.

## Features

- Create and delete tasks.
- Mark tasks as complete.
- Mobile-friendly and responsive design.
- Intuitive user interface for a seamless task management experience.

## Project Structure

The project structure is as follows:

- index.js: The main entry point of the application. It configures the server, sets up the routes, and connects to the database.


- public: This directory contains static files such as CSS stylesheets.

     - styles.css: This file contains the CSS stylesheets for the application.

- views: This directory contains the EJS templates used to render the HTML pages.

    - header.ejs: The header template that is included in list EJS file.
    - footer.ejs: The footer template that is included in list EJS file.
    - list.ejs: The template for the to-do list page containing header, list structure and footer.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To run this application, you need to have Node.js and MongoDB installed on your machine.

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)

### Note: create a local database with mongodb and add the database URI with db name to .env file

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/yourusername/your-todo-app.git
   ```

2. Navigate to the project directory:

   ```shell
   cd your-todo-app
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Start the application:

   ```shell
   npm start
   ```

5. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to access the To-Do List App.

## Usage

- Start adding tasks to your to-do list.
- Organize your tasks into categories.
- Mark tasks as complete when you've finished them.
- to create custom list just add list name at the end of URL

## Built With

- Node.js - JavaScript runtime
- Express - Web application framework
- MongoDB - NoSQL database
- EJS - Embedded JavaScript templating engine

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Create a pull request.

## Acknowledgments

- This project was created using Node.js, Express, MongoDB, and the EJS templating engine.

Special thanks to the authors and contributors of these technologies for their valuable work.

Finally, I would like to express my gratitude to the Web development course instructor Angela Yu for her guidance and support throughout the development of this project.

## Contact

If you have any questions or want to get in touch, please contact us at your fatimariaz_gatech@outlook.com

Enjoy task management made easy with the ToDo List App!
