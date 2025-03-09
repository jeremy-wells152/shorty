# URL Shortener

## 📌 Project Overview

This is a **simple URL shortener** built using **Node.js + Express** that allows users to generate shortened URLs and redirect to their original destinations. URLs are stored **in memory**, meaning they are lost when the application restarts. This project is structured to demonstrate good code organization and scalability.

## 🚀 Features

- **REST API** for URL shortening and redirection.
- **In-memory storage** (non-persistent; lost on restart).
- **Dockerized** for easy deployment.
- **CI/CD integration** to automate Docker builds and deployments.

## 📦 Project Structure

```
shorty/
├── src/
│   ├── controllers/      # API handlers
│   ├── database/         # In-memory storage
│   ├── routes/           # API routes
│   ├── services/         # Business logic
│   └── app.js            # Express setup
├── server.js             # Entry point
├── Dockerfile            # Docker setup
├── .github/              # CI/CD workflows
├── package.json          # Node.js dependencies
├── .gitignore            # Ignored files
└── README.md             # Project documentation
```

## ⚙️ How It Works

1. **Shortening a URL**: Users send a POST request with a URL, and the API returns a shortened URL.
2. **Redirecting to the original URL**: Users access the shortened URL, which redirects them to the original link.
3. **In-memory storage limitation**: URLs exist only while the app is running; restarting clears all stored URLs, making it unsuitable for production use.

## 📡 Running the Project

### **1️⃣ Install Dependencies**

Ensure Node.js is installed, then run:

```sh
npm install
```

### **2️⃣ Start the Server**

```sh
node server.js
```

The application runs on **port 8000**.

### **3️⃣ API Usage**

#### **Shorten a URL**

**Endpoint:**

```http
POST /shorten
```

**Expected JSON Body:**

```json
{
  "url": "https://example.com"
}
```

**Response:**

```json
{
  "id": "aB3x9Z"
}
```

#### **Redirect to Original URL**

**Endpoint:**

```http
GET /:id
```

**Example:**

```http
GET /aB3x9Z
```

This will redirect the user to the original stored URL (e.g., `https://example.com`).

## 📦 Deployment

The project can be **Dockerized** and deployed using **GitHub Actions** for CI/CD. The provided workflow automates building and deploying the application to a remote server.

## 🔐 Future Enhancements

- [ ] **MongoDB for Persistent URL Storage** - Instead of using ephemeral in-memory storage, this enhancement would allow URL data to persist across restarts and enable better scalability.
- [ ] **User Authentication**
- [ ] **Rate Limiting & Analytics**
- [ ] **Frontend UI for URL Management**

## 📜 License

MIT License © 2024

## 💡 Credits

Created by Jeremy Wells - Built for learning and demonstration purposes.

