import './App.css';
import Cart from './Components/Filter';
import Delete from './Components/Delete';
import Header from './Components/Header/Header';
import Post from './Components/Post';
import Users from './Components/Users';
import Todo from './Components/Todo';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Comments from './Components/Header/Comments';
import Quotes from './Components/Quotes';
import Material from './Components/MaterialUi/Material';


function App() {
  return (
     <div>
      {/* <BrowserRouter>
      <Header />
          <Routes>
            <Route path='/Cart' element={<Cart/>} />
            <Route path='/Delete' element={<Delete/>} />
            <Route path='/Post' element={<Post/>} />
            <Route path='/Users' element={<Users/>} />
            <Route path='/Comments' element={<Comments/>} />
            <Route path='/Todo' element={<Todo/>} />
            <Route path='/Quotes' element={<Quotes/>} />
          </Routes>
      
      </BrowserRouter> */}

      <Material />

     


    </div>
  );
}

export default App;
