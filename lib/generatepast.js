import { AddZero } from "./addzero";

export function GeneratePastDates(date) {
  try {
    let pastDates = [];
    let currentDate = new Date(date);
    let dateOneMonthBefore = new Date(currentDate);
    dateOneMonthBefore.setMonth(currentDate.getMonth() - 1);

    while (dateOneMonthBefore <= currentDate) {
      pastDates.push(
        `${dateOneMonthBefore.getFullYear()}-${AddZero(
          dateOneMonthBefore.getMonth() + 1
        )}-${AddZero(dateOneMonthBefore.getDate())}`
      );
      dateOneMonthBefore.setDate(dateOneMonthBefore.getDate() + 1);
    }

    pastDates.push(
      `${currentDate.getFullYear()}-${AddZero(
        currentDate.getMonth() + 1
      )}-${AddZero(currentDate.getDate())}`
    );

    return pastDates;
  } catch (error) {
    throw new Error(error);
  }
}
