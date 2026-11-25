// ==========================================================================
// DỮ LIỆU BÀI HỌC PHẦN 1: MODULE TIÊU HÓA (BÀI 1 ĐẾN BÀI 3)
// Đề cương SĐH Cao học KHYS 2026: Dạ dày – Gan – Tụy
// Chuẩn Giáo trình Giải Phẫu học (Chương trình Y đa khoa đổi mới, Tập 2) & Trắc nghiệm GP 2024
// ==========================================================================

window.LESSONS_PART1 = [
  // ========================================================================
  // BÀI 1: DẠ DÀY & LIÊN QUAN HẬU CUNG MẠC NỐI
  // ========================================================================
  {
    id: 1,
    group: "I. MODULE TIÊU HÓA",
    title: "Bài 1: Dạ dày – Hình thể, Liên quan & Mạch Thần kinh",
    shortTitle: "Dạ dày & Hậu cung mạc nối",
    textbookRef: "Giải phẫu học YDS Tập 2 – Bài 21: Dạ dày (tr. 15–21)",
    summary: "Hình thể ngoài chữ J (tâm vị T10 – đáy vị – thân vị – môn vị L1); liên quan trước/sau qua hậu cung mạc nối; 3 lớp cơ & nếp niêm mạc; 2 vòng mạch bờ cong từ ĐM thân tạng; chi phối giao cảm/TK X và phân biệt 2 loại thoát vị hoành.",
    modelId: "model_stomach",
    modelTitle: "Mô hình 3D Dạ dày: Vùng giải phẫu, 2 Vòng mạch & Cơ thắt Môn vị",
    simId: "sim_stomach",
    simTitle: "Phòng Thực hành Dạ dày: Vòng mạch Bờ cong – Cắt TK X – Thoát vị Hoành",
    flashcards: [
      { front: "Đối chiếu Tâm vị & Môn vị lên cột sống?", back: "Tâm vị: trước thân đốt sống Ngực 10 (T10), lệch trái 2,5 cm (sau sụn sườn 7 trái). Môn vị: bên phải Thắt lưng 1 (L1) ~1,25 cm." },
      { front: "Phần cao nhất của dạ dày ở tư thế đứng?", back: "Đáy vị (Fundus) – chứa không khí tạo 'bóng hơi dạ dày' trên X-quang đứng, ngăn với thực quản bởi khuyết tâm vị." },
      { front: "Mặt sau dạ dày KHÔNG liên quan cơ quan nào?", back: "KHÔNG liên quan với Gan (Gan ở phía trước/trên phải). Mặt sau qua hậu cung mạc nối liên quan: đuôi tụy, ĐM/TM lách, thận trái, thượng thận trái." },
      { front: "Phân bố dày mỏng 3 lớp cơ dạ dày?", back: "Cơ dọc ngoài dày nhất ở BỜ CONG NHỎ; Cơ vòng giữa dày nhất ở MÔN VỊ (tạo cơ thắt môn vị); Cơ chéo trong cùng tập trung ở ĐÁY VỊ." },
      { front: "4 động mạch tạo 2 vòng mạch bờ cong dạ dày?", back: "Bờ cong nhỏ: ĐM vị trái (ĐM thân tạng) + ĐM vị phải (ĐM gan riêng). Bờ cong lớn: ĐM vị mạc nối phải (ĐM vị tá tràng) + ĐM vị mạc nối trái (ĐM lách)." },
      { front: "Khác biệt Thoát vị trượt vs Thoát vị cạnh thực quản?", back: "Thoát vị trượt (phổ biến): tâm vị trượt lên trung thất → CÓ trào ngược. Cạnh thực quản: tâm vị giữ nguyên dưới hoành, đáy vị chui lên → ít/không trào ngược." }
    ],
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">📐 1. Vị trí, Hình thể ngoài &amp; 4 Vùng Dạ dày</div>
          <ul class="theory-list">
            <li><strong>Vị trí:</strong> Đoạn phình to nhất ống tiêu hóa, sát dưới vòm hoành trái và vùng thượng vị; hình <strong>chữ J</strong> (2 mặt trước/sau, 2 bờ cong, 2 đầu).</li>
            <li><strong>1.1. Tâm vị (Cardia):</strong> Vùng rộng ~3 cm nối thực quản qua lỗ tâm vị (<strong>không có van thực sự</strong> → dễ trào ngược). Đối chiếu: sau <strong>sụn sườn 7 trái</strong>, trước đốt sống <strong>ngực 10 (T10)</strong>, lệch trái đường giữa <strong>2,5 cm</strong>.</li>
            <li><strong>1.2. Đáy vị (Fundus):</strong> Hình chỏm cầu phía trên và trái tâm vị, ngăn với thực quản bởi <strong>khuyết tâm vị</strong> (<em>cardiac notch</em>). Tư thế đứng chứa không khí → hình ảnh <strong>"bóng hơi dạ dày"</strong> trên X-quang và là <strong>phần cao nhất</strong> của dạ dày.</li>
            <li><strong>1.3. Thân vị (Body):</strong> Lớn nhất, nằm giữa mặt phẳng ngang qua khuyết tâm vị và mặt phẳng ngang qua <strong>khuyết góc</strong> (<em>angular incisure</em>).</li>
            <li><strong>1.4. Phần môn vị:</strong> Gồm <strong>hang môn vị</strong> và <strong>ống môn vị</strong> → đổ vào tá tràng qua lỗ môn vị. Đối chiếu: <strong>bên phải đốt sống thắt lưng 1 (L1) ~1,25 cm</strong>. Lớp cơ vòng dày lên tạo <strong>cơ thắt môn vị</strong>.</li>
          </ul>
          <div class="callout trap">
            <div class="callout-title">⚠️ Bẫy Đề thi Hay Gặp</div>
            <ul>
              <li><strong>Khuyết góc</strong> là điểm thấp nhất của <strong>bờ cong nhỏ</strong>, nằm giữa phần đứng và phần ngang của bờ cong nhỏ (ranh giới thân vị – phần môn vị).</li>
              <li><strong>Đáy vị</strong> là phần CAO NHẤT ở tư thế đứng (đừng nhầm đáy vị với phần thấp nhất!).</li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card-title">🧭 2. Liên quan Không gian của Dạ dày</div>
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Mặt / Bờ</th>
                  <th>Cấu trúc Liên quan Chính</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Mặt trước</strong></td>
                  <td>• <em>Phần trên (thành ngực):</em> qua vòm hoành trái liên quan phổi &amp; màng phổi trái, tim &amp; màng tim, một phần thùy trái gan.<br/>• <em>Phần dưới (thành bụng):</em> nằm ngay sau thành bụng trước trong tam giác giới hạn bởi <strong>bờ dưới gan, cung sườn trái, mặt trên đại tràng ngang</strong>.</td>
                </tr>
                <tr>
                  <td><strong>Mặt sau</strong></td>
                  <td>• <em>Đáy &amp; tâm vị:</em> trụ trái cơ hoành.<br/>• <em>Thân vị:</em> tạo <strong>thành trước hậu cung mạc nối (túi mạc nối)</strong>; qua túi mạc nối liên quan <strong>đuôi tụy, ĐM &amp; TM lách, thận trái, tuyến thượng thận trái</strong>.<br/>• <em>Hang môn vị:</em> trước mạc treo đại tràng ngang → góc tá hỗng tràng.</td>
                </tr>
                <tr>
                  <td><strong>Bờ cong nhỏ</strong></td>
                  <td>Có <strong>mạc nối nhỏ</strong> bám; sau mạc nối nhỏ là ĐMC bụng, ĐM thân tạng, đám rối tạng.</td>
                </tr>
                <tr>
                  <td><strong>Bờ cong lớn</strong></td>
                  <td>Đáy vị áp vòm hoành trái &amp; <strong>lách</strong>; tiếp theo có <strong>dây chằng vị – lách</strong> và <strong>mạc nối lớn</strong>.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="card-title">🔬 3. Cấu tạo 4 Lớp &amp; 2 Vòng mạch Bờ cong</div>
          <ul class="theory-list">
            <li><strong>Cấu tạo 4 lớp:</strong> Thanh mạc – Cơ (3 lớp) – Dưới niêm mạc – Niêm mạc.
              <ul>
                <li><strong>Lớp cơ dọc (ngoài):</strong> dày nhất ở <strong>bờ cong nhỏ</strong>.</li>
                <li><strong>Lớp cơ vòng (giữa):</strong> dày nhất ở <strong>môn vị</strong> → cơ thắt môn vị.</li>
                <li><strong>Lớp cơ chéo (trong cùng):</strong> đặc biệt chỉ có ở dạ dày, tập trung ở <strong>đáy vị</strong>, chạy chéo về bờ cong lớn.</li>
              </ul>
            </li>
            <li><strong>Niêm mạc:</strong> Các nếp dọc dọc bờ cong nhỏ tạo <strong>ống vị (gastric canal)</strong> dẫn dịch đi nhanh xuống môn vị; ranh giới niêm mạc thực quản (hồng nhạt) và dạ dày (đỏ) là <strong>đường Z</strong>.</li>
          </ul>
          <div class="callout pearl">
            <div class="callout-title">🩸 Nguồn gốc 2 Vòng Động mạch (Từ ĐM Thân tạng)</div>
            <ul>
              <li><strong>Vòng mạch Bờ cong nhỏ:</strong> <strong>ĐM vị trái</strong> (nhánh trực tiếp ĐM thân tạng) + <strong>ĐM vị phải</strong> (nhánh ĐM gan riêng).</li>
              <li><strong>Vòng mạch Bờ cong lớn:</strong> <strong>ĐM vị mạc nối phải</strong> (nhánh ĐM vị tá tràng) + <strong>ĐM vị mạc nối trái</strong> (nhánh ĐM lách).</li>
              <li><strong>Đáy vị &amp; Tâm vị:</strong> Các <strong>ĐM vị ngắn</strong> (5–7 nhánh từ ĐM lách), <strong>ĐM vị sau</strong> (từ ĐM lách), và <strong>ĐM hoành dưới</strong> (từ ĐMC bụng).</li>
              <li><strong>Tĩnh mạch:</strong> Đều đổ về <strong>hệ Tĩnh mạch cửa</strong> (TM vị trái/phải đổ trực tiếp TM cửa; <strong>TM trước môn vị</strong> đổ vào TM vị phải là mốc tìm môn vị khi mổ).</li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card-title">⚡ 4. Thần kinh Tự chủ &amp; Bệnh lý Lâm sàng</div>
          <ul class="theory-list">
            <li><strong>Giao cảm (T6–T9 → TK tạng lớn → Đám rối tạng):</strong> Ức chế tiết dịch vị, ức chế co bóp, làm <strong>tăng co thắt cơ vòng môn vị</strong>.</li>
            <li><strong>Đối giao cảm (Thân TK lang thang trước &amp; sau):</strong>
              <ul>
                <li><em>Thân trước</em> (từ TK X trái): đi mặt trước thực quản → nhánh gan, nhánh tá tràng + các nhánh vị trước.</li>
                <li><em>Thân sau</em> (lớn hơn, từ TK X phải): nhánh tạng vào đám rối tạng + các nhánh vị sau.</li>
                <li><strong>Tác dụng:</strong> Kích thích tiết acid HCl, tăng nhu động, <strong>giãn cơ vòng môn vị</strong> → cắt TK X làm <strong>giảm tiết acid dạ dày</strong>.</li>
              </ul>
            </li>
          </ul>
          <div class="callout warning">
            <div class="callout-title">🏥 2 Thể Thoát vị Hoành &amp; Hẹp Môn vị</div>
            <ul>
              <li><strong>Thoát vị trượt (Sliding hiatal hernia):</strong> Gặp nhiều hơn; tâm vị và phần trên dạ dày trượt lên qua lỗ thực quản → <strong>trào ngược dịch vị lên thực quản</strong>.</li>
              <li><strong>Thoát vị cạnh thực quản (Paraesophageal):</strong> Tâm vị vẫn ở vị trí bình thường dưới cơ hoành, đáy vị chui lên trước thực quản → <strong>ít/không trào ngược</strong>.</li>
              <li><strong>Hẹp môn vị phì đại bẩm sinh:</strong> Cơ thắt môn vị dày bất thường → nôn vọt, giãn dạ dày.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Ở tư thế đứng, phần nào của dạ dày nằm ở vị trí cao nhất và tạo nên hình ảnh 'bóng hơi dạ dày' trên phim X-quang?",
        source: "Giải phẫu học YDS Tập 2 – Bài 21 (tr. 15 & Câu tự lượng giá 1 tr. 21)",
        options: [
          "Đáy vị",
          "Tâm vị",
          "Thân vị",
          "Hang môn vị"
        ],
        answer: 0,
        explain: "Sách Tập 2 tr. 15: Đáy vị (fundus) nằm phía trên và bên trái tâm vị, ngăn với thực quản bởi khuyết tâm vị. Ở tư thế đứng, đáy vị là phần cao nhất và chứa không khí tạo bóng hơi dạ dày trên X-quang."
      },
      {
        q: "Đối chiếu lên cột sống, lỗ tâm vị và lỗ môn vị lần lượt tương ứng với mức của đốt sống nào?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 433 (tr. 65)",
        options: [
          "Ngực 10 và thắt lưng 1",
          "Ngực 11 và thắt lưng 1",
          "Ngực 11 và thắt lưng 2",
          "Ngực 12 và thắt lưng 2"
        ],
        answer: 0,
        explain: "Đáp án sách 433A & Tập 2 tr. 15–16: Lỗ tâm vị nằm sau sụn sườn 7 trái, trước thân đốt sống ngực 10 (lệch trái 2,5 cm); lỗ môn vị nằm ngang đốt sống thắt lưng 1 (bên phải đường giữa ~1,25 cm)."
      },
      {
        q: "Mặt sau dạ dày KHÔNG liên quan với cấu trúc nào sau đây?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 429 (tr. 65)",
        options: [
          "Gan",
          "Thận trái",
          "Lách",
          "Túi mạc nối"
        ],
        answer: 0,
        explain: "Đáp án sách 429D: Gan nằm phía trước và bên phải dạ dày (liên quan mặt trước dạ dày và mặt tạng gan úp lên bờ cong nhỏ). Mặt sau dạ dày qua túi mạc nối liên quan trụ trái cơ hoành, đuôi tụy, lách, thận trái và tuyến thượng thận trái."
      },
      {
        q: "Chọn câu ĐÚNG về cấu tạo lớp cơ thành dạ dày?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 430 (tr. 65) & Câu TLG 3 (tr. 21)",
        options: [
          "Lớp cơ vòng của dạ dày dày nhất ở môn vị",
          "Đáy vị là phần thấp nhất của dạ dày",
          "Lỗ tâm vị có van thực sự ngăn hoàn toàn dịch vị trào ngược lên thực quản",
          "Lớp cơ dọc của dạ dày dày nhất ở bờ cong lớn"
        ],
        answer: 0,
        explain: "Đáp án sách 430C & Tập 2 tr. 17: Lớp cơ vòng dày nhất ở môn vị (tạo cơ thắt môn vị); lớp cơ dọc dày nhất ở bờ cong nhỏ; tầng cơ chéo tập trung ở đáy vị."
      },
      {
        q: "Câu nào sau đây ĐÚNG khi mô tả hình thể ngoài của dạ dày?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 432 (tr. 65)",
        options: [
          "Khuyết góc nằm ở giữa phần đứng và phần ngang của bờ cong nhỏ",
          "Đáy vị thường là nơi thức ăn hay dịch vị đọng lại",
          "Tâm vị nằm về bên phải cột sống",
          "Khuyết tâm vị nằm bên phải tâm vị"
        ],
        answer: 0,
        explain: "Đáp án sách 432D & Tập 2 tr. 16: Điểm thấp nhất của bờ cong nhỏ là khuyết góc (angular incisure), nằm ở ranh giới giữa phần đứng (thân vị) và phần ngang (phần môn vị) của bờ cong nhỏ."
      },
      {
        q: "Mạch máu cung cấp cho dạ dày chủ yếu tạo thành hai vòng động mạch nằm ở vị trí nào?",
        source: "Giải phẫu học YDS Tập 2 – Câu tự lượng giá 2 (tr. 21)",
        options: [
          "Hai bờ cong (bờ cong nhỏ và bờ cong lớn)",
          "Mặt trước thân vị",
          "Mặt sau thân vị",
          "Hai đầu tâm vị và môn vị"
        ],
        answer: 0,
        explain: "Sách Tập 2 tr. 18: Các mạch máu chính của dạ dày hợp thành hai vòng động mạch chạy dọc theo bờ cong nhỏ (ĐM vị trái + ĐM vị phải) và bờ cong lớn (ĐM vị mạc nối trái + ĐM vị mạc nối phải)."
      },
      {
        q: "Động mạch vị phải xuất phát trực tiếp từ động mạch nào?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 232, 239 (tr. 35–36)",
        options: [
          "Động mạch gan riêng",
          "Động mạch thân tạng",
          "Động mạch gan chung",
          "Động mạch vị tá tràng"
        ],
        answer: 0,
        explain: "Đáp án 232A/239C & Tập 2 tr. 18: ĐM vị phải là nhánh nhỏ tách từ ĐM gan riêng đi trong mạc nối nhỏ tới môn vị rồi chạy dọc bờ cong nhỏ nối với ĐM vị trái."
      },
      {
        q: "Dọc theo bờ cong lớn dạ dày có hai động mạch nào nối với nhau?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 242 (tr. 36)",
        options: [
          "Động mạch vị mạc nối trái và động mạch vị mạc nối phải",
          "Động mạch vị trái và động mạch vị phải",
          "Động mạch vị trái và động mạch vị tá tràng",
          "Động mạch vị phải và động mạch vị mạc nối phải"
        ],
        answer: 0,
        explain: "Đáp án 242C: ĐM vị mạc nối phải (nhánh của ĐM vị tá tràng) nối với ĐM vị mạc nối trái (nhánh của ĐM lách) tạo vòng mạch dọc bờ cong lớn dạ dày."
      },
      {
        q: "Trong phẫu thuật vùng dạ dày – tá tràng, cấu trúc tĩnh mạch nào nằm ở mặt trước môn vị được dùng làm mốc để xác định vị trí môn vị?",
        source: "Giải phẫu học YDS Tập 2 – Bài 21 (tr. 19)",
        options: [
          "Tĩnh mạch trước môn vị (Prepyloric vein) đổ vào tĩnh mạch vị phải",
          "Tĩnh mạch vị mạc nối trái đổ vào tĩnh mạch lách",
          "Tĩnh mạch vị ngắn đổ vào tĩnh mạch chủ dưới",
          "Tĩnh mạch vị trái đổ vào tĩnh mạch mạc treo tràng trên"
        ],
        answer: 0,
        explain: "Sách Tập 2 tr. 19: Trước khi đổ vào tĩnh mạch cửa, tĩnh mạch vị phải nhận thêm tĩnh mạch trước môn vị đi lên ở mặt trước môn vị – rất dễ nhận ra và là mốc xác định môn vị trong phẫu thuật."
      },
      {
        q: "Khi dây thần kinh X (lang thang) chi phối dạ dày bị cắt, hiện tượng nào sau đây có thể xảy ra?",
        source: "Giải phẫu học YDS Tập 2 – Câu tự lượng giá 4 (tr. 21)",
        options: [
          "Dạ dày giảm tiết acid HCl",
          "Dạ dày tăng tiết acid HCl",
          "Dạ dày tăng co bóp dữ dội",
          "Dạ dày co nhỏ vĩnh viễn"
        ],
        answer: 0,
        explain: "Sách Tập 2 tr. 20: TK đối giao cảm (TK X) kích thích tiết dịch vị acid và tăng nhu động, làm giãn cơ vòng môn vị. Do đó khi cắt TK X, dạ dày sẽ giảm tiết acid."
      },
      {
        q: "Thân thần kinh lang thang trước đi qua lỗ thực quản cơ hoành xuống dạ dày chủ yếu được hình thành từ đâu?",
        source: "Giải phẫu học YDS Tập 2 – Bài 21 (tr. 20)",
        options: [
          "Thần kinh lang thang trái",
          "Thần kinh lang thang phải",
          "Thần kinh tạng lớn trái",
          "Đám rối tạng"
        ],
        answer: 0,
        explain: "Sách Tập 2 tr. 20: Do sự xoay của dạ dày lúc phôi thai, thân thần kinh lang thang trước chủ yếu hình thành từ TK lang thang trái (đi mặt trước thực quản), còn thân sau từ TK lang thang phải."
      },
      {
        q: "Đặc điểm nào giúp phân biệt thoát vị hoành CẠNH THỰC QUẢN với thoát vị hoành TRƯỢT?",
        source: "Giải phẫu học YDS Tập 2 – Bài 21 (tr. 20–21)",
        options: [
          "Trong thoát vị cạnh thực quản, tâm vị vẫn ở vị trí bình thường dưới cơ hoành nên dịch không trào ngược",
          "Trong thoát vị cạnh thực quản, lỗ tâm vị trượt lên cao vào trung thất gây trào ngược nặng",
          "Thoát vị cạnh thực quản phổ biến hơn nhiều so với thoát vị trượt",
          "Trong thoát vị trượt, đáy vị không bao giờ lên trung thất"
        ],
        answer: 0,
        explain: "Sách Tập 2 tr. 20: Ở thoát vị cạnh thực quản, tâm vị vẫn ở dưới cơ hoành bình thường (đáy vị chui lên trước thực quản) nên ít/không trào ngược. Thoát vị trượt phổ biến hơn, tâm vị trượt lên trên nên dễ trào ngược."
      }
    ]
  },

  // ========================================================================
  // BÀI 2: GAN, ĐƯỜNG MẬT NGOÀI GAN & PHÂN THÙY PHẪU THUẬT
  // ========================================================================
  {
    id: 2,
    group: "I. MODULE TIÊU HÓA",
    title: "Bài 2: Gan, Đường mật ngoài gan & Phân thùy Phẫu thuật",
    shortTitle: "Gan, Đường mật & Phân thùy",
    textbookRef: "Giải phẫu học YDS Tập 2 – Bài 24: Gan mật và hệ tĩnh mạch cửa (tr. 43–52)",
    summary: "Hình thể ngoài (mặt hoành, mặt tạng chữ H, 1 bờ dưới duy nhất); khoang Morison & vùng trần; các dây chằng cố định & di tích phôi thai; phân chia 8 hạ phân thùy Couinaud/phẫu thuật qua 3 khe tĩnh mạch gan; đường mật chính/phụ & tam giác Calot.",
    modelId: "model_liver",
    modelTitle: "Mô hình 3D Gan & Đường mật: 8 Hạ phân thùy (I–VIII), Tam giác Calot & Cửa gan",
    simId: "sim_liver",
    simTitle: "Phòng Thực hành Phân thùy Gan (I–VIII) & Đường mật Ngoài gan",
    flashcards: [
      { front: "Gan có mấy mặt và mấy bờ theo mô tả chuẩn YDS?", back: "2 mặt: Mặt hoành (gồm 4 phần: trên, trước, phải, sau) và Mặt tạng (hình chữ H). CHỈ CÓ 1 BỜ LÀ BỜ DƯỚI (sắc, có khuyết dây chằng tròn & khuyết túi mật)." },
      { front: "Hình chữ H ở mặt tạng gan được tạo bởi những rãnh nào?", back: "Rãnh dọc phải (trước: hố túi mật, sau: rãnh TMCD); Rãnh dọc trái (trước: khuyết dây chằng tròn, sau: khe dây chằng TM); Rãnh ngang: Cửa gan (dài ~6 cm)." },
      { front: "3 khe tĩnh mạch gan chia 8 hạ phân thùy gan như thế nào?", back: "Khe chính (chứa TM gan giữa: từ hố túi mật → TMCD) chia Gan phải & Gan trái. Khe trái (TM gan trái, đi theo DC liềm): bên (II, III) & giữa (IV, I). Khe phải (TM gan phải): trước (V, VIII) & sau (VI, VII)." },
      { front: "3 thành phần chính đi qua Cửa gan (cuống gan)?", back: "Ống gan chung (hoặc OMC), Động mạch gan riêng, và Tĩnh mạch cửa. (CHÚ Ý: Tĩnh mạch gan và TMCD KHÔNG đi qua cửa gan!)." },
      { front: "Giới hạn Tam giác gan mật (Tam giác Calot)?", back: "Giới hạn bởi: Ống gan chung (trong), Ống túi mật (ngoài/dưới), và Mặt tạng của gan (trên). Chứa Động mạch túi mật (thường từ ĐM gan phải)." },
      { front: "Đoạn nào của Ống mật chủ hẹp nhất (câu 481 TN 2024)?", back: "Đoạn trong thành tá tràng (đổ vào nhú tá lớn cùng ống tụy chính qua cơ vòng Oddi). Đường mật phụ gồm: Túi mật & Ống túi mật (cắt bỏ được)." }
    ],
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🫀 1. Vị trí, Hình thể ngoài &amp; Ngách Phúc mạc</div>
          <ul class="theory-list">
            <li><strong>Vị trí:</strong> Tạng to nhất cơ thể, ở tầng trên mạc treo kết tràng ngang (ô dưới hoành phải, lấn thượng vị và dưới hoành trái). Đối chiếu thành ngực: lên đến <strong>khoang liên sườn IV trên đường trung đòn phải</strong>, bờ dưới dọc bờ sườn phải.</li>
            <li><strong>2 Mặt:</strong>
              <ul>
                <li><strong>Mặt hoành (4 phần):</strong> <em>Phần trên</em> (áp cơ hoành, liên quan tim/phổi); <em>Phần trước</em>; <em>Phần phải</em> (liên quan cung sườn VII–XI phải); <em>Phần sau</em> (có <strong>vùng trần – bare area</strong> không có phúc mạc, rãnh TMCD bên phải, khe dây chằng TM bên trái).</li>
                <li><strong>Mặt tạng (Hình chữ H):</strong>
                  <br/>– <em>Rãnh dọc phải:</em> trước là hố túi mật, sau là rãnh TMCD.
                  <br/>– <em>Rãnh dọc trái:</em> trước là khuyết dây chằng tròn, sau là khe dây chằng tĩnh mạch.
                  <br/>– <em>Rãnh ngang:</em> <strong>Cửa gan (porta hepatis)</strong> dài ~6 cm.</li>
              </ul>
            </li>
            <li><strong>Chỉ có 1 bờ là Bờ dưới:</strong> Sắc, chạy từ phải sang trái, có 2 khuyết (khuyết dây chằng tròn &amp; khuyết đáy túi mật).</li>
          </ul>
          <div class="callout pearl">
            <div class="callout-title">💧 Ngách Dưới hoành &amp; Khoang Morison</div>
            <p><strong>Ngách gan thận (khoang Morison)</strong> là phần ổ phúc mạc nằm giữa phần phải mặt tạng gan và thận phải – tuyến thượng thận phải; thông với ngách dưới hoành phải ở phía trước (nơi dịch ổ bụng dễ tụ lại khi nằm ngửa).</p>
          </div>
        </div>

        <div class="card">
          <div class="card-title">🔗 2. Phương tiện Cố định &amp; Di tích Phôi thai</div>
          <ul class="theory-list">
            <li><strong>Tĩnh mạch chủ dưới (TMCD):</strong> Dính chặt tổ chức gan &amp; nhận 3 tĩnh mạch gan → <strong>phương tiện cố định quan trọng nhất</strong>.</li>
            <li><strong>Dây chằng hoành gan:</strong> Nhiều thớ sợi nối vùng trần với cơ hoành.</li>
            <li><strong>Dây chằng vành (lá trước &amp; lá sau):</strong> Bao quanh vùng trần, chập lại hai đầu thành <strong>dây chằng tam giác phải &amp; trái</strong>.</li>
            <li><strong>Dây chằng liềm (Falciform):</strong> Nếp phúc mạc 2 lá nối mặt hoành gan vào cơ hoành và thành bụng trước, liên tiếp dây chằng vành ở trên và chứa <strong>dây chằng tròn</strong> ở bờ tự do.</li>
            <li><strong>Mạc nối nhỏ:</strong> Dây chằng gan–vị và dây chằng gan–tá tràng (chứa cuống gan).</li>
          </ul>
          <div class="callout formula">
            <div class="callout-title">🧬 Cặp Di tích Phôi thai Kinh điển</div>
            <ul>
              <li><strong>Dây chằng tròn gan:</strong> Di tích của <strong>tĩnh mạch rốn</strong> bị tắc lại (nằm trong khe dây chằng tròn, tận cùng ở nhánh trái TM cửa).</li>
              <li><strong>Dây chằng tĩnh mạch:</strong> Di tích của <strong>ống tĩnh mạch (ductus venosus)</strong> nối TM cửa với TMCD lúc phôi thai.</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🗺️ 3. Phân thùy Gan: Theo Giải phẫu vs Theo Phẫu thuật (I–VIII)</div>
        <div class="grid-2">
          <div>
            <p style="font-size:14px;margin-bottom:8px;"><strong>A. Phân thùy Giải phẫu (4 thùy hình thể ngoài):</strong></p>
            <ul class="theory-list">
              <li><strong>Thùy phải</strong> &amp; <strong>Thùy trái:</strong> ngăn cách bởi dây chằng liềm (mặt hoành) &amp; rãnh dọc trái (mặt tạng).</li>
              <li><strong>Thùy vuông:</strong> CHỈ thấy ở mặt tạng (giữa hố túi mật, khe DC tròn, cửa gan, bờ dưới).</li>
              <li><strong>Thùy đuôi (Caudate lobe):</strong> CHỈ thấy ở mặt tạng (sau cửa gan, giữa rãnh TMCD và khe DC tĩnh mạch).</li>
            </ul>
            <div class="callout trap">
              <div class="callout-title">⚠️ Bẫy Phân thùy Gan Kinh điển!</div>
              <ul>
                <li><strong>Khe giữa gan (khe chính)</strong> nối điểm giữa hố túi mật → điểm giữa TMCD (chứa <strong>TM gan giữa</strong>). KHÔNG phải dây chằng liềm!</li>
                <li>Ở mặt hoành, giữa khe giữa và khe trái là <strong>Hạ phân thùy IV</strong>.</li>
                <li><strong>Hạ phân thùy I</strong> = <strong>Thùy đuôi</strong> (KHÔNG phải IV!).</li>
                <li>Khoang gian tiểu thùy có bộ ba khoảng cửa: <strong>ĐM gan + TM cửa + Ống mật</strong> (KHÔNG có TM gan).</li>
              </ul>
            </div>
          </div>
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Nửa gan</th>
                  <th>Phân thùy</th>
                  <th>Hạ phân thùy</th>
                  <th>Khe ranh giới &amp; TM gan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowspan="2"><strong>Gan Trái</strong><br/><em>(Bên trái khe chính)</em></td>
                  <td><strong>Phân thùy giữa</strong></td>
                  <td><strong>HPT I</strong> (Thùy đuôi – mặt tạng)<br/><strong>HPT IV</strong> (giữa khe chính &amp; khe trái)</td>
                  <td rowspan="2"><strong>Khe liên PT trái:</strong> Trùng DC liềm (mặt hoành) &amp; rãnh dọc trái (mặt tạng) → chứa <strong>TM gan trái</strong></td>
                </tr>
                <tr>
                  <td><strong>Phân thùy bên</strong></td>
                  <td><strong>HPT II</strong> (sau/trên)<br/><strong>HPT III</strong> (trước/dưới)</td>
                </tr>
                <tr>
                  <td rowspan="2"><strong>Gan Phải</strong><br/><em>(Bên phải khe chính)</em></td>
                  <td><strong>Phân thùy trước</strong></td>
                  <td><strong>HPT V</strong> (dưới)<br/><strong>HPT VIII</strong> (trên)</td>
                  <td rowspan="2"><strong>Khe liên PT phải:</strong> Từ bờ phải TMCD xuống bờ dưới (cách đầu ngoài ~3 khoát ngón tay) → chứa <strong>TM gan phải</strong></td>
                </tr>
                <tr>
                  <td><strong>Phân thùy sau</strong></td>
                  <td><strong>HPT VI</strong> (dưới)<br/><strong>HPT VII</strong> (trên)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🧪 4. Đường mật Ngoài gan, Tam giác Calot &amp; Cửa gan</div>
        <div class="grid-2">
          <div>
            <ul class="theory-list">
              <li><strong>Đường mật chính (không cắt bỏ được):</strong> Ống gan phải + Ống gan trái → <strong>Ống gan chung</strong> + Ống túi mật → <strong>Ống mật chủ (OMC)</strong> (dài 5–15 cm).</li>
              <li><strong>Đường đi OMC:</strong> Trong bờ phải mạc nối nhỏ (nằm <strong>trước phải TM cửa</strong>, bên phải ĐM gan riêng) → sau D1 tá tràng → rãnh mặt sau đầu tụy → thành sau trong D2 tá tràng (<strong>đoạn trong thành tá tràng hẹp nhất</strong>) → đổ vào nhú tá lớn cùng ống tụy chính.</li>
              <li><strong>Cửa gan (Cuống gan):</strong> 3 thành phần chính là <strong>Ống gan chung, ĐM gan riêng, TM cửa</strong>.</li>
            </ul>
          </div>
          <div>
            <ul class="theory-list">
              <li><strong>Đường mật phụ (có thể cắt bỏ):</strong>
                <ul>
                  <li><strong>Túi mật:</strong> Hình quả lê trong hố túi mật (đáy, thân, cổ); đáy chiếu ngang <strong>sụn sườn 9 đường trung đòn phải</strong>. Không có phúc mạc ở mặt dính gan.</li>
                  <li><strong>Ống túi mật:</strong> Niêm mạc bên trong có <strong>nếp hình xoắn ốc</strong>.</li>
                </ul>
              </li>
              <li><strong>Tam giác gan mật (Tam giác Calot):</strong> Giới hạn bởi <strong>ống gan chung, ống túi mật, mặt tạng của gan</strong> → chứa <strong>ĐM túi mật</strong> (thường tách từ ĐM gan phải).</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Về hình thể ngoài của gan, mô tả nào sau đây là ĐÚNG?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 471 (tr. 71) & Câu 473 (tr. 71)",
        options: [
          "Gan chỉ có một bờ là bờ dưới và dây chằng liềm, dây chằng vành, dây chằng tam giác liên tục với nhau",
          "Gan có hai bờ là bờ trên và bờ dưới",
          "Toàn bộ bề mặt gan đều được phúc mạc tạng bao phủ hoàn toàn",
          "Gan chia thành bốn thùy giải phẫu dựa theo sự phân bố đường mật trong gan"
        ],
        answer: 0,
        explain: "Đáp án 471D & 473D: Gan có 2 mặt (mặt hoành và mặt tạng) và chỉ có 1 bờ duy nhất là bờ dưới sắc. Các dây chằng phúc mạc (liềm – vành – tam giác) liên tiếp nhau; gan vẫn có vùng trần (bare area) không có phúc mạc."
      },
      {
        q: "Ngách gan thận còn có tên gọi là gì?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 472 (tr. 71)",
        options: [
          "Khoang Morison",
          "Khoang dưới hoành",
          "Ngách tá tràng trên",
          "Ngách tá tràng dưới"
        ],
        answer: 0,
        explain: "Đáp án 472C & Tập 2 tr. 44: Ngách gan thận còn gọi là khoang Morison, nằm giữa phần phải mặt tạng gan và thận phải – tuyến thượng thận phải."
      },
      {
        q: "Trong cách phân thùy gan theo phẫu thuật, khe giữa gan (khe chính) có đặc điểm nào sau đây?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 475 (tr. 71)",
        options: [
          "Nối từ điểm giữa hố túi mật đến giữa tĩnh mạch chủ dưới",
          "Đi trùng với dây chằng liềm ở mặt hoành gan",
          "Nối từ giữa tĩnh mạch chủ dưới đến điểm giữa bờ dưới gan",
          "Chia gan phải thành phân thùy trước và phân thùy sau"
        ],
        answer: 0,
        explain: "Đáp án 475C & Tập 2 tr. 47: Khe giữa (khe chính) nối từ điểm giữa hố túi mật đến giữa tĩnh mạch chủ dưới, chứa tĩnh mạch gan giữa, chia gan thành nửa gan phải và nửa gan trái."
      },
      {
        q: "Phân thùy trước của gan phải gồm hai hạ phân thùy nào?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 476 (tr. 72)",
        options: [
          "Hạ phân thùy V và hạ phân thùy VIII",
          "Hạ phân thùy VI và hạ phân thùy VII",
          "Hạ phân thùy II và hạ phân thùy III",
          "Hạ phân thùy I và hạ phân thùy IV"
        ],
        answer: 0,
        explain: "Đáp án 476A & Tập 2 tr. 47: Gan phải gồm phân thùy trước (HPT V ở dưới, VIII ở trên) và phân thùy sau (HPT VI ở dưới, VII ở trên), ngăn cách bởi khe liên phân thùy phải."
      },
      {
        q: "Ở mặt hoành của gan, nằm giữa khe giữa và khe liên phân thùy trái là hạ phân thùy nào?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 477 (tr. 72)",
        options: [
          "Hạ phân thùy IV",
          "Hạ phân thùy III",
          "Hạ phân thùy V",
          "Hạ phân thùy I"
        ],
        answer: 0,
        explain: "Đáp án 477B & Tập 2 tr. 47: Phân thùy giữa của gan trái gồm hạ phân thùy IV (thấy ở cả mặt hoành và mặt tạng) và hạ phân thùy I (thùy đuôi, chỉ thấy ở mặt tạng)."
      },
      {
        q: "Theo cách phân chia gan theo phẫu thuật, khe nào sau đây chứa tĩnh mạch gan phải?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 483 (tr. 73)",
        options: [
          "Khe liên phân thùy phải",
          "Khe liên phân thùy trái",
          "Khe phụ giữa thùy phải",
          "Khe giữa gan"
        ],
        answer: 0,
        explain: "Đáp án 483B & Tập 2 tr. 47: Khe liên phân thùy phải chứa tĩnh mạch gan phải; khe giữa chứa tĩnh mạch gan giữa; khe liên phân thùy trái chứa tĩnh mạch gan trái."
      },
      {
        q: "Ba thành phần chính đi qua cửa gan (cuống gan) là gì?",
        source: "Giải phẫu học YDS Tập 2 – Câu TLG 2 (tr. 52) & TN 2024 Câu 485 (tr. 73)",
        options: [
          "Ống gan chung, động mạch gan riêng, tĩnh mạch cửa",
          "Ống gan chung, động mạch gan riêng, tĩnh mạch chủ dưới",
          "Ống gan chung, động mạch gan riêng, tĩnh mạch gan",
          "Động mạch gan riêng, tĩnh mạch gan, tĩnh mạch cửa"
        ],
        answer: 0,
        explain: "Đáp án 485B & Tập 2 tr. 44, 52: Cửa gan là nơi động mạch gan riêng, tĩnh mạch cửa đi vào gan và các ống gan (ống gan chung) đi ra."
      },
      {
        q: "Theo Giáo trình Giải phẫu học YDS Tập 2 (tr. 46), ở mỗi khoang gian tiểu thùy gan có bộ ba khoảng cửa gồm những cấu trúc nào?",
        source: "Giải phẫu học YDS Tập 2 – Bài 24, mục 3.3 Mô gan (tr. 46)",
        options: [
          "Nhánh tĩnh mạch cửa, nhánh động mạch gan, ống mật",
          "Nhánh tĩnh mạch gan, nhánh động mạch gan, ống mật",
          "Nhánh tĩnh mạch cửa, nhánh tĩnh mạch gan, động mạch gan",
          "Tĩnh mạch trung tâm tiểu thùy, tĩnh mạch cửa, ống mật"
        ],
        answer: 0,
        explain: "Tập 2 tr. 46 ghi rõ: 'Ở mỗi khoang gian tiểu thùy có một bộ ba khoảng cửa gồm nhánh tĩnh mạch cửa, nhánh động mạch gan, ống mật.' (Tĩnh mạch trung tâm tiểu thùy nằm ở trung tâm tiểu thùy và đổ về 3 tĩnh mạch gan)."
      },
      {
        q: "Thành phần nào sau đây được xem là đường mật phụ (có thể cắt bỏ khi cần)?",
        source: "Giải phẫu học YDS Tập 2 – Câu TLG 3 (tr. 52) & TN 2024 Câu 487 (tr. 73)",
        options: [
          "Ống túi mật (cùng với túi mật)",
          "Ống gan phải",
          "Ống gan trái",
          "Ống mật chủ"
        ],
        answer: 0,
        explain: "Đáp án 487C & Tập 2 tr. 50: Đường mật chính (không cắt bỏ được) gồm ống gan phải, ống gan trái, ống gan chung, ống mật chủ. Đường mật phụ là túi mật và ống túi mật."
      },
      {
        q: "Thông thường, ống mật chủ hẹp nhất ở vị trí nào?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 481 (tr. 72)",
        options: [
          "Đoạn trong thành tá tràng",
          "Ngay bờ trên phần trên (D1) tá tràng",
          "Đoạn đi sau phần trên (D1) tá tràng",
          "Đoạn đi sau đầu tụy"
        ],
        answer: 0,
        explain: "Đáp án sách 481D (tr. 200): Đoạn trong thành tá tràng là đoạn hẹp nhất của ống mật chủ (nơi sỏi mật dễ bị kẹt lại nhất ở bóng Vater gây tắc mật và viêm tụy cấp)."
      },
      {
        q: "Thành phần nào sau đây KHÔNG có ở mặt tạng của gan?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 491 (tr. 74)",
        options: [
          "Dây chằng liềm",
          "Cửa gan",
          "Khuyết dây chằng tròn",
          "Khe dây chằng tĩnh mạch"
        ],
        answer: 0,
        explain: "Đáp án 491D: Dây chằng liềm bám ở mặt hoành gan (ngăn cách thùy phải và thùy trái phía trên/trước). Mặt tạng gồm 2 rãnh dọc (hố túi mật/rãnh TMCD và khuyết DC tròn/khe DC tĩnh mạch) và rãnh ngang (cửa gan)."
      },
      {
        q: "Tam giác gan mật (Tam giác Calot) thường chứa động mạch túi mật được giới hạn bởi ba thành phần nào?",
        source: "Giải phẫu học YDS Tập 2 – Bài 24 (tr. 50)",
        options: [
          "Ống gan chung, ống túi mật và mặt tạng của gan",
          "Ống mật chủ, tĩnh mạch cửa và bờ trên tá tràng",
          "Ống gan phải, ống gan trái và tĩnh mạch chủ dưới",
          "Dây chằng liềm, dây chằng tròn và túi mật"
        ],
        answer: 0,
        explain: "Tập 2 tr. 50: Tam giác gan mật (Calot) được giới hạn bởi ống gan chung, ống túi mật và mặt tạng của gan. Trong tam giác này thường có ĐM túi mật (tách từ ĐM gan phải)."
      }
    ]
  },

  // ========================================================================
  // BÀI 3: TỤY, KHỐI TÁ TỤY & HỆ ỐNG TỤY
  // ========================================================================
  {
    id: 3,
    group: "I. MODULE TIÊU HÓA",
    title: "Bài 3: Tụy, Khối Tá tụy & Hệ Ống tiết – Mạch máu Tụy",
    shortTitle: "Tụy & Khối Tá tụy",
    textbookRef: "Giải phẫu học YDS Tập 2 – Bài 25: Tụy (tr. 53–61) & Bài 22: Tá tràng (tr. 22–23)",
    summary: "Hình thể 4 phần (đầu – mỏm móc – cổ/khuyết tụy – thân – đuôi tụy); liên quan với bó mạch MTTT & hội chứng Von Rokitansky (D3); ống Wirsung – bóng Vater – cơ vòng Oddi & ống Santorini; 2 cung mạch đầu tụy & mạch thân đuôi từ ĐM lách; 4 loại tế bào nội tiết.",
    modelId: "model_pancreas",
    modelTitle: "Mô hình 3D Khối Tá tụy: Mỏm móc – Bó mạch MTTT – Ống Wirsung/OMC & Bóng Vater",
    simId: "sim_pancreas",
    simTitle: "Phòng Thực hành Khối Tá Tụy: U đầu tụy – Sỏi Bóng Vater – Chèn ép D3",
    flashcards: [
      { front: "Bó mạch nào ấn vào tụy tạo nên khuyết tụy (cổ tụy)?", back: "Bó mạch MẠC TREO TRÀNG TRÊN (không phải dưới!). Sau cổ tụy còn có chỗ hợp lưu tạo Tĩnh mạch cửa (TM lách + TM MTTT)." },
      { front: "Mỏm móc tụy và phần ngang (D3) tá tràng nằm kẹp giữa hai mạch nào?", back: "Kẹp giữa ĐỘNG MẠCH CHỦ BỤNG ở phía sau và ĐỘNG MẠCH MẠC TREO TRÀNG TRÊN ở phía trước (gây Hội chứng ĐM MTTT / Von Rokitansky)." },
      { front: "Sự khác nhau giữa Ống tụy chính (Wirsung) và Ống tụy phụ (Santorini)?", back: "Wirsung đi từ đuôi → thân → đầu tụy, 50% hợp nhất OMC tạo bóng gan–tụy (Vater) đổ vào NHÚ TÁ LỚN (cách môn vị 8–10 cm). Santorini đổ vào NHÚ TÁ BÉ (trên & trước nhú tá lớn ~2 cm)." },
      { front: "Tại sao sỏi ống mật chủ kẹt bóng Vater dễ gây viêm tụy cấp?", back: "Ở 50% trường hợp OMC hợp với ống tụy chính tạo đoạn chung (bóng Vater) có cơ vòng Oddi bao quanh → sỏi kẹt làm dịch mật trào ngược vào ống tụy hoạt hóa men tụy." },
      { front: "2 nguồn cấp máu cho tụy và tên các nhánh thân – đuôi tụy?", back: "Đầu tụy: cung trước & sau (ĐM tá tụy trên trước/sau từ ĐM vị tá tràng + ĐM tá tụy dưới trước/sau từ ĐM MTTT). Thân & đuôi tụy: ĐM tụy lưng, ĐM tụy lớn, ĐM đuôi tụy (từ ĐM LÁCH) và ĐM tụy ngang." },
      { front: "4 loại tế bào tiểu đảo tụy nội tiết (Langerhans) và phân bố?", back: "A (Alpha): Glucagon (nhiều ở thân/đuôi); B (Beta): Insulin (đồng đều); D (Delta): Somatostatin (đồng đều); F (PP): Pancreatic polypeptide ức chế ngoại tiết (nhiều ở mỏm móc)." }
    ],
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🧩 1. Hình thể ngoài &amp; Liên quan 4 Phần của Tụy</div>
          <ul class="theory-list">
            <li><strong>Vị trí chung:</strong> Tạng đặc, vừa ngoại tiết vừa nội tiết, dài ~<strong>15 cm</strong>, hình cái búa, nằm sau dạ dày, sát thành bụng sau (tạng <strong>sau phúc mạc thứ phát</strong>), vắt ngang cột sống thắt lưng từ D2 tá tràng đến rốn lách.</li>
            <li><strong>1.1. Đầu tụy:</strong> Dẹt, nằm trong khung tá tràng chữ C (D2 dính chặt đầu tụy nhất).
              <ul>
                <li><strong>Mỏm móc (Uncinate process):</strong> Ở dưới-trái đầu tụy, nằm <strong>kẹp giữa ĐMC bụng (sau) và bó mạch MTTT (trước)</strong>.</li>
                <li><em>Mặt trước:</em> Có rễ mạc treo kết tràng ngang bám &amp; rãnh ĐM vị tá tràng.</li>
                <li><em>Mặt sau:</em> Liên quan TMCD, ĐM thận phải, trụ phải cơ hoành, và <strong>ống mật chủ</strong> xẻ rãnh (hoặc thành ống) ở phía trên ngoài → <strong>U đầu tụy chèn ép OMC gây vàng da tắc mật</strong>.</li>
              </ul>
            </li>
            <li><strong>1.2. Cổ tụy (Khuyết tụy):</strong> Mỏng, nằm ngay trước <strong>bó mạch MTTT</strong>; mặt sau liên quan <strong>chỗ hợp lưu tạo Tĩnh mạch cửa</strong> (TM lách + TM MTTT).</li>
            <li><strong>1.3. Thân tụy:</strong> 3 mặt (trước, sau, dưới), 3 bờ (trên, trước, dưới):
              <ul>
                <li><em>Mặt trước:</em> Phủ phúc mạc, qua <strong>hậu cung mạc nối</strong> liên quan dạ dày.</li>
                <li><em>Mặt sau:</em> Không phúc mạc, bắt ngang ĐMC bụng, gốc ĐM MTTT, trụ trái hoành, thượng thận trái, thận trái và <strong>TM lách</strong> sát mặt sau.</li>
                <li><em>Bờ trên:</em> Liên quan ĐM thân tạng, ĐM gan chung, ĐM lách. <em>Bờ trước:</em> Mạc treo kết tràng ngang bám.</li>
              </ul>
            </li>
            <li><strong>1.4. Đuôi tụy:</strong> Dài ~3 cm (1–7 cm), hướng về <strong>rốn lách</strong> (có khi chạm trực tiếp rốn lách, có khi ngắn không chạm).</li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">🧪 2. Hệ Ống tiết Tụy &amp; Khối Tá tụy (D1–D4)</div>
          <ul class="theory-list">
            <li><strong>Ống tụy chính (Wirsung):</strong> Bắt đầu từ <strong>đuôi tụy</strong>, chạy dọc thân→đầu (đường kính 3–4 mm, lớn dần về đầu tụy). Trong thành D2 tá tràng: <strong>50% hợp với ống mật chủ tạo Bóng gan–tụy (bóng Vater)</strong> đổ vào <strong>nhú tá lớn</strong> (cách lỗ môn vị 8–10 cm ở <strong>thành sau trong D2</strong>); 50% còn lại đổ bằng 2 lỗ riêng.</li>
            <li><strong>Cơ vòng bóng gan–tụy (Oddi / Boyden):</strong> Gồm 4 phần (cơ vòng trên, cơ vòng dưới, cơ vòng bóng, cơ vòng tụy), dài 6–30 mm.</li>
            <li><strong>Ống tụy phụ (Santorini):</strong> Dẫn dịch phần trên trước đầu tụy, đổ vào <strong>nhú tá bé</strong> (phía trên &amp; trước nhú tá lớn ~2 cm).</li>
          </ul>
          <div class="callout trap">
            <div class="callout-title">⚠️ Điểm Nóng Đề thi Khối Tá Tụy</div>
            <ul>
              <li><strong>Tá tràng D1:</strong> 2/3 đầu di động = <strong>hành tá tràng</strong> (có dây chằng gan–tá tràng bám).</li>
              <li><strong>Tá tràng D2:</strong> Dính chặt đầu tụy nhất; mặt trước có kết tràng ngang bắt ngang; <strong>thành sau trong</strong> có nhú tá lớn &amp; nhú tá bé.</li>
              <li><strong>Tá tràng D3 (phần ngang):</strong> Bắt ngang cột sống L3–L4, kẹp giữa ĐMC bụng (sau) và ĐM MTTT (trước) → dễ vỡ khi chấn thương bụng kín &amp; <strong>Hội chứng ĐM MTTT (Von Rokitansky)</strong>.</li>
              <li><strong>Góc tá–hỗng tràng (D4):</strong> Treo bởi <strong>cơ treo tá tràng (Treitz)</strong> từ trụ phải cơ hoành.</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="card-title">🩸 3. Hai Nguồn Cấp máu &amp; Dẫn lưu Tĩnh mạch Tụy</div>
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Vùng Tụy</th>
                  <th>Nguồn Động mạch</th>
                  <th>Dẫn lưu Tĩnh mạch</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Đầu tụy &amp; Tá tràng</strong><br/><em>(2 Cung ĐM trước &amp; sau)</em></td>
                  <td>• <strong>Cung trước</strong> (gần tá tràng hơn): ĐM tá tụy trên trước (ĐM vị tá tràng) ↔ ĐM tá tụy dưới trước (ĐM MTTT).<br/>• <strong>Cung sau:</strong> ĐM tá tụy trên sau (ĐM vị tá tràng) ↔ ĐM tá tụy dưới sau (ĐM MTTT).</td>
                  <td>Tạo 2 cung TM tương ứng: TM tá tụy trên trước &amp; dưới trước → <strong>TM MTTT</strong>; TM tá tụy trên sau → <strong>TM cửa</strong>; TM tá tụy dưới sau → TM MTTT.</td>
                </tr>
                <tr>
                  <td><strong>Thân &amp; Đuôi tụy</strong></td>
                  <td>• Từ <strong>ĐM lách:</strong> <strong>ĐM tụy lưng</strong>, <strong>ĐM tụy lớn</strong>, <strong>ĐM đuôi tụy</strong>.<br/>• <strong>ĐM tụy ngang (tụy dưới):</strong> từ ĐM tụy lưng (hoặc ĐM MTTT).</td>
                  <td>Đổ về <strong>TM lách</strong> (ở trên) và <strong>TM tụy ngang</strong> (ở dưới → TM MTTT/MTTD/lách).</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style="font-size:13.5px;color:var(--text-muted);"><strong>Thần kinh tụy:</strong> Giao cảm (TK tạng lớn &amp; bé → đám rối tạng &amp; MTTT, giải thích đau tụy lan ra sau lưng); Đối giao cảm (nhánh tạng thân TK lang thang sau).</p>
        </div>

        <div class="card">
          <div class="card-title">🔬 4. Tụy Nội tiết (Tiểu đảo Langerhans ~2%)</div>
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Loại Tế bào</th>
                  <th>Hormon &amp; Chức năng</th>
                  <th>Phân bố Đặc trưng</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Tế bào A (Alpha)</strong></td>
                  <td><strong>Glucagon</strong> → tăng đường huyết</td>
                  <td>Nhiều ở <strong>thân &amp; đuôi tụy</strong>, ít ở mỏm móc</td>
                </tr>
                <tr>
                  <td><strong>Tế bào B (Beta)</strong></td>
                  <td><strong>Insulin</strong> → giảm đường huyết</td>
                  <td>Phân bố đồng đều khắp tụy</td>
                </tr>
                <tr>
                  <td><strong>Tế bào D (Delta)</strong></td>
                  <td><strong>Somatostatin</strong> → ức chế tiết insulin &amp; glucagon</td>
                  <td>Phân bố đồng đều khắp tụy</td>
                </tr>
                <tr>
                  <td><strong>Tế bào F (PP)</strong></td>
                  <td><strong>Pancreatic polypeptide</strong> → ức chế ngoại tiết tụy</td>
                  <td>Nhiều ở <strong>mỏm móc</strong>, ít ở thân &amp; đuôi</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Về giải phẫu tụy, câu nào sau đây là SAI?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 441 (tr. 66–67) & Tập 2 Câu TLG 1 (tr. 60)",
        options: [
          "Bó mạch mạc treo tràng dưới ấn vào tụy tạo nên cổ tụy",
          "Tụy nằm vắt ngang cột sống đoạn thắt lưng, sau hậu cung mạc nối",
          "Sau cổ tụy liên quan với đoạn đầu tiên của tĩnh mạch cửa",
          "Bờ trên của thân tụy liên quan với bó mạch lách"
        ],
        answer: 0,
        explain: "Đáp án 441B & Tập 2 tr. 54: Cổ tụy (khuyết tụy) là vết ấn của bó mạch MẠC TREO TRÀNG TRÊN (không phải mạc treo tràng dưới!). Mặt sau cổ tụy liên quan chỗ hợp lưu tạo tĩnh mạch cửa."
      },
      {
        q: "Trong các phát biểu sau về tụy, câu nào ĐÚNG?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 470 (tr. 71)",
        options: [
          "Mỏm móc tụy nằm sau bó mạch mạc treo tràng trên",
          "Tụy là một tạng rỗng nằm ở tầng trên mạc treo kết tràng ngang",
          "Đuôi tụy luôn luôn tiếp xúc trực tiếp với rốn lách",
          "Toàn bộ tụy được cấp máu chỉ bởi động mạch lách"
        ],
        answer: 0,
        explain: "Đáp án 470B: Tụy là tạng đặc nằm cả ở tầng trên và tầng dưới mạc treo kết tràng ngang; đuôi tụy có thể ngắn không chạm rốn lách; đầu tụy được cấp máu bởi ĐM vị tá tràng và ĐM MTTT. Mỏm móc nằm phía sau bó mạch MTTT và phía trước ĐMC bụng."
      },
      {
        q: "Về tụy, các đặc điểm sau đều đúng, NGOẠI TRỪ:",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 469 (tr. 70–71)",
        options: [
          "Mặt sau thân tụy liên quan với hậu cung mạc nối",
          "Phần lớn nằm ở tầng trên mạc treo kết tràng ngang",
          "Cổ tụy chính là vết ấn của bó mạch mạc treo tràng trên",
          "Bờ trước của thân tụy có mạc treo kết tràng ngang bám"
        ],
        answer: 0,
        explain: "Đáp án 469C: MẶT TRƯỚC thân tụy mới liên quan hậu cung mạc nối và dạ dày; mặt sau thân tụy liên quan ĐMC bụng, thận trái và tuyến thượng thận trái."
      },
      {
        q: "Chọn câu ĐÚNG về hệ ống tiết của tụy và khối tá tụy?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 437 (tr. 66)",
        options: [
          "Bóng gan tụy là đoạn chung của ống mật chủ và ống tụy chính",
          "Ống tụy chính bắt đầu từ đầu tụy và đổ vào phần xuống tá tràng",
          "Ống mật chủ có đoạn đi phía sau đầu tụy và đây là đoạn hẹp nhất",
          "Nhú tá lớn ở phía trên nhú tá bé"
        ],
        answer: 0,
        explain: "Đáp án 437D: Ống tụy chính bắt đầu từ đuôi tụy; nhú tá lớn nằm ở dưới nhú tá bé ~2 cm; khoảng 50% ống tụy chính hợp với ống mật chủ trong thành tá tràng tạo bóng gan tụy (bóng Vater)."
      },
      {
        q: "Nhú tá lớn (nơi đổ vào của bóng gan tụy) có đặc điểm nào sau đây?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 440 (tr. 66)",
        options: [
          "Ở thành sau trong phần xuống tá tràng",
          "Ở phía trên nhú tá bé",
          "Cách lỗ môn vị khoảng 15 cm",
          "Ở đỉnh nhú có lỗ của ống tụy phụ"
        ],
        answer: 0,
        explain: "Đáp án 440C: Nhú tá lớn nằm ở thành sau trong phần xuống (D2) tá tràng, cách lỗ môn vị khoảng 8–10 cm, dưới nhú tá bé ~2 cm."
      },
      {
        q: "Mặt sau khối tá tụy KHÔNG liên quan với cấu trúc nào sau đây?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 448 (tr. 67–68)",
        options: [
          "Rễ mạc treo kết tràng ngang",
          "Tĩnh mạch chủ dưới",
          "Ống mật chủ",
          "Mạc dính tá tụy"
        ],
        answer: 0,
        explain: "Đáp án 448C: Rễ mạc treo kết tràng ngang bám vào MẶT TRƯỚC khối tá tụy (đầu tụy và bờ trước thân tụy), không nằm ở mặt sau."
      },
      {
        q: "Động mạch tụy lớn cung cấp máu cho thân và đuôi tụy xuất phát từ động mạch nào?",
        source: "Giải phẫu học YDS Tập 2 – Câu tự lượng giá 2 (tr. 61)",
        options: [
          "Động mạch lách",
          "Động mạch tá tụy dưới chung",
          "Động mạch gan chung",
          "Động mạch mạc treo tràng trên"
        ],
        answer: 0,
        explain: "Tập 2 tr. 57: Động mạch tụy lớn (cùng ĐM tụy lưng và ĐM đuôi tụy) xuất phát từ động mạch lách để cấp máu cho thân và đuôi tụy."
      },
      {
        q: "Các động mạch của đầu tụy và tá tràng hầu hết xuất phát từ hai nguồn động mạch nào?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 246 (tr. 37)",
        options: [
          "Động mạch vị tá tràng và động mạch mạc treo tràng trên",
          "Động mạch vị tá tràng và động mạch lách",
          "Động mạch mạc treo tràng dưới và động mạch gan riêng",
          "Động mạch vị tá tràng và động mạch mạc treo tràng dưới"
        ],
        answer: 0,
        explain: "Đáp án 246A & Tập 2 tr. 56: Cung ĐM đầu tụy trước và sau được tạo bởi ĐM tá tụy trên trước/sau (nhánh ĐM vị tá tràng) nối với ĐM tá tụy dưới trước/sau (nhánh ĐM MTTT)."
      },
      {
        q: "Thành phần nào bắt chéo phía trước phần ngang (D3) của tá tràng?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 439 (tr. 66)",
        options: [
          "Động mạch mạc treo tràng trên",
          "Động mạch thận phải",
          "Động mạch kết tràng trái",
          "Động mạch mạc treo tràng dưới"
        ],
        answer: 0,
        explain: "Đáp án 439C: ĐM mạc treo tràng trên đi ở phía trước mỏm móc tụy và bắt chéo phía trước phần ngang (D3) tá tràng, kẹp D3 với ĐMC bụng ở sau (Hội chứng ĐM MTTT)."
      },
      {
        q: "Bệnh nhân nữ 15 tuổi gầy ốm, đau bụng và nôn sau ăn, được chẩn đoán Hội chứng động mạch mạc treo tràng trên. Phần ngang (D3) tá tràng bị kẹp giữa ĐM mạc treo tràng trên ở trước và cấu trúc nào ở sau?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 1141 (tr. 175)",
        options: [
          "Động mạch chủ bụng",
          "Tĩnh mạch chủ dưới",
          "Tĩnh mạch mạc treo tràng trên",
          "Thận phải"
        ],
        answer: 0,
        explain: "Đáp án 1141A: Phần ngang (D3) tá tràng nằm trước ĐMC bụng và sau ĐM MTTT nên khi góc kẹp hẹp sẽ bị chèn ép giữa ĐMC bụng và ĐM MTTT (cũng như TM thận trái trong Hội chứng Nutcracker)."
      },
      {
        q: "Bệnh nhân nam 53 tuổi đau bụng, sụt cân, được chẩn đoán u đầu tụy. Dấu hiệu lâm sàng nào sau đây giúp củng cố chẩn đoán u đầu tụy do liên quan giải phẫu trực tiếp?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 1146 (tr. 176)",
        options: [
          "Vàng da (tắc mật)",
          "Tiêu ra máu tươi",
          "Nôn ra máu ồ ạt",
          "Khàn tiếng"
        ],
        answer: 0,
        explain: "Đáp án 1146A (tr. 213): Ống mật chủ có đoạn đi ngay phía sau (xẻ rãnh trong nhu mô) đầu tụy, nên u đầu tụy sẽ chèn ép ống mật chủ gây vàng da tắc mật."
      },
      {
        q: "Trong tiểu đảo tụy nội tiết (Langerhans), tế bào F (tế bào PP) tiết pancreatic polypeptide tập trung nhiều nhất ở phần nào của tụy?",
        source: "Giải phẫu học YDS Tập 2 – Bài 25, mục 4 Tụy nội tiết (tr. 60)",
        options: [
          "Mỏm móc tụy",
          "Đuôi tụy",
          "Thân tụy",
          "Chỉ có ở tụy phụ"
        ],
        answer: 0,
        explain: "Tập 2 tr. 60: Trong mô tụy, tế bào B và D phân bố đồng đều, trong khi ở mỏm móc thì nhiều tế bào F (ức chế ngoại tiết) nhưng ít tế bào A, còn ở thân và đuôi tụy thì nhiều tế bào A và ít tế bào F."
      }
    ]
  }
];
