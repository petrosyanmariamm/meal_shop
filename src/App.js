import {Routes, Route} from 'react-router-dom';

import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CategoryPage } from './pages/CategoryPage';
import { DetailPage } from './pages/DetailPage';


function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/category/:name/:descr' element={<CategoryPage />} />
          <Route path='/meal/:id' element={<DetailPage />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
