# 📝 Tamtucuaca
**Blog ẩn danh – nơi bạn viết ra suy nghĩ, cảm xúc và lưu lại chúng trên thiết bị của chính mình.**

Tamtucuaca là một mini-blog cá nhân nơi người dùng có thể:
- Viết nhật ký, tâm sự, suy nghĩ riêng tư
- Không cần tài khoản, không login
- Ẩn danh hoàn toàn
- Lịch sử bài viết được lưu trực tiếp trên trình duyệt thông qua `localStorage`
- Không gửi dữ liệu lên server

Ứng dụng hoạt động 100% ở phía client, đảm bảo quyền riêng tư tuyệt đối.

---

## 🌟 Tính năng

- 📝 Giao diện viết bài đơn giản, đẹp, dễ dùng  
- 💾 Bài viết được lưu tự động theo thiết bị (nhận dạng bằng deviceID)  
- 📜 Hiển thị danh sách bài viết theo thứ tự mới nhất → cũ nhất  
- 🎨 Giao diện màu pastel nhẹ, phù hợp viết tâm sự  
- 🗑️ Có thể xóa bài theo ý muốn (nếu bạn thêm tính năng này sau)

---

## 🗂 Cấu trúc thư mục

tamtucuaca/
│
├── index.html # Giao diện và logic mini-blog
├── README.md
├── LICENSE
│
├── css/
│ └── style.css # (Nếu bạn tách CSS riêng – hiện đang để inline)
│
├── js/
│ └── app.js # (Tùy chọn – nếu bạn muốn tách JS ra khỏi HTML)
│
└── .github/
├── ISSUE_TEMPLATE.md
└── PULL_REQUEST_TEMPLATE.md


Copy code

> Lưu ý: Hiện tại dự án đang dùng **CSS & JS bên trong index.html** luôn,  
> bạn có thể tách ra sau này nếu muốn project sạch hơn.

---

## 🚀 Cách sử dụng

### 1. Chạy tại máy cá nhân
Chỉ cần mở file:

index.html

Copy code

Là dùng được ngay.  
Không cần cài đặt – không cần internet – không cần server.

---

### 2. Triển khai bằng GitHub Pages

1. Vào **Settings → Pages**
2. Chọn:
   - Source: `main`
   - Folder: `/ (root)`
3. Nhấn **Save**

Trang web sẽ xuất hiện tại:

https://<username>.github.io/tamtucuaca/

Copy code

---

## 🔧 Công nghệ sử dụng

- HTML5  
- CSS3  
- JavaScript (inline)  
- LocalStorage để lưu bài viết theo thiết bị

---

## 🧪 Roadmap (kế hoạch phát triển)

- [ ] Thêm chức năng **xóa từng bài viết**
- [ ] Thêm **Dark Mode**
- [ ] Cho phép **xuất toàn bộ bài viết** thành file `.txt`
- [ ] Cho phép **nhập lại bài viết** từ file
- [ ] Khóa blog bằng **mật khẩu**
- [ ] Hiệu ứng chuyển động nhẹ khi đăng bài
- [ ] Đồng bộ nhiều thiết bị qua Cloud (tùy chọn sau này)

---

## 🤝 Đóng góp

Mọi đóng góp cho dự án đều được chào đón!

1. Fork repository  
2. Tạo branch mới  
3. Thực hiện thay đổi  
4. Gửi Pull Request  

---

## 📜 Giấy phép

Dự án phát hành theo **MIT License**.  
Bạn toàn quyền sử dụng – chỉnh sửa – chia sẻ – phát triển tiếp.

---

## 👑 Tác giả
Dự án phát triển bởi **Huy – ISC International Science Center**.  
Mục tiêu: tạo một góc nhỏ an toàn cho mỗi người để viết ra điều mình nghĩ.

Dự án phát triển bởi **Huy – ISC International Science Center**.  
Mục tiêu: tạo một góc nhỏ an toàn cho mỗi người để viết ra điều mình nghĩ.
