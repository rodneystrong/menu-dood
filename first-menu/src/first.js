import React from 'react';
import './App.css';

const First = () => {
  const whatever = 'okok';
  const hi = 'i see you';
  return (
    <div>
      <h1>yeayooo</h1>
      <p>{whatever}</p>
      <button
        onClick={() => {
          alert('haha');
          console.log(hi);
        }}
      >
        push me biiitcch
      </button>
    </div>
  );
};

export default First;
