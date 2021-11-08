/* eslint-disable no-prototype-builtins */

import { IGeoLocationLongLat } from '../types/geoLocation';

/* eslint-disable no-restricted-syntax */
export const isObjectEmpty = (obj : any): boolean => {
  let key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

export const getCurrentLocation = (): Partial<IGeoLocationLongLat> => {
  let _geo: Partial<IGeoLocationLongLat> = {};
  if (navigator.geolocation) {
    // eslint-disable-next-line no-undef
    navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
      _geo = {
        long: position.coords.longitude,
        lat: position.coords.latitude
      };
    });
  }
  return _geo
}
