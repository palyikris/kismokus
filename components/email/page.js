// components/EmailForm.js
"use client";

import { useState } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const code = "fjklsjfjsdfj jdsjf jffdklsfsl";
  const startDate = "2021-08-01";
  const endDate = "2021-08-15";

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, code, startDate, endDate })
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
      </div>

      <button type="submit">Send Email</button>
    </form>
  );
}
