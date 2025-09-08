# Website Lời Mời Tốt Nghiệp - Hà Đức Chung

Website thiệp mời tốt nghiệp hiện đại và đẹp mắt dành cho lễ tốt nghiệp tại Trường Đại học Bách Khoa Hà Nội.

## 🎓 Thông Tin Sự Kiện

- **Tên**: Hà Đức Chung
- **Ngày**: 27 Tháng 9, 2025
- **Địa điểm**: Trường Đại học Bách Khoa Hà Nội
- **Địa chỉ**: Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội

## ✨ Tính Năng Website

### 🎨 Thiết Kế
- Thiết kế hiện đại, responsive trên mọi thiết bị
- Color scheme chuyên nghiệp với màu xanh navy và vàng đồng
- Typography đẹp mắt với font Playfair Display và Inter
- Hiệu ứng parallax và animations mượt mà

### 📱 Các Phần Chính
1. **Hero Section**: Tiêu đề chính với tên và thông tin cơ bản
2. **Photo Section**: Khu vực hiển thị ảnh tốt nghiệp (có thể upload)
3. **Introduction Section**: Phần giới thiệu cá nhân (tự viết)
4. **Event Details**: Thông tin chi tiết về lễ tốt nghiệp
5. **Map Section**: Bản đồ Google Maps tích hợp
6. **Contact Section**: Thông tin liên hệ

### 🎵 Tính Năng Đặc Biệt
- **Background Music**: Nhạc nền có thể bật/tắt
- **Smooth Animations**: Hiệu ứng cuộn mượt và fade-in
- **Photo Upload**: Click vào placeholder để upload ảnh
- **Responsive Design**: Hoạt động tốt trên mobile và desktop
- **Google Maps**: Tích hợp bản đồ địa điểm

## 🚀 Cách Sử Dụng

### 1. Mở Website
Mở file `index.html` trong trình duyệt web:
```bash
open index.html
```

### 2. Tùy Chỉnh Nội Dung

#### Thêm Ảnh Tốt Nghiệp
- Click vào khu vực placeholder ảnh
- Chọn file ảnh từ máy tính
- Ảnh sẽ tự động hiển thị

#### Viết Lời Giới Thiệu
Mở file `index.html` và tìm đoạn:
```html
<p class="intro-placeholder">
    [Đây là nơi bạn sẽ viết lời giới thiệu về bản thân...]
</p>
```
Thay thế nội dung trong `[]` bằng lời giới thiệu của bạn.

#### Cập Nhật Thông Tin Liên Hệ
Tìm và cập nhật:
```html
<span>Điện thoại: [Số điện thoại của bạn]</span>
<span>Email: [Email của bạn]</span>
```

### 3. Thêm Nhạc Nền (Tùy Chọn)
- Đặt file nhạc (MP3) vào thư mục `assets/music/`
- Đổi tên thành `graduation-music.mp3`
- Hoặc cập nhật đường dẫn trong file `index.html`

## 📁 Cấu Trúc Thư Mục

```
graduation-invitation/
├── index.html              # File HTML chính
├── styles.css              # File CSS styling
├── script.js               # File JavaScript
├── README.md               # File hướng dẫn này
├── assets/
│   ├── music/              # Thư mục chứa nhạc nền
│   │   └── graduation-music.mp3
│   └── photos/             # Thư mục chứa ảnh
│       └── graduation-photo.jpg
```

## 🛠️ Customization Guide

### Thay Đổi Màu Sắc
Mở file `styles.css` và chỉnh sửa các biến CSS:
```css
:root {
    --primary-color: #1a365d;    /* Màu chính */
    --accent-color: #d4af37;     /* Màu nhấn */
    --text-color: #2d3748;       /* Màu chữ */
}
```

### Thay Đổi Font
Cập nhật Google Fonts link trong `index.html` và biến font trong CSS:
```css
--font-primary: 'Playfair Display', serif;
--font-secondary: 'Inter', sans-serif;
```

### Thêm/Xóa Sections
Thêm hoặc xóa các section trong file `index.html` theo nhu cầu.

## 📱 Responsive Design

Website được thiết kế responsive với các breakpoint:
- **Desktop**: > 768px
- **Tablet**: 768px - 481px  
- **Mobile**: ≤ 480px

## 🎯 Browser Support

Website hỗ trợ các trình duyệt hiện đại:
- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## 🔧 Technical Features

- **CSS Grid & Flexbox**: Layout hiện đại
- **CSS Variables**: Dễ dàng customization
- **Intersection Observer**: Smooth scroll animations
- **File Reader API**: Upload ảnh client-side
- **Web Audio API**: Background music control

## 📝 Notes

1. **Nhạc nền**: Do chính sách của trình duyệt, nhạc nền cần user interaction để phát
2. **Ảnh upload**: Ảnh chỉ lưu trong session, không lưu vĩnh viễn
3. **Responsive**: Test trên nhiều thiết bị để đảm bảo hiển thị tốt
4. **Performance**: Website được tối ưu cho tốc độ tải nhanh

## 🎉 Deployment

### GitHub Pages
1. Push code lên GitHub repository
2. Enable GitHub Pages trong Settings
3. Chọn branch và folder để deploy

### Netlify
1. Drag & drop thư mục vào netlify.com
2. Website sẽ được deploy tự động

### Local Server
```bash
# Python 3
python -m http.server 8000

# Node.js (nếu có live-server)
npx live-server
```

## 💡 Tips

1. **Ảnh tốt nghiệp**: Nên dùng ảnh có tỷ lệ 3:4 (portrait) để hiển thị đẹp
2. **Lời giới thiệu**: Nên viết 2-3 đoạn, mỗi đoạn 3-4 câu
3. **Nhạc nền**: Chọn nhạc instrumental, thời lượng 3-5 phút
4. **Testing**: Test trên nhiều thiết bị và trình duyệt khác nhau

---

**Chúc mừng tốt nghiệp! 🎓✨**

Được tạo bởi Cline - AI Assistant
