import styles from "../page.module.css";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useEffect, useState } from "react";
import { AddZero } from "@/lib/addzero";
import { useGlobalDate } from "@/context/datecontexthook";
import DisabledCalendar from "../discalendar/page";
import { CreateListOfDisabledDates } from "@/lib/createdislist";
import { GeneratePastDates } from "@/lib/generatepast";
import { GenerateFutureDates } from "@/lib/generatefut";
import { GenerateDate } from "@/lib/generatedate";
import { createTheme, ThemeProvider } from "@mui/material";

export default function DepartureCalendar(props) {
  let { arrDate, setDepDate } = useGlobalDate();
  let { datesReserved } = props;
  let [datesReservedForReal, setDatesReservedForReal] = useState([]);
  let [isNoArrDate, setIsNoArrDate] = useState(true);
  let date = new Date();
  let dateForCalendarDefaultValue = `${AddZero(date.getFullYear())}-${AddZero(
    date.getMonth() + 1
  )}-${AddZero(date.getDate())}`;
  let dateForCalendarMaxValue = `${AddZero(date.getFullYear() + 1)}-${AddZero(
    date.getMonth() + 1
  )}-${AddZero(date.getDate())}`;
  let [value, setValue] = useState(dayjs(dateForCalendarDefaultValue));
  const theme = createTheme({
    palette: {
      primary: {
        main: "#daa06d",
        dark: "#daa06d"
      }
    }
  });

  const disableDates = date => {
    let year = date.$y;
    let month = date.$M + 1;
    let day = date.$D;
    let dateString = `${year}-${AddZero(month)}-${AddZero(day)}`;
    if (dateString === GenerateDate(arrDate)) {
      return false;
    }
    if (
      dayjs(datesReservedForReal[datesReservedForReal.length - 1]).diff(
        dayjs(arrDate),
        "days"
      ) === 0
    ) {
      return datesReservedForReal.includes(dateString);
    }
    return (
      datesReservedForReal.includes(dateString) ||
      date > dayjs(datesReservedForReal[datesReservedForReal.length - 1])
    );
  };

  useEffect(
    () => {
      if (arrDate) {
        setDepDate(null);
        setIsNoArrDate(true);
        setValue(dayjs(arrDate));
        let temp = [...datesReserved, ...GeneratePastDates(arrDate)];
        temp = CreateListOfDisabledDates(temp);
        if (temp.indexOf(GenerateDate(arrDate)) != temp.length - 1) {
          temp = [
            ...temp,
            ...GenerateFutureDates(
              temp[temp.indexOf(GenerateDate(arrDate)) + 1]
            )
          ];
        }
        setIsNoArrDate(false);
        setDatesReservedForReal(temp);
      }
    },
    [arrDate]
  );

  if (props.isDisabled || isNoArrDate) {
    let { defValue } = props;
    return <DisabledCalendar defValue={defValue} />;
  }

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateCalendar", "DateCalendar"]}>
          <DemoItem>
            <DateCalendar
              value={value}
              onChange={newValue => {
                setValue(newValue);
                setDepDate(newValue);
              }}
              views={["year", "month", "day"]}
              showDaysOutsideCurrentMonth
              disablePast
              fixedWeekNumber={6}
              maxDate={dayjs(dateForCalendarMaxValue)} //     bgcolor: "#e9c6a7", //   sx={{
              //     borderRadius: "10px"
              //   }}
              className={styles.calendar}
              shouldDisableDate={disableDates}
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
