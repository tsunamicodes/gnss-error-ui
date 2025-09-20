import React, { useState } from 'react'

export default function PredictionsPage() {
  const [satellite, setSatellite] = useState('G01')
  const [horizon, setHorizon] = useState(15)

  function handlePredict() {
    alert(`🔮 Generating predictions for ${satellite} at horizon ${horizon} minutes (demo only).`)
  }

  return (
    <div>
      <h1>Predictions</h1>
      <p>Select a satellite and horizon, then view predictions.</p>

      <div style={{ margin: '10px 0' }}>
        <label>Satellite: </label>
        <select value={satellite} onChange={e => setSatellite(e.target.value)}>
          <option value="G01">G01 — MEO</option>
          <option value="G02">G02 — MEO</option>
          <option value="G05">G05 — GEO</option>
        </select>
      </div>

      <div style={{ margin: '10px 0' }}>
        <label>Horizon (minutes): </label>
        <select value={horizon} onChange={e => setHorizon(Number(e.target.value))}>
          <option value={15}>15</option>
          <option value={30}>30</option>
          <option value={60}>60</option>
          <option value={120}>120</option>
          <option value={1440}>1440 (24h)</option>
        </select>
      </div>

      <button
        onClick={handlePredict}
        style={{
          padding: '10px 16px',
          background: '#10b981',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Generate Predictions
      </button>
    </div>
  )
}
