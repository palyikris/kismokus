export function doReservationsOverlap(res1Start, res1End, res2Start, res2End) {
  try {
    if (res1End < res2Start || res2End < res1Start) {
      return false;
    }
    // If the ranges are not completely before or after, they must overlap
    return true;
  } catch (error) {
    throw new Error(error);
  }
}
