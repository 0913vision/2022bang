const passwordForm = document.getElementById("letter-password-form");
const userInput = passwordForm.querySelector("input");
const userResult = document.getElementById("letter_result");

const KEY = "바울";

const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const userInputData = userInput.value;
    if (userInputData === KEY) {
        userResult.innerHTML = "영접기도문 비밀번호 01??";
    }
    else {
        userResult.innerHTML = "틀렸습니다.";
    }
}

passwordForm.addEventListener("submit", handlePasswordSubmit);