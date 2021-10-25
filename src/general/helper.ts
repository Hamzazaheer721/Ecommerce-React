/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
export const isObjectEmpty = (obj : any) => {
  let key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}
