import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Footer from './Footer';
function App() {
  return (
    <Fragment>
    <div className="App">
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>
      <Footer/>
    </Fragment>
  );
}

export default App;
