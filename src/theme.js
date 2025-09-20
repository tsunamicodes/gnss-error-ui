// src/theme.js
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },    // blue
    secondary: { main: '#10b981' },  // green
    background: { default: '#f6f9fc', paper: '#fff' }
  },
  typography: {
    fontFamily: 'Inter, Roboto, system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial'
  }
})

export default theme
