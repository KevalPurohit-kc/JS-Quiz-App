const questions = [
  {
    question: "JS ma typeof null shu return kare?",
    options: ["null", "undefined", "object", "number"],
    answer: "object",
  },
  {
    question: "const thi variable shu thay?",
    options: ["Change thay", "Change na thay", "Delete thay", "undefined thay"],
    answer: "Change na thay",
  },
  {
    question: "console.log(1 + '2') shu print karse?",
    options: ["3", "12", "Error", "undefined"],
    answer: "12",
  },
  {
    question: "What will console.log(2 - '1') print?",
    options: ["1", "21", "Error", "NaN"],
    answer: "1"
  },
  {
   question: "What will console.log(1 + '2') print?",
   options: ["3", "12", "Error", "undefined"],
   answer: "12"
 },
  {
    question: "What will console.log(typeof []) print?",
    options: ["array", "object", "null", "undefined"],
    answer: "object"
  },
  {
    question: "Can you reassign a value to a variable declared with 'const'?",
    options: ["Yes", "No", "Only inside a loop", "Depends on strict mode"],
    answer: "No"
  },
  {
    question: "What will console.log(3 == '3') and console.log(3 === '3') return?",
    options: ["true, true", "false, false", "true, false", "false, true"],
    answer: "true, false"
  }
];
let currentIndex = 0;
let score = 0;
let next = document.querySelector("#next-btn");
function loadQuestion() {
  const q = questions[currentIndex];
  document.getElementById("question").textContent = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.style.padding = "10px 20px";
    btn.style.backgroundColor = "yellow"
    btn.textContent = opt;
    optionsDiv.appendChild(btn);
    btn.addEventListener("click", function (event) {
      next.style.display = "block";
      if (event.target.textContent === questions[currentIndex].answer) {
        
          score++;
          document.querySelector("#score").textContent = score;
       
        
      } else {
        document.querySelector("#rightanw").textContent =
          "Right answer :" + questions[currentIndex].answer;
        next.addEventListener("click", () => {
          document.querySelector("#score").textContent = score;
        });
      }
    });
  });
}

loadQuestion();
next.addEventListener("click", () => {
  currentIndex++;
  loadQuestion();
  next.style.display = "none";
  document.querySelector("#rightanw").textContent = "";
});
