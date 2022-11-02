import Form from 'react-bootstrap/Form';

const TableInfo = () => {
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Status:</Form.Label>
          <Form.Label>People:</Form.Label>
          <Form.Label>Bill</Form.Label>
        </Form.Group>
      </Form>
      <div>Table 1</div>
      <div>Status:</div>
      <div>People:</div>
      <div>Bill: $</div>
      <div>Update</div>
    </div>


  );
};

export default TableInfo;