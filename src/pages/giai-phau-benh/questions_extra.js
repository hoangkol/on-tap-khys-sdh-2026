// ==========================================================================
// NGÂN HÀNG BỔ SUNG + CHUẨN HÓA KSA & MỨC 1–2–3 CHO 8 BÀI GIẢI PHẪU BỆNH
// Tổng cộng: 8 bài × 24 câu = 192 câu (Mỗi bài: 6 Mức 1 [25%], 9 Mức 2 [37,5%], 9 Mức 3 [37,5%])
// Phủ đủ 3 miền năng lực: Kiến thức (K) – Kỹ năng (S) – Thái độ (A)
// ==========================================================================

window.EXTRA_QUESTIONS = {
  // ========================================================================
  // BÀI 1: ĐẠI CƯƠNG, NGUYÊN NHÂN, CƠ CHẾ BỆNH SINH & ĐÁP ỨNG BÀO QUAN
  // ========================================================================
  1: {
    baseTags: [
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu cơ chế" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ lịch sử" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu sinh hóa" },
      { level: 2, ksa: "S", ksaLabel: "S2: Phân tích ngưỡng" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu pH" },
      { level: 2, ksa: "S", ksaLabel: "S2: Phân tích thuốc" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ mô học" },
      { level: 1, ksa: "S", ksaLabel: "S1: Chọn phương tiện" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu tự thực" },
      { level: 2, ksa: "S", ksaLabel: "S2: Phân loại thiếu oxy" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu DNA" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu dịch mã" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Nhớ nguyên nhân",
        q: "Nguyên nhân phổ biến nhất gây tổn thương tế bào được nêu trong Mục 2.1 của giáo trình Giải phẫu bệnh đại cương là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 49)",
        options: ["Thiếu oxy", "Tia xạ ion hóa", "Độc tố vi khuẩn", "Nhiệt độ thấp"],
        answer: 0,
        explain: "Trang 49 khẳng định: Thiếu oxy là nguyên nhân phổ biến nhất gây tổn thương tế bào do làm suy giảm phosphoryl hóa oxy hóa tại ty thể, giảm tổng hợp ATP."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Nhớ định danh ROS",
        q: "Ba gốc tự do oxy hóa (ROS) phổ biến nhất được liệt kê trong phần tổn thương màng tế bào là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 51)",
        options: [
          "Superoxide (O₂⁻), hydroxyl radical (•OH) và hydrogen peroxide (H₂O₂)",
          "Nitric oxide (NO), CO₂ và acid lactic",
          "Cyanide, carbon tetrachloride (CCl₄) và CO",
          "Lactate, pyruvate và α-ketoglutarate"
        ],
        answer: 0,
        explain: "Trang 51: Các ROS phổ biến gồm superoxide (O₂⁻), hydroxyl radical (•OH) và hydrogen peroxide (H₂O₂) gây peroxy hóa lipid màng, mất hoạt tính enzym và tổn thương DNA."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Nhớ bào quan",
        q: "Trong tế bào bình thường, ion Ca²⁺ nội bào được duy trì ở nồng độ cực thấp trong bào tương nhờ được cô lập chủ yếu ở đâu?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 51)",
        options: [
          "Trong lưới nội bào và ty thể",
          "Trong tiêu thể và bộ máy Golgi",
          "Trong nhân con và màng tế bào",
          "Tự do hoàn toàn trong bào tương"
        ],
        answer: 0,
        explain: "Trang 51: Ca²⁺ nội bào bình thường được duy trì rất thấp trong bào tương nhờ bơm Ca²⁺-ATPase cô lập chủ yếu trong lưới nội bào và ty thể."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng lâm sàng",
        q: "Một bệnh nhân điều trị động kinh bằng phenobarbital lâu ngày nay phải phối hợp thêm một thuốc chuyển hóa qua gan khác và gặp biểu hiện tăng độc tính chuyển hóa thuốc. Biến đổi siêu cấu trúc nào ở tế bào gan giải thích hiện tượng này?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 53)",
        options: [
          "Tăng sinh và giãn rộng lưới nội bào trơn (hệ enzym cytochrome P450) làm thay đổi dược động học và tăng độc tính khi phối hợp đa thuốc",
          "Phù lưới nội chất hạt kèm mất toàn bộ ribosome gây ngừng tổng hợp protein",
          "Lắng đọng thể Mallory-Denk phá hủy toàn bộ bộ xương tế bào gan",
          "Vỡ màng tiêu thể ồ ạt gây tự tiêu tế bào gan lan tỏa"
        ],
        answer: 0,
        explain: "Trang 53: Khi tiếp xúc thuốc như phenobarbital, lưới nội bào trơn tăng sinh và giãn tạo ống nhỏ để tăng khả năng khử độc qua cytochrome P450; đây là biểu hiện thích nghi nhưng làm thay đổi dược động học thuốc, tăng độc tính khi phối hợp đa thuốc."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Biện luận bệnh sinh",
        q: "Bệnh nhân ngộ độc cyanide cấp tính tử vong rất nhanh. Phân tích chuỗi biến đổi đầu tiên xảy ra bên trong tế bào của bệnh nhân theo cơ chế bệnh sinh ở trang 51:",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 51)",
        options: [
          "Cyanide ức chế trực tiếp enzym trong chuỗi hô hấp ty thể → ngừng sản xuất ATP ngay cả khi oxy vẫn còn đủ trong máu",
          "Cyanide gắn trực tiếp lên hemoglobin ngăn vận chuyển oxy ở phổi",
          "Cyanide tạo liên kết cộng hóa trị giữa hai base kề nhau trên DNA giống tia UV",
          "Cyanide kích hoạt trực tiếp thụ thể Fas làm đứt DNA thành đoạn 180 bp"
        ],
        answer: 0,
        explain: "Trang 51: Cyanide là tác nhân gây độc trực tiếp cho ty thể bằng cách ức chế các enzym trong chuỗi hô hấp tế bào và làm ngừng sản xuất ATP, dẫn đến cạn kiệt ATP nhanh chóng."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích ca bệnh",
        q: "Một bệnh nhân nhập viện sau uống paracetamol liều rất cao (nhiễm độc thuốc chuyển hóa không hoàn toàn tại gan). Tại sao tổn thương lại xảy ra dữ dội tại nhu mô gan?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 49, 51, 67)",
        options: [
          "Chuyển hóa không hoàn toàn tại gan tạo ra nhiều gốc tự do gây peroxy hóa lipid màng và hoại tử tế bào gan",
          "Paracetamol chỉ gây phì đại cơ tim thông qua yếu tố IGF-1",
          "Paracetamol ức chế hệ thống miễn dịch gây bệnh lý tự miễn lupus",
          "Paracetamol gây kết tinh nước nội bào tương tự tổn thương do nhiệt độ thấp"
        ],
        answer: 0,
        explain: "Trang 49 & 67: Paracetamol liều cao chuyển hóa không hoàn toàn tại gan tạo các gốc tự do (ROS), gây peroxy hóa lipid màng và hoại tử tế bào gan (tập trung vùng trung tâm tiểu thùy)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích cơ chế",
        q: "Trong trường hợp tế bào thần kinh đệm ở bệnh nhân Alzheimer xuất hiện các đám rối sợi thần kinh (neurofibrillary tangles), cấu trúc bào quan nào đang bị rối loạn nguyên phát?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 54)",
        options: [
          "Bộ xương tế bào (vi sợi actin, vi ống, sợi trung gian) do tích tụ protein Tau phosphoryl hóa quá mức",
          "Màng tiêu thể do thiếu hụt enzym tiêu hủy glycogen GAA",
          "Lưới nội bào trơn do phơi nhiễm quá mức với phenobarbital",
          "Màng tế bào do bơm Na⁺/K⁺-ATPase ngừng hoạt động tạm thời"
        ],
        answer: 0,
        explain: "Trang 54: Tổn thương bộ xương tế bào gây tích tụ protein biến tính như Thể Mallory-Denk (gan rượu/NAFLD) và Neurofibrillary tangles (protein Tau phosphoryl hóa quá mức trong Alzheimer)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Đánh giá lâm sàng",
        q: "Một bệnh nhân bỏng điện nặng có biểu hiện rối loạn nhịp tim và hoại tử sâu tại vị trí dòng điện đi qua. Cơ chế nào của tia điện và dòng điện được nêu trong giáo trình?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 49)",
        options: [
          "Làm biến đổi điện thế màng tế bào → rối loạn dẫn truyền thần kinh – cơ và gây tổn thương trực tiếp mô tại vị trí tiếp xúc",
          "Chỉ làm kết tinh nước nội bào tại mô da tiếp xúc",
          "Chỉ ức chế chọn lọc tế bào đang phân chia nhanh tại tủy xương",
          "Tạo kháng thể tự miễn tấn công vào cầu nối gian bào"
        ],
        answer: 0,
        explain: "Trang 49: Tia điện và dòng điện gây biến đổi điện thế màng tế bào dẫn đến rối loạn dẫn truyền thần kinh – cơ hoặc tổn thương trực tiếp mô tại vị trí tiếp xúc."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Biện luận phân tử",
        q: "Trong phản ứng của tế bào với stress, nếu tế bào bị tổn thương DNA nặng vượt quá khả năng sửa chữa nhưng lại bị mất chức năng protein p53, kết cục nguy hiểm nhất về lâu dài là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 53, 55)",
        options: [
          "Tế bào không kích hoạt được chết theo chương trình mà tiếp tục phân chia mang theo đột biến → loạn sản, bướu tân sinh, ung thư",
          "Tế bào tự động chuyển hóa thành tế bào sừng bình thường để bảo vệ mô",
          "Tế bào rơi vào trạng thái phì đại sinh lý giống cơ vân vận động viên",
          "Tế bào luôn đi vào tự thực bào dẫn đến teo cơ vân đơn thuần"
        ],
        answer: 0,
        explain: "Trang 53 & 55: Protein p53 là 'người canh gác của bộ gen'. Tổn thương DNA không thể sửa chữa nếu không được p53 loại bỏ bằng apoptosis hoặc lão hóa sẽ tích lũy đột biến → loạn sản, bướu tân sinh, ung thư."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Thái độ xử trí",
        q: "Khi quan sát dưới kính hiển vi điện tử một mẫu sinh thiết gan thấy có phì đại/giãn lưới nội bào trơn và tăng số lượng ty thể nhưng màng tế bào, màng ty thể và nhân vẫn hoàn toàn nguyên vẹn, bác sĩ giải phẫu bệnh nên nhận định và tư vấn lâm sàng hướng nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 53–55)",
        options: [
          "Đây là các đáp ứng thích nghi / tổn thương giai đoạn sớm còn khả năng hồi phục, cần rà soát loại bỏ nguyên nhân (như thuốc chuyển hóa qua gan) kịp thời để tránh tiến triển không hồi phục",
          "Đây là hoại tử không hồi phục chắc chắn, bệnh nhân không còn khả năng phục hồi mô gan",
          "Đây là biểu hiện khẳng định carcinom thoái sản tế bào gan cần phẫu thuật cắt gan ngay",
          "Đây là dấu hiệu khẳng định bệnh dự trữ glycogen bẩm sinh type II"
        ],
        answer: 0,
        explain: "Trang 53–55: Đánh giá biến đổi bào quan giúp phân biệt sớm tổn thương còn hồi phục với không hồi phục; giãn lưới nội bào trơn và tăng sinh ty thể khi màng còn nguyên vẹn là đáp ứng thích nghi/sớm, cần rà soát thuốc/độc chất kịp thời."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Thái độ dự phòng",
        q: "Một bệnh nhân mắc bệnh tự miễn (lupus ban đỏ hệ thống) đến khám với bác sĩ. Nhận thức đúng của người thầy thuốc về bản chất nguyên nhân gây tổn thương mô ở bệnh nhân này là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 50)",
        options: [
          "Tổn thương mô phát sinh do hệ miễn dịch hoạt hóa bất thường (phản ứng quá mẫn và tự miễn nhận diện nhầm tế bào tự thân), cần kiểm soát điều hòa miễn dịch thay vì chỉ dùng kháng sinh",
          "Hoàn toàn do vi khuẩn xâm nhập gây hoại tử bã đậu nên chỉ cần kháng sinh phổ rộng",
          "Là phản ứng thích nghi sinh lý hoàn toàn vô hại không cần theo dõi tổn thương cơ quan",
          "Là dị tật bất sản bẩm sinh từ thời kỳ bào thai không thể can thiệp"
        ],
        answer: 0,
        explain: "Trang 50: Rối loạn miễn dịch (quá mẫn như lupus ban đỏ hệ thống hoặc tự miễn dịch) làm hệ miễn dịch tấn công mô tự thân gây tổn thương mạn tính (thậm chí hoại tử fibrinoid thành mạch nếu viêm mạch miễn dịch)."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Thái độ nghiên cứu",
        q: "Tại sao trong thực hành y học chính xác hiện đại, việc xác định rõ ranh giới giữa tổn thương hồi phục và không hồi phục ở cấp độ bào quan (ty thể, màng tế bào, tiêu thể) có ý nghĩa quyết định đối với can thiệp điều trị?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 48, 50, 54–55)",
        options: [
          "Giúp nhận diện cửa sổ thời gian vàng còn khả năng phục hồi để can thiệp tái tưới máu hoặc loại bỏ tác nhân gây hại trước khi tế bào vượt ngưỡng chết không hồi phục",
          "Giúp chuyển hóa tế bào hoại tử thành tế bào gốc phôi thai ngay lập tức",
          "Nhằm chứng minh mọi tổn thương tế bào đều xuất phát từ một loại vi khuẩn duy nhất",
          "Vì chỉ khi tế bào đã vỡ màng hoàn toàn thì các biện pháp hồi sức mới bắt đầu có tác dụng"
        ],
        answer: 0,
        explain: "Trang 50 & 54–55: Hiểu cơ chế bệnh sinh ở cấp độ tế bào và bào quan giúp nhận diện tổn thương sớm, đánh giá khả năng hồi phục và lựa chọn chiến lược can thiệp kịp thời trước điểm không thể quay lại."
      }
    ]
  },

  // ========================================================================
  // BÀI 2: RỐI LOẠN THÍCH NGHI, PHÁT TRIỂN & BIỆT HÓA
  // ========================================================================
  2: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Tự lượng giá 4" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu chuyển dạng" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu cơ chế teo" },
      { level: 2, ksa: "S", ksaLabel: "S2: Phân tích sinh lý" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu Barrett" },
      { level: 2, ksa: "S", ksaLabel: "S2: So sánh thích nghi" },
      { level: 2, ksa: "K", ksaLabel: "K2: Phân biệt loạn sản" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ bất sản" },
      { level: 2, ksa: "S", ksaLabel: "S2: Phân biệt bẩm sinh" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ H. pylori" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ thoái sản" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu chuyển sản" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Nhớ yếu tố phân tử",
        q: "Yếu tố tăng trưởng nào được nêu trực tiếp trong cơ chế phân tử của hiện tượng Phì đại tế bào (như phì đại cơ tim)?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 56)",
        options: ["IGF-1 (kèm tín hiệu kéo căng cơ học)", "PTHrP", "Erythropoietin", "Cytochrome c"],
        answer: 0,
        explain: "Trang 56: Cơ chế phân tử của phì đại gồm tín hiệu cơ học (kéo căng cơ học), hoạt hóa yếu tố tăng trưởng IGF-1 và điều hòa phiên mã các gen mã hóa protein cơ."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Nhớ ví dụ teo",
        q: "Ví dụ nào sau đây minh họa cho hiện tượng TEO SINH LÝ được nêu trong giáo trình?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 57)",
        options: [
          "Teo tuyến ức ở người trưởng thành và teo mô sinh dục sau mãn kinh",
          "Teo quanh bó cơ ở bệnh nhân viêm da cơ",
          "Teo cơ chi dưới do bó bột bất động kéo dài",
          "Teo nhu mô thận do hẹp động mạch thận mạn tính"
        ],
        answer: 0,
        explain: "Trang 57: Teo sinh lý gồm teo tuyến ức ở người trưởng thành, teo mô sinh dục sau mãn kinh. Ba phương án còn lại là teo bệnh lý."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân biệt khái niệm",
        q: "Một bệnh nhân nam lớn tuổi bị tăng sản tuyến tiền liệt lành tính (BPH) hỏi bác sĩ liệu đây có phải là bướu thật (ung thư) không. Điểm khác biệt bản chất nhất giữa tăng sản và bướu là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 58)",
        options: [
          "Tăng sản là đáp ứng CÓ ĐIỀU HÒA và CÓ THỂ PHỤC HỒI khi loại bỏ kích thích hormone/tăng trưởng, còn trong bướu tế bào tăng sinh KHÔNG KIỂM SOÁT",
          "Tăng sản chỉ xảy ra ở mô không phân bào như cơ tim, còn bướu chỉ ở tế bào gan",
          "Tăng sản luôn gây vỡ màng tế bào và giải phóng lactate vào máu",
          "Tăng sản là tổn thương thoái sản giống tế bào phôi thai từ thời kỳ bào thai"
        ],
        answer: 0,
        explain: "Trang 58: Tăng sản là một đáp ứng điều hòa và có thể phục hồi nếu loại bỏ tác nhân kích thích; cần phân biệt với bướu, trong đó tăng sinh tế bào là không kiểm soát."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Biện luận hình ảnh",
        q: "Trên tiêu bản sinh thiết cơ vân (Hình 3.2A) của một bệnh nhân yếu cơ gốc chi, bác sĩ giải phẫu bệnh ghi nhận các sợi cơ vùng ngoại vi sát vách liên kết nhỏ hẳn lại so với sợi cơ vùng trung tâm bó cơ. Hiện tượng này gọi là gì và cơ chế phân tử nào tham gia?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 57, Hình 3.2A)",
        options: [
          "Teo quanh bó cơ trong bệnh viêm da cơ; liên quan ức chế tổng hợp protein, kích hoạt ubiquitin-proteasome và tăng tự thực",
          "Phì đại bù trừ các sợi cơ vùng trung tâm do tăng tiết IGF-1",
          "Chuyển sản từ sợi cơ vân thành tế bào mỡ trưởng thành",
          "Loạn sản cơ vân do nhiễm virus HPV type 16"
        ],
        answer: 0,
        explain: "Hình 3.2A (tr. 57): Hình ảnh teo quanh bó cơ (*) ở bệnh nhân viêm da cơ – một ví dụ của teo đét bệnh lý (giảm tổng hợp protein, kích hoạt ubiquitin-proteasome và tăng tự thực)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích lâm sàng",
        q: "Một bệnh nhân tăng huyết áp mạn tính không kiểm soát suốt 12 năm dẫn đến thành thất trái dày cộm rồi cuối cùng chuyển sang suy tim mất bù. Chuỗi diễn biến tế bào học nào giải thích đúng nhất trường hợp này?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 56–57)",
        options: [
          "Áp lực hậu tải kéo dài kích hoạt phì đại cơ tim bệnh lý; nhưng khi kéo dài không được kiểm soát, đáp ứng thích nghi vượt ngưỡng sẽ dẫn đến rối loạn chức năng và suy tim",
          "Các tế bào cơ tim tăng phân bào liên tục (tăng sản) tạo thành bướu cơ tim chèn ép buồng tim",
          "Tế bào cơ tim chuyển sản thành biểu mô lát tầng mất khả năng co bóp",
          "Tế bào cơ tim bị thiểu sản bẩm sinh từ thời kỳ bào thai"
        ],
        answer: 0,
        explain: "Trang 56–57: Phì đại cơ tim trong tăng huyết áp mạn giúp duy trì số lượng tế bào ổn định nhưng tăng protein cấu trúc/bào quan; nếu kéo dài không được kiểm soát sẽ dẫn đến rối loạn chức năng, điển hình là suy tim do phì đại thất trái kéo dài."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích ca bệnh",
        q: "Kết quả nội soi và sinh thiết 1/3 dưới thực quản của một bệnh nhân trào ngược dạ dày – thực quản kéo dài (GERD) cho thấy biểu mô lát tầng bình thường bị thay thế bằng biểu mô trụ dạng ruột có tế bào đài (thực quản Barrett). Tiến trình nguy hiểm nhất nếu không kiểm soát trào ngược là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 58, 59)",
        options: [
          "Chuyển sản kéo dài có thể tiến triển thành loạn sản và sau đó là ung thư biểu mô (carcinom tuyến thực quản)",
          "Biểu mô chuyển thành thiểu sản bẩm sinh làm hẹp đoạn eo động mạch chủ",
          "Các tế bào trụ chuyển dạng dẹt mỏng giống nội mô mạch máu",
          "Tự động tiến triển thành sarcom cơ vân thực quản"
        ],
        answer: 0,
        explain: "Trang 58 & Bảng 8.5: Chuyển sản có tính bảo vệ nhưng cũng là dấu hiệu cảnh báo; nếu kéo dài không loại bỏ nguyên nhân kích thích có thể tiến triển thành loạn sản và ung thư biểu mô (carcinom tuyến thực quản)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Đối chiếu mô học",
        q: "Khi quan sát Hình 3.3C (Loạn sản cổ tử cung CIN) đối chiếu với Hình 3.3D (Carcinom thoái sản tuyến giáp), điểm khác biệt mấu chốt về mặt tổ chức mô và mức độ biệt hóa giữa hai tổn thương này là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 59–60, Hình 3.3C & 3.3D)",
        options: [
          "CIN là tổn thương tiền ung thư còn giới hạn trong lớp biểu mô lát tầng (loạn sản), còn thoái sản là ung thư ác tính độ cao với tế bào mất biệt hóa hoàn toàn giống tế bào phôi thai và phá hủy tổ chức mô",
          "CIN là chuyển sản hoàn toàn lành tính còn thoái sản là tăng sản sinh lý",
          "Cả hai đều là bướu lành tính có vỏ bao rõ",
          "CIN có tế bào khổng lồ đa nhân còn thoái sản giữ nguyên cấu trúc phân lớp bình thường"
        ],
        answer: 0,
        explain: "Trang 59–60: Loạn sản (CIN) là rối loạn tăng sinh & biệt hóa ở biểu mô (tổn thương tiền ung thư); Thoái sản (anaplasia) là mất biệt hóa trở về dạng giống tế bào phôi thai/chưa trưởng thành, mất tổ chức mô, đặc trưng cho ung thư độ ác cao."
      },
      {
        level: 2, ksa: "S", ksaLabel: "S2: Phân tích phôi thai",
        q: "Trong một ca khám thai hoặc nhi khoa phát hiện trẻ mắc dị tật tim bẩm sinh có hẹp – nhỏ đoạn eo động mạch chủ ngay từ khi sinh, thuật ngữ rối loạn phát triển nào mô tả đúng tổn thương giải phẫu này?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 59)",
        options: [
          "Thiểu sản đoạn eo động mạch chủ",
          "Bất sản hoàn toàn động mạch chủ",
          "Teo đét bệnh lý do bất động",
          "Thoái sản thành mạch máu"
        ],
        answer: 0,
        explain: "Trang 59 (Mục 4.1.1): Ví dụ điển hình của Thiểu sản (phát triển không đầy đủ từ giai đoạn bào thai) là thiểu sản đoạn eo động mạch chủ trong các dị tật tim bẩm sinh."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Thái độ dự phòng",
        q: "Một phụ nữ 38 tuổi xét nghiệm tầm soát phát hiện loạn sản cổ tử cung (CIN) do nhiễm HPV nhưng chưa có dấu hiệu ung thư xâm lấn. Thái độ tư vấn đúng đắn nhất dựa trên kiến thức GPB bài 3 là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 59)",
        options: [
          "Giải thích rõ đây là tổn thương tiền ung thư: nếu phát hiện sớm và điều trị kịp thời có thể hồi phục/khỏi, nhưng nếu bỏ mặc kéo dài có nguy cơ rất cao tiến triển thành ung thư biểu mô tại chỗ hoặc xâm lấn",
          "Khẳng định đây là chuyển dạng lành tính hoàn toàn, chỉ cần theo dõi 10 năm một lần",
          "Khẳng định tế bào đã thoái sản độ cao giống tế bào phôi thai, không còn khả năng điều trị",
          "Giải thích đây là bất sản bẩm sinh cổ tử cung có từ lúc mới sinh"
        ],
        answer: 0,
        explain: "Trang 59: Loạn sản thường do viêm mạn, nhiễm HPV; nếu phát hiện sớm và điều trị kịp thời loạn sản có thể hồi phục, nhưng nếu không kiểm soát, nguy cơ tiến triển thành ung thư biểu mô tại chỗ hoặc xâm lấn rất cao."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Thái độ xử trí",
        q: "Một bệnh nhân hút thuốc lá lâu năm có kết quả nội soi phế quản ghi nhận chuyển sản gai niêm mạc phế quản. Lời khuyên quan trọng nhất dựa trên tính chất sinh học của chuyển sản là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 58)",
        options: [
          "Cai thuốc lá tuyệt đối ngay vì chuyển sản có thể ĐẢO NGƯỢC nếu loại bỏ tác nhân kích thích; ngược lại nếu tiếp tục hút thuốc sẽ dễ tiến triển thành loạn sản và ung thư phổi",
          "Yên tâm tiếp tục hút vì chuyển sản gai giúp bảo vệ phế quản hoàn toàn miễn nhiễm với ung thư",
          "Phải cắt toàn bộ thùy phổi ngay lập tức vì chuyển sản luôn đồng nghĩa với ung thư di căn",
          "Uống thêm estrogen để đảo ngược biểu mô gai thành biểu mô trụ"
        ],
        answer: 0,
        explain: "Trang 58: Chuyển sản có thể đảo ngược nếu loại bỏ nguyên nhân kích thích; tuy nhiên nếu kéo dài có thể tiến triển thành loạn sản và sau đó là ung thư biểu mô."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu chuyển dạng",
        q: "Trong một số trường hợp đặc biệt của chuyển dạng tế bào đi kèm thay đổi cả hình thái lẫn chức năng, giáo trình nêu ví dụ nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 58)",
        options: [
          "Tế bào thần kinh đệm có thể chuyển dạng thành các đại thực bào có chức năng hoàn toàn khác biệt",
          "Tế bào cơ tim chuyển dạng thành tế bào biểu mô lát tầng",
          "Tế bào gan chuyển dạng thành tế bào sụn khớp",
          "Tế bào mỡ chuyển dạng thành sợi thần kinh ngoại biên"
        ],
        answer: 0,
        explain: "Trang 58: Trong một số trường hợp khác, chuyển dạng tế bào có thể đi kèm thay đổi cả hình thái và chức năng, ví dụ tế bào thần kinh đệm có thể chuyển dạng thành các đại thực bào."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Thái độ lâm sàng",
        q: "Một phụ nữ mãn kinh sử dụng nội tiết estrogen đơn thuần kéo dài không có progesterone đối kháng dẫn đến tăng sản nội mạc tử cung bệnh lý. Tại sao bác sĩ cần theo dõi sát và can thiệp điều chỉnh nội tiết?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 58) & Bài 8 (tr. 163)",
        options: [
          "Vì tăng sản nội mạc tử cung bệnh lý kéo dài có thể tiến triển thành loạn sản nội mạc tử cung và ung thư nội mạc tử cung",
          "Vì estrogen kéo dài sẽ gây bất sản toàn bộ tử cung",
          "Vì tăng sản sinh lý không bao giờ hồi phục ngay cả khi ngừng thuốc",
          "Vì estrogen gây hoại tử bã đậu toàn bộ niêm mạc tử cung"
        ],
        answer: 0,
        explain: "Trang 58 & 163: Tăng sản nội mạc tử cung do kích thích estrogen bất thường kéo dài có thể tiến triển thành loạn sản hoặc ung thư nội mạc tử cung."
      }
    ]
  },

  // ========================================================================
  // BÀI 3: HOẠI TỬ, APOPTOSIS, TÍCH LŨY NỘI BÀO, VÔI HÓA & LÃO HÓA
  // ========================================================================
  3: {
    baseTags: [
      { level: 2, ksa: "K", ksaLabel: "K2: Tự lượng giá 2" },
      { level: 1, ksa: "K", ksaLabel: "K1: Tự lượng giá 3" },
      { level: 1, ksa: "K", ksaLabel: "K1: Tự lượng giá 5" },
      { level: 2, ksa: "S", ksaLabel: "S2: Kỹ năng nhuộm" },
      { level: 2, ksa: "S", ksaLabel: "S2: Giải thích gan" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ Apoptosome" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu Apoptosis" },
      { level: 2, ksa: "S", ksaLabel: "S2: Đọc tiêu bản" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu vôi hóa" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ thể vùi" },
      { level: 2, ksa: "S", ksaLabel: "S2: Đọc H&E" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu hoại tử mỡ" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Nhớ sắc tố",
        q: "Sắc tố nội sinh nào được mệnh danh là 'sắc tố lão hóa', bắt màu nâu vàng và nằm quanh nhân tế bào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 70, 74)",
        options: ["Lipofuscin", "Hemosiderin", "Melanin", "Carbon (bụi than)"],
        answer: 0,
        explain: "Trang 70 & 74: Lipofuscin là 'sắc tố lão hóa' nội sinh bắt màu nâu vàng quanh nhân, phản ánh quá trình stress oxy hóa kéo dài."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Nhớ nhuộm sắt",
        q: "Để xác định đặc hiệu sắc tố Hemosiderin (dạng dự trữ sắt tích tụ trong đại thực bào ở ổ xuất huyết cũ), phương pháp nhuộm đặc hiệu nào cho màu XANH DƯƠNG?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 71, Hình 3.12B)",
        options: ["Nhuộm Perls'", "Nhuộm Oil Red O", "Nhuộm PAS", "Nhuộm Von Kossa"],
        answer: 0,
        explain: "Trang 71: Nhuộm Perls' cho màu xanh đặc hiệu đối với hemosiderin (Hình 3.12B). Oil Red O nhuộm triglyceride; PAS nhuộm glycogen; Von Kossa nhuộm muối calci phosphate (màu đen)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu ngưỡng vôi hóa",
        q: "Trong vôi hóa do rối loạn chuyển hóa, muối calci phosphate bắt đầu kết tủa và lắng đọng tại các mô lành khi tích nồng độ calci – phosphat huyết thanh vượt quá ngưỡng hòa tan sinh lý nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 72)",
        options: ["70 mg²/dL²", "10 mg²/dL²", "180 mg²/dL²", "45 mg²/dL²"],
        answer: 0,
        explain: "Trang 72: Khi nồng độ calci – phosphat huyết thanh vượt quá ngưỡng hòa tan sinh lý (thường là 70 mg²/dL²), muối calci phosphate kết tủa và lắng đọng tại các mô lành có pH kiềm nhẹ hoặc trao đổi ion cao."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu dấu ấn lão hóa",
        q: "Ba yếu tố phân tử điều hòa quá trình lão hóa tế bào và dấu ấn đặc trưng dùng phát hiện tế bào lão hóa dưới kính hiển vi là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 73–74)",
        options: [
          "p53, p16INK4a, Sirtuins (SIRT1) và dấu ấn SA-β-Gal dương tính khi nhuộm ở pH 6",
          "HER2, KRAS, BRAF và dấu ấn PSA huyết thanh",
          "FasL, FADD, Caspase-8 và dấu ấn Oil Red O",
          "E6, E7, EBNA2 và dấu ấn Perls' ở pH 2"
        ],
        answer: 0,
        explain: "Trang 73–74: Yếu tố phân tử điều hòa lão hóa là p53, p16INK4a (dấu ấn đặc trưng tế bào lão hóa) và Sirtuins (SIRT1); dấu ấn mô học là SA-β-Gal dương tính ở pH 6."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Chẩn đoán ca bệnh",
        q: "Một bệnh nhân đái tháo đường lâu năm bị tắc mạch chi dưới kèm nhiễm trùng vết loét bàn chân bốc mùi hôi thối, mô mềm nhũn chảy dịch đục. Theo phân loại hình thái hoại tử, tình trạng này là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 66)",
        options: [
          "Hoại thư ướt (hoại tử đông ban đầu bị bội nhiễm vi khuẩn gây hoại tử hóa lỏng thứ phát)",
          "Hoại thư khô (hoại tử đông hoàn toàn không kèm nhiễm khuẩn)",
          "Hoại tử dạng tơ huyết (fibrinoid) do tăng huyết áp ác tính",
          "Hoại tử mỡ do hoạt hóa men lipase tụy"
        ],
        answer: 0,
        explain: "Trang 66: Hoại thư ướt là tình trạng bội nhiễm vi khuẩn trên nền hoại tử diện rộng ở chi gây hoại tử hóa lỏng thứ phát, điển hình ở bàn chân bệnh nhân đái tháo đường."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Biện luận mô học",
        q: "So sánh sinh thiết não của bệnh nhân nhũn não do nhồi máu não với sinh thiết cơ tim của bệnh nhân nhồi máu cơ tim cấp sau 24 giờ: sự khác biệt lớn nhất về hình thái hoại tử là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 65–67)",
        options: [
          "Cơ tim hoại tử ĐÔNG (giữ khung mô, mất nhân, có bạch cầu trung tính ở rìa), còn não hoại tử HÓA LỎNG (mô bị tiêu thành dịch nhầy, mất cấu trúc gốc, có đại thực bào ăn mảnh vỡ, không có xác bạch cầu)",
          "Cả cơ tim và não đều xảy ra hoại tử đông giống hệt nhau",
          "Não xảy ra hoại tử bã đậu có đại bào Langhans còn cơ tim xảy ra hoại tử mỡ",
          "Nhồi máu não xảy ra hoại tử dạng fibrinoid còn cơ tim xảy ra apoptosis đơn thuần"
        ],
        answer: 0,
        explain: "Trang 65–67: Thiếu máu cục bộ gây hoại tử ĐÔNG ở các cơ quan đặc TRỪ NÃO. Mô thần kinh không có mô đệm nên dễ bị enzym tiêu mô phá hủy hoàn toàn tạo hoại tử hóa lỏng (nhũn não) với đại thực bào ăn mảnh vỡ tế bào thần kinh, không có xác bạch cầu."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Biện luận vôi hóa",
        q: "Phim X-quang phổi của một người từng mắc lao cũ ghi nhận nốt Ghon vôi hóa ở thùy trên phổi, xét nghiệm calci và phosphat máu hoàn toàn bình thường. Cơ chế nào giải thích nốt vôi hóa này?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 72)",
        options: [
          "Vôi hóa loạn dưỡng: lắng đọng muối calci phosphate tại vùng hoại tử bã đậu cũ do giải phóng phospholipid & phosphate tại chỗ, KHÔNG phụ thuộc calci máu",
          "Vôi hóa do rối loạn chuyển hóa vì tích Ca × P vượt 70 mg²/dL²",
          "Do tăng tiết hormone cận giáp PTH nguyên phát",
          "Do vôi hóa tế bào viền dạ dày lan qua cơ hoành"
        ],
        answer: 0,
        explain: "Trang 72: Nốt Ghon vôi hóa trong mô viêm lao cũ, hoại tử mỡ tụy, van tim tổn thương mạn tính là VÔI HÓA LOẠN DƯỠNG (xảy ra tại mô tổn thương/hoại tử khi nồng độ calci máu bình thường)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích lâm sàng",
        q: "Bệnh nhân suy thận mạn giai đoạn cuối có tăng phosphat máu và cường cận giáp thứ phát. Trên X-quang và sinh thiết phát hiện lắng đọng calci lan tỏa ở vách phế nang phổi, thận và thành mạch máu. Thuốc nhuộm mô học nào khẳng định bản chất muối calci phosphate này?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 72–73)",
        options: [
          "Nhuộm Von Kossa (cho màu đen đặc hiệu qua phản ứng bạc hóa muối calci phosphate)",
          "Nhuộm Oil Red O (cho màu đỏ cam)",
          "Nhuộm Perls' (cho màu xanh Phổ)",
          "Nhuộm PAS sau xử lý diastase"
        ],
        answer: 0,
        explain: "Trang 73: Bệnh nhân suy thận mạn có cường cận giáp thứ phát và tăng phosphat máu bị Vôi hóa do rối loạn chuyển hóa ở mô lành (phổi, niêm mạc dạ dày, thận, thành mạch). Nhuộm Von Kossa giúp xác định muối calci phosphate qua phản ứng bạc hóa cho màu đen đặc trưng."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Đối chiếu Apoptosis",
        q: "Vì sao hai bệnh lý trái ngược nhau là Thoái hóa thần kinh (Alzheimer, Parkinson) và Ung thư lại cùng liên quan mật thiết đến rối loạn chết tế bào theo chương trình (Apoptosis)?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 68)",
        options: [
          "Bệnh thoái hóa thần kinh liên quan TĂNG quá mức apoptosis gây mất tế bào thần kinh; còn ung thư liên quan GIẢM apoptosis giúp tế bào ác tính sống sót bất tử",
          "Cả hai bệnh đều do ngừng hoàn toàn quá trình apoptosis từ thời kỳ bào thai",
          "Bệnh Alzheimer là hoại tử mỡ não còn ung thư là hoại tử hóa lỏng",
          "Cả hai bệnh đều do kích hoạt quá mức bơm Na⁺/K⁺-ATPase"
        ],
        answer: 0,
        explain: "Trang 68 (Mục 5.3.3.4): Tăng apoptosis gặp trong thoái hóa thần kinh (Alzheimer, Parkinson), suy tủy, teo cơ bất động, lão hóa; Giảm apoptosis gặp trong ung thư khi tế bào ác tính né tránh chết theo chương trình."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Thái độ xử trí",
        q: "Trên sinh thiết hạch cổ của bệnh nhân sốt kéo dài, bác sĩ giải phẫu bệnh thấy vùng trung tâm hồng nhạt vô định hình mất ranh giới tế bào, bao quanh bởi tế bào dạng biểu mô, đại bào Langhans và lympho bào (như Hình 3.9A). Thái độ chẩn đoán và xử trí lâm sàng đúng đắn là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 65–67)",
        options: [
          "Đây là viêm hạt hoại tử bã đậu – tiêu chuẩn mô học xác định bệnh lao do M. tuberculosis; cần phối hợp xét nghiệm vi sinh lao và điều trị phác đồ kháng lao đặc hiệu",
          "Kết luận ngay là ung thư biểu mô di căn hạch và chỉ định hóa trị độc tế bào",
          "Kết luận là hoại tử mỡ do viêm tụy cấp và chỉ định mổ bụng cấp cứu",
          "Bỏ qua vì đây chỉ là sắc tố ngoại sinh do mực xăm"
        ],
        answer: 0,
        explain: "Trang 65–67: Tổn thương viêm dạng hạt với trung tâm hoại tử bã đậu được bao quanh bởi tế bào dạng biểu mô, đại bào Langhans và lympho bào là tiêu chuẩn mô học giúp chẩn đoán xác định bệnh lao."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Thái độ phân tích",
        q: "Một hạch rốn phổi của người sống lâu năm ở vùng ô nhiễm bụi than có màu đen sẫm khi mổ lồng ngực. Thái độ đánh giá mô bệnh học thận trọng của bác sĩ GPB là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 71)",
        options: [
          "Phân biệt sắc tố ngoại sinh carbon (ứ đọng than – anthracosis ở phổi và hạch rốn phổi) với sắc tố nội sinh melanin của bướu hắc tố di căn trước khi kết luận ác tính",
          "Khẳng định ngay bệnh nhân bị melanom di căn hạch rốn phổi vì có màu đen",
          "Nhuộm Oil Red O để chẩn đoán gan nhiễm mỡ",
          "Kết luận bệnh nhân bị ngộ độc đồng và sắt"
        ],
        answer: 0,
        explain: "Trang 71: Hạch rốn phổi tích tụ sắc tố ngoại sinh carbon gây ứ đọng than (anthracosis) màu đen – cần phân biệt kỹ với melanin trong melanom di căn hoặc hemosiderin (Perls' màu xanh)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu kiểu hình SASP",
        q: "Tế bào lão hóa tuy ngừng phân chia vĩnh viễn nhưng lại tiết ra các cytokin tiền viêm, protease và yếu tố tăng trưởng tạo thành 'kiểu hình tiết liên quan đến lão hóa' (SASP). Tác động hai mặt của lão hóa tế bào đối với mô là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 3 (tr. 74)",
        options: [
          "Ngắn hạn: bảo vệ nhờ chặn nhân lên tế bào tổn thương; Dài hạn: SASP gây viêm mạn mức độ thấp, xơ hóa mô, giảm tái tạo và tăng nguy cơ hình thành bướu thứ phát",
          "Hoàn toàn có hại ngay từ đầu vì làm tế bào vỡ màng gây áp-xe mủ",
          "Giúp tế bào lão hóa trẻ hóa thành tế bào phôi thai vạn năng",
          "Chỉ làm tăng tích tụ triglyceride trong ống lượn gần thận"
        ],
        answer: 0,
        explain: "Trang 74: Lão hóa vừa bảo vệ (ngăn nhân lên tế bào hỏng DNA), vừa bất lợi khi tích tụ kéo dài: SASP gây viêm mạn mức độ thấp, xơ hóa, giảm tái tạo và tăng nguy cơ hình thành bướu thứ phát."
      }
    ]
  },

  // ========================================================================
  // BÀI 4: ĐẠI CƯƠNG, DANH PHÁP & ĐẶC ĐIỂM HÌNH THÁI BƯỚU
  // ========================================================================
  4: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Tự lượng giá 1" },
      { level: 3, ksa: "S", ksaLabel: "S3: Tự lượng giá 3" },
      { level: 2, ksa: "K", ksaLabel: "K2: Tự lượng giá 4" },
      { level: 1, ksa: "S", ksaLabel: "S1: Tự lượng giá 5" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu Choristom" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ ngoại lệ" },
      { level: 2, ksa: "S", ksaLabel: "S2: Phân tích đại thể" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu di căn" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu đường máu" },
      { level: 2, ksa: "S", ksaLabel: "S2: Đánh giá hạch" },
      { level: 2, ksa: "S", ksaLabel: "S2: Đọc đại thể" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ phân tử" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Nhớ cổ học",
        q: "Bác sĩ Hy Lạp cổ đại nào được mệnh danh là người sáng lập y học phương Tây đã phân biệt 'bướu hiền lành' và 'bướu nguy hiểm' từ năm 470–380 TCN?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8 (tr. 141)",
        options: ["Hippocrates", "Rudolf Virchow", "Percival Pott", "Knudson"],
        answer: 0,
        explain: "Trang 141: Hippocrates (470–380 TCN) cho rằng bướu do mất cân bằng thể dịch và phân biệt 'bướu hiền lành' với 'bướu nguy hiểm'."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Nhớ cấu tạo bướu",
        q: "Tất cả các bướu (lành, giáp biên ác, ác tính) đều cấu tạo từ hai thành phần chính nào và thành phần nào quyết định đặc tính sinh học cũng như tên gọi bướu?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8 (tr. 142)",
        options: [
          "Nhu mô (chủ mô – tế bào tân sinh, quyết định tính sinh học & đặt tên) và Mô đệm (mô nâng đỡ ký chủ)",
          "Vỏ bao xơ (quyết định đặt tên) và Chất chứa dịch nhầy",
          "Hạch lính gác và Mạng lưới mạch bạch huyết",
          "Thành phần ngoại bì và Thành phần hoại tử trung tâm"
        ],
        answer: 0,
        explain: "Trang 142: Hai thành phần của bướu là (1) Nhu mô (chủ mô) – quyết định đặc tính sinh học và là cơ sở đặt tên bướu; (2) Mô đệm – mô nâng đỡ từ ký chủ (liên kết, mạch máu, tế bào viêm)."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Nhớ Bảng 8.2",
        q: "Theo Bảng 8.2, tên gọi tương ứng cho bướu LÀNH tính và ÁC tính xuất phát từ biểu mô niệu mạc của bàng quang là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Bảng 8.2 (tr. 148)",
        options: [
          "Lành: Bướu nhú niệu mạc (Urothelial papilloma) • Ác: Carcinom niệu mạc (Urothelial carcinoma)",
          "Lành: Bướu tuyến niệu mạc • Ác: Sarcom niệu mạc",
          "Lành: Thai trứng • Ác: Carcinom đệm nuôi",
          "Lành: Nevi bàng quang • Ác: Melanom bàng quang"
        ],
        answer: 0,
        explain: "Bảng 8.2 (tr. 148): Bàng quang: Bướu nhú niệu mạc (Urothelial papilloma) ↔ Carcinom niệu mạc (Urothelial carcinoma)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu danh pháp",
        q: "Ý nghĩa của các thuật ngữ mô tả bướu: Medullary carcinoma, Scirrhous (desmoplastic) carcinoma và Comedocarcinoma lần lượt là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8 (tr. 146)",
        options: [
          "Medullary: mềm giàu tế bào ít mô đệm; Scirrhous: nhiều mô đệm sợi rất chắc; Comedocarcinoma: carcinom ống tuyến vú hoại tử bã khô trung tâm",
          "Medullary: nhiều bể nhầy; Scirrhous: tạo cầu sừng; Comedocarcinoma: xếp dạng sàng tuyến nước bọt",
          "Medullary: cấu trúc nhú; Scirrhous: chỉ gặp ở xương; Comedocarcinoma: bướu buồng trứng",
          "Cả ba đều chỉ bướu lành tính có vỏ bao dày ở da"
        ],
        answer: 0,
        explain: "Trang 146: Medullary carcinoma (bướu mềm, giàu tế bào, ít mô đệm); Scirrhous/desmoplastic carcinoma (nhiều mô đệm sợi xơ chắc); Comedocarcinoma (carcinom ống tuyến vú có hoại tử bã khô comedo ở trung tâm)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Biện luận mô bệnh học",
        q: "Một khối u tuyến mang tai trên vi thể (Hình 8.4) vừa có cấu trúc ống tuyến biểu mô vừa có mô đệm dạng sụn – nhầy lành tính. Khẳng định nào sau đây ĐÚNG về nguồn gốc di truyền của khối bướu này?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8 (tr. 147, Hình 8.4)",
        options: [
          "Đây là bướu tuyến đa dạng (Pleomorphic adenoma) – dù có 2 thành phần mô học nhưng vẫn bắt nguồn ĐƠN DÒNG từ một tế bào tạo bướu ban đầu có khả năng biệt hóa đa dòng",
          "Đây chắc chắn là bướu ác tính Carcinosarcoma cần xạ trị toàn thân ngay",
          "Đây là sự hợp nhất ngẫu nhiên của hai bướu lành từ hai lá phôi khác nhau (Teratoma)",
          "Đây là mô tụy lạc chỗ (Choristoma) nằm trong tuyến mang tai"
        ],
        answer: 0,
        explain: "Trang 147: Mặc dù ĐƠN DÒNG về mặt di truyền, các tế bào trong bướu hỗn hợp như Pleomorphic adenoma tuyến mang tai thể hiện khả năng biệt hóa đa dòng tạo cả thành phần biểu mô và mô đệm."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích lâm sàng",
        q: "Một khối u giáp được chẩn đoán ban đầu là dạng nang, có vỏ bao xơ bên ngoài khá rõ. Khi đọc tiêu bản vi thể toàn bộ khối u, bác sĩ GPB phải tìm dấu hiệu quyết định nào ở vùng vỏ bao để chẩn đoán đây là Carcinom tuyến giáp dạng nang chứ không phải Bướu túi tuyến lành tính?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8 (tr. 153, 157)",
        options: [
          "Tế bào bướu xâm nhập xuyên qua vỏ bao bướu hoặc xâm nhập vào lòng mạch máu/mạch lympho ở vùng vỏ bao",
          "Tế bào bướu còn sản xuất chất keo giáp màu hồng trong lòng túi tuyến",
          "Tế bào bướu sắp xếp thành từng túi tuyến hình tròn đều đặn",
          "Đại thể khối bướu nằm ở thùy phải tuyến giáp với kích thước 2 × 3 cm"
        ],
        answer: 0,
        explain: "Trang 157: Một số bướu ác có thể có vỏ bao (như carcinom tuyến giáp dạng nang). Tiêu chuẩn phân biệt với bướu lành là trên vi thể có xâm nhập qua vỏ bao bướu, mạch máu hoặc mạch lympho vùng vỏ bao."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích di căn",
        q: "Một bệnh nhân nữ bị ung thư vú nguyên phát ở vị trí 1/2 TRONG của vú trái. Chuỗi hạch nào có khả năng bị tế bào ung thư di căn tới đầu tiên theo dẫn lưu bạch huyết giải phẫu?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8 (tr. 158)",
        options: [
          "Hạch cạnh xương ức (theo đường động mạch vú trong), sau đó có thể lên hạch thượng đòn hoặc hạ đòn",
          "Chỉ duy nhất các hạch ở vùng nách đối bên",
          "Hạch rốn phổi qua đường khí – phế quản",
          "Di căn trực tiếp xuống hạch bẹn nông"
        ],
        answer: 0,
        explain: "Trang 158: Ung thư vú ở 1/4 trên ngoài thường di căn đến hạch nách, trong khi tổn thương ở vị trí 1/2 trong của vú có thể lan đến hạch cạnh xương ức theo đường động mạch vú trong, dẫn đến di căn hạch thượng đòn hoặc hạ đòn."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích hình thái",
        q: "Trên tiêu bản mô phổi của bệnh nhân hút thuốc lá có một khối u ác tính tế bào vảy/gai với các cấu trúc cầu sừng hồng đồng tâm (Hình 8.11), trong khi bình thường phế quản lót biểu mô trụ. Hiện tượng nào đã xảy ra trước/trong quá trình phát sinh khối u?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8 (tr. 152, 156)",
        options: [
          "Tế bào ung thư có hiện tượng chuyển sản thành dạng tế bào gai biệt hóa tốt vẫn duy trì khả năng tạo chất sừng thành cầu sừng",
          "Bướu có nguồn gốc từ tế bào trung mô cơ vân chuyển dạng",
          "Đây là bướu lành nhú gai (papilloma) vì vẫn tạo được chất sừng",
          "Tế bào u bị thoái sản hoàn toàn mất mọi khả năng biệt hóa"
        ],
        answer: 0,
        explain: "Trang 152 & 154: Trong ung thư phổi, tế bào ung thư từ biểu mô trụ có thể chuyển sản thành dạng tế bào gai tạo carcinom tế bào gai phế quản; nếu biệt hóa tốt vẫn có thể tạo cầu sừng (Hình 8.11)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích đại thể",
        q: "Khi cắt phẫu tích một bệnh phẩm ung thư biểu mô gan hoặc thận, bác sĩ thấy các dải mô u mọc kéo dài thẳng dọc theo lòng tĩnh mạch chủ dưới tiến sát về buồng tim phải. Hai loại ung thư nào nổi tiếng với kiểu lan dọc lòng tĩnh mạch này?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8 (tr. 158)",
        options: [
          "Carcinom tế bào thận (RCC) và Carcinom tế bào gan (HCC)",
          "Carcinom tế bào đáy da và Bướu thần kinh đệm",
          "Carcinom tuyến giáp dạng nhú và Bướu nhú niệu mạc",
          "Bướu sợi tuyến vú và Bướu cơ trơn tử cung"
        ],
        answer: 0,
        explain: "Trang 158: Carcinom tế bào thận và carcinom tế bào gan thường có đặc điểm phát triển dọc theo lòng tĩnh mạch, có thể lan theo tĩnh mạch chủ dưới đến tận buồng tim phải (lưu ý kiểu lan theo tĩnh mạch này không nhất thiết đi kèm di căn xa lan tỏa)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Đánh giá chuẩn GPB",
        q: "Một mẫu phết cổ tử cung hoặc sinh thiết phổi có bướu ác tính giàu tế bào, độ mô học cao. Chỉ số phân bào (mitotic index) khi báo cáo giải phẫu bệnh được xác định dựa trên chuẩn nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8 (tr. 152)",
        options: [
          "Đếm số lượng hình ảnh phân bào trên một diện tích nhất định (ví dụ trên 10 vi trường có độ phóng đại cao – 10 HPF), kết hợp tìm phân bào bất thường (3 cực, 4 cực)",
          "Đo đường kính lớn nhất khối u theo đơn vị quả chanh hay quả trứng vịt",
          "Đo độ dày lớp vỏ bao sợi do nguyên bào sợi tiết ra",
          "Định lượng nồng độ glucose trong dịch nang"
        ],
        answer: 0,
        explain: "Trang 152: Chỉ số phân bào được tính dựa trên số lượng hình ảnh phân bào trên một diện tích nhất định (VD: trên 10 vi trường có độ phóng đại cao – HPF). Còn đại thể phải đo kích thước theo cm (dài × rộng × cao), KHÔNG ví von bằng trái chanh, hột vịt."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Thái độ lâm sàng",
        q: "Bệnh nhân có một khối u ở thân não chẩn đoán giải phẫu bệnh là bướu lành tính phát triển chậm, không di căn. Thái độ tư vấn chính xác nhất của bác sĩ cho gia đình người bệnh là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8 (tr. 142, 179)",
        options: [
          "Dù bản chất mô học lành tính, bướu vẫn có thể gây triệu chứng thần kinh nặng và đe dọa tính mạng do vị trí chèn ép cấu trúc sống còn ở não – cần cân nhắc điều trị chuyên khoa sâu",
          "Không cần lo lắng hay điều trị vì bướu lành tính không bao giờ có thể gây tử vong ở bất kỳ vị trí nào",
          "Bướu lành tính ở não chắc chắn sẽ di căn đến gan và phổi trong vài tuần",
          "Đây là choristoma vô hại nên chỉ cần theo dõi bằng xét nghiệm AFP"
        ],
        answer: 0,
        explain: "Trang 142 & 179: Không phải mọi bướu lành đều dễ loại bỏ; một số bướu lành có thể gây triệu chứng đáng kể, thậm chí đe dọa tính mạng nếu phát triển tại vị trí có vai trò sống còn như não, tim, đường hô hấp."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Thái độ mô tả",
        q: "Khi viết phiếu mô tả đại thể một khối bướu phẫu thuật cắt bỏ, cách ghi kích thước nào sau đây đạt chuẩn y khoa Giải phẫu bệnh YDS?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8 (tr. 150)",
        options: [
          "Ghi cụ thể số đo ba chiều bằng cm (ví dụ: bướu kích thước 3 × 4 × 5 cm hoặc đường kính 2 cm)",
          "So sánh trực quan cho dễ hình dung kiểu 'bướu to bằng trái chanh, hột vịt'",
          "Chỉ cần ghi 'bướu nhỏ' nếu là bướu lành và 'bướu to' nếu là bướu ác",
          "Không cần đo kích thước vì hệ thống TNM không sử dụng kích thước T"
        ],
        answer: 0,
        explain: "Trang 150 nhấn mạnh nguyên tắc nghề nghiệp: Kích thước bướu phải đo cụ thể ba chiều (dài × rộng × cao) bằng đơn vị cm (VD: đường kính 2 cm, kích thước 3 × 5 cm), KHÔNG nên nhận xét 'bướu to bằng trái chanh, hột vịt'."
      }
    ]
  },

  // ========================================================================
  // BÀI 5: DỊCH TỄ UNG THƯ & TÁC NHÂN GÂY UNG THƯ
  // ========================================================================
  5: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Tự lượng giá 2" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ số liệu VN" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ Bảng 8.4" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ Bảng 8.5" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu Aflatoxin" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu Promoter" },
      { level: 2, ksa: "S", ksaLabel: "S2: Đánh giá phóng xạ" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu HPV E6/E7" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ HTLV-1" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu EBV" },
      { level: 2, ksa: "S", ksaLabel: "S2: Phân tích Correa" },
      { level: 2, ksa: "S", ksaLabel: "S2: Đánh giá nguy cơ" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Nhớ thống kê",
        q: "Theo thống kê trích dẫn trong Bài 8, hút thuốc lá là nguyên nhân trực tiếp gây ra khoảng bao nhiêu phần trăm tổng số ca tử vong do ung thư phổi, và tác nhân truyền nhiễm đóng góp khoảng bao nhiêu phần trăm tổng số ca ung thư toàn cầu?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8 (tr. 161)",
        options: [
          "90% tử vong ung thư phổi do hút thuốc lá; ~15% tổng số ca ung thư toàn cầu liên quan bệnh truyền nhiễm",
          "30% tử vong ung thư phổi do thuốc lá; ~50% ung thư do truyền nhiễm",
          "50% tử vong ung thư phổi; ~5% do truyền nhiễm",
          "100% tử vong ung thư phổi; ~3% do truyền nhiễm"
        ],
        answer: 0,
        explain: "Trang 161: Tới 90% ca tử vong do ung thư phổi liên quan trực tiếp đến hút thuốc; các yếu tố liên quan bệnh truyền nhiễm đóng góp khoảng 15% tổng số ca ung thư trên toàn cầu."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Nhớ virus DNA",
        q: "Năm loại virus DNA được biết có liên quan đến ung thư ở người theo giáo trình Giải phẫu bệnh đại cương gồm những loại nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8 (tr. 167–168)",
        options: [
          "HPV, EBV, KSHV (HHV-8), virus tế bào Merkel và virus viêm gan (HBV, HCV)",
          "HTLV-1, HIV-1, HPV, SARS-CoV-2 và EBV",
          "HPV, CMV, HSV-1, Adenovirus và Rubella",
          "EBV, Poliovirus, Rotavirus, HBV và HTLV-1"
        ],
        answer: 0,
        explain: "Trang 167–168: Có năm nhóm virus DNA liên quan ung thư ở người: HPV, EBV, KSHV (HHV-8 gây sarcom Kaposi), virus tế bào Merkel và virus viêm gan (HBV, HCV)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu di cư Nisei",
        q: "Nghiên cứu dịch tễ học về tỷ lệ tử vong ung thư ở người Nhật thế hệ thứ hai sinh sống tại Hoa Kỳ (Nisei) cung cấp bằng chứng thuyết phục nhất cho kết luận nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8 (tr. 160)",
        options: [
          "Yếu tố môi trường (ăn uống, lối sống, nhiễm khuẩn) đóng vai trò chính quyết định sự khác biệt tỷ lệ mắc ung thư giữa các khu vực địa lý",
          "Ung thư dạ dày và ung thư vú hoàn toàn do di truyền chủng tộc cố định không thay đổi theo môi trường",
          "Tất cả các ung thư ở người Nisei đều do đột biến dòng mầm BRCA1",
          "Người Nisei hoàn toàn miễn nhiễm với mọi loại ung thư"
        ],
        answer: 0,
        explain: "Trang 160: Tỷ lệ tử vong các ung thư ở người Nisei nằm ở trung gian giữa người Nhật bản địa và người sống lâu đời ở Mỹ, rồi tiếp tục thu hẹp qua các thế hệ → khẳng định vai trò quyết định của yếu tố môi trường."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu Bảng 8.5",
        q: "Hai ký sinh trùng nào được liệt kê trong Bảng 8.5 có khả năng gây viêm mạn dẫn đến ung thư đường mật và ung thư bàng quang?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Bảng 8.5 (tr. 163)",
        options: [
          "Sán lá gan Opisthorchis viverrini (ung thư đường mật) và Sán máng (ung thư bàng quang)",
          "Giun đũa Ascaris (ung thư đại tràng) và Amip Entamoeba (ung thư gan)",
          "Sán dây bò (ung thư dạ dày) và Ký sinh trùng sốt rét (carcinom phổi)",
          "Nấm Aspergillus (carcinom tuyến giáp) và Sán lá phổi (u trung mạc)"
        ],
        answer: 0,
        explain: "Bảng 8.5 (tr. 163): Viêm đường mật do sán lá gan (Opisthorchis viverrini) → Ung thư đường mật; Viêm bàng quang mạn tính do bệnh sán máng → Ung thư bàng quang."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích hóa chất",
        q: "Một bệnh nhân được chữa khỏi bệnh lymphom Hodgkin bằng phác đồ hóa trị có chứa chất alkylating, nhưng 6 năm sau xuất hiện bệnh bạch cầu cấp. Giải thích đúng nhất về tác nhân gây ung thư thứ phát này là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8 (tr. 165)",
        options: [
          "Thuốc alkylating là hóa chất gây ung thư tác dụng TRỰC TIẾP (không cần chuyển hóa để hoạt hóa), tuy yếu nhưng có khả năng gây đột biến sinh bệnh bạch cầu thứ phát",
          "Thuốc alkylating là chất thúc đẩy (promoter) hoàn toàn không gây đột biến gen",
          "Thuốc alkylating phải nhờ cytochrome P450 biến thành benzo[a]pyrene epoxy mới gắn DNA",
          "Đây chắc chắn là do tái hoạt virus HTLV-1 từ tuyến ức"
        ],
        answer: 0,
        explain: "Trang 165 (Mục 5.1.1): Các chất alkylating dùng điều trị lymphom Hodgkin là hóa chất sinh ung tác dụng trực tiếp (không cần chuyển hóa để trở nên hoạt tính), có thể gây ung thư thứ phát là bệnh bạch cầu."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích UV",
        q: "Hai bệnh nhân đều mắc ung thư da do tia cực tím (UV): bệnh nhân A (nông dân làm việc ngoài nắng hàng ngày 30 năm) mắc carcinom tế bào đáy/tế bào gai; bệnh nhân B (nhân viên văn phòng, thỉnh thoảng đi tắm nắng gắt bị cháy nắng hoặc dùng đèn rám da nhân tạo) mắc melanom ác. Mô thức phơi nhiễm nào giải thích sự khác biệt này?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8 (tr. 167)",
        options: [
          "Ung thư da không thuộc nhóm melanom (BCC, SCC) liên quan tiếp xúc nắng kéo dài và TÍCH LŨY; còn melanom thường phát sinh sau các đợt phơi nhiễm MẠNH và NGẮT QUÃNG",
          "Tia UV chỉ gây tổn thương ở người da sẫm màu hơn người da trắng",
          "BCC và SCC hoàn toàn không liên quan ánh sáng mặt trời mà chỉ do HPV type 6",
          "Melanom chỉ phát sinh ở vùng da hoàn toàn được che kín suốt đời"
        ],
        answer: 0,
        explain: "Trang 167: Nhóm nguy cơ cao nhất với ung thư da do UV là người da trắng ở vùng bức xạ cao (như Úc). Ung thư da không thuộc melanom liên quan tiếp xúc ánh nắng kéo dài và tích lũy; melanom thường liên quan các đợt phơi nhiễm mạnh và ngắt quãng (tắm nắng, thiết bị làm rám da nhân tạo)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích nghề nghiệp",
        q: "Một công nhân nghỉ hưu sau 25 năm làm công việc sản xuất và lắp đặt vật liệu má phanh, tấm lợp chống cháy nay xuất hiện khó thở, tràn dịch màng phổi và sinh thiết màng phổi chẩn đoán Bướu trung mạc (Mesothelioma). Tác nhân nghề nghiệp nào là thủ phạm chính?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Bảng 8.4 & 8.5 (tr. 161, 163)",
        options: [
          "Sợi amiăng (Asbestos) – làm tăng nguy cơ ung thư phổi và ung thư trung biểu mô",
          "Khí Radon – gây ung thư tuyến tiền liệt",
          "Vinyl clorua – gây sarcom mạch máu màng phổi",
          "Benzen – gây carcinom tế bào gai âm hộ"
        ],
        answer: 0,
        explain: "Bảng 8.4 (tr. 161): Amiăng trước đây dùng trong vật liệu chống cháy, cách nhiệt và giảm ma sát (lớp lót phanh, tấm lợp), gây ung thư phổi và ung thư trung biểu mô (bướu trung mạc)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích thực phẩm",
        q: "Khi nướng thịt chứa mỡ động vật ở nhiệt độ cao hoặc ăn nhiều thịt cá hun khói, chất hóa học sinh ung gián tiếp nào hình thành và chuyển hóa trong cơ thể thành dẫn xuất epoxy gắn vào DNA, RNA, protein?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8 (tr. 165)",
        options: [
          "Benzo[a]pyrene (thuộc nhóm hydrocarbon đa vòng)",
          "Este phorbol (thuộc nhóm chất thúc đẩy promoter)",
          "Acid alpha-glucosidase",
          "Vinyl clorua"
        ],
        answer: 0,
        explain: "Trang 165: Hydrocarbon đa vòng (VD: Benzo[a]pyrene trong khói thuốc lá, thịt cá hun khói, thịt nướng chứa mỡ động vật) là chất gây ung thư gián tiếp; trong cơ thể được chuyển hóa thành epoxy gắn vào DNA, RNA và protein."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Biện luận tiền ung",
        q: "Một bệnh nhân nam 55 tuổi hút thuốc lá 30 gói-năm kèm uống nhiều rượu mạnh mỗi ngày được phát hiện mảng bạch sản ở niêm mạc sàn miệng và ung thư thực quản. Nhận định nào đúng nhất về sự phối hợp của hai yếu tố nguy cơ này?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8 (tr. 161, 163)",
        options: [
          "Hút thuốc lá và uống rượu có tác động HIỆP ĐỒNG làm tăng đáng kể nguy cơ ung thư đường hô hấp trên và tiêu hóa trên; bạch sản niêm mạc miệng là tổn thương tiền ung thư có thể tiến triển thành carcinom tế bào gai",
          "Rượu trung hòa độc tính của thuốc lá nên hai yếu tố này đối kháng nhau",
          "Bạch sản niêm mạc miệng luôn chỉ là mô hạt viêm vô hại",
          "Uống rượu chỉ gây ung thư bàng quang chứ không ảnh hưởng hầu họng, thực quản"
        ],
        answer: 0,
        explain: "Trang 161 & 163: Khi kết hợp hút thuốc và uống rượu, nguy cơ ung thư đường hô hấp trên và tiêu hóa trên tăng lên đáng kể do tác động hiệp đồng. Bạch sản niêm mạc miệng, âm hộ, dương vật có thể tiến triển thành carcinom tế bào gai."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Thái độ dự phòng",
        q: "Nhìn lại số liệu tỷ lệ mắc ung thư ở người Nhật Nisei di cư và tỷ lệ giảm tử vong ung thư cổ tử cung nhờ xét nghiệm PAP + vắc xin HPV (tr. 160), thông điệp y tế công cộng quan trọng nhất mà học viên sau đại học cần truyền tải là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8 (tr. 160–161)",
        options: [
          "Phần lớn các ung thư phổ biến liên quan mạnh đến yếu tố môi trường, lối sống và tác nhân truyền nhiễm nên hoàn toàn có thể PHÒNG NGỪA (tiêm vaccin HPV/HBV, diệt H. pylori, bỏ thuốc lá, hạn chế rượu) và TẦM SOÁT PHÁT HIỆN SỚM",
          "Vì 95% ung thư là do di truyền đơn gen bẩm sinh nên phòng ngừa môi trường không có giá trị",
          "Chỉ cần dùng kháng sinh dự phòng cho tất cả mọi người là loại trừ được 100% ung thư",
          "Xét nghiệm tầm soát PAP không làm thay đổi tỷ lệ tử vong ung thư cổ tử cung"
        ],
        answer: 0,
        explain: "Trang 160: Phần lớn ung thư hoàn toàn có thể phòng ngừa thông qua giảm nguy cơ môi trường (thuốc lá, rượu, H. pylori, HBV) và chương trình tầm soát sớm (PAP, vaccin HPV)."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Thái độ truyền thông",
        q: "Một phụ nữ có kết quả nhiễm HPV type 6 và 11 (mụn cóc sinh dục) vô cùng hoảng loạn nghĩ mình chắc chắn sắp bị ung thư cổ tử cung. Bác sĩ cần giải thích dựa trên phân loại HPV như thế nào cho chuẩn xác và giúp bệnh nhân an tâm?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8 (tr. 168)",
        options: [
          "HPV type 6 và 11 thuộc nhóm nguy cơ thấp gây mụn cóc/u nhú lành tính với khả năng tiến triển ác tính rất thấp (protein E6 có ái lực thấp với P53); nhóm nguy cơ cao gây ung thư cổ tử cung chủ yếu là type 16 và 18",
          "HPV type 6 và 11 là hai chủng nguy hiểm nhất bắt buộc phải cắt tử cung dự phòng",
          "Mọi chủng HPV từ type 1 đến type 18 đều có khả năng biến đổi E6/E7 ác tính giống hệt nhau",
          "HPV là vi khuẩn lây truyền qua tiêu hóa gây u nhú đường ruột"
        ],
        answer: 0,
        explain: "Trang 168: HPV type 1, 2, 4, 7 gây mụn cóc da lành tính; type 6, 11 là HPV nguy cơ thấp ở cơ quan sinh dục với khả năng tiến triển ác tính rất thấp; ngược lại type 16, 18 là nguy cơ cao gắn với carcinom tế bào gai (vì E6 của HPV nguy cơ cao có ái lực với P53 cao hơn)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu bức xạ",
        q: "Theo các nghiên cứu dịch tễ học trên những người sống sót sau vụ bom nguyên tử tại Hiroshima và Nagasaki, thời gian tiềm ẩn trung bình từ lúc phơi nhiễm đến khi gia tăng rõ rệt bệnh bạch cầu là bao lâu?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8 (tr. 167)",
        options: ["Khoảng 7 năm", "Khoảng 6 tháng", "Khoảng 45 ngày", "Khoảng 40 năm"],
        answer: 0,
        explain: "Trang 167: Nghiên cứu ở Hiroshima và Nagasaki ghi nhận tỷ lệ mắc bệnh bạch cầu tăng đáng kể với thời gian tiềm ẩn trung bình khoảng 7 năm sau phơi nhiễm (cùng sự gia tăng K giáp, vú, ruột non, phổi)."
      }
    ]
  },

  // ========================================================================
  // BÀI 6: 10 HALLMARKS & KHÍA CẠNH LÂM SÀNG
  // ========================================================================
  6: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ Bảng 8.6" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu RB–E2F" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu Warburg" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu 2-HG" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ tân sinh mạch" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ EMT" },
      { level: 2, ksa: "K", ksaLabel: "K2: Nhớ sửa DNA" },
      { level: 2, ksa: "S", ksaLabel: "S2: Phân biệt miễn dịch" },
      { level: 2, ksa: "S", ksaLabel: "S2: Dùng dấu ấn bướu" },
      { level: 2, ksa: "S", ksaLabel: "S2: So sánh TNM" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu suy mòn" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu telomerase" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Nhớ thống kê",
        q: "Hội chứng cận ung gặp ở khoảng bao nhiêu phần trăm bệnh nhân ung thư và trong khoảng bao nhiêu phần trăm ung thư có hoạt động trở lại của enzym telomerase?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8 (tr. 175, 180)",
        options: [
          "Hội chứng cận ung gặp ở 10–15% bệnh nhân; Telomerase tái hoạt động ở 85–95% các loại ung thư",
          "Hội chứng cận ung gặp ở 85–95%; Telomerase ở 10–15%",
          "Hội chứng cận ung gặp ở <1%; Telomerase ở 20%",
          "Hội chứng cận ung gặp ở 50%; Telomerase ở 100%"
        ],
        answer: 0,
        explain: "Trang 175 & 180: Khoảng 85–95% các loại ung thư cho thấy sự hoạt động trở lại của telomerase; hội chứng cận ung gặp ở 10–15% bệnh nhân ung thư."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Nhớ cận ung",
        q: "Theo Bảng 8.6, hội chứng 'Tăng đông, huyết khối' là hội chứng cận ung hay gặp liên quan đến loại ung thư và cơ chế nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Bảng 8.6 (tr. 180)",
        options: [
          "Ung thư tuyến tụy, phổi và các bệnh khác – do sản phẩm khối bướu hoạt hóa đông máu",
          "Sarcom sợi và ung thư buồng trứng – do tiết insulin lạc chỗ",
          "Ung thư thận và bướu mạch máu tiểu não – do tiết erythropoietin lạc chỗ",
          "Ung thư phổi tế bào nhỏ – do tiết ADH lạc chỗ"
        ],
        answer: 0,
        explain: "Bảng 8.6 (tr. 180): Tăng đông, huyết khối gặp ở ung thư tuyến tụy, phổi... do sản phẩm khối bướu hoạt hóa đông máu. Sarcom sợi/buồng trứng → hạ đường huyết; Ung thư thận/mạch máu tiểu não/gan → đa hồng cầu."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Nhớ gen RAS",
        q: "Đột biến gen RAS (gặp ở ~20% ung thư) làm thay đổi trạng thái phân tử của protein RAS như thế nào để duy trì tín hiệu tăng sinh liên tục?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8 (tr. 170)",
        options: [
          "Cản trở quá trình thủy phân GTP, khiến RAS bị 'khóa' ở trạng thái hoạt động (gắn GTP) truyền tín hiệu liên tục qua RAF/MAP kinase và PI3K/AKT",
          "Làm RAS gắn chặt vĩnh viễn vào GDP nên bất hoạt hoàn toàn đường truyền tín hiệu",
          "Chuyển RAS vào nhân để thay thế chức năng của protein RB",
          "Kích hoạt caspase-3 phân hủy màng nhân tế bào"
        ],
        answer: 0,
        explain: "Trang 170: Protein RAS như công tắc phân tử chuyển đổi giữa hoạt động (gắn GTP) và không hoạt động (gắn GDP). Đột biến điểm cản trở thủy phân GTP → khóa RAS ở trạng thái hoạt động liên tục → truyền tín hiệu qua RAF/MAP kinase và PI3K/AKT."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng lâm sàng",
        q: "Một bệnh nhân ung thư phổi không có dấu hiệu di căn não hay di căn tuyến thượng thận nhưng nhập viện vì hạ natri máu nặng, cô đặc nước tiểu (hội chứng SIADH) và một bệnh nhân khác có hội chứng Cushing. Loại mô học ung thư phổi nào hay gây ra cả hai hội chứng cận ung này nhất?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8, Bảng 8.6 (tr. 180)",
        options: [
          "Ung thư phổi tế bào nhỏ (tiết ADH lạc chỗ và tiết ACTH/chất giống ACTH lạc chỗ)",
          "Ung thư phổi tế bào gai (chỉ gây tăng calci máu qua PTHrP)",
          "Bướu sụn phế quản lành tính (Chondroma)",
          "Hamartom phổi đơn thuần"
        ],
        answer: 0,
        explain: "Bảng 8.6 (tr. 180): Ung thư phổi tế bào nhỏ là nguyên nhân điển hình nhất của cả Hội chứng Cushing (tiết ACTH lạc chỗ) và SIADH (tiết ADH lạc chỗ). Còn tăng calci máu (PTHrP) gặp ở ung thư phổi tế bào gai."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích ca bệnh",
        q: "Một bệnh nhân u nguyên bào võng mạc (Retinoblastoma) có tiền sử gia đình (thể di truyền) khởi phát bướu sớm ở cả hai mắt, trong khi bệnh nhân thể lẻ tẻ thường chỉ bị ở một mắt và muộn hơn. Giả thuyết phân tử kinh điển nào giải thích chính xác sự khác biệt này?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8 (tr. 171)",
        options: [
          "Giả thuyết 'two-hit' của Knudson: tế bào cần mất chức năng của CẢ HAI alen RB mới sinh bướu; người di truyền đã mang sẵn 1 alen đột biến từ dòng mầm nên chỉ cần thêm 1 cú đánh soma",
          "Giả thuyết Warburg về đường phân hiếu khí tại tế bào võng mạc",
          "Do di truyền trội một alen RAS đột biến từ cha mẹ",
          "Do virus EBV gắn lên thụ thể CD21 ở võng mạc hai mắt"
        ],
        answer: 0,
        explain: "Trang 171: Giả thuyết 'two-hit' của Knudson đề xuất từ nghiên cứu bướu nguyên bào võng mạc: gen RB là gen đè nén bướu lặn ở mức độ tế bào, chỉ khi mất chức năng của cả hai alen RB thì điểm kiểm soát G1/S mới bị vô hiệu hóa."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Ghép thuốc đích",
        q: "Dựa vào Hình 8.21, nếu một khối u có đặc điểm nổi bật là biểu hiện quá mức protein chống chết BCL-2 (ví dụ lymphom nang chuyển vị t(14;18)), thuốc nhắm đích nào tấn công trực tiếp vào dấu ấn sinh học này?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8 (tr. 174, 179, Hình 8.21)",
        options: [
          "Chất đối kháng BCL-2 (phá vỡ cơ chế kháng lại apoptosis)",
          "Kháng thể đơn dòng kháng VEGF (bevacizumab)",
          "Kháng sinh điều trị H. pylori",
          "Chất ức chế enzym telomerase"
        ],
        answer: 0,
        explain: "Trang 174 & 179 (Hình 8.21): Chất đối kháng BCL-2 nhắm vào đặc điểm 'Chống lại sự chết tế bào' để khôi phục apoptosis; Bevacizumab nhắm vào 'Kích thích tân sinh mạch' (VEGF); HGF/c-Met nhắm vào 'Xâm lấn và di căn'."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích miễn dịch",
        q: "Tại sao hệ thống miễn dịch có thể nhận diện tế bào ung thư qua protein bình thường không đột biến như tyrosinase trong bướu hắc tố (melanom)?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8 (tr. 176)",
        options: [
          "Vì tyrosinase là 'protein biểu hiện quá mức' – bình thường có ở mức rất thấp hoặc mô đặc hiệu nhưng ở tế bào melanom lại biểu hiện ở mức độ rất cao nên bị nhận diện là kháng nguyên bướu",
          "Vì tyrosinase là protein có nguồn gốc hoàn toàn từ virus DNA HPV",
          "Vì tyrosinase chỉ sinh ra sau khi điều trị kháng thể kháng CTLA-4",
          "Vì tyrosinase làm thay thế toàn bộ phức hợp peptide–MHC trên màng tế bào"
        ],
        answer: 0,
        explain: "Trang 176: Ba nhóm kháng nguyên bướu gồm: (1) Tân kháng nguyên (từ đột biến gen); (2) Protein biểu hiện quá mức (bình thường nhưng biểu hiện mức rất cao, VD tyrosinase trong melanom); (3) Kháng nguyên virus (HPV, EBV)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phẫu thuật & GPB",
        q: "Trong lúc đang phẫu thuật cắt khối u vú hoặc u phổi, phẫu thuật viên cần biết ngay diện cắt đã sạch tế bào ác tính hay chưa để quyết định mở rộng phẫu trường ngay trên bàn mổ. Phương pháp chẩn đoán nào được chỉ định phù hợp nhất?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8 (tr. 181)",
        options: [
          "Sinh thiết lạnh (frozen section) trong lúc phẫu thuật",
          "Định lượng dấu ấn bướu CEA và CA-125 trong máu",
          "Nhuộm Von Kossa sau khi cố định mô 48 giờ trong formalin",
          "Chờ 2 tuần làm xét nghiệm hóa mô miễn dịch toàn bộ"
        ],
        answer: 0,
        explain: "Trang 181: Sinh thiết lạnh được áp dụng ngay trong phẫu thuật nhằm cung cấp chẩn đoán nhanh chóng, hỗ trợ quyết định điều trị ngay tại thời điểm can thiệp."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Dự đoán điều trị",
        q: "Khối u của một bệnh nhân được giải phẫu bệnh báo cáo mất chức năng cả hai alen BRCA1/BRCA2 (khiếm khuyết sửa chữa tái tổ hợp tương đồng). Theo Hình 8.21, nhóm thuốc đích nào nhắm vào 'Sự bất ổn và đột biến của bộ gen' đặc biệt có ý nghĩa trong bối cảnh này?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8 (tr. 178–179, Hình 8.21)",
        options: [
          "Chất ức chế PARP (cùng với chất ức chế MDM2 nhắm vào sự bất ổn bộ gen)",
          "Chất ức chế HGF/c-Met",
          "Kháng sinh tiêu diệt Helicobacter pylori",
          "Thuốc bổ sung yếu tố tăng trưởng EGF"
        ],
        answer: 0,
        explain: "Hình 8.21 (tr. 179): Chất ức chế MDM2 và PARP nhắm vào đặc điểm cốt lõi 'Sự bất ổn và đột biến của bộ gen' (đặc biệt hiệu quả ở u có khiếm khuyết BRCA1/2)."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Thái độ tầm soát",
        q: "Một người khỏe mạnh không triệu chứng đến xin xét nghiệm trọn bộ máu CA-125, CEA, CA 19-9, AFP để 'tầm soát phát hiện tất cả ung thư'. Bác sĩ tư vấn đúng nguyên tắc y học chứng cứ như thế nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8 (tr. 181–182)",
        options: [
          "Giải thích rõ các dấu ấn bướu máu này nhìn chung CHƯA đạt độ đặc hiệu và độ nhạy đủ để tầm soát ung thư đại trà ở cộng đồng (chủ yếu dùng theo dõi đáp ứng điều trị/tái phát); cần dùng các phương pháp tầm soát chuẩn (như PAP, nội soi...) và sinh thiết khi có tổn thương",
          "Khẳng định xét nghiệm CA 19-9 âm tính loại trừ 100% mọi loại ung thư trong cơ thể",
          "Khẳng định chỉ cần đo PSA ở cả nam và nữ để chẩn đoán xác định ung thư thay cho sinh thiết",
          "Khẳng định nếu CEA tăng nhẹ thì chắc chắn 100% đã di căn xa M1"
        ],
        answer: 0,
        explain: "Trang 181–182: Các dấu ấn bướu sử dụng chủ yếu để theo dõi đáp ứng điều trị hoặc phát hiện tái phát; nhìn chung chưa đạt độ đặc hiệu và nhạy đủ để tầm soát ung thư ở cộng đồng."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Thái độ miễn dịch",
        q: "Khi tư vấn sử dụng thuốc ức chế điểm kiểm soát miễn dịch (anti-PD-1 / anti-CTLA-4) cho bệnh nhân melanom hoặc ung thư phổi, thái độ cung cấp thông tin trung thực và khoa học dựa trên dữ liệu giáo trình là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8 (tr. 177)",
        options: [
          "Thuốc có thể đem lại đáp ứng ngoạn mục ở một số bệnh nhân melanom, ung thư phổi, bàng quang với tỷ lệ đáp ứng điều trị khoảng 10–30%, không phải mọi trường hợp đều đáp ứng",
          "Thuốc chữa khỏi 100% mọi loại ung thư ở giai đoạn muộn không ngoại lệ",
          "Thuốc hoạt động bằng cách tiêu diệt trực tiếp tất cả tế bào lympho T CD8+",
          "Thuốc thay thế hoàn toàn phẫu thuật ở tất cả bướu lành có vỏ bao"
        ],
        answer: 0,
        explain: "Trang 177: Liệu pháp ức chế điểm kiểm soát miễn dịch đã cho thấy hiệu quả ngoạn mục ở một số bệnh nhân melanom, ung thư phổi và bàng quang với tỷ lệ đáp ứng điều trị từ 10–30%."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu miễn dịch",
        q: "Trong trường hợp bệnh nhân có u nhỏ nằm ở đường mật ngoài gan gây tắc mật hoàn toàn, yếu tố nào làm bệnh lý này đe dọa tử vong dù kích thước u còn rất nhỏ?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 8 (tr. 179)",
        options: [
          "Vị trí giải phẫu của bướu (gây tắc nghẽn dòng chảy đường mật sống còn)",
          "Do bướu đường mật nhỏ luôn tiết erythropoietin gây đa hồng cầu",
          "Do bướu đường mật luôn gây giảm kali máu và kiềm chuyển hóa",
          "Vì bướu đường mật nhỏ luôn kích thích quá mức trục PD-1/PD-L1"
        ],
        answer: 0,
        explain: "Trang 179: Vị trí bướu quyết định mức độ nguy hiểm – ung thư đường mật dù kích thước nhỏ vẫn có thể gây tử vong do tắc nghẽn."
      }
    ]
  },

  // ========================================================================
  // BÀI 7: BỆNH HỌC PHÂN TỬ – RTK, KHUẾCH ĐẠI, ĐỘT BIẾN, GEN TỔ HỢP & BIỂU SINH
  // ========================================================================
  7: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Tự lượng giá 1" },
      { level: 1, ksa: "K", ksaLabel: "K1: Tự lượng giá 2" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ RTK domain" },
      { level: 2, ksa: "S", ksaLabel: "S2: Phân tích kháng thuốc" },
      { level: 2, ksa: "S", ksaLabel: "S2: Chọn thuốc TKI" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ vị trí NST" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu BCR::ABL" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu EML4::ALK" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ gen tổ hợp" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu biểu sinh" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu PTEN" },
      { level: 2, ksa: "S", ksaLabel: "S2: Chọn kháng thể" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Nhớ vị trí gen",
        q: "Theo Bài 9, gen KRAS và gen ERBB2 (HER2) lần lượt nằm trên những nhiễm sắc thể nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9 (tr. 185–186)",
        options: [
          "KRAS trên nhiễm sắc thể số 12; ERBB2 (HER2) trên nhiễm sắc thể số 17",
          "KRAS trên nhiễm sắc thể số 7; ERBB2 trên nhiễm sắc thể số 8",
          "KRAS trên nhiễm sắc thể số 9; ERBB2 trên nhiễm sắc thể số 22",
          "KRAS trên nhiễm sắc thể số 10; ERBB2 trên nhiễm sắc thể số 2"
        ],
        answer: 0,
        explain: "Trang 185–186: ERBB2 (HER2) nằm trên NST số 17; EGFR trên NST số 7; C-MYC trên NST số 8; PTEN trên NST số 10; KRAS trên NST số 12."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Nhớ codon KRAS",
        q: "Trong các bệnh ung thư, đột biến tăng chức năng của gen KRAS thường xảy ra phổ biến nhất tại hai vị trí bộ ba mã hóa (codon) nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9 (tr. 186)",
        options: [
          "Codon 12 và codon 13",
          "Exon 5 và exon 8",
          "Vị trí p16 và p21",
          "Vùng promoter cytosine NST 22"
        ],
        answer: 0,
        explain: "Trang 186: Trong các bệnh ung thư, đột biến gen KRAS thường gặp nhất tại hai bộ ba mã hóa 12 và 13 (codon 12 và 13)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu thụ thể nhân",
        q: "Ngoài các thụ thể bề mặt tế bào như RTK, estrogen thúc đẩy sự tăng sinh của tế bào biểu mô tuyến vú thông qua cơ chế truyền tín hiệu nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9 (tr. 185)",
        options: [
          "Kích thích trực tiếp thụ thể nhân tế bào tương ứng (ER – estrogen receptor)",
          "Gắn vào vùng cận màng của thụ thể HER2 ở phía ngoài màng bào tương",
          "Hoạt hóa chuyển vị t(9;22) tạo protein BCR::ABL",
          "Gắn vào thụ thể chết Fas để ức chế caspase-8"
        ],
        answer: 0,
        explain: "Trang 185: Phương thức khác của truyền tín hiệu tăng sinh là thông qua kích thích thụ thể nhân tế bào, ví dụ estrogen kích thích tế bào biểu mô tuyến vú qua thụ thể nhân ER."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng TKI",
        q: "Một bệnh nhân châu Á mắc ung thư phổi không tế bào nhỏ được giải trình tự gen phát hiện đột biến vùng nội bào gen EGFR (nhưng KHÔNG đột biến KRAS). Tại sao bác sĩ ưu tiên dùng thuốc TKI phân tử nhỏ đường uống hơn là dùng kháng thể đơn dòng gắn mặt ngoài EGFR?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9 (tr. 185–186)",
        options: [
          "Vì đột biến nằm ở vùng nội bào làm thụ thể tự hoạt hóa không cần phối tử EGF; các phân tử nhỏ TKI mới xuyên qua được màng tế bào để đến đúng vị trí đột biến vùng nội bào và ức chế men tyrosine kinase",
          "Vì kháng thể đơn dòng đi xuyên qua màng nhân tốt hơn TKI nhưng bị KRAS cản lại",
          "Vì TKI phân tử nhỏ có tác dụng cắt bỏ vùng ngoại bào của EGFR",
          "Vì bệnh nhân châu Á chỉ có gen EML4::ALK chứ không bao giờ có thụ thể EGFR"
        ],
        answer: 0,
        explain: "Trang 185–186: Đột biến vùng nội bào EGFR (~50% K phổi không tế bào nhỏ ở bệnh nhân châu Á) làm EGFR tự hoạt hóa không phụ thuộc phối tử ngoài màng → dùng phân tử nhỏ TKI đi qua màng tế bào đến đúng vị trí đột biến nội bào để ức chế."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Dự đoán kháng thuốc",
        q: "Bệnh nhân ung thư đại – trực tràng di căn có kết quả khuếch đại EGFR nhưng đồng thời xét nghiệm sinh học phân tử phát hiện mang đột biến KRAS ở codon 12. Nếu chỉ định thuốc kháng thể đơn dòng khóa vùng ngoại bào thụ thể EGFR cho bệnh nhân này thì hiệu quả lâm sàng sẽ ra sao?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9 (tr. 186)",
        options: [
          "Thất bại / kháng thuốc vì KRAS nằm ở hạ nguồn phía sau thụ thể đã tự hoạt hóa liên tục không còn phụ thuộc tín hiệu từ EGFR bề mặt",
          "Đáp ứng hoàn toàn 100% vì khóa EGFR sẽ tự động tắt được KRAS đột biến",
          "Chuyển KRAS thành gen đè nén bướu giống PTEN",
          "Tự động khôi phục chiều dài telomere của tế bào đại tràng"
        ],
        answer: 0,
        explain: "Trang 186: Đột biến tăng chức năng KRAS (codon 12/13) làm protein truyền tín hiệu trung gian này tự hoạt hóa không còn phụ thuộc thụ thể bề mặt → giải thích hiện tượng kháng lại các liệu pháp bất hoạt thụ thể bề mặt."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích chuyển vị",
        q: "So sánh cấu trúc phát sinh của hai gen tổ hợp BCR::ABL (trong CML) và EML4::ALK (trong ung thư phổi) trên bộ nhiễm sắc thể. Điểm tương đồng về cơ chế điều hòa phiên mã giữa hai gen tổ hợp này là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9 (tr. 186–187)",
        options: [
          "Đều ghép một gen đối tác (BCR hoặc EML4) đóng vai trò vùng khởi động mạnh vào gen kinase (ABL hoặc ALK), làm tăng mạnh phiên mã và hoạt tính tyrosine kinase thúc đẩy tăng sinh quá mức",
          "Đều phát sinh do chuyển vị giữa NST số 9 và NST số 22",
          "Đều làm im lặng hoàn toàn phiên mã của gen tyrosine kinase để bảo vệ tế bào",
          "Đều xảy ra bằng cơ chế methyl hóa cytosine mà không thay đổi vị trí vật lý trên NST"
        ],
        answer: 0,
        explain: "Trang 186–187: Tuy khác cơ chế NST (BCR::ABL do chuyển vị NST 9 và 22; EML4::ALK do đảo đoạn trên nhánh ngắn NST 2), cả hai đều biến gen đối tác (BCR / EML4) thành vùng khởi động mạnh thúc đẩy phiên mã gen kinase (ABL / ALK)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích biểu sinh",
        q: "Khi giải trình tự toàn bộ vùng mã hóa (exon) của gen BRCA1 và PTEN trên một mẫu mô ung thư không thấy bất kỳ đột biến thay đổi trình tự DNA nào, nhưng hóa mô miễn dịch vẫn hoàn toàn mất biểu hiện hai protein này. Cơ chế phân tử nào giải thích hiện tượng trên?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9 (tr. 187)",
        options: [
          "Thay đổi ngoại gen (biểu sinh): tăng methyl hóa quá mức các vị trí cytosine tại vùng khởi động (promoter) làm gen 'im lặng' không phiên mã mRNA",
          "Khuếch đại số bản sao của gen BRCA1 lên gấp 20 lần trên NST 17",
          "Tạo gen tổ hợp EWSR1::FLI1 làm phá hủy toàn bộ ribosome",
          "Đột biến tăng chức năng codon 12 của gen KRAS cắt đứt BRCA1"
        ],
        answer: 0,
        explain: "Trang 187: Thay đổi ngoại gen (biểu sinh) không làm thay đổi cấu trúc DNA của gen mà thường do tăng methyl hóa quá mức cytosine ở vùng khởi động làm gen 'im lặng', mất phiên mã mRNA → thiếu hụt protein (hay gặp ở BRCA1, PTEN)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Chẩn đoán phân tử",
        q: "Trong chẩn đoán các khối u mô mềm trẻ em hoặc u máu ác tính, bác sĩ giải phẫu bệnh phát hiện sự hiện diện của gen tổ hợp EWSR1::FLI1 trên mẫu mô sinh thiết xương đùi của một thiếu niên. Kết quả phân tử này giúp chẩn đoán xác định bệnh lý nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9 (tr. 187) & Bài 8 (tr. 146)",
        options: [
          "Sarcom Ewing (Ewing sarcoma – bướu xương ác tính tế bào tròn nhỏ ở trẻ em)",
          "Bệnh bạch cầu mạn dòng tủy (CML)",
          "Bệnh bạch cầu cấp tiền tủy bào (mang PML::RARA)",
          "Ung thư tuyến tiền liệt (mang TMPRSS2::ERG)"
        ],
        answer: 0,
        explain: "Trang 187: EWSR1::FLI1 là gen tổ hợp dấu ấn chẩn đoán đặc hiệu trong sarcom Ewing; PML::RARA (bạch cầu cấp dòng tủy); TMPRSS2::ERG (tuyến tiền liệt); CCDC6::RET (tuyến giáp)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Suy luận chức năng domain",
        q: "Nếu một đột biến làm mất chức năng của 'vùng cận màng' trên thụ thể Tyrosine Kinase (RTK) nhưng giữ nguyên vùng ngoại bào và vùng nội bào, hệ quả sinh học nào nhiều khả năng sẽ xảy ra với thụ thể này?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9 (tr. 185)",
        options: [
          "Thụ thể mất cơ chế tự kìm hãm ở trạng thái nghỉ khi chưa có phối tử → dễ bị hoạt hóa tự phát gây tăng sinh bất thường",
          "Thụ thể không thể gắn phối tử EGF ngay cả khi nồng độ EGF rất cao",
          "Thụ thể rời khỏi màng tế bào đi vào nhân thay cho thụ thể ER",
          "Thụ thể kích hoạt trực tiếp PTEN để ức chế hoàn toàn phiên mã"
        ],
        answer: 0,
        explain: "Trang 185: Trong 4 domain của RTK, vùng cận màng có chức năng giữ cho thụ thể ở trạng thái KHÔNG hoạt động khi chưa có phối tử gắn lên. Mất cơ chế kìm hãm này sẽ khiến thụ thể dễ tự hoạt hóa liên tục."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Thái độ xét nghiệm",
        q: "Trong thực hành điều trị đích ung thư hiện đại (như CML có BCR::ABL, K vú có khuếch đại HER2, hay K phổi có đột biến EGFR), tại sao bác sĩ giải phẫu bệnh và lâm sàng bắt buộc phải phối hợp xét nghiệm sinh học phân tử trước khi kê thuốc?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9 (tr. 185–187)",
        options: [
          "Vì các biến đổi phân tử vừa là dấu ấn chẩn đoán xác định bệnh, vừa quyết định đúng nhóm thuốc đích nhạy cảm (kháng thể đơn dòng vs TKI) và tránh kê thuốc vô hiệu nếu có đột biến kháng như KRAS",
          "Vì xét nghiệm sinh học phân tử hoàn toàn thay thế được việc quan sát mô học khối u",
          "Vì tất cả mọi bệnh nhân ung thư phổi đều dùng chung một loại thuốc TKI bất kể có đột biến EGFR hay không",
          "Vì xét nghiệm sinh học phân tử chỉ dùng để phát hiện virus HTLV-1"
        ],
        answer: 0,
        explain: "Trang 185–187: Xác định khuếch đại HER2 (chọn kháng thể đơn dòng), đột biến nội bào EGFR (chọn TKI), đột biến KRAS (tránh thuốc kháng thụ thể bề mặt) hay gen tổ hợp BCR::ABL (chẩn đoán CML & dùng TKI) là nền tảng của điều trị chính xác."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Thái độ giải thích",
        q: "Một bệnh nhân thắc mắc vì sao tế bào bình thường nuôi trong đĩa thí nghiệm lại chết nhanh chóng nếu tách rời, còn tế bào ung thư lại phân chia liên tục. Cách giải thích chuẩn xác nhất theo Bài 9 là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9 (tr. 184)",
        options: [
          "Tế bào bình thường phụ thuộc tín hiệu tương tác từ môi trường mô xung quanh để sống sót và phân chia; tế bào ung thư tích lũy đột biến gen làm mất kiểm soát cả hai quá trình tăng sinh và chết theo chương trình nên khởi đầu quá trình 'bất tử'",
          "Tế bào bình thường không có thụ thể bề mặt nào trên màng tế bào",
          "Tế bào ung thư không cần bất kỳ năng lượng hay chất dinh dưỡng nào để tồn tại",
          "Vì tế bào bình thường luôn bị cơ thể chủ tiết thuốc TKI tiêu diệt"
        ],
        answer: 0,
        explain: "Trang 184: Tế bào bình thường nuôi trên đĩa cấy không có tương tác tín hiệu từ tế bào khác sẽ nhanh chóng chết sau vài chu kỳ phân chia; tế bào ung thư tích lũy đột biến mất kiểm soát tăng sinh và apoptosis."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu khuếch đại",
        q: "Cơ chế nào giải thích hiện tượng tăng sinh mất kiểm soát ở khoảng 20% trường hợp ung thư vú có bất thường gen ERBB2 (HER2)?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9 (tr. 185)",
        options: [
          "Khuếch đại gen ERBB2 trên NST 17 làm tăng số bản sao gen → tăng mRNA và biểu hiện quá mức thụ thể HER2 trên bề mặt tế bào, tiếp nhận thông tin tăng sinh vượt trội",
          "Chuyển vị gen ERBB2 với gen BCR trên NST 22 tạo gen tổ hợp",
          "Đột biến mất chức năng ERBB2 ở exon 5–8 làm giảm số lượng thụ thể HER2",
          "Methyl hóa quá mức vùng khởi động ERBB2 làm gen bị im lặng hoàn toàn"
        ],
        answer: 0,
        explain: "Trang 185: Khuếch đại gen ERBB2 (HER2) trên NST 17 (khoảng 20% K vú) làm tăng bản sao gen → tăng mRNA → biểu hiện quá mức thụ thể HER2 bề mặt."
      }
    ]
  },

  // ========================================================================
  // BÀI 8: RỐI LOẠN CHẾT TẾ BÀO THEO CHƯƠNG TRÌNH & ĐỘT BIẾN TP53
  // ========================================================================
  8: {
    baseTags: [
      { level: 2, ksa: "S", ksaLabel: "S2: Tự lượng giá 3" },
      { level: 2, ksa: "S", ksaLabel: "S2: Tự lượng giá 4" },
      { level: 2, ksa: "K", ksaLabel: "K2: Tự lượng giá 5" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ phôi thai" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ ngoại sinh" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu P21 & BAX" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu MDM2" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ exon 5–8" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu bán hủy P53" },
      { level: 2, ksa: "S", ksaLabel: "S2: Phân tích Hình 9.2" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ Caspase 3,6,7" },
      { level: 2, ksa: "S", ksaLabel: "S2: Đa đột biến" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Nhớ vị trí NST",
        q: "Gen đè nén bướu TP53 ('thần hộ mệnh của bộ gen') nằm trên nhiễm sắc thể số mấy, và có thể bị mất chức năng do hai cơ chế di truyền nào?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9 (tr. 188, 190)",
        options: [
          "Nhiễm sắc thể số 17; mất chức năng do đột biến gen hoặc mất đoạn nhiễm sắc thể số 17",
          "Nhiễm sắc thể số 12; mất chức năng do khuếch đại số bản sao",
          "Nhiễm sắc thể số 7; mất chức năng do chuyển vị với NST số 9",
          "Nhiễm sắc thể số 2; mất chức năng do đảo đoạn nhánh ngắn"
        ],
        answer: 0,
        explain: "Trang 188 & 190: Khi gen TP53 mất chức năng do bị đột biến gen hay do mất đoạn nhiễm sắc thể số 17 có chứa gen này, các tế bào mang nhiều DNA tổn thương vẫn tiếp tục được phân chia."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Nhớ bệnh học Caspase",
        q: "Trong Bài 9, đột biến gen mã hóa hai enzym caspase nào đã được ghi nhận trong ung thư dạ dày, ung thư phổi và ung thư đại tràng?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9 (tr. 188)",
        options: [
          "Caspase 3 và Caspase 8",
          "Caspase 1 và Caspase 2",
          "Caspase 11 và Caspase 12",
          "Chỉ riêng Procaspase 9"
        ],
        answer: 0,
        explain: "Trang 188: Đột biến của gen mã hóa caspase 3 và caspase 8 đã được ghi nhận trong một số loại ung thư như ung thư dạ dày, ung thư phổi và ung thư đại tràng."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Nhớ tỷ lệ đột biến",
        q: "Theo Bài 9, tỷ lệ bệnh nhân mang đột biến gen TP53 có thể chiếm đến gần bao nhiêu phần trăm trong các bệnh ung thư như buồng trứng, đại – trực tràng, đầu – cổ?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9 (tr. 188)",
        options: [
          "Gần phân nửa (~50%) số bệnh nhân",
          "Chỉ khoảng 1–2% số bệnh nhân",
          "Chính xác 100% ở mọi loại u lành và u ác",
          "Khoảng 5% số bệnh nhân"
        ],
        answer: 0,
        explain: "Trang 188: TP53 là một trong những gen thường bị đột biến nhất, có thể chiếm tới gần phân nửa số bệnh nhân như trong ung thư buồng trứng, ung thư đại – trực tràng, ung thư đầu – cổ."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng HMMD",
        q: "Khi nhuộm hóa mô miễn dịch tìm protein P53 trên mô ung thư buồng trứng hoặc đại tràng, bác sĩ thấy nhân tế bào ung thư bắt màu dương tính RẤT MẠNH và lan tỏa so với mô lành gần như âm tính. Hiện tượng nghịch lý này phù hợp với cơ chế nào trong Bài 9?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9 (tr. 188)",
        options: [
          "Protein P53 bình thường có thời gian bán hủy rất ngắn nhờ MDM2 phân hủy; còn protein P53 ĐỘT BIẾN có thời gian bán hủy KÉO DÀI HƠN ĐÁNG KỂ nên tích tụ đậm trong nhân dù đã mất chức năng bảo vệ",
          "Do tế bào ung thư kích hoạt tối đa chức năng bảo vệ của P53 bình thường để tự sát",
          "Do P53 gắn vào thụ thể FasL làm tăng phân cắt procaspase 8",
          "Do hóa mô miễn dịch chỉ nhuộm được gen KRAS chứ không nhuộm được P53"
        ],
        answer: 0,
        explain: "Trang 188: Bình thường P53 có thời gian bán hủy rất ngắn do gắn MDM2 phân hủy qua ubiquitin-proteasome. Ngược lại, protein P53 đột biến có thời gian bán hủy trong tế bào kéo dài hơn đáng kể nên tích tụ nhiều và cản trở P53 bình thường."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích đích MDM2",
        q: "Một khối u vẫn giữ gen TP53 nguyên vẹn (không đột biến, wild-type TP53) nhưng bị mất chức năng P53 do tăng biểu hiện quá mức MDM2. Dựa trên Hình 9.2, thuốc điều trị đích nào hợp lý nhất cho bệnh nhân này?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9 (tr. 188–189, Hình 9.2)",
        options: [
          "Chất ức chế hoạt động của MDM2 (giúp giải phóng P53 lành khỏi sự phân hủy để khôi phục 4 đáp ứng bảo vệ)",
          "Thuốc kích thích biểu hiện thêm MDM2 để đẩy nhanh phân hủy P53",
          "Kháng thể đơn dòng ức chế trực tiếp phức hợp P21/CIP1",
          "Thuốc ức chế sự giải phóng cytochrome c khỏi màng ty thể"
        ],
        answer: 0,
        explain: "Trang 188–189 & Hình 9.2: Khi TP53 chưa đột biến nhưng bị vô hiệu hóa do tăng MDM2, chiến lược dùng chất ức chế hoạt động MDM2 giúp giải phóng P53 hoạt động trở lại (ngừng chu kỳ, sửa DNA, apoptosis, lão hóa)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích cơ chế",
        q: "Trên một mẫu mô ung thư đại tràng, kết quả phân tích protein cho thấy nồng độ procaspase 3 tăng rất cao so với mô lành kế cận, nhưng tỷ lệ tế bào chết theo chương trình lại rất thấp. Giải thích chính xác nhất là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9 (tr. 188, 191)",
        options: [
          "Procaspase 3 là tiền enzym KHÔNG có hoạt tính giết chết tế bào; tế bào ung thư tăng biểu hiện procaspase 3 nhưng bị tắc nghẽn không chuyển đổi được thành caspase 3 hoạt động",
          "Procaspase 3 chỉ hoạt động ở con đường hoại tử chứ không tham gia apoptosis",
          "Nồng độ procaspase 3 cao làm kích hoạt trực tiếp telomerase kéo dài telomere",
          "Caspase 3 chỉ hoạt động trong quá trình phôi thai trước ngày thứ 45"
        ],
        answer: 0,
        explain: "Trang 188: Hiện tượng biểu hiện quá mức procaspase 3 (không có hoạt tính giết chết tế bào), nhưng không chuyển qua được trạng thái caspase 3 hoạt động gặp trong hầu hết các loại ung thư."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích Hình 9.2",
        q: "Bốn tín hiệu stress nội/ngoại bào nào trên Hình 9.2 trực tiếp kích hoạt con đường P53 để khởi phát bốn kết cục (ngừng chu kỳ, sửa chữa DNA, chết theo chương trình, lão hóa)?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9, Hình 9.2 (tr. 189)",
        options: [
          "Tổn thương DNA, Hoạt hóa Oncogene, Thiếu oxy và Telomere bị rút ngắn",
          "Tăng đường huyết, Ngộ độc CO, Nhiễm H. pylori và Thiếu vitamin D",
          "Khuếch đại HER2, Tăng E-cadherin, Giảm lactate và Tăng bạch cầu trung tính",
          "Hoạt hóa caspase 8, Giải phóng TRAIL, Giảm BAX và Tăng BCL-2"
        ],
        answer: 0,
        explain: "Hình 9.2 (tr. 189): Bốn tác nhân đầu vào kích hoạt P53 gồm Tổn thương DNA, Hoạt hóa Oncogene, Thiếu oxy và Telomere bị rút ngắn."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích chu kỳ",
        q: "Khi một tế bào đang nhân đôi gặp tổn thương DNA ở mức độ còn CÓ THỂ CHỈNH SỬA, protein P53 sẽ tác động vào điểm kiểm soát nào của chu kỳ tế bào để ngăn đột biến truyền sang tế bào con?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9 (tr. 188)",
        options: [
          "Thông qua phức hợp P21/CIP1 kéo dài giai đoạn G1 trước khi tế bào bước tiếp vào giai đoạn S (sao chép DNA)",
          "Thông qua phức hợp Cyclin D–CDK4 đẩy nhanh tế bào vượt qua pha G1 vào pha S",
          "Thông qua BAX đẩy tế bào vào pha phân bào nguyên nhiễm M ngay lập tức",
          "Thông qua MDM2 phân hủy toàn bộ DNA trong nhân"
        ],
        answer: 0,
        explain: "Trang 188: Các tế bào có tổn thương DNA ở mức độ có thể chỉnh sửa sẽ được P53 (qua P21/CIP1) kéo dài giai đoạn G1 trước khi tiếp tục sang giai đoạn S để sửa chữa DNA."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Chẩn đoán gen",
        q: "Khi thiết kế xét nghiệm giải trình tự DNA mục tiêu (targeted NGS) để sàng lọc đột biến mất chức năng phổ biến nhất của gen TP53 trên mẫu mô ung thư đầu – cổ, vùng nào bắt buộc phải được giải trình tự ưu tiên nhất?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9 (tr. 188)",
        options: [
          "4 exon từ exon 5 đến exon 8 của gen TP53",
          "Vùng intron 1 và promoter của gen EML4",
          "Chỉ riêng codon 12 và codon 13 trên NST 12",
          "Đoạn lặp telomere ở đầu mút NST 22"
        ],
        answer: 0,
        explain: "Trang 188: Các đột biến mất chức năng của gen TP53 chủ yếu xảy ra trên 4 exon, từ exon 5 đến exon 8."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Thái độ điều trị đích",
        q: "Vì sao dù đã hiểu rõ từng con đường phân tử (như HER2, EGFR, BCR::ABL, P53, Caspase), việc điều trị ung thư bằng cách nhắm vào các đích phân tử trên thực tế lâm sàng vẫn còn rất phức tạp?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9 (tr. 189)",
        options: [
          "Vì khảo sát gen tế bào ung thư thường phát hiện CÙNG LÚC nhiều gen bị đột biến phối hợp trên nhiều con đường (tăng sinh, ức chế, apoptosis, biểu sinh) chứ không chỉ một đột biến đơn lẻ",
          "Vì các thuốc phân tử nhỏ TKI không thể đi qua màng tế bào",
          "Vì gen TP53 đột biến tự động biến mất khi khối u đạt kích thước > 2 mm",
          "Vì tế bào ung thư chỉ chết theo con đường hoại tử chứ không bao giờ đáp ứng với thuốc đích"
        ],
        answer: 0,
        explain: "Trang 189: Thực tế khảo sát gen của tế bào ung thư thường phát hiện cùng lúc nhiều gen bị đột biến, gợi ý rằng việc điều trị ung thư bằng cách nhắm các đích phân tử vẫn còn rất phức tạp."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Tư vấn bệnh nhân",
        q: "Một người dân lo lắng hỏi tại sao tế bào bình thường cũng có quá trình 'chết tế bào' (apoptosis) – phải chăng chết tế bào luôn là bệnh lý xấu? Cách giải thích khoa học và dễ hiểu nhất dựa trên Bài 9 là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9 (tr. 187)",
        options: [
          "Hoại tử mới là chết tế bào bệnh lý gây vỡ màng và viêm; ngược lại chết tế bào theo chương trình (apoptosis) là cơ chế sinh lý thiết yếu giúp tạo hình cơ quan phôi thai (tách khe ngón tay/chân từ ngày 45), loại bỏ tế bào thừa/hư hại và giữ cân bằng mô trưởng thành",
          "Apoptosis chỉ xảy ra ở bệnh nhân ung thư giai đoạn cuối chứ không bao giờ có ở người khỏe mạnh",
          "Apoptosis là hiện tượng nổ tung màng tế bào giúp kích thích phản ứng viêm có lợi",
          "Cả hoại tử và apoptosis đều giúp hình thành khe ngón tay bằng cách gây áp-xe phôi thai"
        ],
        answer: 0,
        explain: "Trang 187: Apoptosis được điều khiển chặt chẽ, không tổn hại mô quanh, giữ vai trò thiết yếu tạo khe ngón tay/bàn chân (từ ngày 45 phôi), loại bỏ neuron thừa và cân bằng tăng sinh tế bào ở người trưởng thành."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu so sánh",
        q: "Trong hai con đường hoạt hóa apoptosis, phân tử trung gian khởi phát dòng thác của con đường nội sinh (ty thể) và con đường ngoại sinh (thụ thể chết) lần lượt là gì?",
        source: "Giải phẫu bệnh đại cương YDS – Bài 9 (tr. 188)",
        options: [
          "Con đường nội sinh: Cytochrome c hoạt hóa Caspase 9; Con đường ngoại sinh: Caspase 8 hoặc Caspase 10",
          "Con đường nội sinh: Caspase 8 và 10; Con đường ngoại sinh: Cytochrome c và Caspase 9",
          "Cả hai con đường đều khởi phát trực tiếp bởi Procaspase 3 mà không cần Caspase 8 hay 9",
          "Con đường nội sinh: MDM2; Con đường ngoại sinh: P21/CIP1"
        ],
        answer: 0,
        explain: "Trang 188: Con đường ngoại sinh (TNFα, FasL, TRAIL) hoạt hóa caspase 8 và 10 → caspase 3, 6, 7. Con đường nội sinh (BAX, BAK) phóng thích cytochrome c → hoạt hóa caspase 9 → caspase 3, 6, 7."
      }
    ]
  }
};
