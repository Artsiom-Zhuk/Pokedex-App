import React from 'react';

import { LineDescriptionProps } from './types';

import './LineDescription.scss';

const LineDescription = ({
  title1, value1, title2, value2,
}: LineDescriptionProps): JSX.Element => (
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
);

export default LineDescription;
