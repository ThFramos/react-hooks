import React, { memo } from 'react';

const UseCallbackButton = (props) => {
  console.log('render...2');
  return (
    <div>
      <button className="btn" onClick={() => props.inc(6)}>
        {' '}
        +6
      </button>
      <button className="btn" onClick={() => props.inc(12)}>
        {' '}
        +12
      </button>
      <button className="btn" onClick={() => props.inc(18)}>
        {' '}
        +18
      </button>
      <input
        value={props.valueRead}
        onChange={(x) => props.read(x.target.value)}
      />
    </div>
  );
};
export default memo(UseCallbackButton);
