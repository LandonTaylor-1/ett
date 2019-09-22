export const SET_COLOR_LEFT = "SET_COLOR_LEFT";
export function setColorLeft(colorLeft) {
  return {
    type:SET_COLOR_LEFT,
    value:colorLeft
  }
}

export const SET_LOCATION_LEFT_DROP_DOWN = "SET_LOCATION_LEFT_DROP_DOWN";
export function setLocationLeftDropDown(locationLeftDropDown) {
  return {
    type:SET_LOCATION_LEFT_DROP_DOWN,
    value:locationLeftDropDown
  }
}

export const SET_LOCATION_LEFT = "SET_LOCATION_LEFT";
export function setLocationLeft(locationLeft) {
  return {
    type:SET_LOCATION_LEFT,
    value:locationLeft
  }
}

export const SET_COLOR_RIGHT = "SET_COLOR_RIGHT";
export function setColorRight(colorRight) {
  return {
    type:SET_COLOR_RIGHT,
    value:colorRight
  }
}

export const SET_LOCATION_RIGHT = "SET_LOCATION_RIGHT";
export function setLocationRight(locationRight) {
  return {
    type:SET_LOCATION_RIGHT,
    value:locationRight
  }
}

export const SET_PES_VIEW_LEFT = "SET_PES_VIEW_LEFT";
export function setPesViewLeft(pesViewColorLeft) {
  return {
    type:SET_PES_VIEW_LEFT,
    value:pesViewColorLeft,
    // value2:pesViewLocationLeft
  }
}