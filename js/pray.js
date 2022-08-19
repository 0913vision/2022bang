const passwordForm = document.getElementById("pray-password-form");
const userInput = passwordForm.querySelector("input");
const userResult = document.getElementById("pray_result");

const KEY = "권세";

const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const userInputData = userInput.value;
    if (userInputData === KEY) {
        userResult.innerHTML = "최종비밀번호는 ?? ??????? IN ?ESU?";
    }
    else {
        userResult.innerHTML = "틀렸습니다.";
    }
}

passwordForm.addEventListener("submit", handlePasswordSubmit);