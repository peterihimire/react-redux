import { PRESS_BUTTON } from "../actions/action";

function reducer(state, action) {
  console.log(state);
  console.log(action);

  switch (action.type) {
    case PRESS_BUTTON:
      alert(action.payload.text.text);
      return { ...state, alertW: action.payload.text.text };
    default:
      return state;
  }
}
export default reducer;
