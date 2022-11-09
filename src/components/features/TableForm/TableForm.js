import styles from './TableForm.module.scss';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getTableId, updateTable } from '../../../redux/tablesRedux';
import { getAllStatuses } from '../../../redux/statusesRedux';
import { Form, Button, Container, Col} from 'react-bootstrap';

const TableForm = () => {
  const { id }  = useParams();
  const tableData = useSelector(state => getTableId(state, parseInt(id)));
  const statusOptions = useSelector(getAllStatuses);
  const [status, setStatus] = useState(tableData.status);
  const [peopleAmount, setPeopleAmount] = useState(tableData.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(tableData.maxPeopleAmount);
  const [billValue, setBillValue] = useState(tableData.bill);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const update = () => {
    dispatch(updateTable({id, status, peopleAmount: parseInt(peopleAmount), maxPeopleAmount: parseInt(maxPeopleAmount), billValue: parseInt(billValue)}));
    navigate('/');
  };

  useEffect(() => {
    if(status === "Busy") {
      setBillValue(0)
    };
    if(status === "Cleaning" || status === "Free") {
      setPeopleAmount(0)
    };
  }, [status]);

  useEffect(() => {
    const peopleAmountValue = parseInt(peopleAmount);
    const maxPeopleAmountValue = parseInt(maxPeopleAmount);
    if (peopleAmountValue < 0) {
      setPeopleAmount(0)
    } else if (maxPeopleAmountValue < 0) {
      setMaxPeopleAmount(0)
    } else if (peopleAmountValue > maxPeopleAmountValue) {
      setPeopleAmount(maxPeopleAmountValue)
    } else if (maxPeopleAmountValue > 10) {
      setMaxPeopleAmount(10)
    } else if (peopleAmountValue > 10) {
      setPeopleAmount(10);
    }
  }, [peopleAmount, maxPeopleAmount]);

  if(!tableData) {
  return (
    <Navigate to="/" />
  )
  } else {
    return (
    <div>
      <Container className="p-0">
      <Col sm={3}>
      <h1>Table {tableData.id}</h1>
      <Form className="row">
        <Form.Group className="d-inline-flex my-2 align-items-center">
          <Form.Label className="fw-bold pe-4">Status:</Form.Label>
          <Form.Select value="status" className={styles.input_select} onChange={e => setStatus(e.target.value)}>
            <option>{status}</option>
            {statusOptions.map((statusOption) => (
            status !== statusOption ? <option key={statusOption}>{statusOption}</option> : ''
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="d-inline-flex my-2 align-items-center">
          <Form.Label className="fw-bold pe-4">People:</Form.Label>
          <Form.Control type="number" className={styles.input} value={peopleAmount} onChange={e => setPeopleAmount(e.target.value)} />
            <span className="px-2">/</span>
          <Form.Control type="number"  className={styles.input} value={maxPeopleAmount} onChange={e => setMaxPeopleAmount(e.target.value)} />
        </Form.Group>
          <div className={clsx(tableData.status !== "Busy" && styles.hidden_input)} >
            <Form.Group className="d-inline-flex my-2 align-items-center">
              <Form.Label className="fw-bold d-inline-flex">Bill: <span className="fw-normal ps-4 pe-1">$</span></Form.Label>
            <Form.Control type="number" className={styles.input} value={billValue} onChange={e => setBillValue(e.target.value)} />
            </Form.Group>
          </div>
      </Form>
      <Button onClick={update} className="mt-2" type="submit">Update</Button>
      </Col>
    </Container>
    </div>
    );
  };
};

export default TableForm;