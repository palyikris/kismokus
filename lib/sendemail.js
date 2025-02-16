import { AddZero } from "./addzero";

export const handleSubmit = async (email, code, startDate, endDate) => {
  console.log(code);

  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        code,
        startDate,
        endDate
      })
    });
  } catch (error) {
    console.error(error);
  }
};

export const handleKeroSubmit = async (
  name,
  apartmanType,
  apartmanNumber,
  startDate,
  endDate
) => {
  try {
    const response = await fetch("/api/send-email-kero", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        name,
        startDate,
        endDate
      })
    });
  } catch (error) {
    console.error(error);
  }
};

export const handleReviewSubmit = async (email, type, token) => {
  try {
    const response = await fetch("/api/send-email-review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        type,
        token
      })
    });
  } catch (error) {
    console.error(error);
  }
}