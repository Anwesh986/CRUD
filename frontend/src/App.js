// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Student from './Student';
import CreateStudent from './CreateStudent';
import UpdateStudent from './UpdateStudent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Student />}  />
            <Route path='/create' element={<CreateStudent/>} />
            <Route path='/update/:id' element={<UpdateStudent/>}/>
         </Routes>     
      </BrowserRouter>  
    </div>
  );
}

export default App;
