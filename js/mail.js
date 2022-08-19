const passwordForm = document.getElementById("mail-password-form");
const userInput = passwordForm.querySelector("input");
const userResult = document.getElementById("mail_result");

const KEY = "예수는역사다";

const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const userInputData = userInput.value;
    if (userInputData === KEY) {
        userResult.innerHTML = "의사 소견서의 비밀번호는 아담의 수명과 같습니다.";
    }
    else {
        userResult.innerHTML = "틀렸습니다.";
    }
}

passwordForm.addEventListener("submit", handlePasswordSubmit);