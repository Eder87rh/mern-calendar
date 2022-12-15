import { useDispatch, useSelector } from "react-redux";
import { onSetActiveEvent } from "../store";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state: any) => state.calendar);

  const setActiveEvent = (calendarEvent: unknown) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  return {
    //* Properties
    events,
    activeEvent,

    //* Methods
    setActiveEvent,
  };
};
