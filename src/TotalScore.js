// Block.js
import React from 'react';

function Block({ score, onScoreChange }) {
  return (
    <div>
      <input
        type="number"
        value={score}
        onChange={(e) => onScoreChange(parseInt(e.target.value))}
      />
    </div>
  );
}

export default Block;
