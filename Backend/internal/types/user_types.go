// internal/types/user_types.go

package types

import (
	"time"

	"github.com/google/uuid"
)

// User định nghĩa cấu trúc cho một người dùng trong hệ thống
// Nó phản ánh các cột trong bảng 'users' của database.
type User struct {
	ID           uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4();primary_key" json:"id"`
	Email        string    `gorm:"type:varchar(255);uniqueIndex;not null" json:"email"`
	PasswordHash string    `gorm:"type:varchar(255);not null" json:"-"` // Dấu "-" để không bao giờ trả về password trong JSON
	FullName     string    `gorm:"type:varchar(255)" json:"fullName"`
	AvatarURL    string    `gorm:"type:text" json:"avatarUrl"`
	CreatedAt    time.Time `gorm:"default:CURRENT_TIMESTAMP" json:"createdAt"`
	UpdatedAt    time.Time `gorm:"default:CURRENT_TIMESTAMP" json:"updatedAt"`
}

// RegisterUserPayload định nghĩa cấu trúc dữ liệu mà client
// (React Native) gửi lên khi đăng ký tài khoản mới.
type RegisterUserPayload struct {
	Email    string `json:"email" validate:"required,email"`
	Password string `json:"password" validate:"required,min=6,max=100"`
	FullName string `json:"fullName" validate:"required"`
}