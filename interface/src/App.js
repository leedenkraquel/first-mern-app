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
          <Route path="/" element={ <PeopleList /> } />
          <Route path="/edit/:id" element={ <EditPeople /> } />
          <Route path="/car" element={ <CreateCar /> } />
          <Route path="/user" element={ <CreateUser /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
