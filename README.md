# Cơm Nhà

> A simple, bilingual weekly meal planner for Vietnamese families. / Trợ lý lên thực đơn tuần song ngữ dành cho gia đình Việt.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Cơm Nhà helps a family answer three everyday questions: what to cook, what to buy, and how much to prepare. It creates a seven-day dinner plan, scales recipe ingredients to the household, and combines them into a shopping list.

Cơm Nhà giúp gia đình trả lời ba câu hỏi mỗi ngày: nấu món gì, cần mua gì và mua bao nhiêu. Website tạo thực đơn bữa tối 7 ngày, điều chỉnh định lượng theo gia đình và gộp nguyên liệu thành danh sách đi chợ.

## Features / Tính năng

- Vietnamese and English interface / Giao diện tiếng Việt và tiếng Anh.
- Seven-day dinner planner with individual dish swaps / Thực đơn bữa tối 7 ngày, đổi từng món.
- Family portions estimated from adult and child age groups / Ước tính khẩu phần theo người lớn và nhóm tuổi trẻ em.
- Detailed recipes and a combined, checkable shopping list / Công thức chi tiết và danh sách đi chợ có thể đánh dấu.
- Installable progressive web app with offline shell caching / PWA có thể cài đặt và dùng ngoại tuyến.
- Preferences, plan, saved plan, and shopping checks stored in the browser's local storage / Thiết lập, thực đơn, món đã lưu và trạng thái đi chợ được lưu trong localStorage của trình duyệt.

Portion amounts are practical estimates, not individualized nutrition advice. Adjust them to your household. / Định lượng là gợi ý tham khảo, không phải tư vấn dinh dưỡng cá nhân. Hãy điều chỉnh theo sức ăn của gia đình.

## Run locally / Chạy trên máy

No package installation or build step is required. Serve `dist/` over HTTP so the service worker can run:

Không cần cài package hay build. Hãy chạy `dist/` qua HTTP để service worker hoạt động:

```sh
python3 -m http.server 4173 --directory dist
```

Open <http://localhost:4173>. You can also use any static file server. Opening `index.html` directly with a `file://` URL disables service workers.

Mở <http://localhost:4173>. Có thể dùng bất kỳ static file server nào. Mở trực tiếp `index.html` bằng URL `file://` sẽ không chạy service worker.

## Project structure / Cấu trúc dự án

```text
.
├── .openai/hosting.json       # Sites deployment configuration
├── dist/
│   ├── index.html             # App shell and semantic markup
│   ├── styles.css             # Responsive styles and design tokens
│   ├── app.js                 # UI, planner, local state, and shopping list
│   ├── menu-data.js           # Dish catalogue
│   ├── recipe-details.js      # Ingredient amounts and bilingual steps
│   ├── service-worker.js      # Offline app shell and cache version
│   ├── manifest.webmanifest   # PWA metadata
│   └── icon-*                 # App icons
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
└── LICENSE
```

`dist/` is both the maintained static app and the deployment directory; there is no generated build output. Keep the asset paths relative so the app works from its hosted subpath.

`dist/` vừa là mã nguồn static app vừa là thư mục triển khai; hiện không có build output sinh tự động. Giữ đường dẫn asset tương đối để site chạy được trong thư mục con.

## Data and privacy / Dữ liệu và quyền riêng tư

The app has no account system or backend. Household settings, the current plan, the saved plan, and checked shopping items stay in `localStorage` in the current browser profile. Clearing site data removes them. The service worker stores static app files for offline use. The source does not include analytics or advertising integrations.

Ứng dụng không có tài khoản hay backend. Thiết lập gia đình, thực đơn hiện tại, thực đơn đã lưu và nguyên liệu đã đánh dấu nằm trong `localStorage` của trình duyệt hiện tại. Xóa dữ liệu site sẽ xóa các thông tin này. Service worker lưu các file tĩnh để dùng ngoại tuyến. Mã nguồn không tích hợp công cụ phân tích hay quảng cáo.

## Contributing / Đóng góp

Bug reports, recipe corrections, accessibility improvements, and translations are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) and follow the [Code of Conduct](CODE_OF_CONDUCT.md).

Chúng tôi hoan nghênh báo lỗi, hiệu đính công thức, cải thiện accessibility và bản dịch. Vui lòng đọc [CONTRIBUTING.md](CONTRIBUTING.md) và tuân thủ [Quy tắc ứng xử](CODE_OF_CONDUCT.md).

## Security / Bảo mật

Please report vulnerabilities privately according to [SECURITY.md](SECURITY.md); do not publish exploit details in an issue.

Vui lòng báo cáo lỗ hổng theo cách riêng tư như hướng dẫn trong [SECURITY.md](SECURITY.md); không đăng chi tiết khai thác lên issue công khai.

## License / Giấy phép

Released under the [MIT License](LICENSE). / Phát hành theo [giấy phép MIT](LICENSE).
