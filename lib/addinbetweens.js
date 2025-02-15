import { AddZero } from "./addzero";

export function AddInBetweens(dateList) {
  try {
    for (let i = 0; i < dateList.length - 1; i++) {
      const element = dateList[i];
      const nextElement = dateList[i + 1];

      if (new Date(nextElement).getDate() - new Date(element).getDate() == 2) {
        let year = new Date(element).getFullYear();
        let month = AddZero(new Date(element).getMonth() + 1);
        let day = AddZero(new Date(element).getDate() + 1);
        let date = `${year}-${month}-${day}`;
        dateList.splice(i + 1, 0, date);
      }
    }

    return dateList;
  } catch (error) {
    throw new Error(error);
  }
}
