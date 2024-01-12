//create new date
let date = new Date (2012, 1, 20, 3, 12, 0, 0);

alert(date);

//show week day
function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return days[date.getDay()];
}

console.log(getWeekDay(date));

//get local date
function getLocalDay(date) {
    let dayNumber = date.getDay();

    if (dayNumber == 0) {
        dayNumber = 7;
    };

    return dayNumber;
}

console.log(getLocalDay(date));

//day of month
let daysCount = +prompt('Enter days count ago');

function getDayAgo(date, daysCount) {
    date.setDate(date.getDate() - daysCount);

    return date.getDate();
}

console.log(getDayAgo(date, daysCount));

//the last day of the month
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

console.log(getLastDayOfMonth(2023, 1));
console.log(getLastDayOfMonth(2021, 6));
console.log(getLastDayOfMonth(2021, 1));

//how many seconds have passed
function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - today;

    return Math.round(diff / 1000);
}

console.log(getSecondsToday());

//how many second to tomorrow
function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    let diff = tomorrow - now;

    return Math.round(diff / 1000);
}

console.log(getSecondsToTomorrow());

//relative date formatting
function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;
  
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    if (diffSec < 1) {
      return 'прямо сейчас';
    } else if (diffMin < 1) {
      return `${diffSec} сек. назад`
    } else if (diffHour < 1) {
      return `${diffMin} мин. назад`
    } else {
      return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
}

console.log(formatDate(new Date()));
console.log(formatDate(new Date(new Date() - 40 * 1000)));
console.log(formatDate(new Date(new Date() - 40 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - 95000 * 1000)));