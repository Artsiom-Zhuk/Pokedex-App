import React from 'react';

import './LineDescription.scss';

interface LineDescriptionProps {
  title1: string,
  value1: string,
  title2: string,
  value2: string,
}

const LineDescription = ({ title1, value1, title2, value2 }: LineDescriptionProps): JSX.Element => {
  return (
    <div className="line-description">
      <div>
        <span className="line-description__title">{`${title1}:`}</span>
        {' '}
        <span className="line-description__value">{value1}</span>
      </div>
      <div>
        <span className="line-description__title">{`${title2}:`}</span>
        {' '}
        <span className="line-description__value">{value2}</span>
      </div>
    </div>
  )
};

export default LineDescription;
