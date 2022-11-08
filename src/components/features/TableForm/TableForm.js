import styles from './TableForm.module.scss';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getTableId } from '../../../redux/tablesRedux';
import { updateTable } from '../../../redux/tablesRedux';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';



const TableForm = () => {
  const { id }  = useParams();
  const tableData = useSelector(state => getTableId(state, parseInt(id)));
  const [status, setStatus] = useState(tableData.status);
  const [peopleAmount, setPeopleAmount] = useState(tableData.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(tableData.maxPeopleAmount);
  const [billValue, setBillValue] = useState(tableData.bill);

  const dispatch = useDispatch();

  const update = () => {
    dispatch(updateTable());
  }

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
          <Form.Select onChange={e => setStatus(e.target.value)}>
            <option>{tableData.status}</option>
              <option value="1">Free</option>
              <option value="2">Reserved</option>
              <option value="3">Busy</option>
              <option value="4">Cleaning</option>
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