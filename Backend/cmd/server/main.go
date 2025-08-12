// cmd/server/main.go

package main

import (
	"fmt"
	"log"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"

	"vsm-go/internal/api"
	"vsm-go/internal/api/handler"
	"vsm-go/internal/core"
	"vsm-go/internal/store"
)

func main() {
	// 1. Tải các biến môi trường từ file .env
	if err := godotenv.Load(".env"); err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}

	// 2. Kết nối tới database
	db, err := connectToDB()
	if err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
	}
	log.Println("Database connection successful!")

	// 3. Khởi tạo các lớp theo thứ tự phụ thuộc (từ trong ra ngoài)
	// Store -> Service -> Handler
	userStore := store.NewUserStore(db)
	userService := core.NewUserService(userStore)
	userHandler := handler.NewUserHandler(userService)

	// 4. Khởi tạo Gin router
	router := gin.Default()

	// 5. Thiết lập các route
	// Chúng ta truyền router và userHandler vào hàm SetupRouter
	api.SetupRouter(router, userHandler)

	// 6. Lấy cổng server từ biến môi trường và chạy server
	serverPort := os.Getenv("SERVER_PORT")
	if serverPort == "" {
		serverPort = "8080" // Cổng mặc định nếu không được chỉ định
	}

	log.Printf("Server starting on port %s", serverPort)
	if err := router.Run(":" + serverPort); err != nil {
		log.Fatalf("Failed to run server: %v", err)
	}
}

// connectToDB là một hàm phụ để code trong main() gọn gàng hơn
func connectToDB() (*gorm.DB, error) {
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=%s",
		os.Getenv("DB_HOST"),
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_NAME"),
		os.Getenv("DB_PORT"),
		os.Getenv("DB_SSL_MODE"),
	)

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		return nil, err
	}

	return db, nil
}
