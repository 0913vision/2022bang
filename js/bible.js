const passwordForm = document.getElementById("bible-password-form");
const userInput = passwordForm.querySelector("input");
const userResult = document.getElementById("bible_result");

const KEY = "02082220";

const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const userInputData = userInput.value;
    if (userInputData === KEY) {
        userResult.innerHTML = "최종비밀번호는 W? BEL???? ?? J????";
    }
    else {
        userResult.innerHTML = "틀렸습니다.";
    }
}

passwordForm.addEventListener("submit", handlePasswordSubmit);