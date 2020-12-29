
import './App.css';
import NavigationBar from './NaviBar';
import Homepage from './Home';
import NursingCare from './Nursing';
import Aboutpage from './About';
import{BrowserRouter,Switch,router, Route} from 'react-router-dom'

function App() {
  return (
    <>
  <BrowserRouter>

       <NavigationBar />
  
      <br/>
      <Switch>

          <Route exact path="/">
             <Homepage />
          </Route>

          <Route path="/About">
            <Aboutpage />
          </Route>

          <Route path="/Nursing">
            <NursingCare />
          </Route>

   </Switch>


   <div className="d-flex flex-column" className="footeralighn">
            <footer style={{textAlign : 'center'}}>
            <div>
                <a href="#">UI</a>
                <span>&copy; creative 2020</span>
                <span>Powered by</span>
                <a href="#">UI</a>
            </div>

            </footer>

            </div>


   </BrowserRouter>

   </>
   
  );
}

export default App;


