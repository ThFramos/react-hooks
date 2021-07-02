import React, { useReducer } from 'react';
import PageTitle from '../../components/layout/PageTitle';

const initialState = {
  filtros: {
    cfop: {
      id: 'cfopId',
      name: 'CFOP',
      value: 'testeCfop',
    },
    ipi: {
      id: 'ipiId',
      name: 'IPI',
      value: '',
    },
  },
  number: 0,
};

function reducer(state, action) {
  console.log('action', action);
  switch (action.type) {
    case 'cfop':
      return {
        ...state,
        filtros: {
          ...state.filtros,
          cfop: {
            id: 'cfopId',
            name: 'CFOP',
            value: action.payload,
          },
        },
      };
    case 'IPI':
      return {
        ...state,
        filtros: {
          cfop: {
            id: 'ipiId',
            name: 'IPI',
            value: action.payload.value,
          },
        },
      };
    case 'number':
      return {
        ...state,
        number: state.number + 2,
      };
    default:
      return state;
  }
}

const UseReducer = (props) => {
  const [state, dispacth] = useReducer(reducer, initialState);
  console.log(' state', state);
  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        <span className="text">{state.number}</span>
        <button className="btn" onClick={() => dispacth({ type: 'number' })}>
          +2
        </button>
        <span className="text">{state.filtros.cfop.value}</span>
        <input
          id={'cfop'}
          type="text"
          value={state.filtros.cfop.value}
          onChange={(x) =>
            dispacth({
              type: x.currentTarget.id,
              payload: x.currentTarget.value,
            })
          }
        />
      </div>
    </div>
  );
};

export default UseReducer;
