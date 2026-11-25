// ==========================================================================
// MỞ RỘNG CÂU HỎI & PHÂN LOẠI KSA + MỨC NHẬN THỨC (BÀI 1 ĐẾN BÀI 7)
// Mức 1 (Thuộc/Nhớ lại: 6/24 = 25%) | Mức 2 (Hiểu: 9/24 = 37,5%) | Mức 3 (Vận dụng: 9/24 = 37,5%)
// K (Kiến thức) | S (Kỹ năng xác định mốc/hình ảnh) | A (Thái độ / Biện luận lâm sàng)
// Tổng ngân hàng: 7 bài × 24 câu = 168 câu trắc nghiệm chuẩn Đề cương GP YDS
// ==========================================================================

window.EXTRA_QUESTIONS = {
  // ========================================================================
  // BÀI 1: DẠ DÀY & LIÊN QUAN HẬU CUNG MẠC NỐI
  // Base (12): L1=4, L2=4, L3=4 | Extra (12): L1=2, L2=5, L3=5 -> Tổng: L1=6, L2=9, L3=9
  // ========================================================================
  1: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Mốc cột sống)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Liên quan)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Cấu tạo cơ)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Hình thể)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Mạch máu)" },
      { level: 2, ksa: "S", ksaLabel: "S1: Định hướng nguồn mạch" },
      { level: 2, ksa: "S", ksaLabel: "S1: Định hướng vòng mạch" },
      { level: 3, ksa: "S", ksaLabel: "S2: Mốc phẫu thuật" },
      { level: 3, ksa: "A", ksaLabel: "A2: Biện luận sinh lý–GP" },
      { level: 3, ksa: "K", ksaLabel: "K3: Vận dụng phôi thai" },
      { level: 3, ksa: "A", ksaLabel: "A2: Biện luận lâm sàng" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Đáy vị của dạ dày được xác định có đặc điểm nào sau đây?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 431 (tr. 65)",
        options: [
          "Phía trên mặt phẳng ngang qua khuyết tâm vị",
          "Phần nối thân vị với hang vị",
          "Phần nối thân vị với ống môn vị",
          "Phần có mạc nối nhỏ bám"
        ],
        answer: 0,
        explain: "Đáp án 431C & Tập 2 tr. 15: Đáy vị là phần hình chỏm cầu ở phía trên mặt phẳng ngang qua khuyết tâm vị."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Mạc nối nhỏ gồm hai phần dây chằng nào và nối từ đâu tới đâu?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 503 (tr. 75) & Câu 445 (tr. 67)",
        options: [
          "Dây chằng gan–vị và dây chằng gan–tá tràng (nối gan với bờ cong nhỏ dạ dày và phần trên tá tràng)",
          "Dây chằng gan–vị và dây chằng vành",
          "Dây chằng gan–tá tràng và dây chằng vị–lách",
          "Dây chằng gan–vị và dây chằng vị–lách"
        ],
        answer: 0,
        explain: "Đáp án 503B & 445B: Mạc nối nhỏ gồm dây chằng gan–vị (mỏng) và dây chằng gan–tá tràng (dày, chứa cuống gan)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cấu tạo)",
        q: "Khi quan sát qua nội soi dạ dày, vùng chuyển tiếp giữa niêm mạc thực quản (màu hồng nhạt) và niêm mạc dạ dày (màu đỏ) được gọi là gì?",
        source: "Giải phẫu học YDS Tập 2 – Bài 21, mục 3 (tr. 17)",
        options: [
          "Đường Z",
          "Ống vị (gastric canal)",
          "Khuyết góc",
          "Khuyết tâm vị"
        ],
        answer: 0,
        explain: "Tập 2 tr. 17: Trên nội soi dạ dày, đường ranh giới hình răng cưa giữa niêm mạc thực quản hồng nhạt và niêm mạc dạ dày màu đỏ gọi là đường 'Z'."
      },
      {
        level: 2, ksa: "S", ksaLabel: "S1: Định hướng cấu trúc",
        q: "Về lớp cơ của dạ dày, phát biểu nào sau đây đúng về sự phân bố độ dày của từng tầng cơ?",
        source: "Giải phẫu học YDS Tập 2 – Bài 21, mục 3 (tr. 17) & TN 2024 Câu 430",
        options: [
          "Lớp cơ dọc dày nhất ở bờ cong nhỏ; lớp cơ vòng dày nhất ở môn vị; lớp cơ chéo tập trung ở đáy vị",
          "Lớp cơ dọc dày nhất ở bờ cong lớn; lớp cơ vòng dày nhất ở tâm vị",
          "Lớp cơ chéo bao kín toàn bộ dạ dày từ tâm vị đến môn vị",
          "Thành dạ dày chỉ có hai lớp cơ giống thực quản và ruột non"
        ],
        answer: 0,
        explain: "Tập 2 tr. 17: Dạ dày có thêm tầng cơ chéo ở trong cùng tập trung tại đáy vị; cơ dọc dày nhất ở bờ cong nhỏ; cơ vòng dày nhất ở môn vị tạo cơ thắt môn vị."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Mạch máu)",
        q: "Trong các mô tả về mạch máu cấp cho dạ dày dưới đây, câu nào SAI?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 240 (tr. 36)",
        options: [
          "Động mạch vị mạc nối phải xuất phát từ động mạch lách",
          "Động mạch vị phải xuất phát từ động mạch gan riêng",
          "Động mạch vị trái xuất phát từ động mạch thân tạng",
          "Động mạch đáy vị sau xuất phát từ động mạch lách"
        ],
        answer: 0,
        explain: "Đáp án 240C (tr. 194): ĐM vị mạc nối phải xuất phát từ động mạch vị tá tràng (còn nhánh tách từ ĐM lách đi dọc bờ cong lớn là ĐM vị mạc nối trái)."
      },
      {
        level: 2, ksa: "S", ksaLabel: "S1: Định vị dây chằng",
        q: "Động mạch vị mạc nối phải đi trong cấu trúc dây chằng/mạc nối nào (phần của mạc nối lớn)?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 247 (tr. 37)",
        options: [
          "Dây chằng vị – kết tràng",
          "Dây chằng gan – vị",
          "Dây chằng gan – tá tràng",
          "Dây chằng vị – hoành"
        ],
        answer: 0,
        explain: "Đáp án 247C: Dọc theo bờ cong lớn, ĐM vị mạc nối phải (cùng ĐM vị mạc nối trái) đi giữa hai lá của dây chằng vị–kết tràng (mạc nối lớn)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phúc mạc)",
        q: "Động mạch vị trái đi đội phúc mạc lên tạo thành cấu trúc nếp nào ở thành sau tiền đình túi mạc nối?",
        source: "Giải phẫu học YDS Tập 1 – Bài 9, mục 5.2.1 (tr. 90)",
        options: [
          "Nếp vị tụy trái (liềm động mạch vị trái)",
          "Nếp vị tụy phải (liềm động mạch gan)",
          "Dây chằng vị–lách",
          "Cơ treo tá tràng"
        ],
        answer: 0,
        explain: "Tập 1 tr. 90: Khi ở sau hậu cung mạc nối, ĐM vị trái đội phúc mạc lên tạo thành nếp vị tụy trái (còn gọi là liềm ĐM vị trái)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Đọc hình ảnh học",
        q: "Một bệnh nhân nữ 37 tuổi đau bụng dữ dội, bụng gồng cứng, X-quang bụng đứng thấy liềm hơi dưới vòm hoành phải. Chẩn đoán thủng tạng rỗng – tạng nào hay thủng nhất gây bệnh cảnh này và dịch tiêu hóa chảy đầu tiên vào đâu nếu thủng mặt trước?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 1139–1140 (tr. 174) & Tập 2 tr. 16",
        options: [
          "Dạ dày (hoặc hành tá tràng) → dịch chảy vào ổ phúc mạc lớn trước thành bụng, gây viêm phúc mạc toàn thể",
          "Tụy → dịch chảy vào khoang sau phúc mạc",
          "Gan → chảy máu khu trú khoang dưới hoành",
          "Lách → dịch chảy vào túi cùng Douglas"
        ],
        answer: 0,
        explain: "Đáp án 1139D, 1140A & Tập 2 tr. 16: Khí trong đáy vị (tạng rỗng) thoát ra tạo liềm hơi dưới vòm hoành dẫn đến biến chứng viêm phúc mạc đáng lo ngại nhất."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Biện luận lâm sàng",
        q: "Một bệnh nhân bị loét thủng mặt SAU thân vị dạ dày. Dịch acid và thức ăn có nguy cơ đổ trực tiếp vào khoang giải phẫu nào và ăn mòn động mạch lớn nào nằm sát phía sau?",
        source: "Giải phẫu học YDS Tập 2 – Bài 21, mục 2.2 (tr. 16) & TN 2024 Câu 502",
        options: [
          "Đổ vào hậu cung mạc nối (túi mạc nối) → có thể ăn mòn động mạch lách (chạy dọc bờ trên tụy)",
          "Đổ vào ngách gan thận → ăn mòn tĩnh mạch chủ dưới",
          "Đổ vào tiền đình túi mạc nối → ăn mòn động mạch mạc treo tràng dưới",
          "Đổ vào ngách cạnh kết tràng phải → ăn mòn động mạch hồi kết tràng"
        ],
        answer: 0,
        explain: "Tập 2 tr. 16: Mặt sau thân vị tạo nên thành trước hậu cung mạc nối; qua hậu cung mạc nối liên quan trực tiếp thân/đuôi tụy và động mạch lách → loét thủng mặt sau dễ gây xuất huyết ồ ạt từ ĐM lách."
      },
      {
        level: 3, ksa: "K", ksaLabel: "K3: Vận dụng dẫn lưu",
        q: "Đáy vị và phần trên mặt sau dạ dày ngoài nhận máu từ vòng mạch bờ cong lớn còn được cấp máu bởi những nguồn phụ nào?",
        source: "Giải phẫu học YDS Tập 2 – Bài 21, mục 4.1 (tr. 18)",
        options: [
          "Các ĐM vị ngắn (5–7 nhánh từ ĐM lách), ĐM vị sau (từ ĐM lách) và ĐM hoành dưới (từ ĐMC bụng)",
          "ĐM tá tụy trên trước và ĐM tá tụy dưới sau",
          "ĐM hồi kết tràng và ĐM kết tràng giữa",
          "ĐM gan phải và ĐM túi mật"
        ],
        answer: 0,
        explain: "Tập 2 tr. 18 & Tập 1 tr. 92: Đáy vị nhận máu từ 5–7 ĐM vị ngắn, ĐM vị sau (từ ĐM lách) và nhánh tâm vị của ĐM hoành dưới (từ ĐMC bụng)."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A1: Biện luận nhi khoa",
        q: "Trẻ sơ sinh nam 4 tuần tuổi nôn vọt dữ dội sau bú (dịch nôn không có mật), sờ thấy khối u hình ô-liu vùng thượng vị phải. Cơ chế giải phẫu của bệnh lý này là gì?",
        source: "Giải phẫu học YDS Tập 2 – Bài 21 (tr. 20: Hẹp môn vị phì đại bẩm sinh)",
        options: [
          "Phì đại bất thường lớp cơ vòng ở môn vị (cơ thắt môn vị) làm thức ăn không qua lỗ môn vị xuống tá tràng được",
          "Hẹp cơ vòng Oddi ở đoạn D2 tá tràng",
          "Thoát vị trượt tâm vị qua lỗ thực quản cơ hoành",
          "Tắc mạch vị trái gây thiếu máu bờ cong nhỏ"
        ],
        answer: 0,
        explain: "Tập 2 tr. 20: Phì đại môn vị bẩm sinh là tình trạng cơ thắt môn vị (do lớp cơ vòng dày lên) phì đại bất thường gây tắc nghẽn lỗ môn vị (trước chỗ đổ của ống mật chủ nên dịch nôn không có mật)."
      },
      {
        level: 3, ksa: "K", ksaLabel: "K3: Vận dụng thực quản–vị",
        q: "Mô tả nào sau đây SAI về đường đi và liên quan của thực quản trước khi đổ vào tâm vị dạ dày?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 427 (tr. 64–65)",
        options: [
          "Chui qua cơ hoành ở ngang mức đốt sống ngực 12 (T12)",
          "Đi qua trung thất trên và xuống trung thất sau",
          "Có đoạn liên quan phía trước với tâm nhĩ trái",
          "Đi phía sau cung động mạch chủ"
        ],
        answer: 0,
        explain: "Đáp án 427D (tr. 199): Lỗ thực quản của cơ hoành nằm ngang đốt sống NGỰC 10 (T10), không phải T12 (ngang T12 là lỗ động mạch chủ của cơ hoành!)."
      }
    ]
  },

  // ========================================================================
  // BÀI 2: GAN, ĐƯỜNG MẬT NGOÀI GAN & PHÂN THÙY PHẪU THUẬT
  // Base (12): L1=4, L2=5, L3=3 | Extra (12): L1=2, L2=4, L3=6 -> Tổng: L1=6, L2=9, L3=9
  // ========================================================================
  2: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Hình thể)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Thuật ngữ)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân thùy)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Hạ phân thùy)" },
      { level: 2, ksa: "S", ksaLabel: "S1: Định vị mặt hoành" },
      { level: 2, ksa: "S", ksaLabel: "S1: Định vị khe gan" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Cuống gan)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Mô gan)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Đường mật)" },
      { level: 3, ksa: "A", ksaLabel: "A2: Ứng dụng sỏi mật" },
      { level: 3, ksa: "S", ksaLabel: "S2: Phân tích mặt gan" },
      { level: 3, ksa: "S", ksaLabel: "S2: Định vị phẫu thuật" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Nếu phân chia theo phẫu thuật hay theo đường mật, thùy đuôi của gan tương ứng với hạ phân thùy mấy?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 489 (tr. 73)",
        options: [
          "Hạ phân thùy I",
          "Hạ phân thùy II",
          "Hạ phân thùy III",
          "Hạ phân thùy IV"
        ],
        answer: 0,
        explain: "Đáp án 489A & Tập 2 tr. 47: Hạ phân thùy I chỉ thấy ở mặt tạng và tương ứng với thùy đuôi theo giải phẫu."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Dây chằng liềm của gan có các đặc điểm sau, NGOẠI TRỪ:",
        source: "Giải phẫu học YDS Tập 2 – Câu TLG 5 (tr. 52) & TN 2024 Câu 474 (tr. 71)",
        options: [
          "Nằm ở mặt hoành và được xem là khe giữa gan",
          "Cấu tạo gồm hai lá của phúc mạc",
          "Treo gan vào cơ hoành và thành bụng trước",
          "Liên tiếp với dây chằng vành"
        ],
        answer: 0,
        explain: "Đáp án 474A (tr. 200): Dây chằng liềm tương ứng với KHE LIÊN PHÂN THÙY TRÁI (chứa TM gan trái), còn KHE GIỮA gan tương ứng với tĩnh mạch gan giữa (từ hố túi mật đến TMCD)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cấu trúc)",
        q: "Lớp xơ (bao xơ Glisson) của gan có đặc điểm giải phẫu nào sau đây?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 479 (tr. 72)",
        options: [
          "Đi len lỏi vào nhu mô gan theo các đường mạch mật (tạo bao quanh bộ ba khoảng cửa)",
          "Là lớp bao xơ bọc ở bên ngoài lớp phúc mạc gan",
          "Bao bọc kín toàn bộ mặt ngoài túi mật",
          "Dính rất lỏng lẻo vào nhu mô gan nên dễ bóc tách"
        ],
        answer: 0,
        explain: "Đáp án 479C & Tập 2 tr. 46: Bao xơ là lớp mô xơ chắc nằm DƯỚI lớp thanh mạc, dính sát mô gan và đi theo mạch máu – đường mật vào chia nhánh tạo bao quanh bộ ba khoảng cửa."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân thùy)",
        q: "Về phân chia các hạ phân thùy gan theo phẫu thuật, câu nào sau đây ĐÚNG?",
        source: "Giải phẫu học YDS Tập 2 – Câu TLG 4 (tr. 52) & TN 2024 Câu 482 (tr. 72)",
        options: [
          "Hạ phân thùy VI thuộc phân thùy sau",
          "Hạ phân thùy II chỉ thấy ở mặt tạng",
          "Hạ phân thùy IV chính là thùy đuôi",
          "Hạ phân thùy VII thuộc phân thùy trước"
        ],
        answer: 0,
        explain: "Đáp án 482C & Tập 2 tr. 47: Phân thùy sau của gan phải gồm HPT VI (dưới) và HPT VII (trên). HPT I mới là thùy đuôi; HPT II thấy ở cả hai mặt."
      },
      {
        level: 2, ksa: "S", ksaLabel: "S1: Định hướng mạch",
        q: "Mô tả nào sau đây về ỐNG MẬT CHỦ là ĐÚNG?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 484 (tr. 73)",
        options: [
          "Đi phía trước tĩnh mạch cửa (trong bờ phải mạc nối nhỏ)",
          "Được hợp bởi ống gan phải và ống gan trái",
          "Bắt đầu từ phía sau phần trên tá tràng",
          "Nằm bên trái động mạch gan riêng"
        ],
        answer: 0,
        explain: "Đáp án 484D (tr. 200): Ống mật chủ được hợp bởi ống gan chung và ống túi mật từ bờ trên D1 tá tràng; đi trong cuống gan ở phía trước phải tĩnh mạch cửa và bên phải động mạch gan riêng."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải phẫu)",
        q: "Túi mật có các đặc điểm giải phẫu sau, NGOẠI TRỪ:",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 486 (tr. 73)",
        options: [
          "Không có phúc mạc che phủ ở mặt dưới",
          "Nằm trong hố túi mật ở mặt tạng của gan",
          "Thông với ống mật chủ qua ống túi mật",
          "Được xem là đường mật phụ"
        ],
        answer: 0,
        explain: "Đáp án 486B & Tập 2 tr. 50: Mặt tạng của túi mật tiếp xúc mặt dưới gan được phúc mạc phủ ở mặt tự do (hố túi mật mới là chỗ gan không có phúc mạc, còn bản thân túi mật CÓ phúc mạc phủ ở mặt tự do)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân tích mốc ngực",
        q: "Khi khám lâm sàng, chiều cao gan bình thường đối chiếu lên thành ngực phải ở đường trung đòn phải có giới hạn trên và giới hạn dưới lần lượt là:",
        source: "Giải phẫu học YDS Tập 2 – Bài 24 (tr. 43) & mục 6 (tr. 50)",
        options: [
          "Bờ trên lên tới khoang gian sườn IV; bờ dưới chạy dọc bờ sườn phải (đáy túi mật ở sụn sườn 9)",
          "Bờ trên lên tới khoang gian sườn II; bờ dưới ở ngang rốn",
          "Bờ trên ở khoang gian sườn VI; bờ dưới ở hố chậu phải",
          "Bờ trên ở sụn sườn 7 trái; bờ dưới ở mỏm mũi kiếm"
        ],
        answer: 0,
        explain: "Tập 2 tr. 43, 50: Trên đường trung đòn phải, bờ trên gan lên tới khoang gian sườn IV, bờ dưới chạy dọc bờ sườn phải, còn đáy túi mật chiếu ở khoảng sụn sườn 9 trên đường trung đòn phải."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Xử trí ngoại khoa",
        q: "Trong phẫu thuật cắt túi mật nội soi, phẫu thuật viên cần bộc lộ rõ tam giác gan mật (Tam giác Calot) để kẹp cắt động mạch nào một cách an toàn?",
        source: "Giải phẫu học YDS Tập 2 – Bài 24, mục 6 (tr. 50)",
        options: [
          "Động mạch túi mật (thường tách từ động mạch gan phải)",
          "Động mạch gan chung",
          "Động mạch vị tá tràng",
          "Tĩnh mạch cửa"
        ],
        answer: 0,
        explain: "Tập 2 tr. 50: Động mạch túi mật thường xuất phát từ động mạch gan phải và đi trong tam giác gan mật (Calot – giới hạn bởi ống gan chung, ống túi mật, mặt tạng gan)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân tích tiền đình",
        q: "Thành phần nào sau đây nằm giữa hai lá dây chằng gan–tá tràng (tạo nên bờ phải tự do của mạc nối nhỏ và giới hạn trước lỗ túi mạc nối Winslow)?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 494, 501, 505 (tr. 74–76)",
        options: [
          "Cuống gan (Tĩnh mạch cửa, Động mạch gan riêng, Ống mật chủ)",
          "Tĩnh mạch chủ dưới",
          "Động mạch thân tạng và đám rối tạng",
          "Động mạch vị trái và tĩnh mạch lách"
        ],
        answer: 0,
        explain: "Đáp án 494B, 501B & Tập 2 tr. 49–50: Dây chằng gan–tá tràng chứa cuống gan gồm TM cửa (sau), ĐM gan riêng (trước trái) và OMC (trước phải). Bờ sau lỗ túi mạc nối là tĩnh mạch chủ dưới."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Chẩn đoán tắc mật",
        q: "Bệnh nhân nữ 43 tuổi nhập viện vì sốt, đau hạ sườn phải, vàng da do SỎI KẸT ĐOẠN CUỐI BÓNG GAN TỤY (Bóng Vater). Dấu hiệu nào sau đây trên siêu âm KHÔNG liên quan trực tiếp đến chẩn đoán này?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 1150–1151 (tr. 177)",
        options: [
          "Giãn tĩnh mạch cửa",
          "Giãn ống mật chủ",
          "Túi mật to",
          "Giãn đường mật trong gan"
        ],
        answer: 0,
        explain: "Đáp án 1150A & 1151B (tr. 213): Sỏi kẹt bóng Vater gây tắc nghẽn đường mật (giãn đường mật trong gan, giãn OMC, túi mật căng to và dễ biến chứng VIÊM TỤY CẤP), KHÔNG trực tiếp làm giãn tĩnh mạch cửa."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Biện luận rò mật",
        q: "Một bệnh nhân có sỏi túi mật lớn ăn mòn gây lỗ rò trực tiếp từ túi mật vào đường tiêu hóa (gây tắc ruột do sỏi mật). Do liên quan mặt tạng của túi mật, đoạn nào của đường tiêu hóa dễ tạo đường rò nhất?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 1148–1149 (tr. 176–177)",
        options: [
          "Phần trên (D1) tá tràng hoặc đại tràng ngang",
          "Đáy vị dạ dày",
          "Đoạn cuối hồi tràng",
          "Góc tá–hỗng tràng"
        ],
        answer: 0,
        explain: "Đáp án 1148C & 1149B (tr. 213): Túi mật nằm ở mặt tạng gan ngay trên phần trên (D1) tá tràng và phần phải đại tràng ngang → sỏi túi mật thường rò qua phần trên tá tràng hoặc đại tràng ngang."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân tích khoang bụng",
        q: "Khi bệnh nhân nằm ngửa sau chấn thương gan hoặc thủng tạng rỗng vùng hạ sườn phải, dịch ổ bụng thường tụ tập đầu tiên tại khoang giải phẫu nào nằm giữa mặt tạng gan phải và thận phải?",
        source: "Giải phẫu học YDS Tập 2 – Bài 24, mục 1.1.4 (tr. 44)",
        options: [
          "Ngách gan thận (Khoang Morison)",
          "Ngách dưới hoành trái",
          "Ngách gian xích-ma",
          "Hố lách"
        ],
        answer: 0,
        explain: "Tập 2 tr. 44: Ngách gan thận (khoang Morison) nằm giữa phần phải mặt tạng gan và thận phải – tuyến thượng thận phải, thông phía trước với ngách dưới hoành phải nên là vị trí tụ dịch trọng lực khi nằm ngửa."
      }
    ]
  },

  // ========================================================================
  // BÀI 3: TỤY, KHỐI TÁ TỤY & HỆ ỐNG TỤY
  // Base (12): L1=1, L2=6, L3=5 | Extra (12): L1=5, L2=3, L3=4 -> Tổng: L1=6, L2=9, L3=9
  // ========================================================================
  3: {
    baseTags: [
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Liên quan)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cấu tạo)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phúc mạc)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Ống tụy)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "S", ksaLabel: "S1: Định hướng mặt" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Mạch máu)" },
      { level: 2, ksa: "S", ksaLabel: "S1: Định hướng nguồn" },
      { level: 3, ksa: "S", ksaLabel: "S2: Liên quan mạch" },
      { level: 3, ksa: "A", ksaLabel: "A2: Biện luận lâm sàng" },
      { level: 3, ksa: "A", ksaLabel: "A2: Chẩn đoán u tụy" },
      { level: 3, ksa: "K", ksaLabel: "K3: Tụy nội tiết" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Góc tá–hỗng tràng được treo vào thành bụng sau (trụ phải cơ hoành) bởi cấu trúc nào?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 443 (tr. 67) & Câu 450 (tr. 68)",
        options: [
          "Cơ treo tá tràng (Cơ Treitz)",
          "Mạc nối nhỏ",
          "Mạc dính tá tụy",
          "Dây chằng vị – kết tràng"
        ],
        answer: 0,
        explain: "Đáp án 443A & 450D: Cơ treo tá tràng (dây chằng Treitz) đi từ trụ phải cơ hoành đến treo góc tá–hỗng tràng."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Phần nào sau đây của tá tràng là đoạn DI ĐỘNG (được bọc trong hai lá phúc mạc)?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 449 (tr. 68) & Câu 468 (tr. 70)",
        options: [
          "2/3 đầu của phần trên (hành tá tràng)",
          "Phần xuống (D2)",
          "Phần ngang (D3)",
          "Phần lên (D4)"
        ],
        answer: 0,
        explain: "Đáp án 449D & 468B: Phần lớn tá tràng cố định do mạc dính tá tụy (sau phúc mạc thứ phát), riêng 2/3 đầu của phần trên (D1 – hành tá tràng) di động."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Nhú tá lớn và nhú tá bé hiện diện ở phần nào của tá tràng?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 451 (tr. 68)",
        options: [
          "Phần xuống (D2)",
          "Phần trên (D1)",
          "Phần ngang (D3)",
          "Phần lên (D4)"
        ],
        answer: 0,
        explain: "Đáp án 451B & Tập 2 tr. 23: Nhú tá lớn (lỗ đổ bóng gan–tụy) và nhú tá bé (lỗ đổ ống tụy phụ Santorini) nằm ở thành sau trong của phần xuống (D2) tá tràng."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân tích liên quan",
        q: "Phần nào của tá tràng dính chặt vào đầu tụy nhất và phần nào đi phía trước cột sống thắt lưng?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 446 & 447 (tr. 67)",
        options: [
          "Dính chặt đầu tụy nhất: Phần xuống (D2); Đi trước cột sống thắt lưng: Phần ngang (D3)",
          "Dính chặt đầu tụy nhất: Phần trên (D1); Đi trước cột sống: Phần lên (D4)",
          "Dính chặt đầu tụy nhất: Phần ngang (D3); Đi trước cột sống: Phần xuống (D2)",
          "Dính chặt đầu tụy nhất: Phần lên (D4); Đi trước cột sống: Phần trên (D1)"
        ],
        answer: 0,
        explain: "Đáp án 446B & 447D: Phần xuống (D2) ôm sát và dính chặt đầu tụy nhất (cũng nhận ống mật chủ và ống tụy); Phần ngang (D3) vắt ngang trước cột sống L3–L4."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nội tiết)",
        q: "Trong các tế bào của tiểu đảo tụy (Langerhans), tế bào A (Alpha) và tế bào B (Beta) lần lượt tiết ra hormon nào?",
        source: "Giải phẫu học YDS Tập 2 – Bài 25, mục 4 (tr. 60)",
        options: [
          "Tế bào A tiết Glucagon (tăng đường huyết); Tế bào B tiết Insulin (giảm đường huyết)",
          "Tế bào A tiết Insulin; Tế bào B tiết Glucagon",
          "Tế bào A tiết Somatostatin; Tế bào B tiết Pancreatic polypeptide",
          "Tế bào A tiết Trypsinogen; Tế bào B tiết Amylase"
        ],
        answer: 0,
        explain: "Tập 2 tr. 60: Tế bào A (Alpha) tiết glucagon làm tăng đường huyết; Tế bào B (Beta) tiết insulin làm giảm đường huyết; Tế bào D tiết somatostatin; Tế bào F tiết pancreatic polypeptide."
      },
      {
        level: 2, ksa: "S", ksaLabel: "S1: Định hướng mạch",
        q: "Động mạch vị tá tràng sau khi chạy xuống bờ dưới phần trên tá tràng sẽ tách thành hai nhánh chính nào góp phần nuôi đầu tụy và dạ dày?",
        source: "Giải phẫu học YDS Tập 1 – Bài 9 (tr. 91) & Tập 2 – Bài 25 (tr. 56)",
        options: [
          "Động mạch vị mạc nối phải và động mạch tá tụy trên trước (sau đó còn nhánh tá tụy trên sau)",
          "Động mạch vị phải và động mạch vị trái",
          "Động mạch tụy lưng và động mạch tụy lớn",
          "Động mạch tá tụy dưới trước và động mạch tá tụy dưới sau"
        ],
        answer: 0,
        explain: "Tập 1 tr. 91 & Tập 2 tr. 56: ĐM vị tá tràng đi sau phần trên tá tràng, đến bờ dưới thì tách thành ĐM vị mạc nối phải và các ĐM tá tụy trên (trước & sau) để nối với các ĐM tá tụy dưới từ ĐM MTTT."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ vòng)",
        q: "Cơ vòng bóng gan–tụy (cơ vòng Oddi hay cơ vòng Boyden) bao gồm các sợi cơ vòng nào?",
        source: "Giải phẫu học YDS Tập 2 – Bài 25, Hình 25.2 (tr. 55)",
        options: [
          "Cơ vòng trên (ống mật chủ), cơ vòng dưới, cơ vòng bóng (quanh bóng gan–tụy) và cơ vòng tụy",
          "Chỉ có một vòng cơ duy nhất quanh lỗ nhú tá bé",
          "Cơ vòng tâm vị và cơ vòng môn vị",
          "Cơ vòng quanh lỗ tĩnh mạch chủ dưới"
        ],
        answer: 0,
        explain: "Tập 2 tr. 55 (Hình 25.2): Cơ vòng bóng gan–tụy dài 6–30 mm gồm 4 thành phần: cơ vòng trên, cơ vòng dưới, cơ vòng bóng và cơ vòng tụy."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Mạch tụy)",
        q: "Sự khác nhau giữa hai cung động mạch ở mặt trước và mặt sau đầu tụy là gì?",
        source: "Giải phẫu học YDS Tập 2 – Bài 25, mục 3.1.1 (tr. 56)",
        options: [
          "Cung động mạch trước nằm gần tá tràng hơn so với cung động mạch sau",
          "Cung động mạch sau tách từ động mạch lách, cung trước từ động mạch thận",
          "Cung sau chạy phía trước cổ tụy, cung trước chạy sau ống mật chủ",
          "Hai cung này không thông nối với nhau"
        ],
        answer: 0,
        explain: "Tập 2 tr. 56: Cả hai cung đều do nhánh ĐM tá tụy trên (từ ĐM vị tá tràng) nối với nhánh ĐM tá tụy dưới (từ ĐM MTTT), nhưng cung trước chạy gần bờ tá tràng hơn so với cung sau."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Chẩn đoán chấn thương",
        q: "Trong chấn thương bụng kín (ví dụ vô lăng xe đập mạnh vào vùng thượng vị), đoạn nào của tá tràng dễ bị dập vỡ nhất và vì sao?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 444 (tr. 67) & Tập 2 tr. 23",
        options: [
          "Phần ngang (D3) vì cố định và nằm vắt ngang ngay trước cột sống thắt lưng L3–L4 nên bị ép giữa lực tác động trước và cột sống phía sau",
          "Hành tá tràng (D1) vì nằm sát dưới da vùng hạ sườn phải",
          "Phần lên (D4) vì có mạc treo ruột non rất dài",
          "Nhú tá lớn vì có cơ vòng Oddi dày"
        ],
        answer: 0,
        explain: "Tập 2 tr. 23: Phần ngang (D3) tá tràng nằm cố định ngay trước cột sống thắt lưng (L3–L4), nên trong chấn thương bụng kín dễ bị ép dập giữa lực chấn thương từ phía trước và cột sống từ phía sau."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Biện luận triệu chứng",
        q: "Vì sao bệnh nhân bị viêm tụy cấp hoặc ung thư thân tụy thường có cảm giác đau vùng thượng vị LAN XUYÊN RA SAU LƯNG?",
        source: "Giải phẫu học YDS Tập 2 – Bài 25, mục 3.4.1 (tr. 59)",
        options: [
          "Tụy nằm sát thành bụng sau trước cột sống và các sợi giao cảm/cảm giác của tụy thông nối với các nhánh thần kinh cảm giác ở thành bụng sau",
          "Do đuôi tụy dính trực tiếp vào dây thần kinh hoành phải",
          "Do ống tụy phụ đổ vào tủy gai thắt lưng",
          "Do tụy là tạng nằm hoàn toàn trong phúc mạc di động"
        ],
        answer: 0,
        explain: "Tập 2 tr. 59: Sự thông nối giữa các nhánh cảm giác của tụy (đi theo TK tạng tới đám rối tạng) với các nhánh thần kinh cảm giác ở thành bụng sau khiến bệnh nhân có cảm giác đau lan ra sau lưng."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân tích tĩnh mạch",
        q: "Quan sát liên quan mạch máu vùng cổ tụy và thân tụy: nếu một khối u vùng CỔ TỤY phát triển ra phía sau, mạch máu lớn nào bị chèn ép đầu tiên và tạo hội chứng gì?",
        source: "Giải phẫu học YDS Tập 2 – Bài 25, mục 1.2 (tr. 54) & TN 2024 Câu 441",
        options: [
          "Đoạn hợp lưu tạo tĩnh mạch cửa (TM lách + TM MTTT) nằm ngay sau cổ tụy → gây tăng áp lực tĩnh mạch cửa",
          "Tĩnh mạch gan giữa → gây suy tim phải",
          "Động mạch mạc treo tràng dưới → gây thiếu máu đại tràng sigma",
          "Động mạch chủ ngực → gây nuốt nghẹn"
        ],
        answer: 0,
        explain: "Tập 2 tr. 54: Mặt trước cổ tụy có bó mạch MTTT đi phía sau (ấn thành khuyết tụy), nhưng phía sau cổ tụy liên quan trực tiếp với chỗ hợp lưu của TM lách và TM MTTT tạo thành ĐOẠN ĐẦU TĨNH MẠCH CỬA."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Xuất huyết tiêu hóa",
        q: "Bệnh nhân nôn ra máu và đi cầu phân đen được chẩn đoán xuất huyết tiêu hóa TRÊN. Dựa vào giải phẫu ống tiêu hóa, mốc giải phẫu phân chia ranh giới xuất huyết tiêu hóa trên và dưới là vị trí nào?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 1145 (tr. 176)",
        options: [
          "Góc tá–hỗng tràng trở lên (gồm thực quản, dạ dày, tá tràng)",
          "Từ lỗ môn vị dạ dày trở lên",
          "Từ góc hồi–manh tràng trở lên",
          "Chỉ từ tâm vị trở lên"
        ],
        answer: 0,
        explain: "Đáp án 1145D (tr. 213): Xuất huyết tiêu hóa trên là chảy máu ở đoạn ống tiêu hóa từ GÓC TÁ–HỖNG TRÀNG (được treo bởi cơ Treitz) trở lên."
      }
    ]
  },

  // ========================================================================
  // BÀI 4: TIM – HÌNH THỂ NGOÀI, CÁC BUỒNG TIM & ĐỐI CHIẾU THÀNH NGỰC
  // Base (12): L1=4, L2=5, L3=3 | Extra (12): L1=2, L2=4, L3=6 -> Tổng: L1=6, L2=9, L3=9
  // ========================================================================
  4: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Vị trí)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Hình thể)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Hình thể trong)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Liên quan)" },
      { level: 2, ksa: "S", ksaLabel: "S1: Định danh buồng" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Sinh lý–GP)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Rãnh tim)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Bờ tim)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Xoang vành)" },
      { level: 3, ksa: "K", ksaLabel: "K3: Vận dụng van" },
      { level: 3, ksa: "S", ksaLabel: "S2: Khám ổ van tim" },
      { level: 3, ksa: "A", ksaLabel: "A2: Chẩn đoán lâm sàng" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Khi khám tim bình thường, bác sĩ sờ thấy mỏm tim đập ở vị trí nào trên thành ngực?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 118 (tr. 18) & Câu 144 (tr. 22)",
        options: [
          "Khoang liên sườn 4 hoặc 5 trên đường trung đòn trái",
          "Khoang liên sườn 3 trên đường trung đòn trái",
          "Khoang liên sườn 5 cạnh bờ trái xương ức",
          "Ngang mỏm mũi kiếm trên đường trung đòn trái"
        ],
        answer: 0,
        explain: "Đáp án 144B & Tập 1 tr. 74: Đỉnh tim (mỏm tim) nằm sau thành ngực ở vị trí khoang liên sườn 4 hoặc 5 trên đường trung đòn trái."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Nơi gặp nhau giữa rãnh gian thất trước và rãnh gian thất sau ở bên phải đỉnh tim được gọi là gì?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 119 (tr. 18)",
        options: [
          "Khuyết đỉnh tim",
          "Rãnh tận cùng",
          "Xoang ngang",
          "Giao điểm (crux)"
        ],
        answer: 0,
        explain: "Đáp án 119A & Tập 1 tr. 74: Bên phải đỉnh tim có khuyết đỉnh tim – nơi gặp nhau của rãnh gian thất trước và rãnh gian thất sau."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Mặt tim)",
        q: "Mặt sau của tim (theo câu hỏi tự lượng giá của Bài 8) còn được gọi là gì?",
        source: "Giải phẫu học YDS Tập 1 – Câu tự lượng giá 2 (tr. 85)",
        options: [
          "Đáy tim",
          "Mặt hoành",
          "Mặt phổi",
          "Mặt ức sườn"
        ],
        answer: 0,
        explain: "Tập 1 tr. 73 & 85: Đáy tim hướng ra sau và hơi sang phải (tạo chủ yếu bởi tâm nhĩ trái và phần sau tâm nhĩ phải), nên mặt sau của tim chính là đáy tim."
      },
      {
        level: 2, ksa: "S", ksaLabel: "S1: Định danh vách",
        q: "Mô tả nào sau đây ĐÚNG về hố bầu dục ở vách gian nhĩ?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 114 (tr. 17) & Tập 1 tr. 75",
        options: [
          "Nằm ở mặt phải vách gian nhĩ (thuộc tâm nhĩ phải), có viền hố bầu dục ở phía trước và trên",
          "Nằm ở mặt trái vách gian nhĩ, có van tĩnh mạch chủ dưới đậy",
          "Là khe nối thông vách gian thất phần màng",
          "Chỉ gặp ở người trưởng thành bị suy tim phải"
        ],
        answer: 0,
        explain: "Đáp án 114A & Tập 1 tr. 75: Mặt bên phải vách gian nhĩ (trong tâm nhĩ phải) có hố bầu dục; khi vách gian nhĩ khiếm khuyết sẽ tạo tật thông liên nhĩ."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Buồng tim)",
        q: "Trong các mô tả về các buồng tim sau đây, chi tiết nào là SAI?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 112 (tr. 17)",
        options: [
          "Thành tâm thất phải dày hơn thành tâm thất trái",
          "Đổ vào tâm nhĩ trái có bốn tĩnh mạch phổi",
          "Tâm nhĩ thông với tâm thất cùng bên qua lỗ nhĩ–thất",
          "Van nhĩ–thất phải còn gọi là van ba lá"
        ],
        answer: 0,
        explain: "Đáp án 112B & Tập 1 tr. 76: Thành tâm thất trái dày hơn (khoảng gấp 3 lần) tâm thất phải vì thất trái phải tạo áp suất cao để đẩy máu vào động mạch chủ đi nuôi toàn cơ thể."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Màng tim)",
        q: "Đặc điểm nào sau đây ĐÚNG với lá thành ngoại tâm mạc thanh mạc?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 136 (tr. 21)",
        options: [
          "Lót mặt trong ngoại tâm mạc sợi, cùng tim nằm trong trung thất giữa",
          "Nằm ngay trên bề mặt cơ tim và các động mạch vành",
          "Chỗ dày lên tạo dây chằng ức–ngoại tâm mạc",
          "Là khoang chứa tĩnh mạch chủ trên"
        ],
        answer: 0,
        explain: "Đáp án 136A (tr. 191): Ngoại tâm mạc sợi nối tim với cơ hoành/xương ức; lá tạng ngoại tâm mạc thanh mạc áp sát bề mặt cơ tim và mạch vành; lá thành lót mặt trong ngoại tâm mạc sợi."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân biệt mặt/bờ",
        q: "Chi tiết giải phẫu nào sau đây có thể nhìn thấy được ở cả mặt hoành lẫn mặt phổi của tim?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 127 (tr. 19)",
        options: [
          "Rãnh nhĩ thất (rãnh vành)",
          "Rãnh gian thất sau",
          "Xoang tĩnh mạch vành",
          "Khuyết đỉnh tim"
        ],
        answer: 0,
        explain: "Đáp án 127A: Rãnh nhĩ thất (rãnh vành) chạy vòng quanh chu vi ranh giới giữa phần tâm nhĩ và phần tâm thất nên nhìn thấy ở mặt ức sườn, mặt phổi và mặt hoành."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Khám van tim",
        q: "Khi khám tim cho một bệnh nhân, bác sĩ nghe thấy âm thổi bất thường rõ nhất ở MỎM MŨI KIẾM XƯƠNG ỨC. Âm thổi này xuất phát từ van nào?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 129 (tr. 19–20)",
        options: [
          "Van nhĩ thất phải (van ba lá)",
          "Van nhĩ thất trái (van hai lá)",
          "Van động mạch phổi",
          "Van động mạch chủ"
        ],
        answer: 0,
        explain: "Đáp án 129B (tr. 191) & Tập 1 tr. 84: Lỗ nhĩ–thất phải (van 3 lá) chiếu ở 1/3 dưới xương ức và nghe rõ nhất ở mỏm mũi kiếm xương ức (góc dưới phải của diện tim)."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Giải thích bệnh học",
        q: "Trong bệnh lý HẸP VAN HAI LÁ, chuỗi hậu quả huyết động nào xảy ra theo đúng trình tự giải phẫu các buồng tim?",
        source: "Giải phẫu học YDS Tập 1 – Bài 8, Bệnh van tim (tr. 77)",
        options: [
          "Tâm nhĩ trái ứ máu và giãn to (có thể đè thực quản) → ứ máu tĩnh mạch phổi → ứ máu ở phổi",
          "Tâm thất trái giãn to trước tiên → ứ máu ở tĩnh mạch chủ dưới",
          "Tâm nhĩ phải đẩy máu ngược qua lỗ bầu dục vào nhĩ trái",
          "Van động mạch chủ đóng không kín ở thì tâm trương"
        ],
        answer: 0,
        explain: "Tập 1 tr. 77: Khi hẹp van hai lá, ở thì tâm trương máu từ nhĩ trái xuống thất trái bị cản trở → máu ứ ở nhĩ trái (làm nhĩ trái to ra, đè thực quản) → kéo theo ứ máu ở 4 tĩnh mạch phổi và phổi."
      },
      {
        level: 3, ksa: "K", ksaLabel: "K3: Vận dụng diện tim",
        q: "Bốn góc của hình chiếu diện tim lên thành ngực gồm những mốc nào sau đây?",
        source: "Giải phẫu học YDS Tập 1 – Bài 8, mục 5.1 (tr. 84)",
        options: [
          "Trên trái: KLS 2 cách bờ trái ức 1 cm; Trên phải: KLS 2 cách bờ phải ức 1 cm; Dưới trái: KLS 5 trung đòn trái; Dưới phải: KLS 5 sát bờ phải ức",
          "Trên trái: KLS 1 đường nách trước; Dưới trái: KLS 7 trung đòn trái",
          "Trên phải: khớp ức đòn; Dưới phải: KLS 6 bờ trái ức",
          "Diện tim chỉ chiếu bên trái xương ức từ KLS 3 đến KLS 6"
        ],
        answer: 0,
        explain: "Tập 1 tr. 84: Hình chiếu diện tim là một hình tứ giác với 4 góc đúng như mô tả ở đáp án A (Góc dưới trái = đỉnh tim, góc dưới phải = sát bờ phải ức KLS 5)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân biệt dây chằng",
        q: "Khi tràn dịch màng ngoài tim lượng nhiều (ép tim cấp), dịch tích tụ trong khoang giải phẫu nào của tim?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 1125 (tr. 172 & Đáp án tr. 213)",
        options: [
          "Khoang màng ngoài tim nằm giữa lá thành và lá tạng của ngoại tâm mạc thanh mạc",
          "Khoang nằm giữa ngoại tâm mạc sợi và thành sau xương ức",
          "Khoang nằm giữa cơ tim và nội tâm mạc",
          "Khoang nằm giữa lá tạng và lớp cơ tim"
        ],
        answer: 0,
        explain: "Đáp án 1125B (tr. 213) & Tập 1 tr. 77: Khoang màng ngoài tim là khoang ảo nằm giữa lá thành và lá tạng của ngoại tâm mạc thanh mạc."
      },
      {
        level: 3, ksa: "K", ksaLabel: "K3: Suy tim phải",
        q: "Tại sao khi bị suy tim phải, máu ứ lại ở tâm thất phải và tâm nhĩ phải sẽ dễ dội ngược làm nổi tĩnh mạch cổ?",
        source: "Giải phẫu học YDS Tập 1 – Bài 8, mục 2.1 Tâm nhĩ phải (tr. 75)",
        options: [
          "Vì lỗ tĩnh mạch chủ trên đổ vào tâm nhĩ phải KHÔNG có van",
          "Vì tĩnh mạch chủ trên không liên thông với tâm nhĩ phải",
          "Vì van ba lá luôn mở suốt cả thì tâm thu và tâm trương",
          "Vì tĩnh mạch phổi đổ trực tiếp vào tĩnh mạch chủ trên"
        ],
        answer: 0,
        explain: "Tập 1 tr. 75: Lỗ tĩnh mạch chủ dưới có van TMCD, lỗ xoang vành có van, nhưng lỗ tĩnh mạch chủ trên KHÔNG có van → khi suy tim phải, máu dễ dội ngược lên các tĩnh mạch vùng cổ."
      }
    ]
  },

  // ========================================================================
  // BÀI 5: TIM – HỆ MẠCH VÀNH & HỆ DẪN TRUYỀN TỰ ĐỘNG
  // Base (12): L1=2, L2=5, L3=5 | Extra (12): L1=4, L2=4, L3=4 -> Tổng: L1=6, L2=9, L3=9
  // ========================================================================
  5: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhánh ĐMV)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhánh mũ)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cấp máu nút)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Lớp mạch)" },
      { level: 2, ksa: "S", ksaLabel: "S1: Định hướng rãnh" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Vách tim)" },
      { level: 3, ksa: "A", ksaLabel: "A2: Biện luận NMCT" },
      { level: 3, ksa: "K", ksaLabel: "K3: Ưu thế trái" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Dẫn truyền)" },
      { level: 3, ksa: "S", ksaLabel: "S1: Phân biệt tĩnh mạch" },
      { level: 3, ksa: "A", ksaLabel: "A2: Chẩn đoán tắc ĐMV" },
      { level: 3, ksa: "A", ksaLabel: "A2: Định khu mỏm tim" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Xoang tĩnh mạch vành nằm ở vị trí nào và đổ vào buồng tim nào?",
        source: "Giải phẫu học YDS Tập 1 – Bài 8, mục 4.2 (tr. 82) & TN 2024 Câu 135",
        options: [
          "Nằm trong rãnh vành ở mặt hoành của tim (dài 2–3 cm) và đổ vào tâm nhĩ phải",
          "Nằm trong rãnh gian thất trước và đổ vào tâm nhĩ trái",
          "Nằm ở đáy tim và đổ vào tĩnh mạch chủ trên",
          "Nằm trong vách gian nhĩ và đổ vào tâm thất phải"
        ],
        answer: 0,
        explain: "Tập 1 tr. 82 & Đáp án 135C: Xoang vành dài 2–3 cm nằm trong rãnh vành ở mặt hoành, nhận hầu hết các tĩnh mạch tim (lớn, giữa, nhỏ, sau thất trái, chếch nhĩ trái) rồi đổ vào tâm nhĩ phải qua lỗ có van."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Dẫn truyền)",
        q: "Nút nhĩ–thất (nút Aschoff–Tawara) nằm ở vị trí giải phẫu nào?",
        source: "Giải phẫu học YDS Tập 1 – Bài 8, mục 4.4.1 (tr. 83)",
        options: [
          "Trong thành trong của tâm nhĩ phải, giữa lá trong van ba lá và lỗ xoang vành",
          "Ở thành phải tâm nhĩ phải, bên phải lỗ tĩnh mạch chủ trên",
          "Ở phần cơ của vách gian thất gần mỏm tim",
          "Trong thành tâm nhĩ trái gần lỗ tĩnh mạch phổi"
        ],
        answer: 0,
        explain: "Tập 1 tr. 83: Nút xoang nhĩ ở thành phải nhĩ phải bên phải lỗ TMCT; còn Nút nhĩ thất nằm ở thành trong tâm nhĩ phải, giữa lá trong van ba lá và lỗ xoang vành."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Dẫn truyền)",
        q: "Bó nhĩ–thất (Bó His) từ nút nhĩ–thất chạy dọc theo cấu trúc nào của vách gian thất trước khi chia thành trụ phải và trụ trái?",
        source: "Giải phẫu học YDS Tập 1 – Bài 8, mục 4.4.1 (tr. 83)",
        options: [
          "Bờ sau phần màng vách gian thất",
          "Mặt trước phần cơ vách gian thất gần mỏm tim",
          "Hố bầu dục của vách gian nhĩ",
          "Cơ nhú trước tâm thất trái"
        ],
        answer: 0,
        explain: "Tập 1 tr. 83: Bó nhĩ thất đi qua phần màng vách gian thất (chạy lên trên tới bờ sau phần màng), khi đi hết phần màng thì chia thành trụ phải và trụ trái."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhánh động mạch)",
        q: "Nhánh nào sau đây ĐƯỢC XEM LÀ nhánh chính (tận/chính) của động mạch vành phải?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 145 (tr. 22)",
        options: [
          "Nhánh bờ phải (hoặc nhánh gian thất sau)",
          "Nhánh nút xoang",
          "Nhánh nón",
          "Nhánh bờ trái"
        ],
        answer: 0,
        explain: "Đáp án 145D (tr. 192) & Tập 1 tr. 79: Nhánh bờ phải (kích thước lớn chạy suốt bờ phải tới mỏm tim) là một trong những nhánh chính quan trọng nhất của ĐMV phải (cùng nhánh gian thất sau ở vùng giao điểm)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cấp máu vành)",
        q: "Mô tả về hệ động mạch vành, câu nào sau đây SAI?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 125 (tr. 19) & Câu 105 (tr. 16)",
        options: [
          "Nhánh gian thất sau xuất phát từ động mạch vành trái (động mạch mũ) là trường hợp thường gặp nhất",
          "Động mạch vành phải xuất phát từ xoang phải động mạch chủ",
          "Động mạch gian thất trước cho các nhánh chéo cấp máu thành trước thất trái",
          "Động mạch mũ xuất phát từ thân chung động mạch vành trái"
        ],
        answer: 0,
        explain: "Đáp án 125B & 105D: Thông thường (ưu thế phải, ~80–90%), nhánh gian thất sau xuất phát từ ĐM vành PHẢI tại vùng giao điểm (chỉ trong ưu thế trái mới tách từ ĐM mũ)."
      },
      {
        level: 2, ksa: "S", ksaLabel: "S1: Liên quan giải phẫu",
        q: "Đặc điểm nào sau đây ĐÚNG với Tĩnh mạch tim giữa?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 135 (tr. 20) & Tập 1 tr. 82",
        options: [
          "Đi từ đỉnh tim trong rãnh gian thất sau, nằm đè lên nhánh ĐM gian thất sau và đổ vào xoang vành",
          "Đi cùng động mạch gian thất trước ở mặt ức sườn",
          "Đi trong rãnh nhĩ thất trái bên trái ĐM mũ",
          "Đổ trực tiếp vào tâm nhĩ trái"
        ],
        answer: 0,
        explain: "Đáp án 135C & Tập 1 tr. 82: Tĩnh mạch tim giữa đi trong rãnh gian thất sau, thường nằm đè lên nhánh động mạch gian thất sau và đổ vào xoang tĩnh mạch vành (A và B mô tả TM tim lớn)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Mạch tim)",
        q: "Trong một số trường hợp biến thể giải phẫu, nhánh nón động mạch không tách từ động mạch vành phải mà xuất phát trực tiếp từ xoang phải động mạch chủ – khi đó được gọi là gì?",
        source: "Giải phẫu học YDS Tập 1 – Bài 8, mục 4.1.1 (tr. 79)",
        options: [
          "Động mạch vành thứ ba",
          "Nhánh trung gian",
          "Nhánh bờ tù",
          "Nhánh vách sau"
        ],
        answer: 0,
        explain: "Tập 1 tr. 79: Nhánh nón có thể không xuất phát từ ĐMV phải mà xuất phát trực tiếp từ ĐMC và được gọi là động mạch vành thứ ba (nối với nhánh của ĐM gian thất trước)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Mạch trái)",
        q: "Khi thân chung động mạch vành trái chia ba thay vì chia đôi, nhánh nhỏ đi ra giữa động mạch gian thất trước và động mạch mũ được gọi là:",
        source: "Giải phẫu học YDS Tập 1 – Bài 8, mục 4.1.2.3 (tr. 80)",
        options: [
          "Nhánh trung gian",
          "Nhánh nón động mạch",
          "Nhánh giao điểm",
          "Nhánh bờ sắc"
        ],
        answer: 0,
        explain: "Tập 1 tr. 80: Một số trường hợp thân chung ĐMV trái cho các nhánh nhỏ đi giữa ĐM gian thất trước và ĐM mũ gọi là các nhánh trung gian."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Phân tích mạch vành",
        q: "Bệnh nhân nam 58 tuổi đau thắt ngực dữ dội, chụp mạch vành thấy tắc hoàn toàn ĐỘNG MẠCH MŨ ngay sau chỗ chia đôi của thân chung ĐMV trái. Nhánh nào bị thiếu máu cấp và vùng cơ tim nào tổn thương tương ứng?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 1132 (tr. 173)",
        options: [
          "Nhánh bờ trái (bờ tù) → thiếu máu thành ngoài (bờ trái) tâm thất trái",
          "Nhánh bờ phải → thiếu máu thất phải",
          "Nhánh vách trước → thiếu máu 2/3 trước vách gian thất",
          "Nhánh nón → thiếu máu phễu động mạch phổi"
        ],
        answer: 0,
        explain: "Đáp án 1132B (tr. 213) & Tập 1 tr. 80: ĐM mũ cho nhánh bờ trái (bờ tù) và các nhánh sau thất trái → tắc ĐM mũ gây thiếu máu nhánh bờ trái và thành ngoài/sau thất trái."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Biện luận rối loạn nhịp",
        q: "Bệnh nhân nữ 70 tuổi nhồi máu cơ tim kèm rối loạn nhịp tim chậm / block nhĩ thất nặng. Chụp mạch vành thấy tắc ĐMV phải ở vị trí SAU nhánh bờ phải (gần vùng giao điểm). Cấu trúc dẫn truyền nào bị tổn thương trực tiếp?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 1133 (tr. 173)",
        options: [
          "Nút nhĩ–thất",
          "Nút xoang nhĩ",
          "Mạng Purkinje ở mỏm tim",
          "Trụ trái bó His"
        ],
        answer: 0,
        explain: "Đáp án 1133C (tr. 213) & Tập 1 tr. 79: Nhánh nút xoang nhĩ tách ngay đoạn đầu ĐMV phải (trước nhánh bờ phải), còn nhánh nút nhĩ–thất tách ở vùng 'giao điểm' SAU khi ĐMV phải qua bờ phải → tắc sau nhánh bờ phải làm tổn thương nút nhĩ thất."
      },
      {
        level: 3, ksa: "K", ksaLabel: "K3: Vận dụng vách tim",
        q: "Nếu một bệnh nhân tắc đoạn gần ĐM gian thất trước (LAD) làm hoại tử 2/3 trước vách gian thất, vùng nào sau đây của hệ dẫn truyền đi sát vách gian thất có nguy cơ bị tổn thương theo?",
        source: "Giải phẫu học YDS Tập 1 – Hình 8.5 & 8.6 (tr. 81, 83)",
        options: [
          "Bó nhĩ–thất (phần nhánh phân chia) và hai trụ phải – trái trong vách gian thất",
          "Nút xoang nhĩ ở thành phải tâm nhĩ phải",
          "Hạch tim thuộc đám rối tim dưới cung ĐMC",
          "Van xoang tĩnh mạch vành"
        ],
        answer: 0,
        explain: "Tập 1 tr. 81, 83 (Hình 8.5 & 8.6): Các nhánh vách trước của ĐM gian thất trước nuôi 2/3 trước vách gian thất – nơi bó nhĩ thất và trụ phải/trụ trái đi xuyên qua (dễ gây block nhánh)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân biệt tĩnh mạch",
        q: "Trong hệ thống mạch tim, sự khác biệt quan trọng nhất giữa ĐỘNG MẠCH vành và TĨNH MẠCH tim giải thích nguy cơ nhồi máu cơ tim là gì?",
        source: "Giải phẫu học YDS Tập 1 – Bài 8, mục 4.1.3 & 4.2 (tr. 80, 82)",
        options: [
          "Các động mạch vành không có sự thông nối dồi dào (tắc là hoại tử cơ tim), trong khi các tĩnh mạch tim thông nối rất rộng rãi với nhau",
          "Động mạch vành thông nối dồi dào còn tĩnh mạch tim là mạch tận",
          "Tĩnh mạch tim chỉ đổ vào động mạch phổi",
          "Động mạch vành cấp máu vào thì tâm thu tối đa còn tĩnh mạch chỉ chảy lúc tâm trương"
        ],
        answer: 0,
        explain: "Tập 1 tr. 80 & 82: Các ĐM vành không có thông nối hoặc thông nối không dồi dào → tắc đột ngột gây hoại tử cơ tim (nhồi máu). Ngược lại, các tĩnh mạch tim thông nối với nhau rất rộng rãi."
      }
    ]
  },

  // ========================================================================
  // BÀI 6: ĐỘNG MẠCH CHỦ BỤNG & CÁC NHÁNH TẠNG – THẬN – CHẬU
  // Base (12): L1=4, L2=5, L3=3 | Extra (12): L1=2, L2=4, L3=6 -> Tổng: L1=6, L2=9, L3=9
  // ========================================================================
  6: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhánh ĐMC)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Mốc L4)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Mốc L5–S1)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Thân tạng)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Gan chung)" },
      { level: 2, ksa: "S", ksaLabel: "S1: Định vị nhánh" },
      { level: 2, ksa: "S", ksaLabel: "S1: Định vị nhánh" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cấp máu ruột)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (ĐM MTTD)" },
      { level: 3, ksa: "S", ksaLabel: "S1: Xác định nhánh tận" },
      { level: 3, ksa: "A", ksaLabel: "A2: Hội chứng Nutcracker" },
      { level: 3, ksa: "A", ksaLabel: "A2: Bẫy mạch sinh dục" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Cung mạch Riolan (hay động mạch bờ Drummond theo tác giả Anh–Mỹ) nối trực tiếp giữa hai động mạch nào dọc theo kết tràng ngang?",
        source: "Giải phẫu học YDS Tập 1 – Bài 9, mục 7.2.1 (tr. 95)",
        options: [
          "Nhánh lên của ĐM kết tràng trái (từ ĐM MTTD) và ĐM kết tràng giữa (từ ĐM MTTT)",
          "ĐM vị phải và ĐM vị trái",
          "ĐM tá tụy trên và ĐM tá tụy dưới",
          "ĐM trực tràng trên và ĐM trực tràng giữa"
        ],
        answer: 0,
        explain: "Tập 1 tr. 94–95: Nhánh lên của ĐM kết tràng trái (ĐM MTTD) nối với nhánh trái của ĐM kết tràng giữa (ĐM MTTT) tạo cung mạch Riolan đi dọc kết tràng ngang."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Mạch chậu)",
        q: "Động mạch nào sau đây thuộc thân SAU của động mạch chậu trong (không thuộc thân trước)?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 276–277 (tr. 41–42) & Tập 1 tr. 98",
        options: [
          "Động mạch chậu thắt lưng (cùng ĐM cùng bên và ĐM mông trên)",
          "Động mạch bịt",
          "Động mạch thẹn trong",
          "Động mạch tử cung"
        ],
        answer: 0,
        explain: "Đáp án 277D & Tập 1 tr. 98: Thân sau ĐM chậu trong cho 3 nhánh (ĐM chậu thắt lưng, các ĐM cùng bên, ĐM mông trên); thân trước cho 8 nhánh (bịt, rốn, bàng quang dưới, âm đạo, tử cung, trực tràng giữa, thẹn trong, mông dưới)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (ĐM lách)",
        q: "Động mạch nào sau đây là một nhánh bên xuất phát từ ĐỘNG MẠCH LÁCH?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 244, 250, 251 (tr. 37–38)",
        options: [
          "Động mạch vị mạc nối trái (cùng ĐM tụy lưng, ĐM tụy lớn, ĐM đuôi tụy, các ĐM vị ngắn)",
          "Động mạch vị mạc nối phải",
          "Động mạch tá tụy trên sau",
          "Động mạch tá tụy dưới"
        ],
        answer: 0,
        explain: "Đáp án 244B, 250A, 251A & Tập 1 tr. 92: ĐM lách cho các nhánh tụy (tụy lưng, tụy lớn, tụy dưới, đuôi tụy), 5–7 ĐM vị ngắn, ĐM vị mạc nối trái và ĐM đáy vị sau."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (ĐM thận)",
        q: "So sánh giải phẫu giữa động mạch thận phải và động mạch thận trái:",
        source: "Giải phẫu học YDS Tập 1 – Bài 9, mục 8 Động mạch thận (tr. 95)",
        options: [
          "ĐM thận phải dài hơn ĐM thận trái và đi phía sau tĩnh mạch chủ dưới",
          "ĐM thận trái dài hơn ĐM thận phải và đi phía trước tĩnh mạch chủ dưới",
          "ĐM thận tách ngang đốt sống L4 trên ĐM MTTD",
          "ĐM thận trái đi phía trước thân tụy"
        ],
        answer: 0,
        explain: "Tập 1 tr. 95: Nguyên ủy ĐM thận ngang L1 dưới ĐM MTTT. Do ĐMC bụng lệch trái nên ĐM thận phải dài hơn ĐM thận trái và đi sau tĩnh mạch chủ dưới, đầu tụy và D2 tá tràng."
      },
      {
        level: 2, ksa: "S", ksaLabel: "S1: Định hướng chậu",
        q: "Động mạch nào sau đây của động mạch chậu trong KHÔNG đi qua khuyết ngồi lớn để ra vùng mông (mà đi qua ống bịt)?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 278 (tr. 42) & Tập 1 tr. 98",
        options: [
          "Động mạch bịt",
          "Động mạch mông trên",
          "Động mạch mông dưới",
          "Động mạch thẹn trong"
        ],
        answer: 0,
        explain: "Đáp án 278C (tr. 195): ĐM mông trên, ĐM mông dưới và ĐM thẹn trong đều ra khỏi chậu hông qua khuyết ngồi lớn; riêng ĐM bịt chạy cùng TM và TK bịt qua ỐNG BỊT."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (ĐM chậu ngoài)",
        q: "Động mạch chậu ngoài trước khi chui qua dây chằng bẹn đổi tên thành động mạch đùi sẽ tách ra hai nhánh bên nào ở thành bụng trước dưới?",
        source: "Giải phẫu học YDS Tập 1 – Bài 9, mục 13 (tr. 99)",
        options: [
          "Động mạch thượng vị dưới và động mạch mũ chậu sâu",
          "Động mạch thượng vị nông và động mạch thẹn ngoài",
          "Động mạch tử cung và động mạch rốn",
          "Động mạch bịt và động mạch chậu thắt lưng"
        ],
        answer: 0,
        explain: "Tập 1 tr. 99: ĐM chậu ngoài cho hai nhánh bên là ĐM thượng vị dưới (lên nối với ĐM thượng vị trên của ĐM ngực trong, tạo nếp rốn ngoài) và ĐM mũ chậu sâu."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân tích liên quan",
        q: "Tại đoạn trước tá tràng của động mạch mạc treo tràng trên, mô tả liên quan nào sau đây là ĐÚNG?",
        source: "Giải phẫu học YDS Tập 1 – Bài 9, mục 6.2.2 (tr. 93)",
        options: [
          "Tĩnh mạch mạc treo tràng trên nằm bên PHẢI động mạch; phía sau là mỏm móc tụy và phần ngang (D3) tá tràng",
          "Tĩnh mạch mạc treo tràng trên nằm bên TRÁI động mạch",
          "Phía sau động mạch là dạ dày và thùy trái gan",
          "Động mạch đi sau ĐMC bụng"
        ],
        answer: 0,
        explain: "Tập 1 tr. 92–93: ĐM MTTT đi bên trái (hơi phía sau) TM MTTT trên suốt đường đi; ở đoạn trước tá tràng có mỏm móc tụy và D3 tá tràng ở phía sau, gây Hội chứng Von Rokitansky khi bị kẹp."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Chẩn đoán phẫu thuật",
        q: "Khi thực hiện phẫu thuật nối vị–tràng xuyên qua mạc treo kết tràng ngang, phẫu thuật viên cần chọc thủng vào vùng ít mạch máu nằm giữa cấu trúc nào để tránh chảy máu ồ ạt?",
        source: "Giải phẫu học YDS Tập 1 – Bài 9, mục 7.2.1 Ứng dụng (tr. 95)",
        options: [
          "Khoảng vô mạch nằm giữa cung mạch Riolan (ở sát bờ ruột) và rễ mạc treo kết tràng ngang",
          "Ngay sát bờ động mạch thân tạng",
          "Xuyên qua tĩnh mạch cửa ở cửa gan",
          "Ngay giữa thân động mạch mạc treo tràng trên"
        ],
        answer: 0,
        explain: "Tập 1 tr. 95 (Ứng dụng): Cung mạch Riolan nằm giữa hai lá mạc treo kết tràng ngang nhưng ở gần bờ ruột, vì vậy có một khoảng ít mạch máu giữa cung mạch và rễ mạc treo để chọc thủng phẫu thuật an toàn."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Bảo tồn sinh dục",
        q: "Vì sao khi thắt hoặc làm tổn thương ĐỘNG MẠCH TINH HOÀN ở đoạn phía trên trong ổ bụng thì tinh hoàn thường KHÔNG bị hoại tử, nhưng nếu tổn thương ở vùng THỪNG TINH thì nguy cơ hoại tử tinh hoàn lại rất cao?",
        source: "Giải phẫu học YDS Tập 1 – Bài 9, mục 9 (tr. 97)",
        options: [
          "Do tinh hoàn còn nhận máu từ nhánh cơ bìu của ĐM thượng vị dưới (nhánh ĐM chậu ngoài) đi vào thừng tinh; nếu tổn thương ở thừng tinh sẽ cắt mất cả hai nguồn máu",
          "Do ĐM tinh hoàn có van một chiều ở ổ bụng",
          "Do ĐM thận phải tự động nối thẳng vào tinh hoàn",
          "Do tinh hoàn ở vùng bìu được nuôi hoàn toàn bởi ĐM mông dưới"
        ],
        answer: 0,
        explain: "Tập 1 tr. 97: Tinh hoàn được cấp máu bởi ĐM tinh hoàn VÀ nhánh cơ bìu (của ĐM thượng vị dưới). Tổn thương ĐM tinh hoàn trên bụng còn ĐM cơ bìu bù trừ; tổn thương ở thừng tinh cắt mất cả hai nhánh → hoại tử tinh hoàn."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân tích mạch chậu",
        q: "Ở nữ giới, khi phẫu thuật cắt tử cung cần thắt động mạch tử cung – lưu ý giải phẫu cực kỳ quan trọng về vị trí bắt chéo giữa ĐM tử cung và niệu quản là gì?",
        source: "Giải phẫu học YDS Tập 1 – Bài 9, mục 12.2 (tr. 98)",
        options: [
          "Động mạch tử cung chạy trong đáy dây chằng rộng, bắt chéo phía TRƯỚC và phía TRÊN niệu quản, cách cổ tử cung khoảng 1,5 cm",
          "Động mạch tử cung bắt chéo phía SAU niệu quản ở ngang mào chậu",
          "Động mạch tử cung nằm ở thành sau trực tràng",
          "Động mạch tử cung xuất phát trực tiếp từ động mạch đùi"
        ],
        answer: 0,
        explain: "Tập 1 tr. 98: 'Nước chảy dưới cầu' – ĐM tử cung bắt chéo phía trước và phía trên niệu quản, chỗ bắt chéo cách cổ tử cung khoảng 1,5 cm (cần tránh kẹp nhầm niệu quản khi thắt ĐM tử cung!)."
      },
      {
        level: 3, ksa: "K", ksaLabel: "K3: Vận dụng tuần hoàn",
        q: "Trong trường hợp tắc hẹp mạn tính ĐM mạc treo tràng trên ở đoạn gần gốc, dòng máu từ ĐM thân tạng và ĐM mạc treo tràng dưới có thể bù trừ cho ruột qua các cầu nối giải phẫu nào?",
        source: "Giải phẫu học YDS Tập 1 – Bài 9 (tr. 91, 93–95)",
        options: [
          "Cung mạch tá tụy (nối thân tạng ↔ MTTT) và Cung mạch Riolan / ĐM bờ Drummond (nối MTTT ↔ MTTD)",
          "Chỉ qua tĩnh mạch đơn và bán đơn",
          "Qua dây chằng tròn gan và dây chằng tĩnh mạch",
          "Qua các tĩnh mạch thắt lưng lên"
        ],
        answer: 0,
        explain: "Tập 1 tr. 91–95: Thân tạng ↔ MTTT thông nối qua cung ĐM tá tụy trước và sau; MTTT ↔ MTTD thông nối qua cung mạch Riolan (ĐM kết tràng giữa ↔ ĐM kết tràng trái)."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A1: Tắc mạch hồi kết tràng",
        q: "Các thành phần sau đây đều được cấp máu bởi ĐỘNG MẠCH HỒI KẾT TRÀNG (nhánh của ĐM mạc treo tràng trên), NGOẠI TRỪ:",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 262 (tr. 39)",
        options: [
          "Đại tràng ngang",
          "Đoạn cuối hồi tràng",
          "Manh tràng",
          "Ruột thừa"
        ],
        answer: 0,
        explain: "Đáp án 262D (tr. 195): ĐM hồi kết tràng cấp máu cho đoạn cuối hồi tràng, manh tràng, ruột thừa và đoạn đầu đại tràng lên. Đại tràng ngang được cấp máu bởi ĐM kết tràng giữa (2/3 phải) và ĐM kết tràng trái (1/3 trái)."
      }
    ]
  },

  // ========================================================================
  // BÀI 7: TĨNH MẠCH CHỦ DƯỚI & HỆ TĨNH MẠCH CỬA – VÒNG NỐI CỬA CHỦ
  // Base (12): L1=3, L2=5, L3=4 | Extra (12): L1=3, L2=4, L3=5 -> Tổng: L1=6, L2=9, L3=9
  // ========================================================================
  7: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (TMC)" },
      { level: 2, ksa: "S", ksaLabel: "S1: Định hướng dẫn lưu" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Áp lực cửa)" },
      { level: 2, ksa: "S", ksaLabel: "S1: Tứ giác tĩnh mạch" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Hệ cửa–chủ)" },
      { level: 3, ksa: "A", ksaLabel: "A2: Xuất huyết thực quản" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Trực tràng)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (TM dạ dày)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Dòng cửa)" },
      { level: 3, ksa: "K", ksaLabel: "K3: Di tích phôi thai" },
      { level: 3, ksa: "A", ksaLabel: "A2: Biện luận xơ gan" },
      { level: 3, ksa: "K", ksaLabel: "K3: Nguyên ủy TMCD" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (TM gan)",
        q: "Máu sau khi đi qua các xoang tiểu thùy gan sẽ tập trung về các tĩnh mạch nào để đổ trực tiếp vào tĩnh mạch chủ dưới ngay dưới cơ hoành?",
        source: "Giải phẫu học YDS Tập 2 – Bài 24, mục 5.3 (tr. 50) & Tập 1 tr. 100",
        options: [
          "Ba tĩnh mạch gan: tĩnh mạch gan phải, tĩnh mạch gan giữa và tĩnh mạch gan trái",
          "Tĩnh mạch cửa phải và tĩnh mạch cửa trái",
          "Tĩnh mạch lách và tĩnh mạch thận phải",
          "Tĩnh mạch đơn và tĩnh mạch bán đơn"
        ],
        answer: 0,
        explain: "Tập 2 tr. 50: Ba tĩnh mạch gan (phải, giữa, trái – còn gọi là các tĩnh mạch trên gan) dẫn máu từ các tiểu thùy gan đổ vào tĩnh mạch chủ dưới ngay dưới cơ hoành."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Di tích phôi thai)",
        q: "Dây chằng tĩnh mạch (nằm trong khe dây chằng tĩnh mạch ở mặt tạng gan) là di tích thoái hóa của cấu trúc phôi thai nào?",
        source: "Giải phẫu học YDS Tập 2 – Bài 24, mục 2.8 (tr. 45)",
        options: [
          "Ống tĩnh mạch nối hệ tĩnh mạch cửa (nhánh trái) với tĩnh mạch chủ dưới lúc phôi thai",
          "Tĩnh mạch rốn dẫn máu từ nhau thai về gan",
          "Động mạch rốn ở thành bụng trước",
          "Ống động mạch nối ĐM phổi và ĐMC"
        ],
        answer: 0,
        explain: "Tập 2 tr. 45: Dây chằng tĩnh mạch (ligamentum venosum) là di tích của ống tĩnh mạch (ductus venosus) nối từ hệ tĩnh mạch cửa và tĩnh mạch rốn đến tĩnh mạch chủ dưới lúc phôi thai."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Vòng nối)",
        q: "Kể tên 3 vị trí thông nối chính giữa hệ Tĩnh mạch cửa và hệ Tĩnh mạch chủ được đề cập trong giáo trình YDS?",
        source: "Giải phẫu học YDS Tập 1 – Bài 9, mục 3 (tr. 100) & Tập 2 – Bài 24 (tr. 49)",
        options: [
          "Đoạn dưới thực quản, ống hậu môn–trực tràng và vùng quanh rốn (cộng thêm vùng nối sau phúc mạc)",
          "Vùng tâm vị, vùng đáy túi mật và rốn thận",
          "Tam giác Calot, khoang Morison và ngách gian xích-ma",
          "Trung thất trước, khoang màng tim và tĩnh mạch cảnh trong"
        ],
        answer: 0,
        explain: "Tập 1 tr. 100 & Tập 2 tr. 49: Ba vị trí thông nối kinh điển là lớp dưới niêm mạc đoạn dưới thực quản, lớp dưới niêm mạc ống hậu môn–trực tràng và vùng quanh rốn (cùng vùng nối qua phúc mạc thành sau)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cuống gan)",
        q: "Trong các phát biểu sau về các cấu trúc mạch máu vùng gan và cuống gan, câu nào ĐÚNG?",
        source: "Trắc nghiệm Giải phẫu học YDS 2024 – Câu 258 (tr. 39)",
        options: [
          "Động mạch gan riêng có một nhánh bên cho dạ dày là động mạch vị phải",
          "Động mạch gan riêng xuất phát trực tiếp từ động mạch vị tá tràng",
          "Tĩnh mạch cửa, động mạch gan riêng và tĩnh mạch gan tạo thành cuống gan",
          "Ống tĩnh mạch sau khi tắc sẽ trở thành dây chằng tròn gan"
        ],
        answer: 0,
        explain: "Đáp án 258B: A sai (từ ĐM gan chung); C sai (cuống gan gồm TM cửa + ĐM gan riêng + OMC/ống gan chung, KHÔNG có TM gan); D sai (ống tĩnh mạch thành dây chằng tĩnh mạch)."
      },
      {
        level: 2, ksa: "S", ksaLabel: "S1: Liên quan TMCD",
        q: "Những tĩnh mạch nào sau đây đổ máu trực tiếp vào TĨNH MẠCH CHỦ DƯỚI?",
        source: "Giải phẫu học YDS Tập 1 – Bài 9, mục 2 (tr. 100)",
        options: [
          "Các TM gan, các TM thận, các TM hoành dưới, các TM thắt lưng và TM tinh hoàn/buồng trứng (phải)",
          "Tĩnh mạch lách, tĩnh mạch mạc treo tràng trên và tĩnh mạch mạc treo tràng dưới",
          "Tĩnh mạch vị trái và tĩnh mạch vị phải",
          "Tĩnh mạch đơn và tĩnh mạch bán đơn"
        ],
        answer: 0,
        explain: "Tập 1 tr. 100: Tĩnh mạch chủ dưới nhận máu từ các TM hoành dưới, TM thắt lưng, TM thắt lưng lên, TM gan, TM thận, TM tinh hoàn/buồng trứng phải (và trái theo sách, thực tế bên trái đổ vào TM thận trái)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (TM cửa vs TM chủ)",
        q: "Khác biệt cơ bản về mặt giải phẫu – chức năng giữa Tĩnh mạch cửa và các Tĩnh mạch chủ là gì?",
        source: "Giải phẫu học YDS Tập 1 – Bài 9, mục 3 (tr. 100) & Tập 2 tr. 49",
        options: [
          "TM cửa là tĩnh mạch chức năng không có van, dẫn máu từ lưới mao mạch ống tiêu hóa/lách về lưới mao mạch thứ hai ở gan để lọc độc trước khi về TM chủ dưới",
          "TM cửa mang máu giàu oxy từ phổi về tim trái",
          "TM cửa đổ thẳng vào tâm nhĩ phải không qua gan",
          "TM cửa nằm trong trung thất sau sát cột sống ngực"
        ],
        answer: 0,
        explain: "Tập 1 tr. 100 & Tập 2 tr. 49: Tĩnh mạch cửa là tĩnh mạch chức năng đưa máu chứa chất dinh dưỡng và chất độc từ ống tiêu hóa, tụy, lách đến gan để chọn lọc, chuyển hóa trước khi đổ về TMCD."
      },
      {
        level: 2, ksa: "S", ksaLabel: "S1: Đối chiếu tĩnh mạch",
        q: "Tại vùng đầu tụy và bờ cong lớn dạ dày, Tĩnh mạch vị mạc nối trái và Tĩnh mạch vị mạc nối phải lần lượt đổ về đâu?",
        source: "Giải phẫu học YDS Tập 2 – Bài 21, mục 4.2 (tr. 19)",
        options: [
          "TM vị mạc nối trái → TM lách; TM vị mạc nối phải → TM mạc treo tràng trên",
          "Cả hai cùng đổ thẳng vào tĩnh mạch chủ dưới",
          "TM vị mạc nối trái → TM thận trái; TM vị mạc nối phải → TM gan phải",
          "Cả hai cùng đổ trực tiếp vào tĩnh mạch mạc treo tràng dưới"
        ],
        answer: 0,
        explain: "Tập 2 tr. 19: Các TM vị ngắn và TM vị mạc nối trái đổ về TM lách; TM vị mạc nối phải đổ về TM mạc treo tràng trên; còn TM vị phải và TM vị trái đổ thẳng vào TM cửa."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Chẩn đoán tuần hoàn bàng hệ",
        q: "Trên lâm sàng, bệnh nhân xơ gan có tuần hoàn bàng hệ nổi ngoằn ngoèo tỏa ra quanh rốn ('hình đầu sứa' – Caput medusae). Cơ chế thông nối giải phẫu của dấu hiệu này là gì?",
        source: "Giải phẫu học YDS Tập 1 – Bài 9 (tr. 100) & Tập 2 – Bài 24 (tr. 49)",
        options: [
          "Máu từ nhánh trái tĩnh mạch cửa trào ngược qua các tĩnh mạch cạnh rốn (dọc dây chằng tròn) nối với các tĩnh mạch dưới da vùng rốn thuộc hệ chủ",
          "Máu từ động mạch chủ bụng chảy ngược qua động mạch thượng vị dưới",
          "Giãn trực tiếp tĩnh mạch chủ dưới do tắc van ba lá",
          "Thông nối giữa tĩnh mạch thận trái và tĩnh mạch mạc treo tràng dưới"
        ],
        answer: 0,
        explain: "Tập 1 tr. 100 & Tập 2 tr. 49: Tại vùng quanh rốn, các tĩnh mạch cạnh rốn (theo dây chằng tròn đổ về nhánh trái TM cửa) nối với các TM nông thành bụng (hệ chủ) → tăng áp lực cửa làm giãn nổi rõ dưới da bụng."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân tích tĩnh mạch trực tràng",
        q: "Khi khám bệnh nhân xơ gan mất bù có triệu chứng đi tiêu ra máu tươi do trĩ (giãn búi tĩnh mạch trực tràng), máu đã đi ngược từ hệ tĩnh mạch cửa sang hệ tĩnh mạch chủ qua cặp tĩnh mạch nào?",
        source: "Giải phẫu học YDS Tập 1 – Bài 9 (tr. 100) & TN 2024 Câu 236, 256",
        options: [
          "Từ TM trực tràng trên (thuộc TM MTTD – hệ cửa) sang TM trực tràng giữa & dưới (thuộc TM chậu trong – hệ chủ)",
          "Từ TM trực tràng dưới sang TM thận trái",
          "Từ TM trực tràng giữa sang TM mạc treo tràng trên",
          "Từ TM gan giữa sang TM chậu ngoài"
        ],
        answer: 0,
        explain: "Đáp án 236C & 256D: TM trực tràng trên thuộc hệ cửa (về TM MTTD → TM lách → TM cửa); còn TM trực tràng giữa và dưới đổ về TM chậu trong → TM chủ dưới."
      },
      {
        level: 3, ksa: "K", ksaLabel: "K3: Vận dụng hệ đơn",
        q: "Tĩnh mạch đơn (azygos) và bán đơn đóng vai trò gì trong tuần hoàn tĩnh mạch chủ và vòng nối cửa–chủ?",
        source: "Giải phẫu học YDS Tập 1 – Bài 9, mục 1 & Hình 9.5 (tr. 99–101) & TN 2024 Câu 226",
        options: [
          "Là cầu nối giữa TM chủ trên và TM chủ dưới (đổ vào TM chủ trên sau khi vòng qua cuống phổi phải), đồng thời nhận máu vùng thực quản trong vòng nối cửa–chủ",
          "Đổ trực tiếp vào tĩnh mạch cửa ở sau cổ tụy",
          "Nằm bên trong dây chằng liềm gan",
          "Dẫn máu từ hai chi dưới đổ thẳng vào tâm nhĩ trái"
        ],
        answer: 0,
        explain: "Tập 1 tr. 99 & Đáp án 226B: Các tĩnh mạch đơn được xem là cầu nối giữa TM chủ trên và TM chủ dưới; TM đơn đi lên vòng phía trên cuống phổi phải đổ vào TM chủ trên và nhận máu TM thực quản."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Chẩn đoán phân biệt TM",
        q: "Trong một ca phẫu thuật cắt khối tá tụy (Whipple), phẫu thuật viên cần tìm cẩn thận đoạn tĩnh mạch lớn nằm ngay PHÍA SAU CỔ TỤY. Cấu trúc đó được hợp lưu từ hai tĩnh mạch nào?",
        source: "Giải phẫu học YDS Tập 2 – Bài 24 (tr. 49) & Bài 25 (tr. 54)",
        options: [
          "Tĩnh mạch mạc treo tràng trên và tĩnh mạch lách hợp lưu tạo thành tĩnh mạch cửa",
          "Tĩnh mạch chậu chung phải và trái tạo thành tĩnh mạch chủ dưới",
          "Tĩnh mạch gan phải và tĩnh mạch gan trái tạo thành xoang vành",
          "Tĩnh mạch thận trái và tĩnh mạch thượng thận tạo thành TM đơn"
        ],
        answer: 0,
        explain: "Tập 2 tr. 49 & 54: Tĩnh mạch cửa được hợp lưu từ TM mạc treo tràng trên và TM lách ở ngay phía sau cổ tụy (ngang mức đốt sống L1, phía trước TM chủ dưới)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân biệt tăng áp lực",
        q: "Một bệnh nhân bị huyết khối TĨNH MẠCH LÁCH đơn độc (do biến chứng viêm tụy mạn ở thân–đuôi tụy), trong khi nhu mô gan và thân chính tĩnh mạch cửa hoàn toàn bình thường. Tình trạng tăng áp lực khu trú (tăng áp cửa phân đoạn) sẽ dẫn đến biến chứng nào dễ gặp nhất?",
        source: "Giải phẫu học YDS Tập 2 – Bài 21 (tr. 19), Bài 25 (tr. 57) & Tập 1 tr. 100",
        options: [
          "Lách to và giãn các tĩnh mạch vị ngắn ở ĐÁY VỊ dạ dày (do các TM vị ngắn và vị mạc nối trái đổ về TM lách)",
          "Giãn các tĩnh mạch gan phải và gan giữa",
          "Giãn tĩnh mạch chậu ngoài và phù hai chi dưới",
          "Tăng áp lực động mạch phổi nguyên phát"
        ],
        answer: 0,
        explain: "Tập 2 tr. 19 & 57: TM lách chạy sát mặt sau thân tụy, nhận các TM vị ngắn (từ đáy vị) và TM vị mạc nối trái. Khi tắc riêng TM lách, máu ứ ngược ở lách (lách to) và giãn tĩnh mạch phình/đáy vị dạ dày."
      }
    ]
  }
};
