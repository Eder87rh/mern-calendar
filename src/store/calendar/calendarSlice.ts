import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";
import { IEvent } from "../../calendar/types/calendarTypes";

interface CalendarEvent extends IEvent {
  _id: number;
}

const tempEvent = {
  _id: new Date().getTime(),
  title: "Boss BirthDay",
  notes: "We have to buy the cake",
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: "#bada55",
  user: {
    _id: "123",
    name: "Eder",
  },
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    events: [tempEvent],
    activeEvent: null as CalendarEvent | null,
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },
    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map((event) => {
        if (event._id === payload._id) {
          return payload;
        }

        return event;
      });
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter((event) => {
          return event._id !== state.activeEvent!._id;
        });

        state.activeEvent = null;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } =
  calendarSlice.actions;
