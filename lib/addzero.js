// pagefor: storing the AddZero function

export function AddZero(num) {
  try {
    // idea: if a num is smaller than 10, it needs the have a 0 before it to look better
    if (num < 10) {
      // idea: turning it into string so that a 0 can be added before it
      num = num.toString();
      num = "0" + num;
      return num;
    }

    return num;
  } catch (error) {
    throw new Error(error);
  }
}
