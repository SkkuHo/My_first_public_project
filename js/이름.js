document.addEventListener("DOMContentLoaded", function() {
    const logButton = document.querySelector("#logButton");
    const petNameInput = document.getElementById("petName");
    const activityInput = document.getElementById("activity");
    const logList = document.getElementById("logList");

    logButton.addEventListener("click", function() {
      const petName = petNameInput.value;
      const activity = activityInput.value;

      if (petName.trim() === "" || activity.trim() === "") {
        alert("애완동물 이름과 활동 내용을 입력해주세요.");
        return;
      }

      const logItem = document.createElement("li");
      logItem.innerHTML = `<strong>${petName}</strong>: ${activity}`;
      logList.appendChild(logItem);

      petNameInput.value = "";
      activityInput.value = "";
    });
  });