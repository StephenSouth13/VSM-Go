![Go](https://img.shields.io/badge/Go-1.18%2B-00ADD8?style=for-the-badge&logo=go)
![React Native](https://img.shields.io/badge/React_Native-0.70%2B-61DAFB?style=for-the-badge&logo=react)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14-336791?style=for-the-badge&logo=postgresql)
![Docker](https://img.shields.io/badge/Docker-20.10%2B-2496ED?style=for-the-badge&logo=docker)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)

A modern, open-source platform for sports communities, inspired by Vietrace365. **VSM Go** is designed to be the digital hub for athletes to track their **V**ictory, build **S**trength, and count every **M**ile.

---

## ✨ Core Features

*   **Event Management:** Create and join offline races and online virtual challenges.
*   **Virtual Races:** Participate from anywhere by syncing activities from Strava/Garmin or uploading GPX files.
*   **Community Hub:** Follow friends, view activity feeds, and compete on leaderboards.
*   **Content Platform:** An integrated blog for training tips, news, and inspirational stories.

## 🛠️ Tech Stack

| Area      | Technology                                     |
| --------- | ---------------------------------------------- |
| **Backend**  | Golang, Gin Gonic, GORM, JWT                   |
| **Frontend** | React Native                                   |
| **Database** | PostgreSQL                                     |
| **DevOps**   | Docker, Docker Compose, GitHub Actions (CI/CD) |

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

*   [Go](https://go.dev/dl/) (version 1.18+)
*   [Node.js](https://nodejs.org/en/) (version 16+)
*   [Docker](https://www.docker.com/products/docker-desktop/) & Docker Compose

### 1. Backend Setup (Go)

```bash
# Clone the repository
git clone https://github.com/StephenSouth13/VSM-Go.git
cd VSM-Go

# Set up environment variables
# (Create a .env file from .env.example and fill in your details)
cp .env.example .env

# Start the database using Docker
docker-compose up -d

# Install dependencies and run the server
go mod tidy
go run main.go
```
> The backend server will be running on `http://localhost:8080`.

### 2. Frontend Setup (React Native)

```bash
# Navigate to the frontend directory (assuming it exists)
# cd frontend

# Install dependencies
# npm install

# Run the app
# npm run android
# or
# npm run ios
```

## 👨‍💻 About The Author

This project is passionately developed and maintained by **Quach Thanh Long (Stephen South)**.

I'm a Software Engineer based in Ho Chi Minh City, Vietnam, with a strong focus on building scalable and efficient backend systems using Go and Node.js. My philosophy is simple:

> "The way to get started is to quit talking and begin doing." - Walt Disney

I'm always open to connecting with fellow developers and tech enthusiasts.

<p align="left">
  <a href="https://github.com/StephenSouth13" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
  </a>
  <a href="https://www.linkedin.com/in/long-quach-thanh/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
  <a href="https://quachthanhlong.com" target="_blank">
    <img src="https://img.shields.io/badge/Website-474747?style=for-the-badge&logo=About.me&logoColor=white" />
  </a>
</p>

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/StephenSouth13/VSM-Go/issues).

## 📜 License

This project is licensed under the **MIT License**. You can find the full license text in the [LICENSE](LICENSE) file.

This is a permissive open-source license, which in simple terms means you are free to:

*   ✅ **Use**: Use the software for any purpose, including commercial projects.
*   ✅ **Modify**: Modify the source code to suit your needs.
*   ✅ **Distribute**: Share the original or modified versions of the software.

The only main condition is that you must include the original copyright notice (found in the `LICENSE` file) in your distribution. The software is provided "as-is", without any warranty.