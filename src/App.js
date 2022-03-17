import './App.css';
import {
  BrowserRouter,
  NavLink,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import AppContent from "./component/appContent";
import ErrorBoundary from './component/errorBoundary';
import favicon from "./assets/favicon.ico";

function App() {
  
  return (
    <BrowserRouter>
    
      <div className="App">
      <nav className="App-nav">
            <div className="navlinks">
              <NavLink exact={true} activeClassName="isActive" to="/sdimod2proj" >Home</NavLink>
            </div>
            <div>   |   </div>
            <div className="navlinks">
              <NavLink exact={true} activeClassName="isActive" to="/sdimod2proj/favorites" >Favourites</NavLink>
            </div>
            <div>   |   </div>
            <div className="navlinks">
              <NavLink exact={true} activeClassName="isActive" to="/sdimod2proj/nearest" >Nearest</NavLink>
            </div>
        </nav>
        <h1><img className="carlogo" src={favicon}/>Where Can Park</h1>

          <div className="App-content">
            <Switch>

             <Route path="/sdimod2proj/:id">
               <ErrorBoundary>
                 <AppContent />
               </ErrorBoundary>
             </Route>
             <Route path="/sdimod2proj" >
              <div>Your favourite parking app.</div>
            </Route>
              

            </Switch>
          </div>

      </div>

    </BrowserRouter>
  );
};

export default App;
