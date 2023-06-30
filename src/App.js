import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
// import logo from './logo.svg';
import './App.css';
// import { Header } from './components/Header';
// import {Button} from 'reactstrap'
import {ToastContainer,toast} from 'react-toastify'
import {Home} from './components/Home'
import {Course} from './components/Course'
import { AllCourses } from './components/AllCourses';
import { AddCourse } from './components/AddCourse';
function App() {
  
  return (
    <div className="App">
      <ToastContainer/>
      <Home/>
      {/* <Course course={{title:"Django Course",description:"This is just testing"}}/>
      <Course course={{title:"Java Course",description:"This is just testing"}}/>
       */}
        <AllCourses/>
        <AddCourse/>
    </div>
  );
}
export default App;