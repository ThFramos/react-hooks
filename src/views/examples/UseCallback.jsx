import React, { useState, useCallback } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import UseCallbackButton from './UseCallbackButton';

const UseCallback = (props) => {
  const [count, setcount] = useState(0);
  const [text, setText] = useState('tes');

  console.log('render...1');
  const inc = useCallback(
    (delta) => {
      setcount((curr) => curr + delta);
    },
    [setcount]
  );
  const read = useCallback(
    (delta) => {
      console.log(delta);
      setText((current) => delta);
    },
    [setText]
  );

  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memoizada!"
      />
      <div className="center">
        <span className="text">{count}</span>
        <UseCallbackButton inc={inc} read={read} valueRead={text} />
      </div>
    </div>
  );
};

export default UseCallback;
