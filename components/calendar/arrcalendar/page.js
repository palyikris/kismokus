import styles from "../page.module.css";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";
import { AddZero } from "@/lib/addzero";
import { useGlobalDate } from "@/context/datecontexthook";
import Loader from "@/components/loader/page";
import { createTheme, styled, ThemeProvider } from "@mui/material";
import { PickersDay } from "@mui/x-date-pickers";
import "dayjs/locale/hu";

export default function ArrivalCalendar(props) {
  let { setArrDate } = useGlobalDate();
  let { apartmanNumber, type, datesReserved } = props;
  let date = new Date();
  let dateForCalendarDefaultValue = `${AddZero(date.getFullYear())}-${AddZero(
    date.getMonth() + 1
  )}-${AddZero(date.getDate())}`;
  let dateForCalendarMaxValue = `${AddZero(date.getFullYear() + 1)}-${AddZero(
    date.getMonth() + 1
  )}-${AddZero(date.getDate())}`;
  let [value, setValue] = useState(dayjs(dateForCalendarDefaultValue));
  let [datesToDisable, setDatesToDisable] = useState([]);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#9dc183",
        dark: "#9dc183"
      }
    }
  });

  // if (isLoading) {
  //   return <Loader />;
  // }

  const disableDates = date => {
    let year = date.$y;
    let month = date.$M + 1;
    let day = date.$D;
    let dateString = `${year}-${AddZero(month)}-${AddZero(day)}`;
    return datesReserved.includes(dateString);
  };

  const CustomDay = styled(PickersDay, {
    shouldForwardProp: prop => prop !== "disabledDay"
  })(({ theme, disabledDay }) => ({
    ...(disabledDay && {
      textDecoration: "line-through",
      opacity: 0.6,
      pointerEvents: "none",
      cursor: "not-allowed"
    })
  }));

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="hu">
        <DemoContainer components={["DateCalendar", "DateCalendar"]}>
          <DemoItem>
            <DateCalendar
              value={value}
              onChange={newValue => {
                setValue(newValue);
                setArrDate(newValue);
              }}
              views={["year", "month", "day"]}
              showDaysOutsideCurrentMonth
              disablePast
              fixedWeekNumber={6}
              maxDate={dayjs(dateForCalendarMaxValue)}
              shouldDisableDate={disableDates}
              className={styles.calendar}
              slots={{
                day: props => {
                  const isDisabled = disableDates(props.day);
                  console.log(props);

                  return (
                    <CustomDay
                      {...props}
                      disabledDay={isDisabled || props.disabled}
                    >
                      {props.day.date()}
                    </CustomDay>
                  );
                }
              }}
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
