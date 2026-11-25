// ==========================================================================
// DỮ LIỆU BÀI HỌC PHẦN 3: CHUYÊN ĐỀ III – BỆNH HỌC PHÂN TỬ TRONG UNG THƯ
// Chuẩn Giáo trình Giải phẫu bệnh đại cương (Phạm Quốc Thắng, Ngô Quốc Đạt, Hoàng Anh Vũ) – Bài 9 (tr. 184–191)
// Gồm Bài 7, Bài 8
// ==========================================================================

window.LESSONS_PART3 = [
  // ========================================================================
  // BÀI 7: RỐI LOẠN TĂNG SINH TẾ BÀO – RTK, KHUẾCH ĐẠI, ĐỘT BIẾN, GEN TỔ HỢP & BIỂU SINH
  // ========================================================================
  {
    id: 7,
    group: "III. BỆNH HỌC PHÂN TỬ TRONG UNG THƯ",
    title: "Bài 7: Rối loạn Tăng sinh Tế bào: RTK, Khuếch đại – Đột biến – Gen Tổ hợp & Biểu sinh",
    shortTitle: "Tăng sinh TB, RTK & Gen Tổ hợp",
    textbookRef: "Giải phẫu bệnh đại cương YDS – Bài 9 (Mục 1 & Mục 2, tr. 184–187)",
    summary: "Truyền tín hiệu qua thụ thể bề mặt (4 vùng chức năng RTK) và thụ thể nhân (ER); Vai trò PTEN; 4 dạng bất thường gen (Khuếch đại ERBB2/EGFR/C-MYC, Đột biến EGFR/KRAS, Gen tổ hợp BCR::ABL/EML4::ALK/PML::RARA/TMPRSS2::ERG/CCDC6::RET/EWSR1::FLI1, Biểu sinh).",
    simId: "sim_rtk_fusion_pathway",
    simTitle: "Phòng Lab Phân tử RTK – EGFR/KRAS Kháng thuốc & Gen Tổ hợp",
    figureIds: ["H9.1"],
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">📡 1 &amp; 2.1. Truyền Tín hiệu Tăng sinh Bình thường &amp; Cấu trúc RTK</div>
          <ul class="theory-list">
            <li><strong>Khái niệm chung:</strong> Ung thư được xem như hiện tượng tiến hóa của tế bào: tích lũy dần đột biến gen làm mất kiểm soát hai quá trình đối nghịch là <strong>tăng sinh</strong> và <strong>chết tế bào theo chương trình</strong> → khởi đầu quá trình "bất tử". Tế bào bình thường nuôi cấy nếu thiếu tín hiệu tương tác sẽ nhanh chóng chết sau vài chu kỳ phân chia.</li>
            <li><strong>Chuỗi truyền tín hiệu qua thụ thể bề mặt:</strong> Chất truyền tín hiệu (ligand / phối tử) gắn phần ngoại bào → đổi cấu hình phần nội bào → hoạt hóa thụ thể (có hoạt tính men) → kích thích các <strong>phân tử truyền tín hiệu trung gian nội bào</strong> → truyền vào nhân qua <strong>yếu tố phiên mã</strong> → tổng hợp RNA &amp; protein thực hiện tăng sinh.</li>
            <li><strong>4 vùng chức năng (domain) của Thụ thể Tyrosine Kinase (RTK):</strong>
              <ol>
                <li><strong>Vùng ngoại bào:</strong> nơi gắn phối tử đặc hiệu (VD: yếu tố tăng trưởng biểu mô <em>EGF</em> gắn lên vùng ngoại bào thụ thể <em>EGFR</em>).</li>
                <li><strong>Vùng xuyên màng:</strong> neo giữ thụ thể trên màng kép phospholipid.</li>
                <li><strong>Vùng cận màng:</strong> giữ thụ thể ở trạng thái <strong>KHÔNG hoạt động</strong> khi chưa có phối tử gắn lên.</li>
                <li><strong>Vùng nội bào:</strong> mang <strong>hoạt tính men tyrosine kinase</strong> khi thụ thể được hoạt hóa.</li>
              </ol>
            </li>
            <li><strong>Kiểm soát âm:</strong> Tín hiệu vào nhân được kiểm soát bởi yếu tố điều hòa âm như <strong>PTEN</strong> (<em>phosphatase and tensin homologue deleted on chromosome 10</em>); trong nhiều ung thư PTEN mất hoạt động thúc đẩy tăng sinh quá mức.</li>
            <li><strong>Thụ thể nhân tế bào:</strong> Đường truyền khác không qua màng mà gắn trực tiếp thụ thể trong nhân, VD: estrogen kích thích tế bào biểu mô tuyến vú qua thụ thể <strong>ER</strong> (estrogen receptor).</li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">🧬 2.2. Bốn Dạng Bất thường Gen Thúc đẩy Tăng sinh trong Ung thư <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H9.1')">🖼️ Xem Hình 9.1</button></div>
          <div class="callout pearl">
            <div class="callout-title">1. Khuếch đại gen (Gene amplification)</div>
            <p>Tăng số lượng bản sao gen → tăng mRNA và lượng protein tương ứng:</p>
            <ul>
              <li><strong><em>ERBB2 (HER2)</em> trên NST số 17:</strong> gặp ở ~<strong>20%</strong> bệnh nhân ung thư vú → biểu hiện quá mức HER2 bề mặt → khống chế hiệu quả bằng <strong>kháng thể đơn dòng kháng HER2</strong>.</li>
              <li><strong><em>EGFR</em> trên NST số 7:</strong> gặp trong ung thư đại – trực tràng, ung thư đầu – cổ.</li>
              <li><strong><em>C-MYC</em> trên NST số 8:</strong> gặp trong lymphom, ung thư vú...</li>
            </ul>
          </div>
          <div class="callout trap">
            <div class="callout-title">2. Đột biến gen (Đột biến tăng chức năng proto-oncogene)</div>
            <ul>
              <li><strong>Gen <em>EGFR</em> (vùng nội bào):</strong> Gặp ở khoảng <strong>phân nửa (~50%)</strong> bệnh nhân <em>châu Á</em> mắc ung thư phổi không tế bào nhỏ → thụ thể EGFR tự hoạt hóa <strong>không phụ thuộc phối tử</strong> → dùng các <strong>phân tử nhỏ ức chế tyrosine kinase (TKI)</strong> đi qua màng tế bào đến đúng vị trí đột biến vùng nội bào để ức chế.</li>
              <li><strong>Gen <em>KRAS</em> trên NST số 12:</strong> Mã hóa phân tử truyền tín hiệu trung gian nội bào phía sau thụ thể; đột biến tăng chức năng thường gặp nhất tại <strong>codon 12 và codon 13</strong> → KRAS tự hoạt hóa không phụ thuộc thụ thể bề mặt → <strong>giải thích hiện tượng KHÁNG các liệu pháp bất hoạt thụ thể bề mặt</strong> nếu khối u đã có đột biến <em>KRAS</em>!</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🔗 2.2 (tiếp). Tạo Gen Tổ hợp (Fusion Genes) &amp; Thay đổi Ngoại gen (Biểu sinh)</div>
        <div class="grid-2">
          <div>
            <p style="font-size:14px;margin-bottom:8px;"><strong>3. Tạo gen tổ hợp (Chuyển vị, Đảo đoạn, Mất đoạn NST):</strong> Hai gen vốn độc lập được "lắp ghép" liền nhau tạo gen mới mã hóa protein mới mang chức năng khác hoặc tăng hoạt tính vượt trội:</p>
            <div class="table-responsive">
              <table class="med-table">
                <thead><tr><th>Gen tổ hợp</th><th>Cơ chế &amp; NST liên quan</th><th>Bệnh ung thư &amp; Ý nghĩa lâm sàng</th></tr></thead>
                <tbody>
                  <tr><td><strong><em>BCR::ABL</em></strong> (H9.1)</td><td>Chuyển vị giữa <strong>NST 9 (<em>ABL</em>)</strong> và <strong>NST 22 (<em>BCR</em>)</strong></td><td><strong>Bệnh bạch cầu mạn tính dòng tủy (CML)</strong>. Gen <em>BCR</em> trở thành vùng khởi động mạnh thúc đẩy phiên mã <em>ABL</em> (vốn yếu) → protein tyrosine kinase mạnh → ức chế bằng <strong>thuốc phân tử nhỏ TKI</strong>.</td></tr>
                  <tr><td><strong><em>EML4::ALK</em></strong></td><td><strong>Đảo đoạn NST số 2</strong> (cả hai cùng trên nhánh ngắn NST 2 nhưng phiên mã ngược chiều)</td><td>Một tỷ lệ nhỏ <strong>ung thư phổi</strong>. Gen <em>EML4</em> trở thành vùng khởi động tăng phiên mã <em>ALK</em> → tăng sinh quá mức.</td></tr>
                  <tr><td><strong><em>PML::RARA</em></strong></td><td>Chuyển vị tạo gen dung hợp</td><td><strong>Bệnh bạch cầu cấp tính dòng tủy</strong> (đặc trưng thể tiền tủy bào).</td></tr>
                  <tr><td><strong><em>TMPRSS2::ERG</em></strong></td><td>Tái sắp xếp NST</td><td><strong>Ung thư tuyến tiền liệt</strong>.</td></tr>
                  <tr><td><strong><em>CCDC6::RET</em></strong></td><td>Tái sắp xếp / chuyển vị</td><td><strong>Ung thư tuyến giáp</strong>.</td></tr>
                  <tr><td><strong><em>EWSR1::FLI1</em></strong></td><td>Chuyển vị tạo gen dung hợp</td><td><strong>Sarcom Ewing</strong>.</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <div class="callout formula">
              <div class="callout-title">4. Thay đổi Ngoại gen (Biểu sinh / Epigenetics)</div>
              <ul>
                <li>Là những hiệu chỉnh gen nhưng <strong>KHÔNG làm thay đổi cấu trúc DNA của gen</strong>.</li>
                <li>Thường gặp nhất là thay đổi mức độ <strong>methyl hóa các vị trí cytosine ở vùng khởi động (promoter)</strong> của các gen.</li>
                <li>Sự methyl hóa quá mức vùng khởi động khiến gen trở nên <strong>"im lặng"</strong>, không phiên mã tạo mRNA → hậu quả thiếu hụt protein chức năng.</li>
                <li>Thường gặp ở các gen đè nén bướu như <strong><em>BRCA1</em>, <em>PTEN</em></strong>...</li>
              </ul>
            </div>
            <div class="callout pearl">
              <div class="callout-title">🔑 Phân biệt 3 thuật ngữ dễ nhầm trong thi Đề cương</div>
              <ul>
                <li><strong>EGFR</strong> = <em>Thụ thể xuyên màng</em> (có 4 domain; ngoại bào gắn EGF, nội bào có men TK).</li>
                <li><strong>HER2 (ERBB2)</strong> = <em>Thụ thể xuyên màng</em> tế bào biểu mô (NST 17, khuếch đại trong 20% K vú).</li>
                <li><strong>KRAS</strong> = <em>Yếu tố truyền tín hiệu trung gian nội bào</em> (NST 12, đột biến codon 12/13 gây kháng thuốc kháng EGFR bề mặt).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Ở các tế bào biểu mô, con đường dẫn truyền tín hiệu gây tăng sinh tế bào có đặc điểm nào sau đây?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9, Câu tự lượng giá 1 (tr. 190)",
        options: [
          "KRAS là yếu tố truyền tín hiệu trung gian nội bào",
          "KRAS là một thụ thể xuyên màng",
          "EGFR là một yếu tố phiên mã, sẽ vào nhân tế bào",
          "EGFR là phối tử cho thụ thể bề mặt tế bào"
        ],
        answer: 0,
        explain: "Đáp án chuẩn giáo trình (Mục 2.1 & 2.2, Câu 1 tr. 190): KRAS (NST 12) là phân tử truyền tín hiệu trung gian nội bào nằm phía sau thụ thể bề mặt. EGFR là thụ thể xuyên màng (nhóm RTK), còn EGF mới là phối tử ngoại bào gắn lên EGFR."
      },
      {
        q: "Gen HER2 mã hóa cho yếu tố nào trong tế bào biểu mô tuyến vú?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9, Câu tự lượng giá 2 (tr. 190)",
        options: [
          "Thụ thể xuyên màng tế bào biểu mô",
          "Thụ thể nằm trên màng của nhân tế bào",
          "Chất truyền tín hiệu trung gian nội bào",
          "Yếu tố phiên mã cho các gen trong nhân"
        ],
        answer: 0,
        explain: "Đáp án chuẩn giáo trình (Mục 2.2 tr. 185 & Câu 2 tr. 190): Gen ERBB2 (HER2) trên nhiễm sắc thể số 17 mã hóa thụ thể HER2 xuyên màng trên bề mặt tế bào biểu mô tuyến vú; khuếch đại ở ~20% ca ung thư vú."
      },
      {
        q: "Trong bốn vùng chức năng (domain) cấu tạo nên một thụ thể có hoạt tính men tyrosine kinase (RTK), vùng nào giữ chức năng duy trì thụ thể ở trạng thái KHÔNG hoạt động khi chưa có phối tử gắn lên?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9, Mục 2.1 (tr. 185)",
        options: [
          "Vùng cận màng",
          "Vùng ngoại bào",
          "Vùng xuyên màng",
          "Vùng nội bào"
        ],
        answer: 0,
        explain: "Trang 185: Thụ thể tyrosine kinase gồm 4 vùng chức năng: vùng ngoại bào (gắn phối tử như EGF), vùng xuyên màng, vùng cận màng (giữ thụ thể không hoạt động khi chưa có phối tử) và vùng nội bào (hoạt tính men tyrosine kinase)."
      },
      {
        q: "Vì sao một khối u đã mang đột biến tăng chức năng gen KRAS (thường tại codon 12 và 13) thường KHÁNG lại các liệu pháp điều trị nhắm đích bất hoạt thụ thể bề mặt tế bào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9, Mục 2.2 (tr. 186)",
        options: [
          "Vì protein KRAS đột biến tự hoạt hóa và liên tục truyền tín hiệu hạ nguồn mà không còn phụ thuộc vào tín hiệu từ thụ thể bề mặt",
          "Vì gen KRAS nằm trên NST số 17 làm mất toàn bộ cấu trúc vùng ngoại bào của EGFR",
          "Vì đột biến KRAS gây methyl hóa toàn bộ promoter của gen ER trên màng nhân",
          "Vì KRAS trực tiếp phân hủy kháng thể đơn dòng trước khi thuốc kịp gắn thụ thể"
        ],
        answer: 0,
        explain: "Trang 186: Protein KRAS là phân tử truyền tín hiệu trung gian nội bào phía sau thụ thể bề mặt. Khi KRAS bị đột biến tăng chức năng (thường ở codon 12, 13), bản thân protein này tự hoạt hóa không cần tín hiệu thụ thể bề mặt → kháng liệu pháp bất hoạt thụ thể bề mặt."
      },
      {
        q: "Trong ung thư phổi không tế bào nhỏ ở bệnh nhân châu Á, khoảng phân nửa số ca mang đột biến vùng nội bào gen EGFR. Biện pháp điều trị đích hiệu quả cho trường hợp này là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9, Mục 2.2 (tr. 185–186)",
        options: [
          "Dùng các phân tử nhỏ ức chế tyrosine kinase (TKI) đi qua màng tế bào đến đúng vùng nội bào của thụ thể EGFR để ức chế",
          "Dùng kháng thể đơn dòng chỉ gắn phía ngoài màng tế bào để ngăn phối tử EGF gắn vào thụ thể đột biến",
          "Dùng chất kích thích methyl hóa promoter để làm im lặng gen PTEN",
          "Bổ sung estrogen kích hoạt thụ thể nhân ER ở tế bào biểu mô phế quản"
        ],
        answer: 0,
        explain: "Trang 185–186: Đột biến vùng nội bào EGFR làm thụ thể tự duy trì trạng thái hoạt hóa không phụ thuộc phối tử → phải dùng phân tử nhỏ ức chế tyrosine kinase (TKI) xuyên qua màng tế bào tác động trực tiếp lên vị trí đột biến nội bào."
      },
      {
        q: "Cặp nhiễm sắc thể và hai gen nào tương ứng với tình trạng khuếch đại gen EGFR và khuếch đại gen C-MYC được nêu trong Bài 9?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9, Mục 2.2 (tr. 185)",
        options: [
          "EGFR trên nhiễm sắc thể số 7 (đại–trực tràng, đầu–cổ) và C-MYC trên nhiễm sắc thể số 8 (lymphom, ung thư vú)",
          "EGFR trên nhiễm sắc thể số 17 và C-MYC trên nhiễm sắc thể số 12",
          "EGFR trên nhiễm sắc thể số 10 và C-MYC trên nhiễm sắc thể số 22",
          "EGFR trên nhiễm sắc thể số 2 và C-MYC trên nhiễm sắc thể số 9"
        ],
        answer: 0,
        explain: "Trang 185: Khuếch đại ERBB2 (HER2) trên NST 17 (20% K vú); khuếch đại EGFR trên NST 7 (K đại–trực tràng, đầu–cổ); khuếch đại C-MYC trên NST 8 (lymphom, K vú); KRAS trên NST 12; PTEN trên NST 10."
      },
      {
        q: "Cơ chế nào giải thích sự tăng sinh quá mức khi hình thành gen tổ hợp BCR::ABL do chuyển vị t(9;22) trong bệnh bạch cầu mạn tính dòng tủy (CML)?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9, Mục 2.2 & Hình 9.1 (tr. 186–187)",
        options: [
          "Gen BCR (trên NST 22) đóng vai trò vùng khởi động mạnh thúc đẩy phiên mã gen ABL (vốn phiên mã yếu trên NST 9), tạo protein BCR::ABL có hoạt tính tyrosine kinase nội bào cực mạnh",
          "Gen ABL đóng vai trò chất ức chế MDM2 làm P53 mất chức năng hoàn toàn",
          "Chuyển vị t(9;22) gây mất đoạn toàn bộ gen ABL làm tế bào tủy thiếu tyrosine kinase",
          "Gen BCR chuyển vị sang NST 9 giúp kích hoạt trực tiếp caspase 3 và caspase 8"
        ],
        answer: 0,
        explain: "Trang 186–187 & Hình 9.1: Ở tế bào bình thường, ABL trên NST 9 phiên mã hạn chế tạo TK nội bào yếu. Khi tạo gen tổ hợp BCR::ABL do t(9;22), gen BCR đóng vai trò vùng khởi động kích thích phiên mã ABL rất mạnh → protein BCR::ABL hoạt tính cao bị ức chế hiệu quả bởi TKI."
      },
      {
        q: "Gen tổ hợp EML4::ALK gặp trong một tỷ lệ nhỏ bệnh nhân ung thư phổi được hình thành qua cơ chế tái sắp xếp nhiễm sắc thể nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9, Mục 2.2 (tr. 187)",
        options: [
          "Đảo đoạn trên nhánh ngắn của nhiễm sắc thể số 2 (lắp ghép hai gen vốn phiên mã ngược chiều nhau)",
          "Chuyển vị tương hỗ giữa nhánh dài NST số 9 và NST số 22",
          "Chuyển vị giữa NST số 8 và NST số 14",
          "Khuếch đại số bản sao của gen PTEN trên NST số 10"
        ],
        answer: 0,
        explain: "Trang 187: Bình thường hai gen EML4 và ALK cùng nằm trên nhánh ngắn NST số 2 nhưng phiên mã ngược chiều nhau. Sự đảo đoạn NST số 2 lắp ghép hai gen lại với nhau, biến EML4 thành vùng khởi động tăng phiên mã ALK."
      },
      {
        q: "Ghép đúng cặp Gen tổ hợp với Bệnh ung thư đặc trưng được nêu trong giáo trình Bài 9:",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9, Mục 2.2 (tr. 187)",
        options: [
          "PML::RARA (bạch cầu cấp dòng tủy); TMPRSS2::ERG (tuyến tiền liệt); CCDC6::RET (tuyến giáp); EWSR1::FLI1 (sarcom Ewing)",
          "PML::RARA (sarcom Ewing); TMPRSS2::ERG (ung thư phổi); CCDC6::RET (bạch cầu mạn dòng tủy)",
          "EWSR1::FLI1 (tuyến tiền liệt); TMPRSS2::ERG (ung thư tuyến giáp); BCR::ABL (sarcom Ewing)",
          "CCDC6::RET (ung thư đại tràng); PML::RARA (ung thư vú)"
        ],
        answer: 0,
        explain: "Trang 187 liệt kê chính xác: PML::RARA trong bệnh bạch cầu cấp tính dòng tủy; TMPRSS2::ERG trong ung thư tuyến tiền liệt; CCDC6::RET trong ung thư tuyến giáp; EWSR1::FLI1 trong sarcom Ewing."
      },
      {
        q: "Thay đổi ngoại gen (thay đổi biểu sinh – epigenetics) thường gây thiếu hụt biểu hiện các gen đè nén bướu như BRCA1, PTEN theo cơ chế nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9, Mục 2.2 (tr. 187)",
        options: [
          "Tăng methyl hóa quá mức các vị trí cytosine ở vùng khởi động làm gen 'im lặng' không phiên mã tạo mRNA (không làm thay đổi cấu trúc gen)",
          "Gây đột biến điểm mất nghĩa tại codon 12 và 13 làm đứt gãy chuỗi DNA",
          "Đảo đoạn nhánh ngắn nhiễm sắc thể số 10 tạo protein dung hợp mới",
          "Tăng cường biểu hiện yếu tố phiên mã MYC tại nhân tế bào"
        ],
        answer: 0,
        explain: "Trang 187: Thay đổi ngoại gen không làm đổi cấu trúc gen mà thường do tăng methyl hóa quá mức cytosine ở vùng khởi động, làm gen trở nên 'im lặng', không phiên mã tạo mRNA và thiếu hụt protein (BRCA1, PTEN)."
      },
      {
        q: "Trong hệ thống kiểm soát tăng sinh tế bào, phân tử PTEN (trên NST số 10) thực hiện vai trò nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9, Mục 2.1 (tr. 185)",
        options: [
          "Yếu tố điều hòa âm kiểm soát tín hiệu tăng sinh tế bào khi truyền vào nhân",
          "Phối tử ngoại bào gắn trực tiếp vào vùng ngoại bào của thụ thể EGFR",
          "Enzym caspase khởi phát con đường chết tế bào ngoại sinh",
          "Protein ức chế phân hủy P53 ở vùng cận màng tế bào"
        ],
        answer: 0,
        explain: "Trang 185: Bình thường các tín hiệu tăng sinh truyền vào nhân được kiểm soát bởi yếu tố điều hòa âm như PTEN; mất hoạt động PTEN thúc đẩy tăng sinh quá mức."
      },
      {
        q: "Để bất hoạt sự biểu hiện quá mức của thụ thể HER2 do khuếch đại gen ERBB2 trên bề mặt tế bào ung thư vú (~20% ca), chiến lược nhắm đích chuẩn nào được nhắc đến?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9, Mục 2.2 (tr. 185)",
        options: [
          "Sử dụng kháng thể đơn dòng khống chế hoạt động các thụ thể HER2 trên bề mặt tế bào",
          "Dùng chất ức chế men caspase-3 để ngăn chết tế bào",
          "Dùng kháng thể đơn dòng kích thích thụ thể estrogen ER",
          "Tiêm trực tiếp yếu tố tăng trưởng EGF cạnh tranh với HER2"
        ],
        answer: 0,
        explain: "Trang 185: Với carcinoma ống tuyến vú có khuếch đại gen ERBB2 (HER2) gây biểu hiện quá mức thụ thể HER2 trên bề mặt, sử dụng kháng thể đơn dòng (như Trastuzumab) giúp khống chế hiệu quả hoạt động các thụ thể này."
      }
    ]
  },

  // ========================================================================
  // BÀI 8: RỐI LOẠN CHẾT TẾ BÀO THEO CHƯƠNG TRÌNH & ĐỘT BIẾN TP53
  // ========================================================================
  {
    id: 8,
    group: "III. BỆNH HỌC PHÂN TỬ TRONG UNG THƯ",
    title: "Bài 8: Rối loạn Chết tế bào theo Chương trình & Đột biến Gen Đè nén Bướu TP53",
    shortTitle: "Apoptosis & Gen Đè nén TP53",
    textbookRef: "Giải phẫu bệnh đại cương YDS – Bài 9 (Mục 3 & Mục 4, tr. 187–191)",
    summary: "Phân biệt vai trò phôi thai (ngày 45) & sinh lý của Apoptosis; Bất thường dòng thác Caspase (procaspase-3, caspase 3 & 8); Cơ chế TP53/MDM2/P21/BAX, hotspot exon 5–8, nghịch lý thời gian bán hủy P53 đột biến và Hình 9.2.",
    simId: "sim_tp53_caspase",
    simTitle: "Phòng Lab Con đường TP53 – MDM2 & Dòng thác Caspase trong Ung thư",
    figureIds: ["H9.2"],
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">✂️ 3.1. Chết Tế bào Theo Chương trình &amp; Rối loạn Dòng thác Caspase</div>
          <ul class="theory-list">
            <li><strong>Đối lập Hoại tử vs Apoptosis:</strong> Hoại tử xảy ra đột ngột (chấn thương, độc tố, nhiễm khuẩn) → tế bào phồng to, vỡ tung, phóng thích chất gây viêm. Apoptosis được điều khiển chặt chẽ: tế bào co nhỏ, sụp đổ khung tế bào, cô đặc nhiễm sắc chất, phân mảnh DNA và <strong>không tổn hại mô xung quanh</strong>.</li>
            <li><strong>Vai trò trong phát triển phôi &amp; cơ thể trưởng thành:</strong> Tạo các khe ngón tay và bàn chân (bắt đầu từ <strong>ngày 45 của phôi</strong>), loại bỏ các neuron thừa khi phát triển hệ thần kinh; ở người trưởng thành giúp cân bằng với tăng sinh tế bào. Tế bào không chết theo chương trình là đặc tính cốt lõi khởi phát ung thư.</li>
            <li><strong>Con đường Ngoại sinh (Thụ thể chết):</strong> Các phân tử tín hiệu <strong>TNFα, FasL, TRAIL</strong> kích hoạt thụ thể tương ứng → phân cắt <strong>procaspase 8 hoặc 10</strong> thành <strong>caspase 8 và 10</strong> hoạt động → hoạt hóa procaspase hạ nguồn → cuối cùng <strong>caspase 3, 6 và 7</strong> trực tiếp giết chết tế bào.</li>
            <li><strong>Con đường Nội sinh (Ty thể):</strong> Hoạt hóa các protein thúc đẩy chết (<strong>BAX, BAK...</strong>) làm tăng tính thấm màng ty thể → phóng thích <strong>cytochrome c</strong> → hoạt hóa <strong>caspase 9</strong> → hoạt hóa <strong>caspase 3, 6 và 7</strong> giết chết tế bào.</li>
          </ul>
          <div class="callout trap">
            <div class="callout-title">⚠️ Bất thường Caspase trong Ung thư (Hay ra thi!)</div>
            <ul>
              <li>Đột biến các gen mã hóa <strong>caspase 3 và caspase 8</strong> đã được ghi nhận trong ung thư dạ dày, ung thư phổi và ung thư đại tràng.</li>
              <li><strong>Hiện tượng đặc biệt:</strong> Biểu hiện quá mức <strong>procaspase 3</strong> (dạng tiền chất KHÔNG có hoạt tính giết chết tế bào) nhưng <strong>KHÔNG chuyển qua được trạng thái caspase 3 hoạt động</strong> gặp trong hầu hết các loại ung thư!</li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card-title">🛡️ 3.2. Rối loạn Gen Đè nén Bướu TP53 <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H9.2')">🖼️ Xem Hình 9.2</button></div>
          <ul class="theory-list">
            <li><strong>"Thần hộ mệnh của bộ gen" / "Người canh gác của bộ gen":</strong> Gen <em>TP53</em> nằm trên <strong>nhiễm sắc thể số 17</strong>. Giúp chu kỳ tế bào diễn ra mà không tích lũy tổn thương DNA cho tế bào con.</li>
            <li><strong>Cơ chế đáp ứng khi có tổn thương DNA:</strong>
              <br/>• <em>Mức có thể chỉnh sửa:</em> P53 thông qua phức hợp <strong>P21/CIP1</strong> làm <strong>kéo dài giai đoạn G1</strong> trước khi qua pha S để tế bào sửa chữa DNA.
              <br/>• <em>Mức không thể chỉnh sửa:</em> P53 thúc đẩy cả hai con đường nội sinh (qua <strong>BAX</strong>) và ngoại sinh của chết tế bào theo chương trình (hoặc đưa tế bào vào trạng thái lão hóa).</li>
            <li><strong>Điều hòa bởi MDM2:</strong> Bình thường trong bào tương, P53 có <strong>thời gian bán hủy rất ngắn</strong> do gắn với <strong>MDM2</strong> để bị phân hủy theo con đường <strong>ubiquitin-proteasome</strong>. Khi tế bào cần P53 hoạt động, P53 được giải phóng khỏi MDM2.</li>
            <li><strong>Đột biến TP53 trong ung thư:</strong> Một trong những gen đột biến thường gặp nhất (gần nửa số bệnh nhân K buồng trứng, đại–trực tràng, đầu–cổ; mất chức năng do đột biến gen hoặc mất đoạn <strong>NST số 17</strong>). Đột biến mất chức năng tập trung chủ yếu trên <strong>4 exon, từ exon 5 đến exon 8</strong>.</li>
          </ul>
          <div class="callout pearl">
            <div class="callout-title">🔑 Nghịch lý Bán hủy &amp; 2 Chiến lược Điều trị Đích P53 (Hình 9.2)</div>
            <ul>
              <li>Dù mất chức năng bảo vệ, protein <strong>P53 đột biến lại có thời gian bán hủy KÉO DÀI HƠN ĐÁNG KỂ</strong> so với P53 bình thường, tích tụ trong nhân và ngăn chặn cả hoạt động của P53 không đột biến (hiệu ứng trội âm).</li>
              <li><strong>2 chiến lược điều trị đích:</strong> (1) <em>Liệu pháp phục hồi hoạt động của P53 đột biến</em> trở về trạng thái bình thường; (2) <em>Chất ức chế MDM2</em> (giải phóng P53 lành khỏi sự phân hủy).</li>
              <li><strong>Bệnh sinh đa đột biến:</strong> Chỉ một đột biến <em>KRAS</em> hoặc chỉ một đột biến <em>TP53</em> là <strong>chưa đủ</strong> để ung thư xuất hiện; ung thư cần quá trình kéo dài tích lũy đồng thời nhiều đột biến trên cả proto-oncogenes, gen đè nén bướu, gen tổ hợp và thay đổi ngoại gen.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Trong bệnh ung thư não, đột biến gen TP53 gây nên tác động sinh học chính yếu nào sau đây?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9, Câu tự lượng giá 3 (tr. 190)",
        options: [
          "Làm suy giảm quá trình chết tế bào theo chương trình",
          "Làm giảm mạnh sự phiên mã của các gen sửa chữa DNA",
          "Làm thúc đẩy quá trình tăng sinh tế bào",
          "Thúc đẩy chu kỳ tế bào diễn ra giai đoạn chuyển tiếp G2/M"
        ],
        answer: 0,
        explain: "Đáp án chuẩn giáo trình (Mục 3.2 tr. 188 & Câu 3 tr. 190): Protein P53 thúc đẩy cả con đường nội sinh và ngoại sinh của chết tế bào theo chương trình khi DNA không thể sửa chữa. Khi TP53 mất chức năng, tế bào mang tổn thương DNA không tuân theo apoptosis mà tiếp tục phân chia."
      },
      {
        q: "Trong bệnh ung thư đại tràng, hãy chọn câu đúng về caspase đối với chết tế bào theo chương trình?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9, Câu tự lượng giá 4 (tr. 191)",
        options: [
          "Pro-caspase 3 tăng cao trong tế bào ung thư so với trong tế bào bình thường quanh khối bướu",
          "Caspase 3 khởi đầu cho dòng thác tín hiệu trên đường chết tế bào kiểu ngoại sinh",
          "Caspase 8 khởi đầu cho dòng thác tín hiệu trên đường chết tế bào kiểu nội sinh",
          "Pro-caspase 8 tăng cao trong tế bào ung thư so với trong tế bào bình thường quanh khối bướu"
        ],
        answer: 0,
        explain: "Đáp án chuẩn giáo trình (Mục 3.1 tr. 188 & Câu 4 tr. 191): Hiện tượng biểu hiện quá mức procaspase 3 (không có hoạt tính giết chết tế bào) nhưng không chuyển qua được trạng thái caspase 3 hoạt động gặp trong hầu hết các loại ung thư (trong khi caspase 8 khởi đầu đường NGOẠI sinh, còn caspase 3/6/7 là nhóm ĐAO PHỦ cuối cùng chứ không phải khởi đầu)."
      },
      {
        q: "Ý nào đúng khi nói về đột biến gen trong bệnh ung thư?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9, Câu tự lượng giá 5 (tr. 191)",
        options: [
          "Đột biến gen KRAS là đột biến tăng chức năng, đột biến gen TP53 là đột biến mất chức năng",
          "Đột biến gen KRAS đặc hiệu cho ung thư đường tiêu hóa, không gặp ở ung thư phổi",
          "Đột biến gen TP53 không thể phát hiện được trong tế bào ung thư khi đã di căn xa",
          "Trong ung thư não, không thể cùng xuất hiện đột biến gen TP53 và gen KRAS"
        ],
        answer: 0,
        explain: "Đáp án chuẩn giáo trình (Mục 2.2, 3.2 & Câu 5 tr. 191): Gen KRAS là tiền gen sinh ung (proto-oncogene) nên đột biến là đột biến TĂNG CHỨC NĂNG; còn TP53 là gen đè nén bướu nên đột biến là đột biến MẤT CHỨC NĂNG. Ung thư thường phối hợp nhiều gen đột biến cùng lúc."
      },
      {
        q: "Trong quá trình phát triển phôi thai bình thường, sự chết tế bào theo chương trình (apoptosis) giúp tạo các khe ngón ở bàn tay và bàn chân bắt đầu từ thời điểm nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9, Mục 3.1 (tr. 187)",
        options: [
          "Bắt đầu từ ngày 45 của phôi",
          "Bắt đầu từ ngày thứ 7 sau thụ tinh",
          "Ngay trong tuần lễ thứ 28 của thai kỳ",
          "Chỉ xảy ra sau khi trẻ ra đời"
        ],
        answer: 0,
        explain: "Trang 187: Trong phát triển phôi–thai, apoptosis giúp tạo các khe ngón ở bàn tay và bàn chân (bắt đầu từ ngày 45 của phôi) và loại bỏ các neuron không cần thiết."
      },
      {
        q: "Trong con đường ngoại sinh của chết tế bào theo chương trình, những ligand nào kích hoạt thụ thể chết để phân cắt procaspase 8 hoặc 10?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9, Mục 3.1 (tr. 188)",
        options: [
          "TNFα, FasL, TRAIL",
          "EGF, PDGF, VEGF",
          "P21/CIP1, BAX, BAK",
          "MDM2, TET2, HIF1α"
        ],
        answer: 0,
        explain: "Trang 188: Trong con đường ngoại sinh, các phân tử tín hiệu gây chết tế bào như TNFα, FasL, TRAIL gắn thụ thể chết → phân cắt procaspase 8 hoặc 10 thành caspase 8 và 10 hoạt động → kích hoạt dòng thác đến caspase 3, 6 và 7."
      },
      {
        q: "Hai chất trung gian nào trực tiếp thực hiện hai nhánh tác động của P53 lên chu kỳ tế bào (kéo dài G1) và lên sự chết tế bào theo chương trình?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9, Mục 3.2 (tr. 188)",
        options: [
          "Phức hợp P21/CIP1 (điều hòa chu kỳ tế bào ở pha G1) và BAX (thúc đẩy chết tế bào)",
          "MDM2 (kéo dài pha G1) và BCL-2 (thúc đẩy chết tế bào)",
          "Cyclin D–CDK4 (kéo dài pha G1) và IAP (thúc đẩy chết tế bào)",
          "E2F (kéo dài pha G1) và TERT (thúc đẩy chết tế bào)"
        ],
        answer: 0,
        explain: "Trang 188: Khi hoạt động, P53 giải phóng khỏi MDM2 để tham gia điều hòa chu kỳ tế bào thông qua phức hợp P21/CIP1 (kéo dài G1 trước khi sang S) hoặc thúc đẩy chết tế bào thông qua BAX."
      },
      {
        q: "Trong tế bào bình thường, tại sao protein P53 trong bào tương lại có thời gian bán hủy rất ngắn?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9, Mục 3.2 (tr. 188)",
        options: [
          "Do P53 được gắn với MDM2 để phân hủy theo con đường ubiquitin-proteasome",
          "Do P53 liên tục bị caspase 3 và caspase 7 cắt nhỏ thành đoạn 180–200 bp",
          "Do P53 bị methyl hóa cytosine tại vùng khởi động ngay khi vừa dịch mã",
          "Do P53 tự thoát ra khỏi màng tế bào theo cơ chế bong bóng màng"
        ],
        answer: 0,
        explain: "Trang 188: Trong điều kiện bình thường, P53 có thời gian bán hủy rất ngắn do được gắn với MDM2 để phân hủy theo con đường ubiquitin-proteasome."
      },
      {
        q: "Đột biến mất chức năng của gen đè nén bướu TP53 trong bệnh ung thư tập trung chủ yếu trên vùng nào của gen và gen TP53 nằm trên nhiễm sắc thể nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9, Mục 3.2 (tr. 188, 190)",
        options: [
          "Trên nhiễm sắc thể số 17; đột biến tập trung chủ yếu trên 4 exon từ exon 5 đến exon 8",
          "Trên nhiễm sắc thể số 12; đột biến tập trung tại codon 12 và 13",
          "Trên nhiễm sắc thể số 10; đột biến tập trung tại exon 1 và exon 2",
          "Trên nhiễm sắc thể số 22; đột biến do đảo đoạn nhánh ngắn"
        ],
        answer: 0,
        explain: "Trang 188 & 190: Gen TP53 nằm trên NST số 17 (có thể mất chức năng do đột biến hoặc mất đoạn NST số 17); các đột biến mất chức năng chủ yếu xảy ra trên 4 exon, từ exon 5 đến exon 8."
      },
      {
        q: "Đặc điểm sinh hóa đáng chú ý của các protein P53 ĐỘT BIẾN trong tế bào ung thư so với P53 bình thường là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9, Mục 3.2 (tr. 188)",
        options: [
          "P53 đột biến tuy mất chức năng bảo vệ nhưng có thời gian bán hủy kéo dài hơn đáng kể và ngăn cản hoạt động bình thường của P53 không đột biến",
          "P53 đột biến bị phân hủy nhanh gấp 10 lần bởi MDM2 nên không thể phát hiện được trong nhân tế bào ung thư",
          "P53 đột biến tăng cường kích hoạt P21/CIP1 làm tế bào ngừng phân chia vĩnh viễn",
          "P53 đột biến trực tiếp gắn lên cytochrome c để khởi động caspase 9"
        ],
        answer: 0,
        explain: "Trang 188: Mặc dù không thực hiện chức năng, các protein P53 đột biến có thời gian bán hủy trong tế bào kéo dài hơn đáng kể so với P53 không đột biến, đồng thời ngăn chặn hoạt động bình thường của P53 không đột biến."
      },
      {
        q: "Dựa vào Hình 9.2, hai chiến lược điều trị đích nhằm khôi phục con đường truyền tín hiệu P53 trong khối bướu là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9, Mục 3.2 & Hình 9.2 (tr. 188–189)",
        options: [
          "Phục hồi hoạt động của P53 đột biến trở lại trạng thái bình thường, hoặc dùng chất ức chế hoạt động của MDM2",
          "Dùng chất kích thích hoạt động của MDM2 và ức chế hoàn toàn phức hợp P21/CIP1",
          "Tăng cường biểu hiện procaspase 3 bất hoạt và ức chế BAX/BAK",
          "Bổ sung chất ức chế telomerase kết hợp tăng methyl hóa promoter gen TP53"
        ],
        answer: 0,
        explain: "Trang 188–189 & Hình 9.2: Hai chiến lược điều trị đang được nghiên cứu là (1) liệu pháp phục hồi hoạt động của P53 đột biến về trạng thái bình thường và (2) dùng chất ức chế hoạt động của MDM2."
      },
      {
        q: "Khi cả hai nhánh con đường nội sinh và ngoại sinh của apoptosis kích hoạt thành công, nhóm enzym caspase nào đóng vai trò trực tiếp ở bước cuối cùng để giết chết tế bào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9, Mục 3.1 (tr. 188)",
        options: [
          "Caspase 3, caspase 6 và caspase 7",
          "Procaspase 8 và procaspase 10 chưa phân cắt",
          "Chỉ riêng caspase 9 nằm trong lòng ty thể",
          "Enzym cytochrome P450 và phospholipase A2"
        ],
        answer: 0,
        explain: "Trang 188: Ở con đường ngoại sinh, caspase 8/10 hoạt hóa procaspase phía sau → cuối cùng caspase 3, 6 và 7 tham gia trực tiếp giai đoạn giết chết tế bào. Ở con đường nội sinh, cytochrome c hoạt hóa caspase 9 → sau đó là caspase 3, 6 và 7 giết chết tế bào."
      },
      {
        q: "Tại sao việc phát hiện một đột biến đơn lẻ trên KRAS hay chỉ trên TP53 chưa đủ giải thích sự khởi phát ung thư hoàn chỉnh trên lâm sàng?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9, Mục 3.2 (tr. 189)",
        options: [
          "Vì khởi phát ung thư là quá trình kéo dài đòi hỏi tích lũy nhiều đột biến gen phối hợp cùng lúc (tiền gen sinh ung, gen đè nén bướu, gen tổ hợp, thay đổi ngoại gen)",
          "Vì đột biến KRAS luôn tự hồi phục sau 45 ngày nếu không có tia UV",
          "Vì gen TP53 chỉ điều hòa ở giai đoạn phôi thai, không hoạt động ở người trưởng thành",
          "Vì tế bào ung thư chỉ cần hoạt hóa telomerase là không cần bất kỳ đột biến gen nào khác"
        ],
        answer: 0,
        explain: "Trang 189: Nếu chỉ có đột biến tiền gen sinh ung (KRAS) hay chỉ đột biến gen đè nén bướu (TP53) thì chưa đủ cho ung thư xuất hiện; khảo sát gen tế bào ung thư thường phát hiện cùng lúc nhiều gen bị đột biến phối hợp."
      }
    ]
  }
];
