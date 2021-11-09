import { memo } from 'react'
import MapComponent from '../../../../components/map'
import { MapContainer } from '../../../../styles/global'

const Map = memo(() => (
  <MapContainer height="300px">
    <MapComponent setCurrentLocation />
  </MapContainer>
))

export default Map
