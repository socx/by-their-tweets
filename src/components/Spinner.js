import React from 'react';

const Spinner = (props) => {
  return (
    <>
      <div className={`spinner-${props.type} text-${props.color}`} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
}

export default Spinner;
