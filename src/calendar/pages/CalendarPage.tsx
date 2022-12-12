import { Calendar, View } from "react-big-calendar";
import { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { addHours } from "date-fns";
import { NavBar, CalendarEvent, CalendarModal } from "../";
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
  const [lastView, setLastView] =
    useState<View | undefined>(
      localStorage.getItem("lastView") as View | undefined
    ) || ("week" as View | undefined);

  const eventStyleGetter = (
    event: IEvent,
    start: any,
    end: any,
    isSelected: boolean
  ) => {
    const style = {
      backgroundColor: "#347CF7",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };
    return {
      style,
    };
  };

  const onDoubleClick = (event: IEvent) => {
    console.log({ doubleClick: event });
  };

  const onClick = (event: IEvent) => {
    console.log({ click: event });
  };

  const onViewChanged = (view: View) => {
    localStorage.setItem("lastView", view);
  };

  return (
    <>
      <NavBar />
      <Calendar
        culture="es"
        localizer={localizer}
        defaultView={lastView}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        messages={getMessagesEs()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onClick}
        onView={onViewChanged}
      />
      <CalendarModal />
    </>
  );
};
