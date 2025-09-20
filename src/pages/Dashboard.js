// src/pages/Dashboard.js
import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function Dashboard() {
  const stats = [
    { label: 'Datasets', value: 3 },
    { label: 'Experiments', value: 2 },
    { label: 'Satellites', value: 12 },
    { label: 'Latest RMSE (24h)', value: '0.0035' }
  ]

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>

      <Grid container spacing={2}>
        {stats.map(s => (
          <Grid item xs={12} sm={6} md={3} key={s.label}>
            <Card elevation={1}>
              <CardContent>
                <Typography variant="subtitle2" color="text.secondary">{s.label}</Typography>
                <Typography variant="h5" sx={{ mt: 1 }}>{s.value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 3 }}>
        <Typography variant="body2" color="text.secondary">Use these cards to show top-level KPIs. Click a card later to drill into details.</Typography>
      </Box>
    </Box>
  )
}
