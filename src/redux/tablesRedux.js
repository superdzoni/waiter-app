//selectors
export const getAllTables = ({tables}) => tables;
export const getTableId = ({tables}, tableId) => tables.find(table => table.id === tableId);
// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLE = createActionName('UPDATE_TABLE');

// action creators

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLE:
      return [...action.payload];
    default:
      return statePart;
  };
};
export default tablesReducer;