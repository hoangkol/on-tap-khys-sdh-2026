# Cổng Ôn Tập Cao Học Khoa Học Y Sinh (KHYS) SĐH 2026 – ĐH Y Dược TP.HCM (YDS)

Kho lưu trữ hợp nhất (Multi-page / Route-based Portal) gom toàn bộ **7 cổng ôn tập môn học** phục vụ tuyển sinh **Sau đại học – Cao học Khoa học Y sinh (KHYS) 2026** của Đại học Y Dược TP.HCM vào một trang chủ menu duy nhất tại `/`, trong khi giữ nguyên toàn bộ 7 repository cũ làm bản dự phòng độc lập.

## Cấu trúc thư mục & Định tuyến (Routes)

| Tuyến đường | Module thư mục | Phân loại | Nội dung | Repo gốc dự phòng |
| :--- | :--- | :--- | :--- | :--- |
| `/` | `src/pages/index.html` | Trang chủ Menu | Chọn môn, tìm kiếm, tổng hợp tiến độ | — |
| `/sinh-ly/` | `src/pages/sinh-ly/` | Môn cơ sở | 17 bài • 408 câu KSA • Mô phỏng | [on-tap-sinh-ly-sdh-2026](https://github.com/hoangkol/on-tap-sinh-ly-sdh-2026) |
| `/giai-phau/` | `src/pages/giai-phau/` | Chuyên ngành | 7 bài • 3D WebGL • 168 câu KSA | [on-tap-giai-phau-sdh-2026](https://github.com/hoangkol/on-tap-giai-phau-sdh-2026) |
| `/mo-hoc/` | `src/pages/mo-hoc/` | Chuyên ngành | 8 bài • 61 hình H&E • 192 câu KSA | [on-tap-mo-hoc-sdh-2026](https://github.com/hoangkol/on-tap-mo-hoc-sdh-2026) |
| `/giai-phau-benh/` | `src/pages/giai-phau-benh/` | Chuyên ngành | 8 bài • 35 hình • 192 câu KSA | [on-tap-giai-phau-benh-sdh-2026](https://github.com/hoangkol/on-tap-giai-phau-benh-sdh-2026) |
| `/sinh-ly-benh-mien-dich/` | `src/pages/sinh-ly-benh-mien-dich/` | Chuyên ngành | 6 bài • 19 hình & sơ đồ • 144 câu KSA | [on-tap-sinh-ly-benh-mien-dich-sdh-2026](https://github.com/hoangkol/on-tap-sinh-ly-benh-mien-dich-sdh-2026) |
| `/vi-sinh/` | `src/pages/vi-sinh/` | Chuyên ngành | 7 bài • 7 labs • 168 câu KSA | [on-tap-vi-sinh-sdh-2026](https://github.com/hoangkol/on-tap-vi-sinh-sdh-2026) |
| `/ky-sinh-trung/` | `src/pages/ky-sinh-trung/` | Chuyên ngành | 8 bài • Hình động SGK • 192 câu KSA | [on-tap-ky-sinh-trung-sdh-2026](https://github.com/hoangkol/on-tap-ky-sinh-trung-sdh-2026) |

**Tổng cộng:** 7 môn học • 61 bài học • 1.464 câu trắc nghiệm KSA.

## Chạy cục bộ & Kiểm thử

Yêu cầu Node.js >= 18 (không cần cài `node_modules`):

```bash
# Chạy máy chủ phát triển (mở http://127.0.0.1:3000/)
npm run dev

# Kiểm tra toàn bộ liên kết, tài nguyên hình ảnh, build và các route HTTP
npm run verify

# Build thư mục tĩnh dist/ để triển khai
npm run build
```

## Triển khai (Deploy)

- **GitHub Pages:** Đã cấu hình sẵn workflow [deploy-pages.yml](.github/workflows/deploy-pages.yml) để build `dist/` và phát hành tự động khi push lên nhánh `main`.
- **Vercel:** Đã cấu hình sẵn `vercel.json` (`outputDirectory: "dist"`, `trailingSlash: true`).

## Bảo toàn dữ liệu

- Tất cả các repository cũ và thư mục `web_on_tap_*` ban đầu được giữ nguyên hoàn toàn làm bản dự phòng.
- Các key `localStorage` của từng môn (`yds_physio_2026_progress`, `yds_anat_2026_progress`, `yds_histo_2026_progress`, `yds_patho_2026_progress`, `yds_slb_md_2026_progress`, `yds_micro_2026_progress`, `yds_parasit_2026_progress`) được giữ nguyên để không mất tiến độ làm bài sẵn có trên cùng tên miền.
