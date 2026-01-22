import { useEffect, useState, useMemo } from 'react'
import { fetchGeoData } from '../services/geoDataService'
import { normalizeGeoData } from '../utils/dataTransformers'
import { DEFAULT_PAGE_SIZE } from '../utils/constants'

export function useGeoData() {
  const [rawData, setRawData] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let active = true

    async function load() {
      setLoading(true)
      const res = await fetchGeoData({
        page,
        pageSize: DEFAULT_PAGE_SIZE
      })

      if (active) {
        setRawData(res.data)
        setTotal(res.meta.total)
        setLoading(false)
      }
    }

    load()
    return () => {
      active = false
    }
  }, [page])


  const data = useMemo(
    () => normalizeGeoData(rawData),
    [rawData]
  )

  return {
    data,
    loading,
    page,
    total,
    setPage
  }
}
