import React from 'react';

export default function FeatureContainer({
  odd,
  newFeature,
  featureIcon,
  featureTitle,
  featureDescription,
  padding,
  children,
}) {
  const browserFriendlyTitle = featureTitle.replaceAll(' ', '-').toLowerCase();

  return (
    <div className={`container-fluid${odd ? ' odd-section' : ''}`} id={browserFriendlyTitle}>
      <div className={`container text-center feature ${padding || 'py-5'}`}>
        <div className="row">
          <div className="col-12">
            {newFeature && <span className="new-feature">NEW</span>}

            <img
              src={`/feature/${featureIcon || browserFriendlyTitle}_icon_alt.svg`}
              style={{ width: '60px', height: '60px' }}
              className="mb-4"
              alt=""
            />
            <h2>{featureTitle}</h2>
          </div>
        </div>
        <div className="row">
          <div
            className="col-12 col-md-8 offset-md-2 mb-5"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: featureDescription }}
          />
        </div>
        {children}
      </div>
    </div>
  );
}
