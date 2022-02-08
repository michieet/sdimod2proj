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
              <NavLink exact={true} activeClassName="isActive" to="/favorites" >Favourites</NavLink>
            </div>
            <div>   |   </div>
            <div className="navlinks">
              <NavLink exact={true} activeClassName="isActive" to="/nearest" >Nearest</NavLink>
            </div>
        </nav>
        <h1><img className="carlogo" src={favicon}/>Where Can Park</h1>

          <div className="App-content">
            <Switch>
            <Redirect from="/sdimod2proj" to="/" />
            <Route exact path="/">
                <div>Your favourite parking app.</div>
              </Route>
              <Route path="/:id">
                <ErrorBoundary>
                  <AppContent />
                </ErrorBoundary>
              </Route>
              

            </Switch>
          </div>

      </div>

    </BrowserRouter>
  );
};

export default App;
