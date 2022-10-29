import React from 'react'
import './styles.css'

const Metric = ({ title, count, sum, min, max, className = '' }) => {
  return (
    <>
      {title && <div className={`card ${className}`}>
        <div>
          <h3>{title}</h3>
        </div>
        <div className='card-badges'>
          <span className="badge text-bg-primary">count: {count}</span>
          <span className="badge text-bg-primary">sum: {sum}</span>
          <span className="badge text-bg-primary">min: {min}</span>
          <span className="badge text-bg-primary">max: {max}</span>
        </div>
      </div>
      }
    </>
  )
}

export default Metric
