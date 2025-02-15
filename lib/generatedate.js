import { AddZero } from "./addzero";

export function GenerateDate(inputDate) {
  try {
    let day = inputDate.$D;
    let month = inputDate.$M + 1;
    let year = inputDate.$y;
    // prompt: destructuring the input date to access the day, month, and year
    let formattedDate = `${AddZero(year)}-${AddZero(month)}-${AddZero(day)}`;
    // prompt: formatting it so that its like this: yyyy-mm-dd
    return formattedDate;
  } catch (error) {
    throw new Error(error);
  }
}
