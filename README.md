# react-todo-app

## About
This FullStack app, built with NodeJS and React, provides a user-friendly platform for creating, updating, and deleting tasks effortlessly. The interface is intentionally designed to be simple and intuitive, streamlining task management and making it hassle-free.

The frontend of the app utilizes ReactJS, while NodeJS and Express form the backbone of the backend. This combination ensures seamless communication between the components, delivering an exceptional user experience. MongoDB serves as the database for storing ToDos, guaranteeing dependable and efficient data management.

The app draws inspiration from the "FullStackOpen" online course offered by the University of Helsinki, which teaches the essentials of FullStack development using ReactJS, NodeJS, and MongoDB. Through constructing this app, I gained valuable hands-on experience and honed my FullStack development abilities.

In summary, this ToDo application exemplifies FullStack development, demonstrating the capabilities of ReactJS, NodeJS, and MongoDB in creating a fluid user experience. Regardless of your skill level as a developer, this app can serve as a helpful resource for improving your proficiency in FullStack development. Feel free to delve into the code and customize it to suit your individual requirements.

<br>

**Preview:**

![App preview](./todo_backend/build/TodoApp.gif)

<br>

[**Demo**] (https://fullstackopen-react-todo-app.herokuapp.com/)

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

**Finally, start the application by running the following command:**

```bash
$ npm start
```

This will launch the ToDo application on your computer, and you can start creating and managing tasks.
