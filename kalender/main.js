const days = document.querySelector(".days");
const dateElement = document.querySelector("#date");
let currentDate = new Date(2025, 6);

const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

renderCalendar();

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    days.innerHTML = "";
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
    renderCalendar();

}

function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
     days.innerHTML = "";
    renderCalendar();
}

function renderCalendar() {
    dateElement.innerHTML = currentDate.toLocaleString("NL-nl", options);
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    let firstDayOfMonthDay = firstDayOfMonth.getDay();
    if (firstDayOfMonthDay == 0) firstDayOfMonthDay = 7;
    for (let i = 1; i < firstDayOfMonthDay; i++) {
        const emptyDay = document.createElement("li");
        emptyDay.classList.add("empty");
        days.appendChild(emptyDay);
    }

    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1 - 1);
    const numberOfDays = lastDayOfMonth.getDate();

    for (let i = 1; i <= numberOfDays; i++) {
        const day = document.createElement("li");
        day.classList.add("day");
        day.textContent = i;
        days.appendChild(day);
    }
}

nextButton.addEventListener("click", nextMonth);
prevButton.addEventListener("click", prevMonth);