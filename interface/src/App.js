import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PeopleList from "./components/PeopleList";
import EditPeople from "./components/EditPeople";
import CreateCar from "./components/CreateCar";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/first-mern-app/" element={ <PeopleList /> } />
          <Route path="/first-mern-app/edit/:id" element={ <EditPeople /> } />
          <Route path="/first-mern-app/car" element={ <CreateCar /> } />
          <Route path="/first-mern-app/user" element={ <CreateUser /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
