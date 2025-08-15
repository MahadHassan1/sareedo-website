import React from 'react';
import './Education.css';
import ServiceCard from '../serviceCard/ServiceCard';

const Education = () => {
  return (
    <div className='tsp-wrapper'>
      <div className='heading-container'>
        <h2>Climate Education Programs</h2>
        <div className='line'></div>
      </div>
      <div className='tsp-container'>
        <ServiceCard 
          image={'/images/climate-education-1.jpg'}
          title="Climate Education Programs"
          description="Community learning circles, school outreach, and climate literacy workshops for youth and adults."
        />
        <ServiceCard 
          image={'/images/community-resilience-1.jpg'}
          title="Community Resilience Building"
          description="Supporting local groups to organize, prepare and adapt to climate shocks through trainings and dialogues."
        />
      </div>
    </div>
  );
}

export default Education