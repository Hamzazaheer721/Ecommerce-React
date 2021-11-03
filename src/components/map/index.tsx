import { useState, useEffect, memo } from 'react'

import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

type IStateType = {
  lat: number
  lng: number
}

const Map = memo(() => {
  const [mapPosition, setMapPosition] = useState<IStateType>({
    lat: 30.3753,
    lng: 69.3451
  })

  useEffect(() => {
    setMapPosition({
      lat: 30.3753,
      lng: 69.3451
    })
  }, [])

  const obj: any = {
    lat: mapPosition.lat,
    lng: mapPosition.lng
  }

  const AsyncMap = withScriptjs(
    withGoogleMap(() => <GoogleMap defaultZoom={15} defaultCenter={obj} />)
  )

  const map = (
    <div>
      <AsyncMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB0FVkc6oMvpT1XJ-7PTiJL3w9CosGINDM&libraries=places"
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '300px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  )

  return map
})

export default Map
