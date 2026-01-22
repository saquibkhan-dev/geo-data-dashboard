export function normalizeGeoData(rawData = []) {
  return rawData.map(item => ({
    id: item.id,
    projectName: item.projectName,
    latitude: Number(item.latitude),
    longitude: Number(item.longitude),
    status: item.status,
    lastUpdated: new Date(item.lastUpdated)
  }))
}
