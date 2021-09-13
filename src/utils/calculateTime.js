const zeroPrefix = (prefix) => {
    if (prefix < 10) {
        prefix = "0" + prefix;
    }
    return prefix;
}

export const calculateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const dayOfWeek = now.getDay();

    let displayMonth;
    switch (month) {
        case 0:
            displayMonth = "Jan";
            break;
        case 1:
            displayMonth = "Feb";
            break;
        case 2:
            displayMonth = "Mar";
            break;
        case 3:
            displayMonth = "Apr";
            break;
        case 4:
            displayMonth = "May";
            break;
        case 5:
            displayMonth = "Jun";
            break;
        case 6:
            displayMonth = "Jul";
            break;
        case 7:
            displayMonth = "Aug";
            break;
        case 8:
            displayMonth = "Sep";
            break;
        case 9:
            displayMonth = "Oct";
            break;
        case 10:
            displayMonth = "Nov";
            break;
        default:
            displayMonth = "Dec";
    }

    let weekDay;
    switch (dayOfWeek) {
        case 0:
            weekDay = "Sunday";
            break;
        case 1:
            weekDay = "Monday";
            break;
        case 2:
            weekDay = "Tuesday";
            break;
        case 3:
            weekDay = "Wednesday";
            break;
        case 4:
            weekDay = "Thursday";
            break;
        case 5:
            weekDay = "Friday";
            break;
        default:
            weekDay = "Saturday";
    }

    let timeSystem = "";
    if(hour < 12) {
        timeSystem += 'AM'
    } else {
        timeSystem += 'PM'
    }

    const displayTime = `${zeroPrefix(hour)}:${zeroPrefix(minutes)}:${zeroPrefix(seconds)} ${timeSystem}`
    const displayDate = `${weekDay} ${displayMonth} ${zeroPrefix(day)}, ${year}`

    return {displayTime, displayDate};
}