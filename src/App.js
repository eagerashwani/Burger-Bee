import './styles/app.scss';
import './styles/header.scss';
import './styles/home.scss';
import './styles/founder.scss';
import './styles/menu.scss';
import './styles/footer.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';


function App() {
  // 2. Add routes
  // 4. Add components in element
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
