// # import question từ folder data
import questions from "./Data/question.js";

// # lấy ra các elements
const questionElements = document.querySelector("#question");
const answerBtn = document.querySelector("#answer-btns");
const nextBtn = document.querySelector("#next-btn");

// # khởi tạo biến điểm và câu hỏi hiện tại
let currentQuestionIndex = 0;
let score = 0;

// # hàm bắt đầu chạy chương trình
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next Question";
  showQuestion();
}

// # hàm hiển thị câu hỏi và các đáp án
function showQuestion() {
  resetData();
  let currQuestion = questions[currentQuestionIndex];
  let questionNumbers = currentQuestionIndex + 1;
  questionElements.innerHTML = questionNumbers + ". " + currQuestion.question;

  currQuestion.answers.forEach((answer) => {
    const btn = document.createElement("button");
    btn.innerHTML = answer.text;
    btn.classList.add("btn");
    answerBtn.appendChild(btn);

    // # xử lý sự kiện
    if (answer.isCorrect) {
      btn.dataset.isCorrect = answer.isCorrect;
    }
    btn.addEventListener("click", chooseAnswer);
  });
}

// # hàm xử lý xóa các đáp án trước đó
function resetData() {
  nextBtn.style.display = "none";
  while (answerBtn.firstChild) {
    answerBtn.removeChild(answerBtn.firstChild);
  }
}

// # hàm xử lý kết quả lựa chọn đáp án
function chooseAnswer(e) {
  const chooseBtn = e.target;
  const isCorrect = chooseBtn.dataset.isCorrect === "true";
  // # xử lý điều kiện (đúng-sai) và thêm class
  if (isCorrect) {
    chooseBtn.classList.add("correct");
    score++;
  } else {
    chooseBtn.classList.add("incorrect");
  }

  // # vô hiệu hóa các nút trả lời và đánh dấu câu trả lời đúng
  Array.from(answerBtn.children).forEach((btn) => {
    btn.dataset.isCorrect === "true"
      ? btn.classList.add("correct")
      : (btn.disabled = true);
  });

  // # hiển thị nút tiếp theo
  nextBtn.style.display = "block";
}

// #  Lắng nghe sự kiện "click" trên nút Next và xử lý điều kiện
nextBtn.addEventListener("click", () => {
  currentQuestionIndex < questions.length ? handleNextBtn() : startQuiz();
});

// # Hàm xử lý khi người dùng nhấn nút Next để chuyển sang câu hỏi tiếp theo.
function handleNextBtn() {
  currentQuestionIndex++;
  currentQuestionIndex < questions.length ? showQuestion() : showScore();
}

// # Hàm hiển thị kết quả khi không còn câu hỏi nào để làm.
function showScore() {
  resetData();
  questionElements.innerHTML = `Kết quả của bạn là: ${score} / ${questions.length} câu`;
  nextBtn.innerHTML = "Restart Quiz";
  nextBtn.style.display = "block";
  saveData();
}

// # Hàm lưu dữ liệu vào localStorage
function saveData() {
  // Lưu điểm số dưới dạng số nguyên
  localStorage.setItem("score", score);

  // Lưu các câu trả lời (nếu có) dưới dạng JSON
  localStorage.setItem("answers", JSON.stringify(answers));
}

// # Hàm hiển thị dữ liệu lưu trong localStorage
function showData() {
  // Lấy điểm số đã lưu
  const savedScores = localStorage.getItem("score");
  // Lấy các câu trả lời đã lưu
  const savedAnswers = JSON.parse(localStorage.getItem("answers"));

  // Kiểm tra nếu có dữ liệu lưu trữ
  if (savedScores !== null && savedAnswers !== null) {
    // Phục hồi điểm số từ localStorage (chuyển thành kiểu số)
    score = parseInt(savedScores, 10);

    // Phục hồi câu trả lời từ localStorage (mảng các câu trả lời)
    answers = savedAnswers;

    // Hiển thị kết quả đã lưu (điểm số và các câu trả lời)
    showScore();
  } else {
    // Nếu không có dữ liệu nào, có thể hiển thị thông báo không có dữ liệu lưu
    console.log("No saved data found.");
  }
}

// # callback chạy chương trình
startQuiz();

// ------------------------ Bonus --------------------------------
const start = document.querySelector(".start");
const app = document.querySelector(".app");

// Lắng nghe sự kiện click trên body
document.body.addEventListener("click", (e) => {
  // Kiểm tra nếu người dùng không nhấn vào phần tử app hoặc start
  if (!app.contains(e.target) && e.target !== start) {
    // Đóng phần tử app nếu người dùng nhấn ở ngoài app
    app.style.display = "none";
    start.style.display = "block"; // Hiển thị lại nút start
  }
});

// Lắng nghe sự kiện click vào nút start
start.addEventListener("click", (e) => {
  e.stopPropagation(); // Ngừng sự kiện để không bị bắt bởi sự kiện click trên body
  // Ẩn nút start và hiển thị app để bắt đầu quiz
  app.style.display = "block";
  start.style.display = "none";
  startQuiz(); // Hàm này sẽ bắt đầu quiz
});
