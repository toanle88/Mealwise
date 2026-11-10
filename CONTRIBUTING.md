# Contributing / Đóng góp

Thanks for helping improve Cơm Nhà. Contributions should keep the app simple, mobile-first, bilingual, and usable without an account.

Cảm ơn bạn đã giúp cải thiện Cơm Nhà. Đóng góp nên giữ ứng dụng đơn giản, ưu tiên điện thoại, song ngữ và không yêu cầu tài khoản.

## Before you start / Trước khi bắt đầu

- Search existing issues and pull requests to avoid duplicate work. / Tìm issue và pull request hiện có để tránh trùng lặp.
- For a substantial change, open an issue first to discuss the approach. / Với thay đổi lớn, hãy mở issue để trao đổi hướng làm trước.
- Do not include private household data, credentials, or API keys. / Không đưa dữ liệu gia đình riêng tư, thông tin xác thực hay API key vào repository.

## Local workflow / Quy trình làm việc

1. Fork the repository and create a focused branch from `main`. / Fork repository và tạo branch riêng từ `main`.
2. Serve the app using the command in the README. / Chạy app theo hướng dẫn trong README.
3. Make a focused change and keep all user-facing text available in Vietnamese and English. / Thực hiện thay đổi tập trung và cung cấp nội dung giao diện bằng cả tiếng Việt lẫn tiếng Anh.
4. For recipe edits, check ingredient names, units, amounts, prep details, and steps together in both languages. / Khi sửa công thức, kiểm tra đồng bộ tên nguyên liệu, đơn vị, định lượng, sơ chế và từng bước ở cả hai ngôn ngữ.
5. Update the service-worker cache version when changing cached shell assets. / Cập nhật phiên bản cache service worker khi thay đổi các file được cache.
6. Open a pull request with a clear summary, rationale, and screenshots for visual changes. / Mở pull request kèm tóm tắt, lý do và ảnh chụp màn hình nếu đổi giao diện.

Use a concise commit subject such as `feat: add recipe filters` or `docs: clarify local setup`. / Dùng tiêu đề commit ngắn gọn như `feat: add recipe filters` hoặc `docs: clarify local setup`.

## Project conventions / Quy ước dự án

- Keep the app dependency-free unless a dependency is justified and documented. / Hạn chế dependency; nếu cần thêm, hãy giải thích và ghi tài liệu.
- Preserve relative asset paths and the static deployment layout. / Giữ đường dẫn asset tương đối và cấu trúc triển khai static.
- Keep data in the browser unless a separately reviewed backend is introduced. / Giữ dữ liệu trong trình duyệt, trừ khi có đề xuất backend được xem xét riêng.
- Prefer semantic HTML, keyboard access, visible focus, readable contrast, and reduced-motion support. / Ưu tiên HTML ngữ nghĩa, thao tác bàn phím, focus rõ ràng, tương phản dễ đọc và hỗ trợ giảm chuyển động.
- Recipe amounts are estimates for home cooking; do not present them as personalized nutrition or medical advice. / Định lượng món ăn là ước tính nấu tại nhà; không trình bày như tư vấn dinh dưỡng hay y tế cá nhân.

## Pull request checklist / Danh sách kiểm tra pull request

- [ ] The change is scoped and explained. / Thay đổi có phạm vi rõ và được giải thích.
- [ ] Vietnamese and English copy are both updated when needed. / Đã cập nhật cả tiếng Việt và tiếng Anh khi cần.
- [ ] Mobile layout, keyboard interaction, and focus states were considered. / Đã xem xét giao diện điện thoại, thao tác bàn phím và trạng thái focus.
- [ ] Recipe and shopping-list data remain consistent. / Dữ liệu công thức và danh sách đi chợ vẫn đồng bộ.
- [ ] Screenshots are attached for visible UI changes. / Có ảnh chụp màn hình cho thay đổi giao diện.
