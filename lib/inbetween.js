import { AddZero } from "./addzero";

export function GetDatesBetween(startDate, endDate) {
  try {
    const dates = [];
    let currentDate = new Date(startDate);
    // prompt: set currentDate to startDate

    // prompt: while currentDate is less than or equal to endDate
    while (new Date(currentDate) < new Date(endDate)) {
      let formattedDate = `${currentDate.getFullYear()}-${AddZero(
        currentDate.getMonth() + 1
      )}-${AddZero(currentDate.getDate())}`;
      dates.push(formattedDate);
      // prompt: push a new Date object with the value of currentDate to the dates array
      currentDate.setDate(currentDate.getDate() + 1);
      // prompt: keep updating currentDate by adding 1 day to it
    }

    return dates;
  } catch (error) {
    throw new Error(error);
  }
}
