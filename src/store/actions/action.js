export const PRESS_BUTTON = "PRESS_BUTTON";

// ACTION CREATORS
export const pressButton = (text) => {
  return { type: PRESS_BUTTON, payload: { text } };
};