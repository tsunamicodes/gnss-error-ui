// src/pages/UploadPage.js
import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import CircularProgress from '@mui/material/CircularProgress'

const STORAGE_KEY = 'gnss_datasets'
function loadDatasets(){ try{ return JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]') }catch{return[]} }
function saveDatasets(a){ localStorage.setItem(STORAGE_KEY, JSON.stringify(a)) }

export default function UploadPage(){
  const [file, setFile] = useState(null)
  const [datasets, setDatasets] = useState(loadDatasets())
  const [isUploading, setIsUploading] = useState(false)

  useEffect(()=> saveDatasets(datasets), [datasets])

  function handleSelect(e){ setFile(e.target.files?.[0] ?? null) }

  async function handleUpload(){
    if(!file) return
    setIsUploading(true)
    // simulate web upload delay
    await new Promise(r=>setTimeout(r, 1200))
    const meta = { id:`ds_${Date.now()}`, name:file.name, uploadedAt:new Date().toISOString(), satellites: Math.floor(Math.random()*30)+5, samplingMinutes: 15 }
    setDatasets(prev=>[meta,...prev])
    setFile(null)
    setIsUploading(false)
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Data Upload</Typography>
      <Paper sx={{ p:3, mb:3 }}>
        <input id="file" type="file" accept=".csv,.zip" style={{ display:'none' }} onChange={handleSelect} />
        <label htmlFor="file">
          <Button variant="outlined" component="span" sx={{ mr:2 }}>Choose file</Button>
        </label>

        <Button variant="contained" onClick={handleUpload} disabled={!file || isUploading}>
          {isUploading ? <><CircularProgress size={18} color="inherit" sx={{ mr:1 }} />Uploading...</> : 'Upload'}
        </Button>

        <Box sx={{ mt:2 }}>
          <Typography variant="caption">{file ? `Selected: ${file.name}` : 'No file selected'}</Typography>
        </Box>
      </Paper>

      <Paper sx={{ p:2 }}>
        <Typography variant="h6">Uploaded Datasets (local)</Typography>
        <List>
          {datasets.length === 0 && <ListItem>No datasets uploaded yet.</ListItem>}
          {datasets.map(ds => (
            <ListItem key={ds.id} sx={{ flexDirection:'column', alignItems:'flex-start' }}>
              <strong>{ds.name}</strong>
              <Typography variant="caption">Satellites: {ds.satellites} · Sampling: {ds.samplingMinutes} min · {new Date(ds.uploadedAt).toLocaleString()}</Typography>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  )
}
