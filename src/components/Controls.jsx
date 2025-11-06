import React from 'react';

export default function Controls({ onPrev, onNext, onRandom }) {
  return (
    <div className="controls">
      <button onClick={onPrev} aria-label="Anterior">
        {}
        &lt;
      </button>
      <button onClick={onNext} aria-label="Siguiente">
        {}
        &gt;
      </button>
      <button onClick={onRandom} aria-label="Aleatorio">
        {}
        Aleatorio
      </button>
    </div>
  );
}