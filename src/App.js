import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { DragDropContext } from 'react-beautiful-dnd';

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/SignUp' element={<SignUp/>} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;