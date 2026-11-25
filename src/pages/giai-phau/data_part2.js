// ==========================================================================
// DỮ LIỆU BÀI HỌC PHẦN 2: MODULE TIM MẠCH (BÀI 4 ĐẾN BÀI 7)
// Đề cương SĐH Cao học KHYS 2026: Tim – Mạch máu vùng bụng
// Chuẩn Giáo trình Giải Phẫu học (Chương trình Y đa khoa đổi mới, Tập 1) & Trắc nghiệm GP 2024
// ==========================================================================

window.LESSONS_PART2 = [
  // ========================================================================
  // BÀI 4: TIM – HÌNH THỂ NGOÀI, CÁC BUỒNG TIM & ĐỐI CHIẾU THÀNH NGỰC
  // ========================================================================
  {
    id: 4,
    group: "II. MODULE TIM MẠCH",
    title: "Bài 4: Tim – Hình thể ngoài, Các buồng tim & Đối chiếu Ngực",
    shortTitle: "Tim: Buồng tim & Van tim",
    textbookRef: "Giải phẫu học YDS Tập 1 – Bài 8: Tim (mục 1, 2, 3, 5 – tr. 72–78, 84–85)",
    summary: "Vị trí trung thất giữa & trục tim; 3 mặt (ức sườn, hoành, phổi), đáy tim (nhĩ trái & thực quản), đỉnh tim (KLS 4–5 trung đòn trái), bờ sắc & bờ tù; cấu tạo 4 buồng & 4 van tim (xoang Valsalva & đường SJ); 3 lớp cấu tạo; diện tim 4 góc & 4 ổ nghe van tim A–P–T–M.",
    modelId: "model_heart_chambers",
    modelTitle: "Mô hình 3D Tim: Hình thể ngoài, Mặt cắt 4 Buồng & 4 Van tim Đập theo Nhịp",
    simId: "sim_heart_valves",
    simTitle: "Phòng Thực hành Buồng Tim, Chu chuyển Van (Tâm thu/Trương) & 4 Ổ nghe Tim",
    flashcards: [
      { front: "Tim nằm trong phần nào của trung thất & nặng bao nhiêu?", back: "Nằm trong TRUNG THẤT GIỮA, lệch trái, trên cơ hoành. Nặng ~260g ở nữ và ~280g ở nam. Trục chếch xuống dưới, sang trái và ra trước." },
      { front: "Đỉnh tim và Đáy tim hướng như thế nào? Liên quan gì dễ gây nuốt nghẹn?", back: "Đỉnh tim: xuống dưới, ra trước, sang trái (KLS 4 hoặc 5 đường trung đòn trái). Đáy tim: hướng ra sau và sang phải, chủ yếu do TÂM NHĨ TRÁI tạo thành → nhĩ trái to chèn ÉP THỰC QUẢN gây nuốt nghẹn!" },
      { front: "Ranh giới của Bờ phải (bờ sắc) và Bờ trái (bờ tù) trên lâm sàng?", back: "Bờ phải (bờ sắc / acute border): ranh giới giữa MẶT HOÀNH và MẶT ỨC SƯỜN. Bờ trái (bờ tù / obtuse border): ranh giới giữa MẶT ỨC SƯỜN và MẶT PHỔI." },
      { front: "Thần kinh nào chạy giữa màng ngoài tim và màng phổi trái ở mặt phổi?", back: "Thần kinh HOÀNH TRÁI. (Còn đáy tâm nhĩ phải có RÃNH TẬN CÙNG nối bờ phải TM chủ trên với TM chủ dưới)." },
      { front: "Chi tiết giải phẫu nào CHỈ thấy ở Nhĩ trái chứ không thấy ở Nhĩ phải?", back: "VAN LỖ BẦU DỤC (ở mặt trái vách gian nhĩ) và 4 lỗ Tĩnh mạch phổi. Mặt phải vách gian nhĩ (nhĩ phải) có HỐ BẦU DỤC và viền hố bầu dục." },
      { front: "4 ổ nghe van tim kinh điển A – P – T – M trên thành ngực?", back: "A (ĐMC): KLS 2 cạnh bờ phải ức (hoặc KLS 3 bờ trái). P (ĐMP): KLS 2 cạnh bờ trái ức. T (3 lá): mỏm mũi kiếm xương ức. M (2 lá): mỏm tim (KLS 4–5 đường trung đòn trái)." }
    ],
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">❤️ 1. Vị trí &amp; Hình thể ngoài của Tim (3 Mặt – 1 Đáy – 1 Đỉnh)</div>
          <ul class="theory-list">
            <li><strong>Vị trí:</strong> Nằm trong <strong>trung thất giữa</strong>, lệch trái, trên trung tâm gân cơ hoành, giữa 2 phổi. Nặng ~<strong>260g (nữ)</strong>, ~<strong>280g (nam)</strong>. Trục tim chếch xuống dưới, sang trái và ra trước.</li>
            <li><strong>1.1. Mặt ức sườn (Mặt trước):</strong> Rãnh vành chạy ngang chia tâm nhĩ (chủ yếu nhĩ phải, nhĩ trái bị ĐMC &amp; thân ĐMP che) và tâm thất. <strong>Rãnh gian thất trước</strong> chứa <strong>ĐM gian thất trước &amp; TM tim lớn</strong>. Liên quan mặt sau xương ức, sụn sườn 3–6, bó mạch ngực trong.</li>
            <li><strong>1.2. Mặt hoành (Mặt dưới):</strong> Chủ yếu bởi 2 tâm thất, nằm trên <strong>trung tâm gân cơ hoành</strong> (qua cơ hoành liên quan <strong>thùy trái gan &amp; đáy vị</strong>). Có <strong>rãnh gian thất sau</strong> chứa <strong>nhánh ĐM gian thất sau &amp; TM tim giữa</strong>.</li>
            <li><strong>1.3. Mặt phổi (Mặt trái):</strong> Chủ yếu thất trái + một phần nhĩ/tiểu nhĩ trái. Giữa ngoại tâm mạc &amp; màng phổi trái có <strong>thần kinh hoành trái</strong>.</li>
            <li><strong>1.4. Đáy tim:</strong> Hướng ra sau &amp; sang phải, chủ yếu là <strong>tâm nhĩ trái</strong> (4 TM phổi đổ vào; phía sau liên quan <strong>thực quản</strong> → nhĩ trái to gây nuốt nghẹn!) + phần sau <strong>tâm nhĩ phải</strong> (có <strong>rãnh tận cùng</strong> nối bờ phải TMCT &amp; TMCD; <strong>rãnh gian nhĩ</strong> chạy dọc).</li>
            <li><strong>1.5. Đỉnh tim (Mỏm tim):</strong> Chủ yếu thất trái, tại <strong>khoang gian sườn 4 hoặc 5 đường trung đòn trái</strong>. Bên phải đỉnh tim có <strong>khuyết đỉnh tim</strong> (nơi gặp rãnh gian thất trước &amp; sau).</li>
          </ul>
          <div class="callout trap">
            <div class="callout-title">⚠️ Bẫy Lâm sàng Về Bờ Tim</div>
            <ul>
              <li>Giải phẫu mô tả 4 bờ (trên, phải, dưới, trái), nhưng lâm sàng mô tả 2 bờ: <strong>Bờ phải (bờ sắc / acute border)</strong> chính là bờ dưới (ranh giới mặt ức sườn – mặt hoành); <strong>Bờ trái (bờ tù / obtuse border)</strong> là ranh giới mặt ức sườn – mặt phổi.</li>
              <li><strong>Rãnh vành</strong> là chi tiết duy nhất chạy liên tục từ mặt trước đến mặt hoành của tim!</li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card-title">🏛️ 2. Hình thể trong (4 Buồng, Vách &amp; 4 Van tim)</div>
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Buồng / Vách</th>
                  <th>Chi tiết Giải phẫu Trọng tâm</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Vách gian nhĩ &amp; Vách gian thất</strong></td>
                  <td>• Vách gian nhĩ có <strong>hố bầu dục</strong> ở mặt phải (khiếm khuyết → thông liên nhĩ).<br/>• Vách gian thất gồm <strong>phần màng</strong> (mỏng, gần lỗ nhĩ thất) và <strong>phần cơ</strong> (dày, lồi sang thất phải) → hay bị thông liên thất.</td>
                </tr>
                <tr>
                  <td><strong>Tâm nhĩ phải</strong></td>
                  <td>Nhận máu tĩnh mạch: lỗ <strong>TM chủ trên</strong> (không van), lỗ <strong>TM chủ dưới</strong> (có van TMCD), lỗ <strong>xoang TM vành</strong> (có van), các TM tim cực nhỏ, <strong>mào tận cùng</strong>, <strong>hố bầu dục</strong> &amp; viền hố bầu dục.</td>
                </tr>
                <tr>
                  <td><strong>Tâm nhĩ trái</strong></td>
                  <td>Nhận máu giàu oxy qua <strong>4 lỗ tĩnh mạch phổi</strong>; mặt trái vách gian nhĩ có <strong>van lỗ bầu dục</strong>; thông tiểu nhĩ trái.</td>
                </tr>
                <tr>
                  <td><strong>Tâm thất phải</strong></td>
                  <td>Hình tháp 3 mặt, lỗ nhĩ–thất phải đậy bởi <strong>van 3 lá</strong> (lá trước, lá sau, lá trong) nối cơ nhú qua thừng gân. Phần trên thu hẹp thành <strong>nón động mạch (phễu)</strong> → <strong>van ĐM phổi</strong> (3 van bán nguyệt: trước, phải, trái).</td>
                </tr>
                <tr>
                  <td><strong>Tâm thất trái</strong></td>
                  <td>Thành dày gấp ~3 lần thất phải; 2 cơ nhú (trước, sau); <strong>van 2 lá</strong> (lá trước, lá sau). <strong>Van ĐM chủ</strong> (3 van bán nguyệt: phải, trái, sau) tương ứng <strong>3 xoang Valsalva</strong> (xoang phải → lỗ ĐMV phải; xoang trái → lỗ ĐMV trái; xoang sau = <strong>xoang không vành</strong>). Cả 2 lỗ ĐMV đều nằm <strong>dưới đường SJ (sinotubular)</strong>.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="callout pearl">
            <div class="callout-title">🔄 Chu chuyển Van tim &amp; 3 Lớp Cấu tạo</div>
            <p><strong>Thì tâm trương:</strong> Hai tâm thất giãn → <strong>van 2 lá &amp; van 3 lá MỞ</strong> (van ĐMC &amp; ĐMP đóng). <strong>Thì tâm thu:</strong> Tâm thất co → van 2 lá/3 lá đóng, van ĐMC &amp; ĐMP mở. <strong>3 lớp:</strong> Ngoại tâm mạc (bao sợi ngoài + bao thanh mạc 2 lá thành/tạng tạo khoang màng ngoài tim) – Cơ tim – Nội tâm mạc.</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🩺 3. Đối chiếu Tim &amp; 4 Ổ Nghe Van tim lên Thành ngực</div>
        <div class="grid-2">
          <div>
            <p style="font-size:14px;margin-bottom:8px;"><strong>Diện tim (Hình tứ giác 4 góc):</strong></p>
            <ul class="theory-list">
              <li><strong>Góc trên trái:</strong> Khoang liên sườn (KLS) 2, cách bờ trái xương ức 1 cm.</li>
              <li><strong>Góc trên phải:</strong> KLS 2, cách bờ phải xương ức 1 cm.</li>
              <li><strong>Góc dưới trái (Đỉnh tim):</strong> KLS 5 đường trung đòn trái.</li>
              <li><strong>Góc dưới phải:</strong> KLS 5 sát bờ phải xương ức.</li>
            </ul>
          </div>
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Van tim</th>
                  <th>Vị trí Chiếu Giải phẫu</th>
                  <th>Vị trí Ổ Nghe Lâm sàng</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Van 2 lá (M)</strong></td>
                  <td>KLS 3–4 bờ trái xương ức</td>
                  <td><strong>Mỏm tim</strong> (KLS 4–5 đường trung đòn trái)</td>
                </tr>
                <tr>
                  <td><strong>Van 3 lá (T)</strong></td>
                  <td>1/3 dưới xương ức</td>
                  <td><strong>Mỏm mũi kiếm xương ức</strong></td>
                </tr>
                <tr>
                  <td><strong>Van ĐM phổi (P)</strong></td>
                  <td>Bờ trái xương ức, ngang sụn sườn 3</td>
                  <td><strong>KLS 2 cạnh bờ trái xương ức</strong></td>
                </tr>
                <tr>
                  <td><strong>Van ĐM chủ (A)</strong></td>
                  <td>KLS 3 cạnh bờ trái xương ức</td>
                  <td><strong>KLS 2 cạnh bờ phải xương ức</strong> (hoặc KLS 3 bờ trái)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Về vị trí trong lồng ngực, tim và màng ngoài tim thuộc vùng nào của trung thất?",
        source: "Giải phẫu học YDS Tập 1 – Câu TLG 1 (tr. 85) & TN 2024 Câu 103 (tr. 16)",
        options: [
          "Trung thất giữa",
          "Trung thất trên",
          "Trung thất trước",
          "Trung thất sau"
        ],
        answer: 0,
        explain: "Đáp án 103C & Tập 1 tr. 72: Tim và màng ngoài tim nằm trong trung thất giữa, lệch về bên trái, giữa hai phổi và trên trung tâm gân cơ hoành."
      },
      {
        q: "Về hình thể ngoài của tim, câu nào sau đây là ĐÚNG?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 104 (tr. 16)",
        options: [
          "Trong rãnh gian thất sau có tĩnh mạch tim giữa",
          "Đáy tim nằm trên cơ hoành",
          "Xoang tĩnh mạch vành nằm ở mặt ức sườn của tim",
          "Tâm nhĩ trái có các tĩnh mạch phổi và tĩnh mạch chủ trên đổ vào"
        ],
        answer: 0,
        explain: "Đáp án 104B: Trong rãnh gian thất sau có nhánh ĐM gian thất sau và tĩnh mạch tim giữa. Đáy tim quay ra sau (mặt nằm trên cơ hoành là mặt hoành); xoang TM vành nằm ở mặt hoành; TMCT đổ vào tâm nhĩ phải."
      },
      {
        q: "Về hình thể trong của tim, câu nào sau đây là SAI?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 106 (tr. 16)",
        options: [
          "Ở người trưởng thành bình thường, giữa hai tâm nhĩ thông nhau qua lỗ bầu dục",
          "Giữa tâm nhĩ và tâm thất cùng bên thông nhau qua lỗ nhĩ–thất",
          "Giữa hai tâm thất ngăn cách nhau bởi vách gian thất",
          "Lỗ động mạch chủ và lỗ động mạch phổi đều có van bán nguyệt"
        ],
        answer: 0,
        explain: "Đáp án 106A: Ở người bình thường sau sinh, lỗ bầu dục đã đóng kín để lại vết tích là hố bầu dục ở vách gian nhĩ (chỉ còn thông nếu có tật thông liên nhĩ)."
      },
      {
        q: "Ở phía sau, tâm nhĩ trái liên quan trực tiếp với cấu trúc nào (nên khi tâm nhĩ trái to ra có thể đè ép gây nuốt nghẹn)?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 107 (tr. 16) & Tập 1 tr. 73",
        options: [
          "Thực quản",
          "Phế quản chính trái",
          "Phổi và màng phổi trái",
          "Động mạch chủ ngực"
        ],
        answer: 0,
        explain: "Đáp án 107A & Tập 1 tr. 73: Tâm nhĩ trái tạo phần lớn đáy tim, liên quan trực tiếp phía sau với thực quản nên khi tâm nhĩ trái giãn to (ví dụ hẹp van 2 lá) sẽ đè vào thực quản gây nuốt nghẹn."
      },
      {
        q: "Chi tiết giải phẫu nào sau đây KHÔNG thấy ở tâm nhĩ phải?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 124 (tr. 19)",
        options: [
          "Van lỗ bầu dục",
          "Mào tận cùng",
          "Lỗ xoang tĩnh mạch vành",
          "Hố bầu dục"
        ],
        answer: 0,
        explain: "Đáp án 124A: Tâm nhĩ phải có hố bầu dục, viền hố bầu dục, mào tận cùng và lỗ xoang TM vành. Van lỗ bầu dục nằm ở mặt trái vách gian nhĩ thuộc TÂM NHĨ TRÁI."
      },
      {
        q: "Hiện tượng nào sau đây xảy ra vào thì TÂM TRƯƠNG của tim?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 115 (tr. 17)",
        options: [
          "Van hai lá mở (cùng van ba lá mở để máu xuống thất)",
          "Van động mạch chủ mở",
          "Máu từ tâm thất trái tống lên động mạch chủ",
          "Máu từ tâm thất phải tống lên động mạch phổi"
        ],
        answer: 0,
        explain: "Đáp án 115A (tr. 191): Vào thì tâm trương, hai tâm thất giãn, cả hai van nhĩ–thất (van 2 lá và van 3 lá) đều mở để máu từ tâm nhĩ xuống tâm thất; van ĐMC và ĐMP đóng."
      },
      {
        q: "Chi tiết giải phẫu nào sau đây chạy liên tục từ mặt trước đến mặt hoành của tim?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 122 (tr. 18)",
        options: [
          "Rãnh vành",
          "Rãnh gian thất trước",
          "Rãnh gian thất sau",
          "Rãnh tận cùng"
        ],
        answer: 0,
        explain: "Đáp án 122A & Tập 1 tr. 72: Rãnh vành nằm giữa phần tâm nhĩ và phần tâm thất, chạy vòng từ mặt ức sườn liên tục xuống mặt hoành của tim."
      },
      {
        q: "Về mặt lâm sàng, bờ phải (hay bờ sắc) và bờ trái (bờ tù) của tim lần lượt là ranh giới giữa các mặt nào?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 133 & 137 (tr. 20–21)",
        options: [
          "Bờ phải: mặt hoành & mặt ức sườn; Bờ trái: mặt ức sườn & mặt phổi",
          "Bờ phải: mặt ức sườn & mặt phổi; Bờ trái: mặt hoành & mặt đáy",
          "Bờ phải: mặt đáy & mặt hoành; Bờ trái: mặt phổi & mặt hoành",
          "Bờ phải: mặt phổi & mặt ức sườn; Bờ trái: mặt hoành & mặt đáy"
        ],
        answer: 0,
        explain: "Đáp án 133B & 137C & Tập 1 tr. 75: Bờ sắc (bờ phải lâm sàng) là ranh giới giữa mặt hoành và mặt ức sườn; bờ tù (bờ trái lâm sàng) là ranh giới giữa mặt ức sườn và mặt phổi."
      },
      {
        q: "Vị trí bình thường của hai lỗ động mạch vành (phải và trái) so với đường nối xoang–ống (đường SJ) của động mạch chủ là:",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 131 (tr. 20)",
        options: [
          "Cả lỗ động mạch vành phải và trái đều nằm dưới đường SJ",
          "Lỗ ĐMV phải trên đường SJ, lỗ ĐMV trái dưới đường SJ",
          "Lỗ ĐMV phải dưới đường SJ, lỗ ĐMV trái trên đường SJ",
          "Cả hai lỗ ĐMV đều nằm ngang mức đường SJ"
        ],
        answer: 0,
        explain: "Đáp án 131D (tr. 191): Cả hai lỗ động mạch vành đều nằm dưới đường SJ (trong các xoang Valsalva tương ứng) để tối ưu hóa lượng máu đổ vào động mạch vành trong thì tâm trương."
      },
      {
        q: "Trong ba xoang động mạch chủ (xoang Valsalva), xoang nào sau đây được gọi là 'xoang không vành'?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 132 (tr. 20) & Tập 1 tr. 76",
        options: [
          "Xoang sau",
          "Xoang phải",
          "Xoang trái",
          "Xoang trước"
        ],
        answer: 0,
        explain: "Đáp án 132C & Tập 1 tr. 76: Ứng với ba lá van ĐMC có xoang phải (có lỗ ĐMV phải), xoang trái (có lỗ ĐMV trái) và xoang sau (không có lỗ ĐMV → xoang không vành)."
      },
      {
        q: "Khi khám tim, bác sĩ nghe thấy âm thổi bất thường rõ nhất ở KHOANG GIAN SƯỜN 2 CẠNH BỜ TRÁI XƯƠNG ỨC. Âm thổi này có khả năng xuất phát từ van nào?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 130 (tr. 20)",
        options: [
          "Van động mạch phổi",
          "Van động mạch chủ",
          "Van nhĩ thất trái (van hai lá)",
          "Van nhĩ thất phải (van ba lá)"
        ],
        answer: 0,
        explain: "Đáp án 130C & Tập 1 tr. 84–85: Ổ nghe van ĐM phổi ở KLS 2 cạnh bờ trái xương ức; van ĐMC ở KLS 2 cạnh bờ phải xương ức; van 3 lá ở mỏm mũi kiếm; van 2 lá ở mỏm tim (KLS 4–5 đường trung đòn trái)."
      },
      {
        q: "Khi khám tim cho bệnh nhân, âm thổi nghe rõ nhất ở MỎM TIM (khoang gian sườn 4–5 đường trung đòn trái) gợi ý tổn thương van nào?",
        source: "Giải phẫu học YDS Tập 1 – Câu TLG 4 (tr. 85) & TN 2024 Câu 1122 (tr. 171)",
        options: [
          "Van hai lá (van nhĩ thất trái)",
          "Van ba lá (van nhĩ thất phải)",
          "Van động mạch chủ",
          "Van động mạch phổi"
        ],
        answer: 0,
        explain: "Đáp án 1122C & Tập 1 tr. 84: Mỏm tim là vị trí nghe rõ nhất tiếng của van hai lá (tương ứng góc dưới trái của diện tim)."
      }
    ]
  },

  // ========================================================================
  // BÀI 5: TIM – HỆ MẠCH VÀNH, TĨNH MẠCH TIM & HỆ DẪN TRUYỀN TỰ ĐỘNG
  // ========================================================================
  {
    id: 5,
    group: "II. MODULE TIM MẠCH",
    title: "Bài 5: Tim – Hệ Mạch vành, Xoang vành & Hệ Dẫn truyền Tự động",
    shortTitle: "Tim: Mạch vành & Dẫn truyền",
    textbookRef: "Giải phẫu học YDS Tập 1 – Bài 8, mục 4: Mạch và Thần kinh của Tim (tr. 78–83, 85)",
    summary: "Vị trí ĐM vành dưới lá tạng ngoại tâm mạc thanh mạc; ĐM vành phải (nhánh nón, nút xoang nhĩ, bờ phải, nút nhĩ thất, gian thất sau) vs Thân chung ĐM vành trái (ĐM gian thất trước + ĐM mũ); cấp máu vách gian thất (2/3 trước vs 1/3 sau); xoang TM vành; hệ dẫn truyền tự động & TK tự chủ.",
    modelId: "model_heart_coronary",
    modelTitle: "Mô hình 3D Hệ Mạch vành & Hệ Dẫn truyền Tự động Tim (LAD – LCx – RCA – Nút xoang/Bó His)",
    simId: "sim_coronary",
    simTitle: "Phòng Thực hành Tắc Mạch vành (Ưu thế Phải/Trái) & Rối loạn Nhịp Tim",
    flashcards: [
      { front: "Các động mạch vành nằm ở lớp nào của thành tim?", back: "Nằm giữa LÁ TẠNG NGOẠI TÂM MẠC THANH MẠC và bề mặt cơ tim (dưới lớp mỡ trong các rãnh tim)." },
      { front: "Động mạch vành phải (RCA) thường cấp máu cho những cấu trúc trọng yếu nào?", back: "Nút xoang nhĩ (~60%), nút nhĩ thất (~80–90% ưu thế phải), nhánh bờ phải (bờ sắc), mặt hoành của tim, 1/3 sau vách gian thất qua ĐM gian thất sau." },
      { front: "Thân chung ĐMV trái chia 2 nhánh nào & cấp máu vùng nào?", back: "1) ĐM gian thất trước (LAD): nhánh chéo (mặt trước thất trái), nhánh vách trước (2/3 trước vách gian thất), MỎM TIM. 2) ĐM mũ (LCx): nhánh bờ trái (bờ tù), nhánh sau thất trái." },
      { front: "Ưu thế phải vs Ưu thế trái của ĐMV phân biệt dựa vào đâu?", back: "Dựa vào động mạch nào cho nhánh ĐM GIAN THẤT SAU ở vùng 'giao điểm' (crux): đa số từ ĐMV phải (ưu thế phải); nếu ĐM mũ cho ĐM gian thất sau = ưu thế trái." },
      { front: "Các tĩnh mạch tim đổ vào Xoang TM vành, ngoại trừ nhóm nào?", back: "TM tim lớn (rãnh gian thất trước), TM tim giữa (rãnh gian thất sau), TM tim nhỏ, TM sau thất trái, TM chếch nhĩ trái đổ vào XOANG VÀNH. Các TM tim trước & TM tim cực nhỏ đổ TRỰC TIẾP vào nhĩ phải/buồng tim." },
      { front: "Nút xoang nhĩ và Nút nhĩ thất nằm ở đâu?", back: "Nút xoang nhĩ: thành phải tâm nhĩ phải, bên phải lỗ TM chủ trên. Nút nhĩ thất: thành trong tâm nhĩ phải, giữa lá trong van 3 lá và lỗ xoang vành." }
    ],
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🩸 1. Động mạch Vành Phải &amp; Động mạch Vành Trái</div>
          <p style="font-size:13.8px;margin-bottom:8px;"><strong>Vị trí chung:</strong> Đi dưới lá tạng ngoại tâm mạc thanh mạc, trên bề mặt cơ tim. <strong>Không có sự thông nối dồi dào</strong> → tắc đột ngột gây <strong>nhồi máu cơ tim</strong>!</p>
          <ul class="theory-list">
            <li><strong>1.1. Động mạch vành phải (RCA):</strong> Từ xoang ĐMC phải, đi trong rãnh vành phải xuống mặt hoành tới vùng <strong>"giao điểm" (crux)</strong>:
              <ul>
                <li><strong>Nhánh nón ĐM</strong> (có thể tách thẳng từ ĐMC → ĐMV thứ ba).</li>
                <li><strong>Nhánh nút xoang nhĩ</strong> (cấp máu cho nút xoang nhĩ đa số trường hợp).</li>
                <li><strong>Nhánh bờ phải (bờ sắc):</strong> chạy dọc bờ phải tới mỏm tim.</li>
                <li><strong>Nhánh nút nhĩ thất:</strong> xuất phát tại vùng giao điểm (ưu thế phải).</li>
                <li><strong>Nhánh gian thất sau (PDA):</strong> chạy trong rãnh gian thất sau cùng <strong>TM tim giữa</strong>, cấp máu <strong>mặt hoành tim &amp; 1/3 sau vách gian thất</strong>.</li>
              </ul>
            </li>
            <li><strong>1.2. Thân chung ĐM vành trái (LMCA):</strong> Từ xoang ĐMC trái → chia 2 nhánh chính (đôi khi thêm <em>nhánh trung gian</em>):
              <ul>
                <li><strong>ĐM gian thất trước (LAD / xuống trước trái):</strong> đi cùng <strong>TM tim lớn</strong>, vòng qua mỏm tim lên mặt hoành 1–2 cm. Cho <strong>các nhánh chéo</strong> (thành trước thất trái) và <strong>các nhánh vách trước</strong> (cấp máu <strong>2/3 trước vách gian thất</strong>) → tắc LAD gây NMCT thành trước thất trái, mỏm tim &amp; 2/3 trước vách gian thất!</li>
                <li><strong>ĐM mũ (LCx):</strong> đi trong rãnh vành trái → cho <strong>nhánh bờ trái (bờ tù)</strong> &amp; các nhánh sau thất trái (trong <strong>ưu thế trái</strong>, ĐM mũ đi tới giao điểm cho nhánh gian thất sau &amp; nút nhĩ thất!).</li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">💙 2. Tĩnh mạch, Bạch huyết &amp; Hệ Dẫn truyền Tự động</div>
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Hệ thống</th>
                  <th>Chi tiết Giải phẫu Quan trọng</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Xoang Tĩnh mạch vành</strong></td>
                  <td>Nằm trong rãnh vành mặt hoành (dài 2–3 cm), đổ vào <strong>tâm nhĩ phải</strong> (có van xoang vành). Nhận:<br/>• <strong>TM tim lớn</strong> (cùng ĐM gian thất trước)<br/>• <strong>TM tim giữa</strong> (nằm trên ĐM gian thất sau)<br/>• <strong>TM tim nhỏ</strong> (cùng ĐMV phải ở rãnh vành)<br/>• <strong>TM sau thất trái</strong> &amp; <strong>TM chếch của tâm nhĩ trái</strong>.</td>
                </tr>
                <tr>
                  <td><strong>Đổ trực tiếp Nhĩ phải</strong></td>
                  <td><strong>Các TM tim trước</strong> (mặt trước thất phải) &amp; <strong>Các TM tim cực nhỏ</strong> (đổ thẳng vào buồng tim).</td>
                </tr>
                <tr>
                  <td><strong>Bạch huyết tim</strong></td>
                  <td>• Dòng trái (theo ĐMV trái) → chuỗi hạch khí–phế quản.<br/>• Dòng phải (theo ĐMV phải) → chuỗi hạch trung thất trước.</td>
                </tr>
                <tr>
                  <td><strong>Hệ Dẫn truyền Tự động</strong></td>
                  <td>1. <strong>Nút xoang nhĩ:</strong> thành phải nhĩ phải, cạnh lỗ TM chủ trên.<br/>2. <strong>Nút nhĩ thất:</strong> thành trong nhĩ phải, giữa lá trong van 3 lá &amp; lỗ xoang vành.<br/>3. <strong>Bó nhĩ thất (Bó His):</strong> đi qua <strong>phần màng vách gian thất</strong> → chia <strong>trụ phải &amp; trụ trái</strong> → <strong>sợi Purkinje</strong> tận hết ở chân cơ nhú.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="callout pearl">
            <div class="callout-title">⚡ Thần kinh Tự chủ của Tim</div>
            <p><strong>Giao cảm</strong> (3 hạch giao cảm cổ: trên, giữa, dưới) + <strong>Đối giao cảm</strong> (các nhánh tim cổ trên/dưới &amp; nhánh tim ngực của <strong>TK lang thang</strong>) hợp thành <strong>đám rối tim</strong> nằm ngay dưới cung ĐMC rồi tách sợi vào tim.</p>
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Nhánh bờ phải (nhánh bờ sắc) của hệ động mạch vành xuất phát từ động mạch nào?",
        source: "Giải phẫu học YDS Tập 1 – Câu tự lượng giá 3 (tr. 85) & TN 2024 Câu 1126",
        options: [
          "Động mạch vành phải",
          "Động mạch mũ",
          "Động mạch gian thất trước",
          "Thân chung động mạch vành trái"
        ],
        answer: 0,
        explain: "Tập 1 tr. 79 & Đáp án 1126C: Động mạch vành phải đi tới bờ phải tim cho nhánh bờ phải (lâm sàng gọi là nhánh bờ sắc) chạy dọc bờ phải về phía mỏm tim."
      },
      {
        q: "Trong hệ thống động mạch vành, nhánh bờ trái (bờ tù) xuất phát từ động mạch nào?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 109 (tr. 17) & Câu 1132 (tr. 173)",
        options: [
          "Động mạch mũ",
          "Thân chung động mạch vành trái",
          "Động mạch gian thất trước",
          "Động mạch gian thất sau"
        ],
        answer: 0,
        explain: "Đáp án 109B & 1132B & Tập 1 tr. 80: Động mạch mũ (một trong hai nhánh tận của thân chung ĐMV trái) đi trong rãnh vành trái và cho nhánh bờ trái (bờ tù)."
      },
      {
        q: "Thông thường, nút xoang nhĩ và nút nhĩ thất được cấp máu bởi động mạch nào?",
        source: "Giải phẫu học YDS Tập 1 – Câu TLG 5 (tr. 85) & TN 2024 Câu 140, 1128, 1133",
        options: [
          "Động mạch vành phải",
          "Động mạch mũ",
          "Động mạch gian thất trước",
          "Nhánh bờ trái"
        ],
        answer: 0,
        explain: "Tập 1 tr. 79 & Đáp án 140B, 1128A: Thông thường (trong ưu thế phải), cả nút xoang nhĩ (từ đoạn đầu ĐMV phải) và nút nhĩ thất (từ ĐMV phải tại vùng giao điểm sau nhánh bờ phải) đều được ĐMV phải cấp máu."
      },
      {
        q: "Các động mạch vành đi ở vị trí nào trên tim?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 108 (tr. 16)",
        options: [
          "Nằm giữa lá tạng thanh mạc màng ngoài tim và bề mặt cơ tim",
          "Nằm trên bề mặt bao xơ màng ngoài tim",
          "Nằm tự do trong khoang màng ngoài tim",
          "Nằm ngay dưới nội tâm mạc"
        ],
        answer: 0,
        explain: "Đáp án 108D & Tập 1 tr. 78: Động mạch vành đi dưới lá tạng ngoại tâm mạc thanh mạc (giữa lá tạng và bề mặt cơ tim, trong lớp mỡ các rãnh tim)."
      },
      {
        q: "Trong rãnh gian thất trước có động mạch gian thất trước đi cùng với tĩnh mạch nào?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 110 (tr. 17)",
        options: [
          "Tĩnh mạch tim lớn",
          "Tĩnh mạch tim giữa",
          "Tĩnh mạch tim trước",
          "Tĩnh mạch tim chếch"
        ],
        answer: 0,
        explain: "Đáp án 110A & Tập 1 tr. 82: Tĩnh mạch tim lớn đi từ đỉnh tim lên trong rãnh gian thất trước bên trái ĐM gian thất trước, sang rãnh vành trái và đổ vào xoang vành."
      },
      {
        q: "Động mạch gian thất sau đi cùng với tĩnh mạch nào và cấp máu cho phần nào của vách gian thất?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 123, 139 (tr. 19, 21) & Hình 8.5 tr. 81",
        options: [
          "Tĩnh mạch tim giữa; cấp máu cho 1/3 sau vách gian thất",
          "Tĩnh mạch tim lớn; cấp máu cho 2/3 trước vách gian thất",
          "Tĩnh mạch tim nhỏ; cấp máu cho toàn bộ vách gian thất",
          "Tĩnh mạch tim chếch; cấp máu cho 2/3 sau vách gian thất"
        ],
        answer: 0,
        explain: "Đáp án 123B, 139C & Hình 8.5 tr. 81: ĐM gian thất sau đi cùng TM tim giữa trong rãnh gian thất sau, cho nhánh vách sau cấp máu cho 1/3 sau vách gian thất (2/3 trước do ĐM gian thất trước cấp máu)."
      },
      {
        q: "Bệnh nhân nam 69 tuổi nhập viện vì nhồi máu cơ tim thành trước thất trái. Tắc động mạch nào và hậu quả vùng nào của tim có thể bị thiếu máu tương tự?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 1129–1131 (tr. 172–173)",
        options: [
          "Tắc động mạch gian thất trước → ảnh hưởng nhánh chéo & 2/3 trước vách gian thất",
          "Tắc động mạch vành phải → ảnh hưởng nhánh bờ phải & mặt hoành tim",
          "Tắc động mạch mũ → ảnh hưởng nhánh bờ trái & nút xoang nhĩ",
          "Tắc xoang tĩnh mạch vành → ảnh hưởng tâm nhĩ phải"
        ],
        answer: 0,
        explain: "Đáp án 1129C, 1130B, 1131C (tr. 213): Thành trước thất trái được cấp máu bởi các nhánh chéo của ĐM gian thất trước (LAD); đồng thời ĐM gian thất trước cho các nhánh vách trước nuôi 2/3 trước vách gian thất và nuôi vùng mỏm tim."
      },
      {
        q: "Trong trường hợp ƯU THẾ TRÁI động mạch vành, mặt hoành thất trái (và nhánh gian thất sau) được cấp máu bởi động mạch nào?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 141 (tr. 21)",
        options: [
          "Động mạch mũ",
          "Động mạch gian thất trước",
          "Động mạch vành phải",
          "Nhánh nón động mạch"
        ],
        answer: 0,
        explain: "Đáp án 141A (tr. 192): Trong ưu thế trái, động mạch mũ dài, đi tiếp trong rãnh vành qua mặt hoành thất trái đến giao điểm để cho nhánh gian thất sau và nhánh nút nhĩ thất."
      },
      {
        q: "Mô tả nào sau đây ĐÚNG về vị trí của nút xoang nhĩ?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 111 (tr. 17) & Tập 1 tr. 82",
        options: [
          "Nằm ở thành phải của tâm nhĩ phải, bên phải lỗ tĩnh mạch chủ trên",
          "Nằm ở thành trái của tâm nhĩ trái",
          "Bản chất là các tế bào hạch thần kinh giao cảm",
          "Nằm ở thành trong tâm nhĩ phải, giữa lá trong van ba lá và lỗ xoang vành"
        ],
        answer: 0,
        explain: "Đáp án 111B & Tập 1 tr. 82: Nút xoang nhĩ nằm ở thành phải của tâm nhĩ phải, bên phải lỗ TM chủ trên (bản chất là các sợi cơ tim biệt hóa đặc biệt; mô tả ở D là vị trí của nút nhĩ thất)."
      },
      {
        q: "Các tĩnh mạch tim nào sau đây KHÔNG đổ vào xoang tĩnh mạch vành mà đổ trực tiếp vào tâm nhĩ phải (hoặc buồng tim)?",
        source: "Giải phẫu học YDS Tập 1 – Bài 8, mục 4.2 Tĩnh mạch tim (tr. 82)",
        options: [
          "Các tĩnh mạch tim trước và các tĩnh mạch tim cực nhỏ",
          "Tĩnh mạch tim lớn và tĩnh mạch tim giữa",
          "Tĩnh mạch tim nhỏ và tĩnh mạch sau thất trái",
          "Tĩnh mạch chếch của tâm nhĩ trái và tĩnh mạch tim giữa"
        ],
        answer: 0,
        explain: "Tập 1 tr. 82: Tĩnh mạch tim lớn, giữa, nhỏ, sau thất trái và tĩnh mạch chếch nhĩ trái đều đổ vào xoang tĩnh mạch vành. Chỉ có các TM tim trước (đổ trực tiếp nhĩ phải) và các TM tim cực nhỏ (đổ trực tiếp nhĩ phải/thất phải)."
      },
      {
        q: "Bệnh nhân nam 55 tuổi tắc ĐỘNG MẠCH VÀNH PHẢI sẽ có nguy cơ thiếu máu vùng cơ tim và cấu trúc dẫn truyền nào?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 1126–1128 (tr. 172)",
        options: [
          "Nhánh bờ phải, mặt hoành của tim và nút nhĩ thất",
          "Nhánh bờ trái, thành trước thất trái và mỏm tim",
          "Nhánh chéo, 2/3 trước vách gian thất và trụ trái bó His",
          "Thân chung ĐMV trái và mặt phổi của tim"
        ],
        answer: 0,
        explain: "Đáp án 1126C, 1127D, 1128A (tr. 213): Tắc ĐM vành phải gây thiếu máu nhánh bờ phải, mặt hoành của tim và nút nhĩ thất (do nhánh nút nhĩ thất thường tách từ ĐMV phải)."
      },
      {
        q: "Thông thường, động mạch nào bị tắc sẽ gây thiếu máu vùng MỎM TIM?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 138 (tr. 21)",
        options: [
          "Động mạch gian thất trước",
          "Động mạch mũ",
          "Động mạch vành phải",
          "Nhánh nón động mạch"
        ],
        answer: 0,
        explain: "Đáp án 138D (tr. 191): Mỏm tim được cấp máu chủ yếu bởi động mạch gian thất trước (ĐM này đi hết rãnh gian thất trước, vòng qua mỏm tim xuống mặt hoành 1 đoạn vài cm)."
      }
    ]
  },

  // ========================================================================
  // BÀI 6: ĐỘNG MẠCH CHỦ BỤNG & CÁC NHÁNH TẠNG – THÀNH BỤNG – CHẬU
  // ========================================================================
  {
    id: 6,
    group: "II. MODULE TIM MẠCH",
    title: "Bài 6: Động mạch Chủ bụng & Các nhánh Tạng – Thận – Chậu",
    shortTitle: "Động mạch Chủ bụng & Nhánh",
    textbookRef: "Giải phẫu học YDS Tập 1 – Bài 9: Động mạch và tĩnh mạch chủ (mục 4–13, tr. 89–99)",
    summary: "Giới hạn ĐMC bụng (T12–L1 đến L4) & 4 nhóm nhánh; ĐM Thân tạng (vị trái – gan chung – lách); ĐM Mạc treo tràng trên (L1, 4 đoạn liên quan, Hội chứng Von Rokitansky, cấp máu ruột non & nửa phải đại tràng); ĐM Mạc treo tràng dưới (L3, cung Riolan/Drummond, trực tràng trên); ĐM Thận, Sinh dục & Chậu.",
    modelId: "model_aorta",
    modelTitle: "Mô hình 3D Động mạch Chủ bụng (T12–L4): Thân tạng – MTTT – MTTD – Thận & Chậu",
    simId: "sim_aorta",
    simTitle: "Phòng Thực hành Phân nhánh ĐMC Bụng theo Mốc Đốt sống & Vòng nối Tạng",
    flashcards: [
      { front: "Động mạch chủ bụng bắt đầu và chia đôi tận hết ở mức đốt sống nào?", back: "Bắt đầu tại lỗ ĐMC cơ hoành (bờ dưới T12 / đĩa T12–L1), tận hết ở BỜ TRÁI THÂN ĐỐT SỐNG L4 (chia 2 ĐM chậu chung & ĐM cùng giữa)." },
      { front: "4 nhóm nhánh của Động mạch chủ bụng là gì?", back: "1) Nhánh bụng (không đôi): Thân tạng (T12–L1), MTTT (L1), MTTD (L3). 2) Nhánh bên (đôi): Hoành dưới, Thượng thận giữa, Thận (L1), Tinh hoàn/Buồng trứng. 3) Nhánh lưng: ĐM thắt lưng. 4) Nhánh tận: Chậu chung, Cùng giữa." },
      { front: "3 nhánh chính của ĐM Thân tạng & bẫy thường gặp?", back: "ĐM vị trái + ĐM gan chung + ĐM lách (lớn nhất). BẪY: ĐM vị phải tách từ ĐM gan riêng; ĐM vị tá tràng từ ĐM gan chung; ĐM vị mạc nối phải từ ĐM vị tá tràng; ĐM vị mạc nối trái từ ĐM lách." },
      { front: "4 đoạn liên quan của ĐM Mạc treo tràng trên & Tứ giác tĩnh mạch?", back: "4 đoạn: Sau tụy → Trước tá tràng D3 → Rễ mạc treo ruột → Trong mạc treo ruột. Ở đoạn sau tụy, ĐM MTTT nằm trong TỨ GIÁC TĨNH MẠCH (Trên: TM lách; Dưới: TM thận trái; Phải: TMCD; Trái: TM MTTD)." },
      { front: "Cung mạch Riolan (ĐM bờ Drummond) nối hai động mạch nào?", back: "Nối nhánh lên của ĐM KẾT TRÀNG TRÁI (từ ĐM MTTD) với ĐM KẾT TRÀNG GIỮA (từ ĐM MTTT) dọc bờ kết tràng ngang." },
      { front: "Động mạch thận phải và trái khác nhau thế nào về chiều dài và liên quan?", back: "ĐM thận PHẢI DÀI HƠN, đi SAU TM chủ dưới, đầu tụy và D2 tá tràng. ĐM thận trái đi sau TM thận trái, thân tụy và TM lách. Nguyên ủy ngang L1, dưới ĐM MTTT." }
    ],
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">📏 1. Động mạch Chủ bụng: Giới hạn, Liên quan &amp; 4 Nhóm Nhánh</div>
          <ul class="theory-list">
            <li><strong>Giới hạn:</strong> Bắt đầu tại lỗ ĐMC cơ hoành (bờ dưới <strong>T12</strong> / đĩa T12–L1) → đi trước cột sống → tận hết ngang mức <strong>bờ trái đốt sống thắt lưng 4 (L4)</strong> chia 3 nhánh tận: <strong>2 ĐM chậu chung &amp; ĐM cùng giữa</strong>.</li>
            <li><strong>Liên quan:</strong>
              <ul>
                <li><em>Trước (từ trên xuống):</em> Hậu cung mạc nối, tụy, phần ngang (D3) tá tràng, các quai ruột non.</li>
                <li><em>Sau:</em> Ống ngực và cột sống.</li>
                <li><em>Phải:</em> Hạ phân thùy I (thùy đuôi) gan &amp; <strong>Tĩnh mạch chủ dưới</strong>.</li>
                <li><em>Trái:</em> Tuyến thượng thận trái và thận trái.</li>
              </ul>
            </li>
          </ul>
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Nhóm nhánh</th>
                  <th>Các Động mạch Thành viên &amp; Mốc Đốt sống</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Nhánh bụng (không đôi)</strong></td>
                  <td>• <strong>ĐM Thân tạng</strong> (ngay dưới cơ hoành, T12–L1, dài ~1 cm)<br/>• <strong>ĐM Mạc treo tràng trên</strong> (ngang L1, dưới thân tạng ~1 cm)<br/>• <strong>ĐM Mạc treo tràng dưới</strong> (ngang L3, trên chỗ chia đôi 4–5 cm)</td>
                </tr>
                <tr>
                  <td><strong>Nhánh bên (đôi)</strong></td>
                  <td>• <strong>ĐM hoành dưới</strong> (đôi khi tách từ ĐM thân tạng)<br/>• <strong>ĐM thượng thận giữa</strong><br/>• <strong>ĐM thận</strong> (ngang L1, dưới ĐM MTTT)<br/>• <strong>ĐM tinh hoàn / buồng trứng</strong> (dưới ĐM thận, trên ĐM MTTD)</td>
                </tr>
                <tr>
                  <td><strong>Nhánh lưng &amp; Tận</strong></td>
                  <td>• <strong>Các ĐM thắt lưng</strong><br/>• <strong>2 ĐM chậu chung</strong> (đến đĩa L5–S1 chia Chậu ngoài &amp; Chậu trong) + <strong>ĐM cùng giữa</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="card">
          <div class="card-title">🌳 2. ĐM Thân tạng &amp; ĐM Mạc treo tràng trên (SMA)</div>
          <ul class="theory-list">
            <li><strong>ĐM Thân tạng (3 nhánh tận):</strong>
              <ol>
                <li><strong>ĐM vị trái</strong> (nhỏ nhất, tạo nếp vị tụy trái, dọc bờ cong nhỏ).</li>
                <li><strong>ĐM gan chung:</strong> tách <strong>ĐM vị tá tràng</strong> (→ ĐM vị mạc nối phải + các ĐM tá tụy trên trước/sau) và <strong>ĐM gan riêng</strong> (→ ĐM vị phải, ĐM túi mật [từ gan phải], ĐM gan P/T).</li>
                <li><strong>ĐM lách</strong> (lớn nhất, xoắn dọc bờ trên tụy): tách các ĐM tụy (lưng, lớn, dưới, đuôi), 5–7 ĐM vị ngắn, ĐM vị mạc nối trái, ĐM đáy vị sau.</li>
              </ol>
            </li>
            <li><strong>ĐM Mạc treo tràng trên (SMA):</strong> Cấp máu ruột non (từ D2/D3 đến hồi tràng) và <strong>kết tràng phải</strong> (manh tràng, ruột thừa, kết tràng lên, <strong>2/3 phải kết tràng ngang</strong>).
              <ul>
                <li><strong>4 đoạn liên quan:</strong> (1) <em>Sau tụy</em> (trong <strong>tứ giác tĩnh mạch</strong>: Trên TM lách, Dưới TM thận trái, Phải TMCD, Trái TM MTTD); (2) <em>Trước tá tràng</em> (bắt chéo trước mỏm móc tụy &amp; <strong>D3 tá tràng → Hội chứng Von Rokitansky</strong>); (3) <em>Rễ mạc treo ruột</em> (TM MTTT nằm bên phải ĐM); (4) <em>Mạc treo ruột</em>.</li>
                <li><strong>Nhánh:</strong> <strong>ĐM tá tụy dưới</strong>, 12–15 ĐM hỗng–hồi tràng, <strong>ĐM hồi kết tràng</strong> (→ ĐM ruột thừa), <strong>ĐM kết tràng phải</strong>, <strong>ĐM kết tràng giữa</strong>.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🕸️ 3. ĐM Mạc treo tràng dưới (IMA) – Thận – Sinh dục – Hệ Chậu</div>
        <div class="grid-2">
          <ul class="theory-list">
            <li><strong>ĐM Mạc treo tràng dưới (IMA):</strong> Cấp máu <strong>1/3 trái kết tràng ngang, kết tràng xuống, kết tràng sigma, phần lớn trực tràng</strong>. Đi trong 2 lá mạc dính kết tràng xuống → chia:
              <ul>
                <li><strong>ĐM kết tràng trái:</strong> nhánh lên nối ĐM kết tràng giữa tạo <strong>cung mạch Riolan (ĐM bờ Drummond)</strong>; nhánh xuống nối nhánh lên ĐM sigma.</li>
                <li><strong>Các ĐM sigma</strong> (2–3 nhánh).</li>
                <li><strong>ĐM trực tràng trên (nhánh tận):</strong> ngang đốt sống <strong>cùng 3 (S3)</strong>, nối ĐM trực tràng giữa (từ chậu trong) &amp; dưới (từ thẹn trong).</li>
              </ul>
            </li>
          </ul>
          <ul class="theory-list">
            <li><strong>ĐM Thận:</strong> ĐM thận <strong>phải dài hơn</strong> và đi <strong>sau TM chủ dưới</strong>; ĐM thận trái đi sau TM thận trái &amp; thân tụy.</li>
            <li><strong>ĐM Tinh hoàn / Buồng trứng:</strong> Tách mặt trước ĐMC bụng dưới ĐM thận, bắt chéo phía trước niệu quản. (Tinh hoàn còn nhận nhánh ĐM cơ bì từ thượng vị dưới; thắt ở vùng thừng tinh dễ hoại tử tinh hoàn!).</li>
            <li><strong>ĐM Chậu chung → Chậu trong &amp; Chậu ngoài (ngang đĩa L5–S1):</strong>
              <ul>
                <li><em>Chậu trong:</em> Khuyết ngồi lớn → thân trước (8 nhánh: bịt, rốn/bàng quang trên, bàng quang dưới, âm đạo, tử cung, trực tràng giữa, thẹn trong, mông dưới) &amp; thân sau (3 nhánh: chậu thắt lưng, cùng bên, mông trên).</li>
                <li><em>Chậu ngoài:</em> Qua dây chằng bẹn đổi thành ĐM đùi; cho 2 nhánh bên: <strong>ĐM thượng vị dưới</strong> &amp; <strong>ĐM mũ chậu sâu</strong>.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Động mạch nào sau đây KHÔNG xuất phát từ động mạch chủ bụng?",
        source: "Giải phẫu học YDS Tập 1 – Câu TLG 1 (tr. 102) & TN 2024 Câu 238 (tr. 36)",
        options: [
          "Động mạch tử cung",
          "Động mạch buồng trứng",
          "Động mạch thận",
          "Động mạch mạc treo tràng dưới"
        ],
        answer: 0,
        explain: "Đáp án 238D & Tập 1 tr. 98: Động mạch tử cung là nhánh của thân trước ĐM chậu trong (không tách trực tiếp từ ĐMC bụng như ĐM buồng trứng, ĐM thận, ĐM MTTD)."
      },
      {
        q: "Động mạch chủ bụng chia thành hai động mạch chậu chung ở vị trí nào sau đây?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 274 (tr. 41)",
        options: [
          "Bên trái đốt sống thắt lưng 4",
          "Bên trái đốt sống thắt lưng 3",
          "Bên trái đốt sống thắt lưng 2",
          "Bên trái đốt sống thắt lưng 5"
        ],
        answer: 0,
        explain: "Đáp án 274C & Tập 1 tr. 89, 97: ĐMC bụng đi xuống đến ngang mức bờ trái đốt sống thắt lưng 4 (L4) thì tận hết bằng cách chia thành 2 ĐM chậu chung và ĐM cùng giữa."
      },
      {
        q: "Động mạch chậu chung chia thành động mạch chậu ngoài và động mạch chậu trong ở ngang mức nào?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 275 (tr. 41)",
        options: [
          "Ngang mức đĩa gian đốt sống thắt lưng 5 và cùng 1 (L5–S1)",
          "Ngang mức đĩa gian đốt sống thắt lưng 4 và thắt lưng 5",
          "Ngang mức đốt sống thắt lưng 5",
          "Ngang mức đĩa gian đốt sống cùng 1 và cùng 2"
        ],
        answer: 0,
        explain: "Đáp án 275B & Tập 1 tr. 97: Khi tới ngang đĩa gian đốt sống thắt lưng – cùng (L5–S1), mỗi ĐM chậu chung chia thành ĐM chậu trong và ĐM chậu ngoài."
      },
      {
        q: "Động mạch nào sau đây KHÔNG phải là nhánh trực tiếp của động mạch thân tạng?",
        source: "Giải phẫu học YDS Tập 1 – Câu TLG 2 (tr. 102) & TN 2024 Câu 228 (tr. 34)",
        options: [
          "Động mạch vị phải",
          "Động mạch gan chung",
          "Động mạch lách",
          "Động mạch vị trái"
        ],
        answer: 0,
        explain: "Đáp án 228D & Tập 1 tr. 90–91: ĐM thân tạng chia 3 nhánh tận là ĐM vị trái, ĐM gan chung và ĐM lách. ĐM vị phải tách từ ĐM gan riêng."
      },
      {
        q: "Động mạch gan chung chia hai nhánh tận (hoặc 2 nhánh chính theo tài liệu YDS) là:",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 233 (tr. 35)",
        options: [
          "Động mạch gan riêng và động mạch vị tá tràng",
          "Động mạch gan phải và động mạch gan trái",
          "Động mạch gan phải và động mạch túi mật",
          "Động mạch gan riêng và động mạch túi mật"
        ],
        answer: 0,
        explain: "Đáp án 233C & Tập 1 tr. 90: ĐM gan chung cho nhánh ĐM vị tá tràng rồi phần còn lại đổi hướng đi lên thành ĐM gan riêng (chia gan phải & gan trái)."
      },
      {
        q: "Thông thường, động mạch túi mật xuất phát từ động mạch nào?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 253 (tr. 38)",
        options: [
          "Động mạch gan phải",
          "Động mạch gan trái",
          "Động mạch gan riêng",
          "Động mạch gan chung"
        ],
        answer: 0,
        explain: "Đáp án 253A & Tập 1 tr. 91: Động mạch túi mật thường tách từ nhánh phải của động mạch gan riêng (ĐM gan phải), đi trong tam giác gan mật (Calot)."
      },
      {
        q: "Động mạch ruột thừa xuất phát từ động mạch nào?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 235 (tr. 35)",
        options: [
          "Động mạch hồi kết tràng",
          "Động mạch manh tràng trước",
          "Động mạch manh tràng sau",
          "Động mạch kết tràng phải"
        ],
        answer: 0,
        explain: "Đáp án 235C & Tập 1 tr. 94: ĐM hồi kết tràng (nhánh của ĐM MTTT) tách 5 nhánh trong đó có ĐM ruột thừa đi phía sau hồi tràng vào mạc treo ruột thừa."
      },
      {
        q: "Động mạch mạc treo tràng trên KHÔNG cấp máu cho cơ quan nào sau đây?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 264 (tr. 40)",
        options: [
          "Góc kết tràng trái",
          "Ruột thừa",
          "2/3 phải kết tràng ngang",
          "Góc kết tràng phải"
        ],
        answer: 0,
        explain: "Đáp án 264C & Tập 1 tr. 92, 94: ĐM MTTT cấp máu ruột non, manh tràng, ruột thừa, kết tràng lên, góc kết tràng phải và 2/3 phải kết tràng ngang. 1/3 trái kết tràng ngang và góc kết tràng trái do ĐM MTTD cấp máu."
      },
      {
        q: "Động mạch mạc treo tràng dưới có đặc điểm nào sau đây?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 269 (tr. 40)",
        options: [
          "Góp phần cung cấp máu cho kết tràng ngang (1/3 trái)",
          "Xuất phát từ ĐMC bụng ngang mức đốt sống thắt lưng 1",
          "Không thông nối với động mạch mạc treo tràng trên",
          "Cho nhánh tận là động mạch trực tràng dưới"
        ],
        answer: 0,
        explain: "Đáp án 269D (tr. 195): ĐM MTTD xuất phát ngang L3, thông nối với ĐM MTTT qua cung mạch Riolan (ĐM kết tràng trái ↔ ĐM kết tràng giữa), nhánh tận là ĐM trực tràng trên, cấp máu 1/3 trái kết tràng ngang trở xuống."
      },
      {
        q: "Động mạch trực tràng trên xuất phát từ đâu?",
        source: "Giải phẫu học YDS Tập 1 – Câu TLG 3 (tr. 102) & TN 2024 Câu 268 (tr. 40)",
        options: [
          "Động mạch mạc treo tràng dưới",
          "Động mạch chậu trong",
          "Động mạch chậu ngoài",
          "Động mạch kết tràng phải"
        ],
        answer: 0,
        explain: "Đáp án 268B & Tập 1 tr. 95: ĐM trực tràng trên là nhánh tận của động mạch mạc treo tràng dưới (tại ngang mức đốt sống S3)."
      },
      {
        q: "Hội chứng 'kẹp hạt' (Nutcracker syndrome) mô tả hiện tượng tắc nghẽn tĩnh mạch thận trái do tĩnh mạch thận trái bị kẹp giữa hai cấu trúc nào?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 1154 (tr. 178)",
        options: [
          "Động mạch chủ bụng phía sau và động mạch mạc treo tràng trên phía trước",
          "Động mạch chủ bụng phía sau và động mạch thận phải phía trước",
          "Cột sống thắt lưng phía sau và động mạch mạc treo tràng trên phía trước",
          "Cột sống thắt lưng phía sau và tĩnh mạch chủ dưới phía trước"
        ],
        answer: 0,
        explain: "Đáp án 1154B (tr. 213): Tương tự D3 tá tràng, tĩnh mạch thận trái bắt ngang trước ĐMC bụng ngay dưới góc xuất phát của ĐM MTTT nên có thể bị kẹp giữa ĐMC bụng (sau) và ĐM MTTT (trước)."
      },
      {
        q: "Mỗi động mạch tinh hoàn có đặc điểm sau, NGOẠI TRỪ:",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 273 (tr. 41)",
        options: [
          "Cho nhánh động mạch cơ bìu",
          "Xuất phát từ động mạch chủ bụng, dưới động mạch thận",
          "Ở bụng đi sau phúc mạc, bắt chéo trước niệu quản",
          "Vào ống bẹn đi trong thừng tinh đến tinh hoàn"
        ],
        answer: 0,
        explain: "Đáp án 273D (tr. 195): Động mạch cơ bìu là nhánh của động mạch thượng vị dưới (thuộc ĐM chậu ngoài), không phải của ĐM tinh hoàn. Lưu ý ĐM tinh hoàn phải đi trước TMCD còn trái đi sau TM MTTD."
      }
    ]
  },

  // ========================================================================
  // BÀI 7: TĨNH MẠCH CHỦ DƯỚI & HỆ TĨNH MẠCH CỬA – VÒNG NỐI CỬA CHỦ
  // ========================================================================
  {
    id: 7,
    group: "II. MODULE TIM MẠCH",
    title: "Bài 7: Tĩnh mạch Chủ dưới & Hệ Tĩnh mạch Cửa – Vòng nối Cửa Chủ",
    shortTitle: "TM Chủ dưới & Hệ TM Cửa",
    textbookRef: "Giải phẫu học YDS Tập 1 – Bài 9 (tr. 100–102) & Tập 2 – Bài 24 (tr. 49–50)",
    summary: "Tĩnh mạch chủ dưới (hợp lưu tại sườn phải L4, các nhánh thành và tạng đổ vào); Tứ giác tĩnh mạch sau tụy; Hệ tĩnh mạch cửa (hợp lưu TM lách + TM MTTT ngang L1, nhận TM MTTD qua TM lách, TM vị P/T); 3 vòng nối Cửa–Chủ & cơ chế giãn TM thực quản, trĩ, tuần hoàn bàng hệ bụng khi tăng áp lực TM cửa.",
    modelId: "model_portal_ivc",
    modelTitle: "Mô hình 3D Hệ Tĩnh mạch Cửa, Tĩnh mạch Chủ dưới & 3 Vòng nối Cửa – Chủ",
    simId: "sim_portal_hypertension",
    simTitle: "Phòng Thực hành Tăng Áp lực Tĩnh mạch Cửa & 3 Vòng nối Cửa – Chủ",
    flashcards: [
      { front: "Tĩnh mạch chủ dưới được hình thành ở đâu & nhận máu từ các tạng nào?", back: "Hợp lưu 2 TM chậu chung ở SƯỜN PHẢI đốt sống L4. Nhận: TM hoành dưới, TM thắt lưng, TM thắt lưng lên, 3 TM GAN, TM thận P/T, TM tinh hoàn/buồng trứng PHẢI (bên trái thường đổ vào TM thận trái)." },
      { front: "Tĩnh mạch cửa được hình thành do sự hợp lưu trực tiếp của hai tĩnh mạch nào?", back: "Tĩnh mạch MẠC TREO TRÀNG TRÊN + Tĩnh mạch LÁCH (ở trước TMCD, sau cổ tụy ngang L1). Lưu ý: TM mạc treo tràng dưới đổ vào TM lách trước khi hợp lưu." },
      { front: "4 thành phần tạo nên TỨ GIÁC TĨNH MẠCH quanh đoạn sau tụy của ĐM MTTT?", back: "Trên: TM lách. Dưới: TM thận trái. Phải: TM chủ dưới. Trái: TM mạc treo tràng dưới. (KHÔNG có tĩnh mạch cửa!)." },
      { front: "Cơ chế 3 vòng nối Cửa – Chủ khi bị xơ gan tăng áp lực TM cửa?", back: "1) Thực quản: TM vị trái (Cửa) ↔ TM thực quản/TM đơn (Chủ) → Giãn TM thực quản (nôn máu). 2) Hậu môn trực tràng: TM trực tràng trên (Cửa) ↔ giữa/dưới (Chủ) → Trĩ. 3) Quanh rốn: TM cạnh rốn ↔ TM thành bụng → Đầu sứa." },
      { front: "Trong tăng áp lực TM cửa, những tĩnh mạch nào giãn và KHÔNG giãn?", back: "GIÃN: TM lách, TM MTTT, TM MTTD, TM vị trái/phải, TM trực tràng trên. KHÔNG GIÃN (hoặc giảm máu): 3 TĨNH MẠCH GAN (nằm sau xoang gan, thuộc hệ chủ đổ về TMCD)." },
      { front: "Tĩnh mạch trực tràng trên vs giữa/dưới đổ về hệ tĩnh mạch nào?", back: "TM trực tràng TRÊN → TM MTTD → TM lách → TM CỬA. TM trực tràng GIỮA & DƯỚI → TM chậu trong → TM CHỦ DƯỚI." }
    ],
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🔵 1. Tĩnh mạch Chủ dưới (IVC) &amp; Tứ giác Tĩnh mạch</div>
          <ul class="theory-list">
            <li><strong>Nguyên ủy &amp; Đường đi:</strong> Hai tĩnh mạch chậu chung phải và trái hợp lại với nhau ở <strong>sườn phải đốt sống thắt lưng IV (L4)</strong> tạo thành tĩnh mạch chủ dưới.</li>
            <li><strong>Liên quan:</strong> Chạy lên dọc bờ phải cột sống thắt lưng (bên phải ĐMC bụng), nằm sau đầu tụy và D1 tá tràng, đi trong rãnh TMCD ở mặt sau gan (cố định gan), chui qua lỗ TMCD cơ hoành đổ vào <strong>tâm nhĩ phải</strong>.</li>
            <li><strong>Các nhánh đổ về Tĩnh mạch chủ dưới:</strong>
              <ul>
                <li><strong>Các tĩnh mạch hoành dưới</strong></li>
                <li><strong>Các tĩnh mạch thắt lưng</strong> &amp; <strong>Tĩnh mạch thắt lưng lên</strong></li>
                <li><strong>3 Tĩnh mạch gan</strong> (phải, giữa, trái – đổ ngay dưới cơ hoành)</li>
                <li><strong>Các tĩnh mạch thận</strong> (TM thận trái dài hơn, bắt chéo trước ĐMC bụng dưới ĐM MTTT)</li>
                <li><strong>Tĩnh mạch tinh hoàn / buồng trứng phải và trái</strong> (<em>chú ý lâm sàng: bên phải đổ trực tiếp TMCD, bên trái thường đổ vào TM thận trái</em>).</li>
              </ul>
            </li>
          </ul>
          <div class="callout pearl">
            <div class="callout-title">⬜ Tứ giác Tĩnh mạch (Bao quanh đoạn sau tụy của ĐM MTTT)</div>
            <p>Tại đoạn sau tụy của ĐM MTTT (Tập 1 tr. 92–93 &amp; TN Câu 259), 4 tĩnh mạch xếp hai bình diện trước và sau phúc mạc tạo thành tứ giác:</p>
            <ul>
              <li><em>Phía trước phúc mạc:</em> <strong>Tĩnh mạch lách</strong> (ở trên) và <strong>Tĩnh mạch mạc treo tràng dưới</strong> (ở bên trái).</li>
              <li><em>Phía sau phúc mạc:</em> <strong>Tĩnh mạch chủ dưới</strong> (ở bên phải) và <strong>Tĩnh mạch thận trái</strong> (ở dưới).</li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card-title">🟣 2. Hệ Tĩnh mạch Cửa (Portal Vein) &amp; 3 Vòng nối Cửa – Chủ</div>
          <ul class="theory-list">
            <li><strong>Chức năng:</strong> Tĩnh mạch chức năng dẫn máu tĩnh mạch giàu dinh dưỡng và chất độc từ ống tiêu hóa (từ đoạn bụng thực quản đến phần trên trực tràng), tụy, lách về gan để lọc và chuyển hóa.</li>
            <li><strong>Hình thành:</strong> Tạo nên do sự hợp lưu của <strong>Tĩnh mạch mạc treo tràng trên</strong> và <strong>Tĩnh mạch lách</strong> (ở trước TMCD, sau cổ tụy ngang L1). Riêng tĩnh mạch lách nhận thêm nhánh lớn là <strong>tĩnh mạch mạc treo tràng dưới</strong>.</li>
            <li><strong>Đường đi &amp; Phân nhánh:</strong> Đi trong bờ phải mạc nối nhỏ (sau ĐM gan riêng và ống mật chủ) → tới cửa gan chia 2 nhánh tận <strong>phải &amp; trái</strong> vào gan → qua xoang gan tập trung về <strong>3 tĩnh mạch gan</strong> đổ vào TM chủ dưới.</li>
            <li><strong>Nhánh bên đổ trực tiếp vào TM cửa:</strong> TM vị phải (nhận TM trước môn vị), TM vị trái, TM tá tụy trên sau.</li>
          </ul>
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Vị trí Thông nối</th>
                  <th>Nhánh Hệ Cửa</th>
                  <th>Nhánh Hệ Chủ</th>
                  <th>Biểu hiện Tăng áp lực TMC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. Thực quản dưới</strong><br/><em>(Dưới niêm mạc)</em></td>
                  <td><strong>TM vị trái</strong></td>
                  <td>TM thực quản → <strong>Hệ TM đơn</strong> → TM chủ trên</td>
                  <td><strong>Giãn tĩnh mạch thực quản</strong> (vỡ gây nôn ra máu ồ ạt, tử vong cao)</td>
                </tr>
                <tr>
                  <td><strong>2. Ống hậu môn – trực tràng</strong></td>
                  <td><strong>TM trực tràng trên</strong> (→ TM MTTD)</td>
                  <td>TM trực tràng giữa &amp; dưới (→ TM chậu trong → TMCD)</td>
                  <td><strong>Giãn TM hậu môn trực tràng (Trĩ)</strong>, đi cầu ra máu tươi</td>
                </tr>
                <tr>
                  <td><strong>3. Vùng quanh rốn</strong><br/><em>(Dưới da bụng)</em></td>
                  <td>Các TM cạnh rốn (dọc DC tròn gan → nhánh trái TMC)</td>
                  <td>TM thượng vị trên/dưới, TM ngực trong, TM thượng vị nông</td>
                  <td><strong>Tuần hoàn bàng hệ dưới da bụng</strong> (hình đầu sứa – <em>Caput medusae</em>)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="callout trap">
            <div class="callout-title">⚠️ Bẫy Đề thi Xơ gan &amp; Tăng áp lực TM Cửa</div>
            <p>Khi xơ gan làm tắc nghẽn dòng chảy qua gan, áp lực tăng vọt ở <strong>TM cửa, TM lách (gây lách to), TM MTTT, TM MTTD</strong> và 3 vòng nối cửa–chủ. Ngược lại, <strong>Tĩnh mạch gan</strong> nằm SAU gan (đổ về TMCD) sẽ <strong>KHÔNG bị giãn</strong>!</p>
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Tĩnh mạch cửa được hình thành do sự hợp lưu trực tiếp giữa tĩnh mạch lách và tĩnh mạch nào?",
        source: "Giải phẫu học YDS Tập 1 – Câu TLG 4 (tr. 102) & TN 2024 Câu 255 (tr. 38)",
        options: [
          "Tĩnh mạch mạc treo tràng trên",
          "Tĩnh mạch mạc treo tràng dưới",
          "Tĩnh mạch gan",
          "Tĩnh mạch vị trái"
        ],
        answer: 0,
        explain: "Đáp án 255C & Tập 1 tr. 100: Tĩnh mạch cửa được tạo nên do sự hợp thành giữa tĩnh mạch mạc treo tràng trên và tĩnh mạch lách ở phía trước TMCD, sau cổ tụy (TM MTTD đổ vào TM lách trước đó)."
      },
      {
        q: "Tĩnh mạch mạc treo tràng dưới đổ trực tiếp về tĩnh mạch nào sau đây?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 231 (tr. 35)",
        options: [
          "Tĩnh mạch lách",
          "Tĩnh mạch cửa",
          "Tĩnh mạch chủ dưới",
          "Tĩnh mạch gan trái"
        ],
        answer: 0,
        explain: "Đáp án 231C & Tập 1 tr. 100: Tĩnh mạch lách nhận thêm một nhánh lớn là tĩnh mạch mạc treo tràng dưới rồi mới hợp với TM MTTT tạo thành tĩnh mạch cửa."
      },
      {
        q: "Khi tăng áp lực tĩnh mạch cửa (ví dụ trong xơ gan), tĩnh mạch nào sau đây sẽ BỊ GIÃN, ngoại trừ:",
        source: "Giải phẫu học YDS Tập 1 – Câu TLG 5 (tr. 102) & TN 2024 Câu 230 (tr. 35)",
        options: [
          "Tĩnh mạch gan",
          "Tĩnh mạch lách",
          "Tĩnh mạch mạc treo tràng dưới",
          "Tĩnh mạch mạc treo tràng trên"
        ],
        answer: 0,
        explain: "Đáp án 230C & Tập 1 tr. 100: Áp lực TM cửa tăng làm ứ máu giãn các tĩnh mạch tiền gan thuộc hệ cửa (TM lách, TM MTTT, TM MTTD). Tĩnh mạch gan dẫn máu sau xoang gan đổ về TMCD nên không bị giãn."
      },
      {
        q: "Ở đoạn sau tụy, động mạch mạc treo tràng trên nằm trong một 'tứ giác tĩnh mạch'. Tĩnh mạch nào sau đây KHÔNG phải thành phần của tứ giác tĩnh mạch đó?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 259 (tr. 39)",
        options: [
          "Tĩnh mạch cửa",
          "Tĩnh mạch chủ dưới",
          "Tĩnh mạch thận trái",
          "Tĩnh mạch lách"
        ],
        answer: 0,
        explain: "Đáp án 259A (tr. 195): Tứ giác tĩnh mạch gồm: TM lách (trên), TM thận trái (dưới), TM chủ dưới (phải) và TM mạc treo tràng dưới (trái). Tĩnh mạch cửa được hình thành sau cổ tụy (phía phải/trên hơn), không thuộc 4 cạnh tứ giác này."
      },
      {
        q: "Tĩnh mạch nào sau đây KHÔNG đổ về hệ tĩnh mạch cửa?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 256 (tr. 38)",
        options: [
          "Tĩnh mạch trực tràng dưới",
          "Tĩnh mạch vị trái",
          "Tĩnh mạch vị phải",
          "Tĩnh mạch mạc treo tràng dưới"
        ],
        answer: 0,
        explain: "Đáp án 256D (tr. 194): Tĩnh mạch trực tràng dưới đổ về tĩnh mạch thẹn trong → tĩnh mạch chậu trong → tĩnh mạch chủ dưới (thuộc hệ chủ). Chỉ TM trực tràng trên mới về TM MTTD → hệ cửa."
      },
      {
        q: "Tĩnh mạch nào sau đây tham gia vào vòng nối cửa–chủ gây chảy máu tiêu hóa trên ở bệnh nhân tăng áp lực tĩnh mạch cửa?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 236 (tr. 36) & Tập 2 Câu 480 (tr. 72)",
        options: [
          "Tĩnh mạch vị trái thông với các tĩnh mạch thực quản (hệ TM đơn)",
          "Tĩnh mạch bán đơn thông với tĩnh mạch thận trái",
          "Tĩnh mạch gan giữa thông với tĩnh mạch chủ dưới",
          "Tĩnh mạch rốn thông với tĩnh mạch chậu ngoài"
        ],
        answer: 0,
        explain: "Đáp án 480C & Tập 1 tr. 100: Ở lớp dưới niêm mạc đoạn dưới thực quản, TM vị trái (hệ cửa) thông nối với các TM thực quản đổ về hệ TM đơn (hệ chủ) → giãn vỡ TM thực quản."
      },
      {
        q: "Trong hệ thống vòng nối cửa–chủ ở vùng hậu môn trực tràng, tĩnh mạch nào thuộc hệ cửa dễ bị giãn khi tăng áp lực tĩnh mạch cửa?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 236 (tr. 36)",
        options: [
          "Tĩnh mạch trực tràng trên",
          "Tĩnh mạch trực tràng giữa",
          "Tĩnh mạch thận trái",
          "Tĩnh mạch bán đơn"
        ],
        answer: 0,
        explain: "Đáp án 236C (tr. 194): Tĩnh mạch trực tràng trên đổ về tĩnh mạch mạc treo tràng dưới → tĩnh mạch lách → tĩnh mạch cửa; thông nối với TM trực tràng giữa & dưới (hệ chủ)."
      },
      {
        q: "Tĩnh mạch vị phải và tĩnh mạch vị trái đổ trực tiếp về tĩnh mạch nào?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 241 (tr. 36)",
        options: [
          "Tĩnh mạch cửa",
          "Tĩnh mạch lách",
          "Tĩnh mạch gan chung",
          "Tĩnh mạch chủ dưới"
        ],
        answer: 0,
        explain: "Đáp án 241A & Tập 2 tr. 19: Cả TM vị phải và TM vị trái đi dọc bờ cong nhỏ dạ dày và đều đổ trực tiếp vào tĩnh mạch cửa."
      },
      {
        q: "Tĩnh mạch cửa dẫn máu từ ống tiêu hóa, tụy, lách và đổ trực tiếp vào cơ quan nào sau đây?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 257 (tr. 39) & Câu 490 (tr. 74)",
        options: [
          "Gan",
          "Lách",
          "Tĩnh mạch gan",
          "Tĩnh mạch chủ dưới"
        ],
        answer: 0,
        explain: "Đáp án 257B & 490B: Tĩnh mạch cửa đổ trực tiếp vào gan qua cửa gan, phân chia theo các tiểu thùy gan để lọc và chuyển hóa trước khi tập trung vào 3 tĩnh mạch gan."
      },
      {
        q: "Sau khi sinh, tĩnh mạch rốn tắc lại trở thành cấu trúc nào ở gan?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 254 (tr. 38)",
        options: [
          "Dây chằng tròn gan",
          "Dây chằng tĩnh mạch",
          "Dây chằng liềm",
          "Dây chằng động mạch"
        ],
        answer: 0,
        explain: "Đáp án 254B & Tập 2 tr. 45: Dây chằng tròn gan là di tích của tĩnh mạch rốn bị tắc lại (còn ống tĩnh mạch sau khi tắc tạo thành dây chằng tĩnh mạch)."
      },
      {
        q: "Bệnh nhân nam 45 tuổi tiền căn nghiện rượu, chẩn đoán xơ gan và tăng áp lực tĩnh mạch cửa. Tĩnh mạch nào giãn và tạng nào có thể to ra trên bệnh nhân này?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 1143–1144 (tr. 175)",
        options: [
          "Giãn tĩnh mạch lách và Lách to",
          "Giãn tĩnh mạch gan và Tụy to",
          "Giãn tĩnh mạch thận và Dạ dày to",
          "Giãn tĩnh mạch chủ dưới và Tá tràng to"
        ],
        answer: 0,
        explain: "Đáp án 1143B & 1144A (tr. 213): Tăng áp lực TM cửa làm máu ứ ngược về tĩnh mạch lách, gây giãn tĩnh mạch lách và lách to (cùng giãn TM thực quản, tuần hoàn bàng hệ bụng, trĩ)."
      },
      {
        q: "Tĩnh mạch chủ dưới được hình thành do hai tĩnh mạch chậu chung phải và trái hợp lại ở vị trí nào?",
        source: "Giải phẫu học YDS Tập 1 – Bài 9, mục 2 Tĩnh mạch chủ dưới (tr. 100)",
        options: [
          "Sườn phải đốt sống thắt lưng 4 (L4)",
          "Bên trái đốt sống thắt lưng 4 (L4)",
          "Sườn phải đốt sống thắt lưng 1 (L1)",
          "Đĩa gian đốt sống L5–S1"
        ],
        answer: 0,
        explain: "Tập 1 tr. 100: Hai tĩnh mạch chậu chung phải và trái hợp lại ở sườn phải đốt sống thắt lưng IV tạo thành tĩnh mạch chủ dưới (trong khi ĐMC bụng chia đôi ở bờ trái đốt sống L4)."
      }
    ]
  }
];
