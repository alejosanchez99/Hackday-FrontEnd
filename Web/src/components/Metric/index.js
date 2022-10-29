import React from 'react'
import './styles.css'

const Metric = ({ title = 'NaN', count = 0, sum = 0, min = 0, max = 0 }) => {
  return (
    <div className='card'>
      <div>
        <h3>{title}</h3>
      </div>
      <div className='card-badges'>
        <span className="badge text-bg-primary">{count}</span>
        <span className="badge text-bg-primary">{sum}</span>
        <span className="badge text-bg-primary">{min}</span>
        <span className="badge text-bg-primary">{max}</span>
      </div>
    </div>
  )
}

export default Metric
