// ==========================================================================
// DỮ LIỆU BÀI HỌC PHẦN 1: CHUYÊN ĐỀ I – TỔN THƯƠNG CƠ BẢN CỦA TẾ BÀO VÀ MÔ
// Chuẩn Giáo trình Giải phẫu bệnh đại cương (Ngô Quốc Đạt, Lê Minh Huy) – Bài 3 (tr. 48–75)
// Gồm Bài 1, Bài 2, Bài 3
// ==========================================================================

window.LESSONS_PART1 = [
  // ========================================================================
  // BÀI 1: ĐẠI CƯƠNG, NGUYÊN NHÂN, CƠ CHẾ BỆNH SINH & ĐÁP ỨNG BÀO QUAN
  // ========================================================================
  {
    id: 1,
    group: "I. TỔN THƯƠNG CƠ BẢN TẾ BÀO & MÔ",
    title: "Bài 1: Đại cương, Nguyên nhân, Cơ chế Bệnh sinh & Đáp ứng Bào quan",
    shortTitle: "Đại cương & Cơ chế Tổn thương TB",
    textbookRef: "Giải phẫu bệnh đại cương YDS – Bài 3 (Mục 1 & Mục 2, tr. 48–55)",
    summary: "Học thuyết bệnh học tế bào Rudolf Virchow; Stress nội/ngoại sinh; 6 nhóm nguyên nhân gây tổn thương; 4 cơ chế bệnh sinh cốt lõi (ATP, màng, protein, DNA); đáp ứng 5 bào quan và 3 phản ứng của tế bào với stress.",
    simId: "sim_atp_organelle",
    simTitle: "Phòng Lab Cơ chế Suy giảm ATP, ROS & Đáp ứng Bào quan",
    figureIds: [],
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">📖 1. Đại cương Bệnh học Tế bào</div>
          <ul class="theory-list">
            <li>Tế bào là đơn vị cơ bản của cơ thể sống; mọi rối loạn bệnh lý (viêm nhiễm, thoái hóa, tân sinh...) đều khởi nguồn từ biến đổi bệnh lý ở cấp độ tế bào.</li>
            <li><strong>Rudolf Virchow (thế kỷ XIX):</strong> Cha đẻ của ngành Giải phẫu bệnh hiện đại, xác lập khái niệm <em>Bệnh học tế bào</em> với nhận định nền tảng: <strong>"Tế bào bệnh là cơ sở của cơ thể bệnh"</strong>.</li>
            <li>Thay đổi hình thái phản ánh sự biến đổi cấu trúc, chức năng đặc trưng của tế bào/mô, giúp chẩn đoán nguyên nhân, đánh giá mức độ tổn thương và tiến tới kỷ nguyên y học chính xác nhờ giải phẫu bệnh phân tử.</li>
            <li>Tổn thương tế bào kết hợp với rối loạn chất nền ngoại bào sẽ dẫn đến tổn thương mô và cơ quan.</li>
          </ul>
          <div class="callout pearl">
            <div class="callout-title">⚡ Phân loại Yếu tố Gây hại (Stress)</div>
            <ul>
              <li><strong>Stress nội sinh:</strong> Rối loạn chuyển hóa, mất cân bằng ion, thiếu oxy, tổn thương DNA, mất điều hòa protein nội bào...</li>
              <li><strong>Stress ngoại sinh:</strong> Yếu tố vật lý (nhiệt độ, áp suất), hóa chất độc, tia bức xạ, nhiễm vi sinh vật và yếu tố cơ học.</li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card-title">☣️ 2.1. Sáu Nhóm Nguyên nhân Chính Gây Tổn thương Tế bào</div>
          <ol class="theory-list">
            <li><strong>Thiếu oxy (Nguyên nhân phổ biến nhất):</strong> Làm suy giảm phosphoryl hóa oxy hóa tại ty thể → giảm tổng hợp ATP:
              <br/>• <em>Thiếu máu cục bộ:</em> giảm/tắc dòng máu nuôi mô (nhồi máu cơ tim, nhồi máu não).
              <br/>• <em>Giảm oxy máu:</em> suy hô hấp, rối loạn khuếch tán khí.
              <br/>• <em>Thiếu vận chuyển oxy:</em> thiếu máu toàn thân, ngộ độc CO hoặc giảm hemoglobin.</li>
            <li><strong>Tác nhân vật lý:</strong> Nhiệt độ cao (biến tính protein, hủy màng); Nhiệt độ thấp (kết tinh nước nội bào, vỡ màng, tổn thương mạch); Chấn thương cơ học (rách màng, đứt gãy mô); Tia điện &amp; dòng điện (biến đổi điện thế màng, rối loạn dẫn truyền thần kinh – cơ, tổn thương nơi tiếp xúc); Tia xạ ion hóa (hỏng DNA trực tiếp hoặc gián tiếp qua gốc tự do).</li>
            <li><strong>Tác nhân hóa học &amp; thuốc:</strong> Biến đổi màng (chất tẩy rửa, dung môi hữu cơ như CCl₄); ức chế/bất hoạt enzym nội bào (kim loại nặng như chì, thủy ngân); tạo gốc tự do qua chuyển hóa không hoàn toàn tại gan; độc chọn lọc tế bào phân chia nhanh (thuốc hóa trị, paracetamol liều cao gây hoại tử gan).</li>
            <li><strong>Tác nhân sinh học:</strong> Virus (xâm nhập, hòa nhập &amp; sao chép di truyền gây chết tế bào); Vi khuẩn (giải phóng nội/ngoại độc tố gây viêm, hoại tử); Ký sinh trùng &amp; nấm (phá hủy mô, phản ứng miễn dịch mạnh).</li>
            <li><strong>Rối loạn miễn dịch:</strong> Phản ứng quá mẫn (lupus ban đỏ hệ thống) hoặc Tự miễn dịch (tấn công tế bào tự thân).</li>
            <li><strong>Rối loạn di truyền:</strong> Thiếu hụt enzym chuyển hóa (bệnh tích trữ tiêu thể gây ứ đọng chất nền) hoặc Rối loạn tổng hợp protein (bất thường màng, tích tụ chất độc nội bào).</li>
          </ol>
        </div>
      </div>

      <div class="card">
        <div class="card-title">⚙️ 2.2. Bốn Cơ chế Bệnh sinh Cốt lõi của Tổn thương Tế bào</div>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Cơ chế bệnh sinh</th>
                <th>Nguyên nhân khởi phát</th>
                <th>Chuỗi hậu quả sinh hóa – cấu trúc chi tiết</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Suy giảm tổng hợp ATP</strong></td>
                <td>Thiếu oxy (gián đoạn phosphoryl hóa oxy hóa tại mào ty thể) hoặc độc chất ức chế chuỗi hô hấp (cyanide).</td>
                <td>
                  • <strong>Ức chế bơm Na⁺/K⁺-ATPase:</strong> Na⁺ tích tụ trong tế bào kéo theo nước → <em>sưng phù tế bào</em>; K⁺ thoát ra ngoài → đổi điện thế màng.<br/>
                  • <strong>Tăng đường phân kỵ khí:</strong> tạo <em>lactate</em> → giảm pH nội bào → kết tủa chất nhiễm sắc, ức chế enzym và tổn thương cấu trúc.<br/>
                  • <strong>Suy giảm tổng hợp protein:</strong> đình trệ sản xuất protein màng và enzym sống còn.<br/>
                  • <strong>Rối loạn bơm Ca²⁺-ATPase:</strong> Ca²⁺ nội bào (bình thường cực thấp, cô lập trong lưới nội bào và ty thể) tăng vọt → tổn thương màng ty thể tạo <em>kênh chuyển tiếp tính thấm</em> → mất điện thế màng, hoạt hóa 4 enzym hủy hoại: <strong>phospholipase</strong> (hủy phospholipid màng), <strong>protease</strong> (hủy protein khung tế bào), <strong>endonuclease</strong> (cắt DNA nhân) và giải phóng <strong>cytochrome c</strong> khởi động apoptosis.
                </td>
              </tr>
              <tr>
                <td><strong>2. Tổn thương màng tế bào</strong><br/><span class="lvl-badge lvl-3">Điểm không thể quay lại!</span></td>
                <td>
                  • <strong>ROS:</strong> superoxide (O₂⁻), hydroxyl radical (•OH), hydrogen peroxide (H₂O₂) gây peroxy hóa lipid.<br/>
                  • <strong>Giảm ATP:</strong> ↓ tổng hợp phospholipid.<br/>
                  • <strong>Tăng Ca²⁺ nội bào:</strong> hoạt hóa phospholipase.
                </td>
                <td>
                  • <strong>Màng tế bào:</strong> mất tính chọn lọc, nước &amp; Ca²⁺ ồ ạt vào trong, enzym nội bào thoát ra → sưng phù và phá hủy tế bào.<br/>
                  • <strong>Màng ty thể:</strong> rối loạn hô hấp, ngừng tổng hợp ATP, giải phóng protein gây chết không hồi phục (hoại tử).<br/>
                  • <strong>Màng tiêu thể (Lysosome):</strong> giải phóng enzym tiêu hóa mạnh vào bào tương → tự tiêu hủy bào quan &amp; màng → tế bào chết không hồi phục.
                </td>
              </tr>
              <tr>
                <td><strong>3. Rối loạn con đường sinh hóa (tổng hợp protein)</strong></td>
                <td>Thiếu oxy (↓ ATP); Tổn thương lưới nội chất hạt (ER stress); Độc tố (như độc tố bạch hầu ức chế trực tiếp dịch mã).</td>
                <td>Thiếu hụt enzym chức năng, protein cấu trúc và yếu tố điều hòa; tích tụ protein sai cấu trúc (misfolded proteins) gây đáp ứng căng thẳng ER → nếu không kiểm soát sẽ kích hoạt apoptosis; hình thành các thể vùi nội bào độc tế bào.</td>
              </tr>
              <tr>
                <td><strong>4. Tổn thương DNA</strong></td>
                <td>Gốc tự do (đứt gãy chuỗi xoắn kép), Tia xạ ion hóa (tia X, gamma), Tia cực tím UV (tạo liên kết bất thường giữa các base liền kề), Hóa chất gắn DNA.</td>
                <td>Sửa chữa DNA không hiệu quả → tích lũy đột biến, thay đổi trình tự gen → tổng hợp protein bất thường. Nếu vượt ngưỡng hồi phục, protein <strong>p53 ("người canh gác của bộ gen")</strong> sẽ chặn chu kỳ tế bào, kích hoạt sửa DNA hoặc thúc đẩy apoptosis để ngăn ngừa ung thư.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="card-title">🔬 2.3. Năm Đáp ứng của Bào quan với Tổn thương</div>
          <ul class="theory-list">
            <li><strong>1. Tiêu thể &amp; Tự thực (Autophagy):</strong> Khi stress (thiếu dinh dưỡng, hỏng ty thể), bào quan hư hại được bọc bởi <em>màng kép</em> thành <strong>thể tự thực bào nguyên phát</strong> → hợp nhất với tiêu thể thành <strong>thể tự thực – tiêu thể (thứ phát)</strong> để phân hủy tái chế. Nếu quá mức → mất khối lượng bào quan → tự tiêu và chết tế bào <em>không gây viêm</em> (gặp ở gan suy dinh dưỡng, bệnh thần kinh tích lũy protein).</li>
            <li><strong>2. Lưới nội bào trơn giãn &amp; tăng sinh:</strong> Nơi tổng hợp lipid, steroid và khử độc qua hệ <strong>cytochrome P450</strong>. Tiếp xúc thuốc như <strong>phenobarbital</strong> làm lưới nội bào trơn giãn thành các ống nhỏ (thấy dưới kính hiển vi điện tử) → làm thay đổi dược động học, tăng độc tính khi phối hợp đa thuốc.</li>
            <li><strong>3. Biến đổi ty thể:</strong> (a) <em>Phù ty thể</em> (mất cân bằng ion/nước, mất cấu trúc mào trong thiếu oxy/nhiễm độc); (b) <em>Tăng sinh ty thể</em> (thích nghi khi tăng nhu cầu năng lượng như phì đại cơ tim); (c) <em>Ty thể khổng lồ hoặc bất thường</em> (bệnh chuyển hóa, viêm gan do rượu, bệnh cơ ty thể). Vỡ màng ngoài giải phóng cytochrome c là dấu hiệu tổn thương không hồi phục.</li>
            <li><strong>4. Tổn thương bộ xương tế bào (actin, vi ống, sợi trung gian):</strong> Biến dạng tế bào, rối loạn vận chuyển bào quan, tích tụ protein biến tính:
              <br/>• <strong>Thể Mallory-Denk:</strong> tế bào gan ở bệnh nhân xơ gan do rượu hoặc gan nhiễm mỡ không do rượu (NAFLD).
              <br/>• <strong>Neurofibrillary tangles:</strong> do protein Tau phosphoryl hóa quá mức trong bệnh Alzheimer.</li>
            <li><strong>5. Tổn thương màng tế bào &amp; hệ thống màng nội bào (ER, ty thể, tiêu thể, Golgi):</strong> Do ROS, ↑ Ca²⁺, ↓ ATP → phù tế bào, mất phân cực màng, rò rỉ enzym tiêu thể tự tiêu; biểu hiện giãn màng, không bào bất thường hoặc mất ranh giới bào quan (đánh giá tối ưu bằng <strong>kính hiển vi điện tử</strong>).</li>
          </ul>
          <div class="callout pearl">
            <div class="callout-title">🩺 Ý nghĩa bệnh học của biến đổi bào quan</div>
            Phản ánh tổn thương sớm, giúp phân biệt tổn thương còn hồi phục hay không, phân biệt apoptosis với hoại tử và hỗ trợ chẩn đoán sớm bệnh gan, cơ, thần kinh, chuyển hóa và ung thư.
          </div>
        </div>

        <div class="card">
          <div class="card-title">🧭 2.4. Ba Cách Tế bào Phản ứng với Stress</div>
          <ol class="theory-list">
            <li><strong>Thích nghi tế bào (Phản ứng ưu tiên khi stress nhẹ – trung bình):</strong> Thay đổi hình thái/chức năng để duy trì sống sót gồm: <em>Phì đại</em> (tăng kích thước), <em>Tăng sản</em> (tăng số lượng), <em>Teo đét</em> (giảm kích thước/số lượng), <em>Chuyển sản</em> (thay đổi kiểu biệt hóa).</li>
            <li><strong>Tổn thương tế bào (Khi stress vượt quá khả năng thích nghi):</strong>
              <br/>• <em>Tổn thương hồi phục:</em> loại bỏ nguyên nhân kịp thời → trở lại bình thường.
              <br/>• <em>Tổn thương không hồi phục:</em> stress kéo dài/nghiêm trọng → dẫn đến chết tế bào.
              <br/>• <em>Tổn thương DNA không thể sửa chữa:</em> gây apoptosis, lão hóa tế bào, loạn sản, bướu tân sinh, ung thư.</li>
            <li><strong>Chết tế bào (Khi tổn thương vượt ngưỡng phục hồi):</strong>
              <br/>• <em>Hoại tử tế bào:</em> chết thụ động không kiểm soát do tổn thương cấp tính, màng vỡ phóng thích enzym gây <strong>viêm</strong>.
              <br/>• <em>Chết tế bào theo chương trình:</em> chết có kiểm soát, <strong>không gây viêm</strong>, giữ vai trò trong phát triển phôi, biệt hóa và loại bỏ tế bào hư hại.</li>
          </ol>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Cơ chế tổn thương tế bào nào dưới đây chủ yếu gây ra hoại tử tế bào trong nhồi máu cơ tim cấp?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Câu tự lượng giá 1 (tr. 75)",
        options: [
          "Mất hoạt động bơm Na⁺/K⁺ do cạn kiệt ATP",
          "Hoạt hóa telomerase",
          "Tăng tổng hợp protein và bào quan",
          "Hoạt hóa caspase 9 và caspase 3"
        ],
        answer: 0,
        explain: "Đáp án chuẩn giáo trình (Mục 2.2.1 & Câu 1 tr. 75): Trong nhồi máu cơ tim cấp, tắc mạch vành gây thiếu máu cục bộ → ngừng phosphoryl hóa oxy hóa ở ty thể → cạn kiệt ATP → mất hoạt động bơm Na⁺/K⁺-ATPase (gây phù tế bào), kèm tăng đường phân kỵ khí tạo lactate và tăng Ca²⁺ nội bào dẫn tới hoại tử đông."
      },
      {
        q: "Trong lịch sử Giải phẫu bệnh hiện đại, câu nhận định nền tảng của Rudolf Virchow vào thế kỷ XIX xác lập học thuyết bệnh học tế bào là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Mục 1 (tr. 48)",
        options: [
          "\"Tế bào bệnh là cơ sở của cơ thể bệnh\"",
          "\"Tổn thương màng ty thể là điểm không thể quay lại\"",
          "\"Mọi bướu đều bắt nguồn từ chất nền ngoại bào\"",
          "\"Rối loạn cân bằng bốn thể dịch gây ra bướu\""
        ],
        answer: 0,
        explain: "Trang 48: Rudolf Virchow – cha đẻ của ngành giải phẫu bệnh hiện đại – đã xác lập khái niệm bệnh học tế bào với nhận định: \"Tế bào bệnh là cơ sở của cơ thể bệnh\"."
      },
      {
        q: "Khi suy giảm ATP dẫn đến mất kiểm soát bơm Ca²⁺-ATPase và tăng nồng độ Ca²⁺ tự do trong bào tương, loạt enzym nào sau đây được hoạt hóa để phá hủy tế bào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Mục 2.2.1 (tr. 51)",
        options: [
          "Phospholipase, protease và endonuclease (kèm giải phóng cytochrome c)",
          "Telomerase, amylase và cytochrome P450",
          "Catalase, superoxide dismutase và glutathione peroxidase",
          "RNA polymerase, hexokinase và diastase"
        ],
        answer: 0,
        explain: "Trang 51: Tăng Ca²⁺ nội bào mở kênh chuyển tiếp tính thấm của ty thể và hoạt hóa các enzym phá hủy gồm: phospholipase (hủy phospholipid màng), protease (hủy protein khung tế bào), endonuclease (cắt DNA nhân) và giải phóng cytochrome c khởi động apoptosis."
      },
      {
        q: "Dấu hiệu nào sau đây được xem là \"điểm không thể quay lại\" đánh dấu tổn thương tế bào chuyển sang không thể hồi phục?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Mục 2.2.2 (tr. 51–52)",
        options: [
          "Tổn thương màng tế bào, vỡ màng ty thể và vỡ màng tiêu thể",
          "Tế bào sưng nhẹ do tích tụ nước tạm thời với nhân nguyên vẹn",
          "Tăng sinh lưới nội bào trơn khi tiếp xúc với phenobarbital",
          "Khởi động quá trình tự thực ở mức độ nhẹ khi thiếu dinh dưỡng"
        ],
        answer: 0,
        explain: "Trang 51–52: Tổn thương màng tế bào và tổn thương màng ty thể (mất điện thế màng, ngừng tổng hợp ATP), vỡ màng tiêu thể phóng thích enzym tiêu hóa tự tiêu là dấu hiệu tổn thương không thể hồi phục."
      },
      {
        q: "Cơ chế chính khiến đường phân kỵ khí tăng cường trong tình trạng thiếu ATP làm trầm trọng thêm tổn thương cấu trúc tế bào là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Mục 2.2.1 (tr. 51)",
        options: [
          "Tích tụ lactate làm giảm pH nội bào, gây kết tủa chất nhiễm sắc và ức chế enzym",
          "Tăng tạo CO₂ gây kiềm hóa bào tương và kết tủa muối calci",
          "Kích hoạt quá mức enzym cytochrome P450 tạo các ống nhỏ lưới nội bào",
          "Làm mất khả năng bám dính của hồng cầu trong lòng mạch vành"
        ],
        answer: 0,
        explain: "Trang 51: Khi ATP giảm, tế bào chuyển sang đường phân kỵ khí tạo ra lactate → giảm pH nội bào → kết tủa chất nhiễm sắc, ức chế hoạt động enzym và làm tổn thương các cấu trúc tế bào."
      },
      {
        q: "Hệ bào quan nào đóng vai trò chính trong phản ứng thích nghi khử độc thuốc qua hệ enzym cytochrome P450 (ví dụ khi bệnh nhân dùng phenobarbital kéo dài)?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Mục 2.3.2 (tr. 53)",
        options: [
          "Lưới nội bào trơn giãn rộng và tăng sinh tạo thành các ống nhỏ",
          "Lưới nội chất hạt tích tụ thể Mallory-Denk",
          "Bộ xương tế bào tăng tổng hợp sợi trung gian Tau",
          "Tiêu thể hòa nhập với màng tế bào tạo bong bóng màng"
        ],
        answer: 0,
        explain: "Trang 53: Lưới nội bào trơn là nơi tổng hợp lipid, steroid và khử độc qua hệ cytochrome P450; khi tiếp xúc thuốc (phenobarbital), lưới nội bào trơn tăng sinh và giãn thành ống nhỏ trên kính hiển vi điện tử, có thể thay đổi dược động học và tăng độc tính phối hợp đa thuốc."
      },
      {
        q: "Hai biểu hiện mô học đặc hiệu liên quan đến tổn thương bộ xương tế bào được nêu trong giáo trình lần lượt là thể Mallory-Denk và neurofibrillary tangles. Chúng đặc trưng cho bệnh lý nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Mục 2.3.4 (tr. 54)",
        options: [
          "Thể Mallory-Denk ở tế bào gan (xơ gan rượu, NAFLD) và Neurofibrillary tangles ở bệnh Alzheimer (protein Tau phosphoryl hóa quá mức)",
          "Thể Mallory-Denk ở bệnh phổi bụi than và Neurofibrillary tangles ở viêm da cơ",
          "Thể Mallory-Denk ở đa u tủy xương và Neurofibrillary tangles ở hội chứng thận hư",
          "Thể Mallory-Denk ở bệnh Pompe và Neurofibrillary tangles ở bệnh Wilson"
        ],
        answer: 0,
        explain: "Trang 54: Bộ xương tế bào (vi sợi actin, vi ống, sợi trung gian) khi tổn thương gây tích tụ protein biến tính: Thể Mallory-Denk trong tế bào gan (xơ gan do rượu, NAFLD) và Neurofibrillary tangles do protein Tau phosphoryl hóa quá mức trong bệnh Alzheimer."
      },
      {
        q: "Phương tiện hình ảnh nào là tối ưu nhất để đánh giá sớm tổn thương màng tế bào và hệ thống màng nội bào (ty thể, lưới nội chất, tiêu thể, Golgi)?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Mục 2.3.5 (tr. 54)",
        options: [
          "Kính hiển vi điện tử",
          "Kính hiển vi quang học nhuộm H&E thông thường",
          "Nhuộm PAS trước và sau tiêu diastase",
          "Quan sát đại thể bằng mắt thường"
        ],
        answer: 0,
        explain: "Trang 54: Tổn thương hệ thống màng nội bào biểu hiện bằng giãn màng, không bào bất thường hoặc mất ranh giới bào quan; kính hiển vi điện tử là phương tiện đánh giá tối ưu các tổn thương siêu cấu trúc này."
      },
      {
        q: "Quá trình tự thực (autophagy) diễn biến theo trình tự bào quan nào và nếu diễn ra quá mức sẽ dẫn đến hậu quả gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Mục 2.3.1 (tr. 53)",
        options: [
          "Bào quan hư hại được bọc màng kép thành thể tự thực bào nguyên phát → hợp nhất tiêu thể tạo thể tự thực–tiêu thể; quá mức gây tự tiêu và chết tế bào KHÔNG gây viêm",
          "Tiêu thể vỡ trực tiếp vào bào tương → hòa màng bào tương và gây phản ứng viêm mủ rầm rộ",
          "Ty thể tự phân đôi liên tục → giải phóng lactate vào máu gây nhiễm toan chuyển hóa",
          "Lưới nội chất hạt kết tinh thành khe hình kim → gây vôi hóa loạn dưỡng tại chỗ"
        ],
        answer: 0,
        explain: "Trang 53: Bào quan hư hại được bao bọc bởi màng kép tạo thể tự thực bào nguyên phát, sau đó hợp nhất tiêu thể tạo thể tự thực–tiêu thể (thứ phát). Nếu diễn ra quá mức sẽ gây mất khối lượng bào quan, tự tiêu và chết tế bào không gây viêm (thấy ở gan người suy dinh dưỡng, bệnh thần kinh tích lũy protein)."
      },
      {
        q: "Trong các nguyên nhân thiếu oxy dưới đây, trường hợp nào thuộc nhóm 'Thiếu vận chuyển oxy' thay vì 'Thiếu máu cục bộ' hay 'Giảm oxy máu'?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Mục 2.1.1 (tr. 49)",
        options: [
          "Ngộ độc khí CO hoặc thiếu máu toàn thân / giảm hemoglobin",
          "Nhồi máu cơ tim hoặc nhồi máu não do tắc động mạch",
          "Suy hô hấp hoặc rối loạn khuếch tán khí qua màng phế nang – mao mạch",
          "Viêm tụy cấp giải phóng lipase hoạt hóa tại chỗ"
        ],
        answer: 0,
        explain: "Trang 49 chia thiếu oxy thành 3 nhóm rõ: (1) Thiếu máu cục bộ (nhồi máu cơ tim, não); (2) Giảm oxy máu (suy hô hấp, rối loạn khuếch tán khí); (3) Thiếu vận chuyển oxy (thiếu máu toàn thân, ngộ độc CO hoặc giảm hemoglobin)."
      },
      {
        q: "Tác động của tia cực tím (UV) và tia xạ ion hóa lên DNA khác biệt nổi bật ở đặc điểm nào theo giáo trình?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Mục 2.2.4 (tr. 52–53)",
        options: [
          "Gốc tự do/tia xạ ion hóa có khả năng gây đứt gãy chuỗi xoắn kép DNA, còn tia UV tạo liên kết bất thường giữa các base liền kề gây biến dạng cấu trúc DNA",
          "Tia UV gây peroxy hóa màng ty thể chọn lọc còn tia xạ chỉ tác động lên ribosome 50S",
          "Cả tia UV và tia xạ đều chỉ gây biến tính protein huyết tương trong thành mạch máu",
          "Tia xạ chỉ tác động lên mô mỡ tụy còn tia UV chỉ gây teo cơ vân"
        ],
        answer: 0,
        explain: "Trang 52–53: Các gốc tự do gây đứt gãy chuỗi xoắn kép DNA; tia xạ ion hóa (X, gamma) hoặc tia cực tím (UV) có thể tạo liên kết bất thường giữa các base liền kề gây biến dạng cấu trúc phân tử DNA."
      },
      {
        q: "Độc tố bạch hầu và tình trạng tổn thương lưới nội chất hạt (ER stress) cùng gây rối loạn con đường sinh hóa trọng yếu nào của tế bào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Mục 2.2.3 (tr. 52)",
        options: [
          "Quá trình tổng hợp protein (ức chế trực tiếp yếu tố dịch mã hoặc tích tụ protein sai cấu trúc)",
          "Quá trình xà phòng hóa triglyceride trong mô mỡ quanh tụy",
          "Quá trình tổng hợp sắc tố melanin trong lớp đáy thượng bì",
          "Quá trình duy trì chiều dài telomere bởi enzym telomerase"
        ],
        answer: 0,
        explain: "Trang 52: Thiếu oxy (↓ ATP), tổn thương lưới nội chất hạt (nơi tổng hợp protein màng và protein tiết gây tích tụ protein lỗi cấu trúc) và độc tố bạch hầu (ức chế trực tiếp yếu tố dịch mã) đều làm gián đoạn quá trình tổng hợp protein."
      }
    ]
  },

  // ========================================================================
  // BÀI 2: RỐI LOẠN THÍCH NGHI, PHÁT TRIỂN VÀ BIỆT HÓA TẾ BÀO
  // ========================================================================
  {
    id: 2,
    group: "I. TỔN THƯƠNG CƠ BẢN TẾ BÀO & MÔ",
    title: "Bài 2: Rối loạn Thích nghi, Phát triển & Biệt hóa Tế bào",
    shortTitle: "Thích nghi, Phát triển & Biệt hóa",
    textbookRef: "Giải phẫu bệnh đại cương YDS – Bài 3 (Mục 3 & Mục 4, tr. 56–60)",
    summary: "Phì đại, Teo đét, Tăng sản, Chuyển sản, Chuyển dạng tế bào; Rối loạn phát triển (Thiểu sản, Bất sản) và Rối loạn biệt hóa (Loạn sản, Thoái sản) kèm toàn bộ Hình 3.1, 3.2 và 3.3.",
    simId: "sim_adaptation_diff",
    simTitle: "Phòng Lab Phân biệt 5 Đáp ứng Thích nghi & Rối loạn Biệt hóa",
    figureIds: ["H3.1", "H3.2", "H3.3"],
    theoryHtml: `
      <div class="card">
        <div class="card-title">🔄 3. Các Hình thái Thích nghi Chủ yếu của Tế bào <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H3.1')">🖼️ Xem Hình 3.1</button></div>
        <p style="font-size:14px;margin-bottom:10px;">Khi môi trường nội mô hoặc ngoại mô thay đổi bất lợi, tế bào khởi phát đáp ứng thích nghi tạm thời và <strong>có thể đảo ngược</strong> nếu loại bỏ tác nhân kích thích (nhưng nếu stress kéo dài/quá mức có thể tiến triển thành tổn thương bệnh lý hoặc ung thư).</p>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Hình thái thích nghi</th>
                <th>Định nghĩa &amp; Cơ chế phân tử</th>
                <th>Ví dụ Sinh lý vs Bệnh lý (Chuẩn Sách YDS)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>3.1. Phì đại (Hypertrophy)</strong></td>
                <td>Gia tăng <strong>số lượng và/hoặc kích thước bào quan</strong> → tăng kích thước tế bào (số lượng tế bào ổn định). Phổ biến ở mô <strong>không phân bào</strong> (cơ tim, cơ vân). Cơ chế: tín hiệu cơ học (kéo căng), hoạt hóa <strong>IGF-1</strong>, tăng phiên mã gen protein cơ.</td>
                <td>
                  • <em>Sinh lý:</em> Cơ vân ở vận động viên tập luyện.<br/>
                  • <em>Bệnh lý:</em> Phì đại cơ tim trong tăng huyết áp mạn tính (kéo dài không kiểm soát → suy tim do phì đại thất trái).
                </td>
              </tr>
              <tr>
                <td><strong>3.2. Teo đét (Atrophy)</strong> <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H3.2')">🖼️ H3.2A</button></td>
                <td>Giảm kích thước và chức năng tế bào do giảm tổng hợp protein, tăng phân hủy protein (hệ <strong>ubiquitin-proteasome</strong>) và tăng <strong>tự thực</strong>. Tế bào teo vẫn sống ở mức tối thiểu; kéo dài → apoptosis.</td>
                <td>
                  • <em>Sinh lý:</em> Teo tuyến ức ở người trưởng thành, teo mô sinh dục sau mãn kinh.<br/>
                  • <em>Bệnh lý:</em> Bất động kéo dài, mất phân bố thần kinh, thiếu máu mạn tính (VD: teo quanh bó cơ ở viêm da cơ – Hình 3.2A), suy dinh dưỡng, viêm mạn.
                </td>
              </tr>
              <tr>
                <td><strong>3.3. Tăng sản (Hyperplasia)</strong> <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H3.2')">🖼️ H3.2B</button></td>
                <td>Gia tăng <strong>số lượng tế bào</strong> trong một mô; gặp ở mô <strong>có khả năng phân bào</strong> (biểu mô, tuyến nội tiết, tủy xương). Là đáp ứng <em>điều hòa, phục hồi được</em> (khác bướu tăng sinh không kiểm soát). Thường đi kèm phì đại (tử cung mang thai: cơ trơn vừa ↑ số lượng vừa ↑ kích thước).</td>
                <td>
                  • <em>Sinh lý:</em> Tăng sản nội mạc tử cung dưới estrogen theo chu kỳ kinh nguyệt; tăng sản biểu mô ống tuyến vú khi mang thai / cho con bú.<br/>
                  • <em>Bệnh lý:</em> Tăng sản tuyến tiền liệt do androgen (Hình 3.2B); tăng sản nội mạc tử cung kéo dài → có thể tiến triển thành loạn sản hoặc ung thư.
                </td>
              </tr>
              <tr>
                <td><strong>3.4. Chuyển sản (Metaplasia)</strong> <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H3.3')">🖼️ H3.3B</button></td>
                <td>Một loại tế bào trưởng thành được thay thế bởi một loại tế bào trưởng thành khác <strong>thuộc cùng dòng phôi</strong> để thích nghi tốt hơn với môi trường mới. Có tính bảo vệ nhưng là cảnh báo nguy cơ tiền ung thư nếu kéo dài (tiến triển → loạn sản → ung thư biểu mô).</td>
                <td>
                  • <em>Viêm cổ tử cung mạn:</em> biểu mô trụ cổ trong → biểu mô lát tầng (Hình 3.3B).<br/>
                  • <em>Thực quản Barrett:</em> biểu mô lát tầng thực quản → biểu mô trụ dạng ruột do trào ngược dịch vị.<br/>
                  • <em>Viêm dạ dày mạn (H. pylori):</em> biểu mô tuyến dạ dày → biểu mô tuyến ruột có tế bào đài.<br/>
                  • <em>Phế quản người hút thuốc:</em> biểu mô trụ giả tầng → biểu mô lát tầng.
                </td>
              </tr>
              <tr>
                <td><strong>3.5. Chuyển dạng tế bào</strong> <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H3.3')">🖼️ H3.3A</button></td>
                <td>Thay đổi hình thái bên ngoài của tế bào trong điều kiện sinh lý/bệnh lý mà <strong>không ảnh hưởng cấu trúc nội bào</strong>; điều trị hiệu quả sẽ hồi phục dạng trụ/vuông ban đầu. (Một số trường hợp hiếm đổi cả hình thái &amp; chức năng: tế bào thần kinh đệm chuyển dạng thành đại thực bào).</td>
                <td>
                  • <em>Bệnh phình giáp:</em> chất keo giáp ứ đọng ép dẹt tế bào biểu mô nang giáp thành hình thái tương tự tế bào nội mô mạch máu (Hình 3.3A).
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="card-title">🧬 4.1. Rối loạn Phát triển Bẩm sinh</div>
          <ul class="theory-list">
            <li><strong>4.1.1. Thiểu sản (Hypoplasia):</strong> Tình trạng phát triển <strong>không đầy đủ</strong> của một cơ quan/mô do giảm sinh sản tế bào so với bình thường ngay từ giai đoạn bào thai → kích thước cơ quan nhỏ hơn bình thường, thường kèm dị tật cấu trúc.
              <br/><em>Ví dụ:</em> Thiểu sản đoạn eo động mạch chủ trong các dị tật tim bẩm sinh.</li>
            <li><strong>4.1.2. Bất sản (Aplasia / Agenesis):</strong> Tình trạng <strong>thiếu hụt hoàn toàn</strong> sự phát triển của một loại tế bào hoặc mô từ giai đoạn phôi thai. Là hình thái nặng nhất, gây dị tật bẩm sinh nghiêm trọng hoặc mất chức năng hoàn toàn cơ quan.
              <br/><em>Ví dụ:</em> Bất sản tủy xương (vắng mặt tế bào máu tiền thân, thay bằng mô mỡ/mô sợi); dị tật vô tạo tinh hoàn hoặc tuyến yên.</li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">⚠️ 4.2. Rối loạn Biệt hóa Tế bào <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H3.3')">🖼️ Xem H3.3C &amp; H3.3D</button></div>
          <div class="callout warning">
            <div class="callout-title">4.2.1. Loạn sản (Dysplasia) – Tổn thương Tiền ung thư</div>
            <p>Là tình trạng tăng sinh bất thường (do rối loạn sinh sản) kèm rối loạn biệt hóa và sắp xếp cực tính, thường gặp ở biểu mô phủ khi có viêm mạn, nhiễm HPV hoặc kích thích kéo dài. Phát hiện &amp; điều trị kịp thời có thể hồi phục; nếu không kiểm soát → nguy cơ cao tiến triển thành ung thư biểu mô tại chỗ hoặc xâm lấn.</p>
            <ul>
              <li>Tế bào có kích thước và hình dạng không đều.</li>
              <li>Tăng tỷ lệ nhân/bào tương (N/C).</li>
              <li>Tăng hoạt động nhân, phân bào bất thường.</li>
              <li>Mất cấu trúc phân lớp bình thường của biểu mô (mất cực tính tế bào).</li>
              <li><em>Ví dụ:</em> Loạn sản cổ tử cung CIN (Hình 3.3C), loạn sản biểu mô đường tiêu hóa.</li>
            </ul>
          </div>
          <div class="callout trap">
            <div class="callout-title">4.2.2. Thoái sản (Anaplasia) – Dấu hiệu Ác tính Độ cao</div>
            <p>Hiện tượng tế bào <strong>mất biệt hóa</strong>, trở về dạng không điển hình giống tế bào chưa trưởng thành hoặc tế bào phôi thai. Tế bào thoái sản kích thước lớn nhỏ không đều, nhân lớn, có thể đa nhân, tăng phân bào bất thường kèm mất tổ chức mô và tăng sinh không kiểm soát.</p>
            <p style="margin-top:4px;"><em>Ví dụ:</em> <strong>Carcinom thoái sản tuyến giáp</strong> – ung thư ác tính cao với tiên lượng rất xấu (Hình 3.3D).</p>
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Tăng sản sinh lý được minh họa rõ nhất trong trường hợp nào sau đây?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Câu tự lượng giá 4 (tr. 75)",
        options: [
          "Tăng sản tuyến vú trong thai kỳ",
          "Phì đại cơ tim trong tăng huyết áp",
          "Tăng sản tuyến tiền liệt ở người già",
          "Chuyển sản biểu mô phế quản ở người hút thuốc"
        ],
        answer: 0,
        explain: "Đáp án chuẩn giáo trình (Mục 3.3 & Câu 4 tr. 75): Tăng sản biểu mô ống tuyến vú trong thai kỳ hoặc khi cho con bú (cùng với tăng sản nội mạc tử cung theo chu kỳ kinh) là ví dụ điển hình của TĂNG SẢN SINH LÝ. Các phương án còn lại: phì đại cơ tim trong tăng huyết áp là phì đại bệnh lý; tăng sản tuyến tiền liệt người già là tăng sản bệnh lý; biến đổi biểu mô phế quản người hút thuốc là chuyển sản."
      },
      {
        q: "Khi chất keo giáp ứ đọng quá mức trong lòng nang ở bệnh phình giáp khiến các tế bào biểu mô nang tuyến giáp bị ép dẹt có hình thái tương tự tế bào nội mô mạch máu mà không đổi cấu trúc nội bào, hiện tượng này gọi là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Mục 3.5 & Hình 3.3A (tr. 58, 60)",
        options: [
          "Chuyển dạng tế bào",
          "Chuyển sản tuyến giáp",
          "Thoái sản tế bào",
          "Bất sản nang giáp"
        ],
        answer: 0,
        explain: "Trang 58: Chuyển dạng tế bào là sự thay đổi hình thái bên ngoài trong điều kiện sinh lý/bệnh lý mà không ảnh hưởng cấu trúc nội bào (có thể hồi phục về dạng trụ/vuông khi điều trị hiệu quả)."
      },
      {
        q: "Quá trình tế bào giảm kích thước và chức năng trong teo đét xảy ra thông qua cơ chế phân tử chủ yếu nào sau đây?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Mục 3.2 (tr. 57)",
        options: [
          "Ức chế tổng hợp protein, kích hoạt hệ ubiquitin-proteasome và tăng tự thực",
          "Hoạt hóa yếu tố tăng trưởng IGF-1 và tăng phiên mã protein cơ",
          "Tăng hoạt hóa phức hợp Cyclin D – CDK4 thúc đẩy phân bào liên tục",
          "Chuyển hóa đường phân hiếu khí tạo lactate trong bào tương"
        ],
        answer: 0,
        explain: "Trang 57: Cơ chế teo đét gồm ức chế tổng hợp protein, kích hoạt hệ ubiquitin-proteasome phân hủy protein và tăng tự thực; nếu kéo dài, tế bào có thể tiến tới apoptosis."
      },
      {
        q: "Trong trường hợp tử cung người phụ nữ mang thai, đáp ứng thích nghi nào xảy ra đồng thời ở các tế bào cơ trơn tử cung?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Mục 3.3 (tr. 58)",
        options: [
          "Vừa tăng sản (tăng số lượng) vừa phì đại (tăng kích thước tế bào)",
          "Chỉ xảy ra phì đại đơn thuần vì cơ trơn mất hoàn toàn khả năng phân bào",
          "Chuyển sản từ cơ trơn thành cơ vân để tăng lực co bóp",
          "Loạn sản biểu mô tuyến kết hợp teo quanh bó cơ"
        ],
        answer: 0,
        explain: "Trang 58: Tăng sản thường đi kèm với phì đại; ví dụ kinh điển là trong tử cung mang thai – các tế bào cơ trơn vừa tăng số lượng vừa tăng kích thước."
      },
      {
        q: "Ví dụ nào sau đây mô tả ĐÚNG bản chất của thực quản Barrett?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Mục 3.4 (tr. 58)",
        options: [
          "Chuyển sản từ biểu mô lát tầng thực quản thành biểu mô trụ dạng ruột do trào ngược dịch vị kéo dài",
          "Chuyển sản từ biểu mô trụ đường tiêu hóa thành biểu mô lát tầng không sừng hóa",
          "Thoái sản tế bào thực quản mất biệt hóa về dạng phôi thai",
          "Thiểu sản lớp cơ niêm thực quản từ giai đoạn bào thai"
        ],
        answer: 0,
        explain: "Trang 58: Thực quản Barrett là hiện tượng chuyển sản biểu mô lát tầng thực quản thành biểu mô trụ dạng ruột dưới tác động kích thích kéo dài của trào ngược dịch vị."
      },
      {
        q: "Sự khác biệt cốt lõi giữa Phì đại và Tăng sản nằm ở đặc điểm nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Mục 3.1 & 3.3 (tr. 56–57)",
        options: [
          "Phì đại là tăng kích thước tế bào và bào quan (gặp ở mô không phân bào như cơ tim/cơ vân), còn Tăng sản là tăng số lượng tế bào (gặp ở mô còn khả năng phân bào)",
          "Phì đại có thể hồi phục còn tăng sản luôn không thể hồi phục và là bướu ác tính",
          "Phì đại do androgen gây ra còn tăng sản do kéo căng cơ học IGF-1",
          "Phì đại luôn kèm mất cực tính tế bào còn tăng sản thì không"
        ],
        answer: 0,
        explain: "Trang 56–57: Phì đại (tăng kích thước tế bào nhờ tăng số lượng/kích thước bào quan, gặp ở mô không phân bào như cơ tim, cơ vân); Tăng sản (tăng số lượng tế bào, gặp ở mô có khả năng phân bào như biểu mô, tuyến nội tiết, tủy xương)."
      },
      {
        q: "Đặc điểm vi thể nào sau đây KHÔNG thuộc tiêu chuẩn mô tả Loạn sản biểu mô (ví dụ loạn sản cổ tử cung CIN)?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Mục 4.2.1 (tr. 59)",
        options: [
          "Tế bào mất hoàn toàn nhân (nhân tan) và bào tương vỡ vụn gây phản ứng viêm mủ",
          "Tế bào có kích thước và hình dạng không đều",
          "Tăng tỷ lệ nhân/bào tương và tăng hoạt động nhân, phân bào bất thường",
          "Mất cấu trúc phân lớp bình thường của biểu mô (mất cực tính tế bào)"
        ],
        answer: 0,
        explain: "Trang 59: 4 dấu hiệu vi thể của loạn sản gồm: (1) kích thước/hình dạng tế bào không đều; (2) tăng tỷ lệ N/C; (3) tăng hoạt động nhân, phân bào bất thường; (4) mất cực tính phân lớp biểu mô. Mất nhân/vỡ bào tương gây viêm là đặc điểm của hoại tử tế bào."
      },
      {
        q: "Khi đánh giá mô tủy xương bị thay thế hoàn toàn bởi mô mỡ và mô sợi kèm sự vắng mặt hoàn toàn các tế bào máu tiền thân, thuật ngữ nào mô tả chính xác nhất tình trạng này?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Mục 4.1.2 (tr. 59)",
        options: [
          "Bất sản (Aplasia)",
          "Thiểu sản (Hypoplasia)",
          "Chuyển sản (Metaplasia)",
          "Thoái sản (Anaplasia)"
        ],
        answer: 0,
        explain: "Trang 59: Bất sản là tình trạng thiếu hụt hoàn toàn sự phát triển của một loại tế bào hoặc mô từ giai đoạn phôi thai (hoặc mất hoàn toàn tạo máu như bất sản tủy xương với sự vắng mặt các tế bào máu tiền thân, thay bằng mô mỡ/mô sợi)."
      },
      {
        q: "Sự khác nhau cơ bản giữa Thiểu sản (Hypoplasia) và Teo đét (Atrophy) là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Mục 3.2 & 4.1.1 (tr. 57, 59)",
        options: [
          "Thiểu sản là phát triển không đầy đủ từ giai đoạn bào thai (bẩm sinh), còn Teo đét là sự giảm kích thước/số lượng sau khi cơ quan đã phát triển bình thường",
          "Thiểu sản chỉ gặp ở người già sau mãn kinh, còn teo đét gặp ở trẻ sơ sinh",
          "Thiểu sản là tổn thương tiền ung thư, còn teo đét là bướu ác tính độ cao",
          "Thiểu sản luôn có tế bào khổng lồ đa nhân, còn teo đét không có nhân"
        ],
        answer: 0,
        explain: "Trang 57 & 59: Thiểu sản là rối loạn phát triển bẩm sinh ngay từ giai đoạn bào thai (VD: thiểu sản đoạn eo động mạch chủ); Teo đét là đáp ứng thích nghi thu nhỏ kích thước của tế bào/cơ quan vốn đã trưởng thành."
      },
      {
        q: "Hiện tượng chuyển sản biểu mô tuyến dạ dày thành biểu mô tuyến ruột có tế bào đài thường liên quan trực tiếp đến tác nhân vi sinh vật nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Mục 3.4 (tr. 58)",
        options: [
          "Vi khuẩn Helicobacter pylori trong viêm dạ dày mạn",
          "Virus HPV type 16 và 18",
          "Vi khuẩn Mycobacterium tuberculosis",
          "Virus Epstein-Barr (EBV)"
        ],
        answer: 0,
        explain: "Trang 58: Viêm dạ dày mạn dưới tác động của vi khuẩn Helicobacter pylori làm biểu mô tuyến dạ dày chuyển sản thành biểu mô tuyến ruột có tế bào đài."
      },
      {
        q: "Thuật ngữ nào mô tả hiện tượng tế bào mất biệt hóa, trở về dạng không điển hình giống tế bào chưa trưởng thành/phôi thai, gặp trong carcinom tuyến giáp có tiên lượng rất xấu?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Mục 4.2.2 (tr. 60)",
        options: [
          "Thoái sản (Anaplasia)",
          "Chuyển sản (Metaplasia)",
          "Chuyển dạng tế bào",
          "Tăng sản bệnh lý"
        ],
        answer: 0,
        explain: "Trang 60: Thoái sản là hiện tượng tế bào mất biệt hóa, mang đặc điểm giống tế bào phôi thai/chưa trưởng thành, kích thước không đều, nhân lớn đa nhân, phân bào bất thường – dấu hiệu đặc trưng của bướu ác tính độ ác cao (như carcinom thoái sản tuyến giáp, Hình 3.3D)."
      },
      {
        q: "Đáp ứng thích nghi nào giúp mô cổ tử cung bảo vệ tốt hơn trước môi trường viêm mạn tính nhưng nếu kéo dài có thể tiến triển thành loạn sản và ung thư biểu mô?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Mục 3.4 & Hình 3.3B (tr. 58, 60)",
        options: [
          "Chuyển sản từ biểu mô trụ phần tuyến cổ trong thành biểu mô lát tầng",
          "Chuyển sản từ biểu mô lát tầng thành biểu mô trụ có tế bào đài",
          "Phì đại cơ trơn cổ tử cung thông qua hoạt hóa IGF-1",
          "Bất sản hoàn toàn các tuyến cổ trong"
        ],
        answer: 0,
        explain: "Trang 58: Trong viêm cổ tử cung mạn, biểu mô trụ của phần tuyến cổ trong chuyển sản thành biểu mô lát tầng bền vững hơn (Hình 3.3B); có thể đảo ngược nếu hết kích thích nhưng nếu kéo dài có thể tiến triển thành loạn sản và ung thư."
      }
    ]
  },

  // ========================================================================
  // BÀI 3: TỔN THƯƠNG HỒI PHỤC, HOẠI TỬ, APOPTOSIS, TÍCH LŨY, VÔI HÓA & LÃO HÓA
  // ========================================================================
  {
    id: 3,
    group: "I. TỔN THƯƠNG CƠ BẢN TẾ BÀO & MÔ",
    title: "Bài 3: Tổn thương Hồi phục – Không hồi phục, Hoại tử, Apoptosis, Tích lũy, Vôi hóa & Lão hóa",
    shortTitle: "Hoại tử, Apoptosis, Tích lũy & Vôi hóa",
    textbookRef: "Giải phẫu bệnh đại cương YDS – Bài 3 (Mục 5, 6 & 7, tr. 61–75)",
    summary: "Sưng phù tế bào, 6 hình thái hoại tử & 5 ví dụ lâm sàng; Con đường nội sinh & ngoại sinh Apoptosis; Tích lũy lipid/protein/glycogen/sắc tố/hyalin; Vôi hóa loạn dưỡng vs chuyển hóa; Lão hóa tế bào (Hayflick, p16INK4a, SA-β-Gal).",
    simId: "sim_necrosis_calcification",
    simTitle: "Phòng Lab Phân biệt 6 Loại Hoại tử, Apoptosis & Vôi hóa Bệnh lý",
    figureIds: ["H3.4", "H3.5", "H3.6", "H3.7", "H3.8", "H3.9", "H3.10", "H3.11", "H3.12"],
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">💧 5.1. Tổn thương Hồi phục &amp; 5.2. Không hồi phục <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H3.4')">🖼️ H3.4</button> <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H3.6')">🖼️ H3.6A</button></div>
          <p style="font-size:14px;"><strong>Sưng phù tế bào cấp tính:</strong> Phản ứng sớm điển hình khi mất cân bằng nội môi (bơm Na⁺/K⁺ hỏng → Na⁺ &amp; nước tràn vào).</p>
          <ul class="theory-list">
            <li><strong>Tên gọi theo mô:</strong> <em>Thoái hóa nước</em> (tế bào gan, biểu mô ống thận); <em>Thoái hóa phồng</em> (tế bào gai); <em>Phù độc tế bào</em> (tế bào thần kinh đệm hình sao ở TKTW). Khác hẳn với <em>phì đại</em>!</li>
            <li><strong>Đại thể:</strong> Mô nhợt nhạt, tăng thể tích và trọng lượng nhu mô cơ quan.</li>
            <li><strong>Vi thể (4 dấu hiệu):</strong> (1) Phù tế bào (dấu hiệu sớm nhất); (2) Bào tương sáng, rỗng, nhạt màu (giãn lưới nội bào, tách rời bào quan); (3) Nhân phồng nhẹ, nhạt màu (<strong>KHÔNG có</strong> nhân vón, nhân vỡ, nhân tan); (4) Nhiều không bào nhỏ (thường ở gan).</li>
          </ul>
          <div class="callout trap">
            <div class="callout-title">⚠️ 5 Biến đổi Siêu cấu trúc Không hồi phục</div>
            <ol>
              <li><strong>Màng tế bào:</strong> Mất toàn vẹn → rò rỉ enzym tiêu thể tự tiêu; xuất hiện túi phồng màng và tụ protein ở màng.</li>
              <li><strong>Ty thể:</strong> Sưng phù, mất mào, lắng đọng <strong>chất vô định hình đậm đặc</strong> trong lòng ty thể (dấu hiệu không thể quay lại).</li>
              <li><strong>Nhân tế bào:</strong> Chất nhiễm sắc ngưng tụ → <strong>Nhân vón</strong> (co nhỏ bắt màu đậm) → <strong>Nhân vỡ</strong> (phân mảnh) → <strong>Nhân tan</strong> (mờ dần biến mất).</li>
              <li><strong>Giãn lưới nội sinh chất &amp; mất ribosome:</strong> Mất tổng hợp protein.</li>
              <li><strong>Thể myelin:</strong> Sản phẩm thoái hóa phospholipid của màng tế bào chết.</li>
            </ol>
          </div>
        </div>

        <div class="card">
          <div class="card-title">⚰️ 5.3. Hoại tử vs Chết theo Chương trình (Apoptosis) <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H3.7')">🖼️ H3.7</button></div>
          <ul class="theory-list">
            <li><strong>Hoại tử (Necrosis):</strong> Chết thụ động, không kiểm soát, thường chết <strong>theo đám</strong>; tế bào sưng, vỡ màng, bào tương tăng bắt màu eosin (hồng đậm, đồng nhất), mất bào quan, nhân vón/vỡ/tan, <strong>GÂY VIÊM</strong>.</li>
            <li><strong>Chết tế bào theo chương trình (Apoptosis):</strong> Quá trình <strong>chủ động, đòi hỏi năng lượng ATP</strong>, có điều hòa chặt chẽ, thường ảnh hưởng <strong>từng tế bào riêng lẻ</strong>.</li>
            <li><strong>Hình thái Apoptosis:</strong> Tế bào co lại, bào tương đậm đặc, nhân vón và phân mảnh → tách thành các <strong>thể apoptotic</strong> (mảnh bào tương chứa nhân vỡ <strong>vẫn giữ nguyên màng tế bào</strong>).</li>
            <li><strong>Con đường Nội sinh (Ty thể):</strong> Stress nội bào (hỏng DNA, thiếu ATP, mất cân bằng oxy hóa–khử) → ty thể giải phóng <strong>cytochrome c</strong> → tạo phức hợp <strong>apoptosome</strong> (cytochrome c + <strong>Apaf-1</strong> + <strong>Procaspase-9</strong>) → hoạt hóa <strong>caspase-9</strong> → <strong>caspase-3</strong>.</li>
            <li><strong>Con đường Ngoại sinh (Thụ thể chết):</strong> Ligand (<strong>FasL, TNF-α</strong>) gắn thụ thể (<strong>Fas, TNFR1</strong>) → hoạt hóa adaptor (<strong>FADD</strong>) → phức hợp <strong>DISC</strong> → hoạt hóa <strong>caspase-8</strong> → hoạt hóa <strong>caspase-3</strong> (hoặc hoạt hóa <strong>tBid</strong> nối với đường nội sinh).</li>
            <li><strong>Điểm hội tụ Caspase-3:</strong> Cắt protein cấu trúc, enzym sống còn và cắt DNA thành đoạn đặc trưng <strong>180–200 bp</strong>; bộc lộ <strong>Phosphatidylserine</strong> trên bề mặt màng để đại thực bào/tế bào lân cận dọn sạch <strong>KHÔNG gây viêm</strong>.</li>
            <li><strong>Ý nghĩa sinh lý:</strong> Phát triển phôi (tiêu biến màng ngón tay), chu kỳ nội mạc tử cung, loại bỏ tế bào miễn dịch tự phản ứng trong tuyến ức, tái tạo biểu mô vòng đời ngắn (ruột, da).</li>
            <li><strong>Ý nghĩa bệnh lý:</strong> ↑ Apoptosis → thoái hóa thần kinh (Alzheimer, Parkinson), suy tủy, teo cơ bất động, lão hóa; ↓ Apoptosis → ung thư (né tránh apoptosis).</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🔬 5.3.1 &amp; 5.3.2. Sáu Hình thái Hoại tử &amp; Năm Ví dụ Lâm sàng Kinh điển <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H3.8')">🖼️ H3.8</button> <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H3.9')">🖼️ H3.9</button></div>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Hình thái Hoại tử</th>
                <th>Cơ chế &amp; Đặc điểm Mô học / Đại thể</th>
                <th>Ví dụ Lâm sàng Trong Sách (tr. 65–67)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Hoại tử đông</strong> (H3.8A)</td>
                <td>Gặp trong nhồi máu do thiếu máu cục bộ (<strong>TRỪ mô não</strong>). Tế bào chết (mất nhân, bào tương hồng đậm, trơ đồng nhất) nhưng <strong>giữ được cấu trúc khung mô học tạm thời</strong>; bạch cầu trung tính ở ngoại vi.</td>
                <td><strong>Nhồi máu cơ tim cấp</strong> (sau 12–24 giờ thấy rõ); hoại tử trong bướu ác tính phát triển nhanh (ung thư tế bào gan).</td>
              </tr>
              <tr>
                <td><strong>2. Hoại tử dạng tơ huyết (Fibrinoid)</strong> (H3.8B)</td>
                <td>Do lắng đọng phức hợp miễn dịch và protein huyết tương trong thành mạch. Vi thể: <strong>chất hồng sáng, vô định hình trong thành mạch</strong>.</td>
                <td>Viêm mạch máu, phản ứng miễn dịch, tăng huyết áp ác tính.</td>
              </tr>
              <tr>
                <td><strong>3. Hoại tử hóa lỏng</strong></td>
                <td>Do hoạt động mạnh của enzym tiêu mô → <strong>mô bị tiêu hoàn toàn thành dịch lỏng nhầy</strong>, không còn cấu trúc mô gốc.</td>
                <td><strong>Nhũn não do thiếu oxy</strong> (mô thần kinh không có mô đệm, có đại thực bào ăn mảnh vỡ, <em>không có xác bạch cầu</em>); <strong>Ổ mủ/áp-xe</strong> (nhiều bạch cầu &amp; vi khuẩn sinh mủ).</td>
              </tr>
              <tr>
                <td><strong>4. Hoại tử bã đậu</strong> (H3.9A)</td>
                <td>Đặc trưng cho <strong>viêm lao</strong> (<em>M. tuberculosis</em>). Đại thể: chất <strong>trắng vàng, bở, giống pho mát</strong>. Vi thể: trung tâm hồng nhạt vô định hình <strong>không ranh giới tế bào</strong>; bao quanh bởi mô hạt lao (tế bào dạng biểu mô, <strong>đại bào Langhans</strong>, lympho bào).</td>
                <td>Lao phổi hoặc lao hạch (tiêu chuẩn mô học xác định bệnh lao).</td>
              </tr>
              <tr>
                <td><strong>5. Hoại tử mỡ</strong> (H3.9B)</td>
                <td>Enzym <strong>lipase</strong> thủy phân triglyceride → acid béo tự do kết hợp Ca²⁺ tạo muối calci (<strong>hiện tượng xà phòng hóa</strong>). Vi thể: tế bào mỡ hoại tử kèm tinh thể calci tím nhạt và thâm nhiễm bạch cầu trung tính.</td>
                <td><strong>Viêm tụy cấp</strong> (mô tụy &amp; mỡ quanh tụy); chấn thương mô mỡ (vú, thành ngực).</td>
              </tr>
              <tr>
                <td><strong>6. Hoại tử hoại thư</strong></td>
                <td>Không phải thể mô học riêng biệt, là hoại tử diện rộng thường ở chi: <em>Hoại thư khô</em> (hoại tử đông, không nhiễm khuẩn) vs <em>Hoại thư ướt</em> (bội nhiễm vi khuẩn gây hoại tử hóa lỏng thứ phát).</td>
                <td>Hoại thư ướt bàn chân trong đái tháo đường.</td>
              </tr>
              <tr>
                <td><strong>Bổ sung: Tổn thương gan do độc chất</strong></td>
                <td>CCl₄ hoặc acetaminophen liều cao hình thành gốc tự do → tổn thương tập trung ở <strong>vùng trung tâm tiểu thùy</strong> (vùng ít oxy nhất): tế bào gan phồng to, mất nhân, hoại tử điểm/cầu nối, tăng sinh <strong>tế bào Kupffer</strong>.</td>
                <td>Ngộ độc carbon tetrachloride (CCl₄) hoặc quá liều acetaminophen (paracetamol).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="card-title">📦 5.4. Tích lũy Bất thường trong Tế bào <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H3.10')">🖼️ H3.10</button> <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H3.11')">🖼️ H3.11</button> <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H3.12')">🖼️ H3.12</button></div>
          <ul class="theory-list">
            <li><strong>5.4.1. Tích lũy Lipid:</strong>
              <br/>• <em>Thoái hóa mỡ (gan):</em> Tích tụ triglyceride (nghiện rượu, béo phì, đái tháo đường, thiếu protein, thiếu oxy mạn, nhiễm độc). Đại thể gan to, mềm, vàng nhạt; vi thể không bào mỡ tròn trong sáng đẩy lệch nhân; nhuộm đặc hiệu <strong>Oil Red O</strong>.
              <br/>• <em>Cholesterol / cholesterol ester:</em> Xơ vữa động mạch, xanthoma, viêm mạn; trên mô học tinh thể tan trong xử lý mô để lại <strong>khe sáng hình kim</strong> (Hình 3.10).</li>
            <li><strong>5.4.2. Tích lũy Protein (bắt eosin mạnh; H&amp;E, PAS, HMMD):</strong>
              <br/>• <em>Tăng tái hấp thu:</em> Giọt hyalin bắt eosin ở ống lượn gần (hội chứng thận hư).
              <br/>• <em>Tăng tổng hợp:</em> Đa u tủy xương với <strong>thể Russell</strong> (trong bào tương) &amp; <strong>thể Dutcher</strong> (trong nhân).
              <br/>• <em>Protein biến tính:</em> Thể Mallory (tế bào gan).</li>
            <li><strong>5.4.3. Tích lũy Glycogen:</strong> Bệnh dự trữ glycogen (GSD, thiếu acid alpha-glucosidase GAA → không bào nhỏ trên H&amp;E, Hình 3.11A). Khó thấy trên H&amp;E nhưng bắt màu hồng tím với <strong>nhuộm PAS</strong> (Hình 3.11B); xử lý trước bằng enzym <strong>diastase</strong> làm mất màu → khẳng định là glycogen.</li>
            <li><strong>5.4.4. Tích lũy Sắc tố:</strong>
              <br/>• <em>Nội sinh:</em> <strong>Lipofuscin</strong> ("sắc tố lão hóa" nâu vàng quanh nhân); <strong>Melanin</strong> (tế bào hắc tố, tăng trong bướu hắc tố, Nevi Hình 3.12A, bệnh Addison); <strong>Hemosiderin</strong> (dự trữ sắt trong đại thực bào ở xuất huyết cũ/ứ huyết mạn → nhuộm <strong>Perls' cho màu xanh</strong>, Hình 3.12B).
              <br/>• <em>Ngoại sinh:</em> Carbon/bụi than (ứ đọng than <em>anthracosis</em> ở phổi, hạch rốn phổi); Mực xăm, bụi kim loại.</li>
            <li><strong>5.4.5. Hyalin hóa:</strong> Chất đồng nhất, trong, bắt eosin mạnh (không quy định bản chất hóa học cụ thể): <em>Hyalin thành mạch</em> (tăng huyết áp, đái tháo đường), <em>Xơ hóa mô</em> (mô viêm mạn trơ hyalin hóa).</li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">🦴 5.5. Vôi hóa Bệnh lý &amp; 6. Lão hóa Tế bào</div>
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Tiêu chí</th>
                  <th>Vôi hóa loạn dưỡng</th>
                  <th>Vôi hóa do rối loạn chuyển hóa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Mô lắng đọng</strong></td>
                  <td>Mô ĐÃ BỊ TỔN THƯƠNG / HOẠI TỬ</td>
                  <td>Lắng đọng lan tỏa tại các MÔ LÀNH</td>
                </tr>
                <tr>
                  <td><strong>Calci máu</strong></td>
                  <td>KHÔNG phụ thuộc nồng độ Ca²⁺ huyết thanh (bình thường)</td>
                  <td>Hậu quả TĂNG CALCI HUYẾT kéo dài (tích Ca × P vượt ngưỡng hòa tan <strong>70 mg²/dL²</strong>)</td>
                </tr>
                <tr>
                  <td><strong>Cơ chế &amp; Hoàn cảnh</strong></td>
                  <td>Thành phần hoại tử phóng thích phospholipid &amp; phosphate gắn Ca²⁺ dịch kẽ ở vùng kiềm nhẹ/xơ hóa: hoại tử mỡ tụy, <strong>nốt Ghon</strong> viêm lao, <strong>van động mạch chủ / hai lá</strong>.</td>
                  <td>Cường cận giáp nguyên/thứ phát (suy thận mạn), hủy xương lan rộng (di căn, Paget, đa u tủy), ngộ độc vitamin D/sarcoidosis. Thường gặp ở mô có <strong>trao đổi ion cao, kiềm nhẹ</strong>: <em>Phổi</em> (vách phế nang), <em>Dạ dày</em> (tế bào viền tiết HCl giàu H⁺/HCO₃⁻), <em>Thận</em>, <em>Thành mạch</em>. Nhuộm <strong>Von Kossa cho màu đen</strong>.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="callout formula">
            <div class="callout-title">⏳ 6. Lão hóa Tế bào (Cellular Senescence)</div>
            <ul>
              <li><strong>Hai cơ chế:</strong> (1) Tích lũy tổn thương phân tử (ROS, DNA); (2) Rút ngắn <strong>telomere</strong> sau mỗi lần phân bào đến <strong>giới hạn Hayflick</strong> → ngừng phân chia vĩnh viễn nhưng vẫn chuyển hóa.</li>
              <li><strong>Yếu tố điều hòa:</strong> <strong>p53</strong> (ngừng chu kỳ), <strong>p16INK4a</strong> (chất ức chế chu kỳ đặc trưng tế bào lão hóa), <strong>Sirtuins (SIRT1)</strong> (kiểm soát ROS &amp; hỗ trợ telomerase).</li>
              <li><strong>SASP:</strong> Kiểu hình tiết liên quan lão hóa (cytokine tiền viêm, protease, yếu tố tăng trưởng) gây viêm mạn mức độ thấp và thúc đẩy bướu thứ phát.</li>
              <li><strong>Mô học &amp; Dấu ấn:</strong> Nhân lớn tăng sắc, bào tương tích tụ lipofuscin, dấu ấn phân tử <strong>SA-β-Gal dương tính ở pH 6</strong>.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Dạng vôi hóa bệnh lý nào sau đây xảy ra trong mô lành và có liên quan đến tăng calci huyết?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Câu tự lượng giá 2 (tr. 75)",
        options: [
          "Vôi hóa do rối loạn chuyển hóa",
          "Vôi hóa loạn dưỡng",
          "Vôi hóa sinh lý",
          "Vôi hóa vi thể nội bào"
        ],
        answer: 0,
        explain: "Đáp án chuẩn giáo trình (Mục 5.5.2 & Câu 2 tr. 75): Vôi hóa do rối loạn chuyển hóa lắng đọng lan tỏa muối calci tại các MÔ LÀNH do tăng calci huyết kéo dài vượt ngưỡng hòa tan sinh lý (70 mg²/dL²). Ngược lại, vôi hóa loạn dưỡng xảy ra trên mô đã tổn thương/hoại tử khi calci máu bình thường."
      },
      {
        q: "Tế bào lão hóa có đặc điểm nào sau đây?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Câu tự lượng giá 3 (tr. 75)",
        options: [
          "Ngừng phân chia vĩnh viễn, vẫn chuyển hóa",
          "Phân chia liên tục nhưng không kiểm soát",
          "Chết theo cơ chế hoại tử",
          "Không biểu hiện β-galactosidase"
        ],
        answer: 0,
        explain: "Đáp án chuẩn giáo trình (Mục 6 & Câu 3 tr. 75): Khi telomere rút ngắn đến giới hạn Hayflick, tế bào lão hóa NGỪNG PHÂN CHIA VĨNH VIỄN nhưng vẫn duy trì hoạt động trao đổi chất (tiết yếu tố SASP) và dương tính với dấu ấn SA-β-Gal ở pH 6."
      },
      {
        q: "Loại hoại tử nào thường gặp trong lao phổi, có mô học trung tâm giống pho mát, không thấy ranh giới tế bào rõ?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Câu tự lượng giá 5 (tr. 75)",
        options: [
          "Hoại tử bã đậu",
          "Hoại tử hóa lỏng",
          "Hoại tử mỡ",
          "Hoại tử đông"
        ],
        answer: 0,
        explain: "Đáp án chuẩn giáo trình (Mục 5.3.1.4 & Câu 5 tr. 75): Hoại tử bã đậu đặc trưng cho viêm lao; đại thể trắng vàng, bở giống pho mát; vi thể trung tâm hồng nhạt vô định hình không ranh giới tế bào, bao quanh bởi tế bào dạng biểu mô, đại bào Langhans và lympho bào."
      },
      {
        q: "Khi nhuộm tiêu bản mô nghi ngờ tích lũy glycogen, phương pháp xác định khẳng định nào là chuẩn mực nhất?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Mục 5.4.3 & Hình 3.11 (tr. 70)",
        options: [
          "Nhuộm PAS cho màu hồng tím, và xử lý trước bằng enzym diastase làm mất màu hồng tím đó",
          "Nhuộm Oil Red O trên mẫu cắt lạnh cho màu xanh Phổ",
          "Nhuộm Perls' cho màu xanh dương đặc hiệu và bền với acid",
          "Nhuộm Von Kossa bằng phản ứng bạc hóa cho màu đen"
        ],
        answer: 0,
        explain: "Trang 70: Glycogen khó thấy trên H&E, bắt màu hồng tím với PAS; xử lý mẫu bằng diastase trước khi nhuộm PAS giúp khẳng định glycogen vì chất này mất màu sau khi enzym phân hủy. Oil Red O dùng cho triglyceride; Perls' dùng cho hemosiderin; Von Kossa dùng cho muối calci phosphate."
      },
      {
        q: "Trong tế bào hoại tử do độc chất gan (CCl₄ hoặc acetaminophen liều cao), vùng nào của tiểu thùy gan bị tổn thương tập trung nặng nhất và tại sao?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Mục 5.3.2.5 (tr. 67)",
        options: [
          "Vùng trung tâm tiểu thùy (vùng III) vì đây là vùng nhận ít oxy nhất",
          "Vùng khoảng cửa (vùng I) vì đây là nơi áp lực động mạch gan cao nhất",
          "Vùng dưới bao Glisson vì đây là nơi thiếu tế bào Kupffer",
          "Chỉ khu trú ở ống mật liên tiểu thùy mà không ảnh hưởng tế bào gan"
        ],
        answer: 0,
        explain: "Trang 67: CCl₄ và acetaminophen liều cao tạo gốc tự do gây hoại tử tế bào gan tập trung ở vùng trung tâm tiểu thùy – vùng ít oxy nhất; mô học thấy tế bào gan phồng to, mất nhân, có thể hoại tử điểm hoặc cầu nối, kèm tăng sinh tế bào Kupffer."
      },
      {
        q: "Trong con đường nội sinh của chết tế bào theo chương trình (apoptosis), phức hợp apoptosome được cấu thành từ những thành phần nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Mục 5.3.3.2 (tr. 68)",
        options: [
          "Cytochrome c (từ ty thể), Apaf-1 và Procaspase-9 → hoạt hóa Caspase-9 rồi Caspase-3",
          "FasL, thụ thể TNFR1 và protein adaptor FADD → hoạt hóa Caspase-8",
          "MDM2, p21/CIP1 và Cyclin D → hoạt hóa E2F",
          "Phospholipase, protease và endonuclease → giải phóng lactate"
        ],
        answer: 0,
        explain: "Trang 68: Trong con đường nội sinh, ty thể giải phóng cytochrome c kết hợp với Apaf-1 và Procaspase-9 tạo phức hợp apoptosome → hoạt hóa caspase-9 → hoạt hóa caspase-3."
      },
      {
        q: "Trong quá trình chết tế bào theo chương trình, phân tử nào được bộc lộ ra mặt ngoài màng tế bào apoptotic đóng vai trò tín hiệu cho đại thực bào nhận diện và thực bào không gây viêm?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Mục 5.3.3.2 (tr. 68)",
        options: [
          "Phosphatidylserine (kèm DNA bị cắt thành các đoạn 180–200 bp)",
          "Sắc tố lipofuscin tích tụ quanh nhân",
          "Phức hợp miễn dịch IgG–C3 lắng đọng thành mạch",
          "Tinh thể calci phosphate không tan"
        ],
        answer: 0,
        explain: "Trang 68: Caspase-3 cắt DNA thành các đoạn nhỏ đặc trưng 180–200 bp; đồng thời Phosphatidylserine được bộc lộ lên bề mặt màng tế bào apoptotic làm dấu hiệu cho đại thực bào nhận diện loại bỏ không gây viêm."
      },
      {
        q: "Trong bốn dấu hiệu vi thể dưới đây của sưng phù tế bào cấp tính (tổn thương hồi phục), đặc điểm nào giúp phân biệt chắc chắn rằng tế bào CHƯA chuyển sang giai đoạn hoại tử?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Mục 5.1 (tr. 63)",
        options: [
          "Nhân phồng nhẹ, nhạt màu nhưng KHÔNG có hiện tượng nhân vón, nhân vỡ hay nhân tan",
          "Bào tương bắt màu eosin hồng đậm rực và vỡ màng bào tương",
          "Ty thể xuất hiện nhiều chất lắng đọng vô định hình đậm đặc",
          "Mô bị tiêu hoàn toàn thành dịch lỏng nhầy kèm nhiều bạch cầu trung tính"
        ],
        answer: 0,
        explain: "Trang 63: Trong sưng phù tế bào cấp tính (hồi phục), nhân tế bào vẫn nguyên vẹn (phồng nhẹ, nhạt màu, KHÔNG có nhân vón, nhân vỡ hay nhân tan). Nhân vón/vỡ/tan và vỡ màng là dấu hiệu của tổn thương không hồi phục / hoại tử."
      },
      {
        q: "Vị trí nào trên niêm mạc ống tiêu hóa hay bị vôi hóa do rối loạn chuyển hóa nhất vì có môi trường kiềm nhẹ giàu H⁺/HCO₃⁻?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Mục 5.5.2 (tr. 73)",
        options: [
          "Tế bào viền niêm mạc dạ dày ở vùng tiết HCl",
          "Biểu mô lát tầng thực quản đoạn trên",
          "Niêm mạc trực tràng vùng hậu môn",
          "Lớp cơ trơn ruột thừa"
        ],
        answer: 0,
        explain: "Trang 73: Vôi hóa chuyển hóa hay gặp tại những nơi trao đổi ion cao, lưu lượng máu lớn và pH kiềm nhẹ gồm: Phổi (vách phế nang), Niêm mạc dạ dày (tế bào viền vùng tiết HCl do giàu H⁺/HCO₃⁻), Thận và Thành mạch máu."
      },
      {
        q: "Trong bệnh đa u tủy xương (multiple myeloma), protein miễn dịch tổng hợp quá mức tích tụ tạo thành thể vùi nào trong bào tương và trong nhân tương bào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Mục 5.4.2 (tr. 70)",
        options: [
          "Thể Russell (trong bào tương) và Thể Dutcher (trong nhân)",
          "Thể Mallory (trong bào tương) và Thể myelin (ngoài màng)",
          "Cầu sừng (trong bào tương) và Thể psammoma (trong mô đệm)",
          "Hạt hemosiderin (trong bào tương) và Thể apoptotic (ngoài nhân)"
        ],
        answer: 0,
        explain: "Trang 70: Tích lũy protein do tăng tổng hợp trong đa u tủy xương tạo thành Thể Russell (trong bào tương) và Thể Dutcher (trong nhân)."
      },
      {
        q: "Khi quan sát một tiêu bản mô có tinh thể cholesterol (như mảng xơ vữa động mạch hoặc nang viêm mạn), hình ảnh đặc trưng trên lam nhuộm H&E thường quy là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Mục 5.4.1 & Hình 3.10 (tr. 69)",
        options: [
          "Các khe sáng trống hình kim (vì tinh thể cholesterol hòa tan trong quá trình xử lý mô)",
          "Các đám hạt màu xanh Phổ nằm gọn trong bào tương đại thực bào",
          "Các khối vô định hình màu tím đậm do phản ứng xà phòng hóa calci",
          "Các giọt đồng nhất màu hồng tím bắt thuốc nhuộm PAS bền với diastase"
        ],
        answer: 0,
        explain: "Trang 69 & Hình 3.10: Trên mô học, tinh thể cholesterol tan mất trong dung môi hữu cơ khi xử lý mô, để lại các khe sáng hình kim nhọn hai đầu đặc trưng."
      },
      {
        q: "Hoạt chất enzym nào trong viêm tụy cấp giải phóng trực tiếp acid béo tự do từ tế bào mỡ để kết hợp với ion calci tạo hiện tượng xà phòng hóa?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3, Mục 5.3.1.5 & 5.3.2.4 (tr. 66–67)",
        options: [
          "Lipase tụy thủy phân triglyceride thành acid béo",
          "Amylase tụy cắt liên kết glycogen trong tiểu thùy tụy",
          "Caspase-3 cắt DNA màng tế bào mỡ thành đoạn 200 bp",
          "Cytochrome P450 oxy hóa phospholipid màng tế bào"
        ],
        answer: 0,
        explain: "Trang 66–67: Trong viêm tụy cấp, enzym tụy (chủ yếu là lipase) hoạt hóa tại chỗ thủy phân triglyceride thành acid béo tự do, kết hợp với ion Ca²⁺ tạo thành muối calci (hiện tượng xà phòng hóa) bắt màu tím nhạt trên mô học."
      }
    ]
  }
];
