import * as atypes from "src/constants/actionTypes";
import { combineReducers } from "redux";

const msg = (state = "", { type }) => {
  switch (type) {
    case atypes.JOIN_SLACK_REQUEST:
      return "";
    case atypes.JOIN_SLACK_FAILURE:
      return "Some thing was wrong please try again";
    case atypes.JOIN_SLACK_SUCCESS:
      return "You Request has been sent you will get invitaion link soon";
    default:
      return state;
  }
};

const error = (state = null, { type }) => {
  switch (type) {
    case atypes.JOIN_SLACK_REQUEST:
      return null;
    case atypes.JOIN_SLACK_FAILURE:
      return true;
    default:
      return state;
  }
};

export default combineReducers({
  msg,
  error
});
