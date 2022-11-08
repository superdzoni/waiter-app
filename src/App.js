import { Container } from 'react-bootstrap';
import Home from './components/pages/Home/Home';
import TableInfo from './components/pages/TableInfo/TableInfo';
import NotFound from './components/pages/NotFound/NotFound';
import Header from './components/views/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/views/Footer/Footer';

function App() {
  return (
    <main>
      <Container>
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
