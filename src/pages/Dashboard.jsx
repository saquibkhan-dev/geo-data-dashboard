import { Box } from '@mui/material'
import { useGeoData } from '../hooks/useGeoData'
import { useTableSelection } from '../hooks/useTableSelection'
import DataTable from '../components/DataTable'
import MapView from '../components/MapView'
import { DEFAULT_PAGE_SIZE } from '../utils/constants'
import { useCallback } from 'react'

function Dashboard() {
  const { data, loading, page, total, setPage } = useGeoData()
  const { selectedRow, selectRow } = useTableSelection()

  const handleSelect = useCallback(
    row => selectRow(row),
    [selectRow]
  )

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 2
      }}
    >
      <DataTable
        rows={data}
        loading={loading}
        page={page}
        pageSize={DEFAULT_PAGE_SIZE}
        rowCount={total}
        selectedRow={selectedRow}
        onPageChange={setPage}
        onRowSelect={handleSelect}
      />

      <MapView
        data={data}
        selectedRow={selectedRow}
        onMarkerSelect={handleSelect}
      />
    </Box>
  )
}

export default Dashboard
