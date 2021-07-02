import React, { useContext, useEffect } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

import DataContext from '../../data/DataContext';
import { AppContext } from '../../data/Store';

const UseContext = (props) => {
  const { state, setState } = useContext(DataContext);

  function setValue(delta, id) {
    setState({
      ...state,
      number: state.number + delta,
      id,
    });
  }

  const { number, setNumber, text, setText } = useContext(AppContext);

  useEffect(() => {
    if (number > 1300) {
      setText('será??');
    } else {
      setText('teste');
    }
  }, [number]);

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />
      <SectionTitle title={'Atividade#01'} />
      <div className="center">
        <span className="text">{state.text}</span>
        <span className="text">{state.number}</span>
      </div>

      <div className="center">
        <div>
          <button
            id={'subtrair'}
            className="btn"
            onClick={(x) => setValue(-1, x.currentTarget.id)}
          >
            -1
          </button>
          <button
            id={'adicionar'}
            className="btn"
            onClick={(x) => setValue(1, x.currentTarget.id)}
          >
            +1
          </button>
        </div>
      </div>
      <SectionTitle title={'Atividade#02'} />
      <div className="center">
        <span className="text">{text}</span>
        <span className="text">{number}</span>
        <div>
          <button className="btn" onClick={() => setNumber(number - 1)}>
            -1
          </button>
          <button className="btn" onClick={() => setNumber(number + 1)}>
            +1
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseContext;
