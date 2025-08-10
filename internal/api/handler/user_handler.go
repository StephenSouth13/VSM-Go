// internal/api/handler/user_handler.go

package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"vsm-go/internal/core"
	"vsm-go/internal/types"
)

// UserHandler chịu trách nhiệm xử lý các request HTTP liên quan đến người dùng.
type UserHandler struct {
	userService *core.UserService
}

// NewUserHandler tạo ra một UserHandler mới.
// Nó cần một UserService để có thể gọi các logic nghiệp vụ.
func NewUserHandler(userService *core.UserService) *UserHandler {
	return &UserHandler{userService: userService}
}

// HandleRegister là hàm xử lý cho route "POST /register".
func (h *UserHandler) HandleRegister(c *gin.Context) {
	// 1. Khởi tạo một biến để chứa dữ liệu từ request.
	var payload types.RegisterUserPayload

	// 2. Phân tích (Parse) dữ liệu JSON từ body của request vào biến payload.
	// c.ShouldBindJSON sẽ tự động đọc body và điền vào các trường của payload.
	if err := c.ShouldBindJSON(&payload); err != nil {
		// Nếu dữ liệu client gửi lên bị sai định dạng (không phải JSON, thiếu trường...),
		// trả về lỗi 400 Bad Request.
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
		return
	}

	// TODO: Validate the payload (email format, password length)
	// Chúng ta sẽ thêm bước kiểm tra dữ liệu chi tiết ở đây sau.

	// 3. Gọi đến tầng service để thực hiện logic đăng ký.
	// "Người gác cổng" (handler) gọi "quản đốc" (service).
	err := h.userService.RegisterUser(payload)
	if err != nil {
		// Nếu service trả về lỗi (ví dụ: email đã tồn tại, lỗi DB),
		// trả về lỗi 500 Internal Server Error.
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	// 4. Nếu không có lỗi, trả về thông báo thành công với mã 201 Created.
	c.JSON(http.StatusCreated, gin.H{"message": "User created successfully"})
}