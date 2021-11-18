import { memo, useLayoutEffect, useState } from 'react'

import { FieldsSectionContainer } from './index.styled'
import ContactFields from './components/contactFields'
import LocationFields from './components/locationFields'
import { loadMapApi } from '../../../../general/helper'

const LocationInputFields = memo(() => {
  const [scriptLoaded, setScriptLoaded] = useState<boolean>(false)

  useLayoutEffect(() => {
    const googleMapScript = loadMapApi()
    googleMapScript.addEventListener('load', (e) => {
      e.stopPropagation()
      e.preventDefault()
      setScriptLoaded(true)
    })
  }, [])

  return (
    <>
      {scriptLoaded && (
        <FieldsSectionContainer>
          <LocationFields />
          <ContactFields />
        </FieldsSectionContainer>
      )}
    </>
  )
})

export default LocationInputFields
