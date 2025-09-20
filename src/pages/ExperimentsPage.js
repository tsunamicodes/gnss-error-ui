import React from 'react'

export default function ExperimentsPage() {
  return (
    <div>
      <h1>Experiments</h1>
      <p>Here you can start, track, and review training runs for your GNSS models.</p>

      <button
        onClick={() => alert('🚀 Demo: Starting a mock experiment...')}
        style={{
          padding: '10px 16px',
          background: '#2563eb',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        Start Demo Experiment
      </button>
    </div>
  )
}
