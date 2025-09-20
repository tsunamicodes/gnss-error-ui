import React from 'react'

export default function EvaluationPage() {
  return (
    <div>
      <h1>Evaluation</h1>
      <p>Here you can analyze model errors and metrics.</p>

      <div style={{ marginTop: '20px' }}>
        <h3>📊 Horizon Metrics</h3>
        <ul>
          <li>15m RMSE: 0.0005</li>
          <li>1h RMSE: 0.0012</li>
          <li>24h RMSE: 0.0035</li>
        </ul>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>📈 Residuals (demo)</h3>
        <p>Visualizations of residual distributions will appear here.</p>
      </div>
    </div>
  )
}
