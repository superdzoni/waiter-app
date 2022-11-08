//selectors
export const getAllStatuses = ({ statuses }) => statuses;

const statusesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default statusesReducer;