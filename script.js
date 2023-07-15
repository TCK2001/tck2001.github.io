window.addEventListener('DOMContentLoaded', function() {
    var accordion = document.querySelector('.accordion');
    accordion.style.display = 'none';
  });
  
  function toggleAccordion(index) {
    var panel = document.getElementsByClassName('accordion-panel')[index];
    panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
  }
  
  function toggleMenu() {
    var accordion = document.querySelector('.accordion');
    if (accordion.style.display === 'none') {
      accordion.style.display = 'block';
    } else {
      accordion.style.display = 'none';
    }
  }
  //

  var randomProblem;

// 문제 출제
function generateProblem() {
  // 이전에 출제된 문제와 중복되지 않도록 문제 목록에서 제거
  var availableProblems = problems.filter(function(problem) {
    return problem !== randomProblem;
  });

  // 문제 목록에서 랜덤하게 선택
  randomProblem = availableProblems[Math.floor(Math.random() * availableProblems.length)];

  // 문제 출력
  var problemElement = document.getElementById("problem");
  problemElement.textContent = randomProblem.question;
}

function checkAnswer() {
  var answerInput = document.getElementById("answer-input").value;
  var resultElement = document.getElementById("result");

  if (!resultElement) {
    console.error("결과 요소를 찾을 수 없습니다.");
    return;
  }

  if (randomProblem && randomProblem.answer) {
      // console.log("answer ",answerInput)
      // console.log("result", resultElement.answer)
      if (randomProblem.answer.includes(answerInput)) {
        resultElement.textContent = "정답!";
      } else {
        resultElement.textContent = "다시 생각해봐.";
      }
    }

  setTimeout(function() {
    resultElement.textContent = "";
  }, 2000);
}
