import { json } from 'react-router';
import { API_URL } from '../../src/config';

//selectors
export const getAllTables = ({tables}) => tables;
export const getTableId = ({tables}, tableId) => tables.find(table => table.id === tableId);
// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLE = createActionName('UPDATE_TABLE');

// action creators
export const updateTable = payload => ({ type: 'UPDATE_TABLE', payload });

export const fetchTables = () => {
  return(dispatch) => {
    fetch(`${API_URL}/tables`)
    .then(res => res/json())
    .then(tables => dispatch(updateTable(tables)))
  };
};

export const updateTableValues = (newValues) => {
  return(dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...newValues}),
    };

    fetch(`${API_URL}/tables/${newValues.id}`, options)
    .then(() => dispatch(updateTable(newValues)))
  };
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLE:
      return statePart.map(table => (table.id === action.payload.id ? {...table, ...action.payload} : table));
    default:
      return statePart;
  };
};
export default tablesReducer;