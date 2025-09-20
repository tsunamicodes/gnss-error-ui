// src/components/TopBar.js
import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

export default function TopBar({ handleDrawerToggle }) {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ mb: 2 }}>
      <Toolbar sx={{ px: 0 }}>
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: 'none' } }} // only visible on small screens
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          SIH GNSS — Error Prediction
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

