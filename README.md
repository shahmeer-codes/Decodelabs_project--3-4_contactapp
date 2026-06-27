# 📇 Contact Management System

A full-stack **Contact Management System** built using **Node.js, Express.js, MongoDB, Mongoose, EJS, HTML, CSS, and JavaScript**. This application allows users to efficiently manage contacts with complete CRUD functionality, search, and pagination.

This project was developed as a combined solution for **Projects 3 & 4** of the **Decodes Lab Full Stack Development Internship**.

---

## 🚀 Features

* ➕ Create new contacts
* 📋 View all contacts
* 👀 View individual contact details
* ✏️ Edit existing contacts
* 🗑️ Delete contacts
* 🔍 Search contacts
* 📄 Pagination
* 💾 MongoDB database integration
* ⚡ Server-side rendering using EJS
* 📱 Responsive user interface

---

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* JavaScript
* EJS

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Other Tools

* Dotenv
* Nodemon

---

## 📂 Project Structure

```
CONTACT-APP/
│
├── config/
│   └── database.js
│
├── controller/
│   └── routes_controller.js
│
├── models/
│   └── app-dbstructure.js
│
├── public/
│   └── css/
│       └── style.css
│
├── Routes/
│   └── contact_route.js
│
├── views/
│   ├── home.ejs
│   ├── add.ejs
│   ├── edit.ejs
│   └── view.ejs
│
├── index.js
├── package.json
└── .env
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/shahmeer-codes/Decodelabs_project-3-4-_contactapp.git
```

### Navigate to the project

```bash
cd Decodelabs_project-3-4-_contactapp
```

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env` file in the project root.

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

### Start the development server

```bash
npm run dev
```

The application will run on:

```
http://localhost:3000
```

---

## 📸 Application Features

* Contact Dashboard
* Add Contact
* View Contact
* Edit Contact
* Delete Contact
* Search Contacts
* Pagination
* MongoDB Data Storage


## 👨‍💻 Author

**Shahmeer Arshad**

GitHub: https://github.com/shahmeer-codes

---

## 📜 License

This project was developed for educational and internship purposes.
