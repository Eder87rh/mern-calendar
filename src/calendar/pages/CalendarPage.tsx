import { Calendar, View } from "react-big-calendar";
import { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { addHours } from "date-fns";
import { NavBar, CalendarEvent, CalendarModal, FABAddNew } from "../";
import { localizer, getMessagesEs } from "../../helpers";
import { IEvent } from "../types/calendarTypes";
import { useUIStore, useCalendarStore } from "../../hooks";

export const CalendarPage = () => {
  const { openDateModal } = useUIStore();
  const { events, setActiveEvent } = useCalendarStore();

  const [lastView] =
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
    openDateModal();
  };

  const onClick = (event: IEvent) => {
    setActiveEvent(event);
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
        defaultView={lastView || "week"}
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
      <FABAddNew />
    </>
  );
};
