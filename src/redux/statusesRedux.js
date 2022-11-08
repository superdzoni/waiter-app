//selectors
export const getAllStatuses = ({ statuses }) => statuses;

// actions
const createActionName = actionName => `app/statuses/${actionName}`;


// action creators
const statusesReducer = (statePart = [], action) => {
  switch (action.type) {

    default:
      return statePart;
  };
};



export default statusesReducer;