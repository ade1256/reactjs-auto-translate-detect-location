import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import { listRoutes } from "./configs/listRoutes";

function App() {
  return (
    <div className="myApp">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          {listRoutes.map((route, index) => (
            <Route
              exact
              path={route.path}
              component={route.component}
              key={index}
            />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
