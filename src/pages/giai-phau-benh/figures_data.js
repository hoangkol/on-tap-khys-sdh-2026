// ==========================================================================
// ATLAS TOÀN BỘ 35 HÌNH & SƠ ĐỒ SÁCH GIÁO TRÌNH GIẢI PHẪU BỆNH ĐẠI CƯƠNG YDS
// Gồm: 17 Sơ đồ Vector Tái tạo Siêu nét + 27 Ảnh Mô bệnh học / Đại thể Chú thích Tọa độ Chuẩn
// ==========================================================================

window.PATHO_FIGURES = [
  // ========================================================================
  // BÀI 3 (CHUYÊN ĐỀ I): TỔN THƯƠNG CƠ BẢN CỦA TẾ BÀO VÀ MÔ (HÌNH 3.1 -> 3.12)
  // ========================================================================
  {
    id: "H3.1",
    lessonId: 2,
    chapter: "Chuyên đề I • Bài 3 GPB Đại cương",
    page: "tr. 56",
    type: "svg",
    title: "Hình 3.1. Các hình thức thích nghi chủ yếu của tế bào",
    caption: "Sơ đồ tái tạo trực quan 5 đáp ứng thích nghi/biến đổi hình thái của tế bào biểu mô bình thường trước các kích thích stress kéo dài.",
    note: "Phì đại, teo đét, tăng sản và chuyển sản đều CÓ THỂ ĐẢO NGƯỢC nếu loại bỏ tác nhân kích thích; riêng Loạn sản là tổn thương tiền ung thư (chỉ hồi phục ở mức độ nhẹ nếu can thiệp sớm, nếu kéo dài dễ tiến triển thành ung thư).",
    svg: `
      <svg viewBox="0 0 720 310" class="fig-svg" role="img" aria-label="Hình 3.1 Các hình thức thích nghi chủ yếu của tế bào">
        <defs>
          <marker id="arr31" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--text-muted)"/>
          </marker>
        </defs>
        <!-- Tế bào bình thường -->
        <text x="360" y="20" text-anchor="middle" font-size="13" font-weight="800" fill="var(--text-main)">Tế bào bình thường</text>
        <g transform="translate(328,28)">
          <rect x="0" y="0" width="32" height="32" rx="4" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
          <circle cx="16" cy="16" r="6" fill="#1e293b"/>
          <rect x="32" y="0" width="32" height="32" rx="4" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
          <circle cx="48" cy="16" r="6" fill="#1e293b"/>
          <rect x="0" y="32" width="32" height="32" rx="4" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
          <circle cx="16" cy="48" r="6" fill="#1e293b"/>
          <rect x="32" y="32" width="32" height="32" rx="4" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
          <circle cx="48" cy="48" r="6" fill="#1e293b"/>
        </g>

        <!-- Mũi tên tỏa ra 5 nhánh -->
        <line x1="315" y1="88" x2="72" y2="178" stroke="var(--text-muted)" stroke-width="2" marker-end="url(#arr31)"/>
        <line x1="336" y1="96" x2="212" y2="162" stroke="var(--text-muted)" stroke-width="2" marker-end="url(#arr31)"/>
        <line x1="360" y1="98" x2="360" y2="146" stroke="var(--text-muted)" stroke-width="2" marker-end="url(#arr31)"/>
        <line x1="384" y1="96" x2="508" y2="162" stroke="var(--text-muted)" stroke-width="2" marker-end="url(#arr31)"/>
        <line x1="405" y1="88" x2="646" y2="166" stroke="var(--text-muted)" stroke-width="2" marker-end="url(#arr31)"/>

        <!-- 1. Teo -->
        <g transform="translate(46,184)">
          <rect x="0" y="0" width="22" height="22" rx="3" fill="#93c5fd" stroke="#1e40af" stroke-width="1.8"/>
          <circle cx="11" cy="11" r="4" fill="#1e293b"/>
          <rect x="22" y="0" width="22" height="22" rx="3" fill="#93c5fd" stroke="#1e40af" stroke-width="1.8"/>
          <circle cx="33" cy="11" r="4" fill="#1e293b"/>
          <rect x="0" y="22" width="22" height="22" rx="3" fill="#93c5fd" stroke="#1e40af" stroke-width="1.8"/>
          <circle cx="11" cy="33" r="4" fill="#1e293b"/>
          <rect x="22" y="22" width="22" height="22" rx="3" fill="#93c5fd" stroke="#1e40af" stroke-width="1.8"/>
          <circle cx="33" cy="33" r="4" fill="#1e293b"/>
        </g>
        <text x="68" y="254" text-anchor="middle" font-size="13" font-weight="800" fill="var(--accent)">① Teo (Atrophy)</text>
        <text x="68" y="272" text-anchor="middle" font-size="10.5" fill="var(--text-muted)">Giảm kích thước</text>
        <text x="68" y="286" text-anchor="middle" font-size="10.5" fill="var(--text-muted)">&amp;/hoặc số lượng TB</text>

        <!-- 2. Tăng sản -->
        <g transform="translate(158,168)">
          <rect x="0" y="0" width="28" height="28" rx="3" fill="#bbf7d0" stroke="#15803d" stroke-width="1.8"/>
          <circle cx="14" cy="14" r="5" fill="#1e293b"/>
          <rect x="28" y="0" width="28" height="28" rx="3" fill="#bbf7d0" stroke="#15803d" stroke-width="1.8"/>
          <circle cx="42" cy="14" r="5" fill="#1e293b"/>
          <rect x="56" y="0" width="28" height="28" rx="3" fill="#bbf7d0" stroke="#15803d" stroke-width="1.8"/>
          <circle cx="70" cy="14" r="5" fill="#1e293b"/>
          <rect x="84" y="0" width="28" height="28" rx="3" fill="#bbf7d0" stroke="#15803d" stroke-width="1.8"/>
          <circle cx="98" cy="14" r="5" fill="#1e293b"/>
          <rect x="0" y="28" width="28" height="28" rx="3" fill="#bbf7d0" stroke="#15803d" stroke-width="1.8"/>
          <circle cx="14" cy="42" r="5" fill="#1e293b"/>
          <rect x="28" y="28" width="28" height="28" rx="3" fill="#bbf7d0" stroke="#15803d" stroke-width="1.8"/>
          <circle cx="42" cy="42" r="5" fill="#1e293b"/>
          <rect x="56" y="28" width="28" height="28" rx="3" fill="#bbf7d0" stroke="#15803d" stroke-width="1.8"/>
          <circle cx="70" cy="42" r="5" fill="#1e293b"/>
          <rect x="84" y="28" width="28" height="28" rx="3" fill="#bbf7d0" stroke="#15803d" stroke-width="1.8"/>
          <circle cx="98" cy="42" r="5" fill="#1e293b"/>
        </g>
        <text x="214" y="254" text-anchor="middle" font-size="13" font-weight="800" fill="var(--success)">② Tăng sản</text>
        <text x="214" y="272" text-anchor="middle" font-size="10.5" fill="var(--text-muted)">Tăng SỐ LƯỢNG TB</text>
        <text x="214" y="286" text-anchor="middle" font-size="10.5" fill="var(--text-muted)">(mô còn phân bào)</text>

        <!-- 3. Phì đại -->
        <g transform="translate(316,152)">
          <rect x="0" y="0" width="44" height="40" rx="5" fill="#60a5fa" stroke="#1d4ed8" stroke-width="2"/>
          <circle cx="22" cy="20" r="8" fill="#0f172a"/>
          <rect x="44" y="0" width="44" height="40" rx="5" fill="#60a5fa" stroke="#1d4ed8" stroke-width="2"/>
          <circle cx="66" cy="20" r="8" fill="#0f172a"/>
          <rect x="0" y="40" width="44" height="40" rx="5" fill="#60a5fa" stroke="#1d4ed8" stroke-width="2"/>
          <circle cx="22" cy="60" r="8" fill="#0f172a"/>
          <rect x="44" y="40" width="44" height="40" rx="5" fill="#60a5fa" stroke="#1d4ed8" stroke-width="2"/>
          <circle cx="66" cy="60" r="8" fill="#0f172a"/>
        </g>
        <text x="360" y="254" text-anchor="middle" font-size="13" font-weight="800" fill="#2563eb">③ Phì đại</text>
        <text x="360" y="272" text-anchor="middle" font-size="10.5" fill="var(--text-muted)">Tăng KÍCH THƯỚC TB</text>
        <text x="360" y="286" text-anchor="middle" font-size="10.5" fill="var(--text-muted)">(↑ bào quan, protein)</text>

        <!-- 4. Chuyển sản -->
        <g transform="translate(474,170)">
          <circle cx="17" cy="17" r="16" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
          <circle cx="17" cy="17" r="5" fill="#1e293b"/>
          <circle cx="51" cy="17" r="16" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
          <circle cx="51" cy="17" r="5" fill="#1e293b"/>
          <circle cx="17" cy="51" r="16" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
          <circle cx="17" cy="51" r="5" fill="#1e293b"/>
          <circle cx="51" cy="51" r="16" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
          <circle cx="51" cy="51" r="5" fill="#1e293b"/>
        </g>
        <text x="508" y="254" text-anchor="middle" font-size="13" font-weight="800" fill="var(--warning)">④ Chuyển sản</text>
        <text x="508" y="272" text-anchor="middle" font-size="10.5" fill="var(--text-muted)">Thay đổi kiểu biệt hóa</text>
        <text x="508" y="286" text-anchor="middle" font-size="10.5" fill="var(--text-muted)">(cùng dòng phôi)</text>

        <!-- 5. Loạn sản -->
        <g transform="translate(612,170)">
          <polygon points="14,0 30,6 32,24 18,32 2,26 0,8" fill="#fdba74" stroke="#9a3412" stroke-width="2"/>
          <ellipse cx="16" cy="16" rx="7" ry="10" fill="#1e293b"/>
          <polygon points="36,2 58,0 64,20 50,34 34,26" fill="#fb923c" stroke="#9a3412" stroke-width="2"/>
          <polygon points="46,10 56,14 52,25 40,22" fill="#1e293b"/>
          <polygon points="4,32 28,34 30,56 14,64 0,50" fill="#fb923c" stroke="#9a3412" stroke-width="2"/>
          <circle cx="16" cy="48" r="9" fill="#1e293b"/>
          <polygon points="34,34 62,36 60,62 36,60" fill="#fdba74" stroke="#9a3412" stroke-width="2"/>
          <ellipse cx="48" cy="48" rx="9" ry="5" fill="#1e293b"/>
        </g>
        <text x="646" y="254" text-anchor="middle" font-size="13" font-weight="800" fill="var(--danger)">⑤ Loạn sản</text>
        <text x="646" y="272" text-anchor="middle" font-size="10.5" fill="var(--text-muted)">Mất cực tính, nhân dị dạng</text>
        <text x="646" y="286" text-anchor="middle" font-size="10.5" fill="var(--danger)">(Tổn thương tiền ung thư)</text>
      </svg>
    `,
    legends: [
      { n: 1, title: "Teo (Atrophy)", text: "Giảm kích thước và chức năng tế bào (tăng thoái giáng protein qua ubiquitin-proteasome và tự thực). Gặp trong teo tuyến ức sinh lý, bất động chi, thiếu máu mạn." },
      { n: 2, title: "Tăng sản (Hyperplasia)", text: "Tăng SỐ LƯỢNG tế bào trong mô còn khả năng phân bào (biểu mô, tuyến nội tiết, tủy xương). Có thể hồi phục khi hết kích thích, khác với tăng sinh không kiểm soát của bướu." },
      { n: 3, title: "Phì đại (Hypertrophy)", text: "Tăng KÍCH THƯỚC tế bào (↑ số lượng/kích thước bào quan và protein cấu trúc) ở mô không phân bào như cơ tim, cơ vân (qua tín hiệu cơ học & IGF-1)." },
      { n: 4, title: "Chuyển sản (Metaplasia)", text: "Loại tế bào trưởng thành này thay bằng loại tế bào trưởng thành khác cùng dòng phôi để chống chịu tốt hơn (VD: trụ → lát tầng ở cổ tử cung/phế quản; lát tầng → trụ ruột ở Barrett thực quản)." },
      { n: 5, title: "Loạn sản (Dysplasia)", text: "Tăng sinh bất thường kèm rối loạn biệt hóa và mất cực tính phân lớp biểu mô; nhân lớn tăng sắc, tăng phân bào → là tổn thương TIỀN UNG THƯ." }
    ]
  },

  {
    id: "H3.2",
    lessonId: 2,
    chapter: "Chuyên đề I • Bài 3 GPB Đại cương",
    page: "tr. 57",
    type: "photo",
    title: "Hình 3.2. (A) Teo quanh bó cơ ở bệnh nhân viêm da cơ • (B) Tăng sản tuyến tiền liệt",
    caption: "Đối chiếu mô học hai hình thái thích nghi: Teo đét bó sợi cơ ngoại vi (A) và Tăng sản tuyến – mô đệm tiền liệt lành tính (B).",
    note: "Ảnh B trong tài liệu scan bị lóa sáng; ảnh đối chiếu từ Wikimedia Commons thể hiện rõ các tuyến tiền liệt tăng sản số lượng tế bào biểu mô, tạo nếp nhú vào lòng tuyến kèm tăng sản mô đệm sợi cơ.",
    panels: [
      {
        label: "A. Viêm da cơ – Teo quanh bó cơ (Perifascicular atrophy)",
        src: "assets/images/h3_2a_dermatomyositis.jpg",
        credit: "Jensflorian / Wikimedia Commons (CC BY-SA 3.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Dermatomyositis_HE_x40.jpg",
        pins: [
          { n: 1, x: 48, y: 43, label: "Sợi cơ teo quanh bó cơ (*)", desc: "Các sợi cơ vùng rìa tiếp giáp vách mô liên kết (perimysium) bị thu nhỏ kích thước rõ rệt so với vùng trung tâm bó cơ." },
          { n: 2, x: 18, y: 62, label: "Sợi cơ vân bình thường", desc: "Các sợi cơ nằm sâu bên trong bó cơ vẫn giữ đường kính lớn, đa giác đều đặn." },
          { n: 3, x: 43, y: 27, label: "Vách mô liên kết quanh bó", desc: "Thâm nhiễm nhẹ tế bào viêm và tổn thương vi mạch quanh bó cơ – cơ chế thiếu máu mạn gây teo đét." }
        ]
      },
      {
        label: "B. Tăng sản tuyến tiền liệt lành tính (BPH)",
        src: "assets/images/h3_2b_bph.jpg",
        credit: "Nephron / Wikimedia Commons (CC BY-SA 3.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Nodular_hyperplasia_of_the_prostate.jpg",
        pins: [
          { n: 1, x: 52, y: 20, label: "Tuyến giãn rộng gấp nếp nhú", desc: "Biểu mô tuyến tăng sinh số lượng tế bào dưới kích thích androgen (DHT), lồi vào lòng tạo các nếp gấp đặc trưng." },
          { n: 2, x: 35, y: 48, label: "Đám tuyến tăng sản dày đặc", desc: "Tế bào biểu mô tăng số lượng nhưng vẫn giữ 2 lớp (tế bào đáy + tế bào chế tiết) và nhân lành tính đều đặn." },
          { n: 3, x: 71, y: 52, label: "Mô đệm sợi cơ tăng sản", desc: "Tăng sản đồng thời mô đệm sợi và cơ trơn xen giữa các nốt tuyến." }
        ]
      }
    ]
  },

  {
    id: "H3.3",
    lessonId: 2,
    chapter: "Chuyên đề I • Bài 3 GPB Đại cương",
    page: "tr. 60",
    type: "photo",
    title: "Hình 3.3. Chuyển dạng (A), Chuyển sản (B), Loạn sản (C) và Thoái sản (D)",
    caption: "Chuỗi 4 hình ảnh mô học kinh điển phân biệt từ thích nghi lành tính (chuyển dạng, chuyển sản) đến rối loạn biệt hóa tiền ung thư (loạn sản) và ác tính độ cao (thoái sản).",
    note: "Phân biệt 'Chuyển dạng tế bào' (chỉ đổi hình dạng ngoài như biểu mô nang giáp bị chất keo ép dẹt, hồi phục khi hết ứ đọng) với 'Chuyển sản' (đổi hẳn loại tế bào trưởng thành) và 'Thoái sản' (mất biệt hóa hoàn toàn trong ung thư độ ác cao).",
    panels: [
      {
        label: "A. Chuyển dạng tế bào nang tuyến giáp trong phình giáp keo",
        src: "assets/images/h3_3a_thyroid_colloid.jpg",
        credit: "Mikael Häggström / Wikimedia Commons (CC0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Histopathology_of_thyroid_colloid_nodule.jpg",
        pins: [
          { n: 1, x: 28, y: 35, label: "Chất keo giáp ứ đọng căng lòng", desc: "Chất keo ái toan đồng nhất tích tụ lượng lớn làm căng giãn khổng lồ các nang tuyến giáp." },
          { n: 2, x: 50, y: 32, label: "Biểu mô nang bị ép dẹt mỏng", desc: "Tế bào nang giáp bình thường hình vuông/trụ nay chuyển dạng dẹt mỏng giống nội mô mạch máu nhưng cấu trúc nội bào vẫn lành tính." },
          { n: 3, x: 88, y: 65, label: "Nang giáp nhỏ kế cận", desc: "Các nang kích thước bình thường lân cận giữ hình thái tế bào vuông thấp." }
        ]
      },
      {
        label: "B. Chuyển sản gai biểu mô cổ tử cung trong viêm mạn",
        src: "assets/images/h3_3b_cervix_metaplasia.jpg",
        credit: "Dept. Pathology, Calicut Medical College / Wikimedia Commons (CC BY-SA 4.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Squamous_metaplasia.jpg",
        pins: [
          { n: 1, x: 23, y: 50, label: "Biểu mô lát tầng chuyển sản", desc: "Biểu mô lát tầng nhiều hàng bền vững thay thế biểu mô trụ đơn để chống chịu tác nhân viêm mạn/acid âm đạo." },
          { n: 2, x: 69, y: 44, label: "Biểu mô trụ cổ trong còn lại", desc: "Ranh giới chuyển tiếp rõ với hàng tế bào trụ tiết nhầy ban đầu." },
          { n: 3, x: 83, y: 66, label: "Mô đệm thấm nhập tế bào viêm", desc: "Nhiều lympho bào và tương bào trong mô đệm gợi ý nền viêm mạn tính kích thích chuyển sản." }
        ]
      },
      {
        label: "C. Loạn sản biểu mô cổ tử cung (CIN / HSIL)",
        src: "assets/images/h3_3c_cin.jpg",
        credit: "Dept. Pathology, Calicut Medical College / Wikimedia Commons (CC BY-SA 4.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Cervical_Intraepithelial_Neoplasia_HSIL_20X.jpg",
        pins: [
          { n: 1, x: 68, y: 52, label: "Tế bào loạn sản mất cực tính", desc: "Nhân lớn tăng sắc, kích thước không đều, tỷ lệ nhân/bào tương tăng, mất trưởng thành từ đáy lên bề mặt (liên quan HPV)." },
          { n: 2, x: 41, y: 53, label: "Màng đáy còn nguyên vẹn", desc: "Tế bào loạn sản chưa phá vỡ màng đáy để xâm lấn mô đệm bên dưới (tổn thương tiền ung thư / tại chỗ)." },
          { n: 3, x: 18, y: 40, label: "Mô đệm liên kết bên dưới", desc: "Mô đệm cổ tử cung chưa bị các ổ tế bào biểu mô xâm nhập." }
        ]
      },
      {
        label: "D. Tế bào thoái sản trong carcinom thoái sản tuyến giáp",
        src: "assets/images/h3_3d_anaplastic_thyroid.jpg",
        credit: "Nephron / Wikimedia Commons (CC BY-SA 3.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Anaplastic_thyroid_carcinoma_low_mag.jpg",
        pins: [
          { n: 1, x: 20, y: 58, label: "Tế bào thoái sản mất biệt hóa", desc: "Tế bào hình thoi/đa hình thái hoàn toàn mất đặc điểm nang giáp ban đầu, nhân dị dạng rất lớn, tiên lượng cực xấu." },
          { n: 2, x: 78, y: 50, label: "Vùng tuyến giáp biệt hóa đối chiếu", desc: "Cấu trúc ống/nang tuyến còn sót lại ở bên phải làm nổi bật sự mất tổ chức mô ở vùng thoái sản." },
          { n: 3, x: 53, y: 68, label: "Vùng chuyển tiếp xâm nhập & viêm", desc: "Mô u xâm lấn phá vỡ tổ chức mô lành kèm phản ứng viêm." }
        ]
      }
    ]
  },

  {
    id: "H3.4",
    lessonId: 3,
    chapter: "Chuyên đề I • Bài 3 GPB Đại cương",
    page: "tr. 61",
    type: "svg",
    title: "Hình 3.4. Tổn thương hồi phục và không hồi phục của tế bào",
    caption: "Sơ đồ diễn biến từ Tế bào bình thường → Tổn thương hồi phục (sưng phù ER/ti thể, bong bóng màng, cụm chromatin) → Điểm không thể quay lại dẫn đến Hoại tử.",
    note: "Điểm phân biệt then chốt: Trong tổn thương hồi phục, màng tế bào và màng ti thể còn toàn vẹn về cấu trúc; khi màng tế bào vỡ, ti thể phù kèm lắng đọng vô định hình và vỡ ti thể thì tổn thương trở thành KHÔNG HỒI PHỤC.",
    svg: `
      <svg viewBox="0 0 720 430" class="fig-svg" role="img" aria-label="Hình 3.4 Tổn thương hồi phục và không hồi phục">
        <defs>
          <marker id="arr34" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 1 L10 5 L0 9 z" fill="#ea580c"/>
          </marker>
        </defs>
        <!-- Tầng 1: BÌNH THƯỜNG -->
        <rect x="8" y="14" width="60" height="100" rx="8" fill="var(--success-light)"/>
        <text x="38" y="64" text-anchor="middle" font-size="11" font-weight="800" fill="var(--success)" transform="rotate(-90 38 64)">BÌNH THƯỜNG</text>

        <g transform="translate(155,16)">
          <circle cx="52" cy="48" r="44" fill="#f8fafc" stroke="#0f172a" stroke-width="2.5"/>
          <circle cx="52" cy="52" r="16" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
          <ellipse cx="26" cy="44" rx="8" ry="5" fill="#fdba74" stroke="#9a3412"/>
          <ellipse cx="76" cy="56" rx="8" ry="5" fill="#fdba74" stroke="#9a3412"/>
          <path d="M36 22 Q50 14 66 24" fill="none" stroke="#16a34a" stroke-width="3"/>
          <text x="110" y="46" font-size="12" font-weight="700" fill="var(--text-main)">Tế bào</text>
          <text x="110" y="62" font-size="12" font-weight="700" fill="var(--text-main)">bình thường</text>
        </g>

        <g transform="translate(430,16)">
          <circle cx="52" cy="48" r="44" fill="#f8fafc" stroke="#0f172a" stroke-width="2.5"/>
          <circle cx="52" cy="52" r="16" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
          <ellipse cx="26" cy="44" rx="8" ry="5" fill="#fdba74" stroke="#9a3412"/>
          <ellipse cx="76" cy="56" rx="8" ry="5" fill="#fdba74" stroke="#9a3412"/>
          <path d="M36 22 Q50 14 66 24" fill="none" stroke="#16a34a" stroke-width="3"/>
          <text x="110" y="46" font-size="12" font-weight="700" fill="var(--text-main)">Tế bào</text>
          <text x="110" y="62" font-size="12" font-weight="700" fill="var(--text-main)">bình thường</text>
        </g>

        <!-- Tầng 2: TỔN THƯƠNG HỒI PHỤC -->
        <rect x="8" y="136" width="60" height="122" rx="8" fill="var(--warning-light)"/>
        <text x="38" y="197" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--warning)" transform="rotate(-90 38 197)">TỔN THƯƠNG HỒI PHỤC</text>

        <path d="M168 106 Q142 128 164 152" fill="none" stroke="#ea580c" stroke-width="3" marker-end="url(#arr34)"/>
        <text x="114" y="130" font-size="11.5" font-weight="700" fill="var(--danger)">Tổn thương</text>

        <!-- Cell hồi phục trái -->
        <g transform="translate(150,140)">
          <path d="M22,22 Q10,6 32,14 Q52,-2 68,14 Q94,2 96,26 Q116,42 98,64 Q108,92 80,96 Q62,114 38,98 Q10,104 12,76 Q-6,56 14,40 Z" fill="#f1f5f9" stroke="#0f172a" stroke-width="2.5"/>
          <circle cx="52" cy="56" r="18" fill="#94a3b8" stroke="#1e293b" stroke-width="1.5"/>
          <circle cx="46" cy="50" r="4" fill="#0f172a"/>
          <circle cx="59" cy="60" r="4" fill="#0f172a"/>
          <ellipse cx="26" cy="72" rx="11" ry="7" fill="#fca5a5" stroke="#991b1b"/>
          <ellipse cx="80" cy="48" rx="12" ry="8" fill="#86efac" stroke="#15803d"/>
        </g>
        <text x="292" y="156" font-size="11.5" font-weight="700" fill="var(--text-main)">Bong bóng màng</text>
        <text x="292" y="186" font-size="11.5" font-weight="700" fill="var(--text-main)">Phù lưới nội chất</text>
        <text x="292" y="201" font-size="11.5" font-weight="700" fill="var(--text-main)">và ti thể</text>
        <text x="150" y="262" font-size="11" font-weight="700" fill="var(--text-muted)">Cụm chromatin (nhân nguyên vẹn)</text>

        <!-- Cell hồi phục phải & mũi tên Hồi phục -->
        <g transform="translate(432,148)">
          <circle cx="50" cy="46" r="42" fill="#f8fafc" stroke="#0f172a" stroke-width="2.2"/>
          <circle cx="48" cy="48" r="16" fill="#cbd5e1" stroke="#334155"/>
          <ellipse cx="24" cy="44" rx="8" ry="5" fill="#86efac" stroke="#15803d"/>
          <ellipse cx="76" cy="58" rx="10" ry="6" fill="#fdba74" stroke="#9a3412"/>
        </g>
        <path d="M356 232 Q396 244 426 218" fill="none" stroke="#16a34a" stroke-width="3" marker-end="url(#arr34)"/>
        <text x="392" y="252" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--success)">Hồi phục</text>
        <path d="M532 152 Q552 126 530 104" fill="none" stroke="#16a34a" stroke-width="3" marker-end="url(#arr34)"/>

        <!-- Tầng 3: KHÔNG HỒI PHỤC -> HOẠI TỬ -->
        <rect x="8" y="276" width="60" height="140" rx="8" fill="var(--danger-light)"/>
        <text x="38" y="346" text-anchor="middle" font-size="10" font-weight="800" fill="var(--danger)" transform="rotate(-90 38 346)">KHÔNG HỒI PHỤC → HOẠI TỬ</text>

        <path d="M172 246 Q150 278 168 300" fill="none" stroke="#dc2626" stroke-width="3" marker-end="url(#arr34)"/>
        <text x="128" y="286" font-size="11.5" font-weight="800" fill="var(--danger)">Chết</text>

        <!-- Cell tiền hoại tử -->
        <g transform="translate(155,286)">
          <path d="M22,18 Q50,2 82,16 Q104,42 94,76 Q66,104 28,92 Q4,68 22,18 Z" fill="#fef2f2" stroke="#991b1b" stroke-width="2.5"/>
          <circle cx="52" cy="48" r="13" fill="#0f172a"/>
          <ellipse cx="28" cy="72" rx="12" ry="7" fill="#fca5a5" stroke="#7f1d1d"/>
          <circle cx="28" cy="72" r="3" fill="#0f172a"/>
          <ellipse cx="78" cy="64" rx="12" ry="7" fill="#fca5a5" stroke="#7f1d1d" stroke-dasharray="4,2"/>
          <path d="M12 44 C18 36, 24 44, 18 52 C12 48, 12 44, 12 44" fill="none" stroke="#7c2d12" stroke-width="2"/>
        </g>
        <text x="86" y="314" font-size="11" font-weight="700" fill="var(--text-main)">Cô đặc nhân</text>
        <text x="80" y="370" font-size="10.5" font-weight="700" fill="var(--text-main)">Phù ti thể + lắng đọng</text>
        <text x="90" y="384" font-size="10.5" font-weight="700" fill="var(--text-main)">chất vô định hình</text>
        <text x="132" y="410" font-size="11" font-weight="700" fill="var(--purple)">Hình ảnh myelin</text>

        <path d="M276 346 L354 346" stroke="#dc2626" stroke-width="3" marker-end="url(#arr34)"/>
        <text x="315" y="324" text-anchor="middle" font-size="12" font-weight="800" fill="var(--danger)">Hoại tử</text>
        <text x="315" y="374" text-anchor="middle" font-size="10.5" fill="var(--text-muted)">Phù ER &amp; mất ribosome</text>
        <text x="315" y="390" text-anchor="middle" font-size="10.5" fill="var(--text-muted)">Vỡ ti thể</text>

        <!-- Cell hoại tử vỡ vụn -->
        <g transform="translate(415,286)">
          <circle cx="58" cy="56" r="46" fill="#ffe4e6" stroke="#be123c" stroke-width="2.5" stroke-dasharray="7,5"/>
          <circle cx="48" cy="54" r="14" fill="#475569" stroke-dasharray="3,2" stroke="#0f172a"/>
          <circle cx="14" cy="24" r="6" fill="#fda4af" stroke="#be123c" stroke-dasharray="3,2"/>
          <circle cx="102" cy="30" r="7" fill="#fda4af" stroke="#be123c" stroke-dasharray="3,2"/>
          <circle cx="94" cy="86" r="6" fill="#fda4af" stroke="#be123c" stroke-dasharray="3,2"/>
          <ellipse cx="72" cy="40" rx="9" ry="5" fill="#fca5a5" stroke="#991b1b" stroke-dasharray="3,2"/>
        </g>
        <text x="536" y="316" font-size="11.5" font-weight="800" fill="var(--danger)">Sự vỡ vụn của</text>
        <text x="536" y="332" font-size="11.5" font-weight="800" fill="var(--danger)">màng tế bào và nhân</text>
        <text x="536" y="352" font-size="10.5" fill="var(--text-muted)">Giải phóng enzym tiêu thể</text>
        <text x="536" y="368" font-size="10.5" fill="var(--text-muted)">gây phản ứng VIÊM</text>
      </svg>
    `,
    legends: [
      { n: 1, title: "Giai đoạn tổn thương hồi phục", text: "Đặc trưng bởi phù tế bào (do suy giảm ATP → hỏng bơm Na⁺/K⁺-ATPase), giãn lưới nội chất và ti thể, bong bóng màng (blebs) và cụm chất nhiễm sắc; tế bào trở lại bình thường nếu ngừng tác nhân." },
      { n: 2, title: "Ngưỡng không thể hồi phục", text: "Xảy ra khi xuất hiện tổn thương nặng màng bào tương, vỡ ti thể kèm lắng đọng mật độ vô định hình giàu Ca²⁺/phospholipid trong lòng ti thể, và xuất hiện các thể myelin." },
      { n: 3, title: "Hoại tử (Necrosis)", text: "Nhân cô đặc → vỡ → tan biến; màng tế bào và bào quan vỡ vụn giải phóng chất nội bào ra gian bào, kích hoạt phản ứng viêm mô lân cận." }
    ]
  },

  {
    id: "H3.5",
    lessonId: 3,
    chapter: "Chuyên đề I • Bài 3 GPB Đại cương",
    page: "tr. 62",
    type: "svg",
    title: "Hình 3.5. Một số dạng tổn thương tế bào",
    caption: "Tổng quan 6 cơ chế/dạng tổn thương tế bào cốt lõi: Hoại tử, Apoptosis, Tự thực (Autophagy), Stress oxy hóa, Tổn thương màng tế bào và Tổn thương DNA.",
    note: "Ghi nhớ: Tự thực (Autophagy) dùng màng kép bao bọc bào quan hư hại thành thể tự thực bào rồi hòa với Lysosome để tái chế duy trì hằng định nội môi, nhưng nếu quá mức cũng dẫn tới chết tế bào không gây viêm.",
    svg: `
      <svg viewBox="0 0 720 295" class="fig-svg" role="img" aria-label="Hình 3.5 Một số dạng tổn thương tế bào">
        <!-- 1. Hoại tử -->
        <rect x="14" y="14" width="218" height="126" rx="12" fill="var(--bg-card)" stroke="var(--danger)" stroke-width="1.8"/>
        <circle cx="123" cy="64" r="34" fill="#ddd6fe" stroke="#9333ea" stroke-width="2" stroke-dasharray="5,4"/>
        <circle cx="115" cy="64" r="14" fill="#4c1d95" opacity="0.65"/>
        <circle cx="84" cy="40" r="4" fill="#a855f7"/>
        <circle cx="164" cy="84" r="5" fill="#a855f7"/>
        <circle cx="156" cy="44" r="3.5" fill="#a855f7"/>
        <text x="123" y="122" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--danger)">1. Hoại tử (Vỡ màng)</text>

        <!-- 2. Apoptosis -->
        <rect x="250" y="14" width="218" height="126" rx="12" fill="var(--bg-card)" stroke="var(--accent)" stroke-width="1.8"/>
        <g transform="translate(320,24)">
          <circle cx="38" cy="42" r="24" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
          <path d="M30 34 Q42 28 48 42 Q38 52 28 44 Z" fill="#0369a1"/>
          <circle cx="10" cy="24" r="9" fill="#bae6fd" stroke="#0284c7" stroke-width="1.8"/>
          <circle cx="68" cy="30" r="10" fill="#bae6fd" stroke="#0284c7" stroke-width="1.8"/>
          <circle cx="16" cy="64" r="8" fill="#bae6fd" stroke="#0284c7" stroke-width="1.8"/>
          <circle cx="64" cy="62" r="9" fill="#bae6fd" stroke="#0284c7" stroke-width="1.8"/>
        </g>
        <text x="359" y="122" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--accent)">2. Apoptosis (Thể apoptotic)</text>

        <!-- 3. Tự thực -->
        <rect x="486" y="14" width="220" height="126" rx="12" fill="var(--bg-card)" stroke="var(--warning)" stroke-width="1.8"/>
        <circle cx="536" cy="54" r="22" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
        <text x="536" y="92" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-muted)">Lysosome</text>
        <text x="536" y="58" text-anchor="middle" font-size="10" font-weight="800" fill="#78350f">Enzym</text>
        <path d="M562 54 L584 54" stroke="#0f172a" stroke-width="2"/>
        <circle cx="634" cy="56" r="30" fill="#e0f2fe" stroke="#0369a1" stroke-width="2.2"/>
        <circle cx="634" cy="56" r="24" fill="none" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="4,2"/>
        <ellipse cx="642" cy="50" rx="10" ry="6" fill="#93c5fd" stroke="#1e3a8a"/>
        <circle cx="620" cy="66" r="7" fill="#fbbf24"/>
        <text x="596" y="122" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--warning)">3. Tự thực (Autophagy)</text>

        <!-- 4. Stress oxy hóa -->
        <rect x="14" y="156" width="218" height="126" rx="12" fill="var(--bg-card)" stroke="#dc2626" stroke-width="1.8"/>
        <g transform="translate(65,168)">
          <polygon points="58,6 70,22 92,16 84,36 106,46 84,58 94,76 70,70 58,86 44,70 22,76 32,58 10,46 32,36 22,16 44,22" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
          <text x="58" y="42" text-anchor="middle" font-size="11.5" font-weight="800" fill="#991b1b">ROS: O₂⁻</text>
          <text x="58" y="58" text-anchor="middle" font-size="10.5" font-weight="700" fill="#b91c1c">•OH, H₂O₂</text>
        </g>
        <text x="123" y="268" text-anchor="middle" font-size="12.5" font-weight="800" fill="#dc2626">4. Stress oxy hóa (ROS)</text>

        <!-- 5. Tổn thương màng tế bào -->
        <rect x="250" y="156" width="218" height="126" rx="12" fill="var(--bg-card)" stroke="var(--primary)" stroke-width="1.8"/>
        <line x1="266" y1="204" x2="338" y2="204" stroke="#0f766e" stroke-width="5" stroke-dasharray="4,2"/>
        <line x1="382" y1="204" x2="452" y2="204" stroke="#0f766e" stroke-width="5" stroke-dasharray="4,2"/>
        <path d="M359 170 L359 236" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4,3"/>
        <circle cx="352" cy="182" r="4" fill="#0284c7"/>
        <circle cx="367" cy="226" r="4" fill="#dc2626"/>
        <text x="359" y="246" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-muted)">Rò rỉ ion &amp; enzym (mất chọn lọc)</text>
        <text x="359" y="268" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--primary)">5. Tổn thương màng tế bào</text>

        <!-- 6. Tổn thương DNA -->
        <rect x="486" y="156" width="220" height="126" rx="12" fill="var(--bg-card)" stroke="var(--purple)" stroke-width="1.8"/>
        <circle cx="596" cy="224" r="24" fill="#fed7aa" stroke="#9a3412" stroke-width="1.8"/>
        <circle cx="596" cy="224" r="10" fill="#c2410c"/>
        <rect x="556" y="164" width="80" height="30" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
        <text x="596" y="179" text-anchor="middle" font-size="9.5" font-weight="800" fill="#991b1b">Tổn thương DNA</text>
        <text x="596" y="190" text-anchor="middle" font-size="8.5" fill="#dc2626">Đứt chuỗi kép / Base</text>
        <polygon points="586,194 606,194 596,216" fill="#fef2f2" stroke="#dc2626"/>
        <text x="596" y="268" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--purple)">6. Tổn thương DNA (p53)</text>
      </svg>
    `,
    legends: [
      { n: 1, title: "Hoại tử & Stress oxy hóa (ROS)", text: "Các gốc tự do O₂⁻, •OH, H₂O₂ gây peroxy hóa lipid màng tế bào, bất hoạt enzym và đứt gãy DNA." },
      { n: 2, title: "Tự thực (Autophagy) & Apoptosis", text: "Tự thực tái chế bào quan qua thể tự thực – tiêu thể; Apoptosis phân mảnh tế bào gọn gàng có màng bọc." },
      { n: 3, title: "Tổn thương màng & Tổn thương DNA", text: "Vỡ màng là điểm không thể hồi phục; tổn thương DNA không thể sửa chữa kích hoạt p53 gây ngừng chu kỳ, lão hóa hoặc apoptosis (hoặc sinh ung thư nếu mất p53)." }
    ]
  },

  {
    id: "H3.6",
    lessonId: 3,
    chapter: "Chuyên đề I • Bài 3 GPB Đại cương",
    page: "tr. 63",
    type: "photo",
    title: "Hình 3.6. (A) Thoái hóa phồng & Thoái hóa mỡ • (B) Tế bào hoại tử vs Apoptosis",
    caption: "Hình ảnh vi thể nhận diện tổn thương hồi phục (thoái hóa phồng/mỡ ở gan) và hai hình thức chết tế bào.",
    note: "Nhớ kỹ dấu hiệu nhận diện mô học: Thoái hóa phồng (sưng phù) có bào tương nhạt màu, rỗng dạng mạng do ứ nước còn nhân nguyên vẹn; Thoái hóa mỡ có không bào tròn ranh giới rất nét đẩy nhân dẹt ra rìa.",
    panels: [
      {
        label: "A. Tế bào gan thoái hóa phồng & thoái hóa mỡ",
        src: "assets/images/h3_6a_steatosis_balloon.jpg",
        credit: "Nephron / Wikimedia Commons (CC BY-SA 3.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Steatohepatitis_high_mag.jpg",
        pins: [
          { n: 1, x: 59, y: 27, label: "Không bào mỡ (Thoái hóa mỡ)", desc: "Không bào tròn, sáng bóng, bờ sắc nét chứa triglyceride (bị hòa tan khi làm tiêu bản, nhuộm Oil Red O trên cắt lạnh cho màu đỏ cam)." },
          { n: 2, x: 44, y: 58, label: "Tế bào thoái hóa phồng (Sưng phù)", desc: "Tế bào gan sưng phồng to, bào tương sáng nhạt, rỗng dạng lưới mịn nhưng nhân vẫn còn nguyên vẹn (chưa vón/vỡ/tan)." },
          { n: 3, x: 30, y: 26, label: "Xơ hóa & tế bào viêm lân cận", desc: "Dải collagen nhuộm xanh và tế bào viêm phản ứng trong viêm gan nhiễm mỡ." }
        ]
      },
      {
        label: "B. Tế bào chết theo chương trình (Apoptosis) & tế bào hoại tử",
        src: "assets/images/h3_6b_apoptosis.jpg",
        credit: "Yale Rosen / Wikimedia Commons (CC BY-SA 4.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:2_CEN_NEC_1_680x512px.tif",
        pins: [
          { n: 1, x: 57, y: 63, label: "Tế bào chết theo chương trình (mũi tên xanh)", desc: "Tế bào co nhỏ lại hình tròn, bào tương hồng đậm đồng nhất, nhân cô đặc tối màu, tách rời khỏi hàng tế bào xung quanh tạo quầng sáng, không gây viêm." },
          { n: 2, x: 75, y: 55, label: "Tế bào tổn thương/hoại tử (mũi tên đỏ)", desc: "Tế bào sưng to hơn, ranh giới màng kém rõ và chất nhiễm sắc nhân tan nhạt dần." },
          { n: 3, x: 36, y: 37, label: "Hồng cầu & tế bào viêm xoang mạch", desc: "Khoảng mạch máu chứa hồng cầu và bạch cầu lân cận." }
        ]
      }
    ]
  },

  {
    id: "H3.7",
    lessonId: 3,
    chapter: "Chuyên đề I • Bài 3 GPB Đại cương",
    page: "tr. 64",
    type: "svg",
    title: "Hình 3.7. Hai hình thức chết tế bào (Hoại tử vs Chết tế bào theo chương trình)",
    caption: "Sơ đồ đối chiếu từng bước sự khác biệt tuyệt đối giữa Hoại tử (chết thụ động theo đám, vỡ màng, GÂY VIÊM) và Chết theo chương trình (chủ động cần ATP, giữ màng, KHÔNG VIÊM).",
    note: "Câu bẫy hay ra thi: Apoptosis xảy ra ở từng tế bào riêng lẻ, tiêu thụ ATP, màng tế bào giữ nguyên tạo thể apoptotic bộc lộ Phosphatidylserine làm tín hiệu 'ăn tôi đi' cho đại thực bào nên KHÔNG gây phản ứng viêm.",
    svg: `
      <svg viewBox="0 0 720 380" class="fig-svg" role="img" aria-label="Hình 3.7 Hai hình thức chết tế bào">
        <defs>
          <marker id="arr37" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 1 L10 5 L0 9 z" fill="#ea580c"/>
          </marker>
        </defs>
        <!-- Đường phân chia giữa -->
        <line x1="360" y1="10" x2="360" y2="370" stroke="var(--border)" stroke-width="2" stroke-dasharray="6,4"/>

        <!-- NHÁNH TRÁI: HOẠI TỬ -->
        <g transform="translate(115,16)">
          <circle cx="38" cy="36" r="32" fill="#f8fafc" stroke="#0f172a" stroke-width="2"/>
          <circle cx="38" cy="38" r="11" fill="#94a3b8" stroke="#1e293b"/>
          <ellipse cx="18" cy="32" rx="6" ry="4" fill="#fdba74"/>
          <rect x="86" y="16" width="128" height="36" rx="8" fill="var(--bg-card)" stroke="#0f172a" stroke-width="1.5"/>
          <text x="150" y="32" text-anchor="middle" font-size="11" font-weight="800" fill="var(--text-main)">TẾ BÀO</text>
          <text x="150" y="46" text-anchor="middle" font-size="11" font-weight="800" fill="var(--text-main)">BÌNH THƯỜNG</text>
        </g>

        <path d="M135 90 Q118 110 132 128" fill="none" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arr37)"/>
        <path d="M180 128 Q196 108 182 90" fill="none" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arr37)"/>
        <text x="58" y="110" font-size="10.5" font-weight="700" fill="var(--danger)">Tổn thương có</text>
        <text x="58" y="124" font-size="10.5" font-weight="700" fill="var(--danger)">thể hồi phục</text>
        <text x="202" y="116" font-size="10.5" font-weight="700" fill="var(--success)">Hồi phục</text>

        <g transform="translate(112,134)">
          <path d="M18,12 Q45,-2 74,14 Q92,38 78,62 Q48,78 16,66 Q-2,44 18,12 Z" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
          <circle cx="46" cy="38" r="12" fill="#64748b"/>
          <ellipse cx="64" cy="36" rx="10" ry="6" fill="#86efac" stroke="#15803d"/>
        </g>
        <text x="56" y="168" font-size="10.5" font-weight="700" fill="var(--text-muted)">Hình ảnh myelin</text>
        <text x="206" y="168" font-size="10.5" font-weight="700" fill="var(--text-muted)">Phù ER &amp; ti thể</text>
        <text x="206" y="216" font-size="10.5" font-weight="700" fill="var(--text-muted)">Bong bóng màng</text>

        <path d="M158 210 L158 242" stroke="#dc2626" stroke-width="2.8" marker-end="url(#arr37)"/>
        <text x="86" y="232" font-size="10.5" font-weight="800" fill="var(--danger)">Tổn thương tiến triển</text>

        <!-- Cell hoại tử + Viêm -->
        <g transform="translate(112,248)">
          <circle cx="48" cy="44" r="38" fill="#ffe4e6" stroke="#be123c" stroke-width="2.2" stroke-dasharray="6,4"/>
          <circle cx="46" cy="44" r="11" fill="#334155" stroke-dasharray="3,2"/>
          <circle cx="90" cy="22" r="5" fill="#fb7185"/>
          <circle cx="88" cy="68" r="5" fill="#fb7185"/>
        </g>
        <circle cx="52" cy="296" r="20" fill="#fde047" stroke="#a16207" stroke-width="2"/>
        <path d="M44 294 Q52 288 60 296 Q54 304 44 294" fill="#854d0e"/>
        <text x="52" y="330" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--danger)">🔥 VIÊM</text>

        <rect x="206" y="246" width="136" height="44" rx="6" fill="var(--bg-main)" stroke="var(--border)"/>
        <text x="274" y="263" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">Vỡ màng bào tương,</text>
        <text x="274" y="278" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">bào quan, rò rỉ nội chất</text>

        <rect x="206" y="298" width="136" height="32" rx="8" fill="var(--danger-light)" stroke="var(--danger)" stroke-width="2"/>
        <text x="274" y="319" text-anchor="middle" font-size="13" font-weight="800" fill="var(--danger)">HOẠI TỬ</text>
        <text x="206" y="352" font-size="10" font-weight="700" fill="var(--text-muted)">Mật độ vô định hình trong ti thể</text>

        <!-- NHÁNH PHẢI: CHẾT THEO CHƯƠNG TRÌNH -->
        <g transform="translate(425,16)">
          <circle cx="38" cy="36" r="32" fill="#f8fafc" stroke="#0f172a" stroke-width="2"/>
          <circle cx="38" cy="38" r="11" fill="#94a3b8" stroke="#1e293b"/>
          <rect x="86" y="16" width="128" height="36" rx="8" fill="var(--bg-card)" stroke="#0f172a" stroke-width="1.5"/>
          <text x="150" y="32" text-anchor="middle" font-size="11" font-weight="800" fill="var(--text-main)">TẾ BÀO</text>
          <text x="150" y="46" text-anchor="middle" font-size="11" font-weight="800" fill="var(--text-main)">BÌNH THƯỜNG</text>
        </g>

        <path d="M463 90 L463 122" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arr37)"/>

        <g transform="translate(420,126)">
          <path d="M22,12 Q44,0 68,14 Q84,34 66,54 Q40,66 18,52 Q4,34 22,12 Z" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
          <path d="M36 22 A12 12 0 0 1 54 32" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
          <path d="M28 42 A10 10 0 0 0 42 50" fill="none" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>
        </g>
        <text x="518" y="146" font-size="11" font-weight="700" fill="var(--text-main)">Sự cô đặc chromatin</text>
        <text x="518" y="168" font-size="11" font-weight="700" fill="var(--text-main)">Bong bóng màng (giữ màng)</text>

        <path d="M463 196 L463 224" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arr37)"/>

        <g transform="translate(410,228)">
          <circle cx="34" cy="24" r="14" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
          <circle cx="34" cy="24" r="5" fill="#0f172a"/>
          <circle cx="62" cy="18" r="11" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
          <circle cx="62" cy="18" r="4" fill="#0f172a"/>
          <circle cx="54" cy="46" r="13" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
          <circle cx="18" cy="44" r="9" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
        </g>
        <text x="518" y="236" font-size="11" font-weight="700" fill="var(--text-main)">Phân mảnh tế bào</text>
        <text x="380" y="286" font-size="11" font-weight="800" fill="var(--accent)">Thể apoptotic</text>

        <rect x="516" y="248" width="176" height="40" rx="8" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="2"/>
        <text x="604" y="265" text-anchor="middle" font-size="11" font-weight="800" fill="var(--accent)">CHẾT TẾ BÀO THEO</text>
        <text x="604" y="280" text-anchor="middle" font-size="11" font-weight="800" fill="var(--accent)">CHƯƠNG TRÌNH</text>

        <!-- Thực bào không viêm -->
        <g transform="translate(432,300)">
          <path d="M22,12 Q60,0 74,26 Q62,56 26,52 Q-2,36 22,12 Z" fill="#a5f3fc" stroke="#0e7490" stroke-width="2"/>
          <circle cx="34" cy="30" r="7" fill="#0369a1"/>
          <circle cx="52" cy="26" r="6" fill="#0369a1"/>
        </g>
        <text x="388" y="330" font-size="11" font-weight="700" fill="var(--success)">Đại thực bào</text>
        <text x="520" y="324" font-size="10.5" font-weight="700" fill="var(--success)">Thực bào các thể apoptotic</text>
        <text x="520" y="340" font-size="10.5" font-weight="800" fill="var(--success)">✅ KHÔNG gây phản ứng viêm</text>
      </svg>
    `,
    legends: [
      { n: 1, title: "Hoại tử (Nhánh trái)", text: "Chết tế bào thụ động theo đám lớn, mất cân bằng điện giải, sưng phồng và vỡ màng bào tương → giải phóng enzym tiêu thể vào mô kẽ → gây phản ứng viêm cấp." },
      { n: 2, title: "Apoptosis (Nhánh phải)", text: "Tế bào đơn lẻ co nhỏ, cô đặc chromatin thành mảnh bám rìa nhân, tách thành các thể apoptotic còn bọc màng nguyên vẹn (bộc lộ Phosphatidylserine) → được đại thực bào dọn sạch, không gây viêm." }
    ]
  },

  {
    id: "H3.8",
    lessonId: 3,
    chapter: "Chuyên đề I • Bài 3 GPB Đại cương",
    page: "tr. 65",
    type: "photo",
    title: "Hình 3.8. (A) Hoại tử đông • (B) Hoại tử dạng fibrinoid (tơ huyết)",
    caption: "Hình ảnh vi thể phân biệt Hoại tử đông (giữ khung mô, mất nhân, bắt eosin đậm) và Hoại tử dạng fibrinoid (lắng đọng phức hợp miễn dịch/protein trong thành mạch).",
    note: "Mẹo phân biệt thi: Hoại tử đông gặp trong thiếu máu cục bộ ở TẤT CẢ các tạng ĐẶC TRỪ NÃO (não thiếu máu gây hoại tử hóa lỏng / nhũn não!). Hoại tử dạng fibrinoid đặc trưng cho viêm mạch miễn dịch và tăng huyết áp ác tính.",
    panels: [
      {
        label: "A. Hoại tử đông (Coagulative necrosis – Nhồi máu cơ tim)",
        src: "assets/images/h3_8a_coagulative.jpg",
        credit: "Katarzyna Michaud et al. / Wikimedia Commons (CC BY 3.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Histopathology_of_coagulative_necrosis_of_cardiomyocytes.jpg",
        pins: [
          { n: 1, x: 48, y: 35, label: "Sợi cơ tim hoại tử đông", desc: "Tế bào cơ tim đã chết: MẤT NHÂN hoàn toàn, bào tương hồng đậm (tăng bắt eosin) nhưng vẫn bảo tồn khung hình cấu trúc bó sợi cơ." },
          { n: 2, x: 44, y: 68, label: "Thâm nhiễm bạch cầu trung tính", desc: "Bạch cầu đa nhân trung tính tập trung quanh ranh giới vùng hoại tử (đáp ứng viêm dọn dẹp sau nhồi máu 12–24 giờ)." },
          { n: 3, x: 76, y: 85, label: "Vùng cơ tim lành đối chiếu", desc: "Sợi cơ tim phía dưới còn giữ nhân bầu dục xanh tím rõ rệt." }
        ]
      },
      {
        label: "B. Hoại tử dạng fibrinoid trong thành mạch (Viêm mạch)",
        src: "assets/images/h3_8b_fibrinoid.jpg",
        credit: "Elsa Berardi et al. / Wikimedia Commons (CC BY 4.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Cutaneous_polyarteritis_nodosa_histopathology.jpg",
        pins: [
          { n: 1, x: 52, y: 46, label: "Thành tiểu động mạch hoại tử fibrinoid", desc: "Lắng đọng phức hợp miễn dịch và protein huyết tương (fibrin) làm thành mạch dày lên thành dải chất hồng sáng, vô định hình." },
          { n: 2, x: 38, y: 65, label: "Viêm quanh thành mạch", desc: "Bạch cầu trung tính và lympho xâm nhập dày đặc bao quanh mạch máu tổn thương." },
          { n: 3, x: 23, y: 28, label: "Mao mạch nhỏ hoại tử lân cận", desc: "Các nhánh mạch nhỏ kế bên cũng xuất hiện lắng đọng hồng sáng tương tự fibrin." }
        ]
      }
    ]
  },

  {
    id: "H3.9",
    lessonId: 3,
    chapter: "Chuyên đề I • Bài 3 GPB Đại cương",
    page: "tr. 66",
    type: "photo",
    title: "Hình 3.9. (A) Hoại tử bã đậu trong viêm lao • (B) Hoại tử mỡ trong viêm tụy cấp",
    caption: "Hình ảnh vi thể đặc trưng của Hoại tử bã đậu (trung tâm vô định hình không ranh giới + mô hạt lao) và Hoại tử mỡ (xà phòng hóa calci tím đậm).",
    note: "Đại thể bã đậu: trắng vàng, bở, giống pho mát; Vi thể: không còn ranh giới tế bào, bao quanh bởi tế bào dạng biểu mô + đại bào Langhans + lympho bào. Hoại tử mỡ do lipase tụy giải phóng acid béo kết hợp Ca²⁺ tạo muối xà phòng bắt màu tím.",
    panels: [
      {
        label: "A. Hoại tử bã đậu trong u hạt lao",
        src: "assets/images/h3_9a_caseous.jpg",
        credit: "Dept. Pathology, Calicut Medical College / Wikimedia Commons (CC BY-SA 4.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Tuberculous_lymph_node_with_caseating_granuloma_40X.jpg",
        pins: [
          { n: 1, x: 72, y: 24, label: "Trung tâm hoại tử bã đậu", desc: "Vùng chất vô định hình màu hồng nhạt lấm tấm mảnh vụn nhân, hoàn toàn mất ranh giới tế bào và không còn cấu trúc mô gốc." },
          { n: 2, x: 42, y: 54, label: "Vành đai tế bào dạng biểu mô & lympho", desc: "Các đại thực bào biến đổi hình dạng xếp hướng tâm (epithelioid histiocytes) bao quanh ổ bã đậu." },
          { n: 3, x: 20, y: 88, label: "Đại bào Langhans", desc: "Đại bào nhiều nhân xếp hình móng ngựa ở ngoại vi – tiêu chuẩn mô học quan trọng chẩn đoán lao." }
        ]
      },
      {
        label: "B. Hoại tử mỡ & Xà phòng hóa trong viêm tụy cấp",
        src: "assets/images/h3_9b_fat_necrosis.jpg",
        credit: "Patho / Wikimedia Commons (CC BY-SA 3.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Tryptic_fat_tissue_necrosis_in_severe_pancreatitis,_HE_1.JPG",
        pins: [
          { n: 1, x: 15, y: 22, label: "Tế bào mỡ bình thường", desc: "Màng tế bào mỡ nguyên vẹn, sắc nét, hốc bào tương sáng tròn." },
          { n: 2, x: 58, y: 72, label: "Tế bào mỡ hoại tử (bóng ma)", desc: "Tế bào mỡ bị enzym lipase phá hủy mất nhân, bào tương mờ đục ưa eosin hồng nhạt." },
          { n: 3, x: 54, y: 34, label: "Vùng xà phòng hóa lắng đọng calci", desc: "Acid béo tự do kết hợp ion Ca²⁺ tạo muối xà phòng calci lắng đọng bắt màu tím đậm đặc trưng." }
        ]
      }
    ]
  },

  {
    id: "H3.10",
    lessonId: 3,
    chapter: "Chuyên đề I • Bài 3 GPB Đại cương",
    page: "tr. 69",
    type: "photo",
    title: "Hình 3.10. Tinh thể cholesterol tan trong xử lý mô dạng khe sáng hình kim",
    caption: "Tích lũy cholesterol/cholesterol ester để lại các khe sáng hình kim nhọn hai đầu đặc trưng trên tiêu bản H&E.",
    note: "Gặp phổ biến trong xơ vữa động mạch, u vàng (xanthoma), nang chân răng/viêm mạn. Khi xử lý mô bằng dung môi hữu cơ (xylene/cồn), tinh thể cholesterol tan mất để lại các khe trống hình thoi/kim.",
    panels: [
      {
        label: "Khe sáng hình kim của tinh thể cholesterol",
        src: "assets/images/h3_10_cholesterol.jpg",
        credit: "Mikael Häggström / Wikimedia Commons (CC0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Histopathology_of_cholesterol_clefts_of_a_periapical_cyst_of_the_jaw.jpg",
        pins: [
          { n: 1, x: 62, y: 42, label: "Khe sáng hình kim (Cholesterol clefts)", desc: "Các khe trống nhọn hai đầu kéo dài do tinh thể cholesterol bị hòa tan trong quá trình xử lý mô thường quy." },
          { n: 2, x: 46, y: 56, label: "Mô đệm xơ & đại thực bào dị vật", desc: "Phản ứng viêm mạn và mô sợi tăng sinh bao quanh các tinh thể cholesterol." }
        ]
      }
    ]
  },

  {
    id: "H3.11",
    lessonId: 3,
    chapter: "Chuyên đề I • Bài 3 GPB Đại cương",
    page: "tr. 70",
    type: "photo",
    title: "Hình 3.11. Tích lũy glycogen trong bệnh dự trữ glycogen (A: Lam H&E • B: Nhuộm PAS)",
    caption: "Thiếu enzym acid alpha-glucosidase (GAA) làm glycogen tích lũy tạo không bào sáng trên H&E (A) và bắt màu hồng tím rực trên nhuộm PAS (B).",
    note: "Quy tắc vàng khẳng định Glycogen: Khó thấy trên H&E → Nhuộm PAS dương tính (hồng tím) → Xử lý trước bằng enzym Diastase rồi nhuộm lại PAS sẽ MẤT MÀU (PAS âm tính sau tiêu diastase).",
    panels: [
      {
        label: "A. Tích lũy glycogen trên lam H&E (Bệnh Pompe / thiếu GAA)",
        src: "assets/images/h3_11a_glycogen_he.jpg",
        credit: "Jensflorian / Wikimedia Commons (CC BY-SA 3.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Pompe_vacuoles.jpg",
        pins: [
          { n: 1, x: 84, y: 30, label: "Không bào nhỏ trong suốt trên H&E", desc: "Glycogen tích tụ trong bào tương bị rửa trôi một phần tạo các không bào sáng nhỏ li ti trong sợi cơ." },
          { n: 2, x: 30, y: 82, label: "Thoái hóa không bào hóa nặng", desc: "Các sợi cơ phình to và phá vỡ cấu trúc tơ cơ bình thường." }
        ]
      },
      {
        label: "B. Nhuộm PAS phát hiện hạt glycogen màu hồng tím",
        src: "assets/images/h3_11b_glycogen_pas.jpg",
        credit: "Dept. Pathology, Calicut Medical College / Wikimedia Commons (CC BY-SA 4.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Glycogen_storage_disorder_(PAS_stain).jpg",
        pins: [
          { n: 1, x: 50, y: 35, label: "Glycogen bắt màu PAS hồng tím đậm", desc: "Phản ứng Periodic Acid-Schiff (PAS) nhuộm đậm các khối glycogen tích lũy nội bào; sẽ biến mất nếu tiêu trước bằng diastase." },
          { n: 2, x: 35, y: 86, label: "Vùng ít bắt màu đối chứng", desc: "Vùng tế bào/mô đệm ít tích lũy glycogen tạo tương phản rõ rệt." }
        ]
      }
    ]
  },

  {
    id: "H3.12",
    lessonId: 3,
    chapter: "Chuyên đề I • Bài 3 GPB Đại cương",
    page: "tr. 71",
    type: "photo",
    title: "Hình 3.12. (A) Tích lũy melanin trong Nevi trong bì • (B) Tích lũy hemosiderin (Nhuộm Perls')",
    caption: "Phân biệt hai sắc tố nội sinh quan trọng: Melanin nâu vàng trong tế bào hắc tố/nevi (A) và Hemosiderin chứa sắt bắt màu xanh Phổ khi nhuộm Perls' (B).",
    note: "Ghi nhớ sắc tố nội sinh: Lipofuscin ('sắc tố lão hóa' nâu vàng quanh nhân), Melanin (hắc tố bào, Nevi, Melanom, bệnh Addison), Hemosiderin (dự trữ sắt trong đại thực bào ở ổ xuất huyết cũ/ứ huyết mạn → Perls' màu xanh).",
    panels: [
      {
        label: "A. Tích lũy melanin trong bệnh Nevi trong bì",
        src: "assets/images/h3_12a_nevus_melanin.jpg",
        credit: "Mikael Häggström / Wikimedia Commons (CC0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Micrograph_of_an_intradermal_melanocytic_nevus.jpg",
        pins: [
          { n: 1, x: 50, y: 22, label: "Lớp thượng bì da phía trên", desc: "Biểu mô lát tầng sừng hóa bề mặt không bị tế bào u ác tính xâm nhập." },
          { n: 2, x: 42, y: 39, label: "Các ổ tế bào nevi trong bì mang melanin", desc: "Đám tế bào nevi nằm sâu trong lớp bì chứa hạt sắc tố melanin nâu vàng." },
          { n: 3, x: 20, y: 75, label: "Phóng đại tế bào nevi lành tính", desc: "Nhân tế bào tròn đều, không dị dạng, chứa các hạt sắc tố melanin nâu mịn." }
        ]
      },
      {
        label: "B. Tích lũy hemosiderin trong đại thực bào (Nhuộm Perls')",
        src: "assets/images/h3_12b_hemosiderin_perls.jpg",
        credit: "Yale Rosen / Wikimedia Commons (CC BY-SA 2.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Intra-alveolar_hemosiderin_deposition_-_Prussian_blue_stain.jpg",
        pins: [
          { n: 1, x: 38, y: 36, label: "Đại thực bào ăn hemosiderin (Xanh Phổ)", desc: "Nhuộm sắt Perls' biến sắt (Fe³⁺) trong hemosiderin thành màu xanh dương đặc hiệu (Prussian blue), xác nhận xuất huyết cũ hoặc ứ huyết mạn." },
          { n: 2, x: 72, y: 26, label: "Vách phế nang mô phổi", desc: "Cấu trúc nền mô phổi nhuộm đối màu hồng nhạt." }
        ]
      }
    ]
  },

  // ========================================================================
  // BÀI 8 (CHUYÊN ĐỀ II): GIẢI PHẪU BỆNH BƯỚU (HÌNH 8.1 -> 8.21)
  // ========================================================================
  {
    id: "H8.1",
    lessonId: 4,
    chapter: "Chuyên đề II • Bài 8 GPB Đại cương",
    page: "tr. 144",
    type: "photo",
    title: "Hình 8.1. Bướu nhú gai (Squamous cell papilloma)",
    caption: "Bướu biểu mô lành tính phát triển nhô ra ngoài phân nhánh: các nhú có trục liên kết – mạch máu ở giữa và được phủ bởi biểu mô lát tầng.",
    note: "Phân biệt danh pháp biểu mô lành tính: Epithelioma (biểu mô lát tầng), Papilloma (nhô ra ngoài phân nhánh), Adenoma (nguồn gốc tuyến/tạo ống tuyến), Adenomatous polyp (đặc điểm đại thể dạng polyp).",
    panels: [
      {
        label: "Bướu nhú gai (Papilloma)",
        src: "assets/images/h8_1_papilloma.jpg",
        credit: "CoRus13 / Wikimedia Commons (CC BY-SA 4.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Esophageal_squamous_papilloma,_high_mag.jpg",
        pins: [
          { n: 1, x: 43, y: 56, label: "Trục liên kết – mạch máu trung tâm", desc: "Lõi mô liên kết chứa các mao mạch máu nuôi dưỡng các nhánh nhú." },
          { n: 2, x: 25, y: 35, label: "Biểu mô lát tầng lành tính phủ ngoài", desc: "Tế bào gai biệt hóa trưởng thành đều đặn xếp lớp gọn gàng trên màng đáy nguyên vẹn." }
        ]
      }
    ]
  },

  {
    id: "H8.2",
    lessonId: 4,
    chapter: "Chuyên đề II • Bài 8 GPB Đại cương",
    page: "tr. 144",
    type: "photo",
    title: "Hình 8.2. Polyp đại tràng (Hình ảnh đại thể nội soi)",
    caption: "Đoạn đại tràng chứa polyp trơn láng có cuống nhô vào lòng ống tiêu hóa và thao tác cắt polyp qua nội soi.",
    note: "Cảnh báo lâm sàng: Dù bướu tuyến đại tràng (adenoma) là bướu LÀNH tính, nhưng bướu tuyến dạng nhánh (villous adenoma) có nguy cơ hóa ác rất cao (có thể lên đến 50%) thành carcinom tuyến đại trực tràng!",
    panels: [
      {
        label: "Hình ảnh đại thể polyp có cuống qua nội soi đại tràng",
        src: "assets/images/h8_2_colon_polyp.jpg",
        credit: "Gilo1969 / Wikimedia Commons (CC BY-SA 3.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Polypectomy.jpg",
        pins: [
          { n: 1, x: 15, y: 52, label: "Đầu polyp lồi vào lòng đại tràng", desc: "Khối tăng sinh niêm mạc nhô vào lòng đại tràng với bề mặt rõ giới hạn." },
          { n: 2, x: 55, y: 58, label: "Thòng lọng nội soi thắt qua cuống", desc: "Cuống niêm mạc nối polyp với thành ruột cho phép cắt bỏ triệt để qua nội soi." },
          { n: 3, x: 84, y: 48, label: "Vị trí niêm mạc sau cắt polyp", desc: "Kiểm tra cuống cắt sạch hoàn toàn khi tổn thương còn lành tính." }
        ]
      }
    ]
  },

  {
    id: "H8.3",
    lessonId: 4,
    chapter: "Chuyên đề II • Bài 8 GPB Đại cương",
    page: "tr. 145",
    type: "photo",
    title: "Hình 8.3. Bướu quái của buồng trứng (Teratoma)",
    caption: "Bướu đặc biệt phát sinh từ tế bào mầm toàn năng, chứa thành phần mô trưởng thành biệt hóa từ cả 3 lá phôi: biểu mô gai/tuyến bã, mô tuyến, mô mỡ và mô thần kinh.",
    note: "Đừng nhầm lẫn 3 khái niệm ngoài quy tắc: (1) Teratom (bướu thật từ tế bào mầm đa lá phôi); (2) Hamartom (bướu nghịch tạo tại chỗ — mô bình thường của cơ quan đó nhưng xếp lộn xộn, không phải tân sinh thật); (3) Choristom (mô bình thường mọc lạc chỗ giải phẫu, VD mô tụy ở thành dạ dày).",
    panels: [
      {
        label: "Mô học đa dạng lá phôi trong bướu quái trưởng thành buồng trứng",
        src: "assets/images/h8_3_teratoma.jpg",
        credit: "Ed Uthman / Wikimedia Commons (CC BY 2.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Mature_Cystic_Teratoma_of_the_Ovary_(3776273154).jpg",
        pins: [
          { n: 1, x: 21, y: 14, label: "Tuyến bã & biểu mô da (Ngoại bì)", desc: "Cấu trúc phụ thuộc da trưởng thành biệt hóa bình thường." },
          { n: 2, x: 47, y: 45, label: "Biểu mô lát tầng lót vách nang", desc: "Lớp biểu mô gai trưởng thành sản xuất chất sừng vào lòng bọc bì." },
          { n: 3, x: 63, y: 74, label: "Cấu trúc biểu mô tuyến/nhú (Nội bì)", desc: "Các ống tuyến hoặc cấu trúc nhú biệt hóa trưởng thành." },
          { n: 4, x: 92, y: 45, label: "Mô thần kinh đệm & mô mỡ (Trung/Ngoại bì)", desc: "Thành phần mô thần kinh đệm (phải) và tế bào mỡ trưởng thành (góc dưới phải) cùng hiện diện trong một bướu." }
        ]
      }
    ]
  },

  {
    id: "H8.4",
    lessonId: 4,
    chapter: "Chuyên đề II • Bài 8 GPB Đại cương",
    page: "tr. 147",
    type: "photo",
    title: "Hình 8.4. Bướu tuyến đa dạng tuyến mang tai (Pleomorphic adenoma)",
    caption: "Ví dụ kinh điển của bướu hỗn hợp xuất phát từ MỘT dòng tế bào tạo bướu ban đầu nhưng biệt hóa đa dòng thành cả thành phần biểu mô tuyến và mô đệm nhầy–sụn.",
    note: "Dù chứa 2 thành phần mô (biểu mô + mô đệm nhầy/sụn), bướu tuyến đa dạng vẫn mang nguồn gốc di truyền ĐƠN DÒNG (monoclonal) biệt hóa theo 2 hướng.",
    panels: [
      {
        label: "Hai thành phần biểu mô & mô đệm nhầy–sụn",
        src: "assets/images/h8_4_pleomorphic_adenoma.jpg",
        credit: "Wikimedia Commons (CC BY-SA 3.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Pleomorphic_adenoma_(1)_parotid_gland.jpg",
        pins: [
          { n: 1, x: 16, y: 48, label: "Thành phần biểu mô – cơ biểu mô", desc: "Tế bào biểu mô tuyến xếp thành ống tuyến, bè hoặc dải tế bào lành tính." },
          { n: 2, x: 74, y: 48, label: "Mô đệm dạng nhầy – sụn (chondromyxoid)", desc: "Vùng mô đệm ưa base nhạt màu dạng sụn/nhầy hòa lẫn với tế bào cơ biểu mô." }
        ]
      }
    ]
  },

  {
    id: "H8.5",
    lessonId: 4,
    chapter: "Chuyên đề II • Bài 8 GPB Đại cương",
    page: "tr. 150",
    type: "svg",
    title: "Hình 8.5. Hình dạng đại thể của bướu xuất phát từ biểu mô",
    caption: "6 hình thái đại thể kinh điển của bướu biểu mô: dạng phẳng, dạng polyp, dạng nhú (hay gặp ở bướu lành) và dạng nấm/sùi, dạng loét, dạng vòng (hay gặp ở bướu ác).",
    note: "Trong mô tả đại thể một khối bướu cần đủ 6 ý: Vị trí (cơ quan, phân thùy), Hình dạng (đặc/nang/hỗn hợp/nhú/thùy + 6 dạng bề mặt), Kích thước 3 chiều (cm, KHÔNG ví với trái chanh/hột vịt!), Vỏ bao & giới hạn, Màu sắc, Mật độ & chất chứa.",
    svg: `
      <svg viewBox="0 0 720 320" class="fig-svg" role="img" aria-label="Hình 8.5 Hình dạng đại thể bướu biểu mô">
        <!-- 1. Dạng phẳng -->
        <g transform="translate(26,18)">
          <rect x="0" y="34" width="300" height="18" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
          <rect x="0" y="52" width="300" height="22" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
          <path d="M55,34 Q150,20 245,34 L240,42 L60,42 Z" fill="#fdba74" stroke="#9a3412" stroke-width="2"/>
          <text x="150" y="96" text-anchor="middle" font-size="13.5" font-weight="800" fill="var(--text-main)">① Dạng phẳng</text>
        </g>

        <!-- 2. Dạng polyp -->
        <g transform="translate(390,18)">
          <rect x="0" y="42" width="300" height="16" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
          <rect x="0" y="58" width="300" height="20" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
          <path d="M136,42 C136,30 118,22 118,8 C118,-8 182,-8 182,8 C182,22 164,30 164,42 Z" fill="#fdba74" stroke="#9a3412" stroke-width="2"/>
          <text x="150" y="96" text-anchor="middle" font-size="13.5" font-weight="800" fill="var(--success)">② Dạng polyp (có cuống)</text>
        </g>

        <!-- 3. Dạng nhú -->
        <g transform="translate(26,126)">
          <rect x="0" y="38" width="300" height="16" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
          <rect x="0" y="54" width="300" height="20" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
          <path d="M68,38 Q78,-2 90,34 Q104,-6 118,34 Q134,-6 148,34 Q164,-6 178,34 Q194,-4 208,34 Q220,2 230,38 Z" fill="#fde047" stroke="#854d0e" stroke-width="2"/>
          <text x="150" y="94" text-anchor="middle" font-size="13.5" font-weight="800" fill="var(--success)">③ Dạng nhú (phân nhánh)</text>
        </g>

        <!-- 4. Dạng nấm (sùi) -->
        <g transform="translate(390,126)">
          <rect x="0" y="38" width="300" height="16" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
          <rect x="0" y="54" width="300" height="20" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
          <path d="M122,42 L116,28 C96,24 94,-4 150,-4 C206,-4 204,24 184,28 L178,42 L166,64 L134,64 Z" fill="#fca5a5" stroke="#991b1b" stroke-width="2"/>
          <text x="150" y="94" text-anchor="middle" font-size="13.5" font-weight="800" fill="var(--danger)">④ Dạng nấm / sùi (xâm lấn đáy)</text>
        </g>

        <!-- 5. Dạng loét -->
        <g transform="translate(26,226)">
          <rect x="0" y="30" width="300" height="16" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
          <rect x="0" y="46" width="300" height="20" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
          <path d="M62,30 Q84,12 110,28 Q150,46 190,28 Q216,12 238,30 L216,58 L84,58 Z" fill="#fca5a5" stroke="#991b1b" stroke-width="2"/>
          <text x="150" y="84" text-anchor="middle" font-size="13.5" font-weight="800" fill="var(--danger)">⑤ Dạng loét (lõm giữa, bờ gồ)</text>
        </g>

        <!-- 6. Dạng vòng -->
        <g transform="translate(390,226)">
          <ellipse cx="78" cy="36" rx="22" ry="30" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
          <rect x="78" y="6" width="180" height="60" fill="none" stroke="#334155" stroke-width="2"/>
          <path d="M96,6 L204,6 Q178,24 150,24 Q122,24 96,6 Z" fill="#fca5a5" stroke="#991b1b" stroke-width="2"/>
          <path d="M96,66 L204,66 Q178,48 150,48 Q122,48 96,66 Z" fill="#fca5a5" stroke="#991b1b" stroke-width="2"/>
          <ellipse cx="78" cy="36" rx="11" ry="18" fill="#ffffff" stroke="#334155" stroke-width="1.5"/>
          <text x="150" y="84" text-anchor="middle" font-size="13.5" font-weight="800" fill="var(--danger)">⑥ Dạng vòng (siết hẹp lòng ống)</text>
        </g>
      </svg>
    `,
    legends: [
      { n: 1, title: "Dạng phẳng, Polyp & Nhú", text: "Thường lồi khu trú trên bề mặt niêm mạc/da mà không phá vỡ tầng sâu; phổ biến ở bướu biểu mô lành tính (u nhú gai, polyp tuyến)." },
      { n: 2, title: "Dạng nấm (sùi), Loét & Dạng vòng", text: "Thường gặp ở carcinom xâm lấn (chân bướu ăn sâu qua màng đáy xuống lớp dưới niêm/cơ; dạng vòng đặc trưng ở đại tràng trái gây tắc ruột)." }
    ]
  },

  {
    id: "H8.6",
    lessonId: 4,
    chapter: "Chuyên đề II • Bài 8 GPB Đại cương",
    page: "tr. 152",
    type: "svg",
    title: "Hình 8.6. Minh họa mức độ biệt hóa tế bào trong carcinom tuyến",
    caption: "Phổ liên tục từ cấu trúc tuyến biệt hóa hoàn toàn (bình thường, u lành) đến ung thư biệt hóa cao (rõ), vừa và kém.",
    note: "Bướu lành luôn gồm các tế bào và mô biệt hóa hoàn toàn/rõ rệt giống mô gốc. Ngược lại, bướu ác có dải biệt hóa rộng từ cao → vừa → kém → không biệt hóa (thoái sản).",
    svg: `
      <svg viewBox="0 0 720 270" class="fig-svg" role="img" aria-label="Hình 8.6 Mức độ biệt hóa tế bào">
        <!-- 1. Hoàn toàn -->
        <g transform="translate(24,18)">
          <g transform="translate(36,12)">
            <circle cx="0" cy="0" r="24" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/>
            <circle cx="0" cy="0" r="10" fill="#ffffff" stroke="#0369a1"/>
            <circle cx="-16" cy="0" r="3" fill="#1e3a8a"/><circle cx="16" cy="0" r="3" fill="#1e3a8a"/>
            <circle cx="0" cy="-16" r="3" fill="#1e3a8a"/><circle cx="0" cy="16" r="3" fill="#1e3a8a"/>
            <circle cx="-11" cy="-11" r="3" fill="#1e3a8a"/><circle cx="11" cy="-11" r="3" fill="#1e3a8a"/>
            <circle cx="-11" cy="11" r="3" fill="#1e3a8a"/><circle cx="11" cy="11" r="3" fill="#1e3a8a"/>
          </g>
          <g transform="translate(96,20)">
            <circle cx="0" cy="0" r="22" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/>
            <circle cx="0" cy="0" r="9" fill="#ffffff" stroke="#0369a1"/>
            <circle cx="-15" cy="0" r="3" fill="#1e3a8a"/><circle cx="15" cy="0" r="3" fill="#1e3a8a"/>
            <circle cx="0" cy="-15" r="3" fill="#1e3a8a"/><circle cx="0" cy="15" r="3" fill="#1e3a8a"/>
          </g>
          <g transform="translate(64,66)">
            <circle cx="0" cy="0" r="24" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/>
            <circle cx="0" cy="0" r="10" fill="#ffffff" stroke="#0369a1"/>
            <circle cx="-16" cy="0" r="3" fill="#1e3a8a"/><circle cx="16" cy="0" r="3" fill="#1e3a8a"/>
            <circle cx="0" cy="-16" r="3" fill="#1e3a8a"/><circle cx="0" cy="16" r="3" fill="#1e3a8a"/>
          </g>
        </g>

        <!-- 2. Cao (rõ) -->
        <g transform="translate(200,18)">
          <circle cx="72" cy="22" r="24" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
          <circle cx="72" cy="22" r="9" fill="#ffffff" stroke="#0284c7"/>
          <circle cx="44" cy="54" r="26" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
          <ellipse cx="44" cy="54" rx="8" ry="11" fill="#ffffff" stroke="#0284c7"/>
          <circle cx="96" cy="54" r="25" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
          <ellipse cx="96" cy="54" rx="10" ry="7" fill="#ffffff" stroke="#0284c7"/>
          <circle cx="58" cy="22" r="4" fill="#1e3a8a"/><circle cx="86" cy="24" r="4" fill="#1e3a8a"/>
          <circle cx="30" cy="50" r="4" fill="#1e3a8a"/><circle cx="56" cy="64" r="4" fill="#1e3a8a"/>
          <circle cx="84" cy="46" r="4" fill="#1e3a8a"/><circle cx="108" cy="60" r="4" fill="#1e3a8a"/>
        </g>

        <!-- 3. Vừa -->
        <g transform="translate(382,18)">
          <path d="M34,12 Q72,-2 98,20 Q114,54 88,82 Q44,96 22,68 Q12,34 34,12 Z" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
          <circle cx="54" cy="36" r="7" fill="#ffffff"/>
          <circle cx="84" cy="52" r="6" fill="#ffffff"/>
          <circle cx="44" cy="64" r="6" fill="#ffffff"/>
          <circle cx="40" cy="22" r="5" fill="#0f172a"/><circle cx="72" cy="20" r="5.5" fill="#0f172a"/>
          <circle cx="64" cy="48" r="5" fill="#0f172a"/><circle cx="92" cy="34" r="4.5" fill="#0f172a"/>
          <circle cx="32" cy="52" r="5" fill="#0f172a"/><circle cx="74" cy="70" r="5.5" fill="#0f172a"/>
        </g>

        <!-- 4. Kém -->
        <g transform="translate(556,18)">
          <circle cx="34" cy="30" r="14" fill="#60a5fa" stroke="#1e40af" stroke-width="1.8"/><circle cx="34" cy="30" r="6" fill="#0f172a"/>
          <circle cx="68" cy="24" r="16" fill="#60a5fa" stroke="#1e40af" stroke-width="1.8"/><ellipse cx="68" cy="24" rx="7" ry="5" fill="#0f172a"/>
          <circle cx="102" cy="36" r="13" fill="#60a5fa" stroke="#1e40af" stroke-width="1.8"/><circle cx="102" cy="36" r="6" fill="#0f172a"/>
          <circle cx="48" cy="60" r="18" fill="#60a5fa" stroke="#1e40af" stroke-width="1.8"/><circle cx="48" cy="60" r="9" fill="#0f172a"/>
          <circle cx="84" cy="64" r="15" fill="#60a5fa" stroke="#1e40af" stroke-width="1.8"/><circle cx="84" cy="64" r="7" fill="#0f172a"/>
          <circle cx="22" cy="66" r="12" fill="#60a5fa" stroke="#1e40af" stroke-width="1.8"/><circle cx="22" cy="66" r="6" fill="#0f172a"/>
          <circle cx="114" cy="68" r="12" fill="#60a5fa" stroke="#1e40af" stroke-width="1.8"/><circle cx="114" cy="68" r="5" fill="#0f172a"/>
        </g>

        <!-- 4 hộp nhãn mức độ -->
        <rect x="20" y="132" width="145" height="34" rx="8" fill="#0284c7"/>
        <text x="92" y="154" text-anchor="middle" font-size="12.5" font-weight="800" fill="#fff">Hoàn toàn</text>
        <rect x="198" y="132" width="145" height="34" rx="8" fill="#0369a1"/>
        <text x="270" y="154" text-anchor="middle" font-size="12.5" font-weight="800" fill="#fff">Cao (rõ)</text>
        <rect x="376" y="132" width="145" height="34" rx="8" fill="#1d4ed8"/>
        <text x="448" y="154" text-anchor="middle" font-size="12.5" font-weight="800" fill="#fff">Vừa</text>
        <rect x="554" y="132" width="145" height="34" rx="8" fill="#1e3a8a"/>
        <text x="626" y="154" text-anchor="middle" font-size="12.5" font-weight="800" fill="#fff">Kém</text>

        <!-- Thanh Mức độ biệt hóa -->
        <rect x="20" y="176" width="679" height="32" rx="8" fill="#38bdf8"/>
        <text x="360" y="197" text-anchor="middle" font-size="12.5" font-weight="800" fill="#0f172a">MỨC ĐỘ BIỆT HÓA TẾ BÀO &amp; CẤU TRÚC MÔ</text>

        <!-- Thanh Lành vs Ung thư -->
        <rect x="20" y="218" width="145" height="34" rx="8" fill="#22c55e"/>
        <text x="92" y="240" text-anchor="middle" font-size="11.5" font-weight="800" fill="#fff">BÌNH THƯỜNG, U LÀNH</text>
        <rect x="175" y="218" width="524" height="34" rx="8" fill="#f59e0b"/>
        <text x="437" y="240" text-anchor="middle" font-size="12.5" font-weight="800" fill="#ffffff">UNG THƯ (Bướu ác tính: Biệt hóa Cao → Vừa → Kém → Thoái sản)</text>
      </svg>
    `,
    legends: [
      { n: 1, title: "Biệt hóa hoàn toàn (U lành)", text: "Các tuyến tròn đều, tế bào cực tính gọn, nhân nhỏ đồng nhất ở đáy, thực hiện đúng chức năng mô gốc." },
      { n: 2, title: "Ung thư biệt hóa Cao → Vừa → Kém", text: "Càng kém biệt hóa, cấu trúc lòng tuyến càng biến dạng rồi biến mất thành mảng đặc rời rạc; tỷ lệ nhân/bào tương tăng, nhân quái, phân bào nhiều và tiên lượng xấu hơn." }
    ]
  },

  {
    id: "H8.7",
    lessonId: 4,
    chapter: "Chuyên đề II • Bài 8 GPB Đại cương",
    page: "tr. 153",
    type: "photo",
    title: "Hình 8.7. Bướu túi tuyến của tuyến giáp (Follicular adenoma)",
    caption: "Minh họa bướu lành tính còn giữ nguyên cấu trúc và chức năng chuyên biệt giống mô nguyên thủy: tế bào bướu tạo các túi tuyến chứa đầy chất keo giáp.",
    note: "Bướu túi tuyến giáp có vỏ bao xơ rõ; tiêu chuẩn CHẨN ĐOÁN PHÂN BIỆT với carcinom túi tuyến giáp bắt buộc phải khảo sát xem tế bào u có XÂM NHẬP VỎ BAO hoặc XÂM NHẬP MẠCH MÁU hay không (FNA đơn độc không phân biệt được hai loại này!).",
    panels: [
      {
        label: "Bướu túi tuyến giáp biệt hóa tốt tạo keo giáp",
        src: "assets/images/h8_7_follicular_adenoma.jpg",
        credit: "José Manuel Cameselle-Teijeiro et al. / Wikimedia Commons (CC BY 4.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Histopathology_of_hyperfunctioning_and_non-hyperfunctioning_thyroid_follicular_adenoma,_and_follicular_thyroid_carcinoma_with_glomeruloid_pattern.jpg",
        pins: [
          { n: 1, x: 66, y: 33, label: "Chất keo giáp do tế bào bướu tạo (đầu mũi tên)", desc: "Chất keo màu hồng đồng nhất nằm trong lòng túi tuyến chứng tỏ tế bào bướu lành còn chức năng chế tiết giống tuyến giáp bình thường." },
          { n: 2, x: 46, y: 48, label: "Hàng tế bào nang tuyến giáp đồng đều", desc: "Tế bào khối vuông đồng nhất, nhân tròn đều ở giữa/đáy, không có phân bào bất thường." }
        ]
      }
    ]
  },

  {
    id: "H8.8",
    lessonId: 4,
    chapter: "Chuyên đề II • Bài 8 GPB Đại cương",
    page: "tr. 155",
    type: "photo",
    title: "Hình 8.8. Sarcom cơ vân (Rhabdomyosarcoma)",
    caption: "Bướu ác tính nguồn gốc trung mô cơ vân: tế bào bướu dị dạng, kích thước và hình dạng thay đổi lớn, nhân lớn tăng sắc.",
    note: "Tên gọi đúng theo quy tắc danh pháp mô liên kết/cơ: Lành tính cơ vân = Bướu cơ vân (Rhabdomyoma); Ác tính cơ vân = Sarcom cơ vân (Rhabdomyosarcoma).",
    panels: [
      {
        label: "Sarcom cơ vân – Tế bào ác tính mất biệt hóa",
        src: "assets/images/h8_8_rhabdomyosarcoma.jpg",
        credit: "Nephron / Wikimedia Commons (CC BY-SA 3.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Alveolar_rhabdomyosarcoma_-_high_mag.jpg",
        pins: [
          { n: 1, x: 48, y: 52, label: "Tế bào bướu dị dạng, nhân tăng sắc", desc: "Tế bào ác tính nhân tròn/đa diện kích thước không đều, chất nhiễm sắc thô, tỷ lệ N/C rất cao." },
          { n: 2, x: 34, y: 24, label: "Vách xơ – mạch máu nâng đỡ", desc: "Mô đệm sợi chia cắt đám tế bào ác tính thành từng ổ." }
        ]
      }
    ]
  },

  {
    id: "H8.9",
    lessonId: 4,
    chapter: "Chuyên đề II • Bài 8 GPB Đại cương",
    page: "tr. 155",
    type: "photo",
    title: "Hình 8.9. Phân bào bất thường (Phân bào 3 cực)",
    caption: "Hình ảnh phân bào 3 cực điển hình ở tế bào ung thư – dấu hiệu phản ánh rối loạn phân chia nhiễm sắc thể của bướu ác tính.",
    note: "Lưu ý bẫy đề thi: Bản thân sự hiện diện của HÌNH ẢNH PHÂN BÀO bình thường KHÔNG đồng nghĩa ác tính (có thể thấy ở bướu lành hoặc mô tăng sinh mạnh như tủy xương, biểu mô ruột). Chỉ PHÂN BÀO BẤT THƯỜNG (3 cực, 4 cực, đa cực) mới đặc trưng cho ác tính!",
    panels: [
      {
        label: "Phân bào 3 cực trong mô ung thư",
        src: "assets/images/h8_9_tripolar_mitosis.jpg",
        credit: "Ed Uthman / Wikimedia Commons (CC BY-SA 2.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Tripolar_Mitosis_-_breast_carcinoma.jpg",
        pins: [
          { n: 1, x: 51, y: 51, label: "Hình ảnh phân bào 3 cực (Chữ Y)", desc: "Thoi phân bào kéo nhiễm sắc thể về 3 cực khác nhau (thay vì 2 cực bình thường), dẫn đến lệch bội nặng ở các tế bào con." },
          { n: 2, x: 20, y: 48, label: "Nhân tế bào ác tính xung quanh", desc: "Nhân lớn, chất nhiễm sắc phân bố thô không đều, nhiều hạt nhân nổi rõ." }
        ]
      }
    ]
  },

  {
    id: "H8.10",
    lessonId: 4,
    chapter: "Chuyên đề II • Bài 8 GPB Đại cương",
    page: "tr. 156",
    type: "photo",
    title: "Hình 8.10. Biểu mô tuyến đại tràng bình thường vs Carcinom tuyến đại tràng",
    caption: "Vùng chuyển tiếp trực tiếp trên cùng một tiêu bản: niêm mạc đại tràng bình thường (trái/dưới) đối lập với vùng carcinom tuyến phát triển hỗn loạn mất phân cực và xâm nhập (phải).",
    note: "Hãy quan sát 'tính phân cực' (polarity): ở biểu mô lành, nhân xếp ngay ngắn sát màng đáy tạo lòng tuyến đều; ở carcinom tuyến, tế bào chồng chất, mất định hướng và phá vỡ ranh giới màng đáy – cơ niêm.",
    panels: [
      {
        label: "Ranh giới biểu mô lành & Carcinom tuyến đại tràng xâm nhập",
        src: "assets/images/h8_10_colon_adeno.jpg",
        credit: "Ed Uthman / Wikimedia Commons (CC BY-SA 2.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Colonic_Adenocarcinoma_ex_Villous_Adenoma.jpg",
        pins: [
          { n: 1, x: 31, y: 51, label: "Biểu mô tuyến đại tràng bình thường", desc: "Các ống tuyến xếp song song đều đặn, nhiều tế bào đài sáng tiết nhầy bình thường, lớp cơ niêm nguyên vẹn." },
          { n: 2, x: 18, y: 22, label: "Vùng chuyển tiếp u nhú tăng sản", desc: "Tuyến tăng sinh kéo dài, nhân tế bào bắt màu tím sẫm hơn và xếp chồng tầng." },
          { n: 3, x: 78, y: 52, label: "Carcinom tuyến đại tràng xâm lấn", desc: "Các ổ/mảng tế bào tuyến ác tính mất cực tính hoàn toàn, phá vỡ thành ruột xâm nhập sâu vào mô đệm bên phải." }
        ]
      }
    ]
  },

  {
    id: "H8.11",
    lessonId: 4,
    chapter: "Chuyên đề II • Bài 8 GPB Đại cương",
    page: "tr. 156",
    type: "photo",
    title: "Hình 8.11. Carcinom tế bào gai tạo cầu sừng",
    caption: "Trong carcinom tế bào gai biệt hóa tốt, tế bào ác tính vẫn duy trì hoạt động chức năng tạo chất sừng xếp thành các cầu sừng đồng tâm màu hồng.",
    note: "Hoạt động chức năng phản ánh độ biệt hóa: Carcinom tế bào gai biệt hóa tốt tạo CẦU SỪNG; Carcinom tế bào gan biệt hóa tốt bài tiết MẬT; Carcinom phổi đôi khi tiết hormone LẠC CHỖ (ACTH, PTHrP) gây hội chứng cận ung.",
    panels: [
      {
        label: "Cầu sừng đồng tâm trong carcinom tế bào gai biệt hóa tốt",
        src: "assets/images/h8_11_keratin_pearl.jpg",
        credit: "Ed Uthman / Wikimedia Commons (CC BY 2.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Keratin_Pearls_in_Squamous_Cell_Carcinoma_of_the_Larynx_(35398275972).jpg",
        pins: [
          { n: 1, x: 73, y: 44, label: "Cầu sừng lớn điển hình (đầu mũi tên)", desc: "Các lá sừng ái toan bắt màu hồng sáng xếp đồng tâm dạng củ hành do tế bào gai biệt hóa tốt sản xuất." },
          { n: 2, x: 35, y: 38, label: "Cầu sừng nhỏ thứ hai", desc: "Nhiều cầu sừng phân bố xen giữa các đám tế bào u." },
          { n: 3, x: 52, y: 74, label: "Tế bào gai ác tính đa diện", desc: "Nhân lớn dị dạng, hạt nhân rõ, bào tương hồng rộng kèm cầu nối gian bào." }
        ]
      }
    ]
  },

  {
    id: "H8.12",
    lessonId: 4,
    chapter: "Chuyên đề II • Bài 8 GPB Đại cương",
    page: "tr. 157",
    type: "photo",
    title: "Hình 8.12. Carcinom ống tuyến vú xâm lấn với bờ co kéo",
    caption: "Hình ảnh đại thể kinh điển của bướu ác tính: không có vỏ bao rõ, ranh giới tua gai hình sao xâm nhập và co kéo mô mỡ lành xung quanh.",
    note: "Đây là dấu hiệu đại thể kinh điển phân biệt với bướu sợi tuyến vú (Fibroadenoma – tròn nhẵn, có vỏ bao, giới hạn cực rõ, lăn trượt được). Sự co kéo mô đệm là do tăng sinh sợi collagen cứng chắc (desmoplasia) quanh các ổ tế bào ung thư.",
    panels: [
      {
        label: "Mặt cắt đại thể carcinom ống tuyến vú xâm lấn",
        src: "assets/images/h8_12_breast_gross.jpg",
        credit: "John Hayman / Wikimedia Commons (Public Domain)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Breast_cancer.JPG",
        pins: [
          { n: 1, x: 49, y: 49, label: "Khối u đặc trắng xám chắc trung tâm", desc: "Lõi khối ung thư đặc chắc, không đồng nhất và không có vỏ bao xơ ngăn cách." },
          { n: 2, x: 36, y: 32, label: "Bờ co kéo hình sao (tua gai xâm lấn)", desc: "Các dải xơ và tế bào ung thư ăn lan tỏa tia, rút kéo mô xung quanh vào trung tâm u." },
          { n: 3, x: 27, y: 45, label: "Mô mỡ vú lành bị xâm nhập", desc: "Mô mỡ màu vàng bị chia cắt và co kéo mất ranh giới bình thường." }
        ]
      }
    ]
  },

  {
    id: "H8.13",
    lessonId: 5,
    chapter: "Chuyên đề II • Bài 8 GPB Đại cương",
    page: "tr. 166",
    type: "svg",
    title: "Hình 8.13. Sự khởi đầu và phát triển của ung thư do hóa chất",
    caption: "Mô hình sinh ung hóa học 2 giai đoạn: Khởi đầu (Initiation – gây đột biến DNA không hồi phục) và Phát triển/Thúc đẩy (Promotion – tăng sinh mở rộng dòng vô tính tế bào đột biến).",
    note: "Cần ghi nhớ trình tự: Chất khởi đầu (như hydrocarbon đa vòng, benzo[a]pyrene → epoxy ái điện tử) tạo đột biến DNA vĩnh viễn trước; sau đó chất thúc đẩy (promoter như este phorbol, hormone, phenol) tuy KHÔNG gây đột biến nhưng thúc đẩy tăng sinh tạo dòng tiền ung thư → tích lũy thêm đột biến → dòng ác tính.",
    svg: `
      <svg viewBox="0 0 720 440" class="fig-svg" role="img" aria-label="Hình 8.13 Sinh ung do hóa chất">
        <defs>
          <marker id="arr813" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 1 L10 5 L0 9 z" fill="var(--text-main)"/>
          </marker>
        </defs>

        <!-- Bracket Giai đoạn Khởi đầu -->
        <path d="M90 22 L72 22 L72 246 L90 246" fill="none" stroke="var(--primary)" stroke-width="3"/>
        <text x="52" y="134" text-anchor="middle" font-size="12" font-weight="800" fill="var(--primary)" transform="rotate(-90 52 134)">GIAI ĐOẠN KHỞI ĐẦU</text>

        <!-- Bracket Giai đoạn Phát triển -->
        <path d="M90 264 L72 264 L72 414 L90 414" fill="none" stroke="var(--danger)" stroke-width="3"/>
        <text x="52" y="339" text-anchor="middle" font-size="12" font-weight="800" fill="var(--danger)" transform="rotate(-90 52 339)">GIAI ĐOẠN PHÁT TRIỂN</text>

        <!-- 1. Tác nhân gây ung thư -->
        <circle cx="170" cy="34" r="18" fill="#6b21a8"/>
        <text x="200" y="29" font-size="12" font-weight="800" fill="var(--text-main)">TÁC NHÂN GÂY</text>
        <text x="200" y="45" font-size="12" font-weight="800" fill="var(--text-main)">UNG THƯ</text>

        <!-- Nhánh Thải trừ qua thận -->
        <line x1="256" y1="30" x2="364" y2="56" stroke="var(--text-main)" stroke-width="1.8" marker-end="url(#arr813)"/>
        <text x="315" y="30" font-size="10.5" font-weight="700" fill="var(--success)">Giải độc</text>
        <path d="M385 45 C418 40, 424 106, 386 102 C368 98, 372 80, 384 74 C372 68, 368 50, 385 45 Z" fill="#fca5a5" stroke="#b91c1c" stroke-width="2"/>
        <text x="332" y="76" font-size="10.5" font-weight="700" fill="var(--text-muted)">Bài tiết</text>

        <!-- Chuyển hóa tế bào -->
        <line x1="170" y1="54" x2="170" y2="86" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr813)"/>
        <text x="180" y="72" font-size="10.5" font-weight="600" fill="var(--text-muted)">Chuyển hóa tế bào</text>
        <text x="180" y="85" font-size="10" fill="var(--text-muted)">(VD: Cytochrome P-450 → epoxy)</text>

        <!-- 2. Chất trung gian ái điện tử -->
        <circle cx="170" cy="106" r="14" fill="#fbbf24" stroke="#b45309" stroke-width="2"/>
        <text x="195" y="102" font-size="11.5" font-weight="800" fill="var(--warning)">Chất trung gian ái điện tử</text>
        <line x1="364" y1="86" x2="306" y2="104" stroke="var(--text-main)" stroke-width="1.8" marker-end="url(#arr813)" opacity="0.6"/>
        <path d="M294 104 L366 84" stroke="var(--success)" stroke-width="1.8" marker-end="url(#arr813)"/>
        <text x="336" y="109" font-size="10.5" font-weight="700" fill="var(--success)">Giải độc</text>

        <line x1="170" y1="122" x2="170" y2="152" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr813)"/>

        <!-- 3. Hợp chất gắn DNA -->
        <rect x="136" y="154" width="68" height="30" rx="8" fill="#cbd5e1" stroke="#334155" stroke-width="1.8"/>
        <path d="M148 169 Q160 160 172 169 T192 169" fill="none" stroke="#1e3a8a" stroke-width="2"/>
        <text x="214" y="166" font-size="11" font-weight="700" fill="var(--text-main)">Hợp chất gắn</text>
        <text x="214" y="180" font-size="11" font-weight="700" fill="var(--text-main)">kết với DNA</text>

        <!-- Nhánh Sửa chữa DNA & Chết tế bào -->
        <polyline points="204,162 290,162 290,136 390,136" fill="none" stroke="var(--success)" stroke-width="2" marker-end="url(#arr813)"/>
        <text x="288" y="130" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--success)">Sửa chữa DNA</text>
        <rect x="400" y="122" width="64" height="28" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.8"/>
        <text x="476" y="140" font-size="11.5" font-weight="800" fill="var(--success)">Tế bào bình thường</text>

        <polyline points="204,174 290,174 290,192 390,192" fill="none" stroke="var(--accent)" stroke-width="2" marker-end="url(#arr813)"/>
        <circle cx="426" cy="192" r="18" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.8" stroke-dasharray="4,2"/>
        <text x="454" y="196" font-size="11.5" font-weight="800" fill="var(--accent)">Sự chết tế bào (Apoptosis)</text>

        <!-- 4. Tổn thương vĩnh viễn DNA -->
        <line x1="170" y1="186" x2="170" y2="218" stroke="var(--danger)" stroke-width="2.2" marker-end="url(#arr813)"/>
        <rect x="136" y="220" width="68" height="28" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
        <text x="214" y="232" font-size="11" font-weight="800" fill="var(--danger)">Tổn thương vĩnh viễn DNA</text>
        <text x="214" y="246" font-size="10.5" font-weight="700" fill="var(--text-muted)">(VD: Đột biến kích hoạt RAS, TP53)</text>
        <text x="170" y="264" text-anchor="middle" font-size="12" font-weight="800" fill="var(--primary)">Tế bào khởi đầu</text>

        <!-- 5. Dòng tiền ung thư -->
        <line x1="170" y1="272" x2="170" y2="306" stroke="var(--danger)" stroke-width="2.2" marker-end="url(#arr813)"/>
        <text x="184" y="294" font-size="10.5" font-weight="700" fill="var(--warning)">Tác động chất thúc đẩy (Promoter: hormon, phenol, phorbol)</text>
        <rect x="130" y="310" width="80" height="34" rx="10" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
        <text x="224" y="324" font-size="11" font-weight="700" fill="var(--text-main)">Tăng sinh tế bào &amp; biến đổi biệt hóa</text>
        <text x="170" y="358" text-anchor="middle" font-size="12" font-weight="800" fill="var(--warning)">DÒNG TIỀN UNG THƯ</text>

        <!-- 6. Dòng ác tính -->
        <line x1="170" y1="364" x2="170" y2="394" stroke="var(--danger)" stroke-width="2.5" marker-end="url(#arr813)"/>
        <rect x="122" y="396" width="96" height="32" rx="10" fill="#fecdd3" stroke="#be123c" stroke-width="2.2"/>
        <text x="232" y="410" font-size="11.5" font-weight="800" fill="var(--danger)">Tăng sinh liên tục &amp; Tích lũy đột biến gen khác</text>
        <text x="232" y="425" font-size="12" font-weight="800" fill="var(--danger)">→ DÒNG ÁC TÍNH</text>
      </svg>
    `,
    legends: [
      { n: 1, title: "Giai đoạn Khởi đầu (Initiation)", text: "Hóa chất trực tiếp hoặc gián tiếp (qua cytochrome P-450 tạo chất ái điện tử như benzo[a]pyrene epoxy) gắn DNA tạo đột biến vĩnh viễn nếu sửa chữa DNA & apoptosis thất bại." },
      { n: 2, title: "Giai đoạn Phát triển (Promotion)", text: "Các chất thúc đẩy (không tự gây đột biến) kích thích tế bào khởi đầu tăng sinh mở rộng dòng vô tính → dễ tích lũy thêm đột biến → ung thư xâm lấn." }
    ]
  },

  {
    id: "H8.14",
    lessonId: 5,
    chapter: "Chuyên đề II • Bài 8 GPB Đại cương",
    page: "tr. 168",
    type: "svg",
    title: "Hình 8.14. Khả năng biến đổi của protein E6 và E7 của HPV",
    caption: "Cơ chế sinh ung phân tử của hai gen virus HPV nguy cơ cao (type 16, 18): E6 bất hoạt p53 & tăng telomerase; E7 bất hoạt RB & ức chế p21.",
    note: "Câu hỏi cực hay thi: E6 của HPV nguy cơ cao có ái lực gắn và làm phân hủy P53 cao hơn HPV nguy cơ thấp, đồng thời tăng biểu hiện TERT (telomerase). Trong khi đó E7 giải phóng E2F khỏi RB và ức chế p21 để đẩy chu kỳ tế bào G1-S.",
    svg: `
      <svg viewBox="0 0 720 350" class="fig-svg" role="img" aria-label="Hình 8.14 Cơ chế E6 và E7 của HPV">
        <defs>
          <marker id="arr814" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 1 L10 5 L0 9 z" fill="var(--text-main)"/>
          </marker>
          <marker id="inh814" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <line x1="8" y1="1" x2="8" y2="9" stroke="#dc2626" stroke-width="2.5"/>
          </marker>
        </defs>

        <!-- HPV Top -->
        <rect x="315" y="10" width="90" height="30" rx="8" fill="#831843"/>
        <text x="360" y="30" text-anchor="middle" font-size="13" font-weight="800" fill="#fff">HPV (16, 18)</text>

        <line x1="330" y1="40" x2="225" y2="66" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr814)"/>
        <line x1="390" y1="40" x2="495" y2="66" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr814)"/>

        <!-- E6 -->
        <ellipse cx="215" cy="78" rx="34" ry="18" fill="#1e3a8a"/>
        <text x="215" y="83" text-anchor="middle" font-size="13" font-weight="800" fill="#fff">E6</text>

        <!-- E6 nhánh trái -> TERT -> Telomerase -->
        <line x1="184" y1="88" x2="128" y2="126" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr814)"/>
        <text x="115" y="138" text-anchor="middle" font-size="12" font-weight="800" fill="var(--accent)">TERT</text>
        <line x1="92" y1="142" x2="68" y2="164" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr814)"/>
        <rect x="20" y="168" width="96" height="44" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
        <text x="68" y="187" text-anchor="middle" font-size="11" font-weight="800" fill="#92400e">Telomerase</text>
        <text x="68" y="203" text-anchor="middle" font-size="9.5" fill="#92400e">Kéo dài Telomere</text>
        <text x="68" y="268" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--text-main)">Tăng cường biểu hiện</text>
        <text x="68" y="282" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--text-main)">enzyme telomerase</text>

        <!-- E6 nhánh phải -> p53 -->
        <line x1="230" y1="94" x2="265" y2="128" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr814)"/>
        <text x="278" y="114" font-size="10" font-weight="700" fill="var(--text-muted)">E6 gắn vào p53</text>
        <circle cx="282" cy="148" r="20" fill="#86efac" stroke="#15803d" stroke-width="2"/>
        <text x="282" y="153" text-anchor="middle" font-size="12" font-weight="800" fill="#14532d">p53</text>
        <ellipse cx="250" cy="148" rx="18" ry="12" fill="#1e3a8a"/>
        <text x="250" y="152" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">E6</text>
        <line x1="274" y1="170" x2="274" y2="210" stroke="#dc2626" stroke-width="2.2" marker-end="url(#arr814)"/>
        <rect x="206" y="214" width="136" height="36" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="1.8"/>
        <text x="274" y="236" text-anchor="middle" font-size="11" font-weight="800" fill="#991b1b">Protein p53 phân hủy</text>
        <text x="274" y="275" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--danger)">Ức chế hoạt động p53</text>

        <!-- E7 -->
        <ellipse cx="505" cy="78" rx="34" ry="18" fill="#0e7490"/>
        <text x="505" y="83" text-anchor="middle" font-size="13" font-weight="800" fill="#fff">E7</text>

        <!-- E7 nhánh trái -> RB/E2F -->
        <line x1="485" y1="94" x2="452" y2="128" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr814)"/>
        <rect x="382" y="130" width="76" height="38" rx="8" fill="#c084fc" stroke="#6b21a8" stroke-width="1.8"/>
        <text x="420" y="148" text-anchor="middle" font-size="11.5" font-weight="800" fill="#fff">RB</text>
        <rect x="394" y="152" width="52" height="20" rx="5" fill="#fff" stroke="#6b21a8"/>
        <text x="420" y="166" text-anchor="middle" font-size="10" font-weight="800" fill="#6b21a8">E2F</text>
        <ellipse cx="476" cy="148" rx="18" ry="11" fill="#0e7490"/>
        <text x="476" y="152" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">E7</text>
        <text x="456" y="188" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--text-muted)">E7 gắn RB → E2F mất ức chế</text>

        <line x1="420" y1="196" x2="420" y2="218" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr814)"/>
        <rect x="388" y="220" width="64" height="28" rx="6" fill="#fef08a" stroke="#ca8a04" stroke-width="1.8"/>
        <text x="420" y="238" text-anchor="middle" font-size="11.5" font-weight="800" fill="#854d0e">E2F</text>
        <text x="460" y="232" font-size="9.5" font-weight="700" fill="var(--text-main)">E2F kích hoạt</text>
        <text x="460" y="245" font-size="9.5" font-weight="700" fill="var(--text-main)">phiên mã pha S</text>

        <!-- E7 nhánh phải -> ức chế p21 -->
        <line x1="530" y1="92" x2="588" y2="128" stroke="#dc2626" stroke-width="2.2" marker-end="url(#inh814)"/>
        <text x="598" y="114" font-size="10" font-weight="800" fill="#dc2626">Ức chế p21</text>
        <rect x="572" y="132" width="52" height="28" rx="6" fill="#fed7aa" stroke="#ea580c" stroke-width="1.8"/>
        <text x="598" y="150" text-anchor="middle" font-size="11.5" font-weight="800" fill="#9a3412">p21</text>

        <line x1="598" y1="162" x2="598" y2="206" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr814)"/>
        <circle cx="598" cy="222" r="17" fill="#93c5fd" stroke="#1e40af" stroke-width="1.8"/>
        <text x="598" y="226" text-anchor="middle" font-size="9.5" font-weight="800" fill="#1e3a8a">Cyc D</text>
        <rect x="572" y="238" width="52" height="22" rx="6" fill="#475569"/>
        <text x="598" y="253" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">CDK4</text>
        <text x="634" y="230" font-size="9.5" font-weight="700" fill="var(--text-main)">↑ Hoạt động</text>
        <text x="634" y="243" font-size="9.5" font-weight="700" fill="var(--text-main)">CDK4/cyclin D</text>
        <text x="525" y="282" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--accent)">Chu kỳ tế bào tiếp diễn (G1→S)</text>

        <!-- Thanh kết quả cuối -->
        <rect x="20" y="302" width="680" height="34" rx="8" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
        <text x="140" y="324" text-anchor="middle" font-size="12" font-weight="800" fill="#14532d">BẤT TỬ HÓA</text>
        <text x="360" y="324" text-anchor="middle" font-size="12" font-weight="800" fill="#14532d">•  TĂNG CƯỜNG TĂNG SINH TẾ BÀO  •</text>
        <text x="595" y="324" text-anchor="middle" font-size="12" font-weight="800" fill="#14532d">BẤT ỔN ĐỊNH BỘ GEN</text>
      </svg>
    `,
    legends: [
      { n: 1, title: "Protein E6 của HPV", text: "Gắn và dẫn tới phân hủy P53 (mất chốt kiểm soát DNA/apoptosis) + tăng biểu hiện TERT (bất tử hóa tế bào nhờ telomerase)." },
      { n: 2, title: "Protein E7 của HPV", text: "Gắn RB làm giải phóng E2F kích hoạt phiên mã pha S + ức chế chất kìm hãm CDK p21 làm tăng hoạt động phức hợp CDK4/cyclin D." }
    ]
  },

  {
    id: "H8.15",
    lessonId: 5,
    chapter: "Chuyên đề II • Bài 8 GPB Đại cương",
    page: "tr. 169",
    type: "svg",
    title: "Hình 8.15. Các giai đoạn phát triển của lymphom Burkitt do EBV gây ra",
    caption: "Quá trình từ nhiễm EBV tiềm ẩn tế bào B (qua thụ thể CD21) → tăng sinh đa dòng (EBNA2, LMP1) → né tránh CTL → đột biến chuyển vị MYC t(8;14) → lymphom Burkitt.",
    note: "Ở người có hệ miễn dịch bình thường, tế bào T gây độc (CTL) đặc hiệu EBV khống chế sự tăng sinh đa dòng tế bào B. Khi suy giảm miễn dịch (hoặc đồng nhiễm sốt rét lưu hành châu Phi) kết hợp giảm biểu hiện gen EBV và đột biến chuyển vị t(8;14) hoạt hóa MYC, dòng B ác tính bùng phát.",
    svg: `
      <svg viewBox="0 0 720 330" class="fig-svg" role="img" aria-label="Hình 8.15 Lymphom Burkitt do EBV">
        <defs>
          <marker id="arr815" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 1 L10 5 L0 9 z" fill="var(--text-main)"/>
          </marker>
        </defs>

        <!-- 3 Khung tiêu đề trên -->
        <rect x="14" y="10" width="150" height="38" rx="8" fill="var(--bg-main)" stroke="var(--accent)" stroke-width="1.6"/>
        <text x="89" y="27" text-anchor="middle" font-size="11" font-weight="800" fill="var(--accent)">1. Nhiễm EBV tiềm ẩn</text>
        <text x="89" y="41" text-anchor="middle" font-size="10" fill="var(--text-muted)">Gắn CD21 trên TB B</text>

        <rect x="180" y="10" width="160" height="38" rx="8" fill="var(--bg-main)" stroke="var(--primary)" stroke-width="1.6"/>
        <text x="260" y="27" text-anchor="middle" font-size="11" font-weight="800" fill="var(--primary)">2. Tăng sinh TB B đa dòng</text>
        <text x="260" y="41" text-anchor="middle" font-size="10" fill="var(--text-muted)">EBNA2, LMP1 kích hoạt</text>

        <rect x="358" y="10" width="174" height="38" rx="8" fill="var(--bg-main)" stroke="var(--warning)" stroke-width="1.6"/>
        <text x="445" y="27" text-anchor="middle" font-size="11" font-weight="800" fill="var(--warning)">3. Thoát CTL &amp; t(8;14)</text>
        <text x="445" y="41" text-anchor="middle" font-size="10" fill="var(--text-muted)">↑ Hoạt động protein MYC</text>

        <rect x="548" y="10" width="158" height="38" rx="8" fill="var(--danger-light)" stroke="var(--danger)" stroke-width="1.8"/>
        <text x="627" y="27" text-anchor="middle" font-size="11" font-weight="800" fill="var(--danger)">4. Lymphoma Burkitt</text>
        <text x="627" y="41" text-anchor="middle" font-size="10" fill="var(--danger)">Phát triển quá mức dòng B</text>

        <!-- Cột 1: EBV + CD21 -> TB B -->
        <circle cx="88" cy="108" r="32" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
        <text x="88" y="112" text-anchor="middle" font-size="11" font-weight="800" fill="#1e3a8a">Tế bào B</text>
        <circle cx="52" cy="74" r="10" fill="#0f172a"/>
        <text x="88" y="74" font-size="10" font-weight="800" fill="var(--text-main)">← EBV + CD21</text>

        <line x1="88" y1="144" x2="88" y2="176" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr815)"/>

        <circle cx="88" cy="218" r="36" fill="#60a5fa" stroke="#1d4ed8" stroke-width="2"/>
        <circle cx="88" cy="218" r="20" fill="#e0f2fe" stroke="#0369a1" stroke-width="2" stroke-dasharray="4,2"/>
        <text x="88" y="270" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--accent)">Bộ gen EBV:</text>
        <text x="88" y="286" text-anchor="middle" font-size="11" font-weight="800" fill="var(--primary)">EBNA2 • LMP1</text>

        <!-- Cột 2: Tăng sinh đa dòng + CTL -->
        <line x1="132" y1="205" x2="176" y2="205" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr815)"/>
        <g transform="translate(184,158)">
          <circle cx="26" cy="24" r="16" fill="#93c5fd" stroke="#1d4ed8"/>
          <circle cx="62" cy="20" r="18" fill="#60a5fa" stroke="#1d4ed8"/>
          <circle cx="44" cy="54" r="17" fill="#bae6fd" stroke="#0284c7"/>
          <circle cx="78" cy="54" r="15" fill="#93c5fd" stroke="#1d4ed8"/>
          <circle cx="24" cy="88" r="18" fill="#60a5fa" stroke="#1d4ed8"/>
          <circle cx="64" cy="90" r="16" fill="#93c5fd" stroke="#1d4ed8"/>
        </g>

        <!-- CTL kiểm soát phía trên -->
        <circle cx="272" cy="96" r="18" fill="#334155" stroke="#0f172a" stroke-width="2"/>
        <text x="272" y="100" text-anchor="middle" font-size="9.5" font-weight="800" fill="#fff">CTL</text>
        <text x="300" y="90" font-size="10" font-weight="700" fill="var(--text-main)">Tế bào T gây độc</text>
        <text x="300" y="103" font-size="10" font-weight="700" fill="var(--text-main)">đặc hiệu EBV</text>
        <line x1="256" y1="112" x2="236" y2="146" stroke="#dc2626" stroke-width="2" marker-end="url(#arr815)"/>
        <line x1="272" y1="116" x2="272" y2="144" stroke="#dc2626" stroke-width="2" marker-end="url(#arr815)"/>
        <text x="278" y="140" font-size="9.5" font-weight="700" fill="var(--danger)">Tiêu diệt TB B (kiểm soát)</text>

        <!-- Thoát miễn dịch xuống -->
        <line x1="274" y1="248" x2="356" y2="248" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr815)"/>
        <rect x="274" y="256" width="128" height="38" rx="6" fill="var(--bg-main)" stroke="var(--border)"/>
        <text x="338" y="272" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--text-main)">↓ biểu hiện gen EBV</text>
        <text x="338" y="286" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--danger)">Thoát khỏi miễn dịch</text>

        <!-- Cột 3: Chuyển vị t(8;14) MYC -->
        <rect x="404" y="64" width="114" height="148" rx="10" fill="var(--bg-card)" stroke="var(--warning)" stroke-width="2"/>
        <text x="461" y="82" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--warning)">Chuyển vị MYC</text>
        <text x="461" y="96" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-muted)">NST 8  ⇄  NST 14</text>
        <rect x="424" y="106" width="12" height="58" rx="5" fill="#67e8f9" stroke="#0e7490" stroke-width="1.5"/>
        <rect x="424" y="166" width="12" height="20" rx="4" fill="#fca5a5" stroke="#991b1b" stroke-width="1.5"/>
        <text x="430" y="202" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--text-main)">8</text>
        <rect x="484" y="106" width="12" height="50" rx="5" fill="#93c5fd" stroke="#1e40af" stroke-width="1.5"/>
        <rect x="484" y="158" width="12" height="28" rx="4" fill="#67e8f9" stroke="#0e7490" stroke-width="1.5"/>
        <text x="490" y="202" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--text-main)">14</text>
        <text x="460" y="148" text-anchor="middle" font-size="14" font-weight="800" fill="#dc2626">→</text>

        <circle cx="430" cy="248" r="18" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
        <line x1="450" y1="248" x2="486" y2="248" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr815)"/>
        <rect x="488" y="232" width="32" height="32" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
        <text x="504" y="252" text-anchor="middle" font-size="9.5" font-weight="800" fill="#991b1b">MYC</text>
        <text x="468" y="286" text-anchor="middle" font-size="9.8" font-weight="700" fill="var(--danger)">Đứt gãy NST &amp; Tích lũy đột biến</text>

        <!-- Cột 4: Lymphom Burkitt -->
        <line x1="522" y1="248" x2="554" y2="248" stroke="var(--danger)" stroke-width="2.5" marker-end="url(#arr815)"/>
        <g transform="translate(558,196)">
          <circle cx="34" cy="28" r="22" fill="#be185d" stroke="#831843" stroke-width="2"/>
          <circle cx="34" cy="28" r="10" fill="#fbcfe8"/>
          <circle cx="78" cy="24" r="24" fill="#9d174d" stroke="#831843" stroke-width="2"/>
          <circle cx="78" cy="24" r="11" fill="#fbcfe8"/>
          <circle cx="52" cy="70" r="24" fill="#be185d" stroke="#831843" stroke-width="2"/>
          <circle cx="52" cy="70" r="11" fill="#fbcfe8"/>
          <circle cx="96" cy="68" r="22" fill="#9d174d" stroke="#831843" stroke-width="2"/>
          <circle cx="96" cy="68" r="10" fill="#fbcfe8"/>
        </g>
        <text x="626" y="308" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--danger)">Dòng B ác tính (Burkitt)</text>
      </svg>
    `,
    legends: [
      { n: 1, title: "Xâm nhập & Tăng sinh đa dòng", text: "EBV bám thụ thể CD21 trên tế bào B; các protein virus (EBNA2, LMP1) kích thích tăng sinh đa dòng tế bào B." },
      { n: 2, title: "Chuyển vị MYC t(8;14)", text: "Khi thoát kiểm soát CTL (suy giảm miễn dịch) và giảm biểu hiện kháng nguyên EBV, tế bào B tích lũy chuyển vị t(8;14) đặt gen MYC dưới promoter chuỗi nặng Ig → tăng sinh ác tính đơn dòng." }
    ]
  },

  {
    id: "H8.16",
    lessonId: 6,
    chapter: "Chuyên đề II • Bài 8 GPB Đại cương",
    page: "tr. 172",
    type: "svg",
    title: "Hình 8.16. Trao đổi chất và tăng trưởng tế bào (Hiệu ứng Warburg)",
    caption: "Tế bào nghỉ chuyển hóa glucose hoàn toàn qua chu trình Krebs tại ty thể để tối ưu ATP. Ngược lại, tế bào tăng trưởng/ung thư (qua RAS–PI3K–AKT & MYC) ưu tiên đường phân hiếu khí (tạo lactate) nhằm tích lũy nguyên liệu xây dựng tế bào mới.",
    note: "Tại sao ung thư lại dùng con đường đường phân hiếu khí kém hiệu quả ATP? Vì tế bào ung thư cần CÁC CHẤT TRUNG GIAN ĐƯỜNG PHÂN và chu trình Krebs để tổng hợp nucleotid, acid amin, protein và lipid cho việc phân chia liên tục!",
    svg: `
      <svg viewBox="0 0 720 380" class="fig-svg" role="img" aria-label="Hình 8.16 Hiệu ứng Warburg">
        <defs>
          <marker id="arr816" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 1 L10 5 L0 9 z" fill="var(--text-main)"/>
          </marker>
        </defs>

        <!-- Tiêu đề 2 tế bào -->
        <rect x="44" y="10" width="130" height="28" rx="6" fill="#d9f99d" stroke="#4d7c0f" stroke-width="1.8"/>
        <text x="109" y="29" text-anchor="middle" font-size="12" font-weight="800" fill="#365314">TẾ BÀO NGHỈ</text>

        <rect x="275" y="10" width="330" height="28" rx="6" fill="#fef3c7" stroke="#b45309" stroke-width="1.8"/>
        <text x="440" y="29" text-anchor="middle" font-size="11.5" font-weight="800" fill="#78350f">TẾ BÀO TĂNG TRƯỞNG (KHỎE MẠNH / KHỐI U)</text>

        <!-- Tế bào trái: Tế bào nghỉ -->
        <rect x="24" y="64" width="174" height="236" rx="28" fill="var(--bg-card)" stroke="#334155" stroke-width="2.5"/>
        <polygon points="118,46 126,52 122,60 112,60 108,52" fill="#a855f7"/>
        <text x="132" y="56" font-size="10" font-weight="700" fill="var(--text-main)">Glucose</text>
        <line x1="6" y1="130" x2="72" y2="130" stroke="#334155" stroke-width="2" marker-end="url(#arr816)"/>
        <text x="8" y="122" font-size="10" font-weight="700" fill="var(--text-muted)">Lipid</text>
        <circle cx="110" cy="126" r="22" fill="#ecfeff" stroke="#0891b2" stroke-width="1.5"/>
        <text x="110" y="130" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0e7490">Tiêu thể</text>
        <text x="155" y="102" font-size="9.5" font-weight="700" fill="var(--text-muted)">Tự thực</text>
        <text x="72" y="166" text-anchor="middle" font-size="9" fill="var(--text-muted)">Hấp thu lipid &amp; aa</text>

        <!-- Ty thể tế bào nghỉ -->
        <ellipse cx="110" cy="236" rx="60" ry="30" fill="#fca5a5" stroke="#dc2626" stroke-width="2"/>
        <text x="110" y="232" text-anchor="middle" font-size="10.5" font-weight="800" fill="#7f1d1d">Chu trình</text>
        <text x="110" y="246" text-anchor="middle" font-size="10.5" font-weight="800" fill="#7f1d1d">Krebs</text>
        <line x1="90" y1="268" x2="90" y2="314" stroke="#16a34a" stroke-width="2.2" marker-end="url(#arr816)"/>
        <line x1="130" y1="268" x2="130" y2="314" stroke="#64748b" stroke-width="2" marker-end="url(#arr816)"/>
        <text x="90" y="330" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--success)">ATP</text>
        <text x="130" y="330" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--text-muted)">CO₂</text>

        <!-- Tế bào phải: Tế bào tăng trưởng / khối u -->
        <rect x="236" y="64" width="388" height="296" rx="28" fill="var(--bg-card)" stroke="#0f172a" stroke-width="2.5"/>
        <circle cx="348" cy="52" r="8" fill="#ef4444"/>
        <text x="300" y="48" font-size="9.5" font-weight="700" fill="var(--danger)">Yếu tố tăng trưởng</text>
        <text x="366" y="56" font-size="10" font-weight="800" fill="var(--text-main)">RTK</text>

        <polygon points="462,48 470,54 466,62 456,62 452,54" fill="#a855f7"/>
        <text x="480" y="56" font-size="10.5" font-weight="800" fill="var(--purple)">Glucose</text>
        <text x="518" y="78" font-size="9.5" fill="var(--text-muted)">Kênh vận chuyển</text>

        <!-- Chuỗi RAS -> PI3K -> AKT -> MYC -->
        <rect x="282" y="76" width="44" height="24" rx="5" fill="#fdba74" stroke="#c2410c"/>
        <text x="304" y="92" text-anchor="middle" font-size="10.5" font-weight="800" fill="#7c2d12">RAS</text>
        <line x1="304" y1="100" x2="304" y2="122" stroke="var(--text-main)" stroke-width="1.8" marker-end="url(#arr816)"/>
        <rect x="282" y="124" width="44" height="24" rx="5" fill="#fdba74" stroke="#c2410c"/>
        <text x="304" y="140" text-anchor="middle" font-size="10.5" font-weight="800" fill="#7c2d12">PI3K</text>
        <line x1="304" y1="148" x2="304" y2="170" stroke="var(--text-main)" stroke-width="1.8" marker-end="url(#arr816)"/>
        <rect x="282" y="172" width="44" height="24" rx="5" fill="#fdba74" stroke="#c2410c"/>
        <text x="304" y="188" text-anchor="middle" font-size="10.5" font-weight="800" fill="#7c2d12">AKT</text>

        <line x1="274" y1="100" x2="274" y2="232" stroke="var(--success)" stroke-width="1.8" marker-end="url(#arr816)"/>
        <polygon points="274,234 294,244 294,264 274,274 254,264 254,244" fill="#bbf7d0" stroke="#15803d"/>
        <text x="274" y="258" text-anchor="middle" font-size="10" font-weight="800" fill="#14532d">MYC</text>

        <!-- Đường phân hiếu khí -->
        <line x1="462" y1="70" x2="462" y2="108" stroke="var(--purple)" stroke-width="2.2" marker-end="url(#arr816)"/>
        <text x="462" y="122" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">Glucose-6-phosphate</text>
        <text x="462" y="136" text-anchor="middle" font-size="9" fill="var(--accent)">↑ Trung gian đường phân</text>
        <line x1="462" y1="142" x2="462" y2="164" stroke="var(--purple)" stroke-width="2" marker-end="url(#arr816)"/>
        <text x="462" y="176" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--text-main)">Phosphoenolpyruvate</text>
        <rect x="424" y="182" width="26" height="18" rx="4" fill="#fef08a" stroke="#ca8a04"/>
        <text x="437" y="195" text-anchor="middle" font-size="9.5" font-weight="800" fill="#854d0e">PK</text>
        <line x1="462" y1="184" x2="462" y2="210" stroke="var(--text-main)" stroke-width="1.8" marker-end="url(#arr816)"/>
        <text x="462" y="222" text-anchor="middle" font-size="10" font-weight="800" fill="var(--text-main)">Pyruvate</text>

        <!-- Lactate (Warburg) -->
        <polyline points="462,228 462,244 492,244" fill="none" stroke="#dc2626" stroke-width="2.2" marker-end="url(#arr816)"/>
        <text x="518" y="248" font-size="11" font-weight="800" fill="var(--danger)">Lactate (Warburg)</text>

        <!-- Ty thể tăng trưởng -->
        <ellipse cx="426" cy="298" rx="68" ry="30" fill="#fca5a5" stroke="#dc2626" stroke-width="2"/>
        <text x="426" y="294" text-anchor="middle" font-size="9.5" font-weight="800" fill="#7f1d1d">Chuyển hóa ty thể</text>
        <text x="426" y="308" text-anchor="middle" font-size="8.5" font-weight="700" fill="#7f1d1d">Oxaloacetate • Citrate • α-KG</text>
        <line x1="462" y1="228" x2="462" y2="268" stroke="var(--text-main)" stroke-width="1.8" marker-end="url(#arr816)"/>
        <text x="430" y="262" font-size="9.5" font-weight="700" fill="var(--text-muted)">Acetyl CoA</text>

        <!-- Glutamine -->
        <line x1="198" y1="348" x2="296" y2="348" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arr816)"/>
        <text x="190" y="346" text-anchor="end" font-size="10.5" font-weight="800" fill="var(--accent)">Glutamine</text>
        <text x="328" y="352" font-size="10" font-weight="700" fill="var(--accent)">Glutamate → α-KG</text>

        <!-- 4 Hộp tổng hợp đầu ra -> TĂNG TRƯỞNG -->
        <rect x="524" y="102" width="90" height="44" rx="8" fill="#fef08a" stroke="#ca8a04" stroke-width="1.6"/>
        <text x="569" y="121" text-anchor="middle" font-size="9.5" font-weight="800" fill="#854d0e">Tổng hợp</text>
        <text x="569" y="135" text-anchor="middle" font-size="9.5" font-weight="800" fill="#854d0e">nucleotid, aa</text>

        <rect x="524" y="170" width="90" height="32" rx="8" fill="#fef08a" stroke="#ca8a04" stroke-width="1.6"/>
        <text x="569" y="190" text-anchor="middle" font-size="9.5" font-weight="800" fill="#854d0e">Tổng hợp protein</text>

        <rect x="524" y="264" width="90" height="32" rx="8" fill="#fef08a" stroke="#ca8a04" stroke-width="1.6"/>
        <text x="569" y="284" text-anchor="middle" font-size="9.5" font-weight="800" fill="#854d0e">Tổng hợp lipid</text>

        <rect x="524" y="314" width="90" height="34" rx="8" fill="#fef08a" stroke="#ca8a04" stroke-width="1.6"/>
        <text x="569" y="335" text-anchor="middle" font-size="9.5" font-weight="800" fill="#854d0e">Tổng hợp aa</text>

        <line x1="326" y1="184" x2="520" y2="184" stroke="var(--warning)" stroke-width="1.6" stroke-dasharray="3,2"/>
        <line x1="484" y1="280" x2="520" y2="280" stroke="var(--text-main)" stroke-width="1.8" marker-end="url(#arr816)"/>
        <line x1="484" y1="316" x2="520" y2="328" stroke="var(--text-main)" stroke-width="1.8" marker-end="url(#arr816)"/>

        <!-- Khối TĂNG TRƯỞNG -->
        <rect x="634" y="194" width="76" height="46" rx="10" fill="#fce7f3" stroke="#9d174d" stroke-width="2.2"/>
        <text x="672" y="214" text-anchor="middle" font-size="11" font-weight="800" fill="#9d174d">TĂNG</text>
        <text x="672" y="230" text-anchor="middle" font-size="11" font-weight="800" fill="#9d174d">TRƯỞNG</text>
        <line x1="614" y1="124" x2="652" y2="192" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr816)"/>
        <line x1="614" y1="186" x2="632" y2="208" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr816)"/>
        <line x1="614" y1="280" x2="646" y2="242" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr816)"/>
        <line x1="614" y1="330" x2="660" y2="244" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr816)"/>
      </svg>
    `,
    legends: [
      { n: 1, title: "Hiệu ứng Warburg (Đường phân hiếu khí)", text: "Ngay cả khi có đủ oxy, tế bào ung thư vẫn tăng thu nhận glucose/glutamine và chuyển pyruvate thành lactate (chỉ tạo ít ATP) để dành khung carbon cho sinh tổng hợp đại phân tử." },
      { n: 2, title: "Điều hòa bởi Gen sinh ung & Đè nén bướu", text: "RTK, RAS, PI3K, AKT và MYC thúc đẩy đường phân + hấp thu glutamine; ngược lại gen đè nén bướu như P53 ức chế quá trình chuyển hóa này." }
    ]
  },

  {
    id: "H8.17",
    lessonId: 6,
    chapter: "Chuyên đề II • Bài 8 GPB Đại cương",
    page: "tr. 173",
    type: "svg",
    title: "Hình 8.17. Chất chuyển hóa sinh ung 2-hydroxyglutarate (2-HG) trong đột biến IDH",
    caption: "Đột biến enzym chu trình Krebs (isocitrate dehydrogenase – mIDH) tạo chức năng mới sản xuất 2-HG → ức chế enzym khử methyl TET2 → tăng methyl hóa DNA → biến đổi biểu hiện gen và chuyển dạng tế bào.",
    note: "Đây là cơ chế cầu nối tuyệt đẹp giữa rối loạn chuyển hóa năng lượng ty thể và biến đổi ngoại gen (epigenetics) trong sinh ung thư (gặp nhiều trong glioma, AML).",
    svg: `
      <svg viewBox="0 0 720 310" class="fig-svg" role="img" aria-label="Hình 8.17 Chất chuyển hóa sinh ung 2-HG">
        <defs>
          <marker id="arr817" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 1 L10 5 L0 9 z" fill="var(--text-main)"/>
          </marker>
        </defs>

        <!-- Ty thể -->
        <ellipse cx="360" cy="68" rx="160" ry="54" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2.5"/>
        <circle cx="272" cy="64" r="32" fill="#f8fafc" stroke="#5b21b6" stroke-width="1.5"/>
        <text x="272" y="60" text-anchor="middle" font-size="10.5" font-weight="800" fill="#4c1d95">Chu trình</text>
        <text x="272" y="74" text-anchor="middle" font-size="10.5" font-weight="800" fill="#4c1d95">Krebs</text>

        <rect x="332" y="22" width="54" height="24" rx="10" fill="#34d399" stroke="#065f46" stroke-width="1.5"/>
        <text x="359" y="38" text-anchor="middle" font-size="11" font-weight="800" fill="#064e3b">IDH</text>

        <rect x="348" y="54" width="112" height="24" rx="10" fill="#fdba74" stroke="#9a3412" stroke-width="1.5"/>
        <text x="404" y="70" text-anchor="middle" font-size="11" font-weight="800" fill="#7c2d12">Đột biến IDH</text>

        <rect x="322" y="86" width="166" height="28" rx="10" fill="#fbbf24" stroke="#92400e" stroke-width="1.8"/>
        <text x="405" y="104" text-anchor="middle" font-size="10.5" font-weight="800" fill="#78350f">2-hydroxyglutarate (2-HG)</text>

        <text x="150" y="136" font-size="12" font-weight="800" fill="var(--text-muted)">BÀO TƯƠNG</text>
        <line x1="396" y1="118" x2="334" y2="174" stroke="#dc2626" stroke-width="3.5" marker-end="url(#arr817)"/>
        <text x="415" y="152" font-size="11" font-weight="800" fill="var(--danger)">Chất chuyển hóa sinh ung (Oncometabolite)</text>

        <!-- Vùng Nhân -->
        <rect x="130" y="168" width="460" height="128" rx="16" fill="var(--bg-main)" stroke="var(--accent)" stroke-width="2" stroke-dasharray="6,4"/>
        <text x="360" y="260" text-anchor="middle" font-size="13" font-weight="800" fill="var(--accent)">NHÂN TẾ BÀO</text>

        <rect x="234" y="178" width="56" height="26" rx="8" fill="#a5b4fc" stroke="#3730a3" stroke-width="1.5"/>
        <text x="262" y="195" text-anchor="middle" font-size="11" font-weight="800" fill="#1e1b4b">TET2</text>

        <circle cx="324" cy="192" r="18" fill="#fb7185" stroke="#9f1239" stroke-width="1.8"/>
        <text x="324" y="190" text-anchor="middle" font-size="9" font-weight="800" fill="#fff">Mất</text>
        <text x="324" y="201" text-anchor="middle" font-size="9" font-weight="800" fill="#fff">TET2</text>

        <path d="M188 228 Q210 212 232 228 T276 228 T310 228" fill="none" stroke="#1e293b" stroke-width="2.5"/>
        <line x1="330" y1="226" x2="394" y2="226" stroke="var(--text-main)" stroke-width="2.5" marker-end="url(#arr817)"/>

        <path d="M408 228 Q430 212 452 228 T496 228 T530 228" fill="none" stroke="#1e293b" stroke-width="2.5"/>
        <circle cx="424" cy="212" r="5" fill="#dc2626"/>
        <circle cx="464" cy="212" r="5" fill="#dc2626"/>
        <circle cx="504" cy="212" r="5" fill="#dc2626"/>
        <circle cx="444" cy="242" r="5" fill="#dc2626"/>
        <circle cx="484" cy="242" r="5" fill="#dc2626"/>

        <text x="468" y="192" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--danger)">Tăng methyl hóa DNA</text>
        <text x="468" y="262" text-anchor="middle" font-size="11" font-weight="700" fill="var(--text-main)">Thay đổi biểu hiện gen</text>

        <line x1="468" y1="268" x2="468" y2="288" stroke="var(--primary)" stroke-width="2.5" marker-end="url(#arr817)"/>
        <rect x="520" y="268" width="144" height="32" rx="8" fill="#67e8f9" stroke="#0e7490" stroke-width="2"/>
        <text x="592" y="289" text-anchor="middle" font-size="12" font-weight="800" fill="#164e63">Tế bào biến đổi</text>
      </svg>
    `,
    legends: [
      { n: 1, title: "Đột biến IDH tạo 2-hydroxyglutarate (2-HG)", text: "Thay vì chuyển isocitrate thành α-ketoglutarate, enzym IDH đột biến sản xuất chất chuyển hóa sinh ung 2-HG." },
      { n: 2, title: "Ức chế TET2 → Tăng methyl hóa DNA", text: "2-HG ức chế hoạt tính enzym TET2 (vốn tham gia khử methyl DNA), làm tăng methyl hóa bất thường tại promoter các gen kiểm soát biệt hóa tế bào." }
    ]
  },

  {
    id: "H8.18",
    lessonId: 6,
    chapter: "Chuyên đề II • Bài 8 GPB Đại cương",
    page: "tr. 174",
    type: "svg",
    title: "Hình 8.18. Con đường nội sinh của sự chết tế bào theo chương trình & Cơ chế lẩn trốn",
    caption: "Cột trái: Diễn biến apoptosis bình thường qua p53 → PUMA/BAX/BAK → Cytochrome c + APAF-1 → Caspase 9 → Caspase 3. Cột phải: 3 chốt chặn giúp tế bào ung thư sống sót.",
    note: "Ví dụ kinh điển cần thuộc: Lymphom nang có chuyển vị t(14;18) làm biểu hiện quá mức protein chống chết BCL-2, bảo vệ tế bào B khỏi apoptosis dù không tăng phân bào nhanh.",
    svg: `
      <svg viewBox="0 0 720 420" class="fig-svg" role="img" aria-label="Hình 8.18 Con đường nội sinh apoptosis">
        <defs>
          <marker id="arr818" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 1 L10 5 L0 9 z" fill="var(--text-main)"/>
          </marker>
          <marker id="bar818" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <line x1="8" y1="1" x2="8" y2="9" stroke="#dc2626" stroke-width="3"/>
          </marker>
        </defs>

        <!-- Header 2 cột -->
        <rect x="130" y="10" width="215" height="34" rx="10" fill="#0ea5e9"/>
        <text x="237" y="32" text-anchor="middle" font-size="12" font-weight="800" fill="#fff">Sự chết tế bào bình thường</text>

        <rect x="435" y="10" width="215" height="34" rx="10" fill="#f97316"/>
        <text x="542" y="32" text-anchor="middle" font-size="12" font-weight="800" fill="#fff">Cơ chế thoát khỏi sự chết tế bào</text>

        <!-- Màng tế bào kép -->
        <rect x="30" y="92" width="660" height="12" rx="6" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.8"/>
        <text x="155" y="64" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-main)">Giảm yếu tố tăng trưởng</text>
        <text x="155" y="78" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-main)">&amp; tín hiệu sinh tồn</text>
        <text x="348" y="64" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--danger)">ROS • Tia xạ • Hóa chất</text>

        <line x1="155" y1="84" x2="155" y2="164" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr818)"/>
        <line x1="348" y1="74" x2="348" y2="114" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr818)"/>

        <!-- Tổn thương DNA -> p53 -->
        <text x="348" y="128" text-anchor="middle" font-size="11" font-weight="800" fill="var(--danger)">Tổn thương DNA</text>
        <line x1="348" y1="134" x2="348" y2="158" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr818)"/>
        <circle cx="348" cy="180" r="20" fill="#22c55e" stroke="#14532d" stroke-width="2"/>
        <text x="348" y="185" text-anchor="middle" font-size="12" font-weight="800" fill="#fff">p53</text>

        <!-- BH3-only (PUMA) & Lưới nội bào -->
        <line x1="326" y1="180" x2="210" y2="180" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr818)"/>
        <text x="148" y="180" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--accent)">Protein chỉ có BH3</text>
        <text x="148" y="194" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--accent)">(VD: PUMA)</text>

        <rect x="82" y="218" width="94" height="32" rx="8" fill="#bae6fd" stroke="#0369a1"/>
        <text x="129" y="238" text-anchor="middle" font-size="10" font-weight="700" fill="#0c4a6e">Áp lực lưới nội bào</text>
        <line x1="129" y1="218" x2="142" y2="200" stroke="var(--text-main)" stroke-width="1.8" marker-end="url(#arr818)"/>

        <!-- BAX / BAK & Ty thể -->
        <line x1="188" y1="200" x2="296" y2="226" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr818)"/>
        <line x1="348" y1="202" x2="348" y2="222" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr818)"/>
        <text x="348" y="236" text-anchor="middle" font-size="12" font-weight="800" fill="var(--primary)">BAX / BAK</text>

        <ellipse cx="348" cy="272" rx="54" ry="24" fill="#86efac" stroke="#15803d" stroke-width="2"/>
        <text x="348" y="276" text-anchor="middle" font-size="10.5" font-weight="800" fill="#14532d">Ty thể (Đục lỗ màng)</text>
        <circle cx="316" cy="306" r="4" fill="#ef4444"/><circle cx="332" cy="312" r="4" fill="#ef4444"/>
        <circle cx="352" cy="308" r="4" fill="#ef4444"/><circle cx="370" cy="314" r="4" fill="#ef4444"/>

        <text x="150" y="314" text-anchor="middle" font-size="11" font-weight="800" fill="var(--accent)">APAF-1</text>
        <line x1="184" y1="310" x2="288" y2="294" stroke="var(--text-main)" stroke-width="1.8" marker-end="url(#arr818)"/>
        <text x="352" y="330" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-main)">Phóng thích Cytochrome c gắn APAF-1</text>

        <!-- Caspase 9 -> Caspase 3 -> Kết cục trái -->
        <line x1="330" y1="336" x2="310" y2="348" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr818)"/>
        <text x="275" y="354" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--accent)">Caspase 9</text>
        <line x1="255" y1="360" x2="235" y2="374" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr818)"/>
        <text x="200" y="382" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--accent)">Caspase 3</text>

        <rect x="64" y="388" width="268" height="28" rx="6" fill="#0284c7"/>
        <text x="198" y="407" text-anchor="middle" font-size="11.5" font-weight="800" fill="#fff">CHẾT TẾ BÀO THEO CHƯƠNG TRÌNH</text>

        <!-- CỘT PHẢI: 3 CHỐT LẨN TRỐN -->
        <!-- 1. p53 mất chức năng -->
        <rect x="448" y="152" width="190" height="52" rx="10" fill="#ef4444"/>
        <text x="543" y="170" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">1. p53 mất chức năng</text>
        <text x="543" y="185" text-anchor="middle" font-size="10" fill="#fee2e2">• Đột biến TP53</text>
        <text x="543" y="198" text-anchor="middle" font-size="10" fill="#fee2e2">• Tăng MDM2</text>
        <line x1="446" y1="180" x2="374" y2="180" stroke="#dc2626" stroke-width="3" marker-end="url(#bar818)"/>

        <!-- 2. BCL-2 / BCL-XL / MCL-1 -->
        <rect x="470" y="246" width="146" height="52" rx="10" fill="#ef4444"/>
        <text x="543" y="264" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">2. BCL-2 / BCL-XL</text>
        <text x="543" y="280" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">MCL-1 (Chống chết)</text>
        <text x="543" y="293" text-anchor="middle" font-size="9.5" fill="#fee2e2">VD: Lymphom nang t(14;18)</text>
        <line x1="468" y1="272" x2="408" y2="272" stroke="#dc2626" stroke-width="3" marker-end="url(#bar818)"/>

        <!-- 3. IAP -->
        <rect x="490" y="336" width="106" height="32" rx="12" fill="#ef4444"/>
        <text x="543" y="357" text-anchor="middle" font-size="12" font-weight="800" fill="#fff">3. IAP</text>
        <line x1="488" y1="352" x2="322" y2="352" stroke="#dc2626" stroke-width="3" marker-end="url(#bar818)"/>

        <line x1="543" y1="204" x2="543" y2="244" stroke="var(--danger)" stroke-width="2.2"/>
        <line x1="543" y1="298" x2="543" y2="334" stroke="var(--danger)" stroke-width="2.2"/>
        <line x1="543" y1="368" x2="543" y2="386" stroke="var(--danger)" stroke-width="2.2" marker-end="url(#arr818)"/>

        <rect x="435" y="388" width="215" height="28" rx="6" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
        <text x="542" y="407" text-anchor="middle" font-size="12" font-weight="800" fill="#9a3412">TẾ BÀO SỐNG SÓT (UNG THƯ)</text>
      </svg>
    `,
    legends: [
      { n: 1, title: "Con đường nội sinh (Ty thể)", text: "Cân bằng giữa pro-apoptotic (BAX, BAK, PUMA) và anti-apoptotic (BCL-2, BCL-XL, MCL-1). Khi BAX/BAK chiếm ưu thế → mở màng ngoài ty thể → phóng thích Cytochrome c + APAF-1 → Caspase 9 → Caspase 3." },
      { n: 2, title: "3 Cách tế bào ung thư né tránh chết", text: "(1) Mất P53 (đột biến TP53 hoặc tăng MDM2); (2) Tăng biểu hiện BCL-2 (như t(14;18) ở lymphom nang); (3) Tăng protein ức chế caspase IAP." }
    ]
  },

  {
    id: "H8.19",
    lessonId: 6,
    chapter: "Chuyên đề II • Bài 8 GPB Đại cương",
    page: "tr. 176",
    type: "svg",
    title: "Hình 8.19. Quá trình di căn theo đường máu của ung thư",
    caption: "Chuỗi bước di căn: Khối u nguyên phát → Dòng phụ di căn → Phá hủy E-cadherin & xâm nhiễm màng đáy → Di chuyển qua chất nền ngoại bào → Xâm nhập mạch máu → Thuyên tắc tiểu cầu/u → Thoát mạch → Tạo khối u di căn.",
    note: "Ghi nhớ phân tử: Tế bào ung thư giảm biểu hiện E-cadherin (mất dính kết) và trải qua chuyển dạng biểu mô – trung mô (EMT) nhờ các yếu tố phiên mã SNAIL và TWIST; tiết protease (MMP) tiêu hủy màng đáy và chất nền ngoại bào.",
    svg: `
      <svg viewBox="0 0 720 355" class="fig-svg" role="img" aria-label="Hình 8.19 Quá trình di căn theo đường máu">
        <defs>
          <marker id="arr819" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 1 L10 5 L0 9 z" fill="var(--text-main)"/>
          </marker>
        </defs>

        <!-- Tầng trên: Khối u nguyên phát & ECM -->
        <text x="64" y="24" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--primary)">KHỐI U NGUYÊN PHÁT</text>
        <text x="350" y="22" font-size="10.5" font-weight="700" fill="var(--text-muted)">Tế bào biến đổi → Mở rộng dòng, tăng trưởng, đa dạng hóa, tạo mạch</text>

        <!-- Khối u nguyên phát -->
        <circle cx="152" cy="74" r="34" fill="#fecdd3" stroke="#be123c" stroke-width="1.8"/>
        <circle cx="136" cy="64" r="10" fill="#fb7185"/><circle cx="164" cy="62" r="11" fill="#f43f5e"/>
        <circle cx="150" cy="88" r="10" fill="#e11d48"/><circle cx="174" cy="84" r="9" fill="#fb7185"/>
        <circle cx="168" cy="116" r="11" fill="#be123c"/>

        <!-- Màng đáy + ECM trên -->
        <rect x="20" y="114" width="680" height="10" rx="3" fill="#fde047" stroke="#ca8a04"/>
        <text x="515" y="138" font-size="10.5" font-weight="700" fill="var(--text-muted)">Màng đáy &amp; Chất nền ngoại bào (ECM)</text>

        <!-- Xâm nhập qua ECM vào mạch máu -->
        <circle cx="212" cy="154" r="10" fill="#be123c"/>
        <circle cx="234" cy="180" r="10" fill="#9f1239"/>

        <!-- Mạch máu ở giữa -->
        <rect x="20" y="184" width="680" height="72" rx="8" fill="#ffe4e6" stroke="#dc2626" stroke-width="2.5"/>
        <circle cx="88" cy="212" r="9" fill="#ef4444"/><circle cx="206" cy="230" r="9" fill="#ef4444"/>
        <circle cx="514" cy="210" r="9" fill="#ef4444"/>

        <!-- Lympho bào & tiểu cầu tương tác -->
        <circle cx="288" cy="218" r="14" fill="#93c5fd" stroke="#1e40af" stroke-width="1.5"/>
        <text x="288" y="250" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--accent)">Lympho vật chủ</text>

        <!-- Thuyên tắc tế bào u + tiểu cầu -->
        <circle cx="430" cy="216" r="11" fill="#be123c"/>
        <circle cx="448" cy="222" r="10" fill="#9f1239"/>
        <circle cx="440" cy="202" r="5" fill="#38bdf8"/><circle cx="458" cy="208" r="5" fill="#38bdf8"/>
        <circle cx="422" cy="230" r="5" fill="#38bdf8"/><circle cx="456" cy="234" r="5" fill="#38bdf8"/>
        <text x="478" y="200" font-size="10" font-weight="800" fill="var(--accent)">Tiểu cầu bảo vệ u</text>

        <!-- Thoát mạch & Khối u di căn ở dưới phải -->
        <circle cx="576" cy="258" r="10" fill="#be123c"/>
        <g transform="translate(560,268)">
          <circle cx="38" cy="36" r="28" fill="#fecdd3" stroke="#be123c" stroke-width="2"/>
          <circle cx="28" cy="26" r="9" fill="#be123c"/><circle cx="48" cy="28" r="10" fill="#e11d48"/>
          <circle cx="38" cy="46" r="9" fill="#9f1239"/>
        </g>
        <text x="660" y="330" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--danger)">KHỐI U DI CĂN</text>

        <!-- Hộp chú giải tiến trình -->
        <rect x="260" y="54" width="236" height="58" rx="8" fill="var(--bg-card)" stroke="var(--primary)"/>
        <text x="378" y="70" text-anchor="middle" font-size="10" font-weight="800" fill="var(--primary)">1. Xâm lấn tại chỗ (EMT: SNAIL/TWIST, ↓ E-cadherin)</text>
        <text x="378" y="84" text-anchor="middle" font-size="9.8" fill="var(--text-main)">Dòng phụ di căn → Phá màng đáy (protease)</text>
        <text x="378" y="99" text-anchor="middle" font-size="9.8" fill="var(--text-main)">→ Di chuyển ECM → Xâm nhập lòng mạch</text>

        <rect x="44" y="276" width="446" height="62" rx="8" fill="var(--bg-card)" stroke="var(--accent)"/>
        <text x="267" y="294" text-anchor="middle" font-size="10.2" font-weight="800" fill="var(--accent)">2. Tuần hoàn &amp; Hình thành ổ thứ phát</text>
        <text x="267" y="310" text-anchor="middle" font-size="10" fill="var(--text-main)">Tạo thuyên tắc u + tiểu cầu tránh NK/lympho → Bám màng đáy cơ quan đích</text>
        <text x="267" y="326" text-anchor="middle" font-size="10" fill="var(--text-main)">→ Thoát mạch (extravasation) → Tân tạo mạch (VEGF) &amp; Phát triển khối u di căn</text>
      </svg>
    `,
    legends: [
      { n: 1, title: "Xâm lấn chất nền ngoại bào", text: "Giảm E-cadherin nới lỏng liên kết tế bào → tiết protease hủy màng đáy & ECM → di chuyển theo hóa hướng động do mô đệm tiết ra." },
      { n: 2, title: "Di căn theo đường máu", text: "Trong máu, tế bào ung thư kết cụm với tiểu cầu tạo thuyên tắc né miễn dịch → bám nội mô và thoát mạch tại giường mao mạch đầu tiên (gan, phổi) hoặc cơ quan đích chọn lọc." }
    ]
  },

  {
    id: "H8.20",
    lessonId: 6,
    chapter: "Chuyên đề II • Bài 8 GPB Đại cương",
    page: "tr. 177",
    type: "svg",
    title: "Hình 8.20. Cơ chế hoạt hóa đáp ứng miễn dịch chống ung thư (CTLA-4 & PD-1/PD-L1)",
    caption: "(A) Tại hạch lympho: Kháng thể kháng CTLA-4 ngăn tín hiệu hãm, giải phóng B7 gắn CD28 hoạt hóa CTL. (B) Tại mô u: Kháng thể kháng PD-1/PD-L1 cắt tín hiệu ức chế, giúp CTL CD8+ tiêu diệt tế bào u.",
    note: "Phân biệt vị trí tác động: CTLA-4 chặn giai đoạn MỒI/HOẠT HÓA tế bào T tại hạch lympho; còn trục PD-1/PD-L1 chặn giai đoạn THỰC THI tiêu diệt tế bào u ngay tại vi môi trường mô u.",
    svg: `
      <svg viewBox="0 0 720 380" class="fig-svg" role="img" aria-label="Hình 8.20 Chốt kiểm soát miễn dịch CTLA-4 và PD-1/PD-L1">
        <defs>
          <marker id="arr820" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 1 L10 5 L0 9 z" fill="var(--text-main)"/>
          </marker>
        </defs>

        <!-- PHẦN A: HẠCH LYMPHO -->
        <rect x="12" y="10" width="696" height="170" rx="12" fill="var(--bg-card)" stroke="var(--accent)" stroke-width="1.8"/>
        <text x="24" y="32" font-size="12.5" font-weight="800" fill="var(--accent)">A. Tại Hạch lympho (Trình diện kháng nguyên – Chốt kiểm soát CTLA-4)</text>

        <!-- A1: Không kích thích -->
        <circle cx="96" cy="72" r="24" fill="#cbd5e1" stroke="#475569" stroke-width="1.8"/>
        <text x="96" y="76" text-anchor="middle" font-size="9.5" font-weight="800" fill="#0f172a">Tế bào đuôi gai</text>
        <circle cx="96" cy="136" r="22" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.8"/>
        <text x="96" y="140" text-anchor="middle" font-size="9.5" font-weight="800" fill="#1e3a8a">T CD8+</text>
        <line x1="78" y1="92" x2="78" y2="116" stroke="#dc2626" stroke-width="2.5"/>
        <text x="48" y="108" font-size="9.5" font-weight="800" fill="var(--danger)">B7–CTLA-4</text>
        <line x1="112" y1="92" x2="112" y2="116" stroke="#0f172a" stroke-width="2"/>
        <text x="150" y="108" font-size="9.5" font-weight="700" fill="var(--text-muted)">MHC–TCR</text>
        <text x="108" y="172" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--danger)">❌ Không kích thích miễn dịch</text>

        <!-- A2: Phong tỏa Anti-CTLA-4 -->
        <circle cx="348" cy="72" r="24" fill="#cbd5e1" stroke="#475569" stroke-width="1.8"/>
        <text x="348" y="76" text-anchor="middle" font-size="9.5" font-weight="800" fill="#0f172a">Tế bào đuôi gai</text>
        <circle cx="348" cy="136" r="22" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.8"/>
        <text x="348" y="140" text-anchor="middle" font-size="9.5" font-weight="800" fill="#1e3a8a">T CD8+</text>
        <line x1="330" y1="92" x2="330" y2="116" stroke="#16a34a" stroke-width="3"/>
        <text x="290" y="106" font-size="9.5" font-weight="800" fill="var(--success)">B7–CD28</text>
        <line x1="364" y1="92" x2="364" y2="116" stroke="#0f172a" stroke-width="2"/>
        <rect x="260" y="124" width="60" height="20" rx="5" fill="#fef08a" stroke="#ca8a04"/>
        <text x="290" y="138" text-anchor="middle" font-size="9" font-weight="800" fill="#854d0e">Anti-CTLA-4</text>
        <text x="355" y="172" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--success)">✅ Có kích thích miễn dịch</text>

        <line x1="418" y1="110" x2="486" y2="110" stroke="var(--success)" stroke-width="3" marker-end="url(#arr820)"/>
        <circle cx="546" cy="110" r="28" fill="#ea580c" stroke="#9a3412" stroke-width="2"/>
        <text x="546" y="115" text-anchor="middle" font-size="13" font-weight="800" fill="#fff">CTL</text>
        <text x="634" y="104" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--text-main)">CTL mồi có khả năng</text>
        <text x="634" y="119" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--text-main)">tiêu diệt tế bào khối u</text>

        <!-- PHẦN B: MÔ U -->
        <rect x="12" y="194" width="696" height="176" rx="12" fill="var(--bg-card)" stroke="var(--primary)" stroke-width="1.8"/>
        <text x="24" y="216" font-size="12.5" font-weight="800" fill="var(--primary)">B. Tại Mô u (Chốt kiểm soát PD-1 / PD-L1)</text>

        <!-- B1: CTL bị ức chế -->
        <circle cx="90" cy="272" r="24" fill="#ea580c" opacity="0.65" stroke="#9a3412" stroke-width="1.8"/>
        <text x="90" y="276" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">CTL</text>
        <circle cx="176" cy="316" r="26" fill="#34d399" stroke="#065f46" stroke-width="1.8"/>
        <text x="176" y="320" text-anchor="middle" font-size="10" font-weight="800" fill="#064e3b">Tế bào u</text>
        <line x1="106" y1="292" x2="152" y2="314" stroke="#dc2626" stroke-width="2.5"/>
        <text x="80" y="328" font-size="9.5" font-weight="800" fill="var(--danger)">PD-1 ↔ PD-L1</text>
        <line x1="112" y1="274" x2="158" y2="296" stroke="#0f172a" stroke-width="1.8"/>
        <text x="165" y="274" font-size="9.5" font-weight="700" fill="var(--text-muted)">TCR–Peptide-MHC</text>
        <text x="120" y="358" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--danger)">❌ CTL CD8+ bị ức chế</text>

        <!-- B2: Anti-PD-1 / Anti-PD-L1 tiêu diệt tế bào u -->
        <circle cx="348" cy="272" r="24" fill="#ea580c" stroke="#9a3412" stroke-width="2"/>
        <text x="348" y="276" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">CTL</text>
        <circle cx="436" cy="316" r="26" fill="#34d399" stroke="#065f46" stroke-width="1.8"/>
        <text x="436" y="320" text-anchor="middle" font-size="10" font-weight="800" fill="#064e3b">Tế bào u</text>
        <rect x="292" y="314" width="94" height="22" rx="5" fill="#fef08a" stroke="#ca8a04"/>
        <text x="339" y="329" text-anchor="middle" font-size="9.2" font-weight="800" fill="#854d0e">Anti-PD-1 / PD-L1</text>

        <!-- Hạt độc -->
        <circle cx="392" cy="264" r="3.5" fill="#0f172a"/><circle cx="404" cy="272" r="3.5" fill="#0f172a"/>
        <circle cx="414" cy="260" r="3.5" fill="#0f172a"/><circle cx="418" cy="280" r="3.5" fill="#0f172a"/>
        <text x="454" y="266" font-size="9.5" font-weight="800" fill="var(--primary)">Hạt độc tế bào</text>

        <line x1="474" y1="308" x2="544" y2="308" stroke="var(--success)" stroke-width="3" marker-end="url(#arr820)"/>
        <text x="510" y="294" text-anchor="middle" font-size="10" font-weight="800" fill="var(--success)">Giết TB u</text>

        <circle cx="602" cy="306" r="24" fill="#6ee7b7" stroke="#047857" stroke-width="2" stroke-dasharray="5,3"/>
        <circle cx="574" cy="286" r="7" fill="#34d399"/>
        <circle cx="634" cy="292" r="6" fill="#34d399"/>
        <circle cx="624" cy="332" r="7" fill="#34d399"/>
        <text x="602" y="358" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--success)">✅ Tế bào khối u bị tiêu diệt</text>
      </svg>
    `,
    legends: [
      { n: 1, title: "Chặn CTLA-4 tại Hạch lympho (A)", text: "Kháng thể kháng CTLA-4 ngăn CTLA-4 giành mất phân tử đồng kích thích B7 từ CD28 → hoạt hóa mạnh tế bào T CD8+ thành CTL." },
      { n: 2, title: "Chặn trục PD-1/PD-L1 tại Mô u (B)", text: "Tế bào ung thư biểu hiện quá mức PD-L1 để ru ngủ CTL. Anti-PD-1 / Anti-PD-L1 gỡ bỏ phanh hãm này, khôi phục giải phóng hạt độc tiêu diệt tế bào u (hiệu quả 10–30% ở melanom, ung thư phổi, bàng quang)." }
    ]
  },

  {
    id: "H8.21",
    lessonId: 6,
    chapter: "Chuyên đề II • Bài 8 GPB Đại cương",
    page: "tr. 179",
    type: "svg",
    title: "Hình 8.21. Các liệu pháp điều trị đích nhắm vào 10 'đặc điểm cốt lõi' của tế bào ung thư",
    caption: "Bản đồ đối chiếu trực tiếp từng dấu ấn sinh học (Hallmark) của tế bào ung thư với nhóm thuốc điều trị nhắm trúng đích tương ứng.",
    note: "Đây là sơ đồ tổng kết toàn bộ Mục 6 (tr. 170–179): mỗi cơ chế sinh ung đều trở thành một 'gót chân Achilles' để thiết kế thuốc điều trị đích (EGFRi, CDK4/6i, chất ức chế telomerase, kháng sinh H. pylori, HGF/c-Met, MDM2/PARP, anti-VEGF, anti-BCL2, ức chế đường phân, anti-CTLA-4).",
    svg: `
      <svg viewBox="0 0 720 420" class="fig-svg" role="img" aria-label="Hình 8.21 Liệu pháp đích nhắm 10 đặc điểm cốt lõi">
        <defs>
          <marker id="arr821" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 1 L10 5 L0 9 z" fill="var(--text-main)"/>
          </marker>
        </defs>

        <!-- Trung tâm tế bào ung thư -->
        <circle cx="360" cy="215" r="42" fill="#fed7aa" stroke="#9a3412" stroke-width="2.5"/>
        <text x="360" y="211" text-anchor="middle" font-size="11" font-weight="800" fill="#7c2d12">TẾ BÀO</text>
        <text x="360" y="226" text-anchor="middle" font-size="11" font-weight="800" fill="#7c2d12">UNG THƯ</text>

        <!-- Top: Trốn miễn dịch + Anti-CTLA-4 -->
        <circle cx="360" cy="94" r="24" fill="#0284c7"/>
        <text x="360" y="99" text-anchor="middle" font-size="12" fill="#fff">🛡️</text>
        <text x="360" y="54" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--accent)">1. Thoát khỏi sự tấn công</text>
        <text x="360" y="67" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--accent)">của hệ miễn dịch</text>
        <rect x="478" y="24" width="166" height="34" rx="8" fill="#38bdf8" stroke="#0369a1"/>
        <text x="561" y="39" text-anchor="middle" font-size="9.5" font-weight="800" fill="#0c4a6e">Kháng thể đơn dòng</text>
        <text x="561" y="52" text-anchor="middle" font-size="9.5" font-weight="800" fill="#0c4a6e">kháng CTLA-4 (PD-1)</text>
        <line x1="476" y1="42" x2="430" y2="54" stroke="var(--text-main)" stroke-width="1.8" marker-end="url(#arr821)"/>

        <!-- 5 cặp bên TRÁI -->
        <!-- 2. Duy trì tăng sinh <- EGFRi -->
        <circle cx="268" cy="126" r="21" fill="#f59e0b"/><text x="268" y="131" text-anchor="middle" font-size="12" fill="#fff">📈</text>
        <text x="206" y="122" text-anchor="middle" font-size="10" font-weight="800" fill="var(--text-main)">2. Duy trì tín hiệu</text>
        <text x="206" y="134" text-anchor="middle" font-size="10" font-weight="800" fill="var(--text-main)">tăng sinh</text>
        <rect x="14" y="108" width="130" height="30" rx="8" fill="#ea580c"/><text x="79" y="127" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">Chất ức chế EGFR</text>
        <line x1="146" y1="123" x2="162" y2="123" stroke="var(--text-main)" stroke-width="1.8" marker-end="url(#arr821)"/>

        <!-- 3. Warburg <- Ức chế đường phân -->
        <circle cx="232" cy="190" r="21" fill="#1d4ed8"/><text x="232" y="195" text-anchor="middle" font-size="12" fill="#fff">⚡</text>
        <text x="172" y="182" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--text-main)">3. Mất kiểm soát</text>
        <text x="172" y="194" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--text-main)">chuyển hóa (Warburg)</text>
        <rect x="10" y="172" width="114" height="34" rx="8" fill="#1e40af"/><text x="67" y="187" text-anchor="middle" font-size="9.2" font-weight="800" fill="#fff">Chất ức chế đường</text><text x="67" y="199" text-anchor="middle" font-size="9.2" font-weight="800" fill="#fff">phân hiếu khí</text>
        <line x1="125" y1="189" x2="138" y2="189" stroke="var(--text-main)" stroke-width="1.8" marker-end="url(#arr821)"/>

        <!-- 4. Chống chết tế bào <- Đối kháng BCL2 -->
        <circle cx="232" cy="254" r="21" fill="#9333ea"/><text x="232" y="259" text-anchor="middle" font-size="12" fill="#fff">🧬</text>
        <text x="172" y="250" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--text-main)">4. Chống lại sự</text>
        <text x="172" y="262" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--text-main)">chết tế bào</text>
        <rect x="10" y="238" width="114" height="34" rx="8" fill="#7e22ce"/><text x="67" y="253" text-anchor="middle" font-size="9.5" font-weight="800" fill="#fff">Chất đối kháng</text><text x="67" y="265" text-anchor="middle" font-size="9.5" font-weight="800" fill="#fff">BCL2</text>
        <line x1="125" y1="255" x2="138" y2="255" stroke="var(--text-main)" stroke-width="1.8" marker-end="url(#arr821)"/>

        <!-- 5. Tân sinh mạch <- Đối kháng VEGF -->
        <circle cx="272" cy="316" r="21" fill="#e11d48"/><text x="272" y="321" text-anchor="middle" font-size="12" fill="#fff">🩸</text>
        <text x="206" y="312" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--text-main)">5. Kích thích</text>
        <text x="206" y="324" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--text-main)">tân sinh mạch</text>
        <rect x="14" y="302" width="130" height="32" rx="8" fill="#be123c"/><text x="79" y="316" text-anchor="middle" font-size="9.2" font-weight="800" fill="#fff">Chất đối kháng tín</text><text x="79" y="328" text-anchor="middle" font-size="9.2" font-weight="800" fill="#fff">hiệu VEGF (Bevacizumab)</text>
        <line x1="146" y1="318" x2="164" y2="318" stroke="var(--text-main)" stroke-width="1.8" marker-end="url(#arr821)"/>

        <!-- 6. Bất ổn bộ gen <- MDM2 & PARP -->
        <circle cx="360" cy="336" r="22" fill="#0284c7"/><text x="360" y="341" text-anchor="middle" font-size="12" fill="#fff">🧬</text>
        <text x="360" y="372" text-anchor="middle" font-size="10" font-weight="800" fill="var(--text-main)">6. Sự bất ổn &amp; đột biến bộ gen</text>
        <rect x="206" y="382" width="144" height="28" rx="8" fill="#0ea5e9"/><text x="278" y="400" text-anchor="middle" font-size="9.8" font-weight="800" fill="#fff">Chất ức chế MDM2 &amp; PARP</text>
        <line x1="352" y1="395" x2="362" y2="378" stroke="var(--text-main)" stroke-width="1.8" marker-end="url(#arr821)"/>

        <!-- 4 cặp bên PHẢI -->
        <!-- 7. Kiểm soát sinh trưởng bị kìm hãm <- CDK4/6i -->
        <circle cx="452" cy="126" r="21" fill="#94a3b8"/><text x="452" y="131" text-anchor="middle" font-size="12" fill="#fff">🚫</text>
        <text x="518" y="122" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--text-main)">7. Kiểm soát sinh</text>
        <text x="518" y="134" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--text-main)">trưởng bị kìm hãm</text>
        <rect x="576" y="106" width="134" height="36" rx="8" fill="#64748b"/><text x="643" y="121" text-anchor="middle" font-size="9" font-weight="800" fill="#fff">Chất ức chế enzym</text><text x="643" y="134" text-anchor="middle" font-size="9" font-weight="800" fill="#fff">kinase phụ thuộc cyclin</text>
        <line x1="574" y1="124" x2="558" y2="124" stroke="var(--text-main)" stroke-width="1.8" marker-end="url(#arr821)"/>

        <!-- 8. Phân chia vô hạn <- Ức chế Telomerase -->
        <circle cx="488" cy="190" r="21" fill="#eab308"/><text x="488" y="195" text-anchor="middle" font-size="12" fill="#fff">∞</text>
        <text x="546" y="182" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--text-main)">8. Khả năng phân</text>
        <text x="546" y="194" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--text-main)">chia vô hạn</text>
        <rect x="596" y="172" width="114" height="34" rx="8" fill="#ca8a04"/><text x="653" y="187" text-anchor="middle" font-size="9.2" font-weight="800" fill="#fff">Chất ức chế enzym</text><text x="653" y="199" text-anchor="middle" font-size="9.2" font-weight="800" fill="#fff">telomerase</text>
        <line x1="594" y1="189" x2="582" y2="189" stroke="var(--text-main)" stroke-width="1.8" marker-end="url(#arr821)"/>

        <!-- 9. Phản ứng viêm do u <- Kháng sinh H. pylori -->
        <circle cx="488" cy="254" r="21" fill="#fb923c"/><text x="488" y="259" text-anchor="middle" font-size="12" fill="#fff">🔥</text>
        <text x="546" y="250" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--text-main)">9. Phản ứng viêm</text>
        <text x="546" y="262" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--text-main)">do u thúc đẩy</text>
        <rect x="596" y="238" width="114" height="34" rx="8" fill="#ea580c"/><text x="653" y="253" text-anchor="middle" font-size="9.2" font-weight="800" fill="#fff">Điều trị kháng sinh</text><text x="653" y="265" text-anchor="middle" font-size="9.2" font-weight="800" fill="#fff">cho H. pylori / Kháng viêm</text>
        <line x1="594" y1="255" x2="582" y2="255" stroke="var(--text-main)" stroke-width="1.8" marker-end="url(#arr821)"/>

        <!-- 10. Xâm lấn & di căn <- Ức chế HGF/c-Met -->
        <circle cx="448" cy="316" r="21" fill="#15803d"/><text x="448" y="321" text-anchor="middle" font-size="12" fill="#fff">🚀</text>
        <text x="518" y="312" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--text-main)">10. Kích hoạt xâm</text>
        <text x="518" y="324" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--text-main)">lấn và di căn</text>
        <rect x="576" y="302" width="134" height="32" rx="8" fill="#166534"/><text x="643" y="316" text-anchor="middle" font-size="9.2" font-weight="800" fill="#fff">Chất ức chế con</text><text x="643" y="328" text-anchor="middle" font-size="9.2" font-weight="800" fill="#fff">đường HGF/c-Met</text>
        <line x1="574" y1="318" x2="558" y2="318" stroke="var(--text-main)" stroke-width="1.8" marker-end="url(#arr821)"/>
      </svg>
    `,
    legends: [
      { n: 1, title: "Tín hiệu tăng sinh, Chuyển hóa & Mạch máu", text: "Chất ức chế EGFR chặn tín hiệu tăng trưởng; ức chế đường phân hiếu khí chặn hiệu ứng Warburg; đối kháng VEGF (Bevacizumab) cắt nguồn tân sinh mạch." },
      { n: 2, title: "Chu kỳ, Apoptosis, Bộ gen & Miễn dịch", text: "CDK4/6 inhibitors phục hồi phanh RB; đối kháng BCL2 ép tế bào ác tính apoptosis; ức chế MDM2/PARP xử lý bất ổn bộ gen; anti-CTLA-4/PD-1 giải phóng CTL; kháng sinh trị H. pylori diệt nguyên nhân viêm tiền ung." }
    ]
  },

  // ========================================================================
  // BÀI 9 (CHUYÊN ĐỀ III): BỆNH HỌC PHÂN TỬ TRONG UNG THƯ (HÌNH 9.1 -> 9.2)
  // ========================================================================
  {
    id: "H9.1",
    lessonId: 7,
    chapter: "Chuyên đề III • Bài 9 GPB Đại cương",
    page: "tr. 186",
    type: "svg",
    title: "Hình 9.1. Sự hình thành gen tổ hợp BCR::ABL do chuyển vị t(9;22) trong CML",
    caption: "Chuyển vị tương hỗ giữa nhánh dài NST số 9 (chứa gen ABL) và nhánh dài NST số 22 (chứa gen BCR) tạo nhiễm sắc thể Philadelphia mang gen tổ hợp BCR::ABL mã hóa protein tyrosine kinase hoạt động mạnh liên tục.",
    note: "Cơ chế: Bình thường gen ABL trên NST 9 phiên mã hạn chế tạo enzym TK nội bào yếu. Khi ghép nối với vùng khởi động mạnh của gen BCR trên NST 22, protein BCR::ABL hoạt hóa liên tục các đường truyền tín hiệu tăng sinh trong bạch cầu mạn dòng tủy (CML) – điều trị đích hiệu quả bằng TKI (như Imatinib).",
    svg: `
      <svg viewBox="0 0 720 300" class="fig-svg" role="img" aria-label="Hình 9.1 Gen tổ hợp BCR::ABL t(9;22)">
        <defs>
          <marker id="arr91" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 1 L10 5 L0 9 z" fill="var(--text-main)"/>
          </marker>
        </defs>

        <!-- Trước chuyển vị -->
        <rect x="44" y="14" width="44" height="22" rx="5" fill="#0f172a"/>
        <text x="66" y="29" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">Chr 9</text>
        <rect x="114" y="14" width="52" height="22" rx="5" fill="#0f172a"/>
        <text x="140" y="29" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">Chr 22</text>

        <!-- NST 9 gốc -->
        <rect x="52" y="46" width="28" height="62" rx="14" fill="#a3e635" stroke="#1e293b" stroke-width="2"/>
        <rect x="52" y="108" width="28" height="84" rx="14" fill="#a3e635" stroke="#1e293b" stroke-width="2"/>
        <rect x="52" y="168" width="28" height="20" rx="4" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
        <text x="16" y="182" font-size="11.5" font-weight="800" fill="var(--success)">ABL</text>

        <!-- NST 22 gốc -->
        <rect x="126" y="64" width="28" height="44" rx="14" fill="#fb923c" stroke="#1e293b" stroke-width="2"/>
        <rect x="126" y="108" width="28" height="58" rx="14" fill="#fb923c" stroke="#1e293b" stroke-width="2"/>
        <rect x="126" y="128" width="28" height="18" rx="4" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
        <text x="164" y="142" font-size="11.5" font-weight="800" fill="var(--warning)">BCR</text>

        <text x="104" y="220" text-anchor="middle" font-size="12" font-weight="800" fill="var(--danger)">Chuyển vị t(9;22)</text>
        <path d="M90 176 Q104 198 118 156" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr91)"/>

        <!-- Mũi tên giữa -->
        <line x1="204" y1="120" x2="256" y2="120" stroke="var(--text-main)" stroke-width="3" marker-end="url(#arr91)"/>

        <!-- Sau chuyển vị -->
        <rect x="276" y="14" width="52" height="22" rx="5" fill="#0f172a"/>
        <text x="302" y="29" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">Chr 9+</text>
        <rect x="350" y="14" width="66" height="22" rx="5" fill="#9d174d"/>
        <text x="383" y="29" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">Chr 22 (Ph)</text>

        <rect x="288" y="46" width="28" height="62" rx="14" fill="#a3e635" stroke="#1e293b" stroke-width="2"/>
        <rect x="288" y="108" width="28" height="96" rx="14" fill="#a3e635" stroke="#1e293b" stroke-width="2"/>
        <rect x="288" y="176" width="28" height="28" rx="10" fill="#fb923c" stroke="#1e293b" stroke-width="2"/>

        <rect x="369" y="64" width="28" height="44" rx="14" fill="#fb923c" stroke="#1e293b" stroke-width="2"/>
        <rect x="369" y="108" width="28" height="64" rx="14" fill="#a3e635" stroke="#1e293b" stroke-width="2"/>
        <rect x="369" y="122" width="28" height="14" fill="#fef08a" stroke="#ca8a04"/>
        <rect x="369" y="136" width="28" height="14" fill="#fde047" stroke="#ca8a04"/>
        <text x="408" y="138" font-size="11.5" font-weight="800" fill="var(--primary)">gen tổ hợp</text>
        <text x="408" y="154" font-size="12" font-weight="800" fill="var(--danger)">BCR::ABL</text>

        <!-- Dịch mã Protein BCR::ABL -> CML -->
        <path d="M446 164 Q478 182 478 214" fill="none" stroke="var(--text-main)" stroke-width="2.5" marker-end="url(#arr91)"/>

        <rect x="424" y="218" width="166" height="58" rx="12" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
        <text x="507" y="242" text-anchor="middle" font-size="12" font-weight="800" fill="#854d0e">Protein BCR::ABL</text>
        <text x="507" y="260" text-anchor="middle" font-size="10" font-weight="700" fill="#9a3412">Hoạt tính Tyrosine kinase liên tục</text>

        <line x1="556" y1="216" x2="594" y2="146" stroke="var(--danger)" stroke-width="2.8" marker-end="url(#arr91)"/>

        <!-- Tế bào CML -->
        <text x="600" y="28" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--danger)">Bệnh bạch cầu mạn dòng tủy</text>
        <text x="600" y="43" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-muted)">(Chronic Myelogenous Leukemia)</text>
        <g transform="translate(528,56)">
          <circle cx="34" cy="36" r="24" fill="#e2e8f0" stroke="#64748b" stroke-width="1.8"/>
          <path d="M24,30 Q36,20 44,36 Q32,48 22,38 Z" fill="#9d174d"/>
          <circle cx="96" cy="30" r="26" fill="#e2e8f0" stroke="#64748b" stroke-width="1.8"/>
          <path d="M84,24 Q98,14 108,28 Q94,42 84,32 Z" fill="#9d174d"/>
          <circle cx="130" cy="76" r="22" fill="#e2e8f0" stroke="#64748b" stroke-width="1.8"/>
          <path d="M122,70 Q134,62 140,76 Q128,86 122,76 Z" fill="#9d174d"/>
        </g>
      </svg>
    `,
    legends: [
      { n: 1, title: "Chuyển vị t(9;22) & Nhiễm sắc thể Philadelphia", text: "Đoạn mang gen ABL trên nhánh dài NST 9 chuyển sang gắn vào gen BCR trên NST 22 tạo NST 22 rút ngắn (NST Philadelphia) chứa gen tổ hợp BCR::ABL." },
      { n: 2, title: "Protein BCR::ABL & Điều trị TKI", text: "Gen BCR đóng vai trò vùng khởi động mạnh kích thích biểu hiện protein dung hợp BCR::ABL có hoạt tính tyrosine kinase nội bào cực mạnh; bị ức chế đặc hiệu bởi thuốc phân tử nhỏ TKI (Imatinib)." }
    ]
  },

  {
    id: "H9.2",
    lessonId: 8,
    chapter: "Chuyên đề III • Bài 9 GPB Đại cương",
    page: "tr. 189",
    type: "svg",
    title: "Hình 9.2. Con đường truyền tín hiệu P53 và các chiến lược phục hồi hoạt động trong bướu",
    caption: "Tác nhân stress (tổn thương DNA, hoạt hóa oncogene, thiếu oxy, rút ngắn telomere) giải phóng P53 khỏi MDM2 → 4 đáp ứng bảo vệ. Minh họa 2 chiến lược điều trị: Chất ức chế MDM2 và Liệu pháp phục hồi P53 đột biến.",
    note: "Chi tiết quan trọng: Bình thường P53 có thời gian bán hủy rất ngắn do gắn MDM2 phân hủy qua ubiquitin-proteasome. Trong ung thư, đột biến mất chức năng TP53 (chủ yếu exon 5–8) lại khiến protein P53 ĐỘT BIẾN có thời gian bán hủy KÉO DÀI HƠN và kìm hãm hoạt động của P53 lành!",
    svg: `
      <svg viewBox="0 0 720 385" class="fig-svg" role="img" aria-label="Hình 9.2 Con đường P53 và chiến lược phục hồi">
        <defs>
          <marker id="arr92" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 1 L10 5 L0 9 z" fill="var(--text-main)"/>
          </marker>
          <marker id="bar92" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <line x1="8" y1="1" x2="8" y2="9" stroke="#dc2626" stroke-width="3"/>
          </marker>
        </defs>

        <!-- 4 Stress đầu vào -->
        <text x="150" y="54" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--danger)">Tổn thương DNA</text>
        <text x="290" y="28" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--danger)">Hoạt hóa Oncogene</text>
        <text x="440" y="28" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--danger)">Thiếu oxy</text>
        <text x="570" y="54" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--danger)">Telomere rút ngắn</text>

        <line x1="184" y1="60" x2="332" y2="82" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr92)"/>
        <line x1="305" y1="36" x2="345" y2="70" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr92)"/>
        <line x1="425" y1="36" x2="375" y2="70" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr92)"/>
        <line x1="530" y1="60" x2="388" y2="82" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr92)"/>

        <!-- P53 nhỏ trên -->
        <circle cx="360" cy="92" r="20" fill="#fde047" stroke="#ca8a04" stroke-width="2"/>
        <text x="360" y="97" text-anchor="middle" font-size="12" font-weight="800" fill="#78350f">P53</text>

        <line x1="360" y1="114" x2="360" y2="156" stroke="var(--text-main)" stroke-width="3.5" marker-end="url(#arr92)"/>

        <!-- Chất ức chế MDM2 -->
        <text x="546" y="102" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--accent)">Chất ức chế MDM2</text>
        <path d="M510,120 A24,24 0 1,0 526,154 L506,138 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
        <line x1="484" y1="138" x2="392" y2="108" stroke="#dc2626" stroke-width="3" marker-end="url(#bar92)"/>
        <line x1="528" y1="156" x2="544" y2="180" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr92)"/>

        <!-- Chiến lược phục hồi P53 đột biến -->
        <text x="150" y="122" text-anchor="middle" font-size="11" font-weight="800" fill="var(--primary)">Liệu pháp phục hồi</text>
        <text x="150" y="137" text-anchor="middle" font-size="11" font-weight="800" fill="var(--primary)">hoạt động P53 đột biến</text>
        <polyline points="178,146 178,200 296,200" fill="none" stroke="var(--primary)" stroke-width="3.5" marker-end="url(#arr92)"/>

        <!-- P53 hoạt động ở tâm -->
        <circle cx="360" cy="198" r="38" fill="#fbbf24" stroke="#b45309" stroke-width="2.5"/>
        <text x="360" y="205" text-anchor="middle" font-size="18" font-weight="800" fill="#451a03">P53</text>

        <!-- MDM2 phân hủy P53 -->
        <polygon points="502,198 548,180 594,198 548,216" fill="#4ade80" stroke="#15803d" stroke-width="2"/>
        <text x="548" y="202" text-anchor="middle" font-size="11.5" font-weight="800" fill="#14532d">MDM2</text>
        <line x1="402" y1="198" x2="496" y2="198" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr92)"/>

        <!-- 4 Kết cục đầu ra -->
        <line x1="316" y1="230" x2="122" y2="274" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr92)"/>
        <line x1="340" y1="238" x2="276" y2="274" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr92)"/>
        <line x1="380" y1="238" x2="438" y2="274" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr92)"/>
        <line x1="404" y1="230" x2="588" y2="274" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arr92)"/>

        <!-- 1. Ngừng chu kỳ tế bào -->
        <circle cx="110" cy="312" r="28" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
        <circle cx="110" cy="312" r="14" fill="var(--bg-card)" stroke="#0284c7" stroke-width="1.5"/>
        <text x="110" y="362" text-anchor="middle" font-size="11" font-weight="800" fill="var(--text-main)">1. Ngừng chu kỳ TB</text>
        <text x="110" y="376" text-anchor="middle" font-size="9.5" fill="var(--accent)">(qua P21/CIP1 tại G1)</text>

        <!-- 2. Sửa chữa DNA -->
        <path d="M242 312 Q258 292 274 312 T306 312" fill="none" stroke="#15803d" stroke-width="3.5"/>
        <path d="M242 312 Q258 332 274 312 T306 312" fill="none" stroke="#0284c7" stroke-width="3.5"/>
        <text x="274" y="362" text-anchor="middle" font-size="11" font-weight="800" fill="var(--text-main)">2. Sửa chữa DNA</text>
        <text x="274" y="376" text-anchor="middle" font-size="9.5" fill="var(--success)">(Bảo toàn bộ gen)</text>

        <!-- 3. Chết theo chương trình -->
        <circle cx="438" cy="312" r="22" fill="#e0f2fe" stroke="#0369a1" stroke-width="2" stroke-dasharray="4,3"/>
        <circle cx="412" cy="292" r="5" fill="#38bdf8"/><circle cx="464" cy="296" r="6" fill="#38bdf8"/>
        <circle cx="460" cy="332" r="5" fill="#38bdf8"/>
        <text x="438" y="362" text-anchor="middle" font-size="11" font-weight="800" fill="var(--text-main)">3. Chết tế bào theo</text>
        <text x="438" y="376" text-anchor="middle" font-size="11" font-weight="800" fill="var(--text-main)">chương trình (BAX)</text>

        <!-- 4. Sự lão hóa -->
        <ellipse cx="566" cy="312" rx="22" ry="15" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
        <circle cx="566" cy="312" r="6" fill="#94a3b8"/>
        <ellipse cx="614" cy="312" rx="22" ry="15" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
        <circle cx="614" cy="312" r="6" fill="#94a3b8"/>
        <text x="590" y="362" text-anchor="middle" font-size="11" font-weight="800" fill="var(--text-main)">4. Sự lão hóa</text>
        <text x="590" y="376" text-anchor="middle" font-size="9.5" fill="var(--text-muted)">(Ngừng phân chia vĩnh viễn)</text>
      </svg>
    `,
    legends: [
      { n: 1, title: "Kích hoạt P53 & Vai trò điều phối", text: "Khi có tổn thương DNA, hoạt hóa oncogene, thiếu oxy hay rút ngắn telomere, P53 giải phóng khỏi MDM2 để kích hoạt P21/CIP1 (kéo dài G1 sửa DNA), BAX (apoptosis) hoặc lão hóa." },
      { n: 2, title: "Hai chiến lược điều trị trúng đích P53", text: "(1) Chất ức chế MDM2 (ngăn MDM2 gắn phân hủy P53 bình thường); (2) Liệu pháp tái cấu trúc phục hồi hoạt động bình thường cho protein P53 đột biến (chủ yếu ở exon 5–8)." }
    ]
  }
];
