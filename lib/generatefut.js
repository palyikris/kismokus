import { AddZero } from "./addzero";

export function GenerateFutureDates(date) {
  try {
    let futureDates = [];
    let currentDate = new Date(date);
    let dateOneMonthLater = new Date(currentDate);
    dateOneMonthLater.setMonth(currentDate.getMonth() + 1);

    while (dateOneMonthLater >= currentDate) {
      futureDates.push(
        `${dateOneMonthLater.getFullYear()}-${AddZero(
          dateOneMonthLater.getMonth() + 1
        )}-${AddZero(dateOneMonthLater.getDate())}`
      );
      dateOneMonthLater.setDate(dateOneMonthLater.getDate() - 1);
    }

    futureDates.push(
      `${currentDate.getFullYear()}-${AddZero(
        currentDate.getMonth() + 1
      )}-${AddZero(currentDate.getDate())}`
    );

    console.log(futureDates);

    return futureDates;
  } catch (error) {
    throw new Error(error);
  }
}
