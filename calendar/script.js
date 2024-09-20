const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
    displayCalendar(currentMonth, currentYear);

    document.getElementById("prevMonth").addEventListener("click", function () {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        displayCalendar(currentMonth, currentYear);
    });

    document.getElementById("nextMonth").addEventListener("click", function () {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        displayCalendar(currentMonth, currentYear);
    });
});

function displayCalendar(month, year) {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const calendarDays = document.getElementById("calendarDays");
    calendarDays.innerHTML = "";

    const monthYear = document.getElementById("monthYear");
    monthYear.textContent = `${monthNames[month]} ${year}`;

    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("div");
        calendarDays.appendChild(emptyCell);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement("div");
        dayCell.textContent = day;

        if (day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
            dayCell.classList.add("current-day");
        }

        calendarDays.appendChild(dayCell);
    }
}
