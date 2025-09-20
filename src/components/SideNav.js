// src/components/SideNav.js
import React from 'react'
import { NavLink } from 'react-router-dom'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard'
import FolderIcon from '@mui/icons-material/Folder'
import SettingsIcon from '@mui/icons-material/Settings'
import AutoGraphIcon from '@mui/icons-material/AutoGraph'
import BarChartIcon from '@mui/icons-material/BarChart'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const drawerWidth = 240
const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
  { to: '/upload', label: 'Data Upload', icon: <FolderIcon /> },
  { to: '/experiments', label: 'Experiments', icon: <SettingsIcon /> },
  { to: '/predictions', label: 'Predictions', icon: <AutoGraphIcon /> },
  { to: '/evaluation', label: 'Evaluation', icon: <BarChartIcon /> }
]

function NavList({ onClick }) {
  return (
    <List>
      {navItems.map(it => (
        <NavLink key={it.to} to={it.to} style={{ textDecoration: 'none', color: 'inherit' }}>
          {({ isActive }) => (
            <ListItemButton
              onClick={onClick}
              sx={{ mb: 0.5, borderRadius: 1, bgcolor: isActive ? '#0f172a' : 'transparent', color: 'white' }}
            >
              <ListItemIcon sx={{ color: 'inherit' }}>{it.icon}</ListItemIcon>
              <ListItemText primary={it.label} />
            </ListItemButton>
          )}
        </NavLink>
      ))}
    </List>
  )
}

export default function SideNav({ mobileOpen, handleDrawerToggle }) {
  const theme = useTheme()
  const mdUp = useMediaQuery(theme.breakpoints.up('md'))

  const drawerContent = (
    <Box sx={{ width: drawerWidth, bgcolor: '#1e293b', color: 'white', height: '100%', p: 2, boxSizing: 'border-box' }}>
      <Box sx={{ mb: 3 }}>
        {/* put your logo file in public/logo.png and it will be served */}
        <img src="/logo.png" alt="logo" style={{ width: '100%' }} />
      </Box>
      <NavList onClick={!mdUp ? handleDrawerToggle : undefined} />
    </Box>
  )

  return (
    <>
      {/* Permanent drawer on md+ */}
      {mdUp ? (
        <Drawer variant="permanent" open
          sx={{ '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' } }}>
          {drawerContent}
        </Drawer>
      ) : (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{ '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' } }}
        >
          {drawerContent}
        </Drawer>
      )}
      {/* spacer for layout so content sits to the right of permanent drawer */}
      {mdUp && <Box sx={{ width: drawerWidth, flexShrink: 0 }} />}
    </>
  )
}
