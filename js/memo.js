const passwordForm = document.getElementById("memo-password-form");
const userInput = passwordForm.querySelector("input");
const userResult = document.getElementById("memo_result");

const KEY = "28162420";

const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const userInputData = userInput.value;
    if (userInputData === KEY) {
        userResult.innerHTML = "성경사본 비밀번호 670";
    }
    else {
        userResult.innerHTML = "틀렸습니다.";
    }
}

passwordForm.addEventListener("submit", handlePasswordSubmit);