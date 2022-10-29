import React from 'react'
import './styles.css'

const Metric = ({ title = 'NaN', count = 0, sum = 0, min, max, className = '' }) => {
  return (
    <div className={`card ${className}`}>
      <div>
        <h3>{title}</h3>
      </div>
      <div className='card-badges'>
        <span className="badge text-bg-primary">{count}</span>
        <span className="badge text-bg-primary">{sum}</span>
        {min && <span className="badge text-bg-primary">{min}</span>}
        {max && <span className="badge text-bg-primary">{max}</span>}
      </div>
    </div>
  )
}

export default Metric
