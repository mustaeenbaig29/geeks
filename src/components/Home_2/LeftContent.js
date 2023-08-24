import React from 'react'

const LeftContent = () => {
  return (
    <div className='left__cont__txt'>
    <h3>Fintech Solution</h3>
    <p className='subtitle'>Transforming Fintech with AI</p>
    <div className='tags'>
      <span>Fraud detection</span>
      <span>Transaction categorisation</span>
      <span>Risk Scoring</span>
    </div>
    <div className='content'>
      <p>
        Empower your financial institution with our advanced fintech solutions. From real-time fraud detection
        to easy bookkeeping, our software development services provide credit risk scoring for accurate lending
        eligibility, transaction categorization for seamless organization, and anomaly detection to safeguard
        your assets
      </p>
    </div>
    <button className='capsule-button'>
      See Full Case Study
      <span className='arrow-icon'>➡</span>
    </button>
  </div>
  )
}

export default LeftContent
