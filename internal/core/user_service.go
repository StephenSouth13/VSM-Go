// internal/core/user_service.go

package core

import (
	"errors"

	"vsm-go/internal/store"
	"vsm-go/internal/types"
	"vsm-go/internal/utils"
)

// UserService chứa các logic nghiệp vụ liên quan đến người dùng.
type UserService struct {
	userStore *store.UserStore
}

// NewUserService tạo ra một UserService mới.
// Nó cần một UserStore để có thể tương tác với database.
func NewUserService(userStore *store.UserStore) *UserService {
	return &UserService{userStore: userStore}
}

// RegisterUser là hàm xử lý logic đăng ký người dùng mới.
func (s *UserService) RegisterUser(payload types.RegisterUserPayload) error {
	// TODO: Kiểm tra xem email đã tồn tại chưa. Chúng ta sẽ làm điều này ở bước sau.

	// 1. Băm mật khẩu người dùng gửi lên.
	// Chúng ta gọi hàm HashPassword từ gói utils mà ta vừa tạo.
	hashedPassword, err := utils.HashPassword(payload.Password)
	if err != nil {
		// Nếu có lỗi khi băm mật khẩu, trả về lỗi ngay lập tức.
		return errors.New("could not hash password")
	}

	// 2. Tạo một đối tượng User mới để lưu vào database.
	newUser := &types.User{
		Email:        payload.Email,
		PasswordHash: hashedPassword, // Lưu mật khẩu đã được băm
		FullName:     payload.FullName,
	}

	// 3. Gọi đến UserStore để lưu người dùng vào database.
	// Đây là lúc "quản đốc" (service) đưa dữ liệu đã xử lý cho "nhà kho" (store).
	err = s.userStore.CreateUser(newUser)
	if err != nil {
		// Nếu có lỗi khi lưu vào DB (ví dụ: email bị trùng lặp), trả về lỗi.
		return errors.New("could not create user")
	}

	// Nếu mọi thứ thành công, không trả về lỗi nào (nil).
	return nil
}