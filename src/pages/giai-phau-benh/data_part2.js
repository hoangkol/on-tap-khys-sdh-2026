// ==========================================================================
// DỮ LIỆU BÀI HỌC PHẦN 2: CHUYÊN ĐỀ II – GIẢI PHẪU BỆNH BƯỚU
// Chuẩn Giáo trình Giải phẫu bệnh đại cương (Vũ Tuấn Dũng, Phạm Quốc Thắng, Ngô Quốc Đạt) – Bài 8 (tr. 141–183)
// Gồm Bài 4, Bài 5, Bài 6
// ==========================================================================

window.LESSONS_PART2 = [
  // ========================================================================
  // BÀI 4: ĐẠI CƯƠNG, DANH PHÁP & ĐẶC ĐIỂM HÌNH THÁI ĐẠI THỂ – VI THỂ BƯỚU
  // ========================================================================
  {
    id: 4,
    group: "II. GIẢI PHẪU BỆNH BƯỚU",
    title: "Bài 4: Đại cương, Danh pháp & Đặc điểm Đại thể – Vi thể Bướu",
    shortTitle: "Danh pháp & Hình thái Bướu",
    textbookRef: "Giải phẫu bệnh đại cương YDS – Bài 8 (Mục 1, 2 & 3, tr. 141–159)",
    summary: "Định nghĩa Tân sinh (Neoplasia), chủ mô vs mô đệm; Phân biệt bướu lành – giáp biên ác – ác tính; Toàn bộ Bảng 8.1, Bảng 8.2, Bảng 8.3; Bướu ngoài quy tắc, danh pháp phân tử hiện đại, đại thể & vi thể bướu kèm Hình 8.1–8.12.",
    simId: "sim_tumor_nomenclature",
    simTitle: "Phòng Lab Định danh Bướu & Phân biệt Lành – Ác (Đại thể / Vi thể)",
    figureIds: ["H8.1", "H8.2", "H8.3", "H8.4", "H8.5", "H8.6", "H8.7", "H8.8", "H8.9", "H8.10", "H8.11", "H8.12"],
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🏛️ 1. Đại cương &amp; Khái niệm Tân sinh (Neoplasia)</div>
          <ul class="theory-list">
            <li><strong>Định nghĩa:</strong> Bướu (tân sinh – <em>Neoplasia</em>: "Neo" = Mới, "Plasia" = Sinh sản) là rối loạn tăng sinh tế bào không ngừng, tạo khối mô mới, không chịu sự kiểm soát của cơ chế điều hòa sinh lý bình thường. Hiện diện ở người, động vật (ếch, cá, chim, gà, mèo) và thực vật (cà rốt, hướng dương, củ cải).</li>
            <li><strong>Cổ học &amp; Lịch sử:</strong> Di chỉ xương Java (1891) &amp; xác ướp Ai Cập có dấu hiệu sarcom xương; <em>Papirut Ebers</em> (~1500 TCN) &amp; <em>Edwin Smith</em> (~1600 TCN) mô tả cắt bướu; văn bản <em>Vệ Đà</em> (~1500 TCN) &amp; Trung Quốc cổ (3000–2000 TCN); <strong>Hippocrates (470–380 TCN)</strong> giải thích do mất cân bằng thể dịch và chia "bướu hiền lành" vs "bướu nguy hiểm".</li>
            <li><strong>Ung bướu học (Oncology):</strong> Từ <em>Oncos</em> (bướu) + <em>Logos</em> (nghiên cứu). Tế bào tân sinh "chuyển dạng" nhân đôi liên tục nhưng vẫn phụ thuộc ký chủ về dinh dưỡng, cấp máu và (ở mô đáp ứng) hỗ trợ nội tiết.</li>
            <li><strong>Phân biệt 3 loại bướu lâm sàng:</strong>
              <br/>• <em>Bướu lành tính:</em> tổn thương khu trú, phát triển chậm, chữa khỏi hoàn toàn bằng phẫu thuật cắt triệt để (trừ vị trí sống còn như não, tim, đường thở).
              <br/>• <em>Bướu ác tính (Ung thư – Cancer = "Con cua"):</em> xâm lấn mô lân cận và di căn xa qua máu/bạch huyết.
              <br/>• <em>Bướu giáp biên ác (độ ác thấp):</em> tiến triển tự phát chậm, di căn không hằng định và rất muộn (VD: <strong>Bướu đại bào xương</strong>).</li>
            <li><strong>Hai thành phần mọi khối bướu:</strong> (1) <strong>Nhu mô (chủ mô)</strong> gồm tế bào tân sinh quyết định tính sinh học và <em>cơ sở đặt tên bướu</em>; (2) <strong>Mô đệm</strong> từ cơ thể chủ (mô liên kết, mạch máu, tế bào viêm) cung cấp máu và tương tác hai chiều điều chỉnh hành vi bướu.</li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">🏷️ 2.1–2.4. Nguyên tắc Danh pháp &amp; Bướu Ngoài Quy tắc</div>
          <div class="table-responsive">
            <table class="med-table">
              <thead><tr><th>Thành phần (Bảng 8.1)</th><th>Ý nghĩa</th><th>Ví dụ</th></tr></thead>
              <tbody>
                <tr><td><strong>Tiền tố (Prefix)</strong></td><td>• Nguồn gốc mô học/tế bào<br/>• Vị trí bướu</td><td><em>Adeno-</em> (tuyến), <em>Chondro-</em> (sụn), <em>Lipo-</em> (mỡ), <em>Fibro-</em> (sợi)<br/><em>en-</em> (trong), <em>extra-</em> (ngoài)</td></tr>
                <tr><td><strong>Hậu tố (Suffix)</strong></td><td>Chỉ tính chất lành hay ác</td><td><em>-oma</em> (lành tính); <em>-carcinoma, -sarcoma</em> (ác tính)</td></tr>
              </tbody>
            </table>
          </div>
          <ul class="theory-list">
            <li><strong>Bướu lành tính:</strong> Mang hậu tố <em>"-oma"</em> (tiếng Việt <em>"-om"</em>): <em>chondroma</em> (bướu sụn), <em>chondroblastoma</em> (bướu nguyên bào sụn), <em>enchondroma</em> (bướu nội sụn nằm trong khoang xương). Lành từ biểu mô: <em>epithelioma</em> (biểu mô lát tầng), <strong>papilloma</strong> (nhô ra phân nhánh – <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H8.1')">🖼️ H8.1</button>), <em>adenoma</em> (tuyến/ống tuyến), <strong>adenomatous polyp</strong> (đại thể dạng polyp – <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H8.2')">🖼️ H8.2</button>).</li>
            <li><strong>Bướu ác tính:</strong> <strong>Carcinom</strong> xuất phát từ <strong>biểu mô (lá phôi ngoài &amp; lá phôi trong)</strong>; <strong>Sarcom</strong> xuất phát từ <strong>mô liên kết / trung mô (lá phôi giữa)</strong> (VD: <em>extraosseous osteosarcoma</em> = sarcom tạo xương ngoài xương).</li>
            <li><strong>Bướu ngoài quy tắc &amp; dễ nhầm:</strong>
              <br/>• <strong>Teratom (Bướu quái)</strong> (<button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H8.3')">🖼️ H8.3</button>): Từ tế bào mầm chứa mô trưởng thành biệt hóa từ cả 3 lá phôi (thường ở buồng trứng, tinh hoàn, trung thất).
              <br/>• <strong>Hamartom (Bướu nghịch tạo tại chỗ):</strong> KHÔNG phải tân sinh thật sự mà là sự sắp xếp bất thường các mô bình thường tại chính cơ quan đó (VD: hamartom phổi có sụn, mỡ, biểu mô hô hấp, tuyến).
              <br/>• <strong>Choristom:</strong> Tổn thương lành tính gồm mô trưởng thành bình thường phát triển tại vị trí LẠC CHỖ giải phẫu (VD: mô tụy ở thành dạ dày/ruột, mô lách trong phúc mạc, mô thượng thận dưới bao thận).
              <br/>• <strong>U giả (tăng sản quá mức mô lành):</strong> Polyp dây thanh, mảnh da thừa.
              <br/>• <strong>Tên đuôi "-oma" nhưng ÁC TÍNH:</strong> <em>Melanoma, Seminoma, Lymphoma</em> (và <em>Leukemia</em> đuôi "-emia").</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-title">📋 2.5–2.6. Danh pháp Mô tả, Danh pháp Phân tử, Bướu Hỗn hợp &amp; Bảng 8.2 Đầy đủ</div>
        <div class="grid-2">
          <div>
            <ul class="theory-list">
              <li><strong>Tên theo hình thái/chức năng:</strong> <em>Papillary carcinoma</em> (cấu trúc nhú), <em>Medullary carcinoma</em> (bướu mềm, giàu tế bào, ít mô đệm), <em>Scirrhous / desmoplastic carcinoma</em> (nhiều mô đệm sợi xơ chắc), <em>Colloid carcinoma</em> (tiết nhầy tạo bể nhầy), <em>Comedocarcinoma</em> (carcinom ống tuyến vú có hoại tử bã khô comedo trung tâm), <em>Papillary serous cystadenocarcinoma</em> (buồng trứng nhú-nang tiết thanh dịch), <em>Adenoid cystic carcinoma</em> (tuyến nước bọt nang tuyến dạng sàng).</li>
              <li><strong>Tên riêng lịch sử:</strong> <em>Hodgkin lymphoma, Ewing sarcoma</em> (xương tế bào tròn nhỏ trẻ em), <em>Brenner tumor</em> (buồng trứng hiếm).</li>
              <li><strong>Danh pháp phân tử hiện đại:</strong> <em>TFE3/TFEB</em>-rearranged RCC, <em>ALK</em>-rearranged RCC, <em>Oligodendroglioma IDH-mutant 1p/19q-codeleted</em>, <em>Diffuse low-grade glioma MAPK pathway-altered</em>, <em>Diffuse hemispheric glioma H3 G34-mutant</em>.</li>
              <li><strong>Bướu hỗn hợp (đơn dòng biệt hóa đa dòng):</strong> <strong>Bướu tuyến đa dạng tuyến mang tai (Pleomorphic adenoma)</strong> (<button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H8.4')">🖼️ H8.4</button>), <strong>Bướu sợi tuyến (Fibroadenoma)</strong>, <strong>Carcinom tuyến – gai (Adenosquamous carcinoma)</strong>, <strong>Carcinosarcoma</strong> (cả carcinoma &amp; sarcoma trong một bướu).</li>
            </ul>
          </div>
          <div class="table-responsive">
            <table class="med-table">
              <thead><tr><th colspan="3">Bảng 8.2. Danh pháp bướu (Đầy đủ Sách tr. 148–149)</th></tr><tr><th>Nguồn gốc mô</th><th>Lành tính</th><th>Ác tính</th></tr></thead>
              <tbody>
                <tr><td>Mô liên kết (Sợi/Mỡ/Sụn/Xương)</td><td>Fibroma, Lipoma, Chondroma, Osteoma</td><td>Fibrosarcoma, Liposarcoma, Chondrosarcoma, Osteosarcoma</td></tr>
                <tr><td>Mạch máu / Trung biểu mô</td><td>Bướu mạch máu (Hemangioma)</td><td>Angiosarcoma / Mesothelioma (Bướu trung mạc)</td></tr>
                <tr><td>Tạo máu / Mô lympho</td><td>—</td><td>Leukemia / Lymphoma</td></tr>
                <tr><td>Cơ trơn / Cơ vân</td><td>Leiomyoma / Rhabdomyoma</td><td>Leiomyosarcoma / Rhabdomyosarcoma</td></tr>
                <tr><td>Biểu mô lát tầng / Tế bào đáy da</td><td>Squamous cell papilloma / —</td><td>Squamous cell carcinoma / Basal cell carcinoma</td></tr>
                <tr><td>Hắc tố / Tuyến / Gan</td><td>Nevi (Nevus) / Adenoma / Hepatocellular adenoma</td><td>Melanoma / Adenocarcinoma / Hepatocellular carcinoma</td></tr>
                <tr><td>Bàng quang / Nhau thai / Tinh hoàn</td><td>Urothelial papilloma / Thai trứng (Hydatidiform mole) / —</td><td>Urothelial carcinoma / Choriocarcinoma / Seminoma</td></tr>
                <tr><td>Tuyến nước bọt / Mầm thận</td><td>Pleomorphic adenoma / —</td><td>Carcinoma ex pleomorphic adenoma / Nephroblastoma (Wilms)</td></tr>
                <tr><td>Tế bào toàn năng</td><td>Mature teratoma (bướu bọc bì)</td><td>Immature teratoma</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🔬 3. Đặc điểm Đại thể, Vi thể &amp; Bảng 8.3 So sánh Bướu Lành vs Bướu Ác</div>
        <div class="grid-2">
          <div>
            <p style="font-size:14px;"><strong>3.1. Đại thể:</strong> Mô tả <em>Vị trí</em>, <em>Hình dạng</em> (đặc, nang, hỗn hợp, nhú, thùy; biểu mô có 6 dạng: phẳng, polyp, nhú, nấm/sùi, loét, vòng – <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H8.5')">🖼️ H8.5</button>), <em>Kích thước</em> 3 chiều bằng cm (<strong>KHÔNG</strong> nhận xét kiểu "to bằng trái chanh, hột vịt"), <em>Vỏ bao</em> (từ chất nền ngoại bào do nguyên bào sợi mô đệm tiết khi chèn ép; ngoại lệ lành không vỏ bao như <em>bướu mạch máu</em>), <em>Màu sắc</em> (vàng=mỡ, đỏ rực=máu, nhiều màu=ác), <em>Mật độ</em> (mềm/chắc/cứng/lùng nhùng) &amp; <em>Chất chứa</em> (dịch trong/nhầy/sừng).</p>
            <p style="font-size:14px;margin-top:8px;"><strong>3.2. Vi thể, Xâm lấn &amp; Di căn:</strong> Cấu trúc ống/tuyến/nhú/bè/đặc/xoáy lốc; mật độ tế bào phân biệt bướu thật (bướu cơ trơn tử cung) với bướu giả (u hạt viêm). Khảo sát mức độ biệt hóa (<button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H8.6')">🖼️ H8.6</button>), hoạt động chức năng (<button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H8.7')">🖼️ H8.7</button>, <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H8.11')">🖼️ H8.11</button>), phân bào bất thường trên 10 HPF (<button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H8.9')">🖼️ H8.9</button>), mất phân cực (<button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H8.10')">🖼️ H8.10</button>), xâm lấn (<button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H8.12')">🖼️ H8.12</button>).</p>
            <div class="callout pearl">
              <div class="callout-title">📍 Điểm nhấn về Xâm lấn &amp; Di căn (tr. 157–159)</div>
              <ul>
                <li><strong>Xâm lấn</strong> là đặc điểm quan trọng và đáng tin cậy nhất để chẩn đoán ác tính (phá vỡ màng đáy hoặc xâm nhập vỏ bao/mạch máu ở carcinom tuyến giáp dạng nang). Khoảng <strong>30%</strong> bướu đặc (trừ melanom) đã có di căn lâm sàng lúc chẩn đoán và <strong>20%</strong> có di căn tiềm ẩn. Ngoại lệ hiếm di căn: <em>carcinom tế bào đáy da</em>, đa số <em>bướu TKTW</em>.</li>
                <li><strong>3 con đường di căn:</strong> (1) <em>Gieo rắc khoang cơ thể</em> (phúc mạc ở K buồng trứng, màng phổi/tim); (2) <em>Đường bạch huyết</em> (hay gặp ở carcinom; K vú ¼ trên ngoài → hạch nách, ½ trong → hạch cạnh xương ức/thượng đòn/hạ đòn; có hiện tượng <strong>di căn nhảy cóc</strong>; <strong>Hạch lính gác</strong> là hạch đầu tiên nhận bạch huyết trực tiếp — chú ý hạch to có thể chỉ là tăng sản nang phản ứng chứ chưa chắc di căn); (3) <em>Đường máu</em> (hay gặp ở sarcom, vào tĩnh mạch tới <strong>gan</strong> [hệ cửa] &amp; <strong>phổi</strong> [TM chủ dưới]; tiền liệt tuyến &amp; tuyến giáp qua đám rối tĩnh mạch cạnh sống không van → xương sống; RCC &amp; HCC lan dọc lòng TM chủ dưới tới buồng tim phải).</li>
                <li><strong>Di căn chọn lọc:</strong> Tiền liệt tuyến → xương; Phổi → thượng thận &amp; não; Nguyên bào thần kinh → gan &amp; xương; Melanom màng bồ đào mắt → gan; ngược lại <em>cơ vân</em> rất hiếm khi bị di căn đến.</li>
              </ul>
            </div>
          </div>
          <div class="table-responsive">
            <table class="med-table">
              <thead><tr><th colspan="3">Bảng 8.3. So sánh Đại thể &amp; Vi thể Bướu lành vs Bướu ác</th></tr><tr><th>Đặc điểm</th><th>Bướu lành tính</th><th>Bướu ác tính</th></tr></thead>
              <tbody>
                <tr><td>Kích thước</td><td>Thường nhỏ</td><td>Thường lớn</td></tr>
                <tr><td>Giới hạn</td><td>Rõ</td><td>Không rõ</td></tr>
                <tr><td>Vỏ bao</td><td>Có (đa số)</td><td>Không</td></tr>
                <tr><td>Màu sắc</td><td>Thường đồng nhất</td><td>Không đồng nhất (hoại tử, xuất huyết)</td></tr>
                <tr><td>Mật độ</td><td>Chắc</td><td>Mềm bở / Cứng</td></tr>
                <tr><td>Mô bướu</td><td>Giống mô lành</td><td>Mất tính phân cực</td></tr>
                <tr><td>Tế bào</td><td>Bình thường</td><td>Đa dạng, dị dạng, tế bào khổng lồ</td></tr>
                <tr><td>Nhân</td><td>Bình thường</td><td>Lớn, tăng sắc, đa dạng, nhân quái, hạt nhân lớn</td></tr>
                <tr><td>Tỷ lệ N/C</td><td>Bình thường</td><td>Tăng</td></tr>
                <tr><td>Phân bào</td><td>Ít, phân bào bình thường</td><td>Nhiều, phân bào bất thường (3 cực, 4 cực...)</td></tr>
                <tr><td><strong>Xâm nhập &amp; Di căn</strong></td><td><strong>KHÔNG / KHÔNG</strong></td><td><strong>CÓ / CÓ</strong></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Tân sinh là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Câu tự lượng giá 1 (tr. 182)",
        options: [
          "Sự tăng trưởng mới và không ngừng của tế bào do mất kiểm soát",
          "Sự phát triển của các cơ quan trong cơ thể",
          "Quá trình chết tế bào theo chương trình",
          "Sự phát triển lành tính của các mô"
        ],
        answer: 0,
        explain: "Đáp án chuẩn giáo trình (Mục 2 & Câu 1 tr. 182): Tân sinh (Neoplasia: Neo = Mới, Plasia = Sinh sản) là sự tăng trưởng mới và không ngừng của tế bào do thoát khỏi sự kiểm soát của cơ chế điều hòa sinh lý bình thường."
      },
      {
        q: "Một bệnh nhân được chẩn đoán có bướu tuyến ở đại tràng. Điều này có ý nghĩa gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Câu tự lượng giá 3 (tr. 182)",
        options: [
          "Bướu lành tính, có nguy cơ chuyển thành ung thư cao nếu không điều trị",
          "Bướu lành tính và không cần lo ngại về nguy cơ ác tính",
          "Bướu ác tính, cần phẫu thuật ngay để ngăn di căn",
          "Một loại tổn thương tiền ung thư nhưng không cần theo dõi sát"
        ],
        answer: 0,
        explain: "Đáp án chuẩn giáo trình (Mục 4.4 tr. 164 & Câu 3 tr. 182): Bướu tuyến đại tràng (adenoma) là bướu LÀNH tính, nhưng là ngoại lệ có nguy cơ hóa ác cao (đặc biệt bướu tuyến nhánh đại tràng có thể lên đến 50% tiến triển thành carcinom tuyến đại trực tràng nếu không điều trị)."
      },
      {
        q: "Vì sao các bướu ác tính thường biểu hiện sự thoái sản?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Câu tự lượng giá 4 (tr. 183)",
        options: [
          "Do tế bào bướu mất khả năng biệt hóa hoặc biệt hóa không hoàn toàn",
          "Do tế bào ác tính bị tổn thương DNA liên tục",
          "Do áp lực từ môi trường mô đệm xung quanh",
          "Do sự phát triển quá nhanh vượt ngoài tầm kiểm soát"
        ],
        answer: 0,
        explain: "Đáp án chuẩn giáo trình (Mục 3.2.2 tr. 154 & Câu 4 tr. 183): Thoái sản (anaplasia) theo nghĩa đen là 'sự hình thành ngược', ngụ ý sự suy giảm hoặc mất đi sự biệt hóa (không còn biệt hóa hoàn toàn như mô bình thường)."
      },
      {
        q: "Một bệnh nhân có bướu ác tính xuất phát từ tế bào trung mô, bác sĩ sẽ chẩn đoán loại ung thư nào sau đây?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Câu tự lượng giá 5 (tr. 183)",
        options: [
          "Sarcom",
          "Carcinom",
          "Lymphom",
          "Melanom"
        ],
        answer: 0,
        explain: "Đáp án chuẩn giáo trình (Mục 2.3 tr. 144 & Câu 5 tr. 183): Bướu ác tính từ mô liên kết hoặc trung mô (lá phôi giữa) được gọi là Sarcom; còn từ biểu mô (lá phôi ngoài và lá phôi trong) gọi là Carcinom."
      },
      {
        q: "Sự hiện diện của mô tụy trưởng thành bình thường nằm ở thành dạ dày hoặc mô tuyến thượng thận dưới vỏ bao thận được xếp vào loại tổn thương nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Mục 2.4 (tr. 145–146)",
        options: [
          "Choristom (mô bình thường phát triển tại vị trí lạc chỗ giải phẫu)",
          "Hamartom (sự sắp xếp hỗn loạn các thành phần mô bình thường tại chỗ)",
          "Teratom (bướu thật từ tế bào mầm đa lá phôi)",
          "Carcinosarcoma (bướu ác hỗn hợp biểu mô và trung mô)"
        ],
        answer: 0,
        explain: "Trang 145–146: Choristom là tổn thương lành tính gồm các mô trưởng thành bình thường phát triển ở vị trí không tương ứng về giải phẫu (lạc chỗ). Ngược lại, Hamartom xảy ra tại đúng cơ quan đó nhưng sắp xếp mất tổ chức."
      },
      {
        q: "Nhóm tên gọi bướu nào sau đây mang hậu tố '-oma' (hoặc '-emia') nhưng bản chất đều là BƯỚU ÁC TÍNH?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Mục 2.4 & Bảng 8.2 (tr. 146, 148)",
        options: [
          "Melanoma, Seminoma, Lymphoma, Mesothelioma",
          "Fibroma, Chondroma, Leiomyoma, Osteoma",
          "Pleomorphic adenoma, Papilloma, Lipoma, Hemangioma",
          "Teratoma trưởng thành, Hepatocellular adenoma, Enchondroma"
        ],
        answer: 0,
        explain: "Trang 146 & Bảng 8.2: Melanom (hắc tố ác), Seminom (bướu ác tế bào mầm tinh hoàn), Lymphom (bướu ác mô lympho) và Mesothelioma (bướu trung mạc ác tính) đều mang đuôi '-oma' dễ gây nhầm nhưng là ác tính."
      },
      {
        q: "Khối bướu nào sau đây là bướu LÀNH tính nhưng có thể KHÔNG có vỏ bao rõ và KHÔNG có giới hạn rõ ràng trên đại thể?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Mục 3.1 (tr. 150)",
        options: [
          "Bướu lành mạch máu (Hemangioma)",
          "Bướu cơ trơn tử cung (Leiomyoma)",
          "Bướu sợi tuyến vú (Fibroadenoma)",
          "Bướu túi tuyến tuyến giáp (Follicular adenoma)"
        ],
        answer: 0,
        explain: "Trang 150: Dù đa số bướu lành có giới hạn rõ và vỏ bao (như bướu cơ trơn tử cung), một số bướu lành tính vừa không có vỏ bao vừa không có giới hạn rõ ràng như bướu lành mạch máu."
      },
      {
        q: "Hai loại bướu ác tính nào có xu hướng xâm lấn mạnh tại chỗ nhưng lại RẤT HIẾM KHI DI CĂN XA?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Mục 3.2.2 Di căn (tr. 157)",
        options: [
          "Carcinom tế bào đáy của da và đa số bướu nguyên phát của hệ thần kinh trung ương",
          "Melanom ác tính da và ung thư tế bào nhỏ của phổi",
          "Sarcom xương và carcinom tuyến tiền liệt",
          "Ung thư biểu mô buồng trứng và sarcom mạch máu gan"
        ],
        answer: 0,
        explain: "Trang 157: Một số bướu có xu hướng xâm lấn tại chỗ nhưng rất hiếm di căn xa, điển hình là carcinom tế bào đáy của da và đa số bướu nguyên phát của hệ thần kinh trung ương."
      },
      {
        q: "Tại sao carcinom tuyến tiền liệt và ung thư tuyến giáp thường di căn đến xương sống ngay cả khi chưa qua phổi?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Mục 3.2.2 Di căn (tr. 158)",
        options: [
          "Tế bào ung thư đi qua hệ thống tĩnh mạch đám rối cạnh sống không có van cho phép dòng máu đảo chiều",
          "Do hai cơ quan này chỉ dẫn lưu trực tiếp vào ống ngực rồi đổ xuống tĩnh mạch đùi",
          "Do xương sống nằm chung khoang thanh mạc phúc mạc với tuyến tiền liệt",
          "Do bướu giáp chỉ gieo rắc trực tiếp theo dịch não tủy"
        ],
        answer: 0,
        explain: "Trang 158: Một số ung thư ở cơ quan gần cột sống (tuyến giáp, tuyến tiền liệt) có thể di căn xương sống thông qua hệ thống tĩnh mạch đám rối cạnh sống không có van, tạo điều kiện cho dòng máu đảo chiều."
      },
      {
        q: "Khái niệm 'Hạch lính gác' (Sentinel lymph node) và lưu ý lâm sàng đi kèm khi thấy hạch vùng to là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Mục 3.2.2 (tr. 158)",
        options: [
          "Là hạch lympho đầu tiên nhận dòng bạch huyết trực tiếp từ bướu nguyên phát; hạch to chưa đồng nghĩa di căn vì có thể do tăng sản nang phản ứng",
          "Là hạch ở xa nhất trong cơ thể sau hiện tượng di căn nhảy cóc; hạch to chắc chắn 100% là di căn",
          "Là hạch chỉ xuất hiện trong sarcom xương khi tế bào bướu đi qua động mạch",
          "Là hạch lympho bình thường bị chuyển sản thành tế bào gai"
        ],
        answer: 0,
        explain: "Trang 158: Hạch lính gác là hạch lympho đầu tiên trong chuỗi dẫn lưu nhận bạch huyết trực tiếp từ bướu nguyên phát. Hạch to KHÔNG đồng nghĩa di căn (có thể do phản ứng tăng sản nang miễn dịch trước tế bào hoại tử/kháng nguyên bướu), nên cần sinh thiết xác định mô học."
      },
      {
        q: "Đánh giá trên đại thể, những dạng hình thái bề mặt nào của bướu xuất phát từ biểu mô thường gợi ý hướng ÁC TÍNH nhiều hơn?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Mục 3.1 & Hình 8.5 (tr. 150)",
        options: [
          "Dạng khối sùi (dạng nấm), dạng loét, dạng xâm nhiễm vòng hoặc kết hợp các dạng này",
          "Dạng nhú có cuống mảnh và trục liên kết mạch máu đơn thuần",
          "Dạng polyp trơn láng có cuống dài di động",
          "Bọc thượng bì chứa chất sừng tròn nhẵn có vỏ bao"
        ],
        answer: 0,
        explain: "Trang 150 & Hình 8.5: Bướu biểu mô lành thường có dạng gồ bề mặt, polyp hoặc nhú; trong khi bướu ác tính thường có dạng khối sùi (nấm), dạng loét, dạng thâm nhiễm/vòng hoặc kết hợp."
      },
      {
        q: "Trong phân loại bướu theo danh pháp phân tử hiện đại, tổn thương bướu thần kinh đệm ít nhánh (Oligodendroglioma) được định danh gắn liền với bộ biến đổi gen đặc hiệu nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Mục 2.5 (tr. 147)",
        options: [
          "Đột biến IDH và mất đoạn 1p/19q (IDH-mutant, 1p/19q-codeleted)",
          "Tái sắp xếp gen TFE3/TFEB trên nhiễm sắc thể X",
          "Chuyển vị t(9;22) tạo gen tổ hợp BCR::ABL",
          "Khuếch đại gen ERBB2 (HER2) trên nhiễm sắc thể 17"
        ],
        answer: 0,
        explain: "Trang 147: Oligodendroglioma, IDH-mutant, 1p/19q-codeleted (bướu thần kinh đệm ít nhánh có đột biến IDH và đồng mất đoạn 1p/19q)."
      }
    ]
  },

  // ========================================================================
  // BÀI 5: DỊCH TỄ HỌC UNG THƯ & CÁC TÁC NHÂN GÂY UNG THƯ
  // ========================================================================
  {
    id: 5,
    group: "II. GIẢI PHẪU BỆNH BƯỚU",
    title: "Bài 5: Dịch tễ Ung thư & Tác nhân Sinh ung (Hóa chất – Phóng xạ – Virus – Vi khuẩn)",
    shortTitle: "Dịch tễ & Tác nhân Gây Ung thư",
    textbookRef: "Giải phẫu bệnh đại cương YDS – Bài 8 (Mục 4 & Mục 5, tr. 159–170)",
    summary: "GLOBOCAN 2022; Bảng 8.4 (7 yếu tố nghề nghiệp); Bảng 8.5 (13 viêm mạn & ung thư); Hóa chất khởi đầu – thúc đẩy (Hình 8.13); Phóng xạ & UV; HTLV-1, HPV (E6/E7 Hình 8.14), EBV (Burkitt Hình 8.15), HBV/HCV và H. pylori.",
    simId: "sim_carcinogens_viruses",
    simTitle: "Phòng Lab Tra cứu Tác nhân Nghề nghiệp, Viêm mạn & Virus Sinh ung",
    figureIds: ["H8.13", "H8.14", "H8.15"],
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🌍 4. Dịch tễ học &amp; Các Yếu tố Nguy cơ Ung thư</div>
          <ul class="theory-list">
            <li><strong>Số liệu GLOBOCAN 2022:</strong> Toàn cầu &gt; <strong>20 triệu ca mới</strong> và <strong>9,7 triệu ca tử vong</strong> (dự báo năm 2050 tăng 77%, &gt;35 triệu ca). Tại <strong>Việt Nam (2022)</strong>: ước tính <strong>180.480 ca mới</strong> (~495 ca/ngày) và <strong>120.184 ca tử vong</strong> (~330 ca/ngày). Cổ tử cung giảm nhờ PAP &amp; vaccin HPV; dạ dày vẫn cao liên quan <em>H. pylori</em> &amp; ăn uống.</li>
            <li><strong>Vai trò Môi trường &amp; Địa lý:</strong> Ung thư vú ở Mỹ/Âu cao gấp 4–5× Nhật; ngược lại ung thư dạ dày ở Nhật tử vong cao gấp 7× Mỹ; người Nhật di cư thế hệ 2 (<em>Nisei</em>) tại Mỹ có tỷ lệ tử vong tiến gần người Mỹ bản địa → chứng minh yếu tố môi trường.</li>
            <li><strong>5 Yếu tố môi trường chính:</strong> (1) <em>Ăn uống &amp; béo phì</em>; (2) <em>Hút thuốc lá</em> (gây 90% tử vong ung thư phổi, cùng miệng, hầu họng, thanh quản, thực quản, tụy, bàng quang); (3) <em>Rượu</em> (yếu tố độc lập + <strong>hiệp đồng</strong> với thuốc lá gây ung thư hô hấp-tiêu hóa trên, xơ gan → HCC); (4) <em>Sản khoa</em> (tiếp xúc kéo dài estrogen không được cân bằng bởi progesterone → K nội mạc tử cung, K vú); (5) <em>Truyền nhiễm</em> (~15% tổng số ca toàn cầu).</li>
            <li><strong>Tuổi tác:</strong> Tần suất tăng theo tuổi, tử vong cao nhất ở <strong>55–75 tuổi</strong> (tích lũy đột biến soma + giảm giám sát miễn dịch). Ở trẻ &lt;15 tuổi, ung thư chiếm &gt;10% tử vong (bướu TKTW, leukemia cấp, lymphom, sarcom mô mềm/xương, bướu nguyên bào võng mạc).</li>
            <li><strong>Tương tác di truyền – môi trường:</strong> Khoảng <strong>95%</strong> ung thư tại Mỹ là <strong>"riêng lẻ"</strong> (không tiền sử gia đình rõ). Đột biến enzym chuyển hóa thuốc như hệ <strong>cytochrome P-450</strong> làm thay đổi khả năng hoạt hóa chất tiền ung.</li>
          </ul>
          <div class="callout warning">
            <div class="callout-title">⚠️ Tổn thương Tiền ung thư &amp; Bướu lành Hóa ác (tr. 163–164)</div>
            <ul>
              <li>Phổ biến nhất: Chuyển sản gai &amp; loạn sản phế quản (thuốc lá); Tăng sản &amp; loạn sản nội mạc tử cung (estrogen không đối kháng); Bạch sản niêm mạc miệng, âm hộ, dương vật (→ K tế bào gai); <strong>Bướu tuyến nhánh đại tràng</strong> (nguy cơ hóa ác lên đến <strong>50%</strong>).</li>
              <li><em>Lưu ý:</em> Đa số bướu lành KHÔNG là tiền ung thư (VD: <strong>bướu cơ trơn tử cung</strong> hầu như không chuyển ác).</li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card-title">🏭 Bảng 8.4 &amp; Bảng 8.5: Nghề nghiệp &amp; Viêm mạn tính Sinh ung</div>
          <div class="table-responsive">
            <table class="med-table">
              <thead><tr><th colspan="3">Bảng 8.4. Các yếu tố nghề nghiệp liên quan ung thư (tr. 161–162)</th></tr><tr><th>Chất / Yếu tố</th><th>Ung thư liên quan</th><th>Nguồn tiếp xúc</th></tr></thead>
              <tbody>
                <tr><td><strong>Asen &amp; hợp chất asen</strong></td><td>Ung thư phổi, ung thư da</td><td>Luyện kim, bán dẫn, thuốc diệt cỏ/nấm</td></tr>
                <tr><td><strong>Amiăng (Asbestos)</strong></td><td>Ung thư phổi, bướu trung mạc (mesothelioma)</td><td>Chống cháy, ma sát (má phanh), tấm lợp</td></tr>
                <tr><td><strong>Benzen</strong></td><td>Bệnh bạch cầu cấp dòng tủy (AML)</td><td>Dầu nhẹ, in ấn, sơn, cao su, dung môi</td></tr>
                <tr><td><strong>Cadmium &amp; hợp chất</strong></td><td>Ung thư tuyến tiền liệt</td><td>Sắc tố vàng, pin, hàn, mạ kim loại</td></tr>
                <tr><td><strong>Hợp chất Niken</strong></td><td>Ung thư phổi và hầu họng</td><td>Mạ niken, gốm sứ, hàn hồ quang thép không gỉ</td></tr>
                <tr><td><strong>Radon &amp; sản phẩm phân rã</strong></td><td>Ung thư phổi</td><td>Phân rã uranium ở mỏ đá, hầm mỏ</td></tr>
                <tr><td><strong>Vinyl clorua</strong></td><td>Sarcom mạch máu gan (Angiosarcoma)</td><td>Monome nhựa PVC, chất làm lạnh</td></tr>
              </tbody>
            </table>
          </div>
          <div class="table-responsive">
            <table class="med-table">
              <thead><tr><th colspan="3">Bảng 8.5. Mối liên hệ giữa Viêm mạn và Ung thư (13 dòng đầy đủ tr. 163)</th></tr><tr><th>Tình trạng bệnh lý</th><th>Bướu liên quan</th><th>Tác nhân</th></tr></thead>
              <tbody>
                <tr><td>Bụi phổi amiăng, bụi phổi silic</td><td>Bướu trung mạc, ung thư phổi</td><td>Sợi amiăng, hạt silica</td></tr>
                <tr><td>Bệnh viêm ruột (IBD)</td><td>Carcinom tuyến đại trực tràng</td><td>—</td></tr>
                <tr><td>Lichen xơ hóa</td><td>Carcinom tế bào gai ở âm hộ</td><td>—</td></tr>
                <tr><td>Viêm tụy</td><td>Carcinom tuyến tụy</td><td>Rượu kéo dài, đột biến dòng mầm (trypsinogen)</td></tr>
                <tr><td>Viêm túi mật mạn tính</td><td>Ung thư túi mật</td><td>Acid mật, vi khuẩn, sỏi túi mật</td></tr>
                <tr><td>Viêm thực quản trào ngược, Barrett</td><td>Carcinom tuyến thực quản</td><td>Acid dạ dày</td></tr>
                <tr><td>Hội chứng Sjögren, Viêm giáp Hashimoto</td><td>Lymphom ngoài hạch</td><td>—</td></tr>
                <tr><td>Viêm đường mật</td><td>Ung thư đường mật</td><td>Sán lá gan (<em>Opisthorchis viverrini</em>)</td></tr>
                <tr><td>Viêm/loét dạ dày</td><td>Carcinom tuyến dạ dày, lymphom vùng rìa ngoài hạch</td><td>Vi khuẩn <em>Helicobacter pylori</em></td></tr>
                <tr><td>Viêm gan</td><td>Carcinom tế bào gan (HCC)</td><td>Virus viêm gan B và/hoặc C</td></tr>
                <tr><td>Viêm xương tủy</td><td>Ung thư ở xoang dẫn lưu</td><td>Nhiễm khuẩn</td></tr>
                <tr><td>Viêm bàng quang mạn tính</td><td>Ung thư bàng quang</td><td>Bệnh sán máng</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="card-title">🧪 5.1 &amp; 5.2. Hóa chất &amp; Tia Phóng xạ Sinh ung <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H8.13')">🖼️ Xem Hình 8.13</button></div>
          <ul class="theory-list">
            <li><strong>Percival Pott:</strong> Phát hiện đầu tiên mối liên hệ ung thư da bìu thợ vệ sinh lò sưởi do muội than.</li>
            <li><strong>Hóa chất tác dụng trực tiếp:</strong> Không cần chuyển hóa để hoạt hóa; thường yếu (VD: <em>thuốc hóa trị nhóm alkylating</em> điều trị Hodgkin nhưng có thể gây bệnh bạch cầu thứ phát).</li>
            <li><strong>Hóa chất tác dụng gián tiếp:</strong> Cần chuyển hóa trong cơ thể thành dạng <strong>ái điện tử (electrophile)</strong> gắn DNA/RNA/protein: nhóm <strong>hydrocarbon đa vòng</strong> (<em>benzo[a]pyrene</em> sinh ra khi đốt thuốc lá/thịt hun khói/nướng mỡ → chuyển thành <em>epoxy</em> gây K phổi).</li>
            <li><strong>Đích tác động &amp; "Dấu ấn đột biến":</strong> Đích chủ chốt là <strong>RAS</strong> và <strong>TP53</strong>. <strong>Aflatoxin B₁</strong> (nấm <em>Aspergillus</em>) tạo kiểu đột biến đặc trưng trên <em>TP53</em> ở HCC; tia UV &amp; khói thuốc lá cũng để lại dấu ấn đột biến riêng.</li>
            <li><strong>Cơ chế Khởi đầu – Thúc đẩy (Hình 8.13):</strong> Chất khởi đầu tạo đột biến (như hoạt hóa <em>RAS</em>); chất thúc đẩy (<strong>promoters</strong>: <em>este phorbol, hormone, phenol</em>) dù KHÔNG tự gây đột biến nhưng thúc đẩy tăng sinh mở rộng dòng vô tính tế bào đã đột biến.</li>
            <li><strong>Phơi nhiễm tia phóng xạ:</strong> Bom nguyên tử Hiroshima &amp; Nagasaki (tăng mạnh <em>bệnh bạch cầu</em> với thời gian tiềm ẩn trung bình <strong>7 năm</strong>, kèm K giáp, vú, ruột non, phổi); thảm họa Chernobyl; xạ trị đầu cổ (→ <strong>carcinom tuyến giáp dạng nhú</strong> sau nhiều năm). Tổn thương nghiêm trọng nhất là <strong>đứt gãy sợi đôi DNA</strong>.</li>
            <li><strong>Tia cực tím (UV):</strong> Gây BCC, SCC (phơi nhiễm nắng kéo dài tích lũy) và Melanom (phơi nhiễm mạnh ngắt quãng / thiết bị làm rám da).</li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">🦠 5.3. Virus &amp; Vi khuẩn Sinh ung <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H8.14')">🖼️ H8.14</button> <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H8.15')">🖼️ H8.15</button></div>
          <ul class="theory-list">
            <li><strong>Virus RNA duy nhất ở người: HTLV-1</strong> (15–20 triệu người mang ở Nhật, Caribe, Nam Mỹ, châu Phi) → ái lực <strong>lympho bào T CD4+</strong> → gây <em>bệnh bạch cầu / lymphom tế bào T ở người trưởng thành (ATLL)</em>.</li>
            <li><strong>5 Virus DNA sinh ung ở người:</strong>
              <br/>1. <strong>HPV:</strong> Type 1,2,4,7 (mụn cóc da); Type 6,11 (mụn cóc sinh dục nguy cơ thấp); <strong>Type 16, 18 (nguy cơ cao)</strong> → carcinom tế bào gai cổ tử cung, sinh dục ngoài, hầu họng. Gen <strong>E6</strong> gắn làm thoái hóa <strong>P53</strong> &amp; tăng biểu hiện <strong>TERT</strong> (telomerase); Gen <strong>E7</strong> gắn <strong>RB</strong> giải phóng <strong>E2F</strong> và ức chế <strong>p21</strong> đẩy chu kỳ G1-S (Hình 8.14).
              <br/>2. <strong>EBV:</strong> Virus đầu tiên phát hiện gây bướu ở người (&gt;50 năm trước): <em>Lymphom Burkitt</em>, K vòm họng, lymphom T/NK, Hodgkin, lymphom dạ dày. Gắn <strong>CD21</strong> trên tế bào B → biểu hiện <em>EBNA2, LMP1</em> tăng sinh đa dòng → thoát CTL → <strong>đột biến chuyển vị MYC t(8;14)</strong> (Hình 8.15).
              <br/>3. <strong>KSHV (HHV-8):</strong> Sarcom Kaposi.
              <br/>4. <strong>Virus tế bào Merkel:</strong> Carcinom tế bào Merkel.
              <br/>5. <strong>HBV &amp; HCV:</strong> Liên quan <strong>70–85%</strong> ca HCC toàn cầu qua viêm mạn trung gian miễn dịch gây chết và tái tạo tế bào gan → tích lũy tổn thương gen.</li>
            <li><strong>Vi khuẩn gây ung thư: <em>Helicobacter pylori</em></strong> (vi khuẩn đầu tiên được xếp loại tác nhân sinh ung) → carcinom tuyến dạ dày &amp; lymphom dạ dày. Chuỗi tiến trình kéo dài hàng thập kỷ ở ~<strong>3%</strong> người nhiễm: <em>Viêm dạ dày mạn → Teo niêm mạc → Chuyển sản ruột → Loạn sản → Ung thư</em>.</li>
          </ul>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Yếu tố nào dưới đây là nguyên nhân chính dẫn đến sự xuất hiện của ung thư?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Câu tự lượng giá 2 (tr. 182)",
        options: [
          "Sự đột biến DNA và thay đổi ngoại gen",
          "Tình trạng viêm mạn tính",
          "Tăng sinh tế bào bất thường do mất cân bằng nội tiết",
          "Tiếp xúc với vi khuẩn Helicobacter pylori"
        ],
        answer: 0,
        explain: "Đáp án chuẩn giáo trình (Mục 5 tr. 164 & Câu 2 tr. 182): Các tác nhân gây ung thư (hóa chất, bức xạ, vi sinh vật) đều hội tụ vào tác động cốt lõi lên bộ gen – tích lũy ĐỘT BIẾN DNA và THAY ĐỔI NGOẠI GEN dẫn tới chuyển dạng ác tính."
      },
      {
        q: "Theo số liệu GLOBOCAN 2022 trích dẫn trong giáo trình, tình hình ung thư tại Việt Nam được ước tính vào khoảng bao nhiêu ca mắc mới và ca tử vong mỗi năm?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Mục 4.1 (tr. 160)",
        options: [
          "180.480 ca mắc mới (~495 ca/ngày) và 120.184 ca tử vong (~330 ca/ngày)",
          "20 triệu ca mắc mới và 9,7 triệu ca tử vong",
          "35 triệu ca mắc mới và 12 triệu ca tử vong",
          "50.000 ca mắc mới và 30.000 ca tử vong"
        ],
        answer: 0,
        explain: "Trang 160: Toàn cầu năm 2022 có >20 triệu ca mới và 9,7 triệu tử vong; riêng tại Việt Nam theo GLOBOCAN 2022 có 180.480 ca mắc mới và 120.184 ca tử vong (gần 495 ca mới và 330 ca tử vong mỗi ngày)."
      },
      {
        q: "Theo Bảng 8.4, hai hóa chất/tác nhân nghề nghiệp nào lần lượt liên quan rõ ràng đến Bệnh bạch cầu cấp dòng tủy (AML) và Sarcom mạch máu gan?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Bảng 8.4 (tr. 161–162)",
        options: [
          "Benzen (gây bệnh bạch cầu cấp dòng tủy) và Vinyl clorua (gây sarcom mạch máu gan)",
          "Amiăng (gây bệnh bạch cầu) và Asen (gây sarcom mạch máu gan)",
          "Cadmium (gây bệnh bạch cầu) và Radon (gây ung thư tiền liệt tuyến)",
          "Hợp chất Niken (gây ung thư bàng quang) và Benzen (gây bướu trung mạc)"
        ],
        answer: 0,
        explain: "Bảng 8.4 (tr. 161–162): Benzen → Bệnh bạch cầu cấp dòng tủy; Vinyl clorua → Sarcom mạch máu gan; Amiăng → Ung thư phổi & bướu trung mạc; Asen → Ung thư phổi & da; Cadmium → Ung thư tuyến tiền liệt; Niken → Ung thư phổi & hầu họng; Radon → Ung thư phổi."
      },
      {
        q: "Theo Bảng 8.5, hội chứng Sjögren hoặc viêm tuyến giáp Hashimoto làm tăng nguy cơ phát triển loại bướu nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Bảng 8.5 (tr. 163)",
        options: [
          "Lymphom ngoài hạch",
          "Carcinom tế bào gai âm hộ",
          "Carcinom tuyến thực quản",
          "Ung thư đường mật"
        ],
        answer: 0,
        explain: "Bảng 8.5 (tr. 163): Hội chứng Sjögren, viêm tuyến giáp Hashimoto liên quan với Lymphom ngoài hạch; Lichen xơ hóa → Carcinom tế bào gai âm hộ; Barrett → Carcinom tuyến thực quản; Sán lá gan Opisthorchis viverrini → Ung thư đường mật; Sán máng → Ung thư bàng quang."
      },
      {
        q: "Độc tố Aflatoxin B₁ do nấm Aspergillus sản sinh gây ra tổn thương sinh ung điển hình theo cơ chế nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Mục 5.1.3 (tr. 165)",
        options: [
          "Tạo kiểu đột biến đặc trưng ('dấu ấn đột biến') tại gen TP53 trong carcinom tế bào gan",
          "Gắn trực tiếp thụ thể CD21 gây tăng sinh đa dòng tế bào B",
          "Phá hủy protein P53 thông qua protein E6 của nấm",
          "Gây thiếu máu toàn thân và sưng phù tế bào ống lượn gần"
        ],
        answer: 0,
        explain: "Trang 165: Aflatoxin B₁ từ nấm Aspergillus gây ra kiểu đột biến đặc trưng ('dấu ấn đột biến') tại gen TP53, xác lập mối liên hệ nhân quả với carcinom tế bào gan."
      },
      {
        q: "Trong mô hình sinh ung hóa học 2 giai đoạn (Hình 8.13), đặc điểm nào ĐÚNG về vai trò của chất thúc đẩy (promoters như este phorbol, hormone, phenol)?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Mục 5.1.3 & Hình 8.13 (tr. 165–166)",
        options: [
          "Bản thân chất thúc đẩy KHÔNG gây đột biến gen, nhưng cần tiếp xúc lặp đi lặp lại sau chất khởi đầu để thúc đẩy tăng sinh mở rộng dòng vô tính tế bào mang đột biến",
          "Chất thúc đẩy chỉ có tác dụng khi dùng TRƯỚC khi cơ thể tiếp xúc với chất khởi đầu gây đột biến",
          "Chất thúc đẩy gây đứt gãy trực tiếp sợi đôi DNA mạnh hơn tia xạ ion hóa",
          "Chất thúc đẩy kích hoạt enzym sửa chữa DNA giúp tế bào đột biến trở về bình thường"
        ],
        answer: 0,
        explain: "Trang 165–166: Chất thúc đẩy (promoters) tuy không tự gây đột biến nhưng thúc đẩy quá trình tăng sinh và mở rộng dòng vô tính của các tế bào đã mang đột biến do chất khởi đầu tạo ra (phải tác động SAU chất khởi đầu và kéo dài/lặp lại)."
      },
      {
        q: "Xạ trị vùng đầu cổ trong thực hành y khoa là yếu tố nguy cơ đặc trưng dẫn đến loại ung thư nào xuất hiện sau nhiều năm kết thúc điều trị?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Mục 5.2 (tr. 167)",
        options: [
          "Carcinom tuyến giáp dạng nhú",
          "Carcinom tế bào đáy ở bàng quang",
          "Bệnh bạch cầu mạn dòng lympho T ở người trưởng thành",
          "Lymphom Burkitt vùng hàm mặt"
        ],
        answer: 0,
        explain: "Trang 167: Việc xạ trị vùng đầu cổ được ghi nhận là yếu tố nguy cơ dẫn đến carcinom tuyến giáp dạng nhú, thường xuất hiện sau nhiều năm kể từ khi kết thúc điều trị; tổn thương nghiêm trọng nhất do bức xạ ion hóa là đứt gãy sợi đôi DNA."
      },
      {
        q: "Trong năm virus DNA gây ung thư ở người, hai protein sinh ung E6 và E7 của HPV nguy cơ cao (type 16, 18) phối hợp biến đổi tế bào ký chủ bằng cơ chế nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Mục 5.3.2 & Hình 8.14 (tr. 168)",
        options: [
          "E6 làm phân hủy P53 và tăng biểu hiện TERT (telomerase); E7 gắn RB giải phóng E2F và ức chế p21",
          "E6 gắn RB kích hoạt E2F; E7 làm tăng thời gian bán hủy protein P53",
          "Cả E6 và E7 đều gắn thụ thể CD21 gây chuyển vị t(8;14) hoạt hóa MYC",
          "E6 ức chế enzym TET2 làm tăng methyl hóa DNA; E7 tạo cầu sừng tế bào gai"
        ],
        answer: 0,
        explain: "Trang 168 & Hình 8.14: E6 gắn vào P53 làm thoái hóa P53 và kích thích TERT (bất tử hóa); E7 gắn vào RB giải phóng E2F kích hoạt phiên mã và ức chế p21 giúp phức hợp CDK4/cyclin D đẩy mạnh chu kỳ tế bào G1-S."
      },
      {
        q: "Virus RNA nào là retrovirus duy nhất được xác định rõ ràng gây ung thư ở người (bệnh bạch cầu/lymphom tế bào T trưởng thành – ATLL) và nó có ái lực với dòng tế bào nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Mục 5.3.1 (tr. 167)",
        options: [
          "HTLV-1, có ái lực với lympho bào T CD4+",
          "HIV-1, có ái lực với đại thực bào Kupffer",
          "HCV, có ái lực với tế bào gan",
          "EBV, có ái lực với lympho bào B qua thụ thể CD21"
        ],
        answer: 0,
        explain: "Trang 167: HTLV-1 là retrovirus (virus RNA) duy nhất ở người được xác định gây ung thư (ATLL), có ái lực với lympho bào T CD4+ tương tự HIV."
      },
      {
        q: "Trong cơ chế sinh lymphom Burkitt do EBV (Hình 8.15), đột biến di truyền quyết định xảy ra khi tế bào B thoát khỏi kiểm soát CTL là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Mục 5.3.2 & Hình 8.15 (tr. 169)",
        options: [
          "Đột biến chuyển vị gen MYC giữa NST 8 và NST 14 – t(8;14)",
          "Đột biến chuyển vị tạo gen tổ hợp BCR::ABL – t(9;22)",
          "Khuếch đại gen ERBB2 (HER2) trên NST 17",
          "Mất đoạn gen PTEN trên NST 10"
        ],
        answer: 0,
        explain: "Trang 169 & Hình 8.15: EBV gắn CD21 tế bào B gây tăng sinh đa dòng (EBNA2, LMP1); khi giảm biểu hiện gen EBV thoát miễn dịch và xảy ra đột biến chuyển vị MYC (NST 8 & 14) → tăng cường protein MYC → phát triển quá mức dòng B thành lymphom Burkitt."
      },
      {
        q: "Chuỗi tiến triển mô bệnh học điển hình trong viêm dạ dày mạn do vi khuẩn Helicobacter pylori dẫn đến ung thư diễn ra theo thứ tự nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Mục 5.3.3 (tr. 169–170)",
        options: [
          "Viêm dạ dày mạn → Teo niêm mạc dạ dày → Chuyển sản ruột → Loạn sản → Ung thư (xảy ra ở ~3% người nhiễm)",
          "Chuyển sản gai → Phì đại tế bào viền → Hoại tử mỡ → Sarcom cơ trơn",
          "Loạn sản tại chỗ → Vôi hóa chuyển hóa → Tăng sản tuyến đơn thuần → Lymphom Burkitt",
          "Thoái hóa phồng → Thoái sản cấp tính → Phản ứng tự thực → Bướu quái dạ dày"
        ],
        answer: 0,
        explain: "Trang 170: Chuỗi tiến triển mô bệnh học kinh điển do H. pylori (kéo dài hàng thập kỷ ở ~3% người nhiễm): Viêm dạ dày mạn ban đầu → Teo niêm mạc dạ dày → Chuyển sản ruột → Loạn sản → Ung thư (carcinom tuyến dạ dày hoặc lymphom vùng rìa ngoài hạch)."
      },
      {
        q: "Loại tổn thương tiền ung thư nào sau đây có nguy cơ chuyển dạng ác tính cao nhất (có thể lên đến 50% theo giáo trình)?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Mục 4.4 (tr. 164)",
        options: [
          "Bướu tuyến nhánh (villous adenoma) của đại tràng",
          "Bướu cơ trơn tử cung (leiomyoma)",
          "Bướu mỡ lành tính dưới da (lipoma)",
          "Polyp dây thanh quản do viêm mạn"
        ],
        answer: 0,
        explain: "Trang 164: Bướu tuyến nhánh của đại tràng được coi là tổn thương tiền ung thư nguy cơ cao (có thể lên đến 50%); trái lại bướu cơ trơn tử cung hầu như không chuyển thành ác tính."
      }
    ]
  },

  // ========================================================================
  // BÀI 6: 10 ĐẶC ĐIỂM CỐT LÕI CỦA TẾ BÀO UNG THƯ & KHÍA CẠNH LÂM SÀNG
  // ========================================================================
  {
    id: 6,
    group: "II. GIẢI PHẪU BỆNH BƯỚU",
    title: "Bài 6: 10 Đặc điểm Cốt lõi Tế bào Ung thư & Khía cạnh Lâm sàng",
    shortTitle: "10 Hallmarks & Lâm sàng Bướu",
    textbookRef: "Giải phẫu bệnh đại cương YDS – Bài 8 (Mục 6, 7 & 8, tr. 170–183)",
    summary: "Phân tích trọn vẹn 10 đặc điểm cốt lõi (Warburg & 2-HG Hình 8.16–8.17, Apoptosis Hình 8.18, Di căn Hình 8.19, Chốt miễn dịch Hình 8.20, Điều trị đích Hình 8.21); Hội chứng suy mòn, Bảng 8.6 (Hội chứng cận ung), Phân độ – TNM & Chẩn đoán GPB.",
    simId: "sim_hallmarks_paraneo",
    simTitle: "Phòng Lab Ghép cặp 10 Hallmarks – Thuốc Đích & Hội chứng Cận ung",
    figureIds: ["H8.16", "H8.17", "H8.18", "H8.19", "H8.20", "H8.21"],
    theoryHtml: `
      <div class="card">
        <div class="card-title">🧬 6. Mười Đặc điểm Cốt lõi của Tế bào Ung thư (Hallmarks) &amp; Điều trị Đích <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H8.21')">🖼️ Xem Hình 8.21</button></div>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Đặc điểm Cốt lõi (tr. 170–179)</th>
                <th>Cơ chế Phân tử &amp; Ví dụ Chuẩn Giáo trình</th>
                <th>Liệu pháp Đích Tương ứng (Hình 8.21)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Tự chủ tín hiệu tăng trưởng</strong></td>
                <td>Đột biến chuyển <em>proto-oncogenes</em> → <em>oncogenes</em> (oncoproteins):<br/>• <em>Tự tiết yếu tố tăng trưởng:</em> Glioblastoma tiết <strong>PDGF</strong> &amp; khuếch đại thụ thể PDGF.<br/>• <em>Thụ thể:</em> Khuếch đại <strong>HER2 (ERBB2)</strong> (~20% ung thư vú).<br/>• <em>Hạ nguồn:</em> Đột biến điểm <strong>RAS</strong> (~20% ung thư) khóa ở trạng thái gắn <strong>GTP</strong> → kích hoạt liên tục <strong>RAF/MAP kinase &amp; PI3K/AKT</strong>.<br/>• <em>Phiên mã:</em> <strong>MYC</strong> (chuyển vị trong Burkitt; khuếch đại trong K vú, phổi, đại tràng).</td>
                <td>Kháng thể đơn dòng kháng HER2; Chất ức chế <strong>EGFR</strong> (Erlotinib, Gefitinib...).</td>
              </tr>
              <tr>
                <td><strong>2. Không nhạy tín hiệu ức chế tăng trưởng</strong></td>
                <td>Bất hoạt gen đè nén bướu:<br/>• <strong>RB ("Người điều hành"):</strong> Giảm phosphoryl → gắn ức chế <strong>E2F</strong>; bị phosphoryl hóa bởi Cyclin D–CDK4/6 &amp; Cyclin E–CDK2 để qua điểm kiểm soát <strong>G1/S</strong>. Mất cả 2 alen theo giả thuyết <strong>"two-hit" của Knudson</strong> (u nguyên bào võng mạc); ít nhất 1 trong 4 yếu tố <strong>(p16, Cyclin D, CDK4, RB)</strong> đột biến ở hầu hết ung thư.<br/>• <strong>TP53 ("Người canh gác"):</strong> Đột biến thường gặp nhất. Ngừng G1 qua <strong>p21 (CDKI)</strong> để sửa DNA; ngừng vĩnh viễn (lão hóa); hoặc apoptosis qua <strong>PUMA</strong>. Hội chứng <strong>Li-Fraumeni</strong> (di truyền 1 alen TP53 đột biến).</td>
                <td>Chất ức chế enzym kinase phụ thuộc cyclin (<strong>CDK4/6 inhibitors</strong>).</td>
              </tr>
              <tr>
                <td><strong>3. Thay đổi trao đổi chất</strong> <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H8.16')">🖼️ H8.16</button> <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H8.17')">🖼️ H8.17</button></td>
                <td>• <strong>Hiệu ứng Warburg (đường phân hiếu khí):</strong> Ưu tiên chuyển glucose thành <strong>lactate</strong> ngay cả khi đủ oxy (thúc đẩy bởi RTK, RAS, MYC; bị ức chế bởi P53) để tạo nguyên liệu tổng hợp nucleotid, protein, lipid.<br/>• <strong>Chất chuyển hóa sinh ung (Oncometabolite):</strong> Đột biến <strong>IDH (mIDH)</strong> sản xuất <strong>2-hydroxyglutarate (2-HG)</strong> → ức chế <strong>TET2</strong> → tăng methyl hóa DNA → biến đổi tế bào (Hình 8.17).</td>
                <td>Chất ức chế đường phân hiếu khí; thuốc ức chế mIDH.</td>
              </tr>
              <tr>
                <td><strong>4. Lẩn trốn chết theo chương trình</strong> <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H8.18')">🖼️ H8.18</button></td>
                <td>Gián đoạn con đường nội sinh: Cân bằng <em>pro-apoptotic</em> (BAX, BAK) vs <em>anti-apoptotic</em> (BCL-2, BCL-XL, MCL-1). Cơ chế lẩn trốn: (1) Mất P53 (đột biến TP53, tăng MDM2); (2) Tăng BCL-2 như chuyển vị <strong>t(14;18)</strong> ở <strong>lymphom nang</strong>; (3) Tăng <strong>IAP</strong> ức chế caspase.</td>
                <td>Chất đối kháng <strong>BCL-2</strong> (Venetoclax).</td>
              </tr>
              <tr>
                <td><strong>5. Tiềm năng nhân lên vô hạn</strong></td>
                <td>Tế bào thường phân chia tối đa ~<strong>70 lần</strong> do ngắn telomere. <strong>85–95%</strong> ung thư tái kích hoạt enzym <strong>telomerase</strong> (thường qua đột biến vùng khởi động gen <strong>TERT</strong>) để bất tử hóa (đặc tính giống tế bào gốc).</td>
                <td>Chất ức chế enzym <strong>telomerase</strong>.</td>
              </tr>
              <tr>
                <td><strong>6. Tân sinh mạch</strong></td>
                <td>Bướu đặc không thể phát triển quá <strong>1–2 mm</strong> nếu thiếu nguồn cấp máu. Thiếu oxy ổn định <strong>HIF1α</strong> → kích hoạt phiên mã <strong>VEGF</strong>; mất TP53 và hoạt hóa RAS/MYC cũng tăng sản xuất VEGF.</td>
                <td>Chất đối kháng tín hiệu <strong>VEGF</strong> (kháng thể <strong>bevacizumab</strong>).</td>
              </tr>
              <tr>
                <td><strong>7. Xâm lấn và di căn</strong> <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H8.19')">🖼️ H8.19</button></td>
                <td>Nới lỏng liên kết (giảm <strong>E-cadherin</strong>) → tiết protease tiêu hủy màng đáy/ECM → di chuyển theo hóa hướng động → xâm nhập mạch → thuyên tắc → thoát mạch → tạo ổ di căn. Chuyển dạng biểu mô–trung mô (<strong>EMT</strong>) điều khiển bởi <strong>SNAIL</strong> và <strong>TWIST</strong> (ức chế E-cadherin).</td>
                <td>Chất ức chế con đường <strong>HGF/c-Met</strong>.</td>
              </tr>
              <tr>
                <td><strong>8. Lẩn tránh giám sát miễn dịch</strong> <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H8.20')">🖼️ H8.20</button></td>
                <td>Kháng nguyên bướu (tân kháng nguyên, protein biểu hiện quá mức như <em>tyrosinase</em> ở melanom, kháng nguyên virus HPV/EBV). Ung thư biểu hiện quá mức <strong>PD-L1</strong> gắn PD-1 trên CTL, hoặc khai thác chốt <strong>CTLA-4</strong> tại hạch. Đáp ứng ngoạn mục 10–30% ở melanom, phổi, bàng quang.</td>
                <td>Kháng thể đơn dòng kháng <strong>CTLA-4</strong>, kháng <strong>PD-1 / PD-L1</strong>.</td>
              </tr>
              <tr>
                <td><strong>9. Bất ổn bộ gen</strong></td>
                <td>Khiếm khuyết 3 hệ thống sửa chữa DNA:<br/>• <em>Sửa chữa bắt cặp sai (MMR):</em> "kiểm tra chính tả" → <strong>Hội chứng Lynch</strong> (K đại trực tràng không polyp di truyền – HNPCC).<br/>• <em>Cắt bỏ nucleotide:</em> sửa tổn thương UV → bệnh <strong>khô da sắc tố (Xeroderma Pigmentosum)</strong>.<br/>• <em>Tái tổ hợp tương đồng:</em> sửa đứt gãy sợi đôi → đột biến dòng mầm <strong>BRCA1, BRCA2</strong> (K vú &amp; buồng trứng di truyền).</td>
                <td>Chất ức chế <strong>MDM2</strong> và <strong>PARP</strong>.</td>
              </tr>
              <tr>
                <td><strong>10. Phản ứng viêm thúc đẩy ung thư</strong></td>
                <td>Tế bào viêm trong vi môi trường bướu giải phóng yếu tố tăng trưởng (EGF), tiết protease phá ECM hỗ trợ xâm lấn, giải phóng VEGF tân sinh mạch và tạo vi môi trường ức chế miễn dịch.</td>
                <td>Điều trị kháng sinh cho <em>H. pylori</em> / kháng viêm đích.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="card-title">🩺 7.1. Ảnh hưởng Lâm sàng, Suy mòn &amp; Bảng 8.6 Hội chứng Cận ung</div>
          <ul class="theory-list">
            <li><strong>Ảnh hưởng tại chỗ &amp; toàn thân:</strong> Chèn ép/xâm lấn; loét chảy máu/nhiễm khuẩn; tiết hormone/chất sinh học bất thường; rối loạn miễn dịch; suy kiệt toàn thân. <em>Vị trí bướu quyết định nguy hiểm</em> (u tuyến yên nhỏ → suy tuyến nặng; u cơ trơn nhỏ thành mạch thận → tăng huyết áp; K đường mật nhỏ → tử vong do tắc mật).</li>
            <li><strong>Hội chứng suy mòn (Cachexia):</strong> Mất khối cơ + mỡ, suy nhược, chán ăn, thiếu máu; KHÔNG chỉ do ăn kém mà do tăng tiêu hao năng lượng và rối loạn chuyển hóa qua cytokine <strong>TNF, IL-1, IFN-γ</strong> (điều trị chính bằng kiểm soát u nguyên phát; hỗ trợ dinh dưỡng đơn thuần ít hiệu quả).</li>
            <li><strong>Hội chứng cận ung (10–15% bệnh nhân ung thư):</strong> Biểu hiện không trực tiếp do xâm lấn/di căn và không do hoạt động nội tiết bình thường của mô gốc. Có thể là dấu hiệu đầu tiên giúp phát hiện ung thư sớm!</li>
          </ul>
          <div class="table-responsive">
            <table class="med-table">
              <thead><tr><th colspan="3">Bảng 8.6. Hội chứng cận ung (8 dòng đầy đủ tr. 180)</th></tr><tr><th>Hội chứng</th><th>Bướu liên quan</th><th>Cơ chế / Nguyên nhân</th></tr></thead>
              <tbody>
                <tr><td><strong>Hội chứng Cushing</strong></td><td>Ung thư phổi tế bào nhỏ, tụy, khối bướu thần kinh</td><td>Tiết ACTH hoặc chất giống ACTH lạc chỗ</td></tr>
                <tr><td><strong>Tăng calci máu</strong></td><td>Ung thư phổi tế bào gai, vú, thận, bạch cầu T</td><td>Tiết PTHrP, TGF-α hoặc vitamin D hoạt hóa</td></tr>
                <tr><td><strong>SIADH (ADH không phù hợp)</strong></td><td>Ung thư phổi tế bào nhỏ, bướu nội sọ</td><td>Tiết ADH lạc chỗ</td></tr>
                <tr><td><strong>Hạ đường huyết</strong></td><td>Sarcom sợi, ung thư buồng trứng</td><td>Tiết insulin hoặc chất giống insulin</td></tr>
                <tr><td><strong>Đa hồng cầu</strong></td><td>Ung thư thận, bướu mạch máu tiểu não, gan</td><td>Tiết erythropoietin lạc chỗ</td></tr>
                <tr><td><strong>Nhược cơ, rối loạn thần kinh</strong></td><td>Ung thư phế quản, tuyến ức, vú, bướu quái</td><td>Cơ chế miễn dịch</td></tr>
                <tr><td><strong>Ngón tay dùi trống, bệnh xương khớp phì đại</strong></td><td>Ung thư phổi</td><td>Cơ chế chưa rõ</td></tr>
                <tr><td><strong>Tăng đông, huyết khối</strong></td><td>Ung thư tuyến tụy, phổi, các bệnh khác</td><td>Sản phẩm khối bướu hoạt hóa đông máu</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="card">
          <div class="card-title">📋 7.2 &amp; 7.3. Độ Mô học, Phân Giai đoạn TNM &amp; Chẩn đoán Ung thư</div>
          <ul class="theory-list">
            <li><strong>Độ mô học (Grading):</strong> Đánh giá mức độ ác tính (2 cấp thấp/cao, 3 cấp I–III, hoặc 4 cấp I–IV) dựa vào mức độ biệt hóa, hình thái tế bào, chỉ số phân bào và hoại tử u. <em>Độ càng cao → ác tính càng tăng</em>.</li>
            <li><strong>Phân giai đoạn TNM (Staging):</strong> Trước mổ (<strong>cTNM</strong>) hoặc sau giải phẫu bệnh (<strong>pTNM</strong>):
              <br/>• <strong>T (Tumor):</strong> kích thước &amp; mức độ xâm lấn bướu nguyên phát (T0–T4).
              <br/>• <strong>N (Nodes):</strong> di căn hạch vùng (N0–N3).
              <br/>• <strong>M (Metastasis):</strong> di căn xa (M0: không, M1: có).
              <br/>🔑 <strong>Giai đoạn bệnh quyết định tiên lượng và hướng điều trị, có giá trị lâm sàng cao hơn phân loại độ mô học.</strong></li>
            <li><strong>Các phương pháp chẩn đoán ung thư:</strong>
              <br/>• <strong>Sinh thiết:</strong> <strong>TIÊU CHUẨN VÀNG</strong> xác định bản chất tổn thương. <em>Sinh thiết lạnh</em> thực hiện trong lúc phẫu thuật cho kết quả nhanh định hướng xử trí ngay.
              <br/>• <strong>Chọc hút kim nhỏ (FNA):</strong> Xâm lấn tối thiểu cho tổn thương dễ sờ/dưới hướng dẫn hình ảnh.
              <br/>• <strong>Tế bào học:</strong> Phết tế bào cổ tử cung (PAP) tầm soát sớm; dịch phế quản, bàng quang, màng bụng, màng phổi.
              <br/>• <strong>Hóa mô miễn dịch:</strong> Xác định nguồn gốc &amp; dấu ấn phân tử (PSA trong K tiền liệt tuyến di căn; thụ thể ER trong K vú).
              <br/>• <strong>Dấu ấn bướu (Tumor markers):</strong> Dùng chủ yếu <strong>theo dõi đáp ứng điều trị hoặc phát hiện tái phát</strong> (KHÔNG đủ độ nhạy &amp; đặc hiệu tầm soát cộng đồng): <strong>PSA</strong> (tiền liệt tuyến), <strong>CEA</strong> (đại tràng, tụy, vú), <strong>AFP</strong> (gan &amp; bướu túi noãn hoàng), <strong>CA-125</strong> (buồng trứng), <strong>CA 19-9</strong> (tụy &amp; đường tiêu hóa).</li>
          </ul>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Hội chứng cận ung nào sau đây thường gặp ở ung thư phổi tế bào gai, ung thư vú, thận và bạch cầu T thông qua cơ chế tiết PTHrP, TGF-α hoặc vitamin D hoạt hóa?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Bảng 8.6 (tr. 180)",
        options: [
          "Tăng calci máu",
          "Hội chứng SIADH (tiết ADH không phù hợp)",
          "Đa hồng cầu do erythropoietin lạc chỗ",
          "Hội chứng Cushing do tiết ACTH lạc chỗ"
        ],
        answer: 0,
        explain: "Bảng 8.6 (tr. 180): Tăng calci máu gặp ở ung thư phổi tế bào gai, vú, thận, bạch cầu T (tiết PTHrP, TGF-α, vitamin D hoạt hóa). Ngược lại, ung thư phổi tế bào nhỏ thường gây Hội chứng Cushing (ACTH) và SIADH (ADH)."
      },
      {
        q: "Trong con đường điều hòa chu kỳ tế bào bởi protein RB ('người điều hành' G1/S), yếu tố nào trực tiếp phosphoryl hóa làm bất hoạt RB để giải phóng E2F cho tế bào đi vào pha S?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Mục 6.2.1 (tr. 171)",
        options: [
          "Các phức hợp Cyclin D–CDK4/6 và Cyclin E–CDK2",
          "Protein MDM2 và phức hợp Apaf-1–Procaspase-9",
          "Enzym IDH đột biến thông qua chất chuyển hóa 2-HG",
          "Yếu tố phiên mã HIF1α và VEGF"
        ],
        answer: 0,
        explain: "Trang 171: Ở trạng thái hoạt động (giảm phosphoryl hóa), RB gắn và ức chế E2F. Khi có tín hiệu tăng trưởng, phức hợp Cyclin D–CDK4/6 và Cyclin E–CDK2 sẽ phosphoryl hóa làm bất hoạt RB, giải phóng E2F kích hoạt phiên mã vượt điểm kiểm soát G1/S."
      },
      {
        q: "Bản chất của 'Hiệu ứng Warburg' (đường phân hiếu khí) ở tế bào ung thư và ý nghĩa sinh học chính của nó là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Mục 6.3 & Hình 8.16 (tr. 172)",
        options: [
          "Ưu tiên chuyển glucose thành lactate ngay cả khi có đủ oxy nhằm cung cấp các chất trung gian đường phân tổng hợp nucleotid, acid amin, protein và lipid",
          "Tăng tối đa hiệu suất tổng hợp ATP tại ty thể hơn hẳn tế bào bình thường mà không cần tiêu thụ glutamine",
          "Chỉ xảy ra khi tế bào ung thư thiếu oxy hoàn toàn trong vùng hoại tử bã đậu",
          "Được kích hoạt bởi protein P53 nhằm ức chế các gen sinh ung như RAS và MYC"
        ],
        answer: 0,
        explain: "Trang 172: Dù kém hiệu quả về mặt sản xuất ATP, đường phân hiếu khí (tạo lactate dù đủ oxy) dưới điều hòa của RTK, RAS, MYC (bị P53 ức chế) giúp tế bào ung thư tích lũy chất trung gian sinh tổng hợp đại phân tử phục vụ tăng trưởng."
      },
      {
        q: "Chất chuyển hóa sinh ung 2-hydroxyglutarate (2-HG) do enzym isocitrate dehydrogenase đột biến (mIDH) tạo ra thúc đẩy biến đổi tế bào bằng cơ chế nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Mục 6.3 & Hình 8.17 (tr. 173)",
        options: [
          "Ức chế các enzym điều hòa (như TET2) làm tăng methyl hóa DNA và thay đổi biểu hiện gen",
          "Ức chế trực tiếp bơm Na⁺/K⁺-ATPase gây sưng phù tế bào cấp tính",
          "Hoạt hóa trực tiếp phức hợp DISC gây chết tế bào theo chương trình",
          "Kích thích trực tiếp sản xuất erythropoietin gây đa hồng cầu"
        ],
        answer: 0,
        explain: "Trang 173 & Hình 8.17: 2-HG ức chế enzym khử methyl TET2 → tăng methyl hóa DNA → thay thế biểu hiện gen → thúc đẩy biến đổi tế bào."
      },
      {
        q: "Khối bướu đặc thường không thể phát triển vượt quá đường kính 1–2 mm nếu không có tân sinh mạch. Yếu tố phiên mã nào ổn định trong môi trường thiếu oxy để kích hoạt VEGF?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Mục 6.6 (tr. 175)",
        options: [
          "HIF1α (đồng thời có thể nhắm đích điều trị bằng kháng thể đơn dòng trung hòa VEGF như bevacizumab)",
          "SNAIL và TWIST (ức chế E-cadherin trong chuyển dạng EMT)",
          "PUMA và BAX (mở kênh màng ngoài ty thể)",
          "p21/CIP1 (gây ngừng chu kỳ tế bào tại pha G1)"
        ],
        answer: 0,
        explain: "Trang 175: Bướu đặc không vượt quá 1–2 mm nếu thiếu nguồn máu; môi trường thiếu oxy ổn định HIF1α → kích hoạt phiên mã VEGF (nhắm đích bằng kháng thể trung hòa VEGF như bevacizumab)."
      },
      {
        q: "Quá trình chuyển dạng biểu mô – trung mô (EMT) giúp tế bào ung thư tăng khả năng di chuyển và xâm lấn được điều khiển chủ yếu bởi hai yếu tố phiên mã nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Mục 6.7 (tr. 176)",
        options: [
          "SNAIL và TWIST (vốn là các chất ức chế biểu hiện E-cadherin)",
          "E2F và MYC (thúc đẩy vượt điểm kiểm soát G1/S)",
          "P53 và RB (gen đè nén bướu kiểm soát bộ gen)",
          "EBNA2 và LMP1 (protein của virus Epstein-Barr)"
        ],
        answer: 0,
        explain: "Trang 176: EMT giúp tế bào biểu mô ung thư mất đặc tính biểu mô (giảm E-cadherin) và mang đặc điểm trung mô tăng di chuyển, điều khiển bởi các yếu tố phiên mã như SNAIL và TWIST."
      },
      {
        q: "Khiếm khuyết ở từng hệ thống sửa chữa DNA trong cơ thể gây ra các hội chứng ung thư di truyền đặc trưng nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Mục 6.9 (tr. 178)",
        options: [
          "Bắt cặp sai → Hội chứng Lynch (HNPCC); Cắt bỏ nucleotide → Khô da sắc tố (XP); Tái tổ hợp tương đồng → BRCA1/BRCA2 (K vú, buồng trứng)",
          "Bắt cặp sai → Khô da sắc tố (XP); Cắt bỏ nucleotide → Hội chứng Li-Fraumeni; BRCA1 → U nguyên bào võng mạc",
          "Cắt bỏ nucleotide → Hội chứng Lynch; Tái tổ hợp tương đồng → Lymphom Burkitt; Bắt cặp sai → Đa u tủy xương",
          "Tái tổ hợp tương đồng → Hội chứng Sjögren; Bắt cặp sai → Bướu Wilms"
        ],
        answer: 0,
        explain: "Trang 178: (1) Sửa chữa bắt cặp sai ('kiểm tra chính tả') → Hội chứng Lynch (HNPCC); (2) Sửa chữa cắt bỏ nucleotide (sửa tổn thương UV) → Khô da sắc tố (Xeroderma Pigmentosum); (3) Sửa chữa tái tổ hợp tương đồng (sửa đứt sợi đôi) → Đột biến dòng mầm BRCA1, BRCA2 (K vú, buồng trứng di truyền)."
      },
      {
        q: "Cơ chế tác động của hai nhóm thuốc ức chế điểm kiểm soát miễn dịch Anti-CTLA-4 và Anti-PD-1/PD-L1 khác nhau về vị trí giải phẫu tác động như thế nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Mục 6.8 & Hình 8.20 (tr. 177)",
        options: [
          "Anti-CTLA-4 tác động chủ yếu tại hạch lympho giúp hoạt hóa CTL qua B7–CD28; Anti-PD-1/PD-L1 tác động tại mô u gỡ ức chế giúp CTL giải phóng hạt độc giết tế bào u",
          "Anti-CTLA-4 chỉ ức chế tạo mạch VEGF tại mô u; Anti-PD-1 chỉ tác động tại tủy xương",
          "Cả hai thuốc đều chỉ gắn vào protein E-cadherin làm tế bào u kết dính lại",
          "Anti-PD-L1 tác động tại hạch lympho còn Anti-CTLA-4 ức chế men telomerase tại nhân tế bào u"
        ],
        answer: 0,
        explain: "Hình 8.20 (tr. 177): (A) Tại hạch lympho: phong tỏa CTLA-4 tạo điều kiện cho B7–CD28 hoạt hóa CTL CD8+; (B) Tại mô u: ức chế PD-1 hoặc PD-L1 loại bỏ tín hiệu hãm, kích hoạt CTL tiết hạt độc tiêu diệt tế bào u."
      },
      {
        q: "Trong thực hành lâm sàng ung thư học, nhận định nào ĐÚNG về vai trò của dấu ấn bướu huyết thanh (PSA, CEA, AFP, CA-125, CA 19-9)?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Mục 7.3 & Mục 8 (tr. 181–182)",
        options: [
          "Dùng chủ yếu để theo dõi đáp ứng điều trị hoặc phát hiện tái phát; nhìn chung chưa đủ độ nhạy và đặc hiệu để tầm soát ung thư cộng đồng, còn sinh thiết mô bệnh học mới là tiêu chuẩn vàng",
          "Thay thế hoàn toàn sinh thiết mô bệnh học trong chẩn đoán xác định mọi loại ung thư",
          "CA 19-9 là xét nghiệm đặc hiệu nhất cho ung thư tuyến tiền liệt di căn",
          "AFP chỉ tăng trong ung thư tụy và hoàn toàn không liên quan bướu túi noãn hoàng hay gan"
        ],
        answer: 0,
        explain: "Trang 181–182: Các dấu ấn bướu dùng chủ yếu để theo dõi đáp ứng điều trị hoặc tái phát (PSA: tiền liệt tuyến; CEA: đại tràng/tụy/vú; AFP: gan/túi noãn hoàng; CA-125: buồng trứng; CA 19-9: tụy/tiêu hóa); chưa đủ độ đặc hiệu & nhạy để tầm soát cộng đồng; sinh thiết mô bệnh học là tiêu chuẩn vàng."
      },
      {
        q: "So sánh giữa Độ mô học (Grading) và Phân giai đoạn TNM (Staging) trong ung thư, kết luận lâm sàng nào được khẳng định trong giáo trình?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Mục 7.2 (tr. 181)",
        options: [
          "Giai đoạn bệnh (TNM) quyết định tiên lượng và hướng điều trị, có giá trị lâm sàng cao hơn phân loại độ mô học",
          "Độ mô học luôn có giá trị tiên lượng và quyết định điều trị cao hơn phân giai đoạn TNM",
          "Chữ N trong TNM đại diện cho mức độ hoại tử tế bào bướu",
          "Hệ thống pTNM được xác định hoàn toàn dựa trên dữ liệu lâm sàng trước phẫu thuật"
        ],
        answer: 0,
        explain: "Trang 181: cTNM đánh giá trước phẫu thuật (lâm sàng), pTNM đánh giá sau phẫu thuật (giải phẫu bệnh). Trong đó, giai đoạn bệnh quyết định tiên lượng và hướng điều trị, có giá trị lâm sàng cao hơn phân loại (độ mô học)."
      },
      {
        q: "Hội chứng suy mòn (Cachexia) ở bệnh nhân ung thư tiến triển có đặc điểm bệnh sinh và nguyên tắc xử trí nào đúng nhất?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Mục 7.1.1 (tr. 180)",
        options: [
          "Liên quan tăng tiêu hao năng lượng và rối loạn chuyển hóa do cytokine (TNF, IL-1, IFN-γ); điều trị chủ yếu dựa trên kiểm soát bướu nguyên phát vì dinh dưỡng đơn thuần ít hiệu quả",
          "Chỉ đơn thuần do khối u chèn ép thực quản gây ăn kém và khỏi hoàn toàn nếu truyền dinh dưỡng tích cực",
          "Đặc trưng bởi tăng khối lượng cơ vân và tích tụ mô mỡ dưới da",
          "Do tế bào bướu tiết quá mức hormone tuyến cận giáp PTHrP gây kiềm chuyển hóa"
        ],
        answer: 0,
        explain: "Trang 180: Suy mòn gây mất cơ và mỡ kèm suy nhược, chán ăn, thiếu máu do tăng tiêu hao năng lượng và cytokine (TNF, IL-1, IFN-γ) từ tế bào bướu và vật chủ; điều trị chủ yếu dựa vào kiểm soát bướu nguyên phát, dinh dưỡng đơn thuần ít hiệu quả."
      },
      {
        q: "Bệnh nhân nữ trẻ được chẩn đoán mắc hội chứng Li-Fraumeni (di truyền một alen gen TP53 đột biến) có nguy cơ rất cao phát triển nhiều loại ung thư. Tại sao tế bào bình thường khó vượt qua hàng rào lão hóa nếu thiếu tái kích hoạt telomerase?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Mục 6.2.2 & 6.5 (tr. 172, 175)",
        options: [
          "Tế bào bình thường chỉ phân chia giới hạn khoảng 70 lần trước khi rút ngắn telomere đi vào lão hóa; 85–95% ung thư vượt rào cản này nhờ tái kích hoạt telomerase (thường qua đột biến promoter TERT)",
          "Tế bào bình thường phân chia vô hạn nhưng chết ngay ở lần thứ 10 vì thiếu cytochrome c",
          "Vì telomerase chỉ có chức năng phân hủy protein P53 đột biến tại bào tương",
          "Vì chỉ có những tế bào có đường phân hiếu khí mới biểu hiện được gen TP53"
        ],
        answer: 0,
        explain: "Trang 175: Tế bào bình thường phân chia giới hạn ~70 lần trước khi lão hóa do rút ngắn telomere; 85–95% ung thư tái kích hoạt telomerase (thường do đột biến vùng khởi động gen TERT) để đạt khả năng nhân lên bất tử."
      }
    ]
  }
];
