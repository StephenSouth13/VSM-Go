// internal/utils/password.go

package utils

import "golang.org/x/crypto/bcrypt"

// HashPassword nhận vào một mật khẩu dạng chuỗi và trả về
// chuỗi đã được băm bằng bcrypt.
func HashPassword(password string) (string, error) {
	// bcrypt.GenerateFromPassword sẽ thực hiện toàn bộ công việc phức tạp
	// bao gồm cả việc tạo ra một "salt" ngẫu nhiên để tăng cường bảo mật.
	// bcrypt.DefaultCost là một tham số để cân bằng giữa tốc độ và độ an toàn.
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	return string(bytes), err
}

// CheckPasswordHash so sánh một mật khẩu gốc với một chuỗi đã được băm.
// Nó sẽ trả về true nếu chúng khớp nhau.
func CheckPasswordHash(password, hash string) bool {
	// bcrypt sẽ tự động trích xuất "salt" từ chuỗi hash và sử dụng nó
	// để thực hiện việc so sánh.
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil // Nếu không có lỗi, nghĩa là mật khẩu khớp.
}