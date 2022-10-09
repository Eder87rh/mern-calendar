import { IEvent } from "../types/calendarTypes";

export const CalendarEvent = ({ event }: { event: IEvent }) => {
  const { title, user } = event;
  return (
    <>
      <strong>{title}</strong>
      <span> - {user.name}</span>
    </>
  );
};
