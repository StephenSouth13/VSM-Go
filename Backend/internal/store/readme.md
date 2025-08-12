Giải thích từng dòng code (Chúng ta cùng nhau đọc code)
package store
Tôi là ai? "Tôi là file user_store.go, và tôi thuộc về 'tập hồ sơ' store."
import ( ... )
Tôi cần gì? "Để làm việc, tôi cần hai thứ:"
"gorm.io/gorm": "Tôi cần thư viện GORM để biết cách nói chuyện với database."
"vsm-go/internal/types": "Tôi cần 'bản thiết kế' của User từ gói types mà chúng ta vừa tạo để biết một người dùng trông như thế nào."
Lưu ý: vsm-go là tên module bạn đã đặt trong file go.mod.
type UserStore struct { db *gorm.DB }
Cấu trúc của tôi là gì? "Tôi định nghĩa một 'kiểu' mới tên là UserStore. Bên trong nó, có một 'ngăn kéo' tên là db. Ngăn kéo này chứa 'chìa khóa' để vào database (chính là đối tượng kết nối *gorm.DB)."
func NewUserStore(db *gorm.DB) *UserStore { ... }
Làm sao để tạo ra tôi? "Đây là 'nhà máy sản xuất' UserStore. Khi bạn muốn có một UserStore, bạn gọi hàm NewUserStore này."
"Bạn phải đưa cho tôi 'chìa khóa' database (db *gorm.DB)."
"Tôi sẽ tạo một UserStore mới, đặt 'chìa khóa' đó vào ngăn kéo db, và trả lại cho bạn."
func (s *UserStore) CreateUser(user *types.User) error { ... }
Tôi có thể làm gì? "Đây là một 'kỹ năng' của UserStore, tên là CreateUser."
(s *UserStore): "Kỹ năng này chỉ có thể được thực hiện bởi một UserStore." Chữ s ở đây là một quy ước, viết tắt cho store.
CreateUser(user *types.User): "Để thực hiện kỹ năng này, bạn phải đưa cho tôi thông tin của một người dùng (user), theo đúng 'bản thiết kế' types.User."
error: "Sau khi làm xong, tôi sẽ cho bạn biết là có lỗi (error) xảy ra hay không. Nếu không có lỗi, giá trị error sẽ là nil."
result := s.db.Create(user):
"Tôi (chữ s) sẽ mở ngăn kéo db của mình ra để lấy 'chìa khóa' database."
"Sau đó, tôi dùng 'kỹ năng' Create(user) của GORM."
"GORM sẽ tự động dịch đối tượng user thành một câu lệnh SQL INSERT và gửi nó tới PostgreSQL."
"Kết quả của hành động này được lưu vào biến result."
return result.Error: "Cuối cùng, tôi sẽ kiểm tra xem trong result có báo lỗi gì không và trả về cho bạn."