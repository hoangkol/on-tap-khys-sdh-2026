/**
 * CỔNG ÔN TẬP GIẢI PHẪU BỆNH SĐH 2026 - ĐẠI HỌC Y DƯỢC TP.HCM (YDS)
 * Module: 8 Phòng Thí nghiệm Mô phỏng Giải phẫu bệnh Tương tác (Simulators)
 */
(function () {
  'use strict';

  const simState = {
    sim_atp_organelle: { atp: 85, minutes: 10, insult: 'ischemia' },
    sim_adaptation_diff: { scenario: 'barrett', gradeIdx: 1 },
    sim_necrosis_calcification: { sample: 'steatosis', stain: 'he' },
    sim_tumor_nomenclature: { origin: 'gland', behavior: 'malig', t: 'T2', n: 'N1', m: 'M0' },
    sim_carcinogens_viruses: { protocol: 'init_prom', agent: 'aflatoxin' },
    sim_hallmarks_paraneo: { hallmarkIdx: 6, paraneo: 'pthrp' },
    sim_rtk_fusion_pathway: { rtk: 'egfr_wt', downstream: 'kras_mut', drug: 'cetuximab' },
    sim_tp53_caspase: { damage: 'severe', mutation: 'bcl2_up', treatment: 'venetoclax' }
  };

  const SIM_CONTAINERS = {};

  function mount(simId, container) {
    if (!container) return;
    SIM_CONTAINERS[simId] = container;
    render(simId, container);
  }

  function render(simId, container) {
    const target = container || SIM_CONTAINERS[simId];
    if (!target) return;
    SIM_CONTAINERS[simId] = target;

    const builders = {
      sim_atp_organelle: buildAtpOrganelle,
      sim_adaptation_diff: buildAdaptationDiff,
      sim_necrosis_calcification: buildNecrosisCalcification,
      sim_tumor_nomenclature: buildTumorNomenclature,
      sim_carcinogens_viruses: buildCarcinogensViruses,
      sim_hallmarks_paraneo: buildHallmarksParaneo,
      sim_rtk_fusion_pathway: buildRtkFusion,
      sim_tp53_caspase: buildTp53Caspase
    };

    const fn = builders[simId];
    if (fn) {
      target.innerHTML = fn(simState[simId]);
    }
  }

  function setVal(simId, key, val) {
    if (!simState[simId]) return;
    simState[simId][key] = val;
    render(simId);
  }

  /* ------------------------------------------------------------------
     1. SIMULATOR BÀI 1: SUY GIẢM ATP, ROS & ĐIỂM KHÔNG HỒI PHỤC
     ------------------------------------------------------------------ */
  function buildAtpOrganelle(st) {
    const atp = Number(st.atp);
    const min = Number(st.minutes);
    const isIschemia = st.insult === 'ischemia';
    const isCCl4 = st.insult === 'ccl4';

    let stage = 'Bình thường';
    let badgeColor = 'var(--success)';
    let reversible = '100% Hồi phục';
    let caLevel = 'Thấp (< 0,1 µM)';
    let mptStatus = 'Đóng kín';
    let mechanismNote = '';

    const severity = (100 - atp) * 0.55 + Math.min(min, 60) * 0.75 + (isCCl4 ? 18 : 0);

    if (severity < 25) {
      stage = 'Cân bằng nội môi bình thường';
      badgeColor = 'var(--success)';
      reversible = 'Bình thường';
      caLevel = '0,1 µM (An toàn)';
      mptStatus = 'Đóng';
      mechanismNote = 'Bơm Na⁺/K⁺-ATPase hoạt động tốt, ty thể sinh ATP ổn định, ribosome bám chặt lưới nội bào hạt (RER).';
    } else if (severity < 62) {
      stage = 'Tổn thương CÒN KHẢ HỒI (Phù tế bào)';
      badgeColor = 'var(--warning)';
      reversible = 'Khả hồi nếu ngưng tác nhân sớm';
      caLevel = 'Tăng nhẹ (0,5 – 1 µM)';
      mptStatus = 'Chưa mở hoàn toàn';
      mechanismNote = isCCl4
        ? 'CYP450 chuyển CCl₄ thành gốc tự do CCl₃• gây peroxy hóa lipid màng RER → rụng ribosome, giảm apoprotein → gan ứ đọng triglyceride (thoái hóa mỡ).'
        : '↓ ATP làm yếu bơm Na⁺/K⁺ → Na⁺ và H₂O vào tế bào gây PHÙ TẾ BÀO, dãn RER, rụng ribosome, đường phân yếm khí sinh acid lactic (↓ pH).';
    } else {
      stage = 'KHÔNG HỒI PHỤC (Hoại tử tế bào)';
      badgeColor = 'var(--danger)';
      reversible = 'Bất hồi phục (Chết tế bào)';
      caLevel = 'Tăng vọt → Hoạt hóa 4 Enzym phá hủy';
      mptStatus = 'MỞ RỘNG (Thoát Cytochrome c)';
      mechanismNote = isIschemia
        ? 'Tổn thương màng ty thể & lysosome nặng: mở lỗ chuyển tiếp ty thể (MPT), Ca²⁺ kích hoạt Phospholipase/Protease/Endonuclease/ATPase, vỡ lysosome tự tiêu bào tương; nhân trải qua Pyknosis → Karyorrhexis → Karyolysis.'
        : 'Gốc tự do tấn công dồn dập (đặc biệt khi tái tưới máu hoặc quá tải CCl₄): đứt vỡ màng bào tương, rò enzyme nội bào (CK, AST/ALT, LDH) ra huyết thanh.';
    }

    const cellR = severity < 25 ? 64 : (severity < 62 ? 80 : 88);
    const strokeStyle = severity >= 62 ? 'stroke-dasharray="7 5"' : '';
    const cellFill = severity < 25 ? 'var(--primary-light)' : (severity < 62 ? 'var(--warning-light)' : 'var(--danger-light)');

    return `
      <div class="sim-box">
        <div class="sim-header">
          <div>
            <h3 style="margin:0;font-size:17px;">🧪 Mô phỏng Tế bào Chịu Stress: Ngưỡng Khả hồi vs Chết tế bào</h3>
            <div style="font-size:13px;color:var(--text-muted);margin-top:2px;">Điều chỉnh % ATP ty thể, thời gian thiếu máu và loại tác nhân để quan sát biến đổi bào quan</div>
          </div>
          <span class="sim-badge">${stage}</span>
        </div>

        <div class="sim-controls">
          <div class="control-group">
            <label>Năng lượng ATP ty thể còn lại: <strong>${atp}%</strong></label>
            <input type="range" min="0" max="100" step="5" value="${atp}" oninput="Simulators.setVal('sim_atp_organelle','atp',this.value)" />
          </div>
          <div class="control-group">
            <label>Thời gian tiếp xúc tác nhân: <strong>${min} phút</strong></label>
            <input type="range" min="0" max="60" step="5" value="${min}" oninput="Simulators.setVal('sim_atp_organelle','minutes',this.value)" />
          </div>
          <div class="control-group">
            <label>Tác nhân bệnh sinh chính</label>
            <select onchange="Simulators.setVal('sim_atp_organelle','insult',this.value)">
              <option value="ischemia" ${st.insult === 'ischemia' ? 'selected' : ''}>Thiếu máu cục bộ / Giảm oxy</option>
              <option value="ccl4" ${st.insult === 'ccl4' ? 'selected' : ''}>Độc chất (CCl₄ → Gốc tự do CCl₃•)</option>
              <option value="reperfusion" ${st.insult === 'reperfusion' ? 'selected' : ''}>Tổn thương tái tưới máu (Bùng nổ ROS)</option>
            </select>
          </div>
        </div>

        <div class="svg-stage">
          <svg viewBox="0 0 640 220" style="width:100%;max-width:640px;height:auto;" role="img" aria-label="Hình thái tế bào theo mức ATP">
            <rect x="4" y="4" width="632" height="212" rx="12" fill="var(--bg-main)" stroke="var(--border)" />
            <circle cx="170" cy="112" r="${cellR}" fill="${cellFill}" stroke="${badgeColor}" stroke-width="3" ${strokeStyle} />
            ${severity >= 25 && severity < 62 ? `
              <circle cx="242" cy="76" r="14" fill="${cellFill}" stroke="${badgeColor}" stroke-width="2" />
              <circle cx="105" cy="145" r="11" fill="${cellFill}" stroke="${badgeColor}" stroke-width="2" />
              <text x="274" y="65" font-size="11" font-weight="700" fill="var(--warning)">Tạo nụ màng (Blebs)</text>
            ` : ''}
            <ellipse cx="170" cy="112" rx="${severity >= 62 ? 17 : 26}" ry="${severity >= 62 ? 15 : 22}" fill="var(--accent)" opacity="${severity >= 62 ? 0.95 : 0.72}" />
            <text x="170" y="116" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">${severity >= 62 ? 'Nhân đông' : 'Nhân'}</text>
            ${severity >= 62 ? `
              <text x="170" y="206" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--danger)">Màng vỡ → Thoát Enzym Lysosome (Tự tiêu)</text>
            ` : `
              <text x="170" y="206" text-anchor="middle" font-size="11.5" font-weight="700" fill="${badgeColor}">Màng bào tương ${severity < 25 ? 'bình thường' : 'phồng to còn nguyên vẹn'}</text>
            `}

            <rect x="315" y="22" width="302" height="176" rx="10" fill="var(--bg-card)" stroke="var(--border)" />
            <text x="330" y="46" font-size="13" font-weight="800" fill="${badgeColor}">${stage}</text>
            <text x="330" y="72" font-size="11.8" font-weight="700" fill="var(--text-main)">• Ca²⁺ bào tương: <tspan fill="${badgeColor}">${caLevel}</tspan></text>
            <text x="330" y="96" font-size="11.8" font-weight="700" fill="var(--text-main)">• Lỗ ty thể (MPT): <tspan fill="${badgeColor}">${mptStatus}</tspan></text>
            <text x="330" y="120" font-size="11.8" font-weight="700" fill="var(--text-main)">• Bơm Na⁺/K⁺: <tspan>${atp < 25 ? 'Ngưng trệ nặng → Phù nước' : (atp < 60 ? 'Suy yếu một phần' : 'Hoạt động tốt')}</tspan></text>
            <text x="330" y="144" font-size="11.8" font-weight="700" fill="var(--text-main)">• Tổng hợp Protein (RER): <tspan>${severity >= 25 ? 'Rụng ribosome → Giảm' : 'Bình thường'}</tspan></text>
            <text x="330" y="172" font-size="11.5" font-weight="700" fill="var(--primary)">Tiên lượng: ${reversible}</text>
          </svg>
        </div>

        <div class="metric-cards">
          <div class="metric-card">
            <div class="metric-label">Khả năng hồi phục</div>
            <div class="metric-val" style="color:${badgeColor};">${reversible}</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Chuyển hóa Glucose</div>
            <div class="metric-val">${atp < 60 ? 'Yếm khí → ↑ Acid Lactic (↓ pH)' : 'Hiếu khí bình thường'}</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Hệ Enzyme Ca²⁺</div>
            <div class="metric-val">${severity >= 62 ? 'Phospholipase + Protease + DNase + ATPase' : 'Chưa kích hoạt ồ ạt'}</div>
          </div>
        </div>

        <div class="callout ${severity >= 62 ? 'trap' : 'pearl'}" style="margin-bottom:0;">
          <div class="callout-title">Phân tích Cơ chế Bệnh sinh</div>
          <p style="margin:0;">${mechanismNote}</p>
        </div>
      </div>
    `;
  }

  /* ------------------------------------------------------------------
     2. SIMULATOR BÀI 2: PHỔ THÍCH NGHI & TIỀN UNG THƯ BIỂU MÔ (CIN)
     ------------------------------------------------------------------ */
  function buildAdaptationDiff(st) {
    const scenarios = {
      hypertension: {
        name: 'Tăng huyết áp mạn → Cơ tim thất trái',
        type: 'Phì đại (Hypertrophy)',
        detail: 'Tế bào cơ tim trưởng thành KHÔNG còn khả năng phân chia → đáp ứng bằng TĂNG KÍCH THƯỚC mỗi tế bào (tăng tổng hợp actin/myosin). Nếu kéo dài quá ngưỡng → suy tim.',
        reversible: 'Có (khi kiểm soát HA sớm)',
        dangerLevel: 'Lành tính (Thích nghi)'
      },
      bph: {
        name: 'Kích thích DHT → Tiền liệt tuyến (BPH)',
        type: 'Tăng sản (Hyperplasia) bệnh lý',
        detail: 'Tế bào biểu mô & mô đệm tuyến tiền liệt tăng SỐ LƯỢNG dưới kích thích nội tiết tố sinh dục nam (dihydrotestosterone - DHT). Lưu ý: BPH KHÔNG phải tiền ung thư TLT!',
        reversible: 'Có thể kiểm soát nội tiết',
        dangerLevel: 'Lành tính (Xem Hình 3.2B)'
      },
      smoker: {
        name: 'Khói thuốc lá → Biểu mô phế quản',
        type: 'Chuyển sản gai (Squamous metaplasia)',
        detail: 'Biểu mô trụ giả tầng có lông chuyển (mềm yếu nhưng đẩy nhầy) chuyển thành biểu mô gai tầng (bền cơ học hơn nhưng mất chức năng thanh lọc nhầy) → dễ tiến triển loạn sản & carcinôm tế bào gai.',
        reversible: 'Có (nếu cai thuốc lá sớm)',
        dangerLevel: 'Thích nghi có nguy cơ ác hóa nếu kéo dài'
      },
      barrett: {
        name: 'Trào ngược GERD mạn → 1/3 dưới Thực quản',
        type: 'Chuyển sản trụ ruột (Thực quản Barrett)',
        detail: 'Biểu mô gai tầng thực quản chuyển thành biểu mô trụ tuyến chế nhầy có tế bào đài (goblet cells) giống ruột để chịu acid dịch vị → yếu tố nguy cơ hàng đầu của Carcinôm tuyến thực quản.',
        reversible: 'Hạn chế nếu không điều trị',
        dangerLevel: 'Tiền đề Loạn sản → Adenocarcinoma'
      },
      cast: {
        name: 'Bó bột chi bất động / Mất thần kinh',
        type: 'Teo đét (Atrophy)',
        detail: 'Giảm kích thước tế bào và số lượng bào quan thông qua hệ ubiquitin-proteasome và tự thực (autophagy tạo không bào chứa lipofuscin màu nâu → "teo nâu").',
        reversible: 'Có (tập phục hồi sớm)',
        dangerLevel: 'Lành tính (Xem Hình 3.2A)'
      }
    };

    const grades = [
      { label: 'Bình thường', depth: 0, bm: true, desc: 'Phân tầng trật tự từ đáy lên bề mặt; nhân nhỏ đều; phân bào chỉ ở lớp đáy.', status: 'Lành tính' },
      { label: 'Chuyển sản (Metaplasia)', depth: 1, bm: true, desc: 'Thay thế loại tế bào trưởng thành khác để thích nghi (còn cực tính & đồng đều). Khả hồi.', status: 'Thích nghi' },
      { label: 'Loạn sản nhẹ (CIN I)', depth: 2, bm: true, desc: 'Bất thường nhân & mất cực tính chiếm 1/3 DƯỚI biểu mô; trên bề mặt vẫn trưởng thành.', status: 'Tiền ung thư nhẹ' },
      { label: 'Loạn sản vừa (CIN II)', depth: 3, bm: true, desc: 'Tế bào nhân tăng sắc, đa hình thái, phân bào lạc chỗ lan lên 2/3 DƯỚI biểu mô.', status: 'Tiền ung thư vừa' },
      { label: 'Loạn sản nặng / CIS (CIN III)', depth: 4, bm: true, desc: 'Chiếm TOÀN BỘ bề dày biểu mô (100%), phân bào nhiều tầng nhưng MÀNG ĐÁY CÒN NGUYÊN VẸN!', status: 'Carcinoma tại chỗ (0 di căn)' },
      { label: 'Carcinoma Xâm lấn (Thoái sản)', depth: 5, bm: false, desc: 'Tế bào bướu PHÁ VỠ MÀNG ĐÁY xâm nhập mô đệm; đa hình thái, phân bào 3 cực/đa cực → có thể di căn!', status: 'Ung thư xâm lấn' }
    ];

    const sc = scenarios[st.scenario];
    const g = grades[Number(st.gradeIdx)];

    return `
      <div class="sim-box">
        <div class="sim-header">
          <div>
            <h3 style="margin:0;font-size:17px;">🔬 Phòng Lab Thích nghi Tế bào &amp; Thang bậc Tiền Ung thư (CIN → Xâm lấn)</h3>
            <div style="font-size:13px;color:var(--text-muted);margin-top:2px;">Chọn tình huống lâm sàng hoặc kéo thanh mức độ tổn thương biểu mô để soi màng đáy</div>
          </div>
          <span class="sim-badge">${g.label}</span>
        </div>

        <div class="sim-controls">
          <div class="control-group">
            <label>1. Tình huống Thích nghi Lâm sàng</label>
            <select onchange="Simulators.setVal('sim_adaptation_diff','scenario',this.value)">
              <option value="barrett" ${st.scenario === 'barrett' ? 'selected' : ''}>Trào ngược GERD mạn → Thực quản Barrett</option>
              <option value="smoker" ${st.scenario === 'smoker' ? 'selected' : ''}>Hút thuốc lá → Phế quản (Chuyển sản gai)</option>
              <option value="hypertension" ${st.scenario === 'hypertension' ? 'selected' : ''}>Tăng huyết áp → Cơ tim (Phì đại)</option>
              <option value="bph" ${st.scenario === 'bph' ? 'selected' : ''}>Hormon DHT → Tuyến tiền liệt (Tăng sản)</option>
              <option value="cast" ${st.scenario === 'cast' ? 'selected' : ''}>Bó bột / Thiếu máu → Cơ vân (Teo đét)</option>
            </select>
          </div>
          <div class="control-group">
            <label>2. Kéo Thanh Tiến triển Biểu mô: <strong>${g.label}</strong></label>
            <input type="range" min="0" max="5" step="1" value="${st.gradeIdx}" oninput="Simulators.setVal('sim_adaptation_diff','gradeIdx',this.value)" />
          </div>
        </div>

        <div class="svg-stage">
          <svg viewBox="0 0 640 205" style="width:100%;max-width:640px;height:auto;" role="img" aria-label="Sơ đồ mức độ loạn sản và màng đáy">
            <rect x="4" y="4" width="632" height="197" rx="12" fill="var(--bg-main)" stroke="var(--border)" />
            <text x="16" y="25" font-size="12" font-weight="800" fill="var(--accent)">MÔ PHỎNG MẶT CẮT BIỂU MÔ &amp; MÀNG ĐÁY (${g.label})</text>
            <!-- Epithelium layers -->
            <rect x="20" y="38" width="290" height="34" fill="${g.depth >= 4 ? 'var(--danger-light)' : 'var(--primary-light)'}" stroke="var(--border)" />
            <rect x="20" y="72" width="290" height="34" fill="${g.depth >= 3 ? 'var(--danger-light)' : (g.depth === 1 ? 'var(--accent-light)' : 'var(--primary-light)')}" stroke="var(--border)" />
            <rect x="20" y="106" width="290" height="34" fill="${g.depth >= 2 ? 'var(--danger-light)' : (g.depth === 1 ? 'var(--accent-light)' : 'var(--primary-light)')}" stroke="var(--border)" />
            <text x="165" y="59" text-anchor="middle" font-size="11" font-weight="700" fill="var(--text-main)">1/3 Trên biểu mô ${g.depth >= 4 ? '(Nhân loạn sản 100%!)' : '(Biệt hóa bề mặt)'}</text>
            <text x="165" y="93" text-anchor="middle" font-size="11" font-weight="700" fill="var(--text-main)">1/3 Giữa ${g.depth >= 3 ? '(Loạn sản lan 2/3)' : (g.depth === 1 ? '(Chuyển sản trưởng thành)' : '(Trật tự ổn)')}</text>
            <text x="165" y="127" text-anchor="middle" font-size="11" font-weight="700" fill="var(--text-main)">1/3 Dưới / Đáy ${g.depth >= 2 ? '(Mất cực tính, phân bào lạc chỗ)' : '(Lớp đáy sinh sản)'}</text>
            <!-- Basement membrane -->
            ${g.bm
              ? `<line x1="16" y1="143" x2="314" y2="143" stroke="var(--success)" stroke-width="4.5" /><text x="165" y="162" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--success)">MÀNG ĐÁY NGUYÊN VẸN (Chưa xâm lấn)</text>`
              : `<line x1="16" y1="143" x2="120" y2="143" stroke="var(--danger)" stroke-width="4.5" /><line x1="215" y1="143" x2="314" y2="143" stroke="var(--danger)" stroke-width="4.5" /><path d="M 135 135 L 155 178 L 195 176 L 185 135 Z" fill="var(--danger)" /><text x="165" y="194" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--danger)">ĐỨT VỠ MÀNG ĐÁY → Xâm lấn Mô đệm!</text>`
            }

            <rect x="332" y="38" width="290" height="145" rx="10" fill="var(--bg-card)" stroke="var(--border)" />
            <text x="346" y="60" font-size="12.5" font-weight="800" fill="var(--primary)">Phân tích Tình huống Đang chọn:</text>
            <text x="346" y="80" font-size="11.5" font-weight="700" fill="var(--text-main)">${sc.name}</text>
            <text x="346" y="100" font-size="11.5" font-weight="800" fill="var(--accent)">→ ${sc.type}</text>
            <text x="346" y="122" font-size="11" fill="var(--text-muted)">Hồi phục: ${sc.reversible}</text>
            <text x="346" y="142" font-size="11" font-weight="700" fill="${g.bm ? 'var(--warning)' : 'var(--danger)'}">Mức độ hiện tại: ${g.status}</text>
            <text x="346" y="164" font-size="10.8" fill="var(--text-muted)">Nhấn Atlas Hình 3.1 – 3.3 để đối chiếu ảnh thật</text>
          </svg>
        </div>

        <div class="callout pearl" style="margin-bottom:0;">
          <div class="callout-title">${g.label} vs Tình huống ${sc.type}</div>
          <p style="margin:0;"><strong>Hình thái biểu mô đang chọn:</strong> ${g.desc}<br/><strong>Tình huống lâm sàng:</strong> ${sc.detail}</p>
        </div>
      </div>
    `;
  }

  /* ------------------------------------------------------------------
     3. SIMULATOR BÀI 3: HOẠI TỬ, NHUỘM ĐẶC BIỆT & VÔI HÓA BỆNH LÝ
     ------------------------------------------------------------------ */
  function buildNecrosisCalcification(st) {
    const samples = {
      coag: {
        name: 'Nhồi máu Cơ tim / Thận (Hoại tử đông)',
        gross: 'Vùng mô nhợt màu, săn chắc, hình chêm (ở thận/lách).',
        micro: 'Khung cấu trúc mô và viền tế bào còn giữ dạng "bóng ma" (ghost cells), bào tương đỏ hồng đậm mất nhân (karyolysis).',
        ca: 'Bình thường',
        calcType: 'Không vôi hóa (trừ mô xơ cũ)',
        bestStain: 'he'
      },
      caseous: {
        name: 'Hạch Lao (Hoại tử bã đậu)',
        gross: 'Chất hoại tử trắng vàng, bở, vụn giống phô mai mềm.',
        micro: 'Chất hoại tử vô định hình màu hồng mịn (mất hoàn toàn cấu trúc tế bào), xung quanh có viền tế bào dạng biểu mô & đại bào Langhans (nhân xếp hình móng ngựa).',
        ca: 'Bình thường',
        calcType: 'Có thể Vôi hóa Loạn dưỡng khi lành sẹo lao cũ',
        bestStain: 'he'
      },
      fat: {
        name: 'Viêm Tụy Cấp (Hoại tử mỡ)',
        gross: 'Các đốm trắng như phấn rải rác trên mạc nối, mô mỡ quanh tụy.',
        micro: 'Bờ tế bào mỡ mờ đục (bóng ma), lắng đọng chất kiềm tính xanh tím do xà phòng hóa calci (saponification) + phản ứng viêm.',
        ca: 'Giảm Ca²⁺ máu do tiêu thụ tại chỗ!',
        calcType: 'Xà phòng hóa Calci-acid béo',
        bestStain: 'he'
      },
      steatosis: {
        name: 'Gan Nhiễm Mỡ (Thoái hóa mỡ - Triglyceride)',
        gross: 'Gan to, vàng bóng, bờ tù, mặt cắt nhờn mỡ.',
        microByStain: {
          he: 'CẠNH BẪY H&E: Tế bào gan chứa KHÔNG BÀO TRÒN TRẮNG SÁNG đẩy lệch nhân ra sát màng bào tương (do cồn/xylol đã hòa tan hết giọt mỡ khi đúc nến)!',
          oilred: 'CẮT LẠNH + OIL RED O / SUDAN IV: Các giọt triglyceride giữ nguyên không bị hòa tan, bắt màu ĐỎ CAM RỰC RỠ!',
          pas: 'PAS chỉ nhuộm Glycogen & chất nhầy (tím hồng), không nhuộm mỡ (hốc mỡ vẫn trắng trên PAS).',
          perls: 'Perls không nhuộm mỡ (dùng tìm sắt Hemosiderin).',
          vonkossa: 'Von Kossa dùng nhuộm Calci (đen), không nhuộm mỡ.'
        },
        ca: 'Bình thường',
        calcType: 'Không vôi hóa',
        bestStain: 'oilred'
      },
      hemosiderin: {
        name: 'Gan / Phổi Ứ Huyết Mạn (Tích tụ Hemosiderin)',
        gross: 'Mô gan/phổi màu nâu rỉ sắt (đại thực bào "tế bào suy tim" ở phổi).',
        microByStain: {
          he: 'H&E thấy các hạt sắc tố màu VÀNG NÂU thô trong bào tương đại thực bào (cần phân biệt với Melanin, Lipofuscin hay Bilirubin).',
          perls: 'NHUỘM PERLS (XANH PHỔ): Phức hợp Fe³⁺ của hemosiderin phản ứng tạo kết tủa XANH DƯƠNG ĐẬM đặc hiệu!',
          oilred: 'Không đặc hiệu cho sắt.',
          pas: 'Không đặc hiệu cho sắt.',
          vonkossa: 'Không đặc hiệu cho sắt.'
        },
        ca: 'Bình thường',
        calcType: 'Không vôi hóa',
        bestStain: 'perls'
      },
      calc_dystrophic: {
        name: 'Mảng Xơ Vữa Động Mạch / Van Tim Già (Vôi hóa Loạn dưỡng)',
        gross: 'Mảng cứng lạo xạo trắng xám trên mô tổn thương/hoại tử.',
        micro: 'Cụm lắng đọng kiềm tính màu TÍM XANH ĐẬM (H&E) ngay trên vùng xơ hoại tử; Calci huyết thanh hoàn toàn BÌNH THƯỜNG.',
        ca: 'Calci máu BÌNH THƯỜNG',
        calcType: 'Vôi hóa LOẠN DƯỠNG (Dystrophic)',
        bestStain: 'vonkossa'
      },
      calc_metastatic: {
        name: 'Cường Cận Giáp / Đa U Tủy (Vôi hóa Di căn)',
        gross: 'Lắng đọng calci rải rác ở vách phế nang phổi, niêm mạc dạ dày, ống thận, mạch máu.',
        micro: 'Dải viền bắt màu kiềm đậm (hoặc ĐEN trên Von Kossa) dọc màng đáy ống thận và vách phế nang BÌNH THƯỜNG do tăng Ca²⁺ máu kéo dài.',
        ca: 'TĂNG Calci máu rõ rệt!',
        calcType: 'Vôi hóa DI CĂN (Metastatic)',
        bestStain: 'vonkossa'
      }
    };

    const stainNames = {
      he: 'H&E thường quy (Parafin)',
      oilred: 'Oil Red O / Sudan IV (Cắt lạnh)',
      pas: 'PAS (Periodic Acid-Schiff)',
      perls: 'Xanh Phổ / Perls (Tìm Sắt Fe³⁺)',
      vonkossa: 'Von Kossa / Alizarin Red (Tìm Calci)'
    };

    const sp = samples[st.sample];
    const microTxt = sp.microByStain ? sp.microByStain[st.stain] : sp.micro;
    const isOptimal = sp.bestStain === st.stain;

    return `
      <div class="sim-box">
        <div class="sim-header">
          <div>
            <h3 style="margin:0;font-size:17px;">🔬 Phòng Nhuộm Mô học: Hoại tử – Sắc tố – Vôi hóa Bệnh lý</h3>
            <div style="font-size:13px;color:var(--text-muted);margin-top:2px;">Chọn bệnh phẩm và thuốc nhuộm đặc biệt để tránh các "câu hỏi bẫy" về H&amp;E vs Cắt lạnh / Perls / PAS</div>
          </div>
          <span class="sim-badge">${isOptimal ? '✅ Thuốc nhuộm chuẩn xác' : stainNames[st.stain]}</span>
        </div>

        <div class="sim-controls">
          <div class="control-group">
            <label>Bệnh phẩm Mô học</label>
            <select onchange="Simulators.setVal('sim_necrosis_calcification','sample',this.value)">
              <option value="steatosis" ${st.sample === 'steatosis' ? 'selected' : ''}>Gan nhiễm mỡ (Thoái hóa mỡ - Triglyceride)</option>
              <option value="hemosiderin" ${st.sample === 'hemosiderin' ? 'selected' : ''}>Tế bào suy tim / Ứ mật (Hemosiderin)</option>
              <option value="coag" ${st.sample === 'coag' ? 'selected' : ''}>Nhồi máu cơ tim / thận (Hoại tử đông)</option>
              <option value="caseous" ${st.sample === 'caseous' ? 'selected' : ''}>Hạch lao (Hoại tử bã đậu)</option>
              <option value="fat" ${st.sample === 'fat' ? 'selected' : ''}>Viêm tụy cấp (Hoại tử mỡ)</option>
              <option value="calc_dystrophic" ${st.sample === 'calc_dystrophic' ? 'selected' : ''}>Mảng xơ vữa / Van tim (Vôi hóa Loạn dưỡng)</option>
              <option value="calc_metastatic" ${st.sample === 'calc_metastatic' ? 'selected' : ''}>Cường cận giáp (Vôi hóa Di căn)</option>
            </select>
          </div>
          <div class="control-group">
            <label>Phương pháp Xử lý &amp; Nhuộm</label>
            <select onchange="Simulators.setVal('sim_necrosis_calcification','stain',this.value)">
              <option value="he" ${st.stain === 'he' ? 'selected' : ''}>H&amp;E thường quy (Đúc nến Parafin)</option>
              <option value="oilred" ${st.stain === 'oilred' ? 'selected' : ''}>Oil Red O / Sudan IV (CẮT LẠNH)</option>
              <option value="perls" ${st.stain === 'perls' ? 'selected' : ''}>Xanh Phổ / Perls (Tìm Hemosiderin Fe³⁺)</option>
              <option value="pas" ${st.stain === 'pas' ? 'selected' : ''}>PAS (Tìm Glycogen, Nấm, Chất nhầy)</option>
              <option value="vonkossa" ${st.stain === 'vonkossa' ? 'selected' : ''}>Von Kossa (Nhuộm Calci đen)</option>
            </select>
          </div>
        </div>

        <div class="metric-cards">
          <div class="metric-card">
            <div class="metric-label">Đại thể Bệnh phẩm</div>
            <div class="metric-val" style="font-size:14.5px;">${sp.gross}</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Nồng độ Calci máu</div>
            <div class="metric-val" style="color:${sp.ca.includes('TĂNG') ? 'var(--danger)' : 'var(--success)'};">${sp.ca}</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Thuốc nhuộm tối ưu gợi ý</div>
            <div class="metric-val" style="color:var(--primary);">${stainNames[sp.bestStain]}</div>
          </div>
        </div>

        <div class="callout ${isOptimal ? 'success' : 'warning'}" style="margin-bottom:0;">
          <div class="callout-title">Kết quả Soi Kính hiển vi (${stainNames[st.stain]})</div>
          <p style="margin:0;">${microTxt}</p>
        </div>
      </div>
    `;
  }

  /* ------------------------------------------------------------------
     4. SIMULATOR BÀI 4: DANH PHÁP BƯỚU, NGOẠI LỆ & PHÂN TÍCH TNM
     ------------------------------------------------------------------ */
  function buildTumorNomenclature(st) {
    const map = {
      squamous: { label: 'Biểu mô lát tầng (Da, Cổ TC, Phổi)', benign: 'U nhú tế bào gai (Squamous papilloma)', malig: 'Carcinôm tế bào gai (Squamous cell carcinoma)', route: 'Đường BẠCH HUYẾT (Hạch vùng)', trap: '' },
      gland: { label: 'Biểu mô tuyến (Đại tràng, Vú, Giáp)', benign: 'U tuyến (Adenoma) / U tuyến dạng nang (Cystadenoma)', malig: 'Carcinôm tuyến (Adenocarcinoma)', route: 'Đường BẠCH HUYẾT (cộng hưởng Tĩnh mạch cửa → Gan ở ĐTT)', trap: '' },
      fat: { label: 'Mô mỡ', benign: 'U mỡ (Lipoma)', malig: 'Sarcôm mỡ (Liposarcoma)', route: 'Đường MÁU (tĩnh mạch → Phổi)', trap: '' },
      smooth: { label: 'Cơ trơn (Tử cung, Ống tiêu hóa)', benign: 'U cơ trơn (Leiomyoma)', malig: 'Sarcôm cơ trơn (Leiomyosarcoma)', route: 'Đường MÁU (tĩnh mạch → Phổi, Gan)', trap: '' },
      bone: { label: 'Xương (Tạo cốt bào)', benign: 'U xương (Osteoma)', malig: 'Sarcôm xương (Osteosarcoma)', route: 'Đường MÁU (→ Phổi rất sớm)', trap: '' },
      melanocyte: { label: 'Tế bào hắc tố (Melanocyte)', benign: 'Nơ-vi sắc tố (Nevus / Nốt ruồi)', malig: 'U HẮC TỐ ÁC TÍNH (Melanoma) — BẪY ĐUÔI -OMA!', route: 'Cả Đường Bạch huyết VÀ Đường Máu rất sớm', trap: 'Chú ý: Melanoma mang đuôi -oma nhưng là UNG THƯ CỰC KỲ ÁC TÍNH!' },
      lymph: { label: 'Mô Lympho', benign: 'KHÔNG CÓ bướu lympho lành (chỉ có quá sản hạch phản ứng)', malig: 'U LYMPHO ÁC TÍNH (Lymphoma) — BẪY ĐUÔI -OMA!', route: 'Hệ bạch huyết & Tủy xương / Ngoại hạch', trap: 'Chú ý: Lymphoma mang đuôi -oma nhưng 100% là ÁC TÍNH!' },
      germ: { label: 'Tế bào mầm 3 lá phôi (Buồng trứng / Tinh hoàn)', benign: 'U quái trưởng thành (Mature Teratoma - thường lành ở buồng trứng)', malig: 'U quái chưa trưởng thành (Immature Teratoma) / Seminoma (-oma nhưng ÁC TÍNH!)', route: 'Gieo rắc khoang phúc mạc / Hạch cạnh ĐMC chủ', trap: 'Seminoma tinh hoàn mang đuôi -oma nhưng luôn ÁC TÍNH!' }
    };

    const item = map[st.origin];
    const isMalig = st.behavior === 'malig';
    const diagnosis = isMalig ? item.malig : item.benign;
    const tnmNote = !isMalig
      ? 'Bướu LÀNH TÍNH không áp dụng hệ thống phân giai đoạn TNM.'
      : (st.m === 'M1'
        ? '⚠️ ĐÃ CÓ DI CĂN XA (M1) → Thường xếp Giai đoạn IV (Stage IV), tiên lượng dè dặt nhất dù độ biệt hóa (Grade) thấp hay cao!'
        : (st.n !== 'N0'
          ? 'Có di căn hạch vùng (N+) nhưng chưa di căn xa (M0) → Thường Giai đoạn II–III tùy vị trí nguyên phát.'
          : 'Chưa di căn hạch (N0) và chưa di căn xa (M0) → Khối u còn khu trú tại chỗ (Giai đoạn I–II).'));

    return `
      <div class="sim-box">
        <div class="sim-header">
          <div>
            <h3 style="margin:0;font-size:17px;">🏷️ Công cụ Gọi tên Bướu Quốc tế &amp; Phân tích TNM vs Grading</h3>
            <div style="font-size:13px;color:var(--text-muted);margin-top:2px;">Thử nghiệm quy tắc đặt tên (-oma / Carcinoma / Sarcoma), phát hiện "ngoại lệ bẫy" và đọc tiên lượng TNM</div>
          </div>
          <span class="sim-badge">${isMalig ? 'ÁC TÍNH' : 'LÀNH TÍNH'}</span>
        </div>

        <div class="sim-controls">
          <div class="control-group">
            <label>Nguồn gốc Mô học (Chủ mô bướu)</label>
            <select onchange="Simulators.setVal('sim_tumor_nomenclature','origin',this.value)">
              ${Object.keys(map).map((k) => `<option value="${k}" ${st.origin === k ? 'selected' : ''}>${map[k].label}</option>`).join('')}
            </select>
          </div>
          <div class="control-group">
            <label>Tính chất Hành vi Sinh học</label>
            <select onchange="Simulators.setVal('sim_tumor_nomenclature','behavior',this.value)">
              <option value="benign" ${!isMalig ? 'selected' : ''}>Lành tính (Biệt hóa rõ, có vỏ bao, KHÔNG di căn)</option>
              <option value="malig" ${isMalig ? 'selected' : ''}>Ác tính (Xâm lấn, có thể di căn)</option>
            </select>
          </div>
          <div class="control-group">
            <label>Giả lập TNM Lâm sàng (Nếu Ác tính)</label>
            <div style="display:flex;gap:6px;">
              <select aria-label="T" onchange="Simulators.setVal('sim_tumor_nomenclature','t',this.value)">
                <option value="T1" ${st.t === 'T1' ? 'selected' : ''}>T1 (Nhỏ)</option>
                <option value="T2" ${st.t === 'T2' ? 'selected' : ''}>T2 (Trung bình)</option>
                <option value="T3" ${st.t === 'T3' ? 'selected' : ''}>T3 (Lớn/Xâm)</option>
                <option value="T4" ${st.t === 'T4' ? 'selected' : ''}>T4 (Lan rộng)</option>
              </select>
              <select aria-label="N" onchange="Simulators.setVal('sim_tumor_nomenclature','n',this.value)">
                <option value="N0" ${st.n === 'N0' ? 'selected' : ''}>N0 (Không hạch)</option>
                <option value="N1" ${st.n === 'N1' ? 'selected' : ''}>N1 (Hạch gần)</option>
                <option value="N2" ${st.n === 'N2' ? 'selected' : ''}>N2 (Nhiều hạch)</option>
              </select>
              <select aria-label="M" onchange="Simulators.setVal('sim_tumor_nomenclature','m',this.value)">
                <option value="M0" ${st.m === 'M0' ? 'selected' : ''}>M0 (Chưa xa)</option>
                <option value="M1" ${st.m === 'M1' ? 'selected' : ''}>M1 (Di căn xa!)</option>
              </select>
            </div>
          </div>
        </div>

        <div class="metric-cards">
          <div class="metric-card">
            <div class="metric-label">Danh pháp Chuẩn</div>
            <div class="metric-val" style="color:${isMalig ? 'var(--danger)' : 'var(--success)'};">${diagnosis}</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Con đường Di căn Ưa thích</div>
            <div class="metric-val">${isMalig ? item.route : 'Không bao giờ di căn'}</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Giai đoạn ${isMalig ? `(${st.t} ${st.n} ${st.m})` : '(Không dùng TNM)'}</div>
            <div class="metric-val" style="font-size:14px;">${tnmNote}</div>
          </div>
        </div>

        ${item.trap ? `<div class="callout trap" style="margin-bottom:0;"><div class="callout-title">Cảnh báo Ngoại lệ Kinh điển</div><p style="margin:0;">${item.trap}</p></div>` : `<div class="callout pearl" style="margin-bottom:0;"><div class="callout-title">Nhắc nhanh Thi Cao học</div><p style="margin:0;"><strong>Staging (TNM)</strong> đánh giá mức độ lan rộng giải phẫu luôn có <strong>giá trị tiên lượng lâm sàng mạnh hơn Grading</strong> (độ biệt hóa mô học G1–G4).</p></div>`}
      </div>
    `;
  }

  /* ------------------------------------------------------------------
     5. SIMULATOR BÀI 5: SINH UNG 2 GIAI ĐOẠN (HÌNH 8.13) & VI SINH VẬT
     ------------------------------------------------------------------ */
  function buildCarcinogensViruses(st) {
    const protocols = {
      init_only: { title: 'Chỉ bôi Chất Khởi phát (DMBA liều thấp 1 lần)', result: 'KHÔNG TẠO BƯỚU', desc: 'DNA đã có đột biến tiềm ẩn (bất hồi phục) nhưng chưa có tín hiệu kích thích phân chia tạo dòng nên không hình thành khối u.', tumor: false },
      prom_only: { title: 'Chỉ bôi Chất Thúc đẩy (TPA / Hormon)', result: 'KHÔNG TẠO BƯỚU', desc: 'Chất thúc đẩy KHÔNG tự gây đột biến DNA, chỉ gây tăng sản tạm thời rồi hồi phục khi ngưng.', tumor: false },
      init_prom: { title: 'Bôi Khởi phát TRƯỚC → Thúc đẩy LIÊN TỤC', result: 'TẠO BƯỚU ÁC TÍNH!', desc: 'Chuẩn mô hình 2 giai đoạn (Hình 8.13): Đột biến khởi phát được chất thúc đẩy nhân bản tạo dòng nhanh chóng, tích lũy thêm đột biến → hình thành ung thư!', tumor: true },
      prom_init: { title: 'Đảo ngược thứ tự: Thúc đẩy TRƯỚC → Khởi phát SAU', result: 'KHÔNG TẠO BƯỚU', desc: 'Khi bôi chất thúc đẩy trước, chưa hề có đột biến khởi phát nào để khuếch đại dòng tế bào!', tumor: false },
      init_delay_prom: { title: 'Khởi phát → Chờ nhiều tháng → Mới bôi Thúc đẩy', result: 'VẪN TẠO BƯỚU!', desc: 'Chứng minh tổn thương Khởi phát là BẤT HỒI PHỤC (tế bào mang đột biến ghi nhớ suốt đời chờ chất thúc đẩy đến kích hoạt)!', tumor: true }
    };

    const agents = {
      aflatoxin: { label: 'Aflatoxin B₁ (Nấm Aspergillus trên ngũ cốc mốc)', type: 'Tiền chất Hóa học (cần CYP450)', mech: 'Chuyển hóa tại gan thành epoxide gắn guanin → đột biến điểm đặc hiệu tại CODON 249 gen TP53 (cộng hưởng mạnh với HBV → HCC).' },
      benzo: { label: 'Benzo[a]pyrene (Khói thuốc lá, Thịt nướng cháy)', type: 'Hydrocarbon thơm đa vòng (Gián tiếp)', mech: 'CYP450 hoạt hóa thành diol-epoxide gắn DNA → đột biến KRAS, TP53 → Ung thư phổi, hầu họng.' },
      uv: { label: 'Tia Cực tím UVB (280–320 nm)', type: 'Tác nhân Vật lý', mech: 'Tạo liên kết Dimer Pyrimidine (T-T) trên DNA. Thiếu bẩm sinh enzyme sửa chữa cắt bỏ nucleotide (NER) gây bệnh Khô da sắc tố (Xeroderma pigmentosum) → ung thư da.' },
      hpv: { label: 'Virus HPV Nguy cơ cao (Typ 16, 18)', type: 'DNA Virus Sinh ung', mech: 'Protein E6 gắn và thúc đẩy phân hủy p53; Protein E7 gắn và bất hoạt pRb → tháo phanh chu kỳ tế bào → Ung thư cổ tử cung, hầu họng.' },
      ebv: { label: 'Virus Epstein-Barr (EBV / HHV-4)', type: 'DNA Virus Sinh ung', mech: 'Lây nhiễm tế bào B & biểu mô vòm hầu: thúc đẩy chuyển đoạn t(8;14) hoạt hóa MYC trong U lympho Burkitt Châu Phi, K vòm hầu (NPC), U lympho Hodgkin.' },
      hpylori: { label: 'Vi khuẩn Helicobacter pylori', type: 'Vi khuẩn Sinh ung (Loại I IARC)', mech: 'Gây viêm dạ dày mạn teo → chuyển sản ruột → loạn sản → Carcinôm tuyến dạ dày VÀ MALT Lymphoma (u lympho MALT có thể thoái lui khi tiệt trừ H. pylori bằng kháng sinh!).' }
    };

    const p = protocols[st.protocol];
    const ag = agents[st.agent];

    return `
      <div class="sim-box">
        <div class="sim-header">
          <div>
            <h3 style="margin:0;font-size:17px;">⚗️ Thí nghiệm Sinh ung 2 Giai đoạn (Hình 8.13) &amp; Cơ chế Tác nhân</h3>
            <div style="font-size:13px;color:var(--text-muted);margin-top:2px;">Kiểm chứng thứ tự Khởi phát – Thúc đẩy và đối chiếu cơ chế đột biến của từng tác nhân</div>
          </div>
          <span class="sim-badge">${p.result}</span>
        </div>

        <div class="sim-controls">
          <div class="control-group">
            <label>Phác đồ Thử nghiệm trên Da Chuột (Hình 8.13)</label>
            <select onchange="Simulators.setVal('sim_carcinogens_viruses','protocol',this.value)">
              <option value="init_prom" ${st.protocol === 'init_prom' ? 'selected' : ''}>1. Khởi phát → Thúc đẩy liên tục</option>
              <option value="init_delay_prom" ${st.protocol === 'init_delay_prom' ? 'selected' : ''}>2. Khởi phát → Nghỉ lâu → Thúc đẩy</option>
              <option value="prom_init" ${st.protocol === 'prom_init' ? 'selected' : ''}>3. Đảo ngược: Thúc đẩy TRƯỚC → Khởi phát SAU</option>
              <option value="init_only" ${st.protocol === 'init_only' ? 'selected' : ''}>4. Chỉ bôi Khởi phát liều dưới ngưỡng</option>
              <option value="prom_only" ${st.protocol === 'prom_only' ? 'selected' : ''}>5. Chỉ bôi Chất Thúc đẩy (TPA)</option>
            </select>
          </div>
          <div class="control-group">
            <label>Hồ sơ Tác nhân Sinh ung Trọng điểm</label>
            <select onchange="Simulators.setVal('sim_carcinogens_viruses','agent',this.value)">
              ${Object.keys(agents).map((k) => `<option value="${k}" ${st.agent === k ? 'selected' : ''}>${agents[k].label}</option>`).join('')}
            </select>
          </div>
        </div>

        <div class="callout ${p.tumor ? 'trap' : 'success'}">
          <div class="callout-title">Kết quả Thực nghiệm 2 Giai đoạn: ${p.result}</div>
          <p style="margin:0;">${p.desc}</p>
        </div>

        <div class="callout pearl" style="margin-bottom:0;">
          <div class="callout-title">Cơ chế Phân tử của Tác nhân: ${ag.label} (${ag.type})</div>
          <p style="margin:0;">${ag.mech}</p>
        </div>
      </div>
    `;
  }

  /* ------------------------------------------------------------------
     6. SIMULATOR BÀI 6: 10 HALLMARKS & BẢNG TRA CỨU CẬN UNG THƯ
     ------------------------------------------------------------------ */
  function buildHallmarksParaneo(st) {
    const hallmarks = [
      { name: '1. Tự cung cấp tín hiệu tăng trưởng', mech: 'Hoạt hóa Oncogene (RAS, EGFR, MYC) bật tín hiệu phân chia không cần yếu tố tăng trưởng ngoài.', drug: 'Thuốc ức chế EGFR/HER2 (Gefitinib, Trastuzumab)' },
      { name: '2. Kháng tín hiệu ức chế tăng trưởng', mech: 'Mất chức năng gen đè nén bướu (RB1 gác G1/S, TP53, APC, con đường TGF-β).', drug: 'Thuốc ức chế CDK4/6 (Palbociclib)' },
      { name: '3. Né tránh chết theo chương trình (Apoptosis)', mech: 'Tăng BCL-2 (u lympho thể nang t(14;18)), mất TP53, giảm Fas hoặc tăng IAP.', drug: 'Venetoclax (ức chế BCL-2)' },
      { name: '4. Tiềm năng nhân đôi vô hạn', mech: 'Hoạt hóa enzyme Telomerase (hTERT) nối dài lại telomere mỗi lần nguyên phân → bất tử hóa.', drug: 'Thuốc ức chế Telomerase đang thử nghiệm' },
      { name: '5. Duy trì tân sinh mạch máu (Angiogenesis)', mech: 'HIF-1α trong mô thiếu oxy kích thích tiết VEGF hình thành lưới mạch nuôi khối u (> 1–2 mm).', drug: 'Bevacizumab (kháng VEGF)' },
      { name: '6. Xâm lấn mô và Di căn', mech: 'Giảm E-cadherin, tăng biểu hiện integrin & tiết enzyme MMP phá hủy màng đáy vào mạch.', drug: 'Mục tiêu đang nghiên cứu kháng MMP / EMT' },
      { name: '7. Tái lập trình chuyển hóa (Hiệu ứng Warburg)', mech: 'Đường phân hiếu khí: tiêu thụ lượng lớn Glucose chuyển thành Lactate dù đủ Oxy để lấy khung carbon tổng hợp đại phân tử.', drug: 'Ứng dụng chẩn đoán: Chụp FDG-PET/CT phát hiện ổ ung thư hút glucose' },
      { name: '8. Tránh né hệ miễn dịch', mech: 'Bộc lộ PD-L1 khóa thụ thể PD-1 của tế bào T CD8⁺, hoạt hóa CTLA-4, hoặc giảm MHC lớp I.', drug: 'Ức chế chốt miễn dịch: Pembrolizumab/Nivolumab (kháng PD-1), Ipilimumab (kháng CTLA-4)' },
      { name: '9. Bất ổn định bộ gen & Đột biến (Tạo ĐK)', mech: 'Khiếm khuyết gen sửa chữa DNA (BRCA1/2 sửa đứt đôi; MSH2/MLH1 sửa bắt cặp sai MSI).', drug: 'Olaparib (ức chế PARP cho bệnh nhân đột biến BRCA)' },
      { name: '10. Viêm thúc đẩy khối u (Tạo ĐK)', mech: 'Tế bào viêm xâm nhập tiết ROS, yếu tố tăng trưởng, MMP hỗ trợ bướu sống sót & xâm lấn.', drug: 'Kiểm soát viêm mạn (NSAIDs phòng K đại tràng)' }
    ];

    const paraneos = {
      pthrp: { title: 'Tăng Calci máu ác tính (HAY GẶP NHẤT trong cận u)', factor: 'Protein giống PTH (PTHrP) & hoạt hóa hủy cốt bào (lưu ý PTH thật GIẢM)', tumors: 'Carcinôm tế bào gai PHỔI, Carcinôm tế bào thận (RCC), Ung thư vú, Đa u tủy' },
      cushing: { title: 'Hội chứng Cushing cận ung thư', factor: 'Hormon ACTH hoặc chất giống ACTH ngoại vị', tumors: 'Carcinôm phổi tế bào nhỏ (SCLC — chiếm đa số), Bướu tụy, U tuyến ức' },
      siadh: { title: 'Hội chứng Tiết ADH không thích hợp (Hạ Na⁺ máu)', factor: 'Hormon chống bài niệu ADH (Vasopressin)', tumors: 'Carcinôm phổi tế bào nhỏ (SCLC), Bướu nội sọ' },
      epo: { title: 'Đa hồng cầu thứ phát', factor: 'Erythropoietin (EPO)', tumors: 'Carcinôm tế bào thận (RCC), Carcinôm tế bào gan (HCC), U nguyên bào mạch tiểu não' },
      mg: { title: 'Hội chứng Nhược cơ Lambert-Eaton', factor: 'Tự kháng thể kháng kênh Calci phụ thuộc điện thế tiền synap', tumors: 'Carcinôm phổi tế bào nhỏ (SCLC)' }
    };

    const h = hallmarks[Number(st.hallmarkIdx)];
    const pn = paraneos[st.paraneo];

    return `
      <div class="sim-box">
        <div class="sim-header">
          <div>
            <h3 style="margin:0;font-size:17px;">🎯 Bảng Điều khiển 10 Hallmarks &amp; Giải mã Hội chứng Cận ung thư</h3>
            <div style="font-size:13px;color:var(--text-muted);margin-top:2px;">Bấm vào từng Đặc điểm (Hình 8.16–8.17) và tra cứu nhanh các cặp bệnh cảnh Cận ung thư hay thi</div>
          </div>
          <span class="sim-badge">Hanahan &amp; Weinberg</span>
        </div>

        <div class="pill-btn-group">
          ${hallmarks.map((item, idx) => `
            <button type="button" class="pill-btn ${idx === Number(st.hallmarkIdx) ? 'active' : ''}" onclick="Simulators.setVal('sim_hallmarks_paraneo','hallmarkIdx',${idx})">${idx + 1}. ${item.name.replace(/^\d+\.\s*/, '')}</button>
          `).join('')}
        </div>

        <div class="callout pearl">
          <div class="callout-title">${h.name}</div>
          <p style="margin:0;"><strong>Cơ chế:</strong> ${h.mech}<br/><strong>Ứng dụng Lâm sàng / Thuốc đích:</strong> ${h.drug}</p>
        </div>

        <div class="sim-controls" style="margin-top:12px;">
          <div class="control-group">
            <label>Tra cứu Hội chứng Cận ung thư (Paraneoplastic Syndrome)</label>
            <select onchange="Simulators.setVal('sim_hallmarks_paraneo','paraneo',this.value)">
              <option value="pthrp" ${st.paraneo === 'pthrp' ? 'selected' : ''}>Tăng Calci máu cận u (Hay gặp nhất)</option>
              <option value="cushing" ${st.paraneo === 'cushing' ? 'selected' : ''}>Hội chứng Cushing (Béo trung tâm, ↑ Đường huyết)</option>
              <option value="siadh" ${st.paraneo === 'siadh' ? 'selected' : ''}>Hạ Natri máu / SIADH</option>
              <option value="epo" ${st.paraneo === 'epo' ? 'selected' : ''}>Đa hồng cầu thứ phát</option>
              <option value="mg" ${st.paraneo === 'mg' ? 'selected' : ''}>Nhược cơ Lambert-Eaton</option>
            </select>
          </div>
        </div>

        <div class="metric-cards" style="margin-bottom:0;">
          <div class="metric-card">
            <div class="metric-label">Chất trung gian / Cơ chế</div>
            <div class="metric-val" style="color:var(--primary);font-size:14.5px;">${pn.factor}</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Ung thư Nguyên phát Điển hình</div>
            <div class="metric-val" style="color:var(--accent);font-size:14.5px;">${pn.tumors}</div>
          </div>
        </div>
      </div>
    `;
  }

  /* ------------------------------------------------------------------
     7. SIMULATOR BÀI 7: MÔ PHỎNG TÍN HIỆU RTK, ĐỘT BIẾN KRAS & GEN TỔ HỢP
     ------------------------------------------------------------------ */
  function buildRtkFusion(st) {
    let outcome = '';
    let tone = 'success';
    let rtkActive = false;
    let mapkActive = false;
    let explain = '';

    const { rtk, downstream, drug } = st;

    if (rtk === 'bcr_abl') {
      rtkActive = drug !== 'imatinib';
      mapkActive = rtkActive;
      if (drug === 'imatinib') {
        outcome = 'ĐÁP ỨNG NGOẠN MỤC (Lui bệnh sâu CML)';
        tone = 'success';
        explain = 'Imatinib ức chế cạnh tranh vị trí gắn ATP trên miền Tyrosine Kinase của protein dung hợp BCR::ABL1 (NST Philadelphia t(9;22)) → tắt tín hiệu tăng sinh dòng tủy!';
      } else {
        outcome = 'KHÔNG ĐÁP ỨNG (Chọn nhầm thuốc đích)';
        tone = 'trap';
        explain = 'CML mang gen tổ hợp nội bào BCR::ABL1 không có miền thụ thể EGFR/HER2 ngoại bào → dùng Cetuximab, Gefitinib hay Trastuzumab đều vô hiệu. Cần Imatinib (hoặc Dasatinib/Nilotinib)!';
      }
    } else if (rtk === 'her2_amp') {
      rtkActive = drug !== 'trastuzumab';
      mapkActive = rtkActive || downstream !== 'wt';
      if (drug === 'trastuzumab' && downstream === 'wt') {
        outcome = 'ĐÁP ỨNG TỐT (Ung thư vú / dạ dày HER2+)';
        tone = 'success';
        explain = 'Khuếch đại ERBB2 tạo mật độ cực dày thụ thể HER2 trên màng tế bào. Trastuzumab gắn miền ngoại bào HER2 ngăn nhị phân hóa & gọi miễn dịch ADCC.';
      } else if (drug === 'trastuzumab' && downstream !== 'wt') {
        outcome = 'GIẢM ĐÁP ỨNG / KHÁNG THUỐC HẠ NGUỒN';
        tone = 'warning';
        explain = 'Dù Trastuzumab khóa HER2 trên màng, đột biến KRAS/BRAF bên dưới vẫn tự truyền tín hiệu xuống nhân.';
      } else {
        outcome = 'CHƯA ĐÚNG THUỐC ĐÍCH HER2';
        tone = 'warning';
        explain = 'Với khuếch đại HER2, thuốc đặc hiệu chuẩn mực là kháng thể đơn dòng Trastuzumab (hoặc Pertuzumab / T-DXd).';
      }
    } else if (rtk === 'egfr_t790m') {
      if (drug === 'osimertinib' && downstream === 'wt') {
        outcome = 'ĐÁP ỨNG TỐT VỚI TKI THẾ HỆ 3 (Osimertinib)!';
        tone = 'success';
        rtkActive = false;
        mapkActive = false;
        explain = 'Đột biến thứ phát EGFR T790M (ở exon 20) cản trở không gian không cho Gefitinib/Erlotinib gắn vào túi ATP, nhưng Osimertinib (thế hệ 3) vượt qua được T790M và khóa thành công kinase!';
      } else {
        outcome = 'KHÁNG THUỐC (Vượt qua T790M cần Osimertinib)';
        tone = 'trap';
        rtkActive = true;
        mapkActive = true;
        explain = drug === 'gefitinib'
          ? 'ĐÂY LÀ BẪY KHÁNG THUỐC T790M: Bệnh nhân NSCLC ban đầu nhạy Gefitinib nhưng sau 9–14 tháng tái phát do xuất hiện đột biến EGFR T790M → Phải đổi sang Osimertinib!'
          : 'EGFR mang đột biến thứ phát T790M + chọn sai thuốc hoặc đột biến hạ nguồn → Đường truyền tín hiệu vẫn bật!';
      }
    } else {
      // egfr_wt (K đại trực tràng) hoặc egfr_sens (Del19/L858R NSCLC)
      const isUpstreamBlocked =
        (rtk === 'egfr_wt' && drug === 'cetuximab') ||
        (rtk === 'egfr_sens' && (drug === 'gefitinib' || drug === 'osimertinib'));

      rtkActive = !isUpstreamBlocked;
      if (downstream !== 'wt') {
        mapkActive = true;
        outcome = 'KHÁNG THUỐC HOÀN TOÀN DO ĐỘT BIẾN HẠ NGUỒN!';
        tone = 'trap';
        explain = `Dù ${isUpstreamBlocked ? 'thuốc đã phong bế tốt EGFR phía trên' : 'thuốc chưa khóa được EGFR'}, nhưng vì có đột biến ${downstream === 'kras_mut' ? 'KRAS (tự khóa ở dạng gắn GTP)' : 'BRAF V600E'} nằm BÊN DƯỚI EGFR, dòng thác RAF → MEK → ERK vẫn chạy hết công suất! Đây là lý do bắt buộc xét nghiệm KRAS/NRAS Wild-type trước khi dùng Cetuximab/Panitumumab.`;
      } else if (isUpstreamBlocked) {
        mapkActive = false;
        outcome = 'ĐÁP ỨNG TỐT — CHẶN ĐỨNG TÍN HIỆU TĂNG SINH!';
        tone = 'success';
        explain = rtk === 'egfr_wt'
          ? 'KRAS kiểu dại (Wild-type) + Cetuximab gắn chặn miền ngoại bào EGFR → Tắt hoàn toàn chuỗi RAS-RAF-MEK-ERK trong Ung thư đại trực tràng!'
          : 'EGFR có đột biến nhạy (Exon 19 del / L858R) + KRAS WT → TKI (Gefitinib / Osimertinib) ức chế túi ATP của miền kinase → tế bào bướu ngừng phân chia & chết theo chương trình.';
      } else {
        mapkActive = true;
        outcome = 'CHƯA KHÓA ĐÚNG ĐÍCH PHÂN TỬ';
        tone = 'warning';
        explain = rtk === 'egfr_sens'
          ? 'NSCLC có đột biến vùng kinase nội bào (Del19/L858R) nên cần thuốc TKI phân tử nhỏ (Gefitinib/Erlotinib/Osimertinib) chui vào bào tương.'
          : 'Hãy chọn Cetuximab (chặn miền ngoại bào EGFR ở ĐTT KRAS WT) để khóa dòng tín hiệu.';
      }
    }

    return `
      <div class="sim-box">
        <div class="sim-header">
          <div>
            <h3 style="margin:0;font-size:17px;">🧬 Phòng Lab Ung bướu Chính xác: Thụ thể RTK – Đột biến KRAS &amp; Thuốc đích</h3>
            <div style="font-size:13px;color:var(--text-muted);margin-top:2px;">Thử kết hợp trạng thái thụ thể RTK, đột biến hạ nguồn KRAS/BRAF và thuốc đích để xem hiện tượng kháng thuốc</div>
          </div>
          <span class="sim-badge" style="${tone === 'trap' ? 'background:var(--danger);' : ''}">${mapkActive ? 'Tín hiệu BẬT (Bướu mọc)' : 'Tín hiệu TẮT (Đáp ứng)'}</span>
        </div>

        <div class="sim-controls">
          <div class="control-group">
            <label>1. Bất thường Thượng nguồn (RTK / Fusion)</label>
            <select onchange="Simulators.setVal('sim_rtk_fusion_pathway','rtk',this.value)">
              <option value="egfr_wt" ${rtk === 'egfr_wt' ? 'selected' : ''}>K Đại trực tràng: EGFR WT biểu hiện cao</option>
              <option value="egfr_sens" ${rtk === 'egfr_sens' ? 'selected' : ''}>K Phổi NSCLC: EGFR Del19 / L858R nhạy TKI</option>
              <option value="egfr_t790m" ${rtk === 'egfr_t790m' ? 'selected' : ''}>K Phổi kháng TKI: Đột biến thứ phát EGFR T790M</option>
              <option value="her2_amp" ${rtk === 'her2_amp' ? 'selected' : ''}>K Vú / Dạ dày: Khuếch đại HER2 (ERBB2)</option>
              <option value="bcr_abl" ${rtk === 'bcr_abl' ? 'selected' : ''}>CML: Gen tổ hợp BCR::ABL1 [t(9;22)]</option>
            </select>
          </div>
          <div class="control-group">
            <label>2. Trạng thái Gen Hạ nguồn (RAS / BRAF)</label>
            <select onchange="Simulators.setVal('sim_rtk_fusion_pathway','downstream',this.value)">
              <option value="wt" ${downstream === 'wt' ? 'selected' : ''}>KRAS &amp; BRAF Kiểu dại (Wild-type)</option>
              <option value="kras_mut" ${downstream === 'kras_mut' ? 'selected' : ''}>Đột biến KRAS (G12D/G12V - tự khóa GTP)</option>
              <option value="braf_mut" ${downstream === 'braf_mut' ? 'selected' : ''}>Đột biến BRAF V600E</option>
            </select>
          </div>
          <div class="control-group">
            <label>3. Liệu pháp Đích được Kê đơn</label>
            <select onchange="Simulators.setVal('sim_rtk_fusion_pathway','drug',this.value)">
              <option value="cetuximab" ${drug === 'cetuximab' ? 'selected' : ''}>Cetuximab (Kháng thể chặn ngoại bào EGFR)</option>
              <option value="gefitinib" ${drug === 'gefitinib' ? 'selected' : ''}>Gefitinib / Erlotinib (EGFR TKI thế hệ 1)</option>
              <option value="osimertinib" ${drug === 'osimertinib' ? 'selected' : ''}>Osimertinib (EGFR TKI thế hệ 3 - trị T790M)</option>
              <option value="trastuzumab" ${drug === 'trastuzumab' ? 'selected' : ''}>Trastuzumab (Kháng thể kháng HER2)</option>
              <option value="imatinib" ${drug === 'imatinib' ? 'selected' : ''}>Imatinib (Ức chế ABL / KIT)</option>
            </select>
          </div>
        </div>

        <div class="svg-stage">
          <svg viewBox="0 0 640 140" style="width:100%;max-width:640px;height:auto;" role="img" aria-label="Chuỗi truyền tin RTK RAS MAPK">
            <rect x="4" y="4" width="632" height="132" rx="12" fill="var(--bg-main)" stroke="var(--border)" />
            <rect x="20" y="34" width="136" height="68" rx="10" fill="${rtkActive ? 'var(--danger-light)' : 'var(--success-light)'}" stroke="${rtkActive ? 'var(--danger)' : 'var(--success)'}" stroke-width="2" />
            <text x="88" y="60" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--text-main)">RTK / FUSION</text>
            <text x="88" y="80" text-anchor="middle" font-size="11" font-weight="700" fill="${rtkActive ? 'var(--danger)' : 'var(--success)'}">${rtkActive ? 'Đang hoạt hóa' : 'Đã bị KHÓA ✓'}</text>

            <line x1="158" y1="68" x2="196" y2="68" stroke="${rtkActive ? 'var(--danger)' : 'var(--border)'}" stroke-width="2.5" />

            <rect x="198" y="34" width="136" height="68" rx="10" fill="${downstream === 'kras_mut' || (rtkActive && downstream === 'wt') ? 'var(--danger-light)' : 'var(--success-light)'}" stroke="${downstream !== 'wt' ? 'var(--danger)' : 'var(--accent)'}" stroke-width="2" />
            <text x="266" y="60" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--text-main)">KRAS (GTP/GDP)</text>
            <text x="266" y="80" text-anchor="middle" font-size="10.8" font-weight="700" fill="${downstream === 'kras_mut' ? 'var(--danger)' : 'var(--text-muted)'}">${downstream === 'kras_mut' ? 'ĐỘT BIẾN TỰ BẬT!' : 'Phụ thuộc RTK trên'}</text>

            <line x1="336" y1="68" x2="374" y2="68" stroke="${mapkActive ? 'var(--danger)' : 'var(--border)'}" stroke-width="2.5" />

            <rect x="376" y="34" width="244" height="68" rx="10" fill="${mapkActive ? 'var(--danger-light)' : 'var(--success-light)'}" stroke="${mapkActive ? 'var(--danger)' : 'var(--success)'}" stroke-width="2" />
            <text x="498" y="58" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--text-main)">BRAF → MEK → ERK → Nhân</text>
            <text x="498" y="80" text-anchor="middle" font-size="11.5" font-weight="800" fill="${mapkActive ? 'var(--danger)' : 'var(--success)'}">${mapkActive ? 'TĂNG SINH MẠNH (Kháng thuốc)' : 'NGỪNG PHÂN BÀO (Hiệu quả)'}</text>
          </svg>
        </div>

        <div class="callout ${tone}" style="margin-bottom:0;">
          <div class="callout-title">${outcome}</div>
          <p style="margin:0;">${explain}</p>
        </div>
      </div>
    `;
  }

  /* ------------------------------------------------------------------
     8. SIMULATOR BÀI 8: TRỤC TP53 – MDM2 & CÂN BẰNG BCL-2 / CASPASE
     ------------------------------------------------------------------ */
  function buildTp53Caspase(st) {
    const { damage, mutation, treatment } = st;
    let p53State = '';
    let cellFate = '';
    let tone = 'success';
    let detail = '';

    if (mutation === 'tp53_loss') {
      p53State = 'MẤT CHỨC NĂNG p53 (Đột biến > 50% ung thư)';
      cellFate = '⚠️ TẾ BÀO HƯ DNA VẪN PHÂN CHIA → Tích lũy đột biến!';
      tone = 'trap';
      detail = 'Mất TP53 (17p13.1): không bật được p21 để dừng G1 và không bật BAX/PUMA để kích hoạt apoptosis nội sinh → tế bào mang DNA lỗi tiếp tục vượt trạm G1/S tạo dòng ác tính kháng hóa/xạ trị!';
    } else if (mutation === 'mdm2_amp') {
      p53State = 'MDM2 khuếch đại → Quá mức hủy p53 tại Proteasome';
      cellFate = '⚠️ p53 bị đè nén dù gen TP53 còn nguyên → Kháng Apoptosis!';
      tone = 'trap';
      detail = 'Thường gặp ở một số Sarcôm mô mềm & U thần kinh đệm: dù gen TP53 không đột biến nhưng thừa MDM2 (E3 ubiquitin ligase) nên p53 vừa sinh ra lập tức bị gắn ubiquitin tiêu hủy.';
    } else if (mutation === 'bcl2_up') {
      if (treatment === 'venetoclax' && damage !== 'none') {
        p53State = 'p53 ổn định, BAX/BAK được Venetoclax giải phóng!';
        cellFate = '✅ KÍCH HOẠT CASPASE-9 → CASPASE-3 (Đáp ứng Venetoclax)';
        tone = 'success';
        detail = 'Trong U lympho thể nang t(14;18) hoặc CLL có biểu hiện quá mức BCL-2 làm bịt kín màng ty thể. Thuốc nhắm trúng đích VENETOCLAX bắt chước BH3 khóa BCL-2 → giải phóng BAX/BAK mở lỗ ty thể phóng thích Cytochrome c → Apoptosome → Caspase-9 → Caspase-3!';
      } else {
        p53State = damage === 'none' ? 'Bình thường (MDM2 phân hủy p53)' : 'p53 kích hoạt nhưng ty thể bị khóa bởi BCL-2!';
        cellFate = '⚠️ CHỐNG APOPTOSIS (Màng ty thể không dò Cytochrome c)';
        tone = 'warning';
        detail = 'Chuyển đoạn t(14;18) đưa gen BCL2 cạnh promoter chuỗi nặng kháng thể (IgH) khiến BCL-2 tăng vọt → giữ chặt màng ngoài ty thể, ngăn thoát Cytochrome c dù có tổn thương DNA. Hãy thử bật thuốc Venetoclax!';
      }
    } else {
      // Bình thường (không đột biến ung thư)
      if (damage === 'none') {
        p53State = 'MDM2 bám phân hủy (Bán hủy ~20 phút)';
        cellFate = '✅ Tế bào tiếp tục chu kỳ sinh lý bình thường';
        tone = 'pearl';
        detail = 'Không có stress DNA → MDM2 gắn đuôi ubiquitin đưa p53 vào proteasome. Đây là vòng điều hòa ngược âm tự động giữ p53 ở mức cực thấp khi tế bào khỏe mạnh.';
      } else if (damage === 'mild') {
        p53State = 'ATM/ATR phosphoryl hóa → Ổn định Tetramer p53';
        cellFate = '⏸ DỪNG PHA G1/S (qua p21) để SỬA CHỮA DNA';
        tone = 'warning';
        detail = 'p53 thoát khỏi MDM2, kích hoạt phiên mã p21 (CDKN1A) ức chế CDK4/Cyclin D giữ nguyên pRb → tế bào dừng tại G1 để enzyme GADD45 sửa xong DNA rồi mới đi tiếp.';
      } else {
        p53State = 'Hoạt hóa p53 mạnh → Bật nhóm gen Pro-apoptosis (BAX, PUMA, NOXA)';
        cellFate = '💀 APOPTOSIS (Cytochrome c → Caspase-9 → Caspase-3, 6, 7)';
        tone = 'success';
        detail = 'Tổn thương DNA quá nặng không sửa được → p53 chọn hy sinh tế bào vì lợi ích cơ thể: BAX/BAK đục lỗ ty thể → thoát Cytochrome c + Apaf-1 + dATP tạo Apoptosome → hoạt hóa Caspase-9 → Caspase thực thi (3, 6, 7) cắt DNA thành bậc thang 180–200 bp mà KHÔNG gây viêm!';
      }
    }

    return `
      <div class="sim-box">
        <div class="sim-header">
          <div>
            <h3 style="margin:0;font-size:17px;">🛡️ Mô phỏng Người bảo vệ Bộ gen (TP53–MDM2) &amp; Dòng thác Caspase</h3>
            <div style="font-size:13px;color:var(--text-muted);margin-top:2px;">Điều khiển mức hư hại DNA, đột biến né tránh apoptosis và thuốc đích Venetoclax</div>
          </div>
          <span class="sim-badge">${mutation === 'wt' ? 'Mạng kiểm soát nguyên vẹn' : 'Mạng kiểm soát Bất thường'}</span>
        </div>

        <div class="sim-controls">
          <div class="control-group">
            <label>1. Mức Tổn thương DNA / Stress Tế bào</label>
            <select onchange="Simulators.setVal('sim_tp53_caspase','damage',this.value)">
              <option value="none" ${damage === 'none' ? 'selected' : ''}>Không stress (Tế bào khỏe mạnh)</option>
              <option value="mild" ${damage === 'mild' ? 'selected' : ''}>Tổn thương DNA vừa phải (Có thể sửa)</option>
              <option value="severe" ${damage === 'severe' ? 'selected' : ''}>Tổn thương DNA nặng (Không sửa được)</option>
            </select>
          </div>
          <div class="control-group">
            <label>2. Đột biến Né tránh Apoptosis trong Ung thư</label>
            <select onchange="Simulators.setVal('sim_tp53_caspase','mutation',this.value)">
              <option value="wt" ${mutation === 'wt' ? 'selected' : ''}>Tế bào Bình thường (Không đột biến)</option>
              <option value="tp53_loss" ${mutation === 'tp53_loss' ? 'selected' : ''}>Mất gen TP53 (17p13.1)</option>
              <option value="mdm2_amp" ${mutation === 'mdm2_amp' ? 'selected' : ''}>Khuếch đại gen MDM2 (Sarcôm)</option>
              <option value="bcl2_up" ${mutation === 'bcl2_up' ? 'selected' : ''}>t(14;18) Tăng biểu hiện BCL-2 (U lympho thể nang)</option>
            </select>
          </div>
          <div class="control-group">
            <label>3. Can thiệp Điều trị (Khi BCL-2 tăng)</label>
            <select onchange="Simulators.setVal('sim_tp53_caspase','treatment',this.value)">
              <option value="none" ${treatment === 'none' ? 'selected' : ''}>Không dùng thuốc ức chế BCL-2</option>
              <option value="venetoclax" ${treatment === 'venetoclax' ? 'selected' : ''}>Dùng VENETOCLAX (Ức chế BCL-2)</option>
            </select>
          </div>
        </div>

        <div class="metric-cards">
          <div class="metric-card">
            <div class="metric-label">Trạng thái Protein p53</div>
            <div class="metric-val" style="font-size:14px;">${p53State}</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Caspase Khởi phát vs Thực thi</div>
            <div class="metric-val" style="font-size:14px;">Nội sinh: Casp-9 | Ngoại sinh: Casp-8 → Hội tụ: Caspase 3, 6, 7</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Số phận Tế bào</div>
            <div class="metric-val" style="color:${tone === 'trap' ? 'var(--danger)' : (tone === 'warning' ? 'var(--warning)' : 'var(--success)')};font-size:14.5px;">${cellFate}</div>
          </div>
        </div>

        <div class="callout ${tone}" style="margin-bottom:0;">
          <div class="callout-title">Giải thích Cơ chế Phân tử &amp; Dòng thác Caspase</div>
          <p style="margin:0;">${detail}</p>
        </div>
      </div>
    `;
  }

  window.Simulators = {
    mount,
    render,
    setVal
  };
})();
