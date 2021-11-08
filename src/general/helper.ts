/* eslint-disable no-prototype-builtins */

import { IGeoLocationPayloadArg } from '../types/geoLocation';

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

export const getCurrentLocation = (): Omit<IGeoLocationPayloadArg, 'geoCodeAddress'> => {
  let _geo: Omit<IGeoLocationPayloadArg, 'geoCodeAddress'> = {
    lng: '0',
    lat: '0'
  };
  if (navigator.geolocation) {
    // eslint-disable-next-line no-undef
    navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
      _geo = {
        lng: String(position.coords.longitude),
        lat: String(position.coords.latitude)
      };
    });
  }
  return _geo
}
