import styles from "../page.module.css";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";
import { AddZero } from "@/lib/addzero";

export default function DisabledCalendar(props) {
  let { defValue } = props;
  let date = new Date();
  let dateForCalendarMaxValue = `${AddZero(date.getFullYear() + 1)}-${AddZero(
    date.getMonth() + 1
  )}-${AddZero(date.getDate())}`;
  let [value, setValue] = useState(dayjs(defValue));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateCalendar", "DateCalendar"]}>
        <DemoItem>
          <DateCalendar
            value={value}
            readOnly
            views={["year", "month", "day"]}
            showDaysOutsideCurrentMonth
            disabled
            fixedWeekNumber={6}
            maxDate={dayjs(dateForCalendarMaxValue)} //     borderRadius: "10px" //     bgcolor: "#e9c6a7", //   sx={{
            //   }}
            className={styles.calendar}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
