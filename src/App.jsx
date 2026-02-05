
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/about/About'
import Blog from './components/Blog/Blog'
import BlogDetails from './components/blogDetails/BlogDetails'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Notfound from './components/Notfound/Notfound'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='blog' element={<Blog />} />
        <Route path='blog/:id' element={<BlogDetails />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
      <Footer />
    </>

  )
}

export default App
