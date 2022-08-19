const passwordForm = document.getElementById("doctor-password-form");
const userInput = passwordForm.querySelector("input");
const userResult = document.getElementById("doctor_result");

const KEY = "AMED";

const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const userInputData = userInput.value;
    if (userInputData === KEY) {
        userResult.innerHTML = "최종비밀번호는 ?E ???IEVE ?? ????S";
    }
    else {
        userResult.innerHTML = "틀렸습니다.";
    }
}

passwordForm.addEventListener("submit", handlePasswordSubmit);