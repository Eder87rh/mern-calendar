import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { addHours } from "date-fns";
import { NavBar, CalendarEvent } from "../";
import { localizer, getMessagesEs } from "../../helpers";
import { IEvent } from "../types/calendarTypes";

const events: IEvent[] = [
  {
    title: "Boss BirthDay",
    notes: "We have to buy the cake",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#bada55",
    user: {
      _id: "123",
      name: "Eder",
    },
  },
];

export const CalendarPage = () => {
  const eventStyleGetter = (
    event: IEvent,
    start: any,
    end: any,
    isSelected: boolean
  ) => {
    return event;
  };

  return (
    <>
      <NavBar />
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        messages={getMessagesEs()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
      />
    </>
  );
};
