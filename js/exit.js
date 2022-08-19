const passwordForm = document.getElementById("exit-password-form");
const userInput = passwordForm.querySelector("input");
const userResult = document.getElementById("exit_result");

const KEY = "WE BELIEVE IN JESUS";

const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const userInputData = userInput.value;
    if (userInputData === KEY) {
        userResult.innerHTML = "탈출 성공!";
    }
    else {
        userResult.innerHTML = "틀렸습니다.";
    }
}

passwordForm.addEventListener("submit", handlePasswordSubmit);