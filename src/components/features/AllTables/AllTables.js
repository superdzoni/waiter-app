// import { getAllLists } from '../../../../react-app/src/redux/listsRedux';
// import { useSelector } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AllTables = () => {
  // const tables = useSelector(state => getAllLists(state));
  return (
    <main>

      <div>Table 1
        <div>Status: Reserved</div>
        <Button variant="primary">Show more</Button>
      </div>
      <div>Table 2
        <div>Status: Free</div>
        <Button variant="primary">Show more</Button>
      </div>
      <div>Table 3
        <div>Status: Busy</div>
        <Button variant="primary">Show more</Button>
      </div>
      <div>Table 4
        <div>Status: Cleaning</div>
        <Button variant="primary">Show more</Button>
      </div>
    </main>
  );
};

export default AllTables;