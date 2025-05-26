import Header from './components/header';
import Footer from './components/footer';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import SocialNetwork from './pages/SocialNetwork.jsx'
import WordpressPages from './pages/WordpressPages.jsx';

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/socialnetwork" element={<SocialNetwork />} />
        <Route path="/wordpresspages" element={<WordpressPages />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
