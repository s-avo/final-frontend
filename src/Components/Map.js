import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 56.9496,
  lng: 24.1052
};

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="x"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)