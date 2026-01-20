# Code-Vault
 
### A Repository Management Platform with Custom CLI Version Control

---

## 📌 Overview

CodeVault is a full-stack repository management platform that combines a web-based interface with a custom CLI-driven version control system.  
It allows users to manage repositories, profiles, and issues via a web UI while performing Git-like version control operations (init, add, commit, push, pull) through a command-line interface.

The project emphasizes system design, backend architecture, and version control concepts over UI polish.

---

## 🧠 Core Design Principle



- The CLI handles repository initialization and commit lifecycle.
- The web application visualizes repository metadata and user activity.
- Commit data is synced to AWS S3.

This mirrors real-world systems where Git and hosting platforms operate as separate layers.

---

## ✨ Features

### Web Platform
- User authentication using JWT
- User profiles with activity overview
- Repository creation and listing
- Repository visibility control (public/private)
- Dashboard with suggested repositories

### CLI Version Control
- Initialize a local repository
- Stage files
- Commit changes
- Push commits to remote storage (AWS S3)
- Pull commits from remote storage
- Revert to previous commits

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- CSS

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

### Version Control & Storage
- Custom CLI built with Node.js
- Yargs for CLI commands
- AWS S3 for remote commit storage

---


---

## 🚀 Running the Project Locally


```bash
cd backend
npm install
node index.js start


cd frontend
npm install
npm run dev

