import React, { useState } from "react";
import dayjs from "dayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box } from "@mui/material";

const RangeDateCalendar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Example: Disabling weekends
  const shouldDisableDate = () => {
    return date => {
      return false;
    };
  };

  const handleDateChange = date => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else {
      if (dayjs(date).isAfter(startDate, "day")) {
        setEndDate(date);
      } else {
        setStartDate(date);
        setEndDate(null);
      }
    }
  };

  const isInRange = date => {
    if (startDate && endDate) {
      return (
        dayjs(date).isAfter(startDate, "day") &&
        dayjs(date).isBefore(endDate, "day")
      );
    }
    return false;
  };

  const renderDay = (day, selectedDates, pickersDayProps) => {
    const isStart = startDate && dayjs(day).isSame(startDate, "day");
    const isEnd = endDate && dayjs(day).isSame(endDate, "day");
    const inRange = isInRange(day);
    const disabled = shouldDisableDate(day);

    return (
      <PickersDay
        {...pickersDayProps}
        sx={{
          backgroundColor:
            isStart || isEnd
              ? "#007FFF"
              : inRange ? "#B3E5FC" : disabled ? "#FFCDD2" : "#C8E6C9",
          borderRadius: "50%",
          "&:hover": {
            backgroundColor: "#90CAF9"
          }
        }}
      />
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <DateCalendar
          onChange={handleDateChange}
          shouldDisableDate={shouldDisableDate}
          slots={{ day: renderDay }}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default RangeDateCalendar;
