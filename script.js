const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const day = document.getElementById('day');

const monthName = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
];

setInterval(() => {
    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    // Leading zero
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;

    // Date display
    day.innerText = `${now.getDate()} ${monthName[now.getMonth()]} ${now.getFullYear()}`;

}, 1000);