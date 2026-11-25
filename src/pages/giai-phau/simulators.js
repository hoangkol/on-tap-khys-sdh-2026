// ==========================================================================
// BỘ MÔ PHỎNG TƯƠNG TÁC TRỰC QUAN 7 CHUYÊN ĐỀ GIẢI PHẪU HỌC SĐH YDS 2026
// Mỗi bài học có 1 Phòng Thực hành Giải phẫu Lâm sàng tương tác trực tiếp
// ==========================================================================

window.Simulators = {
  render(simId, container) {
    if (!container) return;
    if (typeof this[simId] === "function") {
      this[simId](container);
    } else {
      container.innerHTML = `<div class="callout">Đang tải phòng thực hành...</div>`;
    }
  },

  // ========================================================================
  // BÀI 1: PHÒNG THỰC HÀNH DẠ DÀY
  // ========================================================================
  sim_stomach(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Tình huống Giải phẫu – Lâm sàng Dạ dày:</label>
          <select id="s1_case" onchange="Simulators.upd_s1()">
            <option value="ulcer_post">1. Loét thủng MẶT SAU thân vị dạ dày</option>
            <option value="ulcer_ant">2. Loét thủng MẶT TRƯỚC thân vị dạ dày</option>
            <option value="hiatal_slide">3. Thoát vị hoành TRƯỢT (Sliding hiatal hernia)</option>
            <option value="hiatal_para">4. Thoát vị hoành CẠNH THỰC QUẢN (Paraesophageal)</option>
            <option value="vagotomy">5. Cắt dây thần kinh X (Lang thang) điều trị loét</option>
            <option value="pyloric">6. Hẹp môn vị phì đại bẩm sinh ở trẻ nhũ nhi</option>
          </select>
        </div>
        <div class="control-group">
          <label>Kiểm tra Vòng mạch Dạ dày – Xuất xứ Nhánh:</label>
          <select id="s1_vessel" onchange="Simulators.upd_s1()">
            <option value="lgas">ĐM vị trái (Bờ cong nhỏ trái)</option>
            <option value="rgas">ĐM vị phải (Bờ cong nhỏ phải)</option>
            <option value="rgep">ĐM vị mạc nối phải (Bờ cong lớn phải)</option>
            <option value="lgep">ĐM vị mạc nối trái &amp; ĐM vị ngắn (Bờ cong lớn / Đáy vị)</option>
          </select>
        </div>
      </div>
      <div id="s1_out"></div>
    `;
    this.upd_s1();
  },
  upd_s1() {
    const c = document.getElementById("s1_case").value;
    const v = document.getElementById("s1_vessel").value;

    const cases = {
      ulcer_post: {
        badge: "THỦNG VÀO HẬU CUNG MẠC NỐI",
        color: "var(--danger)",
        space: "Hậu cung mạc nối (Túi mạc nối)",
        neighbor: "Thân/Đuôi tụy, ĐỘNG MẠCH & TM LÁCH, Thận trái, Thượng thận trái (KHÔNG có Gan!)",
        risk: "Chảy máu ồ ạt do ăn mòn ĐM lách ở bờ trên tụy; dịch khu trú trong túi mạc nối.",
        ref: "Tập 2 tr. 16 & TN Câu 429: Mặt sau thân vị tạo thành trước hậu cung mạc nối."
      },
      ulcer_ant: {
        badge: "THỦNG VÀO Ổ PHÚC MẠC LỚN",
        color: "var(--danger)",
        space: "Ổ phúc mạc lớn (sau thành bụng trước, trong tam giác gan – sườn trái – đại tràng ngang)",
        neighbor: "Thùy trái gan, cung sườn trái, mặt trên đại tràng ngang, thành bụng trước",
        risk: "Khí thoát từ Đáy vị tạo 'liềm hơi dưới vòm hoành' trên X-quang đứng → Viêm phúc mạc toàn thể.",
        ref: "Tập 2 tr. 15–16 & TN Câu 428, 1139–1140."
      },
      hiatal_slide: {
        badge: "THOÁT VỊ TRƯỢT (HAY GẶP HƠN)",
        color: "var(--warning)",
        space: "Lỗ thực quản cơ hoành (ngang đốt sống Ngực 10)",
        neighbor: "Đoạn bụng thực quản + Tâm vị + một phần Đáy vị trượt thẳng lên trung thất",
        risk: "CÓ TRÀO NGƯỢC DẠ DÀY – THỰC QUẢN (do tâm vị mất vị trí giải phẫu bình thường).",
        ref: "Tập 2 tr. 20 (Hình 21.4)."
      },
      hiatal_para: {
        badge: "THOÁT VỊ CẠNH THỰC QUẢN",
        color: "var(--success)",
        space: "Chui qua lỗ thực quản ở phía TRƯỚC thực quản",
        neighbor: "TÂM VỊ vẫn nằm đúng vị trí dưới cơ hoành (T10); chỉ ĐÁY VỊ chui lên trung thất",
        risk: "Dịch và thức ăn KHÔNG trào ngược lên thực quản (nhưng có nguy cơ xoắn nghẹt đáy vị).",
        ref: "Tập 2 tr. 20 (Hình 21.4)."
      },
      vagotomy: {
        badge: "CẮT ĐỐI GIAO CẢM (TK LANG THANG X)",
        color: "var(--accent)",
        space: "Thân TK lang thang trước (TK X trái) & Thân sau (TK X phải) dọc bờ cong nhỏ",
        neighbor: "Nhánh gan, nhánh tá tràng, nhánh tạng vào đám rối tạng & các nhánh vị trước/sau",
        risk: "Dạ dày GIẢM TIẾT ACID HCl, giảm nhu động co bóp và tăng trương lực co thắt môn vị.",
        ref: "Tập 2 tr. 20 & Câu TLG 4 (tr. 21)."
      },
      pyloric: {
        badge: "PHÌ ĐẠI CƠ THẮT MÔN VỊ (BẨM SINH)",
        color: "var(--purple)",
        space: "Lỗ môn vị (ngang bên phải L1 ~1,25 cm)",
        neighbor: "Hành tá tràng (D1), Tĩnh mạch trước môn vị (mốc phẫu thuật mặt trước)",
        risk: "Lớp CƠ VÒNG dày bất thường làm bít tắc lỗ môn vị → nôn vọt dịch không mật, giãn dạ dày.",
        ref: "Tập 2 tr. 16, 17, 20."
      }
    };

    const vessels = {
      lgas: "<strong>ĐM vị trái</strong> tách trực tiếp từ <strong>ĐM thân tạng</strong>, tạo nếp vị tụy trái, chạy dọc <strong>bờ cong nhỏ</strong> (TM vị trái đổ thẳng TM cửa & thông TM thực quản).",
      rgas: "<strong>ĐM vị phải</strong> tách từ <strong>ĐM gan riêng</strong> (bẫy thi: KHÔNG phải từ ĐM gan chung!), chạy dọc bờ cong nhỏ. TM vị phải nhận <strong>TM trước môn vị</strong> rồi đổ TM cửa.",
      rgep: "<strong>ĐM vị mạc nối phải</strong> tách từ <strong>ĐM vị tá tràng</strong> (không phải ĐM lách!), đi trong dây chằng vị–kết tràng dọc bờ cong lớn. TM đổ về TM MTTT.",
      lgep: "<strong>ĐM vị mạc nối trái</strong> &amp; 5–7 <strong>ĐM vị ngắn</strong> + <strong>ĐM vị sau</strong> đều tách từ <strong>ĐM lách</strong>. Tĩnh mạch đổ về TM lách."
    };

    const d = cases[c];
    document.getElementById("s1_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card">
          <div class="metric-label">Kết luận Giải phẫu</div>
          <div class="metric-val" style="font-size:15px;color:${d.color}">${d.badge}</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Khoang / Mốc Liên quan</div>
          <div class="metric-val" style="font-size:13.5px;">${d.space}</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Cấu trúc Lân cận Trọng yếu</div>
          <div class="metric-sub" style="font-size:12.5px;color:var(--text-main);">${d.neighbor}</div>
        </div>
      </div>
      <div class="callout pearl">
        <div class="callout-title">🏥 Biện luận Lâm sàng &amp; Bẫy thi (${d.ref})</div>
        <p style="margin-bottom:8px;"><strong>Hệ quả:</strong> ${d.risk}</p>
        <p style="margin:0;"><strong>🩸 Kiểm tra mạch máu đang chọn:</strong> ${vessels[v]}</p>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 2: PHÒNG THỰC HÀNH PHÂN THÙY GAN (I–VIII) & ĐƯỜNG MẬT
  // ========================================================================
  sim_liver(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Hạ phân thùy Gan (Couinaud I–VIII) để Định vị:</label>
          <select id="s2_seg" onchange="Simulators.upd_s2()">
            <option value="I">Hạ phân thùy I (Thùy đuôi)</option>
            <option value="II">Hạ phân thùy II (Phân thùy bên trái – trên)</option>
            <option value="III">Hạ phân thùy III (Phân thùy bên trái – dưới)</option>
            <option value="IV">Hạ phân thùy IV (Phân thùy giữa trái – Thùy vuông)</option>
            <option value="V">Hạ phân thùy V (Phân thùy trước phải – dưới)</option>
            <option value="VI">Hạ phân thùy VI (Phân thùy sau phải – dưới)</option>
            <option value="VII">Hạ phân thùy VII (Phân thùy sau phải – trên)</option>
            <option value="VIII">Hạ phân thùy VIII (Phân thùy trước phải – trên)</option>
          </select>
        </div>
        <div class="control-group">
          <label>Vị trí Tắc nghẽn / Tổn thương Đường mật Ngoài gan:</label>
          <select id="s2_bile" onchange="Simulators.upd_s2()">
            <option value="cystic">Sỏi kẹt ỐNG TÚI MẬT (Cystic duct)</option>
            <option value="cbd_mid">Sỏi kẹt ĐOẠN GIỮA ỐNG MẬT CHỦ</option>
            <option value="vater">Sỏi kẹt BÓNG GAN TỤY (Bóng Vater)</option>
            <option value="calot">Phẫu tích TAM GIÁC CALOT cắt túi mật</option>
          </select>
        </div>
      </div>
      <div id="s2_out"></div>
    `;
    this.upd_s2();
  },
  upd_s2() {
    const seg = document.getElementById("s2_seg").value;
    const bile = document.getElementById("s2_bile").value;

    const segs = {
      I: { half: "Gan Trái (Phân thùy giữa)", face: "CHỈ thấy ở MẶT TẠNG (tương ứng Thùy đuôi)", border: "Sau cửa gan, giữa rãnh TMCD (phải) và khe DC tĩnh mạch (trái)", vein: "Đổ trực tiếp bằng các TM nhỏ vào TMCD" },
      II: { half: "Gan Trái (Phân thùy bên)", face: "Thấy ở cả Mặt hoành & Mặt tạng (phần trên/sau)", border: "Bên trái khe liên phân thùy trái (DC liềm), trên khe phụ giữa thùy trái", vein: "TM gan trái" },
      III: { half: "Gan Trái (Phân thùy bên)", face: "Thấy ở cả Mặt hoành & Mặt tạng (phần dưới/trước)", border: "Bên trái khe liên phân thùy trái, dưới khe phụ giữa thùy trái", vein: "TM gan trái" },
      IV: { half: "Gan Trái (Phân thùy giữa)", face: "Mặt hoành (giữa Khe giữa & Khe trái) + Mặt tạng (Thùy vuông)", border: "Bên trái Khe chính (TM gan giữa) và bên phải Khe trái (DC liềm)", vein: "TM gan giữa & TM gan trái" },
      V: { half: "Gan Phải (Phân thùy trước)", face: "Thấy ở cả Mặt hoành & Mặt tạng (phần dưới, cạnh hố túi mật)", border: "Giữa Khe chính (trái) và Khe liên PT phải (phải), dưới khe phụ phải", vein: "TM gan giữa & TM gan phải" },
      VI: { half: "Gan Phải (Phân thùy sau)", face: "Mặt hoành phần phải & Mặt tạng (gần thận phải / khoang Morison)", border: "Bên phải Khe liên phân thùy phải, dưới khe phụ giữa thùy phải", vein: "TM gan phải" },
      VII: { half: "Gan Phải (Phân thùy sau)", face: "Mặt hoành phần trên–sau–phải (liên quan cung sườn VII–XI)", border: "Bên phải Khe liên phân thùy phải, trên khe phụ giữa thùy phải", vein: "TM gan phải" },
      VIII: { half: "Gan Phải (Phân thùy trước)", face: "Mặt hoành phần trên (sát vòm hoành phải)", border: "Giữa Khe chính và Khe liên PT phải, trên khe phụ giữa thùy phải", vein: "TM gan giữa & TM gan phải" }
    };

    const biles = {
      cystic: "<strong>Tắc Đường mật PHỤ:</strong> Túi mật căng to đau hạ sườn phải (viêm túi mật cấp), <strong>KHÔNG gây vàng da tắc mật</strong> và KHÔNG giãn đường mật trong gan vì OMC vẫn thông. (Ống túi mật có nếp niêm mạc xoắn ốc).",
      cbd_mid: "<strong>Tắc Đường mật CHÍNH:</strong> Giãn OMC đoạn trên chỗ tắc + Giãn đường mật trong gan + Túi mật to → <strong>Vàng da tắc mật</strong>. Lưu ý: OMC đoạn trong thành tá tràng là đoạn hẹp nhất.",
      vater: "<strong>Tắc Bóng Gan–Tụy (Vater):</strong> Giãn đường mật trong gan + Giãn OMC + Túi mật to + <strong>VIÊM TỤY CẤP</strong> (do dịch mật trào ngược vào ống Wirsung ở 50% có đoạn chung). Không làm giãn TM cửa!",
      calot: "<strong>Tam giác Gan mật (Calot):</strong> Giới hạn bởi <strong>Ống gan chung, Ống túi mật, Mặt tạng gan</strong> → chứa <strong>Động mạch túi mật</strong> (thường tách từ ĐM gan phải). Cần nhận diện đúng để không kẹp nhầm ĐM gan phải hoặc OMC!"
    };

    const s = segs[seg];
    document.getElementById("s2_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card">
          <div class="metric-label">Hạ phân thùy Chọn</div>
          <div class="metric-val">HPT ${seg}</div>
          <div class="metric-sub">${s.half}</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Hiện diện Bề mặt</div>
          <div class="metric-sub" style="font-size:12.5px;font-weight:700;color:var(--text-main);">${s.face}</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Ranh giới &amp; Khe TM Gan</div>
          <div class="metric-sub" style="font-size:12px;color:var(--text-main);">${s.border} • Dẫn lưu: <strong>${s.vein}</strong></div>
        </div>
      </div>
      <div class="callout warning">
        <div class="callout-title">🧪 Biện luận Đường mật Ngoài gan</div>
        <p style="margin:0;">${biles[bile]}</p>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 3: PHÒNG THỰC HÀNH KHỐI TÁ TỤY
  // ========================================================================
  sim_pancreas(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Bệnh lý / Tổn thương Khối Tá Tụy:</label>
          <select id="s3_case" onchange="Simulators.upd_s3()">
            <option value="head_tumor">1. Khối u ĐẦU TỤY chèn ép ra phía sau</option>
            <option value="neck_tumor">2. Khối u vùng CỔ TỤY phát triển ra sau</option>
            <option value="d3_clamp">3. Hội chứng ĐM MTTT (Von Rokitansky) trên D3</option>
            <option value="d3_trauma">4. Chấn thương bụng kín dập vùng thượng vị</option>
            <option value="tail_splen">5. Cắt lách kèm thắt ĐM lách ảnh hưởng Tụy nào?</option>
          </select>
        </div>
      </div>
      <div id="s3_out"></div>
    `;
    this.upd_s3();
  },
  upd_s3() {
    const c = document.getElementById("s3_case").value;
    const data = {
      head_tumor: {
        target: "Ống mật chủ (đi trong rãnh mặt sau trên ngoài đầu tụy) + Ống Wirsung",
        symptom: "VÀNG DA TẮC MẬT tăng dần không đau, túi mật to, giãn đường mật trong và ngoài gan.",
        vessel: "Đầu tụy được cấp máu bởi 2 cung ĐM tá tụy trước (gần tá tràng hơn) & sau (từ ĐM vị tá tràng ↔ ĐM MTTT).",
        ref: "TN 2024 Câu 1146 (tr. 176, 213) & Tập 2 tr. 54."
      },
      neck_tumor: {
        target: "Chỗ hợp lưu tạo TĨNH MẠCH CỬA (TM lách + TM MTTT) ở mặt sau cổ tụy & Bó mạch MTTT",
        symptom: "Huyết khối / Tăng áp lực tĩnh mạch cửa (lách to, báng bụng, giãn TM thực quản).",
        vessel: "Nhớ bẫy: Cổ tụy (khuyết tụy) là vết ấn của bó mạch MẠC TREO TRÀNG TRÊN (không phải dưới!).",
        ref: "TN 2024 Câu 441 & Tập 2 tr. 54."
      },
      d3_clamp: {
        target: "Phần ngang (D3) tá tràng (và Tĩnh mạch thận trái trong Hội chứng Nutcracker)",
        symptom: "Nôn ói sau ăn, gầy sút (tắc tá tràng cao do D3 bị kẹp giữa ĐMC bụng ở sau và ĐM MTTT ở trước).",
        vessel: "D3 nằm trước cột sống L3–L4; Mỏm móc tụy cũng nằm kẹp giữa ĐMC bụng (sau) và bó mạch MTTT (trước).",
        ref: "TN 2024 Câu 1141 & 1154 (tr. 175, 178)."
      },
      d3_trauma: {
        target: "Phần ngang (D3) tá tràng & Thân tụy bắt ngang cột sống thắt lưng",
        symptom: "Vỡ tá tràng D3 sau phúc mạc hoặc đứt ống Wirsung do lực chấn thương ép thẳng vào cột sống phía sau.",
        vessel: "D2 dính chặt đầu tụy nhất (có nhú tá lớn & nhú tá bé ở thành sau trong); D3 dễ vỡ nhất khi chấn thương bụng kín.",
        ref: "Tập 2 Bài 22 tr. 23 & TN 2024 Câu 444, 446."
      },
      tail_splen: {
        target: "Thân & Đuôi tụy (bờ trên liên quan ĐM lách, mặt sau liên quan TM lách)",
        symptom: "Đuôi tụy nằm gần/chạm rốn lách nên dễ tổn thương khi kẹp cuống lách. Thiếu máu ĐM tụy lưng, tụy lớn, đuôi tụy.",
        vessel: "Lưu ý tụy nội tiết: Thân và đuôi tụy chứa nhiều Tế bào A (Glucagon), ít Tế bào F (ngược lại với mỏm móc!).",
        ref: "Tập 2 Bài 25 tr. 57, 60 & Câu TLG 2 (tr. 61)."
      }
    };
    const d = data[c];
    document.getElementById("s3_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card">
          <div class="metric-label">Cấu trúc Chịu ảnh hưởng</div>
          <div class="metric-sub" style="font-size:12.5px;font-weight:700;color:var(--danger);">${d.target}</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Biểu hiện Lâm sàng</div>
          <div class="metric-sub" style="font-size:12.5px;color:var(--text-main);">${d.symptom}</div>
        </div>
      </div>
      <div class="callout pearl">
        <div class="callout-title">🔬 Phân tích Mạch máu &amp; Mốc thi (${d.ref})</div>
        <p style="margin:0;">${d.vessel}</p>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 4: PHÒNG THỰC HÀNH VAN TIM & 4 Ổ NGHE TIM
  // ========================================================================
  sim_heart_valves(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Thì Chu chuyển Tim:</label>
          <select id="s4_phase" onchange="Simulators.upd_s4()">
            <option value="diastole">Thì TÂM TRƯƠNG (Ventricular Diastole)</option>
            <option value="systole">Thì TÂM THU (Ventricular Systole)</option>
          </select>
        </div>
        <div class="control-group">
          <label>Chọn Vị trí Nghe Tim &amp; Bệnh lý Van:</label>
          <select id="s4_ausc" onchange="Simulators.upd_s4()">
            <option value="M">Mỏm tim (KLS 4–5 đường trung đòn trái) – Van 2 lá</option>
            <option value="T">Mỏm mũi kiếm xương ức – Van 3 lá</option>
            <option value="P">KLS 2 cạnh bờ trái xương ức – Van ĐM phổi</option>
            <option value="A">KLS 2 cạnh bờ phải xương ức – Van ĐM chủ</option>
          </select>
        </div>
      </div>
      <div id="s4_out"></div>
    `;
    this.upd_s4();
  },
  upd_s4() {
    const phase = document.getElementById("s4_phase").value;
    const ausc = document.getElementById("s4_ausc").value;

    const isDias = phase === "diastole";
    const auscMap = {
      M: { name: "Van Hai lá (Nhĩ–thất trái)", site: "Nghe rõ ở MỎM TIM (chiếu giải phẫu KLS 3–4 bờ trái ức)", patho: "Hẹp van 2 lá → máu ứ tâm nhĩ trái (nhĩ trái to đè THỰC QUẢN gây nuốt nghẹn) → ứ máu 4 TM phổi & phổi." },
      T: { name: "Van Ba lá (Nhĩ–thất phải)", site: "Nghe rõ ở MỎM MŨI KIẾM XƯƠNG ỨC (chiếu giải phẫu 1/3 dưới xương ức)", patho: "Hở/Hẹp van 3 lá & suy tim phải → máu dội ngược lên nhĩ phải → dội ngược TM chủ trên (không van!) làm nổi tĩnh mạch cổ." },
      P: { name: "Van Động mạch Phổi (3 van bán nguyệt: trước, phải, trái)", site: "Nghe rõ ở KLS 2 CẠNH BỜ TRÁI XƯƠNG ỨC (chiếu ngang sụn sườn 3 trái)", patho: "Ngăn máu từ thân ĐM phổi chảy ngược về thất phải trong thì tâm trương; dưới lỗ ĐMP là nón ĐM (phễu)." },
      A: { name: "Van Động mạch Chủ (3 van bán nguyệt: phải, trái, sau)", site: "Nghe rõ ở KLS 2 CẠNH BỜ PHẢI XƯƠNG ỨC (hoặc KLS 3 bờ trái)", patho: "Hẹp van ĐMC hạn chế tống máu thất trái thì tâm thu → phì đại thất trái (thành dày gấp 3× thất phải). Xoang phải/trái có lỗ ĐMV dưới đường SJ; xoang sau không vành." }
    };
    const a = auscMap[ausc];

    document.getElementById("s4_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card">
          <div class="metric-label">Van 2 lá &amp; Van 3 lá</div>
          <div class="metric-val" style="color:${isDias ? "var(--success)" : "var(--danger)"}">${isDias ? "🟢 ĐANG MỞ" : "🔴 ĐÓNG KÍN"}</div>
          <div class="metric-sub">${isDias ? "Máu từ Nhĩ → Thất" : "Ngăn máu dội ngược lên Nhĩ"}</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Van ĐMC &amp; Van ĐM Phổi</div>
          <div class="metric-val" style="color:${isDias ? "var(--danger)" : "var(--success)"}">${isDias ? "🔴 ĐÓNG KÍN" : "🟢 ĐANG MỞ"}</div>
          <div class="metric-sub">${isDias ? "Tưới máu 2 lỗ ĐM vành" : "Thất P→ĐMP; Thất T→ĐMC"}</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Van Đang Khảo sát</div>
          <div class="metric-val" style="font-size:14.5px;color:var(--primary)">${a.name}</div>
          <div class="metric-sub">${a.site}</div>
        </div>
      </div>
      <div class="callout pearl">
        <div class="callout-title">🩺 Biện luận Huyết động &amp; Đối chiếu Lâm sàng</div>
        <p style="margin:0;">${a.patho}</p>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 5: PHÒNG THỰC HÀNH MẠCH VÀNH & DẪN TRUYỀN
  // ========================================================================
  sim_coronary(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Vị trí Tắc Động mạch Vành:</label>
          <select id="s5_art" onchange="Simulators.upd_s5()">
            <option value="lad">1. Tắc ĐM Gian thất trước (LAD)</option>
            <option value="lcx">2. Tắc ĐM Mũ (LCx) ngay sau chỗ chia thân chung</option>
            <option value="rca_prox">3. Tắc ĐM Vành phải (RCA) đoạn GẦN (trước nhánh bờ P)</option>
            <option value="rca_dist">4. Tắc ĐM Vành phải (RCA) SAU nhánh bờ phải (tới giao điểm)</option>
          </select>
        </div>
        <div class="control-group">
          <label>Kiểu Phân bố Động mạch vành:</label>
          <select id="s5_dom" onchange="Simulators.upd_s5()">
            <option value="right">Ưu thế Phải (~85% người bình thường)</option>
            <option value="left">Ưu thế Trái (ĐM mũ chạy tới vùng giao điểm)</option>
          </select>
        </div>
      </div>
      <div id="s5_out"></div>
    `;
    this.upd_s5();
  },
  upd_s5() {
    const art = document.getElementById("s5_art").value;
    const dom = document.getElementById("s5_dom").value;

    const map = {
      lad: {
        myo: "Thành trước thất trái (nhánh chéo), MỎM TIM, 2/3 trước Vách gian thất (nhánh vách trước).",
        cond: "Có thể tổn thương Bó His / Trụ phải & Trụ trái trong 2/3 trước vách gian thất.",
        vein: "Đi cùng ĐM gian thất trước là Tĩnh mạch tim lớn (đổ vào xoang TM vành).",
        ref: "TN 2024 Câu 1129–1131, 138."
      },
      lcx: {
        myo: dom === "left"
          ? "Nhánh bờ trái (bờ tù), thành ngoài/sau thất trái + MẶT HOÀNH thất trái & 1/3 sau vách (do ưu thế trái cho ĐM gian thất sau!)."
          : "Nhánh bờ trái (bờ tù) và một phần thành sau ngoài thất trái.",
        cond: dom === "left" ? "Trong ưu thế trái, có thể ảnh hưởng nút nhĩ–thất!" : "Ít ảnh hưởng trực tiếp nút SA/AV (trừ nhánh nút xoang nếu tách từ mũ).",
        vein: "Xoang TM vành và TM sau thất trái đi ở rãnh vành trái mặt hoành.",
        ref: "TN 2024 Câu 141, 1132."
      },
      rca_prox: {
        myo: "Tâm nhĩ phải, mặt trước thất phải, nhánh bờ phải (bờ sắc)" + (dom === "right" ? ", mặt hoành tim & 1/3 sau vách gian thất." : "."),
        cond: "Nguy cơ thiếu máu CẢ Nút xoang nhĩ VÀ Nút nhĩ thất (block dẫn truyền / nhịp chậm).",
        vein: "TM tim nhỏ chạy cùng ĐMV phải trong rãnh vành phải; TM tim trước đổ thẳng nhĩ phải.",
        ref: "TN 2024 Câu 1126–1128, 140."
      },
      rca_dist: {
        myo: dom === "right" ? "Mặt hoành tim & 1/3 sau vách gian thất (nhánh gian thất sau)." : "Tối thiểu ở thất trái (vì ĐM mũ ưu thế trái cấp máu mặt hoành).",
        cond: dom === "right" ? "Tổn thương NÚT NHĨ THẤT (nhánh tách ở giao điểm sau nhánh bờ phải)!" : "Ít rối loạn nhịp nút AV nếu nút AV nhận máu từ ĐM mũ.",
        vein: "ĐM gian thất sau đi cùng Tĩnh mạch tim giữa trong rãnh gian thất sau.",
        ref: "TN 2024 Câu 1133 (tr. 173, 213)."
      }
    };

    const m = map[art];
    document.getElementById("s5_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card">
          <div class="metric-label">Vùng Cơ tim Thiếu máu</div>
          <div class="metric-sub" style="font-size:12.5px;font-weight:700;color:var(--danger);">${m.myo}</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Hệ Dẫn truyền Bị ảnh hưởng</div>
          <div class="metric-sub" style="font-size:12.5px;font-weight:700;color:var(--warning);">${m.cond}</div>
        </div>
      </div>
      <div class="callout trap">
        <div class="callout-title">💡 Tĩnh mạch Song hành &amp; Nguồn thi (${m.ref})</div>
        <p style="margin:0;">${m.vein} Lưu ý: các ĐM vành <strong>không thông nối dồi dào</strong> nên tắc đột ngột gây hoại tử cơ tim ngay.</p>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 6: PHÒNG THỰC HÀNH ĐỘNG MẠCH CHỦ BỤNG
  // ========================================================================
  sim_aorta(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Mốc Đốt sống / Đoạn Động mạch Chủ bụng:</label>
          <select id="s6_lvl" onchange="Simulators.upd_s6()">
            <option value="T12">1. Mốc T12–L1: Nguyên ủy ĐMC bụng &amp; ĐM Thân tạng</option>
            <option value="L1">2. Mốc L1: ĐM Mạc treo tràng trên &amp; ĐM Thận</option>
            <option value="L2">3. Mốc L2: ĐM Tinh hoàn / ĐM Buồng trứng</option>
            <option value="L3">4. Mốc L3: ĐM Mạc treo tràng dưới &amp; Cung Riolan</option>
            <option value="L4">5. Mốc Bờ trái L4: Chia đôi ĐM Chậu chung &amp; Cùng giữa</option>
            <option value="L5">6. Mốc Đĩa L5–S1: Chậu trong &amp; Chậu ngoài</option>
          </select>
        </div>
      </div>
      <div id="s6_out"></div>
    `;
    this.upd_s6();
  },
  upd_s6() {
    const lv = document.getElementById("s6_lvl").value;
    const data = {
      T12: {
        branches: "ĐM Hoành dưới + ĐM Thân tạng (dài ~1 cm → Vị trái, Gan chung, Lách)",
        territory: "Gan, đường mật, dạ dày, đầu tụy/tá tràng (trên), thân/đuôi tụy, lách, mạc nối lớn.",
        trap: "ĐM vị phải tách từ ĐM gan riêng; ĐM vị tá tràng từ ĐM gan chung; ĐM túi mật từ ĐM gan phải."
      },
      L1: {
        branches: "ĐM Mạc treo tràng trên (dưới thân tạng 1 cm) + ĐM Thận phải/trái",
        territory: "Tá tràng (dưới), đầu tụy, toàn bộ hỗng–hồi tràng, manh tràng, ruột thừa (từ ĐM hồi kết tràng), kết tràng lên, 2/3 phải kết tràng ngang + Hai thận.",
        trap: "ĐM MTTT kẹp D3 tá tràng & TM thận trái (Nutcracker). ĐM thận phải DÀI HƠN và đi SAU TM chủ dưới."
      },
      L2: {
        branches: "ĐM Tinh hoàn (nam) / ĐM Buồng trứng (nữ) + ĐM Thắt lưng",
        territory: "Bắt chéo phía trước niệu quản đi xuống tiểu khung / ống bẹn. (Ngoài ra có ĐM thượng thận giữa).",
        trap: "ĐM tinh hoàn KHÔNG cho nhánh ĐM cơ bìu (ĐM cơ bìu từ ĐM thượng vị dưới). Cẩn thận vùng thừng tinh!"
      },
      L3: {
        branches: "ĐM Mạc treo tràng dưới (trên chỗ chia đôi ĐMC 4–5 cm)",
        territory: "1/3 trái kết tràng ngang, kết tràng xuống, kết tràng sigma, phần lớn trực tràng (nhánh tận ĐM trực tràng trên ngang S3).",
        trap: "Nhánh lên ĐM kết tràng trái nối ĐM kết tràng giữa tạo CUNG MẠCH RIOLAN (ĐM bờ Drummond)."
      },
      L4: {
        branches: "2 ĐM Chậu chung (trái &amp; phải) + ĐM Cùng giữa",
        territory: "Chỗ chia đôi ở BỜ TRÁI đốt sống L4 (trong khi hợp lưu TMCD ở SƯỜN PHẢI L4!).",
        trap: "Cẩn thận phân biệt mốc chia ĐMC (L4) với mốc chia ĐM chậu chung (L5–S1)."
      },
      L5: {
        branches: "ĐM Chậu trong (11 nhánh: 8 thân trước + 3 thân sau) &amp; ĐM Chậu ngoài (Thượng vị dưới + Mũ chậu sâu)",
        territory: "Chậu trong nuôi tạng chậu hông bé &amp; vùng mông; Chậu ngoài qua dây chằng bẹn đổi thành ĐM đùi.",
        trap: "ĐM bịt qua ống bịt (không qua khuyết ngồi lớn!). ĐM tử cung bắt chéo trước trên niệu quản cách cổ tử cung 1,5 cm."
      }
    };
    const d = data[lv];
    document.getElementById("s6_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card">
          <div class="metric-label">Nhánh Tách tại Mốc ${lv}</div>
          <div class="metric-val" style="font-size:14.5px;color:var(--primary)">${d.branches}</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Vùng Cấp máu Chính</div>
          <div class="metric-sub" style="font-size:12.5px;color:var(--text-main);">${d.territory}</div>
        </div>
      </div>
      <div class="callout trap">
        <div class="callout-title">⚠️ Bẫy Đề thi Mốc ${lv}</div>
        <p style="margin:0;">${d.trap}</p>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 7: PHÒNG THỰC HÀNH TĂNG ÁP LỰC TĨNH MẠCH CỬA
  // ========================================================================
  sim_portal_hypertension(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Mức độ Tắc nghẽn / Bệnh lý Hệ Tĩnh mạch Cửa:</label>
          <select id="s7_state" onchange="Simulators.upd_s7()">
            <option value="normal">1. Bình thường (Gan khỏe – Dòng máu cửa thông thoáng)</option>
            <option value="cirrhosis">2. Xơ gan Tăng áp lực Tĩnh mạch Cửa toàn bộ</option>
            <option value="splenic_thromb">3. Huyết khối Tĩnh mạch Lách đơn độc (do Viêm tụy)</option>
          </select>
        </div>
      </div>
      <div id="s7_out"></div>
    `;
    this.upd_s7();
  },
  upd_s7() {
    const st = document.getElementById("s7_state").value;
    const states = {
      normal: {
        pv: "Bình thường (5–10 mmHg)",
        dilated: "Không có (máu chảy xuôi qua cửa gan → xoang gan → 3 TM gan → TMCD)",
        notDilated: "Toàn bộ hệ Cửa và hệ Chủ lưu thông bình thường",
        shunts: "3 vòng nối cửa–chủ (thực quản, trực tràng, quanh rốn) thông thương nhẹ, chưa giãn."
      },
      cirrhosis: {
        pv: "TĂNG CAO (> 12 mmHg – Đảo chiều dòng máu)",
        dilated: "TM cửa, TM LÁCH (gây LÁCH TO), TM MTTT, TM MTTD, TM vị trái, TM trực tràng trên, TM cạnh rốn",
        notDilated: "3 TĨNH MẠCH GAN (nằm sau xoang gan) và TM chủ dưới → KHÔNG GIÃN!",
        shunts: "1) Giãn vỡ TM thực quản (TM vị trái ↔ TM đơn → Nôn máu); 2) Trĩ (TM trực tràng trên ↔ giữa/dưới); 3) Đầu sứa quanh rốn (TM cạnh rốn ↔ TM thành bụng)."
      },
      splenic_thromb: {
        pv: "Tăng áp cửa PHÂN ĐOẠN (chỉ khu trú nhánh lách)",
        dilated: "TM lách (LÁCH TO) và các TM VỊ NGẮN + TM vị mạc nối trái ở ĐÁY VỊ dạ dày",
        notDilated: "Thân chính TM cửa, 3 TM gan, TM MTTT không giãn (gan bình thường)",
        shunts: "Giãn tĩnh mạch phình/đáy vị cô lập dễ gây xuất huyết tiêu hóa trên dù chức năng gan bình thường."
      }
    };
    const d = states[st];
    document.getElementById("s7_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card">
          <div class="metric-label">Áp lực Hệ Cửa</div>
          <div class="metric-val" style="font-size:14.5px;color:${st === "normal" ? "var(--success)" : "var(--danger)"}">${d.pv}</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Tĩnh mạch Bị Giãn</div>
          <div class="metric-sub" style="font-size:12.5px;font-weight:700;color:var(--danger);">${d.dilated}</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Tĩnh mạch KHÔNG Giãn</div>
          <div class="metric-sub" style="font-size:12.5px;font-weight:700;color:var(--success);">${d.notDilated}</div>
        </div>
      </div>
      <div class="callout warning">
        <div class="callout-title">🔀 Hậu quả tại 3 Vòng nối Cửa – Chủ</div>
        <p style="margin:0;">${d.shunts}</p>
      </div>
    `;
  }
};
