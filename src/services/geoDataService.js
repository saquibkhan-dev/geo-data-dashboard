import geoData from '../mock/geoData.json'

const simulateNetworkDelay = (ms = 300) =>
  new Promise(resolve => setTimeout(resolve, ms))

export async function fetchGeoData({ page = 1, pageSize = 10 } = {}) {
  await simulateNetworkDelay()

  const start = (page - 1) * pageSize
  const end = start + pageSize

  const paginatedData = geoData.data.slice(start, end)

  return {
    data: paginatedData,
    meta: {
      total: geoData.data.length,
      page,
      pageSize
    }
  }
}
