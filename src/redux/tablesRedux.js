import { API_URL } from '../../src/config';

//selectors
export const getAllTables = ({tables}) => tables;
export const getTableId = ({tables}, tableId) => tables.find(table => table.id === tableId);
// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLE = createActionName('UPDATE_TABLE');
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

// action creators
export const updateTable = payload => ({ type: UPDATE_TABLE, payload });
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });

export const fetchTables = () => {
  return(dispatch) => {
    fetch(`${API_URL}/tables`)
    .then(res => res.json())
    .then(tables => dispatch(updateTables(tables)))
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
    case UPDATE_TABLES:
      return [...action.payload]
    case UPDATE_TABLE:
      return statePart.map(table => (table.id === action.payload.id ? {...table, ...action.payload} : table));
    default:
      return statePart;
  };
};
export default tablesReducer;