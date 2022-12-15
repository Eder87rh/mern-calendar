import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

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
    activeEvent: null,
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onSetActiveEvent } = calendarSlice.actions;
