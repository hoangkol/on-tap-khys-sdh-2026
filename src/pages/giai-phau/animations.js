// ==========================================================================
// 7 SƠ ĐỒ ATLAS & HOẠT CẢNH MINH HỌA GIẢI PHẪU TRỰC QUAN (ANIMATED SVG)
// Người học có thể bấm từng bước hoặc Chạy tự động để quan sát chi tiết
// ==========================================================================

window.ProcessAnimations = {
  timer: null,
  currentLessonId: null,
  currentStep: 0,
  isPlaying: false,

  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.isPlaying = false;
  },

  specs: {
    // ======================================================================
    // BÀI 1: SƠ ĐỒ 4 VÙNG DẠ DÀY – 2 VÒNG MẠCH & THOÁT VỊ HOÀNH
    // ======================================================================
    1: {
      title: "🗺️ Atlas Tương tác 4 Bước: Hình thể – Lớp cơ – 2 Vòng mạch & Thoát vị Hoành",
      steps: [
        {
          name: "1. 4 Vùng & Mốc Cột sống (T10 – L1)",
          desc: "Từ trên xuống: <strong>Tâm vị</strong> (ngang <strong>Ngực 10</strong>, lệch trái 2,5 cm) → <strong>Đáy vị</strong> (trên khuyết tâm vị, chứa bóng hơi khi đứng) → <strong>Thân vị</strong> (đến <strong>khuyết góc</strong> bờ cong nhỏ) → <strong>Hang &amp; Ống môn vị</strong> (bên phải <strong>L1</strong> ~1,25 cm).",
          highlight: "Đáy vị = phần cao nhất; Khuyết góc = ranh giới thân & môn vị"
        },
        {
          name: "2. Phân bố 3 Lớp cơ & Liên quan Mặt sau",
          desc: "<strong>Cơ dọc</strong> dày nhất ở bờ cong nhỏ; <strong>Cơ vòng</strong> dày nhất ở môn vị (cơ thắt môn vị); <strong>Cơ chéo</strong> tập trung ở đáy vị. Mặt sau thân vị tạo <strong>thành trước hậu cung mạc nối</strong> (qua đó liên quan đuôi tụy, lách, thận T – KHÔNG liên quan Gan!).",
          highlight: "Mặt sau KHÔNG liên quan với Gan"
        },
        {
          name: "3. Hai Vòng Động mạch Bờ cong (từ ĐM Thân tạng)",
          desc: "<strong>Bờ cong nhỏ:</strong> ĐM vị trái (ĐM thân tạng) + ĐM vị phải (ĐM gan riêng). <strong>Bờ cong lớn:</strong> ĐM vị mạc nối phải (ĐM vị tá tràng) + ĐM vị mạc nối trái (ĐM lách). Tĩnh mạch đổ về <strong>TM cửa</strong> (mốc: TM trước môn vị).",
          highlight: "4 động mạch chính tạo 2 vòng mạch + ĐM vị ngắn ở đáy vị"
        },
        {
          name: "4. Thần kinh X & 2 Kiểu Thoát vị Hoành",
          desc: "Thân lang thang trước (TK X trái) &amp; sau kích thích tiết HCl (cắt TK X → giảm tiết acid). <strong>Thoát vị trượt:</strong> tâm vị trượt lên trung thất → có trào ngược. <strong>Cạnh thực quản:</strong> tâm vị cố định dưới hoành, đáy vị chui lên → không trào ngược.",
          highlight: "Thoát vị trượt hay gặp hơn & gây trào ngược dịch vị"
        }
      ],
      renderSvg(s) {
        const op = (idx) => (s === idx ? "1" : "0.35");
        return `
          <svg viewBox="0 0 680 280" class="proc-svg">
            <rect x="4" y="4" width="672" height="272" rx="14" fill="var(--bg-card)" stroke="var(--border)"/>
            <!-- Diaphragm arc -->
            <path d="M40 72 Q175 28 320 72" fill="none" stroke="#94a3b8" stroke-width="4" stroke-dasharray="6,4"/>
            <text x="175" y="34" text-anchor="middle" font-size="11" font-weight="700" fill="var(--text-muted)">Vòm hoành trái (Lỗ thực quản T10)</text>

            <!-- Esophagus -->
            <path d="M168 25 L168 78" stroke="#fb7185" stroke-width="14" stroke-linecap="round"/>
            <!-- J-Stomach Body -->
            <path d="M160 76 C125 45, 72 62, 74 115 C76 175, 118 228, 185 224 C232 220, 255 198, 282 185 L278 158 C242 162, 224 148, 212 126 C202 108, 185 95, 175 76 Z"
                  fill="#ffe4e6" stroke="#be123c" stroke-width="3"/>
            <!-- Duodenum D1 -->
            <path d="M280 172 C305 162, 315 182, 310 212" fill="none" stroke="#fb923c" stroke-width="16" stroke-linecap="round"/>

            <!-- Step 0: Regions & Vertebrae landmarks -->
            <g opacity="${op(0)}">
              <circle cx="104" cy="76" r="16" fill="#fecdd3" stroke="#be123c" stroke-dasharray="3,2"/>
              <text x="104" y="80" text-anchor="middle" font-size="9.5" font-weight="800" fill="#881337">ĐÁY VỊ</text>
              <line x1="168" y1="80" x2="215" y2="80" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3,2"/>
              <text x="242" y="84" font-size="10.5" font-weight="800" fill="#0284c7">Tâm vị (T10)</text>
              <circle cx="212" cy="134" r="4.5" fill="#d97706"/>
              <text x="220" y="138" font-size="10" font-weight="700" fill="#b45309">Khuyết góc</text>
              <text x="140" y="155" text-anchor="middle" font-size="11.5" font-weight="800" fill="#9f1239">THÂN VỊ</text>
              <text x="275" y="150" font-size="10" font-weight="800" fill="#ea580c">Môn vị (L1)</text>
              ${s === 0 ? `<circle cx="104" cy="60" r="4" fill="#be123c"><animate attributeName="r" values="3;7;3" dur="1.4s" repeatCount="indefinite"/></circle>` : ""}
            </g>

            <!-- Step 1: Muscle layers & Posterior relations -->
            <g opacity="${op(1)}">
              <path d="M180 86 Q198 122 232 156" fill="none" stroke="#7c3aed" stroke-width="5" stroke-linecap="round"/>
              <text x="262" y="114" font-size="10" font-weight="700" fill="#7c3aed">Cơ dọc dày nhất</text>
              <rect x="271" y="155" width="12" height="33" rx="4" fill="#f59e0b"/>
              <text x="315" y="176" font-size="10" font-weight="800" fill="#b45309">Cơ vòng dày nhất (Môn vị)</text>
              <path d="M90 100 L145 135 M88 120 L142 152" stroke="#0f766e" stroke-width="2.5" stroke-linecap="round"/>
              <text x="115" y="195" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0f766e">Cơ chéo ở đáy vị</text>
            </g>

            <!-- Step 2: Blood arcades -->
            <g opacity="${op(2)}">
              <!-- Lesser curvature arcade -->
              <path d="M184 82 Q212 128 272 152" fill="none" stroke="#dc2626" stroke-width="3.5"/>
              <!-- Greater curvature arcade -->
              <path d="M68 118 C65 185, 118 238, 192 234 C236 230, 265 212, 286 190" fill="none" stroke="#dc2626" stroke-width="3.5"/>
              <text x="215" y="250" font-size="10" font-weight="800" fill="#dc2626">Vòng ĐM bờ cong lớn (Vị mạc nối P &amp; T)</text>
              ${s === 2 ? `<circle cx="184" cy="82" r="4" fill="#fde047"><animateMotion dur="2.2s" repeatCount="indefinite" path="M0,0 Q28,46 88,70"/></circle>` : ""}
            </g>

            <!-- Right panel: Hiatal Hernia / Relations comparison -->
            <rect x="368" y="18" width="292" height="244" rx="12" fill="var(--bg-main)" stroke="var(--border)"/>
            <text x="514" y="40" text-anchor="middle" font-size="12" font-weight="800" fill="var(--primary)">LIÊN QUAN &amp; THOÁT VỊ HOÀNH</text>

            <rect x="382" y="52" width="264" height="86" rx="8" fill="${s === 1 ? "var(--accent-light)" : "var(--bg-card)"}" stroke="${s === 1 ? "var(--accent)" : "var(--border)"}"/>
            <text x="394" y="70" font-size="11" font-weight="800" fill="var(--accent)">Mặt sau qua Hậu cung mạc nối:</text>
            <text x="394" y="88" font-size="10.5" fill="var(--text-main)">✓ Trụ trái hoành • Đuôi tụy • ĐM/TM lách</text>
            <text x="394" y="104" font-size="10.5" fill="var(--text-main)">✓ Thận trái • Tuyến thượng thận trái</text>
            <text x="394" y="122" font-size="10.5" font-weight="800" fill="var(--danger)">✗ KHÔNG liên quan Gan (Gan ở trước/trên phải)</text>

            <rect x="382" y="150" width="126" height="98" rx="8" fill="${s === 3 ? "var(--danger-light)" : "var(--bg-card)"}" stroke="${s === 3 ? "var(--danger)" : "var(--border)"}"/>
            <text x="445" y="170" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--danger)">Thoát vị Trượt</text>
            <text x="445" y="188" text-anchor="middle" font-size="9.5" fill="var(--text-main)">Tâm vị trượt lên trên</text>
            <text x="445" y="204" text-anchor="middle" font-size="9.5" fill="var(--text-main)">qua lỗ thực quản</text>
            <text x="445" y="226" text-anchor="middle" font-size="10" font-weight="800" fill="var(--danger)">→ CÓ trào ngược</text>

            <rect x="520" y="150" width="126" height="98" rx="8" fill="${s === 3 ? "var(--success-light)" : "var(--bg-card)"}" stroke="${s === 3 ? "var(--success)" : "var(--border)"}"/>
            <text x="583" y="170" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--success)">Cạnh thực quản</text>
            <text x="583" y="188" text-anchor="middle" font-size="9.5" fill="var(--text-main)">Tâm vị giữ nguyên</text>
            <text x="583" y="204" text-anchor="middle" font-size="9.5" fill="var(--text-main)">Đáy vị chui lên trước</text>
            <text x="583" y="226" text-anchor="middle" font-size="10" font-weight="800" fill="var(--success)">→ Không trào ngược</text>
          </svg>
        `;
      }
    },

    // ======================================================================
    // BÀI 2: GAN – CHỮ H MẶT TẠNG – 8 HẠ PHÂN THÙY & TAM GIÁC CALOT
    // ======================================================================
    2: {
      title: "🗺️ Atlas Tương tác 4 Bước: 8 Hạ phân thùy (I–VIII), Chữ H & Tam giác Calot",
      steps: [
        {
          name: "1. Ba Khe Tĩnh mạch Gan Chia 2 Nửa Gan",
          desc: "<strong>Khe chính (Khe giữa):</strong> từ giữa hố túi mật → giữa TMCD (chứa <strong>TM gan giữa</strong>). <strong>Khe trái:</strong> theo DC liềm (chứa TM gan trái). <strong>Khe phải:</strong> từ bờ phải TMCD xuống bờ dưới cách đầu ngoài 3 khoát ngón tay (chứa TM gan phải).",
          highlight: "Dây chằng liềm = Khe trái (KHÔNG phải Khe giữa!)"
        },
        {
          name: "2. Bản đồ 8 Hạ phân thùy (Couinaud I–VIII)",
          desc: "<strong>Gan trái:</strong> Bên (II trên, III dưới) &amp; Giữa (IV mặt hoành + tạng; <strong>I = Thùy đuôi</strong> chỉ thấy ở mặt tạng). <strong>Gan phải:</strong> Trước (V dưới, VIII trên) &amp; Sau (VI dưới, VII trên).",
          highlight: "Mặt hoành giữa khe chính và khe trái = Hạ phân thùy IV"
        },
        {
          name: "3. Hình chữ H Mặt tạng & Khoang Morison",
          desc: "Rãnh dọc phải = hố túi mật (trước) + rãnh TMCD (sau). Rãnh dọc trái = khuyết DC tròn (trước) + khe DC tĩnh mạch (sau). Rãnh ngang = <strong>Cửa gan</strong> (ĐM gan riêng + TM cửa + Ống gan chung).",
          highlight: "Di tích: DC tròn (TM rốn) • DC tĩnh mạch (ống tĩnh mạch)"
        },
        {
          name: "4. Đường mật Ngoài gan & Tam giác Calot",
          desc: "Đường mật chính (không cắt được): Ống gan P/T → Ống gan chung → <strong>Ống mật chủ</strong> (hẹp nhất đoạn trong thành tá tràng). <strong>Tam giác Calot:</strong> Ống gan chung + Ống túi mật + Mặt tạng gan → chứa <strong>ĐM túi mật</strong>.",
          highlight: "Đáy túi mật chiếu ngang sụn sườn 9 đường trung đòn phải"
        }
      ],
      renderSvg(s) {
        const hi = (cond) => (cond ? "2.8" : "1.3");
        return `
          <svg viewBox="0 0 680 280" class="proc-svg">
            <rect x="4" y="4" width="672" height="272" rx="14" fill="var(--bg-card)" stroke="var(--border)"/>

            <!-- Left panel: Couinaud 8 Segments on Anterior/Diaphragmatic view -->
            <text x="190" y="28" text-anchor="middle" font-size="12" font-weight="800" fill="var(--primary)">BẢN ĐỒ 8 HẠ PHÂN THÙY &amp; 3 KHE TM GAN</text>
            <!-- Liver outline -->
            <path d="M35 165 C28 95, 78 48, 175 48 C265 48, 335 72, 345 102 C335 128, 250 140, 175 165 C105 188, 42 195, 35 165 Z"
                  fill="#ffe4e6" stroke="#9f1239" stroke-width="2.5"/>

            <!-- Segment blocks -->
            <g font-size="12" font-weight="800" text-anchor="middle">
              <!-- VII & VI (Posterior Right) -->
              <rect x="46" y="88" width="44" height="36" rx="6" fill="${s === 1 ? "#fecdd3" : "#fff1f2"}" stroke="#be123c"/>
              <text x="68" y="110" fill="#881337">VII</text>
              <rect x="46" y="130" width="44" height="36" rx="6" fill="${s === 1 ? "#fecdd3" : "#fff1f2"}" stroke="#be123c"/>
              <text x="68" y="152" fill="#881337">VI</text>
              <!-- VIII & V (Anterior Right) -->
              <rect x="102" y="66" width="54" height="44" rx="6" fill="${s === 1 ? "#fde68a" : "#fffbeb"}" stroke="#d97706"/>
              <text x="129" y="92" fill="#92400e">VIII</text>
              <rect x="102" y="116" width="54" height="44" rx="6" fill="${s === 1 ? "#fde68a" : "#fffbeb"}" stroke="#d97706"/>
              <text x="129" y="142" fill="#92400e">V</text>
              <!-- IV (Medial Left) -->
              <rect x="174" y="64" width="54" height="80" rx="6" fill="${s === 1 ? "#bae6fd" : "#f0f9ff"}" stroke="#0284c7"/>
              <text x="201" y="108" fill="#0369a1">IV</text>
              <!-- II & III (Lateral Left) -->
              <rect x="242" y="64" width="54" height="34" rx="6" fill="${s === 1 ? "#bbf7d0" : "#f0fdf4"}" stroke="#16a34a"/>
              <text x="269" y="85" fill="#166534">II</text>
              <rect x="242" y="102" width="68" height="30" rx="6" fill="${s === 1 ? "#bbf7d0" : "#f0fdf4"}" stroke="#16a34a"/>
              <text x="276" y="121" fill="#166534">III</text>
              <!-- Caudate I badge -->
              <rect x="170" y="198" width="128" height="28" rx="6" fill="#ede9fe" stroke="#7c3aed"/>
              <text x="234" y="216" font-size="10.5" fill="#5b21b6">HPT I = Thùy đuôi (Mặt tạng)</text>
            </g>

            <!-- 3 Fissures (Hepatic Veins) -->
            <line x1="95" y1="54" x2="95" y2="178" stroke="#2563eb" stroke-width="${hi(s === 0)}" stroke-dasharray="5,3"/>
            <text x="95" y="200" text-anchor="middle" font-size="9.5" font-weight="800" fill="#2563eb">Khe Phải</text>
            <line x1="164" y1="44" x2="164" y2="175" stroke="#dc2626" stroke-width="${hi(s === 0)}"/>
            <text x="164" y="190" text-anchor="middle" font-size="9.5" font-weight="800" fill="#dc2626">Khe Chính</text>
            <line x1="234" y1="50" x2="234" y2="152" stroke="#0f766e" stroke-width="${hi(s === 0)}" stroke-dasharray="5,3"/>
            <text x="270" y="54" font-size="9.5" font-weight="800" fill="#0f766e">Khe Trái (DC liềm)</text>

            <text x="190" y="250" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-muted)">
              TM gan giữa nằm trong Khe chính • TM gan phải (Khe phải) • TM gan trái (Khe trái)
            </text>

            <!-- Right panel: Visceral H & Calot Triangle -->
            <rect x="372" y="16" width="292" height="248" rx="12" fill="var(--bg-main)" stroke="var(--border)"/>
            <text x="518" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--teal)">MẶT TẠNG (CHỮ H) &amp; TAM GIÁC CALOT</text>

            <!-- H-shape schematic -->
            <g opacity="${s === 2 ? 1 : 0.45}">
              <line x1="425" y1="56" x2="425" y2="146" stroke="#2563eb" stroke-width="5" stroke-linecap="round"/>
              <line x1="510" y1="56" x2="510" y2="146" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
              <line x1="425" y1="100" x2="510" y2="100" stroke="#be123c" stroke-width="6" stroke-linecap="round"/>
              <text x="415" y="72" text-anchor="end" font-size="9.5" font-weight="700" fill="#2563eb">TMCD</text>
              <text x="415" y="138" text-anchor="end" font-size="9.5" font-weight="700" fill="#16a34a">Túi mật</text>
              <text x="520" y="72" font-size="9.5" font-weight="700" fill="#b45309">Khe DC TM</text>
              <text x="520" y="138" font-size="9.5" font-weight="700" fill="#b45309">Khuyết DC tròn</text>
              <text x="468" y="92" text-anchor="middle" font-size="9.5" font-weight="800" fill="#be123c">CỬA GAN</text>
            </g>

            <!-- Calot Triangle & Biliary Tree -->
            <g opacity="${s === 3 ? 1 : 0.55}">
              <rect x="386" y="158" width="264" height="96" rx="8" fill="var(--bg-card)" stroke="${s === 3 ? "var(--success)" : "var(--border)"}" stroke-width="${s === 3 ? 2.5 : 1}"/>
              <!-- Triangle Calot -->
              <polygon points="435,172 485,172 485,222" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
              <circle cx="468" cy="188" r="4" fill="#dc2626"/>
              <text x="502" y="178" font-size="10.5" font-weight="800" fill="#16a34a">Tam giác Calot:</text>
              <text x="502" y="194" font-size="9.8" fill="var(--text-main)">• Trên: Mặt tạng gan</text>
              <text x="502" y="209" font-size="9.8" fill="var(--text-main)">• Trong: Ống gan chung</text>
              <text x="502" y="224" font-size="9.8" fill="var(--text-main)">• Dưới: Ống túi mật</text>
              <text x="502" y="242" font-size="10" font-weight="800" fill="#dc2626">→ Chứa ĐM túi mật (từ ĐM gan P)</text>
            </g>
          </svg>
        `;
      }
    },

    // ======================================================================
    // BÀI 3: TỤY, KHỐI TÁ TỤY & BÓNG GAN TỤY (VATER)
    // ======================================================================
    3: {
      title: "🗺️ Atlas Tương tác 4 Bước: Khối Tá Tụy – Bó mạch MTTT & Hệ Ống Tụy",
      steps: [
        {
          name: "1. 4 Phần Tụy & D1–D4 Tá tràng",
          desc: "<strong>Đầu tụy</strong> nằm trong khung chữ C (D2 dính chặt nhất); <strong>Mỏm móc</strong> ở dưới–trái; <strong>Cổ tụy</strong> ở trước bó mạch MTTT; <strong>Thân tụy</strong> (mặt trước qua hậu cung mạc nối liên quan dạ dày); <strong>Đuôi tụy</strong> hướng rốn lách.",
          highlight: "Mỏm móc kẹp giữa ĐMC bụng (sau) và Bó mạch MTTT (trước)"
        },
        {
          name: "2. Bó mạch MTTT & Hội chứng Von Rokitansky (D3)",
          desc: "Bó mạch MTTT ấn từ sau vào cổ tụy (tạo khuyết tụy), rồi bắt chéo <strong>phía trước mỏm móc &amp; D3 tá tràng</strong>. Khi kẹp hẹp sẽ chèn ép D3 (Hội chứng ĐM MTTT) và TM thận trái (Nutcracker).",
          highlight: "D3 nằm trước L3–L4 → dễ dập vỡ trong chấn thương bụng kín"
        },
        {
          name: "3. Ống Wirsung, Santorini & Bóng Vater (Oddi)",
          desc: "<strong>Ống Wirsung</strong> (từ đuôi→đầu) trong 50% trường hợp hợp với <strong>ống mật chủ</strong> tạo <strong>bóng gan–tụy (Vater)</strong> có cơ vòng Oddi đổ vào <strong>nhú tá lớn</strong> (thành sau trong D2). Ống phụ Santorini đổ vào nhú tá bé (trên trước ~2 cm).",
          highlight: "U đầu tụy chèn OMC → Vàng da; Sỏi kẹt Vater → Viêm tụy cấp"
        },
        {
          name: "4. Hai Nguồn Cấp máu & Tế bào Nội tiết",
          desc: "<strong>Đầu tụy:</strong> 2 cung ĐM tá tụy trước (gần tá tràng hơn) &amp; sau (nối ĐM vị tá tràng ↔ ĐM MTTT). <strong>Thân–đuôi:</strong> ĐM tụy lưng, tụy lớn, đuôi tụy (từ ĐM lách). <strong>Nội tiết:</strong> A (Glucagon – thân/đuôi), B (Insulin), D (Somatostatin), F (PP – nhiều ở mỏm móc).",
          highlight: "ĐM tụy lớn xuất phát từ ĐM lách"
        }
      ],
      renderSvg(s) {
        const hi = (cond) => (cond ? "1" : "0.4");
        return `
          <svg viewBox="0 0 680 280" class="proc-svg">
            <rect x="4" y="4" width="672" height="272" rx="14" fill="var(--bg-card)" stroke="var(--border)"/>

            <!-- C-Duodenum -->
            <path d="M135 55 L85 55 C60 55, 58 80, 58 125 C58 175, 62 205, 95 212 L225 212 C255 212, 265 190, 265 150"
                  fill="none" stroke="#fed7aa" stroke-width="32" stroke-linecap="round"/>
            <path d="M135 55 L85 55 C60 55, 58 80, 58 125 C58 175, 62 205, 95 212 L225 212 C255 212, 265 190, 265 150"
                  fill="none" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,4"/>

            <!-- Pancreas Silhouette -->
            <path d="M122 86 C158 86, 175 102, 222 100 L375 68 C405 62, 412 88, 378 96 L232 135 C208 142, 200 176, 185 186 C152 192, 132 186, 118 176 C92 160, 92 98, 122 86 Z"
                  fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>

            <!-- Step 0 labels -->
            <g opacity="${hi(s === 0)}" font-size="10.5" font-weight="800" fill="#92400e">
              <text x="128" y="138" text-anchor="middle">Đầu</text>
              <text x="165" y="176" text-anchor="middle">Mỏm móc</text>
              <text x="205" y="124" text-anchor="middle">Cổ</text>
              <text x="295" y="102" text-anchor="middle">Thân tụy</text>
              <text x="380" y="84" text-anchor="middle">Đuôi</text>
              <text x="58" y="130" text-anchor="middle" fill="#c2410c">D2</text>
              <text x="150" y="236" text-anchor="middle" fill="#c2410c">D3 (trước L3–L4)</text>
            </g>

            <!-- Step 1: SMA & SMV clamp -->
            <g opacity="${hi(s === 1)}">
              <!-- Aorta behind -->
              <rect x="208" y="34" width="18" height="225" rx="6" fill="#fecaca" stroke="#dc2626" stroke-dasharray="3,2"/>
              <!-- SMA descending in front of uncinate & D3 -->
              <path d="M216 95 C216 142, 212 185, 204 252" fill="none" stroke="#dc2626" stroke-width="7" stroke-linecap="round"/>
              <path d="M196 105 L188 252" fill="none" stroke="#2563eb" stroke-width="7" stroke-linecap="round"/>
              <text x="242" y="246" font-size="10" font-weight="800" fill="#dc2626">Bó mạch MTTT kẹp D3 với ĐMC</text>
              ${s === 1 ? `<circle cx="204" cy="212" r="9" fill="none" stroke="#dc2626" stroke-width="2.5"><animate attributeName="r" values="6;13;6" dur="1.2s" repeatCount="indefinite"/></circle>` : ""}
            </g>

            <!-- Step 2: Wirsung + Santorini + CBD -> Ampulla of Vater -->
            <g opacity="${hi(s === 2)}">
              <!-- CBD -->
              <path d="M126 32 L126 112 L72 132" fill="none" stroke="#16a34a" stroke-width="4.5" stroke-linecap="round"/>
              <!-- Wirsung -->
              <path d="M385 78 L215 116 L135 128 L72 132" fill="none" stroke="#0284c7" stroke-width="4" stroke-linecap="round"/>
              <!-- Santorini -->
              <path d="M142 126 L108 106 L72 102" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
              <circle cx="72" cy="132" r="6" fill="#fbbf24" stroke="#b45309" stroke-width="2"/>
              <text x="26" y="136" font-size="9.5" font-weight="800" fill="#0369a1">Vater</text>
              <text x="24" y="104" font-size="9" font-weight="700" fill="#0284c7">Bé</text>
            </g>

            <!-- Right panel: Arterial Arcades & Endocrine Cells -->
            <rect x="424" y="16" width="240" height="248" rx="12" fill="var(--bg-main)" stroke="var(--border)"/>
            <text x="544" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--primary)">MẠCH MÁU &amp; NỘI TIẾT</text>

            <rect x="438" y="50" width="212" height="96" rx="8" fill="${s === 3 ? "var(--danger-light)" : "var(--bg-card)"}" stroke="${s === 3 ? "var(--danger)" : "var(--border)"}"/>
            <text x="448" y="68" font-size="10.5" font-weight="800" fill="var(--danger)">2 Nguồn Động mạch Tụy:</text>
            <text x="448" y="86" font-size="9.8" fill="var(--text-main)">• Đầu tụy: Cung trước &amp; sau</text>
            <text x="454" y="101" font-size="9.5" fill="var(--text-muted)">(ĐM Vị tá tràng ↔ ĐM MTTT)</text>
            <text x="448" y="120" font-size="9.8" fill="var(--text-main)">• Thân &amp; Đuôi: ĐM tụy lưng, lớn,</text>
            <text x="454" y="135" font-size="9.5" fill="var(--text-muted)">đuôi tụy (từ ĐM Lách) + ngang</text>

            <rect x="438" y="156" width="212" height="96" rx="8" fill="${s === 3 ? "var(--purple-light)" : "var(--bg-card)"}" stroke="${s === 3 ? "var(--purple)" : "var(--border)"}"/>
            <text x="448" y="174" font-size="10.5" font-weight="800" fill="var(--purple)">Tiểu đảo Langerhans (2%):</text>
            <text x="448" y="192" font-size="9.8" fill="var(--text-main)">• TB A: Glucagon (Thân &amp; Đuôi)</text>
            <text x="448" y="208" font-size="9.8" fill="var(--text-main)">• TB B: Insulin (Đồng đều)</text>
            <text x="448" y="224" font-size="9.8" fill="var(--text-main)">• TB D: Somatostatin (Đồng đều)</text>
            <text x="448" y="240" font-size="9.8" font-weight="700" fill="var(--primary)">• TB F (PP): Mỏm móc tụy</text>
          </svg>
        `;
      }
    },

    // ======================================================================
    // BÀI 4: TIM – 4 BUỒNG, CHU CHUYỂN VAN & 4 Ổ NGHE TIM A-P-T-M
    // ======================================================================
    4: {
      title: "🗺️ Atlas Tương tác 4 Bước: Dòng máu 4 Buồng – Chu chuyển Van & 4 Ổ Nghe Tim",
      steps: [
        {
          name: "1. Tuần hoàn Tim Phải (TM Chủ → Nhĩ P → Van 3 lá → Thất P → ĐMP)",
          desc: "<strong>Tâm nhĩ phải</strong> nhận TMCT (không van), TMCD (có van), xoang TM vành (có van) → qua <strong>Van 3 lá</strong> xuống <strong>Tâm thất phải</strong> (nón ĐM) → qua <strong>Van ĐM phổi</strong> lên phổi.",
          highlight: "Suy tim phải → máu dội ngược lên TM cổ (lỗ TMCT không van!)"
        },
        {
          name: "2. Tuần hoàn Tim Trái (4 TM Phổi → Nhĩ T → Van 2 lá → Thất T → ĐMC)",
          desc: "<strong>Tâm nhĩ trái</strong> (đáy tim, sau là <strong>thực quản</strong>) nhận 4 TM phổi → qua <strong>Van 2 lá</strong> xuống <strong>Tâm thất trái</strong> (thành dày gấp 3× thất phải) → qua <strong>Van ĐMC</strong> vào 3 xoang Valsalva (P, T, sau không vành).",
          highlight: "Hẹp van 2 lá → nhĩ trái to chèn thực quản gây nuốt nghẹn"
        },
        {
          name: "3. Thì Tâm trương vs Thì Tâm thu của Các Van tim",
          desc: "<strong>Thì tâm trương:</strong> Van 2 lá &amp; Van 3 lá <strong>MỞ</strong> để máu xuống thất; Van ĐMC &amp; ĐMP <strong>ĐÓNG</strong> (tràn máu vào 2 lỗ ĐMV dưới đường SJ). <strong>Thì tâm thu:</strong> Van ĐMC &amp; ĐMP <strong>MỞ</strong>; Van 2 lá &amp; 3 lá đóng.",
          highlight: "Cả 2 lỗ ĐM vành nằm dưới đường SJ (sinotubular)"
        },
        {
          name: "4. Diện tim 4 Góc & 4 Ổ Nghe Van tim A–P–T–M",
          desc: "<strong>A (ĐMC):</strong> KLS 2 bờ phải ức • <strong>P (ĐMP):</strong> KLS 2 bờ trái ức • <strong>T (3 lá):</strong> Mỏm mũi kiếm xương ức • <strong>M (2 lá):</strong> Mỏm tim (KLS 4–5 đường trung đòn trái).",
          highlight: "Bờ phải (bờ sắc): hoành–ức sườn; Bờ trái (bờ tù): ức sườn–phổi"
        }
      ],
      renderSvg(s) {
        const isDias = s === 2;
        return `
          <svg viewBox="0 0 680 280" class="proc-svg">
            <rect x="4" y="4" width="672" height="272" rx="14" fill="var(--bg-card)" stroke="var(--border)"/>
            <!-- Left side: 4-Chamber Schematic -->
            <text x="175" y="28" text-anchor="middle" font-size="12" font-weight="800" fill="var(--primary)">DÒNG MÁU 4 BUỒNG &amp; HOẠT ĐỘNG VAN</text>

            <!-- RA -->
            <rect x="48" y="48" width="112" height="78" rx="14" fill="${s === 0 ? "#dbeafe" : "#eff6ff"}" stroke="#2563eb" stroke-width="2.5"/>
            <text x="104" y="82" text-anchor="middle" font-size="11.5" font-weight="800" fill="#1e40af">NHĨ PHẢI</text>
            <text x="104" y="100" text-anchor="middle" font-size="9.5" fill="#1d4ed8">TMCT (0 van), TMCD, Hố bầu dục</text>

            <!-- LA -->
            <rect x="190" y="48" width="112" height="78" rx="14" fill="${s === 1 ? "#ffe4e6" : "#fff1f2"}" stroke="#be123c" stroke-width="2.5"/>
            <text x="246" y="82" text-anchor="middle" font-size="11.5" font-weight="800" fill="#9f1239">NHĨ TRÁI</text>
            <text x="246" y="100" text-anchor="middle" font-size="9.5" fill="#be123c">4 TM phổi • Sau: Thực quản</text>

            <!-- RV -->
            <rect x="48" y="148" width="112" height="98" rx="14" fill="${s === 0 ? "#dbeafe" : "#eff6ff"}" stroke="#2563eb" stroke-width="2.5"/>
            <text x="104" y="190" text-anchor="middle" font-size="11.5" font-weight="800" fill="#1e40af">THẤT PHẢI</text>
            <text x="104" y="208" text-anchor="middle" font-size="9.5" fill="#1d4ed8">Thành mỏng • Phễu → ĐMP</text>

            <!-- LV (thicker border!) -->
            <rect x="190" y="148" width="112" height="98" rx="14" fill="${s === 1 ? "#ffe4e6" : "#fff1f2"}" stroke="#be123c" stroke-width="6"/>
            <text x="246" y="190" text-anchor="middle" font-size="11.5" font-weight="800" fill="#9f1239">THẤT TRÁI (Dày 3×)</text>
            <text x="246" y="208" text-anchor="middle" font-size="9.5" fill="#be123c">Đỉnh tim → ĐMC (Valsalva)</text>

            <!-- Septum -->
            <rect x="166" y="54" width="18" height="186" rx="6" fill="#ede9fe" stroke="#7c3aed"/>
            <text x="175" y="152" text-anchor="middle" font-size="9" font-weight="800" fill="#5b21b6" transform="rotate(-90 175 152)">VÁCH GIAN NHĨ / THẤT</text>

            <!-- Valves -->
            <rect x="82" y="126" width="44" height="20" rx="5" fill="${isDias ? "#16a34a" : "#f59e0b"}"/>
            <text x="104" y="140" text-anchor="middle" font-size="9.5" font-weight="800" fill="#fff">3 LÁ</text>
            <rect x="224" y="126" width="44" height="20" rx="5" fill="${isDias ? "#16a34a" : "#f59e0b"}"/>
            <text x="246" y="140" text-anchor="middle" font-size="9.5" font-weight="800" fill="#fff">2 LÁ</text>

            <!-- Animated blood flow -->
            ${s === 0 ? `<circle cx="104" cy="70" r="6" fill="#2563eb"><animate attributeName="cy" values="65;215;65" dur="1.8s" repeatCount="indefinite"/></circle>` : ""}
            ${s === 1 ? `<circle cx="246" cy="70" r="6" fill="#dc2626"><animate attributeName="cy" values="65;215;65" dur="1.8s" repeatCount="indefinite"/></circle>` : ""}

            <text x="175" y="264" text-anchor="middle" font-size="10.5" font-weight="700" fill="${isDias ? "var(--success)" : "var(--text-muted)"}">
              ${isDias ? "Thì Tâm trương: Van 3 lá & 2 lá MỞ (màu xanh) • Van ĐMP/ĐMC ĐÓNG" : "Rãnh vành nằm giữa phần Nhĩ và phần Thất (chạy từ trước ra hoành)"}
            </text>

            <!-- Right panel: Chest Auscultation Areas (A-P-T-M) -->
            <rect x="358" y="16" width="306" height="248" rx="12" fill="var(--bg-main)" stroke="var(--border)"/>
            <text x="511" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--accent)">4 Ổ NGHE VAN TIM TRÊN THÀNH NGỰC</text>

            <!-- Sternum schematic -->
            <rect x="496" y="56" width="28" height="145" rx="8" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5"/>
            <polygon points="502,201 518,201 510,224" fill="#cbd5e1" stroke="#64748b"/>
            <text x="510" y="132" text-anchor="middle" font-size="9.5" font-weight="800" fill="#334155" transform="rotate(-90 510 132)">XƯƠNG ỨC</text>

            <!-- Ribs KLS 2, 3, 4, 5 -->
            <line x1="408" y1="88" x2="620" y2="88" stroke="#cbd5e1" stroke-dasharray="4,3"/>
            <text x="392" y="92" font-size="9.5" font-weight="700" fill="var(--text-muted)">KLS 2</text>
            <line x1="408" y1="186" x2="635" y2="186" stroke="#cbd5e1" stroke-dasharray="4,3"/>
            <text x="392" y="190" font-size="9.5" font-weight="700" fill="var(--text-muted)">KLS 5</text>

            <!-- A (Aortic - RICS 2) -->
            <circle cx="476" cy="88" r="15" fill="${s === 3 ? "#dc2626" : "#f87171"}"/>
            <text x="476" y="92" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">A</text>
            <text x="444" y="70" text-anchor="middle" font-size="9" font-weight="700" fill="#dc2626">ĐMC (KLS 2 P)</text>

            <!-- P (Pulmonary - LICS 2) -->
            <circle cx="544" cy="88" r="15" fill="${s === 3 ? "#2563eb" : "#60a5fa"}"/>
            <text x="544" y="92" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">P</text>
            <text x="588" y="70" text-anchor="middle" font-size="9" font-weight="700" fill="#2563eb">ĐMP (KLS 2 T)</text>

            <!-- T (Tricuspid - Xiphoid) -->
            <circle cx="510" cy="212" r="15" fill="${s === 3 ? "#0f766e" : "#2dd4bf"}"/>
            <text x="510" y="216" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">T</text>
            <text x="458" y="246" text-anchor="middle" font-size="9" font-weight="700" fill="#0f766e">3 lá (Mũi kiếm)</text>

            <!-- M (Mitral - Apex LICS 5 MCL) -->
            <circle cx="606" cy="186" r="16" fill="${s === 3 ? "#be123c" : "#fb7185"}"/>
            <text x="606" y="190" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">M</text>
            <text x="598" y="246" text-anchor="middle" font-size="9" font-weight="700" fill="#be123c">2 lá (Mỏm KLS 4–5 TĐT)</text>
          </svg>
        `;
      }
    },

    // ======================================================================
    // BÀI 5: TIM – HỆ MẠCH VÀNH & HỆ DẪN TRUYỀN TỰ ĐỘNG
    // ======================================================================
    5: {
      title: "🗺️ Atlas Tương tác 4 Bước: Cấp máu Vách Gian thất – Mạch vành & Hệ Dẫn truyền",
      steps: [
        {
          name: "1. ĐM Vành phải (RCA) & Nút Xoang / Nút Nhĩ Thất",
          desc: "ĐMV phải chạy trong rãnh vành phải → nhánh nón, <strong>nhánh nút xoang nhĩ</strong>, <strong>nhánh bờ phải (bờ sắc)</strong> → tới giao điểm cho <strong>nhánh nút nhĩ thất</strong> &amp; <strong>nhánh gian thất sau</strong> (nuôi mặt hoành &amp; 1/3 sau vách gian thất).",
          highlight: "Tắc RCA → Nhồi máu mặt hoành + Block nhĩ thất"
        },
        {
          name: "2. Thân chung ĐMV Trái → ĐM Gian thất trước (LAD) & ĐM Mũ",
          desc: "<strong>LAD</strong> (cùng TM tim lớn) nuôi mỏm tim, thành trước thất trái (nhánh chéo) &amp; <strong>2/3 trước vách gian thất</strong> (nhánh vách trước). <strong>ĐM mũ</strong> cho <strong>nhánh bờ trái (bờ tù)</strong> (và gian thất sau nếu ưu thế trái).",
          highlight: "Tắc LAD → Hoại tử mỏm tim, thành trước thất trái, 2/3 trước vách"
        },
        {
          name: "3. Xoang Tĩnh mạch vành vs Tĩnh mạch đổ trực tiếp",
          desc: "Xoang TM vành (mặt hoành) nhận: <strong>TM tim lớn</strong> (cùng LAD), <strong>TM tim giữa</strong> (trên ĐM gian thất sau), TM tim nhỏ, TM sau thất trái, TM chếch nhĩ trái. Các <strong>TM tim trước &amp; cực nhỏ</strong> đổ thẳng vào nhĩ phải.",
          highlight: "Tĩnh mạch tim thông nối rộng rãi (ĐM vành thì KHÔNG!)"
        },
        {
          name: "4. Hệ Dẫn truyền Tự động (SA → AV → His → Purkinje)",
          desc: "<strong>Nút xoang nhĩ</strong> (thành phải nhĩ phải, cạnh lỗ TMCT) → <strong>Nút nhĩ thất</strong> (thành trong nhĩ phải, giữa lá trong van 3 lá &amp; lỗ xoang vành) → <strong>Bó His</strong> (qua phần màng vách gian thất) → <strong>Trụ P/T &amp; Sợi Purkinje</strong>.",
          highlight: "Tắc ĐMV phải sau nhánh bờ phải → Tổn thương Nút Nhĩ Thất"
        }
      ],
      renderSvg(s) {
        const hi = (cond) => (cond ? "1" : "0.35");
        return `
          <svg viewBox="0 0 680 280" class="proc-svg">
            <rect x="4" y="4" width="672" height="272" rx="14" fill="var(--bg-card)" stroke="var(--border)"/>

            <!-- Left panel: Coronary Tree & Septum Supply -->
            <text x="175" y="28" text-anchor="middle" font-size="12" font-weight="800" fill="var(--primary)">CẤP MÁU MẠCH VÀNH &amp; VÁCH GIAN THẤT</text>

            <!-- Aorta root -->
            <circle cx="175" cy="64" r="22" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5"/>
            <text x="175" y="68" text-anchor="middle" font-size="10" font-weight="800" fill="#991b1b">Gốc ĐMC</text>

            <!-- RCA branch (left on screen = patient's right) -->
            <g opacity="${hi(s === 0)}">
              <path d="M153 64 L85 88 L56 160 L96 226" fill="none" stroke="#dc2626" stroke-width="4.5" stroke-linecap="round"/>
              <path d="M85 88 L112 72" fill="none" stroke="#f59e0b" stroke-width="3"/>
              <text x="112" y="62" font-size="9.5" font-weight="700" fill="#b45309">Nút Xoang nhĩ</text>
              <text x="48" y="138" font-size="9.5" font-weight="800" fill="#dc2626">ĐMV Phải</text>
              <text x="58" y="198" font-size="9.5" font-weight="700" fill="#991b1b">Bờ phải</text>
              <path d="M96 226 L160 226" fill="none" stroke="#dc2626" stroke-width="3.5" stroke-dasharray="4,3"/>
              <text x="122" y="248" text-anchor="middle" font-size="9.5" font-weight="800" fill="#dc2626">Gian thất sau (1/3 sau) + Nút AV</text>
            </g>

            <!-- LMCA -> LAD & LCx (right on screen = patient's left) -->
            <g opacity="${hi(s === 1)}">
              <path d="M197 64 L232 80" fill="none" stroke="#be123c" stroke-width="5.5"/>
              <!-- LAD -->
              <path d="M232 80 L212 155 L205 225" fill="none" stroke="#be123c" stroke-width="4.5"/>
              <!-- Diagonal -->
              <path d="M220 124 L268 158" fill="none" stroke="#e11d48" stroke-width="3"/>
              <text x="274" y="162" font-size="9.5" font-weight="700" fill="#be123c">Nhánh chéo</text>
              <!-- LCx -->
              <path d="M232 80 L285 95 L302 155" fill="none" stroke="#f43f5e" stroke-width="4"/>
              <text x="292" y="88" font-size="9.5" font-weight="800" fill="#e11d48">ĐM Mũ → Bờ trái</text>
              <text x="232" y="205" font-size="9.5" font-weight="800" fill="#9f1239">LAD (2/3 trước + Mỏm)</text>
            </g>

            <!-- Septum bar -->
            <rect x="164" y="112" width="22" height="102" rx="6" fill="#ede9fe" stroke="#7c3aed"/>
            <rect x="164" y="112" width="22" height="68" rx="6" fill="#fb7185" opacity="0.6"/>
            <text x="175" y="148" text-anchor="middle" font-size="8.5" font-weight="800" fill="#fff">2/3</text>
            <text x="175" y="200" text-anchor="middle" font-size="8.5" font-weight="800" fill="#5b21b6">1/3</text>

            <!-- Right panel: Coronary Sinus + Conduction System -->
            <rect x="366" y="16" width="298" height="248" rx="12" fill="var(--bg-main)" stroke="var(--border)"/>
            <text x="515" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--accent)">XOANG VÀNH &amp; HỆ DẪN TRUYỀN</text>

            <rect x="380" y="50" width="270" height="90" rx="8" fill="${s === 2 ? "var(--accent-light)" : "var(--bg-card)"}" stroke="${s === 2 ? "var(--accent)" : "var(--border)"}"/>
            <text x="392" y="68" font-size="10.5" font-weight="800" fill="var(--accent)">Xoang TM Vành (Đổ vào Nhĩ phải):</text>
            <text x="392" y="86" font-size="9.8" fill="var(--text-main)">• <strong>TM tim lớn</strong> (cùng LAD) • <strong>TM tim giữa</strong> (trên G.thất sau)</text>
            <text x="392" y="102" font-size="9.8" fill="var(--text-main)">• TM tim nhỏ • TM sau thất trái • TM chếch nhĩ trái</text>
            <text x="392" y="122" font-size="9.8" font-weight="700" fill="var(--danger)">✗ TM tim trước &amp; cực nhỏ → Đổ thẳng vào Nhĩ phải</text>

            <rect x="380" y="150" width="270" height="102" rx="8" fill="${s === 3 ? "var(--warning-light)" : "var(--bg-card)"}" stroke="${s === 3 ? "var(--warning)" : "var(--border)"}"/>
            <text x="392" y="168" font-size="10.5" font-weight="800" fill="#b45309">Hệ Dẫn truyền Tự động Tim:</text>
            <text x="392" y="186" font-size="9.8" fill="var(--text-main)">1. <strong>Nút xoang nhĩ</strong> (thành P nhĩ P, cạnh lỗ TMCT)</text>
            <text x="392" y="202" font-size="9.8" fill="var(--text-main)">2. <strong>Nút nhĩ thất</strong> (thành trong nhĩ P, van 3 lá ↔ xoang vành)</text>
            <text x="392" y="218" font-size="9.8" fill="var(--text-main)">3. <strong>Bó His</strong> (bờ sau phần màng vách gian thất)</text>
            <text x="392" y="234" font-size="9.8" fill="var(--text-main)">4. <strong>Trụ Phải &amp; Trụ Trái</strong> → <strong>Sợi Purkinje</strong> (cơ nhú)</text>
          </svg>
        `;
      }
    },

    // ======================================================================
    // BÀI 6: ĐỘNG MẠCH CHỦ BỤNG & CÁC NHÁNH THEO TẦNG ĐỐT SỐNG
    // ======================================================================
    6: {
      title: "🗺️ Atlas Tương tác 4 Bước: Phân nhánh ĐMC Bụng (T12–L4) & Cung nối Tạng",
      steps: [
        {
          name: "1. Tầng T12–L1: ĐM Thân tạng & 3 Nhánh Bụng",
          desc: "ĐMC bụng chui lỗ cơ hoành (bờ dưới T12) → tách <strong>ĐM Thân tạng</strong> (T12–L1) chia 3 nhánh: <strong>ĐM vị trái</strong>, <strong>ĐM gan chung</strong> (→ gan riêng + vị tá tràng) và <strong>ĐM lách</strong>.",
          highlight: "Nhánh bụng không đôi: Thân tạng (T12–L1), MTTT (L1), MTTD (L3)"
        },
        {
          name: "2. Tầng L1: ĐM Mạc treo tràng trên & ĐM Thận",
          desc: "<strong>ĐM MTTT</strong> (dưới thân tạng 1 cm): 4 đoạn (sau tụy trong tứ giác TM → trước D3 tá tràng → rễ mạc treo → mạc treo ruột). <strong>ĐM thận</strong> ngang L1 (ĐM thận phải dài hơn &amp; đi sau TMCD).",
          highlight: "ĐM ruột thừa xuất phát từ ĐM hồi kết tràng (của ĐM MTTT)"
        },
        {
          name: "3. Tầng L3: ĐM Mạc treo tràng dưới & Cung Riolan",
          desc: "<strong>ĐM MTTD</strong> (ngang L3, trên chỗ chia đôi 4–5 cm): cấp máu 1/3 trái kết tràng ngang, kết tràng xuống, sigma &amp; trực tràng trên (nhánh tận ngang S3). Nhánh kết tràng trái nối kết tràng giữa tạo <strong>Cung Riolan</strong>.",
          highlight: "Cung mạch Riolan (ĐM bờ Drummond) nối hệ MTTT ↔ MTTD"
        },
        {
          name: "4. Tầng L4 & L5–S1: Chia đôi Chậu chung → Chậu trong/ngoài",
          desc: "Bờ trái <strong>L4</strong>: ĐMC chia 2 ĐM chậu chung + ĐM cùng giữa. Đĩa <strong>L5–S1</strong>: Chậu chung chia Chậu ngoài (cho ĐM thượng vị dưới &amp; mũ chậu sâu) và Chậu trong (11 nhánh: 8 thân trước + 3 thân sau).",
          highlight: "ĐM tử cung bắt chéo trước trên niệu quản cách cổ tử cung 1,5 cm"
        }
      ],
      renderSvg(s) {
        const hi = (cond) => (cond ? "1" : "0.35");
        return `
          <svg viewBox="0 0 680 280" class="proc-svg">
            <rect x="4" y="4" width="672" height="272" rx="14" fill="var(--bg-card)" stroke="var(--border)"/>

            <!-- Spine Ladder -->
            <text x="58" y="34" text-anchor="middle" font-size="11" font-weight="800" fill="var(--text-muted)">ĐỐT SỐNG</text>
            ${["T12", "L1", "L2", "L3", "L4", "L5"].map((lv, i) => `
              <rect x="34" y="${48 + i * 34}" width="46" height="26" rx="5" fill="var(--bg-main)" stroke="var(--border)"/>
              <text x="57" y="${65 + i * 34}" text-anchor="middle" font-size="11" font-weight="800" fill="var(--text-main)">${lv}</text>
            `).join("")}

            <!-- Abdominal Aorta Trunk -->
            <rect x="180" y="46" width="22" height="148" rx="8" fill="#dc2626"/>
            <line x1="191" y1="194" x2="148" y2="245" stroke="#dc2626" stroke-width="11" stroke-linecap="round"/>
            <line x1="191" y1="194" x2="234" y2="245" stroke="#dc2626" stroke-width="11" stroke-linecap="round"/>
            <line x1="191" y1="194" x2="191" y2="250" stroke="#991b1b" stroke-width="3"/>

            <!-- T12-L1 Celiac -->
            <g opacity="${hi(s === 0)}">
              <circle cx="204" cy="64" r="7" fill="#f97316" stroke="#fff" stroke-width="2"/>
              <path d="M210 64 L268 48 M210 64 L272 64 M210 64 L268 80" stroke="#f97316" stroke-width="3.5" stroke-linecap="round"/>
              <text x="278" y="52" font-size="10" font-weight="800" fill="#ea580c">Thân tạng: Vị trái – Gan chung – Lách</text>
            </g>

            <!-- L1 SMA + Renal -->
            <g opacity="${hi(s === 1)}">
              <circle cx="204" cy="92" r="7" fill="#dc2626" stroke="#fff" stroke-width="2"/>
              <line x1="210" y1="92" x2="274" y2="92" stroke="#dc2626" stroke-width="4"/>
              <text x="280" y="96" font-size="10" font-weight="800" fill="#dc2626">ĐM MTTT (L1): Ruột non &amp; 2/3P kết tràng ngang</text>
              <line x1="122" y1="96" x2="180" y2="96" stroke="#eab308" stroke-width="5"/>
              <text x="115" y="99" text-anchor="end" font-size="9.5" font-weight="800" fill="#b45309">Thận</text>
            </g>

            <!-- L3 IMA -->
            <g opacity="${hi(s === 2)}">
              <circle cx="204" cy="158" r="6" fill="#f59e0b" stroke="#fff" stroke-width="2"/>
              <line x1="210" y1="158" x2="274" y2="158" stroke="#f59e0b" stroke-width="3.5"/>
              <text x="280" y="162" font-size="10" font-weight="800" fill="#b45309">ĐM MTTD (L3): 1/3T ngang → Trực tràng trên</text>
              <path d="M248 92 Q265 125 248 158" fill="none" stroke="#16a34a" stroke-width="3" stroke-dasharray="4,2"/>
              <text x="270" y="128" font-size="9.5" font-weight="800" fill="#16a34a">Cung Riolan</text>
            </g>

            <!-- L4 & L5-S1 Bifurcation -->
            <g opacity="${hi(s === 3)}">
              <text x="245" y="196" font-size="10" font-weight="800" fill="#be123c">← Chia đôi bờ trái L4 (2 Chậu chung + Cùng giữa)</text>
              <text x="248" y="238" font-size="10" font-weight="800" fill="#9f1239">Đĩa L5–S1 → Chậu ngoài &amp; Chậu trong</text>
            </g>

            <!-- Summary Table Box on far right -->
            <rect x="498" y="18" width="166" height="244" rx="10" fill="var(--bg-main)" stroke="var(--border)"/>
            <text x="581" y="38" text-anchor="middle" font-size="11" font-weight="800" fill="var(--primary)">BẪY MẠCH BỤNG</text>
            <text x="508" y="60" font-size="9.8" font-weight="700" fill="var(--text-main)">✓ Vị P ← Gan riêng</text>
            <text x="508" y="82" font-size="9.8" font-weight="700" fill="var(--text-main)">✓ Vị mạc nối P ← Vị tá</text>
            <text x="508" y="104" font-size="9.8" font-weight="700" fill="var(--text-main)">✓ Vị mạc nối T ← Lách</text>
            <text x="508" y="126" font-size="9.8" font-weight="700" fill="var(--text-main)">✓ Túi mật ← Gan phải</text>
            <text x="508" y="148" font-size="9.8" font-weight="700" fill="var(--text-main)">✓ Ruột thừa ← Hồi kết tr.</text>
            <text x="508" y="170" font-size="9.8" font-weight="700" fill="var(--text-main)">✓ Tử cung ← Chậu trong</text>
            <text x="508" y="194" font-size="9.8" font-weight="800" fill="var(--danger)">✗ ĐM cơ bìu ← Thượng vị</text>
            <text x="512" y="208" font-size="9.3" fill="var(--danger)">dưới (Chậu ngoài)!</text>
            <text x="508" y="232" font-size="9.8" font-weight="800" fill="var(--accent)">✓ ĐM thận P dài hơn,</text>
            <text x="512" y="246" font-size="9.3" fill="var(--accent)">đi SAU TM chủ dưới!</text>
          </svg>
        `;
      }
    },

    // ======================================================================
    // BÀI 7: HỆ TĨNH MẠCH CỬA – TĨNH MẠCH CHỦ DƯỚI & 3 VÒNG NỐI CỬA CHỦ
    // ======================================================================
    7: {
      title: "🗺️ Atlas Tương tác 4 Bước: Hình thành TM Cửa – Tứ giác Tĩnh mạch & 3 Vòng nối Cửa Chủ",
      steps: [
        {
          name: "1. Hợp lưu Hệ Tĩnh mạch Cửa (TM MTTT + TM Lách)",
          desc: "Sau cổ tụy (ngang L1, trước TMCD): <strong>TM lách</strong> (đã nhận <strong>TM MTTD</strong>) hợp lưu với <strong>TM MTTT</strong> tạo thành <strong>Tĩnh mạch cửa</strong> → vào cửa gan lọc qua xoang gan → 3 TM gan → TMCD.",
          highlight: "TM trực tràng trên → TM MTTD → TM Lách → TM Cửa"
        },
        {
          name: "2. Tứ giác Tĩnh mạch Quanh đoạn sau tụy ĐM MTTT",
          desc: "4 tĩnh mạch xếp 2 bình diện: <strong>Trên:</strong> TM lách (trước PM); <strong>Trái:</strong> TM MTTD (trước PM); <strong>Phải:</strong> TM chủ dưới (sau PM); <strong>Dưới:</strong> TM thận trái (sau PM).",
          highlight: "BẪY THI: Tĩnh mạch Cửa KHÔNG thuộc 4 cạnh tứ giác này!"
        },
        {
          name: "3. Cơ chế Xơ gan Tăng áp lực TM Cửa (Giãn vs Không giãn)",
          desc: "Xơ gan chặn máu qua gan → áp lực tăng ngược ở: <strong>TM cửa, TM lách (lách to), TM MTTT, TM MTTD</strong>. Ngược lại, <strong>3 Tĩnh mạch gan</strong> (sau gan) và TMCD <strong>KHÔNG bị giãn</strong>!",
          highlight: "3 TM gan nằm SAU gan → Không giãn khi xơ gan"
        },
        {
          name: "4. Ba Vòng nối Cửa – Chủ Kinh điển",
          desc: "1) <strong>Thực quản dưới:</strong> TM vị trái ↔ TM thực quản (TM đơn) → <em>nôn máu</em>. 2) <strong>Hậu môn trực tràng:</strong> TM trực tràng trên ↔ giữa/dưới → <em>trĩ</em>. 3) <strong>Quanh rốn:</strong> TM cạnh rốn ↔ TM thành bụng → <em>đầu sứa</em>.",
          highlight: "TM vị trái & phải đổ trực tiếp TM cửa; TM trước môn vị → TM vị phải"
        }
      ],
      renderSvg(s) {
        const hi = (cond) => (cond ? "1" : "0.4");
        return `
          <svg viewBox="0 0 680 280" class="proc-svg">
            <rect x="4" y="4" width="672" height="272" rx="14" fill="var(--bg-card)" stroke="var(--border)"/>

            <!-- Portal Formation & Quad (Left half) -->
            <text x="175" y="28" text-anchor="middle" font-size="12" font-weight="800" fill="var(--purple)">HỢP LƯU TM CỬA &amp; TỨ GIÁC TĨNH MẠCH</text>

            <!-- Liver box -->
            <rect x="75" y="42" width="170" height="44" rx="10" fill="#ffe4e6" stroke="#be123c" stroke-width="2"/>
            <text x="160" y="68" text-anchor="middle" font-size="11.5" font-weight="800" fill="#881337">GAN (Xoang gan lọc máu)</text>

            <!-- Portal Trunk -->
            <line x1="160" y1="86" x2="160" y2="132" stroke="#7c3aed" stroke-width="10"/>
            <text x="172" y="114" font-size="10.5" font-weight="800" fill="#7c3aed">TM Cửa (L1)</text>

            <!-- SMV + Splenic V + IMV -->
            <g opacity="${hi(s === 0 || s === 1)}">
              <line x1="160" y1="132" x2="160" y2="232" stroke="#7c3aed" stroke-width="7"/>
              <text x="172" y="216" font-size="10" font-weight="800" fill="#6d28d9">TM MTTT</text>
              <line x1="160" y1="132" x2="295" y2="132" stroke="#7c3aed" stroke-width="7"/>
              <text x="242" y="122" font-size="10" font-weight="800" fill="#6d28d9">TM Lách</text>
              <line x1="242" y1="132" x2="242" y2="232" stroke="#8b5cf6" stroke-width="5.5"/>
              <text x="252" y="216" font-size="10" font-weight="800" fill="#7c3aed">TM MTTD</text>
            </g>

            <!-- IVC + Left Renal Vein (Vein Quad!) -->
            <g opacity="${hi(s === 1 || s === 2)}">
              <line x1="88" y1="54" x2="88" y2="246" stroke="#2563eb" stroke-width="10" stroke-linecap="round"/>
              <text x="50" y="182" text-anchor="middle" font-size="10" font-weight="800" fill="#2563eb" transform="rotate(-90 50 182)">TM CHỦ DƯỚI</text>
              <!-- Hepatic veins (NOT dilated!) -->
              <line x1="115" y1="64" x2="88" y2="64" stroke="#38bdf8" stroke-width="5"/>
              <text x="58" y="54" font-size="9" font-weight="800" fill="#0284c7">3 TM Gan</text>
              <!-- Left Renal Vein -->
              <line x1="88" y1="184" x2="282" y2="184" stroke="#2563eb" stroke-width="6"/>
              <text x="128" y="176" font-size="9.5" font-weight="800" fill="#1d4ed8">TM Thận T</text>
              <!-- Quad highlight box -->
              ${s === 1 ? `<rect x="94" y="136" width="144" height="44" rx="6" fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="5,3"/>` : ""}
            </g>

            <!-- Right half: 3 Portocaval Anastomoses -->
            <rect x="358" y="16" width="306" height="248" rx="12" fill="var(--bg-main)" stroke="var(--border)"/>
            <text x="511" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--danger)">3 VÒNG NỐI CỬA – CHỦ KHI XƠ GAN</text>

            <rect x="372" y="50" width="278" height="62" rx="8" fill="${s === 3 ? "var(--danger-light)" : "var(--bg-card)"}" stroke="${s === 3 ? "var(--danger)" : "var(--border)"}"/>
            <text x="384" y="68" font-size="10.5" font-weight="800" fill="var(--danger)">1. Thực quản dưới (Dưới niêm mạc)</text>
            <text x="384" y="84" font-size="9.8" fill="var(--text-main)">TM vị trái (Cửa) ↔ TM thực quản / TM đơn (Chủ)</text>
            <text x="384" y="100" font-size="9.8" font-weight="700" fill="var(--danger)">→ Giãn vỡ TM thực quản (Nôn máu ồ ạt)</text>

            <rect x="372" y="122" width="278" height="62" rx="8" fill="${s === 3 ? "var(--warning-light)" : "var(--bg-card)"}" stroke="${s === 3 ? "var(--warning)" : "var(--border)"}"/>
            <text x="384" y="140" font-size="10.5" font-weight="800" fill="#b45309">2. Vùng quanh rốn (Thành bụng trước)</text>
            <text x="384" y="156" font-size="9.8" fill="var(--text-main)">TM cạnh rốn (dọc DC tròn) ↔ TM thượng vị (Chủ)</text>
            <text x="384" y="172" font-size="9.8" font-weight="700" fill="#b45309">→ Tuần hoàn bàng hệ 'Hình đầu sứa'</text>

            <rect x="372" y="194" width="278" height="62" rx="8" fill="${s === 3 ? "var(--purple-light)" : "var(--bg-card)"}" stroke="${s === 3 ? "var(--purple)" : "var(--border)"}"/>
            <text x="384" y="212" font-size="10.5" font-weight="800" fill="var(--purple)">3. Ống hậu môn – Trực tràng</text>
            <text x="384" y="228" font-size="9.8" fill="var(--text-main)">TM trực tràng trên (Cửa) ↔ Giữa &amp; Dưới (Chủ)</text>
            <text x="384" y="244" font-size="9.8" font-weight="700" fill="var(--purple)">→ Giãn búi TM hậu môn (Bệnh Trĩ)</text>
          </svg>
        `;
      }
    }
  },

  render(lessonId, container) {
    this.stopTimer();
    if (!container) return;
    const spec = this.specs[lessonId];
    if (!spec) {
      container.innerHTML = "";
      return;
    }

    this.currentLessonId = lessonId;
    this.currentStep = 0;

    container.innerHTML = `
      <div class="proc-box">
        <div class="proc-header">
          <div>
            <span class="sim-badge" style="background:var(--accent);">🗺️ Atlas Giải phẫu &amp; Hoạt cảnh Từng bước</span>
            <h2 style="font-size:18px;font-weight:800;margin-top:6px;color:var(--text-main);">${spec.title}</h2>
          </div>
          <div class="proc-controls">
            <button type="button" class="btn btn-outline" style="padding:6px 12px;font-size:13px;" onclick="ProcessAnimations.prevStep()">⏮️ Trước</button>
            <button type="button" class="btn btn-primary" id="procPlayBtn" style="padding:6px 14px;font-size:13px;" onclick="ProcessAnimations.togglePlay()">▶️ Chạy tự động</button>
            <button type="button" class="btn btn-outline" style="padding:6px 12px;font-size:13px;" onclick="ProcessAnimations.nextStep()">Tiếp ⏭️</button>
          </div>
        </div>

        <div class="pill-btn-group" id="procStepPills"></div>

        <div class="svg-stage" id="procSvgStage" style="margin:12px 0;"></div>

        <div class="callout pearl" id="procStepExplain" style="margin:0;"></div>
      </div>
    `;

    this.updateUI();
  },

  setStep(idx) {
    this.stopTimer();
    const spec = this.specs[this.currentLessonId];
    if (!spec) return;
    this.currentStep = (idx + spec.steps.length) % spec.steps.length;
    this.updateUI();
  },

  nextStep() {
    this.stopTimer();
    const spec = this.specs[this.currentLessonId];
    if (!spec) return;
    this.currentStep = (this.currentStep + 1) % spec.steps.length;
    this.updateUI();
  },

  prevStep() {
    this.stopTimer();
    const spec = this.specs[this.currentLessonId];
    if (!spec) return;
    this.currentStep = (this.currentStep - 1 + spec.steps.length) % spec.steps.length;
    this.updateUI();
  },

  togglePlay() {
    if (this.isPlaying) {
      this.stopTimer();
      this.updatePlayButton();
      return;
    }
    const spec = this.specs[this.currentLessonId];
    if (!spec) return;
    this.isPlaying = true;
    this.updatePlayButton();
    this.timer = setInterval(() => {
      this.currentStep = (this.currentStep + 1) % spec.steps.length;
      this.updateUI();
    }, 2800);
  },

  updatePlayButton() {
    const btn = document.getElementById("procPlayBtn");
    if (btn) btn.innerHTML = this.isPlaying ? "⏸️ Tạm dừng" : "▶️ Chạy tự động";
  },

  updateUI() {
    const spec = this.specs[this.currentLessonId];
    if (!spec) return;
    const pillsEl = document.getElementById("procStepPills");
    const svgEl = document.getElementById("procSvgStage");
    const expEl = document.getElementById("procStepExplain");

    if (pillsEl) {
      pillsEl.innerHTML = spec.steps.map((st, idx) => `
        <button type="button" class="pill-btn ${idx === this.currentStep ? "active" : ""}" onclick="ProcessAnimations.setStep(${idx})">${st.name}</button>
      `).join("");
    }
    if (svgEl) svgEl.innerHTML = spec.renderSvg(this.currentStep);
    if (expEl) {
      const cur = spec.steps[this.currentStep];
      expEl.innerHTML = `
        <div class="callout-title">📍 ${cur.name} &nbsp; <span class="lvl-badge lvl-2">${cur.highlight}</span></div>
        <p style="margin:0;">${cur.desc}</p>
      `;
    }
    this.updatePlayButton();
  }
};
