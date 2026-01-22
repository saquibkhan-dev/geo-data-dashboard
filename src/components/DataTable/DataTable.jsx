import { DataGrid } from '@mui/x-data-grid'
import { Box } from '@mui/material'
import { useMemo } from 'react'
import React from 'react'

const DataTable = React.memo(function DataTable({
  rows,
  loading,
  page,
  pageSize,
  rowCount,
  selectedRow,
  onPageChange,
  onRowSelect
}) {
  const columns = useMemo(() => [
    { field: 'projectName', headerName: 'Project Name', flex: 1 },
    { field: 'latitude', headerName: 'Latitude', width: 120 },
    { field: 'longitude', headerName: 'Longitude', width: 120 },
    { field: 'status', headerName: 'Status', width: 130 },
    {
      field: 'lastUpdated',
      headerName: 'Last Updated',
      width: 180,
      valueFormatter: p => p.value?.toLocaleString() ?? ''
    }
  ], [])

  return (
    <Box sx={{ height: 500 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        pagination
        paginationMode="server"
        page={page - 1}
        pageSize={pageSize}
        rowCount={rowCount}
        onPageChange={p => onPageChange(p + 1)}
        selectionModel={selectedRow ? [selectedRow.id] : []}
        onRowClick={p => onRowSelect(p.row)}
      />
    </Box>
  )
})

export default DataTable
