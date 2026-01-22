
import { Box, AppBar, Toolbar, Typography } from '@mui/material'

function Layout({ children }) {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      <AppBar position="static" elevation={1}>
        <Toolbar>
          <Typography variant="h6" component="div">
            Geo Data Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="main"
        sx={{
          flex: 1,
          padding: 2,
          overflow: 'hidden'
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default Layout
