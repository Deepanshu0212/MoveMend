import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import MeetTeam from "./Pages/MeetTeam";
import JoinTeam from './Pages/JoinTeam';
import Person1 from './Pages/Persons/Person1';
import Person2 from './Pages/Persons/Person2';
import Person3 from './Pages/Persons/Person3';
import Person4 from './Pages/Persons/Person4';
import Person5 from './Pages/Persons/Person5';
import Person6 from './Pages/Persons/Person6';
import Person7 from './Pages/Persons/Person7';
import Person8 from './Pages/Persons/Person8';
import Service from "./Pages/Service";
import Blog from "./Pages/Blog";
import Book from "./Pages/Book";
import Personselect from "./Pages/Personselect";
import Calendar from "./Pages/Calender";
import Finalform from "./Pages/Finalform";
import OrderDetail from "./Pages/OrderDetail";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/meet-team" element={<MeetTeam/>} />
        <Route path="/meet-team/person1" element={<Person1/>} />
        <Route path="/meet-team/person2" element={<Person2/>} />
        <Route path="/meet-team/person3" element={<Person3/>} />
        <Route path="/meet-team/person4" element={<Person4/>} />  
        <Route path="/meet-team/person5" element={<Person5/>} />
        <Route path="/meet-team/person6" element={<Person6/>} />
        <Route path="/meet-team/person7" element={<Person7/>} />
        <Route path="/meet-team/person8" element={<Person8/>} />
        <Route path="/join-team" element={<JoinTeam/>} />
        <Route path="/services" element={<Service/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/book-appointment" element={<Book/>} /> 
        <Route path="/person" element={<Personselect/>} />  
        <Route path="/person/calender" element={<Calendar/>} />
        <Route path="/calender" element={<Calendar/>} />
        <Route path="/form" element={<Finalform/>} /> 
        <Route path="/order" element={<OrderDetail/>} />         
      </Routes>
    </Router>
  )
}
export default App;