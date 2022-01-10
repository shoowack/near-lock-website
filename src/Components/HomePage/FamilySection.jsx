import React from 'react';

const FamilySection = () => (
  <section className="text-center py-5 odd-section">
    <h3>The Near Lock family</h3>
    <p>Near Lock is available for your iPhone, iPad, Mac and Apple Watch as separate apps.</p>
    <img
      src="/family.png"
      className="img-responsive col-md-6 mt-3"
      style={{ maxWidth: '950px' }}
      alt=""
    />
  </section>
);

export default FamilySection;
