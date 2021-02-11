import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Indector from "./Indector";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/indicator" component={Indector} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
