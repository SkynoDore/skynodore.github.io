import Header from './components/header';
import Footer from './components/footer';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import SocialNetwork from './pages/SocialNetwork.jsx'
import WordpressPages from './pages/WordpressPages.jsx';
import ContentManager from './pages/ContentManager.jsx';

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/socialnetwork" element={<SocialNetwork />} />
        <Route path="/wordpresspages" element={<WordpressPages />} />
        <Route path="/contentmanager" element={<ContentManager />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
