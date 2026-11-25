/**
 * CỔNG ÔN TẬP GIẢI PHẪU BỆNH SĐH 2026 - ĐẠI HỌC Y DƯỢC TP.HCM (YDS)
 * Module: Mô phỏng Quy trình & Cơ chế Động SVG (ProcessAnimations)
 * Bao phủ đầy đủ 8 bài học tương ứng 3 chuyên đề Đề cương KHYS 2026.
 */
(function () {
  'use strict';

  function svgHeader(stepBadge) {
    return `
      <defs>
        <marker id="paArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
          <path d="M 0 1 L 9 5 L 0 9 z" fill="var(--accent)" />
        </marker>
        <marker id="paArrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
          <path d="M 0 1 L 9 5 L 0 9 z" fill="var(--danger)" />
        </marker>
        <marker id="paArrowTeal" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
          <path d="M 0 1 L 9 5 L 0 9 z" fill="var(--success)" />
        </marker>
      </defs>
      <style>
        .pa-node { transition: opacity 0.25s ease, transform 0.25s ease; }
        .pa-dim { opacity: 0.42; }
        .pa-active-ring { stroke-dasharray: 5 3; animation: paDash 1.4s linear infinite; }
        .pa-flow { stroke-dasharray: 6 4; animation: paDash 1.1s linear infinite; }
        @keyframes paDash { to { stroke-dashoffset: -20; } }
      </style>
      <rect x="2" y="2" width="736" height="276" rx="14" fill="var(--bg-main)" stroke="var(--border)" stroke-width="1.5" />
      <rect x="14" y="12" width="290" height="24" rx="12" fill="var(--accent-light)" stroke="var(--accent)" stroke-width="1" />
      <text x="159" y="28" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--accent)">${stepBadge}</text>
    `;
  }

  function boxNode(x, y, w, h, title, line1, line2, state, tone) {
    const palette = {
      primary: { fill: 'var(--primary-light)', stroke: 'var(--primary)' },
      accent:  { fill: 'var(--accent-light)',  stroke: 'var(--accent)' },
      danger:  { fill: 'var(--danger-light)',  stroke: 'var(--danger)' },
      warning: { fill: 'var(--warning-light)', stroke: 'var(--warning)' },
      success: { fill: 'var(--success-light)', stroke: 'var(--success)' },
      purple:  { fill: 'var(--purple-light)',  stroke: 'var(--purple)' },
      neutral: { fill: 'var(--bg-card)',       stroke: 'var(--border)' }
    };
    const p = palette[tone] || palette.neutral;
    const isActive = state === 'active';
    const isDone = state === 'done';
    const cls = state === 'pending' ? 'pa-node pa-dim' : 'pa-node';
    const strokeW = isActive ? 2.6 : 1.5;
    const ring = isActive
      ? `<rect x="${x - 4}" y="${y - 4}" width="${w + 8}" height="${h + 8}" rx="13" fill="none" stroke="${p.stroke}" stroke-width="2" class="pa-active-ring" />`
      : '';
    const check = isDone
      ? `<circle cx="${x + w - 12}" cy="${y + 12}" r="8" fill="var(--success)" /><text x="${x + w - 12}" y="${y + 15.5}" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">✓</text>`
      : '';
    return `
      <g class="${cls}">
        ${ring}
        <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${isActive || isDone ? p.fill : 'var(--bg-card)'}" stroke="${p.stroke}" stroke-width="${strokeW}" />
        ${check}
        <text x="${x + w / 2}" y="${y + 23}" text-anchor="middle" font-size="12.5" font-weight="800" fill="${p.stroke === 'var(--border)' ? 'var(--text-main)' : p.stroke}">${title}</text>
        <text x="${x + w / 2}" y="${y + 42}" text-anchor="middle" font-size="11.2" font-weight="600" fill="var(--text-main)">${line1}</text>
        ${line2 ? `<text x="${x + w / 2}" y="${y + 58}" text-anchor="middle" font-size="10.8" fill="var(--text-muted)">${line2}</text>` : ''}
      </g>
    `;
  }

  function arrowLine(x1, y1, x2, y2, active, red) {
    const marker = red ? 'url(#paArrowRed)' : 'url(#paArrow)';
    const color = red ? 'var(--danger)' : (active ? 'var(--accent)' : 'var(--border)');
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${active ? 2.4 : 1.6}" ${active ? 'class="pa-flow"' : ''} marker-end="${marker}" />`;
  }

  function stepState(idx, targetIdx) {
    if (idx === targetIdx) return 'active';
    if (idx > targetIdx) return 'done';
    return 'pending';
  }

  const specs = {
    1: {
      title: 'Cơ chế Bệnh sinh Tổn thương Tế bào (Thiếu máu cục bộ / Độc chất)',
      badge: '4 Giai đoạn • Bài 3 Mục 1–2',
      steps: [
        {
          label: 'Bước 1: Giảm ATP & Bơm Ion',
          title: 'Suy giảm ATP ty thể → Phù tế bào (Giai đoạn Còn khả hồi)',
          explain: 'Thiếu oxy làm ngừng phosphoryl hóa oxy hóa → ↓ ATP đột ngột → hỏng bơm Na⁺/K⁺-ATPase → Na⁺ và H₂O tràn vào gây phù tế bào, sưng lưới nội bào (rụng ribosome → ↓ tổng hợp protein), chuyển hóa yếm khí → acid lactic tăng & ↓ pH làm kết tụ chromatin.',
          renderSvg: (s) => `
            <svg viewBox="0 0 740 280" class="proc-svg" role="img" aria-label="Sơ đồ giảm ATP và tổn thương không hồi phục">
              ${svgHeader(`Bước ${s + 1} / 4 • Chuỗi Bệnh sinh`)}
              ${boxNode(20, 56, 152, 74, '1. THIẾU OXY / ĐỘC', '↓ ATP Ty thể', 'Hỏng bơm Na⁺/K⁺', stepState(s, 0), 'accent')}
              ${arrowLine(174, 93, 198, 93, s >= 0)}
              ${boxNode(200, 56, 156, 74, '2. ↑ Ca²⁺ NỘI BÀO', 'Hoạt hóa 4 Enzym', 'Phospholipase, Protease', stepState(s, 1), 'warning')}
              ${arrowLine(358, 93, 382, 93, s >= 1)}
              ${boxNode(384, 56, 158, 74, '3. GỐC TỰ DO (ROS)', 'O₂•⁻, H₂O₂, •OH', 'Peroxy hóa lipid màng', stepState(s, 2), 'purple')}
              ${arrowLine(544, 93, 568, 93, s >= 2, true)}
              ${boxNode(570, 56, 150, 74, '4. VỠ MÀNG & MPT', 'Thoát Cytochrome c', 'Vỡ Lysosome → CHẾT', stepState(s, 3), 'danger')}

              <rect x="20" y="152" width="336" height="106" rx="11" fill="${s === 0 ? 'var(--success-light)' : 'var(--bg-card)'}" stroke="var(--success)" stroke-width="${s === 0 ? 2.2 : 1.2}" />
              <text x="188" y="176" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--success)">Vùng KHẢ HỒI (Phù bào tương, Hốc nước)</text>
              <text x="188" y="198" text-anchor="middle" font-size="11.2" fill="var(--text-main)">• Dãn lưới nội bào hạt → Rụng ribosome → ↓ Protein</text>
              <text x="188" y="218" text-anchor="middle" font-size="11.2" fill="var(--text-main)">• Đường phân yếm khí → ↓ Glycogen, ↑ Lactate → ↓ pH</text>
              <text x="188" y="238" text-anchor="middle" font-size="11.2" fill="var(--text-muted)">→ Tưới máu lại sớm có thể hồi phục cấu trúc</text>

              <rect x="384" y="152" width="336" height="106" rx="11" fill="${s === 3 ? 'var(--danger-light)' : 'var(--bg-card)'}" stroke="var(--danger)" stroke-width="${s === 3 ? 2.2 : 1.2}" />
              <text x="552" y="176" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--danger)">Điểm KHÔNG HỒI PHỤC (Chết tế bào)</text>
              <text x="552" y="198" text-anchor="middle" font-size="11.2" fill="var(--text-main)">• Mở lỗ chuyển tiếp ty thể (MPT) &amp; mất thế điện màng</text>
              <text x="552" y="218" text-anchor="middle" font-size="11.2" fill="var(--text-main)">• Thoát Hydrolase từ Lysosome (tự tiêu bào tương)</text>
              <text x="552" y="238" text-anchor="middle" font-size="11.2" fill="var(--text-muted)">• Thoái hóa nhân: Pyknosis → Karyorrhexis → Karyolysis</text>
            </svg>`
        },
        {
          label: 'Bước 2: Bùng nổ Ca²⁺ nội bào',
          title: 'Ca²⁺ tăng vọt hoạt hóa 4 enzym hủy hoại cấu trúc tế bào',
          explain: 'Bình thường Ca²⁺ bào tương rất thấp (< 0,1 µM). Khi tổn thương màng bào tương hoặc ty thể/lưới nội chất, Ca²⁺ tăng kích hoạt Phospholipase (mất phospholipid màng), Protease (đứt khung xương TB), Endonuclease (cắt DNA) và ATPase (đẩy nhanh cạn kiệt ATP).',
          renderSvg: (s) => specs[1].steps[0].renderSvg(s)
        },
        {
          label: 'Bước 3: Stress Oxy hóa & ROS',
          title: 'Gốc tự do (ROS) tấn công liên kết đôi Lipid màng & DNA',
          explain: 'Trong tổn thương tái tưới máu hoặc nhiễm độc (CCl₄ → CCl₃•), ROS gồm O₂•⁻, H₂O₂ và độc nhất là gốc Hydroxyl (•OH) gây peroxy hóa chuỗi acid béo màng, biến tính protein enzym và đứt gãy mạch DNA nếu vượt quá hệ phòng thủ SOD/Catalase/GPx.',
          renderSvg: (s) => specs[1].steps[0].renderSvg(s)
        },
        {
          label: 'Bước 4: Vỡ Màng & Điểm Không hồi phục',
          title: 'Mở lỗ MPT ty thể & Vỡ màng Lysosome ấn định cái chết tế bào',
          explain: 'Hai cột mốc giải phẫu bệnh xác định tổn thương KHÔNG thể hồi phục: (1) Suy sụp ty thể không đảo ngược (lỗ MPT mở, không tái tạo được ATP dù cấp lại oxy) và (2) Tổn thương màng bào tương/lysosome trầm trọng giải phóng enzym tiêu hủy ở pH acid → tự tiêu.',
          renderSvg: (s) => specs[1].steps[0].renderSvg(s)
        }
      ]
    },
    2: {
      title: 'Phổ Thích nghi Tế bào & Chuyển tiến Loạn sản → Ung thư',
      badge: '4 Trạng thái • Bài 3 Mục 3',
      steps: [
        {
          label: 'Bước 1: Phì đại & Tăng sản',
          title: 'Đáp ứng tăng gánh: Tăng Kích thước vs Tăng Số lượng tế bào',
          explain: 'Phì đại (Hypertrophy): tăng KÍCH THƯỚC tế bào (gặp ở tế bào không phân chia như cơ tim trong THA). Tăng sản (Hyperplasia): tăng SỐ LƯỢNG tế bào (gặp ở mô còn khả năng phân chia như nội mạc tử cung, tăng sản TLT lành BPH). Tử cung thai kỳ phối hợp cả hai.',
          renderSvg: (s) => `
            <svg viewBox="0 0 740 280" class="proc-svg" role="img" aria-label="Phổ thích nghi và biến đổi tiền ung thư">
              ${svgHeader(`Bước ${s + 1} / 4 • Thích nghi → Thoái sản`)}
              ${boxNode(20, 56, 162, 74, 'PHÌ ĐẠI / TĂNG SẢN', '↑ Kích thước / Số lượng', 'VD: Cơ tim THA, BPH', stepState(s, 0), 'success')}
              ${arrowLine(184, 93, 204, 93, s >= 0)}
              ${boxNode(206, 56, 162, 74, 'TEO ĐÉT / CHUYỂN SẢN', 'Thay thế tế bào khả hồi', 'Barrett, phế quản gai', stepState(s, 1), 'accent')}
              ${arrowLine(370, 93, 390, 93, s >= 1)}
              ${boxNode(392, 56, 162, 74, 'LOẠN SẢN (CIN I→III)', 'Mất cực tính, tăng sắc', 'CIS: chưa qua màng đáy', stepState(s, 2), 'warning')}
              ${arrowLine(556, 93, 576, 93, s >= 2, true)}
              ${boxNode(578, 56, 142, 74, 'THOÁI SẢN (Ác)', 'Mất biệt hóa hoàn toàn', 'Nhân quái, phân bào 3 cực', stepState(s, 3), 'danger')}

              <rect x="20" y="152" width="700" height="106" rx="11" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1.4" />
              <text x="370" y="176" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--primary)">So sánh Cốt lõi Mức độ Tổn thương &amp; Khả năng Hồi phục (Xem Hình 3.1 – 3.3)</text>
              <line x1="252" y1="186" x2="252" y2="250" stroke="var(--border)" stroke-dasharray="3 3" />
              <line x1="486" y1="186" x2="486" y2="250" stroke="var(--border)" stroke-dasharray="3 3" />
              <text x="136" y="205" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--success)">1. THÍCH NGHI (Còn khả hồi)</text>
              <text x="136" y="224" text-anchor="middle" font-size="11" fill="var(--text-main)">Hết kích thích → Mô trở về bình thường</text>
              <text x="136" y="242" text-anchor="middle" font-size="10.5" fill="var(--text-muted)">Chú ý: Chuyển sản kéo dài dễ sinh loạn sản</text>

              <text x="369" y="205" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--warning)">2. TIỀN UNG THƯ (CIN I → II → III)</text>
              <text x="369" y="224" text-anchor="middle" font-size="11" fill="var(--text-main)">Nhân to, tăng sắc, phân bào lạc chỗ</text>
              <text x="369" y="242" text-anchor="middle" font-size="10.5" fill="var(--text-muted)">CIS chiếm 100% biểu mô, màng đáy CÒN NGUYÊN</text>

              <text x="603" y="205" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--danger)">3. XÂM LẤN &amp; THOÁI SẢN</text>
              <text x="603" y="224" text-anchor="middle" font-size="11" fill="var(--text-main)">Phá vỡ màng đáy vào mô đệm</text>
              <text x="603" y="242" text-anchor="middle" font-size="10.5" fill="var(--text-muted)">Nhân đa hình thái, phân bào đa cực/3 cực</text>
            </svg>`
        },
        {
          label: 'Bước 2: Teo đét & Chuyển sản',
          title: 'Teo đét (giảm kích thước) & Chuyển sản (tái lập trình tế bào gốc)',
          explain: 'Teo đét xảy ra do giảm nhu cầu/máu nuôi/nội tiết (tạo hạt lipofuscin "teo nâu"). Chuyển sản thay tế bào trưởng thành kém chịu đựng bằng tế bào bền hơn (VD: biểu mô trụ → gai ở khí quản người hút thuốc; biểu mô gai → trụ tuyến ruột ở thực quản Barrett).',
          renderSvg: (s) => specs[2].steps[0].renderSvg(s)
        },
        {
          label: 'Bước 3: Loạn sản (CIN I–III / CIS)',
          title: 'Biến đổi tiền ung thư biểu mô: Vẫn giới hạn trên Màng đáy',
          explain: 'Loạn sản làm mất đồng đều kích thước, hình dạng, tăng tỷ lệ nhân/bào tương, phân bào xuất hiện ở các tầng nông hơn (CIN I: 1/3 dưới; CIN II: 2/3 dưới; CIN III/CIS: toàn bộ bề dày biểu mô). Màng đáy còn nguyên vẹn nên chưa phải ung thư xâm lấn.',
          renderSvg: (s) => specs[2].steps[0].renderSvg(s)
        },
        {
          label: 'Bước 4: Thoái sản (Anaplasia)',
          title: 'Mất biệt hóa hoàn toàn: Dấu ấn vi thể đặc trưng của Ung thư ác tính',
          explain: 'Khi tế bào bướu hoàn toàn mất giống mô gốc trưởng thành: đa hình thái rõ (tế bào khổng lồ nhân quái), nhân bắt màu đậm (tăng sắc), tỷ lệ N/C ≈ 1:1, phân bào nhiều và đặc biệt là phân bào bất thường (hình 3 cực, 4 cực — không bao giờ gặp ở bướu lành!).',
          renderSvg: (s) => specs[2].steps[0].renderSvg(s)
        }
      ]
    },
    3: {
      title: 'Phân biệt Hoại tử vs Apoptosis & Chẩn đoán Nhuộm Mô học',
      badge: '4 Trụ cột • Bài 3 Mục 4–7',
      steps: [
        {
          label: 'Bước 1: Hoại tử (6 Dạng kinh điển)',
          title: 'Chết bệnh lý vỡ màng tế bào → Giải phóng enzym & Gây viêm',
          explain: 'Hoại tử luôn là quá trình BỆNH LÝ, màng tế bào rách vỡ làm rò rỉ chất nội bào gây phản ứng viêm mạnh. 6 hình thái kinh điển: Đông (tim, thận), Lỏng (não, áp-xe), Bã đậu (lao), Mỡ (viêm tụy cấp xà phòng hóa Ca²⁺), Tơ huyết/Fibrinoid (viêm mạch), Hoại thư.',
          renderSvg: (s) => `
            <svg viewBox="0 0 740 280" class="proc-svg" role="img" aria-label="Hoại tử vs Apoptosis và nhuộm đặc biệt">
              ${svgHeader(`Bước ${s + 1} / 4 • Hoại tử – Apoptosis – Vôi hóa`)}
              ${boxNode(20, 56, 162, 74, '1. HOẠI TỬ (6 DẠNG)', 'Vỡ màng → Gây VIÊM', 'Đông, Lỏng, Bã đậu, Mỡ...', stepState(s, 0), 'danger')}
              ${boxNode(200, 56, 162, 74, '2. APOPTOSIS', 'Màng CÒN NGUYÊN', 'Thể tự hủy, KHÔNG viêm', stepState(s, 1), 'success')}
              ${boxNode(380, 56, 162, 74, '3. TÍCH TỤ & NHUỘM', 'Mỡ: Oil Red O (cắt lạnh)', 'PAS(+): Glycogen | Perls: Fe', stepState(s, 2), 'purple')}
              ${boxNode(560, 56, 160, 74, '4. VÔI HÓA BỆNH LÝ', 'Loạn dưỡng (Ca²⁺ BT)', 'Di căn (↑ Ca²⁺ máu)', stepState(s, 3), 'warning')}

              <rect x="20" y="152" width="342" height="106" rx="11" fill="${s === 0 ? 'var(--danger-light)' : 'var(--bg-card)'}" stroke="var(--danger)" stroke-width="${s === 0 ? 2 : 1.2}" />
              <text x="191" y="176" text-anchor="middle" font-size="12" font-weight="800" fill="var(--danger)">HOẠI TỬ (Necrosis)</text>
              <text x="191" y="198" text-anchor="middle" font-size="11.2" fill="var(--text-main)">• Kích thước TB PHỒNG TO rồi vỡ màng bào tương</text>
              <text x="191" y="218" text-anchor="middle" font-size="11.2" fill="var(--text-main)">• DNA phân mảnh lộn xộn (vệt nhòe trên điện di)</text>
              <text x="191" y="238" text-anchor="middle" font-size="11.2" fill="var(--text-muted)">• Đại thực bào &amp; BCĐN kéo tới → Sưng, nóng, đỏ, đau</text>

              <rect x="380" y="152" width="340" height="106" rx="11" fill="${s === 1 ? 'var(--success-light)' : 'var(--bg-card)'}" stroke="var(--success)" stroke-width="${s === 1 ? 2 : 1.2}" />
              <text x="550" y="176" text-anchor="middle" font-size="12" font-weight="800" fill="var(--success)">CHẾT THEO CHƯƠNG TRÌNH (Apoptosis)</text>
              <text x="550" y="198" text-anchor="middle" font-size="11.2" fill="var(--text-main)">• Kích thước TB TEO NHỎ, chromatin đặc sát rìa nhân</text>
              <text x="550" y="218" text-anchor="middle" font-size="11.2" fill="var(--text-main)">• DNA cắt chuẩn bội số 180–200 bp (bậc thang DNA)</text>
              <text x="550" y="238" text-anchor="middle" font-size="11.2" fill="var(--text-muted)">• Thể tự hủy bọc màng kín → Thực bào âm thầm</text>
            </svg>`
        },
        {
          label: 'Bước 2: Apoptosis (Sinh lý & Bệnh lý)',
          title: 'Tế bào co rút, tạo Thể tự hủy kín màng → KHÔNG gây phản ứng viêm',
          explain: 'Hoạt hóa qua Caspase nội sinh/ngoại sinh: tế bào co lại, bào tương cô đặc ái toan, nhân vỡ thành mảnh gọn trong bóng màng (thể tự hủy), bề mặt bộc lộ phosphatidylserine mời đại thực bào dọn dẹp sạch sẽ mà không thoát enzym ra mô kẽ.',
          renderSvg: (s) => specs[3].steps[0].renderSvg(s)
        },
        {
          label: 'Bước 3: Nhận diện Tích tụ & Sắc tố',
          title: 'Bẫy phòng thi: H&E hòa tan mỡ & Thuốc nhuộm đặc biệt phân biệt',
          explain: 'Triglyceride (thoái hóa mỡ gan) và cholesterol tan hết trong xylol khi đúc parafin nên trên H&E chỉ còn HỐC TRẮNG → phải cắt lạnh nhuộm Oil Red O hoặc Sudan IV. Glycogen nhuộm PAS (+) đỏ hồng; Hemosiderin (nâu vàng) nhuộm Perls / Xanh Phổ chuyển xanh lam.',
          renderSvg: (s) => specs[3].steps[0].renderSvg(s)
        },
        {
          label: 'Bước 4: Vôi hóa Loạn dưỡng vs Di căn',
          title: 'Chìa khóa phân biệt: Nồng độ Calci máu & Tình trạng mô nền',
          explain: 'Vôi hóa loạn dưỡng: nồng độ Calci máu BÌNH THƯỜNG, lắng đọng ở mô đã tổn thương/hoại tử trước đó (xơ vữa mạch, van tim xơ hóa, hạch lao, thể cát). Vôi hóa di căn: do TĂNG Calci máu (cường cận giáp, tiêu xương ác tính, ngộ độc Vit D), lắng đọng ở mô BÌNH THƯỜNG (phổi, thận, dạ dày).',
          renderSvg: (s) => specs[3].steps[0].renderSvg(s)
        }
      ]
    },
    4: {
      title: 'Quy trình Phân tích & Phân loại Giải phẫu bệnh Bướu',
      badge: '4 Bước chẩn đoán • Bài 8 Mục 1–3',
      steps: [
        {
          label: 'Bước 1: Đọc Danh pháp Bướu',
          title: 'Xác định Nguồn gốc Mô (Biểu mô / Trung mô) & Hành vi (-oma / Carcinoma / Sarcoma)',
          explain: 'Bướu lành tận cùng bằng -oma (Adenoma, Lipoma). Bướu ác biểu mô là Carcinoma; bướu ác trung mô là Sarcoma. Cẩn thận các ngoại lệ ác tính mang đuôi -oma: Melanoma, Lymphoma, Seminoma, Mesothelioma, Hepatoma!',
          renderSvg: (s) => `
            <svg viewBox="0 0 740 280" class="proc-svg" role="img" aria-label="Quy trình đọc giải phẫu bệnh bướu">
              ${svgHeader(`Bước ${s + 1} / 4 • Chẩn đoán Mô bệnh học`)}
              ${boxNode(20, 56, 154, 74, '1. DANH PHÁP BƯỚU', '-oma (Lành*) | -carcinoma', 'Trung mô ác: -sarcoma', stepState(s, 0), 'accent')}
              ${arrowLine(176, 93, 198, 93, s >= 0)}
              ${boxNode(200, 56, 154, 74, '2. ĐẠI THỂ & VI THỂ', 'Vỏ bao? Hoại tử?', 'Phân bào 3 cực / Thoái sản', stepState(s, 1), 'primary')}
              ${arrowLine(356, 93, 378, 93, s >= 1)}
              ${boxNode(380, 56, 162, 74, '3. XÂM LẤN & DI CĂN', '↓ E-cadherin → MMP →', 'Bạch huyết / Máu / Khoang', stepState(s, 2), 'danger')}
              ${arrowLine(544, 93, 566, 93, s >= 2)}
              ${boxNode(568, 56, 152, 74, '4. GRADE & STAGE', 'Grade: Độ biệt hóa', 'TNM Stage: Tiên lượng chính', stepState(s, 3), 'success')}

              <rect x="20" y="152" width="700" height="106" rx="11" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1.4" />
              <text x="370" y="176" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--accent)">3 Đường Di căn Đặc trưng (Chứng cứ Ác tính Tuyệt đối)</text>
              <rect x="36" y="190" width="212" height="56" rx="8" fill="${s === 2 ? 'var(--primary-light)' : 'var(--bg-main)'}" stroke="var(--primary)" stroke-width="1.2" />
              <text x="142" y="212" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--primary)">Đường Bạch huyết</text>
              <text x="142" y="232" text-anchor="middle" font-size="10.8" fill="var(--text-main)">Hay gặp nhất ở CARCINOMA (Hạch gác)</text>

              <rect x="264" y="190" width="212" height="56" rx="8" fill="${s === 2 ? 'var(--danger-light)' : 'var(--bg-main)'}" stroke="var(--danger)" stroke-width="1.2" />
              <text x="370" y="212" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--danger)">Đường Máu (Tĩnh mạch)</text>
              <text x="370" y="232" text-anchor="middle" font-size="10.8" fill="var(--text-main)">Đặc trưng SARCOMA (→ Gan, Phổi)</text>

              <rect x="492" y="190" width="212" height="56" rx="8" fill="${s === 2 ? 'var(--purple-light)' : 'var(--bg-main)'}" stroke="var(--purple)" stroke-width="1.2" />
              <text x="598" y="212" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--purple)">Gieo rắc Khoang</text>
              <text x="598" y="232" text-anchor="middle" font-size="10.8" fill="var(--text-main)">Phúc mạc, màng phổi (U Krukenberg)</text>
            </svg>`
        },
        {
          label: 'Bước 2: Soi Đại thể & Vi thể',
          title: 'Vỏ bao đẩy ép vs Xâm lấn càng cua & Phân bào đa cực',
          explain: 'Đại thể: Bướu lành có ranh giới rõ, thường có vỏ bao sợi, đồng nhất; Bướu ác ăn lan ranh giới mờ, hoại tử xuất huyết do mọc nhanh hơn tân sinh mạch. Vi thể: Thoái sản (anaplasia) và phân bào 3 cực là bằng chứng ác tính mạnh.',
          renderSvg: (s) => specs[4].steps[0].renderSvg(s)
        },
        {
          label: 'Bước 3: Chuỗi Xâm lấn & Di căn',
          title: 'Mất E-cadherin → Gắn Laminin/Fibronectin → Tiết MMP phá màng đáy',
          explain: 'Tế bào ác tách rời nhau do giảm E-cadherin, bám vào chất nền ngoại bào qua thụ thể integrin, tiết enzym tiêu protein (MMP-2, MMP-9 collagenase type IV) mở đường vào mô đệm và xâm nhập mạch máu/bạch huyết (Carcinoma chuộng đường bạch huyết, Sarcoma chuộng đường máu).',
          renderSvg: (s) => specs[4].steps[0].renderSvg(s)
        },
        {
          label: 'Bước 4: Grading vs Staging (TNM)',
          title: 'Độ mô học (G) đánh giá mức biệt hóa; Giai đoạn (TNM) quyết định tiên lượng',
          explain: 'Grading (G1–G4) chỉ nhìn vào độ biệt hóa & phân bào dưới kính hiển vi. Staging (TNM: Tumor - Node - Metastasis) đo kích thước u, xâm lấn vùng, di căn hạch và di căn xa → Staging có giá trị tiên lượng sống còn chính xác hơn Grading.',
          renderSvg: (s) => specs[4].steps[0].renderSvg(s)
        }
      ]
    },
    5: {
      title: 'Cơ chế Sinh ung 2 Giai đoạn & Các Tác nhân Sinh ung (Hóa – Lý – Sinh học)',
      badge: '4 Trụ cột • Bài 8 Mục 4–5',
      steps: [
        {
          label: 'Bước 1: Khởi phát (Initiation)',
          title: 'Đột biến DNA cố định & Bất hồi phục (Thủ phạm chính: Chất khởi phát)',
          explain: 'Chất sinh ung trực tiếp (alkyl hóa) hoặc tiền chất sinh ung được CYP450 gan hoạt hóa (Benzo[a]pyrene, Aflatoxin B1, Nitrosamine) gắn cộng hóa trị vào DNA. Nếu tế bào phân chia trước khi kịp sửa chữa → đột biến trở nên VĨNH VIỄN (bất hồi phục).',
          renderSvg: (s) => `
            <svg viewBox="0 0 740 280" class="proc-svg" role="img" aria-label="Cơ chế sinh ung 2 giai đoạn và tác nhân">
              ${svgHeader(`Bước ${s + 1} / 4 • Sinh ung Thực nghiệm & Virus`)}
              ${boxNode(20, 56, 162, 74, '1. KHỞI PHÁT (Initiation)', 'Đột biến DNA vĩnh viễn', 'CYP450 hoạt hóa → DNA', stepState(s, 0), 'danger')}
              ${arrowLine(184, 93, 204, 93, s >= 0, true)}
              ${boxNode(206, 56, 162, 74, '2. THÚC ĐẨY (Promotion)', 'Tăng sinh dòng (Khả hồi)', 'Không tự gây đột biến DNA', stepState(s, 1), 'warning')}
              ${arrowLine(370, 93, 390, 93, s >= 1)}
              ${boxNode(392, 56, 162, 74, '3. TIA UV & XẠ TRỊ', 'UV: Dimer T-T (sửa NER)', 'Ion hóa: Đứt đôi DNA (DSB)', stepState(s, 2), 'purple')}
              ${arrowLine(556, 93, 576, 93, s >= 2)}
              ${boxNode(578, 56, 142, 74, '4. VI SINH VẬT', 'HPV E6/E7 | EBV | HBV', 'H. pylori → K dạ dày/MALT', stepState(s, 3), 'accent')}

              <rect x="20" y="152" width="700" height="106" rx="11" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1.4" />
              <text x="370" y="176" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--primary)">Quy tắc Vàng Đề thi: Khởi phát trước Thúc đẩy mới tạo Bướu (Hình 8.13)</text>
              <text x="40" y="200" font-size="11.5" font-weight="700" fill="var(--danger)">• Chú ý HPV 16/18:</text>
              <text x="172" y="200" font-size="11.2" fill="var(--text-main)">Protein <tspan font-weight="700">E6</tspan> phân hủy p53; Protein <tspan font-weight="700">E7</tspan> khóa pRb → đẩy tế bào vào pha S liên tục.</text>
              <text x="40" y="222" font-size="11.5" font-weight="700" fill="var(--purple)">• Chú ý Tia UV &amp; NER:</text>
              <text x="172" y="222" font-size="11.2" fill="var(--text-main)">Bệnh khô da sắc tố (Xeroderma pigmentosum) thiếu hệ sửa chữa NER → K da rất sớm.</text>
              <text x="40" y="244" font-size="11.5" font-weight="700" fill="var(--warning)">• Aflatoxin B1:</text>
              <text x="172" y="244" font-size="11.2" fill="var(--text-main)">Đột biến đặc hiệu codon 249 gen TP53 (cộng hưởng HBV → ung thư biểu mô gan HCC).</text>
            </svg>`
        },
        {
          label: 'Bước 2: Thúc đẩy (Promotion)',
          title: 'Chất thúc đẩy gây tăng sinh tế bào đã khởi phát (KHÔNG tự gây đột biến)',
          explain: 'Hormon (estrogen), acid mật, phorbol ester hay viêm mạn tính kích thích các tế bào mang đột biến khởi phát nhân đôi tạo dòng (clonal expansion). Tính chất đặc trưng: CÒN KHẢ HỒI nếu ngừng chất thúc đẩy đủ sớm, và dùng chất thúc đẩy TRƯỚC chất khởi phát sẽ không sinh bướu!',
          renderSvg: (s) => specs[5].steps[0].renderSvg(s)
        },
        {
          label: 'Bước 3: Sinh ung do Tia UV & Bức xạ Ion hóa',
          title: 'UV tạo Dimer Pyrimidine (sửa bởi NER); Tia Ion hóa cắt Đứt đôi DNA (DSB)',
          explain: 'Tia UVB tạo liên kết chéo T-T (dimer pyrimidine) gây biến dạng xoắn kép DNA → sửa bằng NER (khiếm khuyết trong Xeroderma pigmentosum). Bức xạ ion hóa gây đứt sợi đôi DNA, chuyển đoạn NST → tăng nguy cơ Bạch cầu cấp, Carcinôm tuyến giáp dạng nhú.',
          renderSvg: (s) => specs[5].steps[0].renderSvg(s)
        },
        {
          label: 'Bước 4: Virus & Vi khuẩn Sinh ung',
          title: 'Từ HPV E6/E7, EBV, HBV/HCV đến H. pylori & Sán ký sinh',
          explain: 'HPV nguy cơ cao (16, 18) sản xuất E6 bất hoạt p53 và E7 bất hoạt pRb. EBV liên quan U lympho Burkitt (t(8;14)) & Ung thư vòm hầu. HBV/HCV gây HCC qua xơ gan & tích hợp DNA (HBV). Helicobacter pylori gây viêm mạn chuyển sản ruột → K tuyến dạ dày & MALT lymphoma.',
          renderSvg: (s) => specs[5].steps[0].renderSvg(s)
        }
      ]
    },
    6: {
      title: '10 Đặc điểm Ung thư (Hallmarks) & Mục tiêu Điều trị Lâm sàng',
      badge: '4 Trục Phân tử • Bài 8 Mục 6–7',
      steps: [
        {
          label: 'Bước 1: Gen Sinh ung vs Đè nén bướu',
          title: 'Mất cân bằng "Chân ga (1 alen trội)" và "Chân phanh (2 alen Knudson)"',
          explain: 'Proto-oncogene → Oncogene (đột biến TĂNG chức năng trên 1 alen là đủ: RAS, MYC, HER2, BCR::ABL). Gen đè nén bướu (đột biến MẤT chức năng cần cả 2 alen theo giả thuyết Knudson: RB1 gác cổng G1/S, TP53, APC).',
          renderSvg: (s) => `
            <svg viewBox="0 0 740 280" class="proc-svg" role="img" aria-label="10 đặc điểm ung thư và chốt kiểm soát miễn dịch">
              ${svgHeader(`Bước ${s + 1} / 4 • 10 Hallmarks & Cận u`)}
              ${boxNode(20, 56, 162, 74, '1. GA & PHANH GEN', 'Oncogene: 1 alen trội', 'TSG: 2 alen lặn (Knudson)', stepState(s, 0), 'accent')}
              ${arrowLine(184, 93, 204, 93, s >= 0)}
              ${boxNode(206, 56, 162, 74, '2. ĐẶC ĐIỂM MỚI (2011)', 'Warburg (Đường phân)', 'Tránh né miễn dịch + 2 ĐK', stepState(s, 1), 'purple')}
              ${arrowLine(370, 93, 390, 93, s >= 1)}
              ${boxNode(392, 56, 162, 74, '3. CHỐT MIỄN DỊCH', 'Bướu dùng PD-L1 khóa T', 'Thuốc Anti-PD-1 / CTLA-4', stepState(s, 2), 'success')}
              ${arrowLine(556, 93, 576, 93, s >= 2)}
              ${boxNode(578, 56, 142, 74, '4. CẬN UNG THƯ', 'ACTH/SIADH (SCLC)', 'PTHrP (↑ Ca²⁺ - K gai phổi)', stepState(s, 3), 'warning')}

              <rect x="20" y="152" width="700" height="106" rx="11" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1.4" />
              <text x="370" y="176" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--success)">10 Đặc điểm Ung thư (8 Cốt lõi + 2 Tạo điều kiện) — Hình 8.16 &amp; 8.17</text>
              <text x="36" y="200" font-size="11.2" fill="var(--text-main)"><tspan font-weight="700" fill="var(--accent)">• 6 Đặc điểm 2000:</tspan> Tự kích thích tăng trưởng • Tránh ức chế • Chống apoptosis • Vô hạn (Telomerase) • Tân sinh mạch (VEGF) • Xâm lấn/Di căn</text>
              <text x="36" y="220" font-size="11.2" fill="var(--text-main)"><tspan font-weight="700" fill="var(--purple)">• 2 Cốt lõi + 2 Tạo ĐK 2011:</tspan> Hiệu ứng Warburg • Tránh miễn dịch (PD-L1) | Bất ổn bộ gen (BRCA/MMR) • Viêm thúc đẩy bướu</text>
              <text x="36" y="242" font-size="11.2" fill="var(--text-muted)"><tspan font-weight="700" fill="var(--warning)">• Ý nghĩa Cận u:</tspan> Triệu chứng xa u không do di căn (PTHrP ↑ Ca²⁺ hay gặp nhất; SCLC tiết ACTH/ADH), có thể báo động u sớm!</text>
            </svg>`
        },
        {
          label: 'Bước 2: Hiệu ứng Warburg & 10 Hallmarks',
          title: 'Chuyển hóa Đường phân Hiếu khí (Warburg) & Telomerase bất tử hóa',
          explain: 'Tế bào ung thư tiêu thụ lượng lớn glucose nhưng chuyển hóa qua đường phân kể cả khi đủ oxy (Hiệu ứng Warburg — cơ sở chụp FDG-PET/CT) nhằm tạo nguyên liệu carbon tổng hợp acid nucleic/lipid/protein phục vụ nhân đôi nhanh. Enzyme Telomerase giúp ngăn rút ngắn telomere.',
          renderSvg: (s) => specs[6].steps[0].renderSvg(s)
        },
        {
          label: 'Bước 3: Thoát Miễn dịch & Liệu pháp Chốt Kiểm soát',
          title: 'Ức chế PD-1/PD-L1 & CTLA-4: Tháo phanh cho Lympho T CD8⁺ diệt bướu',
          explain: 'Bình thường PD-1 trên tế bào T gặp PD-L1 giúp ngăn tự miễn. Tế bào ung thư lợi dụng bộc lộ nhiều PD-L1 để ru ngủ tế bào T gây độc CD8⁺. Kháng thể đơn dòng kháng PD-1/PD-L1/CTLA-4 cắt đứt tín hiệu ức chế này, phục hồi khả năng tiêu diệt khối u của miễn dịch.',
          renderSvg: (s) => specs[6].steps[0].renderSvg(s)
        },
        {
          label: 'Bước 4: Hội chứng Cận ung thư (Paraneoplastic)',
          title: 'Biểu hiện toàn thân xa bướu do Hormon lạc chỗ hoặc Tự kháng thể',
          explain: 'Không giải thích được bằng chèn ép tại chỗ hay di căn. Hay gặp nhất: Tăng Calci máu do PTHrP (K tế bào gai phổi, RCC, K vú); Hội chứng Cushing (ACTH) & SIADH (ADH) ở SCLC; Đa hồng cầu (EPO) ở RCC/HCC; Nhược cơ Lambert-Eaton ở SCLC.',
          renderSvg: (s) => specs[6].steps[0].renderSvg(s)
        }
      ]
    },
    7: {
      title: 'Tín hiệu RTK (4 Miền), Đột biến Kháng thuốc RAS & Gen Tổ hợp',
      badge: '4 Trục Phân tử • Bài 9 Mục 1–2',
      steps: [
        {
          label: 'Bước 1: Cấu trúc 4 Miền RTK & Hoạt hóa',
          title: 'Gắn Phối tử → Nhị phân hóa → Tự phosphoryl hóa chéo đuôi Tyrosine',
          explain: 'Thụ thể Tyrosine Kinase (EGFR, HER2, ALK, KIT) có 4 miền: Gắn phối tử ngoại bào → Xuyên màng đơn chuỗi → Miền Tyrosine Kinase (TKD) nội bào → Đuôi C-tận. Khi nhị phân hóa, hai phân tử tự phosphoryl hóa chéo các gốc tyrosine tạo vị trí neo cho phức hợp truyền tin.',
          renderSvg: (s) => `
            <svg viewBox="0 0 740 280" class="proc-svg" role="img" aria-label="Chuỗi RTK và gen tổ hợp">
              ${svgHeader(`Bước ${s + 1} / 4 • Tín hiệu Phân tử RTK`)}
              ${boxNode(20, 56, 162, 74, '1. THỤ THỂ RTK', '4 miền: Ngoại bào – TM', 'TKD – Đuôi C-tận (Tyr)', stepState(s, 0), 'accent')}
              ${arrowLine(184, 93, 204, 93, s >= 0)}
              ${boxNode(206, 56, 162, 74, '2. ĐỘT BIẾN / KHUẾCH ĐẠI', 'EGFR Del19/L858R (TKI)', 'HER2 Khuếch đại (Trastuz.)', stepState(s, 1), 'primary')}
              ${arrowLine(370, 93, 390, 93, s >= 1)}
              ${boxNode(392, 56, 162, 74, '3. BẪY KHÁNG RAS/BRAF', 'Đột biến KRAS / BRAF', 'Kháng Anti-EGFR (Cetux.)', stepState(s, 2), 'danger')}
              ${arrowLine(556, 93, 576, 93, s >= 2)}
              ${boxNode(578, 56, 142, 74, '4. GEN TỔ HỢP', 't(9;22) BCR::ABL1 (CML)', 'inv(2) EML4::ALK (NSCLC)', stepState(s, 3), 'purple')}

              <rect x="20" y="152" width="700" height="106" rx="11" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1.4" />
              <text x="370" y="176" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--danger)">Nguyên tắc Kê đơn Điều trị Đích Trên Thực hành Lâm sàng (Hình 9.1)</text>
              <text x="36" y="200" font-size="11.2" fill="var(--text-main)"><tspan font-weight="700" fill="var(--accent)">• 2 Nhánh Hạ nguồn chính của RTK:</tspan> (1) RAS → RAF → MEK → ERK (MAPK: Tăng sinh) &amp; (2) PI3K → AKT → mTOR (Sống sót).</text>
              <text x="36" y="220" font-size="11.2" fill="var(--text-main)"><tspan font-weight="700" fill="var(--danger)">• Bẫy Kháng thuốc:</tspan> Nếu <tspan font-weight="700">KRAS đột biến</tspan> (khóa ở dạng GTP), RAS tự bật MAPK mãi mãi → Cetuximab/Panitumumab VÔ HIỆU!</text>
              <text x="36" y="242" font-size="11.2" fill="var(--text-main)"><tspan font-weight="700" fill="var(--primary)">• Kháng EGFR TKI:</tspan> Đột biến thứ phát <tspan font-weight="700">EGFR T790M</tspan> cản TKI thế hệ 1–2 (Gefitinib) → Đổi sang <tspan font-weight="700">Osimertinib</tspan> (thế hệ 3).</text>
            </svg>`
        },
        {
          label: 'Bước 2: 4 Rối loạn RTK & Điều trị Đích',
          title: 'EGFR (Gefitinib/Osimertinib) & Khuếch đại HER2 (Trastuzumab)',
          explain: 'RTK hoạt hóa bất thường qua 4 cơ chế: Đột biến điểm (EGFR exon 19/21 trong NSCLC, KIT trong GIST), Khuếch đại gen (HER2/ERBB2 trong K vú/dạ dày), Biểu hiện quá mức và Gen tổ hợp. Thuốc đích gồm kháng thể đơn dòng (Trastuzumab, Cetuximab) và TKI phân tử nhỏ (Imatinib, Gefitinib).',
          renderSvg: (s) => specs[7].steps[0].renderSvg(s)
        },
        {
          label: 'Bước 3: Đột biến Hạ nguồn KRAS/BRAF',
          title: 'Vì sao phải xét nghiệm KRAS/NRAS Wild-type trước khi dùng Anti-EGFR?',
          explain: 'Trong ung thư đại trực tràng, Cetuximab phong bế đầu trên EGFR. Nhưng nếu nút truyền tin bên dưới là KRAS (hoặc NRAS/BRAF) đã bị đột biến tự hoạt hóa (khóa gắn GTP), dòng thác tăng sinh RAF-MEK-ERK vẫn chạy hết công suất bất chấp đầu trên bị khóa → bắt buộc xét nghiệm KRAS âm tính đột biến.',
          renderSvg: (s) => specs[7].steps[0].renderSvg(s)
        },
        {
          label: 'Bước 4: Chuyển đoạn NST & Gen Tổ hợp',
          title: 'BCR::ABL1 t(9;22) & EML4::ALK: Tự nhị phân hóa không cần phối tử',
          explain: 'Chuyển đoạn cân bằng tạo protein dung hợp mới (BCR::ABL1 trong CML dùng Imatinib; EML4::ALK trong NSCLC dùng Crizotinib/Alectinib) có phần đầu tự bắt cặp dimerization kích hoạt kinase liên tục, hoặc đặt oncogene cạnh promoter mạnh như MYC trong U lympho Burkitt t(8;14).',
          renderSvg: (s) => specs[7].steps[0].renderSvg(s)
        }
      ]
    },
    8: {
      title: 'Trục Bảo vệ Bộ gen TP53 – MDM2 & Dòng thác Caspase (Apoptosis)',
      badge: '4 Giai đoạn • Bài 9 Mục 3–4',
      steps: [
        {
          label: 'Bước 1: Bình thường p53 bị MDM2 khóa',
          title: 'Không stress: MDM2 gắn Ubiquitin phân hủy p53 tại Proteasome',
          explain: 'Gen TP53 (17p13.1) bình thường có protein p53 tồn tại cực ngắn (~20 phút) vì MDM2 bám vào che đầu hoạt hóa phiên mã và gắn đuôi ubiquitin đưa p53 vào proteasome tiêu hủy. Bản thân p53 lại kích thích tổng hợp MDM2 tạo vòng phản hồi âm.',
          renderSvg: (s) => `
            <svg viewBox="0 0 740 280" class="proc-svg" role="img" aria-label="Trục TP53 MDM2 và dòng thác Caspase">
              ${svgHeader(`Bước ${s + 1} / 4 • TP53 & Dòng thác Caspase`)}
              ${boxNode(20, 56, 152, 74, '1. TRẠNG THÁI BÌNH', 'MDM2 gắn Ubiquitin', '→ Phân hủy p53 (~20p)', stepState(s, 0), 'neutral')}
              ${arrowLine(174, 93, 196, 93, s >= 0)}
              ${boxNode(198, 56, 162, 74, '2. STRESS / HƯ DNA', 'ATM/ATR → P-p53', 'Rời MDM2, tích tụ p53', stepState(s, 1), 'accent')}
              ${arrowLine(362, 93, 384, 93, s >= 1)}
              ${boxNode(386, 56, 166, 74, '3. NGÃ RẼ SỐ PHẬN', 'p21 → G1/S sửa DNA', 'Nặng → BAX/PUMA (Chết)', stepState(s, 2), 'warning')}
              ${arrowLine(554, 93, 576, 93, s >= 2, true)}
              ${boxNode(578, 56, 142, 74, '4. CASPASE CASCADE', 'Casp-9 / Casp-8 →', 'Caspase 3, 6, 7 (Thực thi)', stepState(s, 3), 'danger')}

              <rect x="20" y="152" width="340" height="106" rx="11" fill="${s === 3 ? 'var(--purple-light)' : 'var(--bg-card)'}" stroke="var(--purple)" stroke-width="${s === 3 ? 2 : 1.2}" />
              <text x="190" y="176" text-anchor="middle" font-size="12" font-weight="800" fill="var(--purple)">Con đường NỘI SINH (Ty thể)</text>
              <text x="190" y="198" text-anchor="middle" font-size="11.1" fill="var(--text-main)">• BCL-2 / BCL-XL chống chết vs BAX / BAK mở lỗ</text>
              <text x="190" y="218" text-anchor="middle" font-size="11.1" fill="var(--text-main)">• Thoát Cytochrome c + Apaf-1 + ATP → <tspan font-weight="700">Apoptosome</tspan></text>
              <text x="190" y="238" text-anchor="middle" font-size="11.1" fill="var(--text-muted)">• Hoạt hóa <tspan font-weight="700">Caspase khởi phát 9</tspan></text>

              <rect x="380" y="152" width="340" height="106" rx="11" fill="${s === 3 ? 'var(--danger-light)' : 'var(--bg-card)'}" stroke="var(--danger)" stroke-width="${s === 3 ? 2 : 1.2}" />
              <text x="550" y="176" text-anchor="middle" font-size="12" font-weight="800" fill="var(--danger)">Con đường NGOẠI SINH &amp; Hội tụ</text>
              <text x="550" y="198" text-anchor="middle" font-size="11.1" fill="var(--text-main)">• FasL / TNF-α gắn Fas (CD95) → FADD → <tspan font-weight="700">DISC</tspan></text>
              <text x="550" y="218" text-anchor="middle" font-size="11.1" fill="var(--text-main)">• Hoạt hóa <tspan font-weight="700">Caspase khởi phát 8</tspan> (cầu nối tBID)</text>
              <text x="550" y="238" text-anchor="middle" font-size="11.1" fill="var(--text-muted)">• Cả 8 &amp; 9 đều cắt hoạt hóa <tspan font-weight="700">Caspase-3, 6, 7</tspan>!</text>
            </svg>`
        },
        {
          label: 'Bước 2: Stress DNA tách p53 khỏi MDM2',
          title: 'Kinase ATM/ATR & Chk2 phosphoryl hóa p53 → Ổn định hóa Tetramer',
          explain: 'Khi có đứt gãy DNA (tia xạ, gốc tự do) hoặc kích thích oncogene (bật p14ARF khóa MDM2), ATM/ATR phosphoryl hóa làm MDM2 không bám được p53 nữa. p53 nhanh chóng tích tụ thành phức hợp 4 tiểu đơn vị (tetramer) bám lên DNA kích hoạt phiên mã.',
          renderSvg: (s) => specs[8].steps[0].renderSvg(s)
        },
        {
          label: 'Bước 3: Dừng G1 (p21) hay Tự sát (BAX/PUMA)',
          title: 'p21 ức chế CDK giữ pRb để sửa DNA; hỏng quá nặng → Bật BAX/PUMA',
          explain: 'p53 bật gen p21 (CDKN1A) ức chế phức hợp CDK/Cyclin giữ pRb không phosphoryl hóa → dừng chu kỳ tại pha G1 để enzyme GADD45 sửa DNA. Nếu tổn thương vượt ngưỡng cứu chữa, p53 kích hoạt BAX, PUMA, NOXA mở màn apoptosis (Hình 9.2).',
          renderSvg: (s) => specs[8].steps[0].renderSvg(s)
        },
        {
          label: 'Bước 4: Hội tụ Caspase-8 / Caspase-9 → Caspase-3, 6, 7',
          title: 'Apoptosome (Caspase-9) & DISC (Caspase-8) cùng kích hoạt Caspase thực thi',
          explain: 'Con đường nội sinh: Cytochrome c + Apaf-1 + dATP → Apoptosome hoạt hóa Caspase-9. Con đường ngoại sinh: FasL-Fas-FADD tạo DISC hoạt hóa Caspase-8. Cả hai cắt hoạt hóa Caspase thực thi (3, 6, 7) phá vỡ lamin nhân và hoạt hóa DNase CAD cắt DNA từng đoạn 180–200 bp.',
          renderSvg: (s) => specs[8].steps[0].renderSvg(s)
        }
      ]
    }
  };

  const state = {};

  function stopTimer(lessonId) {
    if (state[lessonId] && state[lessonId].timer) {
      clearInterval(state[lessonId].timer);
      state[lessonId].timer = null;
    }
  }

  function stopAllTimers() {
    Object.keys(state).forEach((id) => stopTimer(id));
  }

  function render(lessonId, container) {
    const spec = specs[lessonId];
    if (!spec || !container) return;
    stopTimer(lessonId);
    state[lessonId] = { step: 0, playing: false, timer: null, container };
    paint(lessonId);
  }

  function paint(lessonId) {
    const spec = specs[lessonId];
    const st = state[lessonId];
    if (!spec || !st || !st.container) return;
    const step = spec.steps[st.step];

    const pills = spec.steps.map((sp, idx) => `
      <button type="button" class="pill-btn ${idx === st.step ? 'active' : ''}" onclick="ProcessAnimations.goTo(${lessonId}, ${idx})">
        ${idx + 1}. ${sp.label.replace(/^Bước \d+:\s*/, '')}
      </button>`).join('');

    st.container.innerHTML = `
      <div class="proc-box">
        <div class="proc-header">
          <div>
            <div style="font-size:15.5px;font-weight:800;color:var(--text-main);">🎬 ${spec.title}</div>
            <div style="font-size:12.5px;color:var(--text-muted);margin-top:2px;">${spec.badge} • Nhấn từng bước hoặc bật tự động chạy để xem trình tự bệnh sinh</div>
          </div>
          <div class="proc-controls">
            <button type="button" class="btn btn-outline" style="padding:6px 12px;font-size:12.5px;" onclick="ProcessAnimations.prev(${lessonId})">◀ Trước</button>
            <button type="button" class="btn ${st.playing ? 'btn-accent' : 'btn-primary'}" style="padding:6px 12px;font-size:12.5px;" onclick="ProcessAnimations.togglePlay(${lessonId})">
              ${st.playing ? '⏸ Tạm dừng' : '▶ Chạy tự động'}
            </button>
            <button type="button" class="btn btn-outline" style="padding:6px 12px;font-size:12.5px;" onclick="ProcessAnimations.next(${lessonId})">Sau ▶</button>
          </div>
        </div>

        <div class="pill-btn-group">${pills}</div>

        <div style="display:flex;justify-content:center;margin:12px 0;">
          ${step.renderSvg(st.step)}
        </div>

        <div class="callout pearl" style="margin:8px 0 0 0;">
          <div class="callout-title">${step.label} — ${step.title}</div>
          <p style="margin:0;font-size:14px;color:var(--text-main);">${step.explain}</p>
        </div>
      </div>
    `;
  }

  function goTo(lessonId, idx) {
    const spec = specs[lessonId];
    const st = state[lessonId];
    if (!spec || !st) return;
    st.step = ((idx % spec.steps.length) + spec.steps.length) % spec.steps.length;
    paint(lessonId);
  }

  function next(lessonId) {
    const st = state[lessonId];
    if (!st) return;
    goTo(lessonId, st.step + 1);
  }

  function prev(lessonId) {
    const st = state[lessonId];
    if (!st) return;
    goTo(lessonId, st.step - 1);
  }

  function togglePlay(lessonId) {
    const st = state[lessonId];
    if (!st) return;
    if (st.playing) {
      st.playing = false;
      stopTimer(lessonId);
      paint(lessonId);
    } else {
      st.playing = true;
      paint(lessonId);
      st.timer = setInterval(() => {
        if (!state[lessonId] || !document.body.contains(state[lessonId].container)) {
          stopTimer(lessonId);
          return;
        }
        next(lessonId);
      }, 3400);
    }
  }

  window.ProcessAnimations = {
    specs,
    render,
    goTo,
    next,
    prev,
    togglePlay,
    stopTimer,
    stopAllTimers
  };
})();
