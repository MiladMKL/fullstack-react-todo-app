# react-todo-app

This ToDo application is a FullStack app built with NodeJS and React that allows users to easily create, update, and delete tasks. The user interface is designed to be simple and intuitive, enabling efficient management of ToDos.

The app uses ReactJS for the frontend and NodeJS with Express for the backend, ensuring smooth communication between the two components. MongoDB serves as the database for storing ToDos, ensuring reliable and efficient data management.

The app draws inspiration from the "FullStackOpen" online course offered by the University of Helsinki, which covers the basics of FullStack development using ReactJS, NodeJS, and MongoDB.

Overall, this ToDo application serves as a great example of FullStack development, showcasing the potential of ReactJS, NodeJS, and MongoDB in delivering a seamless user experience. Whether you're a beginner or an experienced developer, this app is a valuable tool for enhancing your skills in FullStack development.

<br>

**Preview:**

![App preview](./todo_backend/build/TodoApp.gif)

<br>

[**Demo**]: (https://fullstackopen-react-todo-app.herokuapp.com/)

---

## Instructions

### Prerequisites

Before you can run the ToDo application on your computer, there are a few prerequisites you need to fulfill. The first is to ensure that you have MongoDB installed. You can either install MongoDB locally on your computer or use a MongoDB provider such as MongoDB Atlas. If you choose to use MongoDB Atlas, you can create a new account by visiting their website here: [here](https://www.mongodb.com/basics/clusters/mongodb-cluster-setup) or [here](https://www.makeuseof.com/mongodb-cluster-cloud-free-setup/).

<br>

**To get started, clone the repository by running the following command in your terminal:**

```bash
$ git clone https://github.com/MiladMKL/fullstack-react-todo-app.git
```

Once you have cloned the repository, you will need to install the dependencies. Please ensure that you have nodejs and npm installed on your system before proceeding with the installation. To install the dependencies, run the following command:

```bash
$ npm install
```

<br>
After you have created a MongoDB Atlas Cluster (link provided in the prerequisites), create a new file named .env and store the MongoDB URI in it as shown below. Additionally, ensure that you set the port to 3001:
![MongoDB](./todo_backend/build/mongo.png)

<br>
Next, run the mongo.js file to create a new entry in MongoDB by running the following command:

```bash
node mongo.js <password>
```

**Finally, start the application by running the following command:

**

```bash
$ npm start
```

This will launch the ToDo application on your computer, and you can start creating and managing tasks.
