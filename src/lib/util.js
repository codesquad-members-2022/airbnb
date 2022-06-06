const getDateFormat = (year, month, day) => {
    return `${year} ${String(month).padStart(2, "0")} ${String(day).padStart(2, "0")}`;
};

const isValidDate = ({year, month, day = 1}) => {
    if (year < 1000 || year > 3000 || month == 0 || month > 12) return false;

    const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) monthLength[1] = 29;

    return day > 0 && day <= monthLength[month - 1];
};

export {getDateFormat, isValidDate};
