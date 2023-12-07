import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home';
import Login from './Login';
import About from './About';
import CustomerSearch from './CustomerSearch';
import NavBar from './NavBar';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from './contexts/UserContext';
import MyJobs from './MyJobs';
import AddEmployee from './AddEmployee';
import AddDoor from './AddDoor';


function App() {
  const {user, setUser} = useContext(UserContext)
  const [jobArray, setJobArray] = useState([])
  const [jobSelected, setJobSelected] = useState([])

  useEffect(() => {
    fetch("/jobs")
      .then((r) => r.json())
      .then((jobs) => setJobArray(jobs));
  }, []);

  // console.log(jobArray)

  return (
    <BrowserRouter>
    <div>
      <NavBar />
        <div className='app'>
          {/* <NavBar user={user} />  */}
          <Routes>
            <Route
              path="/"
              element={<Home jobArray={jobArray} jobSelected={jobSelected} setJobSelected={setJobSelected} />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/customersearch"
              element={<CustomerSearch jobArray={jobArray} jobSelected={jobSelected} setJobSelected={setJobSelected}/>}
            />     
            <Route
              path="/login"
              element={<Login />}
            />     
            <Route
              path="/adddoor"
              element={<AddDoor jobArray={jobArray} />}
            />
            <Route
              path="/addemployee"
              element={<AddEmployee />}
            />
            <Route
              path="/myjobs"
              element={<MyJobs />}
            />                 
          </Routes>
        </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
