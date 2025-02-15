import { FetchReservedDatesOfApartman } from "@/lib/firebase";
import ArrivalCalendar from "./arrcalendar/page";
import DepartureCalendar from "./depcalendar/page";
import DisabledCalendar from "./discalendar/page";
import { useEffect, useState } from "react";
import { AddInBetweens } from "@/lib/addinbetweens";
import { CreateListOfDisabledDates } from "@/lib/createdislist";

export default function DateCalendarComponent(props) {
  let { reservation, isDisabled, apartmanNumber, type } = props;
  let [datesReserved, setDatesReserved] = useState([]);

  useEffect(
    () => {
      FetchReservedDatesOfApartman(type, apartmanNumber).then(data => {
        data = CreateListOfDisabledDates(data);
        setDatesReserved(data);
      });
      console.log("hay");
    },
    [apartmanNumber, type]
  );

  if (reservation) {
    if (isDisabled) {
      let { defValue } = props;
      return <DisabledCalendar defValue={defValue} />;
    }
    return (
      <ArrivalCalendar
        reservation={reservation}
        datesReserved={datesReserved}
      />
    );
  } else {
    if (isDisabled) {
      let { defValue } = props;
      return <DisabledCalendar defValue={defValue} />;
    }
    return (
      <DepartureCalendar
        reservation={reservation}
        datesReserved={datesReserved}
      />
    );
  }
  return <div />;
}
