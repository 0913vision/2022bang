const passwordForm = document.getElementById("map-password-form");
const userInput = passwordForm.querySelector("input");
const userResult = document.getElementById("map_result");

const KEY = "R";

const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const userInputData = userInput.value;
    if (userInputData === KEY) {
        userResult.innerHTML = "영접기도문 비밀번호 ?71";
    }
    else {
        userResult.innerHTML = "틀렸습니다.";
    }
}

passwordForm.addEventListener("submit", handlePasswordSubmit);