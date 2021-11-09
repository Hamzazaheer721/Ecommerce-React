/* eslint-disable */

const getMapData = (address) => {
  const { results } = address
  const { formatted_address, address_components } = results[0]
  let _obj = {}
  _obj.location = formatted_address

  if (results[0]) {
    for (let i = 0; i < address_components.length; i++) {
      for (let b = 0; b < address_components[i].types.length; b++) {
        if (address_components[i].types[b] == 'sublocality_level_3') {
          _obj.streetAddress = ''
          _obj.streetAddress =
            _obj.streetAddress + address_components[i].long_name + ' '
        }
        if (address_components[i].types[b] == 'sublocality_level_2') {
          if (!_obj.streetAddress) _obj.streetAddress = ''
          _obj.streetAddress =
            _obj.streetAddress + address_components[i].long_name + ' '
        }
        if (address_components[i].types[b] === 'sublocality_level_1') {
          if (!_obj.streetAddress) _obj.streetAddress = ''
          _obj.streetAddress =
            _obj.streetAddress + address_components[i].long_name
          _obj.area = address_components[i].long_name
        }
        if (address_components[i].types[b] == 'administrative_area_level_1') {
          _obj.state = address_components[i].long_name
        }
        if (address_components[i].types[b] == 'locality') {
          _obj.city = address_components[i].long_name
        }
        if (address_components[i].types[b] == 'country') {
          _obj.country = address_components[i].long_name
        }
      }
    }
  }
  return _obj
}

self.onmessage = (e) => {
  const { data } = e
  const _data = getMapData(data)
  self.postMessage(_data)
}
