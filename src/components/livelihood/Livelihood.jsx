import React from 'react';
import "../livelihood/Livelihood.css"
import ServiceCard from '../serviceCard/ServiceCard';

const Livelihood = () => {
  return (
    <div className='tsp-wrapper'>
      <div className='heading-container'>
        <h2>Community Resilience Building</h2>
        <div className='line'></div>
      </div>
      <div className='tsp-container'>
        <ServiceCard 
          image={'/images/community-resilience-2.jpg'}
          title="Community Resilience Building"
          description="Strengthening local systems, preparedness, and livelihoods through inclusive, community-led approaches."
        />
      </div>
    </div>
  )
}

export default Livelihood