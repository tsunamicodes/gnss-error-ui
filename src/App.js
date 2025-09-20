// src/App.js
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Box from '@mui/material/Box'
import TopBar from './components/TopBar'
import SideNav from './components/SideNav'
import Dashboard from './pages/Dashboard'
import UploadPage from './pages/UploadPage'
import ExperimentsPage from './pages/ExperimentsPage'
import PredictionsPage from './pages/PredictionsPage'
import EvaluationPage from './pages/EvaluationPage'
import './index.css'

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

  return (
    <Router>
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <SideNav mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
        <Box component="main" sx={{ flex: 1, p: 3, overflow: 'auto' }}>
          <TopBar handleDrawerToggle={handleDrawerToggle} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/experiments" element={<ExperimentsPage />} />
            <Route path="/predictions" element={<PredictionsPage />} />
            <Route path="/evaluation" element={<EvaluationPage />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  )
}
