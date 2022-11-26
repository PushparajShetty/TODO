import FirstPage from './Components/Firstpage'
import './App.css';
import Main from './Components/Main';
import Viewpage from './Components/Viewpage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
 

function App() {
  return (
    <>
    <Router>
     <Routes>
                     
          <Route exact path="/" element={<FirstPage/>}>
          
          </Route>
          <Route exact path="/create" element={<Main />}>
            
          </Route> 

           <Route exact path="/view" element={<Viewpage />}> 
            
          </Route>
      </Routes>
      </Router>
       

    
    </>
  );
}

export default App;
