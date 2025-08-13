// internal/store/user_store.go

package store

import (
	"gorm.io/gorm"
	"vsm-go/Backend/internal/types"
)

// UserStore chịu trách nhiệm cho tất cả các tương tác với bảng 'users' trong database.
type UserStore struct {
	db *gorm.DB
}

// NewUserStore tạo ra một đối tượng UserStore mới.
// Chúng ta truyền vào kết nối database (*gorm.DB) để UserStore có thể sử dụng.
func NewUserStore(db *gorm.DB) *UserStore {
	return &UserStore{db: db}
}

// CreateUser nhận vào một con trỏ tới một đối tượng User và lưu nó vào database.
func (s *UserStore) CreateUser(user *types.User) error {
	// s.db là kết nối database mà chúng ta đã lưu khi tạo UserStore.
	// .Create(user) là một hàm của GORM, nó sẽ tự động sinh ra câu lệnh
	// "INSERT INTO users (id, email, password_hash, ...) VALUES (...);"
	// và thực thi nó.
	result := s.db.Create(user)
	return result.Error
}