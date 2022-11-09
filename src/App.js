import { Container } from 'react-bootstrap';
import Home from './components/pages/Home/Home';
import TableInfo from './components/pages/TableInfo/TableInfo';
import NotFound from './components/pages/NotFound/NotFound';
import Header from './components/views/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/views/Footer/Footer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables } from '../src/redux/tablesRedux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <main>
      <Container style={{width: "1000px"}}>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/table/:id" element={<TableInfo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
        <Footer />
      </Container>
    </main>

  );
}

export default App;
