// # tạo câu hỏi và câu trả lời
const questions = [
  {
    question: "Cái gì càng lấy càng ít?",
    answers: [
      { text: "Tiền", isCorrect: false },
      { text: "Thời gian", isCorrect: true },
      { text: "Nước", isCorrect: false },
      { text: "Sự chú ý", isCorrect: false },
    ],
  },
  {
    question: "Cái gì có thể đi lên nhưng không bao giờ đi xuống?",
    answers: [
      { text: "Tuổi tác", isCorrect: true },
      { text: "Cầu thang", isCorrect: false },
      { text: "Mặt trời", isCorrect: false },
      { text: "Hành lý", isCorrect: false },
    ],
  },
  {
    question: "Con gì sinh ra đã có đuôi nhưng không biết quay lại?",
    answers: [
      { text: "Cá", isCorrect: false },
      { text: "Hổ", isCorrect: false },
      { text: "Con lươn", isCorrect: false },
      { text: "Con số 9", isCorrect: true },
    ],
  },
  {
    question: "Cái gì càng chia sẻ càng nhiều?",
    answers: [
      { text: "Niềm vui", isCorrect: true },
      { text: "Nỗi buồn", isCorrect: false },
      { text: "Tiền", isCorrect: false },
      { text: "Thức ăn", isCorrect: false },
    ],
  },
  {
    question: "Con gì vừa có cánh, vừa không thể bay?",
    answers: [
      { text: "Con chim cánh cụt", isCorrect: true },
      { text: "Con gà", isCorrect: false },
      { text: "Con dơi", isCorrect: false },
      { text: "Con vịt", isCorrect: false },
    ],
  },
  {
    question: "Cái gì của bạn, nhưng người khác sử dụng nhiều hơn bạn?",
    answers: [
      { text: "Giày", isCorrect: false },
      { text: "Tên của bạn", isCorrect: true },
      { text: "Mũ", isCorrect: false },
      { text: "Bút", isCorrect: false },
    ],
  },
  {
    question: "Cái gì không bao giờ được sờ vào mà vẫn có thể làm được?",
    answers: [
      { text: "Nước", isCorrect: false },
      { text: "Nhạc", isCorrect: true },
      { text: "Cảm xúc", isCorrect: false },
      { text: "Ánh sáng", isCorrect: false },
    ],
  },
  {
    question: "Có một con sông, không có nước, con gì sống ở đó?",
    answers: [
      { text: "Con cá", isCorrect: false },
      { text: "Con đỉa", isCorrect: false },
      { text: "Con đường", isCorrect: true },
      { text: "Con cua", isCorrect: false },
    ],
  },
  {
    question: "Cái gì sinh ra không cần học mà lại biết đi?",
    answers: [
      { text: "Con em bé", isCorrect: false },
      { text: "Con rùa", isCorrect: false },
      { text: "Bàn chân", isCorrect: true },
      { text: "Con người", isCorrect: false },
    ],
  },
  {
    question: "Cái gì luôn đi theo bạn nhưng bạn không thể thấy nó?",
    answers: [
      { text: "Bóng của bạn", isCorrect: false },
      { text: "Thời gian", isCorrect: false },
      { text: "Cái bóng của tâm hồn", isCorrect: true },
      { text: "Nỗi lo", isCorrect: false },
    ],
  },
  {
    question: "Cái gì bạn phải làm trước khi ăn?",
    answers: [
      { text: "Mua đồ ăn", isCorrect: false },
      { text: "Nấu ăn", isCorrect: false },
      { text: "Đói bụng", isCorrect: false },
      { text: "Rửa tay", isCorrect: true },
    ],
  },
  {
    question:
      "Nếu bạn có 5 quả táo và lấy đi 3 quả, bạn sẽ còn lại bao nhiêu quả?",
    answers: [
      { text: "2 quả", isCorrect: false },
      { text: "3 quả", isCorrect: false },
      { text: "5 quả", isCorrect: true },
      { text: "0 quả", isCorrect: false },
    ],
  },
  {
    question: "Cái gì dễ dàng được chia nhưng lại khó giữ?",
    answers: [
      { text: "Lòng tin", isCorrect: true },
      { text: "Tiền bạc", isCorrect: false },
      { text: "Tình yêu", isCorrect: false },
      { text: "Thông tin", isCorrect: false },
    ],
  },
  {
    question: "Con gì có thể nói mà không có miệng?",
    answers: [
      { text: "Con chim", isCorrect: false },
      { text: "Con echo (tiếng vang)", isCorrect: true },
      { text: "Con ma", isCorrect: false },
      { text: "Con người", isCorrect: false },
    ],
  },
  {
    question: "Cái gì có một đầu, hai tay, nhưng không có chân?",
    answers: [
      { text: "Con người", isCorrect: false },
      { text: "Cái ghế", isCorrect: false },
      { text: "Cái áo", isCorrect: true },
      { text: "Cái bàn", isCorrect: false },
    ],
  },
  {
    question: "Cái gì càng xài càng ít, càng ít càng quý?",
    answers: [
      { text: "Tiền", isCorrect: false },
      { text: "Nước", isCorrect: false },
      { text: "Thời gian", isCorrect: true },
      { text: "Tình yêu", isCorrect: false },
    ],
  },
  {
    question: "Cái gì có thể làm được khi không có tay?",
    answers: [
      { text: "Vẽ", isCorrect: false },
      { text: "Lái xe", isCorrect: false },
      { text: "Đọc sách", isCorrect: false },
      { text: "Đánh răng", isCorrect: true },
    ],
  },
  {
    question: "Cái gì có thể cười mà không cần miệng?",
    answers: [
      { text: "Con chó", isCorrect: false },
      { text: "Con người", isCorrect: false },
      { text: "Bức tranh", isCorrect: true },
      { text: "Ánh mặt trời", isCorrect: false },
    ],
  },
  {
    question:
      "Nếu bạn có một chiếc bút và chiếc bút của bạn biến mất, bạn có thể lấy gì để viết?",
    answers: [
      { text: "Một cây bút khác", isCorrect: true },
      { text: "Một chiếc bút không còn mực", isCorrect: false },
      { text: "Bút chì", isCorrect: false },
      { text: "Máy tính", isCorrect: false },
    ],
  },
  {
    question: "Cái gì có thể ở trong hộp nhưng không bao giờ bị kẹt?",
    answers: [
      { text: "Bưu kiện", isCorrect: false },
      { text: "Lưới điện", isCorrect: false },
      { text: "Khí", isCorrect: true },
      { text: "Chìa khóa", isCorrect: false },
    ],
  },
];

// Export câu hỏi ra ngoài module
export default questions;
