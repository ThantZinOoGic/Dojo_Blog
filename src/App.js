import './App.css';
import BlogDetail from './BlogDetail';
import Create from './Create';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

function App() {

  return (
    <Router>
      <div className="App">
      <Navbar/>
      </div>
      <div className="content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/blogs/:id' element={<BlogDetail/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
