import { useState, useCallback } from 'react'

export function useTableSelection() {
  const [selectedRow, setSelectedRow] = useState(null)

  const selectRow = useCallback(row => {
    setSelectedRow(prev =>
      prev?.id === row?.id ? prev : row
    )
  }, [])

  return {
    selectedRow,
    selectRow
  }
}
