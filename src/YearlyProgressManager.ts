type field = "year" | "month" | "week" | "day";

export function getOrdinal(n: number) {
  var s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}

export function getDay() {
  // Get the current day
  return new Date().getDate();
}

export function getMonth() {
  // Get the current month
  return new Date().getMonth() + 1;
}

export function getWeek() {
  // Create a new date object to avoid modifying the original date
  const tempDate = new Date();
  
  // Get the first day of the month
  const firstDayOfMonth = new Date(tempDate.getFullYear(), tempDate.getMonth(), 1);
  
  // Calculate the offset to the first Monday of the month
  const firstMondayOffset = (7 - firstDayOfMonth.getDay() + 1) % 7;
  
  // Calculate the number of days from the first Monday of the month
  const daysSinceFirstMonday = tempDate.getDate() + firstDayOfMonth.getDay() - 1;
  
  // Calculate the week number
  const weekNumber = Math.ceil((daysSinceFirstMonday - firstMondayOffset) / 7) + 1;
  
  return weekNumber;
}

function getWeekStartDate(startOfWeek = 0) {
  const tempDate = new Date();
  const day = tempDate.getDay();
  const diff = (day < startOfWeek ? 7 : 0) + day - startOfWeek;
  tempDate.setDate(tempDate.getDate() - diff);
  tempDate.setHours(0, 0, 0, 0);
  return tempDate;
}

function getWeekEndDate(endOfWeek = 6) {
  const tempDate = new Date();
  const day = tempDate.getDay();
  const diff = (endOfWeek - day + 7) % 7;
  tempDate.setDate(tempDate.getDate() + diff);
  tempDate.setHours(23, 59, 59, 999);
  return tempDate;
}

export function getWeekName() {
  // Get the name of the week
  const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const week = new Date().getDay();
  return weeks[week];
}

export function getYear() {
  // Get the current year
  return new Date().getFullYear();
}

export function getMonthName() {
  // Get the name of the month
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = new Date().getMonth();
  return months[month];
}

export function getStartOfTimeMillis(field: field) {
  switch (field) {
    case "year":
      return new Date(getYear(), 0, 1, 0, 0, 0, 0).getTime();
    case "month":
      return new Date(getYear(), getMonth() - 1, 1, 0, 0, 0, 0).getTime();
    case "week": {
      // get the current week index
      return getWeekStartDate().getTime();
    }
    case "day":
      return new Date(
        getYear(),
        getMonth() - 1,
        getDay(),
        0,
        0,
        0,
        0
      ).getTime();
  }
}

export function getEndOfTimeMillis(field: field) {
  switch (field) {
    case "year":
      return new Date(getYear(), 11, 31, 23, 59, 59, 999).getTime();
    case "month":
      return new Date(getYear(), getMonth() - 1, 30, 23, 59, 59, 999).getTime();
    case "week": {
      return getWeekEndDate().getTime();
    }
    case "day":
      return new Date(
        getYear(),
        getMonth() - 1,
        getDay(),
        23,
        59,
        59,
        999
      ).getTime();
  }
}

export function getProgress(field: field) {
  const start = getStartOfTimeMillis(field);
  const end = getEndOfTimeMillis(field);
  const now = new Date().getTime();
  return ((now - start) / (end - start)) * 100;
}
