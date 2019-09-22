import {combineReducers} from "redux";
import {SET_COLOR_LEFT} from '../actions/index';
import {SET_LOCATION_LEFT} from '../actions/index';
import {SET_COLOR_RIGHT} from '../actions/index';
import {SET_LOCATION_RIGHT} from '../actions/index';
import {SET_PES_VIEW_LEFT} from '../actions/index';
import {SET_LOCATION_LEFT_DROP_DOWN} from '../actions/index';

function colorLeft(state="",action){
  if(action.type === SET_COLOR_LEFT) {
    return action.value;
  }
  return state;
}

function locationLeftDropDown(state="",action){
  if(action.type === SET_LOCATION_LEFT_DROP_DOWN) {
    return action.value;
  }
  return state;
}

function locationLeft(state="",action){
  if(action.type === SET_LOCATION_LEFT) {
    return action.value;
  }
  return state;
}

function colorRight(state="",action){
  if(action.type === SET_COLOR_RIGHT) {
    return action.value;
  }
  return state;
}

function locationRight(state="",action){
  if(action.type === SET_LOCATION_RIGHT) {
    return action.value;
  }
  return state;
}

function pesViewLeft(state=[],action){
  if(action.type === SET_PES_VIEW_LEFT) {
    return state[1].style = action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  colorLeft,
  locationLeft,
  colorRight,
  locationRight,
  pesViewLeft,
  locationLeftDropDown
});
export default rootReducer;
