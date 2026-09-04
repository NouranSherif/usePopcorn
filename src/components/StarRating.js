import React, { useState } from 'react';

import Star from './Star';

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
};
const starContainerStyle = {
  display: 'flex',
  gap: '0.5rem',
};

function StarRating({
  maxRating = 5,
  color = '#fcc419',
  size = '48',
  defaultRating = 0,
  onSetRating,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const textStyle = {
    lineHeight: '1',
    margin: '0',
    fontSize: `${size / 1.5}px`,
    color: color,
  };

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (value, index) => (
          <Star
            key={index}
            onClick={() => {
              setRating(index + 1);
              onSetRating(index + 1);
            }}
            full={rating >= index + 1 || tempRating >= index + 1}
            onMouseEnter={() => setTempRating(index + 1)}
            onMouseLeave={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>{tempRating || rating || ''}</p>
    </div>
  );
}

export default StarRating;
