import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Box } from '@mui/material'
import { useMemo, useCallback } from 'react'
import L from 'leaflet'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'



const defaultIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
})

const selectedIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [35, 55],
  iconAnchor: [17, 55]
})



function MapView({ data, selectedRow, onMarkerSelect }) {
  const center = [20.5937, 78.9629] 

  
  const handleMarkerClick = useCallback(
    item => {
      onMarkerSelect(item)
    },
    [onMarkerSelect]
  )

  
  const markers = useMemo(() => {
    return data.map(item => (
      <Marker
        key={item.id}
        position={[item.latitude, item.longitude]}
        icon={selectedRow?.id === item.id ? selectedIcon : defaultIcon}
        eventHandlers={{
          click: () => handleMarkerClick(item)
        }}
      >
        <Popup>
          <strong>{item.projectName}</strong>
          <br />
          Status: {item.status}
        </Popup>
      </Marker>
    ))
  }, [data, selectedRow?.id, handleMarkerClick])

  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <MapContainer
        center={center}
        zoom={5}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers}
      </MapContainer>
    </Box>
  )
}

export default MapView
