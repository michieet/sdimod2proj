import './App.css';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import AppContent from "./component/appContent";
import ErrorBoundary from './component/errorBoundary';

function App() {


  
  return (
    <BrowserRouter>
    
      <div className="App">
      <nav className="App-nav">
            <div>
              <Link to="/favorites">Favourites</Link>
            </div>
            <div>
              <Link to="/nearest">Nearest</Link>
            </div>
        </nav>
        <h1>Where Can Park</h1>

          <div className="App-content">
            <Switch>
              <Route path="/:id">
                <ErrorBoundary>
                  <AppContent />
                </ErrorBoundary>
              </Route>
              <Route path="/">
                Your favourite parking app.
              </Route>
            </Switch>
          </div>

      </div>

    </BrowserRouter>
  );
};

export default App;
