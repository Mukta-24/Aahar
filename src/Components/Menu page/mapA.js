import React from 'react';

const MapA = ({ data }) => {
  const renderNestedObject = (obj) => {
    return (
      <div>
        {Object.keys(obj).map((key) => {
          const value = obj[key];
          if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            // Recursively render nested object
            return (
              <li key={key}>
                {key}
                {renderNestedObject(value)}
              </li>
            );
          } else {
            return <li key={key}>{`${key}: ${value}`}</li>;
          }
        })}
      </div>
    );
  };

  return (
    <div>
      <h2>Nested Object Data</h2>
      {renderNestedObject(data)}
    </div>
  );
};

export default MapA;
