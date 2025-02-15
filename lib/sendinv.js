import { AddToken } from "./firebase";
import { handleReviewSubmit } from "./sendemail"

export const SendInvitation = async (email, token, name, type) => {
  try {
    let response = await handleReviewSubmit(email, type, token);
    let res = await AddToken(email, name, token);

   } catch (error) {
    console.error(error);
  }
}