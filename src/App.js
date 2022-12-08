import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Table from './Components/Table/Table.jsx'
import TableForm from './Components/Form/TableForm.jsx';
import Navbar from './Components/Navbar/Navbar.jsx'
function App() {
  return (
    <div className='App'>
    <Navbar/>
       <BrowserRouter>
       <Routes>
       <Route path='/' element={<Table/>}></Route>
         <Route path='/table' element={<TableForm/>}></Route>
       </Routes>
     </BrowserRouter>
    </div>
  );
 
}

export default App