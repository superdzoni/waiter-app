import { Container } from 'react-bootstrap';
import Home from './components/pages/Home/Home';
import TableInfo from './components/pages/TableInfo/TableInfo';
import NotFound from './components/pages/NotFound/NotFound';
import NavBar from './components/views/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import Copyright from './components/views/Copyright/Copyright';

function App() {
  return (
    <main>
      <Container>
        <NavBar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/table/:id" element={<TableInfo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
        <Copyright />
      </Container>
    </main>

  );
}

export default App;
