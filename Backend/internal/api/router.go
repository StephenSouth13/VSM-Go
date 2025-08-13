// internal/api/router.go

package api

import (
	"github.com/gin-gonic/gin"
	"vsm-go/Backend/internal/api/handler"
)

// SetupRouter thiết lập tất cả các route cho ứng dụng.
// Nó nhận vào một con trỏ tới Gin engine và một UserHandler.
func SetupRouter(router *gin.Engine, userHandler *handler.UserHandler) {
	// Nhóm các route lại với tiền tố "/api/v1" cho gọn gàng.
	apiV1 := router.Group("/api/v1")
	{
		// Nhóm các route liên quan đến user.
		userRoutes := apiV1.Group("/users")
		{
			// Định nghĩa route:
			// Khi có một request POST đến "/api/v1/users/register"
			// thì sẽ gọi hàm userHandler.HandleRegister để xử lý.
			userRoutes.POST("/register", userHandler.HandleRegister)

			// TODO: Thêm các route khác như /login ở đây sau.
		}
	}
}